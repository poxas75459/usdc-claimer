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
    "41ULcxVi9Dy5LWg4d7scLrhHvqZ4YgZ7BY2DGDZNXyrUkpBbBTvpBtPcCt6Pp5hrhRfb6BvuMDfdn1DUqSTfW2xV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bp5MJ6ufuUwzzetpXJraDF3eU6JAidWfGtfevSLdsPLyNksuKnKQxGe8rfFmsdcM8Rg73JFvHir6vzVN6eoBtvq",
  "key1": "3WAvAmuLY5ePMYqTsosgwfz4jwss4J5Ldj4EAcememzvzVxJTwmepMpNDpAFhKN1e92Xxg4H3GPkC7hjtvGRYahm",
  "key2": "qKkzTt1tF4SQT5r5Eu4Wh6oY1P8QeYaKY3bg9USRA41JfLwohP8bDdZT5BRErrTD6NWuHPzvLx7n2UiC4Y5KT8Y",
  "key3": "5bu9U6dwSDy5ckcZcmnrKXuHm2YxQEqq3ptMRsww6TfACR62YoDdc7QizqCgLiGyB71njKTT3z3VcRKcz7hysXfM",
  "key4": "4Lth6xHhtH9xzMrwVbvHC3qLae6ot4YAcByqWpnjBf8KK9Fh6TQiHZ9cMPyp3t73FT4AfQFH7DjmMuhfP8sSQzJe",
  "key5": "ev5uqJrWAsNyXxWtYKqHDBm3gaaCZ9SoqSF71MaLrsomusX1nDiNtov5phgK1WCUTjoddF6eZx1LL61xRXhpLSP",
  "key6": "2qMd8RsJ6tBTQohWST3HroisjM4WrDkHatcv13jg4x7zziPgaHS6c8GtQvtDaTQVaPwqd8ZdYMFY7vFjT9dZxdf",
  "key7": "PJhyoxiXukUkD6H3T91u3axjSmwRb2uPnqW6QN5xZmBtaWUtGu2noaQanaVxdjTxU2AcetdmfN4rtc6oxpXsfat",
  "key8": "2etwFLvDFgBgDNfMZ8D93qG2bxgHUmVBguK6oWxt4Mm6La8UMKHz6EhfvFv6BZKXU8sYCoLnyYmqod9pQpAfsTfZ",
  "key9": "2rtYccDvghXyqosARGu2ZYQgGgbiSUtFxbPqwt4YJUBi3ZLRa3hkSrrW2sC79aZGvq4ThKeUh62VahEqMYHdXq8U",
  "key10": "4PcJsRLig1VYZVqg7G2MtK2upqm5NtE6K9wvWTg4PMwdKN6Vc6E1cBTia8cTFzZ2sqTRgaydDWtJC3cUxWf8KJxZ",
  "key11": "355sTmFmfAffzv7mAA8X9SpZHGrQtQ17n7xppfsizBSpPpQZGQTXCP35dTiEvyBsBE1RxdMxGv2cSK3bgtNQdhH5",
  "key12": "CYUbXEtHEM5WK2JHPVRyadzTbuQFSGsbv82BVkhMmdeU9BsV32QAse8tfg4sKsezeXxJDH3hjaVDxvDEUgYBudU",
  "key13": "4LrRSb4ktB5W9SraCra2H3FrJjaUMNgmf17Xgwvn7DSTpBZVRQ5K9duSHZRQf8mxSVsLYToG5gUy9TU8Bq1U1QJm",
  "key14": "DyCqg5X7R9z7eT9g8ciPxCfPE5u1uHrEbT2xvDMjjpuTuLMowmV8FeAWeXgW4Us1SVR2V4odPYQDrm6GmpsZN43",
  "key15": "2pkJKoBgiZEJi5Ce1Uicx9SnZN8nZouAaYYeuoEDFqVsR1QsjjpAQffkztgJmhdkETmSWyNSrpsCoF1QQ8urpNAY",
  "key16": "2wXoz3Md44Cp7Sxqp4YdhbnW7rxf7934XWFGsEEgQ4fPg9JQmGAwQGAY4hb86s2aNajoxjJYQrGYCRGMFcLX2qUC",
  "key17": "5GDsFVKnue1Gv9krvpgoqsWGuucE2rQoUf1565p9RN1kFycTJqj4d6wCb35qGxeXq6y5cR2PqXEaCZBKxAwSKtyP",
  "key18": "214FaqH57vNLabaNgSTUmf4E9iBbrmWfE7XJQw6WpQNfZ2rtYZo9pWDUhk7jpNNNN9QqU8t5VkhJqeL4Ay2q6bjb",
  "key19": "51FLWsj43Y2Ncz8ixM1ZgTNpjQUiQQuw3HXci3MZzfupPopy7orEkHWcmp23dsjXyfHd1LSbhvrnhmAQ845NshDp",
  "key20": "4GobfyPDXC4dzsNkg6MH8avDHWgjyCgyMrGeDB4JGck8u7GSujWjbwBY2bS8n8h7CXMui4x9TRs8orKv1Zsb2TYe",
  "key21": "2SDZ9f2iyqU4MPe4mafP7XC8KWSBA45Wt5KBFQjXbTYFQWvLuMnMbwj5MYs6sqpNjxSkbfpzKMoogW7NYWN8JeXE",
  "key22": "4bWprA4SzjH9Z4pRptPdXqpeGnPgwxm89HD1wQ5bgSE65D6rC1DZQaNfpeiPfpVGnXez5iuViNtxdLsqyDTDq8KP",
  "key23": "4vAo3ENmF7orS4YuB31QBbySqSEeWtUemWXQa7aknc8QwvQzu64aGyUN1HNYa6zE5qPrcbFTvnumFsqNZo3QFsUf",
  "key24": "4A7BFJX8EMq7Rv6bzxpigPbJ63YFy6DYTxn8Sibe4MbNfckkFG9TfxsiRyzfwVKPB4jwBThXCQ4SYvfwQE66abbH",
  "key25": "cCGTY4hzNLQhitAKkmn9LoGUAjDqZKBdwyuq8PM2jVkide2pKsTxcW9wUpztkMGcS4Zsy75eMerUxLru6iErE8Z",
  "key26": "5uZBcYd14EZBGeFhbNKeYnmEZP2kvgED1fbZaKcLwn4saubxxtrCPt3vsZJjsF1bxibed4vnZuYfAFWA6zvAH3av",
  "key27": "5rXkHFzCiKtQj5JpkDysqVrjj1Hcf69oPpdKCMghwHDvdGeuCrLvyGXKAAi6yZ4RrCPunBaRq2yT1Wkgexxmcv4L",
  "key28": "2u7JiPjc2VAgZwVyq12aPrfNbKdXaFoSzUtmuSX27DCYc5yYaUhr7m4QQKEoYCBEwqigwhkpBEgCvRfNjNMkvQH7",
  "key29": "5BEETFK7y6Zn1aVB9hGJVAB5vzW3fw1evzftvMJpipnG3hTTKLnGyzdJYmrNcVeFgLKM2LhJHnY7X2De4j6dkDmq",
  "key30": "4GPfAkJFrrT3gY2us3VQ49VG5ZiX2DEd3FWd49ijeCFEjWwcyQHwYkipNfTGAnx8eHbLMVJVWQYkk3dBPzaxDd9y",
  "key31": "Ro2M2Tp7FdxV4Gf2tgSPPpkfXAb1SNVvgJxBFfb2swNcQN2771i2eG8G9KHnuPWrwYeXnrK9Q3poznaqMEpSJGL",
  "key32": "58bE3ccJ8UPTTaiKhWMX2oFJCTKWLqiYGZ9NbRYgmWEnZj7Qi3XbmMchkWQz4X6kzmdyXcjZp72inGQ5fwF6c1VC",
  "key33": "442tKudT2Q7GGQZhrWfrg3RQMnMPXt9o4WLCcPd84kkYCTwerWMLAQYTe8CgJvXtoB2ij4Ni7nNAVSnA8mtMdWn7",
  "key34": "jpSLULpoLu9j82baMWegpvvUGN4eKKsQjDqwfbymhZXUmJA3PatzGwRM1E7r1BcsUEtPgwJpUMZp9nJqSjUM77i",
  "key35": "4qkJJhWiLbQdpg19HS6bMH7ozN1MJTQt5WK7bMSrBEjx3n1e1wThgJncbYXKfBUS11VCqG51NRYHyEoGLYRLnVkU"
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
