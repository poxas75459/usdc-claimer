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
    "3QQkqhCZu25kTw5xgQJCSNxqiYfmS5aFfu7QcuX6zsMjhX5Ckc48wSahXWCKXtZnARWgoUFjn6Y1b6Veq5nGVi6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHxRr2buzg8CHmYBYJAcecW97NFuzjJxiooeGT3gf9hL4SXaGLWmWJRdizSZ2odkL5iDQLKikvSaAGZJVFFngF5",
  "key1": "2gTNRANTi1SWwBH8Fq93rAXvWPhyqyp3en3WdC21nymKZSYp7f8orhPVrE5763Hc9hajgCcWqNaYNXRT4ZepuVhX",
  "key2": "4EkTeJLAHoavxPqGbyD3rEDLnGkMsxYxY9h1kXzxJ4BbUA6KY4jeUSjMQiNYB8jufj8BMLhQqhntUg5VrruX456A",
  "key3": "3efUmasHepbr95uZMZ7EM9M6cdMF2nXGVteZerDjFzr4i6cxf7zw588bBxu8e63m8vUt79TbJqWrr28HaG5nbtNJ",
  "key4": "377ofNAz8eUouKevo2SJZzHENZfUhdTx6f2T2DpALa65UvuCGBy85nXeG8vcYUSPJwgfXRQkKd8oaPtLvnunCiis",
  "key5": "3G2wJCFxZJCAWTB3XuMeXJwYb9RWiEH7BDjgY8H8DWGBsWPv3M6JgvJmNFxdRuWwBYF6egmpbUy9P8ZmAqvG51uk",
  "key6": "4DHScPBRTkr6596RDcsQwqqa9XB2tKsY5DFN1YsJphcBXjjVDf817ArSpvMwf2aTZraT1yAb8di4qpAG1u3UT7x7",
  "key7": "52R3AxXFW7MNFgdWJAvo2HM2ai3SRwKojvT2HWQ5Qc8avPpoH7mN8gVTBATKNJxgoFUprgCLuxG4ycnPQh4BLqNA",
  "key8": "3P8QswRAsDmgXP1yAMdFUZqbQt2rq1Bpj37WnkCApQVfYYehtwvmXdARJ5VzyXTZawwjJWzkF5V12etCQ78zXmFt",
  "key9": "5hwWzKfQfoRijdYL2Dc2S7if6pgtnLrcQXzp4MkUpJQKY9WxSpEcmVULVUV6Rag3oiXTuR8obcy1ps5akYjZZkaf",
  "key10": "22fAZsRzePHgbd55K8nYgs8JmRVzh95SdEWz2t3ANDyP6SeGFBH4yFTbYqNmBUqWoLcJjE1k44hNsHUopAzyRxAD",
  "key11": "AojWdNehijfF3Nby2niYhZSXisdjP1XbwHfFmR3s2esGypMRp1Rdw4Z57aeimpm3cYeVjBnLFrrfroQhJM4KwQ7",
  "key12": "5RJJUGKnwvQiqZshBJJy8kdxB3x1mCY5DV1nGz8ssdzikpbzcdPotBq8CTug4841mNYK4mBp1PbLm2C23w6MHeGt",
  "key13": "24DEJgmAxV4FSxRaGkqdee9AyQ3yrbLtFWTB78vTgxKJ8iiVYX9zuSw4AgtXvLcf7ZVeBHDxVC3NtNbCd1VVofEf",
  "key14": "4pKVcqkfcVzNDqseJZBrhbJML47nxGT9npodn5GjjgEya6aCxbnpoQYGC9dP2bRcAehSGhp3DwzyN1eze4JaD8Dm",
  "key15": "5t5CBKJTD75YWi7nDv8Ssa38jrnDMN7VECepBAMz2eLdZxAJx9AMR3TcVrqN827fSxeyQV5CvRiByurRyHvaa9j",
  "key16": "2jqNSYZWnpahjtW1AQgwshmFwa5odNPmQrSd7qbhhGtPGdArFchwnvveJiijwBZEeu72MS7pfGBG9TtHcNqbQyaB",
  "key17": "4dqc1mq7fXShcfXiXqcFDuZig6SeWa217zv7wvuocwKVyZeQfmfCeWL5fNxvhMCGH2aAqYnJm12RP5xX9Hu2ss1m",
  "key18": "5toqVLSsediLU1hhukV5kZANvbAXEddMCDHVNje5GnaeoX4a6FjK447sSLmTCjLMcHAKZCSE5Abdgu6HrjGLemuS",
  "key19": "4mG7XSAtj8PRiwYZmgAhGNyyxEmBzAHHLQvdUoF3rFYtN2a3VYAeEfQ75XYkKgGVfEo2xtWYvs5u8wJvUZazYhzA",
  "key20": "21vU5Wk5vYSqPrSgbdQsSmTKD1DvVCSAEy2v4cgbcLoLbuFW3TBCPbTyViyEpAEKAft9aAmfPKfAaSDcPRKpSRvZ",
  "key21": "3GaZmjAJd1F4cJCzaY1LuNCUTnww1ZRvdQ6EohQj1uqLFfQQx6KHwDAaJGhHtLCPEC5brFjYwGxHzVGYwi6dDEZ8",
  "key22": "4CyVS5rFATnR3XKgr247PiYyQUznQyjimQkmtKhLm64wHMBrDx4R5hNUL7PpJWNCmurDJf1ieiVA3ijreXL8Zjv",
  "key23": "48HAPxpkw8XP81mf3BuCDtcgPPGzeq42JHtVhnKruG4jr2uJqN5rvPx6qEw5434U85bSVXtyZTH1yABnxRG8YHjL",
  "key24": "4F8ADCKNmSJVn89wyfFjmPDstZVSopQy9afNvtkB3AKvz4qJnQU16gUUg27cxuymdPJG1D1ExnGGNkyCt5VraQjz",
  "key25": "KGUXEapGuXGnPW3YLeBGRYhufoqkSw3f8nrn3YksTrRG6cWSmBKhCYgwARGbBzgwPWoKBaFyV4Js6w8AWM2wiMQ",
  "key26": "qV3nwf87Tm8qaunAKrCB8rfP412n64pmMKeaVTVZfawQR1xHxU8QK7omGQp3toi5kqPEdaQvcV98HoFd4a75sLG",
  "key27": "wHygt5VYHXPGbZ3gkGUBMnJhVC5tAPThGzFXD24yhtZz2Hmvk7GVa8aj9eqGtTaS4Uybf3AgUrbhJcWHFspwRwM",
  "key28": "5BdCGCpSKQjmkFCACimyKFCyfyLVZDMkpwwp81mgdWMnrvuGwwryT5WJL67w1HqE6y5B7o3Vpm5SrTcXMnUD2F4M",
  "key29": "hzkJKjLkcUKvQLgWUuJ8GaEx5sn9kQDdhNPiNtaFCNJjnNVppwA8ZtjtS4FMj6au8Y55YowMkcQsZwGpFLmJhbo",
  "key30": "5x85V2qa82dmbqhib8HYXGiqKo41f1ngL1eQNCw6N5QeBJWYwx92xR5SqybzzH5q29C7GRFqndWe7pWaHNadpkHu",
  "key31": "5z344cJTm6ReRWBLDQCMGpZDcuMEbFti7aGAMJEtscSDycV7uL5qbtuLi6MsHPc7wr2PZbiP3izd4zDZV8qtZtDm",
  "key32": "28weWwvKV8aJmzyJ7WiHBeJ9seuzxz9Z9PXWfJ7xUnMuiax8AEgfR44eL1VvyaTrfeY5pY9SGozardto2ebCE6bK",
  "key33": "Jyv9ZdsApMk4ZjYHCUSYenjN8x2tMR7Wqw7ssHVg9cmiJEMBgDe7mdGdcPNsejaZfVho6LDpc1WhMjGv4y539k3",
  "key34": "5DTD789GyFvwaG8bkSeFV6v7sZ3AFM1iDzZ5DJSm3vBbcUuc8C8T7UxfAGZxaTSH81XN1UfRBK3HFKiR79Sk1w5y",
  "key35": "36rS4LwCtFbUm7BFUepzG6FuFRYpUZgqmuw4ASYcM93btkJbmFVYnyrC2KPaLU5zkSYTLKByWXEQYdYDkGeAmTGL",
  "key36": "5CysQ7Yj1PcrPQYLkkDCeBfFPR7cRwShoibW5N1AtXpTCy4xpGWtyC2oxq8yHGCsh8TP2TNJqiuC56snvS6q2eZQ",
  "key37": "9ioNkM4ozgSaSPJwyETFgQNLaAPGp16V13JKWFnFbT8VELGtDQ3jhegvFZZMti2w2NactTiGF4U5d41mTttVdF4",
  "key38": "43QBQ9dSBu8Yzvs1QPsDadZMAcUod6FXTd729k1h6DrN9Pf7m3NGfD8tU8j59vzETyR41GDKxBgbp8cGBpxeDmmc",
  "key39": "5EoymYLAwc4Z8YcF3o3862DT8ASaMb6EndRK6RgSwpbzH8Rz4cG89e2CBVeDEudQFtQdfURh4AHaCoDazDkMSXB2",
  "key40": "5SNGULdj3P8TJdDDm8mvXZfZqfWY6Da8g4aHNufT8GqNvqY7SBHir62he56EdXT4gMEjTSAcoh5nfnYpgZZoUX1f"
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
