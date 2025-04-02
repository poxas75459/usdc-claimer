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
    "BBdAEZ2584rY3SpVQnPUVwe6c14vdYDdKTqbKugACqDHcsSrQidTgXYjEP8WbdKumngJ2LJME7aoTTr76GBRXqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m5zhjqd6kLG58rD7x6ckTD4Ri76cEhYBvLTi4mHpoGbWcr3jGCj2nU9bQPoFoeP66tSCbuX86PjsLs28tSsCiTg",
  "key1": "5Z4tpD6yU2xbA8qATD3yivbRNeTdY2EJv3iHcv3hPQr8hUy4LFsXpDUhQVBm7mjXq8FUrDXFY6fiX8P6NP1nYT8P",
  "key2": "4qNAf3zduiBU6kurBo7s97BJETwJrzbUPYoMDjGadWBcggGcJ8W1prd3BMStixqRj1AYuqhuoSZd3gx43sh6s8Ep",
  "key3": "3endqxiWQpFTnuki8vSJ4Tbv8APKs4xtnam18JjkpDBLrPUuXLpDYJtTJ347iPsVW6A6NG9h4jZkPh5pvrbwLpSP",
  "key4": "2Haen8Uno96oxrNuzmd4EA4vTWjeTZLhpAcDpKqMMhQWQcoQJ6it5NY4JnasJ2webGJavzcyZJw3xJHMPt7wcE99",
  "key5": "3pRNUDVnTPXDiwnAxpogjXn31rUr9RBPeJsdSP3vLpTNHop6ZSPVstZGAy4635s1FmMeKKj7rYMCvaKQ5kqkrwyj",
  "key6": "5DhUof6rLeNtmtNoKDoMURHLUpqiErbdrnRsJbw17sjuTZJoSV1Eh2g6T4Fg14YXujZJvJs2Z4gFUCFj5X7zLPjM",
  "key7": "2FdrtmzH8zdTXsHihT2FtuRqVR4MzuQWv2d5ELFrS3pBKoUFYbBsU5oMzDFfwVfTNRNRAUgCfTktnqujX3EEoHYy",
  "key8": "4pQx8rz8c8qQDUeZPikTw45mfgNCfi91GF57WJj39tqE31VjGx8bmcKo33wXmQCj2FWr1quaGrJFuY9n7nEL48tY",
  "key9": "5UNj8GVHF268UaYRMtkkyoJxdBHcHvxvhQS6tsdfaaDKgnQpsRsvzRaxgCf37SXsQ3J2JgNAWUj5X6cBfdkWrdYG",
  "key10": "4AAP6VSpqxZSdHuTSpP6m5UDyCP9BsYsubBCRfaTsoEWxYAhkZNvx763zsL14Y6iHrTosdDW72YWg5i3Ga67YSRB",
  "key11": "RUjsAmnkVowWDTUuXZtUcevgNUYWkasaykUVjJkZeVmpj88SE4uCF5qX2M6MvW9PKtrovhGLfbsDkXfQJpZeyLd",
  "key12": "5Ucj7pPzNCLmtFtm1uaniRCWFK7purPebLrUEiHLmNripYZboxS1EjnYT4bsmTFLSucp5pdUPCgj4TFZ4xeFVSjg",
  "key13": "DhymWCJZehdMLn4ycDpzDL2LgnbF48ygiJhgX8XGU2HpLBq57xBPnLSyNx2aWdN2T4z3pqK5r63QW7Wo6zZkQ21",
  "key14": "2784GAf8gNhyzUM8YVQhYg6qDvB6J9BfNVGzzHjuavyF8zGs7Vusm3QX58w2E58P3QgpC64tSoLvrfoYEmodZyCs",
  "key15": "riueAoJvxeXZ6kEFyYcn2qVwrjtSyX9Lb3UqVJzLrCmiUR5a4aP3sD7L2MoQE36wsKZ2Pm7bLx6MGfuoC4pH9Fc",
  "key16": "23ZPN2sn89WcnXRTREh6aR9z8opnyooXzBTF41L6sG4oFoSkyt5c715FMy8cPW77HcxMeYANvvrqg6gbsAXPK7YS",
  "key17": "3CBFN7qzAawt1TpTgkYGs6yvz5Z2gU6BPDBaFKYVAeMKKWBLReTaAhqA8nd97w8CzoVsz9gkAnV54WWAyNHQezei",
  "key18": "5At3ttv2hggigPx4gka9kiNj6z6yrDG4oycSfEW5U2yzCMcjhwWz3c4CkN45WGMdiU8ArNDU2g4umLjn2rX8xJfH",
  "key19": "2TJznupDprgGDTuJvihmD4b7uKyNSVSiik89Qatzk15sQEpvFG5vbcdL3h5zuuuHjAmUo1G3ndmJN2pL1XPxqrQm",
  "key20": "28wQzgYUeHP22DVRkB9SSmYP8pmJou7EJq8HRzwcVbpshHFN88RPpMQKGWXVNU1FRaFeJG2BycEjPfxDBiwhzXME",
  "key21": "29TL8KiTaXEqj1B1kmpxdfTPd2XytDn56KfdUBCvuZDFZr4fDq5fCtbUtXrcTt2G7rZHU21966XttfXJbFUD34t8",
  "key22": "3FbFs7RFbDEdVNUXUV2oRdxw7ekwaE5q5Ee5PWRz6zAgVMchc75RwcT4AiaU4Ni98oQhGYm4S9jpw8zdbzrYTGh6",
  "key23": "tex2o9jXYvgz9KDGTZMASnYHAuXZHuVohb4sHoKsA2F1eFdr3hGArhPmrWivnN7HGFtYHozyr22wvrJrSmfPYoj",
  "key24": "4n9r2rTqcTVhdG6XfnVdQJwpzb24FgHuynpCarg9XfCESft9FLE11fzpKm8qLyw1L9s2NrqnEZudHT4y8AzKCjpq",
  "key25": "4bcP7e5yzLAmUwkgDk1aLP5JiWfMXgRQ9mpe5MJrESQfoJpjGKCtNNmVXnAMkQuB3oDvMWPj1n2XHmjB2ZcYzjD4",
  "key26": "3PzxM2ZZyE8PfP5UsKPNcL1u14GUxbbXei5dip1R8r7LyyzYwjWXc7Yo9Rtq366PrHMNL3jWM7a8j5emBriRdGrT",
  "key27": "5oJRZfTPKNMJhnyhi1ytGSi4qs2TaW9ZN9CEUetyRRFeTKKY5Y11HCZBooCwLdQEWqPgs3uM5KfnJMBL6dyvVsCt",
  "key28": "2tKLVS83MGtSQKc1vcHF75mciLvcn9qnw52Mg5R13j4kPxcWBUTc4kxDzkpnZdq2tQF6ESoYeLRXU8cXbHVzkpXM",
  "key29": "3VwyiSgRUALQbYFQR1BhkqCCfQz4v4yu5KTrYb5MiiTCG3vMrdBSWGeEXU5Nk6mQKb4S8UQridFFw7fp7oibv47g",
  "key30": "61bojX5c5fscCc93b8w6UafzDFYpcTrHGDEktDuGFVm1xBdoB1V4rqY88E1hr7esVjHxpWBemGYfLdjHLVMQmPyj",
  "key31": "2Zqw7aP5yv1AwZFCFxYRR31MpMKpzLEKWDQQUzXxakoKfov5ARPwPSw73qxaSL4jnZA47QNcPrLZX7VwPuik8Kst",
  "key32": "5t532wVdQvsqkxmpXm6xAg1L3btGH3hgBG81DGggCfZB2n8cNTXDVcuEZ9DTDcEkRMFoMRuWuTyAVkLeogadFzss"
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
