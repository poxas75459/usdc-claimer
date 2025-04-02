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
    "M7urnuZ9fA46jeSC5wqgTKmiDXrmtD42y3naqq9HScJqT5V2bnWUswbkcBZEVvbWWwZ5Mj5iJmQaoyQUGRLseg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23HsMWaRwubaTLQd5XkR89qrRyrpHvs1pAUjfFkGfwqpCR9Z9ExWxgcdujTGzk1JHaBpsyPAwNLAC15X8qpMf7zw",
  "key1": "MRmr6m9hjXP1JS7MZvGDxydGmV1yCQrHHo444wHKjuhXDfUCBnpVmDxitTCY1WvQTvNg2vMVvGaAudaM7YFtUJh",
  "key2": "1oWXRdoDxVKrkLk8kaii3D2y7B6ADLbR5oMRmsw5q4yWejnJtYovcjAA1T51mpa6wENFFcQRwYK8Qh9h1TfDSz7",
  "key3": "3KMzyHfcqXc3yyrsZQiWHL6TzCs77wspPdFEuC4CMFZy59oaErCSY97qy4HuwWFhLDgXRqULDELHh5cs7MU6VfRR",
  "key4": "5cMZ4EwNk8JDYy5ep56vaCd7RsvrTYuzQZnTZDGHyQA64NquRXiz5K9ijPyhzcJGZcvsUUMDT7GvRWQD1rx8jN2b",
  "key5": "2dACaZcABFuyX9YSwhwzR6wy3fst4mcdaHShMRBjftsM7ZHNK54GQYmpt5M6G8moWRQ9hjwm9BdjGYwcnFxbXNFq",
  "key6": "VfxNGmsfztCHQHhaPt2RU5KkC5issMPQ43JSW2duATBWcWC5FUV3hcWgcg8qU7xwPK4pAcvS953pjMU1wjYCX2s",
  "key7": "9bGJuCEiSeePn2h5Tw2d64gQeu12MnX8Acuq6uDLESLb43qvcziHpgGqqE5bq4oFGe3pVyXvrCEMz6i6rPbqfM2",
  "key8": "4H37uV62LtkSmy1oUyasPEz1aYGtY8EsGQpBkAKSSzgCE4QXt6hTyT8qQPLoJd28UjWnVj46LxspYvVJipe2uk3m",
  "key9": "4JfPNHL31kTYHPWunQJkpFeyxJcVXzwJekBz38yfsc4fsWPxUFvH8H1h1E3QrN7bsCDpfcD1ftqgFJaiYSz2F2QP",
  "key10": "4NVEmyHXftKRYbr6weThc5Phf2yMAGynN91WMEHLDpU2V6XwNwRiwsX7HRaCkLFSPJ87MZAj4hWtqJQTa5cjFGow",
  "key11": "21nkjpCoS3VoqtZ1ce7D1yYj1S7knzcotKGJ6dbigKVXquKfhacUh6PtWpJD6zfuKZDbADsDdsifWzdtALd2Bnwk",
  "key12": "XW6NGEwyAxS4iAA9hDJhWVSJJp4h4Cy1WFJ96LE4k9ggteEGTgApnJRD4uYGR55YN1VrmZpcDu8sX5qs29eiCR7",
  "key13": "4vw3hmbep8mbwXRvV8uDjTtX2djKMyoyYPJhejasEpro7H23Xi5Nys7bLLRdRRg1CWGo3LvVGtamv9ufq8qypDxf",
  "key14": "5ArgjUnyxK4kvZ8My9qrBqZsjPUJ1qpk3XAwwxzQpBUxVz4rGg57Qnyw4TK6MG732rmwq6QtGVT5FR7tZGCJPhzx",
  "key15": "xFtdYxKZSAvuomUV7k16i6QQSLNvHUVttQDHk3ZV37QifA4nzvjhSP2Lk76AdjoLzWrofqmeJX1eSfZRve1w2Xb",
  "key16": "389n3mi7mDNzDC6LJJugDYqk5Jxro5qLjVb2qQ5fCDQZHpddirpiiA8BsFsJCaipc1Q6ueWCPYQE2tQ15RcbDjUc",
  "key17": "2gCxkzAbJ3UnpULeujmL1Y2oSHeHwLDLZfmYVs7jr2VxSs4gdMZEcfJuhEncby2kvBEzJ7SzSkuwbMPUtS6DXREU",
  "key18": "5DZ1VcCw9ck6rpAeiB5pZ75uugjGTzujzXQ3RK4DdfUWkC51Pwdzainv8enEHZ7NQY5SPhvUDBKsXWbeGwRixP1J",
  "key19": "6EFbNs2tEzooQ2KXUVKTVRoQuQeLUggJn2bgmzyBeV4kPechdg4dwvaukxMX4Lm6dhZbpQAfnZKiQstu7qQiVYS",
  "key20": "HJyTT4kcmQudT3xyZMYxzV6iDLuWLGUDcLXwjRh8tCASNyfdNY2P1LY34uQ6MpoSYj2sLQUbzs1aNQCaZT9gTUt",
  "key21": "3EeZkxJWGCKMqXMKRwq5BfnHmqwjmkzoDckwsRMGwLMwNzop6YpY4VWFXHftSnSCWktB2QskNZPYp7Nv5K1CFn8Z",
  "key22": "4ebAwnCJwphRyo8vk85M1uPNnG1iLCQxfAe2Sn9fwztLc5MF2Sq7Djv82BmXBxtDHMsCzTyJg7Pc7kyU4m17ZgmU",
  "key23": "4npgS4HfiULfNg1GN2k55Thxj51cQn7rxsctcTyyn5JRhCmRfSCdpgWUAPgdz8Lc3UZoD7HBgp6X6AEakdVC7Fyd",
  "key24": "39oQBrzAHjzPz77J75rjsJi5H45BYwhgQqRBYJk5QK9u8sv1ekk8WAKoQYNs5qoTbM6zeeVpcCodRa2aKEjWaNQY",
  "key25": "XUsZd86w8vkUD3E4CSsmznS6mScDXPaAa1A9XiP2Rd6yWHbMpogUt5W1aXPe1iGTrFPwTPxZWUHgrCxWkNz1D4G"
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
