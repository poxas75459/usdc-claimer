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
    "5vaqwFRs8DEJC3RGymj7U8X8nvWoCSNzKDiAV7mAt2WzPrupFCRp7MqFuhFTWWqJdFJv9QW1c6ST9KWAtwV2YDV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qobZqLFXJKXxULFiNZsAUbbBuszY3qWtB6uSgd9DZTb8D1G9hwSwJzXKLBysDuRwkoKdcCQt9raAuEQ1Qy7tvjo",
  "key1": "2b5VXXNxxt2P1AgSGaSegWKJbfCcusEu7AxqSY67zrYZNh2b1nQUBX26g6e5GNKiRbbhwaFVB9piqUmBydLEBLnL",
  "key2": "njbxiqUWDZizvwmAeUC2PdwEDs9VQxmMptPbKwa9Xh4ojALqjEbsxVnimkuzxcFLNd2R5WRCp5ij1bf8DAGX7Cf",
  "key3": "4bchi5DYM4ntdGiQdyfcCEqcsXrHNpyk1cSQU5xTjnriaiH2jbonRL5vfZZJ7LN58TP1KSpCyrQ9oVTDP5ubuLUR",
  "key4": "5LP57Y1ynPAUEt3SRKFmeY815n8KzxVkyWqy1PwY6dLM9vSBSC9Uoy5m8T4KwWH95usJnpeGd2yXYbWbcpRUDvaX",
  "key5": "bThnsg8eLUitV7R1Dfmxy7LCXKfJXomUYT33EMQu8JjDYVYe5oRUHZRbiNTh6enQvpDUWrhq3nN177tNYF387zd",
  "key6": "5GjQu1v2Q6wScdGhYWBUZkKQxWtis39NDVa7FzSYxA2We9Fd5rPXhiqwALzRAzS54eBKNdYHj5dx1rpSsHv3TY78",
  "key7": "65344T4QfpvUQZ32ucYjkBiucaxj5wspXKc6854G1zuockVA6KA83n1kZWwWKEZ1zDXmwhav3zBvRqYkJo1tzRT2",
  "key8": "2vPmS2wHnbtjohjPqcnN8L2U6MroT47WT7pE4TdAKg82GsK4iAQ1DDoYJKMsjN8QZLYi7SotZnDw84nn5GomJitQ",
  "key9": "paM54P5jGbzNSBF8rTqMpw6c9pQD3eXay9AsuPpiDvJYL6ZeEVSToqRYm1f6dqGVM7fGjJ9XFotr6y1HSuzyn29",
  "key10": "5bbhtiRWnB5vPTSao4aH3ST6qGv46G8tzTEqnAVbiVE24NdbbL2Bke5UuRfvqUPicrJvL57YunmKufu863R2vQym",
  "key11": "62Uw2jCPuLDpJBbbAT922cEz4hmKQek9brrWLSA2XKrsWXuZj6EhmgPstSqb1nd5j1HpHcotSMa1miywspU6ZTc8",
  "key12": "5kSPSetteXn1bNju8bTjB4PwBS5JVTuHq2qa4pbehRJP9itg9jKPK8xqxoRJZ2r77jbNxNoTnGSEaoRW4xLcGgW4",
  "key13": "41dxLcStRNuJChN8sKbrwHyGMz1WBxNjEbC3Xeem9jywpW9sKgvmVnUviwAYfy8CuTU5Y4KLpm2kPuzFGrWPHptS",
  "key14": "bgZii4j2MDUdJ4PDcEh6Ljn1CnkLVWQt3hPEF9ZUKFe9zjmJ9U1xFNGv28S3dBgFqedicNUicyB1JFwR6pg3Mpz",
  "key15": "3a3T1qX79Ub3MqbFDMtoYd9yVrnfL34nyN5QVVMs6mMRmYupNSn4dSg8mLGppv7yKTTdYdRAhV6mZ9qXDNZqGQ1G",
  "key16": "zSAMChwN42o9zGAnfHK7ERbXfrNrKLd937crQXJZzTzfE9C9Do6ktmzJ7Nmq6jgLVMUU6BsTv6SaxiQwHNCDiFJ",
  "key17": "4uGNsfvZnCbLH23rdeVie1JRibMrgMJgYdh92RAucAfHwCsKbFTDmhYQTbeeeRc6tfCXTB1zu5KTN5j3udJ5FDwK",
  "key18": "8f5tE2M9WVXPxU4rrbumk6Nkkc2YybtJfr5uXvrwMbzJJnPeTwPXKYkriYkvPLMjY6WL3FCJWgYzj6voNsqr5kZ",
  "key19": "5gLPCebrMRoZA6K2FTC7gacMi7j2ps7zUigna7GELiE2xG4y2XaBjWbwg37vgxSdbwZGQtzEVZUKavFRD6svaE39",
  "key20": "3BrNTu3CScDK1yq5G5T9v2aEACcSwAn61ZWwrsgjfLKJVWqgQoxzhTpj9HLzhC9YhcC64oWhgigwC2Q6MjmKeAda",
  "key21": "4j6MUqoM3Xs5X5nuLzNzwHvuNPJDXnyyPuMvmmCo9bTqNZ5Ljxd4KQGyWAqstS4rRiXSq7EdmPJFo7AGQJtmGgT8",
  "key22": "NipC4HC9mzNU1WyPAbuqtPbwd8majfnycQhjgDXb2EFCHHTwWtXWpRNXALtZFcJ3oFut9KSYrwybwfytXbLCyiY",
  "key23": "21EmMJMVu3SUbS5U9aQMi1GzvU1VVy6tTHtUZuKV6nEPSAHGZN1nmvP9d4wxSi7ysRjZo1pXzHbTrsJXLrYxzhsF",
  "key24": "X8GmmVVdQQS9x2DXUffKwyAZrJr7iDFMjB3Dt9MTBVMfAaw3pAnLYKudoEE1d8tubXnzaAfmgzsyrhUEida1Y6r",
  "key25": "5R6qR8jFw7C7MeMKcJp97tvBKf7rPh7XByaCUqc7MUvhJnnQEAZfJqhBLmfFTzyv37vAWhENspEYzBHGjHXUQode",
  "key26": "5HeiNcYzXdPD3JrYf2xUTe38wH3VMEr1peNYM16C1ieLonVi5Tg5qpgPujLQFR8XsLykhLLDEUe9QUbnwWNU5rqj",
  "key27": "4hDMvq2THNEbU7bwVvK6RoNB5MgbqywJvAVuySN1Eq6LiECZH8YRkpXJH2kdddBoELFKpbAN8BcUK2JgycGYdG93"
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
