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
    "4wnHmgtBAjfDNnzwkPMzmEstJZhyLPy9U8Qf1ZPbGq11GjX43E1F4UE7Pfzx9aW6ucm7Pp2FVbqTxRTvLZYiXgEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RYP97xAm2aHC1dfTixnf2WwdAvjrsFLi2s2MDrrnQVycDkb2kCpcmuRxHAxwj6DtZihtRi7v5xVvYW1aHcYCgf9",
  "key1": "3vofke27VNrq8MwUuhthvNg2yGXPaxGAhSYLoRDkDPXCQxVGUXsHd4Xzop9kRxGB72c8WsaxwSBBS8cEgxMdr3HW",
  "key2": "4X6x5bHQKwjD4t9HATiZZu3FRAqt89SxWRj9SAPGDxvXWkRyUN5H4Jca2p4GVwX187e9U8tdgUA9qkQugaFkXeAY",
  "key3": "nEBJhGBpVEtLuARFfqn3gvrPjyBN4rUxBNsBH8RQzBJxovEUMpzuvwb3UBxcz3cU2PR1KLG9ndthNx6sxW2Hjgs",
  "key4": "SkyVHMPtDiS7qzwDyn2KUKpMZexjKuFGraJYTGcndFyb7VebdYo7XzGZWRDdQkkVLgSuWWRz5MmLf2npAWMFvmP",
  "key5": "uWQxBW4LB992tvSMV5K4jxN9QLHsxnBKEPdn9mYp2GD5HsT3oNubZ538nTDSKErd4tvtemZ9dkv8a62hXEiaffi",
  "key6": "4weFZTkgcbwQ945cVXHCpUXzHx95pr2df41NupMooSNALtSnKds2Ly13eYkB9MNS69bSZAps5ij9UsW6mNTXXVE8",
  "key7": "U6RBaUU1vvnuiCRp1gCeNEnvWnuHxNmrRLSywsRKoJauNZ9E5uZJ78Yj9C5t2bmCdff5fT87rtBRZ2pNh1vX9HS",
  "key8": "5CXq9m6ZVnYawFZ7Tn45RNwj66K3or5qFVrZfwFo8Pyk8igAPMqhQwoP7u9vEycGmvUf8gcWCqsmyghY2zmpkDkJ",
  "key9": "3YCQdn3f9jdARc1zFYhvgVzUb7aAnLRWud3mdHa7PAuBp2asZYXPd3jbegkoH2K5uEpC89KR5NkzFrxw83FqW2wp",
  "key10": "3L3kAFhbRu89vomDAxKKi49VrVBUwcsh4mCTU1WjRvu9Zvfear9ktjG8sJ8Fchju8x9ai5mqDW9RiZqqmaiD2pL4",
  "key11": "48d582k5Vn2MJvRyGbZovGq8cYaR2NVSfP9bcK47aehFiYQ4vHSnbbkis4DuiJ4hjPHQ3kJP65YAzh9qkQ4DcRsG",
  "key12": "2PcDJxVDWysQU8bWWAcwoJmCqgdJ9LA8TWpoPn1gDdgR87nRmqdawQr7KmnwKsz6wDjv8JZ96Fs6LXeXuvw3jsPQ",
  "key13": "4tb6upJ2rx18r9bNPPU2Wp9WNiiD18CwCThaZYP3fvmyVsdfD1UPbX7DqtGw3NoEfx5vLbuRCgkGh5rNuoxiYDM7",
  "key14": "2uFDHEVci13LvmER7WCQB2c8VPpgJz6ZovqWFD1zDRauNkuSHVTdy8vgfUykXCtS3h4VvTK4reqNbHSAo1mcnQtK",
  "key15": "rxSfe9o2ySL98prb9sk8iEJgQJjjPH9PXfLT9dDfNfYg3exKiDAcz1DVL78x8f65pnur48UdMFPDY3siQMEsM7m",
  "key16": "ijfg3JEbzoxrGMfYam3EATT1BEV1WGVrP3SM9n9k9jufMo5hiNHBY6pRgAKvwYMAxDABM9bqRjQ7Erd24kQuQN5",
  "key17": "3Hg82RSGSaej53RvTL54bUGqp8pVSmQccyGv7qe37AcUdHpkFsJpCbMsQvw9978Z1zewmkT4YnezfYNJVxsykbTC",
  "key18": "DofDajbLk7CmqzELayWmxtPd69iD18eKazwBfUJKoAgpB4LCH5v6GpUEpnuvnAiYeL18Cn3EXd1FfCbG1fGAr86",
  "key19": "2fNv4rYvzfkE8ds8M5HvmGmVDy9k5SXdSzWBa55NX8w7BgXBYT5sc2aQBgijmg6ze6ELoZYSCHN8Ds1fs3Rmhk6N",
  "key20": "iziXvGRxQnP9FZXSZmZa2G1KZwiXmMzVrgcuVkTUoEZMoEzapVfCwTWqJ1PHx8ELLjdMwF7SNAXJpZSaMMyo2Bp",
  "key21": "4XWBz19YUYqARQxtbXznj99uEibv7vCLYuAU3yfcn8Yuje5hBrHfkb11E21XbUG5FZjEw8kGssx4nazXoknE4uHu",
  "key22": "HcrGhP5TULFX1kpvD2mqyjQVnHnu5yjWbxMEfYmpNHZgrcNTvbkTDjb65nzyZhQJaEcANWTuwcTfxgk9ig3hACw",
  "key23": "uV4sHYeEGhNsuXo6CjmXrDQttekLCTtcbXUzUFENqYdsfrEizZvCe162JnNixsvUf7E8BftZnBPeK3EYCs5irXC",
  "key24": "3AFACwYAmeQS91DtUS7CAvkwo9uxkSDqJ6m6i8qzEjnGKJnzTbAJAhg28EtzYGdz6njtY9YVv17Hroo63G7vLuaT",
  "key25": "33Y5B8n3T6qDWUrpPaNzGt9MzgEtUDhYuaVpwBwDcM2fo2zRpX9v4nx5ukDQip7svt8FwrRX2ye3NibLeDHeT4x8",
  "key26": "3MnkQbhjsNpRXvu6cqzuyFJn6sAMbS9gjsD65AMcnaojmqRyJcbHcLDrbKEk32T52KpQwXf6eGrELLNGAR7xCQVV",
  "key27": "5hVBDA44HjV7AiCSV27evdpvVVEgbQn95E5SfNZHVtS8bYxD5mHLdrafCd8Vw71Vu4ySV5uYvgVpX5tgpAjA2NuE",
  "key28": "3M9vmTNG2bqjUSpyK1kg4WBdXEAYQTQ2QSQgbB3ctAczFa6F7iLq5799aiTSqrji8sYs1YMGqxbX64DSmwrrXGcY",
  "key29": "wavLCDH88CTbK59eKzTh4HxF8T1C4M2gSx2d55HEf7GwyEpvY91uE2YVpsQ1yc2r4jdfK2JAejGtjerWKp4JWgx",
  "key30": "i1QpjQ3HSfkY1GrQETNTsJiJL14HpXJyQFMeG24hyZefdNNWNuHzSoRVGCaBtxFL2zq7kWMtf18NPNAkN7qyP5Z",
  "key31": "YS3A5Z7VZvq8K48V4kvFeFbJHeofho34M4hP6knk3AtLMo8Ke3yyJk24cTL1cFoqKMaRq5C4P4mLLp5M7ZWPsRL",
  "key32": "5A4CLZ4t5Y3BYDoVUhbvaqspZ7mvhL7JAcJc4hpj7BFi5YnoCWhGmmarFELdkhUvyThMc3JD3rDtSiRTc9oAfUcL",
  "key33": "tY7GCrqCf2gqqYuWURPT1fSp3S3gDGfDkKvENuhLrjpEVVbobyfqSaVtHR1JtwETGyjir1Z1YCNknsEPxj9ek47",
  "key34": "2PW8j1ZyA6Ld3UanWCcW3jmMatsHbyJbEwPfYdDnWbp1vLYG9Awxb6Tpso7agwx3mPegNo6sfRpvLnC7JFcmQcxN",
  "key35": "4ZfgRiYLzkwJnkm2TkrFgGN5i1t34fzvuAGKMypoymF5ZNgXhD9z4RBeyZRZUzR6viEC2PPeqo4pjG7ZhELhyvdS",
  "key36": "5BagnHNecNWtZriahXbYq9PL6LBze5rLaBGcD7CEcTqbrgiE979zWQWKSQu6ieQ7Cz4wHRyEQjjebFq2WUb6WVno",
  "key37": "37XTzbboExu4tNCTwUw4sxdD4YBDbZd6Cu2ZWiQe2fXC3cxKXNmC3rRytwmY8ENWrjh4xv2Z5mhqtyZM42hHwRmY",
  "key38": "2EMfvuqJfWHjHd64YdPf1pVquNkwxJg77NPT3x1gPuTmpJuyVG7cdrSyGFWEgDfa9Cfzy8pzGWZt8SsGeBxRGWTn",
  "key39": "pn3S61Lftbt7YCEv6HzBuNHeKGhWY8Qjaqk8QFmB4sJ9svzga4L9zDxnLyB1hDiykWUDNLcvpxkUHRC1Ry4Fb57",
  "key40": "3o5NAa14Z5VPVYsgLoHC8mfYy6MAofz4QCZ7xxj2MJAV3BTDuBirpLWfqDZyV4HkFsU5J3Z8ba15oK883oLNwnnA",
  "key41": "5hjiDBwoUR4tG9MgdZ5ARRP2pAAmCiE3YPt8vP9Y9VF4VywdkeL8s5Qfg3Ww7C2Ftg3QG3kV1jHseA7xmpoLsNVP",
  "key42": "2g1DNxxxdfaWemzz7bAxgqDyBYScvLmM19hR1gEHY85b6xsYVRFj5SUTPRCVwnw8SY13DCXZsPcWP1xfGv9Wk1Mk",
  "key43": "4CeXDBgYHcsj89sxDsHgiLebjTzKEZqxQXDGAs6Ky8Q3yfVEdDszMzkWFTtz247CUKiSiMdugwtKfNR51k8Mp7Vx",
  "key44": "4cKQbt2mEy7GciLKHztHBxfMAACK2bAA6jCM6RetbsqugQR1FmUg6C4cbFcgHsSJzWN1yuZQbDt5rVSQTUxbhBUr",
  "key45": "2AzMhp4tZn3p63xQg6hyf2PJWTf27oMSC2N2y2Gz3R9nJG2RGSfw5doR5D7K6cLQMNMondpbBfDvg3XzeEYjL9S1",
  "key46": "51jg76pT4VvviEHrYvUXGET4F697UEYN4BtxdK4n9ZRFGtpM1Nec5RKeV5ssciJ51PHbQw7KVj4jWWaGS14e47Ss",
  "key47": "4KuSjeVjthzNPYPphGkpEPXefmRdFUfTCudbYrGVFD7Zbmpm9ZpByfwTKFwcjVqsCi56aZpZsDkwnfhP1jgSa4Yu",
  "key48": "c8fkdxEV43neohd98G2gvu3cYrUvk6mzvQ6hnjfVQRnC2DnxmtVNF68MR6BmaxgvHEXKEn3k27F3Jzy54fXoKmp",
  "key49": "zycjLbzhae3cEiPadVHTB9kA5izM5jmUAjYg87uP4EmsDRwSeQXzGiTs7sRmGqb1dtmTumSFQoBuP1iwFo7DWs6"
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
