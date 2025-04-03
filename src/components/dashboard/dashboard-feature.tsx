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
    "L6Xh1Gb8mCx7KajLmwHWpETydUmg9MV2jDyvWiZJ4R9f51Jo868knqJvANPe4XyEfMMuiFfEgZUeXA6He1Go8ee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fwBLcUMKYNgYMocitJv1oPbG9wHyaTqBmC6SBmvbHuhQQTd2uQGbL7pNdhypZ1iT5p1yHFPhtB2uzmV4VGTpMQj",
  "key1": "22v8Hs2oVJ9SyNrBx2eDZerefJy4q41tmiNTVtTk7kh2PcZtswTBE1ooP5CvMXJYZqXhq5bzSzWB52Xju4NmV3q9",
  "key2": "4N9TD1NnToNEvKih5DcrVdcoe1zmkutasRh6eSdPscazSumYh1v6Fj73Pe7NESaepjysbCBGMdiPzivuNRxWXfq6",
  "key3": "26kz5ZRxGGi5sUWW2UxXm41xzksjtjMKAmV2w5FsLnE2oLfxsDbebFMYNjjNk1hj3Sj7qF9kRsxrNqGdvxswsL9r",
  "key4": "yNwTMYbgyoUcPVFsWQZLHDNzcN6bTqvEvPRxMYmXB8DPLLhX7Ew38QKkHTuLwJ5JQkkgpkiZxVJmxv3X4AuDfq3",
  "key5": "25ZKMwVTx9jCTUMgcfVsYdaSpx8TTgAcT8yhqVHaKUFB2PFDZBE4MRnPeLEAjFEYJbCS3jF1F76dRvvg5Tk8XkTA",
  "key6": "7RjgdK7B9H5qYfHBDcL8eDomMHxUiocP4oxoM21HuRwQbVhz1q91BM4gMt8J9LL64gGC4QqVXnbbFv3HjXVFYcu",
  "key7": "iKndK9V4w6Pjbkk2qMLM3CaMBhknuvbkkLGeHqx7R2mJjZKhtuAFCBiyYg7QBrvqfHXcDPxtY3ECY126WXWMLsh",
  "key8": "2hMXTTEGK24XcyeVEqgVoHTuCUVZxf9H1rqbzTggE7XPSau2yW9hZnFZXDHP9fn9sWL2irZR2CyRuAMjHyxpD424",
  "key9": "22JPSjPqSGWSkMkpzoUWaz9Neg5QqGD5axBoiJ31hbuUZYifxEcKZ7h5KcwqaTaoC6fWqCFrVWKq3Rp1qfop2kcN",
  "key10": "58iQB8z4njnD93Mwuq6NTZayhSyrYjWftVXT9aCR6PUy3PZrqCuADjqW23kiU5xwsrVCNCydm3JoxDE8NxBKEEtc",
  "key11": "5dHLbv2oEAtYGLRd28cmca7mscMykzwi93YtoxT1uPyD3bVpsZRSZhVsN5o3RzMBxU5HwN6GkiejFRr6EN4ctRTL",
  "key12": "52oQvUxzCbot5sSWZAb6Asj9hL5Frnp6BNaSNt6kxTC22kJry591mvLTi8Vm2ReKLUpEBWCYe4w2QaH9VNy1bX3r",
  "key13": "2sBQxVa4F4UQa6r3f6xfMkYMgw27L9D97aP161miyRT2hdvxrqrvZYu4Dnto9fCN68uwYyjh5HHdfQHVPr1729RZ",
  "key14": "39oCxrBb4TBwcb7QsehPUnDVPKESHHVVvXf57yKNZxKh8WLEwQeGhkit4xa15jPyG6X8EhYUmatyXze2bcUbwQMS",
  "key15": "3hJ8uASdR5ugoruwBgyQv9edJUqBrLktcHsDN34cFg33EGX3rHKqv2h9ZsbNdtg7M1WbKhtsEncxzKq9QZzhwcTP",
  "key16": "4kXxTYFKhbExbCxvaM7njDTHsQVaeeTkRW1TpR1wu1SWCn6hQmRrhmTcAHRZhEnkQtLKKi3hAWK37SrPE2UERrQT",
  "key17": "2w8m49uZ2WegBNYWFfQMPSQFEhSPwGbQhCtGRY8LvXXx7q6Mo5obTzURoPoTM2qSu7Eh8TQT4rezGL2RRPKdRjWb",
  "key18": "4uQQn2oSRJ9feSh2o3HmiyVJPwxrGAHo9k2wZDYXVXAwtUsRLMdzepuHvDRh6KFvAZMWAUSWEscNkr9mgohWgGRq",
  "key19": "6423aGDpx4DZsPisLGDqJcZeuwPN6LDXJoEEJxd29HfB1LaU7aJYtDJwkA8k8hqMUrYEWd7z3DaGUkwXe7LfuPt5",
  "key20": "2xJCEDWxtVMEfrR5M4F2MG2f9sPwYPxoL1h4Z7NsPioWF9zWvNqsdhSMLSKhhLGdBn3rrafojqdmYPgDP4LqmDJa",
  "key21": "56Qwdi7NEN9u2VEMUWicoLEvyCfMQe7rVZP3NUM8U5nezok6LthYJg6hDhiMCXwfH4vMs2R7SNJ98HeytJxUK6pT",
  "key22": "41dvAGvkYTaoZQShfWqcxHb2hWhtRPT8bDA2GhaS5DjU5kppgVVeyDQLMZEjdChdnoWcJQDCkzUw7wikesqd3cXX",
  "key23": "qiSm41tB5zAN9c2pSteM6xeH9kMdcStk9k7PUxFyR8r1Cbgh1ED1Li7pVBQZ5pHgKk9feXv1tFoBxpYYLnpQtE6",
  "key24": "5tWSAUoncw88iXSiqQHyJtMQ2PxZLiyjVmAFw6JpQNW5b4AeNPPGAwJNh7XTGmHnwChaf87JQy3MC2nv8TuxmKTG",
  "key25": "4zFSYwedyeg775hrtJ5YwqhheSQEUrxjuHz1RAVkDJzgHZpoogA5KYuHRGfuLbJCo4ZMfhHMMSm7vayNdNd4iqjP",
  "key26": "ujZCFZMLWCLZMSd33bgJewPjQf1QxKwvRw7wvyaCvnHv4brvGW4X4uUuzJYyHb7P7EFJtbESB68ejQPQy1mKp7Q",
  "key27": "2odQqjjELwYBd6LHu3x1rAyVfLf4E9w7Ge2GLUMyap9UK4Ft7F68oeAe5ezpZawbyxBnZ53xYfUVnoJ2cXdqrhSH",
  "key28": "4ApeFX98inKH9J9mQG5stRVEkCjS4dgYZdJDr1C2FP8wN485gwhkr3vRUoAkSZEr1PfBHt9PJbHfoTzXZvd14GZM",
  "key29": "5fPiLLroGBACP2pfQMU7EFJuT7n5gXcex3RjCkPDVYkNr4iC3FB9fNZ38rZZBCP21m5vD8jJRmn3fy5nUbxYmQU6",
  "key30": "ApEq1sMruCunQGHCHRANG4gJrdXGzRo5BLWy8PNqYiXpqbyiwsGdaDQPR8JS91vMfcyD69V4hYK4km73gnb5ZDs",
  "key31": "4Arf6t45YDj3yUnt7fhZnepY3F7rfMpTBBVnCwD5pMx96cmtUrARjrh7d35hUZvKAmx3UBJvXkH97HxJfSyeeQeA",
  "key32": "2R4k9at3G6mjgWJx1bn8v4b3FNBfEB5jt77YBY7z4vXojroDKfScJTsLhitaWgkHr3aRBShcTTsQHt7rtCxTJSjG",
  "key33": "4nPvMtK1rf75SYdhCPqx6CcdUUAnDNdKsQfcAAvwpHtUsve6B1mpdZAeepNHpR8RRy1XAM2QjhVFEGHQwWbnjHt4"
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
