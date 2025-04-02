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
    "2KkaQaZaR5qRXG9QKdNFFTidcLR3hP4m9DxRroq7TtVgHZyrcACERhVYBW6ppwQrFmoC6WTuPDvAUv2K23EFtTRh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TNbNzddY5GThX664aEvTdoY47QVEX56FEUjrKR9LdBtEJYMbsTw5kL1Ro7WshgeYruFNeRq6vuQVujn1esubKQt",
  "key1": "2rPjToAh29cHpTWpAq3BhPMFVQtfx3mr9AFvRoT5HYfUdR7p6rWA3e5uC4ffbwDja3vRdSavZLgBq544JnTthBex",
  "key2": "3RE1sCEhdYA5AnTKUQ8zdzciYLw5u45zALUhCUoxaXiRYcBvDzvVjtV9K5apb9sLZ87N9VaqK2uUP9CfMVXi6B4f",
  "key3": "3pD5HXfuokNBewf5NBy5trRvCkFmH9JNGAbMYPosNWvxpgUzSgiHPdDrXNuLAFfbX7d87mJ16RjREgUPWKukgLbw",
  "key4": "2svRMprTYhzzh2ZdqXh19odkHzofN2FmzNNSNmSZmNGrUAadKYQ6xJ5uJeHr1PbcPehhWZeHXRLxs8GAcYqRwyuv",
  "key5": "3eLva9sLTMHTufbPdLBwDUqy9y4mzbUEm7RbeHNATgzfTLX6sZhc27WN3ZgCS44j1NSGKSt1oP5wReF1QnHx1LUg",
  "key6": "4YKTYFoRrtWBURxqnzLCwmq7iwQeV1pCFiKw1E34n53o9F5Cf33tdoQfx2tADg3WtiJcjBQbjeHLCVsnxU8GB8fJ",
  "key7": "4e3S4ywTNtV7xxn1kdb25doGTwqLUbWJMRDoxvGXY2yQ6P6yMBJzhAPYfWueRNWN3gxDpBndSjJyyWm9s9vKULoz",
  "key8": "2znPPuNKBjGS3U4Whf3fnEJjaUMDyTAszUMSMSRYJoM9hLLdDzs5Fb3sQQmqhozGybZSziqPKPxZmAQkT2zuE26c",
  "key9": "2HEyDM2b3Tg73nPHdgAkvBTdTxB2n1BTR9DqpGLveKFGJJU9zdcQFuAkXimdt3bdYUAnucZ8hUXMivnqneaeiNwi",
  "key10": "61cb6ppPzzTx8TkFQRM7G6SasVwNwTnBzgdAgumr81G5kUFxpqaeTGDwcRKX9y21jwRcCv8fM2gy1gkqdKRyD4n5",
  "key11": "u5QUkuUYi1VEiUYzLryib117Z8Gc91cMhfu4fYGYZVmovEdDbB6bZeUrSL967oLpb9SnU3oryfXMJrpYJAUYo3P",
  "key12": "5NWQ4fbxGcZ6buz7wxtcCkNcqXJGVftTGauTcYc8QP17QZmt2q5BJqRsNkW6ih6tGK9vYGFcEkaHaAQWzpqkNYpG",
  "key13": "3JUnhtCNKEXcW8i6EVtG34mHvw9Kn72kHhxQvtDdqg7sRWSfZfZjXDEW64GVHd6fri5bFvom4cTxqKi8EU6W5Upe",
  "key14": "z38n3q9ZqRoBwbms2fupqzzmEFBTTqd9njrTm28gSbusgfXFAHJM2EuDtLXimTG4dc65updKsYMtiy24PKTuJgg",
  "key15": "4zMBX5iwtjxASuFi7LNWgWbZQPjGyMoLPPLh8iLx6xw51RwzFpRGEt3oJjaaaBdS2CSM1BzGTWZNaFydkfd1QP2j",
  "key16": "3sWdgMyfaU2AvAfE7vFCZaUFY1C4nQ1a5EjQmMGirGH2bxokdFToWCU9ewwLTpo7YnBMJ8qBvZS2E8kkET3XLqHt",
  "key17": "43wNQ4ZcQNvpx2rpQ91jZJsxaz1x27Uda5nRgEGerbdzxu5X3hiHAquWMjqFP6VBriF8NHDAsrnkbPyFJndYTZiW",
  "key18": "2sJPRcQZ43sJJk44MgLM2TyqaJ6RxAxsxtF6Wvt7baaPbcQHxcx673KrF8Ce6XYXHvdmU8ug28jm3H6F6YdeJBGm",
  "key19": "4drzTSd5ydF7meM1xDV4Rjm2oy1JC9s7feFqwawWgTa7V7nWvGj8waYFSvrNEQ39k9zAe7FAP1vBjWSVmSGWFpPb",
  "key20": "4WJf8w9zvnrNCL35cYD65Tgu8U1PVY1njYF2QR1BzutzbRR328BSqo8FBnxjkJ3b4AwhAWRw7oCZtm5ejQwm9Lq7",
  "key21": "3eSvETm2q6sMknFiP39JziqiUFsR55cMRSyEEuhmJboLR4ejYow1vaCYkpG8MRhwxJqabPzL58Yv7W5v7ZAjNJsh",
  "key22": "cNZgMP7Haz465iSzweGs8QKY6eCsUxzoTfTMbJUJB3y3ayYPpWJnNdqrNwQN9WXx5haXydwWe7uzw4vo13c3a1R",
  "key23": "5WAkrcd8NuvzxP6s68jnG5gbTsf8fFuLusbeiKprbahtc7yu2UF6BdwXdVcaGY5gAJRaCv2v1cBkWcHXPBkfRwsp",
  "key24": "3TpJc7tTddo5utALDEaHuDnjKhbxx6RsY38Kt12RDiNarFEk8ySzJJueZLzrhCthdfSNnRFua5EDuhrdDXGpYiDT",
  "key25": "5vYyHj9eh7hnzxm7tDL19NbF2gM8WMrmQWNudKQ1ZK4j2kRkAUVtRr2n7Qu5ckhT5HnjmQNKSdxWZWHjW6Xgiv2a",
  "key26": "4vAq4efEhutCogkBJTWZVCMaGhntpwN76fqC56BHHLJBXvPdbG4cMWh3FU4VYAoZHAmwPbLS1gVFgYJCXq9JmezN",
  "key27": "3aYARvVZX9PNpNNcxhnfdE6cpFK4ixrC6hXuSgXMPU97R1P2RmuzAnt3P7i8k5jagv7HhrPbMhpR9v37DLwkYr1t",
  "key28": "LzTfuP73YcDCujBUihCAVcEcf9QGgWjEJCo877Xh63QVCadHFcXAxxrqDoDjBTKNjhnBEneSdAe2v1zXA4MjeVC",
  "key29": "3FJvtXNzLxdyQs7kKKxn4wiEMijLiNok8TPxz8BDCgb9bh3oHsbBip8mQLK8YTFEFhFpKJLsawTFUBc9DAjrxzs3",
  "key30": "3zVgA4aJ9GWVtwtN1hQnQ6AVn8sn3bpW74y3xADMgZKvG3Tf5K3ViEtw89Dxs68JcPLssPmG3mViRcTAwxtDrCje",
  "key31": "2xwtj5ymf196zr2Tu894Uihyotq2bzx37i2j7wHeWkYkpJNQWRJhu8nWK8ydzcT8R8HZc3d65hzN32USTD5jW8uc",
  "key32": "4yFKxaBgxXUAEovyiMwcDUyj1cmThVrKh4jDTtVSq5FBTMYTP8ezK1C3Mkr9qvFPfNVPoZsG5459vBVqtUPuBGUs",
  "key33": "5ZtkDc3Es9Li7eZTT9yD9TQc6mnFLb1od6MLKhxQTBWK5f5Twgiscb9N5ofWedExgdv9S7J1BouS3HmLhMyPZZNM",
  "key34": "rnwwFiguNUoQgMMXM2DeUMyGVi3a7q1GQy2pEfUU9hrc4ncAcQDFsrhSBrY8B5zWmwdADJmF1bUyovJJB3mxmeL",
  "key35": "2shiWQmj6wcVgRWo5ZwAY7WnzCFR9CiqqV4tpHa4DRwEjU6AUCiJM7pbxyt5kmNFqqLKW6oxVsX1KkPJZxwSFjPF",
  "key36": "FvvfCSa5EQtC3iDwvRtB8wfVHGuE3pJ65rsvZaQ2YqK3vKRWoJoxfeYMFeCLzz4JuRnyJ265abBBFVCoF4xzBMv",
  "key37": "3538mgWnSAtvNVmx1oo2P1fJskxy9ApZG4Tj6MoJt7qhgXDBAXRHFgMXa4FpEs6MJnUoVSKko8k8LWuvctG8jqM5",
  "key38": "kji5nZenUsUsnEX9Ei594aJKQXP2tVGu6mezdphsUaTWGyT4rS14emrw6gXwUHi3aTVC5aCmVZDMMXRMmnueSnq",
  "key39": "2HZxuP6QywCJscUqzt7XeH8qSSnkbhJxEcoPcN88ZozgLetAzCE5KfwzfbnJA516qhNCNGzeJUeLK2pyjYwMrmBd",
  "key40": "3pCMxNHacKKDs5vWRdp7TRiX3rZQY6ZjVTeHZxbvRYqnKipkaiPaUjF5WCwfWqDCd5y4EcEjcCMH3n3bc1rnMe4d",
  "key41": "2gkMyCHXsonDreZu5Fmfm78gVGuQ59kdwj6TDu1phAJw3C1j8jjmAJC1CcgTQfoZq4NufuTxATyje2eZzJyXo3HU",
  "key42": "3qjCQXPerMksUams1m8NiJg3y52CGAd77WjQP4NjEJqoHLAKwj5WjW8TEaxJgXHo6gRgdhfa4qpabW2xhGMsA4xP",
  "key43": "4poehgTE7D94zYenX6ydwZMhWcVpP8WBAWnarv5QBNgh5BjmSj4feMa15SSgamZUpdWPWwqTr3ZYsyLASDJ31MUg",
  "key44": "3CcuAQVvteoAdyyerxtRyM26UejGianibYuS21SK558BendkZ8SUiwy5uMRypK8HsyBau9wWqYUPcNosf7dvNRPc",
  "key45": "4RQmwneqJScCd6gBL1aC7F3Ag9MRjAx7djousDPBVf5c6Fd3HbqmLYFp1TWh5TKoQUgVPw44UxSxEfWAxpN65ASb",
  "key46": "626EpZjUYMqSepNSNtCruH2VL2bMHwpDCfetHSC23fADSJy7V74QsHpTdHtyj5e2CsbGHqEBKpiW61sJ2fetZH59"
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
