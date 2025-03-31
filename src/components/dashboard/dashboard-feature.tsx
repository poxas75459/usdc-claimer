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
    "JYGpKqL5GACWBLAhiQWqobxBPMQ4tgM4fB9LfTLPWTaooEySEnAKWFpwnJWhAaCiDb8ZdhSSdfQnYtBv5Gp3PqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLbwe6eZxkkx69ZNoDzLS1yXo1VnbDojuRz4xh9riFX4QKLiT9yKTm47HduYAQGPRsVa7T9D6Je9yn2Ezun8Tax",
  "key1": "3znDXgDAUkGs7d7FsvJZiYi6Y4A4jNH4kCyww3HQDgaWd9iuen48JQWNxAZMatnAap8Ks8reMp2NVynezakDfU5K",
  "key2": "4ZuFQWAUqRMx4PvtAco2Mfc17rRebwEqkyJgf9mAJEHXpH39LA6hjyo2JF2U3hogYYAyKwKbEVMbkBn5dUdBm7X5",
  "key3": "5nRAYurWMUsGbpeS8QNQ8njDZtSAWbJBABTtXF4nmFo3QjazPG7GVfuH8Vg86sq5dsZErdDyQ8PkgEbSKGc8bKYU",
  "key4": "26uPBksa95ZmWBrVgnpDYYmoS6ujt8u45ZfgiXszzRpdt958LJFUPRDt9vg3vjJVaUU6jm5g4XkeR6KrmSnd6fgT",
  "key5": "4bFuiAwRszwcfY9vHnDMuL1ywFohKbgsZoSFF4QN4JmEQ242qwBVg9EiHsqKW1HEj3D4FtdPutHTBrHeQhf3N3zx",
  "key6": "5tTjcw4e6q7iXgxX5CVzc6A3dG24bQbFcuTWv2bD6wNbH4hJTewuV3dQ9itmCk4a2jxwiht3oeMw6kEBvCTWdcpF",
  "key7": "3zr2wZX7N8yzpznXMV5N4JPzh62SSL3MaLhqUFSCVTKCmQZ6pfNjQENeZUnkVygF8Wit27dbfam35MNyFAq5JodF",
  "key8": "5uVV3kyzXkSkbduPLtj8vcKZoDawpHuqDp7bMFcEwswqTnq9foHB7QmCYsDeUYRYpfd7hxBG6bg6kuxC8USnSyom",
  "key9": "4Rto6FgbqWiFix7rdXJojqhY7CTEZtZvEn12Taqh9iG63psqFMNW7uwt7GUBzN78LFFWQonZHfhu4Yh4e1DWuNAq",
  "key10": "63TQnyA9fmgUAySmCoRrRu25gPtP15S7HGUnF9aWJEJx4v7rS5fKzNnr9BKU9yY1FxGFjo4MeHF91GKv7yNEbMsZ",
  "key11": "62iawE41Mrq7u4wwufUc792hVxBFL27RduSA3gvKS3GT6LCeZywcbPZ3hucBexN6MoweveXxngvwwmR3Tk2gLomS",
  "key12": "44EYPbEgwjzYaP2tzPdi1tqXs7nkrtpx1wfm4uFQHgubEDMJK5Kuv7gtTtpPwNYHeJAmRYxmdNvCDWw6p6p9XCcJ",
  "key13": "2aFCUkFSRxvVSDtLP5uFzjLa5E5tdKv6yujC3EvhZtrbdkg7xXu9fqLWUucgyf4KFAXAWBjhU6zJGCF1AeNdVJVL",
  "key14": "3wBUKZLBM2X6ooRmaG5b4QfeRQe1hJLSw8wJLaDg4LH2BreScPbeaknbKaAVgwcuXdRcgCz8RraMfXkk2mTidmEP",
  "key15": "K6ZqThLLQs8VeZec6e9QCuSV9oA2iMuTbNpsy5wM7LD7HgNoLz2qAk9YqDJahioMZjKshWtzUFF63BiDp662XTq",
  "key16": "4jaKgJMJNjiTEHifr6EbECpEjUY1iDJ5B5HECMFgsBVxYAaU91WY5jW2oMRhBCv5mbPJmKeoi3Up52yiECWiZR7u",
  "key17": "GLmEg5Hrko1L4LA8b9LUav7cxvCcQAzSeAytsNuZYhiCPz1R54GMFsZNSJqNDZeDfQGrf91Xw2c6bvPSibUbSn1",
  "key18": "9zfHHR54hy6Ybkvv8zMacaA1fu6QbE8Nc5fbh8WsE2oRzepccrMgyKbqQCVQD6DFBwBFRq4LwaSBqw8M4uoFwJH",
  "key19": "qzRJyFyftwGfPTfDtii4CiKU7gKSgT5bnMeEERwQuP2Y3GcPW9HaXedhuM8Ee527HqNMrF2dxwonsMvZujc2P2K",
  "key20": "3zkM6fHcc8nYVWAuWTMdcSpipWCrrLvB8fauRa4sz8oohwmtVHCfMQWtnBreojXmWsNFyFWvfFk22Rtsqhtrc9u9",
  "key21": "2Fg9c4AbEdWBFdfw5KvuL5VSoavTgXMZuqf4obCY8s59tqq4Ryde5MBWUwPMR4eCaesgGqBu9Weg6kSw1DHJTT1x",
  "key22": "2PbGBaMRmPDYvs3vE6unBwr3L6iPA5YVZwaHBreEGMZuYtvWQZUFcyWo88REBW5LaLsdwMTXaZgSsUfrJUG6XrXu",
  "key23": "sFTWNYbxf7uAJ863ctwLdHUdutbrS1Em4gjhTijqyYPRzrUefhpt1Y1224fr83zuzd8vwb8zfaBrorh2wRG15z8",
  "key24": "3nckL7MRsftLbhquwwtNhSosktVw5nmVci5WNBuxNSv1gPaFK4F3LWd7fMB27jhxmjZ1Ky9uvadQwYUfnabEsBH7",
  "key25": "418peicZZfhmhLBdbme7Tga2xB3fMSARugrYJggr6Gp1f6pesYGjUVSXjrKyZR8yQmBoMZD66KtiEFj4BFhVK3r2",
  "key26": "4J5yikh3SHu3MbpE2oRbgohYPUC9eTtVfSKYno43sKCRLyGyTXdT6fxwtKb5gDUqHfMVi5wH5wpnKVDzynGtqfvf",
  "key27": "4ogJLDNp5UwkTaW8gBDcfWTzCZExVyAp43L7eLEVYuZzTQpYCr6GDJJQ9Zs6fCByCiyAYSjBWrxMGHvjF4ivoeHU"
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
