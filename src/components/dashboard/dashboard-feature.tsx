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
    "61sveUdKBmKDxPuAvUN1maNTycjzzvBDAkdkcrnrm19jNVubhs6txUBQLSHvFWNcHW1SxQxZv4Anj6e2fVHnc9HE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUffGJ5dQXSTuT6F9uNTHPLgzuXwoYbErspQMpBCiCbFzLyVFwSuaMAwtWyRx6QhJxyitVBwnCLZUD7dM4p1Uwj",
  "key1": "3pk25Hh72WawLAXgV5uuQEPooh2ADcY3SzGQ15cDTyc7htQ9xAZ8hpHBaU8DktcCuFBc8rF7C7pNV1paY4QSrfAc",
  "key2": "5YAech6BBbdPTRjWiSw3zFnQ5w3xz5odqEULJaNGVHVYmwzBLYadKKgyhLyGKoYGS8E3pKaLCoyrRZj3zFtwpeJC",
  "key3": "3m58oZKZu8J84xb1QoUvnZd6ostGEdHhPD37MVy5CUtLbM2MYM8yQZCEcVZFjduJLkjTRmQYYU6My38HiPQK1hxi",
  "key4": "27vqrtd8xMNrkWEBkEwJz4iEckhkMdywfVZXpi74L9soDGWknDCPBbk1pCfoNEqr7mPXtsWW61CS5jY6JPMZqQf1",
  "key5": "4SrsmRJjrLjRVnmBkFsbPf5Hsn9KRobHp1prRwaNkRDmShFmDHTib5S6Unx2J1LDUkCzJ41xd48NVDQMbRfszbps",
  "key6": "3q8dkxkAjCcg3uLXsypFocggtRjgNTmfydALgbL47ae45NcioUkMP9ywetUYyx7hq1eH9ejgpfi2xyLG4AsZQgvk",
  "key7": "3KNFT12GyFouTzKFjbV2UjN2oWniTWRWjuAaAXG8rPQmSHivPsfhJrkM3TzMzx6e4ubbExHtgKEJk2HuutKwzqBs",
  "key8": "64Qevj67w6btbcpSCaJXChrFzFgYSM4xGF1VewvARU94244BpH98wgf29ms2FD1PSYYM4xTDPm14rrD8TETuHfK2",
  "key9": "3iPLCdoN7AvCck6z2sdKFsNqJizeaUFc4tQnByfcK6QFQAackbfEsFYZEm1jGCUS4VUYSsksm4jsgXHzMk7Aj32",
  "key10": "3ym7aazKgMKDVg8S7ngwyYGbCfYh8UpbisgYUii3etzvwx4vvJpjbX2PHjd8xjgpRMEvuhVqj4V7pgzbwcKh6Wba",
  "key11": "21xWp24DMyis4hvanWPfLyxqLmyb5WMfgznEzPWQEZBXJdkYHmDgAqg2VxopFUsVYEnKs5rvArGf9d7F1iNA5Gc3",
  "key12": "JNJCH2KFJC5zYhoiE6PpvsLQk4akbuE78XqmV8ZqEN8m1Zr7g7uA86kWrg68Xnm5MsWK9GFGhPtppucABbev4uh",
  "key13": "2vhGNmh5bYQufuu8PZH2rewrm6cvvvFPiU1bkDbcoig6YgYEyGRfr9BfcCyRTwQCgzyua7TZSvfA8atnyPy9xppr",
  "key14": "HB8mgPA7UPWomtHsqCCJRa7vXQ631k1VBXYbJmSCeoW92MhN4KuGHHbFjneBSZu9hc6Mit8gZYiWKDuRAMZBw5k",
  "key15": "5VgYPpUqjAk7JBvCW4yiTCJSiP5GHS8dvUxZg6TmtigtE2sfGpHdWmttwbmtXJ9PatmuupBEoe4RWY6EqRbE2nW9",
  "key16": "4miwv4votrUyEGxQtyyAwJa6iEs6skKm2p2quSJYQ13HrAqa5s81Yg9zmcjgQeZk2juiiJLR51AtxBFoYj5efqrh",
  "key17": "5DhnNY48dJHnWrb42cuieP12Fb2m7HYYqZdbZBf5Yyt4DzjNvurXX6dpdPNTdwJGy6esEFqYZNbnaARmzfuDQyoc",
  "key18": "4ah7V6L1BBEapG3hcRLD2awrKDnnN223XXZE1dRwJrCokoLYiNuLtCuRTXZ3HYfMssDGH4trFQca7z2zESQfWQPv",
  "key19": "4Q3LpsLR6DnsPJsXiDwKGiL6KM57niwwh9z8JLpYszHtpSWcPSCAFk4v3gCAfHwxjpaooFvuojw5gYxEpi5MeyTX",
  "key20": "5G2LAx3Yz6g4381565VSu8CYwMc9cHANmNVrUu26Pk3BopqcHZ7S93goy33kGopzMyNZKHmD27hoWoUH3SJFgG6m",
  "key21": "5ixhKwDwhYLkSqEZtpmjKu85itVYvQiq2bBqANfBn9Zg87kSXybfeqtdD14t68zKFq6U784vYR9x2gvWNZSsaGpr",
  "key22": "5dhPAURHTMWL5MPjE2S4vu6kxGaREKBUkyrf3AdwhVSisR1kDg7RWUsURkzxQotebCRMUqBursyq28ogjHzKxYXn",
  "key23": "3AUzvoKWBMn3NLFvqgKFdeVWWJ1XwF3U5sbQJJR3shYRJJJ9LeB7UKibomSNDXhMywHDrjGueVL77J2ibMrr7MdM",
  "key24": "w8dAAT2ZhH2bX5YeSZnCnapa5vn1zCyDXptN2kWW7gWjQZWNrVfvvU2Z8f3WSP9aLygseqzFGVZUXM1iYnDTPuQ",
  "key25": "3zFhS7M3nrRFbXuSgKyth1s7DPGX7hd4BRcZYvnKbjUHcGXECvnCMnnWx6QF26E4M8Hpz47BHobKScAKkhishURT",
  "key26": "4N72F1kz3uf2mzyTP3YbJJZgXECKznXVezzHpuGxRdX7cB4sqaXfKitqzuPVCNZGqgEZXY4gTA8qnpit1aUpxiMd",
  "key27": "5Vpn38nAmkgkYs8ncC5UtJCLubkaqj214CPnjZZij1Yk3eLviifjM5RYsjrf591XUfK2PccpBwH9DLGCPYjTD2Eh",
  "key28": "XVHyNdYTegienbWGLuGcT9EnvPUhKFySnp6ryvAHKPfCVCrFHh5iLxWETiUMktC4YdAhuepH3vEiHZ1ooGgmSmF",
  "key29": "QAwJJuxeiubQ3KqhXseheup31krbeEwpVQAVeWWDHAhkR6XE6RN4ZQA1TPGyGy4Wy6RddXaFLTNB9gdSvQCwsQ2",
  "key30": "5bnfug7gbGHtdUrauFw3hocL3xWV5arTvwBuCXc7X4hTB7SEB3G5JmWRZRUAn93apgb2Ed1BmvJYJY7JBw8uopdu"
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
