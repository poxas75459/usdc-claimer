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
    "UhGNyXuX2jtgUW7p7dHuiE6sENDE6LZScZZDemJw167nrFHPzMLDNHFswgVCjaATtsuHdGYBf6YoZAMJrYdAYmt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BESWvShYaad7f36mFC6Sot2Xp2zPuSUnbwovGVVKQD6xkoTM5JEvMs3ubW8QVXUEtz5XvdRu99Z58Qpa9gCxxXL",
  "key1": "5DSkLrV2GbXYRqKfiCwRQZKa7uCAUCmWMrAhHF847beCwpUE7iTt9818cCeumC27GSMgTboDy7ULpi3avfkZTmNV",
  "key2": "2iPNqVycWR7cS5dEa5PcoTbrwo24ALtnNpzVPMimZeRzcNsYDnDC2TAZqvokvQGWyYs4V1s4N7oxfdLyh2WFEs2S",
  "key3": "3H4GdDyzmbeto6WbNhTYy5cTd4rMiVUsEKJCj78cDcvrTcTdRsckTCq5Qza8JxPHk82AbciEds2dRwUuhnwytwx3",
  "key4": "2BESsEJ1EjyWuejG69KFb86RuRTMTRFZwRXeFDdkA8H9xFM71mPZDcVzxsbuETEFW3WVptZpv28xPSCqWxnRpXBp",
  "key5": "xvCsv8vuk5eXbf1NJNRyPwUEoTkjoDPiFdnzDCjUW1MuE41RJdTz5H8cPHwuokuzic7avYMkw2GQsatiTWJ8hGC",
  "key6": "3nuFgZbFEmS8x8gBNWzk2y2NhRcbjbqMvxKtd3g7exD8XNUq6tx6jE1MhXXdK8UchXJ4CtcfP6sGseqQJDpJY8Sq",
  "key7": "23X3B6QJe2ozt3zr8Qm68Nhnx8Pui8AbTfasgS7ED6MVj6BH3oDFmVqdbsZ8KLG9p9PiHswShF6b2VEBzcUw7wgF",
  "key8": "3nPYZ3d67AjQ8ZTm1DtxGxneoi2QwAHY6sx2GidxsxDwyG5E1KEM4avuecqGuKx6bapEDQWijjHQ6oEc1W5CEVPa",
  "key9": "5MCZarRjmP651Bs1qfNXRcBZL2QQemxBnfH7WMNMfkWbFFFQ951dqnRS7n1u1tsEfB8NDiyuozLMmcEkpQmvUqMY",
  "key10": "iikWCE82QjnUW5XVoSQLhPtEVJmtHmUtECUeuVx86bcPzSb4upBUzU2S5YYuKXJmBjN9BRkAufVGcJAdBTtCzdw",
  "key11": "a4rr3TURL8331RK5BsUCjc5YmqNkgP6QHKRJY1fgXwZq4uCmTy81hMXhzgD1GRX9cnLDD1Cq8WgiofU2S8SCRwt",
  "key12": "5hgzSPHpJkZjpBuumK5fM2uQGmfjWJCM7Ec3X8ZkSpkdSsLHEq4MGS7K7mVZuZC1npdzPPvdUTWVFrJCeUy7Tcok",
  "key13": "3cvYoBkH9QMx21zwDMGwCGW1ZxMKzmjaquFede8BDSyHZHi1KqYNfVYwBYLoRPBntdbgtzx8CZgx5KWFZTJ5iZtz",
  "key14": "xn75yd5ipzgrgGkgCoQvws2eELgf9oZmUtMJa862ZLUdz8AiFAU3nNxCJaQ5pAVhzFdCrCRKTqmkRk8iG32U7ML",
  "key15": "45VcBy89MpdpCk4j98m74Kq6q8p8juZsRGL4wdWAVGZVK5nZ5siFZUpe8QzHFWQn4XrfJ6cdNrpSdHcwXtQm4miV",
  "key16": "23zaw6CPCYsekZMQgf1QMUSgVqq1USGM9hpuqwtMpmTiSFiYMxW48yvxppCaEZD6dfRgA3iCiqYcX17zjyMAcdM1",
  "key17": "3HwV2CLsXrKENJVWia7zhRotgyYtqGT1CKFP165S45xZmAWSf2U4R9i3o7wSU79TCKobRCYHG3VcVXT6wQVrKAoN",
  "key18": "2bMozPBHiQUrm8jTqPMQHuVxF949NSuxgUvXhQDm1uzyCbfgfoQAmHRS9K8F7Qu9bQqi9rjvt6t6vmMnjrWu8n54",
  "key19": "2pmGqKoqp49fHR6JEQNxQ9mtTFaPESo9ZWk4K663d4F3E2PQFBZWsxsbkFKLCY31y9A1rdG78ZuYjktiZgNwV7ve",
  "key20": "2Tuxo62ucEdR7jc1Q6p5h9BXDF6FaGtQNh35hZzu981bNwXpaEXx3DHkR9YZUdfH6RGFmTAvWABBYhCCgPZTzEU3",
  "key21": "4PPKR1eq2k5EYxyRgsxkmKXvTL5LcodszWTJgdEGgP349iF1cmMr6VMAkcEShHC77pCSiFVwz6K4dRJgVhu8TnEg",
  "key22": "3Akh2tGdsWgeZhvSv7jS3ihxNo5JEyVksmujqvH1YXsJVt5qePWBkpA4LH5BKpMG9w6affySXbSgmf55eVvEt1BP",
  "key23": "5tvD82twDGn8j1RvMgQaX3oVeMGkv3CzceBjZrQgYWCFSMsL5byfk3yBfugSrCahCym74aWVVH6uzsdCUWGgRGPe",
  "key24": "5kuMtwofcy1JoM5CGbwM9Yhp3aFJFr5vCZTC6NGnTyFLe4DVQ95QwQWiyVefXGU2MCqFcFD78GyRrZa9PvcX3wci",
  "key25": "pJhV2hM2cSziSpkTXtRDMdKCVy9FGDYxd3mSQAmMgn6bE9u18NHuDfGUXBntiK5BwHKmU7EbUcqbJnSMUfZcyDt",
  "key26": "3g2vGs5xFToaEFpNaj2vcdQWdV2pqKcxmpehAeXMewnsdQdF2tuX61PuwKLFVLmhyMmXgVrypWTcjiVMJoNubpmS"
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
