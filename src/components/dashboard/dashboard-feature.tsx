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
    "2jJVoBTKwK5ogfdGdkYSbeBBixDtEBtGcgfxCcLUWSF8wumGGL91nojQjbJdkhRi6BuKGJ4FienbmVnARQFXjzwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W4MYgcw8bYdm3k77mDLEG7wyqgtPBLDyj1QZnN4CQJrDBuWuWK8kgFzxaeUWfZdRPpT7mZuBHaFSWMJQ73i8JJ6",
  "key1": "5TEYwuiREqH2GJLAxebq8Lg5yaMrnJyhQ5CdjjSsEhir9CQmvvAWcuuEHfDjNKGU7fDVo5puB3MJb4XvxEcR9ka8",
  "key2": "33zzTCYzM3Rmf3JRjtwHp5UFugVjpNBMJmqdctt87Giba6fXWndKMimLXJYddgre7Ece7GsRu9c4ejLKLVxU2TYj",
  "key3": "535PmPKwGQLdT6A5KXdFnVa8CTspGsPHBRUUmJyLjHHigTqHckSRumrvf7uj97MoKGkF2kDSG1Hh11TiKVyQ4ZXz",
  "key4": "46czBmvbw56j832wmtxcmrk8JNdzmcRxXD77yKH6mDqXoRL6FkREV2gh8xP8M3HLz5HAdNfKoEKnXAGvMinBpsXD",
  "key5": "2d6Aj7XEen2mmUQYEsebndvUG9xDna7oG4tqFwakXekqSqc5dAuvVCLFG88PvN3ocyr2gpX4XhcFDCb6bVrHxH9M",
  "key6": "3hoPbNWkwwk2u6ZRvj5bzjVrXTnYVg5XJuuUBNVA4ANNzBpfJjDzDaZdLwGUzLPkrFb1dJ67V6Lv9nYMjrhKM9ud",
  "key7": "3xuHstcuW4urunCC1BJ5YcpDFSLhAbHmJnzFhzBYDmFvWPZ19uqaTBPpEjZPGrZieEN7A3AH4qiXA5XobhH7BiCb",
  "key8": "Div1V3CHihpAeSBTesEZsxchMRk2C6AELQteRnbxA5MJwXZ8XUfyqHtzpEkX38UqFnJccXqqzYgjSUBiUZNoncA",
  "key9": "2JUzWWGUypBfCvb85icfK6ANCumjwARNbRHLuBBjy8chABbohJa4jZaGJnVneiJna5UxSgJ7LJ9uKgvJdvmSpMn1",
  "key10": "iyHbuLhRtnMzsYTaRE7WfGUN3ytnEUbgeHGRapAyqwYcBTAK3HCbxBiaX7Bs11tC96UHEwEWywugSjFFj1er6et",
  "key11": "4NF6HbPNzn7eiJUMsdSMaM9SG7YALM6beJFzjV9HhZ6AfsAthcCuCpx2EFLAqLpnhT9E9FqedP3RcoiRYJRCfAWx",
  "key12": "4fqr8FCupeu9eNRx9eUZQva9PZU4eg1RSAKEKKgRcPiRoXF2VZyVdARD7R3gWws29LnHWXggjmqYgRcEwhNi9ot2",
  "key13": "5rf1ohZs6czts1Dm98WBC9oQgXS5w2sFtvb5ojjJ2hW2FwrMXSAyCN3wJEUtT9hLzRnq8CoJphbxBmg4PstBfjxg",
  "key14": "5Jz3G9avWJFpTTHDLUWEaba7BQgzi7uGoRY853xNiwBbDF8aKjN96cEKoYUw9gZwpXdGKt7EMCfCfUDgm7nv1wFD",
  "key15": "eUxLLouJwUjX21T7QvQYBGGBjsBUKJbBUNMwhKUoGqHkLydyHsCQGvHNR2JYx5B1j59TEUcDYRAhe6pj9RM6n9c",
  "key16": "4xr2tM7aqjCpGH7ChNfGcV64QB9BH8KZ33MDQr9VeQotRLU5bKpyXrX8ZY3VV9175ueD9mwQH4TqUMM2qMBA74Ns",
  "key17": "4hjwfuiSkUFDfNLBydLWN1YFVC9xTM1RaaDDFjLWnMAKfH8EFAgAzgeLxQmY7HuiQ1fi3Q4THuCUvr8zhrpSHZ7A",
  "key18": "32rXAbsAvGxbURVyTgk4saRS5Z2MVUAUyjk9T9g8sBK4shMLv9KcpvFdjMNNTpuBjNqF7v6tLDhKnjUgtxhLonXx",
  "key19": "32jDTso2TTNEhoom9DTKwCoKhKSVc2YPw1RDmG3FK9SBYD4bDpNQD3113pJXUE1jKdfySy87uSmvrhmbusiTHyHS",
  "key20": "59ZwSjNhzVG9NuS1ms6FYtcXVH8xba1gyfGqm7okZ6xwzcqd6pJ8FhSUR4KzNSPwSWxpELBSvkvK6V3qpTkxyK4c",
  "key21": "bRWQ4r8APhvRPu4DoPQEzQxp5FPN4JDf6Hfd5potadLYXnwiHAvnSo4iAQBk8FcFxseyyLqXbtzm2gCaJtgvrya",
  "key22": "2bLpRdWFCd3Xhw6YAt3DTSPEhWWjuZMUdE1aovHc7YHT22gPjzfKk9VAvn3MWSHM2j4eg3XdAEchFppvPDYWRzjX",
  "key23": "4G3E9SnMAs2N2ohkA3uGdT7gBs4daEzvWBgR7FZYBFTquYKTYvWXBMs8M8JGba9WLt1JZJkaHMqLQ54r4bybPtUs",
  "key24": "2dCnAn7TjM3NLsEtwWNXHEQE92jGtfMPhH918xvfNzAgUMTaeJ8FGjkPNJ2PWC7W84HtVp9J3twoVTJGDWMYZVs6",
  "key25": "41TJcidE7Fy29m3AzgXcxgfzqrhV77eP624K1X1hATf782krigS2Ys8X6MB92EjCejEmGc7ojNgD9MMeGkB67yax",
  "key26": "PwbW2eb1H6wJ5jHsR3wgLNFyyyyUM8tAYHMbRzUTWgqber9Bt3imzRgqfVZiajVP785X7mnUcYq5g6Vmkpd4xJ9",
  "key27": "4kv7HDHJHXuzy3GnbmDbhys5rfvWZekwcbLac5QM2nBNbMBQ3bzGtAR9hYb1tgAcDy5EPxsqqXQi4Wh1ieiuqVVS",
  "key28": "6pRwRNMvbq6QkCEUwuLUGForDkCuqoaCxBy66xG55RVpB8Xii5vWoGnzMwwcpjhHj4rSCvEnjtjDSXtHm2MAgok",
  "key29": "2NtpEKRiDPNqmBEm8eSKWktXFhpmL1tycmhMq1PEmEouGfL1gTSjLLJ6q3Mi1QkzyKPUey75tT7UtqrjdjoArsRL",
  "key30": "iDkE8uEh92fcunE9viWGvAv8jCtAhJ2saQj4Kkpgorc3X3pdx1baeCtQjneSKTCCriVMRT1DEuhDbE4KrEUWMJh",
  "key31": "KijEKtbgD8TEJPGz8p1w2MGArWZGw2eQYR8sCqvNJXPUF9YzbXfx4KyPMfyqQWW9QLudkx2cE83WxuYBJpLVAoe",
  "key32": "3u2jccccNGMhQkygGRgc1uv5sMzzKncKE1uqBvpWKUadRcD9GCmuWDntjtEVW8g6unEwj6PJeZxKBfxNrBQ2nez5",
  "key33": "DcKBJngLMSFd4T1kkVU7UD8NmXZCokxtrdWqAPLNfQCeyUADCoNzRdFATaX27dXeTh9ePzZyrB2gygDWPeryb75",
  "key34": "31EtuPiFGqV1FpwZYd5wge2ScRFXbAM5imitRaWaRU5mnbGXwrk5vvof1MsVAxEZJ5dbCCu88rwXz1UGTA2bFvcb",
  "key35": "3om5cCHhh4MdzQY9TQNAWskUx7FCXYDmwXgrXL1nhbpb5k6aRD6MXDgJjfSbiNaC6hXUMssqyGZKGJZffr8MmdC6",
  "key36": "2bYBYmoCTcvFgtRw5QKK5jWkQettmUaUV2RNy66nfnxBYbLavpHbD4KXGPp4NuHfJCXWGhQ7LmSPg2jE4ELJ34JZ",
  "key37": "3tNGWD8a2CvxpGARrvfsyPpTGGaaSkUwGoRhRGxe84KfCpunpZTyEV1oVjGPLmiij2vcVhhX8BzyhWzH5irW89TF",
  "key38": "5fcFjRMB3hCgtMKejK5VbppoS2pSS1qjLSQs9rpFnQtbYaGELvNvikKsWY6KPM1QBQ5NU4Xekn2GLvPSYkqhueCP",
  "key39": "ksE7KRUMJVCKcgUhJPfTwks5jMZzxPW3AZSPPmuBabMm7waaw2XcWF4fVwymkLg71hDjbDQ8MwGzDp1LsKcm1Ag",
  "key40": "5FAPU6ywtnvSvmFJ9EVAYUKwk8avRysrwFV7ay4Hu19b9T8N6phVB6BfNpCgo3qMGoND2tCNiMkfZfBrWJSH4cQF",
  "key41": "2ZwG8bWfAvZKsMdqipSmWrphKw31sEXnC9D4NtC9P3xdPAbvJAuJjqKRc2uYwUHSwHiU45AHSrDPkCKmmhh1Qizz",
  "key42": "2Qn4ZTW4rrUUFmH2oV84u4CGKAMcNU2ZMdpduPeQig9QrQfUnLy1tGGkjbYb6JtcfAueU37MEvpQmqv1CCDssP51",
  "key43": "24mmrufNGsZxVjecAsBktCs5cPcuXq5WLesfPUoXE4AcEuodzRfGbSe7Gq6w1PdFByzL59VpVe9nWqwFhJtW4fcx",
  "key44": "4TQuWDRaSgH4VAX6a9cxm6s512NwmqRhUZizYHGYZevkAhxLuRNM6RKVZDkmiT8Aai8ZcKaLuF2eF57KrfGaNcF2",
  "key45": "3ycUgfSkMfCPX6koVa2zE88kyQtwgv63Yib8sWkf8VCLx5hzmkHvVg26vTzQbVCVGnHtfSNJ5FeaLdNooQvFtM8Z",
  "key46": "mMA8a1VigrUiZg2MRSD6hgjZ7khFrZ8vuDrq1dfDV2fasTHmqoKsHq6CqUahpEsukZ3FY7iw4DbBGb3bNFW9AZB",
  "key47": "5ojzys8SGopCf3zdKNXrZtdigkZgJuCiHd379ok4wmKrPQSgeNEY2UGhWb73dHGzQBZqkDBPcjziL2MkHbraS1zW"
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
