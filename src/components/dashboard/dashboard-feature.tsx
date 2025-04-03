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
    "4JDKok9WhExZ19xNDTMypm36h7K8LScY9qyPqXauSzLSLPGWHhf3Bvw81uQWD9EB2USJq8ZWW9pEnY8ByuQoNjXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SJrEcoGKe57XREgVo92UwTiQBEKihFLcgDsqmxxn4ty4B9pvEeuTzMApVKq9FHuhMNBGZzfT23fnoNEyUjfNvh4",
  "key1": "32kCVvV3dd7uZYAqfrbk2F5LAxtPzjMLAUzStvnaLbBkPDsCqBn5rzkiqxFh7ehp1CNaQpsbHFPdWASe2JvrmxZ2",
  "key2": "2yUGHUCmJ5FNN4sNPcWwUzPS2HiWBAguBHTZn7ic2ypUcDhQYptyf8GTegiMxwTwc4WcoC8K4YNkWPVowYaU56fj",
  "key3": "2Hvf3wagFjyVYtLjG2JghPuATngC6jBQD9mW7cEcn4Vs5JfBp62noRDKas3GVf5a4tU4rMCH4b8Gm31XBseyDXUj",
  "key4": "Jpje7zpT5zcQQceEV1cv11jyQ43ncQRD5Ks2tXrdhaPhVSRn9LnaCUvAdJXK8A7yqZec78joa7BLXPggXrVmdwQ",
  "key5": "YTc9JmVZuSug1V7MxP92vJToLGJNnfZxMGdv6vgDVC2MivnW5GnMEH8X1iRf8dEMSxKjhYNhQi6gq1XB1G68asz",
  "key6": "3N2KKNbNTDEhcjQx3V8PWVZVWZsjE1rbrS4Akwkmf9SVJNiVBVp73rPogmvZcZNH9ApBmWKXczZWJjDogfQyozP2",
  "key7": "4W3WvKH1v2f17vBiAbozMRCBcG38UZ7NthEEs1eEX3zhnpPcs5qLUq6eadpeHUbktWQuJsNFZw83jXxrLsr8uJsw",
  "key8": "8An2rmBegG8si5W1KSTHcdFQf1AoDMW6hQaUowypeZGXaE2SCmQ5wpSdDTDyQZMzs3Efcz5qRDPUbZbUN176wyz",
  "key9": "5DmsQ2b7XNFMcRE129KFyV4uWcNTLhqj7qxQ18rng5BRZWCYqPvxXTtShjrPfugzfwtRyFwnnWKtCHYbZurth6pe",
  "key10": "5uerdm3i4ELpRUNk5byLNutXbHp9hrEfLsR6htQQSeHAZfBH9tRmg2h69hbQ2QRRdcpUQmHYcWLg7RNvgfk7eWQW",
  "key11": "5jFTCLCgs795sGz1u2ugdjxY9Gmc2yHxfkpCDW5rgvFDmnSu1LxinMdusbr92sEgqAXgpBzs6bnU6os7JtUYrCam",
  "key12": "67Bda2zuNmSa31KuWyxPiWDA7CUZdg26YnNvy9mVjt5VenwYLM5XjiLaZa57RES3AJbDm2AogsFVnmzsKXFeQJz3",
  "key13": "42qY9Mbb4vjqfwjixMXm6YDuMJmpuJAukcJbgwbabVW1ZNKYEMj9ty3cmxhxmHaBSuRNnS5WEjBZF9Nsu653P6SE",
  "key14": "2qsfe4oiRnDxgGEemBYZgxxCPDBmhmDJPAnJpDEn8cHNJZB7EruTVKeXsZ8fRwXy1RBpXBF7WAEYzcAYzyesG8sz",
  "key15": "54joRgb1FkMvUhs5ouGYJyoWUPuNwbTVSPBP2uFnsSsFaZuRuSc4d2L68J1aMoD8an1UGYuDYH4J5FF9jyAUhsoY",
  "key16": "go25NiqNqjYDiFBSWYEwAxMRmSQmTU1zqJ8rdaoUkTud9sQvaga4npDwfcoBQFaE993Qp8wRGGR8ieQzsYCf6qp",
  "key17": "aVKx5QvxhYvTNvCEfYgMhXnmR4cw6p45E5hSYmRzatQr1WeKcPGhh5m9fDnSYSRuSvTUtU9GddqrdBJCYCS2PNf",
  "key18": "5pp3EVRCMLGJF2td1VFN1UAJh26xnrcDtNPyWWicZVrX586MT5TuC11z7NPSvzkBhsjyDFmQJYnZFNWU7S9kRk5h",
  "key19": "35334TinPimFU4dJLS6reQJeNC8Yc5NyaSVhE6PKg7ku5hFmu6TMGJQarBaNDaBhRLyQrs8azwL5GKzbNT4cBFSk",
  "key20": "pzobQsYhoXWgcqJuTevCPesw4FjfbkpYFAGJskkJPirkedcDZkGCAwALx4EXn6B96X7kfnkNZDMs1oaWQoGJw3m",
  "key21": "4K5iAfV1gReochrF8SzYTwt9H46qnMBv8Kbxi1AzMj8DXgjDL8h7uWA843LDFKDhkm1Cu8Q4VHxLTZogR263g3QB",
  "key22": "3sjqJUcXkNYo3GRYEDJd5UiA6AFBSCtrVN2nkvocFfcXJousVsjuVmsecjXFjTna2WicoEzvvPG9oPpj9oCx676J",
  "key23": "4WFCQkgkk5hAPJBt6R1om212ZThtcZ9AzB9nnrGWwf5xVmLCh97DNsZawq4Grs76gfQTN9fXd1BBy95XgreGtzMm",
  "key24": "416rL521xE431gKSpXsYRzNxKof5xKgoVjbqkPS3pCmNVNqhrBYug5RCubddHqAd21WHuSNNpeHXXh4nGJP6eqRu",
  "key25": "5L5cAfSscxvevBYkHrKxhdgj7yy2CCKwQqHHUuoQWqk9nHYYXeRVjYyxmonq91gKwt6gAQT7pK6PjcVEe5TxeTEv",
  "key26": "cmaQRk2D3QFAZbDjSbLyVrsK5tuD325FcjmHg27AFFVnA5AFfdDptUhfRh4RxsFU9Xa4KGnkNx6Zax9rAETqM5K",
  "key27": "64jYdbnPRKM4zk8cwBTyocLtz7CqzQc5hXSpXVboVYi5i288dUXbemvNkp39YFBtWsf7KqZe7J4oAMiPHaoj2ojB",
  "key28": "9JcqzfSLzwiXLJS2o8VKSgx5gW5MGxvsEdine57yp3CjxUxCh7W7GSwrVXWfaZMPGsjVw42DgY1xkgEQ8w8xsrq",
  "key29": "2qNL1M32dYTgU6cKvWd3eYktMQcaA8p9Ftf8TfjmYcqQ29QVNv1p1FoQC3fT87WqHBFbwH5DwQMyHCN1smerJd7n",
  "key30": "pwpPzy9wU18o1g57sLsKJyhpkavvUJpWZQXW3Qkrd8U1xuWHaHzbRJD1TzP7M4fraWVGgK1832vSbGwdaufadfr",
  "key31": "2qcUEfDnPkAAagoRuiSDvgSBKRkCbMuK34Jk6m7nW3eGNXdSym5YEACSxC2nkvBnBLudiWmkF6HPfVPDBF7U5qMa",
  "key32": "2iq7xbqSrFUwHwDi9GR8GANhEvt6zktEJ4FrUG8W3DzcdH26E3id4awtH59NdnqoDwPffCiUgm9ssRsDub53y6kp",
  "key33": "4KGro9viVwmUXn65b71tyEYVgMYZdDHRpDndRgS1MERQRBd2vUisKXa34aXnym4sfLpkBmrmEQTWezgfqXTh2gTU",
  "key34": "3ojcCR23Vaqfv2V6ZVQHhCUAuHAz9JZqKspHsNatFnKpNAsJ1Y1oo2G9v21gZ22WV2FeNnLiUryajQzoizEp8T4e",
  "key35": "2ndFXcg4Z9gVLexQvhjEc9adHaq5eAdrbns9LeFbwoN76szZ8EBJTxuv8uCEmapuK1PCATfebEANNMcQZYkgV7Rk",
  "key36": "3FKn21xxwgn7Pm3sRY2Ztw7NiMh2UKqdmeaXPYV8Kuy2iftFobJtkMo9agqTXQACfmZ2FJX9AoEy8rEkkg6KDq5C",
  "key37": "42wxwodszWarXEaiJFTq7R4oCKUMyZVmr3hiW3FgPiGDtsnbMmAkg3AR4o2vcsUvbLfy9keJUDXUXozrT4FRUmhJ",
  "key38": "UG3CT788E13e6nr9oLmgywpW8HgGgWuJqDuM5u3AeWoEdj2dZUwQfmvTSL3C619rwmYyJnozL91kZDU2t1N7ofH",
  "key39": "B2bzEAfLr6j6zEzf24gKFr1a7Ag4ZjEQW52zYhPh3NPb4nqdpJw5PvXfqd5x8u37QAJXmhkeNqTe9mxR28y9S6e",
  "key40": "42dbotbo7VDeFiTxByMopy3iXX1N8LCWpqpQC8fB9yj2wspg66iMS728WZLW2vPtJb3m29ZV6k4VUFYmEndHd7WR",
  "key41": "5pGUp29KzhRpTouRyN7GvNMCBxkYqifAGk56gkPtvwVkoeLKwWZN8doDpXsv1z6vdrGDAx4XYCqqiHowjcLeCt9k",
  "key42": "5psMZPoTCxVsKUTzWc1Dhxph8j2KvqQdaGCqDLkajuW2CCLEdNXnaNhcB76zvC2Cb6dMmF8nu3eyFsXrA4ezRtJh",
  "key43": "ffkBWkKeiHd2cqZGPdDwPJB8iDu6CkaVe6LS3qfGuqVrYnJfXHNn8YgD6cEtP8cdmit6edEhUCay6X29D1M5Wcc"
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
