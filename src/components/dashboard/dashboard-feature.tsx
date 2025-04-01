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
    "4RjbJYadGFBcM7mcUytaHpDkd8uanNfrWiXEfovuVRTu3hwF1gSjZmnbDLfTDDTWCQ9VamutaX37SA5Zuk9KsemY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ibJe1fhY1igsvaci26PBUTPyLV8da5XmyJSNTEnYuENhWMPyDYdXMvuuHiUuoZxavUoCeqnmWzjjZueEG1oCB8t",
  "key1": "L8N3zap5T4khrrpww678FZdp5FoiCDkFaN2jM9joBTQoiiJCZCrzVcF1gtYEQANj33W9wEjKiNSv6vyQFRzJAHm",
  "key2": "4Fsdh4RhEE9miu8fTPdofcZFmRQrPgwTb6DyK721Pb9m4pM7kGiinYxTaY39JWvqLixkqZjbjrwrNQjkSwbfZBbP",
  "key3": "25oBUNapRUrUjYUGp7ovtEBmhWydADpuoXdYAvmEmJzqenvJgSFnJdzZut7VNH6AcVSPhneQqQrLny5ZswDe47h6",
  "key4": "2XLZB7ywQZMpdYbMWAFMpJQRGweSMPriT9XKAZ2UzqtsmbxLiSVnuw71ntwdLmrcCmB3AfWdPjCCxBd3K9D2o8hR",
  "key5": "dxZsmP3DEetbWc8VvJu9jAdkJJkjLYxZSFhNiAJhjHLJVVrDjzd3kfK57s2615AcBWzxboHV121xFzj4yye7hF2",
  "key6": "5TvXD9oTgy1vU5ygvCi8HzbHPf9Wk4LcPhTkh1MAJy4LfyrRcSGZ2DPCJrDUjTuVqhd6fWBwNyW1BFR3P5tx2kFJ",
  "key7": "4kUP7J7mXqunu97gHBp2R9qyqZMC5jNHQ5V1irweDmyCLE5KCHTmor8f54U8tra5XqANeKwW7sBKkNLSzdkwPANs",
  "key8": "4qNihNzzVYjbeXWLSoUJRUusrEoivvPLyTy2bnzmJqCSeSrHJ6LA1LuUJtqTMTxjWcNRG9mAPuQGrpPPizdU4fTa",
  "key9": "4EBdJgGYJyDCyaooxGNYZhL1RK8x1JXMef2UDx7bjJwX1gBgG5vLuRfiJPEwA1ZFWCo4o5UGPVMxRCidUzYLocsw",
  "key10": "giGgchqsMP6AxHPGTLUZFoahKGArxtQTVrFfo4jFP55HGVceXi4LyddmSTw5foa1kDAT3qDF7enRLpAwXki1DyU",
  "key11": "yMQ5MHbV8tvnozKxZCSmjEKb6JgQkQZJDNaY8iT5yoRBDsvS3kuU7SRVr2bDdCH1kSt2zcUK8Cimm69Qfc2ugyE",
  "key12": "CiyT4Q7KM3sqBr4bnTMbJfEFRJYvffRftsDdzza488tnmoUnhxEnXnKA8YCPG3KsJ8RMyMTPyz8Tk3Lttdu4rAk",
  "key13": "4JXpy9JcwKZzMMFir5fcm4QdMGYirCeE1bu16TMauBzAydqcnr4wzip4k4QxYvNtHUAjTkcFz96e7qFhD4zQSfY5",
  "key14": "KuBMrsh4C1vZ6Td1ho2NBp3ryvQtoYFMfBag72zQqU4uFXQjAH1EjYjGqFbLWv9btxxrBtPUZTx8X7idkfy2Ur1",
  "key15": "2MgeCpp5DXGEfTRjuNTrMe5ZhVw2SAzLn9QkGTegfRdVLbcyRLxJZ1Tp7rMJdo6DsEcuUiV25jRmuewSREtYR9D5",
  "key16": "2rU9L8ntHTCFZPKwrpjQFo5xnNNCjTyKNppaRRNiD6BZZ7dbsPB6aEtcyG89xyB4AQkrUjq5ay6n16MAwemXinzg",
  "key17": "2PYuxo5YcgskJCv2ycmGq68jWKooM7tcNkFDkzgsyYsfxme7bag1zwyjyeMfMaPuNB6eswzPHXj7EWN9Gky3QMkT",
  "key18": "4uCnY7kLg5Y6FYeEH5EMMorcypTCysr2Z2mF6ewQVNUmE5RaN4pCEHb7gvRcXCJrKWw4vzZ6Ky8KXA7L8s5DPHhf",
  "key19": "4xi59smFcR2cWeGtFyfGptZGMUnVtkFH2gx14niXRiPabuNTEHp8fEsbFYcrs9ZAtHqzRAGr9NyW8nyAB5pnj5GX",
  "key20": "2ZXj5qjxHb6SAoCxqouPEkEsjsbSa4RbWj4TanSkBBz9FaUni73soA13FYissRGXvCT4M1LPwBFi45ggn2WFQaaE",
  "key21": "4ckLijZYaJJttwd7gQgL5FmUNdvvRRceFg8QkvLuHuTNSZ7pBJeyposv4LvHgKbz1p6mkzBRa5Y9qdxEXbWuxGTN",
  "key22": "4S53bySvQ77aCQGWFWkrixh2hhqd7CUPe2g14ZBcSfsXAJHwyaesFvszvYERXyTt9BZbGnBTndwfruSiNLM29ajX",
  "key23": "2Fm9zS9NdQLZ8V9kgiPukWDwcXAWX2Q45TNH9x8s5qvakEGTZQ2NxLEdEeCirdWPKnsVmYBEPyfPq5h78kXun7bE",
  "key24": "4QicRe6s3KGUJNtALbeNDuU6d8nPLfciefDxkpowY77FptMTRa2P8zs4ScCT3aLkvda69Y2YZsmdLpgz9W92Gz6L",
  "key25": "2ts41xGzjTKnGtFUKedid4cgCnb1BMhAnWjdSE3xhMnYtQ9LuRz2DUJZ4yU4Ep1dR5MKPeKc3aVzjtACmxWx8FkG",
  "key26": "2DUpbw4V5xeK3MMyDsjTTGUvHJCVAkjeDcuUfMdeY6M1Mq1ZvsmjMDSdVBYoFrMURY2K29YaQZgZb1TWWq2YhN2q",
  "key27": "3Xg99tsWchbiL7FiPjsvLdZNq6K1zxXBeWyxYT6qLrMqqBH2dQx2TLAMowCY65x4VeKihQtDBRKTxc6DDRnAAEHP",
  "key28": "5L121gWxv9RjuTeLVPVy4YtgD97zPPXEN3F59o8y18yo99YKce8JfgbUWsxy2kyYiXVVMTpFtSYYrQq9wGN3ePDA",
  "key29": "35Xkb6QfSxUM5QhdHCfQaHgSmttcuny7MKudYwNRhavzo5n8gH3NYtBiQ48NYZVV6zHhipXXvyf3Sp87NM4Tv5Nb",
  "key30": "2mstKs9MDXjNeixJ1uwoVrksubVvLZ8Htferrpe6qP8n7cYtSGT7uNPt3bMx87vXmspYP2wGUNWgw64sw4cheDbR",
  "key31": "564C8SB2xzheLTaFUFP51KjdJXiavNRUS96KpCH7gv812djuhg8cC9ff8qyP65niH4CLTdMALw5ZvJCYKrTwpVMW",
  "key32": "98VbyqiFpaPfw3nWRZy2MJX6ExaZXxm1qyB8og4m4aFvy4wa65Xj8nBSzzpYjkQXvQEGjRC68MDmrKKWnLT8FuH",
  "key33": "3GKui8auxFqThjDuXLDu9KvU1ip7b8tdbJEMU2oDdfVubPwiFMx39G5RtVcdt8EysGCYwG626ZdxYGKg4LKVMzaM",
  "key34": "3kVhsX6JQ3P96tgWG6pAdy986x1TDdTw2eFTwxQ1kvRfmVgHVt46sWAGnk2EeSNaZpQ4gw8ZNnVdNW1t2SLn6PWW",
  "key35": "2YBLHAVUsGhrZmp2xH1H6Rq7CJ3LDAehfgEjNum9UCKi7uSiAwvn2brUX9sWRop3NbyrJ1iJ8Ed6CLy9CG67oTen",
  "key36": "Sguo2KFks2w2EtcW3BLUaNothVFNA8uRqAoAr9Zdw9xxYQgMCNEwxFfy3dF4pvEosqPoLWyo95b1LzdMXLfcvRk",
  "key37": "5KAFHWV6jjbNVJq1tohyYVQfzmXfLnhKLmzccb3h6wDZUmAEk5iH7cZikrJje2PV5C59u8MBeynRh92F1g53LWos",
  "key38": "5FjakrzgN7D8NKVo29RuKt9ydD2opdNmpnyxumXJr4Aij85c4YMA6hzbFxJbwZZgdpn8ww3X7KiSAWgFtVyobbtE",
  "key39": "5NCBYqGDTY4mjECRem1PRqVrtpFZ9X8bQ28dwUjdsm1QGmvqUxuhtYtBdicEoF6ngCPdBDKcvhvWntQMw8CCxh6o",
  "key40": "2UcmFq82LqTSTNJnAYgJ7wkcEGkLvcBqvbDXxnLZiW1fcTNsdnuL4oQX1sMYEdeMrjDtp1q5QaAYgyBgw14DVatC",
  "key41": "QxnGVeCbDpY1hxxLbvKkZeCLNPqvCN31q5AzmL7XNtCx8mfQ5vTbuVpFADYMLfhCicgShy4PcS99KKm6JgtLe6u",
  "key42": "5rLDBcdbfdTMQN2SEbAEQom4ApfJfemHQVSFBvoFYNh2qfFdk8VNNnenJkXasnBpN1agSkqVnAvk165kgfPYWxre",
  "key43": "2cDZocv54pUABcQVyoMtSCdTwW6E5LmVkxiVKVFnU2qJNghtGvdRiwTde2PVnb2yDH4c967Ny79DT3dqzYgCzARR",
  "key44": "58tvMvQbwyQ9TiQvU7M1BNwgFtqLMTfCzrPQ5GpZNcdv6Jwpg6LkE7APZ55eJKGqB1gr3Zy3qKin5vcwFh415gEz",
  "key45": "2T4je6ETY7QZwQ2Jr1jcWihrYBEx3A1xd7PRYvA7gHbXNKmaAbGRa36VxLPgUQYYyD2EfJpDB6fXY7yPg8y8pTEf",
  "key46": "yWK82FDyV5tDoknCckuhnHYpzME6oSwaXpG4J8qZfnsAJQVkgnT3ZZUs81nS7wdETymCWaSsEfzpimyszibsDqs",
  "key47": "3UTHbdD3LVkem1h5uWRrKJ68GiBp7f7CZ6TyETLfag1AhTqrbNLXT4qUy7sT9cUHbLmT3g299dYkLznDXkXdZ48i"
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
