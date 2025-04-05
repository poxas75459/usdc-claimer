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
    "55mFKoquXxpnBeaahSf6onX1u1t2niXq2G9xWRnPWAymjim6NRnmW2K9ebdSXoQbcrYWyzoKfWKwQBEFH6gBWRYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t8Va1g4NYHRm2HE6coFaJmsHPJ47JAPdwQFwnRsiyRW2juY73MFMX24Wkv866TZLFk8zg3TjmgszmGakQixhjW6",
  "key1": "kubSJgddZWqpTaCgkKvsrP22dsxutxVXWufPmo4rEDk6GDfmiYha2GAttpCo2TmbbNxMadEaW1BMPAh18N3VQxR",
  "key2": "qFRhz2s6oDgDFcKBGuCvvmWJL7qdsvTQszvTmSSDiuX3sjsYcDdxwoivA9vfCryYUFdaGJrkvd7RuFtcgrVSb2J",
  "key3": "4V4SWUug7SA9fnqK98XcyUauvNEn3WqLQkVLxtcxhMk5rTaNdugVBrWuDZa7bJDznDUATt5HDfTQnjiGgLBgG584",
  "key4": "3hnUZX6fuXy8kaXRLoCtzBs68dRAwJNnnS4NmrdCBedsaMjTwgHJSxqnoLjLfwZkjzp5vAqwLGGhbHfKe5tqaBcV",
  "key5": "3Mfcxdi4fnEVgF4w9wJppEpn79Jjha84Wcnjy59xKqTHTcoJv3UmGcL8GM8GdhKFQKT9TDTrX57EyWky7tdht8uC",
  "key6": "5dPtbGcEPNT4nCWNRLiE4dLSEPcC3c1p9eGvhBF3TTZ4DMYQ3fYFoWyKobzUi24RCpH3E3crqhpuGjdk7mXCo6eu",
  "key7": "5gf2rMKFUox827d2i4xAxChUE3sX5GN8gdWMmSZ6ySfaXs1dC9gFpyhR8bpmiRtKNgLUZZpXQPMoWQwwqDnn1UrE",
  "key8": "4RhCC9UP53e846rmb1FohxRHGuukNzLgpPD96Xcur3CsPiyHie8ykWbEB6vtLubRm6YN5jM8zwUmGgtmhRW7RoaM",
  "key9": "3ANFuQzYr2mC54rFSqCeQq9crptPA4oABxHzHkacquTHRSa6QMLEZV5jQb12zjzqKq9CrM5W1itMayN4usHx3Ma7",
  "key10": "WLkvxbrfAC9NkFtKvrAeCqUnEwGueZSwAjSRvRUHrqBbm4yZqDe7njMMoUcqz5tb5zMd9Zd3vZR316H3BxArotH",
  "key11": "3GAHCc3sHDtHKKT6ZeUYs464hQzYUQpbHMHu2zPwVsAvodhg1d1f7ag7wEAbRkuB5CU89FMHenBhVpjYsQn3ynyB",
  "key12": "3zmD25NqWbxAdehvr2LpyUU4nFSfc17fmmnrm289Jw6foApEhhYrA5k3g75PaigewQbwRykybmzWiKZero127uP6",
  "key13": "61cHUT2tqaz9wd1pgTLsjBWN4v9Fc4qDQfT4VHS5bYWL2bTQte4UwW2PViDShCvwPQJxF4vTLtoudG6tnTEvCwxC",
  "key14": "2bUNkMgJj6HG1yAa5ZkWGicUdYcFBuVm4mXiUbYctrjHe746rKhvUxLTyPQ1YcVEXdvbnTrtwCXYkTv8ZqPRjX2c",
  "key15": "GyPaUR1tuQF22P224TaqaaAXat8KzrJCD6nL2Dt17MYASBqT2GEcBwaLobxyvnoWVAkn7hBJBHzHdZGtSAa7Mp5",
  "key16": "3zZuHQQCzezcZBwAsoJ34sM9NsEi3AT7sfUyc7K1Kmf6z1Ab2VHzkZReRUf7z8AdM25ChPjvSFwzsehGi3BFrkRW",
  "key17": "5tmGi6FTFEVUUJiTxvFR92ziyHKqdVBwczwQ9DserUcMKWtEDUummS9G5GAJH43GNXhMJJrB897nm8W9bo7VuWn",
  "key18": "vAw6xSeujPHjM59eER84Ae2PpBjk6Ug5CB8tf8vJsjHPgXuoZmeT35TUY8R49KQ39gjcortX4Bs5A9maAotTzKY",
  "key19": "5wfPoo1Ltk1kccciWqpNqe1HAqArNGv4uQiaJ19WcDpoP7qPTzHrUn9pX6X9hzojo4RUktPSTs6a8QysoWAZxU6g",
  "key20": "Wx2QZ9KKjEu5EkVmMNNdUPXF63dJbdxCDtJPomGhZWKVM4VuDqw8F8MV9Wj83bcEmVRekgw4QESicSiiDDkj47S",
  "key21": "41uNDHB9eqE3cAKmpsRQrShxrkkmiWuy47Z8ddyvLYGCLVNhuNsQYcJ1MbBFVRAg39MTPHiKzaLoG7H95asyE8Yi",
  "key22": "PnNzzMnGDuAMpUJ6Xecm97P6ezNEUPbLnQ86nFFX9tYBJ9tyN4D6u5YLDjXgmuF4upfYp1TCYtv7DsqX2rwqWi9",
  "key23": "2ZLP7QN5fg5benpynLpBJFw35KLxKikPmQv3Wc495KSpknhxrqBqjEh4Tbq81GZXaqNMUpYKokHqZnNBe1WrVJdN",
  "key24": "5LpE1zU4sLmJTzzSq4qpEkBYJrPfQRAjgdADFwt4HBHqFhnq5od37cQriKMktRNHuphjKqi7Ge8qZRm1CCwdrYmp",
  "key25": "G1cm7Rd43qW9S7Zdwf15s36SwFgR4nt4oLmbJofw13Mkc3dVuDumkfuBAmJJDfoCw5NdqaaNViAmenpPQeAujnH",
  "key26": "2SGY3z9Twq5BBp3S9x5Kyk8rr9hQ49AJc5NLJpzEMT9dMxL9npYL7T8bsfUrrJYpPD9P9KJ6eeEQVxNyc1n2ou2k",
  "key27": "5WngqtvJAFmBZBdRkZgQnPEX4a4Y4DXvabeo7Gp4svngTbDPLAJcwiDvC2Fs4xWSdBHyNaSCgmB8MnWUBcBPqYmp",
  "key28": "5Wgt1wpRUNCtsLZSV3WymuTYasaGFmPUVA3PyMVjDBudmQtdiDYusJudYRUcfUwCMCUcxYvWvwjLeqxUmrNQooty",
  "key29": "5jh6oF9Wy77N1BbAEA9Lv8CX6nRkMgVG66uhozLR42nqPzPW1L1cvEXSq6RZYFBMm9Boime62W9Cf97iW7NPAttK",
  "key30": "mUy6oCxijaVKEm6kMBmUHHRratkJcW7fPT5T59CLQvybcV5pqkgxcS14B9TWKFqNVH2igzfagC4iuvPutdmh3jc",
  "key31": "3HPse4GS9MbWxbtUk1DnFyPZ4BQVeMbJrZthrygMENjcwoez3p7cgYtjuTQHeJq9yXpDrNEVY9MFbf8hkghx46qW",
  "key32": "4BtRufR9yzHmZZLrnVp8rRC1pXvV1cUfD1JB6U7hvehTCrFwaMvpWJpHqDzv3g2xGCQ7LU53J9sNrV9qFQW2qPXU",
  "key33": "2XUuyyDaFh3ZEv3PAamHw6syZ18sV3cCNuUbF1Zcuv7RzDiNVPqqLH1RaT9d3hqAvnMBqU471woSjKHmR3vecHdT",
  "key34": "95KEKcF9ozzEM73L7TRwi9hGDXsJwxYugXfo9mZdf853ioxReNE2oTp2ns2d8eVJsiXaguUVz3SYszSLk6MUkp9",
  "key35": "4B8J51qZDsn9Dp8FKzJvTvZ48bvEYNFVmZALqbEz6yThrJs4Ljf8qwfiNJVSDfpQLG43DJ1xHp8LqDQ2vT9DdQFk",
  "key36": "4zsgvctXuPa53SYFZPJXZPpXvWtitNx5RtfobQkZuDgHwngZ9FKY2dZ5qovCCugwCRtaSWUbNssMAmknz9Q3n4DW",
  "key37": "WQoRoFfHoAZ495hDM58XirFDFziJ4gL6EhLr7JuoHWVXBxCGoT2xB1JRXXoRaTEt1PBKA9Z173XCd1ayLrVWL1c",
  "key38": "3PK8YbgVBnE78xm1uvbitE6qM3U7fuihLED6FqbPyK99q9tFvN6ksGJzSJ4HVxViCfMQp2ub9C2cvyj1RTT2Ubnq",
  "key39": "3ZQVuSB2uaY4u9ZoEZEFyHv6EZ9Sy4D8DS98LKanG8tSETPNym3pfm9Gr4ac7pzVx1VyW8ezhMQZBbZyKfqANGGC"
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
