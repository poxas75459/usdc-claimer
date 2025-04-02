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
    "2Fw2BbfCFDP4Z4axkhycyBmmYAfpXSp5RwRgqzMih5jKzk17bG28KVNLXi2TCuj89Tm3f8ZzDRheCiB4i8NViTLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XdCiPLRNhgXGs2oRoC2YsNgWX3PRBs48qaVorgbpvvdDYhE3fPuegfvtvxQpUzYxU9ybgWdbVqCPoVeTNyWbEfy",
  "key1": "2bPnzvbXANnfd2M5qvn7wnDfbVQLp6dnydq9VXrvpTQjbrm1UKdaRRXLej5pU8yPL6bT2sJY8D4sXVDZE7YzExrn",
  "key2": "WmZ8VnZ91EHZ2snkdb3cMNKYJbRWQdoxnNXz5bDirajNEthJnyEhN1f9Rg826iXsebSDxjSC3w2gxMn9JP2T34U",
  "key3": "8qXRL81ZH5CN7Ugsdz1esHrwbbiBHJLubPCfzU3YhS3SWGLPfkbxFCPwwgFtH3LLjjaYGctwrgvTXojpAjPqLvD",
  "key4": "2akg36syAYVd44qQEbBcTrw7VKaHxNws37HwUVQMUCNsy43NjzCt4wiTbBEfdXDzcYzmykPHX6tj4bA7QcrQx9X1",
  "key5": "4uEwffFw48AfqeyyHTCQ7ZSYDvBUDACgHGLQGoZfSgrAx5mpXaGV8CcHU33twUgW9PCfJBXG5Lr7r7r5zjPkhyRk",
  "key6": "4NnkNEpQYDw9diAjftomnjE3P68AiTNpAJxmpcKkhmsiCw6yL3hE7DaaCSQ3rfyxf3mgnms1Du3Lzvpj8x9MTjP1",
  "key7": "2oM5sP3C5jYbUdcPbAw1EQxAiYsn7ss5Mqmn1qQzqFcBMtJnNYehutcfxSyWQmDtSvjTNWVBckCzdETRm8osPERD",
  "key8": "5PMFJ4DGKVqiMk9Hgi8JzvGpLTNZ4xHBx8BDqxhSEdv4XY3xussppDCpDJmaxKskh4MgUBTGGsW9mCskWiMqprRN",
  "key9": "4AzTgkqgRPqvu18xkKefmGJoSnZjEzmbZ7UUuXPMfmnKgqBCrEsK7hUkjYYUjbF8jMZYJNrU1e9g4VnEGND8FG3Z",
  "key10": "5UzdHKtQPYrKtcRUfZj9mvjX51WT3maQypbdjtvVChQEQvsH8cajzLBruViZprnDFPFSMwfaQvvoZ8Xnhc9gb2Lh",
  "key11": "3aN2iUGiaPJPGiXEu1VUFvt6rBmgGEP4QDG5hpq39D7X8pHZxKdEXGvbj5U7A1H2FwZJh82UB7VTJaDzyADiLLYx",
  "key12": "47B43AGYb2Fg4txMZJwUPNF2xyrhAYF54W3oypfpYV6NxFu1VqymaFUMLbHAeziV2dGvei5ia8yoxQNxZTjiTDNr",
  "key13": "3jeakzH85PHVZwJRTgivyFtb5SAoyLJV3m2WYYAD1NCCGRjz8GmCz7ork8gvim7FftpUSVSUoCte3RwcraUA3ccx",
  "key14": "5vyF84DZGyAozVn31mBrcGQRjxyrrTGYFrcQJg55wM5dfMfDNqcbXbVo8r7QUVtYTt1uhwiWYmJPYnCZS8cAfNjf",
  "key15": "4fd9yRymScNoK4MtwwZw7rvt7MZNUozAh94gEMBpQz79YpRg4CpkTmHyCLUk2pfcMtz8JRE4PE4vr483PEfyK418",
  "key16": "4ZcFHhRjy3uQjNHVLtgGpiPhS6mxCNkTzSBXeS9Rw7sS1sMN6JrUC2dYftLGdZqrepe9R8C2a5xp4iz8fne35RL",
  "key17": "326khVfiW7NWDwSQssSrDwfVqJixqwFkbcuaqLNqmq7dLuyZzfi6HU87ewokTupBGFX2Jd5isxmQgHKdUskqgaqh",
  "key18": "Kb7nNJ2TnhMhGQVdE3Cu6Z8gU4ureCeJPSik8RJoZnvWjV4k3iByuwzDbC6SBwrCUKoPiyDhL7smnLqyEy3GWeH",
  "key19": "577CfGpt9vs2efwTthDRSTNiQKB7JoUxUitC4ueFKyg5eKsfj9LhrUoymUEBZoJo2kVZPWRdeBQZZxMkN4Do9czW",
  "key20": "rxbEjk6jys5rm2fMWAuUvVPYeeocEitTfd8FoJiVkmVHK2QYRtui6bRrUq2WZnjpESzLvLWxNwnQtcScPfZcH7Z",
  "key21": "49PcnNqV8BLdWLDR9jVx5Lov3BWorxPZ8kwPKXeYUtEiQ1EQrAD3ZxFZFLNnReCuBT78Xsb1Yg6uT9UaWnjEN1yV",
  "key22": "59CPKhC7hgh5b5wsHobooQqgCpzzrJVBnrXeX7FVYq85LvWCbSF8rSxz5KL1MrwMh7wfKH8TieSWYY2u1LqhGfnM",
  "key23": "5YtMqJaiDWUPRB7To9Ydvd6YrtPbZLFNSKQuSF2qcyasKQzKq6LMKpvfHB31BitSQD6Vp91kGk9g8HK4MHLLZMEW",
  "key24": "3G1adEvM2f1DcfbDXu8AuP83VLARvddeurfrR8rdoBTy6jbAMU2zZWCwtxM2zLSNcaAuxd6H72g9w9m6qrpWZ6wn",
  "key25": "3v5mL6jrS5PsUazQZdhxkLiWsSNkpqSVMpMYRmKCNKu7aimts2Q4CwSSJNbGPBCf2pZ1cgTeyPj7RELEUYAY3N6z",
  "key26": "4eWtYE53zduLyco3mqxDnXRr5scwetRaLxAiK1Mb7WN531op2r4wuhJkgSvrTmcSUFDKEiJ3KBudtohWR9ij9r4F",
  "key27": "59hGX2jyi9p6iRBmXENaYFKNh7AFEiXPoFq6oKFFLkL9Cx4gabHAzbFGV3pvpe8ahssbPz3XwRyqHoW1HJUTXyYi",
  "key28": "2wYsuNYDAYU2wcdNqgqNUGDD3tZW6p7QNdQndaoWoGXgsssm4tmQUgrMAxFeeThCHWMvtRsG2pKigPDSAr3YT9hP",
  "key29": "3qrvx7M77gMKspUHRimoXjRt7wM8enkr1XcGXT3EvA9fhPnMHX4YqL3SfqXJ1MBWCi5kkvwd5NtKvQPWGpoEEFxu",
  "key30": "259ZcTae2jQ4RumFNFh69Wqr6fdDiziPxH41PBdTqoaZX2LLM7KWwyJPe4w56PMYj31kU5AW3z3zwWTSHHuuao8x",
  "key31": "2c2vNqu4E6zeHyegb6bsQv4XzbrTGFWT9fZfsWQBA6KaibPvkgWM61eNyocTxEKvuLuTCyqeq5G195GiNfqQgwHy",
  "key32": "5911JxS7h7rNCNTfiknuGVUrxGX6fD3eoRfQ5DgZn8HwC7KYAYg7habdwcc8b6J8Lf6p72uNKH6w6KUYjsdEpqja",
  "key33": "4BAV8BiTN9TUzGe3SthZE2QaGK9RFm1V1zkETkA7kFMV2nNxr5dudwAUbm1Qc37dAmGNWgFRGhBAAdLVX2uC9CB8",
  "key34": "23ZjV31C7s39xUfY8FeJtkzt7UVNc9dDTLu7aymw9VC4aUc1KK5z1Kay6vjoKZ3gc3HC33doqQ761afTrQ6oiSQ2",
  "key35": "g67wXbTyCUB12ycYVLqNwXTcA8dd8kuc1Tuhi1N6kxyicEDX8QtJ5wxC3v1JNkfwuxWJQCgYJpgcxPNVEsNhTWY",
  "key36": "2ZXnJNDu1WEAvwTuyycBDmgMKRB6cWFxnX9GqZjVQDoYrgQUpM1ozMHUFK3jfEuQH1fZVp1mcQcLJd2m3QAEP7wi",
  "key37": "4MyET9wfNiSsb8quDCSdcbVyyDnYFxPtrPT4ng3iLLMGB6xhV6RyQ2kizWC3R18Znwgu4FE7FyftT4CxN5suxuw1",
  "key38": "2PDxzwPVj2w7wsmL9HYNrUa77dMLWDc5REv5yUYqwbEzWPRew18prvhN3r5Sbew7D1EfqttX1DQhDEWrwhYWowGc",
  "key39": "1nPk8s6ENbsJBxQi89LXGnPJDWbzEnBax2hbErBmcc6gumbVRoDA6iPoiGgHo159NNPFMuMw2F1QTmwwgTWRWw1",
  "key40": "5Tj9MoNVzMz6cf5JXJBZfm29BaNQKtKNwAZiMGFTzZfLUPJnP5JVDmRJvZw3FZnY6BDRV64eV97kWHF46TbCzrEa",
  "key41": "zD31sFqX4jCskCaYWWRYz1hotSL8pCJUJPtX4ZkFPvHAkfKjBmVpp24k68npiibTFANy42otqsV1oQx5zcb9R72"
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
