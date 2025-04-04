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
    "5m977m9VzJWqP1DigiVqv59uezdhaf7ZXwckZxyL5xZWmMMK1fWbUGxUe9KwDUJjAV41GPXYqwEC6mw19sfnX7Xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sv6pP2Zewjy69wH8Y4auU88BcXLkPcDbMBhcxQWbyxFyagGuvCaCkuJsHKygVPU8VaPLgkmJhpHyCMu8oTQT72U",
  "key1": "j76tBecnE3uh8snDFxX2wZNR5jMSsgZ4X9aRHdgZGQXt4YXxqBoojQf6FiDMkCSBp7KBgvsaAaAvjxKUaoxfimJ",
  "key2": "4XLfYMXBxwfVdic8dkd3DrJpz3sDHCba8HnJQFZuu2xu4FRCWdPRrFgf67yzmUSKnA9FFj1e9C865dcwrbioZ6ht",
  "key3": "5bZkz75isjVcX9x5Ag8ZU1v1UbKEbG8M7LWKe8hvgFGuw8rtbUfSVyfpvyZDLk1yfPAr9tjUXDreZhYw9szMLWxy",
  "key4": "2p46hghL4C2YSYu8Fxqzz9M1iLeTBpgbZj7Fwgh9GncezZ1mUDLe4ELempacDCPqYd1D2mNqw1AnwV1AC8fSktz3",
  "key5": "2KnhSgNbhH58KiQyJ48CruEc4QMhLqdA6C2aRcVpZ6LdSCdhoFmrrSp6Uf9LgGt8SkrHTzYYqt7GSrR6VATrh7um",
  "key6": "4fcVCa4Sa3SmdYwAbrupvRmRuY9AHv12HGPSKhaBBH1CXGkuhKQpwUqBPNNSUHRATYY5tiNyw4GJ3uWozFP3tNpQ",
  "key7": "e1gBADMRXpuryRXHw4W6pNJoYW9wqD5WbEDhT7mv3yrquRFtn7vDUchUEFY62KVmgwShNE84gQXamwWu7US6Fkh",
  "key8": "5WjoYALBd9tzE5ykRQB194HdHqnAqRvJo14HnfdiWRXqqNN2Wgv9iFRdka1JfxofHreJxsfTNnU8Ugh5VUcXu7WQ",
  "key9": "2W4BfDtRxVViwMJhHxWbWm7YeDfZAQT6QKhHPiN2Dyam85JkMcN5htwgYGbtZ96UCR8eoRpTqYnaXbMewZn2zfhf",
  "key10": "2ToaTNnfNbTbrisgdaHwgamoDvDiy6WyfHV9aDt5AFf9erMxNBTA6rmgMiWLmUL1KDMsFsX9uPXB4bPaJBy7FYtq",
  "key11": "61t9UNmFT4HPue9c7bbTDYLTcta4uYPhxQkYsvoXdAWWkdjrqtbMTo4uFHpWb2f2hYzRNH1oCYAoNV7h8M5NL2dD",
  "key12": "4vEtWnAVc324iyWdWx9AajJEcY3GjJ81ymTmQuKuAMu5VZAsAwJFCaA5AncXrwWxsUTMiBBPbzfDszMWFHxM3oJP",
  "key13": "Ko3XFYA1akKa95sxcSw8KG8WuKz4zdxDHUj8RRNUmZVFL6CQiJCr17QuZL922TPoNeRuhvmejcFrD8wSrMXbNdx",
  "key14": "4bD7PRUNi5WmEV3rDwYJsteMvuYEvVsZn3kbdZFgCwpKD86hQ1mf9ZYxK83BMbSP3XGh1VC9d6oHkRNY5Y9YhNiv",
  "key15": "5adPXcQcKsuKtYghTqAtMVwbgZdJGEVHwqv73fAXHR7wbj6xLqBAF1LbzriXP5SXf51xjBkaEnudSQMWGAGpESNT",
  "key16": "RoQMGWiacgMQmY7YiMUsDAdmenttLTp1gounYgZPLoMimmutBnC27LHczZtAkigiQDUwo6sJc8hJDPB8U5TjveW",
  "key17": "HdYVtifWFNC6k9tAMrnkY5c5Kc3foNPZvTPTGJoXoEA9kLvdFCdW3Uh5zBJxVyzStjNkpNYeFoX6Yp9WFdXPGBf",
  "key18": "s5ijH9SELPS15DDivytcgPuT1jQ9k9QeMepLFPLoS2swFtxzvEgfqFNjEN8KzuwHXssQAV2uoHX4tZpv5TWKqkz",
  "key19": "3azaTgWGAiFrw2pVadAYqJ3KyookNN5C2t7cQXPQezgzw7KiSf8zt3YZ1aJUPyFoPjzPd9vLnNLNu33zFFTmyPvK",
  "key20": "5Bi5Wh4eYJTB6KQZGZLCJC7gbrZ6dkfrX4A7jMXzQxWuC2aedDLe8M46AzgxZT3LxQo1hxZhuLTKZXJRofxv5e83",
  "key21": "3Z1y3HTkiY9WzFSpaYnArBaUPjZk8jH3qNmdiPv7ueJxoEkLiCBDVMLgwuK3ucPjMT6aotmfFV4oTwtUZVWJ2a7V",
  "key22": "3AN57fweSDoAiJYS97o4h8Yn4v5g7UDRBn2g4mPu4a333LrHGkJ6FqHNemEEP5axDFyei4Bb9LdV6ZsVo3px9poa",
  "key23": "4NJdSpyEYu9z663nZ4RD8oh2fkiNiokFAoswKw8zu2qyXBToopVjF4j6CXwSihKPvNv3wDjXfqY9iZAR6Shi6QiZ",
  "key24": "2mm6vVx8E8rf9LxPbLxjmNxWzNRVihKqMrGzCK5URNBtcdJoNVCNqZhwkQ1w6ZQXhqyvZ47aCsiYAFedhGUCLXzM",
  "key25": "3t9is9m9xCmN1YnPAz33eGZk8zhCDV1ckYaoEw7gXQGCbkSim9vHqiqpvP35kEyhZuVjo2MqwcnL66DHSYrVe3Wm",
  "key26": "58A6TWuefQtrvvGVUWSSsWDATRD7GhDhfd2g1Q7ZWzrHKnYBDNBc1vBJG4N1xmNDudBiBNgdm4QXUhnmbyK9pYG9",
  "key27": "3DyVr1LDT54ME5f7xMtfmimxQUbZgMV1Lc3WEQdnf64Y9WTpKJQVWKpYR1aWb8S6sPW3FZmKbqQdH518X1ekR33c",
  "key28": "5k5f99Kdx4NFvtBG7ua2kWLXexrMmwUarAHQhdYZZdA94ENL9ZwMkoW4CWqfE3tX6FmrD7fduWj4RsfE68DM1eni",
  "key29": "NLjiH7AYFtRBUxe5Er7tFVXiS2NJmzCWT58P2jvvMqRxA7EYtsqSCGTkxw52tCojk2uo9FRXCk3cvHQmMrsVnpE",
  "key30": "EXDmCz3rUNyBjUW5FZ3GhfUBqQYjTVRFRrDxg8oRhAidQmaXneRd1UWvtc8b9ueRygX1C2n4hnKVtQSxBq1QXx8",
  "key31": "3AQVidUQJbxxJACCydy5LKTg6J9UCSgkz6sHuS2YZ94o8rD5moXN8YZgUHgKZGJYkpPj9kLjkhidH6E1BG5q6n29",
  "key32": "5thsggLc23o15Bvgv9yKmzVJ6XkeLtMnYo8VNUmpeayPPZH4XGsQhKymQRnAS7sLAWWXGt3bmvAZxUx4PguvFNAy",
  "key33": "5DVQgLD6xaKpjejV9fHxhTkG7qyTnfXrW5eDirDit7VHzW3smLV6ufFAcFzYNPJX9xWABQ7KnnqdrH4xdouXozhY",
  "key34": "PRTBZdRpyieGkV8FWEhi5TMNEW4KvVzJ8Wfv119FKhRJ31RSAMkzh1snPvE8HLqtbG9RhVoVNpfd3ucvET42oXd",
  "key35": "WmBE1mRhBiU1CMGac9GSnEzf9V58gZsVSfggDeQMLhSqJcDfR7HiDYP9LMhZNoHd8Lt3BDG67krQt84pEB73ydM",
  "key36": "HEFbbrso9aRetv4zHjb822gWKy49BNUWBAULNiVN4Qahb1xtXMM98ghL2XjFmiigzhPJUjDH3MaHfWsuTdm9MDZ",
  "key37": "5pWVnauqU9zCx8UZqdkn9em7XBZJUweBtHyBwvCVPXnXhBqZY4TGyQQBC9GYZiDjgeq5QVWudFjRG25L9NspMXKJ"
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
