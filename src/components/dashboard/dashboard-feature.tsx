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
    "YF3zB1nyxwTfhjAyBYjCZtm2fjaW3uPXPXdgX4zaoGub9f2ury9mZmuuFAPSCbidqRcjERxXtTsQ6yT9SMrmGym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xShCoNrfFVyHi56N1U1SHfbaHgwbF55cBrDktcn4hJT4hvb6ruKiCnv4xn91z6UKkGVD8PajkvSosisVrbTRXQM",
  "key1": "3KHPD98WXoa81DAE2hv9aNBd3Bcct6SY9U1ZePJ8q3hyRprjYgzCy7oebP9j1QWmaXYZksBH5VXWDaPjpSQp4Wvt",
  "key2": "4fTKfdzeJZm5McZRUZMqKp76rRgAZEh8NR4Vo3ZYFuCUpEPmK9brmkaXriifWaHBiMdLZjPFv2hj41MXSnKogRRi",
  "key3": "rp6Rr2gYjGuYKQVQmsM5JYVqRHvu5ZJdj6iQ4rnCW7Vuve9oUJyEiPoqXhVvWU8Sgd4S8XdhwNScbF78CSDj62X",
  "key4": "47yV3rSxiaqHxBxCwvikEdekJfF5uj5XsRLEw2XuniXyCu7wPAeLY4fSmNq4nDhhce3kkcVVCvjy2Uc6iHLnBooL",
  "key5": "3sQRVw2BNECohq2c43FxGf655DK2KbY796Ad3cgHw7HCaiiWPHHX3JyZVupXf8sGh94L61cXrfja8Gm6YtqbcUHP",
  "key6": "4akCngqc9dEU7byfGtBMq5h6QN5YaDmCqFoTFkSASUqif2ZdHSve26nFWWnzco9vkPp9yXbCJx6575QTgfqtG26x",
  "key7": "HYFf9JgRc38TnvnEMJqkc3MZWo3A51iRZLD9DHwmfTo2h9KzsWS5GYBRexwEaZEuRa53D7vE73oRUZj13gQ8kb2",
  "key8": "JnmxrVfaUcpw95pWNEDfPe8j4oWJdNz7rX7L1DEjdzuorDREvPyqNgdX1fQyqKBnsdDNy9t6X5s6znMi7Hi1wGs",
  "key9": "4f8XhLXuaeVuk8WB1JGRYhy8XYFShbJhzcGRqgg1siXs1RH1AafrxQeADZwLAkaFFaBeEb6595n94kFh2KCG1n3V",
  "key10": "5mifHynxv6Hq4JVZ8W2BEWzZoj4ct7VccfbirA5zjyqm4dHvP67yKiL3H4MoZRVe3aMmAsRQZGe79dQh5yVVrd4r",
  "key11": "LVppvu35tqVtdk2RnJPXsqLYD8HsXJmunXwLtnZFT6g76wr9zSkbXk9b4gFhoPs1J8ecA5d3sAdfPe6VkF1oHRb",
  "key12": "3LffjVzntXhCb3x13cvfLQZbFsMRCCCWUWVvTu7LyWj36P8eH1HAxqX51osU64J6vCUGwHWoAcUDRgeTXvQT4rKB",
  "key13": "4tBGgHRfFTsu4rkNoabDBknDuVkgexZC8frke66Cwwe9U54rdts8hYDnQftZogKeY4Kib1VUzEXY51gwDfH5gkgM",
  "key14": "4PYNXieNvTiWbGBD3K7DFXDQbkFuYCrupZ8m1X4tuzvNQP158J5JNHDYELc7S9nLtPRKep2tDgcSBen9tRYbBPZS",
  "key15": "cdBxBfRuGB2hdNPDJ7KapSFt8ogoFuqSKR6iMkdo3URrbbtuNcsuq2MHWnYkFcyVR6e9fZTZsedushXbTifnrHN",
  "key16": "5aSijZiYeFJBS5kvLwcVvnvSSVZqcioF5SLJCMugxwPQLybQXKGEWe4wYUXswnvoxfgy9rCQpniq7Sf9tPC5a53x",
  "key17": "CJN8W9EwmyJq3SZGhwAvkDPidq63SoqKQeAW8pkXjFSaddSgSaqxgBSEiYdYjufmEHLHr3g8DQUPzsL7PWmvUp3",
  "key18": "46ZnZg8uQxbT2w59wumB3GKiCjWrvegoHu629oFrAsPTFS4pX6JDcQEvyjgefNaMix9j78gQre4eGJfuGkxgaMZg",
  "key19": "3Hdxb9XQHD38BrFKq61ioCZeboZSgjvsPgmrv2L6fqDnxPs8KJvJ452brg7rfDuevKgbusNHip672qDaemABb5BE",
  "key20": "2ABAaxmGEVphimAZDH7oQoNmc3WWaT7Yr5JwbayVJadQVFZT4Wmuo47zL9iTdMqjGrFqdiPHT13aAyhWokFZLqSW",
  "key21": "2j8tznLXMQafYSN1FKUVF7dPkLBS4MEvPQjxYXqxJox9Y7u7LwTxBYqsvMm1nSSYpDLmAEpYdb1tPpcCkEwc7qEq",
  "key22": "2ZVTbwusouYpAP673cbjADTZviorKHUsrDH2Buap3kMa85W9FRV147BUKW5SmZ9LcWfK4mDQ4e9PDSoRxn8AeX8N",
  "key23": "3TdNSoPoZJzKvfThRvWGVJNRPVJmxtwZ2e2Gf2NFxy8dHfQp365rzQrmhXyedgssSFFerMH7spV3nDH1yeFNhosc",
  "key24": "56N64ZpNK1xCG6qAe3fhizLVW7KCoPZG3VGXDpquPKmNMV9HFjNbNSunbZ2KJb3dt1UyGd5yGHWW8rnjf23C2AF2",
  "key25": "3JGQ3Ngiog32pgrwMhq9PU2XuF7VVQQBJ6xzmo3R9cyAFvzfmJnXHaBH1Zy2LpTPH2NL46p57rkoMjCRgULQLXQ7",
  "key26": "2w7JGHdLcWzQTyxxyy8gUHLRUM5FZCUPi3ko6ALGBwGftmx2moMmVfF1PKTKkUiQpwJXBK3jZh931yoANznNJa5N",
  "key27": "w4umdv8D5QjduCw6vGQco5NCJUDt4XQix9oW3tMbyQf9ccyAc6ABVwH9PN9xrFGdxto4QKZaJ1ao9jh7x9drJLN",
  "key28": "38LKZf4bjnxsN48AKpCdMKA9x22qVkgZzteGKyjkuSWDf9fW2Bzm3k3MANt3XfawvrZfbyFxV9ZgV4PWh5km8LnT",
  "key29": "4eF6xt2ybKq7855cdUWAgrASN33YFrpSBxv9BPyUyjycZvad9xrMjcm3PLMjf115Ng3ACUYJmg4z3voNvhZm2Svj",
  "key30": "PuUxwJvgXJmmc5VW6th2auaibyjr62cGdoeADyyt1TXr8eGYYc2vEt6q74PuHwLsjyGbhMb2iAERfwVDgquq499",
  "key31": "3cgaRLjbYp2FPiGeHxcYCdkJFivu41Fr6gPEodEpzcZGs8dweNa94w71bDrv8xNXLjzP25dL1c9Xmpqo5qMeNG3q"
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
