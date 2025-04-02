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
    "364s2GaxJepefmLaUhscv9AaMCsJtzyuBkUYw6hdjv2qfNJyvXGKcrpMADVuM4FoMLFkQBxr2jmCquk36VN7vLXZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wtpuxb7iRyfqBvKUPhBSUX8JGTtq69GhzAGeV7FVfwfqKrGZc7aiRn6P5Db4di1PoZSYwCn87cnNSZBjh2yKXMZ",
  "key1": "2R87yWRdu9UvgZJ1vXLY111ZY21avF7igHTUNXW3XawawNVksVMEPzoSqfqXGy6BAA4Ty8kGTLDt1nNUrWbvMCPF",
  "key2": "2U3Yu948xjpsBpFhoRacwcpgob1k3ChTSsBaN6ZUfoi4xRmnKvvMhCnVuAfhJPmkdng7qBq3NWMSsqcwwiFtYiaN",
  "key3": "3iAoLZpTCXmSNNEtWkXZANVamAutGJWeF2EJED3fU5NUXMtwue4JDBPubxrHQmeLHCFsqrDjjLAwcvkmF41PsS9J",
  "key4": "2q76ZPB6P1z9dQu9eQGhBY92z14RTQW4XsLE3A8r5bSyHfPL7tmqXEkGax6ZZk6FY6dnucQsfPwHYGaikTpWVgHX",
  "key5": "2gvwdcoDsPtPX8BTfaCsg5exkD21X47fxSCbTmfEwUVxsDTFxFC5NrnEcbL9Dnixu4waMGJzbNYMwbdxpVYy5h9x",
  "key6": "3hfjYpguawzfbusro1rMbrRbQThRUA7sgZ1mzmDDQFLzXiCFCBcuvt443E5J3juGkPEZF4fLSwPMetCnB4Jmkx4K",
  "key7": "2N4tzgQpkEsnu8b14nstZ9GUR2K1VzyCFjyg8gJSbABJVDzfNCjjAGshx6y3piDgb3cZaxWjaE5sXeAhuta8HV5U",
  "key8": "5KgA1NRDasJsFcUMdnqWPhmkAFaViccQcdcXmtEupmXZe5KgnXzuudqUi1KFemmi52osvWYPtWPnmUbhgLct6UuW",
  "key9": "3hBmGnTTVVNuj7Che2MuxqHtEEHi5EYUfrzUrVP9SSPnArSCYkbxgh5yAqFH37Eb6vRRVuRwTCNH4v9VaNDZNoG1",
  "key10": "31PF5CvuTqcjnoxBCR41Bhq6pCMNpnBy3CQjiqqvbDHuKcEYPMryZz7UkqF6bYbiygWgYgvVv2vEMHaXHmfnBv9R",
  "key11": "4cwVoKDvgGjV9ZFbZwg3uayJqPaSmTuzdySoHSToPe8ZgVnx98gT4KNEukKcNyyHkY6cBeCJtDG9gc8eRVT2c1gh",
  "key12": "5sfwj3eJG3coP2ku65PGu9tszAmAN6A7CY55oNbRR7ZrdBPXgUpLLG7wP2FjBfdu1AZnphGezeQVmMDBFzEUPViy",
  "key13": "7AJtdufi5CT29BGDExwGeCVjWYt99KduwxTkWYaLM47vJM41L4Z9qrT7MV1L838bwFyTmWRyMuHZrZhBPEK1ui4",
  "key14": "2MNafds81gW4RVX9812B4Hss9E2Du6uv9xcvNWNXg4B9buYV7Cm5utvz3CX5Qz1hA15oa75FMfsMLk5QiN7aGCxD",
  "key15": "62YuDkUcbYCvRwUV4QdrUMCCWrDwgts1azLngBVz6xD3t6bxHjjuTyvVaJy8Jaz3eRx87bh4FAv26Shcfu9p7GSK",
  "key16": "mojiD94Cfesc5i1robDzohoC8vC5PqVChDEiDGrLP4VKCSPbgseozuG99zQHVV6MDLCdzYrokBpTRsHSsA1NFts",
  "key17": "5irGA27uz35DFPBzVDJVJgJ4WY6oBghqHiwiDUsCVsi9WnkAkyHteE4UpPTXTpxVWUnnM75xYtPjFjt5A7tH7CWq",
  "key18": "2w4jQ9vA1TGFyY3o1nJvtczXdwGCD3Jhy1Lf7UcAbuDd9raa3xgGJpQQiod2iZEEeXFTRkg59e82PmoazLy5po2H",
  "key19": "4eYsqUbqQNbiceh7E2oLPiTNvkkRsm2MDaXwdeK8TP8uZMjMUeKW2746kZcEzeXiBsiLH4vknQjYzNeYLMjGDJ8H",
  "key20": "33s22QNBUnDBhcbg6bzKkiNMjfyNDZ2S1XNuATjYEUwADQfaRazXBmK2KyfiimJzxRkMhXXibkk2tmymvHfDQoXF",
  "key21": "3Qi6nHT5pksU8yhdjsM79roSQtKL1L49moxsPsxwukdibe1wzSNkkPpaJKKseCfiaHShZPNjy8i2NgvioJ2djiVp",
  "key22": "3FArGvD567WnKQVko52C4N7RRtXEZuCFMwzUQqrtvcAFafUCVrFGd41kzXA3XREYEHkknoQoppH7pH2js81VRKzU",
  "key23": "2fbENknhNDtfeydbWgXhAAvB9e2fkRhQ1K57m43AFAPuQeELkB1YsgkogyZHMqhyf4Y48kywRrePcHQDRZLq7YnY",
  "key24": "4y4ysPuXSjrwshQRmnYFNbmkhWDpGFK7YAjtv5xcRUeccG9dTsQHqpXg3U3jrxdyeJm3yoifd7dqnBuExaLPcs4u",
  "key25": "AhCcYJPBHAXJAr1AQohjhZvTyaAfsDCaMhKrutfp9bW1R7z1UcipyK1ZbQKBMAGNyx78qfgAz917Jm98XkWxp65",
  "key26": "5ZkAMSvSixN7NYb1iojYemcZsjK9Cq93s1YRQXRUrmyeVXsvS3VPDktj3BDfrt9piNX7JFmZVcqhgkojqkQTT2So"
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
