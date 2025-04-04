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
    "4wdv395MLstY1Me1iHYQRM8yFqRBSd9ixzTeCPvF5x26fgLH4SApotRpzZkfaPz2CoVhbNhMBpkGCWLEoDJhczkA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mco6sfMD3fLMnViu84DzbWp7VGYknCTciv56D2jgQi7RKWtxPCyk9yY7uAEipS4Q6PMvuSAz1zrGYtkzexDaw8J",
  "key1": "5DggEJHrBJMjEaFDvrybTWMCLhgQhHqHiCnbyk1DxkmTtHSsc6TfVm72pJAq1zv1xDY5QH2oQrsuR9CeHXVY67tb",
  "key2": "Fs6fZngCfqJmZnhs1GJhXahbJDyVGH8Sr8wnaHhk4hyDqwh1j99EaVzENep88f86XXdwiSjCww3NxQyHD2HZz6H",
  "key3": "4wLV2omYr65JVEfokFeaM6EcUW4rSujBdGn3GXegiCe5C9HMx4rMUDSBitd4ap3nZjZAnctdPz5g6cJhEeriEksL",
  "key4": "887o9H9wrCAuH8a6jKeFf23rq7LyGmHHMxABhmeAaG4GXPzcy2VxWF8W7WCN3J8yKqZuHy2trGeLjQszGmPVfKD",
  "key5": "2dx1zXdeqXVriHViRe2t1jaX2NeVzAfvyVCmLzT7EovMbREDRst27jrByUei82tXh3WSEX6foKvryv7vgdzLudSY",
  "key6": "3ykgL9udoFrhPNHpCGUT97ZcnWUibts4cV5hCi785pSzN8K3XXJtY1a5FiXZY1He4wsobNReGnKiYtCPhCHkf2m1",
  "key7": "aGPZELkZpRCuYhsQovFYQM1mVxHCwrgcYrJF9YFfWhz2vAd11sm2evNNouW5cDcCWry9YVKShF52jjTaGhS15ZM",
  "key8": "5Y6dhPqfWbtj81sGB6tz1yy9a2fRNeAGwwJkzN8TNBHzqHYCk4Y5CaD3XCnCuoNkke13RDymFPeKcFuRLxMvcbb1",
  "key9": "3qsJumNWy3GggJm4jzJPfKNVH7Z4ApNfjNm3WzxF5EEzEd3TsQHCMKj9S1xnAdmHou7MfPLwHJ9Gvt6oyFU6y2op",
  "key10": "65EspP5LSvN9mZ28GdT4HVBFjv8xxhyepJhhJ5H8HfSMNhmeZoaBaxkWdNY8giwgdpf17gLpkhJHvjdMNo35S2Cw",
  "key11": "L7j5VLe9z1Nniv3B2ASXN65fYUoKKUBwSZXpUcXFK1epWFFkP8gcFkNHHM6iDdddKMyGnxBtvjYUnn6kxKatEdx",
  "key12": "38imVQhBCdMvep6q343XdkBamEKA55VzfoSJPvqeEeuerYGzQVveBXfYjcdUEE2dQguDz23QGveibuDFRim8rtQd",
  "key13": "3SX73zCQuJniVkcmFtCQHPYaXxKhrpeXJPDxQwupYu2AwiyEwKFTeF5Z6BQewkskm1RSWGskDi4vdM2BBSkVngQP",
  "key14": "3ase9sgChQDffonxBMSJwQSRpTmwfx86DmiYC9jsjiTULDagTJb7AsNdGbkZiqDzkRQPQQdLfaTrVKYYe8nG7Vjw",
  "key15": "2PLa5jfUSkfprVxk6doEdnb8vgNu757VC8pfzQh658P4v2iHvF8G54SCEytKVS6TdDieTXrWfosm19QX4MdGWLR9",
  "key16": "4GGPaSbe4omWhrgyybPtX9mjpkkrRp1aSwrPWUJfrSEWyxddBFRZUApLWF3saJvWD6LH5n3fN7By5dt9U2UkM1Ds",
  "key17": "2kkPbK7DCfJj8jZjEPnvJJyj13nGguLppeaXEbzV4DsYyBxz8Pzjr4k6NFnhwNXumuhi79ms5QvK3hL6Qi67wZED",
  "key18": "352kpjvvkHWcfXkW9WKhWrBayPs9MbqwgaZBrbgRmJhJ8mqzS8xy7mb4a6wC6e4BcpiF19XewH41jGTiUSwirjnV",
  "key19": "4soTy4Z4m5sRtnzVzZseGZbSUpD5neN6mUk2T19X4Fn46WyZ67ZTWhUXhk5kTgLqCtDP6e6dqnDrcd1dXwToJuNZ",
  "key20": "5Ay3AQ7hb4Sw3kJ9Uwtt45XhBrVaEokNXduUmkqi7ey57CiaEUMzHx7vUVzCmcTWguKxnxCDj3mpMNdkktFS9GhU",
  "key21": "4V5xYpKrDMizRU8wUod5ht8ks5A6mAmMo1UGGA2SxAVuYDFebjugyd8X9h1J6PFNbPHVLXVE4JyTGdm5HYcsx5Ed",
  "key22": "37CtvbhrqtwnUYhx8RoUgDCzFgGiY5pB6VswEVmmGNfZFGm2uJHCK7gEzMasgeUVPwdY7QTMD5nDcDo4AxYTCWm2",
  "key23": "49UTyosHx1vfhRxyyznLC93uuqFVF2ffcGTtherRnKVvGvb32d9EdNaJmrjyBAEM7hAcX2bqFFafaYgeTNTZyRVn",
  "key24": "5PbBDWEFR6wHJ9d1wZW1ZoTcP5XcEez4JiUopzNXG96TP7JtBsqj54pFnWASQgXQ4PTSE291nQNeksQfBzUXisDd",
  "key25": "qkdHTdaUEbRdTt2QDPcXKj9XkqrdKtR8ACsuycLB8CWBYuTKkFrtj9NfCuudsSDoxJtXZHHuzf4gJwtG9mrY5G2",
  "key26": "6xHS2XpGFChXHYfmrHeV8VK1MCGBeufnfeG1EfZwRAmLSPk4muxrggimWT4ZJ6fsbZTTgh4AP1KqJHqbB6qyU59",
  "key27": "vjvkyfP6P4XFAvRAM8is9iTyM8SCBrdZbPVcUaV2MHpzDjJVevAc3VDMtutKvSFkt8Au8TZkj26bpCWfvoUcDkG",
  "key28": "2gaYMpgja9VAiYQsz9JQ4jGAuM6sokwdoyaqS5J7CfJwxUJHhgdKWRNP6yi7gatm5rwJLakQJQ97gJm5xFX2eDUk",
  "key29": "34ge4rvD8HjMeVyp1xcgmwKhUC6u2tmkWAJFd2eVD4c5TV7jT7pQh63cjrsnhUcVcfCigwxKtpALXrMePbJbsNuF",
  "key30": "2FieHCLwkwq37dTghzqzYxDUK3nbWk9rsUwRfkLemLnfPyYAhKtoPbXePy9E1YULLBt8zHFsAi9gaQEKp1s25hrf",
  "key31": "5hd1tioTvj5ppEmhHCxKC5u1WskbAPKGuYRDsVJeDSg6t1Rcjvi79j2917Y7Kz9EJvw3K4DUD5uVM6ckGXA13FKN",
  "key32": "28Q4Rdi13aDo8sdX3TVCpgBWDQmGxkhtNujqCUdSUE1FihX14mfsX2s7rKoCrQ6NZn1mzuTAWF8ceiHUBUczwLev",
  "key33": "4ki8qFh6AHFjx9vwLV38tnpZgHSUn1YuXcJ7UdPWpgVjn5XDqsvnXhqFsi8L9d5Vu8zaqLScF48s9773KP8tvo2P",
  "key34": "3qm1jRowkC8i4ja4MtzSYdWba8n3VexeHWV2gakVMBcwR6vT3j2Bp6osMZ1gdK55YZUBDU7i9Fnc9xrC8FWhnCA4",
  "key35": "3gsruHrGCfQs5ak6Q4W9WjaiqN9bAJi6PhvseXj8gWLuP2jPwjmb4WAHuzWxnCV1sbnUNTPYWr1pCeRCiK3ep5pP",
  "key36": "2RneZn66nFyuHVGUCt4db9qM6yzt38ynTLbSnAAyyunMopz25ZDi16V3x2x3JiHvFXZFFLB9g6A2CMFt4yYWxrtW",
  "key37": "2nbPia7WziujRuxpH9q3GbcJphb9eW8hXi5yJRi1EFxjS7n3qnCH9DNcLPFwQg8o9FPpdr62bFeA6rkF3TRJi7cP",
  "key38": "4z3VjkWYV1f8pgmzCsDvob5poJhDj4F3JZ6foxd84TCNTbYBS13vqSNX4X7oJA6XgjWWXjp5Li2R2spTCrKRnVd6",
  "key39": "92EZ2paw11rW2gMGDiQXBnEMHySc8vN8tSwmZnF8urJ8vb2XxSsfRpDzPPdtk1qBNJkVwPnQ5qLydZ79n4xaG61",
  "key40": "3ZA4fz8Xb9VaV44RpJ7tBQUcnuDvd1nc9DjR9VwGZALmZcvJorparQjtL5m4yQBgLPopFLAoRSMekAA2wL5vb8H2",
  "key41": "2ccqycWSknWcceKfiazKmErSBweXmkbQ2PCzMo3dFesUhcBRDHTTZGFgmSSaPb6rd4eanmfkpKDzAkfmqoBqZ8yd",
  "key42": "5DeBE65sUWijaiAExSa6xdGvGqr7kjwedQSU9PbXKtPAUPjjfp5Dcagv4qQD54DndTBrA53gWGXmjXfKfUn7qLbw",
  "key43": "4Yof9SnHyaCwYayVLigd54hKgf3mWJt6Jyd7DFTyqMy4gTz4QtqASNfkTXJGxX1qmoHGu44wZj2Nvasase1UA9PP",
  "key44": "3skPybEVaZdpHkri6AwH5QfEQwENpsYSZxWpY6r9fMq88ssRhbRacW5XPHDEm82Gfd7aKEub4hhnLb3RMT6BfrN1",
  "key45": "4MqRjv9KhCUGi4Z3UEz12SzjsNUh7UUeaoxAnW2SFiS8RMifFWVyn8L7CmymPzfhDCPyHm2aH8DxxDaT1whHd8hy",
  "key46": "57mpsEWhUTbW8LyAvS5TKwMEV76CoMA6innMmp46APX2BT83oVMSsPL7kMxrB3DNx5zsp1USLVPBsvCAnRkeL2P3",
  "key47": "3rW5pKsxexBSVLQeurQPSuT8UeneyofSVv4pF3cNDaF3mu3kvYiWYYTYkE9ggQFtSA5UVTWhH6hmvnH3MMFN5c61",
  "key48": "4DArMeVivUn14qqESQHXofWR8CJ781qXT9654qV4ssnFkQC3h2bLVb7Z9h9aKCxVWHquXYfhwKkqDrWFDpt2HPYM"
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
