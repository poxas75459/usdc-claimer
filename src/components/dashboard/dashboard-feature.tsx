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
    "4D81BBbamUSjiznwXkBcrT3oFRwNyMhm63NeoUY5M11jLT33UcHvfeMD3jYJS2kJo9rwgm6s6ihYfUqc7szaV42x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPec48Q3TPJxkTaEksPynyt6ForcPHo25vyYzoXYMWa5BaK4jnbVendLFeo7eQ2fXpaygDQTCwqruLWhNmWjbFp",
  "key1": "v8BeEVZrBZcRFGdK7XAMXEcs26h4WEEnVvoVMQsieVKbGfK4uJ7xiAUB182xqj8ot4JX6ScWr5Znvh3CBQFD1pV",
  "key2": "218BA85ZExxnuxdToakLfpmaspuWPtxsiw1r4oqjWSsSpqAT82YzYvQ2vsYjBmEhPB5R9yFFsDRFykCMp7u1i6Wn",
  "key3": "5dkRc7yWWKwQayvkLPwGXYzccZoTnWdK6pPDsbBQLCxpWUvehmzZatCULcnypP44BTFgDoeecXsR2A4YBA8Dq1Dz",
  "key4": "zHXSEW4hSFNZEJkscba4VzwmyXo3ESMHY4aGSZEekqRpQZz4Q4RNUsRfwiyaK2hPNvJUJjHWPrTLEUiV1XwuV6J",
  "key5": "3q4wMM5q6T7P4Gft5DkN4JUSTvgsDgW6Qq2dEsLHETFvyHL9wzx9X4EmJcmUhEqQs4TwoG7sT3u629EdBcHRNWvf",
  "key6": "2aprW9GVpLhYZtP5ir3wEt58GEyP7QoHQH6H1SMQuDUcZvFaRETz5D2cD3FiL6f6VHWhJjkM6mdBtJSjmBQDq1Lw",
  "key7": "3VcJ8QNEBbEr6QYxxgGZDsu6ZNU5m7CiBtk8r9T2sqN9YJRWTAqJAcjUSAJmjkxmRLpk1kyQvf7dPv42xELzQRv7",
  "key8": "4uuSTyyjU4s2Vb1FMADCniP8yh5uePzVnRthdmLeHYGMDoexBjb3EmTrpc84rzTH3DAeCEiVMMe34SxFYPgRDdx8",
  "key9": "288tAK7smpF1Ntk1QMWBeRdcexnfCHVPqVjK8dmybnbX53rSfcaSMR5BsxuFzoGkxBFQfjAwm9UxiZScPS1rdcJW",
  "key10": "2bAuZtikSGYeR8HMK1Foxfp9LD2CX99gMGgwPSzkPS1jmmggDHFPWKjwgh5zrcW9quCEiiW5PGL9XjGunUotYV4z",
  "key11": "4XidFyLhZoqJA4mGchmxDrBVCuXVye9KmRLgF72jqVVtDS8fQyB1yAbQyFBcMwSWG963N5hEPgV2wpP492q3oESg",
  "key12": "2ZFq8PXFzNhCE7WAK68AzjQQ1JgKkSZCtNkrHudPArXR18cnxkM9frPf9f5Rpwhcj6unpmLF1Mu3h4Ru1Sexixqv",
  "key13": "67SG9A9A2ZMAvo5sKPNceK8gH6BoQuhtYizegXTYJwTPLJw3hVViCSdFU35Yc764JUZ55srz2dSSJ43a2PMdLxXj",
  "key14": "4KG8CpPGgnb7LNPJ4MHCK4QcVuKAWBEswXrL1Vea9YoqqqvK7ieBiFAhHKXsCwPDqHFUBYpYrMsqdrAwFQQFJW7i",
  "key15": "2cxsmFbwBga9c8Skh6F1HyJFvSR1UY3Egs34DkeTQ3EFLewpndgwqXjiirKp8XqXo1YXDo4uVkfcD4zgi8Nd13v4",
  "key16": "4v73FzTFh227QYxRUQ9MwRK68vKXqJhjQLDgYRto8G3P2QuT65nu8sKB6EHuXPXHuRPxf7gHedbuLYvM1PUdksCi",
  "key17": "cLnmZDJQTXbjk73mMUDjW4wiUyFgcTvVcUeaotfAKsfkvHZUiqynonb4bbv1EzXy6MHsSsk1LYB8NpCdkgQP6Hd",
  "key18": "23e2BR1p3o5gUu1DpQAWAHQ6TptogbZVM8SSVnVL6vmL3idxH6jyhoW7fgNR5B19rHHDT7oHgNTyG6Cx9dMbo16B",
  "key19": "2zToYmv5Gp1Vs2AGCCiJSRvJ6D9V4AsanSjmReNg4CTxFNWwjVCbSsSvFdyhBtgqGjYKQpcoXvuhgQCjwnyodQrp",
  "key20": "FZoFxNPWZUJ9JJJ4MNFv1jchK23vPVX3HmtKV2KNbjgWM2W5wSFcFk8X1k3PQrhkKf35K5CxrWxujvRhEPseivk",
  "key21": "2erAamWLvbDUpzuE5q6bo2YGYovzRvJiejPSw8ibeq1XNTw6yiviHoKuN7Myma5YSpTHMVRct29UfMyHdxbeivGz",
  "key22": "3RGJ8xBKSJXwNe9rfErRnwvmbtbXcKCZ2FyMRWCEQDhw2gKnMFzQEk8jh4U5jUw2EoVsEYzaqoaLPgLAMw7PV5P2",
  "key23": "3W62UNNj5FtCirdMyNoJpibZXp6TKDtSUpHzAEeutPwbQp2LUgLtXMiDQaZp1Qd6oVZJWnstwhsHhU9ZAU1VqKJd",
  "key24": "6UZ67UQLve8TdnMs2QAVi9WVtAVn4MRyRYoH5qyLRc9FiWXhJfUJnBvrK3mXN6UeG5SKtyjGa33qQiFgeohLeRA",
  "key25": "5tQTZrc3GTqqUXHmg7jFXGMd2mSkCuYFdxnehLRrNwTaFtSyuHzdW29e6ozZmfGNWwxHb9np7Ji2FEBsGPqNExb6",
  "key26": "2a3X7v3qtiUo1EZvxUb8UMJAd3G3yL4aBGSFdcyYKy2VENYNgLSje6aY5msQbviWLxGrtt2msFiEMJZUpgWd7tPJ",
  "key27": "2te6Hd8mzb2UYVW2P2UGrz5wpu5Kiysyex1zwBdMt4WFLnUssDhRfuY6rRhHLvHxt1AAnFM7ZC8GDmG3ux16dyB6",
  "key28": "3C9NEjuvHif8NwYWcMPPpeL6yk3AeWjuHGD4Ag8pCNixUaNfsQ2U5H2PRp5r6Q2W9zHX876kqXpyUDKwevdTmJF3",
  "key29": "4sQVAjeMBZXnG9HtFpsezXPiRXn117cC36qBSianjcKKWBahEySCzEtKAKw5sb564s5SpwySRaGy9hvVeHguPxu9",
  "key30": "32VH7ebkQN7yGivZiWYv9bB4SwBYH1Mh96hbtvdv6B8UHDMShuuyJehR1mYVW43nVr8Nr6EyXpDqyQh87L3XhNga",
  "key31": "uSZZKndJq48KMxRbxoGWWE9zgXWjtBy7zoZ8e4bxzNw5TaRx8VCKKwwHbz6XiohQ8EYCsyUNx4bN7c1ij2W2wRh",
  "key32": "4TE3zCwaF81DBbNDRDNMBqUGE3WTpgG5GF6bMDDrP2Bjf3b9QsLgMqts36oqEVpek9bzpM2Mg2mgCvRJYTh6aT7b",
  "key33": "5F5gDfGg45wxydJzjZPswaV7brXeuuTi4ApnA1SMcCy4npUXafNHKvD2TomvVcUBa3bA9CvAmcJGneN5oDpoBg6P",
  "key34": "5sbHo3uS7SnpcNt7g4WJQgmYsbRpvNBTrRBFWJdYpj7t3pM7Rsg2jcPvZV6v37a2GGVLTKHM43aDs2ME7CUT3sBX",
  "key35": "2MQSg8UTFE1QUoi3mft355MzSRur11tM8Gm6pnCXsjbU7kjUtoJSGjPSh6Vpv3Y7z1bhnaX8gWoPncizqbf5Beuj"
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
