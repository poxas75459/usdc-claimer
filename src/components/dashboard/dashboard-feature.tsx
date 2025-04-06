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
    "3SoaoH6HjDjGGCikBY1GC9LzNCw9TmBKHPyyxnjuSE66n4Ro9WZg8jFaLPycK2Xiu3c3NvxKx2TBQAJrpgAq94o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ihpshUYPX6YVH7omksom7oyZvCEVUyCawia1wGh1YYmxh29XALMc117TwmabZTYjgQfqHpwLWNVQZw4eB6QaXgs",
  "key1": "3BtspKwdwJnKrwt31ULH4Z7h1gxpeu7LXUaKLdsqRzMWB38ELJqEx6FFKeWGbjafjh5VKgXs5YL1eiyC3KFCVpYt",
  "key2": "45Exzv4cxdu519YqU9BUdEajCzqGJN28j2oSMJ2k6g1cfKKoUMi6AWCSYQUc1WyfVmPnGUpMvgc6iPYAzA5Nnc6r",
  "key3": "R9kVeoByRh5Wjvaqurn1t96jV2922Qr7pdB5pihjDByZLmpRCX2dXJN9YoHcD725UgxNPLK2CRWahRZkSXt5MWJ",
  "key4": "2wWJ5wXuLVugiyiF2GJisCt8SGeeyJCaGevsRAfB94Um9aqmWnQjrG3wGCpkw1tHHc94umURtyAXKWXFYjLjs3FS",
  "key5": "5HsMZiXsV14ZvkgKpwiAGumwTYBy48oUj9ZbEm8GBHT7TWmWbdbiu6KADN1KtoYMRy9UvrWcHDovz1tYJurSoqJA",
  "key6": "55KH22ckgc2deK4n6aXp5JXKcw9PkdyBvzQyXeyngdRqBnvty1DoL4rBUxBaufxeQKNQPn6ubsLYw7XbFUVfWVzN",
  "key7": "KRRUjY18gtvfVghJrmLzDyagekuym1H75JrqgXqc6aVxreLcY1x56NcnGMAHKoJJi6v88RYUgbbHZkaSNB2FSoT",
  "key8": "3mRVur4aUTijyMbNfYjRAh2oUFQxBG2pGyjrw3dSpTXWp98BsvnC8sdnKoKvFywTyCHB2EiT6bUDGdfQKcHHPhce",
  "key9": "4wgaPJXaHheT97yk6PJEuVfQtEfyhVXWaCowYPwr3e9M4yyFcDdGTcL8CSBqon2uvSrjYeqKJQXstEwz2qrW4jSK",
  "key10": "3mHhAiCNmHnLrBVYTuwcrWxRo8YFSNuGaYG1Zoyhr8RECZhFPNNukaEV8JXFRApg1XYTPmK5kqcDtuQc1eqa71tQ",
  "key11": "65MXus8ZdUfUTbSv3kyyXhRNQos9ETKRwmbXFWPw2M93NCCBPTgx1RuJAaJChVZ3G9npbW1MX4MGBHXdM3efp8xz",
  "key12": "4evyRNTQkbPwqJ1M2y6g8Xj2RG8PaENasSc5GsPEsSgVxcgCqtCZ2hRaZutpyEr7RpuXVpFHykisSgrwZyz1oqM2",
  "key13": "45v4vnLBh6SD5Uyq9cWvjnN6v8fGUWkQF6v6NaDE3EYPbB5fozxuuRDP8BJ31zRJVpCiNxH8SczBu3tFygRR4RED",
  "key14": "5uFfn2y9w54KSC7zR9vHchLWz1gfMLEwRRdXUBrU9qZss7H8Vj1dGBMJeRKpGBQ3zs57mnADtTut7fskvNkDipBg",
  "key15": "5JPUmWNkV5fMMrP2FzgMVzJkaCvGFX4bs7LC8HQfsxBTV5cfND2tLtpSCShYeLY2yUapV35kVqnXD9Gtu6sXdTxw",
  "key16": "4GwtpSagqY5wKgsHV8HayZD67fLdsLxzqG9HuGy4pkZF8b2RMMfZPzZziF4NwP4XZox4MuTthgP9wmEDTRSdrCy3",
  "key17": "2ZELM16in3xz5g7tT9dbgrMfgcRogMVKZq3V6XjpG9VTf3DdWc2CNPz1t5avxcTmGccCSLJJRWN2PTknqXd1tLEq",
  "key18": "4qjyZW1FTvAFXtRnu95yiugHNhS3AwDXdVvKJULDs6s5BrpUhv73MhnZnn36VNhe5763MbuZCxepLEL9mzBsQNoJ",
  "key19": "59qcKqnbNu2nLXTaDPiSYQBX4Fo5vQ4k3g5hUY65YKX37rc2PQDhXTfTyptmzmSbLDMd7N1wCKy5F7wHh3b3Ujj6",
  "key20": "4vpCGw7xmujmwE3xLSNrauPFSCZPShso2pZ6zi6og3mJxL66YywT4RpKjfRoTPzkcZWErjjPxybaJk3Lceykqq5L",
  "key21": "3C5ajvN9RVFig382ZKEWjwfJyqDjnyK5iBvhcQ8JnYBrNogqNTp1F4tnuXb4pEdQXA39Hnr4jJdnngYL6CncXkw4",
  "key22": "39SrbMUHnxR3TFkWL8oyM2X1cDX3hyZKWSxB7UkHMfS2E31Yt7n8rA4EwW2tKPTbHsGA8up1229JWiyKPKfcGTeD",
  "key23": "4XHmMGfWgtDW9xeDwhpd1cdoEpZschoT7vnDHxqVV6ydNYh5dCRd29ZCknuiv2NgUA5PJ54NHw65wJwPZC59cbNB",
  "key24": "2moh1rT5K9S28bqgo5sACeAU7b5bRJ4YbFkPoE8iSHDCkosCNk2S3yYTfBLoX1BPeYfBKnxfgqhDpxUEFuDzwvmD",
  "key25": "tNUPrSfDDUe1x8yzRAj4fMnf9exeiLonutkWRdS9C8mQtBs5NKz5w1BbjZu5EXDkiVLtiAK63osZDpquBvvjhHV",
  "key26": "5d56WMSQgnuLHB7ovCa3WTBGK7FXNahUybatSCiutZxentgyTgJCWk4L8vdbJcQe3gr455pxB3T3dRQ4pmyzyep8",
  "key27": "4VmWf6oiCNPVSTrKzr7TrLibauf7uU4DAMXiYtMG7h5WZ9Z2WXkQbPf2H6QPM6BD6Hi4emVs23yWGoDdSrhp21X4",
  "key28": "4DeyfSfXAaB7JtoUeT1XDisjamH8Sn1d8ZgTqxBLsrium4dwhaVMCuwBYmtxeEjEtY9iWk6QaXhuVma19bdGqLVK",
  "key29": "2Y6eLXy5NxbNnZ4eCWMtLAJj43oauWktBmFe6Z1aWFCrc8h1zoizyEhAFdJGYsRtwezuiYU5sWy6fp2bRot36thN",
  "key30": "3mzaxYz3JcWZTKYsvmZhQHrY8KkKuS2nAas4yPrNKdtjEqzwWW218fvuwPgrDytcbrrfU5VvPDfRhzACUC1zBeoz"
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
