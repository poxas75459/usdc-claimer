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
    "49EMw6ocqufwUUquhSwXSzQJpTE7nkweYhFB5ZC7oFpfNUoYMF7MxEj7JPpRFTNZSgwaFEc1k1t9LZNjRb7xs8kC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ENvjqfQ57Ng9wTw46BdBeS7o4N9JRbEgn3KLm2p7McmVzLuswVwKEBGFcc3jy4mohCdWgqJcYVsCUvcafGxxj5R",
  "key1": "4Kmqg3dgXCXQ2WVFXFY7Mv3BHbYfW9bAGniTYKoY9VBPFfwACyH1Rz2yUF3kYZxSPK6L4uw8fri7718eT57WQpgq",
  "key2": "VYqum2bMY9Xcu3ZfZYtg3fFGNi12Kw1dgSAgXteuZMTsmJNCuDHvsJn31TriVs84njMCygicDRnSNFb8LPeTMZp",
  "key3": "2pkd9XxUPpyLoo5cTqjyFpf5aXLGyY1F8iNzVUzVb7DQFaJjfXmfoSk1RoLYKU4j34aT1CaMAHPcVdc9rMkVzhCn",
  "key4": "5TLdNEwrgLRo9HFkY6oCgT6fKuWbykisXesj84XF8uDzyFEhShZcPaiQzRQkPGABZDL2sVPUiP6HPCjnDXsimiFH",
  "key5": "DTRSwFmkgJKDhyFaPcxMwC46Uz6PgQZuMVzKjRrqcNvpW66jmjgMSeDyhVMy3SZ1ckpziiZtsxtZANkZJNSPsXL",
  "key6": "292oLLrxyR9r8CCxUVQGXK9bDrFZithF4sJCUB5DEsH7x63x4xcxepJzaFuCBuLimNDjxQvvB57hV49SVyb4rvof",
  "key7": "32wTMtRoAP7e4pJFCgkCgcK4UoaiBnNFBFZpYiWioFgDryZDtDhoWnBmGSmgdJmgcGi3pam4sJAZNTpQFnTAxLwz",
  "key8": "2dy9pbkr92nLhe3gNK8w5XsfY5r3y8ubcjghRG492gEF94XCqwSMdSqa9Q8ghBJRrqfQXpNu92beDJSipDiVQtDt",
  "key9": "4AbVxvW3cL5epDZ87sU2787GXxq8DafqAUz4fMKw2gU8hK7HfWhZAcQL1Up1KUPLHg8xwAf28zBd1JT5ikfPQQwT",
  "key10": "3aFVPnV596BytHpzKtrSAdP5RynVAG2uZGpdc5s4TEKefvW18Z2hke9A2aKR6BmrnTMVYL2PGMwExaoSVUfYYuJ2",
  "key11": "5BxVY7E5Zg2ZJzB9Nkk3ypJjVre69dENkU1xD3NERw7ZzUx78i4DqinpS9FCuqMrLyRnYh3baCgMv6iAy2FQprJ4",
  "key12": "54y4LE3Qbn6cgKGZqPmmHShMVArz65Bg22T1surwxDGJ6jNEwTZhdNFT3EnB8MEA9sA78Yzg2ovEd994aM9GfZnB",
  "key13": "2ndocbtwZvREjttStJwsGxrJ1vWns8fMrH1XFBuS6mJkKBBQr2UswbnsgXNE6Lywt7FBPcYJWjoQrmzT7iajU3RQ",
  "key14": "2nRTjZ2rAErCLY5dAZr6JWhWnWawhq3WdeddE9ejWfjZK588pXZCLjbMiA1HB9tpgYCgGQaD8VEsHceRg7dzzwZs",
  "key15": "5Xhv9bqpbEpZtECGMHyefmVJwgJRSWUL7wJm4QP8csa4jPqyCVrv1tZFoeBxrrBdG1xUJ9MeLyFJeHHFGVihZsEx",
  "key16": "wbCiRXBeZryipg81LoqnV7TddXYUK24cmxkaJxZPRH2mfnEEtwXYWGse7mSpUy8qrBfxhjTpHKL8arbWjHeS9Ha",
  "key17": "PvkGiVby5zkxLU8eEaxthxiEjPRYK1GrH6U1hVhJxUzJEwJJumC667UQDV25is4vAgYuA4dFhEG5uD8WsMYArgt",
  "key18": "3dgM3J123kbvWGejUbPpShk2fydNU5iGwYG3V8syiJZ2zzVdLXhJYhunUnhCr88n6iaXBQBrpgLmHWiojhi3cr5B",
  "key19": "3b4uAZF3e7wxaKjAv9ybstxRWewRmHBfx4RcywRsRNRBc3rAW1Eo1dAnn18Ey442pDxThuzehYzFDM9vV2SCgidZ",
  "key20": "4GqXKYUt2goEQbfwhvu8edAbUuPSJXPdajhC1pDs9UNRiX72Kac1XdzMXirFnNaUTbSfWaCMB5GRAm7w9hb3HaAA",
  "key21": "4PH2GBh32evJ7feKt2zxFJVbihitbdp6diu336t5zm814FACNFozmLBFubuYMhxUPUToVkHpqcRLDbRrqSeGW6za",
  "key22": "99cyuwk3yqqftoLpM8aUpB7KjNh39mLWpgSdeBmUwhT9jNzTaYVn7Li67u5WKex9terMe7AMkiuAx5ZFPTaYNDa",
  "key23": "2iNWpLXA3WLcLNqyqqBccCQLJuxqVMSMd1yUfT4WzpscUW6wZADP8w1mkKzhUmdZHyW6PuP6C9dJQ6sHwqPKR221",
  "key24": "2kGukvnryzwKzME7QmtaPBxio9k1rS3RsxDd3gScDH9nuCfTzWEaFuCaa1nbAwpVNT7gfcKAKX3CcaMsVJqs672w",
  "key25": "pz9Rj7uv1ga6siSHRCeHtz275e9vKMAenEAdUHfZQRXW1roCoWE3c77vPnf6YKq43KDjTcgyiDvCeW5KbGYwYuY",
  "key26": "39CcmHzJvhLEUU9RJDmhqTr1rsH5pTgx2HDwaJnjmuEPYjgiWdfjinpcFmu6r2e4EHnju1EhR3ojvEwwmRjiQuuH",
  "key27": "fJ3DQU1ED9wj5rQBhnj6jcbKeFCSZRT2UuDcK9HJBGqcCpsmad65i48TVWRuTfCcVQY32npgLqK4LHjnCvYrvJk",
  "key28": "2icanPvE9e7mQRspdvQuXpDpzXH1J8dYkpWtkzBVxKTAFLUUSdzcHDwTUNY9dn5sVfQ59SzZrbUBpYcJqE59Gyoq",
  "key29": "3hpnREvjF7oQaPaNG6ZQi1xssik7BbPRycAMAUqb753E79kkMBQmHNkc2wbgMwGmprHMApveUibJA7NdDG6QzGj",
  "key30": "3t5EHMruuR47VHqNRHKUJkysRUZMEPbtUPz6zWseAC7tGGszTznGYSJ91uCXSFmMSiMELKgQ4WCvR9GGEujWBEpa",
  "key31": "3yu8JyLgNkE3qfKFUuoN8jrKEBogSCSCNQNZngXAtKQXCgbtaxnnm1iHdjouCoyJjPeQWyytpyb7jKzNfGMzEX18",
  "key32": "9YKjjMYkv66GoPyp7X6oTTsFUAPRUBaDdkGQPnsse4CMXGdiJ7WwZLTZpCLmzfGNQm8JW9LG95NyhC4Sxv2Heaq",
  "key33": "5KoSxu45DsYLRehqLphFRrdSDTkFtMf1sG4M7JW1jTY2F5GU7uCfdVpixkK8MYsq4mqiyGaxszxWxAyNaNmtrMq7",
  "key34": "BZvRDkfnV8G6D3ArhcKDne73ygJpc58L6W1CRPHfjhoTAMAbBv9UfExJEHCSXrSyJKaHPBxXezfDk6ouMvprd1F",
  "key35": "4aZaD31thnBCbuuRFAtCAuC1Te6Q6xV6QE7twwBipRrZiNJVg4iuNpeBF2iher1c9gsn5HskZmzNEMnYYCMxxtkD",
  "key36": "221wC8BuyHsfESUT3uBCR3eLv5f8SVZGmBDSKzm3xDaXw4SserA4MkmFoZpuVrXLwT6cg2Wv2VkRUAD5dc321uPb",
  "key37": "4dQWAhMPC86Vkmtc4bWTmYedzXYVGwWoaepHbVTqHcUVXDwfvJyjCNBH9KsBKELjq8QzrjswVfzS1frTioG14fTR",
  "key38": "575mo315q96aiJ8ZxxZkjwQ5oM9HBEFMmxHh2UJ3zawbPznFCYvuGKcCVJMAU35mY2qieAkGUALDdovzryo7V8zq",
  "key39": "5w8kijPNCa67WzrL6vJz6r3wvtyKMma9LeWgnN9vJ9SvhTH3cLtduGbMHphWGzjMrvREcQJBE4zPNRRxDbdc2zRC",
  "key40": "e66Wit9DvT1V63dhy9Uq8to6SwARSGZuhqXAdSEysBR3LycUCP1jKj36R15WKmpEZi1hvJACottkHu7jEyL29V4",
  "key41": "1DJR9EJtJo7jJ9v57V5skqWp1TJpHZhD6hBm6TdbxZdH3vPxTFEG6bSCmamg1h9LbyrDxMSbtCTRz6j35DoeXkz",
  "key42": "245BRqGmeXFvKfwmefYkWDCQ6ZrxXZvDVv7ECrJDLVm13UbC8KEvwQ2kFTXpZNURhpGn9yMB8g2XQn1N35SdHrsi",
  "key43": "66cWR6njZfPC3NDBr71LEnLmpPX6BHJSNLxfaHWfadgYX3GLmMkrPKR8oT9pLoo8apLZm45qu6Ycb5fUYM1L7bpk",
  "key44": "2CLvMTXN2t9nuDUSjbyBnStPX9oynKd5hHmUKncCwFSrK8xgKfVUb5AgCasZjHBQsjayCMmLfd5ijJrazBR4LU3a",
  "key45": "4J4vxBgQo5s4EguRqie2CRd2QFfYfNixg9ANURZU5izPScvZM7bpTdYy9MKnM1pWKW1S9pKkq86M33oVS7sR58uy",
  "key46": "5jmpYzEgZyjFAkn8qr8iScDbZU8oL6waRqWBHJkbUshJqjjHEuQHUVdbEgNubhEXZbfzzzmRmNiYrnUuEUWjmP2g"
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
