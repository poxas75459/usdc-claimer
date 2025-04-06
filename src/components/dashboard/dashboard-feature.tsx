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
    "3R4Jf3bj5dq4X4mpX3VmALCKYi9FDfcLcXfheSYTLXzx1z5XyQGHqiit2e2czgteUGvRDM6rwcUCP4Co1RxxepMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ru5M3LVyUres62fL3dLhTMVCNEkArUg657k7toEXw3au1X2v7KQMXH7JoK4MDSwvx8b78rdXS9fzR35wkfGHqdL",
  "key1": "2VpaG7D3qav1sYfg2CnkTc4YxtWPbjn941ReQhKgMAM7exnYGuYFDdE5fGZV28MjYRxi8ssCqgArtMfLYj14Ttao",
  "key2": "3UQ7jST1myFwuu6n71Q5cSsMWe2E8SKiR82675sfCa3FMJm9Yh6QnhVwx2ezVu1yEgfhfA6HeD8qdjW4dvhWt5jk",
  "key3": "21hBr4UP4AmHurZUkophkc4h8aFrxG2TkYeM1zL9apMqubxA4VMt4NVeE5KBgEnSWEUzdxwwEyRPdM12EmrtEkJP",
  "key4": "24GQgrZUyRqFKJTonjrx2tpQqCEuNKmZkivZZT7RQAr2KrPZjXohkFVdfuUHyw2iVEmMVnV9s2d7iaueHWR3noWe",
  "key5": "4BcdbQopk3KdbpBqR39L79Ua32AVvMoyAbc5xLqqJncp2x1iF9CxjavZQfEcwuxyuoABPrSXauVeq37HBZddLiHF",
  "key6": "4fu7p1xu3knSzLAmTYgj3qEqqNv5vSDRCPFKzD7oVWv12ZCvzUbZvSAXUZpba4Yads9Ux1HNxj6s8DcqU9JghdrU",
  "key7": "qH9FXxqyPqmRbXygbPqKbkimZk1mR6SB2Nx8T8AhQhTkwK6Bn43mXvZNViG3AW6NMTUAYniNDcrddcxNrRQHwHX",
  "key8": "3KXzsd59ah8jpLqJPKJXVJWkuRGCdqJd1Kz6XgLbroMTRFRvCVq4oABPqCwd6ow2kfRHRj2jNZKyJ2v4aeDUU62j",
  "key9": "2dtLWeQBi31KG5tkC2Efehd35uG4Xay8BeivEA9xBiFXwshiV82hxwxFvuL1TYLpXumBbpUmTAsfyu37nBWz2x5c",
  "key10": "54kNDytaUq3q8MgGfzb4q7tinEdj2XdcRhvNhzKYEm8ZhP9kpQ4ZkCbjqCPUPPBXSpQcuLdJ26zpmg4ZG5PhbNsN",
  "key11": "xzjZLFuUumkjopeJfgoJSgrtKnvByxwcxP2k8ANFwWqgfZ3YRwLpKXrEjMsQdWmhcTHuLCzjZyjREawSyGfHVCc",
  "key12": "2kCvfzPXoR4PwPAZwPisKFhdJdps3owDPTF3H1hD8bngJUrLLHf9u7qjFsdNN85H5i2mWBmP8qkHbtk8cFxq6sgH",
  "key13": "2KrStqWYKypXNWgK9ko5oZpZB7sQoYvfCquPwF7M31SV5mZyYjCqcbM7gudTsAbRNs1hyUMra9b73SrYiZunoEZ",
  "key14": "5ocQsYH4cWtiBpRRvVLThHj8jQqcgYvgbwsTWMSiD1HtMdJuCU8Eq2jrKZbFsp4AMUBXDgiUjeAnrF9mVicaTYGg",
  "key15": "5hTvzt6vg3DfatQCZwTwspmhHeVUu6ZX8mrGdB1XoLAT5LvfGPC6uo2UThjwM4h2bA1yPcdZoyuA4c3rmJf63q59",
  "key16": "ViHt7txY5yTV5GWmQVkTNDuT8QZj7PQhMtV8hN4YFCD3RcvkptbTWeBfZE2KidnSjQMfJGv4MuATFGvDhxHZm9G",
  "key17": "qXuNQrdfyJDj9Ko8UiWxsSoVw6oPBt3UbYvwnF8Tb4xoyeuYziTArtNQ7pcsyQjjG64zg7u8dv2z992qRJBg5Qu",
  "key18": "4NzfHQquiDxWVZxwuJHBDZo1pZ6wLJrmF56hz3wW2CZ1hcjQeKtLUESdDBDgPd194p29GhvVveCBQaja9daDAa4K",
  "key19": "k4Fs6wivaqAzuAn5S2N5ehMd1D2hiftUy61jUmqF86ex1Q87oaWSv6rcCrjcHgZs3RAQDjG3smo9ketzKWMrQMo",
  "key20": "2JDu2tnkvgzJgHJSNHsR3oog8bcD2m89sqrhaSka12y1xgyPMVpUfT4ibo2wpjwzA8qMQNaFcSBZQtxfaW5BbroT",
  "key21": "4Cgcq1uE4PbuyMimt1XqsNBKtxevzNSHuJNadU7Z8XK8opp9vYV8oZ5Bxqj8dzZd8icKWMMePrcdr7bP1GKp9fQY",
  "key22": "qLHrGjDdMGursfpvkiDCU4u48jAYBGAfUPf4T4uVHgmowrTPpe6dMwE5pBEmpASidsZqFgh5DVmUUPjy9eaCdW3",
  "key23": "3CVUMGbBtRg7pbUQoEaA5edD2X7hSfo2txmQGsoagEoPaLRp2rfgpkmSMQToskwnLEa4rSNmiuXTyiFakcEvzF4S",
  "key24": "3ciJBrhX4rXTyUWarDW6r6nXoNtKBNLntoZtT1CkdGSZeDjYbzTBQgFeVhs55vJPeQJjuvxPvGVS8SUFqNfYF3hG",
  "key25": "5ddnvcEgWsGFbNMrYXoLL1TqcM81AgskFVuqUYkaWKSC581PCPDh35BGyrWUo3MYRn4Q7UjreHbDbLzPcyEqr3yB",
  "key26": "4g2sP9Z2fV6Q2wH7LDn2CZCkXcngYpybLv8okXEVEmUKc4xXfs3Gk2p6QmVX1Casx81a73BpZ9v9au7e3EPq3mtj",
  "key27": "3ot59YqYux2sRYKYKbRYvVpdxvBWX1FmgeaGKcAFyvBSaA4crEMhz6sW5oCgAtE5xJRaL4HugMui1222ohnHbFdb",
  "key28": "5eZqMULqZorUx1xbcPWTN6XHvMg9DNpbamfPZECRxfS8n8V2JAZvrWssZRZ6zUbZqLU4WGdeojGp7YZZMywebKWc",
  "key29": "3wFvr4fyTA9CxxfM17jHsKEcGKzeoU5S8RJwJVGiHsSzWpoMSLHBwp63a2EyXckMJAyo9o75Hk7a8VZzF9GtkQxb",
  "key30": "2tHjye9FhM2Z3Ka1WyPoP4Va2nW4vr4pG277wwsJ2Ey3G8Fu4bLZAutGb4fp4nRrwYu8nwP62nVLkgSrxb2YUihb",
  "key31": "2Gu5QMqR4yRiq6t9WJzsYsbtMRkBVBHzmqbCJm9qj6nFhnKFedLbuwjsLJp3Crm1v5mSgcUHEzeUePMTnV92FQ7E",
  "key32": "4hzWZYHCqgS7n2SR4G4ebeogWr2bos7JnQP6anMHVxWCQSdn6ES2xkerp5Vn9CfmSE3V4sgUP1PC6jUXFkMeAnAS",
  "key33": "7PZXRQfxCHS9xBpgba2zcG3KXN19BWeLzcnwefxa8fmBPo3fWu7dYN8uDp5jEstddiWymcaqAsEThX9Q8t1hHZu",
  "key34": "5qJiXqnTWvkcQUQXzDZky4ULdVEsBxBmbronkUs9KjszhuQr1Bvyg2giezULNa7YMLm2oh9RJ6n41c8QvpcTr4H4",
  "key35": "3TvFLZ5AydR8DLcMn5hfDTQcZEsozFGxPUfNrTci3yWGPRL6EYrBzR2WPjoCHmj9ETxDUbX1ivjGU8idpYKqJskc",
  "key36": "33DpFbeHE37t2KbopLGqwgMoHSEAMuHUuSFvGTUibdCtEqBi2SZbHKicBsacCFJGCXafFiDJ5zRavq92EZdX9MRo",
  "key37": "BaMfMGrYvFYfgDV4zVXb6oinseJRj55eq3d2DfbmGYtKCpYoxvMjW6UR3qjUirQVQz1FgM6wjJDGKi7TyfKnKGm",
  "key38": "4ZhP2faNLX5kbviSrCx9ruXU7zME4Fx5sKNgg9JhxL9PMu6XnGZaqgHEfGVFnzNxwd4nomPZgJEG7aJFDSispKdZ",
  "key39": "4PS7yoEURqwycXU9giWRdAHfZE9R6EiwijojmHoxnPgDhkivN8aAHBQC7WYQ1ZfX2h1XDsqvtVNtcaYw8uSxECAS",
  "key40": "e1t42Kod5sYZjqRN4nutt9bfVuqhbLG5iK2et7sCYNRkSnhJSDkwUy7vqt9VLJY2ruxZaHUiSXBRTaEvXixT1nZ",
  "key41": "3NFMWa7dUq4n5LxGR3h4dbeEJEirVBHBoN2Xj4qDn5BDteD27YWcsYxK8Po5Jqd5owJbHTdy3131unfkcdVj29mA",
  "key42": "4gGo5wiJ6ocj3Ban8kUrFAFvMuP7BQgdWqDvpWA9URmrxmp2kg7wH94eNC8kPaUBvyFiXMpqSbUvSwY1BmaYDSy",
  "key43": "3xjukoppKQ1iSJt6r9TCP5zF191rQomCJFhywXSmhqNonjMSA11BqfMdb5HNQj9x1VCwKowS3UC3g7rZjpJGrtd8",
  "key44": "36UhPeZ1jszUVmrLqP3bWrCUDmGnjAS6T5VQFAFK2pXTmvNfQibsFZ5j3TKybxUaLMgUySXFwHMaThnTJzSaiDCY",
  "key45": "iAugK5PWLEg51iB1JcSysmyAXEAhJdoksHdEKTQErtirNg45tn2m4ot3xChMNdXpRvzde1wrJQr6thuuRFT1ZoU",
  "key46": "4LUAacDarQ3uiaR5kvDSBoPyoUsffWZtHmGPkXvDV9YFsFVU1fdv2kjLQLo7TqDZkKho91Lqi38ELN7MtA1tCpWq"
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
