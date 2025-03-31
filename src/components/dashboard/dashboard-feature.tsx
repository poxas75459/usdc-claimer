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
    "42Jm2ueR3RPPhgxmxL2zAMccoYHMCNbmZ6SsWt52LPMPqTTiPjnq4aVSCP9A8WuWskjy5QkLTgYQRdAWUhfTvHcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TiXaKGzhk6huGERF5AcP4o8TfHAjJxsg7DKaL9xW2VmmKiRFse7PbLnjdCx7tEuD6ETACQDDnQVnPiERBVYJPt",
  "key1": "3wVFT4rVd88GWmcvVRaVXNw9uRSc9mPXdF6ZpU1cPeAWEDbuWsp4rGkNwNPWy78Qqt73PiK2a9JcdHQTpXCsybxf",
  "key2": "nMY4NNABLXDNKPfXWvZUesxis7z73Rg4GVca9A2BBtU7fryZdGVxVKWvVHzuCB1MkWjbLGUuKboEEaLbGSQu7bn",
  "key3": "4f15CaJruzLehay2XTJvbiB6EhQSpHgUEGihFCnUzWANyJJCE7UjqnRLfHrWX8fXbs7QjVEkqHyhZq1NdjZAJ8jg",
  "key4": "3vmUtC7tzbnH19MvTnQSkVcGYxvMW3wPL3FpCZgVUgY7h216uNeVpan9wUJwBrHmWfpDB7YpfsbhrJBTWdMjoVm7",
  "key5": "4eDtcVbD4eamAeUVnR1keV5mR5fZ2QRWD47juPzNaRLhCZUCWNirvtzWEpZyMGhgsF8DiSXwbNFGa4ViaqqT8Pko",
  "key6": "22iDvj66bvzb1ZU7enQUUhWEpAbRLp4XK9NtiSQRyM64gNjmmEVGS9fFQuGvBJndjFLxqqDk9zBSiGzBwek6LsH3",
  "key7": "3KiEPRXt17DJU6yyrLrMNQJ8AHD4vgLfjFTgpH6XAudERCRoKssBy7Z4xiKHxx8oFuHVH57vuAxqHUcKMpgk5BTJ",
  "key8": "4CD5mQjU575Kz8g9NxhRTeJa5cX2gKcpd5YwYwz3o8PKhVPui57pumSbLH2GcTHETi4HSns4m4ipLgipw4p62hR9",
  "key9": "5tYgfXyoXEefrqUrP1EXrSB7jcjVapTJcJtTSrWyBzocPC8F6j2U9TQ5JA2W97UKvwLzhDe93Yur9gykTa6EByrW",
  "key10": "5E7DRTaTjS3Wbv5WZRQzR1mWsphJtDLXj1mK5UC9f7hWsKRmUekqFQGjyzMmzKbhAkGYznn8v4G4LbVMedFmw4gi",
  "key11": "5pcwp58xVc1xQ72ACAFpjnaMJ5URfZfEDug5rJHCx1oKDFtj6nazq35RCbgo5eNEgS25aGwqaZkMc4VLmLbpoiem",
  "key12": "59RYX4o46UXUwUncn5si19NBVE1UCRRhN312Zs6ukbA6fomr76oU6RcfMNeshM2Gr3CBTLNdMGJh9T11BTrfmb46",
  "key13": "4b6tpQXBkpHVcuZZwvECUnijQQLfEqhv4d7ch4W7J9a9PtYcFbGTZpuRpP6hHjkhvJpC6APqSTzqstXwdDVb39ES",
  "key14": "3Fd9zp3nY8HRnuJYDYApzzfjRSTChScgqKv1qGYj7HW1PCDWDKewA7AdE1WSdzqBdewhXt6jk9YEz4e8jApBxt4e",
  "key15": "5HLKorq7rTrhwa6GVMfM6n1rrQALc3oYvbkgYWv7CBdeBMVfbGjFzqE4ejHEfUgq2ExETUcgnD4duwstz6MrBJ7F",
  "key16": "3nPUn3vRb1wCfm9oQCreoA5QkjJ1YDo9KEBfbCSfLrnSbibz1hCSxpc5HurrsSeFWbL3D29MLtub2hxnHDLjvL4z",
  "key17": "5wa4vPQ3U6ym1KvZmQz7nsNTeqiPMciVjrocm6GBhqXbNmzJGHiJbsbKiVFd8J7bM1GoouZZ5kFTKBVkGHAHkBwr",
  "key18": "46U9D1A2mxf7Gw2SQ42yNv8RyeHPDWuE1gpTsfb7Qau5FP1oePGcCMbCaYjnsLuuyDKZwdQGxtd7WtTrm3dDgWta",
  "key19": "3G9LFYWbpjvQTjitDbMs9k36F1FbgBrVc9McE3iF7qrzHQvbGKSV8BYV8sD7PUVhCKkYNWFS9kEP7o231PVsd5EY",
  "key20": "2AS5Kh7275TMRahNT4etdsq5JczEamJVQybvdTD8s6SRmoSqxQJJqWU9Mdjado9YVDYHTsWPoYEKUFGDkh7G1AUT",
  "key21": "4xc5C2zBRG7jtHf4yN89uC7gMDxcij7dskMQj3Sa2gCswNjL4EHwd8iT9UjaaQmdKM8z4ScNoonDANnkpGj7rMbQ",
  "key22": "4Ju9uHSkkN9dNihyLvCEWSxLX4ihDNfgxabSQ1wg8UCiYaJuC6feJEB52QRf97nSYmM5biKSdMPat5zwLcx5z4c8",
  "key23": "3dRab83sRcx9LeMbBMBCvgKyTjwm7YT6vNXDEXGQ7md1HAPpei4vK9LdyUTf13ucpSiSj1bpPiPz4FR65CCCkENq",
  "key24": "5qL6AFPkEZ95pHfB9hb3cVZZEu3JFGaYNs3RR2DoD3b1o1wvMLau9xuLHUCiMVik9t899cRUi28dcBgEx8FZBj1o",
  "key25": "4qAAbrTwHXFNPJYvN36QfsnkcHhE1AejWioFqmNMDk6rwKG98s1nMuWwjnrX1mUA83xKy9ZUdLPwamPWoiepD5No",
  "key26": "2ec68nrucToxPMrXZfjRYM6tuXgthWF2dmcDPTCPHy7TffCZ4Uq9FZHY1mAkqg1cHzWvQWsnRp7VRLGkT8KmA5KD",
  "key27": "5LGgq7GYWFaANLNNP9JoCDrPmDgCyfggjCLMMpduqxiDPCSFWF2jmA1wkySbN3RB9JxJ5Mx197c74ULUt2LV3jRK",
  "key28": "ujNfAV6Cs7rdBAMsDPpgUQzxd8fJRo49RHWHLVBbCFGbGSB1kt8LG8smphZveC164Eezc2bZY6cPzKVYT2ewFQM",
  "key29": "2DKs1RvjGs74zeom87GhqSQgQZ3msXmLAeAhn67oAc5F9vben5qw7sSD8hBcPnSZVUEm2Nb8zH1aYES86AQsc7U7",
  "key30": "5jk2G3TPoNMeibDbfgdJZiaVdZpJxVrQpuHuyRBN1nFaXtTjmSADc6bQkLBy7RbMz7tomUwRfDJ2hK355UHytsP5",
  "key31": "CxwDkci2xniGEKFAs7La6oKCszRZwFtR9hHvqYC6kWbPBcoBEUdXZMna1jTZBrcW69Hbkf2s5ACqvdUqYWwN5At",
  "key32": "2XYCMYoULA2TWVrwobmTPzhcRaBjjK4VY7javAVNaJwvWSZogUYu5FRDMNkePBxKn4FzEMHzYZwjC8ZgNmMWy2tf",
  "key33": "3oyfH6myBauPYukJweMmW5sFHuiVBgoB6zJJ28XDerU614Zx1JrLkat6rLmwLxqzoRWRpkuo2XGd5sX8nASKku8J",
  "key34": "5Y5tadgyiUPEVs9Hqh6t5J4rHxuNNVYffjr6yc8Do9zSjQT7BSCDiejd5XBQQpHnUQGdrZp8JuNJMichnkmtYqNz",
  "key35": "4qB6hK59zRqEpqpcrmuLV5VMRF7KQUGbT99aT19yP6iq18WvauZvWCFHtHhkNWQo5sN7MNUsS9wQQwQxppFkC9Jg",
  "key36": "367QEL8tntB2u23TNVcfMU4xiBbAZv9wD9uMxo5oXPcU5ErXwrwSX1VUgfX1B4ga6yGUZuaf9nQmxQUdHPLwvYMN"
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
