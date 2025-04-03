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
    "4L2cGPRtX99qkAhUBjME77ZGxZEfBxCAva7pnFXrLyLAB5S6PoiG28SFW1BPKoW8SQstAEXTdY2SctEEN5H2dvwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uiurmjFRUtqqFtGJWa6nYYhQaJuGFHMXz3VmZqRhmvg5yneJkeAHVj9jeQAKsq8biHeo9j35MzoxL1gqk1qZLpX",
  "key1": "1RVhxc641SzGiZcjtyQxCH5zgfKTxQXHWzrqcUPBEZyNyDqeaoNf4gttX4CS5tLsauRMAvaxzhb2duQkq5aDiUU",
  "key2": "5YqteeJtsrT5JqMQTX3Ud48fucVtdLbwDkzxp2vVYid6UtoeR63pPigxv7NXFSjqiBYWiL9EUGDrT2om4aVh94F5",
  "key3": "GM1Ax8jNyLx4CQdWikkjtAYDBiqh4orkuazeyw4WKZMWoQQy5zmieaSdoUyfYr56NJZkCG8Bo87z1H77rZXfhZz",
  "key4": "5AxnEwsu6vzbyJ11N6T6bDPE37D5QF6zF42AeRxYeUYyMrrVbNK1B4Y7WLPayQNLKJ56i7n1bsuQjXd4Q65Qwaia",
  "key5": "3XpKrsvc8ZWNdmAae2CsUvzKw49iPGGZNx6aH4r2XFZQXJY1JyLXVeJuX5hXb1Tyk1sgvESmV5MdUwbNtQXBxVkN",
  "key6": "BDe3xDwXa8ENgjUQb8T29oKqd3UaxFQGMm9q2cLtPqDKdo12yAv2Y25pDz3rGQMCXVBsYa4fsQNrcKW1sZBE4zR",
  "key7": "3YAUrVSyuZX7VdDhuBaCF21p5gsfrhJmGRxagvDyN5ekMPzNf4jHhrBwr2nNAK6uxhLxbhzjxud3rHBNSEKh2Au2",
  "key8": "54BzMkUM1PviRmnwLU9KcjrZd6QuztwoX4nmW2vYFyypd2Jg2yseiQLDeftSqRg1nwc4esF98KQpzCpGhjB1n39B",
  "key9": "uvXWeYLS1v7Skxsephd9gXB9rvmAZjuQogQUKxEnPgS4ba3MpEtapWua94Td6WXDkbaDwC6DQ5WPFfRTYFgZTML",
  "key10": "5mKS5AHXTvw1SPmzmw49vXpUfNxYkJWqSAsVUsLJSq6oY26JuAqcw1MGkxmKZRXWYvYbgCiFxwWZpxoHk5FtR2X1",
  "key11": "49u7bZ2JM4pF2tQVFxeMrczfsYZSUu4SaGRK5NhNqJNgkwkzEiSDxBZYHSE8i5D5e2RVwifSyhhjxFGEqqmWaiVH",
  "key12": "ZXk8qYxSbn4VdtUPV5TPk3KbJY4XXekuwunucmeHtZCkAWyXL29HFr3ij8yADe5nhiL68tNtcvLJpyuhHiALs3i",
  "key13": "NFAzQPvPj8Y2WrC1p1DeZkegL6KeuXsijbk3nvyzqo2qgo7GDzCLgNZoziWL2y7dFwzowG47yCJ2kUREzzPJydH",
  "key14": "27ij2F8tJuEWeKFiEssmnnupvY6mThFSebzNLp8v5qkdeRsnJ7fmHSNVkxEZ83XDLA2oNhSVcAM55qtLinnngAkc",
  "key15": "LoJDUU1ugxtjGRprUUupdmGZQgb3F127NH6ujrHupr9eSYkKxWVumRmPistAoJaVHXvHy5oLb73ApApHuT6uZyx",
  "key16": "5TXbzMvHaMkkbh4HA4t1zcj8GGHwtbWHd1Xd29coDgLQLQpzua82ugZE86ERb5RCHB2mdhY5oEsYYMyrYYwpnYsJ",
  "key17": "4Bdiqo5MWqizpb9voagnrMqWHjACDYYPoEf4MpmWgGPJkbHZLtURwQ2YuhgPNQNCEAQY6miZCtFqxDDzn48RnUXg",
  "key18": "5aYd8vc4Cobbmw1REfsPQNhLUVaYpbvt1HHebUjrwRYHidokorVidDnvnrSwyZxLkgnZoxXMtD9kviHehT9uTctc",
  "key19": "2iQkHMkwC4XUJtsHKNMvNUnxp7FnYvxNVLiNk8zk2nAHeSg9w2q3E2CQLHWSReXe2t2Ln8jjsHRPEt61zNySjFNY",
  "key20": "JBCStvtDs3AXiT836L9rLLAQqLr31eUoGLeVau42GHoMWss5cwocvfb4RNTmmJrvwXNFyGTxzUk1ARZ1BV6im9C",
  "key21": "37ERsrRAzSJE58LirxfwavSZdBh2yRmTHw79AYCe5kzy7ywgzo4uLgBX1fdehMFEHHS7yS4dA6eUPR4MdweT7yhu",
  "key22": "4afbyQChnYcq284nNeEb8YURcwNrMfSaNfpnkHB2hvrvF2De7Ci6fmCcEBKS2ZYBRBpreyrucCoK9mrthZGBtMVZ",
  "key23": "54DqeJJCVUVKdrp2DQnsvzExkxSGA9wcUGY6UHnZ61PBRxRT62TYtTnchUdPynbfDuvoBaUQw75szrpkgRTauPCq",
  "key24": "ZvFUWecyhPeHzrDhQxejd5HvboNpEuVDG1G4h86AFngAi5Zmh1dDS75XwBC3Sk8oJao2JyZPuF1sgTDk2vmyciM",
  "key25": "KXrRyPRnM3rHX21eBFj2a9JLjq5sD53jjvA4RSYZyeGjYhwvEtMNhzxGsqx6JLpQgYtFSgfQBXE7bG3LFJZ7tQv",
  "key26": "3Fe14homKBFAxgXhJC2wUf4TEQ5RAdAvxLXSKUm7tUrUx6DDGibkwKh5pJRyVoQgZudPB6GsskEFfQikMsLwkViB",
  "key27": "Mn67a1YAkhUVCu9rztTQ1YTJExJGybrVV4iLqos4Ez7Cff7PYMwKjACC3hooVVEoXVMpwhqX1KPJwkxwV3mdPMx",
  "key28": "hn2UWY94ezH1dBhjK6MKoHspfB4KsCK3SammepLuzmNoRE6GEYhUQWopV7y4Js8b7eENFsM15uhQQrzYC65NPBh",
  "key29": "Ez1Aek9TxChvY9qCPxgGBb8MiGcAFFEUxg3th3AggkV9J8adRPjnrEBAoMkQoq5eYkMKLVVRMYJEY8m9rrSzp3A",
  "key30": "2zFhrSG9hnCFqWezydnJiDWkNc2tNx3ifyFpmWBMgcrzyYirwzNruhw7rmrxz6ym1v4EM9r79xYxLUf2a9Gt9ekQ",
  "key31": "5kmx9Ua7VXYgTMe11GmU5hCJ4p2H5Wau15422K7n3KrL3knXUfCjw2zTVeVYnkJL7nWfxZ9ghpLky9r2sJwuYhmB",
  "key32": "5uqHrTq768Dc3X21fbJoQKy9E8nDya5WRkkqPv8RUEhZpwW7NrGh6CmwGt4S7AGYZAuRcHeqhWFt62VEqzXPFpsS",
  "key33": "61LgdkDtNGv4s2f9LzWs3dKDpZR6HEMJDMp6eGcbYPGaYgPi5E8PHU7LGBUqdTy1MzKDkbi8fbiu8y4CTQVKrthv",
  "key34": "3k7mMB5FCfyAwtFr9jqCWiBaVC9fJQgCNmHj1PzJu841cci1ikaYVo44XpvT8iJoEcYfPy2MQdAUHVTqBRYDmLm8",
  "key35": "36AdY2pTGZEVspoPRAntq5PTUGauuKkaKBUN8VUa61msBJy8EHbmJay4DryJpqGj2vCQBJsAEYYUECPJVhAGct9B",
  "key36": "2s2Y3m49AyQVhemZxU8v7MuB97JVLtqhZDSCZXX9Hsc2YfLbPuYVUNYK1LGqjx1uKCiJTZ7KWi1ZWoQcCwF7ShX",
  "key37": "4ramHjxuaeayxhrqrXKKfVvqGypymrTUrFbEPkKMLMv2dhkpTZVaFJfrs286yZF9Qn9JWvgpbZmYbzThuoHgrV5e",
  "key38": "wJtqLEujxytrHcmTBxy1TUPN4fj96RrrbJB6o9pX8RTxKttL3hZCZfwdzQyYpQ6ENGGTzf37hPPdppe3VefUKnQ",
  "key39": "2aCJcF7EBtSQ697ZrztBvFSnppvcbcLa42DQ8BExtobLQbuXoQvuBDYHYaL47XTQ9aXL5mToEogKAGA57YRqtNv2",
  "key40": "5VHW7XVRzyP24z15p6eeoBsCLWrZuzQR8Tp73RFCEzfR5zemyPDMVPoQFBLNkEBqnNEu2GLzo7Kt19huTaLkWAQx",
  "key41": "3apogxpcp679zGmhzuyyBNSFZVfpzJVb9qNtX9iSosVvDkD5gGLzS6pUAhyQfhHu5YKKW7iK74i3WYYdkhLKpsg9",
  "key42": "2BQkVvCGBH6dRMUrn5z1LpcJ1rjQ7kMNPAXV3h9ins4Dmf9YgJp6uQLBRd6cu4aLdomFsaYoHRXzPo2X2FibPo8d",
  "key43": "4FhpsAyjCMdac7H3HkNu8PRbmZypy5pZNbugv7NoXCEPNcLyBbgFSZgWPPpq7UkU9F3XXBFGR96JmGfHYvbijVr9",
  "key44": "5L4q9SoAjr4rVYdpckm7SsAvaAZz1MMDALGJxkkNx1rEYdu5G47ZEkRPjFnnVQ6S484xK8MYJ2dvKm4HTqWdBqyF",
  "key45": "3dnKuaFNBnt7PMDb6MKTWMxs42BNo9ganaaHDmCVr3fk5F6JTkptghiNZtDfbz7hPnwaCka2KFev6RTaMJAzqGYa",
  "key46": "aPmE8bijtwRr6pD38GPepACB12vvfXHA9Ymo2ZczvaDG3FFd8wu6FxSNDEDrXEvbBXiMCxmARaArvTim9VRtfVD",
  "key47": "4YLVua5f1oAGTwJvbNZj3gsWzpcTpuzi5jWMxgQRYNMaG3pY81gj8FH2CxEe67RRtmZbvSL8S8gzVezRgfN6FTWv",
  "key48": "58QsgqeHasnrnyKkS8Dq9uULuTA1xMPphWCCyQJnqe7wGgdDcG2hxGrAshpTBktJQSACQjhZuQVMi4HQoCu1vNsu",
  "key49": "mkDm6YvuBPBXoKVSW2ppNxeJUHMaeUKTG6aNJfwGSELG9TLP4ikzRmhb5j8VnMsVHgzvZkjD4zRbmxU5P7kU3nc"
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
