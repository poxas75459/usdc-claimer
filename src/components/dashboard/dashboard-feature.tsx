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
    "5h7LpXTZanp6n8KSA5SG7gkBWsX6FEzxuyVHDD7YGzexEJtj7jCgRZsXKsaDjCw1KFgXwUJBFtq7tB45agvr9dgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456fhL4oHprAwVmfdNgVCe2pX1dbUUiDRX3i7a9LdfNumT97NRWst9UtjDMWNmp69fziMfqrRYDKqDmS3Xw7BUD5",
  "key1": "33U937rtAdHKGsEMk6gVd79ngiJrNW66CLqiqfUTRQfuxFwfHs3kde2K3zf6at587EGwTLBTAegjRbejmNEZ9M5X",
  "key2": "4oXHSR9fbmavbYhDAVCg5SpiUiGC3MYRr3GcJfg16pMKqzVGrp2vJ93ptt5x5gPf3GC7Toyti2nXR6Y57TFhvXFe",
  "key3": "3NWw3y5Sn4YEb9abdEmtwujvuHRRQC1D3P4Vj1kciQuw7PEnww5s1EfqF96NjpeCnhpaiXYzd7FzDQEtobhrrEu7",
  "key4": "5tPRatyrA9WRL49i85sktejibggsrU7i6euPTDxnkQtX627raRUqXBuxbL5DLrhAbRm92CdFjRXiDFUCSkEvCvPd",
  "key5": "4Su2KZuv7md6WgF9T19G4e8ZDGoeUX3WmNixnmuQkp3sHwA3amT2eZHH6cnnqh81F48RbDfvYRosP1PNP3b4twMq",
  "key6": "4gMLdfuge6JKvXHi6sGsDY7N4ZrV6Pibf4zRJVfX5DJbCmV55XKZzdsbNSb6eUxqv57VPLVikaqkxxe5ZyrF7s3Y",
  "key7": "5hEYhzeTDrSNf92xui228p1r7Uyr679hwbK4FUe2WEeVocxYhe4NKKchMSe8pm722iPTgfp3DgqJ6Rrvpf5cp8xQ",
  "key8": "5EKYpHx4eUxdgyRv7Nseuv49eGMzrB7WnFTYcgZ2YkwHSVvxsRHU4BMEnrPPRkyEeZetVn3QW2skkTdzmpHeZj4A",
  "key9": "29ga6DGy5HMXfPN3MiLDWe1VwdApyn3so8zYMTWf2RxC8hWhitE9s6TZeYetQYsMRV5k3sAax2rcnHtoupyAaArE",
  "key10": "QVcRTKCB7XB1Qj2zS4aLTyhgqJBP2zQ1MUwm17w9EXbg5N8K7sMgnAY8eFCnhkKnsm1EfLVXtsZxdtWds3s9st1",
  "key11": "5LtvbERL3ZMwdZj41fZ1mC4pCj3ns3aEkNfaXhJaifUiMoSA14mmXwnRfPx2E2UXkyX6apNZf3ioMgJ4Bgs6oPK3",
  "key12": "33DZ8hykrphpPVw4219Z3aycbnNPQrQxSyX5arjGw562YtGq6EscfZGSxQtztFaD5jrppaTecWNbD5jKnFRkNrGF",
  "key13": "5HegVPfFt6KSDyo8YjLD8Ep4RSyEy5V5iEzihMFZJ16r1nfvSJfaHf9Et9qR2DchrST1bFjb1HoJkkndYAse6BMc",
  "key14": "38UgH8k1XY7TMMpoNpPzWQQGWCHe9WLu7Vp6r3TQ4wLPd1M2VYha4AiF4SHcFCXfHNK16L9o31PtatAaQFwtt9QQ",
  "key15": "njrhU9qSazPbYAhQQeJYbaFNZPEX1dNWS4Fw7rsDadPdwrxhgAJfsDb8iXxZotVuFnwD9HLGx2McrH8ULvaU1Bn",
  "key16": "JebgLrZg31zmKWs66vHsiHffEHZMkEzWGk8YEbiHrZUdxv6wJAfFm5M9AeEPYFWLdKJLvgb7LsF9e43p5EQQu7Q",
  "key17": "4V5TedA1ArHU5fRLRNHyhLpck6wts4KJz4NtTntWBGWpymYEuag3qLpwdq4gd9zeWX1kq8v1NPjQf79nyBh19nj8",
  "key18": "5Hr7Uhr8UssKZDzo4QN3ukLKjZDskwXpNj31Mj1WwEiMvzvYBNLfSjwhwm2LFC7ZPMZpmTtHcgy8ioyM6YRvUVSS",
  "key19": "3iRPAJM1zGZXDuYtoohpCawviS22qyo44sDU9H1G3DmqWMARVXmTEHn6XLoPiMWsTNrshLN5kAHxHF5RSh1mYKiB",
  "key20": "mBNUX1ej2Kt56TiHf1cDihvB738q5q2UAWCGSV2ma3Gbhg5DjkgnAkyWiXoyQRs7wSso1958SSKHNsfeetPXARF",
  "key21": "2eryZfxy8iXpB5yQFZJnGWPCaMFu5beWyJz4DHesQfcw67wW2aS1RGp1sqisA8u81Ew8vvS9qrkbfvPMEE2rMssK",
  "key22": "3vjxySwYTuoiDbGBvpkQ6qkujajK4TD6jc5U2Doc6GxeY76jcm3kzwz5h1jpbTR2JmBDw3uXgWQes9XbvNEecpku",
  "key23": "3mTgcx77FWqgxsoEPi4k8kDAZrEnSsSduS28dWJ5Qu22eG94XhvkVpVEj85WUBtwwy4kZunbgFvc8VaxoBaYLKk3",
  "key24": "4BtR6GTGnhnrVYk7a7BCzVVMnxvMDXJzbTD2QUoAt1sQZggx7yNidrtCMqAPDk6Z4B3bgPT6w8aRUoVdgtf66mgY",
  "key25": "4zbHkp74Sa9QeiwpbyBb4bjf4jJ8LtgNepei3H5obGxCNQG6ABw4EFfv8gZPuZc65YCPf285wX93JqjksyJt7Xth",
  "key26": "4FudUhqLW8SZMgiC44VG9NncpAgfe7KkSjBpDQx2mLWXpEAd8ivxA9c4tfFbMCz7gGJoTXRXoiyPoBNJywPxhUZL",
  "key27": "2RgAaXxS6bAWrHv6LegomZmaXKVNDfzUkmZPvH4Segdx2x7ER6Eci2uBJJQGUodmbsAvQfu8EGWnALVUtTL1WYeh"
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
