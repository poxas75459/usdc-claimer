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
    "r4J1C7NYs5M8hQ6PgXqBFTJaAsrJ14RQMRmtEp7svM2MGC4kDNeT9YMCQjJXVwFT6rRWGi7Q2tEK21rXBbwMZgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4woS51LnxGJntTsQHxus2n91W3NPmhfwyPzs4zYbEDU2tdhV6XCmPCLt2cSFkHH82CCzjT1LCptuNAHXT3CQJRwE",
  "key1": "46qsUruyfDQVpL875eHVLCeifDxVT3UvY2BbLQva4hcyXtoLdxqMtN4hrRCx2D5xoGJrBSmWUku8LNPvsPqitHrA",
  "key2": "5GyNBhMv1jhepmwsgZvJJZ5ukGAvpcKhG2C5kn8GU3i1w5B4E428XAWGTSFTkEiWrPZLzmraR52jZzt3igpitAzw",
  "key3": "4yoV8ohqUDqT5szszTqwromikRphQX1EeaerL1iQqexGUK8Q4njxs2orhyBAj4tEg4ewoFDcQbm73mokpHatNtAr",
  "key4": "3qpzyhC4QTHSZRaKEKM131fS3pHvSBmN3VxeB1buCT8XrpDptPKGcVCLkZnuuybbfpQ8CGYnWJshkML6p5wdExb7",
  "key5": "5oMfYarFWY1j7VWEcBL6HhgwajAyRLvY1XKHPmX7jf7bTzvfUQkkymMbgtaF2E3pt5KwcEJMjzwesT7PbjxCF5ea",
  "key6": "4N8x4MAGSV9xFZhnJPkGi1rf1ECcwnH7aFR7YfKY6ZXjFx52HzXH4bKbEt1PgYLM7Z6XzP7Tc7coydKLZSpcHbQw",
  "key7": "2qn1iaenFzoxtPrky32DeRJ5Wzt7Ko6zfAsVgcxbFCuABBdS5fBeavZpmJESppuox89YTK8thdrJhGhADQ6NvUWS",
  "key8": "3waLXZKixAqmuATGTZdYNbTgCBm8KbV4LKXXZXUd9R1JLKTX5Ys29cUQLTtUdTYoLRDVDeWCPw4yBppKHSy1RY3x",
  "key9": "4ysqMoDYT3vdnFwJhhDnoX9WorvpK19Hz9JMTAU3cEwXWSvhxX38qoCL9d5AKUYH6WYx2HB5Vr8Qb3eXq5XT1qaA",
  "key10": "4HV7DsawqhD33oAjypnWqfsjVYtJDDxBCHXMHiWCdRyqf3nNdLzDoiSTLz6sfV7Dg3r16Hid4F4dRPvVxXXsXwdU",
  "key11": "29DJQZcdbRZ98LdGKFnaT4gw4m2X95XGuMdn91KMbfM9Roo8R4ZF13FSco7jSHQ4cuZbbeoGPEqhnBg2qA8Bu1u2",
  "key12": "5Sar68uGtPzuNNz7ScedGoithYHhhgZv8GyN6ePo4UxCGZwvRBG1zyhXeqQ3JrxmuUCZcacFkNcVkY4X1UsvBN9Z",
  "key13": "3gf2JZruYuopHbT7qcFR7jUkQ1W19RZZZCcBK4Ki1xDopnUKTsabDTmoUFi9jgEqfRnDrwSex4A9BjdTkLEyAYr3",
  "key14": "8RC49nScF5GSEQz8WDwV8QnnjqscZ3vLqmhncTQRgGV8J6DV6bea5B7nwhABYA6gxPY2UtxoRsQoBegonw7QoD7",
  "key15": "2K66mKnUDbp98xY2dJhq1Q4VvWuz4X3drGYC3SE2o2wGGhZjiZnd2ybX3kCnjtvUXRaiB9uBHm19L43LgpcQfXzt",
  "key16": "2ErcuMKPQw631AVct72Fn6iJohezm3JU7BKDU3hbatNRYTAuv1VvD3hBNfcWxsiMokh4ieq8qe8ZHAzmpdcQW3kL",
  "key17": "3RdEWf7TJXbKUajkDZU5XB7g55j6FWWcQiPRte47r2LKUmp7PpvH6WhHmLK7jZzR6Mv7kVqwZhEFavmMcwioiXsN",
  "key18": "5n8t8qsR8gmzX9M62UgdV5KQMrdtDbdkWF626bfCDjQJps22hxunyQe3rnwF736pSf7SkoNJR8caLuhEVWaH49Rn",
  "key19": "4RrGqcYuCBmBCJAmD2RAAUedGqgzQTmRpnsXq9Dq8qgio6dSivQpsXUGb844yQ2x8Lo2A7TBTUsa2LGjm3PhmHCn",
  "key20": "9MptvACxoW6qmmwQGpwyFqgNcWPzRvZx5pXynBh2twZXPLsStvcmQeiojKALiEjnFmZ1WX91pSr7m4VyNBPZAQp",
  "key21": "3cut6z6BkKBbHVfidFTkuix8wDeYuYjQQ6cn41fpUzbGMQDsRP7Mcfwc6fvth5ygX2JBB2gYMVBJLFDge9hd991t",
  "key22": "N2BVYGNEPzLHEdMkUeQ7aDSdG7q7NNGEGyD21oqyZZA36eHvm37HTKcJ4PSAmKu4YxzgDXgqWG66zcveoVfzxcN",
  "key23": "5S3dfFnvg2dsB7vZnLtS1onRHC5K1wAkdoP94hothJQQyo3ki3s2W8anGWeSYrtRk9oGEn6Z3hEptPU3hpGAzCCj",
  "key24": "5aBArYXgvcwVhD7DsFjo5GJba5vNy7yp83aatiKfEL7qDnbPf4SHbfmsV6BCTGMVf9B1mMhmwA1SjDbv4AY5uoRJ",
  "key25": "3KnjGB7FkthVZfiSKZ3HB8YavDqG6RkEbZ6rivdXJQbz1LsDGuhG7E9BmFtSExkdXHWzcgmVnYypAydhHhJnxpWV",
  "key26": "3mrmq7XoJY5Em5vREEWRLoGFGdxE6DnnyUzqiznQA9fvgW8frvAuqtPys7QY232ynzeLonGRPrn9Hqiwfve3vKDU",
  "key27": "KfjkEujHS1uJJ5GAhzPZy1fca6WUGtGRLCKrk24i8oUhbUVngEJFCbCCsTzL4U17SGaXgnbujKWkLr6d57iB9NE",
  "key28": "4g7wwJWX5MR1YTZ2oeTKVL7tr5HB7AKMkVoSBVgUJifTADnYYTiBwcR3RfUUA4n1wG2UZrxr1ygDVdZLis8RWFfy",
  "key29": "2CnbbzYaKPw29snAKVkAGzFuQ3RH423q32VAkTTGBfSHGeCcLnhkPYmXwDPYRYqMZUUL35G8bVCyevJhZXQ1wRD8",
  "key30": "262iHPnqsJLXN6NPjr8TdVBZmCDH2FUtfQuBjRFPQgS2Yuz6eZynnQehuecQvPrcF9kW55cdJ7Grd2uc5EyJ7pPw",
  "key31": "3dSzLyuXndyPuwWEoSySEtCXhm9aqh16jUr6hnyCQxX7aTKCyHNYzq6pXSsd1GYtb2eUZXuaVcvkacnWbqfAaLXK",
  "key32": "JkTgFWVaq6S7bFGjcYsBeVbqjnfjsUq4GZtCPeL4P7BxcFqVF1CCx5coVPcN3qGg9X175cN4bRKUSV7YnTgjv3A",
  "key33": "4ug7U448Xc1y2J1w4sjufrhvPvTCZkkeEAanjGvSRkbaGLg6otwuFW8SijBjgKZrqmtRRCxcqJwkRNvnGjBMrNLY",
  "key34": "39dNzfELB2w6KAknfAoMUzLWdYWPV58Qx4eBo6vrbLqvRNgtaHSoiFmXGoj1dRJxuNS7r5t23Avzn2UkpeaUZLLg",
  "key35": "54AjiLnLcGS23U6y3Dhcbd1yqpasW5JUk8FRZgFCJ7LGiJS6Td2YCi3LbW9QuG8eDRmF8FaSE9Z97rGfEVKLWg7A",
  "key36": "MB5WKmsfYScW6Pob89wbjheHM4NEfYMr5vPncfiojTcwh3cAdVPAEqdPtNEsGgjPfLaL2YQ1Qe38f7CEuwq8Bar",
  "key37": "3gG5Zbs5wKRP96F4xjQUXA6RnijYtyszwPWz48MG3y5f4W84PsyDbUpHPvQjZXWd2MQWvPcFiNSkSdJDfJdzMQx1",
  "key38": "4Yu4TBNaBd1U2q9uhdyTkZ5WHFHHEHZ4Y2mkSEscwzNJPyQvXoqf16Nf2FLL6CHjN59ZHoNqwqtWNU5t2aXiLyK2",
  "key39": "3uDwA195KdGFsy1rJcT3a3t9LMyMYX6Ceab7qktKk1TBMxKKxAHGamawer14LpnpQ1vZ1wT27wL1jETUqcUARAfG"
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
