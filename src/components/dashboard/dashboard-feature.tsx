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
    "3csX1dJNaS3GVqAFRGazdMVos3c6pGDgeuk3QGFrEAtCZQsMqRAGBfko8EVVtaYF35HvrTLFLbVVVBExt2x31Lbd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39h5FwRHJyQGkeXdgD8WtyNAkTTjFs4CQ7rmtuZBezNEFYxE9tGZYvxcv1bC8W3iro9GEZK7MaRbBcfVMtPzfGQ6",
  "key1": "QzdEB3HkgiUYepNpqFH7wHuXdJgEbDj53bm1oBsGvrXGuK8fwh36jULFUEXny9MWohrQvrqhKvFLKscqG6E7DvE",
  "key2": "RiHPzLkeCcbvkwzTZafY1MCcoQBEEwHrAo8jgvc15LGtoQwC2Sc4k35vA7uN2DyXoioBH3bdNYCDfSN9koVn1Uv",
  "key3": "jfJMVdKRw5HoSX2ZRs4UJd6YF4ZrundzSC9AyDgAz2vTbqWjGiFtoARm4XBvW7S9MPEUxP2jNoJHRaQiRZfhJsW",
  "key4": "63YqBgJRmoJBcXyenHSDhL7PPEc4hM9S3w4VoGt1v8AEfMbcFXZPqQsfBzCttyqCPXspWFkKXEnAsLgfStxYgZrH",
  "key5": "4BiQncEhBjV4aU8x3FBFFLo9gibt2wYun1ZTHMz7gvU47Fv597T3o4iWCGJF7te7QTXEYrX5sPmkP9Q52AEBBFZJ",
  "key6": "2JbByUBbmpRaQBaiV8cuwJaL9MTXFk7RUGkNLS7oWQWrn7wvfbGXg5Q3gWKToJCYVfnXFP7hxbDFadG46xPY2sGk",
  "key7": "2UpKBVwjRY8i8jAFESkbRY4Dd98kvwMiTAJAMCVFvE98nvoqKkSFon6o48X7gywu7FL2Wdf7Ftcv38UqfuvABUpm",
  "key8": "YABcDhSnndfp8oTQKxjQ5nkm1tKfSxD5mQYn1sP1ebtYCZ7YQe4QPdJHY36XUkhVcJMAxeWwAQ6UEPQPoCB7pS7",
  "key9": "5JdR2681goEfd1JR8PBuMC2wC9B6zR2zJAUmarU8pb13cuxbKwZiW6iCZJkhrb4hKvmxVDj3hhR7oep2owqvypLb",
  "key10": "5PT4jDTi2HTo8cPZJHHcNAxxpd3qH8FXKUrxZ9Am1SMbmoLjT8QGfgJpo8nkqAqYV9jodQQ4GJneJAqe13Kgon1V",
  "key11": "zrReYns7PFtzWzH5mP597AfetdJaYjcMdD1ej1M1optGt3qnA2k4w8fdbMcGpst99ehALWWHjMSyq3vBuCdCahq",
  "key12": "2oX54YytUeXaL2RRhmmmuLyHCzSk1Rdrm7ySmpKdf5188teKygJU3jdAgvvBxf5tjacJYrrauyEVsn3YX6f5BuFH",
  "key13": "5LNu8r8FGGc9nhB431fuuAskAxH7bQijr7QLNTqVMyY1HQ35i28aGXPxhyMm4HD38xG5pVWxUXuNoSkNzKDWE6d8",
  "key14": "5fR7R3RyLp7dFKWpKXoUd2yMNyHJuJXLC3PCCsudb7TVUBLC58m7n7xBjpbrFrn8bNrmdGx1J8YRrmWPjbNDxvKY",
  "key15": "w6izi87xxqBHJGGsP93qy16tUB33iR2effujUcEaUzWJyf3JwbiEeoaYdFLPXPAdQrTobZTX2bQBfQHQUhr6EfP",
  "key16": "yz782EWpjVnfyZqwkhWQgMAVuDf1wvAJo6L3DYW2cnw4YNHVRNZJXYhsZkEoZzLxbUBWUFnJYaT7pSZk5naSXhD",
  "key17": "2JCjPymPRpcQjSLg4Z4PprrUKcrqudzpDps3PjSo4qxLtGmmGZKsin7N1xic45ZLUEJa2cKKD1fGeRvtKpCpTBqi",
  "key18": "3cEYrDqB7Dkaq6iWr5ywTnQnHmvVoAjVq6REFRoCbVUH8HjASkUjAhQCTwojYxLMBfnVZ5Ao4kGuc1CqqAbEW82k",
  "key19": "5fPtJQHbAU1ch4Wwj71XXKB2erUkMngoLy9yYxcunUqhywpntF8mLPRXWbQSUvjD6h4qc4uFmQhXLMgETgUuCred",
  "key20": "wZex1MUUBXy7qRSiX2fPhHE3hMTibDjLZF1WBHkTPo2wLVzreQXhHxhrdtFuTpNoVz6AbdSaxsres9ZuCcTiNB7",
  "key21": "5mLLkrsmHosM8PUTdnSBGu1Wi56zQGxpY9DpdyaftyNaMdEzJrUrpBfD4Uzag4r345b35NtyBqZDhXq7F3Ee3d4L",
  "key22": "3yMtis9PdMWYr6Ehki5YWiPo8T1cJrkVPjUWadoK8x8v7VNYKVuQgqm5897YQ3m1Qu39iqf2FwTpPHb4DTMVCxY6",
  "key23": "3kH5YCL1wSVvFL1QaMbp7kbDZLhCD27HUdsK5uQqYZWNvKhcJkVCZuowXoZR4nTSpsqQtUmYxr6oUUgXt4eArJgL",
  "key24": "63iCSsJenHcDfUNTTuRgWwAP5hziUa7xFiSqbkwCS8KiZdJ2fs7o5oRSHHcg3LMt6cRQdGCknVpzvXCwwT77WPuN",
  "key25": "48guTTZ3fpM4JWR81Px1U2N1w9Ms2191tKfjXgBM3YxDmxtQBVQNDLrHDMf66GeXCCdtCG8QEmnW3RX9QuZUDRD9",
  "key26": "4SCZSYoiuYj2gtKWqKMHcAWAAjUgf8ZRCQaiytK6ZYmGpjHWPprrgZ21btEsx3rCSYSX3BsTKhstHywbPEzb6N1k",
  "key27": "5XF3WcC9VtTdmZKAa2JRnZBGHiCmmaUTKraxZ3F3FPCjvkzL7MK81DEfkcndZRLxQL9476NBnXbrTTYZ3ofz1iuu",
  "key28": "3rjEsxHcVKPwg3PPd2YdCFzhSrkx9FWaHuYpG2MLh3r9Ryq8cNePqKATDqWGvWjPwogbf4bTG2gswnVFqFQHg3fJ",
  "key29": "5dQTZ4vLj1MqsgeDe2w9PVHmiKYVjf38T8ZKytzxBfmzB4syMc6ZxX5BHjZ6bK4bFU6vM2KYc1268KdMuJxYWj2N",
  "key30": "3jVNaXWHFZT6Hp4f7Sipnx7nqvGc8shQdVJtzGoYYqucRZXr9DY3kKpPHeRSqN2GPSkz5D2BzURKLkCRreKvwYcv",
  "key31": "36YVm4JfVBJZdwxgXBLhXsRo2pVD9S3wHzMVJecwSkrY93J2cov4zGHxjBkaygXbw8wFnUKkGuq3jH1oBJjpGivc",
  "key32": "sXQPBXGppuHFpfmPn2zKVdxtNVCp5iANPgGWkTWkbof1cMWA6QJQNrGBVyMujUJEReYQidTwirzqhDAXADUhUeq",
  "key33": "5id5SUfLFLf451Vm88nFFg2xp7Tbn8A2EopQw9odXsZaNA6idcWCbEm2dh8wudvy9jfGgQ23LeActbKGp6qKGyV3",
  "key34": "SusrbYdVRjVbCxrTBGZhkmgoQLCBzKkaU8YahKVFn8k7UzdYHSSQBMcoiEEzmtPnxMSU5ExKEE6pd9dzrbSUDNv",
  "key35": "qAUgAgiegfNS9SttEdMTp8vtoZHJ9FpriUcixZDexj1voodcgifZQeWMTzhn4h843GAQKTjM3G7LZo7VU2kfCgW",
  "key36": "2m5xk4qZH7fHEHH7iuigHSbrvtUHqzGPhADsDyN4dmkx8tHKxrVrrwNyzPQgPcB7bZ8kE9hUkudVEt54DUg7Dgsc",
  "key37": "j79sqgk4qnxMuj4Pj4ZD3abaRtvxsEFe4qmoLAsVJgTLA7rsjcitQZpMnBE3oEMYojjRPucPdiUApW3gvTfDwx3",
  "key38": "R9g1gwxig2d6gnU9cLHG847FarCF6rvKm81GanMMoFtMCr8REbA4DxozYfkoGhZvvrM2yZ2jTGot9JuzycyAqyS",
  "key39": "3fVmSqhJ7FQtAa4hRMy7yPNYwnJKRcpEjeBsmL3eVQbw4qnJvkpCGyg7qjQzSmh37oR318TDH6ya1GP7USkFGdST",
  "key40": "CWwYxDLvRgKRb4vfEh8EXm5kypZNcx1hFjGSkBy6DoJB8b3z8WZEFXKz6UJdoYh3G4fCMHamzFQYTwWpQToo231",
  "key41": "4wbY4atgUgZ6GyrU6vgVn5NaNsqxTBEQAhn76RN59Ayxg7ckJoq5qB7aZ9mAc4CAeUYYemwFiMCzCKitbVrTa51D",
  "key42": "ZWUxfVEDwDmNMiDRZYoQd38uVsfCC2u3YThEcyYRck3W8WQ25hrCdBPcKiNBfjAJiQFZW6qbFVMBNK3hXvQGqHk",
  "key43": "WNYPpsFVyAYyy5nMhUUmqxpUMDY79KJsmW1BxsevYc7C6RKn1WiyPhFdfz8KNM8JnhwnunuCSHz9Z8cSk6gRq8M",
  "key44": "26JM7xLxPDSFMhmWF1jHDTGCaVvaA63h65s7GSiRaWnJafyqVVdmsc9eHGvaSfA4FcdymNBcSDZ7tW8Lic4q6oCG",
  "key45": "Xdvd1rkV3qTRk4AneEedWNGakxp9vpkTVN6aWwLWGLYU23fvj6cSRi5N4UcjeN1mHyNWdbgJtLAW77yX285FSPs",
  "key46": "2bCqCJCX4VRLtuejPB14e4RMsYanstW7XtdzDA1tkBnCwDgfLP9JSj6d9v62opCjPH1nSd47cziEAtFAUH4ayHqL",
  "key47": "ftdsZ2S7kX793ezJvLdCQVuP7hvSjqs8MoFxPzTajPXLR8c9QmC2CPSCVew6eJT4LUH1Nyw8eCBDEkVhZNnn8HW"
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
