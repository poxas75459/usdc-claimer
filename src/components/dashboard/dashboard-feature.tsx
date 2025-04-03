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
    "4GhCgYg8EKKs3HTmPaHTbQU9zfK8tBWX8wZbsYQYoCgCWxWVMV1Mpbbi3GLcpqgW6vZ3VL46BQbgQBGS7Pj2Ndq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UivU4o2ZmcBUtDttEpuwanARCQMHKuL1YA22n88AdzHHn7GMcSZjEfbFmfy8LBT5yFNrs1zdpe7JHbCYsp73Jzg",
  "key1": "Zeb3Lyi7qtdwp82z48fLSwMWG1SEhPPVeWDpNAtaMPfn62v3L4hMgqpC6djh3k8oaurUvjYkx3hgBzEUxSX9Sej",
  "key2": "2J1j7WY6ceHXyeAADD36J8HoLLMj6u1twS63kB2APejutY1JaKNYoHdRyWCcGvFSxYMtim5Jb1Cue3ca7gTmpNvo",
  "key3": "36bAQPVzCWNxauEuLw9i9JACp8t1iVXrSZtfxbHNUdWG7aA35aavWzJGr7R1168XXFWoBAj3mbCoSWe5uT48nhY5",
  "key4": "22aWCZpoqpPot5vvFrFase3RhFJe1f8ZzydMHzY4ZHqsCt84n5wDwBgkrvMv4wexitMmuDv9BfTtJMDtRv4e4BLE",
  "key5": "p87ZSgmDLz9goy3CZfaJKXEV9yhcEWCpge1TVTUHuVHWzXn4AwfxhnmtUcemGJ2jzuUGMiU3GoqZMNDdN1o6K9A",
  "key6": "5q8c7hUjv9CSi7LtrpR5sx8GVfjXVJFkCGoMEaS8azTsScyCsLgeFYfSAGn9dA6f8ZLUYmjMdYYKaNCdA1j5wkSy",
  "key7": "52rsDCDra4RBLL6RfNLH6giuxMmu5jxezwq6YMiz1tYDkuBd6J7s6vFLeLstyGB1bRH4E2KNi5ezdgc4RbqL14Tf",
  "key8": "2c2f1dtK7XqDEmBvyEwtqpwR3A4vcJCUqZfVvLot1CH7BZZnhLCay33a47EYETYio8bndm5uYnFnSCQs54JmP9Wd",
  "key9": "5Lvei3BQgTrdipsTvG5c4BgX5mS1GiNseCp3KfvQwvMbdCCsVWdksbZyJLjyZp26uF821AAGFkwGkPRGA2cda26B",
  "key10": "23ZA4Ant8eytviLU6hnFiDpD4UzBYjvJgyHDiGhrBhn9JVM2ByR7Qz4LezyhrWgq8ACeAMfnznKA2qqkhbfKSt3b",
  "key11": "2k765XYtBpFALSBrCGgUQGTGJJBjj1te2zhWMBhZid4f782pMdQLhMaSjpqSFq3b3pctDxjh1xakqLLsEes5FWxM",
  "key12": "4HWsPbbYwpfNnuNz43tU3m1B7qVG1AhoM3kP9KbT91K7iAXWeFes2z8q8bs3rH6fhwwBMK5GQ4j7F9g7xB3VM9Vt",
  "key13": "2RHaPTEUbhprVJCQTnGb1UTxZvtCZT41mSWyTQUKBoojXdxZJzbLgdPfEULh6AXBaRUur7XRdWNtgQETiDpbF5Lr",
  "key14": "4hnQtvwtK9StjhLbJsrMC5SowZ8TT2x572bsutSHZ87GzpMsMtjtYCdzHqfoYAZ9iPaTmTaVr9wAv5c9sUhq7QcV",
  "key15": "2iRJehoGNoanU2pC6aGUztDcF1PGJmqxh2x1U9BFi2YMPMdXZ764TzSNAgXZ6mtEFxSJGWQjwHCNrgQzdQMmpS9",
  "key16": "5EKnr9BLGNLrMesdzMQHSR8suW4PBvnpc7GF2o9XTjM4VhmUtAK9BDCaFJyn5pMfuUEedRC4Laz99j4nCZE5XUan",
  "key17": "38zvtNx9WetUPd6QGvTSrTydvpFmPNrwz8e4wa93javztkRERQyPZEC6YR63tJY6ZawUokksvvHj8T9sDnHauk6W",
  "key18": "pGgzir4mJo3krMu8JUkYkusPzc4TA5k48Q9AVbaGCUVduuHBAcLhRNPD2bpcfQyATYkzMYpiEb1TA5LNqNNJBQj",
  "key19": "3FarMJ2RBEinttY1pgrg8LSFh6UJk5FyUz6pnDrKKowLfq1TYVgNThWkJaS8YXwGU5jtdDDaFCKVkAp13W4i7o4j",
  "key20": "2Aon7Psb9dVZ4R7iCznFtZyocQUzJArT3nt9Jf9ctNDooT3UgaokR9sMLPc2f2xVnkbPb3KyPTYeRst9qfz3Wtcy",
  "key21": "3bu7sDEyz85buV3LXPs1ea4UDPNLRPDTPYzsdhUD3bvwKB4mARrpGqyiJiiNkMk6oPSYEMzwvs136qhvUVB5Ca8K",
  "key22": "2s1Z5pczK7XuwoRAJqvWvdaReQDdSMmxfTvSsRr1TRfvqHJ17S4ENtBN6VASweMxnbBUMwaSN8CD46XQWFCZqvcq",
  "key23": "u8wVej5sjo16pVCdeuaAr5ob3SmaA32vnjqdGn3hVTFuobixUXNkxi77asRHPbevTwzVB3AWepbRdrZcKWXBWXf",
  "key24": "2sADdQwr3aCoX4svEew7ucsaC1eju9t3bNyeCGvSu1skjq6Ue6S7SqaQeaqUc3p581mRFh6aP5otXF2PSwKnGE8",
  "key25": "3UjjHcppbTn6n2pgb9ghbrZtY6VhpwtLyu3sf5Zw1ae75n7M3HwrZxzBvNoJvHwLpYBwqK1pFaPiTC6xogVvqCgB",
  "key26": "21m38DS3SJ6n9FAvvAFhm9KCaorGwpUD2b2tqrSCkadvJb9xJ9GJt5nekjkggh81PCcpL9Ft22QZeTqxeT5Sjnwe",
  "key27": "xWywmqgZ5qBx4gdLyQGm1naW7LXN4qq4KB1AfkC5UrfRCon5EpFVHqAzyYrczt5yLN8Zh12hAXxkupXAV4Y8Bt5",
  "key28": "uo5Hqncf57iB5QBTFkxkzHfckfMm5tp5BUhkHuAX6LEAyTYqVGhdSoGRdAfcVSyV7ESTx52yCYezYj67ZrFQeuP",
  "key29": "2dS8c78pT2yotMw2ahXbchcfbdS1Wa5b65pAAT5eDP2NQNJNP6YACMeTgrjJdeNCGxkRHmz4QJtPVV62kKQ9LZWJ",
  "key30": "3fkhFw1dsQTAQpBJkEochKtsfevSM9hJ71ZS8hJ1FjgUGKLigt28PME6gZb8ARxPtC4mpjAK3AF9hjYhoMpmuuTS",
  "key31": "MLSbDoyU8Nictj8rBtcmEwAVhMqnGq8GRsvpZKPuBdsNur7nctNYx7e1C5GrenMMr2SXqaCw8FowTyvHTSTzAxz",
  "key32": "2XoBEwJxGGar2pDeqNoeJ2gqRgmQts734jKZY5TRtdZz5gME6nPVy5kjs94wjCsQYpVZEca7iXYHc5Yxo6YQLAnw"
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
