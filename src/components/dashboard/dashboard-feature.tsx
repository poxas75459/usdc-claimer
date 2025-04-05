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
    "ymuUa4gXRW1VmQA1zQJSwzfSYQrXzFkGwhWQm793DmD7a3jMHHQ9gHNoSVHp9tR6Gx8BXb8GgUn69FWpJvgzEnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5zYQJqvGxvy18J2cjtjZX5d9SWi283ucbPB3KR3xTEQQqBZdvpBfLpH63cfr6gpoHk2ZSmNWbugQzpmkqsg6LL",
  "key1": "4rNrH7zDxTbGoCY4bhy6RKeCPzLJu7UamEkJtsmba1EmXXkBhr67o2YJWEg5L4juA9Z55WFce4NCCfeFx4dXJaaE",
  "key2": "3pCdi5ZTJWwRaptXxYrRRhYQ3VPnHf4VoTMdxXUUoB7fgmQsei9XRs1sNRPHjVbdP2X9ynFSbuMavpzKnct1oMii",
  "key3": "2QASkF7pT3Jwsuz2T5B7kNhynLAfaLRxvPDDZSYF53macSyy7rE9Tus58P9EzmsbyfCVqxG1enm8Bche9Cbuwem8",
  "key4": "28mR3FsNQw8Mv86TYC87T5Pm4BvoVbmy2DMb4u92UTutb7SkEW8dz9FkrHq9Zjwo9MjHvf5AmJasSSeoFZG6EAhN",
  "key5": "23t1auuJQAFXRg8n4nZbEgKs4tNJCTaLKiUYoHqsmDKkwR6rutEfPZaikVHkFSk8jykK6ekApGPsoiWVqNZUYUvi",
  "key6": "4iigoVJdKMRjd3tTzzV6NjjUTCKd5Cgb7JUVZGcppbqnkcWsW6PXmqip5ALi2aWn1CUBnJtSCfpUoxhi64umGkvy",
  "key7": "sMp5XA2baYPpU86fC7xcpRNiWPWCWWrTtGJy5esmW2C624V82hBbRAqqeSxWSLid24aZRdxwyf5eyEgYx3oRrcc",
  "key8": "5kXZLVmNLQUywiqCNtCNNSeYQx2wWwbHpTseMBvtT9PcynEHMcKwMut3YVL5eqCXLqGfnkk8Hg8wXbMwc4ys2y5h",
  "key9": "2u7s5BAR2dCvL8Q9p3h9qU9KoC7RnK8Pfmo4i4iAKYTWQxErJ3aePSub7o8TRGWpHcLaZFApWBgwkMpPVXkJk1iY",
  "key10": "3boHM8X1J3pnquZHGJqj5sJGyocWJUo3LpnXUX2YG6fozoxE6grS4cTBHKbG4FkDZgu4i9tL9WbBkNthFTSdfgmN",
  "key11": "TSKvcQY4WjKD3zQcyhyPLo1woq6hBehMMEMEGpsoig5rtdt1MYqt2cVE7asRSygyLG22Wz1wRF2tShktYVomk4R",
  "key12": "3nuG6gHg8EiDTi9p3SjtcQfBEqdqhzSHCLVhkCniRWcT1xJHxGZAL5TK4aUw757t33n2TAcRJccGD3G6CGdqVh9o",
  "key13": "ASZjXjpqM7B6cv5ZMWTv83UNExBZb1hS54ZVDjKPbo3vt32TFijuRB3W3MWdhXYn1MjmRP61qjq9x277ghWEd25",
  "key14": "39vEsPzmKmkVDEH2HsTo9d2wa3hggZNFGJndh5gtmsSxkf5673tdHGifXXoYaPq6Hc1ozR4KioBPbxikTZcaWtSC",
  "key15": "5P1oc3aaNobzj96RCK9Y5dWtc3XpyxCEfjTDsXCjCUcJDwwUEWRmsjHjpBTt1GtGfk9tsnXxgXyC3MabAVjLViXg",
  "key16": "41PHYvkXmt7m7ERArfk8cwQ8fVfGpsURHSUMTeF9WGBj62d12smZUwZWjSBLWJhYfG53rUQg2jPHtVVDGwNdkFPQ",
  "key17": "2jzrDh7MnMnPgKs6TH6Ta9m1eqfZELqyC2HCkczsQac1WAUjdL7KLuEnZzPVqtjtLzQQSkUbb9oimvYfePw8tTNn",
  "key18": "2NfA3gXpCV36APba2Gb8J4mhzL6DsL3X7wvD6o94amKFHWhe5P4sxvgMiZy1S7sm5Zn93PBRD1omeTrFc9rRTpXM",
  "key19": "4kEj9UNQH2E87n8y7kCWyVHsqtutFmurv7gAGVVHhAHNPTsSP2T1pkVnzRgwrPSP3LCYdTXcr4wu4WrWnhx48uKW",
  "key20": "5hY2ZSCX6rMVTbfcgpTwcBNVPhMP27buqTaEfjeeRtbs9u5ogz4M2riJxFzsdSbLVmUtq7WS9S13iNkyWDzJ9AsP",
  "key21": "H935T2M2Y8q98nhvwJv2WYdae8378UAawKv3Jdtxj5rcZD7rRTcYeKGJAasukUYS5AVwp1tj6m6VUKkJ4U2bLmV",
  "key22": "2DyV46EuhCB4bULXseu7ueQTH5t5ictXx7KEmuwQVJJapKrZZEmCrA91du4uzHMTE59jGrMiQF5PLPW3rVs4cLxq",
  "key23": "5sCd7JB9Ga1GsBcqZsV5ktRC5tPTifMwMAuLdTtaDgKBjvx2WjmWoQAhmTnLTecgpiLvDPuvty3FSjdGeRVtPJPu",
  "key24": "5qfegt4ECNUivcXGmup1UJuJgKcyAd5uAjBBxQrmoVmM5QQ6vHn4x2jgXHeimQ4eS3QYLi52orGGZWRRUpATgpYN",
  "key25": "4RoaKPGvzngmNthCSqTUem1ipE39fZBtSzDjrGtxAqqQvAujs7XMrRxyydSpCgWU4s6Vt9Z1vC49EoUEkC9oeyCz",
  "key26": "2BdKsGNhEtYqov8kQywbzytaafnrF5WJXMxZnnvV1C6obi2bbRBC1USKVgDRadQqcu5oKiWaiDHVVqivmws3d9V1",
  "key27": "3LWpmjqG5AyDq5QRhDCPg5vE83kEqdDWMPH46g9wbWw7zy1ZxV9UCg1yu1Wp3VZBhkemmFCGrzcPfnvRCNWYDZe9",
  "key28": "5azBa1NHUEEztA8rBMj3dPZLP7mjVRDvYsWy8KvTFSsyQDoVtfKjkpuVM2z9zVhBR5mHVWg3nRJuyQfWjyeMTjSW",
  "key29": "3T6tejNAW9C7CAhTu2m7sWjAGj8sXLPY17JXwngjL18FATAJQS4G7sxi4fV2hv3dzHoyfrBpho8X4f26gcng4vtU",
  "key30": "4B47u4dW9Zp8pk6jtDU52iphTEySnkDEw3Bj8VTJpaquvaPVCCMJPviHJGCe5F1k1C82YTncVmLjK5nxx4i9a4c1",
  "key31": "5bMWuLdvNExM64qF3LrdKSvgZptfwmzRsD4eMcGUfKeRyjCBjkr3qqcEdKmFndgt4byrqMYFucj2h9Jq4jRhgVtd",
  "key32": "4HnkaDSzymgCD2Q12jEpYn9mUv4o1kmBSTi4BH7GoMMMkmUdwrSVZVN4MQpaKVz3YUyU7A6T4kDNGoDRr7Gg3i1x",
  "key33": "2SWXncaArGztnNdKdGmHMhNJWQgfd6Guh4rUrfuYbaGJ6VzrpBfUCe1NH4TVG2HcivLZNfBbjbnwhLFcx34PgJew",
  "key34": "2y5nVirpRmcAxnyPq8V5enmwyq4ThWKt6qoWiFfGV1ktpZMXfBbtECTwd4BeXiyhgeUX8j6qKbB4qzm5aiRzyx4v",
  "key35": "3upg2szk3T4wsHYMn6Dgb5f11E3Sb81hseHbGNy75nnNA5ZVqFnTjvBAwAuP2BonX2FTkCxD6k5aktjmNRugT9hz",
  "key36": "4kQ62fiECvwcuRK5YKqhj54mNKb8KLQEFrQEK5x8GTvWmSYc6twZu6j6Rfzq1ss4yBpQinr4e6z71L6Js74w4QTP",
  "key37": "4iFQK1EJtDBjmhSeQmVpVNdaNAroBo9uV4iQ9eyenLt3Pw6LCkTBF1McPANNKWU2VDnMGiHXVpZTCC23M9MZCaEy",
  "key38": "FqBBu6YRTnHx2x2WkNj3oLCVfWyrKtXos6iA7MZ3mEJ2FFZrAwXdmh69wbdyAjUwzMg1exwmKA7SG3S55xGXxuz",
  "key39": "2nW6Sgd1CNocKsVhGUFQZozNWw759WWU5HEHdNizKr23kFe2PNuTeN5kAg7cftNY1wycZ3eFzrBeKveUSePsrz4J",
  "key40": "sSSooS3T1VGoS1Dmu6iAqQcfE25DtXBk2GBSd4yWqadGQDZ5rbNmMLHDtrXQ2i847t4pjqfztyEcajM7n7rtGMW",
  "key41": "5KWtHMD1U268atdsSBiLDWurmwn3z6xVmqQV1SrxUYeAwomDLn7oUbwZd3eYZzj5VLYiAok7temur9j2RzuQfEU3",
  "key42": "4D6aJX1WPhEzWhCBj85uipVynNRn8TCF6PLEdmaBV5NvsDZ62VnZQ5JgSrHoohfmws4qrGhHq2RJMEhAYjWYntLY",
  "key43": "4ckAnP5hhYzkaCbaXEez9BDhPDUyWdGEpdKCddd3v1XJaStqDGMXaZNUDgYgC47BpptahVANW7S7621kmKxGdy48",
  "key44": "5oYSBJFRYQyccVPpk9c9A4RzR3PDDHrJBA9AfsFAafSmQ2PciELrF8VRzuyoEpwj5JgjJQW4UiT7hGnzSripmotR",
  "key45": "4YqLSaCpZicjnGRjrHpZK24ASM4zCRseCMWtkWqmCw1bdEZu5rokJJjyFY7RYANHFiFVMikZtjUhTjHbR4BWRc3L",
  "key46": "4VfXShLFBz68qCDCE9L18QQFUXmr8FaMdCAQw1sraqaXKwTCg5LYgM5XpoKjAw33M9uqdmBzEx9Pcr2Pe21qZUDF",
  "key47": "26JeGjJRUtdUFmEVx7dZv6sz8NHkQMf7i8h8Cb5HLNoNEkMSxrYm9rVuSP4NaXTo75BuDN11Sk1hqmZpjGAFBzGo",
  "key48": "5fYqg2fanSicWEmMpLJMQi3DDZLoMaBf892jD61pTvYpLzRyAdCVf6jiq5VSXZSPMRvQPYi4yXft5X22UmYWLVSE"
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
