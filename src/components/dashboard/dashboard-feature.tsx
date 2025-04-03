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
    "RShnUwiV1CKVN3mWNq41ydNAU63VXBPoTieiLmMPxmurVRKqH3z94JNLgTYcojdrSTegJPsY43eYm4YGwwnGt22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HjDxgSmTTEXt672n4W4LFxXHxwYYcfLYKpdAqrPnCNijpgJvTJThjA9QXqGRaKdMsNCAhLc6XM9PReNFA9grtJo",
  "key1": "61dPgHHQJAWXj5nsLc7zLeKy3YawTSHhCfv9e6oiwxPTyGv8wM8T5PM3J28sSydSjcR4C7qQdtN1vLRcG1JfRnv7",
  "key2": "2c5Ubr44ZDyEJbNhwwd6vEXTWdtnQhXBngHxFg43YwwyLYgCzN9iAJRkySbAEYxNjLCA5AsUdABp9HgvZkXBsMJx",
  "key3": "3b6AuJYoQDBFq21VhY7zz9vNcfcxE8FCncSvghVnvLifmXXjSRs8SM5MbJ5G7rw6kq4wg8ARoCcoiF5jCdUXtDQw",
  "key4": "346dCDjV6fqHWbJR8zVZd8hEu1eZtsSHApZ4pt9rNjdLty6dkoHqSQcKkDMCJocPvyt7oJVGTDmV1546PGmYBjni",
  "key5": "22uFXNXtf3LwBhnezhA6WvYgvc9ee1drNUDt6NyNeXgAMgpqnTqdGV8pvF5MNaVoQy4YGt6MBXrTiwS9JZq4boyo",
  "key6": "5PthKKBcfRB75GhRLwCUKJk1VXCE5Z2CJ4jiFe3N6Ndns26YNFRANTEy3HRoPknhyckanCF1Je8Ur8mwFmGUbino",
  "key7": "FnA7kQR4BJhsBTDA3pNTLZ9FR666bGV5Uos9dPM8552jbEwUB51t9XKNVCdwwnxB1y5NUnpjTVM3G5GnX9RACaU",
  "key8": "5zDjnvbcjwiNzoagxMymvjFwvmW24m2vWDbhbNXcwye4uskGK9tnxoyuPwPgv7fDsbs3E39K82Cty17FQ4ttQNvY",
  "key9": "5KCQwAdos41n7vsh2JyyCCjeVo2NBd8vnk3CG4t8y5TF8G77HLvgRgApMmDzmD4uA3FnBotAuLwn5SqoHinztWbL",
  "key10": "548Nrh7JorMBbqE6PCaK6o5NLstVRjaEGdWAnawXvW4cDHDfoNLj8GqcaR9JR7uUXyf13QUCPi3qqvo5jGSQHe66",
  "key11": "2aPPyNdNokTCK2HBu6pw4aupHmP55CeZ1r1mTgqUwe8UzQC7z9cGSLLJ7151ioF3e953mzMtxP5qTqHZZnWMtTAF",
  "key12": "3U9DduEBHJm8E1oTRWs2oeuy1U2KgoUhqtq19b1ZfuA8no4tGN2u9KQHBix5DQAfTPoajDPQ48baAP5uFH2RqxQW",
  "key13": "4H2ZZPGQxnakQA4yEoL9Ts9iWpToLD97PHJuHAFdXtS4dRfsseu1LqNL1DNM2XwA4rvjqC1eT49GAR3gq4317pEk",
  "key14": "4BhEzDVJjZtZcsNo25ZN7phBJH2QxfgwYgYtrVA39js141Nt7b598psSDpSTUJviTtpGgRWHkLa1hsCCtAGhJTUy",
  "key15": "4tfgBprrLT3C8RfGhYHX3DMzZAdo52LW8Whpn6SgMPFtdtq962djXrfQjNm9LUt551aWKDvs3bZTNxJzMBTXrEji",
  "key16": "2zb866XrLNUBrMpXjjFab3NLYz98JNW99tnmEpEPrLnEgr4qH1jdPEwD4m4rTbkvwkqV6k9YaECQ1jtTADRXamEX",
  "key17": "2o5h8XipT9KJsFih6qzmBDdYsBwdTGai8WFkfsogkjdspqj9ZRrnKn4XbwYJShTRmvFQmHuedgj4YMS5wXU64t78",
  "key18": "4tx2uL1Pxc2DfWcecmykd8av878VC5XxbPB66a6PGUsA1cuFK2iKkm1NhNixq4toxm4WaGVXoEiYWmBxySCbvL1x",
  "key19": "5mPbZJES2wNSmkpssaPdiqsk2mmvXVmffrDiMn5MyCt5fsvXnaWRe6JkbbUfGTweQHES29zBM7qxYtnrmZ8jFFdA",
  "key20": "4qSpLkPfj2otECkkXSWfj137YeffdCS7eg13m2jEdvt92q3sVqsgQCz7qd5ZbWY72DAC2ZFX67WAwuN52FeS6AAk",
  "key21": "3NcRCL23Ze9L7ryLjgr9o5M8vjRr9nsjtR4L4k5D5RRpu4BSCg3SuBvythgRBVdYLisoBTRKoFJh69sPkbPBXWVo",
  "key22": "3r8vvb668JpB3abWKBg7MUGrwJ2e7GhKcMxUU2FUXNPm1rrXXPzvAaRK7Q2Mf1PqANhXgTTTDtWY8yY6KVBMi4ph",
  "key23": "4nPZcCDM541NwAsvGfwrmSuBUvVoEbULvp6aoVy5KGYkyQf12TFYfLUwbfam9QinBxugHRD7G2p5AnveTcQXEVnF",
  "key24": "5RxNQzqzSFfvDQygn17EhiKp2fkQDbf2tcv6rWfF4FjWWfw8M5GPmisFeREQkkdBcKbLvynQz1z8W26DZpmbsxkt",
  "key25": "5NpGaBwJguUooz3bDQSKfq46LxKgC5YVGEEF51rE68L4Uu7AEN2iftDWRLFcBPTR8ZYLrhsEMTj7TQ3oZxg6JjPp",
  "key26": "59mqxjCWQ9h8JD9d73MCjZs8LscbS9JoQEKXWHZBVJf7LVgG2XyHn2QVFXHMhRi5CtkZvE4v48S9XYP81gA39to",
  "key27": "tgZhsS5uqCT8M835K3kLb1DtFZCBjHGjzReaEZaPXKXNzevh8vEPswuKvw8jhVkjSuyrsMVuNrovWfKBomrXnMU",
  "key28": "5Y7xBeWSW7jgdf5xBKuDz7qeQfVNUiEb5cQgVNLkQg4sZxP3XZqwh6bdNm5Hgra3CaDVw1gfEsZjmjFuAjM6SNA1",
  "key29": "45mQYhzb6B7sxYsnmErNkKczgBoCLcmXZK9gb8YNpSoKHhci6eyV8E9fE8RVxsM96sTfz7N8wfVrY4Fvfdhhd4PG",
  "key30": "yqCnwUVHKmrG1cT8L19vqMKPCDQ81FwverkBkRKEofWBRMqPGvhzjobnsfjqUCSb4RNQSyp2zd8ue1wp8h2SY3X",
  "key31": "e4w44yhE9wRPicMeZQEKXVWs74vezdSmi5UfWdL1bK4tHq8NDiJ5X3GpGJi12f9LYLy3tjRByGrep5zYiL9oDSz",
  "key32": "Hggw1fjwr2R3AJdd9UD3VN4ERE2vrv2LidEfYtygvo17HiZn54QDtcQAz4rRVLK3C3f2JnMGpravhc4e1jYy9Qw",
  "key33": "gMXGXWFPwcrZff6BkbzAGYrRkeWUSJLemvRVsWPJ1gJjcHeaZaSLR6nvK5FuMiJGhXkPUwM85RVerGxw16FgFYM",
  "key34": "4hASDGqFPaUjrdZeCwn9EjuWuFFxt4ngSWCkr6ADnJpY7tQU6C15n3EsyeQjUjCY3nA17e7GcoyqNWhybrTLWbmV",
  "key35": "5UKba9HRXi9ZaxSximHFLsqDLDKWjvaANXaGau4k7nxcBWK2kbQ3KZmzkxcxBNVno7XMabYbWjTzq7rWxaAXFzLh"
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
