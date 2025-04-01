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
    "2YNujkXrh2EwkU9nkE5axt3rR76AoAMUuCnGrJHHKZgS6marKTGmezorza5XRsuNY8N6RB29obC4Nn8DFVbnDAFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UTiTeHwZjxgzMPRvPXThWNWyGM8MBTCqgcwN9WkuqnV3LAMAvq33z4TZvrMd6N3gJqpe5TgLDC8KryxwutAiPNZ",
  "key1": "3vxjvqHbzLsVTwjpAcnaea1cf6cg4LBLzYPxua1awjYVrUf3BgLyfqRpPJNc42FQg3PV3eVqccVCsEDrC5nLzA2W",
  "key2": "3G4sLFz2KdzsVHi6drbXLtR4DctQ5fYDTvPQ4qdB9tDeuGqiwdfuCN2mMeSs1PnTits5iYmjE4H7eSTjZzgNiXdU",
  "key3": "4KgifNBkkxX2dojqAjFba39FikgY9jr1JZzxBXrbSFvug3KA8iyqCGP5nqSb1Rh27Z3obmKsbVjuLkGgttCesT6J",
  "key4": "uGDBFkkYPMnyqNMyQBBUqD9RNMgE9fv24dtarx1RPVByecqDTKvB1miQXuhCqEEKmMLhLSfbB6XR2U8gJPB9mLC",
  "key5": "4NjibGn7AQfbcexiFjC9prP6Sj6NyGCo5FtDwtwuUBmRd5QUwHABvCXxNvd9TSoCFzM6yCSqMYWHxNy2NFrgPZV7",
  "key6": "2CM6RUZCW6RTyF5ePTM9fW9RgbsnNuGZmV38QPUe2QPWn41MDyJXRfzWcJAtbCcQRfy3C5R1bNueF17VkppoKZkx",
  "key7": "5LrverWMpqCaBEVvTR3GQdQsvddvMEb8ADFYpVVqvzeAeZ4ZeJzNqqec534XKb3cMJePsR5avqGua8iYhhvvd2JZ",
  "key8": "3GPkpvHvM2RgFa967X31oMk1xdQrjoU6DMJXFfzCZXNgooGRgmmZX5iSA7VMzaiBCheAiu5EiQe6KxnKCmA5qsV2",
  "key9": "8XafuyQHAwVuqXnhvFE7TQHCx24Q6G8T3HncakTtaarpjH6z58ZfcfzR4gPT6kjoSb13yjgM6gCgWmdLjgEKfgo",
  "key10": "14MfkfGTsaFKa93LJqyv6CDBtP1ktf9Rnc72MdCe8W6iGJP3i85sPvZYVWgkCfdXHjwE4HtmCQwhjDMrcG5M1fY",
  "key11": "vqHxyZhvje9N3K34kQ9Skn1jFXPS1jtmicbyWMmTznPN3e2NNhPc7Vsk3NrhhXFo6yTAEJNxx8cqnnXi1piZLzg",
  "key12": "ifL4xrfXketdtUB1BkpgeYEhsgTgrNyM9gvbEWsJbJKLDuYLcWc1d2BcyvX1swuy9QNSpPPBsvyjrDHU22Y3RCW",
  "key13": "2s1Eh1Y5qvcerzxNMRBaEuYhjnwSaxnbxYVo9jYZMoQfPiWC5My4vPvkSG2s5tFgmFpGHWGLVh1yn6WxwRoVUvNa",
  "key14": "5RWhBQDe2JkgDUrpjqNQ3JfEDmRHRr3Qj7ENkFxK2M7Zn9wddPkRZp8Zxge9fN82D3hiXKp6BbXtsYKPGsLZ4rKd",
  "key15": "25JfkZzHf8iXiwhmAyqLwV4LmvUUfwXpNdU9L1AwaYCYC28EXAJXYAREHWYrVrA8RLEx7fvaEczForLT63dabWDf",
  "key16": "43vWBFY2sR6g3nuKHEsd3nn7z7KudBxUfoy9BsEQ6YRZW61HzjM3N8BCfwVP4dpQuRHCq6CSQPZmJNsMLZMw1Hba",
  "key17": "5pUwM6rVCRveZiA6WDxyPgYWwmWQU8x4B3XpNPsiVnrYgtThFyPunaVaygn9oTjNxRUjUus9QsPCkTfMJHASz9r2",
  "key18": "3XGXhxYnvtKAit1AM7iz6kKtTx2oSt7Dy9L3uZuP17C52jYddzPBLFZB6UX3QxL6orPJBE3qf7fLAu9nwc4ukcWJ",
  "key19": "3n5q93ZZ9A8WQm1U1EpXt8b8KFBtiZT7ryqrcetch6Q77Jq3gPA6qM5KrbLnFFuF2seopMBfqzh5MZh4b6SpdnCs",
  "key20": "25h8jsKyzDXbDkYVXo7PiENbt3VcDcLFyCBaLtK2VoGjRPQ4nQi6Zx9yxKUCSAjHnrwAyCwG64EA325pJ28efCUR",
  "key21": "3y9yNSU2b9frgzgJ1mE5Ztejuh6sBd6KdudQ8MCfmDnTzUUWoAat8aRvGZ83Mw6DugSHcda6Ni5v55Ms2mNTFM86",
  "key22": "ecUnEhRBBWv3tKX1qkq7qqeLH8jzUeRhJYzk7nKjy78XXa9PHdWquqxNaqyduANsEhHkumzVJqT4SG9S71SkkfG",
  "key23": "4nRoWPaLSzuuEGgeBvu8Y66cFgh1UUUknDSvRT1VUysNHNxmY3Rqo89ZBkzcTftQ8Xn7p6qzfvnXYSSEEHE5WtEw",
  "key24": "58XuQpVbwnGFy4niBX2t5i6cgZ9Wvx9oM5Fd59gEDrV2mwU3kYwfLsq9qNYyR9kfF8DHEpCJLJsXiKmhPP5qho8h",
  "key25": "4xYApi3GcuSkWV3SY4wnngdm87L8cpmEH7QgLD9tYcvbAVVoYS5GamYFdsoLtDXaEVarzZ7UNJvAnKXVVtHFhMki",
  "key26": "5mt8LdDEbSrXBw8W1XfH1Qqy8oa79RBrwNegUtiMoPXzRfHNAifRGDF7hpwPsB2WrPffxJid3s1VbtsTi5Y5HHZ3",
  "key27": "22Y5vLjM4sNvfFjPtbKcBKDEvg1y3yskDEXa9w2Psf8Uf1ttrZw4twgwLEYpPG1LGH9ZAFD8ehSW3erPGddmhJ3n",
  "key28": "3M2wrt4LaeptqGvfAycHcZtDfKdnVAU56fnhU9kEBReEo2huK1wHp6Q2KmpEZPm4aYiWt1fCiBWoEUavg526C8EV",
  "key29": "VocR6GgbTvBHyJrjKg1fg2HEPrrxJVmQFM8KG5Tv98G3mfiTTfueKq5BWsxR1JKW2Wjgj7Zxh5xEdaPhwocPiyE",
  "key30": "3YNB5anqjHAAGt1QuYBy7XsNaThU2GA9ppdbn3gLwVZ1PBZW1UCdjKyyL9QgayERhFb7KMFG2wiMAUeBoX9E5FUp",
  "key31": "T41wVcLtJaB3gGVgrvPSk9LSGQjpzZx5ZNWCu3JTBe8AQfySCQi1bVaQVfVqxxdQsVoABC6Gy225Qgcb5b7RdND",
  "key32": "3oCPynBQqYy9pUy46xmEdqQezUC1kitTh1Az229itiMYpnudRZq6qYuBcKmMgpfyZiLBqeb32LzEnM6dvfTLu5mC",
  "key33": "3VUpdWVsUpQmFNNbAkiGZLRz2h8vDn3q8iKnM2PUQ8oLsJKmEE8itMjgLXk79HqAreaZUrhjtZ4WD1hGYFVXuoU4",
  "key34": "3KCY1Xxgmi1DtatQSGMk2oCEQfDNvTU2yuQyp7w12qDkpAeTab7GcN5tBTzgExDxTtPBorNZ7wrcr2jcuQ6fjAsq",
  "key35": "5UwqdNiVmdMjjH6Jbo7fQ3mxEHPWAG7yRM8EdTdiK5arErRWcQL2Hf8Aztrh4TdYDkD7M5PNAZmccpzRry5NrfgD",
  "key36": "4onWtZtkj9R1t89vWmhSrFMuXqvUozujgUgAwmqsS2ARdiut9w1LvyFmcn6jfCTnRiKkwxeryya8P5yBPDxi3cuM",
  "key37": "4JbDFi7saUv6BMGiKPadPFWrJVB1uECzZtpozJpUqWGgfLU14mRsXgNbE1bTrvP6Mivf23UyuRweRYcEBUggXMbm",
  "key38": "4hYCNbiU7StRC2wdyhoZButU2h6MYBubSwMh9GRsxYTgiC64n1n5cQxudmJfSfe2X6jvuNBvMMe8UeWqxdha4Rz4",
  "key39": "5gMnjtH52ZhimeD7p525dF5Kf3iDm5fF3P7kv9XwjHZmijyZ5WLiTRkvvyogPN181x6b7EqHeZY642U4W7ye4HZU",
  "key40": "2KCmHiBWwfmCZC5YJ6eZWmjgstZBKEXz3K9fQ1z63JnANfKkESFhtNuAsCSBTWbifpjMXMo6VTGvETmWjCGSVugG",
  "key41": "3fKNNpfN1x57395SfumcgEKKUDoHpjpTd3GUVm8Jg4g9393w1LL8UYwiDBrq1dbn84qUR12NHMdiDEjuVVS53a2w",
  "key42": "27RdNG5gon9rTwoKH2RZTqekyU3eVPq4UoHjWLLzbC2GTeNbnx7ovwaAKvD6tFY2WZcQ71ecK1nHfFzdG9piwXEw",
  "key43": "2KbfF4xKyY5K5GBxe9FS3rmd6PFRtfB6M3R6fLESWFEpAcG3eMY4sNo7qeKo6Cz48R3kPrPdGsN4g44kw3pqtq67"
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
