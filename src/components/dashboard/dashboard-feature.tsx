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
    "4PfbJg7K4B9CCvywfMK54xSoekoR8fb46WNiGHZLxrGBaDndKxrfWxL9qqUtR2y3TuuUj1DswVF9Gm6rgpLRArdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66QSepNKuxmJybXzm7QKEjJvvtb49QDXmdhHHf2CP1CHvvXYCVoETtkeWiMqBmRuR73zhs1MAYotrfMUUPr6RWpo",
  "key1": "3wxNTb3FtDYWgVaFsKr5d9gy2oKhse25UqNqx957zRPwikKaTqEkCKHhftvVKz7N3e4CJaDst3ndAeztK5qoPu6",
  "key2": "3ASiBpqM4tofbgysCpoB1cczp9avSpcVCj5YR54nu8awZViQMzhA9Len7LZfTqHo6zGHp3LTTpiECkU4NnfoxKBU",
  "key3": "2PocwS4njj5QMUsSPBJ7MmL7E7UW4S7KC7uaDKYJY7EX2rQqeiKxHJ6CMiKAtKMu6fcqPpz2TvQBZYZXe54D4CTr",
  "key4": "4uvgofvpms8J7wPeffiDX4Pj74vjB184z1TqHPSkp6kdL98Fkgu1HoCTkqhTqHSvd9GZFAo72cNtS6NojweWdQHu",
  "key5": "3BVr7Jhs5KS4FXSBjh6E6844pu8sZyBojwy66Tw56gnMKcugRw6BcRNxAn2RbKctmQ7dAbZ4BByqvs6YS2Eozi7F",
  "key6": "2neSxdZHft8cGg9wqFBrf8esieFjmcvQYoZxXcoJ6LT6jbZ5NJUfytqQ9eaM5PoX4CsjV5j2bpYyx4RNr5G1y4Py",
  "key7": "43bLYTHr7eQMtqpHMHjVedn21GqGXk1cR5SSDiRqn1kkrwXRTJhBXeuD3FFnxdUsMwTMszop64HGARznuQvEosLH",
  "key8": "2uwxCDfEEtTVLXy2pVUK4wdLmbHbo14uBKohJpTkgaZqg6UeXEkdPZu5UNkewPgoJh6JgVWCCPffD778gSWSffwA",
  "key9": "27PMdxWpFiFqUnQUaHPjE3mmS7XaoocieQ1BMsPcpJKWhkfmqjrugBK5Ls1vqQEhLnV9X6Y1pGXtaLS5wBPBD9hg",
  "key10": "4NqAgQqKoof5vDsHztZ74ZUq9QzJFg9EkrcqKCm1T7e2gz6NzPgPT2EsL5WExuwpBr2SRfY7MNDgYZoboXGjgYwc",
  "key11": "4oycxR7Rg3kTD3m5LkamgfJeNhaKD2fLq73sYxKniCdabpYFq94AcH27eZAW7tYfmCzTvuTgtTs2VeKW8VKWr5Bj",
  "key12": "2fMbrNGC42ShbFQPGpotxtM4T2rpoLs8eFvsy7EQ7NiDkEVwes4k1XAo2Krg1RGUQXqrAh2hreB9EnxBoYz4ciEJ",
  "key13": "313SL4Rkp5vBbEUepHuD7hEvYivSUHPaD1ysAfATw7xUC7jfRzUnHyxk1FL4No1AfdRqSFFVJAaSV2tBB3uPFnA6",
  "key14": "PmXwq1Ken1tSMKhg5thsmAG73oXNBYnpn8Z6QeU9EWiG3rroMJRfMPPw1AyQ744gh6cuMCmUVzRWHJ1DGfcHzMK",
  "key15": "61EBdCrr1kT9npubmJR6nzCpVGdAnjL6m66mChtszUtj9rai7rPUDcLqH49D22HELQ3CHXuiikoJCu8fMeuEYJC6",
  "key16": "3FsFFQWPxoj1UbSYq9FaBjrVrWJRBZRjharDZ4mUReXq83LooimRHESb5y6AmhpJRR6oAfqYxbmxwGapku9tniqy",
  "key17": "5hMVKnM8yUmk6pvQhk7YwnRRnTdVTcNMjBUiXwwunTB5mXauRrD7YEYdbRxdQwn6sUPG9CDYkXZtJRY6Gv46ZT8c",
  "key18": "4qWSTYH1RW7YFWVBrByhVfNvLJDWpG1H9T3WaRpo4JtoERMAifL4ZLdfAMUdK9f4DG828qQuPGWHCcmzKrb3x5SM",
  "key19": "zvdeUn8ACRfwjjVrQgioDHfyTqAeLQadHKxh5FoT5wohjTawWBqTLqkMJ222pCx57zdoAgzpkNGLTNFacEUtQY4",
  "key20": "3arVAz6kXXX37nibgXTaUqFrK8krKsv5ztwVedggYxVR1jDahVLgcegi8ghv2Wodwu5Xjr3jEP5zCSmbCkKtBfb7",
  "key21": "29uFRaav5vQ6D5pfpggrhhGPCTcs4Bx6WTeKKanzy7oPv8DHHuWhDw6zZw7wfgfLC51o6atCMede3HFqBUHMzoWd",
  "key22": "PJZmBYP2BuhvA147XsrsJvB2n7u8uMZbyZ5G2znHtpBiH6Aka4sCaEGR84k2c6M3dph77cAt3D9YdJdKduJfYez",
  "key23": "2JGoAPuJbXnZJj3rTqqLkcMHbhcfSk2JkuJqdAP7E3cuvCfhcSe7qgTaQK9zGT7iRPTAz6hNM8hqUUgMnxWq1P7w",
  "key24": "3mRRydKkfVuzZasVa7ty6YtoLopTkF9zwQEvG6tAJDAxt2NqhZKTAY9MxRWayyiNQXsEpk8fvzKykNHrqyeFpkKW",
  "key25": "5RoytoagTLdR4REP4nHEkEHUpD5QsQP2DA2LxZH1iSZUddFuuwwPWiPKASGLKL6LD5zHcX1zU5Pv7dL8Lbhj9VJc",
  "key26": "2DWUG3YEKGJgn8sCeHaHpVY7sfTfg6YRwD28gXvt1TXYCBECkKQReBCk1p6kajWkaAh4TxXun9FQkoGzsjUmNC2J",
  "key27": "4pYKmMCvamfPRAHdWC4MCdL2J8b1MLVv5ruEfxHQXTZYdCxJwPYbh7av7qEdmszbqEaxrpaFgkaa3oVCaYwtJGYz",
  "key28": "3RcazsaYu76qViWkV2kWTz79hJ69A5WCX43wF299yv1g1XMvo4n9oMjnVicEkDqtw3izgcvJP4AnwtBN1odRr1Fo",
  "key29": "66cjNj89X3xMaMfjjHQ4KS8v4DmjLWw2qCtWTi8D5CVTum5DD7BV82LX7NgF8gaMg4xphKL3KnY1e2CARM8uMz9S"
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
