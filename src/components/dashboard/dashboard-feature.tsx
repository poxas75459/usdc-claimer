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
    "3cM8FU2u1JT4W3RvLHmaU4ots3J9aJGgawukfUVDFazxWkYR7n8AGReCDqgEZJqnHWx4fPvVkZkR6nPHXE8bYSeL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ccwzbAyU7d6piEQkJ145pXnoSyzMDqsySPE8PPcajTUcpDbTspQwcz5pSfTdfWMo3Xnzm6cbr9C7C41pJRB1Gy",
  "key1": "2xLyRaAXfV7bdixqC1yfXAE8ZBxzbRkYYjnpbCbXa1nd7TYfCfyKR5WwrkqBaTmt5K5ycxejg3GWbZGfEexW7MBj",
  "key2": "5kPTAXGmB1a6yGXRc2y5rTPn7qegsoc8RvRtzVhDM7jnTpRFZptcpTktSsatjMS3QdzW38wR7urLHDHv6Uk4NNh3",
  "key3": "4bHBpSNYgkGJ7yjcw9V1jwCvyv7Y5StjUy5V5JDqP5R31c5nh4Xc7Fw5gkvG7n5cuxQneAdzJAuMMYR6CkTKVUbK",
  "key4": "zGd9DghZa61qdCksaLijsHS59zG9mRn4K8AN6btYKThyNhQDc8oNM2eQ2n8tdNP2tfURWD5SuSnkn3RYm3TXt8V",
  "key5": "4Bwoh4A7wvrUnQheK9WnSs1SY4hirDDCzzaLb169ihgNsvmBAck4Ne1keSRM7SPZ34ajzX3QBsYEhMuovaYAfj4A",
  "key6": "2JSr3FBrJ1rkb3cTFpAwjHN7ZEcbQLBmgKDmYUqZ6Aw6FbwexTbXZHQBsstPbVFpozhoxoEG2f27i2Eux5GECVqA",
  "key7": "5v4ohKwZz1YLKPntiZrCiTzgDsyENJ8tzMDzcG8fQhhEKxSLrUCAJu97EfEe8vkMv52AZAtbtYnrs9abPcjahQ8r",
  "key8": "3rKHMEB9Auzpp8BsWnNh72FZvMDNo887j7QUDPPJKFRoC7PFxZof2jotTK5dGMwES1mjFTadDP2kjPZ11Q7B6Cet",
  "key9": "3zFvRFj3m7oyySjdavyPUGTBTsijjL1xqhyZAvchEj4hY9RErW4Qg1Qc7PA1MyapJ5j2kdiuzUVkezCtqZEZywpW",
  "key10": "5MWR7bzqtfQRh8oAnEFgxW8Rez7Ve3PwSjnSqYzEb78nqJ2TKgbnDGo9Dm6oah4UcbY3b8YBKcSVvVfywfMDGeXZ",
  "key11": "2egs6VFeoiK84eb9eynrCW9ttwy1aGtdfxTk4fZJEmaVjUGep8Q7K6W6y1Fme9M5HTLZnmBpoUzASyuN2F2tkKa5",
  "key12": "tiK37UF82skH8p64CRMjknwATwSaEiMMX8s45WazEukaT6icFBQaN8ehpTnquU4nfoZZCmAQW6WsVvuTzxLmWUJ",
  "key13": "4Bh73fA4bn8GrFCCvPKDRevL8YtbbY4tkJcNbwXpjyxTYEByoNUoNjN1gVX8kkBTHVLnQ5nKvBxHgDx8GxHPCXWW",
  "key14": "aNvN48b45vtjGjwihiuYwdN3ELnMxqJTx3fAaawPBPP4bRJm9MVDvhHsXVUn9MrYnmiMicZZoF5UPaYiyNR1Np5",
  "key15": "4TTuw4TbjC8nAT5Pbotm1czxUnpQCnuU1AdHumtgR2KwQxoX3X1oyWgfsEYVBMobjFCToqLuN4xy3HkPgEsLJjou",
  "key16": "33SmeLuDij699DpuEyNSiNpPRvnCX1jyit31ibudGz6huPVyHtLKrZcuqVgnVd9qFGLmLkF7kLAD1hzbSyMN566p",
  "key17": "3YjV58dNxd2s3qPEJfCc1SW7VDfafTdtRUQveHqd2JDDZ2nafYgt75TnbC6Pn8szVSXt5wgxa3nu2HeF4RRA3dpG",
  "key18": "HvsYGCyNVqZdCNvzhoYq7UgEUd5xjxyeToimiCybTPR8NoTuP7XDjiaCjzGPwzorR2V3ZQvyqbWMxmtidf2b7Ds",
  "key19": "3qpFg8D65EentWYPmwfvHXVC3i6RQCXMvBaBsLgCbfGab1xrDxuvhAFjUTkZvPskJALAEGt6Dbm8pQW8GWTPW3Hg",
  "key20": "3zQyHuFnvU5Xbigqb924Z55zS1zAmbLP1e79j5ATeBT9nkDaxvvThYRQa6u7XpUgbrg7r8RWnYJDvFSvJLoc1CpY",
  "key21": "4W8AA2bGm81NXZ5cL3zXEoGuVPeN3CciLNEEzHLki9WfDQ9qr9KnDpHeXrCiyFNZ9hPj3jgZ7HNinbJNvbwuLGrU",
  "key22": "4FfWjYCoFN4keoPQ6DZG4PkykFx167tJT8WMUDHuq5M6ta2fnEFXaDs1FDW2auRfdL3u7X6UD7husj9F4FsHevHm",
  "key23": "3NThH65XU5nhQnZZoix5YcLw6MoZWN6oYHAD3zoRm97kTMacEqGarRwThJd6EgAjaHTaypzHXR6oHudvE2MwERcw",
  "key24": "5v9wnax6VS8ACDrshcwdpGTvXQvjrauuiGVhcHdcKQebcMT8nmbCzEjiZQcYVcecSavYxMtJvTDWR4wbSB7v2jT7",
  "key25": "2G7vtmEa8Cgqhbz3aC1vnC4kBQPw1jPctUErCAFdCRVQ2WNzNnPBGD55XmLgu8pQQgt9UoPY84qn1rdJWrUGP6Ut",
  "key26": "5J54a5NAMKsKS8sHbTYYGZvVNB96cjs6soSr12pA8iXrZ3Jpmz8xDFQxtuTLbPDtG6tenWnDVaYFEmyCNFaFfTEN",
  "key27": "4z3zkTM4amnfQKCBTioSmnFivvg3Yb7jw5rSrXQ97JZ49Qiz6wjXV7E8UBg765c6a3yoLyBhFVKvZq3nUZ3Xgq5a",
  "key28": "3zBBzLD3sjYce6UvWpZAixRyx2GWnWuH4xNnKT9yaLVB9Ld7ZZv6APW9Sry59UxW42xYZta886YGHaq326BW6qtk",
  "key29": "wEKpcmnLJZNZJfFLueDaw2uvzTV8jeF4NXNdja7RNbGgoCFE3npzGMALL2Nx8CRk1JTHHYjLeqi4v8QqrwVjRNv",
  "key30": "2Lvnd9MmYdpi3d4nRby5Sm7jCK6m58czLJXLU8rrEVyYAQQNLL9afECixWvuWPDFR3cYxzMGBtzPxntFTTZCoL7u",
  "key31": "66p4gts5wikQ2SCPUmMeb3sq5BS97tUR6tRbTujuadjySTzxHyN5wyqQJf88XRxh1Ffq6eYLBrH52fxkvRjehESX",
  "key32": "4M69cJ2JRwKrpxQtdVm3o27kh77NErxADYbhrJqjH98RBVBXMaCASK97sYktatUfJ3cL9m2rGEn13DnjVsowy8AA",
  "key33": "3m5f3bS39vtBikxfHcmC1Ec8mS5ce6hLmTpz1hYdLxc846ZWPLoGA7yUKT12nS3kyLDrtqQnHpUwcJTQXVfSjRyj",
  "key34": "5g8XX1T3EVDcWnxyW3u2ubEFFKASrLpuUEhgZmQmAfWwaWdWh3bL4pPMqpiYEa7aq1v4FQSgrsUcDc2EGCf4H6HM",
  "key35": "5R51W2aHBYCZwQfUgyVUauS9rSfydsPavmakdhwwmdZk5uZZs9FK3u1wACt486eQamxKKcaLmMaYoc6mSKXMqda1",
  "key36": "2GkTmFRcTHycxaQaANQk77ry2VV6Uj1BHno6SrBArUq465T5eKW5hFwZBXZvg6RaPooNsj7tb8HAAFYuszRWdCJe",
  "key37": "4dYu8Titpe5tnamiuBzxeehYtMXm3VSFVWyRRJ2d7onz5yoWerDETJ3up8nnwRZiLg35LFYDi6XjcBp5vLws9jzE",
  "key38": "51qk2P6dFZ8CL2cjMpwvgbYLZrw8mMVVCdqUUb4ghe4SBbTXaUdxj6r2KFwjpwz1hFBb46aY5unL4B7W4Xp1pyFM",
  "key39": "BynYy3VbA7G5LAMGGHTftZyLbnvnmEbbkc33NBBwWwz1vXvmSaatYP7inS97Sfsc7959Lm5H7z5ECj2kVYjrFC4",
  "key40": "3oUCG1EbDzvJLXpezEHJNLQumHSwRmAV68GLCwmUN5uDdD1yWQywjuE64FfpcULMKvwGnFwnkXuW74cBNoQYytXJ",
  "key41": "4TiSRznutL6qi5n8AFUnF6VHKWaFPFZYuLfke9kBKksSc4wfugLkGchbCBPw5MsaTEQtwHns2isBMxWC5vBQa1aX",
  "key42": "5TheQ57m4xEZrza98SrQNWMb45S6iuzFBoWF7oeuAPNer9t9UiHRJ3cMb8VoQRM2oasdBRDZgFGibmLDpeJMvKVM",
  "key43": "2Jy2K9cP3jcVtyKsTutqyShD95XwrbUwzr7KSRhFBCVtf8VJBDfeQwodnLQFkiJdTUfpLb7MfLyLHLXVXXjsMqJK",
  "key44": "YAm7evLYA3MDVQuxpCq2332gFT8nvoeRM7kQ8i6V6FWru9XMBGr3ujDHZL3Kh5bgibkpuXyJaByE9dYHFmXhwG6",
  "key45": "31kZ1667vA2kTaQksc1Cg4gNpuU6uLqQ4AUed49pARZNoDC4qpzbT9gYJjtCANVzuFPz95DA9PGWATk3US586bB3"
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
