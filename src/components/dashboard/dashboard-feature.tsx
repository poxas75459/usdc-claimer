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
    "HPgE571hhWGXjnEroW2ZreiKDP55Pz2VqNB5NrT1tYjQThDrx4HEJ9BbJQwEofUcCnhFruJopkVMwVRBKsu3MGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yYKyDmj5Vdb3sr7vApkxD23pGhBoX3Wv2REmuMHQ13CEUQZmj42sfkQ2WxC7mY2g3DnS7TGinkBLWv7s31rSrjh",
  "key1": "2GBZ9nE1ENsef6198PouG86Cc9asXxhRtshXDhrGwV66VEE5qaKG6drD7Yt3pqwo45fh3vnQWocWht6cBNeb3T2X",
  "key2": "22U8UbFiFJ7V76wrYbJjBBvrgDzNTNz3Zg29uEZhBsGy3sprG7kpRxDb1A3MUkmMJAvvg7hRHjZCULB2FmcYayJG",
  "key3": "4HfTFZzufZ996yJKk6ajHfk2sT1renxbH6d8dRHXkPyQYG5QjZy63uvSoHNR6LkvwCmFDdLrnVzEBppydtss27fm",
  "key4": "4XmVYFDPwx5VdQpLzZLx5oBey7VQFHug881i7uBD6sP64h7Lw1rGf29fts8krfoj4FFspwEHwe46Tp94GCbNuQzy",
  "key5": "4JB3vqwNPo4KSJsYn4EMzAqCa3qpy1BXJ9y729mwH7Y55mXJ3knnZB8PctT3z8GvQZ6VaQugVJDeiqLe2dBya1CG",
  "key6": "wyvrX8EB8R75FWSE54qSYyaHcnrCztKG2FsC8DAUWcWERYFjkNKFh1CGurhAcxGcAFTLT8z5KEXpfPra9rCpioU",
  "key7": "3jK7vTGsjc3wt2z1DHayLXsMRVEC3TDgFTJt3PPz6NzA4A2rbVwN4eSYd29e6RVCWKDGHPS1YgpqC8ixs119jJ2c",
  "key8": "33ofd347NKnmN8D2izmtE8eBBYwArugdFgjHvna69QrXA6EWqRSC4xYpFPEC3x28bxXXGiiNXfofCz4WdDVLWC6p",
  "key9": "28m7HMhE8tdsZvB1Fc4KwySB8BgPcNV2n7TmRMB7XeYQJUZKzQYF4kvPGyFptXTwB2WUzqzadXwkJ2vTyrJNt19Q",
  "key10": "59NTd1QE5maeN9aSxMEF4tB48giHyZXHeSntPC1xnty8jQpKWmVCJemaVjJa4BrnBDRB3eMATgiykSDaNqobfG7w",
  "key11": "3YS3xaGEf5aUhDVf7RtUaBR4DH9i2CrAVAuwUD7CGzZFoQVA2gF4VZX56p85o4uN5b5wPmgjF2CcQDGmPDuV5Z7e",
  "key12": "pjjRHPz4c5DWFpdDQjWLVGKf4eSPZVBdB5H75ps2vf1sGrTpXsMp95PUQzzojRYRaXBhXxycPMoEFtnAZUXbvKF",
  "key13": "4g4MXhiH6gkdJZzMSqQavePkEgdVyW1hQiEsooWDZvMyUTMuqapMjxFEL78s1AAN54VWNDHaewKtmFvNR7sipeoE",
  "key14": "2aZugqbB2fEej6cm86EhrLAT76MXvYVCrvQL94Ej5WUrBtexYt7CN3z9zaMpwVtsSoS7ABsFZnV13NN9b4D2L9tF",
  "key15": "21gEgPEghRpyZ8gyghcqMeimZSxSep58vgLUnkf7cRFZc1QEEVD3UF9Q7mH9iJryiqHEeTVcofKt327WhNb34U45",
  "key16": "2DHyVjSN7nvNvTGogXmHgw4E6Dny2Dddd327W7Eebpt7RFmsfJRzLPpoLYTuJfAbFuQujrYMwSVrBsUUivtB4Rd9",
  "key17": "5Qh3TB5wEh66qJu1m2q1d192EqmS4rkGaCG1RdzmpJSaNAxPpw2HAjhbge6nAfpouUeP4AzcbWYa85coUU2eNhya",
  "key18": "24BAKAhKiQdHa6pLaBJydNGnNHji8ZwSDDKUfjAsPhRj3NqYsw2RrbYmg1SVQKxCKjZGyqDiqpUuz9VzKi9MLoFe",
  "key19": "2QWKKDVh3QUZMxk26gy76XNnYWLfoGDyNZU8qKoAcaLk2hqrvDcD4SLWnuodRDVK6jpmKQDK4SfvbTbSxVTkg2km",
  "key20": "5Ra2Zc8aTj2oRyCMt8fvH47TFACru7sqi2oTNHWLmWTETZoDVNfeozrWrdQjRJkqsFy6cu3o5DwQkgLjNkRWzdbV",
  "key21": "7D9L41fnZefQcMJWHKfvNjYnHTzLAbVRpw5nUh7YELuRDix8bywSjyrmXQpTYXYJQTdm9tNadaJW3DVAh1qGseq",
  "key22": "5MqsNE1r9EsQU8XEZ6Ti6bxVVS2nX5GjUYLrABZiZz5SGW4yqW9ChhYm5wa1NnUx1TXgwFSqRpSiz2fBpVexRnVt",
  "key23": "4y8FwWWJtmByJk4GTWPeQ9FmzVGkjcazaVLvGMt3NkxLLf6BQgNdYbvRDxK6SWErsfv3UcaZLPzhsuuc9v4nTo8D",
  "key24": "P82JGKwXZuXCDWzfZbhj4c58BcvedN678LirCfob7nmmuFJ4AihFuCyA2oJh7dX6x8N2zAzAELzbByExFSLyupJ",
  "key25": "57FPsQsafQVVWf5x92YLmawJNxvxZTKXUxLLpZNeZJV9Umhe27rB16sqRz33AKLJb7NHQEV4NCZeyPtosaoDxncZ"
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
