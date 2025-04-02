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
    "5SDHeahvmYxXZUX2UT2SWHZ6uPUdxmzNiK4P9N1jhobTStT6ggsQ5deQmyMVR6kUnHMKkRV1k8TbeZ8edAhvi7Fs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TvGxhhM9gY7aoHkvSTGzYiHX2wm3cWoP6bC4EL9GpgSPo4SQJLZyj5Bscu6yiHw26bB8qYsM3oVR7WDdX4D8m81",
  "key1": "48mdNhjU3ULkrXrzQw9PrTwVa3qdTxjjmSF641mVKKLs6vFjHbvu9xURnTmyvmpoZvLD16A7AnrYMLy6JfB365y8",
  "key2": "23haSoQgk1H7FVM3mgQYf1i6RpaKauXLHYUvAr162ook1ZpaTfqpVw5hDmijrWcXo4tY7B9zs9SonnXqtaz2uiAA",
  "key3": "3WXHPTSSQAFzjNajFucg9JPnCykAiNBA6XFJEt7VYGZD6HDK3mhkJTr3ijxQKN9eLwp2NjaXzauyYYgaWrTqMFAY",
  "key4": "44jLZC29fkhTRynsrapLB83ct1SjPndf7PBxdPLpsTQpNpGBgnKKMwXx9h21FwN2xc9EtVAexXoxHfcUB2cMhzZ",
  "key5": "26RjeYgL7g4AHNe55KxHE5FRsoj4cY6qNsxfKuzubLRJigHLngWefRh3wWFUrrxF6ELL1vCiLdVC57ecztWHUf1D",
  "key6": "mUUP8L8YqY3QmdHyfBb1TnSgyYpSnzDLCCL938aCTaxPivXS8hHGf69Uj21CRbA6xvHQrBs2NUiNwcpeW956BsM",
  "key7": "2H5HEuqzUBP66M34Ga4YbrAt18bVHRFko21kZ1Z31ZsDNsPWZAUhZ4AaD3mTCc6vRjy8bsEZcRtWVcAs4Pu2Ev4c",
  "key8": "d2hdSLqmoQKw141wqFbCxbsWXeBYg5sDH1RFj79Gktg8MXyJq8UkEq8rqTx3YjFvRXzsSWbAPbrahkDNvTV8Ro1",
  "key9": "2AAHPaEMvEs4GWJCQ6SEAaA1KXzvxdwptwR8hKG2ASA6LYxbtPBWedW7ejDK2FHZWk7wem5E6ioHj2U9znsD1m5i",
  "key10": "4uA5ShR7NxAZuXAMc2CjKay8VmFCNc3SM8d7t5ePYHqxKDH7tEqnw7pQMPCCFoAFKdGyUxEgaE1S3jQdEiJRW8yw",
  "key11": "3FyDJPSEVp5vedEg7ZDGsVFhTfy18pTrKW9HfMdikEba1GRiFKBHrpqG42FT66SCFL9jvddgkx9nYRtZk9ZJdFHa",
  "key12": "5JaJfWww4GLFiBumDK5Q8WABiZcyUZS6YrJSnbDTYu1LkuG9oic1qn1UJyK5WQvwp9NLhWfkRiJGx1DRX63tp1oY",
  "key13": "5fPEqv4s1LU5zvcXEHzA1tRyZPCTyeKk8kfZa7nmDkuiTeDn97pZmotX4u93CGdCuFX6rgvMj3bvBx7mSYRpffer",
  "key14": "3ZHGPF8QYLsD6VQoAe4UyN6dLQoAJc7mA3QYe8pRV8vt7p7wHhvCzx35Y8Vtdv1kGPQrWkPacTkfWifQypJmzszf",
  "key15": "5HSe88ovYA46Fhj8kB6p8arU1KDcW1Hzw2dyBxxPeGTSpoGdDeHqPdwamDSCHm23dwYGFCwefAxR6iHBUWgkk7Ap",
  "key16": "3NcSxZ6eL9wb2j7KG5M2chxpwEeeLuzMpe7Zw1ZaxWr97MLaLFscdCnKFutRkSfouDCBsgk3Mw3gxoLYjbbsEFdg",
  "key17": "35qJuN9eG1iT2GVPGHDaUoboVEemoDq55eXZoQSAaxCY4GNQ1KrWBwzHRuNepkMYf2CCDCTKxuaYABWXGC38YP3c",
  "key18": "2nhi47uEdNkJn91ytiWdFmPTVsmHGsMsRaNZvVhg8NzSidSq7YqCyeqWjHPTT1wvmgFAoRhS3FiHarhj8GBF5ZSp",
  "key19": "8qixZ7wgAWweXx3LSrtEtWxk9vDSpfitUzxmSXtZNLVCJj1ML3Ed9VKmkdQfuNpNUodCgA23hbUgLZdbDpKJAPQ",
  "key20": "3PdvLGN1XgqNzoWLb1aJhhNVazF2ZPQRDVba8c4sSuhRf9Y4ocWcUEpuUCVnSudeS24oSWREKzjusBEA6kN9TzYV",
  "key21": "bkiaMLym6vgx28hF2zxK3cfMN6RMBg7Lzyz4vjbNCifd6gEtCefENNpSj5ELLmt1vViaGZCUVvFNfqcnQXgN8ou",
  "key22": "4e8QHhKEJbZKG3rpzbbfYcAfHoT8KWnJF9ja6AUMDjdUPA3iKBuhp1BSDr4WtT9sDiQJ8e8LJmS8HontisREu9NW",
  "key23": "2aPyZ6wSMnmTA7aTgkgaQDAZevADatSk4PtWUJ3dVSK5HxBji75ppeyne3GicBxWbYUSvD5voGAuE45mP6B2bFA",
  "key24": "4QuuksrBTs8mkWR6ChaHN97HPzHhG9o5GPVNK2FziWV7sD6tgCwpi38DCQhFUHUcbdPHN5ER74Z6GTs93NQ1AQHe",
  "key25": "5jDbwsm6HKTnoWzTj2cptydPxUEk5Pw9sVDkxJTALkbFnCWaLPU1qQb18EgNEsYzn6vnSnr5KpaBopU38DHNBzrw",
  "key26": "2pooyLtqgUUrVyihw8qg9ZG2VWDMXk4zFEdMi4ibhCeSodrsLe4PcjsxvPPuEiZDxwhe5cyhrfCL3bDas9GWeoVR",
  "key27": "4LYowxn4JEukuXDnuLcmVkvEa6EL72x3VXMwGk8UMDx5nPzQPn7s98CG5yw33LQtf3CgFFK6PswkwgziGbiXuM9e",
  "key28": "2kuiC6i4RoW9qVEiMXJNAgeEMxjaCA1m6hs31q7Pukvjk2EBgFBWF4U2oxpbmXs6ttuPGMGP4J4ZETC1Xm5ZvhSo",
  "key29": "ef8KRMP7V4NSqjhUkgaBFMnYtPPqbqXoJYj6esHPY4QS7BuBe8KjF214U815a8GPPdrNJEPKCcfkxTrPo841iKG",
  "key30": "J1FjV7vtX6VyP4rSJWHytRgCjx7yKXTAUfnA7iCbXz9ZGgqSLTJygzJLkikEjSxRrbPS9Lw9WosAP6q6UCjSzsk"
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
