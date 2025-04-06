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
    "4ExvvMZjLH25Ai1eNjPMhzEo2MSDJW98J1S9ZXs2Sdst6BZnQEaujNtEwWCxA95862k4rBzo2So4wqLp1ujAZgry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZXkGrCdAWL959itUFBfSkG9AoRuhXAUZanTRFb7GyRR6c7Q5PaaYziL8hg4rJ1bTLL21rGKiPsMQNrsRweCtyh9",
  "key1": "58GAegfZFdDMCnVswnqKnKRkuKxZM2LsvLmzDSzL78DHH8sDnuyJYdsWWTtJDGdJJywtDWxZZSDP7Ex8CwBpw51U",
  "key2": "3R3Fo36GYK4sMQGFsLCeQVhyGRoB1M4GkVNSgmcXTSSAiKQPoV2MtrsEMNL3GV8ser9AWpt4sMVgGwcQ3PGhdspT",
  "key3": "5RXxL7oTwj2S7o2gV9rodRj1VFprju5WiXoLs5JxWMp5rxSLFLA6EQo5NkrrrcdefGpqQTWr2CCDtUrtKLy57Lpd",
  "key4": "184XtjB9q8RLwxGuLhV5xAiZEQo8RDKAresRBbxTHnR4aaadMhFj2uRiefN3EVCW3JTE4cDYj4Uqe9ZiUn3PSJg",
  "key5": "21SAESbCYKmEdJGsfj5UE2cUMnrrDC6V2Sw1Z1B4ekAuZzBSc2k65UbXd1nMjNNkZwApgcRqhynxrUjDeZ9VkTTS",
  "key6": "w2UDMffxprnHEWSbnQHyCTDTgVq3RaBY65n5ReoAMcjRw5ciA5t4ncz13GkehRUBdp2wysjGkZ8fU3Qg5PjesRh",
  "key7": "eQ9BEGzBby53tDm5Cjm6E6QpfHpYGndGUjP8oVbVCn9LL6fFm2XAE6B7Pifkc38C8ArSdsmwTojWs7N441sVnWa",
  "key8": "5KjFPQPWHsdJjHJTTkqTsNQzEPqDPwwWhspBKtLUVtuxB6Y3TKgLn3BG1Mh5ip4vtsznU2uCtFhic9SQThePmDTV",
  "key9": "5djtGvgBLZ6NFG37CMFYR9vdVP3MoEJ6drRUBuoqCW1FjrhJBpXqbuuVvP9f8s7cqh7dtguiykR3cLYthsmSoSRe",
  "key10": "3xBVekCgSTyn3zdTLGRK38jvm6ChqYgbeJMewCWGNja6KpMAQqrLdxWtWTpL13xi2G8JinEuh883fuy3LeWsKopp",
  "key11": "3YWsFHufskxq9szg9bJFT5174RA7ieyxH51okHTQpKPKdq1DqsoZB9esGhcafTRRwdwMSzcQfTfwctQNXJMcvHay",
  "key12": "3raHnC4n6WrHpkrFrRxTj8PASh5tK262ErWAWKqUQezDAmusXxVgKT52CD8PnyuDy6k6aV2QrbG5jW4WsdceHHWU",
  "key13": "VVAP2BYeS892bjBRuozfK8JbvSvDVUY4HVV8DDnJ5nh1KD9dr9t3bWyfGNL7F91S4chDSP6VRAAFPssC282qvHf",
  "key14": "5xQMroceJM73XjNrDZvmuzDmDBF5eCbsv24z9hLte7SDg6g124Q7qXMeCK74PzyfiZqSm8JwMqQnW1q4MxMnGH3b",
  "key15": "4ps8NvsSQxiy4D9J8jsgDLAmzQB47cNatXRDJYiHCSFcMaucqzckEFxCQVQhTato6drKBd1fHVXLspURy9Y8WRHg",
  "key16": "2KUVKDwLbtfhANP6HdXEGBh9VmCbf4pgEU5MswNvt2Ld7ebp8oczr5moBogRvtvkh9bHu6UEmgRbEcm7Bqk2Ga6f",
  "key17": "5CUmFyPe9pEVygxdnp9YzNrw5Kx9e7mVuR96AuV1uH4afq2M6vkiAQnKb378TceMK5mPWrYMmHyY4hQtnj4QU3WU",
  "key18": "5p8CRmvBF9b6drrgXcwpCFtxcze28gsJ1tH5ZQmfMSJwrdbyX4ZaXuzJRAsxiyMEasUWt5SF2YgDqVW9WSBEVJvH",
  "key19": "3SixDqFX5pfAHcQoSqr54RaHgNfJJ5QWS9sBMcmTBCcTrzF8eWsZ3rqgrBtpQhgt8hBV5XMiV6a4BNmiHzaAiQ2E",
  "key20": "YLWJayAKfVmj7yoswAXW3DppdKitfaqfQonquHwPHg13nwUaM8T8HiPKWyK48SvicPumSqNmfYCMN7S76vTGn4M",
  "key21": "46srEywD2eDEXF3bYZGtUjBXud1SePswCRfdCnAyHzkyj8gTXSjuaQY9cqaYKghb2aqaqKFinhUbXctHsxhCfTaf",
  "key22": "2fmZyQk7YhNAoJQ68SeyBB9xpo2vF6pm3KVc9WmdYezLVmqirLxdTGBzpF4jkCnUaN9tejZmEPJuUc7DwmuQFjaE",
  "key23": "5GviNNs8aaQeSzgxrbP6prRdutJHyYFknhi7e1G2NYBCo2snwczw722cWzQeecTR2m5FQoqSZw5UEqS16UMHJ76M",
  "key24": "299eUYJNZrteAGUsd3o3ZvAFxDo8Pg89Xevf3yX2RcatLhD9CWLz2XgK3sgT8gbCQ8RERvRx1dHz335YxosYG9Ps",
  "key25": "4DmUVgcH1Z9N8PHv5tyMMqpSwDGXQvWdVouf5f3QnssP4tYjNytKTFXgTeiYGVYeLiM4HZTheXgtzZEmXmYdmxCm",
  "key26": "5QTA8DN5f9BWyFD3YvKxSPKooymbB1yZ5effoFZpS2X83ALnspdMYa49MVMC1ybmXWarzyrD5dhPEB8XRaf5Mf7M",
  "key27": "26Vifh9HhcMe2rfYepgBVdpUWvDJTgARdSjGTe7jdJkyNdxf9orLQMKtV99mJ3xcq8a3vVpYMdQonn5bkbwY9EZS",
  "key28": "4X1i3rkneBvFjTvj1DdPT5zadAdkqnLRXTQATn8PKycwGK1DotuRNZr6RYuKdhxgaV9vbdB3fYaDfkjQyWwHdhcK",
  "key29": "3RGqtxJgX7TgWbzgKesbqzKwrtGAC52QttpekLM29v8fTx3zCxYVTUTa6z3QcjngCxAMEnGHGihybajY8y8RuVon",
  "key30": "3B1sUghMSEWLKrygygfvJJFnDMj59veJrD3LFW3X6aqFR8ohh2PF9WLD2mXoXCUbMFU86nkkGqkLdYCQ7vxn7r6r",
  "key31": "5utWo1gAUwwiptXHkaiNdaPJst8omVguhz64Ht1KHtBp2RPihiMStBse12HrMCr1P9WhGoWihLTwSLtGgW46gBGv",
  "key32": "5To3nSvucDr67A2futzg52ESmb3d7fHfKS5xhexeLWzyC4dzT26JuArHLKQcPkR4tK7KPR1cVt8yLfdzwd5uWi7H",
  "key33": "5TcyAyJNgBfaQRSqbgbVVH66nN61wnngr4F9MnNdc8wAigMFPYYeWnbYVYnof5MUXjZcnBvHCZkudrjrTj2HytLt",
  "key34": "62gaUqsBPLLqdnrzSkYLm97vRng3WusBgf2Wb5crP8tJpGt2zSxxyaU9xFrsQfsdVTjWfHXMDu5LjuKqGGVWPW9E",
  "key35": "RmyAXoaU3fKpmHs5mKQtswfMn3JafasEx25aXKNcWw3eE4L8X4cheAyJzrVeg8qT6TpykELoXog2zmHou2xbbpt",
  "key36": "4dSCWubwq6QKCm48J3XESWn9Dtoq1gUw2tY4xaNrrfQ2ut7tezy9oc6aKLNctwdAp4s9diZSuiN784aCkb5mrt5M",
  "key37": "39JEApfwXkj9m5H5CrfPrknNX1qSqHsPvc1H77ubiMjwJoaNThpCe4i9D83cQsxsi14gUUpVagK3pbBCQpCP4ENs",
  "key38": "5w1VGjxAEPsGyxsW9rdQpBeDec1Xmfx6BpTxPjtXsjsyNxNTvxBYA732p2WQpZ8kWzvaxrhczpecaaiXHH4GjjtT",
  "key39": "4m8GCqKg1j8wyVr1V5EX91bXq87zxBqbM11grYUnAJ1JqybGm8ExdPrFoM2wHjkJzsZXbXu5vLfJAXbE9YNRUNaE",
  "key40": "BSUpyLwBWd5UJX9TksyqMfbHSufKWQDE9oRCPNBNJFBbGxGsyHicDfNgWdbA6bwn8uWs7Lr8U7uBBZ9royvbzMt",
  "key41": "3uVSUdHPj1TAT5Dz9hrXtDVmeKRTj8n7LxH7Li8MCZH7VWPGMdP6HCeHrdjJQ3r9DCZZYVNcYCVRTo6CS4QW2rZS",
  "key42": "62iuuFWxUd5MFiAmrTrYhwAHQTGxetY7AdQi3LSHamDDi64M49vMwNPes3BcCxAiWXW7kdR7foMCGaXrXj2Mp6o2",
  "key43": "amEUsPLMNsUUeHmRBmnsqTewGtdZ65z9oBp9kHy9S6XWkGp1fyi7Jf56RTYQ5oNPzjERbS441kQWijvrVTRgTWu",
  "key44": "2TCpvKQ5p42srH62prFkSY97RGr8MsUApxDzPNWkqnSEcfox3dkiCz2d2poeCcws18jQFpfb6TTNVbZkHf8dgTho",
  "key45": "4T935qz2FgrAkcS7NBW3B9ncwSxeLeAL63FcR693R5vv7AgfRfGxbiPXhAYUDZnWJd9gbcrhMvZxzYiTCDfyF5jq",
  "key46": "4xeKBQr2C7sqkFqkqguxCCcUGvY9r12z5j1fm4yZg46YiDyKbTAC1n4KSW85XbcHgUKUMKettJ8YMKwLMG3WEytB",
  "key47": "55eG938XZuwfTtDHbaf9Cck7do7vqPs5cMtZLMxugvfjCUHfEf6Q4rirdHwiM7ayDsjazQs5F5nyzUKUT7PrH3iL",
  "key48": "4xbxopGfTbNKkZ3vKgWjLe4SQPb7R5nkToof24GbpXSaydJ26dBYyHYwzvsoNq8tSSQXAskoXkvgB2eE8EzUxYLB"
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
