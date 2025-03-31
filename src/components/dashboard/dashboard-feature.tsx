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
    "4rHBHQokdBKWc6EBfAgQ4MTeSmqNJckHDawVksZW5Kzcq8PcAFEzrfDzxd6eBF7GpmNg1qon5LSoNqNUtnJwKYme"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46H2WtwRXnjMUJrcUVHzoSLMHnbVgdZxCBR9jc9m6fKz8aULHmBNL7EyZYF3M8H2xgD5buhSmvmiqWM2fPn59QfB",
  "key1": "415rKCQEVE1oL2NBQPTdcG791JnxpU9ZK6iuRP5BfddjBA5YPLKeSDXvjXB3ddYVePmcqJ2UMs4z5uDyQz8oukGZ",
  "key2": "4SmvecnsGxZEi56tm41nRN9QoC48otuQnxELXPcrXGybgmE4EPo3qsYs2it1Rb31TkcNh3jUztgbuAFmwys88Bp5",
  "key3": "4YdqH55ZfR5eqTLdF2wVLnZKrepJ77uTZ2XF3UAeaWYL4HryTpKy8ZECTArv6M2Mxxhy2iNBDEKYCi65Sfq8LLqX",
  "key4": "59fMxKPaU2UG8DYGB9TY9LYrtnDmckgiAtrzDRR7MJUnFC5etCgr3qi68ZebevzmdVUoxVb3BcDt36MrvZ1t4Fss",
  "key5": "iaf3LQPhJ7k6cdMMxUyiYZZh5JJut58BrVChUxBLFT1WoPcKtZFTrdafCFzFyXSDwZuyQ4Jfz8GxoqXGuhfyECp",
  "key6": "EivYH3kWcq3ZwoP2NKnYuZ6KzhHR4yFpkk8v734oZ6TREzMToLaaHFDxYJBdqSBEKXaWE3PXbZ2p2Xcw3cCM4tG",
  "key7": "2NcXYvLR5gKnM3fdYKvXRpD8RpToa2oC4vVsv5oqbV5UmvXPgbu9oXD6KvVwjrWnA6ERUpBtio8VxHsqTp3C73BE",
  "key8": "5kytv1ABrezT7QVPbhHwGoGewg2Q6rW8xJBhJsatppz8ovNH1SReGNJs6fYuE73d5Am2d4WwVa7xTC3j4JCuUwfS",
  "key9": "2AF2Ted1PNeXANXDkUA6ZgVDzrq8H1SD48vGnPD696nEtRS2hDngZqD4RWn8DkBniqijVdEzTjCXrRr1jociDmBB",
  "key10": "55HFskQYznUiXKtfgFjg5REjG1XaqcA6Mau8y77c3ypPqGfCid2Zm2ojnDdmdVKqb5VJxZ1yfBNbFRph1VbjxjFw",
  "key11": "NLFQErhVvf6MAVHrZCXkQ88LGdSziowBmgB3z9SHJXU1iHoRZRBJg1N6PX7a5AeAfeg4tc1HtZuV8QfsGgHrEuz",
  "key12": "64E5dCzWpVEv25WYH999AUtoGQSBRY2nJxLDWHxinrhWk1G3LooGqNGpMVmATaJ2Ya5rkr6383Pug6cAnQvj3TDZ",
  "key13": "4MxdvpU2gDvdnCg8DCZFXNmZoUByBZih5ewudQJhR2RhqmmoWnXJuUYH7rGnoYtzKzs8wQCYqPf6PYTXMvZWGtmS",
  "key14": "sRRMrEJ8bntJRRkgYB2z8QB9uuhkFM4WeKpaDEvcR8ffFm5hnprAUhxZgbFjVt7zbMLef31K2ptShVihVq1cuaA",
  "key15": "5tuNyhq2gpyndagyGnV3NKiaMJeLFffiTf4HsqXxdzcTgGk47tTd9ruEUsdCkzQGfKL8VdedS8uayPsf9KsVjjhC",
  "key16": "28FwUn22cpsG4m9H9y7Q6vSA75aPzNLR5uoyz4LEo6MdwZfsPj3Vjnt3cqErK7RsZFqgEykAbFLgAYmnqXHpqKc9",
  "key17": "ZWuwUUdCfSJWchDfndf5dLEK91gmEyx5jJkA4Z9GcuTXSQG7svyrZ4gg13BxhUtoQCYh387M5erZyG9BRxoCUoH",
  "key18": "4cyUiku5BzP5enQ7C15fZeGGZYimvz1g3TvUsjxzVefB7RviD9AyQYYZWuwieYiL6P2JNLENEZJQW3pcg5hWAqH2",
  "key19": "2887JodrWj3dE53ThhY4TnghS1PmwfYpEZWU3BEFts8EQJsgfAh2oZBPEhXQLoKZjxJHNatMihYX55PBzAMWHGAk",
  "key20": "6cJ9PMFK4MoAcjrPw8LxAveHuLPEsaS1TaFrnujH8fpgFnkuG4YsKyPV9kkk2phru57Mf9DgR2ZctYDWrjZkeJC",
  "key21": "2Wwpci7NJmrqQT8d9c2PgmzbzLipwqbeQddWBKHyDdSXayH58MMoJnDYtYTQPfcddHhEc83UTnKsyWtqTqGnjPBS",
  "key22": "29C5foMZ1MTJnTeBKCn32HjjvssVXTYeDgrX2GSxoggnWhgh8HG3XA28zFhjVX6Qh8nNDgtbiz3mbxMw5mcJoqk4",
  "key23": "UD3qSUm79WRnyYixdKok3GTSUQeSZBYx6eujnFR8uu21njY4wyUBN8ned5wDx5guFTdTwtQ7j6CwWCwfdGRvaP9",
  "key24": "3AHqPUnG21GT6Eh3mnbAdch73QqLT7TMxsWDZoS6f4uDh7NKozebyDRU3SGdoscC5EHSKiRPeVaeUv2vcJA51cp8",
  "key25": "w8q8f4LJWLDE3AZA4oYJL9MzDkcxi4Dshq27xL6C2JHKPRBT229ujhHbq84d9gDKU1pFfWaje9LjjF7ZFu5JZK3",
  "key26": "4bHywixxP8eupUDmCT4TvzEQuGz2FtdTNkfPZ9M3kWy5AWEfKtSPmEoGow2DoWEg8NPjSytaR5378Mxz8SRK2EbT",
  "key27": "2xZJ2718naxSoCSaRW7x4dW5dXA5DPZTQjLDuVEfNVSVy7gTbddAjqikRtajbEN8xmMurKqNQ4cnPVwppApaEHzH",
  "key28": "2mMWLUxssLWcrTWS9gVQk3Pgj39HJqQbu2zANkeZWp3yaj7R7g3BjwUbbsiFqniAvRMZQY52Xgwn8QhVEPSqk7WM",
  "key29": "4gVfzT5gs5rhWwVqtiP6ZunvbFfAA8LTXZ3ubkYnFqVLheQwHp5L5zvns6kBsoAeckLFVo3JchdbHQh5GVY2haTM",
  "key30": "5PraCA7CRmvft621mQwUVDcidxntxcw9kKhsBhSMi9hfksjLTjTWYnYYr6ZeTVEdGU8UBmyWrWiBp9BaLkgcQ4Mc",
  "key31": "598yo2NeufqEcx5kqStuqn27UwC7wunPX6SJ6ibm1QFtbhZB2mF3Fj5UpUEs7PggzQgo3Ti49nCMk7ZE4WVRKDxN",
  "key32": "4X8DoNi4K12aXsPuiCaLjqdtL2YdKrxnFV1X3i4tiqw28TUZoK4W3Hx8hPy2VDiYbTCv1MeMKe98vxRCRz3ZYuNK",
  "key33": "2D6titNWMikBRwsCRcuT4oozu8sXHZ2CQAGzFo9BrQGetBkjJziHgvrhRMTWXwz24bqT5ehzy6oTYtpwvCS5hiLc",
  "key34": "2u8ovvNPmLCshkZSupaY1JGTL7SHZ8iaVZ8PVMeBJRbBL92UjnLDDK93SEwbBmU8CMGVzHwCjsCLjRSRJsmraULJ",
  "key35": "3GmmXNko2bnmCrtyTwXRe1kwA64Mr87vtdnBdN6vga2d5brvZBqufwyGUVmoWtULo1SWAZDSmCGjdTgDjigwJ5qX",
  "key36": "gdUzoqzwCJcEXH3TdYkK183N6cCohebuyGjyzjjzo2tU9ZdUJW6kBhePUU1n4w5mp8gXsTW5JPWc5pKU5KPUrGc"
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
