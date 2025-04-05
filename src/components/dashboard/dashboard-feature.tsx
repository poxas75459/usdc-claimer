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
    "En3C6g6KHDERme4nrFDXMyKQyJKzx9VRXFkbbYZ1DmWhmcZwRfHvGmPkcasPzUNeonU9Zsr15LUjmUwqdvgLU3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WhEtgjGR6z9yDzYHofsaPA3eCvz4UhgD6q6W7jSSxn1sfYWJ61kyUpJVgniR7TdTvKJuyqB41Wb6kVqZXittC45",
  "key1": "2WEnhvk7G3TSTTv9p75paYtSxzfvWSWKhiFrD8L8p3zmgDeWRgxPmLtmjhBsnEqnNui1rCBSPyeQpzeKw8DxzMKd",
  "key2": "5cdHP4waLcwVwBvycchiC8q7TRyNTFhGHsSgvTumEfgPu4xa2SniPhEpXAKzVw5R9hfNm2XWwWnSpdwtePxkaCMC",
  "key3": "64CdpjG3woSXdaWaherxGgP26cXYAw3K97X2eTEgG1Gb77UXaCD6oW2YhWfknACRDNprGWJRx3SYF8oaFz6qcYKu",
  "key4": "3QfrAr19QF6HKjeHj5HeQc9F9pHgtZC8VedgR3tqTZuDBYhLqfFYh2G3szW4igpQztKYAonAtFVySL4e7qUMLDo6",
  "key5": "5r86bhL13xy9YWUBJYuofXG9GBxwYd5vdJPMAXbj99dwBfQ9GTGZsFPtN1Q4c6ho8AprJk6niCyaPwfAiW7F1gke",
  "key6": "2sH4PAanM1xNbQZtUsnGXJzz95WytsRCYa14awoiqusGbNWwzsrxv8qgWYHAjwTdBzFifhTuvUKUX5VG7LDb2sB1",
  "key7": "5iaKXRaB71FsFwjUNspGaWoXurw1bm5fGStoUerMSocm2bpbmG7A9EA38tnRmTsVVnrx7fRcabCAdSzsZjVVRNpm",
  "key8": "2MaL4zSCyKcR8JMzGx8PpgeZ4HARfUxsaDP4z4VVW371djLbXgvc75VhJ9Di2rDiBPwJg4HciQuPK4ybQ5tgjc2G",
  "key9": "5PpEwuTH97mqrxeLJVsEvvt9AjtNYRFXq6qZ3f6msmfuBArQJbeik3ttnn3rPaNECczRdZCT28W3p7Cf5CprVjXV",
  "key10": "5a6aewQkQUmA12Pf8HfPgQuP4A6tPTXaZWCjPgWPq3M41FKyJ6W5eAvBaJycsvPjQF3VC9Na9ByeawN6q9uh9huL",
  "key11": "2rD2FKdzFYscrDQajG6gTCT1eNEsGLmC7BbFZtGMQKijZJ3CJWHb9EnA8vhS6CY4quMmAJTpDsnV1jFyompd5opY",
  "key12": "3rnQ2UHScXh6qdGmWQqMe1rg5ZeUWj8TW19C6P2NvYYgjnh3YV6L7Q3ZqUN3DL1DVtRUZ3Rjri3pstVWVEP3dg6z",
  "key13": "4VgxxGs3MCyZiUcdHoFw8nQuniocMfseLfoCgGVBwLiwfVFjqEWRRcPT7YTuQ4PYkeWcMKAdJLp4etg2wErtCPkc",
  "key14": "YZ1xknNrWHTNEpeerjLeRQ7U3GG241Q7Js1DbpXHUf5bHCpDZg8iJ3dWzXzJwC8P1kNToUwsBWxvpiDjxhRUEoN",
  "key15": "2guaRF6u4Pb86jUqPuCSHX6B67H1J7YwnMfDs9Uw9vUEkcRtdsd7CsvXqKyCmFmc9oNBp1Bm9GrzdYSeTJ3TUUpP",
  "key16": "2Upvzj82urLjmEKdcaHEt1WaxqtDsrapuqFEkL1W2f8S9MbADYGfA7c59Bc9aw4A9FVv2Ym2vZq1cPW6hZrVJWJp",
  "key17": "2XDnWyMaZf7GqiKe1zpBm9eeKsubHfHPb1ecsfQ8ft9v9Ls45Mf71DCWcppmXagLgcTE3T8nRYVRA7TvyeujmbhK",
  "key18": "5LkSXAY5mShxNJt3g9mRXoxUyMsf4cL815vRPKECupSjoaXPMtkbPNgsQ595X3vC8gCr531W1Lup4aTYMEwt3EGm",
  "key19": "3Bvd8PJ8hRoRSGsmRqtStsyZcppeBe9AFaJDoWQort73fbZuGEwzGbSCtpF5VK7ovAqtSQsb27ZcsHN2pavvBvjz",
  "key20": "5yXunez9Mdvm7pH5reBHMXCw2bmhDhXjNdxxcxU4gwULX4FkV5cqtxtT9yfpa76ziv9QiG4CmxKo6mMi2hL2gLK1",
  "key21": "5LuqpQvCXsAKr8YypKCK9vVxR374eHFaLtzzEjjYeoQJXcsgZLaDaLh7RKnVxvotNwCvvECw6vJziktNnYhgKUoB",
  "key22": "3qeVsxYSnrFJ8XNqBx41pA5omxGEpWbjd6DHa2AbxHrQJnJYpdnwVZQy2mqBS1mh3tegR7oKBwhxmmecV3r8cp4j",
  "key23": "5BnjYrXACDUsJVtVUxy2G8aTLgvhzvQpnoqY6vLrBf1nFEkNbaS9CTSUXmyf5VaRtLUXiAty5mky8Ug9S7pcLG4L",
  "key24": "5qH1FCt63S2TK8qfRCp4168GMnnGs8sdhnXdP7fMbCj5wTwX7Fd34t4ZVc1u878MhiTZanK5j6WiCidMNF48iw1A",
  "key25": "3Zf3HZhDjbGtyeUT1yQ6xzTRDtx356JoFeNTfffuwiZqWtuDnRvY5vtHWDXi9WP33wvESgyvVNvuccNifkqcLwjr",
  "key26": "SjBLWnLs835qC3hPiJwFRaKUaDbHcCCHPXR86vrRGtrgyxdVJfMWiTeDdi31xPucEvsxCu7Z5CZrdtc44dZ4UZb"
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
