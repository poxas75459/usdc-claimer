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
    "618zug7UsdtMUEgud1DxEasEM4kJHzZFMmJGJcWBHwV4Ycc9P2YkKRLE195pHEtP3RbmaSjqqECtuzgSBBpSxA2a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1GX8jeqZf1vZZizfwQS8ToNJnt5Shn8WzdqpdimAfavkCvjoPWyFCBNJTEyzPWfYTFYBTbiAnAhPx9nRNf3Ew6t",
  "key1": "5ddByR8F1juNHnZFMXqmiwSUdV94pSji6AehdaShXQKnTUj9hwiSnJ9zQLCzniXtmhbseJXJ8TaBJrz5NXVytKGN",
  "key2": "gTbYEr9SqFBouqo1SyNoFFFTkCNp3oMYwiYU1xTPf8Myd8TqUPXXfBpsYA6SrPEiZhu6Dtx41i9WCqrhr4X7MTX",
  "key3": "5mTKL6DwM66XhfzPhJ1RwycDnKutGV7cxUUNzpX6LDXZwgP6swRq3vuAdxQgJEidQf6VxkhsHbwgcYgwKAVuxjch",
  "key4": "Fsm7yEyjnR87Gc2UxKsRGCTVTDNvu4TmMrVmdFhL4qYGgk9XLsGfh98dPNXWwrZ1P456BTmV1RF96ConcfR4iC9",
  "key5": "3mAfJFib5C6xHwA2FARnKhs9Qk3sLtyxCgu9PWRCfEs77CToJa3MtG1vQgc2H4RdWW8TdmBdZPLLAJ41jZBCFSKU",
  "key6": "7rWk79gwbCZp2HaHGF8WqZHewzXV9dmokoWK9QZYQQweF3WgXWrr2czXszo2DWS9zan5mbwpu5H6H5J8skLyeoR",
  "key7": "2uWvSQrdoE2RyzuuBTZr1Hyvs7RYBg5n1oXxs3c6aBHBq9guaHiyAjesdGntfMA1onL2kfbWLKJcJEZNVkjiqpZd",
  "key8": "65LrmdqgAs3iymUpTcrGXsk7TSwirJHcKTsW2SxXZfJGWwFrRHVxm3L4XjhWmm79UsuWeiQrdd34Yu7V4emK9p76",
  "key9": "2NF8AUmGdfN3WFEaTGxJR3dCd3KzHEgKZH8rstv2wWEVyT9HGTZta1f5zDz9hKWnKZAcJDrodsHtiGXkKFuxKFpQ",
  "key10": "2BohyCC19gUpEGSCA5ypPWnPEPAVtLN9fRVa21AVRYX4fJMHGCzVQiayFoSjS91RtRsAcRtqHwnL1ReCFMjUKGYe",
  "key11": "4ALtwMJCK89uyRbVaa2F7RezDrtX8UYG9xSq4fCgSCvsXZFQ3MyyWUXn2Jh1ytMoQ3hNySPit5yhiHeseYCoJqTA",
  "key12": "2rFPQf2NpS7MLRy1aTiv3YptzLK2i2c3mP12Viqott27fiyJv2bPwmxpwWbBYTXYWCAUPJYHYCBjswXS9ku9qMLK",
  "key13": "kqnZSm1JAb3cZHe6JrnL1jp3YpFU6PEJzqGmHxS8PYNexPCbmMT9tsZYcxg5JS5JHWJyyM5eQddcw8sWWQvqamt",
  "key14": "3ekuFwZvnkSH1JRoariDp8pZQNNzs3ViRSWrwChPM7qLa3EE492ee23QwWRGeyWPzcfpgQ7DRKdZvTijhoC5tZ8K",
  "key15": "4iTTeykmvEKx6WjaihgWzmdMoJ28DoXb1EXxxdLtz3HoUC2J2pD3weUnkCFhY2dv8bCabCMLWkvUt5pQiBosKba7",
  "key16": "2eoTLYRtzpyLEqcNkxzwFhGvconPG9RZe7YaJCbS2Qw7dKiVeRPDX7XKZzKBKbjVVFBLRYwzpVN7A3q4icnKFCs4",
  "key17": "4HSkB4fZ6DvuPpD1bBZwcd7hdBtLmdNpkeeYEwVNHRZYz1VaR1AzkVS2DtMj9VrUhBSTSffLn963DWUr8WEqTe5D",
  "key18": "2vu1AQBvQjYDsatcPNKgfLfQn9wv41nuGu4JwrspJtHrLc7qhYVm2mMbwQTAkd5gFvS7bjinCtp2gNy8EGqhECj1",
  "key19": "3276LUYXkXMsSAdYgH2tJGpFvGMhfHiUZa85NtBiUe1JevAW8jWC7X4FUfDrmxt7FSfKDByZBm3reSFvp9aQzNQr",
  "key20": "2F2iA14Kcuup5crTBth3afgnEWtAn3jSBNLo76qp5pkeENaFhydXaRt519DzLRxiQkEZhMKeJ1KcQbXJZ6Smpver",
  "key21": "3N36wVXESK9yviQ283UWPrk2uaZdKqTJKE2UwUApRvWNKeqxFGkpp6fLiWbAbZkv4TdCtVERBFPpzZyS3ZR8fxP5",
  "key22": "6NNpuwT5Wgc3UrmZnHnVSfrEPPL1zCetSdqxaFeUft6Eut2v7xnJMT7EbGNHTxTN6s76vYLrnycanx7NvRYTAdH",
  "key23": "4ezdYdwycL9VXda7Fu1nPVyK9PQmt2Kwi5jH7ZsUSoMuEoEnDJG4X4nBWFhAJejn7qzUWdoxaRhpPcnTc4TaAifu",
  "key24": "4LZXEpFRtzKuCdhMwyhXszKTJcE3yaoo56CDAzmgqdf5fzqg3kcHmGyQvpXjCrUoymiLLEuTpsTJ75QRxmXpLGdj",
  "key25": "F91E3LzxaNkfnaNzRw4CBqDe8cBDawMPjikt5AqzUsZJiz7mTsj1nvphUXLC42ENzTvLaGGXRddVq4n18jWc8Ts",
  "key26": "48e8Pk5V9GEGp1nP6GAsshuDiW1pse3A9otbcANon3MqAz2h86NWUkqkPivzp7caPU6iBokHEbeHw2Nsx7StMqfs",
  "key27": "5T4eYDxiwP8uLznVZfivMXbFsgGzepLTimfNAG7MjpRe16UYXa4d8uAzs1SqP9v5cZeZ3yV7xodxThWdWdTxXYiZ",
  "key28": "5EgQJksJzRncnfCir7DabcKvzAFH2hr4bjUMyii1HCnud5uCxRPuc2zzh5rQAXq3G3YoQm76pe7rx96YKzRLiPKW",
  "key29": "5SVaEgnw9EKkSKGoigHwapk1tWj1BSSMw6iP6ra87PfmWUzgqctfWNdZn3qVG1ZPfpb3k5twp5ZFRNj5PxxFG4V7",
  "key30": "43bJGgjoupsnAPnoREyS8514CyT9yq1N6QYEZQ2NAL5fNVAu7fEozYVCszr6gVNacDD2mfnZfrCf37qQWvWJcZ6k",
  "key31": "UYEJysDQ5tBGW9sQYiMq7hwGAVd9YHP3SniRcXRNy7q2meurbbVmbY8EvU5vJxsDHSkb61eyo7v8WJHEiYRbuZ7",
  "key32": "2gZ9EooHfB48vUB1rFqZwasmFCcar1BJYKY78cjtVKt6M3BmV58G6EChYdjCudcwggMZdXkaj59FZ2QNrP74TBNa",
  "key33": "f7HPgmVch7XEJC3nevCmXBhEGqkre2pXRZzGM2xhAsvucsRhE28AS1uzwJuPjMynyrJYeA36eC2QAhtg7oN1Pds",
  "key34": "22hm1Q68iKiriQfypLKD5Kf1CBUGRBUiZidDK2Zfm2idpFfuHpz5r48rKDYcD4jisVcWE3s9cCqf8o9ExiCpDGKs",
  "key35": "3cU67eRbqdh7xpKmMsQ87nghTwttTZTFHSemYXeMZGLeBhA218V8XE5GyPm8Byrwm9W4Gyjjicigs255j2hqqyKr",
  "key36": "LvKkoUybReGeMa2ZhTHmCcckP6tyPUJWvzZ1pvj7aYFft84fnW7SoTcYsJr8baDWEsT1ivXf9zPqLfTCisNPfnZ",
  "key37": "5k4gvrfELAr6pDp8B1iie26f1HnUc4fcPGN3EUzTnHC2TtvdLuFKnCp67WU3VQr2nfpfsnyjBKgdonAL3efrgtmD",
  "key38": "61drhyTvt6eCBmTYQYzyWABojjtTop6EcsbpsZctrEWKGkytEg6cWpcQjosS1ZbKZMtTX1XmpWMBPQEK2ipVHehh",
  "key39": "5Pexrd38cXrYHZBsK9yPDYW4xvpqJBywM9JHBVp4DhF3M1frf8zKy3waN7dyfeHQZJ3gzLnfLpT8MBjrpXe5RtjY",
  "key40": "52Z4KbQEhRVzyyjYU8TkdjFNaSuuk1ZuEQX2qSP7XBULbJGsCaYvxbkW44bHakHYoWtPgZAa7rp9fgmtPTg28cQH",
  "key41": "4RZuM1DZqBUHUTaeLrWodgWc6SKhQEcSd7yKdhgS25sMJBpeXxAjEfMKDqg6tSRsQMhicNPKjSPDXqmMfRUbmxTw",
  "key42": "2q88pSSEA3Dm36CCUsSfipRY8my4YCXMLt66qPViB9udc2fwARj8e5GzjsVQM1vNnohpXhtSBADNTee1XqrQMFoT",
  "key43": "2Byz9RYtR3U4BBgAfSbbigrVH3SGZquwisJ6AN9hzXCngFGgGHpBjKVYqmG8N3iUDjjUQF1mpAawxQwLt71NDYXa",
  "key44": "2CY5AsP7seqXqHAgyFZ4ddRQN6ryPc5cNdAVP4XSoPUsAMByJEmLfuHDWqWKcBwmDazAsqjw8R5rpQLJwFM23LCK",
  "key45": "4frTFP8NYkGh3c5RQP6TmQX8cQ3hskiXRo3c96NAgiiXaAWhMAvj6pUbbjzME4pxwf3F1SfPeenYBhicPDpNghbs",
  "key46": "sRDKLsBAcwq8546upad9XaEoiQTVtq31XctjjiHt8jB8312693PiJwH1mS7pPDYGxSimir8MKPZhubxaADmXKBj",
  "key47": "2N3rC2xEaRPzEQV1UGvt9sNrwWW8VvigP1HYCeRm51MUPnFvenp3ECrL8KXUuXpQopEASwtHgn7ziynCdyHg5xgr"
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
