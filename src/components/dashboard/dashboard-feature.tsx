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
    "VK8R3TXbnB1TG6j2NYSiWggifEbzmtXzEjKUMVugARYSACoDQXswTLSBs6xvH8otxYzsyjPGb1kVXxTKct3nD7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eyTrTe4oSRwANdo2mbzfvt3g4eCKcxLdmnHYTeQE8zwuTkrZ1i3uZaKpMZvsYnVgL933smgcbDvdpsDiarNBhBM",
  "key1": "5sBjwp57Vc1TgA2oDCtvmcLKZmvvhkzHrpa8Y13fh9sWpVuGCHX9kH3tResdVCD2p8FA4xBRjfFFCpxSETdfaG7m",
  "key2": "2xsrjyHRSA6kJ9ZfmTqWxFVCrCsE4HRAemDRSywYZhs55AtdDEF7fJxkNJdAagg8J2g7PNyuyTUnesygDbwFKXvF",
  "key3": "2B1xuWKaCDGXxGsHswWERJ1DfyrqiubeypXoC5gWWze3vvAjY9iZB3rcu5jnL6p38YvVCBca9hacqGQuf1JQMdbr",
  "key4": "5v6hcscovUGska1aKzfduwwVefmjrQaYxMiCn78acApnr4Swv1fNQpRvtS5ff4UzQFi1zmLBFrHajaTGdj4pq71H",
  "key5": "2EL1e8xz2DZS6AFGv1jWN6An1e3TWPGzT5FKc1Q6gBv1PiwbG6LbeXBBGQVizMhjfKzHMKYYitbkUESAf5H2NdYb",
  "key6": "5a49zJapekyJ8NWg2F4RzzWBPJhcjYZChedhTUUchpfpF6ZNdMddq4d8Ltn2m56YHpa9pTXUJ5Pd9mnCMfXSK6px",
  "key7": "5Ve4xgE3CQFLcZG2vHUrsZgCtibxsSa2KpB5wVfuMcdtJKn4pmmvcRBUezgMBq2ZP1BmB5tvX4YSB1zRSEKAwQR8",
  "key8": "3dodS288SPFtB1gnd1t6nwz53eJRNaqiS8eGsa97wPHzvRoQB5Qo3TNPSFnihRRYFghpciqMYbWmPzuKFdeQfZFu",
  "key9": "Fw8YhAitS4UU4Z5m6QvwWYKWgiRvzxY1rDKiV2qNeSPNbPfx7a8qXvfh5YBEoHj5q4CUi4UNWJVZ3DjU5LwQwnn",
  "key10": "5d2gc9jiTj6AZ4dMC9ULvh84y7UHi58bWa1x5H7PMoTKxuCF9U5mv3tuqFKMkhn16zNukYa1V9yxE3KsKdwdvgf4",
  "key11": "5WXrtd4HfzB8Nm8ZaqZY8HyiZ87KdmpVxytgUqxPHGrFkCgM7MQbQk8k91VA7vQJZpzoxXraRKwKh1ACs8McKTRf",
  "key12": "3BbNHA23JR7jq2abxL5YP6CAMxG8byVMW5qRNAzSQBNKVEhBdvFu2Ya6Z4i22tuVy3dvMKo35K7An3bAGgXUkQDQ",
  "key13": "2EB1rT8DxTT5bXEQJsADVLuurbmzDJL4kHN3QEuTB8Vyn5R6EGxstFDEBry3fN3x7V2xoUcLAzLLd3S14P2r3aqb",
  "key14": "2YyHAx3jN9mxs6nFRZbhfiJXgsCvc6hfH8QWksJGH8acTp1wb4FjSWoCLi47Nm2PEvKubQVqwEvcL1vdmRPa5yz9",
  "key15": "5VSQmDWEe5NbdfxtAmLM6YA1BhtzGmzUYq5Ujy4GfQMqL8pAsc9Bahr5bWLHPicxzk8b4UQDw5hPVbQaGNEtDEmG",
  "key16": "2jfB6f2h5pw8DahNHuVdfkSyP9Q395HLNUxdmKWjCL5oXDbdYwCSv5WR2eJwb8gkcwZkw3NVcX9wxDSYnQUhhbty",
  "key17": "3D6MiGZQ9ZUbUXoVcxdWNJzdp31uZ6Cu8jnGqPrZ9XBVGd6E7Ck8wgux9PMuK7vMThPPW1BPuvXHf7eGMjxJa4pz",
  "key18": "2XuMiXu166mww2xHAF7YYeL9A9HR8yXJJ5hp1hBcCjyy4Xs4rE4ixXmk8K1QjsKmdRgVEwbMQ48MW8QA9UCjg6Qb",
  "key19": "4LfGp1ooHu96cf81NxPwyjJfadYzwjwckQG5ceeadjE5ZMNxYSE3qtQ88Lc7zm4fJsEikZSj6BUFfi9VVYwjuTz6",
  "key20": "2XPBDeGTvHVNiiE4qyzLd6yAMCQmChg6HKBUbsBm8UAXbPwsajx7DWhEGuQQHZXf7LZWeUKWj9smq6s6SMsbVjpo",
  "key21": "3TEtAdkQGw8MpmGJsF8fnXQofFMvf4Mt5XdNcAk3fXo7imQUynmG7S3SKi3JPNJoF7guqrHgGSELksBqWfQvKNAi",
  "key22": "5XwWvPLvRZRv8CqC5jzQ2UQHB2nZ2i9Lbo3efkXYwUUV2aGJhDDWjbS63ArCe8eLWbSrDAsXvjpwnynfbJtMkLTD",
  "key23": "4fWrLrKAyC2MmdbckvxFW2Bn3V7M3gFiBHW57jifY9QzqEedX3BF4PNsUiXD1GJ4U5TdiYEM5Dr8DhE6BfXKD8yZ",
  "key24": "4VAJZTCfuNZ3rCdLhvaMqaZvZc39WFua5L4sUiSvZ1RwojatBfb9a3yU5qwd7ieH8qCVhy8TTTVy9rChE7z493aW",
  "key25": "2LkQVabq5Nzt5JmVNgiiPiUeuQ1n4MdCwAkEGKHbeMUdtr2XrjGLGrFzJio7WJwN3B6apbxHUDHiQouAu3JRzWk8",
  "key26": "Zb3bnrN56F2HJdRsrcxgC7scTiMYRbsbp5UhwYnTjsqFzzTGe1iqfErMgzF4YRdmAq1KV1dgN3poqMS4KZqd9kV",
  "key27": "4RCj716UeKhCFZdonMBCUQae4Lb7mSCY8MtihLEQFWj1L6YnQqAeWrTu8QrRZmnwiWRVQsoP5LpD2TVFCQigG1V1",
  "key28": "5oSKYu4wbonEcpesR8LbXY7orUQB4apjyh8wqyfuRmr3NXMLkfFsKmpK7pdAJFsgj7LoSzpQ3xcF3XVLifqVeYVW"
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
