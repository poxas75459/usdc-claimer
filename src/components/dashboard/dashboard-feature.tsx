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
    "4Mb2dKPJsiuUDqrM7XojxvyfZVUiXZjq3y7EfHSwgwxCuitmVRjiCzeLpxWGKme4wcKwUmhRn277zRvJMgfZQv9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHJZuFSTccGv5XWQFFwZfjwqyUacrtagLC7H8HMGyrsFrNEUHs7YD9QLyiY34j34KqQM8uShHi7rc49mx7staEo",
  "key1": "3G1AebXJtMZJhC6hcUU8vs1YtfGUygwgwDRF1vFfJYxMrJi78VsP3TewHHBCJFQMTYvAMrSKCeUBrZr8tWKxmVH6",
  "key2": "h8xyJ7kakmzFTL5U1dEwxc3KRJRvEYCMDtjGbKbj4KEc3Xac9cbK393kN2xQ6VR6pXCznuyc2FmpweZxMCR9YN5",
  "key3": "RLjCvX9n6ygtaRDoEK5rRc8DyWwWzAin9N41m5T81eNBsgtRJUtskhZQf9MtyPTsySjKN5YKPJLKQVYcUcfde8u",
  "key4": "eK76B9Dc93P87MUcydEp6xFr63xAYSwxLMWdudg6S5ZGM2fxBZLaVsHEAjN9dJ6vmnXyDdfmkyUUydC2DTNMNDd",
  "key5": "gYD9SphovfDjCk6mxBX2iBRPVSZZHouhVv4iNdGfnFLv1vAcXWDE4LB3QMbvqBC1bjxbhSpx23rANjsYNHd7sG3",
  "key6": "2BZ3A7U7RpgTe7hAYLMahCmsiVSc6a8WVJkiG8wFCT5MvzC3MAoL6G7gtF5kkt621BPdJiWC2Tvc7ZhT8ZbsMbUK",
  "key7": "5uhnq1tgUi26Z9fkwZigRN8sGVEkiFF9FGPpekJdFPLew8TST1NTaEZeYZ7WHR6bKofZ1xwWH2niERciKXt7K4MS",
  "key8": "4jTNiZffuqpvnZXQoApBUARudgbxYpxxeyPPDxKR9a1KQ4NnEzZZ7vMEH8zLVr1hpCuRBfxdTvUdbieX9K8tRG3U",
  "key9": "YdGVg69y72U2fwKJs6ffWB2qFFMgqwzoCZj52Gm9giaqdJHbHEZriN4RoYNzwg8bFvZkQLq6dp2vGyVe6GSyWhw",
  "key10": "3pHb9KwpQj3N2bnLFRxY6WNSEGLB1Jd2P7CjXL5iFejHFyixZrnEeaTW1TRwe9jL8NrSrc783ATuNYodbhRTwX2f",
  "key11": "o2b5bRLJCuX59CVAxxeqFRNKpSZYvs1Yqt9vAZBoWrbDVAhhbiKA5RoJLXmDzSkurDPpWwrqmCnNYrbpPbECqHq",
  "key12": "66UxEcVpw959riXUNsVV3eiTXS3jauWJmy7ZeGHQ4Jcgpm1q3yZrko6TMxQxjCpawAUuCEiPpm6ffgbmh3EB9bHf",
  "key13": "2P1heXusXTyKUUSfwczXZELPzhmwKdre6XZgRSPHUCiYCEcTuKMTVqiWkJRGweh2kHJgGH4UPnxNJE2p4MVhVs4u",
  "key14": "61frG27y9rKx3Mf7RfjS7uftetzR666RrLNA8zaFCLRaYSVFH9NZyHpnswso8NFDHecq9bYC7d17VzoqpwBzUJDf",
  "key15": "Wz6RRpbpZDE85GpG89tEuCc6fVbj9JeQ2yfQqoscF9Mr9Dn6Nmwz4bAWgbf219pLwvd6xs11WyPyHVfBiwn6RpV",
  "key16": "4pRHUKEYdBXxKEuxy4x41zPf75jocmEkgukCRNoQCfxKSUN1ggXigbg1bXNd2rac8Z62QoHwGvp9odtLWDorpB7",
  "key17": "5Soy4QUFDPWaVDjqQN9hD4GBRV4vuxMLgKLTNDUQqmKxGqvPSKJcNYs7JY4mYgHUqN4ztUhDY2Ly7u1F7cj7tomT",
  "key18": "2a2Rvfvmd8fMqbEBBVNLJDZeo7QAysbsF6tLWSUVRA16vPGSmNKjMA641oWSu5KcZPVyTg7hgNgn6ZBvaPfT9QfH",
  "key19": "mBVvro4qn7XZ8mmhfgrj4svmfhwdAPCs5AzgFfg8r7srfUadvmUM77go15yw8cAoopLfJQQaVcAUUMKKeLUwDu2",
  "key20": "3YHZKYyaDc1UvTwi23LyY77pUXVN44BTvHtiaPxyQAcjihanSP6GNc4Toe48ijgETVWE2rKMmGCQg8cuHt5ZGxMM",
  "key21": "4siG2ynYa1182Yjrsr2V1tLqezjvZcUpuNoxwFtGbLqjpnqvriiz4h1YAJ321bJh2AtH8kGDi9u1qU3tNscbkBAg",
  "key22": "52wCoyf2muXNMxtAdujF2CMGWRyuUZcMcEKDFX7vRWMg1SzcpVQmPhXZ9HBg2YLawkXUBETQu2TY4bvYLENemtNF",
  "key23": "5sYyz6JNYsJtVkkfTa5CakUsNW32xEvWHzQY9YeSVT9g3Q5EXCBbVKWcyfaV8HJxQFfrgURLgEC29Tcuzvy9FkMt",
  "key24": "2sxnXj2fVT9ttDtocxff2tCGNE9T4E5EhtaQpFizqTd8f85BgCh3DPt6kNp9b6re6HGQEsVW7xHD2mVpUd37Cs9T",
  "key25": "2M62D6nWBQTi8nd3Wds8NC2b5M5PkaiZqgPRHM8L4SPvy6UNMetrp7JkkiSKUhCFKHSofBQsbaw5DYrHyY58dENK",
  "key26": "4937UziM2quVFX9WdaRoACPQ3v7KHJC1ZHEzZjgBQRMiuYLQN8SJTBxbNrwoV5A9EydA9peaBanHE3P5YGcWH1Cx",
  "key27": "5Sv1YivQCwTcBLfCrhW6CP3JFgAejyRiecnBZJvVx3p7Li3Xwk79ZM3SMPX44dj3BmmrDMFg6w7mFpdVGUTKZ6zX",
  "key28": "4ECEyQwYk1MmoZMcsKaPMSqikS5tynubcyDNbviNVa5V4169bVs3ySmNz8EfawrqxUakZMuQncTktp3zdDm5mVGn",
  "key29": "2PYq9T3jw3U6jes2XzuS3UdqdS2unNM2CpAh1GEBmcfXkqvuh98kHU8YgDVyy5PtsWqsugex99qcw33RSDcALfTE",
  "key30": "4xJoyu8mNzUNdWPy5iz6eh9kEL5j5hru67WHUQXqDHVXYSyaVxnaRXwMzBhfVLYEVtKpgNJBFkpE1hqVK53DcKzG",
  "key31": "Hmdu3d6kZYhJ2DL5D4dmtQXgKKz6fxBXmuPfUyNZeAAqpVuWuqq42cz5Us7U5DC6fXdKCUhwrRGPFK2H2Bp8EN8",
  "key32": "5W2coPswemFbpoKm6sY2wyWXUj8idNb9qf7oLdhjmFFUzXYdKMWNEz63VDu66EakxmSY3ztVX799CL1tWbUQpscv",
  "key33": "3AR2eDt8Mi9gjpfwuatZZ4KkZrxCTGjrihtoo36uRqT1ydrQFV9xaFVUPdowoPkb4gu7hMKGB1GxAf9XYGP62adq",
  "key34": "5ciPNuPcYw2aT3w5diDj4UGfmL9PUmzLXSpkUcQ7uHkbw83U7Lfhbd4zsh5yt9F2xSB7Ei6w73Nus8N6ZQwj8TsG",
  "key35": "4TbSpS4Vb5rP7MHoc8fm5yKkncdjhsW2NeJ4UZm3tqs4pfq2DqJ5ZxmVxkYiizTJpyHuBMxVKoQc5nPK73RdQG2S",
  "key36": "sLjMDytmtG8enVuhjkbAAXZiuG1zC8HqyzxmCo4RkoWqH8wXQyvhSkg2NtErnorJAJqEDTNih2tccPcKk8QpNEK"
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
