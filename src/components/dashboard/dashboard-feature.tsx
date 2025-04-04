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
    "3tBDCHHSuuqgJYcJxR48RHVWoM64NpTYHxfKtFNhJN1XvXaaLNaBYcZw91D3wFQ7D1zLdAXjnSsUX9uKe7vasZn3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yjwHPGMzNnDEQy1cbPp9HNYY4HyNEJpzofz65ca1TusU823go2g3sCikN98HumYzED9m8wtPYXaMK6UtxkKpZBQ",
  "key1": "3pyeM1qtc1YWTNkynFuEaEpGWKVxEr516vhVbLoNCHUWS7f47Mjor4tynE3QjfxJNTVsjWRrtu6ZTY6nCrwP1QWt",
  "key2": "4WUtxci5MnsACjcS8UdkjXmjUtsCtvEBeRmWXkzZvMfxqPpuLn6cXEWo24n9z9Rq2nVJnYtLMR1XF1EQ1gzLht1n",
  "key3": "3CiLQiNeH1vePHx8Anssj47k8vqRRHdbgMXxBhdKEWtyVL36bPafhdCczq9RypK6pGJULZL2SWi4tM71oH1XGWds",
  "key4": "2xATTL5BWdFZdUT8AdHg9Ekzx4Rq6P38q8PYeTrYxL2zmnbFZmMMNSWa8VBbPhMtvQGo5MAZ2CXKramzEbv4UpzR",
  "key5": "m1v5bnwmBmx8bAdAwidv1Gf67xc1sr4WtiXozMzXZjof9o9vgHpbiXNomVcR99nabyeYZVK3GCddqgZuaoJyJf4",
  "key6": "2U4viKhFQWu198oim9h5CdE6YVxxWng32mbR2coK2Dh3TWK6zk97KodfNQf1gL9QKjqP3nr8YG17zmHfH4hSmTny",
  "key7": "CPy5qdzdpMKN9CBJh3zu4mSrgqNFMfgQWFNtf58KQWV7kJdb6VJ5ChpxtdYRi1Zzia9pL4sW3PSfUsztWDybfXz",
  "key8": "LLitNG8TMMLbtHQpZp9qCcNVf7MUP2P4KG93oSqDgmRb5HutEqHf4Lj5PnVhAbU7orAHoeJ13KtjgStnQXatyLE",
  "key9": "3UkYi5qKA1b4w2eHAg7bBTr9Xd3HbVskuvoK8Lwic9kYRpMV135PVgS63iEuUTfPdqck96yJjRFmoub5dFZHARF5",
  "key10": "4MDvAsm6d5G9L8oEN3XYn416ZDiip7tTMv2xe73xbStVGDJaJu8BXXeK7YobA4gR6tHA6Wsu5bpVMR1P3PnxUJbq",
  "key11": "2r7zB6TiSdMKZk1b42CoVV91TbSBvvLnLQzAvE13WEMSf3PYx4gkjxsJM6goZnmhpwR546G9qTwG1zTy8RL3h8Ei",
  "key12": "3wbPrp4xAVHSLAxSw3W6nCs7X4TPxfPE3taWZQoHz9rxjiZbrGoeYApJygTk7mu6CYjHaDAW3gKysi56P3L7a4g5",
  "key13": "5ZnRSG5kjeAnQnmoQvRsPeq5WoTCv5rVrBywZUp9KD9UVcBgv7E8KmiF4diyBtiVxihaeNxB2jwdCy73Xfzobjet",
  "key14": "2u5dWyZmApLrBRKA1VbNEVtguKUxx7NRmfF2VkQ5a2jR5Arq3VvPtnpUEwL2oep8EEsWPe6WNtu5CYom75yba29D",
  "key15": "4DbWbhVhMWvUYmeZTiaFWVbS3uwJJC8ABHp7wd7jkZiSJG5JkshWixMciwQXjcBdTTre4VsgnaBwbvLWzxn77syE",
  "key16": "R5oW2jwC9tWjXYF9QYqFhnJJ9j6S6vtu7GDVFfJvv78EHhqS9zsxjQr7bKXsQVCaKJuz2P6UjmSycEnXBTWhsS7",
  "key17": "4vDtXfBWSEKpfncPoeNUsLGpu2Mgp3KDiLCTeVSwNiQcPiwtopgVDvJfAmjPfH8ZDEro56nzaUr3SG7K3ycebtJ4",
  "key18": "4cD91nqjWdSwQhqjaj1LfKacP84ZxNaZAFeCoNThsBE4LbE94zX31ih2PZu6HADtcWfnf4icBVqCMUtZcAqK2Btj",
  "key19": "3zDNBmfPMik8jutXRXwFhnP2WUZpivXhh2t8LkhCKx3GGCgQKL6BgX37fURogVVeM6gdRKi7eVhnKwaxJPYfEHSG",
  "key20": "3ABQ5n6XTXx5vBKYWrH4QDM5zKgiknHPL66i8oZZn387sxPBE9psE7d2niigMuPh8Ugzsa7ij2QgHxwTzVa1yeTE",
  "key21": "5wcFLUfjwSXzVKesxAEE16N1UaMo96zaiw2wASmQJscH1LwKfexJ2yZnyqboABdEADaK48LYFsKXAYGVRiDmTEz1",
  "key22": "5Pr5ZfdKfncByUHUBhubjyqtJf777yCzbpRgdxRZU5gu11vvgjSgwuHm1CzVf8P1HEh7SRcMunDpeMAhMzA2EpGz",
  "key23": "HeHU8hNB3f3DRvcqh5xuXETEXok3NsMrLJd7LJsz7AnX5HUtRoMjwXHoGKCgMyy4XfAXHMNcQ7CBWJL8niYYUo4",
  "key24": "23YKAiECq8EEDeDeq8C5d8KrPzcUNYETv1bQfmxYhxK8Kkog9AnQo8axGJqGX1Xn49bxBYYz7yDXjNh6FAEKMCuz",
  "key25": "2YA8nuuxHZNgAVWbJF44AkwiNFdWcWf6N15zGxrvZWV32CBL2iMLXTR5KXnbuD2JNjKQjSojxh6x5G1nrYtfuapo",
  "key26": "5ndgiTkobaEmrPwDXVr2PQwEtWF5hgU87yShP5M4UHYS46ZGV7W4UMEeazfDfM9tjuAfpfzsNF7wz7tQCzA6uEb3",
  "key27": "5hwrnQ3Bcr2SpeDLQhpdFuKvzB6s1UeqmM4vUrbziS4W9WgS52urCKs7UikmPXctbe2awp4NQJmJKTVAzwEY2WMX",
  "key28": "2AocqbiCHeQgq4UogV97neCATfNCkEf1vNXp3XVAqMzrB88HHo1Q6WWTAuux9UwHRXSKNqrM9iJ9MRFXKL1jPDsz",
  "key29": "4WChdi2ru8UrZfvmrTe32iVKzETPAq1VCYJQQAm2jKfSYNHxbqxu511sCP3NZv1VczshkV9CKrrtLvgVdfsHRv1C",
  "key30": "2gDkxHSwA64vEWipSX5qbSnoXBHUibjJjxhBZ4Gm772AStsUrbsUKQzuZL9eEphEa4ftGe42KUfCUgzvcrdyDVxw",
  "key31": "DA3yg7qoPjZLGeYgHBoVrfcWBBuecge2RUDHuPdS9grz7KjqChvmSqLcdhqfS3k1SXatitVCjkix9GbywJXxXpN",
  "key32": "3hfL4NDC4Syi2enkBVLPiNrH7YLKBrqoKUSYNsweYhntVQKAxbjaGQ6GMRrUXBZsysi7RsoT3KfYFotqjuTWuw6a",
  "key33": "YrPvA83szFzFQXLMz2Z5AX6c1PZgr1SwF7WeQyg3BUfMhZbXRkvJDbU2XbfwHhxaykQ2URzLnjkJPZSPY6s9JS6",
  "key34": "35KVstBWHu3T2R8TwtcrhJmuMDrTdoYnnp1dF4dfe6ukYdDUpqZRpfympQn2BkGPPAWTgudtNWafng5TL2FHi7iT"
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
