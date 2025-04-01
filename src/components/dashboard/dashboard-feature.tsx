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
    "MfDt9XKB5b3BbR3QftvE2tdKFxni7gHo2utacDWMCRcnNAxQoCquYpVpoJkGUaNoT2LwMvZz9kbqG2R6bbXjLTY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GAT4QspgcaUUQDqwA3xSD5x8hkazCJShfc2GRqYmaYQQevo3bfSnghVDdFQ5EAZCDjxZBA7Do3RUqREzqrCcsmE",
  "key1": "3nWU1CZZoosGjDga5WxLaFyK78wwNFLaeN1kERs75P1H6dPvJwgy7jj7Kia2ef3bxA6CoYD8DrG3w9wnYKP6eMs4",
  "key2": "4hp7rpXG34Nc9astx85gMPGwjjGC18gWUJWvSqU16q6dJVFwVmw2bdfQ1HDK9uAmFwhtqXTPsZDN8Sd3vew5hWog",
  "key3": "2LqHCcRqZfT8gs32yZYbEjpL8iYjeevS6qabgmSw1xuNCd7zyuwKmMjNgMTwApELurHn6DYEorDaRKuFJssikf87",
  "key4": "4aMGL7UoiAet3Utq7GbFwvHfA6NvH2agjjgLjGzH8Mrngs8hkGhd1gLZuTfc4FkH7EGWPXMyWaLfLX2MSYNaCseG",
  "key5": "4cmD5Nk6VfvSEtUXhaPdXfynmVcPJWueZBZDGEN5JXwN5TXGM6wuFUxzKpGBq3Y2n3zcDTkMbpHxWSDHsDT6f2tT",
  "key6": "3PHk1pfVxeUJixZHW8YksCSXoaboMPqM2thecozbATT3RNZWRny4Af5kX2oZe6ZSW1St8GptmoJ5LYBviUciGFvS",
  "key7": "25FGCsoNEuzz4FvU2axX7nW224siCu8j9qzuWpkm6MhaVYPgZ43vFuFzMpcgPwhPaF5NxmQhHzn6wemEFbdtWvg8",
  "key8": "2gL1RbZpH9jKTQ5UwsuRB1e9Ls7bajN3KXBfztzZoqHJ6XQwX8RH6BM3QwhsCCUTCH7C1zCLtYyckH1k4TtK23AG",
  "key9": "2HKKaJCiJe3rkLYJ3n2GteaBTTKNub8ZLHAVHfRDmpvxGMMDyN8wWhAwXdfwor1VSz5rDQ6RuRwdLCBLx63j1Tjt",
  "key10": "2Tm5YxCYLvvuKZPPw6rYyqSEDWbDukE4YZFVAKYU2LdUBL35JfU4ZHjjzPDthdNcQnh7NKenvh3T559NuZSB5Znw",
  "key11": "99Dr7vcM9n9mvqMf386PnGxQLsHxPzT7rxNR76M1DCw7r7mQa4tbgm22d4S8zxrZGF8iyrPwPUdpbDt1joLShiQ",
  "key12": "4dAzevdAcmJ3Jzz8VuE8W67RGhPTwLRCXbdDXYq2WBCSAJDR4hqNhTiJMbdzRUXcqb2r3TimeSL67jtBDBryJrxu",
  "key13": "4htrG967wSjzBJ772vP1dpYT8NtKsKtEoqM6iUTC7CpEHb8aFK8tJoq2NYgQcoLGp3Drgv1RGuAuZNiZiodg9sgi",
  "key14": "63axyjihKmJ3YNXcZoCxmKWfePuoU8vdbtT7wd7QHYwgREgMAETV6pPaQiZ6GoqcTuk9Ec4pSkPGd8arn6cF89bK",
  "key15": "RN4M6PBYYUasCX3gtNezqiofQru5nEQ832HQ1VH9gg4ZyQ35N3VErhjyzwvPyYMwLERdVMRiaituSspykSfS3uP",
  "key16": "5cbaSg4q7hVpeYgAyHofU1yJippjhEdgvMjQw48PrqjxQrXux8fwScCiRAez5grjDmtw8ZUCV7G5bYgmjJ7VzmQq",
  "key17": "58j5BdkA7sRfCpo1Zo13VKdshkhHYRyxp3B2BLhoy7P5MCspEk5BMzzRxUi3fm7VwaLev1abPKTdUHFmCH6jqDmq",
  "key18": "5YZtEeFvXDBqttpcyJSD8B1MoAqm5Gs2pUYvRLxhH8gQvWCgz34htVjuEkXo8vLtcKkTAExHvv9V8xBmRoeXuHub",
  "key19": "4yRTSyv8etjX7fYv5EpaavaGkyPesitZ5MWMKwtBdd1p7Jwb47uGMtaNGD4QFPSo2ufTQjfD3toPUVL14ozeRokx",
  "key20": "5dYWNTefqjpyjFyvoSAGVTeYZuvv1TCB2UK4taGiM6xx5pTEGhUAa7U9Uz5CBe3aH9iqT7mnMdL3hz9Fh7DKaxQB",
  "key21": "4xAQgenJvsnYVdG5nAtcn14D7B5JSycipiAjNMS4UzxfGazxKPcgqnzGsh9DQyEgwS6pozQQAf2YipN7eFXrPf6",
  "key22": "5EFBLGquH7iZvgHVmijqTu4cnpHDmwEvPhHhmtsixdeD7rA9j4cwY5tk8CpajkvTLne9j5sTRuNX8vkpiUQY9V6K",
  "key23": "3nAFHhCXrGCUXGdk5NFznN6atWr5MZ1AzmVdmLVXyPp2U9nXxH6mVoFPvEeJUttfrDDMkJ3hM8hRkRdbhS97SECq",
  "key24": "4bBHHVRZmnL6U2LKxYUC7Uz68qzSJNnFGWQC31tviLC6pUa2wrt9EndZzgST6bB1Lz3F3JFWVugkc44YUfVNnkk4",
  "key25": "44GhVpMZfvkvMJDNUgjYu3CLAmL3co4S7L1oyECaJ1bSqM78792ccBZjxNJ5uERDKA2fwS63QN8dUSDMgeJbnuwd",
  "key26": "5wVmLoDg9Pvd16P3ptnMq2JL1hS2oTSTSDGozQatfFt3LGFxGbSbhhzf7QiG6kHuEf26RpBqQtj8QP7W3HNPDb6o",
  "key27": "3WmJ8SKSFAfYQaeKVbmFoPTVoonjz767Si7xWSE8jLFSk8numA9iL5t1KYitp7JGgqmf2RAZX3yqgf9nYMHz9QA3",
  "key28": "2CPZJ6ZVXAmPjrz6gH398YyoXred4Th3JyerXZt2Dbf6FB2qjSbm26viPoAvjH7VU3oAbfnYUKshKLZkcH4pWJwn",
  "key29": "4xvFx8WoWq7SWUJ6kLEQyRjJg54w7z3jxc7dNn5xpTqjLHvZtfu8R1nVY3FeCdH95P4ddm5CwbytmHFg15yXa6wT"
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
