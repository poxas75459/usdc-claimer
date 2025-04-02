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
    "5v6851c1hrEkPYnXfjRypUfCxP8fusbv2sATH1gCxGskK8RWScTEMrb7HeBiGUrNev5Xm7chcwCgBAx5WfKg1JHV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rXEWUhi4oBtMpq7MhFuBCkY65vwMfvFSoRCLLMe2ffirbpXHXBdZJT9kCVscVuXeoUiXgFq3asf4VbJfhnWcbDb",
  "key1": "5ubfTqsWPSs2kkZy5jXDDdEKARdSvLta8AfeZBMf9MSfBWaTgjZ8sq9SCquhjKkM2T2mr4Ab4YJLU2Lv1gNS7x4t",
  "key2": "uL4cdU2qSfKnYBq2tEUptwhSf1CUemhjUQH8nAAgrKfC2atifhygJCC1DjzZ4u9ox14dZxmkceuCMSitG7ooeoT",
  "key3": "2NruZDiCaSxpdc31nk5eoBok8pdJGnGjE65pUc59i9HoVptHXhJUBXK8RQwjLJ4Uwurpcp56gtwpiWbaR4HAfmbm",
  "key4": "ZXuokG92LgxLJhLgNDSbKNiZ5iziahnpMQ3aaPnKXyxzy9cYBZgV5RAS1LKM3DHFP1sjgqoYPvCrFj5dMCD5okU",
  "key5": "TbeaEKU5jt4v3DVX2CFVPfr5ZxJsBQqYHmwaXC2kcAVRQqDjYDpg9AnM2KtgDUJJvo53XpsBLHc1F1CmXAuybMp",
  "key6": "5boyU3CYL68jJsBiLwFYt9T1x3zoHFwFDNky6mDmYFZiJg7Y7sLDcggwaJpQngZPLrprujhDafWzRk7utGAzA4zQ",
  "key7": "3gPM66yVApsPnj9DoNErns5SXkmzcVKLodAod3bC21RFmsU3pBN6PJ1QnoP6aKubvvvhEUTAZSP3Aq4tMiqmCmN9",
  "key8": "4iNxjTbBTTTNXuZCHLzQwRejX9FsALNngUJUXZRDi2YVRyKXKqvWo5fjt3n4N2fYapGyFxNyqibC7qiTXas6HJrP",
  "key9": "3xFPst88SAhYEosukYwdjokttBxEqf66YQ6gEufLaG4zT5MndY8eL6V26hxz3aKBNXYXerykrqzzwAKqxb68TqWh",
  "key10": "EUBFQTq1mxcVzYWdZvuLJJWhAACJ8dq6W7Sv97LSQUFQdMRfEp8v6ya8ZGzAMiKKmHjxiYhyNKNxCDb5hEBDWTG",
  "key11": "42k4t77qCqhNpXiXgttLnyCy15W3LbB4bVEYmUxWkLEbk9tZVprcMUX4XynMeyf6i8gpbHLYvWAZiungSYAVWBrQ",
  "key12": "2c33cxii5Y5EA9jAU4RZMRuERVNXb5BnVWgGkMVQpFDjQMr9VqZ3YebFo5xn32oQM2NuZfraznwu5vJ4GsTyrVdh",
  "key13": "3z8NUL4c1Xko7KEGe5qbJwZWRgX1pVM3SsJwdDztocBn7EDavTLLMqVkYnDHg7m37hc1LrC9Ch4wa7bP72BQ6SV2",
  "key14": "5BwnK67M1g3Sk1MvDUHWpNntWYhqvdhMS15ze7428LSdgjvkfUoJVVVryFpQTxia4Evri8yeeSyb3Hq44fh6B72N",
  "key15": "3ZhxwdHcLe9w95soJFioWoVmaq8EFznXguQ7kFxd1j1d2ithLz1Wdkwibb14DvDVA9zPTjdVdCXFCEjs58H1WeKw",
  "key16": "5VmL5cjsy1PE86ZzNUTnAcoufQSBrCz421JnWGWF1CdtUhitLfGvEfCnJw9PrcJ1W6iU8KNy7cXwPStGVMfEg4qz",
  "key17": "4muXPtydaMfmdWrizwfeeWZNsVhmh984hzMjN7pum8h2dxUNkwQta2xzNtFsebLJ8KDB8Z3wTExEZgQvpvTdXZxz",
  "key18": "2tZYLksk4qQL4nZ7JvqMoRcqSVL8gmmc9RrhZTqY71EJy5EDN4FuM6Q1od4HWSU8JHJK8E3fm1nDh7iEiRtDA8Lh",
  "key19": "4kSEyKRmJLZ7fiwLDisia8r8QXHfQvpTSdkPUgc8xQnXBwLyoWQjuonFP584GJ1mrAuyFRWkV2JubzaPr79JKs7g",
  "key20": "2zuq2sgnjAP1vMrD7j1e4nyfn4bAurkYjrf9c2s21UxNLFFEMHjDcjfmYryTXvKGG1bvWYFhw2UtokhzWyFTPfaU",
  "key21": "2M4BR91Mk8jrzX1U9VQSDJKQkxcx7FgCmyDDPmLCFSjBsnGpvQjGL63vNjJFeSgKQwFBofciMJo3xZsxENxVC8qN",
  "key22": "5S2h7g6Ya2gX349vra7Td8MAL958PkWoJpBvcMToANdMfpg4o7Sx3sevm3XWb9ncUuiMCrAQHmiFJHNUPWGDhazb",
  "key23": "5918mtC3RM5esxA18VS92RXFNKPdDMQ8dghRJt26PxxNdx4xhkLHvGz6xujaySJFPRgq9DSeNPSz161dFjot2aLa",
  "key24": "3u6UhdKYurauo8ZdhTx1MZEG5Eqs1sGZpdmKp3GcbpDTwy4anyJK6CykFrtkJkNv9J25DMALcxAB1a9s1dezBS9r",
  "key25": "2XQcCurCoftbUPFLyABcruZCNnvEYnorv6GEUo95RvXCugGpZ9REFZunbH2muzWfyb5rV4shSmpU5CnqB7DsGgC3",
  "key26": "4AWUmvXQjCYW24Q3KBBey7MKvfBEt7o9zzpsM9sjyEnQQ4jdN8ZPUbN4vN4jbrC1BxRAviS2nGGGSqbu46T3YcdJ",
  "key27": "4YrrV91LuBic1Vg34D6uW1vZWY9j9ohcbMRXrcG3foXGAkARpPk6GssasdPWwt5rJwyzY4zVkJ99gQSdNneacZV1"
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
