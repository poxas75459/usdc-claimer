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
    "3cf9BD11UpvExrzQAwRoKxPVW1xdPZqJMSYvbFMnnG8de1AqUHKVcni2ueCWwPiGPmofpcpcxz6uzFiscAZiXzZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LfQZ5DaT9Qjw2xZCkwUbCKybWNWnyAyu29vy2Ge9ruEeRdsBgoMgcuKMfTBAezXD7wJ3LMtYpqFeQMzFsY8SU3i",
  "key1": "cMLmoAEqz2gxV1gq3LipHGXvCaDCqvEKZEHwCiRPX57TpoY3tu5nJH7ePgecTAwKWGkZLYatTCRcDzV6Vxcof2w",
  "key2": "2T4mTkH3qLSGJC8PsciGvBmQB1cbQr8W4Kb8A1rRSsyfweBxP944BKJxFPMgkBampDt8s9h3XY1P3En5e5p9z8FQ",
  "key3": "5zVs2uu53Xk9jUUgjdYqVHUbCTpZJtHEVZAauivsFMd8tiWMwwWY3MFp74HuTsjQsZTwnUVem2H6ge698fLhix9P",
  "key4": "3ERQEsD1LyKUGoZntbKNSTSfaRjqYJknCgW1kV1pw2yeNiHjv2JRz8VBP3YmAx23MLmywBiad9T49zeWLkyVGRTK",
  "key5": "3jKt3HAfpvKpzLYkySnc87vh8kXR3VJvhfRcJYVdZWktx6bSGSCzvXdiWbgtxyKPFZjtA3raRYbqtfmBkrqc6jDi",
  "key6": "uUkALTNzxiv4VCXzhTiPBAkjWGiyx5vNzrBmDbzLwGJhYGA4Zzf4S2xEuwvWWLzN98ZWuuA6uVmiL1p4KSZXuTf",
  "key7": "MniUpeNn9jZEkNfcLEphYk4RCL6q5aCVgny8365vkaTcVwmaLrDQuyuwMdRKgz8kGJgnWyQnTjFNtGtTYqgaSzh",
  "key8": "3proiJdon7k2Fr5ww3jTSDyTbiYKL5gHZozoitdkKCisUasew3Ui8piBKUuCNQ6LtoXrxQoutMkEb9LrMueLJDFb",
  "key9": "38f6881qdoWTyCinnfSqxAiyQ1VczPwYAmpgmqs5QYMkcZaGzku3sLavFz8TyiLRHVMQYQ3TpXAH9ZeC8KMNANim",
  "key10": "4eX5FDCX4jktfGsQ6ddP5FdF7xDqjLjjiM7tsJwDD6ky4m9ZpCwBND4HEc6WW9o51ASgfPNgmq2z4a1LvayqYuYf",
  "key11": "45Cn8uPq8d2cNHop9LkiB3wh6aN6Kgu3ESnvvAmWAxvnwnBwsABodjAaKVp3vqBfKvqg1i7qqPvp1pbxicdbLcFs",
  "key12": "5kzbFpR49RC8iNTa9XdaEH3SV2m75XY8yakeaTEMTsfkSQWzK8Mk17d8iVbVyQ8QPZjGfG7XQvyp7ungwVmsndjY",
  "key13": "5uDSeVLL2Na5ZmQh5xwKfaJq66FdsZZixxgYsGjXKhKh5ybtepXCuUtfiyEVfsVZG4Tp7nESrBPSkA5wD1EvUH1e",
  "key14": "5SLJA1twF8sbD9vDu7Hn2m5tyHHnjLi2jfMWiYGSnt2y4wTAafsEb5USu7gDxieCwnb4JdT8UM9b8ZbY8vArFqWF",
  "key15": "3JNBT8uEfPfHGpY2FewHHvAGV5xQ6hECEaTLttBitDi8CS4Jd6rKxAhMukKYpGmyGBAUrnDeuUf6BTaA1Qfji94f",
  "key16": "3a72rQnxTak6yJwdtwrZpsvTuTH8tE8maVYj9zQiVyCVeaTGKA71Y7B7CRx4uSm8kWfZyijDFd9FU8yYZbzWfQC6",
  "key17": "2kM14biseKLzBiiL5omUcqw8FjrXDJAmivdPdMUHB8RR1dwcumMBxuqKxVyVak99ihgLJiEBvr5AFRNiyiEjEri7",
  "key18": "2qgpAe9pJpwWztMmAE3SMHFwT5xmYrLfHX1i24nREiRfs4SKQsGFzgkwFmMpu4vULM7MyX1GjVU6YhisH582HEDk",
  "key19": "511CNuHTYptsqCiorVdAeRuUZTmuuCi49a7WNJtnNXkbSQWtr7Jt5cNTbvV8zgiYBDFEgJDybv1HiKai3hDu47ax",
  "key20": "R1y554WKQdZ9Ekp6HokoKVDsvzsVgSLt4aAKrpY11jbMStVcgs94AeyVV8HSmQtF6TvYMLCmBPSjMzCbRjKxz8C",
  "key21": "4y7Q9svTo1DDqdEuKmJa2mLcd4U16qFUWFML3fSokvMePdxP1HrVcvkdxyAFrrSdPtLhjNyuXcwZzDevndNvkaUN",
  "key22": "GwCT6k3vLbsWAYab2Mp9vFhHVZdHatPkRUytq9USNLZfiAEgaRZsfUE3U4vQchspeWNpwJ9neL1t5gUk59uDUmg",
  "key23": "5ykR5g2QYSn7z3JFPjhoACysvSFWa2HdLW89NxP1dtVN7NJjba6tAbFvE8mQPjdP1ufyE5AK8RQuEpjQuM6BRFcY",
  "key24": "5fXVBRhcUTwg6f9MKW34zXhTB56N1DjXMaji77ANXCqHSJwsQPx4ReeRBiQkLhmUXEhaReCbyvGj36ZXpefgT5Fv",
  "key25": "3s4cxCwqcT114MZwCjBcCCTDRPfDxYiiXtZjyMBHKwdJwNPVJbBbxxpK5mtVm4GA3mWMyLocwBdyricsv1cTVXUC",
  "key26": "63ZFBjX4Y9DKvyqeuU2XhVDmExkhb7hG797TrhgNTeE8KfPjtuymLbStY7doZBF4fDxHjDtQ5yDvnFinp9iUHGJa",
  "key27": "5gULLCbJ8DECkeYN5Lah1vxbG1XuCVph3WW9eYQp5wMe9BvzbUHvUMfQ6D3xmXogU7Nhj8fajCNwcLMsyqcA3bx6",
  "key28": "4r7TWUsYAVpb1BJHzaxPTVLPxy6f4QkLsFA9oWAHi1YQkVwWpx3DAi4A8mGaNLPXZuMohLRDNCYYoiH5gZVeanDg",
  "key29": "2VnvWXXCBnyMj6K6a6uoUTn9uZx7PL1hk3edgiNWx7QM3v2KKVL8MzvcLjzchH5MtpiveAwTxZbjUg3QR8gKNXvA",
  "key30": "3ZMJXv3DSo7T5Qfasz2vtkgrNQkiLYxvxrLh3Yyw3nWh5WGdQqCndHaV3SBae2mUzv9ViT4EAd7t8eSeHV95aqi6",
  "key31": "4BH2942Dj4SFkUBpe2gKVMrjMpnxEts1UbvWaW6yjg1Uz2UCSR3hNM6Qt4n1b8KHJv2ZsruAB3QxD3fsx4diChJ1",
  "key32": "5Jh4KoNba59ErL5N9PBS5HAmB65BFLg7dGMzSRk63XfRWnPijr3JWXnDTcDrdGTJSJiyqAZowjQsMpLX6kkhXffa"
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
