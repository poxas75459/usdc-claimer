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
    "2gv68octCVwk2cyoqyuMPhgGHmAzyXUREQ3BawUY66KFbW3yEmwgtFhfbfgmmGNVutn2x7U7i7som8Eq5A7EYP7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xndyr2HF7vcqBAovczwv2KScN94RwNRZjfHAiouUMydYPzdFuYkyvvDqBN1STxZNw5hjZo2y9pZsfuox7Ff9Noj",
  "key1": "2HbQ6BQNZKbcHQLtGSk8zKYEbf1C3in7XmM99fZueLgUHK8UswN5abwTLze9kC4CVkhKgKqFJhXd1vQqRCjnhkwx",
  "key2": "58nxrKvayswp6pLCFZ5tmbqG5PHwX7GxbhaaE86SZPwkR9n3LRuaqsV8mY8haekzkkSytXN4DdWd8dx5uZ16cy4i",
  "key3": "4s2whThQgQymK6SRLCjfkLvXn7BSMmXeyzMVP3zf8mAoTEcEgnYfuDzgDz4Y7iipUe4VyRTCM4qggnVikLWycywd",
  "key4": "43BQUKDqiB71cDby1fkRfkUmaur1YkHPnBEaNwmCU9PzBtUCbkyrYm5W6aXxjDxVNpuAooZtdQseqkaJdstT9iFV",
  "key5": "5w9MjSz1zpQ5Yt9STqhYhihP3Ay44pEGA5xhnnDRj15hPq6WwpbZNkB6epwd9QJubn6JJ7GEJz7qkEp28UqD3frY",
  "key6": "k1uxMJv7MpG9b8o9XpNVcucbcPajZMHuH3NC4cBo9c3EVZkYraheMkYHreDyCgM72QNaG8FQ5qfiPc7DEnoDWVZ",
  "key7": "4Snc1dkz8Kt2vntVu6e9qDZqDub1SD1kSJ4kz8w8eqzMj7nvnof8T3aLU4yTaA75MXkDJnYpa2Su9npqntUjNhs8",
  "key8": "2vmpShchbvJpwhjEjk9XuDGQ4n7c4qZ947b92onXvmQ7d3oZhrbG8DeJam1nZ5ubF66TDGEXNFye9uEnnvo8SqW2",
  "key9": "4GxkeXfSnnKh3yjY6fn9P4KoxcJuet9cTQxx4qtUbM1tX1bqrjsNcH8JVevrhsw7PA1RwQHN8hqVsDzGgsjUPwi5",
  "key10": "5G8uiXQkB4fHF9cRdggH4tfpaDCsCrDqaUDW3gUjo3fNEGmtnjPdTXeW2Gd6dPcgAMCfet5cfJQ6ikSu11DkemXx",
  "key11": "3bLGeGjpCK8eNLDLNbyEBg5qcogiUvu8ZxdkHjj2BNdAXFAZR4cXqPjFQHUMkRMtYiG9o2DE62NNEY8K8YU8mcan",
  "key12": "5HG4CSibmGsbfsV4TddMpMkFscEN9h8gfLqXqyynByXG3sYbSMsd57avF3RMZxXX9HLMyX796sRrpZMPvbfkAw1L",
  "key13": "2xbYB4KZqG9FuVUu6M8xxEawPugdA4ThPs3D2eLKijjjfU3kSmmszN9Y9haqbQYaTCNitoQEKBq36y31kZPAtF38",
  "key14": "2BD6gzjdXa7NqY8cxk5WEPiLAw2eLDESCuYfvTD9AGDY2NKg7XhbQNBtWJkCKZHLrN4cGv4AEey4n851219C24yZ",
  "key15": "4VxJyQzDNWpsEugjBifARPJQCzPNCnpVkbq7MkeZ8UZoHEjtwkdMVWjLfw7gCFFD4FBhxpGhFi8w8xn6QygHZKZq",
  "key16": "4r7WUfYAbKwo1JshBSjug4Tgf9xdiTtNh47V4m4GuqCjevSAaENoVHm7vV9NtvTjSdbY58m4S2U33LvVxZjCfB8w",
  "key17": "3kok1aEQGgbdUhQx6TVu5Qf1LYW55WQr6Tbhwb7WhKMPiNA5M9QhjLibDYdp7JDTjUCfx24XrvfH4fhTaDrGB6Vs",
  "key18": "kHx2U9c87ZEuhm9X9NhzyHkB7JCDawJWx6NqpUd2w2e5oQ61kEnKmmDLiBHiCVobsocCAAGjyHeQJ21BcKyFkrm",
  "key19": "2yBY5vSiqyseaotMoobP9pFghw4ncW2FzmTbd8Tyy3Un9FTHn7DEsGqBMtAeL5JThjcartTsGc7PWB9MTez6hT95",
  "key20": "3hMiEtGX7dktm8W29Xid1NKmr5zeBMGVRLX7iKXqZ6vWjvaEPrETbkwF9xkvE5XnyWxsUgzwZUsCeuzbKhD1ZB1B",
  "key21": "5trjRAPKCpdHrBTpiL9QpNeYkWVSkoB11szzAvUncrATr6EJ9et675TvmiUTWqdEK2mxfA91vtrr7oPfeZqB16UM",
  "key22": "32Aub86Pv6jmXqKMriz5wyBh7oB4jKvMrfwsDceuNXMpi8uCaoTdjf245gtAeYactyVtLJXJySPPKv1dJfoWVSVX",
  "key23": "3Pjq9oVvo6aDfoSfE5k4LAvUvDGbamHAaxWM31JVMBbSqTxbCWjzvt3QxxdddrD1EhjL4xJazZnHeVNZBjw7Y7KE",
  "key24": "rMnGN7xMvqpFEte5rcU3sbvPS3m64Dx78h8xSPs9mwmztdA6fGZLpJvcXmBXg9uJdfbuRPZjPtmQWKddTUGEHWu",
  "key25": "2vVX6bef9GePBrngvXradUTKwqS7G6i47KhzConBcSdjJZSiTb3dbQu2iw9eWMkVAJ8jzKbSovgH9FiBF4KLq4qY",
  "key26": "3QhDrU6DGaaPHAvNvDjVqjJ5AHzFS9QSSiXYFanAKa1y6N33krQwT75AfYkX7eQQvCH8giePqQYXkhtqkykzeWqT",
  "key27": "4mZiStvEmTty9qiCLGXP7Hva46bv225YzCh8G8UYgq6RCTqXh1T3xfJcWEE1yVm9gSV2L3WkspRu51LwPGeHPwdt",
  "key28": "3Bx3iSspziPRZV8428oiPxgyMJc3EMxfwKTKkBBgzqpSREWxhcZBPF2UR2DNhJv4eMySe9qdBST2irJeg4PKWxCB",
  "key29": "2R7LacjdiBB4nGu3Rcunipg8QsuczRVXTutuzPGrSGeLN23cqVv7FnCnU93fGyAEBSHSkMa8vRcsDdrYgY3JkApx",
  "key30": "3jbeYbWDbz8Eg3SfxmXRXFBQu9WwR9qHhRQ66vjrYryE9y1WWct1VmNvKuHBbmxuvexu6QmT8kHiYCaN43b6MX7F",
  "key31": "tXvrba2eJDrQVog7hf8VM3TYPHXbNMCsSqrDyFpDWQRc9qKK9UqS5JYzdkLhRDmFk3hUxmNcexeqPCwjGtiRw4E",
  "key32": "2qTDwSEqR5BqoDG1Qh4uNUrQhNd3NdhA7rjYpP5tpHU8ivsSpx7YoVWnLRwDHWMj6SbccMXA4cUXFne4oZBuDMWp",
  "key33": "5hFCmzYnp57hQTGWCA2cWLG7jbh4tqDgLoLhZZ8bYFjwAA89kduqEKdCbJiosURzND51fAMSCtPYHGkdJrcRXf1d",
  "key34": "5vH8vYQcyUVWizqdwqjkHrjijmPdAZPsnFJiFpdC6faRs6hdDAcUztFeTtLTp8A6jxm2bLVvjSA1G2PZvgGprY7b",
  "key35": "3QhzmPmRcShMcmzk71bVKgsdwo4LeNeD68QewAR3uY7GG1YmjRA4uNuCR2rhDo32Eu3UE6toMqXBCPNe3QF2pq91",
  "key36": "5uFwTyKQs78vaLtzL1QdXGHq4bnwoxJsvKjX5UTvjzT1a8f4LyvrfFMVv4hTtS8k9HwJqzT7tT23emrZL74hfqbF",
  "key37": "5q7DYyD9CEJL1WqwC3vDKQgw2wvCrAN961TjPCQ4BjB9vi393D4nzZLg6SmvZzvdMpVbcPT5T3oozzWUCWpNcdsb",
  "key38": "3tnRKn4fBWtRd5GeD8YDW9KZJnmoKpBKNXSeuaWjkj1WvrjRzsnWnSXkf6Hp8J39dCx43FdWYdDneqEQ9BMUv3Lp"
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
