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
    "5CUwm6GeEH6n7Eq5enTu5WsaMs2673PmSzfbyo8SdWLtMLNUtFFfggDZQeucBcecxQkRvyFGGxgFdUwGaw7R7e5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ofXeB7J3fSPPFgPy6MbhrFMJP3TS5UkzHL1AhVBLcycAqosJjTp1phTTRBHjyLiaWb2me4Df2KVvExkhaCtbs23",
  "key1": "4kAtw8op2q1arrnwvNkWUqxTDZPYaX3iPF3bED5LueNsZwAPKmuR8GNvzT8Ye9yQPsez21qtqgqnrYQ9YvNJu8jD",
  "key2": "283Xq2JGBQtpgVZpWjLf2Epv56YGg3QMcc5XF4LG3SWReCix7J25V1syHFb6VxaUz8CriBZhi476MLkBkn2pC6ca",
  "key3": "5hqPqbBABnEgxXwQkS7u82JRWYpikr6QFr6tZsuGuy9aEaQPicxjAnE7N3BTLTRohSFhB2z4k8B7Mr7GtZ7RQRQT",
  "key4": "SXUfmU6DbCFSuWrjAFPbFKvP8y1BVK3QAHCEGeA1zDNXQYQvNc863WcmLc9Fa9dGQZ8mUKwpdtvbH9mAS7YRU5f",
  "key5": "wLt8ExginL1WGTCCCCPGsjGHGi75m477MmxK7QQAJTwNv14njjbv1Jd7xyu16TYAeB9s6q5pBUqt5NMs4B1RPKw",
  "key6": "3Qh8Yv7mUC6gGni8vtnbJ4izfaivGzdQaPPYt59zB8969RKrotJYhWtr4psXhsiHHABh3fFcgQpyAaFvJZdyK34E",
  "key7": "5Mj5PF8NnYACS1DgzSBWsSArW1umGsuLoWnZGoBLiEiecxPeqXAFo7VNXf5KWEpLwiUdDDukgwCAe5JD3WfLbGNt",
  "key8": "2UX9AvjL85kFGSmVkmrA8u2gREmeuSGJxtPuuD7GpggJ6ERqb6yWJkbkyJoFbBGNb1GW5nhNdNkQxKz5sM8j2LWp",
  "key9": "29W5HdXMohocjENRkdW5WKUpVLECyeZscEgRvb1WBhQN54LKCXf7M4CeU8od1oXx5DP22NW9jdz4dUjGBpuWRTLW",
  "key10": "kTUAZcs4nJgxN3WoVRqyoPB4XJpv7o77mvb8hyA6aipuQbL3mfvy7tQCs9XGjFALhMK3hCid528NvUadEiZ3YQH",
  "key11": "4LbTThMuUJn4VqEEXaBvWUQd8XNt3cKK5xmPnMMuZyG9FmMwThGKpNgagTs3X1R9dLPmqHx7tqnAToEKLiAPq8qR",
  "key12": "21qNogpeSEhSHDput2r7RaD6YxfJkpDBUG5hMRD7mzNDJgV35nNeAWFiMZaNK2g2jSdK7W3xyQYwfy7N2RpNMSCp",
  "key13": "2Uc66T8DTuxfWqcNVxCYGVSqhTHXFar2JV9xvfhu4Gf91usMDHNY11n6BZtpUPknooGbnzEjngdSBoXRzbdh4ZDJ",
  "key14": "4Aig7F2Lz4VDsjsz9THZLuA6VRfH7KMhvcTFwFgnb4fHTqsbsRXfGJUbGoTX39p73jEbrsmKr5TerV77xsPGifEL",
  "key15": "3vEUnBtiKPmQkkBT8dJZSC64s1Rnp7jy2L4BzEmK2NfGpKJh22w5wVDPrRXuhpUp8NXnL2mAnAW72qeq1z1HHiaP",
  "key16": "jTgfU3EmrhCqpawBaVK7KBDL1E8UrjuqFg6PkywUtrZ7VGeTTybqewo9FWwbtY82BuNGcXwSXMF7cHVsGhqqDBT",
  "key17": "4dE67omZDfZoT5KAtYjVr5LmGaBREvC3aUW9GsA1SYmL9NQ9r62hoBposFw3G3jPBVBVjPixHiDDHstdVeLy6DyC",
  "key18": "2KibjURochMuHfoKSuTXURFkpn31oCwPJC6dzB7aNbzU1TgsgatqUAHjGRYcDHMRCfPGf2SfMPGrRqofZrfawBAG",
  "key19": "3uqHmA8Rjp86fWcctgw6VNTmeVXkAtjcNysg3un3mWegpyQe3PqAcZsrXiR3C1AJzSNsbHckfMbaDSV28v2fgaPh",
  "key20": "5dPVAGwNcKQP11psbZAR5mLCByzcgDJ5VtUXfsqJyqntGKdk5mbZxzxSyTgQ1hZatLTaZXGW9Yh6jnt8Yx755G83",
  "key21": "5b1PjbmKao1sxNkqHhxQqgDEHJ65UDDz2t1ts1r1x7h2iUJWGZs3iAitHvsTK7V3nnwrMfVg3vy2CUP5CqRtAJDp",
  "key22": "4rzb7k3j7hTVyUr6wjc93B7vofNvSe36PGtJevwhR7v1RPnx7MDfe9KHCV293bTZqx1yPyAiU9KPw2LdhcjBZAbQ",
  "key23": "2kK7oXs3BLdgnsAFc9uTtc3pghYkFkkYg24JH15am2foQgCnxRFwWrhXyE4jmyamj9AJS3h8NwVvE7bqNne2uhxV",
  "key24": "428yWUVkwqGUSYg4Hpngr2rrbtQwTnKaFHxySXPv47LixWLEHipvci2UUquLdfSRBFpVRZzUpPb5eDxcRzuSsk7w",
  "key25": "5y7nPXvbuxMzB4b5wzYPg7p72Y8oQnLjGm9w1n17jiuccJvzMrm62tSSCmECHhcBBF1CsYs5DvWRfvLX4v4ioPoC",
  "key26": "3jw2veGpVGroMP6QYBHQjdFGHB4cxvULbYR3oZ4DjugcfwuBqL1Fj6x82J8hciZcYkAZ2n4rRsFaReE9SFH5xWbH",
  "key27": "53Hnk5YkMYvHk949joNxJV6BUiVNmzg7ke7BHzyfWS46k1yttvkW2rGKmiivQL1rPWeNu1UB7CE9QhfGTVr7pJs4",
  "key28": "37uLwLmNpmsfySMXRbUwXUmxxUapjP69YTm5QuecNohUFgdnnPFnVcdEsMz6G7Hia9fhQcpXFSLMt263g7cNuhDj",
  "key29": "24dJXAiNhp3uM53subCfrex2FGFnjKedo3MxDafmRTfPPgUk9Gcyu6amWnu2RK6Q5hFn4zsTEv2jPLmUsGznGcxY",
  "key30": "65nWzzoUZxpkdr3TAypMs5fdtShMUXQy1TFUswzNYs7qVDiAZV75JtzpiccQfesMEqgsSr7RmiPrYQpPfMUpM11D"
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
