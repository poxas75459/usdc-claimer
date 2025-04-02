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
    "386K29o54zhLRK2TbW9dkhh2TamoDZhxJkRy7wxreaJiHprGBkoGisjmjHAjARNvfy784zAo4T44f9y34hbDrTFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yucybc56iGLC6Wk2UrECAezCjEjjuapAz3qzpm1V9TwBj8WLd5N1J3Xw3uSBPVZkt37yxdErZoZwyzQZDvVcF8i",
  "key1": "5iw3xtpfckmTKwUF5krKjiAkxRKy4tFb4U2hHss1LDBWQ4SmxsjKEMdXicMptKoj2Np3PU1xWsyPzTqJzZxT8NPn",
  "key2": "4PMU6k3FbYWPk4tvhBfmjrr3MimZ9teKdjkGnLksNRShcU6bvKCD9chso8rgYVjJKm49Gs9ws6zaxAJXfGh949im",
  "key3": "W5YpGKSEZbJpdspFYqavBPkbyXutSRsiE1aYEwB4PuBbMGxwUYdqMZafDr9134HQueLgey4c1Vig1bLHLrCdAjV",
  "key4": "2b5meH8ntZnrStbJr9RHJ75ZBCttbEfagfDpY7q4T5FFtNp4oCQormbjbT1zsEW9FFUUUpAfHoqSTURg7APVn453",
  "key5": "2vabmaeRUjpGtrHcwndvFwHRpgqFSWpVTYdPiygDS64WzoFwU9S8utHg1W1CxXmrymrdGmhzfRk2DhNxho3rpTjj",
  "key6": "32wvvrvdpYBvsHBUVG1VLhnJSBFiNNh2DXXzyXLdAhXqLa68L4GvdanLm8M7TLFEXrScUFedJdyfmfWmQuZwRaCS",
  "key7": "4epqs1F51Wrb13kNnpRLovgzUPvHT3WRJCkoHGyu4ozQhEZvaj8Nq9fnxs1ruzko5oNYg9UpRFsnMWaJPeyX9Bzz",
  "key8": "3iN2grx4RDzs6nBuTPiohQBrf8H1YNCUh3D1gbjBuN8eXjcmasHcWD1FaLF4PwxeCoswqCFwXmAFUgrARXwBL5HH",
  "key9": "63kUKp9Veo4ypjsx34XxzXYeFbCLbg3EnjRkJseJzHTQWEah5BrrKwaAhQUyXL9eXB3X1qJek2V6TvtqVqZYcFiB",
  "key10": "jJfopShEFpKFaotiaToHeoJm7hwcudhS8bnRaV4ggynQQiYhM3kGXRf3TiieQjEEjL3WggFiv958arXRWxxNV2c",
  "key11": "5yTfQMsPQMr2zjabnfgx2cUJxdivtqjXijZZKXhfN1zQqur4DBZNP2eGrUXnrAPV7XLT9B67xFBbqP3ojBkBvFux",
  "key12": "4L3KovLXBKFTGHHHK63SfUQ7idPoYWJ94rZbjei23SV6njnWSAN58YuzZ4R7XRgWBQXABRePwWne3a74tQdjHhZ",
  "key13": "4zyNmjuJKEabQUpq3do4zvjC2M2Huipa6EVpVkLKcYki5tpQcsUfp1mwMLL89TgDf5o6xcsUA3u6SPPC7sBQjd1x",
  "key14": "Ar4qTCtKbRtCRDVDw4p1755KKVZ1joxqrpdY6bmkRSPhbP3uHsjoKh85GdBZbDZXPJnAWXoaSpK8MZ1fMcibEoE",
  "key15": "4bPGqET4wVMbHamqRRgqc2TbmamBe2nwwHtM5VDbzrUtvugzLj5WSiGSFPc3QrA6QcYpgNSkLDUaeRsTD1ucyNCL",
  "key16": "Ph2vYtcmdKRYqLWqunx8zTKD37ogDbPuSaFnL3Zbp1TS8T1TpwbYiyEqwZcuq6g8Eu4fVy9q2yuB95tYqUyuRfS",
  "key17": "3LcZubttgk8KVRx8ArZbdEcrfohrQ14REf6mNRgHep8wyRrMdXCPrKJ6mbNzza4P4V9PRvKAfqK6uLGJaKpXoBka",
  "key18": "3mD1TGMnr1UKQh7DrVukV6ujQeSaN3Bw5qq8vmcUsPWpkpVg7roT97HmMsvBbbikb9XrzjAVfUrWX5XgjPU7tVoE",
  "key19": "SnaYqLG5XvhYsZr5piBKWgd82wi1eNzTwwt36bi5xT1kfSmaNBLwDcJMNjAAVPGE9Fgg3e64vneD26X1R9ergoL",
  "key20": "cahDR5ibckTG4eQK2xtN9Y7n4tyXDY3GMQN1GmmJFAFrADBowQMpaSJWXL65hxeeDSyarme9uNLwTQ1TsFgU98K",
  "key21": "4Rwaco1yDAdoh7pwFTgieWacmf7proXJ7a8TrVSu3WcVxLDQsRws34AoqZ4aN1yA88GBogcvUciJMYTC8ZigpxLV",
  "key22": "5bVxQ6eE6jH4DaVEgrZdwnTTUJb1eJ4kCD1L9ipVdLAe7d8dkoBkFuBc9FsPKnbA511XvJYVthXoCTfqhGeFRinh",
  "key23": "mkEfP33F32qyep42XW7AjTxh3LJSBKVSZu6KsPYmtLSdzYAoZsm2bPh2nPuHUr3AaXTUQFcSBYvRy6XkxbGkkaW",
  "key24": "QUpvc87o1qSc5dTdZVGva75bgn9U22saWKRJALWibKTfGfCCd4g87qGXiTHnMucDvGcXFxJzwZD5ynhUBJjN8yP",
  "key25": "5k46Ftb1B6uhJFPUmbhnxwtNaWUJo4W2qVAvX7Gp53QDQek56dnVa7EdJebb9Z8UaCdjF8UXqVWr6Eki4gkdXini",
  "key26": "3cgjXdfbFoQ7aF9eG4K7k5AAiPxMpNPfweA65pzJzHZVPdCpsrrUrxHQfdx4vGmjHBAVMLKszk8VKkVJFJkgj3vm",
  "key27": "2au8hyCZe7kwXas14n9TAmWvA9MDe9faqNTeE2Bz21pPjxJfWn5zHcMa88fREa7SFr128RL8MvTqrQMUS7FoXd9d",
  "key28": "4jPWsxTRh7cfeJHUG57zRZDt7sGmtAUwtgddH2zrvJsKNKyh669d26WLJZExLk4iYQN4g8dj3smujdi5UnVDJPP6",
  "key29": "393HsAXW5eVhdPQoxgfmKNF2TPHDns1hyBF7wudtUAA9fJx6cjSBqTx9NjEMtR7vzCSpjcnL7Vo3jA23osssevqr",
  "key30": "2exxiicyiFD347HJEvUzhwbtyZcJmvD24uDcVnUkw77rVdNDo74bi78f3qydtpnpXZvYoaYQqNL8EgzRm4AXUXDw",
  "key31": "3AZTvvd4YqAKx3AtmPTrvUuHDEpFhCWenaczE7AGBBPC65MMhVDSUde5dS2vTUyV2USxuwNSp2pikQ5nwVSxWdie",
  "key32": "5Bj24EcUg3st4bZcN7oksWNMTjhtZab2PiaXpBZ7iZskmM2jvZyZToP9QaByppnCCTNpav7NUEyozhvx5nVXbQ9M",
  "key33": "HuCPAdAMmUvsq954RbzYrT1ZuEoxDz8r6QKxWtFg8eQfQtrwMQEuyj2tafMpFNtnVUiiZu1sDPEoAcGmVHHahCT",
  "key34": "3mpFfnLS4xQrVGPehr4GMnQaC7bncQLpiudZ2inLfJMzqgBmJMkgmnL4TwqXt3uuQgkDUGNNWvAJGjJEHYeTPwR9",
  "key35": "3AuSPR1ubQsYagXYUEurSXtQJTKUobgJAuhDfrwmhKm4tW1ukSYub6bBmkvsGL1h9pKKKCKgQJkHQt3ubVyRBnDd",
  "key36": "5akUK5jKvLB3okBojtSyu1H1hwwp3jrg2uPaRmxTvVnspNjDffUpDxWQAF9QFrAaoAp7u4473DevRHv5jmXzKKuJ",
  "key37": "2obm2k3o6c8kpk2FQtKFgXXvAdKYhnz9jxv4qazZdmc8jHGUykddD31T6S5ceJpumVoftxtacpT7AkCjVKJv1YDK",
  "key38": "3Ra31vwWUSJ8FURPaiW1bNf3HieidPtJPj5GYjPhvzaquJMCRjjRbkUPBiT73pstD26CbL3GA8kntwWwNsFA6fHs",
  "key39": "2vchSJwXoY21zHT8ceUAghYV52uEdiL2e7Micxq65CZSMFK3FTfAQZWduPkb6QCy2Te7YXxSAURftziktQEHyjfA",
  "key40": "2ig9hbmrBTAKUieX5RSKV48iAmoP3Aj5sxiR1JQX58gQysgryEdEvLAXKaQTcM6RSM3NdpTk9oiYWfLbtXET2LWy"
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
