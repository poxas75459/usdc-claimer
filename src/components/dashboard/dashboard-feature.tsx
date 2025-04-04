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
    "Xkmuzh3amaqTnAVpV5ibtDJkqN1Ns6xLEt7nudekaTZfMKvE8MSSToSuBS5ydnDy7dMBKcHMucj3jwwLhvWU6de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJGwajY4Tgy3RUA8mdWfXwJVrkgDVVKKCVKMe7vxcd3gZQ6PGQYWv9Um77K29pHXSNLKfzMHN98eJtFHSNKB4z6",
  "key1": "39jXGGLzMArUTdDccpttV4Y6kC1Q6aGgwLmwA5Q2Ts3ryCVpg7FvtkmN7hDj4DMSoREgoAHNDrbwPwzDHX9Jy5ks",
  "key2": "4LCMRAyAQkpCozs8SDm9FmHrs5TyBHc8Csy8fdNdbmGUgDA5DW85KYnHP6cP3szKZ6spDJPxXs2PNg5QkN8f3sQ2",
  "key3": "4ahNNvDvh8k3rAzD7escDpoWnxtjN9kkHVAABsvr3PvLbFMr4YBLPfnDZufZwigS8jTo67U38sFZZ5Ajoryc8SBx",
  "key4": "UjN9fDeGUaduxaE3MBoArKMnJrwikujyzCDEBHoFUWAkZ4hgbuYo5NE4J1nyauQEx7vVcecJdnA5MUtPVAdVkPZ",
  "key5": "54Mh33rwbDKJpcKsWYCmRGsfv1YTqwAQqHtkBYCiLWPz5QQrEk166AKUEhBchK2xiknygdasTrNs1hZbYN8GWx6",
  "key6": "26qYHMF4TcirJweoTcCCtd5z1RWwnCo1Ttotaz7BfcH6YGS3sjC1f9eH9zPg1kRJ1D4kENVysT6kVMCU2z6jSQo3",
  "key7": "3FW93jsVCgxkNsiigWftAuxu3TbsPr1yN2dqwrZGPxDxk2Qm97g5kHJYQFG8x9gW1HYSsQP72n1eexrDsKEkZLtX",
  "key8": "4sFiTxMTCySGgZ1nvsnzk4D2rJRVYzTGwG1cVfkXSCGbpE9NirhmNYmbpPWpkFFJBsj1wGVKLwrSxzXBAcgNuWzx",
  "key9": "5m4LgAQNq87QLF8BzsWKhL4yaVg66Ty5ZE9EfLuPU2uQpKwvgmWbCEq65Qi625FNTfpcL8XPsaES35tePycjL63c",
  "key10": "4TAa6zB6AS9nm5ZnMgaoaeeTExuXiBQnysqkfUyaREFf7pbU9cSCtfcyUQ5jKDZTag6aARnjykQnhL3f6LxDbsyD",
  "key11": "5AeqMrRq2e497b5dBfeWDcApJxhN9ftNyDeGdYgqR5DP3AwhAeViro57EwusHJcKMNo57V2JxS54DwmYDwh93gxN",
  "key12": "4Etm7vs3M7qhQPDzqmfnezyVurE9R76E62DRrXK3byfSM1C19fKZkDmmJNAScRWVtDCxEdni3eW8zEEsDkWmBNq8",
  "key13": "88HZEpQ6PuwDUwVUMvtzJw4J5Sd2KG44ef44bmmhFZA8MoHQhvQenqZvvHzQkGqVCiuGdZSPLNw1jesTHYbvAGs",
  "key14": "4yYexdzczY8GcHXJXjCJ5Wby4St2BYMTZKU9SkjDRq2raGCQ4edJP3fJvk5gGSkKGsaKFaAq2qjVakRFxMUky6pF",
  "key15": "vN91tLdivEpN3FaUtgxLPiCg7vBo5jF98vfijXfCyxjRu6jMVMT4aa1DGHW1rUE4zxqaN1CtBB14C1x1usRmMSF",
  "key16": "22WhRpxztjxrQd7XEvuGuwyMfLXWKif3NtGWs9AfKLCd2rr9KuEAsjpp5Jxc69jKhX7BcB332v5sXGpgrbBuz9dT",
  "key17": "3SaUwqpPqaqamkr28DKEJ5Md437zCKWDMDajS5eGDFwyE6LdbA7fM2nvsxWXtFvsJcpsBfRQtWFFZtJV2URaFmXw",
  "key18": "2V7jCiDcmxeWXDWVrSn9TjMG7kU99GRC9gykqmjopnjGtr5YH66QUV96xyztVoBuyLT26R8G54PXt6QZFRN6HEEd",
  "key19": "zAmivLeyvE4vxV8FrxkEGH8x9rVRBrU3WgSxUnbQY6Cet5SsBaSMXEGkMtxDphwyu8WDfb5DhNiGffN6X9fJvt2",
  "key20": "38MeeBzqLeahVuoTxt5AVEbEecVaLSDZjLjq6Mx4t8NapoV4CiNQCY6hq8yQaJWECUJcGq8tCoPboExP5qhqG3kb",
  "key21": "5we47JU1k72ZWucU3oGFD5iU16v4TAxHt9CQeL4PxRns2Pmb1LTmyGJUTqTZHo4Bs6HSqAHyg8VKkNg7Pf2irv49",
  "key22": "23vhME3M4EsfypppVUXWLExXf8b2AqrNw2FJdhxe1JaF99MiVCFf682t3x2Nyjt1pdLv46CqYqLP5WwQzk3Bo7xo",
  "key23": "3cpJrVxYfCY6ybSdKWJuHUfais9TqXnsqqD7jNABGmGpHWKFn6j1myAqKA7taYJhsSR9duMRvMnM6Pozx1mjWdt8",
  "key24": "5FNiSSdZ6kERqaHLmcaQPU7gyup1ciJidhh8KHqse8a7BjVys3H2P8PeLTrBggtMb7dGpCHMAiCwUpDszhae7DHz",
  "key25": "5KmXbANorsMCsSqAkgSsHQ8EUcWjbqwwGXNBiMDm339P85HvesWhgTVAjwo5nYVkxUVWo195KJjpdHqi5VEQyGay",
  "key26": "3ARD718u3vbYNNNNNcsBDLYunJQwAEDWeY6V26Aw2y87pap6n8M2iTsBCoPWmdpKgLAPGofopbUkrRPjQxvhSBGj",
  "key27": "4a6qAga6nq8rxxuZDcTuX6dzQfrGS9a1g8oofvw5zL1T9Ni1NHNGARK8PjZ3SN9irWrzaNgs56JgB4ixXvgqK6NK",
  "key28": "5StAm2jAKwmbhF1YFkMbMG476F9AWeE3Mc3hur3yisdKcjrMXGzg93akG9EPGfQnXxCr1kPp2fVYb6qK6LvMN1Uv",
  "key29": "2QXGsUNaZnfPrqnGhK3UwrPjJeQfLKT5kG9V5EqZP54sji4FmrK6QZEXHcoLPRhr1oB2wqddRGa3ZmsnXV9ERJd7",
  "key30": "2W8uRBZHX7JoNdUy22EDPWdFRuGzrbBXirys5xiWjUmJbeC2qHk62s2JWQZ6N9RYVEmiyxYcp1zFA1fyWsDJFgFt",
  "key31": "45EnWnhXijFvvtvxwViSSEAEpFJtDecXUqzitG4RJHa3X66RvX2Za7sAZHJujoeRWiYSV8H7nQWEbHwoN6fkXn3L",
  "key32": "2sWyjTXV4WB7ygGiJtJVqC36dfJQuiBkKxmJtPwLsiMG4Z9Wa7m2mgFaMnu5qqEhGab6LiLfFvPL2syPntZcekyz",
  "key33": "fjPNBkh5SuJGVxM1yG1GPkpnKhSYkcEdpPbdrdVhbDumB94DZimx2M64qkmbCTrxXMZsMjPwYgu9JE5YVcYoMii",
  "key34": "5Z9nH7CuEGz3KQrKi5ERbATdVWrCua9YbFRETghSGhiDdsLyxrGbcrPt9ahn2wtwrXyakNB1716Xabd7L7j4XkxC",
  "key35": "T6Svy5ViPfx4H7CtYdK5p6vFXFSK4JUni3Z464A6ShbMTTGDEw72U86iTsug2XK89fVDibCuiYXAmL6Wj4TFNeA",
  "key36": "298ounsT2dQr6yCtjVSgr2RgmDFQnewrroKn97QfEWnysRFrd7s9fSqYt9jfNBiYtfUHkzzpjHzHJ3FqfqdKybJA",
  "key37": "2pskaYoVwW3CsCztpLjsfCQMRneQkXDnMy6CyKzPDrRnnvEtC3q2rnjxQURcUSGSvvn9YboS5PxrJUMzofj12Txf",
  "key38": "2q9mvneYY7PkpotWJo82iQMLPWe6R4KTDrzkQnZC2PwM1PxpjPSw97M9nLEWJPCtJQRVFKoUbdSABGJen8nKaLkx",
  "key39": "3CbEH7V3Gunx8X6KaKRKxooseSymoN5ULmLCoPYuBAqEBzrCSXfYBKTLVHdsL8eFzJSa6nf1FcuVsoP9iQTWRRa3",
  "key40": "4caPYJs7z5oTRwsNJcvRtckYHLENsWxPN8MmmwRS9AjwAgApg1izg7VZ363k7r7Mkmj9h67wJRLgbB4p7ZqFFupS",
  "key41": "2QSNh8GsmoASMsdv3p8oz2cDZzPkDg96PwYBsYUcDgpsgaYARBWCmGXPcXiqkf5bN1bknHVA4CaCt2kuFmXh5utD",
  "key42": "5hqW6VhdGaBuGBzspuMfHZymQiTeL2JxkJhG4bzUhTnFQT5Pa5sTWubEzy5wgCVdhWMej5ouAfCgdv4CzGwv3PjG",
  "key43": "27iJRe9Fomwi1RhWSDVSz3LRdDqecp3KrLfR3C1hWGVh9qhdXwn9fCpjmQZQ5hSuQGDCNnfT6fPWpLEWM9cVP9TR",
  "key44": "5mwnsskLKw2ZEBSb8xn8Npf3fmjmocgkEkooVgGrE1bx1rKQ3ZwHxupSLwRGLekRhaku6EHfarbSFoKrte1kc8Zs",
  "key45": "J9XMNvvejZpi5BjeF9ciBDWhWcSCkY2MkMinz1Q8rKdEQ3CezL9Zz8HLubgQieNMXFNDVUEhnLsVWGdGpfKD1c4",
  "key46": "32YwZXs1prwTRwyp8FM3SwSBMJULjwkEAfERsZZ2q4kMWPMeeGf62B1NApRmj6PKzjh8yZNL2NfCTqzrn8bXJnTV",
  "key47": "3sAyV5eDp3nVoc8dNNqQ58SNeSdTpa9uG87BgN1H3FNGMjXckGb47eHdzvRDnY3sQRGWD6fNn1ewi8qH56URHrDY",
  "key48": "3jUm7BkKe9F6CKeL7SZzXdxm4eG1WSWDgfEYW4SHto1famXBcKY7MrrsMw9Dq2VSVNjRds3mcpsM46Hi49HttEch",
  "key49": "5YCHbqw4Xqoqqy7KG1Spbnm2pV8qiKVFfwxDfcYDoaVc7cMRHDk4Rf4jWp7TMMmRJZnrwrpiP9qzz8bT28MxJZcc"
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
