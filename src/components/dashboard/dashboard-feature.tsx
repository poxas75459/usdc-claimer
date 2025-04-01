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
    "rzmzQYB9PSEynsKmsSZHjzty1ELmCTEPoYvMj5SET9XkYNyfAxyfHtTZqwHfD9PbxLKR9i5QpX7XBnFRgFbiHHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S8jJoCHpftEPWm57tEipo1dB4A1imw6e5uFoGjroYAwifUNwaG2RquarrHFjKjdpCoXpkcruMWy3RJciq9qcj7G",
  "key1": "5p4PmjK9RVoNqFGhYA7JgGJG9RP6FntiqxaGDeYc9BN4paP6WMqrE4o87JMFwGujm2uC9nik1FsntaZ3Zf1JFogC",
  "key2": "4shSGJGGPriSCwAQ96b9NTMMT7MRbEiFKYK77r5FH4DeRm9RUjoQQyTDTMDj8tTmiJemYKcAJiHPbpR8jy8Ra1pf",
  "key3": "62JZ16n8XV2gGEiUhmcXCbE2GLG6pKc3hR5m5UpAzhxfhDacmQ8j67FeqZrZiKV1pwHoRDvjdshncaLNDZoQT2nS",
  "key4": "2GKiSzk9X1GwRzzThDxUBiZAKDAFQC17uFBWS2x4sjy2hzpjVPBnAxEZghnEWn35g1A5QZCwrHoHbADgfTiDFgfp",
  "key5": "3sRgm72q8TVno8MP5g4412bmyWi6XqVFqs2HLBdp2Tx1S67iU95R1TyRBmNTCH8UBHjv4CV8DbAJBsdEsx9XRYtg",
  "key6": "2ksd68mHf3iGYMxxVuTJWi9GbeuJwpnWNFbPX54N4QRwBvJ9vD7DmqjLNQ4heVwv7KY64vPQsvEZQYCm7yiHHGsP",
  "key7": "4RfvwC8Jwuk3Fmi2jeZsByJaK3UABprPC6muZNgPSvHsesnKyqNefg6sfm9gut84vc6BvLHyhcamUtMU2Tt7yXSX",
  "key8": "X1XxDWHcibucHf3ZHvQk9P2mAq4FTdZNhM42brC6FJaj1NQDJeMNx6ZC3qP7XJw7fm5k9Wmqb7cJ1NDvPiVEHJg",
  "key9": "5bgsRDGapaCjDvcXQuukofd6C9TRaQePsotwP71EPk1sXaUDs7VB4F9FBFGwanCwcWFR5cJpEvmApxR5yH6bP9M3",
  "key10": "4CTvC9g1Lp6Gc7Q4rBGbSZa1t8DxCfdnCketBRQLPQtaDV945sWjUoGoy7gJ8WX8JmR583VYRs8EvLoKEKFDFBQ3",
  "key11": "3F6Rma7pKEfqf5am18bXky6VJA94cbdV9KZ4y71CmJ4rvf1DnbBe7MzyvbqLjAzjhb9srGPpYrN9cPD22evvdgyU",
  "key12": "4dzzGd4kLPoCgPX5gKn1kq4YpfSR1kGRuCkAA98yQ8EzmcR3WMQiycdTQ2k8pzz2fP5Q5m7fu2iyEvvGWwuLiGx3",
  "key13": "478pvEDrWLjmFi1dN1YaBF2iq48K8azGHZCMRe1oKp15USdcqup93MBDUQNngCt2DuXUZxmcg76Udwe4BnEXip2h",
  "key14": "FvFnakcbXPTZ3RcsAU7u9i9Nuo8Y4neZGz9esSTe8asXUdet4ZvAuHrBj296GmFWtMpJaoKz3diuss1AYEF3ofP",
  "key15": "5tHEsRV52vZmzAhAMmaTpEYRVUKwPsXXy2EVnN3eLRBXHRYx5543bccUpm1v5zmbZoVv8Kkw1Pf2DWYQKhEaVY12",
  "key16": "WqncnoEmxhpzMZujRGCQ4NxcvkNMoQRQEt8F3ATeQm2shr7EMEw4VtS8PURg6Ls4oM1TYjLuxZo7qYjPSEA32y6",
  "key17": "5uKoEcpmfmJH4NPYmr1pttRxtZYVGhHuaFn6EReGKDHoF28cHjoKamm8ZRGRa9fMkToGpxFiRWh7J27hzHvXdXnv",
  "key18": "4cQNsVaSrNPEeksBd2ZpU5Gg2DQgpGLAc8pcEGHYjtL59JTgVk598w8rSEt5ahEPgNHxvwFhCpLqMaXc7weBKSXB",
  "key19": "2krtcaBnnowYGsTXPeqY8EKdwy548Rymya1KvsQR21Wa3eGE5Gk1MYqqPR7b8yS2jCwut4W1JoTNbE3Zf5JJ3kfr",
  "key20": "2HL28frv3dhSkaLBZWLP1aFZbgK8bqCamyRVhq9aiyn3T9XwAoWDXeG8Hc1xhCfgtbykktnwJVzKqRr2cvuv8Ror",
  "key21": "4s1SkT5e5X2BbDb4WUk8QqDQC4gA8FioGLwD1QfghWkX2SBSRKjH2Lct9WX5VbtieUSFDgRTPZxMeNQcimphnCjC",
  "key22": "2yoN48uz4ekPLurkPbEwCRU1p4zNqPPMYpysnDzkejBwjhqGsFByZNGSN9wDwbyYicKUWPwNRM7bHukGeNGUxFCb",
  "key23": "thtvmL29rfnrWDCAhW4uJaEuvij8XqFNTdoRjYmkB24YunXCAaTuiRe7sb8Qz1fAiLobkFwHmVQVGESCHpJwrbj",
  "key24": "4ZvD9p4kpL5EiSFctBpPsfcVpb1A3bmouTfvXTJPVuvYTNtpqvEst4LoBnSzLMadgSb3huXUBVKvHWnPqXkSVexx",
  "key25": "5VaycVs3C24ptQGparkzfbi5TNdNcoxx9SqJzGKgWsSxDVNBCPzu5ZGKbaQZoGzi5Vwn5RmNTRjF9tWmY9i5rHSC",
  "key26": "5RVmf4JLWHHsBKZg6noHxyDfD7kaVTSzzznPGNaJCAVpoptUucLnWToqzBcfYcMeXNkgSrU1cSL7FJTCjQYNoBKa",
  "key27": "frpS9vp7Ph2z4nuhJRi21kEnt9cmL164aJfA94HatbGX9EoZYiUaUD6h97XwYPt7kzUPrjtgmtjsSNfdrPqotVx",
  "key28": "26tT4RcZ2mWFH7rL6oYSg7FvQvTZqCvU5RQXZjZbH5tum1gLEbXR7wYep9L5tmmryYbxfHBZKZQXi3UvQWjMvbJr",
  "key29": "ZhhpcWBUPvW3PEjyCLPxdEibZyDD5eJ4ZkH9E6zZXo1f2JDd8FhbUwuxUf74StBRUJ48rwv6wZufJQZzPj6NA1D",
  "key30": "23RVuxnVGroroAvkgh9Mu2ScQgNpgcEnjSUA9s4WJTNH13vy7kCAoppkmbYR76cJgh9qui39rFjXZ6XhPEwuxCmS"
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
