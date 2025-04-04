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
    "3FRcYygAT4KRooj1ydWcVJHWDGnT8WiCBVMmzfaHPBwi6mJrzgouK5mxerSGqywnTfZ2oxFWP33rg7CFJzR1ycvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MMQeMJb6BFHfMUcPJ2uV1F6k6W3jqxHDSQvMwbWjVMCu8Bsmn4id72ApHkhznhS4xcws5NZE6te1KwADte3pHLp",
  "key1": "VtqKaY4saFCQikHnGgmTdiVVrZqCWVnGANaYBhyshZuPh4citMqe9cJ66gQvwTnnraQzM4WT5VED4MHphvK3k5f",
  "key2": "4aeuBJzZ21uhPW8k59cCuA93DVy4uqBpn2nkE8csryUu9YqABsEKNEma683hR3e7Wdsdddzj3rfMTWyBnHxYx8eo",
  "key3": "29xBajCGHzzo7nCsc8Xx5zcyV98p6W5BM5saDTWgcwQT3rYX3MXK2gpWruVuodRqYjUdDEYCqehu1D2LxV49E6UG",
  "key4": "3S9RES8FJQCYMfNdq3Ct6oDsRqfAFMLcwAYahrhX4n4iZE76eXUPj8B8a57tWfDTLULjGNbsyQZgiVX66Qkk4FeF",
  "key5": "4j6LyAjrEeELK6SbrkeUQ9XWGLG2jDeLPk2kPFQZ1tj9hHqp3RWtEVx9uCo4BFN2mKv8LwMPQ4XCce43nrKWoimR",
  "key6": "4sh5Vx1DaNgiqPENika7TVb62JjWi7Jn9BGkZxk1uacH1AnjPJVqPTDDJX9eMK15FEHTSnfZxGC558x54VQqnM4f",
  "key7": "5Y18N3AHtJPTBMQeyNrkg1KyF3pZZXUP2a3VEH26Sci6T5WHoCRzBsB3ZmD1b157VcU8jWt17c1wu3tYwGgncHt9",
  "key8": "3EYFkQiBnnjLCTKmGZ7PDqcDUdoM9HXS6TKUq2Lq8kgfVR7Pmfh3xYkH4NWoC2V7os8kD1BBMCBGKCBhSaXGBVeq",
  "key9": "59ynpmxFTNr5JWe3KAFTozT9yHfLo4wywM9qL7bYtapuhk9ceMTVPs7EJZDCrsHT9GKQiiuwd5LicLd5N1CvE2A9",
  "key10": "3mRppAbu5PKcG12rxqN65WPSxARFLZxCA2cj3LdDWGboAstLhPu9P3taqDNC7uLVu3PPh5LX64Qos5GDgATkzQyH",
  "key11": "4GKePvJKfadQ386WGdypqu8Ern2adsDFydswdwsog5Z4FV8k6w6ATzd9YidEbEm5rXS1cSwf6XsH474YUWCZwKDE",
  "key12": "5Ce6p8FqQJaeFerTsuL7v4pPzn5RDmZvpzxPyPwG7aJxwGoJiiuTAYtUuBv2NzU2opPE2yK2uaa5p3gTuHyqPwXJ",
  "key13": "4MVxgHM9CdeVyn1F37Y1jJYzNUUQL7uhMUPXXNnLEXbLkCp6eV7DnT4XiAPzFx2BVUd9w7m8vf8tyzyz9GzpjJS",
  "key14": "2Z6qnWcazDChsTddYMMsHMDMuCtjxJMvT1mtNxfyyn5hUw3zcyKqzLgG7HFyW7xLMZwinzeyxUrbkoC6af8Sj1qD",
  "key15": "3zBDmWa5bq1rVhFACuyybBvxXNeZAweKafuku8zGBL8QHVMsRhTazxMTvfVMCRxDQpLYeRkLN8PkTAQ7hybPbRbZ",
  "key16": "4mMCQ3U2PVS4r5dpDDq7cMBVwnma9kscjSM6UQPc2UUyJoJTws62BfJY8jx8PRWbSwdowb3nWsQoZwiaB4e7Wfeh",
  "key17": "w1uRoieJ8aeSSnQEh48M83QxzVLpVv4X8wX9UoXeQ1qgSKRjiiMxfZvDqZHzDVVbpZMM7zTLiNVw9AMTC3vCogK",
  "key18": "2DEtY4f74hoJ2u28cbvCqhBavQMbgVESXCrQcbjTf6C4PQzvP75hFnLCwXotvVSJxPkevah7cUVKn1TDBwq68C6S",
  "key19": "5nDwrFob89z4aoGnrztfmgYiQNamsqzkAqwa15Sg67XcoG4e8UGrVUxBnrXNHs5NUjnLoT65Hb6j487Cr2cSH4iw",
  "key20": "2ZCJibQ4wv8G2CDaDaSCTrZJFKAe4XXejDKQjNzsxwQdyS3kxYptEvn8z3974uAMEypAGYWHMNnEiTgRP7xQfDda",
  "key21": "xd8UWjRJYnmge9Fvb9jux2TSzsHpaHhdTweMLEWNRokuC9a5Kr4zhAPWnHcVLHjePxdWtZ1aXKVzz7ATRoquK6S",
  "key22": "452bETqMcNHGWmeVyCTnnts4mi2G61k6ixbQtfC7gyqySopQHdYTwfjGi3wnqWP49AdSzAg5VYCp7Rwp1nUFS6Ac",
  "key23": "4zaKep5hGxnAgM67meXcKcZP4d3bjZ7sf9rCx6RANcojyPmhiqFfJuJRRXZ1XZgo2zdvH5FyNPPEbbSDwvq4DrAA",
  "key24": "53CzAPQmcVPCx5hh2cXFyEWWjaQT7oki7xpjusgG3EBXnLxBbxXWUyvLVQBnGaMqzZFafASPZFUnNWP1XugrC8tC",
  "key25": "4xKZmv9Xzc6KfJny5vhSVMhLV8DJNFKZ6ioU7kTf5CoL7KQbggaEGC8M46ttffCZxhNqHzTVGLGCqFnU75taY8zp",
  "key26": "oyGGxKbJeiEmCZFQFnabubAiaXzNz1Q8bGQUcPGi2Pg9nJXWdWLFqHWvMhQBVmHUGfrALGGJ74qdGvZiXBjMEYX",
  "key27": "4ApRKrNdPyXgzGAoDi4NHpwa4jnUfTUqkcPCtvDZqfaDP6iD32yoZxe94gWxGYh7qmynUwyAhk7KAvTLdqJ2BY7e",
  "key28": "4ehph5o9VYUXvzm5N234H8hvkG3g7hZcYWN8e2kWwP5Aw781Too8howu7HUoVEWUraSTgvVvFX7xTEG6MQdEW9pk",
  "key29": "15KDwvR9wBwVyRsUSsPLTcZYgCriyhcAtxn6tsGpRiJ7xJCo7snBVW9YDDMsTFq15oGbvkDuaSU1EVq4ZKMTsMy",
  "key30": "2tAkqniLS6Ptd9BYAJHJH93ZoXUEbPtr7FoyDCq3sCzRSxtvJL1dmx6jwc6wZ2cZBY3d5RdxoyLK3xspXPKfbzYy",
  "key31": "2VWMcfzm2CK61peu1imGsv61VrmEXUctmPRPzB2y4ezEN3h4Cq9M6mA8tXZedWBY8edXEBYJavG9GTF5XFdMukyE",
  "key32": "2tgFo5zLPdM1ciz8NVZsyBNytiJvM8DPmvYKP6HiNFXtfNN4KMNWJg6VnSBhdDUB3HFPC6xcnrP88jHBa4fPeUVZ",
  "key33": "3awL7dS5ytVQ2GAxXCpc2okzg5wSsdQy1ifbo4zXpdGr46wUy3mUF4ZwrnnCUaLN3LKM5ZxNWySmQV1c7PY8S1aY",
  "key34": "TvGX9Zt1MwP8x3F5oqSa55yQWv8pMbu5o4qXq9W8SCTEQXL24dHP9S93e7zSQ2b2bSc1epk6LvCNhq1kP2TpQUw",
  "key35": "2Y7fn1UxmRHtnsbYLMEPYiqkVc8pK9Xmr28Qs2DmbU36rJMDEaVtfSyw1G72VdQyY2ZTcCEKi3Each7QS3qHsUA",
  "key36": "51ro7iVCzvvoCRJvbJNirCRJMAf4qxrBCcDELL9c6vmGGpXq3rts2s8cLa1U3UNZDv84JfFWc5sWan5shitZi88f",
  "key37": "wnyuCAPrBR1qUtKfyq5w3GK9srb9Zydiimgxspgy4SzpWSYeSAC81quhomyPs9usPPBQ8MAEam4wAfL3LxJJaT2",
  "key38": "2dxqz3GYVfSX23BvzqqFLK5eLeNDRNhXgz9oVFSxZv31mHAfY9vuwV8YD6Lq1LauDtBRT2saV6S4YAHZbqGEBS6b",
  "key39": "5SdCy3oQQjUUKrx8WLpScBrnEGq6pZDY9jneM6xKq5Yx5BFqFUpj3hfbBnK3S86UcQYQSCmm3UnkRwfCQseXJBty",
  "key40": "Gwb6kJ1u29yYEw4TDCShLERnQqnE1rDnE3Rt3VjEr2Q4FtwDM8UTwfkekwRFwoTxCdyJetUB6egvdoGx2Bfodxp",
  "key41": "5r8PSr4irxZ9Cc6MCAs4fHyJoayK5HGww3HrXKR6ePZbqk3oT87eXqVWjwpHi4qTokQP3DHE8V1VDePJyUzbpHCf"
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
