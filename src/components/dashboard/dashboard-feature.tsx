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
    "23iiCraY8cNfpXNhfM7ynRLHJoui9JLbMo5AAYow5Amsa9QJjioRSBjUh65iQ1H7qfrPUrCbim4H8t1AdP6CPkvj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxEB3AzhrEYwTC2NWTT9Mwbjme2287m5aUvokYFZ7kk9HBohz4Zw1rqQRCKCfZzFt3jSZHC6uQxt4UjgahPDczC",
  "key1": "DWGwoNbwJ5SxWUnHyDUvP6ggJPv21aJgE9naYJ1nkizn1kXNWgYVc7kFthwgosgadULX5S82ihdVfdEQKrA2RqL",
  "key2": "9rp5gawPeRGdU5qYEbJSxRTXejZJSDhPBg13mRx28XcUQV8kKdgxBXvEusNB4jptdMbXZHTPpisxpczeFgnqNcS",
  "key3": "hCfwdzcGFpQijrev9uAMzQZAh3QJkG13hoWucL462nuoNCSGyxNkWHC5CyJ8zVZ1uFLd7MLMDJfNDHrk4srE7Pq",
  "key4": "51JWFhhgDkp5GNnHNner84FhR9QvW1KRwX1aVDtWccGmkZVjqWRskcAo1SAcevG1eomNnnTG8YmNatGWou9q6u5S",
  "key5": "3g2WV19i2GoJtdGArN1wpMWgfzCAvDdo6kaSQUhjFZ7Hmn5tGCTGhDt8poc7nRi1YytRWXQ15ieF2pqNHj6haBy1",
  "key6": "2rSHhxGGxRgu46jbRrdUPEg8x4hiau16TLzMx3JRoLmBi6rmjD1sDDFrvm3Vct2nKrjvjK8qdRCidZ3MDwrcf8QG",
  "key7": "3ta8JEBPT9UaHS7ZmRko2kWo6UnZn33gVdtg86z2Bomx3GdcErzx8i2UoCLFkJoyJvKXrnYZhAruxJADwnjF4Xgo",
  "key8": "4hCBzSadDGG7wnxxknAXSXfUzWuemwEc9zS3kKXrXBXveK6pX1PrR77MqkJG2GgzzDsYmcWrfjVidYXBJEZPaxp8",
  "key9": "5PNy74ALcSnneTc3nE7cBbkiJY4dPbuu5ix7revS6zrvpHQVpsVVKdezhN7Gnk1SbcLPJ8yTKQrxTgWTcga1aP8w",
  "key10": "89uak12ZwNf9SVRD3FMevjzh472SuJQg1xtUHM8VDi1Jd4rVUvBL4y7aVmyPoKybpfD2WrcYi1sekbykw9213DG",
  "key11": "tC1yHH7ekHreb8dAgZ9PTS7W8eQgALYKUnLZezxZg763YCucs2yk9hb8RLBTdrF41L6YVThyUvuzJDYUvppbvoT",
  "key12": "FCQqU4Q6gkkjSxewwJe9KCat3RhU3pK1UEpB1jrPU7X39JJgz9ZKXfuPZf7HeYgxHFYYEcRNT9FAqFstDP57Xpx",
  "key13": "5gmAUfvu7jwP4AqvAqi1bW3jB8bjgTPYsFWVgWoNTZHg52zzTbNXvPF3sYy8eFZsG9sFDs32sVHKshFK5c9XwaVK",
  "key14": "5AkmT1WVDZU7Nkt7FYSwyfVZDqzdaf4KUHEnwE4BsNaGyF22tCJYFmTTH5PpuwjmycitV3tjVpY5AFRQJaVHbf95",
  "key15": "491VVThKuJ8wMSWdZBFJr1N22M9VPgrEdwbzT4RSEeGzEiqn7zRd1rN8HieXVvDwoKNSxW4jiz1uCgNNAvi92Hu8",
  "key16": "5dAnbK4DRNA55fWo1qqbqEFqth6uBh7upGG3N5ZWmS8kXsp4YpMLGJ5pqXJW3EhREgh4SfG9rwAhsZiQCr9HdUxi",
  "key17": "61HkcTDi9S8E5CdhDbsTVW5STnPt2LHEhXR633MGBqRfgcp7b9oFwgWNVn6YCrXPEHrUQBVR6D8bKpcMm7UxQN9R",
  "key18": "5jhYUst98Nrmm7cg1MCdQsMTyaqYVLEvVi3Ev4iXBKPCBt6Udjuy8hALCgHPDPdQarHRvDEnRX6zswYvs3taGYwk",
  "key19": "4VcTq2LFd9MehB7xU58Q7rXHjQ8nUr2xcGW3nYLsNda3GFdDPwNas5aLPbTmAVs6XNZj9YAWatmKRpzZanT6RVT9",
  "key20": "3GBmzXp3y4xPFGDatXZBGwYYqXY1defS569yaPXygzY7JJfvPTKTz72BBqpoHzkJXCQ5A5sNfkUHH3XZJrKBpBY4",
  "key21": "3jA8r2F83HZz6DhfYc7FmxzRZwAKrZUVFnRG5FTCvFejMpSnCpvNM5mx6MYQmxrTvi719fGdnr3uimVfgk7cx1oN",
  "key22": "3xpHdDL7f6k2cRJRVHG4K9PkuD7KH87bwv7rMWmQ3AfGNLxVgL8RyYndgBY1JW6eiCWQCK2tCfDvZjaM1G76M1cv",
  "key23": "5W5Lze1CXkvXNjE4RrKtuaNM9b2JMc98gUNHiiGMG2Gm7iqDpB4MGWP2t6oPFfhXGzsowRFkWiRLXR6couw7Vr4U",
  "key24": "4HdUyEmQyDDbxjf3jrioxCN4aRSKfjwoDm1e3jdfQeuRoi5kSGxe5SNzFG2pPrUu8SokRpbd23eZ1msRBfo4CdwQ",
  "key25": "btLhfb9FKvWWEVZDRFmaX69iDaxYRnbNTKQQTqSGGngmdVWnPoZoiVKqT8ri1oFryou7qrNKvYqp8SXv4ajDk5r",
  "key26": "5Y5Ah22a8eq1A7pCWc9XeiNBvMu3DYYQBn1ngcH5eG1j8JQPhAgs4V8EJG1oEKJE1BtPdtWpCVbsuVdw8XbAA29p"
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
