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
    "5EZsARGexA8FxUbPbPgrbefaD1PTRMRXP439LVbQjrigbVjj8yfV7suxhNT3ACSge4yJ62c8S6WRJcFpcUcEH7jS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3beK5MPC82DT9n9TaEVR4Bq9tk6KFwfhBYoyvogqzMS46Q1Lzf3KsQi9sRRBEt81nu1DDL123zWTeXBmMN8DEvez",
  "key1": "5uQ9cZ8jdPhQCY37dBjLjy39A9KdqEaYaf5jpB6yQ45vS8XmkJLJSL6mcAua4b225wqF467NPYANV2XKx354j4k1",
  "key2": "SyLkby7F5GaEQj798zQuHvFxTLv6NJyvzp65BCdMgSBDXtaWnNY7ZmZgbDknSoc5JRhQ6U6SktCpbis3Zjia8LH",
  "key3": "4s6eVAjofqiBuyYKHhdqCCU7duLoNXvr5fzppvJfk6hm6Ld6ujYW67ypdmVerw7cKu4sSybUpNUpU84kCWfPbJrk",
  "key4": "2LqU2fa3pNYeGrPbxvWkZhVSsjc8i5daDWUPUu5ShAwDQzs9mLwPCajKX1DWs6FkhCyUpeLQpYxDzM96mBgFD3Ft",
  "key5": "29Lho81QT8X6CkvkogG1L9g6S5Xv7ikFbXTgGY1nA2FEgzNjCHDAB3jbXqD4Wk2wN3XrjmGJoSgkohBUSVATBvBL",
  "key6": "66TnNryhxaVwhfHda8bA1c22ZGwqZPDhw5tJ2qpHuXxqSxa81skYcrn5p58NLWYpG8gUctr5MSFWTE2bX3x3XZ9m",
  "key7": "46cRoms6xSSYYmDk95iu6PnGFc3R3G8mTnMLowDDnqHAshR3MDbwvK6MomCRUEgN54rDJK5mquasN2NADieAkmxB",
  "key8": "35dHynsxBs2zdhCVNZJXYv4TomJ6CsY2qHK38LoDjkQSfciDVy21YL3Drouw4r8YbZkNFhu7rP44BM4AVGT7ateZ",
  "key9": "2HmLLQRcctAwkc5Xu6AaZQ4Zjo4YSRqtVSMpDuTgCiEgz1kExDWuD12BLNR3bvfx698VzGDQQpJh2gAm2JjfLxy5",
  "key10": "M9jJ3vLnkqDMEXEdzTGJ8f5SsDxseNbKHx21fcRh4PC3pTk8sNDjCDxQR86iiEB9JVegumaj7jwzBNEqJoDDUxc",
  "key11": "4RVdt9tu2gvL3RdP6DjpSMDuHLse5u1oEVjKEAESVU6mAgdMktfhzD5GAvVRthEtfUpC5Jhwe2rTk81zujU2nopc",
  "key12": "5WZJCtt4YBFNtomdW4oKWFmPNW4WYQbttADupPbfwFrtyN27Ymv7NobksaDheXhzGMYmJbGGTBnR4yveYA5pet3o",
  "key13": "5i8wkj4pSAZpYhW4kRpWG2DDX2nckJhzHhC3c7gaDfDsdBd9nFiU5LFE8LkHAaTZX2UiLihGqG8qARyURhaJH7um",
  "key14": "sxYzWR2WEpRchp2G12PA5YAb883E4SABoC3dpKtmBp83bnV8R8MBYcatUDhYyXk1BkVkSuyJgmR7ibnkihUCv1X",
  "key15": "3c7M4PERrDvP6hwEa81bDmzScRALWG7jCt3zQNitwfkhUC8riwPYqpz7HvWf8hYyzh8NBf8FB1xt3WEyt64YxdPB",
  "key16": "dFsg8KttuS1zh5RzQvhJE3LEVHGEgLKj7nrRbvJ6EB9JTnX7PNYP7Vw51Rt5J9A67oaEumrnMpHeHH1pvZmm2Ni",
  "key17": "3rPsUkWpd8TLCaTHcVVgcdgaeZN4Wz5ot6PE4aYraNmZ5yv9kH2T38ccuiLQt88QtGpApgQhtewPBGSaPbAgB2TK",
  "key18": "3t6g4TN1m1mGHCMXQgQJndaEVXk287yqBTnu4nufqmU4fRMpkkgFGPWbG4eooSDu5osURpe3DBV65Jv4ZhGdDtaN",
  "key19": "5vquuv9tT2pijdu9nUrYNVohEoK4Jdf8sKyvbWimcoRfu1S9Sp6T55YXarvCJBbWDb6bJQhuSGfsYkQFveeYNsQq",
  "key20": "58HR8k1Nxp5P6dcgLaigXxZGmj7VxhGihArRvsaGswn2LDDhmkNbSaTJAWTPGoW7jvRok6Y53nYKnPJGT33dFwNr",
  "key21": "zp6KnsfGzNFcvbQ3cB4v3DFET5t2tHZsmsrGsMNb6FSfniYc4ftHyRuTqNooGJQdrDkLVPD9F5JB3f1dbwygY1h",
  "key22": "5RkYTbDK2ACXcoHsPMX8knBkeX5FWb9eXYi6184bGpzajGw8zoPSEvEUrDSfTHjt1FvoqdiqmTYYZK2F7XE1Nj9j",
  "key23": "2Y5kde91UFQ4LhWxxNS1RTXDnNFpPEF7HFfPPyNRZH7b4H3k786qikKNS9RgqwjGQ8L1EwpT96C18v3fqgbjrpht",
  "key24": "5M3CBb9dk34hxMgFwhqLA5zp8UKtS4ECuAeuJfvEMYCSSyrvULTesnpaMQhA3Rk4ej8MgmaA7RcxKSmgZMJWoeXB",
  "key25": "3NzerqfnwLMhAc9s6m9ssHN6zSUxVJ5Pbxu8j3cPMy1u83n8CH3JmNkkZuMVhA5h67JayHkaXn92Bbb2CVxgzXgp",
  "key26": "7pey2DgCJqHSiEUgprLvW785Wxi3Qdu5tfQRRxVrFUxmwLLwhEdQEcyZSBsCr3GNZ8McGNeDZVHsTnUBAnwbG2p",
  "key27": "4CnoboSRoQvceRTGLtqPfxgeeGy7GVoVd41rhkk85AkzwE8PyJXqyPMPzAXJBwwyWEkCQck6ZGVh8zruPSw9VV7d",
  "key28": "5pYPA6WummPxqbKdUmLPhYzxMiPviATDNrBQ5qqPhrFNCmZ41Mc8nCM5743Bznw5tVpKt6Q664FqQp1FXk1AJEAk",
  "key29": "mzufoQEkFEWTfcYULvj4XPgJyGWmx23gFjvrFNCuQ1NYZ3M1fVkiQyf5nTjQU75nmtzTMs1jSeCL3ZNHJLGYWSF",
  "key30": "3TD1BnxEXSi6b8AiaiBYH3FzkdEQC5LLQqnRFszgZ4Yj9fQ9GqemqFobFpF3R5to7vuP1UKUPGnytrjkNxyvKsZa",
  "key31": "5QPcpt4oMPYWiouinFuHvojim3cMWyBsHagmpEeEQ5DxijF1n3X5c6ncbdzmmzQfM8QCWeTbmhEDM1KKURUxD4kZ",
  "key32": "315VXuigV6gJe7disHKFL548bCBjdRZVEvA3EwMGmjGKLzTRwkxShnpAPGoQ9sYWdnVL1cvCVJkgDEtTSD6DYopb"
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
