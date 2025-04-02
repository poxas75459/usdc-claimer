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
    "2aaoUE3PzVkjHqrYzw6QMt3oVxfY5QZPpCRNrPuhEh6Fu81zTqtb4ZzwizjPD3voCVAAVxSiiHRywaa12TkMCrnc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5xaVUA13ZyWLZ81VrJnEfVPexCCa4ABFP5mF4JBLbmkEACsDfY83ZsKNvCtHbkaPnDG9uG9DUBRaTEkf2fwp3Y",
  "key1": "3KY49K9Pjty3MKFsZLLGkZh31Y5fmeSogdVoDBhzjjWShG61bW8RGjYptZP1Y8zftAfMTD2As7BPCbTwsiaHwPrd",
  "key2": "j3BXbB7w9e1wkGgo9Cfk89UfCjBt6oXqQJ64K8zqyJdFayWFaKZRqcUDLFKqsJ4TwTbevmQZXRwWUHKSh64DmzV",
  "key3": "5Wq5ydxEY212SNqeghsfaKK3P5xGxXRVJt32dgMVBtcG4APYMUpMSsUUusHRKPE7GuWkj9MDVfDaHUnhwf6ZV1aS",
  "key4": "4SaxUgddsFmdDcHQYLTBXRvq7EYENCyKQu1MSeAoFPEwLRioffMSXuVdBrmdWUrqAShv7edM3mT3GzcziuQyvDQh",
  "key5": "46UBMWXXdN9KqR2AKr1abAibwVeJ421PtXHEwteg2nVR8GrnEdwn3ha1fjZMGBJg3mszn31LTRDwo5wfEFWvEA8V",
  "key6": "636Aj4Fk7BgiKkgjwGzBZ5Vi1M2ZVhi7Cjmt5d7httuoZdkJZrApeFK8sqbgVwrHsZ2TLS7xgW3txVuBE278nDrq",
  "key7": "KEdSjKCPRb8mnsum6YpYLq1g43FfbMUd8NpMTFGj5CcpUXq778WfZvzWzVAix7hDSKtXDRWFXRba8Ft3xk3Fh74",
  "key8": "25BTjVHHEkXuNs3cdubiTFeptLhRAJdVyGckbqsZg8gquz9zmH86J46811jVmd6HG7ShcPVLk27D6QbgySsFkgLg",
  "key9": "5gFb9yv3EMoJxtDZj8MTKMk7BfVapwDwEgsW9owFzhQt2KihdeDsQdAouHPphZ1AKeSejJ6w6r8jNszEALPqU53k",
  "key10": "3k9BuPvxSRsWoMHv6z6L26R2XCDZgF3xGscwAmbP7WAZcNAVqQ9jGq7teNU2g2w9dnMftxTJSYnoNfGUSSGafjry",
  "key11": "4L3yuzVM3pxtqzveryqDGdhGWzwyqK2GvUu4s2sbEDXYMryP3Q2eWpiN9t983WHTP4BSMYfEMUDSb1eEKLg41pKk",
  "key12": "3sRS23gVQQScfD4icMAXioefJB2RGR3kyx5DMef55nr4K6n7KMN6gYrrfWUVDmxj1YFKfDmvFViq5ftbFqPd7KbH",
  "key13": "2USysYgFjZU6fWJKgKab6xXb5gZ6TmRiat4kCoNs6CYJ8r4nJwcHNjrZaZT5h8sbJW597VG17emkZK7cMmhCCRo9",
  "key14": "9X8L8fTBvdFVGaBKvg215fvE5rDihZAa3rQLBBhTNcPNV8MiCSFYHmaZ6P66uCEgHf2sGfjoJdTSLr6evwYcneq",
  "key15": "3acWFxcc4YzUfs5sdG1SXUsBNHAecb3KW8SpuenhEh9vMNWpvKVuEPZBZpqNSxkDYu3ZP6VPzTYdGXY7pR6zzwb4",
  "key16": "4QEu5ZPgv2z9BundSZyQjovmihQoceTJFxMph8EZfYwkdyik3XavE2tyGF36bjqtjX7SPb6aHJ51emyKu6w48a4S",
  "key17": "5sCsNCDkBV4bqLjWPVpzQEGdwTLzX812PCQt4C53AJNh2rmLykXoLMXAMZnc94VuKmb638ZP5Sc9vgFMuBD3PxYV",
  "key18": "5k3tBVPHqBY14ornTHPZUzq4YH6JK3J4ZtHGhC3gpmvt1koSTSqZbV7RQoNMVvkjn6AHrkamsLMNeqqAcJ9u1A4N",
  "key19": "4NMaogwUsbkaPKAHLFxfD48eVqev6AgbdpthfKm5PvhwPsfujaTmbZwuoo4jxvVBmep1CCnAoc9ucDa4VTH9fALC",
  "key20": "2Gjj4kiDijvR7TGFX2puPfxXiCUJ297kRRXQLveY3SuiEHHtxd5S4oLSGXdF86SDqv7Nipe5bqZKLHFu8KPtqmiF",
  "key21": "4u7r2dXLEF8ANBEHeGPfxrPTChR41ZLZZBEYaAL7QC1YFPkmggSatzZ7Vtrr8RdAnXakUbJyWrzU1f7bz4pbwQQa",
  "key22": "5p9cENTQ2eTqGwF1tso7qMWKNcn2yHyoz9vaPXU2Wn1kngaitQRQ5pWGBdegzbVPheV1q6egpZom8puuvBFMuqTn",
  "key23": "3nQpDbQffKmne7ymJ2MJZa1fRD2gJ7hG4RqLnmdR6SfAyJQAoKAHbvfU1gjzqsx6HmQwQJySSBU4LxsCmaa2sZMa",
  "key24": "3zeELFrZudAeFQTRfwKqqUk6vqCeMJWqWqifP1K3yma66r4P131EigAxyRDB3oj1FmVWMZEHR5W7W5AwpxRWmQpn",
  "key25": "3vP8vMRBXPEisAqJ3ARbogtoahbGVXoj8rQZgccJk3kuVVX1HjNMFYFjKUnzdgp9Ak9vwYVzFHseXVRaYzhgAEFP"
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
