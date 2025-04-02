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
    "4oLrrFCAYChgiTxA7Uov2iCovWvAUKDcyunk67yni6NaApt2YZeXfpztbzSRQEMbB2EhGEhE82HKNBkzZAWPdBuf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cc54QdtZoLvVndhfM3LT7dj2rzBLsonS9iHRbRZQu7vsThAkpdMEJi8aza5Srav6so7gqEB81Mxeowx4CuixJbp",
  "key1": "3LVTKQSpXLTwtVqdJ5niXdowUKbutsL41Vqt2tarJeiLqgKuJZZqDt74efWxy9xcm3niVNPUdp1ZF34pCjrPxUKP",
  "key2": "4yyGoZzqPBdL2ySfErokePLWK4DTt8Uyr5VZx2SqXwDCi2Ptm7EayCuRygZ8X1KA21paBvmVqE62d5ZJqik2LrHZ",
  "key3": "5uWdBKD6kjM3DW4sWNxqaRJSdpQ8SRsueQLjnNkYjzKocd3Agc1n3uQhDPrb2F7K1vf6SXxxj9Uq6Xo7JCkvB7UW",
  "key4": "5Z3QDnKeN4tXxutpAAnHZqCVEcGR2qn3XZ95L5DV1s1kApX2TTKRnRbB5sEKckLopnsSFZRobdwmmnt8tDfC6J8R",
  "key5": "36NLtTz8S2VeAdP5LEWwQRCMWdPeWT8Ddr4Fs4g8khvxVGq94L6914ns9ZZjFBFAu2se7iWcAXXUuZx44J3mLLyC",
  "key6": "4j6Xi1kmMFV9Sr7rctyvArbPD7roFYZ4FT15zWNcb2Xp1wi7zuJy8j6PgGoCuA6spgugSzeHLLbTzZYgveUjLqKA",
  "key7": "5H8qdJJCshfGHE47KPuQbMXw4diARd8sYX7yjFKccnLCrDxxzrzQLLjWth8P5ZRLdMrs3eSmzeTASGuXgPBXfJ9A",
  "key8": "4NScW9osQ5H6XVZ7ec43vw2SP6DcSiyh1qMJoVEvp7h1AMETmhAtvy863PhNFJ8gYMv2m8PABfwWfjEUVR7rbCP9",
  "key9": "2pJwis9EmvhrNsZpDMpPmKYnKBicRZPihSDWWDkCvterhYnhZ6YQW2dwdbW8xA4Sm47QyfKQdn7VpL5r7cJwXtG2",
  "key10": "cT6yMt6owURukFGUMefABr45WEorkeHrCVyswcg66SHfDpXDkN8Pyb95yUMUFuqDobXehuK1pSdb9T7Xq1Brs86",
  "key11": "3ex4kv6L6zUVBpXpRFsFXUy91WiKX6vtAxwE3P51RpQcHwyNuus1hSgbcdyyGSDELtmJ2iEia8tkW9E529cs7XJN",
  "key12": "SG8uyHwCST3HdbTKSbQBnanS39s6J2ASvQbLtg9hNpjAtwHixzD15CiofHUD8cjSwu869Rr8tKyUJuGyBfpXnnX",
  "key13": "43qMFSeZbv2izyNnyvNxqVDGYkxRkUUboFrEy1Ss2id1bbBvkagdRFfUzbsi7ZnaoLhYZcCWG7vo98fzr5vjpMce",
  "key14": "5ySuevhVP74dWndGyATNpZrigV4dj2Pwuze6Z65mjhMKdzcHrfpwhC7nLwHwhVNbZninR37LZsV1Twcpb818Zdev",
  "key15": "5vSsyC9H2fi4BYhJ7TdyLiJdGmtrUt8HpTiEV76QdvPN5hSpwXCM4fTvZ2DtSNYMzuacGTM7ByaN7HztmqRcPfAT",
  "key16": "TkEAWTP3czeNoDf4CLbAFRxqHz1ED7xyEuLwVp3whKzw2n3SPFo5fc92GQLpLd2eJsdUyhQnse4gZEMjspTMCAD",
  "key17": "4upTUy2ZvMA5mhMDn14YLuL5nLfxQ78HAJCw9DmT6ZkdgCxH6gofWhXvMmC34HR7g6ejMcMwsEK37JCxBJLvkhTN",
  "key18": "4rvPyV1LAvgq8thnezNW27ZB6tpKYj8MESnjYk3QgKrj8Xkzhj24bqYEuw9RUjKMy3SRHSKd877RoMcJsrJ6Y7sL",
  "key19": "3K7X4235t1uR6qm3f2fenRKgVBpiiEF9MQCq8PUcrDmcWokf5QrJMxGDWJBboGZ1Eg5GMaKSSDZxGhFJGERiPaHr",
  "key20": "GzVJ9nBdXFLToJE9GSCifCLYXcjKm4VApcNjuSuSpQ4NKz5THriHhyG8NEPVxnTAUTtgg5MLJoCSzyc4MJbyapF",
  "key21": "2XXeBULRzCvZfYbGtVdjbKgWwr4tGxCwECTjsCBBNK5JyMbRvFFT4HH7c72Q5NzZUN5uKfzSPsNZZJtJzvmNW4B6",
  "key22": "3bi7Yi7MbRWD3Z1AyTB5Aj1Kas57DNKrh3a698R9MLZAYmq8NqntP4g93pMrwwq5tw53UStumfHbebQ53UcvVATo",
  "key23": "2orAHDzMEtLUE3G2tSyozHR7Lsj3v4iBZWs6oJ6yDpPUd63DYoEx1LTRbXF8W3cPj4brZ5sXBCZKQzht3bqAgyHP",
  "key24": "2BSmqcB4YZsEEYyCcGWmbjoKpXcRagj2v5Ex7KRD19yaHmLpePkf68edPR1NodD64t6c3683QG4fweMSu4b3Bcge",
  "key25": "4KxqkN9m8uH9o7LVb2BC5BXcYnhq2otNxpxD7e39ChSXVoHtC1zSZD6YaDeYwAc3TV1NrNcRbkwEXgyGi2qsPaQ9",
  "key26": "4gxhBsDd9GkdrBrH2aM7qEKjgUm8nT2t4hnizWSuu9kzEr8m1fr49QUpb3C8vjvaKqDpqrouz8vjYKjuMJvymcz3",
  "key27": "4uwjcoTLF1gzdNEVpueurtTH1ictUdU5Fj4dpfQ8JXinz4aWF4iKEpuUtnrHd4rwNx7usVaDEgwsByCR4myUSSRy",
  "key28": "EJSeFdvvLE5n3dF4QPixVF5zCMcSasYpSWXtFrKFVvb1EnixDuucxeB5obmpyozMafsW1gWWyAmVhBKCdxDxMtY",
  "key29": "2kfTt7foJ6T4QfVWechJjHfXQU1vkg88s233hPFcxoxL9FVJuzQjE5H4Qhc3iSvJjg7NAnj3RSUuX1szSk493d5T",
  "key30": "424scBtXBTpVKfh6vsDZxFBtRMf5hPLnMSZTYPs1Wk2RbdcntnCJqeZXRH3Vj7uxy45PnXG8hVGyKXB6UkiybKYg",
  "key31": "64dCFbanvkkoay3mKnDNva5Zza9G8oAJAQnaNwP1DTJBwqGfy8XtFjhKfny7UYT5bniVbecktUSe6M8hGgZUqdsV",
  "key32": "1MYE6AJTunta75UH1YuprCooZaDQMmEBgC2TTdQcksT3V6CSm9HHnLeRXbkyS9FvD9EUGz1RHraq2XEVDotcJD7",
  "key33": "5o1BvXhtR4K3bjSzbu9bSE4JD1WE3wbhtzEygXkphmbFgUgnN4rcwS4VYwDFBChT7tpkmKw8RzABvEntz2gGNVnm",
  "key34": "4JCKiEZaP4HdNEK7Q3uUmcNnxQm2SaD83XRpTEkcXztv7LS3Vbt5uSZjRmgtAygHofxveRWqHEybqmhrj5WVDLD4",
  "key35": "2bbhWDnAyGtXkBsgWP4oytxevQnk9fFLnXJuQ8vHKEy6ZC3hk7Gkp7JpvW5WfvVPz7qsPdQrEYej9LjxFuaja3mZ",
  "key36": "2H6kJz4VNKwoDghd9Mm3sdBSqjMtzAwGFR8zCEUxFDty9TGjcjviNJEqWecGXqyUxTfKskKnabM52BudcjwSbL33",
  "key37": "pRPDvEabms8q3kUBGZBSQuYhmchvTGDGFNVTcwe1QWrRytUBdHowLPKmXws8J6gLmp2yp7Px9WTn4aZWzE28W3u",
  "key38": "g1RBEpzaFbq6RAzvepfFjN2rVhr6us4ftweiq78FcS62ngJDpujkDBaRkea6gvkYtMLGRNkBiw2Lf2tQEyoiMt8",
  "key39": "5RcwuNJJSTZnn9hLjScMXjP8SocgTEDpFCkpihTJikHwJukhyF3j5JFFY5oezpXdvCYK4QJdtp6YcseVAaAQnWtQ",
  "key40": "Wxfzwny71JBJqKchsJbzXCYyhehvj8CZubwSnhxZPp1dbaehpcGL4e4waYLdyFtZtqvzyPMjHTsYe8wJpkfgg36",
  "key41": "5MumEDykX2h2MV9MGiLXPyg4Hm2e8FzznQMoKeQcj3K6mZTp9ovMgHk87YoaQ5Kkxcvd6X2fpqAv86YG7AfYwfeM",
  "key42": "Wthwoi4S6aCHgMpsjVcGhZYSVzQLGPHQHjfZFSgseAENivCETbiqcTybx2Ty324WYyW599nnFK17hUCLbXi2ZYc",
  "key43": "5ciEf3ybaTj9zCnbvKSZGpq41xs7n2BpZkUjSmbYk7keSAHq81HGE2ov3L1S5NRXGW6nTNdBkjx8pRD32eUKZdYR",
  "key44": "3RGX695k9ptNsT5x84g627McTsg9qRAPia4SWo1brYA323RUXJTt1BeyDEEwbmfvGHKAq19zesgyCeBEHmanPV5D"
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
