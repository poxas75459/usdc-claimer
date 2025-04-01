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
    "24pneZ3G9aexkXZFSfCkuxrkowW5Nm4EQzmFB7ktdP1r1vaWhw6XRq4fG4bGog4o5f1xdsQeDGu8VaWuFJmxtyn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBqk9MkB2QvciMB8kRM6aVSDgSmZxa7BgFu6FHDo1nX6CRz2zD5Ms17aQ4QRdA4G5aUmXLENHCaeTxHyMZHyxVm",
  "key1": "4YpTeohr23nSG6k9iQ2TeGouP9dZmNQVwxQdehhtqTNW33a3DyBLYQtZAhXFxQ8haw4jNGmwaUKaMTwcGXhtyVCF",
  "key2": "65eAR9Zy68m3aGoXkQT3m6VDE1pWbT5uu4W1TR5e4bLrNqvFk9YgXGUuWxTqfWqmj3ENwpdvAxyd7QXkyQaUWSW1",
  "key3": "3qEW5aLNXfAwUdETnHpu1GsdgLa1uXFgjjdiobocP1D8bS9ZWRkqY3EZ8DkTgwXYHZZVAPQEcttt45UxH5kxL8qa",
  "key4": "24ctVs6rX5KYSWxYisG7EFUCEBCwMooPBasCd67beJU2M19FVSVpibMSs5q17fNtHGcB7c7cdB5fQcESF2GZtH7y",
  "key5": "36CWUo1mG1EgbA6GzrVYaNyPo265FCG4ga2sG3CrULpkUXVzg6CLmNgv6g6swMddFYtUJ8GmCiS4EqX78LpyeSmz",
  "key6": "5Nhy7hDZDa2gyQ3d378Guv4yS7tbaKLioACoMSmR2qKWF59nbfXUedSi8iK7mQ2M5FCJWEsXeqfx7NLHbrfwaKs5",
  "key7": "3iy2HjAbTpkDRqhhcQoYePPDSZL5wjDW3rB5TdJEg17Gynr3X2V9ZeZzsE764oQ7ETjdo9Jeg5DhCuBHJoLF3kD9",
  "key8": "Sjfixy4RKdP7ZfwQU4Q6Ja1LXVDTQJEqkWPD8mt3iadyLxiVtnH7oKasvm9SUaVN4aoWn2RWi34YtgUMGEP37xR",
  "key9": "4me1DGpFWFE3CNjqwUVtCTicrUhQMRL2RKbqeKvPENNEkKRsfiWW5Zm9F3Z4bcNMDM1tXmcjXKuN1DzgviaTuAHi",
  "key10": "518YEmNCGQFTp1siA2fdNnZBiHyoRXCxjCP3BqFhYkPovNxkw6aJaexZD2bk5NxY5tno6NV12gSDUGaxcPqDwHCm",
  "key11": "2ozFjAafxeYkqDyLX7w7m73y4UJEmp4cT9JC9nLJMHs7hjDb6Tse27VzZ9L4oxZ8UrL8QJWQVrcu5yCdg8ZegdCn",
  "key12": "4EeCrD3hCa4XYayTQS1RqZcM9nP9N5Jxw3sWTMJrvtcT84ptq8ZswtmMF6qMd2wz1cAwZnscCpru4TEUYbnTpdbX",
  "key13": "4RWZY4X7LTcHM3YDFqxDKmghADbmPRGpwNMxspjye8iJLJxkoEMEQConi4WasxqtvoNXNhKJHVrehhNbKDXRcdRb",
  "key14": "356hW9ckGF62kHj9YTVxTud8uDJp25ue93C53fAUsvZdQRkJYKYwwn5uTRQ6JyKj3KRpwjtfX5mspMyPUotyRnQG",
  "key15": "5pAGoxsK3HfTE7QowYuXRxQiYp7bH9571SbSRgbwVgkaaxT7bn4QcYxBRefZbkWhGDQHiE6Z6mrZk46MiRet4tBr",
  "key16": "4rojV8xwsGA6SUe3PxCa76hbW9atNoTnm7fCJSxsxUAVXEdvFKk18D7C21B4Ap2HEZjex82DLHhzE6AX5Sz12WbH",
  "key17": "2MDZdaYRPiEN19y24X7Zn6c5tyfKyVA3ciKkMxG2YRz3bQnitYyrPeNRtkQt2isy1p3q4zVs8Qm5hTAe4m892mym",
  "key18": "yESPn8G1o2i2AAwviNFbEYfV1iCreMWgnCmghSZ4ck5UaoDXKDN2MUpw1XXZDM9i6G1QDmfnBcEmy8GjFo3wHDL",
  "key19": "3UKfB6739AESGuyiSkNRdvYmjCkXsL4BipSvFtqanucU8Z5beLrtqtoMcVH5Ct9MwifHfTNmpsfvxiRDkPajMaJF",
  "key20": "8DaFx6hJWLn5tmGgTZYA9Fa4ddMzuRvDkDWhq9tYyosWB117Ee6zAsw7sPv3CvmtuhzxMp9EsooQ4Bfm48Va9sn",
  "key21": "4GEzAAuP2x7ySm9QAGXhKr73RbS38CHfvaoX9TCSvptKnm4UkBmnx8YRrdWdDS69jmpTEYpEi47g5MnJzZjGUHYv",
  "key22": "gd7tRNF948C6jkc38knyNg2291r2KnQehxcN15Napd5mqr2AZasu51wrMDAKy2ce9F9vhayebzeJDTnNz4FvR2y",
  "key23": "JxmKvu8dQj3vz2TaAjGFneGFSi8LgsQgbFpEyfzD8HzvEaLX8fXUQ2YpYiQvhUWwZPPpcazrjSc9QUoWcbxJAo1",
  "key24": "5JgrRuEQkZsQEq2AJEDMtJZVCezayimz7Lmta678uebbJaChfTztqVnUsEpe9GRA51Qd6YZubVxwuvdE2sesAtzG",
  "key25": "45tcGSrMzbL1Y956XHzVFjD4vU1rkBZLE9ujMD3K6hq3TjdmJGKtRjM1Vui9smR4T1pq3R8kGPdB7Kueh8R4Wad1",
  "key26": "5cVyWwwonWVcvZZJ4YYXAxhBmHW65c2TzWebFLZXnnk3pfRwUpjnXPtkmPXftcgjaTsCKLWk5rvxLTupTmAt3UH9",
  "key27": "4bJTQ5Yv7MfvfyPVmwS5Bq9awiXgXEsmtcBb1FtS5FJuVJrXFuTNH8DnjgTP3RniKPSDXpea2dZiq2XnBcgJYba",
  "key28": "4BFFaxkU5mSCuc6rHfzTMGnPRtWU8E1uaCjTaA9rpBWXnv3Wraxmfensz7d6XWNkBcfK3TJmbzrq2tZwjZU73PuQ"
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
