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
    "52LxM91hH6aJngHRFVxn35aa2uZ18wLJEKWHFwSgcZoRWQqPHHiTPbt7NNUW5E5xmYdB2WZcVNNSpiwMEeY6ChQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhB5RJqZBiFQHwLGkJ5VKAodWSiJH2C3aVacEySMZ7k1nBram33fkRiGEkcqWE8GFAccFRz5t2F9HL3drvwVq22",
  "key1": "2YxLggzBy144sxuMARy16dTmXeTuEyoQp1XCd6pvKjFes8gU9xgd3sFyjWxtajd37cnnVPCpMuV3CxZn8eDH51tj",
  "key2": "SMXQdHbY4r7LpbyPFbXhAxrFjD35pigzUFDWfUChRdmRriRzU8r4c33s2MhctRNC32pKT8keeK1CYYjdiknmeiy",
  "key3": "5swHRhtUG4w4Vm4jueS27kpGSj29nPCLwLJTcMBkQDcnGYWjRzmLcd5Vk7MzRS7xUQXNX5zU8brggWpdf1k16Nsv",
  "key4": "494LZuWNPfz2fKJ54fovY9JpN5FRmEWG8Ajmr5b64rn6iJcWE5Wmjws4SrH1Am7fcfw7o43zZ71bnEAe7oUx2Zam",
  "key5": "CnbqEk4DSaUsaWDsmaxKXyB9TGVxoYuGTAhReq9npnFiRmKsE8FRVW38hiX54C61YYDDkFLRPMCaj6jTjbwTWBu",
  "key6": "4WwJ7rEfEjfUrzTnE9x1hztaDxL1TssqsdKQyf4PY45qJ6YSF9DjMrP4FR2JhkFGXJ9d3nCkK3nc5CA7DJBjGk4m",
  "key7": "4PnzwXCcB2RXgpAT1Jw7nCNbrNtgB5jS9VzTdy59kebAXNDweRzMzvKsTdSS5MbxJ5XE3bUHe3LPQ8YrYn7T17K4",
  "key8": "2n8gvYbB5m6ZrjZd5ujsbuyBuPmUvU17cSb9iEKtEUnaWPcPNFe4eUAqs6YP4KDvrx24pBZukLa8g9cDBefk6BuH",
  "key9": "3e18dtdmeWXbFU8PCQ3qawTZmQTSDHp4xL61E3nnhKKi4jeS9geWh6Jrxr9vFA8wUcqf9KVCNEdVhoQCDq9yTaF1",
  "key10": "5BuV9hLzxaKtqbq5RLqEKMUtzT4Gmj2TxhfWHZ8D3Z3DmNAFLYts6owLm7cmHTFSGPvciCzX5FevYrN4hNBB4pRf",
  "key11": "25rccutDuWJyARBMiHx8vNk1pCF1PDwj4ENQk5KCiwkzzReUKgdF2h1iwB6eyj1da8teR3J49vn5uU8VETprf5oo",
  "key12": "8BkMZDbgeRn3kCSxvytNRWfi1dJXV2PW5GTrTUGTkhHswiF2fXBR2VJR1Gp8Ctvx41MAn8erBMSBWrJFdvKmCmZ",
  "key13": "432sLKhc3rYM4ENf9TQmMbeiDiR9BN8Ph52R17ZiT6Zo8qFNf5SDvbG2PkarCq3Q7abzvmQ5PBfAcv4q4U46XEAH",
  "key14": "2mDy4SydvHy8yBhnccYsw44E2vLPidwx4LsqssbDZywJ26Qi1iCbLn1Afp4PFzkuHYMbEYUY2Y1i624d1ZVP8Mmj",
  "key15": "r9efSBErMbA8UvfHncu1gytUFzrzeuyWfC5PrR5s6UmWtxXBpS6pv1MxMjDDG7fmMuyo8XabvrmrKLypT4Vf9ts",
  "key16": "3Nbui84R8DePhcXpeWnSjUBKjdVTW1jGT6SDDyB3yx5EwnyFFHxnmfaB5Q2cEQtfDJVkFWTRXBN4EgJoJjpY3ZsB",
  "key17": "3uPyAvBMe82WryPS2rrJBXa36CCt9WkXZyiLNXU52wooAfYqfbQY2TQAD2mNtBBJnthoB31MZYw9NvtRFQrkeg4s",
  "key18": "4mfWoEXz6nwQ5FJiK2NsSaPs9XEe7JSitwP2PeLegK8fxV8ZyUp75tQAb3p8cdMd6RobsFw8CYpEY3qg3f1VpV5i",
  "key19": "2S73hR4Fmx1AyVVJXSWM3eqrpjsanXDbbUWTcJGxkQPwLit47MN7NL4hSCL3x1D6RXn6eCzTbckrRRVVsnppUxP4",
  "key20": "48Cm3YGFqbsAC3PWSmVd4AwqTu2Eii9SshC47ZgxXPMiVQ7Td8Ysz1rh1tgf9C2zS5ihw1iG3G72joWgCEo9UiwL",
  "key21": "rXgbSbxpYDoYoQcELpQG65nvwoj52hVRLcijgpSVqvpbQR3DwJVnNU2R7NMFF3XD6dxnNqD8LyJgVJMfPjoAMfK",
  "key22": "2JjuNJjzk5k9myFY9FPszG9nQZVtxxthv4A6JMQs712aRpd7R2JGkQooUdiFehpbMZonqmP8hThMfT4eWbWdMj8c",
  "key23": "XeUBt3ngju2jmLv9MqRR95sVnW9X8hXoRipkW5WUdaSFu21EoToaS3wWwLGEcDdF49pTciMJpesbHMYLowdhCZ9",
  "key24": "57DkVPniuozV5XzofaH4nkLvubDXxDpDnnaFyRHy8pmeptSWWJ7m4JpiunAnfa4cEYExgXySXQ9dCLtjn4Ro1yxQ",
  "key25": "nQQjZ4AcZVFSj4z7ruwS1f16FU9fWiA8LHB86DDXRWGuxFRCddrqafL76PD3rPFeQuzMeArH1bWpwZV2hMhRK7b"
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
