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
    "FMYhiA5ZZbLANtaHbdTSCNdpoiTnk4VqWA6r5JZuZUk5b3rVY5jpqErkRLVzaNTqR9RT6iLnb8Zbnh4NkcSCJNj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CKRGu3bxsZJm7UzqU9bJkWWK9WfcJTYeSdimFBhoTBrMXXai58vFJ9m3PSrkD8zfj5e9dnH4PtcRLRv4i7rPpK3",
  "key1": "5WfaX49SJrrTnR6gtVb7vNExcqrsdrBpDcthqVbHe3pWbGLqdrcxpeNNkUeU8PMPcT67KruVT5Q69rYJdinqeUWY",
  "key2": "ne8SFD3PFxFsnBVyqQaPpRgVecGxWgwatMF1TZU3zozaEewicMxdCLKmQ2Rc8ax5vEEiH6qwkXzAzvBtPhmAzVQ",
  "key3": "BSJpYVmrGQodUx7aSRRN7Kr6GgKA3io3q3jkDSz8xTRba2ip6DRBuPwALyMzDrBC3fzCyDRwtnj5VWUPK1hc3uw",
  "key4": "2ex4qDggJrx17Hhfxn66qzWkzZjqAi51x2ciCN4Kp5Z38DRsUzotdHWerJPdentLo5VzSdvbQ7DKnEPBauRzs6gL",
  "key5": "38PfattMvu4zmYMpuLLG1MfmKDagSvqe7ggDaBN2W9pwtVtznpjceBhpPAhdoNWmpHmNRjBZysw3KQJ4KkD3YrDA",
  "key6": "3tg9UR2DqhoKGwUG5689GkwVcfcgjo1sCMogJoibJzY11Hdy7tj1uY6Eqs355aYjsyLUQV5apS9AxcEHLUD8Bkd5",
  "key7": "5MUnyXE4zJAarTHY6QCfMru7TLg9jRnQWw4Uewsjz2eBbrobethePAZmSjnSvCVL6FpS6jeSJSp6iLzenBzY4bCn",
  "key8": "51c3xP7bFfCzKKRiqEKZuSq2GDLiH2uEAbzi1NmFPVGvy44RtF9iZj2DNzLbgcFLa6bpF6gGUMygePRJHGYHeosA",
  "key9": "5L3jrXxDp7Mipa37T4J87oxyg3mSh6tobsjXrcwbZwwza7C3H9c1ZBuQbAMtmggZQ3eZarswCsbUxKjjBzYmp5xr",
  "key10": "3YmxDXraEZTdrbaL2CfXeZVvvJDQeymV5pLnttY36Zcv343aEbqQmTfTWudMvfybQ2tKpRPw8ZwdGVSgU6hMZBcE",
  "key11": "5DBcHqembPQF6t7rsA1T1XvJn3JWeYLEchUwrXe8nCFcuCbZ8Zfa8KV5kXxbDzLKNVeZ6syzj9GBr29ZzwEjuVvY",
  "key12": "gY4LLCk6fc2HQiPNWnzWkHvFkh4mhYBywjjU64sWs1xJJvwGMUeZQqFXGoAwmUz8EfzZJRS4zUqYVTywFJqcJrq",
  "key13": "3gNu6RPfog85cMdSdkj6nLAammmsweXJJMAFWXJy7WzNFEFGqErkFegtfCEJXumhu6XS19tHQZYsYLJjWuDtYdES",
  "key14": "5ZJCctXpLqWEMJzhTuvAZ8FuDUjc21vXxJbrQ2RE4CFNsjk3JdzwfKEcJqXn9StNPD4EDNUp5YQEgwvg2xkwC5tE",
  "key15": "2jSf9BFodBQfX7S5Xj1MZtB9m3Z9GNAYcH3szCQHbLHprweRUK7ZVL3eTmCTSba8GGjAK1pBLEYfnveLsxmwM9Dx",
  "key16": "4RrH6goBfe65Prbx5r4dSdW6ZM1rvGZtCw2hJyTkZaPLixs2DuzQuddmYWZRdpE4Fq3QZiYAxQ6WPdPKEh88ACU1",
  "key17": "4EVu6ZyCZhqUDs179RE2yLdYGTRXfEE9kNJfoDc4Zox25DuBKuXB2ouRV9dnH75BXR1iVnmiPRoCtLN1SacNaAsr",
  "key18": "9FQUxLhJh8BCG448iCXHAP5n5KauN64YWHRBbLd5uBgKmukxm9a93SHXnMk9cMFhpEi4FBG3amnupB4FK3ujkgx",
  "key19": "5VnNX516dYozgEEw6aPy5CCEVQjk9cNvpg4zJeZ6Q8qsHg6zizFt7Assk8h1MqYzbV4Sw4LodPnHoRCt3B8D8cJc",
  "key20": "4o5RN7gPYaVoptrqMVbNbQrEPH7v2g8MpsE86xm9zcSSYaWGPpjzSU7ZyoP3YaUjxku8MEEDruRoP8d4RpE4a9gu",
  "key21": "2dWvzY9wom8erKGESNMCS35mfCjoDSeTuvKxtXZsCJ46ZgkRed3D6xZMCVcVqbX5u8bKcgQSf5j7v6xm7EigMo8F",
  "key22": "26ZeX2wSkjDLaE5hB9eYQz9CSojErpNBnCSwzAddyX5skwRi4tZ8u2gLA2kc7m2wanTyYsrPzwKvLXQbmEM7Q4Da",
  "key23": "2GSeVmAX6mWeWz9sdwCYHjk5vwUs3XqJdgbbqxDF2dUm1tfZGhSDsd32KkB1xtWT1nX5xgPHiYqaBq2pdUAF1Raw",
  "key24": "5hyGmAh4pEhmTofmbjSv9PicZuhbhBFvw3TEC7SRRL8RWviUHh746ScXaHeLWFXkxreAXtYRSLVMC1ZRbFwvmzoX",
  "key25": "3hE7KjAf1UxQqFPcQ3NWmvbAvn4SST5R1S79GT3dybyXh29GHpSDSaEbNbmqnn2k5YiE2qcTr9Lrpa5NamNNQtoe",
  "key26": "92rd9Y3HggL1TMSGRxfGTLzEnb1U7vxqscAXUFi6vmHAZkVYm2z4BABMWwQr4U2gRUyzeJrFB6T9Fxm1m3kKg8t",
  "key27": "3W82pJtR7sSf9kyZB6EXVM8YDPN3m934bi4HAsBkrGHTdjTCbrERpQX8Qo7BU1xZGGtJ2QktaBhMMMEYsZNBxvwz",
  "key28": "4hptgdRcLTzPHEB76egqZ4edyMTMuCprJaCvCGYrZGCWeVw4H3naHQBqfmxfwdedDpcQLnEQXsDf1znXPDbb8uZ1",
  "key29": "2z1Eff7SmGS28qz9vxfZjWFJSpQpwxAqpttLpScLPY6yj4utJN6cLuGGcrBcewZcNo6SRUDjrdciNCx5u47M28jT",
  "key30": "61uvBAUeVvQHwRrNmzRoJx2u8fuPKNKGbsGhiWcfMqK4WZsWR6rgmMRPZCpx8h5PNNmrmH8Y3o498wHxa3LvqMQJ",
  "key31": "4vpGcGn43bSvE1ibj3DB66Ey8dJs6up6sqAFexxvT86v6zWMMQ82CBaPcbQ212xLx6kDCEvJGLRR59ccfZJGedqu",
  "key32": "2Efn3eHM7eZSA9z9DFdakcaeNaJ6C1UyG4kKMKF9HZEYh9g3GfuznazP3EYhv1UpCynutFNm8gXGDZbRovbFBN2R",
  "key33": "3eoNUqH3zse5yraK8hXqZsyyMUM2LKfv28KAnjAKRb9BsVNzGpbsphGxyfszqPBwTsH14Xucy9ew4kyZ2SPZ9xb5"
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
