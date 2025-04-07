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
    "3sVNRGTRmRtwN1RBLu13GwCr5A12AefdhNM7cQ6GbrF9s98WNjpRNxhxTCRpcEVNP9K54xwdHETYXRoiizxEnCCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nf1jFWpE7PPPWabt7cbwo4NE9JJB7SagU41NNaPyGyWQgut2WxdtA4fmTzaA5xJitAMkKjLPmQnNanY739LYV9M",
  "key1": "67huzrNhA9BQLvkm2zS3LE9jz8aZbt41GWmYbLXX7f6eDZChVYSQBYfTuMKy9xRZzpoGbMnWcCW41vfmDdxZ6eUb",
  "key2": "5LTMRDgJWc2diioEgtz3a28pZi1VvtpTnZfA1VGtaLVq2xng8t1yXrHVi2xccUX9f1x9zZTbfMTRnt8XVbMTSJ1x",
  "key3": "iZJzYQtM8bccTCRJkq6cxZ2E1ZH4JVd2HnSXYVFBZpLAD4pRXYnCxUFJ1nyQBcgHWE2Jotnfuc2cpFSDD252MnB",
  "key4": "5oPPr6T1vCNPuvyQrXLeuyYe8XxxtbNJ3iHzJN6oBhoiR7TN3LTeX4KNnrNyJMMoJAT6UxfD5MU7StE9HBrkzg3T",
  "key5": "5nP7UEaUTaRoreQ9uTeB4yQ8pZ1E1cjBrU3sQ42vqVzwSF2VDRhd8iVfhm2Ge41Fz7tpcgYmejxrRqSbV31gGAhf",
  "key6": "5CcPGnTJVKvkEpDB76FhokijWgoUTnumY2SNwxgDukRDtmHfCTEdT5EZeTwjTfbvWjrTyhxMTSY7iFbGXCcqvHMf",
  "key7": "W84YQATW6jUaUNfqxK95Antzfh3kEhhtscuWhN22ZgckLdjnq3JdZorEAKwCahwSKcJ2SmzsoRxkgZB2ktPCnKW",
  "key8": "4UrJgoKkgLSNcwcH1ZjDxWkaC2MAWXcLDpGQwQPGF11roNaAKGdaqtyBhMwitM8vHS7YXZu6vwusoijVspvaYBmw",
  "key9": "2AEfUgcbFELker1WWzsttLCqgPmy1kYShiw2XjspkeW2n3RfMqpM5BuFz6nsZqsvhmvCMBQxWobksgPRsCQ8G4MQ",
  "key10": "4RgHxQtJEQANdm6Us6dn8pvkGoa2QF6u98sGnoK2U89bLSy6gY5TxTPfoCqCDfMdUnTLHBf8iGuwCX19q16rYAFJ",
  "key11": "5KmSjhxjtBZeMLS7eJ14E2Tuf7qVUQ6XgxT4U9D1ThdMDtsBa5s8NRutZbajth5f79Ch2Sd5z6MfYAoopm42DgC1",
  "key12": "5tUUP8Lc3rZtjNmh6h5d68usoFa2j7WoC6KRBtpTy9uK9gHWPKgsvc4UXTwhFcErMnNHYo66JjpTytTMZ7BTTNSC",
  "key13": "5gXTycaA2G4vWBb1W8UweC8zY2cDLqV8Azj4JvPpfTgALZFSY4gMxPW9bZMVrnB1zVgZZJ8eiBDignyQDx2txb26",
  "key14": "2A9SHNXUa6aFQ3AyYwUXZN2ZFrjk1hB4Pq1WcGmQqUpDgHFh4JZzVVHgMfzstT9PKttNUZUQsxVyjVknBkTYBxZU",
  "key15": "3RpXM9hFCeJYufY2cDNdnLL5hXwdEkC1rDxeyF1U1u5VHrh7e6GC9turZX3kyRQuyYe4t7SKwT18PLMN45duvvj8",
  "key16": "dc6dbbpfzCngA4NV3LHatyN1EmiWidn2My2CkJVdB4wVALyoVNstQ6MzkNtyUgc6gmjsnAuvn81xKKezHU9hKBN",
  "key17": "2g7LLhhNah44UrxcG9YjY5hCET8VKLHtmTP5fHvmeQGnT59tRhhUZv7rQFLog5dnVBpdiUGeKBzmki7k8SzWihFP",
  "key18": "4QynbQ62FpYYyGSLyun6xMVro6RUifL5YdprCSagnsCwnoDpAWsdmRRKKBLKWWYQikvBctwN5XrNbHfCsicFc5CH",
  "key19": "36UYo2rQpMYca4i1rYCaYb3393aUsAKVGAFwQF3fdrqMq7MGGLRxDixQWCWZrrexTEKzuyEGe6R31boVQxSdeEPW",
  "key20": "Cq4BMz4imQn5MLoPuNNwYYnt4yExwkny6S4rV9Vj3BCLt46nYWzGdBYgTj8Ce1egSMsTX5S9QiqsmhC4Eb57bAe",
  "key21": "K2219v1bjuCaAsD77VbKuDrFkxHiF8RZPsXwvLPqPo4sJi5LjTJgwf7gKdTSKPE6xvusCDCawrQ6exBqVCnhsaY",
  "key22": "589TB9cffyUwkNcZ2TUFyZrTycu4DBTt9aY1yUTbvbii6PgGktLWCZZcPKMsG5MhosvT8fi6YaJD7jDFnyoTttAu",
  "key23": "3YXSUbuL8oLn5tbm6we8v5xnpcwBmEU3uuKhJ4BKS7snj8nomD8gGN8P9R9dMPe1GexTXK4NBDn42WKJHHxDqQeP",
  "key24": "4QRRRWf7ZwMoxhJPur6m97uC2UweHXn4MC5Dmd6nTMXUN5npyVLFsyPni1du9p5h3SPHa2fKqPDbMpKRxj7KTZng",
  "key25": "3ANHyjQdGF9inrKK9prxkW8sedX4e9YUVaDhuFiEwDuweR22K4GCW8VgZirKW3VsEBwAaZxPsqs5zntBwyZX1EGi",
  "key26": "2ipxuCe6kELqte8uzZhAodyEUqoVp7RYMD7WV3LnCqoL7CcyMJpcaDVZDaMAWDJwN8HemhgUrHah3xwQ1a5KJbhp",
  "key27": "3xYMKyKhe1qqGZ4CAmjwMtkX9rKRar5efL62Six57YancuGt4KhdFH5gamNP6yb6dRpSdZUMgBdLKypJpphC91kK",
  "key28": "2hWS5hGqvLKWKLyYqV8JnbzVRxAsgYGra4E8gWUupKPBuLCd7ScwMLbbSdhHgU9WjRQ2jyC3LdYK75y9cnLAFiWK",
  "key29": "47MjqaKXegzjBv8js8fKuDPoWVs95zCauMBoQLN1qWsBRnMfDz7NR7bYW6ux1LnoQPosMUvnT3QdTprzqdxQA6kM",
  "key30": "2ZQWMvnbeLHLDPU3asJTWFkWEfbKcNDUwUHst2ybwW8ZLo8b1Mrt96wmBgkpSmXqAKmaPXfAzn5VGgp5EAFEmkQb",
  "key31": "2f8HrSF2q7u7GkrVLu1CmHLERGe9MUWFJP9cFxvmykZp92Zg1R5uofZJW43yQygEPeCeHCTeZ17PBkDco3NWXD1T",
  "key32": "3UhMosFfBpExuSVxG8gkBbAQ6vBbyCUBCsi6cHrWstztqwJ1uCUEwmQLgbqMzLmu7hUCzhyAGjV8hL11jcXaN6UJ",
  "key33": "2ArqjZFJuRFBN1e9dBVcr3faiNpitDib6Yh93tNUXGT8XoYEGqoamgsofQnNkCjWoQAsRFzeaH2KjU9UyW8FvYUK",
  "key34": "431iqfMkrjd4fDP572ECifuo81dLW3Zx2zD9JUjdP85RSPebocy2ifjBpRnMBZiVNozFqhV2fvCxkT78dGEkHAhB"
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
