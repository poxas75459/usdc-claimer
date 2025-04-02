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
    "bgj4F9KYqMQ7vaftzHi4WQoFvUZ8AA4qurp56TPVY18Ei4efWiToX4NscfMfLEP2qcSsYcS4A63PoeqPuMnmp1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HN5qkWf7Rnb2Jzq7s174kpkv1jzRLz7iqcJwXrsszG6BNyWGNPGxvNGk3vKd5MqWCHmRHaUx8XXB4nHgPKx5Sbm",
  "key1": "3yei3VDb7nmK18E7PPNbPCZNqf23YYuYoWTpAR4r47GrohBZWPTBMesFs26RhehdZtVip6FZczyMEWY6qBBy88SV",
  "key2": "2Wn3SUejBfyxej8Wx3gheUzuhf3LBLu7JVmStamJqeS8ePLwqhJMRfvgQbcWDdH7su1jDKu35qNMoV2TF1kTnUid",
  "key3": "3bWuHjhdP1wN5YtCfmYEm4t7TYraWM2uRSrn6V66SLYWmAdTDcTMfQSy8Po8gFUum71wPQ67MQLZYph8HR1yMiqY",
  "key4": "28ntSsvFWcfA3dpnehVEmk5qEtX2uFHUj3DPvuHsRcMVaBom2zwuw3kwHfYAAZJYKEzJmMFnz2Qx1PqMtjh28wry",
  "key5": "4d5GEiivTHQ2WS1vfVeTeeBSwKfqiDZ5YweGK1YhnVjwpXTThXbhSj78rdbkCygPMzsb6VtxLhy95YtoqZbQgfjv",
  "key6": "3aJXvhjea2uNZkf89Ak6Qq2FoqeQ8nK4e3RjMef99rbgdq6haStLdMtCbRipkTvqMrDJ6cZ7XnkwUcoQYpLXdHyx",
  "key7": "bjioPJWpHemzR1gHm4DraRkW9VrLVuhNnhZ1aphEYW3EboixStrcDW2q65y3ZJ5w6med6JMrAsCvfwvuWUrSyfQ",
  "key8": "3Rq3x8M9Q25s3H5DRib3YopXvKQvavL52BGdreuDAFMsb8YTYU6n63TbFDvP1NrSydNubZbyGuzHGapvtqjBeChT",
  "key9": "2drkHfpQSezRhQDpQrQESzXRagNBeWEahcKL6RTBymaUnW72K8gdvPi5feXUCPKaTYSKFbZ2UpSxKiS9bp1triLp",
  "key10": "2XgbKcHavMBioYLwMcmXNdK9bSjtnT2rZDLWJTpeBPahXnFrkitCGACCj4fvUcipeGd4N9bdWnQyWU3rHfPR1vGq",
  "key11": "3SHdLSpKWCNK6DxGkCg4y4Jkxk4VTq6KbGaa7DAGrKWqXQvnepUzqB1WJeJv6NnesWgCeCmphdMTsy2DqSWP5fjF",
  "key12": "4KAKfQEt2Et5SsQgEiQqSp6JYsDbDxApoowGsqcvpepshCS5KTMZYEYVPz63CuK7hWbBYaz92daQB5Fb9qsjXHiw",
  "key13": "2D4rQB1KEGRm1KPYAKB6MUXiqL98Przj8K7ARect1haTJYsBNmFMhU2xuoSsVSLEPG2UHUXMT9mwPp7fwrzjVcCo",
  "key14": "1EPyFD3LiXPJqfKAVK54GfqhtFULUfDkJRzUGyaskcVR63csVsfbaJ9MHKs77LwE64mHkuv7oFrKNr8irFeQgE1",
  "key15": "2ysCSX2t5U2EYUuZhoJRpq5HYXDVsHKoAeUBEJmMyaah73HqV3guxjkqYxdmByKsGMLfSRwiZaRRc1fZtiyXmh7v",
  "key16": "5cQ2BgtJsAe9ZR9H1yCFCFo2yTUwwyXFUxmmeLjJHaPUjqrt9W9Q9MFQ1Sn8pA3r6nQHKLhU5YXf3WD6qiSPwDCu",
  "key17": "edNTNu4prgUJxB2V6T4FNZp2WAB44A5WrG1a9NAYKhN4Ri6Qk5EPrfAWozzH6ryiv2ALKfsMRmbrTSco5XE2NtF",
  "key18": "4DbmKhu8fNAUFcv3qkRwZ7BYDnGaCTQpbuGrfsNQFj5cp4xaiQEaxyX3cBxWbQVYZUV7VejqHFYN6EqzLdEK1xki",
  "key19": "3z3RNnSdpXAdkwtNgNp9Z622PnYUZbaiBqXVwEvfN6Dpy1dMhjoRCFdYEnyEjukpHUNHYjSgdz5jazg1kKpSHehb",
  "key20": "3uURKRbYZ2bGohHqoBD6tyUrMNLXrZYKNNxR24af9zYvBbkvhb5Hqwa1tK1pnN2ebt387VeihYSkgcrqUx35GNgH",
  "key21": "2hWfhk8HJK8Zp91s4X2hzWVGY4Lu8pd3nFuRBkrAyGrkg46EXGSVTAdqpvD2djPCocYpN9WogXx1sgNRmQQ2EWu8",
  "key22": "2cZKZsX8AFY2SBNkQaKzMxGedUAUopwzMKYSzMSyNJvW9U7f7i2tJFzWyVkELV6YLHCjDBm3NDrhT6SR8Ria4BPD",
  "key23": "3XDVFVtpxS3r4ta7i6MztcjZT8rVf2DMHFjZ7dVADaLygteohe5kYjXxekevzJSBgP25TqnMC6446x6HhPmkanKL",
  "key24": "k77V7npyowRRkK5HeUGD6MnTqVCRPXmi2QMu3STFXZBC1T2baXdmQTcbkMxGCqw8DwMreNBuWzge24Nf5Ur9zkc",
  "key25": "hsMWxd5pZQ6YAmcfB4V46NRbiAVUxymgvhAU1hJNZYck1cX2NrvWoFcpNNovRKAgs6t2smZ3PvBismFb9y3wwqy",
  "key26": "4bgK1ZCUM7jMSRsXeYueg2Qp2jnunFxAkvGdBR6aTeWbdbi1Ew1UgZMEpWAFQBQG1WSwKRhH3Hmgc1nGquLepN6k",
  "key27": "4Dx4nEJSqb7FS893ChzXCtsgBBF3TVMLpbAGR4XCFbbcgG3wmM3rHvw8XqmkxnKm1kby5szaVEB27eJ9YegSZVCF",
  "key28": "3523FHsMyiXcFpd4WZRqHWPXDVEBRjKYiSWaowt78TuH54svBR2qw8g3BxoojjHP6NN44GaqRkdvpK3GEZDLRH8q",
  "key29": "5kiYsK3gukhfkrioBtyeVaPB2mwGE3MNf5ZqbGzT49z5FtgdRqEdCwcnBzJ2zGdFMP9QjdVdkJtiWHG4ghVH3qv1",
  "key30": "2nER9UVEWqc3gecL5kSgjz8pmJMDYHWV2mhMafFhKSZgFWNNLcMAzzSNASvpTS8iNGacNgTNs4bVvpkrFUL1VKnd",
  "key31": "62QTC62bJyHCuvkEAF4LoQrmMrrsBseBVUb15qrHpjT8toeWyfwGhK1mSPH2KDGW4ECezDBDEVkRHQcCE9jTrmNQ",
  "key32": "4g8qkjaWqGMQWg7kYYTAs2o7MN5piptNymMDJudNRpPVxNj4S63czfPCS5n2Xu62TCP129ZemqyD4QZAnzrBDPcd",
  "key33": "FfaWU8nE2eoaMcuE6VEdJ1fwNoo4U5pHSNfNidxpxHisowBshwdUcYvekdAKVnMM5S5ZoafUFsVkJdocKdsh1Av",
  "key34": "4der7NsYf6X5FWiZ59KMYTRctoMx9ZV71FKVJmjcJQe8YAkaYCYSSAXwVo6Edz42Ye97awemQdsZBQzchqY4Sziq",
  "key35": "52JWvfzwm13GyddqFs7s1ieQsjwHhzr9xbSHhCJ5eoAESx7cokBmgeQuZvRstEHTn8UfHSxk4Jao6DQkWvWyvGc5"
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
