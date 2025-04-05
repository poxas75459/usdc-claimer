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
    "4AbXiQGeLmDgKpeba5GG6dG1CDkHyC2M6DMruNb8x1zpZ6BffFkzDhGqfwP9MK3k7rX9P5S36R4WjxKyaSvt3HJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v8VAcAN4GFNkVV7xYtw529unHa39PZ1DcuoiqQPokeNS2imNc852hRGkW94ZEdRLofDf2u1DLbfJgi92q74hQtJ",
  "key1": "4WhHwVTYRQUQ3YDPRaDSeVy3xgw52q3ZG7JZmvyjvwuQNmLzrzvzRm7abhLeSiGJmwnxKua7YpsPDjEyM4qnnf12",
  "key2": "2DsiB9D5YkzaTXwbzncLHebN6NruydLd2Va9PkgkbiKXEAKBVWneRoSAPA3nYKN5gsHfC2arqEjYzRks5PNtLA6e",
  "key3": "5EKkMD2iVZQgKu16yU7RSv8mBWB2xT68Q3bbRixYwbYuERC6xtmBN1gQeS6PJAjb4N6PB8FwHfyGVb3HyX3Qr4Hn",
  "key4": "5hAHu3ntGYZA1Uj8QT5UdF6sA5KooDFZhXoLduiLoGmBXHAzAw51UPZ8BMEcvxv1uQLwWcwPZ5M4qkDDRf5bPkrM",
  "key5": "CKyDkhoRMDoTuRkSep7rm6ePL8yxXHwWNiictLsQRi3q6sViKnu4oRhsi7YHoA7e4jpyvrmhhi2afqREWoaiTny",
  "key6": "38E9gsmS6nhTTYdo9AWrCLfv51eTiTMfx1hENFGM2KdJcSuNvtrL1zkqtjuU8qVCddiJ6CMLNbJhtznBhBg1HAB",
  "key7": "4LQmbUGg1eP2spu5Q5XK3etJvKW8Xygkoscs83G99Vvuq5FPbmsD1wAJ5WjazNBxDn9zmqzfDmRtuHdW5LEvxFiV",
  "key8": "5aGHkvRLeBUYopEGzkFGCc7EL2nm8socBtjoNXJN1ZX79wVvNNovLzyLHpAGd6Zwr9EhFUA7rgYC2Jd1srCWZxNf",
  "key9": "47iYqtMExcYZ67G3QdJiaArGHhChxFiHifb1LJZbR1k8NEG2gJyAnL6RRodVngWDeKxkTao1aiHth2joGvfUsWqu",
  "key10": "2Jv3tjvDa8d3EWU76HeroQgARMXYV2AwPwVYhyYibqh5BA5i8QzZdfGbkJYVVQZgB9csPy4rwP6PSXiFXtPwyPRM",
  "key11": "2gTuMEtaY7WnuBZ38PEdfNutpwJtdyHP46RqUdnx4dL469WHGzhmES8GcXMu9bpQ1npuw96TtX2sZjV2f7aHKBML",
  "key12": "4RacWtCPgLFaEUbkfvyEeh6kc3yCP4TUsmKQmBZitXgmhj1pF7tAgYYfapbTkRRZ1YHS4Fkk3tWs85EwzFZi5vAX",
  "key13": "3xyCZ4d2uVJ1at3v1uSum356tMzf83JJbzdZZvbqJE46YkJVTmZ5FrjLTup9SQG6xfUC8PPWgJbhCB1QmZ1WSEwi",
  "key14": "2hnuquuPAt94ZkGtrEvFvsNeAngRoXZJAG1Q89U1LX9qMELrVW8gxHGF1EXgSspDDYU6Ck6ix8fju8QQmgxcrDUz",
  "key15": "5kuggynxP6MHoN3Y5rwddG54dqdA9SWouvaSsUjifMB1rcPjoDPZpXoGLYNjEff8BwKonjRGkwqQ4DxTPAemjTfH",
  "key16": "2qfjwcxhZXLD1Cqw6ZCCpbTchQ5qgts8rTBTnCThwQs5D7dWJZLoyT2jF5tNah1CWqQz92pWQXQPhzfQvpLNy3T7",
  "key17": "39Gdz5Bysiw3k5xiN5VzCe443YaJQLfMWeoTJBUabCVEknoh7B7bh7LgZErZBs9WpPJSgwhVPEvqYisMY45srVMB",
  "key18": "3vDQNd6taV2Pcjo84bfd1F6oWfdfQuAWASGgaGQ1f9iDnqBiRbCAPKbwWXQ61BvmkV36AGuJmeJPR4xHLPrwfCua",
  "key19": "LWkB3vevKGFUnrdpt6pcaSgJPvV2Ki83wUhDreG2PEKAzmUuVLihAo5drkT57Fdf28oRvwF4HXWrvgCuxr3tzDM",
  "key20": "2Fz7gBLc5Acr2jgMem394eT7gVZV6j1M8DJ87UhiRJR9ubmksjZXo2b4owyFyLFQcjPMwjpiK5kmpJ7jZNrVZo98",
  "key21": "4pVkMzkz2V231qrCTaTxutQujSnKCQY8EBtnuTpt1oy37oRCvbT9uEns6eZZpbFbKGR44dskYfjTj8YBWN6ugLa1",
  "key22": "47LmEm4QrvT99ErSzhfa598UhW58CpoQHivu6DJi8RKmaVzrG1omyjY6wrrVbS9YWb67hdd55NoTRUtqbTE1GEKx",
  "key23": "3Y8gMeNEPHg4qF2Swn9ri26dyx4GiNKTgGZK3RbR4zyDSTwYuSyYzQ96M7FBP4xSNfXDBgrasGL4snckwGRuuwyN",
  "key24": "4Ue2msJiz2ASpCYdnRTzAfLHnmJBmX2caA4rNjpDY71o8zgktUZTm2xhisxPoQxJPgGJCqfAvdULawTawsqMufK8",
  "key25": "36wWeJ7s1LX3YhjvpoWHvjSpTLY7DrNVjcwjUG3qo8StdqFfot1AQCEPzPGfkuEGCWPVci2EfQU29v3nNekWyBqe",
  "key26": "4a8DGRqAxdSTUMnaxEzcvnS3CS5Rb5Napq1CAa54kJLYs4NCkLVxxFUWkzAAWL7PMTdTPSmwxqZBysuHW6nSA89t",
  "key27": "31yedKgbP6SfMhFWYQSKs5KZ47TJ9SEgUf7BxCUWGXnh6YX52CQQgjxt9iHa5AiCpdo4TGBwfsW9EkhE344KBJRF",
  "key28": "2mhrhdVLmzzRV5N9e5YkPXTyzTMpc4nRazEqQwPg3Usx4uKp1Gay5xmwnuGNSg3nno3pwqsckvQsbX3FPTdxwYgj",
  "key29": "4aARLjmFyBUrbjtEVYCiCs7mzvAUVE8F5i9MYAUognBN6CNc2NYNy1ebpBerJYXjjHjgLjw1RbxGVDajeQkoxkP4",
  "key30": "5aSYsUAp5VXN3c9QkL1sj51hQNZA9jkz9X4G8LtQY677rYcjm1gLEz7RQMBMKRq6PSyfy3zLp8sYqbt6VaVf8dAu",
  "key31": "4AyW28yshEfMnVcc1jqw9xWYCjhDWsaqvK6ek2nqwFgS47wQLTK8xEFiNQ9uYBcPbNWkDgsmk8x6Amk3n5chtep1",
  "key32": "21uoLWwJLfmHb9cjJ5iENXkrcyj6hoNhVdSbumQESPVTpuLeEAdM4UKzGya1RCqRZaey3QYmvmgGQUBqDsrCciiH",
  "key33": "3b8JEj8CKcST5EvGYHoZ5vznkPwhMQuBQYaufVxE8MQLsmakp5hqCedwFf4Y5TGf9VKF4sobkvzt99wKuRnCrVon"
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
