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
    "5VfmL63mViHG7FEiAF7wo4RSZc2CBJDi1v38f9SrjZRKtqrf26uZXFq8ty1WcUCbb8QeLSKp8PQ8sTb1cHesrpjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BfwMxVYJUNiwahLnDpBHhJeBvfen5cFM3xno1sSFpoCs52Yra6M7Xx7Tg6gEEHdDNasVi7re23yWdNQf1DkWpwp",
  "key1": "2TfDKivGx6oiXNtAFsgUpZiDxNqX71ESxUycPpxPZGbfqGhqFVFrjJLm1mbHVFaEPi3q8VPgZxmoY7Wmjm8YjStm",
  "key2": "5ni74E3v3xC2gyMKoZ8YzEQf4ioV9cJDVAVMFCQeGSSj5MT3EgzznSR7EgQw2pzPVLiSWcXUKUuT98z91asoY5Kn",
  "key3": "3JaafMZQ57AtNJfQiuyRK4D7MBteQtcLzhQns9KM9CYvbhi82yvxyCQ51dDzjxztsbPyX8xjgU6Mz7FkjX61B2uQ",
  "key4": "2cn3gWfcFZMPZnCw4vQKPLoua35t8LX9FHDGuzHzeduUpcp76WBxvXa6x4cEsm5TABQVVuVsZ1y1bjVHcsqjEK9z",
  "key5": "4sEUt8UkZd1AUWMHJ8htTBJAU398ibgMM31TrVNnvCv55rYR8ppm88HtW9Z92wdLDZEgueRRk52ePzGcGHpv42Ha",
  "key6": "Sk9jkV6T1rFgVe3nkmHQAQZeocpVfhtKsFF3SPWzsZzEbawZAvr5NFAc3GPTwkb94dh46AAEpSknsgGo93Bkkzm",
  "key7": "3HGpusAVyWSiGPjbVqS8GW8osgQbpzspGr3a5kbd3y2cjHHB5bePQ9uCNTx7oo1eGUNSP6n6ZSWTSS4B57z2e1WJ",
  "key8": "2Eq1caKRES56f7LuUvcJrJ6BE4m7TNHQp8x87FqjfwcbpsCcbi7AN5ipXNMPb8LRVXVj8WEQDNDpeBrL6eb4SS82",
  "key9": "3nPaNgNV7JdjH5RiqoDjBQ3mr9AVY6zc4KbRVzrBT4FFvuD6gHqfrTMeEpLq3fN3nwi8m7jpAT2JyP8SHNfXK3Dk",
  "key10": "A8Hga91ouaBf3nr4Hf6P8u7X9pzcZq9HC4svsFVEezBsn2ZJ4jTciW6wgQkB4KCFAhfv8z18oWLQUEhtC7Jnwoe",
  "key11": "4rvb27C5JYqhAyD8NhiMFWysXxAxQBNki6vCU2kpdt3AvvMARn4e8sZ45wvsFW81nRiruX235biH4Q5jc1qijsje",
  "key12": "2WfGkUDYty52AbgDyUk4QfupK97xrnaKuva1gewDgx6J9yR81DAL4RPjdKxSSKBvYFwq21HJk4MzphQqycJaeum5",
  "key13": "5o76yJaTQdgmegXKTBfxCTTnLC3bxZMJpCEcvZ6WZJMaRoER2xvj4wDzGB4R7eSM5XW5qYYXzAfmzocaM4jKxzWL",
  "key14": "2yPJi1hBdiqQ6dSperY5mV4iC3R3XrFAx4C3pdA3f5mfpxYKmRBsCU8aKvAekRrQBCbArR127dXYwnzrF4A3e36h",
  "key15": "64SmWKVStys2cfeyyCNdzHV6kzaHLw9pT6oZzmAU8BjaYqstiRv994C2YfTLTv4zpV8KbhScN58jBaJoQrWnvZNL",
  "key16": "2yYqKNTAMiSi5Se8k7cjA7HRMPeHHeYQm9wMKx2c24BwoRABfNEiTHngXfGZbXyFgEKz33ZLgtDAySsrMCQn1s7b",
  "key17": "3Q63u8CZUJFZ5SNsKyJHVnb7nTrtmmsrctm1nVAwtsvUKbVHrNAWVmvimhH5KANQ8gms4rQMHWd9R4vht5NzFEVW",
  "key18": "3eztUFp96DHGEN5e1tLp6nzjwrCp83inSL2Su5oittbQsVvci6J6k5bkaekMdgSzTuL9zC6zRX9HYp77HfyskoGD",
  "key19": "2a2XCGYQHMfDbCGgBLofL9Fvu9bExkEaf54Vp1s9MF6qMrdDgpko4pKdgubQ7hmfdmsZNfkpzkggUdTvJMsZc9v8",
  "key20": "2nxYt8XjvFjkNmnCQdq7qj2qqNJVeNTxBM8gyprftdDvddTjXWAfsSaPwfYRGfKqUuwxWYdauSStzgZn3SBaT3PP",
  "key21": "2SFbaCsww67Kov1g6kXPu9jNJRqgFWTmJ9LDrCemc65w7yHS4jpxrZGm3nzJvTXVcS6w2H4SYqnPVsWcgiGLai6",
  "key22": "5sjyPCp76hfGfHZqQafKevtpmKkch6K1r9aFvWUo62TxcX8FN329tobx4y7BkfYxbUQr7s8TkH2mBbZrTxGfEnMG",
  "key23": "4Ukh4QuAFFPBj82HAsxRUxZv4w6wraALKXPSd1dyy6trzoX6hZ5qaEVypr97ZkW2Bz3PzgGPF2ZYZd8efSRav5wz",
  "key24": "4FVHbN58vBuuBLgJz3eAPJSLY2F8mqxSK95rK88DVcNoVaaZPL6M5q7Wau8y9Gum9ptT6PgNYA12osmB6Fazvi98",
  "key25": "LuQz6fkZ25ixcUHo8TRNtM4KwsqTpbSUefryy8v6voft2bqB92PzQbZEHXa4wbh3oH6S2HjzJA4Saryokq7bPaV",
  "key26": "4z17RdwUcTuf4UutJN6Kchf4RDqN4mNGNXkqqqHHSBAo2BQVpRXas1UBraPEqTFD659Kx7NTzsGTofJUzoHofeGa",
  "key27": "5QAMgeMifBZrTrgtfLNSHYPe1NaHBd66mTgN1Tc54iRizaM1pTyQAgHNrRAbsGAx8DAjCx8WM3iBjtVgkWY9J8Yq",
  "key28": "2AwpCFKJiqhMnpA8FSSS5t39bpEaCeu3Lz63xbRPx6XD6ZGriJbgo9mdR5f9v6i8Ee9CQNtgtp1DUWhKUXuNfJ5u",
  "key29": "9RmAmvKeu7UJrpR4hy5VZmZ6GeVFBFG4CVXTb9Kz6LhQhXSEbDE6U4V7xNbbHNGtPUvDYQCVwEppJZG2h4bgP4Z",
  "key30": "v251THJpR3Enc3295BYaAWrqkdoSBAvLGU1wRmA9U5yegzEWA9VUQNaY4wFJfGYbSP6qYkZDwksnxK6i4bM5Ek1",
  "key31": "57gQes2nX9CrEzdv3WrWEMMKX5JjWCCd6TV6RVBMDf2HMYhkpbjKhDPA5NbRiZiZB6ExQRk1jssvstHVgKuzWQXL",
  "key32": "3CAnGYeLtArU5GeFS5RiiYqgMwLurQh5xns6iAsdWSw875N4HFEoe4yzSXthKZdahnRxFM6eythCBDXmnGemFp7D"
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
