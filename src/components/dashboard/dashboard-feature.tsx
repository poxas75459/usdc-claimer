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
    "61XvEDCpobPDvFfnNGqG216eHh2YyreAzcBWN7UdoBHHVezpFbiDfnixzgZ3c4bQQUeoC3V3dXt7JUwMLaQF6Usv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L5dybgxcQ8BE2CscpX7fg1tYcmiedtw2xSSikVgTiEBSqHvzYTmtbDGpAwYttMAqYWiyfSMSMjksZiMhP5Hex7e",
  "key1": "LNnENWeS4g8jQyGvGsbKqSzYxZzMnnzSD4w7HHvxm7rq4w8ASJErRkh3qshbusW4bMyTthU2toFqqziAkUtNQtF",
  "key2": "54e4TTWnP5ZNJiUqReXofL7YyLBWNJQo1dyjgEnUz4YUyMVAZcdXYhfF5bpSiSJtCgZe2RLAVjmNRLQuKENJRmJT",
  "key3": "5NPgY35gkAEQqEjGWGWwTS75fQb9eVUNHraoo7Qnc94ayHWJVWvunujfk6R1WydZBeAKfMveN23apDybgAJmWFqz",
  "key4": "56pMqFKXYuw1sa5Gy2ynbK5kuVqW5ByNJqa2NMDtFxSJrpCdfHdYoiAgtNTmHoUxciAs1VoVoaMpqgtuqCfnzBES",
  "key5": "2qbkZACSPEdTqsk7EXMq8n8g4cy7c8JZT5ujvpE2NniSCd4nhi6mVSaG1fzSvoMgM1KzU8Nr7KXnfBuJifZuUXJ5",
  "key6": "5cpExrwbdzfaevdfrQ2Y4WsADf6zrVoPkMTXwDwohfcvcCCVQR41d2Jy5hs4VffP4Sqbuizo3QXGV2WjpgXbXsZj",
  "key7": "4C3Rsqr2n75uQMfUsTmLiT5ooF6RLho9B9g2WiQMnEZKBEnqV7DHHRmGJxeGfkdrbz17U3ymfNhaTTh3E9e9LaZr",
  "key8": "3CsJEsWZ6f2hfEtGujieG4Y4kGXNqaBWXDq32vMxZm5qUUT9px1DAFPMKTVvaeu7Bzv1xhtXsTf2JQm63kwBBXcM",
  "key9": "3xk4pr5wMqfcYTCqUZVMuPdPt4vQ6egPQtCPmjLtBGpkH1RDX5HGHP6KxuiFM7cEPDnyqF5RaoocUQcT3djB1giq",
  "key10": "2MfcknTBRx2VRZb7u5p8i9eHMwchw5fobgbjz5ezvztDzCzXTCmC97xEA3boiHyD2bxwV3cXLktSGZNXP1JnTNrq",
  "key11": "3ZgMrVT1YZVCscyqPTpxkv7W2yD3LDsiAVz1C4eqvVowijvjEWExuEK5HGSqGn7RxqPUSbmBqmZfqKySsEiBQP61",
  "key12": "3XN3C1oUmBGerTtHNMf96wopyFeGqkFFsuJUdtav9kWKmUSeSAiJoKmQija1SuKQkXMxdieNXzGtGXR2JiDK6AhP",
  "key13": "PBfPNxyXQjek8KvRizRwNzKFw8mT1GH6xaTbQZToe7gt8KF9uxYnte9QtTRyQZL6mYQxxJUUrBJs1A8aG2MDKtB",
  "key14": "3nA2MznoNZjP1RhEKvGhNaRgwpfb1eZSU18T9avqWDrBNxYTtsTLusdtEw6dUBTZZMEL7od18AzdpDTBxjzutzgk",
  "key15": "2V59N9NmF7yjCyo611X3AGhzcNrKyobTMPerYTd3zGqfxXQ4kFEFrqmaZa55MAGSqLm2fo8hiFvyPooUhptKXEwQ",
  "key16": "4cMCLir9o2XoajbMcovztWpSPjX9DxVbWhefFQ3jTUAm6ffJAG7Ag2wfEFKgyuZBdmMRuNQVBR5S9QAbgRNarGdj",
  "key17": "4CN2t5QA1X3efmz7JxwzPnP6Q2sr5awhQ7pzWvaY1jqnwvCbvGH15H87nUDhcVb7ZBj4NZUjQUnx7XMHYfh4e1n1",
  "key18": "3y1uXib8fpzjLoFm8dze75oM44dtmUoR3KuCp5cdwGJCHt9wMbhLBGNboMbHgkS57WMj8c6JWzdRgu6geWRRzSiU",
  "key19": "2bzsdgJtcwnPnxJazjkkgDbM9ypR5ouzrbSo3yfPg81g87ZmMV3G4brupVagBQoBNzYCUzaabWM4NozR5L8GWEPp",
  "key20": "5QFHCUcfbic78a6Dap1ThkkAAkaXsKTmRtXusBMzGX2hg3E1k2977snG8nr8FRs2CdmNjYrsL1KryJ876k7My3WH",
  "key21": "2G4P3ULSW7kawgEa8qKGTnAS6RhfaNGSctPiZReMQUTh2VbEyoY12qcYHs5G6MZCtoM1iV3Gaow9UpprKZfD3xFR",
  "key22": "4FXPfT2dwfQnXhLG4gdPuY7Lf9Uo7yxxFbBQQ4qpUryfh1z4Xqeo6vpgYLGRpizrHETVshozvLmn1NvdiC6FMoFx",
  "key23": "4arWYu8X6E89vpZxjyopRDfa2HYoJvxFQSyV9esT1piVs7KuDbC71GsMFPE3qLWbj4C9TfYpXvUJ7U8YNDRGdFMe",
  "key24": "2woHtS6oYg3La4xx1aNNTZ77jAnWTamMfGKMSPx72vqmqSrghcKHAfigLp6K8NnufkUP4Lk1es3MBj6ZG414N1zh",
  "key25": "2P88bcatd6jRC4t1Ytamb7AeG6qYcPGKYQzNE3h2NTMXQDEHHFSexGuCKzRM4nKhfVemTLSCa5PEXb9NLrmHnaGu",
  "key26": "3aVPkaNt9hHVW534pupbCQhairaATvWBDc8Fa47LRV111cvpbonKMaMZRnnqv5Adaq3ZDY8PiY9dPTrTQ6v1YgFE",
  "key27": "uY8dX5HwKW6ppK5xZxZ7SaVKwrJfw82W4pNu3CdzSjhtkZ2hQi843qao42v2phsjv9qm9m2MW8oyvoE96C7N9oe",
  "key28": "23qcdNK7b3txv2KbDfFYQ7FoWogJ2X8MsexkpXi4oTztfTvF16PPo3GExxNXtgJfcKf14PKjBvNjbK46XHTtMpst",
  "key29": "4wvJWCejTuxuKuD5bwj11wcBig4GwMiZzGscf8FqgQJPDqQU2a7zWLGamJbyV5v259i1WidgJiHceeVjeegcNMfj",
  "key30": "4CotZnvbuZ5iybQLqmPCTrkiY9dbaQf76fzQQfM9XpRNrgEEfr6tGE27Vofi8MCUFa1woHgT2XNmcyCQHghWq1Ds",
  "key31": "5mZEA8oyuwieU3FUqrYFVewwMi5XWzTANQj8mUdk6XkkdodvkoHustd6ARfeWRKwtJJdfQz8nns9wYdfABP2vmhm",
  "key32": "4CwcZAQjPp2ZP7dWxbFNKeNPmzj11sHP7zZfSLpoG36bC4hyoURhPWdY9utVrApNHF9umqXcVzwdwmNkhCySAMb1",
  "key33": "4qq3N9CjrtLMqD8xPQjcN3KYzghfehDUdsDE2V4sHwkhkzMEicLi4w57sjMpG1vRuojgFr8cmxE3PGTM9ARcbNiy",
  "key34": "4s7Mo7fjGqWbBWRAHuDnG6fPS4US5brZVTfXcPUopobZ9Yrb8XcZMPYgW2vUTdwEirsa81zGhkUSMwYtMYRdDPzt",
  "key35": "5JuWi2ySS5rcvDDebXm2rcDZQhWmfrg1MBmFZPATn4ZgUmS4BZbu95tKELLMFLaRPc8f8Y9DQkt71RMs9TDPg7WC",
  "key36": "43RaM51mUR68yHyqumDPkfG3a81Q5bxVcYJfxuXAot4peDvJTeXwvWxM4duraRLQnMi3KM2vFP6zjpCHvy95SMDK",
  "key37": "2mGUqpdU4Z7cmPHDHyUf9zaJ1BPJ2yFmX7D6BFggBJRDqpNhRou6eSDjdFAAQZxANDVGUfBjqmxrS9TQKrEfrdWC"
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
