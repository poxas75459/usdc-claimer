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
    "62Gs8L6eYRRfZjkCjXnyZXHwG1UH7ykWA2RDW9nQMTepLxtfXntmVuipYcWaaKEDPJ4hrMu1utMqog8YUNmZVug5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZPCAckXwA4QUMnFKNQYeNGKhTrd5ftYKKQ7gmFMKvyzSF2Km9nfyvXDupnUMQwqRAdEG6EnGtCDMbJ5RGtNhxF",
  "key1": "3QL8gX1X1CsPA9S1kexCHEYn6371A4ggN2kvd2qahBBk4isZo7XJUxqL92daEhMnU6wfPGFDejHBkj9X61TxHEfu",
  "key2": "4QSzNho5KHAvC4iQo51prn6hXwDh152JzjQf8MsNfG1HHbRQ6Y8kA2AJCPSGdReoNachR4UE8urJmXahT4vEmuD3",
  "key3": "4gsywnSKZC34AgYmhQy19ES69YvQAELgkr6geEg6YRZFDxTfVuSDafqPWNDVGW9SN99KUgw8sqLvMz2vXEU8GdXQ",
  "key4": "2UG2fKCn5g1sgh6z5f1uEtiH4643MhEDz58T9phk3m3hMv69RN1QydixymB7JVhkXo3WXzAFbKeXn1NVq29z6zvR",
  "key5": "5iM2QKmUasVsU2z325sEMmEahgiogqf8icND5FKexaGhvNa7KMG7i3oBygDYWMSH8sqLk8UnkGeeS16zY244cmun",
  "key6": "4unQGkx7874ujmQdDGZMph6E7hy4P95qMDkz5aQPgtmBa58dw9grphRyZLn2EkVPc94APsD2LCeUFj1sHudQw2rk",
  "key7": "5tBpXWrGfPe4x3e1czpV2UgTziFQ3navH8TvaKYxkQThCNsWL193mTRtun4wM81ry8m4VoWuH5J1KedgEoDSrnNx",
  "key8": "4gUqpgByFcr5yUxDaLfo943zhoPvuL4ygHrYDNbYzfdymGVXAJy2en8cEN2mS2j8sW2q5rXQg5Twfkyn9VzDMvFK",
  "key9": "3RnKCEAfTTtWuLCYYJkRpbrK6AEAeohvt6iSLUwsEAKwvMV5V3mo6WN7XYQsXyMCy2d2ZcqdzQbsMoxBpNJq5Loe",
  "key10": "2qWFwkvcmNoF7snfxTZ7WsyyxvMfFdxFVFSXLfGYZS9HM2BKGWK3taRMvDvUZwqUUn7JSDLDrHofVNw52aZqM7ek",
  "key11": "5bdFZm36QXhedsKSWCByzE5MbECNmfjm8EQxQQwxmeeBvscfrYfRgKsVXC457bHUeshqkpqnwMQDsAiGE8Jmn89P",
  "key12": "5owtkcSHpso5VVznudfSet2AzUeuVQDJUJjwnrakzN6Ywcmcftve6oHttbLMqM2Qs8gk6qucVjxMvSmf2QPyGd3R",
  "key13": "2bCRms9QzDBeAotWRc8R5K2hcHEL9ER1r4FaU7MGd7cZUrEVPTHXadg7axShG4k4Ki5g8iPsM7xGEhA3nbHHmw7n",
  "key14": "25SniC3hADrS86nDrNsjeCdK7pWhZLxhn2gCx3eGKjN295Nr91Gp5RPA8M67uXfzhT2h16iaQPHJNv1163FFu1X4",
  "key15": "5cHk54u3xM7JPi4fLQb1TpsLyXJeekteLy5CGkEurtMAjUujZNbBKE3R9tBPPPdkAcyXZk4GCk19ccmwnHK811gc",
  "key16": "2sJVLZEspw8bpqU3kSDmDu6Z3KaBUsjWyxDPw6FNYhoCfcKjLD1u7MvBPfpxoDuhDKJ5aZ2TeKfUvQYNdDomDzVc",
  "key17": "5tPLTvprTgZvBomudjzD8zoPQvxQcYDjYSsowfVRTAQHaUnyV1GMcknF3gFRKDxF1TFWtjtgttHtEryv3N1sNCkc",
  "key18": "5RMjM8dE1ScxJBcVo8HW781zKY4mmRBbMNfEyZwZkHRKaXECYcarv49CkEd5StGztNB5hiQfurZmMdjFd7WKEFH7",
  "key19": "5FBHekQro8Ycie8VwyNGejsnDTCJKZyLeV4j1gUxqgUdBLxGEo9DpN3UK2iJMsP6KLxC7u5EpmWVdAgCk7MZPmzB",
  "key20": "2hJVAFMYKhtRQdip5JfLuRcZREi6Zcp2viYyKqGdau7QeFVBmS2foiLqxknp83aQDdyfJePr8BQbVocKnWWtamhW",
  "key21": "5XrvjPPMEC9XmixZCuGvhjXCWyhC483rnpu4G4Bkbof429oCTQ1su4TmX6T99HYfgtCxPHyY924RFF64pPYoyGwt",
  "key22": "3P66xx3EMgwStxZS8TmmvTgdUXsL4rBCq5FgKu2594H44DUuGrfghbAyewoxcFAfQqmQ2xGPpShDrpj9weA5BzFB",
  "key23": "5C41ARKraFv4GzDBnrSUAKwcHUQWwFfDH5FF7grNFVmR8cVKLQucaXUTLz5qmPveCqEiwFG4ZftFF1sXGRmWZMRR",
  "key24": "476EegUqhsAXBKZLFgrX35Wo4UjNSYno66h8EWawcDVrf8998qeTFsNFkMTGsYEcDo9qL5Wi1KQWYQGFnViTLa68",
  "key25": "3fCdGM8mQp9pKYAaNCoh5J66bgiGUGsp5QmyFgsUbvzcpqtLnNBQp68Z4igb6iX8KEeHUynNabn8ZRE34mgUv5ez",
  "key26": "5jAx9iFvyeCifSsxr6TJAQkgHrrKrEXsqi8KSdqeghspCDLKkGP3cszUjMA6dPvkqvYcwcCFXVVPhtN2FHmMzJ5D",
  "key27": "2NHQXXqAFSUE7cycziWzTYdmByVdbJrUaYYhHeEJ3GmdGytXxphHH8pqAyMhgjAtk1ytG5jtC4DY35j7aDzfQ5nL",
  "key28": "21eARwqJUpW8VYTHPsjFnQXYRmXTLgqWZN8HtHK9REUGAfXjJTP7NSZw78XpZLX4mqcM1s3N2CfcpoZzXdj6zaKE",
  "key29": "3ps7PvW8d1xAkEUq9w6QftdLJvv1V874fF2pBhWnWBmthZGWS2LcKJfM99UCVeRH1Z7o9xhbouMTFYyU1ryZ55LG",
  "key30": "VMmaKANghhrTNPrewQFfhs9ioUfTUXXReE8cA8x61UeYiVQfZHJp9E8Lm2k3UvWvVEobPQBfTZosKuvMRxCD7vb",
  "key31": "49LKLMKuT21EtgKY9WyF3sNiTY6rFgVr56i8wMXHZ71mDWAqU2tKu2netSnWTfxSMwP736xPyZjJsrLJGcDNriwA",
  "key32": "5PzQGRzJh1nqdHz4oCBL5bgACkYHoYy3GHXsUmHU7CqFw2W2zHRcHTKy3Zsa5gks3qonRLH9hnK1qwhj8ZKW2fB4",
  "key33": "Y2eTxkWPMny2x2jXye8xabNf5h3sDsH71id8pjaMAYNRwRfeTVmPKUCW9VX7XBdcFUeYh3dmwwxcuGnrdLxGazc",
  "key34": "4N3RbthqevGKu8tm45jakPaCtMKp98tpjV3hpqR4vGxpbgZ1vGcUrGqVkmRuj2VVwVLdLdAmh9CNYDrczYtHfQLo",
  "key35": "4PjGAxHXUMCxgBB9Eq8wMuFiLR8xQw75m2NyAvjbxMhxfqTYcq6Kq3JRWNdiae7b3Fm9gcMjVoxzjJ7RjYEUC8sP"
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
