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
    "3iKgtqZ7tkhMrYvMAh2yj5qiqLbuXE8vtoqbHiqdtvCyoQAiqimVbBe2QsiTo2HfVeBfRKGDjKaHQQhe9WQFnBTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JbMSR6SJrxEm1yuNj7qsafQpEC7KMF7Yuq5TAEN9Xeqfse565wU9YUWqvX5DZxq4LbTQ2oqftsBPB5tgK7byMew",
  "key1": "3DhZcp6nDpbUtxJ4p9fPDCdBPUj3DSKcCvw87f9ZXq3JEbgY4PnodoaM9xZwvMa9Pd3iWyS6LQ6v3gMRgqJeasoh",
  "key2": "3UXo5sxaDfQTUtp68CTWgNAXeys9vQpJr6xGE8YoCRKVFVAxC94xYCYGfjvKMT5WQULdjwzATHdHJVwJFFR14igp",
  "key3": "cfqDeL63sRNnd9cY2KyByoQaM48fNY7ydv5K5rL1yDGcd3BEvrUb5E17Wxzrc8wG1stkD9pRH3k8stWy1c81fgv",
  "key4": "sdQLzLZEeedNoCByBPkfAwEERrX6mesh715SciHT1f3DcZLrLAyxWYsWzvRuwtNmYyiymCymphjdobZKiS6cWoj",
  "key5": "4iAR5yivt1rD5APJq1nQM2aVFnXupUBwjUTZeKLv98HptRuATPCV59TuMpbWZauDxgEpn1YKBEwKB5AuSXisHDbD",
  "key6": "4zcFbCNvBW3d1v6Lm33b2zpdiD3XibYwaLh8c2fHDw8HYfSWT14iMTt4UnsDvjrnKFnixv4A6WcWjuTgiZ1zvTHt",
  "key7": "5FPUParoDx1YhiysaUD1MZNCXM1ndZD6tm4hpQSyoY3BNAisHkombwjACdCU1rR7rA5z7eoMSdQUgRXqS4PzsyoP",
  "key8": "2ESB7JyxVAd8xtmLJLFb2LTeuwDfvkpdSaMGS5BuFRiVUcttzE9VmN9cbbw1wdB3ZMR8k3bTvsVoJttho9f6qwUS",
  "key9": "5AhPMfk8gzYTsSBqKK3Rrgtk1zErCSetj58CyN36fZuQ2m86CPcKhgCkwJpgNoLo5RLVZXK5HAFVC4HjYcGQEfX",
  "key10": "3vu5gf3oiqw1wzKeWSU5augQ86PSkHP1eFXSCdynvgiLgkuCDuDR21rWudzUGL974FMBgPvjtq5n3R6CYeN7mgSA",
  "key11": "2u6AbjkACQnuU2gWLab3Xx3VM7x3DBRHhDpR5qJpYoKRW84vYNgvX4J1ZDUUdr9jQtzVmUP8yFRkVyyansTFsMbu",
  "key12": "4FqtasfYFSh6mqj2aAtK4DLiZ3bN8dSPuzzjgnNUdf7yQDhzdV1TgokgNLnwid8Y7gLdhdwnJgGgKWN4Rn1pfCNf",
  "key13": "2NHacuCYx2AtXzh2J553SwjKZKVt1RfnpptJ15zeo77rUGSJa74MLXw4c9H1HEyf7fAVUvLhqLGaC3LiqcoXt6Rd",
  "key14": "3JW3gywMn4k2EFG5DtX1XsixGFCSkvrmAau6iyyuZEpTwacEs1s9qJghcaKc1vDrTwYyw1gpKhWADV988Ayzh8Uk",
  "key15": "5h6U7rF5TYNTWriAE8ghxYgiDhvmoXnk7X7thp9wRbJC1DM5Q49h6fXFjHq1hB2nmLdKFmeFCNxfWt51JTnx9y2A",
  "key16": "9qPLsHiaS4WZggCxHDUrEPQnQEe6auuZYQ6YsJK7SFAbCFiqj4T7FnzKmA9DTFHS9FZdNTSwGsL7Lp8WKvcKodv",
  "key17": "5M3AtsqFugbDmuBKEs8ky4CryP27zBRVWWpASCeKfSsDerQrCYhKei8D6XxK5RMiRVTN3UvQ7168WWrmQMWKCnNj",
  "key18": "4E2XAp8KnvFZFC2qCHwdquU2XpppoZTjEV5qYJJaGBvSChbS5K4RP4WfwCqUMUbjB9idfoo4nZQaezpcMtkoP28n",
  "key19": "5EKuuffmsHnf7AiZpu76fW9RXNWFijqKxmorcXmkqFZk2oNTkHMJiZ5tuQzid7XdVTCM2w5QzACndJvW9xhmoySZ",
  "key20": "286CZCtZcNAg5bW2gukKzLdrquQKyKWoct1212NNZu7aoCK7eavMubtYDPs71F7wpYd535z8WmXxR7j3SbV4LYBa",
  "key21": "41pMM6C5Vi9WKmvt46Q5edUSYoK3QmhLmx5JMTvHPur5ya4yGYvHKYutWuzDWgLgMUNsbhUP8Pk6u5Q9iEACVM47",
  "key22": "3RVdKsRxxEaJDQZNgbvB1KE3g6WrcerSHgyXRcnJYfYviH5AFttXQSsLrRCtq6yNjuPR5WYuDj7B8J42WUdTGpwS",
  "key23": "3tfBSYMdXcgTVh4HXkT8pofpWqe1uuPwL4BPePjEDRuFiSnPLa5PVy9VroJTaWtGXux8ywMuVr5tESoTFRaSmaBQ",
  "key24": "LbmCp7LZnAS9C8iLkAjURPZ1djqXPNCaqMfQfL1tZimG47XByDbcYWMNhKTLqE116opCdK5wYaKgjJf3qtUjvgL",
  "key25": "2EWjiVnsFhd3EWLiboGGAowYVsLhwMfsNqb61ztv1xnpjJXvJNMLedpKrVGNEhe2u7zwN9ouor7MJQBRUMsDj4i7",
  "key26": "4qrtYyzWt9NHdkd9bUetNnkpNJNaafwFthXLqa946td8spjWZVHwuPJJYbZXNXmrMZehxtN2wkJUnnzMDkLSFjH3",
  "key27": "2owixFeuUmsb52YFVMsawDtPG67ND8F5sgFoTqNS75LUoYonWfMGJpPMjBFtcep1KVzWUMUsn5somf4vgMvjZmyE",
  "key28": "UMD9pk2dVajVgGNKb2gNT356z2uoWWCX4D7QqkNLka9JMyUu5DyhkGZPDvkt5MDNJqYFfkJ4uWoGmhhS2wfDxZp",
  "key29": "2kg1HrajamPL5qT2SLjukeJYvQsXVKycgdz3qf6rsNKGHDr4AMQHU7shH1WVZMtjsWuygPGS1LwmFyQ6yKwozE9X",
  "key30": "4r9aZ7VQoMCF6tDh5c6uwCf3fNYo6weBw9qQwm5QYzefGWpxqn3w6zgbF3JE1GQS98831aQ38AZ4HGHS4K7kW2A7",
  "key31": "2N3vatiCoUvypYeb2QzrirEPDM9geBaNgcQFTi5vUrarf87zrnSNpBdeGuvWcSLhPLfQmrBwdPBK7kfftMEr4hRU",
  "key32": "2wmgdDwnkwsbf5oJPd8tKrNfA3a7Yf3Lt5DFUqEPsKocwmWELGrttiJG49qjo3dGKp8LoUFWHr9dmDYJW9Gh9nT",
  "key33": "qsvafq8igsqVpV7TkQFoX55nT4Z7k9nqdnXDeWBLabFY2GduGYU7VDAxMzHLWvUDA94wC8R95n2bfb72J1Zd9Ce"
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
