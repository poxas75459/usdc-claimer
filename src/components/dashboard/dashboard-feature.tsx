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
    "tmpvCur8sRg8LvWZm1fQGRniAtYb5bMieAGgnrLpgaehVCSErGj96Y83Lq7iTsBW42xAoKbCJApiUFCGiEp1nZ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vpDEQfViLfRst6idvmDFNMKbKnhnBa8BvnjUR4KLCyR2HAfbUfNEbDHbWZd7WWRa2V2rCBdhiso2YfCHQCzRuZo",
  "key1": "dfBrcYXrMqAvWbs1jDaLLwYhdWQTXvFMEiEADpnvyVHwFYuqEdWPQHrWj5UQRPi7jE3s42DL1hdVDusvyUFAfv9",
  "key2": "5ez9DR1StG9BiYKJr4eBVgu8sKHcU86CzPmJhprCcXMHVryJeYXgwnfY2PghQHgqSkvKWqkbYNKXhBGBcHEGNBuW",
  "key3": "2Szjy2iN8f5cE6BKSwgbt6W6ybK1ewus4sDkE1rpCBjezih7Y68PKfME3gfMo6kDaQGPFZTMnZY4JJmKLJp3RFM2",
  "key4": "mrmQPug7Ar3aAJsMrfx2UGEMCrFM4UJhJp6XWHW6c9Vt625dnoDx7DT1H7fE4JSU75UexLPtA4ZfhVckuF8vHqd",
  "key5": "2naSw24iF62joDrYzASuLZxTmFiELtZ23trfyPei71nbuwrMXfFKqS99vmdSv6E39Wz1pZuVTEWDT7piVGee8vAL",
  "key6": "3Kh8tmo2tphYTyxQFx9kemnWCAEom8Mr2DHv3jvBU3rf3eMHV9VkSNwd3SqDa215nx9faW4HekSJakUv6rustB2w",
  "key7": "AsRuyJJ1ueMpQfyitr6mQmik6pQNsiWdm3wHHybnGa2htnkM7FwdXBTCGdqdZ7VETDBsd1FXdCu7hTECRJJ3sby",
  "key8": "4J5nRhbdvq5cQ47RTD34fRRHUWzyFFEiULGreyVsCo8JadVpfDSGwQckEoQPznYTn4VafAYvCevrpxH1A1iqkKpu",
  "key9": "4Jyko1R5gK621q8f6u1riVK9LocEaoit8uV9fcBHbUjE5ppv37v77pgsqqXQHbFLTrspawt1HtJMnK3qDiCHH8fK",
  "key10": "ereMSfCX9dkztoDVioFzWa7SkdfM9Uj1NbVfQcPGHcLmpv1w5F8rwB2ZqwNoYTrkSVXPHpRzFvCiysHUGKEsbv7",
  "key11": "4tn8DhyVUi8chsbA8fkmJ1BNULYpKXiemTJv2WHyK24ryka1J4jxrMTuAcS5G6xwrvN4srubdZhCqCELimdGmipB",
  "key12": "BoBtfHX9gh3TzW5ZJFbb58b9aKDefrmtg2gSPDaqCB867UitzsYL4dfrmZXqXUp3WcQqGFhzgrVDGVVvyA5jxJY",
  "key13": "3X7kbQJ7iviDraKD18gjyWEvbZkdLHY7FfEa6zFGtF12syWW4LrSBtJywe4XhvY1riaB624BZ1QRKcf6qCZ6wAzo",
  "key14": "5MsxfMSU1D4M5rTdwQSkzpvPTBRtCCTCiL1VyQHjNqv2b99PFz2Qykpa9tWe2UAGeJ9gM28F3uNWH1ebckeXVWTV",
  "key15": "5MtjXFPHyK7NhQF6cqFtbCF75fJ9xVYrzm5rn5o6vufdtkUpBJnM2YXTs22WAZNR6rh2uSfm8GNpKZdbmg1XLdzy",
  "key16": "2Tq42YXofPjP2mfxZyL2b4xhDwPhVA6hNCxyxK9QkWJeQL6vAums1NWS6nnJWmenKHNmFDLYH41zUwcr1FWu3Woi",
  "key17": "3Cbj1v3v5RC9YUex8bJ5xrWHdpkvTyJ2KDrHBQM9HorsEQmbT4sEH39JGttqBKPUpabiqNTw1SreMDCERVymf1Zf",
  "key18": "53BSjerdeNBWyRV3oQA5ppdkHhzSNDwW76HUy5bFtuNniSV9WAt65bYGfmYbRrJSs7jSxCZQg2FRLdVcv4zSCaw1",
  "key19": "3z8KuJN6N9XZDmy21QLrxHVhgGUvFrGf7xf7RL3tUECMSeakXRz7JNSr3tWPw4kmG7Y5XTJGJXAnChZvEK2kRP3z",
  "key20": "2MQjYR3oBBwAtWHNx6vcjFbNXtderVu5h5cuwJTaXu8k6zvRzkitQh6ideWLZKXUK2tSViyGz6iqhoqxUuqedy9r",
  "key21": "3NzhNqp3RTTyDjMK2YuiPRFydY1jDfb1tSpjkRYmdcebU2fm4xqDTfANLVRkFjyLMhZNiVLvz2QPakETWcZdhwpb",
  "key22": "42L2zJfMchd2JVQYV4ThajaFsYjbUY4L3wTbUEBNZ5EvpFKoxoXoAUFickFjhCsNgGty18EhLizMeZymqmcwxu53",
  "key23": "5a3xm5prHgxtjPoveD5GMPFpiSJBQmVXCuFp3CiLqpEw8ks2RsgSriYaT9YBBbexrXuVcrkJKhwqYmgS4D1sff73",
  "key24": "4Ck3C32wYriTukKLFQFCBDJrs5SoGiVJYP5HBWUb3KeNKnLffSZD4uioyvVhnNVHwM34NwriFQqShxG3w7nLTiZS",
  "key25": "4XAa6Qbwq8YHCXTgwDKH5zDr9pMa2veEk1bzXqKkgm6ARZqTNLF1avttd3t4xSCSvvzyzF7wmmYzKiGTeZtd5zcP",
  "key26": "vqaELHNa2cUC4cnis629R2aqWKm3itqVmViy925Gr3kcZ6TwcfDRcBWKhQBGtyFCdxMatP89Qv4hiBqU7rpX9Z4",
  "key27": "3kSpBNwd3h8SQcYKJ4LD5froNZno5sPQcXkoetEHTejWeAAvvoTSieXHFUBuUTWU7vU6hqTNLZteEBxHocSHUwY4",
  "key28": "uZH7eBnmdcgjoTLJVM2j5mtPsSmL1G1ivN7SsaY6XciSV7uTKa56bqKKuXs9F6Q3nD1tAdCuPB7PL1L6B1676vP",
  "key29": "4FUNYA9bKtHPaiAF6rGjYEC1U2W1qgU8J7EshJ4J9sSYvkC59Dm957oFZeZibWUBQg6J6D24dTbwnjwoYp8RVZZK"
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
