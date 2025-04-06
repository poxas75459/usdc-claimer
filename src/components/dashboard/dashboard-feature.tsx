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
    "2Dq5xVt1R8mpT1dzdYrPf2TK4ipfZcbnFAw5E9DE5LisYLCJ1naTkzygFWVoUNrSu1fqDuikcRdsvaVkp3v3RyxE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rNxX2uVaViPi5z65Y5kUUE3jUsiwUkN87WAMuRSCbm881rgk6eD8wExd7shGcF4tn7HJY21sWNzNc3PT2BubsiX",
  "key1": "5mK3pmh7yHNkKtBhbk3PiEsZAQhojSo7rBCy72v6Y4EAips9VF7LVpj1MQ4dPZUdwPbp1xQcTVKbzm2VBezwuLzy",
  "key2": "XCMGJwqwDJvbWp3teVFBY5dXXjCPFxrvRZE2e9TZQuCjqShD8LCAc8gA3h7TyqBvoTdA6DVk7PmZgVAUNLqFP81",
  "key3": "5wncpuzPVSv4PWa3txiHDAR2UdYpgQBzZZMrYrbzaTMLuhSrj13Hj5qwPJ4aqvzBNLvwivxu6xeiD8RZ25eN41K9",
  "key4": "4H51mFzxswaPEcydgiKSyNRDX8U19r55U1zpv87j7v9zWtXQaGDVmbTR5RUE9BHCoPUVL5uWHvGTuqztmdZTXGkx",
  "key5": "mzKKtayHg4gKoxzERymeFEyDxWCbhfVDWyfexf1v9x21Y4etyEYR9wKuYKh3wjNoa4ahTTQ9quCbkBwVuLCbfmE",
  "key6": "4Zfukdf8HqoUrGkdCwXe93ZPuRSaLFGjGgTQ9bkNuhqRsubio1BRgJmSEKWXo1YkRjbXybdT69mXc877QhVtNw2M",
  "key7": "55zhUrqfXLP8yHG7Wye1rv3A283kGf2PpSwuq4qsadrWYSpwv2oBYAJZATgAeLLaeECaLR8DPBRJDcEWQ3gB9WSB",
  "key8": "3gvznwwrBPmGtqjwNyKdSTjF1YNAkjmfL5ANWsTzyM6LpASuCGVxAWRHRc5489ivRn3iXUv3T57nroN67R669jjd",
  "key9": "33ypDN9yqLijWxWmkaiTeKm795dK6t6sCT78u99i9txFKMBK9wfDuFua6tifovuK2kT95zeGnqh5cwWT6bCrjHZG",
  "key10": "3coS7nAmxYwVVtYc4ey1eCboFTwhr2FVZy7JzE3i56cNBMKSHkiQC8AyDrcrsQcFRKQ1eTizCXkgjxcqWkZdTcJH",
  "key11": "4F2dNNR4wr2t6aQpV7ycHjnqx3PSQQfQFx5g7xDhj8j9XDEoV6iL7ZW8J4TL7gtBWyV622qcvxhTJsJEoRBFNms9",
  "key12": "2ZNKkrJfxu9myb4eb8kakqsK5SPVgLdtQj9AxFX364KEoNpBoYb7C5zxcgZCsFg6S5HFMZ8gBz4YyAuoSrgtQcj1",
  "key13": "5jwMjAdQEwUbMdLGzWZzLqd5XsWJr14GA5LskBhcXaJWh23GrzMe2dfW9vhPBYSf2ebPQjKVQna5AkmFcwft2gGK",
  "key14": "55dCu4x3TbUVT2YMf3P3xaA3MTmmLo8UtwQjbsAKVVYk5wh4ryAFS5YtGHweCLkk8hyUNby9dwBiLJpEnAnQXVqa",
  "key15": "t8qHG41EiMPvc7m1R2fbEUhU82YBbdHb5S3BmxCjGUM2vi2PPK1ytno933mhUbiXVTebiHf6HhAkRr6M7Wr6j9R",
  "key16": "2eeHR4zSpigTQTAWzKRCKM4okFAY6gSbMJRrRYLRG9tGVpGdYPk7NKT71B9AMit1tFvsEn7i79n8G7ZEj4W1ZcK1",
  "key17": "5iDtKwZfBN36TKgykmJyzUFvx3zmoXnLKhrnfmLNP56j2xQNfh1sbL3wy34VwfVV1sSAitXMaPVyrwCdBwxhVgZY",
  "key18": "6278kM9581aNYvrdFJHF11eEE2fU4ab95xDgKUPtPtNFUmrE9dXBGtGMx4DqEkmiX5UaWjSF2WUj2EeA6WvbmsQb",
  "key19": "5VJiFRGxvDzxJ2KDPXSQFZUBbfi7XFRk4Jv8zwsoqmvMqdQLZzECgw8CGmDXtVVLbBWv1LaHViiMpes8CwEtqEmH",
  "key20": "THsdLcYAc7VmEaht4yBLu8qb4gq9hS4MXpKd8zN9T8tcFuTCWhybHGYqUa7WidXwE3od35MUt77rSx19f4bJE1j",
  "key21": "cPC8Xgdyo2TafFKDZxAwPCpn9AQLHQ8mc5pDge8E5oWtCxoFc8GgSE9A4LWUKSwzvizEkhHpKcwxkAsS7ysYZX8",
  "key22": "4xTCky2QH8TifNaryXcno5gcdW6KCt52eXLVAViesXSfwphQrMJfytcn3gCt5kPq1tUKRzrVuaQKcXv8zGk8hJEc",
  "key23": "4XH2ai1DmjymPsHCeLqbaP1iT4Uq3Hn2cJ9FccvQUUJdaRnPtBqc7AfbEmD9KVCyn85DxCEVWrge422cGoPhh8bR",
  "key24": "3JQSGxV6MczGiEw5fehnmKzqEFCRurtmWeEYyjoAZZt2yuX2q8zRCksf7vpn4YHRnoSMmkM8NGcWbV2HPV51ANpQ",
  "key25": "LNZB6JzV2StcyCcDcZYdn4xq7ZXVQ1abm18FtUmUGXMHmnM2PAHaHMfZRUY5Dhxh1pJnF7ftc1nDcFX8Wb8E2Qy",
  "key26": "LerK2QSvG5dtgYrPAY3YGWopP5RjGVMPppEAmas8xcBZw47jpXDRaKT7SVi88MayUxXvAEV983JxqwZGK9QkqKp",
  "key27": "3CGigyBaDLtHr7gAJzoMrJFKF2p2ffSDAG9wtKdPgbdNPW4hVqhe6sCoqhEKCmMATz45QVQZ3AqQgrTJhiSynssK",
  "key28": "5hVHbSQbqZ6F2pvTDCURS1vs4Nju6TZZztR3ZVbVQity5SXqtchPw4LodMbY7FYRYAVDxTYck9sBL1nv6FCShsnC",
  "key29": "4dkixUs9sXnwPagqzQPf7bnaWXXQ8jPpVF4WrNwx8Dt91HUFochvZkDvNcGZ6BwBzQY7TAno1kdzyk1rJCFGG3Lp",
  "key30": "xCCBQu8wyDDRHukun3SsqfwGJquFDbZqYiNGpUGd72jEBtDaNFVA82QyKY8rFmXaqudvTmYEphK7zH26GVm9rAe",
  "key31": "27cPe72FF1R7geeopkS8ZAeATfwbvARpTr9b8GnYSiGmiSQebeNogTBBiX8PmWfzkCFck5EM7DRcozLeyLh1tVpE",
  "key32": "3cmsDwG72Csq9PbcqfahR2Y7hTNCLK5NLpyQXxEWNfzRu1tQSTYDfveXsaB6fesB92AGH7JoDNWSEX9vZQbcKN19",
  "key33": "rQRE6EUjHq7hAQe8bMu3NpZXDe3uD3jTZVQYE2R2EQ2pnTetMykYtFzsQadhN1Wmdmqx96PW2saAocVipbDqKH5"
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
