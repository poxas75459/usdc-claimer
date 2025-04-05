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
    "2SYNLd45bL6GiSkTnzteaiCEbG3qQCaHtA3mSiG2KSavgK342VD4MdnouyJ27ySc9vMy5PHG52rWHSjteW8zDhjJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GB1jRUpFPSx5icQmjP3RZtpcWwvuKvD4ksYMDsLwKxCg127aYuz1BaDV56eFFko19bZTYzRBRBA25aL5swx5N2U",
  "key1": "3QB6h753gNWWqHCeozKnQ5hZ21sr23HZhzSyPbVmYNShR7JykZExSRbaogQrkWAzTSpojJ6JfafdJ89RgrBgjML",
  "key2": "3WCViUqFq7N2K6gPqYZCuEumcDeFVUFAyDdZNtFbyPNkjNk5gvCzazvTVChw4LNKZPQ94CB9jBz9aFo1ieq6SuE1",
  "key3": "37VmXXnYMH6eaY9y4kgdsvT4thDUXSxbFkSysCfx4LDb1qpbnRdAEVVguUUda1FTZUCFtaRMHdauJTXBNBT4ddnf",
  "key4": "a9269LXfFJeWs5iwDAJJcN8Fp8x3mpcgF1W8THJiSDXbGer2wtoJgqc7trVVwDzkZ1u76RzUMYETvQWTtB7GNw1",
  "key5": "589uJQbpYVMBHzadz5RfRXdRSNwR9BZCPyiDqeDHAU5djvtCgzCWgcXxifNapemvLt6nR5Y3zabSLwsBfawkAPu9",
  "key6": "3CXskKH1uxZRp1c8NsjpoeH7DzwrphUUiNbPRHqVzRJyJGTr38toxbibvimMpSFtEK6Ude4USNafnmB3hrt1Evui",
  "key7": "3ax1UyfXQRTf6eNjG69xCnZx8bPoU3YV6XrrH2pViVDXduvHwQNwiouDHub9o6S8KahfriCETuYRWXyXqbapcdP3",
  "key8": "hdRTfK2YJrqAqLsVTR6g91t3jVkfRS3TPCs4yHkrhAuf3x97PAL8QnWx3wKgd4nqwrNZG1G2SEfMsp89gLzdRyT",
  "key9": "5BUD2UCyG626aTTXubA4pTGpw2K5f8SepFsQUyCyrf99nRKmdQarVoXASX2sD68dTJpybdwfS112vStQXq815PTD",
  "key10": "28svSCUdayVvbPruFeD2sVFM3s7zvUShCp2c4FtJRusGY8SHjASVnw9oBNNatGoXdKuuSxgQF8RYF69r66BCkx32",
  "key11": "awFqnvx8xRrftNu3Y2kY8sE6EiKnGzmU2UhRX8Er16YKmXyvkm4p9kpnv4xc9S8dBaALrNqMPsiFFtce5R8gLoP",
  "key12": "4nuannnD3ZmXzw19q8Aq14YaT8Dn1qm7CVpbo7B29VbbwsmJzRiquaoJkzotxRhsw8UnSCFzjms3tVN9MMYzzt89",
  "key13": "3doteP1ykba8uGzmjMtiQcDumkwLnv7M3GpU1pviXf9Af3pKRtuk8tvB5u3HUrytbXcLubXMyKg4c6eJjf9hNUh7",
  "key14": "4iHPWpaJ46zU4KV55BHqRoci3NxCDFQ8u9zTNEV1WTPMJtkewVPA5DEqVZyWsJedURUoChWptyhD3uymc1kuXZ2z",
  "key15": "43gHmjvzGF1peHtQCXtidT5YppLcMa41puB8p4g71XXNiemW9ZKunHdAaqAgijoEmQNQwhJegvP2PqETuKn195w9",
  "key16": "tXpDjrKsCMg1cdS3WCDp3XuAQDoyttwRAj8f8YkNnpwUtATKjNqt8ofrnM9GtBeDraptuktCzWiMJxAuZJAZVP2",
  "key17": "2sHbNfLEkSHKeykG2fgbXGbvsgHufCCEBRDq4dfjSRxbXdrkXvgiucr7DJWasAjow44wa7x6UThU4YQjZ2DCa1DT",
  "key18": "5HuUv45e1KuNfLqqDuJ3UW1aH8hjeMaTLSrM2SvgUDBRny7dp1k6eUXqcbUW25Qwu4AZcDW7cCLApze4sRoAu8tc",
  "key19": "3ijJNyzebsiywZ6ngoGJr1GnDDrtgam84G4BfzgqqMtuH22VsiEhxydp55RboFA5tciLYtE9hYHXgJdZzBVSx38z",
  "key20": "52F5nGPGB2ZU3rawdDF2S12tofmrDqXvUYNxCd8hWmPagSooX1Vwe3vVLjRxQgZPWtHkiNMcb4gv685h72s4PJHE",
  "key21": "2bt2Gp2SSTAcRamWsFi46M8iZ3aFmoV4JtgUqNeXFJoCBLi1KiQjkarMPJuqr2CzDGZ3zgJFY2UaS5XjCWrhTuS6",
  "key22": "7Xcnt8jSewipy68VThbfaDPoJsZgFopB7hA4FQn1chto2k2hNh3u7bGiHcFetHnGTwa2mfgyy9eAjGkAdCpTtEt",
  "key23": "2D5DryYBgd6DUYt3A3ZXAeq2xT2mmxJtEekJGnauzvzpcBHTbum9zsTUESh9r4bUEhybLkQww1Wgo3DxbQy3FVii",
  "key24": "47NSkLD1NsnDiL1gftwqTsWFpyQaVh9d7GChBwXU9Nw7eYULbuMaFgKczF3PauvkMMQpD176hY9mo9fTf31XX4dt",
  "key25": "64iWG7s8dmuR4ha3n6FbegUEj8x4jLNM4YT7hnbBWRzgC2LqmbwNB3QFuDQ9uJZ86Aaro5TLYBkXfkZVbuWQqo24",
  "key26": "qSTYJGbfuhghQiMJMcucJ8LJ2bVYUTrc8aVG4me6yPtqjSmVWbaZ7vUjr1tLpcVm4TEbHkvC7aPn9tmrYXNpXQY",
  "key27": "2imReat3xUwHYe9vbQqFF3dxJFtjkanWvckstcvyHSLr2eUVZtmwbKCQCkFK5sNmsVwSkPBgrBoT47bpT8k6yXMa",
  "key28": "4MSMtXnTMbja7QcNknJMAmneT3rQ46KVFT2zt2sJ2ERveopcDg6n1Mbk4765CvSHdL9oZUZRB5aPeJpm7yYCLTY1",
  "key29": "3Jj2Vnh8QrdXHaPavv1PTV2mxZRM3DhuVjmr82bKoYNhU4HaSoRy6Raz1ctJNwz5tgNJ7MCFWvisH5pEJRYZHNJ7",
  "key30": "3ZXvEwZpwfMVf9VoczNjrtiaENGJ7E3gykUEi5G1VzxXAmkCnbjNxdLtHQ8XFKfHZ13gpdfRrCqx23rseuVvMZZt",
  "key31": "3WPFRdfD4UAzS1o5ERah7LQXJdyXCXSLjQ2pdaSwDX9gPHTge2oHe6JDmSMtXWw6u2Pt9PuBrVgxuinDvLDNxRmg"
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
