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
    "3tWYuC5LjbLQhbrwKmDUik31QSK1VFb29bX7jDTbbwa9qfHeMUJJXU5ByakoKqMrV1N7g6KybmJF16Erwy3XM8Ck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DKnmMwBBWiJvkXcGz7B1DnxQeCKNTtBEUqQnbu23gWndbgxZpetfHmQxP9iLPyQ4h9rgwj7D1Qn7Qv4aJvMkbsx",
  "key1": "BYZsEAWmJy7Hgcaq32yKnGE6RwVPqisjT2UyzQoHTrLEyPhVhjZEvmj1uxW1z8GxFMCmBQtZmiS1hongANBSSfd",
  "key2": "3cM5BhetVX45wfXiVWmXuGei6Qt2AfNtZy2vZCJZCxCpmKFHiT6uFk5Pyo6zDWjr1XzMULnCsn8n3LFgYxL6bAei",
  "key3": "5aQ2dVZBmamr25ANfTUmiECiiTYqZ7ppSWwrYvgwhWF5TwrDngMXCQFZ3xFet44drx8aXVKjb8C8McZgDumsiGJQ",
  "key4": "34z4gbNVQwQgC9NyPgLp8J48fBULzGP6mM22gq9hFsfqBTotuBQi4TSCmrF8h8uTyC2DodSGCucBCMGcwcs5UDKS",
  "key5": "2kJ9wy72dPgwsSLpPMkALVbG6JXUSVZVSAkDUNLQf9QBAHmSEmX19Uz2KbuoNCLv1bhavKvfnj2xh3kuwoNRvLUz",
  "key6": "5LwwiKaRyrFYN3iuCxEmFFQfp2steSqk827YAubkkMJPYpuqQu3snTRHXUQwueArPYmuzBejY4zs2MuwkZvMAURU",
  "key7": "3UoCqoPyfu2DLHzpAzn5ARsBAFLoRw9aKsP6J4bSAo37qsJBRnu3D7RT91xi42F5PSPwQtsDwU34LqWgBxzzhW1S",
  "key8": "5byd7mSWv8cR4KHtE9yeWH9idJkjyppPHE6ffsD55PQGBrHUgUBiRV3NUxHeZK5vySTt33ZAdZeJZpq3B2yuc88A",
  "key9": "3igaWohQMDXQHy3VgGgm9N1zHeYvU3sxDwueDciudCDs41PqhETJcHJyMHNfw5qPoA5ozHNiPKyAPxP62gjh6GzW",
  "key10": "51CaFU3KLCP53nXf9ydawhnqy2aXBwuFnJ4yqs5xwdDYwiCT1dVvxfM4sC7fHScQYj4wfqqhAun6f23awj1VH9qP",
  "key11": "3G9yVhzx2Uk7vLGs23ipNv9NEJrR7nfJ3Qm9muP8qpmi7dEnFk7Y3HoJqVbM3MJTVCmM8u5Hdr9pLZRCuvwwFTJB",
  "key12": "wzpcN9WhrnYq2gxFRoWdpAwgw8xsCcMzLuLYxeZHzFQkQ8ksAVXN6TrXHeoz5ES1beFnT9a2FJ3Mn9mdWqUynWo",
  "key13": "3Qkb6FrjrxSNNwWdr1D1hUhVQcCA1NwaAMuQmrCTvKbZS5m9xa7HQ9MdFBxPjmwkcFeU9Gwx8THdhBv3bD52MGYH",
  "key14": "4bPfTWuSpBtegPdWTb7iz6LtXg1BX9CNCAnfrHPKNBNzytoGaDYfS3Ww9TpZip1Wi5RV8hArhbSeKRhffsPSnyH6",
  "key15": "3eDjSquDce972MHjmstxxpmwx1o5RAJKDAxyYKuYXPi8eRFyGXzpgwnyUofee6jvp3nvjgECShPDN8D2hdAoav6",
  "key16": "5E2QWR3AQacL2hYRhMV3nQssEkkx629r5iwULUZJAVbvQgC1wwSXzUyy7gBZbKJV1zeCNxL8dRSQYGLfBkDKe8JB",
  "key17": "44dbJgUj5iBVGZHNJNLAVuu3vZcFudE25ecHmQPSC5oCxmZucG8JBQjFv7fNBc49y1Hpydt6CNVr3hZCmmonzN7r",
  "key18": "7Mz7Ge3Naz9TpUoYwkVZEQnZmoW6KxZkxS9xAEi2yW5piGdxPVnf9KHveCWefF4jTccKzXqijmv6t1JafUtq8vB",
  "key19": "2BgTAFnuAR8L8T9fAqeKX7TjP8BtP1JXyWBSpdbwD49PYcJXTdsRpFMvNoSJQircDLW9DiuCdsq964xvBdWvzKaj",
  "key20": "3asHBNXBrmT8TgjRkAVZXoEj4EigmDk7dG7fy7CVcszYYxC7cqfT9sQN1HaEqxRP7niqk9pH2r9yy2v93tJ6EFXg",
  "key21": "3wK49TQMvwfvjzwZ3tYuUDhRFoekKip5RFGZqZhQQCCQgU5AxTdY8bMmcgrVYPgaEUyKiYkRV83xWpZUg3hMe5bq",
  "key22": "2Hik5bNjNUt8NiamvbRpmqEcf6HXY71CdNayW7FthFUpJSyNXiEw4RSnuD2pxifdZKJ9AAMium3eA1kfpxdhYuZP",
  "key23": "2H8Lou8ZnJKuXnmXx4Yitcgg92Yy8pUnE75mtfNSHVEvcBKxAP9TRCW9ozJjLXwA1NNhAsmuhx8GHP7AtWpryAek",
  "key24": "67UKfreD9tWRG6bsejQdvaQRaoASeSjdp19ZeMti3mtdbxokLqr2jKBDfyMLtqdk3aeeR7mzFA6R7k7DeykxDmrv",
  "key25": "5UQXt2oMDVUUvL2V7qHXthUAxh4MFC456LpCkZpqhhMvjuiHyhg22LDA5fYn6qV7f7SN3Gx4658gsBBNbR5Yz3sR",
  "key26": "5JnpRm4VSaMMAXN7Xk2pdSh71bzbHkfUERANHLkC3r4qBDcijSnDzd71eVGUeGrU9KzfNjaGt2Q9m1Tn4XiBZ3XX",
  "key27": "2rSFdbx6LtCpk7FfYz9kAEP6ciNKBPQmpPUpubWzMUWagu3Npa757QDjKXzp8iESsyvWkVGqYjLreQFV3ubZu9MH",
  "key28": "3yj9EdFd2BQ1Hy5cVPvhEZZmFP88T57ZuXUxPYRFFNZkcfWtxgp3gMDGir3LkgJXMaLVqbXYU61RACCsR75644BQ",
  "key29": "4bw4gTbNifJqpHFSEHije1o5ZNxDhypVcEJn9n2jS4aE4hUGohuFF97iLFavL9mhnF6zRmU27rxR8qUSs8Pqaxg2",
  "key30": "3tpmnZcaodpHW6CAQMV5SiDXRwTp2wt3tmPhCeka8fK7LksZyXrmiZRqP2YPprtSkJemPcDg47PTEA4h49eaAk39",
  "key31": "2jCY91UZ1ivCfCstVswjUPGjfFJETc76LjdARZSaF4gsyQQuotU8Bqz6g4rcana6RCWjWt1tWY62arJWUR7L84R7",
  "key32": "5kQm8wqPyz5iMTV7btYh5bKJ5e1o3xQnvQkgZ2zmkoBEKauTWHd9yVRqioSEPe15feffoby4RdrMQ7msGWxdnzcr",
  "key33": "5hzt1nStnBshjtmkHwa22kXKivua2zgoLDMXSAWYeLodzxsAyeQe2CLJDZh2tFoETLNdxmcXYsmKZWteyZ6FS2pC",
  "key34": "fZwkF2NfrjF2gCXWbDevCoFAvZcPESwyAStBq7HWheV6PpeM7gSbkGagnEHB4gqq4jNFQ9vbMcqdxhTJfMZWhSD",
  "key35": "4bJ3BaRzPNpNGn7g2kkV6ZWoudnrtq9yBNXHwDTQrG7F2r1uwMzS3u59Uxs8eLmruju9fiVukX9dosxJ8CjnQCkr",
  "key36": "3qAWJt5bJWWeK7EYbVMncg44k8izzLJ3XUH4HrrayLNp9JgC1XnX9eHqkUzQNtYbe1bx5knqqXe5BB547B6qhWCq"
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
