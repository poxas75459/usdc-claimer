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
    "8g13iTydTCTkdMgR2YSENoXw4RUHd6XaVKtTr9XsX4wvYuh1xVaQZGdKdAU4RH2jR7ckgaZD47Cxe87jpaxBq3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fgwC8XMv1fuPEm7TgJUYPFQF4A9h888mXob5MSwxjdBwAFTofujh4kUrpVCqoxPTcTESYDuPWBWsBPPPUwJ8c8P",
  "key1": "881vBkwR3Y18oTeSqfxuJMcvuzY7D3VzrAbMmhxWLvCd1sp8JCqd7rvDQ4sfoiEpWW4coiYUgtoUj9orK3CpGGd",
  "key2": "5YXWdPYudE5xRcksSWrusnDqmJhVmtTbmqNCi419WFBagR1X6GDgvGvZYVcHJzfmGULcU7AfMyx3CAyU12HUkaRG",
  "key3": "3vPuxX5urNMmbGmWnQ8CpgSm2JJB3xhj5dqLZDzEugbrD3cH5hw89Sfkhzfh9R33F7cTNvXYCJ9fUPxJ5BgH4s1B",
  "key4": "bynCc6s6tfy42kDykFwS3ajBX9zocjQDoiCVsTMqB1x9TycFWj99HVgaTQBedJ2NwUuqp96wpZj75DkoQB8rftx",
  "key5": "RJDgow3bvbDFcDiemnzivMBVzjDZRrdUr9iRdSvfgVsroQ3en81ZT82LmXSNabcyZYawh7tgGmJWFSm61PxfoVN",
  "key6": "5LGhB9V65nzfTUpLmasCUeFRdt9F7SSDnPwhYkjbPbMMcGaKRHGsGyucJEJZPVWWKngcAYrnkB9jNP5DqifRmAZ4",
  "key7": "3qp9AfZYypo9984Vxh3ifsYdzPyUj6SuyhaFj5AqdtRGyp5AnYXHtzzsxCmYmiE9Ei9LeNpVHvjUDzuuoMnQoUUc",
  "key8": "3beYJymf3veUHchMoKvJWBpaWyq6vzc3XCS4e1fjq6QutrDJTknFByiw8m2q3zgsjZFecThMHuH9n84D6twDKCQC",
  "key9": "rWtUziEaj6mfyRj21pBMEuSbcWA5M2ZQZmXiQkVTRNYBjitKyfdqJ9HmAvc46ontk6hpHfZrgSbvtMDiigXEbDx",
  "key10": "J1rVwBiujqu5u8jfB33AiQZ2x7mtknUkarkTGyMgTSZ12cdvzjzAyrTrySivoNFJP4MQk9nJGFAJkusDWhKJyFK",
  "key11": "58u8hXKy729gg3NFN3LL6p3kuv3j99o3GDoisq5GPQsazTx7LMGbsTTWqbYN6irpTS7juYh1LtaMCzLEp839UFRy",
  "key12": "zw4YqaehGFk18tjUrs1HArJVTM2LjsQQeUdarpt5cw1SjEMNyWiefMfUphRJTEpsF6fTEAVzM9NrLeE9hD2saHw",
  "key13": "29dXu2wwVnXWZYwoiLUj5BEnoqMvXnH1Di5VKDZ2PJhxvNPfgqrvRCactySiSfDokJH22ErzLDXtGWeKCTknoMPa",
  "key14": "crywxpp8XERhAKHWWwvLN2aHHUC2hxFGaHQuvVJymAnt5ihx8KdcKfgwCzX2G7Fen9m15ZAufJA6NbzRtEBbcEc",
  "key15": "4YCPTzRACsiRXQzb1mMJujg9gc7x3ooqawSQjKEKHni4fnsL9CLbgDErGzpDKPqFt89nRLeMH7acTv52vFwC6KWg",
  "key16": "4szCJCYozehTopnfEWYdWV9BnTERiEsL3gUxfnAa55t9TTvkTSB4ne6YQn3LydgvTCVzfRa6k9fD43AiVj9yL9jM",
  "key17": "CyxwTFogCdr12VCiQCX9wTxuge7uWH9EwXBCZkmRizG6184LRjThwfPFbeuuoGJdmSrLvdA1EBfu1kJrh78YfdP",
  "key18": "5CXvahGQw5K3R1psSFwjrzPLr3CuAZgFTChXmpXA14ynXeADdpRoDgGNLGWoCYzNQ1H6h5HdwgSKJoKcutScB1kH",
  "key19": "48VM6pmFF8ELY8E6UQ13dvn51Sq4nF4EWvDNiRX1c95VrnmpUkkUhfEYDYbP7jS4WHiPB2vsEnp2sBnVS3Cq4AiC",
  "key20": "3bGp8p7jENDt7AsZRnfX9AAGc1mhT7N6sQ2ip8tYVep9skbCrE9DyBzk5iyhcpuKXUZhydbchZG4Ndop6vn2FzPF",
  "key21": "3T53YdiqJhU5azeBMP3eyNqWT78aqZRibtrEbewjESchGZrPSmUuywgT7RBtMUajr5o3tnMU6359CZLLqz2fQ8Bu",
  "key22": "5irmsGBdvVrLgYkLjZi6evwgAkm15pXU1QqdoAw7sRySW3FNiqX6fho1kcLL9XRbkQdWqwezsnrh1fuziynJzDHV",
  "key23": "27cZ9qREHyZehaLhb3XXYDMV9EFz1hvR7Qnkfve2JVTUq7JHUzER6Q4wsxrWWSSdGBFtK2tt59DTsYNpFEoMi3Nt",
  "key24": "5nr69poLUudM2uVt3FBKsJ7z1BQQaAEk3JzYBNZZbhJVns6hBNoZZnGZWDNpHv2V9cRGQjPCkaFAro1YgQmrEWBq",
  "key25": "459gxk4CAJPpxRChU1hBi41qzLzshfRTwTVcGGeS5ykoCK1qz3iHHNprhDHEUmiRoEEf5gD21zH2kpaQqmTm3E6C",
  "key26": "647HHVciYgT9ttB7i8EYg6DJMqUTbGCgwnRDBZ6dgwHVSbkedKYMFWmWmqVcE8BmnHgTARc4z1Xc13KpfnxmfvZe",
  "key27": "2QdgoBhopprHpPXuXkYbJjsWwRenekoJHF5xw5yHZuQtvAyi5QvknExJ8T1XZfQKrzgYqwHysAXHen5kmr85JysE",
  "key28": "j8QTDrED3RBTmBGwQ4eMimWdQLJE9var4r2efFV43YzP4exPgS9NGfALYwUbRZPNAYFmfMgfjyuGAHBT7YrVHam",
  "key29": "3unC98T3ZBMfZrpCQtGh7yEkrFBkAJZxm8S1nDX7HrEPQHwFMTvgdetwMuajQ3bCAwmX3qTHwomutZ7sM3sQoWEW",
  "key30": "4r32LqHZmrVC3dyCJBQ3KUXfuPfijBiXRALRQRRPvsdsohJxYfudGRzPuJUp9yQT6xxr61krVWPVsk326nawmNj8",
  "key31": "3hxmTjcGyEHtjA28LryGbDWtvCK5zXRRpGoeQqrmouvcfnpYeydHJWgq7QVreVHgHxtfnsVVGJHPkzuorSrVZZmx",
  "key32": "2MZbUuEJjo1XQCG9fYz5utqCiS5Azd3F1KuSTKrsC42GFygKqXNuR7bkNkDQcuvwqVJboHC5uCNkDgzLhk8q7HLA",
  "key33": "2T6KyQkfaqksUtMYsbdSvMs7umiiGi3W5kEDWTub1fDPXf7uwcqoC66abBJe4KuzPNiaf3guqdDFefN1G8XVR3Bb",
  "key34": "471RUeWi2g6jHADYxeAfJqRhXFRqSvCcCwDRhP7Y3uFmDWLxbKRwBKXJz4jnF2wkUXAgkHU5vDjPWffieR9zyP1H",
  "key35": "2rGbuWSfasCVmVsrTyfPQ2Vdm6rPSdnCqPdTGuqSn9oTzpidXi4Lugm2Qd9DHWwkmVTigQHcTktnR5QqGSi3gxAY",
  "key36": "2G1oW7teuVGroNEr2kY6f4uh1YSWTt9xfsBCdKnWvRYpqS18HK5syFRr3uBGe1hrp3hazLgKiAL26hipjetmuVnU",
  "key37": "42ayMHMGebE36LL49mHHjqmQm3MASJSAJmb3zRwbaXLWHbK9oHNMw1uR8fxJvRYzJGa9gERFP75P3CWEfY8jzCUW",
  "key38": "2P4xGmTE2HcE6o8m2CWrCkgEHJViMkwgAXrdEeZc8o2K9taraFg6kw2oCLKD8GAVnQTdd6GuikG7wHigLfheHNA9",
  "key39": "4y2uXyQhiiDXrqKdaTS64wnafCKuiUWCtYUGGqKbAMBLDEhxV8xSXmj7bi9iTa6wWwLuyQ8LmCJFCgZcbwizN8HT",
  "key40": "9Nwc5Nnoaw6S2ZMUhkEt5836cggy2vfMeSPsgnbMCYQR6nJngyb63Kzq8GDh1u5M1ZfUjr4dBjWLgC3PyP9hMVn"
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
