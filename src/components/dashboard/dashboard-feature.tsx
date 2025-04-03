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
    "EGjVBkqKTynLpqt8huvsYkeWqQ4z1R2pyW6U8hdgoppUNnaq9y6jKHSAEY7rJWevXhEJhW3yG9fCyfFrnahfEpH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EtudfcLkw2evFvSKvuVvFu8VtH8nRk7jbDCfCCewcS7KzvoL6SnjuZUwooWQWvEhYsS6MTA6HFFVgsuYGujkjoL",
  "key1": "43fMMZViqCMAv9rh4MQEVYrpSoRzdVRrwEsdt2NWhzaye3x39npVusmgRWcYALrStW6eTwWeGjtGonoqPnURtaTA",
  "key2": "2hhEVt6VURPksDqMLq2g4UjhpgoJkcfrQ8AtJn3oww96AxU6XiNCEmmqjpdusQ78x4DuNB5PaC75DBZxHmQAW1t5",
  "key3": "2cpWXDiC5rrcRztHuYpfZQ5AcKcrgsmeCUqP4WwjuHLzAXJ8PN9t1jqoiHWLFgTZoJzVbJvVjo7zQRNhr1H8JSYx",
  "key4": "4Dxyc2RM4Um78b5kTBkuuTMgy6oPr3F9Fv5v8A7GS9MCCUhGM8NTN43NiFyL12GW45NU6o2hm89axLJbwSspmwnS",
  "key5": "5bkaKE9Rfd6hBCbt8gjQGAU55Fwy7bDNdXmPwGrKMeAd5i9SmefZCoysjExg7qBAqvu6aFMr3zXUZXwsPVMiXdTo",
  "key6": "VdR3zqR2M4koDFdh7fuDvw3F7qAPiCz85YyZvQ6HFYbWfCM8wwkj3L6BRyrD4sp91xuHzHVDXx3oQEjq699uan9",
  "key7": "5CQzMNxyFQXxSYFcH3ksQSFRUi61MhAY2QNwFVE5iNuWhXxtsaUX4WXfhTjj3ViT1A64GdMn1NCBCJKtD1EBcoz3",
  "key8": "3bnovs4E92PaW9RotH4CHTwZ97RihKy7WokVU68tyiLVKcLRBhSrVvMnsmKUttvPwh68H1DMizqdh9ieGaqN4NBV",
  "key9": "rHiw3dxqeBUrakRZ3NrdwVEwrRUyWTEKUm5ykkzk6hiWNoRWfGvKxsXcVW4xefYNkyVx8UAVzj2MuTnyxeMuKWR",
  "key10": "4GwcExxyHXL4qPgmCEQ3AfACFpgrviXfeqoiaa4fmgi3V2m6tV4Wx2gXHSXtPKoPuST38JmvV1G7bu574tA9QL8g",
  "key11": "32pfzcbeqKTnfQb8YWfvJwCFqd6mhsQcU6CLQEYauUs3Ys13r6y8exA2dvko7bXBzBah1iphASNxc9EgVZq5GBwZ",
  "key12": "3XDQEKJGU5Ciu1BuE5pbbPutUXi9UJYpwB8ZTSin6q2s5Sxf78kQ1WnWADAPnHBRf12XGoX3Pr3WSotccLoBSHM5",
  "key13": "5FYT5x1qDFU2wxpyC7zRTQqHkReW34gg47UT8ihv5ENqdpVbmgsXEYcL9zqcCU6tHtSBHPV8XmNPaaKaWj3UEPFG",
  "key14": "2JX6LmEaxPi6LHBRg4BHTzKGRvTRuj6qnuZUjjbhnPUunPUW53xmBnAhcqKYgBJPmeQhJX11GWuU4v22YvLtvVRw",
  "key15": "322QudD4jZcs1Zuwnq9S2k9XenwWcgZhN3Hzcf91htfYDWqfh35f3zYgP6aD83JLf3VYjEY4qmCe5q35w7w9xzjf",
  "key16": "2rK27r4b5CKgJUB8zogTNwQHLWoVKWMHwTXYdGBTBa7M6F1Fy8UnSSGPamfanm2mDaQ8eQWZURTp68fheiBmgptC",
  "key17": "5NjhFf5EpX2Q3x8zQdhbFkezWDkKZRm1yUrJU3w7Jhe6KLMpj1YvowSFaSqwZr1FfJ37stLHYWQUfTZ9qY96aTz4",
  "key18": "3aRTeqQcj8rAqp61oNvsKyojuZzegzLDvNjsH4sfpK614t5NLo5DJ79Ru7CQ1iX3XuaXaBHUagkeX3WqmD6MURS7",
  "key19": "2xy6g8wScN9NT6yoaVFsHg6orLfWHUacBSkK3w12mLfaeks8NktsUwndmWm2te2tfYgZSTmVhSXJYV4kuYuyUeG9",
  "key20": "3Ao4z59ThqqKbkxppZNi9jGCJhdAdzuTK6EXLsjo9RWVo3YdQpJ6m3AUpRkZVed8gqRQa4aed7sdZfo5zC5Q8zHz",
  "key21": "5mVJoto2Y1wDbZ2U5TC98QbPmxo6krUtATcgDeAytCxiAunC5n56AVtvCicMww9bUHKp4QCNjiv4JNpLvosvfNUQ",
  "key22": "24AaCSeDvLmYqDe2zzqijvqLEEPizao8bYGPFYYwZteixVyrbgU44vQHmHCvbFHrfsFjNd3FtGtG3r4kapjC6wiH",
  "key23": "4XdWUeH7wvQdL7XteaQgPfK4XRn8QA6C66jkuAu3ZcRbqTm2oaYj7DW5PRN1LWPjZ1vUCga3ZM88F4c5J3tmRxiZ",
  "key24": "2umnUh1j8KXC1znjCk1S28vw9oZJeDoBiLVt5W3gb5RHFM6NnDgcL8iYRNk41a1WC9wNjTa3xvcqFi8sqoyyxRto",
  "key25": "4rqbWaEo86xN93Xg822Psjf2HnMLhaxUgAuN5jGsbWEMhFZUujwB2s43dqTZ46CToqdfHrsXurMdkQPditXN6L29",
  "key26": "3bh1KJKHbPsoctzTvFufe4nuQSu6ibpX5nkmzYSbwxKYMBZGxE3PkZWw7adjmFs9MwckTiTZnYCGVxztoy6G5NpJ",
  "key27": "4T99KmMx5B9V5vpfm3kvjAkX61HKjogL6vkyxaGQMrvSSY8eyG7B8NqzLzgfh1dS8SLXR63t476ZsptPZraV5k2C",
  "key28": "4LR1oPtri1NvDE5RMJgetbGpFwwaeWrPJz6EwspdLv3Sn4wCU7nni1hdXrFW6KkYHLhs78Wym9FwRbeEA9XtCS2W",
  "key29": "2iP2iXHMBCFEaywawfofV8N6teEikSvccVbMK61AWTLb5MHBo3L65QKNoHu1HEeGzQi7DmCw1s3BicHmRmyE3RFR",
  "key30": "2XGNvdPrRKkgScdNWD6ryKbv6bAr2q5iCp6nojX1x8TSUeiqLT4Ja1xebCDJ9nJZZzpLs1Y5YnXUgAGJk3Z2awBy"
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
