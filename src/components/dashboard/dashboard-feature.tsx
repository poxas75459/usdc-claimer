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
    "BsAguA7xB12gR4dYZebz9sZyhwQXaP1FuHWrhxrDZJm2Co7TbvexEfn3TcWG1SZyR2Q8TpN37W943ujsueZch1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCfU2hmQp4NW3dtJnSyE3CJkJQGaGyREXXQfbkUggF1QBgthDJz5JYB8wAqin4tGQ84eRHjnDpwMFsh6Wr8j19y",
  "key1": "2DTpjBDyLYuGGyhKqCUaJK6zohTEWU9NfH9DU3p52qK5roAzTN7znYiLJBqWEmzDFu5aNNxZmnRv81N46gU7XDeo",
  "key2": "3naoQsAhyxcA3RcAu7Ly4MgHejZHKEXYtsYxuZRD1gzUQraRq2f7W7UtZcdPvfSiqE1ueNdzy6ryjgCZrmPEyNqv",
  "key3": "3rWtsvetYcVePiajAXAR4t34PWgpuhixWHoHXZtSRRXBkQ8mTXADUbuAPHJiJV5UnDaKyBW7BVdBsYL59JKVBiXy",
  "key4": "4uQvZvzQ17HqvfUZJ6byNuwFz5DUDdWWbv6heteBZryNciKq2tHXK25fqTGKGyz8c2gUbtRy3pivdwfJHZV16859",
  "key5": "5UfDtXMoF2dR1cSVCporNiuDf8TSzPLZohKbcibARuigV7dBGUEQpabBqavDvFGvssH8TJTHVG26vXLTuwGfE2WW",
  "key6": "36EQReSxCHSxvpp3ENNvka4SZFX2Y7zgtutQEsVY6F4wtbw9cM7LWNFR2ucHKJ8MXhk2ZA57XbNd1RzwmHvbSvrw",
  "key7": "4PMHExZ7SanAk2kCo5kzN3nd3UYZhT4f9P4mcSdCkqTPNppR1roEMBMeqxFZDyG2FVLvJ8zUwEQn1uMcH6xPgURQ",
  "key8": "5qkBYQefSvbQCuD2MqDbC38hKDHiyYxjGHcEnLBZqqvMTuGCZUrKUaQCALTodRst9hPQzt24ApFMfMXPr2nGdZwf",
  "key9": "3ibFqQMLRpcTuy9hCz3xwZMvgvHYXGUMg9SJwnh4ZR8h4KT5HYoaDaNjsfz17xp5xKF3r31jh1pB282eyvyHNK23",
  "key10": "2JTuBqge4RFv3SQGSp5CVGoPSj5mdEpHXT5kj1WK2Jshjf3A9Nm6LUryY2wF1fq5X7tAEcV9rkfhrQt1ZumEmmwA",
  "key11": "2XqfuGkfWjdojfnujYPdAjDn1P2xYKHc5rsUsMELUrFnhvPgbJCDWASuykUxQutR1frqTwuhoZXJeciETq61wLo3",
  "key12": "5RboB3et111CcsyrnKn2AwbfCMcsyNKz7ToGKH2DwvCVzFNjMR8UQmAn8tGdR6XS15U7ALoHTEQpdDmi9NcyXkzo",
  "key13": "4U3ygon7BcJZY479ccV9c6VV9sNXBAY8punTT8LmtEBTfsQ4nR7Er4511TkRvpaC42xvAGcFnL7NnPfw1vNJVxg2",
  "key14": "d7Dj353bj9fYUxqdVW8VXPpSAFaYSJ1ujk96rFEDEwxW5uuyYTcJPNgfBLY2MRMkb5K3AETjpNTeZUmcoYUXWQV",
  "key15": "3DCaaEi7gLounxi62CFcxJ8VueqKH4pmMRcViJyzecafj1M3wgWxS9cXYyUigMYjAvrtNMX3MF1gzjcfv13getK3",
  "key16": "zQxbG9c5HfVCKDSTGRc4qfZww6cua8ULGJmqXxxnuHTSXDxkfEQNypQpZuQsUPXTc1ZqF2HEoqtMMw8ZoaBvDBq",
  "key17": "2WZXKhhtAPsgG8uEtVgL1E76XChJAbR6a5SUVre8sEuy7VGYeZJbFsLsH4mCU7No6ZPTufinHBngbSuTWTTHAgpy",
  "key18": "cyztySQi9nmQDJB88g1wcd9iLGT8q6YwYhMCj9GXBgA7QjhNwH7UeqcfXnqc4TUSw7HTr1hhrRtUUi3o7y9Wqxe",
  "key19": "5erJqVJfNNaGQdVf9iMzsa517j9vPVW15LZsJDVvCe2LmK1L8y5q2PZct7TVVk6Qchxm1yxinajQh3WBQjfa2xEx",
  "key20": "4aj9X4egRSptiJNJseYCHvAdp6biSHofJH72g6k9kCiuCm6fWg5jMhAU2TUHyqynMmF9thoy2KQhK4M2tPuSSbWq",
  "key21": "5mKx5bpZ6AptfB6arjqQEWhccGJowjFMSD29e6htfgw8q5F5iHHXrVtsv1TW7uh9wLfks7UKVwPERGsLFxTGy4ZH",
  "key22": "48GibDzdYr4x4ApTyaZZbMKo4ZxeuBTt1q6gvHbp8sw8TrauvHwnif3K21MaQNUhvff8vHTAHboqy8cVDFvETAwd",
  "key23": "3vSFxEdZEwx2XFbkw6dErTVHSLdcevYKPU1PzfMuCkm2WtWEbiHMYxR51yUyW7KyU6CCehC7pbANu8rdwUmBcn3i",
  "key24": "qDbAh3ZdSYtu3xKkxgorMkhgVGFkEKszacLmrTv3KMiu4jWxCKk3HzRh2eVPaERygcgMfEpNsiiWvPUZoKzpHd1"
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
