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
    "5dM8xkDgpDwp4Ftvyp9yKqfGMfDQ4pACJ2CHN36CL5dmYZWQiwPhg7PfYcKtsNyE92MsHbMTjTgXsWeo4QkjQ4e4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aUJDMyidiHq24wobdVjyUmifLBuE8QHR4RJ4cgAfp59AT2meJoAR6nuGYvgy9ntcYrXREjyGzUUVbmAnTQNgwcp",
  "key1": "5AUTYTsbuNSFHGGRq7B2E2Ttt3NVrn4PG9pZK8s4ggu8az5HoEeNuyeS9t69RiPtFPkLS2vv7dbsJvMiwE8nTY6X",
  "key2": "5Y1DVL4UCZ28JHc8VHN7NBKyennaF5A5x2xz1W1CqjVfJyCsPgQM2vkb1iQ9j1UN14TRS7Fogm6h6t1wCeJtCfLP",
  "key3": "5wdtkbAGujH1qEfMYDsEXZbnrFuEaWUkv87xwUcwCcRhnpLEzyXyMaMW1sF5ESjA8CiAJ7ZWeb7a8oswPErMYc4f",
  "key4": "5TbsqxeGSfAdTfhNXpX7UfFMDJ8XPzmWL3b1YB3w9ipNjiNNSTgwsQmCA1cQzKDNagoQJvgw6Z8qZgQr1c1iZChg",
  "key5": "33J5FuHg5J7PXmP46HxkvU2g6T7JCfeXWgTG4yGzGW15hCjmpVHdukTJjNp2Lq3ZezNW4H3tKKARVdFjUaL7WZzo",
  "key6": "4aDTixh9aSsuiooJ6SyCvz1y2UfDGsSkz86BcCQewviKkBKU92j7ELcLZi557uwCNqaDoZRrZvPexerggRRuUuHD",
  "key7": "4caZHmxyeraRUafNyLk7nDZC4iP6FYk4hPrsNMVKUUQv13GMj39WareaaczT1nFxxgnjCfYkpUbm7acjCDgzaif7",
  "key8": "3Ls4zyuFUb3FEewbEYa9pQJUAipx8XMf2hYocwhgMJ9tyvjXZGVvsgmGjGbLg8xUe5qyNVMWkfgLX9K7wqxSsEHE",
  "key9": "3QVeFMS3xM1so3JQjzjNtDPfxXVAH6BKu9NcSyKtZEiecTMwcBXRcDUFfRuE6W4ydwDLymE8KvjQnNi3FzKhUL9Z",
  "key10": "qTm1mE6vUXk1SfDUcRQvf8rb2bcUenpGqeG5APqM17cjrZnakNhEuuhia58fPiEzjTM2fGtRvTgEsqem4MSgnfU",
  "key11": "rG7xV3UTz49y3eUSTvfTqgqHwNJaMXSabqthPbQ7TyWPZ99i3CczMwh4iQAutMX4e27HSSFAP5kMRq36C9ptt2h",
  "key12": "52KnEBT6KDSJWEab1Zp21Wp5Q8cyQgfv5oFwxq2LP31wFZko6g8rHkVFhLY8N8j2RUgoq1e5tK46EfrTsjwvGC3",
  "key13": "2ziHA271UQrtff1iivtsfBbErPaH2zFKkuPsiPUpsHXjxwLbVhzXnLsrpcqAagBUKQUMNfGLRxeZEhbR7Y12yaJA",
  "key14": "4BmJP5EYgs4C6gt531mVryuCjeatnq3ubKSYdHz1wkSA2fAMqfgEVU9Cji7gUZVF7Ejgj19pfRYE3KtKwi8m28HB",
  "key15": "N5ZCdPkN68tGnWCFCnPmbpdbG11CwBttZMuCHw9hBeZ4eCBdiJx2YsQa82tC3fcivJDLt2QRHf3cEFUkSCwAhZN",
  "key16": "515HeUj9tSuKtNZCSeYMvfDa2h3Fqf8fr3ko7koU9KVNGdnJD3qvYN7EcCkMkXTackgD5uJN27HGQ68H7iX6jYNw",
  "key17": "25LfUopgXzGcc4tTMtyGg4v5MbtPN691Rknq1VGDBiPicrq4if7aAA9P7ejfkw1J8ktUWZAgdrav4CZirZiVFsSk",
  "key18": "2LhkAUAaab8R6CcVXBBoxDU3sg4kDFknYotWbVcVYgX4aGMeE7AHGv3vihwFA1TmBugCjKXpDH4k1Ro1f5GTN96J",
  "key19": "2erdVnVNqEGWpSbCbYfm1XGEFZe4S5bEua4eTpSYrFiTkTVDix1cvAUbenQoPM9iUCKrCvpKhYZ1piK9Za8qfkfT",
  "key20": "5BYT6Hib1kGJSsNcMTz98B9de7r4BcvMMqgVzHSjqMskUZVp3NcphT6qFGZNBKFBKXA9cbvtGaxCg6avJC84HKBR",
  "key21": "2jZbsvTawAL3iUKZVymZ3BKHV1coUgBBEQ634TYcTAUAVq22zCSyzAdNrSGqULNd8XAFnW14f2Lde3io1VDCQCL6",
  "key22": "23aSRyn8ji2tdcg395MDrzJeQzy3hM6qazWkZ1Y7YZhBB5McQ7dZgjUiRPQa9wDPzcqewj3WM6Mwbdu1wvXptK12",
  "key23": "4tPjtYix5DpQHo5FuqcchJL5hmHp9LY9G2mCNVwFvg2k17jzmcFxcYNtbhdU3f8GPpg2WCu6FCuByutsE5yCrZck",
  "key24": "4Mw3C6iEe7yH12Yr1zAb4kiW9Q48PvK6abJ43UR9ujyNcUEwmgTwyNWjBN6y34LbczBC7nY8UbTQCSVKKZJwiE4r",
  "key25": "2Gr6nMU48EreWU3oy1q63ZNG2coScsrAbaMJWXnkhYYkdG38P3sUL7LfJEoywUXqaunYyMwqSE1XyrW7jt4T5QVw",
  "key26": "3XjJEJ3QJAwwXyQb7PjXTpW2jEhY5oJwgXkSJSS9ZUSeLEgPKMcb8xj6q82G2TssBuTx3szUKpHtABVcWAJMdJYy",
  "key27": "eKPnFZdgiN6qyFYX7Qgs12ULprizEdJYowvKZcDSoDwgUmQ6ugZJEKde2KQByRckTGi9TNMR6hAsVtpgGeJWfNt",
  "key28": "4oCGeZEx5Sodyo1zQT6xkme6cpzhthwzXqk6tMMoZQEbhYqJzVbyRACtPkqZinDSvjahFQZGmjgkYX1WiZY47GWB",
  "key29": "5ssHaBLbMr4LF6rBzHgMNaw4JQtj3tM2zndiUn2TCqGSAEYp9bnc6zwbLYgS1LeVFuMXvi7g4GNzjgyoWNfPFa2A",
  "key30": "26KnnCaWcDo7n5N1w73yadipNw95STdTvYDJaHzsKJwyrx1aaLcUMKmPe1GzDShjnBdpUSokqfbJWt9D6FctNt36",
  "key31": "5ggYkz6LMhPwjYRCrjHvpFjUWNC1oKg3FGFmuwkU3Pqxyc9X1Vsyi8jPq7WvAcijFbnnuy81TSZubm7Qm8PBKTuk",
  "key32": "DSemu9rLvuN6Ztf2cmB6FsEPSz2z5aQKNooRvQ2AYF6ZjG93UunEQGAH3MvBCUkc5Cf3qHeChsNSBwsJviiPsWn",
  "key33": "2WxVHY59A57sZTxRoeP8ctzenqBUYPVp3LtdvcXFXszXdHCTGKyd6Jfrjpw95Lh9CxKGdyXUxfSbhsK7774EKWZM",
  "key34": "65hixXVvWNWgsbxMTtVN3kAfpeiuhDnpyyFCd41wxEMC1siLtaaamrce3M5zNw119suARfMTbpzp87bxGhdvMtFq",
  "key35": "5xvxf8KqCkNiGt5pXK7TfMvz1SefW1iH5hxvy42gfTbgyhBmyh2GZub1iRBs3qaFBKk7cyvgAtZktdkhM2sUMb5s",
  "key36": "38CtUv8DMNmab2uTCBycx8i6ZFBBTSmdT7GCtYvAurDLGoRBqVKqPTEa1ExakWG19q1HxfZAvfw8SNF8jGAUDLD",
  "key37": "5yjpyCmv1gBHmhWWDoSLMJu6xvcSEVTegXjrESx3w5Wb4Z7sPmQKEoKAmUf98js3ik5r5W1JJGgFVYYTkAGt45aj",
  "key38": "66sdfG7NLDhk5m1mPu3wPWN8vmzpmEnKtLSVGQKksFEsAoeQGcFVV6pFSccYWCEAhpmExtkTvWaFvgXPrgfNhAVc",
  "key39": "2PMi2hoTG6TJfMtZ3XUYagvMvQKJykxjjzR179xAbJeYwYskbHdVYVeSf8WjqbfMmCVH7SVgPjUh5c6vv7pQJBhj",
  "key40": "2fDhPdXpvxze7uxrA3PCppnm2Heh9XgLDQNUeH5shiGL1p4D65YZazRa4fUizR6Qyyd49K6sFXSoNZQX1agpTbNx",
  "key41": "5Tmsvo8Ys3idck5J3Rg95Q92UqvWV6kQfepTmmewqWQpH9Wnchm4nok31b9ragYdagJkw77GCmB8SLU5ESebKKyj",
  "key42": "RVWign2WgbfBpa27VU4nXPSefhYPC266C3xBP9gndxF36cSiJhEzkFPVbXBRn2rPmZQeacVbxL6FkEtU8oQCyhT",
  "key43": "5HWjfh1oXRQfjtGu749SUpwShDZUY5j4yrim1DKR6KqeHW7MU2eoW9iNkGkRu1g2JC2q4yfFMnhqx6bwEnNd2Hcg",
  "key44": "4L43SxN1KwF2N9hgEs3VzPG9nqy6whLrurBe9DVBUeHGiSNBVyoWXXisZcYpNrxnzvDsp7TwS2efdQwiU1mm3rfj",
  "key45": "3HWKgtRtyFzH3wCjdZQR6JsATXMzzvJ7PXQt54pzKVpzksp6AydJkkZLFiEzYjSap2EWbgww8FNkUTNgp4XTiSgf"
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
