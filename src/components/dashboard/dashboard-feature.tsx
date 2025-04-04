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
    "4sdVucAkSGCzn8brq2wiBF6Et2AY892JgwW4MF2WkF9oRySM7JoViKLJpKKFAzc6GGzPjjvHhDZ2CgpQ9UEXz66T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQnRELs6YEN4hbEX6iLMMPMGwBBvUQQKkibzQACnrAGrTUPnske1DwT7scAWH19cxB4bu9LoE8PZKN3bdCmPN8v",
  "key1": "2iHRaBPPh1wnX5GR7ne1rm7jKkcQZ1zRB7XNU2pDWwPJX3DPDMQEhipH2kcDja9reqE3fShYN8kyPs81irUyJb28",
  "key2": "4NQgoqobk7HmW374uP2M9Gkye5S2dnczccNJkTEChVZz8fSXNADrh3p4XcVwBr1Tk368Srf79ZxJUSozfW7qah8j",
  "key3": "xnzdEGjeQ7kLSTtCNY2Y3QAkWemj7DB3DToCM1An7kp4hJy7xFkvdRztsJgmuhA1vFcgnweCHQFnXoXSKYPqrPC",
  "key4": "58hBPPRTZe5eXwHmJPHcaMmH6RvegfFV6pH1jMvJQKNbnH8qvJ5RxW9hSwBoSyDJEUnuTEsryK7ywYmiaLtb3gms",
  "key5": "5Gq1kSBWjJWbgLb214p6wE9saZxBKb7U2qgBTn7GDXbj3Cyd7DBqzszbgNoGsPbXnBjZiMfrbnxtcQJ9z6DZ5KF5",
  "key6": "3Ao4r5eo3aVHn4Gi9yk6twUWWeZ339AVf7qFSyZtgHLTTTzP7NCo8kvLmJBsbiSyjQBS6RPferpevx578yNEnMwY",
  "key7": "5FLLN1bomZ9Xj2kveZ6TM1NTZJAk7D2oGGkitjyjirV4CYKF6e8BAhEU8xAVUsk5fa9aCAx3pcAs9DcFizDdgGgY",
  "key8": "BMWEEw25GyAna1RwAYzo87dae7CrUFnspJUq4uj5J2jKT7vSrMhhPAQGAo5ghHaa3t4fjkLkFzEsGdfxVRDoSVb",
  "key9": "28ZMhGoWGD4Csg44er7UKSaiXDEH3bB6DH1XxTNf5dmNE8wkeK6axXyWbbbMYV86yeeR9i9qB6F9eTFe2y5ZiEhN",
  "key10": "3WXrVAbtoQp25ZSN2dJmuG4TBNospVRRuSjwBYKFVCtB39yzMFAhJj7KVSFSLHDHVbXjcXTHmdKZV16yLF2YstYw",
  "key11": "2j4rJeCtQ8uzqFdzyJLdgMCnraYksaJqhMT6ZkWmMcLmpiDN7NycSdFm771AymkPSFDRtKcMGmEHLicCGiq8Gwsx",
  "key12": "2YLgMhgtuUHA9qQhZb426dUC2UxtTjWySfPBFzX7v3iv6zdkGjH8QCYzgG29xwpvRvLrCbCr1ANf2okr45NsLc3f",
  "key13": "5NPraDYsDwJeCrf4vm2CbhRaWwHCs1gYTvRFN375vPHKnDbXMS7LXXDd7ySMVj8KNP1hKoYTukr7WNHrNkwKp2SK",
  "key14": "39Rp3HYKaRcnbE37CQfmMjXEkWH2pokVZgyMEg2uwHfe2afzzZYE4zNKYHY34Z654QLqBfMxQ9YYsKXQK9iovWV2",
  "key15": "4C8DhRkfKQ5Cra9o5hisdDneBHbagMkPEH6WrCh3XUPxVpps3xvHsd7XT4444p5kVf2W45v76aSFQNej7ArpVTYZ",
  "key16": "3heZ1DWaeNtmFTCNJdZVjg9WPkNSPecJFvU5cN7msWiw11wNSRmXY9mbYFTa4FMUKua3FpZBRdT5NRMpr4nECtYb",
  "key17": "3ph53PgTWxwZTN8VQ3tfTPSpg5ikhtaAeaEih9RredfFRHHjJT2jPjUdgiDzSiL3nXG71uVecKfyB4g6gFGcnYSA",
  "key18": "4DGhhGogRK5w3NiquWNrj7LQEpforAd9CvEREMeuESCQcUWJUVLQ3dnURv1kMC1jZKNTpJksGKJncy94iBELD2Nw",
  "key19": "53VPMNoWPb4fZrgVsjbkxJte8nr7e2HB5zSzq3Bfj4fK6HWbrKFa71qm3VnQzXHmiMfDfoQrieY7JCRXrufaaC47",
  "key20": "5ytMhgPZGwex9cKZrL6Z5TYGRMsMFBx3chPXNCZUfVaLKYU9GnJHgnLyh3s3uALqg9qK5y9mPzupVfHxSh5RMxU2",
  "key21": "2HuE6LDZCe8oXkbujfcaEaL9xHmLycBAKSxh2DqVCANasYJCs7FWYHFraymqQMpTsTn5ua6fhazQ7yY4BvCtGme8",
  "key22": "5w89LYxnfEvRMXUxgdYWeHFau563piMbQKEdZCSb9fG477DEQafqaogac9hjK8cXcWLHLD282j6oVNrYoq1cQzUc",
  "key23": "3kerrsgyLoqeoDBrieQo59UXCCKyTuxSm6ymZ3BAdMeGa9djq7KDKbi2tdQusYwVARKu29K36WjwaG7XBfBrQupP",
  "key24": "Pikp19NgDMfJiXi8fdN84gAjWo9eQCfqymMmkzSYGmQLrZ7XBynCSxvZERJ73D7pAWq5qj17xGtF322kTy5yTWv",
  "key25": "2a5uKxQf3SPiGoYYVdZc92ZyPf7eGzoBhbxVgLkpp4NPQn8PqXdgxqEtdjYgrUJgkwHiM13TPogmmYmEfJngvsKF",
  "key26": "DLN8pNYzCXjmbQix88B6GVsKQvyMWVHD3ptQ2Ek3CBmqAhVPLmCVYWiuJuKitZrCLWPxfM2U7HsLh1QAV7azmMs",
  "key27": "2f6xeBqGeB7VPRd5S8Ciwh9m45w9zjZRjjJy6WLpWUafLWsvvzjn67Dk7QuhfDs8BGmCvzAuX93EP1Q4sxb9LBPc",
  "key28": "288rZtVVYg5gxfBjc4CG1LpzQEFGgQidAE1XMb16nHypb5E4wqxXRQswHKs3pK3ks5yAZmDVLNXjCcScNapovwue",
  "key29": "3rsWsb6JLtY3GBmNu5YBzPPhfXQSFC4xkhd667bgNr9ZWM7uQcnqkucuJDorUSQ7kLBatZitxUsnVBjjQKEvGd1J",
  "key30": "3kpiKkbAkiZEMpbLsQ6L44fXGnfWE2JEDCxeriDijb5AHXeuLcM6axJsqAMYMjZuNn8Tq25VKttmWhaspVUrQtfy",
  "key31": "39CRUbib4kzsGMRiuKcwE5JHGQrKee8wQFpRpCVGBUHLJKsXWV221csh4SQMGb2scHcWALmFAfjm8gP5jdKdNKaq",
  "key32": "5EEC7gZLVUYhLJAyuPtQWPFT9BWzNwXKyg4V5CrhSifW7LbpNL5yDs8MnRcgZy9E6oABtojgyVR3CRdGwRk9ut2E",
  "key33": "T5PRECuoaGyuiwRJKte2ANxn8bzMPtnGLCXqJUZtjfagVWQKZUV4mvhUxfdawV8HcEckVw2DeA2Z7bCtLLZJoL1",
  "key34": "5DKNkzLEb2j5v9yT4JSiMdVomTNG5XJ1hM3CiFcQkXCeUVjGiDe22WXr7uJZUJLtbKvaARxoH8enJbKmtAmctdJk"
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
