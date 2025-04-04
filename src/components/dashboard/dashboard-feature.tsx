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
    "5FGPPLawUCn7n8CQ1T9nVHy63Z1iZs5fhxxmLijeFtc1tiqfDMhy3RxKwC49jk5ayU9hUx58Q3vfhp7ogNoMKzhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcc3icwyjxqbwkopDaWbWcok5CiV4SbW82UXMcjaQtwC7CakbsbSq7QtrSpYmDkHRJJGBUhF71CMqN9dMFTsb24",
  "key1": "X45AWzqHmEh5KayyVPdmFQzibEFER4RVxFGCgmK514du8wfg2ximhRRpM7rcQ2nuabPfktADV9zRrkQJmPqsASD",
  "key2": "5vGSo1E2w5XaddwVDrMv9WxfF1rowCB6e5deCgYwMM11L5MqfCgrBchPm3UHBmoeQQWvF4dgK6Nb659JKDhmtNeX",
  "key3": "2KWA9HZ9xzNt5CCSaWt4FhgN2RayztuGhyPePNsYu9scWhTsgsVaZ6mbNiwN1WPX9tj8XzhorsfM7m8uX4VrDvAw",
  "key4": "4PEtUFbcdhCwggTtEYqL6TYJ5scWMBtGzq33k6ERKgLqUGoZhwFeKEBBJB8AYswcg3GqwaYFMLBWyN3EC3YevFBu",
  "key5": "3Ng2U716uP5j6Rw36EnTpdfGiNdRRhSSuzfGgAvEjHAh71JFa4wQy7KDSe3YcrUUaUqsKDowSvomw7yA1QPeK51y",
  "key6": "3X8dhfZdmQaiXZL3iVaZF7qNedQKtK7YspGGjWjseugAhTsPRMKacPudkDUFKfhkMfQQKfLzNeyjEvs1N7aQvrTY",
  "key7": "2FLpJm9zXFgqGDaUf1sLCtpNcBT2BBcmwrpt5tMaLQCGses63Cd61TQWZxJ2D6cyxHdQvqUTTA2gCjLh5YbDrEsz",
  "key8": "3o4VdwBZvBefBF3UBcae1bVJUDbGrWWzMuTdpkPqQCvbPjHQ39EccuNgKeJqCuaDfyyJmkuuN2eqUitpRBeritVe",
  "key9": "2gPdkvX2j9XxTJ9mLLDyEaPoXYYKsk3HrHDX2jRTatwP6NDifWa4S5EaPD2oN9nJimj1wBYQNWG6EFX9QwHL1a8g",
  "key10": "3LYdKkcba8pLPccwRxEecS4FTewroFWUGaWckZfd6gn67fwy9GyXZJFfELpbJAHFgF4AXW3Hy7kwn8dpaFhXWZz7",
  "key11": "53A2DBXAfj7R4MgLeMRPHxFM7vm4SJQFqjkTRVJsfjwYg4NMau81N6jRFupkXmfjbCCB8shRbyQejBpNjbnpzjf6",
  "key12": "eKp2Mn5kLQB2m6JXLAo3h7F6et3RLKzpuZFSHejU1wrBCwwWH4vuUpA5FKHdm5SQcT6XXGoa4H7gzW5dYjDikNP",
  "key13": "sWYbHZW1RCw1eW3R3vVqMoavsVtgUF5hLdvGvb2soRQckxxQFhWSqAEAsSumQ19xXbV5fjyVgrxCtD474n5BSGo",
  "key14": "345ot6f7HFjcarjurUNULmu4WTBNxaarh1vcp8nhsd6Qox34Jdecwtc8CWZDentRiAXSiysbS2ygCtdhEDUefkdN",
  "key15": "3exJ81wHSYvNrkvCezDE5j4HQaAnNMVJcBTz5nczUsuioVuyo3eP4BKD3bQVNuH6tyNo7gYkaY3amj2Z8joMtQsK",
  "key16": "59bYLs7AdfJu6FJHfPCmd7XkgHpZSd2YZRYHZQnvaKpAYUXqSFNutjSPg4dosEk5WjKhE4hntENYkLgCqbLSmtjy",
  "key17": "4G4cLyzsXUkVYCvKUznWk5nuwK34L8VyoDkVbzJkk9nqzeYBQ84Axsu14jm9RtBpZrvNZuSoeiQWPRRrWSpsE76T",
  "key18": "3Nfe15Lyjw7GRXAGoSgpSYhBGVGdw5cpE8MjtMXuvii7xnP96cbCE57tovyEdtSqrxuhAS1J7Ka5CyjrdWk43qwD",
  "key19": "5s2ex5HRe329Wo9gB5ejsU3dfR1BWujmzpgwGTEAX7GC636RS9xRcGPpUW3jq4qevkyxADn3r428y7wUegW66U9k",
  "key20": "2ttzruXpzPMimRCihZqjokqWz7h16SuRM6SPQwUPVNBYLEXzctAHk2CjXUkUbZ7UT8V14HPuy938HmjCUavqaBPz",
  "key21": "4rY69F5QDEadAbFBCNMTQiCH8as5CbbTyqoD8YN3uNLGTKBn8fscKwnpRsWUaCWLC4KZc53fX35dGZk5vbDaHRve",
  "key22": "5m9zWdWn2cPx8qMUvMaUjrfMZ4voT1mtSj2sUPF8z9NudvD9VUV8swXG3gw5j3pwiorjLYbuYmyaKLLjpHawwUt5",
  "key23": "z2wqHgKtJzhE5dbY8nYT3rrxaPHe86bRjHGdrZecjeMEvQEk7YcNcU2PdJ5i2PawkpcavoSsHSRDDrLJehbGR5A",
  "key24": "4WFTVofUUjSD8KRh9GnktGwVEmpKru1cr9UxKhp9B8Hf54VcML7hKy2XStoqsSHmxn4GL6xm65e3gK8hv7d6bhht"
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
