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
    "EyFYftsrt8XeWidieEve8c2h8RCT2CWLYqb26WzUizroNhoG8coLLUw5WQD8Z3V1BEFjiaGq5EzJnRQNUUWAXRC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BNnZe7BLCrMvfab1g9AjXfbmaGiZgqkCxL1dfkmkG8a9wo2Qy4yrBfuLW1MNfanirzpPXNc35s2UYuMNuP8Huxy",
  "key1": "94JMAfjTho1yXAt3jb1wMjnPE9AxKhsZuabBsTqfc9hHZqFQkYXtwVU1fkviAgDz9aryfjk3Zt53QELfeaTD6FY",
  "key2": "3361LaMHAn7paVgEwV3h2wE4R64EGasojyXCR7T6yuRUDHhfY5QaUjQpwnCtApYrF9NofPysxG58GGbRbA3diUvH",
  "key3": "3pNTv7dfQBatshuGFfyFP1CsfrNJxXtcFDFRYNvrBcBWHRdk5mQL5DuNosXDGNCtZSrzm7vZvkzNzEnvZMtPTe6W",
  "key4": "vVk32dSTiZug5gztL9kReeFR7AwNah2Y6g9UF2bNC1nwfKsNvcki9J9iveSvdzuPEPjEKGyYYwMrYyA6VvNrs14",
  "key5": "4NwpNaFtTAT3DvbTxkmpV254Rx8ZwUmTVQiwLSkw58drkTGVCMzAbkiZLQiPJhJgRZkg7YPRhz3dXJNkcY4D3yp1",
  "key6": "5j1QykjKFvLQX3CAFNojDCU6Jd6pmko12ZqJEP2hjMznn6wh3DRaCiR1WuYTKyfZxoCrSjqVvZs3jJhsXquYSqMd",
  "key7": "jnRgTxVQU3QwWLtRZLAEfM3hQTsHKaJALJDzxVcGTni5Zbr6hw7dxPaUbx8NRSr1XfzwHBYVKcormzWw8QZs5yn",
  "key8": "2DThS1srDd3qpKSvN5nChjtnrL95uNBFSffi3XVYTC5wKVpwzxnfEVMX4t3n8CMtaCbkoFR2Gp7oG4qeCxddVquS",
  "key9": "44wJLBGUHq76nYpvarzeN8WMUZJCQC7rmm9wiwBHYcQectZwZn38JB9vDz9kzyADxYLw1UM7sYHHmLzfuUMJBnbA",
  "key10": "2937hF9VP95Qq8NtS1fTv7SEdC5wN4mi31ib8yhKZraMTkAWsD5y1TkdjcQmBp7q4GoeKfHLxdCPs3xdSSPDwnxA",
  "key11": "Va33dkNbB9ed8HrBYcHJQy8RGdPhaUoZbQ1Kwqtv6hpgVDytqZvw54pEG5dFEMBEyPzhtMDP3QLwqCwp5tYXCRM",
  "key12": "44qNhzWLyRjkLR9FyGPgyTsePaEwwRzWXX5qHCCBDZ4aYUpJDtArejjXhFz8MriDr4Pp8ooWfDuTKMGEzPrSASUs",
  "key13": "61Vte6mreBFWs7Ah1dLSQFPusb7npYDaZhgqUgQdzXaLTDa9LnEMEVi6zt9ZnrnHfhurSuovXiXujpu3YCvfgUBs",
  "key14": "5LHZ7tnGSDE3BRCWmp6JM77gWL17NvLq5szRxvH25A5ftCs9GuHewehbWY2bFQ8Xuz5FPxe6nyc4CD1oN1u9sAkw",
  "key15": "qyhm4cSaDS1KevuZhxH6WLWVKpWNsApJTDT6udVg1yrmP7JjJ3uAL7jZNWEgJ6yEuuf6ajY5ksCnJfPHwePYRap",
  "key16": "bB3gCaVSkuSJbi4FYKhDH3s9iwNyY3tgh9zoxkahLg1GTGsNVuXcSiksWXpmuh3oqEsC5LsZLqszTxJcWQuLfwo",
  "key17": "5DrtJmYtbMXmmVPw9ewGQwq3GhD2WyFgN3jcjMSvCUpfyxdTzvHQZVRBEYwUb6JEeA4xjpWpTGfNCUt2FdF18zXW",
  "key18": "2irfJR1DmSdtrKZuRfpa2maC2phB5R8geG6gvy7CM4vADdEeAFbRqNENCkyrXUfjiejc3F6pB8HJqC14G7BGj5Va",
  "key19": "mz5Usg3K7p433L3Sj7dhG95K1YtDShjnNRyoT3upJhmyArrhBfTmiwrehv8xn3yxYi546ksaCuDB98Skm3FkgKR",
  "key20": "fMrqBd6jcEXqAsDem13JdBnnWjt9kgdrrXVAjKdo74SmYEVP25uc8skS9YYU9rziqJq82u389Z7R6KHGADxq5cR",
  "key21": "3V82e2e39ioDGYmr4GwxncbCadAJfxtWfouWnpSdiNpW8XhbjTfrJHtLULPo57L4qgsmDYtNBFBfyYMz6wsgbG4g",
  "key22": "25pHi9xZZZ16pUNPYujpTkqkNH6SfAmZRNgwMbD2VQavZdkcHMZoCCBSVvZbPGX72fShAG6ijegynu8oQKcmUibz",
  "key23": "4AXzgd5UaJyjD1DLzAaZREaLbpVdGHddZThGZPd81Ec9u7HirzfDfefQ1jcMhX1dWk8GbnBUc9r29wV8r3UjDMe6",
  "key24": "Mbfad5jSTPkEDkhCUGESs2SVfFPg3n5pXkCmLubR2L8ZcRzWk2hjxnbKb7xJS2emp5WvQYAnvcjqWwarWFge8og",
  "key25": "5a9UFUmFqszWYKLCVXbKfR1yJUnHT6RBM7egAkSj3u2n5qcEMT5TwtLNZ3xBdzCDyEQDGxay9mDK7hQnmVxLVGgi",
  "key26": "5F5v24ngFm61s4unbr86b2pbf2yVXxawSpYswJfLxtDU3j9GP3Jc6aVBy6By4JvSNpgDR4qrhDCfHBXuXmKHRJz2",
  "key27": "3YBh596gkj1utJGGcfqSUtbjx9nVRULy8nfyZ3LJE2NkGEtYTZinLzWGDfMUhwgTKycmLqZgGRY3AaWxfsyoi7XN",
  "key28": "LfLQieAjsuUgL8kwudHj8KqHAJjDqyt3dFEoP3ZXBmL6uK1qgj34QXz525FLZhGa5sXaQy8TUnchjVm8VWGHRSf",
  "key29": "2XZekZGBMYRpkcCeUmjcuCog1AfLdhE34E1YLRgFqR8m25EVFtN8ZrfBBDhVrmku3RPLY3jXUt4fW1MTpSyTgf6e",
  "key30": "2Qt4Wuw6iPeups6THRvobMNqAjVw7THQDc736AMs1yLdB3pY8qF11eTcQQSLGLZs8GDkyTCvig75XrSWwxAZ4Aw1",
  "key31": "5cCLLjuYJ71Bkmr56cjSQDL5DpaVSk1F69o4G3frWL3YU3S5YidxMJ1JRkzkTM1EDgnvNBvy6A1y2h9DDcdBUd7b",
  "key32": "2aqLC3bV3GoaeYbXpNtLEqTsDzG199iuX2HGJt5Mu6DzvyqxPahYLBso81hugPcvRKMiroDjdWNNBWb9gdSaqSSg",
  "key33": "29YSNhAPKLUVUGvsehTPAWpiorzLrWLNUt5apFBbroLECwHN2T2L3KADz3be6ybHoLTTeborj57ukaJ3vtUBVe8E",
  "key34": "28d5D5uoTmcubwwbh3exV6XuECdzptYn9SWqY1PSQTUHs4JRBXDNkYu2qU7UgQioBYoAoEvFNLgWmB228Vwp5uo6",
  "key35": "nyJRb9nUHp9CxWSernYECB4L2bCRUawLjjZ7EEKJq7Sqv91bVocEXCNmuHU2uuW632NKy7hU1T6o7U6E2h8i345",
  "key36": "SuQVzxUkScbihYTMNHbEcCavmk3nBZRtUa9KxWaPZ8bTSCjW1KU3TWdduYySF4ABddgcba168FHoH4KG93aG6P2",
  "key37": "5vJcBngvWu4heDfddAVyhdE8jWRQYgecyfGBRusvGa9zPjE5Lw5kenHcmwUvVLopSywrAMHHsRYAug5bMRJDXD3M",
  "key38": "5HKKUhHxcneR72Rd9gmoSBuHRmJxVzFAq7qDNcUXrcveMXrhKX47K7UXNH2BdpwjfnfdrEj1m6PNzHu1r2sijiEc",
  "key39": "BjQgNDTaAP9mdU9YbRcZ8kvtGLhSTDSQXnmtohbndAQrQZvWeED4mVLRXDkYgSm7hP43ZWc6RoqYpRoZVh7myci",
  "key40": "3f3Ze9Aw2GtRzdpiXNFhCwnwr3jwswsrYVe8pf9LL3KvDb854xEAmHs3ZsGKwnWTdhECB4kYBTGYFrJFi2KYwU2Y",
  "key41": "3x749KAM5w4osri3TANW4m7T7hS12QhW2v26vX13NLCYFq2c9NJYu4iqWmT766ZCBZ2znD7MprS1BGf7R1ysfRKQ",
  "key42": "3EQ4w5ApcQNay9PM7ifwucZX9GBi5tV7LCowvW6wS34XbFrti2v1rSwfb2MVuACVqp2CA6NAGJdFid3Y4z9p8EeP",
  "key43": "66BN5qfW2BK7rDKdeUi9uuxDV2wy3gReJzUqcbMspKkXzVmTBBy4Pzsow2nzu7tKKcfQJHsDVCLbrQS7PeJMUuMp",
  "key44": "9aNYQzvkAy7rb8jnReLpbb9JDp2kM4FQLjWWo1Nr1nJp1NHKNmCzuzyVdcyPogpfJFhJhoQ7Fk86ZbZF9EFgUon"
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
