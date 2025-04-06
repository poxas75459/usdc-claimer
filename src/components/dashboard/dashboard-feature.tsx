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
    "4137FNDhsEmQ1QcUwW19ctx5DAWinvqhwDPuiu2Lw3XQA3piARX3SeRzri9hedMDxrRm8A2KCnCxneaJruG4D9jC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EfruHJ5RTpRX278uNwtGJdvzKnBMYcGD6it4d3g6hoTpU6V5c3MNzUR4UNqQX3rqopbSjCNU5Wr6ASasCDgbNKp",
  "key1": "PRZxS36TnAMqekB2zfT3VWS7bVdbyeP3FhXoPbUVW1UWbGDAtfx3THynNAcVr6qYmBF2G5xHtw6efLZ3oLekfLq",
  "key2": "3zUzrDZ3gRXht5v3Sx48psgYUkWNtdV7HbGtjzZWddZekVVURkXRMBinqGiujJKkxFc2eiZ8mymsS9nddM37DBDY",
  "key3": "363fPQy1QSW31dPKYmhKPZxhi4aBPk669SPW8Jb4B7ycAATxLGtZDAbbRUx78BLuctSSx8qvJ32Khpy6Cy99nSQ2",
  "key4": "2oHX8n3g1gr6oJot6FW3fDzLq6exPJQPcfSiKaWtK9Ay2qM7KCDyMC2jq4tniHXYvaimg2o9xBXVw3ynvSVTjZGi",
  "key5": "7z2QhVMhYGTYmLnLLdCDowpPe6KqJaueGPCHEoUSy1413QsBfMtmfMC5V3YrQScsbccJynYrZjpa6XnXzwSVPUR",
  "key6": "3yyTNs63zRaYqXPKAKPivvRYXFFgAFU7P7eZh3BBJTnjjKRM65xwREm7rbVdsQFb3mpFebF7oNrEEsZGsqxqwHvV",
  "key7": "5XFZQ3RacrTPAWamG3PMCukvV9k99jmPfbcYGbkjwuAR1WCiJiWAMPyfnmnAry28RQCQcSY9g7xvkxDPszo4hzve",
  "key8": "2a6onvFnvv6oJJYo3auSp5btUNUTWBjNY9mbCPmxub7o7eVL4sa66wDYtRxXvKdEhx1M9NfugbikoKTPJsMYm1py",
  "key9": "3P4MfQb5VNfGjj9Gpp6Z3XjzaSnyB2tKvTPYBDs9ruEcUFuAgoW5rESEEbabm4ujM3ZrEpf1sr3f4XREyDpnptsi",
  "key10": "3FcTqYnG5QzGC253ZArqyXV38W4cQ6xLTJPrZwoA1jSuj5n5skXxJJybdYApPCEksVpzcvTHkFd5mDaBnyDTBQu",
  "key11": "JesAYRrF3YtVTHEKhJEEDn8R2vN2pTpaqvHyN7ZpbVx3dxtdjaQLrKb5jMRQAPkcXXRSS694fRHzrq2qXonrNnC",
  "key12": "4t4ezG2QotgoHVHx1pSzyYHvTBSYLuJD3mHCeEKxXKYpkrHuaJZ3XX2bb4jpuqyEA6aAThN8TjKvKtAJm3zDkiJJ",
  "key13": "47YfqiPbpPQ5Z8RUwrYHkccKvYk468uB2fkRMzvxwxf8pPUmEke669BDLJ3YK7ago2RiG9fvdBzmtigVKjyqtNKd",
  "key14": "5zVf83sSNhhPBtij3594BBrJ4tBQTU1RqaewSUseJUvDbzr7RbRaNaWnduhbVn2c7NXdhbB7tTuTagRpxMDTPgqX",
  "key15": "5fM8EGvZE9oWuqucnz3JGii5HiBvX3p25FNcD85z3WuojacK9bAcgDhe13YkwuxqCyacWWMe9LgrcLNwaqLp63JY",
  "key16": "2HuQFstvhZJdciM7Ye7Aun6Yxui37sRkusxFG9LWn5pzpj2EDrXsBogARJZgix6uHVNfcqb7VHpjWGcMhkR1uvJH",
  "key17": "2QkZ8Wv6Ms9Ban2KRgP6vqNQPvK9GrikJmVQhDwxfLHV8aopDw2hwFpMmWJza3JXRnyYRdmwKrQWPs6BD73ZWymY",
  "key18": "5qboL9X9XBjGLchhDMmedWrRtUHoWfFKVNeHUPKTBNy7hhvH3h9MyczqSuNCPcjNzUqUUECXzfNDtNZPTYnjSgU",
  "key19": "5VUn5Fd7LsPgJhRTHGk341drwvih3d54g4pjMRaSrd2iu3eqSn8T4Y7SK6PMbzq7BDX6HnRYdNRB9TbM5ubWzY87",
  "key20": "22ns8acc99G5HDB2qWADCTZUUciJeEJH7P1NTsUF7YYB2EdQhZBMFQbAqEmwLU5NHoh568g9V5YGp9h9Bku4AoYt",
  "key21": "9xQE5Xyb9zkiyynA97qc1wrMaVACr44pqR5xvyEHyPmXeDGbzeVRh3QWvTSaae4wV7anBV2hMuyoZS4RCQjoMJb",
  "key22": "5ofF9Lii3g7pBSKhf2RRs1Fsan9AtfiGGPtN7hikJgu2iEDsXuAgStHNRWerUFwNRLYpiaNPXoPFsUPMWt3UyzM9",
  "key23": "2tssW43Zisgbghc6YjtG6AJ86AnXfR1EFL1nYb32HtVHcEocYS1hoVJbpQsDKS9QJC6s5rhjEfwejKsEMHMe5uet",
  "key24": "dxgwuEsenAuz5zue7Ji2PSCajoKMtY5nMZkEVR3etT8DD2v8begss9AjA3ssP7rXjuuGxh1f4ymDiCHvDJFvohk"
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
