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
    "4vC2kSKgqtkwjux6LgahpXCuQ9PcrSHz4ivQRu7L8x4cx6MYKC97DGz8BNi7KmbGbhLtZyvGfvdxxLU9oUBDC4oc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G2H41MXorWVKeEhsrdHGdoe5rWEe5tmNu84nLn1QQFJxCuA8upwoQDhvpzABhMubgWu74Ciubf32NFNr73T8qbR",
  "key1": "47sooC6w7eiZbt3yJhaz39kUKHqV3X1eLvuitwxUYyg9zcpWunFC45VGR6znsTdF6aprnQ9VAaEkvBBbxvGq6Znn",
  "key2": "4bZPbMYQqJDG7kcFtX6uQmY4g1HeJFMTR3NEYqFCx3nbog4AfP6hVd6LCYApGsvNkB6LeHehSmJaMdAD2K1Dy4Q3",
  "key3": "3tyLc1GdLz6ntdfAQfyWMm6cy9xYb9Qra7nF8Pnq5WDk4H1L9Qju8gUvipCqVcQeBs6JCvgwkSEtqZ3XPN85gA49",
  "key4": "3aVEs6WLaJoWWcFSAcbo4GXK1r9NFAW1zMCdG1yUfJgsbT9hGk6scEACsHuQYiWrw2Rs4NQ9LTAJyggjUyjrcKrN",
  "key5": "NszU4YAWoBhoWp2xxEhamakDkxwHTaMCZnVaXHsdXYwax2RvQ1TKzvCWkgGN1tDpE68uRmG2L13mTVAEJN18oeA",
  "key6": "rqFFcXXVsxQoZj1Fcxpi5adez8Wig4j5M3UidDRpr9LdCcTo484PAGHbtvHwCqA9XY3KvhABHbtvdZLT7q633P7",
  "key7": "5FUSYAM3wfr52MBkozfgSrpe8tANT4RWJdovQ5PYaEA34vYWdhAf8paijT66aULUAbJ5ABeR8gF77WQGwVTwuLN8",
  "key8": "5mbdWob1eVyNtWLms9YUAYT885RAt78APPQKKWRxtq65TRrbNcuWU6HqJHUTMwUBVvdi7aYZYbHqrCY9dr6sS19g",
  "key9": "4dWqbxUgopFNeYZ9xkyR6GHQ4tu9wNE5gknRWrbgg1pbidy4EfHABHVDquu2GRHLDGVoviVf2XsV9BbZdTSFJSFX",
  "key10": "35KmgKULKkZaEt9d3Tg5cKyRraA2L7d76Boo9BLXD8S8rqpsRA7ofDE5zZJL64G8AveqbwQb2uXyPzYnYcdFFrqZ",
  "key11": "zmheRU6768MpSgRhXbVsEEex8hfs4SonwBTWMg8f7NpJsbFbvyQPGzPEKthjhpH8MfCEtw6ocjn8fSuBBaNrhpi",
  "key12": "ZaQYfCt6wWFmHSVr1xPYRDkuH1B4gKqvYuhvE3zqYyV2dks7jKuMd6tEZtWJEc3JzEjkRobhwG82PFhKuP6zy7E",
  "key13": "4VT4wdrdHZ9fuJku19L3kQcy9CKh4m21baJYuxz9Sa9uJZirGcXdY45hWrNUFEjWTbdpbHzBzYCnu8BDjWhbbBcH",
  "key14": "5UEbYntd3V4bTFBhFVPh6T4EmBvZpnmEhUgayvyQTAfQZFWxr4mo9BAVRyJHvMNjemgqfaTci2ZeA2RzDfeaj71B",
  "key15": "5AkYxyDvQHuGZ1VmqtuVNsaYyWKfVxTEsEEzpDckgMc7AbEPtGdhuJwvGohQZobtNzpk5yYUUrLHkN1iHTuYwF33",
  "key16": "2v3mPcXZ8bfcCmDvCtcUSoXc99DmfVCZVm7sthHEbCoRbByDqWpFTv2jjgoZPL7gNfCPNg4Xd19eVZF514HAQrL3",
  "key17": "NwBEWTZUCuCsNTVL5uZ9yWLLcswutStgvm9ebeC4UMwTh3ZN3eDpAyL5RRAmaxekE4Sx6A3MfRNQpZw5MqhpxzR",
  "key18": "2GLRfMpTb5hBvsFWgp92Ab4jZYsJPWyeMcUreDNEPYKaP8KJcAKCaGvm6UehFkNVGBHt4cGyj6nJ8kDt6garEkUH",
  "key19": "5PoqpVB4pkyMLuz3wmUcRv54CinoubR4bjuGv3Vb4ovmXrmvAJNTAKmpUoPBQigh4JDeCyAwXmiUJJwqeL9Nv9pV",
  "key20": "55JLzouTySGMGapgGSzjC7mRFWL7Es12yDY9L5vQkp2HTJGpELZfkbeuJjLDAfez9DsQcpe5jbUoh3B3fXjTXJcX",
  "key21": "3syCRtcmQ6mTgWTvu6jkRGDPoL6ERZd3om1hfCSWgfD1WsD5KXTU68McBPZsJ4DPeKLgQxwnTRLShjnT4kum2JSh",
  "key22": "2RVwKamtWBC5Ha9eHf9EZv91RmRD8cCZB1NgnmeBS6X5vrChWVVswFu5gXthxsTMQ9qmhb9ZxqVUvLi9Emh197js",
  "key23": "3d7GUFrZZst2JR9uqoekPR513aupBCGJnuqzKiRTrvSgk27zeqyrPsfm2cSM3iSxhxKto9BBxXyauR1xmBeTMHdA",
  "key24": "spr8Z3Lfj9ffsHrfzzym2eyVfPVbZDXAzWLmGKNMz11kwrEm9ZMwR3YDhuagmkejWTyp97AKjDPnzWpSrvkyrk1",
  "key25": "46Bra7H1SG86FjXHbhcRuRLpuUEUCUMFxV37VsT1JPU9fHYQuCxeFosYactkmqsGqBGQ7LynG1tcEhpkowgt8fAq",
  "key26": "3CXhEcpgmQGGaK31tgFTzBLtqMqWMMkLcE6rZJSwEF7NKZZ6gUAcPy1jMhUUGpjjpzBvedM6bWwWdS5GJqb8yoty",
  "key27": "3mT2VnyH9GLiSUy4ZEwoxXVe5BF5Lew8VGurakeriKErz2QHnEFxFoGsAGvPr5hy9ymLQZgNK96jERU2t83Gq3mg",
  "key28": "3kqXtVdq8heMxJXUsPpMHMvt3kqizq1536f1GgrVzS3nZpzNffynAuwSPP1QZd29T14up47BjdZPMxahzNUwxrfa",
  "key29": "5LvdEZteag1KMDtXigG3dFfAxXiz7bQdvVH36jGN6oVKqNGp1AbPD8gUApdvzgQthx84cA1W7rpsLW8i9awV7gUf",
  "key30": "5486AWSQ9RSp9ubzFS1NpCyyETdMygmjCumbsT3jymiGv6fxsV9untZQVbZL4MtwSVnud92RLUtR5kT11XPQurB7",
  "key31": "5pVcFGJLGmTvQucp827BVaNqzK4Wp2zRY25uYCshhM5XsmRaVjecjA9rWnUqMo7F4b9LypLqNobsed9f6gxqNi7",
  "key32": "3NpEtzw9Bt3LX5FeR2yvjEzoeb7ost9gwxhqWQARSK3Ks5vJHvGic3ms43rgbWfSHRrfUVRgpQWYyUGVpWLKzL2Q",
  "key33": "5gDsYhQyS79dV6zaA9DyUHbjpA2rLRNQU6sPToJsozmqcDrFL3u3Z77jdV28QMMgQtGDXJQEC39j4x2uArAmGe3e",
  "key34": "5U8z7apEXDB2roa1V6GsxnKU35kEQhQY1F8BBLyZJftJR6c2h8kMTLv6bhjC15LTpQjwM2t4hEG47GU1bfMKdUZQ"
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
