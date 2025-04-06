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
    "rFWmPPXznLMjRD9wiJdRfxKiFiDZWrzre6fjtNSmXKU5KNRjBx8bWjS5uMWQxT7fSTTqbrhDgtGwebUo4UUKNW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FBpufMM32XzTRjPcGzXS9Par76kbtjiBGFzxCrUeoP5pGd95eZSbjsPgeSaFt8EeMTV1aLVmaF49M79fwtALVeR",
  "key1": "22PdgyqSbprk4D7er49ALMRFwANGZY69p3ZK7fNsp5LAhGFJzQHXktWm3rcQEJYofeRjDSg6tGM1VnSqtoL7ViDM",
  "key2": "3FSAn4RDR3QrBnhpj6tUSvJAt1fuRkuSQe4WTgcBRm7z8i7bQZux8F2D4giZGj12zHGKSve19ZqfbNqTUAdeTa1J",
  "key3": "5LZTBtFMtmn8mHHTgkByWvTYP13p68sjBHswfzsT59arQYnpHWj31neZM6et4gi6mecsQ8CRUq8aNPNrQs7tkiM",
  "key4": "3z6Y6hZUhFSN3iKgp4dGap4rVQNpmNecgd7g2Uw5noc44PR7Q9QSL7P45j7fXEdErtZ6GRSGXCPE7kM1HzqMyMxs",
  "key5": "4KLsKTxo9ua2npJUwc1ZjvHf3yPmHunZ8UGfog4jh3WcCxA3j81z9knGTd2JgkaFsg4pMJkxVV52cCx1t8M8brAR",
  "key6": "3ScVuUXJ1ANiiCzK3XqoGhBtms5geCEtTJSqHaWiDdrF637UH1tAoAiHraSGZ4a4PAKsW5C1Gk5rkWxWGm5uu2Ni",
  "key7": "2uEcrrc2ogxB5b1Nk88Uig5b6FpJt3REybwLPzimYk74NtoXrgxik9BETdTeCYTewg5WraDM6t1hynV4kYY1kZHL",
  "key8": "5AFvD8PMnMsZmrnYWMZKxtV4a8Fq6FvFe7pvGoAA5uz2gJkAqW3apPF8dNC4LKMRiQ1px3akWa9iwBuGNTApkY1j",
  "key9": "4CwcrFFd3TgLbvivU4Wcgpgbcny3ZfA2fGYKAzwKNntj2qsNR6AUthMgAJ3cW5ERBgX4LBz2joZ51RQ5whDCti8",
  "key10": "2YTaKSbYSLEcdpGQBJ8BYzTozFFuoRFiifcWs6FWQqva2b9ej8bu7HbhfUzK4vcXKYZGPNHEHH4HsiaeRMwb7VEJ",
  "key11": "3X6SyoofE9bFd2WH8GZMWsNaLUR2gTV4FHFm7cqJZeyh7hEa8Q72AyLKS6BmJx42xzBFrbojsgyhyaRmgGwemEHt",
  "key12": "3Q8Cs2QBX1Vbdw2gsH4eEXo1u4w3KBf9CFRWj1H8UxQj2iABmwhWQYxdxFqkyKxGsYEbmQekeaGMmfrRGRNwbtWx",
  "key13": "3LtDuZQcwX4ymnDfzVnyzERDUHzb4h6M9pwMo45K5jzPLiJAZdcLL6hVmT2dPmLLis8kT8AgGeACdGB9MYLbXCMb",
  "key14": "GKFYzBReH1HA4xkbdZQGNeLy9LHRme5CFhLc6BViWDqX2r8WmLByGt8pGx9DcXdgSVcWV73PTrxYggkDyJtsaPj",
  "key15": "5Jn2S6ydKAGMfsFrkFQEN5MKKENcozTpeSb436phxS9yt3NqVH3QJsRLFxUYU2WiwmQzqMvVba7hf1PYKrRfQGDm",
  "key16": "4AtUK8NKXfUyzdcETvQrH2y8Mqt5RX4zc2X9gXtyj6UKzo6W1QdVApSiCVhNmav7bNcg4fYioyJNBx1Uh1ahfDpJ",
  "key17": "5wirPbL4EcNzg17WNpwVfpx63KfkK3D8Q74JZvjxXpionykRtTuGBwjvP2AdzH8KxLr6cWY7WZqG4nox7wchDtX9",
  "key18": "4mWyumrSU5YgLnJuVfNSDrrAvV7RaspjDLNWZ87bB7j3Y6M675ufEavevozcbYWtmcU2DWYqsNbjWuoUAJXu7GBG",
  "key19": "2W49fRPycsn35ELmSUn7BFuFZeu636MDzftqshdztUaNc7U22qxxpkXPAyoZ1oVEwqxT2Kc5EN9ANLSQr4XfUJaK",
  "key20": "2MXsDZZU4SWxXzqNnnyDgTMDyfbPjZRKpnakdf634R8GednY3y2YVD3iibWsAqjyUvKJFXC6u6LgR2EMekTnqKmA",
  "key21": "5QGTM8Ci5n2HJsVwwvvcDfpaDJY8wdoHzMS5B77K3E9C85LHqPxsRFfF4ddWt8Bmorp8gFfnpwvVUSfQkke8wW64",
  "key22": "45UkVkvFVvN7YmurUMY1bpcZoFGgTCpXjHkRGGvDJKQeEXzRNogGZXcLHRD2d72X2eLN5CbQwRaiYGfY1WiHjrfS",
  "key23": "3eYqJNLDFr667ViZpegwKPXnyQ3hjBkWrtMoqEsqD1mD4Bv78scCBW8v1x3GuHiWHA9Y4HPPCsFUiyiJ7P1eynss",
  "key24": "2TNN1BztLHeNKW26pmeUgPS3ftArvsCwaGb7W5MmiG2zkPEUZvA2rLJ2gj4iwFnhsEhmPJhe2VKNrrXHQJqdaKg",
  "key25": "3Me6aquDGUdzLJ7KRbkHHonjuFRU2EYhSt1nTG8G8WS518CJ3z2jdfNfiJPZdjXd6tN5jrZmQdgcjJFFuoeWM9XW",
  "key26": "5hjFkxsfnk6vE5AQYfVk9PYGKxo5cPJaPDDhT17KS7g1mbs5mH3cpHJgd2L5dwREPJ1DQwTZWyCnK8yBoT1TorNv",
  "key27": "4UczsJgYc1XAENbsxEw62F4ZUF59tF98W3ajPmXokmkvZrWJyAGrEBdacK3NNK4rHs4sBJMkzQsJHwUx9eLcafeF",
  "key28": "4D7XysykCDQLxtf99cQDNkRAvZMPQ8K8FJvCvbpFiye2PCp9XQfRd9uJScF5jFo7ckYS29JLuU4adrpg7AsxoqjC",
  "key29": "55frhXyJUA32Fw6MqrXoGj5mj91F5LgeNr2UbtdSiDBfufZV9MjAoFTUqmGAuriGzVXfqRgJ4WCEFsLBwnG4QzwY"
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
