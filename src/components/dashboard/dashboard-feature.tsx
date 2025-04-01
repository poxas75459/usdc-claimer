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
    "3CkC2owZJKBt1SJyrTLzujzkK9fgE6hiUUi8U15zyuVWsNMH9CzcyKHYJDHgLxpXSSyFig8vTPJggHXAXSGf7rq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67djSjMhQdvKd98dSY2niZTPbwWFWHjWzrbSpmaRsDQxsGkLC3P3ByMMUsSP3m6VgZZzpDJ1g1DePmDWUstY4tfn",
  "key1": "2tjj3CogzBdC4nmrsu7kGkhaFhRthb9ip7PxVwmBZ6egmRKXKtvbgkWhfVBb2EJ2MAdWGd5HDiKuRrQudjmbudDC",
  "key2": "5RwDYJgx2QyERkwf98znKf1VgnTzfAQFjAHiqLKRYmRHQK8kb3ngjaHm8Mjmjm9e1dzEZWdNhe4ZD5AvkHTpiiv8",
  "key3": "2Xuhot7ENb6kDX1GoqX2nWpLZfei98QmJx4839sEANNcnsbs1HcyhFoSWXqHPM6ToyaRv3apH71TXDMmDLtPNRFy",
  "key4": "8ajPV224oT8taVarxAbjYmQy99MEN1q2PwiM8iknEyxBmX8i29DuqTW4ZS15Q2V5Vv4bVMKQu1qQLuPwaKQTRPA",
  "key5": "29WcZ1XDsXuHKF1hJMpt3cygHBEsVZnNNtXNaENn43dTsBqCBgBM3HVooRzt6YxPYaMEWxQfuV79HK3TstKdRFio",
  "key6": "cWBuTtSVryFYMJ18Wb4nBaQsZ8rj4P8rsVvTaWMtP5HtwdeSbCbPq8dC9jsUg4TbjN1PerFd6gQDbNYSbe1jHm7",
  "key7": "32TvVMBMxvpNRsaF6Mf38PMi9eucUrsYWaLcHRbiFSTtmY1ZpArga92rhgpWHZH2vZZ8PTmarYN2diWUM7bY9uFr",
  "key8": "4JZj9VS8oBRiPPbUDv2KVC4owFPFqaYa6u42MEqyqKPyXAv4sTzCicUQ9jVgkwFZcYgyrM641d34dFoGpgiwzJv1",
  "key9": "5cCcYV9bW9e4KTSvxBgAnRgV3xTq2CmUmfkxLinufQFCFzHTuDaeHzRYsaujHqoJ5UrpLr5Rmi9f4gKjTFMLYGN3",
  "key10": "55YNcUaoBwRoKu8dScTWMZ8vokKkm8NKghDb7MEg3x7kw7mYvLPzh8JudnEMx9bibF9GWiZow7RgCWT382WSC8Mt",
  "key11": "2xniLS7zsTTVFTuDskGitd8poVPDRuo6RFedcWT9qQpr1JbNY4Emh96HPGrWwbTmGk2qePZuTobLN1G92fDo2C4U",
  "key12": "5yTXz4NNaMo7TFG3Xhj89zJXUmVRfKsJjthNpnS5TVNPVre3NY9VK2oPvhxdpL88LKtK78u3AT4Ud42wfqg7468s",
  "key13": "ENcvVwttzTsaqLCTKYYcy7rMbqdMQeyApA1vEtWW99WCZfSCFEi4mFkPTXsLMXLev6HnSAVf6ckDv36JGwNxHzi",
  "key14": "2YwRCRDrhmJ7aY3oodnPVHkzZPXvnaA4WzeA91MEBiMfUa3fbYjEKZXx5KAYHsYC7FS6LWEtbLX2P2YqyGAh4tF2",
  "key15": "5Ggru81SL365x8hNFw6SjdAc4XvLRKQeD6gueURX5x66s4X1Vve6vyEPuzHfBt7UMKfb2bTV7dN5iYDbiK96EEGo",
  "key16": "1QJRcnGz36GH92woYucxTgZgovLHrZqCmjLkW6Y9h49coguCMFBT9uNU55WqPwA54CexpSGk4tsDGfooyKwC5Qa",
  "key17": "3b7sQj5rsr84BPdWhNBU99q5wLCPsTxKxJaynSsGTNNCstecw7MhMhtQUfWstBRFeF2xyyLkyxMNnLh2H2X84YVC",
  "key18": "35WUyA9akLVG4ezGutDx4MMtxVVQtMoUwwDpziSpf94PsEgFAUNmkHQxq9nqpB9vB2Fhbp73XcgD4dewF6phZ8GA",
  "key19": "55siAStQLxtL2Z5fz6FbRF4vuk4JiPBecVTpErgwaetsDkkR3QUusbihADqiFA1VeQK8WkJfvkuypBN16eaz6XEB",
  "key20": "5ypqdtbAAeVqrDksCkTQM9ETWAXuvjtb3W9PdxzntEtqUj6JgoVJXkxPmMLMcbBb4Fk5ALGTNs5bTZSJ3nyGwKvg",
  "key21": "36DzeTuSsrY2gUjr7KrNwfqmHDvrSRMwv7vAq65ER4FoqRLFHYPvikcUbFdVStuHjU6je5u1rM22k1UB19TF1gx9",
  "key22": "4ABDwVA3x4DGZxQR5BQ5LxK3gcvQugrLDxdBBG9dPNDqEvVzeMEk2Q9gpubbuvmxnsgZpCMvRVWbGEJaMvLoLYwT",
  "key23": "5p8UhWRaQoEZ21nxa5CJNGY5vn3upELW27urBXZod3yDMucruCUte1opEPa2N1FjNLqdPrkPgy39QmCVgWhgg8RT",
  "key24": "2auFoceEeizQQp3QC1mdgCLriywKRHeGsCLJSZjgtZ8JR3Leog6qygPHxCmn99SWMP5aA2QJKxC5e2sgzFUDs2dc",
  "key25": "2JLorw9piTaxcNquWjpetSswpfitUT8eN1xL44rsaLQjYhBguM3s22LsbojitYqGNQLL12P11btF3xX9WJpEzR4J"
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
