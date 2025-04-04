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
    "2fd7WuPhCyufF3YgKXURgwnDNbXc1mGtZf5ceQu6xXeL9W1ZBea75VVh1N8sjSxgJD7rtBbEEt23cEKNk52VDww8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MemNdFG6fgz2rzTzoL5ov8Skpehc2TRt9ML9NRSDSfK2MPrY3g9JvLa6wZs33f21xfQXJuxHTYsszZ78HpQtCyX",
  "key1": "29oMg7Z85oBWAMWUkEqraAxYs1cqfvMpTazavyoeir9prJxbvP2aZYboA41xEhzgpHrQUGCReuxwJQWqG1d5e5oX",
  "key2": "4EJonjbAjgFrvMvvLVfVVkr9TiGRJJcTJ7t7mfa4B5HHBfCRa42ShCYRR8c9zRkhkX3NgyG7WKhBViN3kW1S7gMa",
  "key3": "svuTFBXNHkEoWaeD39TFZhPRFs6SoPDjZsQJGnTr2rqwRtTdoUxwJyq6Dxb4HwRyLT3JUYkHeDYzG5b5gLAqdve",
  "key4": "nhhqEtx5Tios7uEATR6o41Y46j1nkyWmF4NpRoxgADi88vcJrqeDCL6HZKTX7DwaDAoFNxJDPBhQwhTXh4dnHDW",
  "key5": "roR5BA8VepYs5xkQVcdwLDktVRVVeQ4e7XmyhAH68M7BnJwDpMxP3NBoEFJ5Prxwd8jEZZ35Lu8ZU7tP1gxRNBu",
  "key6": "rUzUxGB7oZZpR3LeVCiGq8hwg36AdBWoFrcouB7V2cxhdwihQiNb1vRxEUZ9EH6KFqewc6mU1dnptRGmhyZRmVj",
  "key7": "5AaibxEnsViPC4yhzSd8ZwMpmU3te57ZKpgxLodykuSCBnhuEzfXjkRKsMhoVqD3YNjptM2eNJWR8S2bahb6J2Zs",
  "key8": "5VSzdwjfYYDcyV3aMv82VheG4W1Q4x6oWFs57cBvHjXbBeFbVft31zJYAhWi3Yfr3oP67QX9FJf2e9ZpUgsK8C5T",
  "key9": "4TPasEMbNyyVAQLX3vWC9AHv6Pcsxy2UNK2cVmgCpAw3fVZ7yjphjDhAUDUELH9gVvxV27cQoUFwJ8nVdzfSvyvs",
  "key10": "5pk2kYcZ9GHwyxHH79AnTvPea8ccxjfBUzxgYFjArN19Wd9JFeLSwssXgCMLynAVwhDpVXX9hdmL9RdxisjhKf6Z",
  "key11": "5t9y3Fu9HPyhqavsfJADczVyLHUyqzwJH19QpT5VP16a6zr6UGiehb6YJbssvtqDu1R6Vd4oLQsfY1RdNNjQbkzu",
  "key12": "2EhYwB82Ashmh8s7hUcBQsNsxQLPK9nSCj47JQzuqKCGiDWqsK2tWj8rDoBHPT9Am4MufEibRoqKHA8szckSPwF2",
  "key13": "2KhbqksDsCRSQkayHR5ZwkxmixUPDFZjcx5Y2hZmM1xvMBnCcpy3fFXy6tDQRqV2Hw6zxoBoxPdGxczxp2s5guGG",
  "key14": "2FFUCqjBUGr2wcoNppYRqxVRxHzgCBmgbFBRqjQyFMwvHDAXSoEhz2NZA7Vpyrz4nSkAU47iMXv2buj9dMEpV3f",
  "key15": "5wVdxPTqbfmYmP8jAq6HdkyV3tCrq3tp3fCrKuXQmDErA3CBSUeBPup5X3ykp7GtRCoLetLNirBT3uCFNWm572kV",
  "key16": "3iKxzSHYCCpzwJVXAc93EJAHzQNcKcVqh5ckjTXC544wZhCTUVUUhbj6ecTBcNg5HNHSLEjyQKKPBqMKXYW9p796",
  "key17": "3zXk8gpJsku9vHoya7eo1CB2Aqd698g81ZJma4yd2w8asiaFigsXxmrAS9ttckZPEAG1YyEfJWru9jzgjNzozN8J",
  "key18": "4xdNq9sXeBVwN81rtS1JcsyGtEnE8rjzo6Apj8FdPDP5CAeuuov7goJuNyJMxz1pvAj9JYqkdZKqsZgZSJvDTWD7",
  "key19": "2zYy2L9ZdiV31ZJi1QgcJz2dvWn3ujJYYroNjM2woCTyfBV65ARxBzTvE2hFENdTddQDV3W9Fjw3rSUNADsMG73V",
  "key20": "4NkdqWmqEVP8G6vFrMcSD418HEMdHKKgz74q9XefNHcf8JZW9Wpj226MzGRrbBgpk4yTPE5ocN7EXW3jzvMpMzFt",
  "key21": "2GvwZtb4ax98DYngEcEChZRWhSe1tnS5oD7hP8EvSS5dEhvx2G2XuRuMMD6z3o5LMBVMqBksmsbqEKd3gWR45M7u",
  "key22": "ZrmVhzFnisHzvZThjbMcgcqeFgcm4hTFkjYwKkbfqe8qCPvai94x5ktwBg5R8HNPZYbqE8uFsdVpzntuu5CaKC8",
  "key23": "Jy7vXoTpejpVYXFvpuW4QVTkjaX57UBC2XophzhLWdYfKDcym983BvaZGTzg3gmZfZCoHt31vKguift8AT9atHe",
  "key24": "4WSR99viWcnKuLxCHD9AfzWB3De3MmoYrfm1PW62Dbxsaaz1KpaLGmYnkuiDHeUsE8MN1cE2obMnMM7nQGr9RGhN",
  "key25": "EQqDy8xM6HQokqoc5nSfAhaC9FSP7kakQvnarXXn5iNBF4UKY6PWrCgyR7LQ1PTNTFsMHMzr7oBe7hRhdKjXHad",
  "key26": "uZU5vNBnoCtnSYSJVvrs8YVQ5S3EpBSgDiY9uQCkDUkKGHG8PJVtHjdi8QywjztjTMu5JPFyUL4UtkEdPZKXSQx",
  "key27": "27PiW7K8YDMEegPUA7NA26dVU8DDemAbAKD4Un7FGfbBpxcuVFLvGpv1cER73UKKoyNwP4ucmsVcAoMQA3QkKk4T",
  "key28": "3iYhbt1bpTvGYcGoqXTeonMpF7jeuughD4N38UpAnqkmo9LRpn9NuH8CHkftNzZc3redbcKUJ8pYpmdmBeAYWkGe",
  "key29": "4D7AZZZjoJeYqiMJqY92rhmDtf2EsgfPtM4JpznyVrfuDP1VTU1452aJoyWstJRyEVfxmMvTP8SvzZ2T1K3fTyR4",
  "key30": "62kkpes1LhUQXYBk9J9gvYyE2LmGxKyyh58dkrW32337ffXHdSqTMGNB2S4gWQRNM56q284fJxUDSYa6TFmt4Bgz",
  "key31": "TSBi5SyT2kWmmy7BTRw4yZwvkDojAaR1QDG6HaaJoTaxfPuqJSd7wMtnzTgRMjEwmUi48pZuYoCdkuykGV1sH1H",
  "key32": "38jQ4kxCEJTcEaHUG5A6yXmpqpD57fR2L3pYSqTRpG9zzBuMbZmt2sKSbDmBo4DBjAW1iNNAed1JjjN7jS8J8pFY",
  "key33": "5tvbbbnG6iBf7MsYB2p6H7edtptjZY2DX5F22dTspbert6RoTEzpepT2evx4pTp6rpUH7dE4hYnC6EyuiZxPTwBY",
  "key34": "QiTwqmouPn7wUUBu78iAyymSqeodNMXWvDSgYht4fcTPdZ6a49ae1ZJ4gyxEgvtTcWfNAaPbLutZ3aATs4Smpj8",
  "key35": "41LYMWo5RPiP2tz5gypPD8ERMGubTeezqGa2yFsRmvt46WnjKkXWF8S87sTzJPtvrX9sFDVZNUUUxLiBMxqTFbf5",
  "key36": "3RTQHr1v6XWmP3Cag1muqxcCLaSExp1uPW7QQyKz9FqNVWidWK2jvH4yisBvUMfxZeVWzvCvVCHok8DrCYVk68Nj",
  "key37": "7NY9GUd7k16hz7j27fjJ23iRM2Fqt1ARzyeLLEnRAzeEE4ytKCQeFr96Sq4VK9bxSJwBvWj7FYJmdfxMJBdLpgW",
  "key38": "3EMDdp6re2G7pww1PCpfpeJ4ch5dtCZRdqApFbL5fJxE4zK6qx79KQYKYymThWGYJ447wb689vbTmw7rXUNuRZBD",
  "key39": "QzhVv8oLiqK5CFg98PsKGMRf92dYtgqdgurz2GoQceGN69zXrZW5zvmLJ45dQcg5AqUkEwWSrSddQdn9GyXM5vg",
  "key40": "549qPcy8xE1eRCsppfC5A29hUwodDbwYBtnjHb3XdGYfJQCNbhTjr4bmgiNMYD12fpSchKbf1vKPAe5m3QvkeRWk",
  "key41": "2yzYeQiDMHfdY4FDRZYay9LcQNKving1fo4cBX3KLRtvfHdRYLTNTVZF9pbouMoSrhvYM45wXvVnXF6ZqqJASAxq",
  "key42": "1PEGYDuMugK2fyd6fqWet1Ri8xkV2gphqaMrwQeVJgYm3hwLceQYAKtPshdigvVmjFr5Hni1Tx5seecMdKk7WQ7",
  "key43": "4d9ytjQPHySB9ZjS5nB61xkvRSTWkwqjHirq2u42GZbuDUVqca4tmuw9T1fnnQrjbjTeUfmFBvJMjXb3D5UAbTpW",
  "key44": "ymaTh2e99vQChNDK3hf13MwFsNPyhWNT9n1AjLA1vhutNoTrseaYZDgnN3yrhPdpK5B55BZg87VT7DCZVx9Rmz2",
  "key45": "4fWrYm1h51Jm6dxyrjmvYRLDFgeoEAgj1D4DmKYEpAiRejKVtE5zNgBhoc5Y3aJijXG98F5NcLaczyqqcoF1KiSa",
  "key46": "62RrGV22ZTdDtrfSwTeBQDiz5o5wNF4kPW5GM5obVaerMfsfAd7UKpKnFwktRhWRkn9vLe6DcBCBpy6V8RsYSEBH",
  "key47": "2ENUqhPwCWYj588gQUzbLcrKPLuAWYS3hD2T97q8WSkLv3juLNmG2PcRSFqBGA7TTH1XqUdhKfk5i62okkbqcH5K",
  "key48": "Jc7Y9JPgiToBVYjdpQHw9Cs8uoLUetBokGzTkSDETRX5QYk2rRtiyYRLZvqDCEAQN6kRUQBKi5eQdFTha7ZYJUR"
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
