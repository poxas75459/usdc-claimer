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
    "DxB3PeHifLpBHaLyysPeTYZrVsc9pgc5H6kyiAE128d29YNN5aptbCjHwa2pQzPSVtrgV2zcDhw8LDjpQNdf6c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NvRumUQAURbb6BGd6MyxQEycpuntRNpNPdjmKHYYWhP2uGVJkX1793LcnYLswnKeAjJcBPdRQP5V8nzjLswoZLQ",
  "key1": "3VwK8C2Jq1RYxvNgcBZ72QcaPDS4porxaRf4esf1AKA9cn48mTrL6DtFUfoS8NgBP35P42UnUiX8mzeG9weF5w2V",
  "key2": "658WzhnmfXJVB3XJeyUQC3ir7MNcJZgEUkikA5GiVZndxUqa6HkBMzTpaQFQPzi9tNdhMu1LxfCLvYUqNF9ZALes",
  "key3": "14CosFY9sFBWcYf4hDwXgGRUY4UXHhYmB5bDhRJFfxoetLaYBVkZqsRBZn4qEsk7tWHGd91qkp1YACSWTguxUCc",
  "key4": "3spauowyoCxvNRpLaa9bHAzFY1jpGcaQVekWWT2QpAP5a8E8W81rzBR3EpGyYykevNETdWKAzv8UdbcYj2mCmDaF",
  "key5": "4p3YvciSpMjmcFqBkVLZxt1Ut4hUnwX9EBBfcdfqNisi2ZtzXbtHzt1sitzSVgHxz6Z5RVZrMcBPShcwAeY5LXoK",
  "key6": "3EkQXxxPV1RHjkfiBkJQG2EusbzhMP6m2tZxyUaY4HTWQ8UP3oFH8BGbpQUnPuvKR2aV5EjhMwHNcFdLJEvbbHpt",
  "key7": "TG3SYngXVBUufKWkNSPWw9f816Kn1zXYZgKWVdmSe7yu7FnytmW1xsRvVkLmR7cV3Ak34n2pdhZLKb6gPf5yFeD",
  "key8": "4icZcwrAM7f69A4TY125AQC4vFrLu7tveKNMvriQaSHXvHeyP5ATSQAF1WrEnYPiJh8fdvc1dduN9irJdsuLzoky",
  "key9": "5rCBoU4WasRveWPPgcGiByw4nGSZRo1op8ihLEjK3nzLADcWUcwP1BFhgebNsxi4oCcfp3CMx6HU2JWNCpvM7ehc",
  "key10": "27qbZMdR6VRk4pyv1E1xpz79B4UVKL537woFYzuePJshrqsmw28tkjS6RJV1EtJY75expreqiphM2spuCQjcbhmJ",
  "key11": "3NYTwGv4sFmFxxqseAtXBh37J72pWXnozMpzeaVnP3QeTQh3gUEaqC9hZWTWgcPVh8Swma6LGSWkMrutK4veF57z",
  "key12": "3sBBw4JAegQwhgTniJpUvcxVomeXtM5kejdous6Xkc1JACEjENcYEAs9xBZ1aUDTqWnF6YcTueVB1f3ajpFDEreq",
  "key13": "4XyqtVbe4W63SMmm4MX9JSen4trAPjodKJFDYuoF1XuMZneV8z2E2RNMLv1FnjitCoczc6QBknR58v1CUfStyBf5",
  "key14": "4Dh8gYpaxBocqzFQAxRqkcTCWNS287YjP9EqrrQE1ncDNr8KzGFn2Pbg2o2cgZwMxqB8ea6w3rnF7v2V57bX15VU",
  "key15": "5sLd6tjUJdFmLZzyKjaEM9v9trjyv261Br9YW3UVaxEgoZYfqdqucrxUktPMB53Hs3h4BLKCkPEA38EupK3MERc6",
  "key16": "4xDvhNU5ptGVhCuUwy4fxcqqTVegsQjcb5kNJcf8HSuXRiJFG3QQruhr1kQKBfPqXzivNm6ZYUSCHAQA7kXuPu6",
  "key17": "3UUT9rXynv1RBUNHVmihi96RRtcyKhFRPt5Di13tzry8kSJYagjtgZYRwCcH4B3WKD326XLEJDsMeYuUigxQbqJ8",
  "key18": "5Qy8qgL8NrRUnbAvVD5S6CXzmT5wWX5nVovFWCU6kYaXHF5Vwtsy5TWtv1Soks7nNHjV6e38WDaGTqUoadYiAZWv",
  "key19": "1m2ZtdUvDz3MbfsBQUqTpzTQELKe8sgHgALFjM3jp5NPiR6f2qZbvAiibL41gWAExUyD4bNcEcb9KdD7x9RZ1MK",
  "key20": "2EXt3cDurPBZbV8s1KuEyGjcPhdhnB85D7GnBuXLWTuDxmNcgCtLjQM2QuyGBph9zWBM32AWyKEFnjia89GYJZbc",
  "key21": "2FhxDe1ZUzd82D9dKgJ5jAaR4q5VcgfYCKbwJLL9WTxxECH1ZVazSY5W9VZUDGdiNEUN9NyBXTuSKAPLcgQGbStM",
  "key22": "29P8MCNzxqedqJ5Hqa1R1WZ7vBn1TjzqVf1i2gByCxGt66FZdFwpSbzAWMeH6EbWxcpUMPQ4tPcHUeWeLYr6BrYP",
  "key23": "4AhYGqYkGLLd6xtAxo6S4NqEDEMV4aWfPeUeiG3FJi4NqAhpD3SirFWp7itWxYxpa1L5DpJkcXiw19bBjRTxcHom",
  "key24": "3KwyryY7wiQgVXs3abFMHS2zYRg796Pg4L7dTb9Zpveg5MRurKgTqrqNE9MVnmAku16b1N56iHJJyCN6b1ssDbkN",
  "key25": "2TqSPeiTLwePKFKy9WQyxni7Yqq1LrHGG7s33v9Wsaywx2M14MBL1XzpULDEyPf45A4WYEWvPh6nBFLpSbvPCZWp",
  "key26": "26F2FBbyunxsmwVs9k7FrpBm7gETQhx2tuFdeDjtv2SSrAGFhdcMXqFQhSSuc6EbZ31UiRM29frAW8bcmgtDHptS",
  "key27": "2JoHN4hZfh2Y48WzA2MdfS59gYoc7Vkr7CqQSUiXjQapiEBSKcbRhjY8w4FFuB3Trj3cXKy6w8zwyZumUpiovfzP",
  "key28": "3hPbDTPBV2PDTmVPWA3ytxYWYpzQga1UyF7zSo268tTrCvzcmSmn97djr2NiXM5foBxqoo1845GTPgvMCBAPF9Gb",
  "key29": "5E7vmEQsMULwb855GiiJsdLVktRbHkpcYRYXzz7Mp73x3S1LzQfTAPQXQWHUQTJP29aicBfUzbPFFeVEJTCCa3ok",
  "key30": "E3obB8fqv2i2uY2iSiFKCz33oSJTRpmcS5AAFZiqQyKyanjqSs88s1fZActrn5FuYeqfgMCPF84yCFzSJYXrndi",
  "key31": "33xqXbTaiijpYPueTfrQLoMnJ4zU2yzRrkZNNv9zxuirn4jBsVvBnxDuq69WLoZQHC5ZY49dUbAvxj5qgcZq1SfJ",
  "key32": "4eSrxz3RFLG82Ewkkk8i6nkxhf99zer5UZ16QvSiuiR5yoi6HoNXJmh1nJ8cFigw58CrhPDJ46ZNeAQHhAbPbtSs",
  "key33": "2MT9BLWwZo9ijgEH9PxZQXNQ4MCFi85HgYmrgs4bJaouepcPDoqGz8pTdPZSxTttt3SVAF5YtQUxU7Nmb7JdxKub"
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
