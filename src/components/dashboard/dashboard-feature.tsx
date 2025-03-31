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
    "FyeFgapuBcQcyisxf7rGu5zF2jBMoqKrhdUi1tNGGHuko6bMQPj9Rwf8d979SFtUUQSnd8EEkFC9M9RanzpLqCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u13NvjH39Vw38p6KKMgaxe21cDojs3BfFChve9Gy3DKLekAbjQ2S5qggpWsUxmye8TRAhFtu7zfksxGS6AkJN2P",
  "key1": "TaDM1ugM6pyxYn1uMFawt3DNHxffjHwfrmC7mBLMafnwdSdsX6fM1ZasMz3gxhSw7vSuqUCxswaEd1s1fBhSxs5",
  "key2": "3KKdrwUhw3jey5KD5dowxTn9iZgEfE6YonL6MVDgYwVh7Xf2Esi6XUQEQMgrS69US2sixjyRVsPpCW3Ym1kr2wbS",
  "key3": "3qodyCoC4Q9R4jntw9wcsWumpfpj9QmGQqsrLqHRWdtaYGDpuniPXs4euURxA6fx4zUtD3GjagrPw5BCnVGC3U7i",
  "key4": "J38B9J1ZPgn7KkYdhjxN85QcYiTa8NPDcJEbH1EPdmabRwX8oV6LZm7y1kY9cvwBeHa1C336ob3DBeSBfmTUtPz",
  "key5": "4V3HJSPKbzRjREANHtBfukwWbEfCffnd1PVdYE6d9Md6BvNiaQ4Bhkc8R5A2FugyF5VbgcTV7pfnypKk9Hz7pqfi",
  "key6": "29k6X3awcYUTVg9ovZHddf9pKvZfPYLgV7cZ27Paqw2ETgtFvZ7E1njMSXL1HNGFfDm1qgR5kPhRCo4CUV9YhzH4",
  "key7": "jYsTqUA5zf1HyxjQS65eeFvFQjprfTr9aRMVn7YeuVirSCcSLVApLtrvQ4oG2CwmXRHseCZgS5rgA9x6Hbn3rSw",
  "key8": "5Rvv4XhBok6xyAxHLnEbK5ja1xdFcKE5yDmJR983LFfEcSv1Lt1sBVC4GPoviTsFFcwKSyqSbLQA2WeaQifyjw1G",
  "key9": "48H5DQk7zq1f3fzZuM432VHXUv8KqA5M3PurbDNsmAqEJ5NQ381ZFjxGiB8sf9qCyDhyZ7ubbS4iA8UGncSTJxVa",
  "key10": "QwmxCGi5fbgHNnKzqJosJQrzEsm6z3bRegBLfTqP6tF7NJCrp4sWE6UJh5GnAPnyqS3FdTBwNRNDiFx2v7wA7WP",
  "key11": "3W66yu6afUKgss5uQa5V52uUUy999EjxtrK8xiBs35L5mzd7kKaeZdXQ5Hnhu2SVPzCx1W5Xvv2GUsyjUFXiTs5r",
  "key12": "2EymJiexquHfMH4wdUD5gGcBGf7K43Awy5QxsnH6m2SruLj1S6HHk63BUsM1PCaJ61WM3YQ99pCkUvGpVMfzGoLg",
  "key13": "CDsx1pBxds5Umyy5Us9GqWHk5Z7VRvomBR8RxxT3UH7KrA98BbBwcMAExMia5V8ak221PCfYZ8fGGj8jJ8Enn4o",
  "key14": "4jdUaqKgBcKHqD35mE73fRMP83cFAUW6EPpCZfrJEPzUKfKqnLF8rMCtMGYsxC2inSAj8456uLohdKUyUJDnSXzp",
  "key15": "4idZv1tiqBbHx7HQjQESQCYv5iX9usrXgY24puGNn96r2Xg78X18SnXBriVnRKGSEdVuqdCNkxJBwoCgnVqqeC78",
  "key16": "3guRdhVaqoknNHUdFtVFMNtFCqf6ptfYEcPZNe1odH3aQottVNccJYRfbifP5sopXbRZhvHM9o84uWXFVMtWCB4y",
  "key17": "3qqn6F3TCXM5LkSZsvd7LDi51ajuBJ7H3KX9X9ZzKTYzTXGpiFf1HEDe35YVDYMHJsr2zVPC18QabL8LZQcVoPNr",
  "key18": "3q1xB2f5df38p2KkFNwADHbVN8jhq61pxp5ffc1Vjs3nW4MGkfNo1A2jttq5n7VGisXKY9Ueiy1VsWgkoHvVaQti",
  "key19": "orhPQZP7vZzhmfouVCci7WDgf9U5Go2tpxSp5944skMNEmzbjHoRAUU1jjAXKc9VeBL7KooxNr6HfY8wsmoPYMx",
  "key20": "qUJBXuV5XgmRDKJsEApGHF1v19Kyu5k8smNUYdpbBywiXA9eTjtqfXEvaPc8nySHnmdSF18nouEM4NHaiXMRE1g",
  "key21": "4aK1y4qWxZnssymXaVR7nNVb9eNBR33qQf6fh8xNcaLWD7JKFkKQnys11WWE5nfp9p9AbyjyjLokESib3KR8amBH",
  "key22": "64svZHFMYGMxhDtfYidX98dLL8g3Ynu1qTEJShBmZdP76Jzydd1E2EsQH4mj1chsZc8R8kAYdSwGNuAwETsYeLbA",
  "key23": "wwjHsRRm7bX3Pz5y11YZiCJJ9vawkfxdq8HFCgHtdxra7XYvyvP95U5iYhnPrPf7DUASNK1tz4ESVwPTMQFckKw",
  "key24": "Dt1AwVpdKVq4JSWL6UpqEswmpJrh9zhMcAc3DQRaVchRRxgkPhmhNWAzFbZSmnv55XgwjZBNeGFBN1wkVcfgpSQ",
  "key25": "2q9esn6Qmdf55c1REaSfPuY6wnq3enXrDU2bh3EmR1rHXnTe4Fxkk4Ng1kwFnTgA8A1m3ftmNe67MgsC7v6bKcX3",
  "key26": "3kL7gs8eiKkruyPpKxi5C4HSeizo8ancmZXHyxCeDoL8smhg6ZJvH1iCforpP21X4qhR4BE958D2nUGLCtwjo5MX",
  "key27": "3pHTf97B8dpjAXEECncXNWSAVupXuHzCgcNr4DDkMNrud9xGp75DVbBuBSX2avkX1xFaAvxUjeufJqkMu2ki6fqm",
  "key28": "4LsZ1No2C4V7Ct6CQg9MxDKUjWrKYeB5xuj7V3quXug64AB9AEhksxzgpQoJDxsRReRv6cbFpjGnKrqyupBU3fq4",
  "key29": "3mHY4fhzg2CJeCcdbxD7nZW9YgMvrQ4YUiJKDqiz7nRSiAQRZtV3EK36vet5QyqQyFZm1bXSHagqxyxXEu7rmdUw"
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
