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
    "5A37hgP21nxB5eGk1Yzj4PSFRynz2jWk98QE1izkKb2ZeQvLxLCXGMDrx6EgKEPfc4Wx8CKnsa7K1brsWioQgyKr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CsUfWh1toUo9Ja3kEpntgwkw5Z1LT43Z5JexzW8z1quKfQSsLprYuuS6moodFso9ynucs1pXe3ZitYCj3iP2mTZ",
  "key1": "3Z6RaZLRfGpvvc1W4amDgRQaK9a9sfvm4sx6DDuzjE87QikF2MJ1c81Sg2zXeGSWna3oiXB35Y1kCUxiGH6nAB45",
  "key2": "2CAu4CaScB4NkQ98opawb1XVB3o9L5PczdJurXvXDGbg47ByU1g9PzwLE8f4gyMuNGFnd7cEhThvtj8uCPuLYRw4",
  "key3": "65nLP3mhnnotYaLfAw8wyAi232NdHzAmAVb18zs1vJeKnAFdhV65hSGYZP4azYiq9dUiuM5HVTVu2aebojNi7mQ",
  "key4": "2g2rEkyN4s2jNLzT5xjcKKDomeQkGhnutRfx5WNr9EHeKNUcKM7jSc598Qug3p5YARpmHZuDb14u3L96hPi7DXmk",
  "key5": "27u9EH276VBHK5fSozEDsL3aG1TyXLNTpe3WRVNSD2jS6AHzvWdXGKNc2bNtT2EMhk83S6cbB2GrS3TsVKFQmayT",
  "key6": "PvqycxBimf4sW21a9MTjBkaSK57KSTrhxNKCzECngp9ebQwVi6ayPTKJ5xLSjAW7xEfArvAdRad6Jh6dYCCt3Ke",
  "key7": "5r1SvxptN9upuLtkWDNkFps7AkVyqBK79ER8JbD88NkBHL7LZ1coCLNVrULMoNgRVhtsr8p5LhaKXTBdsR6Ds8Uw",
  "key8": "4h8xxp8dJsxnmyBfaKesaQNHs1eeYJsjAnbUakmDLTqUNqcgcgwq516WhxcxUhC1gV8bY94BrzjuX5G18mCUQxNc",
  "key9": "4KvDEgVu1SH9Z6VPj94XYCUQikxvJJNxXBWw14ctF38b7hJ39nAgCog9apXmhqizLxfF75feaHZeo4Qrk9mF8bya",
  "key10": "2pc6chjE33ezNgn4oceF9oNPuEtgLopuwNJgQ7LnQ1FNmiSDMQ8ZGMwfcVG9MHZ3N2XvN8f1DDGbejgMhQA2Lt8i",
  "key11": "YMCionkX8Ay1m1xWERWo9uK8vQ5GsCBqzH2QLJctgPJVZEE5gWSmj4cZKSNS6JRq9Hj82CNAZcSH7a6wzCWqMyr",
  "key12": "2R19eGmqpNZAq7n3SqauK4KCwa6TVFJUNhoiSjqRDdTMTXv1KW3psrtUfuP8833muXraXk7anHZvC8M1zmbVxH8u",
  "key13": "4zbmcomAQRhMo6Tyod85AsZ8rqwFcyLTNxa8WMjwnUCwDLvMbrSqG7bVW1TKgNTYRbgq1LjEkbT18BEDjNYQQKNi",
  "key14": "L5yHemmZxFJZzdKUbfWqb4mkAzGKAHb2ghuBaWp6XA79ogb6oBYEigJp9dDJrtcNdpZ151V5H577ktpJERRvMBV",
  "key15": "2zaZhbNWQpj6US5bbjcuY4kS95z2MARUZryetMHKecTveaGkpCqjNcG4677ozFEeLf92brU1Fwqf1PA2XGkgZs9Y",
  "key16": "NEXi8ESKwSQHx1HNDqJKUkgfHQ9eGLFwHFZXuEvUwpmffaEddc8iUXzeXfK8q98xPiwjhXPFdkDATnj4ypKvQbo",
  "key17": "43hEfoXc26nHjuruyNhntre99VAHeywDag7gcB5xmKag6CB53QPpe6GjJtwGoucQkqcJCPtedf4rBMAC4tHgUTW5",
  "key18": "VAQdguz6wwwgeeVtxCiwWLwwKm4KoCYJ4T6SFDQ5mVVq19LTk9MHkf7niW1BVfmsf4NWbCYrszfEp9FhC8cYcDx",
  "key19": "5XsX4t6Tv7GGLfUXQ5tsdpV4xXoxsnzbweoe1PHz4XKtoeASUyPeabJ39iziXVGbD4Pw6yxSXnXaB3ADt26McNP5",
  "key20": "3zudAvhiSR9XjkHqWbmikTEeNeJfaD4yzu1SFQyvQpCRMR6b7vaTRDuBrz4XSUyekzrhWxVy46Nqu5xB3zvMPgfB",
  "key21": "5FVnweNDmDTzvtKXe1QNQaDj38b7brnPKtN5Rin9Ks1CzaQGytUJsaX4U9JGbcuwF39Vw88m9u1rgAcpAai4pEi4",
  "key22": "46ypoPCQwvQkMManTNitLHzfEPvaro3azrYxhtqPMMax8UaFuCaSSqH3MJv6UpjxMQhmuz7JMYDiaLJyQ2XajgTQ",
  "key23": "2XfeoGyP8LySVhytXXsWm2VYFUQmv6uaXgmrBssDdFcAayAs4Xz4PzxV38wGt3GaxBCxbCEymLoJfDJAZWVpkcKM",
  "key24": "2qZZhMzziN2hZ8UWHNWdvyFeTArwgBzR4wtKA1daBF3aN3mb9jxLKQyHxUZwdVN7ptzu84nirshyUxC2wCJkv68A",
  "key25": "mAK8sjmGotjCsqGX8emp5juJFLhjpmg23V4y4HpP2htcmAf6XsvXHjezUYnoGXnLcP4K9TRzTHFthdaEJFwi3FH",
  "key26": "zNDs1UcvNjaeQFT1R5KJqpk2GciAmeC1rw7wGa1nanpeZgE5Mt5RbmyQHjxBrhS7Tka9JNZQhEKrvvF1fpwMM7p",
  "key27": "3Tgpg9r6gFp8icbTbqfzCp54oxvDzBmkMU3QipDHEmxMMNLyBYQzdhfH4tHYuVDAan2R7Gq2TGn38WwJazjJKPxD",
  "key28": "4ntzkU2DkqR42eZ1YzWHYJSjyNMi89rS5X9ys2GLqKgwQzgE6mavN4mDG9dTucNR3ZbGB5QkDSKb4KVNkApdF1eh",
  "key29": "YPyvS6eYEErSJqjFGEaYtg3NHMyu8Yr26s81kabVkpCqjcAhKiPn6gp3CR4PWtb6dYN35sAwXBSK55pqJipv4is",
  "key30": "2gDtxCRbAvefQDou7Brur8LogZ3swGR8ZCYRiojv2j9irWAkxmX8Q37iB38v4EddPay8Wjwt7RusP2D8615JuHYR",
  "key31": "4914wuQoLbST9AmdGubQTx2GqEkFFHzsThoQzhpgTBQmpER1RDY7ouVQ8PkafwxiZ7ZEfi7XH5WKoDuMbF6tetPZ",
  "key32": "4UWQyx9pdi8Rpstr9d5cuFc2QPpu9jERur9t8NCTLXp18tuPQQworxnVUTKwhTCNGaeQBXCqCtRdYWd5Vs92BkMi",
  "key33": "2GF8TpjXJaqmQdALSzNtjczg7ZfqXj43MSfWFSNVEv31jEtYbREthaAEzddfsWDvapDQdBnz2AnDrdBEsx8vFuP6",
  "key34": "3pXuuhNWiXLjF2MnLhF9XqRKatBwiZpcTT777A5epL6S5wc2vaT6nhHSn4djKEe8HrNWrExM6uecfwUxbfbD1rKi",
  "key35": "3Xy8whjWNdZ43Z7whaPsRBHVw5TCynSX4V7y2ytdsUoLJSyaweLDQBYm8HbH32jpSnvz5NMVapCwfU6X3CArZrnP",
  "key36": "4Q5fRr2o56E4FgTtrhVDDp1pPeWf7E1hCZ5ozYstYoX75HQa943zKyFsmLwrSQsVRvx6np9BGFLguz9zhR57dcjd",
  "key37": "yrCQ3HLd9jqguNnXCWaUj9Ysd2PYEEmjkwq5wDVR3LAST3CZVf6bPqrU2gSmnRK4Di4HFYx8LGvpC9PhXzFxSk8",
  "key38": "3SRMVpMxi3PUAA2CuDbAw4k3RDmh12twmeJQjuLyYHgTApXZp35GUVgWdoEE9ox77DxPUC8LvPLk44kcFX14kopQ"
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
