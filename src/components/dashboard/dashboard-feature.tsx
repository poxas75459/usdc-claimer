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
    "3m7FxbVyAN7NE3yAKNMuVQVuoBVNbG2TpQ2qv9PK6dZQT1DJvnAXgeJG5LMkkYQvVY16VkAa9nADcMCu1E96EexW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9i41AxtKPxz9oSXKj65DugVQEB9EqB6BKYKtMWXXqc7pHFeMG2yU1n2zBCRZCieNzRfLd8rVTaknn99W1VTMjH",
  "key1": "5F1iM3PPVLgLWhEbwsHZ1RgFfuXHR31kSqmNQcYNHif23ojCMrL9rCUHtSUMUhUQXga2tpSWbzsqgcmdNppAeUAt",
  "key2": "4WckfArR8v6P8Cfnjgm8uQVRk3ZzaWWckwHEKHJMETJXRxH73AmUusumUF19ft2Ht7mtPo5cmDvbvpqgnpeRv39F",
  "key3": "4W7jq64mfysGQThXHBZ74cr5isjfFecYYTS6jGYo6foFDaGK88zEHaemUy7XoAPeVeXVWPDrus2Usd1mfmbpptWc",
  "key4": "GQ6YP16RVpRaQ8Lb2ZF2d9FSHi8f2ZFMYJBKti4sMgpSHfGi678izmGDwepE2oGeg71AM2J4km7FTFBkcNReGSp",
  "key5": "5npF4ByQAvJSTFGpmFyYqYyjXhpWk96fc34vGHadfqLV6Q218f8exCqdYS4MbjZomioV8CKNU8A85VRpeuGrpmKc",
  "key6": "2GmmVbL4UmeyKLFpHY7Yd3qHWzfzSzQwHbEFnemGWyYbhQQdvjBjVKg8zaTaBTfhqJoPEH3PFPVSfJBmpjELbgrR",
  "key7": "gXTV1KC8FukkbxVruKVNHB6Jpz3oQ4XUYLfojmECjkJSMb2RwFAQSLZj268tZc4qD3LS8hZCZ5X8akZX2pafZcu",
  "key8": "2kYsvm1Pr1wx3TrbvZDkCqBh4dZnGJdnkmmZSKWbrxowQeZ757c4WkpiT9mrLXJbWDMKmXicNNtKZyKcTKcSYs9v",
  "key9": "4E9jgNwjMrLf8j5yQNQ2w4BhucodG7aBzC3VcXjhFHdTThwedp7mqLjM49HQcngAYo2RbLQpAARYnqQAhWQ4WQSo",
  "key10": "4ofcPyYLaK859qFRNdGQ9GboC8Piny6Wk4U6hEGMdjaY1qC423zH1TUTcoK2UrMsh498vxWfV9UCe5Ssa8BT1iaa",
  "key11": "2mSCJgYQmkfHP7WDp4sUeTp9oDpuxk3xUMpeEaLx3qnjeHxK2du7z4jGTdUozN6wiPHd7mpSHPrvundLe2FFyEF4",
  "key12": "46FxiLzQhDd1g5vkGF9PSbexKtWotSS2PXTRqreGD2DtBaD57wvU3Xds9LabQA7GMHfBiUUmXhQRq8bPfZbK1Q4U",
  "key13": "5gD5ezMXi4nu8UtBaKKWo9SSuSAF2bnxs7zvPtcXHdsNnRK38ADwYs93F3TJpg7QtP2ZxtUTvQo6F2ytT8gYBS9D",
  "key14": "2RLjpKP3S2UT5VDFFqxvXfL6Lcdn4Mgz95UnqE6PE92eoG6xuZoEtVgmgUxaSa42XZY8dYzxaQ8BnxfWaBRgdzQz",
  "key15": "4k6DCqv6Q9ERFJ7SqbPR6uZp9HFxohc8yGTLfSTRbi9dUUzwX1nNycgrpk9sksuAMfsMkbLfeE4PEbJ1aDJWXMbn",
  "key16": "3ygZ6xvkuTmFsczsa2cXtLZRCF6vunvhhWJF3wk5j2zk2moNwmxrYpwh5p628ynajuSoe6bye1iqJLWNq5Xf3M8L",
  "key17": "M21pd4TtEy8jK9BpPWYMHi68HDtqKPDpxrCCAvuGu554VCT7xY6qbQQYDbreEEK94CrQaaF9FhnJTLc9Pp9xjsr",
  "key18": "5WY1y3gGhNcNYHyQMWXJ5wCUys3SybyGrgJLkDQzGF3Qsj3uaPu9nCpAPZvMvp2LeVqqfzxjHU9jRMRuiZPE4g9L",
  "key19": "5JogTZj1BiTPgahAQ36FLsVvpuRkRRvggSmNL6PbqEXvp4Prn5ED7Kd1ieUxQS3vy65ALdU9sJZtDc27SeN8aA1J",
  "key20": "yCfaSoNCe7jKAHvuheXqqALPA7xmU5fTRAmhek58WRyXYx7eXGRtUmbg8f8qoHzuf3SuvKJ3Ykf49cp5N4DfrNn",
  "key21": "eE8L1ocq1GHMEepJzmuSre5AaQrxDP9TPqBGSKSoPtYLphqzhFpQjUtenh6mNJggEhGKXUPStiNRKBem7Hyq1zU",
  "key22": "2HyRvGz3ipLPnnjmxsX8J64x7Z8LBuVFbhFujde9Ec68coj3CeejqunUnuGMfgku71EvWcWDfTi2nQVQanG7YMbC",
  "key23": "4BAsgS8THijHJwoKAPHwyT7CfswCSKsRANqUCbogfNSRuZXE1M5YXW84Re6q3LSPfATTE228TTREeYwwnGGs2n2r",
  "key24": "ToMRMksAckfCjGTuqdZcUFtPLNgsN7pL4Dor2cKsTJrEmPsFQwQ7hkRWyHMDruzV7Jqpfuky9c7Ft1cKwuToWWL",
  "key25": "3BbEVY5nCFL2A73NGfhmjjb4wjDxHhf6NCEu9J9jG3KHmdmRNUstnPP8VZXQoSUk1BLihEYeqYPfXkt5oZWWTEx7",
  "key26": "4uu5MAgva4VAAh6VjWmhiFydLEpJeYUbEHGvvvVNqVzEypsZrA7mkFusWtwq28RuZrFWGpcPiCSQzeJCrHsQ6Le8",
  "key27": "61Vuyd7VVXPNt2JDv6AtdJp16d59xUKi3XQRLTL6nNbfc3pKeZMGrL2vjEmb4P2EcrMHT2u8yhWDJWbGMqu5uiKw"
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
