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
    "5Abkyj4eHe8ysTgN4bw2ct7andN7bBa199b82iWJFEQ1AEVdEtpPFUerrULFKUJH5Xt5VbNJn9rh6QqtXVzjWk6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxnyonRvTdyr3UjaqmCg66897DbfD5TxgTWtRwqV6sHXPUkcDzURYBjTqvpVNwCMDHBDcUEjLDMN56zYQSy6ifz",
  "key1": "2iSurVWiGbDY8HjiuYymBvNswewiAQvdJv4e3BenhDH2BDtKT7CyaE5tirQFuwbLK2hKuMQE1m64gChMZope4JxT",
  "key2": "55NbXKuybSpiPd4zXU5Skx55TLs74nPZgDNyZND1u8ErG37seqMPqquJfuT35AbyNrZgfxu2E3FvbZk8g6aqrm7z",
  "key3": "ykTYpPBtBJAJVDJQy2MJwR2ubo1rVqCpDySkwaLTuyR9asX62T4DZrebn9vh3nkU6fnrgbYyj12ZADj3L4s75Sk",
  "key4": "cfn6f16sJNL16UTbMoe6vxDC4LDSBdr1XV8wk8NuKoS2QUsN2jdeBuaVyZfkvJgzCDMEYM2nTg3FNcTfiaCarXk",
  "key5": "2VMfigmgivqVHh8fZdbTSjE6EuxsBd4YWv4cYEThVrG16NUoeZM9DPz3EGn7NrZtLB553vtKBs6DpbhxcFmiwtxe",
  "key6": "5FK1ssxVQnxUQHDxoAnGf7Mcrg9WFXqoWX2JU13CdvAqkf3GHwk6pY1nbUAHL7xvaLfcypvaWcYhiMKYnDbuhKeA",
  "key7": "5vRTjBp1CdXiGsMM4LUtQCYbW8BfBP6S5K3SptMrSESLhcALs4P3Qs4v3CTbuR56yVc2a8vcipxkkLz32byQHWpn",
  "key8": "4NsFMHefjajzf2hiwJFNua87LjTfQkDyCzhytw6x9gUbLkNJ7yvPpX5DQKLGt8BcKwwGxfp1ehKe4wykzrcKgJAf",
  "key9": "2wyGRqZKUKwDRFaxdsasQTLksBDqzRG5d1sduzHVapa4SDQ2XRA6QC6ognM22NmdgmQ5U6rdwKYnVoW8tmv2oF6c",
  "key10": "2RmZVQDzG2bhpHGxtacxGd36p4H2ZZD2F28GywiAVSfDXmBDCi6EdRNzfsbj1fMMtACme3yXZW628aoGLmgq1egY",
  "key11": "3yUeKkobvqW5v68NvGiEGGp6UjwpQvd7Wg7ikcVYz1quUJRhUGeEuYMwYGpiyo5Zx2axBaPbkygp5g3gKwz4tkkG",
  "key12": "5mucAMcrtV5A4RwZARkNzjaF5qpSi54sg9qwFwyX1UUP1x5Dtz6297UtMTsSaLqqgTJTz36YQj38qQVS8Rz85tFm",
  "key13": "UcrXKoUiu5uFiEt6R9oAMw4Dm6y4VyhtAQm8Kwnf7pDoafFvupYDW8bPFJeBji5fFHb22tBbZWiwJn9vjBep2t7",
  "key14": "5KagUPnNQFNtjKQAyh3gJBKCcbQrZYtnobagE5PZm2ntmjPSBJb2Jjxt8T7QhL79wa73taPSMNg27N17UazGH1rW",
  "key15": "4q2dghWXEvQBqnz1JrfZnDLWU7HAeHdQ6ZLfQ1CvKzb5F382A6DExzDmnf6wP5yM9gHnAbTdfDRBsZEE3aVGZghP",
  "key16": "5FWfcjS6Yboa5eCxhLrykQYTzyoY59c4iy1yKYY4Hh7s5cGnVWpCtybQAEnk7fiJBW85VU5XmSRenUpWWhXXu39Z",
  "key17": "5vRdwp4zsaM5Yyc9EPdKG7NwDtcKbvngCFpBf4QgUwDS5ywT1wdStHR5bKMV2iuivtyo2TDrw28QZYPmzxmLioo8",
  "key18": "2WCYcGkyV7ARfgwFVjiByudK888n4pjHB6RNCoKpo2YxHPwmNPiqv31hHYC9sC6tJpQH5wiBo3eQHUTUiZ9ci41L",
  "key19": "27cGxo6nmFuUArHmujy9HeVUzxj3jVN9b2j5vNGMnjePFDJbkBQk8BBsBBMCMQTcUngFe4K35Dd2bvmHPedMFLZV",
  "key20": "3QwZG5mr1uATTfPSBWUPByx3o97xDJ4oCNQuidWFxBGo2mfSYR7bjFKFi2XXUS51ceQjZSaJxv3THwP7AbvdZsV9",
  "key21": "59F16shmNSjPAPahrofakkDH8Xk3bkhVuFjYDFi578bS1mpKKanTDFmraXxEqQjfyZViqJmDtFaaJQFu8VnufkpA",
  "key22": "2cf8MhxXrEvgYdYXJSBU2Km7HcDfHDqNu2REiwwpobUdvKhte1nTc92c8CTkEziZsoaotMWYrFaqT1nAVuXxNEjf",
  "key23": "3KjL9CURyCof179ji4ma5R75x4pEPnuybJQid6455Ui7UJMnXuYcgQd9pi9EAfQ1X1E4yEmxSvFWUaJfPpbVbQE7",
  "key24": "32ePacnu6QTHYe4zFpfBae3a8WFTQo5NVN2LnUkXydGi4Ph4EQYzWpWCpz8R3qWdVZ2N2eAGM29rGiMoq8FCbZTU",
  "key25": "4x62GURGEuAJuB9Q761QFpfEX1pZLjLgiQuY8ZDGWZPHGeuzEEkVpG91aHaJvS7Fur4YYGgzNuzMYVCy85waMmjG",
  "key26": "xYBhpyCDwpC5Xk1aJDoZz26cKbA6q9DM3vraC46ovjuLt7KW6js54sCEEYNnv9Nng7tDaWWScNViZDjG6TMaRPG",
  "key27": "XZMQi1oJ7Wqv5uV9hmaMzGZFUMhcvuSdVzBjARzYaWz49bxwko8i7pbsTixs7nVAckRwhQfcoA2v378NHB7sZzf",
  "key28": "bNbavQ74L99dpyZSV2wxRHbZLET1HW6iz4vAkBACeVRkcK6hTa6tCwsMP9imPVc252bh7mAbmNj6A91aGQKjLLU",
  "key29": "4423z2KXMKfFv3o4zB2sScXXzxE4RmDGbKZUVDEGuTmX81WkyGowt36ReNvgnSKLtNfN3iiFYWTCkkfY1Rf6oMCC",
  "key30": "2Xet4YA5S7vqN6SUJojstts8A6Dc6DaYNZkbqR9s4vx3xGqv4pMDiwvtZVjTnbxCzJVnAn4kJbxYFYxL42AshTrY",
  "key31": "cPQN9p3bBBXVAkp7Ja1FSsCZjuzVJ3bCMiCBFX4faoWdXdKbmKStZ8pQaMpoHkbvByVL2bksuUSWVtvBijL9Dmz",
  "key32": "2sTzzVYPEvHogAKeQQY5H8vQdwVEPfCyWoESojkHMgMHfoNyCqXwuRftGtPbFKCC9ysLkrAY9WpmhdJsv5xrGqjR",
  "key33": "53DMMhDVGouvprfj4JFucBcA59yzu9vAEDfkLNitavUJKVrAaeTqD1kkzmg2NLpJ1CNKquQXpkCnmLVD4mvBzdUj",
  "key34": "JKsopTZDkcuTBEno1mRbTZt3x7WVgC8MFT4LomDd9SH4Wh465pyhtuvZXneYGtVBP3gCnkqEj1pNv7SqjCi7YCf",
  "key35": "51mWqS1cUEiLdnzdP9q3yY8U1mYKEiPg1Ajd6tcayLNibdndoxwusSoW5Fwwcz7GL3EkkUBTc9PJhopGwBVjUbmd",
  "key36": "2wf1GvFKP1cTLxyYA3TRuC3uYG55WokzBVD4i7KRCLz192mHm2zQgS1WUk1A4mDKxqNHEQZeejrxPkSo5xyFkZxU",
  "key37": "2dWgReF94LR3FuM6Wkwom9RsxEFTGAyaWgdV2j7EBzNLL4z1hg8VQiE8vmB58P4ZhptNQ8T8QPmu7FHb5ToVLNKz",
  "key38": "2uajM8Nm8UE8GeVhnwBMayy1tX8fiskvLMvuvTrgA2p2w9BmWHZFcpXy9wS7oi2ASwpNTsRhMQkQbUGJ1L9Wbu7b",
  "key39": "4vkgCUitcxdxqaHTz2GBEYrNXT7cafg8sY2rc7e29eY7QEpFpjUq2KQMBpELYywgShKK3CG98gVLdNBiKzx1T8N3",
  "key40": "4K6dyv1bETG7naG9QTKADXKRNvQzziTZZq52EqoMDUb2vGyHM11B7L5UtpBPTEmrXzxpARJdt8xjAtekg69dKcvT",
  "key41": "4Ao1v7kmmzqdapHNKhkCCQw9F96FKrWcj2pQugSnXrABnKnqxrck7FuKuBv4bSEmW6TF8JHeaRpbcdBAt32MBfCm"
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
