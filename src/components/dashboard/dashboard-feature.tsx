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
    "4b1xiFbSK82uv2U4iBgomGa5UfFZU2RiKq7D6FEwBUtwRkKAAYa7y9DF82mFsvd2nq5BVDRMS9SzvxGPsWyAQpdg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37LFEJ9qbUWkB69YSmJ1NnoeWCQHsvf9oUYKHnNPu2yWfdbe9uU4EHYG4z5KYLrVBS8NHiJdHSSWUgQLYxDt3UnN",
  "key1": "3CrpMDEvpgyyGehmXtUe8M7jw5QFF1PV7Z7cVabzZExgg87mQedbNfeY6WCihiVCAbrUiRbF59SeQVgtMAG89jnG",
  "key2": "3RpnLZx4ZYEEz4cYpAgzrpkFjQocSrjnjp7WwxML2p4qH6uUcddGw691SqGyW6RxesMeDN5HM2oB36KkEpKDqvLe",
  "key3": "56dc9GLGbHkoQigEJUBJKeQuPFBuB19BoVa7G1g6HYuMeUFt1SgzaQfb8sXPL7HzHnt5cY4VjsS3pPw3cyrnHRGh",
  "key4": "4nF1JH2tnmGtYM8ji77fb5aeshTrBjeNi4f75UHQvGTGNx1gWNA952PCsgiC4nPbGpqXhDrCk3qZc5ZqxZ8ALox2",
  "key5": "5JLPkyXPkA3LKeUdjhH1HuAnLLwGm6Auxjr5atM2h5i4q1ZRAGY341BCUr7rQ14Jvm43ojnejATTBqenoU15dRT6",
  "key6": "3eJg4SDb4gE35pocugFXedqypRCkfnXwctG9csPfw6AAZvLq34Zxw4z1WPQSDDtgt4x16UXEW79RueaC6uVwgyeb",
  "key7": "3nrxSQxQMxjd7K5BL73UuFSiquCtH4mbEUJQkKmYow9omaHWku6ueetfakgyreouabzHxM8gp8tKUmeDvTiWCpd5",
  "key8": "4wxnixUDSeMRCspvx2vrRmzkyoB2CgSRkgxCrEcV7Zk7KgDKyDoyk8D2XLCpjPhXcjnwjrxRHZHqZq5BdnrFkpft",
  "key9": "534DEGHUGsz8EEU8WHpW1EXWsc6jnTvbSG4pA7FzEJnmaBzY4dN3wEN4hEHbVvtZfhzF6egih4CE28NkPmJUY2A9",
  "key10": "5EyDWg65tWL99c5smqE5fZFv6ufTTdfmCuoD2EGc7oagYpDQXtZRTkemSJkLQT3kekgtD1vfX2GHQjP3PbUsKQQA",
  "key11": "4Q16SDiqPGP3Vnz3nyZ9NM5DtmxG6BrRgur2DVGhcidbFFenqRLnP7SfHs1LksaPWfChcTsJFwEfUpaWqkU56Wgs",
  "key12": "66USGuPAeFQUpv1jDSrM3jJcyaeD7CzkKyEQc9uVH3VnqWZZ3TWNc7FwGTV4owh5ew3JRTMUc4HAv12uqtLsG3DM",
  "key13": "3rsvRxnXXojGFmM4XfrbUyPHvqxyhwUDht6gexwLYviZweJyK3BMfiuKfNeHy9nEhekq2DsYajAZ63FZu5yjj5XE",
  "key14": "HL1gDm573pVtmiqYPSBesvDddZpP44bTMFTcp4yVgRo6SymfiQ2eGJRFdQFLniWy7C5wL7RkV7g9q9Kig3mbCJh",
  "key15": "3vCuUARGkbwS1SZrNp62JVAByU43KE6dR9aVCHaaghwNdnmkdwvPA8v5XcrDzKSMhFxjqvN7SYQ1dhxRpz7q2eBe",
  "key16": "59M7fwAfn5nnfjJGCpVbrNo563KoW8zUBr3f6Yhg5HT8Ec1CwJ6DPoe7xVMcem8ekg3GdGaphFw5UTg3vqt2D3Lh",
  "key17": "2Vb4MQN8jPSmHAW7tPhqBzGMZWPyNRqj6sspk9kHqqU8V7DS5cjcyTSw6rQqFSuoCbo8XPEz5KBuRtGYt1qbpM12",
  "key18": "DAJLVpJ5PqotVzq3XT3cGL21pdHHpXG6UwgzppgTyxuaLTMMZCvNaSsNePTHaPcTPWcfZEwCK8hdu68LMjtFUpP",
  "key19": "Z15zRUzcpawgMuTdniTNpr3akeQZ33Tt3JJuk37fQ9qBDw7P2rx5xs1Mu6yt9XD6fPh9ojeLbD8q1tU2sq22FyC",
  "key20": "3zPYotp9D5kuqbEPGSEjJHaok1m5jC8ZSJVjBXPcsParagSEQWGutBz6ArVNC7QUTJ2VfQmYHXJgdcU3HAzbYnDj",
  "key21": "4j1wKm6prTLNFFCQZ78gRXQgQ9xL1ve6q1pQWuz4qFjLvph1PReioGHapJbjdH58yPUGUTbG77VPWDM3GWm9Bn2d",
  "key22": "3y7kFLZ7RAEkXnKZkfftdtXCSDQqXUL9ri57ezWp3k9gcSf5TjR5sJH6VPGVApQfuWYm4LMPEQeTAn9FxmZ3c6sL",
  "key23": "4JqdaoHL4UQ1xTwSw8Pb9mLnD1wmrVvLkpwKanF84KUoqRjyX2vMMxv3s2NcTLPQu4HqRNMJWUxE57Jh4f7D1qvx",
  "key24": "GM5scxzAJQEmFUKSppX6zTfqqw4G6UTcoSNRYNtcAfDvce8LLGAowqY9iDUtHLvvnw8Qz8hvZaGD2CvYUiiBs3c",
  "key25": "3Jkj6jS1284t4Ts49AoNK5PEBuCrrndGz86btQBAiw6a4od5aQuvMisLYTiiXFtbBuVVDQgzg1ySGZQx8vyJ1ntf",
  "key26": "4Hz2TbK3jiiDEjRg3o7Q8YBd1KoFpjceuFzvKfqNWyhsBynq3HBkDMnqmouLQoUsZ4Mus7GafSQaLHexrfuJm6q",
  "key27": "3P61tMvEt5BkqBb9diH2VRGFybDWussGyeZNEmJiXtqUPLuHoNLciqndYrg3dWCAGKHC58Kmg7fdgyAU3J4yFx4f",
  "key28": "3B7X4gYN7Rbv6Y176Jz8BmKkfFYNrtVNeCiYfQbqEFt6owQU748asvFuhJP4Uzwj3ozqo8YMX3b8HU5J7oF5KYY",
  "key29": "Q84YfYkqmVqPgf4yWEW5mPMNVvVrGC9XbC7wj5587hMn8oCtEudDPSfW1Q8W9UALXxk1ggQQfh9jTjBcb249GF4",
  "key30": "24tcV7NnsCX76USbiogehus8d25XydhfRJEK917FsUFQYC4K5CBwZSrWkvUdLXKxrqtjru4PHC8ushMGB9Kzdvjg",
  "key31": "63NWFBbo4go5qrHMFAoC5h7TVNP9bUyiCyKwdcmT81UM3ANWPcsiNM5iiPpqZ3jiYFER4aViGesP8pUhbtU1vmn7"
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
