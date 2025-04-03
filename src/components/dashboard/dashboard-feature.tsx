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
    "5a9vSp3MpnsHWcBFNR3hy9xAxP4xekm2VJUHCZcKLVtHZFisZUW64UDEsdkTAbsMGQ3UenJSEVCxw2Kh7ZfopqhZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Rrx1nvcMat6jsF3gte6EyNQvP4KxJvUsfqcohFSHHPj6zXqSN3TsxvHHLp6xmikop17h1EXG8i1XnWV96oqmVR",
  "key1": "PVXsPi6edY22QzgDQ26U5cAUbdW7fQRcmzTi6BepenxHRJVuKNjw2MubSb6W62s3GwxYxVmgnk9ihKYuWyH43X7",
  "key2": "BZUXdvNWY4PQQEm9Lv8z8v3E9LRxYnBUEj1Jeg1XX9AJwK6QVE1YDaD97f7jyCBK7G1AAX4zkaz4VALiLfz7Vhe",
  "key3": "cy5X4Kz8WShCz9S38XWVecDjMUS1YAF8mRDNP43F5gwBL3CphKvFBvB355qtjFFhHew5KFgF3FGZfygtpQiJ7TU",
  "key4": "2boHxVfvaZAiD1VTg5KcdmqBeuGfgrWEwEs47XuLN9swKdaDdUY9yZZYpUKK5zd5wrzgUWbEgGQBn48tBkUkxvj6",
  "key5": "bmcc3NCQcAVfUx5hC9svYrfemSiw6sZZrL4dS1rryLJynvioxUb5K9Kf1XQf3vABt9xThBHZAViHABk2T4r7DpF",
  "key6": "5Hi5KeDYrWQtKsTUYLhkqwuMPcELRS7U8EHNSwCp2CP65i6i481Lj4PCfxkBR5iMBnveBb3wokoqy7qySmYbqjsL",
  "key7": "3JSCSmTEumNCwpMerXWyFiHwvYYnNsNhqhnZkJASorMSvJfMAnHE8CZU6iwosV4S46LmsaJZhrLqgUTCU6i3RbRH",
  "key8": "3nCfnNCQ352XkorkYTu4WesJRpRJia3wuSxGWhRvEcq3fD5qq6PLtGmdR8n7kJjUJHdrBGE2FudK4gJVDuGUZzyU",
  "key9": "gSL5tDo1eciSjHSqtNc32xXh4manGxKtr3ebf8LGYE8YXxXNbQX3Wz27LSw5qJF4y4CcJS9dHZxtGG8wsuYQM9H",
  "key10": "2YzwdjtYUKXNgEeRdoTXtAXJF4nvqxwKSVpfuv9Ge6uZgC57q7RsnJXRYD4vtb4TVwfbThJCNFPwPcNMPzPEg77Q",
  "key11": "Qia3SyetAg1wi24GSRAE5EJxWgKYJMpg1K6eou4Nr2DetZWnNEACWwac7SDMJubNXeVioco2ApvSV7TUJJjP3UN",
  "key12": "2F6tkZJwWyVbueiDa7pFr4MQBqs26NyEvbckjiMu8aGZ6H3AhnzPkgH3NKHPzeAxEF7A77k19BnSDvQ4YBNxD6wm",
  "key13": "4JGFVoe6uUP8BLV4x7CqxyuS3Up7YyzUZMLJT71HCeiVy8rW4ohi6DumSEq584BFjkXQVivKKuaKZ4suhGMVS8wP",
  "key14": "4TqR124yUiyfCjnUHrS6LZU2xEM5EyxVQL4FxhUAXeuQozFqoQZJMMMoUKrUTc9hc8YpRuSFwqWfwMPzThBcmQZk",
  "key15": "2RHQ3WAZ1KGUgo7zvEQyx5qVfF7LvtNB1j7LVCuRHSFFh9CH48TLSjHHjiXgjsKAz9ipPzpPMui8ayHHw4enPhnE",
  "key16": "3jLgyuwfgZygNDh2X1YtYyJJY7h4ERwttAZU9pGbCCv1vkDCAdCbJbGgXVf7DUQwT4dSSpVCm3GmXuPKHgnxo1M5",
  "key17": "3n5ArN9W4YjxcVEpZH94T5b6FgiEW8xuN4zKJdCdav5XYZ3cAkbHLBAWzfUredgnYyYsXseeqqLzdWX7sF1CjmaV",
  "key18": "4QiyaJ2REED9acuUbwRqionx6N4m7zVGmsYft7YsDjBHbiYrto8ushRaHqy6GsVNpKFNBtJmFq6sftXHfo83H3hF",
  "key19": "2UvsGDcoEso3aQJuXB6Mnr3tt34C5E5PfZ3KJ93unCzSe37wkQBUouS7iQfeN3zh6yX4FTmgobWegDY4GCYRSfbB",
  "key20": "32t1wRcEbzyqLRUp1H5QoADWSUAHM8xsvEJaVRnGSUPtenqNZb59HmN4oExSM8rWWT9ERqDgX6a2T2z9Et9sijvM",
  "key21": "nqHaW2r5tyrXhvkfNMYs5gVaHs4sWTgnzMPVm59RTB1huGkdwg1wBYBSkGHuehT48Tsb28s49w9T6j8eX8Pw6vA",
  "key22": "2Y8eqMZ6GCSp6jUqRoXS69BWWEkatBig8KfukquRjXy7xrdV83HZpqhtjEWLr4mtYArbRk2tZK4WkCjibK2tHrPv",
  "key23": "2kE6QinCN7uCNFVLdUnqQffWDzVE5yCphVXuPd2KeZp9S1jqoJGVWQcFZDdMUTi2bdV9rTkkEKtuzDXrdwZaL4xj",
  "key24": "4m8tzh3hBh3SX6Fu4i9fSNHoCJzxZyWVhnTr6hM7ixs36hrGqpRpteMyLkaeokJ9uDDeaZxx1N8b4sc9d9ttdCFo",
  "key25": "9nZs6UXEpBgzL1jvfrepSGMXFFPFyid8DENuHhT14zYzLSskwbuNhJp3CriXhfB8ngyW317d5CeNdJUMPVTVAku",
  "key26": "xrBA1m6oFDgEou9EYdL2uigHmpsukxRkCpn6S6Yv3JdPknAuGCmTqsUdcekf4xLc1kCVbDs6G2xFRTLs2cFF2bW",
  "key27": "3Pe2nmZ1WYqCZzgn7QZGWMEtCFQRfPgwUrCqTr3eeHaM2pMan9t12M4judxc1DJqDVZSiopz6ooKdnRrmgapqoiT",
  "key28": "2xR5uxqfow2rL9fZ5nyhdJrjkFSgqbTCzL1td23gnkgr1KunwK4KM1QbF7XAeWiRp5L6KbafhcRXZvd33iaJg4yR",
  "key29": "PsAfoTETpq1T6cgM1d1436cSFJePhUBbL67wZmJovfKWBAGge4uoGk62WxhUDUAModsPxxwN6Kox1n7dGE9hDVn",
  "key30": "5xTM9VPqjwKJzW2WjBVYdxBJot2d6zuYCkj9c25uLBhQE1f5FQm5GJbCMrRLaRk4ZqmGtdAU9vYyfnTT7jWDmGvB",
  "key31": "8iiWWvWSLJ7kfBXeqAaiPKR3tmzKuc1T16CcN6NvjoL6c6orruv8CLiyzxXnDrfR9Z77G5rD58H9tskmPh27dvt"
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
