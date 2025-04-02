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
    "4uxH9hx3sYJkqrPdm2FGN6bWNtoJ3tgPkP2iQjWUPepR3rtQUhCd6pohm3kkVfj9Nf8bMBX5EVFtU6Jh8eJUAJy2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bM9GjSeKntmENNs6PhV2q7KDxRig2HyY5rXLLuz85iyJ4svZLBLFn9KqNwEosCDbg7gVtdh1bsEYL1awHNzF7gu",
  "key1": "2SVL4q4BpHK4DqBGrjvzt3JsBmsUwCkHicA1q7795cS6aXQ5npWrrf8sswWhCCvaSs69WSzM6Fei7c9cLF5Yo2vn",
  "key2": "2daDFRCmsgdYXQHtLMNzpe9mWLDh6Pv89CyGr6NkmKQrzNSu8hv5PoPbi3vw7QnWJ6J4qzu583197QnbcdZSZXJv",
  "key3": "3b2UMeAQuoef19xvCR2Z2QAG71otp5kMV2DijQN4fEk4rtkGpkxfZCAyTwZ1CntNejUVb2CfL8LMcHu1oZaTYDYL",
  "key4": "5eeSZBjw6mahqDQnvLJsUmtNPfQHheSvrVWrSg51drqyBoxn3oU4kuWTMa4uJE23hg254cAGq656uUcKzS24rme3",
  "key5": "4xiRnqRadQdSGR4B5AW73bQw45eBkfEwCzs7EH7JXMwthMNz9YsEYLvd5eVc4ZBE9xnWCy8MTJ56rtmAwgprABs7",
  "key6": "643hXhnRquqSLYVrLLFkwtU1HGSNcyUY5q6yZmVDNczunXA2Rxc92Trcu8vKZauDuAMQJhzmCtN2kwBgaGW74BeE",
  "key7": "1kjwzVX3tqWUpeVjtvybDUgBiYjNfNEnPCmHRpHGm7k3GdZETSLU6VTyeKcGoWbTiD4Yof3RgYEjBM2Fc648mrv",
  "key8": "3pfKN1ZvrbJuSi6e6vW3ZcZ8gKAMRAfYLzeFF9uELCdrmHRYAfY79wbUps1759rthNyZt9hQJiPDWnfZdXf81oLC",
  "key9": "5nSyNx4wmdx9nQdMHPKpd1fgjKLrFDwVXn1Kr3UfcDmcidnvHEtgokLZ9C5hLSqWpSbpeG4Los3JpAEPFn6sQcR5",
  "key10": "4YpjntPdivBCTQyQMmXCYm2RpdAdzzGgxETvNnHMhtktUGMCtWyck7yvYi25RFRHi73Kg4pEZrNid6tN5vpgn1jD",
  "key11": "4jK9Qi4AXH5yGwpzD2SyMpEsVM8sT4CbcPhk6Pa7CvkrX1VAqqSd62w2xjEVu2eiYHASRzHdYVAhbjrc12o6Aa8t",
  "key12": "5qPwvi6hynLZZyi1kXGfXtfufHrenNjaajaj1TUuwCsNDckc5XM5Q9RfYeNkW1ForKGv4TiLWUV3Cgb9LhDifBNF",
  "key13": "2bGELS5mVqRprJrHWKvQQsAAn6vtco8uPSJXpRhThoUJSx5ewHZbsk1zFvJUzSFtEJ28SeJ9pPKn9LKB9PLff9fU",
  "key14": "3GtcAtLye244XZBUHtwrTK8sV4Dm5b62aPUY4Uepma7LmKcEkJBxVJDKSF3AK1dV1MfPhiQkKBMYmjE6NeQm4dJ6",
  "key15": "21F9n4HBnK7ygtFM7R2QdRtt8dr9ks17rjh6CyTDHHfsGqFmSf5EP1NP5cWWuXoi1nBkBmDvKEFjerCPbC3Mm9LA",
  "key16": "3PbH8zGumxZtZr5DbyXYmreGNtLzS8dy99bp6HjmvmgHpyEsca2kBHzTArDkB92KzsbFttpzaSDGHTozzumYF3ii",
  "key17": "5dH9TLJxeFppnPf8Q1SeeryWLygphV36coJ9dUj8Tf62AGi1gmXpmjwHRUn61euEf9wzrT5bjhujusLhnZ65QMkG",
  "key18": "2GBbREAXe9iueJDkyU9z5MK9zTcSa3zv9htajkjAtAjjW5btQswsSX5T6bC7e59aNvUNM5DEmH9zfFqqsfXzZdvf",
  "key19": "PNtK4q1Fjnjy5wKatdJLJ3qrZFQCv9T4aQfwLsfEHHNdATPkcoHJTR3ghnNCqh51nPmty6wJ8eALzgKGEs2CsKv",
  "key20": "48ZkZ3Pfx2KbrsD71vbS6J2ESQLPJQkZzN8w8VC4UcNRZE1XhHHm5iYc8b8Gsfdq1RVJBHA737st6Hp2CgNYmegG",
  "key21": "4nQTBytExtTCkMMJPZzZZQZKwfEezN6unrDHB4D8TDesSi7NK16EksKLCGMVMtd5tBfx5Rw9vPn54cdrFtRw3rXb",
  "key22": "5ZoYhcDVjjgPKJfxNWDXtFZYF46RkpJSawwFv9DDnfAr5UPrNtXRNov5DDnfnAo8P5G2MT3DPbwByJdXjSALASqj",
  "key23": "2y1UpFNGX5wp8dgFpPaGe5c4yLiYDdYbY2DGiwNTyE3ahSRfxLRjGEas9JGkKXZz2ND2N8EVvtwj1EZgT1jGtaPU",
  "key24": "5BucKtXDyT58i2z5yJ95Uv21Pces5r8xZ7CHwbmdxUp4tjeiM9VneYBtNgWNAH4Q6akLzmeijUpqj623T6ncWLzF",
  "key25": "51hC2dChvdb1xP4xab9KnasXVNaQA29UnW1APFtd2hSpuqcQUr7KRR14hzGb6sUUCBLQfc4SacfmpEqVYsrBNEmn",
  "key26": "53hdsEUuVYauyT5V7StXsioJz396B7R4MTv6DtvxswgNUxtymssa1tYzYoK4QWw6dTWypgQ3JxQX9vPGqhN1amKM",
  "key27": "3kX61Nqy7EKiprRLusNVB45HUEU9fuh42mjy8CN2vDBbxXdC1UtUQcrFKn87rYVTRXSWMQMQE8Wuys2hrFKHs5pe",
  "key28": "51rYYZtzuhhdrUV4cQQTiRdgmp37iX75XuSsdAqBr5Fpia2XPC1TtHZ2YdzTGbU1dg4XWyzcgXg8pua448JkT7SZ",
  "key29": "2ZQsm8UcEgyBFkwT8Yyz4QG54fdNJtHkiTkeWrTzC6xwoTDVZgb1dGZwHdJQydc6fYywjX8ZEcpNmPdDk8DZjLsh",
  "key30": "2aM3ZpeHhZTbnpo3np6zvHJeVENHdr1fgSD8ZrqSRZsuV1hK2ahzPdF1d7RkJwwDExxSZURJ87hFrynCyv3yEpeS",
  "key31": "Hh2UCJZ6RryCqYL7WBub5CL47y24um3tFagQ26iY2aWvMNDmXTYyMZcAVMDXBiaJF3S4PkkPnbsDDw7Yvdjknmx",
  "key32": "kBDoJXZhF4n3y98f1MJMLm8i5wuWgxwem3zgrW3ss2fNXDbTvHr8YbunRrVVn7ueRN4mvE5pzbnBexeRPLuS6jo",
  "key33": "3LM3ixCYzrKLD4MfmTjXEZi3Q6XPrkARRsuYDcRFXxDXXfuQ5emkQm9NZn6YUnrJTrmx55xd6JEfo8BFCkw5rthW",
  "key34": "3XghpT8afT5fynzdpkm9hME22pSgVnJmM3aZaiK1cVeGq3oqHZWseH2sfpA4UZZDwsiSmoiKAR71nuBRDGegHc7A",
  "key35": "dB9Cqfa2dwoEMrbLGkjLBL3NnBWAkn3LMty4LYw9dJS9hBwBbXPcPJzEM2yoaFX6T3cgtvKFaFLPxcgb32MjC8Q",
  "key36": "39yQwmLymCD22DCuyQK9dkgaT55PwhbMpe8ugC1KLSMbiy7c4HDMjZ3MdEzLdJBL89Jx7mdNCbawvKEhKbSbeD9B",
  "key37": "2LXH55kMGhbAUz6vg2d3WtZa59z6CL9PRfpqNpSjzTYEfyLs47LziHr24MGcTp91gsc6i8hXTrnykfQHd5b9XHz6",
  "key38": "54439ujJSzQpkE7HCMYxng3WLsrkCjN59XasijtRJxeZvQFa5iec51Q85mrmgu5bE4Kt1pSkKThqwEXP3FdajFCL",
  "key39": "5YdSqYwQuzDc32oFqivepHXWmLn3yqMtwMouXJkyxdtpPQEcYXdLQrqJGdCyNcAbMZ3mf2b8CPi3cydqHjY5dN8B"
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
