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
    "46tPFFqZzSSEXaqvThBfz1JCnpX1aDsdKPNortNSu54mU8GH7gcQfeS8ZHAsrMdwPxRABD7TLHfhrgM4MkWZcquq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QiiiK6CVsd6iuJtveisU9uHbhLLZXyt6vFo3sji8ruDemt4Z7xonuswXESDd9EMtQazw75d4dm1gt4qEUYeq35d",
  "key1": "4PoAcwSHG6AdRHqQuJJiwgucJbMDCF5r97jRVBnEz1gMeimPmxXax9QnJW7qhe84cu2y1fk1eJXHH9ADwEmyEBC3",
  "key2": "P5UeA3xFwhrCkYFUbDBqs6zFCVt1Ac7QTzZRMQRUXZadad23XYp5TY1urTPmBeDuuvQeqT8jyMqXAqFSsGo38mh",
  "key3": "4YmaFhjtpSfFAtHmCADyREJ4vgaokczDYxh1HwGbLwJv4crdQKyoDRDWu6PzGs8goq5iFfezuDrtxdoWYpwhoJ5u",
  "key4": "2hDwPL67uzxpACaoQ9wZ8cjbBtobWNJfQkMxmvxYXq3LZQCfpunXjEdGnKLLUmSPiVHTpXzXvMbviHckPzFtTQFV",
  "key5": "3hthoX4bj7wUHRQNNReAGxXT89eD3BY64uA5xDrunHNtmNHREN4u4PvzG9uzYAHByvuhotHZDGM6Z2TQUY8rsQSo",
  "key6": "56NJh3nFk5SoQsrpEqJuY5DNZxC4e3rX5F7LiKTfhNa2BP24DuCt2kLz81yn4hfa7SoBAwS1SPf2cGAHTrPzf8W",
  "key7": "4nkLB4cD6K7ngGSMrZV65rdB9dD3MEMdAQePQgFyF8o8hoBLqnimUKe8PHoJ16AmFvNWHnJc7JvV84HAv297ibsY",
  "key8": "5iK8uK8JWF43wv9c8qK5RDjKLcgYiM7QiMySqaqpR3RZTPeXZ2toFEy8TBPX75Go6tbAWEnfzuGZsGEHqRZ8UvYp",
  "key9": "8pJn6kp756w6TVYzzxfGAyoWEmHvHEBYDgymoTkZ24GnigyWFiG54t3Tu2XgnKgTtN4X4hydctmS1sNLxWJXNKp",
  "key10": "fR4zJLBegGqM4kEqmrjzgcTnbSC4UXfJoitK71txZwJX2aHK1PuB5WZnecCSdH5PKahVYXWjHYXaFc5YuhXWh9Z",
  "key11": "4eLivkJwx4M8YGBD6QCL1iXtCydaeyVohC6ANnYWJ7Z2NZh1Jxjhw2Hn7k9BxpLZPW4SdJBtntwbTv2W32Tfh5fs",
  "key12": "2oBsmYwEQ3o1N8U57DP3hY1VjgwBrE2ttTiNfZGpMBZoMFQ3tF1xzHqLGRrioQjtGwFSxGBvfxVoJn3EH3CMLe9V",
  "key13": "R8QPxmmCPwXJRwjJhRLRwcBwBC2CrTaQDifHVy7Ytv1fgdBXgWtQ2h1BV7hdhq1XZUMSFv5hQF9ktA9HV9BnnWP",
  "key14": "X9wX5KzFe6zGbt1JJcF3PYcu5fAUGi2dgJnpZejCgh4FQDeCZNuphfrNy956Re1GmeyL72BErcP5T7cYs4Y36G4",
  "key15": "4DCyCnmNCCokuBxDVRK8HDJPMQhjt6kK2mJdZSRSxDxpAmAkYeDdymRsPfHVPGhazGKcPTokkgrNCQJiREm4gQxf",
  "key16": "5DR7HD8xSVbqCP5cznBvdQTRdZXL9ML6hfcD3M5KUnnpsfn7Svm8NL1YiDSrNu79PZAk4wT7bcAuKSibYQNxChT5",
  "key17": "2HyeBw4Z9FD5WNiTVPfzPwkSK3d9PnaDFtoucqgdTH1ME7xJiWqjmz9s8V431PF1EXeJofCPsdS7Vsk2NKGm5LCD",
  "key18": "2KRRQeoceTxhfnjwDU6sE3oX6hmGc3RXes65qWPUMSEy73z3UkTKoNY27pwdxTKmkJ9sZSKEwg65wM26zDbjfzKF",
  "key19": "5qv4t6Rofno3E7wQPpTUjA5VDexZfJgBNz2xhueWSyXP8PkjsHH3sgFuHucKja357gHm2HkENoGaY5QaqQ4tSeq5",
  "key20": "5Q7wmMrbYngXGRhWn7AkrpRrpeyzfKqpm1LCucNKPVfSTZPVbQDCCavxCci7svKLaEpJzJpGDCNFSzuenBaZ2Uic",
  "key21": "639tHUe6ZxcKL3FG8FmcYngkdHzPMDNeFLEHoe1DraB4KLHDdgTTJTJT6xniYNLwF5oqDk1egPSnvsCWyNRzaJNf",
  "key22": "4fkeXKiWZVFRekNkFLSmUQhMh9JXKfr53gcnBMtyGqunVexr9yCiYyZ81Gt9VJsctj41djsbxibVVfJj5xuwWA36",
  "key23": "4F98MhzNV4UUPebYDc2NkbAZAKTMZFXuM6cnDCyWGjRiN429eSVTdQvBUzVPHRXUmY2956WejqvHRSR2zPimyY2k",
  "key24": "pJaWhUuNyvbAPnB2RNKSUPRjFzKe5Fxec5bAJE65AQLbizEs2qFBgeF7tW7qYPSQ5nsGtN7F7RegEPZ4GyvLmzq",
  "key25": "7PjcXngX8ixT5QC37iyHAj5BMoHoEdrgSviMVo8sn84RWqLi6cnNzSN8sFcMTvuTQECo8WsUgZrcK19nvTva5Hh",
  "key26": "3EsweZoi5T8Q9qaDdUuRbgd4GWc6FPRCtijv54FThtCxi2b3mn2QFJkDdJiBWpRswf5qx4s1K6QmnY9a4Z8cGJCs",
  "key27": "3rBffRDsngKGWegFmsC6MNwiFqMAS24fwEoRvqZkYUsFaUWp2dGBNJJoXi3pLRuHpv5XZssWT2TQj88PTznJpJ5u",
  "key28": "2xidjJZW76UBxBoXT41MG9N5u7t9Kdz4shvYzLo4YSEi7nXGCexUqdjdZpUnBw8dwBhWmds8DbbDoM3cYF8oT5Pw",
  "key29": "5aGNAZKGJhPG7w2YwRfLHHFcEP46mRUUSYSyT646eYey3iA77u5HEhrMoArR1LtaqVQHyBf7NhqFKzvBXAUMYaMw",
  "key30": "2YTRpGDwyJaQ3FkModknmFRnnA3Ufz77a2eXTgw3GQ2fYLVKdDE5fBiPU31X1qucvjAPDQWLNPPRfap16j36DTFG",
  "key31": "5gYgM2Fgj8ubQY1EaYawfUvPp2sdzSY7GJjtsFt5YE1ptvyqna4bzQPikyAivi4gAnYMpurDcVpyNhL2L3mBsQPD",
  "key32": "48XoTqRg7W5R8owSG3AxTwFrmdZBf7M9ms2YVeucnHFQMMrLqERPoJ5w34vxMk6reY5owqsnFmyZcLJjU78LTAv6",
  "key33": "5RBgpjNtg97Umy9KiALmSnqjRLdkvB1RCotDnAXWdJ6HQGo9PX7QtdTeKvmPDsUb1fVyESaboibvnq5dmTweH9R8",
  "key34": "4uTFQBqMcWdxzXzHLVUAqJm7LRqHMN6azGY5eLKWZo83VFJ9zDUGxWaDrsnGtDTzAcnfqukct76vsjDDuirvSoGA",
  "key35": "QQBoUZH5bG74QUsmCKkVfPibewLGhRCeFF4UWpWWrrrZo63V4RmtkWJyhGs9o9aqiLxAsf9oVbkmMYWWW7FymGL"
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
