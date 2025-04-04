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
    "5sceyH3uxiVXoEdXGkfFr14xHdy36vXvsCAMeEEgTa6STPiCSz3YNzayitjoRumgmh1xvmQWHTGnXvs3AhsWVZ4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g9RY2pa9wqhRQ2FxmbqRDfnosp8SVaWin7qH778HPPS9tG55S3Grf59oJhGJ3tHG1PkVy46KURUYVYe7TL7gujC",
  "key1": "24V5RhB5skACNunijPEDBc65Mgf7SSahjBchhXvitV4UutDyNTDfkiwbZhPeqEosYrDEsUYGHvfWR14ekhmjrngU",
  "key2": "bridGfehTeZsWqmuK1Wk95qxKuewrddcPGwbLYUQ9bqDPXbmbEoMsC9CjJHiDKfEYzb6cGV2RzUm4VapCm3S29p",
  "key3": "5ug9FTEcwFnBiqqAqwcCrgpE8vgXXidcrFCM5JJEKph1cJWZYmDcSF5BZ9NxYRtoSeRe7JQ9Kun76rQrT6yqvXAp",
  "key4": "2Q4rHsHFYKDpcM5qjqxvAZvacciEPMgN8byXrpe17q66kCxTCPQZh8sPzP1wafpXCNQDrU5PxRfGunLYahP24xCL",
  "key5": "hZED8qDTt1x3ScAk2hmzNCnJZ48fGok63N9n6F83rrL3Z3HeAyEzR63GHwvmaQ9VkLEQXnT9FX3BN1ZQxMSDEDY",
  "key6": "jfgbv1SLhQ94A77gnN2gx8FvAwu5SaYC8wY5sM6xpPCff46HQsW7TP4wezJE8yUBX9CFzq5VCivNjtpgQ2SKehe",
  "key7": "oco1MAMNCUSRFpBSThxAwV5afBomHzcNVpj2fW998D2NcLhaBgtAbpzHECLwapUXhNAwPoPHkFG3e3LGuf5P8ES",
  "key8": "5JRcMwbSzUZmRPanzxdoB6zdxiDzZFshuz6ypW9tb1FvCC2A2hZnWce4Ze23WphgSULSSsWZgacHBotpkHYsMyEM",
  "key9": "rCj1ribrGrEGBXcKmKyLCjkuvKNeaPwxdL58wo7sFuPUjGHQT7aAZxYcR2Wskgye22AE1Y1NwscX4fqHjTMVFDG",
  "key10": "4n3ET28b13Nyz4Z9yMvHpGhWLYK55SHa25Sd1oLa4DoUTT8YLeCzndafEs8trqvZR5xtPvMsKVxDVuJ7RXk7gWK6",
  "key11": "3SdrhbsP7duW7W1JMr1zMgqGjvEmXSxvMZJ5izUVFEvHsjWZyKdK6xNZTDqMbrF5txarWRgcCnR8A1ySQnygCzaz",
  "key12": "5HTFoem3XMNtLZN1fw8e4D832Pa9FNz3idUtbvNCyHMHQ2nuhJ77hYXmi8ydriXH4sqw2ndZCmYDWbD57sdsna3W",
  "key13": "7PX9xjujR9PnwTU6q5ofX3P6cqyqNcybof8ePDKnTGy81SfnZ5STcZhHibZv4TvRMCF8Pfr7bsidVCHhHxsEFwR",
  "key14": "2ixmh7uVpefrZJzqKYavihJS35fQmywvXpfq9oYvViquBRerMcbvNkrWAho8D537y8QbkPEQyAnWoZYHXnPCwxqJ",
  "key15": "4CzR9aqd4vqUoyu3HL5VzbCBFKbyDvmF8gtvCa4psuzagYYrKzuuLixbJXA1iktkrXsyeQEa9Zqukcu8b1PANCos",
  "key16": "3Pyx5d8eMaxQuWpHwxmR58cbwMw7dcfT85aMGALjnCrXj9YmBbTWFKh9BWSgrg1Lkx7nJNSSxS6pTTvR6UKNEcy2",
  "key17": "48qe22MH7DHAbzLBzhhZR7kJhMYJ2WEoCJbj1EDU4m8UpNZcoo6MnezDbPPQWPircvoQjnKq7rabMCgKeGgv7kNw",
  "key18": "3YbRm8UeJDN1oW6SrX1BwAiJrLdvf6q2QxzMgngweJH8oh7CfiZ6R3CR5yczEk1vXsKpTQ5d13jhiT5gwKwCX9Mn",
  "key19": "4LeXb1cPnYo6D9As4uBKGHV86eNbrXtQdkaSbHQfErMQJmQJyWL9ZREQSDzvbahHpH8QvUQuZihXfadZovY3rp2Q",
  "key20": "29kYUvWu5mKqC7zsggD3enGhiY9TfEw4GFqiA25pZydstSjCfLKm8t96BYD5ePrEkFkh41gFiZVuce2eAckv8VoM",
  "key21": "5BWcLwHqDC8VAciR9EvUhNbKt8eN4MzN3UEP94b3YkBL3ao6StiZJ4RrF8yFtzSZFtjnvsyQEKGXV1zxYxv9MRN2",
  "key22": "3aCDjiJZjMmc3KJNSGRo93Qj2HYLww5P882cDPegB3eAASkheDjQvhEbGg3W8xRECH2G91tZYp9W4rwm4ukSgsuB",
  "key23": "B2npypTFcuXH27qGZeMAsPknQo7rfCGqz92WbLMZ4hqwXYsLFPDLLmp1KpGzdJXWKhnbEJks4AQAZFvMUnRuak9",
  "key24": "CQjiy74SDRUehsVJbh1vHZ3YtK6TKaDdWhjCmrwdhkMEdKTnkZEdo4q4qoiRYSdoFpK7xhM2s8baYv4YXo3cD76",
  "key25": "66hhtLb4VS25U9p2xyiN8HSNuZUKZCaSH2EbE7pniHyzfPkdDtFVKzi78TCNiRkQrc4o7QSDBH6GDC74JNhbZoRu",
  "key26": "2XqEvNQfNpQf2CqEw9X48wKLiQZMzHsVMkqUAA7hN8rPVN9DPi4LtqSpv4HgefiCCnmPNDsUVw3M8rVykT6GRGrU",
  "key27": "2Yc8porwfKnmws9YNfN6iSafa5L4zvouB6XSwfxNCkFPCUJLxvkypDRniDfGr1U1x4AbgRcqHKH6TXvqXZjTEQp4",
  "key28": "582VWJei7ghwa3bHKBh4UB11C8XAa7FebH7ua8n9D5vBW5PwLdita2gygqh1eywZ8G341yBUvS2qiGeckNSqz9ZV",
  "key29": "1L35JjyrtegUQmuBnnFT9DQLPz3uWLKHm2MCkB626jmUdd7txuvEYZRUcWoMRwkWr2FDxwKR563C84TYJPZt2SZ",
  "key30": "3kvrEZYYonnNeUQjvrsCNCiq7jw5WNm4KMNh3HtMfxNW4VqQKwof9p5dGfDSD91g2z39WFNE1H9aXCPkRpLbs8Wx",
  "key31": "5Uxvy7XLcv4uf7RU77Zf1Aa4oUoQgbSbibpEGydBr7ZAabSjmzgi3yxMTUt1xw4azFXGaNHERD7o9B5NVtTSdnuZ",
  "key32": "2NCySeNVPSL3kA4ujE547KeK5LwL8eRgmvuaCAa6VSHFXckSPJNZqQhUr8wstbAciuwB7YGfcwRDjBRNSsUczrRz",
  "key33": "3nJpfiu1QA7gBiXvUMQ6GCujh1SwYqjuekDrd56KVBcr2GBYSBYwCa97DiKRMhoiEaFiJjfQQXkErtH49gPnsZjA",
  "key34": "2ZeXNsVDQS45nAc8KHppeupQGcVUSbQLEbgbVLDq5C6zBwGGCH5iV3abcA4mDQwz3eaFjJygTUpzYbxjarqqrtdZ",
  "key35": "4W3cWmZDojvD1e5YrSyqcXbdzLEn1H71mGZuDVDLnyQfVZcxzwjHGDDRzBD7gDjh8BmU7No3D5tWnsWSBNnhw3GE",
  "key36": "3AVRQLBRQcqB3icpnrxHevk13uvM3uE4fzzrMbjdHCYVVGz4KL4TZQGjyaiM8RgQuLATBURPcuk4QGZ3rcu8qvqP",
  "key37": "A4gu1djKxJU85S3HJtdsj8CxZCN5Hsbw22qsZZ8VRE7B7fKaig8cQdZnjjWGP5ErXGjL2BKaGyazbobycMf7R9F",
  "key38": "5APLxuocooPAQEpQSzkLZmenFARdw1tzCLjFk7Bs1jBTKsU5niWnPTGyBjpJA4XRSZ3Z5rZXvAJqt1miz8A2kcoD",
  "key39": "3S7saw4DgR4EMmNM8b72DCFkpUDSDxbg1SUUFaFKmwJeJBXD2xyqhyJx7Aer2EkfKopotwoYpTFWgjNBHcM9VnCL",
  "key40": "42vgbP3z9mPu6wz4QwZase4FoQaP4p3RSNeWS76qS9sZCDRk1WtJok6SCkpBjrBAuGyYkx7J1rfXGyZMJQZeVHKu",
  "key41": "2ueCzbcGDvAYPUqAaVTs6LDY2FF2EurycWAEc3Mp9mox4jxNfAsxmc9kyKfjBXd5o1wUjCA57ZsVQZ8y98DK7PMb",
  "key42": "4HuhGSBvFTEFs48ktU3S4YzeZV2Lr12stadMtVY79pLnw5hmoXAn64a3NXwfZTuNeSNQ2ckPh2V2tWmG3KzpG9g3",
  "key43": "24THtHQ9sAGGXvNVpEJ6RQXNvShsG2mdRfQmpZ8DiyUYYQPXVDN84Gh1LJhDEwNFnXqt91LSJJv6V5RAbGrEwf9J",
  "key44": "2xpyLz1p4r8C5TUkc3kQNU91RxX9aEwwbymUJi1G7cQNjrwL3nnhNxremQ6aAFAGHi48J4rWfHKU6W85wdZewyPi",
  "key45": "4qCYEpDT5Z5BSzsZRqtb7AxY8sE94JzAftktP8WPmBmZULunExtPZyx7fXhy2hgb99aPmjvuMkSXEAMEKDi5gmtf"
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
