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
    "5ogMhqEoMPMUZZqBiYu4ppuZLQdFfQJu9bB7oa71eC3b5prgwnGTt2Y5TbNrthhNdTiX2bUU6TRK83jLxCxs3tZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ESUAV833cGqMGLki4Z76jbX5JgTjJchQ9R5bdSrcpHebdDxwMKstbxTZf3njyBg6juHQviUs9jTxdnX6gDdd96s",
  "key1": "3AGw6Cgn8DtCcJNHMdgFjqudhTB8qhndN3e2hkUP4NXREAyDcd4BLbvuQAjBHe834MTJgP4vYJBCqeBBbTckcVpq",
  "key2": "5jsj8Tm7evAWsvtrN6aykzeoMk1Q7zEdW72M88vhkboY7FiQXr5jHxWYDVWqRHVopJn7qE7SrdZk7DD7NhYY5gsF",
  "key3": "2rZuzyC2AiC78ofPuGjL5BuU6S2cTschdAPFiyr55WAvoJErB6ezV2D7zbdPPdrw4xxq9CW5RUrX4MKt8X4z4Qt2",
  "key4": "5JfcmGnuAyZqafqh92DgudcY7ssxMLo78yNEGA8cgozc2qz3xVcBj9Re659AzooivKEU5KXANyBx1uwJb4xoP6Mc",
  "key5": "Zv9cvkb2Bxu7Bev5PvYgtM9PDCGRk4RzD1urjLCx1JrAuJ4RTc77TxaPaPJhammRFPqbdkbX7Y5xmzVHMEehfdM",
  "key6": "eerG76HoPGPKuRhZx7SYqzooVSiv3Dyix9fNi4tXQyfCSSCh1rX2zgJPMDfjNeVATSSarkSHbpLugo7wbJsqyYy",
  "key7": "5jeieWa7diZvtFxGBQ7ngMVZ4BxFCaJPtozm6c67stbx2tYJtDkTjMgiqR5UUysFJ6ByAjJzZbK7h17DGrjXNJwq",
  "key8": "4LxPgWkatJfn6zEQmbGNZtosrndtqjvGq9krSCgWTjpgJqx8JhAzamyP5w1UL62EBrr2SRsyjA2NkA1P9WALeBD6",
  "key9": "5wKVzukfkF4RoTH1LiKF5x8PLTHtk1DBQH5Q8Lv313ARo65NPHKxAHSsrueVgQbcgQHTxXnbVJm6cESzuHhrLpYc",
  "key10": "nAxTeKUyjQ2CrV5svk8Zhgg4Zovzh8UA4ciWnmtXCEKVpnQtSj2RJpKRuXQkcn1Js63RAeqMDfAgeCqVM8aZMZz",
  "key11": "BqaxCfkvkDwfnZfouYakdJ6xLxmDmZk6K1Jm1ucxCKpR3uz6SBpL55h9cxTL1k1EBWG7Ps7KRNtgqPKYJCZytNA",
  "key12": "4uAoVyZDjnQRo7A1GA62q1EpFfQkiccyRE63y7AXL9qijQPRkCBWRFnopdFSYmrYtCY5sEw7fGqhTbwhtN2nykki",
  "key13": "3Vt8nv1w5nyUXWnp2Eb2JYV1UEVZQvaW8L6hyefpb1B7UGMSK4EHdwjjntsyPSRNqyD3QQ3nLaUJ5V1PHxAxVVAK",
  "key14": "2jpqSdXaVYc25hTf5HNtsD7rEnHdSg7EDnS59rCJe7JvpFj8FgWYxhwRzbbummdALt6hXDXKPJTgYTGvTfn88eWx",
  "key15": "2Xhc2MfwcaJvh7GqnTmxT8jwm4amkAsoFNBFLRFkgAgESXoKDJt42GmNU3yAQHQWyGFwkxBUbiN3DTwy2N9YhFcc",
  "key16": "Kvg5QsB8mTrtGbQ6sM5jse7ArtNQt3CDgpfJS6Q5BVzRkfLPp7YEcBrwEfh7vx1Mw9F1uqQpZVNerJ8QRPHce4W",
  "key17": "2Y3qWkcL2DVHFMKrM1xnCWQwUyzcUjVEFDrEeZhgXx8Zd3W5Rwu6nTau2iYG1GMhc551zWwPH3YGAT13gX6w1Pvk",
  "key18": "34eGtmNGcFchZsWpkeTWjjNbfFKhAszPcZhvZWFLScYtqnFc2MyPHa1YGUVafHTQVpzuh2PrcGZwXx7EAmHBW5oJ",
  "key19": "3QWK2rbfzifQxCwUGga3aRWjCiBp7uBJbssf6mnBCQMJuNHV2tyQX8uqyZaS54ZsFMPZqJSPiMD8ZRFD9WXXmaQN",
  "key20": "367pUnuQxJW1ZYC576ekCoZgK59DEBktBNmF1U92jRcBNyucDZJZZukyHYtLqFzmowLh4SjK1ddzh69vac7GyD2i",
  "key21": "2ZMyyQ6KfkbPwzWmofajeXMEbQYCwpV9TEtGeBtgJSe3j1tbQcnWDbBhZ1adDait1RGLNgBdnUYhcXnWBpb1FhF4",
  "key22": "3HDmy4teJk5AFXM6DF6z4umfoc9J2ufyLYGSzJLbAbDRChLZj6HpMmq7JHSbYNWibazR8NYAZ3xwGWtiTKuVzyrQ",
  "key23": "538MnpaLAMBDUknxD4eEUBfiBGqEFN1uePyQM4yBTj7RJcZ6XkNEZhTxnZ4amaWew4ZMC8kQ2FPnpQL6AcqjwKAo",
  "key24": "3RVJXFdp1DSMZ6emc5qsKMLymcNcJU4rWr1wxs8VNAdmEVb9aQyiJEPoaNzs4U13gXyrVUZWx44Ggk8A9u3758mq",
  "key25": "u9dftqtb1F2G9h8odQBV85nAp5FsGUzwfDBaHsXVeNXWk7rBfSx5HybUZmzWn8d7omfHEYQsEdqLkmkjx2xVeeK",
  "key26": "jMbLdFHTFoiux8j7qP2XyTASn72uGudzegXZWKRpDdQk9PwaefpkyXxKqkpp6gJJA3T5NnB8UqiMGMfUMoTo8gq",
  "key27": "28YagMA4o4zBCGrcZFZsrjUsDzzfFkJdGGVUGSuLm3h7EDjqUU2YmFDLxwh6r4sUu99Eys2drEnxHfEwhAVkd3yr",
  "key28": "5HJZyac5DTfKEfvQsEMLmpLwqGaF4h4h8gfyqzB7JbTiWTkkpaTjPxoe2s7kDpq47KqHn8gXEjdrWEEXV6mcWStW",
  "key29": "2iCadeEcQpujLmz1iXML5uJQzSSZhthnYJm4jjZwXtuXTB3Eh3BfCifNQkSE9pd3wRfgo8FJWsZuoiZR9kzkQjU5"
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
