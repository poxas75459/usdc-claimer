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
    "5S1djhy5w9dapX4G7VstzAnUab44LRsDwchzhaPNc25xpesXUKtxRnjr6fA4zfHGkvTjjzwomD5jpven3p4gd5Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGzfSuVvamrdU1JXeZCaUinBbyL5XpA8bczzGDhgYEAy4fr5Yy3buy4yywEH4fJMU7NokZfnbNARNdcfQ9bGSyX",
  "key1": "2izAwGQaYnqSMVHhZjoMEB7123ay6SmGdAvQrdgYmg3vqJcoBbnzi9coDuVyJ4F6bPiz3n8mL2C63kdedmdyfvbj",
  "key2": "4hdYH3juCcN4dNqtcSmDz7DzWKuhph8u3Qz5meV6t3od4oUCrB4AmWU5J6Eq7fCjxVU1hwVJo6A2V6EanvWhGGae",
  "key3": "5eNxvRbCit4MfRQniTXieJGMpvF7U5C39Yro8XyLCf3fknbcPSghAY2JnxbtKjPPPg2ASAQEBhGFwvmGfAjVYdWj",
  "key4": "4bShT2wLVUsVfs9D3a4FQwCeuNvF5NwmmNx6JmubBMJSWQzPT6Dia6GMT8ewxz7iWFR1kDWCdFkAt3TmMVvzkuoF",
  "key5": "5VHHVMdq1UJ2CApQRZcM7hoMA5V4MPH387EjjZjBDqhWpauuYkyMPxPiz3NYgtB7xy1an7tyxd59PkAk3cF188Uk",
  "key6": "3xBFFifthwcd97A4KUkH9GcvVV3MoCVt5fQcv4CvqMSMHpeBY5UCpe1rFkLidqQn8mMLGKhEWUDe6Uv2CBpq5Ubt",
  "key7": "6NdnwRmKSPNn5wdbQjzt5AwA64noEVrsfuKUEQgJSwrAJaXKTjN7uvDsJyPgo1i7zsPNUcg8nU2vYYwe6nT1EFn",
  "key8": "ooqtUGJ3zxt6qp3SGiUe1SGDkEUPKPX5M3qf9916pUgfWBsdAWHz69Gthr9jeJU83yD7qQmWL56BQq9ek2bZzSR",
  "key9": "3ppESPiAn8aUEEsAn4JgQPdJ4iwwR3LAayJkFrHSs9FC9xeP8nY6oE1huZTFe5NXv3CCwydVsafDk9YcGTUfpZVn",
  "key10": "4Rq8Zz5t3QT2t17mYP92ZtfTxerAxgevrj7HfEKkPRhY3xZB2A2x4QPCVuDhdvXF5fWWEWYDx4Yp9ip38ECWgJAp",
  "key11": "SSHLyaeU6MkwrjPp8ppfuTg4sGwfei8kwRBKrjPtGE3Z3iEoSDZhCj4BN6MhbsGnKj1R85o48NipTXHX76dnVbq",
  "key12": "4Hmi8eVtMB4omb3cjRvhUjdpBASRdSE6pe2twJHhbc14EjtSmhE99jzy12Dfo77HQYk9sQBiR2XvMqyCaM1EQB6L",
  "key13": "4J4LQqW5UHWVDgNtWUVA28MeZtatcH9fi7XZ9MD5QhKL6G17LDuVfaQcQ8Y27fb8J6cWSbk9Ya4CUHEiY77PS4d6",
  "key14": "4Wxg4pzHx58rHtGRkq1Y74nHsWzBhroxevZ8myoqMY9YgYyE9xmXMXbm8fmrYseoCc13qij9oGpJTzj6tbqQQcLw",
  "key15": "5oJaMrB4eHoxf2oWEQFPLkueeDn4TPRMrQWnhpxWUBCYZtXTykJbW8ZTZU97hXTKWykaXVAoHHTHApZoihsCZP85",
  "key16": "2m4dwX54Sx5qq7BfxYRRj5j1QE4HFTM5oNm9RmmFYPDDybenVJ5ttvn7AA3dwR6jBq1wUq2nLygXYCEDiUQJbxUv",
  "key17": "3YJ92LC2xJNPRcidWg2hiADokgmmvpFyvmQKfoRMC8bcmY2a69ghDAbnJ82u6yykxQEupH4BTddX4xEuAb8JwNEp",
  "key18": "3TLzQpvW2AYv1rzAFyVWmUXgXoQxtGrMAWHtoLoz5ij6C4Hef4SHLrd2rvWDPCtMzYg2SzBEbSY3k7BGDhgin4mn",
  "key19": "WpFM9X9hYhgPbmiZWBLUDHTBmA61JntMNSWqaZeurLtjducuAZtxZh92dwZY1DzgCBWCGoJDoJhqtJKDMnbyAkn",
  "key20": "v7k2MGwb7XnhqDE81tpm1oKdWagN1M2ox61CzVNxe7WiaTgsHmgNngZBTtoEoVRD7k3HE5cCgotz6Fjf5WngLWo",
  "key21": "2wi8DE47basHRm4pqyXhXYP27aLHh4nEjKLMV4JhgE7WcRCT4HibEJDAgZKEV5YDE1SnsY6krPQRuuoT9kBbPHVE",
  "key22": "4Cyb7Z9puhHLZW6FhvPP7eXuMkLy6yt6k78yx7S78EkeZT1PDumkfjY1BWyS7isLnJWe1VKdvKuvR21GCnqepvVY",
  "key23": "2z7eJoaS9SH5Qsi2Z7HzZaKbDmcxRMVof21Ya8uzvZufDV9bi45XXmAr64cySiL88zraSDBaEQt7hEinYUjrHML8",
  "key24": "3YQ2Jgtzh7cghViTf1jcEEytsuVCg14NF4aagvPnu9De99Ryh8Yw2zFQPdWsotJvRNFyyusqrTX64QStBKBNs1Ep"
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
