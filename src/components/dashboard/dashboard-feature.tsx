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
    "3RgsbgpMKbjmdYSZmponQqRCqPAwgjMkxAveX2m4dMTZe1ZRQp8c5ocT88YfUXQbJJ68SUoqE7rtdsZNrQHam6yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6uMspnfs4iBzBUVcb2XyJs5biyUFAXa4xJ5sNQ2Ff2JJHWw8fYY1TZrS3RRkyxnLGcHnx8TLCNmAtFuQZ7o7S1",
  "key1": "2EzFZM3SDSubroorHjJTmtGiWctPgxquMpM4FWNsd3dQHW1qzoNue9gxPA4QTfueTMrbGvrusxsdcHYMs2tWKRGc",
  "key2": "5dVAArztNqCos72vK8eYGTe8f38mWTcF7fhZfRPptbJuLeawrKq5R9tnN37kgtzAcout1ppzp7WabogAMyqxkTX8",
  "key3": "3m54oNZEKkeLAsz9dftB6Tf37m13ugjwrGMxEWpa4H9fvMiwib54NZDFeKw3JMii2W52u65TCN7xDwGJST9jBLZW",
  "key4": "3RLJN4Ge1iMD2fwtFrA1L7M3vt3daA8sgbSsvi1KwncpnCPAxgQRdGuyiFH6mtLXgoCFShL8zHm6dr1h72BdkmWN",
  "key5": "5W2WFKV8SMKMZJCpRbQsn7D8Ujv2E5eqega4p31v63Gi1fAH83McmRN2dtbQQ5cdRWfpRs8q8mqbkiCNsD87zexQ",
  "key6": "59mVYy93A4hG8owPnK8YDhsxamnLhECHhUZQnX3exmcHkVCW5QdhzEQ13gvtq6wSRZ7e6aFeH2RhyqGZFYvDS6jJ",
  "key7": "toR8QD6meruvSQ9DgSLsTGo2s8De8dWqHBiZxNNnQzf2CRK1jFYy5bzTLEzdCx2s67GZbzLxW5stSq1tnMSz7PG",
  "key8": "EyMQfwRFTXixihB8DwBuHZ6tirUcBXDyEQXtrwdqPgTqxwFm7jV365aSzH5McCQS3QFnMA3vvHtXUhpRgGpWPgS",
  "key9": "32DLQpqVbF4vbSztsiXH3t3dDa2e1TYEyAb2Jvc4WCCzfkU3mxiF18vFLmTEYibv3ugFLL8xJxwTcg7TGSCiXAH1",
  "key10": "46QEPrpudVs8cUwtJSrTKUfdWVo7rLNx74XCMhDUqwhiknkbkCThWMpQNhCtkLBFyD3wDam8hdb9HfUv5Rckk8md",
  "key11": "5E5X76xBLBbDsiP7MZFzXmmYpC6hqF4cPPJKvXW3HACZokhr2yCA1NziuaZ8Z7U1oyiRJPSmvTne3sccpCT4t5QP",
  "key12": "4gxdHbpP8iqrkcaGfTnzrH4JRbfDWyNvySciBjUkpXZVSL15PzbEspaaksaLqwS2FVjwX7kGTBujww9VauRvXwUR",
  "key13": "2PSrNQvegZP3fWqLcoken7dYDXBM5eKrnUYgYjfEJWjT15c2tuLPAwj31DYGHswTjRWG4ceXjamqvVQ1fdw9xjCo",
  "key14": "3L26gMi4uPpMMaRE9XSgiFezh2uqxrHsUXhexhJTdyQAxw1YVVnDJQAmPFFjRgDPzq2Feppcbf2HJeCpzpYm3DuJ",
  "key15": "33JKmq437gKqsjVyBF3fiNhMgPzQBPCvvYhmPSUJijRCgSzJav4sCdvq7WojgTsY6JW9DHvenVBb9WC62ViQUKKH",
  "key16": "asnzURgMtrpc5vGufaQJ7AaZvR7jbbY2t7MnSmuH5QqziKmBT8u1F5Gp3ZYVM7Y8ud99NvhpvAGHWwkLvwQxfiv",
  "key17": "64iUsPrUnkvsapEzB1QKKPdGNrGQvq4g368ssNKvTbxin7MYLSYK7fhafMZcy2ws3TiJ9GAM9G8WSQjCWHM1SUZn",
  "key18": "62tmVEc1dsKRoEbmSad7JkXNJkLTYgFbEaZmBvbpQqTXQH2SUia7ATRXCHTv2pknSip7LYtYvNhJqcQhvDGuMzwG",
  "key19": "57n9TcEfBU1ZTAEZCumxrXiNq1DymZHTtdGdhKJTi2LA1ioF7amSmDBysBNuLCepFahCDMyfF6NnjkeR6ipU7XD2",
  "key20": "5kTPJAfG6GACgpDh7K5kd3dgS7j6M5tEsXrjMTUxmSwUZU1DdxYWj3pRDok5hLMDvYzJFYobGXvwiDsnFeR4EiG",
  "key21": "4eYnZLkdkVMRQFjkgwNwWZiCqtiFDNxT8zRod7gAaUVvYyXeH2eoL7AB6P6bhsE7xP5F4uSuqM4PQNUQVefNLd3d",
  "key22": "2dx8cU6RzT2kMdybq64n9h7u6GD5d1usbkqRDs6qybdrmLyTtVaCm1zZC5knob8JpiVdzgb9s6Cc4aVhCRvG2Hmd",
  "key23": "2rgA6bPwFBmiVLXkJqCfgLqdb7ymETgGDEXgCpFLebBZhRqSs5GhraPVHGcVkVq99j2HiudLXgPcQUdLRcmw13G3",
  "key24": "5LgcaQSwLGgQSTMGEdqrcNyV4rSvC1CVKXAgCppdeFX6DSfGLdg6J5AAdzbm2pW82NE9yAUHk3jwtVyq37UR6sQa",
  "key25": "49baPQWRCgGPLvhhots42qJ3pNxLo8TQ264yRZUyY3Kk4JwFMDU38QESNG919UhdrwYQxMhe4mRfxmLUd6sTobfB"
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
