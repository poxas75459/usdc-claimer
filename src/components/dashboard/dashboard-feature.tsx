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
    "9W3GtTVWa2sBUsAc4DdzoVMrXs5dcZkXXUqdhbomU9SmcFniBGWoNT2NL1DN6j6CBPgYwNC1ZrCeFPNtd25Wyeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c8JRBC3uMyzE1nToadgxG8tEjknck3ZvtWdUveQ5fF15jg7YSYaj4UkgMLxCL1mcFBKqUmUAUQRiZgfxuJtbtCg",
  "key1": "qXjT2wVptMdtYn1RsLLPmz1Hm6ZeY22RDDbtYkTYnurS85sLcoxTe3xEPNBfThK9f7VmnV39tRwHz1SS5LsTUfF",
  "key2": "4D33koDrNX6KP1CDjx6rzvjCHj4LD5Wb1NVzGm95xrdc7tQpRgqGWr4ymqR6et8vLJuazRp13AVbg8ZFThvgJoD",
  "key3": "r6pBArRShdcF5yXWyzE8Wj3ymvdpmmR3YKX2HL9Aot3ohEh5jhcd2X73hE8EwsBtvQ8RTYXxracuFscEB9mJFmZ",
  "key4": "27DpMrKexHvTvD1FSfjo9tzjFebjQuLdQs75tbbNNKVzeta8YJ2k3ju5KndfPoaLyiW5P4BGwFjipin2J4XKfM1K",
  "key5": "3oodF8XAi8UTtTRPSrNBxPx5gpzsTt6dsdJ87LYv9DMgm4XE79KytCfG12g2pL1KTqJAUMWQmZhQkrnmd2sUfyUj",
  "key6": "3NCZb7DkdnXXexsmjvqYiQn2N8WR5gjUnCP9buhLTQVsJ32b63kbzQFQ9octTsdqtUCg7bniGaqCoB9Q8ezAbbvE",
  "key7": "5EsznxxZ9NyLDdPTYjzvWtifvhM3H7JqDt2tnbSURxVjqQSZZKF34zCveY1ESia3uC3w7PWGwzYwURRpjMxXh2a6",
  "key8": "rAQBLQpzU52XU5p9dq7EXBkaNSuZkfyroMXmeAuRHqv1JjqqTCttqpcVnfDfTkTmRSzo9SDnG2gDpVy8FHdVSeY",
  "key9": "34uQf4pJW4wiS4E7K4kZQQARNBkQyJbFe3ifrWgZviJFSM4hxbLCFFx5pkL52sjX94i9rRUu78EBGgnjviGoBYLz",
  "key10": "46zurMzkVS8NkTdUEofPrjB5fbzVa1obzYwhgw1sNNx47NNKfWoZgpZbmarJgA5anbVuRTpxAZhzr7KkEXmYaEL5",
  "key11": "4Dk9zX4hrzT2BC8Gr5usfNPteh7F1yEBMDcnhi7ukiePboou11QcGAPDacCMH5LynDS9JqXq6hvv9yV3gm7v2oYd",
  "key12": "3nJf3xYmEHK4BJ7jbhhFMB94p33A3fp4cBXEH5w56bei4XczhSddYFf19fb9NR2YTNftXdxSyxDWceJhnzvJpkfd",
  "key13": "TpcBjqg3QhacLuS39czc8hTZBX7AGNuMx75o5BRDQ3XbsZU4jGsEjLi11DMtSYCrXLtdmxkJueJ3bBofcs1yFWy",
  "key14": "356uWJxhVkQvSsuFHZtmmNju8DBzqzS4QHUHPV3RchEM5mBTZGVU8noD7Bn8G6T1Xs6WWUcTj3XGNu1AvKUrjBo1",
  "key15": "47m4XLofJ2tWybAZJa8Us4hLWAMfgpfA3UBgUupXqdssetjAmGGn2hP6iErHpCV2LCsYw7fdHFcSMAdxP4yVykHp",
  "key16": "4YQJE39N3bNsPLj99tic5Sr7uW3N8nCbXKsCaksikpDCbF7efFg7tNKaMyxXwEanHZuUTtnT7NEMvckMSwpfAxHA",
  "key17": "4Zx9bdXJqc7ZTgz7BxjTZRuFe7jR6vnMQwLZutdYwuxMnvrVauQNQNFUQqYzG839bBVDCMFVXqtgCMPTbyEQvzTJ",
  "key18": "42ke23cg3cUNHsMJQ8UEXdNBV57zMXyf7qdQkbsryz6ezCwKGUT8QQk533cF5pCZpfw1RRH7ZCpg8E9YHeiLXpKH",
  "key19": "3SEFW8tttpXuGNbUcFpGLamC1QL2PnDHngWzF7EiS78wyLm686vZeibavDTiBZZkVPfg71whGZEmTUdg3Aq5zMgg",
  "key20": "5wSFRWRKjWVEVUGo8z5zr2T82y4t9QKrgR1S5EKqL6fsepWnHRn6QHUkjy95dwkyzcG22CrGsLDGw9w2416XD2Zv",
  "key21": "36CFmu9uKohUjHnNj92MiuJ4gvc6bVU3vABUDJQWgwqK4GgGsxL95hLVU6d4HcMqWX1Nsm99MX1vnN4YsGDP6eaJ",
  "key22": "3euwJ94uXfLdzzCdArcfqxXBrfWrtTd3i5P3LQuJbYuGjbX62MdcMukYa3sT8RhVjC8Pou5XwhkaRNGDYkk5GLo8",
  "key23": "2jTev1m3oFXeRvM94o6Y9UoRJyYAprSUVp946KLNNinB8T6L7Rcw2XQ6QzA6umpgLk7rxQXzY6h3zBHybueNt9YX",
  "key24": "3z5zUGS6PfQPiC1cGmhZnwxwGwwxqsmTSWadyiJ6jGU3ETdF6CN6BszVAuKxubiAVVYT9or6yCkUm9nbcDTPaGq2",
  "key25": "42gtqDbbLnPio8ehaKPGjJhH8sKWj9TSAEFHb4jbTzkMnVjLbhJXr11oK9GmCCp1jetPg6drA25xJnx9tPmeANAT",
  "key26": "5HDuefMpQLD5DjbePeHhgeZxHBAfDfdhq11kMS94ECfNfV6KjNB8xZogtLWYib7AMSQwUgFLi2SxwrifpwCFq9AC",
  "key27": "4gMAcVt21F1trsrXfFG18Nm4EsvMfZirraCqVgUSRF6pAgGLce79aNfsfF5Ahdqet5i1FCrusfjuPYQRc8VHFsU1",
  "key28": "9bbRzXqADy1XsxCosxx3VTBBA7ZUNZBkeS3tchgCSdSZQFAge2mF4q3RsahrKvki3UozQ4FAde3bu4PrhA5JBwk",
  "key29": "5EKdMCqKvT8nBLPEvGp5uGbZ8KexHCzt1iWQCscnXbNzK64ccqBezeJgBfoN2StiDjdR2Y1arVfCQHsDdHVaX8Gi",
  "key30": "6STnixhnyrviVgVycMyhMMVVK4eciiPEgWbUYoR4NyiFf3vbKR3HV2GgwZhZgsNsZnLc7T4YfpZv8CQfv9NusCq",
  "key31": "3paVfUjVJQqASvjkGjR5Uz14nx8yX4dqqWb5vaG942PYdbNcZKc3nhi5FVSF5F1AYRApwVr9jpSnoELqLKjQyLeZ",
  "key32": "54QZku8HU7aryPh1RM8SMZbcZqw25VuJjHLJUp7SdWU5d4z1wyxkekAmVdusQKq3SYRwAdNSbbgGLwyKAEZHMZFj",
  "key33": "2xothjgwFX7hQddNxRVf3ovF1fxqo1n8FhPgocrTaqtPU4nq4cGj8phF54zfc7MnzEe4eKwXLF8vdi93hKNAybAz",
  "key34": "4A1uBninVeK7dDiNuYw1j24Hfq8sEvnYtKgywXSxPj4KfjyrLFrQas9MsB3RAFbUTcQbV4bnpxRmXqk6MTp75JKm",
  "key35": "3bCnooJySkRKX8oXPyFVCewT27wQHqWg4MvEnPHF16AQjNfFVun4BphJi6HTnbyWek6f3cBJ9AT9TiTmACt1rpoU",
  "key36": "55duoaoWCmVpTiq2frrhRy41YMWKm1oF17UZPaKtKTDEonqjWvEtRyQu4doaQgATxtMTS3pAcsN7WDTbnDfkSNJm",
  "key37": "3YX5LcTwZqKGVkuJXPJqCp7YMMGQ5VRXJ3dKEEgqqJUksPq7w9DiAdHrYA2RfxLGyufLMvAQLNvx3ubAkezvMSqj",
  "key38": "AGdaPT8VSC4QzetTL58h8WsFV4PjU1ffpAkygJsQ1S6y2GQWWFQ6iY7UabWprd7PJzbQyxg1y7RUUNkSDsxzM1C"
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
