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
    "bQ2YCkRmxTT6CmvAzdT746TVvDhxzgELtmDU9FLBHHPD5Sktoebdyx749wVdXKs668XiUL7cfzuUC6NDA78ZpYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YUD8LwScXGo6j2sAAQx1g3aN9SPKDKxwLFh3UZWJdSkSoX5MZfjRsapB4DxhjHivBVHnWnVDj6h1hfsWkvWPYG4",
  "key1": "3aHuQ2toZwcLGptfJoswrGvWZCZTqZRrQQjuseafixsgrJrr78v8ik8caF6zcfaujm64HPyH1xbueAyXREgjUj25",
  "key2": "3tXWm5XD9i3qfb5cvGEftGCF65CSjQXUUzuJVC7GWQB2B4cPMivZQLrumLq4sKZvwhgVM724ms45yFUP3PKLsqzk",
  "key3": "4N5MH2SdRYN1B3BLrjzTctt41Uf6TUsvb5vtwYAP5tSdEFq5MPCQFfY33rDyWwiuBzr32kNL6thYyHtpZqhdhKZ2",
  "key4": "4EthDqfzDWL17SXmbTFKFyypVFSaCV1Au47cm5qZsNKATz8rA6WcKD5zz2PdEurhjZUf1BjEsiDYuBvWdXt3Frau",
  "key5": "5f626T6yxHLDuB5iqb6MdTcKpUzMcsivg3pvWNpEbDYEqobpe7tXS6LCT459qr86ULpURqBdsaN8g3AggLVx9N15",
  "key6": "5wdT7a2i5Npqf876PKdEBxitp9V6sUW26xuR54uwWsAEcJNCRNu7Ku5LeacUHmoHH65aZ4H1djRdqZcyB57f2mMz",
  "key7": "4C6A3Vc8gznqS2zTREei2EsaNhZsCoAgtnAm2XjNr4WuSaEd7YhuA8nDHyFfaGrwVdo4Yk1LwXigBQbvpymv2qUs",
  "key8": "3d3a7jaDWsuAjq6U3YQnJfB4xS87rx6aodRJUdAbDywkcECyGyxNrhzcNzdKDigKFgsuj3wm6DwpUP85cn38yU6K",
  "key9": "5yugwTdcB3rZreEZ53RirAT71xgeMx9Dt7AfHFY8SMq8gX2n1iw8NBhtrgiV5iSV6aD97cWkzpjzRJxwyuSHf6Nh",
  "key10": "DSGkShNVErABQCevCK9jDiVYhxzT9oDqbV25BjJWvP3cXe9rQJDSum8PaqZ6SNvhVVQsuDCh4bbE23bAbSN3peC",
  "key11": "4vRhqidzG6KpNwnaHaEeiSwTGutnGXTo7KCGZCmuuCxK7kued7KkfN4ZS7MmsQmzXS6foBS6xeob2ycVjy5QobrE",
  "key12": "1eqtoTAXJqgFgb2yFTiEbic4qk15EwEr7qaywbmwc2uNdkBxHZyFddzXgy7KLQyXgijCektJSMJUhZgu4S2XeTR",
  "key13": "2cG1sAuAYN4XvDagFo1EtyPFdyFwaG9Z9jzCqhXX93PqAV6TkRbLQNHKBV7p3u6Jk3iDWhh6VS33f7J9ZaNszsCv",
  "key14": "tPjk6o6NU7mgR3G5YeV4hQQPrsQ1L2gNbH1VUX77aBCdY3z2j1f4nAp2AMc2bCbrEF5vXWMygN2ZGpuTmfHcTK8",
  "key15": "4vRHnfaTGjDt5Tb1EoTspeE8dJjte7kdUhbK3jeMxH6zaHtDzgF2c2PrMysJSrfe4j1mTYLABeRcDzmd6G9XVjxx",
  "key16": "5XDq74uVxjiHBaxfSudYE13MVXDZ9npPGHEqCJ2C6W5Ye8Z5NGUnYHqCe47yPN4e3TUX6sxc2hfN7fP7fExHT6My",
  "key17": "5Bp4xg2o36oi9QC8BW7tcNmRu6NgMhHGRcaEKiZ56UrdbbL47aAx1ArSBL5XEpwdMebsLKG6V31g6ss2TSKajkaf",
  "key18": "4vkxTnYxsZ2R7xqrcWXroCXcmDopYHFMZ3ZQPFjCwEJCqx38szSQPJYkqhzRYxU7tXHw9rZ1NA3fb6RSkrc8FjeM",
  "key19": "41YGieuigecRs5mysh6k9dem2vYMWYqt4csv6VuMeBAjCN5R1bAe1kUA2isHBCz3dLikDCGDTyp25sqWohM4qpD5",
  "key20": "3nFKp26im1LRY7EiSe1c2UsC7nSmSbbamsTSGRXHzGssduTyFrVS48r34876Pf99ebN1QYm5EtMHigiK9eFHFHu2",
  "key21": "2FVcJJ8NvQRKwN4nviYAhkHkz9JazsYHKUMunT3mfcLVxpMacMhGeguxNfGejFX2Pye7wbCd53uw3ghkkXQ1dRcm",
  "key22": "3TkwX1anHhAMtM48mYpv3afJQNQVnZpDwGzTsKsr51Dmd56PR7yySPSNynxS8aiqcnQxoQVpkpbzedjVe5kYhRHP",
  "key23": "2XCCAk99R5YrjjLNwSgiAFKpHcwkBGLjspEvoubXz3meiXBPhBR48p5TM4wZ4LLYXSwvRs1mGm3bfiQkBKoiUF1o",
  "key24": "4wJRUxfnTZUtd2TEPPKkDLZYnTz7sqUmu4AphKY4dU1DdsYP5ehhHTCcqTZYqqp7XKQbcSgwK5cmbhErF8orAUgi",
  "key25": "4nqCEpC9hVxQPD2THMfAdEUCgPp5EaNg8MpNimp9Bx6GochqN3oY7uf6EFfnB3zwzBguPvexPBEycPHfKrWp4yjc",
  "key26": "HHUnP1vRBP3wMYWqgNRo4NAFi6putG3PaZSeEicanJSBr4Hn4zabptD2reVXi95LypsgbJG6X71w2xkS4swTCzC",
  "key27": "331exhZCNxgc8YtPPmk6f6bhwdCJC7DMrorJnwFwx2c77bNTzmGPK2vFZq8TPwLuK2j5pCBYUXdeohhdmA3qdgwb",
  "key28": "5jFtjhd6G4R2rjzw3iFw7Y2FHN8KXhMhPujapNpBqBsmm5cvHwjWnqCA2Kax5jzxyxkFcjLSkfKkTPxAH6Dz6RUL"
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
