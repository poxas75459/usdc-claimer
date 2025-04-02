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
    "5aswG7Z2XZKYQX6qtxRxVEUaPMmp6ZQACKrQXJz2mRHwAfFEejLtwa4bfDJioMQYVub2DxppcWr9ahethR17szqZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uHNJADNEV54RBSBcQvaa1wawGasZ3Mo59YehKCS2JW5o12P5Sa4kyHg5RrMXL74mpPiaT93J3aTygZzJy7RyfH9",
  "key1": "3vDttQh9j1FkDK88Rn3VAK9n8Z4W3etHU88ZBf4e378E2S7rkgDuXiC3vgLBitbTzJrVofu3oiDpKGgwPqYsGuQf",
  "key2": "5zzHrmr97TJT1Tv7JM1UEsEUTRsGG2j5L2SQKnsJqCTzkXGYjUwiPdGtedYbsxN946picRzG5bGQgB2pz2yBPW3n",
  "key3": "KDZ6bieLBMVVmdGV4WKR6oc7bjbWxo47uiFsdJ7NY6peaDqf3CfDQ4i77FYVsXacnqJqDPxW1JEkXNznCzyTTBn",
  "key4": "5QLhu97czagajLp2pyEC7oBZwZhrpBVz9n9M3QgkzZTmPJbraoGkhZeSR8k3y1DP3zx2ZJwCXzPR1tCHpNn6aZ82",
  "key5": "37kXoHpjSzCGfYjRfkiFZ2K2uLcW9qSfJfM3XYHURzAZZySXBL9sWZTEoHzAHTFecXUQ5NMVKWt3eJHTSKj6XXHF",
  "key6": "2Lzcpsxwm1pmQGttGF1eTQEgqEdyQmBMEjbZvdQ99u7SXwd8jJ2mpzPJd76piG8oBaCpkrMPY6W2rqPizFm6t32q",
  "key7": "3CnDXQCY2cNzbBoyAQzZ51iwrXcn9oFevFHfpvx87nbWAcx54aspmPKNNrV3wLp7TneGP67FDZa8fqdP9atXzu1H",
  "key8": "jc1zvc7xtd49Fq2jQfRs5FsxM2eCMUiiMKSpw9neDHCoC75MuDAujxzqf9u4RGiMGDTPtgLoUsJQ1ryWgVhuKJF",
  "key9": "tcs6EhBmXsMGwaPmQieggUHcfosqzpH8s274pRmAQCpDfrK8T4mthJVqaDSfydEZNQwRFUM2mCBgK6HCK976vri",
  "key10": "35aofUKpSs7twgsbfcAZcybdM3hGgy3MHFubh2rjZXHfWVFAfFGwdj4LKRcYFdTQNVZZCn4617iNCR8v7RxNnHAp",
  "key11": "3VjA1fZwwBR3boEmQL35EgcZ5H2vDxmRPPyMTco5e5VXaVPyHYARNwWFNEd7L1TgXcf2j7m3cDagR8mGFRW7ffnk",
  "key12": "5EyAAdWQ5wmHnvN6K6QaZkz3ejqGWLbNgwMUwxAy1saNVAuzhzvieN9hVsKfSpnjTzr2WPaYXpfogFJFb6XxBKNx",
  "key13": "2ks7QeouiBLvCUEfvkttYDbL6XRkeT1gX3vs9q9eUUvga84ShRczqUSqq79f54Uo8vCyoihU3SDdTSgkHXxXbNLC",
  "key14": "5bHrPKnEo3Q8ChfB8zccUukcU71ZMyess3U333jxfEu2rCJCCuwF34WKPadU6bRPVwQu3DNaXiy2s9e9Ly3dNded",
  "key15": "3cEjeAVR4znfJqM98q7jBDTNv24mCJivxiHj2dQxgScyXhchwdgnLCWn7EgsgCnEhcYo2Ad8zybzBUbs6ZXS7ira",
  "key16": "4FF69wQjTycDGs77pVkUNkbbcNZAZzKQtohBXoJTHaQp6WV2jrmCLukpNc5X1f5BfDUj4xyJZ5n9QvzL1dBbgX64",
  "key17": "51gmPgmT58XXbuGC6wqD6Mq3SfzBjH1vfgZEVEwPcqWLzPNFNRGue386BCUqDvo7EwJswJbGuLkzq7j6k1uwY15f",
  "key18": "2vZ4CQmc9D6ycGRFGJXCLLTA4KVZbBw8EkJmicw7QyTPNnpKyo9Pn5NcEP83CPyaQ3F6zEUFXc9U1tFpvLR83sxP",
  "key19": "5agCcjyompV863TC1amtzsTHYiUBXvaUhKvEuSsWnN3u6rBcLcZaoDYgrABvbJbu9VMZS3HzU3LShGtrYhtoAFkw",
  "key20": "41nmrTn1Ct2fx5JQDXPPikLHh94Y7PRDsMZxGhVrarbUG2c3zEMWJXqukgNQ1aUSQqAp63P2Mm5TRbZkTuifj9CM",
  "key21": "3uxnEwC1FcPz9KgXwt6vfTUZxkgm5FeZRsfEuUVKejwC9ztZLxaaxgVweeMeLA5XLfiBm7ZjvWoogux43gfyKtxk",
  "key22": "5hCw1RuUT3N42i727Mou25WX3447bB7t7drka9VAFQRpXrVupEXFqUdFJAmS7gbFo4rR6sGA4bffYqcGyxuLxty2",
  "key23": "5UmQZ5BQktL1WUn4CLMU6x1oHjdpQT1qi622giJz5GyvHkJAuLu8xbQk1sU9NT7PPoK54mKM2ziQVZ6wd1feaxL4",
  "key24": "4SxLNRHSkoh25MpEUCjb6B1wkFC7xtNnL4AkxNxTQi8FMhyWiTj37R77bCjmLdnrgBd8g2aNSLqhGfq39VdL3Xy8",
  "key25": "fNcfnqfmMcoFMj7BMZmwrZVdTo14vuQdUXr8KrmjQGMtGymYVrhHuZJFgoKKrfjQHCxKxQyMQxz9dHg35uroTPF",
  "key26": "UQ4bHKF2eKU6dcGeQM6PrkPPt877Z5CfVWTb9DmvosBjoRXdDvRdEv1n4zDLGm5AuxmBX5Xcu475r71QNqwtkVY",
  "key27": "Kk4u15zeeGxZj976DEArEvsmQPu1F2GEF4rTDoarf8SM5rp7556w2uxxqczxAhaG6uHGKPxVnKCneATTq2ZdQuS",
  "key28": "2DJ1RWn9HyZKP8AsffxPBzc8cxtPkVUQMfv1ZC5jdjfLjooaqoEJJ9oEKAxoeV6YUTiTkh5oTCzWisTbY3YkUYWj",
  "key29": "38rzBvr2juiKqo74uDkfUesFWtDG2Q7xqtbKacK5UumrXPtwc9AuJVAmtxMMTnhWWfavkGNKUdizanEN9q3HkwRX",
  "key30": "K4cNgEQ9GVqc8PXYpH6oLCcvLDYRL3yDTVYE3CLosWD12iPqesgGBo3EiNEmR63QCJz6cQoENCbegHrYkLj91zQ",
  "key31": "2KeqL52WGH1bDe2rTVLxX1QJfwWBiBBrJNAmDFdEuiQt6UXmPJjuh3LMwRJQiMCe8jvNyYCJixPHsdcqwjnm9YLi"
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
