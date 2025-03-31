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
    "Hh51FkEkd5L8jNa535VdKPPUw6uayGkbAocDQhDu9TZqdj8b6cUrVJ3YG9yJYdfqrv3aAvhTgrrMUUeQLjXYkSF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RY7KEyqMUH9hX8QNDaGnMnqsSnQd6QkE7XcgnAiULVzzzRkQ4dKU5hyhpe5rYw3Jw4RR3BzikSGBEjUQpEBLaGi",
  "key1": "4Ntvz6KQ28g4NVc5beg33ty5yc5tArKGVnkTon8bwNtvxcqT5T6guRDumE9TEcrSpftVEj7CiWxppzLmpKdqmctt",
  "key2": "3MjJdwQ7uudA4Wm9FgUDtTijMtMbd6BjxsH4atr2fTac4Hi7Yte9a6JKW58d353j54nXbpAJXe1dgYU6Pt3KTc5h",
  "key3": "4xufDRxPXZ61WmeHq5uvKqgbJujgpcxzjMas4HkYEn6P9VWfVG9brCiy9v8CBswkS68kALxoE4M3fyGXELYAKKTP",
  "key4": "5uwD8rA7DDmDTtumCnqgiophBqyVm1RpYMK5kfbaqs743YPtnRHkFBuNAVt1sK6beFS6qKkmQRZ2BB2YU888TAM",
  "key5": "3zQSgcgTqqJSK3NhNSAN68uHC9GAEa1adnCsay4F4SKQn31gbM78QzGK3ckXA6TQiAxWJB45sJaKMmhkzFJNXvmc",
  "key6": "opbrkSthNdRNnVq4F3ia3vAo5H9f7qxAJfH448MAVjMnLq5VH7Sn9Hvzw5hf7zpY6MewuPBs4kYS7JePLgLk8nM",
  "key7": "wbCdR46r81gGcGjWWN3kn15VB7GpPrPyHoV6t7Fs9V6E3Vc5CQ4w93kMsQ8S4txBBUtaiBjdpvbqCzLSMFt8F8u",
  "key8": "39V1FB3VekWZDUhWdFGrPabJeWtZkaMtwFidxKPZz6GWCsUrWz9RdnPFiRpFkjYb16Kx9FCvaRQ1BkUENDuS7rc6",
  "key9": "4DKt8oRjkCPfG24szrXc6x3KEwdECXsvmbr3QdGzBK6pv8hhqRNd3rtqWutcMpr7KukRcfB9asj8pSCs2c2LJGV",
  "key10": "3b29FkrtU7CPJPoT5iCgC3RQsf9xmtBK2tfWab7cuwykHN1EmVAA92iAuG7nkHpr7jFZn8reVMs2Yxh94LsQxfnh",
  "key11": "2a15TpgLPCx8Vopv3ow5jbA9w1MK3meNKtXXG9RePh9mbRLPwZkDAftvTUAMNivGnLxLdohSC3dETsLwkxQxGsAE",
  "key12": "388K1vRLpeos2MccvJd8LU61mHkeipyimJLF3jMUf82LfiPzasZqVvKnVpwiMVfTCpaFnEcypxAZKZc6j5yPmGNP",
  "key13": "56tMcXwLd6duHG5FQGHaxFEt6zHExM7THBCiYKjx15ta2cBucwuQnq4P6VnhkoGuHvu32ngJZNB9QG9pMu73RiKG",
  "key14": "kQLHynb6AUNFtxVZ851h819Tp7xtWk1mFdVHRkcPtcFyTc42otZ2tYnmSrwVDvULG3G7XLKE5XBQhauMYq1n9zg",
  "key15": "rwZZYawuUeMi9wCU1g6F17XZ8pCxxj3iisaGmaT5RJjqPf73eN8wmJU11wfoBea34VzZuxQQG57S6zPpjFAdRTg",
  "key16": "427emRWE61f4HVjSzZWgN43bUTbiW8oWfnPdgtKoNBbaMeRx8JikFsmc7zsyVMwAdyp25pYNZDEhEhtTXW1PfVSS",
  "key17": "2phVhhCpnvrvYWF27gFH2sgA4cHvKqkX1TL2RuFsTLNrfhYfDpVWWB6v1rP6xqk4XYpTvWCPdCjtsdz6fm21TScF",
  "key18": "4sUoBBSNypWAzSezUfgb7eWLPDNEiKu3KXBuWL6b6pSWe1dXkbi48uNVTUTBGEigyQRUM38rkLvnEpDJ19vWutHx",
  "key19": "2pHugzmrueVyVGpRBK76G4a4AmfeZj8C6hiJTXhTQR7wgs3p7VDBeQsyBZNcqys6VQprtgKbXR4kZzaVrTdsx1uN",
  "key20": "2HD9sSSzbNRMBczFuRaMn2cBCwcasKgrFRXavri5ZEuJBFt4fiEgsnmwzAxwosAtAoNzixouvXoELUtmFxgcNNQQ",
  "key21": "4nZmYv97M9o6BESfcXsS3RQiW9Wokzva2WiUxizUHhoGoceih7zHF6atwYGLScBnqeshTKT4zMaLhHEtFpBFzFZX",
  "key22": "5MQvZNFBuax2bACkxdFiEBNGRSYACVvoP9Pi6LykSm1r6WXv8hxgZRPS84pZ2FJ8gkh9vpsppYzC3wfPpRJFHAx1",
  "key23": "5XPeQJztXKEsPjumKUK1eV57DyQc5JAz6mBtJgP9CiW8VwxmczAL39VPo916qQPMRjyuxQRGV9te2RiVDjV9oas1",
  "key24": "CwQDo1CR8iKSmqwSNtzjkiPQZFosY71kPJPfzqPY3EWtvGe25kfZZZavKZbxKLvezUgkbjJp7k3yVfxpAEkq8Jh",
  "key25": "4SoJmBU1NiqcdxdFTfFLuFnbxnJSH17voBvpKSmRg2yCe9VBfibzKFgyWf15FMX2k4DfGKQLq2nH3KdZB5frwCrF",
  "key26": "8m1z8dkLktfm18bnPW3LXPe47cFaUBrL3ijNfhgZJ1hPLVxBuytzsr6dK3rgF6yVWKRcS6FcFMy4amuNQySg6zS"
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
