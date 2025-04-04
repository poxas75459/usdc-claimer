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
    "4LzM75ZvF9fPnV1nYsFXFYVAtEJV8NR7T2wbPL9eD1Xeeo5VPRhDQmsT8BTB4xtWP9ZYW6RL9Hucu2VqJXouC7EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jZ4N3kcZz1CAwhwEgWqmSwYu4F6yBVqkafVVuYCyUaYBaSCjHSngriwMfv6GPvr1kbozztLmtCWTMUAcCaY3MeT",
  "key1": "DtEW65v35hAFKBQAL4kH1bA4LGuHt8Z6RC9Q6ZtqChMRiKbPffng4z5df6xPSNZvS4VHy2v73ekjYPbMe21jmLx",
  "key2": "4TTXK48wTkYskTrrBnFBUvH4yRyh2zzq3M3wavzRpDQRgEeyRLCo3sUmBDHnSJ4bthc4HDSDP6QnuJhbvM3b5GxB",
  "key3": "5wjy4qSBentJyp3Rr5eNtMcNuxXqBXE7rzg9VSmgg6jyzAEBZBieC9j7PagT8a8qnQsmXSBnCwQQ8ZCXevubGqYf",
  "key4": "4XsTkLXyQPCiLaXDTVpovadPemvRPGyfqhSWyFUt2NRXLG2b8cg3rpiLHVVVKK5Dsht71oGvasRs9HkK9qF6vwsS",
  "key5": "2UNXRNfz8cwswXRm1AG6SvCXC4EgD8e5gke3MdmxppqP6yJQ8Hen8ADvcim4C4LY1vW3rp4kNAsVNNDKjUSNqCMn",
  "key6": "2fUrAML6Pe7Y7uHkrZy9gqYYKnbsyL6njK1Qt1xi6QqayGfBHrqRVgpQ9msfN79wJ44Muf9xn6TDTp4mLiXjPunU",
  "key7": "48fETcgDCPmmZGZacetRvASTZupEYDk5RVA9Lxbz5R7UhG27539aakp8BDbaFjBtp3yYetWQwouhiUQLRssRAqmY",
  "key8": "4nx2QsRE3QgkaornsX6ibnoaCNGsWwNBXeoXZ3CqoKu7GC9wggx3kveM4jtKfMZT6z6ZSxvbMSm92xArds61rLeT",
  "key9": "3YfwgqqFFDyEe7LPeDv7xpAXskU4tH3RJ6sQ82j1XMZpVhKJcpaE1gubsPjhjfLNRyjdbZwiPH1gwAeVMBioKX6y",
  "key10": "KvNpHvGi3EAWUu3gjsRXqR8PqQjMuCWSrDQJJSLUEvt5emy2qqgPiGr1FzVeZN3zXMWFzDHxuxXUCeoSCy7okSR",
  "key11": "2uVwXW9DsUVT5xLarfjyiMLwaCHJH9gwLroRY1LTvBJVMQBFKCgQNJeqgRGnKoejp4XJ3JMaUTQ7tjWRszCs1Var",
  "key12": "YmTV6TathfUkHpyo2tCZNZonbwvVu3wXcdMvTCH6s9WXbagyPiBKDAHnGiemvA7XPbXrjNgn28zpcxQZWDruBfn",
  "key13": "3FJCESd6jVaZj2tLN9uzmh9ZxrwXxw7H417NnzxMkGDm9UL4hzE8QPDRjdGT4tAp13bdGE6DTrgaeGmgttNQbv1D",
  "key14": "hxYvfW3sYkGtVHAGYriYq5r7AJHovmsXwo1k3sx7YL1Redzdi5Qwexpqi7wJfMncaZ4Y1qnsk2u5ZE4QQksFaAP",
  "key15": "2eoZXrggCYZTfnZ9mi1JgrgNtiNnaR1j1kL3x25UpMxBebFt5DiWjhDZYudKgzcPkoCaP2DbTUJTnFPLuayuevjg",
  "key16": "3Wc5KHqXBx9uc56ou66k2n3gJ7uYjNDgJRDKzZkackci1m4HxksgpYGxwZte1EcP15enxMF7M3QGsFupoST2Vi3u",
  "key17": "54sjetpAnmyskwA4i8Gq7EkhpXs4cauUVYpFqUHkUy9Li3sDBz1obPLNjRT4tGRKWjHbg75sMQdevhVDHFuq5Hsk",
  "key18": "5GizPrFgh7wLy52ZeF1FewxcGJ8TPVriFe7rJECQ5cyfDQb3Fk89iyv4t83ewHNiWikga97xqZ2mLSsb98VsT7ky",
  "key19": "3gJTy7i8edhgqByYwyNtzd9vvaNaNuwB3rVhJcXD3HkXsx39NwPqQNRa4LbdCWwoNZG8vWJyHV8baxbZA31uehxJ",
  "key20": "dRX9GT6NC4DLFNfjGgxyFmxytUtLhaS4GnuxLnjEg2jVhV4jBnjuH5hiR1FyFkkoTNtzD5Pu6sLFxrEgLWdD46p",
  "key21": "3d7ZdbdpJsGhfXzyLgzx13emW6Sg6WJ9DHjJhQtBoy8cK6w6x3pXwyXoKazb9Aywg7LtNQD5STKQ9bKhSXcud4Nb",
  "key22": "4NEEEUdmPfF7XazhkiP8qxRrWQGHr3UFCqQN2mYefRGbaRYv6tc4nV9EaMCMgKGfg12LCDSKWEE728FaKAndR8dK",
  "key23": "49oZFY3E2tBH2mwTKkk7GDg2ywaamX6xhL9fLTuwqUmcNH9nmCQNB8njfn283ucFaHzRFrSAM8VBeCLHsVWzg15E",
  "key24": "4Y7Lu9Qd4DrkzTFYTWfAArrUn9GgSRuP91Qma4tpc7XKvRCHuQZ8MFfSrkpb3bbszSiwFkoMKRzhrKijhTzJzPZh",
  "key25": "2x97oo5325mhrGKGo7orbggbDzhUTTDsz3DsFWu3ECtdWsjno9kuzwQ7z3ms46LpJ4Wgz13VtRjewFUqtBHGAKWZ",
  "key26": "2aQkfjubgbdALtbqUmdkD6gwkCZduTviXpekCnB5DQDmH4xiBijXSmB1CbvyTFWTqKgteLmARNVnXcn3w9JuddFr",
  "key27": "3qWSvyi5m598k3GU4WKhL89W24tYdTYzmLbNA3iHqxwmMEGzzyWzmTx2pN7mbPQLPL8iRWppacK8g197Li4CK1KS",
  "key28": "rtHX1ZhM7U3U24zYfndWhfw5x23ENgJJ2DdrSNroa6p3Dqfk7SKukojs69GHqWd2fQqMGAHqEScxrs6DJCdRJhe",
  "key29": "5mbXMibNK7PiXezTr5XT4FSfbwNBf5Xk3yVtfHXbQJV288Yxi1EiXvhaopuq4Npp1xBJuYu1wxNNJoAt5hBDrEdq",
  "key30": "2YaobQT9D45HmwpfB7W2ft1qE7WsuaN3bdRtQk8bg6quPkuVEx3vNZs3KfVU7vvSvqAmdhxGZmTLQKrmiw8PZJhW",
  "key31": "44H5X23xJvVW5mcks4HJP3SZagpwBayZEQNfVrDhKnobLUcGurDmTL4FFAfLdWQmKrFXTZFpNQwW8xZWcH5whcmG",
  "key32": "36Tpvp2Y8ZcoK9hpvx76St7bUpp2etqa3AAY9CjWrvci1NuEC23u9CcjKjNhdpq4CKU41FDJpoCttDPm3bijR8wJ",
  "key33": "49LvaUWxEW5JNibKynnFzVzb5GsiNtfrx6cAdvNM14dW9B8YWUXWdCMM1wAq8b73X6Qnzrk92nxsW13v4KFs7qMH"
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
