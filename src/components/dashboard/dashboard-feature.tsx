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
    "3wRpx5WKzJX84aZPZxXB5XNYeuJcG7SLQojZC8SUL6rnb1zoiYMcYLh2MUNGaf6TCsqJbx9HdaY1KPoLg2K8XPbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4B1TmKVd9VC9XnG1iR7ajPH71cVbZvp6kCyxyqUnSJgU7F8k3mFe4t2TTYKRJ6BSnP4G2CUsUaCNEqBFUBdcGTZo",
  "key1": "2srfM4byXF6BhwTeyQAmuzsUmAE9yW7HBQQP1tEwPP7xghkeWK5vHBDkJ64qiQ9UTQjT8MkYpTxcnAynrgKwK5gX",
  "key2": "fME76gHb2DscYAbNfFFnqo1R4ymw7oeDi3nZ4TWCFoyvfd9A2nzt1YpzUSFvZUVZL8mnjJ2ghrsSwdqk3bkTmUk",
  "key3": "57ot8TitMhgTDK1nMCvjBs187GaAwL7Qfng2pLVvCedcDHvGWbdMP3ozuzcgfPQb7FSMn1TNcfCnc68SkL8KFjUy",
  "key4": "31KYRTaPvfW9sAr7ckTHJhuv3cgZrD9BwGY1bkQBVT9x6EyqYoJgaeEyJacCt9V48Ak9sSwyjYrrAmM2yGPMKkf1",
  "key5": "3JXTBeN9yNLBiJijurdxhoYLzc7uH2fZg44gKwPB2kJjEsCqEKBbL9F9tsLb55JvZAcmGcgdReojYLPuGrwZ8U6s",
  "key6": "57T8JVCnrwZw23119iepKbU12YBeTXzXYpKmkLWKk3swGEdRJnETvmaCuWHb1JWQsV56f9Bzw8dzsdgoHRL3nS2C",
  "key7": "2WsZSGS4nT4wQRQtUaDG91MBSy3KCVTsQNJYR9cTgW6CrJL1RrWyiaRVA46bvnd6nwJUaPfaK4trqQUszJjXuB7L",
  "key8": "2RxtrTaUCoetfuMecir9MaHvA9HJrtihR39YNzQHQkwHURGzo1Rvu3siq8mYihRUCz1dPKu6E5tSQzYvMtcpK3JT",
  "key9": "koZBM4TypTPtUBAE1T87FgoaqJ6iRxHAMuvGBNNFArMmqetGq8Hh5xJZXA75UWTJQ3tvcE9pju17ryArD7MYu4E",
  "key10": "ckrhiv9EQx353ssLnH1EcMNiUUMrYMSsLDP12xr52xbjLonN24Q6AfyX1iR4rhce5jqPqGsb5wiXs5dkqYtX8zf",
  "key11": "w7YDbY6DG9WeiweXo6gThpM4r8gpptGepw5QZ6rnwj2s89S7ZDdQgrj9AG9VcVhNpP1tojZfF4tPtYYP5LUmFit",
  "key12": "4S8E8yWZd9DaVmdXbzmzYJ2SiHcwutBC4ZF3k8yVrcRv27XhBkBYB4LEwEidnMgSUYvpPj5rhbrHCCVXijgLZe5F",
  "key13": "5cAmsJygvJNmxh2pV8cmSh3puBdK4bK9taEoSJEcZ9wqt4xBjgczTvWsrNHcjSZYqefP4UZgr9WGgTXX3j7wfCpa",
  "key14": "2GJNAUVRAtAmHoDGLk7pfwJq6xGyPNGXFaKejAee2UCrzwoT4uo1vPw68qgLmC7FuYCvWpcEbkLUWaARnyQQzuDt",
  "key15": "27DRycBiby26RCCXRQuNTdyXkpHQrLQQVspptjD3ThbaiEry2jnxwBMkjBBsg1L15F8EmwAZQy7tBYisM6Cnopnh",
  "key16": "4fEVY31XoGabQkfsa7KN5iFsjzo47UGk4r197vWnf7jJDL67vzT394zfrXNVwxHqz5pPuUwBWWH46VnRnJdC3uP",
  "key17": "5fcGVKFTPrtTEPDxQRcHuaQPdxEZpTYLzhuMMg83yL4aC5iyvGqs5YTAMWZTRcTFgniFz9Wp1h7PMFAvzVtS5Fz6",
  "key18": "5dXZcA8KvmmDJ8RA3hUHCjRB5vaXU7sWoGdNvadQvZNFAsopMnRpcKTtfcYe3ASXgmgskbnUaTjBSYzww7iMCdPK",
  "key19": "4F1t3Aebusi22FPm2QKZeZBvViDvjTG6pnzGHoo8Xxbkx6ZYcVQaauPXmwHqv2pXdvGDQm23AwJ4iiaMLNy46iFy",
  "key20": "3YHdUjBwDCt94XfkW1DmToNC1K9hCS3GNe7zKdL55YkVBHMUqLaUdfcw5WjEuWTo9wCLt4s99NnVusyXBquZUB5D",
  "key21": "54ioBL8weimwgrU8PT4kgBX23q2TdqjUMSVMyRWrCcjGGquLPv9FZEPLnLUZhe2xpxzj9g5Y3UsjcqwundjtUQaN",
  "key22": "23xCrzVhz1aySQkBKbbXjHxgqqJcyQwcCupdaiSsjGhM1Lujnc1yf7AFMJLLMG9mxcBCG6DB1uoF7uuJSc1tSNz9",
  "key23": "3GwVQDsJt4PG9GLLKggWde43daXFfjLAckc16PWpjkp3gDmGbyPcza1crTMuBBRMhdN4dDCTfC7ujVK9VLpRLBkC",
  "key24": "M6ziPbN6Nh2Fe9sBSNuUv9sMVASFTK8ysmhjiqQHYqZ9QqEMx8ura4UNLadDWhmE8RAfkwtm6HuK6c8vgCM5cZ1",
  "key25": "4HSydmBAgiYaz1YzYq1vrxQbizZYsR1YsxcAp8gywTG83ytaW9VpCVn7kGRirchCqmEX2ekxYQXnRiCmgDimigvy",
  "key26": "3oh9WQmjdHHB2qqT5dJ9EByvg3ev3LpAQKyZaTwBVVSV6XznvdrYc9YFuyQGpsmTZLBHKCFTqrmb9UbrbhKmFzvh",
  "key27": "63567VezhDfFZ6zbXDAo9uJwLXFMYKi46pyAPF6hvZtJmSVVrZkVtTK4GsP74EkorXfPvghEQG5qyaKAFV2N21MZ",
  "key28": "2XytaeZyxyxhATDeMijQ6i3FEfawRZf1Xu4nZFiVW4tBwtrgTVpWLaYH1Xy3hrnGjGKXtKLRpoVzQBsTjeZQGbf1",
  "key29": "4hUhHfbnfM8c8dk6C8b5t5C8rxrWcHFHGBW1cW4hYco6K9W1Uwpd837zbLQjNp1rKQaNG2eaMT1NpLvatXsoBqrt",
  "key30": "4TtiCVhdaTUKMry7Zi8yqUAkcvhxHJWTxfHiJojusR3fqUCd7H5fV7UMypravUpAjg5UdxTBLsaPuEkJ9tMaQaab",
  "key31": "B4hssqPYQMBa9Lfx43e5ko5mWh2L5ppoYo79LKugTDibLwr9H3WoSnRTRbovNzpkqKoAvM3iFBPnAfopske1ZYV"
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
