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
    "2CbR4jFDrzEm6bhKvsC6c9xrpPZgobG6gX8bmkqeN7B6sNxNRiawJ3cuUrebktf3QU22TVy9thRsuVVRrE1ydaxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UQTcsU5TPLQ7UKwHzw25fXXiRBRybXiZyiC1i7qPiBC4M2kcknWNTJxGLUVYUs8HbssL6WLR3spPKKBYrq5kV3M",
  "key1": "APNYBviN8wx4uiYmnH1oj2W6pDZBg1zkLfZpzgmTdsVkHWb1gVXXefbQPwszdfCtWJEhr1BaWZBr8wR7kHAKtTv",
  "key2": "4fiLFnp9gq9ArX9Luuj87iX9EdpKXGzYWZvcLgZsz4qBe3CypTKogQWmKhpKvHTo3k4aN3VrwzdsdQfUA1bLjs1P",
  "key3": "2hoKkr3zYWYrLJ4CE99ASFgb91U4637m22xp8xpN9psh1RunWB2JZq9BaKy4LD4L6oxRdYdeeyU2KkDi7nuCAMVZ",
  "key4": "2uBWeqQmJNf778PQKeuCfMHi1nr8j5kZPh8NxBJfQRWy7iERYozaexydkGvx2e2eMSJHTYtYTNh3zyhPHFJd8Hab",
  "key5": "4c9PyT561wfeUtCrDAiM6Za3rr7abSWdai8AgabdAhJFVSPZv18wrGVvGig4bTJVweYg9WMA1NhAfvaR4FMMoDeQ",
  "key6": "4RQET38Sic6a6WvBfGq3gWoDKPZjuGogRykFwhRpDtX1WQmDFsKaiXYdeQ5UYywKqChXCexaCsUaiHEAzmR9YSdN",
  "key7": "tveenRw43tWBZacLajxLo1troQJm9H8HYd23C4iaDJuRhK7tYGc3aQioJvMJA6PZf4j76c9USLwG7wvLVCEgvkB",
  "key8": "3Z698yFh4BUs8W2ogfmxCLCxTidZmorNPCYC7YVgr7nxc9EzczkCHpRSqZq9KcMdgDJ65Za94BLijGWEKdDqNnqL",
  "key9": "4P2FdvYkJetxzpYMaZbeuX9m4oTEMJaZiJjH9MNAjMeX5nDQh57nKywZ5BRCEdMhY91WxmHhLUrzm7pdiMN9arSD",
  "key10": "31fjVecEWywwSL6rnidkxJeAqudtNARZLmZkW5m9vn4N98kCgRUmuAkx59Jtb7Tj8BnDy9bQ9E74hPHjiWo86pZg",
  "key11": "3i3wUphAwsCtRwnZgrwuGMeeXs6JdJ3JuD5rh7J49gsn5DrxwgSD6RaLFfKMSonnxSxZrvpmD5sb1gjnRLXXaJrF",
  "key12": "3n9EBzHpkJRe4bMtM2QsmgK14TZStwsCvBiMmfVszs1D8L4M233gqnes1FGthoVbKuqqe6CyxX3ahHjGrCt2uUe3",
  "key13": "3gfwYjWpA44hC7HdY5SoUzx5SchPTt1NTWJ73XbtDgmSqMZ638BhYvnPUv6AeXqpthjkr84UzqeyqJ649rm5bg57",
  "key14": "4ZEWCNYw1CMAJuihk2fwEM3qetveBKCWMDAfdHULoE6awB9TttqUKkhCFqbBwWoMW1LWeN1EgPAiX7yjY25CSLgN",
  "key15": "329M6BqPb7Y3e4RqjjLUeeRwsDgHLrSiDCgsYJSuDqE6V8bhnKzBobUw7u7jmx69C5QAP5Zu5soeXmu6FqfQLva6",
  "key16": "3pR2JR1iDfGrtBr2HYqfpvRxoAKtsx3rGTA2Qk5irFpmU89c6nbYnQYzecXDo1mBypCa3Wi38TrVq3tsbrj2qSkL",
  "key17": "2Ucw3QiWJjAm49X3GZL8EV7bjfNQqybzWVsaoHgetqZE18kFhkdZWwkwxn6sDw95RLZ4WPrGJSfTS6o2NQd17S43",
  "key18": "59J1PghgAHGDJBUHUEFSLUBdGmY3JESECagatwWqM41qaFsTa91J7ZntmqWUeipdqMc4X44rLy5Wav5PPkEAMS5D",
  "key19": "4TdRbLKpYpaDEnyacR8y3CwCkCmgqU48BxAtxDUoGqbT6NJ1zdWjWw1su5Z1a89yjzo2CFnkzbRPmWoYCBiHe7tv",
  "key20": "3SCT3dnL33KQDKx5nBS5nHRiGiWHj94UFyJMrsMQDsoyoF9hRxzJbXhnsEkoWpbzHuVUhrdJueCHAeuGE568RDvA",
  "key21": "3NTNJeQ6NKtqxoMyU3wqhGkyy49awWuXb9vWbf7Z1mfoEa4Nf2V6HP2xTpSKSJZZa2zsdVnr1xaoWN3UYav5YFan",
  "key22": "5tSDFBPArXnuiUJN9B17oLwyhbwta73Ajrt8ARrkzjfkpQRDtADZPyyEw3kGPyhtKbz6HBbSvdApTAPyVRV9fFNT",
  "key23": "5PxJHgh6m6iEsQHggeCAsi7TLDnJvVcYGPGGMu9DpEq9HwQmweKHTvtjB7x6pYx6GBMDnKBj5jYy21Tys38pwqyv",
  "key24": "2BYXxRX1qwja3m7WZxCYxrNokxUmDS5Lk8Pt5gG2vojctX9e1Jsz433U1rwTciEb4EsiJMxYEDgdRT4btazHqZE6",
  "key25": "wmLPWt4nCir4zpox37BMM6mNxAkrfeTEhNCC32FfRFVeW7v8D7XZmBPfjZHFH5i3RA83DSNGWSDL3pvXpHCAHLU",
  "key26": "26CEA4nUNFTjMhpMPE6r9K4thX6ubshFLxithH7n4MUumuoExUwqZB22tbijbWVwCGVwcDv4QPYGHp3mpPqjR3Dq",
  "key27": "uvrgLqnCeZ2h5JmviTFzb1soCyezH2wqM3T71dHr8Ey346TdKhGE5ZYicHoPZcLghqivAN7SAePAzLsTVXs3PcM",
  "key28": "4m6wVmf7h2SnxzqZrPiLPPDiMxAaig7ZgTEXVvkTGKHErnjm1YvqaHhC7MPLthF2WBozpzEDAjubSZo2hoKKdX7v",
  "key29": "5kU6KZkrpJLQbVVJBSE6d4q62ri7nK2y5MMSpzntTQh9vZb2mubVN9hhKzj8vS9HpvapAM8L2Te5zT4Yd2JquuX8",
  "key30": "4mVKBodaVXBdfW7Tkz9VoVoydc5vJ4J2Rzok4kafJ28Ccpye62EqwRtD8GF1W5CU1tMkaA9AUoiZKAjRLGrVkLJH",
  "key31": "4FScVaFjqiJFirEBjoYdy6Pk3qsz5G1aSC4YBYx2r5ZtnezFt63rNN1vwQatDux1AcSSesioXYhEwBWkbofVH1w6",
  "key32": "ABbXtFSAPcFTMFPFYjNEqzrhmqLHrtBr7fwARdhXNy5GkpmKEdpwFyJxfU5amjCcFsC3eDnaiTV2FDQ9Y1d3U2w"
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
