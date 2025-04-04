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
    "5A5C6mAjbK26uuwcG7gkXi1YfYbp3mbxHdieXugvXz2QPxj5SLYczkhGNBgh87x2hrGRX5uh2DFVusoiKDxUVzri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BDUEPGQEsbKoznZGANBm7XrFgGRGi2v3ku4A8tagqKuJAwQpJGuw8HrhZBoS4eK52cCsQNYFrTkqMb7n5kmDg8f",
  "key1": "2WhxLxCUQmWPsyamHuG4Rjc785VvqoifSrJWUaa2L4K5bontmoVdFJ5VanSCFBe9wkPsfTijo14jDqHuWccBQfcm",
  "key2": "4cD1stTLS1atAN2Y8PMuY42qEynCHEEUet2QxHPEF6HMpKh2XXtFS2zo1gMX1PJcyndQXzvqCSonAFHyqF6Uorfe",
  "key3": "4Z7csGG1KvQg8PvWmhXUEK3D8WoqqppzBpk8TA25Q2i84a77Lr2hwx8JnCzWBCFgAte1mkk6G4AQFRngK2xpism7",
  "key4": "92j4dHWs8NhH3Zx6EGPoubJKuBmtQVVu6wAQQHDQ8TmX93XNK1Ta39ExP6kWbRJP5JSPTQThgfEhZdLYS73EYQy",
  "key5": "5KLxhCWzJR4fBr2CZnDH3geHESh9J1tmf39F7Hh12dHMLXbkhg922ZcvnPuFFcLWxqt5jqSQxvkseF4iWFd3r2oo",
  "key6": "5XJC3dB1E7Xrh4zZQkoyv3can6W37YAZytkDkxJHaAR8a2U8QBM48QExGxQvNp4Me7Ea9MFYYEjd2ukFQFBLWoDo",
  "key7": "3YVB2js9i5H6wwS4EtFFkAwGFsB8bRN9pRq8fADFGUaLGAnz2V9yZaNpjYXtN452yFgRqoEiN8AUc5fVEzYaqLb",
  "key8": "2SRD36eDNii69sKKQ9ux9qt1B4rD1EFWMjMG4MyLs16BCeW5TKauPfbjSapidqFNNCpQpkbmwowy6VPcpuVwmVSt",
  "key9": "5tWbtL5EZYUoVPmf86CrMryqRnf7rhA7MfJjWqzyRfy9SS8DtmGV7sFhkDriSFVZfQQTKXmdHSiLUhNLrCwTEmJL",
  "key10": "2WXMh3mTgxxmeMjnqg4ZgY4NW8CSsLM1urLbLRnCU9SMsnVrCNqSqk86W2WM2NU7gZigAGyiU89v58KPiHCNu629",
  "key11": "5Dh9vnQLH94MDjWnfMvQCu4gGdF8RSYz6hwe8MJN21GC6tmd1QSqc3KmNfv4ZcD6V9Zc27R5BCvfqMAg1MKNgsvx",
  "key12": "27GqXybjqbzeAU2oMDceS9WuBaLngQG2kMyqVS9ZDR94VFKR6dNXyhiLfyYxGYyHdjT2kEsyBCCTWCctpjWeGJGh",
  "key13": "fgwwPyrEZLSFtenWjukKCvR11F6XJaARdg1nbhs1CoS6RGTUvxtAyZid2vV5KvUGLPVM8XwxHv7zQLMw9ZWfqyz",
  "key14": "5Ciu6f9h8HSyUYLjTTZA7LEydskur4kk3ptsxndrA8YN8DeRb1a3ZD9hPk389gkLdxBjTQJ1iF3iC1HVQEpGDPik",
  "key15": "3MvRSzPJ91LCz66JuQw9LcqQsPdZgRXdvuqjieKsRfsAMCvnQsYq7T2V4wVw6cKn3AzqyyoSWMvXU5QE773Ke1He",
  "key16": "3vYh7FjEohz71ziffMg8Ea11eEPrqESZows9aV6Gs1HSuWhL5LFqn2wisFURKdCCxW3Sy8KZXuJ47rDfVd5SW3fs",
  "key17": "5LrUC6gFWRXHE2xZZzF7UbkVtQSX5DHmDuRNXetyWkfhYJsXcwdsiCpyqzb5Wyoh6bBG7CcxLdPB957AT1F7K2mF",
  "key18": "4Qn145uBtgv78viW1UBhNApNqpcURU1ys7WTPcWhx6Ergei7i7hBXRCe5gE1zMoTn2Czv9Ac38FMkUmxG3ftcfw7",
  "key19": "3NLphUeZcdDgG67ruPMv71yhJnqCiFtJFuN7fs76XQbvPkVJjgLYvjSRNPJD129N48qPmAuRuQ7npXjxV7cv7QpQ",
  "key20": "4KCFLWSNKGZCqk2URihYJDSiikzmpXPdkL4fiprh8Vs76ZaHhizSnW8riV2grmMMZQjbt8rg3rQvmSPq5fCg9YzK",
  "key21": "qMZDjn5CbgLkcuQMApBirNZVe1E4Z5Xk2xdJC4Dmn9dRp2Nrqy8WCeadjXVqD1i9XAooYjPLu86xZfoqb66y9NY",
  "key22": "29ijDr3xHwvomD74GAPAi29QJiDEbXXsBcTCLM9vT6ofVsVuApVEaUkjzakMUS9EHngXazGznCigxq1DNFSZbyd1",
  "key23": "3LDpCqZKcb9FqpP6Tpo7VPgyPeG1ZSH32pxSqcaJ7kAadRRarRQjFDyuEd171FJ1c68AzMQK9DFt8GxUbZzNyTQY",
  "key24": "2QXQkLhNSJnP18BtQjn3GfEJQfXVFfd4jiQGkGVLUpeHumaEvAf2PiqQsgRdTWqKFyyLRL9bPjhNutwhyd1kxkSP",
  "key25": "4m6xrDj16g3zmPPz2ic7oYFSfJJemcmBRqh6b559zUfeR2XEyHe2nCRfg5hrr3PJmdV8THjiZ46JUnJ5RJLa84E2",
  "key26": "LRJ5CvtUdN9B3c8ekaMKSYvMcaKzwEukwznpVdo696r5cYYhjqbnCgnnAnJzZkcn7crkZSpkAdpEArzx8gNFKZh",
  "key27": "5uDRjbHftf2eKVwYdgHoMXVYTsdyE7667eFHVyqHjq7RYYzZWzoRLJ69fPQEPE31TX2ndr9xKn3T7DJB84e9MzPP",
  "key28": "yxc4BHZYM5NXmBFPby5GuaFMFmLjECrDNRTomcX39fc1c5kD9Sj4q1mcnj9fx2XmQyDxLZbSFGq5Z7n9PdM3avU",
  "key29": "5PQ88cHR282aMNNm4XYRkMUYAW5i71zzza8VgmmzcCPLMWJD6rM3wTFPkM6fgLJDJHre7mXdJJSFjyPbcwaEwnoo",
  "key30": "aD5oWkhR5wFNNsKhRtumYSo8SeLWNb4tXRehax69dC4vtp4wCqjtGjRAuLHXecBKCaBrjGX8fAK4vEhGfE3n6UJ",
  "key31": "53e2PFueA2amtwaydL4MgZFbkiptCkdyNHqEd5VwDA8Ab7915rkNgXYx7YS8HJzLbwJ9Rfo3FJvJZsbXjtAdskUP",
  "key32": "4unnBUKyEtShHeVDQa5T7v2Wwt35qGQeZQLn4DPwQuxmfnFJdiWq4iir7PzpHpYcDnbUKLQAfUY7s2cPf9ccjc9b"
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
