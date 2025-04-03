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
    "2NvBE1KzkB2Asv1bvH6R1Dt9bKMcpR9mDumyKb5NqzLWbufotmqcg3Rwd4Q5Bnw1MMq8C6RgsY19rHURzp9jphRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vZxRvK2mnYZRnVESeDzTcSGWoLRbRfBPTAWd4GKEQ5a5zVv4DZmRncA4LoHdpmAomp3Ji8NFL7z9y9XGT3LBzWX",
  "key1": "63tb5KyU2mDKi3bSb1gxEF8UUjANYGkvGDUhXMGEPxXcMBLZvRsiNTunmowVoH9C9XDqRS42thmoNsCYi2PY3siZ",
  "key2": "56fXSbtip9GwPsuuWMJKR7Lr6miTJvD53ycEFfmLKuGcg5UxA24DSDEJP4HBgGGBmcKQR2gymiMCtMotsGqDp3tV",
  "key3": "4UwB6UgRt52wEyVBvXgCdyntntJrZEiwDnU9WYZ4XXfcWa8WLsZXk9PyVvyzgt8nJTENAaRaUNHTGrt4wpGbCAr5",
  "key4": "3SazM6tpat9W856Nurt37yCuevQbAmRMvw2mYyE83YrvNouwWT75gmDxMxTeUQmxPVJbNE8qr79Zo71VznT4xa8W",
  "key5": "2uHztQg25rnc5s9SCcH6ZSZg8umCdm7QVhSr5CNcujQ4VeKD5ihKCQqFKr16SbYj43CCsmhhHsS81SL2gQHqhyTj",
  "key6": "3qWkEkzHBFbKyhSBvJakCC1FZiwwdrfr61xws5Zx4C7cERLRBaPmzARR2AFC4AeqfnXpMsG4vnNFtmnVABHs7YYx",
  "key7": "4gkUfh3yswxQH17cPNax4zNBH742w6dfAMgfwWL7igJTnGy5M2mw7B2nKzUSo8pdLwwWmxGAWDuZB4356Xkdq2wp",
  "key8": "3gY916SvgAd1iybwzQxgcF4wxctqvvTaeirssaAR4415LtVCVKzTHADQcPLjGUhGa6AAVgYjc9WsSojcPwMmDPvv",
  "key9": "2Wi3Y7fmUxYUF4fbvx4QjLFM4uEQGnkYUAor5AvwHXidKPVrh5PRW83fDG6PF4UyotLuKFHFLimAsygnGapyi6tJ",
  "key10": "5ShLXkEJy9d12KaiBoZNceVfstUvgbumrWUNksqBCiV8T1AbaUWQDWAisHqybpp8fqg1N1BYyzwDT6mUKkKrUFiJ",
  "key11": "5NERJcUgGzzmihEf46czzwgjqtsp1U18BeNjUYCNaVgKhgxDZD9xCNkTqBrxNwpjRGdUmPsMBJrvwjhjvfkJjKSU",
  "key12": "3ohscucE4vqMzMeVkur8AWRutdGfiFvvjvpHXmr1SUdfdnqNmMKQGedgnfGgE9XtrNpaSv9jAx9tpPigdhzB5tqV",
  "key13": "4pBctAHmSEyxMuwLmDH2hYE8T3yGb765u8K73nzKBJDdTMb6jqQsXBiawNRpse3GRUDGCNq4MmqRjsEtex8WsG44",
  "key14": "8hRCzfAMESxvVYpSBevatNnVCQVPBJtMfrTLJEwLe3vDavHAat8eSzTNbyYi1nPXepWZUQ7aLWHJwBT2QJVCPAt",
  "key15": "53ARmfDeSQc7TtAKunzufGbzuUiLxDX4fWQDmxoHZV7EwTkjndJAQZPMaW8gHxUBqzLNVYZzuVAkark4bVTGjwGp",
  "key16": "5MUHeJ2guGSRewgDe8RK95nWej5983fW4uvTZ6hkpawxn4YHp7vKTbFtMAnsSSGFCHKkQDjcXd6JjmjiQbUY7VnY",
  "key17": "23gDiNKJSjExyZYvwoand3SEQbBFWbvNL697uah92tZUXge3jNJFZCw4QJJ18GnbDPZJYeByJntHfFMoau4d1UMY",
  "key18": "RNKd3AhFU2C5XBCwduD7xaofeiR491CvFaXAb359hRwwme4gph6t2D59t5zdkU8VYGp4kEny8kuqNzpXdGgareQ",
  "key19": "2xxHkNJAQovK3i7XoHbUyB7v62dt7ZSw4pwC4wPUHtekbEjWQ7w7Y4oUiNoL8DQnpceBkhSn3RFpxXq8uLXeXCgT",
  "key20": "44YpHvLT218W34mMi9SqvvLCabSsUNzwAe6ZSaVA3c6s8aUxiBmm1VbZGMGj3xNfBFFnXDFKi4j7UDXfCkei665y",
  "key21": "5ZMN6YAj1WjuDtejAgMfo3M752z5tnrkS2QHAqtDkDr4aAgoJSGj2bsJS1dMx9BLCt8HdW3gTu779hKWALjMav7k",
  "key22": "2NqeoEfNcPUQ89k2ZGAAcnWq85JAUpx2oBATHEZpk2NrxiBwWrCCf8vh6wRNmh5QFumVAD98ZGWgGTmN3ke122Kq",
  "key23": "43ByxduXTH3mwMYCEuXw243u3EbNMrbN3sRCmS3ktj5VsAK9ywvZH3w7NwVdouda6WbeaRZNfsj9oqaVs6wcacnX",
  "key24": "d1b9pSU4ShSfUpw3qq8GNqZZxnYqDNA6Sv4nsiLtaFAbz4n7B2uhpS69sY1WmnzdH5KJxBQLPkLtac7vjbVV67G",
  "key25": "4uc8oT6M6oRBvWMoAnsPvKkCvL5tYvrhnEq5bw7R7NJZm2jEg2Ni65NPyroNxN2vTtyDbjWXdi7Uo9CPQEZqu1Zr",
  "key26": "2qfc9Rxch6xM71UkpYtVLeGqnDTsHAqvVR2XdEEphG91YW1cYRb37dj3ruCaBfnJMrNsnSt2UuzvdmngHXeZjZsh",
  "key27": "4a9MppvDJfE1NVi9bzSzWPvZPGp7e5DWCAfri3YTQ9csxPSkSLeMENiK1ppFGw7C4uk8d6Hj47DfbUtMBDqgxF5o",
  "key28": "4FWR9m9stt4sra2FWXkHzVLdnMXpfHQ8P2Z9V7zahh8tutDZDUDiuSekjRxiiUESVH3prctWBZwRviVGTD6kKw5r",
  "key29": "517NKjWtJBLSx78yfJuZeghPWVTbctr7t2Sr8WTjK6rWUBntKZf42i3VsVmWMC6C7y1V3a9pvP62yrF589BTSZDm",
  "key30": "ctjz82LGbgFiMt9xpcqrnRvuyzSr5bpcp8f6TBkuzcs3rcWzTnFZbxx1mjyQJodULmwhfHZjVmgDDgVyovX9Htq",
  "key31": "2TbhXNGwargPX6ep3JK4DR5AH2jBQamCTLBs5rZPFzLQmMq1KR3HsPEDXbsw7kHfuvLTkwPTRnfGD3C2hQeCzriE",
  "key32": "24RXqyfe7gU3FqYmQ3jAwHzEdU9JAnq9PSqEtQzTEnpjc9twAFvpZUSv7MYtCxpS5xbVVXGsWHuRtn3Lh8uNYzLy",
  "key33": "2xQNpap6NeSUWaCfeR4U1iKyx9oKwEBxasEFSWDTRguoKj6RRooErqM5yK2iuMBDVFiP4wGBRfx3BHDGEbYZqAeS",
  "key34": "4LRQjLLnABAyhEcY9NAxK3N6jtkvP24sLupQzvDhF1PFZLhpaQwCxXAy9iEVojgdQaSuzuwBLUAdw5GTfCayPAmz",
  "key35": "4XJDxv4HUVPUAZvL8rE4q6QPkjesZNcMAe2HhUGYPzsVu1vhZTQQxWiqfUvXcUJSh91f1NsTB6W3jV5reEQX8rNM",
  "key36": "3JemoLVZpcChTVdLXGrP2BLdiGNJknkFjaohpf7NbKCy8JedWzNJoHijGjU769PE5kDBJ449fxYTbqLTBM5jdsEs",
  "key37": "67B7HHXzhXgGTU5THNaF9wu1vBvW3vggqatHutwEpLiNcWmXVJmNGQFzdvteL5up5LCUYKPvYp2Si9woYakZ4Lzx",
  "key38": "3pa5GmWmnq4LndPUe7gamjcLZftTfK8cQvZZQFwPgf4hDYy9p7AAPJgtLN69fjVfrvy5TDRPk9UvvknhmUjZPSfU",
  "key39": "2twPWDSvgK9Uyea8Vioy1XTDPFJy9FrMF7xziSJKmU3p8NwR58VZpeSYFLLn7cazRzyzPcKk1NWNTvNFxXWCzsMp",
  "key40": "4cBNjcgwy5JAUSuXNM8cUR9svG8VrswyWENBGZnksvz777fEtqPiZReFRQ9oaBE4697vKKxcps6NVkZYescurqVv",
  "key41": "rCE1A7DAYE5h2TaGfeyVpRPd85eQek9L4DVinxrr1xPU8CtzeakWqfoR5n3WZJVd7iYtHmmVGJCA2SvZjS8R2iF",
  "key42": "4thHsW8DFjqWV8qVFDrYcxGdrxsfXyTbhbS9Dw6iK4mcCUbF7Lk6vpMyPudBTPypdWKSNhCLACRjqiEhMenhCgCu",
  "key43": "3RaPDpWZRUGzTfS4tN8WeszvE8WgtLp36bocn4L9wUjuvuQR5gXdAK9MtfAQer2L4C2cNVjRRgLw4ZPMXJRpwYRP",
  "key44": "3P7oETLLjvCY2zMLKNZcfHPiN5btmXUskjdVVtDtPSoX8vhmDvwSPZ3YR8w4KKQP2zw8RZWgXkBtw9MC1yA2oeeH",
  "key45": "43wXWB1MqyWDEVuhjwHUeU8qQofQnt9LgLj1xMDpwyhyyNvAWMkPkHoPWpU3jxC4gXtHz58EW8WwhG8oQbtqMCPJ",
  "key46": "2f6AbhWqWF1FZggqZ4grkaM5btgDht8nNq5okkQNWZqBjvAwCfxsiGhpV4yzL1tNRdMRYoXwB2HvikaMq1vUjiSu",
  "key47": "4HRQzg6xW6Nd48et3iX2MVqeEQ3hWhs7ZYf55F2Nuv8TeYmhJcgkE2uaQWx1SXVwqY2nAUUDakP6FekJtmFtxAUf",
  "key48": "39fwpiYJrY7DyFL8FU3k5AiGqFX1ciXFaELsfU5mnEaQexzhj9zCMj1uGmGbtrBwvud2puKyQxQAHy5QymLNLAgr",
  "key49": "2ssxbbQzVEz1vdXmyQXSPK2hqPSkCbN1shV1f66WAh1jRm4SiLv45tN5J3YQ5hHFVkU2hzpG7Y38DvWwT1Cg9tna"
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
