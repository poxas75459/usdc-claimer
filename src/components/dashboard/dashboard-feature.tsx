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
    "WEz1UXcV97wkfCd1MKvPjhqyyFuERuDPEwsirMrWjBZvuKy5DEeLPJzwWcEhUiAZLuH4NMfUeNQJwZvo8jHuNvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q2QmgysAPdKmt67peJRj3r13iuUvFarXVgbMwxDoUs9ZegufVhD5LN7txRKH44FyqvyckZkaLYGKi4bBhzyfDgt",
  "key1": "5wKPv5s2DwAKbMDUho7XhkLLeGvRubKGD26KB12i5Cjzr1M2aVigijmpG4VMPnexxrsT2d5XxuVWPqbdquP6rEtd",
  "key2": "i8WTTdsSHm6UJufFmio1mmQC4RA3H2oDrCDjnSGjsmXD5NHaDoegNLYLFL5ot7impixMNctdcCEcmxg6Z3myXhF",
  "key3": "3k3QtCKnsZL7YKE2epUFi88GhETCHaBouaxuADHfPoWUjwLQYKMTQP1NVgyh4rGhcnp5pqiHk6JAajJqrUdreaT6",
  "key4": "4w63XnoMPFECNEYXpdLXPBFgGSTAyDG8TkyKbc6BCfzAjoeGE4yT9wpPSxYaBGF89cSBx2d6G827WSr26fnuvAZC",
  "key5": "2g4FVt8gWRmeuTzRwXBCbp2bAVtJhjEfxRdjTonRKeWy4RDNtsS8EfBMFP7i7ZP4eyAyAsfGCoSJbSjwG4tCAY7U",
  "key6": "3ZBJUY7dKQSfdjCaZaQbbBZuv75GGviEoufgP25fMQDHNquP8Pp36SPei9mY6vGavHeDU4mZhYFFRiydvSWmLzof",
  "key7": "3Z6FfdyLnFok7GbX73vdmfGSMZkaSJggMgNEiHrTp5A3YrTEeHS4XpABycBaXzLJMhduzwbLmL54j4YNQEmAnzf4",
  "key8": "3jKi8Fm6vhS5gevNYfNTWozJhjm57HSgdLyavxC2sW7XcaP8KwjYfpiYVSzV7BHgWsH17jYav2xE8y9tcNJLjQGm",
  "key9": "5gxBhT9yB1FS8y1NNkwrzFko6H98V18snnGSKs4GNkyxe4ATG3rqBu2bCsDrmGA7xb7XCjv2msagPLGp2nsLRioW",
  "key10": "678sQc72iFgu4Pp7XEJZXmG1FChKjrqTmmFZRWNgLixaF6CsQinn6KPbTprxoDpkSRCUCYaBHxhYRQd417pTbCuv",
  "key11": "5dceWYMziwLkAH34k6bEtfFQzbdJQf5iJyRBC9qMvmS2EFjaTXwp9mYGfkGuwLLc8HQk3EprF3UefcJpr5KV2uQy",
  "key12": "2QWD44gB9nB34GiyLimrHd28nSn8UvEbhtKpZLFmRHUjifSc2g8zYSC1W5QWMFjzjL72NDgPyERvHs8STeHnfEB2",
  "key13": "4LmNTsebz6HzA17TtuYvpPYvEADwLdeQ6A9zoWiaUTZ3ihKbLWGszN66CHKNbe6NXiH6pAprXaq8RJFbxCvR5ufA",
  "key14": "n5Jj9L4mKW7JzkBFTDJJkwakXNAh578JEREmyuwZh2ZLNGTrDYc5VBbism2XFPFPSr2BJ9zX6bKyLdzPh6fRoRp",
  "key15": "4P6UF4e4Mf3VSsocJ3RsZHyjqGciHdmqPSGtDy9GDbidhpvQGdhUwLSdM3rgSW8y1uSEZHWKVuSDaCTnAtqQQ7Dz",
  "key16": "3UBgZk5rU6XakcqCR9RkMfevgCtjwAkUysEHTbTY6MybTFbA8idkzgGvNU9z2uf6SVAg4gRFpTQEchPF57rhhAuN",
  "key17": "pozKG1ub1LHcC1W2G5BryfuPj5PgbYyKFmvAktheJASAy8itzCh1mbQAtgSYVgirZni3UskKGV54CzWtkUS1HbM",
  "key18": "5r3Ms6YR8KZ2k1oLCeydZ1e1J5U88caciXX9UZXVWWTWggREM4FQDmazc2wKsma982uLhmzzAZ1UDWyYRmJWUYr",
  "key19": "4TEWdysVZ81dzVMmDwinkxpyh5CShW22AVRPBAoyfqTziaZgjyojberNATaVBYwquXmcy5bwUHPLEk9XL2NegBEJ",
  "key20": "2M31FrybN3vM69R8GD66t8McP2zsTS7hX96z8jpy1ttW14angec4bXkfFsyhtnrY3L5v4D5qsD6Lr49SAwWxG9BZ",
  "key21": "ciggDfCeQ3z9APQ5e4Q77QfnpPmYoHLRCyUNK4pWeRNBhpEqjJAALjQ5qwXqaGCDAHk3vk7kaqDQYresJ22iXJv",
  "key22": "3MLwD8rW2Y28YnYUMrSrXKAfTSXtJFf7ASnUhd5q7GC81oWAQS7PcoJshumpmT94nw3pP6gwXjSQgtdP6RVsJ3jQ",
  "key23": "2QtveBnbN5mX3R8MEWaYT2C8efDBuLeSUpnqDASnop5REhwFkrCjSLppUFYN4Dfda9qwHZoY8Jc7UNQtXLSSPFki",
  "key24": "2Sca8RtM2vZCZr6wAfrRnqC7JE1nUMYfoF9qpzzi2AkQFKXHxQP6TEv92H2JrKsPvnKU5sBgnmKmG3njnG5ZJmo6",
  "key25": "g62c27QzSLdSWxPFFEeqRiYkp7X5xV8iceXqTWySYnopRPD7kXRjCVEr4oWFfcy3sWCxZFcrokpVXoDEaq8zHTe",
  "key26": "28XQRwxixoAQWeXPnis94pYYg66ckJcDDqV41T7sddp4thsgCo4MuE4RfjrnQTz2g92AVSVfUZYPdXgrMXeZn4vF",
  "key27": "48mKTgY5wk1UC3qTHwcNnrHgqN8HAYoJUqM4JXwUGAogZit87bdsefTho1u4VuxFjSUVQEMLwf6vLHm5GxzU2gJ",
  "key28": "62Vj34K9N1bqRfjzCuh1EkniLauAUQd6aRZ1pqGkGqEbMaoeRc21inzna322NwBBw2wKAiULaZweuSV8yD2baAyk",
  "key29": "nrTyUYPcvCyaCEQxZJPyNEqM6ym5VfJzK8TYtoJAbbkJPeBA9N25SyspCHoAWZZyisJsw4twjFosNyQmLsNjXYT",
  "key30": "2KW4dTjxbmcCQYicZSug3yGyfjX315EZcBLMdWBS2ngazAGUQZ6YpDAzG1qodCFMavHtzWFwG5hozJfHhcBRtfKU",
  "key31": "22NBC2DhoSVYmrypAgnCDV3c8RnWwKVhvSuhskNqkrpyH8jiFvjv1X9nohpge7xypnGvGeZA8jRCmJLYboRExdM9",
  "key32": "3uZzQcFfApoyHP6WFsR7xTJy2rhVcaB9PZbJgprH5pZCYWWJ9MEXdb6xFr7sia3eySAgMHu3QYqNexLDDsXyfLGo",
  "key33": "4U6JQAtYknnAUp5z14637W9bfkgEDG7FWRrTNi9XXoyeP5y9jX2AgT3ZCpQnG9ULv2xzMcab84mq4jRYHszgoXEx",
  "key34": "56rt9kjyTngNTMP5Ke8PUzefAHi9m8nCyQoaYo73q1pbjLadUCrvzQgaV8zevKKkc2uFPcLkvARpUsuRNGTy9s9f",
  "key35": "jk4YRyaenMbHrxoP26cS1U8Kv88zix4qvvjT2zTz8en3rVUBdzp8Dg1kEZHMSW9negiB6u1nCyRxikURPcAjJXp",
  "key36": "5tJXY2JJiSfWvmSexGv1ctaDWPckxMTeufZPutdgsygjcExVKXbn7GnK9txhcLNSYfuphYBNUTkUfbBGzCQq9Sdn"
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
