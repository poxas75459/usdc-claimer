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
    "66nwYw6owUNhfoieDypu8p9AbyvPPRJc1Z6Z5hk4QJ8yxusifzQ23YHu4A9TmmdYxR14HLJFVfQun45V2JNnjt8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uKYcSVqDopdjxduoMb9gmaWoMZwMwLisp9c9sTEnwnRP7VvvPnmEPUwhvni3CELawhEbhHn2FXUFXwU15vLUjGZ",
  "key1": "H2ZwDvR5XEtk44vaQRfFcvX5nVC5au432i8oj2FZdqvxtsgSgD6aDhRkktcXGxZdRibcEfdzTXDguLbQDr8Rr4X",
  "key2": "5PGwErh9ojbyRkbQBftRN5No7YWFkGd3t2rQP9oVvfXnpdMP1iAGi1A9DFP5hkEs7bnTNyrPf7DFxPNe4QwwpAi2",
  "key3": "2MdHmCjo8sJgePWLFZGsyQc5eKTRz8tduLdSdY3FApCoAjnukeNmgRiyLLMoo4wHB1KLseFppxTVaQpLKq8i82jA",
  "key4": "3RxEHm2Z6rfN296PQYauZ4i3zXyXNbXFthmhwCNJf1AFfsCoiikfPDRj3Z21eNmai7eTF1yskRrdtr2cW8mmv45n",
  "key5": "bhCwkzNhDUn8LsHWNbXp88zLdJixin8CxPeu76SnrChRyov18D8vSJh8RBoeL6EVrbwfmWNBucwh1ChyHhTNj8h",
  "key6": "3VKC9TTap32qqgWk7tprRnduZUkyHEr2mrQctkBr9REtTbAf76bBAZ9ELL715cYXDtf4A7AfWnm7ayU2cBBvoDnH",
  "key7": "UKjzvYpRqLWvF1w3M3ixkcz9aicJsPV68dPnxgJzWC7kARfmcx2FzdwjSjtC6o4JpvyQ7oCPLNMS1ckRepAzMCh",
  "key8": "375vuDKWwDpjofRtgNcSCXmP67PMEP9sw2Q3VkcUYZ1STqetJk9xVwVhxJaxX6uYeqTZHBVrmRzpQqz1VaGSfG4Q",
  "key9": "3Cz3s4B5nsqJyE8TqfhyzCEaF4rQ3xvVrSqWk2U3nmWrKMLpZnyZhe63rqN3Yf2cXeUa4THLCsxrYEA56XmX2YeZ",
  "key10": "65nSmibuUrbYgkuTJUuoRVa1YuRaj5d2kHUWEgCzQMhpA2y9Ut4bNJksJVASwkxjksodxfqxgkatptLEJyDDTzWq",
  "key11": "3HrXsE9tH5qqesbs8HxxuhvWnf5Y7RvBDkeYWLAE1rY2WJZnwZFGpUzyuhu6oKaBcwL4LUD3vAueJfxExWuPgvFF",
  "key12": "5ri7UKrkwBtjGGDYjnNFXb3DgawcjsJbKR3EBeDbk4yFGbLxQuZ7ZAFWiejDrF1gvVeX3baYcYLgh4rW3mrm8SdV",
  "key13": "3iNLfDSYwPxSXJkikYtCAzwGMfpNcz2GB7FVbaQ4AnaaKA31cqeeaXT8ixEiP8je97hdru3rT6DAnprdbkjq6cWh",
  "key14": "3PLRzvYDviM7ggGqxRPXAtmrRDmz3mgJvUL6VJ6pEyarS38Y4hQwMDUJSthpH8FMico8ziPa3HTwP4XwynHNk4Rj",
  "key15": "4VFJPiqsriN2DCLNeFq568pdmmHg1kHSsRLT5qbmydynxMpYEpfdiiiA5uCGzgKCbd7nAQbjHV1umpgDLsvBoyqA",
  "key16": "5iLKURbUL3NkV7NCq8exV4Bs5EN7Kj4RxHxiNPa5iQ2TYKWJ4FmicdeXzjeZ2MGjhbcHderxKsoLta8kJET9vfR3",
  "key17": "3e383Df6AYBadUywrQLUaYZqec5TWBDhmycHNKAwDghXEznmoiGbwKeux6najuq6dWdhoWreNPV2eqcJa3EDjFh2",
  "key18": "dGao6oRfM5JKZcxovX57caFuvFv3a3kNwuGp1rYpJRD7qTcVyJesXqBaHGjHsH3i8sUXvSbdi2G69BpcFsd5zsP",
  "key19": "489fgr5g5BWuUGMVzDH7fXBsQYaPBPv12Zz254RNT5SNUY3YW1PRjtUet1Jt6ti8H9rbQTXCdrnx86izPLJgqTZb",
  "key20": "4DYhE7xBJm3az1UWR7YwjcPhMmdhu9FLxcpqN4wgjKtZn38FgYcSo9LKy5J7WZJmbRoMNvNSKQAL6CqaW2fXKatj",
  "key21": "4dtXARvAzR7h6UjvmeBtAiJi9bALyRwbS1YSnnX6TWNYEw8Z51cG3t6DqfThhQYNRu4JPBcrktG9eWZtbDhTwvPm",
  "key22": "3ARCYybXxsdPiSvCgqFZnUf9c9PgQADmmRfpBsMVQwXJ36hCEJpvAYiSBqMhvCYLNXcXucfe8oYyt449uKNy35gq",
  "key23": "2oXQUYYsZjf6BtjK9vvKQvLzTCSYty3cypAg8MHQkdRWXCQdbpBsY5Wmvxr79aru6UVCwsgUaCWG2BUu3tVAeGB4",
  "key24": "53Pbxai8xaafsKQj4qznouMdHMna75jRBCvUeV9LcCaAbvPJfioYeMdqNBv29cyzwpQyLMy9fdRro2fmVNwwxf9m",
  "key25": "4KCWXsC9BxKMwnRJxDbjZgtT7jrW9dSrUhCiQfo4tju6mPpfAYUPsipeJmFRpyGZHY6tQYujQVhzDCQ1D8zfRz9",
  "key26": "57z7TEqPCACjN2BDmn9NGTeYMHCiGQXvwPW8hSYXVxijVu76BeFMSrv8BwvYN8tUykTrP1Xhtt2XXE1Jomx4VJeL",
  "key27": "T1aYERmfWpgUJbE5YXbQxaXg4mvoNZMn2rRXRaEwpgRsoSKLQpnkTqCwtp4oVVEY5zuX3Skm3NV43kL4HYBREBX",
  "key28": "2dmHdDTzPbhZG4DpSKKdULBqd7CtrHJoH1LZrSw8GEmnB35ZvMGftCusz3ocLNdgaViJoGD6uSLsU7tiZtc8THd2",
  "key29": "4y32uL5bg7gvaYPadPe2cgC9iJP9mZT3SDWXam4R2RKJRLjxRJMvma98ygfXH2bKQYd4zJWHKKPCo4RubHMTQUzu",
  "key30": "tQg8h9HsJos6CGkeWGskyaxE4SBbcUrph9ZnyTwNWAk2fC2vpXGV54woeNghvzeVQZv7hpm9Uw8aevzokAodEx8",
  "key31": "44au4BA2jyKPhtemeHLfwBjY64a46p28oYakGukyPMc3tTwPtRdyK76akrxA9tZnbMC5fi4VHC1kAXFHfHdgXqK",
  "key32": "2ofa88GD85JBfJnbmgb27kQeiJwxPPxgiNaN43B1U1JYte6a56wD1k7SFbpNrAtbj8VqdfVNH4qKp5fVVNiQEgjE",
  "key33": "5WtgqCrMFL39BHMtiEQxJgxDaLdXcT8HuksKE4T3u7SUnpTkV4HythJU6Zsb1cr924nFp7mT7oG4xjyFAgVXtR69",
  "key34": "s2hACEQWoWKhMcRWnrpExE33BRa7zH6pYX9z8rXNeLYEq5QmZaPjHmD48aJe8DkdSgFexKyyfKDZQKAyMGAqCAt",
  "key35": "5wfqkz9bQ7W4UCKLJ4hPZa9ZAEszMrY8ELC8fhyE2FCPEKFAaBEkVBKo22VvimXYzDsK6k9oQc2bXZqucdCrfrmC",
  "key36": "FRDm6JYB6rNQZdMZSQAiq1YAmijkWFbLyw6zs65GidCD7EEhsR3i2TKSrHtPtLPaiQA9pCLDW6F5qeEgRG8NbHf",
  "key37": "wq6w4nUTkSYcpwfgMcngsx6HkUHp4ar5zwYXew34z33LLrnnJuPnLaVgFDfXUtb8xKjHmTHyYLQGuYSoPkmdnBM",
  "key38": "3v5e7Te5SpQN1fPVMLKsHM2zuKdTCT9MVk3cWoGeSFfTxCB9QTp1CmVdHFxaxaukb8qhteUYhkMonQ2w2J6WoXjY",
  "key39": "zcyfrHGcpEXJmRLqCe774EH9AmyHXkFRCmqciAyLC2YYyPz92nhHwFGSJ5UCnBR377LShLhWCXDdmc71PTcSBZP",
  "key40": "4oBsmMFyZSRT6EYgoSvw77Ar2y9gzv5JiUMHq3UBYm8hUujTjnad2JA3sfkFRLmSbSMuj5Tx8oGBFMqATGB1ZDaL",
  "key41": "4cSqir2NZkPcPDRVev5pUkKZFyvdZHRWJ8Y6QqxianbormKgZNTDwFun7qPsm71mUqoYMoJPQg1dHuYjh7ivzb8w",
  "key42": "HWwMHdkxNBuDEN4RDqQ4ctgemsWrjohHEdcVe2F5rHdzWtB7r6pwfkJmWv9wMaWAXextemWbX5JyDMP3QmiHA1h",
  "key43": "5gB3Pinr4Z7RdVrzFq1Lmxws75iL64Vc1iuDrMPQxauXiYQFmzqW6TSgUcaqUMR8v8no4zoQE34y8hPGxChnUYee",
  "key44": "327PSkAXRTssEgbemoLz7EHFQQi4mVDpwBuayWCTwXGFHKUC4YcKfzmpZ2tgZuz5qeE3EVixXmPwDRmBSp56GvGw"
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
