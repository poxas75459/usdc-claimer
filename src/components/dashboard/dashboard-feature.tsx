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
    "5AWWBpiKpc5JJ6H6Vntvq8Xc52wQj8D55zi4YSwAg9Wy9NUusBcSXVQ7v6PArghDbCKdDJF8WzDhCrs7Gk9FFM4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wpSh67uKUZQ5GwsK9Ni3FNWJ5htaMtYwmwvXivHs5pLXyabvVHz1HEsnXSmU2AeNXNpN5o8m5BjUxNYemwpQSWM",
  "key1": "49VJsQpV3u7MRS2F4ykXr2hworTPH4ku125vcmYGHn29ePkUdyvtBTR6mn575L2a6YmdEeZ8KHcuw1YoBwjKu38U",
  "key2": "5dV6hHTDtr1JLJ2Ra49kNwiSihx5ozzAzTwn3ygmRjCS9UcyTPeUZfHxUgiBJ89dwNPL896HtNYdvnU9PGnyUxq3",
  "key3": "sXG6V7FZc1enJfqakGSnKT456v2vdU564mAeJgxRYNKhgnA7Z7UbzfYGg4aJNTmNx7sKkVwVtvurrH6h2Pm9CNw",
  "key4": "2xiH7JkffxV557docrtNN4ZvNtJJxw5ZEhozAUGKP6mzTLf5zAPHZmABDqHvNrxVHxL7B7ddLz69LRrvFKKgKcwB",
  "key5": "4nWDcjYB7usLDKE3wBvPdw2t5DurnGXg8obBcDVXJiq6GYyabumKSP1tKJJa5H6J2xk7hyQqSdRRbTJD5YmdoFgG",
  "key6": "3smEy8z1Xpw8Ay6VTyY4RDdKMKwQCA8YEKG43SxMWr5TWfUFWniqBoxd6bP3YRSrPyjNDurhqKw81gA5HGGLqR9s",
  "key7": "3yL7MN1KH9wJmr2Ux4bCAMAKfjk1hGiTBzQdYqFG2vZDpPGu1QgoV3h9ateecZDkuCPwUEfJFQJTEGBS4GnUZWK",
  "key8": "4ywV1qnWCfXqDnsKHm7L2E5wAQyp773TrsC47wu3Ga9xC8Ugbqt9wVvMLT59mbALCeFLn9beuQhwqAKVk3udwJ5k",
  "key9": "kAJgdXtHuy3gPQCWKLY2UqvjM2yFowAJ6oui67BMFkHKt8AAmkYozK4biX31EZWmvV8XtqdCFw1whW8W2v4RLME",
  "key10": "5jvhj5AF1R3FFhiQfKu8DdD58vrR2EGiyqirWg24i83X87QxQfAVW3Si1ynkYFSwk2Pgfv54rZuMoEpHh3FqAZZW",
  "key11": "2JaGQYs8TGE4sfVr9DUzvV3Vb8qWsaaH3BkHy7vRSUJEVKwHa86QHMfuUEnhn8iMy2mx4z3bVPCMFAyo8PJj5Kti",
  "key12": "4SpFdWARdmk8xc31xqAkmTPos54ZRY23BmNLgz5ThfBfhzDPYmvqD8ZGW3KATTNAUyNRmE2sMJQGXguA9ZgYNCBW",
  "key13": "CLQeb5oFcc1LykQfsKsXRg4hK2UjuAE9QH5JTpcir3M4oDLSshikEh9uYem7cRcJzTvX27qWbwQpDz1H3BKHhBy",
  "key14": "MJ7AGBUALps9H6KrBWyMKog6ktNFRuoZAf7Jdm2fqGs3EaFvbT7Tc3N8XdcajbGViqbE8i1Qhv8AQU7JCmDMaSd",
  "key15": "5SKgTgWNJT1b6hDKbdM7wW2CMvTNmSzLZdPR6dYuZGR9ppPVy3yBzortfRqamigQafBLjVRiBT3HBGmCMrARdv5Z",
  "key16": "4ZqwujPptvCJKqa3dU7gd6xKwV5uii3xt56cGhREfZDxNSfkR2eL7egCd2JMBxVbuhaaQL75YpsRapn9tPhBjk6V",
  "key17": "5pLgHWodBjxXAPUfr8yn5uS2aj8KUERZFvp6kvLjhwS9VhwLtF2MeAwpVuunSGGxko2MJnazKzpveSn1BRVjCpd6",
  "key18": "2xDQY4rszKsqsd6UdFBdW4h94LRDejHAFN1e3diipWGEbSY3PNsxTH15oFC7WzVXovURxhrUDMA8GcCQ7iFqxe38",
  "key19": "2g5tD8C77eS2HJhTv5vdpMoRYY14QyTpv7zSzoYrD6NRbcYguJm3AeTg9ximBjVunGGBjUrJt7LLpYR3YqtRBT5v",
  "key20": "2zLgCtBBRBVS2athni5FCq1G3GarpE1MXysoXh353kw77NXQuiJH5FVL8yuAxcsP4uyHQ3v3Fo4vVEukFiWQAoyf",
  "key21": "3S6Dro3DLFzHQTg6eSLNGkqY5jm34CZftgnBs914gbm2dgigawb1YTnrFAPRr42ZHMJTWZbLcka3zshio4Tdg8hM",
  "key22": "2MmSty47QugjQHVknTQXcJU7U8P4xFtCSkGf3V8aV5aKE1LsmrggR9tRYLHTo2YCKdyo4aQo1AbSUoDkjDZaTAU7",
  "key23": "3zD4dQegQKNN7gHiuJcTs2QyU1eJVvHTevjqfRoTzbDG2dRzQeWQwzvQojn97MyeXDG8t7dGAwZdq6Kza4WScqci",
  "key24": "5kwq1rokfYF8Y4mfH4MYV1qzqHJe8dZ2E3zitV9Hef9bxYtCpBoWtS8jeSMS93jjaTjWDiVpmnWNfs1jnCvrRKbo",
  "key25": "2pzVXEovexfFMeugfgRvmTJvZMJeqHbf7vBqhwiBy23kCTCmzbKXth3ZZdnD9KisksPUWm6yJLHATmg4UnFCVAsr",
  "key26": "4dMJ1mqWuq83fSh6udNnQzUfNx4TFq69xM6y715iVwJLMde8hQdXaexMyjxx1sDpiEKwnBMsf2G9RfLRzvC3Eaoe",
  "key27": "3j6kmvzyS4Q88gfNe9wJQMvbS1chdxKvGzuFs1KA3svD95rTgrba1L4RjtjSAaA2rbh2MHfXtabczs8fLoffgxCY"
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
