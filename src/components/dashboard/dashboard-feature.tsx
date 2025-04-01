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
    "5S7o82rD9vPo4M6mRqyeATiTtSgroyv9gQHD1oT5eawf7U7QZz7WkKMxTajdtEmWwyZdbNoKUbzP4K8NTsMCCc3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YqcJDfMCtrz3rg5e92Ve53jbvudhtFWioUrKohNyisBVbXmcXDTtMA4QNH2cwE4piL8D67aweXeSTTYTxgmXLZB",
  "key1": "2PJnxXMXU6CGzFDSQwpBMnXqdtiz7pL21mTVbHpzWmmKTXRw7UBAT4c8WvBSF1i5P1PSkZjiT3z7hUxbrWGLqZ75",
  "key2": "xvppAKMRqexNSCRUjuQKxZEf5BGLkfndWwhjgRV5swPbgKycpCCefUEtBA2g7BnSH3cdbZC4BwHURkRRZuuvi9Z",
  "key3": "5xxjj7KJ5vmfURTW4SupdAfD5fQoKVgcstogQN1mWCzNeZFJ568qYQGLSRKVCJsvJHevLMd6XdFtku4LPRivjrfv",
  "key4": "4xGKWeDtgKNSvmQJkM5KhzJQ9SKpLuyF6g8A6qTPxdRDaGnHeF6UYVXxtojFXc1zhJqpFGpHvNrJbDqZPBq7Sydz",
  "key5": "Km3EHAFR2uy277k6foYEKs3ri2nSdFziiLRnavTDVuFgP1VcbRRzKijPPLm8eDZY2YzzejqAtPMG5KiSyovWBKt",
  "key6": "2YMr7pqDftrPdh9s4v2MG7iyMTYwqJh3Z4Ds8hEi6aT3Md9KoZ3gKYBbcjjcxojHeiftqr6DvAJ8T7oEPbg1r3j3",
  "key7": "4FQ73MwupnvYLFeLvM1EAmW8cXYjhFeSBjqEWkkvNx4dLQXuKWSu1Ev9cy5dpK1EnJyUvg82VeQTvai9PbaAWy4E",
  "key8": "3fuCbR7xjNE555a5HN7f73YkHVCxzJKfDMnQVj2WmWYnxSVJpsyuFgTrhe8hT4c7o4WYQVCbtvqwyYD79tuwhZo1",
  "key9": "972jdHWy1krmKPtvx4N6a4pe5ei6bZFhzHPPx4PtJK3ibEKCAULmBAY3zFCv1Vq6ezgVR2teQKZsVLdENNwJzkp",
  "key10": "39an4cqjS4VUMv66iREDeBmMuuVcnLgDCjTkDLK4DbKd9a9SeiNJ6pb9uFm8e6s39rbkfvuiMtnteZekgEpb2uav",
  "key11": "oGKotfk3sC36Ex9JedN4JMx5jbq9iCyb2SMeCiqDVaKaMkiCFQF6YJFSEtw63H7gAfFh46hAvsrR22qY8MSTuez",
  "key12": "45jLCP2qtzGqyYtvRUXRW7KzbpiU2BpEhirj2PBBSxzEkgycXZHxjZycjqfgEJjtL8EWZuN5j5V5Sub4NFxw9Kqo",
  "key13": "3jf9FyBygc6JjEVSTAEEdiw5r7thNxARehEyukKukRHWok9TL3pGEZZg411FnKgCZndXYswyPg1TGLws1p4JGYNG",
  "key14": "5s9MHA2MRNqQGiBpGreXjULCJcoGQZDwntDKLNFcLc6ts7KRHksYC5RAXYNWHDKpk24WKzK4ATYCP45GmCmAaoNi",
  "key15": "2zmyvAfZq66ft9gKhUtegDGQCQGfsVApBdNFzMVHJvQTPCdegYRGW3jW3P2x2hwsxP9B9Q51Ubhtc8pYBxaw3i8f",
  "key16": "AeMGJYyfHWnzHANRF83KtMbMXAQcU14Y3DUxbcSo3xS41fmW4X2nCBfwc4BZ7tvx4vPPA1ZG8vaMgzEVHhTp8DY",
  "key17": "39ve8SpWTjif1RvJ1KhD31Jrjdxgmi11hUD2PbWyyRpYmAsLqGegB11eZHdXVkZNGPGHeY7UExc9st9iQgqbBccT",
  "key18": "3m2jS7Kzp29UjaTsUhupdyxeC1gq3y4XXJjCVAdvBtM146j4AhrtPixMstXRsA7erNKPtde77MX1G85WT73nx1NL",
  "key19": "3vghh3gPkpTjDPFKsux3U2gWYqu4ejkBTj6p2DtGmG9TqAFsFZXHGoXQUE3e2bHLrxWYHamjH4Tm5BG7iw9Xug4z",
  "key20": "2MsbPpCiBgJAzYyRgYYME3cfw835qmCtvULYjZqA39NeY19Qc2GFR2iP9zZCURYbcLeKwZvXMQM5dCAPGCKDXNjx",
  "key21": "4wnFs6CPUa9HhoVWmxhxobHDk1MhRkQJHq89ssZuL6hPyzaLKA4572HxD7CfRBoEwyREGAD7uH9XpWrPLwbimkqD",
  "key22": "KD68nHF8zSw7HU5hsRBfMJFKTKrBD52miKCF19pgVJfuEz7JmMddYXznTFw6TFhb9LJs4pwsYauNYKgh3vENJGy",
  "key23": "36B6GPq5uTLfDxBhjEZf9wcfSGmWm8C4LGE7XAxedxqPpUgPAHWZyZUBdWrbCp8zpeaXxDXZr4EGyMmEy4rPGYB9",
  "key24": "2ZyDnFu1V5ZdLbXDiHB7pD3v3ueWDB9bMGYc7s2ZJMXPXagekhxW4ai9ZmpRBKcnVpn3MeJzKbzPfmc1cny4DGaA",
  "key25": "3n5d7hikeSVstR2n6SVF5saBdwaDoSyTNERrqBPYMjkq1yYLhJPwhpXHpBBgfYRFdCDrGTUaMZYTt8tPzLVqdpes",
  "key26": "491QFLoAtge4p2RqXCPoMtr8ib5Bp4jxombNRXFSQeoGTuhfiR7xk49ZHpnZXDbG3TM3VpZ7tzsg7NwJZGvnAPKC",
  "key27": "PWwN33RQ4R9jVXGLHNMbHaTmaNNecoUNysUZmFKN24S5qKxEkvcezBBBx9iYfYbg7rVBpRe5JSWjfu3q5TTA6SK",
  "key28": "4Kc7mu4cVNDxnAZKEvig1At81fqZzubz4yyQNmrboigF7FPUpBsdqcNb57yPTtc4MZ9Pxh4EsgxiSK4utAoTmzYU"
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
