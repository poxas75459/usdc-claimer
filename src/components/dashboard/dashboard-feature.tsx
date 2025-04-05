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
    "3YorxvEBCZQXWfagfhthhvBpP6nQc8vjWMdCxXz4dJF2oiLAUVzHKvQtPqobbdmVxKX4oZS5DQJauaVGU2PHPZEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EL54rhhXbwr6ZwfPZTCpUcUa7XyrDRTLVnFcCpKPjhgG4Sugbso9CpKi3VgSKnMqCRDYymjQanG4FrDB8os4RFW",
  "key1": "2BdiLeXMBVUNDSwXojptgGgBFmKjdMKPNuwjTRJmEpJmYWFnrDPQkGxGCQZgJU79qn6kvVvvT4eAYXFi8Ysf5bL6",
  "key2": "5XSuT6XFh5R3RnrYsTRcfGMcwuuMCMqZZkM9XmXeby3DXNbMixtKR9YQzqmMwFzwUcPCWCZ1du8inWCj2yet11PH",
  "key3": "4DtNY2LihxNmANLuLvdHV7wnFNo1581dkSVQyvzboLcBUmTWcmZPsZbbjX3tbECGj3qbXkmU6thMdb2gCx9HYgcE",
  "key4": "3nBEztUWtwiwNCrMgchyK1bKwbULQaV4RrRnk25iv7XnMdTGcN15SG5eUJARazAG8NGr67a2WzYfp1QiXJ1TT1Us",
  "key5": "3g5ixtvmStiCj2XpwSdFN7raPHs7gTPhnJj3fKq9ZKBAU9C6J28woDt9eT8UT8CZDezQdn6XtBC6CdqvmxbN9S9S",
  "key6": "4wsYmWxTwQuFH8xp7L9L72aEMY1a5S3aY4NgvdLyTUbDZ5K5WQBvP7DkzsYVPpMjTmvP8F8FqJnqQ8ieiQjbFQmU",
  "key7": "2Gbsne4NF5QFX9Rw7dZ54kK4q1RoevusXrdEwffBEg3jQ94rQbWofSb3BW2DHNrAcLaqPmfAXh5HQyhSd3vhvymB",
  "key8": "4LKKzsbombvkoNdgL98jv8JC2UWz5MqZnKJQCTVbddLR5XQBQR7GUrh97p3ignENN2daD6swxr3JyfthuvEDiEgX",
  "key9": "4fbMf4gghJ997i8mpt9oHbWH3y3qDcVLa4CuzQFSrGJAr2WC7GM3XXJYjAW3uDFEdkhfMLZeBJgz8oPg685dYgfq",
  "key10": "5Thw6mpj8JtZ37AhxPZ4CuMLqHySoQCRk19z7s5o1cqb16FNbVLjktSY7SYJfgSb9kH9SDiFQrNco2rTmWhdLa6z",
  "key11": "2FUMwTsFbSCPHbWKAqvHjQpT1Gb4n3ccHEa5Gd2ZsDuVxN3aLtEAD8sFZuFiywUbwFYGT8xsGsLnn51xveScPXyv",
  "key12": "xs6AfPaCDz6Axz1cryEyZnT7pHKVuEfybM7quSRm2yQtsrZoNH6aDhsuDESuLhVpP3zmTGaHSjsc7Fcjyoq56Ux",
  "key13": "5dGxUPUQfxrrB2S7giGdcsYeX5KGSTVdBcKg5QSMN73wycvYVdGvPVym2UV7hnbugrpEmTGGSFpCZAPUHuPPe2r5",
  "key14": "3DQxxpr7TAJtKvd4V9P72hHLm49pDUBLtUyUQ1wPvo6xKTki822D7BVidmr5BAfrngaPzs4TrKvJdh1aCjyX3Msb",
  "key15": "4UYGvrEfho99AMvnKZGf4LtPb5sHE8anAshjV64BfTPS6epJSKpHc2TwM47hgNc7WmMFapP14L6ZHFATxGQWqs7g",
  "key16": "2isKA1D8t3c3FjjgiN1KcQkXmuQR1VuzWeo7UiCShNXbh7D93ezJtyg5wBERPJLPGyrGf9oszFZRMJfxPskVNoPq",
  "key17": "4G7hZE6rdbSYcjXA7sC9HWY7qU7UzMb2KW193Q2BAtpMecyS6FfDGc7ydsRvXSs1kKymMTtkPhC1MoVTYZgzecca",
  "key18": "4iude9Q1wqA7LZK2hBcHcnzpVP8fYFnpNmkwGLW8Mt7DFVbkqfFa3TjxDYrmiWvYqnkXRNCMnbZr5Sf6ZiMRTrka",
  "key19": "4T9Gn3Pvo3rJDav1Bq2CYrzjLEDqXxUTquEPE5FbZvjMV6S4MqkHK75DTmvesEpEo3nQiTw22tcWRhonWncXbfF6",
  "key20": "5GcvQvEYfBkbKsD8NSj9e9ZzXzPqa4iP1iAZyU2jb2sqMf6xqRTSWPp324mc7fREmwSwyDJtXWfJEZAdfZqHPpG5",
  "key21": "3CzNwAxmFWqybFHKKyBkWZgSoKJJ2gPmCpj2NpPARYeugCnWMDFQZhNuNm1oeSzYUVRHNBTBaoVR5nqREtsDeS4R",
  "key22": "41jC5QP7x672bHR1GU7uUEVLPUPScSu2nZm3VjrXXxzXp8uenHCwdhkZQoYUM8KaEnocPdc4RyS8xRiqeEWa4Qtc",
  "key23": "4Tr7GZ14GUFQwoD3KHL3LU7G9WJpxg5zbrqsBWAThmeGpvpz9HGC4w5WfSPXwXDd3eZtfKpwwiTVpGzEHo3TsBbK",
  "key24": "2BsC6un1x7SYDxx9fofqmEFxXh5ukJdThdH2HL9eDjAjt4HPxEEmGmxF4fFmE3aTU8Dy1PdTidYuwUvkLTkQ5p1Q",
  "key25": "2aWzrKNpVSSL9M1xGbnb1ZUeiSfz1aHTEJM51kXqm2bJgonLiXtdu7zaHzarL1KRT3SGoSSALRwu8dfGyjVs75ei",
  "key26": "3m8gu5cfS5HW6oDAZrzQzxPpxZHLaAhwy3twqkbHwGDvkHn62vkU72r4KHQdGrQmyYpnEW54SiYs2725fxNQHCBh",
  "key27": "2PYCEX21Y1UareqZPQS2UZnD97FQJLYUEcd3siRTE1es4po3p4KyTKicS94M1YqTE9KGtRimJan6bFDtq2DxqCRH",
  "key28": "4S8BGVmshbMtikCNeGKL1inzWSuhCRS7yBzPiPeboh7Rhm77E8F4QaLYEBozGCE7gy5b4q91zJELVZgPy8MRVBC5",
  "key29": "5G7i4BVdCU9FDeNYrDiGrHFipWn1sWeGoXxGJWaKsHdmtwqWitsFB6r26J3twNxTqUHL83pzR1Tx9gmJvfbaiggA",
  "key30": "62HH6SaY6wm5oApESmxBLw5sbJeub38BUvPNQjbXFYtwZwdpUZizND5PXKJqzhu1gnmLrwu6BeVHQ1jw7hAJz7NM",
  "key31": "4qUQdB8tdxg4QpoXBohTTvUhhstzUegF3yoNKwNcQJNtvSYkKfA5cAeowZpE5BP7EpdcHpG5bxtyJUTyVAcovSYs",
  "key32": "5Cs4kw3gGqybQdxGBmdKGENExEnA7oEkPynPZSNV2B9CBQRQt1swdrW5Q18CTuTPXrsJUAW6X11Pd1E8LsH39PgC",
  "key33": "2esRd11Ar3uy2gq6u9HsrM3fZ7y6WhJcjkLpJTzBbUrGNc6iK7Z98gfikFa9k1CmwH4A3pAeDaqtGeiHy29eidnM",
  "key34": "QgNsmUiWFNyrpugFB4U98WMcr2mBzSDAmpvMzVxzS2CL1VRipMuuufba7LfE5CP7M3c7FMggC8RRhir4JcCQKTV",
  "key35": "3LMPHqXv1q8mvi21ueGnKBKj1R1qsJLe3U5hmDrdAzrFBSARyJXap27tAN45iz71yzF1dMnHaxNumAhs814tTiyk",
  "key36": "5VkN71VmqsvpkrAXMdbeyiEGGwM5Xux81TZzjdzy5Kbb4iSqmJ8asaEwqfphPCiQyimbiMh8DyoXtkZAiCvXyfmV",
  "key37": "46z6tG2bqwsWbJiGDimweoKk4ubDDprCQugKX5UCdrUVvbtHDfgo746koVrSVcL5J1ELbVoL4gBRFWSGDaZHW3tt",
  "key38": "3iCHFjdxJ6LwcUApn18MReR82GGzH4oA93G7zeF9t9PDg8tL2LSL6Rf28XTSjjoJBKs7XzqVLRKqQWA3V8cAC3pT",
  "key39": "3fLd86tkKVuvpjDuRNhSJpU7jTQj8EiR9QaekwjebJ8MADQbizFs83HXZZim1ssGvSu7YKzJRNWjZXPQQ31JGR24",
  "key40": "DAZPKs1SGJqkmwjSyNqCwcC8Gzes89BYnuqDpXvN19WiAfNjfbYbuiGboqaSqiYpDTxPDGZhWUt6LPzQyCM61XQ",
  "key41": "3npRMSUcf3xopfAzAjvoYRZJHfiDAnKQMzFEvmWH3Wqv8F4jjYqz46VU7yYTcnzhuy6HvRZut57yehpxyAiCEmtH",
  "key42": "3ayhHx6n1oFktjH6DWcx4yiqkjtc7eH8aQu44Yq7f8pLRCC4tpzfzb6URPGSK9Rhj2L7jE5DTSHBM5BTy1U8ZkLJ",
  "key43": "dTVb7B3UwVm8DWGK3jRWeTEb92ptQhmNWJ4GV6RsU5d7RWFGCjc8zdNfvPhuub9SpL81veLXyvacabWoGwsB234",
  "key44": "3CYukZfmpq1sEj8NRLxWZ42MwQHt6MiNjRJRF2QKkSPAyNDAXpHFf21gdbQfh9JuQRHmLeCdSEnrqt56st565pRX",
  "key45": "5umCj8EHinbwTUSzda4tMZyHMgwm2KyHp4dhHr7fPep1FZueJxoWLAs9cbnw5FhJH9jMcrpo4M3oZqwCiQPPNbNd",
  "key46": "mM6KqR6XmXUQLbjgyi1WHGCNP2DxfSsRLv1gnfQL3YRdeZWXwNJbr6qcRmwRZPHgmjzw2q3hstVAQi8HXu5tCid",
  "key47": "42hHGZUowi4CGvg81SEr9nfLhjSpRooEBjaoHf6Ssk3nM2eHKdEaqZqTtMAkzFHzpRgCNe8b132gPubceS3oG5qo"
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
