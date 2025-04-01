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
    "2CZPgmnZdew4CDZrYLL5hHqoUozxNaH8BAsArxnWGujAo9rPkHfPxgKvxfYsSMAqoyBaCtfEz2tTxD8tVEBcZTas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48AjJB8GH5NTXVZgDVZ182AHKk5s5qGkHaHjbxW3GKgoDvk6D6vcF1zEodvrWv24wbmrwxDNNU7Ma8aBGWjWDTtT",
  "key1": "2uVPGLuAxDxNZjg488DEvv9SzYpigdcsnPVMbaCvzW8kDpNMDYnodrvra4dyNTajgXeQfS1uhLgdL1JBwGcRpbv9",
  "key2": "5YuVbF9CQ5EoC74YxrBALnr2SyEdduMJQyR4ZiBUQpN4sZaBi82x8MLqekYe9dVxHCFb395tNn3fraePA9H7SWWR",
  "key3": "3Q8sGLZKxCi6cVfKBqmwdxusUvo98Fwdo8TnhPBd2wMSxmQ2V1sv8vEYzGbrF2Au5761Zorvr2Q1Gm27igbaKWKk",
  "key4": "3rYGNVXmVH9moKDvd7QuXmSrGfDRuzi69rZNwF9vbGiNvHZBhZtAzFi6PTfs7Z5D2H16sAxoknuUPg6YFXUv65A",
  "key5": "Mamp7wm384AXHuhTC3CztUez1aaCrGfyfio4vuSagnT8goWZRPBnRfrUfwBRPWUgCvPXcNXnjYJyoPw2R7EGjqz",
  "key6": "3idYvaypMu6ETLPQbKknaFVTHnTYrhJWvXivbckiCM3ibmXNBT8p4JdESMEknEY4zVrxN92Lpkuxn8zeqStZapgm",
  "key7": "c3qDTnDGPA1jPm5FY41aKMsPFTcKes1jwKp77QXfvY9k5jxM2rhFiBTXCvQnteDHArAsxmJaEyF57QuPEqNrmJV",
  "key8": "34ScwYfCCEfNqwaz1dx2s7inxVw27yzsYULwDXKc8sxnSpiFdEiU3MGcxPcdyQvqCu3Y89gyLzQ89gHGJQgZecyq",
  "key9": "3PSMKzmPLZiK8yx2w3KuKmVczsX8FjZP96AAPM2gKzGD4qrhWrCqwHkEwPbXFZfrMXWEn1gxHyEiH7YcY9HENVcs",
  "key10": "SD3fZt42nSvkPrzQzdPqdZpTzR5QaZ4NTWRvtRoqpPWpXnSdqQuFNgkYp31nmovPQpjzNFJwCBpUjaDjnv8pGF8",
  "key11": "4ibQYAWi2mZ5SCFxLgjq4n1jduGBQ7vsbaqhp541pfbUfjZXmyw9dz5GY4HKasE57Xc77Pbs26TBx5Y5WRpYDUYA",
  "key12": "2oixUPozrEDYFFQkvQmoKk7iPWg2CJPiHc94TirBQrY3tpdMRR6UDmcN3pmsJJbCbMfo4LEQK3946qgMtWo41DSy",
  "key13": "3j18swrR3fw5QZZB98rq1Pdva4fUAmDuP8o9BjHnPKkyARx6nfGcqaBe4B8i1RXapTbzLhPDCHpU9XZHcekK9LVv",
  "key14": "52AAGrjVuEz6zrHitmzQU5xvGdvoHrDi2QHE5xX6r2ZZ83RchvtxZmbDh2LDwGKeEMPTmyMiJpWGbTdVswqr84n5",
  "key15": "QxX4vnL44cXSUz36ggMpnu9Uv8gaQFVSSXFR1youRxnvU42mdzV9U7WJQRNxLpq6M9zB4AT8Xc6K2cp5fJRWpf7",
  "key16": "J3wXd2V68EM57DJjenVrQHP8di2ZMxagLTjVivteuk3hYUce186WabpZtoB6DEvCPjwysuGb6Duj5aoUZYBx1uR",
  "key17": "3coj3bSWa7KavrbFQqTxwzt4uo88xie9jGkmqK4ABwVSuCqJqnwxkVpsJaqDVha9V1HU6vrsKBx9Xe33k8jmvTmc",
  "key18": "5ueoWEJtmYwqpEJrzWKbxMngTxVJS7ZxcGDW96tEwjehNFTQdTeWzaAgtrkNDRxQinUG5XopJdoUNvHhiKFKHaAK",
  "key19": "3P5v6BogmumUB3zTQXTUYKcqTEMrUmMD1aN43VYkyztTFUmxLEXvqZv8risfuNwq7dPJRLiy6fSTDpged8eTGfYS",
  "key20": "3hM61bnFoUE4WHASQtwNwvmhEzsCFgeidGmjVN1keU6VqSMs8j8n79uLJ7tWj6X8sSZqaUFckpD2meR9BKvjo6zM",
  "key21": "2io3WkE8SbZJhK6TMV4Suq7PAfk7hH6pPqwntEhFCZ9qwU8J9qmAS7ymG1sxB8FCnyTjtk6rxqF8TBw5XTGtiWen",
  "key22": "GWENyrZT2mHeXK97w3UmPK7XkgHddywaz4fXUmhsXYM1DnzsvGg5jUe9yMKtM2iUimJLKWTQfmFX35wgFNrrf6D",
  "key23": "43WvFVCaCYyx7b3pFwoGaLZGFGzXy3zZvBXXjwHhhtMyjLgPNibbc75DQmH1L5e52i9NfgnGsrFdwH7GxregdPLW",
  "key24": "5Nugoqn9GwAwYyaov1kqcQx6oVAKJwrSNPsWdCaU9GqYxwJvrY61VeviP9XMPd1Ve6dnhcaGGHyVGgRdD3fKqzVS",
  "key25": "3tiXgoinJ6jjxC5cNJuYJXc35YgUs9xntkKbYCe5Ythhoype3X9c3rijWiNVHuGMqm44aMvqPCwZhBwjFLQfog1R",
  "key26": "5PX5uK3g86XwhzD3XXSASaTPmWaRid9MGLH8R4WdRmWQvFhFwRNZXJJwdFGS6GLoYcf74eCiqHLDXCPagxvaS6Qo",
  "key27": "4QmmH4zZhp34csYKizEhUbJmjZ6poWinK2ojpjWe6zTrpTpdUPXFtXrUR1HHD4XJTfFY4q32SXhiVQXK9mUDxWrZ"
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
