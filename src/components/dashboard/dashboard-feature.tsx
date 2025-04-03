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
    "4qbmGpLzWZGhG116m4LboWQR6FnV2x7LMqaAWP39nrFVwa9ybGDx4acgYPCkcXoEidnHM16sm83unyEoBt5kWzfg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t774zGeekXDivEASDR6hLtEGwX4ehnyCra8iths1mtdqcpteXH51ZLR1wngLy7ay55UjF7TqTePagdzLHnvdyPw",
  "key1": "3s98auLXPzWcyjGKTV2KTtybUYbbjXGhEJMYVK7aJmrksRYtAeti2T8ravurP17o5MeMGbfxPpy5WXJHEeaTun5",
  "key2": "48UZjMiaL9dXdjHkw1aDUywx5KwnD9dCqSnNfcpA5gFMmvHwCzGsxqgN2Bf9RPbNcbAJpMrDHnbvPDrsgym6Dq5J",
  "key3": "2QxYw39vaPD8eVfAyJfBd1jchJXrimDjLbCdn4pcPJmGeiuwFQRCFRxChwKmikfdeutX5YdCrhPmEitcKzAFojnX",
  "key4": "MHSTKTtRBEinKtru6ijy2RiTKM7sVey5fSVCXadixCAS6VuRqwc67vWHR8A2ZhV9Qj9b4JzY62AshoRtzXJxBZw",
  "key5": "4iB697sFweUcXCx2BrxjjFtNhcrYPctMyt4sfQSgzBgmA9oCVo7aKw3C71MBiDdnEj7TpLQ2NNfwbD8cbZf8ZGdF",
  "key6": "2NNZj8aHdT2bnBPMKsLzVC9dxKsdmUppdhsfFP5cNFPPykKm9YhYxrA1rVaj9DTWQJwxg5Gi2VeYmvC9vEvZcGd2",
  "key7": "3Aj4mQoNGa4WfQ56Aw5AyGQP8FX6Q2NuqAckukeTaRG89oxzQN9cRfJCLM7nPn7jQC4hyHpViXnPriDurfyxw6Nb",
  "key8": "39XuLnk7cvnDAimWRgyroFfdmt7UTaX5X2Y9qQaCPoPL4eRo8cQ1TzuMZEwiBeCZzbZuAMsRuZR4aYpdiHExqUyt",
  "key9": "5zYYinjKV5EimA9RiFG3KXxSBWBwpXb9tUoFHKg9NR4AfMN7aKm5yxFYcK7XiTZah6mdW4n513dx4E6JYgXJGLzs",
  "key10": "2yGDrUccfmgcSGYtbUmrvgemkaRtHjAfrQCr7WxGprxkQTFY4nezyruKQRnorQ7LaRzVnqWhzgmX5L7fmHrouFX7",
  "key11": "46TpD1KjBuudAXU9mmTKec1bu4TBdD1s8tr3Riktvc7GK5Y7ZWWS2ubTJqwhGZ6okdYLwp3dsSMSYNqwcDkp5Ww7",
  "key12": "2kwWK6qAXV2RBoBS2KqoJKJqQ9oi1C33oDjv86VK1SzdBwMbLnBM8B7RM12xGPAjmk7tig2BqChHzpnSoaJoRKGW",
  "key13": "5148tnseEZPsFr1zUhAGgHDTcvwyUhWj4z7511sw6nY8NAG8jtevmJrqGjgwcKrF64fgtXHsUntByen2vC7FqKn",
  "key14": "5N6nPviViu26o96taKMZV5gZ1H9McepBkTYhiCg9WoPDRHgkwpkqjUXbpPGJYgDNUCroo4wEfTu2fghEpnvtzWVG",
  "key15": "SG5bK5vyp5eEUzS6uBFccFvPhvn9y84ebiwQnAkRypg3EjsCTeCBoRaeTZ3Y3EWo6mNdgRktZAWg1HNhTteYnoq",
  "key16": "3voYJJ4eKhBbSwp1c1EFeZp1tK8ExVZW1xfBCxBoegDymKKH381WCowJsuvao6GCjerwu6aFeEqC3v53xy4hoeuu",
  "key17": "5aQxi87KqgydSpoMbjcnZKhWvz6KoUryQUooL7maNLVETsUjrV1eGwD4j53zQVR6k53btLUo72HJ4NtF6je8kN7g",
  "key18": "59YBQmC3S14byRd3NXqMZi52wwzWEF426iL3ASjHZQvQg9GZqmtMnNZsWGaFJSEAykdbiTDt2G9EFxcczvKooeEp",
  "key19": "4waN1Wy67dyR3te1SU5brLieA4ALE9S8Mw5p6sdZeiCjG3BGgUcomLfQmMhoyzBypSyXZ1Hpc5hMsza2E93gE4jq",
  "key20": "5MeEEB3PhosT8eCKANTZVtvky4C1aQ7V9fgi4qjV86yksNdB7DDRmWzqjHTutzqjarFDyWYvcQjBKAae5fHsptiq",
  "key21": "39jTZUpvcXFhk86B7ES4SktJ3HiSswKm9emXkWZiwRgLAqYjJ2p2PCL2mPi4RHaGESdRLbWQfjrJDdX9LzhLxeK8",
  "key22": "5y5MiaBfNLPTty5rfPwuHkYyDLyW7bCt8ZHTi7a4NagtCiSStchxHuMZFjBrwyV8jM6CrBDeJ4Di8RpUmSy2KVix",
  "key23": "4euYYDU69wZZkoULv5DhpcCqUXA26QXLRS6uhn9SYgG5RUrs2URxDTXBFHBCiFtRi9U2xnfqECXvyhXVsDNz74L4",
  "key24": "6151MJvXczqawaZGEmHFyZm9r6k1wzVc5RHYZ71gQx9vggWj8zZQtAhpGNZobbS9P3tCHoZaW5mZb7C3HXULhVfD",
  "key25": "4oJRQdnttMJzTc9U8mZqt88Y24xqW8sKgjpMwJLWaRYkYZEMszJLqtYCDz1RCCiU6NMmdcDMVrL92tAjLURF4mNW",
  "key26": "3txpaXPYnjBMZvui5tLewuGufr4WYKvjWijheVEMBopaXTHfqHwXdx6CCdvhyZ62JZZvZgYZ43FByGyrDfmPeQv2",
  "key27": "5vMfmvWE3gTN8L8u6UPREtdUETs3aGP1mCbwfv18oZXfn1oiqhAuBvyekdBzmNA4FoLJDutrPB6rseSBzQFitwY9",
  "key28": "Zf9nSAiAesCfJYehUKtMp5hCiUYAzwo5ioAVt8hj47FHEoncUPSUGB9KQBVAcv98wNgsABCkpJPbVR5dUbnJi6y",
  "key29": "23rMFXPNwkgJG5gNHFUMH2S6ShKB4okq81dQtye1774ndKFPJ4Zx45xm6EKW4dnKdtKUphhq3W5DhVJk1kZUmQhK",
  "key30": "jv5gD9NrqQZ2msRmqZdDkShproLfqQQTZU1JSmcjEMqTPLicJVTnJKMhYV62GrLixmnuTRLBBny5xor4xg1F531",
  "key31": "3i5fcipMFKhbgqNPcowNr44Pf9aFsL2eeYnuVnxBTg2BMYsLKVTMXhY4qn1vMkBRp9ozGGMuoYNsJqvhYY2Rcyop",
  "key32": "5PcKKGsoCn9YKGVw5chdQbweNFSQUV3Rw5E5nfhzcsDsL4kxUEaLgnQxJsndaUKcR787Nw66AqtLEbqyGLtwSRtT"
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
