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
    "2skgiwhLacKmbdz5C3fUg1YbmfJL7sRqxw8VVET4F9TSjm5XL16BmBb2upPc9BWbT2QvkqKpeS1yg9btUQixmWJy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQBJmonm3D3MJ2sUdQjbGDy8s61hEddAz1SZiPuFVZ5emXgB3QCdjxsHudiMjs57StzE33DhoPYL5tpcwTyxZPD",
  "key1": "65Z2D9Zqof6DCLR4VaUykMPL5a9KYboFs1yYH3DPKFabzgGXngsUKCcqscbvWfE4GtyfQtRqSQ8TLwxEneyQ8BJ5",
  "key2": "4ZzkSxYWwT1TjhqM4wqZWUTBezgGKbc1XzcKZkmUPgJJ2zYqbdBt3nNLJwFYoKKsNAyAiW4kWQpvwC7UbvwWCmAd",
  "key3": "3UtqQXyaY9b9hsBQDTpQpXnvBd8fL13etguiVjk6Rqmc3pZWMcdxwW8MQXwPBR576jFDBPHUUsSns7d1RRrNAJL2",
  "key4": "26E7HjghXZmahg8PRHr5SL47zg1y4NgWY9A9CQzBVeHgosa1ckmHv1vSgjX2vrdmVs8NzpNSZ4og33YsRCcchMsF",
  "key5": "5y3esNj33Q3nsMPQRz9n7ToodHzjWFqqYnEDDdg8qww1dYnxbshxo8acG58MUASwhjEED7f2366odXxa3dA6xCiK",
  "key6": "2apr7u7JsUNdXbDfzHSVBNXpgprYKcZ8pt7TZmPm7ouyudv6tatsxuJxu74qrooW6uBCVap8FCwbwxW29QumDtM7",
  "key7": "35aSTNXJEM3bhTmyvg6xFVmpWW2HwMjAQDMQHL1pVzwFxEf1jsoxrk5VG9SuzqxpTr3rfNXzaPr3gBFgeoCwtaAL",
  "key8": "4RdMqvuCgXMxn6dKEH5WCkqfstqpEZDq89ZQ3Dnsa4UxmRXgMrWfqiegZKK3Jina4QC31FN3zT2bTRhsD2qYh69f",
  "key9": "3V3APSQ8zBcFPeCDuweTtH65hKrvHr4WvNeWgVLmyMSsbBEfPaGM6z7CZKTPsX27qchA62HXfy6y9M8hSxkDp8L6",
  "key10": "5Y4rngYmaiZkxH1KjjpqrMCMeW3QXoRz6KQLMia64CRZGyShbKhiCQGgtbygiBjsChHmZCrMRHXt9H1YXYnZKsct",
  "key11": "4TE1FomjFqAgcMbuVXNzUbuoSrYGcbNNLG5sy5jacfgJP3G27SuG9t86UXvcBzw3ygTcHpdVFB9Y6zxtrTQdkC2F",
  "key12": "5youPN5T8dA7uvQ5kex5Znrd13bRf8mwGAVcu7ttiMdgCd4Pw8SYmcmSMZHKDJZBeZZ9JbznTjbxy21Lhc53616r",
  "key13": "3GXjfxensXMt9McNKYVQepo3S6qWsy4qoaawdL5caSBncsSqASBtsR5RjzD6UfEWLNH4c5vnmX8eFrgPk7hD2BWM",
  "key14": "obnR3TyTUETBYP4BRT1ct5sxzUpazE5qvr3z6iZREi13UnwWx5mLC59nSz8ceXsPfydDmQn29LShKPARiadraxv",
  "key15": "HWB1sAWm2y4SdUNKhfaZ4Emb9vr8t7mVotkBVpq5ZGJx4NbCTk3Rk2Xz3pjKv796Rb8nPs87ZkDzXBzVuyrrb7c",
  "key16": "5QFC8UtsCoYAL19Y1U5isw6xps16sSozsPxY6YFUjhFnePLt6Yk4vQSTsJN4A94NEz5MchxBNtMLGJPye4KhP2mi",
  "key17": "dZEvCWmqW2VtPWZJrFQYj1rTW5UvYrFmpsakpXNDS6o2q2cNtL5VCkJm2j8SJqGcAi4Gip83CXnj2whHg2gadXZ",
  "key18": "2FKREQkg1UoDFt3nXkzTej8fKiyaX8crSvQ81Pz2X4pfLK5ohwAJHRcBTqcTiuy2aCh69B9Hmvsdi89NiYcX5U6g",
  "key19": "3PpefK985kSE3qS2GTdHdCJzHWNWxwySAWMNm72cMvzSkJ19AiK8n3yTd2hFQffCTaLEnDoHZM88fh8R371eEqsK",
  "key20": "4kAxTsVgYxd81gwZNM9PSumUKjMFFx36QPsiPcMFUNsBMJxXFy4unwsWgfSiMjdfhBg2MscaqJxdAMvLRMyptSzW",
  "key21": "3Z3vgM4mtncGxxZ1DY613S3g7kAeToo7Rit23iArpe3CMwxhRzBo5vEL6mhBGHJieP9RwvxfR4yGvuH7sicYHGRL",
  "key22": "5gFdm2HwXJV6a7NRoZ7EDCTxXfaEVURVCYFVDDqfe25iMrag19qCGQEEeA79ynkX1PgLok4Bh4ZkBzifpJDhmU4B",
  "key23": "3Bvdq16KTNmdLnhokspurUgiEwzirHV2Jk2jgaE6mjbHpCosfgscX63hW5tjnYefoC7EJ78uSdHPECiYnFFT8rck",
  "key24": "3XW4cCBTHsC3sV8Wp2SrriU6uyghWGD1vQzCorbADsvMqHnP7UyNsZ8DeA2mm4ZocvMw78v7nQCRgfv2Nw5wAD6Q",
  "key25": "2WeYCTmgZQ5DK5QqeUJWwsDTRh5wHJWpN7W3cmqiMa5jXmaF9X4Hv18JPKWZD2etG8PaUaDF3YLG9my9PVGvfTD",
  "key26": "2CXbyweMbQfdm35ypgQbyX27VcLx3LueBfUQfNRAYkBcwWhh3ZWDyD9W88i2vDMNrtQBgCgLiJzxMWcGjqmvXtUZ",
  "key27": "oumDwSmB2DwUGjm7m75tfwVqjEWYuFF1qGyFCg1LStMYzKD5FkPMTuAaTSF3uNAX34rR2ZgYHH8kFwUhCrXqa11",
  "key28": "36H2aUyFPAfjYAPYDY9jpxbwWMTM4dQ6B5RFaNyssUxm9dqDQf8FYMWYxtPDvP6E5euifjcjDbirjpdZrT6skPZj",
  "key29": "48q455wqQYA3k5AEQz2QV6HBhxaejjU6RVX9FMXR48XS63miKFvjP2Cs3bNW7fdPaFCX33Dvn8bpap2qdajHrKsG"
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
