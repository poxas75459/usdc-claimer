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
    "57QdGqxW1hJsPimrg7e1znJ5SYsPHjijwWxAjJy59FpnG1umQgpnQn1z3SZQsZbegMtXqGL68GKDAVcoCN5Ht3Z7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bCNTPsW12oAPoey3Q4Q2rfhpnJbtMe8hcTRCNNNcHpnzNM2gb8n8EVvTnejUDM2up4oDFw553ECMbgjPbypvwGe",
  "key1": "2Npm75bzXyfzvk4yMzKBABEepfrrt9fLM8RR1wPGowhCvxbAGXS2PHYZn7fjUv52e6qRn47Cwb2NYr4c6aqEGCfA",
  "key2": "5jG2Xwk2QyDCtEz3d43du2shixGqAWA1iFKCvPj4UBLBpe1t3CLj8dNdB411Ws19amTMb48TvwwfHprw77iAiZUz",
  "key3": "2aeq9aKzBYjCnq48Jj3h6152Gje6xBQJRi1WGEb4URKWbXHvWX5dpYqN7cqFcJ1FPZGj2JqTLVxhdkwrsFcQ3czj",
  "key4": "5kvsUPPkDuaKKMc3EWpCBsSViBMLEoncE69SbZMADWf8zjrD4XVMphicXRgkEw1Dm1WvAq28tsPFc9bgGp8sG8yR",
  "key5": "2PquBWHqoJi8kU45KBvahyYPANanBMauUf3WfrnAAxqD4djTpZevVahoG5K38WkNKstEdkrX14vXqtfJPibDVzZc",
  "key6": "KRFFSV5yCr8prBuECdCPcK7ScCWtHLBtmUjFu7U2s7QYXgU5qprAvCSyyEFAhrYRrajDWXQPocBf7NJ3hBv94nZ",
  "key7": "4JXKyLmRZy9zxm5xVtLtAyc8V2cPZryHgAC4744DFjtMHwQKj2PzVKpY8ue8kE88fnjNfuvgtcizwEDtebgxNhsR",
  "key8": "4fBtF4AWWUoXH8Q4Fgwjv3ZCqW3RgWGtxspiLZWveNr7vHQPXf1qFtdtgfoKRp17u3URR3Pcju1jyutTrJn2mvAJ",
  "key9": "3AuLj6GrnzHC55KQ5PbFh9k7ymaY2cmQiTp5vgQyzxEJuMQbK7g5gvg8SY3AJUM26eesonGMJmaoi3kzdbTjWWHc",
  "key10": "3W6dMwsyaefVUD5bSd7aXFXDecXFRdv2S7FaQ1ijwsB5G5PFUS38BpZeG5uBiLujkMqVRfmn6e1MdoDm5pqddzKS",
  "key11": "UA9EeYHUKyNHLXzhxoM78zQaDnwkndiqHjYpy1Nk1nJMLYvhXnXfUCebEUohu6Gu199LWwTicHdWMudwV2csZX4",
  "key12": "4CWvinCVJG51FtCrZmQpcuSjiu8v5v9QMcEJqTD5j9kC4QMN9rcDQJyPFLTdCEYG82cLPG2rEbBcUkWZ2QNczGvx",
  "key13": "4AiL3nKxhiSLRuoJWvpxKiexHSp4TXkDZtrx88xVXvP7qAJaxB5dsPm7oE6JXoFQxcuFb31jsWP8FhrBMfLsenSq",
  "key14": "5ZecStW6wam7XXDG7UEEe7RjQm8mtVe5MjVmkzYrGWusE6k7HBZoTCzxWRP37JmCq4vMBDMdmkozTAZcsJ8vMEqx",
  "key15": "311zdoRU26KWFFNuqdWXWtndKg345kbTk2FS5QMo2hkEyYidGKD8LySgtGEGkgcv7CBfFoENZnLynhXr6WQmhaXq",
  "key16": "3A74jqtahgcEQgyaFE8hbPnpDbBiS6gEeDfEeLpFd288jpXcyoiTNfFUJ5dJshkjYeCpYNK3ff25epm1vroNFzUH",
  "key17": "4vvPgur64UXzFyKmsWQ3nUcDkvZ4gfs2E42SqkVewxsDeK8Qo1AmBfLhboB8ZB2bSSTSXpPXWLCQJeoZ3qc5Uces",
  "key18": "b9TsidLnEYpgYDdJYzi9gwGgBrmL2o3J9TfV7g6TKy85f9WRBHwgV7TMqQNcoxjBQRG1P4YXRs8pd7wn83ZsmwA",
  "key19": "kvHQNbwHQv6HHJtCC7dqt8xudz291nqxT7z2kQSHFLME7RT9YuQTMoE56kos5X3DzeuJLfjRZ7DG7Tkis5Tg4so",
  "key20": "27gdTmmwQ5iMotTkdkK13UqswfJG8GFUyMb923mButduH7TZccXAc7uQvRXbMum4uRRGx7tGtkEBfMgapMcZjQ8S",
  "key21": "3mG7QTHVbDhQQ581hPXJMfMJqDR1pKNK1g28RSt2chW6tZDjby1rV1J7m8CuHY8Nve7natoEd9vH9DFgLYngotpv",
  "key22": "2fgxssEjnw8QCtfkK5pPyo3HrHwaQWHMu7NEeY5z2afPHohEvMJrGRGE6bYvmhisHRVKB8ZG62HfKEJ1gajk4dss",
  "key23": "49xVES4S7FYSVTp4ve6iZBfgWpPHZ6ExnhEuZWyAD3UkkSa9YwBVqbhZ8m8REjexDcr9a2eomD5iMBpB4do1qiyL",
  "key24": "5rKFJRUwbFGdmjijVs7ibLvGtTwzZCCD1r8Q8sqKUTrPvK5YGMDca3XBq6KiDaWwiy3Lk1e6MW69JrqsumNcQ1Z4",
  "key25": "3QRi8FY2tj5GmZr1qjTCbwvzs95Dx5e26AUkQTzRrSqBYgBuYGT1mJDnjU1o9upEL3MHdzCYMVWC26Nx1L32EtWy",
  "key26": "5CWp32dYNPaA5YE8nx64xcZfsLXcVMNJjHS8PDVkSZKzLU1LTPty6JafEJE6xKb6LQ3VQj6RBoDkv8RYrQD8tkCy",
  "key27": "54otKNuwTZranxUtiDjpt7QNiDDobVhjJcj14FX9ckeF9oJKoCmZUfGp4YckqjcuMtzJmfa9f76bxoufgc3s5Mdw",
  "key28": "5ixtqKJJdyto9RgjakCECaAvKfafqLHjLvN7JCrsx9oMBuQHRVrgDYvhkxrryEXiRL8LioSvn2aQenEtoY4Tx8N3",
  "key29": "2dBTQ5CiWANMfF2mB8Z4XHY7NwaVA54nhCrBueUzX6Jd4TTsVN1LNVcL3QKg2h6mqtqiYPTHTy1tBwvVtatuPA2k",
  "key30": "4EJHAPBKwws39x9TtvuYw9uNeYceWjeW2Pr9pyZerd5Y43MDz4cnT8wDq9EMvP1zpLDmy2bBuDDV9CJ18F82CBK5",
  "key31": "gupFvsiYsHND6Wfpx16B7sbepFmkpwmPB2BQKzkGcKNAK8raEGqGePMHjsckKJma5epk1kwnhiZTjpYxti19Lmx",
  "key32": "Rrq3rGPX5dQm9f39iHonrcJAA5pAW5FiFJQtLfPWYDqkEhi8RaqL8LDX4G4oTt4xMzUYbbRLk5KiUuG7M1vPaQh",
  "key33": "4FhNcYazA2wdWbbLxR6YPwAhrahq6fenERgK5vHvF1f8uvzLcUpfVytdRLcLDenpNSeTLMpPzGLP4KgZVCH546Gd",
  "key34": "5udvuayxRmEFHzFvU3jAHqoK2gYvcMNv3kHxx732u5kQeQvbnEwgEUATFMbj3N8rBwH83A1BokE94DwvJNEXkojc",
  "key35": "PRHFbe8ADcAQsYEJ85wKx1Xf9Kg4WruyGqLGms1SD5A66yC8w2qJxBc5mM4EZQYVcecmzg4pnx9y6DVaKMDs4aC",
  "key36": "3riMHzigL2Hn3RNzLZTucTJqAZnGv4se3VbxUbJ3MN1QNFr4NZJ4wS2cXKxGv63QEAhte1c4STHKZtpmRi1vXha2",
  "key37": "3Uojb7zpkyhPkiVS4U1NbSHwzZUvPqQ9KP876wLQKBASPdjeJwNRypYyFFbH8EPEHrbgYjTpc31yHmR7fwoGQQdB",
  "key38": "6TK3fLCak1cJ2RZUxKcSdGqu2LosQrKukv4s1YeGKecirvmfjA9Vi7Lz853MiG8ikDSVExZ5vL3gjrXVnjHWbpk",
  "key39": "4THLxz99skZm6dKg3sWMTSANN51nwHyXKwfnN6yxtubmvgifBhCwAUbGnG4LMkV7ZCj1QWWgq6yfVuiCzFmHLdC8",
  "key40": "4YYfxApwYJfqp2ujSxXeUyic6mD8xme8Vk27wehAsMVDVg3MKApZKJveywNfvfGJgcfaXPzXg6VvkytfNkFY4954",
  "key41": "3m2kHEGrqryrMuibATXr66ppz5yDTvsRdmfY4PTufnDJStnfwceAq2UQ1Zq1KBgbyuYLeGRKbNSE324B1zgPS95W",
  "key42": "24VRrXR3FHvZQtQaP8mizn7d6MKuw3zeqhXnw5CeVdMHfn782KMmsXTJcRpizcbwjf4bP33ACFR4ZrtM9v1v4ctT",
  "key43": "5BpTpbkmB6fjwW7oVpmLwF7STWdztanRnj6EhdEK97cuxwJMdgWL85iacXshqLc7EKWUVJWUGpAip1fvdbbn39Fn",
  "key44": "KAjBDQijqbEy3vhLz4ZhCNykzk8nQTY5QXLchmVtgnAYeBvsPxALSkzf1Dvz9NoA8NeUHmPbviC37SFPuM3yNFq",
  "key45": "GJrLTCZrHTv9NH58BVZarz2dukZ6a4wKCj5wCZxiEcPUTGjDLkZQ6ZSS4JJYW6uNYdGbnGf7s8JTbMSYSnCfXNc",
  "key46": "4sgC8GJJvK4T6Miuw1tQPVqGbEuDdtPxgJcE27WzPJhH9Xu3oznfVm9z7uvpP2vUBg43jHbgUUhHM1acK9Hg1Vrv",
  "key47": "V5J5nq26Uza5Nb1noFX5THhXd25upuUM9R7UndzQNaiYCoTTdAEyLZtjm9LeF3jLXHbE1A9gkjt9XsctstwGtcs",
  "key48": "jMynX92Mc79m4r2qEkUk6zkgLmHVJrvNYrs9udu2mRt6WZWPNjzP5JnmpdCwKvBanYQjG3yokWnWaWg3N272qVv",
  "key49": "3HSmCt1BCEcar8Mmz1tmrFrPcJpqAib35ZmZvKa2C3miPHcEV3jYTQkiswLSNrdZgzfcAwPGTe24JzBApEXAcqC9"
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
