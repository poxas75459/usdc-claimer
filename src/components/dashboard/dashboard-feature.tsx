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
    "4mck2UBB9Q9oFJzZvyYiLM5AW1XFm1wdvtEGeCpBU363xXcqwkDwjZ6MX8fFzY8u4QdhtJaGA2dZbyeqPYUTrdqu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GticyGbQBBkgHCYrXGLWyxoPweEkp1EzYx7yG6bthZPB6yo6GUP5NdMyj144GUH8WWibFJxCnJJMerXH5wY4jsX",
  "key1": "2Nbf3QyLJu6wdvFPrh6k8fTsgKtjB8grrzHpNAxFHGy4JpVCu4yzZ4BrR9jpjgnRyFJkrgNHHLg6MditgbR2EuSU",
  "key2": "49tQ8RHw7zKJxitLZxhpomJLFQsCvREPUH4erZ2EhCTentUWKZ1qMr4GNJ6o4RNLJMbrSpEQSLzHGDQptVZe5S5P",
  "key3": "rkwLqqTXktcR2mUuuAfgAFcYAmhWNPUwzwqg5yPk1juBVUgrGAKAWzsHJM7GZDzRSz9wBpNvZ7Cj9J69JTScQqP",
  "key4": "xhd6kveuhYwRr9MjXYKNiNxcxcze11MUwZSom8fimWv1UsmEYT5sREU4gc3KJFzHutAoLJbpFHpZDD6aewof6Jf",
  "key5": "49ssWbCdVi9RD9JRxAPTknUMSqynAPhbWd3PJtVqzLx7HQatAtLJKrznWmyapcK2sMWTPA2ncLMhHm2PCSiPPiD2",
  "key6": "f2bxXSgk9FVbkEzsn2fhr3iethwKKrDrnVwjHAjAsQ98qLzAjVBKMPMWN7gLp3npmX54es6ED7khfoXLS8vJ7cQ",
  "key7": "5ywfZzoTnrpKQhMwVRbUk7osuVTaejRnqFKA7RaqnxYVAEHXcbUGxxwevEWFErvE9SdjpN6mXJHsAJcmP1jR4HMB",
  "key8": "3MhQvBrNbvLLenQkq6uhdUmPBw1cjoatZ6aXCFnC3155sZmPBu6UK8ndVS7v6J311Ho5A85Pzm8ugqXEsKjkeufg",
  "key9": "2PeT5Qnv52aBhrqb1WGEnj8sZmj3z4nkuRW9qNjDugLkjMEZzQRR3UgjoWLu8Uvm4xqFu2KiQboVXHj5QMMMNhR8",
  "key10": "2moLohWpyo4a4a33gbdcak9GBoEeYvEttEaRWveTEh5SPZ7maoj3GJT7u8KC34Z8LTyapcuDcaZiRjhgCTNDge8c",
  "key11": "3yeCzU5cEVZjsrx2V6TuLiNkgE8B44j5RZ7R7YNi8VtwtbPMvfqmFmd6pstwXg7dBYa5h6Hxp4PdPHvRUnL2RjSE",
  "key12": "2jiqoNRaTi9wVeDDG5jJS44n2iyuhmLqMRqZhVaQqWCFp58JvtsMLB89rVrAUYVqkDHBqTq4p1vzdPz3YG311WkJ",
  "key13": "474BryEAwdLfJgVRF7HNcCiCe35cBXeKJxYLFRgu5SBNqPWLvLmLhutEadYmWf1YSsvv1rDEhHvEnCVs6zH15SUR",
  "key14": "34NACj2HtJj6qd1rQvuiM82WrRtgV4Svqdw6jp8XwnBpYfNp9phEfduqe14bJvHLoKVRE5qiRpmcgiD26Ya9Wc6o",
  "key15": "4kCKEYYoQUNcKdeTM7GGGNaHFMgyBkBoXREmgMDit6YbZdv8fMgc91Jewy363Q3pw9j5nqxDF2hZLTnsH9qPDyzW",
  "key16": "5PvT4DXqDRPqbDDDdTHGr1Cm2joAc1RTQ6DHrMZj8WBrL5qixvFKmcK4q8aexuyT7nca2G4jRxzie3CZ4nmyTQhV",
  "key17": "2FR6swDXCxJXsWBu6v4h1nP5KPhpYLDv6w81oE5pDErpVc1kiJ2cUpQCCvCxSS9SPJ64xp3y8BReKWCZVMSi2Vr4",
  "key18": "4HVcpDu6QX1AgdjV4jkTrGEigZKC1euUPnx8nJZ3WajCmuRXgkQjviAFdz56Jqr6Z77JSH3ZocwMKriiAiHvLPoA",
  "key19": "4aBpG5uiupcK3JAtWyVt8AuH3RGTX2cNQviyjTXYtR72LU4zeWZKG9gyAMX44Ujh2RLmVZabvCrYzc1jtbuCVUf1",
  "key20": "2cArLayL18BfT1DpTW8saW2zwwTt36VCs8nfVqdZ5nvSPdnZrRiTyzhB36Ryy1uuTrBM4F3xCVSSFLwZV7ub1s8J",
  "key21": "45DdKL4u576w2NX34ktRJvwGN7WkRYiKKJxzzKCotYrHGEfA1fB1GqnQBcjjry2eN4JxP5nTskmzaPhnMnm45rj3",
  "key22": "3CT3e6dSv5aijseQyEL4RitHUUSbV24PDkwzjEWPokoarZMNxhdTQKUWCCz643cS1t82s6VLdvGzQ8N94TLy2uLi",
  "key23": "5B9Eka7eLQMamdwshBB7iGs3gCCKFGeS12tDsvpmVeyvA8Fi16LwfmkXMtVovJsQCAZFFncypaaJEsFtyx8d1WMt",
  "key24": "2mLpPEe5y93kNvqdxXzg8cxdwoqxNcrCc7J7SBZWAMZFifUDakjo1Kho3UvGusFH7WjgqaSrZJAbPDWL3Fo94WT6",
  "key25": "34HJG7Km5TVLBFknmEmmnsk5v7b7WzVTdVWyp9NVZ9mXPwhFo213JkPw8nGKLiQ9XnouivnGM18Gc7kghQJ8fe2Z",
  "key26": "3p2SZ8UihYmLRwQgygKkrhvgi7FTdcMUjkn8w5fAJdCN5RGwpP9WdbtR6EaisM4vB3or4WhpQ5TbgyXxHFPko4NC",
  "key27": "3tZrDoG6K4CB3JQ1zzkeetNsSSa3qDLBf28GSAMvFXWxi8xcfC9kDPJXbBzDfRPefeS9ZHS9J9wZSMKvweywzVD3",
  "key28": "KMdoqFeYuDH69iCFtuUd5cCE6hcZzsqchUAXvSFBaf5coNj7ZUjJ2ad2HurHgUuX5R1HC4dvZgwb92H3bkA4KvL",
  "key29": "a8VpeT9A4qrwBaHqtsro8KTQFgs93vP2hQ2axJ37kuppNyVi1vAhJyiGzT1RV6qR2C7Ayg2ckdfQ11ArG3CZwnN",
  "key30": "4Asy6xpwhUQfQDyCH6d8WREw3FKvpqgz41uG2RomkZa9rwFiP7tqSCPEQgkbJkaaxCxXvP5QYPTVX6jADBMV28Dp",
  "key31": "4g3z3vwC25EiiPW1mmdoFoP9rWsprCtjz9e8h9BvprXv1ByYCrPn4x1b1Nxh9w6J9ajyHgMPhHfh1Quf4VRvXE1N",
  "key32": "5SA6Hw3KG2zT9dqNxwWbuZ6nkjXbetMUW9NKam9atptpu4JTjdyD9tVe5aRhAAf2mmZw9GHfKBEETNY9RytjwLPP",
  "key33": "47eZZiurVjQJWMbc3kVQ2v2Sw477ERQRtgKPqC9pazLWSE4wE78NaoJTrP8PGaGWSuP7uU1fCxzCh7BqHgQiSZSh"
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
