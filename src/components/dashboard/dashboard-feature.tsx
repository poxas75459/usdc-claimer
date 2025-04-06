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
    "2Rq9EFByfdgrsYiWFkVmh196xkfgdKkdFaSw9joDQUFhND72cpYv8My24oJkW38f6SMmRcXSGH2LzMZxTXtprvo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BzZ5mMHApZYDGw2SD46oBGAS9ukCx7eSVkfbmGDyjf4qjhk5frro24cvCyy6hhZaeU4qZVEoyHnQqdCYSp7kono",
  "key1": "4Z8Gfcrknp8jNvUM2pDFns2FyCrqR8rd5va58xnPYfNpDnfjqHE1vMkdsXivmSXDS6H9W6JRoFgCnR2LLGdrMzZU",
  "key2": "319Va374WUmQthZLiuQmgBFJALFr1N8PjGX4Srg1QLoyD7CKaABBTdUBbnqbqYCxNYxiXPZ8KFE2bns9ArWZm3ka",
  "key3": "2CQPtcd6MqsoKbRCwd8hVPStCxyLU963EvNhH1yyhja8tfg8gWy9HQXBoVRixB8Zau8tmfL2GqEYMW7EnZHk1sGS",
  "key4": "4Jo4NMh3nfdkwDo8fyknDEHA8nRWqzKh4r1nk9V1XEMvN5aWdd4x55yGoF5mFGeXshbPkp87EENwqyeeq9BN1Ziq",
  "key5": "5MzzME4vMhq15mi7dRTv8aZwwK17VT8DX7PJs2JXrCPpzdCrRgmpTVBXFbpRp23m3PPoSrdGgatUtTwfMqQrDEHb",
  "key6": "3ZaooyNnPgFNr85BGMnYZHYRsFP3H2V8GBuh9KuJW1weBDFaanXLz3YrDu9uKEjFKnkZvmy9SsMMJBNCRCUKpJDb",
  "key7": "3mRJPUYkxumLJtwWwKD5U3GHMndFdeDLJZdG86Y7VuwAVS98c9R5TiEfSMEBb2gR9w97PKU21MjEXYvLTHKaRaBT",
  "key8": "5Yu6UZC4dGEidoNP82WWZSBGmeGSU3AHL2ay9NkVnJzFYnZ1KHStaoqRViEChq3DdWYGaaySy7DopRR4cdE8JRag",
  "key9": "2Bjcqf95ns9X9VA9VaHiiaUNmL6s4bAY1H44ACjwrEwXLeUy58SpFoaV99MAY44MS7FrdL8UTo3RLne4n8BMaShx",
  "key10": "7s9KTXnH58ui8V3vTbZRawgiYxCH1dBnuPpfbTpivt13m9mvDYoZpX7DJejUPQ2Zg8p7EL8mZRWXeMrHXkUX1n6",
  "key11": "4Leo7Lau4tvBpqYUjMCjtVAXv83CW47zmNexX4e1sgmnea66w64mTebSZiNzuAzZW9XJ82aCghxA94HhPSYpkgpM",
  "key12": "5C9JLnMYFkd6Lpned15w6wQs4mZ7wh7vpYpxbVHcS6JtgHkVFTaRs8TsEs89Jn6pdPTHtsC83csu1RcpMMtNPf6Y",
  "key13": "MdjUCpBnrMFzcDRP7zN2Cz7D8oupacPpfiSq78CYt3AYb2UbBNo8u5YsSJztaJoAQJsa38aXSYQmFDi3LSWXnTh",
  "key14": "5oTfe18ySwPuYdy4Ayz61bqPsjUTEJWmmCBTiYGm6G83hkZvDVsvxbuFXuvav35m1EUAwGqaqNW1dtrvufr4qqwp",
  "key15": "2PiwkkZrtaDQeEGgTq3jHyfK6B3wsjLJfLA4br6S8d2w1ieZVxR123S2BCUUxYxcqHuBhcZeooC43AZN5Xi4ZmKS",
  "key16": "3Ptx9965DoRtii8sgKoUdoZexxX4AhtdaXQg5JMJV463rLskpipw6axx2pk5JgRD3BDMArdSYfiDwPDVMSaFPVrw",
  "key17": "4HLGrPpPVoZboe6MWnGEDPXE6DkJ7Zih62RcwZDXiTSip4znNk66nSzyrGV2zBhzDDM3RxvWcVYEDBozQQU9V3em",
  "key18": "37N75KjEUTqecAY5EdLcHasWR4bf4ozu3RzbfBnivhQur7o2a2PuU8bvpCVQJP4yHHyuPoyPWv36K17QMZAbYSrC",
  "key19": "3b7AguBC5Zbckmm8nk9Z6qzVGRcgVjQ5id5cZGfGrdNBRD2kJnQ56JUzk4X2cwQJtgC8rnaSkNpNyECpFhUxvWqH",
  "key20": "4frnf8nQijReJJzrYKWdvXWy2NKnebC2ozjhCVUQa1cBEMp6XuV7yL6FBtMfifLbTrKfNtynWbuPUBZncPFnPfh1",
  "key21": "3XeAymGR8L18hZSL61kEmxBWvwMJTyNStNitJbBcmtFAtoZczkvZFpWfeK1TiXJ3e6Mo3FUB74orkaQhUXn9LQwt",
  "key22": "5PNnTfssUpAauyRvf9eK5wmwexGAwxregpJUAZeWrfu5LHqK8LDPXPRNc2EK8pgnmvq8EVPLJdwAyzBsnfG1YUn",
  "key23": "2LgJEKMPF5CQL5pUvEs6hZFG9V7MgXanJ6vq1jaYHfHzXkcKcEvbvBy4hzEdqnWGUTHCnQ1m1yapN1vESkvQABvB",
  "key24": "41zTBhvojkMekzHLrsXUW9yKvXELvcQ7jpbdtErNuipNY9xwQMRcUThnwQn9NrKAidpnh14PBRggzDnoft4qtrpZ",
  "key25": "4gBVcUZ4MStQYBJ5W9JNg7XTQLYiNHmeSRdDATXKezzcWYxUpKxsRjg1WZiuRntgCZpn1LivWwZzQrxZA4k2hnLM",
  "key26": "3RjZDTQK2q8hP2Cp4x59SYfr2BiNFX8BMs7K9RdWxRS1oaUeUFkpoTJ5Q1TSUrUUJvnb8xU2ipgqBtxNgTfcw4jG",
  "key27": "VmMja2rs2S5ZyeGFQd7NoL4399FrqnfxBnDTpSiFHDWWhVC3snp4XhrD1RTAsmFFiUPRqmjFDFSvgeikSj8rAJv",
  "key28": "2Jg8CuYDt8KUAXFMVRV659neYCjx8xs3xaywGQRdXKPcCe9Qt8Y9ueTgtvsmGSJu4buM8jrqzUe2jzhmKx8VYZgr"
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
