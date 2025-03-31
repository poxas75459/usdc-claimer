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
    "5pR9ZsdVG1DQSNEHctkieZ8GRpitD1zM7HfmdQGgfQWGKJGGa7FWaddM8VCW8ZckcKspippiisQLrYCf72UwoWb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chFyvkuSGcvZCCHtgXrLm1VriXbt5wrSWL2DkX3JhpJM1TCqXGPTJmv8qg4gGu5wRW6ozW9ZsPqgdkwQtQKQD88",
  "key1": "3uqnBhx1NXrdkgCzk4QzASwxddw85DWtxyKE7o82nHJXqFU6iJ77769MpVHGdDQN6f6kC4sRE2zV6yJhdpQA1xUi",
  "key2": "NrA6UCRwNPsn5eSWiFtcTsvUZRQs8W7GVV6gcWWJjsJJTwxYgjiD49mhVrcjUjUotrKQVSuMfdviHSE7hjgkrNQ",
  "key3": "4HFa2tEGMeEak9GXTdZgRfk3FG9JrfiFAkPSf2B7wokv94UeYoFGmzbirFbz9soeTXikyRbYBKQM34YGWVkFPosR",
  "key4": "4TTDKtzmWh1x2iRnou7Rv6jw1m5Nx2deTFtGVuf6uaLX38uSbazdg9fDRLa7EwDmbUQoStdQhzxWxiZxoL2k6zqk",
  "key5": "4XmR74zRrR6FnDygmS5nhbpds6Vhw8VdnxRwJeF5LDmn2pboMjNS2XdcByRsyudhuedn83RHKMe9D82VAg5nm5Qo",
  "key6": "28YyfVqE6SJjFGh9uwa2v58zthQpnH42EQqKJdqUGvuLTM9f3zCTjtVKMNM5WY8JAoCGbxHN9HdXD5U84w67oPhU",
  "key7": "5FSkCrhzZiMpyrhwh19eu5DWcbKFU4xgZC8q143mtGgYnM4HSWV83bgrzjuApeMYGFwKDN4CGV7YmSrmCbBSyEUc",
  "key8": "4UkYvqefEZQM84QVzwTcF4ycu6wAf3cJUcLaR7UvcWxsSjQJkmjjviFTxVynvCV2hR97jkbSasgkp2W3ipugzqyP",
  "key9": "3oJyGqSG1VkJvkMwNNMMPRRvya8FmNwNqFjL68T82FqufWk7KLX787LyGCm6Z2tn49S2dDWC9denbyNP8e8G66ci",
  "key10": "31tBRkobw2LPHnREvY9Ce5Za8zq76snDWXHy4116Tvb2nUTJZ22AfjFvhmPk7EUtCWmUvEWqfoYbBvBNc1PbMADM",
  "key11": "EfQSZhaWs3ambCKdVtKVQprxz4CGSAMDXkczw1DSwmfsFteSe1DGAgpMac6WMNRABWS6fczq3RV1jy1K8jVkeBd",
  "key12": "ZnLuiiC2asRBBPgv73FpBKCt8DbmbKQRY2kZeNZXcb1oarAsx7twEeeZK3tXKBopbtaNPHccp6s4XUdi8aa4hux",
  "key13": "3Eh8RqEQ1veJq88AJKXtLtfeqL2opkgmQk3hWrvvYQmMZdkxJrQY9MqLPJnhFeiuQRfSiHaQHTwsHMWwFNZxrg9E",
  "key14": "4D6H1DBFAfUSKJkLHVGJNHgzMXPGe7LSMaoUWp3AXK8c6mY9dfCcMhEEf5bGe4EeXPcALNu3WwpgQxg95Zo7Dof6",
  "key15": "2kJuTNiwGxuTgRFr2KWGZ3QmQJajwWPAPFMmHFXAEZykb3SqHHPc9PPSfZ8QBHc8BU43AWexuM8VkJavmaNddvkx",
  "key16": "23jE6SDA1Ku8Yj9toEdj4YcMGsD4q9FjmynCmuzTYzsYAjaixARXjQ8D6ea9Y38eAmUoMJwzFXwTCJHktaoZ8AEU",
  "key17": "5ZDvUAfuxo6umuN89urPkKfd45Xo4M65dYpWYCh4nZbVQc2bN8a5BESr5jPPqQiKdgotp8hEZrJ3MYGoS97aFzd2",
  "key18": "2C6BUn1wGbCMrq6q9zbPHJoYzwHwRhpHJCPoD8pAq6nSSjGh1iigzz2UBc9aniwfhpSPHojviL2yhWZywEhDP8ay",
  "key19": "4cF7xkgt4jtkLGVBgUMvgGiJF38WBn9dtddrB7D5GL6L4jWTLegyHBbTCoh116FSXe4s4shq9mUqdmFbHzzsdCfc",
  "key20": "31VP6Cecs3DDRQu7pTbJJSFztWsYvjZkGwDL85yiD8QKoFw5uiVmyAYxbM67nX2oChgi553WNTWMBV1osSvn3Qrk",
  "key21": "31BvTDF9cU514r7V68eiQmvv9xosWJo1eGpgsVUt2siGWrSUJ2XwcKjUmy8WqeL4svLdWWRXFErGvMY1n4oexh7g",
  "key22": "547Gm4woDjFAU2g2aejf5hxxz23nJASeY1ZHsCHj9khf3DVDzT2zTCRV2ewb8Qi7B6g7svKGQkVthGYyRyEuGne",
  "key23": "24TjZQWj7ARsfM8GuRn6ABh4AvS3XNmEbjz9SiAiiwBLgJEVHqENxFfRBZiDWYLqKNCa6NGusLGtiMbGs7qMcRyW",
  "key24": "2CxSdCEaVrR6eooA1P8dTBYRpZqiygxVV1DdeSsd3xyKVDPxWqpcWXBRse6zJgWfmDCJFBukkmyikoeLqsNEABGT",
  "key25": "2cJBte5twazXs13dczBEeqqfPRcSUtJzkBgH7AjMprXWA5FxKPA4ffB5uKMCbC5x1jvKdLjgjcK5NGRM9PoXAC4z"
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
