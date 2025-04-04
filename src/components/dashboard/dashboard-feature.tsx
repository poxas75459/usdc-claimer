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
    "LqnbE81ix6qqKHLqs3MHr8CpKbnn4HQpE7xWxDvZjhs4sxPFV6Zb1ZYtQExK7U19EUgVKiGKbyyjZCDQGn5uSHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gHVR2YS2YajZh2jBZBz9acXHxSS6UWGBNfVBf2sNw16DMpiPTNJpqGqDRmzzAqYUxj4kmUv9whYuqCBPNGQJnwX",
  "key1": "2pkZ6C39Zqts664MNEAZ8xdsRsto86TWmPNdx1KCQqeUK6E9YDVQfsbeTFBCRB9LcaLaryE9U1bQvMS7r2bVn1r5",
  "key2": "oDjUX3ftHGrpd5bbHcrbWh5FDBSph3CgVXtw1s4r112McfneAYiK8MTJhsroyzdiVceHiVEP7f72eRuENXUa3hg",
  "key3": "2GoyT7HfdCBAXHU4oLMdYWfW5RA9THjT9dB9eHNgfeAwJx3feKWXFot3x1YLmLK1wiXNAJ5LzhRE86djAjJduzNx",
  "key4": "5TvzJEAS39DEmUihqERuhn2xRfCbuoJ4m4rVJUCDBAc94B6KFh78c8gdydMTa8KsrUQmZ1vMFZhdvSJFH1sawKKp",
  "key5": "2fYJkQLod8L9MJ4hFeG3KPxxt49axp8WcPvgZBQ4m8S4sy5Rf3y5jYwfLCj8jnH3n2hccf4KrQoFVJmFj1x4P5gE",
  "key6": "3kxNaiwGhda3zTskVX5h1SVVRkcmjrALcFymjCydDWrQQVdRCQ2LnBZCyWbvGANM5PBEskjZ41LJcDeiX6vfeEeh",
  "key7": "5rxtMeP2UbBTNbmNRk4zWASUaCZ1uynLBmfZcVDb6ggp2sePJ3tijidenwuFGnqb4jJuGtHmzVJSqqiXpn29ooty",
  "key8": "4upH4KxKsbK4KnRRMRY1ZXEoLnyyze5fy5sWsUJwwAq2iKy2D6WdqtBSG5WpXZCeYes1WGmmEdp6mpQJiCNPTLwr",
  "key9": "21fcubHcEEFTxQAFLadL56FKEVWLfuC6WffkBFV65Ku2sLwdDRUeKJnbZoM11A7qwXyEqJzgE3i2HtTLYtwMVTuf",
  "key10": "2E4D1opokHYwnw94Hndo41j38pyFhNPNAxMNGKZSErrMmXcvf2B6EhJAsHRaAvySdF5mMZxNkxP3T9LTkb6AMzCK",
  "key11": "5XzVBzPvmTiJMcCR34BNkh46gYtKhgGups2v1EAxqUseT5DC6XhzEN6X4xcB68FgUaoiFpZR9ed4URWqZqiKuieF",
  "key12": "4Es57EcyJ4sHf5d5ZZWmrChr1BGE5wNzJSyqF8sKGre3TiR6Y5wVi5sK1swVp7TNN33KANQn3oiA4F7yAPNUwC6Q",
  "key13": "4dHNMZgL195MHh3YS9JsNAnPoGhB3FDu1oxQkQjyc79ZyjFPdR7iSQTZMyHji4w9bJE1eARQ6Qcm3yrdjy3eBLJG",
  "key14": "5dk1U5oc9iUC6BiNWSdnKxMQrvio3mCLNhYGc7Y7F7i5Fu69MUrUoRyr6NCBJuywZTHYMyjn2u7S5z5D4741aQtz",
  "key15": "5Dr8Azf4pgunrBgn1rtu9GgBdnYFfbtj5foFqnffJ2m1riNr3UPKQMhFrCvSvFkhR5EUcpZFHcgfoHyDQY3XGVKo",
  "key16": "2ybbgfXG9cajAgRCncfWW4vUDaUGDAMZb48fcWJPh8gFyW36uVnCgR4fvvFzk5fE5xex8HkaBoCnHND4jMoACKEH",
  "key17": "WZmcFJPKGCZBdiRg4aUVpBBHTBGby8QSrcLy1kAkFJa97ptadBPBca71p9QxEDnPxqFMNME86GWMqbs238GTtTJ",
  "key18": "XBsXerAwvYj25fhmSKSmQuTHo9MxP3YMgMCns8SWG2usf3hGqEH2q5SHENV5QgC1sM5ZgNg6f4bCj8oW7quBwz9",
  "key19": "hQjarRDjEtVptHDyds5g7VW44Uq163CbYMZ8L165s7ibqr4rrj2dpurE8117DjxnQ2xjGBXeesR22tU4UzC3k9e",
  "key20": "4qdoVa1GRTpVsSTavLCA3MqwJHkRXh6ofPyr6ia4bFSrL8ZKjH8MitQxrupqDVpAcrgsdtbapk5K2swK58HG547y",
  "key21": "44m7oxvjrKdsaotj6Wsr2hBbjDeG3QZqNM2Xqp76UjNEdJ4q6M8Gg8Pd2K3GFcduQs6GaG9z5U1z71UjGkfCiZGs",
  "key22": "2Qx53niFPMDHC6dUiP9FJB3oC4aPEggWun33xXbEjqTemBXUY4ZQSDNYr2PkomtU6dfpusX8sURd6jhRotNo6erF",
  "key23": "5qQxr4MZMQxq8GGP9Gg9NMsWxmshQiuLutCkchSky1rpvPcWjnCHqL5wSzZTZERsTpcFKm8v3H3WZDi7gPpTorR6",
  "key24": "EQnDVGRwEjfXarcdBZT7SsymrHCAGaGwTLNV1d9TT1BRs3ZLYooU8UF8KLD123T2ovxxCyVrkRtSMmUWdLtfnWX",
  "key25": "3TRtTn88f6LsyDdV5BaGy9LpRAuByu92UoJrQSegFYeTtS6LprGswz5xhQ7AS5AXZcEdEi5gkvJnGVsSXRMkKrCz",
  "key26": "5oC1gyvaCzHGVxVBwNgjRzQR7cjkf2mzPec1e2nfzvf6qtXe7nRtoGgbX7LgzgumPm3Y1GpYJG7sjwm4Wbu1aAD7",
  "key27": "4f2wYJwq9fcJHeNL616ss6DuWf973CfRFL85MpouyE7fZvmtN9D7ydXarfxoPEDubiaT6gTrLzzn3ZfYq132CnWi",
  "key28": "53Z8AuhkfVmju4TtCW2TFCBcoxLJLmK7PSSSnVfECTyK4EpZeAXMJLofrq6tXYDhYP8iygQy3cDid4VUXYsG1RPe",
  "key29": "3Xp6om5Vd6XNWjEYWc4ekVdKv3tKjXZpzdMZBL2vkJzGqobmq4t4zmEVH1vYnAtqk8naMorNWghCFGh5eaTRv1zR",
  "key30": "8Pax51NAPqkcCFNUzXRRAjPAuwM4M5pstAk2iF4Murd1NAbGHABTXaPneJcK19dSVVTF8ajHCDSw6PNSfBezRwj",
  "key31": "ykMcHk3YddHR5KLfGwkS4nuFVPChNxsaj3N42aQ9rhtSjBp3RBHoyvagKpMsBA79AiN27LReAmfwwNFe2mgkMqi",
  "key32": "5Me4hBvz89SHQHr11bX3GZAbXmWMryfri9y4xMAgqwdrHcS3s6qfZ7H195EHyaaVTHv9dQ4eRenWetUt51x78xsy",
  "key33": "3DGhwSCjQTnS8s9NEPZ1H1K1GVHxVUjY1wAeBxzNKr9TYDakf8nWtz5MoFmmWvQ25xCrFazsfhgW2S411eaDNqAv",
  "key34": "37yVM931EuoGbde9y85xqtLCGQfFkybiPR7c8P3G1KyLkBegRyxwAB8WrNjiT21KGcTUxjdBv6UHDMFHKGmmDGx6",
  "key35": "23Hh4SZkELPsm9Hmij7NmXVa5kpmUWjnV6RSvA9dNsRjA4uLy2zPcKikPo8tiJ6C1d6nddSQy1VzoiN7GNJ6qfL3",
  "key36": "4snYkqk87QyZLnnBKufj7yKWt6C3hv2eSu6KeUy7qmataenL8ytNkkP3689nwm2nfawrbMaJbWr4Nsjn8rTJhKUz",
  "key37": "4vQ589C1W8ULn9cXs8svU9K5QM9PwcE5yocLDE2cG9T4DF9MMZCR9eiDrE1KXS1YvcCWZ1AZs1yp746Hby6CjT62",
  "key38": "3gp9yzqDeYkz6H3foEcCnGzo4sp878iPZn7SN8GrqB8p9HffBda6f7Nzwd3LCAByJ3eVtHJaeihM2KCoigYgMBGv",
  "key39": "4m6R87xxvcW9DzRuTAo22WseiQTf1WAtUsYBpcDJ5sVZN4hxr3EAuPKxcryQwVPcTzoeXAHmrGZKHtDzKY4k4ujP",
  "key40": "4PAE1jYQyrSAf1HEDopEHh7ybNGb7TAbG4fRTXtzD3rex7Z1Rqn7dXhL1bHsCZHhu4vZSv4AwXwm9SB4ZbwBWtAU",
  "key41": "4ziRW9mhFEPpQhPY1RFzcSrjYuuDYqH5hhg1395ZgNNxKcZYmPeVDhFFFgdjwnTmMhG4GC1fi7tYJ1JDfwaiK6z",
  "key42": "4F8RFzqNxkn8gdMxJgSD4Y4Yzjcqbj558wdCMA6FixHihCiYmkCVt4UWU5h7SaevtxbfuEzY8kDrqLJhAeXHVon2",
  "key43": "4ng2oUFSzUDz3GkEB6LaDprF17r1knvVbRYAypQwavrTHVgKhcEVKqeFXo6Np7U6i4cXzK8WaYDSLz7tFLYb3DDM",
  "key44": "5U9UhVbZ84nx6DauxgtJ228G2mZZQt7Mnyx2EymGCguVejHNUWF9oekwYHnNUHMTbEmXFywfUkgeyiFfCeJzDZWB",
  "key45": "7WbrbaAxWnEo76Ev9efa2E7vxq7AibktrN2kWRKYSLS465kPRg5uXXEqdKoRLCCBSFezi6PSDuYocc5NDvZwTwv",
  "key46": "3Ci1H5SQJ65zcFMR6vEEJgfnWF9YgKMeFufAHzrRXUKxnLQTrKKZUwj6mkctQx3afDisJU32ZDNgZc2Tuf4zn4RE",
  "key47": "5JEDVhY8P8mfZbNWy98dgw1VBeoR5aJDTXD8PrPwhL4AFMa7gxH5CsyXSmPUuLoEnsZEYYKwNTDqXB4JNtLhuF3j",
  "key48": "33jX42pRFqhKK6iTDqwTSR4bo4Qod5Jcp5UdRhkRQtTAKm2q3ZZEtTxs1JczwYyaDuyXfajC5UUNjMArPCxrtaUY",
  "key49": "2DMfPjoAK1YXf5r4fCYraHGLVoQmmyi5pMd9pAPpDksX4Asip1dSkQgPJ2KaueRzFc4uBsuxuHAm4P5KVAfptC8X"
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
