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
    "4389kJkDtd2V2BYKxQ1pWsHX5q5FGuERBefFbpWQmeHMHDBFqNt9bfKPmkKXcMU6Fm4U25J2bv9yhnN9otcCge3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w29btHsUd41ueT6LxnQBSngRENp1LNpqvZveFeMnhkVbTPCHFjjjspVyrvydeKdEyB879nFaaHXQvi73tcVE696",
  "key1": "qUB54Hov5gTzqP91CSaAbRrNrDW2L8yx1MkSeuVrxBfVVv6XKYdDHmhNubsiQuo7GwFk4yUU9feodN95eYG2kcA",
  "key2": "AERocSBpYCC3tFBFNjGiHppNJHXpWA8QCExYwWHR3sqMZE3nHhvmBzBcb2M3kwYtAYUyVF3nURhhUVqYANBBTH8",
  "key3": "3LqjwtRvjF3S2iGSwqh5yT5isKkaDgZVVpEVmt49takSZPuukK4MSEfMacpBQyXXdBBr9TWud9XDS6PGRS45HgSP",
  "key4": "3cRJiTamaRm2k2JofNsN1QeNykRHca7dLAbcNbRSphhaFsX6jKzytRYktiaPVQZS5kwEJnZ6wqDJAMzHKF5YHhHj",
  "key5": "5taVaHCvtHZweRJw4cJYctKoSSCWKTFPvDsydytGJvQCgkoAQacqwszYkPHKS4vmw9RVE299gaQ4nn5t4um9DZXX",
  "key6": "337YrmJkG3Qh9uYjw4RWnaN8KkNXv6hPca6FcKHcVXSSpzUcf55QhcsLQZaDNsxihehWkqp7oZ51Jij2PMnA1Ab5",
  "key7": "FbNj8EqUY3ddNQPzecHhQK51y2YmVeKuNR7h9ngTZqqFbHMZApLtLSVvLLNiNvoMHw9rix3iCU7nmXhyyGhsfo1",
  "key8": "F2Nuih5VZsACckhk5W3JtY9xnv1W5bhx3rcoxRfZRAsghEvg2ZUPQ7sWGKoJwxgihJ6db6cgERaVexwyUjN9rvp",
  "key9": "3DwtH7h5eXN6exCdbX8ABFnRUvT3iErTdCuLFBAf53gnizr4PHUbKbbNJTtoWuzCcCCdEecMqCNqcSs3aWvafaux",
  "key10": "2QiW8PdLZtKLf6fvX3HmdBeBbkdRvvE4vJ3cDsZBrDzfTeSguxd2tMt1QQnNjBCDVQE3kX1YuVfxowX1gzPX3tP3",
  "key11": "5b9aSX4gjbPK1AunLEAkezBXDrCERRxUn9W16qyXpRZTvSheMMXDbRmmnyNh4tLcofU73qhCeaRm2fH52Z1mYdrB",
  "key12": "4cvngsQR85X5rjMEf6rPGvd8LPEXvv5XX2gU8t5RtR3ekuXdYdzb4YwmgHXQXUP7HPeRoaRFD4K26SdHuNvz81KZ",
  "key13": "3aAUzr49oZUm2U29GdamdnccvfUUM8w3sJHS5uv5DipW5PEBee9e2BW911bFjJMCvWEmcVdJjiy8hVdXv8TuW6K1",
  "key14": "43WNCCCNFpqqsFshLGpZawyBSjzUB3NwWsdY2obhUt9QTCBVRAGAsM1eJT56KBDYkPTAogi2sZbkTeQSHu1iAJV4",
  "key15": "WVVQ1d17MrkVmqUGbmXdGMHcpjGSNDuVQCzr9MA94YjTj1zh3jtZ8Cu9bb7M69h1amgbNrW2dCQazz3YADvb2As",
  "key16": "2QYCs3CUtF6MFiGMnG2gacr2L2NBN5Y3dgdtP97JWkj2bUDc5n7SjDSKYYtdkd2yEJns2vz5T9pbwHFyF4SqHjiM",
  "key17": "2yqHn8KWnnho7KwyokKZeqg8KktZxurmCnQ5wn9nEXqS8gLUTDDw5aUvKzMRQ8WMV2MZc2yt9wW73i3PfALPfCu3",
  "key18": "43ShcMJrgWWQ8BQSWCSn5TWwzPrUeoiXxsYNprdYsDMo18SoEvr8ZCAkNoPm7PWUbcLFZYeo3N2kGw3juyQH8sg7",
  "key19": "2dkqWzbNy8tNuoxnCcjhfK5NNemihHiMM4EGSWRvLSV2bxVLkwHRjMSvVqrxdWCLjdJvEmwhXCrUu4F37DW97igg",
  "key20": "3pN2qwcJED1autY5t6Ndejph3MJ21UQSrAeGiM4zM8w74an2n3BugcPjSsjDmvXCQDWN8HmfAenSnoBuxj7XgYY1",
  "key21": "4kk9sFDegQ5dozKjL4xA97BRy92gQV1E5iDFDHK76uV1HqNDBavBMdWP6ZPUEKHfveyXqYb86aasvYqKqwoGFBaQ",
  "key22": "67mEiRcPv8iUR5vuDvCcrew5ua6QbNFJKgWWmyWSvtcL9hbFHaVASgAZxWFh2H4SgbTLBEuUsXQoaTXnaAgjsUiv",
  "key23": "5eVbfaboLwhtPGJXVe3XgfKGtTQMWVZuHgGXs6SyYSWXnWBZEhpWKbyLvP8xZyvY8xowqNPb9YkCrf5UAb9paJ5B",
  "key24": "5U92TRk7qYLaFEnD3BXVAsP4MzGEfPD8un2czrS11XVCTuNB6pxGVWahJAzvrrRdXPKpzoa63H7P2QTXPxRQwnyS",
  "key25": "gCGBNEFBeYCM5PDRBh1BApL4TfBhnEenzDfqorWMY68VnYfnPRJUsdgtJLPcQx6yfDgoqSv5MSB81X4vrCEZKWU",
  "key26": "3VHrj4G7vksbrXsNjcZj4MHqE4PrHSnyyqUUMqN74FBjijERgd9suwhxvcz4qN6A5AMC6HbtGqRJQsM4oDKGFJb2",
  "key27": "33GNL4PJjew66W2LxbCEqEsCjmUZupWoBmZod6GzhtgwZ5dSUkjCRBzc7i4rA8jUpQmcuAc5ZFnVpeJuE81BxxjN",
  "key28": "8sAPfKeGZKeMkveu4e5wqjxfkhqi1cxtuK2Hhi4xiQEUR8uvTX4CymU8db69SCzE2vfhHr78J9sVnXhvFkt7biu",
  "key29": "38YfMWGNBAahkUh5dwwg2Gg9LGLLTo4d5zjK9LheRV22ypnNMpKSjxK2fe5hqig7qQswLUAkg3a2RMjYvK2aPcTz",
  "key30": "3qZDsZum7UaGN3XURuGiAZD6wQeCqXUh2vBPikhVRLaFfZgxJ5cjB1tp5z1dxw19gYTenLNLaz9yNZVHzREhfAES",
  "key31": "3atvbawKQjzPKPeiWycHnP9yivHcsHtDPoKWLZFaAq5Z3neLzHy46SX6qpyJbDDfuKH5C7NMiL9cVwHApvra2xv",
  "key32": "4TSMMKa8TesaHqqh6asNRwcN7E3AKcEjMLRjhFzWXjKju6hBd3G646UBAGS9e3DXpaosANqszQXmXAPGQb1iiAzz",
  "key33": "4NTBhfNhUibcQr7NGft5f7umj5Ht4Xm8XS72btYATcPiGhcXtQaXz2Mdfe732keGnu2HFZNWXvdax2ckbLGtb3jz",
  "key34": "54vqDeUN6AJvZLmKpqom2EjbndZTH4EXPUgu6Gcs1UoU1WCKxHxe2QQtSSetNgcu7deedXKRnYcua8Qp4QkBdswL",
  "key35": "5bx2Uuggf2hMvbXqLeQ2RG8Drhse9Uec3yewb2uWrqBNxbQ6g364vp6Fb12G4KSEDRqN9e1cXCAPvixBR9Kopbgz"
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
