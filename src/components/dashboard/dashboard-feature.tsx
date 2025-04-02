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
    "2vqgNm7a623KdKfi6j6NAefPRSpuwqUHB7h5jymtiLrPUHNWT5Esk8JktNyojGdCn5NyasYzbi4edZEPSthgDfa2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XZndnVDzUEmecS3FjJaqQkSrpHaupxQasHVnYe8LywExtCtZANFX4uTvFc4qnnnLpcay6ed4UPnxhxEg1FDLo3L",
  "key1": "4wJxgiLer7y43VSzqayjRpPTdtFh8iuc5uCqNBuxEiXZuCkt7PzDjnQk1U4Ux4hak6N96qeAWg2RcRkn3AuiHaYw",
  "key2": "2RzgXQgH7Uetawe4Er4tdkpEbKm5m8kSBd2yT3afVVXn69TxUz8r33omBZvBKB3eiRSvv8itVbwKpCtyTTt87aZ8",
  "key3": "4r9RLbqp13yWTs5sv7x2XbY9QAzQLSv8fn9PCdS4owT4eDh33ESMhYw3NWAMunmsVkWL9q6wtsj1tyrJcggxbe4c",
  "key4": "5f48iGpy3nitwGQC7TGhSi4nBSBdQoenh6XW8U4DN7fdGjXYYzDRd7t9eKCVeUC6N62AhkHCxgFKWWjs3kzaLa87",
  "key5": "2QkmxBDLEv92SFUqPCfGzewzGSDxgK6SqL5xyPkRFtHfmQuPyh5CNbdgEz6rmmddnALwvMvammDQgiBRhbfAC46x",
  "key6": "3x8WdXoMnSy8Z8qUEjgLVGZ9JdN2wRiRqWA4sorTRqsXGfN9cDaox46LWKqSgHcyVZy1CggnyKro1NndXWYUZUot",
  "key7": "tkkzJQkbfA5aNGEs9psMA17a6hZw43vCTDVmNBc2bn6yDX1NeEt9Ng6t9Q3DVssCDJah2iTaKAaZV5gmcPQFJZs",
  "key8": "Q9inUkMK4ixEDHvgBLbyfcqVyMa6eDUQ9y2v61iiE9va2YT95KNY9zVAtV1i1g8kzkwzpiNpv5R5QkNCM2XfSb5",
  "key9": "3dK9TVThJH8CJ8bp8XoVEvrTNgbfGpzLCJ2CSpZMJKMrXxFuvrWRaVM5DXUAz7nkzhdUEAHSYTQvVeNFzEgPBJWo",
  "key10": "4dhwNdsKGkUEjHoBsMDewEwA2Ye13W9msSd72P8wkmCnQatBH76J3ZMnEQrkKy8XVhUB5Q6GQb1LK7qMj99iMV81",
  "key11": "2ANcMB1iEBX4NTYa2qP6R8vsfyNjwEAbco5c2uJGZykCi5mVVD574fxF76sEMNQGohinYJK2zFAkwMrAysSd2nin",
  "key12": "h1yQHipWyKYBXPmHGrLxmFfn6GZYKVcUYQPVPWswDccM7ETUxBPvehh2S43FxZsox7SM2Xtost3ha1ES1rWgtzj",
  "key13": "dfLPJ7VpSDemQuL5vWm94fi9GVDtLdpa9f8UVmbPGwMkZv992SXUbYJKvFYwQxHjPzoscSuUzZsb5FkZn73vQZh",
  "key14": "bJDYKrW6oXf9CRcTpgqpYaW569FSbBD3RKemv2cZpyexQxJcP3U32DymZZBetGx5qvjMTAs4DZb7dZw6KAqHTCh",
  "key15": "ykD6RgkS6cwcRAVPKeyiwzawmjxdYSfkmtzE2hnM5cpiaWdG3fFQ59ZponQwHyAqhP5aUSFiFEL31nQF4DfUSzL",
  "key16": "5MkWT3DbA5QbTxt4JsSVUAWWM7UQUaTyTa5YxfFb5Fb1KL8oj199izFFvay72yP9y4BuFMoU7zdBCTM1NA4f7P3Q",
  "key17": "aTk2gN65JeB1JtqmejJj9gNwduxzcwYDdAffR1Cf7cDrokpcsLoDyCD4o4ASCAhu7nfQvrRcrtCego2qiU8wHx2",
  "key18": "26VpBn3yYXDBP2FhL5UtTuFpRXofeEYdbujExg6kTRbBFdf7aTq4EabryDEiy3QjWvx1pcirEeA1nWXxwJZ6HwZB",
  "key19": "254BRv7VAWDrX3UG4QSjhfuMRZwtWfk2wsBhKN23LRAKcFb5qik7AoYL9dkkRScG1xqTzv8zznkzd6RkEDKZaMCe",
  "key20": "41o4KTteWSGAW1By3fpmU3LZ5b3W6W4WQL3fAEA1XsVKvDKnEhdvX2FyenwtzzNU7UsG3vniMChY2RYAQ7wEHfn2",
  "key21": "5FbNWsd6YV3uhdX6xk45rbRzVuqDzbArbHL4FCaSmqnb2NSwFU7K8tGx6Zkckx3XRDiG8juW85LCtTqXxtMZnsoS",
  "key22": "433RgwoBcFCgwk2K9bWN4oQpKfRpDxquSRsMQALjFL6vkGomKzbuepTYYxhHUvuPpqF1PpBcoYK8qBDSjrxxnmgb",
  "key23": "4qZYZ746oRbhGV2ZthXucLKyyZBUAPqLQNKUhjZV1Gwe7jDwbzf1mXr1u1qWW11W6t9vV48VrcPJRbM9xdDkg4BD",
  "key24": "9wadGmn2SjsgYBUMkwwyM6FVdDx1tEZdQKZZ1y2PuFXP1BcHormXv9xf78gkrfd9tHoNsoZGFcMSwE55frvy1qq",
  "key25": "3BLdEVPBigd73Rr6mFK5Fvt9o66YcbF3wwt9ixHpSeqrevSFuTAvnodS31QpHrrbJL8astoQLWWuRaZFcVNPcX2v",
  "key26": "9PUXphfcZDnG3MrdxVqXMwcxbVo8mSvRrYcPLzk9dJZ9rtvmGcPE935ukprriuNA8xgD2dn3PPqJKAqdWdBtgfj",
  "key27": "JvdEbfTBFGcdgCVkyJUgYUqmBy2i5j34LbbvuyL7Y9WCHYHSnu9yPCg2SCYNxMDPRK2McWanF8fnAGkBVPRt78R",
  "key28": "jTn9avtCFD3qeTrmcSAZU7CtiUAeJwfPkbm35z5ia3wL3o8KZm9KzEEs2QvqhKKxuSSLjzzUpwC25rLkVN5brpJ",
  "key29": "3rBZQN2gtkmZ4BGhRg6XfxTv3GfWmx2jYDXeLHMukmAuJkvdUZej4nxWWEsamgSHFLiP5sGLfQHVCRHeQpgmX8mF",
  "key30": "3izra5jHmBrZ19gqXp6kdA3arsJFzSHpeWhMZLdhMqVeJKWK1KcfpMV4zWR9agNiXHqyE1FzZU6D8dVXutKkXrb5"
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
