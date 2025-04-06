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
    "5rno68gQAEXvW8pQHbbbpqVBHNKyVYEFQGtTaUv15T27qGWiaqPccSU8H56UYP15wKTcA4dAySsmXCk1y6fmxHxM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GQToDWB5fu1Fvdqs8CWzN8PtpJhDZmkEjn4G6uGHNJV5bf3DNd1eeSLRWudNUswiPkWf2SiYuUhDy2vmZwUvsUk",
  "key1": "3mpGx4P8svFhtBL6HiE2dMnJb68jGmmSbA59T1XkAGaUownAegom7mAr43RMPD1ecWsvivqVQoGi9xGenuWQjVh7",
  "key2": "4rf32cqWA7P5K7Ps9eHk9GLiZHSFfiCv68AnXNVp9TLKP1gZUCVCcQbME65QRDse85AhipNdWgP3xi2fMLmJi55k",
  "key3": "257eBQGqb8uzwBYwmSP59WSPS6bRkP7Va1dPM84hXBsLabYYs3UPeKoHacDSg1Fj9Mph2sCzZpAvNHxkPGzoVbVx",
  "key4": "5GmFwnnNTGmPiwxcrAM1raLU6txfP9kD3FTdPaioKWbJewULrABM5jJDTA3DxKrKMdfJ9ZAG3bZBWYv9KWXwUJLC",
  "key5": "2kP5DgKgNfwdFFdcxMtszSVEAuiaeM24Lcak1ho6f5deneaspGrrxPbNNPmGj2eYuujqS2kCMuF2oovv3AkxVG2P",
  "key6": "41BMqzcYp8eUgT31ZdMgRV6CoL6yWh4rkCsKih5ChfX92ucYmMc6Lpa4h89o11LYmAEhBDhqgArjbHconqW9juYE",
  "key7": "5Ux595LhfUDUskLVVpePEAnee9Hz3rtuh3HmNEwfo4td87bNCTyV7jCVMhhevNRaCoy2RvqHkv2mPfD9SPp8TtDq",
  "key8": "5guzyDP9yxYnMnCf8vpvZaEWvcbe9XxuBPUTMCuNgdJzrQMD8pfqQ6DqX1We7kfLSRv5tN1NpBufyxzof59rzqoN",
  "key9": "5qBMrRnt3nTgekjRtyCDyTd4PeQQfZgk74XMj5Wn9vdVvuvf1waBpq1n7ngUsUDg8JtjcVKG9mhYeTfywD3oTKMt",
  "key10": "4dBa9GaQ6RAeJmDDCjkmizn41RUnnPPmLpBySiaY8jUby97hQ84WVLRb1bw8gptcfaHQ59TaSUsGBGcLHRUBFvYi",
  "key11": "3Q1RgKDuF2ddjRk1qoA6V1N9X8QrFxvCXXCVoJcVGNbKxNTywhSyjbqLubkG61d9ShJTMsJdSkxmYESV9KebU5oH",
  "key12": "43dVQ79NcJhHyZGnEGo6urCBFs9wkuFH4xcnHYVtCFdC6T8qqdDuNH7PTHL18WQgeYcPyy3XGvSVcHJ4QCv6AiPh",
  "key13": "26HpSFNsL2uSYGJ2mArXL6rxM9LpKUdY4YjvdP29xruhZLhSBkmQjJsLYcFSRK9c3KdbQZWqd1Yf6PjcwzbxNptk",
  "key14": "5ieXJMgegYQeFYw222FiBJUgoCNKYkyPbeY6iHMJa8pr3PPc3AbX9swgZpqQn66Mxneby8FB5tv1pFAe2CNmjdp9",
  "key15": "rUcNekPtYermL711uCtQhj98929qcAnm2TpNPsKihmzqSV59KXto2MsNsK1t9BivJYbJHvkK9v162VcTBvvWuxq",
  "key16": "5UquxzMFYKSkM1FEUV8bbAKQkxCJqgVdPCor9DrTJSz7VsQXRQUbMv5TKxCKyxurUhEauNWLtcFNAo9FdQA5Z1G9",
  "key17": "5LguLQ47Na9Apb5o63JmEkA7ggiDeBeGFT9HhhBqSSmyo56k9HTH4rDukwy9tQrJXaLa5Poztba9c5dZMAA1HD4c",
  "key18": "37MFs7pNDBB4hfmAhdu8254gKXq7jjwmGqw9SK9s27s8ro1B9SS1uGBhAejNkT4DcuW2UXCqdbEuBs383bpA5Lbx",
  "key19": "5XCEejYg1rozzFBkXdZfaRZfZvGtLJL6gz765dJBGX2g4sKM4AQcA3DZQyuBsmrM3s8a2cqky2yYJk5Fj3PrVGPg",
  "key20": "2uac4L1as99GdgSZdRVLw7GGyqQnzWboEtznQ5NpMvxXHbEAWeVkBdSV31PFH3pj34sSj71ofg8kGLFNAj5J1meX",
  "key21": "4DB76pWG9jwH54RiH4ssZWHe8WRxfuYsC1J6SkSFTRZivfYrS8gZvXNyXTAw5QgUXgrZsd25dbxH4GdQoAtzAc1d",
  "key22": "275ujGr4CRUjoKe1GH67FE785yCD2Q6LQRgkC8BPzwseP9K25mKzC8gNdTeimT8guHvxHdAsDxH8Zi7nG9cLDTdw",
  "key23": "pPNFYF5YVpXDVZwb4TbaBnButTvV7kkbZwHPqq1eqSMZsAUBhRbsy4PGNHNKzGcXSfRXswuDhiAtsrES3zA6F9E",
  "key24": "5oqmAD5FURZkjzoD7zZxJrZhA4bcEEpfXbT8ciew6q3WWvYQ5UEHs21vwFD2qij3LD2eTWw2xAHtNFV44sA3aSpo",
  "key25": "2ur7U6TYjWHVLFznwv8ZiiExsuMmcjUAgDxtyVuS7U1LRDzRohhovxEXRVws7YufpVVdZi5xTP4SDQt4c2KySCHh",
  "key26": "3vC68LfEwQ9e8Hp3dpusnHQBVuWMdWS6KW8p3TsEfMZqhgreo3DCVUaWTEM9JY1ef3jdSwNyMQDef1XQvRPihSUz",
  "key27": "5ycWEqPKCDaMW2FXiXK5WVQKBky8w3Liby29TQmjd3ZHpgxfs9T8ETS8vdYizxTrzAmExv2c83Fko1KCQrr6jqtP",
  "key28": "3yQ5bktpvmbqrbrCUjm442PATWNHQUAQ3J2nrKuWArjRAunmrVRUf72LxUMbapfQhvK4ViZ1Qcf5DWqmNSvrrXKK",
  "key29": "TGsYQuFukqY3LUDnmrUEDbG4S9NAvJYrUYrEkMFWPAohWQFNwndy6KUdgqGPFiEu8J33P6qqLahtW3QDyhtBCu6",
  "key30": "2ntaxEkGmYxEdCLfjN1dbcErUpbdq6bsXRBNWYQEvyjjnTehBYWUTWuZbyRMmJqtjGAfCeZy8Popj6n9DVJLAaXY",
  "key31": "3TyhQ6EWRSWxpf2BujxZGyePAzSB6G9d2R8QnVkUPX9Qb4FCTg1xxAQCXibiXTPDaVPjM1u78djhw78BfesKDBvN",
  "key32": "4rZj85Yr9BaGSw6fJVY1voXQebvcjYwr7Lvb8FmApA66qnwSNT87NeLGgQcTL95AsgiC1rzwpJXnLMXfKLz5cM87",
  "key33": "42jSMeQVbn5QqKx87F2iY2JPgMEog81fDBRLvNBrgAU3WcEBokTJaFsuKTXc8q7yi4HQmKLny871sx2WzLLVKwmG",
  "key34": "4PYG29tQ7w8YEEqdDdJTXU6dmfG6ii8rfN7Yrn24dfY4NZTzHAXvFhvARAF4xjq4Hmt3JvfEaJLjwcDWD31wWMQM",
  "key35": "L7WmcuDEUBgCdZ4aEXULicGwVNBqP7vjbo9iiXWJKEDPfxGssdJcmkE2UMHXDG5vxDLzK3NqAzXqK1Mt8dUc35P",
  "key36": "4EfvQqb6v8Fgrf5Dwvf6bMgdzCxRdVQRq315r6kWr8vaGbyNiS2hpaDNVR15UCEvuNX8VRWzLQZuTVTzCSmReEu9",
  "key37": "2zWKsEsqvnkDfoK2Fu369fxnsgBky8Ei5faRE22X7W57sc5eBBvhGukT56rSXdTy9khwrMgMQMqsNgG9yTXaz56k",
  "key38": "5JmT8MgTPwapq7sdPoVLPfFYZznPDPcTeQaE4djhYR6uuMcWjjir1Jzsq877FBgjWyQ8FM6kbWiRu5A3nt4kHUrE",
  "key39": "LpgEiMMZCnUjPvmNYHYkLn66KGEGmDCybEjWb4oHCoLJjp2rkV2A36JFpnEud2YvsyFjHazWXDYkxT7Bc7gbtcQ",
  "key40": "5oiCsDfVXaM2DxHQAkTXFkuCfHby8JsN99LhUbLJHV7fW1Qej7Gi6QkMwn4aT4gEYDvnU8bxXh1z1TBjF8q7mEBU"
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
