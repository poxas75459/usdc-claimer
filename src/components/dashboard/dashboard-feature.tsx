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
    "37C6nKE2kMaveRbLMyqD8X7yTBypDUYa6uqoa9aBUc2usLBfukBmp4uygm8yc5gZqQ3BQv5o6vmyixCxTEiyCtLf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UvVnKLmNDYeiN6UdR9wSphd1s1p71DNPjgctLTnG3vM4Dsa1rXzmP9PaxSdPjdqjWraLe7QryKF38GQCwVr1JE9",
  "key1": "2vuzx9oh4Y9LYPfXpt1v9LduNWohRhHoVC1dzWZSqPHyiTyiTvixvUsdE9FuFPV33JZhe3GThqF7188fQepG4jqU",
  "key2": "53USqFrFNJru9HmaRxTFvZmbN7SQyUbNkBxGHwEQQsypykdEeHLgoZx5wHzw7rGV8E7kCS758HUT2KRAw6gwuHoJ",
  "key3": "aNAWcrRw8U1pcpMxMaVEfptX1BrLrgEwNjcd3h4ezLtK9mU3mSuVpP7W1boi66Zks8Zu4nviz4X52W1w6tW2FRK",
  "key4": "4oxiP77ZefwFYmj1AcXKSuQa6M9wYj3iMF3x65N7i74EpNUbEnSzjMLKwje3k5f5GZ2w8kWcWfTuvpw1Smvvj6Ny",
  "key5": "3XS39uk1oBbicQHEdMJNhBfEFYiznfZX9ca3cypRGD2sQEvNdP28uiN5gknPTSbcz8r7sLi97MquzwMjmhTGNRKR",
  "key6": "5h6rqyZCCEQL2XxDSKafCkLfeD82Ju8yhvtU2gfsPZ5Qr4Z3Ym5kvk5U5orYistiWYPjuEZBdegvbAMRQ1NCjSdT",
  "key7": "4DnvJRkL4YaU9BHw7vMFxzPYZ1nME5DT4MJTabgQaR2CLd7TaRDu58KKfNtrzzWUAEyVF27s86nJviPFRsEuh3N6",
  "key8": "23aqwCBdZSXxkukd72FEu35UMB2vG7fDAi93qXML68Dr23fR6DT9dVWw9npR2X9FyoauxgCrADN7j4hpQT5bwxim",
  "key9": "2ATRum4FMEL5fvKjYPuK2axWXZgVFbYM6R2dGPxReFPVxqcrsRziQD1Q7ZKYFzaKMYPSQ8uqHwNxpvTc8NDyn6k7",
  "key10": "59eYeWRrvoLxDSRjx9u5gpDwKe4hopQiTBfWGmDmgjKC5a4xZzQmYHwDtguEoaCLdKCMf1BEJ4y2gCh5LdKBVh2H",
  "key11": "LrcKBJFRjtSNZ1QVbs94QEg5uqRbEajjLWaYqcFnNEcMFGat9vE97vx7cUtqtXbZjWSvqxAdNyU6xwdZyTtBDsu",
  "key12": "5dHcBH6gSbEKuTzYAMMLtYivLjLgCzkg44HkDwyK5tEg9JTJc1JRBKuySX1jZocMpoXKGYaonFJhmhkduxsms2E8",
  "key13": "5jHjiV1FadBijqZu9KfzcSSMbq1e1EqxbidVXqEGcaNgBVoCsUXKmPFKM1MB7cMdQtvD2X9yToUTBX7cp4fTxCEr",
  "key14": "F4Q8t1wSeeJptrxhxwPqbxQUt2zfnteDrzQexsUyhZw8SKcFujTbGPYXNrjyF521Dk1UahwjPV36LBpNW7Mxki5",
  "key15": "5HAMbenXXUhwkoQZCVbBCqwAWgmxADA4KCDxUaVkn47FhSxA4w72QaKZkmwRtRF5kWofrunrGgk3VL381ZtUJKYq",
  "key16": "2nkknq6ATQtmurzJyUJECTYWCdqFgGiM3QmcpQDMoAKw1wz8ps31S4U6W3VscYJPTF8Ck93t6tTWXEbwy3nfAtre",
  "key17": "4pHRfP2FBaqPkmVQZeuozbHNWgxiZU1XGWyVqum64WWKWT8vA9yMQh3kHQmuWJX8RmKsdChkN2YLQjipAt4qijn7",
  "key18": "3fR3G7h2HyVGhP6xxHqnXKQTg7fKiCvCKaRWoewMGR78CgeLwk2BETJ8qR8W5T5bZvM38vAhDu4wR7yW8Mc5gTyf",
  "key19": "5JBCB2u7vKnrF3H9bwbmvEyzhjy1c85pMd3G5uT8Ny1VRkmbtcn9vmJk6C4RffB7hUES99qX8TA9eAphckshz4Lh",
  "key20": "5xtvpomD9uEQifHPvkxpGznrjWzT4tmjLfEKH2LUuRdUepvjBnraVTa1WBeup1eFNfKszukKb6fu69hkTHBgSCPE",
  "key21": "24LhoVRFrwGoX74UmRZtngQaijBWe9mx2app6EjxeLy8FPx39iVB1wuupJdzpBGkQkUP6bwRvDMjoFaD7dyEKN9c",
  "key22": "RznPkks3Uujr2vwXSArcWRMXKAXpMSJsoQa28spRoSUL1bAfMjWD2b9XT5DxWJV2NRhFRTiKu33LmTwsD5BrpAt",
  "key23": "4w4tzxfjiufAGCmmCZkBcRVMzQeL1dXdiLz64EeJ2iDPyY2XNfF1pGMcFUry1Fs8Dn7HUjjMZHMdDbqpFHpi9dta",
  "key24": "3XSpSQCvc46QsryzsrK7yRfeWGcsrC9Vhr54C8V4TRovoaVZqWnZwznw8LMnwPgrgckGeT9wXLGT4SsQHEu7Jy2A",
  "key25": "5xpXmMNw2aRV71kw8hruCYfZccqQf1YRuCUBavZm64EJjd81Av5GxTbqQa3FP29jyVjgBDY5F4QNoP1JEVAU62pq",
  "key26": "FawhXPaZwXBS3Tvr1zRp2KWBsWHvxfXidjDcNNjxXz6yn88f1LB5MDfrjc3nLo8M6aJ1niWZzuXwD8Q7BSLEDaW",
  "key27": "3MFn3Apj26v4A9r1xmU6hxvjw3ghd1adHQopA9PApTHNqcJ6mkhqrZxR4Px5e9Yh9MuiFN9ucoymTN1GZVKNp65Q",
  "key28": "272cpfKfYXJYHjNqgzZ2e6xX4MkKr3ad9xAfSA3spVc4QY9UmdYB8j4XEtih7tVje3usob3gdUnkTr56JAwaPxx4",
  "key29": "3TQPBPo57Hw6ouXvmjUmVRWsqURfmsPBY19CXCq4WJVnTaL3TegBSRGLVHhXYgfQZ7k5igwr7ZSDxBYc7qvWchSu",
  "key30": "54NcxvL5ei7zcTYkWhtbi9iXdedscEL7jg6x3RZHnXnGDz2MjrGMd6umBbhiHBoEMsqQNRATM9qeEpnDSZDRvPRX"
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
