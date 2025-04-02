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
    "3RD4nmHKPo37q3ona9jxKMupSAaogwJQZPvdGm6F6LzWePcX7NrRjKUZmdRJ16scHcyePsGuRrknpa76sQwqCnTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VBFJzBEetwVe2S3HoM43jM9yXyXQDYML5oi26SgmdJgeCU8d7qbRHewoUpctFUBjHeMzSNfSdraXEbFLV694DdT",
  "key1": "2jHtqziNZLQPuhfb2JWTTfLXmha4dXbZJLoAUunHAk7SY4GfUwPsZSa32ktMmfp7jfVnaeqcKyT3QXzT6CGMLDJL",
  "key2": "4x7YDscNvmojBRuLoSEnPAGL4n7kdJgp3KQYptdefUpXHnY8RfL5ctWbxsPFqgBY2Nt265XMejTpDEAwUDQP7H5G",
  "key3": "TftEfKhafZxEUgNrgZ9fryQg7eGeiCsQCfQpQprw4DB9FvJBQKGfUo8H11rbN4PNCJ7T8XxLNBSobVoD82Utpi4",
  "key4": "5vhyeorPZTTK28bntXZfJkf243a1DQDzks7ZHtiPGEgg8yt3SouMyZQ19SHBnrjaLv7hoxZGnchkX2StjhqDkpUt",
  "key5": "2F5sRffUSkdNaWiWvGGSK6WQrFz8MNs5cQb3hShVAMo2LzA6KZjJgJX6ULgm4SHYrBr4Mj1tC946uyX96twmU9h6",
  "key6": "z9wmYQJcjKhN8ECcSfB1vSmzAepgJD5DJTZDrmzebTTUB7XkGYDWP6zgUXfV7aSX5zmZrLk3c1hipZVG8PFZrNZ",
  "key7": "2Rj5NWKDakZeFxpbghMx2x4dEM9hcHfEJGLcNLfEqsDQAytzqfYBd61NhpDnjTY8aTNobe4nmwv77boULMmQtG67",
  "key8": "3NkWNo6fuKFxXV5D3k8Bq7KoYi5NiZ62rDZNvGmtWM9VNwoLVk9VDHV1BaiE8BB7Rkmvdsy9ygJGjgXga8rkeE9d",
  "key9": "3fnepUw5ETZdQy8pLUyb87dC8kkjPbDXvRREJX9JRgDYYRA7UF3RzLB9ZNHzbkUyhym9d3ZNmsDpx7wQyhNKXEQc",
  "key10": "2bCKWxazViUBvLacXu8HUQq9fq9CzcrPBYkb9APaXAC4qQhk98rAz9o8apWuF16WrfaACCQZumA96zeCyU4rXm7W",
  "key11": "4K9evN67xeRVFaz7P37EH2ym2XH1CoEbDZ7C7549HpbqkAkn75LZuyec4wzCRtT2dHZSYrm2FNaghcmAosFWZq74",
  "key12": "3gEXg6PxGDf9psacqLJtpNJUrUCJXL1VXKVYR8UR9eTzuL8J15TRsqcrV9SAqpfjZzsWBajXvLADRnaodn1HJnmM",
  "key13": "5YTFMNWZz2ctAPGbuaftzfEY9qZnxQYGbpbqyb864NKy81t9rT33iV8w5nXHjjKdc5xkNcRgQNDgwpz9JMB4QaXw",
  "key14": "39wpX2FEgMyxaxAtyvDYyiMUcZLZjAUY4cZkaUBNBsqKS36AiGLyvXVmY6uSv2Pf5r8LrP4yGabTU5K4MmXsHdrg",
  "key15": "2WBbyJnw5SjJokRZFdagb18qhekGHDj5AuiQ5rMeC59jbMXMozboFQzZcDnxg9TeuojM2yQ6PzQobm8vHEiBfc8Q",
  "key16": "5xmP9BQ7ffBbqjCgttE413LjoQqAaoddNGmF5qJCQtGU44sSUqDy5oZYjSnctvNEKAML9MPTnVgmoeFCBMcYxS8e",
  "key17": "2BNgduJ8AG4nkcmUq1k73bWfCqVXstRfwGMbrwLZhhunkET2mfDfD3ZEMQ8UXEWoTRXJXyJc5UouE85BDLeFZPJR",
  "key18": "4D88PpXpa4EH8PcxibSsMJhEv9UPEgHUgdjJUiRuvd8doNG4xPYEidxBnDNhTYHiQzxrp1X8BNoLZMHosS3FaSge",
  "key19": "2U13UdF6mSDfZyByPyvXnRb2m1gQAJULYGQ8292Q4jnWBFVKeJ8U82m3AVSQsbbPvcJfKKvitcTsMwtU81fUH3Ls",
  "key20": "oQmmGZYCAz1jBqmLWS8MeWGsBLwCy8pXmuCacjyV9z3718JCv48pS9yCYv27CammuMnSw2FwuMNdWhgoQdhAYsK",
  "key21": "4TwDadGkCwC3RjE8E2F4MMcXDaG1jt1H6HnEyjRnSBCjZ2Fi8ENVGmPCtCBg6sDfnwdkPBCLCzxq1tgybvHq6564",
  "key22": "4yvK1T8Hoxd7d7xNNeR1XdzyaRPjzcGAMQ55CB4dEuzAPkQYHrkb2rTtSArtyHKj3EwYuRqNs28dXnxmNHUGbbS6",
  "key23": "5VXcNvtEuATHWHZyPLQ7hPJzR3UZTTrVwb93J9WHTHKvW7tjPH34JChGKndJv1mT12bkRiBEPkouTEv9hSBSVYjE",
  "key24": "2WToJ4HQrLTKuHGyShN8vFcAM6oSMEpLZwss79jEKEViCc7Hxc3vM4BrZk2Q5oX3hw63fQbqiyo7TUuCFRcZzULf",
  "key25": "3VcoCd8dTAPZntXyZyRtWhmoioESoiDTH5YNH5qBZ96avyvPzUHbjzSucMT3jVVpteXLws1qZxZkzMxZaVtXghSW",
  "key26": "4SsT1cdvZE15t8j2JZX6YD5cby7owYypjbRXNuRdXw48cjiEsU9XK5AjikaWQ8vhuqmx7z1sa8rwtcNpzd1w8UvD",
  "key27": "47wY4Q5fR27jmtDpZ632AD3ozSq7eRa3CExfLHhJkFZ7UmnQQgfSCgQpBd9afn8uc96SVqcXc5H4G8UkXiFSPgLj",
  "key28": "2gxqdd8PahWcRx9vGWE2zg2UezCu68cSMzNVxJy6xTfLDG3ofWucTjQECqySRymzR7AhPFm7TjSojVi18sbtdVt6",
  "key29": "6Wpbo9uqY7YtrKUFMtryh9qhFEeMuVFjaKsuEqpy8J9mxazexXBVKviiAFBwgRJ1x47gdxCyj3REwpYqS9sNdf2"
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
