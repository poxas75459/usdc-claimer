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
    "5TeEF8eqP8VAWM26DHr9BGdSij4KtRWE1Wx7okpVkxs78Xtce6RZjtwmbeRo7BTSs7Zb4NGLWeEWzsCfw5Vkdzck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55YwV8cDSB8oggFK9KxEVwQAEEjQv4nQ2KGknSvMRrcm84aAKBc7vsS3a9iRhVGnochbnG3Bx2EdDLWnjvyJycgr",
  "key1": "3iqgP6H2kMcmAcRQJ3ygAeyjXQBZbo6Am9AsUXcPL3PfP1bjSyrU1W8MRCmRGxfnTJghwWieWtkgWsoNWyfWzFuC",
  "key2": "23Zyhn6qaNKZVCbWoCZe24zxomRmp24hCv91zXGhcy9SE3vrzzCe6QAxC8kTKkBASG4AKt54Z4SgKuCsb8bKMPWt",
  "key3": "2xjVTwxdcMVPtfWJjUwJyjvyQQ4NF2dfvhcZcDKB6N3H6BS3ktckzAjWq9JTwDdo3kBqqdDuSHbxwNx6AfpBHEkn",
  "key4": "JeEASEtJszZh7GWoL3wPAvZEGWB6Z8r37Jq45kLsPNybS4Rqd7HFxRfqkS6EVDXENX6peup4Xw8xVCYVLwq39t7",
  "key5": "43hF12KhKDGKDWW8Ghg2u95zXEjsLsGdinynZry9nraTThGgaBxMzxcooVuP7BtKH7dPWRutXoBwFst6dvbWsWJW",
  "key6": "22Kwp3HkhQsTouUPYLDnCv9MPLX5dG8s26WvuaxGfXjvFtChn5GGbW7heN2n6xh5Cpk1dY2imkCRLpTeEdskqhUL",
  "key7": "3v8hbLcUkAhesSobgQEdBTf8BabJmGqgFKu7tB2L6Hd14gFVFHQUq3YembsAjL5HwJ6TyUpQsNSjvVHky5AZoRog",
  "key8": "3JYSK3P5pPMUndVApZzajkEwdd9C8oks4agdPMv1R1oGV2sfL5p38EqtthHBhTZMKSogSvFB6gykiJEzJBDXZfwR",
  "key9": "GrTtWiZH7Hs63iTsSi4DZi425a6Rz6ghXH1gwtj9Pb1AVC8mMqUhHFBtRRHRXSi1SEssFWqLCZxXrqAHeMSiUjT",
  "key10": "nkYvsPs8kpMiFXNsJL1qpivRcFX4ANh7km65VqLvbjVCxT9Mhrnd19ARXQEnYmbkUSts29h5xcumsXraHZSgzay",
  "key11": "3kiT8235aNKfr7w5q8ZJ2VCanREXJaoZCiLnsf8TpUyXb6vaxddiF469kaUYrESeHEyaiPwupFvX1Aejd7vVMCbj",
  "key12": "2TzQXGg4FnKGeiY7g3dwyttbuRhykSQ3kZrbSszQ2afU9fhrmNTHJ7B6BaEKXr9WbLPxXZzQocCUSrXR5KZZVAyw",
  "key13": "4a76VRWZcQMy2QdYgwcQjBAc5SoMKL89Vvdx5koDVPgU7zpbqCHLcHY5Bj52VknSaQRRNA7WiM1y3UKoidGgAt4J",
  "key14": "3VoGkxHSYem39BNwzRJgdDknv1beeAkLNW8cECcjcMpyQutWd6KpoMNwktRM9LtupYJSekC44ZVWcqoUUtDcUcNt",
  "key15": "pWjHHjWVfkGHSAASkrQkK2GJ2cyxkrKmr71HM8JkyixFDQTapSMDnP9WHYLvm9vJMtVEeSG1MDzEB3WX3W8XU1j",
  "key16": "5Sj8241rCWAbhPdZsSapzzwncpyPcAi6VWniVEFt9XmZUrS5nF1Uc3rSMVyVQ5Z9jh7SCmdr2K9EvUkD3gKv2UFD",
  "key17": "3VXrMJa2TEyiDMFixaD4ZLxoNUCztbQvJmmNvesZhTKLXDfRopCnx1yqh3kky5tCaiprbAthzYg79XukLSu6kHfF",
  "key18": "2enwgs8trESadDjSe5XhfqfbQY62sZfRfSzFLTZQ3YAcjZDrNWa5pG8RU6BMGEALxST8UcjfvAMEqzAtW1Xo6Rk2",
  "key19": "skvx2Vqg191FvdKErR79g8pTa2bXiM12mqecqb4KWuXqxzywfuvgUu5P6Vt4zpdMYutfJYCYb6pZRUGn81DEzkY",
  "key20": "91YVVPYkfss1jkD74uFRiQ3HQ9xQwAjd53SVnh42hzNw8bxwWb2DyFT8QmU9ypjQBMbryoBQkdX1ik45JShdSpB",
  "key21": "2MmUK2rjpbRnNzqH47fQ2nKBfDzRqpNMsp44Mu85YRU4zgsmvthJNFTmWNRq264o4e4GCKttCi4rDXzVyiMXmDqe",
  "key22": "2LkwmBa1q4xSni4n4eWbyDJKvNXSpFbmvrbgHiJ6w9WELStjNz9gs28ARHQF154by78vZN2AtjVF2TrSDmnqb7Ke",
  "key23": "3YxncKgJ71wscyzZKFqtg7xdMFeQ8nLBaSVPGSF3tETvpc4bj4TKhXVHFKw4UTBMR8CSMSfJBerS5tB2jxUBNb3X",
  "key24": "5aYGPRvCGTZhozttpL3C7irZvBLuEJx6CWjekkv4G5MNurAKds7h2JDTtNgC9GVJjr8G2qobV4St1p7HHfULiPdT",
  "key25": "ZDBpgqAVqJ8zC9KW53kFUGRSCgEEses4XeLUH76AmeNLQMADQ8dwUcBT1oepCUN3mcN12S7RENZAdcYYgDb2FVe"
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
