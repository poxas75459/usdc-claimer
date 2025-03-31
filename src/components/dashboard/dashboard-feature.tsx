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
    "ym4YWRdvSXK4hBzbjAUWpXpikJpezkbYg2CKM3be3R2CepjLAKHtmMXS8PiSU71pXSwdn1gmPkP14dkkw5qSpT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iFiTJWxER7AG1G42n3t1pTMP968rVBjhooxcVHBUq3yWar46xiEZp5sxyy1Zxgon1p8PHDdEcXjamnjh45bqdUk",
  "key1": "2vBZuY5LVFv1C1wwpwCEDSKzWHuAvpzucRLEkjPMD4jobCQR5DU2E2kcRtAGDZsYDATrpJSmcXu7SDjDdapuiud1",
  "key2": "zV4hyGVgBtGxrX1LpXYPNDk57WBYUN3DKpJ4VEeF4jpkA8UNMknH1SqLKJXh5P5hKhKxWhvbKcVSf6YSMh7i8Cd",
  "key3": "3kbDWKRycHTRy5yEXEgwNv8kHwVD4baRCs3EZ7TAPSzjh1Z1JP9BDHmvQNcSDWawsGd2g2uZvivTDUDgfEntTX7g",
  "key4": "4WcQ5r11thEgybP9pUKGi7Y7syGKSZ64GHP9RLi2svRSe2Z9jcMXoahhkhGWQETDQikdKhRMoqC7FRetCD2Avy9G",
  "key5": "4kvQc9PTmVKEy3gL3HxSDZigysXfTrDPMP5SqGNbQUzFVd2ywrrvbR81uvpBFvMtG7eMB8F9i2kf4pt5DjEXEr78",
  "key6": "3cBf1rggu4eb9QYKJipjNESQpeoEjDfs92oQTcm7Zb5jcJN8C8QYHoLmzYAANwo7fHJsMdW49o65i3dTqszSCR56",
  "key7": "63UF4AcHPvBvMQbr6xgjXsY7pSK1PPZdTcyoT5shKcHzXth7fgvcivcMfF9bBLqdWjLx5N6NvkV5hgLmXn3u4ZDX",
  "key8": "2mV6Y6C2iKavxqeJqRo8bg4ZqMx7qb9usHQw4BeyjrMDjEzzqz6txxz9eLoEB8hksTr8KAVE7EVw15n3VdMkQ7N6",
  "key9": "h7UB1vQCi5kpmD3A9Y22Rye3M6VbcnjkibuPECiyozhciyudyC42979AsiWjFi4C7GnuR6vHmA8NHq1rSvL8S29",
  "key10": "nDHLQMCZUs6ZfP488rWuR4MLB9JyLXZqoME74z3Zt1hTiKwCYhisbncVtaCqKz2BPzB3zDG76SdrRLYLnh5NAN3",
  "key11": "3yHGvPk14FxA9vMMgRVW4QYsWC7jxRgNR9mB6fZQJzp7AkiAdMHJ7VApWKQKi4fKNF9V8TfD9RjVVaDUL6TbHNUa",
  "key12": "5mR3xtzE9yfAUUutb39nckHwe3QBSSreaD6fy1SxNP3GqVVrpyvXSgQDhgsPnAFrxC6HogeX13XmWSaxDYQY5NJQ",
  "key13": "2zq8edV54JLuoEwBG88dXbxndC1PTqip6NX3NWzqPLiYsivzDyZBeq8QeX5XtJtY4o4zYf92XKn8eHf36rE6vAPK",
  "key14": "5GXSRdifvBoaByQ7xSznEf7wQpfLkwLqpXABw4jacRugRkUYgXmRD3D8VdJYhHWe61CoWyugzDMfeoRp5VfcMCQd",
  "key15": "66R33tmU3sSuSYtsyMbH5e7Sa6SGuAehdWEAPejxZUXVyhxRqqgYSVVpuTiZrGXtQ9QDCrQTu6pSM515ewvoKSdR",
  "key16": "2U4fd97Uu87FZ4pVyqP8wDgjKnLFHzbuRcCAEbuQJUW6EG9aHwAadDJ8gNw1GVVCiRrwhXhPsMTCjcz1a8gr7xee",
  "key17": "2uTRHq1fVFkbPvQpdekQh6KQmqvM84vp93iH69izqanmrAVVMU2ZMjcPAZDXqevqn7GQy9MCStPNNPMGDqYaVMTQ",
  "key18": "55ZQTH3sA1RBEeo1wZqDrsedH2pkge7nJ5r3BYFvKjpAHbPXP683EQTagCdUhfyQ4jwcsoSpXdUymCJwFnRvFMzH",
  "key19": "27JHiYyf3EhWGQQcqByeFyM6iNsneiFYvMq9ChH6BK9fcEEUjrMtFF4uKY4CwTcsBkH9XPgvBpwBZ9iMj7L2VN5u",
  "key20": "42P86SH3bTSHNm4xCCeiRqk3esia7RnxLm3y8QH86zg8DkZ9CKhrSoxnYweR8Rk8Qrrz2FfJmfCHSe7aXwj3nbuY",
  "key21": "czZqc6jUdPWX67QT56M9qPY2GGuK9zoDrGU1N916GnL8mbWJME6Tr3nxw8F41AyYpaFUa4LxBEW1HdAK453LFpa",
  "key22": "5BagDSCQAtMdkdwi3vqzGibUJPu4ttvCPGVwazG67oiTWer4CQ9KSDoKyYXpMn4zv8oLpyAN8grEaisPNDNMZpnR",
  "key23": "odPmhNGY6zkznm2zt84fm8XqJjZzsXuxdZxk5H5dNwVFR8xAnjDNQkZokrQXJbHYunm8abSz6iiiV9jkuL5ZZeu",
  "key24": "4UXCvQ78odNqmBBUg2DpsR2rpZaQEpgakif1k3cscquiKr79NxFjufQUswTBbDNUkVhrt9BvPxtgLevPa7cusJBs",
  "key25": "3hG7nYSU5cu556Gr7RDHcYGXwq944K6G5de1F7Y41ZhrVweCzes77HDdyPGXBvSP2oWJgBzTUqE2yqwpCfad2QGf"
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
