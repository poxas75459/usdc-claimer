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
    "65onyprch662x9sGRc14uuXaFTVkvqcBKCHhakwANGf6tFb72cGDno4Fx2MzagVbg9i776XSojBeRaMF1qbnRcCY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MC92VUMF7T5UmqJd2DMJgCQWimbV66L4Xz514Kzb2QzSKD93guAgCk25tpToDTB25zGX3UurvrFJajUL7UbpQYK",
  "key1": "4CZpwJ598GF3daue1F9YLxd3dLhEfLpgLT1KM34UrgjCSG82jFPPp54QEJfp4HAxzKZwT5ZfWFxtmosDB9ictEhP",
  "key2": "GWYwQFna5wXoqqkQs2j6ahB6jEbgcXg3DU6MubeDod5jmmvqsE7BxowrQTp8KmtueAJSoeEZJHqppzuLzi52EMj",
  "key3": "56AQdPqJ4wSpAFd28YHQAFiRG1G9NDLpBKFhowTuq1cUnkLK2BgMzfSZwk9i286rsxtMeioBpT2Umygz6NYn3Y8f",
  "key4": "2yrzBDxuavyGufWgHdFAV4MMJ2BSXWiYXR2VCmAMXPeMf8KQeWyLnMazLWDygp26FwXXsKWLrvUGrpXnYuEJXE2U",
  "key5": "3W6ZmT24qMUWm28Qy48tqLHJKWcjGcFiWtdCFciZqrbxMFf3RvNnfSYkfg9EjRM4yoiU4qyZGDn7eCeLxqVdT9uc",
  "key6": "d6i64N6jN2T8yRVXQCwe5Xap3aSRXqKJPrRqFYtHXTLjXjys67r6S3juCLBveKY4M92Zigv9nJXpths1bs6cAtC",
  "key7": "QET19bocWLxZ2r4KZvucCZ8cakYVDggX1FZu26w3PAvKpGs9MoDyBEf12CHzmyxaG9YFsLpRjHnTwA7SVeT9MuP",
  "key8": "2CTb6T8o6rSTRGZKcAr1huL1KCf3jZ4hcs6MBsaL2619cPLWju622dGLdss43QGTGq4Roygb9DRDQmyi4NfzMdkP",
  "key9": "4eXmnQHDTW6GDYcWjEKuLvEs8a1xqVoHf1k14SvpmDtfkfu8vdeQMwuyASZLYjHBhemoonF78HopacDJCmgfouHx",
  "key10": "2u3q7AU6kqxS5BSfiYTZHAj8tFPDxGsCxKwwkv8ijhMJj1ARSQPxupcdKeP3iX8ezUuzjhWfJ2fWezmiyfQ6CY7Z",
  "key11": "G9LLRmLytEEVzi4BM6eCeRrfGJSSqfbwGsX7xJy3XzmrDeou9HDdTrmA3jD1zTXWBYqQtC8YgJixXy2jFremJxB",
  "key12": "2aAU5GPxcBxuxSyVWb9R3674AqUB2VWxtdrgtMLfnriXgRwxmVWU23Fwt3DQFnGQRwNWy6tGyVkPDUWHVarj9iJS",
  "key13": "22cComr3dwcQC89QLBZix7S9XE4EU4S9eMRMY3teYhRTBZdDyBaxEB7SHURFAQ5C84F6yWybXRBJgWSCp6jMad3V",
  "key14": "wxAUkC5LWYTmpkE5eXTNJgp2r5XdNGFeDjFbJhYvV3GvK2Cp1NA7aZyHuXHdoKZ8SQePVnxMbrfH2Dxr8YtHgpD",
  "key15": "3a9Ko8LshAVVadKTWmruC3uEKJTsGBAztFQ4CNFPFJzETfuiNxf1k35a1YvZ3U1YJE4j6YGvjHKxV4X6pnf1cVuQ",
  "key16": "56eXe6cLJccCvmzn5a1x8PUknPadZ8ZagHvNAbS9UyeWx1Q5XFr7c9YwPHJnFQ1UQc8T9eH3acJCAHS4tr4yHSqc",
  "key17": "3CDgNgTAe4q7QHCAZEzbVxJ1ZkHAwYnN9cZkNNmQFhYSUZcq3QzW9JpNMKuJAba2S6Y7wfzF7QstScnF1RHhmoCZ",
  "key18": "ioWbxTk2y6pmHctjeipp2NH5jJqE2LX7eD95UL7YChxaf8j22dEZMZRYNzJx6ywjzkaPuaAaw5CKJsNSGdaeXSm",
  "key19": "4DkRxyAVoYAHGkhmBUtYf8rBUqibz9Q3gByRZwH1GufdK4DDV64F7yVS5bZeRWGhiaK3FxoNihj2nnAgtQaaJAjB",
  "key20": "XbYBd8mxnUaM6dWfRWT2K43kPDBjFzuGoJkA94TPgbL3131Wtpt3wND6nEBPagbpjSS1fa1c1op4t7HE5kJ3d8X",
  "key21": "63BahMvFD2XPjDeFwucHKhB5MQMfxyouxkXVzfbkb9nswyfLCseFNNk1dA9TeaqGqg5Dy7Dx7h8FrC6XBsGBXnGh",
  "key22": "4vY8s3b5YvV2xsRiPWrxKL5jXSn1VmRjBoNYa5uCs1X1ChzyWWzqDfrcCS6XPJufFJRX4zGJeD2YGFm4siUmuFKn",
  "key23": "w3sJ4KAzjkHxiHq1qpQVB4AAmkoEm5qzLtguYHCuwtiEs2Y7huAHHL4s36PBSCnnzaS8k2CBQhW5knXfr1n3jCv",
  "key24": "5xQ942mgSUoJofjCjp1UWvDjTCFUfKFSj9s65o23ZKRPAaPYuct37PLHBmpxbk5oLuhxyokwAXyZC251nCoYfPw6",
  "key25": "jAttdnHk4DwkrReBN8eGVUY8ArLVSJYaAVUcpPi9AHEuH2DUanE61LtAzLDz6EHKBRhzom1udQURHtnt7mx2gDU",
  "key26": "HZ1nmsxM7DpGeC8B8XJeKUT2tjdS5WLPFDNEpK7bifmW5yN4yLf8cr82rnAkxxvNnaqpPbngHzDWZrPVKKXuakv",
  "key27": "2c7JSsmqp2odrJWS8t5peRzY6nsEu2DGMB4WPAdWrLyCUhnGGEncFkVrA4Y8puhS3bjEjKdKZbyB8Dda1WygGfjK",
  "key28": "4JjcPGWuo5kDfos5Qvd9BFjHX7XardeL8ZgidWspemiXR3tg2EAcMMtKoCc5qaDtNHsFow7cJNabLJG5FV13kqgP",
  "key29": "21nkG6QJzU9h9oqb6m21qLL2XNfh1JeeHo33GihSkLFVvkAEgf1v7UPEvwpMwqu2CAdq7pHTs9gNrBHvdKQWythS",
  "key30": "4zBAZqJn7DNwQ9YY1SuvJkN6nkCCAHxBwJtRGhUocaZeeGsQWR7xpBfEwMKHU5V6czjZmrrRjLak4ZKnHPtRsM5g",
  "key31": "3hkjwjAjpGRzL2NGwJWXhuoLxsLbn77VMYBnvCFykncJjxL6bbtPefUjkS7Q6Ac2fDXisSxVYBw4YrY9xy1jAGpE",
  "key32": "2g4TnKffrj8cA2vbQMjFNno1GN5WLRpfQF1Z3PhPx1keA6Du6S2FJrKyvHgnSYq7rMe1MdX5ESMrtWgqva73K7K",
  "key33": "2Jzu4H8C2FMXtmPB1NWVWSmSULBuyDa7NCfYTKQRdakGoEcYBF6VQAi2JKbtLUxzMXtZXarq5bA34GbspvgrfAic",
  "key34": "4LUMCbJqyhDN1SHxHsbbtpzUBN84YWy7rkjNJs4Che4cjXfXrHN5Et5Kwfh74PcioKkWmJnVvUw381XSNkNJ5WcT",
  "key35": "norfsMEzor5rEY6SYHyZouTwkvXUgfyjKmrTvLQuwGFHXpcoR2M23uZ2V9xw1ysNmC7PMFZfFHE3tzANCNf3Rts",
  "key36": "4f1aUihDQh5yJz3i2GzdiNNsQ9EBBg6Ubnxad4FBPd13Df6Hz29V2ghD578ywS5ZfaGC2UPqoVMCuiac428Tstqt",
  "key37": "5W8o3swKhBWKdgJJXDvFZbCUYeuEc23MuVeXaaUTYJzUBdU8jGqgDKCNe4jj6fCmuFfcKZJZWRDZVFm3SMa9nzox"
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
