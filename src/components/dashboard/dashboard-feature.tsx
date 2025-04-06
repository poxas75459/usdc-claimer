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
    "3WMniVrr3EXu4Cf9cn1E92vpFubpLkwS76exdEZLRLXn7ae72ouogFnmJPYfhCbtr1TpVn4kJQq6inzq1w8P5ksx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k2MAmgXsLrCbCfcNpaJv52684vSt6nhzUayt43S9oeQd4fCHqjxjzS8CAdJCcDGNUCeWRspCnXUDjwEzyduLkrP",
  "key1": "28JZiwAZ5vyvm6frLMREAyP9vopAPvsoBnpiPHh79FvhkF5THEdA3xG7odk3AnaHj83uYv9VP1ffZmCHwgJvPeYG",
  "key2": "2sZuLQVKRzRFrNnqJrkESr7Xk5VfZ4QotKcTyaAnK6eeqfm2ztmowBTYV1PaA7qNt7xGCiha8DZhsX3Hwop3fXC1",
  "key3": "3w8GFkZgvWVKYzka8ZCCE9Frj833HX5FZEbQb5BpgVSPnpKNf9mwkGfxJk8WHJCh6UHkFVzGLfznjXryL13J2GDj",
  "key4": "2EeyuiV1RhNWSZB4ejktGygQH8hVquHo4QZCBfej9xZK22oVm3EJYLnh36AWCHArDzcxKeBnhimr75RdM9zvPb3E",
  "key5": "hggPwNVsC6LUN2Ah9dCdkcMGVyAxfu44k8CvBcNBKKEA3YBzYCwi6igCWBfb56CMM8nTHpUyWeP4RszminbCccZ",
  "key6": "2ToSQvSwRFhhHCt16mKT7ezUFBFEXXf1CmY6nVKBEP5gkH1H6GnwnehJaqmVmR74dBh6wcXEdoN5mpzKK8JBgHof",
  "key7": "2r8db8gSWtujk7fhuyprAgogofcxx1nNnSaFb3u1JSwvidnvcxewMuovxyPaZjZ9aapTZtTrLFtEFM56Ci5cpYku",
  "key8": "4LqJLA7bRwyGy99KBuGQBjYjts4JCAimqiWmuXT6xzByE5etf2CnLgNoQXuoY7xsFLfKNF4VDMh4TCyL34LvH94o",
  "key9": "39kSezkurUV3aUZMvd7Z3sWYbLowuzHGHaNCAShM1PrY6SZy6fEAzJd5uLPB3yKrpvB457RyugiRt3sdNd6Scfwt",
  "key10": "4Y6K6oQPaWwettpb9NxgVM5z1HpeKfth6C6ZKvaGyJz3qwxCB3aQUbwFMTx6UoVGWw44nEEkZtUJTnjKJe6s3Cgx",
  "key11": "5WYDtL3FrDzvFg7Gr8AQom7HquKsYd29vG4o8f9fpaTVW5agD5BCzAu3XU37FuH9Z37Xat2N1RgZ1dgBYPHcoc6h",
  "key12": "YKvynXp5UuFdncKzLUHFLwtTpgpkAAYwG7XQggHbRTQBAng36YSJC8HPtrpfdQy7Gk6f435qNcUwgQTmoKfMj7a",
  "key13": "3ektPdZBmffFkBVqrXmBpduuftgh72n7s3ZeoyfjWWRFYCCeGLjdHuJttsKBkAimwMuPaLwJcJEtkERpGoe3yL7E",
  "key14": "5fuA2HH4rZBBFQ31KXL9QLxmn8YABs3p3ouYCb3iFDRnt8Q5vWHxp77jXrkK4D15ZXSR2yx2Peh8UDyWTWTnFpxT",
  "key15": "3kf1ELBh1UvVGCUjJQaouFjakXTbFNZPo1jaqXVTDwxtM3ef5Q26KNF9ccXvVKcWLTXutcWBrJLD6JUgnbujwCxe",
  "key16": "2utTo6ric1SLM3dr5JUL1yavg2nJtfCn3Jc6qrhyRRWqcShcbMApgRX4VDsXFgLmVdjeFhjhoQK9xwga1hGxLrqZ",
  "key17": "2ycpBzj15zjoBYePcFo86RBp7hqUk9DL4ERwkr8EhLPc84gmzmDSGFSMq5cqNfmcgUC39zz1C17hJpe4onKuqFki",
  "key18": "2Gdzuzc4nEpVLB4HaenjEfVJPDfvhjB8WpxExr7i6wGijne5FpGA1HC8KBBwoxFkBFZVqYUou2ndXvBzufVGyBA",
  "key19": "5XAvtjtWivxNVuoHBNxCtgCyturGHK4EZgtkaGf9sYChLDTJaaenx9nG1Cv7Ey1zEH6gCRYDA4VgskdRdpvXP195",
  "key20": "2gQnPHFjv8Usrk6AdXs2Rfjjgagrd7MeTMYh5ENRBoKQHHnmN5YtH1Y31fLAzDRSfnEXdneYGyW6ts5C2nZAm9t1",
  "key21": "5VEaknXXueMWikqFpq8yCWvDchN6bgpgYuP77jG2kKcnSqJjz3UPZ58pYeSdbp82NtvNcphDEJfrp17criXwcYoN",
  "key22": "5hKfPAoYXn3YoLBrXNbQjeG2MSMfGUFepCn8wG3ekTkQzPUC9jQwUWu4e7ASgh89WD3gtd2gxAb47hSscBJWbb8y",
  "key23": "3vLyqdrQxAoRsdqKebLT2gdpm7ySJ9SJFuigkfzomuTGkh8mh7uV2h4nFnvbSePALUaazRbLDXxGoDBcqTVUwKf4",
  "key24": "588whPKFYKoAZAueBTcWBjtdYX4qPuTuDjY8hXT3ytukTxxNSwrttv6gAT7hc1oppCXTgDyQNLtwrNxJktWAFAdi",
  "key25": "5AFmoTmvcRinbEiyGX2HJnaQKXJP2pduWUUXRZJfPe95onLM4js5cxCbyxNeGUqV7wxeDSDZLj8X1BxDvQR88Qr",
  "key26": "3WR3ArffesL2YD2KVbQzP8PD3XNcqDKWde5KZST4xArE5zqacjhNxsCB4JozemLcBGfjayXSWdFR3cFx3ykd55h4",
  "key27": "2QUHBSJPm4jkSyYbQTpK8cfMvuUaquhbkxQ7wM4jfDjpVnHwaTzQqhqZFpU1GUS6JzSATxvpmzQW4JYtedysiaUR",
  "key28": "2q2Es29nQCRBPNQUA5GcQy6NqW61YDWChz4etCk6XjeUs9D7yGhWBp9ZasZLNFT8Yd6i91ayfGtXjRfyuPQFNKyX",
  "key29": "4ZsdP9kwWknyTNePpZk5THKubn2FT14udDB3eKQjqD2NYZ6NtKpsWx1GKTEqXnKViyi56doYREsmmMU7TRatubM4",
  "key30": "2ktnG6NwuHxdo9WJ2eSxSk8CKNv4d1owyqbNADr9kU6ez61mqnX8oroS51p6FtQa4av2oBnbt9hcvm6vHetKxc7D",
  "key31": "2QCCh9qmvt2K5UZRLcdmfEiVR3UAbFnLZHaccPfr7zHnrg12fKxX7SYyUnAKBX3dueBGmV3aEeLeseU1qKYT7GMh",
  "key32": "3h3oqsdjViA5s6Rr2EBYneP3yMaVbkXrTdzKLBZpiE7UiSj6ke6n1Q7b4q8SnvT1AZvfQKDYHzUK4RW3ysZAsEVf",
  "key33": "5LwZKjVZVkpGYwrpuQvTBQK8CaW79NcSPPhnsUWyveK76LKTxCXaKdAkGQmqWSK2mfJq9syeaAFy8wuuq8e1Xv8H",
  "key34": "3VZUSALd6DDJNxyqzxSHXHcQBLXVuFg8Fd7XPCHJHNnFs37jmjNtPTTTKPyETbg7bJcQ5tRC4EHgbr3Ad9P19WKb",
  "key35": "5VbU5ifAgGFAkhEJ1QMQS9cqTBxagJN83bUigMyMao75t8VXZctddy81kZmN5GViyWAyLDnYK4iczN5oVoExwrHt",
  "key36": "4P5qrGPobkd2qVUW62UnEwEgrJBLCMRChApj2KKtUQcxTLKyRxeyG5R9Xbej6AfCqdQd94Gmmc2UKgvc2v6eVdfv",
  "key37": "33JHfZXDmqub2encaqhPvgY1XXnEGQXogmDWDyoyv4Zp2xwZumGqGVyYMpB2121YGD33KJ4aTy8D8HFwXU9rNWBL",
  "key38": "4bv1i98jxGMZHB6JfyxTgVgYJco8Qw1DpxWquqFNUXuX1sUs4CdJWsR6JrrrZTZUanuVH3k2sBBP6qEx67jXfFM2",
  "key39": "4w7RJVBTK7NCrhejvyD2WPimLdhSncQ9C897Va7onCgbSLmmJiMsUMf6XvYd5ESu6VxvyMwPuWunexUHjPGNuJTi",
  "key40": "jv7zS9BEZByecgYGce34QUM3bYDFJCz9bNkWfFBGoV4x52hxec2mB3schHf7a8KmeWdUzGNDspLq9mFBg1aM3tc",
  "key41": "5vA6H87r64xPSnp3NpZnEFj9TTcbNadugnPG1TrfDyGBchsJdrEexnEXHKPeR6ZLURWFZLPkqxsxwMSM6QsY9xUY",
  "key42": "2XQRYU8nGSxZYZRNj3XmdS2XMpaepJ9KD7wi85yvr7GV4DmzPbFTNTna9yj3vojyHWDKBgGemdDDCA5GTysp2pyT"
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
