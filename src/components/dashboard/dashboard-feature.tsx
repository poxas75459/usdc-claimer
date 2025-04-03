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
    "4YfnKd2BHvyN4oTqui6PAL13pWCYqsC9GXnjNuwFXF9o1LvN2sDrpzgGNQfvBcaYD2fzLsXvzvKGvBbjvEBgpDxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omHDWJZq3dV8hfqQorY6gYUB4x4sVpBLEaoJDmAHKnkUBXw5FKX9knZHKD21eGw3phesZTJuF5TVf3j1hz5PzSF",
  "key1": "1CozcUqNnPW7u6HT2ezyYYZhpyJL32xbdtroXfNUinZE246LwHqJWV8MJXfYH1aWtazPx87di2sQpKNu7wLZH4y",
  "key2": "43ykjEhC56dYDu1okucpbUG9cctnFJCdDBMJg4NDGfRoNqr1aXCTPtza9UWSrRTj2eFejvmyDEPv3s1p19uvNQoc",
  "key3": "3AYJgujgUPBVX56DLP5mRwcmttzq1ztuEjvvw4EmcCwnaccSxid7bmhEoSY2EEDAfyVCJhwqLzUaZ6BrNc5LyTEY",
  "key4": "3LuPpatDVCbKPDasQex7CSwADHDG4U8UKhHV2SfyuCfk2hNTDwSEZ3NzLpWqy17RKx3Q7W9DgjRaM71P5ptkQkiW",
  "key5": "54ZfmesGAt3rTTLRyJ1oCugH4nzjbMFbU9wPQZvfjgWJZH7iLetpwz9wMBUhy8gAZRZipAM2Sx4MxZkKpJfXmdgo",
  "key6": "2Lu3AmKekcbcmoZRrkV9wYPXav8rvY5uho3SMxvQjWWePMRk8beZGxVNchDP5AWBWATfwcZrA28uT6Y4Hff8LUad",
  "key7": "2CNg4AWu9y6XfyGmgTeifSA1MhNZme2RPgLLWnmMvroP3p6QhLdWwvzvpfyaCp19riJCzp4wcCagxPMkd8BZZvsn",
  "key8": "2eZ8tpz2DGf6U1hXNNP8pSjCituZkSrenR3Snk1XiVsYssZZh5C2UUD4Ef9fTkGRxBA1VFBCRjaW9XtjBLgC2tkD",
  "key9": "5cNFtcoqHUeNNGzb8zz1BiKCYSS9EqA8VRdw2UVTGqkJohJSccgAn15MNodRjMKUFxD2RPguiryKPfphTdp9yP5q",
  "key10": "5QxyfsQB6SRoVqxUqp2tjBB72BjotoSembx712eCVrSpicspsrjN5ugQ5m8dPzjNvb8QwX5yJqgMVZCVCQZaGrJS",
  "key11": "22nbuuJ2dx6bysMEWUKRDTCHR4n9t8j8xoJKAB367R1o7JsYFvU6nEHLA9JZowMahLQeH46fEhi6NRHtCH6S4uAQ",
  "key12": "5QamTUGirfRE4yTQ3PhnpsqxwrKwSixa5DKBc72xrWZ447t9RfNR5TCmubuJ76ZhmZatBHv2G1f3dK1uykcXy3ks",
  "key13": "4ic5b9zD1t83pES9ea84ZXVDebz7zoisgVg8Qxoa9Ka1Z1NqpoXWcpD3rGHdbcP7ag9ah8CGBennWtgZKjcxbJSq",
  "key14": "4MmrbWz6QJVV1UiR1hHC8s8zKJcogzt8R9p9PhBQQDBjpzEENEuzDaVdRddsfbh9ACuZuu2KfbNZBr9ASjLuM92t",
  "key15": "2zCDXcczJEWsfg7tequg9X9LLuQMHQVaNWh6irhu3C79DxqCKEN9ekA8mRT6noXRgfxS6CUxjJ75fG67QygDQB9R",
  "key16": "3Pbqidm7iSsRQhnwm8DbEK2aoRhHbjaKfxsppgy6FQipiN7DX2nHSBi6Dza4Hcitf7UuGqA25CNSiWaVcDBeoGPu",
  "key17": "5GFLqwUHphVuDQsQN8dQFuwomih9jHVkBmuaQrwtym9MaKi3NsDv9aAccL7qK7n1q8GntuxQZoLWBZPS78RSuCtc",
  "key18": "5YLpJr6uocxKDqinw7iKoNGgo331tKdK8VFN99KritVtFjcv5gmshNFCCP19mECNYLs1ipjYgbVg2HiFxvkyoZWJ",
  "key19": "4XwrvHNZoeH8tPYVfpeVBhd2NLje2BgvENZYKmDMF9a7ZA2W2Tk45E1Qh7maHHNWQh5buznWMB5SkpKonQNb9jB",
  "key20": "LdU1dUQDYCKCCstg14QCkeXnNrL83QnuUKGNqj6FM5fF4hdeyfMjbuwNpBfzkrsHhsBHCgUCpD5AndCgCYLzJPm",
  "key21": "2bcxfb5qSoVBtcsnfbQR7CfJqZTWgp7fwewKMiabWNvexb4bpQKfdvnTDBAt6j7e1VoVEh9swbSCHQJvqhrmdVdE",
  "key22": "5egAahJQiwYkZYF7ZGZNYNR13ZrG1SuQQXcPaEj9PaX2SedyJmu2cdVCDUhYpHGd9R6v1XaVgVH19eF1qek23q3k",
  "key23": "5735DN5tfYmVJTvs8AnoTvZfGsVuhQbLfk6Zm92tjNipq4dTspptAr7nNpBgXNVHTotWTpasdt4qZ3yBGhTJYZSK",
  "key24": "3U3oAd1hoEvVn6WGBmMW6oJJvP7mNeFb1c2asVyHYegbWRMbw8L1gM1EUdzgjCCeLoZJYZeqmQrP39kZBtuvJNo4",
  "key25": "3wH5u1XvK7p39iKewt9wCZAaJpPR4gHoCL3PbDC2HELabDxc8xQgSsyoeJK4cEgiZhfP6dGdoTFrXYvxfdeucJXn",
  "key26": "2qc258hWem3iR2DStJor5dci7uWn9VrC49eGtGtqLdXQmhrqNJsNVm6vJW9TNaEx1NW7HenYtCagnvuz71B1sPLe",
  "key27": "36xDe7G9UQaX5EkRsihrTU4X5EcbYgjuCkS44pzY2BsCZ1MyEWn3b5MRD4aNv5G8C9iwNqy1c4vsyYEdq1B4uQcy",
  "key28": "3kqXP987tqpw6NMDKL8Bi3m6yrjHtGNCceFgUwnVNrhYE9YJTmMKYyCSpZMHSpfJrthbjy64VMyocvfqCgvLZ6z3",
  "key29": "54B1pWtG1vHUNM7PyPoKXGMWFu8NLpG2CAUYFD2u3bh87fLMrv45GmpsbBqRtdZRhatU8oGEzEoStLfCHPye7Eon",
  "key30": "27XtqNHkesnwVcAjVNrzdhDSXWf474HGzM1CLLqdZWqE9JeprYUVLvyQ8UHTKTXmwZLmiH3RAcNZ5PXmGZEGX7TU",
  "key31": "2KxbGSjRs4CZff5RbfQBHzVUQgL1jNuRLxpEdvmwqpRcmKTit5k1XjS5aEbdUZC3kD92G13nZMsKoUKoh8kveVvC",
  "key32": "32QHAKZwbNnm3TbbzjS2jQ9JU3hu346F2UpinPz32jQDbnB6F6P3H9CGN5SYAaU5kFGrMs5gunB5Y45p6NU64Gbt",
  "key33": "31f5JoSWTeEZeh6UNywkhGXgLDnKA3K52aJ9e2hnvh32yf48cThPHxjU6n8SYhBJdtoTsuMqpEjTdPGMHrxmRwCt",
  "key34": "4Emneg2EsUgas3xHLQUuPquasYmha1zL4866HK973ZY8MM1CUviiJVQnRXqhTCDWMpMCCCD1toMT8u4xKf1DXUMS",
  "key35": "5syDNZvNSpxZns3oMHKhdxyqkwN8qXyvTaYaHgVMfzATBmwmMsBmpNUx5Sp4hQESwgZzQ5ud9P9fEd9txQDdBAyx",
  "key36": "5hBJ4aJx6vXN6AtNaygnTCvi6PKmBLzE59TGZS4b4fhRJJmAMiKG66WMLUTq7QG6gTGxXSDwhsVuiD7ybQfXtTjk",
  "key37": "5BBAPp1zUsJ54Eyxfpq2dusM9RRtsaLrci6vWpoKkCeafJN1NED5gZ5ciLQwJ3Du5ipqDgqAGFsowsDD8XkH6Q95",
  "key38": "4vKY2H5FHXd5Ey2EHydLf4kvUBJQhZMd5nQVudUtLBV9gk2DTA3MwdpM3wKTRs4T6vW2xbtzWgc4G212WMcqCbNX",
  "key39": "RP7R1bRXPw1RvHY73CJEDAhdS9ZJ7Q9BQgL8aWXohuqdYeJwa6YL5KCzaHpYwmKese9FQRdhmd33fAaSzXcTfgK",
  "key40": "3V1S6H7xUhGQ4jPcztyF1zcenNgwJbstuzgFMpdfU1J1aQwgNZs4YAME6ZtzUQtr2Li26bj1FEDEuxrbU3y2mMA",
  "key41": "4oQv7jjB6vpQ45cNTvquPqJPyZjRk1iT8BziXszPPbifEHdmW8guUkTsvu2hZbJdR9hWsXxEJnTqDrP5tLzswgzC",
  "key42": "2jh9pwhAVPJA437hV2YDGSzqAXigWzW5RPaT7x5fGU94v9gCDB9xn8deeSFgks9JdVE74GVe9CVA62mL3qogxSTt"
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
