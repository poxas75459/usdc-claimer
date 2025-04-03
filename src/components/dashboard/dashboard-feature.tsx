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
    "3CzBXQhwF44wh9KGNNhWM5SoGtMQsWPE4iLFquDBGvcDjf9FRETkthvBMsLSyjKALVvZfa4psqVGCApE2329MWfJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddaFZEaL3s6WGY2y1DzUTBqJtYxn48Zx8CvaftrQcTBYqX7d3zFfkUJmxuPgr6pX4dFdN82BxPK8YNGaA4zmxTG",
  "key1": "wFnxyCpY7nxhn74pQfTqntk8i4k5PiufkJR1DKeUuJnV5rDiHT6cHsuUfRu5unPSsi9XRCvDcpiD5ssx2WuGKTd",
  "key2": "EgjLAxxocUz49VZuYf9o7xGqeYanXHsNkzwZa6wtfKpzN3g83Kg4DTPp8YT4wARLQsLWoUxATZFKPjfdYgNP7mf",
  "key3": "t3BBGdGvhexXrZSEzRQEyL8JjaKoFF5HQW4Th2wYPwcrNeMs3fnrn5HFErWGt42jP7Ao4AQ386pUNXZL3MXYovY",
  "key4": "44XeJN1VaUmdUjco4miS2bomTQNC3T2LxkH4SkQG6hh7ghX1QmMDyqgjQM4o2AfkKfeq8wG1jqwEvSt9ua23jGNi",
  "key5": "2tpUoRDH4VoFuVkGkuVKFbHN98Ek6KWgQx3UkjgHTFUed8rJwaqvprb1rFdosDeyA2LnmciLmYsW4WVAew48Kpzx",
  "key6": "25VbXbqUezTZpVUaKtQyoc1y44b7ugGU1fPaiTMfGDyfm8otrVaS1383BpGEhjGJzyVeBabtpYQLXSM2xBLDbRog",
  "key7": "36n1r4D4u2BsGy2i6Qeexjnx3eSDpJdWBAG5SRqHL7khYqrLyRiki5hMUuFwGP8iVp2L8USs16atzrVF2oSxbP9h",
  "key8": "dWgoaC42zmQsVSNbKhjLZfJ4dx6ad7e1UmoBkjR4NmzBg97uyvaJpVGTo1TzCb6Ky4GA5s7NrsnJoogxq1pejHQ",
  "key9": "3naoz9j9f1eLncS7Six2SG3Epxp8MyT61mCCnTJ1g6sKYnSYVMuTCyPRbyVA3rNDetwgxX16Af8accN2ZUUYrRvQ",
  "key10": "36FMGXvU5aat3C8Tx83XSDYD9a3hZy2ttrpSApDidARpKDKm66Pft3PU2RHAb2LTSd7JQAth8q3PDiJSdTpWAY1y",
  "key11": "cFF8qUwMfaHu6HEmgP2MzsJbwwp7NksB3jsyXtZUzuaHQgyQNebc3yBYGm8E1zW9oyspE2cVokj5gDwRoZUeyyZ",
  "key12": "4yk6gK8J1PeZmP5HRVRQmUboJDaESTDCcqMywXpWUAofjWC2h7xBT7wexdWpR3zAK2YCWaBNk8TUpP1Z4AGJtuVz",
  "key13": "2fHFyvPVfQL2kKvgp9qkfpySEQeFDVVvGdfkH3yGesEFB4yjKgAzzjvuAV25sqyJrbsq5f4uSPPDBypLpbEPcbS1",
  "key14": "3kfDiU6sErAqyDZtMHwUsAAWsX6gWJYDtXtXUHiCbgcq76yFEqa7QZzKhLxug6y1viLK4NGsh8XfiSp6HPJX8NBm",
  "key15": "3RydU8vKwKNPWpwRM6xtcUKHbymWmyxmdfFHZg35awZUgBMiHaTq9LPZ7CPjR1y147ht886oZdHYWnejAXLNvF5J",
  "key16": "3gRPHAXaZbo2Zw44N4YswB9rcGVHUPGEsuGYNfXqYQzSZ3c6Urq4fFC8R3gSv443pddVCXoBn8k5YzHVsjV6z8qu",
  "key17": "5HGQZBnY1nx9xiZ7pprsQwweQsY9rD8QvmDpLtB93q2Xx9rcfoXFYbTn23nkF7t8a7L8phfJK9LApsVtKnRmtcCm",
  "key18": "2tXBVQn9NP43H6CVfnNUfQxEjRZfuWgvk3Z3XkFH2iFUQK6qQZ9Jeav1QCkovKYxeedhBtcTou8c6gdScroek3gL",
  "key19": "5PzajkHGUoEi8LVacCb5EmYHRVwUvpndrKKAo1TzdQKy4FmaxTmPesRj7rCmLN3NqbGDgUN1k3rUjYE6k2voXJCp",
  "key20": "2v2SRTHk13sqRSjNeuRQ8nRAxx2kJxsvk7dNzWLy5aLpACxSgsWM7MFEBMNfi8a4L4znGE3FsoXPGn1LmQwQcmLJ",
  "key21": "67CLUneYvhTagYFzYbd5YECh9gei6sjrM17GaXvKbdeA3TuKfrvVbi82GKQHG1L2Qou7FGYFvmmTKELhLejM6nE",
  "key22": "3mpssUPUt89HsJGdmUXpoYmPNxrL9TbgBDEGVhEBJt5CMBnb9aMMvFDmg6dvesuuVzPfPed1oTzfx2hWh1AZ7BDM",
  "key23": "2yWepVVi5Tp6PUU9Eb3j5LsXgDMwBs5QUURHfHHPr5CWGGa4Q1eEjAaQCvEHhf3pfsyL9ypz184YXg9ohN3MbX2p",
  "key24": "63NmwfQorERfPMJtkcdJ1rJGyBA1Nwnh3PzAJnh6R4VS6xDcGWPupFTMyjghDdoPTybZVjUvKAV1hrj3PTnE2otS",
  "key25": "3MqUXLDYhuisPJ9M7ET55bKBQq7SRRadcJS266J62z5PPrNhURbZSpxjUG59RrdroFzcDkz8ENQJvsCouZLtkUCr",
  "key26": "2L9RNyJRqDHhyY7q5WTKZYYe8xpVRvwrwEtcxaLaMojPE8bhaSGyLGbFCWaYkYALU8ZHqWvvC2EvZpwomPNuw8FF",
  "key27": "4nApEN6JBzWbqcRB5rvmw7vSP7jJkh2n9cUL8i8RKXK5cnLjwxaq5kvCnFj5GEQjkv9GUYiJkX9wHjoeHAcxDdAv",
  "key28": "3NZM1acqp3XGRxK9kMbJi95epbdgaLogr1BYxRF2rgb7hXavrVUK5oD2uaKFLZB8kfPHgwod8jA81FEMEyx8rnNx",
  "key29": "5MPf6uzagPpLVAv6DA9btiYy3rH9Vg4itC7kFfaTiJf59STjEh5TeU7MNYhQyG1ZAXSFCMvNQHnbL2FGLTc3qEwS",
  "key30": "J2iXyHe6m7b9JN5EonDrHRkgcDPmLmRPNW8TrmTAmVYQuyt3pmwGT6SBhNj9Fqn9ENjBSPDzFk3R8vGgoHLsWND",
  "key31": "DyrA1aN3eP7WqysfUjepAhst62bh6KWmGzqxthbdTfRmtg9jSgYxaGxH22RW1TmiHKGRJDxGVK61tq32pSNcg7s",
  "key32": "54umnt169gtknyxzsUQ7vgLsZsBxckwUVp6pgQpsozM62K8ooAGV8x4vw15SG4RiBNnWfTsqvmb481AspNbENsao",
  "key33": "66qQZDpAmRipknYSipJLtCTvhsrmfRaXEsFUFfwhD4HyUq68sPmkEreK2XP2AWedrEMJYSZZrAaa25nVaCFRru4b"
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
