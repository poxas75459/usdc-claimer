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
    "316oaLeWi4y1h5rKEcmrZbKi1shuQKg6bsPMm7hbnVxuHG12kVygWjWmCey3SDSuEjKyig3muQ2gT7ThQkyKyrvv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbGJNvsTX27xjFUCPQbbA3y969Pn9hjEeJsRhyy9ckk82BHyknQEedrWpsSESBB9Pi411dAAGCRmGnCcCtLZB1G",
  "key1": "55Ge4DtEBcEiUsDSBVo2VAfEKuuQtmLEm922SJtyphhSZBCGXcwaVUY7VHz5c7tR26hFSbLekusmE7auWJ7DF2GZ",
  "key2": "5wvmFyQKS5oiXeeCwApwDcTG9cFL3fN3hgNe18Y2GaG6zf5UZh5sW8gYQThHRm4srMXKUTS4N4xRjUtx1fnhMgFt",
  "key3": "gmDueiz5iUYCsDwPdvWms7pSZPzoX2621ENChKvDHH2sxCmor4nWPhPTzhfx6yrC97RyqHV2ScVzT9pixC8mUCs",
  "key4": "4reRMdHvkMWg1tn6TJvYDigbMu3FMqkTEuZj7Xh6GSNzyifWeDVmzBDozyd8hB3kJZXPDqDbFWoWtvuNAxDmFWCk",
  "key5": "2jnUmHUqsWTHJKFwmtMNm1WN3Enm1y2DLmMEqfiNGv7ufZwk18Ldz7Ko5zxs9XKyshwDZ5uSuha1v1mgdXhuwBGG",
  "key6": "Cjaf5NuTbRtorFVEUqgUG6Cztc9rqradjuXLPn5VHUCu9iWK5bHdNSNBwUvQSta1VRZXEGEb5tRcHMKQrvm5MPy",
  "key7": "3D7zKYdwvuNrvwwhzDKwACidfKn5zEHxLqaiGMze9jk1eYDi6g4eFaRiE4vbrLK5gQaMhrkhHMFemBuZW9Y43ykd",
  "key8": "4HdwTJjyXRR46SaazFmzVBsX6kSJZuDWpFQHxs64YZM6fZYCsHF4ANVravznGHNEFPf39cZhxxD3KXXt7QRVNMae",
  "key9": "3PrRq9yEdmAXYUSx2JBEsMv6aeYZV2bYN2u6rAutum27HiBhJoJcr2tDPfpaCEFfw2apP8JfDTg7Z7SFZTFCgWAH",
  "key10": "2TQuqzB48gpDaCYG6KG5CftM8PTUuDbB65kqFnNLj2KckNuNb9C6KcJ3fyrQuJcPyhoCzm9JkGQQra9X14XFVD4s",
  "key11": "2FaiXYhmmkNVk1HA7AuAzaHyCMbXDm5M4jeNuaRZhJsir9F1esLJAH8KQr1sgbvtEAHTqshdaRiniyL2Fsmr6w45",
  "key12": "C23d5atgPDSr1vcritsVsHDnbb8dTPHgdUZbZfiUktHvSWv4XnkqV7PPrTA9Zp5cYJmhZoUKN7LHN49VDo4rhbv",
  "key13": "3WFKCmm84KjpatQrmrxiHrL2ymfxycMcrfjLmxwh9FkpXBXPiAdEhXN6GtN6DTKxcCRUEeYnke2hYJXXjxXAXFrz",
  "key14": "3GPpXxTmpbcL388A1bQ5Z5nLQpQKe3f3bHWF78WCrCPWzkNjSKvLdnazjqxErBoBGHVunkpu9P5b86Vn42CqZhvU",
  "key15": "2Q4uChdRsyV9qe5nUuNpo6putz4mA3w9vMFKMF1dGNj4MYuivhWXLiXSs2LeTG1LuAUBJvtkbqCpnB3Mfc6fbig1",
  "key16": "2b3WtYwChx4wTFfKTJraT4d7VnDaMB3pZikA64fUWRWhzDJW1gZbcGnbkN3KtiEt8xHX4wZsvqGK61gruTW8K39B",
  "key17": "4tY842WGLDxJjgxPf6jeyV1WyixjxPiZngF9rFeYWcNx7TccP8B9jcy3c8QaLUreWJT5QUWSv2vTH6XM4cQaq9ev",
  "key18": "jS715Rwq5X7rcx7GDaN3VDNFyDTne5CqNJCATJT2c4ABaXgLKaNA8GATqYQhuTqokBSQWqyU9o7h6s8hoJYS3sr",
  "key19": "4qRuHYrRarRTMnFEaZuNLky8z4bnCVMpbMqvP8DxEkVPuGdHX3mafr2qba5ZWBZ96q56KS6wdQWrS2NwzZjhH36q",
  "key20": "5vy5tAfXK2NVC7Rp2DFjMgBk2Kg7nx79sw2Q3dc3hpoTwhiLp8LCNKKbSDoQGzAu3t6K11btfJPFwn1pcQKEq78X",
  "key21": "2wbcpopE83ttXgNtDtWAkgshDZZjzSRv5T6cy6aCWnSFeBQF562emSgSWAGGUD2VagktQkfXugYwGBtNzWKUwvBr",
  "key22": "BQhaUjEo1NuoE6SC1yCZ6bxtPXBP6brahfjrJs5sRspw4djMfAMidqgbXJRR6nWnToR6htif6rj5A3We4G68KEm",
  "key23": "35KiaiEgd55T5f8e9LNEaT4bnqBUHQatHAGi9J9dGF8wmJ1VfVyfDyi5aEndwU7ufKwKKoahPTD8Ui2pqKfgctqy",
  "key24": "g7Fa93YukTGV5Co3ojATqberN8CEpem6Ne2hCo2Qqk3omux8yFmY3cV38WuMuFR3ZvAxbGQ4YXFMj6PBTtD1Z1n",
  "key25": "p7VMpoUVhjMKBDfRdbyvgGYApVEsiGbYk1PkygGN8eKiEPWj3ixXHbQ4EpfneCMNS951FvbR5WQBAvneL1aUp6x"
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
