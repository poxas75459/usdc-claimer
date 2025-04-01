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
    "5FVKBLXnr83NAVViFCRfuLXdim37FBoqvam9YT3JPdokgYSMpZixnGPetaTJ42gRi7HAp71LevGkkPVhBEveHcdV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zv8nfceL81p8W5h94vKRrH6S2Gp3CSSJfJQwmhDEZBbZsJhq2z4XWTjSrWaZCrdnB8yB59fEpkgBHDC5xurvTU9",
  "key1": "4q7CP4iKZvedHQJ1aLoU5wBxZVJXGuMpEWJB9ZS5NVngkkDWgwWbp7D1aGPfcXvz6pz77VRX3Ete3RmuPieaBCra",
  "key2": "VmHVktUa9q3Yev3HCFMziJ5DL1dNSNZfwrEfwMbEZWUbYi8MGr3ECX5R7bBzZDHubwH7EtwfQN2WCjD46dpDgvy",
  "key3": "3thgzryqyt2DqCDpVFVuQ9iV19tDRk3oFboKuHr1N2w6cVjvXtSgqPSyjMuSkxLfzcUvwXKoMVBT1M4xV9qcWmLc",
  "key4": "2R53MUpGyAvAUjCu4MgYryCPHV45sDub2aZQ8YnPPGcY5UiJs16ycMKhxFroxd3yXsjZMkhRz2E5hSPcVYzW1Eem",
  "key5": "jKFZT97oe2WQ2CDJW3fFtsYqJK572qw8bYS9F8CZWRUWFNXQHjUaUUpmdViD43xzNjcnjyU8Y9v5ftPsoF825Ey",
  "key6": "2La6tmhFhPFGnp816ajshZAKLN9K6huVoQktFQrWMJkpQURToWRxK7dvRBCrct5UuxS3GN75hwGwaxhBx5warLPh",
  "key7": "2TbUtHLDGpnEhWJ27WW51kZK2NjMnYQDzWcu1jM3drm7URU2oQMioAQRKGrLmLyzDsJSHFhu4db2x46L5DpTu18s",
  "key8": "4UG4gcy6s9LY8cTgYbH7yDjNhutSMX72AhSzB7dNc7Sq5RjAuULjQtngzYHPgHhCMYHoo9HfhBf78qZD1TJK8cpG",
  "key9": "pAUyYnWtzDtHftBXWc53LwYysqUWDUW1xjytsDSUXHgdYUrV98FWHbjMdGmVdzPP4QqGNmbKdXdaLxU86teKs56",
  "key10": "63MWyiZVwwFhZrgFncn1aTRB7NXSyfGY3RSVsEqtbbnL8C5uVEvGhctN3UwrT4uMVXr1HaaDNzRZUgBJHe12wGUY",
  "key11": "4w68W5RkQRpJ8EfhJKJeydfr5sSpMryG94Bxv8EZ7X6X68p3gDzteL2PekySdx7mYrwGhYTjKUt7GpLSyVizQsZs",
  "key12": "4jPwaTcv2KFcy7L7Pwm41emyoHnQRsL5hy4HijVTwA3JrN8Pf6EdAYmHcSLkkFCEf92AMvAfaxhgcdJX3XWXWWkG",
  "key13": "3ZZTfqK6c8fEHab6P4o5xP8zAz22rmjAnW28d44r4yoM7SDY5XbGra1GGh3LNn4qUFEJSUo7fyrQcMtZKBoUwGXr",
  "key14": "61iZxsYMpPi1faxau4ToP7kpFU7mw7A7jPjuWsKzECq3Bk2s7fW5PCymeDLjKjpvg2sRtdb3S4D2xuP1rRC6iUnW",
  "key15": "3WhVvcRDzWBwt5LAbwDZRWkLRTn12ZqLzGYNJVE6HcL1VjgKmmsKJSTYstCs32aW9x6jvYH1amTa9K6KR67NCsAK",
  "key16": "3WDgMbaw1CA9KyMFmQ8UVeFabf2o1ghpb1MfuC8UNd5m14MY86THWem1GvLwFYBfBSSqHxFtKrgdyWmrZ7MoaC1K",
  "key17": "2V9MNa3mAaQzvLqudmD34SgZAVSdYsCwETzTX1DorgP5bfUdTn8ftf9KvmcvmkyMRt5f23nMoAaMWhRt8bJhESPS",
  "key18": "4hpinJHNjZ4yWD95FCbJ5wb2voDCmo1vkoWBxBZ8759zpujXCbGNunTzFKnC4sd41yjaw2FCeg9ucTx8UQ5S4z3m",
  "key19": "3EXuaajYD68zJRvDZ6CDrWnpPyW1jDK3rssc7MfqyAmYgu7BVSSn7W5rKN5YnFhKRqpZUqdm46WHC5zQhqRGY1Li",
  "key20": "5zWVv6oKD11PJgvg3657X3URFUcfCrLwTdPQzr3HREFTxmH8pe7dpvAmDqnMZYHS96wiyZ84dzV5mKz31LNata5S",
  "key21": "EzsdjQtj9CdM4hFMGw1xzydzcSqUCZRSHNk2qAxg3kSqXdBVami4hZu8C6AE1BnK9bqogkQtdzaBBuFSDFnxoEg",
  "key22": "66fCz3LJ4G1GnPfqq2UfRcb3U9SiDVm3CvcSMgDnfnDLP1CWbTEF6oRnfXphUJTntcSzWz3vVxcnv2hxGkRsgriq",
  "key23": "26fnDA3Ha9PHwwzwDnjT7pydHF9xsbLn3adxWd77fuaVni5Cmsc5nkgqSGGQm6yx8dHikvwcb8tsvEJ953g22UrM",
  "key24": "2G5mrXX3n5ZvMN4jVtSNxmxspYYtgdfXe1VvpadUxVMoLVVDKY3KdEhachNopsduN78Q35D8UN26uvEQ55Dm6ySN",
  "key25": "uAoFxUc6Dj8xE4ckHhqj5WU9BAF8r46XxPNziHJ1kEzfrSzvhabZQQyyhVUWGxNgvaRvraf1GZTMyZFsJX8H2wv",
  "key26": "27cPu1Rdy8WbkGbBQ2tjknfx6aoEwAgDy33bGK8hyu6VGZCpvLkYAQwBTQGekj5XMFZJm5jMKQtfxsFFEFTYVyPh",
  "key27": "23ScQwGKmh6oH4BFEAxPdaQPzgv7wwiQ4hi6ZPXRCjpHhzb6BAW5Kd7XHGFo34HpY5hZYNepZJtop9iUmmHmp5z9",
  "key28": "G57jiLPXf7NyULvDyHncu9D7TCUZND59k54jGtZuQvcAdi9ff8QfruowzRpjEm1yzsExpVCPrr4vquC5U4HkQw1",
  "key29": "vVFwj5FAdwiE2dJWbZeT4ZEwTppUmMGwkCkjyJigMxSTHZEoReuroNT8ueSiSQvLLxKHHtQLWb99UGtP44EX5gM",
  "key30": "3K4z1V7wux6udWQPw9X6cAu2GWnS2BUibepFTKXE6L9Q66nSvQAMfBt8H8G52VPttKf1bBK4hRtdYcNJkYfKwjM2",
  "key31": "29oqZxubDWsXq6wvp9RzJZUx76tCGCGMJAHYh8qJUbuEwC7THsxpSR2igSuCgthpjVyZNDAT1zeWupKBzvyGtXyq",
  "key32": "3a8w6cp5nXffbf4BQ4gTzfasnqqKipjy6KuTky7AtHnP1hTbDohzoqYja7mTHCLpyj9BpMR9A1ux1L8JzcqEJqDu",
  "key33": "55f61qYKZVJ1cbwNYSocDYcJciQkfhyfMEbyh2UkwgZBujCATKQ4tzu2aXvJRJ8Jd8t3kv3uVYJjKsQ6aSRzkTU8",
  "key34": "5rksnhV7bC68vweGhcytiP3ZF5mXfK87sPpSJvJbyH3EbjeCFEH4XS8hkwMeveD44Paxc8sHwxKk81hWCTHEjse8",
  "key35": "3me9UEyd9V6arBoeDQUsxMGKb8ciqrhT3Zt3EM3ZP1ULzgcBKoL7UMJVdZgtRbaf2Hnr9MHG9AfZEGGJiCZkFD7U",
  "key36": "4c2yavkzANkv8wpCcPtzbSY6TGTXxDrFABzsJv8fQ3HUc2MsUwRv6sitAP3vGuCDYj7LdqncWnHCJQuCnefkitwx",
  "key37": "3C17j2BEN1g34tDf1ExT34XDEhXXADtE8ZfRBrXUCwjuXMbLCLCmyqcvjZNErsfFVsNoKYW8W4JPpgrQ6dZDuR3k",
  "key38": "2saU6riBxWEdu4kD3vd1DzJP6MXCdCvZiwm951XnT6ukgnEpxZSVCZZJV1q7TdfeiysagaUSHocffxSTN3GYhnA3",
  "key39": "4wurX9aP9hXwgpcD1izNJ5cuF3VZ7CS6Hb1fTJD1Dn1SpbU2idHu4T5bA4kZyNALhUBVuoHsiuZHXYD4DGMZ6DhT",
  "key40": "29cArj1czQp3RQErALM8ngo7f64ZDSrkadet33jK4i7q9oVmfdvmmVcKcdWkKWLC4eFM2Z6z63gPhcXWe71m3Sg6",
  "key41": "x5sKmvS7f8MKRPBydMUZrnyYbERPCcjWGSYSc8B7Y35nzvAv2849YA7mrzAA7VueWfSjGuAw7D1VwZxUnuTAEvv",
  "key42": "5TN8cJV48V9qu8oZ8zCeTZ4moGH4Yfx27HpvEp7FkadJP8gstZiNz1UKHdNHUeRmSeqtZehKKjRBpwijds2JMMJa"
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
