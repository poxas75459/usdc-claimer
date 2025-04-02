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
    "4Kyje8Kjj4yTu9LvKCeFGwKoeZe3kagEQ31YLtqsRHz3tZ6GLstcgxag5khy744eWpJC72gLCQCSHcVKNkPsDUx5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwcyDSNQiE2gJR58BZzfUjMhmVJRgvzzhaoKBXtUmpitKH8BYBjZX4kt2bJ5crwhCbo3qFS9KmiY7EsVokqxFdt",
  "key1": "5ge4kj9Qz2eFDEV3ehy8EdomvsCCy5qPy58CRUX96a7iUv2pjcDdNawejNs1qhjc4sFhv4rWwTFWrGCPomwb3MEs",
  "key2": "yXYvZLLN4mwrgNjJwkbUh93w9geWqUp2wYQZheYwjfQV8PpZnH8AZt7xRzJLW6crjpkq51zcYzMkGgKoKkrst6V",
  "key3": "2eUwdms4jwqnsF2BG1iQYtmsyjd42yRtr6cdV9ZWP7XY3M1p2kLXEmcFubWEyinXVsSYnQBWFdHExtn77n4Xb5iC",
  "key4": "2KrT6zyqqck7GnWnvhtJX78MEucqwm9TDw4zrTNAysfxBuCypLSmD3JETGj5ECwKXHnPcskPAb165QWX6BYzkYdD",
  "key5": "4d9hxmhXt4J6UPeFEcqXURMiXRodx9163VPHe3QvkmLDCzE4HnD2BzfMeEHrpTHXKzeLPfmFUn2C58XW7w7JujGL",
  "key6": "4dSJUGKA6szK1uVvHJV2KBdndSEf7ru9cBzGHg11ARVHCJ3QvVrQEhavHTrg7EYFPxQRnhXVjBL92nVHq9q3nHJQ",
  "key7": "5X8e14bDmzKev7AMhhiMfJencbf8qksTTSdZvtKEeQ9ctM5iuhtHMmfoCigrpU74gkUFi5pmsQE9cH8oBSsD2NTL",
  "key8": "yhFAChqpjw1ziMtbhJ5Vbaj4pW6WV6HXtHj4a6yXgyu2KVKDcHZxjScvpV3BJK2VUiRZy5d5NYHjRoBJrH3PZgE",
  "key9": "2P9GSyLzKyf5UT6UtWwEtX1oqB1V9u7W2g9fngzNHaqdhjtsgQ3m2HTEep8Qe8zfCM5XTkYKaaRqGpRZC1j3rcSC",
  "key10": "37szzNmCu5RyqAYvcCfSQXhg23JNSmK84CwtCzP17tRSAXqZoqmacNnZYQex1xKMspNPpJkHwaXtFrSbnVLJ3L58",
  "key11": "624sSGLp66K93HWTXXBKgzbCHW6b2y4GejTDNQWsVsWSoJe7dNRNYG9rsDP2QL75dCqmMVqwBWLQRYyFQM39UdKv",
  "key12": "oLq3WnaoY3MJZ9ZNkafVEtb9FFmakc9JHZV5GyHsifNn64cMZRD58iY8zghP8zZkcEcKyamnCdEs8iEn3wZZ9Eg",
  "key13": "4n6smpT4tEF7avxZRf3gGvF2G3Y2Evoo5e6hMBcV9jo9sLERWd9ZZLr5qWPaU6t84ujQ4wyQQCZVbTDMrbN7egJG",
  "key14": "4rp7wxo4GHyQQmQE8X8821NKFZWQSGptySBPUiHTdr86EMSZoZdc5rZeQ2AUYZ9ze2D5kSNBmEgJV2E2kwh2suDN",
  "key15": "323LoYVJgQsxJiuZrxXuo1FVLRaEvjzt6hPnqHGCfHtHZq8NR5TEDEsKNRwSk4AwqfUALujbxJmnacRBv2xft7uB",
  "key16": "629jWEijYDowuVungmuwmUBqok5UYMUXUtpyk9JKPN6zbqd1zx8scJ3ShVF55kaMCxmTwxkAL2oruxWpe5R1zogr",
  "key17": "2TJzpDbv5TDvu8GgtqqzxuUG4LD1XypmEs8VzWFfNCJ5N8buVnqLrXbRVgfEguj6f6FvcPjGhhYZpReqA2tWpTz",
  "key18": "4saTWz1VeEF6bYbsbju7okrRWq31GXFLGisSpSFiTaJjmat6yRNw6KKAjTCEgiopMCuzZJyuDywaom6tdWnRALyC",
  "key19": "fXguJ9S28SNkTB7D3MfRAz3S86CVNndJMUU7muoNfbJQ1mMDk2NQb9dFiV2g69TN9psLEbr5zXFEqrLNDf8eFXL",
  "key20": "LoGFV7mWt2RqDnhHDSNy4Ln3jB4C1c31ZdaKCZXdjcV8PMqnf2is8CdG1sKimYzr9u3PnMkBZ5xHxix9kzoBDrf",
  "key21": "ehcUJ3wKPMYedaCSpEHssEnZzsUoikQZoocQ7ExrNsb1yKEfv6tJdr68MT2NRhWPhvYshyEiVzwLe9Dyh757pin",
  "key22": "5dnPYiZo7V11FtwmdqHqZ3KyL6Z4r45AtS38voDir62C4fZ2KxLCYKbU3oyyxHMwWoVADM7WHunjPS4ZY5ZNDafG",
  "key23": "2t6iAAQWTk6qM899NRDqnjE1BbonZEcQRJDBrSwe5FU4efSPEeum4YqfowEpW3uvvyqYFpMh1KFYvjyPa7chd18W",
  "key24": "52bkwXAyeBH2dfMpD87FgrEEnp7u4YLJJHvLoRws6JDYTjEUym9whYbW9HDCKMrazkVLgAEbGKoXg8rDork6PGRi",
  "key25": "5hiQj5Z2xuTnUr8nNcuwyFujngxc9BXSePyksNPcXZcr2qY1DEYosXY6FLLFN5e9ZEVNK5JuGA3WYskZw7efxE7y",
  "key26": "28HYfzbusppVTLzpNfQVzmay9ggbZ6d2XGxEUrGAhQDJ14iHr1rpF5ZBrX19uhkipBvgE2d3ief7iBEikyF75qnR",
  "key27": "3kpfoV1W6fp5bYa8LJzpfsQTto1cJZgDdH1DNE8zxU6wkFHbzDtz6Fan7DCq6bQknKwEjUhjgyvVDXo61papvGZm",
  "key28": "66d891w7GRA2DEgRQWqpqq2yFWcoTECV3bjVGLyBXhb1GnVZ29jUbmNnEeEf4xuEyDdeuiUZF5NXK2uAivmQy8t1",
  "key29": "3gXbjBefLXFN17TGqHYtJDCsPEbpfeaNH8dqZiZ9zcY2V7W6K1rMLb5usgDX1ZeRyDfpEwrkTkZ1AENdhwChykJk",
  "key30": "5kxsqAAXahk1QEfjDmFPtZWWTyNXPfG3tkqCDQ5JtPXPiknGpWR5XVf4RWNfrJP7fCyZso6DSH6NmD2jUnhjTVkc",
  "key31": "3S553PiGDq1daP5jrJHJkWRscGyCpsgWSTyKKr5N1AEG8pTuypnrQvniprH3sQouMBb8QXJyFmZG3gPQ9MqRbSbT",
  "key32": "4XDKdynv8ywaGcDAF6gUvMeuoPKoY41CzzLPRaSCMW3NYjaehiahaXiqQWZALPDV9bDUyrTF5MhnC8teKYXhobfY",
  "key33": "JdsR3iCHbXNz2BgxXxVU5XABBe6SFWZVrAthrDnEXUa3S5wEoj95vkzErmnVoBUczMhnXCdVoZPNEvVo2ksVKny",
  "key34": "HVNUiysdnA1gxm4TyFcL7yFsAhd6HXxsyGdQRuo2S8C9pSXThNPNaTZGQy2gSSGyDz6eVRKNsj6FoV1mQTqyooG",
  "key35": "627dwS9a5ohKLHtoTvAB2Jo6iV1yC5k8oAJrWx6V7ZtySAkSWnB6FQwk4hZCWFybzPebTjDPA87m2XJCA2eb3K1s",
  "key36": "2kM2D8BnjuJMV5yHLdViWBjAZxk9hy12tTmbXhHg8NGHLMhT1rhBEHPD1byKmhYyQNrEEg2wjcshc7KJzSdt6YvQ",
  "key37": "2FEUtzBp5UgYKKmbcECFMfa15RbyTVbqAujFxAuk6WTHh6ReeQHcVmAZADJ29MBdcSx9g89uMbtCqB4Ppi7RN5Aj",
  "key38": "55hQccGCUjfXd5f659NwPS3xnWtsi2jSoLxhozXSkjRBfW9a9GTNfJYeCKTCVcbF5RKcUuB1ZakPaEtx8yLjm6pm",
  "key39": "32wfyaGBorzbtvaSX3BGoP8Jgm3NGjYGiH2J9NC76fuVjPsxK7JCAVAoCfjmYJLgUtxpa8f743jdXL1kaanNsKtS",
  "key40": "4yE5S8PgzSqRVKfnQDxAN2FaSCvx11w2frVWd7cGiv2YuGEdayAtqv9LkfYkgdjVnp6apPqYEXi8hKnQNdZRmb3n",
  "key41": "2oD9BEVQmhDLYmzE1bRgzjTmsfgrFNVKKDYoKJag26FbpbpwoaDcSbRvfGysxCgLAq6vJeG3GJM63151zyaGJV44",
  "key42": "4TJ8C8j6S5M6BfSma7RZjg5sZXFHVNqeNackZ91QSH2Fa1LyYrxsXwVRakxouRgbwuYTNzxrkyLQdUsPEsQwfJ5E",
  "key43": "pv6qadHHwAmkUxwwoG5vbzDRKmGvo2kkbCM2t6QwvCRd4Dqt8j5kotgHHhML9Vnk6tKxXuWK63kfDxeRCnh8GnS",
  "key44": "3dwzdXqXwpHafDCeEqFGYwQbaQNrS4qAE6EfjgY53ehRBB8CJhbx1GNMP8N33TgLgTbJSjLxWBGKXQAtVAwmKdKP",
  "key45": "5ZUTo6nX4T6X3CwwjLjMJ2e4y4oubrvT4y8AKq1MygWGekThD1FYcxKMjVrTqN7LfzCfpKnBjQppeSeubanYytsz",
  "key46": "fXAmN5K8kZvYRGLGeTsnDhtcuCSWmbbESzizrV25vnW4yJdnpRMT8wc7STFCyWMv6GE9vW14du86WzkCGcycmAE",
  "key47": "22jdusAgxyiNLRAG8Vtoo58wrsiiRz8wn11KZ6DJih3BxzZqsod2F8Eiyvb7bTg4gS6wy5CsLFpKDZtfVJSdxeLh",
  "key48": "JkH63QVesV3vBvEynfU59EVCqLn5ucqvNJU4jHs8MCvHv1eoAKBd9qh7E2gwYyQuPE3fifV9mhg8TPenQZWnEBd",
  "key49": "49neEh1mFPZpWCSsEiJwvh2bvRfGXvNZoH5R11f97XXFfCCFJfgdwqQoWPhe1ZqC9ES7SNzpJmpCEqmwX3Ds5kMJ"
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
