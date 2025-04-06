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
    "4w6YPCT4fEgUGvoBhCBh1V7GkSE6LSGrH5Y4cSMq8GnyNynkxs6qiquuQCZGJpokFVLdmBqug5mvghvsYSwmuRU5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EqBPJJw15PyMiDxgdBepyaLApzyiZGLET4WHWPYZh4GF1xSteNkdmyqAkC6qWtBmimYsXYENJxTMHoGP8G1aWq6",
  "key1": "27NgLBXPPYfY5zyDgFCX2F6g6rS5NdHX7GyHd3su5DfF5ioJDQ8bbSiTiPZucqM5TgPbRPwbVvfhQGokDLG6vURe",
  "key2": "5BYVwqbTezab1XnWK9qQfewK7BrWpu9Yy1JQ2rXy9D2xBasVu5pEeeGxwFRX6Zn67QnyiNdo4CzgmuhrmG75evoB",
  "key3": "47XcQHCALmzDhKfrP4gJYmpW7St1Nv7D88MiKVRjJtajXJmw9NKzYsq9Me8wV45H57yzF9bHsRjFUwEzbTwCeJYs",
  "key4": "66Xpka5oUMr8cnkX4MkzSZqKpwvd5n5sMtrMi9EwyG2yL8A7xXxNtDAjJQ2qsZVcHU2gVQ5xsXvYWwoWDYJxYdbE",
  "key5": "64aj9tBsrTswTPS4myapcSKeBhBzgUEzL46YzoD4MsaMHVm1gAcEDbp9kNtiWyj8sapPyrwQeCMn6AJ9ECqLPjkF",
  "key6": "KoULu6qJUNhxuyUmDBmMjD39uQasbj3QEnNhu5WvAq9XvysjuRnZF2Ls6GK8r155YFAgoKFvfM86mmnuUp8GNY9",
  "key7": "4feU3aYCcrUYSS6WQR3TDAGW7Xoipx6rzg8tve1zVzzEvf77SekAPfAwQMG6yjBbb67KZPN92i7bhE9eaXX5ziW",
  "key8": "LnF66VK3kiwtvuoTsEiXYBu2Lz21rAvMGYWME3omtKNNtZ5ESm6Kd9D2Eyt6AF3t7T9x1aUqUcW6eMhMaMwA2Dc",
  "key9": "3d9AJ1SZzu6vy9g8zrghEzxzPquM3smZvZUbfdHbY88VedAnnwmQwoHcgKCzpJBqTQWsgNhPLmhnJpgaySZvhrt2",
  "key10": "5wBjVgkp4w2cPxD2sMe7t68cjaxadHVYcdrcomPo28M74Bw6nh4gx8FNSTBr5RjMzJe9LANaYvBg6uTVsUZgrDZt",
  "key11": "3kZQXFUA1MzqTrYtgcxompnFA3zaijwbyYLHSs7yNnuFsCnuU6rYsxdcxP9soDssGMhLK3k89MadhPf8dkpGsKpM",
  "key12": "BV4ybKE6S5aN4aKWNYrdgHGUudY2uvGCAw3SbJeHoedxb3q9XH2PaurS2cpCiuhQByRjbT2WHXAePCtDa1A9W2Y",
  "key13": "2xRPtetqvKhWQjM2vyxqbWoJkNxXVmAfRxq96sSZaCpBYfkjDRL5tmkESJgE5zp4HHSCqdVERpQvNp2MBQkCP5mG",
  "key14": "5B6cvYVZmrc8fLGUHAznpsGKhryCGtyiBgHoGjFA1fJGFHJgcjoU8yPKPhDxZ2XbtUQoeBJy9tY2KuQFzcg3zPuW",
  "key15": "QBjEGB4RS87jquJhLv8xFtT9n97GtwnM72JLMotAUgsRR8xUgUdYmHXEpZMYSz5X4kLhns3eUCzSqV1AQ5mBunL",
  "key16": "3aaJXagpaKbeC2VyqnFKMqAeHPtw9ajmQ7hv96smek3X7a7NEwAw7kfZBfQvJKV6my2t3NWKomQgunBZRwhNC48",
  "key17": "56kZJZqK36tCNz99d5GHaH6pWQneYRWqADdC5hT9oJBtDPsgF7wiRqXuZG24eVCULd4cgNNMKwFPg23DvkrMoLyT",
  "key18": "PgS8VV1XCtVaKzBaiwxA4vjRPWXpgjYW4vFjHARFeVqSJJhKA1Z6DxmSuazGZgmQ4s7z1Zrp3S2wr2u2fF2qhxp",
  "key19": "4VRS68m4XqsVGZkYFGwzih8Qvoi9fu6PPN5B61Zx3AsMLf7M6eJXtSKxLTgvUaGs1kY96bCTcMK7G7e1BxoYfvwC",
  "key20": "5JnG2k2PVthG27iKRyER5Gph65rJ56r5CyycWyTk2W3F162KLLr39Pqf3m1LyGEzM21m7S6grEDrAvVHLJgNYsUa",
  "key21": "4jpSfusF4upqPSiE9wyX7XPrGjWZGBbLdWAejfKrrxZE5y1HAPUZZBAW84Y23XBndrGB4AsDAf6hQkLYZy3Jy741",
  "key22": "672zbiq8QN1z6tMqK9H2zBC1AL7ZcoGBD9u8GU529n5CBh7FVb6f8N373QmFDaL4KeUaEqtw7AJ31rgP2yageKb9",
  "key23": "43Xbn9sKUndzvUuPr7exBXXRdV2tEPkG7NSEWSaqj3NNigqYjVRZwHNitiTyJ5fGrGq1Uy3pdsfD9GSt9cbAxmvx",
  "key24": "3PxzQjfkcomtbrktqsCSKt1VfFz7H1QWgrdS344feJbXkhVvkYqn6YJYHDyjJnipHCyfmBFhEWh1qbZMgmyTd2gf",
  "key25": "B6McFeuAdWfRmTKbFAL8Mmd8MarS46mRaPdSSnoaJPvkhWMpKHNNTskVJNXtWLiBtekmQYwgXnuTujVfq6zEEAb",
  "key26": "2wwi8XBdNWgtJJBdbvgZomZUuhwouzEJCis81dBpMixYfh3Jq1gmqCybnzhLywPPhKuJzEMibj4DUM5ZicRGhUHx"
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
