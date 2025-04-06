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
    "s9qz25A4urZSLBQ3KZ6tS6H99h3dhoubcvq6kLTWegvKMnw7SbT8SgqcqccFt4gR1G7rCSTFmu8F7JF7vZzGJt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xhfkSuimcGTsxL4rHf2ffmJo98TLKVuRBMGFpzXGm1qnDHnVFo8guyX6ANZ6YvrbfRwpa9US9s16sb9e9gP6snL",
  "key1": "4hJdwKoV4ef2mKEJS6xqenFysLQGtoEQ8NjKbXWAFtggV2EpicaoVmHNgjHw4LAKfk4Mj7hDtQVKXuh43SEVXbmm",
  "key2": "SWQrZMhAuFjM4xQodnyMuB63Pjrk7CjPTNGCugk5s8te1ckqYf69czt81t9ojpXZQA5Y6htn8PTDmntXamqFuWV",
  "key3": "2CmHZK6w8eSRKiS6x5P9uTQv1Si71dbdB2TekWxEHuwowDPTZNssMVWNmCHvWL8561g4VvmaNViW3JUL13NcqWr7",
  "key4": "2JHKXhjGYeJzVZhYAUbeeCDhiPx9CnYD87MkwZRa4z6hhCwx75qhhwpd2HBkiFhJiT47k5cPdKhJsjZNuCqtA2KE",
  "key5": "mL5R4qDhi8GcZQ6j789kyLvSU7Tzb4a66tEsnpY4v8EeLfpKZVxA2vH8cG1uJYnTeKX6CBPTNs6ntXUpSA1kHPK",
  "key6": "3wo3BpCrNBTMs3XqPVg3t95m3yJaqFmPdjm1JfUeZj8K4aXAVV2i1r6BkLmEyqUTfWznMARCQFj5tyZZ1fRjD21T",
  "key7": "31jscuP1T28dTXTpc6NwU1jFXQjgUiYkN9CYnDJiEjvbSoS7rYFz86AQre7b58CTz7fZ27FoFFSbrpzkAHeiV6a9",
  "key8": "5tER73HMmS2ozvCS9wTKjuftFny37uXV32CFY5FYBmqA3UCnv9zTBqE1y6WbE1qKZSyE7pUiBRYVXoKS6kAQc2R",
  "key9": "5MMphSrT9QcEuYVSYjWBVdQJtxjLYHRBXyBKMqoi2iUNPtnBkAARZRoi1MSK4Cw7fkrs4X9dsdPiN3DoiTExid1i",
  "key10": "3BKzEoLExSUwEFkETujQhgf2CzfTTjYjgkJk5xNRT5LMCGNg9cqo4peEjgEN2GX8qCX77oVVmBWSJjpiKNSGrzUo",
  "key11": "2axxov7Yh2c3uDoW8VEzQ8aNgxtuVKuM2sifHvoGUYy35UnyceiK4qS3GGPQ2PEFZq1iFfjdiwBLJyfAtadmog5d",
  "key12": "5yyiAY4DL5JMwU7zboGzqLwitib5pHZ5Y8chQqLJ9bpgM4CKF3jEiNJBSziR4jXBUsJsNCwqU1EuK4pnR8py92fH",
  "key13": "2ybTvEZxGDkHhTB4ZWA7gQPuduBKUHNFcj8GafkhaDyjWDMEWQZQxKYXArvgPGj7TS2dP8epmUXKvqDdRMHCTcXv",
  "key14": "2f7SSsXq4g2oN6PT3fxQftPCbxSc2M11HVAe8ePMo9Yqv87DJmv8i1Yd9Str8ppVN4F4nWTU917EBCqW4K7q48Zi",
  "key15": "4hGBVUgTKAW4dK29rhNMCT1oAkEVQP4e3PDKf5cVTgt3nuRgKoQAihZgt9p7ViEqvKWTTFWsqtpHabEZDmMVZbaa",
  "key16": "626zgwzM6J5tT3TG554zhRGs4iBfBqUZQTyGQHHsha4pXqtQVxazSFjPDm3YiEzzqbkvHG2xPahoGDaFpQniK2QT",
  "key17": "27sDR4WLp62r95zpJ2Jaq8UX1ntJBi399qz4d4dgpTeCmC26KwLJ6czEVUE1c2yARaZeUrE7CfwsQo9vddcP4XTv",
  "key18": "4m5AgAnUVXwxgSMT6UXGm85JJh1C2RUW3hQPzatGDdC4As8WGoPEoYXDYVoWAxiJxGcrtjhGnohnD1HUvPXgPQyF",
  "key19": "63F11tMqQ3QXJ6W6vXecnrfoHFtoG2hDRBxvayxKvf67edee6L28eHb54pqTrK1uD2MoxwYKqSjwJrzRfg9iXKJQ",
  "key20": "5WhAyL9EpE6j8BnLbtnCu4bxK9A1PqbEEf9kdHYoDWNcBvCSnwz9h9mQjFn9scBqm38MFZ5kHN3GzP2JUK4u5cSn",
  "key21": "4mFc8kihZbqtD6QCjua7hufmk85UVvGu4isyxpuENXuxJPjqcAfkBPiijr3bugBvUdeW1iRM56hDAsPzH6grQ9Tq",
  "key22": "4YcDuABVXsYCnLjVqZCPfdCTfTGttgci7zHm8NJTx3rFEbBZqEHANNSoD5xsBp7NNj1jQJsS4Qb2ZLDhkC5JGCA8",
  "key23": "5cs6rfEo4zpMMoigchKEq67CSuuhvP5s3EqdPksHbbNMJHC77yob6eyh8YokkCAr8XSp6XB8P2N1wsiJTeM5V8RJ",
  "key24": "5xnpnZECNWAS38Y6MHAmWnLnEPFPfr7WAXHsWKcNcCWCLSmfp6gZFd82C7LTYq967jiBggpvkNGhpfUkCFEpVdSX",
  "key25": "44Ka3QCCR63McHJiw1Bh7mUjdQHJrdmPiszZfGsTswSRVodN9k5XzLddniXe6hT1vD6tQ5FsaMuMhpRcke3n4bVB",
  "key26": "3omUR4RJUqPyd5ZwvBt3wE8ydLheaVabqH5CiojaPj5t8WPcA1zAF2noGAVvRBhHqngrBGUg6kiP5V9q2oPqR8km",
  "key27": "3Lx1adHRJmHh59672cvFb4nXyAshn7xMbzp8Zerh2gpogeHPowCZtPuQF9qarZw8pK78uATappZQ56dV9935akN1",
  "key28": "5fr1dWSYPNZP6WfT4GNAFfJoxCp6CRYhEHHzPsHUqw7gLqPGEK2YEA74sjPxNwAYFWK6N9MS2QKxn6iChVSNJvvK",
  "key29": "4NayqA794r2u37G8FpDRLtBFMvhb2PHb5VADNxfeVX75RiooMNT6w8ryCWbKxnUDE4Nxgw3CLi4ojEE8o9BtMrw4",
  "key30": "58W7rVm99yBYLugnx7LFTUkmYYKtx9n3rxUuF7NHLs292TFfV8ydcAhVqiYHVpKgLDi9YuGEoHvdSuLwow5UmiQ6",
  "key31": "2fB26z8mqACXKGtPyKKWbPgAMupKciDySDxCqASWkSg1xEEyHKoRAm4CysExDpaxTAuND5ckh6M1LauWwoKn3zaF",
  "key32": "3kr6eWgqWwFSRNUzNQkaFnjoGkJmFLjHoN51vU1aGeCMLG9MWoSN6gsBgGrUTAzn4GH3wr1MA6piqYzADrh2Un3Z",
  "key33": "5XiVYeEfdijK3bfB2VctGfuRdG1BAiRTpBfd95775uR6aSFNDR489hF1sYQbVXd7wEHMPSdC9ttNmHF6a1NR8auF",
  "key34": "K8Sf2GFTpnCcoa8R4aeyp6jZcc5LeWdt8pfPvTGZf7vnyqYLMuFJNVareTzBy1kG9ZDYm8ErGDmcKfDBswbzoCb",
  "key35": "3CCnF2PJ3XDma8wHKU8N7RLpH4BHbHC2gqyzhicRBaGzZ8MgusTdPU1xFHUqte7ANYWyGcfGhiftu8C4VhQxuiBD",
  "key36": "5veCL5q8bHtADkMHqKX6wcX4jd9a3AvGVgjFxHySkcLx2jf4DJnoWiPucqJ5xhidq7zQLYY98sTrNS8kASiN9dKz",
  "key37": "2AfQ4UHcm6FkQyPxkAtDfo8FMUBGzHthJTcxbnfnyMnetuv7efvNkCbrq6FCMCCP3jDVzRvL6yCR6fqFoZWnmx3Q",
  "key38": "2mxbQ9protDqTGx16z6gT8HmHUCSEfJVKMfnKckmGyAD87eJpJB4AV8Jd575PgkrKFUAHfT89sRNZ4HLuZBoDoiJ",
  "key39": "2cFFtZcvqsCxFc4q1TZ4mBjVFr6GxtksmVLGjF7WBjTpuvBeH6uGDTJEAjudHwKxy5Z1x6H8SJQyKvbCr44k3qmM",
  "key40": "3dSemq318hPy3zrHcqy5YNop9B6UbrsbscyFfxX6eCnhb2PaSgiY2pPHetXfJCSYpwJg1ssUWpHvgbuGzXbnbT6L",
  "key41": "3dYFZfWn28cvVHZz5VTAkqsjQULX38nXqPQ9fHtjrrQgrw4zCp4RmAGdovpn4nZKnLAJdeBoWkdyHronyDvE1zQs",
  "key42": "5eBY23vZtEA2HX2H3x3akenrQBNLEW8wKJV2bx9Ehp6PEhp63WcKoHxDMhrmDeag17XhxpETae4vaa3tR9crFKEP",
  "key43": "5scPhU5tyidgwn38FTMujCFFZuaDtXESkHU4cshczcN3h8NKS9TesbkUYXFAt9wayt8ZrAvgfS3C8hHRW7bB8Ar2"
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
