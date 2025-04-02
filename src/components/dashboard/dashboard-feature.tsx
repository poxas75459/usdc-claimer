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
    "2R9s2eaBojDknymUnKvCKoYuTVE1vAQ2myZWTXcmDQybBYnHMehgmTVKEiq4kkux1DRMVRZng9zZhLKG4YzUwei"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61WmcNKAYvJk4vSfAtXNuPDEbR1zBJp681E6PFqFWpzzFcQMRPM7gRXVxzrYaydD4by7Ysbxo2PBGoB6nt8nwvdP",
  "key1": "5VQUf79jCps2UhbA614SU15QMSuNfUtRr1wJEA1aNVx9mcmymoFpZpfynKDQBrtxffWG4P6fCxxCGQr3P7jLuyKr",
  "key2": "3YnuXSnP69A1qyzpwY4cNDYiFriB97gNgrBzMnhwxEvhyHvwkVd1eAe78cbUbQYAg3qEkYPXfyPxiUaoyAQcdmQZ",
  "key3": "jKfrQSuyJsjF74CsKob7dbZiTLad7DKadL7R9uWE6SdpBCVQuqtdEbYqXRCjF84kYdjjUdbsRMmEpLmLHKREmfe",
  "key4": "5N1jMhtvg68YVuYMVVZvRw4T5hDP9jpkLL7YYDpMPAyaabbTC44RkKECrc8FEvye6cH2a9YBXcrzXyECrBhxS2bK",
  "key5": "2NgymCRz4pgPN4wHYxQU4bn87HwVZY2jfjR5Lqu5JNmz54wgLUJhdcJQBPYj9QbUsHZBAS7BGYFpoSbmoSVn4LUQ",
  "key6": "2pGrKoPwvDFdd1wg5zEztn8njJPYoMZFxPG1MXeE8vXvcSAEFT36gXV2Z8k3H8mSRroGWQ1FKN7FCk71Zyda9dau",
  "key7": "5vC2CFvph8PYRFGKA8PCH5ppswMe5DUspFeEsA8B4bAxCiYACsvL44koDk1GWpwL23Y2A5JC9xbvByFv1byraNsq",
  "key8": "2jMkyysieDTNoEH9MmsDsWEKMD6228TZBmeWAKPdvqaeAHvQcBU7b3Y83mBWVwduLs3FXmJzYqGxy4f5SejM6C7G",
  "key9": "42cDWD3rHxE4UUUq3RhrheE1jra2J6zuoDkzKkw6JZ5ZZqa6EbaFeJi6MWVcgHU5GW4PX65dZe6epM39k4YSto1Z",
  "key10": "2x5P4JggcRRJPE4yF2mbZZqjchVkcqF25z8aYrsG2PF5qVRHYGajrx3dX8zpMQAAXrvVaJcBTvNirjRMmhGnWWQr",
  "key11": "DXDUUimEBhVV6UphkG5BDKMejofMxVMdqExw7JpQKuMb7AYPpTsjBDVYiJUjdYyXax7SsASZyTPJLnFN9T8mqwU",
  "key12": "2rePWeer431icV3V7Esn96kdtCzpeTHpbMHCZ34Vte7fojqF58nHBC9s723ihiDaSSdghX8mYy93gRVWNzKTLb3P",
  "key13": "5zRjMyqn6c5UT23BbSSB15z55mjbLpG8ST8KuydNjhkeWMoCvdxYB2kNn9JjKAWY2khoYLqVeYjP2VbgqvoXcpg1",
  "key14": "5u7tDNmVTmyaDZS7tXYfQ5gNtxVcHGo7E1rfg8QAPS2un75jaCpTPpK4NFohyGRYtQrcd9rek16QTY3y2mftBkge",
  "key15": "48pqPmrb7i8xW8pUa4WRoUBSedSg59AMQRaSskVVgawRg4u4QGEVZ6H4FhJxQbrEn7LCpwJkzeh3o8mpd2BUTytr",
  "key16": "2ffZ58YXUrs6HsyhUiXYrpiJpp4hgv7mnQjFyeiN6GdxFX4RXJAfVmad4zqfj4A5QUitQgTPxsSeq2GaBMmbPKiR",
  "key17": "2mHijVJWzTnkV7oowUJjnttJeQ3zBiCMLgEDCkL3HE4yD9sxto8DNp7wTKDzZReukEeDRcmM5iJ5rfrkQmQJYGFo",
  "key18": "52ybdT8DftWqGW7LUcpZg268hRhaxagaihHswXJHP7VBBsuxMvjwe9fpTCV1UTmqmppVKkf2gTubZ85cuoZyiFuU",
  "key19": "4agV8vazkncRvFKM439mN3pyjFpnDqXQc8jAgFd3YyqnE798Yy1PHDSovEeQTfRpjco1PHCQpvz1xG7k5s22up41",
  "key20": "4zhaPJvGHQ5Q79jZv3DUfxUhrnnXbpEHCNaoeRxUW4hAeLZoHfbFnaoHE2z8YcEmFcNtHZ2WstDFyk3U3KFXvR5Z",
  "key21": "25r67QboUiM8E6F4xVqbprNMiyjoZQpF4xU12Jkg3PictjbdvGUZQn7RNy6v3NpVWzhoRMK1ur644bWn28Wp4sHK",
  "key22": "ciG42gj21JMMyj6T2uDPZQUcd6v4EWkXx85ENoBsg33KtjNtxuMWPwZL1NwdWVrWSYN4AE5r6uo729E4ELhGKv4",
  "key23": "gZfM5zzfqDJTZQAvBMJ4YtG35iiZvuWmaCFX4uvvCBHZqvaQak1aQS2dXRa3q1hFBLynfgnf9JRtoJqMSn7b1nL",
  "key24": "2XuiVAJjkj9GpzpXLCLtc5UfDU4L7KYyke6DUAQiRGexVFvd6QJKBWc3itDtrJPPsFvR8bYgqGQLGA4T7XubRPh9",
  "key25": "567BXMLkNCV73UQG2kNMERCWi7PeXUb1ZukiVmyLFMN4zvoY3QKmDGDsHSqKcBoKxYstjPRLxQei51dr6MmZseon",
  "key26": "2xNywVt4XyyPPxEdkywUtMhTQ7i69wcWh3uJBUwsJ1MC4rxGjpaLpzTpSPnFUZVu6gonYWT7KBf23LxNpZAXnUgJ",
  "key27": "5BN1dgQYwb3AfeCcP6esZsjY8EqyJD1jiWsfQNQJCEbo3LH8EZAqVJcYizT4asLyeyTi7RBNY5krguCDjKRpvV3v",
  "key28": "2s95jiUb4kwAPdgXcGs8x6FhmBqX8ZV8ZaSootR2pvkfUaJmgPNgbAHQ3C27heSnj1SQAUdQY3AGSFsSNcbsxm2G",
  "key29": "66itCyx9efL1UY1EBCi4vnSpWhpJVB3Vb7Ne4FkmqfKHBdttD7GBHGQ5Spn3PzH8CUWzinWs15ecxCJ353EX1azb",
  "key30": "ieZKPbPx9WK5FMHY8E79SzmurUi6GkAAiDSnkL8QgxTCqQaPYXDzch8FYTfaLf4FG72U25VX7obRUuPx6vUc93h",
  "key31": "4bP445tPgHETgkK3aa2yExeoNqkodPpzGgazzySHuepNTranTxccisX9AXjMaanSQ5LmmwVWQTYvaJyqZiinrr49",
  "key32": "65CeCdbgaoEEiPh83ETKoBiwZk5J2yhY7uSaMjd2Gpkid7ywYDkgK6MY5WGAHboe23jvMnVZA51pteU6zcVdDAmU",
  "key33": "QxB9jhKEJ7mGZGXQotZmSZvktRL5qv6o2gDihVqjXZ1UFihaLK53n8bGJMLvNWadDnYg2v1ufbUsLq3vHaS4GNG",
  "key34": "T7obFwMP1BqUiqh8tLq6cd3dnsQsQvMDaCjge53xfR34A1Xmw4Mv2iJNe3cnVFGfLB2S14Baoqu11PxZqZC2CEJ",
  "key35": "DSqLbCuEmdsAEccWRZsAJccy4NmKKGUmxDUjT1uTqQQDcU9ge7Ghy8VCEexSjGeZ6dZZUKdb7NgsL7FrBwxqpPF",
  "key36": "2Qj25zMmgJXuc26TbP3XyaUx827nAbFbNgTirRjc5zDZpyYJPeAWfp1Y9soxtjPLFQehN7G2GB6HwNmaX8pXmvry",
  "key37": "2gDJZEGU27Q3dNN5a2aVPqzyxzBvnRdDa2Hkht81d2gidV792v5MhSq5i8qHthvBeLwPrqKMAhpvMKAV47vgYmSa",
  "key38": "5xEpx4AyKoGnsAm3iB7ycDPDZqNJRwPtgyH4feQJkyN2p6rPuQ8BoMxmU3EKS5kbtTu7PTsu7FDzMZT5g3udH7bP"
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
