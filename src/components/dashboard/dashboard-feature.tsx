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
    "3S7qcLjeKTRHo2zuVwXW65fR5vdfUeTmkYN9nghWq6B2cM64Nqbdm3pamwzfEsKTo49PVjGv8JW6r2WyZq7kE2u1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uWq1bCixLn5a1Ufquvm3tyycMCiKPxnnYQAmtHfk8r1G5hAQmfVXzVmZDXXe2AJXyJWEoxxVzwy2q41q8Mb1Ssu",
  "key1": "28JRriN2NvbXNjsJW6AhDnVJ8yPeitnVfHvwNuxHmpMzFboSY63RZ6ocRfvrSoGbknVinXHVzDeWNqCPyoN1R4Aq",
  "key2": "3symzMY2gG9RgsydzHDs9WrxVkKz2B7eikoiyYjanRGnn4wUhmckyhQbYHwRuM6VAvPT4wqFMs9ondRZCvfKQxKh",
  "key3": "ZqXaMQLbSkqC3h8snMX1mCn9KgFVbXuSXicCX56P49suZ1SrgtcaoLC5tp6kF4BDHY62wwt7tqZFKap2MqQeqH1",
  "key4": "2nzVCQKuHMYyiopsyhs1MhKkJUvfXAsd9VtpdxUjvmAQrhMmrc9KZnZtB5ySJwyxoyp5iiCweFTWdpi7GQJJiXqN",
  "key5": "PiTvzZTokhfcrJyVbM3tTqQS7Z26fWqQAxkFcoMvskXLuW26mri5LAcV9VSP5LXNL2BG9tmnabozWLBtgn5QtzZ",
  "key6": "2pL1fcCWC6NQTKfnQQW67eW2r2K1fYEf3PJytWzUdY4KD6gFDjAtxdvL8BTPQq2tTss5PqESuD9UnrJD9LXr8vZL",
  "key7": "C4ez3yWR4ocd99CHJBdtSJ5tEPSqERneFwPTbbURgagf6taBE3ze5i2AvJvDpnkYarEZrTBUkrpcNEupGxLiM5N",
  "key8": "D1SxQqJywNoAH6Zv1yJzYSuD8KYVJ56UR8cJ3TFmP8KFaZyCeE7bP98FZtKcKmLXhrMyGv6dq7HRwtsxoR6Fx9Y",
  "key9": "4k1G6bw5jJTCSMSWg9UQV7iL5qPHLsdQ7ZJfXD8PkACRuLvcXmCnrduDAUugBr6rwx1UvKmUPqqpnT1NE3jt9S9i",
  "key10": "ZrVg9poLGpjZgToJHbhBatKuSUDUhEw3nXArafYh18oBedtNfgYUtta12rXRvGNpX3uyw7bqMDrQ3jTEbJMrGde",
  "key11": "5d8cmVrVq7CXuhgyYzgCmMdfK7cUrV51vDzQXzYhtDRBMSh5vJErwWNLkPe3nNorScVo3EcEmF9TenYBurmJ7zgq",
  "key12": "4AGYFDcideJztscqL36XnWHE5CzwtF8tYRVmjSj7zypUtWBcYSf1e4bJU8A9j4ARAKHs7FUyRcmAdL29fboF6UXS",
  "key13": "2pfVRCNA7HTgKQ2ga38vyjw8mZurq9YYmApkckk3u2QNg69spov6dm5bJguKN9xwu6EiGADEuDsi8Ao2gfYSunRr",
  "key14": "6515N71Q7gikDzPhj3bUDhkBLyt9FUnLG4iZqQ51hJETRvzQSozNqkvuzAAWZbwikFJkipAsQUPPpsptqJLK6CU",
  "key15": "4oGSgD6T2Uax4xUu2vdga7ifg12qDnxRRmKnogDWYwCoetURs3ov3Yz3DxWrFZ9pBiPek18tW2BhrDqKbWbyVd3Q",
  "key16": "54UG4PhwZUxcR8dxydUZC55wD7WPSTPCiPotCqerwiQzSqR9QRMTHBwiJqRBaDNCcoU89UryhAwhqBqU7w1j7qga",
  "key17": "5d3xpq48koEusY1HEhGKG791rWeQeHKqgXmzPYWzbfT6am24ZHH7wn4ftjE7iXk71uft28EkEDg8krFvKNy1bsyn",
  "key18": "4KjzuWKbYNQKhE9PawxKaWbznaJdkhESi6u2HC5PCqwBS3tKQq1gSn3tXAWgX84WRe1imqxwoahRAQzZt7ZRXKbP",
  "key19": "3KNt5xKgkPsiDTPjVWyACacNd6RyyqBTwh4UxmZNpoByqMLroqkaZnZRZrKzKEAHHfP84ttgEVXLcce777t7GVDc",
  "key20": "2bq9aLkUmG6JEcwbo4DTESG16WFVW8C3YZhzXUzpURmUqFKgfYs1bPwvdeJxC99ztQkzVbdcJuX4k6WcLYwJBWnH",
  "key21": "48zPr6ZHn5cM4c9ZEjiVchFf5K3WEUbDEN7mw5Xi1dFkBtSYtWZQtoEehfeQ7KGZ3Z2QpB6N7hmHR8Q5vNh4FZbM",
  "key22": "4kyW9mXaivm1gSbBv5BaH1qd8aH3FwaeLfLRR1aMn2ZmMLsas4xmrWcFThwbw5bZZXpS5Pb3tWx59RYxCTCjwVjg",
  "key23": "xh1v3bDoZi7sSUoZKQjWoAx6MWzSVhYXU9XhS4KDHRa1y5hGc1kQsYz7bT1Qw63zWB37bQCHZndcJhhFf8Dn7Q5",
  "key24": "3vMHGGBqMadw1XSHEL5FqafEHKcWVXaD4zbsVQJGKde36sNzH1YeKGbHxojN67FkfAGKZZ4B8To7ry6ztn77m228",
  "key25": "5xAqu1MnsishdcZKSTvpxEYk92cqauaK2x9wjWRDo1W5ZoWhA3Qp9j1tMVPiVeAZHa4r3kroDA9WBywMiyf5HmHc"
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
