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
    "3Vu9kyy6vvyQv5BoMFdgaCior4sjAe7Yh2zqjX4hPayEtyhnSespavJRJLwCZMbPkjHVmWPGHgJ7VETj2QJEGoNX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TRLXsMNVMN4Stm2e56tNEBg6P3FJZs7d3TSC6nFyvpCszQinRA1G6WZD3h7VBTViDhqJxt68WjefjYAoEC7FnWb",
  "key1": "4RLEYSWhqNgx4Cmz8GT7E2FNt7kR4fhwP464pnh179FsRz68iWvTqcQ4y5zTKQRVUaLfUX3WmSm7iwMqduwNwhrh",
  "key2": "66Mo3fV87n6KgX3adAWi5Tbmm9ophAJrC6yu5C2mkKZkmtshc7Rc31YbXw44Zc8MBjuZt6ZV7NwQTULikoTdFgMD",
  "key3": "4tTfJh2p7F2z2f6dsqExSESGxFx7wgwQd3KGvd3Ac2u8eBcVvzYt7p9tVKH7pXmGBopjAA6SVaksaGcDH4XifUMv",
  "key4": "3zrgDErygqbC97N59okSTC6hgYKfD1Bs27dacCV1ceEf9trzr7nT2SPan499NwVA8XjFRSfT3JDbYkuX2H7wdifY",
  "key5": "4B7aJ6KXLuVLmfFD18wpsz2AHP3MhLa4oqmfywkVT5vNmb12pqC2PLU6XF9v7ekkZr3Dz8ZXkQcqQTpNfX1ithc4",
  "key6": "5b2FfJWHR5ytMWUBEmSmiLRYHjrufewWb6Jb2JynVyeQaCRwbQFfMcENQ9XzN7VKUasTn3ipBuL8oU2JJT7jthB",
  "key7": "2mnQuA2h2DUJmkW9rhEbPYvuLhWceTt3AUMhKCmLGXmAssWRTYQ5oHeH66At1YNhi2dfNeuPkKHJBgpoEcDvcim4",
  "key8": "2JaMqekUrAa819URNdCkceDkqnSUvVSiCjwUHkhLLupzrRgoKvn9esVxCsoNecHSt2P1xkXh2LfhfVxJVpREFsrQ",
  "key9": "aFrwb5rDjqpzLe29ES6sBrT4FQUfPbf6byTNrMq4AedFdFueynP4BcnyWagRixh4PgKaXa878TTpUvb7UBQNmhe",
  "key10": "26HEdp7JCT7GvGz4NdrZu7STyss8aPt5PMicmmRP9pouAJ9tn1Jcw8912hTveWmjXB7XKQBzRviqcNqHkTJJ6QvT",
  "key11": "2783BdT97u45zSkxtyseq7cNXX9Y7gUJLAYdgUfYUTXwUvToytKJdzSoqd7Z81QAGW98QDccng4sFSUXcPTZLQiu",
  "key12": "4WGmMBLbhrsrMT8NDhSyzU7cowM9LLqsSpcSGmog4VoTMjEzCrPiPoTZFnoDTWQKeKmswk9a76YBEMbXXG9V46eC",
  "key13": "pGMCXW3PJpgSL6P8maDv65NhJecpBTi2opfRVqRETw7Bhqfvn7pajkfr9ndNDx58Mivjk385c3Lg6v2A44MbaFq",
  "key14": "5ry4XxfssSGP3mckaReCW9CFuegkiXjaMp2pF43ukxdfvbCNu2xN5Uv1GgGWQwNE2PggtYonnKEc2MaNyftWpBJC",
  "key15": "2JtaaV21QAqd8fYQLxMYvE1dCHztYpXqu2AwnPSmUpT4dYkU9gPuJJjkGS441Hry15Fjy2qkJdZwVTNY4KFtRE19",
  "key16": "W9LfogoyX9e4QjKtcFjcGgdjE4XTFUbnW7HYXnnPA1Ec9WJFaZnsg2bPuQvK97RWwNpPG8622naznxtsMJsBbxY",
  "key17": "5dAip9UEBGYkBjUA75Atjm7Ud4DWgHrVRLrGQAinyF2qKb2LCFRVrsNwZrUsdMRFqYsrdmfvgXrzxRc6o6Acu973",
  "key18": "5BKhXgrzasBfaEiKtz2q5VLMyq5LEP1J3TZUpz1WXrEaSzygJCUrtpksD5BRN2t1qFUVdKKgLVs8Y8UA3H2EFBTW",
  "key19": "5eg8HvzmEG2p5r5pATC4iH2htBNv2NA5yUBNQrFzwsTVfq7VSaD1xD4JPngxTs3utaEDKyhiAPSzW6coT2BMXLEy",
  "key20": "3oNitXtrPxhrf7LcZRnvxU9H6VDHVCukiyTo1WH71cqYFRZtbHaWHKn1tBUwuEja8MSrDEVW3rz7Eh7cwketF9Cs",
  "key21": "3wiGZ7SubZs2aCoi6sX1JEz9pqRc6jEmJ4y74UF38d4wDdXZ5jQ2Nz27jwaVKxszEW4XZ4BgHtcdaFo8JKDg84sE",
  "key22": "EAapPSw29WxYnEfnnYEGjqcPdwcXyw3KctUe7wDaq6Kyui5e3i6fQ9RLd56Dq4GUrYFTzqSXwucxszVyw34VWQF",
  "key23": "2RkZegtEMovoArUY1HsCWuw1CKXgeyjLa6T7sw9K9ZAtZMt4NzWnmz2A9t1KaDu4ogLQWRv421CKYD9WFYRmv212",
  "key24": "4qpDK2NxTzLZgep51RShX9uJfXpth5MRsK2Dj8q4AnX8q5BBbqqBQDM8udkVTcdncG164QGQedhfMo8Heb4jjP5V",
  "key25": "2H39NpSrzg78fkZHtS4njbngQrkU3UWgY9SMdqEdP22PsdhwADYtaERxKVF4VWdsU7hYbRuJBb47KHxPda7Pr6nV",
  "key26": "4DFRKtBrWBCdW1dYrjh7VmNSTyCJDdkukASVhPjdjJEYuQp2H6m2fcH374F74Gm2R8cY3BSjNmg2G1Qb8vgNr9qo"
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
