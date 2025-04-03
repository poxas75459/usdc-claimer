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
    "416wksmhZezhx4jZwk4AxDG5AzFfWNjqn7TzWCUMHoUX6mgTAjLY7MdXU7sW1mhsCfRQwqRwex1zqhfKeqtttM7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hgsTJVMRFjWP3vuu2L7bSVtqVPUZAd6xEoCzbzYMv5d91VKu26T6hwLrp8SnMH9XdrwEk7GPtjenoJPEyVNTGue",
  "key1": "2frCnKMbsQ8kxM2RBMVFY8j5YGmUEVJKaa7Qza5CLzLxWa2MT6wTEtXHC8yWbvRJQbcGRZDqyXfAjCTJMYHr8TZ2",
  "key2": "3CupLCy5pGmcdL17Sck2uHXqSBNFnot5W4YVzffpJHdneeZM4REx998RhGMzFNQcsRRdy8qYuhd4fB2JGmUgQvTP",
  "key3": "44Wxe8mUgUWeBDvexYaShvvZkATkmaXtcFhyh6xXaqzDcoBpPJvvhLyAAwRsjHtMuaci6o6xTX4cSDyjBGpu6rmf",
  "key4": "33S7T2VTibBB7K4AQ2n3hcbJZutnmFSRt63sEVuDHcrJygX6F5rEvxJ7nQpDaS6mVGDTzpc9KMpyY3pwjJPhEp1r",
  "key5": "3eRNLPKNajcMenUvFYoUo53qG7d86rZo19NTfSRDD4V4Mhk2Refy121BTCRTFBoTVtnp2sn7esBVsa5f5vNJEU7j",
  "key6": "ppAaXnCr54KiBWTiK3nKEV8kUmwbG433q5RM3je2Qme1ThrpBY9Jz8UbRWnYQNo1dUeTygWJqyKBiNYU6jxfAKx",
  "key7": "EFGHVPcUVPqYmUqWYfWxaMK7YNMivEL9cXbNNh6FpxxavyPw8q8qr2oJD24zCHo5Ck1ggHAyDDeEE1vB7dykHwH",
  "key8": "3pes4t7GXBPF6TA28smAV2fCrshcHgVeqkNaXKrNcURenXMMfwz3KPXqVZLCKm7dLgf8HmTtFX7evyQzwfr7aV8S",
  "key9": "458GiKaPTQhmCyTpQnACgMkkroJ3CQN7UgVXDW4LJuWcMFvKxDnecnn446tHcC3PpByxp2A75RtyqCHAMWmhJ567",
  "key10": "3BCiFC8joLEuhNPro9sQoZCZDo6vnpK49H7uLEu3DZ5fZ9Mr1xKm5iTVHAUcvjxwYTGjGLPzoYNjsgiMBSaACMNZ",
  "key11": "4qSsp1egJ8xcQCJxHZ1G4Uo4uW18rYjJzm5AtTzgL7zx4Fo78Ng37EwbwgGri5kXFjkoxXX385LexxrmeS5Tn9KD",
  "key12": "2fv4cYK1K49miKXPswKGNR93j5RmhSr1pCeFgypB3XEGLFTrhzGG37WSnVuAFDSFBG96uS7aYNV26edQiMsBH9f4",
  "key13": "3SeySueMCHg5B1nWAQjSyYTzP25K9RWPWQmtE4e9nDTvmQhmpFYuAnYgE8sxTXBn6KwZzP1e3zDhrqDG3kA7vEec",
  "key14": "3K7KbrXcQVHboGbDFERdDuqDVEmc2yN1anc3f7tW1AX3UGiDpgLBkQ1SapeB3wHnn9ZzJKvsYw5uKc9gBXsFDdH2",
  "key15": "N4kMnjKemi1CHv75rc1jiPzDoaT1MDmXyr1MpBUWHhEqkRZz8fGNud2Q4bfZMX5TzPeEXAsRA1zKoH1KVVRd3PL",
  "key16": "hdf6CzTFN2Kt2JJ1GuSk51neTMv9a2UKJgoZzXEfJSxN4XzX5hysxbNxdkj4hvPgk56VpmXEUn5gegWJszqsKFt",
  "key17": "2Jxr1GvCPexZSn8dGNru24GciYEVjJAA4aS3q2fuUcGMrXKGNHgDCCUfVasqnQQsCmAJfsARNA2QVihY9NAzU2dB",
  "key18": "5EQCBmN3VHb6XPtJVDgx8KEnAGZrChAoDCJwZPZHzyXQFzu4XgCtPz4GGZfrapyYURaG1Bfprska9H9SLkrDsgHE",
  "key19": "2L73UxL9Kuc3Dw3idrKBHCBYU69oVt6B7YpmtvfLhqcXzZeyGvDuZbky8wzPxMFeiz3D1Cfms2yeXUpFiPPB3zFm",
  "key20": "4M3i1btC1mrDhfWRipTkCqYhG8tyr1YXNpj7eLgzJVb29QDM8AAMKUZChf2N7q8fq3yoAoWLLKRvvczPj3Da4HPK",
  "key21": "2s7Gnq1KTGrPj821NG694pL8tt8aTJfKaDsxbeh7fKH6RF2Ksk6zYFE1nmP1jyGpS8N3QgHrgJANLnbrJ5AC9oUf",
  "key22": "61Bbg127SkvQDqcSnnygPGd9xdeXzbDUfZKUJpD3NDumtVbKUnhuJ5QjmdsazenyPmZGS1u1RDMe13ZtMXjUbcSQ",
  "key23": "2xYqeCtvY3fs9PB8ahTeCdRfP85dftVVAfTq8Tqa3HUbzSbNKVUZFfvKt2zSfGTGftw3QaWVKHYkw5hWmY2G3wjk",
  "key24": "4hG5DF9qbqg5FN7YsvfxtiovDh1QSnc5KWLKxWoKT9WUGxsh8EAyKmqWRdrcDJnHij5VDQsMmfapgiSjApLTAZUV",
  "key25": "2yN951phGTHLo2FY4stazMBUUXovZF1t2TZVkjCofrHAKCgL98fi9QmXpyi6WTQ5uSsZZ7WzZF8moH6AwBfCA467",
  "key26": "5BbYaH7Z23euQQ3rpcCBVEK9MC5H89fpx6Mk6ta2C4KPyWdCtE6acjgz3DpgJDtbuqboc6LQSMPeJCx2UmNHeDWU"
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
