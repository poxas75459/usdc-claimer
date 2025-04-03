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
    "3G4zDUYF2MRZ7wYhQ9qGDnEE22DgExKuEWHyaWEjwtPx4cD1P5Ej4sBn3Bp5n1S8w3nh9X421wDiC3cF8e1nHBti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MR7Kkay3AqnTsLmM3CHUpJXsh19uwyV9obd2fiPfwW4JDT7pLtEBQo4Q4KCS45k5D2WU9fNeE4qqMY7ZrAw83MT",
  "key1": "646FK1GrgBeXnfAMKHucW2QYq4mB4DyhsdVsU2psdozAU3AzC7xoxSWGL4GC4U6mERUEiH2Vms9GkZacLjo17n6r",
  "key2": "HbJX4hsvgmPvG7hdgh9vgwxsRzQkfcdiBnKrKbRm2wuBD2FwjrgchTymZnvg6zbyqTTjRs8AjPe3MgNW6wXSYNb",
  "key3": "2fBR5z3EBN6izFUKRhjCgYJ7fkpHXSMKaiPi9sgyahB6CmeRJMcpuq19jw38zTi7DPaRrV5VoUz4DANFMuCT715n",
  "key4": "4ZeUJBdFksqUubQz1bsL7qPVfRGcyzDXFX72VcR2sbHKEMHqTUX323Ptyju4Za6kJsch8qB8vEN9Pi8pSoGu5qdY",
  "key5": "3mo8CrPMyp5hBVnS2n3szfCRcaHukLjZxDGsohWmbMJLvP46axAk61dcAGT3LsxsqRgwioMz2xBAK5CmH7fMokQL",
  "key6": "5H3mk78Vu2hgpTadszygtrQV8EQ7dwpTMRC7gRJoWmraEsESfdYm5Xct3P2cFF5eoktAbpoThPKBRee69TH9UHfw",
  "key7": "4b4FQKDZxr4LGEz3aLyLyRLEoetmBVRQVXjbPYSBTjS85rXgvS1H9tjJCPoNYJyxC7njsEhtDEWshM1kGzbX85ND",
  "key8": "5NsfWD7Pe2L7X28NbHhocw92vCsHezR5iSio2DiRNMMUEqReD5az5rqWVdSEC9aih5Et86abKHKintFMjajK99hk",
  "key9": "5Pv8vtUoiyLY28B6rZbADsGrBi77FcmXd8CBFAheMMStvLLoXcAv4UE1ojVDPWUTHnBh1SAbobT7mGSC5rpyMFSp",
  "key10": "4uKrunUSuKd64iYQDzE3iv4tyJQuGHhPeGVRNV1Z96YQa68pgiznzS6ymCQ462DWD8vAehjyja6aeCaF2hKvjjCg",
  "key11": "5GtFQu9PBPojGfo222qxbqMTwv1qoPUMTdh8fbj3ngFN2apPCPgd657e4fwZ6nRDQqWePSwVJt1AihAdNNPeVcN6",
  "key12": "5yn9rJBYSau1856ZNQ8sh5gmi45nju5vhxj2t1sg4iiroirVy2dwrp7RPX3NnzwG7e6dRy8jURQneBpmFXRHedmS",
  "key13": "3kAVrqyQdFtJVtNs2q8aiAVdsCiwJAr6nwgpFUSJabHSMkU7aRJJFxH3YMfsoqdbtFSQ1gNdFXrRSpNuHqNQVVwe",
  "key14": "4LzBKCVyEamAvrR6f7Ej7HRvh3DzS8VzJvWxgesX4qacirKnG8goNE7DQ98641JSeQGGgi1D6FaxnpNqHZ67H7xf",
  "key15": "7UhFarXqbweVnJhy1Foe6DyDbCZKa6KpWvrQt9wTSKAaJ94jPJF1MiCPxKFhveZrDimwyboDByudTGXx6Fbn7fv",
  "key16": "61QGfEMLCbUD12BsUwnU9FPtrMEP7wKu9cQ4MwEqsNUx2MkcwMe9MdZ3gFf9bwfjToo8AxFDC8VcQy5j1s7oSkxP",
  "key17": "5psuszNi4AqV2RjZw6zefdvmUH7oAE1GTt28AzJUSfh7mU4aMMskMVK6ko5iLQUP3eeuUF677Tbfq9MbdCGhpEwt",
  "key18": "3nNWcSc9E4rZVXkcXpmPyX5TRVEo1TQTDeYxqBdnB2GVZaXYJ4nvvwZNaGHZ59ZyUTyzTWeCfQT3miysZZvaibh6",
  "key19": "63UuEheNbEWiMUYqFN7Cuai3k39g59RRQyqB7bdoQkddUuoSgtweFLLduNv1ZLqzkNwPtna9K64vKDZNUcfs2SZB",
  "key20": "38H7aGAyStY87rTGWqfiB86nrFfAdGW3auxZFX98zUqNdA2HA7pofDVFHTU8NKbRFwf4bRKL84ECWCZZDPJNkZNB",
  "key21": "2KV9V1nFfqVqRqQBYSAfxMJ6FjtVkU7UFck5whPnA7GyeqL92QK5mejf2AKATh9JBcvAdHrpJsruBvkFQ7B2pN4i",
  "key22": "2pZEd5am4oGh4GKSWMWbdxSBcShPexnZ7DBFbeNpktPTWrCc88tVfboRyhVyEFdMcpF7fixEJ16ZLJBFtiM2VsMM",
  "key23": "5BpVyTd9PXUJV3RkFg2uAoqppXRcFAY2FZAmBkWJHxa1TEc5s5KQspD4KBkmCFkAvrHJLH468MA2WvcmiFJkNs57",
  "key24": "2xKwMrSiEpdvAhDS9UJD72NeXHN2RKpp8Ni8HWLrg93gGEDi8DLyxSmx1W3jU1jjR8E3pTJK9fnKLoScMg6fVBaJ",
  "key25": "2tAPL7Q2QKNo8d6HVtXWB81qpN3VqaLoikbvzTGsccsTSkDBxePfdVTbt88f7FGhDQbyGz8TfkESWEMcYHxEAUMB",
  "key26": "36jcJsvWQTMC8ZN2xvbGDR33EX4QKRBfrvqTtb8Swhf1KVXMdjewjzNDAYFkZUdKhYcirdLA3qjY7NCHYTUDssfG",
  "key27": "4Bbwx1FY5c4GYgTLsiKTvU8pBsxy62EJEi4W665ejcMpiUDyuUudKHDP6CksUQ3KrPEZvhWKxX5xE7CP3E7Vo16Y",
  "key28": "Z7HhksWF7QYEyh3eHHzNpf5XN612BLuU4cEN78EaUL2ppqPaSrq2FT1FQb6aTcosS5bTp6HzVokD67LPq8BAWTB",
  "key29": "bMHQTx7dcm7YFcLQ6QXiHu6QhJkyB23bMA8TyVMa5GG3RsJwxdY9AESnfC4dBYrtxSHaTbKMmXmCFToWSehVvpS",
  "key30": "2D4YTifx7FQrLRwZQkHdNiJh9miQ4cEndVewfmx13R2NBnfed5AQ4AamqCv7HTQSixRZeKFtj6S3VB5JkzLdxxBp",
  "key31": "vNBHRb8iWK1VUEeknggVN4XqUjfhSVJ8Jer1muRnCZs2aA9YgZdm6wWWRg5p4vqHZ1B5zzdyQM8yiKfFzzEon7q",
  "key32": "55WFm8r6opuPNx2RmEJs6TZC5J5E6DukkGGurbm641T4mjrH1b77EsQVyup57qrdVKLqUyPSZjpKH4FGysASNiuk",
  "key33": "22S74sN22x3VMjZS1Ma4NSS6aoyAJaC3EnuBm9Pz8NQ435f6mTrVLAGsUKbTxYjHrZ1Wv65oXtZSnXuw3dyq9Y1c",
  "key34": "4KUCTTurkfuSeKU4wKDShbyeSxMoRJUnBRoK2zAACVSeBrfGcsQs1z5Brq5DUA617dS6S5DRKeiFLR38PSMmZeNQ",
  "key35": "42TZtSKVJBbEk6rFuUWwpy9QxXsVPnFJ9DLDatTLsK35NiN2Cu4kH8K4RfdpuZrHPRs1Fn1MeaqtzvfnmVcAo7Pk",
  "key36": "58NwD1pvXohyC9Q6Nz7sPpSyhb6sWUftHXvBXPTBspQ6jZFb1XsSTn2BHAvA3DdyDEGHRaKTVW7d45fDoCmvitER",
  "key37": "ZnvDJyQfMBv4DHvCgiHE8RLZawA3wzGTDatFCBMSiR2YhuMBasjbTGupF4uSh412cHPvRv4vF6H1Wmr1kSaJ4P1",
  "key38": "LTZJnQWHARng2AHnrUr6YfvHDYrZn8Dpdzoq7Sx6JBkXQ1SC8Jvim591rPREfoCftL7rjqEvgPG8CQ4ZF7tCW9e"
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
