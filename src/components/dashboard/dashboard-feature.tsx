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
    "52sp7mbSVGQGiQxaAx4jjUduKcWrvk1xH4Un5bDdvBtzQJbhm1uWdSjyc27vqHX4i4eYmJdFxJQMoShCp2TUD4NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RZicLpwMMZgoziaKi12j5oBU73PRes2bY2ToKdfi3bdDZsqjxkdZjfk7eLnPXJKD9qvu7Q7JdJagdtDEVYYb6YZ",
  "key1": "5xKFKKqeGCkxPN3rG2R78qn5fEA3oxh76EwrFYxtwWf4kFCB1vDZLW894arAy99piAZnZbyG2G41RwRuBEW1Pn8U",
  "key2": "5Heo5vhayTwx6icGUuhNjGaN6g2et847jf3W7SwjkAwdbkNpZnmbC59G4omVRMGoR3DpddNm6Q216QnqWCUAPQhV",
  "key3": "oQXMPb6Gy5ypaxXSsB45Q7QrQ3HkV2UpKUfSrqEwx9kLqUpyNJicBQ8Jpimp8dFVDnz1g2UNxD1RJZJ8pj27YAw",
  "key4": "3TtNS9UtswPaNR6AHkTDarmFHYpofLV2pw43kWwuMjooYV7XuYEePCf7GUoAusCeqnMJ67uqjCnTAPBzGNjUDnYp",
  "key5": "y6PV63qoDb3QX5Aidve3yo7CcKjhbMTDYxpV5qvFDFnSpnzkUmw1DEoNfusioiSzESB39fDMrSQt97BeHgqi2Wp",
  "key6": "63KzpSqWG8eHx6fxADMHRdJGmrebWJAK3cxvTTMop56kVQZby5dWByargziNNTNiwdjXsgsVcYSrwjv1cS9NUKeX",
  "key7": "4ghn1ku54vmNV3hkXawa3Z4uzMYMXnnRMnCfSVU2WwkkkxG8mj2ME8S3PdD7P27FgokN1ymDvKL3nkGaZ7V6NDEH",
  "key8": "2HA1jv66iicRLjBJYU63ABXfcuf2JqZ9LQt6zxiLgkfkoGtTkX7JBx83QhFRBSBuGyByvT1LXhVPXdLW2pqn3XUJ",
  "key9": "uTzAS5fmBM8QoMVFux3y369axpzFVEyvwoax9Ww94wbTfCaeq2BVVn3jPKpuxBXWLi3ZijQtnCot2SjEkr3eRhR",
  "key10": "fdgt3Add5ZJKjU8xS7RDNrmRcRqKiwL4y4z5ocJTCVe7wFNEc68xVZNkVSYyBXGNkZ6GUdAYmNsZqy6S5LrEVrt",
  "key11": "26MgDDnwEzQTurwapqAvYTw4YRvsiDuzMqvWATsUEYYmaeecmqBvV83rEQr3TFtWsPprbyWQn2zNRGdLQfJ4Ty23",
  "key12": "4a8jSPR7v2rPKVsnYAY36Hao1TrZQjVVvxEKhajFBuAWnsnnTAqKhZgTzkmvV2vxFxyoPxf38Y9t7UrZda3M47aW",
  "key13": "xxnXE4z38YcdRQZPMT679sS3miRR3Am2kQio9zk58xJfK3WdLL4Ax6DySbUGa6S2igfbLzmcNEjERuCXzDxpfPx",
  "key14": "2vukuuPTjGQHpP2hgHLTux2ErPw8dVSaRq3jHocUJPXmVPVb33uVZbsGCM9ZweUxh9M2Nz3RJykrxCs2CCWJQep5",
  "key15": "3uqH3JHJPok93om9JiErYeFooPEqayRoBpxGxpLLdqHUp7Aw4w7NyUHdapg8X9kx8hEtnF9SyWH3f5emNb4c954T",
  "key16": "33852fNgcjVcBadRqaeqWj1ZPTEjq1nLWs8UgkBnFSLcpgL8DKic7igB5B22Qw6HN59cJmfmy7KD3dRM1iKXHUyA",
  "key17": "4XPQhM3hmaM213ypncwxXLKS59UwC6X1A47tKRWhH9ACcEi3dx4hBnQ71kF3NAUZX6V7S1dzsgcB4RogDvGiGTPE",
  "key18": "51oGVjEwaJBJF4vVD6rMktfkLvxkoFfWRKm8jHNBMoL9GQ4XSSusZR1oHgwom31SmLpavpihYBcxMPhs2xB5xyu6",
  "key19": "5zUzPwxbZPSfyuPpnN1NNtn5JeV2x8JNNXdsVaoHCTfpcCPHuSCWCesDeQXu2ocfji6x4K4fANFLjKo5nXNni1Pc",
  "key20": "gbM9Z9Zz1fGWQcVK5bpJZMsbcxsg6tTjvapU3mMARKyoxwrTdXuddxexmcm9MfsTNJWtqtdXyPwyycAVptT3sqK",
  "key21": "3NuMLC74WvKUBNj1VBdYPV1p1nodA7k5BbFGBnFd1ktZeSJYYUbt2E6ft3AxW7ZBS4c4baynSVMweRXgy43bhgeJ",
  "key22": "4A5fEeErCEg9LwtqSbWSd9BV2ez8S9CZGSD1d81AbkQroJdQvm1nUhmAqEKLQq3pQxgLm7Aq7aejkCDJsQsFCdzp",
  "key23": "5xcUrkqVo3C6T9cXJ66o6JNTCAMpV71RRFymwNmisbtaNwMS35LQ1LqaswfZL949f2UKtUxTQhz1X3usc1s83SU9",
  "key24": "2AEZL2fYHvBvG7hviRPMxao9KdRSgzDEDeop62e8DxGCzzYGLJyUUT38XzRzxcAS9FjVa1ANVrkJXGJUstWc6aTD",
  "key25": "4vmxLkVDL9SLL6HFSYMmduKtJg8uufUS3qSxreht9hPvQv8e8QZbMpTQ1zfZbWouCmfAh8D3zHx74BmdVLkgPFTC",
  "key26": "2msChTmPFG9kUdxgsQxGgco9Lu1JYy29Vet8UT9vMWxVjhKtw4MX4EqwUpjwmVcceLm1SHhCKSueXXjY9p3EC5dg",
  "key27": "3qSo1ju1xesLFygH9wofFPyCWbmBKRUeLhiU8E8xfzQFtjPggGkxXu7DCBNqxVE8vmPWZZiw6Sykuie6Dhx9gSQX",
  "key28": "5kKmiqXo6U4gb3yubgpf4SatQcZRmegcg4xGCYbu3SjQrf99TGcD8vNfJpfepU4pPr2Bktbw8J2kqtA4T6TVPuG6",
  "key29": "Dy3SPoS2qCxyTcucqG6dzWCQRcMaJKFfSRf14puMxCpnnUchpwFQ2VvjLAGEHdYYq9DAkdUoM3aQqN9L55VNDTu",
  "key30": "3jJmq4pu4Rczipc5UehvGpzvZ4bELYVzBZS6S8AtwPfiX2ck6SoFeFCARH9M3ADbbiA5oLE1fqE3KGWm7Zpk3G3Y",
  "key31": "5CHtBmDKqGJ9ePHzgqcAEH1dxmnER7Efg67zbEcRLRFsYmTHivdVg7XLpAUo75tW6f7GJK7TEbQKLSmtErsmyXNN"
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
