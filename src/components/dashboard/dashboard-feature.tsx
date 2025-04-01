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
    "M43DqVaUZzVBh1hx43G3y9NgF2NKw9SiJKSEJ5GAT5e363i9QnfPeyx5wzvSJQQiXvapBTBrN8vfTN3u5CLoWC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2azrtAbESGFmzKgAxXGfLPxBNT4C64Mf7SPbD4Lv7eWrxYYTUTWmQyntL2NVSQuLnzA8YTDxLPNRUeo33MSE44Ev",
  "key1": "43x1N5gQiqfFTh1YYc8UWrd3aHFV5NYaGZggck2nwSihuqZRmeL1wNw8jPUfNWux2zDdHXB9BPTvMFtKKZ3iRpcs",
  "key2": "2z8waZykbkdU2K2tKmQNgmSrc1EWX9bviPeEWZDF2Sdojn5Mq7UpkcXNrA8MZPV2r8vHHNX7zS7g3v59ZtHHsUqP",
  "key3": "3AKac2nvGWDDrjXg2qdgjQD7FWAMRztmB3nGz3V2wJHqqFPKv7pLePL9vhQZcUs4C8yhaY3iUE6UbxYPxnmvHPDG",
  "key4": "4u1PcR8gaP6HtH7Dz1YaowCCGovupTjnNV8JmbRLHAKWdrEzWk4BbinNZMKS5Sjpbgmmk1hhrmNo24j76rWMZ2ca",
  "key5": "4V5w9ohjMt27KwYqSTWRx64xChJtKcni8HycvQda1cQsUZ5qGxuovFTwAhfiK3zKD63jaDn27hgQCsbwDMzDfCPt",
  "key6": "5CiweTUnZ3DGszi8WHaRv4Nd59Fvxz7GywCzxU7Z4Xfki2xvrHp6NtLipuMUozcRJdMqPo2SQp4LQYt4QeU3Q17p",
  "key7": "22pGR35s5NStTxJgmZCU4G2bHcJSBjykAHZDTfSQicbmi4kjs5wjuF4xMZGgzDq79ZWio59zrKyV1VXSqCTgVz75",
  "key8": "21acmfyBsorvTp8Q5M6nhxZaavtZRYTzDebCLdabvWB1yqhXwZgn8P64pg4Wk2kFuY8QHo6sUoWoCayf7px2bh2Y",
  "key9": "4pSNVDhcsWzR5L9ajoS2gB6FDtT5cFZAXw5kzy8r7GXX5Sf9KPrj9xrjQc74XicLy8zs1TXHm15zddNQKnfuBcHg",
  "key10": "2dXoDvMqMVh6QxwwcJdDkd9wjRrPGEpGPeb2NjRECJdBMiVbdvQF9HPwsQNRtBeeRLrAY84gKcgNGsEef53nmnR",
  "key11": "qEPWLReNBaQEdWRCHhG2Bo2ktW6ygqn5RahivNRwd19kng5FovMnMZzT5YCd7CQ8NNcxCVe35bnqodXQEbNo4o5",
  "key12": "4nKaHmsMF1odfFoEet4FwvbxrH1kMQvPcLxSoP2uWiLu855B8jxwjDs5gtRM2AeZ5Bk95UbByqrffbCTAusuUCh1",
  "key13": "2cRfHohiB2VJM68GVMDQ8VjadcnmwGuHj5x75qJjSwGa9SSSFqpTx56nSBb9oyPEkaZKxYi7SUeoUEWqPYQ1Yz6E",
  "key14": "5C8KBeoSQJGiKTSCUDzTqSMkEukyq9hkZcYHLZGEHuUeaeSapzuRf2PU3Tfqga77aUhjEPhJrNkZxxWrBHFRWMfL",
  "key15": "4S2sSi3TUtpKKCNtW1X9LRrKDjDEdXNjkA3qucBRZFVXgtAV5TKxsbpwTtiRQBwRbt7TzLRGhba1B3ThY5ytDf9s",
  "key16": "5jhKacPNfQ4iMcWqPKCEKuNs5hfadykiTN2erkroqRf5mYASuntXKiftrFmge3ZgfW8Lxt3FRYP2azX1DNdFbN8p",
  "key17": "2invaudZaE5gmhFTRd4rQBbH8ukVURSdW5RjJpBfLtss6zW1QntQDU43DXbpeusfJSfnjvhD5LtvE3r2PUC7uqfU",
  "key18": "2o6oc7g8L4nXP76Ldnk4bLR6UpAxE3t4bwCfNGSU7G28dE8qrwyvY6wDGdaAaoa1i3kVbtqBYw8iwp1pDJpE51Nf",
  "key19": "3tCAtYYkSqE4b7aJEPCw8ZiNkKQssJ8p4QH5N6kyrYCMvgkgYtjf1yYsVeYDRcyg5U3PeMHJ3DAzwLp4ugZWWrVd",
  "key20": "2D2DP3Q89yaWPZRe9Ad4FVycJ47i8DMGnHXXuivEkbatMQSHd9t24R7VJ8C8NieDDTXyak1aQHXMfYq7JPYvsvNT",
  "key21": "5QiKYiFTkENkk3PzrJ67f2bGCHEWHk5JXQ14Za3bBEZyenD13eKNmZMBpcoKZiQdL6t9xavZhRugMroGCB8rUrof",
  "key22": "66GhWaBH32wuNWCJHX3NAyEQettxFJxQBZaK39Arz4kP1kWahKyREAvwJYS6jZ5Si7sUHhL5upC2oBk24dCd7bcr",
  "key23": "27sBLDgg45tXK8mCTyhwnuhieEzp3f23YLhS86R4xq8vCeMvQgAxqHefejdkcubRtbsHAcNsTUHrRYi8JxrspMnA",
  "key24": "58S83TojQpezpPttqsKVgcRhuW5YrNbViRNRfnHs1LCfRDFUiBYHc8WskN2TNaKSGGGMmHNQr3WpGcVDfde8KEQ2",
  "key25": "2H8coQHMwzCCJcbgdJ93W9HkKUFQJcvM4VTt4LGsK15MFrgMEu41TiPQpW1aS7tG11F1RWyxYAfWCLL3MsTZQqvv",
  "key26": "vbNv6fCmdssQs1SwR51GrKAC9tVqBMhETeUtVq5jcyxtCcedo4HkCJqXR2yFXhVusUwXT8TM8vavYQThZ6yjgRX",
  "key27": "4LTzX4fgvHK5AUQJPjQ5nBx3BfhrBpzQAwTfaTLAfPX31c5Va5xX2v3wit1ACQXNwreHoc2e4HRfAUL1Uf9ULp84",
  "key28": "4Buh1QiztStovLuC7jeHXoA6M8HWAKoVDKC7h2SAtTHVqxx7W1AvdRjC8WbmhipGgomfh6ksGXG1VNXTXb1fExS9",
  "key29": "4xUFdTqjMoZhZ2kqd3JUiJ4p81Uz4cuczfopQdfBziAduwbr7VTYQDCErW87eFQ7pQo9aC6mBYyJjhvP3yDzujek"
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
