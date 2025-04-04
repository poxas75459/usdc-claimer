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
    "3HZNssb9DRE4ew8pJvX8r8CktbWrmrpfKWnhSkvzWhJcUPh56mytPk8RqkUnH6qn28QS8XShFt1bnsQU1brMASGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nL5YKhnYZaTsaFSkBDjLSjywRsa9mFkdExHExnnmqXh8ecdEGDvp2MfpBFzzFrJbEf9WUdmBWsvTjFpmqGp4R3w",
  "key1": "5hmuETDeKtrajAvYJ6L7rdpBgniMhjBqAdy41ohbcwxYHkx9jA3fmsWpgzhUngDvzyB7WR94fDmogqEFvu3RvFmv",
  "key2": "23sWxtKp7LK8fu6tpSU3E6sQTzaxdzuBiSNkmUg3JFQid5veArkiW8QschshkRfokkquePyjiWcWevdSsJqxPWyN",
  "key3": "36ufntth26rkJYpTKvEHpscfeGW1fTpNLnatvuHToBaFSwTdbmcfEc8FGY6ubHYAq111Ur3fJJsE1AiNcpxSbe2j",
  "key4": "h53vxmNi3p5V8n8tVWrX1eqPoekFEkMFpFco1bpBy9ndWfx7radqm29DovFdW2AYmNq5uHjWJd6AwLLGnrjmYjQ",
  "key5": "3mXRSKSfgv9JreqSCBc3eFpAgBg3ki7zydLkX87wuroccQwLcUpoj9Ya4MDchznrpzEvFC9uS9GrXeJD5pq7EWBu",
  "key6": "4fsLEREa8BWECfcfp987i2Q85ApykfY3RTUy9yjpr1Kz66E7yxYryNvpYSZof8H8U9jzCqzEpaWcYb1oyYb5Jgub",
  "key7": "4c9HBHAnxYEWwZmTW56W3mswSrHGge9mGxZC7rQpBL7RRq7AAygLzzsTfSn3fD9JywUThjWRmN62MxyzoHsniac1",
  "key8": "5cmbwk6Zn7EPAZgy9b3XWBqL4CcFZ8SGuoZGFKojwytm2iyZintG76SdB9uc8YyAQpaNb4XpN6HQwiD4K25hLBhD",
  "key9": "55szNMySxC8Eb6CNjDwnz1WevjH8GkcFjv8xQ4zkgw1J853ubcMjjfW5KDRyvxXd2MUUd9aDg6gDDpDB2yGG9NfT",
  "key10": "5kMm1yLwxUtfy6FemDbqCPcsSYazgzYCknxwqr2JCfRHZf3NEPhxr3t7Q95rHhWL55U5A5ZPd3Zzc5LFpdCXGGbJ",
  "key11": "3VvLQThmM5WHVyhH8cEf6LpYpi7HEQnLKvDStAedao21P974HcEXMrfrWSRcgj31MQo12E2JW6zJNrP33JYPN67v",
  "key12": "uV1FsUTect69VpUFowpGMa2uefCLXkzCyxBjF1m2fuGZCaGPz9Xj7fV7CEkjVFR6dc6kL2n4CaDvxF8XYFe4de1",
  "key13": "3Nqzm5PyhjkcwExwAGbCzdKahBEBwdiQfXmGJd7CzJbte7SppWXE48AduQaLZy1ivcnWXYhH6EojWe3RM82yt58Q",
  "key14": "2e6z9i8pMfGFowNifECuT3Qz9Up9Jdzfumwf8SVB8227i21QaAsdrzD1wMiV2aa2HvR8wzwfbVbbeDK5RyD5Ss3b",
  "key15": "2wiPWaf58qUd8gp4QG4AK1JvEpGviu9YFJYhZkUcgUUSFT1pW9vaChqM7CdA4cG6fJxg2FmNArti5ifS6nLMaLJL",
  "key16": "5g2PZfT8XwvVcwAXe9tXbxEZ2DK3q3gL4GC5H3mGL5RxswfWjAWQ4k7CbSrk28UBh3dkxykxCa8nniYw6HbFQVNj",
  "key17": "4Wx4HM9MGDyFi7wPPVzE9HUm1HPdNCrctFNaa9LxrR4sCsEAvZQc3vDRjYqfQsBVnfNi2RMrHN5smgK4JhGLheHf",
  "key18": "3knUbuPoEp6M9RsvDF9sCtoRLkb41T3dJTPUPK2uP1hUa3pHyAe5sUJsa6dXFyRPvKj11QYGJPFzPJFZUZzcwXhY",
  "key19": "R7oW4ZUoM65ARyGMyxHRzY47XmTbo8ngz7Bqp9zetX1XkQ6ygPB1BaHX4nWUvziczoyGXSvofrN75HCon8WQiHZ",
  "key20": "5WZmFyfQEUdCU7Dxh5h3iLhwZfYBUgh8o49AV7HxpdqXenikeLz5UHtvKuAUavufBxr9ucDgJ8NfSU3WXpa89tdF",
  "key21": "3RxrtX8dgpA5qLpeoTPjDwGEDHVCLDjzhstSxLATPyistDamfVHzk5pqwtuYufBrmkdswBxumAHkL54K6uVKfHp3",
  "key22": "4A5qvgu66hR6snb8HAwx24RCLk87HhFCLpf8rfMvuJBd7G5uMJqVx1Rd6LyeqM4bWYpaFB1Wt1CvHR76uuB96sqB",
  "key23": "5fbmYjkBPMVDuwZ74o4GiggR4oSZHeQnyrCkzZwqUvkScPX4qeAcTpRtxbm8A9XjqZpTa6bFWJs2cAEZAy49QfvY",
  "key24": "5Gqaz2eK9ZRCQXHZcaCiJKA5PPkoh7zJNzipRpsWMFNwpKCujxMNHw49pVeCBjz2aqvXFGESEV1FSyrmaBYAXEyA",
  "key25": "5cfTWbTbJHkGvhAtnSmGYX9sMkEtiv9ZC73JGEee56VJ2SXC5DmqFVyDuyLNw8yXwvhxs26z9XYi2zcJfUhpBBRx",
  "key26": "5Rd4ifG35c86FZi6EFwaWU5aJFkmdi1z3THTu55Wu4LK4vGfe9UG5138eJvJ6wAnYDAcVDcemmMYRPNuB7KjaFEc",
  "key27": "2KkHL5FUnoqyjgLiyRF68xkihdvzoFsZ4a3yB68hFNou1e9vQqmWnZEHWtX5WytpF8EFirSBGb96GaZF5JijCZEf",
  "key28": "4se6hnnGE53XbdWo9paWHd4ahrSdKtJG75sqJonTzZ47EkzMawN57mzpeABnMiwZMLXGhYqabZmD8pXc8JCvVYAu",
  "key29": "VuijFT475C55TLDvCGbKxx3Umrekvq7UpVJA3P7M3eTRdS54h7Zgh5BAHWK8RDoKxUP3pPTPpyrxhBUc3hMQvhZ",
  "key30": "4dLApcUDrKvoz75HXNccNcMZwYKNmnu2gJfMT6ZQdhNfDqvRjrtoh8BAse3VCriyNvaC7Nguk1UNMsEoxosEXNZ3",
  "key31": "5atJdJQ28LF1k6r6Gc4EgdeV35wzNT6BvZY8SS8RynVfmRP6QhCk4QK6X4TYRgAapKCGmNJGjnJD8j8xC8vsrZrS",
  "key32": "AVwkZFwPCf7sT2roeRA2aFArTF9oUqKJ57k1ok1t9oJTMmZBMBp9urMauDbcJd5ga7bnFKQjPvC1p77Qjfr1XPc",
  "key33": "ax2WS2Q8GBEbmWF8Rnp1ghK1LzgQJDEueSa77Y2SKbKe6wTMxT2k6WQFBJqfTG8cQWsEaNLRsBRm1FYD5eQbuie",
  "key34": "2bT7MYF3H3Fi6ptGjGNBmhV6qPAHvW6unhWW9WyAFmJhZ53oApM4sPBmoVvJUGStk47ofx137VANCAWJXTUoiKLY",
  "key35": "f9Z2WBXYhX4nSQdcnhevTCb3yeyMKFRY9iJ9s2ZRwqA8xNnjYXgrcyWrkhJy77Kjye2Jgr6J6DczvE79yeNvtSe",
  "key36": "3uP8uM9eFP7w2Wa3dLhXoTpYx64pp89w7MZZMgZXBLQs89Gx9jv1SvWobmpq4vaXqUMhYKj6izQAtf5wQqqzhgq1",
  "key37": "4WvQpo37tk4MX7HvETgTDGkSy5kGLyWSGLWohVbiyEtYwp86NevHkznMKYnzvkFF4mLnYi5Bz5FASoWNmWNBycJS",
  "key38": "VXP6bWBsyUzmYqnMwwxYNKNAGymzfM6VF6drNByaQQHKk26je3BGGej7RzT5Rv9wftybqcg2pNfhAtU6JXyyqyg",
  "key39": "64YXShuMdjtpDf4USWS5HumzMiuEJFm5K3mmr7VnxUc7WyLXHPjNjURBXzwqMNyo11cCZ3yZwR7Tc3Y4h9bSTwL4",
  "key40": "4KBxy9FzMAVS8BDoZEjNcDnQ3K698zHoEnDfUbsWxD8b7ihbWPAd11SQUUf4j5PM11wDQm8Mnda66aYgQ6kBBm48",
  "key41": "2Bfp9KjW6Ly4meVre83ZVzpZ8HrDHnhQBGGPwCkdopk1mN8BHS7VvwPLxzMvUSH2cUfjvdULAwHCZvJ7TJ8mHZ9b",
  "key42": "2jVDdjnr9D1J6AKCgpeESS32B8PLRTLy7bQWsqcZbGnuBQABvhCTDx1DtKT8ie1JQjbpbfEe8EBVm9j7CNGxS2Kj",
  "key43": "4eAFCW4E9S5tipzofkb3yb7tc6vz4EZBqUj8NYw4KYZGQ4VCTPJpGjoavX1kruYT4vPsHRRpDXyyC35EkgJkW9sz",
  "key44": "5esSuE9yYdvZeTPFqSA8vKXYcqY9S9uVjH76VPjE9sLpETMRrLA5pPMmA1EfPEpyqauxyXvx4atJC39qvRDCnGBx",
  "key45": "2Nbgyh3Fg6wqG7WSFkZ4NTeFujZCRkYHiuJVwcwPG8AUnu8VmtFspwWWDrmP8WwNq375vqt14eqEkB115XUxrp3t",
  "key46": "5RrxraXMownFLW9fn51DRyjaXcVyYK3E8mTFZHiYwQA344Him63L4DUPKRGkrPNd2DidQWEXdDvomuXcg42551L4",
  "key47": "d6h3uZ1WoT7GfRfyKcYw5d5LaSSu4ix5sbfzVPnBKcy58J1RyPjUWmp7spoRreAR25ZLiuzCi2irpr8yD2xhYDz"
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
