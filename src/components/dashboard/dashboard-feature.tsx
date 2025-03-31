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
    "2LUyHfbhSDjr8o4zyvg1sNEK3UNuYbvDenJiWxKECGNR6Du3Qrs9szxesq2HiBk1WsfoXnvoCm7JdkrGXwpbkpSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKfXvzLJwtYXkQHpF57NZ9cJYBhsUvQDdwrSt1dBgWKJ7daUguUApbChD2pHUEgDTJTnkxxMnovsjFkodLFfiLk",
  "key1": "2d8wAbGB5f6DUNkZudNMgXHXw6qZ2wZXe99nV3ERj2KGCPUJG9hRJJNkssbq7nb6fjcTFBBoxU5NmbX88HMLxjZG",
  "key2": "2qJYD5QiWciihqV6vq8cuRqnK4A32K8sQTjRfMwSxvvx7YmfrnzNtczAj7kxqicsSDUwrYgRCGy9BU5fChHFFGkZ",
  "key3": "23EN1rGASQsqtHkJ518DrpRaGXXRDpPPo3T4QRM3jrh7mdnqiABYRUrDPzkoseBFySEyzRUfH46AnD1Gqb578w6J",
  "key4": "4qd5GQDb8xgiXGwh6nzYN1pWsZXuhzopfocRAdez4G7sPpYVRPSeF1yVD11EpwMeYVFZyBp5WgwZBjZhVhVNkPgB",
  "key5": "UebF2THXFq9AQT8fosNQGYgap8a1zyDCcPvTvUQFzTdTcNTbGfcmaNC7onXUvpjrjP2p2wwDrPrXr2uPFa2aKv1",
  "key6": "4aNFNiWVGRcE44ZGWdv7ieJ2s9km53KMgikXkdGPbyihCQFiERrx9k9YVN1KHjWRmBvLX5m5RS12yQa9RiwYHTX1",
  "key7": "ct8WPRwcw5WXEUSnhQ79sL8sfUTuQs31dWCTki6YTtDV3Nye4139T58yMTumVbu6D6pUaRK9exCAMFpDbj1fHiT",
  "key8": "2UUqmNHdbNicm7pZkEiMPVVjoAzAQ1CmiJ7FSRPRvto7hjGM9jxHfoayQGAKpuchr6uYsAsR1exSJswD9ZuywQg6",
  "key9": "2RhczUdgmxckRBqn897KVWrxM7TFfpysfmUGJikCE3ea91nyD7uvXpBBNAYNtrwtcd74SdYAMxcTUcfdPDdgNMRL",
  "key10": "39VV4Dn5X6pMr2kqf8hbsesF54ZRMKnMFPSYvj5xGFPfchSyGmyfPaGp25CNcHRvQZhfY7pXN8znjMu8R12rFhXW",
  "key11": "4H48FZfrc5RN6avdrJyC92UsFH1XhjLU7MGTDCroBi5yo2FhimY2eey1s6Mdjo5kQEsfWTrxd8BynMUCBp1vK5dJ",
  "key12": "3t8yfkFzYC6kNPbKom7kmyG5L1FD2t6t2JGdF4R35uDQ4WmQ57L4XY3EqqD1UkxtPwdUv8HG7m71AaQZ3qRK3Fva",
  "key13": "5XsTa5ggJJCFVntrCq32FAJxntco9ezYaxjZwHV7yhxfCjTNsUGUjZKmvQS1m1P3fPHA7FQvNQWnuggdQr9Ncamh",
  "key14": "5u9nRbJfnLmuDW9xBbbGEaXqfaKvf8E2mXtzJaiaxxmKXYeFYjEfhkb9CX1fcwoxQAbRLTdFHkyhZryCSXhbDeHo",
  "key15": "2vQHE3aqpcsTnGw75JL3nzNu1DpupXKJRjSRdpTprtqwzCUQGBrtFa8V5Jqxf2ehVdXTLJfxmxLcMgN9NnNGnW82",
  "key16": "37ufPwYDpbP5UzqfxE46eDycYEvVP77FoXknxzPrfyHs5F2yiyFrbSvCi4dcAEusHHWUDUbGv9ZeU9ahmuVYmnFs",
  "key17": "2VtbKKVmhoMN99J2xnjEqzxzuMUB2nB8bfsqEqYL19xdJNJ3W8m71t31VSFHeyrP6YJrbn23m1GnDJ6uquoMd2mn",
  "key18": "67LgveqctnwQDDHH7q3v32Mbezzr15D3WKKUxiLUP5WdFq7iBW5tNkhg4qFe8D6R32ESdXVx3v8rNZRV4cBHLcDa",
  "key19": "2VifejNVF7eUzwAbY7u1EdnkNJZY9EwZqfzdTw4U9q2ADyVNo2mx4mdum5HyRZ3ECwfxjKpupWcrrrQbJ65J9sTR",
  "key20": "zFmTZTVXZvDCZNpWWMpjep1JH8fLBLupo3HV24T37dn1dRYvUapAdjGSgCUqM8ZcLT3rHuBARMdEtyQv2dbGM6M",
  "key21": "4vRjbPoxxGsf5QWCmDoY5crk7k636LDxxeRDv52Npf2TfaBxPAAe84s4e2rKZGRrq9mokEiNLjjhZPDzqAgVjqAw",
  "key22": "fqpLjEewfTcoFFY4rMEBEjrg4p7WE9ExzWh7Hm7Z32hjXoAShhsSYgfeB9zkXF3gAj9cunQdepBkyiQZ2Sd1Hxd",
  "key23": "2tTGMfeFb41W3EEJHdxF2boc8chLvKY42NJY1Tn7pHb1CRBUPHbjg72AiPCxcBhn8h3UZEP57GSqbdotg5NryXqY",
  "key24": "DgjXWpCMcquu7kNCSRe788WxVTbwQqKykyG5VT356HKErJRN3dj5tXZ7tqtoHDgmAR8ETCKpTzgn1NWuShmCzQ3",
  "key25": "5bgLJMkKyTVvYDmJkBkJbi39rGHKH56uVEsiLZ7m6jf9H9SmBku2FKVDs7QiszWkfPnswXV8HDjaDWc971KuVqZJ"
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
