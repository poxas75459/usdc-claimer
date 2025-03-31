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
    "5NBhNH6nhcgG7b8XzAnzKVf7GJDQa4Xf43RmjWEhb9YSwfaLYhfTx8Q2BhkQ46R2ztshwoPJBGx9YwZBtGAt9b25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "413Ep1uzTVSK5gQasyyxnTG9UCMQWEhwmAoHDbDFBASbRqntvTmeYGuPXLF7f45NkTaQYgKN5RE75NgQePDtkSuR",
  "key1": "5dA4KrjxPbn9FTphaTFGyFaWXeAWiSvpyz1r4LZ81AbdKoQ1RXjjNDatRNgaoKAB4XY7ASvsNTkZVqMiGUSZHRa1",
  "key2": "KeKmbyAJbdXURdLD5o7nBmXUNDok2E7D6gjrAizaqPWxhghXbptN6ACGNo6BtNhNsqzD2kcZTJQCLDgdRzfq584",
  "key3": "57mnTaR3rqnLUk5JTF7Tg7FFm5idKiAnf8frrfdfYUnNGm7gsjJUu813PLzxwV4pobmMsbbyERoBFutXgaY76Zq2",
  "key4": "2JnfpbBhsdWJcYy4Y4kVsHoJ5kZn7Zba8Ee7XYZdreWPLsUTupitx3gpLeSqKfqDoco5Kqk2dd1eiHRfWefwraTH",
  "key5": "5qqQVGWTme1dk648BRcMfR3iY5tnK3MpNo6xVuYwewvpceK6vLWuHxSZNbzXuFpF18eZE5EN8WPMh21zFZpWyHkd",
  "key6": "4Lkw1ayZzt3VN1VFodraB8JtUvCUvUnkdUJXc2TfGnySNxNbzhG8co5Cyns6WMmEXmHZFHoTSJeQgKWtXeUwaxDr",
  "key7": "5hWxy3YHVu98LnZg2dqEm8JnHmdfU4JajJDTUfJcPdaTsKrzn2azk8vs9SF7jGpsMMD7pxBSppd6YZCnPBbioZ63",
  "key8": "4CThu5BzifZjVZ4BuyQfYgQ8f1zMAiLmg2yEQYM2k2SPMYfToye5pYqYASw6H8tLzeaBTRfNc4TdVpznZYGzMt6y",
  "key9": "3BLG2Uft3QTLZECRTpg4SxYRMzBDScZHpCLzfrmhf6DxzyhWGx6TcNSL6fxb7YuMh7djfY1RzU4Phkzrb4Sjz98T",
  "key10": "3ydrekssBVks8gdJhYmH3tVfRAWoPaidHBNyAX4tggwZ361xJE8Rfk9qN4yUUffaFCXe4uEQnTbSPAdx2PHrZwo1",
  "key11": "1htrfpqkFhBi23fYmjjz1AFtnR1HQNaevioMBB4avkqMR8WQbVLcYS9kLCAdkHqZCxpa2dpzhbjhtH1DdvBK5YD",
  "key12": "2LF7sxWD8LfARqsahCfUb8E17gNnpxqmJ48FauVTB6NbnZP9LyPVxLVGbShmLkix1z87NC8Ghtr6FPxoaZNCNfsv",
  "key13": "45s1XfCBSKFR7e5PnUVssTfHsUdPZU2iJZk7vLFRvVtiTVRMVHqrQJTWC8v55ux5oJ2VWZ99DmuvpQ5f2DcrKAFm",
  "key14": "2v9ym8mHJ6fd9E6UcgcYBy3qnk2BFZ1DbWCzibCPBbW7Hkam2SEyiwPHx9AkFefTzEgpSsGDx5iBtjxtGo5Bciht",
  "key15": "2yBomskJ1r1z7ab91ryz6iB8ZMvjzBfVQyzyYu3kf7kLiLMCrzgBV7QCTt2VWTSLfKRn52KQszncNgcKLu3rsgwX",
  "key16": "3Cdho9a1VRQTbYz2MTYDNYH4n4tBEWjbSBoz5DqQzEefJSKjKhCtNYbkFMV5Q1JvuE2geKErHNcQV8TW1Fk7VUMY",
  "key17": "5SyYXp82MiLEBtKnLsFke7gV4MejBAHLt1SgZyT5GVLRUxkfKWNciXMhsuoHVhRpjL97S57j3f88QxU7GLyAuYPh",
  "key18": "3eFNrjzPEHgTBNrDDVUSNNDiWydtLh7GH9tNWqysG4SLnfaMJzRKR6bh8dhTUhRoiANsTaQM8G1Xa6E3VS1rff89",
  "key19": "PTbeY4mSS8wTwLK93MiBPXGiCr6ZmTJZKzEah5Z9CKKTjysCodoPFao8m6syCyauatKWYbm5CBbW2vrjT7KrBda",
  "key20": "2TG1CXan85tu1GqyVy4obVPhMcGEb1c68s3qSWEuNARxPRVFb4ukWJ6h2BvQwpBH8LVAjV1g71TDJZWxQkfs8aHu",
  "key21": "3Nh93aEKe73MSCvj2pZB2jFRUvKuZVFRTkB5URrEHEuKnX4W41CVPD1vYTbPJN4uTafgcTa5zRbB5cqMDfhHqD7A",
  "key22": "3x85b9VxATUPEcbNneHq2qBzwDhDm4CV8Xt7hJDapRyAMKrWZTXLyC8HFdJgW3TR7nfpYvEpwSeqPdGfFJvsKMSM",
  "key23": "4w8R9jP9L6tzMgCN56J1KcpDCGynJ7Hcu14WpQhZEtRwLRH85zem3ocC7nV3AdFtkZuFBBwP6KcEkDY5ntvQAdfR",
  "key24": "WSBx4NxCa5HURNAyFxjfBjpnLtSHaWoBzdy9a3vkoAdEve1gycpFRx2JvYzDTx1pEm72ZpnLCzKRpVNcF9bGT8B",
  "key25": "Ks1DijX17Jhffa4jgKABnp7H6rpt1Stiwnr5wbFLamVk8cZ3cXpUozaD6KAzuWq5mYLM15mhXBXDLvSejnTKTy3",
  "key26": "5JHLMN8SYSJBVCoND2SPePJ6QnYeBAfNcpkuq7m17PAKwTz1ZyHPKsLAHWeEbbaxkogYQyFwGWDBHxUjzJ9mzZYs",
  "key27": "5reTbQUyxX9Lk3RqFFWsAUGVRBBADm59PsAVTunMhoAcdjAG5Lekcjfh2QfKH1J7vvyshSncAPn5dCeg6xBa2ULM"
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
