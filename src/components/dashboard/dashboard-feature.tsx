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
    "37SQ37vNMkyuBSVdHPcrFWMUjX1ZXbW4WCXQFnwoBcjEmEobe8H2X1Ghico4nNJWqWk5KYBLNduwcqSM176VvbpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PzZW3QxsiDy3sc71C2WMpEMW2uovv64B81iDgiPcV3UEEfvRcyT2zLHhXo4UFHKWUdAs2mgVU3pPkzaMTB9CsKY",
  "key1": "9HSJvmXqqXUFX4CMNSKCZzZXpF2nJhUz84AjdwaESa3JaZWSk4QAwq1QTq7c4GBUQKXA6NaA63NfE9pEGL4sFM7",
  "key2": "J4v3ipDUH7A48p51MNXJTHi6v63dWdzsfKeh7Uc2PgXaL4Ni6Vj79PYNPosmNqFYFJ5ohiENWP9zCzsxZmJGzVP",
  "key3": "NZFmwpxAehBZxtkmHXUQVLBER6ptNWRXE57wnRDESzihSzyWM71tHHVEywyyEFEetpAW8RsnFfwuRYaUG3bPPUe",
  "key4": "2ZCi6Lje44v1Y65iPWDzQYuqpkhEzkMUdqFDbaUp5tC6rLjYL82RV7RPnTbuu44FGzf2mDbzaCSuCobMtaXe6Mjf",
  "key5": "2ASjKC63kuS4mbQK2QA4W7Vbi3c4C9Yp5wK6oQa2BpZGfqSq8fe2vz7SnxuGszBZ1RqSiReyj6KE8fCGv98k3sGq",
  "key6": "xQdZ7MXFzGUrnAYt4WZG21sK1jw17WUDt2GTtcBFJpe2D43QWcJuiXYzsXcVzgBf7HjsKgGc85HyHC6MR4JedBC",
  "key7": "3sRtCQYaNkM5u1QzSrz4SGvRw7ne6ki4QbNGAojBaZpo6WtsGqk1cUcfRvjS7eQVyV1tCFdqbJ53WN9cPe4qZ9Yy",
  "key8": "3MBa6q4BSU1nD2GBGV7ihpdVGuAHNEoDTVBhBgjT6fy373bTuWyqfiznwaascHwfF8Y2sLf5UsiR22Pbr49GQ7mc",
  "key9": "2xHLsT2wk7K5BVLGSckbSbTymHy51uxjiE5Erw4VRTz4XT7G2H67T1owNRst2fhkNhxUe9BTxfFmd1YF1EpM1Akm",
  "key10": "3DhHMG2bs4GxGmCgN2rTeDHLZWYmGQRYMoZb7vJ7iRUHYqSsiKpP1a5ZtmdAFdLyv3ULP3X4eWkh9c17K1xx2WFz",
  "key11": "bEY6xtJofjGyVH6JcMH4RcJ1jNEmY81G5jqj773m118dRTjSLVki3TenjH6UHqoSnKnzXAR1pmPGBnB7Dt7oopJ",
  "key12": "5KqURHotRRUxoXxjuwYA7e4dSMKufH1wdNe1LmhDLtjs2CBmDzJHxagxTgWsX8fMvomzsFJxaHFgf2A4aAJDi3sp",
  "key13": "4dvzRUmYjzotU6Pn6SoHrc73ANfF5sHoPCE5KxPqufigANwTjcpdftdD3xY5nRFNW7hn1SSueGbMW2gq4tC1EV5B",
  "key14": "435EmEZZgM3gTtQirHNf1mK8j2AnpmpuVUntMomhk6p8zwiYVVpwLCkb3qNvswGd16KAkoTinuWuF9CzKmtonTfx",
  "key15": "KCiSkfrpD8DEGQTRb9ehGogb8G2cgfpXg8dsukxdoQWXjdDMrPXjx32gCofPjseZMwx3TFCPUQvKCuhhgdgvdyZ",
  "key16": "4Et3S9Tpi5eqQMwqmt1PpLQ3gDQ8AKDLcd1S61Uf78PmLgued9u4yMwUXAZY7EYdsQ4p9XSnGtW6MU1o685cVFPj",
  "key17": "3DNLZUeUC9adingZ5UuBy8cvQEgy5ERcesQj9LPjCqxTYQLHfRxJTisR43raNapytBphL8tRxLQdF236hfS9FNqF",
  "key18": "59xmry2Xxb2PGsg2C19U8aaLtbtQ5nbQXEtt2rrPJVf712inFMbnSVVrropvnpCNKhFBZYuFYZM4WkrysShiasHU",
  "key19": "4jTsbTsw2SDWXHVDDFssvnTC9CxxgrwJmuvxyGukLE2aso1oZQCuxUTdWupLX5PEwuDcUC2gFzyvoc2tfFP5Bi5S",
  "key20": "4UyZWXWt6JyYLxQS92sc4fDFG1V9vtCD2Ph59EqiExFboBduYxTpB8jTXWHZ4k4GjufQCsRVVLwu1scZSWYQAaj7",
  "key21": "i3ZPSzoBDkzsACt8XvsssR42RtZHpWQg28eL2NWidnFABoYcRbw8ReFXnupPzVQSBcJiEFS3KkqLRFq9pi82GEL",
  "key22": "4bJ7kRwrBn1GqPgUTWme3GDkqQuv95cN3GiELH55a13ueSbCGQgCkNK6zRt6eCdBTVz4ETXPgyBGAkLuedeVuJu9",
  "key23": "5q5yJtchQQ8cwBawYEa9NMAcfDyYDAQ23vLbfLGSEbEpHtG8Q7GTBfgfSSYXWzyytra456JzhdmNukFNsAm7CgLW",
  "key24": "5jUUk1HmP1bAtL499vTK6Baizp8fFZPoywbbh48m35Cq761tzimuYhisHcifijCovmGxeZbrpZjkizFpCs3gZSXw",
  "key25": "3XDvZFGpu2G61dFwpudfRnJYvAYQH7u8FqaDFhCtgMdoBx471KAia8JjxBPxpkPCFpwiSNH67phX2BAzWgBLKyJ9",
  "key26": "QBBUn62DUNumhzcWp9djnLsajYKCPfAFV29syBrZ4w2SZ7JrNfvfE7tHQfz6agos1oQWGJHdeatCBnbGLZCpUpt",
  "key27": "Ks7i5SfAahf8bEkobN5qbSZeUENy774GES5F3tJSk3D6k9vqtP1Q2pnf1cLjgM1KGC32KKjDaJjCDRsw8iJdJCC",
  "key28": "3Np28XG54TCTKu8DmoBEr42H3LHQQoLuDVM3i6Rw57BCfXLhkJpUQx3ALHB7uLLfurDZj32GgcpTA7a72jX7EmwV",
  "key29": "5GEA3MtiuPg9jD696vN3wtXVvRhEdrtMJK4Hek5zV2Uw81rvRbSwYPkSNJLynRg1spzzWsGFhFSLD6iVAM3rmcpy",
  "key30": "4XsTzvbRmEsSaeHM8EFJhQN2r7Get47FvkXSRsDEFMV1gBbqnGTJniWYgtvCSp7PAkpGew3kYy4HMnwc78Vr2TdJ",
  "key31": "WvvkxpgSHhBd6qESUEFYzzLSUqULx68pC1a1BDWWyAGU9sPrmH4C3YRjCUJZkoMxHrP4oFzyvfLYYmt67FAnSFp",
  "key32": "3HYrcpwBukG2kkQvHEkgrkTdT7FUqhkQPzgLyb4t64kPSoMXe2uGGau79fUSArGLZ7KL5Bqew41aecDurCi5VGZa",
  "key33": "BNEEFfWbWUo6Jo32bZX8bShAKx96hkMQ75ft6tUSYt4nPrvd2vYodPEgBqC4PuBGBpk9xUk2kKbG3exrp3W7LxS",
  "key34": "3Run1cStEbN2DEvvNm46s6RAwtzk7UoRCmQ53P2paEiMEimQEpUA4i7MPbyC4H9PJ3MBE5gJEdAKzmENHLhdGpv3",
  "key35": "5qEpaLViqad4qg6f4krWBX8PBbWyeRSWScBE6boHYEQLGbmBKJeAqm4C8wntUiJGKU5heGR5zqAtveHiZEb8DD1s",
  "key36": "BnPKMnStB39TaeV23SngHGKXUBrL3DsLZeKZrsCTawb93vECwwJpbeNmaxy89Js6aaaC4YEBT79P4464Rqz9aUy",
  "key37": "QvCgMqdc6A5NHCCQ9oG1ssuGkmEiKFbMqn85TnPoeP2Yy29pTU1LL75r5Wsx4NcwppfV9F6NnsAanhFERQ8AxMX"
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
