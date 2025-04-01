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
    "4TomV7asjSfqyCdRB8smgGG4Dm3uyk7684NQvc82G9b37zosFqKpD3tBbpkaddYcyM4MWoBu6aKfiKuSfCRRcSW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZEpX5W1ee4gJcsdsZUD7xvvvBosgbSioXZXaXByBfUpVcgwLnoLgAcYkDVHZVqohdbeJY9xuMc4xTypMQxWvqJz",
  "key1": "299PDb9shwR3D4ro5u81o3SSHANMK4RExKa1AjyYJBrLdnSQUDMxGkEhWuY1w8zG8GRoV7zhKbwvF9M9Dt4eK1WH",
  "key2": "4LKEh1LWudtdwTMipJqQyPSiDUXqSTKxxKxn6Tqc5wJXeWwdWYCTNqYzGCmJ6fYRVoTmDBfzi9SBeNCRAevBVVL9",
  "key3": "SEUoghNfU9Rk2HjVsng7UHWWBVjisaEPYo2ZTXtrKmWAenV9PYayUUY1U1FGpmC7wSmTKWsPWX83Y4ECGTomrxX",
  "key4": "4vp17N6qD3ayinkpQYAESdJNwcdUxjftC9r2JQ99w2Utera4bJiQNgnn1i3is7oao37rFqJaEbLzRR1BQQK9ku8",
  "key5": "eATLcLXTSL7dSXmPRSaPMXSUJcwJDQu1TrgSVP6WhKU5zz13jNm5V6mGX1WhRsb1Bc9ceikc2c1y1PoaXBmkyxo",
  "key6": "CMZ3wrj2ArX7T1csZ9nZMTewMUpy2nzXmzpcwwry1pDuEHYk2UKY8EZNwpAiG5YKr91C5kUM18Jy69XcEuAoWUY",
  "key7": "5CSci4E5Nx6S5fFngFawq9y1cgSF7mCcdhipNG6oAgzw3vwADqcHuNeGbZ4nYb3HFCSMUipR2fqwYN8MoECCJZgC",
  "key8": "5HmAvaVKweKVphVkqqo4GboU2v7XhmWwczBMKpVXZZyToCGDQQ8bySH1ddDKfeMsWvpZRxaK9YmaAJYQqPRmqYKX",
  "key9": "4CGrFaXpVQkYup5qUMrFfbFBqSqPfssmpSNJMtz7iKeRdrANc2ifnBfU1AfMLv3D8AZvqqwhMmMHDRchUAJBr447",
  "key10": "3T29R8uRTQ6ZW8GtjS73DDTWyTdFDL4bYVi9XNBMvggq9JF3wTGFo13TGBUMnQfZf44Ne7m2mLJ1ygS44Hik13Gv",
  "key11": "iRbgS8KH4AeZXw4Xt8eCkmczmDvvsw9aEW9mEpKopXrZvnwk82ArCfcgs94jBgnJLcT9AwArPrczj5r6f3Z1yMY",
  "key12": "EuzWZVjn1PD5rfdFuzaz2qvUUEjd4eABsr2VMgQkda4hg13VdJfvq48Q2YrwtiXPmcYo5go5Cm6ukWgR9nHBK7H",
  "key13": "5tYtegPNZoUra9FEvrKH83TpttpaKYTNCcaE49NiBTbZmWySD6TcRCyzLECFjensdbt3RzTegbTqEfgLsCjQEoBe",
  "key14": "4ubCnqKogkSq2mJhbbzBVv42R1177X8gqjfiHKponwsRjCgJdhEGuBxKfgv6xRwXdA6hQ7tsM5eFvt6MrmgetndX",
  "key15": "3UKmpHdiqmJr3ny6eZwJeiZb7wKkn9xofiQJD91PkGemw3mEjsdth5NfdDua8mzdz6rJQHchvfX6gDPXVwde4TLt",
  "key16": "2DSPKZuACE4b4WCmTJPhQpz8HAh9HLP3quFUQRZkwk7DwgkLgFLNtbjMAcZ7vzE7Rv6SpPQ98jjCDbn1RcMrmJ5C",
  "key17": "5CeM5rc28DSLbCF7TcRPyVaVyhRZDSarMHeMnPazk2TwPF3qagVa7ETCK2B8Pz3nPbxJTrHYmmAghKN4uGhCD6nq",
  "key18": "4uNSAUXS5ThjDBpdCDes6SiKiN8s7STBGSL5TzR4idVD98sYVyKgSP6FXmZKNUEFm3b31M2fJnUhipqUStpTmZVS",
  "key19": "3RxtpjuGetKboCkrUnAHXHvdqaozik1gUJMuKWGBzUHR4YxMspXLK4Yj1EGCgo5r8Pro4VbKyF16A15GQR4Q2YfP",
  "key20": "3BsQJzMUXayrtRYVcAxAorG4oojc6kB5tvECUu4oB1aktrbZj2F2GJmLGHbwBzRe4SkTrzK2pvJ4fosavFPUC9WB",
  "key21": "5bkiYnx6u7kamuWjuSCyTsUhim2TkXt6nma1wRnxq1pPMDNKrdwvUvVbcLMFpyq1vjp2viXzEsM4ubvYco8z87UH",
  "key22": "jQZ8UvLWpTPLt5BxQUZrkDtCmWSeB7MKpvhQ6Qj9tMXDvNXvHFTMbENfH9RBFmG2su3x8sxNKQj2DZ1TMiW8uNw",
  "key23": "2ZvAbyiy79PMkNSzqH1Gb6JLdBFKHHQ91qsFh9CPW8yoCQ18jAKTkDBikkaHgK5TcXTbEAr9sWt3TwAmkgG51WDB",
  "key24": "5XR3f2m5MADXxpWy4e2xecCqJuVRcBNXowMXgBXe4oPHhFVRRH9uTKfLmLqPvGFxJcCBqYDAHsvp7QR5KQTkrmvt",
  "key25": "4s9Yvi2Ry6dtk5UjawTNbTYGWXQPzawECT986yhHgCo5YezYVpWVQy4DFf8ZFbZo7eYa3gMokv66EtEZkJVHPMpd",
  "key26": "33X9RknfmL8mnBLGQHjkWHzNXDxLpP5ECs7GEwKfAP8DqaZmFrLKXc8GUt2horX3P7tWXSHyspMGGChcfgYmkRoF",
  "key27": "31A1kK3xPRyHuWSGFkZ1aWfbRr8P4N7GGBjkTXhxeiyGacLn9tbc7cgS2girT1Sxd8xux96HdNH7rcnHJffyeyRf",
  "key28": "2gJP2MpyDLDFpFN5aSNQnxcfYJDx2HnZLJBMrmkoL4asHTd6g29eYQC8WcLwbVYYFF792kewxEHdJqQK37rVFuP8",
  "key29": "5irP243CHsCcteKikgPFwAX4yZk2PzW45P77qM6WmQMtPLk89eiGLB3YrT6MZhnXmueS1CAYLXc4H2R5S7PyV6aE",
  "key30": "oFMmN6oBFK6Uoi5tUUBah4kNJtnRkvCEMdToszetGRNNvi8akyBhNAZhYbTBGwJsKepK9AcNeZhYzqjhocEm4Ce",
  "key31": "4QTLF8vXiz16mUF1fQ2MLQYSAfh6qM1AWzdzD8cp6q6AuW1cYYawyTyYRkHAhoC3XGyPCFQET3V857iPqzxuwrbS",
  "key32": "5ACcUdYvN5kczmY1auEq7wpQwAD3hcHhundasGLkPHXpT9N3Q6KNsypDSKSJcEM96KrxxV9wuu6TPp6GLMRK4mcP",
  "key33": "d197SpLUvU46zyiZCcMF26jwR6KpvjSjCAub12xYeX6bXRA5Ke4XFDct5TDipZHafr6Qh5zVW5LEMFYubqNaLn1",
  "key34": "42pXp1ZEKGfYD8tMySZDXYFKyowpGammrMK3JeuYLvqQmVaAQFkepYjW25kHkBwf6GyfWxFWS16pb9vN3xRCCYS4",
  "key35": "3Q1q4VovW1xtvTH99RZAHzd956PQHxpcNFFSCZtLmdGLrFYf5A51eLTx6SrzGzaiUxx178xGaZ5xxrB1gGbc2YHd",
  "key36": "SVSQAKXTSMRctC41N7cAbFGTPvbFY4MSGw3yBByNMbe5M5SccGYnNXUcyLYn6Vr2NmDP8M45nbXSd7wmoNZez9t",
  "key37": "CGAYBwGgp9TDU1ZAVUEMVosNpLZni3g3ufWjJcfggRFLZdSoLbLvAa9oL9rrpFsWSSYsxWMgxgTJ5KyLyMveDQ8",
  "key38": "5mgUxngaJoJF2mK5fyWgXkbwfH92wdYeorRS6Uo8xGtW1QPpSrRNJpj91Lc9NHzKgUmZVA65CBmi8oHzvuqPXshG",
  "key39": "5Yk1kjA5BdA1YERM9Pq6NBSXDisb4qhX8E2qXKLaZxjKFE7UdiWRM7oRYtUBBToYBn1mKV58XfKpcj3zZsi6shdB",
  "key40": "WWoNZ6PPQHyre2Tu6opLXsHFfvEXpnGmHW3Uto3jPpuhCgmovWwcpxBtDChvt6GzUzoWMUVBwD7DgdyRPnTktZi",
  "key41": "4DdJosunynwmCY4yQgUaL8VuLcgQMa7s7xPzHCiS6bWJxJqFvpYpUUBjCrVgeyJjhBV6eGh9AaxvM5we8wNtXV2K",
  "key42": "4YQacKJ6EYjLwyuki5DVUHeAz6GUDbxrDhsdCoFx1mjLpfW3HeyBfydM2LRX9Nc91WwU8s5VoT1vM3Ep9heaF8xc",
  "key43": "2VRNvViytmrCbr8GWZKXngYUciFNCRFtSvNmpAZio8y6nJH3VoXefu8nfaybNL2SgYySAb5LG2cTUXrCXfUMS18n",
  "key44": "4FRUiMjF4gBu6ujsVLUw7RmqRCoXnFut2qeiMvk5mf8vAt5A4xYxv4TMFAkwVehSsC6Fa11tZFZCBzQBk7zxkNXa",
  "key45": "5PhZcWHc7gjXTyGfmMbkSao9zdXt1BRLZDwaViT9qh5jRBjFDxVCeNTEvZZLGrRmE8oeEww9UUW5vWdg9gcy2ajQ",
  "key46": "Fx3iSY2R4eykwZ4ZGMeKYCgoKrC59WvpmcoWMvGzvGefY522aedinWEa5FdYPVSihuLVyDETwtfSb5Q997DvgzB",
  "key47": "s1GJwEAqZhtehQm4hs8YorM2NvFS5VfuTmupo6xjcVSB4Gzp4vieazEUQQvVtkpKFVvxWuQe2xVNvE4few3TSfE",
  "key48": "2BKE9UnVe21eocgBb3Ed979p17VXWahPbVtyxRnAmsit9AP1wi5smS1cepo1Njso9FN1YrReag4RVg6extud5ezs"
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
