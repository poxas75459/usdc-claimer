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
    "3ZkDhJEKYJxNyCvnkiFYFADJosLFBYVJKEs9JD4hjGFDJf2htMGZ8EhVDfyNzThHXqGZkAbakS3chBLmrAtraCRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479QBTQ8uzM6n9cGwcJKKF8DZo5j1Gu9w3Rvyh7sEHwoTK7ZjwvGt3dCQGBCmgaUU5Ne8GY3Pmt7ErJcfjjedXdB",
  "key1": "5A7Z24fzjdAwAosZf6if1bLu7QGiZyfo79uy2U2bvRkRBqA9RK2sZRGMY8QTzQtcKnj3Q8q62wj42SVxqw6s5xzr",
  "key2": "2G9gdbV6ZyVREiQ8Hxjv9ZiJUT6JVk9uh4ReqBTTi1kjDie1QYKSyKr7uc5uQNgFRW4fJRkqzNhdpyE3aM4MwNny",
  "key3": "66KquqihFXYzptBygax7LkQBnGnx7UYdbK6ezE9bRckh78NS956vqv5imFZzEcxju8LNQewN2VZhj1P8iAbbUEiN",
  "key4": "5pA3vg7i95U1tT98BcUkxdPuEA3eGgYxB2PjwNgP9rVZutBVMbupYQJu3QYRP3Kcch2VN6f4q9AjbRBvvkdiD2Ea",
  "key5": "5pGeazRmKKSribn3cdTb7NwdU1X7eAqNDdj9i4jchb7vottozEGPGsmPPcor1tsWU8KajojeQNgqVdjoR1sMML9s",
  "key6": "5QBo6geKXAJ3Dcnm61QNv48p4AnTW2GvQxZ4tsbeVMEWG1YUz9omPS7sJJBZXzcwRamWZX7mtzNSiZgpBdX9dxJ5",
  "key7": "21rYUvQdPyYDjgWQfgjCZwe5SmD9iPeLQRUUCpczrjEFUNKNthpdcn8zvXJcrK7f3NuwF8SM92PqGA5ERb6KkMKo",
  "key8": "31g61CrwdpNyWJfPdoygnukJmpYV9oMrxZwxZFPpysHEcqEQiXbxreuPVXkUBakYRxRxaAqFXjS7p5W5smzJymuN",
  "key9": "5UTcapqSxommLDFeMfxqGYPqhiuNhjEPMrwP9NiVKKRmVw3yCVmBNuP7p3Q3HTkcNcGruS1a9uVDwYUwq89B9B1h",
  "key10": "4Hw3JiB68AX2nnMFJjeH7mCTLbEwq4W6DiF85dU7nXKAeSPfM7zUNJPnAgusTivhucu4C7bMbF4or7Xu7VynU6Wi",
  "key11": "217rn1kgfdG8ghiqa7KLEf27pfLDiFSzcxNZLTUTSPn6PT288TzAfgrtPWiXruGmtu1ECwtLpfuC6cLsxNtdsdQu",
  "key12": "4ELqFWWpa3Z8dKNkSZkUcq8zQqqQQcFCELP7JeEZUj7fxCCmcbiz76qsPDduwkkr2eeLSarEFPnWEEBz5QMwsych",
  "key13": "TYA14ytFVW7fsYDBuTBUdS8D9zYo7TD5YphdD8fmxAa1F52VMtnByfrtWJP9A8dfz4pKFnFLkD6kMKG6CwzPqNK",
  "key14": "4nFA9PCgkB68RZDSrjBSsnhADD8iWg7sHHPSEUoLhnkPZcpFP7g1DfXiKCQFxDWRDzxZiKdn3SNjgjdvuX37ysEJ",
  "key15": "3jMDqKP8GXw5t3gDHFKLBfHLWhDF5XG9ms1Mi7Szp3QvbBrD4NKkBLmAkRjVCNHrV9SxqkwXvKmYPpaJoAECcNN1",
  "key16": "Fjr24EcHQGhiNn9ppvnoBPWmjYeL66o6iugoZ3JqK4wuVZufUBRckXURBmWhEzs2GmjFAahyMFAYSgFrE5eQYPb",
  "key17": "3eoNapYH7BNiQydZ6iBtuCpK2i2Siz3DUxt4eG2UxoE6Ww2suvAxuqdgNv77pfyGY5xsiEBUruCDUfFroFeqCD1T",
  "key18": "4UxCmxFL8Y9mdQN3KZxGSY5yDZ2teFuWRR9p7cKpCKaEfNMPcWcWM8nQxpVDH61yUZs3Wm1GidHSPGEb3uR9K1V9",
  "key19": "43fmNKyAFt7F7LtHUJ8mWoGH3CgaPJz84JvYn7JJW4bnosMfhd3GShNnb2Rgtzci2bGUhHUXbAbASqjqDQw2SFR9",
  "key20": "XiS5G28gCZVkYs33cGKkXHoZ45qNgmaDgTQnhUu3KL9GYmLK67k4gCDwYMHpFD6snxaevRFmcwfRCBgNw88M8e4",
  "key21": "3XpP2fY491aBWgdsvJWHeuWKbE4DP4GRQQgxuwVt8q1y3vtVZzhQau9k9swd6VMWFU3MdHADtwUhNG7DGZHiKBfc",
  "key22": "3JBCM4zPnbvRactcHjtdyrPiZqN4kFtsKjbY1RNtQkZEpgNBsxXKCoxxBrfvur22rQHjm7yhqDhNtqt2STgbNvJ5",
  "key23": "2skzDUjkvxAdDa72Juw8fWM4z3MevG3aL9FNxWvnYt3mFEiCmFahkSndz1Dt8B7eqAbBFrLCeSmuXPj283Uoun1t",
  "key24": "3VBfnispAWzqNAiknkNBAgN7YDotujDwHGQPdNjzF6ouWUmbjDnmAmJNtEsRJy1LfTY5r2johpchFKR1XznXwL47",
  "key25": "5QpiSNcBjP7wbENjeBXZwCTL6XU8itYFfBEQMfTTQcFWjLscDPtZMH1pkEnSX74GGyNK3K6JG5TBuFgg7J1HEb2C",
  "key26": "5KZCJVXtZTryYAZrsKFo6DRfFVSQdLi4HWDqjrBCMHfzdEa3DC7WdQ3iUFDBd9ZiPZinHtCQeRUA7Ho8AXGfMJs7",
  "key27": "Q536SsmnSeZ3J3ne8ArTipaU1nQBppzsX1bAbKH4JbZsnDgZoZhnmqRZpi65wdKe43hoSgMkfFYfsSWNxmcdcwx",
  "key28": "5S9HRgwASpybREL6wFFRW37y6uy4nQvuU4YU7Q86HhUHeeEUNnKJSiVdxwV9TgZWTFn7iCw51GeVEApsUxsKAE7n",
  "key29": "5snrdUP4zasYdUyDcQoJPqS6vHNY2FCeMsSNKUFt6rSuZ2BPmMd2fqLo9sZ93Dh3pZevTKwNFCK3yY5MrqQLDkGg",
  "key30": "DUDUeky1q6rAxfmqYVn3rHP7uLqSSTFTCuVNL4CzEz8ygByU2d1LYsMBVgLdWECyVwnjSDjicauM58RoqkNR9q5",
  "key31": "49zfreveCeNfgBoxK1o1sFT4unFpmh2BuLvMtaCYdq9ThbXbxKZSLgpuFiDBFLCbaYc5HMrcn4NFTYJnAQCuAQ8W",
  "key32": "3r3tB2WuXNGUgoacLZ3BszeahPxDtzzACMQJEo9ShRB8qKS8NFnWc6Heh1kVnGBDTH61dxnBzGhAtM5mQwnFfDgw",
  "key33": "4GkrY39y1ais2huLUtmgKa4Hjhs8p9kN8iTY3WBW1RjprUEvrsXpa3LTsgCKUzGneg6NritecNiJvNtSyXDoQM3J",
  "key34": "4ZQpW1NzjuEcNyLGgViFdqvY9gLkFG45g3wmyhEnPbCxUm4B4m5t9jHXDWzbGND8znAd8vrQXY5DtHB73SpKfDP",
  "key35": "8syfGLhh7HAUEvGV5Hc1vCKBX6LLdAEp3rRRAAE88ENi9YCV9J5o81zzhkKVDene74mVLJDy3Fj7ut8nRNbgNT5",
  "key36": "5H8TkApUfR1ALokJG5qtuLWjiRYwyATQtqgEsytsQFs9QHohwq6QxDakJ6mWRzJ2rKD6TvKN8zeD7CBud1XUj9cU",
  "key37": "333ct2AMJbnk4NVWNBU8R9eHaEmaTYHBR5w3cLCPrNQRBStFyppeqQhWk3VSqDPinPyctdSzZVdiaBLiWiAJT761",
  "key38": "2njexrPdcGUBt3e1f1rKcg572aeJoKpFujabHYtaPR5VTwE3MbseYXTJjRgfgRVD3DARXh5ZCXDYaF1rqnYUoTY6",
  "key39": "wHBKhPWwR2WDBuBQYhUVsEBNqKHs5FRkPmWUC2p8xsB1BzGgdVovXWnKnTTWhUgf8Ze6L9g9Ksw51HQhKQiDk38",
  "key40": "4V3zkb8dozfKhJ3Xf5WmncSzuWN73tFaWwZAzE9xUC3SwEdirkHDSqG8ARzE9TV1K26jMAuq2BsYXKiU8YVhmUYN",
  "key41": "4MrzxUdAeQCYpEVL15djpWtNCRt6MVjoedUPVZB5zXJzH37poJWK4BB4vVT4EKN5JNnH54S2JxGUVykjit9Zma21",
  "key42": "4nkWUCh9GnwvkFWyanXdXjqLPTXFAZTpsED23ydAdjw8CDYjvotgUjxuNNJ5abNc32pjKPez57higB3DMa7vmT9C",
  "key43": "3SmWPBpMpexRpDVgcVU1T5xQYbBfGrvi1tRRS34ghHhDN4TR7rCCbrMNpxS3n69prHdwiigXjVdZrzQVseoN7iZ1",
  "key44": "5xjt2tLn4rcXHGoCmvgdHcSVzB3UZkixzuzD3t7enAhRX3QwVTWKco6WoN6XeVJFf6r4xbprz4JvJ6bPpQNMJwyx",
  "key45": "4bM3SaakUHXReSJ52t3Z3sqwSwHTdjWiPM5iPUvHHATwY8tsnAF3cTRdB6uGUjVmRj8d4xomXHDsc236kkHHxiN6",
  "key46": "veZjF739z3B5mwnnHsjFNsKTnTDzG67ytkmPvNuvDGjcUmBegvRhjQqsi69xvHaVa7EBbdRqop4jiDBba5NsyiT",
  "key47": "55Kkb1hS1w9ZDV6SRRZrJLSrTEaBT5F9LsfuvNFDZUaKy8AzC5k9SrvEeLGqwjLuQa5LGvdRHi1vJ9qJCC4c6vAG"
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
