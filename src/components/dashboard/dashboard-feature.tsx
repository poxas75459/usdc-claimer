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
    "5ARnQJ7vAt9TzEjijhyrUWYhTguCM9wagJLiWUzwR97PquqG3v7iBhFtEAq1B1xpSFqkdCBVT8fQRoHw8deeZ3bS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NpexwdPj22rFJq5GqSH9A2Jyxvc6wmiWmgbanNaYprpT2qxiumucvwCarv7xsuFewr9nUPk4U7wEWifiKUS5TyD",
  "key1": "5nMSirxUCpyVr8ihtqj8q32fR86JQC3B3MsnMJaoAwMSPYMJ9omUYXP2PNMGFzq5ogx8FrPMCb1nNqHCof3BWuH1",
  "key2": "4WqFce633ivvUiTHyAyrae4MRfDiXMpqzduZibPe5vDhXpPWyq5TkSpimFdP9qKt4n9g1nSrJEQW6vDCknLBoWxy",
  "key3": "3JMFX93qAnQggzsnyHyEgycFCphQD9EDrPAXgfUChTH7gVwNth7GvYygpfStQ9s6tLPfqjYe7DfDVizJdagbcksZ",
  "key4": "Timc5H4PmFknoiPkHm4k5X6vKYk3mJsXcYna4xX9Ai8aed863dB3c1xXLcQzw5H755KPEx2SrdLV3zrDfUECifZ",
  "key5": "5LSUzDKmYhZXjHVgKarDUtbjKBk6iZmQjoF1Ckcv82TDsbLtZfbvR93a9xkw6tEmkJok7oipkgpovoA7jzszt1Cj",
  "key6": "54jwWxkdqkixMkyCs6mcByh7d114LvreY3QNp2s7qJ6SVJiJJWyvD4RkZtr6a2ws3VJNKib9EUVAt2WmpYtvvd3W",
  "key7": "CR9oRmpDid29S8ivVRuYxKzDCdpLyjSh7HTXCLT6sjX1Tf9app3NHNN9PDkDUhdwqYCo2HrtCmF682kwFTMDTHN",
  "key8": "57euFmvDLUBra7YuM56iy7iV2pMB37qY5dnPk5RknURnoxEegrHdwprgyqffen5ysgzwnfviEzSECtqKmmkKtVYw",
  "key9": "hzX1pdv6yGfCUf2bkGi8BwW1NMHZ3eaym1bQJrXg6uAiJMUChNoR9K54drsmrBNqXM1Zrcbq9TVrCKj13xs7aqs",
  "key10": "4i2AAq2eqiDrSUkA2a1wTnpGpf4KudFbF7PaaZnecdFdNfjVT11q3bkabChMo2qcT4V7tUbBo2x27yCG3beAsCTu",
  "key11": "3U18U3JwhgymBxAgg9GrQFwoZf8NBMxQPtDPrcpu2Z6CzzN1LHJ7x4MJHMxXMD6SjqTmegSBG87zkCNK7H6ddSbe",
  "key12": "2gTH3heHpjdoHmojMmeJvwgoZzLcYbDH47TuPerz1F7KVhNUP3D8PfgEW4mgiUfZrwhgLFKRCnV1u4jARKmvTZVm",
  "key13": "5F6c5LQkY4KqJ1h8G6TjdY8UEErubgbfbDQ28VLNQXuLoN9UQaQp1CnhMktY6uFw5q45rE2fXfTJbAUQhxnKGMC4",
  "key14": "AyPBvoEhU7YdjvG7RA1zeWytUHb9Wk9BpLhGpNJ7zcwoRmXCKeu9JQ5g1vkQ19eNXGQ72xrLvB1H6oxe1vZXkEh",
  "key15": "2yCeamwUXRvkMtzqHkVZnhLwiPGq8zqSrw6MWeNJcxc7R2cFAJ3dxphAtuGyvpxU13VbM4tkMPcVeLvmqaumxZwc",
  "key16": "26SbckHruEgrgLG61iAxeGL695Rpx67PvSqpDAh6EkP9PBTvut6KGLBikUYQ8DcmTNbTk8Kqpdn9uLGx7dV8CeBo",
  "key17": "kq7M8toxXxdK5hhETVufvE2sFyHa5qek48Nn6eyD2tuEvtduEapRvqPhvvnFxKXnHHTG1c9BZpbdeuQh8YyCb4P",
  "key18": "3UyrtXsgrtPteEtKzsTqqjG9LevWx8Lrsp1RYcPfwxJ5zzzFXbmUXWRvNurMH59wssybPmSyqkuVWXv5S4gmksr4",
  "key19": "3cXty1cyGcM1vbZGW59nGLb9gUdHBzHQvXdZLToAMdygAJXYLnRHGCs2iuzybJg7VYFEur7qgsWxVHtKK1Vd6SPB",
  "key20": "q8TaoYePktNFud5TBud5hMtZu9PMgpmzfxp9gWLfUt3K2hteEKgzrHga1hQU8ENwqoXxHcz1GgLS46msmcNwmz1",
  "key21": "4e8RqeCdkopKgqCyWYmhxrB9YZF11Jjg4J2xzNXNoBGAmb2UrqVJnsKmy1Mj4v3v23c58Kyx58yB5Dc7Hm2enbbb",
  "key22": "37Ao31xv7RX4fgcq4Pehf9psFN5nZw1bU4wcdiEnY1MFZEavgAnZDgBTRt7Y21F19y3EDhcgZBZ2ZuztZU4qUqX1",
  "key23": "5UP6DHy3noaCTvQ2eYJkQ9hs3TwBfFkNJqviPuQCqSLmxMTF7tvyJ7AHwuhuBPWDVnt5JnWVSJ3YFJYHkw17Rgyx",
  "key24": "2CNQoCe3iezxVVu5HUJB8nPURtmk1Mjz8ddopRZs9TVn7YwpoehgkWf1PY5xfvvGbPrZ4NJqs8dkCowsbpdgkRXv",
  "key25": "jtTiNHU3X1y61VWw4GRCdWf7JYmp9nQszcJREhmu1oJYuefhR2skiFNM44JjLBHURMHydq5FBsANH2gq8xVPcFP",
  "key26": "34K9FcypKG9CDukx8ee5vLqBUhgNkcVvtdKuUj8kFHESVuYYpLEsJ6R2Zy8PxHCx3reozLkXMd6LUDRaA379EN3G"
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
