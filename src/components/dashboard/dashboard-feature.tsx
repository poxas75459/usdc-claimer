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
    "aiEzAsi22mbifguzoX42kUeiPoSLjWopDQhN1RBFUJ2CLhjSFCFeJKKJSNHmiHVxsuM74mJeB3F8PW7uDiQHdfB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SVMV56gJWPNva6jBuRZWXZ1h1oyjhUxXXSvadZo1KTMRWsFU3E6HZdfFkcEmWeJ4iuzvbTCB9TsedhPbiTEFryt",
  "key1": "3u61G8QrXqYvTqqhrfPRWP22sH3fZQkobFCVC6LeHUmC9XfaVhnNFntNEr6Gg7foQpHE2XxT4UhehBf182dvUExp",
  "key2": "2VS27Tjnuw2j9T8wAefHCMWVB42U863nGvJeZ7jHVfuowrUMM1ktKTCytDm4kvKcqUxkvY8fMBvoLChzcvyRsBg6",
  "key3": "2ZAoQXDkWpVd1M3xL5yvvXeFhDrHhGbqjEf3ZSp94M9aieBpQPV5N2LArDsYCEykKw3gRXLvSHyFas7Vx2PDeoGE",
  "key4": "eHSVsYpUgTEc3SBc87QaGdDu3pxJHtqKSpW83sQAp86LwDgsw16m8Dd1RAZsJGdxzUY83XzhMkaxUDigetCgTpc",
  "key5": "2TEPYhUAiykVDnw8X2Lxm1x2FRMfvBvw4wxtbwJA9YVZCcM9Zn6NPa8AkxKxSNLEPjVMrKE7de5NJLWvmCcGcX3G",
  "key6": "4M6uHsYtCsjFjPAUF8MDeqTaeGASgvSfQWEL5SKTTFdUdkKPGixf4cjskrEzM9q7dmn8dFwouTBb8wcv61h36GE8",
  "key7": "5xNiFqjxybCP3F548pCPaJcAh6Q2YrCFnHSx5WUaSJNgK1xbekBfLR5ZY77An5JtBPZ3C6JVtkBnGzydViWwpawV",
  "key8": "aRaqbwKu3pnAdweModnLgvnnCPs9rxz5BwrqtywonWFkQNtbR5mPQrzJy4zr7iMsR2GDZWYqBL28y833HTjpFns",
  "key9": "3kzK5BDFzZ2BEYd8rDzqZKzCV6xcBAvdoBi3yWULfeFD2rUgw179CuopreGDwJmnQyokRDXWEq6fuWFWZE5YVKXJ",
  "key10": "3kgrvyT1uh8V59PA8s8RaCDngsrijhh4KbeTtSpgnMScjdFjLGACazRsYpVg8AQJYErMuHjWh7R69dXzodCKoS3q",
  "key11": "56TNkGcWMJEKeo7qZbCdBUE6bsKWK225LJjb6iuM9Rte584assHC2dXJkhsqknMVtJFiK7E7cGCGH4trgYqgSAhM",
  "key12": "39VWBzuryWH9jWWQjddfCcqJLrauJ7YHgQN4quenWBBXLVfJkwxnRKcxYgvGxVXpeXBwGfnK6ydt9yDMG4swQ75A",
  "key13": "3zUZHasq34j65SvVZ1eUNCeR3CjmQ2pB2mewgMsLRfH46qYrnugMhXQXLX31qCrH3v3icc4GCeLR4CtUDjgJq46z",
  "key14": "5upVhzJHJ3WM5Zg347FC7uXdpqtYXMhGLnCD1ujKZwSEmzBWXyZvxovzWvHVVetiBnCvBJMRQC3TG7cqcGkhrqvo",
  "key15": "5doW2hayAarffBLADC4hajFrZr3Bg1P97AB6JEnknfEi8HPndiVoa527xwpatrDW1DBxbBrTXtZBefitNqBpV9Vn",
  "key16": "4PquvjosWRRZphzhLUof48dVZpejHKDe9N5xGSBgK4dFYFK2ihkekkp4qRHHAx7DGWAohbRGmMHUJkUnW4tNAjB9",
  "key17": "4wawCxzsN7Qr4XwxkRWYvrzcDGwyxh6oF7B8n57Hrj3ikdLgStiEAwywg1eCrEMbf1btzLsu6ndhhgtk2euY2S1S",
  "key18": "PNQQkte6v5Cr3vUndnxAxWGp8i5LtNvTdmXy6NhZpVhwfxe2zg7ne6Pz6cbLwkrhzpgwpBvh32u8jegRz5bv5s8",
  "key19": "4HUki7Up6uB9xSdHWrBSXp1GeAmD1xgWnq7TQchNTX35muApQHPCd5WwVULpjr7QdZZWLfnwk7BY1zSJFaXFnpxh",
  "key20": "BTTyTSdU5qZBfq2G812qx9n73i9B1j99uwBCuN9shtTQte7e8N5vun5gNmAJRXhhBVuHFM9RCmdJhELAzbsxXPq",
  "key21": "3f1a8z1A2vATYZT9YBTDM8oj46AmAq53jVYJ7SYDyW8kAzY3APDdXZyQ899p3h8jJvJxDvztAkCu5ZnifEDuSbm",
  "key22": "5RR6CACoCfZh9HucFTHhzJ6QjiXdZsdm6rXHaVaV199G3AQeZQ1q8GUGufZEaskZLUmrbjhYSPkgmk7Rp9QH3zTo",
  "key23": "57vweHvZptkYPfPzYrDVGz6ouhgzmqx4Kwv3HkaVem4U7WiTt79ZxoA5nq4pHTmPJZt2UVWeBEBXnXePtiaf2SJp",
  "key24": "3LD2stBXfftbqMWZ22hQU75Uy8KpHRmGhDbGrFW9pWfVvJLMfp7HAcFddwsvPoNT6c2wTWupFuWPraHxAnxrTF7",
  "key25": "SVipgUpW4Ri2kqxTpiM4NYe2Nu2MwL1AcV35NjXEQ4vjj2fYKjjEjUupozBepwDpvaUJ2X8CaLgLZi72dneDgSe",
  "key26": "5aYBo2WHir3kecRzy6ExdvypADDRUMNQy5KAQVSZsqfuZRJ8Mtj94MPBxvFoffiC3Lyb9dbweKDE72pPA4yEWvmW",
  "key27": "3r7qNkLZpxtweGowPxmGgZeH6tAdBoqCxAxcsEfDUX5vNBd1rosHL2xRzeyKfbUjU33RKtoVEsWJAkP9X44jv7G4",
  "key28": "5eHhrTSvZdEy7xqFywmK2xDZQuq7faRdRcBb9hCBC6M6jrG2vyp3omVYGE14tuptSYXbP12zAErx4JZ6VYkdJkpQ"
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
