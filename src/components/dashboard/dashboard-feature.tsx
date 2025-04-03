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
    "2wdB4SQHvmjmr4NuRZXNQ8siorZLrethhqRjzCQvJhdNvwxxXjgDfkEtfwGwXizMcoQdq8t85SyLwJaPrEDYeuVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chwQT3jBoyiwKxDh3dyPTvr8Ayv3oPELuaYHVkuGYeDMuRno1WcSbGpgdCB9Ley8UH3RA8Fx7JYP64nXezeYgkf",
  "key1": "2S4QCsFuQkVZqCgTtxvdEzZ4iVgRiUbak98Lyh7h5j1vmjZiqwBu3qYGKUV8dnPehnNCJ3aSff2w8V8eUvehKyYP",
  "key2": "4uWr9LC2zxGAreKuLuiq6PqcjZM8D2uMXWLczKUDzAiph7tgkMNjprhVvYqqiiEpLAPGJ6ACc5txoLKqB2n2eFye",
  "key3": "3PY5j8paPfbYwoTAFZZwsykTnmoDxMuRmLpKGurUBfU8roH5dH8GsvJF43JqnwcPejk762wGBoJayFXdPSVm8yYe",
  "key4": "2oKZzmMYPVLNJFiz8hb1PNwms8Vk3JDjFTEu3GbyafPns4Sn6zKfz6YT7y1mEfcP7tcA4AT6CjhM8344giNqjRWs",
  "key5": "4JmRrNqR8JBX61fSzy8ctEoB9xq31hdjhTxZJ3CcS9L3oJzEsXAGDi9LQDmXcrFG1tyNNc73LqAZmBgAdrUFS8E7",
  "key6": "3edWFUTqoMja5Qu7ErvyUF6ZaoVafhGaLaifDcawcAiAuw6c1tSH2KYtTYCWHgcgun1ujFTbkwt2Mg3qd8B589C5",
  "key7": "2vGaKuKMwnykY6aspdSn44tJDJ59syyF1Yi9TwvybioRxo4EXRtcxQRGNWVWDUs5H8NTVJg8ypWZLShq8uU6RNwP",
  "key8": "5WTZu9dUBHQcqSuGWEKvs4gFEBL9FzBL6pVfd6PUZMA18TdLMFEXbQpUS4p5VAnAUU2AoRiKDQ1VmtETZJN67va2",
  "key9": "21eSevbxdmEWSnNe4v4ManRU9jZWchSeBnJ9cDDjEnS978BnCMGCn7ysavYdCmojQiQtXHmUgat8NnTHbpDnaqLE",
  "key10": "21r3L6yyoqhEKnCZLPHRURr89nx8Egjqo2PxweM5UuX1KtGago2UzwBDzr4ihLmDPQ1GySMBQXZvJ2EDr7sgRTuT",
  "key11": "2ienxC6q9VYf1CDPbaj7hFonsvkoMjzkSewvdj2o6Nvn9h8E9EN5XYEX2S5t6f5dU8wrrgPa1vnAxqhP8rkX3juV",
  "key12": "2T4p2fm4q4CMaQd8USR2ZLFSepdAtaVBhFW6ns3Z1pCZrwtVV8mt31hkNwPPxUSFVJQ1UVLimhVhmkWf9fhWwDvU",
  "key13": "2E3CgiZxgx6KkrFMSr15Mci6NdiZ7KMDbQVkT2j9dMubvrx2w4N6A28LqpVqBr1tu5yH8Z6ZkcThMmCtRFeicUBC",
  "key14": "25s7Uuohdmy2LNiFX3Yr1YVYCWb1fkg5bFrj7o5SqnMB2zds5Edyj3jzRbDyBdxAMgKYRrydjszBZaDJ8EunGWz8",
  "key15": "3hPdDQW11qDDpjKQcChSbTBCKKW6B3tY65d9yQJDgr1eZivfgBrEwj63ccSeNEbQf7XAsKhWMCuVVmWoihtWph9f",
  "key16": "5AD9XgFcUSa8mZu7NkXUjsas5SyGv5F62FqgEGhCorDvYbTsZEvFrj1JZqWJXBUbdxtxGfPEjeoUiHYcZb2RBT3K",
  "key17": "5UfW3eU4KRRfzK23h38VDHwQCddZnNWMKteibzrHfGhwKAitWMhnexYcbLbZcaL3zpKFScPVRym4Y5XKZAgsvZEK",
  "key18": "B2kTpYKiUUDSm4tqJ88AtCetV3vdxVgkxfhWe34K59J6FYJq1i2s9mQpMREaGc9bYmbiRdvHvXF9WY1LCKCWNBq",
  "key19": "3LRthYRqczJjEiTqdWq79nv3vNaH4TsX5KAyB7ijy5i7vi8gqnFfeitcQQqi1W7RmT7Ftiquz9tThVF2oFAMHF83",
  "key20": "5HbSM6GCw1TCa62cqNZ31NmoMj7RoUbQB7wrwgwH4a5KtNAGhSExi5ywhvovRkSTT4ui7w713EL2DYYKWbFgKxdm",
  "key21": "4as3kJ5ydN9yXWyfv484eoTXMTSUvtncY5YR9eaERqPzDyRhqyoPcxp3Q7WVsVYpRwtYpk5eWwLCcmNaEEzLjPEN",
  "key22": "4K91rCCCGR9vKzFpXeNAsLTzjH5Jr6QxznZyZna7u8ufKn8xbh5HEJmiqsrRt7aNfXqVmF3iGyQJ7euPYCQfUJde",
  "key23": "5iWCrCxS5zHaCPBWXKzeNQSHFLvqqeJPexNg3xFKTTrR8EE4MEBx8VSY5ExL7VGhWsbRSb2fMK3CeCTiXP9BrcGH",
  "key24": "9Fi3RgBRLhuYRbGP2rvWYheVuZLW7SiCgpQWWftaajLuGMba2vqTxK9fYEb91oEEoWEvUvRjD2aK6de86yMKCgb",
  "key25": "3HiRtKNFro4cUJL9a75h1EBZgcaxkzQGiURF22FUuNKGng5asgkT7HbAUqiZnBHuovLDtnDp5m2ggibbdMHfpTYQ",
  "key26": "62FXYY9byYoyBii7EKikkyPDcAyjgQuJvmJJjzF6u5ERkqAXsiW39e2eg62Pgeyysx9sL3gR5rartS7vAamsNuFt",
  "key27": "3GEqtGNBvLfzhax84yWFZ8WAdqzzNms8mdxE9AQNTvfr5c7ZB4wmcr9juQXmBJ99iQEhHbJd3iuAEFDpURAgP7Cg",
  "key28": "9nxDDHFD6UDATJtksmWX477KBc5pepvqnEkZgNXFDxjQD53CbSpMyXbiWGwjoRu5m8uuGoHCpDpe3vXFxcgkqNA",
  "key29": "54wRNGbwkSHu3yMm854UyvB5UMah2nndGRxHzPWJXvwPznLskXBZkq1kc6fXj7BTNpu59jBHJjVEMC6FbjgixyFu",
  "key30": "4JaNWSURmQRAvjS67CW1AaJJB8UdByPUPn5BJkiT3zmf3yZdy3rGrs9xvbCKHv6GXz9KLsci7jTSMqRTDLRfmmus",
  "key31": "Td5fpopk6yottuLijXb4RRks18iVjDmJUiZx981YKppZEWMAcViKXTTCfZfJJdVbS7wsHRHwfnzF55Q6WeorGb5",
  "key32": "4M5njDjD44JQU19Rjn3KLdZZ22xjhKJaKWBiuUQhfR4kCB6eBQpWPZ2hBdz1orK9Bfho2dXzZARnD3sKQPu8K758"
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
