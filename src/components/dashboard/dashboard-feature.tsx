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
    "2pfoYBvLqa8HKy1g4QCAgfBBPh1EWcCMXm1bysRKKHj4Anr1FHSAX1yHREMTtqm3jcBZNf4qobr9X17XBFCSo4ew"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3segRNmijXxb3gpwnXtgsRRr6RG6G7AoxKvdee1MvWxE7D3vasgq2ABWAta8rUmU1HA7cjPrDjJeMt6uR85iDAHC",
  "key1": "41ieUivYoWqDscbQ6eSg6xyp4FfbiDYipdH6HcApWVFGbTfzDqjFCXfUXiFqMejaVypzE5vH5CpJmkyjAVVyYwA7",
  "key2": "5mfppY1jMDg1GcQiB41DEBaGdRkJrFdCYM4C2Akam4ynV2QSfzzTutxa9KKyDo3Cgax1jcyUxFuT393Wy1NSNGfD",
  "key3": "3RWU4H3bch4yBGb3EccfxYVvaKcShmS6NaPq7teEgtsNwBAEEvZKUYkYmdy8rqqHCBQfMJR8FjeR89Fntap8ySj4",
  "key4": "5McGVXHKx1FjCDouJk9XpbdvqjmqpEXftEMnrap5WNHgcdHQADLWfUkC5B83ZGckHCCCsnsePcbGNuweBMjavPhS",
  "key5": "21M8gpDmRM3dajKHoxuY7Y1WobJpNMLu5UszhhU91bCB8QvPK2YBxaebKqXvGisKeJW5c8uusntaNxbc4KUKihR7",
  "key6": "4dQHFgy51rze3mbNuSgzqS8bj17rTiFCwzsSyXgRRqBom8QXwg2ipLfCdSqL4SFoWABCxaBdrhmDKiyuCHSLz5rs",
  "key7": "GyG3XHQoiEBetiGvKh6GfpfWEiKaUYY3QUN9d6bfFeMSQYWK3fkhbSoHuSXBG1cDUS1EirJp4avXtSXNuGZEpoZ",
  "key8": "fbsGaLyCaX58hVrJBtu3FjUV34FGqeB9NdvxVeBWHpwTzU1pNoSbMFx8rL3NX4neThdnCw4VCGjayz3LY6qKUty",
  "key9": "4gp2eVvqfbpH86WAxEwnoNA3VZSwCE5iGcn8Ykr39ZfuWswceSXYyyofgPAfwULYatxoemm89PtgM7hJ8eMwSNLn",
  "key10": "16onMpMp6FvTkj5oAK7zjdmUuUaB32PsgQs8bdBb8waZr8BzJjnNb4GsKM43h2fRnEqVqHo1Q6oFEDPkertm8fU",
  "key11": "JFiN1zQJPXsAKqdPydc33EMkSTroX8huV9nSDrn5rbhuwXfxq4eSrJQBZyY6KZ9MfpZ7FkGiB3cR35H9fHF6CTq",
  "key12": "4pzHJrmPdbkSR3ttE2CKfiu6FHSNCXfcqWqvhRrEkJR874kuQetR5QUZ8p9FwpmVf8QoBvx7if6CAa8bspz8scgk",
  "key13": "55BAG3w3broUn2yPYHcJ8taqCJU8DnfFHcSYHMhpEGuWJeFX1TxoJELY9KdNFWbZQ1WfKm6PqGFQSCz4xwxPFSuP",
  "key14": "4MoYo7jKyqZgcZt7dqP831XTW5SoVZb1azMWtxKRw6zuWJw4khcqjsH8PjXgqW4ZoadVFPxqHSL5m1S7vzYcpJK",
  "key15": "VEHPsSUD8XmkGXzd2B7qevwVJ2dRis7um6uajoEaodHGk8XVbjUuFhWXXRbfe5M47WnAv2VuaykdwLJJuf4VLHf",
  "key16": "TqzU5wTHpnfKCHhx7yfuGGci9hfbdWvXwaB2BKXB9Hn79R8QftzN6GxPdauV4z6eryTXWb2ME5reLGLDqXNPxTe",
  "key17": "5oJDNwnVP75SNvBUFWnjw9MryZCPUBmpSUyVGvUKivifXPAjr12JtDx9LfKrBavQp1mYTdzNoDTMohc9FTofoC6W",
  "key18": "65hWem53ff4oquyu15iWXt2mwdiMqZj2juUcw2fQ2Q2X14gCfGRnTeEVucQKFTasL5Pd9b3KBQnCLfZZLXrGvBpk",
  "key19": "2fKj9mPRAKgxfdLtWSagK1NHYTvc41uzqqrevvMJVLupm3hky2QecSVZytkZek6kVuMsNEKYhnUckM6kEvZtLeua",
  "key20": "5zn5KMWYttqbRejTZdi34SAZirB1LV2mtBoVcF8DtGx8gKPRsTMCPKX439uSJHju5XAHwKiCiXdH2ZqggdwB5U1R",
  "key21": "2p6DD4xfkwbA8mZ7hGgKnoJbr9QAq3zCjeH2phnzSxy7P6w4vbRfx93qvFNugUtgGphazQwKJi8a8kqvK43mUJnY",
  "key22": "3Wreg8bywsMLtW5hDPFDCiKrTjvJcMN2ehQqQjohEBQ3FkccRwnh8dwEVDpGQ4mvrG8EhXhBNEoowXzKBCsctjge",
  "key23": "5FoQVxPqYmHvwPUGqbQr6PEpxQsDuRZ3QXSgTJLcTD6o3pC1cU71STbNENErTgBFZcCcq6H69d2wZ6wiTCfSuXaH",
  "key24": "GVoZCCFxek87g2d9o1sDWnSqFiHL1JtdahoqRCnnPw6JkQgRCsAnX1AVvBzit8aDbBaZf1jMEw26uUmB9hKS7Gs",
  "key25": "2mQajvwbCqEQBiEbob32Snn7LMgfwehT9t3hMMDErruFSzMQyuFKX16Xro8yj2PRdi6N7MVA8amJDMLAv4o2Zzin",
  "key26": "587X3M7dYVqfBTVHJdZSMdoo4hQhwbaWPddHFtptRwq6tHwRD5ZGYtFQ8D2siTWtp98uD19eh9pGB6FMrGy7za9N",
  "key27": "46RXCZNZUSseSdpzbhjBySLmeWBpaHuxUkrBw93eCzUgSKsBVnRqGXAoaEY4GqquFtHP96qBkwTABhqcqMgtdDBc",
  "key28": "bw5wvS35e63MsHgKvGoMAjCcgBnpWzZcvkdegXUpjz8DWY2Hp8xvq5PY8GQQVN4v5A9BVDZRj8uB1HbR7cdeeCY",
  "key29": "2HtZWEdM6huqbCrzugaQQ9wgUkMYBhiRSAJTDJST3PhQPx1BJVC2oDtz9DXcifQMKPCpK7BGQBGpgj8LeFKMszWr",
  "key30": "DCp6Q2DDDnZsQVK5Kwj1Hq3nFnpot78LBFF5rCgGnUJuVYZ188DpvB3oubV1bosewuHCtZYG5QKsmJ9Yx4c8L3C",
  "key31": "3PuLTF5kj5m9D69rcdnXx3qMu7M2oXoE9NWZovmJHDCJ6x49zoSipj8TtfaKcxAVBP1CYkBmmYKUx9yaVSWbAq8w",
  "key32": "2hy9D9Q8PinfLW1Xv7dcRGkCLJMjaBn57hKPfzKCUtVCQfvmvnocGsfb2HLTvaQi6KSGPg8DUvKFpHsrDU4uz68A",
  "key33": "TuodT9SCvWnxNKZX7F3HroEW22yUzQUHxU1zd9tuSj8bNJm7QwG71ppPBKzY7WApcUirkWnzGTmzoKEALozay4Z",
  "key34": "4NJaqcQbGPspv6hKEXZn5aohwdUiaiVVARxcPFWy23VLySjBSn7Vp7hZDwnaqACgDnrXDiNJWea818FrBy4F1Uqr",
  "key35": "4ogBcsfRwiLoBYUvR1DS4ACra3xfSrP9yxvEvinjmydbjcp52Ub1ksVqKDpKp1fE48bboUnvqJedFVcB8Gk3MsEd",
  "key36": "44VNA1PTaZ1wGYhKA4u4kgU4dDUagFniNcm9HPHbHRfrd9w8XgLAFkvEjFvTK1pYBmByqxnX5zibGWZ9xGXcCrQr",
  "key37": "5WNk5uavL6nREuEvWWkoB8y7mQJWnPbZgc9SnUHX7DBnABZTELZxM7EcNYStKi9D6fZKipP9vj9GV35wqD92zvNm",
  "key38": "3rcVuRjHZF2vMCPuBCDofWrYi4R6BfepyfWQAzXELqgrYYB6vDS7r1FMXmo3hsea2u2rvDhw5yStYQpbbvvDdbP3",
  "key39": "5Qapzic7ntcrmgbDweQoBXVxnq6Q4ioJCh1jCkGN27GruJjkfo9Tk4kaLk6aqym6LerceJ1XYrRSYwJEe1eXdwy7"
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
