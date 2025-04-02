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
    "w55K5MDKHcDgKKV2xPoboHq5QoWK6Fp4YaDrdh6RcFEhi5qhcMSV9ndSMYEHoQRZBiJ936ndSLvYy8hiH47rhzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KpwdkYQfZj5ok2bL68nLc2qXUZHyRVWPzeC4RHPFYHXY6DQn9id6Zuh5YbDed6VMrWs9cHofTFZmwrb5jqKcpda",
  "key1": "5egeJYYcQ1BdtNNroQYdqMbcXnrzakykXrPYwKH62SPHQzSepnJ4XgrvRWZp1Wj7hHvrvUvGaQhgS2S4hTwZdgRT",
  "key2": "58pfL58Lbv66gtSu3UB3Gbte4hwXfyqBArcypb2v5Fg3rBT9sNxvhEmQAKJWqJ9nghKVtGJxVjZXPDkbLhScwqui",
  "key3": "62LjnndFCBDcqsVFmsRHavrzcWj1DMA8YLB26MMUvja7rSqEU1jSLWv7e6SLpaH84P3FmocjuR2m81aCATTAF3Vz",
  "key4": "sttKHgBN2qfLVCFRkcbaCksZNjcdk27guRix5wCsNSvcHGZmFrdk69jdDhd9qoCqK67yvoFq5VJozYDMot73Ckx",
  "key5": "36zddr3EyjajcfyTNiMXYXchLY982T1zT8KE7wuKnegJmhJV4wrD52gKECiSfyWoYJdYvex59ahS1qdp86cHC7YN",
  "key6": "51zfZ759LGdTFkCPnZKxVA7v5zpD1XsZCHy29M8mCTxCsBr8MH84UCk1L1VpXv2GtZaoSnaJrx4qCFNqG3EEfjGV",
  "key7": "4Who6ctpwdvnYAKVFgPu3omZrn18dByHkdnxRjgwiLL5YzmioZA8x5sLDnio4YTdTZs2cSpnMGTUFuupF1ADoRm6",
  "key8": "2UrymZXky1yfCfH66651i7Xz38fKTvh9imiALQDKjvfVP88amrfQMBUyydMi5zAVqGvpyLX7tcViSGnHKMq1tZeW",
  "key9": "3sEnZrirngSKdnPriiT9moYBMTNBUpR7ZfiXf8imniRajFZk8dugFoSR9qv8VRftVdKqZYYa4ywWobzagbswVrWN",
  "key10": "374w6sYfYPKhjUGdnJ41o65emtx8EGKQBmZiHE2VV6zTHQA3XxQgEDyYKJc1heTktQtGFLxB5w6Q2JxQwhzi2Hc9",
  "key11": "3tNd7ZPhoLDUxxZp8xyENPTrTEkrE8yyaVvEa1jc9fsVzW3YG4SWb1Y21tyDd83PfnaQV5HAA6aKtU9Xru7KDDvq",
  "key12": "YgdZNS2SktnYqa2vArFbG82MnVvx5hzY4xgJ9Co24FGQyXtABYXfRufKZkHAXcbyBrF4n8MP5eC2oy31vhrKPpN",
  "key13": "3JLZcvBKB4UUUyfEQ2xYLjR5qzkNyVq5fF5ky5Aj4xmM2H9fFdrbi7RmUsxT8NT4oowgTJ3Hh1wFjAANqabn2cNe",
  "key14": "2REzG7CJiEGZekoCapkZwkkwXptsfqkShvDmoWD9qs4zJJhp4GYKvbTd5BTW9eL8CykEaKsqqNBh9WnL8VfrQksY",
  "key15": "2mLHeYRuCutxhy41rK2WSeSrExpUwM3NHRyHvZtkTP93RkmQkiJaw4vz4zxR8Emsi45JoFyvxjc1ZM7Z26NzekwK",
  "key16": "542TsZaua35Qyg3p2jSo3youNsWrZoSXeYVo18AqRE5LwRDrXMqUjLqvPi5J6JGUv232UcJ4sdeGCDDwLAQV1Ho5",
  "key17": "4fJswQW81gBY39sQaRzAqmuV5eyZ9WNvxCNH33CAAzLwuK7yycu147UqeitNH6LSNSTyhMsZDLTC9hL2y1g34Axw",
  "key18": "3mNwmSJUBZpg1Exhcx8Gofo8yeS2nnidtuR7oziNVhXhDuo2gScSWpwRbtBnf6r3frZtFkizwJEv4vPmcsA62uGf",
  "key19": "3XwQhN5t8pgN3RB3BBSAJP6mqsK8g55ijQ4iiZHrC2UgAPT3qoj3Tm2JU5eftJM8cksaS5Kk1hQiVy48x6NypSMK",
  "key20": "zk5FxkzFML1TRqWq6hM6ZtjYH9qn5foLWJKMJGmb1JhGbgCtsRaXGs7ruJYdfhZdo3C5w4GiL36oq1fpMjEPamF",
  "key21": "35DDkKSCBCMgMJeTRxdcnFUnazfxB3PKXQ4N9zUXCW19yGixCGj1MLc3VAaTExx33KTFVEBzqK9uGg2ABGi4rvTa",
  "key22": "2BHWjXx5JW9Mj4aGSuXuLyqTPcZo3aPUtajJEg5Cz3P4s9Sf4m2C92AdUH6xrsRdcNmU6sW5MRoL9sorE8WDAkHR",
  "key23": "3AuRxSctgZHUhSAhCu5mhzxqgpWXcuov937u36swssfWWFr6vTrSwyot9qzbJrtpiwiG92xB2CwJf42soHY22aAc",
  "key24": "5UaZsvmDZhDHEerry11qEE2gsAMVTssE6PMoTd16Wswbn1qALY2XskJZzgEtjFoaxhfm3Xa1j3nPxhuKrBNHgzj1",
  "key25": "22AdfE1iAPSE2nTJh22DcCRKtzCKx298Z84MEuY8kBK4aYrUZuEpZS2FQtxvsd6sBpx8AnsiSqmF3TVVXxUsgwNL",
  "key26": "2B1t9RLiGAx3RmRxdtcuGw5a1X27XyKaXNAy5fhbQ9LT7YJNinWSi5ECHYg34PR8tVVffyrUAqPHZuBKAQjQgarg",
  "key27": "3aX7aj5xtePzYLnSowisdc9bTVfNqzsj6GqhdVSGEwPhRujMhfGVwfzcfHe7UqFCskZgV7LYDC5ux9v23qL8o1rY",
  "key28": "3uc8A7tu1zR832iJEaB6QRBcQH1faV2XWUVXfHZKfqQAfsAAkw37At221y9kLVJUgt1r2SPmSV6j6NsNn6Zm3pfh",
  "key29": "ep3C5VUyPHBmR61x64J3MmFR7Ahsa17XRTbcSppj5rDGK5RgomooJKbuBPNFeYqSyC645S5KjuoystBYfDfPd6N",
  "key30": "3jtPYToQQWABcj3ezXAwFtynRFdQtR1QFG7wndALcLdaiveMVW3xgD96sGgnmUsjvazy5aUixyPviSHuECixt7Yk",
  "key31": "3bCFcfwddVU74woyNp2keqBFXb8hdCGBGG5vq7MRTKj8YetjPAEzCnhM9qv2FAbM4RKkJLiQVXrNv9dhnAsdy7BV",
  "key32": "2LVvnb2JDSxMZikizDbTcKwSdPKHJtaiCEuhu3DtZqmrXhTBuDdPhsQppfNYFw6yJ9oQiAjC48WGLXEjsUGkxAEz",
  "key33": "2sAZdSKgk3xGZvmqqMztyxPt2M4AVMHHQhiveY2zzboajXXufDxbwVho586BnR3xQ5n2SGydVpFMtibZQr25m666",
  "key34": "5dtNPTQtJdLa8fetwwBRxLMtX9PJUmQuXQwCBy6m19UsmxKVyQogCtt69ssGhsuhzLW2Uhrp3W5WHkbmsaDWdfwi",
  "key35": "2inwnZJFraX2JjLzSekL4s6CeNDpiSVh8axT4tLP55jxhiC6FUHY2wvZJhYpceYvCzLwwGSQ9DGEhTKo2WMR2fMY",
  "key36": "4htLQ779qMLAzH268dSeAkNWNdZKoZCaVbKFuZd4HMQPg4Tpa6xKu3oVVanLFmB8T25FV9SPVCErEGggb4PpmqNY",
  "key37": "56Wf6SMDTBco4ST318CSTBoy9fto2RJT7NZF5oZxQKr9foW79CM9RLUK8Gd7gckgiNh8T2a1XhfYsTwCwefCBf5D",
  "key38": "khr8F2dC6HmZXhFyE2Z7XfxWB39K7LaW9PRHxAbQJtNftH1oUcrx1eWG5xgkSwX5SbBNn8BGoJarJz4ytWwYteD",
  "key39": "6ZXbZXDUjPivQ2VSKPNz3UwGASxGC2gS5gSEobgmYUtDWf3QeTkoHBCoTRjJLapKc41DFFG2pE5SMWDAPCybob4",
  "key40": "3iNUt71VSZLj9CCUJyzeTaeG2zcb4exZU8nXrVxRra1r9dyX3GRUq6qoqWvRkSBAf1CCLeDAS5AkyHFE8NRpM5Fn"
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
