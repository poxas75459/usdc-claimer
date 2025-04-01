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
    "HGgaoKrfKNaBibYQ36C22Mc2EwFQFma86sNxaXD39BaFaZvar5LobuyHB58Fqmx2mVcm5WaFP6j2P1tXJ3VAXP5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52du1vygjxcyeoUpcW4Q74uJgnP3uqGDgYJhznBbsjjVKwFSDrTmsqC5WoTkpayq8NiQgjZjxmYezrSAQgUM5ykv",
  "key1": "5xTv5RkcgUwPYNEFWNHaUPySDEjaJzccaRciHSTNmGDQgneqLAgHiftCafaBa5qHMhMFSGAdpDiXkS9uK6LEAZKT",
  "key2": "2wJNR5HMzNJmeCPHrTgQGKf9nAHgm3uuUCvznuWXBCHnrUfARHvQGo8EWMScd5xpEoa36k4JanPuyZrQAXEgZGVA",
  "key3": "ndga1iNLgCWMtbscfiSkqQqKCJyXfhj2DevtQno16q7PmGJkedTHExFt9gmNKzWV29xcWNEMbH434pSHiNoV9pt",
  "key4": "4QHNhzhLdkpUvdujg2XhdjyCL58QagVbFAUk8qw5PkcVJuwAPkY9Ff9yT3J9TBSTDSUScYtyFpVcAJ2hw4BkZhzo",
  "key5": "5QdKqjzcsysJ3PdDmXGMqv6mgncb8KVjfU6yjFP25cHRzVmHZALTTaKHTJWGZo6fyH5dEJTQXDTk1mLgQV3CeGQk",
  "key6": "54mWg5eehX2WMefpMm6jCe9x16mSFDhBCihqxbVUxsYhwrbupWbrPag5CA8biZf9J9xmrxKHV5x2qNg35rrjiQrd",
  "key7": "2EYYC7Cc2WMAturwABkqASMorqMS8aV8NCAwrqKZrrmHTDRFqj97SQ1XAmdex8mZjdy2sqb2WbtotE9VqJ4xjJ6p",
  "key8": "2nc3L2cceVGYeop9AEbJA1eb5zUiFvQrj8QML77Nrm8fd8e2GKWiSZdTyZXYPnMjjVVFgbHfFGZ5PCBV2eDFoBMd",
  "key9": "9LZgmKHH2NVZB6e3f9GcH5fqxUWsgDqdnLG7aXsPPCfsjqe1DZF7SHqbfNG72yZRpGBWGbG1s8sddN535T2YTZy",
  "key10": "3vcXS8PPX4pKPTB6xh73MFLoqfLVLhyP5XBZycfddYDSudVjRwG4ywH7jn1d2qLNBcjZLzpLcMx2hDNUeGjGBAwA",
  "key11": "2f8bN3JehTniNPzfxdmhDpKVqAH49EzzFEJTqXiV5RZhgQGHAvveJpP9cPnMBoh2s6NwH1t2NbHLUa15cFPFrRwr",
  "key12": "4i6rJHdLqyStjzoHx6Sb2XPjpzVj6LzWA3XL41ueYh9Nd9uBLLjAEZzA23JqsU4iaokV1Jiq8gE32qkmTpf8nici",
  "key13": "3nw9xgoyTw7w3hfDuFLwMNdD3aneN8PhetFxWStYT9BaE1cSCcZCWHkgVtbPno6R36FxsaJwH14S74ABoDM2Ktah",
  "key14": "2paUTRuJJ5fxkfchrNQnUAE1q736EfBXk6NGR1yvbYk6W2fdmBfoVh7SwLAjUr2v69MfRxWhhdcFvY3KZ1QNfxKi",
  "key15": "38pjH2GxmwPyQf1nQaFqeSiQ6XKxBeLsMk1jCS5vzLvPhL2ak15B9MX8yHpDbLXnyer3MUETEe5shcXRvqiHsyRq",
  "key16": "5sKdPM5M532Kauemvx2VU3CntmXw8QaUZf2wmfia6yG2YMTwfEc9LagVgb4SzrEJJAsYonf9E2sYUxSDom5oi54a",
  "key17": "2M22ogcDAFZsahCRUec39yUwp7kKPVFBGgcFnRLiE8vwLQpMBm2L75RTaz1rRStFNrvoqfqBn5ihrUP9FyLCY5q",
  "key18": "4XVyWx9TkojJJ59tcDKnbbnvB8W99ePY3TJdJF8MRzsRYgusJagzzFSJbNqF8QowHvK8NUZ1AEzydq9nHfXet7Xg",
  "key19": "5PybHeXvuuJRQ6RcviXnKE4sX5uJWu1CXPKnndE2WeXTEazHEqyeKQy79UgAsgjjthcSaGuuSSQbgPtea2smYesV",
  "key20": "4B12wZa9y6TSHokx4ztrAmGSP97MptcFhceyD8nWra1J9UTCzMhiC1XztMx6BNHeXnhcBfiHQM8onYC7phXo6iTS",
  "key21": "5QvM29eykaeEeEAikg7P2f3kL5SLyKKvgoT8yM2UjtG2yiKScR3Zkr44xsJSd3ygd5qfn47RhwHHKbN8PUNnSSJ7",
  "key22": "4WLM5horavaYqKJ1BeN9hQXAmZuYmkgkfLVbV1Ss7KP4fWYpu56AS6VNuekCzs2Ukcyx1PvtjdMEJxePSFpiLNtj",
  "key23": "2vbMgpXQRgf643zhxqNTGYgrignJqxEBGNYy4taFbdMkMQKYLLbKW83JoSk4X2j8bmJncZk3pF695URQwwPCEbtg",
  "key24": "4fVQVUx9HJ85QQ5Kbh5wWS4nGZrYxt4JUZMskthNLTTAPwZUdLHqgvsFSarmXpLWN7g1JjcjWV8CRJkXysLFMeqz",
  "key25": "4LAcNDsQHF2U3rrtbM2dVD3C2WW1fe9234zy4fN5HtH674EwpVZLX2oWNcVYVDhco1ox5qE1fKx94wfpCPfiWPU1",
  "key26": "25riF7uFRSdPt1KS6R3wP1DaqYB7h3MgRSMEPpK82em5xptgRuSiCauxKNuyDgDTu4fzVXZicjodZgpzDRevSkxS",
  "key27": "4cktjQLfk7uxB21tsk2qZmJHXAE8p9uL6JnNaRhbwiaCncr1VCmwTjovMq1aja7B1PtfxxLxcvFoKijH8YvxYo9d",
  "key28": "2BBU4mu8844DL6VWWCJSwLfFSsfJCmT738VaMshVNbpACKZbuX9BEjvzyPYoXa73fwkLiisNibv75dACw84WRMBb",
  "key29": "36trPwDoVikWAb9p2xFyzUjbeKffR13ME5ja3jxrX9C5RhVxHRDrCUJYZRz9tTYMi7TAREUtGX3m2ZVuwmU2aCxC",
  "key30": "3b5Sqme3XZStCRufbTEZGD2vEmfwLCQfctR74cLVV1UFtzv3Mnz54Lve4KYG148Pu54bw3drVerRbcJGRuhVPBAj",
  "key31": "4rm2jDeJZ54nCwpoDe7DVBh3fgQeZeB2ZLwg3ZZ2WZDFWA5MvDz2d85fP5e7CUwCqt1gH2ENFiR5Tshw3L77MMKh",
  "key32": "4DC9WREjGjA6KA1sJLd8mWBhV6hUzxiDST73kwzPFE4CutFjJBCtfADVcPXzJK7h824W31xuY6QKu989NNBGuHFf",
  "key33": "4Ao4YFcq1bTLEnJD8bz8ixKuovCq1LTR8sVKsfbordMJkpfjGT3kGm22VHyixuw2PCuShAix3s9paGY6NAtkB4Tx",
  "key34": "5Mg1FDyN5wUC8B6eCaG99UYB1cNQgkuFE5mB7jyN25rz6TmxjCAhTUCk3sW4Zvib1Ta1QJobpcWhjss3KMhhpFKP",
  "key35": "2DKHE3eiLyTcvptNb1VNmkLamvxWsjJeQ3MJDB3m6998vaF5HFoRyaKeCgwFe2at8ofr9c7wfRWvMS4azNcVgYV3"
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
