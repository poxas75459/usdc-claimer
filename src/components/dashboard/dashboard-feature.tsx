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
    "4rkJwWEsuHsxcq2B5tpKDxMCDXKbx26UAi1oqpjZdD67fBUqvUocmYCBXDgG4eCfxku96zPmTtt2FfCyGJqEshYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VBiWLY9UB5nSVEWFTqZRSkkhwLKz2Pxt7VEFyQPnzEjh6ZxtpS4Ft4uvgrAtnrQWfELmmm5J5mEuS5YTJVKaFow",
  "key1": "4hgXoub8GDJDRD1JR5erCzfWkMjE47s5koq8EN7PWSk39w8VPbF59WBBtUokv9ifmEAwQPMi5DwsR8BxTWjQJg57",
  "key2": "2tSqMswuqyf8XKRqu8zq8yTAoUveKNMbvh3BgKBEkm9j288DaFjiL66j5QzuaaSQjMf9adxD6MJUjQY6g1oz44Lo",
  "key3": "5VRBMaprLdQZqhvTX5UeMHeaeAFmKDzqRVFsj13EPakPxuQv25KNWKgSi5teZA7oV5kKEoNthaYMwKKreABsxPA1",
  "key4": "2rQ2QTpjA2jNR3KkbTfmBNL63UVrQU54zQWizqmEhdcE4SQjE5PmRp7ohBURtRFjz7h33HrnX7BWg3gNSGcwkwQL",
  "key5": "3AwH969LX6vMt8c5zG24aWD8vxCigDsvXyy8tCFk5Conswp2x9y1Ngbm1AAm1rtCRzfkBYeecsrgNMBMA2kSi1CK",
  "key6": "2N1UiGZsWbaaeLUiSpr9rLeR5QeqSiBxgXKkBw6D1jhurFC6NNyeahsGr2fvf8oD2Dt9zwxM1yyZFGXyssvprkXE",
  "key7": "3sP33gTnwwCwvcta8oqaPcErUqU7dAFVnHokkYavTEmoE1MNntnVLuWJ6AcMjubdkCesR886tq3xpBFvAAasazxq",
  "key8": "3c5w9w5gsj9XLfGXjaS5Lp8Wcz1ujmwYDWUNCDSFpx76cEsn14bW8M8Kwut4KZSZZLjfCVjqQGJPnEYzYs4t4nJy",
  "key9": "2BGsUzu7fM6dMPqbBBX5L6o84Qfh6cKw1UgqNEKDaNYTW55rbWRsRPXLYWEP7iKio817DerTBPfxtEbQ881Cqykm",
  "key10": "4hqwGAcJcFnNkwC2pAJyodcGcTtNyGRgBG61q9U7akPF3TteegkNp7Uw4rsxHWfw2opJe7DModVoQtDXZ8XaPBgT",
  "key11": "2XcxBWawevqUAHXHVtEhdxk6h42nto2sxqNMWRG3jxs8ByuGx5gTCoYMbuiKtvZASBRo1RBFkR38L3juHJAyEcpT",
  "key12": "BqXaJhzSPg7XJgFiruAqqK3X5BEppTMpoccQrV4DSV8dBg6zZGbRP52vxbEpUX7ZQ9qmNjJKLK56ZJYppbyPkjY",
  "key13": "d1WXvkLyvyaPKFJw8z1CsD4jQXVGHB7AKh8hHkSTNYfPmu2X7PgF1KYyrj8zB8enfgN8SYmEkrHNsKEPtCuqUVk",
  "key14": "YjYwBrVSTP87B5xQN5etGvtPxB9RCGPz9YKzVWNLV6Z7c2we9k2q49M56dgZor1caRo54663wZaR98R8gpjZk3J",
  "key15": "4wMsfFGst5goWdHVKZRoaRBFSwx2RWkfK81hW4LuYbzCDvxZ6RLMgDC3TyFQRoqAY3hPA1GtHy22ygzymtN8CGym",
  "key16": "4VNe8xJrkZwer5AZ6PmZbYzaMaahxwDZGb5XSFFSdMMacMSxfcxac5aTJTeniCN3RBWZPoo8v22Ak6nx9KoSkgJ5",
  "key17": "5UNeqmExZJvbLd6UiQgUNhcKqA9BPmYyJDsSaekMBz8VTPo42eBCvXjhaJ7YwvNiJb9amhFrMu4uUXUMWQ5ctAZB",
  "key18": "4pM7km5sAYV5p1oZXxQ8r2VcDEgTUEU4QB5pDRr93mtPWAoAUG9mhjpZceJE8dM2u6nVjRtkSTJDvwh3b8PFS3VP",
  "key19": "46MHjT9UjThccRho8Rm3VqBqVar3Y4p4BPHnqHoXtTot9dt1uGZZdnAdV6hJ59pv4REP2y3KtNhyp8UxziXkBp4a",
  "key20": "4Tr2NNVmFfpPAAdT1gAAFPFT5YXxjmCkJhRPpKHWHsru2mrFCBBiRXKkqWgVoiapPAKrvd3DvFwPMX4CjWV2eB5i",
  "key21": "2x5C4666LsQ3ENFx1wGrprZdfYKdRSNtsPq26rF3iLTzjCopS7jncTN9GgbRaEJ5GyHpcCABbvPCMCh5ShReVVX1",
  "key22": "4aMJ1PjKndh1Pmr8hyUAsoaTQX2r9thX4Zu5RoR8GprHNxE1QVZPZw1hgMDLhLqKqcCoNzkY4bEA3F5pxQKpr3b9",
  "key23": "4iz4c3Jhsq87dg6FWsRDVM2DPuA8rfCTVtvveYWCB89kTL99YommHBsnqeP9fxoCTX7Jf9T91u17p6gYL5ay6f66",
  "key24": "2jkain1E2HB2V3kCPtxxRsJ1vBNSPMGo2JwfBqEf6C1JLEPNRqzGHSiVhZ5S4wwQW3qnZn5cJ9WuEXj4XnPBR5e7",
  "key25": "3si1VaNeSNQjJg4F8c1KHSBM5bJibNY6YZb6guB7geXBTqKdaEkGU4k8NrE93f3VRExG9UfSLuR3e6WUd2wsNjvP",
  "key26": "XC1M8U9mSkfmXzek6mGK6ryRpxDQPRjs1YPMvidgDR5v6gEMbuJ8tQ1oykqHyHPGak8FeBdiLRKnB1f4orWSRpM",
  "key27": "5MJwJggAxRTBCpeqFNgzC9E9AoQYUtjEiWnbMjCbao37yUFbX7ZPqQSXCahpxbdMAt7yHpySyqPdrTM1whJbcaBR",
  "key28": "4PXTSxHzD53dcP1JcGYagYdmoAmn8AygA7YWeDT2mLxb7ASbEbSs2zULyNNjic9aSQ8UUbK1ezKLzxkntWkHQyEJ",
  "key29": "2crypb9vmo93ASG7ZUVTvnG9L8K9856xz4U2wZzskeghu7sHB4PNFBRnf89Eoc2wErSovck6MMonRTmt4m6pxVno",
  "key30": "5hP5qKWannfPzsvCxYbVtWnSZExA7PdYLYgTX3DKHQzaYt7EyU46usMYS51T9x1VXXotzEuKT1c74gwrVsw5gQ9U",
  "key31": "ix8fkYqu6E4SzLuTCUWjcX4Ag5gQCEpQNZa6KuHkuwKZUrQ9DvipMZqfx57ZFv8t1r3mEGD46mF3LMXFtojzfFy",
  "key32": "5xKNwUbEGrf6jvmGDUmy8RFimHpwEjLRHmy4jR5CZRXuMJyx99GqFA7SsezrvTa1cuEMRo2Wz3HfUu1i7j5UR1c3",
  "key33": "43QruWfY6kH1bKHGnr3hbEYWYf4epfuH3WU4SxW171uN86Mh2kXVHBJks4yLbxG7UZB7H1j1XgAFwLtmNW5UicmH",
  "key34": "3YnQSiae7Dph8jY3F1w6AKpERagwnMeqoHfQP6dDKxkPNxuoiPUupE8PvJruZe9o7TncVCe6mSj4PZ8vKLNFSyYM",
  "key35": "4vwykiZaPWZ5CgftFtfyrWNU8F1HS1tVb8SZUMsMJ6JWvohUr4m1Lkt9oJpRoAEs4jRKShXd9aKVkUnft9cjGDcq",
  "key36": "47ZPUhXi9zJGKrrMonkYdShvfQaEJWUWkK273GCQqS2zKsX7LrdqMBNSyVPbMMvUpGLJ1WXAUWSj8e57ZayjZ6SN",
  "key37": "3fdZRNW7q2kYYSxHZRhHSTvyV83CzFxErjNn6d455Pw9ejPFsusoAhdK7LQ8hvDan6udvgwo7wGvkyhKxFhxvRWp",
  "key38": "5BDwhf49CnAmkkRzVRuewoAKiQoMyNmWGaZdzN4W2a26QVqvVUh8yZ9YzoFgP7VtToZkaBNiiDyY3VXAvKoJk75",
  "key39": "4tWP42uLznydCmpd1fUsdCVxTVyhCSwPpUUDKMTT2DkqtLsqTewCu54ex95tFuXRS67KVfeWG6C9y1qCZUNSEAST"
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
