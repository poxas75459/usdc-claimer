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
    "4Fhn1vDJsRJ47nqTM8CV1M6TmghFPmZ5H4xfrzu9J54XJsNBWGcTT7384v86Grtu7L8Pva9kmaxkNFR8v9SAzSWw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PP7x431iXC6F76JcjY4QL5f2ZeS6mi952mc45qkdwRBGywMYjCd7qzWxXGhn3J2rPfkFmD31gVU1FG9jwUSbvw",
  "key1": "3kevZctG2EoQDqb8drQasBnYduLtN73KcV7Hjbj8AZrQdv53cd5x2WqAMa1wTKbQC3xX7csSwGKiTeAPiuLRX8o",
  "key2": "67DHFbtdDyTLTEbNzse79416JAFRhypcH8Aai53gWMfjAZqg1DSVwP1kkCwcHm4gctP2twYFcDEuWGbBLRTudfZr",
  "key3": "ZPZQyP4Vs1MM9ppNjwYpATJmKmo9kqbTnWY6hdTRNvq8me8sAgPovyLUJP5rfoUNdEdeMc8rzv7FkAcSb4U61Nr",
  "key4": "qD39nmv84sUFPRdWXxgnb91J4tm7mF5qjawAdHjgHjHpNrS3HLiK5cWsoZsA1xBPRyuLs3pnhRFt75qhRxsa26F",
  "key5": "42QQ1PGcBDB5jRuLWwZsHuzibzqZy989nXk4eW9MZRXy3sgQ8hL5xVxvSP2FAPjZakioEWuTqpo1XTdrBC4cKSaL",
  "key6": "5vthbVrXWS6ajhpQW9D8KJMiNyN81qGwU4dMUY4ySmi6NEFEK5JkkivHKzYJQzPLt5yb69WKpFuQAqSuViXU95Z7",
  "key7": "9Emrti6Bz5ZEmnJ8QJeT4HUvUpgoWajxkXq13yHYAgHr2DtDcHB243ggfLDo5Da3rsq9DwMKgWwGW4eVkqz4XLi",
  "key8": "3v6dcLAuy4H1bffZpzMA2q4zyrVE7LxhtuCUfNsF6X4eNtYdErjGAcadJUXTGQhkSdBBRBAxQbBZsXsLX5V9cb5w",
  "key9": "4Dw2YtbJnQrYQQyJNxH2CsU9u9cTcmftBXgfnPzYp9NBS4MtwRQUifRbWUJpLKP1tTXdSGmhTZ3FBcdpYCcnj4Qn",
  "key10": "azxTXQgckLthgQ8grABgU7qPSWndYNtvFZqspggMKsDudiP6wevc7R2GvjhCVUQQg155LuNKgtV44vQ71ph6dwN",
  "key11": "RfTo1Kb79AnMmErGe9icKnUp1ou9AG6qo5x6W8yi7u9Hb7RgZeJWQyEzQR4NDs42oGQPtRn2nSnREis8EWtGSAZ",
  "key12": "2LnYu6DDC4XWv7r1BKTStBWqQF1aAUPpMg15bj3pJoN9nAHBtccHvAoS6J5YpcV2gEPF4VZAENoF6KAdd4UPDYxn",
  "key13": "4sqHbYGFhPty9j8S296o6SPXv323bkCzjGWmY1EfnGMNYXV27LFUUicHBYcrAWjp5q2YsCWe7rgrC7stJXUSm2FU",
  "key14": "2QUMXHdoGAKuiJMx1pYgEzdvsrh3ap4wU6yVXEpo5HSqomxwVumxwTsGqm7ZQ1BPbAyAzHfbgVVaPkgq1zZC4jRA",
  "key15": "5pLEz8h1Eta8XMoynd2wReTXDub93ECKidamVUBoKfMzEsz61k8axqzKZcBQeK1kV6SNz1pnW8aH6QA9ZmB2DoDd",
  "key16": "2ioXnw2wmgPbwV8NBrq6ApTPw8ix7YPtKxXUtx9yaZNAymcdmiKQgTwUJFhwXGS2XVPziyQBFGeqSv3U4SRw5qV8",
  "key17": "4CP2ozQsCGUb24pfsCAXRzC16PTuE4nHG8vXHcjLUD44iNapKCxqvVxrgpieKDiEa4yaMFTA8dJXtQ65QijWRdqa",
  "key18": "5F8eAFqkXMNcxx2nes3U2QLDDTjVVViN6cETEY6cnZDW7BELrHzCUuPW24nS4B3ty7d6qAJUFd1K6Fq8wEcSq5Do",
  "key19": "5d5PWVduD6u8JFdU3BSqencpZhdV434hskmjdyNXmFEvosdENwvGEXaH3bgNQUayUdTUQGJv5THDYCSGCKcn89GA",
  "key20": "3yaHNZ1aV1N6FraZ1haH1kwaxxkjYLLpUT1X5xBKk37DYJ6TKgiCiS2eCB7w2tYJRm38XzVMc92eTQm7RpjWrbkL",
  "key21": "2LfnMPtQBbNaruFpPPqr2ez3AksrnCjXwPQrEp7JNwRvPgtR8WwqAi6EcsePFHPLUwRuLu7PjwpF27AANp7mvSbu",
  "key22": "5asUbFBaD9Yz81W6TgZbqNCdpw7iv9RKv7AtabH6zTbfrFNHMkv1BEC1RshTB989ayBqWLPAj4qT4jMy46LDK5sb",
  "key23": "27YCsr3yHmisP4MA9hsDAZXhpnqi4z4hyXhL7Dgt4ig2L2fAgpm5VGeDCtEa1nmZPd9359N5qHv2gZ3C93SvGJiB",
  "key24": "47mtZyZ2TviCCo8igN4vHooyZ92YSq7ddAHRArYDQeWJTvQcyMnzkYJvT5r4rFEETzC2hzvfqjsw6cGrDKSFNbmP"
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
