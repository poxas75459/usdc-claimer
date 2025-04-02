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
    "5VRQ2jddDjzUq3kvEV1woKXh7ECQrzgnx6Y8v3w1NPSjTgnGWcBHkGKug4iNn9g6Z59NKGG25CZHXci4TCNdYqVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48HP8yEF5ofUn9jixX7TZnSHmTom6QZ35WgYdoTaUrSf999yNB6FbzyVkRmgn4RdXCVJnVdqmCXsYffMKMhuTMYW",
  "key1": "46TJaayRA12EcJLzuNFsGnuMN8TfumoxsDBLrcYu6jwuAZMUbNBTsToAT1trLoKJ5kF6MqQSbk6kpyrE4C5MPNtD",
  "key2": "2UtZiEJTM9DzJEgVqZhFKYSfnwkXo9a7qHCi6mEWd8obEijTWCSAxiwzPrYEJWhzodrm77oYVyxLYdTGXruQdSXw",
  "key3": "3uPkwQ846xFJCPvy6i6fvPYdyvwvex4LFyYzUREBQKWtfJrDAacu8xd7kpQKvkGXRqi78naXmBGTHzxxGKwjTdvL",
  "key4": "4D7wZo1ST7RCWrZAzyAmx6gbCQjvPhhrufFrjJ1a6fhsqYGBNVx6Hfmcn6uFFLRy1dNm5k8FKvhNkzJAk7oSV3MU",
  "key5": "MrnHsBPKML35WjMaQJjNGA2XVQsvfvoADAYXPU7DkPGgJqc52MBuwZ1dHeNMqHkdpGimf9X1Li7VCqST3ikkvSf",
  "key6": "xL8ksTdK8ExaywwG2ei48514tEr6bsRNXpERbssn5TiYzHsAVrY8SBongom4zUzsfLU1z98BXwXvkPq594r2vL6",
  "key7": "vr1bB3GedSmKZ2sAaL68HQvgGfYtpPhTuXcK917t14smK23roCcacpdKV6y9KQGrCScNP5EmpRFExy4qxBs3wAv",
  "key8": "4rUS9PMUcVbz8RtBqGh9Tt5mo7iuyDTxLSigs3zBUp29JfvCZpLtsevBNdiTPsJgeJ3YxGN2XueSGY38n5PctqYo",
  "key9": "4VZ3rT19sWfdsWPD3kB5CfbniwtMUTnfA57E4C94nc83ecXz7gC3JHoPXi2nN4Jw9QE163DZk7PPUAzMr53QwPUf",
  "key10": "31cLKkHYnDT5L7Fg932pVX1sEcA37NRCC5o4aWMo8YuSavVr8EHUbyRmcdXWeyVxsVxmiEBx6zDqNgVvVpJj4FQa",
  "key11": "249hqfdQfjdNM4hBSkfTrvJhHJocueo3K1MgcpYCt99521fLm96vT4pXhyzWo8NRw6ebrTAKMV6GDarXrbfBSxVT",
  "key12": "sHYvjPur5mbjtXEGEAtkjNNQ1u2UQZc4BsbMzsJ2TkEEewriF4heXzVTXdQ6dPNxCabwFNdNV2DzyBoufCp75or",
  "key13": "2H7armSYucZ2AWKSwVmhxdrt8PFDnY98dnhBK1wh3n9vCVW73Pc4y5chwQsCvHkNSYg12fWuZ9ShNJGneNjUYvSu",
  "key14": "4LFHxkB4hNZLWoakk7G12Kkgm9bBg2etTCx8XRQim1g4Ue8CqrGXZSSy2bsMcyxxgsWo4PHJPpJZTeDMyJrsrdbB",
  "key15": "56PXQUryTZVPwbirNswCgts7G3ApZjpmoNCN28FL7bDT662BXXdqWShxCtA5hBYCmZGqKERPLJ7sCokYYaXin4rz",
  "key16": "mqpvpbSbh3nhJ8wipbtkAaEa4hBFV2YnCBdYEM42qofrCMUqsgZapoASftUQ2JbKCHAr5hHNHQRL46NdTtJ2tsC",
  "key17": "26wbEMKbkJQrpvdY3FpaN6TY84Kdi6a3gRx3kSUFiHoeduTVLqYC2rh49TZEFRSX7gRm8e4U5Z7fqMqhUoUZBuq6",
  "key18": "3dqDL6ALRiYeZ28s75znc7EZCvqzkarWbRZVeTqgR42vDrzmyvp85YVpP37XeUAvChFc3hyAqay2uGYeM5LT5bva",
  "key19": "gjE1aDqRcN2K3jsJRjXWWTyMNZwrjSGDD1Hekf9Juji8PQ187oDswB6HLyKsowRSQ3KhYdbT4j8vJxZJGTLXJXL",
  "key20": "22QTFs7KhCioZuhKsGDee5bSt3vqM1kUyS5ZghXuXv24SZaPhmEBTzcJQGvCopRzh2DYgCLWJBJRD8xjseWBKpES",
  "key21": "2mZrPp9eoFbqPSLwELymF2rGgCeVv1FzFX8WYC5Ejk7y4JcQpNeaB1PbpJHBFBHojevymK3yfPbJauCrWk8EvfGj",
  "key22": "U7Wd1dMhXL8w7JMK5sQj6GFRZy8nz6j3ucy78TSTcBAJiwShqpbFh7djkWY5YJkDtKexBDk7wj2hQG2vtpefVHc",
  "key23": "4n2n6q1PqYXW6HNhrq78tbU4hgUGdGCoS2r8E1XRwoLSyUpqx923Bobs7AXfPtEYzcUEsVgC1MtySjnUX3idPKW7",
  "key24": "2QVA4ZYgYrp6ido3BCSrYy9voY4ehpXupdWvsjtNnymEC8o69KaLqKk9rFVxuJQM5XTgxBcgrTaPuKc3Vcrw84Ud",
  "key25": "5B8EdPV98L4ZRHW3r9AStdXmWZjqAv7cFEMvicpuBLYuV5LeYf39zxWkg9n2mxpeA6bPPGtscWRkoLeDKJkvqcU5",
  "key26": "9Vd2VwfgcBX4rSUpXtKa8nu2bBrntBrJCHrSzhzZrVgGtgd88eact4hqTDDEJeJBfNK42j6JF5nMfcGjMLJRHno"
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
