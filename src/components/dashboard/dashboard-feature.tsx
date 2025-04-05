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
    "5i6FpvQaeq8VJdgkfBNmVXMoMMQtXXHYb22Jj6NjbzgnK4Y9gYVkWpaGdMNt6i9DU7q7nboM7zVeuVhRwNjsVn8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCTdDq5xuT9CAC86wPgxqqv7cVSNtpQvZ5ifRpLhmqodLiJCFLxupthQeLqxZXRTw2W4CRNqwphWmBziukE1L48",
  "key1": "2o2GU7AFUGEp1Zd5h1gqxz3GLV3Y21gs1TpZmmMptUSQkBzqLaRNCZY2AmZWYqG76sRvEbnkx1ZWZxRrbeT9irxu",
  "key2": "4oT5S9uodk6gh9eGtksqTmzR6SbnKQ82pte3R5itsYPJGEPEcGBteqTLZJjhh2yStX5nAosujc3HJ2BCUJUwp2eW",
  "key3": "27e3fH7bcsHLY4fUtdNYYpyDvphV3JJEXsK5QZSmt1u8G25ei7ToCfvdXiSCNTBEK9nkdf3utgEeZpyax22uUdP2",
  "key4": "YJCoGZr1vJfdCsUZTGBus5EVHwAf1RR4ppYJ3YU5S1NU3fpYmXg6NnMfSRH5EZrzg6o1gxyQtMqSjTVpH23Ad92",
  "key5": "4UKf9sGiqaVfPjthhoUC57ZKmiAzvRZ6NuAg8yQrNea66d5KYV8wg5D66cX1SUZzR6mxrrMRn4JVkug6ktr8CBTe",
  "key6": "4qRrvZEyCdpF2hLFLafjqu6jPn6D1JpY3UHjnwU23KLVEsGZyF6cxSaNQx8Pd5UEJ5eJFQtVbkZxoGkDrUva4V2b",
  "key7": "3HZ34ixk8KqFK8WknVuFX1TUuebMtTcjdBiPcKFBP2cGQBM7avcMTKt8t4LCaPo8smjUU6hZe8qqbVNbDsa5wMZX",
  "key8": "o65TTr3hW4aUHXAnoYjtVLciRowL2NpC7DayPM1runzDewePVspZMAxghcR32eqsZgjp81eZEXUdaaABzvrEyaZ",
  "key9": "344Gz5Yw7AX3R7CqLkuDbnvWH2UzqN32dXjERBueNVoeNEgMuLM8hmbP5845k6SwFKFxDP5eUyBhbfhXzHT7dBUq",
  "key10": "2Vy2ZnEt2CqBQ9omhxAXyYgK2ZvMpXHi6syEY6GxvKMwF9yxfvB5zuwdVrCjvBXKyR3UotoAx2GBkBmtBPGk39DW",
  "key11": "2nYtw5uSc1Dyka9tqsNWFvNy4pxk1LBszB8amUnvJDxJ62ryv8Nh62gKSvynkDNKSdxY9RSJDNq8Zy5Z4KKnottY",
  "key12": "4sa9HRbUzytoumsXxWbyF7QDr9wp9NFSLjm8Bd2mpP5wTiiiuEDVxxN4BaowGRAriNTx1GpxE2D1C8JLMRkcqXbL",
  "key13": "23SmcRt1qMnzrGoP4W7uSeJZtFXTFe3yCvRLFZdr5BwWbvq1p7xngvX9iKbCqxmf5DP7LHjgCvaExPBCbgePBT9a",
  "key14": "33gPy5EjevHyP7JofqQhi7ZjkpyQz3kcai33gvijEZuTJpC8gEXTfq66pxHrncNqGsjG3EteL6vMarqGga8miC1S",
  "key15": "42FFuStnydEtENeQ55RmAfTCZukMLacxmrzvCoPfEjmn4wRuyjXn6rKAjgKgwv9QHUySrzpoFTZWZ1nGH1xDvDf",
  "key16": "5B9jg4DiREBWrifM7aeXcZVkS7d6J2mERb2mmCz98JrBe8Uiy5D7nLoHSJpt1v3mur6KsEZveegWaXZ9LVMuR49S",
  "key17": "XCV5CcCDz4GzEieSdLs8BVCJKjsZRFUH5yeyppNQpnbh8zZzMFWcnnXG7wtfSxRG9tb5QrEdAThDMVQJirQ3GJu",
  "key18": "FYrVRHVmY5VYGwy1uS7JG7nZj65u3qpENLkzb5UunHcivvR9pBHZDpZNfAN71oTsQJr8oVZPJ1Ak3AWcBPX7u2U",
  "key19": "4mzZeM3kCKQ9eZ33wP15jfVBhGbPNE1jmnyFECFUGGCetDfJ3FeNBoxqY1amAAuFZKgcT5K6wfrHYMNkMq2rdpFU",
  "key20": "2bpXZSUuAZVfF7WosPoDCL5oXcmSiUSRXHBgdPYeWnhbEuCjs2nMjeWbxahpSLUFNFvt6oKPHPPaSVgKNZsWbXAU",
  "key21": "3ibF3qqpX6zqjeuQMUCaavSW1699NTmsxPminoA2jTysKVKfjZvL6QXqipx6VGnJUpY6wifWLJ94sA1ei7BAEzze",
  "key22": "47B7pDF5vfDgaVfNd5qqSZ2JQsN1VGvJcDVQnbtn6oLnCCZ3wQ1A8Wjr1wMYgW3ysck7QPwWrKncpF1i51ePFHVP",
  "key23": "5MRVZtezTtUmeB3ykUz5xebXbg8XgcUf1VoGQeXkGWeyjkuS8MN1Q16DtEq8ya2BNVDh7emsjNnpr6VpgBkqQdnw",
  "key24": "2fMEe8gPcr8NbAYUKALWMHNX7buxTAqTsAYoB5XaAxmEyQduoDHeunv94dHjQLwwFzPsnpxsyNzQJBG1Ufvy4yC6",
  "key25": "5enQfxNeTtcMwKTbtbErZi5Z7TkcSqyHNWxSzxpVrdF5sXiyBKK5wyHA563JERDViRZ9q2oA3Dn7A3e9CTNXYVxH",
  "key26": "2mXvkatLAjeahGVDWMtCrtGAqeoGTgRfNytcz8h46YCNP31VJf4zdut2wSkb7WmK7Y6zT3jhzjZGRoZw9yZXyLK",
  "key27": "5VmfKz9z8vtBAyZprsVL3FuLyD2SyLH6Z7Wpt6q16ywdZgBwrDjy4tXfHk4exJc3hn89AxiFWygw9EahoHGkUn2B"
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
