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
    "5FSRjq8Bgj6kVHahNNAgBcLRko7jb4F9X6ivgT41U1dwsjVCtd5q34S4qPAjV9jNUCaDQUvgniAQcaaBpw3wiY8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZ9pekGYrpigwiz1xFygkvCpSTM63PnD8bPaUYkqLjpcPfdMUsywQWXJPxdXzPUbZBi4kdEun9BwcB3nr3wQqPB",
  "key1": "vMsyZ1gJt3SrXky3bPxcp3KiX7iULVcGLzGcy1U8qcaHopnPGLx1f4MdPd6vXZ6SpUnFW57CYcxRoqecPnAHkKc",
  "key2": "2w9s1iDUwabb3Yb3XpMNSGtfDFbGAcnPniRLMrU1qFk71kYfCxsA1jEUityDQZrxTp43dMAQEwYPYJevppGPD49a",
  "key3": "2WKSrTqiZmwKxC9M3URNLG5zpSdXKReLyLvH51QG5G7CvJr6HReYTfvyZMKU36ztg9Tno4irFjbvh8sP47NoRUZM",
  "key4": "61sDXSaCxgfLf7BABs5bqyyFoLt99Jr5MWKWuKsWWWMqU5YkGa3Q3er4E5eaiEfvSmwmq1qF6bgvFCnaoi9Tebtm",
  "key5": "63njE1WBW8KNeyJzW3hqXFhn4YWq2ydymDS7p1xo26TVq4Sz2MswUic85dUkSYPJsGTNFSPdyvejvdqC8Hz5LDhk",
  "key6": "2ydQuYyfN1zpAPPsMwRYwPYTYmAQcwN1PPrSAJABsjYTPHBCYKAsy48bY8B9kRjWsFFf9dLXPBnbGT8eFZTmsjg4",
  "key7": "3F896NGEmvY8Rj8CMdKBUQ141Dg3k98szgZXix9omPiPTDGK3RK7m1yGc4q4wTvLfPaszN3Av1oiTY3dhQzt4VwN",
  "key8": "2XmK68scc92cbNKYuhF4vui6pH5B5TNCsUUzNfbVBNjcwAQVuMroj4cuEB7QrDbKQZKLtThAJLyaEEbLFoA7EAVS",
  "key9": "56KAcy5FivqTCcet5B5jRDQAXnPD5WHMAaYEUYF3cLacSyuhmD39TordPXyReEzXyffKPzzt2wAV2a9Y24Q4qy95",
  "key10": "b88XpAL33hAXbXG4Rzya8RS6PhvEMR9bLVurjERS4s2cmVxVMhm7tCSAC2Hx16HKtGqAziBXRkz6dLDRaZamYF2",
  "key11": "3D95ghjnprXJ7nn644ucv861XbHcW6xLuu7WaKVhWAdLBLrpEsRa3giPvstjDBbmYeG3ykQsizFAPG7Zw329HsQ1",
  "key12": "4aR8MjnXxJLj2e68NggHfvXAkpn1PsRaB8FEL8BG1ZofhWLzexqF1HN8rSfdo9TKnPjSvDJ7vqgnL1F5ushS9ZTm",
  "key13": "2wZK46EebzbEmg5umtTb1omn339Yv4iS85ifnLbqjAmyifPqYxS8LS2ars53HHJwCNPu34R8zYyULU51aaerzPf4",
  "key14": "4J7CgGi3tDW8ob9t9AQYCXv75avWBkwtB6XBg4jrpycQD1QccCrpMTgoPUB83KRm8jyrKYKP4XdeLrueiQBvFr7h",
  "key15": "2TzSpKZAzzTRMFYqZfoWM3MKVtaC7vc6jqvraU4ykunhf2AbmctX4kXPFXhVYDSnoTkiDNSS65sKenp1YEp9YM57",
  "key16": "589HN96weEQE1NJkHWVvhewu5aGtDDzuparTNn2AJL28gG4fexi3So8HwARnZ1LZRHkHF73Dd4Murvu6TncrPRTC",
  "key17": "2QarjsoXv6ad4HSMazvSeUnCDff32HryUR12UzHq6chYSEH4WHyNjPM1JZT8JWCTzXEVpJpr2oP7DKeQt9BV3uxg",
  "key18": "32eiMY2UD7kp2KYjkoDnErX9UtxhsAMTEzGzy1WiXFNaxE32nAoBfkabtrejSsW8TaYb8qwrkEzomBrGwDiKkmH6",
  "key19": "57w1sY5rdr4zBLL1EQu6K9tjSADKrD8aFpWmXMijAZmqNgXNRba1LS9w8tK3rCPVcHUZth2tT11WZzfUojg7F4HL",
  "key20": "pXkWruCHsL6fp4EytNn3g4wYFZnRpmUM2hW6kLvjmz9ycYKBSTziFpucPXpJna83hboqbuWdu16TGhzogKSzDJJ",
  "key21": "61bciF95BjZjkNBnngphAxSmzuSnz5cMjTNsVZ51L8Yh4dqFU7mqiW7HR4AzhGbzywqfEr7Dyc5ztJpwXz2sYfY4",
  "key22": "z8aqKzNoXqbunEVxWDgF3bFKdDopmNvTDPWXZamD9xEKToRDR6Yx5ejN58ZZNMv5xVRC24eKe67gTH5DCb2dTh1",
  "key23": "4voZexaiDW3M1LXbujpnLXHRUtkyKYFYa48wPbexd31nhbkgZoaXU6fWt2sjHRWfknq5eq7Scda1DKZfDA3EDR13",
  "key24": "w9fHNCPco1tAeGcFVvFqMNsRV36YTqkFLth7syfyiW1twhjABzJbeCJnbKB7TAHX4N9xrCRgUa6gGFZXJ2bfnHZ"
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
