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
    "5VifHGBvvvsUjfzkhQKNKrZXKVn2cK2pd5ap4a2Sjq6LENmwbGy9kv67HaFnZuZLiQVmqN6gpfKqLAzeqqGiw8Fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPGq9st7NDu9rqS9jWdhmimQHX2YvX8DskJscUSmrAJws6xeQEThrR2t5WQs8cVbDKPnkcLogNY8p5jQSmEUWho",
  "key1": "4rSqipG8bZ6aqtmt7vhhGFyRsTxinzA8TcsimLjquNk8LNk2CcBnDjJuZm1m4EaeNJsTq22pYaaTHXBUai1d9zy9",
  "key2": "44Yr1ZrmBAY2z4enSdbPLRywQyPRq5LnqNa7WtXuU2W1aYHNuL1q2Dq4FCn3WpGKiB9PxQPqDJFcdikSykQimELH",
  "key3": "2dJJxiGKr2Y6djiJgbFKSK5Sh1j8GWWtS8F7R2zs5Bg79e96YfzDCM36CqwT2i3Sca4o8WCV4kdm7GTigtwDRpLG",
  "key4": "2wgJhKyAeXu7wPKRgLfvtZGP8v2xn46aGiJXPhGcdj1NHTs57ZjBHPQHBRv2VQaKVztnBUnEraoLEvUuK2Wn2wZt",
  "key5": "26dVB4QJp9kQouY6uN4b3kAbz9iaUYN5uTfZY7ftUvjPLcR4X8sM3FC5FkdBziK5VansLP4v551Q3s6v7nREoifY",
  "key6": "5kuoXhrupy7XdiA6cuU8eTQU9aHBFNC5DFNQ46QtaBWo3dit7pcCMLqRYELWHJkzu5WQqtPQ7ANwu7LrzeLbDKFB",
  "key7": "65wRk3bZdDBp9o5Ft4kJpe7EG4LCVXnjMNb6acZnoAGQvLaBk8WoBRM8iJ59hVjpVcY9sBNJwFc8x3S12zJn8T4T",
  "key8": "2xUVujRmmZXEbxW21tpsEUaibAcXYA6pt9B1YCjAtiZJMvxSgfCDHpkUJ6jueKMASrs1E46CEi3Vtmc2MX8y1mer",
  "key9": "5776AXKEi9RWspQPHUUCxD9oaFxjfRbKi8yBTszscpPGSadd7kqRBpzPn3FqzSxz1MoyJeK8on8HdvEnboXvkR4j",
  "key10": "2djNdZaBVFc6yoPsDQGrzqFnNgycQ94XhSfins7kucpJgYsLmNMmZy1UtRtL6mfSxqUedGTQot9jti3E3izLdXyZ",
  "key11": "5SH8kUaawAVz13wLL6NqWBidPN1CD2WRLVg61PEm883di1fLf2sn3xmz7JSrVvfDto17fzaoUEwxQz7UFoHh4o8P",
  "key12": "3sGUs18cM1zLbiRo6oQkFbvWm86aicLTYAPtnFedQtQnpU6FAQXiADA8zQRpi9n3kCZZGiksW6JU2A513EqAkpfk",
  "key13": "WzYYrfv1YrnNYMcA7qLB9YfbcF359ewfUw7YZfaozUiEGzmUAhNQxnjXJkGQTi4RHP9MZX5hNapZjCU8PhGsL9v",
  "key14": "4HnqiWMhs3G7FyxEDfRtV8p5oZ1SSBUhFpu2kuAy98oMvd3W2PWPeYLPUgw5b7BpuAqwams4m6VY1Dqjdx5A4dgB",
  "key15": "33LHrNN2AGmf3Keko5rYBaQ8Tpr3Y2endBpnmp1fnPCELwSRGfRCSL6AHmfnBZ2MmKNqbdsEWkLBGu5SfgnCoaej",
  "key16": "XuYdvyiVPy5KbWoWVbgZmFzb3cufQETsmyh2QNknB9tVxutMqUyqzypqDFRoRrV1PNqKJGrLp4eqMuPghSYcypQ",
  "key17": "3jxEngV5jVZz9AY6KYtTkeJYxbbEeM44rh5EEnGRz22CxVfr1S1fYjYFFarm1V61GJHRtgiXEdHX7thSLH46q6kS",
  "key18": "3VH9jMVEEmQdygNA2tEaBcEeZukFDmHrzSD2FwYvcW54nDUm62S18MSuQCyy9UhKg15Hv89pDcW4er37JjyXDfg1",
  "key19": "4uGzCBpcGRDcDWytUHQSbRzLBqctrAsZfNApsh3NTgP1gTViuTqe3CdZCr8dtSUKoqotiDS2RR4jQWUT71NuPVGe",
  "key20": "2KyhGWt1LpYhxDmCEGt56eAxoD21NNPCfuJVNTp3VYz5MXLtDAmSjUdPUhSwKc2JwMDcJn2LD3rn3wGvEzAVU5aR",
  "key21": "1Dan8LrukLuTENfqs7sn39SF95Xy9w53QRfnVhkKzQj9ZykpLiAT3P9Yo6pi3TuZJsEn2gnq3iS9RG3GEsLToGn",
  "key22": "kwrHQAy2nFrdWXUYYsBrtUiMVYebMZJNcNvc5xJmCHtFFoqAWXyvMQXLauFeE4chT6pFmcT35N5WT5iRNkPNMHF",
  "key23": "2NJxSRRFnz9MaCzm9aLbDxyGW9kXrcxbNUjkpfzq8wr9KnCf7b7iJCqXPPQ5jyNcDnyovJkKzQgVTRyehQ2qApAj",
  "key24": "wZ8nvmye7LeK5dsoGGrwq6rV5DVZEwL6JwEVWDBm3uJ1YaFShvFf8fDWj451cjvjsg8Nmfa9KtNAiKTxBCGSEMf",
  "key25": "4VKUEDdKGjyfxB76HRXaygfxQoPomvgDrrGheyhzGgttJ7nh3DfbVURkaKbhsFq4UBNJKrL3h7atMkNSTT2Usjmk",
  "key26": "2z7pQTFxD1ViFPNbBsMK3fewgnhiHmJ5FfzZqfVn8GoaPQ3UShGSYvkWE3BgxmZh58jsRWuJs7cxxRFWsBBmVCbG",
  "key27": "2HzWgDiCSHfdbxcqB5WzdvhHMGaiRwe4oGyonDsuVryMomrGqBe9qi3eH97WpxnHpAbKLVTYKqSXvKYY8Ea9fGU3",
  "key28": "3CC18d1MeVBf1vfMftu9ch2p2BX9zVyEqdnaFjzZYMdgcDTqbdnsaqw2BqKmB5xrsMPdwkAtxYAs9f87yEA1gKad"
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
