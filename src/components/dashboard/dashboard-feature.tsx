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
    "5P7CbPfGr6exuF4c5VMkmsf1gyDjS7uHUBUsiFbQEET1gMEigx8YwiRGSLuiAYaEs1wNffBD2QC5KMEyjVQNWcqK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2crkafxJaJpt2zAgVBujjSP5UnEtzfcYAxgDhR48mBkaFxk8hW2Tw1TYmnDBABEQEetZxNwiTbd9DgyK5N6Vxjko",
  "key1": "5KKpN87FqA8p1hbasaYWP6kkLBagNtDJA8turbYtHeuWcGWxj6uePMsjsTPRMAjmjHKmyFwT53CVk3XFCcEBLydY",
  "key2": "21MaYQKT82YzTsCA5KiiMUkMULmthGrjQCMs2MNxcVZgDbZdv9grRVH3xNoievsKm5J6xDrGrVLVMvEvb27zAug5",
  "key3": "23PWu5Z1i4BodRtQxo2DNX5s6unX2ZcSV4CZshKcABgcZEt3qua3RahxqFv5JiPZJSPdkN4UJ19yJexGStuS57Jp",
  "key4": "4j4oDzRDXVjPgRrEQuKdMFiUB9TzKJatv3xnSoUw5ASA5bPw9hZYLLhtTN5kya7McSZMrRn92xnTirdvvoqtU21q",
  "key5": "4iTKvReFLVMmiJjrA8gcHPC8wLHiA5vX4T1EWHVaNwZCjNfXEZGueusNswFSR5XDbzCAezzMBASbcQxgLM1ZWHs5",
  "key6": "3yw2WGS6rcycS7pHEYwnQVcQMseWYXML9AhKRNWypteJCdgs2eYTM1W7uUonfXTABjF4oXwe2mM6isUtqBapzkxM",
  "key7": "2jCUrCWc4fyPwDaTpzXWD29SuLJNiHtyNUTh5vT3hfE6MtCn9Pdz5g6ARifDcyg8nVnHqx93SXMLwnjkoRCV4NpT",
  "key8": "3j4qiHGNWkuRPa4EGzdMDfxxvB3c88GUGMT7MGe6oxe2dzZiSwK1EuDdagJcRBmHeZXHAGuSsS9NS38YwYVrVEDV",
  "key9": "53zmD527TueXiz5hwiKnmioxJQ8qDbfQAVCTZ61aZdSTHNc446G17XTWnZbx5WeRyKuRZM3vqHRRDjevsLUJx1QS",
  "key10": "3TpzjXwim968CpKNVU3czCC6xN3d27m3uoQRsQD92qRwuwAphsNqwSVZvnGLEsCo8mLXLvY6VUkpsResbDsuNEKU",
  "key11": "ki38j7Zha4Dc8Lxks8VXZtoSJyG8C5VAp7vinBW2wxuki6hrvABe8Xj58WhVEzKDTwFrnSGiECruVzoHr182E5U",
  "key12": "Bffv6s6g5YexSRNKL8CEHJQtspxVbxzYE8EaHTpgKHqyb14QsHGHRy7mcC2BLwShDnWxt79dwHMPfTXtm3fDXH3",
  "key13": "4CiHMVgzpRXpajWvSZatcWy1XrshCCDbQZembmkzbsvfBiVXuSzGjdyPQDwuMKJ5FRq1gMFaF1QqX3EQRDqexkSs",
  "key14": "wgawiwdtczSM594E4XYSL1edJx5WLXz6TPLx4NDtXDpSbquwLdJxwBRNsHPqvEtNSc54FdGTiRmjSHTcX4qTWsy",
  "key15": "JYqEURM6135suXVcYFK1jJC1XuTL43UfTZKvraNAM3qVmff8Yrkiz3Ey4tTQeNk9K5wHggpPqiErArdPBvV3FA9",
  "key16": "45YaheiUySVBRBzWzPtNdTVPQhzFkDWmsH79nY9yGDjnygqzBup9fKtMARXn13dVRVwKqLTozC5Y24ngEPVdppqF",
  "key17": "2bdFQCBypBF3hwXDPuoZ28iQvNoprRwEM1i7vAEuXdF8tqVvEbY8aoYhaWrbWUH5HRFupmzNsxEruBYo1aDx3dMv",
  "key18": "5rkd8E3Wg4wrih9Ycj8777YWx4PCcMvi1tvV2jgrSXgecVrwbRoFXCer2kxghEPFtw3nHZj55oHYZzquKhxJDfDh",
  "key19": "24PrhbcD5oen3P88K22uvxocvZTuxPrDBrZKrY8TGw5WcyxorBToSLe92T6tGqtboiqN4awMEvM43Wn21Zx67ssm",
  "key20": "5wAcZhpU8acz7eLbV5pvZw1v7jQ3sLjtDb9jNhcVeYQfYKr699amQy4UZQYUhW2Hwvpcxt93KUJeu6YUwpwS4SFU",
  "key21": "3gbHnkWc7jScHsz5uGujGJTbomZBuF1Q7SueZ8Md7jdCwuvdGY3XW3xH22TZs1nXap8xPPc7qvZp1mkqvKGwpScG",
  "key22": "MW1NFY6snR1esFGJ9tkajkZj1wjU7jVJRyf1jV6WgaSXQhjftD3pR2VMSvgZuA494bjtuCjo3U4AsCZS4BEz2y9",
  "key23": "2FCwm8vFgi4GMhrWuTbYhhX6j7Eq7EAX2chwVPs2P2NaunGJSFYoC5Qambh5f35xqQsVQYX1o8A6gWNZfhHWRP6r",
  "key24": "4ogCV4KJ3TMJ2yN9EftqMBGNqFbU7tjFgNA7dE3Jj3Www9kpwd3Kk6y1nqozEi1mgQFJUVH7NtF14PUxcqQdQroG",
  "key25": "2DJGWkioAmWzKKDY2VjVtQLrNzrNuWFLiefs9gqtib83YMek9LDdcQtBVEk1Nz16VKHwJ1unkzo6Q4QMLBt99sqs",
  "key26": "21M2e9mddhLfqGk1stZuN9XFZXu3ngci9vArFytRoAGkYBbBrnYETzHmRwP9TGafZs8AqaEHqNxXFpUx2iFWqSG2",
  "key27": "5HtXEwTarP3eyRV3r3HyW8Kn1YrLSjaZPkz69wdjVzAcBQ11CXgPeindJU5hW3WotU6sdT7aTPjcLSfNrugn6gzr",
  "key28": "26mbMHNyKXFULeqRsxQ6XaDBFsJxpaJ8PbdWvEqwoay8xR9NPfKw7ip9cVNKJa56G3K6Tdi4SZvk5pw9xe9GMSdY",
  "key29": "2bV5EwvYu2aThmCj7waUyxku9fz9GWxmsUAFxzXDaoh7q8aTYxKhoh42Vsy3UHVnEE522Am7egbQps76RX61G8Tf",
  "key30": "2ApkhU5AYAdHpSWZhYy8shacarEGwgVy685cN7GCo4nSxioRVWXZr7KuCX5Y7D8AbbwQeJnvVz68FNkH3SLpcUfU",
  "key31": "26wnZYoeigaJuovuAqiivcZw7DZdb1EViKzQU8qgaZfKf7Ez7Vpa19G83TThaewZMbduaixQg6Vohu9knTdk3v8Q",
  "key32": "Yr6YcyVsvubFtVEfkFycjJ7CZsAGHZnYeL6pug9t13qFyeNDsLBZf3A4b4AUdRHeypNWhyEQmwxoqRWV2x4Ei6q",
  "key33": "5nYkCRSchCaqUWSpT4NUqNnR4tW8cSM4moXNmUeDmX7dC1QLDZ7pmGPk9gBQTR27sA3UPXWVEjJMcEVBAgZgTfKi",
  "key34": "34fveYS5wNe2DC3i6yj1FLU4eLaWyZME1zAPCRx1uDjgvQu7Cs2SVpq2U5x6zE6RKogGYPRSbhsr6tb3rbZpV9oD",
  "key35": "3HdZhQRQG9zrPULZ4gMGbT7V6ARPeC2HAzRk2Sv5gsmRQU7sUigtKwVXkPpEZmnWgvPTZaGC1fKPCWNQKqepUWMB",
  "key36": "5Ei8nfYDt8gSTdobyJv2dsLeorCTcMVLrrtNJbb3zJ2rK33pKc3MUQNtFXfFuzDeLepaM3hLoyZYRaX1fytA3PL7",
  "key37": "4Ag4Syqsf6PiAGw2QpyvGu66CNRpfZUfcT9e7Qtqv6JQxduioeZn3g4VmQ421zFhra4SssoFFW53xM3G7Y9DVR2n",
  "key38": "4iNxmKrmpyGGuJWBo4d32bNtA9bakfnTc6edUCcs4kRLtoJ4CuLK4DqkdUkVR1X2x6qJMCTH3gDxa16xaVa8supC",
  "key39": "2sUU2ej6MU3SPrkQi2sUzJfpVw99SeFUVLRheGJhe7visrvpBNK8xhrW9X3joFEJYPiWBfdWpAJvqgQgR8WR7gMz",
  "key40": "xeRBAbGQdiAUC7tkouKYQySxMFraQpDH3i5kRiGfiqBSdfwDZNmqiKvQboFHed9f2qZye8XdCjTQzEwBBnASmLN",
  "key41": "5JuJ8KjZz5oyUruKUKmWgkYkRnLknR61fAAVhXvrJCCSpZ62VcARUjofGood8GRg1KzNVj4NqMYBYMgzpt4Tkwgr",
  "key42": "3PxNx2DWLhWEFM9af8AxiWU7xzFz7J9SU7BCWvChJHujs5WMfFREYA2XHrY246waLxXsjVote1dYZ1VnqkrBFfBP",
  "key43": "59aRN4wNASAMBtt9RZhg1DsK6SoFPZAzRRB23cTQQJDwrsg4eBEWdB6fj5eECcg4eMgN8xZRjbc7joqLJqN9yqmM",
  "key44": "2AgGG8ZGsJe7WpjPXP3V1aXjrMNsTmyqAKL334cXA58rtE7zQyQSpTexSDrQfe9yyX1MYzvTLSpfy1t7GVdRQQYN",
  "key45": "3RQfdc7AqT3iRwn92DFU98oZE9LrADy7xiRPHbiKnGbu2R68DWJHo8oJsVGrbLjiM77HugScbyAgZNeDVocrqwXs",
  "key46": "2kc4mCntkxxfWNh8KxrGGcCR5QHXfb3VF1UMWwswHt4TsFxNmSZJct6R6erKzutUT8EqjJzrgRM33je9k1eVQASU",
  "key47": "3U5Nb8CfXgsDnzkmfobUiMvZ6aXNcqXpEiqxXdjq4pPQTr3zffX6Aw3FwqYXNsR8x3nDXjHFpAC66MH5Wpm4dRDf",
  "key48": "5RnfxH19qqH2yi5dnHxLqMhTqXVFVkFL4EyVQPxe7normT2GAa3NAwsbgDGTNPE7pVJUsGt32FAUESxNy5kfNby6"
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
