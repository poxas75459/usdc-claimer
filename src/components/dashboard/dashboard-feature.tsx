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
    "2X3wenCYozo2PX6Qxk1T5821jyNooH93uZaVznCnu8d1ivBqFUvw3yJgBzyxE332nWDELVqjhxKxZrbL5JaavnEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LvV3Gav7EP6F3zME4zfAmMYXAjgL66yY7oRhi78HtASbMonx5Psi1AiNUDmqKtB7uBdNmGMku2dwsiVMHBpCntq",
  "key1": "LwU7Dd5JynfvJcEwz51SttPGnPmUu7Qf9xXhBH24nU2wn2L8shVUEFrQJDxPQq9mmQYVygXqiViRLEqg2mrx6sR",
  "key2": "37Gxh34YypoeYt7c6YY2KQPj8cjHZ9UDp8fm86fhV2ryjzd5JxduqengeYVeEf5CiYouU8efeth6RQnmnMKZsQS5",
  "key3": "41dBnUkD7enuwnV2LTxwj5ZPTE4H3qhJpVKUUMAWmCaVvtM3DvyFNKhT3fudLS6gN1qbEriveQtckThLrzfBJe1C",
  "key4": "4tTDUXGggun5W6RoAd7q4DhvhiuRf52dpAeTSrSMiPSoU2qq7UhFSgyrQeqbZDPAnL2HSuQsBz4eroiAYjM4bFqZ",
  "key5": "opdo7QhJFKSZyd18NxUjd4c2A68YEKUaKssByoLuVegw6ZPFHP5Nfw44AeKBaZ1QrAbxRc6nrgNdkZBX2H7HJWW",
  "key6": "4Z1uW25MgiJLbNz88mneTgCS8C9quGpPryjUJqJ9pvLpQk4Ln4JsBKuo8hmhwtDEEUyuFNuJ6xLj1rbg1Uom7NsS",
  "key7": "3SufzsNrXJoknzCREFhCMZzEUyMs3ubc7kG2vFcRsPd6RLufxVr6P5KraEkqzJb6ZYVY4vgf57rV1wt5gZzNFN2w",
  "key8": "2bxsKGpnwLjqmnQ9cZKKXsYTqnAsChC73pndHzDBKZ4L7qfm5crGcBKL9njcbRsBEHBRuvgUy337zbrJdvupk5Xm",
  "key9": "5R4azfYZsomsw4dunNmTq9boXVE1hUenEh2kNcVX9yRaAfzsLMEnZygzCV72vRAYvXLDLryzWPTe7Hy5bRFuJTgu",
  "key10": "2yuMr2cXcAK3iW5yio3oRptTmyFc4h11siGDorwvopqhQADhcvW84qWiBYW9nY3xG8m2RJh5cLq8GuoZiaC1i33N",
  "key11": "3XrpR6hCLbYvcekHw7FBtFQu9PeH24puaHnSfqukM3KLGGzpLLvz38TgapbN5EkXWSYtyRTK4eFEG8dSSfx5SXrf",
  "key12": "4EiMzAXqFN6gavuQyFWpNnXMg2Rteoco2GKJ5iUvjeXHtMmWfK6w7HiAAuC5f5aNTs3zeVNZFoHNhvj6JW6iocri",
  "key13": "3NKvFvJys2mQ3dsvkVqRf29szoMLDE9ij1cdnDBYZV5T8veXTXjhD9fLq7sjhWW4iZdHDtPfkq3NJYPBTxbAV1kL",
  "key14": "3kpoCJXXqSrdsEdvh5PnW1imakAHReA9xoGhtpmaFfoPtoxT5g935sMtqJkqFRy2Nix52DRMMCUimkAy5vu2yjoa",
  "key15": "63qT67PnKYVHouL7KUe4CBuqXSMPS3GQV6jgaAepRigVUZF6tQ7wQSqGB3vSQMDwEG8ZxqecGvMwiKUydNuSj5W4",
  "key16": "3qYdTQerbdNSnAkB4ySmuva6P9UWhzD4zPqxeUMWwDmkLhAFJRwbw8n2meS1Nmyit4HBY8TmLJdHTQWvwDVa14R6",
  "key17": "39QbtRRKEwej41xJkrgoJYV1KGTbc71KdppmwaE4w6MrcwJ6yxQeDTLwjiNL7GLTuhu5mrG2iagaR4x12szwi4U2",
  "key18": "3diukT7tamHFG9J3cHCrbA9MomZ41SwmzXGnRMGmzaU8LYZ1jiHJ5qamWUGcdmRHnA81NN6uaHupxUtBiVFNKPdX",
  "key19": "4D4Pje8MJCibGvyi7j7fkADRJ78ba8x39PKE1WsNB4g8F8m5UkLb2aCRjb4W4UbugwRuE212YntvKhsLdepMNiRq",
  "key20": "37yErqphW7bKKvYvhpc6VcAeqLhqKErx6iGYM7o9UVevLNXXu63FbJqhRfMuoPNs7KfjznFxdgxYEBD6s7LXXadQ",
  "key21": "3tQagBaHF27GXZgotjTtZpjBSKyeBFL9R299CQNCxgHP3WD67MK8rLikHaBqrvonJspScYXAGTT9buQEDBmRwFv3",
  "key22": "ZEGoxQSXCQjHWvxjsNjGcpxe8QW2pUkjHSpSBaSKQDVhgPo4JqqbVB2C5jSY7veEQHKbfvzFuC3xXY5S3VhaBJ4",
  "key23": "2SqUkVjYUyRKPDMboYYbSgDWpvEunTrP71v594vLfhhFQPL3mUhLpt1vpTNvuw8gRhCkhV1G74WQ8L7rSafScaEY",
  "key24": "DU2g9qmQGMLQuyejxHrerdcStthZbunieEuWV5LDR5d57TucCxegD4HN4XpV2XhS3qrS7ncfNti2C8f4tZghw9Y",
  "key25": "U1ThUq3Wdwmg8RVeUG82wQ1WdiFbqib9B2QhEA7CzsZQ4UGvrwt5aVGwsqBh8XWvtaAmueatswQUnyAZaFPkQUi",
  "key26": "5MNNoK4vxekVUFSqPm54FU816qNpqjsfYNFirTSUX4Pu8DXXgDFcSpfdWc9cMP7kbSKJq6A5GLBfG8q7WZTVcVTB",
  "key27": "2MYYvsT9Hd1kL9wd1zNeokzVzbgK66iS6ZV62DexdpMcXi1WsDM5ErWMRY7o37iVP8YRjTUwRXmSf8m9Dis44CoY",
  "key28": "2J18NLJ2YZBcATEecVnkRA6RdscmQVpREvkfVEebFCwPCuM6h9PZACtD6NbLk2uGtDGiBKzaPpG3zw2HdGoHBH6p",
  "key29": "2DXrheHvwHBgzV3CazvGZ9qaEfxEYGkJ5yqYRVVM1oEFafvrLPC4GRJc1YXLAJH4R47tRkiQu2XmTGPYMFiDzkEM",
  "key30": "5MqdA1ePMfZyTKsyQZcG2GREri8eSdko6CvumL3xd9synibBWRwJLfsSuUbwGSGX1qQkgWJsV8RYhgpPkDUytNLq",
  "key31": "2hBc1RhmmkpB9vs9EMEVdPMmfoPfy56PaHeeKzLRxu2xk15DPLcDqWGJEvUxGUc55Midgju7zcnVmNd21RAeANNi",
  "key32": "4RdBda3rVZ7XZFspC1nVLPVoCgy1VdBEzp2EAV1jhQoqtV5PiNYEgBQpn3bFd7ehGdpeQWqo2ZBCfteJ6j1Tv7Fs",
  "key33": "4BauYtsvyRfyLAxarTN4v5wPwuv8Jv5oTUuJeftn9DH7tuLyU2ER59vCkRDwEMFNmvqDDm2hjiJj8qiCqKg3UpJJ"
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
