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
    "3Xbro9C1fKF4BB1okdHYqENW4p3J9kbzp5Bo6NEMBis8CmdLTVVKDfQTpufwo9HNuqU2zhr93GEXANue5gvE1Bik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFDhVggP5RcBv6YTLWWHKJ2ktMu3xYXtkcXstaP4NguufbeiQi2RucatjBEH3KSzVCDYRq98kFcG3GW49Q6BPhR",
  "key1": "43L91mBUjbgd4GtbZ2Apeynb35qvDxNRLJ2VczMHdAyw7mbQzGMfneh3EN2TAwsGGE3o1gvmQJE7Z91qxCKjYWDd",
  "key2": "5Kj82524vJf4WhmBbK8aAdKeF79Mi2FMipcuqjHHquNaUYV6siwrDnWnr2NmtiNkXGhtb6yp4QjtojZ8CknaDNZr",
  "key3": "5ZQrvz6gAkGLkAo32XgSAYZGeigvfc9uadNQo7P8tBZTx2GW545Nyc6abNAXigzSPFMFCmQYdX7s8NqWgywjvEza",
  "key4": "4QTUtafkVFA4RcZbwA44peY8EDZ5iU8PC3dFda9iH5gMTA9NRXqKrFkwpMHUeJXzZjLuVuftLdiwXhZEHDL4QYRh",
  "key5": "3ydgxY99VLuMfjVaY47dQTbKxhpdAiKfDFWgD199fChjGhnsbpYTYd4spMHYfLLpgSumkxWPBADXWhjHC6oujrXX",
  "key6": "46yyJtB2EsCBsVRAdfttrpJaYCiU17hAvhqWh4Q7ULDfSnkD3gVyQH2ihZkiGE7qkytBJegfBButcYdQ8THoVMmu",
  "key7": "4k3KWY7Qcz6Z1F9maYELcBnkPHY8PfrzqpA6HEC6xRSNZDDoqxmkXnm4mXa7v5BuK64sdkVM69giHzoGrHKHGpcZ",
  "key8": "2vDNXEweN2rXMgh9fgBTAXKowfTwCjtDwqANnAE6Uhkqietu4GuBUveH4cHWNbWX5eT9Lo8y4SpszQ6CZkEFz3KH",
  "key9": "2mNiJ5gi2KXE2odbj2e3DYLNwYV8asNGVtVAMD1wNoRakQkmCfxgmSyvvugMXDgDe1miYk9vy6zyP7FSM9ds6Nxu",
  "key10": "TkXi2CAeafXdPTx6ggyMD3ytVkQQ7hCE4NkngZ1eTFGrYrha3X6QjEcestM2QuDXEM8Uv1nQX9Yo4p62CaAJm43",
  "key11": "4pfsU8aZAKCZ1H2aNwUkCpCATQwoctdbP7CGnTTnHqdXPyFHwH9bhPFanBrKweSdYtLTi4ed9nKyeSZwvCK97urZ",
  "key12": "2ohW8ACYZfNen4UvUYcJpyusdaTZVYbX9k4er7DzvSfstnrhdoJsyKckDczp39HuwJZeU2vUvSWnLQsV35MHnhMX",
  "key13": "awyZgjZVVPEzMhi3wZ99hsUXtnVXu8qoSr3Df7CgrqFd4dSZWkxea67ToDqNQhMtSMwqfL4Yo1HvMz4aF5thZPq",
  "key14": "2nVnxkUGT3GPoQ4SwCRBUk1h1XK3kzQHoEn77SbfjgNpcm97Ce6JjDHEPwZHk2vj58uBuLyR8vhVgjwmcQKxUP1e",
  "key15": "4A9uzYEToWN2B8KGVQvCqcziXLGzH7txPS4AK3Z2QasoNmBdheZeNVmBUDU25TW1PBRBwmFcCJZUsUFgoRujAJho",
  "key16": "4vRsgj9PCxdzPwanGYe9xLyQFq322JqfmqL2Mik6obEbH9jvyWqjCz2ECTEcqpKGU5QRUctf7Q66k6MP6k6iDdeN",
  "key17": "2WBzagf8MZbbUiaQxNsatcMVRkgeQqtkp8XeQXX5za5SWoyefECHsxeXmfEWforqpBfPUz6QRT1F2UJ8XbeCtHZT",
  "key18": "CkJ2E8vUFwvY35bd5twhUSGdm8DAXrRxLni3xjFUubvLu4n4zMUVC1EceBeTWwB7G4tQz1tGiRAUS7sngLVy9ce",
  "key19": "5dt3GiV2auH5YCc1TVJKiJRgJEuxe9YFchGgGEwyFqzpwEu6ZsbCyUhs6DiTRGwUZoNwVcnVECZKYDu3aXnUdJ79",
  "key20": "67FEVAX8Ahg64GZiYge7iuZgMVrBn7eJiAazCUMHx8RmRcfZDfAvKLP8nTnMKTjzF3oWSwohxBXhQkg6RFYiVzCj",
  "key21": "3ZtgnAxLPzerjWBiM4rt7jAFxctj4oGCDEQ9CHS9SKfXRvNVugy7wCtjReY29tMzFHTbZC7eZoNKZAhAiYjZwwQG",
  "key22": "57MxCYNyrTV43UTDmHdU5DT5Uu69w94JkXcpWYe3xK99djh5N3CSAqBjUjaEZMUKb6bLwWYcFGT5C2HTqeqASZxf",
  "key23": "5KKU8iPHjqUu2hdvPM7PraXxKTynvg2xE8PfzRovrhhNYrJgjHqmNk7fgP2gmd5R47MWMkWGdVjrm7TBb3uez6Ve",
  "key24": "3MAXD22NtmuPQMSj4BBcUtgFGrGNysNB276FdQ5m6TbjukH3c7SLC6MKHfDi8bCsYZ3kN91EKDDjR82EBzZPvQfd"
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
