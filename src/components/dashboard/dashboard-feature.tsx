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
    "5g1gowVRk2csy1FjAQLSMnhZTyG3eoZ6q3z3XsUXtnVZKBtqBiYYPL7M6dSJVzg4FFtD3QvuXZzuYs2Hhb1NuZNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRm1qTnGhaz3MHtpJ4KrEkoYqdx7uKYSyvfbpXsWZyNT1PMcKwAcYTSVF8WzbBsPKE7CzAeugDsCXmeVvSYGcCP",
  "key1": "ePBZmBy3F4TJoETtxJyB7CuEVbXVw5ZrMFx4tHVuGCfX1RkWinzCaKxKmvAhEsdM7aMLM3QRUqfY8xwPCpEdEKw",
  "key2": "5yuftKRorTisG4qkPGCzNkiojxYUpb3ciSAbDYqWjAA1Jb1pfMoHp7jr7k1nWFruadi63oza7Za49aFSxiNJ35DW",
  "key3": "oJGPBidB3BcUYKUka6fpZ2Y2XkC5MjXCHzt8EkFDQdPD77ogLzXf6DsLJtY1bQtkmDs8DKmTJAy2m9kXdaQiy47",
  "key4": "35aCrQJc3DZbocYi4Ws91RPVMUaNatgi5q6hD4bXxue12NAprSyYjvFDdeBXx2ub9AwXMBSuHoaoVDnqvaByaG2f",
  "key5": "3MQKKueRfKe4FG5Ussx1vNhQxTXRT4uvhb17QwULheeT1P85kzqsCQLEvBc6D4K5dmtp4rop2XaypHiFJC9BT8rT",
  "key6": "7RwWDAwRBupPwWE6awvTVwd1M3DfF4PgSD4KTE5TveoVbSThTWfA4hBbGUh6k87sWDfmkFQHLipv2QaEsEEHVm2",
  "key7": "2FXVyVi9YPCTrVxFqrvr3adKWrNAdZPNGS13n4otq1PW24QvioirmKoJGN8nGgwyyjw6qjJLwf7yhbgr3nYshF7i",
  "key8": "4A3f14213ZqyzCBcQxhXDTdUDEnsXDBhhDFx8NNGk7QZJVa6h7ME9kTy5kMhZdvnMqEv4g4b2LFurzMu5WYPRgDT",
  "key9": "5f6FpnuEWuTHGgMZnPDtWLHVyAYJq22KPYCFm6D8fHPsmiwmG7giESdipDnkKLoyEvt1DKi7R4CoytdP6SPudiJK",
  "key10": "LAZNkExWjGP2m1iPHuf8Tb1CigKgFsFZewxZiRRVBpgwUyp2pfNW8EXAejMmDCv4ujcutXfHxiG1kdvMg8qjxkQ",
  "key11": "2AxGUVTRBDuPRDrG221o2Ehz9tdGMLYmvYHnV5mbdxxtdoH4rC75KKnokR81TVHTo5fx2goUfvFMiSb7LUVkTBzi",
  "key12": "E3q3EyUDtx4kpHpMa2m4Q8YgZNCxrk7UqNkR1kzuF8YckfSNyf6cGmS9hvGtJATyhpJs23CM2NCyow29umsrCQ8",
  "key13": "21hkHqTtaErg7tLdBdsAXQ4JsS5oRPN2QRkbEERHL9m1eeaDDdX4fZJd2AZfdtW3wMcd4WAhHhb9LgjyN3yUw1Sa",
  "key14": "46J1xL6WkYHKVngitmcDsT1zwB8rJ4kGc3iYrBS3LcnCA5DeDNsXynVvYme54FAVEXx2PfFdWWdWhgftupCcqTm8",
  "key15": "4oK7KwQrC4Ekgg45Ju5WwtwhR32PhRp2MvaT7Qi6ZR7KUS81oxRvs3Q7FUq5SiEs1y9CxKKA6iPVFvjFDdcawgPE",
  "key16": "3C1LEmJ1KCS5R22UcAS4BMWrgkxnE5t5jbYAiKG5yJh8LEEvGNA71AMTQydckkSqDSzMnRAWmjQaHrXPb2TtuWhy",
  "key17": "3g4GxfzaAGu7JQpxHyY1ndMevMcwHoksNVaBvNGkChhDMBbK33W8oWJor5jGKGKS6GeKiKwXH4U6Wha7TwdRtFDd",
  "key18": "2GqPk8U3ybmfcgyPoJmj9n94aMiaY3BfNYmGf9djyqCzt9dEfDBoGbwczpvZKraciQgjDkJqw1Q38tmL4U89qWpR",
  "key19": "nuQkeNhZoGvgAdSFLu2UTQqL77A7wGSXvroeGCse1YB5YwsWBHyXQzursjTuWdc6wjevjLGjvN6nZg5NFWMDxz2",
  "key20": "5iCv6g3pACAk8iR1kuhXSKtCHHedfiqXr75b7oVV2KHc5RkJCrwwRePD9epSPDYMMdGYs8FKXq8961RDwhBJ4xs1",
  "key21": "5TKrxUpiEF5jhtCVSNpZnXcyL98q9emsQ1r7HrXZQisw8twUW2RefUiWrebUnacwubGvvXxSuym7tC3k1fk9GD5k",
  "key22": "2Rvux3nGtDUhen1X3YGW9t5q7X8SKyzLSVrAivDmWQTvCccoWuzwcPxjFwFgBc86VRZqhmkcumiojMDPXLJuzt8r",
  "key23": "3yH9ku8DLsBuM2drRyt3PZPsvFbDW1HBAzkt65hyQYqFMx7Yw7nx5D8oSkosvjDeBqWM22QtKsDGyFocJ45Zfesj",
  "key24": "5uufNoggTqLLyyVfwBzZnQhhEnv2agB5GnrDuMbFPPbWMpKUD7xFP3FrMds51DUHrr3XiqDeTgR3Pit35kY3XJ47",
  "key25": "taaJ7ara73VPEbxtMJPMZtkeB3GwfbeCMpSXhygzD8HPd92o6ennY97QmDok9t3JDDqjcE38A8TgHGu1zKAvvkr",
  "key26": "4P9pCm5CS8WBdgQq7KTaNv92hNsogRLCpKrYsCzRyDfAr94nzQ46bLspTYfkaiYTDubvKGgzUe4L5XSqFVdj3H5z",
  "key27": "4BdFvzjD6PTXZeFwEexxJ6x3epoAmokAH3uG65hm1E73nT7tZiYiRN4qZH8JUmosxFHHcR5NokQfLfucd5qruQe6",
  "key28": "5afxTLUBCFHMdYiXzsaJdv2gn6xgX49e8DSfuu8WLwEmfxB3riVaPt4NS6Q2SboBbKeBVvNKjDrMNmMUwfv1i2hm",
  "key29": "4xzh5u56VoNCb94kY6TragutqbWG5B9k8kXyJJ8uHd1DsEfjuPAj8swFDEFJxRoa25CPhY2biU2bGFsr1K7pRbze"
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
