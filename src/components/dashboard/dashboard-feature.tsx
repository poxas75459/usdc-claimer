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
    "2zTkkfv3VB3HRvwRKBRK3wMJVXS8RWj4ir8DCEC37EtKRnJXTMmPGLtiwpnWYaSkDkAVHXWGWkHSh3KaibDpfMPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mSjuXN749CiXv1wy9mvMd4ojxQYVXhmsu8xNe9e9rPYEiQMCZrr7gJqqjLvH3f5oKTGLqzVRmAkB8cZEQreA2QV",
  "key1": "59uHnQhdnT9asvETttcbUHK456dhyK6aGjoYTqBuNPHuYYtWHdTT9sYoWTjhEtEp8K4L5CeXkccUs43CT4fBoMp8",
  "key2": "2H5vx3mnGhwTFBzakuR9tpjzXGVrfd5MUt7y8ps4Cipwmb6YLD9CVeFqqBuG9WEHb9HAmtjhraeTMtBiYoWDpHYV",
  "key3": "MDL5wGvVsbqCRvU1PBHKtqHRuw1dwgJfSWhyqbsk25U4KBH7nGBGuHJi46gaY3sMks5uAQ76nyGQmGjMbMjwcpC",
  "key4": "4XQSR2tPWkmSfDdpgGqFqEBdy76wAHngGshvDsgqCNPS7bHsXYgPnNJxB9k7dQnYaq7goRcnzypDc8voiyvYTQvv",
  "key5": "5z1sSCkkvxGfKJbkmSFmcFdx897iMuMQTqEsx6um1R16YSWmgvVgtbkhgU8zZYmKjjj5dJvKKZxfk4FeBKnZtGW5",
  "key6": "51LH8WGVFHe9HYwnGtE8CQ8aqskyRsZTD8NHyWMDUZE7nZLmwJbG16ZsDNoSeNwbBYoDBDgMn9KP4wu5fb2pMZtY",
  "key7": "3ANTmUmAadxb7n6D36Mtq9oxspcLes2DtD3nEmZTE3LEXu171gTH3GzrkZnWaqVBQJdp6vPEkQDQXGzrszojYKFj",
  "key8": "21WDYAsGWxbzTwtX4dcZUQUN2KERd9DkFBzQk596grrUGuKAyBJ3R96d3DPMpJsYjddrTE8mobKd1DzEem3s7ujy",
  "key9": "aadPhxgs6jood4Dcs95BXvWpPi16toJwryTYhBirSMKDKFFf396dkzxQhKZJrSWgAqzm35MUUeRrd86UWcHmbVE",
  "key10": "GdtxzYG8CK87c9Uvd2RLjwj7zqsCMP7gUeuAvieVMSx5JyCViUUr5QavRQ6RaLNCx5k3KQHLSVw8ZmiWKJEvkWN",
  "key11": "drvsxyV54W2CdsJE5s6fyrqQxpLC8EjcHsc2RgiL62KBv9mBu1DqJiJSefqqqfYDfcVchmgKns9UrDLNpwbkVho",
  "key12": "3ihzL79isi26F1thASAUPonH7qbaVirWzXPYvNq9vfK99SP5N2qbqtqHpri7iN1gyA37zLwM3dVE31tGym9cWjmp",
  "key13": "6RCdM8VoaBHmMtHmqYqc6ayWBtAyx9j67UAFW2GWU6DBAA6nJUeBB1bmt5XvBB3h9pFCj5v9ikq6yozqHP1RCvP",
  "key14": "5q9ndaYHh2YvE61AyZ35QcMThfshTuc31MbWtYhnoa648zBgVe3Cg6jskPa1ys5VGVqVnLq1YeChMaozstDK9Hr9",
  "key15": "5XPGPYvnyqjMdccDLGMUf2npSHeGQV7sLVZdvQk2HssFBbYuxG9StDTXwJXbzsNU1VpHmDY5bwgGXEqdwum17vBN",
  "key16": "28LPbBVpNpDSahxWRbM7kjb4McMwzMygEttR9g7VueWvbfwGU8qg3LJXKLfMA6FPn2JTHhPYg3Dtn5ZyuSCVd9g5",
  "key17": "LKELpsVCpLDTKCwVEuFL3caQGQgkuuUcZ1DGspT1ZsWKJsMXuqswFMBBHu8atfbBRYfyNvKTGBzuKcumRSpaSdq",
  "key18": "fG2re3x9KQCPNnyPQRrnyAQKJpTjGUQVNbhWFsMKma7ZQ2Z9es6SWjmAiQtaDE9QK5rNVYdTCecaQttqiorjobV",
  "key19": "3PgZsLF4bj1DqLaBv9f95eoVbS4CFYsYc57ko7HYArFdk34APnSPqprkkxMh9gnkQkxYrwSV9csTQAsNcmsS85VZ",
  "key20": "5wWSg6PS8rDGJbTx3mV7jqPA9oZfR2gJ82VBQE2fK6HChxcLwwvyATARFMQkiLQ45hFzpAHWnyNRbdVTnrRTtDgt",
  "key21": "4rdcsumbotWyYakq8YYQWmYNAnYndcUkLVuQzFTsuoi6V5Rkt6dSYhWZKfYdRiSJR78yVQ484jTN3up2KQDbUAdY",
  "key22": "4cfpEwvFN4mMKfipHfwfg1j6vz2hfWpVUL4HYWqi2KqmSxVic33x2MLmxMW2PdN1JBqQBrfwCUw2V4HxYsQ1RToJ",
  "key23": "4Xu2zodnLyd3HfZ9JUr2cUvAhWXowDDYzKCNiqJnbnVXXZ72qweqGdTviypesquFnKdaenbQM6fcZHaxuaVnr8Zv",
  "key24": "5C7XaK9adwjmfpmknN8frQsmvq8DZ5uZyLLwjprBvmoeF2TUmAVcAH3q3ireNyAxcrLZDaDeocvNTyoRg4C2Nhzt",
  "key25": "2dLPseqUyENZKhfZ9V7vAhs78z7mjMyxgmK2zdE5RiBzDBMGGCm5DdsZpt6NYbxBBgAJdkBtnGS8pbMYqQzwsSBN",
  "key26": "2iYDcaJNfkW8DBpFvAbBiJsc9namnVv7RS8whjdqnActsvQP7mm4zGfapcZNYgHPowc4njLh29w9A1WysZmefHix",
  "key27": "VvyessaXj3hsLTw7Dar8LV3P8mrngd5mCXKRFKgLGa1vUaMcoq3B5X9yA2gh9s22Y1z8N1bWHQJc4jEPWyKHZP5",
  "key28": "4tHhHDG14cWvBg4uVkDsCv5UNvM2Uu1Rqn8iko4hrLMWdzDNEqZm8RULKB9UJuNCWsniZE8Zf72pWYDNTzz3dpHJ",
  "key29": "5XQ8kdRDpiEpR4MCuE2wUXpYFWHpCGCf7fPdj4Cv2zAgycRsMpX6yzh3KQdveejuQqdn5XDSWpCHfvHmgNL8CyeZ"
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
