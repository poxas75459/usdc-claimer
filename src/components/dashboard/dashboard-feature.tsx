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
    "3fbFUtenWRqMmTKH83oJ5Ymo19VCuXn3m4z6LaKsb1MJuxb3hv48RMsKnfohRWKy7orj14NEEhkmyDx6RcnMxSk8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eYweraAqfVE58AfmKDxDB5TE8zC9GKGF2rJoyLhVV9CEdgqEKDyaEGa2teuza6eJGMLhZ1WfrCaaZ4BFcn2mvLm",
  "key1": "49byw6sWEjirZgwuT8qie9sPeEnWAmv4aEbpL6yctFYNjfJYZA5fcAAjmoPqotarJYm6oG9ijoY4XXbD1r9RJRnm",
  "key2": "3YNfNcSUz9Ys7RKoigsWkfB7rEPf3iCKfdCJMbFV2n5EQAxykvvBU8N3Cxmt3PAmAz41TSaFCTvyVmAMpJJWdt24",
  "key3": "2sWmyVNzyBabeJJxtiLpXHTciWUgC2Qw6uc9f3SKsYHKVNngDFjrHqyFiionKoiKp3XBoENfuxxoQGBGokTt1pDc",
  "key4": "4HoEu6wLbAHhBpJr6nrfkWpGD39jAD53bCtURJntfiCmLKi9o9FeXW8sJMV5a7byoafHgiPLsG3SWTJivJue9MCF",
  "key5": "3a1MbuWHHEExCfMhsqaHxRRLm4LWSMJ35qbmFQjC7ugDHysDNqxSjtsh6Qp4RLMCLiP3hLJVFXMbWwE6jNdcdE6T",
  "key6": "2fY6Ud3se8epVe3XWeNVX85UzxrhtHX9BbFrgnxgDPcDpzdiYPjGJDP2ghwAfnMVgy9VUWNwwYtzYFCiTY91mUk3",
  "key7": "MfwYUDXUnkb2wZTcCFfR8Vjc1SCGUkkBmzcgpWbYadkuwSgngzHjaA3T816vcxwB3KNqjDXJ3itzRNZfdtu5Pf9",
  "key8": "5QzdsqQQaa9vQMeQdygMoFfNSqHyBZfpa5PkK1FEGaJ3mVpCyK9WdCber2M4mMD1C5kVM235FVSa1gXXVM4gWttV",
  "key9": "4Jq8j41rPbZ3a6XFuXRbMEAiS7835Mvcd4QVi4DW9NMJqmjboNhynAya8agg5yoZAKBUNicrwXY9CUJRtfPquXrW",
  "key10": "371S5BUmopbtToBpkLMJyZg6dbLeQHUw9xcbT7eTEcr99A67BPb9JU1Q1hfKABopZ5M6hMnPN4kgH68W1pAuYg73",
  "key11": "2mWDvaah6ngCrmmv7mkcNpB6XXouGfStVJvY5SWtk55B8TKmyUseiBLxdFtrmD85ym8YXKkqiYHGXhA91c78nBRD",
  "key12": "huwhamHq8EJKDWKvNuGBNkgevMDLcdiXzCL7tWuFAK29DMbLEGnxVzL6qugGMEJQZLa8JJpYcQJqKzHSGc3uvVC",
  "key13": "4r2Lnt5WQUc5QQxiihpfemv7685ahZSBBSgkRVCGjoC6Un18w6yH5jefVMhSTykeagboBHi2UHGTkRZafChHEfWY",
  "key14": "4HXN3g47aU5mYRt7eewtAX2FErbXAjB7VjaUTJLhKLNBoyCfVDs9ytAK6F8ZZnjyz7SQXurTpHN2MdGefiAEXRy6",
  "key15": "4FoXAE83aunpKtu9ZNnzwZzMcnDdKbJ3jpujoUfHh9yhhznwKZc5L1nhFH3Xaaxv5mSzNbHMNgYJ9C8dbab8PUmT",
  "key16": "2vzA6vdcE6ffL2qSgPyJfchUhN5qZF8cBXmM8nCRTkiqy2m93Gh6K72Y9Xnpr9M1zQMwFATUpLH4T5qisYBFy3qU",
  "key17": "469KiU7QHpqQeqUGbogAvVNQXmHDZEyVoa7UCqoLWxaMNSoRA8Rvg6rmtc6p3vnNi3vQxsWgpfeBfJHPES19gg2r",
  "key18": "57azKMS7maS7kZxWTj7NvMAKuhMDZ2qsr8zL4ciBB9L3wjDiZibbe9Tz5h4UNELwDHAP7hm9GrkMGFhm4enB9128",
  "key19": "2YTSg1k3z6EhqEtFLsD5iXaZJUtQRiY641LjPwvbV9WbXnF34hjukDXsAapwwCHaQJznFRi82ho1Xa2baHwQqudt",
  "key20": "2hjJpepL45L8DYW3GvWTcyYr73KCwHWphmcQBiMCaUWR73DySZJPoLSGFRFUhoAPwQc4LbWJ2YaeayxTShrt8nQa",
  "key21": "56wNJywWdeNNFKPZAbexAsi5W45b9J3MwEjHwGNmkVBW1B4ev6gyMsqENYFKtPbkLAwM1t48MK6XrvZt9vacxP1X",
  "key22": "ZMPK6F1ueWM8oaTuWh4vgJGTvSxZB4ES6g1fNsopcEWjduESpLPD5k9N1dA4c4pcLj5e17KAgoYRmhXFVH6TcD2",
  "key23": "5XWTLaLqbumjnUdKUrHyG3trNgG4ChsQMtfjgfLYFsAoDa77voX4HHx2jhk5QJXoTteUBm2eF1Gqz9g1dxp5K4qd",
  "key24": "51FHcT3inGKKWZzw51K9Zctic22UkdkC6vAkzWbNbfpzySuPqFAMx13Bx7NMDdUJxJUra66uxpenpEMMwGmVagNP",
  "key25": "RkSDxTFfQ5fJTHYP38qRRGJzRA6o2xhHsmghS5tJvcuiiF4Ac6wsZsSKUdc3w5ShUzdt5NVT2EojQb92k4RsQqw",
  "key26": "5fjLp2vXovCxhC3tY36zH6REx6gvDVyeqi9dzfwUqSQQkjN7cEUiK2BbMSBXRKRpNKmcRfoNcoCMA7yDpCDcDBtL",
  "key27": "38GNr7u4c6qaW1vxSnZHxdaFw8nYsxAPd9nXdpFuZjSSF8gKv77889J5hcm2s6E8WyhgNTSGHB3Eg7uJjhmmdtgt",
  "key28": "4p5sNdnXqmuDpC5p9kNMqm85cGLH9y7uYDTjJukeriQYgQF82KVCoy5MQwASA9ckbD35htz5PhDELmcv2kDA2AwE"
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
