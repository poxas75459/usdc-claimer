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
    "4cztujXgBJdMzrRremJu424cFKi2PDt8yZ2uKUrVJrhRq6N4KA9mBhGPYHixWhVPRxhQrDAs7Lyn7zXBxkzWu6bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YZPutMYy519enFQCTx8XDq1yMP69avJyGbes7BwL7dhSC3cYaeoHjNFFDLxYLtZQGYmx5MksXDxXrrRpFBY3yfn",
  "key1": "4DRe1VvUEAzcYpg7EeUpoUFaGpsvkU5Vfzspcz9KjqWbEEDHVBhhRKPbXisemSqw2mfYYhvkX5Q1axDExQyBa7RK",
  "key2": "5Xw9qP9fi2Yuj71HxSDeCoC1iDCwiT2ySyejDWyuRYFcnRaDTdBHYQHP22AGJSxoQKSCFtRT3LVZVDt13K4HkuiZ",
  "key3": "3NGF5EFTkkzjAWVf6kH531uLX1iLUMcKKF2LjQdiBBmdFrZPZiZMoqquKXpxGT4ZLNTtusAzWBaxmJqhCsaHL4wA",
  "key4": "3BDFJZ6hmavduHH81BQwLoZPbsQnEdcc7ex9CHr9pC28wD9e4AwP55U1oG2XCS69zSvCPxE2oHixoQbMU7Yepgh4",
  "key5": "h5GqRfuGiYCHoCoAWpRr3NfN5MqvYjY8RCrsEuhKnayucf7PSASmLJTfxBx8UPHa1yZCWJE27qBsWnHf2gaXSf2",
  "key6": "49WZrPCciovt5E672Q7hjWKYRJN6iatPACjzp5Vvas1VcxGNin4QiPAeF7Mv4v1pfesGY5Koy8qG4EYYHtD4wcH7",
  "key7": "Cz8RaLU44ucxgkjihd4Fk5RmMiUamwsvMLrEyx34QiB3L1UbyqtwtoXTqscxDr1Q5QJzDXTs2aMGGR2eEgW7sTe",
  "key8": "5AqY89rYFzx2D14abyEwqhNBrtpiCpSkAuunLFrWwCBNu4pY1vB3hRPCWgSJLP9aSjVtwAn3Gnwwz3XwY5wC717U",
  "key9": "29ucbo5MvS2UETA9C39nsb5sDhtXLAXVHdU7HyHeb4CPM7TFKkbr7ZF64tNbPiJhkwNZEoCLfaaEhhNcLcgkBAuM",
  "key10": "baYqxhckbobWzRp4W9uatxRi5D3edWGnQtRtWPoWAxC91otzDuuUFvS3kE34bip1QgzXBb5AgL4taLTwUKDhTic",
  "key11": "32F3VezMAvk5TvJxE9A79asmZSrEgsV6K42UmaAzSQ2PNs8oAKc6t22kFaqQo1uRADupZp3VRgbpYRQrsNmXc7S9",
  "key12": "pyEFtD2os58Rgp2F6zqUqRwbNU7jkCu6t3dhYFQRFCY68n8StUSTMGiENNuGoDNfCLmHAfyfT6Fb7Rr1njAi8Au",
  "key13": "2aaQq4Nqw6LwBPF4KLCDNxch51fD2sZZpvKS8N7Um1FNQFYH1um8Ed6DZdaZyuZp6zzBU2f8a2ktcLY3gVa5c9oz",
  "key14": "5cRrLhHb8djkWa5SQ4mAXjPi1yPsrPHe6wAPLxP9E8UGsij77rvDYc8BMqSZZmPkuHtixhPeRUccVGY8z41ZVVat",
  "key15": "JK2ZFSBssX6hAZXBfA8RHbcE26gK2dJDcCrVhFC1fCqo1R29eVqLPZFiJYMv4akBujsMdpCHhH6ks12AyjM6aoV",
  "key16": "5kNpQsmiWv8RASEDNst8MboXcpZkhCK6rnGWaGnmLxBe4wpbfkznr74vugPfpxvCRJRkE6GAR91J19cvn96MGazD",
  "key17": "49gHM3xg7jHgFfPFzjxMegPaZDzrM84KT9pxNkxFHvCAY9sB8wQMCmZWG4b4fKioimU6VYjmbGrGgKwoSnW134Ai",
  "key18": "3mCMX2sLivDZQ4thYUdYVupNZMBsn1DLLpVBuoD1gbsR1cWQXCxUKKcgxXUTbkecSRg6Zg1JhHjPtMoar7LFzZBo",
  "key19": "zDVuuhPcWmAZQfA4w7YyshMjy1TCHz4qGWXVAm1GaZDtmar749KCKAv9X4uPsK3irAtXDeVXAnrvJqKtEjY8kKE",
  "key20": "2WRoEsebUgFc95G1HJpEaLwt8WiAxJccJRmeNGtuPnDbBWL3GQaCvWt7vf2tKKKLoiZFQ8WoJ2tyCQ6NoS7nfjyQ",
  "key21": "66wshqjbBj26eLsXTpCqWMze52w5C2bEahiaFmAwfbKGn8ELpDxPepMb1iXuNLug1iZKnoKj9X42TSigjaBYoSMR",
  "key22": "2wZDGaAwV4fzjpRDbfmFPftHgutjqmWnuN6eaCfDhdabiSs2aykbfDBeRdNPwghdNKUEhYUvQrcFKMBG3CiRxT4t",
  "key23": "4ww6usjiVFbRQxMyqcAzZG8itTCqWRums1qTyqqkGQxmFMYnY2baZEmb2vTcd8iZKvaYDE83NeWP4jXUjC36S5mf",
  "key24": "2Biz982dXMd3GnJ8ektV6Ls6kmGN6e8bfnx6puSLdCxyKUn3osvqfk6MfVGxu39jJeKjXmV2UMMFZTxJFPnbNNxs",
  "key25": "583UY6JbsyKxj2rbFYw9to6zLZqhgnAA5UAMAz5eEi3tfK1drSy3noVKrkhCmGqcEgXTJorZTx7EXEP4dsp5MNNk",
  "key26": "2M1mpauodvtUzxLC5HBp9P9rErQ1S2LCWWFqBZGxPutRvQhcMwX7kDhSdgvW2RqkCj17yurzkSuwdSqapdpziqup",
  "key27": "5emZ2GUCxyDGhdnjmfoKmSgicwBhkuVgsEDJLguuc7sZbkWXZ7UzwtVoHoi2bLt6Y7cd7FSnQBEThaYVzcnj4snz",
  "key28": "2J3eTuQ3ntrHouRHVoGdNDmAZxDgQgjS8dRqeWzXr83LuarnBXtwDgYbDxSHa6R61y67a2kBkzVHqSksCxFb3TDQ",
  "key29": "2C1hogQRHqfyV3GP8i4HRb7QEFcJpR3mG5CKejBCvgf5gGAosuybKCUtM1WajnCBiEYhERxgEYC5bwmWaSEDTdUK",
  "key30": "2aYTgX8ZUSJkZpmhLCn9dQ2nRxX2fH3N2Ns2F5g386BhivwKVgoVcaWxUb3rJibTogMZLLGXJGqu3WV6jUZ6rGxS",
  "key31": "2LqbF4HkuSRLNbPW54Xp9ubfEJtH9Sio8QTCnR3FJYEacP2WMtzGVWaS4tbeQmMwLULA84FfJujgyAttPnjsnLwL",
  "key32": "4ytgeXEh4xR7BTndgMkaSwNUVeGvgqgHhiQPYdWWR3fUHLSGygtV1he5RHa7yJ4L7NhE4MFXY2UAodJRRNX54PG",
  "key33": "o33HdwtXXm5RJU8KVqKg38wsFbGEetVQjdFSVvKwFx13MbF5jfF4g6BfkSwewsWpqbKhzCMVDxczkfQu2PaRPKo",
  "key34": "5jnaQcCoiwyeYfv1aM1A1KicC9QqPcKVuvy6vG3xYMwtgGG1LSybNA9RF6f55hFVscWjiBDZHFiThznKLbgAAsEF",
  "key35": "VccLx7EGunvQh5qYPKTxwxwp3DP1yU5bsd5f6VGdUQgeRDxvSpbgLodesoXWuE7bLE2PWGUNdE7CqPoXx3zbLRK",
  "key36": "2pc22ejEEB3FbX6eTsdKQ4yubRHiR7Eamhod8mWEswHvQVUQFMfCNcExVQhpBYtBW9cHjx8e2dQenVPew72g63vN",
  "key37": "4QGrGmeTFjKufWj2GGuPBJyqCS4TPE5qCbUQu12tFiy5vRgaVDNrzVLmTBFKKaTHPwG9zfF1xcmYzWAcbSHWy31Y",
  "key38": "4fbEnET8niEhG8sBFC3ZPRkZd6mLnAbusnnzF5uNgL1PmHVh6BvAG4JS9P2LspVruBrzhhk1PVEenbYmTT1k9rQj"
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
