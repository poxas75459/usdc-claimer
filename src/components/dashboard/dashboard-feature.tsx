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
    "4wRXu3S9DMxxZGzvwLWrzTKdXAXwdBiNi2i7zmBXC8B8Ae7sGbgvX1W7TriJkf7HhsNSnMKhtia89tgEgcnVzRhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q3as2sZAi4StbM8yQttB8WHsdtFdFfP2tzt5xTRH6DAddMxDVtbEdRYRPcwkYyFUw2g7YKoJhyuDqEFo8DFRAQ1",
  "key1": "3McHcjULHxwuxatveQ2Gr9oQjcr5wGM2UyFravwwayJNnwJbyChKJ1rZy5VU2hVfusTUZ9s1L9K1odLQkTFsfmR9",
  "key2": "34Vi5oHCthWzCmP7nhj5vqhVjbJvXD9xBsw5jMZHV61sKi296kjJTw7vNAecxk89Kokeg2FxUnMkP7qn3syF4514",
  "key3": "4Bp6hox4Jk5bx2B1YukAFC48HZvfBaTFCBzkht2Ad4Vy6TvZ1VeYr7A9iVGiZM7aZTp48TuXh3RCxk9AdFACAePH",
  "key4": "2EtwkJZfSKcPrrVemybcDhgo2DedeKLvzcxRZyjAAWrNL7DFxWb5WMzQaU7r8AurgBEXxPTRzhV1M1vkwNi4y48A",
  "key5": "5wiLCmGDpS4FQs1UTJTgbggxRkZuzDrd9EjZNd78ARoPButkbq9Edk2b8573LcY1RfaoFZb6h3wtU3ACEnsRSRDY",
  "key6": "XWfhsEpTkjn8EoLL9XpL5wCFUorGBSueBWrEhun2QfLYRqxjNbtoKWpbjGTvr6pAsrfGJYby85shJGTSS4fhWFL",
  "key7": "Wjt2bGaDhdEzheYaNaHktACzk19Se38E6Xqv1AhBGFhJzfiL2oXbsnDefKY4piBCErn3FrRmTrQZ3PziHP6YAgk",
  "key8": "4BPjhKSafoyVbfjy2adfd2EvdbK1G3NqeTZgwcZSkq1gsZ8EMiRSMmkVos54yFis975N5ttqdvrrjqPhyBMSib2c",
  "key9": "3v89MPpVjrneYjRahShiX2wbwxK5PVXQLkPmu8fVTh23Nhp14stMbGjQUgmNeHkEBEea4uwNvYNykYUZjN3zCP7Z",
  "key10": "46Bzp6yjznSjPhUshtD6832oqfFZtnsTCuNzNDKuGYDDVNjmd8G8w8Z2g9JZUiTFn2EohtwYUWrrM5FuQTTS7Dki",
  "key11": "3AcHSMcrzccYDd7gec88QgM64FnNTrJi5SM9CwWoWPG79ffUvP5pLeo3nTA9admpDWjuw3WtmWL8TnEX64WSEH5i",
  "key12": "4GNAbX88hRicGR4nKckfwFamZB7tWTVZ6n4XvXkhvLwC4e6hQNDprcL4ShjDmk4135pA6QMqGWXD13CfE8WXLwJr",
  "key13": "5mXivRT2wzjjqdwf7kr7soJVEajawYTf4ktnHituziBEJxT2e32BT7kuvnHEyfdjzEzxKtMHukrMvSWfTYovwX2",
  "key14": "32bHivaMbBhRtf39341zwc9jDt7Ca9Mv2hyUjyn4PMaS2P2gUg1q2pJGDWW1Rp2dCPsFzBnpuCDhJWrUgWYpEZEM",
  "key15": "f7Q65vJEFw1QCG6WhMbHmQMbVkiBuDu3n6SHGJfTeN3TbnDp6MWijQMDy94QeQvvkBXiKXxVeyYbnQYmv63RgzB",
  "key16": "9uB2jWiKFqNgG8sr5NE8gzxEhTAXARHG5QjzDDTYwNMX97dyw1jeyGvLYG3nobT542u2BaiqikofmFEpzUTefDK",
  "key17": "4Tru79S9gQaBL8ZVmtMUuyaZXsGSyjwEfL89nmqQGFExKiSm4kM2Ytw1KvPpeGnvfnC6HsdhkfZH46jHEvn7isFw",
  "key18": "8TVSiUGsjJoXmjGURtJA8RLNobHyshXgxcYLh7a5qGZmX79HPfn6mLaTNPYMtgLwbyRso9v7MhLKrPKDa7w6j5n",
  "key19": "3cmrPnZNGbnNQURQAPtb1Hpq11BMfBVc5eReXHam4nyDmaEghjfBXqa5FqDqHVPdt3z14byFHwh5UnQuuGSzoYZd",
  "key20": "2MxctZJ1A8zshpUk2SuQRwBKc3n48JrJGzdT8pbGvXRvAB1Wm4i3DMLshHhgPQUUxQzk2PBh4ZjSc5N2KSZvJJBF",
  "key21": "5JRTJAdZD2n5SjXkopmrtPPQzMKNKioE4tQ78QKyP8EzZy12vxvmodR2F5UxfNSbjjF9CUFZ54zFucBiCLKnnesh",
  "key22": "2JKAgDXfpFA6TbTNMsahq5LgVWuUULE8rZg72BzBVcyUoqrVZFsZBSL7Cd3ALtFwTE5DXNwqjSfswTUhFEGkSKyB",
  "key23": "EPero6xTUiNBggZ2Lxr1W6WxdzQFFMNWF9PJmmkefsT9QEod9fAvUuGpxYcvMKsLRL7fKhhdFmtGYn8get5cRtN",
  "key24": "5Z1cNayqVBQYjWVTHpfZeyYFPyk9gAbe1oBdyBPCZ1MUkFCoU8XcvY1PHUzVSMet6jQJik9goBLVM5befXJ3VV1y",
  "key25": "4zkL6zrKppChNfL6XQkEKUG2fjSHqiJhrQErSe4ySdrM8PHDEZGXynsH1McueLNX2mix5D7sbmctVcqz4o4bEAdV",
  "key26": "5hA3SjN4trcxCDvfvBQyPmaqtv8Ub16EnNgP31wVcnSH7T2HWMNscpLdvMq4ZU9mwGR5Gi6QQ6wz6qzzEJjZcY44",
  "key27": "2sJR3xc4gxdfxcKh9ka5ovyCy1MRowgj9H3G413SVxAagLcLtQHLMFdSthBpkvis9G7SBPMhtAK6Rccb9u4qke4D",
  "key28": "rVxDp3TjwnQYqHpNLdUZVcUbtpKqEsMoFEeUYqww7r8KvRFWcfpcyEPsEx6YWdWYZXL1WM7SHJvzUNpN4oNG9QY",
  "key29": "2MygngY1BzBZDLY1Rz5TdqYJou75QUFP9DFw7ZX7HX3UAzxFoh7QmQKfpqfu67STnc3EcJxmqzJNLdJjDscje8sC",
  "key30": "5h9YhWS6KSzSo38a6UjmiPpux4LstiU2VgjBrRSn7USVgRAnjcHE35VGfHGeiznJFqascgYgyqX5691T7T13XBoo",
  "key31": "3UjFig4E3tyHHmLncDHgCh8bGArLWSxe5Y65f9FNeizHsCMLTXh6Mf2ZS73eeEnwLVkVjfJYfPTUZHsLDDUyV76C",
  "key32": "CvDaaSR66qpi3kxnRDrS9HkwFVDKJ1p86bPAVhgiuQwZYN7E3dc51JqWdJaz9K613g4KhB1NUv5nca3pckSUN5q",
  "key33": "zBBtJMk2RL4xj498qsTvMJuuhsBHNBNkReBMKLQ5Df4j7VyWXdEGiG84pVrrL8serzHyQQLMuYpjR3RTqhekoAo",
  "key34": "2nxNttsgbsKpMSahMKJhFfP4USr2yZYVsxBtUdJNHb4GhBFbXMrxRKfZGqoNUjhoKBjZfXgrgpPkYCXpmLRZCFYK",
  "key35": "4QzDQsDZhgv9QbokM3GHARzyyzrb9da84Fc4aYHtsHoYkmq8a26Zrx3vEEqc54sUkYqDQyRqsvuSfeyoxxVFzap7",
  "key36": "5AxqQwGNEspfWDkpo2zhEP9FixrMHthx3L7riLzGuANNKDsQeFQ45nD3ZVfCdabZRUr13tUzsoGZ5JVdeMsLiukN",
  "key37": "5KSML1kcHuxUEz8ZpKYA2Wwez1ju4MPgL5gNSu73PCmF2mJ5N6Z5kLzXifGAgRPjoEFGZeYEWhBbBW1bvTTsfTZ2",
  "key38": "4Fys4HMje2r6q2hhxGbLYFAUTaoehDhAzU55UTsQcDF1sroC5FrfusECWmufeC84CHy3ucPNxT7QNJGddnugoPLe"
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
