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
    "4d4NJfbCAX4Nt6V5f8wB3dwKraGG3tQXTqnmXLpG4h2Kj7cZXgXq5Gog3nmtrywr1kAqkeHMBFDUmsbtwkVRYESL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBmu9DUJbeBLbXAuAyprW8r3crgivZwxVptpnJGMjoMUc3UWbCVWvJCWsvgPaeDck8oyenXa4cFCWjwZNnzzfjL",
  "key1": "4GK9FBUDFLr7oYpqE2v5wKGWANXiv8TCRX4aBSP9Q4jw2cFEps7Sx3G2dLrADwwU7XXLeSPjUhdEYWQhPpJCsq5v",
  "key2": "4As7xWP4T6DVMioVFaMiabqaZsZkAHeC2MdGUsaiXj5CCUQtDcBcCmNMTpRCkWQccnhzBxFnN92Gfj5CDvkRis85",
  "key3": "4RC1NNryQLUpYmDGEiohdwotvcYuZ8nz1iEDxpFE4WTYQavFJW9m9k5VS1cPcKjSERnWRTg1UzXrmaGdVQg6AwRX",
  "key4": "4NSih3fyBA9jZac1UdXBUH1MbbWty7aaf2wWJPyUDMmC8LSNGkxkhdChtZAGJZbMMxNCgnSqV77RUH1mN1HjojDD",
  "key5": "4R74VTyEQCW9Tf7uoMYncXQUavKwbeMHmAHcTEKekSWpDVAFzBhRBfdEZWFstUQo8VGr98fAunjevJhT1wxJwq5e",
  "key6": "5Bu2SJjhpnUgGNBeFpRtmBVPGj9RpmcxyQRURsHs7Ynw7drjdk5XkrRZL2kjwMCFpjMPzryqdCtSwRQNaMpXDDZ",
  "key7": "4o5SYhk2QBuBiDTTc9sbxbUCDC44HUibARJq32v2tLSKqqwtB89px5oBeTydm1AcRxhVGvYWa4sHi5FKNo2xRZHP",
  "key8": "3Nr8KqzRePqU9bUiSy7kCka758de4AYs5SWTkmvRFyLHrF8TSpZ95eRuGLUcKHu4V5J7R4eWmDBHbH5HD6BJwqYh",
  "key9": "1sWszsDcrBNbL8JzTfv27WdtiMfeMfBEtcbR23mEE1A9euWUEk6o9FEWpF8WLmjjRaS7U654mYEKuUadgfKHJso",
  "key10": "2LGnuQHYj9Strg7rfm72N9MveCH6Dkwb1ZBeEBhb3oF9FQrsvqnuK95z4fd1aCVRoKGsVAKmGKUaBZ8JFcP1vjZi",
  "key11": "yVAHcsns2K2XmofB4gVqbvWeaBtghMs828KgqNXz4totdqQNVwkztJQ7nAdgNtnJSU6pYJDMRPnBnRB5NihLgJu",
  "key12": "vE6eWSSAoEbpYpVGZLEUpRhAqFzBuCGGNPo9ZiDhiu1DqYbr1mLq133D7iQj2M3vTpMPtdKoCh1wch66XZwzVzc",
  "key13": "5amE4Y3fhzkZnHZHxdJCbjFBC6nEyPbcJussrbWAT35c483aonZi9f4CxSmaF1wqSHEkQeSoAiACDGAmQzj9pAim",
  "key14": "Kk5Au6Q2VdzSrwrFwSuVmgfy4vYX21MmitwwJsf5cMKx7JY4hSo9MzGX5vPbDYQF4kioGBvnxFwcbNFEnZ9rHzS",
  "key15": "2Nk6Chcu7ooSg487gechNtjfdvptWh3qnXtAq5NC6QvVM5rpRVnDUKMieqcKnMFxrJ3HuS3avR2EwSWMWySsjLNq",
  "key16": "4dY177q5sLvZFQ1i4H6Aa7BYiEtr1MTaN5DH1NBDYGJPGZaARLqzNUtwjxkAKk8WL8hYsHvw2RneWV1oMD33xpWc",
  "key17": "igHoTPFQhd2FKWjoXBUJoTZJVqRmMGVRSvryHwPXWvj3k2wUa39Qne7jaMBfMRDLddLGnHtLMViL5DfiCdz2d75",
  "key18": "2fh9taxixKeqtSCNNmGdgnogSVJHphSi9wjpMt3pRUVxkUmATKJDdVhWdPa6ftYXhUXcY7BLUSnZ4MLkfRWgKB6P",
  "key19": "F1NY3UNU1TG9A6LLgm9PZbFnYohdUpLbXN5SCqoMPj5Sr7xH99v5TKyTfM2ibzDC6RcgABLQUoKEzySYaxze8WD",
  "key20": "4v2rrgdn5kJvoNpdp9uZ1UkbKBLH8WXicCM3HgihV1FH1KadzcmyDoizHmeaYKpHnfkRm9PEgShAPLUhDE681bFC",
  "key21": "4hF6RNPcpAWpXcwWsCRf2ZddytDzNAE7Zs2eg564Nozq2MU8SvpX9vW5N7r4E8mkZdcMUx39XMB3ZBu6R9FBZzvX",
  "key22": "46ZznMvGWs668TWU4CRqaozX7o8p58yCa2eici8W8KVqw6RCQD2xJ1W4QwNXxtor8BryCAE3x3V2Cf3KAgdeK8KD",
  "key23": "HWZ7mQ831tVpysiwu3yFLpg8CJ8KcEiK8Csm4qLJB9GjXMdSce1uqbqVE7EE535vMyZeiCZEc1oNSqG6CJA5zmc",
  "key24": "35DAcTPsXeSTzM58Auy7aGgPcRo1qihp5CBATYBbS4JsAkh41WTBB4eDt3U2fJDZktc9gqyLgVJJL8JBv49STQd9",
  "key25": "5vu6rLNDE5j6oN2XZCHdf8oTEdJfuxpTP1b5NbewUSVHQAbtK2fg5qUtYsf5LQpx7H7qXsqJ4xSNLopS1epRh6zr"
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
