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
    "5MPdLcuEfA4tM1hGBwW9AjRJL5KenDtAhSY2hAv4ZRg3Y66Tk6AZCjMtwRDc1yfHaBgJEyfg9JvduMHXBka46hG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C8F8ejeKM3fWSh8aJhUevtLdpWqbRi2oHxFCh9vSTEZkPGjySGfQkxfbb25r1ForxvTKX4Q5YStM5cfZN6ypBvD",
  "key1": "4JUMyTcJd4ktaS4fKxLswbaphBdE862EqFxNQWNwPq8k6yMPEPSMU42Npy9VsN1JcZPZzmu55LeT7rHzh9S5ejPN",
  "key2": "2j2kwkgtG6KnCitwjF918FQHZbNdxfXZ2onurG3tkFLiFfrqd6WsFv4vqCDgoWbL4DSgy3GV5U8rN6QoXPruTPPk",
  "key3": "2LaBkZtoC5iwHE5JJmtQAryyHqcFz1hP8ZqFAdnV1MbsViyepmvXhk93ZDZV55wXyqahzNazQ2tqV6HuJHFaRp9z",
  "key4": "42jgkKvMJ9C12Qpr31vrGdMYN2v5CuwRBxpJCnWiY4Upxt8WWyEER91sRsQ5vaAR5JJiHWZ1EBEgyaeAKxW9tiyW",
  "key5": "3Pwyrcys536Fom63NXzw6yZZAicidNU5VdAnAZGoT4EtcrvcnJi5dRnEwTjQF2JARRvnbtxDwWMH9g4yQZK7Q3zM",
  "key6": "4rRQkuGZ3sA76hXbERTKnvi8QQjmaiWsCuVyKKY4ERRTsG1uPjeNjmr4MfqAFxSVopWADxzD4hRKVBivoeNJwzsg",
  "key7": "3N1GFWWGCYUMATMwyxtR8Y9vApUzdxv1AprMTgD911Ezm2YnNb8ErHcxbDUz4MuZCtmRyZ6JGFLzeDjXXbfmJsbo",
  "key8": "5n5JFpCnmWfV5eBE2RuMWw1y7p9BDFTsUJBwyaCD6tHbF1KTuGgDUohWMaLt1A35z5B5oJqY8LixZihpQtobHyoh",
  "key9": "5wPHaxdxTGt4J2g81MpjotfPSTd5bZH1cphxeuxKyRePM8areEL5pwdqXh5cXqTL8uaYhrBP5hfAjyum4xCVoDF5",
  "key10": "3FBSPzuxGCFQq9XKBdQ9zCruGeNF1D6yqVTPfsgdnjDAUzfKkpc5hs1vVnnXcuYAd8pF5UWJFZXLWhJSof98KKwL",
  "key11": "4CGSHn3vs38fo2tfvhTukFPbnCpi7mLLdY35Q4DEYvqKjDhNBECLr11uAk5zHtUqCzL9HTR6Qn5YiNriWomVqaAG",
  "key12": "yH6MSMa71yE1PHBxCed3yJEikp6sZ6EkgXaLcTBzLFQ8bKCsLfmW6ZQ3RQbS5mAuoNZ8WioUp97hbGPVGPMaXfB",
  "key13": "5ai2B28HyDXVabgqQ6ExXFQCCUiwqS7gpcHB8nbDR2VwnzHxmBVoj3CAJiav4n2EcWKGwwqPtu4DikogkVS3npKz",
  "key14": "2zfpWaV7PTDat5xmfQmTdZNgN2S5ikj7h73JLNgHP18JXNBtKgEMerTLEEEFuEq34VezuS7MVSE4p5LC79XFgLcZ",
  "key15": "5W1787H27XVDgeUEKCduMgmfaxmeWtJKxZp3Zd9NQ3aNtPECEvVYigxd33umhNRgxZibs6Uy5Gt9ySsbaqgaD1Ka",
  "key16": "2GmfKFgULaUfVAocqzUfFQSE8ipeLxYnbW6GsiCc3dAvNhZCN1oohBQU3hmtv99xoJDQD8r8AhZCLwDxtAUQitCB",
  "key17": "58gQFb29GicvHkUZ7tV2KcA4WPzt5MVTaXBQZVu5TKovcTGMXwFUQm5DonGwEaSUD9NMY9XbWTaA66ksdkqvKs2H",
  "key18": "HCsGZdWGY3wGvSLSRU5kDeCiWDvZdj2KRnRyMrNyFVNJ3tGGhZ8PAArBivgeXLDpkpQYHhLtyYTJMC5ZoRYPyWW",
  "key19": "eBL6KPhjpmcV8bPj9GkTnrrnLEyJYPkZYWTMeqzcEpxr4jJ26fmFDTDenv2oho3W2LVC3RoyDgmp6rEh4no266Y",
  "key20": "4hc7TA88zDchraeFL1KG6Xitd7YLkXd75XhQhNYzDsn4kKb3SoentA8A6xv8Y6LseweJeQfn8eda52ri9QuDWs48",
  "key21": "4uWxErPwcu8dAEEwH6Ek2bUhCjXxDW6M3oXRZNSC8E8pMaYYHjKPyXee5EsszkkWhY5U1NCpuiCED6kMRTs6FPTP",
  "key22": "3EgxLYJchx81FdXUBUDYv3FoAvXTWVtb11aJ6JB6esLSvgvchQC235ag4DQbHAFrMexzGerYZCDMsWUeGeRKADcf",
  "key23": "5HVFcQ633UxNyQkS7XGuZ7L9hewi5d2ctpwY2ezt2gdecDxeA8dzEDwnaTwTcvZMYezrHuFtyYhnoJ4AQtUdt5MN",
  "key24": "Utj2QHaqmYMYQTB93fnAGc7ZmVRGnMdGF7YYqhWdfiuuwzWhm9qGWXTZ6oHTLz1QYb77rdS7b9rG8GJSNP6Usuq",
  "key25": "5GS3wjG2NHzqqwJuPzHjYwSCdscuS1z6rEapX3U4BGRERYbXicWD3tfRQVLFYcv2jPuU7DLzSRsZpkiv5RmFMWRZ",
  "key26": "2HYHyEZcCosG785MCdQ5Si9nkFgf7YmJWs5uYQFnc3Tw9gH54rQvAqsX8PCUSwQYrcu8iPCMRq2nymwef7HawPa8",
  "key27": "RnzAGgKJ5XJb94VpgyMARkDZ9e4KCwWDSXCxhgqp6QMzKryBiscqy3Vw9thwxs1DiVNYFDKGQYPrtM3DuvvB97d",
  "key28": "vJRdrpHw8fDNrQiaZWFkdJ61VrGUdbvw9WrUqmyDvYBs2t5HSg8cwjBbN5BEtP766EEVSL2PwJgZsSKaJxATSRD",
  "key29": "26eV5soQQosJ99DGwWMCdiQ6F42dKBEtdJrVJd4kH8RjjjXs5n5rUXBhuEoQZ8ibTT2iprZgNhYJqxffRRqwvQX7",
  "key30": "M8CCNWkV6jSEeEKWJsJtCQEUyUHDAvmCPPGLrDhYebatBpYv1cmXYakYCzuvMhUgWkSSzjWSrTYxXHazVmPazXV",
  "key31": "477H4kDD8qke1be5qjUA1iJ6Y5yA5qECirTSSybcktMDdg3JdYcafyGECJMY3fypASXZfpi2ULRinokkfDqzF7k",
  "key32": "5GJWLJmVfydugtRVeCtB2DFFhDTTzDno344FGRvHFvV7ttVNzjUdFwV5E2BVatQKVo3zY96jso1QqsrEhvMdWWGw",
  "key33": "2jzJw8dfvpuVpHCdiGsRyEHRqo68YibmakSfEp9cFGXRsTbn8NkRyRR8NGGn9Zyni2XhzFV38KhTuVnfBbTJCVjW",
  "key34": "fvjSaPjMQBz6z7cRfHdm5MsLhygeXtJ7aXUZC46HA8yXQZFTKVhicnsgTSTR4aeLqiumZ3i2rzsRoKbKs3kL4m4",
  "key35": "4o4SeLEYBhQYVf6pcivkABabFgoUh7RxFTZkKGWRbRdxHLSouBCNFa4YAN6N96xHM1N3sdhZesDhqchZWJRnASRb",
  "key36": "2xTN1xuLRUM7TgkhqHi2SKC97HrymuSopfiEobvsstmQrFFsqXioBpL1ibVvGcKVF4ddF9zKqL1zBAi4tBCp7oUt",
  "key37": "3cK84bmqh17KV3vzYRSk1LWHZWq7jRzHqn4kqEtXNbgsyinzepeidv8WGu5gxnhMKG5ci2ichTwahsq9UkJYPzRG"
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
