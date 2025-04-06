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
    "5ZkuFwhVAGN1Zh5HQhw6xbw5NwvF3QToxJv1d3ZGDM6ANZC89jWJ6ocsaTXxif7KPtkzfttrSBfufsDUMNvPhHw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WkwKCAqArkQwF5SC8PtH8DSz3864hmGLQu8QSBuzuPQpZeGeJZSMA3hDZcC8RbHzt5LhQU2SF5BErygZugjaB4i",
  "key1": "4qUoMGXq46XajeiNq8cJHnk53FXvj4xRRXcta4usJ5S6BZKnH75Tt9UVKwDoonr93tv5hC1did44BvxptmC7uSwF",
  "key2": "4jfDzzDNWsosTbjT9hzfVMhQrTXMeSqv7Z47QtwBvL3LUX4R88e7EPucwQ8zp9AQtLL9wXsm4nw3SxdV7LA1ahVP",
  "key3": "5NcYgkZbA4xcVN47vTSnj8rPEPMLZ82VDJLhW8uqeLav3VSDfySBxFqQiwCKqqqwQCCqS16i5h3yk2xa8EiH2Ztf",
  "key4": "32Jg9H2xjBRk19p8qqEyHBfU6QzS9gZR3dQeoDqT7JizoRWUU9zdjE9SyzrR6KsKphrd5NWUzfZUJnEJSwCR1UmV",
  "key5": "3o2fkMaTczncMAPFSfe2wvZP6Fh6mdtcVvjXMgBhRGes8dFYW1PK38QY2rUAqEFsrW8Wf6hTU6Ar1NuozXNTwi94",
  "key6": "2oRD7WupDrk7z6uvUVqKMLu8mRdcpbr9BiecuqeVgh43VX4b39aupZZ7w2khwcpEvq9Cmdf3QCiicbKPD3tv9WL3",
  "key7": "4cFQ2hYNpzNX2Tc9jdQmPLKPuAfuyxPgEigrxQrsDXfF7Uq81S1Jbr58M39L8CaAKe3nv7sRGkD1mmZSCnBohTZ2",
  "key8": "5kxs3vnHuDyc4WQGoB7G8mgqhmmDFLAPpVT96ohFdg1WPB25ZESciVdtzkhT6CM5yG6A6ywzv1FWUnR5cwhpJPuM",
  "key9": "2DHczajMrZREy69FXysQG4QetDZ4WvjpHy2Yz4b5yovRSSdJF44rEchKYXb5mqSZtP3c88SGcJBkyXnzREtk7xis",
  "key10": "ivDeHEwWw4fN9AD3PTGkgfvY3QHGDoVvjF5o1JYiH1Utp4c3bsqkwPhLvA5THMUqERStpW93xMty166hRUVjVdn",
  "key11": "URo3xwovSsDY1wp3P3GgfqhF6ZuMUy3nkekiTaPorqXVthGxDB1fkNTyqxFghQqZowFqZjypaf8nQZ3ceUuQS8n",
  "key12": "3C9dU52qy3uC3sfojouwfdecAobRe2DTxwP9RzjTHN3PEP3SVuDKy3U8aEdE6EVhLnVetAbs32vhwy1XHYdnkqXo",
  "key13": "3LY3xxHmJDAMMBLwNLwynk32yAFvzcZzNmYa1EaopyNp2g3HPGgTGzxf9oLe35ag1vojr7b7SMXZ79fChfR3o6zF",
  "key14": "3Hi8DgeMtU8tc6JVYgBuFcfjYFo8bzoeNuRGdRLWDtZFkuFBoVFoLZXj54K4Uiawrv2f1us3d99x7uNYePz6G3T1",
  "key15": "5FeS1mi5YgV7GSCWSJuQGsDb1ddS5s69uFA35PEP6tchb5u3vWEdAoG1oxVh1PzJjhaJN3bMPQTJXtM3fPwoyjsY",
  "key16": "2BdGhLxq6AksRRcu9uob9Zbc2acL4eqTGCBTtYYNi5cT5cR5BQGgqfo3YSSutwaCCZ6r6qivBbtVzxyNJAT9YVk1",
  "key17": "5h2JR8QGAbZDFwAHd2o1MdARkEecuE99Wn9xy2XA1vvy9LJjkU9L1SgeKGAh6fdv2DRZiiL1BvUwE3A32zNbfxE",
  "key18": "28BRLSpDAw9Xq2DxUN2svNeaUqVFG2PURG8Uvtqb7TWunfeLMjPTUjcxjHJuqtwRisjrxbVqYgDZJap84KdkPEXr",
  "key19": "3xibGokN81NGvWBZ2zcTXTMwiA3wNKfpu9VM1vHCjyktqime7eyCQ6SBKwZyjyusBqcZPWoqiwXRMe4HCpjCxoH2",
  "key20": "2zWM5nR1qAGn6k8zcRvUc1dGmkLCEmVmUKcyCnVMRZ29ac2jRAFm6yD7FvLufMVj4Y7RTusctt2spQkUCHHgGpVN",
  "key21": "5jEXi8BDWURfDjzZpFq7hVFXZAmru4LVSwgQiudtkyx4ZY3ibpAHuKv8TuphtmBvzoWFqsXhor7J3HH8uNt3u4Gx",
  "key22": "2wVS5obtU378MKxeEsXtvUY5Ao9YpMuDSmHpuUBn1wwXcJK9ZeUMESpsQfGd8vs9VKRzaFQdpfWt63xcfsmmtwKC",
  "key23": "5JPfkE2kuCVZ4ch93oSCzaE5Jp4S3DCKd7ofVzpuYNpwJuMkn1xsVgCcTECFuaKFjvZgBPE86o3997M1kHrQHFwf",
  "key24": "3PeChEvUMcTnwZpfoxPeNvxixmdykB8pQRToXXe1N5rBAAUjW5vCScFApeKwiYD6w8tQqnAfXpK5TTftkwJVbZ41",
  "key25": "2vdKh37HaJbVSfn8DNXUfbhCDaK5fSehZ9oUskNZZgRWRReNibGrn7iqVoCZiTNSNsyBbRvLGVpm82tvqYMRMq4Y",
  "key26": "56iNFiFsQn8u4cTSBqKcsJ1EVaEMUqSRyEyKnXLtwT8fcdH9cXtbvh8ahvTym7aqYckw4VzmUrL7jwZ6G9ZXCq1t",
  "key27": "5ThSxEgqgkdJApCVYEXcMtQKHGFutnioKTWbLF8PARNDePycdatuSXj624zrV29LJN9pdnMiVHW33rLFv8y12Tgv"
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
