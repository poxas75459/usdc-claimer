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
    "3nxhGrm6H4vwgPi8BvGa4mSHWWDBMMXygrC7DYdzvFvFCN7Hwersrd5ZsdCRcoWkJsSZeHAvp9k6AyjkKtyVJPoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tisyq5s27W9yVP7rUJ9hf7eH1nr3SmjybhnUWKzbi1vDT762qf3pFhwUjYxoazvAdJRvyBRpD1Rkyf6ZfBkczK1",
  "key1": "3QhzzeogNSzyX2LZreLQUMisaiSvGP6NieezkqhjmejBR4BA4N32L5TEdytXSyCLtwEx1Vfjm4WeWnukJ5s4Cg3w",
  "key2": "5Lvnh5CprRS8mzSJLrGzkCDZiCtxnYEvSnFaHu9ciZQTS3eGfEKqV7WVqnGQM1kU3VuPYEqeZR8rVe6h1hAwzTjh",
  "key3": "4ne1n1cGaxpGCKeex8f5z2YkjheTAtQwMdLhJBm5gEcMbvvfagbA7MusLKPHGQrj91NjFPVKvQJy1Med4fMzdUk4",
  "key4": "2qRKf1LoRadnmM4EVvvDiA3rDJs8hjYeBDfDPMsXV1rFoZzbBx6bWRqqrm6DNqkVyozFLhs5wStcSwH4QfwytTNH",
  "key5": "5HXUppiqB4iCrAwLMhEbyetYdHZJ659T5iCHqBX8JmuCzzCuCHytGT73kDUAj89p3Rxa2SRMaoZ21cJNXJqEXwLK",
  "key6": "3CzL33wmVLfUihqY42nxeLf2db42HRYjNezfuAxBeZ41tcJ7wtFxLUkgHZyhNpN6M8bHnaqPTKmtjHWjYReUEjLb",
  "key7": "5pHNhA6cER8iidRaBhgXMsLtaNbNuSjvQoNA71wkmH33Ju9mmYYCo7PW8WzwVGwysnyWQWX5FWM33aVC6jq7WjUq",
  "key8": "pAZrUWDBWkyWPmFYHwRUMGYpxAKtQ6b5NpbQt3uxr5Mxs1BZBfCXZ6jdJvC6oKLJf6Da64KLEAt9mPXud3j2gBR",
  "key9": "3oJXBJxvWmsTmWHjsNmcKbkEAyHqQt8r8QvY48JWT3v2MTAFeLj55zk6d4unFeSWnB54DwFawp6qmr9JwtdJN1v2",
  "key10": "5Ritr1cyi965y1wxNxkJPnmjqhkfJKqhG6o11fX6THSApFNcMRhWzakVpbmTaRdH16ijZcKEYwdU85hHEBwrEpEr",
  "key11": "4zUEona7gvqQAD1eCZe8adr3VAZen6XaHk2qbRaHHgi6hKASzaVovoSWG13S9NuM71R91b6JjomFf9ormsS3vPdr",
  "key12": "4y18ApeYNxdpZkn7BGjVY9GgNKhJPa69b5xToFWN8M2CWT9PQdKy9Rpv7Mh2rD7hns4D872FMLJLy7DGmsw7FzFE",
  "key13": "21PhjBnBTMt9H5bb1absAbj6Gw1qXjwj8QapTRiLiDqEwh6vjPodfPwGVth7C1ndzFYswV3YTZ9qYfwvC5F3EpE6",
  "key14": "3RAdYMEjz2n4kwwADRtQ6g4jSiVUxUiMMg6FAHV713JEETqmenWvEZfJUsr2gWRFoJH9xbR9Lchb5LeAmTXMQwLD",
  "key15": "5DVUzf4NTXkXYZjVUYRwnrHvZVCCzL6L58XYKWn5jdLHCLTpHVxwxsXMd79nfZxqD3ZgPoBR1QZwAEjJgEXXdBdX",
  "key16": "5QQmqoj3RMp4EUQwri6urxSK1hyHR2dm5fjb5DDWXkvbnHCwg7S46z726wxP4LLpNcEBQfUFiRZH45Yt3rbVNvNb",
  "key17": "32546GXypH6embDSpqkpoVuxYHpik3Byt5KQFCYJ28QUxs3aegj242e85W4zv651ZcpSBuxyn3DW6TVyka6efA39",
  "key18": "3RSeY9YgFH3mE1GqTD8QRV6YTCjvVkaQfu8rGqtutv1gAkTcthBCayttZ2CgvLJ7ZbW3f1TwpaJYbdKew2BkNMYf",
  "key19": "4nQwtdnY6nNwg1VQbcejznJ59pdErqSQ9giLZ7Y6M83g73m7BZSFoMkAEPiogBXANrEzfGRrovBCgwBqvwumpSxc",
  "key20": "3fR8J5cUkZDQFt9vomp9C2ZV6sgVDKEBpJ8UYRHrsKNpiFHrmx7qgCgxAAn1bu3mhik6YGdNuWEgJY7R9RDFi5Ue",
  "key21": "5LPqxoWxskhWJ7o1Kru3pqvh9hVQ83gMfX4tEBz8ZUMPjMR5L9CUdSFugHqFkGPgYsBD5KgLJeJvcvfsj9f7haV9",
  "key22": "4MAe5uVWE3N3nUpZxjhYTF4GX5xkJYmuSogb7e7ku5WzGPTAee6yMV336oU7FtQh8aJ2SdDRj88wWJhaSuYv77gU",
  "key23": "5AYfASYauDvc4xQWuCgc17aJ2J4RwkviF6Be7qRdCLKSn9hyNe4Gx1NeejC3Rb38d61wNR57PjH76EfyAE31EgiR",
  "key24": "64h4F15D7sH7yEoYgFbg4ir3jdEQL5dMqv1CfK4mD31SL3MQqPXRkj1umt6igsesPdiaoPkbKEsKAVdnsKPTnczn",
  "key25": "3WNBzDYoivd36P2KdSST7K8w5r5HdZKEPfdRei3HaEzZ65ECPJvBQfx6w1sPVEoJ8JSWJejSr7doyjuf61k5WYQu",
  "key26": "5PvKJQD9jcpAYkVRPsnRUnvsSHXpWt6LnDKo2JMQj6TXzt93G39oFNc14ZfFiELgMzxraNNi28SHak9MDWk55g75",
  "key27": "2cSBhPyEaUaNvVwtLvvu7aZ4vMjFQWtrrPWVjgNUVEqPCiCu3nXvV7grtWwtmccVovkmtUpCMkWgmeyUuhdXmxwk",
  "key28": "4ABGEb7DFrG6KoXBaCN3tTMZujhAGFmCoFNFMrWGc8tJgHA52rQhZm1tajGf3agHF2Q55w61eJVPG4PAMqJq6SqE",
  "key29": "3RgoK98z2JgCHs79fwfs7VSZgxvvBepEQb3ixnHE42hZFxLSEkpSRLgteUqPE6osj6yqR2BKAGoNNUFH1VK72tRc",
  "key30": "5MTLadND34ykNDDYGkrMgYyftovfENBY8ZPdP6KNTPcRRRR2qb3Bsix48wADTeirteTSoxDMAfgVYduGvRZsAVBX",
  "key31": "2LC1kuf416jbcUWz85jppTWko26ZuqFHtDHJZgHemknmXnYqSRcu8TJDBczoZNBbXs4T5sqVpjSQ7wtfsJTtUQdo",
  "key32": "66zX9B2e3bCWhzuD9Apo3krAFAuoWHyiUs7Re8tPVcuDV9oQKWPxkTu6G5bru9mvkQ9J8YeZWLc3YYhm8B4NtA1p",
  "key33": "5McSYBF4Vb7ZrKCwEyXNkjkWKESwNzNWC6rFWEr4tQn2cQXcL6rG64hyek5hfCiGF8kUEvQGpM3sdjG6oZ9V5zed"
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
