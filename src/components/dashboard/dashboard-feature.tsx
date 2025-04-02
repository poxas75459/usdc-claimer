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
    "4Hz4xiLmNkEsrHGMugRQ2azjvWiNy4cnpQvfhfCkTbvuWwqpoGTbWwCKYpYVFTBjArEEGjn6wcjyXAZzRg8ETMaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h2JJNRtvUtHscQYMcjifGVn4mmjk3NcLFTfPdweDXGNvCRRnUCdychhkAbKPKd1MH4iwPCWSrRMN1UbK3KAwnYE",
  "key1": "Jc8UT1XsXHvtt6Z2oKS8TpTmddqYuhc7Kn5vWpu5QhiSN2RXgeSzDc7KbEk2GEktTqZh4iBHTwnrR8RtF6YL7cP",
  "key2": "2HEEZRQveDjav9fdqwUhcrS6UQuZYt1TSboaMLL67chHeX5bKavLjqun2dmz7N2V68dPLDxRL45Yqr8a4GW62Nvc",
  "key3": "3njEYM9yCXV9NnHwmRtvR923Kb8iqg7ckqAHrh4JxqX5dNoy1kjZacSs4ZdyCBMxKhqD1bDimgVZAKfE2CxnJfrX",
  "key4": "J3fq88Z38cbMM1aXmN1WUjSwCytNXu4FWMtn7tnGRdKhyyWXqAeeCi2zWQhKMw7Ngu3dgKNqrnEtm1v4XvSJByj",
  "key5": "4UA6uhS6EX3xAHHQPKdie1qYWNkGps1jJgPV5z2DR7GzddfiTuXDPhJA9gdAAqB5f6ZaBXHoMfNmtUHt1ZHiBS7d",
  "key6": "3oFHi443BvNR6zj1KyJX6sDBTvGboY4jQMoV3TJMgDm5ZZt2uqrk8t61LMzZqgpbjdTFe9xyp9whyLKsy7b3KTSD",
  "key7": "XCrJKpEyHUzJenrwqDcPsopeJHqXuKEQV68xqSS7tcBzPEQdSzG627nXC549b6EK2hC7SFYYkWDGmF9EP5EsmVF",
  "key8": "9gttp6SNcfgLaW62fQoXubpceLVBfBV1UViRtKbZXJ4Mev3ziHwXWBMufH33NYcXrFvob6Z6mwafK5rrh5hyXmN",
  "key9": "4aipM4saJrDKZ4StNY8pCrqgE36eoGMdrfGzvKBKqAJb4WngDjRaPXTHnhomXxHQWJNNgqn1TA1CZ5mmmWp9cWBm",
  "key10": "2rgWG2PuWCL5g3QmavZXEPAk7VUNLYaNktJs8DExTKRHnzuTf1mR9YiNb6nyiddbQUMznFtbDZrMMNQgzjZDZCdL",
  "key11": "4571MUED9ebpb1BUB5ngK5dLrgegCfNAtcPfJCLqhz4hPu83kJyhaLdreZnDLWk99SFdqcGAL8nkRwLc71AfE9Xs",
  "key12": "qt3s7LZMW4hZF9GU9w6vdLbWPXNhMuoMuQNP73vxFdyhf2gHVngr7ipCATVnSjx5PHE9aqUCZ8XBRo39EbL9Fvp",
  "key13": "3aQGAzhNfKnNW1RTR7rPTYfZ1CNDG1NEDYQGsdyJ98gyxpCkEL9xfi4fFRiQXCTtjeWPpoNdwJ8RHRfWDU291n2w",
  "key14": "LYLwr84zivb6R7XzkJFaqg7KJsh9usGhqFnCifzE5uVr74dbZF4VsmnDT9Mqff8WSY2BNaP3WKB93oZUDKvhNwf",
  "key15": "3wGqYNtPHFoFTeuBUHoHHKgQTDSRZKhnxfDLztAsyD1VuWSjt9Awi3a83NhbbAezpF44rp2VNWSsvKXseiMjCC1R",
  "key16": "2PihxLvq6dW9FTgD6B4hKTU9FLdhGzF2LazWDUVb9To3w44tCJ3UuyCZR3e5RWgWDMn2qioQK3eNWwY8fyA66Tjf",
  "key17": "2gRCJCVuwBkfHyZgLJXvCnfmvqGJdHo7NaPfF23qKWzf2TW3H2MHRsS9cJZgfzipYY1adUUifGzJ85fDbHkHVn2w",
  "key18": "39EFyEfkCswHBrG7PDvir4atNUyGmm4sNdfeibasVMzkFoDCEFM63Gut2LgvDqdvfUmHqiz1BXtkuvG9G4rFPiyD",
  "key19": "5Vo7bRer9yXzgaeockgGYhgxCMK1Tt91bJohT6DDRok9usLmoiAhU7s26yWzYrAZ9HuFq2du9KqkQPxUBNarKtxe",
  "key20": "3Jqr7XmThPmgQTHBM54GrRTKrVMsCexPBJbtuqbA9LMAoeKvKB3ZBRQ5tyWLvwtRUwMJrnoHGEa9wCV7XqixorWV",
  "key21": "NmWknkPPj6p63268rP8BiHJmv2HNjJYkqfAFgL7DSJfdWRZABRcBqhBh4TioL7VfhBCtcTZP2VkmBnBhRWWQ8BJ",
  "key22": "3TYezEU5qZtFiHhXjfcp9gnVK2ooBYcKZ4DcY5vEEeAwdKYW6MLC3jy5cz7oaz6TdBBySJ74mLjjkcbjDb21ciVo",
  "key23": "249yYhX6M6ukBjUeYaiKHos9xuq2svRFhNMFsLhvsH64AAoQumoUhRVZnjZwVPgAxw7o3MbgDNaHZXmED8shDPsW",
  "key24": "3udJYmkZBEoqMuq4RfK1oTfBtVeKsVw69bNX1s2c7rnj9kBfTTsFU8tfPk5RECtQAvw4tV1BMccXafRDdzkeRuyu",
  "key25": "4AiAWm754eSBkhV2a6rNw5wq4NPzHDakaraDMnuPqDjKTfJoY547sCYevHRr5gnQxyfsfwSsvJsRWRZpAk7i6YBH",
  "key26": "LLc8Fefq4SBn7thyberDKupJr5bT1CNk53vwcUUzqtdGVTvXHs3RynweyNKHri286XMx5KwcqamqHN6Y59rSfAz",
  "key27": "5at75ebd5cfe17r4w6bVmQRbg4zk2C7xduVntkf4usbtVqypvZVXHTsoewwcopYqbnfpxm67tk6NfMZQLDrow96g",
  "key28": "27B9AzWVJebQWbV4vznRhcg2588ipvJkRftBifdDfbGooKzr8YUd1QG16vLBFBA1tXA9DUDkMdd5xzraZvgVcsFW",
  "key29": "bGQtdJJf2sbtSS8d1MVPUfzsyWTZnnF4LwzofZ7cfPzWcGYbn2L1RCJQXPgBe9G846XkVMmpFVEKRr9acPkJyap",
  "key30": "3pJbnZe3fXutGCZmWcywFWCC8Dhfu5HtVQGMw7JKneG3ZGpU3ieKxcESBuWQ2KJbaDtWpUbVwYNGC7LTR3X7z7Sc",
  "key31": "4gY6oUk8diiYB54jPQQM68py34F9GFjwmgiwPCiyJ5oiW9STxFhHLN9XVNnCsF6VbNXoxdacsSh1zUZxhGhPL1iv",
  "key32": "63eeQFsCboXcMjysUJKCLcg69u3thfnwv3CTpxPZgpibRk1X3Fykbxmhnady9EjQhaLw2SX7YDNrRVM96qZSqA6L",
  "key33": "2ZF8dBkMT16JPPAL2jaYNgu9eavJ3WDQCFyxbCC8jn5jALRcD88fnzidJYM4sw4ZGcLGV6w25mfoxoVkQubatPka",
  "key34": "5xYZBeud8zbSf4fhKpWFNUxfKrDSw7ZeLMVUzZJiVujkY1go5hdFRLxcvS2cobHp9WRnrMRidF9ECKNWBzK7Xdmo",
  "key35": "3sRSjcgvUgJTQgsp1k2QacV97smUeGnftF4sMhDx2fQVebVBHt1hrMsXSXmKrsfoZNFWystxcSKGJA23d8u3R65M",
  "key36": "3gRxGDLBhKaasGxKMEaaPnmvC6VEqRhqbVTX32235XZXiJ6Pxw1CtSGSn9YLCBRz7XmEHtDyeA4oF1JJhVpS4nPP",
  "key37": "5mNf3wDQMBBxAtUJ7r1DaJRoExuHZH7iiG4LSWoC1jxhNHCRoawMaTXSjj6c2fK3SLygmMuDuWbzYAbiYfr3ro15",
  "key38": "5ha1Byx4jMu48L7kQvPTsUgx1fgcqVNkWUcQKdqYQ39qGqGMVzvKccCMoycojo7qpppKr1eKjQwF39FSRQ5aRzkm",
  "key39": "4yP1GAji1FbpBMhnXfZuRVSf9L62rm15aWLg3qZ6gyRUFems3QSgU64zNQHkMCqAdZs7ifTE3xsPVJqayp9QbB3G"
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
