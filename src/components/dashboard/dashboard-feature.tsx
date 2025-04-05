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
    "5RKEMMTj7nwc3MdbvzXRbcMcKzzC5biMXqKbAvaV2X4TE5n6ABN4tpB5jZBeXj3RNStNaCqKUixTfdLb1xqkP7LY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593gUua4vdBWy88sMTJUWPkQm6yLaDMAvFLbLhjbphp27uncN29id17uUpeSttdadRwxSc8G8yaUvfeXMAgQn64h",
  "key1": "rgDtuoMtgrUejv9n66sJn28rvq9SLRoTRcy3QgWyZbByuLhVKRrKyFueMNMogHJAwP8bekCu5tiwMTGAXNTALnH",
  "key2": "41z4cePvCfoSbSf7pQXMS6nTUJt83j22SxbbcLVM5aVWnXrCP3SX7CMYJ2kfggSqwcZqfUB33RqWNumZaztoQ1Qw",
  "key3": "2tXohDDYJM1ZSBvTJpfW37Xe4ZBjyfQ2bEygptv7C2yaGfbK9iMt2HYCRR2o8wJwaDBbLoAT1PWcHvSRG3yLEhaD",
  "key4": "5AASXbzEE4RSNPRKVsq88pySQKLNXk29aSBHwUhaRAtrATETHt5eH2U42gdY26cXoaY4B8eTo7JruZVJz3CknR79",
  "key5": "351m4BcBxQXvfAEDRgHfXTZNJxa1z98vcGaUqwHYwZ6i6piZEyB7k6bQmP7Ugu6pGMJCcxWNV8zjHCiGq2kgxmwo",
  "key6": "2Ry7KA4etsRc3dn2h9Q3ZaWkK9Jfo2a4Q3fTD4MwKwCuEhNyPUSHw13RciJnuMXgMHDPE1jmKp895T3CvSgtqWUJ",
  "key7": "5vxjpq5JXi66RKJQzn2vFFvHdJu5w8UcqCLb24ZnbV9V4dz2qkgFXWnH5mJ4WCpnYEH4Yqx6Wwxat3inb3As6tZq",
  "key8": "4s14s8X85ZRyGo1tFG2jnHBCpyMXPvEv8kqYTHB4y4XtYQzUaHmDvHrrP1oHVKhnS9kfsRNDbh6CZKyH7PqWYwA4",
  "key9": "5jsU1mmfDZkBBWV1CvgHZRfPqmYu3igrvk6QGgwdzCfLKaxAUc8Qx9BtLLMqK4bSbuu59LWUg8Za44vYBbjDuWgo",
  "key10": "H41t2xq7Yu8Yc6QH52FQzgzjxPxr2bPaXJPQSoKeo9QiLasEhKgHTma2DNSADmSq2XRCbAqgxSHejgCywGYzqoC",
  "key11": "36d7bxTYSr3QNzxJ4MHUiYzKBgGe9pggc8Lbi3sVmP3dATFhhaGewSq5TezAYYvc4yECxC7wu2qLttCzd3nF5uFN",
  "key12": "2XxPojjcAcCWpQ31etsydiiUmjatbGoKfH44p46F4et28HJAoF42258w1SgPLcAvHKHwTxPdTekBKCKVYBYhdEp1",
  "key13": "4gvhLbjm5DLL5Jt4znKcK5ZX7UfXGdbGdUxPSeyVA3VUj28SdfuS8n37Mo2o7wXgF7dkSS1HAirUaYauj1o5QNG8",
  "key14": "2rmGTS5yNG7EqyXDprYWvnQ6QzKoWBaPzSEZyPVNQgjkbdnbNr4d7h7PzFSf7k6aodKtqPBwY4nQBV4MjZoWQM5f",
  "key15": "5TbK9yzweNeSAKQmhu4cmkrcnPba94ERyhyM5e7ojdfpg9bvPBi27DDBK2KetW6zabfNfgh7aFQdtaQygSGNaQ2N",
  "key16": "3H1fhmZXeZHu314Cf4pJ9528YNbyW1anavfBqLc612cAUooW7GUYbXnhpmkjQzGG3nQuKfTqKgZBSFHWP5pmkcvp",
  "key17": "5eRJcH9svfevU1gBrCZMAviZcCDTwtAgKxZ9QLuX1w3aCeBHiZKQxExJEUzCCkpuJxTerB4GTF8BvuF9zZ2jDnbB",
  "key18": "22YczFbAg1bsiHTAT6daVg1DtJtTTp35YiGDdksdPSs2i1wApGNzDNSoknzKUZmzZDetYDXaJemi8z6tYfBJvw3f",
  "key19": "2VqQTiSB3jsw1uozg7fmvcsgxJgJbnE9rHAKDyyskv12zEefaecmsXdPbnWp5yu17gGoaTWbHTTbhMTg6TCZmnhm",
  "key20": "pwyuCDgHCwojZMSfTWQjuKy3vyuKtkmKFo2UbLy3WCYSiMNvd6FwyfM3k6hXK5Dd6bjFRCszEXQPK992E6kgAQG",
  "key21": "T96CG8Fyqu547jsavvDP6F4pNoAq6dAQ4HfWEH2s8gHUNVzzuD1DAfRwJ21N9ERmkvgoFinMuJEBsKv5jGxhW8t",
  "key22": "5PKrp2F1uMNFVVVUquykwGnaPJaunCy24WQPu2f8K4kFUAU4XsFNKxEGikRBJr8mpcg3okRf5qeku8RQeAJFSMvv",
  "key23": "5PxgGyFQkUm9QdSb8AMDJgCB5TcKiyRhTDojkKJvTxvXC9y24hRKT1tLngpZKEVib5jU8MnV3j76qBkuj8S46p3B",
  "key24": "4hHu6MYDvGq8vcuu3Hb4t7YUjMAKouBWQJE2myJzBTDZFTh5VEVrmRKSrdPwYYtWpvHQQW8N4sUbLwTy3wWkLUwN",
  "key25": "4GSftA43cKytgw5bmmf3fpm1HLmDzz3sDndZ3TzSYWfaZ6j9GT839zEQn8P3GtTn32gT3EjqDBoryNG1uNWNiMqV",
  "key26": "4u811Q4RfNRxc2bu5YHbpUWbnroq5e6THSzMreCLDCGngit6zUt7HwUk3VgWXVeBRfkZsF389S3H6MKKDxzPrRu3",
  "key27": "2VzNC9A5s5u7H7E3MWa1dTw7ZXb631sthPE4sS6MSdT4WQjjbAdYe9KooCpjVZmFmgoXFZGchHshxDidKxg8USYC"
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
