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
    "381YjePXQ3LiCuAjVtC3V1vmrYg8aCS2fgfWuk4sz5ithrcc2NdHtn72c6AwQaQkReo3ucxymRvNzyp6XTZqKG5j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Cgf1SrxAnrsnrV2iG1bbhopCLd9CoKj6RW5AU8VdrMykarCkUsdNX2evBabgbk1tuqh944BPuGz8ZZ3dE7ArQi",
  "key1": "2mkh2tHR3FJA1ZYAuByHWhdnsJJM1hZv2r9QH8jzitufSt5LyDASiXBden9miLYiLQtCczxbsjL5tzz3r5qpkMif",
  "key2": "UFdNsyGSLjPTY68AgD8JUupFr4i9Lr9nF6ibNEunwN9XfsTwxhq3ufVijG9W74djZqk7xu7NX3MERj16NYzA6n8",
  "key3": "2Sc73RkoVqjVZdUf4Kp2iJJk7FUSxZeCk7QtxJaC8EHQWGq8Euuati9a2Bkg1PfaxFouHucRtskjy9sb6sxogChZ",
  "key4": "3byUDBQBb8sDKMXhGZRsLQFmCxUKFrKcRyAST5b7bSwhUt9fT64FFzRjQBv9zPgU19bhv9QGzswzA8pGCmdUETkg",
  "key5": "iyegmMBBXdGqSJBsCMdSCS4qCWJT7J7f2vVggHJ5VU4juEjDDXRNgJoEdhoPQtaAX9FBNMT27A9Nywqy6NKSxpt",
  "key6": "5zbP93SPAfsDqaS9xbHXPYWt9fzzzAszhwAgEHgZ74zTwgtT7u1x4K7UCrYq729X2DZ4vqvSQw7PJKRaF7zxt4Yx",
  "key7": "5CU25AbppA9stT92fMaRBiE6XgU3V2xzpq2fEgcmJBEJxkssJ2qJL7s4r3b5ArSHnBoqQRL2ZB5nMnz6YBKaQSGS",
  "key8": "vUyMdssTJr6cPXf3U1hcLADFcBwwitym4hDKNG1Rfn2DjcNPGXho8UdgXB6xcVwTsHxyNaYRkwoQwhZvLDtaW4m",
  "key9": "qwV9pUdXkDJEfYgUcxh68j5N8JEyBaqr14UQFeJtf7ioiH2DicKHivxz63JJHiK8EEHTsCVgB5YJxQoAfN87BqT",
  "key10": "5Un9vxrTS8rtQRdvnGzoD8GzB5pWFXqY5AA3y25HbZvsWZbAq3C5UtAeAfvEB7gaYhwGsj9GrL6N2urBy6f7znM6",
  "key11": "AKzDfAoKJoxQ8FU1FCxRNHVkaF7vpsPnrosRjsSxBS8RUKHzmNhGoEVUFr1TYzQDESzkWCj4fqAAWRkD27UAVs6",
  "key12": "5i83qae5CtcPiNTXSLPYAB27pkDB5KkdXVj8Xeh5xPNRpooWkmJVtngFF4NcS1mzLnkpgR9mqnnJGLJ99UrRmChu",
  "key13": "2nbMs4CoxagPCz7VHwv1kAzrAyZe5A6AoZh3VbrriZCyBBxjexChoWYQ4k5JV12jY1pXYWUJZ9ur4ZC2atGqhNMj",
  "key14": "2DcGqyYPPrRvK3gtwkG6TzHicbBKVGoC9q4HrAhPtCW4ht3x7ZCcnm4AVBSWXGt3uFGXNjVieMtKLh5UjFsKQuF5",
  "key15": "66YghTXWy4smnNWQftLrtyrdDKn7dStz7XQMKuCo2Kvtx2t4Q7cz4kKkfpEztkpXfR1UhdVe1RYfTffMNj5VBYzL",
  "key16": "4qoBJe4WXYuDBtyefD24Wm8BbATN32xHQZ228Vgqq5orENXExTY7r1SDek3rFv6TWvHHworJQVTU5nivXCukmBa9",
  "key17": "5D8tchgTDaxdBJdNvLdQfxeYXR6T4VjJQSaAo5yUATU2jSRBN3wRWMsZ5zzTEbQog2iA1MVhahTVXnUeaMkBPx2g",
  "key18": "4nGURfhsBnTqvPVKFP991gNjz4fpptkrg9LD1t762ChM37vbhy4PCWsFr4cDGP5fJLc7bU6thdd8CRoiApckviZt",
  "key19": "5zVKRxqRxun6s6PncfJ7Vgeou3TVM9ir9RvnZNAHJGna6HYu5K3P9i9Bvdtj69jJsEJFvWz2ANkkdcHhetzsLy9Y",
  "key20": "wkrUW7MoUxLNMRSciAujMLF8ut1H4DQT8RYmS5jrgEprG725eE34KS5uZKRqheTfNkniLsehtXhDP3xGN425X4A",
  "key21": "59rQVao9D4vTJZmaj2UXEBkC7bbCRq747fhJ4EL4o6b4gV2u1USPsYDLq3teRtogjxzmnYQzYLuWRADo5qbU827J",
  "key22": "rAWbi7hu6oUDmYwscZmrGeYqKeccXscRXRqz4HE7CHihNXjQ99DcQzWwnS92BRrHvgjZx7LVyfD9GVqpH3bSXAw",
  "key23": "266A4uTDsZHhaeP8aeLqUgrHYf8Y9gCtCRoPWHPQ9hU1ypkHeNJfpbhvTY4Cz4VPJM5yBSVBEEAjo1JfaUsp9Ki4",
  "key24": "2MtVNJGtLu9chcqKcyPSmrqS51kJnNj4c9e7qyAWgwtzh6CVZCBeM2m9dDqMzwCtBG49SDhHiJWuhCRmzALgouxG",
  "key25": "28cK8RKYtdEzSY4Dj3VNDUAMhy4MtBWdoaw5DttdzAkBJhQAmAEvPLSsu16MsbTKGxPUXSLPYnTwfYWw32vSPyXh",
  "key26": "3ANsgUnbGiVe9rELMXPJmKtc1QtidyS41aXPt1CznuJtS3qQWxy56BRPBATkKCHRTo7fLWpY1qha4XMQyJSoeUKi",
  "key27": "59PSVfaA2iVyWedEMjZzAgh1v11PS3Qbp8Z9Xbbiy4qXzJ18yWuerskVtpSvgAsGqdsVaBzPaBQ9H8ihKPDkStFV",
  "key28": "5QALR9nnDWKda9oiqxXdaEvTN8wWueiRFDydd7vFpRohG1zaMeHjrFriKm9j8dw5B1xN18sqpLaDCavsCUMYcnGB",
  "key29": "3vXW6ZJs5udujmKSJJ96EcXhDxKucvCbMbyEYRmRXMneRwJ66JAd8CL6vY5kLaZz3voKYV5h8oXaf5JEb3bcteGx",
  "key30": "39aufufqmSZLSzz4mCBkvJzAoMqChvTwsA6ftadMPwsLyxJkWt7MdmJwDg31jdRk66G9CKJHQY4txDauGC8L8eYa",
  "key31": "3BLTfvC9jAWnECezBcLBYoVF4ncJXUvZfU8C5MZHWshbPqvVAF3raNxFtcyWn5vJLRDCjNtydTu4NuWsqrdcGjL7",
  "key32": "29EaiCBe7Gi53pjMy4W5AHzZC3447M7ZCnwKka5TNPZhYEW5NB5AEVmk6f6tpxEHLv9NGc9PjbQwk4ZJfEXLdny5",
  "key33": "Swo4qouN8DiZbjKsKHpfQSFLJvcDCTjiGgMCk4haYvPe5XqtwHFTjfkmABNHH2s384uDjGoQmTyTwZXjVrXy4wy",
  "key34": "5XSQZnogm1Y1TQJL8AzseasysLNJLNkQwZge21C6qaPkNLriRV4PKvSyxJdkQSAcQdyuEpEV1yti1q4eJFi6UeJZ",
  "key35": "4Lc6xy3KZRQU5LFP5JBVrGivicWNsTjUoxmJ62mnM8NixE4squ5Ph6m8qgq67hr2ebiUZ6msLMrPN5FTNSGK1yyY",
  "key36": "3gBX1Qe5tpnJJoBMSpd6yDBE7BetUeGrx3THii84fyvMqBYBZYUUUckH3AnSJt278j8pzWWs1wJZfWfp8ga1SvBG",
  "key37": "2H9QtzU4zwcVgSbSDKK1uAfHNfhoGcARinNyWhQxFR26b4nSxc2pDWpttAiQoWxgk1rH3Xiv2E1Mw6PbXF1yQ1iX",
  "key38": "2LKTCgGzq672WBu3yVFT9QNHNWRUzhofVPPk64GWmnsiVFm6YZLdySdyf1KvKEfnVBmyccimiYPb67uUHQkiXEWj",
  "key39": "2wjaPNeNp6qhfBihQc3TDwiB89sdHuqmpVpQezBnuPdGbPjKNf3iNQDHm5ej2uN1R9XMGVfoQWdQXQL4is7jo3Fn",
  "key40": "3kZFkCaGc7scXuP63arEFXtKpGwPqT6rFcHg6Y2ujL9E6y6B6FowadghYSiCvv52edahWhEHYQdvQTzQnyu2Zu6S",
  "key41": "5SjV3nuvznexJtaBPRik69TuqJvGd8Lzq4Fgff2EM3L14iCWS7xfa9eDcz2LKs4Q6cWjR6TDrp2gkR2seMt1mynd",
  "key42": "urzAa33HPW9KhMSMD9GwKydEx6Hn7LPv7cy2zcQLYpFf4fgbyfvUrdyLzyAHq41cpe27DQSRhL8WCeRY2PbcdJy",
  "key43": "38Wf3U8EKjUf9vutifGKMEfDPJeZxQ194z5UTz2qRszvVxR2kp3N9KWsmyfJLaCQw22ZidAiBMsDHgH7j1wq5Zkc",
  "key44": "3txPyFJyQStxXMkJGACnmvsR15cgYwrocc7NxdWgWfZcTiNmLF2tKaJsCgtJnb5gfSmrLVuotEoV2j6EQGH6hBEd",
  "key45": "4bRxvfF4vfCZXDGqTtacqoubCfmy21X34YDrrxjLvkbjxRQWq8D1WUk4SxUJKom8qycg2yNmhKuzTp2tfiVvrCnR",
  "key46": "5nAJXLapcTGNNLnGEi9eDTHKKJXGhY4189Zsdn4hkfhv5B57QnrYZx2qkqosquJQATChucwsWpDisCPm5zkrh8zz",
  "key47": "5PnjfKavGNFKGUVQzUwRf2hEk77Dusr2LjKs5RxyBH9NCZddi7rVpxQiZNwyao7D7rKTHYCR8BqQ1iediPjKiv7i",
  "key48": "3XaNVbrSHenW3Z3u6N3yuoQedtxqMbNcugJmKTnUUJ63Hzezu3pDwgPxJC6ZauunZP8D2k7YeziJ9i7hzygwNoUd",
  "key49": "2MHDESiDzkTorQKGNQW7GJLwuFcdQG8iVGY6nbG5ZvafAoNa8bu7qLWBPWNswr3Wco15EF2TiTGm9Q7jhWMK3Z7X"
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
