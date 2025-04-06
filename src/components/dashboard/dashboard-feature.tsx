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
    "2HzB6DT9vmDDMSb5ni772of6DCybrqbuwUgbeKFk6ZdFW2DVzoa4sk78shYpkmn52UsccqQuDi3BvskHhgMa24bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w7MQYUQneMpYiHnTWdf8RV2agntjEefmbGNuBPmdJx3weG8Z2GmttXwKL6zbgCfc23bZhWR2E5TyswLSEnxv4XL",
  "key1": "438cFPh11mDFkEPzdWmhDQBmZzayqtbNkRmZoRkVEdsRVNrZVnFcNaECoXNXer9pEoE7Xp5PJhXcpedbWHAeDYcd",
  "key2": "3wtBNcihZbX6YJT4tXeyQAxeyszeZxLEZaj2jVGwYHdbmx8M4C8bBzEdb4LWnYEcdibqqqPXZ9zyj13R4GAGnKnd",
  "key3": "t4kmZCtW9UQ3bVQHTYD372S2og152RguYuQevNgruTNiCkHscN1kYeNoiG7MEySqgZ1p2qNTWxqbr2GuELEqSx5",
  "key4": "2FKmgh7eGUMeTUbWrpHGMYTpdYc5PKa5PPVsBkr7CRWLRqw3XNGfU8AQHyZztwwGa6cbDX3oniKxs1xzhbi4Nrjm",
  "key5": "5LBPM9QX7sMHKxpGxsXzyzFoKB4CZ7BXv7UaiRjFYfqwueuXuGdwicLy8ZpZKfvEUXiPYZPGYAS8Z3giam5tst2Z",
  "key6": "65KD6EaDhduv3uzZNkWiSfocpRPu5Fh5W4qpur1yPQXcZsaJbKgk2DsaKxoPgug8QE9pCUbVWB4qJpqNLKJHpi4f",
  "key7": "3bNDWDgiVWDabVCRReskUPQAP74YATkBrsEvbe9HSRYvLpgLirSi3F5reR3r5BGXkeEq5fpb2LQKDDc26eaGW37Y",
  "key8": "52N6M5VbJfRZmrR9e2D5qchgkg25mM55icNuRiDoWVzA6vD5bWEFqbcA3cbVQikj3QcrgXShLonpTMEiRfEiiNT3",
  "key9": "4D2Bk2ukePn1Ei9HDs8aG5m8cpqS7h9NttVemPh51WGpAKR1V9p7TeSDLbu1PNUdsmgipPMzQrPYwQYgykLXXpY8",
  "key10": "22xUpjHFFLs9SGWvuugvFzcm6C3NA5Aw5PD2to7RztPssuS4NRe379V8R92FhVPj7kN5wQUCwKTVLEb8F1cWehQK",
  "key11": "53DQPpdzBgUX33kFwijfhshBCWVYmQNwVrzcDLz6k2gG8gmLp8u3WcrybZ2x6jigCV4gPeFLL9aQRnMg4JhGRfzt",
  "key12": "4LyaLy5cRqZDVLv5QMTgi9mU5eUa8aaoVQ9nD872NB7H5gRC9ovGGNEaCuGSUfNcPNdajiyMo46YrSTHS3pyzd5e",
  "key13": "EUaTwuFPXYnwDprsNpuyR8BbRUAmJGEkWnCJL6SZQ67UsEHda2FRuUBBRg7oZgvJGUXNYYpPTdnCr5ghjzoQH7o",
  "key14": "42dsXjUGmW6WzFgJJEvnbBRcfDKmuNqBwWHa2go8YM53JtQLw3HGwhA7CZWUc1B5wai62H4qriaUYjaQxuRgpWyD",
  "key15": "65esxPncTSQJevx7hEykqkYHaQoBBNdfypMEdtpAZsKnpZshhf8PjEcFMbTgjnjtctBwtxattikyxNBR9TQKwpM2",
  "key16": "4UZBv2PkB3DSU9mUbMHPtCwZxex7HW2th26S46ogX4mP45xFEQmeAp9KCFmnxTdUMCqDc9CaPxtQuMQWpV9XGD1i",
  "key17": "2QSKE9FhcLAT7pDBnB22UjAKn41X7stkoctwBr4ZHKVTSKbh4xxtv1ffboUQ5SBzrtNQ2R3poCC8tCQ6f919XmwE",
  "key18": "4XLdtysmGa7ciLhp5Xoy8vQvcJurJzg4cPkamL2t9Ye4mbLLArf5zuJ3KEt2mNm75z5mRY1HtuK8Bk9k7jmMu7Cm",
  "key19": "iG2V7ucGvft4YSv7oMZHhVdhh42U4NEyYaEdv75ANaJWKyJvvLtJUy4aZNb1ByoQnbsKVKNLGaz9PuwuFzeMXyy",
  "key20": "5ZPxFoGo7NpLaWfGZJyeNYweB6stZmrthvF2QALNmPVmTX5CFhP4RFHq1B5576WcR3gAaDLgDkUf4qNy7cfrgGTM",
  "key21": "27ocf3aWAKitN8rgKnqp8hRzqUTsXXfELPnjMBMerPCaxCM7q1qrBiTyDgkMy358daRQZCBdpNkpUoobD7CqbLxz",
  "key22": "3oUdry91NCUSFAC6mL8vviK3BRBX1FJR3Q1zzerV3Ss3nXBKLqvB1dXMPuRXJtR8X61ivG7TzqY2dceF741Wmpss",
  "key23": "5qz7DxmnVMataMqaGkhMGTGo45RzWwGBLsN9S6miuKydk5izpyASrNfjBWmfydstXY9FNRpM1N9JYdwrZfXPAK15",
  "key24": "5mvn1BqG1NkChNoG3f1avLG4xAzDZPiT8AWVXtN8LAMLKRGr7c6oBoBHQFPySqAztfqh82YJk5YB1x37DFZNjjJ",
  "key25": "iScqG8DXH6KqFsiCAuV8HGNimxpSzUQzjSVtzJnuuwuR9e1gr9TQS32vrfwaMfyq4N8RrPrMav5YCj3KLK6Nu35",
  "key26": "3iHMUR5qSQ1e5w2opugMR4NukBvZQAq5CrXh6RtmoBYjq5hxZo3BhFGHbzZxrxE28z9ndqLm4SgH3mAG6UFLZXSK",
  "key27": "4e9eGq1dyEZkNBWy6z25vXPC1C7fHAGUfu22zbJgLEmj1Kc7Pd5HR31wgzTMT5okzYBz1X8YKSAK8qe1igRtZ7q4",
  "key28": "5SBtPSvzFZQBo4EekxPtPdvuWevEnDvAbyrN2AtCXqAz9siULegmpDDqsQ625VjKCqxA3Ney5mN5PsdNtZ7RbPR9",
  "key29": "51dCUeeZ45ZySbyBjJpeS8fh28gDfMPfFVE9uRGShcrVzoZx3Wxr3jVqdN9aGQxu2fjTDzdtP9SzD3dfkfSJV9PW",
  "key30": "3KsL7KZJRoJXMTDWuUoZBMeSGNh1JVgrdG6SssdM67zS3Gm7s1QPPdBdGufwDFhoEyRA3uoPVxM4BE4ux4U5dTez",
  "key31": "2L4ijaVLmvxbFSq9JaDAXR24L9aPN2pcUXn9PNz81gHwvnEexmpnmcVsDsFTpdKdZhb73yApsZWYKYDRBULXHSjA",
  "key32": "2svZPTPfppFYztLYn5J8oBrjz5Tps82RQWVhKiLRzhTvge3BSL7kDCfcdeqEUDy6ftvBfeW9nnZ25AtJCcPSoutP",
  "key33": "QAAC2sEEm6CAS4WgqBVAH4yoaMoDnD1LX6RWUTi8pPt5HPPz4UgLcGAP2S3EFzjk4zUjqbdsUs1vsjSKqm7u8KW",
  "key34": "DW2gRHeUUpVUNPFTbbhCK9TnU2ksipVScunVwQLbHp2BrGKoGsfAfgyMuoWyTTY95pb2C5ApNWFzaSiFGS3h1ti",
  "key35": "kL23cypSKgTUqEp2dC8qqm4DS8cvd3QUuKiMYebTtBoqR6hSZL4UiLhm6gwFnj3m1cHeEtoNvyEnY1F4UgChEhy",
  "key36": "48mgj66f9Bmuh6mGjgvbJAiZYs8ejGpk8u9m5JQVrYFFrDRUMf883tSuuQLYawLXcpAby6PLbftseYL9rp4Ez5ck",
  "key37": "5eHCnUSQpGHNeZqaigbTwWWAguGmr8vGKs4tdBG4SBMcfqjHY8qdXbU7TNXPmrqVqrcN7gtXDAF8bWvHN7YHfNqv",
  "key38": "3bKcRhkdXdcqK9heQeL9gKRFCa41ii7HpBVsLfpNN1Hv8iDjsZvyVJ1RSwZUEw27ABaNGX6zg9Bdkrg4wLKJuCQq",
  "key39": "3AZrPXSa9Mt1eABp6pgsDVxU57qW6ZZqarC8421wDZC51orG36DNtKpgCiGAfufPZpdgwCjkzj9VAgSQC9a7Twj6",
  "key40": "2zA7cqDEez9fPcssSbpXgGJtkrDj7Ko7mL9G6SSatwETLYnUNCoLxRMu9HMoZf8sWpDv5rm8zwN4ifq7BGWfmNcy",
  "key41": "5ShmJhzWp2zD8SsreCP2bD91hxVkSS5wTrJJPkHWjReaRWSAmEvHUCKhpHh4ReBdARMiveSSg2NPfj93ZQayz4CZ",
  "key42": "2QqCC8njPgUcEKY4eg45H71HDPS22X8eYrC5x8NqUgtKpx2WkCjBANZRrtEe136eU7ijRCZCBZhtchaRSQQw2RDx"
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
