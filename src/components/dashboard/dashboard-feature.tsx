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
    "4duwLUE6gMnux6WCccbUcC4vbcDVLL8YhGJnLBGP9EJAsxg5YXUgTcNU8hTiv4YJVi426FvZwrHznz5vfQCCBFrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xiR3Fk4C7jJ2JM8J4ceSwYCMBwVMSARQYuxRmt6siGZX3DW4ekBZSCnqfXNdniy8UB66PcYByLvJCUfcoizdkES",
  "key1": "5MUBK7MUN5nrSo1GXaBDew4nnVix6Fpc5SCEt7iF491az4ibopfaDXEL9gQUt9uaLSSZawAK3c6xdG3c5FPq3uJP",
  "key2": "3g7dFnBSTYHApiWe83z9yNWogdVhB24ndoJP3ToWeT17HNMAcRwuM26yJmFaL7Pwuao9wiM1q7ynE4UfQoefanWo",
  "key3": "3y7cW3d4ZXhgJ5BHCq47ZjvAKX6455eUV62VZrgADMqYpjAckj8CmWSwyNDJ3YdNdBYmLg8yXBfSuBqisTk82zBd",
  "key4": "2PG8GpQYU6rjycCy2112dd5VAC5Za53uMP6Txf9GNmmgJD4ChfbWBhv2AECsgNBAMx4ozxVsPbCHxrcuDRRyJcbf",
  "key5": "3vBiATVUTecsgWrxAvnFEuKWXPbtTn4kCKWD8E13prWRjnwVEcU7KtutDaAvJ7nBDjxVhtBQdwfTte4y6rpFNg9V",
  "key6": "3HCKahYQP2PGX8a6aU7LvxJXY3jbj6WCzoo5XBihkBmqNNM8p1brw7Bx8cMV7GRsHatvzvK7acy1Jge6HcJEFw1V",
  "key7": "35rA25ofuVmNUkxmzurmNDBEQordxCnpwFsmycDWQf9NGPGBdzxgpwDwDycHXUjKwwHXCYogLoBzAhpcE9YSvWaM",
  "key8": "2oRJPWEv4GLuQV7ns9nvL9r2Lx9nzWdQBbZ2hAnPpb6j9R7dLdQQmuK9DHZCTSw7TinUMP7HjSB346xhw7SCDQXG",
  "key9": "45nsGTykdmGLoUA1yATkQ1ekjdNXQHbuZ4WvMFQK9ZExtr2SCFyduKvtYewThBcMvPVVmQkSXv88NuCyexjUa6wn",
  "key10": "4T4i2qLo8fkdN8ZUiK5ACLBzbVSCcJ8NaNg7dGLz6GT3bYRpi9YCFuE6cPZZ7y3XUWy6hAo829bMGyJEhD8kgd7o",
  "key11": "47MA4Gs2z7AMVmCd9JpcC5rxLrHjvob3nLCAnh4vsrXRHJ4hXWSG1PG1HdVnPV1VwPKUC3UxJLvRgYT1VBvDWa47",
  "key12": "3rSJftEdD1vjoqYKqndneUTgsitJrDjhjijFpNKbYf5nYUwtcVL515DrDVVJ8u7x3GwuX1uabUcefgrpbxFXpaye",
  "key13": "m1LpbMmHWi5aL5bzycAj26rfyG2f5WrDMdyrxXtH6j6aSntxmwez8dKshHuycGEg8PPrrZiiiEc2kZ5FwGhxcTe",
  "key14": "4BoaLCo79zQDv4i4mGJpPJJmjN2gTyoJcQwGjTGCTVkVuDtdRSzcqmQixqbz9tDebYSgwgiMvRkCxuNRX4E4LY9r",
  "key15": "2YG4T2MM6yuMdw1a9JVgrTQtkxAr4HoP9TVtyVFR4TQTNT7d73gvHvC1hJQuhqW5UQ3qhtCHRPWAwZPk2AYKE22m",
  "key16": "3m7gXETxTGFZdVEmH7bNP5RmytgwKR6DV1mhtGsSXkerzftitJ1rAhL9o2wkU5GEqNL8UQF7ktbL7aDB746DYcPb",
  "key17": "rudihjBanALrr1fgP8Agf32tGJrt6StQMyVqt6GBZhNcwoV2JJDFxR6wNugE5rWDGcLXX5VBKZD3f1PS7PmBh6L",
  "key18": "3b82PqjdFLow2q1GjkQ1o6C654xGhSo6AJq8KC8K28APfRfaFtt96o3Sp4ksgoS1zHy9ZgH1jnnUN1xtxcFZxuWP",
  "key19": "2BsPy1jaLxKX5f7cHPsTifumkLD2WGkNio84C59eGQG15BMAYSJDPT5RXh7cC4AtD4RPtjZX51wt5n2ftAMgdPnt",
  "key20": "475DHFWzjCs6g92AansgQA6qMiYdu4WtH5reWKUkd72JyvS8QubeDcrd7tZNfLoi7WG9fNATG8ppibRQNdZEnL9h",
  "key21": "2CdJj1YaNdfPUNS38ptMnfXNvBdkBc41uzp59M9ej2fdhKCaaYJQjJ4Kd85uWEKTMszdvR71t6ntAGmvTS2FGoKo",
  "key22": "AGsysQiyDLXorfyHgSBW6TynwJPWqAmRm2StRcfKyqXtnrede1Ds12QqQGoUp6jiNjvuMbzqfEpTYDxGVJGaKf6",
  "key23": "2C9Zyr1K1FEH8z6u3y8eMWKjygUDtcWH16SqRHPWRKryzmyWvVnP74fhTV9hrN5KN7JoYVr73H8FBfs6UGNdxvM9",
  "key24": "2vhSaSNeRGvoX1Y42jnPtzpc2YxcqurvjgQEAi6TTMSF9MrssC4DSDJnG71TmBrP4gUVwtH9CnmAF51WgZq912Vc",
  "key25": "5ocUGk8wrrQvYMs2NkYcq6WW1kDB2TLnSNUeEXgfBBKkta5ifQs4TQXJi5GeodGCEWDzjhGbACb6nCu7uMPQUju1",
  "key26": "4rRCwH1TbFka4qSLYmG1dKnHH1Hktmu3wgP7wzrcSnmBEgvLLJfGQQoUc7LEn73VCfuN2iPr4bnjNN3gdN7MxeKA",
  "key27": "31potsP2n2B6hz3JCTNnAVkobrNbR65ypQvDo8LF8qDMu6s3wzZLBdxFko5msZranrbxYhJiTNxrcFaU8SoxiaCQ",
  "key28": "4V2nagr7ovNcFNY3DSVjE1Zd1gAbF8PVWjpi9RZ5DxpubxcTKxpoJkrX31Cd11QH8CBYFG6rvFZqEGzJAtMrsLDF",
  "key29": "2qcSKygk5wn67AjWraEqAFULf1yMrbr1SWnyuCZY7Q8SCdx4G28cvULYkc4ehF3HQM62og81P5n4FEnKQyZedUhb",
  "key30": "4gDKiCiisoANDkGLHZjKz8Mo1ogFV8Sd8jdowAcXJCnTMZV5eFRM7u2HCZE4HrnAiysqFqppPBRsQCSLvhMNp2At",
  "key31": "5dLk3JZjsFoBBGzuiDpHtwQdCEQRwcRFTWZnLcWFKe3JNakEon7E3UQe6A5X1fhF5TSpDrtw79w9JtNocyhmGv39",
  "key32": "4VR1BmfpAuhCMjGomRsXhKXrSAg1GpLfySmzX7AettAt9qGkUjt4sv7JomN35dMcD3rFfXVm3c4FvocDFuqpc9o5",
  "key33": "4X7c8YxNYagrfUoY1TRPP7ZvLgkaH2pDyVFd1rnBoYtegLSh9kB7TtW7YjazKruDSSCXb5zRDsdm4Qbdz47pomRE",
  "key34": "553nEMwbqpdSvmKvzndJ6acV2ScNgS7d6KAATynUsmcF1SysYGWsDMDHVRpbiyQUoQsQu7uw745xhiK6Mm29zgxZ",
  "key35": "3URubUKyvdD38hNTX7gecvU6S7Taahuvz7F4xsLUCE453h1XkmySn9p9TZr56YPXGzZPktLiJJ88EYgXD9ZNrcxN",
  "key36": "5MRvXKGzCDgRE2oAk1RrJdHqinnkrzLJGywjcuUBz4SF8MeBVuzLokA6aQUKHJHzN9QhGhVXJM6jYikXvnb9kk6c",
  "key37": "2WPooRdqMYYBuTFyciqUfSWZtoxvyKg9GBvuNiQL59nUr3UcX1QkhmBXcjdRjfw1AoBJT5FGoLXN3GtBknX2qFfz",
  "key38": "2vaTRGXEVgwYyMdcsCbmAwhkCqhTviayCjNBKa53RHmAShbdAoBkMyQiHKLJRpfa3xUZN3xiGpDswFb9APdvaupd",
  "key39": "4FVkpp7oTzL7RH2i178ahHmbC7R6fWntcJCv13HeXbSb1Cp2Np4Q572XAz9Y6xb8ZcewQiV4tf4UWnJn8o7kfEcJ",
  "key40": "4ub1qqsYwniFC5qFoSdWa9Ymn33Qwyn2ZHM97Ndgnr8iZHRzyWv4mF6a5jbG5LTL9U5V4URaSEhni3w4GRrJ3eqc",
  "key41": "5XbCdxdwV6VWTMiuRpp2bdzCWhLyzwwjoUPdcQQQdDZh6K1ZuQbWNKBtciS6kcn6SUkfjn7oNXqSh4w5hjcm8837",
  "key42": "4inJsybLiwW4i3PfcJU1hW8nJ743WEjY9uWCVRsq3T8xdPkWGkrkkxjtwes387rqoASyshBfBUZqspqPsZj4b3ts",
  "key43": "5K7gFQLjP4M2BbDt2yoPn7BWFKZesxxstSdVKcLGUnqdWPhe9DoED9MQgcmAutduGteuoSLX3uLrgUtY8HNkU7sP"
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
