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
    "51U4txJjYevhJCo5oFgU2UQ6i4NZ6mxRDYhE9GyNVZ5dRF6pWCZrbsG3CK6NAcGjo8mb4aD7vYqVTkAEkw8xtbpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xp61e9kNrnrn1Y4s6FbHYC2JMB7jPKPmGHZzSBEmgequzxsjKSVcLWQ1uEyS5csDw6XYeWaLscnv8rLXQCszXSf",
  "key1": "2s8qk6TEqmUPpVqsYbTrZWob6y4qajQvEudA7dqdagQRRAio298JDxgbfCLYTiMcWNxKX51ZRYWqTERF7Z8qfG9C",
  "key2": "4uu8j7Mtrt5P8ppAmwm8F5Vi6MiLGys2JbQahuZxvnBWdGvccD7Yz8RZeBgLQNtPdMjpCVuceJawAP4gtkeeHirx",
  "key3": "4M9VFgqBH2SQfwWFu8C48WqgUbe2ffygad7ZJDBhwgmDJpGvTQwGvHndaW3YUqA5oPQhSLRNxuKebJ4duFAVC3Ks",
  "key4": "5VHPzQG6NWsYMKPheUjUEWaUBp938xKsHAecUfERh9dbLvUS5EixwDp7kyTrts1W666ovNwkesa8Sc7RS5rSrUnw",
  "key5": "3sHi2bNDZETyA6qUNR92VZkk9Ah31XrMPKSCVxCtdVNxMGfBP7og8p61PS7qynEqDttU9tex5rWjJ212Lu1vBR8D",
  "key6": "3nwYw3e9VbkSjFUWDeEqymRdgidofiv7mEWthWNKfqUzZYFoU2Pfxe2aaRtG8SZRFoMqP5hcwTCo71QdC2RXemdZ",
  "key7": "4sGBSq1MScJQK3B5SK5M6bCcC3M8dD3E96ecYmyqoNReL5gnRJHnC8jVifjMfhxKCNkryHm1tzyUZ4nWVoneQh2s",
  "key8": "5PQuTCvTUZD1rdTEgbiHPwYNQvzo6n6WFXhoW3fiXqC7xxTF4LJ7H2pPXmD8PmJJW68RNiGdcPUW1DJnWzaE1TyX",
  "key9": "2tvNcAZCuUPdAJUMfxiJzqcBoKi7QRsd46DbzY39egaHVZ1NtEDXxcvfqBRC8g3a5LELLNPahryMFaadxWDSQEap",
  "key10": "WKYVGd2oye6hw9qKgDA5ks8tNffWbCYzVzHyxHjJVP1PsDui5BzkGMm7PK8BHpbL3bQtyVh864nKibeNqzbFbch",
  "key11": "2ARA9xU6JA1qDxb7gZprxPc3fKJvSL36ZRLxpC5rXJeHXxZtd3BtNhi6ppV7T5WsXiDw5GDXLU2gdwVLmpsiMT8b",
  "key12": "4Ko832aoJtbky5P4WZwrxeHXwmkaJRogPXPhx87FqyHhYgqUKBXJT8eezAYGBdMqzFibBn2RixJ9M6RaHgDpkzMa",
  "key13": "4ion7PHJ1T4ozb6KpRT6E4m1e68mt4yuFbFeMMnrp6pufWh1vmzZcoYtVVUxj9XrhZDb4tAVQmEBhiLTiB57mHoR",
  "key14": "5XtQniyjR2kXKLuoE3EjZXpu2CrX94ACwvzPNR5Ccbrorwt7AqNBvcN9ZctjMncJgmsaUM68iRkCJTf1PmDLmKPd",
  "key15": "1at3wnthHVgxCvdxLqWy2ionCZMAtvrB1w8WXG8dYJP5ydZ9L8zBUv7BnqtkzAGWc4KckMYZzpcKXpUAEyeKxXb",
  "key16": "bXW9KXxqHB1AajTKYWfBTNoEuuq3jEkmL5fJE2QpQpm3BLcnG4XW8nV5LLV7ibruAcF3PmnLKqmdKw8NW4CJ3av",
  "key17": "2c5csrmrWptUSWJ4yYxTcw5mJ726u3VZhFwLtqiMxf34JwKPdbvSCFDkpMATb21mWio74KxqGbHsJQ2iVtXEyfeK",
  "key18": "5xrjxaiQFtKeT28BxxNWtrTyDjZ5D7HiwdZc42UqQmqzTxVS4umMP9EQVnUaedsj1WrYF82HJNnnj51BS3XDg8rc",
  "key19": "XhQEz37zhXfg6tayCyYpHQSneBKQFUcfMvDps5AN5AFbAxosTn9p4e21SV7H8TA9iSp6RfNWUmotPTYqSUPYj1n",
  "key20": "5wsf6zqsisMwUKqg6KMiJE7RQSapoAPTNWfH6NF3sHPk61yZnDKgBBgyGed6xBbUFX51ADrH7KFpf4YSeDVseCYE",
  "key21": "22H9YBL7khZUyeeWbRn1hmrg3Diho43TrnsTXmUkrbwevfzTLBGooYACv8DUWBpmbhYkfnXmu415qVnTcUF7r6Uu",
  "key22": "43AUtduNByp4RZayhiCMUyzRmPHhUWNhiF82xQhJLusLG7jHHb7whJMEtim1f89V7ts634xGV3VxapbWwxoCYMjL",
  "key23": "iwyRen6XkSW3LvyAGhjRFbGSvkhH11RywxAPkfPAK1Uoks8ERSwz4YAJRhsBfujqk2C7ksjxhV8rRe66mwK2DFd",
  "key24": "3rYk8w6ud9VXSsN9gWsDNFXsgcCmBUn3K7rv4SnWkpd7S6bh2bqqkECHEhnwvVqiSEhfEgEW574WNDYDqi7L1YFa",
  "key25": "3EacZhxVJo2WgZXJJxRxeYB5vPPmNGfXqMnhSa19jfUCktLztcp6zrShAUCYne9PPv9zDogimzqHaKBruNvnqDa7",
  "key26": "3LzsStZCvxA424fcLyzmwMqyUfxJigmpJbnkuggornKQhtBUcqbt2wYuMkKMr3GmtHLyR56Udd5q4xhL82ufJnkP",
  "key27": "57CasJY4hBbhbdKzdRYtsz39pWhKehYjjnRcek17focwzic35eXyJ7JpqyqEg5yyjDWky9vqm7Q4BEvxqXhYdZVC",
  "key28": "4pGxJTeWk355MVbBA32iuLXKNGLGAUtDpwqztJuUg3YxDiKNjV6AKcPLp1HTRezE4G2nj7TFvaWbHgr7jsjSHRZR",
  "key29": "k1LBnnrFY21ih4V5nX3oMrWAZpEmRn8hwzmJbBsCepmx6CqrfoFfwFTeE9fYY1EcT1fBryT8Quj1k1gXmC1Q8Si",
  "key30": "24zwShFShg1JDz63yB5jdYx4zF9kRi5gQdCRriDDsQm6je5XXCzvuSQhrJcwNFNYJ7BLK4C6gvhV4eRbFAgeY4sb",
  "key31": "2atnEQPW2Z3CqPBCX4cnbpyCH4myA8H2RmkCZFRKTwRBtQg12UqLKE1VwijTbR8bijVJ68HQ8GGBG2yYxQorwue2",
  "key32": "2wMUkddsX229viune4vcbtqChNP6VeCHYKShi8P5Pm8p9zkyrGDu7JRAYhTNoPyrg5zuaBs9zruyaZgbeLJZGs8i",
  "key33": "3SKtP3QoKRx58KvthQ2xLenfFv5tg2KEyCRfQcZ174ThJADBmuBvFcPzTieugoR2E22UDEny3e4gez5T7Zd69js8",
  "key34": "4BpyXCsUoFed6FoLtbfZ5VMPkdNq7ziHzMXQXsvMbR9F5LkN7irg29M1ecxJJY8J89FDTgTtRFu7Sk8JnNoDt8en",
  "key35": "5TimtALNN3Y4KVYGEkCAsJtuyC8d9sYj9FHraoxFtjQAy2L9xEx2yrkUBStufJJiPEsBhm7JkHTTsHWJG6WnxMhY",
  "key36": "2mrJU4KwmaKz9RGsotfSZgzbE7THAeR99B9WMtjEAetG3gymupKzemEnUmRsng2eWT2WT63E9YnNmaSzKeaYDDq4",
  "key37": "Zx6yN55p7B6V2vZ5B8XhdXbFA3bRhGEcPtJx1kWemZafc5GdfSKooPjXzn3T7BRtr39tYxvcrfiLuhnsjrK82Su",
  "key38": "bk8gdPycrzWpDcE3yc3JoKRyruTUn8NUD9hNEBt3Tmw7nSWYH5W4fEykPcinyUyvy6DW2m4cYDWsGN2ZacaBgB4",
  "key39": "5urbTKhLYXV1dVRCT5B7upZdR5JqNQLX9WFckZWpWwoZfTvoDUP4YQiJoj9Ykgi9AMNm9vksGtxzmd3e6Q2pYrQu",
  "key40": "2Wh4afgYgnne1Y1RHx4Fhj74yhdifSzJFjZuQktzvJkTQK2iB8ouTZLv8gEuFTwLkmYoicix2x3kDkZ4KuJeVrH3",
  "key41": "2vDSep7kRUSowMaDFvUWRT3FLgYtybeozG76FvRnWn7LXeQutdgwMmvbwYS4MkzwUdhU6ezUsySaBS55SK1WHDjg",
  "key42": "5rku58xWieZXunLg2ZjDh5aYL186U9knSWvKn5Z33iFEE5iAbdK5CXaaXAo2uUw89T6EEumMYJ9GXFxkw9DVHH6S",
  "key43": "2nZPRNU8MUb7d8JhHerRJxFmD8BmjgNc2ZHrMzFGrzVjufZHrX9QG4nWDxvRHXbBhYiW5P2P7UD6KkwEEB2aKECE",
  "key44": "6VL5x7q4ZN9vP7JR8DMLjMrZButx8TvEskuyCUBBGWNyD2M7jFq6qcs7Ty2QqJAN9fFYdTV7ikCstUaF8z8S7TU",
  "key45": "3ZPSgVQ1i3dZAawK9PE9zKsCqbsHgJfeAvxjGRY9jaBAe18LHKPpyweororaRrApSt95sYZ2Ey64DrEWin3YijqK",
  "key46": "2atT4yCZDnK9QvYemcSvBfZRQGxfE4iGGNVFMK56bKBqGEYa6psjxWqLYW56SmG5YRaSLR7uPovxE9mghrpozzNH",
  "key47": "eGpB7rNmtsCeiNLNuY7gbaGtvN5Ce5mzLpgpSj1fE9uH8o1iS8nEVE3fShn6AqRerehSHCygN8uCADE8dYPu9nX",
  "key48": "4RBRzjoLCzxsXo4cwGxC7k1SngUZxnCQpMxwMzZLLHyGncn4r693vBmaNks39aG1zzEL7C7vrkcPf74tengvumFs",
  "key49": "5zjjjL4JSvC8YQ8Q9qZE6nFk4o4aTNVEx4hzHBJKGYUAiM86eBT3117XngREzxzyuLeNj4Ryu1aMLoG5yqzsMgVs"
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
