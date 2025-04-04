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
    "26Ypoimms9miy7JyKg7TSkceYQDXL6LyMWBoUQkPFnwcbQg7yW9ZQsDBaJpCkhcesbofvb6WS9GVx2mxWjDtjkXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kHnvpugRKnbqsa6apHk7ij1dYJ8MH7bo19mjFyeP3mZx4xdstv1uh3zprpda2DRmR9SZfi6hh4v6bovantgH9fh",
  "key1": "5VaHZZWPLtPiub2cuQpJ1rhovNakipePnF55TkatJDkpAF1G91pHFXFTtWYKEzd4Nd1D9KXcX2MbuGsLUcC6ktCV",
  "key2": "4mmMqowWxbyVUmmEVBjuKQ7sDVPpbxxo1u4dbW9vRQRUTBQQ1nkVQNZXK925JUu8ALvaKjLsjJq9y33kng7jVw4e",
  "key3": "2FNNx9BkeajpjM5in6rq9vJUQR5g5P376jGAP8cqxupGTTPMSPvuJ3NVjzEERXhLa9CmZJZkjcsFMrCjgYihY2Q5",
  "key4": "34CnTzyKPqWyzrNipDKAZ8NnAftcfrWEDRkGMbMWnird76GBrSLqkPS3WmRPQhRyTzuvjFXSZUWNmS6b8JVHGvLD",
  "key5": "3yq6kuuzAwNDVtRR9XB6QMU4jyE85mywWsaiaJ3ZWrNdkuoKxwuAJD3Sg38jaFbKrjMTjwfAS8xzXgixgVssAjet",
  "key6": "5VYQ8qcE74U58niURe9xemBDqhKTkXPfnnffNbv2BcRNQoJqmNFZ86gnwHS6ksuVWDLg7q9MZd4m9t9gAL9cPVtG",
  "key7": "3H9QpSMu2TeKmSrjF478VW3RCnp5NgczuVjXTEzpYBqEFTs7EDnJodtdSQugzQtwqTmBxGUNLeHErtLkeB8uqEjR",
  "key8": "2phup9TaTRoVGsEiDgjPN5xf4xvyPytKnwFofTRUrfCYU58F6B3CBcGbu7JVeb8NFhRayntStGJqshKCd9Lxo9E2",
  "key9": "43XRJyo9xuJdXEQ6m56zTAwZSPZqNsVzNKeFwBPtVAQsjvRhe2eFTQzaKB1xdvhrop6hJEDR4Vp869PkSpH56t7X",
  "key10": "4eLSz4EMByRnE65JYrgN5pZn9KHA6taqrrYKiNJaJkZBBeARLMG52M9zvNE4ZcMsnMukZ3HrLtT9UzRBpCNeeUb4",
  "key11": "6Xi37By8YBWAHAxizfVLxDRYsjJKiezETnvaF6NBUEp9E2uraeZReVPHTX1bbmKYhGzUbUHbEFF5xhuLkVjNx3p",
  "key12": "71bWpHkis4VNEha9kas2ZuDxT8qAX9D76y5qX9kNr71pTPpeCp86LFwo3z4iPbsCR9mU8fw8BbMFiqHFKuphoYP",
  "key13": "2guW1vBUzUA5qxQp13bFAHsASCpZUKfGSCk3f9rjmL6zr8LT9CsAKYQ3tu5gu8KHJ83oasxED6apQ37BEKPCg1Zi",
  "key14": "2VDp6zMYoSdm6r4v87bBQVbG7tFdNRRP4aoYebCFvFQAKkEnsaHfoLgyb1sEEMQND2zrks1D28j8FZTRbFMkFGvp",
  "key15": "54h6rajVEJGHvKeaVSj2bogHxvjADMRyTyya4198Bv5c9puut8gecuVoKYcnCzn4mRgz4KX5m7uAJhE3NwMtzDFe",
  "key16": "2iLjKU5PUn5efFQ99uT9msUQ5Fx1xw63raxhFq8ZE6JMLcNy9hEAaV6AChnvG7QjTjyAaCaNsxdB2kUGzbeEnk7c",
  "key17": "4j2DPNdTNZ6LoTvjKGkRDdZP3vFsavi9pkahf9HEGAtra3vYQvNdT8yyJu6Uqv9nifgmqhgFFZ2gEgwy3fGPQGbt",
  "key18": "4SJdMFZDWGvocGwb6NHUtZZhrfMZZtw74T6MCEjeZfuWh8QhkN1sy1W7uovnLRdc3QLbfiRLnwYfRXSsMoYGGBdZ",
  "key19": "3Yc2C5YgrRQH2coEMKhDCHZfTazvrnozFW2AoMw1Tsy2XLWAkwgSFBgacJy2urizsoWr8hyucHE7WNb2c85LRTua",
  "key20": "2S7uBCUyPpkC3c958ZimQZRDuXswxENBwyMeeXEbWyWxTFfoxK5ewJs1tR4mxiN4VNPndVjC1GZ8paP3UBfrz9Pn",
  "key21": "E8QCfqyr7jHc2mNNREjWfGMGxueiqnu5qQQEMxzrpauU6LK69744Af9xG7YZKBQDXVrDboGkQgK3f1iQ5feraXk",
  "key22": "4cfJBknPcJpRpxcFrUbBEfZhkWyvahU86aZcF4GtCTd8NSezESB5cSnfzrTPxKcKhXCkaJcadTrw4xwNxc9ya6fk",
  "key23": "Bvht4DvNqK9XkbmMm5ETzGjCcCs84qRDuzDvM97e2hsZcjN6fiZjwXRzpqySCUPgRKYuExp8uUku1guUuRPZ8RA",
  "key24": "5dEynwoFgYJkGCbuWCTAViB6qqC4zwmKrTTuFezzqiSWFvkNEACoADDZSFSNXKuiCvWjtmAbw5N33paJymQBcboY",
  "key25": "5c1DJSM9aFcYvT42jywZw3DQx3kcURHV1AswkTdvYTgyrsZVCnf3PhHtij7zhw3MrtPMr7aBWgAzMXtYBf8W6KTk",
  "key26": "ZSysW53FXS5dGQCQ7zGgvZBXw5XGDRiVsk5Y5uuRAh38pfw53WC2WggtPGBA3yRpdJ21kRYBH9u8xAKNEvEcYG4",
  "key27": "3aYGPHFMcEMpdnJ3HkZ4mULtaaaJtCgiWaaCe6HoMo9fW1xz1i5YYujDUJoPgTanJpSsXzz4Jcf4FukSYKL3Xnuq",
  "key28": "QSW7h2orAHqCwexPhudKUdAjMAgthFsFuABCunctxK2SmoBUV3kvJhgYzSA9hZWwPp1CVqBdAYRErWjgurjZaVB",
  "key29": "UXNLE3gV8dZUPErBYjGfJWciwK9u68kMtDDs9T1Cfegu6kBy2Rq3hqLrajHfJnPshUPgcnqkZXyeCrS3Lw7cy96",
  "key30": "5bjjs2VAxyyBrx9Ri5TxejqjKRkp7VdwkdqA6UTwVCJ1GE9zYT1dcsBBjv1StPDqrhAd4ZPQepReVsNromzWjiMS",
  "key31": "5XEofU6fwaZ9VXRM1bo1awfawkduW3G6tqrS9ryvTPfHYuz4YgjraQWJYnFKMst93X2GXgpuS8V7Jo9QkERfVcPP",
  "key32": "2LavpC9syhZBzmFC9kvFHGBewmUnFAEWCcSTY1M72nHJoGMt2KhuaVxGPRBMsFQmXecuoPdE5kSPhUNAd1Ugi5f9"
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
