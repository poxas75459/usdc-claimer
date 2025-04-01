/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5GWjoxaW8gw7z56TLdWd1U7A3fyZqd6fwyyxWqawhcEsGrpeaAfQhBqdS1TJiTDHeCGhrZBm6Ak68CS2RT1cUTDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sc7bCzD67fUvoKnrHRRbBLcV586QVaAzM9MnPsZeKfyjer5KwDcpAfGd8mjRXfC2SRWTesRf6CpuR5infKGMygU",
  "key1": "2F7FD11na3sKmBfFDASRxjD9QUHfo92GksgxuLttc9ZmY3qaagcG5eu21h6mWFoG32WSHwdUz7JAG36jEYneCHsm",
  "key2": "5DKG7tVR62JZ7CyVQH2NXgGGyNLFPRtFGxwXvwGxxxaMjeadgnJmFVSmthAuhhTTkF46hwQUoCDikpraTGt2guQd",
  "key3": "4J74Uzr6XoDjVeV2zsKfXW7SEbPvFLHMjvFq9j1m3KhooGCFDBXjQVucEC8pHzLuZoSXSggPvbnADvf9Dr9rugWG",
  "key4": "4PuNX3aESBNGRziauUbjN6xeFQVs3JYi2ERb9oLJ3MsCED2y8cnrAQ7hoQnTeGCvafPQPtq4fqynV85ic6axVMR1",
  "key5": "3cJ836h92kJ6CYJKzv2TKDPENJ7es5Qnpob31G6RYGp3vWYvE4ege8D3cXrJwQfz6gFqBm554ie6Pc8roQvLCzRE",
  "key6": "4gicJjQvogLajA58RmQsd68YUgJPAnReiMysSUKWaiGNLkL7tG9dtrfjXzPr1mLKZK8pHUSh3Zgj6MSqXdKELfkp",
  "key7": "41Qs8p4n2zdUfSTfB5vY5wP7PKUKJ2UHYyjcRTNQAZpb4LxragTyb9xg2KUPgN6s1NzyYBBmU8SoLeua8Qq2xMyi",
  "key8": "2PXTjrPLvixnWcgvSRpzQvjdwDrFXTzbUv7pbHKxpbCCPzw6fJrn7LoYZ8r8PNQk225HgMsLYkK5nkwzYBivNn1U",
  "key9": "2pwWdyu3yZL9xRRyTq6PWWKGAuG9GxyVKVFfihJk7MxB6mWcRGchEtnGozFzZrLN9dmr15H3gRqjQat8fjst1AYp",
  "key10": "4EdU8Gyuk27xNa9PkPFoKeYHXRrzKuow1HJX1qCmdr3y6ns4xV1JvvqGbh3GJYRXQg9zede2NHNqqGUaWaKDMKoh",
  "key11": "4TRiziVws6JrFJemhU4qqyNpQd3zvDnJhBo87Kwt7sZcp9h7QEqBTEoEfLdfwn42N9BYPYfgF7HqxyTowthpf98p",
  "key12": "4erbacVshpY3A1Ry2U1ojeiA1BPaiY5C7hPm9vwCdZS5zHs4kjB39UcVxSRUaM2yJvF4nuKxs5cfnjgf44sZM6XT",
  "key13": "3f3E5Pd9A7wQQ6k1ChonRCyU3nw3G3Cd1PQwziRAGmxzKX85PmFmbxvLZNFDuHm8khAGqxbpGcWF22rDhc9kgzKQ",
  "key14": "32rjKzk1hXvre5Ej7sXW1mPhDYAeki7Y1jF1FKhkG5Q1xuJ7DMTC7jbppvQMXyJaLJVUZ9k1hquBboN7DUUuke6e",
  "key15": "5qNsyMq2SYzSdmUc6S555skq17kufr7YsJXGyUhq2wQ56eZRQDejJsTbKqcqwVoAZoXy94BHce1Lrv9ovF9ffdxj",
  "key16": "3sEoxv3BZVstiXTKKFFKLFvMzGhtpWmDKb9cajUqaPoF5dDPkzv1HuwoSTTrAP4EzUiEodXV85GHcfKxbCFCSmCi",
  "key17": "KBg63eMGu76YKs3BXc9zho2fUJQv47SbpvpCghVfbK8vQU2LL8jePJ61JKuB9Qda5QGCPdzmVpsGQUt9h4QmhC9",
  "key18": "4ExwPCFcCWriSKHxdDsB7vWao9yxhvP7gYnkJKwqgYQCK2y4ABiJR3vwxSMn3UWjsbW7oYS26vFYSesBCGV6Tr9Y",
  "key19": "3gXnVqneCUX8DqoZhNkyFkepaY23C43Z19UrcimDDZhxa38cyV57gS5bUHNwxGW7zQCy95hyVkUFRQiUg1ugc7GW",
  "key20": "48iJhZX1Nj3Jzho5hYvexUHop8NioH5yGYdFtdUXrJVsnU5KBor4NuaEPCGq1LR556dEQCvDxe7J9Y3AfXZvivoN",
  "key21": "44faqBKKaG4sZ7LrfmDd9YWCn8C7G1Mdq63AXpxee3zm76NM6zdSmPLokzCFEGZtKsCKrj3AReMDTMwKvUz71pYJ",
  "key22": "4jPG4ukcPiJ3oHdNzRt4jh1yzXQrwFCQjVGTQQSukDsB54A7jdkFBdJYr7BdKhs736GbD8SM2kExHeJ8ku8uyi7g",
  "key23": "5d69DE2y5HLcEfYpHaMHMBKzq6CLMtsvG2HDb5L9mVqZS9GcF1MH1neJx2qPhAaaU3MaucAwjr6kGKLcNAvBdZdE",
  "key24": "4fd6mgPs7YhLCWu2vrEK5ukKR41gmtLxrdGnVBHPEdFkJHnZgASnh4xAxyt5vHjni8zLCEtAegULdLd7vcwCsBwP",
  "key25": "3BhrnuDrRi6vf1Tn4zPPGXirrtnTJnMnpTtxrvSipAbCFBTDPdd5nHiGe3RjxDmFUmYfbygVAmkDVUCcA9JBj5ak",
  "key26": "5pM8Ej2tLVHfVT2x4KNVf6tcor5g7hDdfb1yzQHPUj9cLnkVCagqWW9kXbXifAMQ94og1zoNePiBWnqv9J4ACBnd",
  "key27": "5WN6JtPgmTRozRNeAFjA7bfqKKwy2fsDyhj5zLwPeA8dQg5qiN8CnbkPenxEgtaKxEkeHeppBz3poRxgKwq7hZnF",
  "key28": "24XXNeQ4DUBbqePMQX3yWPUpt9UwRcSXLu8TkeHxi633LoNP74rHqCaEmYVcD2UTkWHq8tYC8mQCSGxRBBruqMtc",
  "key29": "4e9oTHuprcDs5mu75nofmekAb6zwRe5DgsQV9sA8XEWtDN4uhfqYfYcsXpWgawWPaZbCwYRMVyX8S7Q2WCcHCtjP",
  "key30": "2M7eZ764TPyyy7ZjUsxo2Xks8EAa7YauMaSfcJmNh2z7JBw4t5Zfu2hopc3bvmwxWS89dDYEtLw2NV6Q9kXoWFxe",
  "key31": "5nCB4cnjfTRr9qysmAkr2AsS8ebMaMU7C2bhsbKvHopdBUT78EnFew4R1vG8B1GmvTxY9GPB4eEtoT1AZkMpDngc",
  "key32": "swBVdtBkw5Agb6vSZpzXcJCyax4uMixvBAArP1UfDyS1m3SwyzGnog5q3BbgUMS6S8gcfDAa49fSa7w8zJ5JVwc"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
