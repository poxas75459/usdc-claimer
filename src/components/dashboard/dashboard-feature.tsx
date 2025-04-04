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
    "2yqS1KqBquaQR7tjgGL5yx9zCzfonNatTdPJ6MostkkP8rjk4sb1ZnTku2peTgiv7XpF7F3QT2SdobEkppKbfRd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iYQ3NqtMUBGvAVMyJU8zAmUiizXUP6mDpwFX5eBNuCh5KHgHjUoZ86bF54PojUy42qcJPjEzj6MUkHxiWHT3e4r",
  "key1": "4bNK2Jjm3yA8vYkwCLacN3eLJWrqPWmomiWHRNcWWmp3AFH7RyDH3MAUw6EiPMvx4T9ko32RsJZ2aFBX9Bcmuvfi",
  "key2": "3S3ghmvnLFmRUf6UuPZHZa3f15kR9rkunTbYgEXWQ5FGh5xDMdmxq4uuH4B52EP3y9kuY4WSsVZ256LAka4qTCnr",
  "key3": "5j5TcT9qcBGJCRaups56HkdFVE2ukQre5SHZuyfdadQnhN3mwMET3AnJhUxKt2KACxVYfaRaUXK5Y5XrWUJ8rqZi",
  "key4": "3mwSZsdHyMTQB8WMTa4eyRtJZiaLYuiAFAPHFFb8y4NyuD5BDRrMQpBGcDUQiJY9HLnZviWeMvRSRfLECxxYxqss",
  "key5": "3gaJfMuNjJd36MV3n59XPU9Xg4wN23DkSjU3sKkeso6NWHedFq34iHW1aRNqghdniUK3jYn5jy1ErenCCPEdSY3u",
  "key6": "3MrHksyvn5AizyG8FtGFNcPgeqF1LHdXt1KJUMpjj5vhLyZPnzs459oz2wvcVTxLNbaNBMMNNo22kafAygjcjzG7",
  "key7": "VNUrEejsX6HyRLuBgiDH3kAJBzsxGaueHnJ19GzN3d2YYhSfRLHeTis3xuuR9v8hePt9fQsH22BQ3x95UGRhMyb",
  "key8": "5EDwJma5pZTF5PkE7CSLDaoH4YPQFoZPWNN5PcsCqadyAWwN4bbMkLz94mZt26KXhoh5ZsgyQaabFahAzFMBFGLg",
  "key9": "4KCSqx8fRWmyosxvwTngHmX46rkqN487Cv8A3cG1sTZh9qhFN2g74Qnmv1mrwj9cvGhUXBtyrk9SC7xjR9cm2vxL",
  "key10": "2DT1C1NshfwU5B2xQfQe2Ukc48GtpKanXexjFgAUJWuaQy3tVpY26wXQKoZL41cF2Z5e8KKxz6eB7ZFXg3sCgKX2",
  "key11": "4dRiFxGDkBJZF92FiTP6fALimYFVPQwidJvq7esJLt6LHgnuxbanS8GhqHeM57EQE7MssRY3Z2n3R5DnNS88NqVi",
  "key12": "2X7QJGNaN7d4jq8cQdbKctCMuTChRm2txokpyyHAmndGYs7ozKxbkmuy6qSPaUAPNzjpbs35yfwvNdWJgx9GrxoX",
  "key13": "369j9PtfAvUZ6jyijkRBXVoSCeF1gHbKmZbvVfRd5sewFppiaRKJqN3oxWLvmP89LHz2JPVDBpF1VLrMPReCj2WE",
  "key14": "EeZnmJ7zSSfVBT9YG1obCAg9zxiELLJJetfFytJjeLyDB4mje2Q3cNNdCeYvjbiKbGWf13FCRZd27C4BD1VeTF2",
  "key15": "YWAnst12bFjWmQGULSSEnnazYrLidvEghJP1G5ahuctKVcVNqfE9CJVopUtr4QdmBVJFPM5qS6XkjfQhSPRbEMj",
  "key16": "3rC4kZ8dStmQJeLBb3aGSbNLCpcJ5c4N1fj1ondeq6hR1NwwT18KmauxNa2VjKSPVeauATUaxEPvv56cj6WPBg2W",
  "key17": "5jcvFBbTCpRjaJdMJ4jftEfhme4prA4ym3vMscydNxV8m1vK8enB2cMunYXvubJCsZFeYMmxZgBC5UePExsunof8",
  "key18": "4Cd4pLjpg7bHddkNQ9sDest2Dg92vL2AwWmPDNif8rc6ApUyFtWmYWyzWiGvuACHcTrbpYgX9KWDodHsCie8Fq1R",
  "key19": "64Ut8SYRpWAQXDQAVeiSsjaVnEmFaV6zh1fYcAoXmy77bDeaeSPnRrSYCSoRytRt5TARFH6bRUQd51NqevJvTt34",
  "key20": "2HSY4oG8yt8jktjg2vSD3W2CATczHXbYQyCjnXZnbqbUS5bWrKSJwZ59ggTPummWdcTbniUWSGLFYkVDWEtcgJLn",
  "key21": "2iwd2K5uF458YHDCSDwL51SabCZgT8hvWQ2GWxk28A3Pr2uUgLHNuqusVnvqwpWXd7fE6K36JK1bkwUswAk9EAyv",
  "key22": "537Ux6G6tRcd3vwbecv9j38bnUXKwgqgZd86JewWfMHtC6zM8V6yMw2kE6PLKYpgHsodesELyP6PnCNCdhpgZoUR",
  "key23": "2riG434YTybZ7egTQo384KK1enL2brF1671hSpjCQg1C3EP1BM7PeETzNeyARp8FSLsVCoAU2BaZwx469y1GjnP2",
  "key24": "3MFwSX4C2Rbdw4V2E71Ghgs2me47f1VBNikdvBxoupgBzCrmZicNqCZF4WLQdkSwhdinbfdHBjaBtfBK8F8JCxBN",
  "key25": "2WUwisLJvHA58hpDQgNKDD2jFqV2PhKQ56ug5fuG2ufuBbX51StoHCXu5qX6GfCK1HXWtcKoJjyBQJ3f9v9YxggA",
  "key26": "3LrvSEVhX6AC5bRxvWAcQ8oTJVZcgF255fyEP23YTj4fJ8gMRydaWHowQPDHe31QBBwjtrR4r7fhZBHw9gdfTApQ",
  "key27": "5cXCUFggSy8W3or3nYph7MDPR3RPtia6eTqsDGJ6gBWNMqXQjZtLxNr9vTQ483mVzUnXvo7z1ib2PqoBWnZqSvzN",
  "key28": "qibUiAkMLcQX3JFMhTQTEPLAsQ1dYBKs79dWswr95gCw6sJewbjVnus6HCaaNPALra9r3xM1zVa6NHYSL1w7ZQe",
  "key29": "PVbk57sTxiTPQi4ReigoXFVmrb7dqgfaSew7d6ofWRyCHEPimgrCBHajTRUz7oEEkYK6vcsUBrALPi5fFzv4reM",
  "key30": "67BFcQ1iVuA9hHs6k3t6WMn8vuTzUfRMqFNhLpphPcfWDYcE9u9q1YFb17VatTYbSdPnE8FBYddXkHWyxDPRt82v",
  "key31": "5tC5zPxqPvgfji21KDHBDBmnrLz414VifjK1zT67MXofhoHMdSLUS3Pf1Jm26dCr5EKoJ38rnq3P6RqFVnua6o5Y",
  "key32": "3qC8ugJQh1iDrLPJc857MM2BYEDgvnGut992A6YNNJYXy7GWcrcCRompt7q4THaHSButaSXoo8M6fQ5xHia9XzAZ",
  "key33": "rdQgHARdxxXd2Eihzhg3dHvLLY8qr9ChiBBZyxtuiBZAioux2M5UoLKZieHSFV1rWhQVFxuoPQgTaCsmrRewfdc"
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
