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
    "5AmNoQhd9k8x5BBz9qm2iZEtqLSg8eeTZgPKYUqPNbDHs6ckLcywqo7Z2NbmYYDBbn8L6QLHhsr1Fe7YxQ2dwURt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AzTrY59Tmm4ML1DCQSTssP8J7rpKAb44AcBGFx5T8TqFYycBBsYYmYyG6v5S4XL16bh6r3WGJHuer5WtQyhbgaS",
  "key1": "3e6UbdFbeezR2UHXVhNkdhRcPEtFxkhdpb9iPTr1sAwXu22t6HgB2StRb4YCLPSeUYke8rgor5YY8CMvyxoanJQH",
  "key2": "3r9zYPFPVAJC2Kkqg1GSYwGQFyKUBvWaL823ogYmqP11YEDHcWKjC5iwWmCGahs2dzb5WdidS3q76kpaD9dAmJMt",
  "key3": "bmNAHoqqKUXTdmSh7ZYmRTpRHS8mZhbBgYyuUcEMX2x4cYojavX8BDo1rDakJMBtihvQH4wtGAdJpBhUbMJmtza",
  "key4": "4g8XHT2eScYZZcf7CMJgFo4ctz3L3eeGWafNnMYTJxaRonBhUnVCGrPneQHUTkGj6P1o7FsNpoxAUCnzEkyHgJfy",
  "key5": "5DBZL7zupMWK3oAuzcjMiUPtzJQycJVz2DJZwrBGPgrLCGeFN7efh3peWBh4A24C5PQiCfrgcCmwhZykmFax12Um",
  "key6": "2845euLhW39BEnkU7bjA85LBQZnopfjajgjhRkXYWUd8WJdkmPNwznn1wEeW9UAzKw6Usa1NirKMdo4MoPwoVQx1",
  "key7": "36pNSFh5pucSfz1SN3aR63oVgDkBWH3LX11dyNwVti9A6JCUFGmELUX1di8y8o2hKAWYHcA4kDPsUvUKsyFGdnhm",
  "key8": "39SHS7vTosGRg6k5tEyVSttszxhU8evCcdFzukRRrwAEGmthEd44XiUz5yYVerJirspvQeXKRf5NrPpFnAfsHUi8",
  "key9": "5aHowArGpVwpUQUrVWK1wJjPY6ATezW532bEkweh7i8WiSJYWTadgRtCpuJP7WW59kvc4hgiYVTqKFGiJ23YLGGA",
  "key10": "5jKhSsLUKYX86JtvM4P5D26yRgCEstjZm9KydZpfpKr7XgwXv61mvfYYhV9d1DRcQrLkXoNeypgGrRMADXJruPah",
  "key11": "2N3D35TcQnjaXHnXAWUZHWNeSvZSrRCYiLj74uWqYtKdmqvzVd66o5oXzU9STre1isANLTFXfteZtzusfUMnR9Lf",
  "key12": "72266ncWJoV1hSLogsbsSDzMQG3FkQvaV6htuVWH41K63cx34A6u6wmRsoQDhUcpv9N2g9F3mptYMZhjhdNJ6JU",
  "key13": "43RkR9c9hEVMYdVNMtyXqCd3DpEeL42pwJ36dV3pznTqPnxsoU54LBPrFB7VBmiHdqLrpn8K6X27NYw7mRPbrXfL",
  "key14": "5dMn8T1ErgAQVb5EQFw3tX7dKxknU7UpkNAQJLUXAo43D5kv3Z6nR6Yn2UUTux96jTw6X7tLLnXtUCZsAKvEk9Fj",
  "key15": "4SB64pkVv43oRF7XbkiazZ9NNjA7iVkKXDJWsrns4g8w97MCXCgTCCJFLmFy9Fnbqc9HZFKSdLxGgkgsVCnNycPH",
  "key16": "4VabXihXxAdLYH8drzJfVg3ovhAncKT9WoqHy1RnnWQ8jBXZCYBHT85e5vk8FAXVwt4NTWByWE69B63mEGyX3g52",
  "key17": "5e2pg9ecHyufvDeX3i2gPrMBSoUBzNMqTGivnXo7bgM1R1cpwdiPSgn8oo5bt3tkLYfimdbcCHhe86htkLUDj7JL",
  "key18": "2FYYvr1w93XnPJvKz9dfRzDMkSeZ9pg4Fag1TXzS2cT2yyuCNvJo8RQwxbuyoce6FZq922ZsyHRBCRq9kJDcL3fq",
  "key19": "3CS24L7WBwGFFcQcUzafEH6Wom9rMccDaYVyvZq88DJ2CQuKGNY8yw8cBBSxi5VdN5M5ecXBEXMVoGove4q5kDTG",
  "key20": "32WuTR24xSGQa9dZtxLUoNmVEYf8CC9tj1KtxbaMW5fp6TLWBUANERfNVRCE3jcBQFN3VaRrc5e36UbW6sU9HKfW",
  "key21": "4fboRfTPrWrh9tsW7aCv5yWRdx4bf7Q66giV7napW8W9pkcATqpG93LQhM8rkpbrCgVACY1PhbZyCbRV8tkQfRUy",
  "key22": "3npHRdUNg2g3ovWYbYELiNqqER1VW4tkDBvPw9UQTjB2D9mWrg4kWDCT9zuwkE2UK5QSnJ8krgJDAzbFLgeDjVXX",
  "key23": "3efrzGy2zjAjzEPeiXMLs2GGfK45Y24DsXiWWHWNEHLDHYGzfGT4WtpMgY5QX6wKV2XctjtnF9pauAkFVSDkmjAm",
  "key24": "3VxHgMQy1bVEH9RArEurB7K2JATSTQr8sBcgJf1AbapuNnXGFFRCfUq4Db2WXqcQVtn8gzWheT1hH27qdLRH2joc",
  "key25": "4wY2x7uzb39W49EN73C8BT3yDmYU5o26MxcvB66get6Qo9eHkd8ECmL2SV6o18xi2dzkqqCbCCeHipVyRJXZEHXZ",
  "key26": "2MpD8avA4S8tEmeQcj8ukyj1Ns9yoyFt1EPaNmJVBFUFbs5m2ChAfCAzXmnSekbXAJEtafwM6fgEqLU1auC7DhP8",
  "key27": "5gRpVGQtkqRRMjCQJFvGEGmACPJtjHZMdcJ86VEG1Qb3iNhfMknPyoM1HyhfSikSMCKcywydCj9Qp7DKbVGuxGyF",
  "key28": "4RzM5ViTjsHQ8VZMPpvxHo13yqSrdmN5Yh8bN8fBZSMcd4scFVdaaD4zcaxzUQPb3P2xcsiJbMpsKnKyAsQdfy8n",
  "key29": "28WXeN3Fvt9iyiF4dS7fsYw3C4yTNLrR9rinW857LGCarSSzs9Cj8tUxBoFZ4nzpV3excpNjnu3LL8NH68byMQpH",
  "key30": "2h4pCVG2FzUJetebzkV84mKnMmFNpqCkLVSeNkyaC6XJJcvwsZSzsFMmcn8zSU8gme2vHot6arWe1zgbXPqLvtF5",
  "key31": "4y8cRx8jEANUbLTvhnqiwUxMLLMUM4oP2B2oxZF8PiULdgScvVa3ppsR1YRtZDtkWyMjUn6i7pz6CrR26USfK7Mj"
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
