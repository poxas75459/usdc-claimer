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
    "7CXF6JcsggV5z7od82FRxbwqMqA1HvyejRN3Y3RFBdBotWrQdPXp1BPdbUfgzHCgBwTybcm8etsaap5crHQHSQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aWAhDhJATML7n86BrPec1FrK6P1e765QJ1nsuLPU39Lvv6GtRJu6Kf6AqGbHADXPEEc9HQvYxPwhULkEyR4CFYN",
  "key1": "5RwVhrJub24MVqHNM4Zh11VH9BREp1EsraLhtPGJ8BeNGbJcBbQZabVsYsxrjKXzarjrEMV7KvQrxvuGR9Rm9nED",
  "key2": "UJfwMgcUWZEY7p7uuxmGK83JKbLQ4LYpMYoVFpEV6SwL1LXikhLdNMFAj61UWahGMidHmqZ83YC7YkSqns8gH1o",
  "key3": "5CcbQ5UWsXLT2SXybP7zRzgdTNYcYjiCUxWuQf4VD2Nz9npuc4bD89dFyFsdNT2jBmfnjkiYFCRgkGthkW4gExKD",
  "key4": "57VUxPYBGR5FiLSa47noY6S6TSWa9NuuPdgdVkw6RAiidL63tZXFsG3VociUeepJRddKoNXbaZ3vvywvHj673JMH",
  "key5": "3qMibkUoaHXBgq6xZiaZHUVt97a6EkPbUeHe4pCDuKRW35JxFHCwdy8WbMqbkk8AaBUDG3acNvuhSLLZKfc5dZb",
  "key6": "4DiPMaBNFC5xF658fiYWDeZUGj4zNBs1CHSARtmVqEjBHSBzPvSmhJFsoJYyCXkW8oxRpkeLYao9pNSDb3PZnvBD",
  "key7": "FM92XGkDuatPNQtKaEdP18c6Nf7QUwmNGNA4aW6xfrpiMEnohcKTHGFLHKU76BobApuX657tsam87SYgnsvczqF",
  "key8": "2dXamVTRdXhSrsSQctaX5s5MpcKMFJtCEQ41Sm6NR7YJiVbRjaqdVyA58iF2KUxX2EbhmYoAAYaZRfNXFu3G2A3j",
  "key9": "5KBLe6K2P5Yw9xgMNkiMDTDjJ6Xa6SbHBpicBcxsHUNQomUKVKRYW3PL3k8Fy6zVQtvpUUvRbEvWp6nk6DKT4xGC",
  "key10": "42hM8qFeYNzsd3aY5Qgt2qaNQ8uvTsp8D3dXXm6r5kSedfakhL7Zwa3b3dP8F6cuLzGGeUHedi4inEgcSxz4Dv77",
  "key11": "39kB4iJdf1h9AyWsh52mn95g3QcszSWhcgQ3RntzVo1mWcUtWgvJaADWqCvNwo1BmWAD1VRvchkcH4i6PSK6gzVL",
  "key12": "4rxynd27eyz9Bbi2zLgBczCQeJonhRm4zuabV2wC8GgW7XBRA8vHFsBfvyrUoMWegw1iWioQnzmzXeM9XfLAqrBP",
  "key13": "V1K2vLHhxfjU2SEe5h7WkJTrndrxhEs7Z9d2SsKuKoHiKJgb9NQoXfTTD7UqcPsqECvFguRXgcyPkwZwdKdmwAu",
  "key14": "2pdGw6nSNa8vBPVPcKLMTriMFArRczWsaR35r7e7w1Sttk9iUnoAtPXF75cSGwFMzRGws6b7yovshkozzgadc3fs",
  "key15": "2h3YfUREHxBQTQBCPKBvTN8mrcNdrdRjLSzGd9uNRtgnejJrtkKM4J6LEse3fMZoGchxtmXPkCT2SDmY64HVjQgY",
  "key16": "wWBC3ac7KQZLAYQLtcHXBNEnrZ4kANfSjZiPCcQeaLQLWaHf3VBCcYdFBx1PE5yTq1bLFFstpfj4gZxr2VQAADf",
  "key17": "5PpgTAfQfdgUQPCmFLVuWGq8hwkxcdQ4CC2oRtEx6Bj7XoLuuN1ExJ4axtWkU91N3V83NspX9H2ZAbqgj1jRNNdM",
  "key18": "5A4RYHZgn3upZYq4tEoFrXWevtwzkno3JJ5xVRoLb5RHkAxQ51S1Ng1pCAUAg2RB2UHtpdqaJ9EwQcTDK4kaXxqB",
  "key19": "3UfjY4aqKGEFSZP1wWx173CfU5XffK4mB4P5xpsPVkG48H6K6DrhoQTQ8tGwHML5WbdkLF29ynjGYnfyrStxZSj2",
  "key20": "53zPXkx8jK3ZF9jtPHLyCvNL2DkhG28Gv15tswLC22nGJgjevjUj5rAV19vhrDh5CnRaBYgHEhrjYAt1zDxveb8m",
  "key21": "3QomiuaMDE4HMqqX9F1Qt3vFZKmodfuEZcoyvSkhRFVmCCReBbcPHx67Uye15Zd1a7nTgNATXTgokerfJe9YC8EW",
  "key22": "3urB5b7jfVN7g2z2t7GQpHLrYkRjNvWKjhzxCXBQG6M8NvZGYEcZ4nJjMQsZ1aYXJkrkTXTq2XZtycM5LtHe7FDk",
  "key23": "2cTUdy9LeiA93PFGjN6eny3yiPq3MSXvoLjU25zfrp9LEwTvdgchFxa744tkczEriZYWRqBGvSV1B37tHFDBFgjm",
  "key24": "pSMkLyE2ZLPNKp7CazgQFugXzw3YW4YbondXU1MVAVtmAwHK3SxDBQXQNzd8vwND7YPNnoakSe9uwJxiHVuiTDP",
  "key25": "3oZN3v2thdLnySWvTgB829ac2e6GEgovZhJLW4kR8UNLnkJ4ZFHn4V8ahLsgixqDwtEQTvSnqJSrCTNKNJ1T2eRz",
  "key26": "AxbXjQz9NfjXygDicdeLBGHWvHKDfL9xBCBG3wxq2SLkEzk32FypANJRXC1iU6NKmZUPfgs9Wu9z72AshZXrv3S",
  "key27": "5998EkVhL752YAnhkMPAs1ajY9DDBvXJNyMGZvrMBitjoEWjwecGf961YjQt4QajwdPxCMTQRGxpypP12E1bzGA",
  "key28": "JxmSRSNAg7JQqfDb4uBNokkV5a3CPEe62DzsBkjg3D1TYcvs99eZshnYAfJfG8Tz8P8FVgNVUGbVYzbf5Eg1gcL",
  "key29": "UeX1cJDw7oBcrDmxW2mkZHx5M4KqAfZm7jYxy7X6sx2D5CVZiuFBgJDbqk3zY5Nz2bsmR1VYmfAVruZzxnFPeen",
  "key30": "3s8FhfKuHkqdwtgh6mMGZyruj7TuTvECQqobRNL8KeeaBBufywg4kjqZbcH9Uib98wES9fctXLuJ8NsuQAa2mgW3",
  "key31": "3C9vsyR7SU4PGi4nQqzMqowNKr5WBAcYhqkwUbsy766vSmByT14hhyopSKunpvC6PTFyTHGxghqQdXW45XsePyxL",
  "key32": "4X8ho5Juequ6qjfdqv2gTW2Fa38jViops1Wu8JFgBgLJ25dnFjSaKtuxGA5vbQ7KM3XDKkDCewhNfbnMYWw5iCXY",
  "key33": "3ME4Qs55tTFCUaW279hhGakyqDXnYYmHf7V79VqtZ5rapDwXsSrVUpsitKfm4kRGt62qCABMoErZzWSo8yFhzzXd",
  "key34": "57V1w6zuigKRTxHxJv2TNjeDu7CDV8PN7h3QkDChwsJyb7hT1SLcA3FHccC9ASSxdwibu31qLz97CXC31H6qMCzW"
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
