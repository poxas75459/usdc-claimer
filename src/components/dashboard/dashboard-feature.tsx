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
    "3sKpa4sEH3RetM2SiKd2MwWAQLAXSoJ9K1n8Wt5sfFsW225eg8tQLKZPy1car8GpJ3iyAWUzqG9FEaZEVafixTPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sFfzvdtETQXVRwWg2BWrreXMQEMUNJ3NAFefyQu44bwnV4F3RYMtbNNPJMr4p74ahgzVUgnhus2zu8Ud9oFAxNx",
  "key1": "2sd9kQTM48KqSc73zV2aKq6v1dyF6szzAMihqyZvKsz8b3ioCgy8xrenPKRaZmdX3o2LM1BsE672JAHzhHSnWSkP",
  "key2": "2xyaj6VSPCpQqSxqGCYuqLmdxF3QLkxgMGFs7YY4PmbtPGnaNvTHnnSgjiS3JjUkLEKP62MW7asP6qYX7ztJGrzp",
  "key3": "6LowuGQy8x3QjWFYhfJpjV5En7LeAvAVbcxCaW7jnUEcVAhraaYmemwF7qTmCgjqjfZEFXVEqvyfTNMNwaynxBu",
  "key4": "5ASBktzuAKFDCRkpr933FpAzjq6fWs3GLmBj34Kk4cHMSK59Gc3Ua7TXDSGBkfcBYLBR2XEzHJFiDZWnK3cdPKhQ",
  "key5": "XUyANsnYtNUycDQ6swiJR1Lhq3dsK3koM4TNEkwspapfy31pduYSDdm3K2M7xe2F9qSCVTsWvDhY9KkNCAYd3uB",
  "key6": "fM5HotBjb7Z3BP8vbKxtL9bFw7MNoumtJ9y4LAQSds9WDPxVgEiix7VdwpQ8WgVmSeu5xNUToAKoxKbVpXTQnE4",
  "key7": "33aqAGrkYSCsrSNFdXCdVPhXVowTrHVC3dwVSH8cWi3ziRH5ai3GjEmwpT3WNQpQ5hGxnwQodiEZ4aZEJDGzNw8r",
  "key8": "63ZWPansn2x16cAuYVEKC16Wf8kX4ajtvL4d5qj3U21Ni6dVmKeH2VpCtbXdcEWphJoegBdTgHC1dUTNY82o8syf",
  "key9": "4oVYjojcvE8SH9RaoQcDp1WWp9Xp1R74mkzNucL61QXdvtMjqKwqH6RbLVj2F5wsDFTRCCFgppmvoGexd3J76Qd5",
  "key10": "Ztz2A7HZeNSvcSK6vK3LHnTv3MwUfQJ697c3Bo65PV6ggia2uAgjRicZucqLq5gVaSYvWa91nD3SrKRGpikBf7o",
  "key11": "5SD4PE1eD5LqR6VzXD6SqHakRms3acihzLbkN22cbAcbjzTRZiPqoi8AS4EG5jfibKKN9oq18szbPvLqwaMbABpo",
  "key12": "4KjQt6yigiit7rrPWrffuPbisRZoCgkoUGH4KAMpwJPsV2eXwdv5BUpNRF9PetXoy1wFv6M8rmCuerxumVXghRTX",
  "key13": "XjV7525rEvsLFtjvKb3FhWGz37ACU8bbpieAWXinWnJR9L4EXrqAF3Gd3U1TsRRqmcjt4ngAacZ4t8hSVveUYAw",
  "key14": "4Ce8sPRZv4RuU65us7HygRPiuqAo9ZpwXZjs1Vj7w55RQd5KGLAYy1bMNaPPKAUWKg4eXDyef9kcYGfvuTVk5zQ8",
  "key15": "3uYBdg8ru62gzgSK8m4UpQHQzKje7NBrNoERMZ3f1gM1yDzB6JDZhpj8JT2UKRcdKYLmCKnL6mFJDuGcYeL6RAJh",
  "key16": "3RFdADdVDkZKASf5ChhhpFUBMdSz3VVQce6PxqMiCrKd6XrANyWgFH7WkQ4BN9LW7g5WQf513sKzFfcfb56DmSQ9",
  "key17": "4N53Bnowbs9HU2vofU6ERGt7558rPikwxuj7bQ6RFdpQnwook8ouudCiWL5oRnaYFAdmHYzUXX6V2LqPz9RHFtsf",
  "key18": "EqrEWKyvBrhC2ibLk5Qm8RvfoFfRVhBUJeTMNy6BAAL18pheLkE1zAZvvBxtvHpFPpWwEp1e8GjfcW5Uj2f6FEv",
  "key19": "ZLbPdM11Uzv55rQQh5mScYT2VqCsvvKZiitY1osz8BRNWv2Aw7n7j8MaCoCdSMZQYucBRvYaj7Yr49dAYLTqc56",
  "key20": "Zy48mQ2NzVarHveRuzufkGid7fdK1BqZv7eisMkDRvE2QBYbfxjyoNnQFjJanUPp15CJCuwk7LywcQL8ug5kF2z",
  "key21": "2yKuLCE1PsExkCt9HnnzDqQoiYtn3kf9ibmknaPLnNL6T4CqUnFZmRpXEofXEh2FN2u7Sd4yN2jByxYZUWwcUvkm",
  "key22": "48r6xgnNgShg93J6L4C6nidvK1zLYg8RibmGrRSpzE5Ws35d356No6JAggH9qi2xHvY2Cf45qhA7Fsm5RfwrrBom",
  "key23": "4bp8R2Z8xC1J6vrJLAvpWDLgDC2hwPiysRCjXDCuqHNV4duLdXJRoPd1XDkv312CUQw65v7VFV4EfcZfnZwA172w",
  "key24": "572TKBcwbnibaAVd45YdxSMbowcJgvnEi9o4R4Go3H6ESz6PzmDQNEjJyf4n61MB1obxRzbZCyGVSeYnM9sPao5F",
  "key25": "53Dqmx2Ltuj37e2eyrXx1igF8MJcuMemMFPgThG3bn4HU42MDxNT8qVbk7bMTz7QMHjKBdi6PRbMdAq9ky7xJNqV",
  "key26": "5kLJXkmDNzZxSahGk7Tt645mSQe1oVfzxRYnymuSNjUXzSH9VZTC1RbJJiY4DKAqs6mHGKztKuR1eTmKsA4eiyBL",
  "key27": "5UZxtNcQym5ZfmxD6o1K12twgHZ4UER5n31LRy8Fu98x4qGfhP2rArAGmbeWVMxikKLjXiwsKnwyQyVU3qGJjxdm",
  "key28": "16dCewzt5KGdMGUtsdchsuJQ7p57WixHWQcZzueqqC5azRym1Hcs3RbVwaTaY6NCMRqpWWZqKk1tWpcbQZYHtxY",
  "key29": "5hJk2mjvinzDBr6MKsjXUb3FaTw27w38xU6spWWNcyEUG2pFfWWyz3UGiXuT1RNiw97fUGkr6VdyMGkjkSN1sDg2",
  "key30": "vqgQe2u1ChS8nA9p6pM6bU4sjc1how64xyaQJwyA7HsDWR2QbvFKPRkgoZh6cuTY7CaQKSC6VbSp7hofm4bTuCK",
  "key31": "3qYNhMEKX2mpqXsc8nmTjvohbCooaWZaAcYdvHeVovsaforNVVZN3UbVpmG4qNAeR8gu3CixPM8WtcgUsL9RDdG3",
  "key32": "2pivmghmNAXRxjrDyc9sm3N7mBpjiwVUcDWBVJKnLu252PcQ1iGYZzA9cXLmHTptXxfHahT1Hteh1gkwF9awRaiS",
  "key33": "26sN98KsGe6MmjE7vT8Rs8tRkHYvwxKgDC4YAFuFg1JQFXi4izeAqBZGsF99RDPcbK5jrtKHdiCbQPX8tzrwesXw"
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
