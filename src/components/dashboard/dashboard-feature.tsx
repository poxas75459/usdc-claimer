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
    "37Ww9J5ALKEeTDHrvPcaXKYXiqpxRsV5dTjExRnnEqQmQ8dZCWMKjfiNedJhPbH56xKXqp5CtTfyR1HbiGCx5ZMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mjtc689rdUe3EzJpCgyzY1XswVM1eJHszVuxMnVRbMxNYgc9SP7arJKSKv3tHCphrFdCKRDFV5NTBezQ1oBzMuy",
  "key1": "5DmvnK5EySCBqaFWsyxjWiR2cCx8piBRn48wGsdFwuQ4KmeKoUBBJAZgo1fEfX8sJmvJUMz1iXuFToDvUds6iwe7",
  "key2": "4juDpsbegtvUikYCkJBw7dQNX7LEBz3ubGrFKPbN5n46LQB9UEzTQXZVAf2GAFYom1KwemBfP2Vd19TdsDqGfE9Y",
  "key3": "X3QqFrdFADAER1qk5sXhwhFpuQTBNz2RjwWVezKrmSuYebCnoDxdsChTrxotKFuvycBpaxoG4DMWsrSyfNrLBDq",
  "key4": "WmVvrPqtKyA7YRXdyDBMeGfi94i3qKz3G1rcBhaRucsYjsfrkk9fwBPVHST14M9n5Y21uo3hCL3Surg357HqX1v",
  "key5": "2Y8pTHnkpb6fG7yPvyqY7JiZugeDjMdwHZvdWv1PP83QEUn4dB9EyBMXpKahYfM3hA4J2QWRpxc66VaVe7TfqrfX",
  "key6": "2oc2MtDJE9PN1AKnXXZmi3BgxFoJ3q5NRoVrptMZDAtUgC1K91G8izketucL2hNvirSRkoVwsQ1xNtwCnqB8cR1G",
  "key7": "3TiJ22A9jeAMytTjM3YNmz74KTCc9w1nSYvPuWkjeBRt6FGfZMhT8DQX1wBP8j1vmiwepsm673mVtKyL3ALXTWx8",
  "key8": "TmovzxjZ7FTYVVZikt13jaVokVdNxLJCeXXs2tRC9dZpqJGd2XvnuAiNu1MokjiQUTjzeirXYWqE8gJg9AAKJks",
  "key9": "2Jy91C24sKkFnVDfrnFDMmwTWM1KYSCfSHJ7bZUz69Ev4A1V3UxJw7wgjf2K7ZZUjxwQm19nryEfmF6YLsBRKe4g",
  "key10": "3eCvu3D1sosLzyNkYze24uBVLpEw4u7Z3VqNLDJ61Wzju23x5kVYkMxgcbJ2G4Emubs5ffbUifNb4QaEonaeo3MY",
  "key11": "4ev8W8oQwvUSmkQhuyGmrFUosj8vezEGMWyFd7ykKC4iTHpV5gAhXzbFa5fmrV1vobWfSByMSeJHue8RPsBKNBQP",
  "key12": "4jeHZgL9ZxvBtr6Vm33BaTVf1KEZ4TXcuy4ea57t46wm3BkxZaQNub1oVE5gVQYbDSRspiF6JdpYxRXReKzhcWbW",
  "key13": "ZS5XohzJbL8T4XQthioVX2sFvb2YDpPyResdC9V14eeVFQRJZ4XThubviJBJpW2qCidzCS7N2rgESQqn5J5Bxin",
  "key14": "3hsbJbrzTR6h48uFVBuRmpRa3gW82iCMAJg131yUMdX4jsnoC5DTmMeKqADYgfF71H5ohTAFrDsQTGoP8QSsCvDk",
  "key15": "3NibcdyxAZGmw6DNxPVWoqxGSorhLdCwpdMkvvCEqa8mqw7jLbvwY2csaFGaeLuo8K5jRpysqZh3NMGpPD6gEKVB",
  "key16": "667wq4pVbDpNCF28Sgch4VhDViyBP1BWWDMo2uu6Q2hbPxabbgddmEnYRZA9E1bKTExD3o8DXuE2vwbtfM329hLk",
  "key17": "2HPbByUnHz9h8PQBxZhinmq7TCaHPSsTfGAVF9qbRAiVBxWnpKeNp8Pf3gsDGPQvYJbWauGMPPEEUAYcG16GCTCt",
  "key18": "248tPF1RvX5ahgLU26JB7uf2ZkGHicuV1XmBpAs7WUV7thDoLgpwtQio2peKG1hQvvjyPWZkwRc7JLD7SeZzbqSS",
  "key19": "537adC9maSzjrPRq78hbTy2qxJDjiYRUMCeRQsdibvyMTW9iufrbbKBPMZ49VZyn53jAAdCJXEkXwEG4L5cpkpKE",
  "key20": "67cHhqcaWqLv6UoA4SihwcfCdrejcnc7w3oRFtPsfmWe4U84HWYfaMhe4kGejqhm5NU7go5c7asWfUUN1jQZbrnh",
  "key21": "4gPWeFyVqFMbw1Z9RDL3QyikgmdgPoLdtjXVNBmjbFYcVcaXU4xmg42iDWue4wjZmXWm6cGC77j6uMBAVJ7P5zqy",
  "key22": "28Y4Q1fuY3Mcy2AVXWnn2r9s29p8s6JUyvWXpixACo9LSpYWFRQ3nRVkHo1Da9TcEYNDefbAyjJnEepkezBnjvCR",
  "key23": "25X1BJXzzcjfsoCiMFsbuCi669yW7jSW9e4rzUM9M3nDnGR94BgMoY6hx6GEHFmhJe46qRDZbEUckahDLKCguUg4",
  "key24": "4ZZjxoLPicNgFSVUEDEcfuDLDzUia97zg43o3eM3fxj1wnnjL9zRmaBNiXtp4iWAz5ooxQyN5Ep3yCke5m4hXAYp",
  "key25": "2XcS4QquZqwLow7jLVZcywb5oXRijTXmfrMkCTs3L2Hb3m5gGfuPPbLoTEQqmiriNUBoK8xupAjRPcwLkKxDfF14",
  "key26": "58bfw4M62QeJ54LJSveH9DGk2Q5U3ZgnBRxYw8bisL5udqTiTSPz2xJWRKKKdCn2RQMsjM9ngAqzWC7iFXkvS6KN",
  "key27": "2mvZw5zx3GFrSzPv1dyqKrBo9jw1SpkB6aQJJUoy8NDukrCqsJuqQpmEyTqSfVAm7e3dovg4DNin31w5J6WTwYpw",
  "key28": "4upYGXj4bUchAGPo6TbyhQ4rK8niGRWYiNCUya36ZVbMyfuokpKGBVWHFMKwSEKtvjSJTZjw1gfP41vc2g9Xr42P",
  "key29": "53DX5fqH73BpcQpKTmKsMZuDACSpvBCqycH5uaAQ5rXMDCkSNLxT9pCVxxernpFnSMLT5h9vGCyXXwtgsugzem3H",
  "key30": "4XayFNJZJX3LBs1EsbNMdvpiWQ7MpP9k74DGXLsPVcXpewPBZy6qCk3qXjn3A2X6RKTA5TM5UAc2jbXnAK9G6dhf",
  "key31": "C3wqnZnQRJmXCKhyoHfHBUfNdaQo7LRUVUaZkjTscGLuMAPk7cdNZcpuLKUub97QqUERqMWDLW1eynyjeaz4iBz",
  "key32": "4CRJvNdQQU8MemnJV4w9Ea1iqz2N2Yi4wgDhA2Nb82ZMvSAVBuQjAGQZArFBaXf6VC7uz7EAjtLRJyj1haVzvR7W",
  "key33": "5VSbn1xPgC52YW8PaMJSuBChSEMG775qPH3z17xPCM7TN9azkXAsGQq1CyH2ZKY5U3dCdgLHGFpev6pzo2rAA4iK",
  "key34": "5QdSfPtzJr2aCsQrfk4acdC7F1ims7ot8qZ8tG2JXHwxZQVvStJLNnGhQ5CPGqzYURtNXdBpsBKSNRimNx8u6dNJ",
  "key35": "nDhfLi8oHbFU3RNYNUkfXcBG3hLpZ7acF9k7KDWfur2v2seSNETdzmxHvM5zK9iPmhFm2vdQ3c4VziyH1x5kms9",
  "key36": "5Bq4ie3WagURCUZRdSHNi4LFmikpmyGAncnEKRVGy23GzChG55imfRZRNEdedRrkHt1geJi9MqfJgSKTAsi1zCi9",
  "key37": "SZV9qVa35HAJtsgRTBz4zWcvRURbaGrA1i8SNPSwYxEWxT3HX7GgDCG4uXgRWmEbkjK5qizegnm8FGH8RkoSnE8",
  "key38": "4HCqjyQSPYqhJE8W3fLZELo62udkykDfHZZc5DawNSicKFDrYkueApcV61eLgqqjzkZY9asvVMYUJNhDhYAPseom",
  "key39": "5dFz7QARdwseinUGe1eQXaDXcxUCtYZbN87oANCZDyJ87Z9aKsb565ATEt1MGQrUz74u6hZjFmYDCgQaikDToi44",
  "key40": "2W1A36AFznG3fcMjtoLmedcafQUHoSyk1WR2JgKMhMGUiia9ehDJ5kWF2seqzQ6csBpj9anLkwPYKNZTRv6j7be3",
  "key41": "42cLs6JbhM9CHW1wMZHJECXj6s1m9Q6aUfJbyz3vEDMt9E9BPwyVmR4yvHL9kQyHBU1brK8aEiHEHrNUYwCWHEDW",
  "key42": "5azF9paUhHpR4QNCxuTnAt8JW2mmNy9tEw6zCwwqUif5GZQmmoyTLDbZ2YBPpWPZCUX3xhHf1hLoAjnoA1oyYWUB",
  "key43": "2qFB4DjkBjZEBKBsFyjnqFVKCf7QT58CtZ7BTfctprqKTJvuTDANjMc3vVMfe948ZBZy6zxgWugQaRGvjG1BVP6F",
  "key44": "2F51Tf8g9P4e7LXd3N4LDx2oEd7KcQg4Ss4bnYLgHTMjKQXgghkr5CSMmUZA9iXjLo1dr4c3pmFTmnYy1wBMYhF",
  "key45": "4cnNABy3yu8qM1BESMYZ8AiTGrAMEdHRRJBuHAZdXsiv3VyXNZExkCP2bMRdWBy1k9Jvaa3sEPHNjojDomSj8e1c",
  "key46": "2PZEcopywaUAUCZXJU6c9dJCX1Stvu5WwH7M3fyc2oy9kAXff33vS5BsXCsDSomHUDi9UoXxsLghSPyNGiEcvKwv"
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
