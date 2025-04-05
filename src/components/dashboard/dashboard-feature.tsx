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
    "3bHfBLuw3xSnFp5neqKvEXDdm8ybiP8QMEj76LhpBdDjr4APAev7eGJgDDtmNvYNLnZhrBuhE1RAHpoXw4Az99BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z9E2k8dk4xg5euVUtazgyXWtzxe1VMBY4SXpcouGed36Q5Dkrt1R4ZfFt2fp3ojtskB4vdxqJ2SQC1r2ZJku3SC",
  "key1": "4WYMova9CYQkotpj8GrSXCoM4mG7nkoq3XAJvqMsqdqcsxhxv33pSz4yLcAhgKvEdANZpFR2q7anWGmDGJEr8uAi",
  "key2": "2udqXTdLuuVfjyhvifxGWCK81Bnw6H29JX4pYXdTyPVXmVWUPqdSyS5VpsUhkBsXRDmrzcKrdPLQAGJJHVK8apW1",
  "key3": "2hdFA6HkySuRtC3b1rySUGcuCjtDUBJnNB8gLRqDBTLzUDJhKp8hF6xdrYLuYUUHVdBYM2xBFTC9RDqLxMGdPqpA",
  "key4": "5thGHTwSfJJvgrEtyS5g2hVxXgoWbtd2SkBbHome5Toe9fYpmxoBCD6BoESKMrcSHZv1e2NszV8yZDWqgT76MKr",
  "key5": "3H76aZgmzWxUTSkSoc8arQ1AMY2Ra4YJ2oDCpsSzP1aUWv7CNnMFWz1dhkfLrshuKdBKbyDCx36sMiky7vJEsh3k",
  "key6": "3Wcgx3FkwdynbBn37RjYnzpYUa4Ux1UhaTiFds8HuX29VZiodHb6KYXaRDBg8dsC9UfRWHHLwyCU9yeL8dVEWF7Z",
  "key7": "jS9w2yPZjBuUatz245vA6urzXb97ecHFVyfcGRMwN9sNWZJ8jkaBmeAn8QGh36sWu72ZJhtyFbStKcrpnJH69ma",
  "key8": "56wTJk77rzkTZFsvsKwgsegUxJhcHgVBB3qofpW9p97JX6VmLp2zh2MsKAuy73XC1R5JuHUidhNk6swcewk3BMUU",
  "key9": "5j6rXS9B3JiMkjM6AiQS5hjiRnwXkVmSdym5KjTyB7fmY8SogXMGabE63pgrySGQrJh3mzmfi5sgyBNd5tDzR3CM",
  "key10": "2MUVGaeyg8moXqhA3wrGR75mdHH3dwgYa8rgakiiNHvVW4bCkJs6iCyu3fikn9wcCEVmrRzz9A7gZx5REGpZ9Jos",
  "key11": "5FZEgUA9cWc4YAaLLa37hnYD7116Rev33DK8NEGmcVNZcwGGV2EbUX2hPzg1VDhUVZny1Sfsb5yCy992Xvo6Cdac",
  "key12": "4V42cqu9952DmzPCyg4aFKhJCqbeBS9gnkPLprHQUfTmxTTRCCo9DFSfmBxDwidGsoRrK1mb1CLC31AFbiX4kQER",
  "key13": "5uHSpFCDJq7wqcFEbSyS66vNCRMeiz152rgZzZqitwRKikHA14PHNeNg19NuAXuHf54YC9w39kMT6ZEdaDLw1xiv",
  "key14": "3FEQqrsJMKvo96WMkx2k94qxjTSnavE8zqWzy3A3RA7evBHADVy7BfTJvb9THV9tgE8z5X4PuNjm3gYkpfHzZAob",
  "key15": "65JR8BezaC4E3Dphue1QH4YWrVUeiQ9RjDWDgnS8u9G7wjsz5YJaL8w3FgYKiR8aPXbeXWVoJCVzTBnFcK4tq9L4",
  "key16": "38EcXHud6F3t2KMFyt8rcp4fEQAE9BMYcRnH57NqDCU22J2StMWPACwKJS2qXDj42D7uMYjA6NUiSzVKPzs8pLrC",
  "key17": "4DRTXhSW6Sw9yKaR57HN1BS729yqErQEnSavCAeeaswjpd69xRwYpLUBocy7hV6ZYg8toXxJmvYet4AeYyCt3Qmg",
  "key18": "4SrPqkgFNu9z7uA35zH3JLHrRdyrTqwHYVQZK7JpZGjgvp1CUAaLVC4rQ1L2YR73hSehtEnoQSP2FUEtTndsRkca",
  "key19": "2wV37yhK3UBSgqKTWTn4ZV6Sz4ahgwzdTBfJqE7ouXjbE5FMucxVyiKfPYHYKXoj9wzMM6BCYG71wpoiMqHhG7VZ",
  "key20": "2W5UMGJAcvxmaNPLXmRET6akVSPJNUrLKCsTvfhVfZydSS8oPkXJd69FWmzBVSJmpBwQtE8w9ptzte5eUezRZ2tT",
  "key21": "66hmf57i2em1BT8a9t32XkWSMhLE4kPAWXj7L3cqGz58T1s8TZozvuc5GeZcmWLXsHhxiQQRJqzcoinWFXMkpWu9",
  "key22": "PqwViMPQBj4TkWZ4ben2EQ3cJ14FWNbF56zMQffHFbRcfayyP4QxuSc5E1vsYcmAdWJtRvNV6vtuVzyxnbzapuG",
  "key23": "5ZJipM3c2ypCrkL5i4sdgbWyT1ocafKHgywRwLbDP6BgAJFHj5mpHbzs8XMNeCRys6grPJsGT9cdvYLDt4Lnx7ih",
  "key24": "e8W3t8nV17UKtBifTYUSupcfRDKM9JTjZugxS1s1owD2kEet5TsCcq7DxD4U1Hg5G2EpqMDkRP2PBC2m3Gd3mf6",
  "key25": "3XWqMT3C1D8vDeQibzJHfMtzG9bJB8v84AvAVSjhfxcewXhGhmgz6cymAyvyAmRmssitbskU3tk3QPtLopFgUDnS",
  "key26": "5gHNfx9fZomFvLrBrtZz3pQrUGUuA7Q8ASE2HGsR6pDdM1qiBfSrQFHKt3DyGNm5EoeYcZjNMLvoAkbRtwTBxUVb",
  "key27": "4nSZfzGRwHbnkYkTc2oRes7KBoyxx3ajPW3hazjnMHK3jzgBztWUrYm5uuJu1147oNXr5WUdowowE1wUZf8KghLX",
  "key28": "bcFSFuaXddFL477LmtxnvXdaoxFJyD6TQNixHyGqE1Z557kj7AeWwchPRij5n7gcQYXmvNMSkrV4enEVoKyzvnD",
  "key29": "5zgd8ZGpX7zbpN1RuvAkwYnXN2P842JJBqtZyap6HUPUhDPfprFoC2AkBGq4e27bN6g25qj8YDa2hGRbvVkXWUMJ",
  "key30": "2J2WqHUqwpCWzVfueEmWxA5YcwNXAsMdJ4tvZVMMUGg1NcvNPcvtX934MWytiTbF7zbig9CoqZcNDaQ7ZT6XSJjs"
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
