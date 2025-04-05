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
    "4QYrLQeB4tSCQuAyv2r9YfESSodJ9p3tGsRzrfrTrj9jhgv4mxtKGKFu1X7uUKMTL8ijkeBQRQEawqpFWqqE1w8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VxAb5nMKBdN2MKbHokD5jDKvcqSsHRMJQXRN8T7Bfv1JBs88ySUTKRGCXYSWL9JWB6uFVjx4vguadjXrSowNQr7",
  "key1": "2GJddZsYTyzo7AV2EPzsNVUnQ8Drw9x5fwXH7LHwXs4tH54aRwn6FFfPXqvWLJhycqcQkiem8FGrNHbzCVxJCaVr",
  "key2": "3nqeqbWQEuTKCug7nsnyBNnvuKgWk4LxDWZrunqCW49tkqKykecx6mfMkuWuLBJRwfk6CUjFMN1kanwXo7NekkVs",
  "key3": "VaJhKMkAtUE2mRxhrvAeanhYprqRf4s2g1vEMLMzH7RMtukftr69LBJFdoJJ3yH1f5XGywrrBvGh9zEwUWCYNFW",
  "key4": "4dhGJGsMtBxTrzTtDhSidLv4hozPhuPVR9XVw5bGch32VsHSESsMvSpnBfxpfB1DJmSSQXCP2LUq63XQZTo6c5zo",
  "key5": "5NPBFYbdierh8keikcX5RXmXorJxNbNngZN6JKvTvUUbHqMoDtZZhJomVfi1PtZFa4CLGANAP9QvUyCGYTQRKqGk",
  "key6": "3Ztz5W5Kgopjd3BuaVySq3m2Bn2L9h3Wy4mGGXnUXPMTjswKp3z4GgYZoZZ7BggXQmGMRukUyc9Qk4JLSDUqayp8",
  "key7": "5bk1qdDanDVFMZRvp4T2YtsTFps3DEmfkW8aGPPSurru5KX3hJeYM4zXirSmL9LbLG1w88EE4J8nuuczTmsxiATT",
  "key8": "hFCQsBai8NQAWJkdt1kd5vRzgY9PkE42Hkmk34wHEGqFdtcPcPShuge541DPewQ2VmS1gdpBnaf6medJptCjc2D",
  "key9": "5F1ReifeqLFcv5NsRmXCh2qq3wPVqLwcBWKiEUftT1JcBNbR8EnKUaJrnaevEFHwuZ7akj3NgR2vzsonF9A9D8Fm",
  "key10": "5VU2xPF8P6qEfxDwiud9U9u8Azbb7amNQyDDU9e2nzJfSqhsjUM4j31UvX8AWmsRJDUkxzex17nK5Xjizpn17t5p",
  "key11": "4Tbqb6MrBqUQy1bsxh8R8iRue4W7XwNVixi5jWagwzjL4FVUEmjXgQ7z7iJDK1CZTboT4NBtbSjSuzWqdHm1mvSs",
  "key12": "4R9ZsNyLnhfRwo2bZJK29d6rkChv2SXFsbWZoQLJLXU8i4Z6W9F2DcbXp5zSukzvtdfGJDaikCaU3ULRWeHnMSFB",
  "key13": "4frWMzQaR7Rqn8WQVA3XVV4BEZ2Lvjp5MmA9iuLUyriTEADvitXYDohrtqLCg3c5Rn6GsP6UeCA1mgdsDvqN3fxX",
  "key14": "2PGgtZab8AmaN7pb4CsRg8tzRyaSK1YNxyVxok2ywAeCmo269MGwk8KcoXrJp8JhS274Q4DBcuKVFJTPRgFCySoi",
  "key15": "522eZHF1iYfy9PfwhRfK7ZqzS7qDeBRgCTYJHZgreQU1SrBjtAuPmFAn2gvjyN1b7ecVLHkuSwJVcPsrSDt4yvsh",
  "key16": "2RyREvWsWXhTpnhuTdFr7nzqbDnUuJXvb4gFiGGbbDYAAbh7zQpkwfPupuH4YKbsw3PTeSbJ6XaQeYYCfvEwEzP4",
  "key17": "4VnxNWWfs1fD7K4gCW1qmbvBi2tk6HUJrd9d11rXLWnV8kYXxDnqKo2NyHk28NtNj3RGN9h1s1mANZ24FpLxS6tj",
  "key18": "4We4kzdKA63aaVHEhrfg9D2DrDCbAVteyK5ysdRyTpSA6M4iS7i1ChZGDwJE8fEDAta8YNCF3ESwjj97gp5QVMBJ",
  "key19": "416igKgemxde4mjDqURKREn654Fk33py11PsQxnGnZKyubtxLF8VRcFsLVDVovNAid7ZgmvbvURZxWxsrVnX9pXe",
  "key20": "4Veh2ehkZtxqdYMAK7YBTvBrjKH9BzrV5k4g4tbJWP3xRf8Wy8zzBkYVqPhVUgGwvSPZ2bmuPVHixWFNKAJJxfr2",
  "key21": "mM3hGCjL7X7diHndKMtuzk7scWQHzn74bWZP4Nap5w12CMxSsnaZGHjF1iuhEvpcVbTY2VskvsySYgLGTYNPQwE",
  "key22": "54gTGjsPy55GsD3gxJmpWctP95mBzuWU4dwdjHYT3VPu1eDF7euvv3EiBt9RasaLpnsKauvrX77FPLp7JEaKkMTf",
  "key23": "3gJy5zGzrsKS3ijCboEYXJHSjuDsRyf6CRc7iHeHh1GtfMg7xbMcw6JMN3CquizmTDX4TXpoSPLdhL9sK1uo6FAV",
  "key24": "32Wa97NW9a25PkfiKFZxvw2iAQaotGGUeo6kfHfhMvVKP51taHMfL2mrSF3R7Ybk4CoJUd8NqoZQBizgc4p8FFnp",
  "key25": "zFDz8KjSLXVFpv975AdDvTTaL475s8EkPsLd5aaXZ5d97bDDLPdrcFV5JMGFAJMWNhza4y5sJzQM4V7QQLiCWUq",
  "key26": "4JCKBYmwh5VA3jxgk1z1P5kMGarfcUNkPQ4QwFDVmMkemfT3EYV69DYzLSopazjiHDJBWRmpQQB2JxxDJUoAwkhR",
  "key27": "5CEav5nudTmTegSpZEvX7SmyZsiczcSbC5v7T2JS2cGA9sFrRi7weNnQatwnL4FwUQgSUWnb1N45o24Lj9MveLDs",
  "key28": "5A9d1vJ7iceASdCdh2mQKdMTyqkWKEKxApyXeHGDa9ssMFCAWkvWW7mybThYVfXw2BTDGd5DkYdHSDU9zEoDpmS3",
  "key29": "HurzGmJpE6WkwdcHKD1ZhXKVpj4H44Q1bZHQNqPrANFvtdqqE1a94EEHiXcjx3u4bPdvgGPbLShHUVEK7JSzSeo",
  "key30": "58987yL68s2C3HwntU3rR1TWrAEUHa2R3jUame4DGE4Qg3auHAqRKMSjBqri2KPv42gAcQhuv58mPx4HT9SErUo2",
  "key31": "5T9Y9LMgnka1C1erYwVqUvZqbAe92NS9RRBPoofQVcX3hMaoyVHjKqSoAKrQHHzfXhjuasoSqdmYiG2cgk65eUqb",
  "key32": "5aYzBtb7bxFPRKqMcpEq2oZ8hZ5So5xzsGnWLhjuawBrR34DF3DHsZHWHnyYKzyMrum2kz4myTh5iJawhnqXk5Ef",
  "key33": "5LkPWQiVPvwQJWPeYw8eok6J8Fxe6XgP99r97t1QemXJ1z84p65ad1H5eZALiMcGipmCppw5wFHme23j4rQrWzUx",
  "key34": "k678xyCxuBKfACTvWtcKn8fw2acHDDZdnrEkjzVyR9KurwjRdjjHgvFLAFixhhUJSM18TXQkgNt4z2rtSBxyfTn",
  "key35": "YUHxji8pb6z3Q3uZHi9MDpz7KUNqHWQbJ6XrubHFJjny6jhoyZ19421CnSqbWKVNS3VgqYyhQSy2pv9NX9gzbeU",
  "key36": "VvM2bAd59vRfJnonDWmmhAZHBCVykFyQWpMymHx7uXFuifvvByYx5XiuC26FvQUrC6X7zPLE65F3e2xUFJNZbz2",
  "key37": "3Zd7euvvoDEURKZkFuaxuH893kFnpueAAUnY7yL2GihiwPGk4wBPd8xAVd6i4ceTZUuxZT8CHDgBZREPaPhZiLiN",
  "key38": "5sivjZ2MGaUqpU1USM8rPSaC1sawuX9o9JKKzPxDA2vVZLdNzBJLJgFdSWiAn1qGeWKLMUZAAgLYg4bByB7qqtgW",
  "key39": "r8Tv1JH9ZPoA8yPyQSCaEvRcsBD6d4gpUurBe2cSPXSwJKWdNDeEyAuJY8CEDSJqMzpZcbwabgxeUVZD6EfFFK8",
  "key40": "erTmipyK5nsA8DXYzWH9JvNXcesTUM85eZPdbKiKPd7AwGD1Ew7izHc2MKxjpwWcVo2nmJi7SJv2Cm3ngyTTUst",
  "key41": "5nfi6tzQxR8D5eqX4o1Tgo45thS7vFyeuansrYU2NR11dRA6V6UhYaHTmorryUTVatywkuZqcc58MVMHfcixHMYg",
  "key42": "63dAuPXCCmgwSBFP2VmYHqpxtMShhgAUfUanzRA2P4jnPsYvwUWBegRSxM396FUehLnTZURtbcRwLxFtiZW7mwUJ"
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
