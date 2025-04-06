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
    "31RDhMDTprq5Roqkdqxans7cvD9z6jVmxFcemzqzK8mB2aSFk4dwnM35ASVbkN85qj51Qcp77vgmszu4Nhj2GZa8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BatNkhWYsRQwpop1HRdHt9TbMYFVJj3miRecxDGVKeHVWWKKNq5Gd1yQSxT1rcb2Cj8tdUpB4U1XjGziFoKrP5u",
  "key1": "5C8Qd2me7q9S8UNwAtmSRVTL7aE3pSnVEDEqYyjNeSLHPg6YaSG5kJCTBqKaW3gxG3shVdgrVSJApNJU5td8iAs3",
  "key2": "3zQeAPkq7HNobhQwHUXEup3spBQ1EEXXKr1Xz1VutXJcztfKseYEta3tqGNnVFGXzww1eK52x4qkqrokheB1gC4X",
  "key3": "288G3caEAUHaBbfGKjC87qtK7f512pUSpERttxLbP3eHo1gf9We4pDjQvVo1RND5au8mdVyh87QH21kRBNWrohM4",
  "key4": "3zv6uDWBGg5kqnv6gKjFkmayzfGcTKkEfRTbNvE6HNCjVB8ESVAzfrWVvH7cKzDLvhwBwGVuMXN7b48Dzyb48FuL",
  "key5": "2v2ZV8HNtHimEHSZTfzJgtXV74knyCLZzE5SXtNQYkC64bcAcFrn1WGkLspU5ZBqHxJ57uYeWjp4FLLvmhqRd8rk",
  "key6": "4uUKcQkeb9SMeG4H2gDmBhYfHELG3bjqAH8LL58QsCHv8xEghtMTTdqovWVCha6Jm2ot1F2nX8ZjPyRAjaGFmAs3",
  "key7": "4JCD3bcv7JbfcnyAxoX8neCwNqjdenctvrJYdF4FPnxdmvqoi8H7xTMUHhUdnAJgMqc7ZnPsLb16jVCHcCSUv4Pp",
  "key8": "4M3F4YUaEJXomhFDk3GPzn6VKBM9nCQLonFPghA9DsuGjbKz5YM8nvcERsddwJxMD754hvv5vVdYdnKqBeA5ui54",
  "key9": "gCafzggVTK4LJv9UPbuXbTEzW4cu63U5jVvAt9zbj2qbuD3rNaVrttwn3SE6anniUGWqWYmB2HzimxNYfWuopYD",
  "key10": "2DwszzVfidSRdKaSgdBX77T8yXaXMQvGdUmGRjo5TfdYLdxUtTLywwt1C2foUagV5ppQe6hw6yok9jzEmtKXCoP2",
  "key11": "36hKBjbeNNAL7KxLV623MxVpHnv6sUWCEZJgyNKBDvoqKqQDikrwUDLSGuAFVFBVPfxV2SkeAd14ej5nWibijAi8",
  "key12": "4LQjSS2Riv9uL48NRYbCGeVzxCWhyiHkNTTZ31Cyu7P8sSPwfSXp7FWrbow2Ts7VWiHmagxHKAW4GztxXq5SHMw",
  "key13": "3VC8T3t8Kse81vcVWSYn6XxVoXgHGftJKJWsqb5SurG7sh4DzPUsJLKNsrLSq9S7yfBcW3h7jyDfbTdz2cbQgWQp",
  "key14": "4emWp2R3t1hidmuCGKmpzWkgCynRZbSG67TK8SiVRB4B5yuRGQfto3FCPRbyaM4nGqm9tUGWKYqHqf9nciTAQBxC",
  "key15": "2ttvjEeaFnrsbuDEaUVsPAtoYfQTVqLiYPfAKF557XtftzuB5tQnUprN5ZmGowk6rCkdX1joWRrJEeU6yX2D8SbU",
  "key16": "67TsBJF5yVrw14K2MrmXTZScM3o77QYuxXUJAu2RhaV38ATuD5pzTcfzTdJqsFvWmUY5zxCMfQwADuWAtBWWff15",
  "key17": "2VLFJkp3iVsvRDf5nGgDm4krRs39Amts85Y8GCaDMTAgsQ4afMaNecEdyovWeaiD1j6Y6DXg7HB7cdSAjEdZRrvj",
  "key18": "dZeDgEdxpKHjwrvQAoutuqECJkQ4q7BgjrS5AVgn8vx2zP9pVqXW5LyN3fmuYcR9Qa16RmFqakaVFdTitt4kmQD",
  "key19": "3uFgeHeh4nhnLymoyspvbeZnjLR3LHMhNL6ggVEQYCpARvSo4mfLYAvpMvNZTbuyRaUDoAydLxTH8QXcGkkBY4pZ",
  "key20": "5ih6GoAQZ6zikiKWFQsUwD42Tq1MAz2pgmv2YybaJivCKXNpKNE7UgaAhbD47kj1vb6rnofBB3rYectdvvZmu2fm",
  "key21": "4ic7SRW1p8WpZbveFsDbGNVxMtMrzSc3i5YPzZhEB9Hm7Gf9yrwNocuNeKXyjtDksGNTdSCtLYGpHNpUJvsZ5tgU",
  "key22": "4Ju5kTehGiqVrr3JDA8zVWew6NyfsWZNRmzuTi947CMVUDAGSQ3mMno2XV6vLyoXw9TUowK2CiKHSVrDXPu4q3k",
  "key23": "2JAkBZXcHQP7KXWYfP2tZHny3CBpZqj6q9VhRvPYVAX9icxwNF9hZgXabvGzbUNo2Zz8p7k3ZFFPGwtC32rTevr7",
  "key24": "hfKtetSFPMjaATzHSdYAigFyYEoL2UBBGpANDDcuAzAeeJNyef6Qnbf9e81JduD7fqJ9sgJ8qsAZ198vejsEkN8",
  "key25": "4KTusvJtczWM6jxj4AKEvyFDaCXz7GRNXrFLWoBMUDrvUWnuH5kNthTXnAkEujJCthm3DgirVUXx2Kr6bHR5D5yZ",
  "key26": "367YWhh1qvvZNLNsTAKwmu5C5qXPscYqKs6e76PEJm7A5h2tjZgSMXNrnU6CcVjLxxr2dCqSym82RzBZkwjXCa5q",
  "key27": "5ZXpWV4oXnPVAVqNrNTqdoTzrPUuZK8FFErj1aAT8AXwbSQa9rFV7PfiMGmDKQnPCxVrWJGnNuzatYba3d65MpM8",
  "key28": "5k3z8m8fbCJDXx4oJjquW6dr5KvxChBnM12T64BACBU1Mbm8JkF1GchehWmQr5WKVJ6f4TZLzt6Do5uFrLPmm9DK",
  "key29": "4D7gAYTYERWHRRPhrgL386aqi2yrpsqk2Bj229TQNGT2HQKptD5EexUKWxSFcN14rAZW4nzuqDCQYkc5dijD5YrR",
  "key30": "4Cb427ivbzxpvvzM8V75TeYJLnWzfqWug86nRmNXzJcgGKSyKCnZ25PRtN7uHWjNT1bsdLuvPwiQAwDqWbFzwho1",
  "key31": "5zPAGcn8shsutMesuWyr5gU2Sk2FCxeUmeFTpvK2pwX1ddt7EtA41a3PtbXpZ8XbHz3wutCXcZHVZqDUmMfoiyUR",
  "key32": "3ZPZvq8icsQFfmCdbMhALCg5mVvuaZeJHessucq3FRYUYJoEXJD4GfGxpavv8gr9KbPYmk6LBYPAtKHgfJx8b7Dp",
  "key33": "Jp13UwNTpSbX9Bsr937M9EuBtoCCyXmZWUMtCLsmVeh5i2fJreiptZyVASLKFnFCVUH52HYAZCpEVC9jnzyGX81",
  "key34": "5bPytceYfCc4rMCsyK3uGkA6fvvRmAp3wMWaF97Foo75cbcTz2rJGyPh2FzVuSLhNvfhBTATRPXdwXw4MRvVceSY",
  "key35": "4UEXBboHpwhi5BLHkv8E6GNUfFq3DjX47ArYQSCj4GVEMWKXABYB3T9DPVQTZcFNiRr9e2wTTNH8W8vsby5wQKsd",
  "key36": "5TTbnKuqtt4GJkiUwvuxTqLkMFnDbnAmyS2KE2xYTTWkVFbzJ2G9xTQM91gUBqp9dzz1131KC5LfbLiLkgpNZw63",
  "key37": "4HEHQFWSTCiKqo32MQCzDGeBhJYrzomtnmp74epWsm8S8iNnamCgDV8daiupWdhS27yyxnqts2wHdDM2T36YxRtP",
  "key38": "JkktXv6qUTsk2BZrViweDDqrowXHWDjWZieaqMoUVhMqyYp9kYGuswZitS58BJ7nQUWWqzSKZ7oQDF1zhRo6uPA",
  "key39": "5vpU91B4Dhh3Dw86fM8CXw2oa6Nt1K1oDsgq7y7W2Z6MQCPpkxnJ7cYUNK3fd4izzezCpxGnpNobL7TvexN7UR93",
  "key40": "2kCUck5tW6rSw1sRGJZKqheJohV51f5z54aEUneam3UvhCmDKczB2S52kuJdzSVE83AgXQuziVZA3du2nXHhCABe",
  "key41": "3q6YNMEYyud2vnkkWZrRhMmGbmVFe3KRZDjZiCaVfvJeo9bShjnX7DVaTpfksEVvaHqpY84doS7eKDbRdnYZE4RS",
  "key42": "BMRmuUobFziCaMUNbWEvhqDTYNRctUkWJNVUUwE5vnUazHV13QSv2EqDppaMNRcMznNuvzwWMPrQfkLRSY6SJmC",
  "key43": "4E6hP27rok2GDDoz6cgePf2GxyMw7yfR3yFCWHbTN1HQiykDTwb6zHTab3yiFkRaEQbEGdEJYM8tmrb3EddGQFWd",
  "key44": "5ZXjZJGiRYMP4MbDLnr7LVR2as4WNQMfPcdx8VfGX4Gwdo1QsuAvixV54ZaUtirCCeYQaJGUyF527jzcaXFZgwdm",
  "key45": "5psBSoTSMHQfSuUj7mD1T7rD3QGCGs1sbckvCbEasBirjjjKmsmT48veqxcSVyxBbCjYUmXjG73rhdcGM7hmkb8f",
  "key46": "3ZfTKVAYqF88ZNnK5o2xm2WoX39JWM7V8DALuUDzHrsiAbyehPhdGkxRbeWdEPU6nV2sGVu2upAsRY6MKs13LxL8",
  "key47": "3YgkAJFUUq1bdHT64VPE4dugGYQeY1ZL3MgYCXecs7WS3FZqsnFEogRRnM56rqg58JwWqQNsfDz9wDSPaaG7pwP8",
  "key48": "33V36WsBGqsoEb4EzZKXXtTcj55P7YHraFAwGtKUJBsyeJ2w7gdTU8TsHPBrKtCKfp7fJtPjRrxSqaPizY2ZjHuY",
  "key49": "67Mr46JdQJS5j6VVZNaAYHq6B8pu8pyTdBpk8WVtmhuBtycuQgLNGc73bSDSDGDmB2Xpz7NTzmYC8N6iyC7RhziS"
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
