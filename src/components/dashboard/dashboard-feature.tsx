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
    "2kHK5F4w5ZtWRa2McQWN8DEG4j5EuxEwb7ftVhP1UdMXQRoPbQgcm5VnFtsdijT1fQKxC4JUZTiRbmk3nJBYDDWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1WXKYzGF3Q2eC5GpYgRNFasfzxv2SLrxHRjiUCpHYQQAPVTBXBdmocyGLSDdjNmqXA6jwCsXKAusCD81dAZTHAj",
  "key1": "4SCAgAWKMiHVAxzinaSRB3wM1qpdUfdmVyQdrjDLqnSQg6minG6WNGsvN9TMeN9MNRBCUV694CyeKXgt4xWmRgLU",
  "key2": "3poqjMeWHp9PeR7ieQG6NBbEppeov8n5yWNGx7dsgARMjqS18WJ9byqYVsSN2S1rYiZSP7egyWrGJMPY13zu5zC1",
  "key3": "3y2Y54eRoz9cy4hXhSzPimqzqnrqfNKMCV5h2k4snqMAChvLDP1zwmqP2tbPJM8iV3zGNcHytAAgHAVmSmfFM37Z",
  "key4": "2oEwHwbdHSoSmMLe4ZaryEfQ4St3vD7735bwbN7qzdJxr9WiyRV2SBg7dAKeBrwS4foK7aZ4yFEFBgvKjLuAJAG1",
  "key5": "5s6YfLMzXUSRCLNMuR6vbhvncKv8CGCDitHJJ24TjEWf2Dmhdkjr8v9Ved7niwiGmwR2GeUUZeYUW5vrcaHwnSSx",
  "key6": "48pfK4S3fP7ADGCMW9sSNyMGaeySB9jMBatgGs9D9YSv1jGbjaWznE6hwNb7j9NstdZQ4b5DUx1acrE72FjSbmcE",
  "key7": "4iXt2dAKQS59xh3Hp23SPye15D4uGxDDmzp1G9c152bGiDAVBTWdFexTHJZQQsCR5E4MHKjnWcV5PoPpDYELTara",
  "key8": "5FzSoZrSkcS3MsXPUcWf5sYxEwhsmvBoEhhJF9zs2uAhC8vZRSC9v9jab4zvKtWJPabBwnAok4VhUEsswrfdEdGv",
  "key9": "3fHf4LytWL2orUmVYmGDRmnnBJpLb4Sh97JdnS92aS5VUbFiAhBSQXUuamjfi1p49L2w1meW9RHnTegKcLJPiuNh",
  "key10": "bJt3LgkuLHX6GihETXokZvnz58HiedYJ3ZSiLRzeky7FQvPvF54dRRQydHWPL1Byu4SXgfuU7bBPoNXZ28bnXpX",
  "key11": "5ez9kFrj19QjPbZ7vySLFQ9K57XS7dUazmHT6tG1tJLytmRJABX7LJvrrirQYXhvn6zbTGjpE7Yq49MjKGNhX4Uw",
  "key12": "3BWmBVzSjxSvgVqcqRKztv3VLfwgP9zeVXHs7EDyNgbwrk2gqccU21uUe3DunE6kEiYsYtSmquTLyTGb4La9M9Z1",
  "key13": "4BarsRFCDU4AaFSb7rPyCQwdWSswux5TZ3bjjSRU9u4xXrLFpnwtU4JcQDSpeQ7kXJt7iwqmfg4qQkFBMkPMMkgt",
  "key14": "53q6TfDi2wk752JxUPZ91RRE33z6VsSiY7pETN9caKVG29WLQAvJSZA6YH7znwm7m8DcEKyx8jHQ55UghRagoac2",
  "key15": "5XzMBKFufSjPfmPCt8RTV2NhAmkecHmaLDZRGn1C3ZqreW4EwQTSYoTfENUgdk2VbXfhFCspsCVYsCSLJx7iPxJe",
  "key16": "36167ZjLtBNWFGuHhFKn1SjLNcrCRNq67m7Ue4oyExpVzoGBZ4oB5X2CmaS7LDKkNkpRbK2rKe6RkuHHkoA5UGLm",
  "key17": "dRyLeUdDGg5N222UkFP8pbZj5L4e1f7UECK8gNLaj96XeTx63xKC7ocJsbo5errYySAAETx1Gv5EbTM5ek2jrEC",
  "key18": "3kdpcNUntyJXFGNiuxtBssSKq3sZUkpQ5Ru2iHygreKNCHHgqDBWdhZNWZcE2xVDN4DbeYrEtcvs624vyYX6hkXe",
  "key19": "83c4gmpQjNo5VjS9aiYuoPJFmJN7GxDKHEQwi7FnnQphQLUvUSCv4MVZw7bpqFhTdBESk15s4VYtkTZxY7yZXBj",
  "key20": "2Sd597DcqjsHWSHDhxE1uU24a5s6DueFbkk4Yn6KsmPW22t4DBAyyQBSdZHFo7TQN4mpYZoTqwA5MksUyAwPowjk",
  "key21": "5vRRYFkEqXNsqeMi76mGc7NzDZB22ANKUGrJsN4r94EyfVNgM4PMUTgPQ4YbcsCxcQheYW78CcqeFcvnvwhbKWFZ",
  "key22": "32cNtfRTEiDyb4oeNS4jN8bQvGqnZZe8sDge1ZZmRBRsHfChCUCsJnwhTDyK72s4DhXBq1fY4Uia4ZF2DdVG65T5",
  "key23": "5mB2bzwx1jP8kcAwcDnUbmoxUWQyYTEdmQSwSMviSeWSwMk2FTZ9s6roh25NPyRfbjTSQ1ddSTZnJo9YVW4Rpj9X",
  "key24": "t8VPRuZfYJgg3DSBGMGmd5bpSUAJyTx6cM2Nfv8sqXi1AtTHmrVtBX8NGMQNmnehCxE5xCv7bHXMbkp2SSJQSNZ",
  "key25": "3d2QNyhR4eZM3LHHVXnpe5ZXQkDbmA3c7P1Zz7Gh4ybXLtxYcmYpNPhS1dzEwiaPjkhwZyUXmFtYCWVTcYvGNRA9",
  "key26": "3RMuJpXjcVwqsWUGpx21823sCaxfxdEZHjiRzGhq7zvFN8F6ErGLwHgHVwtXvDBQLjvMwfn8cQEfUZakSKYq11m5",
  "key27": "3hQsxJFp6n7JKSskUpL7CBNKCSw6APPT9Q3X3DUMSKc7reugByRCy6RE4xTWPVfpgeXtG9aXiG5ecQfmxF2ewhKr",
  "key28": "5GJFd6GbRotNhnEqBRScCfdaT1BmJZZEiy1eoYpgkhuM7Ro4ZaFtLDTUks112MkVAaMkLXV6RMNk4Cep8EJnARVo",
  "key29": "43GcaYnocMcEz13RWSTVcuwD7Lf6WQoFHPPnP2PUJRxFMbfTAB152JpXDeEBjZFFGX3nQqct3aV8cwh6QaHM164V",
  "key30": "2KcAtNVa91M5qt8jFPm7C6Qcy1o6ufunRGuE7zB87R2xJiCHtoQRrYkmWKivDKTcZA9EzqvvDwQv3qgZYRZTtKTG",
  "key31": "4weZxHzUkUsXprCknRKG15BGJptinEttkXdXJCZ9oyJDtSnkaVHEYPkiPTaKabXvWMYTd9BqSnYeyyiiSab8Gg8v",
  "key32": "2bsJ357tZ4o8dKSFVf1chyeZbwtPpkesAAZdLp6QXp4ZfP3a6yajLE7kCwbbSC3uYtudGFyur8kZ8o6W6oM1j664",
  "key33": "q2QbFiMSLV1GMfTsUAyJDhktTiCKwVbBMEChF4sFrvdLF3MMwmWwNSQknpLiaascM49zvt9jsXni7Uge62kdmAJ",
  "key34": "3QrQT2aJwbmzae4QKkh7o5J3fX2pazRRRcmVBj3dQ86RGDLYZnxzYnp3NGRiYKoGmD1aUFMR3zwTfxtBpMyic7Ei",
  "key35": "5o4EmtwkA7Vxzpr1B1nF94kiisuvycyQZBGmVCEEM6TCzSGzexgfiHBCbqkfwC4nAgGa2J4XAeTv9Vrh5NoWSrp5",
  "key36": "2KH8mUPAv3dkqNs4PxWSfcEDojWKSWHaUvNvpxwHWmC44CojWxDFJ9T9pf1S5kRDLFdW69hVFdD1p9QRXG3DnRAH",
  "key37": "573mg5uudAcSytLXCPXRnsotNxLtecyQf5SQULHExfsaNVG3ZsG7EUZ76Y7HkfFGoNhqUTBZUn5e8bX7aK39k3wd",
  "key38": "2cJJzkABPckhzkt4CxG4GEEJv6EGJeeBaY5yymg1aKZCX58QbueKTZhe2Eoay65LKvKM8RDPaAaAZqswr4Hy5bsv",
  "key39": "4ojU2HR8qYu8E5dFHyuB5HA9qyikP7wza15BoNYA1gumsgkKgTXvUb7tEDFKwZNGQDfQnJcYKUMVeKp77vFcbZ4f"
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
