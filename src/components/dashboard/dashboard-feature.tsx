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
    "dsFwQP6eo1RbxvDHnFnC5awi8N9RrPcb2LdRCSjyNv8ZPyaGvmsoTcLDGG4wc3WrgiZ5CopkS2D8mNC6RB19xaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ce2jbh97YBYCJqzbDp6y5EHCD8wHM5VP2WrrerMtwWpxioVLCxtLMEJptxBerkam38bH1NsZ4eVNsJRE5FVZifH",
  "key1": "2rFCsFvmx6bEcHmBJniLSkRUARmve4pGVTVhd7kv795zw3VcZnaAURQobkuCpo84xmrKmFAJCK5PTScgrwd1V4HA",
  "key2": "3KvVzD5gv9yH6srmWeVMmuSbghm5x3N6W2QkAomkoQLHauo6ccJJR7EAt3rUKatjXoQAqXwsEJUsJVkGjJVPh97e",
  "key3": "vE5CrQyNirrCrfKhiJ5fo3dJYJ2LoeCQvdSAHWWRRxx1Bx1JxfaRKdcNCYpL7RWqe1vqZvHSsyGd5aPPKdzFtkC",
  "key4": "5P1wQoANzHhfzm9p5h1ZS3BbUxzDJdZs8cfqg7W9bUeJGtZvLVKhewQM7YzyFGwUHeaXtFD8jtmEh28jr8a2KZPm",
  "key5": "5NZwBbY5wGCPNzGAweJqNzDT2i4FbZb1PMQRMexrxe3ABRaCb65YdC6RTUrNEPDbfQieCtvc9S1QXKKmqniJwTik",
  "key6": "deaGa4FBxJSBsoYWhYKq9hb19VL2esbFezr6KfDZDbMv8e8SVyZazN2LhRRfsUzMWDSt9uBmNEAvt1d8mwXfn29",
  "key7": "wENCVoVG8SqTnWiYu3bZFUbzFMmRyhmG9Ct4Yq3iPboV2Gbxz757Ut7TLhsa93v7auAEYHgGafgqaVbsfvk3Vva",
  "key8": "5fgGAhL2xW4Pxu9xK258rB8pzTmGB7qMFvVoW4TLmNYtLdX7YohG1L1fg4vb18NkhTgPdJTZLTsFhwqp95jxP5zj",
  "key9": "2Sc7FSrutckSKMGxXDbTbbM5yPdxYrU5ic3KdxMDK5caGxtbB2u5JcJ3TWcrW3opr2b9sG191QHXGDATuZCimjPK",
  "key10": "4X2CiGDp7kTgFYfbu1mKPJg7x1TYtcUNKY5AaWBWw3C5mK6j7xoGZw2HB6ArFDh7mUghsPBBADscyugjAz3JTuLq",
  "key11": "2GeCsusPZ6A1frvWkLtPqNR1iBnze7xzeYTX5czGYYu5G2tpsYismhqwTDUHVPLQwM1ToRwqaR4Z9jWkdthrU1eD",
  "key12": "BAWvB4CmFsgdTpoVt9Kt6Lj7ZwK5cmyzJDrBJzmZNvP54ckhiACWtghs2114Q7X9xMyoJJxRaFHFELRYgvpgCWA",
  "key13": "2fwXcoogwwenecTf5sX4e37zTx2izNhQ3fM5jiJZSKqasLX6BrqH4fqpqrBp8qhgSLU6h8T9ju48xsUN5XWwdLLj",
  "key14": "muHxPf8x4xzPqMn7cnw47txGZCMADzR2EUzB45XQkD6DuMLCWjGuovcgJdvre4YRJq6DiHD3wnxmccJ2EMsdmCF",
  "key15": "2rr2RGqFBHQpmaX2a2E1ogZCbXvCL8CAiGdNKcQ7gLA1wMxfifs6wGesX9j2rX3C6exaG4i41UBYexTR6uvMvsLT",
  "key16": "2jAVUhMZMSbSzwifX9yzC9dBQoDRdHv9bsf8rDchvzVbB4gbUnZnzWuJ1HXQqHt61kx2ZyUQKcm6ZMFGCJwwysTX",
  "key17": "3GvCsnMmkdJseuRmjS4J42UCRS28o3EJDFnkmZDMainYCgCAGHsftxRpmTLivbFBtw3M4hKoA5UmGu1wiBE5GMbJ",
  "key18": "cJpQVaXFzx5pL5zEDdBRqEwkrJar1zwx8nvBk2QLGTjDMvvTWtSCJm4S8WgP2LzNh3yAhgLFxY2oze63joSzoLY",
  "key19": "42CHaHQhdAsSpLgJaT8udiZwW263c4dvVaS1euyVG4mQVu1MppmwWch7BDckwmrd2jL3HJR9uPyLRy8H2zjx6Ytd",
  "key20": "24Mty1diSVbPzZRSsZrVxBL88ZdiAoVtW8VKyjEF2cTUZmNiMDDpzrNGWf4wU2j4kb9EnAYZHRCfGCMunFeFUMGD",
  "key21": "5FfF54vGgsZkWi2sCZ9xFinGowBUrq5TofXUVyQ4GM94Pv799VaWLj9A2ayLxyg5A1TEnEKVMLbS7o1tudrRdHg3",
  "key22": "4EZPTjn29h7Q5F5djHBTx3gJocqTtsuJEwzbFej134bQxVDG4horZLJhiFGmNipupQ5dqvpcBMLCohoPWJgngK8G",
  "key23": "4uqMK5wfLCxLEvZkazbbEVtTrnLuV83C9TBy9qofrqhiMFcBRNMmcBm1fVE8H2yzb1uxFWoPN9nxZ4yPfdTXowJV",
  "key24": "5Hj2Ennh7D46HPBFuGVgWdqgGaAwviMtxekXtzGP3RCFeq2GybsgqRZNyZTtXdNkg1jVXoPPuDFHcbjomtUSyU74",
  "key25": "2QAKYdyFTHBmhukZbiMWMC3gWLpcYwgCSwUiELViLHzo2zh2FjiqME4HNCquPqeHT1v6uZ7nPY7WVSiN1hM4QGms",
  "key26": "5y8z6av2mcuwmCkLrBmqiVwB9zoZNgFRKDtL6enmRo7Pxtqq7HxV2nxfH5nPKq87gaY8HDeMminiy4v2muK4cE2d",
  "key27": "5XqyFZnJ5yHn3vAVpkRidbnKPE7UfL8hCHVYUEohSi2qWFnfitxwP6EaMcXm1RaPmkT8MYRm5Ab9uDyXz7UzAMDo",
  "key28": "5K5gPAKt1v88RuV2fAj9QRYjWZfn9HzVkCFYi4KxxajqFRpTfvdLGNrdhiaSZYok7uugrxd6iPPhqx9gwR3mqE94",
  "key29": "5mBx65UEHdRTm3Ehe2Tjn5wrqzBbYDmLhQBF1ZEJkseY2yQ9svWDmAte1jhfZvfFKxpVVFtYZGguQYPiLBefjVaS",
  "key30": "3gzWDi3E5XPabXv82xAHa9wxZG3jbtko4ezaBB9kunSt3y1RXc5JfKmxJEYKf7UkuyfETSqvqBQJhgiE39pyozv8",
  "key31": "5ccWR6DkyQsEeLzJiJBCRdidC9F41c45J1PsRWpV1DziAgiHnyJCndLzf48cM9nNzAYk5tAXFwaen7ZEiCQJ1x63",
  "key32": "492wNT1qWB3MDGDXZi5kUVvz7LySfzaJ2YXRX6KFjUgKXzrfD5etFiaTx1YQ1bVuQzJjBpZ4XBZqiFQnyFgbK32U",
  "key33": "2ZM2N8HRZppApWdguwYD6KvfGVVS6883gu3xDFEjxaWFyNNqiUBnubWwosxrRKQnDphiLZboELJLuzkgbSqDwoxz",
  "key34": "2fsGimyGouE5wzXW4V2AZKqc731suFM1AQ9YLdGPH7eSX1oBTwsGNJJQHfcJahR3KVT1t6o4YW6at9RNvQUzhNnY",
  "key35": "3cTptFmhsR44fMfmTRaxjtGxzr4GCxb7phqd637g4HoTyKtjRronnoezuke1qF39jVVt9SM4cBSwB9scYhdbscD6",
  "key36": "5uvrnMowTwAXKTnzbGz1LDN8xNHCdVeTmpSTVes2gjQY4Bat7fiTSM5LzmSZdvdp4XGqqcYC2vBGPmRroRhX2aGw",
  "key37": "3gGsnBKrykPzYgjnTpoB4YphVovtgS3gTR3ej5Msa3uXEUcDpGvc3C9CHXnofzUFMENVKU15fT7dVGvp4bBqet8h",
  "key38": "5JFtQwD2MzbSA5si9L6Ywzh5pzWzuQMchD6arJxEcTbRVQAWFBxtGesiVWwUTdy1D9JotGX5M9EZYSwY4dnfH2s5",
  "key39": "2e7T1uVBnUVGfGEw9Ygj6GZ4Bc3fmyscaNLdr5CAReFGriL5Fv6HrmEenP7f1wMEjW24DgSFuVxg8p76GEFuWwED",
  "key40": "5NqxnShPHa6jKniNqU38pQt22TxirE12jtBBTS31Qr1DWXVDcepW2CBpLuuM9YZXHUsLgE1jg8rGSWhLikYoadPN",
  "key41": "vDYtvLQYfbeDCzmGT12qtnGYdnF1X243sHnsvgVa2vQYkwZhFYZBtUhyrwkSTPe8C1HBjS1z5AxndJyqNTvgEqE",
  "key42": "okKtgi1Y8PUab99D1eUAoTxQ9qRby4WQQwpm1bK13S1riPPLSn9TY8FinJsDEmKuz59uw18S6zfZBJcQVftELg2",
  "key43": "4At6Q1aDoGjQeRfEcTRh38CwW3mnaWvXxaTnzhm33NbD4tc4zPxZq91ki6KYtJGnZDLjZU4vsd51Vb5T5mduYJqC",
  "key44": "3K3uZzYriTVUDDw9joov8LzZiznxJAAXTar1iHh2trJSrBJZPRyfs3byaNLpfY4vhvQvPbekFQggDDBYkdC8MPLc",
  "key45": "4xXKNhuWumTeaSFMEWm9p6zYdZb63JG58EuM1k6qbMb4PP2UcjE84968CS6qkeRG1d3RBEsZ5xMEywpqioFCV6M1",
  "key46": "4NwQV9aAzAgBwvL5VuPebVgPfm516URUdVmkmqyPNEVz2DAtEr3w8nM13fyp4f7E37n8esRfd7ajmXup9jdE7ypL"
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
