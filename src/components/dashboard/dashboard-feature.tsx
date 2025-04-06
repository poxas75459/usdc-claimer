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
    "3S9NTbKkW7qGeYbCqkyjmuNypPTHHXRqzwosVUdHiif8MCbH8EP4Ph3BC2cH9YdVsxdnU5xP8RGY1tBa1Yjy2MCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52mfKr26XXwN2PAAsjWCiHgqpspgWCnutDQQHPMjPGbmkac7LmEH1yHu5SH7AyFQMQfrrdFMgGCCpTKgNNVggTRX",
  "key1": "3o3Bu6C6FY3jXaUfgMDWDh3VPXCLWuq6urtrXme3NFx8z9pVECUNpqFBtmCJoBMXxWvmm1wcUKG2AzPTDG6Td37r",
  "key2": "6oGwUv2rqA3pzhkM87EomQY3ssWiMGz3w2Tgd3Vn9uJwpoSY6TVytRxU4mTK8nbwjhf6UD5y16TP5SN3BGNqBKB",
  "key3": "4jMNW1LdS1FTRkDB7D6BzHDLQAMzazSSpSmtDAWHD4B9nyeyWLjr9pTHUT1qfBqmeovPWgGUVouAv2E2hSDkB6Um",
  "key4": "2mp5w81Kpum4RLo5eQtCyo9qXPg5cqnKMV1VfzY4sXV8YXujYqBsvumPCvcxvoSgomZTNiApZPYC2Vdx4H2DUyc9",
  "key5": "5upCBcNE9qg6eKbquBWC2NsKbBYSk4s69tAfCxTMuMNA5TfYDpjZQG8T1YdWLg1S45EStPkEdVRmYGrsT7QJxsQ2",
  "key6": "3HRs6YJc6gm445Nh9qXed99PDEXefiSiKmxJAz9Ra9h2Gin95FLeyYea3wSPwNjV8FNdZC1aYHZgLMh9RwEkej8w",
  "key7": "53KGuduYKcQCc13s7q896MW5rVutRpmmUraqcEoW9XsYUgUz6hgFZF3tjYeg6vR9Howo3Lg37VwYJP4uTQ6ru3Tx",
  "key8": "4LceiLEctRKqj4X5hdj4dfvWhVRugppfXWWhp5yf6QTqrgHhBVPDVHZkUCAdCPoW9M2gHCLvHakCQDxw6wDoWRqM",
  "key9": "2ccJD88yPkQ8ba2g7Vi9Hk3g6vCqJzWHLhFEh3KkWUm3gTPHpJjE3K9JSm4JAso6UJVAAvSyAkrtmmZuxJoiX2nT",
  "key10": "F7SZM7isJNduQoW4mBK4tvJf4Szqs3Gh9iDC4xiNSMHmHY724VSKZre7mD35jScyPneRjVFzNmpuLwgGShJEZvi",
  "key11": "4TCNFRkPiv18131yLhYRWv8iVcSi8Po5hjJwg7ziDt56gckyo3D9GVJjvbGPFdRWbXR1bnJcUa2EUtZPbZgRd14m",
  "key12": "5ny5XFNi964NwoRhg3Sct6CKGnyZwQkdxtXyu9kKkcaMXCGPaGzZLTMQQFmTYhxK8j4v4YgrDuyrohJw6jQs3mmk",
  "key13": "51krWmr32i2YfRdo9TRwkuFVcDMZ3e3pwjuk54osnEV5Jk9sA4KHbVcmeHaQDWCeqG4fEwhVFFTzve7saGeF6mWz",
  "key14": "gX2Uj9a5trgniWFCpHRXpmSiPGz4FTJGSiL1KvWjSj2mos4St5pX6rk4i5Z73obUt4bAgsLaGFEYhmf1SYBnojf",
  "key15": "3FcebB9J7VyE6wzGoVVi7aNFCbaVjztFrU7prLTDhGkAD5v4vifSAjMrgf5WW5ZyJbfQrs8jykrfBmynAUrR4Kxf",
  "key16": "2Vkd94Mw7DHtDQGrakHTbKF89JV4HSqQH1yzkt2hE4jiPyecjnehYA4iz7A1Do37tJTLMoUbw6DLU8uxfVfyhNQ",
  "key17": "2SHcTPjKPdHhbfdsxkHT7hwQY36juNX33NH6U46YDw1nAqTwAKsKAyvcBS9ECHkXqQPNR2n6Ptyfe8k9smH8QX1T",
  "key18": "5mvx5SVVTfWF6zVt5bikPh6QL2ip8VimCYCVX2WgEMAqK1kAxdLG4EYYJyYdwVh2YD3BXkiwiz68NiexJJkFmxZd",
  "key19": "2R8TT5UjmcTPdnXXiVnFc8NgLWMFCHs3VEVfaWgpoVDPVk3NcjRNbRp2tzjCsskU7bY1zEeqoFfGqvMVpkucvZUc",
  "key20": "3j62aEa7AA2dFAVbH5vfq63bozA6KzTztuekQHvZpR36h3p6PqHQvc1sQXjVaeF6YZszeB2627cna73pr5woGMr9",
  "key21": "4kpAiAKWWuvsJUkTrQQT9ixLGNJZNUbUchG3SLiY9TDW1GmSjrU3gVqKdpTrwSaMQTea6WzyfuQWaJZG12qaZ3dC",
  "key22": "bQR4b3KwYXSysq2oxQn5y15Qd36tZPyqAaWij2Uq1f8S4Amf9ij3tgU2ajHSt3MowT74g3864bDJofBbe984qhV",
  "key23": "4WSU45NEthhmZJapvZzzjjbAnw4QPsEyD93YpDRQLL8gTX5wsU1ioUDyyB5rib73i3QxbKWqymHr8ySyGtmwzec3",
  "key24": "34KJewHAhBHbUVgPCqkZeQr5qqgKVsg9hJ1ufo35XDUnFoz4tqXyRtENVEDXbNU5maCt3bJFN49EH4Z7dKtAcdn7",
  "key25": "5hNHGhrqip2ey3ZEfyoUstZsQbmQRwsrWmaWfbbQW46mHSxhVGSTjx5tabJXtxcN1TxTvLE8LJkyVK7ZFxiQG7g2",
  "key26": "3z1rYbqihzJvzkx12hPHbw5CoLoxYh4Drfjvf2fxhSvEHVoDC5u2wQuA8WVGpRGarMCigD6W2RfUcbferABrGbpK"
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
