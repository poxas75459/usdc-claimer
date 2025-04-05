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
    "St7FzmEEEwhiQ2bjyAwGcc3Lk9uSorVW6CzbbXcovAzai47GTWEwStxUtjPRoGfyx1zD6q2nt4BDZ9wK82DpR23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iQ7yaCGSLF1imen5jvpHpghKkCCD2wAt2GYQLrqcXgGhGYimtXDNnjXUWq6QgzTAdzgTqZsSqKd8vw3F6rDhrij",
  "key1": "5S1iCPNXGRSKUQuSpGQ5CjxFWRAAoTmMrMZENuqL5MYyon8TeDGY4DaEWnntMoGdbfVr4CcEA7cfJEtf12mE7cP1",
  "key2": "37KCUi7oD2EVgVP2Secd82noSSZr9m545WCZ4Ey5zYUKGijNJgX9pfpAhXCS6d54AhgTwbF27gfujubWkmjuJthW",
  "key3": "3wer8oqX1En9EZN123zNjewMqWG9mGr493tjYg5NdRoMpHAwvgBjbkbix6hypixPtPTLbErjtVN192shi43RYE1m",
  "key4": "35JtNcTvfoAtfdffGtSCbZMsCS65MirDuh8Pag7SBJ7rKiDkhGyfhsEPECS6h4HwChm4sLH5x5ZjTgiHnQAq2QkH",
  "key5": "3k633S1ZgNiej8DwfdzMTMp2npA6F1MgZ92tStbmPWCiCoakw8re59AsPq9Psu7j6ms8m9BPWmo6qhFk78c3xdZ9",
  "key6": "3D68TP9YxmFTnZfJvKeDQobrj6o67yjmRZq9RFsNZadfqp3JDNVDobxthoj3oUz3WBP2GDfHddRVL9t5ELRbhFrB",
  "key7": "4dNJEurp2PSJFSrAqLVQ9ZbcDoaNZibbSbMiVdxvfWkTkFomUVY3ZDxUhEouVntPRhPXZ1Cy71pu8pr6DiTECydo",
  "key8": "2xCf616UT1z3E4wbQvYh3EGuB1FxREEi9CZD7wuvX3fMNhgqRuSnW2VT1htsPEsyKwi5o3zBs7qXyRv8TRNMUYGH",
  "key9": "p9nQYsckNRbKzAC9NRos3NRF2KhcsFNTTvzqECSnAzx1tZQpQRFeLmsS4j2WCTZ7SwJSeAswW6nVxeBssHN8eLu",
  "key10": "57mvBv68Fi4CmNwUHwibitC3wMtj6UdGNYf13jthb7Vgvuyz2kckdrTN2qtWcQiK1WkdVhh6ZtbkyRN4Jf6FuP5x",
  "key11": "3PCC7pcwXmL4jBiA9Pu86Lcn9HVqepkrw2f1mUnVuHQEFJU37xcmHckHvqPqPeGSYhGvZRA7Q9paxt6DjYgjS4QN",
  "key12": "3xJhzPbZDRTUd6zQxJoZga4mnKYHdWQx1zEWXaC6FfujKgk7rxGP1kmygTojFKGGqjbHNABARU7oxgrEifNAAVwW",
  "key13": "2632YY51z5gYh67nTcZxpP3VrW13LeBJAeWnA7S9FzfTXBjLfvtT3Yp4ACN5RryHrzTLeS2euxWEmcjCrz9vreGJ",
  "key14": "2u9uL1dziVhKBob1HATaDZmAzTqi7R4tqqp7qNVYTbx9hM7BvvS4QLNv263rHf2vvdSbTnQCPaCBizeaChbGGfWM",
  "key15": "2HnKbmvQdRVhTzCnkHrx5pH6KYfhF2HhHZwiB52PsAery5YnEP4FRqUsHXyHLidJTujs28QBpqWsShdbF5vHncon",
  "key16": "4feM1BRaVdjsmJNn32rdDrUjkG1gUeUgpLEDEmS9YmVedd7LEgaY8S4EBPcWZPYHhrj8G5GP5wpFu9A5ETsMmgUh",
  "key17": "67rDyfCnH7baj6cHfEs9iytrDz494ve8GvGdA7EcfJz58UiTNP2tYVZR9k41gkf2NEMvisjyZQBCu7tAiTDR3YqH",
  "key18": "4MSGUtiyj1ECDNFMyAt6nVp9gX3xHDtwRtp91k5fV8KcXeWXALHYyrj1tvAoXQcsRMZku6kwJbS1rvmRi9PbhZde",
  "key19": "Ur4EFnMRXq9esmkrwkLeLzSUTw9JYZcEsP2BQdaTN8epqBynSY9aiW8irxkgptnCCvkuE6Gr4d5kAcvPk3kAUTd",
  "key20": "4NjzesGGdNhuUcuda3LY76oiEM8dTM5KjyNzGqiXvm2Yt1vaEaMekhchRbCMZvr2SNKNaJcxiUwGmFjvbrVRAdUE",
  "key21": "2HLMZXxXAGFpFp26zzB6Z9pGHL8Cr76mkgTgWcrhmZSxWzGvpimRYZLJcwkdvKNiAjqpCyUWmqRSBFnxn8nwLxqc",
  "key22": "e9bB82KBB62E4DcE5jeqR7rM1mk2WQj9Tnm1T5NiVjpmTu7uCwCTKsuSWAQdhbe129ueaCqBkRCXwn475RGehuC",
  "key23": "2kuGqeS4YfDMhBZaiwuzRRzAPQwf7rF9hcB4DhnJ6F7iEhLf1T4j7izWJq3exHBnDxdLkVQY4RYGwg6RmV6UMkiK",
  "key24": "5HPc57n1sHGpjmGFVMMiQ1y2A7gmSSW3d68WUJdkfDkPAFzYX3DapBPo6vV2Gytjan1aeqwQ5D381XjQK27YKwVZ",
  "key25": "5HCkcKr9VUWYn3hEkv8fdmvLj4bUt7oxBbRF2Bapn3SL5rygSGVVMwAhs3kV62dJqdvv2WViczgiqJU8HxjBzehT",
  "key26": "nKbmFnKJPULMBsYg7bNMJwUEnouwyzt7QVXX4ckKKeANgttWpWKu1oVMBDtNjb3PRgfvbyrFNiaCrB6E7YYnzSP"
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
