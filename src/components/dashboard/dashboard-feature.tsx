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
    "4mSxxhBmNzgQPVR2xdNDsQ1rva2pDPFPAM34xCpGk2cx2QYbY7cYX2aHYM1HFDAvLWauLALKjVtBcbVQ5hZjraap"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xGVnm1WRYY4THwNixtwH3NEPda3xCEYbjrjzjbY9kkg3EEtT2fyUTphVrZTYFiAUaawCnZSM58i2iPcEc8dq1rQ",
  "key1": "56BSPKwVTKMJG7SNaZaoMMm9cAb5F36bqXoU2AztsPR8JqmFhyG6FmCU7dtXwNazA5m8rAeyNH2tBZngVrxERoyz",
  "key2": "2QEshygQFeF35zeDdSaAucZL5CqHg1CjYcgYU8TBcQF86YES8daoM8NJzdkTQNxswjJtcw5raRGuDKHNMKifczDX",
  "key3": "4mWXqFEUsiZ8247wK683WZKHxq35Qceh7CoUnK612LrZiiNd4mPxsNJWh7Rm1yozGA3MyqJ2RoDuUxSYkReaoma7",
  "key4": "3ZXbudV4LjBZSDc4eDJmymQpvhthbNychtV4SiLpEL2KfYNGVP24BFNsYDvU9dbyXwS1e95HJzQn5iPTP9n56dUR",
  "key5": "2Y57tcxcb9NwLB9trb9dqhSVM7PVywdvT6dVjJn9vFm3T1xPZgotH6M1RYfVygGbNn4XMQ6HFCCKX8P4FLnHUaYn",
  "key6": "5w5NuHGwVM5VSFbN7hnEexXXw5mX763rSirQciiZDmWs3jbRBWp3y8cDmdgK4axa13UkqvZvSuJtDQemxa65yJwA",
  "key7": "2GVcjAZcaMvrs5SWxovQme5GumXXbDrdcBjFtBfMaUGY3UTETWQzHgFe7n5hFWsiUxyewoWggmDQkp97H3NutwMH",
  "key8": "2Q3UpN4jczqd4TD7is8jEXqswoC1XHufVqocTFKAxPXzEQRWTif2VarnZhtAssJe3cBsAPiD8hqj4YTdCK9SCEo2",
  "key9": "2sJk8Zn6pVg7jx8hNaa4nR1mBAo78Dfq7TUNXkbdbRgczqW36Bz9K3Pp8U5MpVqMbxk8WMgMsN8tf8uexZnV9VKe",
  "key10": "3trwVFMa8hzS58UW8RmHRKd4bTt19q45zSpjz34N2e4eMJcsC6AyBiZdJ3tJxkpEXh1zT1Hm42dprzZptBRzsTuS",
  "key11": "c26UK1FH7SvjnJXHXb2mCmXz4FLH3MB5hRQ2TBSiSzphPT9UmyD8pb98LvFqCCjW2xYx4TA6GHEseApjQc6b6vA",
  "key12": "2fT6mYLFhGQ5EebD91x8VRQThqNhp7CWHPXBCWVojHpzX9EV9Adsvwz3rZDTta9YieUSCL6BU96TuCCE4Hxjq3Gj",
  "key13": "5eDzm2gHY8TEfjGY5xeCt6sjUGuHSrDS23QvyHrsLNL9mLgpHPA1ssz2JKPCLibEmuiauEPNBra8Kk7BoVhWh7cV",
  "key14": "25ZCpcd49orUJmAdDYbvgykvUxDe7bfa7fe78hBnJsu69hxKx9W6V38171HK8z7LemyTHUgJbcrdVAwri8QnPHoB",
  "key15": "4uVeGFrZiUArFkhNZTQNudeEgFHQAg6rnEkJ3MPy7NdcJCVF2Fq1k7se5pF5yKNJ5RJyLYi3sMzp1XAFwkkxnV1e",
  "key16": "4kcdfCk9ZFjGokKKN3M3LdhLELk4UiTuSz9t365YXBYKZPbM4FQzB3SgqLAunEagABKAWGmyH8wZQVGUEovWs9H9",
  "key17": "3FUgHTTqhHbRikTbEFw1jZtPKEMgZXeZMyqNAaynXuG5kMv7MZzdzLDysTphpHebjwX2yvUvcAvoWcH9VfPs3pPs",
  "key18": "4mFtPci2EXLZ56U33ukFS9axoYAyAKeBV4BRsMNpfuvDEup179nPND7YRzCqp6x9jqiar9PBzZLQPtCUFu3XNZUt",
  "key19": "ZcTqsPQLtpakFsGDBUuMunj868gnNutamLcEwhu8VrCVL2oe6AVwLhNw8qHDaPagcS64Fd92oEagvcPeg5K4rjz",
  "key20": "3jbQFgco4dVFkrGVb9k1MUEqqAZ9vAx4frr5NqzXRa74L4FZmpU9Sr32akzsVgkex8SYXv6AJXpPHpe49xHgcnqc",
  "key21": "51RxCtDvanYwAGoc23UiALLakftPFMES3kTNYUj5pbZuEyPm3H2PSopJcQZs66bd1zj9JY8FUVNyeXv5BuL3iQfH",
  "key22": "3sejPbsA6LBGqEjCm3r6BXaGsZkvQ4AXBgC3osL3CxyzXSYXw6CrCtYwDof2zWMqTNayXVTWuE1Vu65vLU2aVGRs",
  "key23": "5KCcKRJfnQHZ67EAzu7jUFPpfZzAif6EPrTDEsFTYzKfYseZG1J6S23LmDzEQCTLQLYy1BacMq6Za13pMthWyTUq",
  "key24": "58TEjWLvSiUDqmkV2U8Jt6zFhXwsQ9jBe3aSqrtAr1N6paMXBhnrzXGLckkGFKZKFgjwMwvnr6SBtk6fZF2PW1PU",
  "key25": "38pMPsfAxpJUvsTgdtpqE5wmEAw1kcZxztHRA2XTzCcVPwQ6VMEogfyhpLQK4T87gFCtnJDGg4BhG4GDgVbnhP3B",
  "key26": "upCHP7Lq5gPVmvRBG2okZ9qUuDXZZrxhQADm5FvTsh7iy45WdVZ5dRvkSakRevdzjw2KWZGzqFk6kPrCzUzTvRi",
  "key27": "3APFKUoAuRpwraQD6dnRwrVQmn7dhzXcMZrobAo86xKVp6BLWsbyVLoJyNho7JL7NXmX5ig3X46fgLe16KHGcfmH",
  "key28": "3K1DoKeZrPVJtnwQ1fnDyN7TyEhWBZsr4zftqXejc346eBUVDNScrL3rHdo5j16jZy28pWruY13vXxVsLY66oYvj",
  "key29": "2ydEbg5knHQwGVcezDHX71fU3bLkughmtgvXUMdfN5MYrE4HmvZBYjJjDvYKJbkZ2b6yxksRWC5wYb5X2K72FnqA",
  "key30": "4J9RSMYUGeCU92pXdWwFJMsV2t6zk1itLTYduHuCos6HqRtZ4Q6T71xxnLqwJozmz3ZTPdGBfu3srXUvs3D2xTWV",
  "key31": "5N1YyP4eUJBsQJ4RPrCxjSMLWWTCNsuj1FjbJ4xX4i81WKnEsSHwKZUDoiwNJxeEcdG3oAefgJSwqCHCLVkjf5V8",
  "key32": "3SWMFW3WMytv4kpc7prH44uLcjta3cSgMR2bbB3uGcdktnZdQ6DzCNC3T9fXb6ymKVa3ZqXYLZf7tZKcgQfjWxnB",
  "key33": "p3bTAsR4LQ9ahXR8zUvapwW64TKLWSrSdx693bjH48KvwGAkViGHi8GsUsEZrA1efgKT6V1ZoFEU2cHFhVan4Pn"
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
