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
    "38wFGs3BmbihjHDQRaMZKNBbDKMt1rFCbknWQNgGHdgvC4YWQbyktqUyhTnb88seox2MDxBwYRDWxdXFjwi63U3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CAKtfVWWay8dswg1ZQ42qAKUprDuLAFQKz72oPKoSe69Zf8sH9nAzBxeda7sdgULXTUxueW3mr9cpDKyd86g8m1",
  "key1": "CPoDPofnyo9y4EnJEi5qoy7uHfbgvW6uekd5YE1wwW6wNcUeDfpQ8zVqbBF8MqZFEywLKNi7BUPMSZLnf3bXpcf",
  "key2": "2j3EBxXeKYvdbL7bnWNP55gew66wnGQhCdaHTppRXrgB6HmhCGr8YYUXZM24m9QEB2EjAPARz8WTGRb7NjSFxRaB",
  "key3": "3vGoCvACn7sqJtfUaUuCqdUQD46Bv7xrkkzLmmwuYMUSDuuaoBCsMkWUgkjyqHGZovdBoJEpxjaXeBfJ1kzLNEws",
  "key4": "2AAHLKG3SsNkHJFEPLQ41fRBBH5DUHwShUdqtRV1tFiFrJMyxwa38UDZpxj9gEtmJGdtU5aS8ju2Wg3sdB4hqC6g",
  "key5": "uvkeqgCcUdFG86jkLWeL7qQdi2ZKuHeBD1bAKxo9bGc6Mi8GSih3BRP29wG3cTE7aBgoUX74BiUACrzreJBJH7T",
  "key6": "2SbWbLZiumb9EKHRueQU7SgH54N9DbVcmQn9vVMn7ZYNadbQtPHvtKJTMM6KCA1S8UZZkm13CnJCsDvtx31xVBpc",
  "key7": "35k6t2CfwWbySdmdzYru2EF96qrFQxm7rPUv9wvCFxAu3PEnxD3GyV9WmHCoTP73N7JD8HwBy7M7oEDcCRe6hWjZ",
  "key8": "2d191bE4yBYoTWafN4Y9cJuSrLKwbhqhQ1MMmXyCjFGJC6L5NgfpHK1dgh9d4iuHXkzp3LQdG89G9s2fqiCRLs8S",
  "key9": "5xSxFZBULXJc6194UupgZx5CqKBYp6t73zaWJEdSx2vJcU65jB9hBd1idtxmdKpHZRdU2YMrFZhjEpheHMjxK7f",
  "key10": "4JP44KoU8Q2eoCu8o7VVtvCGBcKkKJWpL2dgezGVec153cg1yPsAKonq5nqgtgJuxMqxvBUGsbfiSgMJch8DDv6V",
  "key11": "23ssfayEhFpkPKzbF8zMGjxm4EEiAWNuPhaw2ELEa43ifY6kmCFM5PuGtrYXT53bYWYSGZmQJfSLLEVwoxJRnvSB",
  "key12": "61HQg6bcuq9tSwJDP3gXaBP5rAuf984wa6xuFJ3pN28NcALnrJ3AmyfzDuucoZXH6Jfm71u1qPibwktCDHZ8zkX2",
  "key13": "4pX1KJ5JM9yRxHkAQ9miSSNs3VqXnZmzB9zP4Jti9xb4DZTk4rturTv2KqtDEPUFVVBU3egLcu3NbTq5JbuyzzZX",
  "key14": "S3ykjbcta2ZDT54PXsPECgSvny85LBDkWeWAxsWgqi19r8147aSifpb5nWMZMBMDVJLrRxsdKwVEkFcffPUCXXz",
  "key15": "3oLvWPkhQfykbFNYjoyYnnjxXqH4bJ5NT6gNbTuhe4kUtzo5iUsJqjRNRGGMTnWH3JRSWY7yd8UwrHMZEiF1Y2vr",
  "key16": "5vroTqhKzdY4E6XZLwyXPFc5tCAio3dvKZxXCMx7WTNZEfCd2TwMvSQcwZT7Ut9aQx5jAViN22TBJ1BFnYEsvZEK",
  "key17": "4iDbAiBzv6qD1rZnEJsF1PWGEXxbmiV5om4yUGy6nHPPQFfxAkVLdmnXykoQVZNsAMBDYhhCMuYnzUSnVQ3AsMsd",
  "key18": "2pZAxVsby4v5BUBYr5LGmW6npuS39G3riLe6AaBECs5p4tizqTRzyWtphNDPUjjoZoMK18M8y6Mg3Rh2vexHh91p",
  "key19": "2BdAPaCaYPt5kDqBASKqMq8RWXb6ZHrgKw6rJiyepzSRW3PYLGpVLc8b7Ev6kS2zWmBPHogdApVuGdQiy27GTWH3",
  "key20": "xmyLhdc3FDY8iZ4VnLkPV6cDiGosgbBNmyvSzzYQqvRPCthJfeiRHLWwYgRNLGoTKusYGy75M9jEs6UUuWc5BBF",
  "key21": "KfZw33LvEEUxX5u3M5F5Q9zNYrhVeANFhsQPhoJQu47RjX52uRQcXVbELPNfv3qwkaWMuyUhHzdyALKbtrLsifE",
  "key22": "4vQYeXFj4zWM8YJHSaSWu1cXMye64HEXezhkHe7qLmVb7V7XRx4VE2vnBDukNcMvB4YvhC2kebioGiE16Nyh5Evy",
  "key23": "2RNQjLknzxpGhtj1krddNF7Kg1WHRkwEpteABcB2XAkYfhhFjai5BQ3vMiE8buqdFpupioApnfniTFVHDkZ9kPWH",
  "key24": "2KZ47sfQd67dMgrpBzMp6E2r4t4HshEKtiEpv9r1bCdSndBWRjFHLzsuU1zck2sALmmXjNoftStz3htmFQa6Gjb5",
  "key25": "d56eVF3vRF1sX4C8BHwapvNPCS1C8XuRKaYMsA9PKpkqcvAtMDaJV6FcJAFmbX5MkoNqHghvyZgjDje8pbFmeF7",
  "key26": "5q1BDhaGCbb3VeyLZUWYJ3YAyhrenD6r3zeX6RmeK1tvgbu5NSLV43wMWXEi9Z74EuV6X67tyQp6RmMqqKWG6Kws",
  "key27": "4YTHgxkuiCkyWK2tTMhZkCsLXT5bCGKYPjDdt2ibgCTtoptM7aUhbBPwAs5KZyv7jQWjhSqnRj5miyfCoaGti5aJ",
  "key28": "5c9Xpvi1FV7iX2UoySzSZXJp6uc8oV8aexNWDQ2BbTLcEkYj2YaVkWYkyuVsQW8ZEajdgoQiacetmzsnL5tWiQLC",
  "key29": "24EWt4mrUGxitujs1vKGXUF7jcgp9PkttcdDZBsQWZjb8G4mgvwWXmmo2PsWtZzo1p9GcNumxXNTkUpiCjesQWS2",
  "key30": "2b7Xk1xXRxpYbJj5vgm2qU8KRdpzxpvL6991tVdAwVD9ihYyp7KYRaHPS7jd7vwm4dcBDAL95PNL37Vp547aLPzw",
  "key31": "67xyVGfGywzfC7Mh29QEcqWPpRwXC77utJgBYdYUYsjcds7cgE4yAmQLMPo2K9CLBLo4eZC79NdichP4QARwAjj",
  "key32": "ttgoZjN4r3q1qsYakuMBsgS6iZuLS5EL5SpzrhCfrjPYf7rNURZAx4FF9hqBpiw82q9mkx4qvkaFxo2JjvEG4Hx",
  "key33": "4C4EAPqwh5yEVgP3Fgh8BnawbCnHjvptnUjHYfXTSCbPYoqe9wiM3XcMSf1CSYsU42qXSMaWdCa91avuwVFz8arF",
  "key34": "3u1PqobfyuAxd246xcrijxUQNgdfMt3qkLjJ9jwQAu9PkUoNrxH5YDet4fD2UuAkbKdqnSpUdPKH1pcJK7e3eQL5",
  "key35": "NiWZEWc8YsEZeMzkxRsEzKsTQvTqvqDP9t7eMKs6tN5nY2GLkWW6menT8NAu6TgxQVL7VKu3juaD8qVcKuccJg1",
  "key36": "3kEXYYCT5KKa7UWGX6J82pXLjaQJKBQKYQBqHAS2SkXj3YGqosb3hRx3nn9iM13oax59cd7YSegzMjzFDCe5hACm",
  "key37": "49jGM4dNwBp5EzBFfhYaeLxEYWQpETrawb9RuKLcwVRjhBaeunqLyN6n3P3NYb6LgPb2boBMJYps7jFxqA9mqgkS",
  "key38": "bsGk1DepSk7eh63U5mMMnjCcMM6NEKiMGMgL8YrUwyAuqGCS3oRKYRSzdAFtLz3H6RtRf5snV4vqazweDoc7e6Z",
  "key39": "NgHHm1jW7hCBbK67CDmb2fsb6codjPxzi4NiKBZpAjoFnfbrDwNSDQDEstMCwtZgL1PJF6Rst9HRZgam89TmHEn",
  "key40": "5cejfUTZwXj5nTvw7VG1aNodq1tmrNhJRBR9Qqjgdq7frr7YSj221tjFbEp4m3LgMxMgiRrH58vdXJyPmJrteP3",
  "key41": "5pMW5AzMdbGQ5kZvAtvVRQENFE9xvLKTBK6nF8HaYudWQuPXnbqzQhPuvShhv3vrsK4bi8vMYS9SJFBdDaQP2o5k",
  "key42": "4zoEzJTmjmWDFvrJVoGM98BwmMegDYqqQBMbTAudp4HXQ9xHJFRBfdco2QSF8V8kEvqNrmZTRyq4J7hWx7YLoWxJ",
  "key43": "LbVRafHfwXxTGubBMV4b6dEcsmJCaYKFf4SKv8YzNdPV1GFtHUZF8e9gtbUmE9JWFkusAGcbUXP82NveQa2Lyg5",
  "key44": "5qUnm6Vry8DfmEMqJgxyRmFrMhyic9R21ygbCCmDxKtMXqbUQ2srGx5NmuELRLcNabDUWFsLPDdM4Xi44dF6UWud",
  "key45": "CuiWEzQFDmLzjQqgDAQwbAMtPRy8p7Qdvvjs2Fu4RggUZFvvd1H2ex3tVqTLQsUxpuVGBoSGdT1uYefo6p9Gq6r"
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
