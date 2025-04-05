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
    "3hQvEoR8BF7icwMGzsJh7AgUfda4Dz7FUSbfpVLcXFHUGUjNxgcT7NuFctzUqvkTR2Uk9U5gN59XoCVm5GUWbY4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j9k8MtiBcomjZ2T3C4ooFH5zW7vZiApcPtB9XSzAsMgNLasEHAvAgS5axFmeLtiwE4aGibfpmmLz7Sk8uCML42E",
  "key1": "2jL5gXNkgx1Xsmmzt7sTRDSgPLMzvy5ojPeGoxErHZaWdXiTR8KUViiXdUGzdYS3QgXPuxio4ra327Ud6pMZFX5m",
  "key2": "4rBJHefcp5YuCMtxfMiapzUFDFVz8MBGuzW75vnoGjrSqpSLjSR2nJDCZdAtcezi4bgzmPz9CLckoER1QpGCy5mN",
  "key3": "5ZdhXP9dxuHQ8HDbyeW5WcizYxwWQHzZkKZc4yAUor8yCapwA35Hf79gwEfs6KXmPhZ47T4z49Zxie2tMvkKQmJG",
  "key4": "3G6moEQHr7CPjQQe4MCeVAtFio9xrqzHNsUXnbycS897Gi87Pp28KRfRaLp7TNqbEWN1V4c8jwtaKsD3NiKaJ1YS",
  "key5": "4AtfR7FyJKK68kNVzW7rdJWwcL1H7eDQHsvKXkmbpb4j1WPxp1mrkZ6PUytmjtUuR3Gfr9s1nvjXT5p2noLbxLZL",
  "key6": "4R9RwhfCQqwACyhgDPn887W9Ut1xGZZWHR89j5qqTv72YbUZPaSvVNMXNJhWBMCpmBoxj7QKaYaeQSWAYeaN88Jy",
  "key7": "2xUQGa3AnEGMu4wGrbc9pRTgFECiSGBk3y6QUvdjj5Pv5EVLqCE53kXS5RgM6hmBKkLHkKonvt8kYTMvQybD65ib",
  "key8": "5eDenzJCLB3hpWRLXK1evCJHjHdqGgRr2EeUE9qN9w5vfJFbdX8phMYzTA4tRGms1QUvP3J3Da4jr37HJxsP7djK",
  "key9": "4eX7qfHTigW7wv8X7YHG4NNP2N6rEDV1tBBoKL1zPpp8FpbgMpXsCDFV52q9ZUG8KS8UzxmTCCw6Zmpee8D5TPwf",
  "key10": "4sBt2W6W5YZoKtUJ6uEiaJaBYjLiGbhGfw7Tjz6LgRnJ9AdRB9C3E8rTkmHrKA5Ey5RjWjfLf5XxxpQcjUH1PYBa",
  "key11": "5UkYD9x9vtw47pxiJM1GJ3GaYpxXG5qkP5Nc17C57WiLFcggSZcv23r4Q8s5bkmEuaNUNPgQqGStgoMiqeWTgycM",
  "key12": "22f8NqjX5c5sMUucp7wHnnWfCVx7agHtwYah8dKyZKGJrkWkcvJSqTK2Vu9aNNKpdY3i79NwFkcAxYDPuPfgBtav",
  "key13": "G7a9vCb4nYmhCa3jB6WEhEwMfjEjDTF3XMVc28jwTJxefeXKBFUSszS8cyLaHVwbcuSWkkdd3JrKiDqAbii6FS2",
  "key14": "5x6nUp1EMjHQFYDk7KFkhJpTcdJooyVPR1ZojYkY8DrdotMuQjZsEU6TdoaeqN1S7cu6qSpnh9F8XDc1F61CpF9w",
  "key15": "5F512ju6KPNNNG4RvzHUvE531gXwZDMnromKuok4XRngpc8pScJoanW9eSDsj7QBEaGR19xAg9gZBvNQ58JaijYE",
  "key16": "QDv979E1a2JixxbFLUGnL95PCuAevi4iDYsemJMuoeWr9Rspz1EUMB9sAcH2uBU8ZhJSVVLrv7ovQBaPZg7D52N",
  "key17": "31Dr5BYKNe6bfZmDgc3puRpLAXFpxSUmWfFfcrxR4sBCefE9ak6QG3aLpMb891W65chnYRj947JxgmKUZ6uFvQ3v",
  "key18": "9YeYY61meseGxp8fDHaT9X28gR1gCavR1sxxmiJpWuBiAczGEVtqJeSvPna6ajyfU7KTwSEirjWSmQyiaQq5PK4",
  "key19": "4AkH95NXU9PCjbo3Z5LyzQVCQZeKbXHw1mweXPgVZRtXZGRYHJzoNUP7auFbBdTCB4bxaqqHykcAxztizzzEiyQG",
  "key20": "yEdPq5sq8txhNtQJ9C2UDoDui8ByfRoLpcCCCVCHLaJdorfE9HJjvvDD8osjYbFFvYewrfCjjzHDxHq53uRXiTd",
  "key21": "5FbNfTwX4Vw7qADCB56EbvpRB9hWQ5VbgVdEuTDPrdhTKk6j5pk5MG3wPZFdtADcnejdBa13KzRyEAKEmFZLfUck",
  "key22": "5QCyqAV199BAci45mCYbUW7BzdgEVu9rqQTNCN1eTGb3p38ZYFNBcVvFNtMMS6bzTnQ2iyvKXzWdXyjjiPTAqsRW",
  "key23": "rGpGZDP7QxwHKffrNy51UDL7JXinDegtMvrnusEuX8S97xeZZQ6bq71cGZELdZq5xRGbzoeuSdxgnwPKtE2NGuK",
  "key24": "4RKP19PF7C3XgqKNdm4Y54wrSRvKshuc9w6sQxeeAFyckcL8ikEHY32QZisRKXfsq2xVWbrbViTp9EKKJcmav7Ar",
  "key25": "LMdPzEJqUU5cWtLKqVWTLiczbSvSC6cae6nDpExTAnD4bjDK6JAJ3T7MHpV616fEoEhj5pbRvfYHuDBkTQo6NT9",
  "key26": "ftp8hVP2cUi7ejAKzQTbjqzNmNUhWepKXWgkY89ZyDNTsNfA631F4bWAhMqkCNQrW5psJFdfP3pFKgQWorK5P3Y",
  "key27": "254azfrSzaCt952QXkZU2as2LAqpfiVQZmeECGU1qvmwy1e9HqVzJmqZNtVQiadeyEzBFj3QwRH2Syx7Vmr3Wgq2",
  "key28": "4xFoaNkNhcX5EVkoLxRr43pnu5LVKnrzCJ2WRwyTX8a2tdaRGKDwPEnsTeai4zx4L9qkBvdKP3zogGQ7WRrfEhcW",
  "key29": "oNwwvhzDmcKR5py3oyMndjcDNUhRKHcxnRgAjuS8r75crZ1FYcQjL1qkvNfQcmiCmRqsZEFYiTwGVnoFxRg9HGp"
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
