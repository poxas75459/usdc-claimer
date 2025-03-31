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
    "3ZDfdHN6eQhdF5kGoYm6S82t1FBAaEUkXQAPcSzJnwMZiyWqf1DeVaLTogoMR6rQeSRis5MQGPp3uTkv3d7Gmmnb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KPkw6eX4xV4FbjG7dHod32DddVry265xfBfgL97DDtpZ9mY3XrCSfn2Tqmr8khHjHwH3KWDqQdTnX1LJaB5gAeq",
  "key1": "2t35emp7FfFRQCv4Tb5Ya2hyACfCk5ZhdRiut8a8aaaC7TcQzC4o1X9cvY2VGwLD56yXW8XdjfNXpHKnQw7yfysi",
  "key2": "9bngf44KXE54rRE55C1X9EC2ky6ojoZFeMV6hjoTJAatoPDHwaRfFAKbwb45cnSSdD574undDuPnL8ESrSx4nop",
  "key3": "v17jJHo2GUNLw5p5VbUttLP9PVQinZwSjYS5wmyWLt4Qej8R6JarL6ERrdDicSarPJqsSUjjfxdqu8FHUaKDaSJ",
  "key4": "4ZKDM4iosufwhBEWepwF5Fvb5WDs3gMBryj26CNVYm5VLzRKbUv5AWqHu5z3AxStubiCvSq9gWCiv3TiXs9jZpVe",
  "key5": "qAJyxsTB3SW7LpAfGaBxAV37uzFKvktb1W1BBAkc7yEuEsLCowWQ6MajLfSsLAvBPju7h91CGnovSXcL4p6X5ek",
  "key6": "2UNktWDR3aAHNoh8b45WAiy1fHW6NMfNiwWEc2Jf2nWm6TLjiBgdtpHaE8LzPA3BzAauubaGb6dxVwXSiYwRydBd",
  "key7": "267BJoUWTFmthhSdqPZM1fvmJ9KQNEiLKMCMCKBUup9smqhy91KMkGJjuRBUQJKXE2DGbma2PPLwQoPY61wtWHhv",
  "key8": "3pUcTaq6xWSEjFy86EjuHXFWZRu5jdF7AEsxv65QtSWTozjXGeo7C3ibJ21VnDUrVrR3rP95QoCCnwVTJL8rhidw",
  "key9": "53DXE9zeBKnAU4qcbtMh1CvryuxXPecpRZcaRWmmatfNpmDhGF6bbnHPUsNKBvBCU3QErx6xN74iLnvduBoVfRsn",
  "key10": "4f33s73541gyFmfzVYw7UdKjktHVnCCZ6kZ75yWqwh2EbYD7EuW8CP2JuEhz4NE29rPWiwB6GzuvKqepkh7GLujy",
  "key11": "2DUVictQKiu4MTLgauHN4PknLHDjsDXnf4qkfBNDHRsn3PR9pCEB51ypFSnZshEvev5SsPWJ1wnZNE8ySWJ65Q8F",
  "key12": "kUWMoNX55EEieXyhQ1zEaqdz2Nib2qMFsea8eBbVTN4BZhgyLyGWjfwzGcSGiLaUVrqmeF7ZcttpEpo8Urz5JE3",
  "key13": "5QwEZTo4F5oQSqKmTuL5AAZP6sfgDcU5NbgVWnmxJ8hvnv6VoVvpfFJ6wfWG7mVoFTtHNqeHdjKj8L2M6XafN123",
  "key14": "3r7wUx618ZwJjM5143zH7BCD6yMXmuaa56612AioJfUVR6aWF24kBQQDUzqr7ZxSHiMSALEsw4JcyFf7xNhksDju",
  "key15": "5kUvfyCBRHAi48vgxWfiL4sUbS39FRDwu7C8mZLCBGd8sYmEb2aKpHR4K971N63WtFmoiYp7xL4zR1M8uwmvxmoL",
  "key16": "2hXazX2gcWaUmq8fTbU3rb6XVFenmmhpH9TPDkF2BE7NAvQL2SjYaU7KLXpF4DPipKRNv95UKRY1BDMtKDaHQSiS",
  "key17": "3h8pXr73sewAPooLtotqNXX72RwCsqEAE4bifmoJKxi6zT9ezzUpEy7wPXK323N3y7ueha5bGAfGMuxWS7fc5pt6",
  "key18": "aFdSX9VaMX4XmsL5J1PQF6rB9sffFauEA3i5ViycTtVGPCN5SkuY87Ks9DtNcRoN6cQXApP4u1eCF6UspKFCwva",
  "key19": "3WvbaGPSQM5TXfLijjLsEvYdPwW5um5BZMvWz1EZwNMhgppRTwCuEGWcSnMruA2qKvdZFEYhd7kuWyQYEFGwexj9",
  "key20": "3UZ4aizKuump8Z5mYmwvFqojHa3D1M27v9gi1efh8eLKmnPKYrfPbB6vET3xcgDbqC2PfkL3i63A7Jkd3oW21UXv",
  "key21": "44LHHFwuiHfwQCizRKoDu1aNd98qQiNyUFS6vCLyDfGFGjKP5GKjJPQXyepat25JzsnLvEdCWgNSto2sBX4Vuhaf",
  "key22": "5zkef9A4ED6FkFMvvHrYEhcvySMiXDEhbcmSXkBesP4C8zxK66n6RyUjD8HMpxYUvFeyuUDf9L3fNw27PZBPfnCV",
  "key23": "zrNRxxsw7jcyzQ2AaE8LSTRBULUBzAhGUtxv6u5s6d3xRwUt8zx2KD6DVFhdppcU3TujFi2CZbmkc6ipTj29hYY",
  "key24": "2sbXHqzaFqLo7kuyzbRFSQRXEhSuzGn6VBZxy1G6yCYQCywkfoHeBTc92254KtqKnBdQnBut7RBTvAGSCnYYqSx7",
  "key25": "5jtgyuWPHFLkvaUZ5cVsdMSWqd3EdboC6we8dQWis9YjxYaTXDwhatuhuWFRhr8g48dJngVKGWsskVSiMiiwV1fr",
  "key26": "1TMEWuYhTsPvdd8U4huYVjP57w58vFE7ybVVY5CoBXzYh3EAv7nxYyoCQHoPwi6VFCnyaPRam9btXuuUx3eFEYv",
  "key27": "2vbPV68NXhh4vziuFejFsszPq1JzShC38eZPjRJyDqaVrreSt4eYDDaxXxvLqErhyqSFibetfAznp4itw9XhRqEe",
  "key28": "5msyuqp9CDuqn3ZAKuCLthE5yXxrpj5gtaMXuN3aTZQ1RJXfEPTo2rqdE9Qa7rUSNjDhLZ5fMaiQZBBqPAY4TyqV"
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
