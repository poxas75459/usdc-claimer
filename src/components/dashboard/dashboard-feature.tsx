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
    "4W4ZoAZcTrXCKbYydkyuQE8PqkCgZNkyrocqikreL4i7Ld3FTyNqxQMeL6AeVWVMxaE73JPo2JdtAfxyZMesXTbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pm3aHdLdWBfFKaGCwGN1tH747qSXZpKGJRqCSPajwsyuj846SoRJyoxTAGYWj4ziJbgHuWGTqEfsKJbSDBvCduH",
  "key1": "3g6CCsF1edhPaShDQztb8VYTHFq6SBGra72mrpuwRUa98PbSasUBQkSP8bS1Smg2p5nQCVuUzixxTVcKDqhPu7DF",
  "key2": "3tDjs5pRr7NbjFThvW2sXNQAeT53d96a2ULNDeenPH3BnCd9wptBJZoi1D2QCdMSMAZj66D9p7Ztf4zAwrzzkLGN",
  "key3": "5ZfKmDZdMUPxodKDaX7skUmas4hkxrdEpb2MBGDsnzWMnz1eCJy6ku94gDPLdV9VYbMNfmtPGKCxiDjATHMUdRcr",
  "key4": "2HM2nVRTptWMENsYRjid6CkCj7JNcaKXAo4mrePaZ3ZstaJV65MHXoTN235AU2AoxPdmaphL7hEu9rNxzBtSXGyz",
  "key5": "3qmDgZneBG9Q6F3iGJ1a4Zktt2oe9UeCZFZ3MaMB1DX55WUqPQsdVLEBBj9bzfzcFZCu4PxCDefN3CZFBHdcdtrr",
  "key6": "3TCGhiy75T4AwbdwQ6ynh7jARRVJftJgPdGLgaD5toQAMo6y9knnGAy4HU6k1KeMJSY8mgKWibuQBB3A3GZDEuym",
  "key7": "2BqPWux8zARr1FDuHj7Dp2RLLirnwZCGg4ykCvNcibpm2jG2mBhbJWN7WMgUhURRHQxtTkdh7Qp24F4KPqegAjrm",
  "key8": "2eMeBpGp2RNcBgAY4Tw1d88DWryoywDz2t41fbkfKkYLW84aUUUHXwVQmPbsfsomEtT4fh87LRAe1v1ACTmgyTpW",
  "key9": "2kYdkppMDFAZ1QdMH87kB6W2UJHGsMxwPACCHxuYxcFUwLVFkiFKfvukRyZ3J8ApsPRsrufLiyt3o4xGjbbUTbb1",
  "key10": "2QaYPCBVDuc9vpUqfojzQPb3y9uGgYZXEfK89Z3Tmk6szubZGddzVFKUok9fmPNed7arY9uvx5M3WoA9zF7cXQag",
  "key11": "3ULWvs92fNRG5tK5FvAcS65wgFJthNziFX4WCDCek7tnxthoLmQvgpXVYQtambMrCHvnGgxJfjKDAzdstgBxeRe1",
  "key12": "4zXso3DYqGmTfTg4CP36N5ukQ7w2GyNcvg2oq1vjMWmbWJmEGnF83ctQPDMN9RUfnaMF2KdnUJD8USwKaQkzgBt9",
  "key13": "4CUPwDqfcmttVW6CddvLesX6kirQgb8mgnKDzmo1DRFYpsDGDiuwzSJ8kkpMnDxbjrrccg4oEFoL2gnFtMFnafBe",
  "key14": "4QLko4siCi2dSRrJDrGAFELRUdiHf5o6ZDZmdgvWZNUMDXtCXYYo11VkrhrqL2Jg4H57qspFfUWA37h1Df21VTQS",
  "key15": "52KUP68JEgx3DD6fazLz742Pa9Cq5rebbVSpMGtwTUbDYMmvNMvdc3u2qdY5UY6BNfb8TiBGVsctbd334CC4vyKY",
  "key16": "5VH9ftkRfWMWRhi5h8zZod4fP5m24cszZivA373VUYRou2aPhLFewyCwsYF9ChekSFUBqHZHWyDVHqZfXSX5gkK7",
  "key17": "3RpsqgqYYUTzjxqB7VE1Duk6Gnucf9jPj7YpDeaSuTA4n5T6fwLWbeyCWv6g38mk8thjygdkiLQAYtLTxLvrZijB",
  "key18": "5LWpw6dwaZoHot3TBkNmJt8HPtSqupB4zehy7eVY9QgaZ8TTo3ymo6M8Z2DhXwKdTa8Sjcxe4PEChhg4QkbT4Pu9",
  "key19": "3rkdZaj6qRvoqfdfruk9XhJMviV3vnUBraht2o9SzUbFkU3b3kz8E1VU6fjfD4fwrPwaDdoBHm1pQG6TesxzTeqL",
  "key20": "3EDET3ZT8kXoADuSse9Xw1hMbPf3SSBW2yg5YZiw7rTjjhXrSgoVbhZAJm1ECCAoBemKi54ZbnzUagtQEm5vUhUh",
  "key21": "2Z8a8c1ecX9PgjEWCLpwTTndAbJsrvyWXaBgx8JKDAuGZn3bhejdzpKTe6jSxhccuvgBpGCgAHXzJbs26Df6DPvL",
  "key22": "H53uM9LM5v1JnaNRGTNoeQLvHHXsZAi3PrM1oq2Ru93dEmiVQDamNAcnt8o3xYrAubkKmfwjaWu45LPorDPCJtX",
  "key23": "549HvfeuraBD38r9DXBTrh8RUvr1NYEwABC5TS8J2Dq2et3wjTAWbxs2gjZePB2CJPedsk7ZFQfRnLtASJYTyn6y",
  "key24": "3FLMkachNs99KzRGey8b4HYkpBGXvid2pPYVWj8T8XMUBs4bFnGiVUxVBpX6EfDsuMWMW9FJ6DDqK2rDnS6o3ixj",
  "key25": "5HJyFeRBSPN5RkjQ2WLbnMpaUUycXmffqwWtASwgnv9vXEpZ7B8PES5YimMFfMrdm8eotWzSrxhwMyiSbP9V4zmN",
  "key26": "aJid8WMac4ko9NGfRpnmudBmymPd5p1Cv5PPaPP44zd5FKmfkGH5LdFoV2bTDxRC2NHGMP53mUBNovHvPkjeoYM",
  "key27": "2bDr4TaUzbxZk6Xu58v1BfjxFmroqsWTFWZ8zXxy3wyCASU12Gj7AztLdSYn8zFfE4NBb1CX12rWHgyGa3HRyhxf",
  "key28": "3q77kY1FNnRAEcvgdAfP8aEBG2hiBAYgfMt8kRJQzT1jvYx78FVGATyb4gNPFuZUPtYx9dzehMk47pvEU4wPmMtD",
  "key29": "39hMJ8KNFfn8J7KrGpT8xuANFzfbnWgx1eUSduh1RGfL28fcoChBNXJ947YffyzJWfdbUSWZRUda1UTuATWj5KnS",
  "key30": "5LtAppPMgTYaHrrueLMFhSigsLU8trCxvZgJcvXX8QZx7XMt98VTH3Zps5AuJbuDqcQWsWoJenU2fAf8GxkyPVcD",
  "key31": "3zLGQvUThNj8uYupWdP93MFP9njmhkv1A6rGDMGXGDW3jFdrQqMvJCQSHuss4nHzrSgQKEYkpLB6XsTXtx6XN4ZY",
  "key32": "5XAvZqsrD3RiFc7ZzEPYzWVyPYuERMjn95EGafyKAJERAfXXC17oewj2PKj2wpgtUCQkLQjxQG1c7D5mx1cja1Mv",
  "key33": "4DHENQWnnwSBdfPvGJpAxmhpMHFViDX5JqoNmvc3vWKpZtfLbVBXFUZmq9KA7bwYDWTP3sSw1q7PiyPgp9p255tw",
  "key34": "2fNUQjdu4A8XydxDbiuCQF21qrwMustBna9YAMT6AUQUM2JodFQDWPiCUvSnmU57StYT6bu5EGm76t9SYx3LoSMj",
  "key35": "5eg72RhBbThZMKizjqivbxVisdGJazG88GCQfVcaWrPYosGtiHcigP2SgUd5CCUCA6vbZfXMaiKv8X4gSLAUDwJJ",
  "key36": "3Q2zJwzacUVpteyKtjufe6Dv8XqSAzrwTQeZxyyZaXyi7MLevo3P6AcMJYw3x4vv38QEa2cFLPG9ea8oTfqWhkJo",
  "key37": "3f7mq8fig1qppPcvjvrqtVGLMGoHCuJGRnuDPjajAqkaRNqX6FhSAMCcUP6nhLnjeqvVkfu1WktRC632i7EmZvz9",
  "key38": "5MWq8QVKKw1L93dUAEU5xcb8WJxbqa4E4UYk3TjfHtdAyZ2YBS3XK57dKPgRjXnpeBp81s5QFLfDdb6gwce8Lbnr",
  "key39": "53mVydG73ck6yqVcSUwLsCn4GfHVRAom5tCfYPCoAoBT4ByxzCqAZrS5pnTZLgmmNdV78bqynXaezYxQnS8iYWcQ",
  "key40": "4k8kzko7AARhEHRDN94yK9xqYLC5ZY7mjoXdLw5fdhNSS5kRQK8hDsKE7m6zQaQszY11qF3dqdNTewTYiXDRy7Qe",
  "key41": "zRyKJcpunnJeg6rUw5BeZ38XRTkgRY3FCe9Z2tEMVb8dYG8YJUA58QjbgYD7fPKErb4SK2yFZ3F6RFEdXxZfqBj",
  "key42": "39wGSjuXwVYbB2d92hgWyNH51nG33hULNGvcfLee5ejEdgEZtrMu5dbPopqTG9GiQ51eFYZutgMVs83ctcDUqu1j"
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
