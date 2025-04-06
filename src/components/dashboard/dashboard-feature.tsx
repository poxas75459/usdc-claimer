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
    "25mLuV6jedkuU6b3n5NfzwLQUXETX3xfXvZP9yUepDqqbdanH9x2n5eu6NbwevhBZ86SASnJLKR7WmanobS2aFTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rc9jy1ETfj3Quz98PNgedp1RHqeBUyNZxbxqVsf1HWoCqXnoWpNR7tRVT9U6R1Yqww1jna8bihtZqecYB592Rfb",
  "key1": "HiuH635riZc3T6iMtMP9X2EMn1qQZpncb2AR7FDCZ2G3j15MLikRPcs74T8j1kbxAwBQu8okpsBF37CKNcFZePS",
  "key2": "61jxcAFV8KZYc7VSsXkhoiMJGdVBoqgdkcU33tNEKYNDmH9JFZ9mvNQHWCyTWwc2f2mbEFyGAFGc1jw9k9A8Z8F4",
  "key3": "3KFnF87Fa7XPVoGbWM8xfez7wdaGZKBq9a3UCb4JefJJLoENQvssEJuPGYm266dBBQrPJjnPLER5wy8cyt17FqRb",
  "key4": "5wwzYmtsoQPTW7d7fARji7vou28dyeRQbQ2jj2udyZvkwzSuq9m9XLdUZvoUaYWGZ9neMMzeDeneFwaP4PZNCv72",
  "key5": "5MpnhRRBzmT9nSFwiVW7UMTo7zVGxbarm4F43mb4bWpmGx6yn7tbguhgssdrX7apndvu9afdMQ9YrmbbK2M27B3r",
  "key6": "aXZsM8WPYQoCRousxXry17HxY8gCPiN7zo14Jp2mBvjz7MNZiB3UPoDeadCKrHzG5tkkmQAK3oaUE9jqL9sbNcZ",
  "key7": "2kTbE26oqN7JGq7RPbCz4XedSM7QUHELCfG161LrkMJ4pKehW9RSEQ1bqTx8erfB4zE7XY3Cx6Xuc8RFKojaJLBB",
  "key8": "29ufNrkm1qxL1hSS62djS5ocRyXVfLejqCpMuhbw7EJDK3NaxyKgPUqMAk5XdxeAJHApqJSpsYR96Qsfsqxo6axq",
  "key9": "2S7aXTk2hV5KcKoM1ShMxXupy3SxL1iCtHtMhV1gMzsKTTeE6MEGWqu8ooQG7NX4uLrsxm1H2d3c2biKeyWXTF63",
  "key10": "62zpsvdrfLTFQcmB6ewaCxwUJb1gP5D9FRMUPvr2Rg816Dor6EEZFVQUUaFNHpK7YMR595hEMrBdy5nCyBZhMZNY",
  "key11": "3x3sxdag79X9yAWyYwuwsEYsowwp5ZYi5MmfqbRNv8hAwzakirmfeqQowXU6pNYd4m89amuYff7SeCkGWUerf3Na",
  "key12": "2uLrk6gxn97MUyVDLY7Mg3Lp8Forwa6BrCua2X964wJLxt19XgN5kLyE3CQA2JxrdFFPx6uAtcqWuMmUNVmJzAH6",
  "key13": "2ci67PXpmh6z7wvx2gM44Vw5zxycxM6PVw4AqKtPJ87rQqgPbbMo7CgkT4YRur71HU7p2owmG5eMcZ5n9qFSh6KL",
  "key14": "2SR65FX6AVjSPjcpUrUe4guACqsNeD7UNJKdcaPQ1ghzkSH8pxGoKzgALy6kNKgaZ5HDsgrKnActf3RTjVpSKLsD",
  "key15": "4RSNjXFpxvZJAq4SGUwqLjdmDGdYewbmsEE8UE8EPENtnqLL8cj8uUEU4v3fHizf5d7jALFoguLfyLymg2sAkJLk",
  "key16": "3YULdQmei7m2oeXP5it8ZCGU2FF7FX7FB2ZgtfMu5UY4wKEg8EFAzThbFBnGCxCu6gh5m8kzMLU16RBqjJjsqbYL",
  "key17": "48RH2K7W3LArX3RZF6xfzELx2ujcV9wcuLUA4dSyxyKDeQ7smnPJiQr3wZKCBd2aPss8xiaWwNqPsWH25KA4e9Ck",
  "key18": "jju5tY7RV8JvWzQC8JBRAutxYBCZf2p1fTEabkfMuDpo7cpZbEZ9H5EHrke48XRz8FWhvTsYDF4PhU2bBVLqhEd",
  "key19": "46ZBxyAL7zSBTzJaT1oQJmVy6BuAHHh4FGsFxq5NeE1CEBKubnBDjctJSTq1kwJMdtu8kVHNPpL8K6NCZ3jDxWkH",
  "key20": "4axUKxwSvtxio65iggzZCbUKhKjJ824MFiDK8brVtTdkLBzoa1ZscMUQ61eLKEhQxbBnLTT6xdAVWawYJgg3xbt7",
  "key21": "5XvdDPKyDkXenkGKUEuaBR47p6ZgVdsfZCa9jG8wPeHRhswoUZ4NtjP6zXbMMqckf37SJsqi4HTU6N4P4iEgE9pQ",
  "key22": "41Mmn924in3xfRyPsi9tNpVXDiAg9EixbsJjf6GRtN9zqn6rP4eqeEf3u2oDgYqJxTQ4dn1RSDz3j9wgBpMZ6X2X",
  "key23": "2DtigARiGcaMLdxo1pJbBoTghC4EaJmPNonQf5hVsbaEt6KN87AVAT1Rh8MYAKTNTv6rUEdjY397CUpoUNKt6Qg5",
  "key24": "4vC5xdKC4p8Tb23tCNMgd1tSGgfNrdtZsNmV311jcKdsrzDFASXhMs4BAnNz1biQgzW9pUreZpaoDgDwx2wjLLnt",
  "key25": "3shb96H1uz1GEHmVxwhPKcsR35YSVjpwFMWssQmJQEBtQZDvK5bZfwYesZGq1oneoDsoPZednncydP3ftAV6cERj",
  "key26": "2oGiannesBtNMpm635CdKo4VfHTsPAUykuDrSWY33TXQZccbAm2hyVWnAeafrF8mCYE1XZCADkdcLsTb2ZBT5VX2",
  "key27": "5RxRrh139pb4ViGd7MRyeUDGFypf2yVMWH14ZgnBKvJNCHbYCuFo65zqh66ps83LaDASzdYZTKjDwEQbTahAFsb7",
  "key28": "2wjZt3nXrRkDedTgZYXg6W3jnixzuEE5YcwRdA38CEkudCbddST2jpmBvuuafn9sGw6TzRgVnT2GzTXsAZW5ymes",
  "key29": "5KF5KXWD4RzVVm5qrdPnWY9oXx4mAPCkJhWhn7WGTrJSEoVXU7VDUSmH28TGgscqfxozs3naRgRr1s1YnybsmLbQ",
  "key30": "5bhiqXNZU4SU8xW45X9X5xGTkgKdHra3r8C9a1FjD9xJhh6wkNmJ47qfsxQxyBki9v63GCkGvpDL7kEWYirdrnh7",
  "key31": "2RAeJkz6gseR4Fgguz7D5mWRkeU951GZXsrgqCe4RhsGWaTRT5oXQNH7ZKcvruJh1PoUMPuiRZtSLowjJSwBVmNq",
  "key32": "qXnSwSDJ64AKk9sJV8MtfZ4RwGAXGqikVDEwwD5vaoMFVQEiNzyKypLsaQmAUPwkKz8hTfTdMMuu7nqq6KnJejU",
  "key33": "56qcYs5zZuhynkv5kKNhLaHXeZ6X46ggxD7ds9aTsrscTjgCStmU4x4JyHQvpDLSb77R2rwTKStPGDkKDifXMrP2",
  "key34": "58zncPVmTtZUyYoW7Ef75zTsUW9nxgPV9kG3GoT4XX24gP9d8s9spUyoC1SfLe6bR7RQgcMaeh9aCQf92BmE2eME",
  "key35": "5VwqZ1asGJ76ZcXSJRABoZ9dMxUMPdBWqxKHjeMb4e7YzgyiihVFDFvdAfireA9qngFoCaKHD1S9Jy2sxdKEysvV",
  "key36": "64beGwHRNbyXCVrTFPKbJKKn5urHL27r96SHzwZeniuUgABcKEu4rNcWy5PQfMvMvYHXhAsFaKPQazuE39EXHPFA",
  "key37": "5hpmDJNazydyRU9HN4TbJRDrvDj3MipHKXSrpgLBX6dpH1cwvWpT8ASADkofmFZZLwNAPxzxbffTrbqLa8d6v3Xo",
  "key38": "4oEJfMosmp5dfZa6zqEmHbB96EFgdMPKoMZWpDKTEX3AZbSoQBUE6aWsHqezgaiPMeu295WWWCRM4oQBfbYtTBrM",
  "key39": "4NXWwozWEZdrsuJtwfNMepqmn43AXpHM6bmEvkx3m9fu25NxZ21ewxTxCJDmBMAEtFR3aQATVhVFhrvXioYoD4ff",
  "key40": "3uwUmFrnYX2o2fARf2XQtEySQo8pKRP3yCiUCRbZF4if37gBQpVQTrk4JyGdHH51FxcjiNPF8o4hMLHZAeXHX8dw",
  "key41": "294M5X2QSbDqSkaZyKhkszEoueimxAWZmLB62xb8Xs11StkxsrMmfEnhzWMeXtUMFXCMk1QdRanAxeqG2kD4QiKE",
  "key42": "5NHeozC9xvfcMRa4JFcug2K7ydipRV97YZHGwHMqeFpCvhpF3FzDSBYxc24cAGm1jp56Fbco68in3gPJRfiEDiMr"
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
