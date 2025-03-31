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
    "4EyK8M74f2h3AiyT4WqP2dP9C2aqBBLCyJCtnLMNwKYPn6HKi5SnPgdrCeRVXsV4XR6V7N46PHtooNRmAjAjh7sm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q6sHHAMYCdT6R3jyYwka5gNU3WNirkbn7WoHn3DbZTYeboie6w7u3aC9r59BhBSSFweKyYv4Rbn9mnQYbAzr6qw",
  "key1": "3UXekxjrU2ii4Ud7D5fMrk6cZQmUwsGTDqaPphvEnFZGpNUTvzvq3SoFceGjvmhLAoqSWoJ4FBc5N4Xhf5joQSmx",
  "key2": "4yybpjQtfSTTVhgsBFFYn6Q1eXqCPfpG1QmzS7f61jRVAHHgJpiWKohRyTFeN48BS72Ki5AyYZ5wcigLyTH87UBH",
  "key3": "3vfAcT8PvMtTpdeesZ14d9evj1oNY8xSH9cQRXtY3kqW53xdZYzyQSoWZf6iC9YGnfK8sowVaKmfMfxyNnqPbvb",
  "key4": "4DsYptoHsLfVPeDeTYY6tDTZPddmqxz6WZ8aguZWBZbJ6wDHrrLp6L7jUwaooBRt5K22zH1gvzfj6L84z7SvMooq",
  "key5": "4SqiipdjjQfhHKan736guw9oP9pWsaaXnPtPvNAFgUgd9uymvwzx9PTXp4zMp9kGSh3wkbY5tZxEcsuXnAD5jJ7B",
  "key6": "2RK4uA4BTcH4wZsTxFr9smTzkw1ELEfwpg1azBGg1yiepU9Rypf7Vj8GAikcFjK6Sa6M3qi2fKaAkCx1vWTq98xo",
  "key7": "3WzfidpVXY2bGvuN48A3hhtAitq3DxPrcwEijsBAHtAc12mSbAmZybBvMDchUKbEWQj6HXyuu6k6nrBwXvuA1ne5",
  "key8": "5yJjC3dp42EMakdNzYDwndPu3meyEULyQqcPSxUPNxX7nEYXiGzdY9rY3Ngb4Datxig6RMPJCtgsV2mbuUvJNATq",
  "key9": "UnaT87GL7gnj83Uco1Kkes9qYCPzuu5zhvfaMKGaxpQ7UTwkWrkYP42Yaxar58DZjL3DGXBQQqAYVF4yTY3H6sz",
  "key10": "5gg8Dr5t8qFviquRxrEiWsqK2ZUD8VqeewCR4Bt7rpvvMZW3ANpmHGKDSroc8qEBCMJFbHmEBs9z8Uqq6UH9TVeD",
  "key11": "2FqP7Rk5HhToFyuj3LsdoB6GqsYqubM18YYQWcNLaGJgJzDuQAbX39tAqi7UGjQ99CsQ3ZxFzbskTtfgWwUMH4Uu",
  "key12": "DrvnDta1kafXjBJ7vWy2Yj1crecviWGHXykhzDYC34fEWsn2MeNxBaw8Fp3VrT7UmDKSeWgGvZACnMzY3x6DVuL",
  "key13": "24MtU4RYoJWpMchhkNqa8FhztKa58BQ4c4FSDkPWME8YCeSxQQqqMzS8EJbpezk3AcoBXCF3mFExANWUjWuU5Cv1",
  "key14": "4bB3vCz81pMNRmfgWHt4V52FhnsV1kkm1dxUktUxFxai5RdnMX68FzM8yPgnBHmAcWQnED6gvYThB8CV28JQahmx",
  "key15": "WaMGE4EsLUbveQJRQUWMbVGFd5vrUAUmfgBGisteR3vjpCcpdDRGj2kNCU8jQkodMcynPUtwyxDtbvNLKkg4rDr",
  "key16": "5XgWFM5V5stF8tVKsT9aeZ8QrctNG8ZQC9DKjePVa8pBes5XoZSNyo6UXtRJQAUejPCELxi6425foNiqMn8MJH4n",
  "key17": "28bsP16quPoCHMRe4TRXNQSbZtUwJWwAzQJ1aY29GnJSkXJtux48nB6iLZSUACn4WPrguwFsjGhpMtT9Co1sX1Ky",
  "key18": "4uC5oJ1kBaz1iFt9CDpXQGmPWRDkpDQMbvgVss4FQgzGcNH3jqvqF3MkitipBuc2QqPnz77zb2xR5yNdE48uu28w",
  "key19": "5J4B76urhjJe4gBYP2CmqTA4uqUduuav8SjF44s2rscHMCYquJupcdVSGJ56TcUXPqN3WfVy29ZoKGRZ2Pcrjo8a",
  "key20": "5WVL5kB4NSJ6CWQKQRR4udgyx7h9wsAQmKjVBDSN1m7JFLPNsXR82DCv5h9Po7NS3Du82qQj1i8HKstHxWPjXKQX",
  "key21": "2jyPTNPuVxNuY1jEPqN2RkqRzUEXnWWQAXynNpwmrCzCFUsQaTazJJXuDYDDPYL9pUFN3chPsVEa9ujxered6Xoa",
  "key22": "4o5s8CztNB5PdtzbR6Gws5XTWwJ9VzTtdKpyQbBzhkAyJnm8yTwt1nm8nLFbcjcMHzk3nbFS7wNhdPJv4dj5b8rb",
  "key23": "5vGhodw5wye23mW3DDJba1amPUtkCQo2EmGuxg7A8LWKrqbGbgVJ2JKnGtsefKcBreqdKcKSK5UGJKyAp6x3D9Lc",
  "key24": "88vD1ymPMZWyC6FhWgNMs84Uvr946bfskEeJKTpwir1jGWPYo6tV1YCBZJeGQa4ceVB2CACm2HdjxtWjWgg2pjR",
  "key25": "4RnAzLatWNWqgjyt9rKf38GEmcPgRiXnwxtrXSfzqjMsdGeMwFgyqvKc5yNy45cvhEokGJZAin9WB2b7gLDv3ACk"
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
