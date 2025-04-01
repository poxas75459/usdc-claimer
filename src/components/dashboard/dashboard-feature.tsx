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
    "3nkcM1Ju7RpwgNB9V96NALmvWn6BTpoh71PLyS4P12Xm37nyoHjB7ALrNEvkbqzSKZojhBjNW5zxpsWa7NohgEkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46QphYZbaRDVsLkkUqn2Wt6tg2fZnZxGpjJtjH48qPBoDwKhZf6ceXXhmWE3bTomu1g9pEnsESHyexkdNxC7pq1t",
  "key1": "3kacLk7xnvDzomB4X8fYqneRAoS8owEzHpmCmvhKGQwWe3UP1mV7HaLDvqhWJQer2hJ2UTMaNdz5kjZC5jogL6es",
  "key2": "5VbwH3AwUbTcCiQbBRvvzqGA5Z5kFbgcaDS76ScGWatUFtX9jv5U3uiBoMgDeGE5dy1QZCHGNJ8ZMrco9Zifrt1b",
  "key3": "61SwCxMN2DaWjiTHyrDkRBRuc9ap5Ka76b79pDuA3xYvit7FUyVyuYGTv2TXmreejBJYG1PMiQfA2TqVjDh7i4Rm",
  "key4": "5yUi9J2E9KKoqvB8eU9VxFRX7zKdf4SkdMDaHvYY1LfAN3FKAp7hFDqdjB22v3moKjzYeeAcEPYiBxPsw47VD38V",
  "key5": "92Gwwjs124N3tY1qZdmtTHinWnffahcvxnmxf5fJuaBotKtMX1e7mkE6zVn9YrC6mrt8irhvrgV2aUmcqc7ocqB",
  "key6": "51JuBGfn1omPZZ58trcec1Zm2cCiiw8Vw7NdXUuZ8edw31PFUxUrnerrDzJc18Yx3dfkYmUfjXc93EKRv7dnfZZw",
  "key7": "hboSMY7eiQoYEUnk7HuBqALYkHM7xYKPCW1WTkUy5L3bPXLTcUuDj8YGoTc3KjYyvZFeqwAVsTN7GxKECGuySY9",
  "key8": "5vPpNUMGSafhJGP42jcFksvHbebZw7d88hM1QQMnG7DB5t9t7t6uyd3u3dV2p6kQUkfPe9DYXAeuf2W2TRESAwXo",
  "key9": "5BZvYGLdatw4kj8QquCdybx9c6XP8qPiRmoHn9ASBrTnpmsRdsUS4rsTqXLoKfK8qCf4WJqM6ENn8LYPLEFTcmR6",
  "key10": "5pit1XztttojKao9hrthbW2daKZdg4idbsEdgarnETBgsdE4QTqdzbNDpoQp3sbWLdnNQ8jRbwPnyfkiNr8YUCsg",
  "key11": "5kvByUaoDEwoHWR6mZaCL95UsZg3kZMFFaPM8B8EY6wQgdtk9EHUVQbCamm1gth2ZC3GbbQcKuGdHMTQkHBCRK35",
  "key12": "2zVpkn4dhrK82sPHXPLt5QYcANoknBvzcoCmEnrjJU4uKavWsH3DBvGBTtSfhbK7QVsu2Si3DWNGPgjshoBPpTMu",
  "key13": "MfVb2Md5c3jZrLvdffzapTBKetrN3CEk8dXZCP5kGUrpWLbQgtM8TX6su3r3Ytn1xmGe3hmZSMT27vMfmyshvn5",
  "key14": "2eGcDeYtK3GBSKZdQqS1DbqHydngu8XjZjuNNQG2TkP51xN74yrgT9ooYVKJ4FqwDhWcGDcNSzfTsZQ1G5go8K2M",
  "key15": "2Ec1XQZSTkfRftFdbriWai3p9qyCcBtZRFnQESGJnZ6q5h2ZYFVydNosEWpMJ4LMDKDUo9w82XApyV312VsrrwdP",
  "key16": "4tXWJmr5dZDs4dzxVmLfu6e3HCZFDqmbWz4GRVcexC7zGgar31y21PWwEZSAY9WEDYZS6Lrwvtxc8qGHE3PT4DCD",
  "key17": "5uQ7gBc73NwVfX3nwqkDUcZiZENtJcAoxPrSP2F8BCBYRa85rpkdmAP7QpitXq1R5e3yrfzbXwKXfy1WBo85aptw",
  "key18": "21ghGDxfkuURVQtBNRxwijgefrrHeVDhokGuzDJZxTvLG89Y7mYvasssvXJzEeEWHcdLSXVdY9rKYn2uyjChtFYo",
  "key19": "4hcrXsAdqPYGrbhCZ1Mj7tHfL5SHT3SqCYLLNdk2J5bLp3P5PK8x2QDECLrMZvmG8RsbshYT24UE8gTLHuNTcJj5",
  "key20": "Yw4ATVoawzfifHqdc4pUQdfuGGZpSjrf1Y3NYWZc4MuhMWXAkME6cpA5sJUML4EVDjx4Lhzy67vNQX64Ck8a38T",
  "key21": "3AER9DW2Gu2GsyGtmSMa4DKaKBbrJeU6dTxQh1LWgc7FvM992u2QsYrWRHwu9uJMaBgMEUD38bzA7TUphCTyBWLP",
  "key22": "zmZyHF9qCkCQ2JfZxZDNHTN8UdRz33vnY12qjKEfCsGXYnRpT5NFYUzHyXrth3Eu3yT9PS73g3ziknk882sgiuC",
  "key23": "32HWjP8oyfff3KwtHFpNGscAp5k1jt5pRZ77ZLZxzoJr5Nwi9nCZdHCFQxiRMDpmK6yzMxzekne9ibeAAokRr4EW",
  "key24": "3Jzzr7k9rRpeTqeC6HNBncEqZ4sYM8gpGmLF5XhNE1hWwnVGsd9ZKkE88YnT63yTz9nGFdXCFG9JZYhC9n8WqgDM",
  "key25": "37rokjRAuiQDGy6MYnvQdkfjmPobiURPFzLVkoyQh7vLpv7NJhL7V5mdTmCBRuGdRzf3qGJnsuUhJY1d4KDsR3xD"
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
