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
    "5MkaVie79VNSimWuo5AZLiJxDUazPhwCSDeqQAfSfdCTgEzZhWdaWzUYTvakft6TGDHejjkdQrgfwMfaRdu4t66m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xTkUymQZMXAqMedP2ziqaqz8CCgdR4poePeDPyJQcrJD8sLWwE5N2s3x3HMQKvpJN5ytZ7MqsaaPfRoQ6wiN8pQ",
  "key1": "42JHs48kJxmRMvNt673mHdNaYK8UZ3kDFoT93HVidY2m6UnCHVYhZYSJTaeoeRitKDXecJpLs6mLg1Zdo46Vof4T",
  "key2": "3MPsGtp29cNmpjP4iU3XDWyTpFXoDR8C92qRjVh1DG5c8XfDJeTgXgCPouK3nbxY7nEHz9Hj8B6mXQTiS27a6kMn",
  "key3": "5hCwvxtu3KozfVjr3gwuustssyjiphreguSCeai3G4oY4xcUTPa3BVVa56bA3euFjSgevXrdoLJafz6jxSJ7XLTd",
  "key4": "4uLvszB4ZamY5bMZXwiE2PtBQob155DjcViJhE44qM7ARG1zsuuP9qMAskP1frbgQLBf4Gst5wGyWTTULk4rRNaA",
  "key5": "5yet2BL1EJcjvWUz1K8fQDKZvsF41kjNR2sucu5wm7cBg6zNnVaArMyUv18fbzuDrKDx1hhEQCVY21LrBJk9JZxV",
  "key6": "5NELDU6Sn5m8UGBiQi8uy3Mib6pHrrV7FCeDcstLNYXbBd2PAkXdCmyo82XfsjToGW1MA8rc2UPbuAhc42bnMe6J",
  "key7": "5Gn3yACCZ213u5Y1FD6oPZxP7Ut9KbkgYNAcHWvf88hNW4pNX2g7XrpbzaqcGtShbpXkLPWqbv4FvXcd5RHLyFUA",
  "key8": "5Cge6evJn3A3vL6z8mNJHxyGRn4V9avv7RmuGhd2pqtGS4scotz2P5f6FpAbgYMGtToFdG7NKf2wwhXfAvpjbXdT",
  "key9": "5UNGjZVas2wgVGCfxsXPuRuULq8HkFBCWDuVy8Hr76xE8cSiNpXjf9VE5jWufJpL5mS5h15dJfiFizKHi6tJvpqn",
  "key10": "5gE1tPeLsSXJ6ecShWQn9xn2WarWnRAcZ8jiRRzJFfiG9TdJAQ1xSB6dWeEsbM1XaPZMbV7kZiT5q8BW3HbdhJ1e",
  "key11": "23JqvpEBY3SuUUWJkmag561ybYPVzJtZoskCkrDkwTVTXSN9G28PnPnigDvzgnpdKSeStvjEeBJ84QLNowsd5egM",
  "key12": "2NFeCdT8rsVJwzVf6HR6vxwm9qY4fsr1FcahuArCxWD7ZHVvRs6MahGX4jhgaNzd6PrwCcAYW3yVnbtiN8fKfG9N",
  "key13": "3RC8TLuxPSRYmVLSuGyfXFEo3bvZvR7pMUoWCdBdEMtrStzrCzUWjeWbqGvNzvA9jZs3v6JCAKdgWog6UfLZMwhf",
  "key14": "5jk9ZoFkEjo2cKKtVDTmwsogCBCkcCKqQk5uAWvZWEUBbQeGDU4hadeJiBjnHhzGsY5AXkRBpBxSH1s3CZFosZbK",
  "key15": "2c9jaxFhJLnou83MRpFT9FxbozL1Kqciewhz1C44sawomt6GtzNHFRxDF5nhjTJfYQvUdFi8QvavMcL4vG7TFdeg",
  "key16": "4N1Z349qAKxpZiE1qMxmkwu1Eq9fGf58hYjij6hdU8uLq8CTqtXoMAsmeWzW4gYEgqPJMk779EahvL9EkEVbvH7b",
  "key17": "2Pkhx33hMVTGTwzyLTkZ1eBpXhZpiSUGn67NYTh2sEMJfsTdKWseKg7t4CGfSnD8jUk7zJCaGPDpBiyU5CoFuUbG",
  "key18": "56tNTTkmgd88pBiQdFymXq82obn5CgF7NVGDjVaLTuLnm91NW9BfrChFMHss1WSWdcCpQggHnYujcMtwJ6kq9Xi1",
  "key19": "oqqjU7brN2hiuqFDJEQoFxthNjoJxQCiVYizECoKHfrGKMhntEvUcD9QfDCMJZDjN943g1Cofp7hVc5sNw5Y7ts",
  "key20": "4pyTqZq7RVxZWoLADNPGTimXd5QAGrtpfxgCp6wyEBjkC8Yy4HQ8zhgixcNtccHSvupXxkpd4F7asvRUUmdBU4mD",
  "key21": "raZ67LiFVN9n6i2yDc3sGokVpr54h79qv6zj8AyBV1bf8ohUq7RzvaxQUSevF7yvNTxNFHreq1sHjVu2Yp4Lwk6",
  "key22": "qZqmjhyTVUCMrBNFijXCBRbn6g8mmdpuXiFianroRghDVKaJ1EjPoshWEs1cSqrq3LZ8dGCaiArFwYMV4PHhMYo",
  "key23": "3TH3UETjHt2TESZG8k1Stp9MUEnoTfFNr4cLiNKiVo5Chse9S4TmTCXCyEiAaXiT4aVDw5e5koCsPg9z51PTTHeJ",
  "key24": "3fGCUecFZmpyrskS9yVyospWdugJTfgXkdTmsHkabhQvPbSGo6rSkNqTuC5VcLwVNrvMaAWDyBN6rsrKiDkdUPmm",
  "key25": "2PYZ5GJnwHez93s75hRbCuEL6gaGh9qQjS8Zz6KubE8Pj46fSZ5PWfDtbA4SVtCibgcoRXTzX4TiyrCNxWE8jc2F"
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
