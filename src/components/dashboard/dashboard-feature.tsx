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
    "3XnVvuTYXtCLdb53RUmbcW3FNVubQA9QUazhkoZGXhcL1AtdAC2CXaY1dYvFjuaKA2NVGKc4tDmC9q8vJLUxsEfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gA9PPU7iGLXmDNMAPxjtdEsWpydu7oqwkxEUwrjF2uw2FTkyYDG7Gnqigs56p9GV4y42ftyiyfi5JHLAK9JTDwK",
  "key1": "51uqYDQ3AWzS2N5yfAhHhSCCmZa6nDiK3iPZiVJuAqXpeaKMnKA6TejqifHjiiCPHg1Grt7VP3fttGiAuXxTzLsm",
  "key2": "2V1dEHTaxn3pmrAXmt8CTx46GiStBFyHAXVT4ckEXdmFc3xPqTQae3rLZNzAyR6TsNHayUyKQxwbJYWnoDePJPe7",
  "key3": "3unYePXnrfR3RMdCUoCSnUm6rUGC3oZKh1mR9ozUNbe8JCQQkJQv9UgzV76n9HusGmkQKQkSDahNx8CrHutLfDie",
  "key4": "3UpvsxWSfToWxgCzCh8135amQ3uwtcqb8NFEnKhfVcw9gbbyLPdCKW2mYfJXV2xZVcHfEgsuNCZqm8Zr9HfmsqTE",
  "key5": "4xMnHzMHf71o6acpb5noQ9hyApBcLMNSNJ8oomNA3AT9xChEDDZACA4xxWwfw3ean9SMXWSzyGuqF7SRQpai9MGq",
  "key6": "2fXsA7uHgeknskN3ZnR95z7f1MqkMT1Q11XAey6ur7vTxrBnEVCPmmYD5kehgwdy4aVCBMaHmoYe1xfYK45k95GM",
  "key7": "5MDkKNbvvZiReaB8WHqyFbYREVwu3TXxChM5768MFrsUmAS9Pp5V1pvwn5gy4QZyuA9TWKmH7XJQ617sfzXAtRaj",
  "key8": "242XP7YZiwhCUKCDHNkUycgHRUHKaL6BKuDpMwkhiibkDLJYUB4Lfnk4NV8FcRnaX1tRz5TKUPA9rHjD83fNKfiT",
  "key9": "gEwRrfdNottfKdFzdKsTeWaczNQjAsKNq5JMMCsYoZtJpZN4pvaseKPPKLdqbuWzQMVtMN1p63CZEjC5SxaMses",
  "key10": "3xRdhCdTo9ye67qLbRNJ3naVPGq5uwcKQtoNmnAu3KaLAtrGAGxJVzgLMxnVDkiJbzGaNt54f9VUVrr1dCaUGBkG",
  "key11": "5jqPYr6JB5SvK8JHte4w1zAUQawQHakw5Uiytkgmqeimr5GRHyjB5EewL4yoTPDAsdVMVZz4uug1NDAm9g4kPqP6",
  "key12": "5M2qKuwqMAEvNdQEkQA99kbbRAhTSGzyhqXRgYwXZGZX329Gve7uSPkNkAXUJ1WJzLErDxdK3VVz2M6xubGhWBTR",
  "key13": "2x5NRzy5bph8t2mDXPETwaJaWQRLRfLuFGeL2H9Rddi7uw1yV6cDrMNeekTKo3rh8QBMd5k1xLWE1sTgU62aFoGX",
  "key14": "4TyxvrQAnxqddB7TpTLiMrmCAm3Jcyo8W8jErQwwdMYBcFbKaMghX2iEwvHFvq7NJWmUTbFpm9q8vkeeDXPWy6A8",
  "key15": "2Cnj1YdoSYbkuUKQu2DLhbJvrTyYBJPDLXTqk6kPQXdKQn94D7iRZMGrFBWMFAbu4PuzY7NLdga93vaFNofhDP4f",
  "key16": "2ivQme4SRQzVSebU7NENHetYPbWC1SQa3t6n3P12RsAjBGECM4cPc7MUWEHvaCmB9ohzhM1L69xUV8z6D7NrSoaZ",
  "key17": "4qysFXojC5EVZMy3UERTRbruP83jQHE3uH1j2Pwt4RLoYqHXhYCJo2jfJtGtXeEVw1mobHJrAoJrxygRLdJdFdFD",
  "key18": "4AqiG9gPYY32RzRFHGHSrMU4cwSw1zLEFvVBSKDJwwbA2UrSGe63uHfBmX7RW51ZnewEFPY18knhxodo5rCJpEdN",
  "key19": "3nd7aZ2f5bEqMBKavoWQFuHT25CBJrhtwDsKV7CpFL5kpn69776r6K9misz1t6nQmbfc8s7YnGhqrVLxEMfrXXKa",
  "key20": "4kuVHcj1a7je1GDYQFT2QSWP9StR6H8p27jLzXKAvNBzZu5hcr6uhRX49xjAotNKeCgQvNuKZEU5fsJSXxGfifV7",
  "key21": "2BejiJdtHLsyrB6J73QuYZpskFHMZLTVALqqHsRCp2XDZwQddD77qr1rovR5TPwpBVRo3SZ6zD1E1QJmpjARtGya",
  "key22": "3SD2AEdGrGkbuwszviZfJYC4NenCqdprixnSqN74q14DtUgz6Ft6SHTrfpLd1p9iEDj99wMm2sdxuRMwQRGNHEbV",
  "key23": "65iBTBPft1V9wQeMaQ22MjiQMvgGeR9rncvjFtDmRxzsqVtvx9Nw22Wo2RciTmRM8Yo7VH1XfEg5BK14aDPHbht7",
  "key24": "3vtQXQe1eU8SV2UMzmGiBsENATznRox1MC9Cz9PnuCs1k77Bu1gHNadDu28UuBbacbhGmZdr4sL5KrMAWaVJGErQ",
  "key25": "3TjQmcWsrX1PdZM323AZ8SNADkbkiXA7emiqd21jP2aUXC1iTnERRupceR5ioLK6U1LFHqJUJHNJSCyPpe8di7Si",
  "key26": "4sd2V9GzSKVivpF9BAiogf3mMpqoGEy9jBnLZujgjuhH4Qeby8MSEpnf37DQQfXAfoNuY566N6q1um4S4CHvANFn",
  "key27": "43YPje5rasS9r4HnWB9GdF7UgGjxSJRPZtCzCPYXuy6k2cdJdDbB7LU7rYXypfvxvux69wnYRRpEnudk7iXtHKkh",
  "key28": "6298Yz3KybWnV1wZ7Dv7EPHAYU6f88s2BhjiECZVskTFbfBcuVpfpu3A7JUs4FSwszbfZ2rEZGMmB45DUoFz4mX7",
  "key29": "5Rie2zHmRczSLXEj4Qyqhis12aXdBGBzUmNDQaaaL6Gv8aVLjpmnX2N4MpDaho64qyK1ocDPWgwyCJ9KQsaHso9f",
  "key30": "4ZJgCGUQiWhTt6atgb2Cg4siSPkX4cvrRJBSSYJApzmxt8Bg3LU1JQa7YozYW9wgqJnsjw6dkeF8dg9fzyvCXHxz",
  "key31": "5kmKPiJvd2CwBnCBMk4xRx5XPM1J1qkG3eZw36usa3sfNEKD1XuhD55xgVTeFvkKwvnyvtfCcV9cJ81YcW73fzGw",
  "key32": "2U8eAG84oZuRsWA3sUAoBT5pivR9MLjkt38ZpeSdNeKiHmLPDy44pGicGYGk1wTpRiGdnGyZS2XJeyNkYQQbogdU",
  "key33": "3FuFJ4TU3DLkgK2ggCbYNBL4bKCkH6t8R7HHcFftMWMoSRE8Ueefe1cHkfj8roUX6q3sdFzxzsKZ56QzjXrRGzoj",
  "key34": "5nhtKr1FZzfsZ3cWabsU2h8WELh8JPMZP7DNWMb2Nmshc2umKEbTjGixihVJC9oMJZYmmWYGEDWne6gQy85TSzdN",
  "key35": "5yJDkxgtSh4rGJz3qbjaHQCS9eY4PJA64ervCp4uS4MzwEvtv5zpUmxsRubXd3EZk3qfy2H6duLCr1uu6XMN6AMK",
  "key36": "5DaUojonnxR7exggeyEgxxvze6JjyPM9pmEFofrDe4LPkSV2P7F7GXuTSD3mRm1K2abAjsB2VdadUh5tGmFeNonJ",
  "key37": "62QP6spCwfp8H8XH1c2AmmTsHtypgSNUQooMXRtGvMaMQHAqZ7rBcbQ88FKW7ubaXKBWkekBpsAqywRSZg5WJEv3",
  "key38": "jb6y6zid4FcZMFudoEveYPwT7HUU5p2gQKUdqgx8keRLhovGY6qpZYW8qZtdZRBnNgDbXfK5irqipJ19hRWZWge",
  "key39": "56pGSWiiYjEfJ3wCsB6cwDmT364ymonibQFH9CFzKU4ZJQh6L7yqrGcmYGp7iy3sFWtpTP1PqFU2qLUi98MQa5H6",
  "key40": "4m6vARAQ3vaGzyL5UqmH9zkXVwYzgzMy8MyzXSymG26eFh5Re1arggHwygKLwebmaqXJA71k915peeNsonNeeUP6",
  "key41": "43EeEsZBgGqa5f5As3Qk56EsM4RayNS2D9aM9UAZsogixWQGvPHjHxVsLQS97K4ysjRodxM5F5THX26PdvYeB8Nb",
  "key42": "4nroCmN5MRahfqLq3uyApvGRPRMbmpph6yArnt9HDaQxHZZ3sezHJNi298mkMHwJ388ocD6dJD4As52GXdoMdnDT",
  "key43": "zrjsS1Raza9xZjTonRqB4Ryovf1bx4JWwR5NqUWAqsCfM8LbwY2DbDgYdumEnntnLSXD5uaXt6rcX3WrjYNE8m4",
  "key44": "579oR8u81cGRUb1s4N3TcZUkJFeM9mr6LFLMRyekmb7vR1FuDdGTMCVoKiQmkoGC6k3tcR4pWydLtV8zkivKtWCq",
  "key45": "iMdV49kyEjEJaMw3bqQLUuoowtWQ6cBjonDNhGmvVxwXLEcJGsMFPpRxdWjfVQWwEipxbGQXHgLmZruVLU1PY9L",
  "key46": "2Ef9US4TYBrjXtT8yieWaB21hVeQPa7wQ8x8h4LMxjr9PkkkB2VsEsabHvsVMSNdy6PukgjrZ1sUbmi6K5riSogN",
  "key47": "5RfAPga9XMnuS6F8n2HrEathHUPxPw3u55HR74Ue4S37xKAnqhYTGG5ZsUob5Q4Mg3Em1VFKAXjvzscppXcrxvGA",
  "key48": "kCAedPzikWkXXeArz98dmDox5g6ZddSiDELa2FUAiSQBFFtpNb2KLMmyn27mYsANPcKir5kVtFEtpggp4Tc28Ym"
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
