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
    "3agD17wWSgNd2pwuAdVNHyKSN31ozoRHtETzoSuA4UfFe8d1idDJDAdB62oza1aJop33B7eCqbhVV7E7Ymv53sGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXBf1JBsj4sfCa9Z73Yykhp2DpakHJHR7KY9Fa3dvHG4Uu5SDVeuqeyXuTbVvfU6HAaoDE9ijZifTXKYXBLBqew",
  "key1": "3vca93zv9QzT1ccnsQzGo834VCjy2pY3vA5qJSFnWAVWFRHmQNPZKASbr9hmzwzR1kCwdudGDyqECxBMh3kJhVX4",
  "key2": "2HUBdMjQYXJC8FvxemHG5WwEMQ7fvoNV8wTfwGKJPsrN7UfoYfNMweimHJTnL6h3gb955SLsBvzQ2ZgQx7tUFtMA",
  "key3": "AXcqjjGiatr9kDkBq4hDtbxPdpdQ7EYqgRsZn6hpJrmkbyKAsc2WNKjzNqDZSkYqf89kimedHfJ6wPPaUHEqfRt",
  "key4": "5CWDi49QVwtVgLk1PRP2yP2BmtiqsmMM3Q73eT553XQBAAeAK1ZqWwoc95XK8U8fj4HJm6uphNPqaAKLwWRrwo6o",
  "key5": "MR8sU1vmMuTewYDSybhauu4xSSrYFwUsbSpydedPjhZxAuSt62uZAmQgkYhBXeyqf9Na3P9QjtUDxfhUr6D1sVj",
  "key6": "5iYdfLP1xZ3iBvDjyaqrSVQxbNJqKuFu4meAbS9KXpHb9mqs8vQ9aobKtJpwKieWoNRiuuUBD3QjixdVDgeDNUGB",
  "key7": "327wdrwnB8J3Tkm9Ys9fnsyvPoHvwoLA5EiM81hTuqSFZ9KK3hoppUjGqhx9tg88FbHYLTprzwsdqzaLH39ziSn7",
  "key8": "5h22LYp6knUTdmETDSCPFjaX7uaPtGCkvKD3MgdZtocUsjxnxsh6sgdwSTn1Wk24k3BpdEfC9WHgYiXVg1wMmeEt",
  "key9": "265gfnHo7NnZBVrQigDHBEMfjPhoXHDR2GcX8D9VwbDus7Jm98YnWTSdi6zNjhTuQtHft8FweZg9kW5S2rSUxmdR",
  "key10": "AB2X9qp6E1y4vofcijuZYh96ALPALycjGvYWqf7t9edAZZRQcU44K4GcuRdQpVbJ83rct6X9aaDHyQfPb5hDgy8",
  "key11": "3vBB3eXjfhD88h8nbUFuzkLCq3myt4C4RGHRp4gwcMHGsBzpdiZEuA5SHHMFgeVe6VTSNRCevwpS9PfZX4D2sBjW",
  "key12": "52MUppyqb3ns99xU1HUUXBHPEo5CHzUwGxDLtfo6c4znpsUSYQvA2Yv3AGB4cPACeMYtJzzu5q8mPniJeSSvUb4x",
  "key13": "HrkY1Y2UqY1hxUGGKe6jVivCrqpfaM1XqYcvVRHDXt27aiMnLRqRfbVD1KrGLV2Fp3qH6ZqP6YjRQZ8BKNSX6gt",
  "key14": "661vJLnbGAmzTF14n57j3CjFCE3hoePbmrziJ7wrca8AaheQowTxTGGai1FpTyiKEmrrJHK9RLdcJxmcmL2MA4f9",
  "key15": "4ARS8JSNLobjekEbWY2FD8GNrUV1aKGmEvZX9fohsW6qh7NxdVTKB4vxFDkyXKYQqropwLsJA65irMb2H8oyKpmD",
  "key16": "ow7nSNqxVQPN6DuUtwCcgSysgb296z7dTQXn9gW5ueCv3kmbfkiMbfDmGMC18Y7BGp6VPxWordMP2Q5Bx2gPSe4",
  "key17": "AjrBvBQY3BVgV37oiYd8DoChBMduh6Cjo6hvo9JNCJSpzqhvvhBqzypHkvU2TUTQdSPHdPxvQsCc6DyLe7PQC2G",
  "key18": "4WZMsDtXnAxAa1PsmPeB797nW4HhDoGyfCPXHhWx9T1aaYNRPS2nZucs4DPTmcK6YSSUihQ4NiEkicWQqLidSCgW",
  "key19": "2XhahTYy9SXDAmBUQTaW4t1cHTVXGFJ9aRSp7YHeoS6vRN6iPWVm2GEP2U9jWYCjjoaUK9UTJNXdz4z3nnKxr8AA",
  "key20": "4MoZAtfJpVZibiD8LBDBkQgxbiv8eno4res18kzQcAR2X9y11oFPmkwqPTSU85SBRLpJ3biQvpEufDY3rPCrs4Vp",
  "key21": "44yCr4QsuFovF459P8BfPx6ebNuQGRmsqnHxNdaYQcUBjR4KzB52hXUrM15MT9M5mVYPAAZam3CAjjUGjLsf9Lav",
  "key22": "2PNRWHgiScT3Jt5DhwwPKcCPA43hVX41Dx6p3wM9Vr7Kva1KDTzCZySY3EQNZRDecpKbp7wjF7dRNv8gT8pUYuKx",
  "key23": "3oVYdy9HW7FoxUAYLcng82JP7MnYzSSbgx48TyfkyYMTVqh1VP5MsnqsGV5xCfTAkXCigfyn8sVkoUkcAUJJqQoo",
  "key24": "5ekigoxMugotc9gGkvSXBY3AmerdsdQhUCjccZbWZ3iD662RXJkyhaN1ZXA676rh9zjHLTuMNrQqDFx2RoTx1SVm",
  "key25": "5TjRgFrwhpxRQAWwTYJ4KQcchW9Gq73nfLd8sDzvXRg3qavse1iGT4VDFnaLrhaabDMWsTL9m2B7meCF6CsEvedV"
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
