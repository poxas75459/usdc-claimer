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
    "5cVaGQNG4uddSQ4phJRKqQFk1tz4ABXwfgv2aLJCeouoQ2u3U6tVYkUiy2DcT6xiWhtdVg2QFccZfccRdPowsYk5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ynvbqZfaQDVJmNg79gX36PP2VLEUznKfRBhZJEjGfPtDSWrTaSyduQcW1BbQbkLhU56Tnju3jgaigAmJJkcUssY",
  "key1": "5SPQ3amxFxNfh7bBNcvy8pjSaFSemkbpDLQPsPBrnpH2eFHsGZRUTNcx7KjD6SUAfsTeWcJz2wtYB29h8h3cfVtk",
  "key2": "3msZAiyhwG4Ebxfa6uwkaasAsMh8JjD82cXYG8BeBWMPvRTaycUMdUQgUjpKzVTVzx8UwaHMbum8wxvB3bYXYdbX",
  "key3": "5rYMzp4eADCk65UGeLNX3d1teVnKityxMv4k2wC3gRWAXujaZpACmbCgBM3NTGsKEGQcB6Fsyw4VQe9s7DC3p333",
  "key4": "gxZNmgh7joVkb858BrxYd3vc1vErySujs8EoZmEYtYcaytNWG8Pfs7qnU88pGhbzADqNMfDqAowEXDUWdmP7rb1",
  "key5": "42Ubsp4YHjVHB5ZZCh13m991LkZmuUV2wpdMUv5FbQQt5prEhjBXtEEAmWeLyoQdc2T8QLZ79CZbbXbdzx64nVAu",
  "key6": "2fEMg4ZvVKyv1wFvccvJ38WFVo82uG87UruHcP5Vdei5R41z16yQhT7Tnw8BpYndWBtJ7wVwu2YrLuCr6LUgjB8Z",
  "key7": "4G3b8T1jYytAVBrWX8zajtU8GKAfcNo57MTtewDYEX781SxAMknaZA8oBdMm4pUmGamzZDGeNdwewmv2t6j2GERH",
  "key8": "661QssF5eEJToPi6Z3naNc47jtAA58UiCzqwa9jKyGEaaUZBgwpEzcmjycnFDXocyJRpv7JSsHMqk3CK5PZSog1h",
  "key9": "62iP1wZM4mnavAkXycz4MFtbm85bzfwAB4JXnBs9ktxa1qD8BYrDkLYLcmMhk6gZJGSb6gjjAboFSb6M3GHdH6CN",
  "key10": "MSFfns9Fs2updoMHZTGKtNB6jtJcW32G12w6dxpamFQ6bzF9cc4xKecWeM6pwSQ2wya2PkbqdSQ15eS3oy7zLSi",
  "key11": "2Fxr8N1hhFjW6HC22uDhPkziGfxTVXk7xdoqnScTX6dsczVKTYS1e9WzeE158LJoFWdpFKCCYEcRhPbV13N2TNfr",
  "key12": "2Qbqap51ExG6cs2i31GE2ysjCPMjxwR3fzL744Nbu72CB8P3VPNeqhpJaF3foEs74c7NKm51cVNWANtdMbeju7ir",
  "key13": "cXfGvmeZz4QNucZDGsxfuEEvfQfiqvzWHiBQ7BwaJtY6yXRNq6BgfXmeNGSuM9DBVDph8noS99Hi5Y6b6qfTdcq",
  "key14": "2XNRGB1Rr1KT613MBcoLFhKoHk9d9t82mLe5mrMKuVRxqidnbhTPsMMoavqF85NRbseigbE8wWEHbR6DFxBHfmfh",
  "key15": "4Lc8yibqEuAUw6DXrTStAUZPKurizghKvUju2fdTci1FzjM79AzeCMo74mnKQXaDaBGKJJ7Dp8eszpDj6VY7Ac4v",
  "key16": "5uafij7FZb8b7xWNtBo2AKZGcvXgA1wUzyr4F9wCHUC9dYZx6XfPwvUmi56Nu7R4BNNB4y5mN9NpyUcpX14qq9KY",
  "key17": "SVpxVS9zdc9AY9xCgFb4T21rY8SfYVgFuNoFGKFXSz55V9T1rY2yF8nEPxfFZNZsQewZHTTefKeQfFgBHgdg4TV",
  "key18": "5ybKPAFDJHApQqQEnKvUh5fznsBCopCYw6LJYJRDt4arb3qR4YvEdczTRgL1AUSMrg7ohjPtnWf3499M9GuvZ1qq",
  "key19": "8uvjgJB3jEd9W8oCpp7euFvRY2gSaD53A3uo22X1eNvCDUFyVFikMD8Z8C3ctaS4R2aW2HAi5Wj7FUk9gZxr8hq",
  "key20": "3TRHmL178M1DRGWA9hVEpCgFfE1Lqr199QW9pBsQMzeL2Uxup8WYTq9sEFoP5Y4XERoQDnPcPo2ug9yxiq7BNtyC",
  "key21": "5Ss3Brx4R3cr5XFHe6TqDawfEhQdy8wu6CmyEczKU6gFQ2TnEZEypuq3ARuBMNLteNS7u3djo1CRREub7drazXqo",
  "key22": "5oYUJpwKZcDuStor4XugyLf94qerYkPGQ8ySFJJjR38C92H4EZy42qQrughTLxhVTFvzgF6wfsZaX9mF4R5tW4hH",
  "key23": "4v3XB59EKFvwiKrunAJWWZWkcXr9BNT9Jquecrrfp5zb9kJ3qZjz6q6p3QcpwuM4KQQcTVuBTu23KGs7zALmfWDM",
  "key24": "54oDLJPRiphScXSGn7qW9AaHxVxTSc6AE5F6U1xqpBEhyXATYaZpkYDK9894o6dSeNavrnfrqx5fsv3SZ4Y7usAy",
  "key25": "4vkVEqbDJU8nWfiiSNfYNXmpjymUgg6rFHg9i6zx3jQpnxL9MRZCfQAZ7GDpKTVbYBMTEh5fUmAfAj9fzdDteoLB",
  "key26": "5HrmuLQ9AMgFS9GGdwAtCiovinmtpLhMSzAmbUQSyTy6ADHf6cDPLcgr3d9vH64cxmwBS48mbYzkcpe9vgQBcvTP",
  "key27": "GZSv134Qo9ViAqGqKdKhZnU1n6d2m6jBAhsRzaHVkUjHH1yA5UU5D3SVgpMcyP63S1n6btgsxpf2Pjm4aM9nUp6",
  "key28": "29AfH27sHrhRY7fbuUuf6kMGaobeu3i4mwyZyk4TJr9wZja9gioifaKQJfUKe7pNMCxoQ7SNR3uX1mPsqzMzNecR",
  "key29": "yGtvCCyctaH5D7ehFs5Ud57ZXypQNy51NTmHGhdYkvZgTVFaLTXocTpnv5De5F4S6iApAQsFtrPnEnJ9uSS3kvT",
  "key30": "57tFPuj5WryF1YXv7hnAsqp7q7ZF1j6pWQGipPhwn3puweSRbHxsBW3BUwBNreZZwErPKjFb3RQv7EiwZPbF4ceu",
  "key31": "38dzRB5NnYxxPitJxGGBu7UHEMqmsiaiX9ZwRKiNy2KDMzGb6xL73QukKWfJ2nDpd7LCUWFpjVrWHw2ALjaSsRdb",
  "key32": "45jYHJ8jnL5bNumRYJH5QdrFitduBjgELU99aN4iaP1TcdqhZuQpZNbQRe6tcWTwq7Yxd2bAMSfyq7X69Xq16uwU",
  "key33": "5FGKxZ1Y7ri6sUejP89ZahT8fqmZEwAPVtEugFNivui3nVfH5thGmJrqsWV9A7jmzSqhWCn47cikHLew2dJvqU1o",
  "key34": "2qrBs26Ev7WgsFiTaMaqd6vb3ieRMxkrdhJfR4shEaDaUCi3MwNqDPXFZgTo77dL86fhEUV8PTbiPfU37m9gezQo",
  "key35": "5miEE1aHFPKjR9cih8wjWFwKQFXbk745ez5NodyNV8c2iXxtN1GtQYG7m2kJLSiyPGGeLdh5LSckGkyZffEavuxs",
  "key36": "61EpymT42wLjbgNS8fPgQybM3ZfgkUxuLNqQ1TXijXTVpfwxkaoHArMxLGekFEWWAZakYJXknncNH1eb6aTnGhnB",
  "key37": "3G2MveWfxZuu7kkTfQDrYiqA1WGb2LgWwDaKtqeCc17VCMcDfTeTbdnPhkaQohaHZaHLKhS4bFJCDp6RZkG1zVAq",
  "key38": "yuLDSmLxAZiLwC5SJFeDkNAmAQu1L9rN5h3RzwBT5Sz3UHHpPDaw4pweZcT55ZQgHf5RrVrPTB5LNicSbGmMsCz",
  "key39": "3p3TPUXeW8BRjhQNoe1cTiDVEcqQnEHxcRMzV2T7SASGxLJ1wMrAsgaMnqwFq2BxLuc4NAFiW4mCpRHiFpdRRcPN",
  "key40": "5uiXewVhEKXL9jcc2f8wYv6YdzmFNrb6J8L5TyCZuLcdBGcGW7upHrWrRPBXbWhxLuzqUjTJbgewXk4ysqAYHEVr",
  "key41": "57FP33NhXaWEbSe8EM7iCV12dTXyBcrcQxZGFuwA7rxqhawHLMqA5XLwyQMX4u8tR5oynUmYvkzkdtymN39UyFsV",
  "key42": "67G3iwu5wWB9cE5jGM8K6z12Y2F4BAHqqGUfB23QHnqzR3LqZFQ3zitbF1t3KNyDamRhu7y1sQpAmFURksnxqWwy",
  "key43": "35hshNzMzm9u1vWbSrDi5nBtcW3Envz1hyhVdzStLZ96xTGZ3bH4sFwyJx8tFGQdt1TyoJNtQPfucWypRDtC8XUS",
  "key44": "2B3YCHqF61BmpuVtMEqrmgVgwF1pfrsGXHCVmouYzXiGDh2PGfUsCW3pWwaVj7Uz8s2WHR9cLbgeuTe6zMtM5FJf",
  "key45": "5qXguw6SE4pr6arVCGbQcoKNCuyqhhNxwzV5t1r4ALokE95v5nsaACNX2QHLh1cgLa6HgXk6qQ8LxbNjJnnzsRDE",
  "key46": "4BV1tdarR2wEyE9KNWaEPMriDSmxMHu69kVCAfKv34kCvebcRBat1sqabhy7th13GBgjsY8iLF4UvugmWN6wJ3cW",
  "key47": "3fp62LjfngXx7YK5EfnGuT665JDuCjDrXPPNRpocvFTPxNLTZjQwQ4fyL5E4wf7b7HWBueZuh32EcxySGe38H7TH",
  "key48": "ht1zCYQREcRSCRiS8n1iBHmZFYzdrbc4HSe95ukSUApSAAV6cuuDKEbJw5vuhBZii5rafLF3BDRCujtPH9RQJqg",
  "key49": "2HzhT1XEqK3Ay4VgFE6oinoah7BawkM55SVB7BFjL1DnCT58ffL5njy3HWL6h1AEggb5fNeoAef5J3NQaPgJcmBV"
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
