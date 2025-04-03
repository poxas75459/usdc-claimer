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
    "2QutZUTUFdQMmFxKY4ic75Keqipr5AZJob6PGnuBszWb5vetw624Dmesxh931snA7t8KG2erjWaHx2BxTWMk8KEP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rg6KtcEnBsvEZ3Gj2wi4MPVRGB9HmCQTohVtehKkqrWDWnfsw9w6jEEKMLxBLwEE2iortqXvr332eoPovnqbmFd",
  "key1": "DrWoJ6bpYdiNXG3h71pdWuSzNe3qrzNeNJot7Aq9nHCGwmKB8yzhi3MJxqkVVYBxYoZubxYfSnuwFfLxvQnArso",
  "key2": "4GqBaEpDYMxQr6H6s5tyP1kQnDzjmLwS3mcF62ByBH4eCKtQgHwasdnL3BZEPp5ub16ke3nQaNtgMp7xoneQzAYk",
  "key3": "5qt4HbEgS4rxXzMKXLYmXbKgEbji5kRdbfPmuJ9zpNFVL8UGvmf7WNa6vwVZC6QxXz1ZfTwWD4Pp958MU5TsUHF",
  "key4": "4HcX3q9znrxrXYJPqhyXBFPVcA3DXXfUNJNH3xMDiuopQEq3oaqNvPupdmnBxeEVGbnbo82SVE64H17UZCLg9Tud",
  "key5": "4LGpmhPvzPBC9vUKhLBXJgqsqtGfaQ3PuyS7Ktrd3joEcTG7JCTwuWDbMA4J54LtEVh9sAz7B83wrQFpnQJAW18C",
  "key6": "1VMxMi8DPgnX77b2n6Us1FQj9pNKqe715PdxMVgS39ZyeMuWZCYmdqB3R6eFT7rrc55anULwDaVoR62eA1FZ5Wv",
  "key7": "2ZabRSeGwcMioAtWK3J3vHamwSoJrd7Qa4Zu5pYEa52r1noLZDCofU5k7o1G5mRnNWaHfTNDeayeZE9T4zdZYpBG",
  "key8": "5pzM8vEbSb7R2hCPfK81D6r58CVrfNWh8cQ8Bs8gGSqxxCuRdNYyaUhViqJJyQ5K3pGFhaUq7ewSBqihWRVsKgbw",
  "key9": "Qrq96sYv3WFGPVu1vmpwyZku6WjgvFF65b1YdocJze3Guf1azho7okjrUtQ38vBrCVJrmSnPCMSvcCg7wrjB9TY",
  "key10": "3R8aFsYEi7QtKgyLWEPvN1Zor2bhcmmcgPzMQHc3zRDBwLxzBh1iLx22j3NgYLqFuvX1FzLiJfimo1hgh4b33i6A",
  "key11": "E8Tn5AtmkcrXUgne9J6D8atgH5Lc33A8QCmVu8yLqARGhVrjZuwB94Sx5E6GofTfwW4pUDSpj2RPg3eDzcZ7JJE",
  "key12": "4RhjqVJ857qeMMrAyehxDCyN2XGjVz3d9BwB7vwPq8E2GidFh3HsZ5FF55cM6MJErb1N1Q6k3qwwzq9qbbNKhBjB",
  "key13": "66vPU8Qe7xGbJzVpsiwSCMCK5x2hLVjqP7rFYki1BjErCasEjCfdc3Em7oEcVHzTEaZTmcvTGPo2uhTSGxC2hr7r",
  "key14": "5UDXoa1vsPYLCHgwQps1AboJgsGC7yMMa6aoBbaiQfWZVx1WAoMxvtqNAMMrgNUXNiVyU1Ms7FRkjPfbS62VLjyv",
  "key15": "2CWtLrXWXFY1YK7PsdHhmmtM4xGnhD5b5qgkbt9QXAEChwwA2fZhx5im1zwgzWa8bpKSxRGfWqVfVCZKzSUTAhMS",
  "key16": "P14U8fydbmqnKuYWTnEzQYUMPdQfXGnXR9qRbsfY1JRQjPCqjUpaQmNcnpJiHst2s62aMiUzg2eXykNaTQNSmTk",
  "key17": "3ArA2VNiUXANUwcVewZbsN2XjkscRADpKLXPqAgAMkizwAmTRRt7Hfk1c6D6PyKTMz4ChWdr3FUcrKyVL2Pio6Mu",
  "key18": "3gWA8267hV5JUpQ2RQWvEq9ptZXUp8s4jawvFHxJaw4q2EYSTEby9eu1WaJSXFipXrKDMCBneSbwZqMMWj36SdMD",
  "key19": "34EABrmJqTRC1wuUNwA5ob7NErzWKAzJBDXVYKTg1WgQ26WYoky6xXPTJsWB38tNVaZfV9TVVP5iFwANiqxhK953",
  "key20": "26XTMVAKUdtbKC4zdchmoVkYQtkfT7E28o5Awosjrpb2bJxdT3QQun5GRbRcb7Cd7LeQsvME5iapyTXWoqisaDoC",
  "key21": "HZUf9JywDnbgYjwNfuu7qMSm3cM6gac43L8fmu8a3fugZTD9iz3pjw6s2x1CJvfGM5BSgDFgxFacPhmN4EgHtWv",
  "key22": "4Jaw8CrsFmjExzDYTDgxiSrhwNMznW2ETpQFkd2RQQJBC1KNdbdXmUeKe8MgH9xan3vrsavRSeTMY5iE5KUUfATL",
  "key23": "qQQezw1XABSbSRrD2c4AQxQKfWbEfRApL9TjVD8LSzfGQC7ktNkJRv8PJYY13gCnca7LccyrBZeENyhJRNq3FxE",
  "key24": "2phYi3LtigdunmN26GyrbCteexU5D3umZZJXn54fCCbviGqp1Ug3ZBP4Aj8mMrcyqZNrpKLMgRopCycg22fbNCSj"
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
