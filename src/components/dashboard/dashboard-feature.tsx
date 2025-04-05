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
    "5RwRMaakQQmz2rEihiTXtjrrnoRGLferkRHjYwprmfMBq93uPYM5cK4rQLwNtqCgjTcw3Ui6H53emXyoJPvY4o22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zodbvBnmWcWFNyzpMA9QjXxCgmqUNzXP8kKEKpwLbU9aJ7Yrj5mLYhHLFztbWcRtJYNmV9WFFqTQVedAXW14toU",
  "key1": "53Etn1bAaCHeiY2DEL7ewgf4YBttdzHW62BVf8MwszXZ1p65a1bpLfkm79uPYSY8EuRcc22pYUgbhxh1oDJhEyZz",
  "key2": "411ncRxb37V1eNC4wF4uYhr1Y473PHRyBZXoxqeTKt6FkmndB8d2p79884Mg45srHmAGwkPthEKkmBPFYKJR2LVd",
  "key3": "5RHCPo7Hg7hK66sjZjZ8quUffJmbaLxQFXU5S7fnMiDtL1weVusExW3ZirExAzNCGZR3U3uEGBXuaXZJqvoWFkeC",
  "key4": "2JT81VnCeC5oNT1ZpfCGJdYzxi4JnWMX3hTgPSX2Xp11Bc59UZrHgAzVDQXmK1VNC77r4ygkiNvPRVuoja4pVSQH",
  "key5": "2NPXgbqx1EruNuCF48YJpFvS6QyigUCAn8wUvKCDKBuLCrzSMJSiupTMg35BdBeKtG1uRHDS5pYiCQhXub8Wt5C2",
  "key6": "3PNUzQDuFMTNipuCFDtMLDufwv9Sn8yqG9kFrwSGSPw9yYqwXYcJJgzhKJqREcvRwV2fTUDwcd6Q3bfLwbU8ykdT",
  "key7": "65iM2TNMDrwvS9MbDRGkDNuuu6MfGGwhMLd6UqFut4WTCz97nEKSNDbJ7NHkbdjxJrDwAP4GZMcXcAKe8xhNBBYe",
  "key8": "8dhvsGH2g9Mk2aGkdd8DibMW4kfsT7stbWFDX98ZYXPGCRoju3jgmTTyuwrSxwaLj9pvbT4q6LRneVSpnxfMeTc",
  "key9": "MbakdiEmNHCM2fR91QJ563E3Fn3cD7M5hyBzyHVuSjNpZLgr1EU9AD5dGFErny8ZDUTFcgFygKBixw8AoeT3TNq",
  "key10": "5zzspCNGcGaY32G9y9TZ4T5j9fFZwHgmj6C4VwPkypyYBWyy2rfAWSZQ6H4Do7t3NTMs3R2LBT71edmf26dkYtRd",
  "key11": "5kDwq1VV34jjdkadvumUozqz4VoRGa2C7AYwDjXzb3MStSMBs5LtRahAHWCxCa7wfwvDPYYdGEtqdRfMdG4vchS5",
  "key12": "3YZnspuHs9xE2dSXnkwn3j2Pi6S6UfGDwTEvzMUBcyzXUF4kujNE5eXk7io7qoknRajvbaFuGvE4BB27BrRUbtby",
  "key13": "mEJa85AtimzzA8EuREUs5vDYw14fkF6YNm3wyteiv6LY5tFACKBgm3CwoL895V6cEEwqscdm3VWxfmuYjJwiuXJ",
  "key14": "4StRwJLt3RUPN6xjNMPRmati1qrCHwyCZYSzvPNTFmosGir9TGvVsqrj9YXkYTtkCCjH1fX4vUHQ7357kcaq4qC8",
  "key15": "2qZjSdNFv42TAAHVTAw5xENBKKdZrYjs9YUze2E7C6E5USJc3mxmjJsj4BLjKC2GarxLg9RZpaTLiwdp1YuZhsAJ",
  "key16": "AeYatxCCgDh5iqf4UxkJaAKUjj9yiQC8zDhWBMkHYh8ivEjYdQCHar5N4A55zbCFf1HsrN9sEVq3moL5B8tyvPr",
  "key17": "3fZKg8qLJH8efiXUWdbvT1kMEh2yiN9vPKDsZJfC9mmKSNzbAHRwmin55FwhUnZGC8s7Jcu5Ndi3TXoYD9a4FLR6",
  "key18": "5DUCzQp1grwWSYKH8Kz7Jge1ZeJos4gey9bLBHBPuhZ2kuka6KQnyyoSs4xPawWDuR9ZEKFaVdQGnNt2CxW7ih91",
  "key19": "4QE8QtHPoBeX7zniBP5MM1Guct4RpGzCjJ16HAZJuuEXxgrW33noPSuK5BboN7ZMAyuR3KrZcQV8np5DQoJRrm71",
  "key20": "4tAKkEAK47PA1eydL2gDHSZNVBgKMSC8onZ4Gd7Tmekewg9mJ1QXJ7pdyMxwV8iEWuspcevRN4xUBVJbiUNEEHwm",
  "key21": "4VZarskKUjoqyA4K8fgUhAhVKnTcFQ59Aqhg6Yf2yu6mSDuQT5MPoyvmePZ6ZVvczg4ra7DfSgTKgRuXDpX4ayAd",
  "key22": "zgispSjve6v9Wxsxoh5i9siuefdxYFRtGKG77EKp7yJRr9vHn3saWTGg6LHpG9ucna9t9GnDRZ12PNH1wXSa4fn",
  "key23": "3QHDjXQPu3NBan37ppK4z2qyQXscD6dVoRdhMmRW8ZDffySC6UPgzStDofZHmDqRpmHh8zdyWRqBQkN3eWBwLTHd",
  "key24": "3RhFXFpNnzFEpHmEMaDs8m3LRwmq7aYSaUfircuT6Y26DUzWZbehjTHUZsr6vdAneNzem47yhTJhDmsdxPFEpdVQ",
  "key25": "5mvEeA6LejzmabEbks26HhQdbTqE4dep3QxhbZCDxyGhCiyULjuUCNHKWvjZrmrNAU5gBfHcPVJs4abGshE47K4i",
  "key26": "5THgMAPULvfUhmLQ5NZsQ5Qbx7oQnx3d9apLjVwxdNj5X1isQ8bBRvo7TS6ZsTk15bsNiK5PNWDmTGakyjH3K2Sa",
  "key27": "64iwTdYcpifhGtFmobkkp6tJaqEnToCHWvbvapwrpjSDcKdbZiPvvCSGFH5MnEnntWUnLUY2oiyAzM7yZQaHRCDS",
  "key28": "v6zwKVsATuNf9RpP9vWbjBoao9zD9V6tpvmVKdL5pw6wuNEwswuR2TWzZefDQ1zLJJnDpp9gocy6abAR6crpPXH",
  "key29": "5C21dY7cfqk9hzRdYxFQTZCooyphus6n7yi8nfUh6CLnsWjyU4Kygrvv4VA7vG7oMMfEU1G2YsjHiRKjrTrfgw2V",
  "key30": "3Ph1ouuo2czdSna9Rb5p4GNaomuAUPdQgxb4cKEguTKwFttGUfzhytbxQVfyqiDMXL25Uwd2zH8qrqFATvHPTSh2",
  "key31": "5QmSLm5RFsUiUtZo1M3YX5dCVefci2NkxFfuzxW7d45sZzw5pvFUXKNspJMu3umucVV3onbGjGNSBzjZnEuSBuAo",
  "key32": "Don3mgEF64aNQcjqJtEoFRA32zfFJb9F4tcMqfukG3QtmZALDpqk9vt3xUKJ94FeyZJdjFhoxPPpFVdDc77Zmgo",
  "key33": "3R2J3hHSBoKgUYQWDgmuNrmrKpqjxFiM3fSw6bXXNfdfzcEQEqpKZrCgeatB7ztGwaZCwGoe7SKNXL18Q23P4ArS",
  "key34": "4RFFpv1dnE95LREcsYMZwHbnqbC8Z5hRDsmBpSfNsq2eFroCe6jgwNGkCEYJMBtJg6QAGzqJdWEtHP1kAj5D2B1b",
  "key35": "3jjNAt7QjV3HWWV5fKqZrE3j6ZLxrdY7cynkqPPHrNsd6FhFU3VjHzGz224eAuWCznnQh6r4DDwbUo88PHupiMbt",
  "key36": "4BHaFzhfLgsCiLQCJGupLU3pws3pGGpNtY1WM2MrKvbptE8stfCkBAQ98hd6CF97hGh2r8yGzPCBeapF6R9KuXUE",
  "key37": "p59rB7fFnsNRVw5wWFek9XSKvwtwiyyNZryy8nBGEPxpwUuBWS9Nj8ZWH4Ls8m6s6NHq7JL87CswqZHjFogq8Df",
  "key38": "2nU1pk9PC54G2TwLKnrdX9VrzAVcazCR32J4E9sHuQLfC2bQopbXqW8AohkyCTSpPS8SS3RVCz3bHq4HoG55pDVb",
  "key39": "5STcqLSPA3p2AhgmdY76iYpiyRzt55C7mp1kCdZnMe21g3Pky8dwZ24CSreyc2uoTBHdHvR5ZPcrb1T8z7MjhiQn",
  "key40": "2JVZNxXMVYbQDCz2kAozzSbKieX5z6y3nKo7JdWXjXXbWe4wMvs4PdPE4sTX2uPfFgRo3tz7GcB6zPBbzNPcgp3a",
  "key41": "3SCtd7XcnBNQqfYVUYXuHXesRxojUafpsmBELAimuXQuRsLWckKbSDqF5HJu1fEWwg7ZvyunWHqLgmuYViFtF2sv",
  "key42": "4QMRVqJt1ya9K9rJbF9TPqgpmshKr8vaBEbRoqCjBw7gW1wYgo7NaCEkNsmXqiNEooz3h6TY4DgTmmrVRnqdNY1p",
  "key43": "4TwVDQybPy2p5iLSCiKqr2Nx9LRWysv7eastTp36vtCXTP84ntVtKAuL3Mh6Jb7tMtKAKBrxmJmw6gCEAn59b1yc",
  "key44": "5Sq4sQFBN8riWNBKeHFm4o9GMDxWY4L4KS3qZMHpsVjvDUPR43SbitVfu56aGmU3ECx5SDTvHsmEA93JdvuXFU1c"
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
