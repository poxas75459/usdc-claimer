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
    "3HE8aBSErzwgwE34mUgFoj9BNYF95dJuw4NHvXXYLWwSHqbYshyif1rmKVWgiSZZYw4RyyWJvXid78hnvxDkqkwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nsVisG64Mz2B5NbybaVxuSo4RXaNhUoxHcdB6XdBpvsAPvaFcH2YCYd3PdTujDQj7aMZsdbyRLfHGV6TmH2AM84",
  "key1": "5f8We2f1yD6271hwdP4xCo24coeZszYs3TugkAKD49ebvzY5iJ2GXhA4GmSixFzYgmR9A5sgAVtXEiaDqJsk5961",
  "key2": "3tXtdkfbcMWrZwDoh1HZC2hREWTUdcRhEVRWQHtNP4YTnzMWoMMqWg4fGU1zbpxs8ShMcTnNtFaz8CTJKvQdXCjR",
  "key3": "4MZsvn9vmJxLKdqDK8N93fiycam9RjdwcpZ4jrwofQPvdUV8wniyuQBcJYxw78ZyZChD16Bs6y67H3zs2Xh2BG96",
  "key4": "3nJHoSbrVa6FsWQoVdvJmdBMgdXgHXhRJyQwMvpRYqPuHgzfCpcihY1VvNcREEHZBK7VVMHkTTmUpQsm1m5C2y48",
  "key5": "3UDvC1YZ1EpAebokTcZ9oqDcR7Ku5Pjy8ztfSfXsyX7UzU1xHWz4aZ9yzQADv8QHw6w6SrauXSEWhhfbaC6hoqz",
  "key6": "5jbd9crYWT3rs3sPBHBxpcCuAjY4dUtuCxxfirB37hUAehBZp1at1ik5zT8yUJENBJiJDgs8FDWdW5v1vgaZEt8f",
  "key7": "3MU6PcNUUYbjv4UGmbYUmcrBJZ8EeJ67kQ1s6hpeS7frXuJWRwcNpe9dez1tGo8JhVdDm4saTcJJzMz9S9Ad3NaZ",
  "key8": "4XS92BiuZRBTq1xAmi22NMknsMjmYXJWGLxVw7KeWxgsti12BGubVP1xL4sEHvEkENnXkbvhf6bWPWFPLDpJwRod",
  "key9": "UnGq6Sp2T12DvQiBdMfn1x69t8asbrpDeXJPX8KzNUuEj4sP1uwCwdjd8LmNHBPqaXQEFxiC1s4uSCbTjpRJPEC",
  "key10": "eJaP52vEWnos6iid5KyvpfS6PZtBeh1NfMdGYMLFJw6kSXmwgdSHyZKEB7iwkfHWwSWmanbm3houHusxW8fer9b",
  "key11": "56vWrMYd4ffNeMGLv8hRuAPY6VLKZ9FTHfca8LAiGNzHyMTfUPFop5cuzU3xGA6ZHeakYnSjamqA5amt1zA9PA9d",
  "key12": "34n1kGb3aMUep3p2ZcA7v67Ffcic5gaSM2coWSGBx4ipqUHRZi2gNQnV8kbaJ2gebLNnizreBDk6nj5ZCSsK2mpe",
  "key13": "5Ya9n9cNdqgXtPTzMPhiKSTin884FLpgzxFCFhUpMQHE3bKZH4hzDbqBZPtPFqC4QJ5NgjMBv4vqTgxQNLYLGnLV",
  "key14": "3WA5Ev943iuGvcwQe1BXAuEbDVrfYWc3fnBtaFGGh66R1D8qoa3ctkF88LF3QDA2dPDQ6ZTHj7mdNjF84doUns5e",
  "key15": "3QSdnpkVkZWrGnTzAwpFsoyyheEoAAJyogPQxYZT3cM4sSHHYPnf9B55b23peMDfKfUnDSSNikU3C5ajuRLKn9ut",
  "key16": "Q71CXhC9tgdpwuLPSRbDnJMs2MfrA2CK75ci1A6szHtf9VoSrjuEzy73WbUGTBMgT7yrRDPun2fEXeQxHMujGWE",
  "key17": "2wdyksHbM9SpwoiL3tMMxMGfX9PMXqZ8jz93hiDsE9XyVgVJ9KFJXagQXquHsyJFrnTzsyuEsvwufE79SoeGW1GN",
  "key18": "tcntwTJ2tu5XqREu23kw7QuLFjQQpwTxMS9EJZFPYueJVoJBGC691upjjburHDnzDsWvWiEf46WEBYXxJxMLeZL",
  "key19": "3ceQXZBfbxrp2YVHiwwkuiZPT2juGzKxnGEEh47suYL625sLLQrgnjXtndDbyjaPeqei2BXtKVFHkjQ7HaSCFXqF",
  "key20": "3jmhudJsKnTyQmmnpd41sJS8YPeYGmsYJTx3q29L7UTgBxwij1GJyBLRQRrgD3uLWZwp6NPCU1RTKrpgPrYLn2MM",
  "key21": "DoEEh9YFyUuFs9JYafRLgQpmGhiAm8rafDiYX2GVbfc6AxTSj95kebi3zq2YpgoAuMyrSAiF4qye1oMv8EV1Rdz",
  "key22": "3VtWmpoEkiaK5GrNjHqyB5916s6C3eWGJkJsFSJ6VbbwEkoyLwCUqyppLeXm2qmJck8mRFVWhLk3zjMEtQFGA7nr",
  "key23": "EN9Le8RbEMUzxJLatyqxyqJSV2vSe4osqmx7HhytNtsnfPpkYoMehQ9kUwnPoD5Y7SWiRzAu2gRjETanL1p5EcK",
  "key24": "5x6kuuttULyac8CEcayVNhY1czefyjpSSDJkQaeEgc2MDjrDX2TiXuQZnyMXddLvqvhzh99sGnrvLc2ASLqJ6f9A",
  "key25": "3NbJLU3o5tvGnEtadrr9Qmd5VCvSf1GycnJHu3iDCUKgHJGcS5DfabMnvyQ2L89JvKb3SaofbMyQzWtScNqQqoMR"
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
