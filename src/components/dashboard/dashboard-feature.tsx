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
    "5otfbGCswun9UxFRQLXKTxvz12gFTbvA5zeFj3fWy7wJYkVE9fieK572eGk5Cao2vjqUf861QH1a6WbEtLUc6nND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SdSZq4VxTtkn3VnXUaSMmM5aycWFTSyeesL4U3MJAmd68Qo4n4DEsvy9A8Hin4c7DXLGae1PqetTiA7cSk2x3Tv",
  "key1": "PccK4Wv1aRHoTDFbbNvX2nz3nn8WZkYQdwSmRoSPyoMxtCavTSifVuqWWdXQFgxPMSRQ57EX6iJC1kXPpN6Hkrc",
  "key2": "4ntKwzGnMWdgTwuGVxVvduMLD1KkYyfmhLY2DV4hiZgLTomfgAPy6ZHKjLUgkoAYr1hAxbV5bq1UTA7LJiV46rVq",
  "key3": "3BWhRxiRFsAQKrNGofVYXikkcCfcpELMiJM69Mb3mSyN3wvTUV9cWMZhxY4VyaYEAwvXwTVyNgVTs58ktUNDE6xQ",
  "key4": "3Gs8zxH8LTmMCjFRqwaqdPeXChjSv8x9gWvoopJXch8EYw5VH3zAK1Thoi3t7peLNz5RCGFqB55Mpj89cRWySFWi",
  "key5": "4CWpJ5594ccjXafuiJPnPCdLVqKcg9d8QnwCY2tcbVNHPU9daxbLvTYaZ3RSc8tRWXksdD3XxkQJTVEwZN7vpW5U",
  "key6": "2XhhVs99mhpgmabEPfHUXxLFoHgEYwqEGLYGxdLAEYBLS12mmWPH9D3qjU8vZgNrJJozQbbTSeZaw1rcexafm4c2",
  "key7": "3oko8SZ5N6Drg4qSYjLonv2APuqPDNQuMWTS7CBUB4TwkFCvkhqC5n8fDEAU6ymt4qSh378147LCetNY7nNQ8RKf",
  "key8": "4LXQv9tj9dfs6wNHR7gQHp9yMxLLnsqy2ZGNLTb8Ao56ksoVnVqdsCf8yyR1uMjXdM1aAqBXpgH2CFxxmmQdv2Nu",
  "key9": "3KS9uQgKjN38QfqUNuRDQ1fnj31PbtiZasq5QrRB1UdgHeLSFPwnDRhGR5G9BzVKcrLzeg9e4BWwta4xo1cPNgNb",
  "key10": "3tVptFQ9hbMDy77SMHUaN5Ncw8Ugn1vwbyHjm26zDndmNnEMGWuMMatdwH5QTsx4959AfpWMhsmYUzXCfScrGG39",
  "key11": "3NHFefuwcm5ztunJuWRDtt41ZZx7wYnyxA2NhWLbs6byMYca7Rx5iVhxZH1AhULofMrUdpDfLczZ7uCX7XiJWGGH",
  "key12": "62bq3CmHKmpvuYZKgDBRj1QGNRfvFRAr1LWFeTuue8YLcBzjgdSFznEtV5LoXnKzsztxaWYiFtd7T7sT9RoKjaWR",
  "key13": "5WjisWdvRrgdn5SVPnqArp8gVR741iYbZE1ubbbqviqjuMbez6Aed5bTHkaLg99f7NDaTLFrenCPKngBZrnDNREP",
  "key14": "3BwqtJfL8mtq2i85JY5jbBvvQzPsBgrKAv3pdcpDAEFCcBtn5eK15h5zeJsTEJb76oLbBRtv7DQtvqbn1G3vmPRe",
  "key15": "KQTaZcKogfaV3A6WjHSeaaw2dPSjvkcbW3FGYqwxiamfeAEaT3372fb6KbBn17JtZ1bMmLLSZtJyMfWNUKMtyaV",
  "key16": "penwP82FnMTXzhuwxcn8rCEiH6f53bpxeRgGBreNavENMEuD2s2fa6uDtNmbXJshMvc3hesyMd37iJYb8FzrFEY",
  "key17": "4fXSevRL7nCoBX9TVafCdV2smNh3SeCfHy1GYNdeUmuTi7DbGKvXF1PUnvA5UvfMdFDDcd3VpLrrQ1aKSCH7f35c",
  "key18": "125yK8yBqJ2mJCu8ZGNu3TDX7DVVpvf5CK1zGXXMbaHQMBcDy7cLKY1BdraXShjmm9p1X4qaeRduVA8sboivwyx",
  "key19": "qJ6FVf41w9bhzakGiMsWVmSwUpPDoTqogf2kVbttbRLgzXyeSm5UKbVEHZPsB5934gWu53F7T22zSHgcTzAExfL",
  "key20": "3A5M4Xkz2zs3oYXQ3ci2SjqkmAzFmRm9iJC9KdsCQqJ213m8hAsPbNhBinXdvDMWZJyEsthn8sH3Stk6UF8Yiyc6",
  "key21": "27U3C8rZn7B3ZHoBcxaAKksHTcwcUBFZ46FZd2VCX6mrfejwPvMJKbZPtKaXC7L27Eqp8JushiTTK2ZeutfEuHxt",
  "key22": "5zrSkw6LBmauq8T1GXdUm1qqLvennyBEo821buNEhSTcFuxz9A6N6qMenSnZoMNmk3dmahuW6GntbutLn3Ch3d9N",
  "key23": "39bGHkfTLB2gmyzxhLXsFqt9iNCnGLJkXHYwAkoqpxXQepFxHzjAjwqhQePbZTArP2z87gruv9bsS5kmZPAYZQib",
  "key24": "5RdUaGJCd1BWuixdTbrCHs2KeGEJUy85Fv1MhJyygaCmHED2e3umXgbd1a5h3YJAf45H5Buq8VDjazCUcYKWzSX4",
  "key25": "3FaxREUBQjJEtLEJgLUBsCZviyhXdVaCWj33nWYdRQsZFgAGsZgFHQ62MSXp2dZbPua7R9Dbbiz6ueveQsGMUity",
  "key26": "XorQtP4d2EvNZpyrwSn1EoGrfuzyrrDPXmTvNSCCmsLUqV5VVpt5dCJtjntyCvH4S6asptK2WWhtr3Gix4fR83i",
  "key27": "3MReoJTEtoLsF5rkH5bt49rcJtGBibJpZr3hGt5YEZSjp7AV5JBnsk7FxQXc9DUEYKYa1ss7kK58EJmV49Y5Afda",
  "key28": "2odcrA2GCysP3Uq13fkYaNzrU3E3yBUaJyMbWXKfvN9sLQFXCwHUdZsJ5zFNfW4gaWtcUc6voiDSvh1VxBviXJPi",
  "key29": "4mi4tkkVGnSNR5suTQAU7XbLkPSvQkZtgqiHFxXx7QdchBWbrRjJdTWyUHTMwXU5s7Bu3kJJP4PPLbsk7JEYDMMr",
  "key30": "3uQpqHvFsukygPSV6pbehjuYpNeyCfrd75t4WMbhR4iizphUfKKXuFT72XZHNSsHWhuDvKifHqJvdLkus2Xw487",
  "key31": "3VfR3WsY7ntwVJxqKFvyw2z83PXqN5cdPuwLzXck2pd2LBXq9Hr5nWaWUs1oPwYoWnCcfXAUnGH8duuPRkFzedvF",
  "key32": "5Uky2kSdotecAQj5a1m2dzBfqwjL8hgGbnnu8JrsoCSgACmj9eq1PRzYpdFt2pKZRtzpnVoFU4hPA1MfNmowuoTJ",
  "key33": "AQf93fvY8kEXPStjrjdFXpjyJEtMG1ecVCNd9iFdYmgPoVjaoyrtZNKwvQTRBQmCPH2r1ah2B21eY1ipTPkatmA",
  "key34": "5iWcDGWqR8M6hz5cc8GT6tEEYzn1y1n29L2sDWymuVGbA7ZpAz4dC32vxuG25hv6VfAFw5iY92ALZZtT7WjVM5JE",
  "key35": "5mrGndzpVQHRqkWiyiPs9waRJ7DJTUFQMk4YbCNjsxtHpsP2LocEKF8hTJiEEx3skNCa8oxJhaEY4rrLjYTcm2L1",
  "key36": "5TSfnvyHofwZSSP2kWNEqsTujK3HftDYhhy6knYY7fRZqddtaLbR9ZJmYswuU5B6J6PbXcZWTmhaCg8x4nXK6dUS",
  "key37": "BUC2GU7bKT5rFSgnKBa3z8DhkycSowWbbctNzfdMHxgnXW22N7RAP6J5g2KySV671MsuQdLoT4miAWPB4zjS6J9",
  "key38": "5Zc5vu41DswMFJMatQMDxSdzbmER9SiurCimoox3icNvJUZk4qATDrSw7tN7ZmvP19DYzgc5ENXa3oxmrCeeTUNn",
  "key39": "5anb6PM1Qp4tdi4Mczm5y4m6k1HRCeAEwnXo7xRmS6DLhVXZ6QC7wGKokG9iwmHvEJFT8QhA4eBSTddoVLdzwrjQ",
  "key40": "3JEhugyxso9i23YCTznYfPJBsT5i1qaDGETZ2y1PKz3jvLNWtPmeLgLRwmMBBWZZRS2Fg9hGyZAYo1vnVHKLojrZ",
  "key41": "4txaUauq3RNGJsoSpYhZoQVZ1CV889qojvryeqUQQ5hNH7uSL8VamhZzc1qfft3yBsQBhyo8fUrjsWUQC63MA8uz",
  "key42": "48mE47Ks91ccqprEuwnDhATFGzM2vJDC6Yaj4kkLUhKu8PqHsjGFzN2bnysYMnzMgBFXxQsYC4qAy5FUFtxSCpyP",
  "key43": "DPcVyLZCtAHmvLEdHToK8U9YJssYcRpdijxLmLr3fQg4qZY1qYuMm18jEsn4g5wQc9pg197Af3kWm9mcQEwcRPj"
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
