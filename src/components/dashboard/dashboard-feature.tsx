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
    "2jkcm9neJEwJmnHvtWKh199Xm1LfcsCpkJjQMiLDfteMzJsZ5R3kASyEbeayttjgPCcis5EFiqb39KTChHLTYroM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xJNmtoStebPbJE37dQvEjs2HSUhZkKToivYtCufNKbXFNw1cfx5qDeDyE894EPU8avGHNavrGVHBXgR6E42ysy7",
  "key1": "4Hvy6n1xsbE4DJfdYycnPA8tPTK9JNSDTZhmKHPTyK5gxzFa1inQeutewoszijhKjQsXiGxiPqAh2Mwf5fChuGgC",
  "key2": "CFzsmgNT8CPhgzjAWzALg8Wm3hiq2MYqiPZZ81NScRwSdQsniSds3ohj5bbpd9KvsNsDR6a9vQyetEmWzQG9efL",
  "key3": "5xN6B4AnUtQzQNqF5NkHHFVYBZznVbVZjjCJoKyScQ9nccq2oyWvGEhjxWPTHGzdrg7rrRtPYEHfkq2NwLiUzU8Z",
  "key4": "2TJBkkuTK4JPDqDBo1TPqLqcFP5zHBzaeywxU4xiFhkZE5fWDpY2xwLvmkVXLpfLP6HSDX3ByQS9zXm2VoG5dGDi",
  "key5": "25LwjHaACWKNNPa5ofADE4gcqjphFWdhsPeZVPqZyWbhGfA5y87mwZVAWjx8bncDpPntJe2JhG5Mc7buC3K17f2P",
  "key6": "52PffjscUbSRY9o7U59PYD5kSYrYtP2C8cqtG4sDXymCfSaz1gv5essKx9ASJYBMCmuHF23ss1oH9YJNFDYuMVCP",
  "key7": "2KHNdftC2ZcXfM1FgJ4of89PXFPyzK3T5MG4Yo6UVUMPYsgFwVJZVpn483C7avmHSPTKiZyTZxyZfbKvjgLqvpcT",
  "key8": "4wz1jfgTZ1DyGbRKyUeUmtCgYwr2yu9ofmwkvDWQhEoDVZmV1ayBsVyjCic6p9uSFAv5z1YEuTgDJM6j8y3grt9T",
  "key9": "5sDjcroCFsFMpNoKju3zfVcY2w9TKPysV7RpjAVrsE1vRpTDeVy4azeGj3gLq8BJe2RhJkDjdnyFV6SbRxsvacnP",
  "key10": "hn1AAeVSVXs4D2ZPXoLjp7YsPXrgnWDuto39CXdCD6y3byhzzthC3MCWnnvDTNiitkB6AdDuyhpRaVBuXu3CW17",
  "key11": "2Gw5ghDqqKw3kTpmYugJjZPDFw8iqf94yeekjWypR4Gq4JmF3UjD56hpic71Hyj2KMBD6gKp7nWT1J7CqaMGvgie",
  "key12": "dKmmV2BwEsti3YxXEtVmDyTNzYuR63iax2xGAUVkzs1Ei32J7zTitA5UDXdvwsKifnyehFy8cKDSxH47XqG1kkz",
  "key13": "TyNAPCw9ZPirGZcnA6nNFqeZqKTk7J5w1z5bhUyttb3XTVRJm7UcohUrCoHCYMsc17e2T9zUV7aeK9e2JjVeeVT",
  "key14": "8CrquU71EcNbX4TtTY86NcVrsSawVvuH53Dpz3bcueBo8CpcAhnxSRcJG3U7yPyidcnSnCMtCrca635PsztFTkj",
  "key15": "5Y76bARnCZmtM3is2XQFX75VXQNNTkeMThQVByXR2ED7jyBw771JuavUMmk8aUV1yqNWTZ7qyvXLqjaiNZm979Dh",
  "key16": "2CjaFCaZ3g8SrMyz1dezQYSizheufiU55Siwg4cmyw3wWrLQ8kdWE7zLAvniYVuvoKKmhYiyqjw8dwXBBgJgsdsQ",
  "key17": "qf4VG2NfzqtMgBCHQZAVqvG4M2LuzwDTfWz275tkxt45GpJEKZCsYvJ13HTwhB4ZDom2eoUq2bRRAmvrCs1wzkN",
  "key18": "SLxFPW3aA5TAWVq5LoskTumrsdQFWm7ZQwLuroRdHPNduMj4X8N6zBRY8zeZnmGKa3u2zwFxt5nfPu58chjPeE3",
  "key19": "4Gku8A2DvU6QDcn6nVurJbwmJ8Bh3P5uneuthmKN5kdKQbUvQS8DSheDWYKwP1eFZ1EJraEAs22RTLQQdQmx5JfG",
  "key20": "52TwXU5Vv93FH9xQWn67qJHA7gJgr51MxghAtxJ51QGG8iM8aBVVVhUWoVSSTQCdPt8jSURkdrcAKga3fp5Ghfdv",
  "key21": "54GBkx2kBo6NV95GZBBpzXgYjZz3rd32EhEjKiBn69HDHSyfrK7BTsJ4n73aq14Coz8ajrgqb7TyjFDTZ4fe2WKJ",
  "key22": "3zzaYz33i87eoumd3iKQHyxHrGaeCbK3ko8duXweBu7uP8zHH4XrUahZKuJEmwRtmbuWFjYf8xJgf5wqYUcziE58",
  "key23": "7EbpXZyQqfqK6Buvv5czFUGPdEHdBtsKHgHgzdS38VQi8qfUjM7QB4eWEHNufuN5xggegGGKY5KSv2ope18818J",
  "key24": "4HLRiSNYzCzt7bmo2kUWbZRSydrZkGZgbhkebfJSgueJnoRvKGVTTh6QvdbVq1WikkN9WG5MNz8VddrUKrAEB9SR",
  "key25": "2UwQ8jL3kAp8xf6byKqUycyyks3VuAebTsnuk9tvgohPchn5LZcaWLq9SV8xDVxHXavcSMpYpjyJfNfdxZDFMQNk",
  "key26": "5cZZUYorMNRgAGiHhgUHSKT4VbNBFYdagVsJroGdqqSbRgnzMy2PDhkqLwHfCA24Fdh6aHi1L17h6a2m1nwpJjeQ",
  "key27": "jjES4bcCi4GNigRzdvL6A9EbaKKjra3my5LNrEZkbndjScVtUZkfhSpHvBB4zz2puDjECB2ViCFGQGoNNw4PezA"
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
