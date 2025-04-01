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
    "anDngss2uLmRae27DVTnpxDTBzzZMN1bSg3GZTHjDgBVkT8Rjt1Bx1aeBhHbWGiJhkQVToPuBf625n7fTuDG6nP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pFB3MrBLvpdmM3Wg23y1mD5vgh3zvL4MgkeemxGHaCwWf3BuDtYnYqgHmA3uq9mJukJTkx7KoXjrHMavjV8vHLV",
  "key1": "4kY4NpfhB8ZKNTiq5a1MHAkF2xdbLBGk35z8Y8Yk5pehoFjre4mXfK5C2m7m3arzPacP8X1cgxRLijF9KR7mUwAq",
  "key2": "4Ct4TmxmTRC378FRPCx9HnHUBmk4Y9ZmAcb3XMbGQMi7HtjEPWLWHQiaq7rPehaom759Ji69fqbNkvyxn85e7eUG",
  "key3": "3UAsx26VKuDtXfE92ccrr52jHqX895RwAMakfoW8sHPUEknFTmN9waAZ8cqtFYiBJumz3PFqP7jNgS2j658o7zT3",
  "key4": "26V8qsqUtJjEqpK9mTiuUkFGyuEmu4AavbBymGoVMQzVASP8dKV4bwRJQ9Bwwc3f8Dg9RPL8kDr63ByLzHaXUTjy",
  "key5": "3sB5e3EG98Quu4ctopzwP87BZP3oZ69uLEZXhuj71YDnWqA4xRxoXtLWu8mpi2kJT9Qe31LD4pdr6msFunTDiy3F",
  "key6": "2phXTbvGRjPXSgajMywwiUznrY6fmvrEnrjAhxZegi8crCBDpurv2yWszEft9PhwaY6bhkyViVSojEWrAvrDYbfH",
  "key7": "bAMCe7zQrVCcaLZwEnsaQW7PkRSf4iGXPEmFwCTKBNmPiHKVVfAtmtpvTLWnJj8eJFU2uQXhHUEADA2SeotM1JG",
  "key8": "5XQykv5mRR5wcAZjcBa2zgedCQv7LzU5tf8TYMrBZJETEXdfCs3DPPQt75qhCwhNC8tHJUqDFiYfx6ojtGLWbp5",
  "key9": "33yxHP1wpK4qfmepcq9LGoTXWmaFLp523bSWMcJNmD63JQ53whoaZDWzbud4Mt8FZMhjPcPeb5ZPyeU3JwwJMvpc",
  "key10": "4Ww4ZtBd6UNUhoM63BWnw7XdtZqESXjgxZ5JMutNmSFayLWMqj68uhBzMyLeaq4MbuyK4TatQqhG4E8xW7vmAVjY",
  "key11": "5oisXRkqUkVZD1ZNPmLFGk67FMtujGyM1xQvMkgtXuxYXF386rEFouLcV5KLZT1eTBhf1zHVSQ3HVhpzbnHHkWKB",
  "key12": "4FeF63CRvTysP8dUJapSKDnw2b4E9cRv1zQr1dbHBXXBvBXKQEbivnhfUaWqBPdfgUGurH8D13AbJaKqtJcM2qJQ",
  "key13": "nydGkDN9GYrrU2zTbq7uLv7Hr5oc89gsHJvcBSctS86WDUEfjugMov1aFD5kQkUYWtGYRgPYFZjr4m9kdw64L23",
  "key14": "5yB6CKuLyK9GBvwu3VPhor38VqpzmLZGRo4n4HLfVredgetVREX6yvBPbMuXJYCfzQxm6Hmx9WR33reescKvwgme",
  "key15": "5JAjx9KsYh3heZsNqfJo5xBghkhPCNjaGJCJnab8Wi6rweT6Tf9xzCAmRCFrk5DstjgsovqnjEeaPsSPFXhvuQwZ",
  "key16": "3X3JBtfR1zwkm8rqbog9EtXmwemQMCbUg5VdxRZzio3EGuKkXcwyAtJnCCUYSqDzBpLu7kHeo2XUWkn4tXbkdiqX",
  "key17": "5jjKb9C3KeJMeahXTMGYTD1ePwC8KvcvdtCE6JT6SVenXdHso3cWtXnGPGKe6fv8fnPXGaA1pjrR9irNQsyTBtUU",
  "key18": "xhAvnXchc5bnfE9Wf6hUL8JaALiRkaWSKZK9vDRYhHPoBUxe4cfuu3uXxak5TpXTpgKWjKPxZVogEgDPpGUM1RV",
  "key19": "YLMDLs3AVySwFsY69iyFSUTfdG2vAMYHfHGdWAQH4igQbMxemqhxRBB3Rd17nNX6P4bQ8wXeSSH2WDPmSekVz2A",
  "key20": "3PctHNCmQMbBh8XCEjjukys7tKY97uu5QyNMhiF8js6ky4GNWiyRcF6CqUPu7zLig6mXdJUNBrCfhBzXNK2jPDnu",
  "key21": "51wLDWW7ttQ4FgCPJqkNkounekxJAdf77NnRv8exSwGjfwU3ja2x4gBoK7tkvW33k6aXihBAjH3uiWsgeHCbofP8",
  "key22": "5pUtFkqjPSUp4RUk6CyEh7mCuqx5zXe6YnAajx6KzpdBJdNdB9JYXujeyy2gaNovzRdiSqwatksVkoRPqG7vJ3zd",
  "key23": "3K4oqSDzUUCrYdDg9WNbhUTzVGA3ega8VwL8qDA3pnLb1xMb6fjVeZTm9KLWhTEGNGAGgfZMoRj9MAtzh9myDdFZ",
  "key24": "DhKroMonZpLAJVDU3j7mudaXgHmp2bdpdhpRTBDK92mHBKGRce9Uyj5EPRjHFrXbvPsNzijnEsLHKZFBEaFowD9",
  "key25": "4A7o9hk6hWSJiRxhntWpr5Cq6475Q4FTt2xwREUNcamqHboWpof24aJS2jDP63kYbywmcr21j1PsneDQ8HoeRWMy",
  "key26": "3RnvaJT3vdZJdZ5zR6uYYZvimwiq289SuDVWmQo5YHJn4Jj2BXBjrGAVTvW4BDWP9H4zPk5vhYErFC5vHGc6LusF",
  "key27": "y3sdNVU4FBR9ZsAACZcFPmHH9C6TGuYvP1z5BB6cDscHZvaTi4tNkiwm2hLHqL43YkGxm64QkWwtSkLpZb3TnRA",
  "key28": "3zAorc6CXWEgZiSCFfoNfKHyVSM4EytECq9pxurgugqLdxuKEB9WjMgL8Wxhop54EetfPiSBFeqYkDo5ycvRMdgo",
  "key29": "4tdoDVcLYLQLVh34uRTdMRxkJjdRKj77seSAVMEKBch8ucVSsHwvXs5SUNVmZeM6fWRM2WWNkHRstAhMy1m34PVY",
  "key30": "44zFMHraDmxuKWMy9LcRudxzBhy28bUnhHhGVSvCwd17mx4NUAaPtMsqZ48ZxJk41sckiWkZTzGQQUh5GhgJnC1P",
  "key31": "5tvtiGJrUnNvAAkEUJQmCRCVB7CZhNWEQeWAToK31vrtrYafUtA7Xi3xU3ZSoggtgis7zPp3CBrjUjBPvYUEBFae",
  "key32": "35pz7TZUgedexJAbUHDfFPfo22RrzQ7wdmuzTpcweiPjvhft4wwhEgMbpY89FApDbxSHx5brczo17eRjhby6GAy9",
  "key33": "4QTwhKRHwfXEmQkVoqcBPsKGuncPA6aj1bDFwbdqbarxePEhFCv1FLe5Zf8wzsdVTsFKqMowckgiMoS7f4UCP83m",
  "key34": "5RVUYFfb5xvghL92xtgDzVg6dvN3G2QLDyqBNydUcU5HaGBy8CRx9ShzxnFCxvt3qwYqNoDSJnpepUix9btjDXya",
  "key35": "3pKz2CFPJJ99cupWpWw2sw1LbCHrBgQURkPDpYAACkTzb83T4A9Z85xV1Pg7deecSpXzBScx44wSqkYQiw3WEaKn",
  "key36": "FZAHXbphfNCy7WidABDvxnaKDkHwtw8n6nUWffCdM1P9Pa5QqWMRFHyGCbuFJ1pzj9eNvbzx3XwrzeoE43CtU3V",
  "key37": "4Rn3WiYvRBdZdon4m4zNNoDjfPqn6zTxmvMUKhofMLKc15LrPFfbmwFdVNfcRUhWDGFjUXNfkWSQLG229juQX3Nb",
  "key38": "9mz9iXdTTZYCBVNe7HQad5eGBwsBrYNzBxBPsmLX2U15fieNKrCfCprQHqYTxfvh69cP7RfDhjULEdoEnnazdLd",
  "key39": "42YcyZtByQnvQ4WSovX5WUT7Wbtent9tXv9aZuJ8nwYDpyqMHDhwCXNB66ZUfd5MARaGQ1NsSYJkUBGhbEE5QU81",
  "key40": "2th7LnBq48PTF5iotGr4oLhKe67vgpEkrQWP6nLb4yANjAKCK9GARmQfGvYFvJrdZA9nTJxvDYCZFefm8v1Uf5iE",
  "key41": "2EgJ3gKcMS3oChDLeT8jKeirGi9ggaJiLmMU55oyH437i6U4m2HtNxpcQ697LxYFgEzBLBMTFZqR7b4WRdCszbGn",
  "key42": "4GuhCM99hmH5Ao55U6s7f6xLuDGXn5aH1brp4PCnZWR6kKCqcY6E4QYGMbPPzfTbTTRB2TbJnDoGpR9Nwc1xLbwz",
  "key43": "KJUgLkRkyfFAxRPaBcVqYGsrcf7oDAgCNfifHQtgrpnp72keYnhL7oKiXts9PbTym7NK6FPcyakBfQviMaoMgR2",
  "key44": "4mJPAy2fY5M5d8ungqwzHp6nNE5ZZxLyDj1ibJuttBx8ddP1j3A9gBf7d1ovWYYWuKELwjjCoaQj5UqsFNcnwJa2",
  "key45": "5XCJ211c7XEfam4bPDyCy8n7ZsVhQfhYMYMGhGeV49fVk7LocyNAvibUwGN9vqTr3qKXJXh7LaiivyTfSsjH4mps",
  "key46": "3huyMtXokXrTd432bQiKeaLHwJY2fkav4nfL769gUpM8mD5bK48DkVJosSqW7impNfRuZFZw4BKBeSPAVaJ1qkqC"
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
