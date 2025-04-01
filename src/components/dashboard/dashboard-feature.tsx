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
    "4J3B6nkbyyX3hBBhsfzycsZX7QQf9gWrv4uHGwE6iBMcbfGpt3mP77V7EXprFr4ihvSXA3CVRD3Y4A3grMbTxDEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Z497Hf93PGHDeSqjGFACz4ZEbSgmSJCKUvUyjBHnYQ4ABVKeiYRMKPzrxmDibBzrbWqAgBpwdku6bJLoEkEHLh",
  "key1": "47MTo7XqdTe64owyVsJ9rT9Duzy7DQwfpoGtTTKYjTAhJSBGgZ3eoS71zpS7JyBEyU5ksE9wEBaQPKsuSh4DNRjT",
  "key2": "2jwEDiAqesXdLiM5qKaKSnLHbmz7Erd6DquD7a6oe5Ktp1tPC1537ogAUmgQTAYqQgk7t7hjarivkxRE5n3E7jEc",
  "key3": "4ZHzPK7yBXaEpgR23jsYGoGkbM1P1mQbsNAQtCPEpcqELsH2z8Arq5QqEXPatQdfmcnn9ERhL59mhnxZF1mfQMG5",
  "key4": "m6jENCfCCQLfxFaY9AmtjaaJFrGeRduXJZwTfY6gq8jaV8UTFb6Z1YsufctAryJ8gm79kAdJc6UhikxuXKZRaGn",
  "key5": "9kdV5LVYUz65FBGJHAg6srtQt23JPiQ1uLPnrg9kBwfiCd7zSTdMquY7gYgYYZTt8iZYMETMnyjXn2tZKxrLxk7",
  "key6": "4DSE8oTPE7Xz1wSCySQUeR6KBusVzXejaPHTBhPF6ELbFfVEMmvtVi761Gv3XpGgAXJ7UeBPHwBZQjqtsTF9PDKQ",
  "key7": "5HTWw1aeemLkykMSB4jhBme69ZnuAzEDvBp21KNYKopiZbyG1dT2cD36qTL39A2Z5WDFpeGuxjY8waoRpKZ3aNi8",
  "key8": "4ZKnhkjjsbWCk8CYf6TwofjBHr8HtYppwNLnXU5Epij9XfdKR1yDXdvVe11FjDFxpjxyQP7v5Djy9X2kpUiCSsJX",
  "key9": "oyFvSywm8FWkBfHbFbDZodJkj3QZCq3N5i3YRuH6PgWfpE2Xdfb6obYC11xWowF8dqDGfkRhihjty5WriRoFUnY",
  "key10": "47Bwvyo2BczpUfgmDdw3wWegZ31EFcrpMFnbZ168AD4Szh7weg8xFXmeQcKbRxu48b1ioHonk91mqrYaC8p2K4Yc",
  "key11": "2MDovYc2GxTTzqQzLd1oFZq1gtbrRtn8DdtdXBwozMg5btMp7Dv4PUFMYBzi3XLJKEAq9T1svrrX1o2K3P8BnbMB",
  "key12": "2N2uy4WD6VoWmAExZetcJynsVtGzLcPiKn26fNvcaDQxAcjEPRngeeLQATgJRpyjXrdsDfD6sLi4xgN12NS48Dh4",
  "key13": "2YnXzRwAkqZKJWDLefoUvnWVvrJuotjVzatP9Q1VwbMeFXVeYDTpqhnyoH1Wy6WFtWMoT3pWXantHMjVUBDovubC",
  "key14": "2f7rgvfkdtSsQDaTt3T5SpW1e5KnnkiszhmvtxHg2gNqEXekcuDLWBesJeoXxzdHUcmGnRKfzD4kUaFeEaLM7kuB",
  "key15": "45iu32SbNrUpAyJNJzDzhaPaaspZ5CbusvEb6min6qQXrEU3oPpHhdQssG4s4rWTgQw18xQJdsp5Hkb9LsQjjtQN",
  "key16": "3oaXak8dcfs4cBTWn7Nvn2TrGtZvM9pdHnwEJe8ZWAP4Fo82711qDeUa6q5rQ42wqLfSouuwWguWhAEmTK1DrGWf",
  "key17": "3nq6cqLGffpRJaY7W49vmPKbtdBqaQfe6TwPapZwxodyF6wnTzEveUsPBCj2kmT2jLCbXf8jTwEio8mNWYL5U2cV",
  "key18": "5pyiKM3C17W2ceboxRyAzT6ErZYvF7iXDZtTnCPbvnRGx4ogCKt1k9xj4M8wtYVHQjNjPbYnndxR9QffYBnqJL6C",
  "key19": "58wNtheU3JuG9QNMdpLJ5sUroZHvAGr7K8nzBaW5Qrw6o6SUK4dMBQjsqvaQWJXPwcGTvMi2usQjZ7MP6VGvfzUJ",
  "key20": "2FFbjTnQbeekQFHMt8MHFg4XKmtkKzoWNdHeQ2TFTzYAHQq3dvcKPvkrXoqELDYoDqX1Y24HUg2skcZAQNxh18rJ",
  "key21": "2wu6Z1n1iaeUoFmLXk5EnvaXaX2eXrQzccJ47RYEVGLe1MoScuxRaPWutSSaEGiWNWN4JJwzAK1XSABVpdEEvwoR",
  "key22": "2cZqNjYGMXNkg3GfDT7XaYRvRLtcnJmJZ9VvDrYm9G18oD5EASqwPrCX3Qc87rjUgS916en4rMLiBJ3cusT8vox4",
  "key23": "5gpEMygyAY5jaD4nNscchVBPxhc1jDeXpiRnATNysjeWzwsXyfFmyte2pVGz7vpXCZkjpKW6jY6DuapUBjtAWHXS",
  "key24": "5oRKBBHyiJzqhs8mHb9ZoXvBX4DSBQA2iAqKxBfrLS6DNuFUTc8Xtq2THr3DJDN2CAK6F66PyUtkC8K7W5EcbqYQ",
  "key25": "65aFhNJGWpEyYMrK12q8GFbH2AQBoR4QRJnhF2BEpGcYv83UXCezcEpcKWEtoPy1opdRWMmJJk49rpXL4HazVerP"
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
