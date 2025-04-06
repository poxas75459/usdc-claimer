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
    "21eFd1xbZJGMWwrHCWtZAqaNoPQBuxZBEMFTGoWF7dhgZHrvG9gtZmz5CmUFzZT7ztukHa4RJcTP61pg2HzKb7Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "axSzaU6oVV8XhV7jp9rhiS1DG9Pvrpm2L6LgMNGskidwJWwbjSappriCS7DJcemVWX9uwuvoAUzG3tS9xH8KSxi",
  "key1": "mh9mc57ZfpvYkQ1oiTuyVw5PL1NKGddPrbAAfJ3UQRSYDDgaY7LxZjwTSfV8UbnJHXF1vU83c9ZStKAJn6Ab8B9",
  "key2": "3rXeNaRhQjVooFQVksiduuWxJt4LF4d3sw75wrnAyE3gLHNmw1hk95LEonmqDUVoH65K2f5bqmAyqrppM6bG7yVA",
  "key3": "4Ec1h3vaaPoJ5M6xx9NcTaUFyw2RWnwA4nu9SC9GusEPvMwEhutdbXcLLP3ii5zbQ2G5FheJQZGygLTvwsG2wVHh",
  "key4": "5eQWvubDu8SVAtnf6vdoTqzu5cEMQofiTYzQreJ7kjuotDvDxVWDbh1cy7ij3v3163WZhRCQa9MSsEGWWZ3SYFLL",
  "key5": "HvqY2JhrE8TVk4wLqRPvMRhp8vuSUYZb8ARHXP6L7AUgczR4UC9aCNgxqqaZxpBnY1AGsBstRLYmTogeQmsdYKx",
  "key6": "2PNCvPqSVA4iZQGGzE4wUnhr83vyL5P6w6ivYvBAJ4H44CLnz1nPSVgogQZCSjANtyUZgczU2x9XsLzQ1Rn4pY85",
  "key7": "4TPtW2VhcvDxLf4xXHSTFeeFD1XWGqZd4xC589wVfC2x7ABHDreAhakxqvmfN3jecrJTo8bKGmaHri748RAZgYY6",
  "key8": "DTJ1tyub514QZh3fXAt9DRTGKsyfViXPF3kM3i6D1RGT6hAS44iBgSuHs4gLQqdXzTCDSMrNTX6JoAcrJA1BcbW",
  "key9": "A3EdiuSRuBym6sYF18FCxSuU84ZhxRsuoB81EPBKiiNiL7Z1BNWyYLA49MPtyXim9MPbqBQWCgvvEj2mT4bZzP4",
  "key10": "3CUApLY6ZhJav3zFK4m8z3yaWRxiHing3wbNc2sPHkBwX1no6xoQdYMrZVYXWC1b3pDTZTxSFFuaj54jxGjGcis9",
  "key11": "4TCgH3TBBm9YVv8BtnnBTDQ3p2gNEJj8Ru2uvFqQaVt6MCMN5PdCZYyjdJDbzhfq9FLY3BE87aWjXgttA9MHQ6bY",
  "key12": "3KmQG6ZU2oYKA6Ngeju2U844w4AvhoCyeGTSvZanj7HsbadFDuHDk89J9FmGEBLXmG5sNPLEzBHuQxpaDwVTNW6G",
  "key13": "4ERHR1UT6g7nTsaBMJXrNT5G7hNRJYdDC7RPuAejiyHt7rghdi3hrpA7qmUHrU9c7ZK8NBDW3EBPGfrGa5Vz1VGN",
  "key14": "5QF5fSfCHDXmecm4ydp45tYMnJG523X2nSBoMPNRHZyUZe49NezAMATYTBZLdaMLxSg6M661WFzx5sSho3kSe5a3",
  "key15": "3RkjrzmxDJ5pjLKoDKAVa4WLc5gftpk1vQhhnsdaBew2GnxZzwSngEMzBZFZoUM7C63zzPXPmmYciTm1ycaJHtXq",
  "key16": "2B63m4cigN1kVDJpY3Zihp9tXy8E91nYcqRtacyAbeR4P8c24efC2jJEdt8tDTVitmC1MGra7XEwjmTiXAXH4qje",
  "key17": "3J53EMGpmKhcqmHJNErzNsPEV4bGZynooyFSCHgwvj2iesTATiANZpeuAQ8BDRmiiX2eqEUF7CcWNqGNE9da39wp",
  "key18": "62tHX2aqtQd4AZEJ9pBwui8oqjT8gXybvERGmTf9ddgYAFDwYmUAZzZsuKHT3W5acRPXe6jzUrJKXNAmt7y8EDrZ",
  "key19": "46PCaQgVCozrY9925hkwBQvnHkFWLE62fDGXSmF5aiayyJWwMn43pZiE356TD8k2KkpxqBeidcCBnQGpKfPWtrW7",
  "key20": "4MviXYEegJhgyuQJyPPscb7Zrs7mhrChg3p8TkNHxNfHMv2EtZabggPzt8gjGdeEtqDCP8ZucSPvZZ4gf29KFXwV",
  "key21": "CaNZwbj3kqYFRJH2a6HU9sgxre2YwoW96Ry4uXDvRtT4h9pe5Lo9F9tboRajqFwKgx3msyz6ViEeMhzVpuNtiMs",
  "key22": "62Fas4SPAAeF23Thu2V4NqpTaUsiEEzg79tcwoS2YvM3LmxhaA7zC7sAEiYvdxk68v7DNh3apnTQPKaPLe38PZjE",
  "key23": "3rz9prHNCFpLhAAprQzGAzMEK8ANCikkmz6XNHq14RNmHG71PpowssUSLwZckSDRxxYZjtEwmrtoLPKjrJQKqoe8",
  "key24": "k29uviPCdDrte1Wp8jf2q7Dqdx8ns8uDkLnZe3cRmYxsfkHQpVjukDcnP3tmk46PWYk7iYCimMc36ungqGJHHJP",
  "key25": "3UJxciXkMMfN4QSifpJfkzG9YicViwL2LDGPuuUScD4CPnAo3F6dzRjqpDS4EMa5Hc6hL3UerN8f4ViTDD285SMg",
  "key26": "2MB5VWkF8rJxWkwC4aKB2cr1Ac7mhR9MB14wgPAhJARJ6V5WxeFFQiyLFFFgrYkfcgMxFzSLqyVL7D5M4jkCaxGD",
  "key27": "4Q6iBMBe8dLi83cH31t3LNLW78jpijZn73jrgp6kLRaegFi6Rtcg6gfXEPWvoyayNvrxGvGDkDboQrWwB1WT2NhE",
  "key28": "5DKELyGK5AMBGrboyvDLyBXdZTcw8JDifPzUTUVrz7FBBXjDHvVNK8DAhdQgpNM5wTmdd8Xp8b6ntENuHGEqEL66",
  "key29": "4ftkGCq3bkUceHhrCZQSjXGSEvW9VJ64kbXGXNXsCyVoMQT1THiXMv5aPkQ4iEwx3YiWkf1aZWeHb3Pv4jKc7JZh",
  "key30": "4irNbRyV6RV2XMfQSsnRaDV3GmumPt5yz93na8iJ1CbZ3uBe6wHrFZ7N6GUYcvCrJTBiqcrrzgsQsBS7Quw1SuTK",
  "key31": "5hroGZLkBxT7xTCGdfkgjQyQb6i32HwRHLAbLTh7SWhaPYuFsKA2UQecBNopvcowKzn1mWHbGQqCAMeru31EA36c",
  "key32": "4xHsmGCJhT3vtHwzcjAmHTSaBFmx8YyCLSxxUxYGsbdg437QVfhuHzSGaAbbxxqD6TGPT5Q6CULwDFeYcTfezgzL",
  "key33": "hqRxU5b4t1nhAD6ayVPUGwzn77Y7FBfKGaE9VfUW35AXGC5AyhVuR2uPfwqtX6dAVWkbAUk5YSJZtpWR9m1fctp",
  "key34": "2dgqCz8xfUD9UhBudGMrhE1ECQCFmYdSt2AcJXbLi1FqcGUak5naDq6yRHpbH5LrzVktGiduj2T8MWW89fbTBxeH",
  "key35": "E9qvmdaJLAWwrbEqTV3HrEoXAJV3VbYEx2nxPzeoApUbchYocG4uh28i6ySVEuKS47aDtw3Zc4tprGRinMy9NnP"
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
