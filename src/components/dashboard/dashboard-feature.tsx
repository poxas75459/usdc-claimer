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
    "2j7xZh2X4NqUxaW5N3iK7YuwrM2iVsVpDX1j5ZgHgwgvScWPZnPryHxXLDDkXDWEhE8w9Hsju4DLa75TKva8on8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zVQh6Sk7Nuf3t93YMmFswaquARFPJbsFqwjN7oFgGPw65iEFFspgix5noivcxo6AUSzgxep7zUQydXsSLDMkrwv",
  "key1": "NRFQ4SXoFEnVCJdjbfy4CFRXKYbGM6Nu7NYPhYwTmQKBMu5zSQLYRv5RXFK7pQdVia5BpEixk3KvWRwjrWt7gid",
  "key2": "4yLjCFZyEU86U5JzGeMas2dtwLNrWihR8vMJVHn452Sfdmwe31Z74x6P7rtKFr7UXW3JeZQAoMxBxeiSqxvZCBZC",
  "key3": "2XPB7tYmaiBWLaHnDoHoKLVoX7WLNjk6XaXMcTa8GyrBb4f1tXm8G7pPmYC2DYtwWVphce68HxQ6a5bUR6rFGpuE",
  "key4": "3Zfj4AibNrp59DB169ZrQRgNrV6AZYu8mGt12e5Rn4fwLmuaPGZc7vcPhRrZaGvYRx1x2E3Ju7QQqJwDBiFyxmZR",
  "key5": "341CRMjCZNbCcj7LjBX6McDS6SvB24pb6uqLJ1raGkmvJZHHpKoSSRyaEdqbiJpV2MhiEW3kCqAh82T9eLXxooeP",
  "key6": "45Aac4ijMHw5EYu5kd3DKkT7BFY6Rk6KLBsmPNGvB18zdCzwuZXUnsmCP1iHmYCjMwAQGUTuuZkMy77h6L5gyFAM",
  "key7": "5hG5K8YaKBEi4r7QrkQLetN91fQLNMea7UM5WzpYYpngYCRg24FpswUQfMNxRBfEe9RRctJwKQmPu4qzzGqLx6P8",
  "key8": "3k1ZPZ5yhzEUrkKn6zGf4vbGFVs5iNHed7Hj3M8Qpf3ucSV4c6rH5XM83CtTXQWpFJam6o6im2ShVdj7oGt3JDie",
  "key9": "q4jaHrRQ1kLkMDHbJjsqm1jdLiMav8vQzSf4jTSzPa8T5ixtDUiges6YeSsGsiR331scfUeUgMikqaK7eA79XJu",
  "key10": "4nhGokf6W6qnPUmxTEYW7xXUZy2SHUTLbZEZK3q5SHbBS6us2WHYQgnpRYN8ercczmMAkXEotBzYhmfU9ckwss1K",
  "key11": "67eZmG7R2mtLRZMTGyuvfaZ1Z84MTcMmr7nRpxAqZuRTzPPgDWRJjZSuos1sqEZHGtjidkTmQVYKhBxNsQfnUn3d",
  "key12": "7xvZt9zFXi3E465X2RhcS5EsCSr4mfEG9V7pm8YUvcQ7iyh5S9vbg66hqoMNC2CWxBE9RcuDwzWTzXvBq6xcPiZ",
  "key13": "3BbPJzg89Ap2qWqioKVicCFto3B6w8tMZW5yDEeU2c56ddZFjppgkArCBW37WYtfTY9drMhSAM9jGs1wgBovUEWw",
  "key14": "4NGddvURLRzKDMATgig915Qj86LjT2yz4W7WmSThcE1WPYeeikoW25opPX9VZQttzvPjdyssG5djKn6FDUwS5gBg",
  "key15": "4kir6BXxCnfpL6paFVVtw9uRznaaGst4rLWDQYvuxkMcTHsugctncy5A49nrtyTauEfm8uyLLA78big8DDxf3W5j",
  "key16": "euM7SauyE6YPE6ALuRR7dU1QdR5j42oyVxsvW6yjdmaK79rNGcfCyvttF6NaqVThnFRjTsFibnNDdb4M7W1bXXr",
  "key17": "3tqD23eZME2rL66c9j2nakvyMMSGNrS1VKr4CB6ATy9GTSnUXY2WvEXMcdrpwcGzjzrFNh22iorTaCsm8Upabs7K",
  "key18": "3Adiqg5krghdvjqHvj2Fy1o3noqT9yddWAEiU5DowaD57cyjQ1WxtFjyDLF5oNDceQvFvwg5wkNRr1XX1WdG1L8f",
  "key19": "4U8njZ2YuRb4g49W6HuYh3DAyiPhmFsZGeRWYtVatLJVYZwh4q3oMMnvydkZWhDSiLHGkQXMuwg4qjb59ecQZuZc",
  "key20": "LQLCKJmww7Z2GAWqSkY8AkgdesG6vW1MpbZ8Z8FSXhjzwKWnjSAKyU1Ce4AkXi7rMBvoXQYqDRmKqpnzRUCPbDf",
  "key21": "23rfa7u7YKP7GLj5W1RD6XC7M6E6FS9BiE13Nn3wPdbSf9EDSAFtUBgj9zb9TDCnZq67fxCWbnLpusjRKKqSjq3B",
  "key22": "4doGsLaG9gouH6XtkwXaoZExxCw8py5jLosfKRYX5kwLJGvRqj9UtFfWp4BQPxAC5zCXhVzLJCMrK2ZXDUEF38sS",
  "key23": "3LcbzdktpQpPqSfpG7dW2ixLxR81spGNmFstddrJr1sj26EoC9sqUSVAwSbQSoicU2hME5dpYu4jdNP3dbftf9VA",
  "key24": "2esR5qq5k4davThKwdhSVPKwd6Ln3zFVVy5ZJ4bdMfxr6z9z1N2bFh7wsmY8W8x63jAbn1WxEXhx2sTHFoUTup6z"
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
