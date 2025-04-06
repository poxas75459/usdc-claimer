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
    "YvKuPsjkRA6GZ48491iJ4f8HTj7m9L5AT8YFF8b7XdZqAhqbH33nRWkNUR4pkdNhcwJbJArr3JNCAjKzFZXUgow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEFX1za8oiUXLUd14dzKWPGjsZvtBZSojVCjKfNfSCTPhHfQi2bjBtVCb8j7YnKRurYFXMJLBzpc17EkRM8ZcR7",
  "key1": "2Fw4h3QUjUQqHfC5BPLsgCduFDRYWS69WLQ8mt6u94AFJ8zW8dBppfiWvGGsH92x1SkFNdSgwnBnyh3Ljyp4BoX6",
  "key2": "5hUBc3hycgMBC3xZQYguZHG2JmFXzaW7YDY4ngK3xFAxfcEzteYUo2eqtMQFSEY7iTCaVAiE48qy1KDyen45opWk",
  "key3": "2143oYNRFrDYWPNoTNhLbLM12AjWEjKF33roJwy35LhS9XhPD3Yf5z9HzaEjCRJ8rJ9tG7anpwaZERyqnGqXjMdG",
  "key4": "5R8n2QFRXr9TFPBmmrapLeiUaBpdjA2Zjz9Z7ZsfgmNgNQWZNSim4bhRYKtyNtCV8YJGqdfWMFUAi7TxnbmGZrrD",
  "key5": "L11u1eXoecKbBmgpP9uNkwwLsyDBFkBWWpPUB9hNz7MhNejwBL5A5k4ExD2rrHiGdUva2TfiJvCzdVaFHnk5kts",
  "key6": "3isNCM9aYNYL3W46SxyBguAY6yV5FYdZhatMBiVG4KAqGVLF5K59dk2jxVo4AWV9GaRUx6NNFyjFmr1s3unwNr9J",
  "key7": "5xcghie5xpTLzaexhx6gSttzuUs6evo6DhVnj7o4n8H5dP7Zmm34xVAmv3JpiCrM75ASwHnhTgd4a7SACyubDPC1",
  "key8": "4abgqVpev4uU38mQGHRfAsNfUkMUiLMFJH3B5EMUU1J1C7YfvyHtLVaMSmaLkVCUUxv12BYQvc4yGz3Dimsy6HDn",
  "key9": "4PFBgr6Cp66PFxH1YnsQSVSdw2zUUoPBJqrm2cM1945JGv6Tz3MxAE6H9V35wBm5SsWkCQM2mhU1WfP29rWVs7zE",
  "key10": "kkrQC1KxQX2vfxW7qMsLmJBDhLzizuXhnMBK56L6evtRbqVuDQ2nTWgkhDp1hwViPni9xNz3KhV1ytJgajTAeNa",
  "key11": "2vTRPQVN9BH3abE3rsF5kJthiPDvDuT1SRKLjVYFKhdwxHiPuCHnGzebxZZXeMpaGgGNRtPcKXRGGyS1MoyR4oSh",
  "key12": "5ARd8zZ51HWhGjRXKfeaRiEYRnLh9yEr7Z5KykJrhYHpsT9qwiSjqTzHBgXs6JHMDJyFV5tpV55YVdoYyLMD5ywe",
  "key13": "4mQRnh8MWL3kukt1kCcrTDCmeRcNBvf5TBraoAyKqCMreRrTEWZpUyhbFDZEN22SqFqHP5xxsPuDvm4MQwnUEkyv",
  "key14": "3xxv9K7qfyxNbeqSJpNXhzV5ScqMyXH6HebLP2aZbQuFjiHYFANEydLFpqGPjzdEToBZrdGLJxj7NcLS3amQjfUn",
  "key15": "3Cu3sm7Zp9KiDDGeQagrthHxhsJfqb9MYmeFPXEkQLX4obbNHBNF5KL5swQuSagEJw9k4GbSeJk7rLiHVEMfoDoy",
  "key16": "4W27YQ3PT58zHy5wW43jCFtx61Au3yoF3cieTNLjaWy7V4FXnogkBsFDMPyWkpkBi6zB7LUX4N68HLzVVJLZsjwx",
  "key17": "uy9nZDyM7HKQnnT1kdSUGt2Kddxso3Uqp92e8wApQ6h31pgDCzqkK6VYpLerSWTNSvBQQzXuA2xvD6vUbhgbh23",
  "key18": "4Ur4z1ctMc28X5UJGpFGvCr6znrkeRs3wGtsviqhei7zj1xJZu1TYaAN69ubL9nqoTjpoavSzsTmYrBeciwHBMNn",
  "key19": "b4QMtDC4SgAwUz6QjcRdMtuHvmmqGjKLwsucfaq6LnCEnx99LnGXpQFu9WkwDpZMJQtZPuukTncLFy2RkStxjXX",
  "key20": "E9SorpdcZFacQu6imTF6SbBpYAhhTaNaeQUiJfLdRsSAYeaDZJrmbWxXwvCWrCFTWxDNwED3FoHX98UWYKMDnrz",
  "key21": "3MkKjMnts7PMXTjdzzpHuB8C9N4kSHi9EMnky9VYeruCWwASYLsvZzbeaWjyVaUkrsm2TsHQgrTf5nns9zRuR1hD",
  "key22": "2m9644JwQb4jCaR3eqdaFtE5qA4UHpQ4gfQdbZR4pVoSUaRBzPr8jgQfj4XPqMWcgXpsbV9ruCpJL4pHnGNbnPt5",
  "key23": "5hWpMrsmdjdsuE48Ke8bvcVxyC3gcX7ffs7FfdUjczS87WdFJoeRi9XGip7zymF1uE2MyDqjFbR4VMZZ9hwa1Avg",
  "key24": "oxqfGswXQEEGt3rDLZt5wLs1AckBrine9s6QK36epCzeKKHmLK8QyEote8XVx9uzzTRrsZPH27S1Ce7PUHZSEWw",
  "key25": "312Hsh7oW3JYrHDHpLJKH9AdLiT1ERpLNyv7TsqwHuK2XQPGQXU4S4ZULo5MBgEQHRmu1wBngZ3qvdhpuChXiWuN",
  "key26": "3pPcSfF612eLQobYhGhbqDEfXg6h8oR1YMgc5197CySF9ZVDPTjvw9kxj5NkHKMzBD1NmuiwtadexLgGfWj7qyAN",
  "key27": "5nQXfqTQ9WJAUdmCAouA2cnkqrf69wto39UJ4tMesC1MmhvPxn2YzdPMTgho7sUdahibQnXbtLhmTjbSwqwH49bm",
  "key28": "5ZHmPBofyNxWfwMKTBewHVYrxQ3r5VmwAY18fvvhAHREcsxB8BaC91su86YjwCE6nBmFSfKNAEfySTnicpFKumSy",
  "key29": "4SbW9DbsHWF3iADFXvcQRDw13tEA3C11ar42pt8xF4tS9q9ugDdn6VzgmmrzXWgTa4XBBxzEAT3RJQJt2LSv1ttF",
  "key30": "3eBJT8PJPxtUvRzvvrSNQWCPqY6HjFETXnz5rooCvv9M4hzMjs4GjXFLemHtLh5zWuDNspXpiCpmh2Q2LD4VHDEV",
  "key31": "3nYjzxjBAA3KFzTC1MyVusMyEz4a8YhPp9B45wFAeY7otyXqVo2uGcAxYo3kE4hDgCzv2xS6DzHcEtGSFgfyAM4B",
  "key32": "5Eez6rNdn3zuuVLMA7W7aftqfXPpQnTMArF1tHJHERmVwu2qTWdwybuUsBtxdqjkywTg5WjoTFTjogk9uGczCZtt",
  "key33": "Nu19FAb43F2r7SDPVBQVk2PqeFP7EebJr2j93KtktnZ3gvx92EK7oah9V5Dgtnxwdns2bDkK63Y2Ri4xBQRJwTL",
  "key34": "5gDrVwTAuw8TBFhkPdyStjT9ALmNGJiG9ae2S7KXpTGKSmPR63Q5npeveXUqR9D2Uq68ycmGzhnRYViEhVUdhbcJ"
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
