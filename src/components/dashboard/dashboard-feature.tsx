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
    "5ErnHYQDgWN79VruYm9dH1xoX6eXA3BPtA5uN2fr1ZhorYnZSK6KHXNeEUwWmrHmR3ZDE6HHKcJaqSrtuwQdktRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QtRYpJ5sT4LHpNFKzhMgzMayFFqQYRx4gCjfPNxff8ottnsmJZx89Zm7JXGL9WYekEWScxUT3ZM7roukVrsvCa5",
  "key1": "4oiv3tAdkeCDKvg3RF9UpwFhg1UpYyrtPuiMG1mgzkpdyMBfdq7oBSmvEAu4kqNJynLRJ6w6jVAz37vUGnbTNZcN",
  "key2": "4DDgQMKWk8FMhzohPF283kazcsj55j3m5ZYbz9BQ6C6xMoBiMWCGmjNnzUjkKbbpdEhuM5cMEEqq96gYDMt77cnL",
  "key3": "3PfRqRRGd4UF76PLKU5m4CuEUsQgXyPzmgpsw5cwLbrTFBNna6oJmm7mrTEDv53qjqRHJqAaLbC8ZAh2dhYbzxv5",
  "key4": "4FnMhyt8NTNq5hs9tSTPthm6vfAyX88t8qnsUk5vFx2WCh9tF6fBXSn8V2LxjEhNFKLUiCHNvaEJYxoM2XywDACt",
  "key5": "3GAXPzTBKWHvcBA73MWfgCGSsXdTRjwstY4mZrP8uP3GEbEy6bGu3BA5qdwb9Sozz6S1YJ37Sqkm8R9PKijxRe5w",
  "key6": "SqJDAdpQcy2NmZ6DRedNfrLGcK1VefGpVkTj7MgbYgGRiL9BHiAkR2qZdmXWWXtoCNJLpWY5nRsVqnENSshqtau",
  "key7": "56anPigz61oWn3fbSuAkq1mTd9sc5GaeDxjHHr6W6avFFqY561PiYbkXDtp91ooLhpP3cJvwWnrCaGhSKtCZAdRU",
  "key8": "3dKCSGFig4UxdR3EsdFESFTfHJ748uLEx8dujoWuYtjn7FLdBQqUp1DQNtVCmbRiBXgQ9fKUqKh9KpfQGrioXXjt",
  "key9": "4iGprG5Ye3TSFwg4i2j4eSZuu1GJ7oTLT2XS3Dj79aevRtTcpthwrfLmVPsd4DNf4sjyBk99AbFKdbBAd4VyHmpZ",
  "key10": "3kbXjvxSr2CxpajrV9jwcDCmpU1Z9hZVepkc9DfXUTHAjMQzfCVDBi85Wo44YS8GtAKePTzoKzSJxX78m1RH5Xa7",
  "key11": "5hfge7929iChwHUUrVE6kbb15WPPaQGqGzTQBdRHiBCUqCTnvmcVVTWgMLawz44Vq4Rte4yZLy7zQKxLepamUJZ",
  "key12": "3Br2EgK61LUuDW4etwq2MjF1f8aNAbDg8U6cgRdj2FLuvdhk8BBQ4j9cVRsBE8ojqjZJ4NvJbuHGWpv3n2k2xqBr",
  "key13": "56JukDLcHcgT8Pj6xHaFyqJwwb1LCyrgjKt9SNUiCj62ReqMjDzus4eCtvPBTDxK97UzuooPCudqUpx2qEwG8YFY",
  "key14": "4P5bEYAurcAE2ArXbP7wxTgs4qoiiaKSrV6R7ExoAu4VaAXdeBCyX3fZXKrCjjUExh63sW7v25NAPBz5g8pqjFv8",
  "key15": "2s97whtMh3FbmUMb2C62d1zDHtxMj8KQTwRYztuJHT44AACwXBfgHsYXGRYKnNwvtAGFmjCjTabjZSMoPmaFU5dK",
  "key16": "Bkimvv7zKKokrsofkvefxuM5LP4xYAEE2jB2JERTgqNbFdYYvSw5KPHTB8cwxy5aRjVTSzNEiskfXEcQqqtbhxA",
  "key17": "2C3C6qBXFhRc4Ay11g4tb4s4m2HrH5C6wxkfjVAJTcwXyjc9J7MNJ7CyFhnqwsbh5Ag2W4Mqaq649wDPqyGyXzZQ",
  "key18": "3TuKCUkJDCVgWqURdeefvXmstnqXUE8A5AnnYcDpC3cnXEj7HxvUbHgS3N1aQeNaxWDucTSXu5w9xzwcQn6o7RoU",
  "key19": "2qRZ88JXNyzNPH1auEtjg2ipHiKdoEniknDhWrKkC1pU7RURDMsgUpjCMidg1DgzPpTR4Msjq84fxZUvdt5dFszs",
  "key20": "4gpdBMc6qrFj5rLmMJERnJwzUWw3tgNbTwCdSURHcwPi89PkWzXKyLi5WHgJJPwLdMwN86S7Wwkt9w6sKoyctKh9",
  "key21": "2CkdbuLary6MiD3yrAz8FAS8sdgpNgxBJJqiYuSzHAwvHWvwfyMbf5irzAFFH5vhk84f7UwVpR6oq9RSEuEbLPUf",
  "key22": "4iyxwh395dhwwSPVACo72MLuguEW9AJjTTmoXLZ3HJqngi3oTZnhjJYKsVCvsDuYSQyQkWiPxiDNwUTj3rpUFpRq",
  "key23": "56UZc8Nfa357iN94rvQkZ2cTjzptKTerChULbRcny7amzHQts5ZHioHMX6dvnjMsWNu4VRG4BaGmaRa1nhgRfMgz",
  "key24": "GBnoWbgFLD2BtmxYdjNafamxTs3urowNcHUjRXH1xGDXdisMsrmQyB8FPCFp2aWQz3AGCZ3vq9exskt3FbAevuv",
  "key25": "5TcRiV3oybReLXVaPcWoqY4jbiTztJC3TAi5G5xHMaGDuPwv1BqXJWRgop4c2RfJvfxCKzxePyHj6mAzG6BjaHrG",
  "key26": "466nxMGt2Q9LhSJkPHZqToPbFU1mPppnDJHQimT2V3XzNnqFf8gZfUCrBqc2Ke3VKd8hKYbnuqSxsaoxgPcn1e2X",
  "key27": "3QGS53gyYKK9dtLywbYHKi6eHTP68pkBjU6gAWVahJEH1gRoJmscBTLYGvu5S1gxrp1B3MU8py9AiuXkYGgLsvbE",
  "key28": "5nZBLfMabo4cqbcgj8xiZyRzsx6EA84XDsRJAmjNGkz83C1DPHHpdoVjWTGMTiodH5sWnqUpHC2PGkAeeUPBBmp7",
  "key29": "4gSQvU7k4gXEcBNjZdwaUd8yrMSWWY6bB7sNtJfEfhXNw55NGBFM3USLz5KjSx3nCGyYSVnR834wtqbf2KzbroKf",
  "key30": "5e9qF4BeiVuzZnme251BEANJmmkFsDGL1yh1J2acNfEcaMT36MwpMHGwypjUZC36pf7ViwgwhF7EDARhHHD7TtNP",
  "key31": "31anPHKpCsSRsrqxRTAmvjDuNk8ji8B6MjfbMd5X1fYuWnpYwuNJLpvznxvkWcfQZ5kpE5EoMSPGqH44kKaiXoMB",
  "key32": "4VocZFFi29vDbguYDPRQhbzXi7dQduepdPfPY1VKqEgqvrjqrKZyCPptjharCWPgTPK6nYwXJHDsa2F93C4mV2P6",
  "key33": "so5AqMMxEdDiqM16hu3P7eJgYbZGcyN3bBEg6Sf72DVY8MZJUhGtjhVktsDpCrp9ryC5CKE8f63Li9kpdJkQFyM",
  "key34": "2J4aunBfLg3QA94wJFrwN8dJhgT4ym5ZGvoXtyU5HbAYqtCN77ePifoRdetQqGLqKnDxYRNiEGVngY59iW5KRNY7",
  "key35": "55V9LHqoRyWsuFLbLpos55zfKhHzm1NZj2xPq2aY1tRqfP4achyYhA5kVh6v3cmrEeHvvk7NH91Zu3m3pMuneQF1"
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
