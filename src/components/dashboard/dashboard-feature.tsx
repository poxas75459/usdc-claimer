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
    "2y1yAEX26hQP9EhpTpj5umrXryUMzW718DMmhaaCfF5GicCnnE6dwXw4LyeJi1oJdAqUsEr32aUE4pPsSATVv464"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32HvdxTFWXiktmTNNq8i2CixQC1MhznoUNLTqBta5fUue6ZHqX782BGRq1kptzPSBaFZYSNVsYTGon7a1qPkx6sk",
  "key1": "GDQBKsfVcsvzcN41u59fu43LoagJYXGRDL76DoYsCyNvnwkgcnftsgcxPrAPSBnzYQDYqLL1yss8k5HPJvf4AWP",
  "key2": "2kXuPPPUAVFobGieKqfDFpTGTMVjCkgz8znKYKByVtiF16bhz9hS49WUUCKUBdMHVuWo5tQcLqZKNEQMXyNcbkmA",
  "key3": "svzaqkDKphAeRYWwcArVg9KqPibEbZYDi7JXVREtegaduskRwYStJfVKe2wptZEoBMMgwrvZYLFNW8BEcjLeBsh",
  "key4": "2Hh2JVbjzkkZbycCdRSC3Fotu6XSyGMS3Rn1W8jjeRv49KZUZ6tqtzV8NpU9M8C6jD9ZgiJxGqjfxnuAv8k2RE98",
  "key5": "cEs95DkxwLdFyBhxjq85td68QdZUzKG3NYk2ToCDCG33Q9rgCKCdYZ3ZGcRZZ2bLV5uUBTsDtTGxBwhnk3jPjDD",
  "key6": "584yM48b6518YyHTBgRyqRHVxYXhfHZ34w6dYWMcXj46DagjWci4nBk6kuTMedeCz8CdUonNerQ7hRPFRViPUaCR",
  "key7": "4xbrUiojMXLMnX1TN59AXm19Tmi1FVUUDEUZDzXLV16Lgf5cDSUxV81EAf8rv4k1TjUXa1kgEUnvXcVcXnrzjQNE",
  "key8": "MbSpLydH2T4FWgZMv5wKBifsq2BAFGrBsgRdC2kmrABRLLidqov3hkjJpnK5X8Du3ZbhXSyU7XhEqoxgFMPGky4",
  "key9": "2YqXNqiMX1Ztu1gKxHhqZdHhSL619NZvdmN2i8kLmU99ftYvm5x8nbvKPzxsYMjp48AiPrwPJ6LLVS5epHkSxCUb",
  "key10": "ezcQMEriL6Acugo7SWWczAZSS6ypxJ142EqKwfAwQo7MtitgixFSoXdzpVFy5PTT21kta8VsTFFM7AL4QK7GSFd",
  "key11": "5LXVWfbFtEUYz3xWcn6nQG65oouY77QiLs2HiWTmikHytVi3WmdJ4nd3T7bVuudG7gidwVaid2SdWe5hw1J9PAD7",
  "key12": "33cQ5cyNT8D2m6P1NSsbeSebW2xeTqCmyLcHiPMkx23nR4dtaNc7U4XpPdedfhM4jpYCZnHeDkpftqDybbekz7wJ",
  "key13": "Bk7h94CHKmRZYJSeyx4MCKmxDNGAQrsAmXET6RPFkB19RCjjWeeZEoE468VpnNaVaBP22rUBL9uoRVWjzCiVhdG",
  "key14": "5hpCud9nuAzTgC1v4ooDBqAKfqVqk3yLT7Ev6tqD1HqSTsCYd1mbS1zzafRuJJCaoymMgFnju1SUVg6bezC9DoNY",
  "key15": "rBqs8QdQVsUmBgpPDZYbVF7Yb9Jgvu6snDf24VmYqo7jERwzCDGk6pDAbZ2yKAiiub8Vs5uBneGcAeV2FQZB8Ln",
  "key16": "5FkeHhNuWYGTVr81bVdrHzx2GSMS85uJV8isBR3QsRNx8zti3neaM5YMZDvcvNhbvSe42fYNmb7oYCCjnNh5KbZH",
  "key17": "5ycbZzxryb5SgrQ3gwPyckmu6jLAbSvhT79NP93MGbkLMMQQL7vSkTDQ3aC3PebECUSac5bdBZwBijXoUUSeFz2G",
  "key18": "2pDjL2oKNkzpe84n7jz5VdTqR3hH3qEo9WAyXNHJfYvNdFiM4y9YHqgLa1A8H7BtHCDuNXdUspwFypr5fG1zCJrX",
  "key19": "4dYgDCstvm3ckiCDMcrwWEeePRb5yhx6B8vWQME2gH7jqPkK1BNVtHXup9KeM41TdNiK6sb487xgnS3KCa7b8GDA",
  "key20": "2rykQsEKeGSJoJqmXZuxWe5QUjr7gY9TShPcyJDiToQ2hZYiz2J4V1UpoPXFB8k6kxbeWKK57FDkXnA45USV7mYj",
  "key21": "3Vf7hiNhFYfo28T6NJseSGLc7aecjFDiPcQv8qHFLiK441dHafZAv6NnMW6Gh3UQh4WosvSoTYnCXVGb2AN2zfYW",
  "key22": "PCqFxMSfUBgkFbs5KARWDCqPCwyHKYU7rBdZAqu7HZwzTYudCU5rLcxoEjmUAuwStW5W72km6DLpKejVfv3cWie",
  "key23": "5amwT9PPycT9Pq5wqAsicRusZbxz2yGjxtCNgZV5pYqeCFEQQh1PAcw39pXTxd9LRPY3CfpPikwP4JNaA4cvvHUW",
  "key24": "eXK3wpFAjtUxco8yrsJzgxh44ZnvYZwmUeaGYP1AbqfMtDMDwZd92bqxqYj51iYfPoFWc8ARgKuiKE6oaF4A8ae",
  "key25": "3J3Wi9tpvkWMEFZ29DDKv3T3pgzLrnoaudSSdpwnS22fjaXdh8nZf3rbQ8CA4QbFXkhBjAK2D6AgujAo8EGJuwz1",
  "key26": "4vMcV69xRMCEa2QcgaKTCzyRTXHGFkbQ1J3u2PyaamaxBsJr7w7qs2SvMYisMuby2rHvRBA6DLtRH39UE7tfuFEM",
  "key27": "5nbau7NgWLgn2t2W9vwTuj3rXpr2rubZCQFp8RDpMj1KRfrQogr1qZFGesoEEfvgasnwNRFcx91DCzYp5aJQfWmF",
  "key28": "3KVFfRupkt7mGu7aQjQxMWWWWscH1kHeGhMegnP4Ahdt3iXBpUsTHSeTm8UqwGopRsDozHDCqFxbvD3W9vxq5TEe",
  "key29": "2qTZYooXXeJ8aQWPbVyZAwUYzCzMUiu6HmxS7uLdpzA69QkCz26Mvs7R4VmSvEEBbNzgMAntnEiqYCRPuvZRSc5T",
  "key30": "5iuRzjm7seNwAuassDK8TCYwGeZ5EvuYdR3NDEdYUUXeoY2jLMG2rHcAW7BRS6p658DNHktTGtxmn7QVsMmJXGVH",
  "key31": "5sCuPgwWXRSj4dNEAg51YUKX9sq5rzobYWidCSys59Hn9LnfgyTp9P8araMLoPWjCqaDCpRDW7GVHA1uJ8TKuFuP",
  "key32": "4H7DWvUhMmfQzruNZpkedasBHCe41MRiqZn9XuU9ibvNppLUUDaTy3WcvAKgdPaRmNKJhko6M1D2paP3ZF1k2tP8",
  "key33": "5tLwPFPq46KeqBcugNeAYyPCA8d5X2dYLdEWjEo8BM4itoExExyv2Gj4EeMZp2NAHsd1bNtyUPHLFgMb74sCHcS7",
  "key34": "5aHtAWcoQxaU4xKvCZRWaXw6s8Aw9ekxKKpifmxxApofWC9RSGWSWp3ip9vuexuUomyuTjjo1Vm6AfZpDfUEAh1f",
  "key35": "66oZe392yCGebXTH6ZrEVV5ziNsyVHe1nZgtpTvNTGjG3wrPHiLVFTq6oXJSUDEit3xum9MKC3iWqG6mwuhX4hxo",
  "key36": "2BuFFBBx5fJHtXQyQKKn1f18VKuj1MBodpqbRDFpPfgQ5HDNzDBzen9bmmVTz9f1du1jyCQ137356sktEbt1gbnK",
  "key37": "3vQPzRepNnvEYiwqPptXGHNhLze3Vh1yAb4ijeAz1WBeuWS6smmXyQcUZ5cRmDHkQgZJuqBbGJLv5HqMaY38ZLEy",
  "key38": "5Uv2bYbKDzoun7tSGq4A8zMGJGs7o4GUihtbbmb3mq1YhCsnbG2iFnyWWiAqFtujD9c4VqADz1bpSdaokNoZN5h1",
  "key39": "5Lak2nKnEZGoCLz1jCPiqp3LW23z3K3okTV8DGUDNYcicShfd14p49mYwn52xkRxuHKYQkfcfqB8ArgZM7tyb8Qu"
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
