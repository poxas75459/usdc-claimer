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
    "2W7JKcrWHfAoDyY1nwWY2YwCRxHJosjfSXVwq7s5cnLSTHPmiVqge8GNndEPK3dyKYTVQ7U59QaAEntSd73NLYqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHPxzkwrxtgnQosimRdfTJCoThXQdtbM1SkxsYBqmvj7o77uHtDRmvrqVJ5FQVtK9KCfxDjPyP6iLMcZuL6hSM9",
  "key1": "3jt1XWJu3yWPQFtFs5D2C4SFAbapojKTfxMMRWk12QCgq9vzHFae2cAYtEhG54Z6nsBm49CB8eerSy2F1sUq813Q",
  "key2": "4tLZED8UiLakNzuYmKws4Y7fcUypEkL6qoL6FrZkPjYeNDYQYeuQCi5ThiUexwYzNNJVMGEwb46JMQUSAoq4DjJT",
  "key3": "5JBmtE2SzXzKp91tnCp1ZQWrWfmFQRjvR1z4LJwdCxjaX2Z4uo3Ztnb4Kaj1hfXfQ8i5KM68mKJQ9DJ4HSbh8yzf",
  "key4": "2ja7HMdQdMnE2knfCCM8dTnvFmZe2ogKZ6CTr3aiy8wwQLC38jU97tU8tkxBkcih8KcvPYKkDf7t5FXHAVr7A3A1",
  "key5": "2ehGeKgQst7NFDDk2vWuas7jGufTmrrHGZ1iC162AVyPWsPyga3fqgyTCfEcQvzgPtAytTnaNbEg1ucUyZJJd895",
  "key6": "4vMeaBpD8HwvnWrPCyJjFUepSNbQKfC1zSiKh1oCSUUUcG3y1SCkYkcdpkYGRxK8UmTB4JiYbjtKi33SDoE1sATx",
  "key7": "5BSj4QZ4wsX2zSv4e9dNRfaYbVEiXxrybv1LzcWuziD8wKWLVKkvu3mDVbKryedcN88VpvoszLdYbLgLy78YxLNy",
  "key8": "2UPtA3mTuuMkfqxWifspnMcMtEtU2hFiQmaVgEPQq2jNb6E82ioNzEpd1QRJDdLyiDfWfF5eL8zi6R9y1ycZStji",
  "key9": "4Fxb1X9FCE8eEWZ7wk9YZry2JTiGubuy31m2Yn4V5BkocS2ejK2GEo6Zd2Z22nC35feuiQxkdu9RJ1jjKBmG3aMD",
  "key10": "sf9hiChQ7agys7xEsoNXCSSzX9ScTRWtLAKURXEhdEntoPwWahhPriPo7MY5xsANyUq2inhKGc5sruRqjiVggfD",
  "key11": "4t4CCNFeMygimzJV3mm7J9by9jQN21BsoTwGB38kxwN7zPiermfnxufQBiCLbgrA9cVLinDGCu5jRXaV61PAyoiY",
  "key12": "2u7V76wCvXokUHpYgTd69r6aDQ4H4i3AhjoTBeQYgCvV2UvzfbzUXvLHtpoxZ1Czg8aSGDB8QLEvFYwnPdYRShZY",
  "key13": "3qcNAH2itty5gnBoZCuGvJK8neBpMvXjDFrZYrPavHzjEGsaK53GgKkpBAn9X9dh21pJPXbMAb2GbQs4hfwWejGy",
  "key14": "3nZTQJdCvuJqNcE7TEwvrov1FnbRofNkMVc7wAVrVxAucZWaDcrM2Nms4MvjYJo9ymF2suRcfMfnmDUPtwtGG5qo",
  "key15": "5dsb8CWhKUgnB4aE6ng2Rei8yx55ycF5zT3LKtuEd3BWRDwuTpa5DCgXLzt1nTrtXPjPGjdgoLL5Grg3LA1EB3ty",
  "key16": "VcMUcde7JQWxT63Kjyez5yujLq4CPCuKSyQ51ELpMdxf24jVAWKW7j4o3LsagDCv1pk2Ju2hqHT25RhXQtpaVgv",
  "key17": "qefzTzGZkUFzxoEfwYQbUUPm3FSVEMVnFWk7LpDZJ8DN7ymg2ZVQjFixwMEZ3xyzrBGujijE7f4HLc4Z2EZNd6R",
  "key18": "129nPeD37YXpj4C2RLwXvLmrt6gnxjVDgEPmTDdGHUeN9ZttjB9ovoe6yEY3q4HH4FTDBB9zaNfbPaM7j3Fe3Pwt",
  "key19": "aUjEGVarK1QcPbjc7z6k9qvSqKcf8Uf1ffBjRVdCECodp665qV8b1FsnY23ZhaWDmudWn6NKTVmSkTumcL7y1NY",
  "key20": "Fidy3rzVCoUZ5VWKq5MDmm3yDzc5aKrS6WhxzQtBRsGwtaA5EdMpDrjhjrUuEKePRsvynHYtSRwukVdBCy7Xf4n",
  "key21": "49K5zRKiEsFKnQbvNSmo6674FSuBhWKqNKx7pz1Y9sifKcVr6L7kK9mj3JMuBqo2Ju4i15Zbv5tPZt7rhAUEMUDu",
  "key22": "3qK81RZHHmosuYrz83RPz3TTL1ncFKnWwKoUbLeqLY4zFSNfXb11fT591MWtdhHXPVaB3sWBNA2CbN6TgipvY2c5",
  "key23": "59DqgpRCkpGC2813EW4fbdds645TNG81PyX98P7xwgi2huzsS6LJVk95aHLTxibgSmaRkLqWiRuFMsXC5gfdHxnX",
  "key24": "5mqa8vGC33o48FZkL5pvKjQ5fcHcBjSffRr1GD9YD7fFd2ArbSNusqMqaGApkjxLsc1Vrv83RSBBJeU8tRYxmnNy",
  "key25": "2fyeiNP6Fa2ftHY2e2fBe1HaSWbW7u6DbEK2EkW9GZgYfzo5iPeNy19o91FQyjoznzbVrES5oGq1unyPtptta8vw"
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
