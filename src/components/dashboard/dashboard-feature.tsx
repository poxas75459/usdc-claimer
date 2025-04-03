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
    "4akx5eWdfGp5qpdDXSbdfeMrd88XWGHYrqyuVRyVshTV4EEYzP1upjR7tx858HgLDtd8c4bhnoC7VbTpQuG7ahGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZCgJtYpiziKgLNstia1wF3Xxbifg3W8WiYV257YWGrnrTCTq36X9svG9VH1WWULKqTMcwqaRf2V5Nxer4qDeM3v",
  "key1": "bz2iVuyVSywEwrzkHoewwR8XtqQnLRPSNewHn3ZBLucsQ2xdSQPgGHXYpf9dy8FxbNGEZPyH1Zv182SdwAu1rbE",
  "key2": "3QYshkyiEwFX4RtaaHCwLHrcNCQRyTfPpVMsNFBD4xgnrcV1a1oheLQ4QVfZjt76cs8FBfGi6wi8nLDa5vgc7WBv",
  "key3": "5MMgQhLjVp8R5mZhvgqhonUizddBPmZMr1KX36uNF38vNrxyRfpamE5hAvwsysgSnP4KY4xfHMMn9agZW7rKayoc",
  "key4": "eXySvs9F6xY69HH87PUeQ2dLXAPRXaYB3rqQypsC2azdxEJXfXQcWKmZREx3Gcva33pAeisBcvvcftz36pnZGS3",
  "key5": "66B5VdpS8VWb2qPgzWWQPB5X7f9ty5PbAk3XxLDpHezWM1V3LgyoQGDUUkyn3mHJBp2YH1XQrssSwQaxok4CMnah",
  "key6": "DttBLoeWW7AtPz3rbr5JPEGA6PNuVm1FPUi2ExqW6YB7qWX6Hpq2D6WSrtx2xV6inMGY4tTzWsk7DFvMM6GVpNE",
  "key7": "5t4fRNh32ZKB42S8bxfntCV1EVxmyeK4MaogWLL8tMSNCxwd7gLtcGLHCjFZKXPejDoaK4XtaQoXTixJbwt2PS9u",
  "key8": "4d8CSQ9STJHeVGbozTxdsuUPZ37qzpWg2MMTFhC63j3gtmTDmtYPrBAF765wvG3mZWBDRR9YJggB86nwf9HxAFJS",
  "key9": "52Ca1txgDcgcBtkdsGrGmRkg95vKpGeqoWAcKFunhxLuLvMEYAPeZg1ZSm4Bygx3rTWFcccYFsP8gn2Jox7x25VD",
  "key10": "VAu3ZGV4GKm1X5MTFFtxMAtz2fLpQjtL9zoVWV6QdXqLEaBWwGT89WSwEHXL79S8ZSE78yvZ8g5twDrRXNbR6L2",
  "key11": "2doo9A4HNKg3G4WiDKkrTWmVCZATu26Mz8oFEBfRSsjLCSjpW3oPFNXQdsDfBpZZnbBLqqfW4xtpc2dxkToNWqH1",
  "key12": "3ojNSUULPs4QLfwAa8ctpS91oQB44S9gH261AV1qkCQpvVqSckhoWwxbLhryKLTuspS6r4vnTzPoeUeua9T5r9H",
  "key13": "2sBbwvtzpMjz8Umq6RXGeUkYy3BmmwMVyc6eR5mBeYCdd2KCnZ1oSwZMgRBRrBF23YQYBx4PuBjJSdyQHRW5MFsx",
  "key14": "4orN7oYzgP4hLxk7ts5jKbgg8VyVRKjJJBgmUSXsQRT6MvZ4wJBQyTdgfFUJvrFQPCjqgwsuQrxCPoziasLcJgCD",
  "key15": "3yM13p4aJWXis8SY2XtshkKUfBv1GunwTWCZCRmCXVuk7bH4F8MJzGmHzKns9Wt1cuvqzSsDpXToT6YRWZtTwX3H",
  "key16": "2jngvuVir15YpDbYxYMrogzCjUtwXpa1rXhkF8jnkMKSw6oF2hLbpjRhvUFMWwGfE7gT8kAYMnpzp2Kabyy4AuKj",
  "key17": "41ixuvRZ3dp2jRz8aQPLrjyrFYg8haahojR2EtiVThtgPXXcSSr37s5EBtvb1PQiyuBW4S97je64ktUvZjrGvYPX",
  "key18": "KcaRWFphDp9JACWYBLgnUm7RRmj386itcJ4oHzvMKpcdAT7grbGMCWhvGvTXFpmekcXnWTuS5bBZrfiAh58HcpB",
  "key19": "4FKbCfygwrzVCEyvjKScgmidZmovQWgm8exzkpTo7Bta4rEL9yMQpfTt5xk9FmqKyUV9e3HB1zDuhaLhmM37RPB5",
  "key20": "38rqeND2p67n34odNKVMBffiQbXNKwr833cZYK1uWpW1qGDENQHgxLQCTWUDk664JfAkPTWkQbrTb2H17KxjWt5u",
  "key21": "5SkXoVNVQNDoNuq52ed75ztwBhPbnsXdrfZiBLdThGSPSCRXduPzYnwsYxWJB86EoCDBb53L3s96cbmzKBSc4MRH",
  "key22": "4JXb9AsYcmzArz6pmyL4ULyCayDoNBaMUhj1wF4TPtA9ATgGYw4br7bVC69n4csJpy9nXMjQbDAcJ9hborSQYtms",
  "key23": "qcDGXHJPaFWvhPoGRxtBYigVuHqPUC683FbThMdSXBpVpT2YeGo2NbkHuAGUDoWSixhht5u7JE3Ur3jZZ3djQKX",
  "key24": "2YXkCj3bBtgYKSp1c9ucb2KmY6cMxH31WBsmyBAatSxvac2KEdtScKDwZ3duvxkd7C4SbpxpqjETmExAUrcrTr6V",
  "key25": "4SfLYf5rFD3eZu4xsJRgo5wSDBcmGoxQSSk3Zi3sRaMEnNZTqUi3Y77sQvNF55C4zha6ULChXBqEynzwXAPRYi8H",
  "key26": "2qAjNV7iK1vYyTHPa4HxLGXuE8EqEtkyHGDtLk9ADnL4v1vRffBsFH1WUjxRtJU8y9zjPiUWJ5SkNGahZcrpzmUJ",
  "key27": "337VjU6ChAesuimkd47ii4b5PqhUyWYKVHXyuWwEa3yUq8JaKQWqjCM3VX5xarmg4nTLBpk71zja96Wf7vNmGDyX",
  "key28": "Z5gXabmKMSVWxNMCqsj4B1QxeT2xByn5sRnhnUMdCeAAFbYhg1pf4G5NoTKhtbWFMbW1tmo7QV3JjsUvvdd9k2D",
  "key29": "67q9RUoV6RSeQAUbt8o8qvq275S66ZYATvevUpq5Zi3irYL9dPnEiFwUoaVejVU6ABmLi7qyDRjBfJWVhsmiLhGw",
  "key30": "4NkpnJSAGGNmi8tBMj9s5yievLDupbvZL3LBUSa6JK9gSuuVm6gmhvd7TfCmt1NgPAhk8UDwBkKi3YxVbNf6s28H",
  "key31": "5RMqsLQvRq3o5WkdAMmhxn3r4KNTUW1z3oiaLr9LBVqVmrPDatX8jJTdJdi6xYvSFBDpMprujK2S4xqjruEU1HYX",
  "key32": "5kM6WbCa6urF6w5winZHkjgLzMzB5A94vUUu1aVQizty6SuuHiEGgb13LzWzQVjfQj58ejGrakzCdqjrFZZLSABm",
  "key33": "qBkkjvPXgAcGrfbsYsGJJRSkukRZEtKa4ZWAJQQgY4RvDurdL6tftjXytmxc1aC2DnYZez2Zw5mckzuGmfcDQAx",
  "key34": "L4nUtLT7hqREvELEHd9aardCHrQCKQnVh5fpcF4aMSDSK9LGDvow6SYkc1zCVqiWJHuxBMMqNEx9njSLynctXtx"
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
