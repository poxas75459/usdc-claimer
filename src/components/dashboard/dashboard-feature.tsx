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
    "BF4agddVZnMHSTNy4QUWFp6SPDGH2RHCaSWxuJ3QGRMiwTgUhn2nXs7LLkU5Z2AJhiUnitDASwiNWjvLXXAFcA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JgVgaTcZyqZ8avTYgd1DUbS4xk3vKBVaddH9JnctXTwae1VuYZMjAXenvVUgsowmFBQWS8UnK1vRBPt1PTzHumf",
  "key1": "3VDpqoSrXAEDzT2EvCarYk9NyF4fgzDSHuB5gtmUaaNtjmZYA371Lcr9V9NNuz5TVdeSToHhRN6FLuR1mYCPTqDL",
  "key2": "4udPQEkcY2VrVsp8reQGE9MyRrM8DHQQE5fqFJvUvoTkPNT4wLCpLi23YpbzjHyUMBZLXtirZCZFa69phQmqdtfC",
  "key3": "HFx1ueYJwJExmnFsZNGk1bBq6hwrHEGf5kyUQ5LTMX8uvtU6TdcaS5iSXUrUYZb4Cwf4VGTaUH2Po6CJ65XFW9o",
  "key4": "4ZknUsb2ZixEDoVnoyCwWvmbXjeCxnk7mchwaUUyEH61T7AyPDZXAbNmASCx5pyuxDKA2PSi9r6aqYMoFMgp6bP",
  "key5": "23rWFunDWV1B7S3vyQxH8gZGw518zCWZbw8Er4UVSJbJsLVwk8ve3umTjrsYG368TwwUN84bCaYq4LeR5UVh1zHg",
  "key6": "4f7uBjRgr74VNevneudMGKTyaHAERbbxfLPSFCfgsZdCMh7i9mmBDvPwypLipH3GJdTYpZGFoqYL1PVez6uhauSQ",
  "key7": "jEmnYG2uWAZBaqqxxDsp9JQ4xcSFgdo6KoWXezgA4APx3kmcM5nmuEFFApjwtABPx1L1fSSDweHZDpfPagbHBx2",
  "key8": "pC5UAmZLcrc34oKWUUXn6kNXBaxdpZ4zJ4Sh79wBdJ3dGhcaG3A5MxuuCtvG7C5ZuFnteHdagAg39L6PTcirYNB",
  "key9": "5aRK3DMkcFsQC36NHfMP7KSdwARyH83BqjdxpXuYLTL6zYWNos4eMqhoW6adqK2hoCNHCVqns5TREweaoDrzoM8N",
  "key10": "5fwNp15ygTUKnXHGrEnwHURkqmdWgNq9BXEYZyDnjVzjRiNwH9uBS5sNEXbGrUqDBN5HuVqZMLW1SganJGswwCTg",
  "key11": "3ooUi6BjArV4A3KNnYxi9Z47FjYTFX4Ud2yxzCXKDcNG5S3Yph28tYzcodmBXknG3TU5F43vSC3ufkEZZ6xXQ4o",
  "key12": "2SLy2g3xvUefgDPYG8SYBb6fiJekv9pTkHrgQSyNoXj5SAffXr2gLS9ZbhZSVDFqmTZDTk6wztUnnchP3aMAuoGM",
  "key13": "c1NiCTpsdhRNcLGDs8uMNiE1cotzjYyfVgkSwDH63T7Kuhhy3kCEKWNsquxGtLzk8qTjB4VLgy7xuhuycnvwYTa",
  "key14": "gnuixv8gt3us7C9LotnhFkz4ForYt4AiiKd84FYL8dHQwhkWuDuWbw2xyP4yeLfvEP86rgyBYXfEd4eiqi8jsTi",
  "key15": "59kAKTsyeRgzrwJpXkLxcEBfJV8y8SEruD7gidKZ12fwQ1wruoFcrF3mkAptSHENL6qMF7L3pMLB5dVwUAsnYLww",
  "key16": "qe5oyqueuB4StXeb18E7pZw1sBHwABy5wDJtXrPqLFFQJiocGCmpU6HeGk8TdWdPS9ecRUdS5mGmu9p1qs5W3RY",
  "key17": "3v3wKBzhpQW1JURk8SVyeSf99CMS5doDUhANwjxmLck8XeRGZNsXemZSU928tuQd8N51Jq5bcEfD8xWT3WgxeWZv",
  "key18": "5WckRmq6XNBuajoz3ghCVAdN6eNjfUGb79vH6359YP9sJcjyDxn1PBCNo7nbyX7YxdN8tNuEsiDrJqoeiZqKbG9f",
  "key19": "VVNZ8P6hobdCHuWkQadAS7Gm6hP9WVcif5aMVZXSXDjnAxDabB13Lix5aZxPdjkBzUaqr4Eyix8a9iwfM22jhWy",
  "key20": "2u4s3hADbLssJuxoQfKG2NTyc6sC3U3N7JPXJ5aPZMA9CauZYWyQypGgJuw4QWDDpRxeRwQM4RBMypAj4XYeNphJ",
  "key21": "49tMESshDdrEWnNtRLyfsMZhJuwQq814Bsoo2BiYuHSkwVBL6KnfYaPagi5mxwHXj7eBtEJQjkFdRrsnLWatV85e",
  "key22": "2TxxAWuYH96xSosQTvra5S9FLPKJENhZycvEuodaXpNC4Ckx1dKqiQxZUgAaQf3We7ibxuKFNzgFujF74twjHuE4",
  "key23": "4uf4RwURFFn6bnGmyVGu7FPPcDgDWwG5bJVTNjgKmA5Bkr5Su22L4WATK5nFZYsJjZJPvCA8589FWyNw2RSCRXUw",
  "key24": "VwmB29xuC3Het41HhD2rvG1EAAmSfM41zBKzjjwcGLioF8JfYN3EsBu3FASjAQPqhU1wzMqtqUDx8YTohPrEGey",
  "key25": "nnRYYUhdMFshBJsG6hrzkXQjQ2FMM44bRwWMUWnxamrqBBHN4hHP9teGEa85RMtvZy2g1uuujGRkswhrXaAmeSv",
  "key26": "PBuzchzhKME61WzF16Rt8EgVgzd7EGq7APz5aajfisnymsFczFtqDrhpWeCApBY21DyzyBLvHT1AfNez9RZ4MnE",
  "key27": "Xy9hGuUCSmqsaUBPYsiEBmwviXFVbvZNBnRfZh3szjQ6qZvmzMY3uXGpcLcU5gGEFx8MrB4iQ8DDTWXa81Uds4S",
  "key28": "2tm5JFyeFxARSEbj5ADofWuaMFtk4LzhWx7mVQp9Ekbokne6N42M7oQYcxWyn2ZFPBF7CEqDoUH2aFvYcVYwMs85",
  "key29": "2NUUuYhwxArTF7pibLgA8deBUZsCVgSgH5feu34a5NAMbysferF6CtP4UEGM87jiTNT3TgAXwsbvuFMcpkGyTzfQ"
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
