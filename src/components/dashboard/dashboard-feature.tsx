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
    "VfoDQoSyxYij3JukciFbYLQVkHSMr1SxUAZ7cL8aoLjxkefLzNzHRVZVHKx3aXdGWQJtg5ka3Eg7H1RkqTfJb68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AEoookqr4B2D1cG2Y6MLzMnN2m83xmdt2zUiJyTfUsx9D11hzgVDBo9uBD8WjZAoFAmLFArr4kyEBVRYZq6Ldf",
  "key1": "414HzFb6kGic2kx2fEZcuWnQKc2hntZDUiW5QpHZf7FYfkMLuFzrAD1BDq77bPEWB6nbZwWy54kU2bVTqxttqsZy",
  "key2": "2QswyXCgj986n2YWRWcczwPrF7syng4MsfkKdbcrZHzZRc8wknAaHismwXyb1Whc3RQrigGungu3DHqaiZBz1zj3",
  "key3": "3p4S6X9iqZV4SahzWVTCRJdmVY4hME5dLRBsioiiLaYq2TovS8mMCRLPJxjRboeWShBSdPEBwidgpugiJaunBiRp",
  "key4": "onVoLnEcFaMb61cispMgeueCGh2kA7z8V4H3An892NqvxjQMtYgnYqVLbo6zuV8y98AY3smLQYyoBtvQSQy1wFS",
  "key5": "5VNBQbijrMPBmywU5EKWmgcE6ipnBEQDVPw2HgK88qzdSXzu2rZqE7XMe1kfA5kQKoFhMUoLxexAqodRCziHrdpB",
  "key6": "4rpxcAPCe4Rf2RHvpnV9pYYJJuUhpoPaEichUANWUQmvGQrPu39yuzod8XAQWiAPC45NZsBzusjJWtvggtFGfqG2",
  "key7": "W8fjD4fzJAHK2ezHG1Unhc1quadLz6y6f5EfTmQR56869fuSuRCrNcybyTTGGShpKVPr1tLkJCXNB1B3LrjTGy3",
  "key8": "4o3atjz4CRmCZYf5D9NUqzbBCwF9AWpfQ2QkWPHZk8RshFAEbWjBJPBurSechkrYG29S7fW2y65J9Xi5irQ1jGta",
  "key9": "5emACH3jz3dmzaELfo7GCZLwmqvurTNxVMP2GnRzNmcayzWxm7MRCNMsSMscQDMSSuUrVMnxSMEkSt7AYXdRpxTh",
  "key10": "c2yNiSnDHRJeHnBLHNMP7UBL11d4cNZUsCthwAaMstaoSTFCJ3C74XyGvv8u2rQiWZVWZxJ8b3Vqh5GPGVmS6ji",
  "key11": "5F7kAAXN1W7mSbimnaYR9wMSfCY6ysPbUS3SnyUo7xHDDw2qsi8NtXVKdY4bG3koN85xCzjnWC5ZTYDtVvYT2Hr7",
  "key12": "bNsPXwqXGanffZMcxNjpXyCbXaynJG9mmfseWvyQUcgsoMwvQs6jy2w72D42hyeNqXpNVGnZKeSPedgL7gbJCCv",
  "key13": "2MZr5eUNCtXDcaZm9FApN8ob8ep2idEFHasvRTcWcb9gU3GDiRj4rS6wXXj2voGxQYM5dnJtjbG2NNSCoXjWzhRt",
  "key14": "5kw8SMUC81vrLSAbamEn58zdTqH6aDsTrceXDnQE9gdQQHEv83Z2BWTgmbRosfSBsGJNjZfEPP5B8urQZbiDggDX",
  "key15": "3RunBnEVeGfCL5Uua5sWueSmLHfPjntDsQGFMMLQx5g8TX8hsmYsmYWiHCBoqwL5XqezjnDTvZAiSkixMAsMg9Jp",
  "key16": "3gfr9GmtnBvyJjAbHEzRzwycdPyWTkctcNCGfgjBWwHi7nK2vyna8EBTu2eSESpLktVTpAz9GrRkFDZvL2DewyQr",
  "key17": "5J64u3H9q6f6k8mBJeyCaNWtPKb1UaiFkTG2RZ6niNJxkVFjTHBk2g1Xs8jzAy2GAfGoCe1AisuiYLeFPvxpwKm6",
  "key18": "3gxvKVrhL6nWiK9gzUoXdfcHf21b6zNkperENfexaReeGmmjSHajnc7eCGUasCeYSmCodjppfSWsgUdXJCxsb5U1",
  "key19": "57cRcnyPf7KFyztzfEimWo2AEJo1U38qgPq4QzaUmtWm8YwyMcjSpM5bZqjAiV3uLqQK8oWmFveQ9LK2xCtxNrqK",
  "key20": "5jLJY8j8HupBo9U7ENf6rwBuyaBpxWFHP68vXszKEvRNRThxreUxBsXAY6hXgW6VRPKXDG7uCmds6rwpDzb2caTu",
  "key21": "3nae1xZ5kxQbSPM3idz9biVhPZpJsotsnbjvFLK2cPsqA5LfnQRyFTm6pCXLUFv2aBSPsBKDbad6KTs8WMBkpndy",
  "key22": "5Gk1J7DJDpFmb99NziMfyCePfyGrjgeKCt1VK1XU3AgW9KSbsJrqmJLsE8tYQiyfKQ2ydaiudnwFM5xGNTnZa53q",
  "key23": "56yexfS9gis3vGfiTgqhf9jhY3vAd9Nobb3aFQMEFN6JgtHehfZYMLEEmc9UuZNnitthYdtwWbv8UsVKLa2Y52pZ",
  "key24": "5EVcj3gy71CEnCTivLTb2rPXQxFLLECLtarHGKJAHbRQAgPmwhEQACPDG5hUkCQPRBErG6xYBiTsmGrksSjjayNv",
  "key25": "fehoXjdekA5RyKaBcFERTnMJ8oEQCEnoRnGdwjDWGrsrhqFMYKaWBAiDSus4k8ZCgcB6HAFrxCJajT61DJ6zsbb",
  "key26": "27oka7fBRGo5uuyw5mjeGnmDqu7EAFCJyjNMfB5hhKeicaoiQUK8jfHVZ3cZZFWLVLBZjSPbcb6SGLr3ijAtG1QH",
  "key27": "5XhYDL9SzqDvmKEdo8xR1EAqdeNafN3LVAJqRJTs1ezoRS1RPRP8K83WuCVNpReWv4e439Jy4uHCnCVABNiEk13b",
  "key28": "5HeYpuePkBrGx45LPPXdddG6eJRyz9c4nAn6HY9nbVi4pu4tDKPK9DJVP5Vvg1BaBJnFsB5RrQZLaUt8i2QzcsPU",
  "key29": "5WjF6ACQ6E12471EA7tdjBJfj32GAhX6bkvLR5eFyJV3T9C3p3Po8fpPUQhM2cduWbGsQmjrvaV31g1Q9G5bcAnN",
  "key30": "2kEhy19U1WjGbxXxo3DvLDcML7457hQMBxJ8CoYpsujVcFg8zHRBcy1aGLaMwb8RErWaSEhCdMbG1sQSNgbELiyK",
  "key31": "5DMDMnMnWwCvp613Q8LTEyHYEHq69VznLyTb9U82LXF7Ejzh7v4bECsFak3CWJzJ7N7dJQyc7xzowMKEKKRVfaSX",
  "key32": "2mhGrGxVF1gN8NsrcxHARiy97KGEqJNt466uYkMkdHZDc9oVRHi7zrm4ncN75kqCSAixT8VAwoHPtFkH3EYcwcg5",
  "key33": "25zaxKDaB9J7H7Shbp7UoK4Pc1eSwicdnTDEkEVabbLVrFthyQ9f7qo3et5rHPrDGaCbFiFkvyk52ykpdwXcEb1P",
  "key34": "Pmtgd7Vi1HJ6zcBdhMB4nGhBFuKLqA2w9CLhPCaqxSv7mtd1mowxfGZQqjBZPPnBfbsKuojVomLMJ97szbmvm3A",
  "key35": "2ouoayZjKn2aYbjva4RDtBRs9QocgHV5Xaw4JYsX9ejjzXhfR4kQdvQ7nckZfBaGBtPuHQkct9dB74jvTRUh26g8",
  "key36": "3d62LHnpv7UzGLFAGiBwLtECWK4i5As7zLoAfZ9UdhEwgBikdwPNvu8QxMTrxa4F6X3sehtDB34kXKkMbQe7fhhg",
  "key37": "32UGTLJmJicTEnAQteQ1R8D3yzk7eAUxcx7FEDympexmw9S3Ys5viUeVHM3zDmaaJYRA25JE1QyQbit31xQLV36H"
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
