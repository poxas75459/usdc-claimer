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
    "44f8mj7Xu8o2UrroW9JcugAtoywUmzkDTiHkusT4mspVVFiZQigxEbSWQn61PkDDPMC6DAr1FZr8oMD3oSJUPbDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BC35BenB76ii3Ec5QqHPprybsXzAwXzvdBKUdQcTZ9GZuxST1KGVXJyeuyEPKmWAHqtj9fU3Wuj3g4uGHgRt3Yu",
  "key1": "4YsExSfazazDxoyJsnmbyXVzNnNwyBChnnVjFSjx1byuUjVbuJgHK83J8zwPKLpX7JQLoZzZBsJwD952uyPq35nP",
  "key2": "5BesjFHinfhjwtMDiPAg5JwN8rnaFyjXYDiGuuAe9PAhP1q1r5mNnF3jRX15pFV8NrKj9UNJNbSJtW7TPKfDx8Qw",
  "key3": "2HJxuTGL98L7Af9TBseu6A7x57hTih6rZThdRZ83ZtAgiXHAod7AK17JoApgUhKQWy7LYTpZXGsRX2R992msCCbL",
  "key4": "2qRZR8zwPJkB3nVZaHxaGr3MPzEXq1QxW22Hkf4PpKpnKebJr8xsPZv9deUecBhdoZ7PkHu5GHieqvVSr6zPKbYy",
  "key5": "2hzKyF6MqASygh8atbS6ymgZv3bs9Jhb8YWV7xdgow3XybR2w8iVU4XJjsFrSX6G24XpcLGz82jHZamuX8Vpa5bg",
  "key6": "4cLfLKk1jbQDkBCvWNU1FE1uVhe53Z7BWVQFhfueXmxzArtWfebAmo4ohBimUjgaS6VLevfmAgTM3hJCtuR1qJ7j",
  "key7": "5UodWcXV3hk2YJkyyWv245MLNNUvv3ZopPTM4JWiCRpfUNmW2ETi2c2Vg9CMmivdEmSVN4PtEAsA7p9Q6mvXRfYz",
  "key8": "5oy1mF23TzKTbVnGmCCfjYWTUH5dTgq5Stx2Ef4AHV79gLVLKxTAYnUpAD4QN9yPCGV6bCRDYF7iEEMcL7bo4j7s",
  "key9": "4VLuyGbqCSGreEybj26QozVDheBBnuDENpNpCW3CCa1YMXRDwT3L6mEMnTgNJveDpxUBkkRPpjxCzrLqTZ34w2S9",
  "key10": "3P7eFdmpbPcksqgm1fjeSBt2mm2Y9yw9yyEiaa4UrwRGo9kwgjjJdKcTWatcQ3prcf4M7awwuy3Wt24cZgACkv2w",
  "key11": "2Rk5vQNbKrj752y29FnbY3bCDXj5zHuFK9NvbWRktFfEPbExQ2FaL416JWoW2mymT5oJmT2LjJzA9bunnK5hh3Kx",
  "key12": "3GFwndnu34a4JPrMQZ6cQUA5JjEuHdpDtUQQyjDX6R9poTERUuX92DWsLkZoirw93aPJwcRUcuwfaYRDMvnngevz",
  "key13": "2TfpQSGhecqv6epPTQWNuxCJdfiCHJkwa2kK1X5QQZD3LvcAeWAfY5iM4Js389fBSRZXZ8EwuS9Hh5gQTW9Jg7AB",
  "key14": "2TJzCE75B7Z2ZbHN3maDkuVazXLNgrzs5Nk5Fu1VpGWBteYuGaEvs6vG6QL1Ugj7JwkxFUDDtAqNKmCuRU43vVS3",
  "key15": "4hK7ynVZNMc9RWfKs8WNN6NHuMth2dcHk7FryZcBN52qyMioufqmFDRqrAtPbMpGaxo4Ew3qyq3HD5w6LT5bySbe",
  "key16": "4bkacqRmU3bjiqZc3R1qLKDpjbHzxhtrKNNzAQJXBY1CW5k2kon6xPbXDBuSxC8P9aURFbUszApEBFts2vWvf3Gn",
  "key17": "5uw66F6Jyf1RfVtEa8qvFq87o1gNN7DLPjCc51Gr7w1zdphKwHxTdSRaV8wxLJ4EgabM9KWYCo242LudV9kod3ao",
  "key18": "3UDMCf7P9JAUdDLeVFN5Hj1itSpZcfkNdYqqsStx5ckddSzzCAYu6JPHkaYTDHhDcfQ2oTM2kAjXWFrymhuYRkZ7",
  "key19": "37jZS3pvGJwzskzyYCVCsqCbLLT8SF6KgRYnoaStgS3Hvc8EBMxLqV7nUfBXo1bn1HPMNtXaU8USPn1sqvfo92Zd",
  "key20": "2Ran7mrhqbkVftxGbfHaEGA4EcNTjZ7HUwxYxsn8QtiBmNSsCrtRDJJTAwwVLk3zJbX1DKeFURiBKjE8eKangchQ",
  "key21": "2bYGqoG9uTd71kgU6v5WV8GBf7aDbEuw4VJ8j6jXqjTdQ7MpfumE1tfxddNhbY13aPkfyCJkuEZ7qLSYh5ntgM7F",
  "key22": "5LeAiPFvU3QWFiv3WJqVtCEfryji4uSQHwHXMd4EiPbJTsd9vVb542jDr68swPUfBn7fidemvgvvBRdNqcbd8jgE",
  "key23": "5sAwtstoc6dX1Ch1Auza2cDhrY9AP2f7wkNustNBVytaERDxVf7GrQd3DAiaxXttw8be7CyfJsxNNgRw5MsTmBBp",
  "key24": "dRxFbEUht5wzbnZnTh3FdrUtGpHiQRgmDh17EPio4MdwQt5NM5WvEp4YEDgd6mTWruFUNNLkz5mVzrhTeS7Q8r1",
  "key25": "4SfAcaHDe9AwVxN9QQ4eboimzQ3h3tBLbkWqrJkT2zzazC2jZWgPSDWhsaH734MPCbxkF9VTTzVv2Ni3Zw9noJKF",
  "key26": "3ZABhybfBTXhjyHRk79ZCyCypvpDRf7KTo3HJ28TwnqUgVWKJHWUcGpgwCHXLkL2FmjZYQTyFRpLs3k9ivjgXKsV",
  "key27": "4371SvBwdbUSiRGD5AM2gwHNWeKz1rj9UvErms5MQyhAgD6Xb4gAg54UWpYKaxwAVdV5sDt3ELc3pza1kmWohPqh",
  "key28": "3xiycXWB2zDQbZtszk3qZN9TZQS9f3TEijHjCHmuVkVNAQZgZyTRsVjTCYa4zhqK4JBLj9yyb47XbF22qwVFEyvV",
  "key29": "26bHMYe3wLvjUkXFmXFoufQhdZZvbJXAmfUUFrcjDjzLXML5dNEXvxrGNVakKrjwJ8xxwWnKEJkYwBmBmvtiNY6g",
  "key30": "3TXaDVYp2DhbNAoRFu7Wd6UEg6hjdZ1KA4n7YNTTNet5r4nX9ABms9rV3iAK5AqCagAeEsaCYkFe4yBLNQ5Jox1A",
  "key31": "4f9Gcf4jCeYTcXP51Pi7iojSQqi7qHCt1TEVLVomricft4VRZbtr9Dy12HhdpUFskZYx16TiC3YKzEWpy5Kx7J5C",
  "key32": "4bTq5aDi6jeNRCXz2atfREsSgtpyXMSUpas1ceEYypSbSxrvrmUZktdQKDMZ9BHYrg9PDEoBWoP2iyJMaffcsoAw",
  "key33": "26jDsjUe5WKkdc3CVuZP8t3P371Dax9DHdbrhiQ4cYr2FrLTDgR5SPDFTLxvEaHF5GxevfnLrGGVBSbtMMSWr8fu",
  "key34": "ZQqYXryNAWD5vvnnQG4HiEXoDbGSCZDQgqpdMGo4WQ4rE9f4m95saLN4odLsvMMPQsRLmcjz71fwTCbbNdThGqK",
  "key35": "4pPEfzzjkBmME6gfiSuzRwBRQWNZQHmhcy38Rqs9oyoG5GVd2JLJMGSsfoE1hzyKgQ3qJEamrqmxr9amkxwnpPsb"
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
