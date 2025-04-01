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
    "2hKzZYicREB46SHLjjhdSWCwDEUzCbxr6vwQ1EjtzQpNL7ngoLhmz78SUk41FSgCyGxxMsfecEQBxL5g6Fg6A2go"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zoyPNEJYuxyre9MeDAJCXcbC56aB5kTLz9zNA6NcwFw4jcUZGFaWPyGjpd6T4UoFPY9A6UHj3X4qbNkvftArBDD",
  "key1": "2w4hsDRQR5awQ4wqitMitx9V92C1uqedRodjez48CCCBGc6y1xvfLc8dSyUnZJ9m1aJ4dPnoJiyV5gTJaEKJb1iP",
  "key2": "53LSzwCUMJ2ixhbGiEwjPknvwo39ZmPyiGqJErqjZLHse9tQ4Hd4W8MkERZLcPAhkpbzZZCn3iRCwjutanYFBgJo",
  "key3": "39C6qUNrbb67bzvqQD4ocqYQNzid8MF9bNnnRCwChyH7rrh9sk8Nu3x9qDDnA6drRLLM4bLqcKB3EtM96f4pJHhS",
  "key4": "5TE8CE6ZcpvBt2feDZsQCLjUQx5Jc9FFToatVoUT5AkMfnatjSBpLcRb2SuEhcrstgWgUF2m5nLqpW3VcsGbmdCM",
  "key5": "4PPzbWfipeavVDHcbmEkux4s3y4eW9qiHoiZT3bmNwjQ4aQuVufYDQhq1q7NqMZDgZw6NQBGoKgryT5duE8FzFvC",
  "key6": "HHQMaZud6hWz2LgLT9G9iGeUFZCe8spiE5Zg2bA6CeGZspSqafuJPzVTyZihWDrVQP7rh5mTPjYyuVZNNDs1gx7",
  "key7": "2bd15Q4GXguvmsmfGzJLJV6RcfN5D1xbQKErjnswuNGWLZm5cvKCUo6Jt86EcUxK62RBFvYRgCV6Ru5nkqqF2VmB",
  "key8": "2nbCEFnb5Go8L2VGHsP7kQmQMeu8SVNAcyZ5arUCAg3TeW33ECukphuQcajDoJxrKgYMq5kynnQ7LdcsLmDLzPaq",
  "key9": "34JkcFphtRqsQtRnMejksrkemBHjCDYc2MaG17UqcFds1ioTqDvvwz8nVZZQjz2qPRnb2EzkUd7qQ6rngt3eWRWM",
  "key10": "5mkqL4UMdxgSjnhby1SyrUFjuiqnUqmrFyRusd9yrnXW7TRyCX1FgzpFbFgv3L6Up97NbZ6Th5sCuk35JWpMy1pp",
  "key11": "2xe9d74wY2g1x39wgZokidv7PZeTHeoQEAYPf4oJEvqusPMmM78fUCtdkVCdbMVgr7g87NxCfz6Kbrb13ZKHDrjk",
  "key12": "45mK1bMSsyii1DnJLtTd5foEZgDvaj2Hx34CSqN2tSqh2WtSsmGkujDBGDnqX4fGVwQGgjwwvL5pwJLNpdWwQB1X",
  "key13": "YYsvFmLqus8C6aNZ9pAWNPrpD4pr9CqcgDZvpFjAK38FcrvFMNJZFKDqNBngTWfoKc26Ph1qLTBmXS3nbkLf2dN",
  "key14": "37bFeGQhP5wWkqx34LuRVQeBRBwedKKwmNaiQBuGtsUsq5FK7wzCTn6agv9N9JsyMhnzGnzEbUWTMEUebp2TAr1W",
  "key15": "qNDRCmBZibRbUa2ZeZkFCoDd4xGQUqwBTW1ajmydp8sPT5URs9JswUsw7reAjGwVhBcWzsLVhtMVuyreMSzJD6D",
  "key16": "vcUZWHkDpWxt5tu7c7NeBmwDaxDPtHz3NAr5iDJcmKJvoyxhYzTFsJm3dSjE7hYENWGcGJbGwaWFqoWiZfr8nLX",
  "key17": "26mL63aoBoSHdSUupoY8WrFSLpav1BY5Rd1MYDjFXoLqgyKAjgBjDr7ZS4PzUygQrtVczttznGHsQJXSKA5PXPjC",
  "key18": "4Vq3GNMnNjEqkgQpAax6Ebd5xBAEFZPPRs3m1t9a4qZjTBasK19eKvnfQAzdzfaibFdUTp2uXZfdxoggTHf8rQPj",
  "key19": "5FyY6pu7SeJcGa6nTvcxqqxmp2ZRSdiu67JSYE1VHEzXDYyNs71AwYKQh59wFye5ye8yQ83p9cGuVjq8zAy5BV5",
  "key20": "2v7jYHZKPpshq7U7LGZBqEypEvA5WD3afNXCV2WvCmEhsTxHeMrWcMcznu3WxMusMHZm7aCJ38KQj2dJqDk7duZM",
  "key21": "3iqKSipucaFhEvKAyvCK4xQU9ds7phWFYfovHBiXupf9DrnrN2bV2ZimqK1cGd43T7WbTBCfVUUzPms9gzJaQewW",
  "key22": "2qGpeYa4XpDiBq1VZyrxbCGotprRT7c8b6ECTof5khojHrE94KrFokogcNFwP6hNfpa6aU5YTLmtaZef3V1UQzLw",
  "key23": "5fASHed1tFrGJFpVwLumfBwNdbDdP3ozLbGgfyQ63sPXKi1J4D1GcGqeMUy1XUuMtLLVUHPr1sJh3R7f3Wrm1vGr",
  "key24": "fYHLPrupDNLhJ5SrNmvhNVe1ABj547Zm71cbwuor49pk33AuCuwZScBPG25B2Vy7qememGLb3B6mQ6K4qjn3KBV",
  "key25": "q9KAYSkHZ7w3doRmLBv7vgev4Xc57bkDiyC8BwEVqNQYRYw3v99TQ1ebeUhrY8omw7LECuHa2PfEtAn1eHCJKCj",
  "key26": "3LRqa53iecDjRmuUJcuAVvY5Js5xiEukXBx5c6f969JA5SAjVugynA622u1Pv36EuZU5Ud5LzhCibgUYQ911uD2r",
  "key27": "5rU6siLh15VQfoWCw7qeHvi6vNSPwYFuKoBC2L9mqbJYxLJUdSJMKAZYVuD2jqm7Szmff1SfWi9n67AbqStajLut",
  "key28": "3s37B7A65knnE4x2cwL7cvTs3ubSmPnuzkjJFy18Fr5MvWjouqqtNtfRLR9ctvtpJHft9m7dQgbdUULrTzNf9vBG"
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
