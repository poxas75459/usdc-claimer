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
    "3HMX7su6tYxW6mZdaUcPoH8KyzuhRxc7mwGwUwn9EKcWbUQnpttGnvAaMwd1eLmWvg8Fo6DqeNYXxW59GUYB9dR8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bn9FaQwCnSQhrYD1nJ712daLhLCr2Ej5qcdMHazH21sfHtT7QfrZFq7vi15WY4F4QDPsX84eURrdftVtQeyZE5Y",
  "key1": "74X59aETaF2kaVZGyyBDp9JiDdfCYjF5diPkSigMjm9gcgHkrmB94qaKnEQXAMeSK5rPZG17RhfJJmMpujVgphH",
  "key2": "ohmhZu22zpgRWBnRRxu4u81CeMSXinG95UANiqXY9Rv2kGH4ky55i6BwBrQMV4vLyiZARRCqs1gZ5TjA3JiVYte",
  "key3": "2NwUaxAFT3ZJmKj5e9Aidbt3RypPeW2TJA5zEmKqKchKzHqsYVVdXbVuxJmZG7DXKoyWDU9Y6i7m92xKZKarrKMi",
  "key4": "6Sd4fy3QyxCGaJ9Hmgj2HJXVox5jWs2E3dWhKoV1gWXzoEhrP6kbcaEQ5WHRVVTN1imw4xhGYKhApWYK6QGsMWu",
  "key5": "4RPRLCLCJ4y6Xbi9ivGopwLnAUJKr789THDj46EPN8ipFwUJ65Toa5rw7yHrRFsYciKvFHoe4eEAHBsmGifTTWkf",
  "key6": "4TW6hRuv4cuwzwEY2gaaQQjEwPM2LjwDDGCaB1EZifqfeTvWX123i8GMbwtkVLgpRkX7DdMkMUixv4rykHzCvWyT",
  "key7": "5PdtXwtLsY9CFWNscLYCqtDsRaEUAAycvsZXjWUY8gSwY5v7C82R31MGpG3Dj85iZomKXV5xjKvocGm68Ye6Hucq",
  "key8": "g21gowgb9JZw8ZBM3E7kWL4VTVvsPpkcyDpoMHtddXSdGQzdtiXwcJEAqFoczaRFhKy3kca6UXXnXHPRbNkS1Fp",
  "key9": "3jkEUoV7a7uAhM51pKGxBkQKrqZphPyTZLH4w6Sb3zvptgKmTnkdy1WhNy7AgZBt6goYAVnuYmopzoi2f9dXxvYL",
  "key10": "24reNmDGDXQBmSfNEoJaZjSkPEYV37BMBtpScEqpno3N5wTxeHHVXDmZnn1CxVzqg5dRyfw7agZQQmnXYgP5uPDP",
  "key11": "3g46c8boByqnBaQHvP54KiTQBGSkN8dDv6EWZGxggH9vExdUjTSuX7XAamJmXD91Rj3yGvc9KFm9ukHgUTjGaDWS",
  "key12": "5udfKTKkKVMF6CsbSUddVaZGFFkbEFfoSt7Ytqp9jP6wxPfrrttJ2D3BAgcUXwA9XN12eyFkDDKXRca9XmFjywkf",
  "key13": "5RN37A8kHgBpWkJzXu5HCWM9kcNWfEvuttY33UPKUEXSRLM3RoobGBs4Sqe5khiwDoeFCxWLFRKy4A2AgGs62tYn",
  "key14": "45nTqursSyYa2msUdHawLcUodUrrsR4HrC4A7AjdzcBBqRspPbmew2asN1psf3V54yGnNroDZnNYfKGACXf8prrx",
  "key15": "AirxAH5vY252kxjy5TMpogEonVsFXbCNcB9GL8af9iqB4UFgz4hfHNKWCBs7pFsJejxQNtTWBVagdvaq5ToSspR",
  "key16": "tbCzUf9CbLsXp2uwjHKPnSnx6oM2bkvqeUfKRYSzenmqNoXebQa8m4U9q69TC71LxLVGGRTsTnWup6W4Tyg5kVK",
  "key17": "5XPdRHqL6Jy7R5CCUdMVBnf2fvMivKEaNiXbUzknDBztRvbnLbAuQSeCN8GeSdoG63QfwyRt7X9coHegevbV68p1",
  "key18": "4fWeTJqdbDm6FJv7WzkaQEAW11PubCqczVXUAiAok1U98mod85yVDNL56yiEN23kk2VZFdhsTcwNc3mRRebzwaPg",
  "key19": "WLqm95MvrwaaewW6Y93rQdvxsNXwEi4A8Ab9Ccc83wHXycis4UJjtWP1zGqurCRwFkXGzcHmq97cNLkL23GNmbF",
  "key20": "2vLtCy5VsXSauzdvFr3YkFPFfWckxEtmujUT1EBraQ3QjgKn7gM37YHLpcEJu1txH49CxeSumABXCLwF6HztRoMm",
  "key21": "mj1HZRY8HEpzoZmYc4vJnRnqJPiEekorR9DL5kJ8wek4UC2Q9dmi7d7ViqkmgvJERAqYijHpS2fZNCD9VzwVjA7",
  "key22": "4qr7QQvK9wnbVuTpLAz8u53MGaU6F2ZUuhNqp4E8Xaa3KqHCozaB9fDTd7kT67hAhLRMrNT8vz3tgKxWsmhYcLxt",
  "key23": "3NJ7dNKvAUjKHZSxmSNoTW9N5KZNP8U3R1PQDFMgqiNtVfdsUfHKNXPpqNVEYLw1zJZRtah7eEwQn9DcdxpJDMjf",
  "key24": "5ScJU62zhApDy5wzG4QEfz6ZjPeQ3ysvnTgtRJXJjzTaTfrzXYhyAkQ1GqZ4ji1fgafe74HfjBLxTAo1BsFZDXHc",
  "key25": "2dRJs183fA4aPA9ymHUpAcAarztCGmn5b4fhaeyw9VubjoxLbustVWW4xPbLQpkk5LHL8iQtGVVYazKYB3bfgoha",
  "key26": "zBFWK2JaMc4oyd9zjsmwFtyvXQEhDF9G7aGbTw9iYdAwhdPo5oFd42FK562yBBvCh4rXEW9eEcVG9bQqds2aUfT",
  "key27": "VS3CPsy3tA2g91bBYLQ2Rhcdedkdx5jTDme38xACnsM3pmiJffYQeausypjjVGKJtQiGzHCpaMRrLvRUuDhTxcX"
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
