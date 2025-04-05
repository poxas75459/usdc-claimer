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
    "422TrGB4BmJEVJZ3EK5Vp1VhDNJ7Nmxx8NEpYq4NHdmBhiB8AyUz9Aq984TU8ntbU1nKFfFWVevJSvFaoEtBZyMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iA7PokpDgw5fRf1zLtLo7y6gh3tuSPwNtS81RXuzxyyFmkPczT8cM5m1TV8KervyYNu1X4VfuFsvZhdEzbQvvAX",
  "key1": "25dDtHm2PbsD5n4rxEkDPHZNpKUJKPDAyr2poHJ53cGc8aoyi9KYd7cqVpvvN5Sx3VqNbFezKYoiumy4xLnAc3zX",
  "key2": "3NP1Xz7trufTYvCY55QSybPbN5SASmJhPqm11Xo1XszQRbi5XbaHKZqLFxLLnGfrGmG7WbdqTEWnnNm8LeWs2gcr",
  "key3": "R1ZHVktnqe9oyALyDBDrV4gfDVCRvARnBvegBJATiCdiNz4bqWrLoCw77addXZ8gC73QUhRnrEze955gXpkeSFe",
  "key4": "4ydpJ6Q55XZ7BKNA4FkHebLt7kRQcWBd8ikUjW6c1ennRwJLi4acQvjf6rWbdbkmwJaM8HbYvqhUuHsgQE1KUu1P",
  "key5": "3AAnjRm6sXhMCnPEBAQvDFtzBJyMfU8vBUibj7zjakVHZZT92UUShjU1xCRE8kvebgHgpifHdxavcUGqfSv87th5",
  "key6": "4WUsyX8rNH6UikmEJSBhVwWrLkYxkpqG6PjXxETbEqdxAraYh3g2zSv3hkK8bcDiwk4LGmjxMFbsfb3TdWswXhAN",
  "key7": "3NwXZS9vymKFzat7p9WUDfZHUYR6VTfzEDkgG2ycsHdruCMLJFNiFVyVjG43fg3xQ2f6o76gTWXMXcKQE1fXsJYt",
  "key8": "56L7nrh939Fs9U8tXQd2iiAxvW6s6JQjo5FPt85vQvgxxJT4wB4VnGFqaj85hptNo9Xvn2i5p8RqMCdSkjhaJMmk",
  "key9": "63NqUSNGctp8i1VrxoY3aGQKamh7euREx4ZtqpaYMae9YV6kmNuU6FFRHE1iCGBKFki3a2aoBmqYF5xyVopYt72R",
  "key10": "2ECzBMhfzJwMAP3SmRhGWQQi7JRv8XyRhYNAVnYJrBSDSUSxBY5Auas9JdNxvC1cvss6DZer1H99moRnFrxsXiwg",
  "key11": "64NAgkvbJrxDqpoWCAP2vq8pjs7icUSN9NvwniFkFM22kUvAy6BZgVZL22GfaTPkShowdJaP4E4DeTQAMarAK7in",
  "key12": "28myGd4gcXgsbaoLgpQW74mVrr7Uwk1NdWKh6MtvZ197WFDy5QLHi922whgJH1nUrycLkSqUxCi59nYQuSFnmpQq",
  "key13": "5TbjL3zDYFcUPybZBbtTyDXDTVMasa3mfSRn8xRwjvchtjNS2AXsKiuRgMoHq2FY1Z2dcL9gbmgU2oGtKSFR1zA3",
  "key14": "3Xtbwr6idUpTTCoKytGQRmVnSkvUDnM2bhkj1XLkmNQcLTUH4Hqf2XYAU5CL8HU4kETutWxdYcCm4A6J7s83TN9L",
  "key15": "bhzp54WnVieAywYJSHTqgfddM3k6s5tPZt53EdyNnLozg27fD9SEeXZ51vvvahaF8XawxDfnakNhtRuSudFS5JX",
  "key16": "3KmCq1MsmnQzdoGCT7X8yogeAanh2y5emRCb587JcT66ShhswcepoJkSdmrAwEttryxNXXV93CLesfi44fim3u49",
  "key17": "ZE8uSMbwS1pGp1SbQckAxgB4o6VLZCZS2vr4ww3XEofrhWNkjb3aAAgMKgJQshT3MoKEWGrhb3yrgFiXxm5zMZa",
  "key18": "txQtbUf8Z9pnYm3K7yi4ZVsPBdUvrT416aXJn2L8BC19oshd23AzjQ81eKHkXvpKyLbNzkFZPs1uwEYM59LKfGD",
  "key19": "5KTao6tqQLRtFsaN5xy9rtXuqsANyv5HAAbLT2ytXGYZEpZDGJvHVYtG7ERHte6StYikPRKuXV7HX6mXMvSrCqSP",
  "key20": "5wCkQrSALVjdFFWsR7GuqQ9VC9Ggzp1HEsCxHJbH7GkKjWYiQcm76BVQtsTbHVJBzgrJSYVxR7Q2jVBrNed9Cjd6",
  "key21": "5C2PoRET1nDQTRGLEZ2pskg3f6j5g1STUViCpW6sEvYbM4bcj3Sp9UzmBeGwaGXDyNykJmJXazTfT1Bk9EE9ShWS",
  "key22": "57Cv8r8KT5TpG2nBXYxQLczDwTvH19E96GckJhec3KRCrRgh8bywHyDT97u7LHdPJa2sV1kobofiP2qz976bWKJ9",
  "key23": "65jRtrkPurTYLWXvJS1Ge8jomoYvEN5wER8LJHKd8iqpFHKGDbaZ3Kt5c2UeXriHsf6UECWWmkzfSRBQbyMY81ve",
  "key24": "5GKaQceerafhCp2csgdtp9FVtAwmT4CKZFuvM9wqbsxfYxiMHKHVGZs9PUi8mzvojFXeq2fBjeU8zrhvJnSGicGi",
  "key25": "4K6xE4Rh1XQ7LxuWXmqRosNREzv6qpEUoVUxR9WaWhMW3d1b3TyhyPbKczGzuZKGFFu4LUxc9sT84AYxMBcGYBct",
  "key26": "38UdVmvf1jcETV6SLC8Asv9ZtKDPthg149SsYwu11tLNrNb7WfXrGXubCe1aDJeGhY5kwsmQrExMtUp8FrHs3u9r",
  "key27": "565MqS5AA9jffrPyn6wd3p6Cr4jpREnGpwEghNoqAyGWKaVjxJfLiz71ZjhMdcofcaacEL8rXmwAM5Rc4xzi8cNr",
  "key28": "4XxnskE3XNKFje5U13AE5UfEHj2CSqNm8nxEG4UaW1G4nvt5Uciuy5UMnZuUfFmHRSKk4suaVgp6EWDqJDbBebyj",
  "key29": "5FdRpNvqsdnmg8y3QpLU73jXBN7bWMfsXt8L3voboZAZ9aCcHm9uHnvyKNt2HpeepA21v98NF1NKNJ6bUJFS9rMA",
  "key30": "2WU1tGYjrjU8pXBeLb67ca3BPV11UgSYS6uhu7P3sV9PZNVEuGXkC6guABuSexxDwnn3ZN12FZSpxxq3geYM8oHX",
  "key31": "W2bREe3wfr8LLrEuD193wVwnWUTx2nvBM9NgbPG5EULiRho9bLmoC74vTWSE5idCz8upUkRdieSNuf28ysK2k8J",
  "key32": "6jfJrcwiVveDzhqoYvNHLBoNWDtzgPMZ9d91uE22rfeYFxkfXLFomeQGeSpp6bD8qQUYwGNGXVKvuYnFHTduTyZ",
  "key33": "64oHFuRAeUss58WFz3D6E2jxUeUeHzxxeWspGBj78KLB32hX5xPioK76MaQKcYVsG7MJng4nRvEmAYfff2MhBCav",
  "key34": "4fUVQo9vyo7zHQEET4JLuedf4W5yJq89oaaGN1SNtgSN28Nxom1WSHyeL4p3uXMf2rAreLycq38E4ykJrCioSJmr",
  "key35": "5nhpXjWMwqDXufKekZqwUQjTqijttiaeHDECXeDyYMqPN9Rv7cSc1jU8rdvwK6DqJggKGqyqZCRyvTf7bRoPJBCt",
  "key36": "56ru935rDyqJVrhK4z87B93M3G2MZUc85UuLefHA1thdTfmedQd8R9TnVFmRvriVeGSoUBZN2ob3B4VzENzt9JE8",
  "key37": "3tfcnLgQdXwQWQkm36su2UP8uwD5qkSwH9QzP87pXPB9SxRWpTyNmDPWXbyVUzHmuWoWv8rHJvvuFigTwQZJkHoG",
  "key38": "5p5tRhMD2rUhwbufsN8fsWGbqFfVHpfxoAAbHP5ujm6yrdWJXPgPMvfmo1ZYTN21ast3ouBxzLGKLmHjScWnwzJE",
  "key39": "4ne6Akk28hyqm75cE82dcQk8USSupC9R9h5Bidgm8kifCQrQJKk2rnQ2LUeuBuU6BycVryHQn8sgzTrqsAg6vRzu",
  "key40": "VGP6Tf3bBvB9NczHgNG2Lr6DdgruLfBSSNzoRJyhVti98vjZAJNVD5SRghSoyZ8aYXkgQkRabNPe3jJKwtg2E5h",
  "key41": "HTy4T38eMdCTs268ZBHfYLLVUXRtv6eKcpReraaZdhFEhRgSHhmfmMkZtDmgDNSA8ARB5xHmA5Yk5k1rUmCVJJh",
  "key42": "37DXnf8qxmfzEZQrge97a2wX3t5BniYZ74jcq4GX8YPCmtnwmTtK1uw1LYJu2pJgVLY9BSty8uSFZmT8Kk9mc5af",
  "key43": "xku87iALBXpyy6ymansbm8SbCDqjzhS9ZXmKnZxy6byWNJnisSdNZvotu6QqbHyXdZzY8c6J8k15oBGcNjJdXY2",
  "key44": "4HE5hkCoetfMEKainvnpUyadud18m4GxUiFPcQ4VvkBjjNP8QDE6X2hNMe4apCxh2QpfD9endRi68DbYtWf6RkkW",
  "key45": "39T3oBM9Kkc5ASfn3E5HW4zZHFkqp5kwKxvRzsvQZmH1GzMMJu33ZsV4UTN5MBytUC5LJ9SNPVc3hsbuHT6ZDCN1"
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
