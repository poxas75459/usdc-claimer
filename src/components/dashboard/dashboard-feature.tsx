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
    "2FpF3AE2iJ29XHbyQg9PANMxfDegvVSEg8LgCdFt6zgbJvXPyrk2feCrVdQbqSrESNrsJhPXuo6PRxY3zk9PDmo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fDBeS1gUf6jyuMxan62yTaYLcq6Zq9a7KGH7UCWvNpyqLgDinJ2HQnA7BskR5g74zvyjcT4JFSfcbHvXWdXD82K",
  "key1": "SBQcSQQ3FZRcpf9V4dSo3Xv3fwWx4S5RosJxp22Fi1n9YN7mvpJgLZkMEYgRvp171bBZos1z918U3nVqHpCzXev",
  "key2": "3CEv1Pi4LCnGwk9X3TPzancdpNbs9DXFe329i7LTs7dDu2g6tv1AeTfcSfA5e8Z5aBxaNQdAtDrs5NyUJSGYfHrF",
  "key3": "31YZhA6EEfxbY8TFYufkBjzLx2GTaNHvYssu7ekXbwP1nUtpbNht15sffWdpDgoqbzUG5Dt47ToZTqdoqx8GDL35",
  "key4": "4GDosFUCkMPKyt6VMU2qspqDs3psRooN7MBVYeimYzhVXMEJFR6SZWEocdMYWCpdxQVx7iANUneswLzjBnX4u8qp",
  "key5": "48HZPj1MMgJPrramc5qWn68zrLcy5ugJHRKLecceKFYx7TRbWc3hCbPygTzruyrRtUX3QGhnWY6UVGq3aY7BhVZw",
  "key6": "3pcgQq2WtWMwTio4SJi1BsDFv8XAFgUqkrgZTozbYA7pHWRx12dYivmKbF9XU5bNTT427ZeFaG3tiX6WyqKZwxLs",
  "key7": "3EUa2h7zQn4KTnWVDDfaxAnNPPXP4rGEqf5VrkHrsJadA25Jm8NNqdaVbkzWwnPRPt2EEQK29FPgkcUZXv5FqXz7",
  "key8": "3muyrLsai28a922QEdCzPLzScoYzBMu7pH5DAPxbt4AMYdD6m4o1uo6c2RPSTSDwWGFH6BjH6k5VGUtmqXNPPcvZ",
  "key9": "5LVPQU9i2bV4n1m4e83FaZakUMTKTbLxpzKSUP6YktcwPdRxGLnQ9JvMPzARRUUbizPBMuNvNBgc4Hdyi4LteZid",
  "key10": "uBc4UcKg4YYNAQHwdaPeq2Fd1rxhgFP7rXg9XFopHvX68Uhs7NM3LJv4HXwT8E9nzRmibJAZNY1gprE2tudYtYS",
  "key11": "ZZhwsjWeqSbqgdrrKWAZ4Qu1iVCTjXSCRka7EPdMMfkTGNJGCjECunYthYq1JmCgAaoTWCtgF4Hjs5xHNtdM64k",
  "key12": "XDboxnDeMJph76YptDbKHDhw9W3qChcLMWz6chaWSaghpoJaz7ic4oaa91zMAAk9F9Hd3TgakZA1pGnkesVakG9",
  "key13": "4qeKXZkgzAZrGfdVcyWXPYSZdKLWqJgvboqBuCtVYXp37sH9nAs8F5wqWizMy3v9JthM85YmSYjcUWVE7pagWuCt",
  "key14": "gf8JrLBUDW57ZZE9RqXCzQJ5mumf5w5gxHKfCxyeJ6GhMX4ZYxQKPF23un3PTEcYA3fJLsfv4Gcj1NrEneSsMhi",
  "key15": "4BykJE4dDXczoWa7XfJ6aVGruoku9j7SHDukzw7fHrq1f8MPAs8WJLyvtcETYytQ9fR9NYhpenCnrwgD69c86F7K",
  "key16": "4GdA58XYAHLpdvgdYomZue9WbtfQpQfGZvT4BgWQzSFAgAFSY6S54RdCDckrkHDyTkzc5uw2rUG2PuDboMc9PHDB",
  "key17": "H9tS61gXe6dCEFWrgqk2EaT5VaLJNBbF1i8wFCrahfihybcjE5iVuvrhTXmAq6cQhHQ5PF9K25dCGD1tdbVcCp4",
  "key18": "8Wk5xve4asYRnNmwbEosTtfjyfcREWrTsQqUYAmW4yQt2BuRSfqMmHv6F1KHPkvQF6XBMn6PLJs5CUZEzTBdkQC",
  "key19": "4GM8Y82M1qpzYxe3Ww4nSJLTYhU7qxceZFNMm3pnQXj7GGp45VqiaUvu2uSYh7YVNvUw72y5pU5b9K6J4azGUxqf",
  "key20": "3maSHYuezkcKHbwq3WZV8zW6uSar3BrZFQDM9yBztt1F35KYssz2wJSNmJfeQbM3ugFdtQ7ztcvyfqfHSBXKzdbC",
  "key21": "4PwENYEBjz9s5caaW6818tGW9chFENmTxX1iQbKo7LSHAvXxY3xxKRVyfMpmrDUsahJB3LLdhYedPfunGtuzfmHu",
  "key22": "2PuEHAckDb2xPNSPBN43Eikvcjk2NkjBs4agE9kzaMbqD9UYQv2kW4avswudVgjvzhYCQY2mTVNe9soeXeEBp9yu",
  "key23": "G3D5R7Jtb6CAkqGAFo449QBWhAep7bvvPWPbnSLteBochVL1kecP8taz5jP3UhvXmP1FJvTwe783o2xz67QiYXd",
  "key24": "49SWXSk2d7t6maCQW6pGhLhZrpmrccUH2vg3Q8ovoAq4seyjqhwYSUXdtfHGXDo2MFRVVzcaCiX7bKg9kqfFvYXe",
  "key25": "3FPTm4s8qYV2nhVhrVMZoE713puGJqJK3PtnNL9RRneHzek6JMX63gm7Z7dCyLtGjXnsxZWqoo6i6bQVPSYn46F9",
  "key26": "5nsxbWKt624EztiiQZm28mF43wbsz1AZnkP6KnwpEGeC9k1mCbnQp5z6U441HEsd1ZJU3pL2Eb4Z7Q2oTwFLriVS",
  "key27": "kJyxiU1mLWkkUQzWBSYsnuNnfeMoVh139BVmZPNQL5XdmoXT8C2ZTPfrVNgfGe9qjDmZ58oJMxjAWYbWaRi1j2L",
  "key28": "28Zy8XkieNfMAMrPsry39ua1KP4HfZxpdnrUxLpMGx6mpdG3atha3x9PvuVzzHK2YifDZw3xwDKnbBw8Fss2FH8y",
  "key29": "3Exhb7Tepzfs6Pcw4Esv4hMivFhF19bPShmryTdiEkaR8yzpsoY5EGAmiac1v5rowdnmjNuSAxHGZ56rX8kq7nJ6",
  "key30": "4scdNy7jmPoJNhGTcNw1iWy5fi5uyKtBEs76USDz13JJKC4UgRLSfQTQHVc1kvR5sgxMPzdM1nQozWYDMB9mSEZh",
  "key31": "5yaQ8p8bdbX4DCYYkN5ELRwrj18b7TcCK8Xi637VKsPKmMjRjjLY4aNig67c1qJWErptLZ6YvXz9JH6JznhXwX2w"
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
