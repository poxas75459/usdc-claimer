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
    "5qe3axG2swp7tNGjzyqrajKZdXfafmqLu91kNGu5anHLciFUgnXRfYgYdVoZfCpSYiAWGfJMCoFJxmnUWXyT18q1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mKEeZNLqafBKpR2cQehRvsG3fnZnyve1zjaiFdVtXbHZEL8JcAbEWnDxFvd3xr18BKqY6M4Z7hEdtYZCpcpLK5C",
  "key1": "44c1vdVP9UwiPM1UuEE7Jd8kav8bCSbjMYrQvt7Hdg5Vyt2Za3sggwRW4BJPNEdgwn4wnCS3fgYxnD8b8oGnxCs9",
  "key2": "3g15rMr2WAiVR619ricbskysnMSSCyhQe28G9eqhu3avoGSFyxSX85SXWWjL9eeaFk5mmqf1jc719r5XyJ73qFE6",
  "key3": "2iCdU6sbLCyyqH9cA7BSqCG6cHTDRbS85GVeBPk6HkvzBCwVBZ4NxmSWPHmomTFjZHeZfKP5nFXJtEF6cGfr4gX6",
  "key4": "3gEHPDmWaXBSnXEsZYeZzHmjN7pv7xJHYBE95V4WGvR3ZgF9SuNHmAzEnK6jkQ195kQZ2yTqdc6LFt7FTTT9Dvw1",
  "key5": "49XG6Lsy6q1BCbLcAssh5ugTPFFrMKNDTUEpXJ76mfVqcAVoEfTAGfu95BKNZbzhFg79XUSpdJKZSeBycX64cGo",
  "key6": "24kwHi7vF9H2dkYHnkMFD45etrEHCEaGF8iNGiYYAGMcyyfMDANMvaqumpSP2qSDAmpXCc87dFS1iZvMKuGLQQgv",
  "key7": "4nYAkR97cpCnKzA2QULEigqHsS6dsueZ8t9oZYPYZReSRYYsoSH6xED44rcEFznxdRdoPhnrAJEK53PxUCBedR8x",
  "key8": "377bxHHY9R8WoShQuH58PMUXFjiZKaGs2WNtq8BGwoJTmjTHhQ3hv1THoexEJG8SFbd2hHAucytxNbDLb5eUGKES",
  "key9": "NVLEiStPNxZZXQJXSo1pCYfNwPXe8ybjZ4ngcSLSqoYc19PoZaB1p3ymZLrn4q1QEFbJs4wiNcgsPKwgDSNddxZ",
  "key10": "4McFba3PsYvbVPnkzyESQrX3m94wo9SQvC5hocAA7b4PG8g1ER7NoJngYjdkDvUDiXEkSRMpd1jkF7p8gYik3Qfk",
  "key11": "4y8HRNuUd3DhWVnYxCR4CuLsd4eWPUWuvUjRJmHoeaBWcYasJ7JxDfiLnGsuZX4nhihXzsjQ2gSymA8jGnNNpjwL",
  "key12": "3LMU3rdnuovy3UocHuuS3xvWZ7LKoTgn1GnQKxe2C61spDzQn9sBuKEMaVhxQ5qDT8Ae9qRaWKsQWUWhpdCXiyHC",
  "key13": "4WZE8ZFjGsq7CfWT6wGsDPz2VsFz3KgSSHED79HoEq5HexFVqKCmRMq8ZBzE5m4UZgcbCeCBGnQCtExg2gNjEhA",
  "key14": "2JNGwzKqz5zWZh7yc4T7Sazrc8c9eshyBVRs6huVbFYgY2yx4uVVN67jhCUrwrY8nyLbRTAQzeDzekd7tjWagNKU",
  "key15": "imvhzriR9U3VtCGeSj6GKRYFW4o7tr44RM1D5HYhmo7oPRDNwjpFwsrpd2gCoaDrn2mkBbYvfXq6raB8AAWEx4j",
  "key16": "2AGWprvPedjNVoUZLNhTB7j1UZipmBLqqe6GfX4A6Ubb8KcZbefAEMXoZddKjnEyVaH35PBYAsVsVKE8ebdvPEzj",
  "key17": "FVUM77soBpmcznaNdMxBtGCM5oXK7Z8ohYYEjge23V9rZkCzrRLSj44DRa4ALNWW6j8QwXSc8x4r5gFNVkk4zdg",
  "key18": "33kNMZFGQEE7rpcGtzquZkSt8PSWUiwVtYmD78cVkRJjQSJHt5TdyJ8pA6VjigcEwipcFmBtowspa9dY6h1ARRLQ",
  "key19": "3zdzNaxvbz8TyZN4oe94FVtkpE19x4F2B1hPbaWVSMYrR3inFdmGtNK78DBYk18pFsN4aqkYaqpAUA9CQTAqezGE",
  "key20": "3v695Q5NFX7qtHxQ49V1XbpheKwFWZ96AJCuXKU2HMjbz4TWMJs7XjjvjtPwRipQgSKXtZv4trTeJdzsgwCF79qP",
  "key21": "2fSuc3nbzjCC1UGfKg5xUVUfj1v5wXdvVh6qS8WtCEcDkuEan7xECxbU3dqyfaKAzoT5ZvSLvATeZqnHPPDgV1YP",
  "key22": "2KSraj65t3rZsaZCkUUBDAwH8GoXmfFscAnrCi2JqtSQa2yANsqZEWzfGWbK2aZRrEW9JYxEsJmdv8CE1tm3Po5o",
  "key23": "45Z8CT2GpKVUKsN8vj4hYRdSJy99ZCmu2gYLHss6QxUk4wDNA6hu4XxjzdLNmT37cnUcgdyFxrP467K629nweV51",
  "key24": "2vNN8HM75SMamMKQgQdrvmAwaTrrcZbatBrVJBTN5d1WAJfehvqoNu4xBemChT1PEowxWSfcq4ugpJkBjJ1RZRWd",
  "key25": "4d1Q1VUJVkAeQcDtXzqdHiHb91GSGcbcTh9TE78HWVYYwxd1PV5jJxArhRDodQUkE3U1PTKAgCnu1dcARzqbFuA5",
  "key26": "2b7LXLp1m7UAZycExLuvHqMkrbysqLzmyw1FgeB2scBBdZjFbqW9cZpk9aFMiw315tK83v2Kg9x87HCgiiGqeEwV",
  "key27": "3M9PxPVdmwFTdUffKnRa6mqbu6TDozzxYqk7DLqHHiLZ4sxdrerwnG5szj7YfVSSS63sHx4X6z5Ex9voMQxRTPnP",
  "key28": "5DoYtP7U4dJYKmrKwT9M2CnUCJUJVMYnDB8r4WxkJoD3wZeViu51sYsck1y5XGLkU6hsccZCWy1P7e9j6XxwUGAP",
  "key29": "4XG2hQsnkY196EuhUSWnpp1AX2bxNb5KChaJedghJSbBBpAeGFUvm1TQGYFwECyzwdvMv9wiF4w5yEKdY8Ac1j24",
  "key30": "5q3e2x9bNRbc6ha5Hn7wTEb5ncFkuBy8LuT8iM6Tm7rFQiXMHYPm1NUcNU6CXaA491JqafojbXvmyQf7MQxCQW3v",
  "key31": "62oX4aUDbmkgwpMvkX38UgvSVzjASFD9VhykNJaktwf9rLhJrB5PA79TFdLD2BTcH6QReh6UoU47n7H7vL8CiKyq",
  "key32": "4zScbnf8C7k3Ahzrc4k1YUhwaDLX7HuGyttXVM7gGCLFkAfBL1NKxFefdicc1v8jDzVr95UhSwBKdYxdVZ4v8m6T",
  "key33": "sCi6yDRRnhmd9dpixKoTPwYfuTegUYAiU6JyTP5UgVEW6jjUxm1QNB2oPH9z9gABDXfG2K76DcgTTiCKtSx25LD",
  "key34": "5jMNH3jmXsaTU4BdrQNyjGo3QXLQKggBxbA6bpbXY3x4VKCLYCL3zcyN2LFuYX878nF6FirLq9ET9ms2H8DeUhjG",
  "key35": "BQW39dTJvPQ4iduvM5sKQvHis4nKq75qNJkwFDYB2ri1eqhMoeipgKDsawm3JsiHjXB6SFqiWdAnw3Ls2AFowyZ",
  "key36": "2sfuhM2ACgin9JPxCXJ3AnmNJXM9PwkQp1EkMQu3ExhFbZ1NbVHyPwQZA1AuV6Qu7pXkzxo9zoPrh57h8cwwZSsB",
  "key37": "Wz6qMKyWWNmFjbPi3PHbS3ZJHL8myGMfyW9bXQV56Rgmi88yxc79K5pxkihs7ZtLmEg1mByuF2qmy18vj8P6iA6",
  "key38": "3ZfD4HGpd7czE85puXMYYbdP6Vwokubjsn51ijhrEXANdP9bXDVqHq2BNWS2GpJS8i13yL9P9toH5KpgETBMi3zT",
  "key39": "Bh5r3Zr66zJf1ggijAytnAc2DZr8EBnhGa8zoGdZqGYtNqmwSmoqbzkmrDmvPyp6iMKgnTU3TALQonT8KJEYvqZ",
  "key40": "497Rm2FmRsjiswTCcgNZMLKeXdg8roUP9gB4PMMK9s8PcAmPEHNF45AvGDm4LJv69KeFsJnWq2F5ADFjRXcvfhB4",
  "key41": "5EtR8dNiWaLaFUrkEBn4e5zYLGbbe7L3R2BmEwUfJQXYoBLv8vkpj8T5u368FEQQujApFkct1MfpReVVokTqehmJ",
  "key42": "zBSevBM2AeBdQDtMwYrjiba1JXspUuBm2AGufH6u4NKKNJfZvcPZ1G1mKPP6jxxsAo9oRJo6bWbq2pcqnEisbyq",
  "key43": "3VjoYBuogxqZC3eBvKXFWt4o3dVZa1X7Ki1VtFzLuWu8jJs5itCLXe6XYtjMmnBj6hL8dvMjzHqYUk1odCuCDPUo",
  "key44": "4xgDj6FKsg5tTUyGVp9cfGvLdLThEWsH3QArH1VFw4HSDdCWgXJ5xTQ7KxJSZGrgZcMsFP8YeL4jTUtJqxHUaoKf",
  "key45": "3JhrQGzVyPMFRpQXmE3xsTBEtq2soGBH7scF8RmBfoMyQiLDoVVqnwVW1J2FkEQc5TwikEZ4mBb3UrimRzbL7wf9",
  "key46": "3ZtTYwnqfh7EvvstAgGPnQXoBDFDBcC3UcHg6dVbmJrkLoA5dnJ6NcvpiGhKjD5ohScEvU7Waf9h71mSPWdq14hV",
  "key47": "uq53KiwtoboJ8KNW3C76C9n4k64SS3BgXCbWG55DgJu8QEaGefJdhdzNu1J6oansT1gDbt1YFkJjHgiWH8i3xjg",
  "key48": "4Qyv3SGvK56VrG7zy3drfgVDN23yW2rzNdayWmzdsQejQv3NWukVHrLCd9uzUruRD94N9i49z3HUtkWWhdRUQ7gB"
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
