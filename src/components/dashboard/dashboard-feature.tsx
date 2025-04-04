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
    "VQnminn5rcxV5BSnUxwSm6LhRyeBbbQUpVPS2MdQMMBJm6BG1Q2hdS762mg12ivqP9Q1HPCNb8rPWM72G8NqNiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zm9MWUvzAcoCPbbouyuJRt3bCTDoX5XY5NtpXayzWyBX4Q5Jg2qtdsP19ALJrfoTJUY2wc6bsaYVXP3mYwWpM19",
  "key1": "55xY1KFVYyKL7n4T8dRLpnLwE6M7U4g5orYMCjZnWdkAMnxp6ZDMpWDwuM1ovnwN37pjBci5sXYQqETN8ww3zz2F",
  "key2": "5LAupYYKmmEg77d588dx5e1vza1MggJiECYe6ApjfmcofW1AdHJCXXTTPoMCSBtH6oWiiQ6fkYo1wn1vNpragQuv",
  "key3": "4PVZorZYYLLe36RYVShvS82zCFWZAds6u82jdgrax1D3AFcsx3X7hK3baJeHjfmrSQ9mKP1K3VE84zyVcr8oWQgs",
  "key4": "4CCtBNti1oiGfsxNYL2nP5zdagHGUidVsZ75NH1P1NKKhh8DfVeM8DinjcHF91aJKuVR51zweG5ebL1iQBQnQV4E",
  "key5": "3WxmHp1PZd9UDTEaYPo9AXuYKYsdKBYAdajsABPx5VMbN8WapznZLNL3hVfBM2Do7hpenewbLNrw4tnyfCveNtf8",
  "key6": "5ftahrfHJVcsjJSpoKsPFcjZd7cdBU4y79KbunSacQmW2DDCvSRxr3kNoYsS3Rb7gqtCNRAznT9KvqjZwehxW43j",
  "key7": "5tmKD4ox72HAsc3dCWBHYMUaorcSoCuD7XThSF6DrBjyQCLDAezECaApo9Sc9aoP9mTE1jYipt5JiTfWQisje6vi",
  "key8": "2xrumj3n5rbjYkgK9ZLJ1ruhPCgbzKhdyGDMk7feJXdTdumzYj74JXXnpqAskRfyucaeyFxzzHeKvMAGuFva5aQj",
  "key9": "4U13BTZzfvQe31TAasGk4GrfyFWkkor6e66zaz1jBU6RUVW7EfYq9iXDUtSQsbwdjFSGpGMmwHN4KLwGrNYmE6Nj",
  "key10": "65BfStwjLJv1qb4iJxNrjXdexkiBAyskn6M78YgYF6wJLZxooGKspanfhCHcRR7WZLAALAHaqG4umvXBvuK9K9PE",
  "key11": "4scnWqpcn1jBAzPkBcUihUHMbc4vMXWgnNr5oVQjo5AeiqE8XZt9F3v58gWsQFyFkLocQEEbcSWwijxytvuJDU4H",
  "key12": "5NMiu9r7AGXf7jnoTfNdUxEykLHz5tmPDJ7Ehuzqce5LAUyPjzccBwL1Ks6naaBgDcvqgJnoGwEAAJuq4F3kAUSS",
  "key13": "2KocAV3SVZSBW5SC6FDBU6UGnfUedrVQq9JnEXpMaecYYHPPqtsTyL3kHXwQcdNC2iNPmNKkbQvUzJ8WmKYLvooU",
  "key14": "4y3mfHFRJaoBah9LHGJ9nbadyJPMBmbYydBFcCr3JmWy5tHL7UtVkqh3ChVT39cE5MKAF12gw3SqY9bRMs28Seyh",
  "key15": "3gS4GQCk4jDmbSMNr4D1ZbpuvRzyhbxWvedKeGdmYkpfCzUiMYZ5MAi8Q6YvANzP4eiANYr2RpVTR542XcMUqfNB",
  "key16": "2y4VLJ7pbfMiWzvqfVTDxannq9DyUwHXYThubpbnM94moJNgvEsN7J8NaSRNtTAcCCso5rjUFZfbxeQsUKwcqKg6",
  "key17": "4QzFeqqheUKWrQvhn5jaZfB4Bk8jnvVpcwojLhUNYXeWTh8hrdZ67XnfxDdsTPTAT2md4djbFsGD9qvKwavX5n74",
  "key18": "5JhWZJCnMboMT32nyPTc1n6eW8TB6mf7owMHRobeG4YRq1aDy8JaXPMhW7JLRgnNjuavMMWFrjwafkXhMUmo4r7o",
  "key19": "6448qqfMTC5ix2wY9Hzj1hoBmAk6o4i1eLagAs86gcopxzxEysgXYgzyUjs24em6xKsvjGcXXMCtGaXsfp3LaYzT",
  "key20": "9VoGsG1F4XXtrztBa4Eb6JmpKxnphbGzMhi1Tjee4MDBsKvP8p14GhJiCN6pqFND25gJABTR41k2j4Zds7ymNQc",
  "key21": "DfjvRhGKsJX1Bp2P7AP7KC1bJAvrzFPHAodbZTZcLbALMpFp8nY5LknPfBn6XM9ZHgCGMaxHfk3g9K8iF1SXZAf",
  "key22": "3fT7SQtobKfD89nRMgynimkCoWG3tGFpRWk4Q8CZwopFL3UDS2jqePj1YTYD4FiJARa9BFPyWxE8qX62MF3H9du4",
  "key23": "3sumNqqQi4MJKub1nmnYFHCmUC53PjzyeW2ZcHPTLnarZGd4cEt6BWp8p3XepggThbuWkVFjx23ZHQXzE9oenFNa",
  "key24": "xPf4JXUWtMT8crb9kEke6sAsHXosh4novopvPdCVupM87nwfB4EpFuVdBswLeWTd5Yq4trcskKnr7RUTo97RaK8",
  "key25": "2MX6rKVJCK16ihFRqFtw7Y7gvwvJ154sJnqTgvq69mYaWeggtLXnie5P2qYRE2dYdAAb5BDLKzZNNAFwdEwUVX1A",
  "key26": "Ak6TXHSqULBTmzKxbiWATWJ4id2eYX1Qh7SboiJ5CyYXFVegoH91h3A4Gn4gdeuVXtRGXxcFr6rTeNhJXnBtywp",
  "key27": "31HUJpRsyqDjqqMN8ErmFXT1BFg4ZJMzyb6gLvqSDgRC2JUVWHY3gkcH5gyaYbwAtPTGhJBECTuK8mKzjMPidzLT",
  "key28": "d6HBJubeqJY47nFAhe6qKLhPsqjwic3GgtYV8sT1VYxigL67DJAxih3ag41mUZDqqFymnPinA1NxrmsT3AX657J",
  "key29": "4xDcCzSTfsNUbWqH28ePPUn1KMv6RfEdevp9LkSa8WS9P2bTQ5H7vo1Pb5ex6bPauTGrJfsW9nb3KL5aRw2HmAsM",
  "key30": "2iv6ocdwZKq8hKZE3CoJqpedCaELLutDB6W6LyyEwAqGZsUCueXKy2HFAgSvWUxcsrmim9Q6kPDqy714k3ayuMCb",
  "key31": "39dJu9D8syY3EUwgWbHny4UiTXid3YQaVKBztEb3rLoWGQ2gj8uJVUiJMUeHVa7kdFkREK4a8a5guzRPUnfLHsV9",
  "key32": "36jqXTsBxqsd5SYarXNhZUUUjYZusFNNRSrNNEYs9rf6MfAAY542MC3dhcpRK1WnfZNPWvdSLndYXL8pwgXW4cSn",
  "key33": "2qoPkKixCPpW3KPgtRN159AUnPfhiiSJo7qjQ1FxEpZxArkbTvYUBCQ1CZ6f2ghMruhn6qDNhCwhUstoPN5VDJQ9",
  "key34": "3TzFntTMA2ykDPXRrbbdVZvepAbsGZqzrbjJayCCZtWgQ74vhT13jaiKKK2suCVuoUof8TLsdfkUWnJxWV5vnYPt",
  "key35": "56d2MJB2u4gBPQiiMLx1GpN7fuLFo12AfX8gFsXByBqpkoHxUtHY1qeGFrRYbShYpo79eQewciFRb8ErM6Xw8MPX",
  "key36": "616H5BM35DhTT1MptBJ5LiS66ov9RisPSavfgFrizsZq6B1jVXVFB2hqrkhjfHcwF7aau2VMk4BWUN9gC68SwBFi",
  "key37": "NmATvSawVcRgmgQ2n3b95xuwSy5j9YL4jGs8N5SU7owknrHzKq144Ypgd8LAZV3qWRoxeTe5KWF2WLfPj7YEUgr",
  "key38": "jdy5sFTudEwLNpQBE92K3fnsEznEfoEuvfMFXDASAPQp8hDL1im2RCPpLCE69n8jhRx49yCMqjqpW4huCnQiBTJ",
  "key39": "64pPqoHN8dX6ViAf4GKxhHaumgRzZycpdLDmYmmwrv3wzHpjS4Eaf2dfAwZdfSUeKDty8LFrZtU2chsKwfrCDQvn",
  "key40": "5gn4ANeEFHdvRtzuizyCfoRUHEURjbt4mELt4mavLKrsAxqobdG28RjWr8NSh8RUDKAff57AcasApfzxeSe4LD9V",
  "key41": "2gRrqN8cfnwoaMdYjTP8geHZECXq8C62Zuidy8FjEsQGPGRwGTqMVxYkqKPsMGLrv6bM33szUph2cZVokKQtWcLm",
  "key42": "37opBQtzfT7T2C8VKZV1zk6mHw3f71WZHddJntSQfqSHwdDbyAmT7AUNs71QpbRF38CYKkNVsRzhiKQLr5zACAVe",
  "key43": "3g5tCHN3JgMwffdQ69cCkSbYsTqxUpKc7L9hsqGo7sQfrKE6qU4aqN1jUP8eyxyqkZpEtiRrtpkg8A1jGPkG1KaQ",
  "key44": "2DEp3WUQmNcPmzMYk4pG9nRvd2TLfqywQwFBZefNgLqfVpVvfMZaYkrFWBAEP3unoLfTLrUuEeaSpL9XXR8MZHmZ"
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
