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
    "EUHAgK8p6HmhJMuBcKUEkxXhFP4Ngc8m46GoRy1gn4qdqjA6i9ze2hVkQttyQ9pxYR8EEXjEUTb4AETGn4pC4m4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AoEeE3uRx2VUEH5HqRmUeFen2aTcihB1UYxZ9VyiVugRKBtCXATFS8Xpdm619kYoGkqcuCnJL4SMhPCbcLJ7qcn",
  "key1": "7rZsPk5vNoUFUy4BU2nAH1c1wECoo8sciqcRm9FXbxBGhFRDz2C5vSu8AQ8QJdLKhEsBJnLZ5ngG7SrVpuggaRU",
  "key2": "4uHQNCThkwvdV3EZ4M7wsjAgZ3ATJEuNKcQQVCYeJzfXnhoUviw4k12Q66eq59DV75xpS3vrE4Ypjbv5ZjbuxyK6",
  "key3": "3i67iwgqibG5KhNJJSYCMo5au3zkfuiJLB5CnNcayCjvuMh2LqQ6mLT6ZpDhudW6c7nXoJnzEJe6qJUJWmeTekC5",
  "key4": "4BwaMzJdVnamPm46VaFaMWwWMZxoeY7ENC8tDSAPfFZhmL53yTc7ZNu7m2fUHaD4BwSeq5X9JBEKhNTXUXv3bDzo",
  "key5": "5qriRvPyGrvZGickTqoCVuNYTJUncXuVsRdxRZkbsHmoU21YLvFPemJjTQJcx7yZkuFufwLcSW3XWz9LzYpYMZND",
  "key6": "5RMvDAhRyVcPJntJNAUW89SCiMe4gmuujuLFxUL5PVyxwCtstbQnZnshCDBhFaoyTZo93Pmi9CSFp2yCbSsCEhES",
  "key7": "3b1aXPDwmoqucHLSFZU4SEeACmahFYKfxq7T3gefnrcxnbUZvpXkFwGPfabjuxzcF8uUY46rdyucG1qncTQk7hcL",
  "key8": "2LEmFDFEWRzoMMzVRCt19G9nUdmdskLtCLL5ffgq6BUfL5gb6FKNNhTib7YKuJMRL3jaYtQJ9o2o613RvW521dWU",
  "key9": "31dqggoKBTRv6ZtBP2spnPhqDeVg3D749B81oFz8mK9J3G5yRM8dpcXGhQUJi4QAvSaNftHQRwLxKsYsGRmcL22g",
  "key10": "4hnvLhW7VnCBev56sgPwa4kCQM6Kh3iT8QthhwwsPQhfsgdGmM6aptevRS5s2dmJzuqsp69LSDQF7ygEht16hnFs",
  "key11": "3hAvRy8Qhp24Y5tD1Fv7ckpkyoid61TVsBr9qg6tGDpDTzJPoBkmbd464cjLqYZfgTDSTUgGxRhMm4e2SgJqqAmB",
  "key12": "4JGKABoZrsezqu7MZsByCyW57JqQrYLk3AXgXirAb6apKzRXSxWDc98skEnBJiche9yBHxHnohqBndCqdRvWaPbm",
  "key13": "5Nys3TCaNkLCp6p3PK5MvXDSvDzXmCFbBcVfWYPe2MHHKpH7jsRXCxFhwWGzkrGTFQr1RVsZdc8neT6w96x9UdUM",
  "key14": "5P9tQtfAnxNtaQJWG5LZwRSSuGhsARWYYYehGeJEBuLdzicqSoZdvLTv4zmapR1NDtfde7c1ptt3KLp6XcmaAjPP",
  "key15": "GE3qywp1MdyQsY4HS61xnqWNmK6ZkgibunZ3aw3Db4J6iXXUuUMCsjAE9CJZUrd6rgeLTVHvosETf1LC1Q521KB",
  "key16": "11BJgPzKrbTLyh1YbJwHQ86DZeS9BjpLfGDDH9FMDa1TikKVquFNBn6wMJGtXCWW3N48J6LqwiuvvKoZbW9L5wy",
  "key17": "5FqFk6QuMvVXCQAqo6x7g2X4GxYdF35RS8avhtCtBf9c4zxs1NMuGCrE6ZGE6xqYzxaq84HvV4LF8VaaLdQhMHA8",
  "key18": "2TagcXiyUYv4aXYChs3XLGAz6U7ahMRknB7zG5es7hdzs97ap8upCUD95E9dr7ncrWWg8bdW8SvWshoXxLw7giQy",
  "key19": "57Pb1C8zvYKphbK3FbtzbgEcyEvgov2ExrY8khitMdULsFXRRRMRr18DFec9JuuzP6GSaPuidod5jUPdu94i3iSF",
  "key20": "5SHjbR1ZdADuqWtZZxyhSB774PSBRWHXXEkanQauiHu7gJ5KRYQLCzw7FhHuWyaefprdpz3yiXgEHBkifa5ioNh4",
  "key21": "3q4RWGu4c1EvYv3h2xW1w6QT2s8BLfkBtKNKHBSks7oHZynSmwVmM1R57Dc9o4x1FXrZkmLKe9ZnXG2U9ZHyj3CZ",
  "key22": "3dunj84qoHnwN9tYP6yVVNC1Rh1LweuxRZkHWinbdTnGCsPbySyiAQmnpgTbimzBiEbxZw5wGZ8RdfK5zqjujnnG",
  "key23": "5s35agY83FZZXys3yTT94934ZFd2uLpzxGDDDdUHxyHEZtWT8t8o9Fj9RZpNrFEZADSqaf5bbtGan9hsw6Lo1xQg",
  "key24": "hU2cckcCFf8ia694gDHHWxRC4zwFUqBGTtAZ6X3bNHcSfEgJPdhaXwMMmouZrc5itkGYn6QBgqNyD6JtivNCwJn",
  "key25": "k5NcZ4VYvQ8v9xPc8tHXLi31dUW7yiSBTD29xvhZPDLcxPTgYmSRDMJGuUJpTD5xBddqFkWE61JeP2VuQwr7FcM"
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
