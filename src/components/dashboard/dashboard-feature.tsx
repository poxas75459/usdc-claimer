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
    "5GSNDk7kJcjBfQT7dYL1w7VACBKfZ5PButcMKerGCisWZ4DEhvSQTuTy64mFog2xDyKWaf8bguXkQVzTYCXJcUf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jmgbCXjz28y12MW6ALco5cKzT6kQHi45x4oAWBzQ43zjADHKnJ9tbpbxjxotAzKdqPnLyJtBUK84TKWYgUrJzML",
  "key1": "Yyf7G1d9zoyDC3qnxSZDyHGEov9o3Rq1Vn8B4vqypovLyDgzZonoWxJbZuN683Zb1mAwGZVyNxudUnGuHEyjcra",
  "key2": "37gJ6in8VTDJjt3NXhVMcJ1a9FZYTo7nc81kvegeCBFc3RSh1h9qTVycTqwYpYNfRUb72U7uJ8WWBHJCsSZYhii8",
  "key3": "5pMe7wzDhJ1wBXYySfU4Gbb8A1GtjHRQKjLutR1di6K7fkmeJzr5vKeeTPet3wcdKC66V9iFWPZzok7aqhVFBdFo",
  "key4": "5S5ZxozZEbGY2evGhcPsegPVFzX5BXqZ1iN3FQ1CndxYbKHPXC5S9ia52qgiaFNpjUvoGHqfnbygKtB2ZFQZXXR3",
  "key5": "4B3gpZkdte6VrPzai6sFjWJ1TVgrBr3MMeCqur8X4Gm4rz3KL4E14UJmdEx6Cb8hYJjgi32CZ5a8hmhfZXonbaoY",
  "key6": "469rJp3FGJrLzApjUaQPzDNYh2gCMEFWdTBoRs5YJYfnT6SbZ7S7KqHEd2DrUT4SiJQXzfChSVfawqYTedGFbvv3",
  "key7": "3envtjPsyC5Z7w2sPbYw9Uw28zKGoHTW7y3ZbwhnahzauQRHiphHMUCm6dFZCcwpyJwNkmP7JjBxtBuRBot4k8vM",
  "key8": "4yz7spnAykhSJaRrG5MQoK7s4dWHwPZoPyChrLM53W5QMcxzXt7T2NSgFqSaPm2jNxGmBUPk9ifJcVu1FoCro399",
  "key9": "65YFwQjHyezVfH42EVtNpXVaNcYq5b6nFW8Sph4TvNddZd1zPVaYmegaMguABsKJ1AtjAkTSx5xP6bNBFnjLiu1A",
  "key10": "4tVDar55H3zqa9QqK4opnEhfXj7erWiiQbRVZdkZZAiXjYtzEaN8wfTvAAdsHtiVE24VGcK4u6yScEDvUtRbo1bL",
  "key11": "5ht7p5qfF4uhRW6AbrZhiVgvuhRnAYxW7TyctZfvZEQVhvgHWhXhaXDoiUjtmt4DM8y25AWrMBhiJLpCnF2yGcov",
  "key12": "2UiRqwdUwPqYArCMvRvuBxycGfinWmGsxgNJ8SfHBW38FEHT3ZkfjMdMmMe1Bstt7iC6z3fvY3Cw2U7vyVjXGZ3",
  "key13": "2VoULh4MUuKB7mqZ1njFQEzXZe3swxyLaTkdtP4wsDsbnBu8Md1y6E4Nz7vpvFXduUqAM3n3dDEFMCurQhGo1f7B",
  "key14": "3FL5Yu9fL8DZkf1rpgzikbYfZg3aNx33vjLJTV4DshmJrtzn6RoH2uxsDZVqzs13uNKeobV55aLvFBCsWfDrhaRq",
  "key15": "2wXAKzSpAUCTmXffN4ATFFnvnLVadxJLy5eBzXLebaCBGzrbcZmhMfZcrucMK5hTimrMGjtoUXSs8Xm4h7omrmHS",
  "key16": "48DqDD2X55hLYG4GoeK9eYx8HBtjqzB8CrhgrjtF9d3i2h23PkCmnkajpFmsX7VoTLnfnK32iE9XPvgZm2bup5jF",
  "key17": "4tQnvHfiS35daUVNoxp5SaUdLu73eSuywzGcDsp5oTrs18YFMwJE4ALhGjY9f93riCjMSNmTVcEddMPjNg2Ghhdr",
  "key18": "4WhBVzwnZNjRuNw6HuxfL5EPEW1eFTCPMymPBXYiWr7vUwJxb2bEkH3Xqs8WbaawYirr8Yz8VT4b9E6Z3RPTRjsf",
  "key19": "2LAe9WKERmxaqPXXyhwLqbscuL3fhMHZXqvVsqmSsDGmi5wGggXRbDoYRuVJfM78jhyWFLwcC5KibdtZsgq6QKEp",
  "key20": "2YPe13nTmY8rCuHJqMoBFh9uKgKUCGL26DRKtoMhYQX5qZU1ZF4XHUg9hxK1gf3ii5km1K2y7CLzkukrg7X62NQH",
  "key21": "2E2rtatQU8nmaK7fisas5RofczGf2U6ch5hXbSwJ2wRW6RfoAdUAEist91kHJEPTeuW9MrtrghKVeCZCgyMQBSgw",
  "key22": "3aaQNJZPGsWBfteHNct2HvsKD1PGZvqwXhuYdYAJifh9aoJcC4EjfXNST8BKjQn8U53K4zcQmqi95FecMUXQqBV4",
  "key23": "oU3k3xbGgS5Sjhx6mg5yLRjimTAafvzv4stcL5C3k7QHicvMtumyjybi1EN9n2HTerZZctgYdKvsAMFHVXZg7iM",
  "key24": "4mn3AMtuBYAYxRiAQeUrMpxBgetwHcTK8gKTB4LYiPVuwD9YHpHqZyEcvYRjVyHdmhVXrp2Dz36YcN9KL5Bqx3S9",
  "key25": "5JEg1QkYymT7WRMJNK4V93RqJ5expFLdmRnoYAMBQPaU2UA2sDFyGCjqmzsU4bbxeWjNNhCSHfTJ2TsAQoL7m34f",
  "key26": "rTG3aCuxeP21FMHNQFL77GSNK4uB5mFmNQexXjbL7ZEtVG6utFjuwY1YC6hTEunupjVJ9AuM41d4LjzmeK1Pi83",
  "key27": "2JeHxoNWBzuETxLSMxAznAZ29hvzr4qHAxoUwyxQKwGoF2LBaPrxpYWm1N4REc8snPLcvx3TWKih5azbTYEAcjvN",
  "key28": "Wr143u9zQ5FTo5kjaPg8JJM66fw1U6wxMWHejF5iLPsBrYcRggGFf4KpykabFvAuZ8CjAmU6MKPrGmVpgUBWfAb",
  "key29": "2yRucExgPH8JyJh6qH164psjKAxuxc98fMnQGoYsTWjRVH93h9g5dXBr6yXNyUb65ZY35TyPoQEmfh5cDfuL1JB9",
  "key30": "3M8h3YQ7CWts7gMLTrH8nXMHA2gm22zVH3H3EfzJnQUQG2uUFGgupsUKFhbE2mRRWUJF8AugPGMhLMQZHK6PYGCh",
  "key31": "425ZJD3Hgz2uoJpvU3A3meBV2DV2ajmYSy36ry79f1oy1tqrxrajwaVwQip8BhUEk251NSREawzKnaKkVEJxgjjb",
  "key32": "4vLPv67Sp354oa9CRxaHXYGAhf9R6wqJK6xCkVspWQucrMM9GqzaYtbqhHbQoMjf8QxnFmqxug3CnaumLBoii88P",
  "key33": "4hua3h1yXcYKeBUNn2m1W4R791SW4ZizyAHxGCPwCuMXNBREvmScfGFbGLVJRVBuavSzTV4FLRedkCe36fRB7Jon",
  "key34": "44p8SdVNdTR8jKLmynduxmTiWcsmvkwaxQNvVdywYCKb3kSA5nkhkcUWSuvneVn885NnHFT9WDkK2tonAyxRsdaA",
  "key35": "3dK2Djp3GwXFDKnjkzTW99dX2PMapRcgK8b11WJT6YyD7updhDiB5AKfvCdE5EcxeWvQ9onQ4vtj5cbtoAbGeFXq",
  "key36": "3nPqihdSCvgMVyD3k1RxNVWdG19NcrxeXFvhfkcU1ioTk7oLQaRkFFCTtLYovZoxKZJ458F9isqPqHboMfPUSAsS",
  "key37": "D7gsfyNSpe4wDFDA3ayA95Do2WWcP88mF4PxmLYei8z2bgj5cL3zZ1YxyMuAE7yzahuHeV6d163Jgwen3Uq56jb",
  "key38": "wY8m9bEq17F3KiZZ53ZduXB4gLNH6P5Z5WKmXnxDDU7hE1HDt2g7HL4oME5bk3H3c8PcTHomuWNaktePA5YaN8W",
  "key39": "3KyU3CqhZc3YdoZ9HWarKUEhTLmKAnntazNjYDYW8K5C8RFpesNBVojqqc7xFHCPcwVXcuMBmitUzMXbgeGXTjWP",
  "key40": "4C7eCY7ZNAXFuHRfFa1uoWJ1f2vgBdxKsnffLGviQjKRxFZZdjvnvRAda3X45wtuQ6PjHXA7pCd83PLaUNUDd79E"
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
