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
    "3hi778F75zfUo5gkNeYPiYXp9xJNCUYEvSASn1VQTeXqBD6kxTkLdmVQJP4ZRPKDJqtRBPGLsYKfANpjjEKwdHiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EutgoJJvZJpUrtCdFsftwvYNrw3NjRHvTVvG6yunzfDKXAGQvwo42Z7Y45wFicvN9hfEsvNUfFoXQYWJwTcPGxP",
  "key1": "jhDkPjdNGV1DDuVtLCwvHvXmhUuaykqACfA566Nod4WmbAWvNEfPU7v7SfD6NjfKRBchBskbsySkjygjUmqtGAR",
  "key2": "4tXyeaYMrVqNnXraG5oVUG1r1bp2WZZ5MtxaomyJe2rUDEATiHZH9XrQNMdikcRJhKAWDiYVkSjRhkRMkQAFPjNr",
  "key3": "5uZrmxXoM2ge6wWXh2EHCtGpUCx667zvPdhw1unAYrLfw3WVP8NJEnis7xuvG95hf7rnomd7sVsdHX3BY3uWM55F",
  "key4": "5DU6XSTWsM8KKwmsbwN6b99aQf8j68pVcoqB5mhxt3xkxe9cWSNpwnSthYUpLDqyD9t8LuZBkFJRfG8Yn65cwUck",
  "key5": "p9U4KuLm1rh56dJsFqTLeWyPxpkwcSz21KfmtK6aXTJUwDtvyWakMSuLRYfr6L2poP9mGJrUwmJS5CykJhq5oJg",
  "key6": "asHHjy2ikwuhJaDbvnNBrK8bhg6cPw2r75ijRgGBxUCsnWUFohDHrirsAX7R1BsKFwcLF532XoodpTbbMfzvuyo",
  "key7": "44edhjH4t7GdcY9VojMVALTowBoyMYuV33u7NHnxRmnQFcDAdyC4mqwHKst2hAo2uTUp1jtmwsa8D8sUqkRJdJvk",
  "key8": "2zVssCS97NQMBhLGUCqtCq4eU9FsogZyN7GH54FBGgu4CBJS3PzraENFFBkwHADLrcrxiiafzqjytDUz4tcfoGZf",
  "key9": "5Tx8opzNwdemi344KAw7ySCiWJkHnf1mqSv1Xf4SCaVQM6HQ8DjHTB6iYMsxLVkh91jAee5s7EuLMmbi9V4SYuZN",
  "key10": "2JXAuDPAeWEP6MpZCkDywk5pq5D8VwKeJFckwnuUcXj5ArV4z4yGorkTBMvZVSW1EtuRFwmCyHyunABPPg3ZSLF9",
  "key11": "4DkhwHSWhAxHerGLc3oJbwWupc4thXaaM3YQeB2soTaxxr1V1HQvz9KbZxwneNhVmJYkrmp2Bmem8TyE81MX6piD",
  "key12": "2q1CFytAqBr1qniPS619MYpdvYSHv2SJkikEixMbSBR6JYF1K3QDSw1qhH8vMB6bCSGAB6B34ooztpxGqtwaJgB4",
  "key13": "r8h63QFBnnY4WfYLbFR7twLL75Mamu6BdkZ8E7vBv8PXUqJTnKedUZEKvjAtizQ5aaQhsYGJeUTdr5DHfcPB1DE",
  "key14": "3ZTVKhbHd1xvPAHTXzU9T5ybEmVZVRqm5MhWjrrMscxcXZ7h9uQhLXA8kRXz5zBJXUWZTTG42QrBQ3xw3kuNxgLq",
  "key15": "4QagQetNrxzLUam2Nc1VnZxmCJst8NmTaRixg78SJKvS5GyBDS32zyrXmQqTzmbC5jb6pQS68QoGMFhGNGBZrd4C",
  "key16": "4qyynMDc17qrN5emNUqgPLiLr5cJmyxuE6Rj6LofC1psQGc3bM9Q76Z4dLurStVkjPTQpBehHZmT2LvETSmsoEwX",
  "key17": "K5BAQtg4cC5UhBqzWK6iKE2bzUCB5FdF1Yibgz8TBveiqPoAUMC7VadjHRhD2vbbMopKWDuDzayEkBafz9vDwDK",
  "key18": "4nA6ZRudPni72mhDCydVccioJSKLxaifnD1pyML26QycP3JHUspzhP5inReYABX1T38WBy7KLTCySs8YmNu1pHsc",
  "key19": "62PLGWVN4MiXa2DXDkHP6gWppRXZ4uump6LDgbyGAu6WTrAwZeH9PcRscmx1KRqPAF8Cicyj2pVM5ameaALTPB4p",
  "key20": "2MDZCafz7kp1Br4Pn7dpG8hsCW17ZtSApt3jLBTV3G4Hu3asDdXdyUZdTFPU8WMkB7g3faZDbXAKvBqegB83f2uz",
  "key21": "4bX1cky6fTqKmGiHsN7MG2TgX5T1Jwkof4Qxnap4S4R3V4AZESfLAwqeudXWH5meduCWsVLEn7a3HKCmfDYfcVvy",
  "key22": "4AypRgz7i3LQLdv2UENSsx2o8mVPBbUUo8NLy4MADr5LYicCu2UHbQUC26kAd6qtkJSfVYjAiKYUByDUYiLnt3ri",
  "key23": "2ywmJtwr4dZqyrmyBA1vbn24Pqq5jtR8Rh7UAJAabTu1cgsJJY2tcpmBDZ6m5LbG1WKgQJCdSsit5wTbGgEb6pDc",
  "key24": "5sjdrRa7YSkg3ZQvxaFz17WMfD2i7GxfePniQ7BWZuKDDsHdtcFgALURfhUtVigK9z8UhdMbCdiWvVbhDvbU7oHX",
  "key25": "412ZQGgKNexs9YGfpHj78Nk6dWP6rYDX6Z8iFGnwGwiZVtNjYyWZxb812gq6Zz1JTDMqiNmEJgouCMQn9xsrMqs2",
  "key26": "4GAoU2ynAh6ncgSGmKYJW8jMLHfFkn8Cd4RH7YzusK66xgjJSsk6aKGjGBMSjK81hgPED3CCg4yck48dnPXqanPF"
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
