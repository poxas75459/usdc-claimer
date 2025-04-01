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
    "4FjVyndqDZ7GjCogMiK5S6wxxx8k6YQJ62vvFHh542VnM3zRaB66AU3PU98qko9kFUBycXfaR6aQYmJXtrR8qXhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WxawkAksEE1Y7zuHUjJNcpzN9pR6aVYZNqQApFTgKrqYQtpDmC1bkUYecP7g7HTkuEYLki4rYC3BMW8Ry6AzqGk",
  "key1": "5bp2JrzwWJENHF5MhrgU2CLipuTkGqadzrkwu7drfjBxp5JNEvm9dNXsEpqiUhRgcx7QKYUq1PHWnfR2L1vgjQ4p",
  "key2": "5HYieg9LiqTPtD8DsLeQTPD4s3CGsw77M9yfZq7DZdSx1daQ2iT4XpaFguPgEaBHKywGkEBVszjRTki2Ez7QvWcW",
  "key3": "2kuiq39XurYH5VcyehP7QG6JYPbRuChKKnsox3BTrgVsHE2C9zefw7cCArHz5yGU2TFSgyArbwbA2Xm4DqnpoQxQ",
  "key4": "4x3Pz3FTxA3Gs6VRRQ6iidLXYia2PHLWCtLrm6T6EmB6kVBNkY5vG8c1CdnU1VifPaYkXDDmzdXJoFNeutAuxaxq",
  "key5": "3PvrEi4Pb3gJHgSGDmyYLwsXXsKgfkLPVePbhbGrGQnj94A57sPKL3CCBpGEyVArR3FXKMirUoeRWnjmdxYAHQ5i",
  "key6": "2NbVYUdoYhRSajZ9FuuS2B9MAGFDDSzWL6F6D9bdFadcp1f325KL1UAqKLBjKtyr5dZR8gpY3NYkhaKhhKwrdryz",
  "key7": "2YBXHR6QB63Eujsk1HELRNBw51T61Af7gEoJAb3iWCiDkJar1mMipZW4SYySktydFqCJARjM5trzoAgNyS8VsRHF",
  "key8": "5UPE142mPn8QX5nDjtM25tcuV6fnVb6hGEZxfmCcmGz4ShnBmhyFGMLPApnL9d5LpaS2KwnMqQvpkQ3jm5MZAKzP",
  "key9": "4Yxz32tqqjuqa7n8cnbktHG2biwKiAz1cfPJmeGGxWEwEGv7b4JQBVN77cNMZusRAWNhT4H4W6yKqijnz3pK8BqF",
  "key10": "4Rm619uYDmPBU1pyNvqTkXcQNLpadVd7pJ2iwqdqFK4Bj5TXmkd7Z8rcrcXbHSv6zCzBG1iRbxEv7TrK1qg7tap5",
  "key11": "3dVnRAEpFh5Mx8gfMH1PuvemTX8SyPxwmUJehF3QkZLpuBqUfo7nMFFnRaRZmFSs6Ze43Pf3PZ8q2xksUbUKqWa2",
  "key12": "2BRqKdmKBw6x8Ns5KaQn6KXMKbMAVfJKGEMrDHwfLakn84ohmgoStPN7R5nqvHP8wwM3AS1a3js3ANWGL6pVDYo6",
  "key13": "2bxk2HRnZPHF1BXwTDa54yLf3hXHpuNxpD4vXwLAqMbVuMoiPtw6noCgPRChWt7kvhXR1W4PScTYsonWrUTRMwR3",
  "key14": "SY5652JbCciqLFs2p9iXdDPcvFtBaTmQnYBb9qVYmTb9ewVAUwftKEZEFLgn2UgZEpdEEsGjqWeK7oKgQMbU4Ra",
  "key15": "5P5WqUYDZFa3mT3BbdsqYSSkqhMekFjKnRqjhDVgpNkh5MUJvEcjzoTBevq6JVBvbrSV4af2FCipz6SyQQfmc3eb",
  "key16": "GNqEadzyU5fVhsVupxdfpDoJxwbanZCyHJvZ2oPDeNMNKYx4bnBWCPqa1vJAq254Vr88XgRKTfAKgUA6fw1pkJd",
  "key17": "56Bn2QKx9An3Cdy1kLWa2t9euC3bTCpkDe79crU4A5pFaQwmz4HiY7XEDbGGEsQrBwWZAXQkjGu4FyAX1W2JBnte",
  "key18": "4JivHuxSkh7mzTmMyvtCdUNhP72StQeWhg9tPAyCSqworJiu5MLBJ7fiyHZurocH84ynmYnTLJCNFzosZnZUqfR1",
  "key19": "2GECPBhVdfyTmkFrtVi5nA8Nm4QuQPDhkdU3Cs8qtEDM5dCkBxRDru8tDnZ7vUUQabzBRTEgxf3qGrSZn3Sy571z",
  "key20": "2aGPSWtq5nZTNAnxYSMdW1aMV2WffiGpivMLEkukzZLMn7evnKzpdrKq7Td9UTJCFxCxNUnXZ7psoJRFVUC9cmVL",
  "key21": "5V8RrR4bpYirTHsTLE1H2KfwunPMnmQw4gyuTqYsTp2ReHBy1cpyTo8qJSuhcSBt9RE4MEiK7Hjri4R39sUMQwjX",
  "key22": "hK1nb9Rje78sSG5b2qHbBBbHk18Uqq815iYXy13WUXy8iNjdjs11sdhxd6eom3XF2VKedTeErTc6xYPms9sZhZT",
  "key23": "3cZkn4t9wUu6LCjpsoedWL7LWoER3u8ZWCFTPi7CqFD7HS1LMHGmqTG4pNcd7QJQP9AL5y2KiAy5naHg3PGwueMH",
  "key24": "2V949pD9sKcrgeMpRH2ivyoX7fAB9uqLbeod7NEmhaTtt7RznMAKgUctbuq9QBTWzJUgDPehyGTWKrqenLo3W74d"
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
