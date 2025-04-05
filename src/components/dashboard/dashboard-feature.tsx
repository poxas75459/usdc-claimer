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
    "3HS4ceiqe6yzZT1ebjsHxvmhy7f9sL3WUWmygCvPoKEuaK7j4bsQK4yC3QQcjNZFSR641VCcUfCG7mTcFvdwwK9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsXSdguAC7SzrCib2NHgjMGaofoiBQnbbj5BPMWh3faVNhtpmtzHhPZwZ4aZ5DUC95xyqAEUdE7G15PiK8YLzz5",
  "key1": "p2YJWXo3Nd6KxU8MZk9ZFmob4uWbfM7UrjUoLH9UXDPbkDpMou2C4rQMBSEYFJ8xGWiiAzF32RjZUeHDTiH4zYE",
  "key2": "5L6URvrL21DnrqAD7BPA6vMebcWDXzwsmhAHc8Ri9ZvMSchpRdMJRB9FsaYuJaFAQZbCNhomKXDhjDfXsKsjDtgf",
  "key3": "3W3WF6GejK3GZZBw6nhTMRuL94Z4pkRM1retUgkcKigVYTV5zCzUXWjyy2CnFFbtr8GT7UMUqsLDxx65JKZ4vWGy",
  "key4": "4FRkZBF2JWrNHrxoJYwTrwaHL4JSmwbF6MLJQAjyzrQWKYvAxH4zdngrDhoRKCrgR4u9vmLfetrfapb3JwRsDUnx",
  "key5": "2SeMao5s3B9AZXMQVNbKvP9ZcZDiUYFwS1z8rXeWPdHA5XoPLZD4uCXNN85ZQBiu6zcEEJDA4euAYaQHxLNiH5rP",
  "key6": "KYUUyf7hnk68WVrncSR3K5GSZuooZm72pW3zFWuykU6ejKtzoHCo5W35tZcJWeXyqjxb19XzMaBYwU4rNJwx9rW",
  "key7": "4umzf29W2bPJvPT4tvGTuUmoNypzHT5akmxWWuiimWW54DAYp6DfUa4uXoaR6C4DM4RxqLPEcW1FvCH68PVjVND",
  "key8": "38gEADLN1WEi3Fa7n3xx5bg6CYTo7n8D7oTGYSnHMCg18fY2HryXa4vgcmLWmq7r7QkhJJM8fSk6ERgUVo426xex",
  "key9": "5gvaHKW1ugWE7htCUFts3uBG9Uzn1pZkNAT3sSphEncKYhhoabDnb64KPw6kD9YeKMr4SpG4N5UPLLG734xsePaB",
  "key10": "SWoaU1Jxtsp25hzqLQ9HTayqvBT5MEgHNv9Qa6hEK5kPeQhht8h3p7TJGJddKveVC5wQJh1FdPwxu3UaE1M133w",
  "key11": "3o9dBkVfhPjZtX7WVj6ofzXCjuytS7SpVwTCAwxwqKC9wLHSYCEyGSYRjBq3odk6dbsgZN1WqyMi9YLPVtJvchtP",
  "key12": "4NSZf1WZMDP1Gt94ZfdTPqwBMYQgHuQVyBgW7icyvDjp9Dd3kDFDFCHFgnhGQmaXzzUXdcxhaAHgzmMD295fJ3Cy",
  "key13": "Gtfat56GaV9jvbSER8DyZwQC9ogVspuXYLerp6CjbaQKXm5SKF7skLtnZ6NQ29GV1VSfYrMHzGtV7Wev6gWcEQH",
  "key14": "5aaxbbVs3Kc8cpgzVefDcdxzdga24fRBLt9Hfz673QzPsqaMr6rxFnMykRRTYqnWs83n7Xh1FucYPj3v8JaRzq2P",
  "key15": "W5KWTfCz4FBuHZmiMt129MsE33cxHpeeaP7jWYs42gEKP1c5PyzNSMYN3tVt2geQYxKBAry22EZdqYpNfLF8vHs",
  "key16": "5tuxuPJiJTiwaNyDBNGvojBd8QVAtuXDaeoiu4wea8cXUSGPsTbCQPZuB2byxgkSHPWsLfcTuzMXSbPFTkBmawHB",
  "key17": "5m2Lqt2RaDNJ2F8DPb6gZJkAYmo1awGhrvaPjbmxA68ZVAB6LMtwWijeNwaQ67h2QmCtbFnnZp6dQkkrQdsz3KCU",
  "key18": "2Grh9tkGyAVxfQk3ScEKoZXAB1pk2Uk6eG29JYYu6xWEghu721H6Lmfdk8qdNywqCA3T4jcPfBwFZT9qxatWMF3K",
  "key19": "ryZa1Upiwd4SUeDbjHrzcaBtQuHbnENSGzrTNwtKqdpyj2jkLsM9xK2fvbKgUG1Q8YBADJTak5dfma9S8PmLnrb",
  "key20": "5iPnXx7tNtkogRxR2Pz2zorH7hKGsV8Dz9P9JzV66mAMs7SqQBAnUVnd9WhiK9Rq4fV3p2gKBbjxeMNXapaPVMZr",
  "key21": "3y1LXKdtqm9ujsG8mC8cJUKZvr2EwEvnCBMJpNHKraJ4Fgbmk6E2QXZBgJHaYdNZ7r7tpRgxaJvnH9AsaAn1aKEs",
  "key22": "3KnmdhanBhJwTKkYMioPyPqjhaKEooC77oiJSrHkct6kGHgdJ52LwuZyEYNomHyWGceSApc8cb9B3Gtp2bNqBxai",
  "key23": "BdxCN5NsQNgsNVfAVYpxvRDWeyBMb6iURrT45FwjPsiuDLeupQbqTGM97B49BeVPyLRAjz5428qThcmupQHp6dz",
  "key24": "2yHndMBNQSzXM95icY62EiYX8WRyhMHSpkBha4JJzicNqJS6ug1SBqzzbRJb9xgoemdj1s32RBzdFwxFqmbrrYRR",
  "key25": "5Mv58Pe4vRrSGJvW1jyRcp2bcZ2y8LCVWw77bmidgkmUGsbteyDQDF6TxoKyFtHTT9DzTkJXwsoAjhnxePN41bDU",
  "key26": "3cpSjMV7YJLMP5Sgjt9mTuZHqKBDfFMWLmdpqxMhQu28Sq3hG4a1pvCL7NrfArrTZYNeN9dWr76XkWppCBq6xp42",
  "key27": "3KBD1H4EgyPmJUMFYnEAnQTCDGGQSFU2hEQFGdgqQa3Prmqj6weeDVTYpoJy1Dm2KVsbQWv8DgsKXFBKffmQpSca",
  "key28": "39kwsfqbJ9H3TWU7HoNRKq8mTyfffF9EBqBaFpBpZu7WxSKeGFibT54Ufunhh5m2j2FYarXqWoNZssg3p4MNDEAF",
  "key29": "5dUXynZK5SawSyQ5BNLvEvLLcxNRPWw4By82ZN4xxkssFFtEhbaFveBxbFBawrJnZYxVpzSBwDpY3AnfW8f14Wnc",
  "key30": "2X1kAtjTF9gVcbugEiPx8Q2QmHbrvnuukZwro4fnAQTpctZ5gfVjEXpNsm2PG5zFXVYAvULt9Qio95PNvEicGhhj",
  "key31": "WPHtvkWX9dWPsBcq7on95Co3XxiPAkidce56Jg6rLwe2jmVLKZuEaFvCN7p5FXcR6KxhY97CWdTgpRoJYoFApdK",
  "key32": "GYcwu5dgPrdJku7cmQim7UoPmiGh7TAwLZUQrE5hvUrn3gMaLpg3WiRPD8WLqgiB5nwFUvQuE1F4nMofVsz4avt",
  "key33": "5xKG2sp3EAcfuSszqfGVVmtuD8mRwgHTchtRNFNRASJ7QPm3t5wH9kYwn2Lbeun4nwWfCwr9ZcXQhQYPnonrqPz1"
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
