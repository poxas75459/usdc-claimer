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
    "F3MznH44XsY6iC1V2oCd5b4nHEjMZUaJwkG1m1adXzAAhtuEsWHe83c9TsFqVUubFUX3kJ5AsWdi1V9H5xr4KyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KbrKaavEF2PbsAr5L2hdiLwhSoTSjsxwr8e8ZDy9gXisEhMsRmXPhYC9cDD6Rveobj65rusATv4GPwD5MtYjr48",
  "key1": "xEtg3CncWNGXpsFA2QLvRSAbo2ykKTpCXhWKiDugDurvVBiK1CwCM2VJNBsgKbwCCpvQvsRQ2fCvw6fwkGLzEjq",
  "key2": "zqSCuxKdvwaHYGvoozNwnyNQnc2aZ48cfaqLiudE4y9CbJuPCn5uvRuEJ3oeGLwEnPmsJZqVUtvKCmQ9ji2iLeS",
  "key3": "5Bi5oFMbCve8dPyL3FJayjN8x4YNo1QRdcoTq5ujshEHPkjcrpfi46KAAkfHcghePVviGuBF43hhacjkBFysGB9k",
  "key4": "2tQNtQ6jqZv7FreAsxWen54wJzQTT9sdsa245WXsdGrShEPtLTqXxRHiVmh8N7yLQxGYQLXCkJGKAjKeqfi9xNX4",
  "key5": "3FpQEjUCzhJr42AFLGu3YaeCYV8t94Vw4s7re8kSxv7nDSNtYX5tYSPJ21qf2HwBNKVydMdocC7V26LZ6MTwdMUe",
  "key6": "3yCoxmabKqepbzr1igc9sJz7pSxJ7jm6xaRNcmg3Bhg9By88QBTCGRo7VPLj8XYJ9wTXuWTYqCX1BAqDpUwnuhQz",
  "key7": "2TTFFYedVnFJ8toogC6ok1QgtiMhdijCvEPFnmuyfC1npgyzGhAZH7v98WLxP3ttY5wLP8v2pMQ6eZSnK2gfmioU",
  "key8": "4VMycHj7gptLAAzhRxYaETPRWZXHY6PQpMGX55yBvH9Eo5JXNLyhe52rawivZ1BMrC9C9mbgu7F8ciu8PbBTyc84",
  "key9": "2k9eAjyumHyaPTeueg4adhXwkGamm3hkrKqEZ8oY7BvREvrC2dpwdEpxbfk4htWtgZz2LS2gvUcP9JuisG7skjuH",
  "key10": "5UeaMuaDkEjfHmgA65HrjPj6pGJaWk97ggnK3mERuTxJiHg5uMsdLvpyokxwD1CVESuAR7MZuPfKRtonLuebw1Sy",
  "key11": "4bKzTRQdNc3vkoqVCcBxedc5Bm5reHMaC9czj18odUZGC2GhfghWFooUAAw6dh1LsMoKtofx6FGdLPkkf3CL3w9e",
  "key12": "2zoLpJ4JiVUtdgvo99oYTxQ8L9UXNcav8oPsoCaVoGe64nrbQfFC3rZFWQcMaJtuVBqY9r7T3DHj2uyVB7rZv5zp",
  "key13": "4bZ6Kx4c8EH6TZY4z28HyFyLwzcbVS7MQBKabZ8uf4RPRAETkfu98QEVCuMCx55Un3DQT35jA6zN6WNRNg7JNtZb",
  "key14": "47rPgftPpeCirnNESsqTriRPmqm4Loy4PnwfjmLsePdyGmAvskG9DwLNLDxRpn8cshJeLAuma9rtyMxFKiEE5mwj",
  "key15": "d4TpDawaDDnCZSycHsovmvPqmPuKts7Ymw9d7GYXdsVyK7q66T8F7a6LyJdwC1R2yPjaZb4CTswGAV2fKCL6PVD",
  "key16": "49LeiYXXhewhMmkBSE9tUaApJCzTPmm4AjoSsHWu5Bm4LHACT1XpPwdQozq338uj4HzZKXCXTN3DheZVvbPm2JWo",
  "key17": "47uRr2HTQHBpmh2L1gqZLcsTTARtpdV8XcEVFE7cQFVngd2YZMoMLPdQN1tFKBdFyrnd3YDpxYoU3ZD3TDNirYXN",
  "key18": "2AshrFMZe9CjEAT2RpTQdtVt4tZ7Ki5TkRSdW7yq269At8MSGbRbQecUZgcuiE4kfYWiLFvQFYzMdMq23z6SrBJf",
  "key19": "45sW1UKAv4MxVc2Zx1RXBWDxN5jBkBVJm894xcWs6Q4i6XxhC3ssheXt1UfrHyjsYJvjmBAWWw7i9sMNB4irSdbL",
  "key20": "5EC2pGuTkZzfgMSDCa7rfmACWHoNSHv2Yan6nDwTfkaMVxfkpr5Rkyh9SXNJnAQVbEUhwTV81sPuvPCTb5WN5eme",
  "key21": "2FaWVqoDhX9LbjdSeJGzY18hS4uyrLSqboD6rKwjvosQM81QicXdFXkJJvyGtZFgeYf2RtjCGNFam3FWyLkAfDiW",
  "key22": "4YHcPaMd3jMe285NodS8JcN355ckiH4JhbrBgvkE5vjfeJGEaiomYM3qmH95W65WWj2sqrvDXjkmyF88L4PfpHW6",
  "key23": "4sKfEsoDS2VwTFAWdZHf8RVeMKwFPymH3vbFmB6pQTZqmwVapD4ogLZbq8toz148pxda71oV4hk3JhiUfTywGKdC",
  "key24": "kxgGqzupzf3bFHkku32Mvc7U1VuDopyFKGFKME5CS356F8acmQJyc4nYaYtCscUeRS1vEG5kCHGvHXTWtSyCbE5",
  "key25": "N9wNE37Kc2QsGgAwTZEcUCeGgVQqXWngywiSiYfVEmEc13Nm3R1mBr15DQTDtrKHTRBX2MMy4PJHPcjWu5Dj59z",
  "key26": "4SRLvq595N9bb2Dr3Qe9nuic67Cx7PzEmmRCD8sKbcihDwGhEq1VshZywHbDDaPouwm5gki2RYbH8RT3aMYt4D3d",
  "key27": "4RB3zQYD4dk1DLsrXFgvD8jriSj1a49KeFqofn5Eesqj7pE889NDsoBCnCjugk3RVYVYJsaYiG1vCd6xtrVRVVrL",
  "key28": "4mV7MjdTEY1iritCPQzBWiS1z3xefp5egvjm1fN2rmyVLYMhXgwbtRUzrU2gT3jnaSnykgyen912TWyi8VYusb5g",
  "key29": "CT8SGNcMMCXUJTpdyRg86PSFuz5zZ77Yc5cuMJcxHp38tnvd6RLmKgGXiQqadoEgk2YQGacN95avUYxPp2AqkFg",
  "key30": "5yBdV8GvTL1qbP7brKpBQYaTViLLZXwxsygEAmitRA1rzM12zssiE7v8qbhPC9ZXxCo6bJH1pUpGmEwQgXkb8SHq",
  "key31": "fJD7PgGUw2oNpaRnZzD569KFoZPWT7Nx1NEsm3EXjCJnfYzR7DUcBrgq6t7J8P49xXzaacdujEnGtUf4X3WV2av",
  "key32": "64u7Hi79xitwoxVKfmtd3j1kRZ2ytPx2Hx6qJ2z1DEnAVSpt9L6SncfH2YigCKFCHZNZSLRf1FP7AJM7SnDSjGgD",
  "key33": "4GWiPESUoX5781nzSpCy886iDztBoXxJ8hFDdbQoK4fYonWRFuxBqe9jhAMTUpXJRt1mtqBF3QtSfxx9L8brNs8K",
  "key34": "2c4LfCcjyzpqACfFyjK1fuapve38yNvB53gGMN3QJR289jSHRPRJXTu59iCDvSPxy3nErDuwm92koeU3tfecjmVe",
  "key35": "48r7jv8inxZmSb3sTdCeRQerWfbk6xr6mUhkNy8akbYXKpr4WoSryChGCsQDZt2DPpCJ2uWzj9BR5xeU1R2RUSym",
  "key36": "2gVgGU4TvLe82TXZqCTZSvLxw4UGUqhfNyDnTbEpwnptYfDS9D6K8igt1VWA1w1zo8G86D2ZT9KSanDJ1iLWNn8q",
  "key37": "2EvPFgkWqvAXPHNJGC9d3Wt3Nvtzu63xckjBuU6NqDQobLPSC6uYhgDE8nG7vNxzfpnYdWDB2J8CxnKK6ctAD3zY",
  "key38": "3WSzHY8UCvYUNo7r8jrRNkVfai3A5mrMdJdjZz95UUueVM9RAjpHKqVYgpGiNKtbjvgeaNdhnRxMRbaSqir3tVKG",
  "key39": "4WQNtMPdX2ufuo88sydmSUCzksCpZumDApfywvSomtmFbqdcee5oAQDz7TB82hQ42ockDThkNojKutkTLFK2TVxj"
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
