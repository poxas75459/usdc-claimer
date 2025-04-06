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
    "3UVFrVRHYHVmiBFAhyXSMxpvB9CnKnoQn5uBZxSaamWBug5sRcMQeCUgEUPBndbpjdvydfLM291rBx1MnioAMC6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2addzsmC86Dm2KBBdKJ8bRnPmLUGLktrW8tSKBTiQgp9GZZMHnACVRfoFmbUZq9TbhKHDYMEviPgbuWcrWTFkZDX",
  "key1": "3UEB8AGvVswZxtBdoDqnM2MGgrtDxJCNXYRqodGGRDHoGrsWw9NE7ksMMzxtoNMXBrLP8aLxxFYcGaQHV4Q8a9gv",
  "key2": "63iRemz9qQy6QqsxvxxH3JAPzzkToBnFA78qVzzncKi7NmKAYyMRBYaRF4mUnjViDFFPqyf61c4uS4Z7ckoZqhbb",
  "key3": "4vGeSuZ4hRf1UUkfY72EsBJjPvH9HN7ADoTiYBiS9Q9sPFrY1dn9yTfdeFVwuum3SdXjeTHiVgp1Tc5XpTnZwLXF",
  "key4": "3bLeb31gjZRimkd5f62mZW6KKyHr4RQvqYjAKDxoCL6ksZ4bNAVPcdoxDNgpk4c8gVRZrkgaszXCrPCSn162YDiS",
  "key5": "2ChxaK8xtn97Uhii1x2yUsxtcLLtkdp9fvmjEPMsGKLeZrnrDG8LjPKFaJYmWJCrtck6ZU8W4JkfA5kRD7FXMqMt",
  "key6": "3scxVSJrKmL6sf5oy9vo9odNHCsGwamHukSWH7LCy1Zkm67Sete7W3qSQRQPc5uLrFc9KpMXRZGjyJ1x1ozv5nb8",
  "key7": "UbdPVESCuCeRLbFhUwRsqvEzZQ2EZtKm6vKejBTKfMCME6PxTjLhXk7xcZahrEMtQs7T2cQbxXtUyFnsrQEBMQj",
  "key8": "65P5QQ22td84nBSZY6LRP4gHbajrL72QdXSXuuJuJ24Kc84WcZFKabPSmaqz9iFH7cniWAjiVd4nxt8SYkVHU5uL",
  "key9": "3UDQR7yaqSDKV2cLHopvSCRmAHiNiZJiQFKN9SRdNEkhbTzUgb3UdSgrLcwW3PBvfqkcSi5fEScTbZ1WaHBCvqhg",
  "key10": "4BvzF496TLvNYyFRhFEuhtnmzCuwgkP1Gtih6nRyEKALFTygroF8DDj3sw1vi8yRb9iC2GF7GkZy37d4Lnc8yuAJ",
  "key11": "4x961KMNvzmXCfGNKnSwKv7hQEMTKj25tr5aNaFs8kDApLFeuMVJNCShJ7U8AKtAWbXzNX9TJh17VKLC1yvYmjZQ",
  "key12": "63obkX2f849ZWYfnhaHCHAZ8YfqScHNteJtWnc941FFJnyy3s6i3Nnsh4QbQF7soJe5bwHwqxxUXEGTe9k3jGbAZ",
  "key13": "4xC6PogNV23hjpHoVVaQrapGd32ucgWkLi99GWM8deTb2t3n8pqELTG8Dv8cmrB9kPpKUiKFR2fUEk8S3NajikJD",
  "key14": "3DHy4a73WUzBWyQXmYuFZRLb8PFmdj9ZiyKaEmgT4XgoEamANSLLh3rcZKpyyvXeYvnpu9y6d14eiKFK5MybQBuQ",
  "key15": "2UeyoWX2kobGqXJ5Ac53JNKPYup7ztfdXKXJiSrr844WDaXmjakmQv3aXPBupJy9yhyQi5rfYAhDMA5svSkN4qQo",
  "key16": "4MRRcaHvVzNXVnxMofdZuW8bVCvtGX2YRNbnjaSP5sx76cSdceuJRwCy4N6GhYmCVxsgqF1fjKbeL2pixZajWECR",
  "key17": "5bwDWu931kEJ18rpBRsagVLgLKW1PaYKFSz9i8PMGuFhhKozMpbuQyf1exkqaXDtp3E64vdZ9sM616STcH76WcKM",
  "key18": "5CvcwREXcbC7bHhpnYVRKAkkfDxtXumdznvya5nYKGPQMbTo18VyFnjswsmLaM1Fk75dHnaExiZmfj27CEFcFq48",
  "key19": "2cSG9S3naBP7NJXpCLyqYMtrUrroNpmGexvYW6UHMxVLCuhXNDWsp4R2v7khzq9XHgn9E5vXGJoMQWFCBFShcbgk",
  "key20": "548gTeDrvZ32TWyjxHBmpQ68fPABAXdrgeLjHBnWrJ3XMS3jDhNAf3QNDcEeSWeLrKQCDtaRFT3UwoKaEgErHtST",
  "key21": "5cE34KoHoXx5Aa32tCgWi7LmjWQP1qxvrKfdXDCdBz2upwybnPzE1UDT51ijVckM6bjfyw2LSxm8xwB1L3y7jYH2",
  "key22": "3oNgbXHcN2iWvDwzLdSN7n9FbNtCLKcDa6aLMayEQZFaUpzvpdG6CMLiHww1toWMTbbfBpBiXX88wQK3bdyYsQze",
  "key23": "4d7fbxRLnvvUtKPX27aDLssVsxTndptYwnLWCWCZrhQCdcPaHSM1NHbVxfh9f67f74LUCE63SBubBEAee9SnxFMW",
  "key24": "22nBDby5zXjSkYoSxmCjrx3ABEZuZNFbpjAEGGzAwTnUC71ZTvhikcmV2P3jvx841BKHDWznURxh7vfijoTxXZYY",
  "key25": "4fDQ6UkDaQ67oGfnYrjKmdNEy93RgoY1TpFxHBzHuwyY2D97w6XbVMLq7LZuKTgzFff58Y4n8cwNErctoTthvpzP",
  "key26": "3d7gKAzAE6ujGiwSsmhep4nxDumfNp4PKUqD29rXsAUMFvZhabmqF2teuH9mFFSWrtvmoxuyeGs5spxLvnfBSXQx",
  "key27": "4g6oRLRR3s6m22v479TNYYXRtnBgofTwYXMn1vxABtTT9njD5SFnBwArEPDptzHuWMqoFGFLHDsjgeLUEry2br4e",
  "key28": "2sKdcAHgWcKaKFrgVdxruDTce1Cz3cdL98RhM2kuvqstFysBLA2Lwoi23nq332R9RwGmzKnMBhdCxoaQjLA2kLrv",
  "key29": "4YJ3B6Z85Z9tasNQCjCkeivVHJ4r7Y9WcsaUrW3HuFs5bAoQhyVAqm11EyowRq4bsmnjpXs2Fu5PWpgcFWADD84i",
  "key30": "sWCE12dN8PsqzXzJhfdNnebk2jVRHQQG8TC87tTX9kYfwopGavXnVnrfJTa2qN5apgzC8ysUVawt5fogbeZenKX",
  "key31": "2KAJFovgNaLvPnyYoAcRYG6wWWnoKPfqK8d1iGhTidqt9p1koKNNLzKvnVN311MaYXa4cDrLeS9RCJFQGrGZWA5n",
  "key32": "4tWXp59wiwtDxuKwyVwNpSA3UL5xkwy1kAY3N3isyvt1FWJUVxUejudMe2K56xCjFp77frdda5amuDYEG8dVgG3A",
  "key33": "3A8yCfjB2n24aEncPBiZWnWUx94YzdtsxVVtwoeSndkon8RDPBP6hkiFiRV4tq7VkcdueNZm7AwWjQqGaXbnjDdU",
  "key34": "5LGjbXLfpYFLJZWVCFLQRFv23QHtGQ8izYbMsLchTxM1ftd8vJBzUNLwdhxn8f16s4w8mTh2guzV5p1oa4GQrQp2",
  "key35": "4gUC6DPiXhzFGuuZuRJu9eMEsLMa2HsmsAvf23Vy9UY2h3HX58fDosUVyvFoviBdTY5zvRogncx4DX66kbYtg8jk",
  "key36": "3PV2t6Kzz33YNtvMNTAm2Uob3ADexeQhZkJnhsvUBhkjoEujUUUGQyFEHAzqUGw4mpcVnais2Um7oaPwLS7pzFm5",
  "key37": "4rCSnnx3LrTCEbrXheg3wmWKKU2y3p2cuGZU696oZt6UHv5vJnUrBGwJmNnmXkwSF1sK8oAxHAD1NymmAg4fUGeF",
  "key38": "4ioKMakeyu8TEoYNp7jTqwcBpTT4AuHJgnzJhEswfBZ3tCD56LTVLjwDKLgb5rzJzWkPAePEK7832EGoabKFUCGZ",
  "key39": "5TJ6hXwZaYU9VVZBnmBjWA11BuMmoGzr9QbWWQBqdUpN1gZjtzbCWef8QvWGP1SpFWNfpwVJwSb4R9ZozR8WSeFF",
  "key40": "aXL7BRxZLta7kVT4zPzxDCmWz3NzavnckNo7t8LutVT3HUxkzrkKDDANRDJrN8wC6QjRaKAihJGEcqTY3d3Smi5",
  "key41": "5xgHPFAjsivHq44mbdQUbaW5DEPDX1usSR8Nvnu2vUqsJc5A3GZs1rs4xH4wyAvzzoqLErgAMW7HuMkM53ybAdRv",
  "key42": "M8ZoqApD81DXZqSBZkERNPwAVYZvEpTbruqfitNpoySkqsk42UBDwD5GYQ2ipNFjD2Zd1b5zJx412ft6BNLQ9X8"
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
