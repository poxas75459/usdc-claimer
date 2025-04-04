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
    "RaJfk6abexD7qaUhUC9s7C8vSoj1qCuCfRejyXzUfNbu8NHdGmSzjB8VoYLKWoPWsfQqMsPLDj9pKpgF4RLyr9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B3PTdoLqAC4uwfd1gsAVwUN5EMhVegsqCBmE1muMB4i88jHrQnBg6GJTHoZk6ryEpqfTzRHMuYJKgdxpC6s4m8A",
  "key1": "3wHEhKu8xWxqqkoECDFJv1CDxw6Xe2usL5sP7NSmWe4c6yfFhgxeDsCMo5vPJDKAKM3GW1itfQNrAQr95DGcxfN9",
  "key2": "2WRhcyf2UiabNkXToCwcRhDphW8dAL8YxvKzSoooRZda9Zm6FDiy5HVSbG4CDR5c8ddxS7P2AjG8PPpqKNcpp7fu",
  "key3": "5n42M3RWxdSg98RUG75fCu9n1YZcZaWswwWCFbDZaNG1YS9DQC8BQn4EE78BYqeKVD6q4Ynad1dwSbjFkm9gri5z",
  "key4": "LNbsHb213tiMSWfXDjJuDvE8hYHc2pnWR7tDdt5poxpc8KqWt1SgZu85mMNDyZvBTEwH6Ex3Kmb4RDki7JYeigi",
  "key5": "2MMULExeqGCeMEQq8J1YnXGQjdkmD7gMRhVZtU2amgf93CXmZmuribk6ApXGWMR3rYs8qkYHrtxj7cBzGE5PvhVh",
  "key6": "32U5n9k1PTQQ2MkqqNsUfB9CswJU5WxdLCEDzkdfPmxha1zh4sezocchexf34GU5dc1wXND5BjEUf1tz2Db1rkSS",
  "key7": "28HrmzrDKQM14MMzU7vgmcSckUYYLqeUctGQBjwbixkDKx35attQ9sEVaxaWw2SVUQByWD3yhxyaXTLDXeYCS4dh",
  "key8": "5ATKMpPXFoAXSavdjaRQfBXPimpHNBtBznAoVSVfhtjyhLk72QxSxGY95R7eNQeXmM3tc9fDpqbaCCN4ZrbpBjoc",
  "key9": "42Dp4HesLbFim9B5DsGsevKLcd4HSQZ3vRYUX8ixQqTCweMK3NCQs3RpRZaX831zAhAnQ6Y2BNQwBZcBDppwTpTT",
  "key10": "3qoASknt13YrimtexkmWMhpX8MKwb6Dy4BKcjxvkDVDZUT4YVUK1tHsXSuA2hv4RYnV7SceXbPsdaNFLE82nByh5",
  "key11": "2fvMT8KgHdoyMs9uv8Snvbh8nRPeA1H5TFG4xHXuWe6THtopV3Fb5v6qxWTCWmVgbRRLTuzWiaEe3nMdhFmUKmte",
  "key12": "2ov77GfWrzn6Mfih9xj57i2x6T8j7FR2qa53hFAZiYhapuUwCAGN9MC72uP6bnSyPGcJTvSo5XmNHRmvHy26UwQU",
  "key13": "41sRgvETJtsBpK7AXjvzKvxMKMUh6LYPM1BttibpLte4eRbtwDzKRuA6Gp4KZSeyZqCoD4XRrDTnZorpZXNMcFfV",
  "key14": "5WHP4rnAZihZZG68ZfVPUCDSyryuyx21Hu31zwjavYsxKW9riwEagu8jx8esbki7y4PsXNwA9rXiDt5iGTmuc6d9",
  "key15": "2UoLDZxkBDNaTPNthaRRV3JmbVCF6Vi5bf3nSX2B3zYdwhRartTeudscdEHYeK6STrra1aDzGBYCLYT4yUs7x9xs",
  "key16": "4dve1yKXUSww1sfJNYt1ZRGQ4BjgacEk9J4B8dcdHKVrQ2s9RvhbTP3ThbgUCAywqchFmxNk426EAMLU3x77hUVG",
  "key17": "2xGkv9yFXL7E2YDw6gUKuReAMY2N4Deth4JVMy21zAy3XmcSsWWgWLW5yqqZMLhVQ8ZNPjKo1xrKUyLdFHWL97QW",
  "key18": "2AdWoHZSb1XPnajUobxhtrZ9bHuX2AhsxameRtmKZPf2W3eA9L7xcjnckoUhdvVNbF7WP2SEqF8pDyxLrF6jT8AX",
  "key19": "3Xeq7PNyiFXXmg8VshmELP2tBFeFcytbbKxuUeBVhor9bpYcn6kL4JfSd6ows9VELYSpvXLmUa8p8CQWPaGriauc",
  "key20": "5jED1r2PCpWJX1ovKYzMe5hhtmQqM7zgFEkV5SsUwHcRTuHW5PRr6b2fL656QsrGrDWEz3bGeKX7DyQCoB4Zsa95",
  "key21": "x55D6BYUafzeJqiTjhGzZ5RityA2RmhBQZyTDeMyuGGdxAvxpXjXuntzKxJ6KBpEJw1su5frpyvdfxhfc2GqCd3",
  "key22": "3PQDGCyanbaDiAB5c4AD9qhxBFsRF6kDcXAEepwnBUh9qy2GPhkyBAoumfokjYyjk52L9Gh14kTrbQTmqtcNL8Xn",
  "key23": "2F1z5VfMW5SZTp2ASKgHZQuKrF26DGJAfUp2xq3YWhCRBWK97etExctfyK46XKv5JWREfVTFhhTu8YzeosEJMm39",
  "key24": "537Y7W4e29L51cUHFcj4EGeMN4ytBMZsFQvzJ98KkyagcKEz7k6H26kGrJHR9wSc6DJJaR3CuY63qRYUtTXfXibc",
  "key25": "V2dKmXDYuRTkEaLXyTqZT7GmtnPiCqKNLUauwMbN5qYJrMYY6ZduWeBYJPwrDgXXvG2UG8exaqnmNUBTXmZLPpy",
  "key26": "4P5g8zCVBaNDrvvGqB7bhBLXRxWKYztLX8pt8UKhhwd4Uc8HLJZJR6dBibbxsPTEWYD4HfsofRdWAgikWULAiHMT",
  "key27": "5G9L1DpMMyXLzoGGxw2hvaCrbjULDQSEeEuDK8YTANS5XpW5FdHuYPkxZL3wbWeLuak8w9N1EP7ggBDCyXXRDJou",
  "key28": "MBGibcAdhuG9SLdyTMdmjN2QcVxPfHdv1GqmLBVTvsCwJJdndPfCCshaKWXF5Nkyvna3KfEmc4tGf59dTfYs2bo",
  "key29": "5PFdsVkjG4ttzfchYL8HGHGmteRy8EqYUQmm4nfbnjJBkpaU77sDqf885FxviTihAy8uSSmTC18r92YiuG2nRR6B",
  "key30": "57vBxKWKpyu2zDNDGQZpvDiM4knCJdkAdojzmumDsaRTM3Hvvj7QLpfPyD22fLmhXzUmtmXc7Dz1FhsVyAGdpqCr",
  "key31": "BPZR73xSvRY5uTHYZHPYnN7Ds5peizD4KG9MQAxy4ydY99Z5RaP7RmEL6ycjukKZxey1fLXHx2rcmyimBCaVmbL",
  "key32": "2brgPyA52NhfSTNEMaTTPiTwntfExCah5fELuPPyBz8HAe6Wi6bht7JniJrTQtpF4aox9Jyv5bnPKtJiJxBdcU5M",
  "key33": "3dWeL9LhjRbnPdTiumuDaFAtL3QdawWxpn6fhN4k23BHDzXGDd6NwMmtYq3gD6zTUmvSRCsADuaHyjuB9rwAFPS4",
  "key34": "32Ey2wxfirPZb9cA612vpdK9S1wRPPnzJUhMSuTm4TY56HJf1iq5Z15ADzRmybHdURsdLWaBqNKFAcgoKagsZfmE",
  "key35": "5736Fw7MrHb1JR4tYuRBvj7rmjLFqibHfDkpum5gxfwoEF6PwH2kPoToGoMDMyEYvs6q2rbhZy6eqCSUsXj6aTvf",
  "key36": "4myzLE2xAmnnosioaVBLkss8WQa5HCuYH5rSeCaLBgqfiZHu1a8QYUgeKFY2g8uZeApwLFGSRrssNYnZujcCuDNG",
  "key37": "2KdLytFYWKq4DhBCPsAcBtyanpen3iWweG4kfCmCwbHsS7VWmCSdVHKbVGPw1k5wcpBxrCsu9PMoY8swUEceFPx9",
  "key38": "2pW3LwvGKjbcrcDQFEzizZwAARqAHsQpdi33Mw1AcCEKpnJgEHG6tVqR87nRK5uYQMSgKUvQuT7QVihSeMSEpEZi",
  "key39": "Ci4jtE3vX3Urae9QZ3xXgVTJNMzyhxJJJUovxbGCTZoFjNS7U1Am6DncQAcgJgqwwkdXCe63vY7MbrLBNSuzYAv",
  "key40": "5mHeJYsGpA1y9WaUahR73ffh6HotKz6phdFLEGq4KEqMGQXyPxYNaakT8E4TsG1MSePRqwpoSgaofi1oTG7KhV6s",
  "key41": "G5we4ES4ZoxExLVVrpZYyHXmNrs2azshvXb5bhRgXeTKdhK5qkPLjqijPSNMtDP7HWH1qT17w1sf84MDKmNwk1J",
  "key42": "jdw3Fgqg5tuj813LY1mJUXhfXdqKKpCtzsKkbfRf8P32aLAV6CJKCP1M5V3CzrcfyRjTCzyczHtBE6ocbMWDvaA",
  "key43": "4mzjuACpMgTDgufHbCes7hUFdfUag7Rq9Rcq7jacxAaFxYDe1ZhmaocRnvzTB6HShM3SD9zZDB1j3nC1pqWtkzbn",
  "key44": "2HGuQMqbxtjRn5BboTnRDJmpuxGq2XJB2126KvePqvay3qnNvqkcvqFxNKXb7hut7ETkWznmXd7EBmjbfA7qRebH",
  "key45": "mVh63hCmvdnmRD9632RP5SyjoFEmDUFGactPaSZD9ECpKbKK15iygYxyiZL2uaww7Qx3r4sm3sLNL6qAVBFFXhh",
  "key46": "5ZmHksfSSjHUCQBPPAD7cS3SKDJT9yf6Ca2tkCxoiqiZv5ABPXo6FJkkVGxMmag9mcfnymRNdfVNGeczzQggZDWn",
  "key47": "drJ5meAzV1tdvXpjX4RhbJuSxAC2uhAn5uBU1MWYF7c7p9mx3qVVFnRmSg5eAUPcYKm44vGvxpBbRQrPQfFq6SE",
  "key48": "4Npas3Txk66hhJDdkkDjeE4pgqmotHPkpQhnX1SdmMssYf9JEjDpjHo6frXjJ4gacFbEcZ7ZLzNowJNtUzFVYTzd"
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
