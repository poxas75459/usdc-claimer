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
    "3U34shabzBrmVy5L6w59RUCxUR5uuHnyX3gM9o4xnzC5mRh6DcUkguosvwQ8HjeN8yKqEotjhJ1ECF9xEHwCzTUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eEw9Bv7jrFJKF9BsHFYQMBrD3jGUtbTXVQpV61i81zWy113ye7cAaQWfz4EGFWdUEMvwZ1eEfoSEhmyrmf1Y3gs",
  "key1": "FoyT9Mq2DDUkMsdFDjtszcEY3X8sUX9Aa8L7G89qikvp1ZeuvwzDwP9P2RH78DqB6M1N4mgCjcNjJJm4FNzfrkq",
  "key2": "2L7VQNLL7HsodTjfGewmdy7DNcTHUSTEs7aGsebuhxo6eKm7QLVcVmLiUBXpsS13wffgJCpiZLemudVwUkGXbfDh",
  "key3": "3jcyhaZne6Jigy5sKitUXsethAoCfnrmhmbejAvSmUoujxQPHFcmYeyh72wXfhjwWXpwGE24rLTX8LvHmoQZE5JA",
  "key4": "4pdS7LMkTgR2nYaRfLkU3hnWBTt2R6meQVGRHyqFctdsRkiiT9J5irof5gjiCe3PwpRudPawyt8qVyjLVHv8zd5q",
  "key5": "oerzgvnWNNbK3pbkQaTff4oR5QdgKrDWa7c4QpdP8mrJekvBrw5VcHyudVhtEgjk687FotuaPnTdtgN9czePVX5",
  "key6": "DzhFnmRRvQURCoHEGvM7mE6j5mvy3wrc1YMcRf9NaBXLSJNtkypukLRsaf86fhMrVWBPbN2oewJzWZQdPoJNZ82",
  "key7": "4b3V1dmF5dvzJvA23Z4Q1NAsh6Cx1HEZDS3vF2mHKhMnsAHZMkarjkUQdLR1jRmkwjz1EdBDuPGSsE6i633oGRsQ",
  "key8": "3JbJX5DXCqzznsR6jgdP43tRp3raKssXP3Guur9at6CEiyRCptLpA7YPx4ibDwsoTNypvYhaFRcqGfWLyXpxaNzX",
  "key9": "4LvGaNekenr8KyxG5cW31xRtWTjbBs9LXwoNSyvwFtbqxXErVp98x2MGnuAe8v9TChAg6JzkH3vJbNTPb55QRZaa",
  "key10": "3PzqArhwC7GXNHSf26vY4g8p2WYBsKZxqMskDgG5PkMZ66SzaRkR36mkf3LtAYBPvd9BVZG4n76V9ogzqGyvRtJ4",
  "key11": "63P87ZHLvnYbvm7u82ehEeqQxW1HfMQnzkb697E1N8uX2kgA5iTQq9e3ovcUE4uY6PA9Uy33vN7DKtJHwBtP4EJS",
  "key12": "4qC1SMFAVY6ZcdWqedMc1cnnQ7KT87BKUEDSZ5x4Yx6JAmFK19gdDUixqUYiG5jX7hX7s8UjucC4KDXNjWFM7sP2",
  "key13": "46Zj4Ukw1du2HXGnzk9TRkTKJ5z6jWdMMdGiCAoJfdqyPpJ6aV1q6qcjX2Ch4qj1X82wp8dh1MAbUA5EjfkiUmD8",
  "key14": "3Vq16QkWRXmRLsPXdcXvYouTjKdKVEyKYE14Cg2yYkfw7dkrNSghfFnu14rnGqXJcxZTHAMUcvNmMdCcT7dDrPoQ",
  "key15": "21jmJJkumhvWXU3WhNiPAH1NcJAAp1Tt9MgJhPJ5AoJ19doNZLwrisQaJgAuNpYXnGj9t9uGB7kJBdAStwqETHJq",
  "key16": "3ANafY8rKEhSepxEWNzbqrfDT9LQtaDd83CsxdUc2uUaCYu7f9EmCwwkKPubaH9H41wUyL268KRxuX8DiBnuXmph",
  "key17": "2b8UB6bGXeCyVk9qq98pbNGSJJMBgfMGaMUXXsZoJFBkTca1rPGf4hUzrQmN5WQEKAXo45CWAyZeUnPxSEhRvUtX",
  "key18": "5es6gFycwCjBXnSEmUaduG4REHax8ZaWnvRtrvUAVHryY6hEvt2MYcBghJKML99bBv47bpZYytm8gmJAMXMkBnX4",
  "key19": "3CkXcQtRWtHpY72QBC5bebdf2ZkjSaXHPZwaQfkcNvTTPka6k6MTB3drwCmQuAAMYezga2MmVUBRH6vdVddmKcvc",
  "key20": "2J5BT4AMB7bTp69vL3kpgSrrcrh1q7xpZS3hekTYtwiZrqfgAgF4fZ1Wp8gFS4ckfQXrqAxrcrVPjY9fzmQz8Fho",
  "key21": "4aobqG63mFFma1xN7dhtsPuwvX2ZJVeymAJ1YFheQ2zT8CsGGj61tteFnrS4S2Cuv1icLjao9713PcsRY46WRLUY",
  "key22": "5ctaBG6Jg2yWJMGbwP2R4jSbxg9ZACqmz7mh1ePLcBLNXM5nhPuyT1AkJs95AKiUS3a41CdbtYiWuU9S27jzS313",
  "key23": "Lvh1RmBy8vijog9rZQpHcVzaqeDuzGiWz3GcHU1GBRjkNGUSK9ikeecAv16T6jk7GEyGF1o5jAuMCFvcxb16WX3",
  "key24": "4Tz3icdvcdjHVs7VFoHEmSdgSGcH6gNRa5Pw4ZumDcUEJJe4cRm1rjm62ygQhpxPN5HNqh3EfgxAMn1FBoa8HGPA",
  "key25": "SZ2SvsDNMfQFMBMvi662ijPzatttowRTeywcSkHGaAhGoSgqP22jCtAhaiZHnpguegu9Wr7TsHnze4AhD7HmC8v",
  "key26": "4ssSRaMCg2wDJgRGve4sAZF6qhvw8EqVqEEhUXbN8oKGY9XUTFqSUM1X1NLZte7KBkuCedS8C7UG8Nr5DLG187jH",
  "key27": "xLHWXkx55QrhexSCeeSovsh38PmMWbTn2WLiPZCv4PGNbLp1gmNJ6zCW5LVvE39BGazMdWzrrPpY6Eo8m44AnnN",
  "key28": "Z7sW5dQFJACDSYbtTr2A7r6jbRFgDxnRZp377Yu4rrUiHSCBThbfSpjBLGBRdLrDrMSeYDZftRRazLESVEnJySh",
  "key29": "2eZpkQbrHPG9JVcak5ZPhKZHfCD1pdarpYkRk75SDnhikBooU3TgJLiYZgimVAzBHMkfPif8vMyacRx3FR3ZteVz",
  "key30": "2S6o3mCn27y7TYLrf89S9Cfxiyy6FC1u7TnyKGFU4VSxbpxj41AJgJkLzaqqABuUAmXKHXRK5vUA3RE4AmRgpywi",
  "key31": "eBEbgMmB32WpeSoC9zXZPn67HtUAUvzYigdurKka2Eo9fNQDMnseh3CWzjbuw6S1E1rxqr5nJ8C5EW2ckRNPdFB",
  "key32": "3fM9FdsKcJp5eq5zgWrpzw26tYMGVX6H3GVEFuGCC7tDWNWJsGX2k89CCo8GnRAS892nyohaXxtxYHKuetgqVMu4",
  "key33": "3coSK2cmNYRKQuFXi5JKyFS7CyPzY8Tne99h27N47QnkZb3VcYHhnBGVCweGnSbjNi6X3D5Brw2BUa1oaq7uwLsR",
  "key34": "5j9fXdpNdwQBRh2hujotwv9pfrHveJUCvF446Q8D9FpQ2CyegLvXFb316oF6NYb4ybndYecQ462Aq8uGBRrbYphk",
  "key35": "pjrRDz6ndhXFa5qq4dbco43zt8LGm5SvnQFZhWu9x8WC2TEYGW3K51UhKhrxAbHiT4pj7heSAMpYV4stH2dCyjZ"
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
