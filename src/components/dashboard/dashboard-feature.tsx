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
    "6YbDvLYPfRDrCQ25qJJsjKxuvecbXZr1Lbeb1snmaPJUJAgMJzsqdoj2HcrANS5uNmkLFgYNhsVjQHCQZeVokNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rCerSTPo4qt5ss9SfrUS6RvK2qvS6PUDXQsVvz1Fh721px1ko3dEV3uNkz4yGGv7aYAWqUoCBZVtU9XEhQaH7Df",
  "key1": "3viYH2WT7bNFVs85ghqxNVp1cnJ72A8HNhipDf92wbuwZEm7fQtycqr3KuQ492uLSvwXRYKRTZwAU8iDky8oJN6Z",
  "key2": "6cNiHp8xRjEJSUuKSVkNE9fH4sF72nTKmfAqETXeD7BSacY1HoxZYnCgmkAsA1ibm5dPrT5jdhNv37vDkQpzeq8",
  "key3": "5JmdQ437xLtswxt8YkZzRDQzvK2nfEQocZw22hwiiFhoYoG2py1pj6eCeheZTVm1pMeD73NrskiEmTNH7Etbxgrk",
  "key4": "2FYDJBPD1kjPHeeQt5rgVd4e9LT5mxVrUowduBD2SnPSFhkGD2YiwGLeFVqiU7JNDZ7ua7FoLZpmfj2jwZ5yP9se",
  "key5": "7KFUAZ28FRZdUJgJafMAe9KQzycmq3WT2T25b7DCvjUhkQ1TwBoagzJBY7sSnGQ5JyJEK7eeiQu3zshxRYiW11d",
  "key6": "3TWs9vCyFFBouTnMDz7WYd4rgvqV72Tz6GaGVoM8ju82BNt3EcK2gLtz36RvZ2RAv8uSNFHgBMKiDbcatp6KB2pZ",
  "key7": "5SXutScpBcpagw8gm3dbEhJn7pKWat8WGUr9HAqS46N91GBDSkzwu3QyENy5L22NWKFKqALDR1wbEPx39akHWSJv",
  "key8": "sdh8SaRdDmszyHjMmEdQAK27XV7zfekB8FCx9Vqy6Rx7aKSTSHRogWaoeab5tisbiGxPihKf3m12tASLM6isqcm",
  "key9": "3k2pEbRmhA7ngBJVSGirw1Ga5qQL4EBzGeS8UWBDTsf3CGhgUnr6pU1WPEPxweyxAmSntQJ8R8Yau7yjXBtJMZdw",
  "key10": "4eWNkHRCv1zSKkUL7fZJmeU1joSsYTJo6kMtBmsDbMxEUD1HoH2vciQVGMj5HeuYrVzDFEWYJUJJSAMWqGY58be2",
  "key11": "PCzA9rHPNDGvAq1rCKZ6AZ1eDP6REJKY46sbvj4NEP6EuDu1CYPcuVWrFCVgH4MN3bBLYtkqZHMes2xPhz6dRe6",
  "key12": "9VwPTLo75sDTsFqcMkUuzAVUDP2q3Cnj8firTgNFdNBXBPc15r8H55aKFqDA4KvCkyfXzM2fq4BneGbdmopWpAY",
  "key13": "5hN7CrWZNrd4Pv8o6b7pmdoGr3eNReT6KgdfaBLbtk1i15ckCoWa9ec7fze5BgmFA6pwAK3N4ATJMUN4x1chzdCy",
  "key14": "YjoyMMNxHaor2vWmTa3R9DEvhXtzEjdZkUbQFtiEsTouTQExbpzxVFjXAbDsjCzc68DXDGy98aKKY54SYtTized",
  "key15": "4ukNDPBA9BLWwxebm8hb3gXbiQ1NffGt2TNU8fdsXyKdoxcDE14gsMr3Q6wmTR8aEyKpMvnS4RMTN3eig7YgBnpB",
  "key16": "6XLJGtyKScEENEBgXwt1z2VgJDpXUTYpe51wfDofaFYKxS8HxJQPRgcC8Gx6hKXSCMWGx3RUSVQ94mb4gMxMecB",
  "key17": "32sysLoK6aagwgze8JqYLcoBJ1oTSBL9556cif1NaPB6XJKEGRdbgbiA39N8wer7wn5XwM3qM3w5Exv3rw5wcDx8",
  "key18": "2swiTDd23a8gxzZ99RztH5xUcGcFdns7zab1mnp8tN5vra9VihxKJYph155GB3wdkyk9koAUQt5uGXi4nrNory9M",
  "key19": "41JWyaodAFhBFDFjmpH1g2vSLisdbJ3k2hUiQmjjUxE2G1nFCHsQMYKsCuCHENFn44NrV2yA1g67KWcXk6fgvtNX",
  "key20": "5kvRzHModFP3ehzc9Kkg9qEq4myTeuXGWtkEnVDcx4BLaFRrNA6BTmvkJRDVPSBQK7jsMJhu8xr1ccWoTQD7Yoqj",
  "key21": "zG5QtQgQM81Z4DomSLoo8ZURdDtTSxAAYzXqTsEEhNKekHYsNCDKGFqxJ4TZ2hyRqsqo1cidLWVTWHxdxNf9egm",
  "key22": "2H8A1Rc9UjXmaWYnAtz9vvNU6ARRDiYUB7Aw1Vd4Qu1BerpaGJi8zePiTbW2tianqjoCnn7fsfHcnTBdkpc2CfKv",
  "key23": "4FiLRTTLiNz1BXNewsoCA2ai6u741MBEoCKM8TJKLEKNXxE8wFxVCXYuUYFQz6sWh6WLrxfH2f2f6hRXZjjxVCog",
  "key24": "47DFkfbyGbWsgrvueCKWyeBkg5nb3cnNrqZsmKaDH5Ywr4pKFvgD3pdMdfPXbZJajDjdeJX1t7Xc2E3YBohTrFCF",
  "key25": "5E8Z7637XsbhYQe4nu598KgUkH5VskR2pThNGfMqrHdG3dPY4sm1hcZwUtXgnYJWJocGZQLL9yS93zP6tkzUWvmL",
  "key26": "4iGPEGjYFvr78JVnLUu5HtnVPeKX9QAJvUZ8GAiab2zDkjNcQJYc2bbvy3NZoacd5kDAXNn25vAhhvnhdvMFDkUn",
  "key27": "2SBtSpfUWyFkDQaxDHYUBhJYuJhLLnHg4MzWgHWxJDVzv58ea6FVVTG2jXRLqxbhN5EEgcjS3KXfgSoyGrN8nVeY"
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
