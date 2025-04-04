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
    "4QhEM5Z3SXgJcwtfXs1CTNWyFmXnUX4dd3cfEkiGPtLtQo8edmM145WeYcHfyq8fnu8sepQKWZMiY3fvmkuMTxFk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56hu89fcL7xEhkJJknJWfseXpB1HsgfjBSMTPefVYjPk7ijviGWmoC9Zz1YxD3iPoPWJRpdLDCXfNXwpPmyYnMiM",
  "key1": "2hTMKZCEic4GpSHuPGxBwMtt6YULMoPXWiuFT5HbSZvuotVH6HEjPx36rCbM9Vscx48PeNNmskEwxG9vnqJc3jjr",
  "key2": "2Rbfxk5AWKmP2jcXp6w3a8AtmTJHggC8uNAGKJwjcQzFusQua2VrCzJ3T5T23Fz4RSPyCeuUXLsd5av7r81rsBBA",
  "key3": "41WLLMEstg582VV8HSnGtGsY2dbun5ixfdNVLCqQC84GXEPGmyXMwY7nG1ZkKfFMNrF3hTSYfpw5rryaYZo62Rgi",
  "key4": "4vjYKRRuen3BT1vVM2tV3NCKbyQbRzKR3uHeSurffSi4NrGwvacTH9LRQyZ5yauQ1NycBheGJyPAcx2AUVFwBFph",
  "key5": "5oooZRL6YD5yo4JLyEhodNGwUW1j9dbxu7PHAVj1wN4uY9eWfCnJvzFSG3yY6VvTmox2NGptDPJgFwLDxprMn63D",
  "key6": "2y3TpPYVJPHGa6mMrAvDkyqXHb2sAGJ4f2MLsB2n4Sjp6Eh3uYiFAsrRsWjgXiqpB18b7HdtqwMa7UML5FEuPL39",
  "key7": "5A7EyQ8w9f5PDcpqND8Rpgt2azgJ2sfcB3DpsC5aNpafnyAUuiAgNjZkHroXQVY4x6vcR4dwEC8Hzmb3kcdtEJV7",
  "key8": "5CMp6YckRSzawujKVqgEqmevwL3mtqhfxdQghftKeF7uS5fSYszywgWftUwHAweX5JmgCExLFi2JMH8aQxPVZG4h",
  "key9": "5shiHU1w4vTyJG1bgig5QGdmdkupwkMK68pEVJins2xAaGcWBYMkJffqFHX9oqLeBvgKJ568bjkvLFHfWjivNzxq",
  "key10": "3dyAarkNQZbNLnAgYxBwHKTCo5J8gY4TZMMBaMsLftxds9er2QmckdF35Nsh3LtBBHFB743Berz1VMT6AKVVBvb2",
  "key11": "5Q4AUQqdaQFt4twiG5o7Avzfzj9f3noZXWtKk3x3vCy8EQ22fhv5tWm5t3ku6bGuX1DN2rdnQMoxc4AKsNkicoSV",
  "key12": "5T8hGnmsJ8XgEFRNYnNkPLBGed3jhm2KxhkfWqwsMcBWGiHCLUD8V59EXPSahE7ttL95YxjqZapsqKRQEBqQ4NKp",
  "key13": "4uuEGrVEHHANfE9iKkKK5BAjGa14EsCazHMcvS7XbJQGMNRqwZDbivKZMWskb2rxEgcumuBheyMeqz4pqfjpoFtX",
  "key14": "4sAGPprD1TqGiDfvbXoTRKHNuKmVNtXjDs35btopvCCZyuYKJctfnu64QD9mY2fDYTmAh78WTrgwzBQnkYT3vJV9",
  "key15": "5CWNS4z7KWg2gmnukA9rPde3wZyXiQbG32dtoMcryvf8iHDuxfzYGWf6tQMKWQJMh6NbQzbM3CTdY1RaUyATMLbE",
  "key16": "35jpdSB2NQuhjDwidAQF8o6PD8SYtXQyPzghFhbvnzz54r58Lwmsk89kP9H4SoutEiy3rcUXRo1AoAFdZL3gMUcb",
  "key17": "7VMXGWCATzvDA3amCZfPer1n8bKZDWujPd5D1N66bib8mKxgESMCCT8kx1Nro4A9UnAEvMKvAUahx67PRNiWAgd",
  "key18": "2FunLGTPKQMfy1gRuVSyKpTtx2LSw67Swv2RqwKmwgQ5td4AxRHR8C19KCwAXf7iBQAoaw1K8RaCTKBEqfu4gVfi",
  "key19": "4bN6QSPHeDSXtczj5ZVYJPU7FoRSQJJcnCkWKcgia1Jt1RyEbj62QGQe4XabyM4AQeXByKi5N3gifmqAGV4Lx3g8",
  "key20": "2dTpCzA4yWg6SV1LmVjhTeRjKxWWWeG7WDoXEfhN5LTsPzhwgUj47hBV5fDZ8spJQ34Csw4Vme32n3hd6FZsqcVm",
  "key21": "559yzwtMArq4Z7Vk77uZhvu5gKjzLPmS2oEADEGCCW7N37dZKyqbdPR8kn1CYYewRheDE7c4PL966anNryb4Yv6m",
  "key22": "44g5y3PaEw8KjGbP1cBgDSGWb3FjmXBD6yTdYh8EgQd95MYvVQfQ2HSzMr5iUkaest4oM5CwPM8cTXdtQVwDEB1P",
  "key23": "4wKXNSAV9hmXrdq57ko4dnAJptaG6WbbUvxVLdPD3hc2htjf3GeWDUJvRaRxGRwnhdV99gEy2Jxs3oCeXThmjQ4e",
  "key24": "3XZhd1kQxBRfU4yyXRDykfvMntGEHdVDjrWedGCwYGUvdgpqPJECJhfEa7XsU8BQEEZ7PniEGkouZ7PiwpyPRVDF",
  "key25": "555jxdZBhfhvgWBx1Djf2PDbFRCZbT2KpAY9Wrs1ZDparv2nrsbBdY3xqAmNzmQrmTxQC92JfxXgqCi4aA8RkjEd",
  "key26": "5MUWSmKy45qHuk5hnDR5cxbCaTjH71E3DLCqrtM7NPmudVJGiLvH8KxjCekwrc5S1t5J2XPRZD6URWdLpcN1wZqy",
  "key27": "2tdYXGJNDDyXezj2PeJAyD5mvYFGySkqLAcBrj4GvtAnjju1FiDwX6Nuxm33jtqyAgmm1hpbeLsn99uKeJZ2EMWB",
  "key28": "4famWMPXxr6m3VJH7kcKkLwgpJTR1UwmWapUfwvyBHb5Fxpo4hfiv2vzuUwFXmKKZqw1wKyjE6x3SbwiTughPTbk",
  "key29": "4vYJgXGUTpAyhQb1RC88TP8cTmyYHVMcsB2GkVeTPWzmZNkPES2d39bsT49f3U8spoRZJyhGFS754Ljk6ZzrfutD",
  "key30": "3EJoTBDXdLTLsRGEzCQMmKNHatRZ3ManwJVEzodQgAcPXR4ERYFdLaNfo2aVLfUttQyjAhMnHfbPd1zdnN7LRFhW"
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
