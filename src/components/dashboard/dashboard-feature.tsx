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
    "2rPDLr9LXcQTfg8zx2ijUEg6dZH9y8x5buUGnbLAvujFt3rV2sVxDxQHNfQVsvSyu75BF2qrZkKq6hc7SNjcbgKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j5rrWhNyAnizLqcdZBDx3evW9MD9tpSoAKMbpY3rfQnepayZGeRuDSaiNMPUrvJW6UYNjmAL1T3An5cmkeXGS86",
  "key1": "4SpDFqtULDLv2YmrSZjgmWvPonWRFUWaYDMxUrSuXjUDRsZXYmj4k2vdqSK2NuAtAHfZ1av42tzQxgQ2SVyz7muZ",
  "key2": "sR5NvxfAi8iQ2j4oosjY5TrCTPKGdSNdZoTcFsBAAgMNcJZ7jNE5nFdFrhBH8kxPxLP9f1yVD7Gnxb8PP7PcM6R",
  "key3": "2hZ8BLSUpTaRPm8jhWKYz8fmDHqeH7pZS6UK6uafZgBAKQR8jUeg9KGimfKGBRyrMUzFqYgb19Kqmov4fwi2fqgX",
  "key4": "4m6mC5w2hKTMGRWFym7ghBhvtYNwVMZ2cd2PRxWQCTkdj9xwVZWWyFRvkQoNFYYNq9QiehBgJ6Sjdi1APdvQVtrz",
  "key5": "26F6rHFeyYmBiR8n6TR8ac5fW8L1Cma44y75bdGvgo6RBitjDkaWkggKwTaoiYyak7KcdQFnkcQ8q7DmgNzmYeww",
  "key6": "3By4ZVCw4CwBCRLGn494TUeNhgnvGAKc3gVoysPzmp58ucK8wSYesBUmZdiU7Py8QL9f35FAUAdRyduZNZL8K2mw",
  "key7": "65EP1ktxfZaq5uX3u9FsLuNgvpyVSXuG51LrLf5vw1qQJqva3favRqhrYL35os8bxuy9UUVe6NK2uF7tYcbGg4X9",
  "key8": "2sr6fWzjigqK8cjP9HoNczmvpLXpQMxLkhuotMx4ia994FeVxoTisZxZhta9WsaZRg5H2QLFMsakRcwk4MaeYuVp",
  "key9": "4rXQNXvAQ7LpZUwA9FLVWFYZXrL7ydHFPngK3v6jR31DJnxjU4tPKzex1hNSnW4rVYrsYk4LxW5F5k23zsmqEhc6",
  "key10": "ATH7i18QxsVFHPt63jZN5cgxuEbauNgHMEipwiD9vLRiovBcykF9VRLrYfwurJhDBkDZHs9AwoR45uNmw6GTcog",
  "key11": "57NFv9e6Y5sANKWR4H9PitWPgyL5hvvSCi5cFvJqdNPofhb74RrHdvxB6RN6PsWAZTYxE176GyZnTVC1f549phVB",
  "key12": "N9i8qxXfcxh5VbEvWYxw28g7KF7iB7DAeG1fPGX4ZoieFHTHNDouvwnjhLwSCd8hVMAHCQnY43u6vRNrbpZ2vGe",
  "key13": "5PYuZiYmyubew9d9PKTqJNGPuhA9wAKN4YR8CoWpGhZZEkHfe9RE71uVEMev35QaJnwuVKCVWrw8NEvbD9E2VJhe",
  "key14": "23G6CeaGDbJhmW7rfLDRw63UfQXYNwYumkdfnNCGfm4JfNy8ffXTY9r7N2v2bqrcJ6zupDpbQbrGh7vC39VaWyFJ",
  "key15": "nfn5FeU9RRPRSbZLR8mktCoAfe3Wz8oKDBZSLMc4zmWoCzL9pLSmn5b7yCcFZ6Xa8weG6QMvPsWQ3i5crfxJfv8",
  "key16": "4ZNzFNThr397JbXFRVYmgaFY7ZCuPSL8SJggFazghsEhfxYZDg9TWpEfvu2eF3rpvR4RpLbP4BDHxSxCbKNaqTEk",
  "key17": "2hs3nocxg4g3qey3uc2PfTt8JmLjMrDqYPXeGsqPhVutZSr4EdcbCGYSjGKe6t6haWhDFLYXY1AyVS5onsBCZ9jF",
  "key18": "2iJSxLojRhCmRtuLfzzvXkx4ntFAUYDZXh3qrWWBbCtto9eAt3vqNDGPgnrQcHADWQ5dRBUBNiErwDtD5ecfRr7w",
  "key19": "3eDL3C5BZkP7L4FwAQJQKXfoUsS22BvfTBLgjC2PzdkJ1vUffNH8GfCiywBDdG1PrXM1NcuZo1HgXaTXjPBHQmMQ",
  "key20": "WjG2Pj2hnQTST9QeBjrqGAKNfTnWnCXGzZYRTFs92qq8uw1NXtw3zats4YAdBsb1rgnvhtUomCjFhVQazHJLwCh",
  "key21": "5Z93YVbq5WSfB3u9BXjVsxfAPd2PQPVDX9dPSER9ZzLS7PsJMXYFaPDUYwrmNiiE6YaCpL2D67LJZwEa1dNbcnue",
  "key22": "8KYGZrU8eXFx9vu5cD8pxHNfLgeckdDQ9aYcFaAjAP6bLR9ySD18STabfH1ZFrbfSTDQXV2hPkKUWe2gVs8Pzb6",
  "key23": "5PXwAJCtqpVKzsPcpKYF55eyR23WYufqeeoBybYrj9p26qXpA7j23bEr8oMiBWAELuBu7FZN8w1rDLyPGu5boGoD",
  "key24": "3KH97DCdzYczocqnx48T4fGMa3duKwbWsQLpGre3HpF3ZWTDW19qS77pHKXNYCgGpA8gi8pN262wZmPYWhTpph7J",
  "key25": "2whZn8uuUAfMiHRmzpeFtRUV7DDjuEZgFV9get9BsFssCMTBUWho5Qn4jvr2tvJwMmC753h4MzUcxGZCAyhFpWr1",
  "key26": "3VG8DV91a7s76vM1QwwCvfex8Q4ti4uR12azwSXcwGgmtZHoWbamJi5RnqQoYTqdWXTgfqRL6wYMz15vQAjs4VcU",
  "key27": "2Y8GaqcGx6sQsVp2XztDiFFhECFHCNiYCVgo99Y7WACbCsQuZ6pBRCSmuQ7w6uxRPWmc3MsKHuCvQrzXdLMDubPn",
  "key28": "4QJTGEYXJ7BknkqKHmXYgMvvFk1AYyYZMm4AWStMJg3PH23gUngpkbHG1M6tcmAzf1B2Qyqzkr6TL9X17mmYWonx",
  "key29": "27nD8Za7eM5U4QKjBfgeghksuazVrSceF18tVfJGL3T2BMWWMd9xCEcAknEEUPmmeC5rBDfUu8jpEsWEzPFoQyGP",
  "key30": "4L34ezPVW9WAD3LCy95JZizBwhZuaGnjaBXHBetq5txDq9bnThzsBTFGeBQYNrwGFs35uisHk1GAXFBSQ9nYkyGL",
  "key31": "4WnRn6q5EpmymwyzzdeM7ajmnJnDSNwEwuBuiLLxgx1uMZM8YLAfbpnLbzLowTmpHYdrNzV5f1UtKV6Eig39ivvH",
  "key32": "5B8hgUXNCDPM4dr3BeWcu7Z6LDZdJ8prUVw7kwQjryVncgbZM8LWyZTZuX4ptW29W9rEEPUgHm3XsvhjrfdFYq4G",
  "key33": "5KyHordxvX4f4fMvzgMbW6zQ2NnbnkVv7Ziuz8t5UTh5raYgVeSE76asQGD9xUg3JxDshLzdvQGiChvpHXikCEFr",
  "key34": "tY1ZxjF3GvitJCENUe8U4Nkb5WpvMr6AXMcA2v6AoXygTWKzmJwvRujZPHYbW2E3dEgosDWNsVnNwBZdkovScPu",
  "key35": "2ULgBhLahU3Kvp7mzWB1pjTtxqhesFgyiWmSnEgvJeYjMbBSgCyK2qczJCTdXzxmf1wRECAidiLDRRSbsX5ip1Wa",
  "key36": "2RKiZvdywfBCahvvAyzbWLN7hcX8MVG9u1adbR8FnRgrSx6Mpmdaav1WvxnbJy2GMjX37UEULNzJcUPYc4vGNQxW",
  "key37": "3J1h946reYAWf2hA28b8YVZp58Hj1DaaHE68Phr19yhCT7EpTdjfGfEiViagaPsMvF763C6CDr3hCMS1NkSx59fS",
  "key38": "JRPsvcTAT9aoypB13gpewWA2nkJ7JBZFjAuHtagNnfHgoJ1X82h4NbS8LVtfhyGH3CQopMTrfSJLTWhNR3DX4MX",
  "key39": "4K7Yfs5SXvuLd134hJAUr4k85hfbqR9sxonZV66buzVGQyPnsXtSfpxWGAEaaJuc3KJSd8iQJwEkDsU7ymvctayi",
  "key40": "3bcFZgvT68MJQN1JqSkDqR5ZMgjzRNfXLQ3G8KbZNCrgkPfXSQVmvdjhHr8N6phhwsX1cbYULADEUEo6TAsu6A6n",
  "key41": "4GxKaUScu2GVTZPhfE4nMu4vyCS8rrDk3p5c1nJgh9zDV8oFKfosA2CqXFRYMy8toCguE3B3wDBiuZfeRaaJeh3"
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
