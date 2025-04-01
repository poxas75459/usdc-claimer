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
    "2Cffmzti2r5A85mBotcF6RC1ApnVGGbKPVmqtwWpdd8upfMUxs6fU89MUzPxyX4kPpd9FAXAcpvBieu8SQ75anFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zbUA3JjJMMLnUgjPQXYarPqPMVfmjX5LHKs85gKaSSv5r7tFCiepWz2YFUkZbfcGj1JYxgnA7KXfdyYXiQLi31n",
  "key1": "52Ygk1HSRTXms1kWrdMiFXTtQzuMgysAsCj3VPKoB3Hsm7Mmyu5MzVc5WAvsd98YcU88yyCD2kkXQmzBTcTbL1ye",
  "key2": "4eWmGiazFvuXnWvZvomFmG3KJkxdi53kEqYgNW8FuVhgzfYPwzt1zUmce7q4vn8gqNSDJL39oKsLREztq5ic2bbV",
  "key3": "5ZMpVUeU4Y2VwfNenPiFrfu8USWqMtfwW2d9XXjk9JJhQH3fBHi48MJ1LNcvujr133eNYmgSqe9emsDhrkY56J7b",
  "key4": "2YgH8qZQjmHUww6jRFFrUpm5pwE97Z6qB16QU5o7rR81EDtVrK9fDh2whn9kJfj3h15KAjEuNZsDcEpwJSnR1SAt",
  "key5": "3daSur6DxesVxgzFmQu2Tey9daMTtfrbfA8LAX3pnjHgFGj84bBRPzHuRZp4WvxF8G1NXVEJ18HeuRELjLEsyajc",
  "key6": "2swZ45uGtmBSYKTJ2ZRycsPeD1CHRFo67aLf5Fmka12VRobsn8ffSsTQM51rfz2sCnK2UnDtKvGdmWLR2dXVPDgk",
  "key7": "3bV9f9UriFTUHKBHCLHnUT76nFhckNQj1SL6SYqx14EB1axWzUSgEeP1cDtWxQq6jPje67v5xzk2nRcmRvXu8jgV",
  "key8": "3zxWtpVYMHA3ZubThZZwU83sgtUKy93AhBd98HHNzPksQsj7YXvXKJ35xbd31aotpzhmDtvxgxzccdqmSVRSH3jr",
  "key9": "4ZQMotvEyQR72jc5iMaB6KTpuMiq9JEoBBfLJf1b6vsAzstcPQGyF875rPoue7qDk4jyjXtMWEUjndydL1ebp6XL",
  "key10": "Zg6FYdTMU2Adr8VKG51FF2q3o8j9y7fsvmVdbnfXPcVxpsXpVFeimZ5J8Y4KQ8s1cEVjCLG1sMr9bjT5FM81ULM",
  "key11": "51BKfG9CqsHuPEFA3s7DbhuuMWGmhKYrFLeSH7xw7NcN7jQwrrcfCYn25RigvZccw9ntwpfKAfUDVLBytKpZG93j",
  "key12": "2fhcfdxLvZNVH67fxcJm9aBSmxo64kCQRwtknhTChMa1fRnq6Aro6LMXSFcAtiWjATeUqwz7e78FghaYHf55RaxJ",
  "key13": "3K8nBthRJKu9AT3rHaEGsKrQQ7qvwEzz3vx3onceBU85wDzAyMJsZCYfZphkpWNeBJ6qf6B6asH9LNfbUTkRh1g2",
  "key14": "4dAnTgJN1FuvszPpTVJr1xqBgwc7mv61k4Kd5z78wfjJYCwMBhHdnwUPcnLkGE7ktWa9qQPzchLi9V1XBkTmv4bK",
  "key15": "2j6frvE6PVKA6DtUBwgpxKiwohmgURC3W6mXqPR39P6WtXNfmVyNRgTnDwYiKMHmsoAiqt2WpveWyKdRfdFjsmFV",
  "key16": "64KXPiuJyNznkKqrdi5ULmeZT19SRE9z9QFLfyRR3uq7pzKwYhWDupUCBQbnNdMhF626Ymx5Qpu6cgnzQYuV6iqg",
  "key17": "337oX2xcKByUu4DTSERXzuLj2zPqALnkArGKoTFhSC6oo2NKfVp78KUumF9w4bMKtRGBmBt6zZZWyqxKqJMGgm2h",
  "key18": "4uoVMerV3zpmMbwFheSztddEQBPS5Fbf9ctNNyp3vHVCjCTNkLWQt5sArrt8GwhxFhaERxLjNn8HkDyv9saDQ4Vt",
  "key19": "4KXGadegNHeiZrhqoeYarM4Ksp8Mpzeug3udgMoyLH9r1iPkcnX1BSBi2LaQgvSyzEHo8pwjLBmaFvaadbTcohVK",
  "key20": "4aPfHmPgzh5nFptGZhhX7iVVKcCX6XA68p77y58TuEdufPDGxUEbezgNnCUKRwPG6kUmAhuhMo6iM92nvreyUC6c",
  "key21": "4qV471dhtoXSSe9UUTXfRc13KPYNmxB3dEPRR38AGeTtEFT63A2VjBK5RPUX3gdHUC2QpB7EhgQTB2hPvtoJderf",
  "key22": "3S26iaRVyrwKkxgPZW6sniP2x4DdARuq1Kkm3mErR6TTPcgsEQ1xLcmHYfQyMZtEqNmwLd6hmq5dFawBbyYehhCS",
  "key23": "5QW73RDFUWDt276SgYayFDiA2RQSSJgjxSgDru39wSEepy34F6Sj9e5BZD3V3zEJZCo2YgcQ42shGe5wU3Nm5duU",
  "key24": "4aK9abFuw7kgra1gYwHewznrdPp4vHGSpZ8t8GEerVmZVECKX2dhLfKNKEremaAZ9jmCy6GK7hKVNrBiQZjk8ASz"
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
