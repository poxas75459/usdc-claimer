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
    "5BequqTuoZ12rcvXYa6npCm8LU53R6LQFRK4QBEiPwUeTiLGmJmz2mWK1RxZNsBCbnHRG51FsdZFqAtHZZF1snW7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tvxtH48Q32jvGdxy51tHkvWzYRhDXCxqEiYBX3B5GzZVL3KoyuiAb5YZimuWELhnd1cgC7mT3UZ1avnRf6wEUUe",
  "key1": "2Rqw3qSiY4BYtWyrhAb8tDAzJ3f28oj2uqGhTh5tL6rYdQVAuKJKefxCAQGW6zxYnBFRRNPhvTVtHGuZMKn4bqMj",
  "key2": "35JSzcvTNnFa3oqX5bnxByMjZqvJLh7TPtc3jzBcGdThtYvExKpobMU4DBUnqdsCKBEXi2h4nt2KmVjUSRBpiVSk",
  "key3": "2X4NzbFib952GuG1YtXCyvi87mxxCkLpyHgDxGeb6GUBfuzvGn82XUJjAPew7cjbjxADFxm5PJhqJFVQ6TS4TfM6",
  "key4": "2dPoy8xti6bqPcT4uR2Fv49K3NQh6VdARyXDSSWHyXb535M9FWGEV3hiTdEUcMQzDZPHB8URo7wyQmz51pvR7Bbm",
  "key5": "3M5UGGUyj8UrN5SFV5cSc5qrjSvysew9E5uSW6SqMqm2DrCTAhYmVWtsDYUNer6L56pM8ebtny84nmmY74rKpBC1",
  "key6": "5uhsVS1Dt3TJbPde9ctzhX1XtQM5sSbq9v3AFXfYFZ6AK6wGy7LsS8wQaAV7EShrB882fJVrc8kNBzJxiAezhc3D",
  "key7": "DrRuYuuL9YkyNMYjWayw69NZLWsvkjTSZMrZ1WMwAYgYUpdZpd6rn2Rg6MDMCrXB6v8eR4XJCFSbCEA1tYry35s",
  "key8": "wSyRS3CYJ1Fs6gub8FwFug7UNHtFgJJtGjEBPAU7n9FdaNuMN7ZA37Xas98D7pqfhF878R3fLaGjef31QnGVckc",
  "key9": "5JRdA7Rb8Nm91nhWxG6PArxgNTNCGZzSfisQJxFjvvaMjaRdHAAs6nGcwmr7NLfuTqwfQk5cy77Q9D9Av8g9EXFs",
  "key10": "SnJY3PGE7Z7D53H5WU5rXfmN28VCTGaV85Et6GyuRcYsmYfYvGHgXDXK6Bc5cCxD1t9VzKSb8RDrMpn1JrWZ63X",
  "key11": "2AeMtPz3umpX3g9Vs9B4ri3mrcovZSGrM7RZ8g5t9bGAWUhMsdmbQxZqeRuRk4Nt3KUcPBkvviAG7iCsGG3dPe9V",
  "key12": "47fEf7gmySmJimVcsFBvgiBu2ENsRs6QXWFvG1onDpxGmiDmrk1CDbGKSmx7zhuwKDTsRwYRaS3pyVYVsHrTKZpC",
  "key13": "2vQSWcSE2cCsDnbGJ5EFnJzgTCyJBw13z8cicMGGiercSe2t6UJuWb2R3f9PMuCPq1ZtiGWTy5XbGw7hiAFADNet",
  "key14": "3ZF1aLL9F1meUxKZtQ2UsoofW4rSahxsH8VtmYDh3z1nS7f55AQVgGnPHQN7MEQGKpepXkMcHiuXcvFJkRiWMTjj",
  "key15": "3ZGDsRXgzffjfsNQHYD9xRVwnFb4Cd2GWqmXACSk55C78R9cq59qozQriGMYUasRXkHuSGyPtNVSAGrE435aez7",
  "key16": "2JjdAoW7Q9hY8mQoZQffYuS9PWaFv9osaGchX7Mda6T2yq3pKQGR1QedTbUifSJgAGCzaQsPQSsLbLywTposh8Jb",
  "key17": "HaJ8k9zJsDVxAGVgZpTuFvQLHf1FE6AfQf9G73k5oNiUGP7Dvdya9oegsyqB3nWxJBzyikZaUxz2DvmCNvbTD2V",
  "key18": "34wqzbspwTT3cgRWsJeXVL1AycxvqjcuA84AkuPMykEZJ8QXnE7FRj1rPutesL3ZE5vveHnven4bNDxKusEk1X36",
  "key19": "41aEeiknDptak54x53HHtnyf2ZvgBbUdq7Gq4gzZ1Rtd8qnuUNz5SSMaaqEgrQo7xZb1EGFMcMjhTSx42pSP8yd5",
  "key20": "4Xe1ek8wDbzr5YjYa7BZQAvexrVMr5b2Eh2TPvYNqYDudUzkJS6mraBFbqU1Z166tzzKPUzbekAGkwnPhPxkzE8t",
  "key21": "3qALiwR22Z1HZMeKnztrs2oyGMihUp8NK6bEN52bxaKYbxdXbF9PxB2S9k5u3STVaNRXSmXFo3sSA7knDuQstrfT",
  "key22": "4kyi4w8BEsic82nV8PCPjgAEGUEvYPjWN2SHYTPaz8XGjKXuU1NQ2raATUUZz7FTv8KfchBx3aqTQfxpeWoRiDm5",
  "key23": "4b5cRnZXYywcxy4XBuY3U7vij8LthSk8X3JD2ZKZRuXyMK3Fp77KtfqrVYZGy2ZMzJYBvz6rJhNFVEHBifmtWhFz",
  "key24": "CMdmbDbqKu6p4L47gPSNwLeYTgX5rsHaLx591us2ntRkDxBPgWW6aRHWoJHNVPaKabPGfvGvazdA1ZPNXUXzahH"
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
