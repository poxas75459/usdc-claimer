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
    "4jZzes3uC7yiXkhXYR3EdPUFCCB11RbEoqehoDUCBYFmjeuK9kBeNBLReDfhuDuCK2yPir1gDbBwgC7RN6sFgiyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sA54MomVj5UKauMegQjvpXejtQbfxvRPju21UHmSiucSyCGLjA2pYtEdQ2cgAX5Dji4etiBEF6e6acSyN5jgSMv",
  "key1": "5sZ7AyDiFKFbpBnwcy7JRRYZYMRaY3MdTBxjfgAVd68mdUE3Jc1b9iQeosQG5xy6VfHGYQvtzhZTbfKcvYr76uYA",
  "key2": "HNY2UA19UfGyZ3DzjYUE7jQPBE7h35E2PRAJkimFWigqYwu7gP3aqron38FooPDcUqsJoaujeeFiuUPa8zMvq6Z",
  "key3": "4g8n8va5UMn3Jx4Hguo1YdsveSeVCBB4QbijTEwzkSyArPUqRt8FHk8xDkPbanCjt5HJXzadDGbGLXQdmBndkPC2",
  "key4": "2VhuincrkJTML8znQWtKau8TRRnxDbpQRD17pKrGYsq9MJEwvR8S19hpgZT7q1vwJnTex8RR7eMzLwvTWL1Vh3JR",
  "key5": "2sZmuiuZmmg5aQZdN1S9FZ79xa45E6gDQJTpVg4Qrojo3mbtgA7PHbqXqhW9Jp1tbAoTukUpdMB4zoijAKJbPZns",
  "key6": "3dN754BWHfm3gczAg8LNaJWdxWYBiBF7mKA5vQ2uM9p4uZL7zMUCeD6nPurJzX29j6oLCpGN7r2jeidkm6McFkDE",
  "key7": "3fkHqYPSHDgrdU1mQE3FL2pem96UVMYpyW1q45S5wfA2Wk3UStfFsR5NsqHjB2Y8sBXjk2n9RDyqgVvNhruS38Li",
  "key8": "z7BpzzmWiaTa9xvqx1BbBRs67bMAgTJ6e1cKHjWCfUv2UtQjvbSqi27ZcitPjiWmXtQLgDSB3YJgnwPFNGFiP34",
  "key9": "5Hg2T3xz5EFfrAcMYaXuF5k5ZRvMUh4YEvzRtutXWytWf2T6xUYzeBQbxLwR5S424y5yj87GaUWKb66hyYGGbeby",
  "key10": "3numo3WHZMNpvgb55jfz1aGUFh4j95oLRyzqMh6A25YmHYtNAKsVUio1ubhhrqd4zPJsHiBPykH7gZ4iz2PZZLQQ",
  "key11": "2tHdXVVhWkMxKprjovEi7FHW7wRcSKHLzXANpPT6Wyjnm3yUiX4iYd9jb15eNiU6jXtFu2Ld8GNGjX3GcpPirpcX",
  "key12": "SL8oqkH9SWVkWYU5en3gEyYePCkt1JwT63jRCZZy4ov48m1aNKBxSmThKYZER1jrHAUNCX2vJmi1kHFpfatrwG1",
  "key13": "2jbaRs52aZBFWaes1czgkBmYKXSeMNozCLib5syRRmQPrFA74tnMYATGUAT9cojB7FXNctGD1jxrq5jVqEDiQAC7",
  "key14": "5XEeZ2z2zFjQ6fc2nj6XzwbaFE9xvVWKJwQMikUsH9Sni2k7gChzSjmAyq95L3BpJGH92NuyB8FoGnCgmerJ9EZQ",
  "key15": "4CHPHL29bpKknFSJX1aFhnKdXpLQLfC1SmDgYxaAWzoGH3kSfv8gyExySdCaKf5F2TBotAV2jT48ZrPhP177XH3G",
  "key16": "W39vQArGUdZgEsQHTvPC4DEfSbx124ghyAwdSzKQxjEzhXYRatVaK4JvRhmt8ZUuc9XnoTvQ7qM3ogCEqbhijDP",
  "key17": "5vd18YU8rW2m3qzY29guJYJvtjmuYw5aLMSDmCjaUduwoL9yx46id5FGG3yazPpjpjyTo69Jg8QHdopAjGXg85LR",
  "key18": "5KcQk9JUSEEE6Ebvkr5hAjpv2KwR3KAbdZ5xZZqYMppCLM8PUQ9xJxLvAb6b9PVdNkRA7SkPjqptewrHnVBukgYn",
  "key19": "3wemLeNHWf3Rgjef2h6jf6BirL3mkL13E2dU9cRALJkFrwZKZ4rgNzcwxwzBp5RDULBU4MmAGaUKmbcZKdgmU4Pb",
  "key20": "362K6bWiyvJQy2ydUEhoZhjwyEmDuDs9ox54qLUtoZ8xsTvVZFvNGQfZxR3kJ8ai5Ad3XKF7FFwJiuYWnEyNu1wV",
  "key21": "22kd91DNiWdHHYxt5awdUW3HTH4hwz3LBH9MQEwRphR7cvZqmau5chsHexet4T8q1iLZbYygTQwDzLgKmHvf49oC",
  "key22": "5a2uwADhhyZUYfEm3b5kugyjkpK2q2CnF6FpsA6QwZgZwnDTu4UBUSSiVViwmay4UB9n1e2bACT5MqKm2RWJcNDj",
  "key23": "YG8M7YsR9WbzCM3d8bKQSpszMqRPsgxRRLvRVLvVXxCQgrUWGuxEPYRwiqvrDLZmNeFfjyhy9RGYDqg8EpnumTP",
  "key24": "42mVLPf7v3SrRkYwi5w2Wi31Jj5uw8kA9B7aBWaGmyWoajcbXpHs3Sgr9rZFh32PFSrXvikZWwWLUJgTRQosiRr8",
  "key25": "3TbBSNMp5rzbwcg9AcJuVR3Ggdw6XVPHzpjbfUsfeCU5F1L5jcHZUd7ig79UJ1GTJrfMscUxUuNbCQmySritNqZ7"
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
