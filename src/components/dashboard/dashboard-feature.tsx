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
    "2CK25romDzexYvVRY8B9Bq2KTTrb2S4o4Wo8s3DtxBPooevdT99BpFqTAJAWNRCCBnqbF4odVLyyMNAPKAJBFs2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uitCXosq97WTaJ1kdjFFZEjQzpEwzxb3NC6Azc16VRe2DvUbK838wpVa6fFspHFDg5Sb2NDXpaEaYFtHFKLAxsG",
  "key1": "5Pa7B8NRQDkBdQWPKyugcACjsfk4MuWVD4CwZH4zUJGbehfJXQPwwBdWcvYpk1B6mKiyBf7cxeYCVcunX3Ph4c1v",
  "key2": "54WCgdkTuuNFTxexfdAwZmXwD7v24N7EGVhYKuchWqiML1beDe1557mge2G9XyCNsQ2oBWHUkzL9aVqm24MKdNZ",
  "key3": "oYwzn7EBGhPmCY2ddfc2PAMaG2U9e5XCqPocDyWkcCucjFCXXpjcPaTuZ8piNibp5EkByXwcsujJb2huGG4prcw",
  "key4": "2rjLDj3YwFhNnsB3J5HZbKhpujx31GT4vUbAQG8YoZQyGNh5C9iFVRnctLaSmQn9obktnov8jM81PWHutwXvMV3",
  "key5": "45nF2ciAaEAm47Wnm9F9gWoQiZVmFtvyBaoSP2SypVnomFTJ9pPLwSCY2ULGiADigv9Q1E8cxcPV5mzQ5ANMkMYn",
  "key6": "KVPni5r1wBj6eFhghiCVZS5FGzHTpdg8t7qMTUNK9rv6mxvHnMEzfFLdkGLHr5NCmTLDMQTDwWGnE3sqoZ8833f",
  "key7": "RrvVm3nz93Wm1uFHY1zFPPzxExfARJKX1Dwq7pYdwvq33GZq6LCEnHQ7boCe4m2NFjw7GVzZn2fqquc9CH3dKr6",
  "key8": "2KXbnkkae6oph1UUVtu8eMWNue3r1RSCxdZvJRUQjmr1WZvvum2hcrCpXm2EdY8PpPcxZt1Qy7Vd15LCF44AKpib",
  "key9": "2KJfsH63ZSEmp8z2ouMNf7hBBaD34q6UnUM26iEVPE7oQEEJFuWE4we6FVx9RLzfhqtKxuFANBbse1A5kfYYanaV",
  "key10": "5kRMnih4py5VR1dY1WVgSYjNkXVqQPfBAAJw9eieV6d5vaujRdqp2ANn6XBwMN7jafnw7WJ61x4sYhHKd26mbv5M",
  "key11": "5TRNh2iv4qv9pDwRTbWQaJVeXjNz35adAHHBhKsVSEmdZWakCpNv9hJMDpWTRud38AB1eSNYEhUJKsdK7rpQ7vnv",
  "key12": "3Q9JsQKkSDeh9q3QM8hZRho3TLZpxMU75BZbyydABhAifzLd5R76mjgj7ETnGsFv9zpJh5vYAt28UEQdVPGj1GMB",
  "key13": "QrJZEwaxSQAdjxUX1pJvXBDShQyhyqjGL2FZZpFkfaLsPuYazU4X9ur6R38RbbbZfMPmv1RPyXco1iZwpfVm8mp",
  "key14": "2nhsyQ5GaNuh1t5u3TDfaCiZpm5SjdhnRb5wdXiJ2BQ5WWqPuSUizXwmVvWYTLWos45zKN4uiCuZPHuchUzxRiN6",
  "key15": "3SrY7EHi1YQNEXSmyVAHqCRTzKxNkMsRGnm7RnuCWG96EinhMMm9Y2G18oom6J21RnZ9Jh5WGfWxhX9SGu3Rgjg",
  "key16": "5bt7UF3QdBT3Kpn9DHjHgpYNTfBxunhgtVuHUSfH4NQ6cpsaFXGWyyuZE6s8hc3djMMHAZyNQXuFJaK27p145aqw",
  "key17": "2LWpW71BAF7cQqcmQJWV4D229PTHpmJkN4aBvoEuiRQj7zhnubBSEcAborMnhqqrfxX8SJVjkB4AMNWh853ExwKa",
  "key18": "2kmCN8FSHujgJGeCJKNLiWXGM5zRXsZ6uDb6Xz1XD8kV1VoAwD974Hjw7xafwrLRWzQuNzruSrGEsMeF1Ejahq47",
  "key19": "3W2eBRfPQmLj1Y9we8zCktmDzV7u3bxbNcLMVVY6wfgdpFnJUgRiNLf7EqsZwSmWvnrMvh4DTiSHGVkf1S4c4ove",
  "key20": "3jLjp1ZgdUhnW3KXHQLiiJSi4Zt2HgBmiRXPQ7Bkggxkd4jbEPGQSigGkVvyanz77644MkzK2QNLkTLzSEHQyUeW",
  "key21": "48qX5ukD68KMqppivqyPzjKARNj7ogU3o1RGx2AdBi7yFLBwi2woiU4aJrJidqpFCjQGdK98JbejM5PHtyxzyeEc",
  "key22": "JiLfKt6SfXQgkpEj95Ewy4osds673xzxJcaP4bo1DhrVfi4FiG9TSdnGpuWqnVHK3nktzDDjX9MmGVnMTjzjxUe",
  "key23": "2sUDWQWgceSerBoBBUSfkijHCuHYhgoNBMsFazWyqxPySmV2aVZEbj8ZpNhx1ZfUs6XNgPpJQWvsb1XQSRn2kWSg",
  "key24": "41GVKgaebfN3vTSeGU6esf5bKTmEaTiGmPLRYwfZi1yi3tFmGcr2fXatVTCSKv2MYvXEqGfNB2Kwc7B3jqfJN6gV",
  "key25": "57YADVEGLzrwVki7h9DopPXWChHNAwdMHfHfcvCCoqFRoj3m6ibjWeJzoX3XNM6QTzn5zryTEKLTEwzxw732stts"
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
