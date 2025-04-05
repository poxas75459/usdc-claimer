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
    "61mscS2h1cj7Sp9Cq7LxykQEkqgDujDT9xzLdkXfb8n1rjVBaAPgGfCaFsbxUM294AunqRP4A2oMPuLnmofcp9Fx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P5ktzg3FKibxVggsjyKryebLjMfprQPwSthS2ekyoyx93ovL1xxNjjEADgdFqc8D5BcjHxjwEqKxz1fCPDM73gb",
  "key1": "4mpPBVToGoAEDQyvx621Pndcwhaov9zUs3HgUtBSfETqgBEpjBZhKZSiRuiEK9tKKRrVMgTHRnUjxSaKhcKxixoz",
  "key2": "Qbdj8bngbvjAhkZ2EhSGsjXS1SpJUaZ4RVXPr6jDw7987ZznBhVGiXGBD1WeDFMjH7LgLdRDjDXvkMK55kC3YjF",
  "key3": "5ZjvCVQfp3D6xNbpJpnc1vW3SynLBNoi3xJ3RyLHXCvx6xqb9Fbo5iMQpzu9XsV3Gf8VBYBPZgAFpgvPpG9FspSg",
  "key4": "2cnmD7W67WR2F3R8NiL9WSVwJR76A6LaN85FoihG4qwDd5cnLyQ4x5YLvVqNLnWWK1Stffzm11hAvwLuT9fePdTL",
  "key5": "4XYTfMMikYks4FdSXczkZk1H9sXdJijAQZ252dFC1Ln1Riv1ek7BYgVgxQRm6vaDK1moeA8AdAVVpGDZrPKGDqNq",
  "key6": "4sBcgpNuAVhhe9khdFh3GyHQD93zZTntZpYaUz6VegZwCwGtrd6qnnRRpuCpAtHnhJykr5pze46MP5XNc8UoGve5",
  "key7": "5XoCu85mSN4XRNr3xhfYsiypViBkkTSGB7UJaEwuXhGqzFimhoS8GMYPAk2qiqf2XBgFRSNfrqn4RjTahYFCMZM5",
  "key8": "5Gbi2HM5QtpD4tD8wHSqENML5qHz1ZMeNNrKGj9H1baxyLecup4vJneLjMomZCVyUtqFVqPucUrDJfPKzoH7VT8q",
  "key9": "2RBsZUX5HW72es5BoERfts5aiE3516QiEVXjsG2GDw3bxRQX3sdr2qvBR4tSsXQyr9nuPoiZbrHSMAJbx55zWeBa",
  "key10": "QNSF4kn1C2L6qfjoAxMjHEB6gDydpQeTYq8gC6LVUDTD4uMPcJ4UUvXLi2L4SQ4X7Zc6XLvrya8sGqJNnzq3zB1",
  "key11": "2egJYQBXn7dcCh5nWBbnf9Zpa8kvuVwX8bRSrdb2mLhVJdwEotMy6njoYuWCePT7wsYFD9p4G4nHEwBiDCa8K1Ge",
  "key12": "3i16WUKKH7DuTiL3PN72ujUYu5Bbv8vr9ukjv9foVK874pCTB2Ktk5xknXjAFV8smzLh93AsfbxQRq46PYUFda1R",
  "key13": "dBZ5dHxsm225NGMhv5AzDELhQK9qmDx88wNj19TjYUgCCDnUr86VizK8vrqfzH5SURAc6thGHfw2CRFpZ1Laqvw",
  "key14": "4WQCq7hVvhw7skkvCjyDzrYhu89isrjJDhHPh8kAkMYmwGMRU2ZD16dswnU26own5Pn2L6sJRMsTBa9RWV27DYag",
  "key15": "4p9DawM6NHVjm8Pxng8xQf4TAVSEBmsHerEqTcU9DHEbruDCS2FY3ZE78Z6oCfV99Pa1sr4QdcbvEPifN3qVgmg1",
  "key16": "5jJNUEVuUkBLvL2SzmtEoH6exF4FoL8AaohbphJ5N49JY3d7ym25x6u3bUY5kUVph2mxyZbkMzyCwKKDyUTgAS2o",
  "key17": "4HFSnfrMenFCWkamaWbvx3SzihxdfWgj1ACcovzfDzsAE35idCa3onQnEJQj9DA1iaXXUKokAy3ByfyPBwSXzKV7",
  "key18": "3NoXd7RN2sVhnQsywNjGboguuYsWWc5b9ZKYkr7fqg5REMF9LHvWURnkvmGFRsDw1Z6aGHvtSkZkffV9jkWMb4kB",
  "key19": "4jBjLs9SJdQyjARNR7vpBRwZuV5sob4vL7AzoHuWLpoitw3jyYeUrQ8TKFhfi7nxuwtuxEXcPHJoRD4dFwM7UJ6p",
  "key20": "6NWyn4cN8GjRax6KXp6FF73nEYUpDbZj5q9GSjZTi29WZtbxcHpnt3MwKDn5RAGwoLTRtffzKj4KsKbovWQkRZo",
  "key21": "5NUp35NYNXshkYQc1mPj3DzrbwVREJ47cdiC2tzK2uU8tHNY9aZn8rmR8hesCRrAvsHDWpuAL6X3Ek7rkdjkq8iy",
  "key22": "WSHDEqAWd3r5GRo9w3azWhWhao3DjHsbSdnzrCdBsy4BesdoLMchVZ1AkndgxrVUgUJAUaLekHkUhgFHxLZ1YsT",
  "key23": "4gD4NfzFCaCnJpTJEHhLXt8bwoE7FgSW9r8P6dnqJ8CUdbNXPvsxJTqH5ZVA7zKzRrYyNZVenppG4hk1Y4wwudpB",
  "key24": "3YxWLUJ2vEoZkASpFQ6jBSSUHu6Hh7EfcnFkamtwDN6b4xNHsEfCfSmZoipAPoR4SG2yNsJG3nBfpFvDfxCthcKe",
  "key25": "22A9aBzJV58LEjiSkZTsZkgZsimwcEY3wimyVeL34gp6HXJVncCPbrzd29pHHF1PMYzp1sSZ2UGeYK8a5EQotD2w",
  "key26": "49CjxmHJHNabKM4oB5k7RGWiCUuURzkoxER6MFDzxsWAPG8EDCfrh9xTj9vAMP1iyiAxaRrMRruFFwnvNBEumBr2",
  "key27": "4YFLnb35mZzvyztexih1tweD12WfRB8LeXgX1QBjdnVf7LZKKGajeb8LAsNUBqHbKE22f7F1v2np7VwhXNctXqvG"
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
