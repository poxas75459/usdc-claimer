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
    "4QTh8SJV5FXJQXeC2VqPU4JpFTgg2NyHHsq2muQtfzLfEuRoVfyvvY8iJcbqNYoYQMg8XGtBCuu4tS99Z3keLddd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54eXJgi6ZwUcxjVyEtAw9Yn5vJzTBatN9BSh1MwQrhFWqhcKb7cmsALJdAjivRG2PVYRxMRZnf4fZZM2AXXPTcji",
  "key1": "iij9xH59KUQsXNtfpmJ1ongwNwhyTZRGPvAH3mFJ3GniQXrGXm9fqbpxknRJUSJZbkkCAt3FcoXWiduvN4KvEGH",
  "key2": "2Ko5goUvjT6y5MbueiZmea4seYZaPZu7d3bgafSijPu6vcarY2NMhMqiBczurg9pZ5Kpt1BivMMXLmHLnLuY9M4T",
  "key3": "2caRW9PQ2GrhQGRrTW47XYHpRek5aFdMUorLpon28Eiq1fw3kiqzzbGEtfQeXSJJ368PPeK2wNZU8gwEuajDhx2i",
  "key4": "29YYLMnH7QgBt2DCXHNo6iBYBy3g6LxqTSyd1WJa2w4f3hNjoh8uufrfYmVgNDTmAtLdfCSrU5wdVamg5F2p1Mp7",
  "key5": "5TEmr3GkmFxWM2VM8EvwmiewweaHAeSgPbyN47f69wts6B795fkxsNRFGs7hH7nJPpc1BSktBp69HPBd5BUiWKv8",
  "key6": "2GKmFMFsAihjHuqEdfhv67ibcf6peg2FNkNhJcQqU26g4pNntAMuTguEWfZZ5iEst5ipPuxE47GBMTfWuLgNzB9E",
  "key7": "5bfc1U4BE2BwgZUHgiMUEv8MfBSDjRVoPZBX8Tp8B9LqsAEDmMQgJpjxYR7sJ7nzx3LZakY3RmJ6LKzGVviNxruv",
  "key8": "42e9ZjXx8apCRdUabMPhiPonAbtvVTCbySSdXSDvk2fcXRvspTB4pKtD8vM8fJx9x2tqAooMfoKqcrSZ1B51hnTj",
  "key9": "4dx698vsZr2zZgRiTMThFKs88AoYSiH73sNrLYQvC8tWTqBBr9wpo6K3wQy1LXgingSkW2dKEhScmzCdkJdGTjnm",
  "key10": "3cXZvYDd3ezqHp2pZSSuvRsXkjwsFygDzCXnx7i6tKxq9XHSyvxDh78nRvmW5noSF91REtdSxYenxyXEvwF2jXnj",
  "key11": "4etAeBgh8L1Ct2wNovAP9UazjbjYZSArJmmGc4iJhWPiw49csE95zL2uf1C9DavB4qjBz89a9FnwP8CTpENNkNGN",
  "key12": "2A6FknmLU7hJyjekMBPZiWmqF8XQitBNTHsHx1vuPFhSR1USxiPZKqJzLZQRBun3tFh5eYZvUQexcGdGM1PGQSN2",
  "key13": "EB7p4VdHtjsLYkobsydKebimHWrKgcnSDyUAcPeFm1h85ntRZHE8HVZprCCb936J7SFGzzR728XyL9VgVGAuczv",
  "key14": "5Cdf3TcnxaEkJDhQNDCv8rRSE2HZVhxN6EUwSrDrG1kkBqeF2H5mwvYrkZg6fsF1RcCVZqUoeqhA1dWMfJm9LAx3",
  "key15": "3DKAzAXiZyfU1Q2mp2aZtvp6XFbvCYEA1Mse4AEJKyn2ZAS9fbhYNxoBUgiM6r7gMh83raYVSYB4z2mDKqgJmC7E",
  "key16": "2phJZYyAS43JzxDDr88LCyNbUjmhP85ZCNRxRex4XakiCdxJn1tA2JcNp4MP4CaNnYLyA5QNAG8ZzexMSrZGyouA",
  "key17": "2pszLuy2VxyoXo8dBjnpyuSMppG5YmpdM6gMBWiKHBzJvFiXnqMfqpfCzew5TsfraQv7yHpE7XWuZFejqvynihU2",
  "key18": "53Hyv1JFLPtAiScCZXxoMrLZPLouKkCuqMnZrBSXkch12b8VU1kw6MZQAjwzwL9ek5AvauvUQSXhbWr7f9heD5uB",
  "key19": "5VDBFYKw5Lye4e4YuTiZTArvAAEMqyHMMVrJCW7zCBZbsVYhLGUc42rEYrNBsnRhF9FwVRmhFk4pxfr4tFKU5Tuh",
  "key20": "4zi7FLHozJ24zHgjeRQZL4B4knAmLog8R6ygpVufC28orcaVvZaJQMj8fZW8KqbTwHuowkZXBc3PHtKjwPttuckE",
  "key21": "51vkpekeeivJrSeHUCwWsbPY926TPdi3uC8SbWMz7Qevp4Yi3uyPzFAy881EvvJP8sar2C5BkXt7rmzaqS7ajX8E",
  "key22": "5HixtUbN18UW5UzQmbdchFKUziAVCS64G2wwXbUSZu8VMAK74gySh8E9F4NVs7uJZA2V6B3jLq1yQtpeM5gGKMXS",
  "key23": "3p9xTYRtTf4QN2GNib3h6KimM8ENXJFJZtaa111NjtBZ4tTdY7Zw3UetwtgvGg4gVzA1iq4KKrWrqqX3Z8mF5qFw",
  "key24": "Z8FoYUBsp8FfM4MLsWt3awAD8BZ64ykMc68ou6QTwjgPw1wr23QgUYHW3mkwK4ZuaTmir6z5g8cM6aazb9ag1BM",
  "key25": "5Y1GY73faYBGFy7c36Yq8QFwb5ZZfzCtVuzoratFuSjF4mV8d4dZZAEeZySR3jEUXqSHSZ2FaEZ5GhrBsHUDd3yF",
  "key26": "21TiT9ZedeBuD9JS8DjnBhVHXgoYb6fYkx7W3dy3yjLCXHXMoh7VsEtd5Vp9JBxanvswgRNXdz25JiEY6uA3YGkM",
  "key27": "46pXM4zPbwefvuEii6pgcNB6TxxP7iLXu5pLGhornRjSR4e1wJW6KXgCx7WpGq5yfu4Z9TwcC2jwgwG7dy4Nknar",
  "key28": "5FxAE4o5LXwqSCDFzCYy81WPFRGALoA3HQ59yPKopFMeYZkaaM3LbG7HCq7GER7nNgP4p71BauUmuSke6imGrA5",
  "key29": "2USrwFwExeC51L3cU7pDqCRgNiM4kjJ3cwqcy85Ug1LU211jKCWjtHzzJh4mc3qS8ak1Ryg3dPQXoFcCTwXQ95MT",
  "key30": "C9NvLpbiPx9bwmF3Z8MdozRpPS5eaahQVBX6NgJDYW3fM5MYDUCvuokXvzybsg211oDEgYwtvuxMWefCXp9vGvk",
  "key31": "PbopjGNG3Ax4fTbX66pSUQYZawKPrpW1k4m7HPb4AfANoNSBcBmHXfym1TesAwgruyh8UqffWJUp3dLrGdaZqZ1",
  "key32": "5xn8kwWmcYJc6dzsozQ88JBj4Je4iNfr51gyvyEkStB3C1rAJTfbHk5QRaswKB7gm1ZhBHpfZVcDEMZVZRRb9Z1s",
  "key33": "3LtXK4CzLWT4w7NUvaEcHLDr77JFbFap5WfuTKsDcfybnhL3dAFGXffKdqe49JJKKGwmcj4S4BsuoT7FFSVEh7iB",
  "key34": "v7mbq9Ct8YU9ThtGkMgbBzGw9KixtJErt9EAmG7oBv3djzi8AmrwtrTtQSdEKg4m1hhiTgH6S5mL7bhkDdTG186",
  "key35": "ZX6CeCTS8xsoQ6c4NtDaSVUTKkEmtwYoUVteKnxf92ZT4gHWs1mKR8GJVgyDzqmPL8wwFK2JXQxXBBretnvxNwq"
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
