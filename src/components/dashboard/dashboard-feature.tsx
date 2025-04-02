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
    "3EMGFuwh5gmmsyzLCKJ9AqiKq1mn3LtR3H3h1qcBaCSvHRDatvQ8dRpLHqA3fVQ8pXSJr5GUdJyrjXbXzqfb2jEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oZXA45qCwgMgbvC2kpGFDxonC2kkcD53KNvujrQTGBv3vJ8S7zSnGbW3FVwnXkvT6C8ZXF28DPQYXFr2VEMa4Cn",
  "key1": "k2Kf5qHCC93EDyQUPPPqwC1S3C6BrDkiugN9nsfBS8s46msg4cVLq4vhhHNiJyQyM27yfeS6MM3otk2H8eNZBTL",
  "key2": "3hpsPoc8uyUQKaC6sKkvTczTKhhrwiGxNCSSnYaQv2TVQseVNStdNY5WWL7hrnQEviSyL2wb52nHHMPLNaR9z5ge",
  "key3": "2VzTSuH6EprmYZkWSnYFTEMNsf8t5q9RgLGH7uxrTkLRKsyVV6t8M5RcdEbXELG14umxHF4X8k3DmQBVGSB6fXEW",
  "key4": "3LyVe8pKkBjwJYhrPcALDMQMar1k7qpVQyShZW6HeFfHGnTrAfa328r7d6ZbhPnWVpEh2LKFpdLxMsYNj1DigbWU",
  "key5": "4KKjsVjsShqUvhHkHf48zrn76QbeK2n4mazFybAiofJF6b8MHGwxRzwE498Y38kCPRpStMGeYUmVgLp1bnvdXJtu",
  "key6": "3LahjQVXMo9Kc1mQHEUzs4VQkvaar74GipNhn4D1xmwP1GeECh1Mmi4T93NeQBF9eouWwtHQoL8wZ6TikKCgZyLz",
  "key7": "5YDfwALTNAwhCwBGkqbit9EJbV8uadXKzmNn7sUBddGp9jaahSMN15f5gEdF2moujbzxmZAcg9AZdKo38nuCkYXG",
  "key8": "R7JfFGJbVQrr2tP1BFVJMo7PGmih8RE8tMDqg9gbEdEyxoCHUWNpovHtyjUQsnw8YZvWFcV3E5atrEPHsc1AUgp",
  "key9": "2oSifYiRcDkXkrrZahcLs62z2Bt94jaFm2qN7F74Q67LW1aF9TzAhWyaucGs11pDtYea8X6AsjYvG2iQWTFnB8Fr",
  "key10": "7iaQKqnT7hF7Vuj6eKW2796G99PN2gZiujVevFvsHfjqkJUWLDdG2PzvLNAFKhvhxAiPcByfQzE82ZMJkCWsjcX",
  "key11": "6468vrE6hLG5quYAbsC3Jc3AZex15PERoGNfyZaBCYNVZZBzFQKkPxzv1mvyay1xwQZf3XXHq1GXYa2bRQfDt3aM",
  "key12": "5CNGkAHYB9wSbef2ew7WmjzFgwRPH6nWLpzaYNA91qvbtj1T7QXwo5xaXadPf2ztJUvPaHEJRM4pfaPPqqK4RMdC",
  "key13": "SBAgHnYk7V8bS7k5eSMTbPoQ2cPtLsBkVDnuh63hRmqeL8D7hPNmUD2E9yriJ8JR2QnQoUjqcbFfed4GfcL2mUE",
  "key14": "3nWqVePm3FMEmku7KFbutUkrhoAAumPbWjVMNXd7tk9nG1J4RYbC31bAH5kxsvxkfqpgihX8W1wv28WFvwXwu7Fc",
  "key15": "2ocfJXKyRmL4TgBxFNC9iWJ3DojG1duwoKT7TJjkhYLDDB75CacWdFZeDmdUUELwkyYVi7dNTXjsd6QegGJ76GHE",
  "key16": "2kHQk48FFvtZygfaPHtqSRWnG2XmWUC4GmptVEuoFDkQ9JSSwQPCtFcP1tzat9wxrd4tUFu26tiSfksf4vrF6B1i",
  "key17": "2aqLGL2CMXTr5iP7JPXnAwPtuCKmBMkZ1GbviHpcigSBE7PiApXS9TofmAR4mtoyaWTo6tuxmFyzfCNHJbBf4z1K",
  "key18": "37v7PUqyyU5xE2p5m1bEMwyihcfRZZaHhZFB4ojAFXgChKBLk7ak6HHQesFhMrtF7i99iRD4Qw1pDXWGzgcAqjuX",
  "key19": "4b9vQhriCg5VPwXr7GWeSMqQcbUuZhTuW9nxyHFA4UjnRXZ1jrBrxBFvPvqGgDdgXDvfNZoPf5RX6kkkZ4QRhKQ",
  "key20": "5neqq7Smk2ev7NVrcLAuQg8p5b5d5jSGkEmMkG8mBxrGtBqkZaQyf9Sj4uFG1fofjhZ7qQQjxmYUwn5ownvkKL4P",
  "key21": "2RrxREhUfK64Ffb7RdUDyHoh4F973XxS3swsjDTVQ3yfLB6qoY9CMY2oK7ZVqwdYzTTRoUTKxcXCRDsTmwfct9EG",
  "key22": "4BDARmuEfEJZTghNsqYipzTxKy5N5iynrnvHgyQwgjsB5dbXhjqtyWbE6bCfNq53ApuaL4mXoicpkchHw4fgWiHN",
  "key23": "xFzYu91LCo8nZ1WR4ngthyqYc9vzu7vAn5pu1eHjTWv9KuqKxGhCv4GeUDEtL8Tiono16oB4BtTgTSmroiEtwoh",
  "key24": "6apGWYLzLaxZbyfoJ2mkhQiWrksHXqyWjvXJm2jf6tKReMPJQiEwzL3qBpkm9S73haX1tCVt1B3AJL4mDXtk4zR",
  "key25": "2FJ8RbxXe7LedA9V6ryzDREf2wpPFpmP8aayziEo75kW9Y8aWf97JGkm4vioZ6Vf1CbZc49M8KKuJpGBXSxMbYCT",
  "key26": "3j1zVcszAiwZyqtSzpPKX3vwXhsDePG4tzW6ZJkG35FUjNm5xpN1ZeRCobQEtchbvMBdJdT3whAmy1fU7VB9TrbU",
  "key27": "36ForedWcqNV78TvCbqDVaZr3dN1we1tZmjXMeaW7xeNVptLgx9Mv1H8HLwaHe6Eqz9YENmhkZRQpz1YcmRf5wEX",
  "key28": "G5JKopyBFtwKHFa3XyMNGu8bgw1fQTc18VE4Kf4vU5RHfD4xszrkt68gaqp68Bm3vAFbi53fvSCH1Twi1vNKCGr",
  "key29": "9mL8Ha9f6swHquT7mpdHqouP2YtmMSLLPVtJwFMLRBjN9HTbUDXcoH6oXho8cfwN78d4amejcuYJktB5xESYotX",
  "key30": "5qBXEUMD9kxuj2fBCMkpixUUibCTU7q7vgzkpLMbJLqUXAbu6doHZKAupvQPjSmTLW8aJfWyjhAD4s3QJU6iAjXQ",
  "key31": "4UhLSTx8L3eRB4nDJ6tft5Vtby6Lk5ycK9riueqfDPUgQcy55qSEJifbq5wMwTJan4Uec7zTenvZzNY6xKVWbfbP",
  "key32": "4qASEXRVE9tY6XDSFsAQiJRjoAdqswzD3dJjoCAq4TTMHhJeXMRzges58Dng7ta1Fk6Fsqqh8K7YVh1SzDmvHuvu",
  "key33": "2RJ5qE8FpcpdsrzxFCx6rLsmW6JbFijpyv2gTsw742vvdijWd3WxGnseJcmYqennURt5p4p2FyRCMzzumnZLuPPE"
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
