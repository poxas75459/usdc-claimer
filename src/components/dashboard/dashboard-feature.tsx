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
    "27px4vQ8jVbqWZkn43sNNtwWzCjLQye9EVDNPA5sVL9TNYsx8UnuqErByGNg8ShtHKWqhDEsEe3bRGNXeP4n8x4G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MkiyEPxtApf9g6DdrNVkHJCrY5WGeLofTQumpSmFzKsG4CVuFQekLrJGagcAEbD4yXt8gkjrcxvRcfofDntUnKt",
  "key1": "2rx2gKbMt2GnBvFnBPXTsFg383v6iMwZXm2ugsxHGSuYUjPKmokU7NLYh24TCRzbUyN4tpTP3P9CHvK2kmc5r4ah",
  "key2": "m5GLfZLMxT7QYTaudWRisTg6rpi1k2W5xmAZ7KqD3Tp7iyXnRht9hrmcqsob8AfafPCDznKkoDyiRxHYXAzh2Kw",
  "key3": "2y87wHisVKjwnE23WCKn8z9mgdsFUSAfersVZ229fkNFuumdb2sjfoA6VbunVcXSKpcQK3KDvNP11KUsjfnDMhCB",
  "key4": "fWExwoHxTgcQcTy5DhaXh8jGx6PVdzBHgHttmiQzTpG9ZsuP5RvohCeJhXruiRQmWt6NXay3n6d8JfmjzzLNvCJ",
  "key5": "37QXUZMqhvs78dbRRTSMaGejpGxQpdo7bMk6woWLoUcLB98BjaU4nXCPjPfHrkDAkLW5sPC65EJPxNDdfcyUsTmq",
  "key6": "F4C5MaZwaNosJXicv2PTZ51h73BrDGdoVsQQ6cmq4q2xwipQJq98Gv2u848yJR2gM8Vz6TuMjbFiqqB2pfDBXkZ",
  "key7": "2QKhNc6wPm7sPtF8EWWmP3yytJr96uJYR4CLcb23fdVUXuHreF9dsZNdKf7Nb7KaAA5xpSNxtEXEkjwYYakGeTd1",
  "key8": "2pTEzHpMSrPwo3idADTvG7jGDKoUfY39ECxpBoEvHaNVWCcBwdVDJ5SofVaN57X6dJS2XGXvdTQ7YGb9XxPvJjwg",
  "key9": "45Loi3ahF9dzdZSaZp5y8cXihjYKJZc4i1FMXtWG9H6xbt2PPQamHNzvyAGmTyNMhEzNzkgbiPb6y8WkWTJsk9tE",
  "key10": "23SM1QBPvoRRADHheEpGD6qA19wcDi3Hk3kn5BAB9uK5qK72zYG9WbCFYkE95sx1yN5vX1tPno46EmArBkBpaXEa",
  "key11": "52qgMFroudX6sSP2NKMLnQekxPqzXjTWUHvhMQRin9udVqqPYDKwKwWjifPhG9P28ZS73SF8F4ivpcbEiV7LFQay",
  "key12": "UNWT6FSaFiR5TSJEegEq3kfd5712EWU5BBk31D4d3D77i695ZRbeqYay7ksitU1hHSaRrkmERjvCsmPX9rEwDZV",
  "key13": "3CVbRrLTvYU7vGdNN6E9nrxRVio1BfC9ZTzUwGCZbmB18kFQsEqnV438BKQKS5p7q19UUr7SPYRmeEFiJe1TamFk",
  "key14": "XKFLb9QTPzCj7MwtfFHARHuicRqeAZ5L588RDD3Hy9hqqqKWAPjapcgujCoKrrnKWNM1Emk6onYpzvW9KaBPsJP",
  "key15": "3Kw6DErapstEsBvwrk2ehbZZM4Ax8XM6ivYbKSuRE1YB7pjoehiD2u6CBoJsjSfPNeXTWa2w7S3tZWYEgc3Etirs",
  "key16": "2jkCGZmxavgVKRWj2XdxMbibuyDmfGHHvgnWWWsb8pxFG8rtmjPBh96c7PZaERQDTw85sB2HZqesvwJsEf2aF4mt",
  "key17": "38eNrb37RcbQAnVjLesZfFVAakRjQqombN7rZj233nEUoGLToR4CRdm2Qvz2KwJEBALLVRzqTerYSJbwjEaARbxd",
  "key18": "5NERxWPU6HFSScPLmJm3v1aTFV3Fbe4eFZhWJpZ9V84KeAQABUTMAbFr2dKzp8pY1N4ZCKZPDxAUCzJhrpMrkVi9",
  "key19": "MFARGuE7dDx6fnTxBZdjQtFn1j9H8VcG6C3WF7hjEZLrmj3bFKt4ocd43VmHEXdZoh1qVGceAivApvrCGaBVJFi",
  "key20": "yGyscLXBp7Vs3yYb3YDbTVH2JfQez14T9HF1AK7ZM65U5VTrCqCHwMuua2mhu6iC35jTh1h7tQsn78Xm5bAb2kJ",
  "key21": "2KxaLoA9RfRGbMHZxymTsEU5QTzcsmz85PNxjquFn95B2HKgFk4LD2VunL8snNoQ4wTYNwWFwLr1exU8AjUh4Xx5",
  "key22": "66DYJ95j2jxYQNciGbbuJc1rhX3SJt2oaFWe9oTbuPLcTVRgWiE8agXGV5ULcgHrkrYYRV7KFJ52s549YKWMk65f",
  "key23": "LGKwnwfBMpu9hLPu72145isXf86JF8hrxonQam1ceFGnx3FumuPETGu7oV3JVj8dgadkPMCvYb7W8w6WNkacTPW",
  "key24": "4iKjffy78L9gGwYCwSh9SEdcEXAKqpBk2K2EwUQ4qbQ4b5rtxq1vQ2SkBQRvKU1Q849WVgEVScocdnKCmdjozGTg",
  "key25": "5bWrXCKAvoWVPLaQQmgaL6WSieT88Vw4sbKLhA65JG5x5pvLNsyjX872qUFyhVaTYZ1YLEeHE2ayVacQEr5NEMwE",
  "key26": "5EVcSimSkjyx2BKSLX71nMDTmrcYSec8wBbsTjpPvXkfuCy9tRrcpipzy2oNVnWBXDkqYTBshn8ZPqMXsRXTXFEG",
  "key27": "2WxWGcce9nucH5GcsdCwG2MkgefNusqss4TQQG1Vj5SahLhYw6WxZQnbY24rQWeFNtZG7kp3XF2nJq75HoQFv8MK",
  "key28": "hcsLFu4Hv2A1CPZmaHoxKRteUWJgoTFVHuQZ1H5LfNbkc1Nfe2VQk4VvXWDgAC9yzxD2fZkmai6LL6KdDrwwvFk",
  "key29": "5qkdnUp3ZjyQAfcXKH4mnn89KzPitiqDCP9soJkZ4VifvQPG58ayq2663TFvgcB1eVAMGYtr5T9EWgn4nx1MRqdW",
  "key30": "4xzRKEFa8KiXCRQkoLoqP5S3wumxaEfMK93P7gVj5959sZKUBeB6vbex8JuN8TFo7Umr5PJZoSbaxNYipakQEPpn",
  "key31": "5WR5u2DbUzdcYG2diM3pUhTodN2MzpCk15THfJA6S2p73uRGXWNvNpVAhRp5ExBSQ9jV9J6yuUUAmkgrkv7PiJma",
  "key32": "3Ws4JfzoLeA5sb2JVVEBaUujf8na5g7xXxoiQLLRZpN22SvE5sPdUTj9w2uSebvKerVDESTJ72k1FpoCPxgxjEyw",
  "key33": "yQMMNAxP9uSHkq1SYt1zQBueEnLfTKivXPDMVn5iBnS11a25FqjiU5rxYqV8mNHiy3d3iDr7d5UL9AXS2fHSf7B",
  "key34": "fGgMWayzzRg6ShtpZufzMZ4pwg5DHZrCWTsSpTGsD6zTmnHsopeDHmUxEuyqsCbFZ925uXYXp9G4xner7iFnbfn",
  "key35": "4p58Nd4nJthSP1a7i6JxvQHScsNXpWUNVff94R5dtMgifhY3v5mcZsWe9SVyUvyUQSPeU44vRXMP5bKnsWUo649x",
  "key36": "k9xZNdubdGeK2nUo1p92ft4GHmg3eS6EM4qsuhhmtv1HvZBc7bCDHCjsyHyviwiifZi9zRXhFSdoLCHEPgRfe1M",
  "key37": "5Kr9QGLd2sGd7UoN8WhqwWjG2yJwVKteLWBzgn5qBUeSTN9JETs5By2e2io43wAyrBKNDsXRhNiEF3BXjjShjwWb",
  "key38": "ZqbNoCmViicKjRQnocfsmxwk6sxQKPKZMBCLbVPYrwfZQenbPYb9s7STTAvSJuCqcKVYLfq6FcWENqX2XSumygi",
  "key39": "isrCBhMmyrNA2btrFSJq9EC1iAwQ2BNHgi6KRJme3dh5MhkWTTUh3WxRzdekvfMAwDPoX2Lx46asaQUUnfPr2LY",
  "key40": "33nFWr2qBjYV9VWJaGjkEDp3spbWPzSBZAxSpy7mmv3y1wzHudWWU3v56Dau4TSX3QYpZH7arrAc5WTQZu657BjH",
  "key41": "enQ7ywFPgyGkidsNw2ZVJLSb9acw66ppfmneYDvRaR1hKJTbWva6vQ4SD4eD3L8fKsNTuPrrCTV6j1xMxuznZQL",
  "key42": "3jNJ4HzFerLrVZVRwQYbeo2HwobwmqszpcAT6nQ4FSsLu8dYziWobtbojeFLZXJ4z4f8nEybjNbYvoyCLWe3gJx9",
  "key43": "2ira77P35YPPkMEhptuSAk863MxHXtKqzbMPtjXsoMT27PGHsYjRqmz6KJnphjckWVYqQ72wtZr3S8MtgJYzVp4d",
  "key44": "4VUz77QaQpBZL782eBZ8Kk7UAKDFUJwEfEnVt37UCnTwUKYvbNfS8CJT7CsfC8q1kzsWeZdWbSro7Z4kWrh9ykfQ",
  "key45": "3EPhdo11MHeTAHGiZ8spEtvEMNjruurmHbKaDUM8wgM4um4wfCc5afPkws5F6v5y1zMCPbgNi4MFxJzGFgwDzyDm"
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
