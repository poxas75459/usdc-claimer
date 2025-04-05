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
    "xQJS3EsUpjSqcEEE2E96HsQaTCzknfZCSMEsSAuZiSDWY8uZ9gCXX34NDEmr6Rfvpgvp8asUiGrhMkLuc1pQTEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTZ5fCLL2iRLPe1iYBdPDi7J1A1abfsLx1dqMVBFTtTArAajm9osBMPW3skKa4pHVExZv9Tn79JUbwAiZqybsuh",
  "key1": "4ntEeu9fyCbHTP8zMJNi5aMLkLDq6YD78uAisKsw7dikeSoNTUeNUaYR5fkVSRWpais9yqt84HCwcMF8vr8BVG9L",
  "key2": "25DGovVi4QK8G9CpVLE9FV7GpYTaPaLsvLtfYxWZF7eqtFHu9LhoXSztAD3eiEMzd4NsN2Dz4UoKYv3tqYTZNGnV",
  "key3": "45Ke9iF43xk2Jz6G1JHMDWQ3qHMxZunWFLBSS1wZQUMU3H3creUbHd4xnnLAAG3f863KeLwyonWdpkt9mASadys2",
  "key4": "5LHDhu29dbMo7753NSZrRR4YBPTnMQJhq88xHbS99MujPCWfpD9Jbqqf5FcDS7Jqcr1WiQNSHdnNVVa51v4CFXvR",
  "key5": "4VMewdz4yEa2Kt3U5Pa6YD1oCEEmvMwecXZYccZzsMnHide7XFzj5rkQAbPF1MtpmHDPvu7oFxemEw9DWHpAoni2",
  "key6": "3QGH6z4BGSht4XuspSi4SKPwvdFHiC979dCWhkR3FXBwwwD8QpUEjP8jMLfC3awg2FVTgiUf3vgebcKb88TW5Dsu",
  "key7": "4d9A6HFLwRDMwcpTAXdN5MxatEDGHo5xZA8ohXKRsmC2DizppnQ4uwAdVJkzh3U2R2F6L4FMfUjcuycipTBJrtdL",
  "key8": "3wezcwdCzJQ5sK5corFSmrRwPVgYDdXTjbuR59Famtrz2eUYFh9r2Q8ptEP5CdXHVHcru2iRmU8HWLj1EQC64gv",
  "key9": "4HVCNFgo7Udao6VF9UX4Y2sCMsaXBGcCcCYfSqGiRkZ8ZUGF7cZ49XRCHFAenJ4CuNkbTiqP6AyMRq3gEs7wL2ir",
  "key10": "31MtpuQrA6hoYNZFC4voZFNEkxL7JvwQXn6jZfUfGMXvAiCcR86UV7zYbXXZNR8dGTyrSRdXZvhAXke8Tv8zfZCN",
  "key11": "5e5jiYz2hXnHrNzXYJ43CnikMaQ6fcYm4X199JT1eRf4q1CuCed1Brnwp4EixSxHrREFvnRdnkfuETwmn6112r4L",
  "key12": "4wijAc7BguUBtp78jbns1vzcgDJvLwkw5DdgJLUTgmzUo7ZVSyfFk8nAzG3t27tV5A2ZH32tnmBknUznVgKoPuy4",
  "key13": "AoxSDfpggc8KZG16C52VDUq8fP5ZYQQzfBZ6xpHifpgKpcXZwenevDo6Z4Q6LxiUr7YGkLDj7comRszxa2wVMXy",
  "key14": "3rTqJfDqqRGeygnGyF3RC6KUx75HE9mYgF7cnJ5CdGHk5vSTfBVnRt6G7mjsD8Pn2tQhytBpQYT8dBT6aHRzD3Tr",
  "key15": "3VcnkwtovZnEiKJoQn2utwwwS2Rkb4qkbzSKNbDDCMcZ957STbpH6JBMrcT9tZMoANbRqhFeDdoJ6nAkeYRKaHf5",
  "key16": "5Yog3ULtpUEhWBUyVumj8ne6QHjezUKwHn2tUG4J67QhjUMAWiNEgAxuWGWfVSWnEr9KTAcvZe5Dzy75zsSV7Y1X",
  "key17": "34aHQrnzBWtyVeSggECHh4P8PjsVJoJ8dqKAkUTEhqrdZTgFBUdceHiGSnJZd9FBSa9z6uLBYJLwDXEEwMB4FTan",
  "key18": "4EBYxMudRNTNnLxjiv9RqDq1gPMqGMTReJTmEHH9t7aBaq6sB1J9ut9hUhRBzTBmZdueBVT5ZAwG4NGzwDT21yQR",
  "key19": "3zeaH7KXhdDiMuqHEtXxC6NjwbqE675aUMBFvo9F6i5kr9Wmo8xWf4uEt944Wg4gbatbP3pLjnYVjXrz9GjARfFp",
  "key20": "4RGu8uBnsNp8FSokubqLGfjeTUn6YsGewmoCopvzE6e5cRXUoSLNHnnVECjbhtGa3gZ2V6p5r8YBHNs9Y7xhv6DN",
  "key21": "3o2mxw7QyjXpMfFjBvXQgo7tHbtHhJfjUoLyU4NAQrmqxMrFzHaM2uBh5ct8GUczirq19gzynDCAWD6SpX2g4quN",
  "key22": "iRdXvRPm1MnJmctzJfrMUmH7AbrxXsViSq6z3T82nRGMZeE1FGJxkhU3NUYRGPVf9VSYmw24A3Q1bc2yGCuGWkt",
  "key23": "3K5s1MMcWf7jjp3Roi6yn63TFSprk9Ec24FMErwLwhP9cdT82R3SHMpBLUiyighVAcn6EAeejXyP5hec3U6B5GqM",
  "key24": "3HTMvhT4KSio4X47BveUXaWjD9qssqkXkQ9fhZ8tjPuXLcfCWAoubJTCGWsgDsEHqrQS3Lb12Mk5Wsc5LL4UogeS",
  "key25": "5r2U7xno8d8eyjcSWo8trd4xQzFezagietGWCahU1qLCVHEnsCYUbVWNqSBT3tWKNc9Q9pGP2vKU7gtxNwJ3pegw"
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
