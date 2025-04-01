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
    "D16tqXKpsPHwdjJ1gE3RfS182MdtdcBCu296gF4h2SwhcXBsbZKRNBVn2oAY6wN485NQ9Ath2SAvFmcjqptSRCi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rgKwTZDkwTSFNMrz8WfdpZEmGBBaqXocyyMj4BtykZRU7chyscnr61VCiGvV79g5j1PSJtPGTpuRwH3XXv83XS",
  "key1": "24ypkoyPuHerMZPfvpE5uy4TRZHgPCWgketw8xQDt7tijqFDrkmxkRe4digxfpqsi7a6BDRwBKjEX1w95XE2gRbG",
  "key2": "5fJvKX332Q4h8xwjPqCgYd3xbVrDQZVJ2ugpyd2A6EWhSTNXFW1hdpiyPAe441CSbsWpzL8Qh44DNZpETFto9pJY",
  "key3": "8GeFi3HFJyyk4Vd9M73bP5TEZASFoHNnmy2s4i9gFEMrEUgQge8awjbCxjiZ4BZ4Rmw3oppaNVZYuvx1e9vgbTt",
  "key4": "28MRzWWs1MwfurNUVPDQtgd4H31C3Xg9zjHi8muteUapWAkmBfbXfagqNiFXdZo1vAm9UesSQ12yZHsdTmRPmWkq",
  "key5": "3cuVBn7cwMkehmTJfDcGCRKgqGParp6ZPpBGh7swLnSKFasyC6hwz6x26f8poeQWTmVzoKP3Q5sbcppJcUwjMF1p",
  "key6": "5zccUaAbQzKBz3dNi8STnWQ1CpjPjSAEet698rTwNuJz6P7YEeSHVZVsqqgKbCi6pmYowK5C4M9HpeXP1RAb3Tpf",
  "key7": "2x4dNKqjQDD6PR8NBGjT7EkTtjvV1dZJwfhrpk97AxGJyFHLfSB9edB25aNxv7cephZACgJ3LAD92xtEnsFciv1a",
  "key8": "4K9hdtsYeCTzS9TpEyf4mNTb3DHYRRToqL5Jr94QiKT9pB9heEAFcqfDATWY5wZ38Ku7iZ9C1TrrGP84PHCAPqpE",
  "key9": "4DrcgBpbmMFeG6VFgmeG17mYQnMwP6yiFQDJ5Rdt4PMyEXDiLZUrHr4YeduychAbMEvwRq2tRirnp8251ajX73Eg",
  "key10": "3yMHJ95N3hAw1uuyV6e2R7FJLYnPsyLw8XZZiZ8aAf87u6LAWhsCbeBiBV49nmuwLXJK3wVGgpZaRDAYhez34Ztf",
  "key11": "tXSoLq9WW8YSrgyPKWX42Prc7WhsghNPNSY1XaV8bdmiog6o2wXSGH51Wzo9gw2k2kqm5kxfj1Wf7rpqtuS4mPr",
  "key12": "4jA3TrnYDiTvwoYKCBuycV5Uj4bH9xMauNutFsp6MpAMKNWojpUZv1d3Yu4BuQfdJJid599uEPEvPyEgueCEEb9m",
  "key13": "rNdLR3x544DThCBUJ92ztPYXd8hu9hmDBKdTDHtVM52SnJt7WfmEJZPmZtfwo4eMknhMvBAt2DQ34wPtskdnz5a",
  "key14": "4b6fqo3cYLcdr9U7fEE1dt8jzsrYEUNHLJQSE5pRSvfdqhJYLJgQnmfpfLAe8FPar9BEtovhUG8wmxdpPSo33S2k",
  "key15": "d5rz77SKDMEBqLay3gWoQ7Hfc1QaBcEyv61KaYGPHmpGyRxedBigUEyxHQ28CgTUMxc2AaKb2haSD3sLGQQpuFq",
  "key16": "F2rhD4puHpq1XGgEGC5HUg7mDzwV37ADbj42N7sQ6FdpeuX3fLxipqjULYiRuqTqMumKi21vxnGredb5hXRCmb6",
  "key17": "4yFrLSJ7hetZhRi5XSt12Ne8cjMbwFFZpGTyVCJsWW7Uc3L2vELJMrtdh4tu9bGUeQxJqWLWrRqea9uFjs8URBiQ",
  "key18": "4VNJ1fnjqeu3H17gkVFcJWpR3oGfK3JfVNCP2PNKT9kbzWXx45cH1w13UAB9DVpweAoQ6C789brdiz3P1R8ewVkD",
  "key19": "3C9tQzSG9gstpx8RHWE6eVhA1Ri4rYJT7EJsb5wgySHSUTK6E4GTVdw3MjVb6Ne9QMaYNJg4k6r1xqRZTNoX4Qh4",
  "key20": "64RUfLERe6vxrEutDRuNp2rwHQy1rdEAHCzRVk5iCWoLHmadmReKJDNTdpyDu6BQLZ8uL5pyHZU9a9SsvKwhhun1",
  "key21": "53QZEvw3PPuBamKSLM1h3Z7PS4hBCrpgTzY7rP3TJgRyred1MU7hNZ3n8JUHjsvRTPs1q2F2DzLKeCjWraFnnFSz",
  "key22": "5czzkBR8vU7n8KGFPqJPYnAsAHxh44rBmauxDiaxfnQXydwEw22cuXGQKmA31g1YZHFD3BdmzFnyc6tgKfduVUFV",
  "key23": "iyts8BJa3iKRJBYWVEDLy4aN5M7PyU5YHfqxj2awSDftJQ9t3VzfyaDxvo97GLniSXsVVXnLymKshNPL1EJR6Mi",
  "key24": "32t1R67JdQWLRhP3qXFYRA8ycyNcc7yABzv2faCb3C3PYjnN9cnZtyv2hm7UPENLEifcuwbvBF5HJ1ue8uySxtnh",
  "key25": "3DSHvWyRQCiKfAyQMJRRumaVZ78H66KLXjZ2Dw68spgmj52ZMsoZv7b8GCojCDgL6QoBBHdkTXhJ3rpneUjpPnXe",
  "key26": "4Y48ct8SBiKfjNSBXNVjyHJLYi6m82gaw6WAaFGqDWynN2oWZAMRar3NfKPXAAf1fLXDJgRfKMwxNwFgkBWGWzkb",
  "key27": "5SQZiGKj6nonPXMNg4qpdaxZt849BZGZa2tgs1RpHeLGgAJb5FkSZp1zzdSY3KRo6kqgxx3GDfx7uhC9D2f1fbs4",
  "key28": "4snWLBaCDocCufvGK2e2AFMG6b4Pz7Fy6g68NKpwpQJHUjohdauHB7WS9nhwtV3L6zfDtNHCx6ueVBdfrZzEnkW2",
  "key29": "5FrxGDehUXiTREc4PJzC3Ev1Pxc7cd4gp5nq7FJMKgAyTE9VdmisLFLzaXp7LPKQn9VBbjsf8hDRHB1A2ezDzARh",
  "key30": "43s2hr7A6ANBqwiod6sVT2s33fCUTr1xwbYWtnevjGdperocRSox7L2hGU4FVD4Nha1FZbg9SKtw8jrqW8gDQ42R",
  "key31": "5Pn93JZofhv9MJkdRH6F5qkn2DEvM8TSebSKqiPMpEbhj1kdcq2u6zoB7PQSdjYjsP4Ms3ubVbd3Z9EFoqimT4a"
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
