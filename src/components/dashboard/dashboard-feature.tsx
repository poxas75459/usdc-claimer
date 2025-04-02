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
    "4FCZgq53KCKojFVhP54hDtwnCwq7Cz1eJKnKGKEihqAe6iFNjtgdMouDo9SWsoqXsMGRGSXT6bfgAqwS5vmXqabM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5up22p5qnQUAcajBSBTkArsHJ59CwDngunb8ssfsGzUwLpzmSm4XVC2hR1tFLgkUGYPA5tJFYSAtP4Zv3AF19sq",
  "key1": "2evCVFB254Y4mKsr9e2sUV8URX1JK7wG6NgfdRdbRTXZCsmBCX5jN9MDtnT5CkyeqptF6feRSZMvsoJ4cWjNPfq5",
  "key2": "2rXm7yPdKwj6jkJoqXEKtMsMR8b51uHcUnT8FVh2wmrhCinstFiEFKbXWBdGjU9g9YtCTuRMR6wcE58bp3845JHG",
  "key3": "22NybQe5UDk2N8uj4yWiSbLaVBs15p8dDxBog2oF7ziN8wUCvc9nABCxqJKfVoELodNAquExgwYgZwZ1ATusvy8D",
  "key4": "28tnb87i6B5MsdmYNMg7KXXsV6tQchurcL3ifVjikpNZra49GZUT1x8hvh4D8qh8vPG6dSyUA1NTs2Qw55kCqbvN",
  "key5": "cio5PaihSXoTmWS5bfdqRbAp6eoEXQsPVBSiLfexjgq4WpF6S9XQCpVKvuLmJKxQZRZLAGnukvMAy6NWnkpDF7h",
  "key6": "49umnhXSpqdAWgSAFHX8XEsvDN1ebS8mT4U1Wmc5hLvEnFdk1oeuXXSyREroJVcYDgV3c7gAo6ruz7k1sPB54Jwq",
  "key7": "VjAnDjQTiLS6BFC6arzXzr8fvG4id5iLs89xwLz5myNXP5iA5HPH5M5tCsLzoNGepmTZo3s3NG8wEycmGyaUw1y",
  "key8": "5TCEwqyJ4Yda9bgDwcvoMjaetYZGdYGuDYhw6DXZUdv957tkz2Ygs1L3aMtFK2UqCehS2iCrtUm4HRmB5djr6AfD",
  "key9": "2wKqyHHg6UKhNPh95fD9vUUKiyExMB9pYHLJyCdrAzXafG9bJkRW5aEsVmwe99UyKVcRnBAF3YTFdmd6T44g8noB",
  "key10": "4LzWecosV8yFArswyuPxUj7Ykg968JBoHPENVMLmKbNRzDASqTdKWCtxw396XASYz4R6ohWhhoyKeZUZQF86u1Pd",
  "key11": "36a8yUJ8T9Yc7iVM9CTb8TuS17n76afMMbH7dna7ddqUDztCijucUMeyUbrUgpkoePhF6pyGQMY86DkpD6RmGBNp",
  "key12": "4fZBUAJnqCq6Rh83NYYazPXs2Y3ehCACV8diUu7mpKqpG6PPt4HqTguw1qfL1TUCtwPE1vakcDj2Ub6RgaYau62Q",
  "key13": "3tHGvPado3wSCeCk8MH3McaADHdXABoc3irdr2nH6afVzfh3n2jLJktrJ9KebJktxwdy7DrYDNWBhYWvBwY3rEs4",
  "key14": "3CkFRronQCsBhUQzRp75BztgnLEpB87UsBES3vxyceiByfp7Aqd4e2VnqCeJkcWRZr88qkGF1BvNypsRsdvVBCuq",
  "key15": "2bBrLLQEVXbkGpE1d8Hvr2zdZqt6bx6aEvg5sRJM94ahhb6GoybEfPKhZDod88EWB38vewFeGSHTQaXfWmaF2EgA",
  "key16": "fPiivJWEzFSBjypzAPjCY2xhqotMsRGaHKL9poh4fDA7xjxy3aFYHiVsbkeqRQKVZCrTZ6EU4teHu4Mr2j343tY",
  "key17": "47pRxwJAirCbY9tuz5JuoRnzuYTBkcCe9R9gaNFgmgdCcF1pN1fSgP1JV8gamcrMgSTivxNod5r44s9bkc5c5soy",
  "key18": "3L97nh99j7XiECjybDTPDnmyngYhKMzNgxJu4No5iYLTZRB58X3Bh9T1tHVB4o6WrFiyzxZzffoNyZGRhVA2jKZX",
  "key19": "33zntcWnAHTZ8Lbp6DwJgTDMmz2jmGbttErfuAnaBh7LQiUXF83o9T1qFeVxKuVpZCjjp4MxKxhX2YpgscjKs1qu",
  "key20": "2CPy94jSUQMGpTg9ikv1kHd7qhKZpFoDgUJoAx3CgToBA2Njtkg951FcB8nY4uSMvppLpgGdfDbQsf9A244kUrhe",
  "key21": "pR6doM19DU5PdTYgJbMWMCoA4atP5T8m77yQtwhkjZuvfzo21xQtFsCu6RuFoFfqZKR9EomNZC9B1iENFAJPcsK",
  "key22": "64UzWHwPAjqcuEdtCVwYde4mmV5BxLHYwnGsCU2zXkyhbP3EBdEZLViVqsKGvx9QbmWakqQ7CMuwZwAs6eqPGHEW",
  "key23": "Kf1HHg6scV1CDYr7hudCUVgbzK1AV7BKtz1VDLkjjMaLdP1sC6trTfrBBKkG3tsaRfmoTfVopuy673f31Ngod7B",
  "key24": "26Wy55LSw4UcJKx4moPncwfgvZxTCzWKtEVgocxCZyp1MbY4YS8YUkiCYp9YQWur12BcP3SYxs1idxAz8sCv8yyr",
  "key25": "jLd5N6nEC6kDQdieBGfv1zYDRHZFpjGvkm2TF2c18je9HP8zeAETc4ykC5jSugdkPU1s44C9CbxVNRP6AJm9Wox",
  "key26": "4tjVBbR5HnKeSGA7i3QxRW84n1zoq2MNfLCZEoGTdwjVmjuPyecV5K7X3Woz2TiQjhCoLEris2744KSj6YNFtyQM",
  "key27": "ov2138iD7xEh55z4feGJDb973xsbSzBpUt7RJbNdQUANcgY2e2zMAyB14jw53i5GLCuiEzxNzTUDRU65nk2gdLC",
  "key28": "4BB6oo6Mq2cxTEqioNEhJCSPMdxBcREQWQVrxF5ajCWaUutvEH1QqTVkVjdGr5W7b4SpG8WjSB7j6TTMCXjhURU6",
  "key29": "34fT7MgCE6tkGJajfxqqXJ2ebzMtR5BH2L1JUmCpFuThxPENV3ziQHeBJS8otXCDPQ5XrQrg2C2C4JybR2d3dUkW",
  "key30": "47Bi4tSAF3ArvCZ3UYs2cmjmVgyqUbdeuUsjpKtiRFkAFe6Xod3Hhy3btzxeTwtZsNpn1XRSyFsHhUGGyRFuxnRA"
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
