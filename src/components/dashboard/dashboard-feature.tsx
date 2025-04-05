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
    "trreyrXCkYQixQJBEkddKpiXiWLy1yiA9qUwpYhEtzLCvyWwj9zPMmHimPidAZPZAG1jGVydkzmRDtpW2CdKDhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fC2qFVupbJhCyxSudfiovppLfPCos322CejVjor6XMPwANfba7AVVcNR6NpKaVDpZ83RYz96tJVejMPTffJpbR7",
  "key1": "4JR3yS9jnVH7JBsmyqgxGsLuc4oAegf1DH88sVyMwoVBTxXVyCgWi2CLDuAeuhjFXFvuZMgW6JKRyDvXo98xemNP",
  "key2": "3TPNgqoQW1qaSDbeogMv4jCSz9E5ysx7tfdVBWJFwc79oRo1HfmJWirD534swdr4Fe3QshUtBmc5ET3xxQ3oKDy",
  "key3": "2mFTfUnBNAq1Qfejq7Xpq5N7b6Dbra7zxrZFrNLuu7QQ4228rafh5r75ivcXFq6k5MRbt8w1xWUw54hjgSU8MPWm",
  "key4": "5FwURSyKUveoh7kCAMfvAui3PKBuuhYEDYFrwC3npyDR4n1X958we2ncL7yL1RwAeQxPNKQ2d7NDaN2Fopkcp3KQ",
  "key5": "jKg1jufgyTf9UZwPmk7QsW5iAbwgGVhmRsFXjQCjJ1u3Ab4omB8A9228fhZRz3sCUkNPPAL8YAguRpMMH6yVEgu",
  "key6": "5bXXXSgGRFemTvKB5avB764sxFk6PxQzeW6nGeKScieRujWPxn1CjCrJqNhoZyCWFWbA1DbxBwa5iXxuRVE89N2a",
  "key7": "TWA7uMUbGni9Vz2utVucyau8qrXALB8Dj34JTV6YVoTVair1QS3HG3LYknZAktYoYtGyRHABp9uHtYUkLNn4YZz",
  "key8": "5akj8tAYWTbenZ5c9fSbBP9ADqh4iSJibTYsQqLDwGBQf58w3xxKF48aYc76r1QTwyXJy7h6wdsq8FhWut8fbFJd",
  "key9": "3u7vf1RYp1xBpz3Dx14EwprWoYTuNGQxcsicrhKkZvDBGc5aYSUZH3PbWVPPNMSNf1AzMRHpERJDATaVwUmwJiwD",
  "key10": "2GYAnPBYKg6hJo3T218W9bdV81MYHTtKRJHiTdT7tp6vgrFBZ1LYapQzwh4m8M3ucQnUHmNcdWm9GXLAiSQ4eWHW",
  "key11": "26FJqHFSd2xSC1wiTzr7boa5xqypgmiSJAVoGHK7x79ZvHfz8aeEoQ9wnhNbNyRiSzDJVQBnxv283wQXsZ3PNLNA",
  "key12": "46b6384CbbZogCYnaPb1meQskLYQxoocxvma7KxtmSUo79uhjryjg7CmWYnVVRmnrwvdtPwWAD744pZxLZJV7n3R",
  "key13": "2tXCdv8Sg3dXd1C9JipZnJfqNoC44HdaR4TUSB2vJNTZWHZXYTWzfLCwbrcX8cN1NewpynfdfJXER7LMvjeFhecA",
  "key14": "5T1gzQ9sHdEWHsmwMiNhqm1yyhiWcGm2W4MiXszs5tM1RumVT6uxsErqoj2iYM6zPCYThb4UUzeSj9g26Wn3sqhd",
  "key15": "ejJBHLixjEpDefQPLfzMUdo9gAXwH4WfyA8SvdVjZHmtva3Zy88e7UL3GH2V5zMS3A1ddEopEtABXuuppVbTMsb",
  "key16": "3gYQ5oqXAt7KUrcAPCASE3koJPLZCZ29TT9X7riyAr7TNMRm1mJHoEQSXatiEamaFM67tKGanuZAn7RqZYnNFbp6",
  "key17": "1Kfrg8pwTQdmJJaNZrtL4AdmV6d5ZEDb3MGKxUwQZAxq52F41f49A1bedNmQ6Bigv38PtptxKaLBzsnrZUGmT97",
  "key18": "ZTryfpp7pDyTLX8ZwrzsWyfUCUyJ17ge7Lz4UxbZXWdK3CoE7cWU54VwJn8XP1Nvxrt3sbN2CPckXRYTmXgXW85",
  "key19": "5HJLUHYBAWcceZYDn5emxEcYbL1HzpsN4x6WWG7Y7GhdQtKutAJLzCy21A1cA3Np9uUnySZzNJgcWtq2SLNnkHM2",
  "key20": "hYbVKTUEggSaYXdFnT5vjeHCQcv2EHxR8TqhYaLuES26yDLumA1z272SJTSg7KDp4AEyZW4ptZzvnGJjhypWAkU",
  "key21": "48UNDdfDVCiRDzjusW7Pw9miJDzwBJraKRNg1ywXeikJMLJiufpFzrDrv7EKcGnjkjW72eLFcVqZ8GeqhqD8b69q",
  "key22": "5RUk61SnXLWccXVLZ24eHwsdp6zLVntL4dMfGsiN6LEdgasf1MtvmtBRyTFfguHEqPmd8zgmC1XM63i4fWFwBX3w",
  "key23": "4LVQp8RXTHddziAAKbbDzrWUXvUe15Z84i6p1yPM5gJV2tMwcHksasen18kH3FUexRXa87h2oMTKyMaTSYisZvrN",
  "key24": "yCNrbjUfLEQY1YoudcN3yBiio1D9Twz9ncNU9YhEwNAyDjND3RFJDDQwTJ496M867zSu9WnxZx8Piutsqw7HobP",
  "key25": "22uQzY346qxTvsHL9GU43uqBn44uUEzWT279k1sBBebvzRjJk2V6otAye8P1Q7jDLwa3Ejh2ATxKb7vQUeJyVpJy",
  "key26": "3goEigtQ11TQAxeHowNVKZLyhgSDFBQMUoSEwXfAkxpHWh8n94kTbyjzqMwCSpUYRKbzESyoBVPF9XWPq2oMffiP",
  "key27": "4pCMzZDoC3GsMcrF1SmQsadeD7RqRqvxtDwxMwqrcstFFiWv2dECToRXP6Sr8Zt6z1xCEge9kgXMAbEe8CcB5EhN",
  "key28": "66nvZntiCyfcSWV8xeXbbeAM1EY2W9mjyfqQ7Fdf2X51ZGWvKDqR2bY2RqM5rfrB8ZpUWaouz1Fjk5WxVsFYnqLz",
  "key29": "3wR9mN99SvyA7x9F4ALvJikoRDmrKLKReV6Bkw38DDx74yqqNjzLw3cjMFrMmqG28dhgCnB7RwQfws5HekcJjQ6q",
  "key30": "35BSz6gXF9HqXS3Ytqk1R4vGfNDX4oo5GA5qiz57eJYFkbk3KwZgnRmc4ZpeqrbDLHKqre3vZcXJawUrSzD6aLUy",
  "key31": "iemyysVPQjTdKyQ2TYV1gd5wgdj47c1mFrzJg2HvdLTttdhpgwx5pXxMV4ZszXTC8MuwBygmZ2BJFZzSioi2yZL",
  "key32": "3gQwWWyDDtJHd6x3UqxUS4eYc9PKYHQDUHZb3taVWfw75UpqomQ3t1SDMBwZ2n1TRBZKixM9P2RMLU32xG1wD2U3",
  "key33": "4RdUQTYYdBY5vi6sL65AbBNLdvBChskUTVo5zEne68T61VQARNCAknWCXyv9kq13UtopMXGqvmnqfL4H2pQVwDCg",
  "key34": "3dt1LEapLpfExDpW6upDrv1MGjpDruhcpTAuActJRtEGPojhxvbBBEHMg6apTLYKufh29p144niPs8sGM7g52NW9",
  "key35": "5iSuVqsdTkuNczoFynt8tEsKhRc6oPDR7af6NHxXnvswNxpZWFPc4whcGmAj8FXMNZ5KovKcWTpwbf8NqiwYxkTv",
  "key36": "zhobRRLkcx89rWueKTWxD5Z4qD4PAZq6fe2K6vrX9HxipnKoWuRBvBbovwfqZGXueKjNBQx3bmYxSPV4xcWHDNB",
  "key37": "39MCPKvPma6FgH8qELBJosGrRnvSJSjKGmTg32LqS3GfSLpcnzDoueiYQ3cdJaYiiSk1hP8hTT3Wd4xFDFHTShDq",
  "key38": "2wzn5NzcnjFpZBUwJaefaQXxFDDuEPRLXifuTkbaoxe7xgfjyBpvUYeJcaj8cJTda5Jx6BoXgbHeJ5m4w6owMM5C",
  "key39": "3VVdpBNX9uP2UCDLfZmdh3cTqnfaZDDoHDK1LVeMj8wJAJmXW2q5MXig7a2W6hgFYD1kdUATC6BYF8sGmg3do1US",
  "key40": "2VTnkWZzDxL1coSMBqmScmYCStXrEk4gpbAW55Hg61RppShq49m4kCJWq7J6T3i69VPVq1g7NVipkvLHqhzrRUUM"
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
