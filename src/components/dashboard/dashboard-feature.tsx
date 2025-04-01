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
    "61qTXMmshV1yuiMcuPoo7G6fk6tAKKBGibRQfLFWqb8SGxvQJvBUrVEeqYiPm8YdRvFLRo9BTDx4HeFhv41hViK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKZCEoN8QSmkjr9nMtJjwHfLuYXhsFgKiYvCT5ccfBded43WpARDwB7Dm5kF3pd3znt93F8xgM1uTLcF2s2cAJB",
  "key1": "4jvZEJ8cSi9YtjY3NfywECD58xF95MfodbjT7TnKJ4gtHdagch1QH2uW6B7iQEDC9hCsmT2WJHyKWTFb5K3cekFk",
  "key2": "2jSuGBH5WhYoGBRxzXNRb2DfDRZy9vJxsyMroE366r2EjUq7Ljn9N6aH8xv6oad9VDz7aZzfYPy97Q8dEj1sBd5c",
  "key3": "4QeB9UUpGC7pyExt69m16SHi9VN53QUCxgXr2mD6HQAyWauZUHFFxu6sgffk95L1fkDu42PjdPZMGheaXkzAWTQ4",
  "key4": "4uN3xH6SL6qKwGQqjn33donA7R4giz5E9tWtsaJ37W1Ct6UCQHrR79ad4PhfAvjUqP7FHWd3bqWSirT5D3W7Z5Az",
  "key5": "3D2KrZUAN6BYU5VoCVcpSyYFUrsLmCLWrAoYoqFK2DpShiSJDCtuiQrjkd3TKkgEoig8W5t3Ccvns2BpgG8xxMzv",
  "key6": "4Yia1ZFyMaSuCyg9CRjKi9Gi2qZBs4YZB77nfs7S4Zpdea6zXZ4vuNgntsTAYqvWHo5FZRr7qFTFoUrbFkphdHfB",
  "key7": "c62vzQ4xMvMAcMeqhD4vGZJwZiEgiqJzX6RCvTaUBUJhQN54uvBSJyQDmD2B4eGEqCgSJkBNQ1GqNZtPoQWn71R",
  "key8": "5M7kz3JXeGhfk1wGgMggv15XoTXzTn2DhMorWakhekBYcsPCjraRtRosFmUEtjAMDZ4qkxiR64nSNvSyEDwgco26",
  "key9": "3yMc2ag6UQKcbEyQmDma8nZeZAixw2zjHMnuw4hpPmQQgAF25MEtVddq4eg7HS998dmSBLi1dYrzvoBHYuyBKH1A",
  "key10": "2xoyzT2WRJGphx4uLPv487d6jR44K1gjaJMf5n6mGGHQTG4veFA2rV2Kwze2PjjZQD1NVYLTyCQvCWWdwrtntmtY",
  "key11": "kW6FYAszULUV87TAP4Uq1gVFFDWhpT2zEtYjU2dQUK4bmFRnUQVXdQ2ZNf1N5rdrG8PhHj2hUd4kgsfLFPF7Auu",
  "key12": "zqir4YsixT7WCD5HXkS8YuwWMh1w7iSprKtw7L5BhdPW7Qs5z8ALWHcUVn862miis6ahxYsJ1qJ9SsGy6pvgC3k",
  "key13": "5ehAERGLGXNrYuBhdFd1XivLq1XEpJjnjp72qhP7aQF248zabVn3Rg2wRJpCtPYBkteBRYQWzgqbuUA9RZCyNPmX",
  "key14": "3d877nVA8ny1a8s1XTAEavjS2zmXnXGf2fL55qwkcEGrPH6wqwsbWCpbFMJ3LteXSgxYgs37QjMqVBp4gWXpgpsP",
  "key15": "2jHErvS9UNcQ5zpCUPuynHR2nLRY8wc7G8pn117jsYubRptfKSsvdR2vicooyyuQpZLyUprfc8K2Rn3jjLUD9223",
  "key16": "3t6MBJM9KRk2eLR6quPJ3F4fzYkukMNxvPgiM3W7NYSbEGHRzpG6msVwyHTAkDSF65YwEXUpLXgmc5yC6d1sjcTj",
  "key17": "3J1rz7jHr65692TF6DzRasZ5t1JwyWXC4fKZPe3mBFhkK9zLNZ7f72gZU5gxEmscEjTtAA5RiBxe1UBB98WMWtSj",
  "key18": "UVh7mZNSeuNHX1rAZNHHZs4kfSHhck2n7J7qZVxhnR3v7NdPomR13Pq8xxkuzGnYmBPMzB5AdbexX1XTViAVCS4",
  "key19": "4tQsfUd51Ts8V4aWyGqiNM25ZR9VE2SKnTrL3o2sRdZCVvgrB6SNXbA7czRAFYjpXockakRzGxn7TuQsV6yyzwmZ",
  "key20": "4x5CaT9RyWc1BXzyQ9Pt4BZwBprU1cf2eyGW5EhDbbkfTZjQLL1NxiDSmA9AmW4hFTHu124gJe7EPsKKqAMzYcYf",
  "key21": "8x4nxQytzoYN3VCFDffdVst7RsiFJthQoLonFQenDZEKpvqC5BQacDPwewjKds87Svp6Z9zEYAYVezKTvRpGW12",
  "key22": "36GLfXE9ebyKk13m5ZCCwFW7JZZpDsjKSbTkrXqLwEdcR8PQXrNnG4HELUmyANA7tNLHoHBGzLMZtbjHS1yoSDU1",
  "key23": "NoZ9wJZ19YdChsdruSbBk7e3AdteSLot2T846z8bZnAsaVoUyX9916ytPBNWWMTUVNPcXy77nRu2kF8iGHVvYLx",
  "key24": "B3vVwtB8VCB3Rzm2zK3pq8u7HT4MkQ8FyjymqyVUPg9oSrDzeJoTU8H5heoF4b6a5gLxFXsi6LNKm15YmeCUJMp",
  "key25": "4yNFyfLdi2Vx8bxFMGa81pdQuQEZ7bijsYqXDRG5yFQtaqQFSfSQbcZTi6GCGLVbcbHFW8wtLQHF6w6TsgJzeHRD",
  "key26": "crx9YCGQMyVLzuiZEbXB69Etj7FNtQcaD7s5g5cD9MjBR7Zxe63WkLNgsCULx2YqQrDNPzoTo932MxftqXnVvzf",
  "key27": "5WsMhDWQHDC927Kev8tvgZJK5awGAx7u5S3CGet7cJS8WxYPsHRPz7pCANhE5qNoFeSfdpjAYmGpY3kRV78wWLTM",
  "key28": "5sgykat3qpEL2xGcMbDYDuR1jiaKtSnguH8YrBNS3NdxYvnZiLrYSQFpVvaUrqWWZo858JJhBqymG731m5Cx9XzJ",
  "key29": "idy1EmAsj5sD95APMQHnu7ZK2kGUmCBRYckzHrECRJ2Co2EGpt1C7FDLpvD3nBrb4UPRoPfLQbvyn6JFJDjGz8j",
  "key30": "37DEheNRujLSGkTgixfSnSSDVxi3jnC2fzwXWc2dFKyVDQVvQoCZXBjVQ6V2HGeaDDTmsV4CmNgTszvLtZwP7KU3",
  "key31": "46MM2nvYSQn1Hy7DMzZSU1ZvDmh9nuGZypGqmvKqhEUruGS5qzcN6UFP4Rgx2eJYnLyvLF41ZfhP5ZZhDCxwsM7",
  "key32": "5JmN3TLCtKJn1oM7QbrHpER8gVaZbQM2NJ4nvXfACZuc3C44PZqYkwqS4Dypf5B5hJc4pAwyW2gTcEmax3AVyapS",
  "key33": "3Au1rsY2P3aQZKacwjvRQMhTWV36f7hEKasrJqqk5dSvRNYRDTuAKtGieLrY9wVQgyF4qPcBMHdynXUWNfUEsmvV",
  "key34": "3WYbt3ezsyxE6mc7x6nd5MNDUjj352jJ6yQagkCPWEoWimy2msrTFqKvXhZje1hWvVpU1JXbiJ8kpmKEf4NtQCsA",
  "key35": "NPeU5v8fVK6ix8hpyhSqbzQaLHKtBqY7HEiMnXAEbSc1hnPHHdp1YkLDNj5uS7jhgU6VtX7B1JNKHMHiBvRYwrH",
  "key36": "4diVC8rvHt5VuVo3d9NFahnMCkmDvf3CGfZk8JTgqGbMputh31Ty7ekAR3Wq3wRdzYVWC5CtG8GeHLx2PcKcCbwQ"
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
