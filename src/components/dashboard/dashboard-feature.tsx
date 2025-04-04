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
    "4t2wpYhu5NENSkgDE7niEEcHeuUrvLdq5KZbV31qFQz2DTJcoSjVL13dsWMcMFKZkEUPgR5PXHtcUkWkygRS1CBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqA9WnH5QKp6EspSHakgrHQjdUh4ByRVM9DDPd2xHuu1sWompAYAsDotqFkPg3ycbzYng7ar8AsYmo6nVG6opVH",
  "key1": "2aVtxT9L8hFEoPNYEMRa1NrjE5G3LAuEJChmqN7J7fABKbDnNYzHrRJZuD3F2UFY6fsSMzqc3HKb1efPAqtpPbo9",
  "key2": "31ohygVqYFNP7ghk3KqAC5VSkk81ypazv3Fmmyyt1bGydBhCcDGUgrCHPoFb4gLq5Xd3QX1LaKjLcVXggjpe32r8",
  "key3": "4x3Uq25sU2LsYCehBoUd8aQG3uXsDWtfK2qmNAAGBbhi6U6MQxfFZgt8vYPJkdPVScgzzhymfZF1yaik54dQX2nD",
  "key4": "2adhvVdDaQBqWdYSt6SedXqsN357ELGGKTg1ABpmDFPbgifUDig3DtXhzEs2Nb7KAmeaxJbBsgT6x6wqX6TYwG4F",
  "key5": "3WEoZpJh3j5a2kzRTGbVN25JDKUjRYpAuoAGFcmEWNjAiaNyWsJGGjLmNdPm89A7f7UYYgtNxb33oE8fCYVdQaJp",
  "key6": "2QP3Qy3o4XvXBiFf7wcDUPWXrKdXNQsTpR2EKnowKkueuC5oe6Yq3MyfLk1iLDTw7cejPnjie38hGuFNdv7HbA1X",
  "key7": "rJ3zVfBT6jwBU4td9T2BPc3udnGRQLd3Yxcacues7ZgsyPCmSrWVQimpZo91UosmMNNLrGF27TaZEc2hBH9Qo9F",
  "key8": "2TQqFkEXLJXmpxevtbacTKdjNCuZwwjokLpCxbdiTzMbgt1HwxsdfWoqQwoP5B35eB51bcDE5iGWqLupQmQNccUG",
  "key9": "MeYCUNYQuSX2YRDkcENA1ZdSuv1E91g2zHVeSK1T22MAZm7iwd9VmJG7Ri9LhJoHmsUuKd4xjqp7p32jbYzdaKs",
  "key10": "5p64pNTJnEzLtnXSD5bxfSxjpF9f2M9Hzo7Se4FZcC9FdE7RgEorTbu74ULC3DehKfCTS9SDsUAGzYeVoyDSp7FW",
  "key11": "LLCnxtFGoRadTMKWbyYzyJn7Lx22uDnbiENF8smXFXxDuKWeByA15WQujjybpeHRwKAZRBrhcWT5i3V2CYB2JSo",
  "key12": "3FJRmPB9YFAhR9d56oNAWgL2KkH1vWpao3AwGJffHdF3wqZ1Fu3587Wg7tvCUYKYvw2CYEdHUgR4e6KR3n7Zuui6",
  "key13": "BZHY2PmiLRSoo6ny8urxLiFrysxmk5MbK2tCdV3pD2D5BE7bsEKZuPbRhYeKJdDH3EqkrYt8N36ob98WGtxCufS",
  "key14": "5A9RVAonhWyTUR8FB3ZqFMb66aUCq8QMvTsfhLJuAVHkFMsMN1TRd1cTrUea7wwqRD11cLRzVR2KK7KJCEFMJwE6",
  "key15": "5Cvsc4JCJyHVuwdQZryLUaHfoUPS7kNNGt8d5vMP7r7Yg425u1C88EneKo8RoL9Ev5EfVmhpEMRt1YEsxuxrkJ25",
  "key16": "f2AxumnLQCDXVj3FtQCCgjUHguDrTSho9KhYFRQLkBFWFFCMkaS4rSAAWHZ1neiDHfLVuYjWMfzGUU1dm1Wjraz",
  "key17": "UHVNAyucj9egToSNuDmfMefVz5dFLqPkKQvMSDY6SW1MriiCXm69GhKVimJCbmPmNEgnTh8Mb22551NbLki7zDr",
  "key18": "2yfhaitdfMtnsHBVTNDGfX4UWNQKwnbGA8irLgAea5sL1qS5yZSTDTUsjzzVusCmbot6RZXV1RZpMBANZQ75BBVT",
  "key19": "2HJUvpxdityh4Lthzoy1s1cLmHVgvW1uscUgkqtnyKeGUefsYX4rp5YWEQUvNM77yWUMzGN8FxnbBdqUxYMQrFKJ",
  "key20": "3aQFExfmrjU3SejzBEgxA8ooAgkvvhdzJ5UL1ZTXHsb7eXAMapj9PDmignGt5H6dxqfZKsgFAHCgUbXr5ADuPNCx",
  "key21": "24nK6Hs2auon8cy174uAEQJNsArLvCkJ3eeQzN7DHxfq75vwSfJo4GdwQtB269E4CKSqvLqm7vVF9btCrHgEyYhe",
  "key22": "43co8q4C74qrRTt21dGFu2i9fJEcXomdeSJ3pfe9ebZEkwLtxynqpi3jEdYmqRQmqCjRZc3WWRAGheaWTb8pyF7j",
  "key23": "2mYKMpQtPz24ZFoi2sgZouCXZpHkxA85wT53aWTKEoBp723TUyoPPazg4WtQgYKgQRRpGvk5X3w8GHisfzoLC7ys",
  "key24": "5ypYgfEEpcKW45PXBjbaBLZVVnLjVjMjBJoUiynVcvuztigeoWCCAasQMgoyW8iYeJTj37d62SBiYNeuFStGgLwg",
  "key25": "35nnLpHQty6NDCNyS3ZFCkJzzduxck4XRKGwkNDDBWepnhPWrwjsYqzsEsJJo3vCaVPYkRuBr8qovcbBN5u52Ey1",
  "key26": "63cZrbmDxFMqMB7vA43hcPtVoDhzSgwsToFz88CK449MXEh2iUSWNoSLUqj83aqP1mieKNmAvv4GaMhxma7V7mu6",
  "key27": "2WzuSmZNLubpaGHQWQxCJiUC27yZ1F3eo8S4tp8shJJ5qMc84aVg819ywmbbefxqti5NV4xD31ustUM9KLPDAD9A",
  "key28": "3TM6o6fgctEvctfaHuHA1g83S6MsHy3PxfGnMTXUcv4LRLrXB6jwjF2aXTcEPNqaiNVFTdvMW2443LArdxBJmB3D",
  "key29": "tbhsdupSoW89JutSkQpAtoXQ2En2VMNzxQ6fic4jfRQaDnVWY455EZ4hYDpLgzcwxFtmtA3M9vXPPpEfMrQK75i",
  "key30": "4VTY8tDp6fQA9XsgmPTRWE2BdeH2z1ptNkfrUXUPAdYyThvXjWP79ShEPdQNxKYVcwKSS3iqoWZ64scRJJTCPaJt",
  "key31": "FFTrdcMrrHm3Jubzd7Uq4kWMJ5ekvRfuWYo98XK4SRH6m7BtsTBnFiyNqE9qfA5SHeUM1TKP4MLvhTncT9nXigR",
  "key32": "5EonFmrso2Q4fQAyyudMZcH7k92PHykGDxsK2s1NwBGp5FFkJGLpN2hSSZ68cpsRyxgbNumynakXz3EbBHPiyi7x",
  "key33": "25DjQerfzESnys4vbxmivCTYWXYHVeZKgLvD6ZBPeFcpKhE3bLubXHGuJSScnVnKrdKSXvH4sZYR4in44XQ2txPA",
  "key34": "PPKiqxG4BLBsGRxgKrBMoDvjSiHkoKtH4oLZ2LTbww9BTFZBcraXnHsoQyXanjsz2hp65itRAHi7UCdczQPHGoa",
  "key35": "EMj8oYCM2nXbr9ooquNYfUxWdmZUPq1LrExe7VYX1Jo8qHXZPCVE5CbFVn9niyp9AQ5i9BRtuLVtqa9NcRo1xK3",
  "key36": "5vqYy7Z7rZUb9fYuRVqECDUv621TzFNKDmfexgpT4k4Ze2E8pujxCjmQafqCrP82AScFe7hjTqzjKD9RqreDVRzi",
  "key37": "3gKaJePv9DBoZubhhDj3gQnnmFy8jTtZMD2oud3EiRYpEjTMaGD47DCpF8NHywBM5paAcjQ4wyw9imyEwgvidk8H",
  "key38": "2U7CZixgLybVgxRoUSfNfKchxMFoCtqbPWNSfNCcUTyQ9NLxaGcjuG4Mg9hj6VeJ1YHMrcA6Q5Y8iXkP5QYgy6FR",
  "key39": "4uAq9QsNbpuGVx7pPKDDfJToceDuDnj7Wb6rLt6vyEgh8RUFsDQ3axJCmpCwjhuYcxsAWGCFaDszufoVRMzEemoR"
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
