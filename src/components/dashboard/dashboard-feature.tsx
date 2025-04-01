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
    "2ASkZhQ6hzFHG8V1vkDYZYGGasJZYLdi17qY1sMBs1wwhy3KCxc8uT4Tjz3rUWY1eE2vY5no3G7EpTtCGEYMjLsD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ex2rsfeNuKkpWL74aG14gkkhReov53mFH1CU6v44Pd1FtrZTqL5nWYdwXGZcGRUKcZraL9CL4sgfoxKXKant1bX",
  "key1": "3Kx6YamTi3VrdmVusg9Wz6WKXkEbcJY7wDjtAQTbJwj93jjyjHheC9nNUititEQpYsb57vgTd7cV6kmSSX1sbTkb",
  "key2": "5poNrFbUhLGKTYiH4ebeUZyNbgXZEWjxPkgiHxjGWqTppZx3DVjyjZ6LWMzbV1VCksCUc3BL5d1mKssmHWutHsjS",
  "key3": "V3YjAUnSpTXbKabM72asmykrEs3omny8jEuPy218htzg8teSgkTJNUrrH1hBXRDEQuGaRSrLvpsaN8RfVTzehEp",
  "key4": "zPbHGfuQoJ3wiDnE1RroNU9yxL8gSrHxeHctyPNXcJ1GZqwLejrLVVWBtyeBHWCh3jYXBaC6YhV7nz2r1psgD9k",
  "key5": "51fhECZCAm1NexdrqQMou478RWGcENo4pyRPoodmYud4x2bGXHqUpZSet6By6NriiNbTrjiVMHY93wcjsJHxKn2L",
  "key6": "4tbiYkTsto1nodoQLJrPpEXnyn85c2iqVgMJ5tPD5nienw8G2ZxwG4TaKhfwTe9oSTf1URb3Vgxbu8NTXjcZiBXW",
  "key7": "4MYLf8Cdt6cdcVuqTvRSkurgZMUeaeRns1i4JL3dFJh5DZVrj2gu3QWUj7fsCjxLVPp2fJ2de9pP79jYNm3ifzi3",
  "key8": "4ogFoVDZygjR1MJmgkLEcSyMTJbtSCRH7P86nLDGJHn6UjxhUncWnkge8CFyE7EURmZnbjjiXLmUSGzbho34BYbv",
  "key9": "3A9gu7ZxQBbELjhujcEFGQGof5XZJ76NVopVRdxYAx8ZA4R6vQ2Ds3UARNrdwBYPGTLR8pPffJHKWf2tyfYAzN1k",
  "key10": "2z7GgmmAsdxpFZUXcNZwckFiiCLXADvaR8cQiABXPXwmsLAdW97f88LwbqNLnhCULHrbBtHXah1137pzFv8bzhzQ",
  "key11": "3MQLtQCEthPWa2yRoZKZb4xsRQr4CqRUzruvS3NDtXJJyQgtzwkYUnNxiuWcf6kLhxVRtscTDdF6NzubPnTMdqE7",
  "key12": "2fVmEUW7H3jASScFaawZp1NpvVzKJTsFLHjHBonkhnH2vZhdJrfAMeBpwuJTtu4rsbUKZNrN16fDVeznrnQUWEbL",
  "key13": "SUgPtxBpZutuCSzgsruJU7VpKKsF9BKAndZiY5NwwcVnJcY7Hpbz4fhAzfeqC2EAUg9iMPNvBzobJ4Z1h68LqMi",
  "key14": "2bkDHDsAAHrx9YuTvraydG5txGL3fsvyJTiKuxX8qQg5JkM8P31s4gx6HYsLSzqjuJWQT31CKsxiUUVpg1NH7kA5",
  "key15": "3BQho7Un6RtMFGSGhawSxy69VhAAN2qzx42kJEqBGXq8LSueandFBGZmb48EW8U9WVrNYDE1iX67hnhx841Bdgoq",
  "key16": "3DmdPWYytY6YtY3J3BT8G16vbHVAjxEQKNdoAk86S8LktCyWBZVRFYkjzsbU3eNmaM3TBk49CeLnAKAPaL7jifE",
  "key17": "MvsH2R9jZBgVTd3V5pRXmJcwK6S72smnvKjwdmYE5qwvqGnZsQJUdvjLGu7cR6zgJ4FDDjpVTRK35CUcGNoRWrP",
  "key18": "4MVtJHBYrSR4dfrABrvyCVc2WCVPNHNQ3QrC2ZVkSZ2NXXCact4S5GzdJjJNmZj7WvyTKVcsfT5Gje2qDxMFuqgR",
  "key19": "2VPLUTWs5EMnfxwp7cJDtj4JsmPKT3MGzn3RvyQr8W3azLFzcC9AsEdTfHt4S8k4qrGs8cf49qn3XtRXGLuGDTKi",
  "key20": "2zBGNS9WtH7DqC3AwJ6Q9S1QRzLLgLBJTZSWaVEsoLWN3iJEnLX1YzhsuVJEwzV9EAt8L27aTvZfFJ4Pi3UbDnmS",
  "key21": "2sTobuibGh3Unt9UN8tKiQZnQF6r3nh4fPV25caKiGr16C6ybS9k4L8f8Djua7jTJQfv9c3oTDvugjiDZJXPnicF",
  "key22": "z37Ge9x8iSe8R6umoGEX8RPQjra2VGkinQzU5ocBNqSANz5NtqpAJJ8m8dqcqjGrzwtAvvdSUeGZjfBkecSmfgy",
  "key23": "3rs8MXwQcr9ATM9g55kJ12qxBDJdjYvKa2zk2AbgrFgNJQnJVPnoVj6kksy6ekDu2LRXmmCUtgSKCVVvrZaevEsQ",
  "key24": "31i8cULpdC5ZW1z99F2qEYVpxaNQorxoXiT74SFNCfwvbvvvRMRMRd7KARSWwFDcE2FhQwwMuJ4716PmFRv1vxz3",
  "key25": "2CUqyVDtQRhR8AFTkVKVHAFzuG5kAs3vfMP92WM2CJ9xVkDyrfqcMLrirEGo2JxazMSUqrqdA5FCrNitbGHr1aVy",
  "key26": "bFVydWazHy8ypF3J8hmYtukg2YcahibkjHAJ2Pkkzq2MNSyXNi2wxAHUuZfsssZozhF5Es9Yb29RLppaFTfJzS3"
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
