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
    "4kXxpiyQpaXKqGSzjKdJsMT5RDumFi8Q1kGyR1W4QqNAvQg2b6wTbNoUWbXxxgjrbKeoyAzDLoYQihHyMqTUxJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "voEDpCuQwJPVcviPFPzEpPtJ5FoFajHPsQ9kZKKQeXWWgFfZJvmxsT3JGNWvw7hrUbHNj4m8kZX8DadtyCUCwyy",
  "key1": "s8rkVASxyMxVqwmo1tH5WsTZfYETXdQjVusrLJFZRmAMHfS1HzeJ1zyRFhpo2vbe7gKndnNNfuAPjS29Aftak5f",
  "key2": "5UommJKCwMtVC1nssav51gLAx3dBE4uo8m8fGE1TNxh4gGa56TumJpN51x5vc2aXqCSVWb3DDWoJxwp8nBDamxrF",
  "key3": "4gmf6i2cS7TK2BkrKsopWGEHjub5rJsCDHbvWDREZZQdMQ6Eu72WXWzYJvaXKykhta6nKSnysGcuDF7G2K3toPoQ",
  "key4": "5nr6jMksHX3qvQAQ8MV5LuXfMtg4osT2xQab2XTLM1oThv8gZHiK3pWcG2d5WbZRQKUo8SJtN5Se4pPqciGyJev5",
  "key5": "3s6UK635xSa7REBLHM2K9Wy3MHMYciZf7FJEKDqp4BCpcr5PLNJTRYWQkxHhVTPaq4KCTurS5pRCeJt3cRLyWNoF",
  "key6": "3DkGVqniwmj17gWwiAofbySg1S7sL43hfiE1xZaUbzTMysyS2crDJQReTTNADvqF4VdPjAqC9CkSAsb1wrzvzcC2",
  "key7": "swQVrwAQqfwXQAQNbg92fVsRH7kNQVsjawPGsW3fCqTNZRRNYF125EZkt7eKntPywxkrT3HoEjtKYCU1yZukAgV",
  "key8": "HAhiUHctedphEr3MncDrZamMdLLjrEnn2aFpUdgjVcC8gxNvpdt3HKCyRASnkCuzxn5kDj4Gqe6dyxCqAZ38Khg",
  "key9": "3hcTMFfbYCk9FNL7ckgm7LmTVhq6LTHcUSahobP1Mxb1PtiJRqS7VK612AjpY8LJBqMLiKJvqBby35Z6rHcuQrTz",
  "key10": "RmjqhpRb7aPkfxcAshgGfy4rMWY9zV8upcdeEEcHkXCq774iRbFzqvenXG6BYWM8YKJ9S6xYTCVPfCdiBv9YwUy",
  "key11": "49nyEjx1W43KpMkwjrR6zdoZS36zcJC6vRo45WK79kp4ViXZKUwJTEUWJQ65EGxetaFRL3WdoeY3WzEZfjAHMuuR",
  "key12": "2inGcExrzV3pqSLPNTTHdjV3fnTXJ6G6Xi6xCGnbPPPrHXJTKrKfhUuhEkk375CBAZCJ5UeuyETtkWwxXJ1fzRx1",
  "key13": "5dqkSvewLoHT3foWVSs4LVJgAGrvkszVJ7N6evC7NXeA1EGrMqa3QowqWzuv6KFx4jWGKWy1hC5Mv5MGiyQKCsyp",
  "key14": "3PTX1nfLPGpkAe1TkXPjHqwK3kJwYE8nt5aKFJx4jv8tEU1wyHKAFzeJtPH3uLQ8QrN4NqD6QwcztBa2tvPkxkcS",
  "key15": "sTMswvwhEvZvQ3YkBp14dkNXxKbuxW9SNFC4sH2W8xpdjvZKdy57Xkax79DHnpHrCBrEuPNx7mkmXPtKNLshuyP",
  "key16": "Xoe8yViW2GXT65n1sCof3CHuTtmi1nERmtV2uQ6xYE8uh2JGpzSUeMMeiX8DCbwnNLpVEhq569YW5CWweqzM8BM",
  "key17": "2yzUdHybBgDnaMw6sAoKenzmwxSVpWdacdGCcCg5bbjBnavWRKMp2pMbqC4rYAjNRSjnASqwusK52revupbY8J5d",
  "key18": "zTuk84sVJzPZhrvDBK7zqHojRtxwoF8UaqkgRZt169TVfcL9a3HBtcLTG1rj6LCJQ8pjeKZ1JbAQzMtJrgVdYA2",
  "key19": "3grs7QAK5rBM5yXGQKDsARm1YNPns8U8akTWnUuBcf42EA7i3G4Y1LbrmQidd69LoJyiJYhe2PZjxWiYD8D8naKp",
  "key20": "5Vbw8V6VoPuVy8WiaQE24jZWNWk2YNhDY2vqWNNQpmqE9EiXCfwm1g6txyGiAy55Yz9MrkwwpaYaw7SA4yR8kqe3",
  "key21": "2sdqu8fEuCWMn5tBo4bzxR1LrXKt5M126jfSb8AP5vm57sKLFCJsQ969StdoqNHD8m3yxSxAUhh3xMV3GZxvK1Lf",
  "key22": "3auAMpsWYVGnq3dEZJciCVUDznZa6QNLNyprGYUvLHCSP1KzRHE3bhqDFXJqEuR6wWJNgLxFsWVYocsgr7frHgzR",
  "key23": "5a3sRj1Yc1AqHLRpRj1RUYQmteKYskhASxPLJotMXTwNEBJEW6hKd63mBzi7rSgQPY4du3dkvUAq5q9o2JatHxSK",
  "key24": "4KCz9hyJPgS775JREBJbudPBEi2hKsrZYqbZzVp2DhCaAtTNHMHjhtNHT3G8cnxc8hKLGyFgjEmdQoPc6oxiVK5R",
  "key25": "44Rjv3kfyMo6d7MuynzgeqMuH9gccSCw7AHL8E5FVDCmjTTpjXcD8qFQjTeqdiFTNws6615kD7gtsJ4DLTDF7mqB",
  "key26": "4kZ6i4T2eWcqjrxK6xCw4rQCF5uyEk84KBkf8Som32AcfXea1hmPbZWfk4kwbDvwSiDegx4bSuYaL3AbaXpcnEq",
  "key27": "1hDEj6BdoCCFUP7m8YAnhQs2P35fduL3CTJEM9X6y1tooep6mbW6waHadgPGREX74AGEYMk3KoiD13XSjjgKrjL",
  "key28": "5nwkfCeUnQkEE7qWb2PcLLoYreecSJ3XppyaHFxkjSUdCoV3uFKrxyCYceDYipsjEWYXmEtHu7G94vu7ir22tsB9",
  "key29": "5dN4otQFCS3PsD6ErG5GHCgGLzuGWsCB7Mm6ZXkjMzubjqdxuLQZ6YQsW5QNJ5vqgUU5zNCzaz1BJ9ixSkwAqkGG",
  "key30": "PPrvSSzB7uqWLg2McNh3y4CRAJsjDAbTu2fTGVcRLcZGDqLyoi1ZgHtecpxt3Mdbn2fJyWuk4a5o5dvgLwy7sUu",
  "key31": "3DtXRob4Dg1E6Uo8GvNtJUw2fsdw7nBn5vgBHyB7MLE85xYJJCihMp9FygeLnamWTD5YUAP3cX8PsNLoUWpvhD64",
  "key32": "2wdgAAza2xfsQbkvBz4WUuTxFyjKh47No7UxoHkWeR8e68qRJuuvm1VGP3Kxq6d1CSGu1mRgyZxhJXYNLVYj4X8t",
  "key33": "2napLnUT7XL5hNhEFTEqPetEjrVdUaRWgA6wDhDEW3cLMfNE5qJhB54uyfFCW4ATKhBLqpnD8qj6JZepgyz1sQz",
  "key34": "3vMs5hzsSp66mo9GdTo4ViyK72eR1twk67xccSRrawzJHt6HhE837x5vVyjyhQ8fMYSs4w5YdqETsKBm343s9LRr",
  "key35": "4kRKjEWToKYMK9bjeUPAkKGhwWHcv4rTuhUB2uNTAn5bL9xEQiPqtecrgg34Amx2HUWbzq2fSCVBocyy43XjiqgN",
  "key36": "4V7hM7upGSSVHNCXZ8dgv7P3RZVNNzQhc9pwWAurBkWskiDuBMpwrNHPmST72mF5RHM1XuL2k8ZoT7WtupGAWkFQ",
  "key37": "44ARm95FDnBzoEK2jWHmDYVs1AVyAoZZrBEFRmbUihvFrkZh6jvV154utzYQDxwExFkdmgu5A4U6cNZMFQydW1pr",
  "key38": "2sEi8569FMzB9FZejxbHdzo9B8iwDPPWkQTAcrbRfP57N7xnz1B4rHzzJdjRvxorHUYcXJwNbJ5sbisqQzBmxQja",
  "key39": "3SdqKukDdnDH4rY5j2Ri7qURapJi1SABz47VRvpkfBR4L5onSuoZYWKVmskJPagvnsjwbE7AcCAvdu6GNqKr12o5"
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
