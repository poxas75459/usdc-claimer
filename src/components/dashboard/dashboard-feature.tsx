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
    "SUNJ3ZCj8vfjuMKtSCRmSFGsePLuH8CCeBtpek6jbzspaK6xccLxa4Vwq9i4NSmE7LhrxvxsytfLLHg2QEUJuCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VpSGRuCwHfFbWwFVmGH8ybxUeqakZzff6vmz56DHd9QpNNBU5bS41VN7KSNFo7kY3rb3TjD2nGXS9bednDJg4nb",
  "key1": "4u5DDCmxqZ3ERRZFcLn2w7yE4RrU5qg8a89XpEdvYgn9pv4zT6Cmdga1XNiL2USMjyCMYfZSa7NEsBU1mm69rVMT",
  "key2": "5hy2y798yY9ZrzT3XPLK9Kpv9YwARuovG4ar5hpSkCqKpZ6xGpgxVkjfi8tUHqLDLKMXSxoCCffdRSoaCnpDXZmk",
  "key3": "63s5VmrLJrNUaC5vTume62bPuUiDmo6BZXWWsr8Ni4jR2GA4TY4LJNAZhhdgjwdJQf7UfpsNMtgR5QAGjsGEKPcL",
  "key4": "4hqBbneZidXQwZhALhN3UAV8xy4p5BCHTafEYch4f6ETvYfqXMy8keBnSZkevLZ1MwzJYwmjSW6M1mexXEj7b8Mu",
  "key5": "4K6tQa58ErUEctoSXHoFZcgUz8AEUyvE4M5t6enjHNW4ofvXNPMEgAMdsLUwUKdB8mF611fcZeMnG2SRccMozTxq",
  "key6": "NdesgEUwqE4af3Wnpfj4sfPNX5vdFyodixa6Dmza8yW39d179TGaREaNZtnvCEUribXqjrwjkTfmrxavFjnZedQ",
  "key7": "3FmEZPL1WSZM4oHREPAkr2jnc1AaWkktbvwnbg8fEL2PGcB8QexcXbZy4zCMoaooVNnDmNp72tTXCqF2CP5jXQ4i",
  "key8": "4DVityF7KwbskT9WJrim6WUBU7C3pCvqLboeJ1dRraV9HcETwZDeN1rpSvknua76NtdEgth8ifb1rCJfEuZNrwpH",
  "key9": "odoTrSzv7NBdDw3gBZ7GzQPS9PZGBX8cMS6AcjPLSCy6z2if9wdqFmPmN7nMKesZmdvxtCjAQXrvUNotTx9ijSE",
  "key10": "TaG2QgoLzmQ1b3TMV2TQ3qFwMcQuSoZ1UhnLSuRhPdV1LcmNA9GC63WfsVKRPdfq6CZM2hCPHw8vHmys2ZcA91E",
  "key11": "2J8ixUazCEhrA6azjTSVnJKqxpgw6xYvmU8xjDHcVrfhUoyxc52VYsPmkSNizfkXR5eJZtCgnntyEHfgJRB9PM1X",
  "key12": "5j6AtWrmAEH7zpKU9FMsyJvuC9GFWbJJNJsTr6DUf6eM8PUmHR9B6JMeg4ew5XJ85mzCezrn7wDc582kApnt9Coc",
  "key13": "56MBWPEX2Kz6fBdJgYjx5rFMuN7JRNmK38DcUqzK2vfyVjJDTKpUNdPwefSHYguEKxGR21ei6kbtyDvHiYZnC51B",
  "key14": "X1JN7kez5qnrBjPEgbEkWRmtFiKHRKDbsyU6SCu68DoqfB7VJmoc1cfBTHQ9fNs85mYanxgaZWA99dh3KtXhf6p",
  "key15": "4aoaBgKsKrwhTZ7LM7wiRreSx82MQ4K7v6ES2HCqzzLoht9M6wAVkk3XZ9PjM6ii5YZSQkJxZB8LMrajfswYA6j3",
  "key16": "3APBL8NrZjGshZKqwjXQWJejJMqxXHEba5h5mQHVh1aQMJCjn9hBxHxvWDNGLpTDP98FvGLCGU6yYrNmg8bs7WJE",
  "key17": "4qLFQxp71TZfyydk9cW4d9mowtfWPAvhqvEcqwEEWYp3iFN3ksAx13m1dwTXdMkbbhqDcYHWtLs1sny4V9bCPBsP",
  "key18": "59gy83PWfnDxFXnY8y56NqG8PtwiVnZLT7wrN3RsUbayv2S6DzXWEfZTDyCieRStBuvGfjRRJzHsPTjfuXt2hLD4",
  "key19": "4DAGvbnQHy1YPaxPN6xRnhCZxTv1vF3kuBeyePh2r5UKNn53cLK3hpHp8ECLDY3QvDgMdMBekiZNsSBMpBQKkKAB",
  "key20": "63HBCBYSxjXfM8V85C5CsNWzFNvoQoY9duRfPpWRGXs3vPUAwLpjfcbNZEoqkBMSr4iSRus2VmqiJuL7shGkgRmn",
  "key21": "2SodfhKnY2nGiQhVnyLJJspMZpWb343R4Z7TfYiHpEckDiS4hKcBUSKhbV4c4xixXj4bTtkaCDdnZvy7SLLPgZ9q",
  "key22": "vWZPsMboB4oiJ4kCqnQzpBFK5Hku1igQk19AXRZntW3mAGcSsPh3hyJDXmV7d2TwgMGH1aoB62UhJsoPPbVTYVm",
  "key23": "2q7gPqwnyTBNTsTqFwqNp4TGTJjUhfLx9i1T3d2ya9F1uz9sFQ5ZkHDkLgYf75DqTn9bVgw3wXkPyMMWK3qYUtuH",
  "key24": "2BmRWQxxMkJ4AR8chVnMcdzPUGyhXff7Vi9ei6nT6E1jZNbS8YgcNNU6APQM3yTD8TBYxR2S8uMVkhPQqLK4miar",
  "key25": "5F5XYVb1dNTpoUST6WYZgxQiLTnQTdfsmoRtY38HXTP3VpoPpMnTyRLFW9B1Vq11MDmSSfS64GmDAc9HzKBDW9PJ",
  "key26": "27hQgUuiLbctVekJwNxTMAotGtLFuBYbLA218AhYzeSdQG8jLvhdiYQQJzJnHgLhm2wFRSATqHofnwTewMrev9uA",
  "key27": "4aQAW2A8NBeGagB3EN7eV2MksPHTH97RdX78k1VMsZs9BLBcxWjkMNUtmSisxZZae4JYJAbKcxstDfpeGxndAaLU",
  "key28": "44FNXfsKj6GW7iWHd6XYnKcLcvjjc3W2qgcFTToshevxVRLdXFzLLdNU7rDcZ3EK6s7y4SHU5RJgFya3Mk8jVLpv",
  "key29": "PT8VF7V2Xog8qt6bWm7htHDnzT1yM2vM4ogZosNfHhfkBtrueh3R8Gj1f7vyZ2uLpcK2ShLkRqSTQLcWDArvJ5J",
  "key30": "3iA7Kwv5LhQanoz3gG49tnZErETnQEbAbezTq3tSt3RttsWSx9RcZwr2PZQ5WSyY9fqAsvjeNM3Zg2edMDH9opPn",
  "key31": "23CE2XD1hbBkkHW85MV8htTyYjyjdsrdbJ71Jx39eimomJP6CYbJuD3Ma8jsT5Txr5NxBGDJicKkK3wcxYB7zo36",
  "key32": "4PbX5QaRiCuPHPN4rBAZnimsWDSXqYrAfxnPEeLQYU2TCXzjMciAoVpSNJwtyhQVX6QDSJ2fbkEoSHGSR5CTNrBJ",
  "key33": "3w2jCjUnJ6QQFsuifrLpyXTmRNLsYhAqQevkuNVYa5XvHZEw8Gwz9VVBmcBN7JzZEmnrVq5DuNkSV1gC4ijLX4Jt",
  "key34": "5eiUSesnv2YquisnPhFCPMjSGoH2DqpwNmqg1JorKERJ1ypXspJnZfj9nyr6iCEqMhSZm94abfwJXo1a1dkDWLvi",
  "key35": "72QshW5wr4wYSAhEbgugajDZ2oSkuLUnKrea6V5gVVYUPxNummw4fz7DYZNfVPGpXwUa2kZvd3VtL9rQNuE3h7K"
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
