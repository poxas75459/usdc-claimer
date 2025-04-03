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
    "4kHefpgWJUBvM8uv5R4PMfRU3UNdEU5ArwcrJjcMPpTY5J7KtvM8kStTNFfdBSX7uCamQ1bx3PMVEA3hGfFBRvnJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "495Mv3btUvHzH1iQ3k5b2r1G596SzGWtFBH2EFSGdesocFEzXapes7Lg6zE9Hmo7PqUngh8aj6MuceB5zgYzwVGZ",
  "key1": "5E1Shmr2aoTX8HBpPGQxjjojtgCJByhj6iAkoaPUgwLtvQvnRnrJQAK7VXdVZ4sP8sbY4gHyzbfc5mGVeBia9YZm",
  "key2": "2uUTtaiCWDZfF8wXP7ggxAoZiMSdDvjU5DHWydzZXxu76i4B7ioP37RsbXd5QXU89HEfPXd6EHDczB1MHj5U6U8p",
  "key3": "5uVQcxRRaE7jCB7Gip1df9LL4dkW8ejUz23s4vEcZoppbiiDX85CA8M5r7rN2w2fpiVTAAo89UA8ckSXKbHREzuz",
  "key4": "46dpkfD9Qw2gBaCu9mbiUWswZhJ2YB2jt7M38ekaBrpxAoHUpC65xwsemGU3YnD6aoqKiQNmKMTcHqpsBNQgEvLF",
  "key5": "uVqZoS7vRQm4omcbzaMmppcDThyc5WMnppMAcBKbwb2Yz4WbxAAasC1MzxWWzXsEt7skgjU7VGPTPp1pZXpsaNY",
  "key6": "8f9m1SeFUYcT8f5FoeJaTmqdyvTBkzSRBbzPEXNTJLf6zBKBgh6VsEcg57hHe3w4ESKgP4xwaZarM9kjfQhPhpu",
  "key7": "41VsjLCV2gx7HppBErCQ7eMZEh6SimLdCmTk27oDUf7JbJzU2baBKG1djR7aZoj31BENmtmYuYMgmHAmFfViuf38",
  "key8": "2Mtca5ssen2wKdmpNYhWTK9ZJrV9yy5aBRSMLBGhxJ15Hxnoykxc124GjTc5syKYwif5iX34yWpeaRm3VgDcMhwM",
  "key9": "3bwBKasxYqZ3TJpuEKMcJe45xj7z7n3yTzUZMFKs81F2WmLguiHLeqrJrNHQYzVWQFfSG5xWRcskyacyGofQKfAf",
  "key10": "39Ew3n2C4ZHgYxii8LTef4ZGa2rMow6qfm5nqmAY5j5rrBHNn8Bv1vuveeZg6GbEk2ctBECNJNLZ8EFFabKHQshe",
  "key11": "2dV4Nrq7bw1mTZrn1FpxYPB62Bp5h7qanPytbU1TPFTBvwdcq4rVYJKDV8dzFJSveg9iR7ivKKyeJPVsaJReMa9h",
  "key12": "5ssLuV9dQiNgpS29mfrXopePkXnNCHTm7VaQvDPMAf1XweoteJw1NUrndR863jjDErp4fppXYAnfmQeavG1DcJJS",
  "key13": "3C2fyjkuHJiPT2Zo5MSWqgxdFuGwqMHiL4hyt8X34Gi6CgxrLefQagQnF6RACgRchyv1KeE5wzudjVReECRdJQyg",
  "key14": "HFJXhfDLFQ9VtXYceGfF4HzFhuZetpyVZMLwGtQHiJY4Ay3TRSek3WtQT4atKtioKcAnoHmn8QesTxo3Z7wg1gT",
  "key15": "46hKYZXX2FwCCXHFH1HSmymdDj3aKUvy3H4zgRAEsNLNVvUUEXPG88eKXmDcpqy3HxE3BygpCcByHYAAcKdiuKq",
  "key16": "5gPoeBBV8Lbs8oL8mGT1Z5xE2gF2CiAX1ZSQksMyntqEEsqWFDcPXWdiy2DBTdQSA3PhYESSqYjg2ZqzzEtM5M46",
  "key17": "bACZytvRZ7y5PaVwCsEk5xArTGNeDdHEmETfZUbJJeXDspo5qbdzMLsX1sBvy8BZKohMo2rZN95EFKjzR9WHM3n",
  "key18": "5Ku9EbDDatSDbrWM9a8HrTuL6d5AcTcbmMpMBFQZsH6Vrm8VGUgLyovekytT2otpGnWovhq5GhmZjHSSLJ7uCWkd",
  "key19": "5supd8iw7DKjrvn5fcYroS5KkdhT3uK3ZPzzPyyXf5yWhgTRDVuiUxRYmNmGhccu76agVePwTLb9NZXmAqPqAsfU",
  "key20": "6iPQbpA59qYz9TmEzYKqY1F9zAsyNxBhiNQ6WEq6DJQ7BGMYyBFsNKvhjVgVBNDw2LssswQpTMCSBK1PfpQ6y3j",
  "key21": "63WLZ5Kq9GQGo1PDgjSwvzUVxDdaSrCkwuFoeZi461DNeUECZTq6S24geGB3dSNgpBb28GMHnWn8y83CGwCJgE9f",
  "key22": "3LVP16hFVUxdnNdghc1HNip4xVwZmmnuNztkADmBjxQ2yhzWKjFcMW9Un2putAqxM4JgPNXwq4t75o8WDGsPrjSu",
  "key23": "5L6zENiibR7yx2CN2RAwuUucKn5jVTR1PD5jZ7PiD4gijPo5ZZBVQcpSDtdUuUgtcCSeDL8M4JwFTPDWnBrLa7Hx",
  "key24": "4kZ4XeCRFFB8WT7uyFFowTGccG6ktjnjFoTh1NSHjtvPDQyfKHGtZ5GuhJdAiTA7CRPPECjZTWUUBGAE6Zjr4pkz",
  "key25": "4hUALokooPn63znHofCJXhQCfuCDbqdLtZNfEGUVaiDV9iifn2BEmu3KD2pJnSomqUuWrdVR2bPCA9E4hvtZWzUv",
  "key26": "3DVmEApdCyQsX5RC6CN74YKNv1gzuXVTJ2aJQA61HsN79RZBU7CUSnbnvZRusDHqibztdCwjfrC3pmxxszpqj2FY"
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
