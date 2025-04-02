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
    "rcfwqi7cTaBkh4p6SKsUwSVb2gmfNgwLuHfsxXBENjMzCuvdKGEGXcG7ha91NyFHnA5faXabM3GnaZW2GDXMS8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eQmQBB3WwienV3PxPpCM5bNCTTPRGcDYCwMMdCe3bmigsAw7Wh38o6FM2U3omP7HkBoJaw4QoYQGw6quGH8VHSx",
  "key1": "5gbP1LQMyJBB8qQav3yF5iE1b74GB3xAjhVQP8ZMiQPirKMqwZXAYAyNkwNNYViP3FLWuYMNYwBqToHMVvPdfZZk",
  "key2": "1sRs6F4iMsd9QrRaDkkCJY4Wu8zH2MDy6YFWZNk2hLY8JcLPf3HSig9ydtSkf9mLfgT22BAxpDLRtbkpvL4PyyN",
  "key3": "4zQ1qnf445Mz4qzjW61aTa8vZnqCvBSLRp1m7zmyVxB3pEtv8bHGvEpeSLdyaHWdGRywt7RVuhC2DgV3kE1GbtCC",
  "key4": "3E9tHZBrX4Detramq7LbTWUm1CRnhJKkTptHb1QQJ4nubj3WRiijvaynkxYNuspPPENQtbRtp3H4RyqWL49UGZ5V",
  "key5": "5gib9i3QQDHHd7iGyUCfodeDjUCbthiQ8PVo8Gxgcn5fHepBSW4rJiZ5acXFwoyNWvTMZWS4iEefLdw3kMM2Qi98",
  "key6": "2AXqCZS6E5C7ktUGUSnbgCZPqqH6Z4qNbokxmSGWgzubZTCqTv79Wo8SWfGFSU6LQjR5qDEteFxQjG84eVWqqrfx",
  "key7": "4vRHmqRYSpH6budHVktBh45GDmMFd6Ucj8M5pv493EDzvHzTrexHCprLtVMw9c3R43gGVQbk7297Vr65hk8Rp1Yx",
  "key8": "5QisuT1PBq4VWyg8o3o5UV3L1uvDL4iAKgQ9xQbvfGEuTQ8g9xmECu5tYH7661tLbbjUixUg2o1peutkmGzxRBUw",
  "key9": "4zNvwPoUSvofpP1xWi8gzDThXE9hQJ1ssBPbwpkiLxY9m8nbGcyKZuqJiEBSDA1ZphKhJF4AN1VzJeouTcJTweTE",
  "key10": "5qc8AxunGFAZXtnBvA65vRzVRJNkUXrw4TSeXbJttUyEEaLf4BSyqZJac3oGYx746tqvQTpr6PF8nqp3HKxpoSZ1",
  "key11": "3BtaPC7MD3WLxwnzsxwUfhT3C5zwxsP4eMjuZWbbmUU6powGnop9jsGgjRXM3M6fmvtD6V6gzKdDCCxhCwnLCBkF",
  "key12": "d8h5Z6cTSYVEavFAe3txhtXtbk4Ueb4ixDhQCxGXtmS3necqPpi1Ty3hUGPWYZg9TNfNL3QM6QyuzPuTVJdJkps",
  "key13": "5QtJYgD948qv2tH9HVAV2aKjP5RPpcjS6mhHJaLhKtFeQVbg47CVCMyDMPwM9H8FCpnzgKM6rhxrBhZTBW29uCBj",
  "key14": "2GA1n6uSWWooLqPPmWZRfVR7DCdSvwFjbv3Uy79KbmjFnM7Mn7bPoLbL9LfDzgmnQj3sXnMct3rkZDrh9F6oU71Y",
  "key15": "52c5TyMKJDd1PcM9a1yDMz78G4yieccRVrzTRroFFrBipqKnUxUH5kb21JDRvLsXGNch27edP4JGFUN1AW11moK8",
  "key16": "5NG326wePeV21eERFapGX6xViRxFBSbJoTEFKwj5ZnTUfhb9zqpFUp2PZ17VbgdPygqCmQsJE5oFhTqt7qqGSqGk",
  "key17": "4dx3Ad7jPCozYQuz4YKz6ECfmGhi94wAYsa44jxCPQmxBNeeY2ANWHuHshhFkat9ihAJdQe8psowSXGTzUpSeiWj",
  "key18": "2ZtD3hTzo8Xo7fqRK7Bp9dSPpFJB3osqU9v6jDXFjoizYmKy3sEiqQeKjhhLnwEbnFk4GTpcgn3ao9P3uf2Lqvcd",
  "key19": "3wpCwVR1XJBy5Lqd1XakUTWuBa82u9qg3yWvAVCgeYf32ws7TNPiPMdd6ZLDnds3LtFg7abktHUQCqV9mhPm2L53",
  "key20": "4msAqoVS2RK8hgHXWxSnW7Mf6tLJoPbCKh2Mr1gC4PTcXWYcjrfHkiPmMinE8UhpnMkfU1G3DQmTuZQE3o5JBCP",
  "key21": "5ECymH8mbZRUrYn6uHuUEvwBLDvkbuxV4pwyAgb2L9DzyjBHWygtipEg5tuiGz9PCktTkkiLXZpitTPfuq3u91qi",
  "key22": "3mzeq6jSNGsVjccLRxojXss5VvwGh6oWeu2j7jtFfK1Kvpy24FZQjozmR8CjVVzG9vM9nywWN3ep1iJHtZZFstqm",
  "key23": "4si7oQRxMwWD1WS9L9Anx8oA1PUBdnrHS9MhPdZ7eDZ6b4CQzhUrEuckMLWUmKakJ48VMiig83AWJwJsaEaoVkxX",
  "key24": "4FLpvDm3inA6uaqzY4jUBxCspY4AUMFucZ1cm9VGdpALCz8asTqT12Zbme9cD67E1tWKfqDzu3whjARnBrTcJeVj",
  "key25": "deaT9V8vpBKdBVP5cFULFqBcJutJ6ZieLZJkioQis46rzErPqmAY3TwxHCEDy2KzHA9KcSYvaDX5ZThtW9jPNfa",
  "key26": "ZKLh1Mqx3pb5sSUV5erGxYEk6RzWX8tgNrzg1cGXsiZH2L7g9PoHYNMwuRUSMDMtfurEp6fQ6fPedLx9keUUTxg",
  "key27": "2ieGVw2qYcAV3ERe6MbY5ag9wcZHHrbDm4rTqnbudWnwADhcLb5aaZuPbs9wf7yJmSJu4WFpZXkaG2S7buxSxJYJ",
  "key28": "2s8KHPd4KFU232DmTmrcpfGuNJ2AyYqRMesosbyYYEGwsJoSkiajt22vbjmAbVfdLEmCSAK1aCzmPJYxp2DKn73Q",
  "key29": "5m9egUnJktP5dcgDyHYJiHBvxJdhzBHE7MWMLRjobFLPN8V8T2Nn5wV1WPGWqQ5QcdTaCdu5CwaaqV4asGE85mp",
  "key30": "5D8q7nGUr1LaTakQpuMD96riawGCiTT9pdgEQQJSAKNKH5ijApXHV38AEPqvGQFobJLwiNdWHrzaKg6J5w52st6i"
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
