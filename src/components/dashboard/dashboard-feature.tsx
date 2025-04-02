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
    "38CNLnkP8eYqq8u15nuCSb5ASXtVsjtiuzzpj5ehM2XYHtxNZZwgjhWBJV2GNCh7psn2BN6xd1pHDGHuAb4BB1SW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzVeEt8Bbx5rZvJoua1v6yKdhn57fmBfkZ3sdfR5SCfL4Mkm8wG6bd8V1D5GgNbjYKe1YEppHN4dS8z8aNbTbUw",
  "key1": "4GQggFUxmNwGhEw789DZs2hm1XKcRG6LG84s1YeEzCHM4DALdXs5RgpsLVR2KW5S9SAYf5ZWQw1yuvJqR99vWZpC",
  "key2": "2bKnL3Qe4z9FL7cJQSKm72ctzK5py7hP8PEM4tFddjMUV22PUJdq61YoDnqfBzGcyBTPPUf2rJ1ByPwQZDBMJcVz",
  "key3": "45LdoUYCc6FEMi7xW6atNzVfQhai4mSK8kZa1nTfCCc7PWetm6YjiHRwr1bSzghS3xEJhUpFHWfjqu7ofUeNMyAx",
  "key4": "4DmRPK2nCX2jXM3abjJ2RVSjrVwDZSCHDdYXZZVr7JFxhrvdS3x6ApCamHiP2HGPV5Z58PtoiwJEa8r7VRYrn2FZ",
  "key5": "3CrrE7b1xfUUfP1ncNAN2Hu8VCeH2ennuEX8gdkMiXavUZBpxhzpbPsyLeq6874juPtxcXWdazSaKBb8J7GFPg5P",
  "key6": "27cz4wxj7su6EhEgT7HxLUtpduJ37cfPwyv6jm4guEqGFns3XQZDUV2eUbn96h2ZcBxFeWQWaLwJWw21QGopz6NM",
  "key7": "GSDRNxqgTB4bP3JstpY29gUBH9MELNGWYaYYcLMVoaFfR36VBTQqLb7D52xzTCZQd4zdCKxYx78NgtZZPpDkBrk",
  "key8": "4tctgFbCoLqKgTJ6X9rM8CajcsRGFDFsvDHQ2dfWGTCmMJ4XTxjMUoRmw9n51k1V4NxeiwdUc5faWWazfM47bXEh",
  "key9": "66XBSnpdjhAqB8uuREMpvYVqMNvzYKWxT4kxNkuZh3hM9GsWmJ3RNuZjvYbzoKc9UfUn96GDufkv9wymLtBjeYyv",
  "key10": "21zQdkZKi881P3ZJcmbT5Gfo5FfVbLwN8Sr8Stv6YwuwpDYYUHNxLvZtFvf2pTQQ6yvoynyGvopyBNvwJTqy2mUC",
  "key11": "4TCuGqKzwTiemAvS51qcKgM4k2GRYdtTLNFmnBDqTZa41fn86ZWP7nMXRPC1MDjrZmGhdDB6LJCf2girC6bvf3y1",
  "key12": "4RjH4asY4bwphhjHrpe1twJndErXzhri9S5bEjXaD6xTyh4SeVBXcGV1tPna8aZudjTcwVSqK1koGebAB8NF9qud",
  "key13": "3QDSeS4cSddMFvZKTK5de7BzhCNVZQendBL1murL5iyh6qwDPLKAMAWy2x62MezDcbZaiF1UbXUyR2C1tu6rHGcK",
  "key14": "pjmqsKS8rhNvrDSAkfkJrTbChgDhpDSYkWmgeWPtkiiEa7TzBZCjhZiBCz4TkurFXCvV4jQuyu4Ri9pN1X2LxMQ",
  "key15": "62B7C2t71npBtirvLDc9d5EtmxtS5Stvma4spShTNMxbtdrkT4MNrudGVZevHb2Cd41yg1WsyNWoifMND9qhLj4v",
  "key16": "3VxbaH4JJoLDQjw6wdSxqss4WHDA55brg955D9JRj77hBgFCj6cqQd7it8tyt6tTWbFWhpFieDG6GP4pv2q2gNXj",
  "key17": "2zS2yHnEMZcaa83k5fFjUbD3DybmMfpfGT6TxZbyDGWM45iwAiLfFT1ruGFHScq8tRDWkXxovT6UnKUQWCVtDFN7",
  "key18": "2fnjcKP6M9gd4myrKdhndFNSV21SfBAYSdqBtT5NDjfCK4KBopKuDpSGERvezBzRT7vfZjuu1YTCv4AG2yyiTNtq",
  "key19": "2d8dHETJ6M2uN1haFqh1DwYqXyGEv4BVoTkPgp9rH2npbzqCG1xmjPsbWhvggbzVpoPFFYb897fAHYLY2pEfKjjY",
  "key20": "HbtEz436uZpN75txN5WXBvNorjya4889kznjb9NeSfF8wcDnwzvy5kLH57GsnD6WtjyJXHsN1QhUKgRGQQrbU6q",
  "key21": "5KrZBrSMEhX5eDqvEYaRTMgZQPwDda8RafgQnqh2urK8Q5NfxUjWRh3KPxEcEL4MiY1BxiBUnbxNztZgfBXWEdE1",
  "key22": "5v4MsX2aaYm45mrsdWqbpsmtY5NNPVBgipzQk4LzDLAEVUjw512sgVpPgqvrw3d3je4c9KtfYPbrDVGkXEVQveNK",
  "key23": "mzJzZfwgb9TQULpAVAMKxQC3vDjnx2LNwFfoUxdcGvdG9HgKRYYw54x99dmM467JrwHiHZSUqDnQWP17bS2imJo",
  "key24": "5oMiUHgS11orsjDQiKJSsYERELicnYKUZDtnFzZWNGoV7NwQvs38DCRPTr5zYCWBFtiNsoDvivaBsJDQwt3X8RF8",
  "key25": "3uDYDSdGkY8T9YDfP3rgvA4F2DYviYekhXp9tonWBGdW8mCwRGB1Q9juTxSP1SoQzwfRCiJCmuTNCeaDoZM2nMKh",
  "key26": "sGsoY1RfvNdh1xn1GWT97adg5BsziMpjUvTGrFiTjnFEc2HExyKr6HrA1hFFXu8EAMzar56ZqV1jYY1hxFF3ZG2",
  "key27": "jPeHaBkScKZTrKoWjZwUkyoR6oomaP4ZqS5feNeVjGQn6oi9LsqudnN52nhjaGffmYaZ5LdezDXYXtscjXyuy6H",
  "key28": "638w9V3yJHgbbxXBGeqxs3x1ZitpYeDapC6RAL8NNEpb4eBAkDqo4m2RQjt4MWTd8hVe5A66QgZajb64FQPEqCz5",
  "key29": "5EH91WbRwnGyDWgqghZHD3fE4qvmUd1qW5WKDLJ4iBnPQFNxQ78RyzJDZFisU9yUUiQamfcT4UYnABPPxwx8EqRw",
  "key30": "5uXx6AfKKhLTRZKBfbXHc2NhMQ2bEnd39Y1BnkqYj3bP9ZBUssR3TLdKZ526UVFigoe9epfSvCJkyZZ7sSWLwpgn",
  "key31": "2J12AZETSMz5CBBoRFsxsivwN7YgpzJt8VSXg1ThEPDTXBdMeUfvsurrqb1SYhdvsS5jYP7AENDG9XCfms5D6GV9",
  "key32": "FP7sR8u17fiRPKCuD42jyLg7ZKFUfjBJnTzM9DKux1Sq4ogdBTfvDKpjB1QPTf44a4AMqJxLwWz35YXYKi3xMyU",
  "key33": "hTas33Ld2RanCtLTdmvSXMW3DRB9RbTKWMpYCG8wPZ3n1hKEA1Qvikb23km8TTcHYx2Wbkw4cEg3xTG5eQtnLu4",
  "key34": "4pqaVDKLag5nMDeAwhTcRoaVaJEfbmTnF12rf1PoUxrvVF7pXrJ9yxuCPXJABurg3nDv38FZSRmQbknbfVeaY3R6",
  "key35": "2VjgzKgU4yfWBzQCUdaRVhS3nsvxH1X4ozAGAarmPigfDMCLqUck2oHKwL3xPDywApa6dx8EZCoPxLi6bUQXA3fc",
  "key36": "28nnbXH9bXk7HzEB6RkKDj5cTdJ23Nm6guQfTbFvsNknvx6o8UySmos3Kgmh2asnm4T3pXuXftSGA5VTrBAZSHtL",
  "key37": "4xUYXBteohPDpADiM2vCqtXyQYfVEtGYEmoHKEjcaeWEy4RhxBp4KMcuiZD441HnC7DDdnm2KtLDpSZ432EFFkVF",
  "key38": "5rwaQRAF4w2BExxkZQR9y4Rc8noZtthi1aEEJDduntvN8eU8X7xYN5xbCLyPyzxCLox8DGo9tUnB9Qv4GsRysL5U"
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
