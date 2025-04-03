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
    "c7jHrb7irTYZobih3gftc5JzdA5CPLRoxrKtHPytQi9rQZjyZZ95e62QeFzSWv4WEJdjt6tmgZv5KwkBrjyXw2V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xk8uNDtU5qvw12NagRzZNH5nTLYbUFc9SVdB6vFCGtuGJsorS6gxw9WtpmQAtwGZyz4cv9j9GYteAKbLPxNhjxS",
  "key1": "5hQJGrUkJxwxhxv2ZDiRzUHRwXTHg1b8TxVsxvuyQTKEFMMvhfBuexGUNVjBF8dhMK2ZNvLFsNVAG6nK3KkSKQEM",
  "key2": "4DYUcMFnE8AgqeJG62SYhrTLoWFs1Mjw5veKtopfPW8L2gARFg49a7pUpFpCmoNRGpu3LY58eKSCmFVNAY2bzZQS",
  "key3": "QFf4xyb6D22D3boEa2GvGKBpHBqHuR2iJA7LVjQ6VC1wdGCFWYpd5auhj6QuCqc7a1h44S58DkoEJfoaTHUzRuh",
  "key4": "aNJWJUy7htWt3RMcv5AKnCMYQtQQbz15uWofep2KuEXM4ftPNCynHTBhA3PE7U4txjAScor8yWxrSFbrAbA1qAw",
  "key5": "5JujRaPLJUmXMU3TexXs9d8412DLaNN2mF465ozYvKpFsUocDR1uks3Jp7rJn1bSeXHySkjfjhC5ePGnKUPpEQUM",
  "key6": "2GAuUfFoPoqHEjt8HFP7MysCQCrqigjG86DSjUXpaMjUddSAPxeSz7UqcfMk93KGUmyqqZHRfCv713p4XbV9hwVz",
  "key7": "cL4A4idJfx71AXRyy75FmhF5WnUj13jeUF6StgQ4cjx4PouhoiWDsH2hChxpjmkAt4Qc6Zbddyt3N9dsnQtQuQx",
  "key8": "XSPuSD11obPGUVaiqnUrZJmZZig3LY6ehZEZ3Wkc5anVXEHF6R6NedGsDwyJYq4ebHLV5fFFCjZwd3ZiGyTby9c",
  "key9": "5ikpMTCYzwRkfsLxX3HqvFdumnsYmtpSQnKMfcFXGteYmCw6k5b7C269bs1fycejPh9cphMCnYfPUrdvBaQEiDnt",
  "key10": "3R2FiaJjhdLJhNAzTQ5VD3LC6jC9dyG8GrZvRMCwVdZqLhuCZor8bvZMSCxBeFcCemwdoUEorKY7dKHfmKBi9ZZk",
  "key11": "3HrFUbK9FcAqKM5yoCSzpNSdgr5T6UCpFSYcxdCWoA137sjqMh1YPsgXCgHPz8WJgb6KTiGwxrAfUd8mSvJQQenS",
  "key12": "Fb5h93v1pDhmcHYVhJCXPtFFj1pfoZieprxxwhL9RLkxyNRws9NPPqzuqZbZCUbauAyb8ba2a5qMYzFH766Tt5t",
  "key13": "2KvGbHe8u4DWQ1MtWeqmBu4geDNmjGNLjawdvpAu9bZfFWb1sBYMPUCPK77AeKwzw5C5fDkP17ay8F9XSSAgipBo",
  "key14": "2yA5GVKybn352nyXesXW1QLot9Rx8ZTi74bDHZRUew1o5yDzMCzp3dTek8PbTmJQTKUjfx1KTCaCv4z8Mtid6ZkS",
  "key15": "PGJoFUK5LkPF5gj4HLq8bvAaX8nKRkTLr4WQjbAwKZWRR4PFp4C1q6gp4C9VSGhzRmcNQLzUWFP6PJ7RqpcJujK",
  "key16": "4ftVgM1ib5qd8SLqHLGNwmmcc2CyaxH26bKMHYpWk5h1PwwpXAaL2gY7sn2dnytzAmno7kBE2VbY82Qw3c1z4ZdF",
  "key17": "h1Lxehi6yYfJ6m6GWiYTQYosnLskccNVxnbG1sJkq43HEt2TUdmgkzTzPnXVhoTRVSeYfPoLD7onDVBSSaRpSgq",
  "key18": "5SMKZxdb5vAYsstf5hWLRm48L6uMBXUGHavzevonr9Cvtuuc64Crz9wrnDik4v2YUXVi7ehZcJxJM6FrvH5MMs65",
  "key19": "51B1FbuEKy2aQps3LcY93pSsdU7VwTczyKmTv764aoqbF39RSbJPiZG9bssc2efunYKTaCLSpKHiXryHhENM5acu",
  "key20": "4qsqMqTyY8B9Jbikh5i4oSi4qpjAmpDxTkbFKvAADixjCvCK6hykgtHhVGERyX3nbbHg6KmYJc4vkD7VnVwYpWHw",
  "key21": "4HDCPypZDj8h2cd7fmVFbyTUVGjuKJMWKWSajCmQaYpo12qvbPGS89FTsePeWKQDxFFMR714na3uNArmmu5jKBLf",
  "key22": "3AUu9JExsFzutqgpghg8eNaMnbcsJFygMh5V6Zj8m1ZY8xK2fwGigcu6ozGWCtGN6E9MrrEk3L5PiESTCLpc3Mqe",
  "key23": "3Szqy2xiFp1fcTEnVZqN4t3dzkszjsKw6LFUF2gd4T93yy7XycHPSQRkJ7DbtMRudPZNBBGCK5MTTHcyDGoLyMTV",
  "key24": "5gb6QQfowU7rKfBDL8n4tXUCBKYZwnEYgsGKXVzTyrnFSTUEdkJW7gxqbK4rWYFY3gWc2cJN5Fcph8xuNznmd35H",
  "key25": "3Pjvf6gqxsq8iupPBCjrMptLL24FTaJ1ZQUdvDc499h719UW8ev7ktStEbi4dgAWuug7S3BDDfZLbppM7HXrUi8n",
  "key26": "3uUQdHRGmxsEqxrJz1Wp81pb4H1i9uUgJUB6iroNU2WqwMTP2Bz3pX3Y21DQh49edmocQZaZJNQ3bTqYbXz6PEaU",
  "key27": "5sF7q7Mr3SQcn1Riohzn9piF1FMAzuCDPeu6a8m77z5Dx9magdfFqf1AUDCGCDMwmLAeezUbtjzMFAHrq6Yz7nR3",
  "key28": "3hkrXTaGjSRoyHvuY7h4bcnkMRrUEaAjx6imkjznGdeVx4LrrHr5Dqum2iEQCUNqVLCzSRza7H51jYqy7rBjD6K7",
  "key29": "26C6kHbm4iMHrB15vJLXRdkrpbhNw8rjk9VPXnAjfeuFy3wWCgZQh32FDuK6d8mE2RTxdzRjamWQUfbLeNT15S9H",
  "key30": "5XYpyPGk1zSd3PMuEWuLTJkprDrm1UC2Q1u59KDss364UKDEDmVk2HAqYzt9gc5mt4HGMxnkweSgfEVrfuL2svxx",
  "key31": "2LzHp7rWaYKAP6Vy1Yg1rycUU5MeD53Hn9py7eiXMnxU2Pr2jSLS5DexmFn2FmUTm64or7cins6dTijWNdXEBzbY",
  "key32": "4CBYCng9kvBgbnN2QBWMtCcGcC5sX9yyhh1oXkWKq2qkbRMsqJKsecSiVgvKApnD7DyWeyYELXfRUTqzGG27f7hU",
  "key33": "3D254tfobrqZs7ap9LmScF53mkmWYj6UbpA1wt82qNJv1f2JbKAkRkYiDBpo332hJiqKqqyMsBLxoxCB26hhqu8d",
  "key34": "5fnVNnaKj5Kre7CKaMM2HLqG5W7fNizJUjZmRfapSmiVGq1BWbMCRJAqqZthBr84Nc1Tk12Tpw3Ns1yP2Gi1m8a7",
  "key35": "3iPQq5YUW4hipA8uhrCan9MmPwYGAgL3hG8NFZ3eVETkmMo1GYdkLXRChW9CjyypzizVCiC9iriW4TCKNG6dSTLi",
  "key36": "sXJCT522YVGjv9e7V1xwkTfep3kfUX6Ad4QupJu3UEfMWYt75kz1fzXixzrYm4eQpHEDpQS27Mf1TZESzdY2aKg",
  "key37": "2TcxD6ogfxLgscykK82xJrzqkvN1JAGKmamduYq8KHSxQ4gqbsJpBS2UjBMFozYAFy4NzBKD1PFMPfVzbzdiY5Qf",
  "key38": "4GY9isLW3q5ZL9pVJQQz8P8xR4i8CJknMHYfvSGc73KkyBmw3rMRf1d6ivKBZWbF2975HPA6dHLWDJAGZvYnC5gm",
  "key39": "3hKrjA3NQbbCgWG9Kry2fELRDrCfG1FWtKuQgMAqvy4gFhZfRUnREv4eePaaf1qErn6WVMgbCt1NqUEX82dLKbom",
  "key40": "5W8xoZYYrpZVoxbZ9RyhDGAsHJz5tsojeGyyu49A7mn789LKvNqUG74QEx2RvcgJZUmQeBomuZ5JaUVfGkn4X9Ty",
  "key41": "2smokkZVnaM9en2fb9ZHbJ6nGdZdZjf47GAacBhquADt3TyJK2oChvKS1E9pcPvUjdykuepAoow2D5ysQuYhXo5H",
  "key42": "38AtgdBbbMKc9T5D1JyBaMRr4GYZme9A8nNP8BLoxPp1PWjGg7GbsFC1ATj3VWHUEeCK8EFLrMYLGsL95L6T9o2M",
  "key43": "3wQBA9ifcsu4topoKpKqkNperw3z5YXwdmzvfrknb32Tcyhp8Se3ge2Y7XF18kQNt63CtyEFNxMhWkfcmm8Bby1r",
  "key44": "38BcTfMRiUmRmD8fZeaChDkzPU4AB4bW27GnBpMTupgKbP7QVrjCuCZt9TBufhQtQNgrG9X9gHmTzFom1MCxGyWv",
  "key45": "5TkEfCL8kN7CkMJKvpySV4LEYzWKmtwxQvPEVnzdFmQbikZkuPyUDiqinNcdxt99anxZ4LBY8A9XbEQ6d6j5M2Dx",
  "key46": "3XuqoP3DRDCcCD9Sb6YKCAUohW7SU1MB2uHRbWV64Ai3rJnuwyWeLexY9Jc3ufDNXFAQMEyNJL6TPZKXyZacbYSR",
  "key47": "2kAj6eDJgdeNU79jjFwnn9vtEgqFUrVSNjSFYCH4DRx5oLVjxtysmX1HmM9nZTRox852dg4wWy3cvB1mycdAN1hq"
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
