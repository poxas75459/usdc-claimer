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
    "4DzZBRgi4MXY4JxR2RRdR1EbDUhrr1QoaAV3jxPR1g4nbbryxuxRGVWVeRBithDjSD7PtqWJpBiZHmGUUjDHCfrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pqJnrtFhTMAkqPpGdTj1fx8nZHeCd6LVfLzrUHbzSEd7bTpfasFADpxTPeYUWYgnbeH2AUF2jayZ4sRqa3WG52v",
  "key1": "3JiZHjMWjRJiAQLdZrP1Gukx8LxTJQBtxW9SEwoEiYyS6Yny5AetcuvYyZbGkFB75stD89WTY8fj8fCnyhFYtL7b",
  "key2": "2PHbrX8xsnSFhmb5JSvmYMW7721Vqqfb4LjfnugVncmtGeuUJEhMKKe7oKehAbjk6LJp8y9TuKpY1dkbBQECNdHY",
  "key3": "57qsRsHMawLeaMKb4SLQoyujaukxQ7MC68ZVPe7XcWDGZzKk7N8M28mayBFvPHbKPVvEK3JY2a2dKRvG7Bw95D99",
  "key4": "4JPsKYyL9SqqgcoNmdtPp1MsmvYBCHjPL6cDPTGQiahXjEecgWVFWLdE9DVEXwZA6a5zk1Rvz8P2GbNxxTUZCmpE",
  "key5": "tceWYAR9HXgb1UX1KNaZzQSKdC2mfJehQ5zUGxr9XcYnHGRjLCTg5zVV642iPCdysgEzyo5amszYcc8YJLtFFkt",
  "key6": "5T8Kwa7rhMeM5CJqw7QyjCEmEYRqqsmsAWtz2Cm32uVrTFHgQtrYrHSbaHoDUW1sQS2i76QgMuzwApcpHjpWKS6K",
  "key7": "2295wsDE9zNjqjr4dgqYRTd2uT27sD79H28PvKCcrSv4UknwEpia77d4CcXk5wM3hiM6UiMcYAapvsTQBeDggjKM",
  "key8": "TStcqDTyVCVZ8jfpgS4rWs4ZKJ5air6cCAmKRv2Vt75f9gGpheKj4ycy3wUBaquxkRvGBssf1fh2XzaK97esrXh",
  "key9": "5uYAcTLm5QQ5NWm8encw4N2EU241xCBuxmdGJvzAk8Rnv6AknQEkijjnKr7jPX2y9ie6TLA2chwtbRDU2eqn4BUu",
  "key10": "5RmS8NnJYqvVU7paNXjMWRzTbrAuK4jq82jRRAdVH8DsNBydWPurNSRXABdjCn8XJ8EkycNa17kE8JUjoEMssdsc",
  "key11": "2CZ3uhwcSXa5Sz1NgjJzon7eQkZBTYfkSAF8DhxDr7FKwwEYG5hY7bgVa59P5xXXG86GzpVzvARpzEznGJvjuNje",
  "key12": "5qC5QYhoeXG6p5oJuZg7Ya5ZkRvdSm243Gy9SjKU9ZvxunF4dmP1gVqbhNqNacX9t6vum45sSi4bwams5nKekWkp",
  "key13": "5o4t2GACU5hKheJrhNqVpMEASgvkSGgn9wLL9PrSD39sdKNkTyBvVfmBq3dHBRLb81AoHoEijVG4tbpW13Z2MdhY",
  "key14": "3Z3jeKjNCiMU6rxHgYX71ZFXtSpps5iAbXysuSWQQSiuMeKgSh25eEPnZ2NeWDLHtUbMNyPGfHUd94syiFHcUqQz",
  "key15": "kzWr67w42FthRWC2FR33C9hYSQ47q4HX86XBTY87XLuqqmeVgvgmsqSb8EMDfoi2ob1FX939Aohis3o7obYFytT",
  "key16": "2byuVgHSzpKCuFxktacRSBZtQgMQ84KSn7v56BUUZadbHS7MwHi8bMfksi4xoqK888KwqUzCEz95h1T9VyvAP8sh",
  "key17": "4SQYSVkpg5ZtTYCNaexuhmLchqPXaG35tnzjNhySoYnMVYpQkc62a64oZHAaDef6fSynzKP5TnHEK6kB56wssL9K",
  "key18": "2uwxG7ouv1tTP9GsW7ApQSm3fF7jnTmwejtpSD5pUgLPveszXYqvMKqYEwoGoXygFyDCkHXQUXeCQBif65fqdomV",
  "key19": "5PaMPkVXh7c6LGNoDUBDSYhawLE4EPZSsQbFhatEXwvXf33ayLDGPdbccrYpmRhkkxNE7AusjVEnqjT21RBVtpPT",
  "key20": "5gNfvvfDN8H3H2wWVDgx4k6PEs4Em6TSdMeVfZHbhpqrP1XHh2b7M6QagXLsuBRtEaNDqPbShmLGcSp3pwtwutFS",
  "key21": "2uc1b2ad4P4rUMTTNCjEE3uw9qiKTGcH9NKwcwKEa4sRz6DwTZV5yZt7iufwKSaKGYpJrWyb4zFhkxwvrL8J6MmD",
  "key22": "8xr2BMxKfCUgwCULXVHf7E5dL6dQrpbrn4FJJwaVzVCCefB3Feacom45yGnVeWtnsVqpRPqWN5FpcXPxM5HVdSx",
  "key23": "4S2ZRiNNrqKaYY2BHVrPWX436wWjWdwLdEfCKbVo9i5cP2FxKVUxe3mMkbuRDfUpo2WqqviCbxv5MHsFPdH4yUa4",
  "key24": "5CiQ3Xn5AprX9quQS348WtG1wjtLikksnw5TRvsSqPTTaTgYk1jD6sjt85eEoh4NyAzq2dq6XiquNZi3JCNCq9kc",
  "key25": "2ozMDbm7277AxH9dLu5Ks8EbtuUwNv7DkfXyuX5JTo1TMMp3axLv2oLqeGcmP9nmS9EPAopFRRVgjB9MB9hTDQVY",
  "key26": "kxizZNuYDjnADdAnvB9CafQWYQd7AX8dfZk4DKtCG4Aun6aUvUh9x1A3w8w4xjr94Ct3fsngD3LBD23Z4P74XKi",
  "key27": "2Nbp5udNquzKLZbiKSRUKkjHtWycCA2kjHFS7BHRkqaySorQVPKUaTSpHnyqXHxDxXnpnW4DgiVy6T2kqri69Hp5",
  "key28": "4YMCxbRhyUiy8jM5rcDKQngk2rhCSdWviMzBXxPoW575CTDU7HyhxDKH1RTa4DnEshvgJ9XkMnjD2ptN2cxYzGsS",
  "key29": "5afqt9yKPJKRb48xyTf37EQZQ4rcJEWbVVm9v7ExxeXvivkcVTN2cA5Hstvi7PpJ2bPVC5EtYqsdi7f4E46NJ2kL",
  "key30": "2GRtNyMuWkrQZvajsQ8YewV53h72i5AGcw5L5wwTuX7GQnD2zDfg1BnjXp8rSp4iVED6FqB477yWQDJSCkVwazRa",
  "key31": "3WGHNcLtxWbxZNkVishz7Dd8oRFv1kLjwNoqY6RFmS2ZZcH96mU5RZYm33u57vXJ3GKiXW1eBoCr1VdqtpHXvFzV",
  "key32": "fjPVB5TCrcFtduMcL9HhKTgXni8BB8fHKzFYFiNxVq22TzaJiZzitgL1MhCFdxisgi3hekwYD3EFkfnbLhxNYSF",
  "key33": "3cUs8BwNawCNJ91Vc8divFg5ZUTioFhawuuHEJjYsXQaNJXjABcCFgXLKyGKZeRWcWCFLw9rE25pMHQoNLaXKisQ",
  "key34": "4inaFTnJcXSHNZU5r8JNjp3PNAh1qcEh1iCYpTcQpDEkaCyRUTUGBxBPsFJTCyPzzMqdJqJSGAAPMqkALcRA2LiS",
  "key35": "4tZjGoWUY92SKke8vh6mUJfDJwY2GgEeWQZEc9JBN3x2kKV7errcFj47pp6QfLUjdth2C1ycine7McawswCKN99J",
  "key36": "5HoGzgJSFSpC5Er2EN4ATcCm1d2jvid6VyJmYo3kawBUrKdpw5YgXofAeqUtSyheeVdKHWCvyC7oeM3JJbXjGRtj"
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
