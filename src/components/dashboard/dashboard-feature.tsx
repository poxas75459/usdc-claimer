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
    "2hwaT1k3p58TXx4HzxJureXnqW1wTDP6Z4KuFwimj52KfMNVSX4dxAYjdt3HB4s8Hnc7LBBM3r2NwZqTEhuNyceN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ziABnJhi39Y95341dYjyWZ2zHbJHKmLcadZFMCNdzdD3n3Yk14A1qR3iPRvCLUfj8r9q2cvNerfauY9QC1ui4fS",
  "key1": "4wwAkx8xiGebmbCKmB11T9vjauVrSuS5BD6XU2hAYkCuDjuBa1yai1wr1yV9hWRNpL1kwHdTF5ZARXmJL1VjkMGK",
  "key2": "Vh6guB42tzovFTy2one1K7EkQzX2jmvGxx6SpumqW6ot8o2evEVLoWJxWEFFSoMmjog3v5maiL1VokY9epAPyBE",
  "key3": "3SED7TyySitMo8kAKaDAhCijA1WNu6jyr9R8RAvJ72Kg4NmoJjcdAvvzzMZEY1K2s3A5TYpXskTZDSKrGCKnzsSD",
  "key4": "BqfyaCjWiKs8pbpYQPfwH4QjpE9rgGhz7t9mFoYxnk9UCJEBu6gvKUosscVAJAPNe4FhSNxnuT7HhKnQFZTn59z",
  "key5": "DVK1VitcEdQSdEpkbM8dMkMHeuCfBgHfVGBDDBbgUx4jqaJpcZ9yYZFQryH4ZoWYJY7Ttj9WrUrfGunLHUtdc9L",
  "key6": "5SVa5scUeVdUCkGA64dHUAGijXD29W2ZXFu2fxgLGvtjQGJjgNm7VMqnYZMiTcfgwbGC6VZPJju3iTBSpM9aZ3SC",
  "key7": "467YCwzSjKp3xYCttHUfkUuopQKBYriKpzNdQrW912gNJnBRj5z8jz4heuaPrBTjQ6NmHsyHuBcsYSzUkJqN9J6n",
  "key8": "26rpdb8K2JpiBREhbg3drLtuG663uUHrWz2a8veVX3D9jMwgmwGd6zejA1g4sYth853rGLo25aX8A6zpnnMDySt8",
  "key9": "M3TjhQEuNvoJ7ighSk2AranEtuCkzwZPDtZhkBUe7VqoLfcpeZtaDabRpSZbHaVf8bBR4gPaysGGhMc74TxyaB7",
  "key10": "4Z1Ytzp5K9xZh26r3V1maqLALUjj4BrPW9YFrJGgc3X6TKwcquVGjWQV9npkih9w5LdSuVbX5eC13AnQKht9LYMn",
  "key11": "2JfunwNipjrrWk6EHt8NdtQg4wjUDszV6WAgAgQ5DyQaC314Wi1pDBdHCvXHTbUaXufEJMy8MoKvN2WRHQDnyNUJ",
  "key12": "2AqCPNKq2G44VaKtgBsYnC1PU1GRuE2zSVFjWjuBP7qcV2jEAgs1qRqoaCsSEEJYtEhGxtDGKBGjcriJf6zrjVUv",
  "key13": "4R7HJZaC1P3ypT7dAJDQmQNppoF2EVgFJxAJrT5hxLLXL6HjZbLJTEHtK7h3davg1zrDxvKowXapTRFmTVmc2c3z",
  "key14": "4ps2eeDYehJGfp8TdkYsWYhWbaTMJqYEcKAmxPD8vao3CxUC2XSt9x77iCy44Vq11yXhmpz8xwarJxEwcznZpxCg",
  "key15": "4meUvCEKMyWHMeqxdKPcDwLBE6H9RJuRpgkkZbJdLhCuPSah87kf7BPCWycoxm3RYviExpXaMWvfYcEiAgUGtycK",
  "key16": "4kkVhdDUNuP2iDtDsqZP24bWqAEdk1ci86YiUnYdKsRkXiCJxPxwopJ3tCqc8ssvNDMDd5bPDi8gWaxU1bpaKid3",
  "key17": "aZ76VLqq7e69jv3qFXEiFZa71NerirZ5fThUq4t5DcBpgKoWwr6nw2NLapj9yKANQybfiyemH29QAuoJTjDPwJS",
  "key18": "1Hj3yErDKAFUyu1HbbhcuBebZeY4EjGkt2R8ZSmCKYAtMhgVSH6JDNth8xn1XMUGFhYJ3qcSaps65ezhbdoYZE3",
  "key19": "53GLCxMaiJiXnr9rsv8Y3yC6G2EQtxd5nBDdmKh6hMDjyJgiC73ejFmpcXYjZeM1kkJCkrwsYLwBYyq475NBKnVS",
  "key20": "4Fg1SV2Y9tPXSnEjMspeCMP7CEx2mGAXdbpsXnUKdPwPQNiukYhpKRTcXiahntuxYe8Jxoo6KJzDHVcp5j2C5W6p",
  "key21": "5cBnFBrS6a2i2X2sLwG5GBY1JDoKGLAg1BXd7TScJeV6LTdNnPV3PcQ3XMJKUENn84tCUy9HFKh5Xri25nXNLpj5",
  "key22": "5fQwioTtok12xEP7y373GBAbqBeGNDmdUhaATX45Ya8tGeNGcHSv62wkHCHarp8kC4DtCwaAk6mU8Cem4po6twMh",
  "key23": "2XfB7EmaFeNX4qo2fqeBJyXp35PdrHW1XL2aqD7wyPTuLjzanH9wirCGufAgP2zBSxGwN45C5hvg5M2Tpq24hyWj",
  "key24": "3uNefaC9FyCExH28Fn6G2Fr7H7cHpQT8P4W3QyNbVdqg8VwbpLvTMEgpqxZYaAoSeZkTEbasrnZbUAnYbcaSHWQR",
  "key25": "46KJsPD7innmUrVJKRzYFygDqE2eg9ry2c5LBaMuScQUMFFaa9HqZ4QMnEDoY68rRs69qjF3DXv2fk1cNUM8UXqe",
  "key26": "5HwsgUXtLDcd4pvcG3RmEENu5T9B6cw8su1HK6qeWcZydBTtRXfLGSQWPhepW2PrYdToAGfP9C1UJhJtoyjEAk1D",
  "key27": "5hxND7k8rBuPhqY9vcoURc5Qpi4ztTwMwh9LfnYYwnyh9c6oRJKqDS8hBVCrpL2nueYHvKNSy42RKdWyxuN278iM",
  "key28": "3DhzCeFZQ7KSVwCfK5YsLQytFhhueUgneZ2aMKUDS2qAa4B8s6NDqmJeUVgmMwTnENn9Q88hxKFQ2jwaZVAHNNra",
  "key29": "gd7CMd47ZGAVa3dYSpUMFaodU67R8VcLqNcwYEUN9Wk3kESm6CVrUWFbW8EJJJg29Fh7t1XwywAHGLp4sJbatvY"
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
