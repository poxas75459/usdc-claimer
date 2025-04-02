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
    "5fY9iQuj8KecdnzqNak6jFo1FKKLQC6yQg7PrDQioy1mzo73kR3HcZivZVq5h7E5V7jsMyEoapaK5we5sxv1XA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rksB3jwPGn1MNCrKVQDFTNyfX9G34GiAJNmu3t5NuLudkpKv4fEJ4D83kqY3KiyomL9bEthJyg6E7vPGAueoK1K",
  "key1": "Eyx4q1zqZMyysS8uh54ijiwoLehcJoC9idtoBQq31dtrVaNN4FuLSQMXxiSV7ySbF3yqQn3U5YS9pNvmeLN33rc",
  "key2": "3DeiFhigyWYg4y673dEu4ktpyDxWVMGEkCkdTu5WL1WPPeQdc8Ho18R751G3BkUyYuybL9FKgB8wx9XpgWzHPm3S",
  "key3": "514F8E2fkYAtx5bdUopeacpoXsmtZxFFBN2DLNyLm4NpeWcNjR8Xvx36tisbqb1UyYVhaC6DgZHfgjHi6tWFbFww",
  "key4": "4nJBAASX8p6rutgEgwCrXzKx5QcqZpsThS8iRognu3TwqaoK8eteRntDdJJwcbJ36pLy2SmMH2YtJu4YeJhX5e1b",
  "key5": "4hT9hxYjuXCcB4mR1xaV5i4BGtPGQ6prF56RNUtZyyiJa5rZfVRUkbay12mLo4XAo1MxhmB1LS5gVvUBVXcnajjG",
  "key6": "3HbkQZY9T5NCkjfKL5q9oFtC9qmdYS8wLhdEJV5BUCpUAebuiiukC9FvhJhfiCSvTKn2MwZjh9c25kACnxJzMHjG",
  "key7": "56WkTbqZSMG24SMTVKYuYd3kxT8oLnKLPMmX1RNyu4RNKC21VxiyXY9Mbnm75KfGwMdNhbJ5d56pM9L3GB7R2e6S",
  "key8": "nLi8axvnDvTNGq6Afy91C2g8EbkyVP1oM1cDSvtE7WykcFKbcuoBjruJPZXiP7maWHeubwgBzdT4wPV9xGcMAMz",
  "key9": "2G859dS1QBwUr3C9fuqT94jv2QGjRKYx1Md7dpjAkCtVVQDuvmbwbUTzeoNDFmJkr3P8C1piJ6FbHShWztAViXhb",
  "key10": "3NPontFsQUs79vd1Fi87zNJPeXf11mwmyVhdToNP5Mfw9KoqRBwYK6CDJoi1toti8PfbUaSGLJqGfrSiw8gsnGaJ",
  "key11": "5TokjQuxSjiSpVigTzKh2gv3ZsFQMx8ZVzfcfA9ZF1S7HHcBgJNJb2DuSrYo44SirdDqw9eTJhJiVVC7typwfuHo",
  "key12": "TjedNTa71cZrp1bevczCjLoZVZ7WLBujoTHwbhuGAbjYEDpdgF2BP91UGAqhJEKUQNa85HXxWCYvavKBRpqcUgF",
  "key13": "2UtvCJEprHMej7mHqQ47hafArNCiyfEsC8ZGGq7fep8r33WL6VCGDncN79ryFf6gD47LHuxcxfzufEioqafuQD2C",
  "key14": "C1bh7Cr2t69JaSbzjkHDXMxom2RHbFx8xSNZceRs3N6avZ2uFYRWUBVLM47oPyG1KiRoNja8XBC3CAVLJqdLaNb",
  "key15": "3ifgEvEDPE872ee23EvufpkxoScNv8aF9cgtozT1zE7mEkLw5rYdWfChmgRhyLX4vPWYskepj529Yr8Y5QJfZo9s",
  "key16": "4zLYHEFDPEQEz13kBS2KZZ6TMEmnwNT4VPFfaqGLxNkXchWGJnY5YLLjUAhJjV6TezqHKsJNFH7XJbvH9dPZSbuX",
  "key17": "531YJXXJMQ77wT18Wnva191qyvuX8f2yPd2qHHjD1CaVPFcftkCBaTmdbhMVDTd2z7hcYHYNvNLXWSov6kXvY5h8",
  "key18": "5tiRaoz3QvCdoFxGETk9WkZfm1bL1FJVAiU9LbneY4ERFH1FS2qzqDgtsaYV3yxaHp7yRSGQ9QYKszVS2V7nwPYe",
  "key19": "mnNQKXWjtAjEV7TE4WmAuZXNo6jUsYQUpRiZJm5e1uqGTs6bw1AT48Nm3zk8tDUc5RtP1gHL4e34Bu5NYWMJpio",
  "key20": "2nWfYKzLmVwmMrHfXzGgkTvtT7BtScMenBrwNdF4wubPrRypepE22s6cr9Hd7Lke7y1ubUrrsCAZEhn6puzBzb4C",
  "key21": "27qGQahYzxxofXDnjrBriAMsyk1jYS1ouLLMobwEMRSVJzS1wB1qYGy7mmDZ5R2jLWuSENo7rPVoJuYcgCj6gkLd",
  "key22": "3rGV2Vi6kTZ2Ee5Eqk94XeNgyiQmjropHevukDTjRvLzcZE6NQwzKkm6SdvXTLi6DTEaqb2zFjo6MTeLTP6kVGT2",
  "key23": "3tGVcQRZ3LstvwhBfuffSSNTt3SQy3RYtaTepnBa2eVkk5jWSN3YJN5CA83WEPxwgeHVgm9Pffswd29GNgwqwRBZ",
  "key24": "Gx3EhvchkmbJdf2pye1jrkV9YuLgEmD7ed7pZnTboEdwjbitEx5eJEeJBdhEfxGiquG4C83Se4rrCySG2yasJpy",
  "key25": "ACfGBvPnFHygJiXip15PcuE9LSK6ZepXUk4R8wAbDvfMnv3MFBiJbo5N86oLUdY4wwf2YdcfxTMaofDqwHXuWrc",
  "key26": "3KF24SjKVaYeB57kJVe4K7s9WnnLuTKnb3tLa3zbZ8MuNxKbmbmKmQNadLyezvKjes7FRPFG4tkaggGGL6GkZd8n",
  "key27": "N8scaHtaNn2pH1UmdC5ZpJhsmonNpK72TcFJVjEHLSDUrnLtKLKY2LNEtZDMkh9xzM7R9qUrATybHGhUgCnjBCM"
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
