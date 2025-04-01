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
    "SCZpJdDxc9WMaGkaBmqsPs9whWbhkTvNxR4mtw8ErihNZYnqaYc9TczP3twRBdbCRjxkZbJu6fdRjkAStE1uuxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ybnXjTUGnk2UNT9EPfdBYX2aFh5XSs4J2K7RBUfJCkcbUdKwzK12rbeSpEEWfzbA8AiWNm59juqesqsy2wYr1US",
  "key1": "4VSjM7AYoGAvfUyAtveV3RqLiqZWaoJR2ZtddowMnctSSWamZSsBsTWp6Gnd3dRbdk4hgbajwBECGPbBpU6DTPfe",
  "key2": "rcztXFmbXra5DPLZ7r6EEK6RSEt3xdGLVm6LKqdkY95bsQnpJ8iSzHefZb11KQGdeqjBToHWac7xJFKpoEaAmtS",
  "key3": "3DVVN5HE4scMVKMPfTMej8U9gX56yVrr3RkNPQB52CdHYT5AjM4yMruvip12QNugHxadXDxw5bP8dtbHteS6xuXY",
  "key4": "KfZUdxGXfPt9Quqi9gjivMarEBTk1oSG4aQmXoUJrJS87CZkSXeT9RvVwftzxUuCzqA3nujLB9YN9WAV1WA3GEb",
  "key5": "dSZppLZZZRyjZWu88wSuGgjhrQQL1gwgCWoC6DGxuiCrcz5y17Scu8x6H4JhYFLkwCe28oy8x51TDNaBe9m4HWn",
  "key6": "4vrJxoKrpDNeinzaVUKcWHaVpGAkJkhApaxD5Fr4ScaHDb1DkZeJ8bVRVe25U48StYrjD25urviACgfkcDLVwBE",
  "key7": "5k1jfRuVs816EFaD2VbweJCShj5wB7ojPL88qjWYLoUXDkN6Lx2n1TkeffEVky4jW4vaEbfXes8nGLMmzYtz8fBb",
  "key8": "37JF8Cbib4nBCagYb6XhsptEG4X7ZCTFrSnyxio3GMisye5YN7vwT2h96AAAoH7BfArq36UhF7YuuhXLqaLNobiC",
  "key9": "2hMdEbt3xsdQLuJ2ENDEYbCEsG33MQorhc1tAQt2zCrH6R18A96RtYss3yUT6MmR8TLKhWH1ZCiYud5MUzokaUP4",
  "key10": "mUMmUc7LerNMhXAzVNBRqpDxBpTRhQfYiY9bnvE8rQ4eULmg1L1y566Ziowtf2aFHzH1PKw5V4go4hBCRf338Yj",
  "key11": "3zV9iHccVhiN4uNZyana4qA33niapB2XzmPZ5aQUAugVx3ArhmWBZ7SAwCiVGmPWtTM8w9JAKzQ2vPS99pDoXwar",
  "key12": "2id5ggPzXJdbu3NVGQXtHunbuP2QcYSuSGgEpotmJXaeCcZAuEJL7YHesfGCbGQAL6HjEavue4XqZF9yyZE4aXpK",
  "key13": "37T33b3mvm17fRGBbsA8u6P9VDa6t5NM1ut2ZVLUjo7FyektDZjrLenPqZFDjvRxEyk6VCtLQ3DGEqBGW4XzYd94",
  "key14": "3N727dCCjFpJ3GBiaT9CWmYgoVkXSFPFr3wwz6bw1vXiCrSFmfBdZtwPQ4esnNhSDDu9RMpNbCX616Yrw4z1UwNo",
  "key15": "5zfSFyjixhKG7YPk9kme79cVyBD2gF66RiXMZZv1KkHA7zSwSULos8NmVsibm3NgmVMNcNnekK75L7Kc4hiiny4R",
  "key16": "Gn1fm6wK1TCxSrbg3XxFPC2hn2empLCLjmvuy5raXarJ6mxqgG5on6fnYHvJvEHZMpmg4WL2mQFgqfEoY6Ln258",
  "key17": "3yTjgJuN637RUL8Wbah2Yk7mvgBKov8shwYdtTcDDKncn5w1bPQQ1ynwH8b7ZkWoD2RaS847Kn4pchtszdbh2VGR",
  "key18": "4MkN3JxkQg7RLbegZD2yWsejs8jsBCGTwWSBzZhwoQ5gr1bqF6SebAYuGqjuD6w4nogdG8D8ixwNCat1VXwXgbbk",
  "key19": "5WF7S5rEYBZW3bnEQwWUDbYVrap9P145JRVZWurrbuJPWLhC9EbPA3pHCkLJksi5Xxda2JsvdY6JA7NFVmBoCAdf",
  "key20": "mKTRHysL4n8zZT4hLX3yHVgru19CRvHDujXUYzmtRkjupbJF6UAq7kDfpeyqte3hmciHJ9pZXbW3E3Tyo5HGaJE",
  "key21": "3JtH4nryMfx19C5cnE2nt48eR3nAYUnuWxe1iM1am4XYEcNcPMpwWZFWFs8vo8YiYayvu6ZUmcs4SZTG2vZwXmtX",
  "key22": "4BGwMwS1oCyQhnQxkkFxwKrqd1jZ4TW4YdiKX65gfSV2YnkdWTyRfo5quDJwMeRBZLUNXJBgoh35gVHJVFYhJzdW",
  "key23": "sNQKKxG8bGCvLLJtxmZW2CH4TZEbggNyK6E3obN4M3mFLDY6sV32qQT7AGYkRqBkRuz4dBnmTjbBzXdyQVcdnDQ",
  "key24": "36zLkYbLbj6pgXP2EL4M1GEj5yajXkGeWxtoLc4gGTPbnURZGhWschbPnZAwxPXdCpYb8xhr1z9K48jaxFakp3aP",
  "key25": "67nKpEy6RQ5sdAtx5Joid5pGVAhFQgS2CBL5qiXyTdKpXsWozRVoVGa3vhgk8cv1e5GtBQvhnCgTMwfrmaE1d8uy",
  "key26": "357jns7xVy3jGqszPHhwRBy1UG5XnkPYcCsoNBMKw5qBhKV63PCzNybRWtsATR4NQ53ML36Xj298dYpkkUzfZdup",
  "key27": "2LzLxRcJNK1Hg1aa916feZoUY4ifbnSsisYTkmFc8M6pLNjodSWqHqGUgBUGRnfCGpfZk9gMwGB79G4iaqvygmoS",
  "key28": "2Mo1dru1FXA3YER1529JsQepD5A7rCKHashGh8uUHzbWeWwdAfQMGvWxnmTQAC2Nun9A6ztRCvzs5gV83ryzfQba",
  "key29": "33g1hQbm5uNgkfmmdH3TnFmzrcssh6keHzbNkzuBHD82ACiLP7PTMvAA3Qh2hxnr67E9o7b8jShqjK7CzW7qkHQt",
  "key30": "MZSqe76HbcAygWbdmNx5NBv5L36Z9PRNyt4srAFA7dK15PK2yeTYEFfDKJzhhd5ATxyLxYfgzZdaJumkV6PHktx",
  "key31": "4CESSCgn5vM2QUeEsziVc4BfxUzuNMqCSWSBMhto4swx6Ueu4CJcQBK5KDnLaZBsfbXnNk1tpNR2Kd7CeqMssB2N",
  "key32": "634XqHn9hHTP6xoMDAifD6aga2nDXuVFXqjV7i4DUEtvms9jT4MxKqCFx5UmXFZGRBN2LLuoTcXN435UG8SDQwyY",
  "key33": "5frrz2cAhovZh4fGQmEkMdjxM4Pqaw91ffAWhDhqMTwk8rQsEUhoKWDdyXmias7F9hQC9ykQFmyTAQfYJEwD6PmE"
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
