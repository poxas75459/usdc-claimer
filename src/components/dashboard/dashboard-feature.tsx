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
    "5bHqZDN9j4atxHzLCLPYkhJKKsA8iiioGg76tp81WizaHEzoXh4Sb6Sj4HY5Q9KcnU3EVuxgfZU7JGyxuqrRAEWu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QY9nC26xsVmjkwcc3urnzGg7xu4vLTzgfbBGdq4DWvE4k9wx8LbnDxJ8zzpvmZLivFpBa77YTaWwXqZymnx7e3K",
  "key1": "3aySVx31X6sD7MNcb5PNusV824dGQk4BZtJ6dC6G5Lds2NkE5ySrb5TaiRjjDFpKRf42xUEMJAPUB4Qrqjecy7YH",
  "key2": "62ZdCQP4LwXEn5mGSzfKBuX3LHabURx7wK1T7s2XwiBJmChWCHmZ9xSDmHYNJwy2prHSdZFnDUZWetnnFJCGP97i",
  "key3": "3PFaQ15ZQgMwukjyQKyRTaif5QvaMu6gJnixQDHJTGZWiCTX4WU3QpRdBpbhdryp9GJPptMu3GPPz3ip6zZxyWwn",
  "key4": "4d6AktjJTJdvARdt8jb515bRTDzvKWicbsfa1gViRmkUuhijUNHr48WHWEFpLDPD59fFNLNjGAcQVjMbzqkbFMdg",
  "key5": "3QSpLfggwH6cyBmN42gef5NHzYq4cxYN3adpwXHhPp6zwiYkBUDn1S5N92ZHGrB83VUyupUMdpgbvmu5QhfYKpX6",
  "key6": "62r6aaG53kKBf532kWx5R9TV94vrQYwmYdfK2eiBn7wPcqY1KRpx7uzvDSUgRaMsWiwgoDiPCJLNEQL1AdkUWTLL",
  "key7": "3gbRuJMih9u1Ba2CJ5MPdWTLWRQD5KsHABSQ75dEDBgtxbex1gnUrHxkqoymL4aWFbj4nVNSSt8GV8ji6g7NrpSR",
  "key8": "3crXa5cYPEcSBcqhwfB8R4TACV1oezH4fq5Yeh3tUzgjuT33VHJD1DvKrf2JdvLS348BCNm1XmmUyQwn2pXwLJ6F",
  "key9": "cn3Jc6qJ8sHLKwiXMiNnSf5rpP47PcvSCum9yj4PsHr75oES8Dgs5YPPaNo1SQDDH7Z4xuC4dYSSJd5xd49Rfbe",
  "key10": "3t9nvZTwAG3jYVEtvrghSJ3VJP9za2qgVF61xDpAsx6c1r7jsEcR2YDhbFjUfejSYuQybCWLbAgCTwDCvqTCqgt5",
  "key11": "3TUx3vocRrejPqZGUNbpiR1db2yZo2mhRHv8BZ6uUZBwNiWhppSAMmLP7odKaD67NbNoSoRQnqsCn25cYBk6vYP8",
  "key12": "tah5XzP9H2GrNPHgoXjWJt4CuCtXQF4bP7z7MU1awcksmwkEuv1QoSh8hZDwaScKyo2NGhURdhs8wGk24BdeLZj",
  "key13": "5QfEhs2NcYVBDurNhM8MufLEWNVN1mjNQ4zyJrDBzF1rvrCh3vsbRT8eptN67ADfufjXmME4ZBYy5mr5kae2W2iT",
  "key14": "HxDduMShUBZnF7FzmoZUeih2dW8A8LXsu5zGJzyoc3GN84i9PmVxdFH29SMdMun47bVFMoM7EC92D8yWSw8qB31",
  "key15": "keQDoMVbggUqMTgiaoY647HdtseWH9NM8bJWzJRkj8rhttcwiCSNZPJcEy25PhgD7iPDKdscywkvGRX8mTUM4d6",
  "key16": "2SrScjfUsULuWkLtC7HtZ47TZN7mdXAU6TF7B4gt7bzJErNjkqqPeJ23TsQMmrVFQaQbgPkTeznXdo5BygVerTbY",
  "key17": "7K7iLhdmeWzcKpQmbZkd2WeBgcBguHeYY6C2h3xiifZ3HVWtMauxLHJ3B98xSx2cMdHn8NHiDUzwTbcMrKrGLHv",
  "key18": "5m9VEMskw1sFQ1BXX2rxwtCMArbnWWp8xxEKnDn4SofdiJwXjHUFdzMoUR5jYySt5ZPuHKGDbCTiw7ETXYkp7XfM",
  "key19": "3c5UVYzC4EX6jZux9Fphf1eNgySFoH1pxpNUhMLMJXhszSjtDsRUsT2VANYB2U7F23PRKNenAQZ6bKqoKvsAx5AZ",
  "key20": "3Lpaje4yQZhMuiba68NbAypTR4JQoFcW2NJNw9xNwucQ1KwE2kmjLxz9zwaVFKes8aGaBdKggUjz8zKxiBTUdqUS",
  "key21": "2QkHDmA47VjLMM9PaKmrH4RHCi16TWAvqDmuK6ip7bVjTaZaihgWCZRKHV3MuZQxY5Nma4aZicrScZwdy4UeZ3yU",
  "key22": "4Aj6uAFZ9si7KyLngh1wnSu3b7KwWH7wwp7efdfZrSSwQLKJkZAK9QEDhwfsryxHmxipstJqyLY4Hs2zLHLEaRGN",
  "key23": "4pjoLssYPY2DAoEfi96bZ1CxfRsQVf3w3fh6SWBSEx8MKG58z71Ygjy7roDo2VX7EgixTJ62XQEZ6Fdb1Gc7unxX",
  "key24": "iVmGZ74b5CH1UuZ5Lat6keP4Fta2NfUxLVcArd4BpBG4o7gaozMmzfFxeXBDEEwd1Pc2vtYzAntWMkUkKE1871G",
  "key25": "9B2Tq2428Mni59cp64dQLSWwruQNy5aCQmuHzeZgUpvuJu8mvKk7rnAkCjTuRXAgWwuWcKuToBafAKGzq652LbV",
  "key26": "3eYAdgN1NrDLPBpFAkkFraEVQ8AJ5apKeStBf5h24A8FEsRFKM2Eneyo857f7fLgv1Rtip3UCgeXEXe2bDpCEgtw",
  "key27": "2HzrzAJS2k1XHd9Qp66SuAEYwtvRaQqUcuyuJiVX2PZvz4XCyvBWcUcP8KEabNn1b9EDKZJoeF89RVBE5JgNzoKh",
  "key28": "2RMDYPJDAsBnjcc9Fx6Zx4hauXSsGnxK95M2ARQ4kdHGbGd6Ap2rh5FJomCaXPrqcmCSV8s9VbduhLnvrrxD8g6d",
  "key29": "w3iqv7mpda4AKWqxW3GCqcQJLnTcRFiv1ENBDDthWA3XV7DStydqh7WfUZ4432xWtq6vx1ctw4qiswBT7NUqN3m",
  "key30": "3vumCFwShDAtGzsbvAT6KzBkDNDTSUdZZBwgsXxDWjkTzt8shVYbW8UbX4T9yyWBRvMPqWPZQaa2eUyRAp91uGk2",
  "key31": "3zrrwwqMVPFkEq7X1hWBoBgHkdAAE51P6nxeCKT7Pwp3FFm6vCQaodGkKBESTTxpvL9p8HopNYKDo7rx66SqdNmX",
  "key32": "5aY9PhNfVVYMhEvCBUbZvV4RXcAkptVq3Fwmds7m4yLap6owsh3GEQgDTNUyFmYSXQjvbAKgZzoRX9F12ybhs6uZ",
  "key33": "4hgSvvBneNWA5gJ4mFdHBMUjz9VGHPQLybKv8uzyuMw19Sso6ALdiHV67Kp8oU8HvELmzo8cx1G81cjQd65yVRVh",
  "key34": "3KnxXuVc2eQzKdZUtE4MqB9FouRvogaRNDJT39oWDdzG76otuRehT23a2GwxrY9aYrEG2wKMv4KjVyLe9cRFaMVP",
  "key35": "2Nszy3McXZmDp2FfVgE4xq5HyFvMBMtQeqoSrXEg93EnR1PEBkGT88dW11K4DECBHec4HJ1A9ee3QvaBUBsnQfvV",
  "key36": "55x7kvzMzyZfbygZpNcAuEte7s2B5RKJe7N6qsBzGjuYbUts7UpxP7om8TKbKkgXx5ihZupv1GXze34ay7SuCWiN",
  "key37": "54pSkotLni9vJiNSAqsBhBNYfwjVRBcQYBHk6sRVPBgqyUfyn7eDWz84PMRwhvQsvtdEXuCDjbrowVGfAxS52wZd",
  "key38": "5roJXAGXofmE2xTZK6yG9tBeUBfbf3cryvnAdmReusqiHx6DKeDG5AipLhoEDFUfffaqnBtDUZ2cxgocqfypfj9u",
  "key39": "2y9NYaWbDaC7kWevzBXHys7G1VrKLfjdYzM5zCrrUCvPEuwu3mhT11RLoizoWA4obaSyoFZbipzJAqodrTKL4D8L",
  "key40": "3toWLQMDRmvtybbPcSv1DskjFKjwhouq3UkpketVyUZ4m9nwEycHhXougDVGHHQ6c31hyK3t78ivbR2ewCH3hjea",
  "key41": "mFKuvNC7cyfTmB1xfcSGv7vDZmzWaMyBdSnEKvh2MiQJn1xBdGGcTAFrk7BnWaiQNuwPxMuAh5jCSb1V6jyoQTt",
  "key42": "2FoJSP4mS2DTGVZ2HPCWLCfJXokFNunyuoysnBLyGBtE4GELCoWHBtmcd3E9Hvr9vyJyMPZDeGz7oCFpkpAEGQy1",
  "key43": "51BCwc6buKbJjyetHyp6uCy171h44sDpX4kuuedc4WhsyhPA5TePKCbhKA41mdXpQnfVKkHRJrYNGqhhcpgP5bXx",
  "key44": "3uAmmYvtdDd9w14QFzr5nDrf5e5BNSjTdfu7zkXqTcCi8QdcDw751QAt3WBTsJ7T29ojdeD69R48pBdFJJyvSG54"
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
