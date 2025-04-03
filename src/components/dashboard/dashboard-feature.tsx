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
    "41vqAqzqUu34Hbu32P95wACbsMnMaKRhK9NHFUabpG9mkDYThgaRx6V8rbccuaiemHnLYkMVhqd7JYoRGjS1eSy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdJQD2MqDWAQkDAHZQ5mRBD3ud5yhBmRPE9KLXMi1LypD55HUGgZvDFjA4uMtb4FCKrHmnM9AssTdZNjBsEPE9J",
  "key1": "5UYWd3DGVrRcn1Hs6UxG4Y1UU3vsuhtUcUpcpHQ4e3JwSNqaaY5SntPpBtFH6VqcKc5gFfgmueANf6GsqemkAVPh",
  "key2": "5hydHHJ4g1BYATfdxJ4LE9pttm7LEC7ruYzo2NvJyfXMAgTsHHJnasr4MpiH8pKFzZ5oAAUehvpoaeLzQdRkxTXk",
  "key3": "D1HKAWF9y3f5ng2gV4iogshLwRXAzEpSD1Di2q4XVE3iQrz5dtQz3sAVQKX1YqgMNGM7EzLtBkYQiVi1uZqFRdM",
  "key4": "3DKdqwM8JDhMN3M6axB1HFRCQKj5Muj6uQEgCvhkgRN972ifNoBBEztSfTAwwVN7gvq6WKWyER6EAk8BnGuV3Lcs",
  "key5": "5yBXUWqsfSqTUkTnnnjPUe1LuZ2doMWj5z37rpKQjHP3sqXMCRwhyATZX4Nth1pMBpcYeNbedwi7cXwDwPS8X2re",
  "key6": "4efR8eYdkubpjjAh9swjf4AovwupFwcE4G1zyqQDTw5gMzkQD75QMewzbo7PKs3q1NAZNBh4KrGt9NQAwy3644Zf",
  "key7": "3znzm9ffJbhrsBAPdX8zmsNfZhGikjN3Saa8eDkLtrdeRRuRyZKADSu1BQnJiEon61eHKrmEZJ2hLm1vELrj9S5g",
  "key8": "5YFeo2pt96bGdWFDopFM8jzjjL3aM1VGfeMYcJ3akqVpA3Rv88WBer96isPiDtv34NP1fr4EA8LJxgL1N88Z7meC",
  "key9": "5wyNbM8XczYmWDs9BbvhhTNLMoLHkrcqroVYsWHTAeupRgwTRenJvxgUuJYKourvPKusQZAdrz78ernFjCPEwoUx",
  "key10": "4CYG2MLFDYZL4rKPUAoigYNu4ndk5nQXdtMCCQBGrwVZhrj9uB1zrQPV69G5VGagKB1BuPjcQAG2SBuCVufPDnyQ",
  "key11": "2Gzu61SKi6wePqkfHpZgAyy1TJPUDUnfNnKQvmcQvXrLQS8t8MadUyZBMk4UxPqXmy9kJLYQmEL8eA3dzwMzT57L",
  "key12": "4rKnZqZYT3y4qH4Mierubd2rVGqcgAuMt9VexiEr1o6dFNvRwALfJdda9zuPm49a7HoreENmh87ZqP6aZSFpAxBq",
  "key13": "3Lxiz6RRDCw3k6Lgfn4ThmCSe8uEzue5N1BvMwPSfXCJRzjqFKobBGWqAQu4uR3DjKBCnTrxU92vihNL8553K2Zq",
  "key14": "5UnDwd8JUyW7QxHcvSBea3B4nzZfPsxvQ9oZcAX4uqQ1fanyiXeJxRPhzZUfmF4afctW1tL5Kdtb4SBMDaQ4Cz2e",
  "key15": "2WdQF77jn2yshjJzrAiv5XXmUrnBegN2P9L3HjXkfqaxeDePpdMGwcRajtqUtty1NXxCo4YNc9ykt62niGjrgmjQ",
  "key16": "4ggEUTLbasCu5gTDcoVeTMTLQPwZ9vSEmbAK66zQQKBKnvfFPWABeAHyVkaa2ExKk5KSiJUemg2ZRoyGis2MBGgW",
  "key17": "4kgYXhyu2cfD3B4RSMTYRFieBi76tdNJiXni7RXMLhSgNZyc1BPZTYYkneP8tVztyCtRUnH3rMNJsfDS4LX9z1Rb",
  "key18": "2Z2MRyszyyVJLjDxDttd6Bevd11qeoCm8GvgSd2w3KQpJqHuZnBfb8sJdT1B8oWXPY8XgcYZC3wdezKn8SxrXqCW",
  "key19": "5LrGiZwg7YqfZ7ULPFZb8dzfmQ9fMwWaarEcLUTGowVYAde4tBZt8LZ3VoaRwwLoaoXmeaKM5BtCCCAfuUHX8gbk",
  "key20": "5NzWDsTKM52v2XzsLC9dyehHcQ8dMF3P1BnTX9skV3Knj6c3NEBhsv82YsErZ6egpCEWez1jd7Yvc3rhquQjY8VF",
  "key21": "4rLjjsu5LKsZAkYitDbioJHDswkiNvJQv3So2nMcwh5KAWStZuRXPSt37kPH1H6L8X92QW7951XPY9aHNaTvV2VM",
  "key22": "5pedjfVXgcWzsQkQY24Qdhc6KNaXL3vKPwiWuk51FJb4THJ5neXnHjyiSyJUcYHv7NfDZ4mXBvzfZYHj4r4cAMCc",
  "key23": "6783wbjbpWDiTPf2E9rdEjEHoduEQdDChWh358wFgwXbNdKjPeAxr76RcJCszTiz7SeVhTZu46C8mU8X6DYS7wSY",
  "key24": "33PYwozRXdgHsJzS4cSPnsCoVPZr1BmKoup8t8PKrXXqPb6pEi42PRFypaQANJeTzb9YNWXqJb4VpGnYP86U3PLf",
  "key25": "3DXtCkmJqa7ymABHBHh9iVUpxnrA1Lu7WuVNto1qkopaP25BWuL6UhLvEo3mXMoYT298vdajo42HQ4STmLtaLUWR",
  "key26": "5XU8CehffFubHvLtpP3dFMmC31MKrQzXNCMfJLRonqqMhT7rGyVCWo9Rvx3CEfVSYs6XVNAXKBy6nr3mffJJMdEo",
  "key27": "5XecStNPGHyXCMoxXyxwTg2ssC9uRqppUSdgzNsoz1oFj8NKcBZCDCjTWqDN68naL95qDREMzLKTzPR6nYRpSUbE"
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
