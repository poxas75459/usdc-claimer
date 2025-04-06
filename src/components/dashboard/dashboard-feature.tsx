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
    "5huNo27MyFbpMGFzD4VZkLWRF6fjPCRrpQLeSVBAAv6ekuX7JXYGCACskD4ePk99V62EHuKugUGGqa49YJ4CfdL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLZb9W92hooVkuXXUMq15ujKbycaVyRUiJetcRfj98cPUpazHzhN6f3edh7vac7PfNJimwjdApmyD9qnD5ABoia",
  "key1": "5Sc5qVEZKRGK1UicVgmaBuBThnB9XbZfFzaCEMfEVjSpp6sJpjZmyhPLrgMRPsvLkqCVRziRFuwZH9tXHRqVBa7k",
  "key2": "2migSLyPzPHys1M7mXXoNnHupRswZ5se5w29ViLEc4r72pEQiKzzs8mVCrmitrdgNXm17aTs4YqtTBrHqfoW4nGK",
  "key3": "3s63Ngwb4T8zjQ22xam8z1J1zJJEqHJYHJSArnFtsFKfTJau7t7fXdbkCnoMVgCMhbPUhbEzUb24B4PqEgNSwd7q",
  "key4": "5EC2zapBBmWpF2jsrckiMxuyZfZqfsU3KNS8FikA2aDEohDxrkqjQxW9heQwWnHmEA5cE2yaosoKZANREeqkRVsk",
  "key5": "B3ZL9emuaBJ6BL53szKdQS5RhiSY5eSNQvDSAsYUsgKXDVvv3YXo7RjuuN5jYpzNgPHttqnust5US2eeRbnMhW9",
  "key6": "jfU6rAULpMGC6vEjGMGvSbNWWmBXSDTegt1ar6HnCNQCKeXcLo7jab4ftWZDqNe3P65NUCPmPoscSKdjU9Ay1jS",
  "key7": "g7ArkpEGyYi6N9czAjoJb5AZoKYijLR7xoYsUpWEcwKAp4ig2MeLavZUyFUNCMCCcnYin5epvr8JLYyHewJr6Mi",
  "key8": "3u7ejXDz8EJz1sfM9is3s1o6tynstF5JbDnm92kxszuoMWnQ6y9v2zC2f3dS8eTaD8y15qmxeuiH1yVhhBQGpxZV",
  "key9": "5qxxQHMvmn2nuxEA5YP6ap2VViG2wuVnohkpNVbjzeWL4AXfvaR4Ybk8KGkcfke1jy7rP9YDVbE5bmmpcc5uVNSx",
  "key10": "4CAa6RoMAEHSz9hnVrsbmsBwRkWzMwewqfTTB3yKfXj8myUxax8UMsqQSFPHiSGzz63SNuEBowzckV3oVXDddsw",
  "key11": "h1bf5g8p4hA2JaLAAN4ocLuZUXqrDX54iagAFN1Mdf7usrWhkWDyyw4dt9XMmdxRKhpjaZh5tD35F6AQEJUsCu5",
  "key12": "36Y3HX5ZvoyvtdMTfjBcvAP87M4xjQskP9MKVUX74XySpmssQnufJgHovdH5wiNhd3EPMBQFRszpRRM9tSwXdbWK",
  "key13": "238inZPyWTc1oCXrbuXbjSdUJbFkHgAtpdvfGD91Hp1kmENWnribTPzQfDPbc52GTWgysZtb5PwYF86qXMPgPY4Y",
  "key14": "4f3j29qSXz1Ers3rhtVdtgJK2q4Ff3sMLAhEk33q7M6cbiCYLeh62g4eV9nggzEWrT6izARnuNuNncsoJ4LStBso",
  "key15": "23kz59LMC2xM3jtYAmd1mMZiyzTvvcQ8iV8qQRurmCDH9GDJeY4rQ84Hi3cPMawXZmK4ttCMWvVfN9cgchq43w9y",
  "key16": "3FG7yd2RM5XeQAf6euvxeWerh7SwAa4DSE7Scz9PUCSMi8BV48C1ivxTPBVWdeQoucg3cwr5b23M24umEYv9WwPC",
  "key17": "4H8C9hTcjpKSvDGVPj39EzfpYKSS2K3vyGieJc6VxvtNmLecpVp3eKLiQq9EPZv8CJDET5Zw9FAZaqhPosJrmubk",
  "key18": "2J3y9xXNzdePiDvwh25GfKTGFHZ27JphkGowEmYKVS9dm8YHw5yJFW7tziUtoEkwXp8PDNC8Y4KEqu8N2bittYYQ",
  "key19": "63dxGM7zuSFYreb2kbW3Cxk5ZgEp43Xa16ZkMPeRgb9dHaoKHR6ha4WFjN9TXRWAQeX625F4511D2m8tb4SWWobR",
  "key20": "AukmbVXL8ifXfFT4oxpBnreN9zRSz7MWhec9dQVtvSCvai9QNSnsZrE7JMZaoP1qUnMvCEGWZpAWrU4bnLCt3aD",
  "key21": "5pW7VFSjJijMFaBkvijZtRYQpvmfbmraXf14c7ZAQaRCuAavUtMAabcpjpc7kv3FEA25M6axdyqEYA1iP3SNrqLm",
  "key22": "44ESSbBpYZB5QSUvjd2TLxhZyqDusmhiJBZHkMMFCAFidPNQKURVyNHTKYFN8knhjbDfxRE56dm8QSJzDwZgxh7J",
  "key23": "4vg6RG1zxHq3r61wS6hp3uoe7U4JrxvmMPacKfgQcMyVYb5mFSo8WqGrSvGhMtRm1jBUdv3yzLWArkSoE4848XqM",
  "key24": "2XL16SqgZyjEFqxQ4diUQbqp9ChcMDL8etzG9zEeCLHqt4UQQj57YjdkQKF2DhCZTocqZDRHJw9B7cXg7ESnGn3c",
  "key25": "5kDvnPGwFGvgfJf69SVPa75WKr55Bx8B7ei29BirtR1Z7zj1Cpr8m7JQcaTZ2992MyuJuc158J4U3QQVErGrLVUm",
  "key26": "3WTMpjoRV1LvTdwtGNZDpCVKknZjS1xqCnyz8fyGh2isEjwu5JKjdzYTpwgYZH89df8DjTwC39G6znyJXoeL9WpP",
  "key27": "43qpqJLt8rhXR72tMw76gKiE5qiGfprXfC9ZxEBXV2MtyBZ8SjJxdLzbtdp4wkwG17yQ6t5LHDVLStdBothz6CLa",
  "key28": "3gFgysojRL27SYDXqfqNyLdM5o87dKU1SrFTxz9mTS6QwpSYtmNoPtEZoKp6o73kAjux4vfEPna31G6d9iBxPQUt",
  "key29": "5WRKzuBiiATQftbDSDdNePN1T4EqDC8rYpLuYsH46jxA2TPSU5gP2nHpoB7tqk4mrxgu7tzdFeuLr1VyHZCP6ALs",
  "key30": "2jXCB2VLti2qWMfY3yW6sGZgLMX1LeTZues3qR4itCRvpZCphLjCoP7bV9PLDTYo16uunA9NZBnZo1sSJaggFPQV",
  "key31": "41mxD4iqJvJnvt7LeV29Qwbjfx3vLJz9kyh2ikz4yqCj8Qfg6VUbjvvuWKAex2RHR4T9Rb3ssATP9wSy3uJaW8U",
  "key32": "4bCght11MSDetXv6mvnwpqyPonSq5wRajmVj4hPgJ2vetBuoeDvvmBvisxEYHod6ivy7ZLyqBoygX5f7ejBzfqWd",
  "key33": "4CeW3x32iC19qjxZrRT4bcTKR1jQ3Bbvt6XDDWhNhrawYidHtCaJTwRyUauVFqjfpZkw6N6gToPZfK9y5pubyVzm",
  "key34": "4j6Xy2yR8acvfsq4AHkKY6hn3KEipFVoC2mb6Yyy6yw3ZDX19CRtZxrHebDyCmjFoJkTLvZ8PbEdzfdx11JdrZKm",
  "key35": "5JH4d8voATbz3hQcv1TQwHLq57bTp7WVHZ1hVVR9e3iAniiYCygBQjeiCfCviPp6DaTfjG2Q3SKi6Ds5XwLXRV1m",
  "key36": "4EUeBp8T39QTrbpeJUwhKhxo2GmMKDEpeCVvXWiphW45BVdTq4CAWSCKpT6acZxhoqTPR6hzrMBz6Sr3QMQZG55M",
  "key37": "61P2oPHW6LoaC17wd7VfDbV2kLjQLu5PyvczLs6cLhYR2uMK7cCSRjMZG5SPgp16szyxUeDsvRFPDTdiRyH9UTsS",
  "key38": "4p9XPbdY6NTfRGhuf97S7hcQAXreuNGVZ53bKCe46Hyk2RgH3ADpYcGiUTG9jehjYckcJ9ntWiumKxaNNvMaWmF8",
  "key39": "LNJ84wXHeMmdbpHeqF4Aq2CHj5Nmj5FDnV5eDrAs2ZXSNFU7MhtJ21NCPNaiNvBnmJ5Tm4Q2SwbrcEGbxSZmmSe",
  "key40": "4eL3vDYYu14mygdH199WQus1PQ5pmU938DGJFWsWyFCybFJkGth8TfcC2pRpFVr6aNNZjYAYjWocq2LnTFZ7rSFJ",
  "key41": "3NBre9QnCf9E9z1z4WhCD6UT4kAjGVPk16E2e32F8XJ82pkBJt23qM5b7GeFzaNenJhDuY9cSMWR7VcBRuucFrrz",
  "key42": "5MLfoz58R9dGtLgZ69yJcEnfkRfwTGWFRthBYs3d5jVtiVGg3YFJqzWz9aU6Ffsxr5hM6xPKmet8gjhnursCeN8H",
  "key43": "57okx99JRGaiWkg3gfLQHXTosravV55jWVyKKLfSibkU4arn3etNybDLV7P6jkK8rk1U4RDV2wztbFA36bm4KAQH"
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
