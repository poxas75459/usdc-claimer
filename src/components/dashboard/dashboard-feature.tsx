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
    "4fxSNE5g1wviJZQ52RrsFhvX8h62MXboiFekoKqYDFFA8EtPFVoAeKB3QqpGC7XuRYGYAUa1BCoTBGqMsWV43NqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iERwUyo76eQkwKjuV1NyyPALo1FDMuErqJSS71KMHyqmAVNKBZawYtFZryzwvCU5hdzdUpMsYdd5uwjLRZzv1S1",
  "key1": "bQ92iNJVZ2jvkr1X3XvmiVd8eNcbdZWbnDKUxCANkJbWHzYfBfjn32tud96ftzRptSmPF9z8jd8L5xWvDCGoj3U",
  "key2": "4bBUxHZyHuVEkGJa6aet5BXZy7JTb3xeyboBxQSZJyN4yj5CPMZouBC1nBEnvkhyhZiJukFvygXXo7KqypwMMqop",
  "key3": "3DgXqtadH3geMvWuEkkMLSkX14jofpSqh9AV9Vng8YP9d7A4DfZu2wTBtB9SLDRHaxjMaii3LprvNKEE8jVPpwQG",
  "key4": "3L591Y6y1G7uwJXmTMYsPWtFXjmvmXoRc1eGf5upPy3MqtsEChDJjVe6BWdJykTFpqyEi3yfdVkxj25kjHtktLxU",
  "key5": "45kYpJzQQMxQXbLqUi7LRXUxDBXdGGUfrdUqAkAtUrffeHLJvAE5LBCBkyKyxectWP74Hvhd9nwgoyqeHnU69hxQ",
  "key6": "bmEaWf2KsoxRYnvhycV47mRSgAnmcGAjDNcJNVq3ur6iRB58Z3UqZHSYCTqaxm3y12iHmb5GVMLyAQBrshuYQrn",
  "key7": "2LXbyJzEjuLfmeAKK17exq2auK75DeoUzxUfXj7mFD4SzPEtJjrRhXLttwyDB1z2fUosbQkvaaiTe7HU6w3oX2jK",
  "key8": "4fnTH1WtYNazYvvuSZuytjFT7sf7KWXa4MWt5gTdLDWraK2kaZhPsUtHiwYuWCZ787LpHVU42jPZLTXQxPNRTKiq",
  "key9": "5QDWns7FLeDrRDZ9GaJoz9krxA8WUTjP9VNpuvfHBZZC9EGqYKek7wJvGYQWEZp2xuVVyNHSXDH69EsdeoDJfgh8",
  "key10": "5wEHAgKcSVS6EKyHfCKP8nj6pLrPD5AX8mr29XbEuSSZLCd5iUuVLhc8mFbxpzpLuESncGj5wh5KsLgEsVDztKyK",
  "key11": "3B6etpnoQa5akMVz6oxvh1cNBsZEY9cnZQxNBfZ913he5amWELhicLqvoXU2FBn22NLfqM8yACMMKp6V6MciS4tQ",
  "key12": "2EgQLrLv4AudsZBXJH2q4ft7ipNTmb9Z3SgnAm7bXXRiog9k3gWUBp8c7jDzF5yc2Wgussw5A46DiHc3L8Jp6de4",
  "key13": "4yh77fbx8N1b1X3Hm6sTiy8bSkdT6FZvnUVq8bnaXzS48qYs14gBSxtbRN15HUgv282gKJg6o8toXmsm1xsfZpgX",
  "key14": "3q78fwQYfa411VUsoqMN3xB6i56zPNtqVd7PHm8jQt9dvqH4PTVxZ4YEMgZGcLPtGginBqBMsyQLNMtre2ubLXgY",
  "key15": "4xdQAu8eMivjrGyMrejJDUXYZc8tMqVqp4USgCKyh14CYmpcFHbVZ1C6dkTwQjyqN8JFYBJ3Aq66QMsXgrdTmPTT",
  "key16": "5MGTUL3MKRp57MDXvEzk5A8jsNqBdCYKBuYWULjjVngQRLw2WmLV1KbFFXNibM3yi4H1u1bkAi9UT4Rr7oPEJ9oE",
  "key17": "3QpYFv9GyDoBTWepwE13uV22D246SxEvuH7dk1qTq98bFPybgKrERM9byBaZQpor1QGemRpm5JsBWJ8gjxrdvHcK",
  "key18": "2x8BA8xUb7JX2uZ1pGhsFzpJXk7Dbwv1Yo3ANMK6vFhtacs61uNFe2tqe8j7RMSA3MQdzJnRKLjvCxUmQFovnFrk",
  "key19": "5yJa3wJjhjwrPSpSfQjUt3TriHAp9sfw4wh9ukFZkpwuqkNFGxFnn4m4DPc5obBrxWCG4Mi7Huj1N8w2X1qA1VfY",
  "key20": "ryzTsSruBdeWnXuuBKeW2cjgUvRAxFEsW8tkbJvfcPj31ow3bwpnvDpBMiwz66ZKXtZUL5C3zBWdk5Cx5TF7rbg",
  "key21": "2Q1xXgGLja16VreYoGEpBGWjhrRL5kGg5E5iYuUZQhozzX9XoBPUtPJLU8Um1paUBkWYTtaMgic32fEwRjdqs31s",
  "key22": "5RdJYW2crbDV1tpbJhHSFArGTgPCreNHjwgRYVhHoxq96oUVjruNeFpQwHaCd3dCSnNXiTBxZ5cBardKL9YDTnin",
  "key23": "4buva7cMQFRBPqJgxmMn258pGzPbLSgMbTAwzCTfBcvLKjguCGzVSLoKdPJGAayGU6FjBMDrXK6LW3GfQveJ7J5t",
  "key24": "2XXnYcMLa8LX11WAhyVMHcrV1V49xLtW4eyyB2S6YHKYfR727W8kvdhEoe9jBQfJgrHuq8g9hKG9F8A6YqLdKMnf",
  "key25": "4rfCEo7T41iTfKjte1ZxTFz1b8m8c6QoLxm5t1478pqn3kMrWb7eztGPdDJTCMj4hiM3qHJuLQqiL8wQ29wZu1bE",
  "key26": "5cf8o7GZE8qVBXj78mgjjEYEr1exg17oGcpaqi94fzASF42vG4UXriXCVxqu5SoTShvZv5FEF9AqybTLJ2PUDw7e",
  "key27": "2eCTPvBADmtyzvSX4uboWNCUi9in7oR9aJ5S97e4NKgQ65YVqLMtvka68sH4tB5vNwZYZ6SvGgLRUhnSgF3pWLwr",
  "key28": "cTju7pXReGPFfGVZ1pKGkymf2rDDTD8dzso92tM4yUKuwaTCzp9Unxfbsb8upQdxZiAysTwYsRZM2Zv1aqFbydE",
  "key29": "7AncCW33kLZTGxhHTr2d94ADGvvem23zrTxrRkdfG7uqrpaBS5eWAd81Tfs6GLECAVM8s6134ie54MopB1qAL7R",
  "key30": "VbnWPHT4xuqsB1VjN97vQqnCt1zoxYjyepRCqEdfvssh4RE2CRRZVcbbpCfLu3ZntN2cdvMVQG2ygrmDaQZnf2S",
  "key31": "2zwT7paitqVD3aGB4vcLvfqe47qr8EodueLPKpoY7kZWErqThJyEjCqLsnct67ezU8UX6wreCSqPnG7WRSzu7sA1",
  "key32": "2oymZ9MYJjn1d6Fb1vXXsTk7dV5MJWDcnBveRLWQ5nRxcRsxkKgSH9UFbj2BWJNpHFftSmj2ZNRNJRCLqf4KLimZ",
  "key33": "sGRzcUMLSehAGF7y1YBrotAPnU5LoakJqq3xK7dSUPW8VH7iP8d8TNLa58wJ6hJrLuiGevsQgSXvzmZkGKsHf9F",
  "key34": "3bZ9YpLWfaZuhZ2tXTX1rrXDscewF3cfmP2YiSWpGmQ6MwzYewYt3BwB6UjE81GVaNDaXhkVz3fW6mhRCb6UST3b",
  "key35": "3HTR9uqPifDSzXbjT4hPzh6qcogXKe2v9Q9Xb5qpgMjtsCFCp7nMMnb4GRGCVSirddFfStVvBpdBdUELnDunUgpQ",
  "key36": "51wpHSsW8LvS12QguZqCKxYhX9NCwvXGZHmMWwEV25hBzYVsQENoBeFPj1W3bkEvPxxSvXXGDmaYFVgNx4rg17bH",
  "key37": "zhCR13oaN8mZBa5suLWGCQco7SLvSmKAvQGDb4qFa6q4EpHPWNcLxM3a5rQwM3A3p3RLSqpghHG2CZFq5mE3gRP",
  "key38": "5CvFkJVhEcXBqvJxGss8KhSidUBT8vxwnAPErj26PCSwxMaJpvLFSeFMycxfXGPV4uzDrjVohi66bWg6iTT7eqd2",
  "key39": "24JTtR9t7LM7DKSCpyD8UgdhYdthc4AWAzPn7d5sXZ4pE6FiyJFuBiYaqq9B7MVKC4TztURWq8eeRH2nEvjNVbwo",
  "key40": "i1XHNNQe6Prqid265oQ3a6x8wCKnpb3tAQyphQd39bNKSXdmkXM4RKELpSC1yT9nk9Jv6BkwoukjnnU4DFWJHF8",
  "key41": "3kPk2onCPCeJawAHazPoCzHmwFzkfDTU3S7U9NDHWFfbjc61DM89iGeNJ5UGM6kYYJFqdWxG64JHN2fErKyxhW23",
  "key42": "52iiVcWNcLgMTptFTga4t6XRN2ufF8u63tdxRnhjdkYzykDwssLpf8C66gYyAWP1hBziT8r4jmwjkUXRJkyLRuES",
  "key43": "45X22AvtDSqMyt4t7Tbo3D4anWY4pEX9HM9nn6AgDrjgfC7taJW8m8FJCGpFPKJPCdX14ybMMNptL81f41gosnrE",
  "key44": "43sdFXaK3sDGrt5o4EH7XqpBDTTFY9AqtsXXqxGUMxraV7Ly6pSGe9XWKVx2hwwJtEykFTQYRM51U4nMDNKWVtEZ"
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
