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
    "53oBMEMSUZdjao7zP9eSggDLfA4jdU63aqFxaiivEJeoSm2fpXQqPytPcv8d42tzAibomxXW57x5t2RoJor7SG7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xJGMHx4v92So5yXjMJa4LLbt4NfXSGFrgvWHcQeWjHtwYKW7d9hqLpWB3Jwzp3n1viwfDgeKuxhHbJcCPPRC7Xy",
  "key1": "5V3iuZjPQJX5b9sVnrNoLgSwJwQfjoMn6kFhA9fFP3VrJ3ZmPaqzCS5KSP6CdK1od99BoAe2jpD9AJmP6RFDupGC",
  "key2": "4pghjpyojYYXJtMfEf3agjz5mwfLZBqDXm3g3upALBTJAnwMH5XUxW9WdRdtdYffEuQ7WHr7CwtzdoPYQgSGY4Jq",
  "key3": "33S97wCqwXvuf1mAZms6vY1PToaMwaPvjtcETPSSjW29XWS7FJRzWpFtmagXADmzR5gTC9tqJMhUoeykkJJALHCk",
  "key4": "4CjJfEXHsPNx9wQw4jeeNcZGvPqxS3Eat947wqq84zp1tp6A7nKKtZsAFuQsG9xbDxMJUBFWitNoKwmPPDpBTkaG",
  "key5": "4xU68DwaZUZZ35dx6KAZsWbo2MX1o7nXx68XEQPyMCiiPqLKcNmfsGVD4eH5D23U5oD8PzJkgLUXiGe5BtXXe2K3",
  "key6": "oXZDYYgKFwuby7CwAuGA7bJ6mm9TFniford1jkWqXeQKUkxqP1m6c9nmQFRjowak8H4eyqwptoTAiGkVGrpHR8S",
  "key7": "2PcbbsLnQUK3roNfx8wEe3FQPruFDUADgBUW4yaVQVcfzFBRw6zkfRac1aBkW9c5qZeYSCqL1yCxLLFErbhxU5R5",
  "key8": "2oAiKDFEakcBGL4sc1kry7aCK8uZBa4EdU6MwJaB4mrz4MnsgXG5KesjdgudPmAszRzEBwFTZMRKqXaqSFJsooUt",
  "key9": "5f14M325D2gvctEqqsrgC8yEtCntkhPQq1j53Cw5wxyBYaKAMdB69TLZmsXHhUDkQ2DKfvebHG89EXexUS9VL7Af",
  "key10": "55gzi7DnAgDteokdFoSisDzFco9KXPM9zJD7atHD7gaqgQpbXwRokFAzp4CsVz9mmg6mjrpFmGsgeZPHXKtHeSn4",
  "key11": "2gQyDc4r5qe8vreCiz1CuVfGgZZq7oVd5wxCPFZSFsHj7Tiv55mdobTPPZBsUBCLP4rDB5SgUC9619rhPWbTo4KT",
  "key12": "4nD3cHtWQxVfdkzaJg5vzJ3FdZsH2PaMkcWdnPZhE2ovNEbyd4qnmgGTJt68ZtQjmNeRh3PWRECzaCBVpSRtz6Xp",
  "key13": "3uL56MQGFvh762EjHZHonFWax5UvnhttbpRPyAjFFXCL1PtiEMmcQLNQ5ngvkpKfw9vR2bRxCueVa4wMjaki9JDN",
  "key14": "62fYSAsMYFkGHm8pfTBrhbYDBFNrnHxjUu2Sw8mCnYfZGMRMzybDXAFuSHstX8FYG7dqVYgELu5hkXuArTpHtL61",
  "key15": "4hux515S4kkTUENLqnWwj76Qr3kQF1vyM1qPqCxma9STBSQc6M58eeDB4uCCX7UznBwo5sdJX1CWKB83UQQuLgWf",
  "key16": "2Xpva7ePi5uLWE7WqNLMrXGRdjCMsrabhLoJxWFnVzeD49Gia2Qmf3mk2f2CWgeCPdhwFjfGokp8qb48inn9TBuF",
  "key17": "6bbQ7M7VkhTGXky8GEfd72VMRr3Y5JEqiCWoxockx1WX2c7VERFP94He8sjYAJLScsCFao7KrqQdrE7e2ycSqtu",
  "key18": "5ior2C5PwhBMei7McjdN3GwjLaqtQyyXPMHn1Jp175hUiWdBrvMqmZDre6cr9iqK2rQnSpR7BwKyuLW66fNj6WUh",
  "key19": "2e6X6DtEkYEt61XoUYHyLxbsfMJtDsd2gSaZBhzT1rn2yDM2jRZCp26fQ6fSL5wtmQmgYQdbzW2vNCU8CSg9d3Xr",
  "key20": "4Hasu2TiMhMhLS55oQH9yaUXZgdgcaEgqvsdYz2FqRfNjgw5VBLXfnPdK5nmhmj6ir7SE2tHH2a3gb47f6Lr4X9h",
  "key21": "2HJGHu5dN6gWfTTPw32ute9cFBQ3RkFv1zoNcFB8VNNQpC3AvVTJEbb9uY6TS72rctmFfSjD6bV8cQ3psFEryyLw",
  "key22": "4xjH4JXLNdEPitKskmpCNXG5K7DT7yVponY4ptokCbh6fvbSYG821MTurex1bwZahWmXFaPzEo3eAUwsUdTXMyR5",
  "key23": "5S25gYDwzRvWpRAkRQdyhVyGfsHgSQWPvQNQjShBYeENVjCbGg4R59tqfB2GJLWGPm23J2V9j9Rx1KiGhB3i33s1",
  "key24": "5LCArgzK66VHDSZXNSWT1PLFTLWnLHCzxTG8yeaEWxDhXTxGrz7owwt1KWhf5NWryw7KCTt3d2TAHDJgEoyJTHut",
  "key25": "5hyf4uCPz91gRnqHi2Jqbpc33MHAJ68fPg7fTRXwYmLZKx14MamP6gF96HhSK8Gas4Qj1hNE9GsBrEA2ieJh1tRe",
  "key26": "2JumKACSvX5Un9t4mfiBPnUyFNmCmDBxAhgLuZAUuVCVuEoFHhB6Hh1p2P3oo8EkmLJPZe8Y66kVo1oSRbKAEniB",
  "key27": "v2rRp8Se7GqMZmscj86CSSbvgJsn5iN3nAkFmXMXF17EC6ds9duD8D8zKMmtMBpmaXMNx2gzqq9wy9RXHCt1UiV",
  "key28": "3J353CME6HGEpMsVj9GgFXewBK8K3JrLFcBaz4puq2ETo521oJKGWw76fcJS65moHeE2HWDYw7Yi5W5kdKs3fvEC",
  "key29": "62kqRgeLzp1SFb3sNCvygkYXyfUQCrXacRKLKS4GWRHuJ9krHtNNnAE1DQPypM8Tj3PXEnDoXAGshzs5rWKaCvBv",
  "key30": "Fb6ybdjpPa1Pdjagqq53ebBWXrESyZb74kiuL7doZR2TMZ3AtFhtvLJ2JE9n1shMUSZ4DY9FTunnUsDQ6bgxGu4",
  "key31": "24bZsnR2h7MjcRWhGU6ZeukvTfEaSMyRyNHBuW1dtYo8PYpF6a29G9GvNNnoP7LeGY5v5igoQkAwjFSZhPTvrEgB",
  "key32": "rm5aDQc1ZT7AiuTNjZgBEL9bnWZjJS4h9Q8bhAn317CxhQEXgC7jDXqKZ2UuXxnm1aNw8pxEeoC9nKeWefr3e4d",
  "key33": "4wMwxp8X4aEDFBwqqiBG7N8tKrGvCxyU5RMX8c3wsuxFkyS4XBwUrcCBP4Judvyp1eFJrfph9BBEVAAGAhPUuiD6",
  "key34": "4ASQS4EWG47G5MonhPiBjQJwtXD26jTWiVyo7KXMjCRhiPNeVtszxZTWGdnVovGXMGKN9gGrzdUiUNtJdNMh667B"
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
