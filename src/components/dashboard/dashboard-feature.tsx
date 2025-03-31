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
    "2mRyiLHiwbwX2N2vW46hRHK8wSXDsxR3jhzgtZrsPhBx5uuyYyQZ1rW9kmhZnUujnGztoQNrvWp6VE15xyGpr7nS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FFycTtBjSQ87vFm5YwaAwMb7Q26nkxt1e2USwGkYPPgSXpcbXfV1bhP6qnxPietQz1uKfurUmGvxXTGcxCdqmVH",
  "key1": "2sDenQ4EKCKgUbC4QHg4nxs1XyX8GMZ45Bu8a9aHJEezJuRRSWHwbk8XQW51US7jSRQNpC17s7kBgmqb123KfcEC",
  "key2": "27dEVu24D8rnZEx9GV8wQawBkdco3zvzwgKcG8WhSMo4JwzEGqhuGC5wRUV6R3WPLycfL5hKxKzyWiQvuJhUkwcM",
  "key3": "5D9bwxkAkv1oNMGhHwtCR1G9rMjABMSFj5JVSeKBGUg1j4VSovN8N6csBz42rxEiESZ6zA7YyKcYWXgcyC1mkVe9",
  "key4": "5PbTymSKscAune1UGbncbnXQazfVBGGV6VdtYThrc8VWPXDZL54RLWzJ2yvtsSFQSVV8weGdGL4qte8CRYzzp3z3",
  "key5": "34pnaQW3F5riPZ2ehWwh1eTYUHUs1EZekbrAmHxDoU3QsdmPTUKuN4xE1awWytzGB2pJXdisEyBXCj7XHbinXn5E",
  "key6": "31Gv1yBTacbmLJrQAYK9YsSkALxyR4kgFjNPrNsHf19Yfw7cNfjMacjwbX1Gn3Rbi4PEwBd55vVpbYbJxv4YsCb",
  "key7": "5WFPfdVtzV2yqucm1TokfiQyhjj7SWJnMP9fHhTXAma4v4QRpwEUdHkohR2Amm96wFXxmkCNo3CfZ1Ap9Hxz6VRY",
  "key8": "46NwZVTQtukXgajDKvwYKnwyoofFPwAJ1qVo2rPiXFcLUsa5WDhAUvbSqeYo3pN8haK4856EbpiD1NGxsWwurkM5",
  "key9": "32ZQQYyPtw8ReAWWLTo1m6UKcJoZgwfQM4qB1RiYhq5i1sx5yFxaJMtUDQe1fzE8q16hqbkmsefHuwKQ2F9p4bWS",
  "key10": "56seaQw5xDwaMorPjwp8BjZXBTgFVYz5XrWNPj8syNJDGE2AxndxstzuHYGRztPAuugSaNz2urS4T9ayBxCUABFU",
  "key11": "2GagnXcVC7GmiSZfqwHRyVBmwPJHBr7rXF9fKPGChutvRNVU5sd5JTbcRLkmMXRVNAwBrkRgBaWpiAwPib63HQ1B",
  "key12": "626Q6WQ9yxUmPGuC7E6XVP3WfiN7uz7ocPCsP5GgWzYZe2rDyXZDZb85xS6xAKrvv8ufPtj3F8YRXEgzmsVKsWz1",
  "key13": "5gFxoRSeNmKoBKJBABFadEYeNcVFRhY9gPXG7gPL52e4GD1LWj3LZCQgyHoienQo1FUrFXhV7CEfdRjExEEqNpzn",
  "key14": "5smnr8svJ3h5m3CQ6amavxRw8Zyi1SyDfG7XxNY6nwyNaibQfZyrxrhFmvjUn4DkhRV3Q8aYHzi6ij2xwxbvhMxc",
  "key15": "4UJCvrr9k8kcm94S7frWrjBMsrwgdrBW1NsMczFDSzYySDPkCW1878Sdn26dM3dcdRfzjHYrvow1EKz6mpGTpJNS",
  "key16": "2QQipMaxH7Ro2roKNmmmXDgNZWjvBRrgJa6RoinpwzoeghPNjzEn3dxPnRUtjTWPcPgptJpawDLmgP11cywG4kxw",
  "key17": "4Qkv9s66pZUyrVVx1btKVj99Yam4uoB7YAjAHGKgsfFX4fzpgewdT8d1gtZGNSnjNg1GU8TVHykdKpm9xjPCyD1Y",
  "key18": "2d4SdrL6oA3kq7zwqjwWFkauYsutsZwoaeuDswcCf2shu6HFpusXSgupVUSJ6KcWqRKfb58cd9FgbWxha8WyBm9t",
  "key19": "63Pd5VxgSss655sk9X1UDuU1yL7KydfdLS9GiZ382Mgt2d73syC4RrCCADWQCh5eUgDVJZL1j56ZxGZcsPLUU6sH",
  "key20": "wsdwzWYpcGf36XozxtVydTtsFNZ5ffPvZdRK5i9mcogtUM86Z7mFFuA6A3nQzQ1MaB9NFVMsLphy1xecoDofhqi",
  "key21": "Rk5f4vukKdJVVyWdAprDfm59dZYC43H5uFWcFXy4TaRCNa36CjA2LqdtagL6snzjdYL6P9VKc85C9C7qnY1NVfg",
  "key22": "4Po8SwZDuGLFgNPCyZdBhXkjUh75FrWMmf3u5hby3d6gt8bMb9m3Wepb1ahfrFbyXopFvrWcNTUj6NieBiMqqnx2",
  "key23": "5LRpuWRj8yfDLmS4azHiNNxgVSPma5VeVcNMQBFxp3TE4yZDxHFJtB8WNHb77oqfDwg2NNWh3XVcrAKcESgV5Fcg",
  "key24": "3Cu26YXF29iLoybcsn868fiCSieV5TKXX2bgxqVo9J4SVt2JBGZRXdfKaSsMiuFNvP3Sqo3dx6ugS92BJ6o8d9F5",
  "key25": "4xqbTL2B8LZjDRrwKtPZYRa43tqwM5esHwLYjRGVGLCbMAqqq5iivfn2oA7UDRkXA3Y3GiCv4ayCAPEGohRniQcP",
  "key26": "2JU1hMtMacWss65CCr3UVQCMCPSEqVnTGb7kdhtW6hU5YNsjTUvQqL9xhPDDMfpNJnNjvh4F1jzaFrMnNe2t83cj",
  "key27": "5VJiGNiR7RvsniQu2dQrQXtRBfxsd3CkAPiH4LndQ196cXoHrzs2jr84J4SuoB7rp3u8Ju99BiMXHAJ8f3V8AAYX",
  "key28": "MGJuJWeU29SHsHdg79KDjaTnx4Bu19cJvPciKfTqScikAQV4eMhE1HL6Ft6S8NvM7qdNTVum6jJrj4jHtDiGEKF",
  "key29": "9gHm8D8HDrv757p56DgdD2nrenbi316pMMEJoUr1WZxbH9Vb459fCPvR9wyN5RCDPUW1eF8eQpa3QT67NwTR4r5",
  "key30": "2bMUJ9oDNGK5khhxwjPVXBvj57Ld6NMFtxuxwicN7TyRsEqKEemZz7NwJes9VAgkq4QZ4x18ENLPN7ppkSUtLHwn",
  "key31": "4U5t96YzRqDjXXTFDN5qasLV6g9iAv7mKLs8XecRDMF1h7Gtv9Tbui6ZuurDCtAWpMrFEraHoS7XRYXMoPCBPz41",
  "key32": "5yYkidGorH3F4ZfBx923sPoswXEdFK9nC9FHtV5UDZUyDX5Z5xd4FhvWqt21FvNQoRbQN3PRKguhvMB4XTfGtyt8",
  "key33": "5NLaTgE4Tz5Hfo9SVuqA48hLCAu2aj8pvwzbLussP1aE4YLCUm6ecFiqUxgKD59r2KxddMir9QijtziPXs9xCYoQ",
  "key34": "5okzhvXjYkUK1u2wRDP38C6EdMMp9VfA698VpkHSQzgk4x9cbdv3AiVPJYBs79xt4AEwFUW3DhnKoVW5mXTVy3xX",
  "key35": "PXhU25mukYRADCs1XZsADwRRg8rJEhP328Z5ZQKzvtpFGCncpJuehp1dPQfhe9MSPob4AMvVPCcVHmkGrtLzEm9"
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
