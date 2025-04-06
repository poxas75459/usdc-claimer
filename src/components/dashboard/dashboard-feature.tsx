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
    "2ELGQ8HX1QCd7i6ppR9KcmfsSny52265d9BySmZCM5tgqd1xV9rKdno52ysSRu5DKeH8Y2MKDjUkPrqqRsXD3gbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x6Fgz7UQYfPAtLEJ73RpMJgYCymrsrssRXx2nzQX4qLxy3zrFd7fMYA1rMSi6nzi2TNGQVLK5yjSdLezcdndTro",
  "key1": "5zmyEp6xbta4EEi9b5qRpCMrB5kDAQrgppKXQs7D35G8K8FJzBvZG7SWUrrEHB2emuNa89AxaTCmJZawAs1NEUpC",
  "key2": "5JMRhVk1Ti56qmTkqbUTzs8KCDZZzaENzHTUr1YiNWTP58ZqUsQ6sryy9qWBpNuny1u6osBU3VueKsoeadhcXPxz",
  "key3": "5H9W7oVPpiFjMgubrN9e2Uftg8Sawag8x2ViAcKBtD5NmTx2Sbm4vrhBU8SzaV93Gj3wvJyaqejW5n6QJXdCiNwd",
  "key4": "2r4itkGGsukpXuLG6hPE7ziYpdNw38T7kZMmZhdhNkqx6giD2s9XTEZ2uNyDZ8kdqnYknemxtaGRQLoa19zefYKh",
  "key5": "4JNHs7aqmnwP8eaMjkrGNJiN8Z6NdzWGo3Rcit3L6iesV8sBiWw7rLywgbiiQhxJ3ZAnHMKazDPUbzgipiatdzq4",
  "key6": "sBYp984Nh7NPmkmhnu8eDdEEhamKmo45HEySaJLUVzoPqtQKn5EQc5nTGx34FeMAHqT46fE28i9i1E88FGcVoEg",
  "key7": "NiHfuxhA7MAd7Lsowo4LrjuT9Ha383vtLhQgAoMmNR3kGcxx5LBiNLYELZMxSX2GXtP4yGcztmS1CTF1toHUPub",
  "key8": "2q9T6AqHJ1FeZZxvhw8mXuNjJzHTifTVRknZ63EqpcF1KaFJrVNhujd3LVzo1UKi5WsiCkCQ2dbGBjKAD4Znmncm",
  "key9": "4swKuh8na7KZFVcUevjtEQ2iXrwq6T2bqc5be7kTwxS59Db42pkHzJfEar9fwgf3UVkyXS9uqTZXEJknGz6eWM7h",
  "key10": "4bZReseRrGHsxtcBYfhfsTuARiH6n95K7cXV32oWShSSMrnBgDW6V85ZZmC3SggcZvYAPFbyCcwLgCVdeEFNWC5z",
  "key11": "2U3ybY9B7kWVtkcHrCwW5dpbw4pgbabAmGK1bdx7pEK1t5AZeCRBSUzAwQSKdPX8PEHhURhTVGNhN2oFtQBKShXZ",
  "key12": "3BvWQJ1DRCVah8DgP65JWkkQhBMmfubqZFjQBrZjvLxaYu8uiufzNEXBPNwBypNPFgJyoGpMnC332nBKaJv8GSBs",
  "key13": "4PA6rXaGDfJUsSF6LRC9TswExLXhHsGuUsDj3VFw4wJzRvoWpG1acWUGKA72s6Dfsb1s1fmaCytfSyHwUVXyFbSe",
  "key14": "4yy8hP4AEog4QPpgDjfp9SHbLWKC6kcQGefWnwv4eNGNKsWyoSPvHBXoT6sq9oVNW8nC8kAA41YtfoEcaq8PBtxe",
  "key15": "2EKwtxApD61bgmTbh2GqUZUsH2Jg9pCtFbZsJTAFYU8v2sXDkH416BvVR2eaj4YDUGygzCzn8zGneG2sBJ8kTTgv",
  "key16": "UjBsmANTSMDMu2eBWPNCbHB9qQN6Hxuircy8g1JiPSfKFmAEQGCtze3ppj5eie4vH2uABp8PRgBz556i6JADxtH",
  "key17": "2SLKpjhzp8g4E2Cpst3vULeGXmgaMSB34edNcVEeTRwae5P33EVC8iBGbpE96wdrVG45fWyrqBC7AjZcnQruvqdS",
  "key18": "P7d5BftFNwFRwpSjfRBPi3EEtoyUbVA51mB6PKtxpg1jMhXkQyp8mPtHtRduZxdJSPFA53oMRJp7tRmGnxtLNTE",
  "key19": "4Uto6gU6rmosxWL8qEVrecFQ6i7E2Ksa3DRcA5qfCCcb1M3Sxx8hDZQykKJ8U4xX4sXuHu1ms3srn7E5RYN3ARn1",
  "key20": "3a19tVCssmS3kVSY1qxZpqbS7MwHXjmmhR1qNPj2FAnUBiQN31Ki6aMzBuVjM9K9jo7R6tQrNdr5ppMkzALRWLd7",
  "key21": "2zr8p62wH2FvsnTd23jfZobpwkm2b6LXHZHpZ1queevo96vi7bWPESTnmNtpanpuDXTHmHXHaHNDNfkY4vhxVvPT",
  "key22": "4J9X7Fk22fq6wXRBrE9EBK1632bMzXU8Kx31TXwybp3yLudjUenuEsDD7GF96SA6MkG5ZmogyRKcWM53uagdEhRn",
  "key23": "3M6bfMD9Ayx2PUdAan95mKzC1J9XfQy26JgH4eUhGte4wE3RPcnDcUtKtmnypqRmngXKtqRrzmiVoDT6b8igTBVW",
  "key24": "3zjpaJsdXMn735vQhdAoe7DH3dmLqtppA1GoUaMzCDWFqcHRirz56pvqyr1AUCKKR18bHTfYsc7mBBqGmUEUJHTr",
  "key25": "5UanPtYHGh744p8XpCUiDWggpbpCef45C4rufq8LvpktemJC4kLnCvDn7Vtq4hz1RQnNUnWKvR7ufA6MZZLLWKJU",
  "key26": "4fjNzcncExFc7H4RLDx5D91Ee91wCAj1uLJbBxZRDCkse52eWtTMo6R8wdMP41u3QoqdQUDug1eSEYKmeHdLqagN",
  "key27": "4NyzFuKfuQpf8xbQaMwbLNSN8zMrLmnuZzpZfUeLNd9BdwpyLtgt5Anq8mFPWenGDV44PL1GsBYdYiX7TaddfQNg"
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
