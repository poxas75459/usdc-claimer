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
    "3FDmkXwdV99hfVemtyuErQo3DFimrcxaxSRxquMpRvey11K9QBKet8Gfe74mFphATzEDEsxkC4SzRbmXaMNAfo3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t4FWJCKx4nDYN7MEpxAdijXe8Te38AgFEps5MmGaaG3zVYrSczAcVgSVv93ySgjaRmUgmwFdLMFXmqFboBdhSeq",
  "key1": "5Dv9xaQtEnmL6KJatcHTsYP9ngVo2RB7EQdfhaqhMfw8t2x9mGxVvH5NNshqEGbz9rUQmxyzqJBsZ31RRf42nNoF",
  "key2": "DBdj7KKfjkfSUsGpUVdq4aamyKwpqQoVvf5CeRDaUBejqJ4CCFgwruB9Srgr8DQ1vWv5F4mzBeQhrQ25kZBbrn4",
  "key3": "4FBGVzR3u1hzBiERjXJ1sJLad6bmwvVq4tDTDtKoJA4DhgsqgQz1zGAkaM1yYVSJbEwqyL7XyxwLAprBdZDe1Scy",
  "key4": "zf4ZZfZq5f74TsVP2TY1GawzznuJVM6HJDszCE2v2AYTPepKwEkLTvLqsbkz37ibvSgeLuE1ezGGDzwB8dZmKGN",
  "key5": "482oTkbW6mrGVHkSMphNQL7CeUVyH8GPX5PJoWiwAxCu3Sor5pyss4AS8bs3SEy4WQfgeEmUGYVXB4epcH3mGCmA",
  "key6": "KiHbr4t3PJgEMUW6eL1TZGfwEDofJt6y7owVx2UwNDsLXn12SWFVwQqzwFUio1wFcD3cLXRb4uVau8svfDQAwnq",
  "key7": "8J2yVJWDDwbdSWaCwxi1kLC9CwzaXU1dEZF47PeKFQqv3DwxKrcEX1bsdBKYaE68XvSrM5WiMjTmDKWTdtzCtkA",
  "key8": "3egiYMKzP6oyTmN7muhAjQbgAoLKpgMYu9HqA15BkeLdSYFq62RuHGCyr5BGAGYu6yWREPt3Q81TfXJSUshL2nua",
  "key9": "2rNQdRo45HyRUXznRnJTQp5Hh95YterLwu4ThSF8sGKB4tLVR5pFME96H2kSJrdq8bcN5H9WuNFYWaPZodNncPoC",
  "key10": "4r84ske1bnnCtRfcbMYZbTmSEkK8m4GDw2p8oLLdQoWwSSAqfSxAEQK9ppCcptnhGCdFTzywZsGdmW38jT3sDXJh",
  "key11": "4jzVry4zYEA59xs1P2qdryq6gndMWvcT9eadmQEe9v93Xhi7ZpePfogARpizvjq3uoDoChCu9kAVZrXMSg6wJ3HQ",
  "key12": "3SmtnyZHUHh5H6ag1uPG4vpbTsFQ2fo4i1bZXY1uVeQdagH5bjPsBCCRDkLAXJSeKTqeDo99xHBeGFgyV5wwrRnH",
  "key13": "2dfrN9DCL6QchCHdyJPqKZYUS61cz3erD87f1Y4HXptazvx4tCxyiQJbKeJ5ZMffQ4hYmDsR8Yu22xwmvEFuUZFm",
  "key14": "5dgjt5GqS41RNndJed9aQK2eBXCbzt1wRLJ5LXy53fokHRCj5SiBZfv3U2Qb1RxFSqitD7M5sKEXSJAGCmBcjess",
  "key15": "5sCzNjesETxYfWepdD3wpubEY8QEQ8vQvYqf5ASkzoWQgp3iAhQ6dqQdqbNFMe4Xwb7zeHq1UJ9X68WNsUirji9f",
  "key16": "544NFMNzfXEaBE2kJxaKskZqXhTq2eaRLJPpJZYRe87zB6tHQwZNmjh5mhNgU4ABsUardqRmGQoaAKxUEPfobGdj",
  "key17": "mP4PKAgZfgH1zqyo4ac2yC4tcjw9AVzWGj6fAqWEGgcgtw59nt6u5Kz8TbgqQjHPKZZ2cFYUn1iLKFdAry9Ly4S",
  "key18": "3CLtoMTfHvVuy5LKZ8Fj1F1QqozJ1LpT1sJjTuxJmaehoQAaYa7Uneqs4UrddJbxpxtSKDHZnH8AabaqBbujMiEj",
  "key19": "4GpRTmk8SCugp493iM8d8VSrQnJALKhqZJCkPB4KbPzzGvq7gPxv3JWf98fxQ289Bd4Q2S8VwETSjc8uCS7Pm5rs",
  "key20": "5kubPZdzeJyVhVFHLfymq2vAyRTfxoRHjtDEtTiBBbiQYHvyCHULo788ygtRpJCc2KVtX2HJW9zgQCMq2qoLhchp",
  "key21": "5cjVC6iTAWxEWgsLQKSDZuSxUfG6LKd5Go9GT9GrjUxDyKum1S8w4VGNHtwtkWNckFhguBZeR58mBDWvjye6sB3v",
  "key22": "3B31oJDA5xLqsDVEteR4YbLTRGqKqA2hw6vBjRGJiVCfn7822DViTqtEQEqnXW8tQ2eWGvSS84JEABg1UkJi5b2D",
  "key23": "3WTqp9JzHRp5DcXvi499DhaWbr1HkJokB6N7kaMFZoBZ1ujVMLU4wkdy6KSiNGCJB9dRuqUB1o4oBjFwvQHLMZ4H",
  "key24": "4sxFsL5fkZgZara1aXS2KD95PhCgAY8SYARbwCGZ7q76SfP44PhJ4wdecRraQ8MKAFAfWwbey7vXhkvvPkzimDoB",
  "key25": "4fHR2LgoZ7PzVC8oQfDjLdjPekj1Nnd4tF9VoDEMFX8hontU3u8Qc7pCTgTstnje8fisJxTqyY9uk3CtA5vSqaNT",
  "key26": "3MqBPoHpWEi6qhhD7ZCXyLAhqsdU65bN8qScVe7cxZKtwoYNcsMFHFXZP6yDWrZdgLu8mPr8zWidGHyD89RYVMfe",
  "key27": "3bWACe1juavv9F95dtfm3ehQcgJiVgVQVngchehFRweYCZm4KALJkyzPjbWor2nG65PZzgdyZyfjpp6PWfha7YZc",
  "key28": "3bjKbjDpiuWtsShes5naDDyZHCdyaAAm1a58MYjp8PHZK44ukbWwY88ymNm857ouq2FBzAvVFttEpfMBT1TJCE1v",
  "key29": "4uV8efXafm5K3mP251X7Wu6i93pFZHcRDuE2JYpGUSRQZb8PohrX9KXEN4tSFNVCseTDJ7eiYbWrSH1sFo6BqBm6",
  "key30": "3HQTysVMEXAQw7SzYjucSkJg9x81tKfkEkPa8EixAmRE6ffq2uAdN9Veq9jGDYxALtLWMctJ9oKAz8kQvCyX6mAi",
  "key31": "2LWai1yS1bpmAwJhLBkuJpoSuqCzFU76iKZtvWjhEQDuVok8p4eeAuzcYQ4ZiTH1tqZasrBJNjmHXkNtSpDYgMY3",
  "key32": "7BFm6x9iw6dpFmosMa9Q1m25re6LxWrWagNQDNUBUnzsJfyETJ9VkbMGq7ocQvcpELsDyAnt4NKzrvPx48YvS9o",
  "key33": "4eG12VCa5ZUTCdZFChQTZYk3DgoK4JCPJ3eR8Ujz2KeRCkXyHZZzMkDNDqBCQXD1cvcgeUcyxx3diBEY3aws3VJ5"
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
