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
    "2KqF5uJjVid4iS3iHJiMGmvy7VRD8anYfpwRwMXcKz9tAyNRCyfAt1k6j2HHekawWioLdLQiHSYU8YWaYTa3dvBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9XeQfUiv5Mubmmh2Y6M1vxQt9xE4njyagpQLuwQJEAK2hGf1Y6fAaH6imaqNCVdB6QM3Ki2wvc9hDUbDA23gjkc",
  "key1": "izMePjk1woFr62EfRZrLBg2x7KkNG9TpzaNRNt2VQp2sPQnoZUKXNWFrvjuqB1vKPT1eaF8yCoZnuM63bG2R14u",
  "key2": "3yAgpHsfknf5uoqjjuSC213q5wiCfrzHmDE99BkzJS4yAe9nzQfbtKH1yWYWQhYMVbFXePue44GUsFYPEcY2K1Gz",
  "key3": "4jNTn8jp2sJ6j9sKtN2cksSkgV5rXELmB4FeCMauF2RmNL5VmfAS5ptr3VF9WFgCEjrnpARRzf9cgDmovbaCqBJi",
  "key4": "wfdLrLNFwKEfkAMecHKKtDxNvz8RVE38SMsfrrrV4W1fxs2MdiQs1co2Cv8TqcnqRoJBgnUK68T8Pjy5WNDy5Su",
  "key5": "5abHgfmozaeHtMusVhUHNjcVYvtoeTE3u3MaTPfQ6rnhTkdxQ6cZANGkZ7xNG5Vqtru77kw3Cd8kRDXmechNSDam",
  "key6": "3CMe195SqsnTyAszDYQkq2eHv5rHn97xuJD45brHQxq7rQvHyvspxuGtzzSZYBLUDXYx9MqDppQ3CgZrLauxQoLL",
  "key7": "5ivfaWwdxRc1EQvCPXPwZPBP7RXJscuaYLcFP87huub8JJVVUVCvhQ1Qbb35JHj4ZL37ErtKJAi87hBD2xWAtSqg",
  "key8": "28hLhX93RNwYUELrsCUMXrnAiJkkkVvD3PsLZC364aoH3ZH9u5WuYjyMoXGNyYxUFojj2UVsM6w5jNsNCmMR45WW",
  "key9": "2FGx2Ed7A4Y6T6SnKzcHtJ9iZSDLmDYvAf7qxq7M6BiYsMdPR2Sb8oTNPYp79vxudBN5Wf3kV9y6wqM1qeKSFgbG",
  "key10": "2RF8pfF3pWxHmjUNVdjVYyHzjwzLdWmQstgKiGbBmiRiHGrWG2Y4tnSun7hYSXua88q4hgbQXW7AhzVwpJGYcWeZ",
  "key11": "2cQ1dX9wckg9Q9xATSFSjscbPKsHEbRZX2aZKrNm3adHRKEYQCRmqo8cvz7cs6sAM3WwvNHDGw4reMJXXqUUeAg8",
  "key12": "64touuTd5VZpFtBAdBD3J1yvmpwB9Qesb9xqEaY6SsXibh7tonEdZqNQ51aTdi8LRt1NkUDJf3A7QiPKgpU2NSd9",
  "key13": "4DmD53Gv84ZHVWQ9phbBZ53zgpgeGe7tm2HUVxGBUJ66FqYGwGGxnFGASa1WmKQfReguLZEnmTQJexJMgBRDUYgm",
  "key14": "3aNrfCmwMCAA4K8cXBARbetq5J3yBM5xVu4in7jX8gUnTVcqHewpZJfE2CevMzMSyeVGvg8kFLHZpf2t1sdoWNth",
  "key15": "5UTvcQT899nmAXSR233da9CnEzGBNafG7KgjWUxs3cBhXrFzG2qZKRHrNYwSbmHnzzMHLjPR1c7ktZpTzXyNDWSm",
  "key16": "ryE3JnjKZtN2LEtFiQs6yzFKtDSUxMZQLDMQXM8STHEwjGBcRqEz8WbcxFE2zcXvDcc6RJ7Ada2b3UyhxCxgbSa",
  "key17": "4VnEice9d3HgPdh7cP7AQFy9NLouGAqS4eEQ9Jrg5K9Z8rAPpfsNEh7D4j67WhejPh1CPLqKoF79M8aaKzmtYqjU",
  "key18": "4cMFYBo7PYVk2aX9sqwHUaxpJZzhMbdXkzc5hNnnSN9pGev5PSWPT9tyDsiVScNMNe6qBPLhjFxvnjVJh2fhJh4p",
  "key19": "51dqgHXuKSQGka1NxoxWJaDuiUCiyqLLpEFXB2DwG1nHeRJDLiVe8r8ijiqpG4k33wqsQSSjB5Top7RCmmuCYqjw",
  "key20": "52hQkkrWpAoWpj7mdPb1RKN4bUMqZX2xYwVyoqi7NDmGCy5VRWXExgMbEmuppfHXRYEgpB78hTM5tg53kSZAQNrX",
  "key21": "57kCmMFMudR19LXa9wTXUjn3LDH6utaNjDbDWHwAYGVbH4Ywj4hUpaU2k6foJ2VwrwPTrEeCWapLmFPk1Uoe8Bub",
  "key22": "58WcpQ2YdcCcpKvJbhafT3AHmTH5xDbmJXLNfpvYgh1pYtqEsS9zwZaTB4E56vFd7yEt9ohmh51FYwr3D732jrYe",
  "key23": "2fMePbYZp6hV1vSVauwWjSpJmaKcz6BjAUpkoPQygZUPMsCswjjeLBUHJV3YKgeGJzancJXRGi5FSPr1cVY6hvbE",
  "key24": "DHmQ71SPD6m7epxcEEZEkwB26VAkfcSoiBqcqv58NoHdg2WBW6YqM3uMcJ4XUe8Pki9dtcbLbvuKJ3Yt9Pen1vY",
  "key25": "3jBtiGwrEL9nxMCfGJXwdRZ7BurKibGgRM5iJVYjrLuHybfMotzuwjGkuoHm5N9zBnqsZfsekfpu8yTdKxWQxfiG",
  "key26": "2XS6oYo7hRhU7cAFETr3s2Y73weUggibLHtKKL737iBLmjdJsiTAEjDmDr66GB4Ri5pGYieZLF3eiYuBDzmw3JVG",
  "key27": "3GaMGCnGCjsm58tgKceAGUsmU9cZfhFEFUEwnTABoJFugdm9gwVb4LC3Ni7mTRZUgAcGrDUr2nYKTF9cBBhUcumq",
  "key28": "5eNUXakJEGHMtsMWANmUJCwLMxAgakzRMTi1UjZQgrUSGkuTaSiNZLVnyG1D2rJvC1cknRMKsPDdXAbDKAVPZeuG",
  "key29": "55L5aUkngTkqnnkytDZirtNZNUS1uMRASTxUKgsH8sJfwPyFkVY84oDuBv7fWWGbE4CL3bmQd3DLQJDcLSgSyUMy",
  "key30": "2xm1REYoHzAJCPxRpFX7AKbEi6izJ5zEm4cvP2QtPPoh4uWfz4oFBKBCVHtMFPFXSvgeR4UPHVD4A5dDodjCYG5e",
  "key31": "297mpoEPHXis6QybiqUNNNeXGxUQmXUoPxmVeNoZgL8pXJXzB5EaGBmY3GN8PARKsWpoT1T3ndJyr86GaUJtgCq9"
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
