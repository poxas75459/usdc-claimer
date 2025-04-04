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
    "5UQDD3ud6CHtqhg41V3t2gmjdGd8rghjzUrjSTpQkt7eZ7uWKcXsy1ppf4mDieLG8AkbEBQ1Hx6fxmj3di7pzfau"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rtDiirEJ1KR5xpVLTRpwiEL3x2FwT3m45VkPJEfbo3qA5rokhqUXWtQFjSyFeiTE8KRKTfELV96nymtr8b1afN5",
  "key1": "35GVe83RfD2vScSQrYuKxEFPK9csv7gNaczjYVdr7w5ogAEBS5sptFwYkkGtaHHpWzcyJaPKsh8doekN77B4XyKw",
  "key2": "24FGTTpxvnvwGP7eXWvi7K7iW9rpucBYHxKWvTDeo5GM3yw7TFPfjuYVAPnLxjMRjnr5XgmUPmn2gmpr1eXKZveZ",
  "key3": "2crs4zrKFkxooNEortCz3qVNj6Q7ijhe4dDNhsu7jYojgH3gsmMaPWSL4QQme3UNCQAPdBPWRsit8yzdeBFgvN9v",
  "key4": "64X3qQYNh6exDMrQwq3QZJLL1i4QkqZ5jizu5TmxBAQN4TKeoU6E6EFsdBJMmuiRtB4yNgcjuQ8uwV5Nbq5m3SWm",
  "key5": "2FqmEMvgeURH4oUc6TFwpHdRi38xxJy1syXCQcY6qTPRGct5GDPt7az31Ro3TqifUuSbvhgT1gWyHdWr9C8xdz5X",
  "key6": "3Tt9YYLo94fXVw1ydkP2CoEqcwKKYG3KG4866DYSfZ7A5Uze53zMbbfJTYvenDy9oSxphVyZyh6U3TgiKwkUUHwx",
  "key7": "2gRMW5ZGZ7ATZPGvoreptDXtQt53LGSX6EiAbZvZJERjetCChdK8sWrh7DB42YsDgayneuCEeGEqRupU9EA3qVFo",
  "key8": "3CWLopW5m8hS9uiapkDbSVK4XdzfVC8RBJUjDUGq1XFiczfcyzLt77zJF9YdCMYsaq7YXQspysda896iMwucmGaJ",
  "key9": "34XuCh7NnqWYiksR7zhg7w2K4jdKtNv35RYdmjDfNPKiKo2sCBdqsMRMeRviLgkLvct4NMyVk3nhTD9XYjJPd8oH",
  "key10": "YGcAmhcsnSeEkNTQLASRUMMbAbMkYSRA2s5XdbKwWjxaiLjbJL9ckHM1WvVLewT81bey8RBD26d1DpxnmAcfShV",
  "key11": "wd69qyF7AFUGPMzHME1gJP5sGnZndET2GEhPigeuafYwB1NT1LS8n6QUt228QpKAtuCEtJAVGVk4JTwa35QRCzC",
  "key12": "57vPQXPh9xGUFfD6n2U86XSJp7NfGmwLaW7QaZaK5fRauB8Z4daemTwT2c5Zpo1dM8uLyQkYfpebN9coYjyUhLjJ",
  "key13": "64hPcje5WT5FggFhXz4pnZUyAMmqzzDoCM2J7ygyrosqKo8WNszgvX3axHUjLnDdt3SFHVDmAzTg4i8jU1BpCTZU",
  "key14": "3jUQjPygYFTxrTcPnW1PXBzTQEAsJgWFQSE2Fstpeu3r3GViEvhnEx2Dxe6VSoaxsAyAuF1BWtc3xTY3KHALXkGs",
  "key15": "4f8cKbTiTHpDUSZy7LKxTRuq9F1bs3xsMNmCrWzkBvAydNJLkExRvE945Y9Ed1Zgo3m549GuNWaWig5xP7oqoMsD",
  "key16": "5br2eDb5mtsDepSgFVuKT2FM49yQVphFEoBVTmGauhmvwCPHoYeEVabgBVETKNP3Gg1xv6kwQAk8b3tNjy9zn76C",
  "key17": "3BpVL279yHgjVYMNhqTJ8wTB4wkJSDmuWGiu7LpT1ajxsq7gn2wWoNcnkrhgVgtrQ7FY8xPyXQP3SSAsgHe7Ps3A",
  "key18": "4YewmEjAKw7dkWrS4CeeUoF3cc37rdvSY3kJJccVTbVeP2H2L2AgGC2aqn7cCB45VSDzFJBUPoQGNgSCHURTvpkX",
  "key19": "22HKeEhDf8tQrkQ5GBdfiRv2zb1Qm5W34UuccK1n7d4Vh3RQLNNJqSFU73shvm9vDLX4umwJhHmiFDSyCsM5yck2",
  "key20": "3iecwZZh4DnZNhWa5J8xdsxkar1qC7PwzFF4RHtCCfsMBQbFaTUD2gzU4VEekMzAPuF6397k9bmfAh71Vnx7CBdR",
  "key21": "3JTRtAjBrdnn7KxFPdckddaEc9fyd4gjGxDyA9TSCGh6qq5XiQyZzFdNjgmKybP1xpoyCfH1GV7S9bzrPGMTiLwo",
  "key22": "2HREy3EoFTApXC4JmLhSX7Rae2PFy9tKX97g1QHHD3HGuZKqVLUQb6pHtxzwJ6QHNpUteRUaikAWyPdTCSF5mnwH",
  "key23": "grGQ2zHd1h8ToAnXGAL9Cky4rxDQyttHU5XshgpwTV3XQHYdxQBUnoEqH2moKbDUfHqfSCmteEfTxheKMszVGts",
  "key24": "46GXigJuqCMfqBkPFz2RWFR5K9HGp36B3zJgkSDtuxgwD6ZJ1dkqew45k1pBLr2qsGstTRv8B4zKuyFCK6FybLTH",
  "key25": "5VVXJqm9rdftncxTn7H8RFzJsYX6qPg8ENo3nAteWfzXCS4bXbxkKMWUwHckriomByfg3Q49SdR4FzcnjNvr88i5",
  "key26": "QPispv97gkAtyPAyRGFe5RYckWrFa6da7i5o7ALkrZZKa23m5rovMHYeyZSAj7oL6WS6F61ta8XvCp9yLnj2cos",
  "key27": "2t8FdtbgwY7aLYMcYPHgAPHah8DYcf6bTPoqh2NDs1FwD2ER1pkhH84Xnr5oW5osCHFDws6XGeBKDiuNznjDu8AE",
  "key28": "38uMjXRKfYz1wzPFf5QDZnmpHxdSVQ9Q2p82vW5GQcvFqT6KSHeHYEFr4aLzcy3tutw6DGeJ9gk8fmuH3Ev3KArN",
  "key29": "5b43DTnjxNuzBYNiQ7rDLYZTUn89iyL7QjynKMTfeNyBxMt7Tn7xCp1efirQKfjUs6dH5jV1Dgn8x8BgJxkLMD45"
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
