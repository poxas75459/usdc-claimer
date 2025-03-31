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
    "4tdzKCJ3DJYoeYvUq9cczZnRBKNzJcvzjDVMDprB3gamfATaAdQGVAGnfr569orvXEhJiyUA4TaCBUZXsM31PX81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hA8mRP6DPQzRbjwLvgQvQFodSCMxtmHoEGBQfeAB6ATegLaak254mjFt8pVTX9Do3wnfaaEse1sUYx4oJsgu4zQ",
  "key1": "32a3kkcofNZUx9PP77Cb75M3LMLEvBd4H17QnrbtB3CzEhj8pjE9K15bQvPxHRmXvKxcuz3eRMd4hEDoSfwTRCQD",
  "key2": "511TC55J1okQRPyvN6WDEjZP7pSz1XgPTq4fTQgngPcn6tNhuZN6Hz3kRMJaneYXHfeWRNHWoSyvhZ6WUJBsd4Aa",
  "key3": "2gP2iFgS3CgYaew3S4RrLddHx1tZq6mccip1NJNgxnmyTSNhtdEWLRdiruQGyH8d6jUwqHqGxm1czNYWx3d5QZtR",
  "key4": "2qVws59uBtq81tisFXXF98km6GEXHM7BnXRhs6XnjsgitzdfAHDqj9C7LYbrE58bDtRBsdsweyYRUZgoyJLN1j9k",
  "key5": "2Ev7tjZuWs4pUsH7kuN4WawUQfNttVhmLG72e2Mc5GoUde8iSNtGXZbUhXSE38yQTHtCVDXGk5CR6dS6ug4g8pum",
  "key6": "4smwisAEq8rTQx9nJkVj1v94rdb8LpPDccqrbj4gvWmNvHFf4LF6xCnnMmbcq6BicFAEbehARwrvYH6fTEzAXF82",
  "key7": "25M7yFBySDsCaUUjUd67v21sQYWeNGqxMt2pUoj7NDfpgwTEAeSfhZPcY8XqQfuNwrCjCzLy4gj6mKu9JobV1S1E",
  "key8": "2gbtLBuzmsXk9uGS6v1LAoNyBvgA78wELXJGZjgv5KxyDZkMeVhVP5kBPwJu3Q882EorDMhL2iTygPMvq1ye7jT5",
  "key9": "5TsmpMMR5NqgpiHd5E963JAFGPg1oVyGnvbKmZ58kjXoNy9Wwn6EnysiRaT14u2dLpA4rgD2WxQSoAKoBy596nCT",
  "key10": "4q1tPg4NDcp48iuiqQbxDNoRTqeA7H35cJNvLhRn7qoHBxetvEQ3KGnTdZKHpGj6tsftBJJjUAva2kPNdNVmRZV7",
  "key11": "2g48Mthf4skgPJ5bs9TM7e49q8Fx6kCZgDnFU7FrSWDvYrMEQUq3eJZ3uayERQUZF1LAg6aDr43TyQxXXVkHRhhX",
  "key12": "5za3UcSSNbVuyXATdnQiqgp6kcNVoPZrzLqEEUN7mcNtjeTPkrmCWbcRwNeKaS9zVQe77uKEY31gi1Jng9zmrrEe",
  "key13": "4wnecTkmgyvPQFhBrgLg4dN9fKH2eiK1Wy4WWNppk1okEraby8bnNrbRaL6nV7jjJs4GyM4cuefLWAQ5Sq2KZWT",
  "key14": "3AgFQm1WjzFhfbR7vADujj37k5rhoCerdNnrh36UDwifZXA1MGhESEcXSqPtMV3V2WgZ1tnHJrhq4WS84e3wFqQE",
  "key15": "n5CV5ehUEvqzpXUmPbmvyfBDJNoWsRzJ14cnJCyyizjGwyDPRPA9nKWhUk1P7XkLEasfkYuXUK3xUVGUrYz2H2u",
  "key16": "2DHkVyDoTxVo8o4s6d4JTAUwjhxKozE3E5yqA6CXULtBrnvb2YG9cRguKupap2ZkbLPCJGEarN9V4VYSu3NDT8Tg",
  "key17": "ceHawSo62HzoiyEzXce1TdjNrEsut75WmaGdfiR5uGymDKMANoD64bWDi91APY869Hudjus5NSEk2hpRCEvzHaT",
  "key18": "3RiNXHMJdyLHz4WsmLeifv29664vT7GzMN8oGYyi9PZHGK2iRjzX5DSzfrMxNvW2hs5fsqv83QERE5gJMmdaN6mc",
  "key19": "2YsfmWzpW2G3Hiqavzwa5wGGLXjvFsSMMzefTmR1s5jTF2LqgxAEKSLpMMgHDMJ7gMWxChJE33SXv54v76BsgBo2",
  "key20": "63diz7LQG7J8ZBx5CLnSZiHbxD8jowpo2a2XR29Cu3RSP7beiDSH5cuo3XufAsg4vLwGRzGaoWgczz2DyLuQ89nE",
  "key21": "3gKcYTGFa6U4WxUj7x9jQmuCBCg9xEQzyXKAJEx3UCAbsoiJ4ryBJXuXRYbHTBvFyGDfHAuREgiTcErcAQ4K5aWM",
  "key22": "5S349bVNCtjhpfn3bAFawAc1jymQPSw1jQNZG5cfSjLXARe32Ssf7mxmkvSNezCMqaQ2PpMoLyHy64GT5ntPSgSB",
  "key23": "2b8J44oeeLVGJSQjfiC3ceVJjYeNFUpM42pd3c8SM3nuhjE9HH6ABpG271JngjKrkGtd834xxC9t6SQVHLnfYa4d",
  "key24": "56mEDbCNis2ALZRy4Fjx6TmMGNGZNJa4v7NFgqQyWGwm5yNzr5pDcExRtpgm4VHmjmbZ9Kb1ND7Kt3yddzH3Zc3Y",
  "key25": "4FXTG1LRQn8zXLeU8wUxHeVksThmH41nftJ6aXP8eiCCSR6KuwSsCe2a5aXFzRB2fxMji325w5HmS21SMRSA416B",
  "key26": "tvaeLQatG36t8wDe5SrxdKMB5Cq5e9DTABMECAqMLfuGYBRAsSkirBy9SzvXK1mPWJeyQqEA2Q9g7NiXcithcVi"
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
