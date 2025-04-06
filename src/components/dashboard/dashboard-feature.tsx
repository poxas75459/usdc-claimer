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
    "3XwHuhTDAoChAnSwrqC7vrG42HFoMw3f1Zu7FE5ugRJvZHEiUvhtvgPkPpRAXuy7YFLWVhVhqPxAtB3XMxt8hpT4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jxvDaheQzkD8a2FPB2cXaT38sg2rtgd4KHmCBQ4ZypPK2YYiLLG2wqx4iwgsMPZaSVKiLP54viHisU5Buc2zja3",
  "key1": "2wG3ASuKuMcNTY5DvGzaKfXi5Y2pMJaEHvnjTynyzBMcjxwnVwSQwi5TP1FU6PQHUJkCgFjTMgza5Vvm1wcHjjCn",
  "key2": "3DFqEVsXxje87B33EuSCFzcdAnJu4hGfwYrfFZF3CxHZvUebmVkxgRge4qXMWzcidzbxi4erDWchDNs4LBqYFqPs",
  "key3": "5efGzaptEGeNPV5aiG7r4NSe2rYEExfz4C7TYdvefBSjftcQpzwMb7vpXatkmtCApTXjKYNgccMYMz1APsDbemsk",
  "key4": "3z63wDQ73eGfF3oEvPr7DRQsX2fDQzRFg6jHUp9CsXDWCvfCjV3jv5nZ2qcGwokJWEa1PeSwBrvxradUNMFEVLVr",
  "key5": "emR1GjgiYCUsGsdB4s6FiNYq83RWKBx6DvHBX6Pc7t9stT43ZfY7xdvZLjiMJPSWfLg6WvCQmxJoKtJeAswY2Wr",
  "key6": "EfhkBVUWZCdSys2RCmYYrh88HKhdZX5XWr51TPsxjCJQoZNaJt8DLbnUMK8SHESSsQCw21a9b9BJymRhDMnoN97",
  "key7": "4jmvC1i4saccK4Y15HPmgLh7Xw8P3N2Wnofch5fGm521y3imACEqfgVjwfTnJ7nHn9SncfiooD9JSmSJkVBQuvDa",
  "key8": "KK5nJsLdhsEHD8QYGa9tupGJdDEnnrDJSN3nfMwshkaquw9thEQcCdEvQTwMpTbGnhFef6qPU2e9zkCBKzHjuTK",
  "key9": "5yyucdt7px74jpafHRUKebLnVp9CMkgPcFqLQVUEkhFXMWD5ynoxRNXHenc5sAC7AS8qvnZby5fgiR12VaKNapZD",
  "key10": "3m8f46tvH78fSf7QdzcXd1RJojh8JgKedYxGs5nSPno5rRZHg1VCfELkT1ppZCzVN6134wvZTJB5Mo2mLLTAh6nw",
  "key11": "5QNdzwEAV3hUpw74SUJxvV29Jph68zNvAznwQDmNuuuHScoRoRGpfrtNy2A74UoFX2V64gg9zm2E1PYWkfokLWXt",
  "key12": "2xsEnSEtyoiT1L9r8MBNuuwcvNXhy514h2pWUyKNEwk3WMwCMZq7q9usSfvgCLjp2eopa3JMqrjuGrp6siFC8b55",
  "key13": "55wNRHm2spsNBTAk2xWS9UhPWky5NrpeTriw4uVpoRtLK3TCGcKWWvzFCE9Dh4EbVVtNtcA7sHwzQjwhEcBJMXdP",
  "key14": "3sV9tRshK4pWghqPBTkV7LGGaNPN1uFatUYhPCPFuEN3vNVcwo3DGrmSFbsyTaqZ619vCoUxebn2J5PToKgJyqKR",
  "key15": "2Uvh943YgfjDtx7w8xWZfvWP6HsCXpjqu3WdgL58r4seZNLUZ3zuUEat4foutDR456cBrPZgGRoyrhBZCpgNjxna",
  "key16": "3mdykcsACjCKdPPWs2gLCtd5TznWoAJkLaMWAzZhXe4f1XRN4P8C1Ufbsm959MxW34pkCYchSqQoxwgcvoRgY7AW",
  "key17": "5rJJLfiXMY8XUuBMGUMR3vmCEXTCjjZUQ7a9qUmrHiuxsKj1hah1MLSBZXjiYukCUcKzzEBovPny15oB5m7n6Xs3",
  "key18": "GBhgoFCbVKyojitNXpGXBwaASJwi7JC1KjeDoPJRKSJJNFsCWWRYkm4NjREkUCGYGn4zdtX9uzLQfNgXau6Yyjs",
  "key19": "jf9MLS8Ar3j18FX2VHupY8FVJMpJXLfRRVy6DR38B7C1dKLeKVZkLGphwqQYrp3ujZqnViwdqYmiLydd8soFRTM",
  "key20": "4i8F8Tn3FkF7U49xQzQsp35vkq8kdUvUGuELrqqPaf7WnttNp9bkPoue3PLiaLDpiQFnKiCjvZA8ZVvWZJwYs83F",
  "key21": "fjGbVvtHE3apqAsEuMcRBo2HBfYWx3dphmMmNkXo91EBiE4GVhcj5ocyC5Yt3ZbjXd9kaKCbpmaiggb7E5XxuyH",
  "key22": "41TSBUj3rzbfwYfs5LQbQtdXBoCQVaYDPxtFebfkUL3JNiLg13oeXSYMQC1SYfqonbsJ8vYvLpsNAf9sWJPz7Dwu",
  "key23": "gXjYNBvTn37WD7pPdDVixqMQ1F1h2Rf67QJ9aybfiChMiH97gPnjNE7bvHup5Lpjh5ciSbcydaLjw1cTZZAzfcU",
  "key24": "331249iyuBZTSPo7Rd6m6U4NkQbrpoRx61DHnZsS2FMnRuFGKbvgrgM9p3Hg9Xd38cRmjGGFC4QqNq7w28YG9Cm7",
  "key25": "257y2x7BEYRHnVPvyDy7GZhhADEDk5zavTfFvFeFDtbPoxaM3J7ZTwHennGbcfftemkh7DjMJdy4ko2A4veRY4JR",
  "key26": "4zHDQ9V78meyctAjMk4Xk98YSt7KPviAXPpcDoQDzC9kQhKDe7a5m6PocqxPnHuQ6Jyhe3pand69hCTwPNQBhxZC"
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
