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
    "29Mbbb7Py2xWikrynMjZNBv3GCmR4kKJ6gkCftE1CDH8TYGmE4GDtxhRVjUjFtgq3EZZhWrM4p2AoTAStvvqQB6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QfVwLbfEoxfCjLyCujE76vqLTkbRBpDYwKez6aruoAhoR7iXesaPzdmxWN93vtziMFJ6Ts2gX9xBWGot965Sn8M",
  "key1": "2hFa7sLF7Bp49jo1JnUznmvnaCTtCBdTyn5U1BhP8vE8gbYLemi5Sq6cLQ9SpecYrc592jFsLMLCpBTyr9nxScaW",
  "key2": "3DQm46WB91XrCcrXZSDkZdWFUQESjMEuEJLyxHkjFxKHeQpKHj3ec1ABaE5Er9bBxHZoJzAoT7tvY3cvCiZ3ZNUe",
  "key3": "q7vxsf68pvpxYC3pWYhUvNELmqP6PvdNaHzpEFqAhEQFjuj9VUPvTuKh6fE3Hqv4fq4MgEG4ZLo9a1BUyR9tZmU",
  "key4": "5cTEtTrLT5e5VoFLo6pjwgnb9Gu5Hx1ot8pQcmE1CfdATebBLZvXw9EX47bGCog4AQbnp8micu45jHxaLUYVdL2G",
  "key5": "4nP9Pb5bQ6sSPoTiRtp6pGM5s1a3WVP8ikCNRo2u7FTqELHxszstJztQHsDPbM8TkoPtaRrsH6sdYcDNXs3pNwNr",
  "key6": "5TVfWd7ic9qSgJrW6uLZrq9fu6EB1EQuiVABTSxUJY4cPa3WGUx2ayvMe9jEKFMmDM2dBQb4jcYw6NeEjLdc9LrG",
  "key7": "3MtQpZbdHQnUY2Eu8SjY58s33i2XnywXNWQ2gEgSd8Lu4h4qb8x4ca85Wp54pFLkfNENiVgcxuVkfW9dV1LmUc8o",
  "key8": "PnCv5W8vKDHTYVsZVJr899v1EaXi12CpNSCB6ya4RAqSHkKK7cJDMiZXdJRCRsgj5ghke2wc3ZR7qcJ8YDDnU7d",
  "key9": "evi5ueJ1mUS1XL6dK1EyUoj4f5ZGQ9AsjqK9ymT87TEGB1HgjDmyKiJDJe9BKpeMjV6sqdrmuUfxCGXH9qji4Zu",
  "key10": "58fXiQAZHPMWa5Ps4Pav2JcyZ5LpdJFs9hoLJqHBV4NyxzckpbwvcTzy1arb4AATFZ21qhWfNksKWti6hxQdUtMo",
  "key11": "3oRChfoZCdSQbsMF6A3eZEgRtz8SLEoVJSKw5DhJisUXE6maKTuw21dNcqyAz1RPLd78zHxrZQjL2VYeZrkKtCE7",
  "key12": "4b3NiRauHp5vTs51czcdtYPyXfT1av9zWrTdLk2GYNtEAyAPMYQNipmuNL4EzVLT8kHzo9ZRGnSENeUtpUnDS942",
  "key13": "55huB2v2LYNaAkuo8PL29wriktqxEP7P39TttmKe2FR7A5E14yW9vmE9ZEG84www8Fy98N1Uea2m4keF6gatniuC",
  "key14": "4Dpb3WHjTGCBB5UyjRC5cwmsiPnprEFzSBYmAsjiP8FjHky6rJjPgZVdkLpAPFwSZb9RgTXZLDzg9849hHFDXitg",
  "key15": "3vtmEBVPpkMknVq9TQXJ8MghKPihbd8JYeqAt6SBLPGn8rggGJj6JuLWaTN7E5m4ztg3TZk9fjFHczLBsMbSjAhp",
  "key16": "RKcp1fYktCQBt1c9cJErXwTMHxZhkHwo442dkQ73Ebt6sU1JNcxpk4emxuUWX3AZHNRRdzMH7JGEGrtCC3qXiRj",
  "key17": "5MhAZRLbGVWCLXtj1wkSt4QbW1BFVHU7u6Y5dw5uhXh5w61jrQjEzjzMDCNg8FMWHxDZXKKVdJGTTje5minZAa5T",
  "key18": "cetCghwaeACLd9DPB97DwG3ctQxZ7GdXknYFzegsApE5grxvpVdfvGKHTf2r4eRQbsJxYH3v83m2U656eap8qE6",
  "key19": "2hAt6CmCojT7bNECGdr7R3oyqFk2LcBUg7Jmgp8v128ycr6Z7ukE9NA98gmyLo1adHFqZ9oyDV5GVecwFPJR3ARH",
  "key20": "4LHJf5i9rHxDx6zKRdBFX3p9LBK3ncxBwhUEvQMyWLYgxavtAUERRh5g62C7KWkT8E6DivNNjpQnPJXvSPTT7Egh",
  "key21": "53cGJwZuWLJECeNexSrUSTN8CgRbsKRTovUQ5fp5H3tixUNwJZb22g47xtKJ8nybC1MM3BEcSyEuaKp8BZJja6Cn",
  "key22": "32PkdvwFhA69ZqkTLqCQVbC2VGaV2nKdN7D3A1k5qs26tgGZiVaFLPycGGS5s44ZZST3QSrLLpF8Ty17bRPCL7Av",
  "key23": "a6cQHx28BhAAXmbAFRtWyf9QVnHBcFsVZYicqvsNfRG8htoMCYvNQhFnVrqXSWUb8VDG5PcSSUmZscUkoCWPa1x",
  "key24": "4GydAzBJPvfM829GaUw62VNh2of3zghi32U9oXbsADeUkNG6tnWcBXP3kD7P6XjFGYnRRZVTf8eJsvLBNigYNsPc",
  "key25": "4a8GR3RB6d6oWFGBZmFSN4khRhdAfCepchvZqjwxgSbA2KYDRMEyH5RyyipR8duAZco3U5RyHGiY73GD3i5o2kdr",
  "key26": "3Mqd11XQkJHE9vh4Gd775PDE9tUs1gWLSuUv4VxVtAwErtX1KRb7wK83VDbac15JjiJXSnBaDgcxA7rbU16YiaNX",
  "key27": "5kL63CxWYz98JubWnj2KtX75bD7RUyPBHzZ9NZaVsctybb3ifCDhp7uKE3a5eznY4gcR86cgvMumQB8qm97oQFNU",
  "key28": "Tto41PUWeNp7dJeGNsvTjRBiCrs6RKHGtbCgK58SUYyGfqgekyEoMTiHoexn1wLNmTRQNQMxX1aAS7tfKpDny4V",
  "key29": "25KNwTDn23bhB6AvaQWWcV2FP2hH73xam7EviArQRA4GDz85gn9taxbUt6dQ79cdADjovitewVkwfQx8G6DM3CcE"
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
