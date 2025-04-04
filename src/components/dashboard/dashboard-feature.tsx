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
    "5Aht8TXSnWMFLDBKH4d4fknXrCKd4oD7WiiM7fnkYQL3doWiZEAnCWpkvSvdo8VaXTAamL6H728qGzePekfnYEGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rfva6icd57ZUWmBLh5fyjP8EmzhTyxVaWC4a4247Udm1zXf3ZT2JAc8StM6wgqEWrYsfHdgULEnKHodBmqdjrXi",
  "key1": "4tj6yLFEtopJKKmv3zZ6MYTBVwnNsUewVcVruTVd9Q5b1CKHj5Q8zNxLaNp7CXMe2ffytyKVbLcdvoVErv5xdZiW",
  "key2": "D7zi98pwm3xFAsmysMnc52nh1Hnef4yMZgaxCiBNhJVgoVYqyB9xuYEzDfW76nTxtxKfxMAXAvwU63D3V7Hfhtu",
  "key3": "3mKvq8utQTjdWxvKjznTzQ5kA1i97QGqMAZhF3AbWQXr3iqUE7c8EUmxUoAEvdsZTxhC6fdeYZa9piCo8uDteqob",
  "key4": "4vvKWSRJCP4RaxujHA8X67WVqiySQcBnB9nVDCokk3ntXDeAF8PWbCzTfiPWewWgktRLjm2VTLzwKLZHMoeK1ypv",
  "key5": "HheZ69roEdgAQVQ7baE1cgZCfX9zUHq9BuJFNQFEBEszu6pZyBD5Uu3jV9HF6h6Nof8BRFKfi3r6TTxVYWGhYBR",
  "key6": "4JcyPrMCxGAxbeiniFZZ2L2oqvZcXt8uCB4gVmEr5KxSdUk4TMcaYWwCmVe5T6o52o7xRmVCJjCyCpS3YcSxeyDY",
  "key7": "5oshPTW5VbKdqgveqW2CNmM31g8gjgKmYutwQTBMF5x7jZGdWNu3HnRQx3Gijhm21yyZKhDyUbYkFgsELczxkaBE",
  "key8": "2HpReL6QEYPp3eNfDEZXJ22qmtUHDmKkxYsCR4Mpykxhh5ckQBsPiCbSvoX7wQGg245J9QPWF3nwtGAWnn5VoZTG",
  "key9": "xcG9fd2yoamJSBgSbXE5xQw6hxnUy7PQBuS4xaGganVMkANf4iY2ttTNGGQeJWaJzx91ZhRxruKUx8ybJN7Ra4m",
  "key10": "5VEoXjAgQPayi2GEecLFdtDuJNxmHbfpQqYi7CEqCzobGPsaoTGasx8JPA5BN1py8Lp1Pp3JwUD3L7361hmqo26k",
  "key11": "3MP1oQizqKN99n1Gk7MMzVegPDoYtfPwrZGS3KsadsqXbAer5GvNtk87mjpryJzk4bPpvceQVpnTzhXK4PcQvciM",
  "key12": "2cumFL2U1fztzcz6qLiBDStDa7vV2eP8gWTg1rKmWSKZMpoFoKFtMf4eqdtj6bdXXZQ324Yq9C3sjWET3FXCekKW",
  "key13": "4rouVFyNE7tKQKexkUF9PBZtqKgKAwP66AX9zw6iu1LgfDDYSc1FrBoNcdALNqMwPNREE1cKgFqShtSyWcaMXvwu",
  "key14": "4S6DwgEMdfFzkpS6rjjVph8bjuNyA2ZL1YqagSBupNscNKdPu9f1n1xBHEKYJqUhX16Hdj2kPxLrkXb5fhp1SKa",
  "key15": "4iTTtdVMr8GZtTPqGZdAHuYBkuKVNP8vQmAJ2jAUGz6fiHxzJ6zaC9ydXa8r3H3SC8u9EUmQdJZXHJasG5QgWe8m",
  "key16": "4M614YC7RiW3nuYsENjaVnp1wNhTzLRrdXfBcdb2DoAQEpuyG9Gd8c9EBTceW19qpWd3ko6L8hrVjwehrmigUddH",
  "key17": "1BoPMiu2HeaD8uswAxUSXNWb596Z8WyD6Jg4JgpXuPD1cEKTLd1zaMuDpURm38vzVH1yxa5Uj8ud4uwEDACWd6C",
  "key18": "2GJVvS2dvhSfz5b1cM16dU9jopKiPprnbJSbhfutdLUxeT7aUMVxVQYgpaZpVvVpVchadLfw9R3gK7Wyp2B4TkUs",
  "key19": "2DGm7aXfhzpx2qBiqunv4EJG36Gr9GgdAsETmNNk5FRaYXfuAkoeDCiNwMCNCmsx4nDXbigF4LepPFTaPB3ZJurP",
  "key20": "3fLDwd9mhqHmLtEvmHaHNrtCfZ9BDaZnJp8VnqA2mBBFBf44X1DpBpxVmaGyG6naKLeryrAXM7Rt1QppHJHpmLfr",
  "key21": "CnxSudqq2Do4WJyBCyMu8X1CoyWkj6Xadoxkm7HLGwCXvCnnDQ2SfCvaf4YMJ7SrnTuDEn47JyJg3o6dng7orey",
  "key22": "28opHM3Qaf6Ltd8EPAN955ZYrKMbuVhyEYptU3jqcy5DcrmdDfWcWugoA4gRgtE6UUyesqgP9PMkKzCy6U6Ap8HS",
  "key23": "5sJPoUJDANuP1516iWPzPrMNGYQoKxHggZcibneXMPTNxU6ENGf3Z1kQ9ZM6jQs8D9ZgPJZ8uUwTXqyL4CsXqpyK",
  "key24": "3VnY2V73ZcHpnu5PwxR9XEEgd85s9RZZ5Y3zfyMt7jHaj7vNcMCztmbEF8F5UZjDWk1LvDxHPeD9Wp8NvLfBAivS",
  "key25": "BkjQh8G9UhRD5QrnVPR8am7WCen3eK5iQedPDnNcBFtHAPba7t3cW2Jv9VZZ4FNX2SbrYoNsfPekTZPnQcZSj7L",
  "key26": "56znbDsFJerdWJDbimHzZ63dYXVBh1hoJvaeoiW2RMgTB959fT59YppKmMKLpK5qETnme87iNACD68sJpJqzu46d",
  "key27": "3vziY7x1qdDpXLYWABD5NmSFipryuJ6WHEduToPHPZ9k5BmShzvZAFmkmXvMavZncumDi9fhv23HopR2AcB9TGeL",
  "key28": "4PkMeFGit3AiGKAt8B1CEYFJQrNMgWGe7FEFC7oqGoBVZqtGmz9jBR4Hh93yd6gTcoUuHiF6fUMaZ6h3QyHeAM12",
  "key29": "4umJvKQwcKDfjv5obydxpBcsxtQVypm1j9ePwgwfe8D98xXZ35b4AdEcLEpSYsVg1T4d9Ez9vA7J92SLpcEEy2hh",
  "key30": "2F79iFJ8g3nTz6p8SqQsPiX3GUcpWEaAV2pqGHTn5s9A98Fn3pYNQ3Q8ztLcedpX5pzPVu7vG4euhywyEDsJc2AT",
  "key31": "3TLFDWLCDvXVMr4WkTLDEDh8KNircCUhHox8WJCnGHUm8CfHYgrYkQyWY2pRF6F3pq445p6mXketCr1fCS2ZAx1a",
  "key32": "5sYZNwzoM1mnVGEsiPevQYgPqFiUtyUZGatQGWCLuaWhmrXDy3B88JoUQ8De939xGMxjuJ9nscSM9nsR8iUeY5Gm"
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
