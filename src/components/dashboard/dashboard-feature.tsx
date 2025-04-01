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
    "4pRipaQYJyUEJoeyK2jJm9u1mvZzU873gwGvbDEoGuZG8MN3oyAQGG6oMt53YMhG7QDAAs4mE1uRRjskwfhRyJTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cgj5n3LR5ENRcEmm4XfLteT5YkMaiLtG5CFuwemjsNMw2uMB2rwRmnXTyeoMheXqHyh9zz3wHf5ubxeSq4txDV2",
  "key1": "42XbwK34oNdeW94kaW11iorxV7exrtcP7oLwE7VTPTjC79apQXCzKP8RA5cBxJAyggubZCH26bLeM6srvsKVteii",
  "key2": "2nLhrZMHJ9bx7KX4MzDR8kG1qHvVz2GtwKPnuXpj1FxJkWdeCnpucRh23fiLeUBWMHKSXNB42Ycihgw2LQJxuFmY",
  "key3": "5Paczq3sGXKiKTwoHv8uud9a3xc2p46TCgSyvCBnq61yCdWdKp83gWUN8J2oq7ox8sowEsBnEJxpFzV4V6gF5bDq",
  "key4": "3FtctpKQp8JFG2dVwF5oaAm96FiV3Pqss1u2HUoxxQG3obvhqPGPq49HX6jb5rm75w8DUX3CSAEtduD3zWV3cEHm",
  "key5": "V1MwM6NmMGNRF5CAJYLnnBjFT7fAjfn4JtZV97h6mE4MYXvJK9NaoShu7km97gVs53HHLS77FLZWShv9rsrj9SQ",
  "key6": "4SFT3LMMnaPKw6TLE88439EcHvYK9yx74GiXVZ32ySoXkn783rpPykX3tntLrVJP7Jp2aFTafF8HbHS7U15jxF3F",
  "key7": "nZnGfqV7kjpsCssxrfHL689ZZkgrsVYb2VRCuUJyBfetbvwFtjXqkajmtDie9zuRcv54nHqNpSppVv5JYHq1xY8",
  "key8": "5MLFeshSS9y7c2EDnPH7z4pzqaWbxp2qiwiVcdBJWt9fdhnasHajV3kXA8MaKjaNfAAtYPNnGsHYTjMTf4mbpAxs",
  "key9": "654k3UDX3EPHbCbHbzSHJ4cT7k5oXqk1TyaEZNRTfMs3J8uaFv2kR8Ycg9vfhiD4SfW9sxsG5pBkWX6FvyE4X68P",
  "key10": "5wBvr2naAdaX58YcVehRhKsbMAMh6VPJADbJrt25vMhT5n6LFvmo2W3BgMy25vCWc4RjSdGToc4qcjdj397CPkx4",
  "key11": "aatLSovi4YN5pJaw4W9iypSYRL76LdjcATiRFS37KkNMThgDgebk5VqYaLbTyMFQ9WfTisyn3shZ74bLfScRrBD",
  "key12": "4H8q3Psha1CFsah16iJiuDaydRzvcmBZwvJPZC4KKjEXGdyYeHspq1eQ8gcGr3e9ENVhZpM22kz5HJMXNczCChR5",
  "key13": "RDK1Q1SuUsYHP5yd5SSVZkV4cVdMiqysUwPVoxC33DHwQRY4fcTfqVtbRBG8CWkbHdXVdkk7X4bWsEaRqNJNkFM",
  "key14": "5j48bLtjV4K4NBgm2yDVCwo8rtdcx3uSSSL2jEDrw8eZdE9A6nwghN4baEj2sSSSE27TfcDVyhS6iHno7EN1AEtn",
  "key15": "ettosSse4qakrHSr7LTKUZ11UdgXLztiamFVcHxUCQUM8iCQ7KJ94JbPzF2rcWx4VFHXXhEdRzWrDvDL8u2a5Ap",
  "key16": "uBV89GsUWCWj4DTYn5nUFLARcNZjPzEwvhhMA86eWuY4GmWNZCjqS4W7HzWMuXxvUAD6KJ4aDAEo28Jtg64j2mu",
  "key17": "5JBwLDvR22jGSdhdyfKqyPMofbvGS34P78oEVtvf2SNet78AphXaPCqNhCaF7nin8Vyb1JaLsNiCRWaHn682R8A",
  "key18": "8Y3jzMeonWbqfvyqqrUWRCTbU1c8pprFSGNnMR8oCQ9aRdXJJzSajxsEFBusTRSL8Zg9EmF9PiW98ppSXFfWcXa",
  "key19": "5sigiC3qp2bPwdWDyyvcpHPjmoqsAzX7QRygxDag3WXaNDN9ds7wuJoZQaauw7mNcBaCzDPuyrB7x5KUUad6KPqy",
  "key20": "9QALZVeNhxSis4Ve7E6rHWD1yhqQN8rvzu1QVmCw1b6vyMqnDCFSro8gqMcmJqaKpt5uUJUnHWB4BayzCBEn4Xh",
  "key21": "3FQRE2ZKtJ4Biuqz4uqcmDVFKDExCd75ox6uHGDaXcWuN9hLm4XDJ7kPeLZSC1gXEYdRErHQojUZRUeX2bFk8xDt",
  "key22": "5L23VdVvrT5H43wMaEJ1Hnf1KyB3BqinyEUL8xtWEDMEAt2daAgNg7oCm76VprTxCzJy7HvE96GpqfGEeNcEoVoq",
  "key23": "47kdgXF2ysFfrDXK3nwT4WhbSDPUqeapEoUrjx1mAbusRFjDedyok4ucELUb52f5XTTE7u85Kxq4JYc4G5B6x1to",
  "key24": "51278yP9kjJkKFnZFgWpcmMVjrYu1DBAER4VxrsTggTCyCSdxnNGSa9jv8Ng2T4zcWkg9HqRpgcifapDtnb9dKRb",
  "key25": "4vuAHw8fARZ27RA1VtY5oTgSE5ZQb6QZ32E6JpnVA465B4zgPYmfEs63J9eHKmaZ7ovqhbFHbRC4VHX5tkHLpjQw",
  "key26": "2eEojyf2FMbkuCSYUQMNSAk27b4w7iDq5EEfskph6j1Mmf9xtkXCzMr5HjDzjkbvRxvU5WXKD6ne84brsLMS8hT6",
  "key27": "3jxxVFhF3qQtfgQvLSwgb3jngtEDnfQ5M7UpotLJ13CTawt6nir77WER1tsxGVbnaUXHAzsbHDuzcGqhePVtShrg",
  "key28": "3kv1tfj2p5GzPNvGg2EJx8qorjPERXA3dnFByL3hz8Y7vJ9TPLZfgQcBKs6XYEAfiUnAGvVMHZHMKKAJSkPFpVwS",
  "key29": "5x9UoUSpgwEMyoRw8D8avaUQR3krLeCPudMhVK2znXTG2SiupodY1Af8NNGdFtW7NAKZnBSR7XroqZKEhKp3tvAy",
  "key30": "2vC5BEvb52cv9gQLgtTjTTNpv7KKycc9Y9vMtpx3qTGVGYn3EQsDsthHZFGyofYCf3o6ZHGZ8tkLPS3pcQYHGCef",
  "key31": "2wS4tkMScDZuQ6qxiAN3ejAHvFdUnF91q4oLVzA6oYevWurk62dd8FRBV3LjnhyfNsb2PFugfB1TxoHtZNdMkREi",
  "key32": "21svQcRV2CAtJ6a9s7S42YFMJ55FDkvV4gs2NkqzY7CbvRvebVTNGYvtFj4xB9JnwainCPu17fhEPGpFLmdFRqnb",
  "key33": "43PkaAsvFThCZ8WvkcbMj4dH5YbHKJyhxmqvLedS6tnV9w9vrf8DiXGNGSUjqMrxSbhKmHsE19vPp6xdnRJjuq4X",
  "key34": "2T3SZRQNdMEAprBa2HFpKG569N1cbtnb3PcH3B1Gy3u26VzELQicP4PPy6yETrds11AGnMYf4oUkLWzW22pE6VQG",
  "key35": "2xtb5yA4tWJT4qDNPFL52GmUTngAPAHBS79GBtq8yk1dsvH2V2aN7n1BhXYWW2bAVnYezvyfwHHJrnzSpoMeJ2f8",
  "key36": "2bs95R2Y5JgiZqkKrzxZRojwSaSpRPDqUNDq4eSef8MTn6BWVMeFffUcyh7SDzHnc8UXZMA5wLCSXgYrBPgdhAJB",
  "key37": "5upSs3WLamydU32X9CicS9ex2irBodAkHeBQXtXFJYC1KqzdfGDX5W84F6fC3inBCdvzWXv1t3BFmJikU9XbwaNp",
  "key38": "xUxSSPBEprfuWsZ1HPsytXf5AbzeMfKuWPyTGufnP3g1J34r38eMVGZfhoLXW5nNFJhQi5NDZdEyLBv8dkfC7EU",
  "key39": "57uXxjAMKMwBNyJ7oy2h7BhDwGYgjyo2J4NNbBsELHNaEaR9GfN4RPSFGdTbC3JLw7KQAzD9KtVfCK5QoFFyf7MH",
  "key40": "2pqe4tumx4UbBiFaHZTeyV3MQndwXt3K91FsuTK1rtNnPYhevvGYU8xZXrQzoTWr3m4f6qs5FbrdJqZNy9vMu5U3",
  "key41": "527wN4gYymWhGv7wtGU5JwwfFVDHLZ1wk13KzViSECuNrEAB1kPjawKSXJoe3HEwHzJvj9ziN9U1E4vYmYmrXZPD",
  "key42": "55rUBruaFRtSvbgS3VuPhn7aU2riBW3iZJAdc4Wc9BLyaPx6TCw32FQrUW3zZcfKFa3wRH1RAdPCnzEi4bkuyWfV",
  "key43": "293o7AGSsZZoiu7tGj74Jj6UvGxVcwWhRt2ons5Apvd5sWns9LtG16VitK7K3UFKCEGEJcu2sGviTaL9dEa7iUUn"
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
