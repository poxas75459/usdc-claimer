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
    "2cL4sGtws1vAcZfRo8UoSTjyALjz6mXa4z7Fijvyp61K9Gcin1oFxtATmK5TCVDWbBaPcRXYN1K4CC23dGzho8An"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zs2LnsDditUR6ZezPeBCnAVJZ9FPqUni7BvrrVM1diWyVrfrAVMMVXhekohmrJGLtKZBZcBRqm4ksppzQC7YV7v",
  "key1": "4SgUuKo6sVs8HDjb5X5m9NDiCC7DxVqzU9SM8JbhN3T4pfH718s4e4YuEh4LGy1roJ1X2ct9d6cfoZk79D63EXxk",
  "key2": "51T32SJszix1jy6Pn9uKE88AtAMPj1CFYkDvxQw4KnJ3TU86Eo9M8MLP2YfNbKSU8SsQcBVN2g9kJjFY1vmfhQm7",
  "key3": "2EaSXa9q3LtEHSQtCP6Ztu6ZsVABk77nxWs13LSbARLoWjoLiEiYSZbxKCQTiSVFCtCbrkyu7aMHfdsZsH75vgz5",
  "key4": "259YzUYcoHkNsq114RwbEUNdK2DcqZ5nEQfFfG57asTVeHfLQrbGygFLfo8pmJbsWyrrbabPQRMvJK5gQWqkJSmW",
  "key5": "J2hWLdKXpL2b9G4yfqHXJM3t2HPDu1LUxWGpEv8NyBp5KXxgpxHv3L8uG1gNe5xDhYEFK6vfz3nBjGkZf7nG3ja",
  "key6": "5JJqVb34cE5XXELoGuGtJeodSKaYJ2ZBrsREC68BgXuDi34eqatQarq2nuU7figLJGjokArhfGsCMNduxXHhW8yi",
  "key7": "4BdQSDshUoUogB79ya9uMRCpm48QbjBtq9GLNfhP1j6wRNJyWdcGeKw58RBJfZFLuwVASWZcxaX9fxAEMYGqmAMc",
  "key8": "aHKh57pbwYpsF3es16ppVmX6g3fHXhHtS4rhPVkLsQaAkz67mAVKtgYmf8fLEiUc8UYigJohaY9rcWcdr9H7iow",
  "key9": "5sfct77z1ws311vW1WTS54Ccmuno16pBhVVBMCLmw8dobSzpMB3F17en6WAA3AwoQDm5c3uHSqUh9iXW32wfUUW9",
  "key10": "mxQ5gLsusL1VrQhpseoxZbPV4JEFJjdrrzBEvLZY5CAkuywAr7A5nWyUDDY1PHgkXkLqf8fFtaDBUnnKSJx3htP",
  "key11": "3qfAKELu91bsfpnPNqJUy8paVU5n2Q1UWY9w8Cgon5YBWowhh5e3n7SJ31cuKzVX7mpgsFHo6Bvi4fKsCXHWR5QV",
  "key12": "2rZ4FkKzHGPdyVoFhGEtmsRavCwZwgXZtAL8u1EWsePBciJWMvVxAV5kPLN5PLPckEyGRDeTX8iHpojEDxPKgQBN",
  "key13": "ED23BWJMnfdxmrXgP1E9HbPA3kKNYkChdN6mY3C2ojZy6s7DPYkFd2CCszwBtVp6TDkbgktFGhqY6hFZu19iZCK",
  "key14": "mHeBBpVTeiCU33GWRyWMxBjLuK497CAp9FQz6JhJDT3DVefvE5QpevtLHUiskC7xyEsbLzQLj1B7q2JvsxJ4r4L",
  "key15": "37fMZUyqnarCDJf717gRxpAsWGBzWLoCVMHXvkkCnx4Pd6NGg9WoUEqvGeoYmhar8JwnpdzuyVPCaY3A6mM8CQua",
  "key16": "5rbk6hqr2jgaRaeiY19cxAkhmEMQNDvi3YYY9GzVpRD8Q9Vfbd8SbJuQE1quDGEeknFdnDdXTBypkMRRwBpAuR5",
  "key17": "37261CyAvGiotEuBBaJJNa4YgkmTAa9JTxrpWT31uApm4KXJQWHV8a6LwYYGQ8HM8iEn4tvH1C3Gy7nVYMw9axCm",
  "key18": "43mSnWr3YHq7y555KukPxLrmDPAawLwzjWRpdTtKzbpjR7376adB9avXwMJiNnubJz62KWbn2mRCRJdgMWsxg9u2",
  "key19": "2ouuTV6ewHkxfSUCYp38nKvj4aQmQWxQFYr1iDbirxKwwmkShg6Yh5Dfv21ngDFGcGYBzmtNXKNgzfEpTZm1GUyf",
  "key20": "5GBy8CVCXTwmbPD1GJhi7kHuvtyruHtEiZN32CKj6BidSXiGMRCkWWX2jMDCy2nfTBwYqzBZsP5MUXh2Txzauz8x",
  "key21": "3xDk31BBgqh1exzUfod47adZGDgphktWoRKryAJzX3BB1RVPA9F88nbrDEvJUmZjNwuqPeJPQtKq1jbv3dmPoNkh",
  "key22": "4Ptc21cX7ByH7MZEmBmSUNy3uJDV6jYEiHaD1B397zeSNVHrXTnYXmuRqNwJAdCNoaGfqigQLrLbU56CPoT5o39F",
  "key23": "4vRquBFHw8TJpgDnPVYefXi1o8NpNHRTQZtnaBWXwybQQgiBoW9b3GfuLP1w149GkfHPdVqXufZXAFCUXfBHNR2t",
  "key24": "4ySCLNQ4gmf74zMXt8fdMdypt96myYgf4DEJafM7UrY43mWt9mqYSriMrrfqqJFwTwvUzxJcg7S7bhhhJ7nqgpgu",
  "key25": "4joGAZBp1oE4MAnsBPtRg3PEkd4FjUo8ntrhAC77puva3LVbxah9HKu1ygE54UxCbUzK4F9aRyHav2Ko7UoALY2F",
  "key26": "gDSqHELApuF8dDuL7QBsnbaRALnp2EBh3emxYpektD3jWnZKSkHgr4HUHkvZnqzGBz3guZT2yGa2RA2MLEaasK5",
  "key27": "4HKLynxaiLSisspUdJYFXuTdeb4KGS3HcnPvZBMrYkJUddCqf2DCfA179iSyRvybDkEgpRhBPgKKK18cTq949sHh",
  "key28": "2sAN7tkdtEWX2nW1hrVggdZhA1oHAx3qM7L26yVK3isNZMvGSXx5XZe4ewBNfpdnJMJ1hNnGx5BUzVMu4xpPXxiD",
  "key29": "3bYKpCFSFQrfLVRMDCdtfJZywj7WqKWwd5FR7a4ALxQXSvZKtQdCPCMTEgNXEeRHAqiLcGbWatfqgnQbKZS7UGKy",
  "key30": "5zHvV7F7gpAheuZ59oY8Z7AnWRADsBj5NG7WfZT5vkxHH5SiCbxaQwcPaSDCz2gg1DcrnCPJxZKYLEtuFQQax6mU",
  "key31": "3borFVH5Cbgh6ztn8j8MMWYKXSVh2X22wmXFZR4vX9wsSWMMRnLszVf54Q82d16zYd35qhVPT2TZD95o8hEmXbwq",
  "key32": "3jGmHofnBxYNZvJyTQexq6H6TVojjcDXLAbPVHsYUSB53TK63m3zC5eX5eqEWEnK1YAaRAhL2hA1QK65PGPKuX1k",
  "key33": "3k39ZBpj4HYJWXwyC2g5aV7rmcJAWs7HZx4t5JDf5zVf5zfT8jAM6xxxf5BSg71xvQeiDBX1tmYWTmsWBG1ciuSG",
  "key34": "mVubsyaZmM6pYffNmoqNwhMNC1DkYUmZVbwfVaoJn9t4npNN6wcB1pxQtMkp9AHuPQpXUjxXxZvrrYyerf5ayEN",
  "key35": "5kheud3M9fPg5TBdUagqu6W4Kfv4fJY1Jzc9Tn8yMeiVJjsXUkQiZ613V5ygUzQQRJbi3ZFpj17g5WCrBgkkkN1S",
  "key36": "3dvef73VNQoBYfXYMswb5qxKNPh8mCsH2f1qC9w8ZifSznhcSLmqrfJsJA5DPXVK5tAEAfEST8UU8SbqWLm9T3pp",
  "key37": "3ym6chmkeKAbZ34JM22Sjqnq4tYrXS58XAhLutE3n6t6hGk6VFz6gEKuvcJzbAJEyPtu95Srv8UeRw2jSjn6yhF8",
  "key38": "2bhKWwEWubW6KzcZ7VF6dMNgtgqgLCkN7vKeuNJV95ygAftH9zdqcRLm14KfM2WwvsCPvrUMN5Km8UUp1Smg2RMx",
  "key39": "3APcFLmsyLonbWDG4WggMaizcnZTDQ6B3BVdUJVB288t1U7PAERy3QhkLsFu39pQgpPH6TEWF2hR5Ad6e8Z46oiW",
  "key40": "4sbkUnWAXaC1vhVqcsWxFFXQp8ShbioN8JiBpeqLYv2os3VnT4YRvXFDXMVbVJTMw6m7CKSMpYof9fDQKBK4Cokg",
  "key41": "4ydeSa8BzSeuoeQwVfsVHbYsL99HCzHGHRzhdcL6igHzr6UsckkfW5SS2uWjvoE45bsrjbCR27kgdyAF7d7gZ6Lm",
  "key42": "25wdN5ohYwHdWYi5sFWnVczp3Nim8eAhcZsCdkugvqQ5Dq7xBPYbhXqSYqUedVNYgQ6aqPQjxkEwirwpYtvNfY9z",
  "key43": "edQzqheqSRkYXzRPzXA9U7CbysKefZRSD3onBDopFAyW82MjEx5tzzyay4U52mCuCuL1SBTBLcviYX1Bn6uk52f",
  "key44": "3K3Wr6wzEVg5MAc6VPm7QwhV4C38DFXKgEGzXpeXL58ningfQiiDU7jUxVqi14NkWk9sYi8v2vZDiea2JY59PSTz",
  "key45": "5XikR1oTozJ3ri4DwVVfc2kWe4qUxoX5mmj7QVpGBtLTKqvkiNE3iNhozk2sjxmbvnc6n8ApAAXSuxBDkzt2iE3g",
  "key46": "5a1YiPLNHyE4Gnkkxnm9utFctFVow46UVkMrP9D3sEeyLh9srCAydjRE5ozEoXoPBea3QHRiwoHKvk7t1zFZFeBh",
  "key47": "4FM36oJRVpGMdeGMutEvR4JNhNSC4FEZjgGhNoKYFwPsDYy7fnZo5n2zdN6d7ahsUPmGUday8TVTvLbXvdN2ptey",
  "key48": "4NYm2JFyQBh1k6MQHco4DkFFkXJXpJcMhqPZexAVhKqTJYVUmH85BP3TcKTe1avKFzsfpcDmqAZFUT2Z8CHJgh1g"
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
