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
    "45r9bqtz1o8MPgSqdYuAqdeL3darsrxWWq5ytUeBPsTiCnn28xGMX4i5UwxfQu1JtM7XifGpmf5MFw9xMo8E7h7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yt1Ci2vRJkHi3uCW11uiyWBQPXRGGtnWpmV7i2WGVVzXFHaQLmPEDg8oV6RTkCrUwtN1SGRaS2HLKAnnJ4XF4bh",
  "key1": "2bzDcFequ7GfXLc22MiNTmVcFXPm9dYfKjy3GQKH3HB3eZzqZ3wYJfynbcS6pCAQCcAm3AwnMvDnsJwY9EjGUu8V",
  "key2": "5444cE43ojwFnh39Lxx8fJE5excm1uakBZZtNDusRSYwkS2qXKf5XxwQmUggLm8H8QwjdHKi6uuNiQshW9jT8KXP",
  "key3": "nyQ2rq4GTVHTdk3h2h5NFZcNJRSkznF4L5NGcFk16cckiCqgRraP2jSpdoVLmECm45H8ajEd2SLZmggxbGGx7mL",
  "key4": "5Z3Afvje27ztxhNLuHtS1iWV8dYSN5GQ2mn7Weodxk2V6BdufCXcEtW69GFTakafkK6wG2Z9y6nGhcKPaJ2uR9MY",
  "key5": "2Bshsb5U92c2ky9FURTe5krLpGjhjt3ddd2CZ6VnPegbwyTxnNF3WgoCXPamhSVSrnRX4GdBx3K25kFq8V92o3GS",
  "key6": "34DDaFNdt6v4zbP6R6Qk2C2BBjz8vGSXYFZtc8MN1PGAWoiQ6kpvtKNHyQjAxe2R9KCw9LBijAVkZFFcsqUcGFfz",
  "key7": "hC5vcBUw8CyNc8MmcAXn8D6AazZY51aWtVu56PHbCMbEMuPHfE4M5nsMMPgZKdoXe9mzQYVaSbZLYFxH64sGs6N",
  "key8": "jKM7R4WMGwVCZdiCkqvjR4aTB8qbQVruSgebrLixwjdhdu7SKuwrE4Fk2iHswEPMJtwMz4aR6w7qbrfVCCvbx9n",
  "key9": "21WQDaizWyM5sDEajvnv9gHYc3f4KeaxDxHD343cvLD2pSKDYKS4AvxNwDAzEqnb41Yz9x9bKeswrvBweCTxezkp",
  "key10": "oV5XGZmkJq3DTXAi2JQgfBm8yqyDmTAPLjPSLXC7YANrWMxV6HbkwW9dcruFCXrXySRBY4LCXGgeLzeqQKdNYo7",
  "key11": "4tw3eh3xN3mFuLUdLFtxktRGeFvugZ5EkwxNVnqzhwgSYCPcRpG4HFVNU7rGfShCksPPkxNy19onG2TVVg5CAUJu",
  "key12": "3gvLgsrENzofjBFdESWrzkHUbd4oAFePfi4ZMYWoXD5cCNu7fMYRNmocoL4KMa8A6aif3nRLiRCQYKvbTV5ax7Y5",
  "key13": "2Fwc9pSzQkqRiXJDHDgTWw5N4BTSHSPK6WguvV1gzThphCjLBF9KwDPRGPWiHp9ZwnxvftLCwjxeA1KMybxgwDvB",
  "key14": "3CmEWW2GjbiYbNYwnxtdftZCKJGQmJUsTHJbXwraXVvCDowA67ennH1w4YE3RtDJJw3VC2E682LZpVqvwZdSpukH",
  "key15": "4GsxUDedyqFPXiynSxsHot3V6v2h7M5rfUf6aAPiRwL45wBVEbLsD3VAAiV3eQ41FoMMizPzxtUiebTMWkCCFvPY",
  "key16": "49nTiMPNACVDS8X2VPckHA2TWrd36HdroaE155jpVzq3cRoV7iKZB6SjAhLDsKe4VkiJYLdgMpsw1snX9qjmP9F5",
  "key17": "27fm6iVXTX2HjzYSbSEWLLuWP9s6QWKHZfKByfataeG2TppSTNmmiBdWTJMcXgLa9UVzLPqnJHrbz5xD6rgRyZLZ",
  "key18": "5icJvPbXAH6zFwaeb5Eob1uLkYKxsiqjYUJGQRKjF8vFKxTu96upmDk2qmpUFkyRqfjpq6Btns6FpfVUXJ1aBxCm",
  "key19": "4aSj4Hd2RvCuau8nLpjxcnsDUk74QjJsEF7M1iUpvZgorooLMv7TK8HwyEPM92NwEkBQ3JKfBjkVnmPp6fb4hFwe",
  "key20": "42wrtvky7vyWR2U65dibHiRJtgeNUWNXxXck9Yiji2ze5cwgyeBaDMhK6P1jGXw4fb4zqjcrArECm5hWmLLratzs",
  "key21": "z9j8X67ScqLdwDpCz5pmmpRwWsaJBxCBWyqaTnkuUrsAHpgiYBKSgqBcdhQdfU3zH2TupJdL6ePJ3arVT939fhe",
  "key22": "tdEoo96qTyU11QHQHgXDLqYfyL1C2fQrKqKVuJuJWQuvfpEpcYRYBJivpcsmHNkYb8YYWQFMFJy2HPETUR9g2JV",
  "key23": "67Tb9qS7vDroQcCz8k9L5gT8KCCkiTi3xaggugKUHiXPm4ssh6ct2gUttK1jYYReQzGGKd3GtiMo4asmvg6J1E1f",
  "key24": "5itCxBP3LjWtYtrpLRXHXGEsjtJ5jugJedSnCCxvHW7kQJ6TZ1668GHMvF8F3yxzA12wQDvBB4q4Ko4p2WFds9mf",
  "key25": "bCjJTcWyGVNUSXJE19N5Vj7KW1bvACYSCjsyanTs3XYNdhvmoK1K1kTkxWeRkZ3XZjo8PqMFrq32BDZZFaqmGV7",
  "key26": "25ZgSzSpX1HV9DBgZRgWzwucDVALYNB9ddTaRSND4J6CCgCJR4wYayJ2Dn9penXeemGxMxZxD6bv2SZMRvXjjcpr",
  "key27": "ckodRLjkAW9xRw6enscb79yAeEzN3MWfHALE1gHKaM16yysjjtiAL3Txe2v5LRWW93TFjU2b3huEi5Hq8zaktHS",
  "key28": "23RKmJBeyqdnkMPnQvRTkqY1r2PsLe4UuzKJj6hu5stxWgBHHYUDNS69ZnHLFV1hNgQqnY9f9A7K36Y28Pq8aWui",
  "key29": "5CR3GLETQcwEfCT2hUYsYGK6SyLSqowq5eQnig9jAu6TMQaUWzjqDYa6DNCekdiqKpfQ8EPjRNEayviHEHGcj14W",
  "key30": "41xexU5gnraoxTizcu8pnA46UvCh3iReBk7udLgUASiANRmVQt4gosCsrZQ8nmLWiVXjkEEMkVW38Vw8RqveeW1V",
  "key31": "LMtoq795EB4AYJV3NPvkqe7XTn3qqQp1rnkp82ooFSK2fbtahik7sQmsbRHz8kAqyH98NXCb5dwxhmLgoubX6qU",
  "key32": "3xhnAV2xXcpHo7KhvV4jVmasQP2mSs9zerqnfwfVXQAESP6GLwvDcZAC4ezTLZqYr5fZ2ziJBzgH8Ugkgm1Vvy4A",
  "key33": "3kHeuSQiqSDoxkZxCGkw7v3ZU3koKDiNdGVz7YgtxJgUQ466upJJykndYXBSGmM24WEDLtjB2cjC9Acfudgxj2Y9",
  "key34": "3ieGnja6M4XARqgYN6MpNaStEqGsVDiXxZZwQpcQfZ71scajiLnEQYX2TGcZsybZu41RxCrQN8h5MFfAENWUaedo",
  "key35": "4skCz2qbESSk6oufyr4fmm3fkx7xHJHSEWNUi6JdhRmVoe5Z1PGeuL8VHmsooNveARTVKkZ98chaMJ7GUhXEdzSa",
  "key36": "4xoPkCkwezMuQKmPfDKUJjLNzs54zLecCaLN4FkEzb8K4DjmUuP71H6jJ5Ue5CqEbyQS6T69m5Xb75dbArW38Jgv",
  "key37": "eTKEPN6UNU2uXXpzqV4WYKroSp8uzwsHF9AAm7nZXyV4TrTo4AxtENqqEfgPodf1TqEPHgcqfsR6bMtWsdajSUV"
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
