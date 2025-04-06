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
    "5f8KXTKqc5Jos1YxeZvqTtxyCLgdWNke4Fb9cjXnsqiudyPsqS7BMsf3Pn5uD6tNtxszuBrm78a1unattq39BGmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zntuaaXTSSAKb9PPyUbhXxY78MEWfYMob2gqgxZLcNew6WvVexZ3SSCMMw2cPtAVKYqyQgvX5veivTuRZau49Pc",
  "key1": "5iW9JjW3jeDmPmFzkhWgssrkDNfrsv2458AAbGGEx9f6N6N7BX2jvMiRv9ATfm3pmeAKrFQ4HV85V9tXBKcDXz6s",
  "key2": "5vzk2Gw4XGSbspU82kE9NXXzCMuRBSaJxebT8YHhHjTaELh2YxCeLEuUa742yAHUuUvjZmxTSe4Y5gqxjKZYSRrp",
  "key3": "oNUXmtPGsftKQmqBg12xdtfxBMmq7DXUHo7ZkWdbQjc6QC3nNgEUmZyVw59A5ZNEGx8Hd2uJBS5TZBt86kvgzUU",
  "key4": "fJH9mLJXNm3cEQyFdriNMPzcwaWNohpoUZoM6xJsnLb2cuLJmrAd2xLS9MJ8khFJJJoSuFxbwx7bHNQR6gKXJwY",
  "key5": "4UETPwdPR8KXmAWRGY9zvHLRfnryXZBStPyYzAdPwro1S4avKLRfrFjDQuRXLaRuJjHBqavbqrBzPE13Je96NM8M",
  "key6": "2LLNX9qy7w7Sj22EZCeTghkBi2pbn2M5Co8K3gxpywJF6bZwucjq4Eqc9BNzocyK5zARVnX3waVN2Fa2m3fiGGKF",
  "key7": "4817heaRfecGdXSXuixNDmyJwVGcxDfxbcQmvwqbXGePqwL5B4ypD4LqCmrqjgP1ke35Q6a4LiMxc6hdnMVVf3Yi",
  "key8": "eLJCMMA7oK2DG7dpj6h1rJ1QHiKofekmJaxJDLsiup4Vk83gnhnM9C8gf1aa7MAcvCwdGHBVvyYzqE72BWyVHf8",
  "key9": "5ZZtvFdsKzhpzTKo3EktBecPnzgVzQfATwUDE8hZfH426ZhiTQAck6BfAbdkYCwaw77ratEwGpo4BcbFUTEJhXZB",
  "key10": "4AHwa99gmNEQnAo88VdbNcgJCXeQREMaMYHjP1iZaPWhbmrdSJ31b34Yb8fsav8xRb6BaXivHzCNZzbE6Rku7oUE",
  "key11": "2e5Rd3L7SQjA9T874FcsNF68TDjsbts2urSot8DMMP3eKBaNfbHAJPuWEQ8ak5UBPVUL6er4kuFDWaUZEfiMyNKH",
  "key12": "4RmNZTmVipqj6hk5f675gpEu2tUFTW7r8PNi2t3pvysaPjLiDf3u2GjJF27BvuSht6ZMjwDS7qxPiyHuPy4LZPcV",
  "key13": "3zW49rqpjXydvuXQC437ZwNsKvbFE1tpymoBZqKTBWk9uJMSuh71Yd7feYy2eh216cWAxiP7ga4bvkwaWTfnUaZ8",
  "key14": "41bZSRuzADXE6TEbqdQuVrb81UySXudMtvTsHQLdZfxEvAtaseq5sYu7Q3N4NDNPtgYdBiFJkTDfnd5PEexaBYiG",
  "key15": "5SK6qDHNcJyCCJZTFazd8wuqvJC6SLL1C26fkiS1ucF3A1DAX5bs1gRUcgy2oPaHzwM5rVep396xzaS5CX7V8Hmn",
  "key16": "CE6dLKgHbCKiB9BLCzrb2krsgScdx1dPoEus675iUFuGykiTQCNcgQvWHyMooDkt4mmmPWq7Wpvoq8HJxFC9dGy",
  "key17": "JYepobZpvy1dexTms9aXKicxoBTutMoXV86U5FBdXj5tgHa8aj7NFGrpd1rkBQqnmWJVMjHjgfK7eXTMoCJroCn",
  "key18": "3LSczja4KiByFR6tXw8p4WRfCFcAM9xmNKVGz4djhkkvvssodi2SRC6tCku5wKEThkaEJwgeAfu3ogVaUr8JC8MM",
  "key19": "2stLEcZcAhYohHhcM61ng7uEAik5PG1xczp8xrwt7fSaq96po37TZ9iiZGo5mhTue4d4FJnVj5947u7Qyjbv9fXF",
  "key20": "zbCsyCtBaqvKVWdPvMQbEoKe7qRdi8t8FhjXqRnomUNBoWp5ebJB1CNfuM6b5Q3atyNLkN6h277m9eVpeYJw4Tj",
  "key21": "525s2QjZfXQBeSFvi2Ly88C5NQayr8PnQWQqTn7GnGEkxGN9HRLTLEdxC5bFASRX8GDVmCKpD6cnyM7snn8DPyNK",
  "key22": "5cczZhH6fZvERe9oU3oYHg9pHQCUGoxWdBMtL2ffgZn8gTLbcVKGCsny8twfVJ92n6nkjhC4xrSX3CXgZKVB3Ztq",
  "key23": "7yBuLACoBQmsF6A6yh6GrkWD8CeGptZR6kyYB2EUWFgFz83oiG5ejtog3Nk7qKHAe9n5pZtCdTkJkSHt1fUKPYg",
  "key24": "UDEmg45jKxnpKSTm5TX6PPVUMGt2B8uGn3mHdnFJ87pA5kzyaEVAUJszVjDNsmeZBsmkkgJkTFLdAo2DRA1u5zK",
  "key25": "2CeuDCdf679Vtn224LsgpwpCX5kyubRjdn2CTsUUY7LjHv3Xm4aNMgxM1xu9ekuMsEGVgLJ37hEKzB2svyt3gMRg",
  "key26": "45CTvZ7oEQczVXEcTc2WD3ZMCQxrJgJx5rz7RneD4k1nng4Sd5749eGSExNhbVvoyzjSbmwNHoQHHdY6KrAYyFkF",
  "key27": "2dGEm2mtDmPKb8gxTYTxWzWLzcaToJCZtuhRwHBf4NDHwCn8T3Ya3y8FWvitDbj1U7Topq7ZoRZRvV8tfW7edAXR"
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
