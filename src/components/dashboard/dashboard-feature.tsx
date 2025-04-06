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
    "5aN9j68j4CkGKP1wsorkyXgsifwG7an4hXhQFdx6zM1eW5J4L5Mb1C47wN9AabMjsyU9SDgZ4adqz28hTcVUubNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55yD8vXuzFiFJx2RVWs22Z6XDmQ8FoBLZ58yDsb5Kb4Tge73CoWkyyLfun5XVHHsssb9v44mwj8cBnM6M9TkLfFH",
  "key1": "5SKE9arCnDdqNdmY6rLUh9yh3CZNs53GwBpDvLjcJedFwJfs6Jc79CwHy5BusWdKs5N8H6cRwEyMxBNAHinPikML",
  "key2": "431st9ib71cP2GH637bQzq3Xkzez8MgiFnMNVBTLdwn3ULMbwgAMTv7RbXHgV6hMCyEEQaSpFgCLi9vLW8W3nUDQ",
  "key3": "4ngHXmypET8ebxJ27sgdwdJeerHxeYeDogR7SnXQy46kBigzUsoDkukDdFUhSRQMhkfjRg1uprq5V2GEjzg4N5Tq",
  "key4": "639SaqGgL4aSVaNQ7cGT2VL6yyjgstVLuYeBJhARHu8ss1Dj1ACgDkz2CbfLkYDuZa7MeVpT3yWqBt9ZoQWzmuRc",
  "key5": "3oH2JU5cShDVThwdTGAJ6aDbrfGiQtgVkiDeodeF7JEXAhzgiZhRVPaAgkEETHrkwLzeC8wEZeBSZ2xaaD7UN7Dz",
  "key6": "5vnVkdiseP5fBfcfg7q4KrXCC9TAsnWfZmLzvFwYzfZBchsftWYnuAdH8i1efbWjvbxPyxDMXE4PyibSETWK3neM",
  "key7": "2XwMeejxfxJcN7zDvwhfSyFt8KLgUj9xuVyRdnfNUkN2bsPdmePqiYKh8KmoPvjgGiqKaKPS3aBmhSxuJCNiPuZd",
  "key8": "228mVibaVKmnHh88TTUYKUoM4s3jAUQuwRzuqCqdh4f8NtfVsYJqUaJE21cChaUo7zkCcPCqkq5gN9EmveNF7LH8",
  "key9": "5R63JndPQPTom5g3RmX1fkCdw7woZyQLNFSPMvht3ss43qGzwAN61fpJbrSZGaV72ufF5pAmhodiW8gViEgMD4vD",
  "key10": "4wubTXmA15KBZ9GH7bb9EpSprBSQTa5doSrvNCm4AGzYAUGBFgFEstrUidWQmHxSZxzNLapor2JjZoQCtMRVtk4q",
  "key11": "3EoqM83cyq6EgQdyLa2iDeMT75pEVoyWCa5ssy4a7cXxecyUvYAYfuFqqnmuAbFiGte5ebfyrDQyUUTpGvrYtcHi",
  "key12": "51tqgLVP4chfL2bqgY31hyg5HpXnVxjRnfNLMC97xU752JjEobHgd9Kwt2tUoUxrMQdE87LkbjLN8baGaH4s9wjp",
  "key13": "3B6sBcyMNXqSS4bXfodxfehKg2VrCfznmBpvhRdTNAC1rfepnG6aiMEKbq2Z9dzMTCfTnJBMWNdKbx52sb8dyWtG",
  "key14": "Z2DJKmLS22hvyCAbUBcFk7V6V39AycBELut5Ma3Yhnfrn1cYR8EAfwezvTAGTyXnPp6t5kazauZ6eXAQgwB1YVy",
  "key15": "8UZse3Fu5FEqica8p3RL7cXzLYekn34eVvnN3mVUiu4hhVDT2ZsEfy3Grfr7m3o2UDQMSJQhf5s7Q2GPLBY4Xqy",
  "key16": "pQLebEDmRCdBPUn3eRKfUzNo5JUibvYxbt7gmJBFqApecfuxDUBtqs66huPKhuXRwNnWRj7EqGMuBmMSgZ7u4G5",
  "key17": "4LN851AM5xqEm5tgVHSF8587G1eQXvWuuejrc7m9wGzWngC7TypbgA2UMFMpkN5LNBqSb45iCpYAqzSaKVAF45wd",
  "key18": "2fQbrfmDLdgQCr2g1DohP1hGKobuFKhfkxsHFWQnpUN8JCvwnMTGLqShrNwRGx9yCSoDZjAvNXDDouiVzDLTrNKe",
  "key19": "3aZopgRYZ5tDDQAVojG2AHXZapomtjSncFV5WFoqcT5pPjyo3M2AsmWSyLwGs5X3LdWUx3cV7gKtkj25yyJJsCbw",
  "key20": "2ty5qQFgTxtToJyER7a6r8DtJD3KfEH3M5YtMCzxegSMDTTGDn7HJ5QJWvhEhGi2egw1SA446ZyhGusBGqG2TkbL",
  "key21": "5UBTbnhzeKjwtikgRWS81y17JBTyPQeAxCAYkp8vsYh2KC5BZpMRNNWTua4WHbDPnreFfCncipVFwUgiqWiMgVCW",
  "key22": "2KSX2bZ1YPye6qKPvMfTpjfJjdi7U66ho8xcvcypaLSWK8icf5fH8Y2q7DjBVurjWDgKz6zXXwFANip18xnwEV3K",
  "key23": "5w4AAzKAv4dGAu71DQXR9JQyEXNyUkfdWnToqVq2MRUa72Kdni547bHNMNAncDfM8JYmTfQZ6ASfL3VfPU1WG8Xu",
  "key24": "3ETxf9rcCNgYEN1yGyCUVHsMBPuDeqVSuHkrMaiYwBXtfdkHCBiZnDpTeHJnscnHt8EkNnLkbdphJqAXuiDpi3wq",
  "key25": "5wZAmSdijqyXyEuvVstcGVnGgiCJCV5XCQMxCK4U4SzE73oP7ZVixZG592hAiX1deezh7mavcc31wDLP5CbUT98z",
  "key26": "5JEzv9ELocbiaGaJfZ1QfLC7V1G95n5fBTqmoLDiQBKbAsve51dXUUqaMcMf3LEiqqEMFuRFP2bBHHfL8uzBJaEN",
  "key27": "5sdvr9T9Jw9aB7gGM9wG6Y2sfQ5Rb6N93wSPZfR6TAtsiChWRfnU3ihtcvqUDhfUYvrfGPAHZzbaD6bksHcDsohc",
  "key28": "4jn8VZNR6npz9kfyhEQUUnyrob3a6DVqnTrYLKDX7apVc2sXradvT4YNtziNBCRfFJdjpdK2pRi664WziwL1ZP9u",
  "key29": "hgNm9ieEAySiwn4L1rsy4hku5QnMERST3WmZofArFqNArfBmfws2uCJj7dMenWQ5LSGB59QiQFpcwg1SLxiFmMM",
  "key30": "BNTnvBvQusyPStVF6EUTof6LujyMmcMRLNCgLESR5CK9tgFKCPmS86XtzQFiGGm2D5H7qeg7ny3QZpodLKKT52q",
  "key31": "2KsdNxKkm7CMs9GKsrKDBZXoZRn1ufvVMP9AGRfn6viXdGkE1A5asXNZipXPvFNhQpZAkxh3MA6e9bc5DreaNvHW",
  "key32": "4JjhKzbfsXRRi8kmATwJ4s8pLtrZ7XDseqSYAkEkJxcjcwDZLRrefNJhFrfxvAR6HrREWcWdAjzRhVKj73iNAwNa",
  "key33": "kuHMKy2BPgsNPcEYFmLtMqutzKCZwSyUTpumKkxWAMhVckWKfKVEGkWhop2q4T3C6zDT1UyjA6ESWvixAWeq392",
  "key34": "5MJUqVdA1Z2yEKGSwsYVmxJVxjHhXaPtynecxVc8yzDAgs76oQm8hL4i3qogZDuRgqC7HrpUR3WMsGUMTnzTy9bT",
  "key35": "51VuDpCHEKWHmA11NzdLQSX4U3fNtzTn1ZeEDhd4ycc7edvkCXgwFQ6shVqzSJVz2biKNRdPKSk9WsYbSwn9avd5",
  "key36": "5fxkYNeBqnUETLReMxKUibukag286EtSDf2WYannMHCDG6Ft5Xf3JoDY5qcwjU48hKWwXiEm3soezTBBPaAW2qiM",
  "key37": "3Nz29mAJjEGKg1k4PciEjegLGxXCCuCHzq4S6KnxiaGhqyi7N4MybwYB2ahoTh1LqeR6LjmYm7d4FQE4HThnt4EA",
  "key38": "5YfJxLZLR4a8qEkLEjsY81QhigtU1zRCoxxXqP96iDyY45iFDZgZ8DX7BzArpjVqHJCtmdSgXX5udYFbm32z5JVY"
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
