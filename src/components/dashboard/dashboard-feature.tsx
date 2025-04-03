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
    "39X2zHKptXCRMyQppZw6bSfYRWcCj42miCnAm9UASFWLJxD9wUAcsLgKNnTyiwYsXYRUrdXBXJzoqVcXwJhAgrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4arBuVr5ApXAjPn4zk77JyDrhWZbno69iaTnPh39NGm5zyQKm11g97PjaHqPxcLKc9jbNhEd9WM4z2YWVmmEJWrT",
  "key1": "5unL557FJJGDUDP8PZPaHS2zrLrHsHGPLxEKjm5R6AbV4tUtoDRZeeJb8ddgbxDMUevw1UvoQLCo8NnPpthSAytB",
  "key2": "Xsqj2nMppCkYKBB1zBuRdaabfJAipQ2vjUm2as8RQTQi6RsQiQJoMUWER8upNrxMW81NBQpxQsQprrXNLDJ4fM2",
  "key3": "3iE8oxXyyMbi4vHaBpt7hMMLTzWpy6BdKDorSoyNy8PeXqooRoE8gENk8cWi64NsmTwerbspjrChaTt8qFq2vFaj",
  "key4": "2cgiMFP8ChMvofS48v9gorZMdQBmM3PUprinHbk8pbVgZycCuRXJQqqh2D7DPptiw83dStxAQT1CnHoheZChUxy7",
  "key5": "kxMX2rJZGdZevruoDjhp4uktPSAsnLqBpYQpb4ZxnXUp7D1ByomdzGFafNckjnnFqLNztCvQofeJPpQadtKuok1",
  "key6": "2qmScQHLvRFmZEfd1mzpYGBuudtXUQvx7SgFztp66YcFkADJduFBeXvL9kq4m9TP49gft5ZPJE74yVBSRqobY4LD",
  "key7": "67WgmzoA2NbURPyF9nBbXw7AT47VPpETV1Vgz36E9rYQ7TpMvQubSvq1446VKzHzsPe6mgy9fomLMuVWmK7dSsG",
  "key8": "34cAZfgcwj3KbjWcPj7RRv1K1T4cEd7ckAzzt9foaniXF619XRjEqtoyfhHofAfEcm6o61cYyXQSoL6pyJdi6aBD",
  "key9": "3QTb96FXFAGmJpfyNAku92cHDwZCg1YToEKcgdxC3xWsYMHJoKiqxj49thTwpThN8w1V4nVSNMydMJ3fJ1RjqYrh",
  "key10": "oC2D12T6mJTCWBW6QzbYjawwTVSEs8BWLSdJNFKTrjMzYfpAYCn9gBByUvWqzT9gZvUuCokP13sz8MBj4FGtrJK",
  "key11": "4rkkS6irP1A1miqrXwmgwj6n6TgEPGiC8hST9X7TBReqygsxYAQmQHDgh52NwVbuNrYSSd8FMk8c9id7YcgsPy2R",
  "key12": "XxdXaYhVZuZDzapFpuGM48fgymjAUR4YkeKf1ZHL6ioH21ZmWY2qX9KW9Hrr84UEmRDuWBvE29C8LT69csmsgPs",
  "key13": "5FNdDhcfANAyAeSGhDode4G1qEdGL3wS3znio1HmSnBZbM2e1nCHP8AR29HLeHr67nJU5LqVawo1HsaVuzGUPbbA",
  "key14": "3i2zpU1FzEyoQ4XTJeTcK7yNBFQ4uWsKuN65EH9gWyAHGAKdMp1LJBa4ToBySZe9xGdK1uaG6VSjM6AUSD5t283r",
  "key15": "4vAL9NJGwETPusSSQcvq6CsWiBVX1BpNFbpndYJY1CJyQHAtPx2NNftKr51hPX8vgTMpJ3a7D8PFcpNkLDwpj7Pd",
  "key16": "5mvLKB2Uz9Ejiys5JSuR7THe2spAjm4zG9QC9UuTnLM9JW22EgcZxFGdvskSMXDb1DBdq6JTqdpRJ8ZaJV4Xuv5V",
  "key17": "2s7gNWBm59XWbtguTtmuD575giTuCNs684uziWBpvBeBXtH5PqQkeraxm1MU6BvmWhWkf5EJDsEenrWQSNzkf1yE",
  "key18": "42Byb3ZzGRRWk92Wo3KeNUhUXqDN4RdWQEQjuVdwhpLwWR1udLgetXno32LC22k8RwrEZjn7SYhg36JgfLFhtpnT",
  "key19": "3nzvaAKrK9i73gypLwSs6MbJFsBHnAFX2Hy8vvhcC4QQw1Kiuoz6yyrKjdtC2qm7oT4XU8wNfzyLx9uzqWQFowNx",
  "key20": "2A6R66F9LRQV3hfvCHXtHqPakX2aQ8cKEnfU5qSDWycGWh3JaKmRXDJykY24wR87nBto4Kqssj9Jd7wx3PAj93LD",
  "key21": "67KSLQS4cVqUs3Lc6vakQAJXgAnSnWWwiV9w7hWSqddxd4b8zheL7oAfw6ZqFLXPx3sCKmHjq74f9XF9yvMDQPBm",
  "key22": "3K3qYu5wbvwXWH4kLH9iWy5ufSgCHsuctHFQ5jq8rZUA6sW4dPMWPrQJqxdaNTnXP3iaFnecxSETTNeFrmagDCd9",
  "key23": "4x2rynkAbrWENApxzJRV5ehaQonCKx4TEEYAFvoQcRf5j3SVEPpRbcBgv9wgM3isqmyU21ZQU9RzcJ85wLsSARXN",
  "key24": "5oiDf8swvTcJ6X3BTihCWa4F1rLit7d2QUw2FtpexJsa3PaNj9D6dF2X1yzJEjKSfwGfE2SCKWgbQWCc83bZAg21",
  "key25": "33v2rcTrzCS2bwLpmSxTDE1jHAfAdGgHz6yMDRGRarzCjxLL7Lg8Qj2jSo2gEwoTRcMioM8jGghAHBBUQq6CkdFR",
  "key26": "2KUa2xL6QfraTAzvLASynZJ2XFDgyM7CyJJfNpmqoXiRPo7kwhDGpGHspd7pmANqU2Ycxgs7sMPFcQqkvn5NqBpa",
  "key27": "5nhyjcdQkDH6jpc7C6JaBqKtamWjxJzGT9HwqyNJdU34hC3rYh14RQUyVoGjP37fioezBdRFMfdws4gA4X7zLvd9",
  "key28": "35h6BdV486H8QigmFa3jYmxZ4sE4nbD6eVSvEUxNKP7tAssQYp4g9RWmqCfZ4LedMQ8xRvRRZqBxiev64B1w1jEW",
  "key29": "2FUTDFYZrWBpeu7fEyk3sdcQ4qM7CGcLcHGM8uopojWctARADBEL3Kp6MxToTjHE1GmgjedHmdvqa5UJn6Dj27HU"
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
