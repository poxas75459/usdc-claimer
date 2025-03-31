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
    "3XoRfmwtBscuaLZ18Q9mfr72FATb9thC5SE6gVgkPLD5Ms9soa1NqMeW3sHiBAQpdkjhrC3UygEoMNWtqvPu5rL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M7tdbinDt1dj6zWcvp4Z7iYg1iWoV6CedCQ3avK679xvyZ24iaRkgwUrratfFHpu3HjePrYdvxT6mDwr6Wp2Du1",
  "key1": "34NSjkvxq3K9MVSpWHnaks4iSQ5J8YzBSjetuASGKhENBL2brhQcjSYewoBXtRnGj7SqGARCfF9fuXHuq83nnEY9",
  "key2": "5hQJMMAeZ5ZRXu9W6tVnSD8dStt9mriGrfT8gbvvz5N2hoeA1SVCdfXRipCrmz3WWLMF4x8J98JUhsAZaqZWyC2U",
  "key3": "vNUBHnapEmuApgV3Aqc5ZKusZAZyDuSFA4CMB8CGKszvza1UcvYKiiyBXr6g5UtDgYmZ5AR3v624nTBp7Ck3qxk",
  "key4": "bDqESzqQLGUS5z3TrQ8HueDiZi9gAjUjvjPAaaSnrNoHGVsvujN1QKnVamzXV5FBZeetpXi8LN7jvT5zNdepZvj",
  "key5": "2uknbixTkMoWKnCyfJcEFugY8dU1irXTeqQjATSM6dkVVnB34iUYLUqSy2icGGXZ3tVjfEtJQaRttR8f6F2x3XiF",
  "key6": "gvgkdPbPfekym1snHb2ri754pCUZisjTf1Nt441YG1KyZtrCfUF7Krngk8HBXe15Yj2PjjGynwKVLGeFscGvNbn",
  "key7": "4h7hxivJ3tiy5nzQo2yAAwxCEspGmpwDA8P3XvdJccSvKCjht19ciEECjK8zhvBrjFxzbGVJ4K45dYYo4ok7BEYu",
  "key8": "P5aR2b2yCVh7aQgdtiTe25u5ewoUWavBTeHTMLqUFfdeEBrY7z3Vq7S7k8t6uymDH216gK6VHF8mvK1pcPRXs9P",
  "key9": "5vtyUiz8oRPytXDVuTR6DxF4pTQRWP8mqurNDjZrKrabdRmgGnoUEMvNzhoREKhhrxPkR3gc9QQStfDu8PUWSQr6",
  "key10": "5xnpNWBemG9xRAk1NnPe8At1PcjCCBQpAyxKJ5iaDh9YsNR8wG7KMLeCny3J8a8G9ie5r6mgvnjmxzoonZDEN4dB",
  "key11": "3c2s8vRNdGoEh1Y1CKXkapWHLjwVRyppToU74sCFdpmAsBM1QdVWirHZqQ3EA2vPBZTJwzGjxg1oAkUdGVe31mHg",
  "key12": "2Q3FGa1Fw2rkxid41qxqNQP9Zv2uSXaJ3kkYhQgYcaBjq7k7Uzv6jcJf1JeHK3NinnSerJu4wfoCdW3qT7hepwNN",
  "key13": "61btzabrREG4565Gqp6FwEik52etMN22zyuG2nf3MrhzE2pcMsKUrL5HJrsMxyGhdAgMZUXg1dEoyh9jx2T6vwi8",
  "key14": "4NyQHN1cM8BX1UDwwq6Mmnzfr2u9G1fXQVBwVjhmuzxQVZT749zBLtebZa4oyCYLbbGM1NzsxTRSyRn21FYnjsu",
  "key15": "eJwDJdNoVDwCP9buLsS631f2133RW7LTV73WiCqQjsDGyHDVLC2nsH783YNcsEPaiX93bBdxLRgufPa8nD34b4m",
  "key16": "5eg7agsGZmiHeke2NGsm2dpzF3PWjQUo1aMsGeA2bYdPyFquTj2mR75uBcSh2Re9jg2LCZaCzxvzhMoTWCDNayg",
  "key17": "s8ykwagohcvXxNUBbzzhFWFaH62GZyyXMdugaNSEKgRKBnGSDTSa4dQgkJpianZ1Hr5mhpqGHyNi2eCyHxgoDxu",
  "key18": "4txmPUKHuQT31f8V378RtNoKtomUgpVHAPE8sKwVmRueHg3PcD5EeWcDDS8gVQA2mpZZPRiZJZvu3QPAdUYy69jW",
  "key19": "1inzPSgfVT4GnqWdXUpoV1D3rwXKKbWs29U6kf6CCNqywLQQqw8MjrCxpxeboJFq8zq8piCSAkYijBKiJwPBcC2",
  "key20": "KxVYTVDy33YaeXdbwtMAxsW2M8mzphxFAJfZgkyUogja6Whf75RL4h1WZFaFaCDUzDyrPV3hHBCz45AKhzdsLnT",
  "key21": "4jvtosoUSsdRqiJiP7NCNx5ikExpYvR1o54WPPSTTDtBxSGWkSDJynJWj88sqs1T9uXwSTAbshkzY1rtMK4roHkW",
  "key22": "5t3nUKurfbikmhwMqZnFFFkPrRZLNkXufB7LC1ywJcLMvm7Yk6PgdhdXZS5kg754QTKcs7x7RaqfP4vpA2YSWaux",
  "key23": "52hB62MHzsQczunXprPQMJMhPVZNDD8Doj9beL8GrdKPs2L5CDWk5GyKTNQESBJnkX7yJWgi67V2zK6nWrWrQHru",
  "key24": "3yzV2X4juwdtSRYzXxLsmwC9Vi3H4KYqm5jqYghgcrvDtHGWBJeqwdrxx6nSKjDXLYp1ecXxhWB76dHroygjqufj",
  "key25": "azCDdMcRPYYPKCEtNNheF38ASTCJzcHNAcFtUPLTKYJRGWWM9QEJog483x7raKrRH8FkEcJY1Xsqtcgzym4T7WU",
  "key26": "5ovdqpX5qb6Xb2Lq7AzSr9Xma9FfXqZhxabqUUivEQvBVceM7WJH3hknnEU5jPEiMQYNk6SR6aaaUPnHW2j9bw7V"
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
