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
    "2KrFXjCVtUUfsU6qrHqH8vqgaZJStabycnBNKvTMWvV1KqNV7p5j5fShXZ25cbAKVA5JDnkHFDmHjbZJwCrmTB9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w23LN6Zt6YEaW7J1ubv1JJwdaFH7gdgFjZFM1ij6zHEqHHUX4aPLzuX4cBaCfHnCsgYyDWLhsbs8ntXG8PRN9hz",
  "key1": "3KYA8BVnpqnfM1mikhP2B1zFDHFuwEvMkRzjRekvU3FvtEq67xBHok1uu6wy2gbx6MvTqKD3gux5h5NmXTcPtcM8",
  "key2": "3SwbsVrSH7MZfdFtVvM9NFrszuPoJGq3fC9h8W6hF9H2zJsiAAgQ34CZ7EDiRcyzC7vqj95KgsBnrHQg7r9FiLSi",
  "key3": "5CbzKXGNBJtkPUXTfe1uov2zxiyqCvTFhqpQ3569qiJstRZqXvoun88mn7UYak1QNMPif3KL43HZMXVSdZe55n4p",
  "key4": "3CMxGxJGE4d3xtMrBDqgPhzFctiZfpYYKbnuE7Lbey4jxRoyCRGn2HqQ4pZWPrXWkyLoEYkX74Ayi1N4XUHs3iZD",
  "key5": "25bRjP4Du4vqa5nzbWCGm4ZCXDwu7uZYk6dt5yLpabyaeMTy6KLCdVqBAhZjJepEGPRMXHj4BmToXjjk5K1n6bg9",
  "key6": "2amSqRKVUQB7Gz2gDBWen8wzLR59wwmiHw38PVMrPAbmvmpgN8xPZvXUXqGDouTCCNFyTaFdgaEeqJkzMHScCawc",
  "key7": "4Ngss1J1DtqEbNWkE8yTMzQCspEt2EfFxer1FGzEwvkAfAtNVJ912CCNuDpvyDGR6AG9QV1ixX1dnUJbUCir74g8",
  "key8": "4qf7KQw57cpFZv8493M4fiz7eH69FD6VSGaxgYN3Xz8Nf6sJB79KwjBxQPHAEtam8KxeNxQnMyuLNfLdcu9nTXsi",
  "key9": "4XebH173EwfxcnLWWnGQYMr3g5Z4UJj9vVGSiQMWWDhS26YR6zqejKweHPpVg26dNKonWnYh8pP4jpRMphLiGPp",
  "key10": "467aVV2PvedU9qr7RMdZ5AesP9mZUWUpLq6k6q862StP1oRWfnspBUa7akHaf5WEevow43wPz6zTLehUsfBB3Tf7",
  "key11": "5iaF2Zo8345zMYWkpbpXso9tt3htegiJg1HuC64BJi11YnFarsikYGSvvycXZhVQhCY5oHNnv6R9EDhgzCsQ9NCE",
  "key12": "3iAtrsuA15VxEd7LhfdfChPCB7KY2Zj7VHariywHycfbzU6u4AzjbLPGsMQZxJzaWrrCAFvomzG3meyXj1bKeB16",
  "key13": "64M9Lkme2o3qnKVJAEQpVJMRAJknzAQwKY5Rvpt4ec9MPVae31G3jUcTmoPdmVxcn44qAo7Pok7yR1aku4KXcePw",
  "key14": "4A239vZeJXdQWRGQ7pyy9icR2n7r9niH4xiaibpodWqz8jbEWP5skRHkKFhKCqvtvW3BCh5qvP41vbVwWvx5ZQNp",
  "key15": "4MvBTFJV93FvZamaspyDsS5XuGmPLz478fG9C4HP1mZ4bmCPo8RuZpHvecw4WgxkKCNzrpNWWJZLGuKPizBtjbTq",
  "key16": "4R6NjLXSt5r1enaqdJLMXjPgj6cB6G62Mwig8z5FohVsp8wSi1vU9nwKa2ofxS6DQdhpkUJjVwo4pzRhyDTo2kvn",
  "key17": "4iJjcUfJTguZvqXDeZasLZP9REi4GgcCT3yoMitbBnsYUTMobWzDpsFpQPLkPNG8xYM7NtQjnCFTSDuicZJUEcAa",
  "key18": "2UmoJXcxQ3agbX1VTi2d6Rt6NK6x79LVp33V579a7GdnRBGkeSg7GjbhHG9kZf8B88gRS9v2RBTDq7ECnhyHxgLD",
  "key19": "2CvbXM8BVK52Pou9EgngNmESzYd1N1exBU5vhotSqWyZAeWxgXkXcN2nw8rEHJP42GGdN3TgMJagEmg6zANPf1Ne",
  "key20": "56Hokweg8LUxLvDRy7yh84678EwxUk5ZdE9Hwkjy6JAwmQsvfYd8p9332iTQkBdwfssphN6SYNzXLEZVB3wPkvV9",
  "key21": "25A5NdW24mdntPvFf2SSFofVKdFcmTTZBcAnzAdHedcJn9jnd9TmSsu6Je76jWqQ9EoHabfXgPRzWCfvaACxPq7J",
  "key22": "Lt61iR7CTes8TmEJs3AaCNAQQPN1FC5dZUzqgtTk8q9EjXHVF4ys19NXQA6VYPpz9gr5GYCWE4RNmuH5cfgKaPi",
  "key23": "3uiV3gjAx5fZHfuLyjqJ4cZcuPFDV6zSaBQTBzbwAZ34mGFMmLJpD8y8FywdhxQwvc3kGpAKemUW6QycMYWjnodX",
  "key24": "5vNEag8LRKfe7WAhCg7u9xG5BGhqRmsUMhnidJWh4nVmnm3eEhocPgzZSXE1BVe5ze24QwzH8T4Wu1rGr7hqt2Tn",
  "key25": "rUByoNrKauDiRuAfWJuXLyZ8qPdVBCdE1ADSM4vWbdmz8RyDycFE24nKJAchTucnjNWe749xMov6V1Vz3nQJwVp",
  "key26": "2W1ttCZi94SXKP7ZLrKbS83G3y285tBnxpn2ejPL56bvSZEU4dLs58BFqTBYffkmHrycS983hsqFQQiNSHQFUALK",
  "key27": "amya6EQyAgoDNSKFv9qMpRgFJgXZq2nAAGT1bedq51RNEm2xUpyntbcTvKvV25ijeGT8UYJhvxNNXnnqoA5csvu",
  "key28": "481Xhjn9nyy9R715MfsXfYwRumLf8F1fBStUbQAjwJ941PRLsPjVsjgRduZFuuEn3eea3gVHn6eTxWFVJhdi9J8w",
  "key29": "5KJ3c4kTU1SgtQztWJ4gBXSgkXycVMbRJ2VzeNRCqPbdRLUt9p4yWd2F7WpLg6C63gKDh83x6WiDzxSd5Qm6G4eS",
  "key30": "5Cn8X1QNeQGSRfGE2ANbxJYwPLxmnXCqv4iaBF73r7goE7vD2prFY3mnoSdm9cmNVo7KFYbSzfSyth5W6ZpgqeaN",
  "key31": "HjyUKbhfmkhUgkUrmFiffidrHwBUfWBCbHh5UjsBvQPxdxYrWBdtKrNVx6jdRXNa3P2Uye1a7FT1GJU8eH6XhcA",
  "key32": "2zJ68NsircDd2yvg8TgNy6Sjja67ZRtVJe7hXx4QSKxog8HwqCwkJWwLuSoFWb1NtpQKEysNqhxtWs1gMfFPyEFA",
  "key33": "5GzWtESuLS5d3GE9xMjtEP2CniyxpXP2RYF3F4sYMEtSpzfpcukGF3uXtn9WhVZG4cvU6JPM83VbutSdywNmVhiS",
  "key34": "4qPhhiqew7fbZxJNeRXmEt87tH5mG916ipmGBJ6gqh1SEBhyRSLDSQtY3a5rHVkuz9hTq8GbzzqUrzT17A7pyc5c",
  "key35": "vWgS1L5aqkzA795GwSMzsxa1en7kgCUWY5dBKxk5pXt12VHzkqtmDtEhXbnjEAVMWidKHpVaphgTdpmDeFRahui",
  "key36": "3HtJTXEAW8gptVK4hf7E4Zb3cVyzkuHC9Bv3hqWyxpSJLH3sv7aGpkJycfPFT2Cr1sorvrTKdAgr18F6bd9csuJB",
  "key37": "2rzG87g3R6wKSRTdFhKXFBbmKtCxo7de5cg9ZqFdbW8Tt8jofTHmpgqcxVZD13c6NtgCGjb98uragNxVDP4a7iXZ",
  "key38": "jXTkMNrVYuNqsngfaHeZNDucGWr32SU5tmwsf9gkXpnpSWJPB16zmaTZHMm1R5aW6E2mTJ7Pn156fCq5e8FAtfX",
  "key39": "3ujFqAvVAoA594caTVL6LKpmz4wuKvfgvf6SJSqnXZwvRiYMh7JcXTbTf5BV52VGrfBpwF2tb3SQxHMJ2wUHR1Bt",
  "key40": "5BQM8yCNYKg9kXszavW7mjaj2jR5pmBhmXxNYAFzKNedYkExyeAf4vmWD3U2KNJpKG7S6icAFDYBUksJewKWVh3f",
  "key41": "23d4grmP87zHn8h8oYJVhgcYcqdUH9iFMfeNrYBc4LmTCfDvp8mhiSnZzQvs8tfgoXXhut1DtuM1j78iDW7EseYa",
  "key42": "5gFytsQLsW73jXcUbaKXzPPPCFJwGFEfyJzvuBTd847aqedEo6WUn4qiLPTk5iU6eDkmeKieAViuJGvyg54zdFao"
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
