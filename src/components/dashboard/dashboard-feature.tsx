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
    "X8FzKJ6ABdmLPzo6ym9jyWzcSoz9FE41LKFD5bk1Nkid6K5zMZw8bVL4sNAn9Gc8bW7NeYaKkHD9tCmqa4peRk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YA5etdPSpGmmrroZCyLrXLh3bVJm2fvi7j9zmx17Waomdj9LWNAKsgaY3gwHveq2eDpUFBLiHKWPgJ75LXNMHPN",
  "key1": "23EgGQSiC84z53vRDsx2WfFjQVxkmJNpVX62sYLD14UVXLAVN5LiysPo3fFCouGWMYU2k1WpP8XiWG9TPJ7TsbYV",
  "key2": "YXGcyisGEWvdaz1QvmvKe1rqhPXyywJbDXRq6Ro98aPRy8QpppU1sN4T7utkiwdnymdJSuv65KiUEcLgViKgMx5",
  "key3": "4wvumpKvnAPFrbuaSnweGRdKYiFPcG5BU7XVkkqcqHUFay4DRLiAC9AuZdzv7zwVz38jyjzkXG6U4FS85tq2DVam",
  "key4": "5MeMsPmBgU12Nspk7mWyGJnUT7pH9MfrdiBRsm2kpkAoGXwG9pXC1KzqTTXws5dLMstVFVnZCYxMFjsqpD4yxk5w",
  "key5": "a43bRgPMgEW2Y7HMStj1vraGkbfSQusNu8dMzMdcGaHaNtkVhmgc9npP2ET42xKuCZ3Y1V3123v2NZ6NAHbQTa4",
  "key6": "3LyYkcgYDenAdLiPmSurDE98kpUNurq9MUF5kKmTXiEUv1riArorshEXi3bF53sUkjhLZk6LDPBkGhJHBNKdcxxu",
  "key7": "34LtS48bj8sWf4L5oajGA5JvympVr6gHoTyKfQ2bEArH1KHQ81QN6f1DTa6GQ2yWsqaa3RVgJGhTZqhaFY9edbAo",
  "key8": "4Y2o9aibGQLMSXjNP18vLVFuENt1n1eL21hnRQnJJJpnA1B7UdneDg68cjTPNBT4boEznPchzpd3RZghtotsAh9M",
  "key9": "3cL7UGBW8ukq7jppa97Zh1x7VS6R28ZaPRyKPJBYsFT3UtQkHkQ3nz7rxmPAL4LTXjYFr2ioJEfiemarGkQyyfEN",
  "key10": "b3rGg43fAk2HyJHvDhD4GpaJnGZvDMopncfihZf96ENzmTpqxgQGFSqjkfieXBb52QLW3SGRoE4BVZ2qR4oddAv",
  "key11": "3fCvrEyKyrjErEzmsZMp69uugfp9i1DR15tEVVpWSSanJBcf6yWDdr7d9Rs253QDFj5vv1jseGXxEpLJ3debfkDE",
  "key12": "4atRVC9UGaayHoFeVu7aFmJ2QPWbAFiYfmEuHtRKqpgQhBSYTgwb43CeUHf3LYQw7AzhHLGYvvEwoyUppQTVxsqo",
  "key13": "62W7w8WPL46CGUfvRsfiZgkvPRSnzLsT8QvZvV52wVffCq7daze2RQPQhBPs3biYck485ZexFvqDW48A4sDWSLCy",
  "key14": "3fKURi2SdnBKQWM6hymnAL6JAWdSmi96DbhK5UuLJCCaFf3RgEhG2Dyz9gjqX2jKu75cRJpfT8JuQbDRo26QAkDU",
  "key15": "5pH6XPXqtsapuqwEkEsrbFPuwPArgezEvQ5EUyfkCAzRUPVTSMGJxV6gqQcy7Cb8ftbnUz1VeuXhzr1HhpjLcs5S",
  "key16": "4AvyEciLQk4t7fHqiULnfCrp2xpR7iwSJWJ5ZAYN1ScJ3FQDoehQ1zDdfLRFSRpYd1mCiAf23aQ3muZ45wUQy5sQ",
  "key17": "31PaZVmA2JCGbMtXLrMj6aQeA3399qbwmYhKa3XqDZzD2vgNHiQ1ZbzWULt6aw3z4QnLrLRdvUYeiCiauW6xQsau",
  "key18": "3AWv3U6VnV67CMUvFA6saQ3pveQddsHdgLoiXsBJCGW1KVNgwP5H5z8Rrv8N9Snus8YDWwkcKGa61162w4YiP4h2",
  "key19": "nQV7e4cVZd9J2amjxykD98ogt88eKMXNyfLFb5k3gHrAsAof7dn89wjXB1Uh6sbjXKkLAji8nNRKGAmDBfrpfkV",
  "key20": "2SDuCq3s5Dvq3cwXC12iZKDZKZxLMaUD5RKHj53atworfxHGzDVKyzkmkgowFkJZimvnYfGrKjFYvNVoFToXtsoD",
  "key21": "5JN46w3NWWKAooqu3NbqPcZoTbHuqVWR3kePFhyfdd6eBKEsJuqYR2uGZV1exiS7dTg2KLDYK71mtzpLPzsqGBW6",
  "key22": "seJCkLDvRzNRuYpEJ8kjXzLyhWF5BEX8tHop3vCLzeCtRLvvV2NyM5ntSpEyJhoAkhmZuz8VCp5pdXKdZuBfD63",
  "key23": "2CyCm5cgkTuXiQ9QccEv31ntKuZgTf5YpiwfJKcvRGTtW9zH9CTwzgZUGsJ4Yhx8HNKA9ivCh41UpTEoSHsN5wg4",
  "key24": "5zXCGbX2VxiYZDvwJ8dJPoTQ7CE1CN6hfrLPqrXvjgLtXWDUB34bw3rzZJnSH3MsbXSaXLCtmgy3sX28Jta3o7MD",
  "key25": "35yDbLEQBpNpTZ56E6XFq9fg8a1rWorVbzY5reKuCzzwwW5rHXqWyfo4nt2snkfUPcvt4uRa9XA5vmVAcow1znin"
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
