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
    "2jmsE7y5jqhe2uZETMCFDMDiABZzRaXL4dNiGHFUELnaWJ2ZmpBAwUyEdfKTcSFhnkftasC7bkdGDKPXHYneEoEN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VoL72GaCG2hJQHdYpD2pVRFFSD4pC9tog5GjpUCvNk9EhG3DeaXRCG3pKbYfE4McLKBtdchr9MNZPwo1idtuu3",
  "key1": "4irXtYqVxh3jELrTY1mQ44wsfBTrP1WhrTrEMATwojXVpgtKnQu1BykbfvH2pPyAkqcaQ8ZZU68e2vLwkeUzX3zN",
  "key2": "27EoZcXgNwD2HMWmP2S2A8ifdimngFnk2CNW6qkBWNs5jmEU8LxdHWygWjJhmmTXtgWWqBkUPtqZewXtFv1DnT7L",
  "key3": "tfzgQkY66ouh38WtojAm85cZdSBLLYXaPytF79n7YFY6H6bR6TFxRTZVkrXdfuxsAoGydsp6B9MLfWwpXpg5VMg",
  "key4": "erqNB7BiPKwFeVPuHtUVcLmogCXERoGs4xgUkkTXXKT8QQNCrhERHHrWLivghMSPML3S2sWAz6s9r6mMt3Vf3GH",
  "key5": "9hXLrWk2BastGDULk7GHNb22GnxXfRhGxE9CTP4ix1P47249VRkmTKw516VNgPwjrtnzRWdja67PKr3sWLAwxCr",
  "key6": "5c8HMywbtJjPoqHPpQFaX86P4McRXy23FRqUoZzrTnaN2Gwxt9f8tC9AxPkKmTxqsRdNEsVRZ5iX5EArfhoYC4vn",
  "key7": "9CNhwkvh914ZeLfiSVaFth4SWHp28g2vm3nHiXR1ebhtqZSkkoj8ssZN5knj5E6dTG83x957ShfetT5UsDSnzhA",
  "key8": "39KUADwNaZC5Ht6mQkuesz7kJWfXKbmMT8mcx2szRpk4ny9yNBMUQ8RBRFbhNTA9HKzuBkf6WzhbaUYuoLgHYWzy",
  "key9": "nLSJjU5t5iYhHF1pcAZZxoRAQUfJRfbkxCErp86xY27C3mBx3aeCpHQYi7wWpeVYDMMrR7v1Kgwzs6zb18bMUup",
  "key10": "5z8z9QwjsFzxxXbbN1YMHD7fH9JSoBfp3eqVEjxzKnPznpYcaS7n9A5vCFCBPLHvAHtjDKYRydkwnVgHpk1FVEZW",
  "key11": "hQB5qVdwL21DZtHiYicLyszsLQ3wXBjTzjwfnyap1py5dysd2T7A2wCL3RoRHHycfyzQ7Ju995YW8Tvr7kg54hn",
  "key12": "4bgexK7XuFueKvBnpFEfJGogWRpdwAK4WATFUDpCM77VM4LKENX1fNzGjQWnVnr7ZW3mbzkEku9STr62tF28pmHo",
  "key13": "2xk7z1STK5Xe494mkX5KyasJGX28pXWVCPUNN7P7QZFWkSYcTBnW5Sm95MuLAvYNgCWruSYgKmcLVXVazvBSSrNy",
  "key14": "4U7W5kL7rymdvmp6wHJvk7GNjQcJCr6a9pXHkXqw58h6tHZyRKJG8W7AxB4eH7gbXDCtuuq1iQsQ53so4Kcek7g3",
  "key15": "3bwqHarXSYH23Lp5YCXGBfHbCxd6U6DMyEjHe3GquUeFDirX9ypRFAeQEatyi7m6FGUPi7kxp4Z6PeCaHAZYgYa7",
  "key16": "4V6hJCeiZUui8MUGNzkPjww98qktbcCd2x53Zw89VAe26DK68aNYDfjuiQYEpKGVWHjqbXfYcpt4s4p3tj6Z6Lnf",
  "key17": "33VxWLDPcvfqpVSjR5Sqd1wWQ4nbobPZmp9FGGJoFQaF8VMuBKuYUF2SJrP7MNr71DmiYQJioz3ig1SSqs6LLVcm",
  "key18": "2GkMPefpa8VMRANDeJbecC7VSCNXG1kAi1dRsm2F6tgwB73YicrpNaoKbusa1oa5Uij8nwgAtR8DhWjrU5udcMey",
  "key19": "3GEB5ycN4gQxwa9a4GYeeJXsfzwgKn5AXxHTiW6RvtGwQRemAXUgotHswUf99XT9izv1R7Cy5EYavqP6rSysjA3Y",
  "key20": "2hUFAYx3jaEbeyy3p6Mr6MSraBP5hF44SG2z9iva2FG3ReV5AWVKzBHJMj4MQGcjPogPNxftjdpDMHm1fEBycm4k",
  "key21": "3svHEn2fKqhsFrnzvb3cvkXQwyEDyxw22qPuzZ6MzrCt1281REMN8XpLuB1c3XKhB8EWvSqJ6qieEcJ17ikLReWb",
  "key22": "5Gn5SKqtpFQspBqujpmogPETWuJU316LJaSTzfJa8x9VxsqesJE5EQ3zXrPTtwEiHoK3W91tL856pYGUMC7zVGjw",
  "key23": "42erNQQa9gbkzZ9k13CytYc6j99h65MUp8Li3P8gjk6CJNpNmxEeR88QcLnjXFVabAaJimXqjEHJjPo5vhcGbh3P",
  "key24": "emYDm8kZhFGuQf8iL6HxdQuK66jTzBXw2dhE5wjL3CGPPWYSnNRUv6iXWnTbYH9inGnDcTvd3CsNfE3ikcFz9cy",
  "key25": "25Ge69F3SXvq6CN2gBk1MY8FGELtERsNHi4TCRw9un19vPeFTbdoHLSLyZKoSGZZVndZc69oMgZ8HhuaS8q3uXS4",
  "key26": "4PiY3wJ3cMA3MAn8BoCgDLh1g4q6Np1h3opVXLZxJ2qydx15EgPRpoSH5EA7QfeyT8sFvD82fCEkW1G1AKVcogYm",
  "key27": "2ysmY1yvPJBexoEE9EByqrqnTH9MkKCPGH6kaYzNBqjnwA9xTVdAX5F913bacdBjrdCD8dHBd7iGQ6bYa6BBTJJU",
  "key28": "3N1J6wqgjPx8soxe4jfdpvGiSW5Pcf9bLbLWTKTAuLBChS2spibyEcgnUycqacUeX7K8vvBTuxFZDDLSUP5kLTAs",
  "key29": "3SMQZ8xS2VUSvoz2nYPFkec1u2RDQ3QoxLging4Wkpb6hocWa4VTdTuXTQdrenxyPoCV7AHUiZsmFdgvGS7HcN6w",
  "key30": "2gsiF44WoshbK53ZjuPuZxK9V11n2NoHQeTjuJ8puSAv2xFNJd7acBrNz4dHWv9jcwnM2QwuWDeek6V48zrJuPAj",
  "key31": "4oSQdqHrMKfQr1jnCFt84N3mxhu8qhM6v2TVDh4DR8nnPfaRgWAmv9egtGKrNMGPx5A6kmhZaCmotiyDKsQRpw65",
  "key32": "4PFsFEvUcGtLTTiKBmry19GQQLjyssFDPAa6BCEtC7EKPEqoeWHwyvntbxSpf7HBqpmiFEbxZzxvSTVJr6kCSR1z",
  "key33": "4C4Hi77mUTbg9XRfaavEuhi4dhHcKCWKGib3uyPDhUodzNN1cLyJsfdxJuHJiPhWDj3w7bSTnXZBJpJNQophpUk2",
  "key34": "3YxVQQFeFEYjcVCFBUofnFoFG268jQ2YVnFPLAPiFVHJeTBpFdJc7xu1f1Cx2T41nmsSTTmpuuWYxoEeLvy8Q9uY",
  "key35": "23f4nm55kkKD7j8XUr8d8pjBYVrVq1TES2zpgTZkT6LoBCwGquCHwcvzQbvFtNGojFcTx46rPMxca9DTFaWKqzmX"
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
