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
    "3hKdcZ4gW2pGd74fJddijpifQP3mpy3zssbQwthU6uFGurviMGr6SbjafBqVgoVVERFzetWg9BtGNi9q6KQctsVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JsogJb3ttEZ1zAs2VxBcVTWB9Vwh4aCALnX35xxUSHPcGeD6gR3upuVpdjTVANEfNHcDTc7NtJB9x5WWxEyNTWc",
  "key1": "2FmxP6z6yqaLgjPGwFvmDQB2qVHKFnHzPYXHuT35YMEoehwk5NYDnLhXTaytrA7brh3uTyiGVjbBQtgriMCt9ExP",
  "key2": "4djypHFr4oQR39GpEANH984TRaywJr21rxvThZ4gjnrvetuCRcZYdyyfhSG7sxkLLbHNtPk5vjhLSwAQQe4je516",
  "key3": "3acMS1JSKHQSVycJbMXGHV9nN8enewBfaU3BziCMPqPrmBV1F9JzE7KfTCgmbSFZsvz6vC3pJKijg9EmQMCm2vSd",
  "key4": "Tk2Kcy56T28nUXjAmfnoWdDY618XNNbC12gszritKsraJhpvCk2KBvCoZmHzDSwwkKv55xr1n9WMZCFi9bR8CyJ",
  "key5": "3EQ1kjJHbFijdNDhEfDtgQ54E2jxZj1oRT4q6vhmbn6u9i7soAkrt4p8J7EC6b2926pkRfQncGw6hEowMXsKbNiN",
  "key6": "r8k3jvuaXNdDzXZMe91pXSmuuKxxNCJ5BU4zFxMMd6byjN6Q6cpjJhASMxJSjH1PAz9PM5YMJL13c2e6sSK5KuC",
  "key7": "jYh4sTGcU4nvBqdrgKnKmN6k3A98Hqy7BzYqjUz8LSrY4aSMyxPvfNuscSSgo3t3moqz1qvdGZujnuYGJaBSXZL",
  "key8": "3JQtxF2VrWznpM2goosBXGerGe6uVM93c7GZSnnVmuBrmQ6tzsbR1BhSxcG3D9HUtvjEh5R4JnaGgR9djUTE4KQz",
  "key9": "5pyRx4Z7pZNSmgKNPwGXi1kfkJf7vzb837dbKgHX256jQBCrdiRKyEy79UX8WqkUbgsnipPMRcd26FXkJhgQqUPi",
  "key10": "4Aqxb6jptHwJBv27s7P7pxuPSMVvEJrXSVuUi8bQTMKK18zE9kaGbRCxj7nKuGPmLscL7fESgrqobRB3wYomQeZ7",
  "key11": "47UBxY8V8inYWaA5ZmBazBhfVpWdex74toKknvqk8rGSkJdnG7bV4BBhQcCGGdUFnhpS5EN4KdHJHo7LdrHo14Mj",
  "key12": "h8Tuac4B99wRD8tRzYbCwpm5ri1G8sV8Po4hZnNUXE3WPoxU2urmbc8LGXZuWwyxPBxcz3eEpBiuyPT68YzsHCu",
  "key13": "5BiPiMeUEesLiDtezPW1PLbUZgxd4ZhtpaxLBroFKkL77HaNpGUhFxrpbWLfCjd7nhizUXHVK1v6GN3CyW49z1aC",
  "key14": "4mWGeGKT9SrwjcjTovpqBGNUKr2bi3XbfPj6PpR53CBcR8G22crUgY5HqusJvs5BKLdG1nk1otgf8tcZ4wnaNv1h",
  "key15": "588Frtd2Cfurhf2XGKuUPm9TnU6AAoJLeMqQSnukEZPLV2haEcRdzFHzHrVy69vDseaZTW3Yt9M54VHLCDKxirt3",
  "key16": "2RF4J2HGSQ1sd3MDVegmtn95K2kks7U2LDswEnNCTDLX3xVAxjzpuJs3h3H5Y4h5xYtbgQn1RU4REbNaY2dQzetw",
  "key17": "4mjG3Eg3Bd6kgqmAk4SFUkaxz8GnfwobUjjSekaU6esGtffZNu27zsAgF7BeB24fCfgQt8ryP6Ub9a4NgzZWyKnJ",
  "key18": "35KzBuWKEpAEDZSd4DUJqnHkdbtoG1ic7oDt3DTDnhJYiBqvPnwNce4CPMDZ8BKVJf4JTWLh6r1CPRjveoQejdF4",
  "key19": "2SAb6M5bCSsMBFGwp3EffHkWJ91Bah789PyvsLxKfTk9keH9RD1dBQYa725aWKQUmjbUSvwShJHubX1RmYeqL3pe",
  "key20": "ZjDyYDjCmizF9UAc9VL9PeSGhaQ18GBRXAFHbTZ218uc4wyJ5QyakWrs9SbpVgnU4QmXXNPTGYuD4MbjZ38qsHz",
  "key21": "NZ3mbJ1t9XCxSgAvUWF4SBi3vkEzSm1qTSRncAbupEZA1f6UmHTGdhwHQC9ZQNQRpLzn1aW1xNJTEfRMED95Gm4",
  "key22": "3LrEc38qKsxLgXW1Ajiv3N716cW5soHMSRcTiZR9Rig65L55ixh81oggx9pJZh9d1GQmE6xssxq49pyp64Z49CfX",
  "key23": "2tntZZQQE2ViQtP3fTg66bp1EjcjLbYbknzCK4VAWB3U6GhXVhb47q1GxuocsHG8gS1W6V4KFwKexhDAS4n2ubSn",
  "key24": "5iUHJBTiF5f7Sw5PFwictkisU6EcRQSEocM6ocJ1sWJ4hAnwt9gDYDrLpHfSnpmTeFzsLfK2ZgHPyDtRpopxHvCA",
  "key25": "rhzTVvwXX8vxGJCtyVumX9R1M9LfJkdr37fJZnp5M1ynMzn6Q5rbkxAi5oqZ8j4Gp5HFryUStrEGaYe3AeHhe45",
  "key26": "NqYLsd951BYsBgiHUHQRHqQNFqxSuuniKmBLUM8iegTMRTngASj43gEfVYG3CP6UnFbnbprc5cb2sFf23NxD4SH",
  "key27": "4G8txWjTXJBB2qpBvseUSKTtKVLwZWgcPf7cZEAoNNPe33x3TQQjXdw9UXdNr2sepCaHGFZeaTYzfw8fGGLLfd1P",
  "key28": "5tnf7Z4PStr8d2m6Tqdf6YCVjx95DGHBKfoZeSZVtjPvoVQ16N4EPnoeiDpuQ73cnMPy5JBbJ5cxjS7prYD35hk1",
  "key29": "2HyP78m3pecfbZqYdYcw2tn6FPipjJPcnrUosKUR7Dq7dwzT1RxraWbDmsXHbVunBvNyJycJSAknjcAXPBpQLzWG"
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
