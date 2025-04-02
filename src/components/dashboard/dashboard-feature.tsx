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
    "2R88smbqVu3D5QBJzhnB5PhqsoZzUVZmbbjvkZAqWWrAu9WzctUFqSYP6pNSt4aBq3vK4yRdsppZDymSHd3edata"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23U6j993gxDMYetUyFKQPB1jEkR84Q8CpebxtW5FJXYmGv4NmbkmCR8ogGkUwG3i2gHYPCZR2ry698H4EdmDJzaL",
  "key1": "2Ycnav7RENPok66uNv6KkgaXZK2xEWVccdq4Ga5Chh8aSSyaY9JVQae6rTxqgsRx5HeQ68Uj3QceDQfBakyZHYXe",
  "key2": "4xB3i9NRL36MSA6zHCVPsbfR3fLzqmBcxCH5YX1UpNYWUJbGji5t72Cy3VbhsSdyjxXgFiwF66xx1JZxpi9EtdK1",
  "key3": "5SrpKB9dpxjZutqV1Nw3fgz84Ryx4hk5cWiCfHBT4ZpF7euTgZmprmATFPUECvZMwk5wiPE5yNEZvP2M53WW3bK9",
  "key4": "5Pwhshx4L3M1moipia2bRMP8CFZFrJwdomD1qy2z6FzXSYscMfZVvegssfLbr5XuxmHdne8iZUpvvAkmJYTwBgK8",
  "key5": "VUvPD8oWYTDYYfjqexmBjuDTfEczs78ReG2x69JEyxFrFbZJ616SJGHXhmGcLUCCWteXTTbDZAqbomGWU3eYauQ",
  "key6": "5GNLme92EVd1ibPR4Go67Rt2HRJsZLiS6x8GjQcU7HziawrFJXpnJWPqXCtv4ojM9RC3Aq2FtZi5Ha3aeg1K6sAb",
  "key7": "2nao96S3FophjHB5apFXt93Jbr7HrexaWiCtYpCWpBSjCRVRdzUvFy67hGoUcZMVt5JNcEjxVbv1tGsiYVpJh3Tf",
  "key8": "KaMut6UcLfZcBmT7ceJmVpBiunKjm2uqHBPsbnnR4cSmVQEymwVpoRS7fVhhvaXDeTcEP81umeJtsdLMBMLb7gL",
  "key9": "2agad6shbmrLdZJu5T16peomjepkSTE3Jos9rxxgRMMPd6HtR8xUiGmLPJDvE4Vg4WMT4WRcn7sF9k7Nfn9khwvZ",
  "key10": "UpLZ46KnVM3e6i5EtEox7VyyqVYUnZaNc3qDQ852YnsPQVHWPUHuTahzFVFFAgQ1N8NPkjMhHsCTKQeYvEqTAjo",
  "key11": "2veWjpWvfWiqCBCemWava5WswUsB7b1rAyUtVJd7Tw7ryxTbf7X4Rdhz4uGWiwUuzx9PXLxfaioXvgC98ip7i7M",
  "key12": "1ZbkMVAqLtYUzNH8ULf63Atw8HGxjvbYGVsenW3gS37J8wYGvfzVWtKFb2MgE5HiJjSyKXbEJ52PPo8ZkabhcNh",
  "key13": "6xkQQSZ5QyyU6L5FjZm7wxH2zxp1zQFReX7HdHxBoyYiAs3dDFYciB9jNYTdHD6EeJhfAYNpf9ZNFSmWsc74MVs",
  "key14": "5GnHHpw4BcyW7YVAx5C6tZk393psgaKv7ukxcPJG4P1dC1KQEPeeXAWzCk8vKn77ZeE6Ndavi62Ptgt9yQDLxRBn",
  "key15": "4A5GrRwDacBXHyi5ZwWtcoaVgVPfEbZMNkG63Ym8MJQpD5eobhJL2SxJzaWWdpcLrY3v9naP4vnxC1jP3y9ChAso",
  "key16": "3kgv296Z5Y8sqSVVHtnMNpoQXhrY3tuMmQoxjZGspQvpSKgqk9grMHjGsAsZMo76mMRV2JUjeRL5hFc34ytX1Nkb",
  "key17": "35hQPQfqLmkzdhPLZwEnrwbuSB43Cg5S9FfAHpJxMExH9AEpT59TymZgoYAVPgjGJzJ7FJNuz1aRxy5WzCECrPAZ",
  "key18": "3ipcLQFkUxntG168oKMbgmMVeWAXJSRxUSdK4hCEJ77RgQh6YtYw2ZszdFEwBZrNVGWLKeaeT1XYRNLB51iiTEXJ",
  "key19": "wvTeP8sx9PL5t3gQDMaKgywcDx7zqwF6GsRcsDT6yDxmEjC7uazKU16GtJBMbtdzxLUqeRive8zwwfTMrXdiQPY",
  "key20": "4NUqpW9vvX8JVRH28qiBsvnnW8nuJHMC3jt9gycQySmBxovf8EpuR8aMUJcQuHqTe8fRV15bV7spsd22JkG2QyXd",
  "key21": "rdphxC89dn8z3j4EPUVVwEgsK6vJYkKKmNkD5A8BPiuXQF2E7E3ciyGCAr3bz2LqZH64YEhmibW11RZeB3UrNGh",
  "key22": "5RrZUzFPVeNr364JF3mTPFpYffLsu2YTAtbCXUpMcc1mZAp85pEQMNqQ6rsMaDwGAJVyzTGhXSENGZb5rmRa7vZx",
  "key23": "wvn4rHEarQLR1CqxLMsPs9eWqdemtJbL1Y9qW5g4kQbMPBCe7EMu5WkYKiFqXAaFUMxN8tatWhn9nGpGnarH7QF",
  "key24": "2LhvmMRgeZ26pQMGEEiJGzVAuDMkVWQFod4KevZkzTASHo3bbEA1TDQTdRqzi5WjJneb7yorUiBv2ZUsJqcmSfaK",
  "key25": "2RXveGp5Ye9Gt1LZJiyaZWp5uVcje1ZPUudp3dNTTRHsBbvPMRL7JosyoDPSxk1WH2yLnpNFZySPZpYNYAGkGp9F",
  "key26": "5avhADF7n3F1SEPnTekgBC5a9ynJX3PshSdTwoTt5Wcj94tHvYkX79eFBHCcfv4qVWTRDs3mV9kqTopxG1hZAmk1",
  "key27": "b98PwYPQVcviCcYgcBJ8XAkxikYtrDYRbHJjKve1VWmp3zaFXRXnJjbvPzqxKoETQmpHfV4RR1HUVnyvDFw3mTD",
  "key28": "2ASSgWxzRc8TJfXsuxL6V55JTZwzjw1nRiLdaXwUfUuKXf3zBRBNs1mFHdm3k3kvUCjbJ6miihqwshTUWTaPEQiV",
  "key29": "59eRbtDYH86xdkdALkK9fdHdE6BbBUNtnbxSJwn1J88zAefHTQYKnPjuPYZyQfWmFphW522YgPu9gaTsp5cik8f5",
  "key30": "2yVg3XxWQX6ypZCAwx1guYaE1U2uYrxYDfxdJD2gzBQnpQcqTTQ8wCVEStdXkP4ZpkbqsDYm85aiXMQRnMEBrEVu",
  "key31": "3CYtdKFaxwbXJUgoDKfpA3DjAgptLSWffceuioscLc5YPAEzcAP3NxnQAnQbfBKxMDotabYhtXyq29KBuPqR2kcR",
  "key32": "5ffnekxQzr9vDTfFcBtsb54Hr8TusVRspXVe4f7DUr9ivM56vNFoXbCF3ERDgvBziAqT73Mr7F333WYMjb2r4G3J",
  "key33": "31vNRX8mAk72bxGNVbbNpp6D9jEuSQAUSsNcjrsCURav6zQ17XcjHxAE9d8ZsxMoVVNBpJ4nSeJqwir1P2bKwjj2",
  "key34": "PvimP69eE4xfUDBT8LhgRRCEJU4CGAYRo7ZmNPrvsdcPwfx1AbcEa56GXo61pkZh2oHjU5nghZVgMtu3nDViKKh",
  "key35": "4ki6PoEPDT9YnbAonSiC7gb9oVLVVi8Wt5VKkguxPs8kWwb2mFiR5gdmyJHow5V12PcAuitk5Pr92dJscveaQyq6",
  "key36": "3TxNfDiT1o2v6g26qHpKUGEttWqCXUBF8QiU1eJy6pT5Arjk2vFJCw4yZp3qYjrw4QafZDt5ztdCcnjtUmmbFgdt",
  "key37": "4EyD6jhDWpKDkhaaooR1F4tDUr39JdtY3jEbaWu3qfWY64HCG4GbEcXzVnnCJn9Yj6BcGGW3QgAxDwVYRLDg2kVE",
  "key38": "5DuTi47JpqdY9chNaNJWeQjrYr2GBBVuFTBn6ivFXatfqUmLjQ7Qj6BtZiXH7vcWPEAxZjNbWc3t97CqmEW2c6en",
  "key39": "rGhkyoNas3GNnYALox9hLfETtFjDrPZcEXxGYrCrTjrAyRm9J84iVYmNZiZsx4ubZNgFULLvwZ2CFmcerbYXe68",
  "key40": "4paLbgyeLu8etkATiG1bayQZbZnF5d1WRcrFUYyfwHULrobNCwvaM9yQVAobBRsJMrWNvbrzDHuyWia5zmuG7mRb",
  "key41": "2Pp5D1Dzvsf9QcF7HqhGhrnR74e5woMYvRRXsexGtU4CFfk3CZY7fMJRzGpaTpvqMaTj7ubZXkzmGKF77ZDpQc4q",
  "key42": "4AXn9i95TL9b9NLEyUJmDcfszxHCRpoUiya8HB1Xx2eQ72auPfnCj2BeU5JwRkKtsbdDKjLQfckBZZTE2mfjXL3J",
  "key43": "3z284vAmyqRZsNPgn2nVQot1sSVHEX7sqeW8ABo17deB6HWDmmBebz5CxcrsaRUFfguTuggM6qfdFZvHfPUskTop",
  "key44": "4K9RzgWYbQvjjV7QrerVf5qGdhoE9zjcXuCtyHzAhgfDfv6YQnwLeCmJMAnWcAdGQ6UgGmGd58ySrzZyuSRey2dQ"
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
