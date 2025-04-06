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
    "48piQjU3WoQCo7JKGK4efoSNTCCgo1G3c8RbQEn3aZ5qK9ZE769dNsKFvJaeRQsXptWrL1J6NPN6Ev9agxm6vbmP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26uLGcXCmKfYrcAgYSwCLgRii33tzprHST3ZUtcu6A9haLQWVw33wkz2Z13xYed3ZQTb5KZ5w3XRty7EaPq6kEaG",
  "key1": "45dGA2URdqjMfw6vV7THHH1NW5J3fcuF1Xi1MajpZs71b88bBhDJFnMaNroqbsExYeXLKCcDB3zy3AGvBwmGEhZQ",
  "key2": "2XJkbHw63wGW77Sv6hDaemcGAzNbn6hFE2cwhVBgXxssvHuX9Hg1e2je692ZBVXCr6jjrMALdsXgXAeyGnfw9KgB",
  "key3": "27qJTKZJ4XCoRpmkAQiy3Qd5bV4L3DKUfSkHmngAwdiyrYoTKE1bP4ZgjL9pQQ1rnw21kgDiiEJKRpcLqzkmhQFQ",
  "key4": "nWoN6mkTWkdWvAQcnXYGu2ALiYTeaBzT3WSZwTMuX77fEnuUDwwxiq1PfRQwJHtkxuvfifKGqFnxzYM9X5mvDj5",
  "key5": "4ejuUSy4ahfmHyc94Z7gq2ppBayUiZgQJBDmA6xewqZGnNgywWYuBe2uA4NpEP6frCy5nA4rD2gSeNSTZKawdyiP",
  "key6": "3LyPooLHHzLNN2WizjTSSJanovBsJRujy4WFsvzWfzA5KBXafucoso5CPRPR9krkaBg7toN8N58hWg1iKVR2FfRK",
  "key7": "4uk3p11qsXXVwCeTbSqhg1sowiaLZfKy3vsB19HdR3JFjZHo4vb9sHsQwWStRqxF5hX4bZYsMZ7B7toLaE6BukLj",
  "key8": "4iH9ZmCJdqhXtZAMLoAwzqxZUDpzNzXnFSzjdKLNJSxQYsssD55sEbL8YzDJKgCxUPSWbSK9QKcY5bsbCcxBZrUz",
  "key9": "2Auco4MTuV4pw6T8EkLo3zgY9BrkyugxcGkWpzSxn8oRwBFuD6fgKaL3sFZWJzcLWmT7iEhGD6MSsT3n363Cv1Jg",
  "key10": "261wCbjLs7WKJLkAhSJafxrWr2xMbkmT9rqYP4MFZkNitLX6zrpuisFR8JJRc3udRSNUMAozN49x6zZAhK8aWkMT",
  "key11": "3zz3k1eUVc3fj9RjSEtMc4HUodasSwvaRg9X426qpmVDkhWzL4Mc2y11MxNLB7F5DZVuxWyUqnT3vcx8XaxaFKzg",
  "key12": "3gLq4ixMun1U5JQVXs6KyhjFeQXVbxjcrnPYuidV4GxBjkqLgWHWfPskn5SbL3pkBLpMnCXz2nrRXdtiVE9A4fFa",
  "key13": "2QrQMorJW4BiDE82eZgxhanpG9esqE2R5ZxnPs5bfcLaWTrX8dBxwy21tKGQtwC7AnuQF6TfTP6MbASB3vdF7feQ",
  "key14": "49K8wGpbGLCsR8WFPRNCABCAL6piQpefTV86YNafPkim5rctYnVNSUwNCrHCbufynr79CWuGNXgvrNCEV4Ri9m6Z",
  "key15": "3HghxyNdqPYTeokJmTxprhzJeXFUx8pwaALNn86hLPMcJAW9PpvXsYXbgQWJmfKuKgaocxn5kk6FfT9gbZLFv1kz",
  "key16": "kE1ovg6ejQkxQ4modpq3u8yCLM7e7c8KfFNngzKNXiocQdkPBQwFMWtYcWyeuAhZArvdiR1rEgpceSaTiacsJU5",
  "key17": "5jWVALfB3DjZpeS8CqszkXbxfgFdPPD5dBsFqM9XoXrnU6Byk4cSoBWLSChs5BuC1vudWNzD5zwFH4LLFrbby8VF",
  "key18": "56iXV372xQScLqBBXjUxJTtLdcydF1RVjswsUTRcBks5qx8HJQJqZi93nm21mKAHXGr8vJnKpG9QdmuoZGH9Erza",
  "key19": "5LNWzkT78KXhBCp76KzHyDVfH84H5rFrDNLDh5FcJsP3dNZGbECR8RM8tkj3Lprhoat4sGSxZvHgSoq8VLoeJBmh",
  "key20": "SuKTmYpG4Vd3b5AuWk6TgKQ7YuMTTdnVwCjzXCVEUk8Fpd5rhcNaoSPa2z6qaUHknxxDsmJzJar2ng1cJV97UXB",
  "key21": "2bUzbAW3kWGikZGPWegdLDFJVTv6GKhJ6JyEpMwK7ZVhjr5jh84qZwUxoFKBCXf3BPzbMug1cH5QE4sDHZMPUtcs",
  "key22": "46SkcnnncsYsSmno294aBaQVn4qzbCBXpyTnfqjqaCvnpptZfpz6niutSwnAvGi6R6uBZaQY9cDvWs2RZYnse2ux",
  "key23": "2qqpXt4AUiXvDwfy4WbCp7MVXQsKrrYqdn2LfpDdV3C2txcT6FQQX5h2gpS5VKSCqZtAoqruD5ynvbMYK8oues7E",
  "key24": "5jpsRLk2qDPAxZ3PLW6hkzfrpYL9BcwksfNjWAERBoYQj5k5w1Yipg4ihSN3pG9ZW57avThyhZer8FXPQ2kff6iu",
  "key25": "65Kc6AnEG6Yqc9uqLZCCNVbULgGNJth3ekeC425gba6Ano4jfAqrzRT6eEM5E47fwcu4tLWUktaJCKCpsnc2Uysu",
  "key26": "4rsct8hae79HepAaDh38zK1PUsynSSAetG4YuBrtV2npiEruk4szj7w6t1CVaYydZSvs7GxzueZ3Wvb276Yegh9L",
  "key27": "4uLdFfHbo786pmLkVw1ezWu3KwR8n794zS4AG25nDJz81J5c99PXtv1hn3GAi2hcsNMcyUpmubeq8EdDVgPWfrHg",
  "key28": "3UZDA3UAGqHgq1Yyteo6YujNfnPXc9AmRpGd2m5HTJCPptX86ocZFjp3NPSarkxwUQZc8DcXH37jv7uVbTx5hgqS",
  "key29": "2kzhmUSmhcAvT4Fmtx3e25vb4GtUcjZicXC3wujUsUwtXodMCVXrpK7E1ww2v3tGkhzEZMqHgsVagoY9KfgP9cX8",
  "key30": "9QxSknMHnrYoiJopy7sCjZVSmYsWAGrej4BHvSQnScij5jYd9HZni2DkH8qjBxw6XwEaVZBFkKwPNCTvQdh6gLc",
  "key31": "66j6bRMNUnyU2CbuCKD5VKxAed5BFHbTL7NRcJDPwaSxnVp4XNPnsnMkfSTNmmqxPcn8hxFrtt5cosV8yjzxiYao"
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
