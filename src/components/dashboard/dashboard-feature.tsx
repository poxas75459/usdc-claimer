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
    "3aE5Vhw46nMD5Cz5djLWrcrYwA96aPPnRoX5EbSjqFQPx4c7dRmnAEAVbfvToyuGSUELjRotSUmuHgkQcLjArwej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKancFhVRDyLNMhkwNd5jvBgGKJgyFoqJNDEhuYb3recLMit57bMBczbgiwVbkeQGE7x5i7za7QB85FDbB3vtUD",
  "key1": "3AGqtfzRwZmrPgswrKkFw2ahX7rBM8PmCCBD3jSkpdSqdpcjXqLdCGeF57qiJ36uyEVWCTNKaiJqHWZu5GRcVZCC",
  "key2": "41P4JidBFbjZtpXpKAsgWTPRpBPWQ55wV5HSTESVmeGFc4kXNLnYmy59K3WobSw3j9fKfxKJZvcfhWoTRA8upRqc",
  "key3": "4DT21WHFbRU1xqo3ftmW7yXvDnHyLqdpC6GALAHwLroW2dvZ3iEWfa8d97rqtLiziDLMf9d7JxfdwvwmQvZXhYwm",
  "key4": "2K7WMYPnMDHRocubpmMWyYSXeGNQQCKvKzTr3qQRrbSC1yw7kgQ4UVjg2jfBhX5pLRbKohGESmLtzKzSKZMGd7Lv",
  "key5": "5nY6rDyCfMU5extvKwkJEAsyXHrFPS9PQwcGCbv11pwRpttvZXm63kLKe9mVjpKCfUvzRymBT7bqjh7azcye4f7v",
  "key6": "iFFZVGjhhSkcSkM8kxB1XDDR76RCxeboFNPbHhsbyMQbs1Ey98Kp1QD5HJiKM3GnU6udCgT9CUDKmj3tdys5z18",
  "key7": "474a27rdBQQZuq19ugN34c5GSUSQciXHHjS8FXBXqBMsMMQFDLkt5xB3vj4VbsJeN76Y3AHjW9JuupoJ2jyAoPeG",
  "key8": "2NqkDXM49FZiokab71NAfgW47vCKXNi2wRMBr3cyyfDLLmXjavBVqqdJYgSiTMF57nHz8XGfByvTJmjw5xhvG5nP",
  "key9": "4jLbnso9s5UBgZAAFsqjSTR2CwQvXwYJcjvQZe1D5fwsBM47993hwMi2XNvXhiN8uoRS6t1r8oPe22Vu2ycBYsMb",
  "key10": "4vPoR2VkrxUpaHmCxWq2hPdBBAt3xqdDZcgUDSP558keb6ku2k4SiwCAokgZA5oThs4LJ38aupZjk4Urc83tGLSU",
  "key11": "2XwYwW3ictJ91tojeZWi4NxueLV5QgWG9eRFF1MSHRUX8i7Ze5JARhSHjuESkchX8vgDhqVC3SoEpPB7Q5hprxGH",
  "key12": "4cr3GerSvNWzejRn9wfwSLxpm7i2phUZXtKa3vWwCa9BzfzsSx5tETRg9aCMZwCXZrbjk9f85ipUb66qEfHHacLj",
  "key13": "48uXhMCbsJZ1QSF8wwmS8A6WTXfeFfZ16jVMMFudUgee2QLmMBeJ7CV5M32aGugFABpc69NMJNNJtjd5KLHLHe9S",
  "key14": "3jEFyAZZVUq2KC6eRfC9aGiFr3gXQq76ybpzJPwApPQGNqnxjve6eYUmCsUtjVXTRDRo7tBdZKS5KRBGQ1Rs1xAF",
  "key15": "PyrJGux3ZAXSPhcHS4cvrvG4ikdixBsmd8LfYKU6D7RjWk1exRkgasVUyZRD7sApsf2Cuby8mCXmFNWtou6fqJX",
  "key16": "2DqBtpKxj5MzyhmzefjMC2wV5fxsbyWJCYJ2Nhq6VbBqXhLe5ezH1jor6yp3LE9bS4RKesA4GFniG3mC6fnoCkJA",
  "key17": "2oJtbzzEUT4cDFE45jM8H86DVe1Nq9PJT991WAUJ4mWtC7hkiBaSTux3RFWyb5gdTorxRYv2oxtVdGKF3KuwC5Xe",
  "key18": "59nB5yEHFik9dUEikJCsEVvJ5M86s9nUkejSNj2ZyngF84S7W7QWMGYqfNqvBbBFzxsfumTu1jdNmmip4gBLaE3f",
  "key19": "2oAnuyroMuCHUCV29fDmNeGrf1eZL6iNzrg2BJpGx4vfvb5HRrQhmWNWm3ztxqEFf7qhhenxtgm3r5edbSsbVLRg",
  "key20": "HvMcwaJLk42ZZHjhppAhpau32Kfec4Lt7qgRwLSsQvGhD4A9nZbFNaUCJQtXKv53NRYpoYS7wUnJmBaLQyyxAv6",
  "key21": "QbeT8gg2qscFJRk5mJnuQw8HHaDe4nYfsp9tqgAPDNRr9f11gGvKsNdyc2D8xG4aFVSKsJcGCd4weNum6dmyH44",
  "key22": "pcN462FSo6HYDwZBWNy7a9vtZc9kzmzePLWShnVmWDVKo6HTwcFGnm64k6V1dxrvggQzwLx8JSMiyPKTCJycbwb",
  "key23": "3KjHDjpgvbFh7ZvUSrV9Qe1PzJPFHQcog5fBHzB6H4oQXKgaJkXAtUFJC2Q795oDoc3GPet3Pr6mz3iEYCMfXM1n",
  "key24": "5vqiAtCqZo2CinaLbx8ZkazdRXerKJnDk85R94cXLRNnyzNWb2sMDYzjRHv21RZaHrzgmzErWLX51XiDgxUGszDj",
  "key25": "3HiBAcaohttRAbqmTPEYz165aCFQoi8rCabVnT7bAyazAHD9PoVxWWsRPGfQxEQv4cHEoY3vKw91mLuvEV1oZzSc",
  "key26": "2Kaa1PnpBGNRmgRQvXJxe6bHF9XTSnVYDeERiEPDyVNc2cjoJGZbwTVoJHXwC9Choz3dHmbMzoEGVsEoZawxWcze",
  "key27": "4RSn3r7xjhLhSwevWriFcNonkFjpHGTJ8sXRFTNSVueXjQ1JE7KreTzsn1Hr7kxsLcvft4kvBVEGsgShRxSCfqmi",
  "key28": "3ZwdrDRt1XNjpRWSatz1b1g74Mr5vV6gpScCEQ77vPNUPPfijUDikPkCAyX3BoV7C8V2GcB1NwYt2duCBv5mjyWm",
  "key29": "62DRaTayMTAoJav6u57EUQWNACwnj83hZ4mW1ZPTXrNG3C5nF2v1txmjRLSymLdb1YUk3SyPNA6nLhs4iorvtqbF",
  "key30": "4HcB72zVf2NghFYMRVRKXLD61mYkcibx3PihHLQCq8TQ887u7Uc6QRbExPBQYtFTcavPaCWnBHgGwsEdXBqzD64a",
  "key31": "4jrB4qV6xGNGuyaNWAnNyxrKcYtnKUbUVVoD8hJnZTsz5zLzuidMdZMfRjfpoQcTDjvf6FuyYVGNsMRn9bqbgrcX",
  "key32": "LwsYPC2jyXV8CGMMKfba1PWshqmsPcXhZaTuMFJLzZjNqvt8tP9i1PUHLskA16SVgrynSzcoznX4RTxpiTnpR3G",
  "key33": "3CmkPMU7woMMqfRQvBrqGBgAVURc6ozULFLMjkADbFztGNqxBp7iJcLtBte1ZQD1NjBc5qmfCpR5PfT2wdFB5tit",
  "key34": "XfbTtE1YMx75sAuEPhpTT8KeZBad19nioPeuT5PDzHpBXRcig6UeWq4aF7ytmTQkLeZYnSC9f1Z4gMxqBHqUo7j",
  "key35": "2YzJMdGnFM2ospiDXARmgxi3WhLzD76TED686stPadADzQJZh5J2VLpmxYBdURFAGXHLn3J6D2kqi9erE9UenVc6",
  "key36": "3GC9xFGoaitNYQiic7g4KZJ5XsiwH5juuEVStEGfDdYyz8CJdTfkR2L19MiDDGuoYg4oSg1h5oxpTSWHnMHcLp3d",
  "key37": "2STU6r1UPhCsRxev4E5kQ4FJt4wMkCsVHPoewYPYsFzuXk3a2wSNMwxbySsMHf6ooFvtx9jnhWxvt9X82ntU2feD",
  "key38": "MkPxHYjJfWHbzobvaFvNzZcnkcjyftQ1nQE2y5wQkby7Kmst1q6GHXif45SJVN2kprWMqDB3GYEukNu6c6nqGVV",
  "key39": "64ofk2qc3DPXXUAPZknkgRyCvQJ7gSRwuGko6UPyZQ6G4TQMP2JxSUgpyDsAsgkSd5nE8i1PGPBfT3nzfhBm28nr",
  "key40": "Hbzr5aBX87D7PtHiA6xAd8BqLYapszhibjHBigjvtWDQix4jCUfSHBNW2NZfhWZDFrmHjzk2VV2QV9XeNkeTWz2",
  "key41": "4SV6AavXndzuwzzQFTJfKdrd3FESCbVHt5kTyvgvB95Zyk1K21D9aoLbuVnPZw9NmHmJAUNEiPGc4j7Mpgzdy378",
  "key42": "3AjZWWFWJn8LpJpfDQqopEGgPo2wzX3Hf2h7QbqHUKQP7sXXwPDDbe9VYoFf11HRBqxpHJNXDEyq1HV5YhcLqmf1",
  "key43": "5jyYdYmTJ6JDnFYSdiaxn5ohb8YjwxEBsKkqAivavtqUFPcg7jU3Dqk1KRHZWPpaRT9oBbMRWD17fJJTYt7WnczG",
  "key44": "4wCLndcy4XDyTqfkVYNmNZPD8az2GVB78mabvKAwYxZxV7RxT9bA9TPeDXuzLFcNktyAcLNYVRuTJ8bFLxFjZEjn",
  "key45": "2tUdsvANY74YNA9Cqio3Jw533RvSjC3Ef1xeghZJtGY6vKWsHek2AvTrX7crDHcFo6SDHAQL62TtevLbfCuBCwm8",
  "key46": "5ApQTGckFPiASHuTFnHgXDQAHAxDZG7Pofr9vjyADCAoD5VREoVZGVLMqBxGyAP6RjhNpHBWcTHh6CZrwFrQQ6nw",
  "key47": "ynMNuSLk5fhGLsADRB1e5gow1FGf1vAZrc48rmsLegCcdn6WDZDFyMcwAgXELxFp4eXym4bcayC2aREhv9UwCpz"
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
