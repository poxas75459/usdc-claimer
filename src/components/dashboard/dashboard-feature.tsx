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
    "41FW9ypp4Y8jrdmQu1kbL5uZEWhhMKnBt3NSfpdPqKgMh9Y3d3B6R9DqTZ96vWWtHtxJej9p5KekD4Jn9KDojHPS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RF7qNTXTTJGMuuWkQiNfh45LHWKPuHaDqwLvou7QBFz1rZuby2ppkVVfftrDvmqbW6i18LFxdoc85gRHusACcxb",
  "key1": "4EeCDMmWik8yrSBFPWaSsFeZYWFsLMH8uUdea1QRzFoQhoih4dtrFBsJjyrrsgJWJ3oa84n5cHQsrUmmnqC3Km9v",
  "key2": "5bw3Ztj41krML3HcNaEAvarSpc5RakkWE2A4TpcBAU2bxBhGttYMa8SModW1vgU31R8QMjvszdbXnrcrv8rXtHJ8",
  "key3": "4wv6PWgXhNQybiCwCZuj38CVKSRXMBbiwJBGua4BcMus7UgqwbytmSegR5UxKXcorjqDfzrG7MdMr9sGwveCdgE4",
  "key4": "43TrSD5vMSq7jXtvJXLukrFXEsJK2nrzY5vkgU91dgrMKVfy4s3cgyg3JRyZ5FZBdztBc3RT5d6zXASuNn5zvAcw",
  "key5": "3fdNFvHP541m5RPMd3xd3tqpfu3FSEpLJzJMNKrV19DcWPDnpqd5J2TgxnamUWsM37QS9btF3PkTxS3xP8mEYDwa",
  "key6": "5txd5t4AJSytfx97BagFqPqNVnbQzRT3LZCgdTqK6XZJh7TjA5kUbouRDvbQorYTkbwvZaMVBy64Yrx24unLhwnc",
  "key7": "34pEmvyr3vzPMaSZ11ANDnNCsatTgWgHeK6ETtHEvnDsmHoRWBsjLrnNqKGoryYt8pdohu56e4BpvGCLx5tA1UM3",
  "key8": "4dfZ1wVtBcDmbBXqnpnZWMmSFa51FZ8CmbhptWzES5ACm2t9gcNg9uF5o5DXwqNiw7sevoMjXyfgocNCrb5A85NE",
  "key9": "3yxr2tXUP1SET8BJSCwLDTcDDo9Y3Pief5NnbniPbJe4aFocvUsKHAeoD4jJNgaHs3qQrinG7zDfR8HRFcnBzhzL",
  "key10": "2k7un3NXHsdexNJu8ZXPUnVssyPxBu8minxV1CjWzaAaxGccLGLATwo28aVGZpbhUo8FJvHNSQa74eEst49RQrux",
  "key11": "2e6d3J5EESi4zpAGCcxxTKfJreP6FMyeQXGKbT61W8dfMFWye9X1TtRFAezfGr5NKJqGHcnyYRsx5c85V7kwAMxK",
  "key12": "pSBR4gif7AR5z4ogo5dAKgMwdxhhgbWWNEf6nJLFtmo4bBh5kL5rByGHbyFmc54zDJXRAW4YFSETcFiB8Bu6ftf",
  "key13": "3eLNrEswFj4jCj3BLPUTRmUHWUXCEiVkgVfdNW2UfKTTYABS69yG6onbmB44c4PyHtr3L5D7rQver4cPvJNVaVkx",
  "key14": "nLR4rE9xB2sNJ3KVGtcKJWCRLf2j984VALZC1TLFpsnoBNxGi7UKukP9DBxDsnFahEuq1KZZuA1bF9mySHJuGct",
  "key15": "VZskYUaBwqRi1roDoddHDCzpBN7w7zS9GSDCeWouCuCSRUeeGBpKTo2oxTiYNuqGg54LNb7yQaJ5b2RTAwewLjJ",
  "key16": "FgkDNjamugF8Gj7bv7EmDnCHNCjEa7pE4jhYumJXQUnGXFGysnR4fgnrpD9JYKqtmHYYU9huDRu1ia9MPnfnnG4",
  "key17": "39FCuHnnqKMr4LqvWNuxE7caz13EaaXq2oJ26rDyyDfeaMczDT4ZGWevupLqLhPCpoHL4hx7rALj8F8XuxEjKrYh",
  "key18": "DESm9YvKHyfRnh7bLw5p6pp45RJjXHWAGXpgvcXBYHXR4EhFZef7EceE6kia417jpiCy6W7nBcCSwiTcGtg151f",
  "key19": "57Bx7hfmHRD1wh9EhTjFW8eLzg8gHHNd5bVopXhuRnNZ3Hd8J6LcnKfDAhiz27FZCV1TFo4fszeicSZFDNN4WoeH",
  "key20": "3qGQT7badkKMyfBfvBUNJ7gzfKns2VmByh7CFNXvzXQR7e8FNTy59N22Pg14gT5r7zvhTcfoVrHi9odY2UKiP8Ff",
  "key21": "4sCzX5C1YtmGtxJhLu93oDtBizcNU6YjVDDPbaSXTgUEEhBAdjaCA8g7GEeTker7fxWib8vhWwtHggnXYamz2Svi",
  "key22": "25DccFD9cBqGwC85SRJFhve1SMBgTQ56myFPLUmXM3FoxkTSsKDqJEeB4iHAqcJnfLA1aRyHQBdNHA4sGhkLs4Pp",
  "key23": "2tmHptchGJ8WydwCjVfHot9yRgd2mnq6DRGAa1QrNUv5Tehv1D16uUnN2cefPRKBTe75iQuTBTXmFuhLngMnRapm",
  "key24": "5F7Cfo81vAwpH3TyXUw37nUe1wi85pfbrvf8JTbqwrDKBHqFkhRTrvqMDL6czpXCvgoDhyfKkZL9BLZ2EotF1Ng",
  "key25": "epWGXzKeZM26KVrCYdmXod4eJVLKV8xXssGHG4n3KbFqtaY1csxeKZyyYVVurjYM8gmPtH8w4p6uKS8ZN1HZXr4",
  "key26": "4xG6FeNSnJSwMCgN3U5mcJ72NSBXr7h2V1SdMMFykrqEPGdZb7urniv43PXYnVYyKcwwu5jYsJG99bEZearvMFbq",
  "key27": "5CR88DcL8XFuY9wgJkXGL2fjGgHtSvU9auq7UYwiCpPhHRaL9z6XzezYjBP5f8PQ69fHL9QtpW9UoWHtMoZcMqQw",
  "key28": "479qCBa8VTjGUX7JfoacQVNX9JNK7wg8LCNDt1LzxceMeuKDTZz23gsXjbjw7YUiMGcRh8Q1wMvDqufj7YzMqtB",
  "key29": "4Hd9Jadcdtu6bRMrUbbBFozzMALVUBoPNu7mY81nXa5N8oxmqWfcTFjkZVjQLZpkhi4DuVdyWGMJvMfS4p2mBi3v",
  "key30": "494TRTs57xKJUGBDQYxPhntijBxYkeE6tVrePzhn5XqhKoojk7cUyE79XbrGibHCxWbhMhqS8EoTJVRmzEYyM5Eg",
  "key31": "25AnMHsJsPH89Fgn3CziyyW9PbfG8jUuVcd9W4sS5Gjk9tCEPxe56trNTFd5rY5Vpkeg5PJ8pmsQT4vZaiKSL1Gz",
  "key32": "58tjFEoJPA48LYnwhbc75kuQCVMjBxxPCis1Fq6DUCgqpaTxaZbfghxtmXeUqNzzqWt1oNyTAfYM6VzhYwrpUJ8E",
  "key33": "5biNmU8mZWEzby5uMWk5gyaf5Sko9tZ2cRuEoqvhxtSmtmJEPkzcSiHyYbsViVVtzSbmCQ3gCqkQbe5fxAWudBf",
  "key34": "5Bd1ZRerankZHLfHDT3KmVusB92wYj4kRH783t6p9bYsqx3uddfLLJEVXdkJ7iHz7eNz2DrQUfqGnet96N8cdjp6",
  "key35": "5Hujyf4pofrTJkfHVxjZkhWiJxHm4jrTXXEo853WteYTRUyNoG28dYsSzNaSxrdkiSuxxPnHKAfvnxDREpo3WUvg"
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
