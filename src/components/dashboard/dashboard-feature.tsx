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
    "kDQxDLkGMdptALiVYm7sw3TqYDj9HU4DS3moZxd46jM41DjadkGSsxrbY99ADF6JSuEXGCm11bbHjgN88oEX4Ca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31KXKryG83qWeajBAkv7cNJ62xBDctdwZLBhvmSY7FCYvCLzrivh3DZUsysNeFxq4MEioM68gEwZXZ8ziJokv2Bt",
  "key1": "2sweHk9TrsxeFusvMCAyAg5vCvqS2WK3iHUBeZCNpRNvN3x17tarSRxY9VdrPrD1cHFpSYt3d8NAzZNUgQNmeVng",
  "key2": "4QKWb57Cjp8Ys1MUfQ6jYMvkkXkpeDM875SrSXvtWJddFzfFYRhEGd1zH96qq6NuRmBqNSDu3ATJuHM6UeykzKgP",
  "key3": "2LyqH2FPDdiiwcZSoygakVTzpD5Uh1GkPiTuGneeT3LcEAP3cHWBmUS3p79ZWq2wp9vLoGqJWNAEeuErs1wEZfyU",
  "key4": "5WCUkbZkKn55j8sjf6JnsUMvffbd5Vpy9jxBJPJDjBqmZ2HUfjb6LFCHifw5qqM3b7Bhw2zAet4YVPX8f73doVs8",
  "key5": "61oZvS2GH9FunJQSbm9CBBJSmLpew8vWfehJRFp9YyobPsAr1Sfzhh6kbmBjZ5qmrpJBDeE1tHRJn61yLcqQQ3Pe",
  "key6": "4d5DfcSigMqSHo2Th6JNz9cdFuS3y6xrEVHPYzpa6wyGptJGubZ6QEQN8eNMr8njmxyYzcsdKMjXg1gtJSRQN8wu",
  "key7": "3MSZgsthmn8CirKs7WDbEdjfNRefT87qU76St4qsTzc9vbA67ozcgN7Vb8kjQ633RUwvVDs4KnBgU5khcQsSh1Kp",
  "key8": "25aCsMUduoVFdhTr2aHnBkCG8Lpa8zFZi4MBMA3ykHdmBjC2WgpxcLkTxhweRN65F76vaPFfcar4AHgaPw5oENDH",
  "key9": "QPxHbtyaTqH4DrdTiFWXuua1rb5dsp5K7xmGTbMgFzSh2vMmUDhasUXCpV5LhNviP5VrFPBw97JKrX2uu2mFZmy",
  "key10": "k9wEkC4J8hSBw48aTXRL2PySevToGBHWsDpvMazgtFs9AdisGAddRUCzvQ7RTfTnoE8mTPAGVU58dUhgUGcp6jQ",
  "key11": "5sb3rKXywexQnYMnZfgacrQ7UxWsnHE6pexanBB3yWei8MrDkLP9rdvvPm9akQDcRom3yZ23UFws2WcqFRWkAE2U",
  "key12": "3DATLT2TPqTGZU74Xi1MvhxsRHdYxb7dFrbgSEG2y6tGboV47QGJBSFCZcMPaNP2ReV6Z8aKGvt7nbiGwCvYjXF1",
  "key13": "5NJcUhkfTrun2B7rYhRpreUoj72KwWJvQGZcVnpEiiaS2QKt9q5pfX7JEaiSSpvLF7PmAgCteV1VGAXCofu5Mape",
  "key14": "2QmCHkDFnv47z7CyTSKUrYZPV2o9dNM4drs2Hmg813soQuJWtEfHDw3omWXdDcwuW5uZ1iKSMdw1EVmTRz56YcDw",
  "key15": "5Wdr32yvK7Jh9TTEDAqtRNx554zz29QYuhvqLPahLZtZMr5ncbT2NK1Q6B8DgB84jkXmTRYHKwkWGqKj4xPz4TVS",
  "key16": "4Nk2dBvDfN5PAnmQ96N8Q1SqP9uQNZbxfrsCsphWXmLhwVMCS97z1UXRzNmooKJqoRXRdhyLC941JHPvLxMmU8aW",
  "key17": "4PC8LWxRyvUdCRY36hpZisB4yA36sbbifvUvV8AW5r889yhoZDaGJhny9bEuQgefmT2H846SmZ6kX5BWn9w84sXx",
  "key18": "N6vyH46Uc7oKDBR5C1UTv4MZToFF2ybCVRxUmBSGQXsGiw4nPKRhZwJYwqDsJvwPGoxtgA7wPxLXazpbSfAPqbG",
  "key19": "5DyWF2u13JFKvhiZiZXi42JrK6w4y825DXY5Z6j3Dn8oj52p1hMqbvGXqoemawUWKtpUzxsKi78eigVAta9jtvn8",
  "key20": "HpEnkU4oDKoXYoHYtchdpkVTEZXKykeMpTJLQoEXNgDgeST1neZxiraD7bnRsoFZsSYYJs7eP393LEsBZGfidRk",
  "key21": "2EM3VV9Bz2ekFwFJjut4uZdRBSPBVEkxtnu3sce6Bz3BnAkTbSBf3fGDyt1pHtUiVwdqre75wWtmKj6qKr1PAXMe",
  "key22": "5WXj6ba9MiUCZmgdwMuV9rQXbamKhT9pGDkLkZS9ZwE1aKiBMARgcMhNhAwN4ti1o8rw1SSejaugkCcHyt3JvLAD",
  "key23": "3Z6FbuNtU9N2Q9oSufA6goQ44shqGpTka9BLSF1pCFXAJJLqouGPGohekD3C3F9kozh1hG4YNQTTQVvR852zk1AN",
  "key24": "4D6ezopGgtqRWB6gg4kRD1arTZHyJJwVYHYpuwAwwMV8tpPFQvQ1LkV7oQuk5Xsg8obFthmaS8xyko5ZHQgnibpp",
  "key25": "wVCfKviS8cdnqewVUT7Nd7Gbsg5auGprV9JsAjs7ADTfHEP4pmiGDme947BTVeCSX6YFhbpLGQfnNov4ca5qjpy",
  "key26": "52C3q7JvfEAo2qRTdBVKNQL3tMfodnzExgukmg6PrGZPQrdoS4HGm8aRXtFbEJVM28Zn5wNovog3CE9JqpfmH988",
  "key27": "62nWVaX6hZ2MVZ53BbsUJLwinsx4E5w4VV3sahGMou5xCmCn9X3siHXGdganpQMVtiYEWHdwujQY82nQahAt8iQ5",
  "key28": "5PuCtKPDKAFd7L5obX33syeiuxaLqFPZizz9zAi2VNqtToZD8DYRqLKK8zDVSsGWrD9MHuP7WkogjL1xgSuzYNwp",
  "key29": "5q4k544u13A3hgS66v3kgZhgEjwdUYJbG8S4YCYMfvew1EtVEVqKUfw7PaXUe3X8CKTqucY3EGTTaJ2WB4BfA7kv"
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
