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
    "5zGgZMePPzQQaM4v8x7C4mbFXpSHXaryAFwCHU46QmPb1LaoupdwsK62KA82416SpZUCaZHRxDgYYUMLbVE4eXDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSq7L21GTsoC9gF2FGdP3bZW6gNwGGXhzfmnYqc1ggDbp3PzGxb6sDa2Vkz3yaZMQ7fKvsvPpuWGwdcYzkzWs5",
  "key1": "4u4STYjmMvXRxLzPbmQA6ZzXJYAz9J3pY7hTuur3sCo7QbsRkac85RFbkaxfrXZxQ1MZnW4PasdaTonum92XoSDW",
  "key2": "3ydZgRE3wrX3Neu2TFte145u71bVwCxtqEQ1hc4QAHNKK4DH1fydaCCUFiv62L5mQuGpXMJatk66LZ1yH8MpQJFY",
  "key3": "4gqCoWAFLfQmsDNTU6fQFm6kUadpJmusrX7LVd61F8zgt48CR4AisaMM3K3JxbjLtNMfL5pao3whpPGK6RDLoQsk",
  "key4": "N8QMazo4QvniwhYkVSPvmLeWUiejMRqSEXBt2ij7kgVrvaxsQKru5ELLUHPest5Xc1FV2y7hMyZiQM2mKpTGEVU",
  "key5": "qJKGcikhjAXfRfvYKMBrbyZTjW89SdRxbfsTfk6KMJeSt96KZavWiYPKWgcRpwygY4mBsQfXZNaLmsXrFesQeVC",
  "key6": "3ZMcw92EoPcnHZp8fZLoaMcdBxDH8ArbzRtf2sQo7Njo5oDk6fJFs6sKhyxNGcpuot9yvyiUdmiCa3NXqh6PL3nn",
  "key7": "5V76tYXWL6ZQZzuLSNS85cV7xQRLyM79uFjLAuUk6M2wKQMwnADQ8YEv9iU1Zop3pwJFhUaLPixtpKP2Udpusvmt",
  "key8": "5uGGCb8LZSrpnNppwh49nAsVAsSiAnvYiWHVCLz9zFa9d9Kgcr1NYSFYNjhCTaAyFsNZ7urnagcB1NRCEm1Yk7K6",
  "key9": "4mN4dPLXiNUaBCX3ANKNa8Etnnj646RfcKUHuGwJcQawUW2X4kbSGMWXNv4UcW6xvDLgrQkv49sWyNtGXSvpshU3",
  "key10": "3Tu4ShgeDDGKC43mkZf9714MvopshymCxsw4a38C6pE5yLVNKKLVhmXfWhC534mMXmv7vd9QdFAUTkLfHn7DBcME",
  "key11": "2Y3YQRLxfYd6Jms5jBJqxRvGxpP8rnzLGfa16yDahWL1oGRyxkKFsqdehZ8ahgSpeuZKsfjzzrcJoow4HR4vZReD",
  "key12": "2zBSPHt82SE5W3ypu522urF7oF1SUJetmaVHK3WyXTFsgMHjh2HCq6cSP1ZeKj1FJjkWyFd8egLD16mp71v29Nbm",
  "key13": "63Y8NifUSCWa3jF9MAb6ZJueS1Vi33NUqYmc115Nn9y7zUpEKQVZQXmUsGzRZQYyxwvXDCS6Q4ddRBDxpopdi6dG",
  "key14": "2ecqzjR6QS7R6sd4YQntJGUcgGDxWBXqJaRJumW1HWxiAkMYUJ4vEAPpPhy5sfiNXEvfU2cdUavssFZpnCbQ1qvu",
  "key15": "4RChLXKyfZFM77nCqpaZrWuaHceqH9sDyR7LAGx6xcXyKg4rRjk62xhQtKo4wbevnhLT6UE9tRtN2RBT7yRCNnZt",
  "key16": "3VxGpShtissHaXoA43ka9FmbmKPspD3UVaE8JX1TvL1aFXPNyazCrqyV1xCtjKYuPaLHAqctTyy5rP8rURvr8Ymr",
  "key17": "5z7p3YAiQHPaYhYuXrZxU7eZ5H8VCNLEpjvxAXMw9mqZ2GEnf2sQabmSSdVM1oMPVAjj1dZqyjypp2Bwq66eAdZ2",
  "key18": "2U4xoksxKPT6tWXs7gNf86BVfXGaFJAk7xoJfR8zAoTH4J2JLWfEp3JQzwttqPNX7EGsZNeJd8bck4nxswnmXRFn",
  "key19": "5MVTrFApUQEnKzcHmXkBGCuGiiWu7sSDZcdVPyAXMNXRzbHW5BBeVzNN6GQTRdRbdqLFWLsPGsGSCxQ5THUiAETF",
  "key20": "281zu9ab74NxC6MGqPsVUMpLSobGi2Kep9hDLBVsxPdewmm7moqZfALdndPYxgGVMC6B4TPjq4JbVG9R1ZTZ6U9h",
  "key21": "3XiAcnnFPfvTfgrHowPfQo8wc1cc1SLM3dzzvYhydUMnEnJSYwLRxKS1qAan2SvVz4XsUuYGN1ZC4c9DhCNNLuT4",
  "key22": "2i7hGMyMUo12r7p63DohCFDKhEmnZvVzUXhQP96uAVCFMKAFAREyAGmHQj4gcwbTz41YGWCM1Thg1iyWx6g5xZEg",
  "key23": "4HAwDxZr8j4NdQXfvbk8zvBYR11ZTcf9uWFYxDAzLpmF3qEFRonfcV1C76T2TYGLbet5M4qEAp3nkGsab7dWV26d",
  "key24": "2a2XhURVcBiLphuYFNSYr8oEyoTWGcfhJ5EvZqpxyBpipUWunTvyJqa382MbkfMV9NWF3SHxrY1iJiNa9ruKnP4F",
  "key25": "3JritNrv2ZT5nNSzxkhMaYE1Keqx9ubt4eYKrEkfD74E9K7cbotBWfh4dBoTa4USrfxh5n8KyFWMWj3Wiho1caCA",
  "key26": "3cEwPkUQPeMCdtPNxAR36fDbzLFYJRs7bjnQntnrtPxSusj4nFXAFQ4aRg1ViaUMsD28Qs6QsfqSZqAaMuKDvsGV",
  "key27": "2fDCBoq7qJHWgd7uLkBKooZCAH2iBPVGtYTNL1Wd9PCa728riuZwdG5QNMSTY5M13W7bj34aBkydATuRzkSXnQpA",
  "key28": "4iVnmKqnAFRt1vhXV5RMhxwffVjo3Tbvgs7mGnzeL9r8k6Q5HXvY4Nagdo6TtBCqc5iGJ2DX88Eravc9tdoKA9BL",
  "key29": "3DVyBuktik762SwinH9cPnodWms9xKK7DSnfARLmUpH6mHr7dvuWhHvH98hU3tfk5pxqc2GmBnKnUnYW57zL2eNS",
  "key30": "nSokMCGB6Xz3PRYxVNLKx82WWqqMwGBEBeoGvLRSpaFz8nPd77RHsMHsjTTKr4U3L7KiRwWkiM24UuE9puAWrm4",
  "key31": "4J26Nt8hHBtKaZQNtDMfK3rsqR9GCMfwKT7641DhutwhaWBXrxMUuTZuR2eN3Mchv7mW9M48Aib13J4X5rCK5hdh",
  "key32": "44s9XTVKtM8B7GLGuWSKqMhdUYoftip8BwhdMJsp13Pf1EDnoR7LtGs3xLBHSSnqH6yG1bjs95PaJLkQK4SiEriJ",
  "key33": "38J9Xj1cZTKhrx6EfYiSMvJi8hDjnfWonbchiPtJFgwtLsBaTWdXBetdQw6UG1SJnUkANX9nCHYM1gZ3wXmfKhWi",
  "key34": "3cRQpdW4EiwkXqTdAhpnyLeALDtzGFdTRqrXMACJs7JESBrKSrZHUDV9TycGhG7gDn1vbi6XXrpsyKaosd4qXKKY",
  "key35": "2qA1AJGxjUdCfEX8GnYecmNo55kvXrPrUHagce6SG185hu2d1VscdekB88gDRSXaFeMRYVK8U8fCPZ7hYTNNNkoQ",
  "key36": "5hNt2vazqj5nVUT31vWeDugwfXjTKCMoUQueRjtqKYkjfSuJ5bkzDLgrbD2cW5tssARruX1KVBUr16ypPaTDteEp",
  "key37": "3eNp1phgH1RHqC2so3wYxwyD2e5gueGnJhjUrG9gvX6tWY3kJc88CzD3MNByFe3PYAEv5o1XXzDa3YkzK7JGPCX",
  "key38": "5bsdNzw4DtH2gUUkKdDh7dsX1ThU9sRPzwx9661o4ERExuSUaihBAvD53gQsYGSycjgTcZWyjG7iEtd1nbg3epiA"
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
