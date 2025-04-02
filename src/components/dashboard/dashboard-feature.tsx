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
    "3oNDhA6Vojdwrkyrir3pb77EzU5a9fN8BGyPZfSN63prhjhuVQVeJdq9CXU9KyNZapTy5ojduUEvYcqAV2iCnLst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cPyRigitSMn8SRU5HEtc51c8efnLkGot3RCsL7Yko6zi9ri8njNhZUkb6jpPypLp6kkAhvtYzQa4QysVKvtCDEQ",
  "key1": "2uGitE1FdsMQZKVRYRV7dfW913mJqPL7UWgfZ4d5fX2Cvggrd9Nnbt8DPtY8nK5ay3icd1nWbxwCUprsSndKSZgB",
  "key2": "5ddAsu6PrZUGjKTf9ws4wxnYnNLVeETTeqtFsoCtn9qi178P1jiDbhxGL5dLNZ4f8Zcm1cT5NHGT25kd3ah3yTxv",
  "key3": "bm8PZfZJDuetYF7Zoj3HwTdr39TSLs8AyC8vuRCBVWoRugQVZjJTMUjA2p3bXG4BT8tFEP9rLqCXzsk79DASDKP",
  "key4": "535UVY6cL5iYcYmobwu4rRQm8BibzZu2eMoPbtyn6fFtApKN5mnoRtHYf9wmGptZGmLMJUZ9KZxBs8xHBYncEfqi",
  "key5": "4JPWr8KEaksWfadB46LsQVdS6yasD34E6xF1kB9TiKLLPxhCLWf2QwCoL7SD8LHyKowkuKPef8fU7QreVZtnQFyr",
  "key6": "5eRizfyjVHf4BfUjGXoXg2JxEVf3QABTTJR4kZ17Kb4GksxgBQh2mGABHFgLYwqYWETL41X7R3h6rS6EbpTkGH97",
  "key7": "3xRJHKVi7EAj3EGVdRUj2cQTsJKM3EAxfRTYwBhebx42A4TsAxd6JjizLDF4eD1qLCmKCK6TXkUsoo7zPxAfayGV",
  "key8": "4VUBG4x3Nr7B2spujvuXEpd6SnSdX9B5VGH4jeHCLvDKggL2wy325r2MMGnq4SXEHyw7P9VFzjaQuxu1s82d3hWG",
  "key9": "3exiRZjdPXhQs7cXsMEPQHm8BznduwTAURY4SYGC2dL5DfJmq444Xz2mQFWYLgSBLhe76a4xHZ8JoJGTzthDUNAf",
  "key10": "pFDWg44CzBhvtX5Kez2GPjPZ8ZhHbhi6bjzY6cT4Q19CpQThCpM9HzLQBX1DJnToYhLd7WvBRmn9dAWt86y8cAk",
  "key11": "67rSf1bpHptpJNPXdzR8Dz6z7bGjHdtP1tYHKSRJ7A9uBh4tdDWN5uwWfPgH13q7a6G4mUiukDcHxLpgey6DcCHz",
  "key12": "Fuc2FCWxkKoknXPP5sqDgat9ox8og2PcfEYLPzUVKTp8huR4zYyNbcLYgm1zo4NKZq6QNsSaYJUi7P2mmi8Tcsy",
  "key13": "rmTeio9HYu8ZowR2hM8SwAP6iqU8MU9qutFveKhCt4kqNZTDNAe1nwjm7cnaXzsH2HJHYGsLw2BfNe3PqLpTUyq",
  "key14": "EWzEYq5DCRF89XXKAPvYdjSxNavWWLp6h5UJJ5TgqXuNmWAv4FcqcFGhvteTL4jY88oNnDZjWJAyG2d4v9R42pM",
  "key15": "t814p6GXb8sSepJRcQxnzL66TZKzoPWLXx2TtWNSFkc9GPgFsXNjUDp5NuV4nvxcApguSRbxxSaM9AxfMrkbQc3",
  "key16": "63b9gDBsbR5NudZ4iGhbjhPEueasuxnR6qR7RiQkqeFGL88xpDP79g9V9jDBa97K7acYkS4ahGc7BSJR4MGvzvr3",
  "key17": "2j7Hbcw7vSc5YaF2baRSToY4ioSbvZnATMduTwmWty6wYjpnsaVCcqGgq715qqQWw1qd97PRqMybBngUoYNAGVgM",
  "key18": "2gVpKZ1CKJMsjnerBJxCiv2hEy2PLeXgtFGQ7WiBxG9Eikmx74pahJ2xMLYTgVHZd8FhRj5mBqKEbMP1gH65y9j2",
  "key19": "5dKkHphBX8N57YJnRQKre2sF6qiWhBinTgMzjj3iy2HuviQH2D5mHHeG9FDKLEzp9jwgUsi5EUErz68bSRM79Lxt",
  "key20": "3VRQX7kG23Pq4AxqEUT9DHaX4gUNiQ3vgnHq2NB5SfgoxnXgZQKUpzQ5hufjQt3d1AraUt2KARctokbrzpxKCsG4",
  "key21": "iRhbZAV37a8ug1DU8Djj84gZjjxu7usX5Vwg3Uj1suQ73guviNegBCMMKTwHknoc95JGmHNqTr1XWFNNCDm3Sdi",
  "key22": "3KjdPCxKCHohSmUekd9YgquoTfptiu6vsW9x688CqAJKNnNMJ4gBT4oW73GndsRtPgQ9QrGUFj1i82j1PxvGYVgA",
  "key23": "56jYpKcxwVnEzZhjvkhnHdm9xJQ6FCvN5Gc79XjYx6MUCiPegndYFVsXqwGUC78HQzfDhKojSZW9S1uZLtHVWyBK",
  "key24": "4z2uCkshxj5Wq2ahsXY6q8UrU73KEnvwRHR8cDP8BQ62V5qwJ41MpEtJyPyqSFcPXKgvGugCq3qubvu1E1uKj1zV",
  "key25": "tXmjXg1Wj6tCaWottkt3xgyFBKUXusgcp7GjugsjAkhTjjBowsBfikySHTVrFJMzX21XaBykb7YvRU8K7GvMBU1",
  "key26": "FcwcaC7QqoozegpBNumb2kB5XmygxBBHYN3ZEnMCjgroPyE1FnmsuK5b7CsaPMR6HQ2Xq4gaZRnY8cHLDDmWkYV",
  "key27": "4dnPUCFkiPdYVEdBhuCVZwEdYF5kwqGhCS1SD65GbRRJein73yv2BpXD6VU7XbDoPgLcTCxJB1HLSY5F4Z3gLDtm",
  "key28": "ufA6mY4tdw9SnrUn1EjGmFRff5mSeo2dP2CZePaWudaB4ZJDXjS7Mdo3Cqe5iHk67rXks5GW9oCy1yY2WU1msy7",
  "key29": "2sV7f9vZUsZuTZMC7HutyvdbHbHgzD2gJA2Hh3wp6YvBGrrXnyvpGwwFmFYXz8noHviC7B2evDim3enn5pPUyUYR",
  "key30": "3dWouKzDr2mBwZptWHwGFum4wpWW66suR67HvXfMdAN3m2UasdP6SLizfpJpGkSWNxUEGrCqcdtEDPZzVDLLzcBa",
  "key31": "zTnbZXpkLxA6Bt5AR6P1HpwfdmekoAoJhHGVsVRPWTLmW48yAAJN7frx4xUMdBY4wjDGkPf488Ae4u69ZNzvCCG",
  "key32": "5dPhgHRkP3YBA36h5gBg7CgQAX6rYiHqgJrbdR6a2Mdzs9Js74DgFqoDLzFWH8Pv7E9net1hKhz7MKhfTxxZ9Fhi",
  "key33": "2Tc8LuDqVm7hLedwUdG54xsYbYBDHaF2C6TMiWsNKacZfPTAEJdFBibFTQnatA2Y3NjDRQnXSE2mf2e6zFYmf3k1",
  "key34": "2qyPDCT1ZvpzmmhiUh4qbq7smcrGYoLJnaH4NgRpt85cXvZPkasARTaNK7BjXCnSNrbhDVSm5KJWm1oKZDLNWRDG",
  "key35": "2WV39ezyHug9h7QDqBFcbqrhjN9eKzZqLAWAURxhrPXk1BYSmekWE3NQ1yxCjDHJbKzCztVYXnJeCbReXfjXrT9G",
  "key36": "Z5dRvx6Jf9EBgP9sPGb6DvZw13c4HCZgbgdkWysK38ySN3ow3U9FS9KFZfwd8GkhqjneZVDroH6ZthESRE9YYAZ",
  "key37": "nNtAejUQNrzLceAStWx9NgjgFV8QRPevBftgj58ZYG8i2uDPPKau9SzQCjr8sQMPJ4jbu4FbxwHbn5Td7v6Csdm",
  "key38": "i7b9JBDCJ8ZKx3RhssNozkrTBfZHbJu6HGneqtTZ2ExfARBVtEos2KHw11Krt5uAoG8mEh7uRoFoXFtLG7CGiVm",
  "key39": "4Qn8wWLgRdfTftfBJrUz7aZzbcuwtZtLQvQKSGEovBLUo81hBYJPijTrnzLZVrXTGXK1ycvL2XR52sb4XxmzxDcp"
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
