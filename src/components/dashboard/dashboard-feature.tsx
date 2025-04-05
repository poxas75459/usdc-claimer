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
    "5Xc28ExMXLcMFsz337zqjkY9Y1JjBafskPrtVz3B3NTi9wKdXKnraZ7jc6XRDL6xyf9dryarnfRaErFN82GV8j28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m1SiUkuYALYdNFSsmqZfzTvWpioKMu8huu2rB5XmFdHXHWN5rKXWb21MYYkxCF8bZFLjmCktJwfbZc6o8cAvwq6",
  "key1": "2jpqrQvWrrMKdCJQXsVQX4TWoFdhyHguoKViKKaede9DMSGF3p58B2Cvu9ckq4N3tQew3iSC5uXap1wX5Te8sk9b",
  "key2": "4N95i41bRmNFB2R1AHwBpL8tsukwt7jr3EzVYyJpMeuTbQvrskkhdkHSQGgFbTVXkRxrfGyjzf4MRgVBbD3m2r2R",
  "key3": "4SEfUgTEaGKR2ThDJQkxdKDy6hZGS8yq7VcZ3rAEG8EJRE5AxVKXLUf3AtpvHqCt3pgU1pgL8Fpoco6EVey953Mz",
  "key4": "2DcyxxNzdgvgCbpssB4bE1tNXK5WzSzroMug67ToEVyeJ2SU2JxUarEgwpSxN2nhJjwSqWoz1ngEPW7sP2wcv7Rf",
  "key5": "GsExLLCwvWtACJh9eiwG5z3skbfaG7JWTKjCwMxGNe3nhK94WyN8VLHDdK4u6KFkmH1ASS383ECLydAN2aA2TGC",
  "key6": "2MQw6243Pkz4emj1PND6TSZ2oYgJtFsAycsawNh1RMkpjetCeBeqzc2HQGsFwXBy6EzKPhY27LnuQHag4pLjJ3r8",
  "key7": "2yTC3YSNjydknHeBZLwZS5tYRkHA8HU7sgpTvVwB1wvpKSxssCqX5BZimVWMN1JsJHyeGqEUJxpSDX1WkcvSTEqP",
  "key8": "5jKKCdsJ1c9NQeuN3p4zw1PPdfGqTafuTHk6cdnwcXG2jnVX5ty1z5ESogBb89E87BTYZ23UprnfRovzJDD2LpAi",
  "key9": "3waGrKz3n53GC462zjASHWW3BB69KqqgYsDzCCggVBJEEvNJbJLGL2EFdWNCmZCVeUgX3NAH8CVBiH93BEWPtukm",
  "key10": "37YTFapRgYFk5i2cY4q9aPA9PyqxCTUkJQtSAcVy4vYgcpAWZvnCTJT3dLfiJaaNj6t4VzeULx13AfVTjNNLo1Q1",
  "key11": "3iouUaWNJAHprQFyj9FoH1cjEqWtP51475FTALyGkdtU5ftJyedwZX5H5YEBnGHXB1LeB5ouFecPAYPVRt96iufg",
  "key12": "KHYfQ6EZJDfZ8nFos5zEAcnp2tBMdvtBHTA9vRbv74J22vQX6aT2TuVT2WJyyFJEtVbjKby8JJB2vC6Z2k24WYn",
  "key13": "3uo86aqJ66yp8Uh6jK9W9yGtWGqhPZjJS3Vt41wjn1591KvcE9feye2PqbrkryggmkAwWLFm32xCYGkXhSnfLgJZ",
  "key14": "MAfX62sueAYRrQRfAa7BxBjkt9UUxah2Y4voR1YCNxWR6MhsZCaBEZLh5P1JVP5rEvdk9tUh4V4eEj4JGtNxudy",
  "key15": "zMYdRWfYRsvfvYaXERPs9StKDgDgdTfg67gWnuLSpqT6qeWAkWbydeA9ZUfxrueo9WQ8cFnhrD8fa6J5f2KWi1F",
  "key16": "3cK7EHPCTHwYqUJFU9PaxPYf2ajyobuEHHMn7V5kotV2YjiPTab9zePSzn4cjZhQcyraLvaF55DcdhhnpjWk3WGu",
  "key17": "2jE2troS2DpK4W4hyfzKVtaBtfAdkC7ryYbKQ8gGgLcMTxGgVbLMBWFe8dfuBQnkaHFmCHhNXFBQXF12uKP4cGyT",
  "key18": "5EgSkgoeNJLniXQKmfd5MpicSiH4i2ZC64N4HDhDrSAn9Jj4tpkAnZw8BFgi5gb3j3pqDrK6ddvCCR4GgD9NdCsX",
  "key19": "2dNdJ8h5bbqmhwUN642c1bFPKTiazWFtXg7v8xdvvvTfsW2gw7PZKXSxZ2DiUaL2ZAUJQNCvpbLg3mB42uTFxkq6",
  "key20": "3DPCZVDWL46konxgM6AMPPR9eMJdN1KJv29vpoo4vbwSRB3YBu62p3u6Ewtz8LkMmcV7RHfVT7Bta9jkhVGafGFf",
  "key21": "T62ewWBJz2cQ6bMUvg6GuTT71M1xCDHmQUFN5VmSpyQvtaeYRXYiBs5ZxeLBjL4vSMpR7KEgYqdUiPnhFEt4Ffo",
  "key22": "2Ud4bbsvXoirqDLUHWyMGD42qESWJsQ2P17JuZqmLPssxG7FWxB392X7UBWmKEiaqLDpewWh9qKddPbaFWCSmPGp",
  "key23": "2QiTyyUWcDEa7EYCoQUpz3eqyjWH5qooTLD5UZkCpHdtKRy87kERddDKXbxL3fRrn2NodtpKMzbfdWJaZHEaVPGj",
  "key24": "KVMGvnGasQH2LDKy9N55PHgZtS87JZtVCsu3Hqc3jzF1mCEBvHn5KanXQhFTSpkdPsXo6eAHw1RpdsCUmrrJmQG",
  "key25": "3cs3KhHRRb1kL32SZW57bHuShzzJhnawDWbGgzNprDLCCgq41yv9FfSsCMcudmifjciFNjHN2PLbRW51TvsEwga6",
  "key26": "4C3UUwArgwChACWNKFaj6BAR6SjjUtE85WkUbjxgMvWPVKdTkVJZncwJDRgSt47FGdEbNCz8qPVChZgGaxQxLauG",
  "key27": "2Y8MQQh2vBDUDLzjfu4dcS66nnX3qkVQuWWUv3VNZy57X8QQgMSUaa33q4VKxvdhkdrsavTCoqMpz8jR337mKiDh",
  "key28": "4hgwLzXZncE1yRWje1qXyzjnbihHzMTw8zqnshncyTjtnCXekcrzXspqQ2oD3z5G5brzWn4YjRs2SQZHzTxDmgd1",
  "key29": "2BBRGiY6zvxnQX18XQtYygqCcXytPCrsZKsT5jeZK9qDQXiWKwktWEnx7Vygbsy5DxGGr4LSLkZb9jmz6hAL7nMg",
  "key30": "7w4T58SN43Wf1jrucAhz4TGU1wkhVCvGHj3yDXDXnS9pfcp7MXCAFPmzYde8f9V36h7kMMvXj53Wh2YqGzZofrj",
  "key31": "35N2qxRWUEUjTYcM5EJSvfcFpFSUNUj7drpYn5UD4dMYGSjXh7yxraYX5R9Foc5hwKM8n7CvaBkjZgNDJp64hvRW",
  "key32": "BVrE47PQnLZE5HjPLXQpvjaj5SnisuEJsXDTw6Zx2TjECzpy2wdDmQeddDza9nYCR1Q7pM87tGRtqLTFfFLXQ5A",
  "key33": "wzgmNpXNQJMtnCyWPD9fRUPaKWbZA17bJWkEMDAGfsFFir5TcZ9N6Z6RHQJ1J4TetTk8it8WLJX4x8Z5LTr8LCS",
  "key34": "4De1pBEoH7uXHNT6ok5vECXmxtFZMk7RoW8bh1YVDwuivpKfcqfpVWnUBBfsVchJM7Wf2ijxtXuKsj91JF8ECQP5",
  "key35": "2xDo96EZHuxUF4KddPVi2SZp5mmHBUc2mSZ7pFYyc2WUWPf4zpXUXpTv6ZrQ7oBprqWRZhMGvojib7PuWLqY89Dt",
  "key36": "4PAv8uuSFMvdfi1Whkzx1kmiqSd4pghcUjFP4PnMYQiCFTUcBzEyXKUHiAPdKjuJzu4F6jFGhutnxWUxFhHt33r",
  "key37": "6sNpjbF6E3BMyFxo9JKEG8CALubJDEmEo2V9N7pXj7DJCjVobigHim21A6BAf11oiwRwHt6dLx4QsD1vXLuLDgf",
  "key38": "5R97JuCc6gkYsmY5oYqpfFBiQds9dxy5HQy8dVbm8ycSptuxdaDaUc1syWdEqrdFrvND9JtPGFFsC1SSzX9xkrTj",
  "key39": "2MjpgH8zFR384s3a2mj3v6MCDuSQaX89Se23MoNTQVyisDG6DvY5YRXekBojqzp2F16PXpZTAc6P3QQRwKBVvKEv",
  "key40": "D74hyh4Zf9gcWSm6LdCDhqBkyLbgDvuFJ1BZBcxFS8qxBFoAzmcZ7Kifp2jwQ5qCjNg8Jj2N67Z7RKd4yZrmRd9",
  "key41": "2mVWe1MXp3tafWDqRNQYmNBazgSu4MhrCh2si8fqbRRZCj6QagHgKk3EUFiwdhdyTRQoFbwxd7ZBa9grmb2iqMu3",
  "key42": "48myfhrqSLgY6juuigA8zWKhHfqAwAuYJWbaf68xSwpiq8Uz8YvqSCTWpviuDq2c9qYwLPRkL9cMSnGdiarbdwV5"
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
