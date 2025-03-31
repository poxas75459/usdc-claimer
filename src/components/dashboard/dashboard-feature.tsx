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
    "3pgiqKNogRp48WaP37mJ5Ksf6rtL8V6mMmbgdo7AtmeMQiTVJ2TVuiYPCemFu6fw67eVDpZN3eTdqhCPyz72Eg2b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A3Q21vfBNTvxyo7qRgtkQpYjsfmsGEQ2UUA1uyzUxkcAB7bTqnB9fHhGp6kNxe36aS95okaiusr8RVtvDEwDVSc",
  "key1": "2LUe1wkVuDi8Enpgdd9h8HZ5ciq5XHC5zQ8R5c6Ao6hnfLXwnbx6R27wYBJUwTD58RzUpHaBqAVEcgWwbRPLTgxY",
  "key2": "348K8Ka3Pbns3DMriZ5ttLAxi23GeXGgXuFVv4TkgUrmWrVELuQyfC4ontjmCDMPAfMdDtHa8rCzqJwusQ65Aajg",
  "key3": "ob6Wk86LCQGegTEc9QCF72iNjVA1jK86AXSvUoMQxU9TTeZkKwBmeySoRoqcKWMXQgQNeY6EHttx5ZS991a3RdM",
  "key4": "4DrMaDBSLQQpgwgQ5kC82kxbexC3QMfWYqNTveJrGJoUpd53c1T5mKotxCrtrTHxpvsSECr8mWk2nt7FQMcqc7gR",
  "key5": "5d9hLTVgW4ejtapwpe7en9aHy7fD3PihMGzXfWZeaYfM1V6iYtuJUQQhbYkznRUPKjTHnXvJfxoCHSFbJr5YhT7q",
  "key6": "xvSEAxXjoD4zmgmTGxrgRa3a53omboFWfneNpd4cy1tMobrCkkmVh8ZovPmc24q5dQeMEisrNMayx1LrLL8rEQX",
  "key7": "39VrcHeWXTZNNK7AP74UHhoTDNt9s4ntJdrdqC2V9aR8fLaZXBeWVFSBEaTUFBHpFmvmLWrXEtZmgKeQ37ipi7vL",
  "key8": "3HTocXHirSehHMJ9SMkLmcqMUkh3iaXMx2Ch5EmKykkiFM7Z43T6JaCjhaB7oQouSK2DfrkZJFKgoyiYEWMgA7et",
  "key9": "2fJ7a8XysMM3Xs4jCp1t5itgxGHUTNn3ejnoLPNWi4dG9fx5o55LQifgCL43kKKFLQGqSjivFygn9MRUEw596Vnh",
  "key10": "3wCPo3bAb3YeA3CBU4dYDECuEUVV1pL59HENn36EGNJ79UthQxo7P5bTm1fENi9TKFcXYkYcseFbnt6nE3qKwJNr",
  "key11": "5vxUQPG3wy4Z3qA1h2JaCij9MHwi57QsEbSJ9VixPCQkJscoD7nrP2WPmRvuXMnMUkD76AtC5RAQ15DZ7beECfsf",
  "key12": "tcPXCx1JL53DPqYzLGsusr2xy2HFhnGUz7PxArZTu4Ey8cA74fW88ZL9jnfnTFX1PXv9zC7T6farJHY17ZHPo8u",
  "key13": "2UxjQWRFAAAUn6gnVgyayFyiqi9k6QGxn9NqBk9z5cDwGTGmzLdveXvz7MXhNj3YsvUSHgyCvUpyvRAuYikrQPyb",
  "key14": "m91uSSUzuGvRf3pALR1m7GiXpAVToghVwo5YaEfwLLv6CWAMCTeUcXA8uwgvTT6SqSQGmmL8AzHdDBS6iGZNdFH",
  "key15": "3cm4SKgBihFLkPbj5XSNTgphtLse8vkur1PcVFRP4FcfYeK4fZDYT79obzTKtGnZnfdKXg2TxxQXcYUydaUsmhXb",
  "key16": "61Vs2HtiCDJ3xoJWGMzjD877HpmCSdoM7BrdyK5RH5vno5R5PYqdGsibgZ6zaDwdXnbMS1h84dZM8VjvXVpDmvZ",
  "key17": "2sWLXc9x581Pef4JDWreVJ3i1d6S97a2dhh7KeHUvTdoKqQvx2kvFsE3YazPhKWmWpTPV5W5WHPwG7zRieNBUCTg",
  "key18": "3ZEnikrAZB1wTjfNo41VeZqgAKLnZx93fca5SSV1vD1FqdSukTdi18Ac5jghbPg5M8Ub3142ENpM3CwJFg34HeyV",
  "key19": "37ncopYApFgw1B2Muddc9rzE1iaSFdkpaPseGaD9fkQHuKVg3xdepGnEGbzJhHgW7jfYrWMcLovNsJmcM2Xajr14",
  "key20": "2sLdmfAcNegubKGLBjHj6TDru6KodvQ6PVj8h4Feod4o4ickAwQDW7XTA2qXPNADj8DyztarZC8DjwNuHsHC9eBM",
  "key21": "5HdvC2oc2KKFZYTCYueNxmMEHGAQGh9MN8gpTFgdJf713fmAbonarXKPs64ospZ8Ts1r556HCuuErNpKWgoTQmEc",
  "key22": "4vqKMp7PZqXHQJf4AX9ooqXzDfBKaXn1Te4EnSuGaDGzNhYzRuL19H2AT5KfCfdb5Ad8N1WG31DvDeExjwSnx2CU",
  "key23": "452bXLg94Q7iNg6SPzXrB7xr64bdvxnUN1yWPZpVuZiUWrq62hoB19bXZgK5ZibkHquk9VSLG4sqtzjkJ79MBkum",
  "key24": "3kW5N9Ge4q4kRGG5TVBt3qxTRezzkgkjmNmsVPUrGdpzrY2BAAsJFPQzpNQNkF92fzAsLs6TdgNBiqLmG4dvxZLc",
  "key25": "63tnTUgPJpgDef6nghTTMUkrSkzoXeRpCywW2uDgbTZjgUUA87NNFMm4UgaUUDN6aHmDbPjEBCZmnS5ZpSbX9tn2",
  "key26": "55iNrHheFGdaDTZEqz668tRnRVNb2qahJeRNQya6TsBcmgzeSAJdtDGv6dVcbDgEQHuPJWqGcM4wKR35DwXHQcWy",
  "key27": "513whE4sxBccvXM1XqmpmgsBfLvE1z9v8SUaRbvkfGtzYz4oomgvPiRWSgYuNCP7mxLCXKk9yJXmiViEGuKf6jKb",
  "key28": "qoARb7KLS6Ai7tLoXZWAquBBPiiUtZuff2wxj62hWrrqjNNRLa4nWUnzhGfgTCaLkK2N17zspPix7P5suPX4ehi",
  "key29": "5snCYYKmEhjVWb8DHmHtZiKgCw1MXYiu61xkRw8RXixNKNkFU8WATi5ZWqNk7eD4c7bHHbfDbwhTgUeYdz5jrdPA",
  "key30": "2zrdVDbjWj7mcqYjVvBhg669LryngmU4rj8tR7wheJaDGTRVcPciTwH8YNNG1bFhrAE8b6pgZTgw3Mdvku7sCTs8",
  "key31": "5v6zcagsCAHC2LddWEofuUQiH9j2Kyn7Ni1gH3EGto5i1uD8K4wbxez3kWCPFZB5gHHgCw9i473DeYVCURLEyXZF",
  "key32": "2KfQc8YJK1i1Dv8R9qJAxjpaiGhPBd74hi5jX3sUvwvqNAoeenkLUFfdaNQ5zSfyND4WjBpc2s4e6URDgP6jnCRg",
  "key33": "4Kmg64M3J7d4PNALh1e2TvvCr2L7ZtTHAeYyULwGCDd9x2VCQ5YArqsykEmW63aC3h214qWuE8axw9BZkJm7tiZC",
  "key34": "2mrHjkW28Dfgv366BoLQCYBdMc4mbjhqxWviqYnG7qMEaLunQuCpN8BKbxCLSPajc2iwztmJUmWRNq6tX8wF5mQF",
  "key35": "4hcDuTpsjTc7yPWdH6MazmTYNFmRwo7eVSMvrJsh3Lbg4rHvKgPXKHi9Bm8ZR4awAHptFEMMtaV6q2nyyjBVPyZ9",
  "key36": "4dYjBeyzN3TFDY8tZQtVo748pxdx5NXe56mjJyR8mrAZVFByinb6LBGAL7s56gxFbrASTjegtCz9zyVo1XMF3dZR",
  "key37": "4P42KYn2wWRytKEdkJPZuvBBCEdrshMS6Sdm4z5KAtiJ9cQCqv64xhZLTDG82JKFxfz6WxM6Uufk5Ldn62aDJPew",
  "key38": "gZNqDC9WtdkNJs8sNJFE7eCDw4nksPsg15Goq4F6krsp59wDE1B911nbsnL9WcMAkuvhc4PoxZQNSiQvL8fnf31",
  "key39": "2FYoJ1W1meNcs5Y4bCSi3vMA1CvcChjVc5NquwAQ9dBTqnHRHtJSFZjuvpdnUS7Q2stR5utxgv2PEkHeTkZcEdMF",
  "key40": "4ciA8RQZwxtEZjK5onhxXk5zo7xriAiDqabcz371yJVsBG1jbu9rdohuQcPnCoDRyZ7vmasL48T99ThEPT7g7ywh"
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
