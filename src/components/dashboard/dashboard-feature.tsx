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
    "32pQsGnnSeLCHzHn3K4JYkF79M17rncmiurz5kibagL6tYN7oXeHd11ZDqf2tkaXQVH3ew7eDzadxBXjq22nQcVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32EwJCWaSP1ewMgAxAgtuAjsp1Hv5cD16xgXVrreTKwNNwiEWhuu8735eQgTG8rTbEEQXQqjm9YwxbvxtCYEDbg4",
  "key1": "3HBB7JWmjPYRz6nHmuLGrKyoiRDjKDPfAZrLkKxgmD5H8fzxKFqnGbkCTgXNQvrcWcXrG7xifDi7awrdwghiNC2z",
  "key2": "5aMcDezJFQf44GqJSgVxcWW2PxranQY9sn4euyhxmJ7RXYnadLf2BNfk7TniQpRsEEVTh7xGBZCHX6ifVNf7jzK2",
  "key3": "3J62dNTZw1KQFBjwzpTJBJbo18MgbxkCUz3GZfawtwZuU2MWTSSpjyLP4g7nTA5GerCojuKhsnmAo2KDJtAdFePx",
  "key4": "4ZufS5bLk9AxB74ZshBPy874Xe8twNFxcCU5GEikF2kQ4D6vWFoSJTzbhUN8ioMUyfKWZHMoonmdWoA2E9jPm1zM",
  "key5": "2dzfMYtWg7Ac473FyipiUs7mRTVs3hrnFvX12fdjUgJHz9i1WVKB5E5NFZSJYCYuq8NX6sR761Ps3AgszM4EppbN",
  "key6": "31HP4mXxnsD2yYrBeUWPVr7FgTxHntstGrD2jWJWamX2Ngd988m1Cdym8mB9BwdXPvkNaXdsBfVnpte35aDsuU4a",
  "key7": "4YaqgYvb8tjXBVF4C25ZHNe1gtB2o3SaHYms98fWBAHLDtb5KxpPNXF15sutPdLAUf3JwKhJc5xWRdqNSDwUUbwc",
  "key8": "45XqbmAjdXY8RMJRcM1m7oX6QfJRjwxHvyKQmupJarDpeTrcSeP9RGxBn4KXUiNevocXgDYkZQh4VmZJC9tYo27e",
  "key9": "39sCUdrLK5yntrJUFGKKNZavCpex5CrGn5BsqmukESoie89ZfpjDYMkvtCu4gSSwbUTumtGDwEzf141pFYHMrBWK",
  "key10": "5Y4TANCucNbShDFN6pKeJvvyNzaYZn3rGNmj29Tngn8vhngkf9nftSUrukBpRXQHUpnf4nx7EZq2c8Upz53r6twr",
  "key11": "5LR3cseWJefbnEbEoRzUcaT9V3ufCWHy1iKS3334SMfMe6xGCQ2y6xwgC3EoaJ9Wz53mgBxXjWnCFaLhWxU5BAxN",
  "key12": "4amB6TzrrMZHuD5QdbfphP6DQwixRgJqptcCmNKqZG9GQwV2jbhm92ncsFq6bEUxn5VjvisCP1G1LgWkxVdpQYVk",
  "key13": "3nEbEd1oNV7Rz6PpBHxPAwwh38wFDo1RxhcZ1FgdPxAcqBFtjCuueqPLh2yK8ZeBjvRvFp5BU4bb7nZbnsfSuzDL",
  "key14": "46zCg6wfpYApuCsQFZXX8RJyUqS8aEpxMK1EXrrcQ4Jr5j19ZRigbidqjm46UmXmqB1vqqr8gVdP91LFtpe2H7zv",
  "key15": "5k9atxECMEtCi6Qe83XFbJziF1eJK4RQRKi2PkLAqodqtPZH6hfWXnVZfivD7DGxn21oRiQJfqa2hAZW5iJMhTkb",
  "key16": "mNesETNAPe6nZcYy3dVnXfzd5dTZq2tFKtzKzYakXHn2kGjMbWsq7EspyP6GoBExgLN3srfdLUdtUFUhCuTzEJX",
  "key17": "3tuPEqVaMWoz8uX4orFtX2zWsdkob2j5HrQ1gzab69qwtDXvEPFLerzM9QaAJzqesCEQs1quCBD3U3vKJ3df13rG",
  "key18": "3WaA47qofmsmENvFZk8nnph4eJ8prr7pu7TJC7eURUfUA38BjMstBGZmtJgKjNB5Hzpq1yDLzzo7A96XE52fGk1z",
  "key19": "3AHUbVL3DK76LZZusD4un1CnKyKEj4Bor1fHcaVZxNKdzCipL1RX6TFUheL61oEFdzjeEq4m1KrcCojvKKYSCYsx",
  "key20": "DHJ2mbe1QEtFpqN1swdcKGSqyKjna7wY5oxtunqJreBDp6xCZzHMvEkZDVHgAc9VvrLCv3cMrQspP9xrbgNQ7GW",
  "key21": "5saEqQr5eruvKLqZP5K29VYSyamLqWyu8Vc9rr7FKZ98742QxKK6xrS14LF5Y3Vw5oDaMoPs2G1y4AuFzmaZoDxo",
  "key22": "5ZQbt3ZHTcqZqvLX2knLJ9tiqougPvRmEcGJZfXVj87ef1V4ruLmUUPTYziJnfBNfTjYF64zz3S9iAiXwC1kictG",
  "key23": "3Sq9ARAwTUwRizbY2iXE4HSw6xXBtP6PZD8a1hgv9pnYgZm2Qp58ycYm9wqXHm3RVEbnv6hutRKpaGUsCsLAaYoB",
  "key24": "4fkYPvZYmEXaRrydgM77vPMSpoDhUwZMs6eqQVwqoRqYr4fsRMBJMKJCvP5aA6yV6A2nwHjiGWxENVg46xVoC4fJ",
  "key25": "3hwoHb8PNbQCyn33VNwsHo7KBUc2Cq96h6j1QMsKKsXEc2ERvKJ6wvC6mLB1fyqhcvCTxgpk5VLziG1ACsQkcjtp",
  "key26": "5R4d2TZQBGo8t2Kxu2VabsPjMvGaHeLSL758aTA6hhBczH9Vc5erYKcDAGV7V6SRMwM28ACYHBGtvByrTtUd6wGe"
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
