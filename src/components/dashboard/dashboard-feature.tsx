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
    "4a5NqkrHwYpiankTWo2TMYbo967K1Sj5BMtsNr7oMF8R2kTNYR4bHrdywTo6ejS63fc1iKU54sfnG1stiDVVS83S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "scMjn7XBkjHnFaeaC8VUGrj8pWYCAiZDNSxmSPLuGF4E1ZjMDubSAtkgTYNNgvuHBCzBgNEtH2HTtGwYTwphn2v",
  "key1": "4Z4EERLyjX6VP1aAEQyTPwC47mgTgPhHdm9rbdTYJ147mQFbHwebcJWpAq6SBYLYGRPDbnQgqrvynZ1FB3Qh2g3i",
  "key2": "4T85JvS9hYGyeNL3TtHE7zN6pP4syvAa7Nd93hg3Qq1fLU2VHZDVrdzS3LjUgc67bUpwFA9nm1euim8FZfMMyF3G",
  "key3": "2k4apyUb9UAFHUntapHtMcXXQnGYDDoBPQg73ZyJep7khNucmGaADmnHjQ7hcCcvcYQ1fjpce5iDQNjaJd6fgFws",
  "key4": "5GXGGTvg4cxNCeuhCQ3CEdnNezWSZNazszNfxVtdJbgqyw3uFFqxxsevGTHM9X9zU4CdJyRNyAts6cd6JVaZcS6F",
  "key5": "QXshtinWFJ1V6sjjrnA9B39HYjPu2QA5CoCU4WaB4wibzQkbsJ8Lwtg7vvYggWcvst1xZNHMUTsPQxGSatrcjoX",
  "key6": "5WTA6U7rKDtvb3WJhwxzqxFnczV3FBcZ7tqweUdAn1nJh1Dk9Ak78BdXN5NhMnek1P4ej81SAMJswgtDBLRUiaeA",
  "key7": "348g7xTcmbESvz6W7NQfxZC1hpnxrRPweSUruLq3fJLYpYWJV1QEPNMsxMttMVU4SJbnCjH4kHFcRRPbd4xypEfV",
  "key8": "5EMdyzYy1P1KnwPd5DHMc41WGqkbFJiShEcBpxyEnewTkTozBfaJcYBZHSxfrb12FGozzmqXgAJVtXW5zn5CWv8q",
  "key9": "3XRJ9WTAw5ybnfQr3oncfEw6ipqHAcPbjZpPfU68su9UXiyKaRkUvyF1mFe8d6PjLZJzCkv7uKMc9ycZGgRMppHg",
  "key10": "5APhrjp9FVuhKtiZvEUkm6faFaBNzxg8Ku24NeUApUqUSB14JJC42tBsXU7JdiQyeSbEnNTvnLWtXZopsTvdfJQC",
  "key11": "5YtvoFNGNfE519LcoSMuKBhyFcikPbbnZeNVVRNE2BGkuPNhmWW1pEyuvYGuo7DyY6jPd7TkASwxTD1UbywirYz3",
  "key12": "4ctRAKk43mqRs2LornqDcJawCWMyisSco7naRXZYXPfDrn5o23zXLWFsWrr5hcsCUb6WYSNDVea26g1wZgVxsADV",
  "key13": "xfceVBLQYugxxg7z8qY5G3RrT1qAArhVjvCyT8foYozCEWRfb9zH4uHB7P7g5FsMpmSegXSwNvJsSFe1D4wrvkg",
  "key14": "2rznyyxhwhSUQg3j6WMxnHbTTt75sEiAc1FJzT4ucRfJRZZ7sfMykGi89j6wWKnYXVhk9GzjW7LeYw6CeFuCKLFo",
  "key15": "53fTcCXh5KXYESJFzuM7oF8QbmfudghNHxM74UqmFnhqpoDmS5wrb6Dcd683NLwZvwWroQtFG1EsuP2Jr3fQiL71",
  "key16": "KovKnQ2Dd2hsZfBX5rahnQGedSNUjg567B8K8Go62FNarc5LudrStSt1qAHHE8wkStDN1gaFy3iqfR1TymRsMWH",
  "key17": "46expraRRZsxXDLdfjhbwo2BjkWdPUcK5MECJoCBQ6LKSPbzhGrQt8RNiEv3aHeUwTaEzqp751bXAeRFgLgRPGQf",
  "key18": "4ouSzn3N5FAocfecD69CWMUTLN4jPLoGXpzxH23L8N8n2twUtApdd5ioodHYNVV9xWJRT9FhTg9LrsE8bqVUi61H",
  "key19": "2BZDcduSWxGTsvEKeQwNpJj1pD8QtFg1k5nftGjjsiCp3JmbcwqXbJzWxBJpAg7Gedx7rCfHcBkfdayw1UCXj6P1",
  "key20": "5MqLaAjwbu6qVefFbEzaTjxLtkjN3dPNt1FNk8qeSySJWM8gmYxuBVB71pkPVGZkNxAamAmL7eq6Vh76YTwJt6JA",
  "key21": "2g5k9GEfndESePp6Ln5bgBcqFeKurehWgMEvEobmSPtdEoLqYguj6jYAJwJ4QaGGLPmjvo8khQaRBxhL5Pe5HpLc",
  "key22": "2T4t58nBhgsiG3imx9RkhnucngYQaMHKLN19josHGoGWphXdZ2DqJT855PFup7udZieZnBJRFZcWAfE9bq3Rd8uZ",
  "key23": "5Y3LvDFaEx8c2CuejWme7iJijSd2mb6pFMyQHe5kMLvJvaNTmub1BunFDG1Z95asfmFjufoiMedfMrtkUudBYQBS",
  "key24": "2EuJ9WJUNPVeKL998tsbmzped4zcBkVUDKJSNYpqyX8KY59THjENwGx6GichDNDP5QAVTCyVJgub59SDdaJ1pqSf",
  "key25": "5RtPjhW4mZSekSKSC6ZAUbCmhG6SH88Zg8g5hJ3mXugM7UwBZcS6RZSi1epSNMopX3Q1hiT2cjW6TDHWGUbzoocB"
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
