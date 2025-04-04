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
    "5uqbwZLsoaX2H6e5NqEWEoHZ2GyUXSbJGiMm46HxMbFsa7NwCJDPwboRkiQ4AGwv88Ex4AiPwXYS5xKKfTax5zMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bdkfbpZQnv6pC4LzwD4SCq1ttZqsegpL5C23WvFEaxgwsPvQs9yeByEjQYzY82R5i6ovZcETQCkExQvUZpY8N8",
  "key1": "3UisTjJAmbSh3UTFxQgNx2ey1yKGM6AbdDJvTCPF94feGQ5Kd3LM8tKtmuXNhjJctDkwC4H7d7qMxHXvzYmP4onU",
  "key2": "2bpLuUv2oa79CibbAENtAwgraNRUiihQ8GBpmPHmDJVPxzdN1UeXMXNpEH711FmRk2JZnRXj2113JzQdxTqsP8cX",
  "key3": "5NRouVLMK8cpzkTH6C1S18zmcLjKHV8nmEw8bxWeB6RqzrHSgZVgGdDFDv7aaJWnwZx4hSFAjQCy9mJqpLhm6uK7",
  "key4": "2mpqWmunDUrwcgY8W7LxaJJTE7dYcRUmVpzvkVi296Pv2SEdAyrzGHMFChovbKRRsqUaZ1jQhkVAdtL1ntc3ZyPa",
  "key5": "JVqkSWSQpk4cCv3qgU8CHigT57B2BGwPLa9c21zyrzRriTsXDcJjmbGGWfxzCQCicxUKjm75AsVkLqjXwnQ5TxM",
  "key6": "2wqumvjomNbRx3jiufZVZRgdCwxhVToD4S5DBTQu8K11EB2axcTj8JikrryozV4VF1ahNerd6n64iUG3zMkuwwnA",
  "key7": "5uthnSoqpHQhz7FHVTwyiGjfimnSWv1ZSqGPa49s7e4LaYbXa73idac5tP6x5T28Tyh5Ssdvx8tq41qsgJZ3H6Rn",
  "key8": "3EBpyfSoWieUQiLe6ySDFJ1jxXfgQrwh4Li9Jz7h4vTsJVee1FQXtUiGKMHJBL1k24kKZyfaUpTC9BN6nYDLvB8V",
  "key9": "54heFWTyPAhvy5H6QKz8kE5nmGVKU6JWt55VycY32xdbUB9SdmYVsPpHPNq58MVC7vJHwBXbxBUbPKAUTQekbUBR",
  "key10": "3WVaA6LrybTCYDyDCk8br1bBkFieZ6bbWSj9RwLS3nXUtTmyPaJPwr58JbH4v9LUmUZ69v7bSWNsezvb8fGFZAp2",
  "key11": "2xyWPpz7Are6sgKFsD6JhYtUj6FvuFqEieaiw8egiFoygwPSUAqYmZEwQfJULj2fNqN3WTS8pyHGGGBs6hvaE4zN",
  "key12": "4EsqXPmBzzVYdDQG1BeGPUrL9T5Tjg9erJV8ywxzhYvYqjUigHB9vPfAvXTErSzGYxsxaTk1QTrLSKXZRqSFazq4",
  "key13": "5XkPvSf5oM6ZGdoWevvJ1Pfsx98roLoNKHWaJuBVcPargKGcywx1iCW6UckMhzPLD4Lai954FiETbcz8GB3LKY7d",
  "key14": "4ZBqZfxEHUq9bmc6aJQExpMBBK1cTB1UMmvCBDArGH8xFN9xPgTUw5XGEQVuScgxH2HumqtyLVWX9KynDqgWMWDm",
  "key15": "4kw3EPwpa8MVXm42zYF3rg12RurDXc8qtLv148W91S6xxFv4gLwbBQAkSgrMET9DBxaMxDUrP49uq1vDU8h2J5g2",
  "key16": "2kSCVKax35C6sdV4LCeCpMK8XwqWhS6r3FHKchhaLByceMmUaN5vL5KgqVn11UEboZXecw5QFqTPCjKYViRj5pSB",
  "key17": "2KaVMHAgvcEBKuakDNyFwHBMAzZNWBrfvmoGa6SaYUGfeiZMD9i1jPscH9fKTpYYA1gLkEEDLyxekVjccNapEyTV",
  "key18": "AxC3y4xqdq8mqGv5ic6bM7YYChkXdv7Rk8yRYXWaArUuFEi4zPd4oyb8oHNp2R42FbARWeDfzwCz1m2bPqdMabS",
  "key19": "37jPyf8wXQDoPtHZdE1A6hdso3VGhwsXH8oU2bFREKSSzVU2ME4NwJqAPqfcB434kTnHb6WBwgW1Thh2jhVeLbfj",
  "key20": "HNMJmtBPdCKFzYxyafzCU5WNMNks37TJcvThJ5M57rrxrwt59z6rSxDvHT9PzuXrZrSaptRfiZhW6igt7RiRKrp",
  "key21": "3b5sStS6SDTMm23Y1huKP4FKiEjfKo4nTvGYF4pXjcyi1y5jGhCFw2JfPjkJhk8tASAU8ysSZ3vEkvUL9qeeTB6x",
  "key22": "3Vt5sVt6svX2dp2bkp3yAjQirTAUnTayonMZn1ievGuv5dneXyWu9BQbCedgfkvE2vR4t9GbJ5jeB5ks2DxnbSLJ",
  "key23": "5Az7utpGWGiRSzAanGodtKehkuAXXKKNF77FYK4Xc9PUFG48QvckMxcbL2kUbJqRbu9PLeUPxuCetQD5qeHpRybS",
  "key24": "5bxmS6j4jdCJn4a2qi6fHck6gn6LgJmZ1sNUJCHNsjMsBBTry1supbC48Q6n9x3jommFYrEYXKzpagb3DP3SsGES",
  "key25": "2XKMSPfKjjAkhnksnbMoMPLxEg4MNhg9tU2LSxwdoH9imfJG21Qb6zfywxPgvbke8bU3dmeH1g9svQCMdLT48smc",
  "key26": "2j6E3hYymcgZwKMRCaghQCALQYvMe6xCHJpg8s51sL2mkrsCCQoRuE1P2F1uoGmnAYTPof4yAdN49pMqPCG9n7qW",
  "key27": "61QsKHAV4maRDnrrB4BqBBwS3dqw994ou9qLsCXMPDXWHbWz7cwdjVw2VjhJf8VHYwJvjPVnhsT8Qwd8g1GETbDa",
  "key28": "4hyYbvRZjpVhDNQunWQRVomrYTi4qkCAGHH8ZfiBoYS2c1CzmUhi3i7P8qjaJH6oMMLGs6WpsefiC5Y8xNquwpy5",
  "key29": "5uiNXmSk4a72MXVvp1mPegUshGnMN9CZGomuZnBHwLhUQJ6bGvpioQVNynFvBrmnDLZB84JMCD68wpqj2GrozStP",
  "key30": "6WtZry1ZX2xjtPTb1DUNbFAzuPg9GFJ2ckxMJvKCnd3XoFGQ7PXU34jzrECYbCZKx7giSk76Y5EdohRKtA6wgXE",
  "key31": "4RQmarKB3K1xgyHyzybooJevv2356hR8WWGvK83Ru181sFqhyk8pchzfZZY3Z8HRzQkwScG2THgqAWeGGzYGL7Kq",
  "key32": "3EsCaC3mhnpxnDkbJQBuwuUX5FnHwdoK3PoAaRPwyddQSexzSo8zmD4dKeyp1Vb3Shfyf8pJUYkTMiXZuwbxxoFx",
  "key33": "aYmVkjSspdtMbYiWZTEYxn1kc37eydPkoGM5PFKXyBFGQ5LTU8Ncbbxa1pvCgg5kNgD64VW9KssHsTyZ5FCsxJg",
  "key34": "5ygbT9Vim7u4LdtET38w3xmx3ZodaLKwgMLNhD94QfdxdGaU62KkRWJ1FUadb8hVVs15LWaGgNucoWLwpkhv7ie4"
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
