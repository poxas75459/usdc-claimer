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
    "32dqtMtnrcYQuku7cytnaAxAne44fHV11kEFshxH7jnuhBkCyswrnzsuQfJX2WYKimk3ADto4GhPwvT6JfHKb5Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2weQ1XZ9YUaDssg3HWn9iPorfPxN4FYQLq9hrYBSuinZPvMsM367Cw1FdQhHRdNiioYhMKMF7pJZMpSPGGJq8csM",
  "key1": "2z9rWDb1WVXaMJ1Ur8ZjoXrMJ2rzq7rq5SsdUgU5oNTVXFu9dMufM5HB5fzjezKWHRuv47FnLpC9GzAnYkqhAWWZ",
  "key2": "4wz5VMPAFHGabZpNieeuvNYrpk7D78Ht5Hvb7a5BpTcqPkGwE91b41uhm3AwYfwaC2nZ4coQny6PnbBndoTb1CG1",
  "key3": "44mxJutSKo5ow65bY2aWaAxpMN78c1gv5ctnWFYDTsozxRCimCsTFcXyTUEVbs94YKH2HYEVNGJTTJv981xewFUm",
  "key4": "tDUrJktoctDYdx2BbVLiGdktHDgz9DkQaVLYMqGNUMbdW5iRaYMPCsxhMG5odJCn4FEjzwQb2UmfN2ZfHKvaHSr",
  "key5": "2j4RKUWE7SRLPQenGNPU18EsPBBUWK57NnKRjnZQV2EykaDYvwoXsVk8UriBoV7m7mi6KCtQcJ1Pj3n4p67LNgA",
  "key6": "46dRsCBmXZMk8H99K6fZoJ2a8ArVgAZeUcvVMFw9wXeJWB6dXXQT8mCzhCRQArMBhN5ie4BEfVdPYPEECHTyTcY",
  "key7": "3crXv3MicFACSZgEXh4BftXuM7KNMr6eDpLCnWzQQ21rCWEL1wajDL2pKHKeF4FahvppeUQWAFSdtWb9ja4WPcfC",
  "key8": "554akkaSoKprdMuT9BmJezJA2AZXzuznUuuqu9bdCf62NwX6uBsdUkmEVKjWp5JHd9bHZ54NgacCCyvSMmy5tVEX",
  "key9": "3Khk2bMhw8uyQT1qBkE6mTfMZxVZBnvLZcwDKRd4YcYV25GQ1pW3avEsBebxcjGpT4ZnNf9HUjrGyACvrT1vJjRZ",
  "key10": "4aaVRSpDyMyfu92TqioUyiTKy4eqXRJM1GGagXM1F8nRbvW2oixEft2YBnM5b3ho4DwkbQRWoJjcysCSbmsJnBh",
  "key11": "2x69AhMpAexZK6MhRfcKRjuuE5dEewRwhgdNodP5yn346Gfrj2BJmyVWwDV7nE8bpQWx4yjfeh3JoH2zLaS1NKer",
  "key12": "33mbQFce7nqLjmWPJMtfjwHKZiB6TJ3mW8TgknipHaA94qzDZAPiLW2CiUd9ueVL63ENddSmPvS9XCZKWXWiY2SA",
  "key13": "5G9o6MYgzuuHQGFY1M1if2e3voZ6ocB8UZmfLpQkSamVFHkHWrPCf4ygXkBW1wTNoNk7kpR3Zn8kPs6vRHniuLax",
  "key14": "5BTFh4qdNinwcnkZ54WKmzpNdXzYH9zAjumMzLZaHRfCXeY37hAojgxAxWbKkXJeUdxQYZ814tbqfuyutLy3mCWM",
  "key15": "47TrJAxZEQeF1tygYD63UcJtSAKbCnRXGcR614Ld2X54oBmBtGZ7GFar44FdzwbLJC4WMvXzDTnPqLooxSUyi7Ax",
  "key16": "4vM9UkZ4fkPpdBKzJZQw9ArshemybfoUHzfSrLWNwoh7fMQAspxcATyT6XNBSeDizMKrNCxDjrE5hW88ZnLkhsui",
  "key17": "5wzu13Cdjd3znjgpamx9P2xpBPbcWWv1881MZgczP8FikpBDztSYxKhq7xj8RRxzVrzYnDEeoEAucdNhcUmUckhc",
  "key18": "469pmnhWcYXUgMD13UBbwtxByNT9T2EiwDUKvYGsX2pDGDdQy7XHPwnKbBfS3aSiwR5PDtDKT3EQG9oW2MoT6S5q",
  "key19": "3opkQQopnHg66XVSSHZtraSo1YZNPykGcXGxHndodJBLXy1DktC97NprwUJqEYw8LWPdCbbz4qCjzYTRn8ZmZn6D",
  "key20": "3bTNwWLWMnJnqqUc5uxtDW8EhJEo3CrFPm75Se2qMqELfaMKmZmdgabwk8xjkH4bwFuu6TvcCbdXYZDR8eZpg2Cu",
  "key21": "4BYLWxoHF8G4c9JRA6d8XEbbwTXaWs9qpDG9eb7kJBwjMptcbyv4xei1KS64XoFqEr72RX9mt74hCZgSWs4LSrN2",
  "key22": "6ooY2ft6JzYtPbfo5XYyMHcoqopzMCJt7NK85DPEfR8NizTPAEEHxtzJsxuw29Hezyz5VioDMCyKjRAjSzoV7Tx",
  "key23": "3DbQyFFoLPW8g6RBjJHdf3pwL4o6gKYDSdQDhK65gvrtrABZHAVcDxKo2XXcnhrTsoQJEQZ7MC2QbFkr9zf3HsKJ",
  "key24": "4FiscA6e6iVZqQiCZrEBLuNNDTUD9eRAemkdTietFELsPhxNgPM7AWJq5B8rnydGsDGqmiDm3r2xfD95o8vUCMNC"
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
