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
    "F529UePoFdQaVRJSv4xNtFirS2yphVZfTftQFxv7qTGiiUEECj72CvUo1Vefc8K1S42b6JKP51DExNSDiCA9E6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32KuGXG4ztGS54Gp2aShMDp457XoWo8QcrS9z7dxERTg5sjekVdVb6gLZ1k1qZ7dw1XL6rPePLFXoJ3JWTk7QFUJ",
  "key1": "2XEm5Pj9KZEGTAwHEYsRFvtAnyHNunCQfZ3CfVCNCwKey71eonV4uyRQ96vFj7mZi2J29wnViqRT1RQXkaSWicie",
  "key2": "2QpEejxuVeET8FudevQa32KkAR4HYXh6czTXvS2nTcUsN5uHeuFy88sA4q5TnDqWJ2xHsRcsqrbZUVKjDdb7MbzW",
  "key3": "2UT8Z3QFcjaQqdsNo3GpuYFbD4tSF4QhXp2EEBphk32goX5QhXJ7UzEffy2yFi67dwsHzGgag64Kb4BVe5qCBNTv",
  "key4": "3EuCeZnXWayJ6Bxjg9r79MEp3mkzh9TFWTV9wVkMVrj97KSfqdgJTieTz6bzF6dXXvNDXoTUzS7fX5ZwB2tUoLc9",
  "key5": "41ecbAS4ChzcA6YypNzSk4vwPkoDKHDiYMFn1MLQJ5phzVGPo2daBY9vWXAPxN6WiS1q73CVpav7ygHWS5Rp6XTS",
  "key6": "5NnVCKdNou7vu29PWtwEucuc4YuwTHjBjdJzJqucy2BYZiiPYQ5JqqUaLC7uZpnVkUinvPVCNBFEv1Np2sQqdqTC",
  "key7": "3LBrLoibt89dcZ3CU4WEu6sdP2JJrPXLJVvXjcxPwsBtuEyn7kkznD9eQXrEu4zTDP6y93UMzXMmyTbJYaWeCB5T",
  "key8": "3zJkLSCyaBjowhksaW417TAX7cp2JscZQzJNsLv8BPRcSwicDcumy6WBpyFyJfzUL1gr6vhpScfXJ2GzmNo5hSsZ",
  "key9": "2AwpdbNMevVs3bD5JD1uCoWEHA5PpxSycMSEeiVwvTYEwkAW4ThKFrdAMMr7HpxNXv24P2P9E1k2GEiyAmexAbc",
  "key10": "Sn5UfeaMFoWFKPou6y6f1DF31H3Nz66BMn5ipnLsT2dD2YDfh9hrEZQy99v2q581FDCtguL15ZsqRbTu9p6Dy6P",
  "key11": "4wruZy581UWRF4pXA8HRVAAQFkvga6Ycjo1Y92CT6RpauhexjJiAjJToQo52ZVBZ7RDyCm8Kv27awjazCshbbBsF",
  "key12": "51TM1mYi19nkhDAanjAZjfnRB5gpGsxhkDF8vdiGuxzfwYyCDkeAwwimpxS2XruvDueff69tQdKN5Nc8rHu4WhRT",
  "key13": "2w76doAtAUWwT9ck8Aei5SRQP6UYB7QnLg6VycFseDXR9CLwsigAQcLBbEkL9xeTbDiGmJq95Cekj3sHshkvT2Do",
  "key14": "3xrTiTJjqrYR1fpjArkB5bmYfKanRyjAVfDkJFVqp7QdoUgPV35VzdhhrcwW2WsU4RNo7xxn7ohDavu1TJXNontP",
  "key15": "3QttUwB5ErCoeUyHJzuBmVYxumx4di7KhynghvL1m4BP8ZAyy9hKjDDPvsJQ1a6GAinjyd8MnWscutdBV4kGJsFH",
  "key16": "2TJKkN5Munsy9Le8sg7JfAWo43Sk5fdxmaSyQbuuJosowUEthkAdvGAWRRBvDvctyyNWtZSRLWHNJbr4MmrEKXxf",
  "key17": "5G41i8N1yWG5kZaRQ1NLU3sW3nTC1fpV5Uw9n1JZd2yiSBnoXkdcretbnDdRb5puoBXW1HzuvuWNAmpevEj9A6c7",
  "key18": "4mDGWsuQ78kBzjULwqsfNUAFKoHUuGLpD2bfPGu5zkKhk216yHRLNEwnDEftmNWdVDqUeHnKZcPbbUHheMJC7WGq",
  "key19": "4x7UebF1amGnRVxJ6ww3sqSTVx1mzLXYwrtoYEpwobkn9hNjvcmg5KYh3jf63cDToVeFjE1bTRbGUQ3UbHAN9wj3",
  "key20": "5J6rAevbHMWdf4E9MNB1HpdfuaD7VshR3YFNbH9mCExAw4bMDCamCxgBGPLNWYWPuZDFYgngX3Ckk6jiNqfqrPC3",
  "key21": "5PXkejQivUm2FwEGBpDmS8xDUKWp2nHCWuQcxpbD3PDJRAEYw7mMctK9EhNLkMr49yZe2bM4mJZb5yRSDA4it8eU",
  "key22": "3PqH1X5stDJFYhhhCBhchvarc2hMeToTcDZ4cPDyvuuh77XipC1WsW9qLji8FDANLH1s7NuJvBQyqSQ6AiPzoY59",
  "key23": "2wwSZqMXjo16R7paAEVhMaWudzgdPqG9D5uJ4e7xQt2anfXQRPeJ5GbTPrj3PwWx9sCj3YBNGjyWM8cWF79bmmH",
  "key24": "GSqwaS1eig4vxKYEFd6vPSZRupoy3zEHVp5zCZPdVYeapmRoVyp9RJWii1S761cfFyF3JvFBsKuCFN69LzXna4J",
  "key25": "4TDj46gF3M7fdS6epuoeAHJUvuFUN8yPRcWusLRUteZTRgo4dN5tfVTfrVoHujmWGEzSRs8Z4rpfBqibKXTMBptU",
  "key26": "2Uym4SGQ7yFjenk4aMaVfVgCeiyUqMVgUxzrgdh7PyoiQkzGTP7sb9aPGiHV3m72AxgV5gLXwVHgYDLTiVRwEsiS",
  "key27": "3Y7z4JDuUetXbhmpSY6ZT2wwD6Rm6eVKVEBNHrri7siBbwzGRTta2p4dbmaMJv727BoMRWUj6gDSe8u3mPxxo4hf",
  "key28": "3Lfaa1ahbgwV1KJar3XozPkRvxqdCtJuJLy5EYDipxndQ7sej9tAtNgmJ9TBfKxJK5Spj5fcmCZHuwRF5CwnnZcs",
  "key29": "3Gpk1VqtvqBbYeVg8DxfZgEeCR7gYo1BtzUPG2gt3Jwmmv7MEeYo8QKtMPcTx1nbVBNaR31WEYjtjHJmAHm2SGEz",
  "key30": "4TyKd4ZLx7mA5Nhxd9a9kYX7aDfvyg3SK99Y1iUG2SBdraqLydm3XTedjPmPSnV4uJBwfg4WVHvBkz2qzNx3QCaM",
  "key31": "fRB3g2L5Ga7fistcT3SadXJMgWzTi2eoaCqk6HKWSiFAsRwgWrwXE3cA2Hdjhd7b38UidHhF4XLWVMfk7duDRfJ",
  "key32": "2ryh582EQihzAijtAXe2x5mgbG8RFnDdYTVCAoTwej6JBESYyEBTAEmkQ1wVoQrNmxau2pybVDWPBfHEJ5UmDicW",
  "key33": "5akorseFuXitAg8oTY1dTP6xqGt6T1by8HeBuiiGw8MYXD5x1nxLdfneWZde55MQ9wgWjjKkt61vpX2rcFfS37ko",
  "key34": "44Jgcd2Vix6BReb5A6fqjUBaCyzgaNQrTzHpwTPhZmmitg3CevAiVS3ty2xd9TqMvSuKYU25kJeRWzLGKwuCKG9x",
  "key35": "RtjcxgtRgoHwTRN4jMm9fgZqWYvstJX6DS3XgkTvz3CZeimN6Jz7nLhhPjYbNWBNNB2rJUuiXbTLAwgXgp9tB3H"
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
