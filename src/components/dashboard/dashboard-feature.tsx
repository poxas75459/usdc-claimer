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
    "2EJpPxwiVMQV5quzjLXJiySWtSdPxE2yAgkBCqvwt5kmEwjhYjo8gQx17bbYPnA8binRMb9N44GeS9DYateBPDe2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E8WEufWt5i2DY6cmVQ5KT7WyFFtpR7yqnFWynr9UBiMdqQ5b66vFMrg4sNctGdQWYCaYx7bfuPY9Eab9dSWKnDx",
  "key1": "4X6vQgkxmP7QpFZ66St45NGyhoo1g4P4Qhj3RwFHkeUTDbtB8NqwPHmPPZiyNMbPotNaSqaCB5CzSUkpUTDFk5wC",
  "key2": "5fzo3ntSWZqNDn8hfyi8e5WeNLUUUZD8GYGN9GG2s36PVPsEHZuDV5fUpLjw5ed9gbqB4MmRVeRF6LW75ke4Woiq",
  "key3": "27sP4Mf6xNS9vaH67EcmaLswM5vwGUNbyZ5Bf3agEm11DFGExuxLH9rBsKNk9KDrSV23FdW8f2cu54zbckjqtwzu",
  "key4": "3ULt6Nye9codnpyGpX2oQdinUTAqrk46anVe1nd9NgPJX42CaYMztbkEdZ6fgMWvcaURAHxjhThotUQPuBKLMJaV",
  "key5": "3WTR9AworpswjmL4RtSgVsZKNTvimCrzfyQ5gcoH4gShcLV3PPJ26z2bfv48cGzi1zs3wfWUpAqpQmFQZPLkqvaQ",
  "key6": "5bdALiQWuXtBqDyDDVEf8HbdwhSS45YN81GLRTj48aTcwvgcPr3fD9X4i7QMb2QoeEzNp8xaBt8WQ3SZGk7NLcwr",
  "key7": "2X3CFKPZRGzUMRWRVphkqTWULuvUJ3YKqEYaJKQEH1u9xccSSMhsdXnPT66KH54PCYfYNpModcxjNxfmEaY8a94U",
  "key8": "3tjRJuJ9hmXz4ioj7NeCi6GTBy7yk51ydhb5gCSUfxSpHJbD5zWpNbWbWtysYCuwWBFsAqh64EgfLpJ6oDmFGumW",
  "key9": "5hMj4v9CnMUfJkeb5fGQaHAFtkfARdLGxSPVDGCjGTebJuhRq5xWoUBtneZ2ku4cfidwJm4ftknB5YeMVeSseubt",
  "key10": "2n4duXkWjXk7vnM58URZBkLwC1AiPrxGoErvdacpsYLPtrpQJiTrMfPg5XebLvy3MmHKVVZ552jAknJGzN4funFX",
  "key11": "4GDEGaiJmck4zWH97qrcEGYEt7roewboj44EaJGFMuEp7idQQLzgvVNrwpLjtfzMsG3zJtoT8xJKNpCXgsXGpFWE",
  "key12": "braf7cKm7dgaREB1rsFeJ3jHFzzMRKJhES4SBtLW172Dk8K6ZDq578uFtVNqrwWH3fFTdBZnQx53gtC4KryVbgB",
  "key13": "iZ4nvvEEdcwsf6ojxjeRvES94vaKmcPhks3QQD7V5pnTzrUXikq5GTKx57MXbdzWKNrbcA4xUPp8SDQ8rmTrMVT",
  "key14": "Z1o9mnQLQdS5sfbQ2R1oo5QQZyUNAM1dG6yhUjPEV5iyZGQK48HUY3UPbsqwJbUjg1TH2Sg7YAvdMoFnYnSCL5J",
  "key15": "3KvvMeNmS1Cn4Dkm73br3R7k9uUPguk85RTkuZXCB7E7ADoHCeFjnCNDZY2s1pmKTdJi71DgbuCAyh5LWyVJ8DSi",
  "key16": "3fHuLYk7zmoq68AURKrSrJcJNxgUTpH1jQZHFQFGKUL4crKCWDMbC8He1928JKdfpmDLf31S38rsTk2mQ5xaKPd5",
  "key17": "3q5onVa2xnHLkeg5vN1p1tCnNPwoZcr2qErVPyAbD2seGDKrbLepsK8dMZK9e5YD4ZtgtKsvQVhjUqGuBg9bUVy",
  "key18": "626kvLSFcrrF6BheD4f6CAbr8CZs62EY8fSNjUfkCmPUPSnfghXDL9Rt27bnsZ82itYPn6Y7DF8FBe4ha7xDkqUD",
  "key19": "Wr5Vd137TjmpjyhJfkSa1QDRGKHpfZfPfgQJedaSuRgm68Zbsgezg2A5R1bbY7B8fwqg1pK4k5vCB3Y8We2QUpF",
  "key20": "4tRXyfxpWjgjifKTGLfgxrfFKe8J7m9FJaSc947YfnLZufC3CzMD2QbTdsQRGGK4mxdYD3oQfZ8QqUKFHUQkgPba",
  "key21": "4wfvj2tX69P3JgeTGCTkfT3Bq8WsV7p1AspjUHxkVJUq15u7rT14wxXe56KaS7N11HUqCXudkKSgj4pbPFbstQLe",
  "key22": "4z7dDojA6FExbXhckThoHvGZuYgcZAngHqpHa9Aipzq5qffiSEz17YLaNGmWuSfgjNynN97s5onUsjXrpJ3mDvs3",
  "key23": "3i2tbWTFy3Xw7VGRgUUk4KyFBCREPKT1u8UdA1NFTa6q1efjCS8SpUETK9cQu7S5TuydeXgQSRES8yNb34jFdpst",
  "key24": "Me6vkoY6i6QSZwSgRgSS4ctf8fwr3fCFYTw2ov8dLkzhnVD78duWDpWmUR64GdM6adgKa2JkC2zG6z5VJ3wxheu",
  "key25": "KzGxVSu512kJbLqKYx8dY9fze8XLcnjAZv5gCv5y79oCHKBgGxcW2ARBeQC8tRMjNt27Qhy9a8vLda86mNqx7LN",
  "key26": "64oPmu9EjVaDNczqsK4BJy5jeVYn4eTNDFve88wHvq4EhhqkyCjB2qjfRrQHaW5xsKLEPSZL9hKRYQpCg1NCVkp3",
  "key27": "3pGwmfvMcfK2fxR2TdXVJQC9PUjV73vv2ZghHJ5nUCR55DECPuxSX9RyNtxMU1ovi19z6ZK5ei8CaYQAkgCTr6Cr",
  "key28": "3KpkMhJDUAU9PLnyCZu9Fsr7iLCDpUCjYK5cT1A14aCUD4x5TqcPeRbPgXtHE5UzcRMbggU35KpSxaPuTNcW5mMx",
  "key29": "gSJP76rMQhXbctitiqiQkEdHgYXSSfkUEKQa6K4x5oYFGPWGASB9bPFqkfTupXyzX6u3yMjAfdE5WJtR6p3APjm",
  "key30": "4HnUxvfeeD8HPKKhfoTRXuNCEAYr1nGzfQLkmsNTjHqVFAkgfsWHgwzHypEMf2f12ehRDaWwqxESoXQop9i4zH1w",
  "key31": "38CFFvuSGPqpuULyRJMMjovq8RBD2zUKqq6oihga7JDw1wiRAr6TwQySBL2ZiQkrS2CiMbHZEnffm4tZegfBsQ8n",
  "key32": "54ruwVXjMGPi28FMnKPModsdrGWnD6B3uJHBWhFTPhHkvX5Lb2hdj2x9QRLQvzwdR6131RkLwxjueBcdkVFYYWAn",
  "key33": "5vcHy9f2DYfKx7qHVwXsQ74ezAg5W4GxQXCRw4mzQZUgLU9Dz6AoanNvfcy194xF99DkJEwSJciQ58RRCCwrj1Be",
  "key34": "3buqNpGw3KWZ3HsxxeTCqxNeq6D7aTQWhFvVHQKve51UafkeN1JJLmzmeDzEsErw7b2Kn7o8tp9tEBR2R64RB39K",
  "key35": "55xk8cooJwo6hVcLeutSgQYgvZhgscQvtmuzcePT22sQ2Xjysnd8D5BmpeMgpd6bj4cyDP8t36Lo81Z94iYYVhhF",
  "key36": "3tZfmU6NLWN843EPyDP2beMsuw5cNDceSZPh5WaCM9NVXtKPLGJR31CNnBJGAPoNe8m4MEzpeAhfXzMmfwkC6GtN",
  "key37": "LH7tbKD9JBJFn1sExpAcT1iPjmdLQExr96ayDTzqKVoF19R5NtVQ6Gp1YmUwcFdbqjZrE7UuPnqna9BHwLCHV3C",
  "key38": "5QXYNGhoenxcK5MryU5NgkyrZUcsbyCu96ByHaHXCxy4dhGeiTBW2C6SPrLyfdGvCxDzYjouKdMctgi1frb8yyVi",
  "key39": "5VFiyDgzdsWWr982Cf2zY5x4xZceUE6ioY8zm42RWARtwpZt8eVrNNgdNKtGrzsdaX4ELqDcYmC276R5sXitiEFm",
  "key40": "2PhCnu38m4tf73ASwQUsCmh3RNHpoReih5tfmdLBmwS2db44xdho39rwn7r2WJQNQWfikwaGNoBzgTyFHNh6u5a6"
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
