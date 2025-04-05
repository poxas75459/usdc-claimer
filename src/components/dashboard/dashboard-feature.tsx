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
    "2kNFYrS6zVAdJqoG34o2PVkJpTe4swoL5JEtXoLrEMzBDrJ2PaPRHXe3LxpwhYVfWjR3CnaoHhC1HdESZN5CEx2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FDaY4SSSFCcfAyJ9iZGBekvVhPSFf6sv7mmgHFcmSLm5GytHfLbTGywzDwoVKkjjd9X6TM2E2peJREHfePnsNK6",
  "key1": "2mnGE41yzPkkxmhyDjHeYxTF4dy93pbHyJJi4g3HjXtrMsy8sirKvyVGaLf142eAFcmgkzYT5CFcfjNDMaW1bZB9",
  "key2": "3wYC7mG4neKw7W8JW5rgHcrELVHGtondAodgMRPdC2msVyGDXFPfM427VFQCeqSePSpo9MWKjybTxnJj5NkPxaHr",
  "key3": "2UC7pTX69u19jCENq2N3DRvkf7K3gd1KPH2yhE7exkUTJ8y4vXtqSrfpYhXzCJqUezn4SCo8KSRhMwqJ1hURZ9fo",
  "key4": "2D249jsxBK6ATL8ut1DpEToH3M2qfLeZj2SKYRVd3BTAyCZZHPfnRoMZKj924CCXA4TrjYP8YYKAB6jLYgdzXKVF",
  "key5": "5wG7E34zXtrhTUHrSkPnfAToWsuyiZzetjwiGUR6Bp2hTTSwinA77fYbsuZi4J3g4FzycXjmtZogtruc45yB6Hjf",
  "key6": "JGX2z1yKVVvLARZ3HzPkZeuFnRwZ3R8XqDTq99vGbpy2gQuvDpNnQCfCRe27GvYKyPvMjCJ9v7TaW7D8kj3CVBh",
  "key7": "2WtwgJhNAU3wj51fXEmySwQuz8Af2FMHHtk47AjQjac2HLki86G4rCUwtTcxbjb1LqTXrTrFzfd9ZCXwDHpsg7qc",
  "key8": "62HQMFAjjA1GPhZmzPCeg52v61WeKjPkir1vhtbMawTJh6eRYsjd79c93vsFtSXzq2rbEGUWbQtcWuveWveRx6RX",
  "key9": "ZYbvNSj9tXeT52XrcitrmSc3UXXhbxTWq4S6NChMoEJjFQY2eSvsdf3UKSZ5YRSe7uspWuTZdisCZL67tyE7nEt",
  "key10": "tfUAuzNAteBpUqXoMiqThMAyfH7kt4T49RGE4K9DNfMi5hKRGdM4PjfV5M5xxZdV5NCihhfTkpA4yGg5tkAruQc",
  "key11": "N4a26BQugaJbSFkNxG9S6FQ57Up4Q45LiVirSVojWHgGbAY8JZ7fLUza627uvmLEy88TbjWPY6reY8BRuoUQ3LX",
  "key12": "653D6GCjXepVkiMnmnsMHzNTdm2pG3XoCGYwu1Ydb5tsvTuzfB1HGRnu5BnAAtgrZXz3KzEHMRaL8VJwvZzQwDyo",
  "key13": "2vtm8FHJjG4Zvyt58odrHJF9xP2ZtHQdW3DGoJZE1dKAtaE92jYmNeHyPjLfQ5RxhKggKrxq4rztWaY6TWqFTCXp",
  "key14": "582rxtzwN5W88GEe2at7GV4FANDMZx9ALrknQdX8fHvg7hq7VnkwVqi8xreySW1pbCxcERDXuyp8nxyw2sNbAgDc",
  "key15": "uSgUXx3KAi3UtbpRoZDjv4UcuzgW1HJL65RrB89FEDRbHhZEDsq6LfsnckXS5PgRGcQ1hr2A1U3Fh2QkCtz8PdG",
  "key16": "2JBNTJjkcPJzUUt53ny5w3TdB718jXpTSALBcqhmWyyVzC5KAGKYzjAZa1VuYpspjVjVcx6M3Nx77MAosVZTL3TP",
  "key17": "4UrqC1tBWTGMKZoAVdAmhVogVuaGFK77n4mgEY4wWceTS1qUTPcwuyCuDAGZiVkKM65BzmmwwaAPe9y2GuYPeAbM",
  "key18": "3C6fuuUoivL5JnRvtSApieisReBTSMtWW2nrHStzPfqrZKbV5cEBwrg2cg2LnWWRnnSkFoAJBEcEeyFArC3BtL2a",
  "key19": "5ZvrnQzSRExhYELtcBmUoaS6iDu7hCTsPkps15BWz84PZDynWSv2v21FitknjdUrh6ayiEhVhYTc7c1n4anLiPpm",
  "key20": "59LXqM3cYoZthD8s4xhg3XB3WzQR5EN9Ffg11169kCkcASyHRwFCQuMYg4953LcNvEDdkjeEm3cZEQn5PDgTLkQK",
  "key21": "5mJPbKSiHDnBk8XbLHacXAYx7yauLLoMTuRjAraVWUdjGBg58ucL6DZVZRC7b2qWrdHNp3a8qY5CoDNvGXrWuCGt",
  "key22": "5MMYsT45j3xiCXVzBvvxqDEhhvcF8FpY3foXKkhWtkjusMgtXHGZs2y2dcnTq8een4wHYP5uY1zDE5VmJrUXBtUB",
  "key23": "42bB2HYcsNvYZWBBKYrjtE7sLdk94p29Ldpp2XWPbtEG2HLjE17gLYQZ8DHaT6NWaq3QBWbX2RZeSP9gDDc1EBhW",
  "key24": "4fHTFUYJ4WsXzf4hMrpyQVnnBM4fCk6tAiu38APTyxQ4uQrSXQD2sdKeMR64tAYhz9aCesNroxpXqYH1zPdVEuL4"
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
