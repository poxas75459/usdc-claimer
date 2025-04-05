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
    "34a4D6cEFHJe1XuTehoEFwvtwtc4Nh1V4a5n3xNR2DczkTwyvafNB1jgEN8X4eqTqwjmKqeJRcDD3iMi4rvAv9dK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbGC4YHqkJgSHpRNieJ39TfFpZ98F7nf4SsEH4U3torfaR8XJs822P6d7VY2uDytD7hesXfigAnGfLFDpSAKKSb",
  "key1": "4Jskbpf6sRxSDV73cHcsoeJULvtYnPzTUNwpBi8tyqEvJeEuH9kui9AkwtUcoRDAsCtFwXe1wUVmZEkaHJEPdaSS",
  "key2": "DfD7CfLFZFEdyjKK6ggfufhY8frhwPnP4KXsHF9wN2UMXdP82kj87CVgUqiG1fLj7DVVcg9HWGCDw7KQjziTemQ",
  "key3": "4WTpWiwT1FSLqUhyPPbyk31nkwwJ7RKmN8Uajev75gfXVWdGnRKNwJkgpKfeQvwyFmwmcgWjsgkMtUvVii2v9x7P",
  "key4": "5Rqfz73xFuF3pAXJANyezkPzMAWiL4GFrsupMYKxcdCnKn7wMShk8kdvMewXWaP7FaHwZkLvE6mQbA6SpkMwXeWc",
  "key5": "4JEgFinah3Ew2vencco9yXrPm31RyNTVZHRrNSgMhuD8AMBMJLZcdRRpWbcqR8PQaystQSg8BS96EDNo54jSYWqU",
  "key6": "2B1PhdFJc3rDJhtWUuePVfbQNxG5TmLdTNbMRHdYvcApcuU63pcM3BoA63eLcADXKu6XMaaoRcz9WxncNBUV4VLj",
  "key7": "4dsMnPfgPJ8272zNj9RVCSMgcG4LUaiWAEiJo4tDErvErpAZKAt7BYUQE955FMYBBogokzXSqttW1BPXzSS34k2s",
  "key8": "59HcyEonCp3BR8vhVq5MShs1bxRKsS9Bj7n2RVGv5rhwj492E18PjVRN4XPTxpu5XkCPwMfsZmqC9U1jhKGzemSL",
  "key9": "4ZiS71RFMKQBv1KMxaHTw15czzTiAXxfodB6wbamSf9xuamYdkiRy69rdiriJRxBXkCNsGZ4LuvDTvzmDZSSw1TB",
  "key10": "3H7QduLLmcL7x2LL62gHQrKN39FU9RFPZ3UtscPVsLguejByZGXgNczNgHS3BSs3zhHdp6KBqpsnNvaRKB9uUFeo",
  "key11": "2FLAcRt56YkiBdUrsJbzSWRSqGZ1uAoafrmTsaCEbjiLVdTmWVgdbwGTiQZdexogT4Wxt5Fu5RjZyKJNyX4MudjJ",
  "key12": "3QJmX1enGZPUD8Dcqo4DeWw9bKPBH9bnrfChkpBhQYp7533Eoh67m59xuoaPjhioNrYfwS6Zjc8gxa1zN4cK3yx8",
  "key13": "4Nkpno9QQwrEFwKKcaht87e8ZE2i2ZGEKzZpQPQjUysLcoBYqGpjqnjNtJSETKayAfqevT9PzZeXMdHZqxZyGYcT",
  "key14": "4D9bzp94w7JLjCDVSA4o4RQL5PijbXWYi1wsDsjfcMpQAaKQok5xBRBGa8WD9rn1YbNzADpmf19kCMKxuNCpUW1a",
  "key15": "35c2TvWAqYXDTkT5H2BsTqGeakVkpPTbgm21ZJtxFRuKxw7SdMQjxgcx9guLNVfJggJXhWKLyCsfYpZ6niwv7NX1",
  "key16": "3BE4yBn6ri9GVADgfrqewddER62hhEgsyFKp9a6djRTNVBkyZyWbeszJUJpzSntLxBercXKuPxX8uWMJap3EXnkn",
  "key17": "JkMiVY4HoyLgiRBsbBwN3GPD4JYb24jjbzgosUpM2oeJxdsQsdsf5qFdcYKY1PYEEZR1vrbQiw69aZYANa64bSH",
  "key18": "3p2RPjA6ir8zqZUNH3ihbwjr6BKYFbMe5q1rJowwxUgwkSr5MR5pQDPL3YJbUWa8trDc2TXBZsPMzxHuKbhpu5MC",
  "key19": "2PTwT9ZZZvjE4qhc8tjTinw4ZkV2jfbkQmzttEYvvBKuyVfPeTBCXQg3osUqhhGm1WfJQBzZpPkp57Bsc45U2CDE",
  "key20": "36P1uYYuTGaehbAU5A3SiLXVx69nFk5A5oD6C9eDv4wpVNchXvhi1PMhQdpQcYpputgc3jmx9LLeFFPqrBU8TZ4Z",
  "key21": "4kvPwujbLkdv4zV8avuZ9fU4rt4Pawy3dsa3dV5TjA6QzLAs17wFEGphjfKDvXAerdYCYWG6srhycPjSzH1e27M8",
  "key22": "MFzjEHE8EP8J6dMLBkEDZbjHwr6tRqjsGbM46Pxr1ByHkcG52xTebMSV4Nxq3gsQPddX2zhJ3AvTkVMxbbHK8Sf",
  "key23": "4hwJJoGLb1421QeaqiZGFk31ZXrSUVxtZmkMPv6uue162NBQPjcViCcq5Kev6q9nbg4ia8ucKsaBZnLN81EpuAzq",
  "key24": "z34gNd4QndnkkeeycuWbgsmGwVop88vpwebPJxsonEwjS4Rsv5QdWvJeZGRduPbZRGDML2hiMovASqbnvD2d8jN"
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
