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
    "2Zj3Y9vNMGHZ2rpyH3ngssPrgA9EJVnGCp16YJxRw9KCrqsHLYrGYjQPMzpjT2RBLweqsRcPjMurLmUoM9LeRpBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FQTvDsR68pEL4MUUNUiDWCNrw9soQSG8gmVHTUQM8Ch94XcxSpSK9zzedTgEZ3cjiz46o3jRUeAoqjeWiEcPBa5",
  "key1": "2RQCo8CQuSfcRreNdbeLXaMD6hV1EVt3ph71hy7VGbMJdeFC3cP29kieAFxnV813DfSwbtaaey9piyvdmpjUF23x",
  "key2": "5cKbWJaaHNa81aqBXBpMZDYwHaT4CTFekc6Q9aiTUNXtxxQivoniaPbPrVidXhiqWaQc1twtiyeEKGPmnZ3wKVy8",
  "key3": "EPLpv2wGgzNsJAN6QPv1QmQZQXXvbVH6DPcx1imtRmdDbDLJ5d6UtbQyzA5XWSBLQ5W374ik7xEoqvj7nKoC9K6",
  "key4": "RqP93p1xWpxKSmNYopTXk2AtYzs2fXTrGvk25K2Q17w3ViUBy6nANYWeUkrhrZQMkR9bma8De5HWsmb94yaBw5g",
  "key5": "EmuN3x4BagAe16uNdVr4Q1d9MXec3PUEtCVWw4PaLgw2k8uEkoYou5tqyiA4c8GhF2QQsX2DEFKuweHipmeqA5T",
  "key6": "64cL7KTa3mnZC46pxvthrCSbKn1UK25LPgUUofbdBPhtxEnFNVkATB7oBK1HwcCjdEqRpf6y7XvfVo9gdrDPoFrr",
  "key7": "pxogTob1k85qFicTykKTFbAkLcbtEPm3UGka9iNGRLFoKwNaXRoZq1UYXYrWsMGx4iGjT7BzxFFSwqExcdvxefz",
  "key8": "L4pUcvVfXREFT2XsnCqGchB3aGyQiYnfk499dmwjcfDNmqgYsSSt6mxzPeRjkqGoyzDPnnVzxP5QAvKxvNpwjtk",
  "key9": "2xxXWb1T1v6Edpu7JgwML5WV9CsyU4U6NQ7hBtuP5uTr7CUrZmQWZcPrwzWUXwajHGfWFGZUPc5rMiHwzcLWmAQv",
  "key10": "zGXpYEQyS74xQUqVndBnCx7kcjDZx9t5sNNuHcRDYS8Srnrcwk98FEnZVnCWT6iufsmiCuPLLT73pdwjDV8mLZb",
  "key11": "VtkAm7LEz79LNn9SUjjzYuckkL7rcpxsosaeHkUGwr5whn5PrfumY5fePC7QMcBY1mqb5Srow8uVC7fZ776TnEk",
  "key12": "5hccChjZ2McjUJCPDT56mmG5vkvMSiMHVueDZ47uBWPJMVUfiy4QLEDsMyms9KzuFZmVmH63cUWeKminxhAXoK9s",
  "key13": "4ef5G4guNSZS9SCECXAdMEojVsW1n6UCx4Xwibk526eR5mouizivjLLvEeZx2qsibvK7PiX5x9n8ahAJnaWjEAYJ",
  "key14": "3wgC2qDe8TVGnqti8Ggs71zKScCiXSS1Ty1f4rczPHL3KKa22LqHTnx3E1THV6ReqCoBv9AKdZPtCo2rpizMv2GV",
  "key15": "hK741pjKK6WLPeNb2Utt9nMGveXNCh6fhszN6x6bHJpbXxZjJMbo3S2niHXP3ALbpkFDqt7ADzZG2RqATH1CUyM",
  "key16": "2aTw5SgtgvX4hsr7Q2weFdF489W4LnmCefnUmie95CJeqcjqyMWGEeM4hH7KBJ3p7P4qbCE5gwWxzkx3ne2tiHjz",
  "key17": "4GQnxvs1yuNghLdEmz4iDyeoQotr4yFSPX7aR25TyNUWVLywXQ4J91eYeE14hJthu3NPtoBKrkxaAZ7mbDyvZE4F",
  "key18": "3jTV1cFt4nHxkXeGupQquyizZFqMdfJzQwZH7cbPZnVWRwpz8UF6y7xfCJeGa4LJvbX31fgjZpzjUpCiNVb1pHcS",
  "key19": "2XZefwgCS68e97xCgcB6CeNRKNS8UsjqPj1wiDjfK4VY3w2FacqVuwJrhfCSv8JskNkXgPqxEMSGvXjW9847PLVi",
  "key20": "2Pw4eKv5r8RKu8dikgcbSr8JgeQqPt5Kb7WQDZns6VWM2963ZAjzcZHJSZ2iVV2td6Ern7JLeQhkxNYyY2PTMCWA",
  "key21": "2G8jk47fvNtFQ8BJUvNZvFSbdkL8ZFx4AgdEiyGp2b5sMLDL9SV1Pok5kMeyZWiYR4eYZE9yhXRjG2AcDxXcCBeX",
  "key22": "5QUG7PdXfehC43U8xq4kYMQUGPJxyykkdqSeVJqYDFan7WXAvXjSjwFdKWefqyYvrXUcSdFve5RZacUfwFNt4d2U",
  "key23": "Dz1z37v769DjtFNEgywm4fsU6deCEH1bUkkokvMQJTdPkCNwccoFtmxc43sCUGVMjyNGpvSPEKkAcfYWfDhXkPL",
  "key24": "cyBb9CeL8kNbodYZApdoAEang3RkjrFnPDXVfaVa5vyWFK2WgX3rwvv3vTTxDKDCbnBHHSZ8ByGWubStdiprBKv",
  "key25": "2U27QMbmL7TbcEFtgCroAm9CrUBeZmmmgLBLwx2qQJWHLC1LCwYpuBjA4QfGiqfKoVnf7ySCv2pLPetFU5iSL6gF",
  "key26": "pKbooa9RdzpZnR6zUmPtFB9t16fYfKjnAWKHtk5rgZm2QM6pc58m5SADnW34hmaAdjCA92U7qVCQxs8e1U7A4pC"
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
