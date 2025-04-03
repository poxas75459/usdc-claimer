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
    "4YxAuHGSLWvmDwh1kuXPXmaYK3VNEKDCwX2ZMsoB5u9TiEjjrUiKhKossnd2C4j2bQLeZg3t7v24eV5f1YTzCe9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4izaLSgXTLzaFi9f1j3PMhragboFzjNJhDMoBSqLnRfgcCbFcrxsv1zhmFoRi3AmdaK775WoJwuUMr1t4PjBSG1E",
  "key1": "CRziKZ3PhGUnGombLzg55uqzeEkg4nZhzhVX39G1eR4KZN7oqY3sm1mJrxkXd32Pw2WUrYZamM694TiFq3qgPvB",
  "key2": "3Zfg92dA8H5ff3AfxCRhfabdQfp5uHWCcQ3Xfkdq5NdoHWUoTpmdortrm9Zj1K9rhYZGT8fdRPrvm3vyYwRiG5nB",
  "key3": "3fHbmLVbw69oLHfZhaPGgNt7vGL2Z5rNgz6qfSBc18qKE7p69cGWGVWnTpbG8BXb8stfypVFbgTKx173xXfRznBR",
  "key4": "WppDrF7tPw2H6Z7LnnHu1cccHqYoCYUBk7Rvr51EcmpjmPgQoNm9ex5jdSjxoULg4yx6mJ9718YkSv4mbgCFStf",
  "key5": "2ooNcgcxCj2LoJz5CaxPzqDFKPyzcAMdUnpspkreS9sAqT9ULh8YLjpZos4KPWy63NtgPoRa4aDJHYeVciVKMRQe",
  "key6": "3U1QSMk5fqsUSpxByeGofm9zi63oW9tEHcmbThbJrZ1GUA1UHML8PAcSJdbmfCa8N7yd9uyu8uMCuR7c9iWGMwGF",
  "key7": "qHEF7FLnfHH1ojLuWAoREHA69Bb2w45bCxGYyPVq7i5BRCUAVsTKk1fCazT197JyH6p7dJ9iYaiBHzDiRGk1FNY",
  "key8": "4cSGCYJSJe4TQgq16A8N1eRhsxBgvVCu8tLACuTCMhgNwBjy2FxBoUxvM7LAxCAN4N5m18RiKtv1GKtmEXnxMcBX",
  "key9": "5QEQkkQmm5J7E7WxNtVhwqKW8TX8eG6eF52jzFVWVkYBfgBW9EVYT28WPz9WeiA5W71Zdye6X7V5qatcCdKWLME7",
  "key10": "27HmxUHqSPAQ56d2YMUCWfBKLF65b5QGmGV8prAPvZ2WigticiGuScpkwyHgxxbDECRBecQFXn2ZmhGLcjALZADD",
  "key11": "2DtgRmyJoJD8LSwP1YQnhUHUY8Xa5TwLmA67aZTYMHVwdrrbnphyAqvnQQWh6L5MpLXjGdg6AaGQRhYVSY1g7k3i",
  "key12": "2QrQ7Vyhb5hrY8aro6aJ92hEikXUF1bSsGqejTUcEaZLLeRa1V7dLNEyT11pwekLkfYEyyfdeXRvba8hE8qty82X",
  "key13": "5W3Pr41GN8iX8gmnbFbjXsjeemPob7SMWYPA28ZMLrwLFwUKvAfq74Jfrh5tmtymhiFobc7cwwiVpqQ3aGMTPUt",
  "key14": "59N7mDi3T9aFbiHe5Cjrp1NXBo71xfByXYXf3D3Yx17kU3Ab5B6FcsheT2HNEbzQ3LoPMqFiJ9itCLfAKESf6Vgr",
  "key15": "o6kyD5rU5kieyrjQkNmXxahDn6suqMEWTHB9AyrX2KtKjxRXK5ZQ8fPEFW2YGzhCYoub9HdpPUYGSLKKxbx4tCA",
  "key16": "2s1nSnmx7H5VZx6Y3eTCSD5xMuSvpJTGXyjRg7QkYzqdnE3ndjT6MyWvgC5ufXhLrzNJx4AJq3PFxidT6aatf13z",
  "key17": "66YmARBwMZyoYro6XaQcHnPdEBvATbvYBfjGGvtnAhTiPzYJe4ucDYeeHQyrPeB5uEB7tCpNUZ52rHAjoWwABGDs",
  "key18": "4jhnnw2YVbdPxjodSafP1ApSv4Wt7wc1ahZUjNhpRLgVGMQnDTwRgbz1NTLPaBDo4C2A52X3HLNUChcUaJ9KMJkP",
  "key19": "XjGFUPdBKkwBTRimVFgD3i3TH5sASk5Mno5whcHCUdJTWocTTYgTrfSvASsn8HbRr62H9yEXurP2So79VR5Adbe",
  "key20": "32grLcUY3ofUYXJVp9wmzTP3hzVJovpoXyBRfT56YzMBrvgdhp8X1k4YmrmcTrBESCKwpwMo1TpwCstpdNLwFsnM",
  "key21": "4uatsYibDk8dm7h56z42NeyBmum7m4KXXGbuksYERaUzAfPjKHu4yocHj56VHE459z9zN88S9wBRSW2u3SEr91QV",
  "key22": "3FiMJTCwsYF7CDgn4oySJFZXyNyTrx7bXMLJgdUwdn1EfaCwf8c5269UesKTzJynTcNCLaAddh9fDheRSzPTB9Ew",
  "key23": "48Z9rQ3GJGittNKxkUEQX57vj8XgXDtBVMrsX4doZ6gf2Uj8RvsXtFDzM1pK1vzUHjg2xkKCuAf53syXowFzwyrJ",
  "key24": "44fzdUgMEF5FSJYUGmrWf1GqsEZ1LehyRHPmpeQ5KiHrPUkbUErS86DG1zf4nqxS3WetvcVwewouHMNGmuvMhJbS",
  "key25": "5Htarsk5vK1K28LRLqpy443F2KK3f8Y7qaxiu7VpCfMzJWnp5cp4vHqQQsfWxXQfH5KjWuNKmknPXXAGJKHW8JNM",
  "key26": "3ywCGrWvdrM3HWCDqtSwAMdgngty4pCkRh6oReyLP6mk1Fu4mUDE7RRYnrDEJkCWvrovoTQnnVfYyDG1dAyrEmbB",
  "key27": "3M8gauB5u7BWXh7gDW9Lh8TYSrRbPLAm1YP8PasLCTN6WYoPLN8CuBMCxUeR29DsWToTNkqBKka5AR2UJi62XAsP",
  "key28": "1S1EDJMa3tyTJFusDPPzrJy8U2PyRVoeuC1bBTWd371Ngbd3z7XjXaEG4arVdMfwc2kMhwWR5ysDfXuQjyZ5CMN",
  "key29": "3rjTsCGxM7uRA374VWFCYGUumEnbU7G1gfA9vi8yJcf68T151FLyJ1ezB56p2TQ144waGHXPMkyBRDh1yZeGGiY1",
  "key30": "2s1K7B8zp5RX8Lr7tWfqNr45dNm4f4qtnYsjq4qQjdveG21T4kCPX1uDcP4Hj71HDuiUfxzRFco1yX131tUeCiiV",
  "key31": "2EfJWzaA8zxfp3zh4yYqQFsBspQBajzxr6SEEs1sRaewT9FKQcHxrCkjyaGYDjtPcftYSGHFBY98sme437Lg63K8",
  "key32": "rRPSdQMhig4j19qRkJMeDkmfKYJsnRVxdgLfbVYyn6foXdrek99gyn9YL7R4KB5uRnLmcbkzsGntoCVp2rPQXq2",
  "key33": "5N1Jdq2NrsRPJpSBqQHsm29fy7fV5x5gFWeT6tSEpw2bvQ4mRRbo1dpCPQpHfJBiWJHo18ujb4bWvjYCsK4LxaHY",
  "key34": "mskFDt7TahEJCGRncFxX1Eg9cHxYMgFrAi2PyTPrcQCGbN1iGgmNcJBimAGwxsCzjA7rViikGehvYnz5Rp7r6zh",
  "key35": "4NeTznpWmA73BVZpVXxBYFVZcA2Vr7arjrsRvQUpoepWge2Q9yjKamDz6nKrAQkUdFWMGr1eKfffC8ELEQ5CSoBY",
  "key36": "5tAnkJSwnu1do1jqTdBUrYT64rUojgJ9gqS9m4fpyBKoQwkxSkVa76qfXJq8jWb7iV1SSVtUsoy5i1vmJaQtdvyY",
  "key37": "3T3ya4PwVLjqssubehF8WMViYSjfeQXEZ8gdzUjkb8zBiD1gq8HGpDLQS3MzvuPc9QKJF9o9cVboRmSdRzUGkKd3",
  "key38": "RfLBaqKwF4zMZrYnqYGKUJ1NWBA9j5UeQ2URboMjdFWB59iv9CTwZZZXgGtnkzxZPR5aFsv77Abk8qkpwCzh5Wu"
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
