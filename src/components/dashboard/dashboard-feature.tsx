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
    "PCzPiksgCQRx7MEP4nJgAtCfnoCT4aYFXtnhdGsYFA55zNzs5G6AcbXS9jVt4VNficqPqdDwKoiue8NNe3zzvje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41jC81C5SLhifaPHZhETs1HNcEYQqGyvsPuV37UzACYqKoKm13yoywmdA4zhMFy2fPfPR8y8sbpR2a5aUVdppbXK",
  "key1": "4JgSuMtCzfHceNEnTTBmB2YX5sdZrwnz8C1HrWy4TGwzczMDZ7Rzaex3jpzkKQq26no5hmyxgEqBfngcNxC4mjt2",
  "key2": "4rJw8R9aPgAoWHWZ1e8KX7TWW5e31HVsc6Y4BW5FCLKcXm8SMybUsn7Hyo3RXVPoL7NPf7qXnB91szYNtDweyLqe",
  "key3": "3a6W7orT2c9GT52ZK3R9itf5c3JZCfEcdofLPjCpuCvpqNp2ZShKJN6LuxKfXeH9NzJy44cajP1HBh6y3aCZRjBe",
  "key4": "5edbeVX5KV5djXK93sozi21zbB4V46niYeP1eftBBkn1FyUTbLZTprRx9ExnUnfx8zGHudcwjQXgETGMQHje5xUw",
  "key5": "2thRE341qF3H3tDaurNgNVdPcPAncRGhcS1hkW5oDjQ63mDxhmryc86QAWj85TkdrdUJgh1Ey1W91gxy5Lc1nx2G",
  "key6": "CHUrNWc98PLid8jm2yvBLExrq5V1DDqwN6PsnSbKLRkLvMaoyEtA1n7NEq48B9RsxdALYmogE1MxAipcpGhSQkG",
  "key7": "35eUbk7CBM1gbjLSNga6KxhiaFJVUkngDEo9kJcD6LpMHGvGx6YU6EgQoNjBdHC9BmZsQHm5TuAjbWALG7sHAz7x",
  "key8": "9Hd28HBFFiCUPxCQ5Da6tEKSTn8NzWnZwR62UtLUWvcX14zRb7Ng3omhyDUCyMrLKmnNFMkTShFcBJ751SmEKkT",
  "key9": "5A1iQnZVCchGxJDEN7FqXXxUqLKgk2STAKrWhGP57sxVHgrx2tUjw8wdEV1wTScbvRSjrzBh82ASgp2bwwTreRvd",
  "key10": "CqdhcMyZyW2d8M7cHc3Enagu2k5DZ6d5xbM9Dby6QrvSUAEs3THEFQ3AxjfUa69Thw4YqLGLTQFypqPupRKSQtS",
  "key11": "3G9ezFac5GCAyChS6gxsYoWvvJNpjxQLKbYHczs39Eksyk9CzyqT85QyQnM93DGbfedzNGSxSNJxa4v24nC8ZNGa",
  "key12": "dbLfr7SiZ2UZSgSFo2AwaCZWMQkTpgV7Gkr2q7RVUty5bF7ibLJmR3WKyhu54gwcKj1R7upJUJAV65TnyG3nvVt",
  "key13": "4fmjjBpaXJ3ZmeiY9zL7CbNXSAxe2s58kz1se7UENogSQ7rSW7jGgSiLrr3dSbP1wYRAwfrpYfUDv9Qssad29qsX",
  "key14": "TXFZrQMqW2ZxfUM9N7exqcQ2dA4zZu4FSTioF2zDNZfWk4VHP2vxDqcJDfz3WetjmBSkjLKpBweXhMnmzNXhZj7",
  "key15": "MuAhg25ac3qC5y4fX35vk84NGWeUNfgZHVMKzjLFaahNEMjyks1cws4pabTLv1s3ucexyycG8AsS7on5er6Xyxj",
  "key16": "4WvN2isgPztFZtKCL1LNLxenpbQpnghaTjNHfUZNXFtBDrXsGHQDQKhC9RsnQnFuSYYvoGhn6v2WAttVJRRcG8Ts",
  "key17": "4Fq2gmAN4Ppjt8SyVZwgD2eZ66xrDq9BCtSXvWgomJhpKSrNgCnixvX6cQ8HUWnWYYnfLpZnKSKikf6988Cqc4TM",
  "key18": "3cQrnL1PYAhzzVuDoUcctSXGDQVqyJatZkpu9pS9dFTtMrPyCFsBFeMu7mPDNtupB6AhMjaWgov1DgWCCQJU1eWf",
  "key19": "5K68d6Yf2omBz4fPFAJhcd2GxKv1cbVN1Y6W6inCcNYdoMawAWo5SAASefLkaRcfMfPTH15Jj91PdE3PUWq1w4we",
  "key20": "4H6Jno5wSnvwE2fHc4p6b1rs7gRgJ4AypzHeDNTRnn7P7fE9rYsJyGhv6YBHJnewF4XF1zQpNM5V4o15Thu5YB14",
  "key21": "3jhccz1vdQebe5sYywmJ9bxyyWtWoYciaBd7ztvB3WXP46UXUjjEvyoXeVz5GyMFEiLQVZeGSohuvyCrugT6mdW9",
  "key22": "RAZMQKCo6nxSpFnCYeMpF5Az4mU3iEYJt2nd1tEzE244mjCa9Ac6LrFdB2U1dX1B7JiXACgSJCSJRPcnptDUZ1u",
  "key23": "3F2bG5heb1rLpgNDLPKyXEmcUD1SYsAPa8XzT42Wzf8irBKSGDPWppSB7nnZKNPhR8KpVe2GhNJjoc5VdCxHFzeb",
  "key24": "5MLUVa4CiWPbaae2YrmNxHdaVThYvRmPnLBv1NezaZh6uM6L3Gy2FmxW99XyVrk2ozMjhvNWQFUhrKqAXYnmYSAb",
  "key25": "7yKhzvoxE6GkWGRS7zZUoSr6sJkXDoNqSpLsPhEgfuqKS4p5Z8Jdc8B6ynXm8XeJmAv7pcyPQRrKJD13AzZ7cGt",
  "key26": "4jCHw4Xe3R9Kfptu7SCoGDiACRm8xBT9tAHZDrGiFDDCDmaYJpXKTDukQbfAc78PA1mZjHyBh2iXpSAERzXuXkVr",
  "key27": "4NnpRupnkdbBxfK8A2aH6b8BS6giH6kz5AEe3VetZnz35zEjvJrFYpHCFj4PXWmqYEHspskaejmWXpj1wfFYQQVr",
  "key28": "jZBC54K34HYHUesD5b9KPX2bhtadPDnUixvVvCFgp41MfoMa53F2y2Bz8HmkeEbqcw1uBoWNHrNg5zHZfdfpD63",
  "key29": "5UGfX18n9RDh1ug3fZRrvyGrJcvPMZyohg5USkYFLCiqpBLTP9YX9pSUC4pvygrmYycZTm4HeD3pC3xxHQKSbJYd",
  "key30": "5xWqUUMiKJh18C9m5vSy97Bxe7dtrhnHQFtPEf85T2ZpugDsLh5aBKbgWsoE5pzVX3FxyWGnTvUQL1cznji8fo5c",
  "key31": "5C1w7VFU2X4jtuXF2AxtZoxUDu77xKYqG5L8WfJRRDcSvRrwN3KAHiT383xe8XzD75uX1ivbFxz53E2k2DJLF5Ab",
  "key32": "3LYkDQk15Ftpvki4Q7dCQVaoDMF3ZXspoezRVCoFHF5FeoAZsBtZEjhfjvPiAVJ7m1tYpSbK2Ad7aGhmLx4TRLkt",
  "key33": "253ubNLHhBhYE8agkQccxCAxdSgjgUgodZMx8YGkr7UyThJBPkwkubKR5WRN7WSS51ruRhKgHYe9Gdqdq5ENNC7P",
  "key34": "2j48vptvyTE8CC6Pw4KLEzR65re7HQ8ddVH56P9PQvdMywsgywuit7eiuaXSjN4j53dkpMwW5cmFezTmTvrciKhH",
  "key35": "2FEpFoXLWwX1HJowHgGFUk4jqSpETsoKQszUnRAKtdZgiKYjBqJDLbUPW2A5TAMZ1awNm77rTfmprkkxNhWXzNTs",
  "key36": "5fb4GSQNcJbrnQo259duGXBQHcfhEEzvGxPjNPR2ax2hPGQ33S3caXtkYjhwCvpJzHRofFMw7BobKPhb1yaThjQ2",
  "key37": "3k3tfs7z4KQuvLezMEcTTFmWPXsGytZX84tD2qKMrjMZYn36ob4FUShtpf4Q6KzdjE7xb1yhWnN7YwsZo2cjF2yN",
  "key38": "2EFTYqHDQr9SRPt4buNFtVRtM17S32wZ8D8sQ8WJ2EVceKeoai6d2WBmKvAsCrpeuRwpzJJbx75SG6f8r8Di5U6G",
  "key39": "vCHBu7bwVWD94zc3wkoo5z8hsEh1pkh2WXAzXcArbJVtfiJ5DuqfKEMo8aCxQgQLLPvGqGM26bTiZB1tkSRforP",
  "key40": "2dsZjLPJUw1tcLkaqxzTusZ8MUaJYXMbJ7VSQYRodwN3qzhZwjivYPUTnUzNrJwMbGP9b3JE5GEfBdgL4QSBoet1",
  "key41": "2tMeKonpY7utdRUY5yFAwfWahM8MaWR8pgzEzGDwcThjBkrZU8tMNYQsjvsprKYp1QhSmUSZybks7KwX9t9m9VdF",
  "key42": "5nkUJp4Gzg5sirCous7svEXWgxybcTK3aepvC3zojXztTWaR5xFtcdTaRscGT547odtEPjRKbCnByM1jxcWNrsw1",
  "key43": "Wgz8L7Mvvxu6f2bviKZ24VeHNcrSeqmSeasGEbMSnSwQZzaaZ8vVhQPXdRiN2ubtWkfWSvzUMc6cfBqYkc3uid4",
  "key44": "zTKkkatjNPRcNwWArSXw6aTpk1BBKDqQ48q2rwNwG3Aq4EJNb7QamWLsK4Ut7wUxkdjQ8qU3k3k5cm7wv5eHrpz",
  "key45": "4JeLENTYisw2Hf7VqrC7V63b6Hkfjeo3mJbL281w53MUngUWeY5CFZDeGdm7WxXS6hfpeapoH27oQiVHmbKXEaWU",
  "key46": "3RGE3L574zV1C2UAjoiBDWL7pR54bwZxDPc3WWw4h3TXuvi71Ydp8s5WNsw51outVeLVGAaYDr7bZyiqzSMnf6nQ",
  "key47": "5LHqLcxZjx53ZbkjtEqBpCTZU5YtjHbdUjjmhAqpyJByTA9gjhxf3wz6Tm3yaYvVSAQArTGWX2mM3PPizgTR7Qau",
  "key48": "2esgrjM3w3BbA5TBbY55cZHP4LXJJR4EK9NZke7qTquS13otNWPBPKR9jB3YTGZDAbMNeAr3z7fxMWDZycCSAnVd"
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
