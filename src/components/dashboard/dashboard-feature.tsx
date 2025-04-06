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
    "5xgNM4EFbnEM4jksS26HKkjM1Rg5tccYB4kanzepkXDDJbL5dtXSgUzGhA3QVF8KS8ejsaahWpSc6JjTZjCGGTCj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44LXFXC6Hy55bNGjDSTXog7A67P8pCUdvZwGJ3y7A47LKTyqC28o1AYA3Yk9pWuJbZk5kxU4KjsTFVFbhWU53ATW",
  "key1": "5Q5fUcBB5YS5HmfcUQJEprfpA27fFvz4MEUdzBNL1o4GGgCqJEGwQ62PsmRcY1zx1d8jo7rD1f9twxHerJDEFkvP",
  "key2": "4vuWbah5agXNNYd91pkCbe4SeHp6HuHpT9Xmb5GvSvVuayeczY9X5qfrsbvoLcyZtFxjHJeUoszdaz1r1T6v1FVf",
  "key3": "2jwFFx1fBRUUYdyDCzyzD1wz47Nw38WKzqZVsjzbcvqPraAJWDXgndvy2UYa3aT5gVcsqYiXfyQigUkZMdXonbrC",
  "key4": "4XoQQ3LEYDtVM5tUoJhwC3Kfh4r3k5Gq9K14A6moumienFyFMvZtSQRmHC3ahroifJC5yxhUKYy7RdaAzKwYve79",
  "key5": "5HCYvv5FcC1mQPB7JKSpyCCibqqQpg7WjaoCJWeTgyxv9nU3WsbbLC7czUdXCc8LnPoNffVfGawMSb7E5GuH74bq",
  "key6": "4iRdDqSXQKz4DoiGPZPTGoh5AMSv1YZj7NVsVs3yveYEafQjME8XnBYfiXbsZpYcxDeXqyNqYRSkQU97xKYak6yM",
  "key7": "hz9RWqbyRJRLve3DaPE3av4aJB8Bf2tmWtZyj9MB4tBFXd5fFxWN3jXBxngeAxReUtegnFWMxdZUGy1Av1sLWhE",
  "key8": "gFe7XbAbX8qjSCY7ucf72qfbCCWKqQEvfGkErGtmxCzY4AWprDipWxH5T5VSPz2meCrWw9h5HReDhDLMZFTeUYU",
  "key9": "4pHqjX8VVptjy5BgzXzJQE13vLpS7FUotis4xG6kdq4BtVJeK4kxUDRSGTfBXnJwjdvKinmyAh1yMotmdjP2veiU",
  "key10": "2Wkjsh1BPtY9b8gugdSpvLFfxBAJNKY1UxtaH41ymDywowvtVsNKPfXnQvZDPK8gwc2mvFeGRHXCFTh5eio1pVSQ",
  "key11": "5fkn3wQksYTPijt9iSGXqPCyHGoJGi2CLSWRxC5o4zUyUq4WULS9HSgYfszkYorgzwuGVMDvw1T3vnBTHMbvgWUS",
  "key12": "3Q9XfDKcx4pETV6Q4Pi9Leyyh2MpUGU4GM5xBcuLEkW4MfZKaV88vNWe4wgSQkxJMJGGW4ZEWwiqcxdoZHYQJJNE",
  "key13": "2ySjAucDtpkPEqtBhZaBQBffn9KhrpdT1JsK3euL5CTScMFw19FsnaLHhrP5QsH3VM31iNaHFdGBnc3z5BMkz2jZ",
  "key14": "HfVQjNMVGy5yHKzyc83z4bx3aB5M2eZQkzNA4HVTRGQBH5L8Bw6zCw8uYdbMDekVfKahHZLFTo84wsNUfLvRT5h",
  "key15": "4c4i9DqbHG5XxHcJYSpRgKpkVAFgSVd24k6119q9cJz9H5oy226Jtw2u6d2pPvyuUbitr71pnPsf89bmqgsXmxzj",
  "key16": "4s9UHs223Tbp6cmeaD9zNLUfFbUB1wYxcLxFtSssWeZxqTMFPKaLcAjHE1sx2B6Rtet4XB49CfRqZhGNAzwDALpw",
  "key17": "3tpqSPNggQc7VpcNQD8pYgsQzHcpFqx1wmBV2MUNkTACYDoHm4GttFMCsLyXec9eApKTnk64W9MTitLzca1cFr4C",
  "key18": "33ifQVVKgbgRm2ebaDa6nKd2uuDmmiUYMxUkRcBuwC1gca1x44FgwxQTxLNsHrZiZpMhqJJJ9MrWEokFYvvyvm4a",
  "key19": "49yFn5TpQZV3sEb6p1BRYFYoXXuSammoQ2XhpeKHGXPXaDMe5VejLNHQL1YeyHT3h2FsVBQXs84DdCBxpGWs1H4c",
  "key20": "ND2foL6yFPsFauMKSWvwx5ZzJemxWBT6TCFUWXycfiDYZGLVy14DHDGJFnhhRF6nqJbUtXkodsVXfEchBuj1DcP",
  "key21": "4UgDZLDVDF8AZEyQtZg2isH19mNTMiMzpwEyeAXSEvhPFhGF8Ngxkhau1iE4SMQPBG17DtXD9FkK4ULyQsreyUnS",
  "key22": "zpLLusvu6jLWpXjw5xL9dKLhLLDHZSmpraVhH8mENGxaGNyL6bWeWtKMSqa6GcYo3rH5acaoPDJ5kGDPj9csmmP",
  "key23": "5yxJXS4Ez6ENdu7xMdYw47J5Poe54LbU8R1KAihy43yZHtTjhFkdYZiaRgnbCthMTRKR9r5ZTuKVr1FrZ9RxB9YY",
  "key24": "4TtZDdqevJXmnmUCmwaMfH1vBXE2VYsJjs59zj3kRdmnVTpHExjGU3DzdNuAngXwt7tb49FURHxRC3bwS4zDNSHN"
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
