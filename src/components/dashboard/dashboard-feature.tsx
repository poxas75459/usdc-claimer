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
    "4voaTtG5n4CtQdvTwxVx7EHfY5rEQTabHQ8Xhkdw7J4YoGt2urZ3xLCW4rb5sSbrXwutVjVoR1ygUnyw3xoeWdPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rA8ojSk6h61KvvTrXpgSD6qxhLJRsDoRiYyRb7uHw6hW1sgzWNiEzyLtcmEqTkjN7HbvivAFLixUxcS8uczxecK",
  "key1": "5598Y973HmAZmWX8h7uAfwXKFoTFPFcEc9kuiLapzDc2GbDuKLdMywsdAxBQt1KVAHt6qQr2tdNaFuuXxkEmKjft",
  "key2": "3XJJYcagXUgWRLm8MKmNSN355mNr7r1YLNxACPcYW7FVBweTYzhYYoAcX3utG8ybCQn2AqWTh5w64nh1Cm6HM3DR",
  "key3": "2qZ6EN87B1TCv4ZF9gNfGu8ikPkYu7kC2yDkc5yeYdGSLQeJYvCiJscdz7Pqvz8si7MM4WomXxVE7p14zC8f7NwE",
  "key4": "2YiExsXkm7wJKnbit7AEzrXDD58ABU9cSZt2qgEP1WhgR9HyDwbLS22qYvny9ovC2YQn9x5YCW7EAYLmukBWWCAa",
  "key5": "2GddKkC9q7axLVWBMxsQ6egPWdiuDdQSqbvV2coiVajcT2D1inpURcNEoWh9AVrBxjMNUniZRC98YGsc6eez6cg6",
  "key6": "4yjnCF9vx2uY6a53KnRFexGnSn47BBoUMWvSFE9LM2BENySMuLbQwVdrHL8BWHuh7yBVpM8sHZHLLGug54vvo3sB",
  "key7": "2CGux6B2u5cHNaDXtYprPphGfxEj5EtG4Bsc1Vp5PuwufvVkTsoezVbzuYnDV3znTpnZufNzbyky6VmjGo4nH1gC",
  "key8": "3hjUKZ6JERYdUTDqdKPisM81o68iCTchqoUEVe5g3KmQxY48HH4p8Xwm6DSjFR54aTypWc5U5zMXUDiZikKUz9va",
  "key9": "Zh3iLt7RmpBzBR2dBHiufnEKFC2vhtJw2VZtJEGVGHYVCLX45dTpPsBisTxNb8GWP8F67GDUmNWa3uJ545SSzQe",
  "key10": "2BZbVMfZKoT7iwEje7khm7fC9b3kNx779P5U9aC8bwjaHi1NVQMkdRwvrpRph9H4r1dYqymgaQKwhzL1zqNrhRrT",
  "key11": "4BCDtuqRHefn1pxHHGea6KU1R2qfH7oFjcLjdHCfeP5zetgBkVQjuGoitcYmcucLmxrMfj9p4FYXGMzX94z6SLED",
  "key12": "5CZCP7spzeWF1gBTc2yZF1fiV4MaSFkFEe7d9x47khyMZsrxC56fPm1QbDU38nyLwnaPd1WqLsiB9n4iXxxPNnig",
  "key13": "3RYCxFjVSzXT43Cxth5TeHwMdaEaZT1rddYuTnJ8tihwFJiNgeDao2fd8K3LuYKiFKiMCoDA9QAbU8LEnLLo8DqJ",
  "key14": "3KWATAXE5LzMmbPWr5ArRm4PTuuFbnvij3Q2L2Pjrg9QtKtKiCcbGqLdeyJs7f4ziBYTUbAq6knKskq4BPVjPCKw",
  "key15": "539CpCm3pnPQ9q1EFhKk2M2EXjkVNX3WMpAz999aXuGCshFbuaugNLTV9BAQkPHqeCoyAFZpfyNXM6ZERp9WZ2ye",
  "key16": "4KNuPVtG416KZHs7JJ3KVmCDbx5W7PwB1vSjobSHqutQB9ps9bGjwUuMtFw3Z4RwAE8Wnm552LeYPkTkt3XuKonV",
  "key17": "5xupkuazRUo2mWXy3uLLFWc5pnprUZqtjtMNHdberk23PDZNSEFhNMK9amPbpdFV1UHWGZmotNih6RqhzAZYwKWu",
  "key18": "2pCW9tUAcSfwC7iWyYBCCNCDR8Vty4pjyjH7YQYp2C6SRkoeFBUbdbfPJGgnLC1ag7B76pDahg8fA5dDRB9rSWBE",
  "key19": "24mCF4AGnMiK5rXbzTB2zCRHDgkAVBt7Z4VY4z47ftpKRGBmpEAML8sxa5fLHHDpc73JhQZMAyJUcKbHBEyvVNYg",
  "key20": "5L7GqFAAKsW1wCGfhycgT8sDGrytFtJ617kT2NJQR6ZMPabxbanqtRT3PgUEcuoTCdPs2G97nsNfuwQhqPKeeVnb",
  "key21": "4V2K2WYWrNnrkocYvwdGETVe5Andvn9HFaTai8JyiQveoa2FnnUVr2PKJYBU9rHczCQeD3Kpfy8ydRVy4txPGjUH",
  "key22": "5rR3cyP6DETu5hyJj1xdV3DD6fg1s85NdHTfZxmfnX4dhCAfL6cVUaoP2wbKgsrCHrWoCWZcin73psoasn2xZmf6",
  "key23": "47iGNZGPbxozYXEQZyMnskqcBtFu8aWbzRHpZsLePoKVKjKyDDWGFv5QeKoZH8VRB3vB2QCPUkJRUGMDMK3bPwS4",
  "key24": "4jEffNPPpbVsv5GrdtQQLPe5bpF4m2u5XWshQDbXts4BFBfmqRpvYNfgbcgmmFLtqWTqvzL3qTYoQEVW6ikMnC5",
  "key25": "3v7qCRBXbHYsTKTjc8VAFtDW2aPFSrUVJVHPYTNEhsdS6NdAG1KrqUtBPBRHLJnqTENGVSD1qfhnX1es7QWzoY1a",
  "key26": "jAjdEavq2wwDASGynQMhoJJZ45YVMSLgWSGXPSDpaYrSH166LfPUH5gJAkwuD6o2fJGWz8P9hv324WrUhHoJxXN",
  "key27": "5ETvYgeK581UCgQUU1mwoLkgZxz6eJEYk7MJSUPdrx3aRnu5wai6ErxSLTP5rxjaMdwTCBcRMKHTYARso36HYQYU",
  "key28": "5YzCvfVd7JnKqW5MtDkwWcXeaunMpyJ1RBDHf3BK2YWX2AFFLNvjAgejjxNChTKoDpxzSsRWBxkP1qizzyKpy98b",
  "key29": "5c1Ko5Be5QCgbrPVGj32XTc5XMaF76ehdbqFAeMGftHgeuPodACeEycmnU22HgexY3ZWSS8wnVe75PyfTS6AvApM",
  "key30": "3oJjF9Jtq9vwFfSHXuinJcqjjvUxr5JNy3ytxud4oGJvDMtx3fDpo8t7jebMaRpy3xdbb6U1VpKXtwSpAyYNwJ7T",
  "key31": "wsvEB2btFmycfXNMRc66T1Upqmjpv7GidupJYLNW7TXkCdP51zumUsxvxqF6nu2fCKLxaviZgy79bw4T1MQHbWF",
  "key32": "iRbv8dAPSJtxtD1z3UXBtg2kvc1A4tUnYQcrG7UK2SHdoSrKfazJRqcsqNPGW4Y5Vf6uELsXmWmnsH6HkwzC5Xn",
  "key33": "43qeqvGPFz9Bzcsp8rLGQK2GHuqZvUwCXWNRPbnrHEVPwTdjg4cQqKoFyGhnhjnzVqgDfD5sXeg9K6pnZyEZvFQc",
  "key34": "3WqSBQgHBcC5tcaVTMQba4C2aBN91k3qkdEe9pSzFzRPMRPfDsU2qLGKFMJTEvzcaewgoXXUf4nrQFCz7NP1xaK",
  "key35": "wgYCusyuA52xkcj9i3LZW8TXnBJvch7LByBjKoXxAKVTtxc83Pfi24vQ8CPg2NZmi5usnjM161RenvrSZfH72tP",
  "key36": "65mgywAPyXipNDDYy3f2fPfJWBoDChz3nVaU8V7XEzdQh8r2WaftKz2p5JrYcWS2EhFEeQuNbAmSjVdJnHT6xq6k",
  "key37": "3tnKp4avpAbH5xUJSQ8SctHjFqgeNeZ71tUoDwHg4FMjN4PiAao2VCkZuhLsPgZe5pW4EDxbnrzjq8zaARNaC3zz",
  "key38": "X6PFWV9HfmtxSVsC9efTtzumedexZAhs2CdWt7MaPBU13qyAYncpN1ZavqfmGmWC139f752np1Qi7aQjr1Xehdo",
  "key39": "2B24mUBGmZ7uF2RAbMxe2TkvR7Sz4pdPPChfciySg1KjxoUxyvompGKPEHs76YNQHVuju1yFGjgqx33ujXcau5bE",
  "key40": "2FbCxUg7WTYCLnPemu2Dft2Y8EHKq8fpHMYoj16PAMYgpoffPn4ayUsfMWndn9wPaZa6JrXT9fPg1CxjBLAocuJF",
  "key41": "5WUhbwBS8tweZvbiKFo1yKvuA6TH9fhxfUZrar92heizJ2bkukcmD85c6daG3CfBqcqcUS9JftLNkanUhFefQ8sg",
  "key42": "3SVwjbTaMyGgrzmXtp7j3FRYBagzAL1waAE91moZVpFEpQp3nc6Ga96wBK8HXPTqGYSJ29kNEm95jJoZvRKppUup",
  "key43": "3nGhenuf9ep2JQoXMzeEzsyuS1sKPsgJhAXZuateaKwESa1pnob9bmmxXQSJzdodawKmcPfaQqetbhZusvrWT1P4"
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
