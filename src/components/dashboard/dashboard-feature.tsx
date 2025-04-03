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
    "4deio8NzikwnZZLUnHD5usEnjW3L3p9oFJdg4iG5U5GiA2TXi68SrW1HpjFpXXXaMew9vjUidStGunQc5XvjJpev"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AH94aNpWbLDKUE6DAZcgoYA8XxftcsRPH8evLijPyZtxqX7xfkmzyLEYunkjN2Fb9jG1satn1Q6i5zSFcavpycG",
  "key1": "2pBGdYMwr6cyjfWevxP3FZQibPL5jRm2jFHGueEz3k4Brjte2saS7ADyDDDv2LdEX5sTy1aNU9h1UsgpxCCo1dmg",
  "key2": "5qqpe6cX46ya8X8d635jZqcoWdHfkbkavbhZ4WSTtq49kzYSaAJqfJeKUuQPcQvnuMhYK1PsvdAKzD2eDnq5A5rJ",
  "key3": "5qn2Vz1mSWyBiNqCeSc465nHMAoNPdKWoeoCX3BqKNEsfMqr7monRnygeszxJajXysAJbNteFBsQBW58ekTfeUe5",
  "key4": "5Ad4QhBD8bUm7QEFB7U2565Fj9BMU95Q599tscUn9bXzySkcktSFQuZnkza3KQ7Pik1bQmnSoHjp9DsVRya4YR6T",
  "key5": "54R34gv6z1hf2rkEusABj4gbygkcB3mQd53EgUfEj5DedGe7sgYSuYYCBd51C7i8gtFdrejexdVwtGNyBPXeFA2K",
  "key6": "3c9RKFMtEW5KFidZ5op4HjcSmdLu9x42wyZcfha4ajZ6AaccnRse6qAHxUyinYCSHjMavQyQ4wxwdj21e67CP8tt",
  "key7": "3ACeMDTxRU8vZvpJftKp16T3mFDUd3MALAovom1rHkfbctaDYSndwf2A19aV4f6xbd1hiSPVGKoiE1BqbZS4AaFX",
  "key8": "5HEwZznU1xsA1LKvb4TYUDaiQX3ETUaJXX5kpF6daDHiVBtqdvWMiNu6QxtSBXeMPn8n4YP2K5aE6BiJdaVBeeGR",
  "key9": "fEf6ZdD7bKioqAEJogY4DDA2Mp62UDFqjmbcJUdPKuCmfPT8iUxoJT5Jd8oZpvFY762vBJd61sp8uuU7J2Q5DJQ",
  "key10": "4HupoqeHso2NjFZtq8PPZSaHcHfMPSVT7kkAhWGJviKE3MonrRVmM8ouVZmSCvfEwfb3GYhZAtmq5ycqC1eWS4xb",
  "key11": "5D8CrfdoxJmw7hfZz3HvVW1wZqcA9K2iD8h37sYQHHc6sUNe8GgB8tW7puVsYzqhaB5BKPcajqHN7uWMDjRvjq5a",
  "key12": "39uiuLwVSeH5NNSB8ZdC5Pd83Zj43mLsTE1zooNasyasM1K6PZrdk8mxryrR46tjEn1B4XfBrokA6Bqt2XEtc1B5",
  "key13": "5L1hb9erFEDLKq3LEuaHBU1nWwQXKdveWX4zq1bcHG1no3TpHTdshsRBi5uhB9nYhf8KKyStL3P6wqwU2Qyr2ss2",
  "key14": "w4scJhJXD92sMGQ1181B3KisZtd7h3c7hrvrqDy8uMsB9CE2asb1keRc5kaF6XXBRqVpoaZE7KwPoC3xF932edX",
  "key15": "ip9gshFhsoz8rEJ4pfU1Prhp1BzEYSFKKGpbiBZ48JfQk1meMXiGs7KkYj3FG6jkmCvRKcu7sv5ss4HZhbjBg4Q",
  "key16": "fdeByowwDWqkynhwFFurVm5i71WU9kthZHPZoK5rpCuP5hEwam5rm3euFrebE52oPPnVkPCnMcDypNRvFp2pDFA",
  "key17": "2Le6Tq4Hn1ApPa95AwnuxhJDiJmi7HEPLQM6n3ZniS8vnFJwy1mtvcLMfsz5WoLh35zXZPWrxKBG55q29KMmBTYp",
  "key18": "43XK3vVyQJMRFrddW5q1VDn7jCb3kRy6VYGAYvUo14eu5DxUhFP7MHCfSbdyumLPzHgnPWB6D2SgBqHGuSJ4gUEW",
  "key19": "5tt1g3wwpHhHvkNTDuBZdePKNSFdEjmjFkzvLCNPwqomigR34SQSjWnTApFpdQWLcZ5MRsq4BrW5gUm7DFrhPvd5",
  "key20": "8QnAJNcPxKBizE4DCBcp15tpqGgNdr6zmKy2R5zFVCBo7CEsDz1c9uXahwc7uS3EMfJXRK7ANyuJfQFG3KH3pVX",
  "key21": "5mN52KSb6euydz1EmpisAgFYWytLrCh59MLFkZ7HDzm8QFMfM1E8eZ1CB8aSvYN31BuxhML5Nnz97ovQrbdwn7U6",
  "key22": "3T7gyb7jis6Bc2SFNJjF2rvdKXWzTed3fBxAb4puYiat8ZsdaWj9vhJAni4CyiHNB5XmZY7CMwGFoedb1gKkAhMd",
  "key23": "63ohQbM7J4tX6Ddi7Q9wwE4tYJkA44mGikS6sKWiwAggJuYZW62wG19fFPWRNxh7K2PxryarJetGF6MDJ2Enhwgp",
  "key24": "3JEqcM4dHy4KDwWxAnSfxjP9qSYViXbUSwWkkMN7aBx2SMM6z6q27kmQQifWLRL6cxDkpKvA5DZzHFEmLKHJC9vn",
  "key25": "319XAwfcLqityN1tZK1zbGaWe2ppjTbmCwTghhV2y3gaWdzcq1HrMJWsdyxUNUN1BtWDqEd3Muh3qEPpvzNNuHEK",
  "key26": "5wpzRXSi28dhRt8Ec9irMqDRRNCYkcJVYbwB7mfCGtfr12TSLUFpAJLbnqQ9cGTLWtcPwPsqCof15Twc78o4VbNa",
  "key27": "4ysm9t2QB12HQaYqpGtTLN2Yd8uWuL3qV3VS37qx8GWq2ackK57QMry6754yD2f7NVcuqnimUufa2A667Qs6emsy"
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
