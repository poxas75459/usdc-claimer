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
    "5HNmcDzXKxpWSXjbFT1rWPaTrgCNfSXpGwvXe4oNwGc9eLhsY7HyyhaxHZ1qVTf9m8zVZjbmKr817hKH3DMmt2pA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PbC9D2CPsS94eCqrqDY4aHHW5nJrCTefaQoUnGPqUbMCAFxo231FwipezJvB5yEnSPCGMAXtxgdGKC2w1SYEeiU",
  "key1": "2NaFXUc4PvGspaNGtNHK2PKRXokdMUkwa5P71hpn5k4HqHcyiSmqttwujc3oWMpmqwNmUcSomwJd8ji1Nsref7fh",
  "key2": "5Qiaf7v1yG21bxkU2YfoKtZn9wxmFcZ4VTXGcuNexenCpL3CjC36nyW2erRj94zYnHGLiWkRgLQvAhFdGijAV13R",
  "key3": "25ZwYDXc7SQ4ga7a8qATZ3mFUxvGfqbYrcBby445ABLfiZGy9cNdZLAxaL3EGrqgK6mskGPb7zhxsQ2XeahH2E9o",
  "key4": "3KBqEZgqSNN9YsvvKp5DFWHqEzgZiJsnZMxUF91uMRr6Dubbccx9yPzXqA5SLAJ3bD1MnPP2EqYN1FxfMe7Cdt31",
  "key5": "4odZGoJQgLErBMjnPBVTGCWacxytxaMAgUzP8BkthcTwGQ9Z2ViYEhEPsLLJXe76QLz3jT1ow2UEMYnvrrRDDhvF",
  "key6": "5HkwdY7J22rD9x2N5rHFhBjbp76A1L5UsSPwA8NjQs4owR7mC4VoNBcHguXqv3Qo3tNZZoAvcMMuqw9MzTgGHvsz",
  "key7": "4Q5Egg7MAZFPGPEPxmLBC2XY6CryftmC2N917X65pFHViHFhxWn1FUB7BY34WMpNdhz2GShNbJoZzVoJnKzyhoYD",
  "key8": "2cFbWpEiHiecoJXxDHWh3nVrDKiJRdCSRsf1GQPW5JfDARwwYSduq9NkV8ucm9q1jk2szhokJWvKpfqfigH9MBMj",
  "key9": "26HYjMTznxYVaHn8RwP7yv3rpSfzVRw67ay6tHTUt6WkfN7MZom5n9DPK1dMJ4m7XZ67tunmrXijV2VVr8q2MVRE",
  "key10": "4QjPBDTLKAxsR1KAfiugzvasTnysWu8p8hfUHZ1rC9SZ5fD3t9zXZ8LkVPgWY3V1wP5ixyHfdxkZiWnV5KMb5DhP",
  "key11": "2MW6m1HfipcCt5vtfW6nJgzyh4hLEV4eSgp98as6DgefgrnBosAbLzCPerCf5LGmC6KFHgwrxzKH8LytTpeNcd26",
  "key12": "329pKq7fVKyFvttNZHA68z2rzgLEqRQFNEfZbwsPkhPdLNjbeb23mhw3WUzBBah4GLhHqkWAHDJSV6mUViJHcnUp",
  "key13": "5aMKfo3EmvMGqAadkrpCMg4aQ5mhDjAxvnfnrisFFJeitFy74cHWaUDPgmg1aLjBbmrHRxi91BhayKnU26vNqgFT",
  "key14": "3NcYYGUFM9caHjjZy8PHUm5n486prHXiR3h4TZUPoQTrkAn4DqsGTZZZ1unL2v6W1B4keDMTWyYCR8DLiuZpbEYY",
  "key15": "2tqzwmobRnh8h5beUd1TkkRzPhTzwEcPWVHnGGNSzasqR76m8qEGmRJmuEqkF79FF8EsrD4ijzyUXMxCco3RxVhn",
  "key16": "5LZfa6ZQbMWbkRMtGjejCrr6YrYNLHZa18t9nMwkMu9dnbmHKTY1kpM1BR2EyEuoYw7mVk2g9ViAKKc3Bx46kFw2",
  "key17": "fCcfaC4tShZvvxPXJoFVAJQrd6bPRiYfw11TFgniENXzP87RtMQHkU3Czwbiy3gzL2ag21kUd65kmWXJnLKhWqe",
  "key18": "5bamwnsSCZrtBanFHAq8oVeTT8cCPoRWXVKjEfSfyzqou9BUa93qaTvbXwt7hixUsjzgTHHTXzeD9qW8cBLPftav",
  "key19": "4Z1ZpdF6n5fucfRHjsuYYreMVZToN2CuZSxmv282YVPL6WhNnPMoKS1zNmZ2jMVB6bUMrfPnrJeUxqtZU5Ycaojo",
  "key20": "4BD5cVxZNB5hoghRVHfSB3uLa5EY2SDMJ8vMUFLznR6WgCAbx7psWVH8G7DJp2KEC4SySCeANyfmCUyNgEmd7h65",
  "key21": "yf7K5qszoUss9xX11kBdPxW6UtLb7teVYXfwx9oADCPH3szmxDi5Ztp6WuiPxQWdggr3PakPqtaNg2nLH8CAu6k",
  "key22": "4HngLYUymviKGuhLFDyayCFBJXs1gpzHf9oToP7eJLBqr8XyaTvMrY4ATwg1rhfi4eNtNDwQjtmUDturhqHMLtN6",
  "key23": "5UTehB1RXBvGPwdJhfHFoNqi7UtgwNnTkCPeABsJ1MkaeW7R3hTKRjgNCiZsYGGLKRFALMpYKDAyamvpQsxCGUMr",
  "key24": "51XSnocPzFrXacX56YPpZms2syLcz2tMdC9hNSrGwfn3sQbteC6yQCJxRBsbiwDE9djsNigJ87tv4QzM8aYq4iwY",
  "key25": "3mX9Gvuf6YNBPrCq5Yv2QPdrwaRXx7VTUWg1hYeTe6Et75NPWmk6rThZX6YwtCuonCG4UVv2yyx9eRL6gLKhyjrD",
  "key26": "2Lz8Ue1ET6ZmEs3yaZuYwnwQJUALS7BLqP38zVKL2G92tVhEuk5gfGpKF5QQFfoKbSxxJegSp1tpSY1g5kQ7vbcF",
  "key27": "27aFLDvq6orWxs5aa6KS43pV7tmiUz2mA7MvwNzoRXgWbdPbhkJBikyUmLKox4a2fyFU7mRv4GWaiEqBdhQRy8Eg",
  "key28": "31EVspgk5JfJt1p7eYLyeCXyiFCt7JnzQiXDxV9tXYPkjS3NAznv1kwh1ybqupCzdr1fH4MQCNEEPUYUJaZ12mWa",
  "key29": "44kdaBvHjPpa1PDGwRDFeUWw7avyzKK9qigVaCxrKnFQZ5E1c3FMzijEpHgeKSsefGdPRbmTuG4zPx9EWUmZLrTN",
  "key30": "3L5uVy9eQLJYs5NimPCoo4izXQmBnszTcKBdDGsWBH6pUYM3AtDv943gGLgtkqGg7UiXDCSyJYiqjzNEHC291SHg",
  "key31": "3RbV1R4ufuHw1vho9H7z2H9tkruofGswwooaERAJ2TREJPHg6NCqQc6g2cAj2a3qxANjaJ13FyYFbRcZdJ1ASL41",
  "key32": "4A1AAZ9mNuSMmwxhMPzboGXCQYphptGajRhZiQfoyUxacvP8qrUcet17pjCHjzHigqhmGV5saQnmRofYgnxxWQQm",
  "key33": "4sudPYijvbghFeY3JkFjge7XmB6vBnREbgUdFNRF7YTGUxUiCPhDWCZZuBUqXbr8tDWwdK7vgSiLsyiU8thsQh6m",
  "key34": "in4a5W5VMmMP32eqbDu1HHYhqBX3htEuNpNc14KY69KjF1qFAH3xjthxjth81cpxvcM2XmM3UxUY5Em8wdiqrHT",
  "key35": "4ag3CX8wbCN74qR9YhdxRGAkEttRof5R6TznV573aAz7YAwPevwZzvxG2tJre2Gk9dw9eLk1gBgwmX8TFLxAaEe6",
  "key36": "5wjrsWeznWheduKZgAy3V2AD5JXYwaGYL6PmnLmo7wcjWNYaV4HqNDJvrQywZ5DYUNYWiYbQmkbkjgCrRHi17MqE"
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
