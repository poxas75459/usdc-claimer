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
    "4EXWKYo6uruYECLuwn9XWLSHgYcHaLYTqh7jtEoqNoizvVWEqgvzZv3MjPN4KzScriE9HHmVN9KEpLdS3Hz78b3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8ryxDziMf4ShTrGMPYfhkXRy2n9erBmK9fkmoKnX6NY5JejQhqRNDGgEtjKFiPpkXvoEhZbCwVGzGRzgVXPnsq",
  "key1": "5Vyxf9mSLaFmhYefLF4LRUURr7Z8BCEJ4QFe7mickzceZLcm8o8ofLtRfye7h4PD956dUSkbxwnsc79wCodCCfvN",
  "key2": "3z2vFAnDabNswwxMB8R1768r1KfVWARS3jwaQA21Gc3EjxVtFPMPumMrvu6cTt1tR1fzM54qCNUb61LeC9gaeUPP",
  "key3": "3Tt3wxhtETvo9MmQ1bbQVi5zibCYebtHwdbCdLFDkGPqv8KoH9bzy9hkqYj2ouJf2TaPrKEjmBReP8nw5idYo3Hn",
  "key4": "598iWhV6PoVboxwWLtpauzHTZZjhvi24vWqvQjMDcPysSkvcjghAUhQ43W8z1wxVmt6c52MViQvW99kMJPK6Dw6f",
  "key5": "3195EVUJjzTNimBVsQQd6WscANUP65mSE483bDjZqrj4yKaFDbssNJFhDNog7zBbRdbCWjkQwqvjgdSRxUrrF9Aa",
  "key6": "MVSw7AAP3LXke8dtv7YpjCAfQFoUGJVNFqwEC43hpkHTbmfnMfyu5Bq1P4gELHmy75VM3sXLki9QSuR1kQuyKFF",
  "key7": "4bzXwYT4a4DWsvtT1XuU8DjNnFUjoY2EocgrjAsctqEeHjcM4JC4B52aaBdjpFfGGsv5DpAjEEKv6igvAqLDPYBP",
  "key8": "SZtFEt8F99dfo7MphEBxp8bvACBh4yeT5kkuiBsaXBsF2zCdjCrsk1J7aMNngqog9TiXzHef21MBAoKHTS6F6N8",
  "key9": "2nEFsARtoPxVVHSM7gosKpCjMDWFUCVFRdTf6ez7Wa8BCfsYqsV7PpdavkL9wMhHU84kuz1qahLvkiWEEHcH4Jmt",
  "key10": "NTRRmrd7jYUkhRgBV3Y5TCeuUHY3541Lozt4jLwmEY9tfzx79oEJXFKrEL8VmX1J3MtS2WMBwrJtbvwjM3zYGbZ",
  "key11": "M76y31u9irvi76BsvbFo8XD73A4HiBW3FUAj3HxMEcruHEvwkjPYJYbiHtfCM6uysGTYoVtZRbriPoMUGqfBfiY",
  "key12": "4ZiSjypj15XBRdvofqDPSbGMYPvezMGb8BgHWSzcfTHq543s23SdsbEt7zY2VSVPGBqmDZ8r7juUf62E8SnR4myN",
  "key13": "2N4SRsTvJNyXEE62mbLq8BhpmTSwMEK9GZj8xxnvhNU6XqC4DjqxJM1YdZEDPhEa3RC8eioxBqCa7VD3YZdXW7E6",
  "key14": "3BbTriktG6KmeJ4kuqJX8gnK7gJvs4bvwTpU8w42puXL6B846PAHBb8MVL1oyuMYg9d158AiGGhGbFGeYshHVkKy",
  "key15": "3PDBEZJJSZWMSEh7qjxZtYJQz2UjMgiigYAgPBwyWVAJcpm4EfuqWKfnVr9e1rBqwh3Keas99mUqVniEabE9DRA1",
  "key16": "3ViM4RcEGaSCwRLo8SfN7Kedep18BRNfP79kX3hCqy9GzNFCN7ubvgJEJFmVC4YFypZ8sFiZS4f7NJGk6sLwmPmW",
  "key17": "3r41Z4rCbqSGZU2f3Rm3HArRMg1vLJ8TK42pZRb6QLJUWSaGB4bgYZAs9QVYa58cDh4qxGbxaBDzxvJNfAhv5Hii",
  "key18": "3gkKtCrbrnWfKsxnmcw83xLiPRNxvue5ZWP3uGVXW5F4Q716uZCdcdBuCv5c7fwbdnXa3gHWj62PVWnGLpbvnMFV",
  "key19": "3kpH5aKVPyty6ti7SGbHtpqndZALqA1Qq5whpv5p9Pn818JCL5uK9kHEeYfxazDgnQH2tXt9M5zHMNgCitAsTBxo",
  "key20": "4fxGefAAirxWevEnqxcuTSHE3oz7wCgNNhb2em6ouva9ZQ7XiPM8gg4MkdALJJiJCNwaz9QYuvnmQQ2Vy7dr3We7",
  "key21": "5nR9dGo8mcaypHft11EsxYKJBBNshpRj8reMUsCDhEmjXCSmhdyZvZRhfciEY67ZiQu1qSwSweqnzYRuEZTZUALK",
  "key22": "4LynLkDzfS8JBWTycVL2rLRmJ8LzExxSn8J6CDR1gLqFeTAy5JcjP9GXmbUewKFWcPSkyMwHSu8LZ4yZoGmKEd6Z",
  "key23": "2UrFa8C4mSY9tmDa4YsCVUH5Qn3bazpNv6iVFHGBmAiG7VubiAQDh6GHQmBn4e5uwv4urqzrC9waYGjgkWBPjtrH",
  "key24": "HRUL4w2REtJCpLuu9fxta9Ldx7Qt9YL3DaXZJ1493nETXRWGU5kU2zhJVz5Fexu8oGzFMULgZfmft9DBecVhv76",
  "key25": "3ME1yLQbhgGn7kJGgC8fmLarD8WXDVryS5wgVGVJSbTjpGoMLguPGKw7FNW5Amy1pFp3DAXNbugx9RKS8QeocCfR",
  "key26": "4uD6A47GyCNN8BAq4riu9wm3VtJhpNin7E8bfz5mGBNigbDNGbi5FfDQ4XKwryovV45ZQZut2fuDje7k9j7FvRYS",
  "key27": "4SdRy31VjfRpH4y8mUjNaP6WBG2Hzf2NSUq61Y5Bk9HGapRmhXYQATgsc3kq4kRMChEz5E7esHdsvLCLcyM3hjEM",
  "key28": "sPoVbp1zdUiBQSLG7vKUWmfPvoa5WQk4uabd7jJbj5a4A8w6G7Un4npmaNKekVzf1BpdjHc2e3EeC4Kj3rhaYaY"
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
