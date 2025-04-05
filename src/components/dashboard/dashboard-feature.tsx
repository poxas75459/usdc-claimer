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
    "q5i54xiRmuavmrFMjapDA9EsApjZ8oTG37qQP38GrBNpL8YRN7g5GfDPBpHRF9a9FmVsQezn5UTRtEGEaFDUmPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsnBUGA3E4L1syV1ue5XoaPCSRYjyCpMYnEV3rkuWfbPxEstbTsEJ2iZZE1imbEYwEwcTzmDBjCY56vZCPVdohf",
  "key1": "2oS3Q1cmnnAURxa1FRbF7r27m4EYBoF2VJbZwkqCBziF9mVTXTiKSQdbUNzmKS5B4Qbi1pSJQKjUjYthTBS9WbpB",
  "key2": "5L9gbPWjBiZ6ynYyCW64ShEwesGyzPb4s9y8cBuEL4UGLENNVGVPTwadE95MVcyMrzogX3HZSq8kB4ud3stMHLmt",
  "key3": "8qAQKu5gK4oJtAHuX4C2D5B3kfsMfrAJbWBnwxojEqvDE1FJdJzg6nEaiT8piGcw5VcQAhwSeKxcwHXAbZijKRr",
  "key4": "2yC48CwQDfyk8LJ4ZYG3o8weMkL47FyPMkcJpiw1FQTtkmqDLYCfaX68ke2moZXjzsR9y5CqTeSWV6ccu3Kh5Wqm",
  "key5": "32juHwZfen1aEnEoLPZh3iRHEELmCW4LFCLS6ZpzcjtNW8qmbEfqgYM77Q3EoEvANxvVkTHovF7MrWXPN9Z4upRt",
  "key6": "4878E9vccSkaGj3AiQsqrN84H7n7NANTypsbP6aWXQYxqu3ZAhGUzeLwVPLNNEgGVB2dJdmEX2fbkRBwjCCnKkbB",
  "key7": "2uBQ7rHTTkd7PoNB8ALkbiVFpsuETBsQbcR3NRE9s2UjLV7koh4RMUxeHSR7FSzMjJGMAueTBU8vMEoDos7MA1Cx",
  "key8": "p9rkLrfsCgokE3VxuwsXQabtuAvJ3UhLCavWk4sLMv9aFaDW2aBw5JPzG2EWP7jTz7XKADXPSMAkhuJAgREqfGs",
  "key9": "4xWCfFisL612Ce1ykEXRgw6t64rZ361xa3kVHAiehhHc8E6TknSXtxYt8pBmCPHYgHcBk2LwypUWUqerFsPtw1d8",
  "key10": "2Fh44MR74B1J2JTbupZ8BqVEbjxh5wAJiotHKV6iEvZQ9eEX2jMsoj1DUimBk2zh7qAqWWCH6NSo6GMhaxmLNEoj",
  "key11": "3kLGLvbow6nLXGb4Kk7pntMRtBNerQe5chJs3jLcPe1YRXGFRQgSxn69hpBFVWkXarHTwT6LJ6CYH1PWYGfnTfWo",
  "key12": "2FghttBndmfdDiT4JUFKBwxxpkE5TEXT75TcYLuY3LMNh5mkNTpFhJAYjCoMEPyAk8WFkKvPzNFb8FcUiKvrbAni",
  "key13": "5Qv4d2uihW5x2s4sm2geoSAiFoD12Np44T5TRKah4wGPhDvxERTBjwTixcTvGfMyWe9gutVNQHeiGW4brVy68jiK",
  "key14": "1PyZ2u5uH42Gcofis8wT8bw84Nbw2So4FL3WyeAExS3vMP9v9xHP6Z22cbYuGayJbzwa15HtrZ7WCxNZK52XEy4",
  "key15": "5KvVNtZ4HhzkzCvrDet1VAVYGpi7Nfj9KrBj5hu5emvPndfQyFvTiFDBh4v4Ttia3pqEbiipTdcdnQytckkod7g",
  "key16": "ysZquSLdmApgYt9B9VjbUZoq67ARb6coNPBpDk6LEQbz6iuyoH7X4cv8keNGtW7DtyEJYJjK89uBUWpMSMRX8Dz",
  "key17": "25Z4iThPmdQwhS1K3Li933CgoX4cH7hKudV8xfTP9Ak4YaEcoSSdYSZL7fg3N7sr1XzRf1QsRFn22Ecm9dFdJ3jv",
  "key18": "4yd6o842BeGBdEhzEHHdKhmBnu4o2QTgurDoL7e8RPRC8JrBVvqcajPUKcvw84Q8bkeNKgYExDo5xy2rGwS6fTDo",
  "key19": "2R7JUmcPQZFnQeQ8NgzQo6TzDU8zNgDEepNU8VGGdcFRfipddz2xAXFKbM4uKtQfJevmsqGHmfMoC7osPoPxr2B8",
  "key20": "3ca2rqbJ2UXahukSKaijo3ve6FD7hvV9dhefQCx7tBC8KDT1AFUZfeat14aCsFerQEswDkkp6wymNPfkgBsEnSxq",
  "key21": "4jW7g3xbQa9oroLqdd8Hw68VDr65kgxEeeEQF9PCTcvQJNz1icETjPwm72EHFBFjoDeeU7ydtVwZva97vbd92Su7",
  "key22": "2iMuDd3zN8sZ9CTUfa7hnFvXAdHaeS7YYYfUK2h4vi2Nmbd8JUavF3sU6uLnd245x78A89fkAcSqspSk76yzauPq",
  "key23": "2khg4VCud7kFjcwmq216PuNvUihVxsRMswZujNVNhd9YGJCNawWnphobfcxezi8518TD1xWPADmjV6PJ2ejt742o",
  "key24": "4DdVDU2CULjQipsF5zj7mKtZ93vB1Eih68NNPxRPmeZ9Sj2vrxVv5iT1sLb3TZ7LVZMGrGgsYGDyvH5nvsT2YbHq"
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
