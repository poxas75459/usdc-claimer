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
    "H5JEbbzQ5EuXxqSeVQmYLb4adWxn59KATkzqWHLUqmEUVh7eLX15a49vrb5iZcG1z7JLFTqkhmCpajn7toRNiSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWLJoq3t6wU2Gm11rFhnEKn9iiZjCSLi2jLygXDWMKty8TnLoUaBCJajfUvfterPDmi4nWQR1uwqNDGpBr2G9zt",
  "key1": "2gY6iEZXCaVrorVBU1dxejDCjYBaeUoiv5YA4ecVJxR1Vfigc54tLM1qWRhyrQ7axtiFkKh3E9RbDXm53y81LThy",
  "key2": "3bKRPpn5sVmWJFQhzMWggpqsENTyiMBwzH33TmCC7dPWGcbAwm79RRXXk9UFyDN3rh6REuje3Y6NP91MRCazRDBU",
  "key3": "3f44zZzXUkjmyQzMnwignza2o7EB7tX443REkhGmAf8NLgS5k4SnvUwT3WQWhjzgQouxmmNDBVAeA7ytFQoDASGv",
  "key4": "3GTciSAjr9NhUrC8p56vHkmgGmwjgcvpfZc8yKJkoqWvZEq836EMGgERRpWDQGesoQeatQL1FA5raUTipsjPhTTB",
  "key5": "4z45mVErz6APc6vgiww1j6g2g8TGAsNhB8bBMV4fhcr8tr6JgTHQG45Ruk9kG4i6PtdRzAXXAHLmkGrmVMHZ5q41",
  "key6": "3UfQ9HvxSm8PmK3DwN9DzBHFTcd243WoX9BFwj7bEApEh38fyVrKf9cpdripeTGBdyWVJzqVL17r9x6r3SPnR52S",
  "key7": "5QZCabrDHjPc7sPRzaoPDPC4jZfQmCATqMjArpaXXMUYm6fVxySrUPLLXioMfU9X9Jhjthwmbpb1N1w1pkZn3Wnc",
  "key8": "5Gg91dZPzURW29mCbjPhNGeYxW8MCazU3yhAAAJAqBWAP6GNfhunQXv9QF8MMkgBhvMJwVX86pQtyAHuA5kCbJrK",
  "key9": "62eS93iQ6ZpXEnfxQY3ry3r4zzzBkoPHLc1iypYY8avzaLt1qieiq4LRoefGPUnwkuivsDxNmTqVTtdJEPpSxE5J",
  "key10": "5p6HUhUDu4nvbjoH755Bw1TTTFmgFk8XPhwwobN92sLwpkHjs8kD9TwXrsLaXEAH7T9BaiC2L3xsjhYchnsajG8W",
  "key11": "5Mdji2xT3QdTi9NTFR5Z71868opHVw9GtKL53kpBcbMg6o7swEFMs9CYousPaPMLi5BXT5qFY8cpzxUWMvtQdxB4",
  "key12": "1ZLxxc898nWmwrEk9oF74sp6w1buyqGMSSwBby7xdtYKSS9Z2LjEKFy6z6yk1927PGeM338boAwoKxF5eF24yeg",
  "key13": "5mmsgB6REKFfEqoCQP3PaNVfYftmtLaKw4SoUpWJ3vXLKmNNAh3HkpZRts7u2rP22dgiQufdeabhce4mwrjyfLyv",
  "key14": "2GUWG5cdhRuNMDH4yDGeKf1tM3Q9gVFEzWBKi8husKyaFGmtZfLKTU1YngSnQcr11c7jxKh8Uhsx5eRyHX8hfdXk",
  "key15": "4QnPQ7AAoVMkjNsJAhKXqBWD8qLsuSsoMrJ9Zb5HriXyjkJpYK5c9EuCpq7bStguZZg6VCB42YeLxCmxHd8dwjf9",
  "key16": "2eq2GGSx4Xi8rXCRmwGgjQLsYWiGdcHjaKda3LtkApxkuFxAERkWb87RwAQm8VrQqXWzDdsqfTHTtZ8BfTuxfTCP",
  "key17": "3skSWwdNxrRyknXZWV6uV6ntiKQRb9oTAgoKgbpj7TCPKXyF1HzhsPVfTvfRVYbk4JgRsbXqYSpHwjsYuj5HYbAa",
  "key18": "5GNNGoMfCyxmMcPV2D5s9JXALU7skPwy7FM3BWv6u23ujiCCvdK2XFoiEvpdQymjvbfkA6koRr9E4XShipk7en56",
  "key19": "2rzyWwGMSw53Aqvb4mumUcHXwbcMGrsM3XYBNDdt7CpMVsBEJegfDTjQQxe79kRpU7FMS27MddRtsSTsobStN6Cw",
  "key20": "3CE5AGznN2EenbvwCsyWN5Q8TXpecEYT5qcG4jZDhtrdHUj3utRhZQbzwMKEGsMA8DNtjwSbSmTkaq9LbYMNRLih",
  "key21": "4j7dYcbmGxoQWnRaxNfnQ5QZiwQo3pYiCAKMPm98nLtfB7dT1TPaPNGGskd7WwMKCFVXtWC4vDdecauNZMbTVZYf",
  "key22": "5yEsESiSvjDDePvXPPrqGjZ3ndKNFFoGb1K5NTVHmAHzerJb3CJVFFYVqLq4r3ugbotNUQKh2q872SCRQC9UcaGr",
  "key23": "4SDYYGwfHiHZti1v82ny54twBgBLiqZDdPiDvgidVNMCHVwjRZxtsLcRncschUSbuC2po3gZtnUVL3mk6UV42gb5",
  "key24": "4qMKXvwuaM7mGuZutDGFV65vUYuNek9gbo2eqPaYBBz9QWUihzZM2TAhiGGvSjq32gwCaL7xUy1CNn2qo8nraN73",
  "key25": "22Qm8qomLSBsFHZfb5L1LsEGC1VxVjDeeMzZunZCLtfgX7RCA5GeqA7AUPngRskQmCMKKMUAVuCH8ZdJU4GBFYh3"
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
