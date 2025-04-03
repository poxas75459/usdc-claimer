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
    "5bz6BYKMxmfa1Qn1W4fRdiUQCvdsXFSB2kdPTac6dKXbY686pGuR19aQRWoJBnvqf8WksrUgGx5F387NjChDzjiN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hP6CjhVbg2zzaKZj9V6NwgiEH1qE1dNXkCmpiLvNitSBBSBQMm71grBHr4nA6G3Pn6mEZeNeei1scXDodjDfN5e",
  "key1": "2wch3rNGsHLKTmY7oYoGqJ9p1QnzxBeF8STPVQzjveNm526RaVExouFbi2KPwKfK1svVvw56m9xnSHS3pvRMhotz",
  "key2": "3mbxPDpxogYSrdu2gyHcCRWz7a8jX19gDws7GAyJZEcqs29AL7twgeGMSqBm7ZV7VzTbDqH2Je4LniS3sTkvvzbB",
  "key3": "5W6F9kNioMsDoTK1avy4yDs6eLhKqhtBGGcho5VUKzHFhYrNSS3XZtbznG3qVBuA4NrAVW8CkY9x2yY6t9eeKkmt",
  "key4": "2fkx7ejP4HgEEh59rPfio53TzsZGrUfvwJfAgynWFB3ptwKFGtM6qdwtpPoYpsAdaGjAfbvFuQMMDtvn9GJF9RHB",
  "key5": "2yZSkUbH36M5rJzYgkTpNqNwdJqhcb9jswLFzMf8H4KVrXyoJZoNcFGJKxVVAV1RY5rWv3gyg5gALPkfkfQYF1AE",
  "key6": "g7ARY1ZXJGCD13FWEEDwRYeJfyTRifE53aEdqaKZwaU9JyZoFsf3uP7tpdR2MDywPUoK3U4FhKGvavG8vrPy7AE",
  "key7": "51U9efTDudKfrH1n94qLgkaEG4w89usnrb6G5WLf2CYivGm7CwnyHsmHuba5yb1Yh6CjRNfXeUPHFKVvq5eMfGpY",
  "key8": "8BzrLUYekXWrnpXgYumUK2sRPbCWeChuzR5zLB6Nxcr3L3RTQMDiuY5EWuS4UuFqT41xbY8MGSjMyQtFyMYFnU8",
  "key9": "5xHtbk6CUT5cRPneYukUJg7kpL2fPiyLK6WSr9v1eHyerTZzTLKbwt3S5ts1ZCkecGHGCfEyMD7X5DwjButkEz6p",
  "key10": "3XqDaXT1pHzNj5oyhZDMwW4c2WjoSwQj9XRDqU4zxeRTRphAi5TxNF6rHm6YcaDvBdqBn4KQ6ifLyUeR5yWvpCaD",
  "key11": "2MHp9BUm8AuKpWLPreWD2s5r7Xc3jYes7miuvXfyKQbv64Q275YWtLwJ7f8PQpkoDPfMxUcWvoWJDRMDHYAMPT8H",
  "key12": "3fDrLHrRfxcQhzwCS47ifh1P1YEDiSMgpHQRffXCbz5pUessZoMUrYdjxo97r6yG88M2b7TGLumaa5bRRpMpjCbq",
  "key13": "ABXYdkJ5c12Um3uMfLzLsGoUwcrLL2wm9Z6WkYtsLoFpdRVw7cePxuXVM7KmSToHCu35eN9Q7EstN5dntbrPnN2",
  "key14": "5HwHezasKu9vf4GMybTefpdN8wqhVg5mVmwmpMXaJk8Sx1LVvzYe1PuA3iaCgwjtMm2mJRtk9i9GgcvjzrUP6JZi",
  "key15": "3kFwv2Jn8dPDgK4M3BLXjGHHZvYSfAzBwwGjoCnKKzcEbCmeYxGVriXzaGYEM7MX7iMGA83qd3okaBsNYdH7wV5u",
  "key16": "5j6LQD7fEvV1hdEEzNEDKNTiRKmZHz949wCjTpfSmkKFHiWqbZzWirqMHrs29YQ2qaphHwv3e8UtZcDh13Ui27Zp",
  "key17": "469ZDWeyct2xroEhUsMG1bYuaA2Asb2kruYp99hCCTrGzaCheYrfdnKRMASxNzseoe22ugwKUXZ6eRkP4QQ77iPL",
  "key18": "5tzQVxLeEe17NMKdBTBsLPPKRRbHQ8tSRF829hif88431vCkStDtU56dHFRFXHsHU8zGFjN3YZPKUGgHC3QxQzAC",
  "key19": "5iwvYA13a7D7egXmAbabKQYXb4HCkYSf7u4GG164RJT3xu5Fjdf5FNzeYUazckkvRoeM8wYoBLkPJD6JL2HvDV8u",
  "key20": "4QRN2Amzhh3KTq3cAAtDJbSp56fZt7Zx8gd8hTfKgHboVfNeXYiAxdiDvkXmFwH8iatbKt2r1B8Fqw4SPvZdnRwp",
  "key21": "49oNBV46PSuipTP1pxQcuSWDm3S4ASLexD8jShzcLzPzw4XLLjwJACivEc51RoAUySnx9wkrgPB3kQqChu63fvHZ",
  "key22": "4KSPDeBQzv6bb83dxyPvZdqUQu4aaR4YDNQBMDTqzuQqkFa4MpgSDMaNPbNyzzFunvz2CzrXgeBnZK9CQaxR5ZMz",
  "key23": "2PTGWGtyFu8ipHbLQGMnBYBSqPmrh4qihEcsex9B7u5VvDfghZapSw34iULZd6y143Aros1kcpvR6vwzCTRxr6m4",
  "key24": "3w7a46g94n4SFnveHNu1xWt6D6gGTdwuWpZWm2RLYPM41a2AeParGUKdyHUxjeE6dfWsNJPwBhX45rBUK8qEw32d",
  "key25": "5ExAXtztiozZfRGmsqxsnkJ9LMGDZC4jTT4hZgu7RK9dwDDkGhjBibwRQdQJXrU5ZZFthA9QuD1FEWLbPARb16z6",
  "key26": "5XbEjsyw1aR2tmZRaWekERyDWXQn1bBSDW7Js9qshQH7zE9kWZFWDZpcpPy8GuXYSLTmHmiUkfoAYPvjGY3f7BuY",
  "key27": "28UsZWeUpGWZa7DBkDrj8LZxyqfNLYhRYDKqoeF5PH6CBGnxYk36rC2kganwEMequXnVMCekak8S9sFMUR94LuCv",
  "key28": "2uFja4oBK3XopLCc9YQYD8Qy77g9kp8fCRwikMWH2j7dUYoP7y6bGNNE7dfqXUUCA6jn3Mi8xDHxV4QwD3ZYD9Vx",
  "key29": "5mfu7fpSoZWcBtErrsQv9SRPSuWqmba2HjUfcWq7aqm3gZa85u1zs1ufbMb6frAUsADuuqsehghf6TNM3hFPbAJf",
  "key30": "39DTBqyH4jB9vUAe8FAMBiMD5ExNLmCD9Yfbn2Krx3j36RSE11K266RWvsBgnPoQBKscFYq8PNMNoKakMNTPwuye",
  "key31": "95yreVPJx8QmTEnbavcz9X6QszDqYEGtzYp3YPBQy9HPgewfgaDMPqpRpvJoJkxHQRpFqTFndVoTeaRbB7J6Dvx",
  "key32": "He7SKwM1DfNLWQkRXhi2Nbfcw9yTsk5WDfguxPG7UsKwrNN8yf1aGCFjh8q2d7v1iKQkfAVFDyFS5e3ez63aUCz",
  "key33": "2fcVAHH48VHJDv8suxQNGYrvC438q1QBT2RT8Yp5ttp7RURD7K5pj7SV3kCwkGwuBuQdsJbiiAJD8PT9oGkwJjkN",
  "key34": "5dTM4ubmJ9JG7fHJcGAeBUuNpPc31z8JQPQdx3R7Ed9rPcTCETpv7xLG6dHXAAkiSRR7GEF86rJutQZ8YvZsDPvp",
  "key35": "3WgF9ma7cwdKWusQGdoowQrYczfy6A92WvEaNzU4vyfy3d9GmqB6UBLqSmBydZRpa8QKfF6JS7Jf2xqpCG2ZXJo5",
  "key36": "4Mh2YG79KpeYhjM1akPcUW1T2W5LLBpAuJ5f3dqezpSb3pqGbvBaBDW6roNbSJDCCAzFU1aeRPVFixDfmqHtyByd",
  "key37": "3RyY9pVvKaBEeUFMZJRN9ueMykZNDM6XFaaxKX83GZg3XfhNHXYvx6k5triD9PzUqs5XXfK6xTPZfZbEUeEQokxx",
  "key38": "3ERVfU7zFD3KzzbEg8Xs5LCfZ4Ji8XCo9PaXoFP2KpAEYXnEHuYyJeCj7nb49sVDSFrsFmnRa5aZEXZLFrEnKveL",
  "key39": "kzj8S91pWFcMreezubvejS7srSJsNxctrPwktAsqcSac3oNCoDSHH8KPULv7JrpeVTh2AUYHRLg481qpB3kqYhw",
  "key40": "651jeF5r2nnudmKKvUWcX7iegfts2pJ3DvEaNUoKCRPd6D3BMZt47xchjf5MubnTYcBywi1463osL152m8iiZMAQ",
  "key41": "3FLHFU9fW1HASowSfem8doadYjK9nhCkJNEVa8KvCU6vBnSZJPYjCcqSrkmBWV2q8baZJzqCt7HjG9b3zDGZhLXM",
  "key42": "X39hzSaNyh5sK4RoAc7KiTP8JnNr6MtnRpPv9ZvdXfAc15cQj6J52TwUxFs3qBNPKiPh1JvTK6KwvRpiH3zq1bU",
  "key43": "2aiqsVcpYEUWEuG9CYrxiCspNhXZqWrY73CnDBUf4rrTZ1go6QnrpSjkMWXX8J4kYiDCqjFcLtVzfbDBSkPemyP2",
  "key44": "3zo7y5sXPAvtBAALaDmyzwy8p3Rrgh4cnZJdr3jAPKs6dUtxpjc59LUna2x9GPDPeBo8wDZq4LetyocuLQhs8Fzy",
  "key45": "3NdzFqDC8LP3gD2pg9Csq9FUFVmCye2qmTh4GVQvXaawREFoBosMMwSqcPX2Yk7WRGshjxG4jrP4JpaTXx82MDxj",
  "key46": "23kAukvFyMpx9z6GDUhBLFesptrrb7ujDkHREEDBGuU8m9a2ZxBZz9GwhqcQ2TSZEZkjQu5P6jYczMocTywAcUCk",
  "key47": "2Q6diWf4B39tyU2wk9x9NPQ85RmamVPR9UkKTpn2ACJ5RPsW3PbtKxTKt3awUmVvxhjzmhHMDJt5dq656EQ8n8vY"
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
