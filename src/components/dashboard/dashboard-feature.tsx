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
    "9CqTEyJqNSYzrGjacpw96CGiYyyMqPWRJLfJtwCWn6kfvx2Hgxpwdx4iY1L2Cf8MJuJF8um3kwUurYx1t5kGE6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTfSLUADXkTMhufgY6WVLnrVshh4egUq4YjAabNPKUYy2XgMwaXg3gWKd9j1WB8mLggdSBdor9YKLE81wKU7W32",
  "key1": "53nRwVSUj6PWtpFNGYNktNPEuk6AjfVoDz9KANFUKKstvB1CZgPGiAqYLXxu15PG9Y5hkfEmiqkwox8J7RFyJkcA",
  "key2": "5HVkvRp8ocfJYNuFJvYQUemXQCSyZSAoR7aewAgb4UHAA2ZadkRdTkVzSGn7S1p3Bbtxj8qKKKX5QcDE9SaUU2TK",
  "key3": "4FmTJmnegKACFgjNcX7yPSVG5XFrjzGwBVwnjWJA4FnM3GgzU3SHtTbr6odKZdHm92C8SxeGpPm5Y3AvFmEsgoJu",
  "key4": "21QATir2GYeas3ZzhRb1eAtFQsqoV3H5XNLSFdxRaj5wNnj5pQk7i5SLaHtAZ1Ap6kQ1pqq6QAaLWMGJpMoCdaYC",
  "key5": "qsUQr1QmQgadyUyRdWKY82KzYHXSAW9jD9dXmqTcQ99napj43B7R6abKmNRzWd6d2uCZbEKbNPH3fq69ceFGo7k",
  "key6": "58xHMRjNrPMmKfeY4EyvwnYuHrBDd6GLLtgsov3iGPfT55RqsKSw6bFQFZ7sUVfM2qHrse8UBXCiHBTyyNvaJB5T",
  "key7": "3ux1VymAVJSTEDKQk55kBYgk4sTxGoMEpmNcuZXuevUKT8NFpmRfm3UZW6LtNuis7MfcwnYqeZKZbpDYvrW4qiAG",
  "key8": "5rzArjBTEUGnNkkTAV6NPyTReVVNAYCgQUuaUbG6Jw3pYUTMkCGw6K1DwcMiGkYaxozo7uRWFDK6FhHaoLqHPynn",
  "key9": "4Sdqq45HkXKBP8E3k8aA73JRR4Bg4YE7hWigaH3EqtfPga9sTGLEsPZZ34fGFZp5eRaDBuoqREACu9NcJxGNnzmq",
  "key10": "2Tdkiu84JaouLSbUdMfxmM2iR4SQ6FDJgadPZ4stnz1TVo2uHmjKEq3nVNrgH83UZ14m7X4zFPtD9VUeCemjwTpC",
  "key11": "Qg82Pg88YnnSAtphec9JfWcst4ZvpBwEEzC3uU65MosfVNvwStYHTfgVw7RkxqNNdRD9rtriH84nEAARsoBsfy4",
  "key12": "5oixXyB25A8aUpXk79M7qUe2Nt3imoN8H9LETynGsmJh4JyQxpUrXKJqfm7Ncu8qkm2DLJxjh1h22FiprGHrKxk5",
  "key13": "3kNkcRzMrzJaUXedKfctn419nrLxdXeTBpYYwRsHvAz2hHYUnmwVHpQaV3nXREqYaCr1JMLv76SniiDXCLZJwrFK",
  "key14": "2GHzd9nGDtnQTfTautxZo29aC1uXQdiasnFM1SfpAJTd8vx1XeS59ydzWBV4GEzN2KWtkHJFiNdSK5TSrKgvELmK",
  "key15": "4mrk6JEwsSyTWHJzXR2GXK6BY3BdUmJrCYH3YMY3VfFcgMRtirUn7Jm8DHbqB7TUi6cBe8fCpuPuWbHacBQ3RR5d",
  "key16": "4DhsdUXWHw4SauQ8MtCykBfbQjDPAEtDS19SA76pgFLwstPRvYw5eeuTEei4tzJTJ4jkDJQSmN43UcGa1hhjdck4",
  "key17": "4ELJBELdCrueA589Dgv3t6JPDDnNU3cYjF2fRJsNNrV1uuw9JqtLRBtgUrCvbvqHuNpNFXz2SJLLDXnPTjM7UdSA",
  "key18": "3ZCawgKLNgReQqw5dxqsAtjU4kjaLmCcm16XsBeZ59YHmezPi7cv25urV4g1RjEqJ3Yc3rX6UDxFwN7YJ3m7X8fF",
  "key19": "4nG73kzYaLjwsd6iammYiCiFv3MFM9xhA29pMiDmcnBqN68SGK83KeSQWhG8yBtXSAUWGmm3KNHcmvrnTaZpsSPc",
  "key20": "59i25mCgZdhaNa7dGDwHy63aZXicLBn6KmKGwu4CuFtFGxSjK2jCH36hNeWfqKqA6dua25eDXe5ay9MBKUuzBsCF",
  "key21": "5dh3Py8wQpbVak2tpjer43dqcFor45rDqQfdZatirdYLghM1Bip8x6pNuF9Tu5ek8xSZYmhF9GzmzZ2iskGH3PU3",
  "key22": "64hXvcSa7dbLiuYZSivgWS5M4ccRmc2Kosg6e5srAFBZ9XvToXWztUobaToyGH2mJRTrgCdbGkUQf3uv9fQ5xcS1",
  "key23": "3HzjqswJH6hjWthLHv4HDSu4TrSEqrmPTU22FNkFvesTx4MMTBbfoU5syj4Ay4rsJE3zwtAPQTAyyvGGxVARUV8H",
  "key24": "2dXwKoNU3j3V1zEzgVgse1pokSadBt9GkqKAA4bAW5GV5haDVTUC6DqjwqNRMHuRQgB9jCCmnnzzWUaLWCV6syQG",
  "key25": "61YgrGCgsXXz8M4MoBbw6jDhPNHQTHjGMEaedLPtxGDNzNfRP8SHgUTdqmEg5aXgnsmQczQpQowgsJLGY6RWCt9T",
  "key26": "5xhTGgY5YkUKqfeioWov4itouNNtJToJwN4N8YVd5aWtA8vFaV2QWuAAp7w11K8tjAyDPLHF2x34PYVLfXQQNPH5",
  "key27": "4XQKADpJ2RtGv1KKS73NKFGcHSeUd9XCgirskH7CaRCvYHdsjS42pCBuZHh4q44RWQZFXF7irASpaC2SMMDua7YB",
  "key28": "498bSiqq3a2THPv6EzWQfshKMzFzhj5KViC52emFpWRjMaWevdcHVS7FezKzjnVJy5ADEASdqeqAG1zDy67muj2W",
  "key29": "2pZa8KJfT7kgKPQQh2Jv97t3yUStYBMGCzXzVkbu3CfTX5cYVz56famvemR1P19efkegisHvkaB75919y2HvTQtu",
  "key30": "674b8BeCSx5DQubbqrhh2Ds3QezgTY4KzP26eUrJBRM3WQZUmaYgNoBsr6JRGxW3RX6jp5N1t9EpRs5jEc2WZRib",
  "key31": "3d9C4q9sJ8BSpt5iE67N2FHvcHnk3DRuXKUTqYF63HpLzT82m7JwiLwqpcegmiE3boWST1nHyAxu5gCochNS78eD",
  "key32": "41VrmV4CQLbBGqKnioiKhyshb3GsTFQut96SrqT58kqbxfMoJ5emSnjiLQzzpQroNFGZptwUv4NGGwh6C9jrHt9K",
  "key33": "641GPWczdR2ixY8E3sd48yCw95SAhpXoWAs4uhYgi2YZjB9GLRLotqopruEnc3M48GpRQV3QCmBV8BWRWMzVypDB",
  "key34": "2ctrzyyKLAsqdZn5kMQCetBjfeVNFwWdtcnQe8WthUq4hNCUQyxwVALzzPvALPyx1677ueKMLSUZwgPdocKFKBNc",
  "key35": "4CgAh6vNVGujYW7nwdBfAuBWk15BZ1TtaLCMuhTuWCxyRR9Z2QuBELGZbGsGPCRa2MLveW97tPtq4ZBYS8GVDpws",
  "key36": "2CFdqEs6MzX67p2REohVX1Z2FFTe4cCzox6qkqvdZuRytbSCfvK9SxZzeHwigbNhDuZyoThyjVHV7DzGVN8DSzud",
  "key37": "29C1dLcYnFXzZxsmiNKrdD5ZpiApHgbWiMJsMftfeUt6ytAbwwYHdxafMpZ64o9uPYZprjzfdLmg2oDypHmckVGv",
  "key38": "2vki6nseXKM4vVodzhj1JJuo8iMJLDbFN56WRmk17CqwmyG4oa9VDBzDVBQCdAATK14EAXnXdZ46gjebQrhL4SC4"
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
