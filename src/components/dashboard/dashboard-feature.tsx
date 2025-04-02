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
    "3Xt5eEJ2UHjsSgHS5UunZ8FvkUe1vP5g72L155GBYPvouCTuREcHtQAN5XAWKRLW9aqxQzGaaWB38h5vLWt9NL8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25N872WMi6piNog8LU2urH4zHXSnRie6xBfCQrd82cqZ8DrqfUv4yWamrKFNFJdJodWL5mda2ix3PXGJfxAARQBJ",
  "key1": "5MPM26Yegp8rV4KBT5AiC1L4Qzvvg4sMmvF2jZJf8L77svavme7kLoGjKzX839zWNU7KWUXokvxFvMnNiViKXBMC",
  "key2": "5qmr1XpQazmwFDodQ6uRBbZNPkQMjkksRnzp32iHXZwaT5XQD1yMnMoq7FNvshrSJs3FQwx75NgQyQNNhU16z4xH",
  "key3": "5WTUZEaMBvr6DEFB4GkaqZQ8iMuvgMQxFRKLc4L9zsycoE69KYAXmV7bKvXMBhh7THT23qS5ApS8ZGHmokQbopqd",
  "key4": "63Z9byts4Vh3W8fetXKBuVVooeRx9MJynzTRy3hV9oGgwNeFR3Htd299sLZi9xqFfrr3oJ3ZBrCnURLE64qLN57M",
  "key5": "2tbgxiibmaGi964u3weauh4ZHjjtwXA1jWjQQS6GNtre9yPwxhomDodF2VNthYDLQrCwCq6VSTmD5HVyVCUcbDgf",
  "key6": "y6GZZ4XYE7phEjucEbrXLc5z7ka6so9WSHsnrbzH3z523SmhgD4YeZ3cVzzaa1CWUaFvctNRVmVf1wk15j1skqW",
  "key7": "MNqdTYtTArJZrHyzfQ9VV9Gj8pxRkA4AXg2WmAVshxT73HK5ewdbT16LTHigPaEhDoct4XELDHmwzAsQQeYrHtr",
  "key8": "4SvT3Ri7U2i46ZMRif6qGpAvBjKJsNVhWEMHySZFLMYVtsJga4jxkNy6ptNZKDC229swEADoRCdxpj7GwmaAHTK8",
  "key9": "4urzBJztE8dE5B542gdBgdSnSrJPfXy9bQgGsKFHYyzmnQ8sHEL4uQkiaEJJeHyDarU74XrDjEu2GeMBWdar4jKA",
  "key10": "3vdbRWrSxiGiBZS6ez3Bnxsqe4gobyfrEvViDrxNQfimnxmkbC7b2cZUuchf6FRRLEMcFGLPpGcm6yUfaMWojtAr",
  "key11": "2vjiSPtda2d16gWnV8VbecMu6krBJJenoNSXEVGpt1ExnQtaGdkbjSnSCfSz6YNriimLa8axgCwVBTmHt3gscWYA",
  "key12": "4vGzR6YoccRcAAdAM2saMeZs4FbncirEKmQxVKUvQkFvTepqEB4PNifM5hX8zahjiykE5cMfEfQfzqcEhBjdjKwV",
  "key13": "j68SqkE4D93bEVfD4HVSi7WCvgtcX8iPLBJQpCdGytwtVgoS3s47rSJ5MohPM9FnNE4YhwaBWLqoAkUtEzoK6kp",
  "key14": "33Ey9VpU7MofYFNAY4BmWKBXGyP84YcLKsSsNwXujKcpK5cZzgCehGXVh7RsKhzgXpB2nSXuSF3mFhfT4gQijWSe",
  "key15": "4hyurg6PVtA8SXsf4oADEACYbyuQbqPh85bSRqic9UQYaFmF7FrE5fzrm5nNSEZXLmSvXFZvEu211DbFbYvrHnQC",
  "key16": "zx6cCk5WGYXSS3N7HHLugK626s8AnjgCRkAMNsE3LnnAryFiT7Su3WdS6nw3RkC6q1G5HCbxxiJT7JUB7ey4Pq2",
  "key17": "2SdLDNvHbfURX1xvXcDSkaSi3rUFJ8mhjjTKSRimn7SXTdMomtvQpoTUsmJHJRiEetCSF9689jMyAtQ4s32Haank",
  "key18": "2jGELXLvxSAuzdoa9nfDJP2oP4KHpanf7BbH87n9BzMAgBUdP5uuwMfTSuaR6nPs9UzMRriwQhB5t4aR7sG7GVUV",
  "key19": "4EpUxXTBMb1cbu6TJyMCedWcqQ9o2Gu9SRQikb22dfuJHiLAQKixUqdgujaw74e8rzaixVpvjMLVc7PbeJN95RvV",
  "key20": "4y4sKKvbi7M4DTPDwce36ZCVtzKr6ZGz4eoVHRXz7wRUAcxG8YmZgpLvxqV3ZBiqNhkNjRuMpyvChgrB3tCogpAF",
  "key21": "2Tj9dzQfXbQ66JxWDenUMLWnwSJug5qrhnE3ngXNZti81RUByGUvwFWmKmo15QY8yUujtaq22JGopaTvPi9cVGho",
  "key22": "3uz4Azt9Q6txrichv4pZNvJvcuhxHaYWXfHQJaSeaxsYtySGTdVkkuP7nMweEtbYgen3ZL92ZCpRXAkAVXcrP74h",
  "key23": "3dYC7YUTwwuVBwxktAwQob4SFiKBHTce3drr3y8aUvJnhM2zmdR9LQhvzGaUcQt9n779SmXYx1ijtDGSokQJfsqT",
  "key24": "4HmTMXk5EveEj3GmfoVA3hTF5VGB52Ni8QpZXbZQm3CyXEhrXz8eLh2SYR8QnbF66Nw6PS9p1UCLLDoCRK2uoudA",
  "key25": "56rgdD4PumuzNo6Xsarne3Kno3FEgtjbDpLAqGGFbweHNwaaDqk9UQo8koiwQnUYUf28PAYEghzG7kPLRc7GtGPJ",
  "key26": "3J1H8874i4KBHL1zj3UX8qKmUu58EtaUDxjLKN6fBRAJn2eye1ucbMyxxMbc665VYScXYEXXgQnVPDTdnX1J7ZYN",
  "key27": "3GC7cS9ZTzyCC4TrUhs4vkbWdfUFzm8w2fZLtWmYT7Ya4GwptU6gC3yCVgvRtMTW659XEqU21xEpft8zLnDxowek",
  "key28": "24TamsoNcuFM1ka9foX9fe1rhSWWVHbGixSUqFWQPzfJV39mbg9wzk3FevMaRrfgUirpiUDoGuYvqhN1uSJ697Dg",
  "key29": "63WTkMKsfvbnnPH9fyoms4A8yhQzFRAHFtytpGqUfxNHPv5JTagQq3Pxjjm9b3z7VV2SqpVUJD1Br78vfGTaHxcA",
  "key30": "2uGbhsueHd9miW1DHwAZCSty1Z5AQfhbKanaVWoWv75dUpAYVL8d53eX1duUxdwSfS1xTbG6D5VNgzFf1zqKC8NX",
  "key31": "RWUSK8Epq2KZ5RR2Rq3rhcS6s5YQ2Xjq4iBERt59dD2UWhjZDGPeHHD1o9Q4fsbSDRsLb1B9FEvFo2Ci8eTxMEz",
  "key32": "4XY8JQLvoa6iwTtRKLoGiZ36JF34nJ8WAzjve54dGRCE2w4oiyv6BimTdjcLqnhnzmbt7EzSpvDep5ouojqyNJFa",
  "key33": "5nXk2NRAy4kgnzQHByo3rt5Uqv9yxwb7Bnf4v1WGkE4btojguKYf55LoxuoHYMx8Qzfqp9ZGnk8RNN7Nmnw8ZxmA",
  "key34": "4hepnziJF9M7vnotuSrad46uAMX1h51psTM5V3uboDhKtwbkm4t8JUMa3u6Gg9G4UmHTSFPEnak24vtADVcTNZVa",
  "key35": "2jMt82Y5NbpE6C2CeomU35sTpkZuYeRhEPwi8n7fthnSsbEhDmzdkc2fmGeCdpGuq78ndRMFZrWzrdpDahFiHKKt",
  "key36": "4p4q2H8cxiXcZBdWAJoEbfPsEfMM2ByKrh4QpcpsdgTDBwBRcXiwyXth2iZhYgw9wxg1nyx4TEarr5twSY9BvTWj",
  "key37": "52iZLjkpgQs8eK7KoG1JhPg6Uv1asuHAWcRtqwPve2bceJ1Zywh7DMiSctrmTYC8yKbD5mZPwJEkY2W8AW5JGPR1",
  "key38": "2DMMiuG7KqTrywNxpXtMfhzUripeWqtxiJgGkjAHHN7HwtgPVaBLQVUCrnf6dTrc1VmmBibkYDg4VUARyw3BoKb8",
  "key39": "5i54omfSD9iiMsWnjcoLimtv3JxqoN6nzyusj1K9MbDzXw39bP4pEjUi3RXpXnpfVRZmk3NBUx3kwjVySZA9xzEi",
  "key40": "bdEsz2RRvz5kHxJqnrnrBrFuwfGMdpj16nV1zq4WqpNNexTKjaVBjYswBFm5VXzwv93UbogqoWkyouRy9g2ayLc",
  "key41": "4xtpb3hHvQyPGR21iXwuvMuRXCfQvXMWE2MBNJiK9JJSBzQEEB7of9gsbPv7w89gQVXyhyzx7nFPwXtGGdxQUmj7"
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
