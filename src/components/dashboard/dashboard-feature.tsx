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
    "4x62zRUE2kuUgEqytn99vL8g5dwdemmDsUFjdK1QkR4cht1LwkgMGEwpZyUHAkWaArLzdzdvn8XBydbGTpJa4jhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59f1ZTUDgUZdjgHcX4Cq8gmzGJvCXNGC7dg4ecwnc2BWdtoiqkoHY7XaLqHob8zzTtdFXp7iPMn37qSEzzQvbGDz",
  "key1": "yEZpY1Ri9u2mTdjHJbqKJQc92XBvJmX6edZiScbkX6wWxBQaA7e367nAbaWAJRhG7wjkx9RvSrd9uXUAP9m5y6b",
  "key2": "Tm6dumb6yupKTG8zeB7C4RKnQuxz8C5enYqoVvg2NVS3jbEy11iVAv3rwb4CqYawiHFFWVgWiYXcqHwNChc2ed9",
  "key3": "3euGi4xvDktD6HRzJyQVW21N38wnGcas9EJgbvDwcGKPPBSGzhRzMUfqoBwRY492Wy3ek8gXKjYKrYsvyVhsAS2h",
  "key4": "3nvrgSbJf4LprUF9wfA68QmiEuPQDAoLoDznjn5APewr7e9s8xDMNYqvAX6oSEXkkF85qhKoJxUeATifYyo15hrZ",
  "key5": "4Zjp1wFwrk6FyQJR7TzUY7nW1CnW2dzEjSFW7W18TxGGfK8pemH1etzEMBNcJtcLZ2vMnADjEAcVnH1naNZAmXzW",
  "key6": "2J6EeZENwLiQaHQmv3vwdhT5jrXpqjx14XFC6pSasGdsPmhrDhRU6cTLcBm2x4E38hxFsCPNPSGbKLBt3dJ19ENH",
  "key7": "RMBqcgxZjTRPaE74vtrmi87nd1BGzQHoaXPY7ktXyU3eRYM9vtKVw7A2GwxhpUBXgWHmEfTE4mm5DMc2hiwZZrW",
  "key8": "2AwqYmzM6MNyJBJPAttQFE4wBoMKugEEpkkL5a2hR8kwpk3KJU5Ywyi6FmBE9L5zBnsiWYB4b4cJuyJdjVVseiPX",
  "key9": "4wsrqnCSvZYUwWWR2hLUWzjGxvWVrq5hRj2CdJfcis9avuFFB3MSgrY3MpEnXYFMn1owMzbvR4MqUDCBa963Jhtb",
  "key10": "58KAvRwQX6HrSACnXMrJswvunvLEPBuBbzrVaVuNc1NGzxsbFyvRC3QYD512afhfWDTWjYk35cbZ2TUQFcpobq4C",
  "key11": "5CLixBgcize8bjs1RJBgwTuuFrSBpC8wtmPuUxNT2ywSkmfC4t2kmezU66i49osL77BrUskxy8RELmNLjQmQFgYN",
  "key12": "3pRh7ew4foSdiokxVQy9eDZ13F1kt7VkvLT6q81u6jnJYhKZDmrrE2bPwK55yNC6NYeNEJEMa7q6Lm9d92JuvGjj",
  "key13": "3QoJYno5tbbkJ5pTersFhijghVccGRA9cHitfYcw29ZFSfs8x7wgER9ZsbLrvBixXndhZMJExyQjdxjT1egngowU",
  "key14": "3eUMdRf1EVsNecLU9HoNndvbeNiDLYiwvcHXUTHoQX38nh6N2mEQjX6C7GjXwh8MLabeeXKkwUqrsPUh54pixZF2",
  "key15": "62eQYMqLFMaBbUSfS9Q9LzuzzQwJ4xKjsyNavx37XsgBwRQez6Kqmk5Pqxh4jrNnR2Yqc6hFtVWXeEeTmhHVKDDF",
  "key16": "cwdtTxCiweyLzPZ3Qroi15mwxuwjoNghbHRjT2Q9rAo6mu4L2JHuDPp6preQb6TEh41kgbpYxhvVeB29dfbEBFV",
  "key17": "5FbyZwFRwQoGvkPWQbbdsGCnSpy9qibMZimYML31wpJuWV9JYxJfShBhFSAp6YvHQqEGapkuJ5TEsppvopbwyisS",
  "key18": "4o1xDkdcpmQUWtq8PRy42D6hN9qa6drTHMYF7pGdPQ379PpFr1YB1fV2p82aH3HvB24S4WnF2MNyMB8pHefGppoJ",
  "key19": "3WjXDy87fud1Hfhk86QvWmH4xwEhAjQKix8Njt5X3fsSWjn8juNEPJ7mptVQM1WF9XguTGK6UXJyAvUu159QbBZs",
  "key20": "4UaWVgZyZP2sbttXmW6DUPHr7kP72SMTmDKpFbvcWXdsi5TXgeQThWYNYTrAMzHZMhqAMN2BzQio4SWhEQNVM8iX",
  "key21": "2A7nmANPJQ5dysZ3F2ibP8fmte2SokxNN5H9iFGRKu65pn6hbiyfZovjyVbA2UtkBfCeC6BSYWw25AgZSZxiBCLw",
  "key22": "5d7hGEJDBsBCs2SKFZDCD3Pvn4HzDYUTUD7gkj6sx9nRCFdsJReT8J1Wv4Zf421bqz3sB35VBQu2ithAhFoJZn1g",
  "key23": "3RaXQivoDsXDREpttDoyTwNzYzXfX4Jix5eP5Eyk7YAKNPUVfK3C7DhC81cCE5Cpiogk6NM4kAnkLHFTp3S97VBC",
  "key24": "aK2LEsPFW9iXxLax7U94KC6sChV74M9M9C9tT26NSs3p97wAXoV4141RyCNo9Z8jNnEEtKgBfCkWz1KcqyNeiGP",
  "key25": "qCTRSy1RX8i6PvtUYPH7YavUKKyz3ZY6Qk9kDEeFe9ajtEGEyYgofM8ap1xMtoi4LtEXAB5M5X8tm7F869W4LRs",
  "key26": "3cojUs1d2medvHdLGj8sF9QP3VhfvBjAD8XxwsyVSGBFfAfsWCCgup99y69BzbHJu2Gy8mdjFifTMZVAZsTwKzAp",
  "key27": "4hFrafm3JkagqJnsAAKW69vtwhVCjBL5fWjZncRb5wUAgA3kLcKeq2rJGXrGNge7bBc92E9Ri8G13kPHxx6kXQ5E",
  "key28": "3YYwZzetxX3ApnT2S6bU5d2GLuaGwoLB8gs9w7TSAZondKmHUU9gNNLD9nPVkqJf3Qca8A4TMVccqd4Tv8TE5QuX",
  "key29": "42N9NgcAhMDb8Bw2VJ32FQJDh1dqB3QJy32ufbARCNBoirTEecxyVzGUshQjofrKSeAU39wemwUGTsZSjmYTUZfe",
  "key30": "3uMLNPocs1MamKBqPDaPrXuJ9KwYW4iGF1YXm7Ykmpx7LQ1RjKyU4nxmSEPsSqvdTbhBrHKUxj3VrsTL6DhSMZmF",
  "key31": "4yKLUyue7CGz1R464Qm8vEFSwNCjh5WmeHnpaXnQi5m451ivF3LBEeDm6QzrsLkb9mz5sVA1gdvebiEMhydAvgRA",
  "key32": "2SGLB61nnXZbP2TTbiGsnboYCEgMN78MKfNiVE6EGQHrqkayCyUNpSAWs5ybyZBmWHu4e1b43vgqHoamippotYKs"
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
