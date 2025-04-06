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
    "52iEYbgs2xg4TLHvYkNYcaj3b2Km9pVaW3Gi2vdy7mKAC3AyfvCNos6PEXdEVyXL9DZbQ5GvMAKukA9idcR7iToH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48p58yxWoBFXkdF8WCgTfZRxw51ukGjDsC6NhF83ntBywsd39A7xDD5f4jhwLNUEAiSmyHTWWRYUYbDd6GuRa8Bv",
  "key1": "58o3aCtjcehh3eJisfHeekHwchPgu5QJo1DPX1nAMeTULMf88kyewYHdpzF94rR9PDHHNx4h91krHr5Di4QM7SLD",
  "key2": "3qa4zvXvChr2xhtsFUejrijCn3iQzhwgJLtZB7KvXKYth2LuuehwhET7F2M92jxFiL7sxCVW57bRMJz8sJX7XTd5",
  "key3": "3nz5w2UJ4UqFVVtJDTTvCk6wFp4tTqm5q4amzFRDTJsRqQgQjB9WuKaPS6fHnZLjiEFRe6k2qjjsBMXkrSPefAAE",
  "key4": "3uJhCxEp1mZC4h6BB7XFguV7BvJMdZHrQhNuLLXXQ9YBzT8LwVCeXX7imHhgFfb4f7jokE1QAKZdT8puoAUa8FmZ",
  "key5": "49MUkXGbnUVmM5jhPfNiA9awLGCJR2kiYeb6y1eHKAnTT6fHip23zCVsAf7wmMmCmhFRszD23en4NFTVybeEv5Dn",
  "key6": "3o9gToSoDfhG67KJgwKH9Loy6Ka5FBj4268zhJtDvxKhbwodbV1Q9mkPTAc8mXQBzDk6VC3bjFs3Q43NtZMc1bva",
  "key7": "2DTYBFnfLSRoLF2upBs7GgZAmJP3eaG1MEyrLj4DhGJSHAjzyxDvYp5Kz4HhNon9mzrbBCfcpcUsv5dj8qqKtKZF",
  "key8": "wVGDqLSpjKejmdiLMY1c8ACDRtKswLkpdFuFLdVYiQLmRth9u9CtEFqU3BW4UyaN4VELvqJK3RECMsm8wWhSKA6",
  "key9": "3DVjZ3A6B65DUxEJtb8kHy4gCscv2iU4vYCCmsyuUMcagVV6EUocLwya7ZB7ZAtpCTRtyvLX9D8AiEuMK5RFM8HN",
  "key10": "5uYTuN8L752Mr3JWpYfJJcVWZ6fvk2AUAcUqZzbML3Sbc7xHbnHCGG3ozFz3uHZWapGwQx22zT9a7LKgTJapCiyk",
  "key11": "5uoxbAivQAmUY5cc2tVqp7Z5RNvMA9yTYUnrUhxqbxYwRqPN8jAJcrM5VLZnSEiaxZkdHnr9aR35EgdCPHVg8kdD",
  "key12": "5YUTVFoBoS6euqN7tCQJEHiMnsmmvdDpoWsT6GcDSddYq4R6zuQYEm3fecMirCu1GpAJWXNTyPvFR57mWP2d33mf",
  "key13": "2Wbaw1DMEkB3xFzNimMgsLhrNHuBV9ArSYnya737FGk89kAgXetznrHGa35M4zDcTMsL2scZ42xLvPZF3Qm99fX1",
  "key14": "3txDMUEGhqAG2TDkH2hiJfjuxUY8dELiXdXUZrC4d1NkX4PsbURwHsbJArSXgozpTb8wNwZby3So9L4ypZBjozxE",
  "key15": "42SqFTeJr74r1ru4SgZMajYpLCaG5GK8Ua9q2szRAagvFdj2g9D4fKVzD9B5wa7STV88tnzNLp1YyYnnLcEEzjxG",
  "key16": "3EUocgeFZaf9pTVRvcBTKjvGXYsRrebecwKFFVhtqUPUkCKyCa1SBrNidHCy1qM6ttZ425skQGBkJu6YNtbi7GRx",
  "key17": "56QT62TZPYV8ERuJP7hzdqghfDRzMid5G2ayigd92DHg3rfc7VFoGHJ9UuNcx43md1G9EFEEMiDfPbegag6HFRxs",
  "key18": "3DV7ZtUJyCmevQCfGUcKuA5odU3VWMfdo8EbTJpCHXpyCYcK1pMSMrEN2L6pp3MVUHr2yPjgyYVMvSjtfXkmhNJP",
  "key19": "2fSEHEjzFsM2sHGxqoycHnyqDuP4i87zVpQbxAVjy2g1LjvkeCwG1NAXn3oJA3jffHfjtt5ZdPJSr3amX2bewBHR",
  "key20": "667hGTDhoQY8eRKAMFX7feaA8yBAbh7MtVK5mqXEEMJkdKrbD6aMKJz8mez49qgeNnaPLRgAL3zVTCtiuGCgAAKi",
  "key21": "42DAteWrQ1HK9jLKz4w89EZzQtb3u74h6ErcKksv11RyXPvxgpa2hdZnWVZcZMNBmDKUDkSxwxZwLc4f1QV8NS8u",
  "key22": "63zoPMPrEwD7iMheCi2QzJAksrR8pRiQjQymVWj9KavUXyDSk2tJfrQ1AVjKAxetxivDJrF6UeQoKxS8zfQtL5dT",
  "key23": "5D9xjCiAUCPbv8uuai8ZD9FpHKZ1z1vJcLhZPK4drYkTij6i39aBF6FL1zCDmwMzqZLKh3oEfXGkyKDjLVPNhV1X",
  "key24": "J1wmpQay9Y3TkPD4WgVu3fNCQXLdi2Lqki2szc7vLsD14zTX7A2Sh356w7rDmu4ecMNpnUaqQJAx1E5QsoaZRFV",
  "key25": "4K3v3TYP5uJxwVvjqhCVmpqurArPBrCYAbEqj282qaGh9bQ2xZxZig6U3bwE83bFw1wzKW1xJ2BhbDcpobk2cU36",
  "key26": "4RDqhGSWLcpVZzgu1JyX1dmMQACMGpH5NVXPHLEBuEqrYHZzr7BLCmT4TkvYz8tusdWHv43USbQP5PwfNVqpGPpM",
  "key27": "3uUsKwo4V4SaVh3K3ATXCWvyxtxzbJxtor8sCJnMf3Vo9SrZsZroKxwpYCVtRigmcHMcdT3WAGnoLZM2yDjf5FYU",
  "key28": "3priUQ7QyJhmiDiXPjd1Erc1Tb3vsYjwuC5NJcVeQ1DxKcztuG5h6zbraUuBRFai6x2P4ZuZ9SyDFesk4kY7XrDr",
  "key29": "5wfAoXXH4nLFp77ENT87VpGfbNmEaprnymnCtzaFakvbDgfhJ84YHco8i6q74cz9CVYW5sdARk1zrRJnzgaaEidb",
  "key30": "fZsNq8rr5v2MirTtjb1oCpsBQ1SZbAhCfwQm7kqY2T3TK9YTH6L8MEGiPKmgDEnzEZfnFsyjgLezcdVtynrBXPu",
  "key31": "4hNbbLvqCtqh1vfrWLY2GZmVUgLnSYdNMxAP7ThzEMBDTpffJZuzdGKhyHieyKkajrBSanGyp2HyBuoogaoSM3z2",
  "key32": "5GfSDLbDYJrUBwzCZneNo4LYgAaC2eZb28c6AxFZEQLuCWv6wr8pw21B6LHMX5gydS9nQBkZi9tSK3cVozSfREQA",
  "key33": "3BWfCfsNVJJTn85cffsuU6aF9KhL5mZwGK2hY9fYhuBLHT7UaudrTV45rdFnxpnJANpSFggN4HsDDaxabihcm5uc"
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
