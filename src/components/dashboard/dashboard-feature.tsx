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
    "2jANr5FmWsVzLtP1MbrNf1W8DCPXFEFTE6iHJU7DSaPsTmG78CAJhrXnpWfhgY6bvDLDZnAt44AGMVmN1TDtaTTb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K53cStuTfWrcf2Zi4QATtadJ4mPjDFuuDEHBdpq1kL85akQyG2pUVaGBzhwkFXqQmjMZi61KDbYCfrbQDEF8qb5",
  "key1": "2bRJKTskis3U34aMkXaSuBaASLg8NW1xqqHEQnHK7YitGqHnrcEZEAcG96fdNBYeDcuVYPEskySXpXWkodJiXL23",
  "key2": "5TVxeR2xqyaAuLXy44udVx1aq8tMPig5gQrMDbKPyeF7Z1RtSKQgHvuRipFH7EcDbXRjWxjAAE8fq4pm6uBJY7Ns",
  "key3": "5WyshKarnavxxpgtSswzmmzhTTKi61yAVDi7HiYcBwLu7tXfPmWQse2zQUoDdTArm8zuaXC8DvYA8HMc9UG2fZxn",
  "key4": "5JXwgCEvYMShZfAw5mJExh2Ko5czD9howZveFTyCjHdu6sMYrj7R6qEVu281Zxyu4kmyZP49stHxso2a1geRr5DY",
  "key5": "43eh2NaQ1JYGgxU8nmXbVnQCBTSb6BzSqHHQRhpvHBvjBpJXZzuiHpT5Zg9erEpP1PuwgBaCdy1zt9wo5Mkm41e6",
  "key6": "fA7tdfZtVvDVfw4GgnKNtcyo987RiFyc5AvSt25gk6y4aRv2JoVtuRa8Xs71kuAdZE2JsnhabXfhJ6oETC9EuRr",
  "key7": "45Ht2QuE12RdivUtz1UtEgXViQMkbuXfsyjcU9PftyCiw7PjH7vkS3yYLBw3LpzCdnmnxMf1MycMfCmeLpxhxcsF",
  "key8": "38vShXMJGnscEp9p9grXm9EGvcizzquzykmZ8M9a621zKg4d2PgdQWK4HTmDr1hKXK6wZR2YM9u6EWqNE6dHyGgX",
  "key9": "2fWGYqzkfa5jXw9oJekZqY7YydtSJsvvF87cXnnoK9hBavKbJjHmZ64PddUgCUdyCSoRVcEFzngQEkVg12ycaVRq",
  "key10": "WmnRNkqoB4yDgVLYpodEG2579D2dEP1sCeP7jWsHJ2j1pfQw8HXMSSuatTnw676vMwUVXuCQZkddr4gDfJRWkv5",
  "key11": "5zECNsWG1F9tzy9ad9sBC2EadmoUZVh74dUnqeMsq2mMuWA2rjqv2J1DGERc4kgXV364PtAnxXUaMvMZr3NLNR1j",
  "key12": "azXKjoZmNABHVK4JUUbxLce8ceujDU4ghKdyzXxgDvcVfr4pZhfYjwmmvy6Vo7e41Jq5cCTRLxd9c9Y9dXMUP9L",
  "key13": "4NouqcpVbYvyCbjCMAdJJBtG4LGmcCV9jksqJqXGzSdncFahFUnLcGF5irepeJqDYVM87axHGKJiQmPrcAnNFK5J",
  "key14": "4RgnZzBi3wpPdymZbY5vAwfoANqFxacZr4HoqUhG19KZEfL3fnjLvZyDgVLAkPei8MJFpPMWeJBpnxf4viX4oa9R",
  "key15": "4Yw9CgqShwyNJEMF4NsSHp7qzaiuejatx6b1BCtuBxrD92fmDEUR1Xes1sh94tH6qhjw5U2NaAUYNStAtQ78QKf4",
  "key16": "3af3TnM2zRde7YEANZkAf5adgnvdGRVmk2kPhXZ7rnh6nYgLFX1EhNNb9P7eLNLKCzkupnwCF72XVmViGGDZ6iEw",
  "key17": "kKbpWSKxWbCowLjWj4DMBx3ntBwg8RJLAgbkRsMjWX1yqCHrbv87B8k2Js9t2KRS3vNnssMe32kxKaiMp8A8NFK",
  "key18": "qfftTqwchYicRKoqrPAKDicn82GMQbTHNwvBzXtVQ27ay647qmHarL7my15yr4jZ7tBsQAnWMzxdUnEraZFs2nm",
  "key19": "4wZipaPzwZYC61RdQCnnowJ9eH8sY8i2ZZJmUgf7vUMxvd7PAZWT71hPRrwjQLgZ5nG7JQFSQUL77W4HiVhs3yUn",
  "key20": "3e1zSBA4hkVC7DbfUektdsTLSjxudtHUf1ZRotL9WxyszUUxwbGfeHCsJUBxV4ZPiJf1N4QxiexKWdiXRt49rZ36",
  "key21": "2CmB6NtpEH2fEkok478RAHNRgqm5SaenZGGF9868wdGoZQNnnrrpAuao7n9o4Wu7Rz8S2sVp8Bx3wPbPDQDPBWLR",
  "key22": "47E985KUrSZYRT9vdkBkQgqVoAJpJQHLLuStEjsvk3UPq71ijM7eTo6wfzFrNjZbPQTSGEpuQ2N9pHbbVtmGdmJB",
  "key23": "j3LXk9s9RhN8unUxvSG6PwVcB8gFeJmn5Xze6MTxrhcgahe5Zk3HLdKrJhAopMSN2hvx6oYvhMDcXL1SpxpfdHz",
  "key24": "5RjESQN99wYBsYWDSaGXfVhfUcFrdFgi6XRJzAYnuwQ1MffcoHxqJWFD2qDKZDkEvAeSXHnVhEhXPbzAp3rh8jJx",
  "key25": "5bQ5RfGxEwLiBJYmTkTh946QVyW3ESs4UZynChcfHVfnxxRuai9p5VNb7NH7yh368Mq7FY3KGX35CEBJzDR7U99N",
  "key26": "4sNeo6EbXFSZA2xxLc6wyYzr9vZAQHmyaSktQPDxVquu8mwYiEGYJJjdi8bcc3VW8GcUdp28G2Lc7JoLKNfMPaWa"
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
