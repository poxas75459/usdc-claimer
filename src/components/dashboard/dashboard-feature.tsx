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
    "5QkfTLMB3aFgszzLqoXT5Dkw1v6b1q46UeQkAcuhKXKwm7N62JQmUCK2zhSZzohtWQAYYr3saqPTf7D8oKtpCLcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HSJQWBXo1bZhLuJ6tTaF4qaZ7RKsmS914Spq111pASPYYvEf2TwsPpPv3xbeMXqmmiCW5db88tN4vY3AGLcWeJ4",
  "key1": "67kEx2q3mak9Co55DAPPsRGhZf4pErUVcEhNApHa4appvFa9NtfVBt3zVivQMm1rJhnTD7PqZTmaCLZ7epX6SsyL",
  "key2": "31Mesr1kSgqEx3P5bjz9Xr4MYkEmvtmxGmQUEJhSzhE6Vw9Gw51pyVGZvyonyMZcatzC7yZxE9wEr69X2HLkHzVq",
  "key3": "5ZS5ouFyyZhbSkDSBEWKKPaR25E3LjCy7rJE7M7yNHthbRLeV5Rhg5zDZ5Ky2dsuA6YFUYngFQkwMjXLY7uAp6o6",
  "key4": "5PjqJD22ZThCqMuA1LgTbRMg8DBM8YjibMacwnS3or5DrNT6ouRTikMvENR6yPhNUeroXYGsXe4YiB6H9A7Zoo8u",
  "key5": "4TZHmagGGHFkvBkXUcr1cSt7wXA6e3GkJCJsbXuBqyQndDjtqwbaC5tkzq5JxxxkutwUh9F2cWLd4t9GSuhBWYP",
  "key6": "265qEjLeZMnf6FvA2YiuCifM1LfnHuE4YLmsAmfpJbCc6bjGzAjDpD6V1EN6iNPZCdftDD8GdsThRcbxnCTCuRbp",
  "key7": "2SgkDXSWBbZm92bggH8xhFp6thDh3Gj6FDwbYKKog5JubxXRPEfAB8y6sfnNnq8Msr9fD25R5vbWP1UnEH9KLiUN",
  "key8": "286cJiCSfqT5VQwc62dZxB35yYppuU56ofW1XZGDNakhSaLzxWtf6inBK6kQtmeQVrUbCujskAeeDJHqDmsavG89",
  "key9": "bob8pgW2nfyyaH1EUhuFnrgqBK17SrUS5cbj38xex9ZTALpygVhwDGZYPbUpR5RsXCtfeJGqxFX7AcNGWLj3iqe",
  "key10": "2YZwnNVu6VgyXXUNLYSZcLW1ZXH4kYZyC2kyNzJ94di7vwFRDx35EPbhpMpc8S8DufbkPyETwTKH7vGGd4cSoxKM",
  "key11": "32AgdxmktTDRZMaf1MxogXdcEcaj3BDoWgrbzFTis68Xz3JNUgppJscA6Q4ZmN4vZB6vLy5j2rU7HDBsyk5wQGt9",
  "key12": "5zRCzJ47QERpVWyq8mhwgSq1uPk63EYFukj7mEvDhBkgCKTicJGRt2NHY9w8MDaRtFK7VfYGJoteSvdsCvXt5ZgJ",
  "key13": "4EPrKx2rodqBD3jkjf67U7VFXocZwQsQhyzm6pXxgcy3svagP7PBWiVHgwV9Np9GYnucBRcrBmJGYYZcEXpbDYSK",
  "key14": "3pqFqRuvWKGM2CwVddwVnkDnN7Gd7SkJLqHoD9uBvss6AEiB4YctKNMN6GjnWbEyRhryX5qNTtTeXwi2E3F4VzgJ",
  "key15": "226btuTwNPBnM7bfWAfxnVkGYaUe7Bn8ZokpRzEAzo5uw6qC63GNY1TYapfpMcXcMadszCb53FHdeoBzxA5BpPgk",
  "key16": "3u4XR1rMEqzQZGLd7kMwu9zAbAWAGv58gCo6uPp5tscyWyf6hK88acT1AHhy95i12ySAbJSTr71GhGaivYBPLg4a",
  "key17": "2CpJitR6bVjLKq8epVXjfB8Z3mx88S5TK56Fcn1C5RbGkXweEx1AEcdhEBARk7Uz6VMLzZKPUbj7b6CVTLoHp7yq",
  "key18": "2w5usXfkhZhi8qiu3GQxb8UjP7N2fppHHVu3dzPcDngtY9VSPmpmTioLvMyQbC9PuezzTuecZEuqU6eMcnyia6gd",
  "key19": "JSAPSpuUSLcV4gL2izP4jgs6ZFePh6zYiAFEtwd2o7p4x3FTu4vP1Eu6zdUAfZgVy7G7uxqZ37pD6HFSexVfEyZ",
  "key20": "2wjp5i5r4JDepwPBoxmZd9hGbyi4Q8R1qkXWGv2tV8ySsbmXYDHCvCMwDGTq848rQTFqzAuoimKxt5G3vNG2Ebpt",
  "key21": "2LVCaK3qVaMNzhZPrcqVbSL8gTmSf9JWYSmqmt8QjiuXPiyeXnzdS7DCMk944Dmu1nHHiWhPUZ31Lh89dgjE6GyX",
  "key22": "4BTALxCusmrEmQvUwYtsUPYjrPhv58dGspHeRFT5bHK7SyFXv4ykuFirhP4hGEYbhDssbGfKuCB2H12XziZJspgd",
  "key23": "3WConqTSNeF2zJssARNMY2wxtT2kWNi5GjktE2GkADcGSdpQmykWjo9Qy959yXU843v4iWSWV7Yk9fiQefbdbVyf",
  "key24": "3mQfJLvddvDz9Y54VxZKD8s5MNjxWa4k1zasfberQgc3nHDJTjwDR7T7ykwBpEoTTy55gqereQwQC4ezqz3p3ZwW",
  "key25": "3dMu8nZL4yFLXZmfHVHHGzWNTBBtzwuDoH4dTpkq5SM4DNVNuCxrPYo72tqcwXXXcCetejpBj5nH6NwFZisz843u",
  "key26": "C7AzTSSPcifWFQ8TCynYNGQsHnYTGraKY2iB5K1rDzejrRGuGQEqhtj3fAhHbGfEDnDVqPNq3Sj6LqaLnaUDdUV"
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
