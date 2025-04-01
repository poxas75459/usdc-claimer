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
    "4pxHKdBwbt9wxB6ZhwGhMpYipbH4dtrZ32FATW1R1mqRK435oMaCDDRPsYgCyKiYNyvJD5APDcSEukrg5argUwdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkW2fp9aRdZ2KNy1E7oN2gA8NdL3a4KvXJTff7XTCR88hj1vP4CcTwADWULF3dsv4AFm5LmbVYWRCxQ5PAj3gw8",
  "key1": "5MfFzs64mmWU1UiZQGNGv9ryp1pn5xpEzxeFsP5ezzGsb1S1SghCbS6GpLS9oDAWSckiPezLcEeMiqbRU2oVu1uV",
  "key2": "24PZViXBixUE7VKxsT3bALNAcr1jVd2FXgrJAKvpxfWXNywxCfrceGDpxBnDBLdUp9o98oPZhnuVPhugenS1piTR",
  "key3": "5DeM7hkCRjzFBS85WZoQ7BTyo3kM1VJ1th3r2NDoezM82WW1MASL9pFa9wBUVXNVGbhyf8Z8AMyApNNDme1aEBo9",
  "key4": "3oGBtQR12MipRSF5wE28471ssPYZweif6T7rduZvou7Aoiehd4p4dN3AmrX5vktp58v4tRELSsjAQW9vtpyhjk5b",
  "key5": "5K2gEgygbooCtquooHna47v4D9oGpSxX3b5ezd73RhxnjuazrAk8BTEoJziQyL62aGwnCWVRq4FBmgWduXhtcitR",
  "key6": "oVYonbQkmWwEzLyQPNxBdD7E7hPy45P5GPLcVrpacr7R872tQC3xEJke87eUsFTXGMP8qubW1QfQoSw4gtU8YLB",
  "key7": "4y245Xp54SPG9dgSNEFH15hqofWpcnSAckf83oQfRBqwKGe44SYXmDpGmjsoENn8FT8MbgUzq3mbguiMCTttfcDm",
  "key8": "5oMmmR57my3XoqifCoA8QxKesqZDKHCa8UTxjr1z4SXNBi8szf1BRNYxAffrJnEEYXuvNz4xJoM5eFbRd9yzPE5u",
  "key9": "Y1dwc5Bys9ustR68crUeKdUDwYjVsnfNkSK382Ku2D5HuqH7ZEKAbSheyHP6bFUMqwzhBhfFJbKFC1LU8fnsJZy",
  "key10": "2CiKKH9RiK62KGqcdMumDhzxFk677Ktc5cFdGpPfZX4kQGtCrLSEjHySYVcLb6CEANkJhFUET3tSgcrjoxxbSHeJ",
  "key11": "eRtoxg8naakVeq64AFP2TKymmn32HL2G6KHADwgJ7LGBrdvDwxRnStvpffsuEbtsNACzMz1To4isQj51kfe1m1d",
  "key12": "oubQz35rEKiYsfPLXfGqPzcPV6EPe3nvRHvwnUHgP8CgXjyVCLQEyNwy52duJN1PLPwbQweGcYKbpRviMh2w7MQ",
  "key13": "3jMNFoYmKbHJ1FCCDFRcDBQKR2rfochVNQpKyE6TDXxeKTPe1s5i2HMNtFVLDKVmWEQ8R8VENZWCT3vAiGBaP9SP",
  "key14": "47NsSRn3R18c5ertbFkaDLJerVoumQmeyagSCrw4YSwC2pptegdQwkemTJGky1D7RLEPZpdi31LangESoS2YDzxx",
  "key15": "386MEyv1bYUFbn1XMAQsSBmo65D3RFzUZxmQMq2yCeF3D62MMfuSNbydvUmasC4LWoua6Qqts9Y32PBDeFjSiBxH",
  "key16": "5YcpLPCDFgEANaVK3zcJt35j2t52ieot1mHpu4ZeYGndWrENdKn24TyZvm8UypnU6NnqsuB5cNhzbLj6CMAUHhTe",
  "key17": "56f3C4KpSpKDR47kgVur2KvMrTQR1NaLRd5ywoKxegDwtaFcWhh9MbDFgJwKnjDTvnMDCSKmbGomWvS8FFmJR4dr",
  "key18": "32PU4RgrieK3GsKnq4AucBe9Ues7KkuDQN2UJ5XkJLTaXADcZXZQreaUEqChKLjt2HZm6pLLhwtiSLYFD2F88iU1",
  "key19": "5hAzffnJKrXGLZTD5izA6qxEq6oJr5EzNxkTV12cztpQGFJoMye6LfdZXJt9nCX8hDGCJUt5ohmoqNaWDXdE9AeV",
  "key20": "4QRjd4kLGLdds4LGM3FFEZx8rjA5HpWvY3QUaL1GjizMYmsoKgN7kthNCn8pPWmJhaVEgH7tF5JytmUQLEQzZf4R",
  "key21": "2A5fN6Qk2RJz6podLNKGff3SiGpM1TWpcaYzqR7eY9kCW9MdhUbGTjRukf2b8tynwBhmrSmDBRizKQ88FZGH4c8E",
  "key22": "1J7rG8thmfUn678PRp8kZk5pmx3UiXvVaMY27GghMx8ZpTpAEfewxX7HvCX6hD62bjVUcWobNMY1Zb49cqDsnAs",
  "key23": "4bsjj46VLJEz9vC18dxYj7EMESp1GM3RP66roXQf7gzLcPaEk9CXQM7sx7RoPqWaN4yjZ9gbHobgRhpUnUYC8Xni",
  "key24": "5Qim1Zu7WhiSv5GH8g7QvWNG4U2LSn9scdyFCH4dYCDHLGEmQ6zoyfgWT6aMoP96AzpLD96fj5gwGn4zWR2kjRqG",
  "key25": "27iRZrmYyBABMBYRD7sniJsDuiAEXsc6GNBtposuPjeaUFCwCbhMPbmpF2yJ3bvcvg1iFVsEt8Vs1g36bSxtpemK",
  "key26": "22eRkaP4EPgaT1gk9NVn3J9WhbAsXhbpU9m3hnM2PJqdVwxnc6NVZuKweS2jQc4ZzRsFeBXXJgMFqrcKxzMWjMos",
  "key27": "2tg2EUNosHoCoU8vtTm6wUdTMsUEFSWmkDZohpkVnykzJU9Kptajys1GMu1iithLoxPLemWtDtk4zhjSh1hGFb6",
  "key28": "59dMtg8xfyTyTjAKzsf3z4HeHnxLPLRA1G5BY7G8piPY1fodfSMcMDpxMW3wXLhNruAPxZysgz6HhNJnq5iRrd5q",
  "key29": "3xgkwvdzw44bRLJ7sMrtL1CJEqDgnDXMMA5T4s7LP8W1xLYMo8CqsGerY4jXeR54CaTQSWoN5kov4VBTwra1NHMM",
  "key30": "2bZCLLPQj9PhZPVyZCNBcwdCbeeSrvrSqotxNPM5xgiJAsi8EzpHojxZLP8KbaEpJhf8wuUYKjEiuetaAiv4m7qk",
  "key31": "52beW2fKAbaxY9uvtdb2M23Pv8RriQghj7oVXAiF8d2ZATM5Xnkv9wJyMohLpkpbUqSGkhPSGWmaLJqk6K1rKVXe",
  "key32": "4x8XqfcEQHEidmDC7Nwv89CujfcS97AfvDRetKtnCJs4nBFCgSjqwjYVE7EiLj1ByFLCERFZoLmmKArRxGeDUGdJ",
  "key33": "4o7AYjkr5YuDzxaGXcdsqeXJL3BQFaac5nSM2XDAEwasoK6QYbn6SsjZdCFavXGYojLAmuZvdv4Uk4ogh2E3uRpy",
  "key34": "2Nsa1SD4ejHgHyYdNvM5V88BoHLfgtyx1BZbZTMqToFA13xW4aDjmDUnK7RaLo9JY15M7WF5GMWwM5pqSteH65tf",
  "key35": "6Q3sKBzUE2n8dhq3vxCbvBxEqW2D4iWXp9J2zixPSqeMonzxsEg67rZT5MGfnPsnDzBMhE4bWTmue5ZG65eALtH",
  "key36": "3wscr7Vn5wqiBT2pbw2WxD1uJGPky2iVyb7H4K2D21KaaNcCFxwmg1DTpNBFsrkLxDdjk21z67n7rZLGs1nYnGPt",
  "key37": "2xadhjHh3aV6rk9zbVwhaBDWNCGMn3MJGqJYG7mHoc9moY1NEAYeSVbSsnXKYxSECG1Kjy8fPC7zA24hbaQhD7jV",
  "key38": "5XMJGCy8bt2fXhA7EZgqiVvpb1VZkb6e6PTTFYXKnrdN6BEiVv7q27q3NyQ3XotYTo8i4mxRk8T14FmZ5hamS6o3",
  "key39": "5kSLdLdjx8U5UPGWPjAnwx3zvuniFVKswFkbLdrQJWqBg7d3vEj6XSCbJ23qPrTaD88bWXEZMQkZgMPhcMPDSMwg",
  "key40": "5F8P1CTyaLMSoxsyWRfu5AteagSnzG9g5Zd6dYjk36arX6rE3ynNjycJ3pqrUbsGWJDgs5UbsHmmUezPWdw5a1LK",
  "key41": "3zxKYDB9ZhBaaP9Rdxs7h9eNxeCu8GzKcWBy4a6C7AaqocZ3qAACENRh5YeYJn91945nXzkebopJJ9PNhD3orGze",
  "key42": "hEuBBKxLb5QTtcfkCJUvVMzKR8tYJDQQbVGMSuGbFWDpwd4UcMXG6LR3RFpjWkVm5xCVHH8catgYsgZ2DkfpMxF",
  "key43": "2xVYwaF7NpRLAHR425tDEiRCCkSPnzJZSviQFPWiFeNUEzvUBqryBWHUTdwiDMbaZNzQKeDHpHUTSMWPAT1FMSdm"
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
