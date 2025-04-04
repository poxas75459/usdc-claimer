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
    "MT9LdvT32hdAsAYzFyNerYc8fVay79L59MYMvPrWi7b1KNMdThQd63oXwrrCKUH1LXj2LzKSMxSEDW7atViccAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NnVsLuDyL9jAmgRmW3X11gYw2PKLWYL35okMBpfDupd9shU7Sr6Frj7SXBBaaX4Em87CAsnBJrBt85XWNDzSt2H",
  "key1": "2oyKPCbN9mmX8h5Pb5AEkMgmcKHC4DVussXycPoS6AtuKSaNfA42rwMSENrRPvimJYz3tLh5Mqfh8zfruBQj38ie",
  "key2": "2bTZDj8Hu9Wkrzd7xvfUDvezTcD94BGLuWyWDjtUTHygBpSdqcAYwqUGFD385iKGaBhizYEvQvL4JLbiT1fvHfoF",
  "key3": "4s4EoqTrH3s2X6kg9hNethfSxYt8ALhELziPtib3v3r74aZPTwJCFduA9wzg5ctQYd3TjVqZVVi6atDdymUu6t3H",
  "key4": "2YBDjgT4x5n7ukKpXGhMvaNS5DNFJRkvmQxNANHbdc1UmiLJdGZ67SBcS6nDr2NDVmxG2tuhY7P1f7cF3NqFSCxh",
  "key5": "3RNXHDmE7T3jMTZMua5FzwwF1ADHRvH6BjwKJijpBbxdXbR4V3qDHNL7Wev9WdDuMNVvvusdYgoJTAKktwMExtxn",
  "key6": "61cqi7DLfo7HBsVXJ6bALMeeVwUR4S1sTY8EynRQtZkCdGoacQ1BXaX7mQf7MdSHkNU3nVHC1YhuPzeFzZxt4LdS",
  "key7": "4tJ5FvU83UpCXNpMEd9fiasqsi5YD1iwXCW7QgGywTQJTSzPGovTZgpQVe1ugMxjfPM5k8xgA2FLgyp1y1t5nEZ3",
  "key8": "4c5iNDcgAa1b6TUczGtrNnW6ikrwPLSZ8Qq2ePuA8ea4GwncZtq4vhbap6zJUUVUKVvtVeRhAgMkWqyxygUZqm8k",
  "key9": "2iq5H5FWHYLWtJn2obwpga7qLSYGZWhY6hEmnNAJDKfFUayQKcsAJqp6DtWg59Crz5VRCrSsujcr7JdBAhNKyBid",
  "key10": "4SJmZmwxLyufWz6pvK3vaHBhogHzctQ5SdN5cMnq7bBM5h578Y8vRcfe9UcbYMkrf7BjjWGoUTH5x7PGE1MZV2eT",
  "key11": "3ekuY5ipiL8iUggUqMhYstst9wH23xzAUMVR3rhr9zWJ4owtSbV5x6oSDM7grS4mf1MfHvK9t97zVtrqA9xtaKtq",
  "key12": "41d7hciqiw3gzkFNPa3aVJC2dFSG7HuhtfJ4LDqBaaGuHVyDwZRDnXoaFx8tWvy295AGXMi64U6JN8v3Qr9SnEkP",
  "key13": "2xTKUpuVfaZpKwPoJ2Xo8rUf5sJbE9ibxDmUsLF4L9MCsNwhErLgL7viQttRh6D9GZM8vsJygKHRYee5kDbu7Dnp",
  "key14": "3uf9gpmpTbzmUdP2u6fko2tkxJ2Gfv6uUbybVzvFg6SD5U48cQiUEjj9K7mGFj6VEP9b5orfm4KXC3NUU1JBXnMq",
  "key15": "4EncLmPR5rNSLLy1kCertYUT1364xcPYwzwVGJkumhm54v7zhQkkXocnEFhfhfkZLAzJuB9RdARwB5ar2ps3WsMJ",
  "key16": "2Pt1FuMWqmJveH3jQWVV5X9unj14afbweh1DVkGFtTmngLdXTUDgA5HkbZqcWUoU9ZqrLLMx31AP7veSk1nqFTrQ",
  "key17": "5VpdeLv2MwpYSH9Kz2zo3Y6zRUGhXy8XznixmtNnPFPXePthu6q4HnGc2ddB9FoX2kNnN6G2xqVHXD5ZHCUV5nW4",
  "key18": "2xNdLdnYFSPEcq4YaBDB7jTbyXtNN4VjDV7X6HLGSkkBuYBWZhZCct4r31J3EpJPUP8EWPhGdu3q4BXRZdSDDBXr",
  "key19": "5Ab5pv8MeuLazz9AmuAqBptFAxGM4NGKp4FuTebFNpR4rsNUbC5rXdASxttX7bNgHQngMXg2KUHPRCH5CPDjCzU2",
  "key20": "2HGnVXzL2vijxyXYT4jBsS7aLag1Bu2GoUUrUk7MHEJrZFmirhGwrCKWM58zciyWSzqEQpoTU63BdG9ZRRB8e4Ub",
  "key21": "4EQ6D2Zhbqe6yCtZyAMFEWKDFkFsnzC9sjym1rXZz4h1Qbep2kxaD51CVbLuwAH8HMt6iGtV2CZPFQK8B65cB2s2",
  "key22": "55zoUCkA5LVLG7bajbkZvTdnHkqoPftn8VqXYgMvukW814PhC1MuvGWupQGJ9SnLQx821pPd6fV7V1FX6BKQCAAN",
  "key23": "3dqNJ2aJdST7Bmw1witXKkzisCc39dQS3ZTby2tgut3hfXBXNYWy7sywsuw4Wn94LRdDkzf9naNHM5noZnirehVa",
  "key24": "3tUhJSpPQc12hFFtuTrYRPTM5zWMJvhv8WEXbMFMHwDoU9Yhc2pC1t8hekGrYcbAeDAiqS42p4ChTFgcCdatiyhx",
  "key25": "4bhNNkg3Hkm7ueEPb7VSeksxvMSSU38WYpGCNf134he9CVAcEbYWXswv8mzYSgCR8iyPNe1nFTKAJhsNL8kyq4ZZ",
  "key26": "4idUWfR7KDneWsZk1Tg42ku9QnrKpcr4UfPmdRNZvjDK9DnGDM5sKh1aNaq8SkFQGVmFWoMqU4PtASkGixQ8iwpz",
  "key27": "2WweLqN3b2UzJZAq3Zw69F7XjuT6AkiTQpS14S3LE2fXb5gTe8cFLcrEZf6ZbJUgWUbi8mGz5az4KqzvFkoHgmiz",
  "key28": "3nSkykE5rDPB4PDhfDiErKjHzRiSw4QRkpjvu45ov7TxJmQSo68m5dM24ZerZLRX7L78nNr6aRoo9MxsghCj6hEj",
  "key29": "5obSfxhMCpyz4vQPs3fd3PrnKBYkxArNrhmCxigGsDMvwvitGJamv4Z1NavD1x9aaX5BzaYySNCqwB4ekuqXLLDE",
  "key30": "4TAaQoY1R9tuBkQp12WSa4SF6xrjCiawafTWQSgAgyJ1T87rdbCfs4k2nfQNGnCvZqLtzfeBxFdqXYw9qMdNtCLD",
  "key31": "4tmjXmAKTT5FxiG8FLSUeBBeaSjRzuuYfHzofun5GCG2nBVKXgHugYWHrLbift6gsrM7xaaQ6avU9kn7xFiUiCz2",
  "key32": "3nnGRSxtTmUQ6zfJMrr8PPLRaeDaWSp6RzjhoxKDydyUAxomt42hNmCQek12JPgwXRd4drZ9HKK6vqsSg3vZWaZB",
  "key33": "5zqEfBS1x9P5Sz1AQ89XppGNfyjAuYwtFmv2iEVt1FjsfYZnGoCd23qwLgveaYRs7rKf8H7u7A4EfomrLPW6Wb2v",
  "key34": "XaAaRKSE884LTGFWit28yTQvasVc5tag7NJw1HZzZTkWL6URCbxmkhAxfcJjGJVXuLywGfG4wEcd2egSMndNmxT",
  "key35": "3qUroRZmgPmEzwF5yRq7PG6ibRGWW9Qq4uVQh8xEDqAgzg5dr8prfAA9Tn9mKKXg6H6APz8LysKJeEaQ9GHAvQBq"
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
