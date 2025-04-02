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
    "5m48f2GdUKtCF6ByvE1a381LgNccXnBHnUXwzzkfqPCQi8odQ9xum1MufGmqjVhP1WEhDEYsF3UqpS4Mti9pd5Ez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54MVSkLyEh7Q3NiDNeA23zi7buR2yXNEJb3xYzSn39H3FEy1eeeaibrneDncQPH9fQw2o7tuZdo8WxWdRR9ynCxu",
  "key1": "baBzgvtau6qMxrwFViauCshHmdrLiLKbKeuBpoBUpk1WnK1qN334ePyLLkWhYsLHADCzXsE9qvZBFKyKW3h94di",
  "key2": "4sCpyn7Jf1k2zKJyQgvAEyaChtLw7dniKEQGuxHG9U8aTFk5EML3JnjYUvsr3CJrxvYfuKkWAYwhYRu2sN9RsADL",
  "key3": "4eNytGmpYjcSbWt14VwnDuCo7rnTdQ5Q2ppfxSmxoYH8nxHkvb926hfxEJdHNCt5K7hsHEcdhAV7DMU547R1vqFz",
  "key4": "3pTLeHXwSNzAJt7uNY2E2PKFtkvwY1dUDbRkHpiEDgvJc2MxbsEJ1hL5YdAZsHPADsuUiajFSCYfvbyBX9sF38EJ",
  "key5": "t5Yv6ipbTAqSdsy6mjBhj1zMivduDKcCxGgsADKTjWzbH7TjTEXPZN8SFkxWA3pj1b3fvYWqd5gWVcsMKLnfPBb",
  "key6": "4DACszebJx5V3NZW5GoN4GASZz8wFa6teeuj3urMe56sczuENCGKG4o7GNcb1KZyjPiwHSxP79XiU52wtTDHF3xp",
  "key7": "53kCEVzfyEry38EX6jnB761pW6tojhm79kLYPNwBnuCZKYP5368GWcKsu2eXLWDYZuc9XNqakVMAdkGrun2WadJ9",
  "key8": "edXfcmsaJVN87KX42oRcRhwK7hkfpa48fwKYEq8m3Einjam58DASbMToHJn88TJche1roaHKcYutZwm5j18cqdy",
  "key9": "21uS5GQnw3J1iyNh95ab6Mt9BSbxqjM9JbGWYNRi1guxwbt1ZgFj1jiHyPwKwjjZMG4dfWf97YFvgWHehrRjaAV2",
  "key10": "5gTYaBqmL4aQav8tyDiaHi5mUcwyNenGD3QKAoa3vQbG4eXFH7KPitY1BvKkgoWF3DViGHUtDiPHpp75iYcjHoAE",
  "key11": "3kq7UK51cVgfv7xKiPrgNPkB3CQ9eriBd2jPs63vj7Hutheq44sXRoBJKAPPnoJcAG9euLiZtP9WDyqNsbib5Q3e",
  "key12": "3jiqsH2EkSkkNWLb2nyzZRHg8ULFenmRevwBDFTgo2BF2txtW6sDotJm49L9W7Tih6xd34Sv524J1UdejvYTYAfh",
  "key13": "5YVLJfogfdwsHiPhwWGn94LW5ru3bqNECXxJmB3AgWFeQWHUunYJf4HPiCr6Qjf1zTrgXuMs7VhrNbXkKEDWarxi",
  "key14": "2HBcygaq3FjfjHdkxjeuveTHYuCfLGCfsCwNVFZzoodo5PRLY3cbhmVF3gvDsuesGiPMw58U1UiEtkSyUAJg2pdt",
  "key15": "5ehXoSKRmGJmL8PytcdhfaEXmc56Jf8ptHrjdc2JvS8Pe1dVnnPLpA1gj1UoNUt6C6ZQRqfJdhUxT8UT1mJ16Huu",
  "key16": "44hhTeJ4Wpm28dnW5yiPdshteUgu4JyTxSFTnrLieWH6oiB4ktHwWd6GspCPtutBoPZHooMntZBPTqjt65cmAKy8",
  "key17": "4SoaKCWCFfstXTCH6GA8er6niNya3PFKtYAnxj3uhNQevL7oG6buMjwJY6peCckvaAtqSwJGETGpPEAJTeDaZ7Dj",
  "key18": "2Q7HNkL7TNRjmzTU9szwEtRu68Nc892SPnedkrcKCtVFyF69NEH5CpXvCPy8sDwqCXQcKXScdtaD5uVRAMUYU9tK",
  "key19": "2dqYu7gaJLVSfvw2VMzXeFpzbije4xfsLsZxnKXJkvg74WmcEcCRLZ1Yq4PaavYo9ynq2mhWjpXAcwVcbRY8NE19",
  "key20": "3HFamqrK3iQDhDPiMxRuvTNYUBkBPXhuvBZ4je356CJq7nMKB4Epm62WGKn5EfkeEBvLnvuswqtV86XbUzQJbX7G",
  "key21": "26NiigQqCesoQzpP3FFEDQYiQWfH1c5Ht5e2uMCbhkJRJTH7jN92Cwc8K9hB7att8WDuANy4tYfje5ab6376BstE",
  "key22": "4KjvMJNksg7JDrLP5dDpnaMsm1Yfg1NzpqTroTJ3bCweD1V3EXG8JgFkJzkAXwN3hCa5TzgqYbqmdxcJeDQHPcEi",
  "key23": "58fgjbyR5RdszgdkWwujfuTw9MSs9zwgZohCDQfVJ49uAszcGcQEpSFhBTXBapsdFMSExkdgQn85rrmQUvyxhPjC",
  "key24": "3DYCmX97XAJyoDKzyKCdx3gZQjFSpzvXeD3gGwvZTebH5UqZnXhUiFfmLYwhALJB4B82zpsnFd9usHkpnYQRAMUM",
  "key25": "pT85sGdec43rspfuUnT2RF6uHpt1nF9yKq2wYQPGQCyQuU9wUQdR2mZLoCDqgqWfeqoGLqARAyD7eQzU5wyCo23",
  "key26": "3Bz2Ro4LvpuXRUuRe5SaqdNFFf66P8Hw5EfzVToAg6U7kiiJUkCTYMyBwn2Pdt9E8y2i987bqUb8vG7yRbq56Jvf",
  "key27": "38QTWyu55FXfLWTZWx5JsRUGoK41wYHPgw7oZcaEctcZvKjsuMyiqHwzke4TtCjQd5R28MfbHzgSoGZf8PzKSiCf",
  "key28": "5s9hdp5qUtMYeJ5LefQFwV6zYjW4BBR8v8UDYGdj387ZyiJgEzedwcG7XgzvoRJ7gfWqjYxpo54XZz1t47gCij71"
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
