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
    "3Uzj2ojy5dUSrEwtcBZBvUhQb6FH29Cyuwe9Gq8qD5w66KQX31S9nmJeQMtcWPdKw6Q9G1in2rTBkgy8YKgj2vwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48QCtXUvfQ1fYiWPLa2ppEmRMqz7n8GuY3GEUzMouYpqMHUEquhhR6GKNj6hj57765Y3BeKRECtYujX7m4oXM1kU",
  "key1": "M3HbXX2Uj7DXSfPdWjsUqzZzEd3t4FHk1KYqU3EU6L5cxjNPp98fqu3pNWVV2uHyTEsAtniRimTZQsb9pMg1ejp",
  "key2": "416wxYDTwrVHWxHnv4vL36KL4JnpNgbZKqcz1KdNNtHCyczzCwTwwdomxCD8qxtYeuG9m2FBj8JHxoGAf5F6RHQQ",
  "key3": "2tQjfewxFqSyutf1UpCnnDzUcAURyacvhNjchPhyuvwGndNW2WsK8TtpqqgggNkmwBjCJXUgw3m3sRiWPNqH1Xhn",
  "key4": "4fbAdoZ4e1N1KgXNjRhGTTnG4yamjEwM1B2qxWEUpwd1UHHcNzTB1q7sp4ywqoVkFiAhAroj3aitZCJtL4JZgE1Q",
  "key5": "34yhXmtbKqRdid97E5V12W8Rqy1ue3ydMdF8EKyewxGEu6VT2jBcGYBaYByYn2ut5EKMBygA8XLgkEY5XdY8dKXP",
  "key6": "2DkZP645edG8svc8YPvMgsMuJnCn2HgCBWunGHrJb3iMxdyRmy6X5iJTGdaPSX18Uc2yae3Tupug8FPZpHzv59Ds",
  "key7": "3MKgXNVkxCeh43MjpvmmKkck2Am7DpC43mqrkWZj4d49Go6WxwVSWUPNqLDBMcJ5E14xf7V5MNKZahdfnRsJEJnR",
  "key8": "3DM2vavjJARXkYshcCrjkRBq7A8ZWT1tJntMUVBd1MGBKj4Bw7UqRy8a1x7YZfGmecJP9B9VHauVk7Kk1XiKDhwu",
  "key9": "25Fnnt8Np3811XVaUhgJGGgZdmToMJpeQdqb5ns7FS2ELwMUE8urkGZHqzVZYBXodoYj36mrFeZ8gWFgQmm3e8Tw",
  "key10": "2ZyyDQypLEaUWCEbiNupt9e9fuMNrzF98wpsZxAY2ByZkJH8H1ddjVLiRmb1erwNmnBXXuraLkbEvmEWXy9X8pri",
  "key11": "3nZGaYpsH4VDY8Xe4QvmoEdKWCauZaE3vYZhWBhBfnqtiMx13SAuymF27jjxPfydnR7tWrxXceXhArmEwVyz6YBj",
  "key12": "2grmBHopXyFJSJWgJS5jGToszAqyL1TeidgrDdUeMb9QrPSFG2PS4zPiMhNFMK4gtwLC6PXY8dFQPLSiHZx2eWRj",
  "key13": "2wFyJsjvZB9Jw2xSVXNzbrtNowQKuoLqprgueqQ6zLPt3hoCBigJNzHasVraBP9fThQe63SjHTy5xDJkbYkVdjDX",
  "key14": "22EqMNZSTZZQrrgBDmc9HXMqsgqsKeVxPVHvaYJoUsFfF9cS5YX36W6NbX4WAoiYg5ErP6UMyNoApJvCaf3jNXw5",
  "key15": "4KZ8yjmPx4QXhLdoS2D11FsqChqymFPc81efPUCVwyniwsL4xivuvnrmsy554cAPVKiz8bfJWDn7S1nAoT8j4zJX",
  "key16": "iFtdXUBnhY9zErFYXYCU5Ktdtirxvn4J5ZmoxSPu2FDrurTUmkGEGk4KXYu1wrtn7aUdEK3PsKPnWtCzKAzoGHo",
  "key17": "2JaWfzxE2XQwJLBnXGDNMoYGjaGSnrhDfc3jSUv4mcmbak4C7rjaES8cwT38VSqHp2HtGqK1NBKDABt19d2XJhCm",
  "key18": "5NbmZzeeCqkCriXC5b52sjcysePUeWHbiCQYZp4s8p7ic4DBArLkywyNbWb4KDGunRg91S3tbpy81Z4UCJPNff7f",
  "key19": "9Pf6zsZnjtC3YxN1dPHJE3wr6C4gRrLKitsBTrSBoMtyr5w9i2QQ2M3NPQqgs7Av6F8vizkRviyjwrnSFCgm6HT",
  "key20": "zVAwDo1PMidHpJrXhuDMkU5mbbVsWzs6DAhR7kkBAUo3Ri3tV5rVRENUVai4tMVH14P3E1YpAgFGzviDMQdN5rV",
  "key21": "382gTtKZoywg9gw9Euw5sKruQnrk7odLutHcZqB4zyX22v5KesTeroVkUxcgN9YEyPtFvvxexWiYRwNx8hdhvp73",
  "key22": "5toB6HofMxETt7dBidU31UuLN8gxZ2WwTAWJSpCgDdxbCJNF7h9TZvdcAogQ2K2qw77vMBry95gAu9E1BMwgEAm8",
  "key23": "5CU8hSUk9Fr9gBwmufZfPMm3C592NG96wryNx67dpJSMpkHhYExTzjE5Yxbjm3C9jWD6s85NAm9u1zF6uywMoZB8",
  "key24": "2UFBSRrbzP1MB6aCTMTmZSjSmEtK3ThUKNi1YFBD7ao8pG3etknVDQhPXkdQgy92QYmaaPrzEieS2iJfrT8i8dCF",
  "key25": "vcyfVDHrwbuHVvqm5SHCoEuZmv9CvgWG2kW4AgwT8EAkpBDNwgfdbjExzvKU7Y8KSEJVCZ37t84QqdFq31AWdZL"
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
