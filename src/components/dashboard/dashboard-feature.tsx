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
    "Su3kC481sX4bDqjePsqkwZrcvsrRAm3P1ADuKLFpW7FfXPnz26MAmwNcVGV8y3BzYF6WCcMTLqYCPXQWC51QsuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ygYcQKuHft8ygDWBth3YP6iJz4Bf16L4SgcwBE2vcq1Y2esUVoBaXMUb9QwMWhQsS5GbqWwm18byKrGKz7Mnt8b",
  "key1": "iTTDGL4n9NgMK1rikLTA8gnCLJCYWHZXgzwpXWdUpXooPS9HibujfaiHjnDm4mrreWehoQzhm5xDCAjoJ6oD8nm",
  "key2": "44ebyEY9EKfZnAKr92gjgH6GuBRpdpRqx1sQTnC64tAGyo4hqvPkvgCBpZokBaNYZdNvrtY81o7GswGYoRhWpvhw",
  "key3": "4qmcxHLh1brC2TakEJ1UXavSe5gDuMG41zQ6sGRKVQoynjKkPsVBJn9ywCdrA4ooAFbBC3NHKGZ1cRzcEPEpZSuq",
  "key4": "5Tg5QnRRATtF8gTzwrHDBbxCLAe84RMN6KCSPywVk8HsVFqq2bn3GowvE2zfP3R19qeHgLLuhAcR8wEVBCJdjR2F",
  "key5": "4wwhLjp8U3skBCsWh5aXFCjZN3qctatyxSiLBeKG1a5U6RvLhHy54EgQ66Ws2LvGwBQ8De92fGarYn6Ngg6JFbDA",
  "key6": "66LYYmCqXsTAjnUkxLpwuK389HXqxAmanrb7GR4r9LMgPSRLnQddwMYKRTzmJghQ3mAqTzeSTAFYDuxDbBchfi5A",
  "key7": "4xw6pW7hJRJda8xvovW7J5QHYHYNTPsTvDDw3M9pLofYWGc4HUb49yGgWxHzbjLvhQ2poZiEPvxGCsSn52BYY1Mz",
  "key8": "27EjAycDv2BbUpq36jzVdpUdm58P5pHG12wqNZx7QbeZZ19PRr3xn9hHVpLzs27onrx2tuEsnPzXgHHyQA8bSGxv",
  "key9": "887qNEAPgCN6zsoZ5Mk4H9ywqESjvPHoeDch7eVG34sgYwpZF4pqxDAgK1yNkWuJxvGQoHR9Y63YeM5d1A8z2YZ",
  "key10": "4N4W1cDBDcAh3sikDFJDfWDFYRNp2fW8fBLezxNxnQadc13bFAjsBwjz6Dbn52WdNC6t2tehUGGAQmsnrLwSMga",
  "key11": "5bXZEjTT5N6jY5a5qJW5GJBx42LbnAm2ZcHYdyEnim6FfeQsXqhy5m5uMMo6XRNnDWxFxb5CYjmUUghr171n3DEF",
  "key12": "4xwCx2KkejoKhPyhDZmkCVH83kHndJ7L7piJpTi9fGati2rFiveWjtYK7ybzpuDxZYonAT6ZMdsvDUkryftHHa9H",
  "key13": "41yR9UcJ94HfAx1882aYEbedyqE7pAEe6K5ZJXUX5MVFYzFuMpQYxRi2GduMHZdNdJk76Qy7D3wYXQWHk4L7N92V",
  "key14": "2y95F9CwYFL6naSFNx6E9bFnuCFfW9cq5zR5q7rUYuFHgN9qcVkLjZwrJ2SQ4LRqgwtfio5eNvB2ZDoUjeZvTNjz",
  "key15": "48F5egPdRPvWDT7zB4WdW56HcKJGtDFjFHntd7chKv2bSoeEyRUd5TUq3i5ViXM9uceQDc9oZt5KUBRBQx4NSP7i",
  "key16": "2CRH8CZjyzKDQtYg2Ro12F5ffiP5mug4rvMbUW3nxgxa4kXAUijBGPGCEwybi5C1XiwTaUZ9FWHoFKgRbiDi7pq8",
  "key17": "64hYvRdVVKetwGTnXBiZ29X3TPytvebW87NVUG5ohWSyJNott4Jo1jTmYXv3zyhkJ7Kvo6rMtFffmwZN9DjLZRhh",
  "key18": "iqaSXfEW4qHcXucfjQB7YTAdoQRYH68hEjZRnhVY6vvNw5RwuQp4YpQDn8Afo2X2HqQ6f29ConHnKpRvQz6i1KX",
  "key19": "4Ms469sqzjjXsnV6MFs9QeiS2S9u7wAdn8iFX73NfQSGrADn4N5XNa4Jt9LZLxvmNpzkGxpARip8CwnDY4mFfdkU",
  "key20": "aSLXCtGRaiM496HWo1oWhNSAD1ks4C6te1HekH1ddGU6Xefs5wn39cNUQcRhpDYLmciF365vVZYwQHx7Lr9hyRS",
  "key21": "5kUhSYNQGYffUawVs9sVkd3SY26mcPRfQLRH8WPJctJyb9prKtRNPSdSQLMXSibofnZebK7fGybXaNDY22dHfLzw",
  "key22": "2M5zJrDeeRgxJEiMVq69RSx1XmfcywMmMBEUa5SwENHyoyxfePTziMs94AU1o3WQDpPfgynq5ygSS13bikaDao4e",
  "key23": "2vgFUgyFQy7mdkJj85SKVCtyvpQQ5d5d2qSFbLBJa593u4K6jANyd2ckMqUcxdYqrTZcNmNZWLLLPM7hVDxJqrje",
  "key24": "24Rc4V7hTbqC6yrNkRq9sBDVcSEyFgsY5kGMBUc6RNK2ERPMwhfenQ4JSXWsfBra2DNHDjyZtTZcd6oP37tC6dZk",
  "key25": "W9uoXKwGQh47YxXGejmkYozgrrEE32r8ZHfcSFPo75tDsWae3SCvj5YmdoBwizxHiwLXe6nwcffScZQ53dpWtLt",
  "key26": "DoZ4MFpxX75XbPHVAtY34TsMezPJDLJRDHNNnxPk5Q5AfqZGJpKwWnNFDoUcW2Ph2m2VrXaeA1Xko9XRtF8GNDL",
  "key27": "3EdmXFK2QU9BXCKd2akCrFrdmuwvyrdHGjGFwjctNnj2VUmd6L327C1rFA5Cu4EUcPsPWYqvN74ZJTjUfTGQbbmg",
  "key28": "2tfk4WC3XQZR5kHoLJ3Cj7GTZeznFnRjheRwSkjodt6CJVEzPnehF2HPYhihzGDxQWiZtKaSuErdD1v6sko7NW6B",
  "key29": "2ysPGvNf4ZK1J81RFU11PmNPrLoWFL9EsvGA6Ev8nCTbRWyp8ceWe7gLCcQVYxd6g8fBjvqLoZFzQCScBhPkoXUd",
  "key30": "41A8i1DUeZtiQSzh1b3QVuHGiwyFy1D9D5fqFnRsTjV35EUyNrTtEq4sdqsSSybzPB124zQ196k2GWhUnoHLPNZw",
  "key31": "3yUMWYK3boYZ9uyG1kFLUYZ3FNXLapDBYR9T1wH9cHfjBW4P2FmHRdDPjTarp7D1hi1U8zyJDw28P1m2MgdDBDZi",
  "key32": "3sXHosXKTyyLB1DP2Bv1QZbYXgaGq8XnsJrb3YREGHVdrjbmcr6mFw6zD8KqfSXghQm9HhavrAL41nAXBXbQAMfH",
  "key33": "3rQcN67nWZ1R8ybeWnpvHwCfB6HeJrg72JeEaAbutqbFcdMH9GjG1TEENU6BqyzrRRmbWcmB9uj6UinPE7gv1qpG",
  "key34": "3Uo2t8ucXHkRnZed5E5gU87FiPjKhddmDLGLsLTYEo3J2bzfkh6eGUChkNDZbXhWDTQ8uyFBc6zJTXNauWn7BhBb",
  "key35": "3EohRtNuzitDzw4AQm96YywfryVA7cVaMkh89SGVb8GXe5CMcKPLRcdgugUSicmsoFUi13y9vHjSpfaydxV5wTch",
  "key36": "2vJSt2eQdUsoRjrwfAeJhfEie4SDaNjZxAEtGx3NDnXxBygeFfLJ8zvpY5n8UQWb1iYa3zY8yoxdDdXd6bMpC9x2",
  "key37": "PJTGMHZc4wK77A6n9wFVwsBQfuLjNRDmvH7vfQFrJaqk81dHAfAyebsLgFKncG4hkj9PVpxgwskNg2n7UUyD4h2",
  "key38": "5U8Pgv6hLZPL8bMSZGWDZeheEGF8rm9e5hNKXzkzDrrcn5tkUuL486U5vpkkYDDVzaGPxc3peknsrkG5VknHZUV7",
  "key39": "32CerRwoWURZRanW9YKNNmWPv5fQRMaHTwBcUKTGfAWdYLCu4X8nCfUW4uh9577VcqvLPP2q934mNqaGWqfzwkiR",
  "key40": "2KroD4FLYfg55bab5A5xVxcgENyBwdmKuLJjjdshzpEvuXBvNucScW3A1ufUmVB2DTxoQdDgLpDMv6poC2kdQCoJ",
  "key41": "4syA2Srjg8afGAXxsJycL7eb3jMfh8XnHZkueJM7ceA3THi6qsmHkfcRgxqYARpmZVxfUE2NG3bRHETjJuT3JEEU",
  "key42": "4r8Ug6Q1P2KTWYEDbTKw9tP3QTrCy7c2h4q2uAhLwf8Ts9D4WH4JVqgr2NhyuQ15Z6M2CdHoSwFg6CBUsGSCD9Cm"
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
