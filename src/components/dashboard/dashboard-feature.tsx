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
    "FMxbLPBZzivVRdEoJPqsF86Ccw1onJBZqqannv5jBSgGd2XeVkSMdRmFg7Rgs9cwSGKeM4w5EM8cSM4GSsqEGPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WJfA4ZpCnzMR6gc5DXioHdXodHik5mYMEQvKKq2Faf5AhqEGnTJ3d3mEzY7mc7uSXtizZzQccid5kdbB8pG3kFk",
  "key1": "626QcNpvsQrmfeDNu8fkGH1VvFc3oUfykrEk51gLZh5QSqrNiumk9kyAhXJqqSTeoDZYvdFmHftbhB6WK7jYtv9x",
  "key2": "4KagaZiPbi4yYd1AGZETevnzKwVN8rxJJk1dcnoNf4wmZE7ELYjLZJC85EnZfNtDgtfmJANabtqncUvw8B4H9QAg",
  "key3": "5qd1z41P5UVF2PVphhz7wykLhBvyREiGRgzXUvBzv9frVMZkSfd97p9k4NRSjdDSGbAybApBqj4j9XR1z9bEcWdc",
  "key4": "9kzAsXvLUnrifqz3ttuo4uEUbxYcWqrEWVhHUU5su45GHyUzwGWXGUxAJJe8kfa5rrBLNkEn21ASfrBSyyUUan2",
  "key5": "5AfdeD2Yvhmjt1YMJiNhUrt6d3VaYEjvPiYR31CscrhGidz5gk3WTsri77EHM4miws2iyEDLWZfZPKiregoa8dw7",
  "key6": "4u3rBjmmPd6jZ74ADyrK4xWQ6Bx7qHGzvJvGprb4o9tE7WMnPm4MFkiNScuJvyz79ZyeUn8WeSWVfehejWLvgap2",
  "key7": "5j1nEnnf7bKLXVH9D7KSLjRyNfK3cHudUAuXVmcZ3YSeBqUVMmwgMBGPXiao6SmiW6H39psL5gqhk57wSutAgBnk",
  "key8": "4bVk2bfFtDA3jTsZo2zBFqfjngHTUpwN15z1k4Zei2yJaMQNqDYbCCuiK1rZRznVzPENhABtcPrznPdGP5ebG5CR",
  "key9": "34TypWoCjmxDaYMjMTPzFAd21tTY8qxuvcFd2c8YVXYUJunv28UjTTseBH8gdpBJRKBKGHsQ8xrCiXKFZuiKvU3y",
  "key10": "4eAAytw1sq5x2K2HSUiHiG88tfmzzzTYxKQkwvuuLqTbbWUMWEX4ebWBMcE41bn2CXbFCkGBgwgGv4Yw49GH23pr",
  "key11": "4paMTDzQL2oon9SJgRqKM3rEcYd5atNT1eUbgvbe2gib9t2YUtwF1QMgFs92fpfvztYhDsazYfUEQBy8nwNAY41U",
  "key12": "uADehcpPoEKrxpGgCwG1gHHV92XjxKNwSSZ1AH1AGLTXjn7n5U815Vr8K9cj4hzeaZEqY4Bu5RvFe1zHfZDc6ub",
  "key13": "upm4TvdH667NDJaGPZp68PeVN1Mhp5B7hL7c9Hze8tzqPaAKNxrQnJ9WoA4wgVY7EixB44X3WzGvViL3HCf9Gq6",
  "key14": "LksrKMZrLWtJJyXpCUNV6DoC9x6si86xq2Zfhd3m6yLSvEGUjUKDvCWYUxKvBPiCusCF1BQJsAsbYZV7Hupz5hk",
  "key15": "2vxAoeGdnEGRvaSCMpRrec9zS7aHdsCXRxxF2Nw7EDMtWq5sCnNr7z9tjfJRS1kqJAHPczsZtex9WrJ48RTSuwK5",
  "key16": "5j9TU9oHgjDwuwnBHuznT9UJnTbCkwFwrTGqkJmmb6JEJ9t62CY6NStc56J8ugE8s1kwha9Q5P9wZ6V4o1tsvXC4",
  "key17": "4ypBWmXAmtBEiJd6dKLQVLXqB3Qoz7B27KYWvSrXTZbr7QMLfjzmcF51YXeNNZLVJmXAttgNEtvNxCWLj8Dfgodv",
  "key18": "26QTQPwUjgDfpAiowxrE6Sa2j6W32NoNQczw2qJCqyz56f7QHH1F4ofon4KYYTbd4JU4zkDui2eCLBYszbjzFmK5",
  "key19": "jVfegi2WGK1ykJa5vxuX1Qbbox2omH52kALAHp4Ry4yUFe8MR7eMRGnF4Xw5KQjTMJz2iKSX36NWfoFMTHqtoco",
  "key20": "9R7XuPKHLXVdbxP6H3mW8PP7KM6U2ytXGBYxagGLyBCZ3xf6vqxvFRjuBJHVaze7A34pdagfUFkTsbX4P6JkH3g",
  "key21": "57aoCq2uAeV5uBo5EnobmenVGPogTk7G4eYqr3R17jFnCp4EcACPX1uadvX7Dsyf6NvhF37oRuLufpXjHP5YziZL",
  "key22": "5cNLSfjUd4D8YkG2jx8gaqfFREMaX5Y5BSdkoravt27MA8ZkRzZLQ8vEm7Q4ngT3arGExxyDwZj8jwxTqtq7cDof",
  "key23": "5EaxNvKrRiUmGBCRBLKijwvoSxp1i1NsmTLMz89MfxdVhkQVNhkvesBbbhF1L9tLSG8eDyqZ2zB9v8G68wMnrgyh",
  "key24": "tkDzZs2rk8JhmR97DWez1cRukoLfV2yTsYhC5utDdLebnUYFR5ykMSn1sZtw5i2ZXDn6vbV6GxSSGmz6USo2gA4",
  "key25": "3EjUgaA7pDvAe5n5NeeJ5vp742pDDCBT8RwW43GL1Dr5Yb5Fd9Ysmetx15ogbkvZz4C5cfdJ2suv6kaJdFeAHADv",
  "key26": "kPFwkWo9WZexdRBNLv3H9JRZyseWceWjejhv18AjrLjxoTGaJH7QQq9M8Bj8GLHxqPoHwCoqo98X5FKQqqKWjv9",
  "key27": "3bEiwmfQzLRGRSbmNMrGXu2eWpzNah3dkfW54RuAdqFiDCqvKMsamP7ew5GR2YjrLdfUUn3ym4emQszgANYv8aDL"
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
