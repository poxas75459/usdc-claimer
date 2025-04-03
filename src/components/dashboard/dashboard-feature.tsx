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
    "4YCNc1QUpNYokpMPursDqcjWc1zJspvQAQzZPXzZk8eBaxRgToS8H5shP4RzCJ8fepX2HMtBKtYCzdiyyyCWrGGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4YPUYdBxrgCNbAtwUNoaA5FuHd8yercNX2JmUvF7w7Jv8t578QWeF9tmemcCnhpmvzJeRTmxUPv96BWjQHHnpf",
  "key1": "boMGUgqddERJP1NspW2artxbEGLAgQnqBvTVHL4ffFkM9wcH44okes9xfNe4M9dg99wZ1sDkMcckTne9YafSpqT",
  "key2": "22JWMV2pE3z8vhd3uctZGUTeC6AM31tr7tPcRvCm3qtMCmkqCwfGm8EzeftyfXXjA8nQPUrFUQ5rJ8A2hnjBFRS4",
  "key3": "2zcpYpPq3mSxgUGi3XwexLyuQexzVWCA3wAD3Pmko2mU1ejNvgw4TXE6PR8VQaQEhJBWVs11iewoYbzmj3YSUWKw",
  "key4": "gjfF2tAzfirJx2FcF8dxwVxDnojdfR12Q74u6ZBGQ2Gjx1upnAKrUkj4sjqLzmj8QQASt6xXUWUC5B9PsRd2VGQ",
  "key5": "5Y4PJDGjAWTGwzSkQ8YoSzQsiMmuoMWmYjijmRddEXrn8Chb6pXsYr7FdB5APsDWy6WRJahsPg8Dwf1eiy3o3uKE",
  "key6": "35HRsLjsTTbqgGDXevU8rXBAwB6co4LPuh6osMXCLELmb62z63P3xTLs93v3AoYWck2divVVdMCnQUpx6e7m7HFs",
  "key7": "3VSa6HFGBxxPKbfmgS8Fp3iHkR2tcgafrK6LXmj1w35MQCpyQDUEHopifDkVhBkuRT2gJ1fUB1Zapgt2u71gpa9m",
  "key8": "ZhHRFEB7PH26a1jRtqFzqKKf31VnADasASbwicRNbJfDHTcTKXFhgxJddqT1yEHzt91taijrsvaNJ9B1ETyXq6o",
  "key9": "4cov4m6Aiu9C5B4sJc9ud2jbyiZhMcUm5PkuRuLvQtvhGsLJgnw4J5RNsjEqfriSLSCTGnseWLvLK8j5BPivdeLR",
  "key10": "3SsMyYJPg6ScggMfpudRPVxZ9QiGYjxGmTmbDgrGZ6tWjQdHFZibEgJ7bGM521wDdCxPz7TkJAtzELw9rs9xXAfr",
  "key11": "eivKX6oWAcDvh2xcdUzKYqK7XhmZ2bq7mGXmxwaySndj1hHSf7FFambt1ibZf8CNu8vpKqWfBzy2iYGWVXHH3dr",
  "key12": "5bjPBRttAxgbcEFZiaxqQdayyD1wyCfBJqTLzoCk4XubhFKVbYhUoTRJBX4VRvqBo1Z78Awfyg5udP6BJdDmT5dS",
  "key13": "5znpVwdBo2ywfQ8xrvzyt2QvFGLQP43Fqet2bVUzee2BPK7sCrfXEtVoxCsMFvindBA6dpGkZeEKbsWBsKYCMoTi",
  "key14": "5ePuVhLBCa1w2zGGVGKhjAM2YCprfCR3wwdurNMinaEcXzGoy2CW728ReKQdjepxQMLRvWRrfKVvaDjskNSx6rYy",
  "key15": "ZcZ7GaTcJzHkyyn1s71pZr4NjBvbakhGi7PZGzFum4BV3sY7XnVHuFsm9QguKc7Yw3gEHd3grXAqCzUnJodWX5R",
  "key16": "5kpNwNDQyojFmac9P4E3jheFY5vUqb4CdYDQy6k7QZtCPaAcegLSugQB8TEXGHbUeMpWz4G5r4cFxQC581RwPe2o",
  "key17": "5AaDaEmpgEf6N7G8mAK1vZ8sZhLh4ubEgaCf9MJi2KRypx8S6NuLDTX5Hgxd1abhgowMsmkfo4MuAKFrZkg7Wtcs",
  "key18": "LeJe2yoeq7TGjPS7p2PoHREKTsW7JNTr1uqUYNdbEP3WjMSGU2G4qya89FfaCrrhyWfaAP2qCLq6ZaS37ZxcDsC",
  "key19": "Urjt1RBWQrGo9Y43yaWMgcNtMQ6i8BH9WJJsbu4edjACTZ24Rw1kB89kfeJEkDLXnJod6EgtrLBdnkv9m5dmZ4j",
  "key20": "4d3pcGatbq26i3wuuTRcb4BFsYbxFZKPMCRLQWW38WZw4726vwm9b87LGxnc6YBszJKrxG5o6eMZjHCWwWaMbSd4",
  "key21": "5Gh7E2R6sjkamZdyUJk4ZGuM6ntgb8CkdNvMgHCm2rX4TzbgXtrj9So5ygpJ9s998bZnCRPMfjK9yoncpAv3LDoP",
  "key22": "53BGWqvJctDL4fxk1j4hWmoRxy9U7gfc2yBgTi18MgUJym6gBnRhts6oww756EJJM27xXEcnqZAYKJM27wCbbcCA",
  "key23": "58L2x8hJPMAqUYGhZyj5RmMqe1BVzGUczaHG5sZYYvyFtriv87kNm4GecUQQ2UVWd3w271ufCuTX7i6rJnJwfyFD",
  "key24": "39ZyDTrVb5HtebWcD6mwawS6rn9MWbfmy4XcmX8pANsc2xGuUDGBhEKqzPw6xuwSNX5ch3FAiLPLVHRzmgth3VPV",
  "key25": "22ywgtNEev3uinYh1f9k9z4NRbXHyeAugYHYDy6ZnCw78Lcvazh9KZKjzfDJXMiAbpg1DgLCEjMDHRBQMtwoQbS7",
  "key26": "2q4KMbxqkGpn9vkGSXzvDzfqC4jLJDrnHYK3adniwpKiEK2qYAwHH33LDbm8zJbS5zqpmMcV7ntGBDPW5cPfMmnD",
  "key27": "4j8SeUhzvtLeZmUc2ESLEqjaTXtVBjn5r5QHx6fkNSxUmmFrZqK8k4B9XDEQHYpooYhGyzubT4zMeytTzrRtHvne",
  "key28": "iASc5yvDSJKqixXSfnuUEBLyTzsjqAd1oo7cT5TpyTBEyKQdjbUqNCZQgvZpGJ3zNLCQP1yTpskWGE8M4QLCKxh",
  "key29": "wV86dL8QfpAdFQuDgDx8wgyyYDJGhwo3c4APrRnLouWJgKcuHbnpzTwTNe2zPnjTAqKZwcoCYiEqFGzmuA7QsVL",
  "key30": "2uN2zmVp4LFxi8Co7f9TxooCoaFsk3gj7crxHDYPTMDX34V7EKeJLsD1WWxaZo26BiQ2fk4ZMDp9oYALEKUi5JJG",
  "key31": "4LXsNe3GPTvmuYiToraukYanFPm9coS88SwWYBcEGmXVM7M4q71RMS9V82czPnVbcSUQfxPrgsbg6xwcXGRqUWsv",
  "key32": "2RVYhmwkeVkevuAwcFo4PYD9k44wfaWKuLktpgZS31fmgbzeupC4Ar9YLxMpcsiVgwA6xQeXfrKbm5pFf8gZjHXe",
  "key33": "2tPzgD964mf6noXc3LevEakk2JP5uUV8CyFk8h73YAkH3YXzZ4k7XEoPGDJMQ5mKCASQ7QUng9HL4hq2d8fiJB2Q",
  "key34": "5jrkWmeFQWfp3kaaTh12SxQTDARyNmbh2srjCJYLUkWpSxKz25vMWgZbj43qjer8smY2hXKzXaVNSNWd5K5H9Cdt",
  "key35": "2HfNa3UHVvQZmvqrT3mioAz2jrcHxhijAbv4PRk7psvU61vxVieggDinAE47nGbZRAuZbiPHYagjTqTSS1aNyRGR",
  "key36": "2gFcxy3cgvB8Fgvq5KEqN22YozXomQWPzS1HXFzmm2oemhzANGX88f6p5sxNNQgcL64jnRv75Nd3KRmManVYbJCd",
  "key37": "47fjR4Gy8AkvfEug2DJe198Ws8RQkxnPUNQYygJgV6uwNNezjCDzMyFu8BnH1qW8dhaVPYJn1u3csxAcz6y7YWeS",
  "key38": "35ZRVeJbEqEeRxwfcT9xBzdnAymMVDafvjfpxRFM3CbEtMXiuxBR1sgiUdPrcUhuAfSmn9EQj7RAn4ujGYkanfq",
  "key39": "3seg86L749RTRChKpZyM1VwziH4M8STpVXEpusCVGjGjkEH86aSDY9mrT8GbL7nicsbsbcNYdffDsbpf1Pe7JVmo",
  "key40": "2UqkjSnJRNnQq7WYQf5teBVkxpZ1iA2rg9YrXueusbujev8zVbwUy5Cs8TwHt4h9jRiSqAASFBkAUCTGckTUYGX5",
  "key41": "61Bdd9MSChDRWb9AiVN2sWgrJ2Q5yfAcJPLYGVKB3AFCrSD8NAdTpDJEfoUbRsyc6WpwVuKRqhjjM6SKFjYVD3Uy",
  "key42": "5Eu11cZcgWkq1eHKHG4waD92L6BC743r1ztP196ATfpBfAyjJTxnArtdSh9FiV7sou8dam2NSWd7GH8FjnwkvvXj",
  "key43": "2dq54utUicN3Kh41vQTcxWGkeu3RgPtbF3jCdQXhgcxwyZSBzD6Zup8n3VKbnBN457MMbnfGr3yC4Q1K98rTSmep",
  "key44": "5eVCofai9qo96oP4RdAPX7agrq77ASr8sxkRLVmfsxLG3QFKVJAUSGRLr64miZisJJXEMmaxG1wzBg1Ai3zX7HX2",
  "key45": "Gx1gQmRdtzSafbgq8Rx2abTx53o3CiMzMSzefxGWXJPnny48uGdKpL1wxxxGi6fJT4NgdRi8mjvMSf2KCnyd4QF",
  "key46": "5T4gd835dF3pou21SPxv77MtE5TEdfp1XMaLo8oL3oERw1mDQperuyvhFk9h2f7o1QTpyJ2pFvw88oqeG86SyzaR"
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
