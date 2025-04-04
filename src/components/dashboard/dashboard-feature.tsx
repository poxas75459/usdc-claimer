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
    "3SPDyumYk4GKSi8HUqM4jkdTeYkqZsArzAky2t6YvKzZgpA3EpowQRwjg35vywXSF7vQwvrXpSRLKvb1NRAQLXvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RLzHKZYVoRtkYHBirwV4Hiq9bu6ZnJtUnoaBMjuGBREZMPxQFRSq7yPjYf78YFTTD76y2xxvQkvs6ytcr3fABrm",
  "key1": "NRD1DS6okWQN2enmmF4tMcW8Cwd7vec6dNEDcjGPeRJg4Fb7Cb5VsUnJh8txNc5pxUUz2zTsiAS38xiRfPD2yPc",
  "key2": "iMmXPhbpYQUwU8c9zgoSjLP8VbenvoC5iqw2mpUK8NApwiswxb8CnuLubZQ2mvQbu3vd6Q8bfLT98NGJvxMFPTp",
  "key3": "21WZkdHBVJSfRHUzDeTV3NotDsguFVdzNw5UKz5dS7K8rPUqyZmfStVjsHJDzk6JZpf8yZGY5cUmnfZZhra5T2m1",
  "key4": "3sn38hSi2tzf1yA8299U6xb5udj3w4jFQrQbiUuo1rSsqzHymfKSVGjA4jjPPGeHDm78Bkt9oKkAeKsdGTwMLLCe",
  "key5": "EDjVwtjDpPADFTn8PWmphJ7JuDJM2kz7LweFpWhsWKto9jv9abC5kzQTeZNaEbm4ndBP2XGm6a5jLPqREGyad5h",
  "key6": "2kgHnBWf3RBuNCqc8fvWuPw1MJhcEVc8617frEC7tpfdY8Lx71Z2Ldo4phCSydECsTJiYCBrX8SKD195mge1FfNo",
  "key7": "4sSqBHNnAPRTzDofdYNhXJ3BFVL84jjLhaYLsR5Hus8dbrPWyjBMfkqJvQfsmYTS8PL7Y5ZMzyTAqrhnQK31TMjg",
  "key8": "4f6DDvtmGecbbDmn4HuC7c9KAQ7nzk52mj6rcy56bLysVMb9LozXLK6Uu7pBghW2Su3Xg61DmSyitd5V64yb7365",
  "key9": "oFmsQak4jfjSZP1oTC1fwYzNcmtqSe1ebeTQsboAHuHas5RVUt3mzB8C4f4F3fohzcR1CogWeZYpKjPq2QzuNKo",
  "key10": "mcBLjExCyh5b1gqoR7nCEuapaoDZf3PMJ4wEWb67ofxQ2Z5rccixGtHf1QCHsRmFWkXnRrFTQxaoM3TfgPE2dkF",
  "key11": "2NLA7pQ82Z25zmrEuDEJhFEDbk9FqS54ery26RwdNbs29JcGyu6bnJNaPmmdqk95Fj7BYfwuLZmeEYSqFnLwWmzx",
  "key12": "31A3S3q84fxZ95pzGLh2yXxgZkejwLXGriY9Rgf9KnhLPD6hM1okZdghPmfmgHyQNMh4kq9PDBwpUhLxiRdKi2dY",
  "key13": "pR7XkYTqWDgaLpTjAm6hKevE628n51Eg9tGy6oXFxkHxHsNQKERViekZpLyBZWUsx2XVYKpe9vaD7wrSwqnqxw3",
  "key14": "2JenHFC18U6BJoFukTbabvyChxaYde85j2aA7QVAjCfTWaUx9EsMzX7MwBbQiVt2h6JhiQCwS2hn7fCyFiMVTRXg",
  "key15": "32AKsrz8ciQsPxCqNE6k4SDWWn5t2UqMpbjhkiHhmMjqEUwY4rK6oMSzoBTQSFfRTNsyRGzFrgP3oGGy12VgqV8j",
  "key16": "5555hwP7M9dPvC7gmPHp8aK2kFNmDuzFFKF5P3mKWWaBhdkSWqCD598inEN5gwgbHHyNghqXDCDPMtPC19jnKRdy",
  "key17": "4sXoW6piChqw719tRNjmgEX5atTQrXkyDeFzCAHe7dUpu6bE9SJjn5cbNb5ipKLDbU9rBKEFiUrP65TTdb2gccYN",
  "key18": "4Jg2jMG6aH5v2VsVxCGov5QybMGFns8DHP1boDjUCYmx8LLJbX7TXmXCZ48fkX2TW37raihyRG343Yp23oTy2oiV",
  "key19": "635WeyPUPGQDAXukHJWLunhizc2986kutpS2mMkaxQiMcYKQJgVaDcmAfHU3yRmRSrNKTjB3DQHBdoyx7YPd6zKo",
  "key20": "3FBYFhqdYUokBn4sv7e964Wp4HuAqMuDD58my9RJoqmD7zqw4w85oQNT9ejXRZSsH2Ldw92MYvSLjEYLHECrWadp",
  "key21": "5faX2kDFuQrKyen4cwauJjskFQ7CjLCX9tzm9kLUdCnq9utcqaKSUMLJNRbXLsXnLAUzcWk6VGTTwENPemwWJdUm",
  "key22": "56VRUHgjzMNHF3K9rptthczNKBu5tFN6B33TxCbt2mga7FEYHxJc3JjqdJnowA7k6NXnaqHCEU8E9pAZzjWdYgQh",
  "key23": "Vg53oQVp7uVdm65mqorGga5KfUhwFCqRYRubBKrsV3hWB1BLjJpvdGBBBmN6Rb1SjBC8AGoQ217po2v1xeQi5sK",
  "key24": "4krjiCKs5VXhnt5vse2fqaskLgcZhrRHQbtLkAz6wurGbs7oERVgkG2jFJXG2SA4a7drLdQZZHBF7NLmezW4BCF8",
  "key25": "5uahcDGhMt5j1eLRfYrcEZYZKzs7T4EmWHyufCFBfjTsR9xXNv8r4Dvta8AWDjrnHTRzQVpD2DVrgJbnf1PThjnU",
  "key26": "5bRjg3GAWvdsomoM1qWBvTxajFmS6k3P1vwWKfk6EV67Wdk6HJyMq54SQvtszzEvLBSWENKB3E4M284zoMFsTXSP",
  "key27": "3Km8Kb9XXafMkpEd3RHrNuDnMSUT6C7edJ8zZRd7AYRYpT6szcGqUqTHRxdPVpTy2s2hutb3BwmEaNeXTybmLfTP",
  "key28": "3r6jkDKXMhSSrnXMSvrV7bsxLt72tzymzfmjtCu1pvRdrEg4GRCSzrsVfCq66Bu5cB4DVnywZJzPa9AbA9zpsEr4",
  "key29": "2xws39JCRsjNpeeBHddF1Any3yFx3YVrCjf4coKNrsMNLwqmhPqC5E73FewqJXEgPXJ4bssmkM9RnQtvXsHnzj8N",
  "key30": "2NizebX8ZtKPFSJpMJ2EjAsh5U3THfAGJmYxmNxNiq73KM7uMBmhYFpPAUJcsCHyYJcY599RBKztM8KyvGxFyTXf",
  "key31": "5ux5xydMv8BeXi8nnQkSi8vHEgnmUyBh3d653Kf81xBZBjzLZtnG3uNp5fWX2L9XWKCNnvXrE6ZPjWUnTfqTwMn3",
  "key32": "4FrDxcRvWoVivLt5G2p2xFbdNgDCnYayZKFZC1noy1UdQtC4BHunjGkdoMUwnZ7WWjgoSnMpY4JTU5etCr131AaZ",
  "key33": "2eHFyiG8PWEYjv4s83L897vqTMkdDW7moRBz1xHoagq4z7iFtFKP1QXyp6LWmVpJ6x8wL6p7TsbQ6ukTyrt5X6yy",
  "key34": "4d3DtijmyZPAsjVC3mgs6ZAhbN3kun2tEoX93Bm9Qfqh9ebkr4gTCia1R744cheWMs8uE2PRoN1UBgZAP5UV9zAQ",
  "key35": "4tjzNwHLuEmj4fYLLoJXrLrYScGHfHWKkU92CEPbRuRzU4HFsgSbb9nwgKghW5p6ssvXtWCNKoDf1V3cBiWytLdk",
  "key36": "3eJR8CLfpMV8fkK5YuUTE2UE1oGA73qpcCyVjV5h92x36DqKu5HDcmjfyLG59TDua2Dper9J8qmu2PefMQwazjU",
  "key37": "3akvqqyzZLgHGNnLe2XnHYy26Yak4rVAxq1C8WAkLkk2bMYS8P9Z6iHXV6ptFhuR3QMDwCpedwwjsqviZNAuGVFS",
  "key38": "5R2utY8xqWeGHs69yokXqZq1qDErzW1Ebd6MBAtTMKJUrZKbgmgPypXh7zGpNvk6GnyRcp84Dqrnu2LG2zgNFqty",
  "key39": "2QnVvvTSGUCMygZsXgMAcFLpeA51eWgWAEJdt6HgX3PJwYeKwk7ujmDvAcCHhkwbDqMFattXJG1h9GPtNSFpL6Ya",
  "key40": "66gEKZcBSgfq2XgAT3tsn7iK58ZwvKWDNDKVRuFMjApsxKxdPJjwJzGBwkevMV8WGukmG4qE8B8n6Zoagq1HLFjA",
  "key41": "4ciqQabeoHs5JKsw6Jw8HGKB5bKCMTzUuDPC7uVpsYrYDPioNGp8AL8Ka1k9bMVDbSUiTBqFDjsR1Z8QX1qu2h2N",
  "key42": "kArrGEN2qinS7qsygPy8QcrmhM1mPxjEKnEw2RwU6o4sDjbHcvXUucA6B4A9zmSn9NiH36MB5sFf7np5bb5Gg2D",
  "key43": "5LocaLhboUzH1GbaVgVJz11eyDesMRQ8quByd6yQVLE6z7f2cVEXHFTAxrTAt5f8y9uuWnXvKiGP6KDXnm5T1amh",
  "key44": "3z7Yo2tJKQrxpDZzYEq3Wg1BdeRk8qzsuSUqJSCmjAi9uNViGfmNFUMBj5QzXe7ftxSLnsnAx4gasYPxF2tLFiVM",
  "key45": "NJCKiNVENpXwPRyHgucPLY1g7MBWQZDkCmm18JDQ7QcX4RQdPSAG9Cp5bboDLQNev1zoZZoRodjpCieHu2yQT1J",
  "key46": "38c7itnH4T79DSMZhafnEQhboz1i8yED4Tf1T2nkZCCQj11vGx71BDqbGNfXev5KvbauV1aqLkUuLXoZhNbMhTSx",
  "key47": "523onDA1tR2oMgb9AvaGsTridTTtwY1H8yr9X5eqbvmDGkC8UrnSwuwPFX2JzZf4cEFFbtasK3AX3a2Y9bJJEMxB",
  "key48": "3JgYjR61HoFZxmxc4QukYGtLpZghyKF1pRyskqchnsuuxEgCn1pSpzu5pC8mCjgHmfxoiPX5f9AfamKfvoNpkR9E",
  "key49": "HW6kpPG78kQnJ4bkCYKnNdf2sB93tqn5P9d2ZBFiAizcQbWecFmXYDpNji7fY9tNMDuPLK2mT9GCNkWC99G8GcT"
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
