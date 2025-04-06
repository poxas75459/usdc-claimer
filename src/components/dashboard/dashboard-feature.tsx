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
    "5VCTVgiYryAT9UDz4vszKK9z9XLyX2m1hrRMYgMjUucak3vdewAvyS4HKkTzmx6sJrc6qaw18ibvnK3siaQTQQmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MJEppeScDyxvScuEhrwDckodi6PDKrEN2MC59fK41ZZnQEJKoSbedTydAnv4zB6EoJNdyp4AuEEvyMhjL9TysXZ",
  "key1": "3aMThkdt4uo9bYTJp7KjpJfi9dKDRpATXyQ9f4XBfmScgF89arjDyMj9U7aj76jsniNmLrFh8RAW1tFx4N3aTvjs",
  "key2": "YhVdyNtdHNapvDThUaesst7oMaM1CHZEsWBaTfadtsgoffexLRDnDTQYcpHKsKxoG7yQbda1pyh91DZ2qfi8qv8",
  "key3": "45ajidWP7BSFEYHkqZXuumdXoXS4HDEeGamStFYMdryBKe3rdNGJNPu2iRsAMQXsaxGTtAXCPRXmubdXE4KxrejN",
  "key4": "ryYW87KJNH4yYMkFCxNPu5yqoZojhAzgV9rbWBbysa6RiHxs1KArEgetMQ2PtHsAcCzsy8uTARB9cXgJJCfx1Ea",
  "key5": "5PqczAKGN27dkEfMwSo2vNMzVAwxvhdob4horxGQZ1cHwYnagUnLGQTRG7TGtKozDDcb34buvWWmcxkTsQP1SkV3",
  "key6": "PswDoyZGqab7SjSyLaTKJtVnqQB6gPYYeyMBiX82hNXQqir2J332qheHrdKrvxrwt1q2a1SiYaexjE7JWBZyTo5",
  "key7": "swBs8Whx8icYyVBjk7Fex1Luo6JevvwaumYVeB5nDpKeGrXE4QWhQz9pKFDZ5DcgkJdYMKXHpYmY6WYPJjsPqN8",
  "key8": "vfckeWiQFvgFKvRUX22Qo8xbeDmLUnQqZE7uyKWP8k2C6vtWWaEPWtECbzrqAgDpPYWiWDrY1JdkjUqZuBBj9h1",
  "key9": "2p6Kaemu54ziQbkpdfVWyP1bcS9W9hHagGopuKaWEkL6dFhB179LzCMuAoUfqsTDpsJ5rK5zUCm1y9AqPXu77aoj",
  "key10": "4FewkwyohY1fjU8NRFnyyE8K9U5vzETiLjvfoGx81cCSuVsHR7EErodim1Pxto2fMUqSJFbR2nKE4fmWJBPV3Sy2",
  "key11": "PbJKHH3Z1kgkxaFy8rPWBmA3BkKf7mW75MRJRnQvhnakwFXHjjrRBuWVQoUZEwU2EkZtVuced95Z47sA1EufsV6",
  "key12": "2ZKtqD9jVxQzhftwSvER86LkhL1EmNVzp3RJrwB3tKQj8betZfvyDwyyKjTc4sK8UuCD4ecaQn3oawCryuVF7azq",
  "key13": "22dZNVgAv248asNGMt37JTZ3smFn5684StVpFZP7p7mGy84UJRW24rBArg5nsp5WGfXx52C5aemWqwSVhx4zbvNh",
  "key14": "3oDPzGfT5Ymz1LXGW6Etw8LTjCSVNDGpkeUZo9XHp5XvQPU1dFKpyZFneoVACfgGirAa1SAGcpE9bcuQY94rpZdv",
  "key15": "4KhUpDrqDjvQtTWD3h8RVKJTRdwGJYcadHdzN2rQTVBrJ5c4c26pnWv9xfbDDRgNu1mnSu8ohFbhMwBGQio1zVFY",
  "key16": "2WKTj5YLs2HF2GwEoTxaat2n4tTCEyKDp1y7kWC423XuuJQmdFZ13x1eZUc42wPmVwnebFXGKcfS2dgcpCaCcU45",
  "key17": "3zHcR7oMj9yd3UyS5XguCMJqkra3W1USQDxksqbcng89fnVCsBZMRG64wqMfFjfN6kCjmger5w3xCMBK1VooKUEX",
  "key18": "5DZNsqNSC3ca3ha6HGWMw3Nrq7GxVfPUPJc33NFJd1KcARCh12S29zaYHfs6LCFsP7nFDSukRcrjpBiCYVormk3t",
  "key19": "474MREAcbtTJFx5BuiRTNSfSBG41S9EbrAcxiZM11aessLvrENZ1u8T6kTak5Rp53JLQeyKWM7zBZcHtYNy5ofg2",
  "key20": "2keYmCm798xiJPERnwnvRMK4NHHXtPe3MYN8QubKM98F3KimAdwDFvUMSmiraDADYCgxpmqfzV5mCiUm51w1qbrm",
  "key21": "4TuXVfz7TURQvnaNVCudoAL1wHkN4aXfTYmD8b2hj1eHfwMcBPi1Yds72Pp1xEMoE5Afqb9Tia6Jc4jao8SDxeyJ",
  "key22": "3DbmDHwdSL5bSovcr1zmseTTxqSfiSoDHCTd6CSMSGTVq6o2nMvqtbTZLeVuAMWB89TkQYU1YDESVFFYMt9BQTqv",
  "key23": "2gBBqQf1XAZAoaUKBNQJqPVQgn9cRwzRtzrv9obwpa8LcwPpiiAuMrQ5osQjBaiRGgGBA9HHbpJxnLRYFbzYchnu",
  "key24": "4yS6GvwMr5WcrJSz7QocnKC17MrJCyZSvHUvhR7uCoVrN8DXoqrxm3PPhMrtJnDCEgYDMVw4HgzWUzuU1nMNh82S",
  "key25": "4ZnmNZZFjBzXvgEuJd3NL6tenK2tCEmLpZ8abWBG4UUMS9YXm5EPVUujpzbajkPDBTKb5kJYnUPmUQaBnugLv2TS",
  "key26": "5dLsPV7qXjfL2SZb4UJJbCkC5vMKmMen9sSj2rg5JiLiXD8XLHzPwKE1oTLrftgf34dmxioBcWbHZJQNAcfVXjqN",
  "key27": "FqtdA3LGiqEXniDZ1T3f4aa86YqPnHAsi4mgFcu9ViQKSw9aVcHXXj5ffb9hfpES4JwY9v2RsqLAgcS42iv4jPn",
  "key28": "2YkbefSLstApCfgfJmnnE53H9i2QnZDZWUrLvksTEmigTvEKW3HoLTe2NLiVJbgcwpcerTLDcPHkXGjQSMzFYkF6",
  "key29": "4ojosogpeJdXmvqnC4RPNRKg1znGHFxP9f4M2kvi5cUMSkMf6ybb1gMNtSbd7ehyCocKAm32yGGerTHmBa3N4T6f",
  "key30": "3Eq7JnU5AvPL4mPErSYSBMXieSqLK8yFfev7qMWo9xVovfFg55SyHyRmVjTLGxx7NveXxBzFkmBrw1C6UHkk3kDJ",
  "key31": "4Jcj8CZogem8AYot2mC1T1knccJHGAek9XREM9P7Lj9EsaHdhUAppGeg8YidTZXaMdmtLAAE79D3CvrRFedCTLQa",
  "key32": "4GTCJCveL7SygJV9YnhRXJZ1tmUBqLNvvNKCQP1crAL6PaeCWGuq5zoQAVaW5fYcyRZxqhyVKYJpAa7cTv495LbC",
  "key33": "e5W7DVpeG4jNkcbE5fhvHRTb213TuSMviDxMdGqXNUbeov9k7XJqLCc9FcK2XwAC6dyz8pQjcVV8gxQrQ7dVNbd",
  "key34": "4Mbin1a3X43ik6kdogk5Cfpcz4sxcucqB5drbhT6oXrjofJvUuhMWR3mpJG1SRw9xQEK4Mc8gVfdxKpbqh7ndfZ2",
  "key35": "38A1AiwXJmKW2ZUdphD7GuJD2fSdm6cc97Ky2Z5paS5gcZ3c8PTuGkwx91UkaZ6rvAmRCgDKsqVsMDhNUGecQtaj",
  "key36": "29vPzaRCEEs8LJtVQjJ7XswRMwhKMY5LggxgDydcZSHPNsAGLdtF6yPN8eHv5J32ASPViyekMjUgSobA95cpUCxF"
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
