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
    "2RWDoNuBQrkfppqhQ1SXS1cf6ufC898pQdhw7AWGZyNC5rbEkLJSTo1YkikBSvdz7FSqUrGtqL5Q4eFGXKGH5UJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8fX4UUfNe5tDu3ZxFLfJ5kiAkw39GWzku2n9K3TSQj8xMR6bxvnHQW87pBTqacKykEdfZz6GMHWryestJZ5EVhn",
  "key1": "2eCEnqdKV4WtydqzjDcCafqnAi8Z7rx3FrLTm353KPsyGK3fDv52pfEWkZ1SVzmdAoSku6T5of8TGmg7pVySp67n",
  "key2": "5RCL9w8XGQcKJbcpDjR2eovj1dtS38FZjtihL8Y67iz8Kn2rDVWdsSKBbx49t2i8mytpb1EZhJ6rXTZzG7ippXUD",
  "key3": "5RMPLpk9m7ioAG5Zpcv83Y7QqyFV4gsYx2HpzsstEiSsiP9mtXDCZLduUhviU1sr6Xyx54knHgcDJcAurbgKq7Yx",
  "key4": "5kZnCC2vWaUfgMtzzgwYyWpknkR3Hsv2GWxSu8c1U4hD3bkNzn4pXV7Ese3tkP3xaJtxxCHTkwo7z8z44P9JKCpF",
  "key5": "3Q9NHG3Rz3Fr3XtiYdVdZWzycd8tLHB6cnmuCvJvkUnws58R3k4WpeejKoEW48NKDDqxJXQmk1PoF9BuLR5vHXSc",
  "key6": "29fG5EYC61vUqf8NbqUT5qFVCuQ9imUu3cB5A4DLJaa6RGJN7ivFcjug3YPpcPQ6CrXGjrMYRDWVq7TAS8sT9EGL",
  "key7": "2KTLrFgJUmP2pLAXUHvJrvtP9Kc6jg33hoKUo3AJceT79UcBumTAiTAGFopqUHy7M8Lss13Ks9fGN4CQoAYfwLZT",
  "key8": "4erKUZJX6sHuAgmmi1TWHftegt2EeXcqQYmcjw1TfWorr9BR5S63FFbymL97tAaCq8oX12LQBAqyazGGpfeea9ds",
  "key9": "2gHdmSddfc7rsUTsJ5Py6QDP13CE1mDY8oc1tJLh5ih9sf2oxMwsMz7E4UqRabNMUHz16JbxmXqhv8LhZY56tYLM",
  "key10": "2Nn4DpJsEHkLcVqnfcAd1ByGHGGSgZKu9uFTqwru9ipV3iumxkHin3YGNwGw8R4wQ7Todhjv96pjwMXWoz8QjCPN",
  "key11": "5Uois2Hpwd3S312Lhikk4jbPN4uRyXfoGHUBMsREkiTEZvGY5BAQwBjdZ1kVuLw2ndhMA96L9xGwiyHUwsfkxNy2",
  "key12": "5nU1Rz11s82JdVKFKDJ6ncmkt2rUU68cffTSWH6PurJttfsi9QqUpoy6HPAwe2NN9hPGHwisPcMj3WMTfVLUKZ8t",
  "key13": "3Vpeu1iak8kxhG8hPztkbc6CgYawe2kacGnh4acnzLVB6BMTwW4HntGqkBzKKNmiH4aWJAswTgXL4XKv6aChn6jP",
  "key14": "5PxGEbgrPE8dvQAoHTAvgzDop21cZtSKo523xrhoX8KL3b1mECLNxxTRmaYEkZmvCNTmbMkcDwMtiwgLXDbV4Jn3",
  "key15": "sHLbHf9Ap2ZmoRhXrpjSaHUBV4TABfreTrgrtUsAhGjVrxreDxWj1jAb2osLxAkqjzQjERJskdr1dEGeYS5Ngo6",
  "key16": "2opGA2Y2hJqBHYbKg3fxitDRBpAixUHcWP92L8Jmov8qhVzKw8ymVuaaJcAqHzHFtD4K1DKHKemL51f6NWMrcbbQ",
  "key17": "3U6b59jcNJcYhBj4VpXNezjmShYtTsA5rybTgkPEVezAqViLELKEaAfUQTQ1vnucktFqKh9nN9WvT44Ln5bZxGDu",
  "key18": "gr56QKhj6EgFD8aBFPonAWeqZQhPxqzXKt8c2Pj1Rk8Wvfnw38vAMoaEXo5eT4Jt4TtFx6mhyQjsNAwSULXKkEo",
  "key19": "4bPqEbKTt7EsfphwiFUxza4WHEUd4pdbBeCdZ8NLnFLBiz6K5LYUASV984GJAoR7npiDfftB3MAmFb6A3uqCs3tt",
  "key20": "4PoxUSnBafYBWaNaCU44NQg8vJq7qeVhMnh9fGCaPNRcmnWSwzXbPFXsj2f7B3g51hfWKMrpeRkuLq55pM45B72A",
  "key21": "3LDeEz8iq3Cx32YoxwK9DdaPaY5syqyo6inRY5z6BZJMvHdfQvqX5y7ohhXjL4ariwgSoju6oxezitrw6BLTdKRQ",
  "key22": "32bEq1vkTfqyywU3jpbMYF1nz2E9j3w7L6oog6yRu1Y962UoXMbdcHB7FMTWY7BCnUKjTxS7fgycyQUeNYt8eysp",
  "key23": "6WdSkzLh9vKShyZXnKPz4GXctYVa66XAcYmLD2VRPcoLc7kF9SJWMdp7D6V3YGS8x2JQg9fU2iNcA3Ny8T1ssEc",
  "key24": "EoSmhB5uNBiA2GFrWMw2RWiwGxsMZ1oF2vp5hnn4XoxhaYGomJADtC4fSzWVYQrXBJ6KDFYrqeckNkwAzNue9m3",
  "key25": "2HZJoGC1VjHKp8CMSn5zxmLBwBxKmnuzD4VmESkMGrSA6ujaDjLetXAX1Xe35umtN2XFN1YzkPKbcmJrz2tWbipt",
  "key26": "4pGvLyoa7EwqoxnLSjFNR2ztpeHpqEudGPUKfdJ28TuFZq48cdsDW1WivzuJR4zUL6aqUP64MvUabe7CU76FpRXw",
  "key27": "4TLGhcwi7CC86oJDTgCz4UpBBCkm9Cz5sSQ19FtVngR6mtxW755ayWUgQNfcFiJH7BDkSr26sWF1hDnGZvauobCh",
  "key28": "3RXbtQrRNgt3U9yMLTaEyGYNSFZ2j2kACw7qRmdSs4rFxeXijUKHH3nNGERN5HX3cR7eucpFpfZTXJruHv42D8Fs",
  "key29": "5PsK15aBw6bvCUeM7gvNeS6WWYZoLyA7CBKJ9HzHcP9twvqWDARJDoYR6QZEynhLtgWJa8CjWwM5TmzXuTjMzZYX",
  "key30": "3qXDyz4vHqND43KkJhfun7xesuDxuc2xs9WvKmGzFwPmtW2siQSPZaSZUPt8d4R5b8mvvrQzL1ZU63Bv516LkbsZ",
  "key31": "2eb9rp6SYiPNuatLj93F5yWXGUZPuSXMUMKNgsW8cAMZdFWD2Pis3EC1eCjJv8SGzGDi2M74vp1CMdWkZbo2sEW"
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
