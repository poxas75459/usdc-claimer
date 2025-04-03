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
    "4rNDxDr8dvmXYToCcX87X85cyh76PKcSzjmvXHqDAeoSZt7Zvx2xeJQ3yaQRDy7zVS9WMLwacyhUfjt9Rdo4FPjA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eKj9XoqxSRR4kfbSBbv9BXht7CVubic35XXfqrRUq59rWntL9YVWK2GxY7FYCpLvoM5gGYUPMrsYdrUZNcsqKeP",
  "key1": "2FChfieN7tk5HawtunwiMvGqqyaKAXpQV2rztnzf4zwAc7EAWKm59yYF6dUTdfDHksdZw4EG2ciVbzzxXR3ARUfL",
  "key2": "2JJvKEGP4EHeWSavs78iVsGrs4gEj9JgqQToN32QezBHCmU1CQm95yX4MF9D9F1zzsRqVLrkAoa4zEEGFuuwHVu2",
  "key3": "2bvWfyusgm8Ne2McU3CdPKZmootuQQkntHZFXJfgnjKbmWgkPVAcveR2bW5Tr1kHqRbXkgKd27dghGJzH4cyGgnZ",
  "key4": "2CHuuhKDVJGuFfceNxJt8rP71Rh4E8JsXeb5bHXpE7FbPC1Yn8eXE1JCyiMuA9FtSCeYqiayZEN7TqgCajVsPdzH",
  "key5": "3ef3nyuQzGCTBZ1RFAgpnFW5Y5w8mLRmns4iZZu5QKkX2hiW2R8voYUagjcCYhSSjzPkjhMqtzhVxG8QF3ssoQKh",
  "key6": "234yXiJJawA3w5CGgKyheqKw2mgL3MPoT8jXSTPmB7cRvKQNKu43mLhmErgQJjk56NfM9hnuUoN5g4Zq5kMXLsgu",
  "key7": "3zpPyKzRvjbYMCbP4a5Axr8CRktFCoQdBfeCXc1q8euVsnuTeqyGH22j9RjSprh37ab2y8ENFCAzVoGVHqGVCfQA",
  "key8": "2qorVCWVFC8xVjysNLgfQD1q742PFkbM6pkq5krw61URBv3TgwzZc1Tj9CP314dJtNfm6wDNFF1Kj6oaqt7xHCdt",
  "key9": "2DKY9F3iKgMooKdsCipdUbVfoCdaw1LH8vcPVpHaZKCGaaWDr55UeoqvtdGvK6SVt2V2kW2WGAMMTSGAqm6Ri9ca",
  "key10": "5MkxBfCPqciwQ6uASS13QsWyvhrbg8ubZuCmTbymGLF6KSRKjbAwPSPLek6QoKTD9qMWwTw6bt8bWemrJazEu41M",
  "key11": "KM4a45CxXLQNvX1mp5kGfmQpuyzpoH7e6rVgSj73P7GajSMsJvfic6JjdEmAWVjC6n7qxoqJCTqFtwfsQ3PA4P9",
  "key12": "7nvjrQhuVTkqSGhq6QwNvPuL4AH1TTh6NRs3aCKa3ePDUzjR7VS8epJAjpKUrCWMfZDkXfWKGm3mnFoQHo3vP6K",
  "key13": "monJtN3hWXyeHa8ajePnrpZ7eMa3DUHfDviB54gH9PQarMzVtKFYPVy8DUYD2EJcN6wPgrbDu6ibSRjZ8nt9ubh",
  "key14": "5mFnNrrhMfyB6fW1UCdUFLL7n1NwcqwKQ1Akzravb2Hek4HPaBFfzzhoG4hm2PThhHhjwoQsNSAfMRigaSmYn8dP",
  "key15": "2jKVMKn1KddNkZzurM1nbnH4xbKwkyueefGrS2xeX3DNKUdQ5fyqmYHMqN5rZxxVxPq4GsjuuTDNJtEyMUtJaL7m",
  "key16": "2847Q9afzDDo8ew6ZYHFLnRXGfirQbi7FqfAGDPrNmwKK1Nq9f4RYfkMVusoAr2W2aY5XiNtnweLWLzUqipbjMCA",
  "key17": "4gjfqtydDj6yQm4MnpQPWNXpMnjMbPRwfW6QbT2ZWvUDZPhLvyyweT2erTAZVRpPe4pw7wDBizsy5ogBaZZhSuZK",
  "key18": "3TBY5WDvaNepchT6gif6Vc1tP2vyhRjWeKCvP8TZLTHfVebG3KDRZFmwMuZrNK3EESeNKwoUtfLnvtEnuRBmqYPB",
  "key19": "39nEsuAwwprst8jyDNCb6yQumRt5L2wPfdp9eCQ9C84FBmwuC1zsH7iAPJS17UpS8mvXGgpF6676Eeh2YYTL4Myn",
  "key20": "5ky1zzTXfpMwpbudAcY6uHeX7KHfwj8zwByeXcVucsCYesJvJJVfUkbsPaUsCN5GYXoSBeDsnSuQnkBeu9nMfSyF",
  "key21": "2fTBDb6jtUkoBwobFj7JHKDCb2hoN8NWgvSaW3qryv26sXR9WQmDARxBarChTkyZncHZYXJ2E1mjqMRz8Wt8aLh9",
  "key22": "2JJeNC1emkSouRcjzYLEpVeBpXMo6QY3QYB1tD971af9P3yqeHvTm4GADcCetQXwqnmmQnrCxkLRQmmt3rvCSVtk",
  "key23": "3F6HpQuEdiuX2Vvqwoi8qdCPP4SvCpjjXhiAwQNL5B5dGKYU3K8Mw2BfEU4CqDxZmuzV2NP3zJKGGbYkr62CEX9E",
  "key24": "4jiPASYZtZRSN75Hw6KAATE286qrjaunfhLgaBwjXWorKKjUCBiFnDGVA6FBiabAfGADzUjKKsdqtGWMcgHKTtL3",
  "key25": "nywTnBn2DFjiewByShqcbNqTP5ii9U6NKg5z3dxrKpLzSJZAJWySt1QJJDbxfSVk9URRhSRXdDZS8LEruK59Apt",
  "key26": "3oBRHS5z1HUbZbXowtQzKpgp5MmM2ZzGJDcdr34JF3Qi19b8NsBua53AcQ19iZ4djuatk8wSPyKi9dJN7xaewjXA",
  "key27": "3PfSU4hz5LmTw3AjKGwqzYqNcbLeetzviJ35qDbjRZakbGbkJTbDmfsQU5bU9Kz86dP2thS59BVoZGnwyGgNyRQh",
  "key28": "27iYX1DWr2tDjBBhN5FRPp4MeSmuPpCUzbXn4YAfionNtwGYSETFc994uKZDGpPk5aUMfZEKME2JZNvqxw1V8Ku3",
  "key29": "4vB6wdLzB821KxxuHMmk9V68XjR7jiiLqgNJ5Bt7fYpP4TpQCeKXothhbuv5NoRpcwRzm3BgtSoG8WZuH3idJcyA",
  "key30": "5Cu5Kjijy5N7BkGcC5af7m6U3WThMwFpxZuJvY1QDv4NRfTpnFwWriWhU4RWHfxJ6PH83E5n93y2Rp2vDhuy2UVH",
  "key31": "48QKbfPz2Kf4PZrroQhpgAsAciks4qNSzPAtNegchsTrFJzMj8igtUW6XbYU22V7qfciRWd7acLXEwEFUnzCgoQg",
  "key32": "4LsfAefioaUkVBFXDcN8qgdYbBCJDEPGUWwmULmAD7rZiKAD7Z8hMzyHVSUa2zsxpy8KTi4NNE1DndBQ2kgn4qva",
  "key33": "3RXRv2j9d5EM92NoNu6GAnanz6WZaMvpJYXfjVr7538PiMPAT3JRthgu5HDmwKHTw5X6tFwHm47BorRmnbf9qE6w",
  "key34": "k4c3aZwLMtMGZnCT3RJRJSm1JzxzizBfoHvCgdqUcutGu4iEY8QkdXJsRPugeLMEwyRr2iEtWdXd2mT9qT8fzRD",
  "key35": "Mk46jVosGujKZoFAmSaUwdZJ9emFEqSJ6XRsQFUsx6NtszNGcAt8pZv6RjouneziUfKb63cFvdHAS9CX2ntp51D",
  "key36": "iQG6WLSdThuE78in8AtjX17iEZHAXphTkFezqBy5wJbPw3be9WWu8qmJKf3VQ92gMDyHvzjVBzgvAz8hrwGHM6E"
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
