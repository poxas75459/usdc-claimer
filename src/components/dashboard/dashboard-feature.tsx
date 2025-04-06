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
    "2e8W76pY8v8wqJoZUH5u9LPwYd2QsUsWgKUzAxJiKxyjWm4hM6QkK72KsqTfijSXVcFWaduXj1h2qGeuU2VAhNa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LTsvXTHcx3fYsXkHAhPDMvb2UhFAJZBy26bcU1tUb81cz9vuiRK9F5tCJMGh6ZHp7eF2RT3TJ6PWGhkTBmpGtUN",
  "key1": "55uQKpP8TrnY2viCzm1ptUzjWSqvwNzKafC61y1bGjXYCDwxdwdg4JgEPAXCobjPzujWx9ivV1ECmrC2WTmQogGK",
  "key2": "3pk4vo1HmY1vG73HT5xErFLxgDDhC7nviiVht22fxekxZiCRheALijkEGjiMAPkyWNqnyBZuvsSJX7G16oeWpvgn",
  "key3": "5ZEzY7iwjL2kBKt39hpCHi9x15c8q646ATZ3uXBt6xvhBPYXAz7o6uXjrgBfMr9Rvd7B3VCNpX54jbWfca1sA2go",
  "key4": "5rxW3Hc236wNSr211RY4vrit4VWxDoZZi2Lu44XoZvzHN2UarHBRtGD2mnVrTBqV6fS41icmcrKtGTYFtgR11pUJ",
  "key5": "5fV3crHsPvHobcDJNnxhXBPdc9QggZadd5nEandR5ag8fohQ5H9tbpZ762svaPvqX4jwc7VRHLe94FbSFxkNSofv",
  "key6": "3tnC7wf7WYdMyjeXqdozrSoGGMpv9cPALTMn8UCX6FHqECrJh32a8XVPsfSekBTP9P43xvP8YC6XGkpT9kVi8pcm",
  "key7": "fywTxe4V3wCZ4KqSJNQQUvVt83cSipXjxWPUjRh9k5RGpA7hhnrP2DkSFAS97LCZrLFWM4jbgYeGxscHijdmgwj",
  "key8": "2qGTALboh3GT3aiTVWkGP7nNWETwXFC6yey7jzWEc26xbVYFvzuXaTdZM2zoD1VdPK1mZLV7x2Sxjd44M7C43RAV",
  "key9": "5dsUJcA57eSioH47DS7F2BTUxhDE4Hm3THuZs2Xq2gxwZcScxvgWRNN97jrc5Li4697qcNLyywQTqa4s2FgsWSWL",
  "key10": "4UQ2QJWVNmKqSkQHQk3qvvBjQPrmUWUmZPHpjZWg98iq5pah6XgZMCPwFV45DXGUwYaHuxjKFrqLChZVkkiEBmsH",
  "key11": "5MCEy6z9o6jRVS7bM33uNmRP7dz9A1iskFZKpWMRvoHkFuSyXrsSqj8RkQzY3UnynagFitQ8URD8gKGhiVnr4KaN",
  "key12": "Hi3GwiWP5hU24WP9s1NMk3B2Sxjr52577jhvi39WLm9hQv9J9TznAAsxmUpzQT8DjuM2u3vgpv8ADHmtpzfY3WQ",
  "key13": "27ujies2nLLHJaRDZh5ZG2pK6SaR7npnpQATQJqX1cgdV56V6khdtK5yL8f6ntT2QKw6eJkFzpMsauLz5Vkvgip4",
  "key14": "4LAVyaMKLQwjNA165wU9ZPu2A65xwwXxR1UQYidmXWs32AckGjKiGvnn4wJxnmSqd1z7eo75Ju9B2XZPVA3t3xaz",
  "key15": "2uYvqenRBLWCjQ2sHCVVg3NXamBSp54DoQ8r8fScit6k4CvZ3cfMg8zNEamHid13Zm7qdca65C5E47LPy7vQrVmA",
  "key16": "3hsMVzcj1PxprPErPGPqzMKN5VGBNw5CusGezUPykvtpsX97e88zvpE8Rd3Z87iSDmG3Nn7svBm1fpMpEafi7Ntb",
  "key17": "28picQ56cbSHXXg1d4hk4wqN1cVnhrHBXKAkCyN2HpAYYdYQE74aAq6G6oc7So1JtRvM99rywqiuSJGVYc5x35Dk",
  "key18": "2wde8FKmv93NTbS6zTpxr7J6hBava57w3DbZ5Uw4V9Z4pyRt28MqBeF8BKZms3tDqL3gsXVygpLhyTUjAnSQKpzb",
  "key19": "3Bcj9hwRCjHKScKNwiPv9zyd6YYCgke11rbHKWBgPzUZLxybqD9y3hhcrGuwaSEe2mBKUCGk89NE29CzhuzuCBTm",
  "key20": "2RuE4nJXkTGmb8yohojY4LHbSPdfejK9NagtCcV6ifaUMHnFxiKsJiyTZDkvqfVotu7ttkRQHzQnaLMN9Cvn5L2u",
  "key21": "21FsyWDqC6oRKrdqYiDPnBzTHnr38vQzihAbrCX51oix2dD8t28mvuLjSxbyFeVuFPE2qKAUaim7zYiah81Kfk3k",
  "key22": "4QZMDdVytKQEVydwPocvBea7C7yx2sm7MoSeLWWa17fR6GcVcKxdSJ7C6ATFo9VZPo9N3ejiq1jtg9fa5umTCqJC",
  "key23": "486c8K3CHv9mQJVtn8pZBWdhBsugojK2ado2aGSv6sGJ8ohL6h5nES37F2QGN1oQjaVyQWRVGkuEJLtPsfMeyimN",
  "key24": "4pTwW4qZwNMFHNkz7khwc2kE8khcb9fZCNr53x5y3G4rgwa3cV4UkGJS4kQVHvvUGAGRij4FpTXpS2tqHc8b6ryM",
  "key25": "3JGq3s1wk4SNsEEKw7P8LPFQZLaWLFKtLSKWpeEKTfMWLsGWwdbbuabPa2LqwGTTxeuGB6D7QNGyqqzrbg3yxrd7",
  "key26": "4yLMHbKpZtLQgJcwajcsLBazpjMyZrxqmUKg3kmdeDtu6Ej54y8pNfdviFTTWAjoqzzU3fDJRbdEK5UZN9GRQ2VC",
  "key27": "3xmyyiMwPSETNSUTiMnJD8kK9KiHKRcmNLcUno3Pu61Pm7SEyTWH8BoMiYDTBpsBmmgrFXoe5DUCKuNui5NdThc4",
  "key28": "4onRtW9Drw5LxKCsurawgwVpGqaCcnPagdMtBWMk5rWryJmF7nqjocBYnfWjZ92DiBN2x7gopaqXgaY6LnDhZjye",
  "key29": "TcZqaEd2TqRh3axb2sdZxRiLvdNKdwESEmz4bX27JtNUh2NmiJepUnRw6x4hMF8kmm66EKU77GDTzKYELp5zBU6",
  "key30": "5LHUPkywD5UN55RFUEYac8ymzVCZAecdhJdQEfdb7M1ufsgeGaswN5mhsU5MbPcKvxrrMxWFvTQ8FiVXyTA8UfmY",
  "key31": "UiYPFK5rf634X9PSsznEVSdf4wQcq4k63FoU89Y3pHKXFFRJFSQmK1Y4YL9bn172NDPVJLcRheLtkEfuPJoeqzK",
  "key32": "23kGZhpMoyycAeYTjvcHWhis7e1PmdudywDuAXA5V4eK28eavrvFnEZ1tZcwKKKo2BmUsU3RyAbktiKZoBKd97gz",
  "key33": "4MCZGNMAtzreCBxPwbbob3kN6N3GgLBaQ2wpgodYbuXUQnSWFzP7KPp7TD66mgfpxuEbaA5qDpopVik71EGgXZCN",
  "key34": "kBRzRztpwXwnprdpkMoJWpDf5uJEDsURUr8VTycWLvkZ1Fdh5NxSNvZTpmP2yiWsA8iTw49ozsbbH36mYYMfeXb",
  "key35": "tmy5SmQaFbTLS6qALZKcM4aBnNUpMMWPCW5sRtpkqdU1XGsZFE3PDBqg7JUGGDatXMTbBDz1KcCZGweTRLNhWgj",
  "key36": "gGzCyC1WZTy5J9LZNkHpGKunsoLntd984DkUQCQefcFRNtqdFWQjMCeEDexuGPGJ4L4Mw14L5EUETCYg2YMs6MA",
  "key37": "C3cgN5ucVrC6ku4SgGT5kc6ojVABA86dgyuys25pZXZiQtPjdhZxFjD683hhhdVHUWt8HpT68LoM6tNDgT4TWn9",
  "key38": "3GSm9RNoojBLhySek2vyqP64wS5AdnyoaTydzQhp46C83aDQd15N9kjo5XbQx26kUtjdXtaxMHUJ2gLRmCBgzVYA",
  "key39": "3XTAVTiwkioZCfH1kTnXay5MSqY2Lv8sfaYN3B6ZHUQPwqe29PNqcdq9A6dLSQiekxA7bLDStfs5uwoTs2G2zmtR",
  "key40": "2MFHAwqhXAFum81kudBTiukdqTKHY62UsHnqMYE6PiXHpZzPTMg8FxLJ9xdSdi98MXGynym5noNpnTAeGnHFD2rM"
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
