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
    "47v3oUqJ5hqNtqTfjYpL5RbzMkuKfYCRHDjebBDdbWyjQ4YWjjSQDW6ennjMnmEK6C3BweuQErGgjLhkxLZcnLQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwzLCFoMj62ssq6Z9Wra9YueT7UZioFJJPRcLkMtxiLmhmDtejEBvjh7W95ejX9xsej6yiTa1itxwRmAhkjt4C4",
  "key1": "2cFTEVqjrLGBKhuoDUcshuWwkbtUB6ijS5SVzvjnhX2MR7cBrBDDBudpmuimcfmNfDSHXqmm3Vft2TRyZbTpWMnj",
  "key2": "3bkm6ggMvneUbgGuN4RH6Di9oztp9vumF1Bf65ybqP61W1D1XzHufRpET56HgUtTPxe5MUnGYSd222n1qy2MbdKF",
  "key3": "4Dr14dQ7g7cD7VeKbH1Tn7zN431ZK7sovbNyMrd1QArPTfNS1iohfSqWcoJqTQ8pDQn3z38fY7v9M55aTezNYJd6",
  "key4": "3bjyn1JhfFC9TtTMemPW4QgdrmjWxPxvPQqorJ5vFV1K9gLzhNLEJZdnMzCUwkK6DcpKBWjUoYhRpga1H3JDKtct",
  "key5": "5JfLuU7Zg2NRZW8pHvjvHRDYHTk4WYVmrs4g7MxrjeitwRf42YbYLySSjmfqjXeL6X2YeFR6tfhMpS3Rm2Lm6rua",
  "key6": "vQAKacWXenpqxt67AY8zzns18rCBqkVHiSyEuchnZESTzJe7zsTRHvybu7F6rLpNh6bNC1aYboQ9FFw5fk6fYhY",
  "key7": "2pQryd8w4wMqcCJ74AkLE7jSMCiM2U75kitvBun3fec1FM2r1TkKoynPPbtJoojaisQJc45jk81hTAYJHkqRkLQk",
  "key8": "xjunbqikqzNcyaQs2svgLijbgbkzjaVBMNruJ7vcEezz4A4wRdWaAQowBFtnLrS2SGedYVN6qC4KyspwptJAAvD",
  "key9": "5X2ZiKrn2rh7j128rNXPtRco5zsWHh1GovVRmjNSr7tV7CULmveC3zCoJPX7SRj8niwkzdvFGMYxYQ3H8QiXqTx7",
  "key10": "2soEJEGicFTgQKo28vM3P2E6sDujt5c9oj6FWRzmyyC2fEDzkdrBkRz3Pj82DaJArrahuiZeVmdX2r5FpdeezAPk",
  "key11": "47YSstFg9poH4DNQAs46PV7hJwBRPYAM8ehYRYpe6ySADFmSwNF97jL6YHhvuPdYQmVUdPvyBiKmk9HgR1ucpNyP",
  "key12": "3fyYXLxamW51XuDBJ7VGDANpo1Byxpsj7krT9gTHp4oEMavasJP3HKwTbyPFiNFdXjwYZnJsKAR75rsZCpVCfKg2",
  "key13": "24iT7spJec2NopWwqVWA1eZoY1g4QTSxcnBRmwKmN4Dyb6JVsQRtuSbAKfaTcR5YRMWZSf46ab6rLAWu2NdAjje1",
  "key14": "tbJf31Uh7TFo3ZQcrMZ79XGzMJxT8aDw2eaxejENww5SXU8QCaF4y1ZQ49sJ5jWpr5GXWpMpSQahiUn76DGsnBk",
  "key15": "63TeoWAcmrJmDFLc7JYGvqRcCM2iJ3naxM2gUzC98GbioKyZ5B5LQrgbYR8RvupeG4Vegf5cM6zrSZhRV8vTYFV3",
  "key16": "RfzTdfsfcFygjuZCQrTujcznCBv5Sasv6TsaNWhm7ybc1n1uDjvJaiZGihBBuQpUuyED333tgMPYwvunBWydG2M",
  "key17": "5UjJmsjBg7PMoBeiUAtFCWdUwBdwZoyTaQHACwr2A2V4pvpdXNnRh4fGqHGVD2QZ7CAmUAG6RozT7ufyZyijdtUX",
  "key18": "MxcMvEW2yJSNXTRw7h81Kt94FrTZjqMxPATdVZ9hN1RAreoRBaFfod4SW7HuVndohgxjHnbaQz8HoaBUJ7hPSL8",
  "key19": "4C34ZfEFRhJprLzqAkwV7dj4rdkEkCinJ6NSLVGL7QjoqSVbpJHNJMu1tjwc3PkCEykL2vNoTZbjv4oRff8yayq9",
  "key20": "293HMJeP27Sjy13Hv6RDfzNwrJEnpaJybkyyF1wqohivdHSCSeG7MpkAs5toFX2PexbxUY4JHa1nVBUD2GGRY3xk",
  "key21": "3EYBMXV95GeoN2FhX5PM6dnqfe2aYNinwzyGQE1G48ViPNqKCoKfbdbcSxp94A4VTX2sHdkzMFdDVS83sgVvzLmr",
  "key22": "2AeoRQ2v3kZi9MpV1MBDnjD8ExzVH8LFBB3S8uGWJcqApG5WhTxiJBRk6E4hBwuf3LSgVGF1sKs1nRdL2bZax76b",
  "key23": "5kxVLUnrktujFRDSkYgKPHUPg7LELYskCeHLfudZkhF12eyddR8pf6XJ8XVMCYVmJoixuubWaHzphkySmMm4E6QL",
  "key24": "4fYi6vRHfqU2fcumPXBacKKzV6TUeAK6AY4HiTpEdM12h66npHNdTnZ9kUxf2ohcrAQZG4sMjo6hXdusV2WU3RFE",
  "key25": "3xG2i2KBqgCxRFKqZYcMXGELaYPGhEn9Wt8f71VdmyYE3SDSbkdk8MGW1RkHHFPXD8rnbz8F29hY5RkyXaBMu3QX",
  "key26": "3gt4zQJicEyvKf45QZVBU8Vbyfzpw6gjtuwQsaG5tG3mSTj65B8SDcuCtPGK3rqUBKZfAFQepqpLPnzieir4CwVp",
  "key27": "gdHZhz9qUhPoK4RWJSAJRXFCsYbPkZFnHqTbXY2YmQETCy1JgR1FRWTycP3HA66PB6bnmEHTr1KEHeXqtqcLSiH",
  "key28": "rttMAKDZuHM7fw3LyRprL1VpdhVbyXHxnBHZ3BD8KqGABsm4hJMsUuhk7LgtMu8DNgBhq2R443byeAV7ecpGLv2",
  "key29": "4iaauNgS3rtmmi5xLrgrU3qV8iokXtQapzUD6tyuxLg1NE6PVszgWav4XqPWRUmq4Qu2VRVp5qDVPLvFjyGxfvqh",
  "key30": "4XPEVgDqweBDDvinsqZzapP3hkWQ9TcoGoBDkrjZB55vgmBkxvTPi7HoQ4Dc8Q2e92Qy99dikKTHVTDQsHYmD8zc",
  "key31": "2JsivoUa47gBjLT51ACAYvK64TZrPya6t52AhAKYXjDWJWKJj2U4dWMwYBdn7RQfd4pDHqJKUckmrZoLyBAEFKEh",
  "key32": "5E5M1nQtwKT3pE15QYGGSZk3urrhuKtnN5AcmAjedq7qhtVX4ABzbkDZRe2jAKPCGgxYq29u6qgX4Gm5erMxohHy",
  "key33": "3hEyS5SNf8KxdpAen2AquWGJZUhQTisW6ssLrnosLs1ez3MdHbjxbBWAHEcoifmZd691ueGPETFPLgVKQVFHtRKz",
  "key34": "412SWbUHUnNBuUY7oy6r53Dwoz8tJ4rwzF7yWx8fGfg6CZfZRM78PEL6AgJveaDZkoEh6reyMaYmsiYL3f5wH4Pc",
  "key35": "44bgQ2LRaTTEwKFtRp6gCAuqKpdfUVcG1gYyHyTZ8F4SzsvZswsU5p5NCe9xXC2wq3fh5m5EtpkHsX1RsvoitCcz",
  "key36": "49zMABb2QKc7ioiYduigrB7GKAfVbbEyPk9ZthwXRbpzqjvSQUin473EVkMrhZCqkZmuKqoGQZUdAZfLXhXe6rke",
  "key37": "5FdCMdczFpcT3ARSww61hzDf8S8fGiodqHWTnvH5n6h9A7SKKuUWpQcTC8h2R375AECzHyi7hink5Wx9VWWCFNti",
  "key38": "3AgTR74pEF3oHuCQSAqk6YvWD51bcPNUDR1chuAxnGbXLpb9BWoFJrwd98sEpNwih4k8dfdTq34JidokNPU3NwSH",
  "key39": "4qEsi4tgpC3ugsyegto8MRszFgPKAPaCgyVn9oDhiwFq9fukXHogNSWz64FGqMuKmAZtjvkhg4sM7yScoMarc1TY",
  "key40": "4VVRg4yqZ3BHgDSTgfWhuNA6mMJKEyjAkmHaSRMwrkxpSJkcTTiGDzNKQe6Le8yfqdkj8R2dEFAnSMoxJr8pGY2v",
  "key41": "49r9ehijPQAinLLYZ6i7m4oCE3StDVAd5NyemFoanXTQxeT8zYu94JPfBSSW6oqksVjVmZH3UsNdLR6MBvcF9yEA"
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
