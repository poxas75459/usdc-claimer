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
    "hfE2mrjj4uYBfJrdDTZzJK4qbSkkktV37naUBjqGjjXGmqtw6Y4PXTt3eAEVd1h61SGbw9sRozPacpoeLtLDuat"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARzUegHuXfDmi5NfoHRLJzkDcADrAdpgJFNnYBpfW5ou1KhHp8uZY5yL6CxoM38RJVNVcwn3aAwEkjHgzNSqBvk",
  "key1": "5usxYgJMUiR5qJURh3Gng2etuPipParZ7UstdMnS9R5RT8CCGjQ4WyjfBmJtzWX9cfA9By1g36uJn8G1nnWtEsb8",
  "key2": "XcL9iiwoaf124gDkG3Q9Q3vRHj5nKiTZuz4FBskeaihHJRM8CuiWi3hk1YBHoCwwvVSqBdPTuyAPiqtSGZ55Pu8",
  "key3": "3nmupp3rmHRDzrewTYZrR9rY2UGV2Kq872SWcY9VcawMbttd2miMQHLXaTo1Q23MYhGDgTLZL6LZZeF1GuH8j169",
  "key4": "34aXqTgF7to8Kdgu4L9WzQsLLrCuBc4ZApW2fvUCVQcTdMvAB3VFGHs1LNRrm3eCU1HAsZF27cdrRozo4jKbRRKr",
  "key5": "4Ywj6AouqxNA6j8ik7fg9FSXpDKBVNZKNcgEB22naWRHVR34YnVbjgQLbzHZY2w4Fo3mAR6pxEiuR2DbkgcoviS6",
  "key6": "34TBqNXknDuxeoifoQp5zDMho1xwNfUuNixujDGsZArTncz1vthuLsVxYZQQfngzZA7WrrbwARvMzjF7RTStMLiL",
  "key7": "2cDqvjgp7cMA8rqyUxPy3V7S6y7hDwmBMU7hKb18g9SPHvZKLtVHcDekSejehuSduza5t9fsJwJcsH1fJPsp9JgZ",
  "key8": "UuxV7jYrAvTHNJPhaDKywNkGvgjrZn9r8pVKMQmt84Wi7L85JiARoMXKDrrzWQwu15LtEfzry6JkaHEvXrausf2",
  "key9": "2mtWRWJXQ2x5pGr6YuQhBRsBWnCT9qcvbTERsWojas1ezpnuaGUdGoveeuMeAQYmUdBewYDHLCAzbAWcic5XgHDD",
  "key10": "BTCLLZMmeU3vtiReVPoBGovUG691r8tFjsnwwQQ7LMZT1C6THrhatJTwSi6dnS423X1fGBzHox3vMi319r5ipeP",
  "key11": "4bkyseq4LPaVXjCP8d9KBAnGWrHX7awwu7dyyzrRumSa5xZW9zRyb7jY7WdBAs7EyUr2M6447ytd66cNqnZyVewa",
  "key12": "2cEDyS7vHW7Ga6zp8qdJ5aqw5Kzonk6U7417hGVSe8V65ToCNGqjLC2Jnsv6zxrSGN1gRkNMqKhNDV8Pw2viu7VG",
  "key13": "LWNaxxb1GVF9NHtcaECiK2jVwjY2zXTj8zX72Pehq3iVQduF82Dv1VvZuaFbzXQfnAm7Y1RDwWZvxgAqeEiPAsK",
  "key14": "2HfpnjXuUzgTsGycMB8seoxZfiSamc6VetARuBsxiAEuPqfJwUVJrGf7hyif7d8gsn3dKrQeBKDqPFfocs9H1v24",
  "key15": "5X2dPXPVaPYnMUocCwEea3EDntaPq7VeBX5eE5LvZFvG2yLy9RQkcSBoecM9DSx7WYqN66QSzuUGtTngFyvZMQmn",
  "key16": "25xJ6YTvixVmEwGaMH3c4MYxDP53JvPG1A5aL6MwCUnNeGSU2Zj7EkW6UtqjpcsaHP5RSsn3XqmNQZ7N22G5pTtS",
  "key17": "4j8sVBwL63b6CGF9JhifAEsmscW8tbnWdZ6z3i2fvhG2oJ9gSJWDyNcXUrw7nLUtFae9QcM7aoZz2vX6Vz2C4xXB",
  "key18": "5oF4bFtjFnuemPfdQqs5pPgPXV7ePqCGvMXS1DV27HtzPWo3PGQvV6DsKhTWKefP4H6ome3YygomiXJ7GdcCvpvM",
  "key19": "6132M3LJUaEVLaane1ebou8U7pLykiSk2BX6BVLgoqwsJdjcqbonbLxnyTPb3C8iaY3Z7o3pKiHxsuWtWXzSrs6P",
  "key20": "26JGtgggbtDRFqtNStNW2ktB472CXhZg6GMTEac2wjf2rMAbfT9zR7uefhgKxZMwW6U2ASfjwPQ1Wp4y51Ly3Czh",
  "key21": "5S61CsR5Jq3gBnQWHDczo8EC6WPmYMqnRMzRgTT6DmFNKFk6zGAfJL8LvgaQrufQSdArTs9vxaids2JxG8ijcsNd",
  "key22": "5bvLngtjojQoVCwyUBZ3HaVwmp1CurUtVYHg7PhPTvQohjtCw8PBDjiuJvqjXP65wyRx1ic4ziXxsadxRvYTfSFY",
  "key23": "5WJnBJ79ydYZU9zbQgvGxzRrVTSTTR7YVJHugXTg5pfvbdixZsypSPNKGdvdeQhi7bVqbXk1x6GiQwv9MQsQ3AYr",
  "key24": "23HLR3kebEsf7bss63hzQaWNnaHM49YAMfBKB8PSuURrFsBMNSPgsJ4tDcJB3GVCCJNAnXRKFUaSZ4GbfQAgZanv",
  "key25": "44ysYc2duXDjQKtFzxPGu3CkJHFo4E8Ev5kgqwHsLydXS8b7FsGaofWe91ueQmzA5svp6mt3jR6yBPDBZLaNi8RG",
  "key26": "3SpSZgZr52Z9q3FQaSGhsXYigiZerMHRYx2F9V8At23aCfwe2avQ7g3Jfnmtjy2KNvpaQvfa53XmBrhoGcUtQU66",
  "key27": "ZnGULt68ZDA6YnisCxNxAwDdBZLLjf5YXtvYkoPEdom2jR4rRM89h8ZodtV1vSU52Njkk2iWNE6BWCN8nVbFN7V",
  "key28": "2KehvV4Sqtgssb8PG8onAU7NLPjPvXMUrvkLDdjDSdjtUZs3v1be3xpSzCxrS7xMnVqe8rZwm4AgQQwm5ZVV4jXY",
  "key29": "4TB7SbeJVMwPPkZEg9xPVtT95s3zu7LM3Hi4gE6RUWViVo718ws85buZm1csKk4jkaj1ZfrkWqsNAycPxeHuQZ6h",
  "key30": "UfX7KgUNUjAHLPDBPxiBS89Q9LhetEzWRhdJgSgob6bLjDNrxj9jnEKRsuNFWtXNVAzzAjbaJPkX3DPQ3hYGeNj",
  "key31": "4TxQu97K9XCuuVRpSxrmJL7L5LFKFywnr6MPGN78TtPKcj7iQJJas8eAvqsHXZoMKUN7p3KNXRER3Fcp3UgaZgmi",
  "key32": "2sDFWBqxfFykEpRoh6Efknp17UjhbraHWHXiZ2yxCLhF2cywQBXdo2pmpiaJammX11kozfDedw6q6YhT8AEyBiVz",
  "key33": "3JKyJquSxUKy6q33guHbfF8wm85BEK9gwxMwmbbAkVJibCuLGLHGMb57wuSXideZu7gywafXG88GhTEAYDiyFC2z",
  "key34": "3AfQ2kPkxdcwAbLzS6CcZwT6it6iXZsZbUt4ekSVoKdpd9L3qPydrE6Ae3CDS9A17nBVQFvq9LURETfQTAyNa6zL",
  "key35": "2wS2SUp1Ri7pU2qdQoWPn8jWK5EF3GR2M9fHyb2jvtqFp9haP5RSVXyH3977fJ4KpbCUmrkZfPTFH1S8EhrCRT34",
  "key36": "GCbZBMqVN46Lcyb7dzgu1K3FQb2JZXhhtphbBNAfXvWLkJNrHhU1CDxKfNHpptrfuEQW5oPq7VarnPzcyhbXas9",
  "key37": "51EehtZ9Lz9R946juWbEfM1KrCEkEV3yebBHADp9P2tkWkWutLPuRx464zb3uxYDM8r5zb8f6A2YjANXZwAYEJ9i",
  "key38": "3Wzucupex2PL5eDGeNyQ2BqQoJs6qKmBaVZyivHDMRAoHrAYzLssu2i2TaDpjK2kNTQUhpVyz1KBuuRYECU1CA9f",
  "key39": "2HTeFtncdkVUBDxETAw1dgQP7UmTLFnJFMrDFnEPutVDqAvQmGccTL1xjc1zAuVu8Shu6Mxko1Teip6UvfynFe7V",
  "key40": "4aVJtE2Th4SyLwvUffTMgv2Y6mRGua7xNDhGh8GryiDmfiN99hEM2GuS9tnXB4xxbX41UypYBUDENVwKxMfBZJf8",
  "key41": "AsNtttFgM2poHwaUxEiE6dYXtXcbgXbxXZCokFyMpcoHewVGLBADmtvS83VbZETJUCFuNShMjm9D3q6Z3kLuCc4",
  "key42": "3De5RkUKYQoMeCLQzZXvAiqy6AiA1vvbE1P8AyXyza1XcWwH88YzLeh7Lyf3mJMDyrsnryeRMEHqNZdoQUov7Ds1",
  "key43": "3Than9gNFNHDUSassrEB8T2zfgMHeDUv2N4yrTtyQ2QGstbFRpjEudmNTcGwMo3zM4BAbZGZRd9ngQo7BesULf2z",
  "key44": "2vAfe9xRtS8BL2eiQxXbYkGL5uBuwtfz4jEEuMpqB2LbuZc3qVs85VrLJB5Yrd46b9VNsNeqqRfDnHgqanNAQRT6",
  "key45": "5vVG7ENkB1vALdVjC2a5jArbM1GWFdGJ5dnb6aa8b2WfqzZgHmutaJj3AesPwmSoDYXprfTdsjUWimMKjbcidwVY",
  "key46": "2AzxQ8CFx3QT9iGxxjR5FvpDUqdxsfuN63YkWF7UNoG8HeCUd6JKTCoBu8vtN4uy5CpTfapFofXoae1ePkvP3sWN",
  "key47": "4oFfDfrGJpQGdQUGk3jwELDzvnYqxQrRUo9xL1dLVcBWY2GPfAcaz5Bitt7GNLBM1rTakViNFYMNQR4FMCanQyiP",
  "key48": "5CMe78Y3BTZKGt1p1W8ezFUWR6LVf5WYMhvX51a82J7Dut8o62ApME5ynSZvoEvLVMFXkShQM865yQXN3pa9FGji"
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
