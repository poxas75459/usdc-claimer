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
    "59pC7Z5HV6eGzttTjraZ269tJAM9bsLzkNTfb4C739XXtntWmJuZybeD1G1gxZYfhxpvrNyan5vY8EKdkDVcxJhU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58pzmcd5JhFnChSjZA9Ba72u6va8KYUeZSFY2X5sH4xirtGvnEoSEHJWdSz7YH3XSFvRhrg2SJv61U1ZpJZjz8PR",
  "key1": "2fRQbT4xVSRs39wbiiTvQ2Z51RXXPZDpVyBLitqD2G75TP7iRPjYCWCitStDLAbmigncyzuJFyUubuCnE3Tpbsgp",
  "key2": "Ww4H42eFJ45CQ5WvhiDxC6pu5ojwt58x2Er96GnhuR9hj8PwnnKQkew9zjUyEuvHoxeHZbPPqc5dqPEmWB5Cyg9",
  "key3": "CtR7wrEbZxo2scEQYXLV4KtnjjoMHF9zjWH9bKXnJcp7sx5HZuWe854T2sATyfFMSc3RwmaVF1FuLREYyYatey8",
  "key4": "5XPYcUchoXt1mJyDksYSRZB7UkCE5Uqtj7ud6FG53xs7pKNHdYa7W284TmodxoDC722k3sVJXpQVp7T5ojAz9Qqh",
  "key5": "5LTF6Lab5mzEmfctqz7yNrFC1LV4Jxro6XWG7fnm7SYHLv9dYmaKD5a31AW7JEd7ffPXcDbWMHmpbtSE2MGMgEgg",
  "key6": "4d3wTQynwutFefRgTadF2vKVdZ2KvirQ7NQfYSXAfhpLag9zyTRETkjwRLvBJk6X8Vtg7oGZ5i5gqGekrSFDhNWZ",
  "key7": "3kF6XYu75Z4KhQZ5pju7zruWjSHt4MxLZhU6f1Lptqr6Vb98VqvNSFTZHK9LcAEy9g2FgsyvPSqGSwbAexeF69hT",
  "key8": "4JNMoynmoxa4ebrGcF7bJzdZK4tf2UFgyTCw6kh7VJkh8yMJS9E3TBsj4w37nPLQeauBtEyutcP6zfMFbXdP3Vs6",
  "key9": "3Tq6rM1jqaDpxUMCH8yX1scHzjzjZoV1r6oVeZfYEBHDC3Ux2trA4J2Aaif2kRARdBJWEa6NEiqFmjRPa4mxeFWL",
  "key10": "2Kzvn8z4AvdxgpShGcuQwbcSmNdRsJ76nJFkpgrJXuMn5ZX4v7XiAM4jJS1L9b3qASpYfvt4dSeWrGx3gdMPE9GM",
  "key11": "38VBZt8fSsusS6yGcjPNJ9rqiVnc77j2wadtvd6Dhj6kuv1zaMgWSkv2cWZJNLYR2vHrDunFw3F7JozW58ATt8zi",
  "key12": "5oELnQtmSZyMaAdkfKvdAB7SzKNVEbwNTChNgwtRQ5gP2i3ATRNCvjezCqYEfpkqUu7EkYV6VqkJaKRcXqxMUrdh",
  "key13": "4jcGgXGbG1gmN3pXuVdbLBcQVJHV7PmG489z9S6mgTZrkuNdFBoUdhteSAwn3KU2nhsiNwnXbp7H4S2tzuNwsA3K",
  "key14": "29Xp1pX1H1HHw9BoSS4xQ8h5iuq86Ss1xy6DQhaJhn9yVmVKiEjPG2t2ScpWgrySJM1HXxSTHKFrKZGfPGpAVz1B",
  "key15": "YUGCYLCnoKH8nV4k4xkX5b1LAr98Jwqt3N4TM24LVay4cposGe1saBthHwz2soxwoRxp9ogyJLURmSa5gTfm2tq",
  "key16": "3B311ivbZMwRy3fwGrFget7Wi6w38xQaRvqxzDhZaJiWAPWsdcan6ezBLmQhRx4aUVabtAfQrfZRcgcP9x98egcG",
  "key17": "GtVgEThT57LT8TZj4QACg7kNGE55eaZgFPP7CJ2fgVTePjc2ACJTqfH2G1Wh5Jf7KXGi99Li5hi1HcHGvphEkTF",
  "key18": "67XY9u73xby3PJ66K3NTc6SnK9BmUDffxip6iDFSkiAWCNb8YMgpUApAyhwhkkEo51gSkCq4MLGkQ4FFScyhj26a",
  "key19": "58zmKgy2zs8g1hrGYWZncNRPzCYqNLj4so1VMSBEFq5mRwssPz4EbybeooSxnfoYkrx7s7JskPm8kAH3G6UcaAbo",
  "key20": "5EtGsZptRJFDKoKMivaYgB2gMPRz1hB43BgLk51atvDs1BwWLmFdHf4LFhU8uiWEsv1ssPRNbQJsk5T4WBprtKp9",
  "key21": "59khaUsaDztvgXwqZi3oJshBt8LVS1PVcJtGeRg6og5GSTZ7nb5baVmsmvK6Tegng1poxAz4L297JRzX5x61X99E",
  "key22": "3pDejua4yEERDk5rbZD98fjurejsfYw25pSkdMpK8ij8Fv9q48DKyjxfxH9oVRAdZXNSUKNPaiuh39Q4P97kEnXJ",
  "key23": "34Y6dGGFC79tk3VxWDxxkVpozZPSCzxGv1wcAkkz1Hb8anV2Fyy38T8YtroftRbXREYATezdNUAupHHs9bwqK2QT",
  "key24": "4uhCSbEkJn6DH3rnBezSvuEyg1X7Mhgz6th8MDqUpyXxuLzEs9RL6LUHTXhQ4BKZ1Ybs5uNreEGtzBj6Lp1PfqX5"
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
