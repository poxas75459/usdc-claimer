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
    "52kVKRAS5VnZYFwACpr8uNcf2dqdJGq2JZo8NadaLpnmGqNxZf78E7h3CPsEL8jWnc6BtASPuz8cS6mvzn8rm71E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TT4JCPhvcA8GbzdtJ1MdBiowv1tuiZeYxxNXfcettXJLTZac8eS5GYq2pvVa6SgCHs1XTNCSzTJtHCNegSvP22R",
  "key1": "2Ra4HjvzqcNZx7oGUhqsdWGBHhVaUhuV7C4yVqmGSHYbarDqA3xv8nnS4Qip4Pk4JSrAZUqErbhNsy5Y3u4ayqBS",
  "key2": "51aToZTK2rSXVev39DsE7C8R9nsUDs5VBy511WT37ZvKAa3gcvUTTtyJKXYa1CeeCU6uDDWrPF4XXD5mUC9ys14Y",
  "key3": "3imrLNxaXKUXGwupFUrkxBgzsjsB9VpiThLVafa7LXW6gJXL3YvJcTkeZrMc1Jm6zCRXE7KLHtGVG32WvQAt1REe",
  "key4": "44mj6DgPP2ydzec2mBhbogBxhbccNTK6s9HTz4aT3joJ5z4KqW3zzN8bRK3o4Aga28JWrEcvEndoWWE8gia4tVfK",
  "key5": "5meVnCXEgUuFxbkBECCe5kEjiXaZVEuabaefGrujecwH9gjZoibtW84j5GkMvJ4Ws6ttWukXBMtpr95ura4tuci3",
  "key6": "3kY9zx7RHTbpHgbvHVcPdq2NFTP4M8FtXgYQ7KJfFgYAHedzwHArPZgs8QY4AHoAEZvTCxVvLM2w1sqTLeuxJFVJ",
  "key7": "589h1sVS674vPnZM257ApnTFoF6uW7rDhfoCrAjNNx3JTk7okucJdgyKNeDtEsRDDNXXGvYY9UoNJDpa3XGkjEAa",
  "key8": "3b9AckwEdvidGGtyj68zM59WmE29uVyj4k9auFBLLqHWgs2WyGeCBngmcCmd7hgmWvkiLny8seR1QRcPmedYFyB2",
  "key9": "4UxcmJG5nwZVmmsr8TQQogL9oFP1n4Y7HsU3LoSkXnR23MLh6hSgD8F7d5uog5ud16vqCCKKjV6JPPkT7M5S7Vjo",
  "key10": "3v7MBJxixb6WuPMB27cfLFF1RS6giZy5aeScTaEcbcEJnDgrPrdn7WtJdtR9ZepwiSZa8vamF4acRBLTohZMPsJk",
  "key11": "3wnQTcAeRxa5b3TURBsyyiPvdHaNTPUvSBhBWnwihc3Z1idZiT2wCTvv7QhKppDstvVNQzQ8KQDugJNYmWAwq3F",
  "key12": "5gx46j2ZXSLDqu7XAYNmYYgNTiJWTJD4vQ9Yq18yo9Fg1SB2t5378j5tEJ3dB6vmRAaGYC3dRpJSQwHJUnqxk9eV",
  "key13": "54jrY7J7Nck26yhPFVPAKV6DPATC8x5UcxWBvBV8KZtgSpMz1tmX1qMocw7SfGXMBEhqJTES7ETTX1bDWP2Liy6o",
  "key14": "43WpDSxxj6QBCuJ1PhndgZvXKvtH91JAgeME2bz7eNQFenGvfzi9SvHVfYg4wpQPyTsPWiKkHDv4uU1fX9G6im4v",
  "key15": "5vy4TxhBy4ehyNx7jUUe7reZxFSAaEWM9QYChFUBiMcaNSLA8QP1TVzTHAwkBNRkN9Yn8jNi7Hq7oSBFJxtuqfqi",
  "key16": "2URFDsTD43w75LwtdxDRMBwFBjDX8p19mzv6YpXpoou1fdCo4HrKGP7PySa8fCP7L6PEg9jzTKJbF9SjkX8eBPZp",
  "key17": "2AWmNB5skmvCRkSGpkVPEsjuYxAG1BK4wq561XWqM5CvCZCMtPrjJ2RKWp4sqaM3NrNmprH4RM5sc3g37ZxnFy1S",
  "key18": "2xiEEfiUgRUqCFVbGc9RDkfmqa4eaozDfL1FsCHKPogd75csbjdEuWf5GmM6V6rYdBdX7TV5NqQ8Y5tKs17SRja6",
  "key19": "YPZrJPNLdmVmSvJikNs7FquYgYZSjr8cSbaBh47u9T3UpnBoXJf1fPZHyok4bzQHptp6F1eEYbhGBad4aCnnU32",
  "key20": "4BK7BDWqJYXS45BkvyCBKU16jVxUZESLSS2Vwy9CmVnKNHaNNe14o1JJxPGhH416YkVYUU4ZnxEyRMXsVfYs93Dq",
  "key21": "553K8989EwVpMRyQsv1seo6QBMQaVQufAWLJK17n2S4SEHAfyJQwS1fybiehG9qtZVhies1EQkkgR76dfkQeHRXH",
  "key22": "4ZcguUdES7DWBpMEA2kXExH1HG39KYjE7kPPjXrENxofYsbWpYuYfNYxgzCrFESAk4Zu8h23TttT8oSwap7bhUgt",
  "key23": "4efcCmNui5e6R5Eru5joX6Vf3p8AyTurSQ6WtX8qCvTiABopg9Yz1tGWPs6RMdqskNWVvv5TZAeXCrTTPj6N1iFu",
  "key24": "3WARhFNwowLGq81GtNKnAV9cTgZC3EJXMz2Hk9Qg2uVEbqmhEwgqamXheLaHrZzKARta3idSG4ByQ3NFdzhYXdui",
  "key25": "5oKvfqcSmFmQWQ2pVqR3Y7EVvKj3VRG2vaWdAE6JEHo7uu2zszoL3ynz3ct3to1MTSZU4nQ8PGkQbTfLP7m2vvdt",
  "key26": "3yfBTyrQfHmpBCXiJeNFBzmz62yyfBv23Y1h8aQv5J6AKpU6pxArcdcfj8Zw2rpgM5KwrxmvACsUREnyxSreC6uV",
  "key27": "4T5h3dh9yohr19A5HqQxRceZutbP76LwKFA1e4rxVj7QEF1DxGwfDmXRcQQyLMeLaQXz9QNbPssdmpN1bUb5EFTE",
  "key28": "3BTmcKV5KzC3iHpWwwCqa7ZxKLKLVPqMziHwGaqt3D8iT7Ba64DuLL5duU3Fh4YwwHWPLSNvihd8b9X4n7jSvXCH",
  "key29": "Fs4CHVcfUD4sVsMM4gF19B3tZmpSK6F611gkMLWtBtwd2aysH5984H2UgsxB1G4jZgFuzWqTX7DtWHJLXsJpDAh",
  "key30": "2f5crquXsZXWDLzE8ffSdLWrYbgU6rR3n3w6a88uoMBf6T3ZkU9MfPeSFQdN2mqgk6C6ChqJmqv5enDihVtUYNpU"
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
