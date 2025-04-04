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
    "57XntUxve8XjAKkXKBGYYyvjubfzjogbjR5KNctePzni3agh9Erm3LssjJCjbPmBn1FpN8dr8JFte7cHH9ZgdMPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qVtzYaGEb2R6jSaoiUBXpHrxaAMyMsUTBoZ9cEtDkProsttn4NAiZmnZc1vg6XrPfNMQT2bt5uaJMLFLDXeVRRU",
  "key1": "2KPpemT4qzR4Re5p91gcj9m3QVGkNDjwDBqJLrRm2XdreXWrbDqrdej3tGZRnVTVqeDQNLgzhzvdzWGG61P5WT6n",
  "key2": "2ER24diRF6SJRfgL9uQZWrS1UGvrCp9sFsg6snz2EYNdHLChPq3EcW3EVXsRrNF3uaWCMoQjRz1eJpkQNCxc6E8n",
  "key3": "3eGJYHZzdwYJN3S5AV7Spe65BoiwD7daA9cH66f1WKzaRD34np1yEhgcwzihYZvVg3cMVehfAgR7tig1NCLp8TtA",
  "key4": "5998aMRkWxFmrhHSmqqjH4fU5wCbmUPyoJ3uCWYtshYkNJAFmBpzp8cdfApuPFytP9VTQt6QGEJFoYtBEBQfWnc4",
  "key5": "4LkXBNQdXbFQuFyCSsCdUgkpuR3X7xWYL6REcZYCc1fXtcmQtPpUatfVBMyuejGjAsBvkML5ajtLWtLk377v9iCH",
  "key6": "2H1MRmCHJ3YWzfFXBUEWqmBSbka2rWSSo22wdM44xayjVE3VRtGB1ZGcAm5th4Nti8cX4MxbT9F6mEEMjpkytUpx",
  "key7": "2ryCmx9zcc6QBpHvkDDMRVeZVwa2qhMsUjXf8kmKxZN7emA6CoZ5LfANSJL2ykXVTDgg3Modi5FCMFZUnzwHUkGH",
  "key8": "42qpQ7H3MhGkbmMuK1y7QpY5qj9iQjWH7P2d1k4FKZBAkB9fsud1ZSDGMoB6DsojeDBwuN254pTMA8ohJdANFqkb",
  "key9": "26Zf4CJ7tVDUVcn6f7ZK8nsZwsgnGpV9BdDa2RYhF4hQzg1BNPG7rsiGERWTTmKU6Qxuz3TJvC6okV9FixPAki9e",
  "key10": "2NXnMvP5hwWG1nkEc5d5S4cjFPRQhtVqy1LfiwBkEsXuKtjWukkfuhx3DL9WWmf8WHDY3eu7xFrsm2qtFwU8pNHk",
  "key11": "2wJbKwHGJw6sT8rSTwQconLbhoPYBL826QSoP1j5d9hjkskTYHRTKsoJEAUo7Zr5FgFAZ64xMkGfnTcaMeDTdwmf",
  "key12": "3Z1ueA1VPUSKxRUVfgRHa8QTuBc6QKTMGxFcHPzuigucSuQcaJhUdYP514sX5SdgmCEZHJFsCAFZ5YZgrkzJSfMd",
  "key13": "2xo1oD9pQarN8vuz57nohFoja9abBwro4gHbKRtwf6XTaX8XxB4LzahsCFbxbAFR7fVf848MEzD4iorn2GDuUp5G",
  "key14": "4NuT3VtFG4kCWy3yUzQYAWKVRMtjoL7HoBdJMzxoQ4i3Cf5WYH8eGUd2kT61ao1NAMB36TM8Yd488ii5sTDsrQdA",
  "key15": "L49htVbqowckTjg4MPYLcK9uT3mwaH8mpCx7AbBFJ45DuuV4p1jrRAxPF8woESFj2549Vtd1TFPdMpt6PgBKAgE",
  "key16": "36VPPFPPophd7fnV4nsuZqmRzseoHY15igaWAaMxChHqdQ6NUxbPC1iL8SaTqrCsSaAr1xL1LcDY7Ynaj6YsrbPg",
  "key17": "5TsKvPJTSrzmfTgxcvm11QXDbrYvjNVvPMQsyVr1Poem1UaT2zshKQCaUxWRJjPK6RKQLGdFC6bKLBqFyEE8i5ZT",
  "key18": "3Y4t56rwzUkQbpNSscGPNK5rGifxCaKui2q9iCQfAW7T9MkhusexRNiQfRVttNkNZZhVrv4Jb5xbvfpUBcXVoY4V",
  "key19": "3j5sBuYwRAH961nyJiqAs3Tm6a9Qs6zxqz7qCS7LmCM9oUDjNoRVJMJH56b7DDi2TowNhsqaBfWA5VGU2qcy18iG",
  "key20": "3N5YzppFty24NZsT4GVieHFao8qwuY9RubjcSbv4Swmb2nHaVBY86xePMhwVVTKTqBS4gmQtRRNu9bCJDvpsu9h5",
  "key21": "424nU2tpNbSLuxy63LB4Ab3uCR5cNR1o8r1KuoKMbrtNfJUzgf1zFxmgZ4zQhrxQ5umDo5fr9vYedaQdcKi98g2P",
  "key22": "juGSfWAja5eTDSgTmMzNxkw7FXizT6v8DMEU13pyGjwiHkEitgyFGzq2uvRv49pqbdKdxCs1efdLVhjDb2sjzpr",
  "key23": "5EJ5SmAYHS8W451Z4hjJVYgqqsuUFTsuxnp1HQ7Xndf2aQP8fzmCKmdjCtD4nZ15fNNt8id24MNJehTgJk4rh38J",
  "key24": "m3qpwNFPqrak1dzgJt7MBfSfZ1dQd3No2iX6uSphwguenJ9sjAhyB3VK7koovRvz25a4Y2u9Mo9ZPXAKmtw2Mga",
  "key25": "5JqHfcmHfu4d9iWpXEkcdXGwk8Qam9uUgxBrPLHwJJuGJKnd6oToCrYVdwnhvXa1MgBp8qT7hQLBudsktN3iR7dE",
  "key26": "3otkFyVNnv6hih7pfupVpvHdADcrmjdavEPCBruZkoUw2Vmr1YmuxDefVp4unJz3qxQ4HjVGekWepiKZVV5yqkZH",
  "key27": "5r24wrKHKSuwg5GwjVgzLCyynaY8V7YqaUAcce4YAGhGbPYatBp5xfMseKUApuaCQAAwouxzK4whLgzfcyv29BCR",
  "key28": "NrwCRLauHtN835bMSFCbYwRMznsfGHTXvGREwbEgWXi6cDPRMJLqbEpJJZcu1RozXUBLYNV1Pce2pw1Bosq6TA3",
  "key29": "35UK5uE6X1Ag2s5LVJazfk8f2CC6sYaUuwR4RbBQd41h5dKEp8RfwjJ1fnGC441jX6ZZ6H6LNNV8CbTxgGnNNN2j",
  "key30": "5bUQEqzRB5NzeBh9gMNNMgfU1daGnJAiDG9eFdTkEasbeN4mBZ5UdGPAEKbkKKk8aM3tLMY9ovj5Cznts4GAeUoz",
  "key31": "4dsWkCUync9afiUrcnp3k9BE1cpLqvWDBsc4onoLNxvBASBcqWfQVp4NAn6uoxNYNGe3Q3oSwrdHMKe3eU4wPpue"
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
