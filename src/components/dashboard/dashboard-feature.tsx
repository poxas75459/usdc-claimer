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
    "5ChopJzRdbXNpNEW1bkKSbzK1vK9U2Kd8TjF2m1WYU6rYXd3tPuHbJ8Ao4HQTmBUC5bqiKJhCcvBxvGJDaybRYX3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLi1jmrNox6sqFN1nSzDm9rRTBBWBhUhNPKDepjbbbRMGTZLYhXhAgae6RCzEJ1K6e8noMUvqHXgjhMmaunC1my",
  "key1": "513oK9EPPCPg9X9V6SzbynAxwoAGGS3XfQx955Hq5zsxqL8ScNhsbb1CcNbRG7hSUAvoYaaUcaSv3fiDb9kMegi8",
  "key2": "29ZoNNVHYbpL7Uoj8JCxxZHvmR1zp8zfiuRScEm4AhTPrCqfx7W1kwV5mwtFwn3xv3SH64ayuj93gCGN1PoS398m",
  "key3": "4zgFSceqPBGVoCJNCDomYwyuft7t8Ywi1UN1CeFzdHrprG641CGKEjhd6v3fEPEbRDDkmMVLKvMqFF9Zf4X5FAmx",
  "key4": "2fWcNbVWVa2oQoYymxC2ThQeSj783uM8AaJ72B7ef9VM7rQu7WawcnmjTR6repzG5kptnTi5i9zyt7wnhjft7LSH",
  "key5": "5WCeyY8HLzwwxuQiUTGwU2jriE2WaiDZzPW4cARtweaN9FWoiiPwdf1Q3tfbZq9wqCZfDmndtigxLk3geNG2yocE",
  "key6": "5xpJNu9TucR54NhyxZaimDqWxHY1r67kJwhLJxBpULBtkDbmuFrXEZmmrkD5wZs4EBinfS38N6Ee9HfH1muWMQ6x",
  "key7": "3QeaVXGyNJ1zEK6xfMocrvHMHoU5Ux9YkHBqPcSi1e5Mk5gfr1i8ycCKecqJhrS6N2KaJD6BkGXzE5nnZEyQPSus",
  "key8": "4E5EhLaXdkox4TYnDke2qUBKsbYsQocHhkcQK6xnzvcKA6WH5Z52Day79SNJiDuZq8Beas6672FyBZHFQWXB4AhM",
  "key9": "4C8EqHHv7oJD5UYFVNBygr1aeBK3kUkkP6kvKtXpunRY44JruEMdLMGpd2ykLyxe6BcGRMJLRVwQbAA6wyAzaXZi",
  "key10": "3VuQQP7xX94s9jhdvj1SkNF6yzGv5xTRt3BeAZzaQVFpjoLTWFimLFicUVPY2VKJZW2FZ9uxd4RrLiFqCZ1dVXb9",
  "key11": "3iUn1ytN6SSxJDYjS763eeDeDywtCzKWRkKxsjQ3mZqS5khtyg6seNLFU6C4MkwnScnBJKfSJa19HP7rgqbiQuNX",
  "key12": "2SC6aJwVw8iEYTMuacxax3MvsyWV5m9ZkjwZJT583gbvnaQaHrx1ZWVe6eHVidYWVLv22QNPeMCvicqupaiawm7y",
  "key13": "3MAuCXj5gHfRH7CcF8pB68p7fNas2tfG82u2fkUwUokGWPNXZ3KvEPmm9wFe3VLbVgZs3tcWwXgXUBE48L8Togo4",
  "key14": "2xnifNVvcpj7Rfw6wzQCp5sFNGVi5qRscCHN6xYGAudmUBvSEdaHtXrgHfVvF6vRG6BuANoaqpEvytHuVreFXU9u",
  "key15": "4nUNtAuFnGucgSVFa5daUeUmUdC1dnYbh6srszzyacSgFW4pCbAPiWZLJWvA4fbPy1Jf3G2QUbGWvuAz9v6ke5mw",
  "key16": "4nkV5nF5i9mzh8ByJ2DuMZsMk5LtWC4nyiWRt4YhotT7vQuhgEGuhgvrwYwGsSJzZxBWSGVH9rDnV9axNCVKARyS",
  "key17": "4tZt9fBXtBzCXoAbjHkhm5uyrtok9rRYsTEpr4num1NeiBhL2SFiLxcf4GZqmfBe7r7q9Dxp4NmcpdQSBje5pcLC",
  "key18": "5TyzBWqRCfw8zqQU6a639Mse7hg1GnuGwdMEscsYTxdjJS98eEUyFYjTqa2UAaKUhRggeLgF9xFcscNQ4UW4rwZQ",
  "key19": "2MyRJKjgWHNUCVmiVMn1mojMYSf1iSiVBmbtra4qNh1mqAKeWiGrpxrysbiub1Ly8hrMYceucLLhCzpGxRZ2U1d6",
  "key20": "4FUmKnFAZA5ztqNbRhG5YCUZnDLj56eEeokxGgkVpy6BNsbrBtJiSyyvt47Mmhs7tqbUh1ahEmur44RButAuZeBV",
  "key21": "5rXCQs1t2rFSB4hRTm8HtD4k5Mui4n5FdVKvh5o7uC7o3EbGjtWfQcLAWT8bmKB4dm9EvUzLDgGrh8efjC9hbFRx",
  "key22": "2JNBiBfS2gLaYmmrpPfAyHcXk2pF2Dh1cUgU57kps2C1Ez3dNfJaKBytphZnboP5ojfD4thwxzQRuVsQNMFEEsTN",
  "key23": "2WEAxXjHeCUfdBu4xo3HKPYQpcJRwWghcE2JxN9Nu1hKDbGmf14SAsURrzEADCN6ZTzhPfxsqGFWPqXXCfrVdXxk",
  "key24": "7yNyxyRwBmGCKXAF3Fc9j99yeaiMwTrHQ9aLh4cR43dvLsVpMTdAAMnHJCJo5k2Ui8J6QThbNfdQGccMA5ECWeR",
  "key25": "63GKZb9BUYLRiENbPn2mzZGYN9eDnC4fuUgAjk9srdk9CxgHizhRGWLrFgsCyXvFTU8PsF2fdvb59bkeFPmm72N2",
  "key26": "5z6nfSoSQnLcdXLnFR2XLYnDtezFShKpKZsqfXyMBu85EDYWUWwkg8TGobzoXmLJAAZZXgAsqXRRgjRMc7N3QvB2",
  "key27": "2PGnFdi76ENnrCR4RoPQdzM82nFotvSBpBrMjYHE7j3VE1S7sYfx8SnUJ1GrCA8wZmDCqjTBycZ8Xzh1Gg4YcDWJ",
  "key28": "5zpWN9ZXGojdqWkjqdMxaZsWZHG4kFjJsCkzqE5YXp5RyCEDbgj5vr9Qc7GtbixJKrBpsU7icZQLjtWASEFzRiZy",
  "key29": "5SgKNv72FwvDhFnUNCoqoESL68xC129tPLgjbEwHuQgh8vbbgD8CEiUzSEZKmPGNukS9dxS5dK7Vv1xvJuropiuu",
  "key30": "351zqzJCm4Ha8LtYs34HHhzU4YTB2ADd4wExCrQTSD2nQfyZCQeqwgbc1DZwYjeHWKeasE2ARowHUsqBunR3zfJS",
  "key31": "641ZixZBt4jQtXpF3Uk11JVA6qCKepDx6mp79tHg89A47SYC61Bj2PdzfCmH38oeCDLfz3xhoHkK82wBob8KWhYA",
  "key32": "4bDT3zhuPGi8XzPhyMegmzL1UGicBRCCRwQ3smQF4RZcExduoWXnqqKfV2JfHbXFqzRms5tRxBwGwxkSGYgFaSVC",
  "key33": "46LosagxhFvcN5WqTT38MiZePFLP4KwamZQnJhF1wgwHLwcY7dc6g3VE7SsqSwyeLW6AEw4GWKEBxqvEJeWAvVeJ",
  "key34": "4z4GK7FERwUoCV1zvFZnqp5LXWWbWYk4SpbiS5Ss2F1UGD1zpmtKEgHmLDMDHPHNGYmwnS9hcKHsADzMiXYeJKUc",
  "key35": "2s2m7aY5D7FFVYRMFTMRjYHK5CepHeLp6Anfj57AL5BfvFw3GVeQByrp7NPpNwqBTvEodQxtmEGMJ1w4A1hWvY7Y",
  "key36": "4YcmignHWPpWq3qicW9hr4dhVHCaeKovw6NdLQuLhv29QpbaRUjNxhRjaXLT9PeYizqmqeVMCG4wnvxoLTWFpbo",
  "key37": "5DEhx9U8tk5hbnMHG6HhB6Db1CF3edPXYByWe4tY3iA8som1qXTgHrVqRHmvrAS2BASSUBMezFA9RAYhK3TXWwv",
  "key38": "5sFKBBUzyfF91FaufXahRMAHf3PoKfmpsCLWDoHrJF5n5gTVgJiXemo7ZWzq5PPW3vP67PyWgLjhHhWUCVPk2rDV",
  "key39": "48RHe9Bybn6gKDcNE124GyRpnbBUEzDK4ZEpgji7y9Jk1wsU2UG8Uhb2B2WYbWHDVFxwRUz7W3tYztHLBXuCDRK7",
  "key40": "58mg18PLpSJ6VdbqY8YFENwsspMBmWRLLXtG22pgoEtHoGoJEERsctJM5tPjTexkYv1ot7M1vZwv3VCWYRkXHRVb",
  "key41": "3G4T8mpJsD7SPGMyqsivmX5drgfUpbZvtJ9hhSsci6nwfjFhvhHa74if2MHmi9TRAc59naMR1nJxmQFWpXkLiJE8",
  "key42": "5ae5zLojFieKCdGUTUpWn6VsSJCBnFqCEU4dad6jctLCDrvM9MUHPUY2qsWz1TiJ6gPKGnkeHS9b5gtUGvcvmftE",
  "key43": "21kT9mLjvtFmU8Htgihi3Sx9WRMTY8DPsHLAhngbCPFRdC5JbrCgFvVWjsKscYfDGJ3y6Edehvg3huP9s3StMUdD",
  "key44": "4WjGpmeABrk16yVfBkseXzkEun567zhW2DZQKM9QenNPTip4gbEUH7B7rks5sZPjiyUHK8rV3XFR7doJcJU6c8V",
  "key45": "4HQ7qEpyX1PUCceEkV4vfhdpvEqcm8Po4hhWf8EWCRFSvDk7NTdxEbQde7k6GtKGG4mdCLETT3aZeCqwHQTFv3px"
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
