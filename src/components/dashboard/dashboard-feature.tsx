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
    "4rcSGrnV5vWYbCNA4n5p9o11DBCMK7vWp2wWR8b11YJc18cbwmRd2eeEFGVToMyWY7uhmJfAyV5XqdPsgCzXDBX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gjWJPHPX8BJwtBB58rE8mb3bgv6oUEC2Ce6KZxiQxoMpinbqnLQaKZwtukPpNxYBchXDzbQwsfLwAfqCCwgvRLB",
  "key1": "326JttkX3LXedGnBrnnagyHhLey8Sy2b4QsZ8WMYegmo6HCKUQXofNkwT2vFWpmMy1hMQZMM8es6ut3EM9KJY9DJ",
  "key2": "34R8vYqM6gHNdrae5NagVzFXZsUufVz5iABFbjLw9kZ4DfU4KzELUsMsEjQ4vkSCMwBcUWhj13hJSDxAmtukem83",
  "key3": "VERd1o29TgKpXXRfkbaBuJcU1eseKM7Z4Wi2Hti1PxCPxgh5LuZbEfBYLagFqFHjrkM15NJHoqBmZ7N4tjmZB98",
  "key4": "48vDrTgvcFAPU3WepogP4aiaHRdXAYpPL6CHuPdh2yAh1JEuKAsaGMqMRK2a7z3vVRL891mJxvzYaE9w42XDavSP",
  "key5": "X63Ms2m4Ypefg1zZT4igwCw9T3xDjGVahyH6MQ3oX2dPxj8qRQYbZtMt6bcxmm5dwbydZmFhyfbxKvTFnSP31BA",
  "key6": "4P7NNrAyXQJSqFy47SXb1uV15ovpmYXCXYgPZe4x4hn8MGZZ634Yp4p3K1zoY75wxESXzRS8TfiA3BpnuhkYijb3",
  "key7": "5v8ix7XJLg7gXh3geBzjmzbCX8K328kud3ZcuacmtsC5zbnfJPA26TEGPVZG8mcPvTVWj2NQ3PmmxgAdbwTYT5As",
  "key8": "5SyynEQBMgWePe2BFwztwQ9k29wCaTVTUBtXntbRPDbxgTUCvSrfRXtFMFAbfnD8ErakP25KBh5E4bYfiFqfwq4w",
  "key9": "4Ssq63XvgDdMYks9LSnnYTv5sbmmckQTzK3h8uonsW2W8Z6wsAgkEgpGDXa3rTqdxVBUjtPQnjTh4cdZRDGuFKwL",
  "key10": "5Krwr2eZgmB2w1u6Q5ZoRW5yYZ6y1MafCk6gEpNUJjZXm6pwfCqo1pQ6WSunxhcXGSsyfG7GkdTwdaYgUxfS7u5n",
  "key11": "zfJVAXTZte6152y3zFqC4x19m1ws7DkAVawNNP2cE3WL5rcgXaA6uTyCkVipWpn5GZ72CTfnJixYKasprvt93C3",
  "key12": "3syYdW8B4nybJ73cMMZW48kn8J78B7CxP4yRem6JnaU6sW2MFbi9QkqdGh4p8qEWhoesjRYQpXKNFi6FtPonFaya",
  "key13": "3q7H37WQDkGpWLcPFZU62hQcEAuhvutH6Atdyn7BzwbNygVQyPTKeLhCKa5cisgkgvNjY113MrKDjdGWj4QSEsQP",
  "key14": "2w6rmALi7nP9RdbuJjJuFFhmJKGffP5VpX1kcFSJp5rzJKsHsihjk4WdSMZ3KfHMWVeAMa4nfkrZaZyMiuJMmKG7",
  "key15": "4DJNyNX9ny9GozUuXHSZVKKEH1SkK6TwRHsa8bLuxvSaJV3SQMyipbQij9CohFwkJoUbKHbXSvmkqS67e4ZkpjXU",
  "key16": "4pZiUaHwNM95UgPeKSZZipMiCW9W4Q9CbL1DKwcNdq87JmKGAJdzkMQ2agEg1htiiyRUKDD7mmLz4KPsjesMVnRx",
  "key17": "3B9afZh3RtpDVpG53CZV1fETJQDMpz2i4EzFbVg5vgMP6cVgwwVaasSKDL3aQ2t2XTiQQH9zENJugUoUvwGGG2HK",
  "key18": "3tTL6AFhQbpMogwFTb9kdRCWqGqM7UnMSKWeCag46EcBBLduojtCSpwommgqFLA6iuSvhUnx9ZXX6RKkCw7iVUHJ",
  "key19": "8zYCAXyL2D23sKRaqUkw9rhJAPhnRnZwaci3EojaHCAN52NSrT1ad7JgAgtjNJcwRvNZFDoy3qqX2grRiPEToWU",
  "key20": "2RGgKgH6wPiU6kHqBQLQxC9CnJ3hMuvu6XEJ3TZi5rMVoXkCa2ZTFCtuPDmZ2zCpbbcMcfQuwMBwi1AyzyWhyKm8",
  "key21": "562oBmTRKkiB3FXmXNRGq9TzQyDGgfLt5RwqfuT4smYWWn6MwN9KBYpmFqToPL9GUKY6uf7GztRc7Sey7aDBUvEU",
  "key22": "4TZKM5rtDXoXS1w8J9j97VWjadjreTb1rK4YPrniDL81b8bLcR7kvSb8JfjzBeBPJngTrsuVADEmUMQMfRZxiBEP",
  "key23": "5jjVQDcYsS6Zwr1vQgiLCZ4waLcbvihgjdnPXvVxxMPfnWZfDXCHSr1uJuEYXYqmQGpLJkAdT2rMuFEhVszx9xiP",
  "key24": "3E5ycwmDkL3RwAbpZ58zCdG3tjULZf9FuULaZarr7MZ8MLgZrkyRgHLkybe2RBGs2hgMutLxkoUGMNN6BwRZvytL",
  "key25": "4yhFjrwXD9c41QoZQue1Y3EhtQ8HZMKhdTuWai5ZbVEqh5seAeneCsDx1cU9tqPjXErZVXzHHChoE8jHT2e4qbRe",
  "key26": "5tHLB7u3DAHE81vfDSeK1phaxPb7B1A4JiNELbwc1T9Bg6C7b617UmMfS6ToLRnE2thuwD2NUY3trXy38Ao9B9Ld",
  "key27": "FPgntdpXdtTvYHjNhQ2aJs5G2WrAWg2xWDuaUhRLMycNr9PEBadg3xQ479CmUHtftGTSZFbvXxg7Kq58shPHizd",
  "key28": "5rexHinVmb458AdTwxutsNSgnxkZCnyFr1fgEJ4rVfXsS1R5nZKVmp2PiqVZCV7Fswinn5vvdRhDriMiEXLAjL3T",
  "key29": "4AV27ZTTCcnYRqzeZB7ki47FcMxENR9tYcTHNhd8jkT5UMgvQ9F9LY6QTEQMhTnhoqwrwGBDEuHdUWSeJZWMhshd",
  "key30": "5RAuGDGUTMwMyNmed1EcT3L4dKQ1G6xnHBRPEubSJ11mf7vuvpxwBmz89XgrsLhrFTFUmHbfwYHYV9G1P8HZdAZm",
  "key31": "4Kv5g3DSeg3tW7zKjpdYCeYrb2DxaYuXFAGQdxR12zwDxGWJNRjn1hjPCQdBtbxyyKWRJ1qeNctW3e5kwdCMaqb6",
  "key32": "3RcHHCaZCW2px7aLmQEVxjxjKE1gKu9k2oikAySNBu3MaH96rUDGq2jqJAGNJ7Zyb7PeQoz8kDBdCwiy6PXUA4Lc",
  "key33": "2sZ4Tft1JJsykz2bursqy9kMZxng1Y81bM25MAZRcrA4T8ALa9k8RibdKns9FQwRexnE5mTvN8btg1gwWkc1d1kH",
  "key34": "4vfUzpKNqL8aArHkPu5gxKcrxaya8C1awFkYUj6yE9yiZWVNS1iz3vDkPfXSP4dFAFChXhQU6vKZH8iWSzYuvytk",
  "key35": "84LzvNtXWXDshUMHfxN8iUK2jwcUhtqC16egvkBhvvjBWXxcbgsgMi786jMTJqBo4YKHEh9rMJ6FZjeLEiBb21s",
  "key36": "2sw2bbtEv2UPxnRYBkWDuEMMWxeJXUgrg579HNVAMM8UDXMiLpkUiSjkSEGip96PD5WABDeVUoAUMPPLMTqLv1G8",
  "key37": "3LFWFSDomgsSU42UUYoPDeVkE51U6uhzmw59SrydHJKVeZ5JU2HC7VLqFkmuAN4DXMRiq2PBKvcXMySvHnJ9wscJ",
  "key38": "4GqTjCJ32TE5VkkXr7zKZbqQwLMKU7pdUogSeB2amDjCv9Xk8XNV2qKc8yX2HLvX7GK9VmhNaSTQL5tT44G86oWo",
  "key39": "PwNSL6SLX5s88z34pGfzR1kFMPThd7cUmw7UVnRcdzeR3tywxtGtuWSzNqwAakg3nY4P1KrUordQC9ti2Q5tnAL",
  "key40": "2p1AA91EjTYx9F1VZUxmtWqMPDUUjkuqhEM2ReX5t2gqjHuXZyzkXikC9g5UQjikhGGsuTKfaQ51D79TthpodvCK"
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
