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
    "DDDzL2TJfxCeyhxXAYKVafgDoqG7L3pCiXXmJWfDpxK5rZvobh5zjHBS6syMg3RmJn6LzzRjj1bGsvQJic9SLHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T1YTQ4vYr7WtqoNPQGPqyTCw3AhiecFatAUwuk4K3rUG3QxjJ9uSRnudCy3VMfFQYUz6pFjRD1JM7cwh4qu4F1b",
  "key1": "5jqEskHM2NjZPbWwaAzSvSFExPtZo2WcKBVtxLTpvyu6kLbM7JxtetJq5cx58es8SrA2MpXSQU8kdnCmt3TJahyM",
  "key2": "5Wu9KYJvHovWnC54Jh9GrVq5sJb5CDL8XH8c8z5x6W4uMA1fd8MeFcZ4Nmvsq9TAqZp5JAvSdVqMWbdbx7Vg1nnE",
  "key3": "9xdvhjG1h4JTab23UtKJCXBerf8mVUWg3FEXKxYcHo3nBnMFwM74KXhyEvHtXgB7pbX6LmDvnzWdu9mgXRDqx1N",
  "key4": "31sBwV5gwtYdHZe8c4d9fLEduqJ1HwMoUP3a4wXtGibFuDfG8khPBRjF1Pb4KcBvEdhAcPnxWgw1Y8sLZDKtu8vh",
  "key5": "5bvMyQKEA9fJchCH8Lx9z3EGsLsD5wdeJHrbuBZmy5KA1aC1JHG7uKBssicqcrDAN84EbEmTjdjjvb7swq8ZxCnJ",
  "key6": "3CTebkPH42TzE7t5ha6yrtXqpCKy4UdeTRFbtkGKXsjK1gbtsn9V7kzJYMHq9xH4P5yGDLurkV7aGBXqc6oReghs",
  "key7": "5iyXXidZFKXHZR3qBFVwL1MA4oR6JpEVF57EGyWufPX3vtwKu1tHafguLD1cr1asdGrHQ54Ux1PSMFZPChkfvHdM",
  "key8": "4DZgDCH3NdoLyALF3DAQkREHCfTDqYpzoR1ik575paTifw5HsBxphH7wYRSXGkCejtnrod2J79T5u3QxQKexMjZH",
  "key9": "2Kd4Xv6msZTRAqQX5CoG5SUZDpuJSwYrGUJdaN9n6u2UApEj6YzE7emcmodNiJ7VjmsbYovG2KYN7yEBSYwMubQC",
  "key10": "4fVzWXj3cPuQnemumxrmnEaRVGqY3976T6Fndtbcqn6Zwbyu6Y1dtYVsPTp8pcEiPNdBCsnE4vbdw4PLMTPfBCxz",
  "key11": "37gpV325jH3g8ZzTyr6k2dsuarepDkxvWLqAYWzhru8Ve85J8S3EDW3MwA24iSbq3BLrJAYmLYxmuJ9kURADBb3d",
  "key12": "5yzg6Kx1vHLajY1vDZkT7DJJXBKryySsNZSxuSMVaz7xLZ5qoRuyMPCsBDD8nzYvShvWurkYACvczq5PAbhc6MsA",
  "key13": "2JciZBDz4kKri6FQX5rXu2MTdYrz7XTHkSzxuFjkHhHSZTKdxJwTSX5gXYSqL9w5WHH1Rz2n4bcN1oMEiCueJdMF",
  "key14": "3N4aU7WPB5pCtq9HYmWqsheJ8RdHauLiXFYoPtEq8tqakUfSu6vmfPdn8GaXKMV1GHf9gSbXg1ZLmiz5AxY29QkS",
  "key15": "F7NUE7LSRPzw2yC1W5J2Uib4Nd5qSu1hnzPSjw7JmprkK3HYvUZTZy9UFBc7kW9cvbvkPSpvqBQ8mtBQ9SHU5QD",
  "key16": "43rubzKipkXYGHzpNq95CfZadScnm1qQXeXbrwBJLRRnS8Qepdns7TaCuNzWXN6UtMVgWWRMMi4AYuUXfhVd2gDY",
  "key17": "2m5Hs1Q4CPCbpRQ2rjWSWR9V4ga2Ak6DpF5tpBj7B5zG1AsKwjhSL4w8uh5UU1cNcpSxfoLMcmKtESd8vLaS11SU",
  "key18": "4Yf4tftcwhUc1i1BQsH2qYRLFrdhJupjqCnyzVoyxSPQ1XuspYun7LpPMGc5guqHh9XCC3QPQFKGdzeKLRVNWat1",
  "key19": "5aV1eRhBMfHw99eofeGzC66Pt9Bo4fPvGgEhq4WmnVi5Y8SQ3hcJFBnTKuun85X8V1XMyWuDsNdofQDDmiMu2fjp",
  "key20": "5s3ynse5WbMBBaNyJiHK9aXpUDNrSvgtcsRdDzDGBz4Hk6WyXxovRqf5WDYfLGx1Ba4u7gfPKDhGwcme9P5xLgtg",
  "key21": "3mFgfFsxE52BrPYiPCzDsVLQjdMukSHGR616np9GQb12khryEwknbX1mXS5TtZzLnZuS2EKqfJj3NgpmYtRzFEBG",
  "key22": "4iZCCdfMym8J226go1bZYCCZ98gstbSxj3EGtFm85G5HR26aWAxVfdBM9M4shT35MfSwCJuWnUauiDFS74UHhENu",
  "key23": "4fKYVdxptKT6aKqTykAPsNJkUZeCMpK6TVs5P3eogui6Kntx2HjJHrgJE2h5bQhvgR1mz1hHXoeK8nfE8SBa6pmh",
  "key24": "5aSwke6CcQdrLoHPmE5XJyyPC3xN2HvXDdj4cimnocf1Q8PbhruHKB3NCce7EmENkTcrgAuq8zguwuW46kTTnhcR",
  "key25": "4kMz3ibFpXCAgPuwSPFbWSoRSzsAZhmDQf4nAdSZQVR8oZDJNQPES1w4y5Sw5kBiNRB3N4yXiFtyWDfG11gxJR9V",
  "key26": "5pSTYSMpbdYgkzx7cp7x5xxXAoW7agX3dd33MmjQt4Kmgaqx38YZmNggv4n9PRVKm1jJqSVk712Cs8RzhPuGACay",
  "key27": "4VNxh52ojJxmoEUFfDyCzSw8zfLfyN5YJA9DxArCz5LYtxuA3cUyqPCn6oRKnGcAzWCwMviLzQwU4gSRwRfbvew",
  "key28": "4DLTTLcd9wes2vSZWjYEPG4CDjuxefeh3ji4D88o2MsueT25aucQH1p8zMffNBWbhrnv3w1EwR1oMzgZqRRVaz9s",
  "key29": "3fcZ2WJzENSznSk62uuJUUP2bjYzBmBtBbSsX36tcK3UZvCnEo39XRLbUMJJwRppiEtSCY5wQhnKaDb61ch45Zoy",
  "key30": "XVsDda7mycNJp4mvqBnQ3QFuG5wGutANFdUULJeg1hALxUDWi3kGFJoRP66yYr5aF18fFgrx6NuBWo1fp1LgpnB",
  "key31": "3KMyuaDvGGMRe2VGqHxeZR1bPd2eZRmwEZrnJwdywH3oVHHnLE9gd5YQh2fgiNEX8RPcvWVCYWnukkFXRGfYmEjE",
  "key32": "5QEHcZFhTcUhRNPghwPhBR1oAda6i3x6gGNpER6AGjFGxhmZaT7uzUgR7nMzjok6A2rn9dpYsBSEhBDw3kX1AUfQ",
  "key33": "3yHmS9rBRYNMo24vndhWzbrsNEMqssavTFAVx5nGbE81a7TbDe2yC9ZkAabLCfpQGXTA9VSgQYmrhpdv1R7nFDew",
  "key34": "5vFyPTfYQhxBgiYHNkGHGXsReCivHDcSQvMX3BuduFFyPf6Nuq2Cfdn3UQZP9iaRxiWCdovusi7domEvXP9Gd3Pc",
  "key35": "5zA9CwozTeuT4i9Brqf29REJGRp5Y2ouRMRafmtyj1baxWLw7VPbzvvky8fPhw2EfFFEorb1KYjJ5dsSDkGg8kr7",
  "key36": "4aY6hCoAB8JWmiwvvAWrSGPMMyPeKfnYwrUm5WnACMQbC75FiKBPKNLmCKinp2HmEjX897wfhN4MD91qTiFRFTi8",
  "key37": "3S1Uwnv3jWhh1BinhgadYr77TVMPRSKdxFpojAf7kqMfypWi9Z2PRKq9oHzbm6F1RzQnvcTdDwVMBJ5APETuXdje"
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
