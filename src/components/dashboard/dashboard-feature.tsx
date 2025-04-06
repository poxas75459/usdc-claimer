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
    "31w81ZZF2BheTHbBSHLS6u2otFAEUeWebe4q1E1ffnMGUjNN6ibq9249RV26LaXjN61RmoW11Cd5ry7jX2CkGcNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dp4CoGxbEqYat6nNXyBpp5iZKdSbeztnVMDe6yy2PSbPucnENHKSEYEGZVkwfmmywUq3yWgA3k6bmdZXauXpgPW",
  "key1": "4nHT49JjfLCUe8FE38mZcqEX8hKQoUruCVaQgRz9Kb8BA94a43kSrYAaYY6XrbPwZQaEPsyDAmToNHfX7kuy4wUc",
  "key2": "5bWSjfYeja83G2oby5VMCSBLvTRxDCeHzzFaa19ub9KwerhaY1kuykc84tvjpzJgUhXs9SwDeSLGBGNfGGiSTtNx",
  "key3": "HTKBgRTLEjKnepCjuL4q7yi7wuVQmp2HfhX5VZCfgQjMpRw1sc1d9FYnM1pkZK5cHiJXXsnJUC1Qcs6GnKZXkmr",
  "key4": "5UQZXGjnQ4tXCX615kCL15FkH3yZjhPndAxPAYd8i86mVQ8sV5kJ74fcAm2HtFvqwZCxJC9AYJMsdWpL7HdnMGtB",
  "key5": "FGnmf5veGxfwioXf1WvG9NqHGpuSt1q4zTHtAr66dwKzVQp9wkLhdaioJSZRSJJimqPJfk9WVGzoW3XLrEjsHDo",
  "key6": "3QTk1uYXMUuQaPNdw9TyQ9nWerNxzkBxuBrJCn6RhvdexfZj5ebyLVeaJ1VxmorD3PKArQr8RyFr6LcQbx8W3QD1",
  "key7": "269ni8RGg55v72qoTyikNwzZFqDgNezNKnzrm57MDTW927H6iVuve7YLdmBQ1RY49qYihcxHLGFEixNQVjrs4SMi",
  "key8": "4FYMMyF8VtWzJk2xWNjGKsDdAhdbPErH1D3HvejSTgcFkVA8nahEFbTRCNqm1tdoWrhpYg3qcQEUhuB2yJqy1Fx2",
  "key9": "3W3cVVSD8oGTNqYHA4xULKGUQ92PAfGi9YwqUyPFuG5Wq8vzCrQGTZsuB7oQfBhnkUhwvuSbuMZ5VN31YgE5UT7L",
  "key10": "3WUDAtFyr21fHZtp3rREjKLNmHy9bu4bptGfDWTLwnSo5EzfdjYGxEt3AqLRfRSWrjentfbgss2EHkq2BECVsSEb",
  "key11": "55maFCj4FTTHmyFsV3Vi9VJLBKnY79ee2UnRELAdrKbaqWpDWjKeW2MwnoecoX7Jxvk7QXfwibLPmJxKTNpCopX4",
  "key12": "4EiwR9AAKsd4AML4pDvevjD391JUme1nYC84M9TLKbHNC72YPUhScYz1yDTWh2usZajjaMjHUyHY7h43Ljar7Hsi",
  "key13": "2ZYHR86tJ7rvkNGX5HHfmeBK5v2LLKexn5aFftpe6fGgeFsA8x6vapLDeR8ZaWq4uEH6wPyMgaKaFAsWBPrpmf4r",
  "key14": "4PywrdsSzhWfERdNMb7Y1SFCFYLcTCDbZtcbNxjKmaD63rSVSzFmnsW3E1ASViqtLwdv9E8wR42xcDj2PWDFodaQ",
  "key15": "3gUSqKw2CTn9H9x1A2DR3Z7t2FMnQuQ7iroHxt5vpMS7daHGs9VyFhpEBcTYBfvRgd4Ns5DbQhu32LwuxVzW86rA",
  "key16": "uDCbvocf9qxQ9JiqJgdZA5j2WGyzgcsWpFFo1FpeV7MrZfajfsYzJixHaVbGpjg82PNbEY4Ei4gtKTU3BrgWJck",
  "key17": "3DAghzSBXswpQeMsckJwbDaU7AWUNFZq65Jb3ChpvETmHGXYp1fPqHF4bbotirXnDpEMKHYFM3FS9YVUxrJijZb1",
  "key18": "3B4mAwq2wiuGrFgjG7gkuApZ85QVnHMquh6NxW7RJvyS8ikLfsXF88CK9eZSAHHY1jULWAfr4B7LfxUGRcfPmqQL",
  "key19": "4qz9mMW7MpdXEBMuqsnbLhWvDrSp6k8b2AgaxLAhn6FYVXYkvDkQVGBEq28fqZauCwhHwxvd6k3TxzX3zSAhZahq",
  "key20": "3NQVP1SHoJaP2hjvC1yHK5hkSNHrLUyRraAob1ZuNvEpUiPpV2r57w1h3pWE8rxRyxRu9eJGtJFsiqhsoqy2s77z",
  "key21": "57rWrHw2nw5Vqq83XEyNuL1w5RWGbCHg7KtR55NMGaETfFEDuoQTgkjH1AChJcFKVX47oUhPmHDtAeYrVrxBaDCr",
  "key22": "3Txht14ybFZa5DTGV8emuz3mrSTuSDoinnBAjgffroMZEWU3wAFxKJtVmSrRYey32PNFU2RhCRA7KhAi2fhnHyzq",
  "key23": "ZvNEQjT2FTsSBwcT5f4wzasCMLNS2rxJSzygVistfw3qZN4th5H79jku1D3ph2P3EqAt6ANEktg3qafjbMJE9hN",
  "key24": "4aNLh1qfDESH5sDKFChJ6J1W3rGXtsiv4AYRjvtHLC4bD3iRuh9e8ZELmARCfDgRTBR2QV8zFchWPJvqFPf2a8Zy",
  "key25": "3WDSzPEGVg4Z2WsCvYyj4dhrKcXvM1uGe9qmM1qXJD7ktve1onjrLkqkrxnbA99dNLhwvXZiiNcQyo3eDyKhmvqV"
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
