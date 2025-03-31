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
    "3vDC2n64FwtRiAEKzQTH2RgVqJEeHNDVFFTbDktLwftbuKtr4My7R9sbax82Tm6PL5mjRyNNFEgNxAHvZMZWCYXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EQyLXAagih68eqmQsJqQjdFrK82tzeW1L4jmm5eScpo1FUJhqJoochANU33tktyiUSNhMhN6MNC1qagaN9B4Pki",
  "key1": "5qHS3xzXsi24bpnRkj6nEZkDhwznFA23Ep8HRBaqDxrSD4WBqFGjMteyC92E1csSzvzioq993gF7hqUVHfsmMwVA",
  "key2": "5Ls9Lo1R5ASukj4aFhyY2aNpxQXQhAMfb8Hbt1o5b5XhGKbHPhTFXF8ducDeJP9jNH47NejWKbDZPLHAjZDHCiyt",
  "key3": "4oWWd9AwsXQgfB877m2xSb7jVdjyzZXCJ1ctEk3bwzm4yakEMFonBdCA99R4PaFJZKT8Bhvv5jFBvTQNa6sNG9ny",
  "key4": "3ABpW3F3wopmdTdsihdtG5TaqWp3NS7iWqym5S4fAzYKQ25KyKypXkdi8DA8e1reyG6Ug2cPU4wiZQ4TiHazRdMA",
  "key5": "4gjTmsvG9xqysP2eYsAXyMmpufSSkfWUHiWpHYbc5E5Gx3v38GwBPx8WX1bykPf848CLxXcJicxCrADQZUULdX8H",
  "key6": "moPzsMtHTNXe1wEetJJCmLRi139c4DoranHEXEuRrKEVeMyHPTXRggWkcFLJPtk4qEt1JGveGbehddy97guogzw",
  "key7": "2nUSQGVeCdjVHFiUkKTgjKf2rgoTnehbw2rxoyjnNAZ1tguPJ7vL6vrFCTUBkqANLs7EC9GtLgXiL7Fp4Nj63CzE",
  "key8": "SJ2gC61AJ2Rhgbife4NEEYr5ibC57pTu9ZabZXyMWv7aAvjtJzS7zmRUiZZdPmq9eu72K2YCHJUydG32nDr8Hj2",
  "key9": "55w9SYiscw3oq6mXfBgoxLQm5FhFZgtY6rvAjsvEsyUhBKyA3Skj4qFjFNkDdw1MZQtunbqEMb9XHTf2DUeVbWH4",
  "key10": "5tqdDUzvG2bSHmSbgyttiZLMjmXvktdPaZbYDdEfUN62WVTcJsGfhGLYpLEv9XWgt3fsYkHdyAxmMdR4qJYEBUnF",
  "key11": "CVdLoyzmA9cJhMo2zgon2y2pYzN2Rm9fqeGs7yN4poWXGPvf5ybGLeR9jAwevCVJDMwmfexr6WWssEBmucz8FhW",
  "key12": "4JKQGRJfcFhJ89PuSTHnDuNSBtDNpE5h983MuSfr9hqEvfTLENahNgSJ5UG6CmSriMmsEaHCYpTMtJFFu1DjD2DW",
  "key13": "485fXRssiw5dGMMmempNTsVBy1ZASdRYEvzt57EhPqZveRzwyzvCaKiAsADFwDxjnKy2YgHCA2taPvXt9ZDztsHs",
  "key14": "5akeHixdSruHCNbmLDaoLyTMv1uEAUuWidsDfDJnCPHEjefi8geLPRiHCRgRUCZvxAzVsj9QBoXSoBYrMUfGfZ7y",
  "key15": "5KRCgeh3DKGxEkesNF2rTgsGXt8UgoeEw3HaX1CXhqvoVdEnWCjnoavW8dSqo1vR3Mvj2VE876F9RLZMrGw5yspo",
  "key16": "3XzHVH7J6mbhtRri8hUF92uNY94PW64yTVSBpzia2GV8Sjhb748Pt2VHcpT4CQym39TM7uKVVjba85CnsNXSDQts",
  "key17": "3BKzo2fMsJnbw4cMffsZ9cGRWXLmfGmJzw2FjmE1TqKGoQY6FDyyw99buAA1mm8Rkhs4hR2vUoX72DPguJZ1hww3",
  "key18": "eBwUzbTrBUrEuz8LVNJNbkeeMbU75qcREhKpK65r2DCGt58hicSyiu66yfFphgedcqV8rRt4YQEwoe5BejRdaVd",
  "key19": "a2RTEe7WrSx2e1Y7oHBngnmcQPwVBN9QTM1toTq7o4ATJGB63pXZznPM8AFjhb97r3yS6Tc2mYxdbarcPny5ywt",
  "key20": "2rvGRc7hSFLvmVHWjo9UbMCMgd8jHScfUXTDoDgq3SbFYY8NERUhtk1ofv3rhSFzY3w1rQtBi4CmP6149E1du9gG",
  "key21": "3EHKMrzJJkPUm5kUxVWVbCJg4tFojYLji8ASiFkRZFPLuHz3NNgGhsfSqD9zEGn6RVunSmwHqnNyuGCE8ybHbmbv",
  "key22": "5Jw8gV22t9EE49N9RHXiceeAY7ryZSnA2ZJxdFA87vvcxLiadZuY1xSqgsYoCLWAZCVTKzTcThE4g19JJH4jk1zB",
  "key23": "67qB17FbK31CnLzS22UudYMm7j6oHuJfop2nm4mo55GiersuMAf5rXsFb3r9NtYrtEQsRmFJWYprWypThjxXGfW5",
  "key24": "3cGx7BJWjuY626v4b3NHhwaPk5Hk6RBkHWV8fvVUyTL7mEmnt8RE7bLim4HZwM4pbhfUNdsFEKE4n1MwCmUccF56",
  "key25": "3npt2yPdg1mdZ8ZrAd9nVoyryMVhyyPT5qqjQi5xSDKcQxLdjhZPmLiuYTy64AWDVoc6tCb3owP6Y3JTZVJKxhNQ",
  "key26": "5bmEwqUopQL1ivxSGHMMp5ifNFGgCmpLqCwVYidHQF7nmV2h8QUmeAE5Rc8k336jaX9D2o8oPjN5mNmfmcz141eA",
  "key27": "3TiXawLnQZfGLuuwjFtY6NcfAzFdqzvHPgrQuk5iVEd8pNUuGwGWZGxPJRXLT8GYtBDXp14fgKMxMLZYjC6qQbzm",
  "key28": "5e6TAwQKvhE7AaTJwG8W27VoCNFXXxnFwWez9jpgP98uikigen81tyR2hUaiNx8G5jjdgJiWfLFfDaa5auVcjCnY",
  "key29": "52dUMMoRK5dg1evs3JHkSdDqFGUETAaH9WWs5HvqLeW5PzCST3ycnkCcjyFKrRF46pM3qGgYJwb5NFDWbBpNEUeX",
  "key30": "2HSsEntzidY9YymhWiruLcVxCGYeemMuXMGPKdmD4zZyUjqah3qr4Ky6jVox9K6QvVyAo44Vp5AXmde4X5xETBGs",
  "key31": "H2MyZr3kTm2oSWgDZutudjGBWLqt4VT2dNTzTfJ2Tj5oiv6HjSgMUqrxqrHACbooVhmpTps1FrnXZ792Jz37nk2",
  "key32": "3BRWJS61ji8yzsQMQMX2de3ThdfR5tTYWKQuPAQc9By8nSFoTNSLkgQbbfBWLnkmmAwjtSrp6XShpd4MtB7MSVYT",
  "key33": "4ptytPK67i3zXmZLKxEiJCP4rBg4Xp6hAgfA1DLDpLeobr2gsNwX6fwf3RMndFtNXJZ4e6SzNMuMD4V2dembuvMe",
  "key34": "4Ya9bfhQCXXpgb1SvsAbfMQC17ezefxbgczZFNHnPU6n87nKmYuU1HZ3aaMfYymqPyngFaL319ni4cbQWJB5k6jX",
  "key35": "4GDM3Zjc11xxuD5LhPXWEmd4VRfN2VERQaCZEz7Wsd9KrYBppGXK5wF2E2w9Lzq4fnEag4uEKxH7m547pNbwJ5VD",
  "key36": "WKV16fbhaJMsRpDbvqW8AEWjtnQkhfbacyJHfmcq67Nr5pkcp7HFapNBgFFiFkpgWtsJFbN9rYrk4dSMNEts2Xo",
  "key37": "4GzU1R4XD9XBvEX6fRnmpp8a8fAon4C1mJsP48K8hVmAWRf3NRYoWdKGTQqoRAdj3hHwvyPH6eLuxwRHoo1LVBy5",
  "key38": "5avLUX8zxsE1rMsVCQLZZqPe4p97NbxW9mPN3fEVcTef6GGoJBYrrutZQFipavmqoYCgLDosMkeS2hk6R7B1MMUz",
  "key39": "5M44WrFtbDobN87B2NCKhjyFg5KL3j44ez1PDns65AazAFv4P56atgFGm1vz34hEc3MQE3CzWYdEtjC9DpdfFion",
  "key40": "62vYjT8vF5uBUv8q6v2pyoWLPyxzB9Uw91PECdQ5ibqF2ChdpgLfazt6okqM5UZoBypFaAxyuJCdGJNCDvzhETvy",
  "key41": "t3WQzmkEqqTYhWxYrCHSrzK8xnTiRwcNK1as3jpbKixJ4mX5uQaWEHwWGccZL9vLqyGeis1aLppoxsHPbueacmQ",
  "key42": "5kDggWiWecewZ29b31M89zhnwjZrhp87DoK2raGwawh6Xn21Z65U1GGpYUBXac49VDVqrAMndhvJB4zXA22LPACn",
  "key43": "pnuKNJsKzot7vskCnRSDwBqixbvbWAsfMNQXo1ggP4e41LjZB1WQhEBhZzT5PR5FE6Jpu7h9fF6MsDKtJwqB4PM",
  "key44": "4Y7UgeJa1A4K2PbRqkHVmkrMh59LbD2FkdSeeohTeRcWCzj3XH1qK4ynF9zKExQrJ1rgMmV4LttJvEYeEmGFHzza",
  "key45": "3iKyDaNacepr21WCvyWkvimXqe1kRSHZWqJFwjWiWUgM3jXFzNPJgNTJzwJFPSqNWT6GqKohrdQNmikUV9DXLkbu",
  "key46": "2NokRuuKizheABLMgGzLBkd33DwZsbWsN7afXShitjxoUqAbEjMoTT65JFdvsa1hXz4cqkrdJXATyv5ZXd3scnwT",
  "key47": "5y1Yp6TcZDkuhCAa1N16M1yTh618VdqDVLutnCqwY3GWaABnaUv2JY2gU7UCpSYGRxPd8tHtB4S3eF88krvfwajF",
  "key48": "3zMaDyaFkyboRDDCa23cf71N2WsDmQHSzj9B9ccnpPNX2vuFMkJWG1BatZQ3r6sHg52KZSxQLZgkKBE77siPPpLb",
  "key49": "4hdWy7CwYPK2UHPXftXutkxW1CZziog8m4YBtvi7kNS1TtmSHeJKWbGXsbx4Fg5sXqerWjrkr1y2S3x5PdyrDBdz"
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
