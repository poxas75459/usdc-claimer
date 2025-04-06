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
    "5riDQbzuvpoDWhWgrYXeBrZ1HWhDXWnrsT58XzHokfZb5j8HaHJfaHUdQHQyMFrbqaTmZeoRSRx7drsuu8ApESn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5v3tcR7VA1odbw53eG8peoLnbNPL7c987emh1ZA2vgjsoLt1PvNBjPnnLKPczt9oW2sAWT39MN34y2kZ5BtQNTAo",
  "key1": "2C6LNSEhgG6bx7cdAMouAWy7rv95Qn6zfNvT21KNzijVm2MvLvMg19Rfc1ERbwpY4hRf4UEZjaG2Ucw7qoTPU3tq",
  "key2": "2A5HHjwmfMyCtXJgJoWULqUMPuGnfKKktvzX4Sz6dY2CSkt122C9YxZFUGcSAkFSyFGyLgxyrysayPyG5PHir7ys",
  "key3": "4uPJYZzgjEZuogkJfmUjto7sHpscyBVH1GsaVHiXrG3WXduQeWSicS27ejfNzuunnR2F9o4FErvLXTpF5Cg9VNmm",
  "key4": "37Jhm6YmQbnwyafiyDcibd9gzcvP2fZ3b3SLieEYxskq9uWwRB4thCoyHXKQWfwePTbAJZ8NCzMkGsMi4s8g6q13",
  "key5": "392urP7ExLSZsbVpYnEVsQgkTjhsLBiMNBAuqguh5qa2YseXa3uGdMqmhWiH6yRZzhnp1HGHNkwKeD75ryeeejQ2",
  "key6": "3rRNtCAFhphUK2FKgbKKHck5vS4GvPZC4JBEV3N4bLKuYHNnQUsP2AU7VJKM95GDuZZXhkVn7AD9o4KaPFSwup43",
  "key7": "mh8AForUWzpYn9R6khi9zLiT7SZhMA5BbWEU6YnjzjaJ8VRYWqzGRuE7FsHxUwosW5ZTw35gkdxKqmWmGndDwsv",
  "key8": "2ZbsrhnDiKqv328K1QKhvERxMr94GFbBp1GpdRFtFTfNwx3TjBNGJtojavaVRkZs6bpQ4JEt9xGZBUDetNGEMUW3",
  "key9": "3k9QRF2RKzvTEFz4KzPGGsdjZsFaqyA2bUhUuzD13neHC8tHC9bUtRef16aND94TEHZEg6mmZp9r1eHK7eF6fMkd",
  "key10": "2nGZ2EndwwkT61QANqGRJCgEwAVDjfcpGWnnmbybGzx4n7Tt77Nn2TUA5bWCuB9bpbuyxcAtvFkf7Paowbk5GmUe",
  "key11": "mJ64NFEkm45wrGMuUzYJBD2Cady51NvsDNSvwVHvAKmAn4UyCR6ewx9aDdYRuqx4ky3y28XVfW1Z7JFooV54DB9",
  "key12": "5ctQK7DBZKLTa71Vn2E5S2UtTx7SJfwk2cb5QZZtM13cDymNpr9hAfA2omCB9bQAfjHekPFmCsGAAXX6YQ1LTGPa",
  "key13": "CJmwgJFivjHVJkX65DVyinnbvSTTdcoNg79DEf7GxN3W7SjB9ptQikvGZuxMwkZQk8ntsiXrDPmHNZzZHCSysuK",
  "key14": "2EzsC897SU8c4cYtFksQmKhSNNxKAviKZUtpjt4NPmy5CnXQKqrTf5nQRwcCzmPQCNxzXBhAqpmN1ZXzKU36gHum",
  "key15": "3YUgLN5vBW5jS2C6M4NLoQ6tBLArSX8o5N9G352BmVDXrLcUAcAdhLkoWjJJL7kWgUnqWihSaAEBjfnBzXT3hLJW",
  "key16": "R4t2CRjdJzikZ8DwzvLT4jDjGx5bFCtZDt1WwoBwHdg2ssQdH7WqxeSs6vJF3AsZVfqjAEfrLA3jFLRnFEcNtVy",
  "key17": "3BURBVnLfRHFpxkHehyL8d4eDTnSAW9vRrM1MH2PuD5dEjtb69UH2ANvHtzWumnTXb2wC9PU7yBAJiKh88EjMRM6",
  "key18": "5SiYV8xVMNUQqJ4wkFSvhUe4MSG2DBJz4KyrR9Qej5SWgGQyuAGj7Vd5bj29TfnZgk5HwMDaNrzaWGbqhUV8ycQi",
  "key19": "425mvfzN8VbzK69vW3AxKsqeiqppFQ6wDTHPqKRigZPataCsT1GpckduVojU1kL63wYGasTcQu47KmEWm2Y1YPsS",
  "key20": "4vo9UbJ1BQZP9JKrFPcyTAW3cdtV7SEGdyjGEB3XssmR342WGbxGRz5VyuYy9bQKDeT7vVqbPgXEHsKBHrdgMq8U",
  "key21": "2DBL6VZ6XJXhe6WJ9gDnht2tjkife4BYPg4h4uKJXvY6JjXst8Ri1crX5yE28bRS6PFLwaziGyUwDsQgSSh4wpQi",
  "key22": "4Gew29dyvn4hmZBA7646g7GYiAGTuuNcCiYBqWYfFwvbD6hN5qD7yWogUqznzZPsJrWjn2gTQx98ah8EyJaE9tBD",
  "key23": "4mgR1Q4AviBQBg366EhurTFxqfWGB6FaHwF1jTHyJnpX7XJ5TgsARZFPT5dXipmuHjbnCYkZbzskoK1g1w6BgBo",
  "key24": "2Qbz9Vdr8fZ7mW1SKPcTLqD1N65H4pSvoGU9nGgAuukSpCyBZnk4N73iE9zueEfE22u4VeAomKiX5QjpEGBnkJrx",
  "key25": "2osq8b79RksEff87wJ3SCGfVcBhUEzHhVwZDyTaHi6PoZg9QJAJD8JRdqyidfycCgvNrFnjYVPNbP5gAe861Z5Rj",
  "key26": "5GHYUtykzZ7yrFrrMSHoJuDRRjNa4i4N8iSTyJxeEky4U5LyQrSrE2x6riDiMWdrWc5XpWNaSLEZo59dn9SVYTKq",
  "key27": "29jdgtRoJPESYPH5b4Huc7Tfcpr2vJv6DME6GYAHZnNx5hcVfZWFKzccL8NZccEk7Lqn1LMeMhMRy9dKtMr3ct9p",
  "key28": "4DECyi2X9Dnbpb8UU2WarotAYwK4c7GFdz1QCjoj16QF1AuQbQGY9kbdb7M6SgBxnmtMdnc1jNdwiY9fCfwWftys"
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
