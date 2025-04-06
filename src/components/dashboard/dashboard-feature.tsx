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
    "2sngBnU8iyZSTAwT9hrRz3HSd4MA52A7auFPLy86854k2p1mWfosWA3GrCZKhJmNEhQjxMmeV7a4itbXJuT6JJu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uc6BQBesj4uCkoeLB4UcW3utAFWzeULC7y9LSYnsTmA7y4tebNx4Z2KZkJW4SD2MiJTDxye3U5PGoAuaDoraUCc",
  "key1": "4P5awmDjyEC6Nk7pAXhLxqw9UMnjo4mwqRBmL5mkGg6PgzR2UVCRbt9yYNcpPhPaqNXDMJ6f3DAUyomZ1eiXSi8D",
  "key2": "2vYejETYvqJ93LC9qg4Jtf3PxkhqBerv5YvjpGGvDFi6ecxwSKqoUJUXmXNeZZJy4vHQyMbdZCpvf1LP3MRbb9wr",
  "key3": "3j442PwJbgGwPekL35Qemm469VtTo9mdKvWoMVyFydJieHpQusNqpwcyQcKTjMLVLgWUkrtTXPbbL2eoix9ew5Ng",
  "key4": "5pdZ9DmGi3XtC23LbuyNv3b5gHG1xrU5415Y9ci32BbZgMZdg5fTzACP41DYR5NYyMEr9amRDU8F3o6bvPYQtRZ1",
  "key5": "3C1a1mB8P3jKsT7hhduavK4EzZ9GhSGqJ8TTxTdqpV8M3k5h53PAvK7dViHipAup2gG59ze1AphMzPsxjEU1e72Y",
  "key6": "3wwvF6ZFCHaDA5EAhWRNw7R6Na4HL9zBAbG9bNEm3GP23HVDHZ7B5EPDCdeLLxuEb9iroDs1NT8hqoKKBznJJvfy",
  "key7": "5v3DAhhSqrhfQxyRERHdL1qfaA4d3k7gWDw6uUtwupjPp8ERqW7R2acCGh3aofvS33pNsT84nnKtoCDgXxEL7yz",
  "key8": "28baPGjPTJonWYb3VLcHJ9jpfT8T6tY8FzF7x8h2Kjis4PWc6ZGmRd2NiQxruUHVXdbvnFAzwSiZq3R7JivbU7A2",
  "key9": "43LnvjakBAHdC1hzo2axgR3gXhcb2MLbMhi8o4D5f7gzqxuzQX1Daj5Vg7rgtpZc3U5qzUgsEdjGjs7tKAwXvaRG",
  "key10": "2gjyZAFwsU22giYjAGopLp566F9qqiaye3TV89uFcRkcPwnQiFVB5cBUi5SKVRvXxBHybHdemyQSDPVh5D1RM6rx",
  "key11": "1ZLhPT9dkNZwZ8ZKswAgk5Ds9uQT8eCKyNAbBvFsjHRdCdPVnLvDE1NS6W1E5BknE4tuT6fRvsAR5est63fVP8m",
  "key12": "ePGnUfJ2GYRnNsbDWHpE7seWgin7UBqF939ZSc5W2SLSFKJJ14B6BPEcpyPfHop9cNuRRs5uWXQS93o6EvTzbeu",
  "key13": "2QUkaDJEVc3as6vKrz2Q7KredoJ5XbdAZu8tFgaftXjBg1CsJ1JgjXEr745iQsL4p76Nzsenjy3hJp65UY9YzyYX",
  "key14": "3ph8HkX35vr1u6BpQfEnRjsMp3tht66Y6co4Ezm2e8Ne5LUVPyCSFPzWvxw6HCJMj9Hre7Fwc4KiieStQg3Wr7Fg",
  "key15": "3LYYB5qFewUkBp5KiQ9vw6xHHb9Pvi9W7R9SKNRFty5x6pZko6X4DaPb2cWVFxnFvT5mBkYXMyR5vnN5CPemqF9q",
  "key16": "2Z5uMVMfTfmULGfCDY1U5LAiKsD2TXrB5hamspRTv692P7Zqyx3huwVU1n6N2CKuJVBrQxPiTDRRFdx9XiNVDvDh",
  "key17": "vA23u2coqSssCtd6D29dia7wk9WrazcGEdmLoZ9gJP1KuhzMkszKWhGyUzhn5gwzCNm2vjntyzcXVLH9X4iomkx",
  "key18": "dyKYUrDxCW7N66e7tutRheWSeabRi84qyZQ4KD5Ge9i5Spkd7uBBmD5s6SGo5MJhtWhVfC9DkKxuRddaVVZiPPG",
  "key19": "5LZRuq7djBne7GmFhrD6tHn8meDCBb8gEwytkzekPnc382ZkzgjhNCQzr7N4nYfPTg7NZvuM7kiooAagYUHafUwQ",
  "key20": "4tRphyRppzC4QtBHKpN3e6MePcYaqZCr4WHSEL7zLBMPYqVkvYQKvfaxSkKfWKA6TaNhhpEcHr6HrDb8v67Uqp8y",
  "key21": "4VjspJb9FS8syLJvvP7h6DjFAzycwqfmy3mwqhMTqKa1ua5EKVfjyGk4nxA1iMezHfd2bBKDqpGssMBWCM4XW2Sb",
  "key22": "FFjosg5mDc9pn6D72NMfFT4RBJFzPyPTx86CjYSHoiAu7D9VcVCvx54sqKoZnjU4YewA5EVV57KqiQxHEzrWkwM",
  "key23": "2rzc9QKuQmdpKo9T2NUW8JvgC8AdqXPn2pz4eQEU73zysJ77e6DUt6AcyYQqe7ERoG5Y5wqZQ8hNd7N2Dsyn82or",
  "key24": "3wfmHTthCKx3dxWF5nJ3b1GSHW6QFnUiCb7MhB72hU34LqrdVhPfRjFz5EAYoiPjbeZzbJ6vcNZxuEJB3VLQfBVi",
  "key25": "SDCw7L7vCU3itddsXqouRkfyG5H4jgQNYQXjQou6tPmLzPK8cwN14GY58jNV6xipK9U4jcqiexes23cxsoSVnFr",
  "key26": "59HM943p4AcTp4GhR3EQ7w43Tn5hwHqBYBPo5ruu4yHZoCqGhL1wCfEfCHSzFj9QE7mEK5DLzvUvbSnzWnPMFLHG",
  "key27": "61XYt5LEE4xa1ANZdXRYMAZjYZtHdwvBgXUi5nipsyPV75JuJ2TDHUB7UzoY5yRTXewdV667xCNioJWM4hYNT2jm",
  "key28": "2Jyah22CC6QbmAybcQF4QbN5yrbhi5KT73ZEceFriSx2E5vfHu826TvfnMG5RstUa8kwH1UBR2uYWQgPmqgaXxB1",
  "key29": "R28eEhVyAthbuu2kQneEzBqNY6K1xruWvoGtGLvQfaYoEd8hkHJhQXYWWarxSHvab7aVWTT6hEZTRbwNcrS9zit",
  "key30": "2zuEEo3UCEE6g58PTqTC1Dq5v4TF33amoo2roCpnRJ75Q19Zr89a8gNWSi3cde294S28rRhn5bDMw2c83mYgWh3Z",
  "key31": "db9F5twRkkfAs2AFwE55U9N3jsxvsFvmAwMyo2m57e1qMhixAJMN7vLbLgxkfAj9aCgZjdcKKB11UHRUSn9wLCP",
  "key32": "3MnhonMw7FzsFfpVHvoXgvuVdQi1DXcuk1U8DMt6EawFrksTT7C9wnZzLhwtm4yJKH1pU2h4YkWtxU6UUP2S7ZUY",
  "key33": "24mMCpshfM5kQdfwBx67xcGZWrXK4fG9i4eERQz1CRcJtX5Ss9cH3ZcBdrcW1K3NKveoKsUe1ZCtZ9mY8zcpg58s",
  "key34": "Z45AhJ9iqj5Jj541EeoBUYBr3YpETmJyK9tmq9teRF7ucD1Q1drP6N8rt1VCVGkvopg2gFwD1TS6de8ax4YE5pw",
  "key35": "384qvpb5hnaVbhm7MH684P289PEooqpLWGAxtQGBVLFXUFeKmB6e7qzQz1ZkkAJdTkCmcdfRkJ7RKhrSSBCykjxd",
  "key36": "3beJEgVUfutBeMVKfNGxdm8kuWv2xgSTtG6KtVcxihyfP3gW1yFrv2vTjLZsYaaRABywsLLkh4JVnxabsg8au4XW",
  "key37": "2fx86oLxTMTbRLAu9WrKtNVr3F4wKUXBXFSDcqaRk2sNT6irgXoLse2BaFFYiT7G4rBpJeprYNvQgacPsGmy3ddf",
  "key38": "3QfHuSB8KfPsfAMLybV52ES3ECaHCcYuuJipLSU3NjVTFtcQACWnPAFTdWMHKhYhGwmsNepKh6HkY1ruoYznAdXg",
  "key39": "2HH8DwFVFEzTTbtH34DXdgZhgo4RwSM3uWSY3agqhMBgSSLJWu1HG8N8wvGiYnqFXoJu4BczX3hK4knv4SZ7ZiGV",
  "key40": "3WQtbPfejnTCPjqSiznfSMZPXRFc6H5WFNwuqE4GmJd9hQY63XU6mdZkJbnNYVuaNQSVv7vprtcLHmgii4oSHQd9",
  "key41": "66bpn583oyCQGR6PGLUTy1sigjxs1rE1WAphXyhRfj26jNgR8hpi6ybDmccpbWAF61tabhD4zhRm2y1KtrVc3pVY",
  "key42": "5D6JvTVAmDYVvMYjrzfdmX7C2afNKNxhiGyG4AMSBe2kPbpWCvhhfEjD8oDSvSt6CJgdjAQZ1Tf8CVunnHRKjKGT",
  "key43": "22XhQca9TtTH4Rya3X6N3kekPx9j6nxaRkoCiWPkDNkdfwPc9hAaqvonYRBnitWk4ni3A2p9TugjveBXDtQ93HuJ",
  "key44": "2njrcBf8gLAmmDHLfZLfCDchfKvQMvxC4VAkX9TxX1Kad8BR4gWtiNSdqE1zmWkJGQircfTFoyz46AWsMBBUYJxU",
  "key45": "5mBjCy6kKQhLkirwVxsqNwSxkRtB4FhJchboVVCSniCCnXwrWcVTMhi8YGeTpBiXSdcEAsppzK3oxqyZ422LmmSd",
  "key46": "2GH4VTazH6kKtThsZ3e9muJek6mtT3unU5VtE1em7VzihGEQDPuop1euv1k4vEJFaNj8ZJh2h4esVQ1LWv8yQstR",
  "key47": "5T48vdg7DQtLGvV8qcH4moT1PUwRMSWtyKURYoPdzd6N3sdUSbefH3dYhp8XASE59WdvZgCEkiSNSe2H8pyw5sQz",
  "key48": "2xmyBPArT8HaEfPWjDTfHiC6qnnawNwzDjZcMTsWpq96HN4CYhomnK9xL5SFeUAy2m7LZGwx1cye3fdhp5ocPWhi",
  "key49": "5p5NX3JJQFGc666tt4kas9ZxkxEjmsxsp4gykzvU6Z4fdCmbXfu2HfUdVUthBvCk1uUw5YXub2jVCoFJYsovipxY"
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
