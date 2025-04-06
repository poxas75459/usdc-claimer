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
    "gmEvMZzNfE7DbLieamwPhoEqXydhnC7XbBtQwN14NRUnU6amTt2G6qYkkMCVWVKsCuqFfi7s3Y3uJhf5vMkk1ZE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Dwm2t5hmq9c5SWZYzR45atMfrKLe5zL8ukvVdHjqRwvLmcaG7bTJb4dPbRFPQQmdMtk1ENuHkRZZV2vhvHasye",
  "key1": "5y8bMGgksVvXYvhPDAqSnDEwqE3SbNaNF5oX2mYy6JwToYjqybDZb7DzyetedcFAcjHQqfPhk2VmXaqFqUuVziEN",
  "key2": "2FwuCTuEoHAdPWakrbumfLMpzzwK1TxSCX5sKWHkKvGWBkVc2mYwFQgQ39y7gh7nmRcPeEAFvmFpGLvbYSJX3fjw",
  "key3": "tbkSPKQbPnpYP1C5hr77VZUCgGDZS2s5bi2VPsw5YM1qbAACbdDkLik1SqN3og6MzecJs3pTcWTyYeS1utBgW1b",
  "key4": "28Lar6DSYzkLdLvi9WdReUK7SVqNX5GKHzVL2ZKPGYw4VpmFPiqxUZkx3eF4sbsMeomqu6iifojNtWsgDeknP8ec",
  "key5": "27S6h2KDgsbkEWvbaZYy8zHjCZhiSELwhQAguGcWbzk6DYh7838fEjbsFTCmXeSULxjFCDK3CPLGdDMr6vztdG3p",
  "key6": "3nau9dmtunwKS6Up7rWSs8QCodekr62hJ7AHzwagUKHR2nc2nXXqUM4DgD7VoH1roPv9XLA32dcVprjJ9fpfMzX8",
  "key7": "48zgRERha4uij4yfQyGgnRLq6ELKL3Yyo8bX4qZtaCzQx4axoQWuZoYog4EK3FWFpzPDG68EM8vx4hzU1LhPHyBC",
  "key8": "2iL3q5LALs5c354P2M8bnEnyaNS5UfqiEEtbJQwRyFdXCyeBECVZDXwjqXpGRTa1MMt29RMRjjSRNnwGNwhcJAbm",
  "key9": "5QeoLkyDf1q9FqYeqV6Nm78rBHpgCtPv4uZeytkNhibXjizSUdbJhhcRiDdvxhZrRifbhV7UP4YuHh7uFy4sTRfa",
  "key10": "4U2VMhgFe3cfv3b15131ouvE44nnKfwup632D7ETAh91yUdhBDUd9ggSGAtuSpeLq1TBgExv28nt3uivZqQiEHaF",
  "key11": "3fUVovJ4F884ZHPkHeNjKFWWSSnvHSbmGnE9Xi38dEzpqSgDNCev6msF7vzkLJdJ3C4b5RyX5uxSm2Ajz6Se8KUc",
  "key12": "5x9N3VQU5ZHtLAPz7bmU48SvzsZjSkRx4XrAmg2XbQUaj9bZGrMPcULQ59Zobfcq4LNzKjRkB3ZZfqFRSxc7TZGG",
  "key13": "4b2sDhGqP6e7z9ahZtjy8SJpMjaZ12yH7ckNhTmwtopTmHGfiaQ3S7xnudrUipbPMLmbvHjazM8tW1KcrQzEqYi6",
  "key14": "4W5CRnMbe8bYsWZmW4dYmrdZP8XAEqZ2yHuLvADAUHTtEvQZMJ9jS5G2KsK5bjcZtkUFPST8NkDVmP4GTXtrC5FS",
  "key15": "2dFg1741fNpUjB4xvCeAdZHwheTpVUYyFEpje35wyYBodoN4MW67FHShE5k5uhGSodQJhEMz8FxrZU8ro4oMiG1E",
  "key16": "5nu3ZgBCkm5dCrv3bBLKxPcSk8BYx5ZWAfHJ4T3qnZt7YoycnXde58eyZLiiie7aMHY4UTWi1JB1v1D3AckXSqLd",
  "key17": "r6N1r4WqjpFBjGjiYXZEiuHae8NUEiAqJAkTJWXNchMcHDcRB9mkE8qUfnFHShs1DAY2oUjxBeeAW5fnRPoKP62",
  "key18": "5Jr712qXMECSLesn6bTAEuExPQhoQgpKokfj8rB7CtLtgrNGvBoSsaM7KwJpKSViL8JVosgpVam6bkFSpFUEy3vH",
  "key19": "AMWVYgeYuhvknN2chAHXpCNSEP3QhFMKXjRZA9bNZRVLt6WbT98e7azzCvufTY67yaaVS1npo6cYPVXUSTntvoj",
  "key20": "kvSr9KhJBVQrkV3snZmwtYA7EVKMY2C6o7WZHEmdGGjHtCfaCLPxkYjDiWEnsdtmWmWYkGMpBfgDAg5iwwGZsMY",
  "key21": "23EmFW7kZTJWMLdvzTsJFdFts6dJuakSuAcsAWE6QrJaBUgHWWryUbgmVSbs2VVA63gq3NiUysbhNgdpVCeVSpWZ",
  "key22": "4sq4hs2S5kAFAJaggRWpW2Sz1ytCCYnfLhLHhDMjMdCGoWiNogXnemUSDontKU1wc8YQ23R7y1FPKDoGCHBvVZ4J",
  "key23": "PfUQ1LdtQRxi1GnWmAr1KtCWWR5T9TbajBZAQEgurnJ3VQo88qdHcAq5tMuNdj67LVFyVTCkUye5gUFzGNesF6u",
  "key24": "4wFAjkPi2cUJY5hBY4yiz4XTWP4x7PB2DojY43CP9yV7GbKMyTDJvJUFWMj1jTrtq6edRkLGKFTwg7M63S2dyQPf",
  "key25": "4Rh62dHVgRGRU1NEEfoEYusLwNZFNZcgLRLQ8HPUHoiivsZUXGfUSa6j6vDdJjfVUUPVNNPynF3ZEguardHEpqFg",
  "key26": "3DU44pWpFPRHKMV1ax6ETauujQLdy6gnz6KLcDkWSQQvdJn3q5Qp3TM3Bh4hqCAvqzqJrh6iwXG2eyERCKznvk8k",
  "key27": "5TfYx3HvyNybxB9wLFiqgzcnFq7at7tgLdDhodFZ7SW1eobD8f83Te6gQbXBJpU6CpdVyoDsiY4GuKEWN2H2jZaR",
  "key28": "4WW8omH4147bz2TMmZkWVoN5kajVFXmcC75tqTBihFgqb3xfG4obxWUcWjCtrpmaAcCvNB1Tt8SDqn9UCzBXCaoY",
  "key29": "4nQkz15MUuQgmoX3R28VXvcq9mvuEApMhtBtH9sLJmdzLU86uNGS22eKHsXPprXttVHSZa3Fb1YqafTLR9DZRp18",
  "key30": "eAdkKvVcdouY2FrYjVhuCvoEFzFrtVBQVwkyPANrFHj7KMcxPYCqURGTMHYEPNofCSU5J7yYntW4hAUTSruekte",
  "key31": "XWkHx6nEuDBncLWZGDrdwJxjzeQiNw74qTSYocdM9uSFNVr8JdpSEjZpD9mG4XBRCDDTdHSUV4TJPZGta9sNLeN",
  "key32": "5irNinKqAPUV26XHTsi2M1LvSjH5MrFvKq3EhQ9eYqZzfPWWfBW8vSPiFHnnR6qATXcaT1iGdHYcH7iiSMjgVQwf",
  "key33": "5TRuRqvPw2i357F8TpTtHZb3WDh3uoFdbNMGJCGzn2eAapUPGnYcLFs5a7Mn1HkWsam8Xmimq9j3qZFxqgtak4vt",
  "key34": "3CVpAcz4k2eJ4TfvRKGG55RWJaNmGtZfWhhqmHxrBAzkXFfjjZirHFqoHgsjUUpBPidqmqYdmQLSGdqCosWpr1GW",
  "key35": "3HMP9XHToA8q5UNbP76iiEf8u63JKJTyiHf8QYZSuZPWMSHBybme3J3c5YYm81wnEMoXtawYAW3vNnUpDbbszSTj",
  "key36": "575zawgWj85E2RwS1f22GchX5ADxZUQZGsniW4mx6FasGcWQiF124GmKaGzR27pErxq2ANguaeHwSCsYJWoE6YJw",
  "key37": "2C6G3JMuCgTdC3N22jY28BorjpfpJGaN1gUCawsc91oM56PyyXwa5D671PEkSrG9KughUFgnp8TiYKVsMGDf9eGG",
  "key38": "efHaxss7p9HRBJWWx7TGmH1Y1u7xmggkkLdkSuHvDAQ65WhKPgQeUFbFKav4cXR6DErYfcFVcLSS2ePAugeNcNe",
  "key39": "BwXhseJxpe353hWQfPds3kz2ACBMogLtyccgFzCLknHNFX1pyAgtDn1ik6DCWEVKEFx2ubHSrToWCRiK3pMTUKz",
  "key40": "5eiAu9jjemDVz4Zn3kBGPpvHefy5qKjtG4kcdUL7DsKpaYoees3Eeg1NEMxoxNohQXsTBDx2ET687fcjgkFnTsjY",
  "key41": "ESjEFCupg33LfGyKinQTuYqqijA5uC1G37KGBqD5ha2jFxvixd8J1oz29veRBLamj5HFvs3i4dzN5mmPvfUbUTh",
  "key42": "4NrEZoFrqwuYsfMXoteAdeoJnBn7ZVft9ZQCRGsVMhbPR6q3AkErAe3KC3z9BZCXEkQudWH9349W6wpYpG2oWG3A",
  "key43": "5xF2HmRtCVCxFird9k1E5HgKQ4AU4qzW3PJRTL9Hzv5QPQQLje9rmBDeKNRSpe2MngCM8zUiAQrwvqbprS3zHiJw",
  "key44": "13LpjxBA943em8XwDjo2ao3Kr2s9Yd9SRpzxeFtzzor8e8SvoVNhq8HdRxtTyMVxjJqMVHcc9hg6J5LH9kwsAzF",
  "key45": "3iEW5c5nmyviC9pS3KnbBzfo2u2BXp4Y6fZNiGy7s7yuvd4K9DVj23QJQ4fGDLRpMP8JkMZNHYhMfDYpPnG8DKR1",
  "key46": "AQ95Hc69xwXtYP2Z9bxZtiS7NGgJGD77qMFbJaPHB9MKXuxedGjP92QgPabhmfPtFGYTZQsKgqpnzycGgVDSp68"
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
