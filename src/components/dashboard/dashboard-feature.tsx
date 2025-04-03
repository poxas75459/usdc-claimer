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
    "4BgmFoxonEpRdV9Q2WQ4HmCwsmuZdGDouM4gmzboxN6X8rHd1kyi5Xop337Q7NztZEQyA6asyZ8seKPajkJ442Uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Uvd9uBh25wgnnFpyPscfDg5csN3io4ZSnJ1MhUHZ84e4yDdUx6ts6dHV2UZFo3q4qJPadPNS4VrEkpw5Xm7M2cF",
  "key1": "3EM1kgceupNxLJCV7Mvb8rAbEobtVdLmQZxDB9iJmjWyWJ6UsyaTM1TtzmZE2z4RzEnBA8G44C3fDcr2A5N9znYF",
  "key2": "2gMEdSam6RoS788mrq5TBbYzBnDg2hZuehib35obCn7XCvSFxKgNaS2FKSBQmutDRnN5bDDGevcESqJ3s8THdeiW",
  "key3": "YBzxJUHqR7zanqKq41oUoPEp2YJ9uE42rqYfrwc12EPNNRFiJfLuLUhY7kBZhjqWT91afdAyoypi56duiLzNeWA",
  "key4": "adccV3d3en3jwWhuEBVpKh93yTQQ9MjzuzkiShcogMmAGCz4hDFKEpbMrrwDQvXLUxsXWTVCn5bMjzTbttFUcxH",
  "key5": "23msc83mswAmKR9QsDkUkDgvDWWs3MbzB9LKE7EWPmBQRthFeD7q4zmLN21xgU5FFUnAT1UYWwMVfS2UD1DaKCEq",
  "key6": "3xvahUrd2evtpwp4SvYP33KCLaQUKQ8tG8MjANtLYfiSpdRsJ6RwWqouzTWBTXuA9PLCknjUcScoEUMWmswf3oqW",
  "key7": "5RQ3wiVL8XoRsxxtApWgeystKDS3gpUhhMkwtXFjB5NiKbBJZS2jesbXnPinQAxAmXz6RVkSTJjuM7vXbLdaj6bX",
  "key8": "5jd1SUifWQFRBbX11X5NftGRs4S1BpxfL65Fm6KHotgeEFHiyghB7Zb7Ghu8JD1VHHoin2DFbWgAhhNNiBUFzoRX",
  "key9": "4GmxXmUjk6m43rtpTAfHbainCvKuhCEQDJSEbTk7D5GKAVkUamm6zK8wQ3w1qLt61XVbN7PhZT4y6VNMcrTRSnA9",
  "key10": "2iV11ffDpGn3mUnRagLkz6T4C2evDz4FKNHvruVyEGgpz29ts9UcgpYwmuXDUrD3WWsMZvJBgXZ29yB4oeZzgHna",
  "key11": "25QyspnVtdEbG23AAmjsKhCB9vkbjQFpM6WHgkgvKEDHWshkRj47pZBzExK5NzdjZaqN6u6k45YNFmUCQrtgNRdP",
  "key12": "5jqCj5VvvLFu7ef8GZ2SWeWB38XakyZe7Ux6CxZrRSHpTZX6E11Ecwxb5TdcGzE4nTWU8APsK9DRremFCgKEb9fB",
  "key13": "3EWuLzLL33PL8HHvoHuZgtMcYqYm7oHELSpgvXX3aRwwTfcXeAQQynyKo8HXUaaHipD1KVcuEkibj46srm6NaTUR",
  "key14": "4obE6qzRtuGJNXWuwGVX4to7CTiDqooRoiU3QMgasovSimTtj8EvGv61nxL4cx2LR33jYBL13jtzKf1rcnCHTadz",
  "key15": "5WAXU5S8qaeWUK8qnVggguWZ3yKMrxN5vVRF5BdtFxmWz9mjZUZgjaWZU9uUbzGQqy6zQmSijRY4PrZwexXe8CvE",
  "key16": "2WmN3hsYCW9jXmeTXcyHZSBfijxnb7yGhcUiceGj2BTgsDEqUdXkoNmoerUGniwQ7YnGCnBorUFxBc94tvcBSFsY",
  "key17": "3jmz1cKXZJ7JW5yS1kK2uebjswQwhEyC7HNiQrmc5QNuDsc5iBK5fwNoMFa8BPVPgfNhaNC67ZeHJbqYu45HmWyz",
  "key18": "7QdkjPZiYx8BBUWQYDnWCR5G3YV7DpXuYVzvuiqVeABeYRiN2q321KzWHZ4yipxGBJQu8chQwYY4hqaFovPL4Lq",
  "key19": "5DzjCRNUNwGSTB7pah5HoygCj6CR76ugZzvoRxXwnmBTCpbW2FZavx2gq2J3T8SauToTXbmDiLvkZbac5m5RdsRX",
  "key20": "4AYSf98zw6ifNwbHaLsejLXdiUZCUc5DCDXFbHjrx4ReyuFwmfTg7LGwdS4cvSZHBeCtEdZyxs2SD6X7XBzu6JnR",
  "key21": "4QmKYQA4DtEwk7vV2uBtfe3EFH1HZWv92sq4SZyK3wm6a5Rvde1HqK1C1YWXydGHmV3UQ1oytvihHogGuBQDZex8",
  "key22": "3Ev7s9zkXCXpMqxF7iuukPPeBfwXskhnE812YouUcdzwSrh1N92vAD8wDhp2x3NMmNzn2aB9crRqMABjjd8LheZL",
  "key23": "2XnCjMDZ95YWgoRkspgSrdbRQt4Pw371vGy8ubre33vdXSREFLoy95kcLNjgk7hsg8S1UjnNMWgWCbtpf2Htpcrw",
  "key24": "5cFWtLvdkEzYNrYy8PyMGoCQfonMpgyyRANYhCQXz8chseDq9fXw1TG3uaSsDtfm2WEMGFw23cz3EzjeDKoum19u",
  "key25": "3birq6FVLjcmQuWQZ4YWVKuVqBdEm4VHojuokHjMEz6ZG2cbAy8R48BVbTkuCGfEnQCMNi5BeuGR5TeP9uyYtRyc",
  "key26": "5reqFCkWFXfoJt1DMvVThc4Ka9jb41qE4Wi3dT2ptdVffr67rJMtmFWzUMdn8r9c8SfbuW7HgTDZKK7srG61Jjtd",
  "key27": "5X6XK5x6Va12raT8NWUkBUsZadpSpKqTB7TPW3ttUUX6eV6fGDZLEXrJcfGPrjx6bLxHMYheubvgeftSR8t3yN5D"
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
