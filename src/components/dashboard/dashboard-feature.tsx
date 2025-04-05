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
    "i1w1M7jA9nuBwHjzDHVnpSDad25iLR8DbkAwjQG7A2QpzE2AzQxjkVs6MFyGwQRB1gAKGH4FWTRx4JEbjSQZHwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BajZaznoNyripicLFq74QgdFqjyvRZyhvK3CBTcUCEkj8wtuzsMdV3FD41Ta7R5pjMw1UB6cKNoXqqoY7PNVpY3",
  "key1": "3wJejTJy2QAz8Fd6vXEbX7S4T3yqu3pcgwtaHSNmhpzHRfW1ntkcyeSVxzZzRcsTdUSwsFXDWEYopzKvAdmtmD33",
  "key2": "Z73URqboXr2wttoK8ASfy76VRbSVH8UMdX3iGDtdcdbqcB4VF6nh9fhyMuWGcbrHJUFm5JGEVnSnaBfKMStrWj3",
  "key3": "2Bz426pGjoJMdSE4WDaDAEz95tvyj6GMT6xWx5KmtKAWmc4coyZUyTiQtMDzp1hdvmhj572nZd5fLWe4sAqkgYQ5",
  "key4": "5jzGShSJFE5CWdQ4QwJdZCfsTY6riHsCgL6yXYaioESxjkPjHmaYkz7eYARBqrwyoC17ybdRkrnRRhKwDPCTYrUG",
  "key5": "473sNxWVUBFSe6UqwAtuDeMs1wJAhiHyY61gArdX3jNcv7jnmbwv1Zbxvw5Fb7VWEm2BDmUJGBaW7NrUtnVdm5Gk",
  "key6": "3N66Gj7xaXmZGLgNWd1e4WZSF1BboKNGhZ1qQwZnUAQ6qSpjsm37p96CvHqgVEyxquLrQNgv6cWPrby3yo8CVnUe",
  "key7": "59mjLa8GHu1yYAXdsSXjVC1WpncGQueqHf4NTe2XGynmK2PvkfzJdctVYBY5p4WQXwk3fk86y1rtJj4icBRqrDDk",
  "key8": "3h5Q38pvAnT1FvH1prvnRLbKn5MkvjArzxtD4EHshai5K7Fd25BLF66J1H9vg63HAbwP4FfLcbxm5nNeihZDKuTx",
  "key9": "5UVg1r4eAbHvB3HH34QxT94HW11UEwzGnmpbKLjsbMia6YNXQePmwWBxycck3wwTXfkk9MhESCvvHgZ8UEeR4N5y",
  "key10": "3VMXMKRimJ5hdoA7AxQw7gzJj5JdzaMgMUQKei6HEfVK8SaSCw4HiRp6rPU4XkdJy9ig2ViCTizT67vgtyoKaMD7",
  "key11": "4RwFCbqUbpn2jwjR1ayRmfVBLtaAwGiSWznkABGJcPQNM3vWXhVqEHqtu9SJskAWwt1S6JZ4DkfMYU4roCnK7n4P",
  "key12": "3eG3bSUe2dvBktAEjMGac3VCXqz3498okBktZkmR2CyBVZw2txJyzt5z1jYcjb4zyTptXjrASatHHHLHz8cMhQDi",
  "key13": "3HfcrDfrjPQk9EZBUDDFSZdcmuEyYggMix7xeQLZARyDaPLVU8qx9rQymp6vcbCzTiv2Z3hqXS6DWuoNKRoW2xfC",
  "key14": "4bGeEdAM2mhmbHVQcFxWqmrpo7inYH6xX7bmLYwY52LuyXVAWGkegoRQuegFRdoN5f6yTaygjCKFboDX9j71XhGH",
  "key15": "48cVcLPz6NwPqLfTRVxyriShX8yvryT6y37PYrJWDjXURKLKTjk5YU8djw9LNreD8VXj9TQrGLHMiHTrQCk9JLDd",
  "key16": "3S2zzQUPhp4G2BA8XMuyN5Gc75jZd9R6dybumbqasZKrUSsP6CXUvyaKv5JFEjFJRrckTtVgRKW6SLq4n9NHngRZ",
  "key17": "4sKcYN3P7JPBpkoDc4Xexdk4xkK19oePy5UUEuhXtfd8sF4GJqeS85d8snzApN6qkk3i6jhmkFz1TizmZfvfMuV8",
  "key18": "3Afpmtb69D9NQLg4ZsmRLgkSV15dxwXBc5v8pR8i13z3QAmmMzykPnPqU9kdtBgm9FRXHu6DsNKoPjV5sPMBokCy",
  "key19": "2Kja4sq26Ahz47zEKtkwd3CAjRffDyxQ7rbG3fde5fUKncoqFtNzmQ6YqHPg6TGz1KVwPULHewjexUDDccU8H9di",
  "key20": "4ZHy6gy3SKhMbM9hSUvgG2iNpSbc6AcQ4uMtr2f4ZsoekGpJpWgYCS949GEvZFuGZoG52jhjoRt5AN8TYz8KgxPA",
  "key21": "3tSPHwhDp1kARwAJmWgrkdMGeM7hsxS1LgdJqbSskkcais7ikcDeJdiRaUJ97a4KTmGwxoed8qPb1J5G3dYatYrQ",
  "key22": "3L7sVQpSV84nUJTGJ56ihhaACWUhfDgWeUyBKjo6GQj5o9isAgw6Za8TDN2ymdUqLiV3XhcjnmTxbbdUV4SLRbe1",
  "key23": "3wc7zBP4a1WcYJgboPktvALBYcKhGWteHq2r3XWpZmV4fp9gEtHyKBTD4x4mMcTZ3BCSX6Ve8HcFQes36bFZLRjE",
  "key24": "3xgXxPwHcPaRJo1xKHUaMDKRf2pyhsQ3oz8PXdfuEAh8iaT82942rU8gkCzzU9SQcHoyGYRxix59yL6m66iC7uGL",
  "key25": "r2rv9fMZfrqRxu5tT8JdFZa2qLVxYJFHawzq3qx8CDZmsPsMx2JmUBznjsp5oNDpvYhZfvqrggHbBEkGvJBTULz",
  "key26": "xfZRhQ2YxrihJxJk11H7RjRtafYVS6NMwoLNCFS9oo8qHpPiSc9RaAjD2yBMau8TEszPxoYGEcP76ouSx1pxXEj",
  "key27": "54wV632VEacidzM4TCUVuy2ynXX76wT6pyrV5aKhUVZWt3HgcqBR28FVpkK18x3RSvbdX3DEGBVBp5wYNWTt3xqh",
  "key28": "534V9BsrA4esXLNCTgyG8Tkn5mNi9LkzQDU2savJvFmoZi6JS6mY5zXeyg5hLEagbsXMrdMJL4gRD6vHrTtyJYRe",
  "key29": "22cxcipnYjwaYYfRzU6Z19GL65aphi6M4ChrQVxUkibQng7Cnn4EH6eGHufxF3v1uxDTFr9BbB1MyqKKHj92yo54",
  "key30": "2tT3w3H177aCppf4eBhwpai3naNCimGB98RSmjbkHCf4VSUtDUrzX9u1wgFzXQ2C9tt4UwuVkKCoWrasqE37vwdw",
  "key31": "4WpnUTxQm1n4Bq87ojJnXGe6q1xtTtS2vK3nWdXxfHnTbbcgJG8bcW2hT3eKcpQZJmD3jNNr3nn4a9Fua16YskUc",
  "key32": "2iq9cZTNX3gwwQeimkaFYaTJBbxBkHbvc3uu3cMjPFasXQenxA31ErcUtfmVzkSPoDAU6TxDcr8k5u5DMGyPJ5tM",
  "key33": "39EdL2ngj3M1QevLmUyW65Leos4PcrCKqM6oufFoMXdSQrshv6pwW6o7mySPCxiGffWZKCsDGTiVp7mBe5r6QVJS",
  "key34": "3Avi5wEPpEVUR4G31GkMP2RJNktvSbpDCNUymu2MjYUkwNzVCk6ijriqeCt3WnxLKCcF5GhANScVM3NyJvWjeSDn"
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
