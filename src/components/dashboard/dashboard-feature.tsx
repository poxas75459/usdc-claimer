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
    "Juv1drfLaJVNBy4vWfRr152g9GigShoj4LB6g49rN9r6p1Etth4fGGxTg6zadtyH8ZdBvf8Sxfudp64PbB7szpq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQ3FCbaCR6Gsd57wgkGnkY1hgeSDjgUQYuP3dKhFz38iRy8Nywurhrs5p8futkTo9X2gXF8ZGKsCZMRraAjyyCQ",
  "key1": "5BVGwtg1ByA8vDna1eFCURQY1asvVHVNqebv97q4BKguDSUvHiKrx7NS7v8hifGwM7Ar229XmwuTk3NpinQVE6U8",
  "key2": "YtXQSVwjA67L8AjZadkRaagvECrQ88PDat91CehrWSjgWmdR8EDQuyhDynyYZa9w7TrWPUomDr8jUndUDEqNGup",
  "key3": "33usSbK8D4xxchLnFHJBeUX3YADufu5EGpYpdeCvgYcbjeJx1aY1tv21G68XSzSordbCYpGx3SvGBes3DxFK4gbC",
  "key4": "2kddsmq1SzevUqyTmzk8fW1H6DiVKCLx8gjtYd5MBi2sHBn3YCgvAHuzxWoU1MhyWc64Kyiz9TcYgSAhjtTCvYtz",
  "key5": "4B1FNs2hoPKdknR4yd5S45iZ2CXVKnF3vR28hNR2VoMRxsZHfEUhfS3DcRaXCPd4SbN32DiRThNN6Pf71x5nMyBj",
  "key6": "5HxqbEL758WUEUVQ7K9usGfGmVQg1VyKXAykyfXfQmbenpVxw6qb8i4crctfpKEc1iLkLFskwASFn1EkfTRzkHmy",
  "key7": "5T6NAZA6o1gGrkTgUzapZzgxz6qHNWkBhnapuipxPoKZyEatmJUb5XUGon1vCTTQ4hcczq7otqptjAE444CzbYkW",
  "key8": "4LrLeayEN7P8X3mzTLnb1USHUJDTrmUarBBj1e7H8GYKxtQRZuyEYzYa5m4zUsUerk1Qybs1AohdK6rGEYYKwpXp",
  "key9": "5ngr7fET6YZzN93DozGJ4FYPkskraRDA6NWhrLhfFLgwGJdopZnHC9U3NNrjXota1B1r25cgQ9sE6C7KviDBqUWw",
  "key10": "2VynJyyVXzueFPLPpSD4p8HNUfjzvg7BCvrFvT6hL6FqAFTeyQpUSA2ieNLMvNxTRdD7H9Q8a7JwMraKnweBJBVb",
  "key11": "2CvoGYhZfEfHVg7dfCzSn9P5DU1TaUVJnv13yWHc8YZpNJgunZGYt6yAg3PbJjhYk1caKf8DvGgQStv5JCABaseB",
  "key12": "Tgrryb5kYbGVyci7YWoic8Aw1dMLq2Q8XBWY3LiYXjyosH4MDL7yy197d7fq5mrpUacSLcy7CNcmWNfV1xMrJUL",
  "key13": "5TFz1e898ER4U5FFeokVrPW2P5SiLFqBCMnpFLeE7UM5QfCiX18LMLB3W5fNUbCYRfwdtqAqaT5Cv43LzAaCBXyq",
  "key14": "3aRDQGCUaFj5PWspAJqtvWXMSZ54c45EpgY7XaDPFbXjuk8zf1sGjh6drbUEM5KwBfU7ZuTftj5cQ6hN1zKYp4hv",
  "key15": "5Un4biPYzXCS9qcn9DGZABD7gpxn2iBd2QVKTFwPV1UGdqM6eFSE1fQRxPo7umjy6e3cr1Q8f5YpxwJHnHxWoWvm",
  "key16": "5a32o53kNbSwUdxnsoQinynxmSprVcj8aApKKnEyfqyahLW6C3PWG32fWq2FZM2c9CqUyu1oEVkprLXqvk7kdmeZ",
  "key17": "3LNUomCLFzZ9bfRsaZrFnnqjGfnWoGi2xg8D2H9tHLnm47EGPrbsksHrF2UqRAGEuv5hmwZ4fHuhR9WdEvzYYx8d",
  "key18": "Ht5VLYyY342KjthDvwJv1rJzWUnZokfcznKY2U2eASGNsQnrpzbZy24aCRYd9LZghCEL9uZKqQgp99G8DY3vSes",
  "key19": "uCPbLaqVhWdXQhkGhtuMjmeQ1zv1Uhj5CturMF1eneoUuu1vVX5YxpbjcvLt34AN6KuatgkUfGMSjqHmchPcbFy",
  "key20": "3CfJt1mBecWCMDpQaqCwkvWJrRgnqieTrvpJ6BFFqmp83odeQwdk7v8dVokQUKkYyDzaH6SREYno8tVxLs4AUXhy",
  "key21": "2HQkm6zf7tka1w4SdDN4XwMCY1M7fRxLvjfkXTrBAbKB9VFBYx3mgpsjBBrpPxZpdERVaG2cGPawx6NDae5TVnzC",
  "key22": "3H47fMWAjurZDd6CHoyCRLRgiK2Venoay1ibjNLT8a4TVmD6MLhPt41vyjsyoiucxTWkNwpJK6R1uhJvG3MgaUu7",
  "key23": "5fkLf3MgdB6AbSHuzzbtv3GU6F8PvPzcL4DgvsJ1ehxwX5XDYSkoE4PEoY2V2dqCFKJa2U9guwr3Wm2bm3EnX8am",
  "key24": "49hQCLYbwEritJy9S5FaPw62hDcdcXi9oZHPEzvsSNdgJz1bKGQmnNWrHLyoKY6e9oFo7RTfiaQkMg4RUJn272eC",
  "key25": "4bL7RormXyGqE9Dar6byWWn1P8VDxUGr12T6fQKtqMwnM7SShxzPK68rit2MiPXNGjBAk7oR61XutPqv7zUWQ396"
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
