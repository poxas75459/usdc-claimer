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
    "2R1x3mPYBvagACyq2osqBqH47UeGeVJqAdJdcy6AtqtJEZBpL83HwKsaV7bSqSgReDApzzyeURMVjNKrzfayqKMq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5adErtdH8jQ57ouRGGA7bqeMCxKPd1aRhonsAd9qcq1Twmn7yAfbWMEjsZn59gcKPfKmgFszz7cGDoMwBV3mhu89",
  "key1": "2ZRwh2Vqr47RUxa4MjEcTSdiiSPGp1WeqEPt7x9rnLc1CFiCugLN61nqfhnwxjcJx8ZjjrkshAkQFr52vqAM85wU",
  "key2": "5WavXbmisVecmrizD2hDL27pNQjBZCmRvgM5R5iXjysoVuvWYaxG1JweAxELWqpWAakoih6XLC1W6KgBEszW2e4Z",
  "key3": "4Cheu4Jwmqsk7GFvt5EFkoyHfQmazWXKoYhA8ENnA1rPGyi9EGLXE9T866dhQDBCTkJGfnpTUpTxB42wBrJGzDK1",
  "key4": "ybtzdv3H5VEoBsz9ryM2q1AtkeRVAkYCd3oCy7EujNMwtKXv212p4fVxVSAyqbZTfnGo5ACn3FikpnPifFPQpps",
  "key5": "5BTvKVFs4Sr65KGQNMueRC8BG6o1UWeuHe92roNjy1LHQHNejWTC1fwQkhoAgDMDjweMNJPAXna7GHrcYVCfaxCA",
  "key6": "3VxQ1shWVDoXz1w9YC2i7vhXGY6HmFmqMV99vTKnc3BbWUW9FoNBRVehf3TgNy26hA1BKuDLfrjcqFuuh8hp59AR",
  "key7": "33XkrzUbHcjNhEFsFwyLHzgC9VM3nk8woWCafPpdEZRXSJQrKNEPGt2pc5kn8ymRK9Jufq75FZWz3JiUQyUziFBy",
  "key8": "4oJTvt4r8M522yWeG4U5yJz3YPLjf9nmBxw4bTMbHKnhnhvWiS8haRddvumdzX6xAwcn4fkVWrT8FNgkdLae72Rk",
  "key9": "3iZy4Bhf2jaakPyqj2WDUfSgBQwi9qdDzYpavj1CWts9H64MZDb4dRbnirPRJ58g6fTstf61fey29w7acCTQRTb",
  "key10": "5uqni6SMz6z6NmFJqMGicksHFjSJv2C6tHHeAeam4pXEsqvQ58xBekdmohtr26y4qEynEVpXxwXLdV37K2yUFHTR",
  "key11": "5qJPDQEkLmY7XFMccLfiZdPoBdMS4XRpsHJdstwR6uZ5NZMCcNpcXBmdYHLBCG6wBorXCHTk1cFrZjrnUAnyYwzX",
  "key12": "3ceMnpbhSdPmRbUBmbz2TzraA3vURySkAgNX4v4oMHGJSYGV9ZTFtUc4GtDuSHhxzpY3HXBsinF4vXUTKSniTpVH",
  "key13": "jHuJr9damYjAHUtZHsYePEY1y6MpoZJow4zew5k7Hn1nNeQbZRgEiLFim94ezt6okuV21sbRCMeZ2Lwex4w54CW",
  "key14": "265Vt7CV9xrwUuzfgAiXt2UbVzzTefX6sx6c8SDk5q9ukbNGLKkbq6GoWgTC9NxEvLDEygTTtTYzSavEPV72Q6Q2",
  "key15": "Vp4KeZDRNn4Za6cLSnnM6bcRLHGFkj7vsebaJyzTfCJUTVxYArA9AepVYcvibtF4Mwk6fZZjjVReGVErjT63MDe",
  "key16": "4AASxTtbvd79aC3MFRUHicA6zumECeuFHXikGPVRY9hh3BF7JomWi76DWHqGeYt1z3tU8pSQGU66mobAv7cYELxS",
  "key17": "4ixLU3FSXdMvrjwBTy9BKY9KTWoP9ofkvXiepgFR763wZxAiBo1Q3EEFJZSXkeRKW2fz7THPWxWHdYJEssPN7pdE",
  "key18": "2HpLdQznzqqRoFm9Kr8CYatPWeSDuseFE4rYJ96vnDwzLfDERwDt8AChpSBWdeeK7SZWtQL6U5HoUFhroACLV82g",
  "key19": "JyhDhrCuDKVdJdTRZheLVuzev4yQJL78sSxfDdbC2JVj6a5BFcbNoH8mjaGeTbxuNUpxzK5yMeXz2aTXsVGifyv",
  "key20": "2ysRd2czoHit8RF2HR6T7eTpXbTyMccExG3Jcxn9hH1DHRVkr5dJPUZh6DfH4Qj5EXy18hu1vZ3Mv6R98gRUsAuV",
  "key21": "4y1dm2zWy7vbZ8JWD9FmWMGoWXwrUVXQcin2o7YCcpksKXjNp9oyMSVW7NCsc31uXk1XX7t9EYdjGpryCAEz6ceu",
  "key22": "3MzbPKPVgQKEdACYCXeYqaV1iFALaqG8YNSqqV5o464fcAbVvvWDmzkWkdtoSmeaGi7nJ1dCcY5kuhkGimyNMYte",
  "key23": "4gbKjbBaBeBam7LYgwBMZ2ysZ6b2AX6qCtSRxgnjxAQ2E97Q63Z56iGhXwX3N65W5sQ3L7tayA1E7t6wTrzcJKg3",
  "key24": "KomQRxSQYy1F4CjoqSpLKbB3NUSKvMKY6Z4iS8dhWvk7pzgEUhTrT2X5dRcicHrTmy8KrFVsCQXusxC2BxsggPX",
  "key25": "2tUD8yLsUkpXxk45HjTzLWH4m9QZXAwtjn9DmcM51CuvYZDvA7Lc1iJKQDT5CEWCDEELAqaW93jX5qSAm5pkAEXz",
  "key26": "58ndNcetyKHTPoyNScy1N92FPHGC6ZB4KZ2bRjFTyGAizUBdVNmiq8gZqDB2k299GrqNPNnNcudroN8bYXY7nZGK"
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
