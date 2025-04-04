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
    "3eh2HbKD9gJTbQdjJP2hFPNAAyaxXtsH77D5UUuo7zWGuUWs7GAaaDETbgmpvZPHEdUCaHWrSH6wnK3FYrWB3mV5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R6eqb3abb62JwtB7eVwGJ4w3BxcEGThnHCGQNidRXwPwJbXVJoRmjsnkfwAeQqJkbsGYi4EdMaCkhDzesLVNH9T",
  "key1": "3k9Ck5TFpKZ1bem3Pp5EydHCfA24CxY3Hco76g9GpgMphYFEL8JmMHjTEoiEiJ5AmCRo6rT9iZmoCALGapTUyEQR",
  "key2": "3eeSYgeYiTdasKeGH6GqfGnoiiS8N7w2B37CKKrrKaka9vwHQY3vCjSG4ZyqwieD5Z7cBrRzsty2jZ6FimVP98t1",
  "key3": "2CE8vGkw7i2uy3oV2rHgymmZA4Qy27HbFpVZfME7PrJMxPznYbezVqpVQtNLrh9qwr7gK9ThTFDH6JVnVnsfnptG",
  "key4": "5m5h6kFbJq9LYpLXM4ocB77UMX44AnQgsVWJta4L3ppCkyHSAvrFpfrL3dbg8igC5LmexJadFRt69ehYjKbiJroe",
  "key5": "4ovtVHHL3NShkDJpXqsJ8keAMmNYr9KZ6paoHuiZp5DZwmUkCeqRXf9CBsFKKrRYVsep2SfL4AZTfZeNs3WnGNqG",
  "key6": "3qMmqLmUJFqq92yYJsZBYiPLjRPrzNnWJZ2ucjcSKhUtPTPcUM76M23ybeQ9jAyUdUqjMFz5jSppc5UtqtuWE8MJ",
  "key7": "3SgoiLUATrQTd6sDCokahbQcFBLfZiSLqvHtYkwnBXZFJJ9GG5onFdwbZymHZCumqX116BbPVSgA2NGyaJ16VbST",
  "key8": "47H7JNpLxvfTrU6x9oTxP978PR8Hvz1tC99SinQroJ7RZkoC4fe8w4WGmGS3NN5t5nYaNtTZc4LtgkZ1DHqhFv9d",
  "key9": "4dtiiMbFHPpPv1FXAHd6ML8dHzXTDEnmUpFiUJxz5e6uu5fq2qEwnNaojkK5s5AFGHk4NjS4AJnY1EWvBmiBbgdP",
  "key10": "3hEFVYq8xghWgaqtSckJ2x5ckP7Boug2wmJgUnnRdn2fkkszqSPEf5FRdrAUN9QohuLRqCxsEFPR34Tr1AWWCUJi",
  "key11": "5fJsU9AZVxZSc9XdpKmosxizFiarwFRUwGFxUtdN4Pv3c8X6epxuu142MdKdV2jz798t69xmzUrU2ifVavTGgehv",
  "key12": "2Kt3PKPVqY7HpRn56ddgVqBqZKNJSXyB4vPLitSv7QSeVfkWzsA4BuXKwXWepHV8kgcSjLS4LDHVCR1ZCQnRfTaf",
  "key13": "5wFxcgitub1nP5Snp5wYDfignADRLF5BXYV8kBhNdiDyMJF57CyoNcm9BFHXqsqf4NVvVoAfGMPpFEwhr373GaWk",
  "key14": "RZ2nygaxwfNzBn1fym5em9K9jeP3s6DyesQPVGcWAduTkhqkMNKx6BF7ZPFE1cyJ8PLQzBppGG9FxYGKuQSF7o7",
  "key15": "55NMGRS8WM5Dsk7eguEUEdUaweGbbXQxBGAnBP1BC5EivJt6uCxLGuKsdSTZbGz4gaxotA84rFMxv2dCcqXcP12A",
  "key16": "2ik1y9cXWNcZe7isYLtdFmQpeJDPTjUHvvqd8zQei4wpVDsMCvqdVojDMu3R3DhWRAjpjoQwVTQ5Bb4weLzuaPzk",
  "key17": "3PCST8XamJwbu4GeD1geUwnimDSZDo9M28oKj3UBvZmcw5BwrTiiDpJZuFhmFcxCZPFXenibRkZpyESLjhMRza6D",
  "key18": "3PUBeVLNDLzfbkGGEj1G7nmkahuzmacAUjiJeQYCpPLf9nQd5RiEfagHaajCjmpykLQWbUNAkbV4pa6Zxhv9VuTC",
  "key19": "j1k2ZBvttHmt7wpQJvyoXAr8tK7gUxnUb3svTD3sotKvAkS9rWL1mPt7gtArbkVNdzDFfKuZLV8jH6TXY55hS5H",
  "key20": "5rGpycdZrPkDUEeHoKNZ4qEYjfnjb8c2BNvnNxBXqpwtcpgo4M4SLi15GnCfUhwtC5jmPsErtodgcDKCUCFw5RCE",
  "key21": "22LJJtmZG33rY6f4ASBk5XVSBFzELtkuVdqkuqvm1eSnChTQ9NVANkReRfXU6XBuXKX5MnCxCGmoUDoXvJnyY9Ja",
  "key22": "4hiX9UmkL6eisnX1LMy17R4dae3N52BLk6iXx4Gnv2ra2QtcGrALQq63cs2BoVQuzCbD3tWaRCZSmoFziTpanZAP",
  "key23": "5pz85PGrjG91fKnN3KqkCJ71t9HACPE4KsJ1ErtyMjq4mWTy4RvG6onj5XDY84wtv8c26fDEb8XvgHkGVhq54stt",
  "key24": "4XdurSuCKVxm2cD6d7XbXs1B8tLc8nZfop7qdjV6VJCSWrEK7ZUF6HyX8DuZD1Xo77xXAedYb8Ui7Jxp7Po8hGPg",
  "key25": "46G1zaQH1YvUyx6dV5NMFjwNdJVkJbWFwovYCUwigVwZLbvX59xeyojKn2Gf4qJbvtMbCkZysTZdMsXgoBL3dPnN",
  "key26": "4kDmugiwRAz7WRXQY1psPK6AvtNNtrCosuDhP2b8vCJB5bjDpYnNbT4gifZ7aDgZVJgjyspDB3wXWcqjtTCr1zTB"
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
