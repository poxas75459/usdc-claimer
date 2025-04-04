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
    "ykcWmq95ha6AoEyRYgNugLXDKp9FBuNreSbEVj2a9NU5nHb2eSXXEaVJX7zxFZEKqvQheSiqMTMNnz3fk5eV9Sg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zFUmva7rT87HrTjBunJUkx56KRTdrXpMoxvq1pkXJBcY2NhW3XKs6Do3HzKUByAtNSFYwFnAbwxQ7CFkmpunEEe",
  "key1": "3KtY8XUvDsAhaG9oQrf7M64dpLf1ptQ5NcKdPL4QsfgeU2WLnxCHZi2xmX5y7cuv2DrTGk5Xsce7GFp4AxRv7czA",
  "key2": "4CNSoxbARY8UyEp8Ycbiim8nJRjg7vEHuiFsgWhtwxadqYBFPD8JMn8knKiXp5FBqbd3rRWJAH8zB5asVdJZmfp",
  "key3": "9Fx23HWtP5FRaKRtGpWiNJgdGnGK873JVmU5tu5PLYNxn5QjggjqWgMuR45p2wmG3XRXME3qy7ibq1wn3sxHHdz",
  "key4": "3UjgZPeZMcuYRPs5pdRFDASgcmA8d9gKrHuFWGz8zdNyczHxAgYsGiPVms71Vpn3rF6ojVcnmZcgSBmbgjS1aYf8",
  "key5": "rY13ua8ePRCLnuAXKZj7biXzEE6a9ew1ScdvfGNYtANyoNERc13eF13GMG3feoCNFd15P3m45o5uoUR3NEbR67b",
  "key6": "zaJHuXsd6QER3YkE1S4GeCT4P35mo2CT4u4Sh2HWBJKFq13T8ZSMXHbh8cybw8jMzPpEtGN9V91vCo67aZ8vQ85",
  "key7": "4WTH3NkZx6jmh8mxXaXCh6my63nG4PaWuECdaey32icx11pRseqyXSfCcSD1BgicKbJRijYHV8oWh5NyqZCRheQ4",
  "key8": "2g7Gp1hy3x9BqeWBKhAqGE7uDcUUbBaHBazDEyezo15tXUzoDrBpiYqUZNLw6kMbSyCxiktXMSaMKf2ihXCbdbFR",
  "key9": "emB81iwTUx5QJV2CbJ6BPqhdche2bXDaWydxKSroDMJ3xrPcq9iiTycMJh6QifndvS3Ffr7em5BTrYakaP5RobX",
  "key10": "3fqDDaSNxdJdvMgEq5ujuVKZmYhyrLafSyF5TUQvfTSJo9CMtsxP3LuaDWQucNjtzq2eTMxi25gnF6qmZyhR9Ckq",
  "key11": "44AWXeuJPwQBkLRRBxXdcxp9E2edLxQ2iZXfSSL4yXs5ttChW9U5irfmoUGEXxzi5m1zi9tMu3vZg7XGGo2oS6hm",
  "key12": "4RrpAGdZswnPTgvKEnaxx2d3SET1gZGgWAjqKRXsrmez4Nw54xT9riiAk3PuhcqpjwV5xUTwUL9NGdrLpmw1irYs",
  "key13": "61CfVAyz8PR1ZWKzJ96H8CbVpSBVJkTJoEDmVdcYuTNc1XwVFkhut8w2vDyedjLRZY7npuZ3q8nxiufRsk144iAu",
  "key14": "67BS3buJYzpUCsWLMoKu6wJYDPgxSzjVFTpqKmmLdhqGCs2QjYN5AWNTB5p6yh2z87KhEJYBQkHLJBa84q6evPEx",
  "key15": "2D5yZUewEE3WBpYJmrXfkLTPgUFzu3kNm2WGj1SMQTCzuoYU1c5maPm7pKMbFxzUMmSdCzaKp1GC2yB2sfFGqrZA",
  "key16": "y8Gc4BBsJKCuHCjfT5fAxTzQcaM7c6R4zTN8FfbU8cq2f4BDTJ2tifVCyySVMmQQcPzYBXxpBjY6R6TgVLJwMdG",
  "key17": "5yViGk9eYM5HwpnJ7Wg7F9Xi4aUPN55De9frgMw2tFtHNXAwj3JJfStrGSH4EwAesp9rbLbkyUGAbePzqQ5JMmnP",
  "key18": "5AQPWRN1T3wcU17GAfzyfXXGcDfVYcp6Yntd5xF9Sh2tCYwKw9EGefYua3pbrdFTHZrHBXH94PyVC9WUknyT2cWn",
  "key19": "4vSQ8tXhai5XnLsrSpFER5ECoR8UjuYd5K8dfRu3a6fgcSN94iRKM6jaWg5uwzQsS6BC8gsQckSH1gDx5T5ggJf2",
  "key20": "48vig5n8azvecPdcuscqjiBCa44k1kDzsJfm4CtfpADycfn4rEHz65BTHNyYeKqLGA1soWZXZdyQeeQrD8q6kTyV",
  "key21": "32jF5hwdJuCGAdD3H2zQ5j4sCgVyb7GXpmGFFhh5wtHPRfdhUPpVhhMXDpPEJtj1xsKToFDYGVDnmEDj1X71DBrZ",
  "key22": "2YED7scSAADYuWyogJPxLtSNrk5XFBV8yR7CreWfyjCQnskzYi3wYgxtsQi7YtU7o4JxiMjnx5HnAda61KtY9q5g",
  "key23": "2YzDvJaGGu3u6fxkAwF4pnkpqeFeQAnZmrM8KvhrPtwFHncnnkX7B86HW3Engp6Pf4ZewqvABj1yUfxsPPdzEwZi",
  "key24": "5cGAQh7dtuXS31ixjHUnZqufLTiwxWr3Gs14TrqBH1w6kpNUsK8zE3iuUPeCjNWKSrH1e7RZsrEjwnjUN5xo8Lgo",
  "key25": "5YF38dT8qR9pcQbswdwXdf5trqB9ha5udF3AS5ddxiv2d8ybKqwGSn8F6F8vCpiW5w7RxtwjdgbDZ7ZfCJT5Hkur",
  "key26": "59rawnEDPTm2SgcU72RZoUrTBqgCtmpy5oiJF1BA31kRkZagcdsqg7cbrVoP6MfVzzGS6mMrDW6idb8Vc6zs6GNa",
  "key27": "2ej9JqX8vEBxbXARN7XCJqnUsJHrbX4pwamjoNjV38wEa9qHSSLqB2vFssJ4ZzPUyx1KN67WvcVqK72LdS6cxTq",
  "key28": "5aZB93gvJ92UPssXGyweKJySKnCvNWt6VELNU6wN5WAKyfDpmkbXS7vf9cq6iqTbj6J6gBKkXHvHPEEu3QmbXLqW",
  "key29": "5n2AAZTELgCDt7GPRWjf3BTtqtGk5kP1yxKA2GEWnYkLPmJd8zFLDTFj5ujrpUcdsCmBzzAq7LLw5ih7w9xCB7L3",
  "key30": "5Ns1Hk6UD5F7Jtdv7ZwZTY3qACArByRmpopsWah47sF96Z7jScsjNqL8wwPwUzEr9QbUkMVDJ4LvWTJLpqiBSoEp"
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
