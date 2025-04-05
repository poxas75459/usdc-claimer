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
    "4sKU6yRDovtePqoUuazTPLdK2V3sE9wdZ8iNuYdJWhpvYJjc8viaW3VfP2CHaFVaAdfZH3aPssvQ66vK6fWcGod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pFSY1cwAUAExwKo8ssF6qP2ZjWfxUDdmdcJ7BvM7q7w9HefHxrozRiaM3vAaZyeEnehJ5NM9fsVzM473eKjydXG",
  "key1": "2UevGN2jUhhqc9afZcPiiLMdNSk6G2RoURZXz9TtEP9VwbStu77vW9BEAkKqZrtE49AjmrnohZNN6qKwrA8EidG2",
  "key2": "ytYPtzhdW7BedKf8RGuSDB6BbCVFxNCzd4KPtJh8wKcvQkCLUZ8BDBjnrAHGhZDFtC7vA14nBcUNjsQY7c6pHuR",
  "key3": "npMrKpF44t5zgyT1drcRU3shXv5EvumuymYzLzJfCE4mbz8mo7YTdG1XCkdUm6dJSqbb3mSaNgp8hCU9M5P79mo",
  "key4": "5poiM7MR9YNwcLudcttWdW5obWpj5htrfgmMjF6u6jkZLZa2SWBRMSMDydUtgtvkvhKoTsWozPVruWTYC27wMGix",
  "key5": "5KCjXmntCchtiVKSno2gRxsqbdW6sDCD2MHn858thnfDUuTPfwQzCCzea6E6L1Qmu7DYLgMhC2RmWWkL5VrwKkb2",
  "key6": "54BypU78VrtCjdENQ3avm7hqkHKpaWXjDYRSucxovsa4Ea3wZMmLzxDfcEuZEmyZHVpug8ieNoQCtQdPcWbJdmz4",
  "key7": "2ffH3GV8cFNVV8UuDPdyGDg4tDMogSwxjBXNkfjZB5PAGaWEquAYC4N7XRcoK4eWfAqApENAXVs76wJQ1HWP2u8G",
  "key8": "5m2UpkerQb6kkRgxUjRxJdYT5pyTekY6Y2UKQS3PwKtZaVgPaiFvQ3nPxBiD7c423JKCxLna65MuZ4zdccWeah7B",
  "key9": "cxfN2yjPnDo8CfzWEh36P9Aru1SjqmfCVWGT4ibVvNRjwmSRyxGY9w1jDfxP5EJKno9eXx8ccr7kxqq8ZXjx4Lw",
  "key10": "2TdUqKNpEXSefkxizp99kFvrYy6fEfRBe2a1U5YF5Uj8EuVePRfqL58gzEUPqYCUUWLzY8MXtuRH1gX4zoaKUpCb",
  "key11": "32AGmD7yL16DZ1HQJTbV6qVafrtxBC2HJQgyAQjwFG4wrH3u8XJwkdTPjbDtNtDs1FUKxyj4GnNvkV8eQGqGHSyo",
  "key12": "2tVFUvghUC8Vx8m4vscwzJ31cgzC5ofyvCTEG5Hzu8n29Q7KEugmhW9wfoZQic9fvoZS4ZzASb6ay8XPnDoMHWA3",
  "key13": "2J6mNxYrLsjTyTDFGNehVP22hxj3NCXdEJYciMssiBFesdwvpzYKA4QcJ13d2R2Tf1xHy61ypudbZvpepbzr2SoX",
  "key14": "4QCU52Vm2Uh54zZFtxFmf2EWBftUMWyHZPougDMidW2hM4WGCVJUq8q1qAuouNyQZKsdrMv9RxPnmQbD9tq3gKSD",
  "key15": "y43J41HYhfZaWtSpcu3vWuKAeyrQuhEAnXwaymmX43DkYPbHuZoL3piwRF48MJePcgQNTmsmqVnN6p5c2cNSNnG",
  "key16": "5n2kWWpTEEirSoVPtgvMEGpiAjuhsFyfv7PwpzYXmyZwoJLUXKdYm8wavx1XuGwLjAZtZhDH5mrrZVKJomMFx5HW",
  "key17": "3pESSBekef2HXcuw7B4x51W4r9FjYd1rEvks3vVm2Rwqw2AtpERzRQqZgFx4YKtS9cBmpfLyyxSu3E7oLFxhxDsD",
  "key18": "3z1zSdrH5fpVeVDh6k471N8hve2ZBUCVGKTQArW5C1nsk8w7Nw9UVdskVmBHdXaZXQpEmnsr8NokW3JuJ58sCg9X",
  "key19": "25bEHtrrbWegxfw7kmU9HifGVDgcd7STnpUjDsad7XVEWW7vdEq3wHyYVi265zUNee8YXB1MGSjmc5FmB1W7WkA3",
  "key20": "4KJ6GRd7889dno533dVnc2WdLGE8c4cc2vxtwMoEeDH2Rj4HevvwR6tRoTZoPAf1ZR5SU8QBicDssyPApiomW1ur",
  "key21": "36isRbZom1Qd9hVbF9PKhNw6z1iGmjPGt5bWkdLwUU7XDVAZAxRv32q83kCAd58GULRRbuC4itaFP6YSgzeNnVru",
  "key22": "5ajGf4cuVPigc3PjUJ2887opC8XcyUwtLcSRfA2rWZDvq4Y6h8sFqn49qmJiZFWHtzN81hEuzy86ukTFY1wBic5t",
  "key23": "4QbyyZVfMyqyGgxumrJfaqqX6yY9KEhpsTigLAZZJWYf9Bm1CSD7kpXEDLmD2eX5c9jZJVSvBWrqi2s68PnWyiRw",
  "key24": "2vLEGC1cYW7TyBr7ZkTrHpb2HeHqRSNscGdC6krgXWeFCdAqad3ATtQXa64PBLmAvcyQTMYqxz4kScerKLgUkVo6",
  "key25": "2UuJwrF1YyL5j7c9nHzbFqnaYM6PEASbGUJ3brbZjkXESWPhGZGNxjWvm7V3bGb8Kv35pcC6V8GfKB6EcneRNHZp",
  "key26": "66okLPPHe4xtVus1S5UQjRrdXthNx9oc8FdZj5inGmsRTrjmDR9zxBuvQ1tkqYdvJwSScHqjfmVqJszDN2s3XyUK",
  "key27": "3yCo7C6b3b1pDB9JP7oQL5MmAVrYkTxnkJXMpGfGcw8hWysgquQv3ybF6exzwkWGbUGxZBRCdoYUcEU9gT1X9hJh",
  "key28": "EyW2HcDBzjM3jANtqf9cGvQxZdMLfrRAw1E4KbHhqUvbDx3Faxc4G4tEke4JEzW5F42UpzCrRavBpxZdLDvcGtL",
  "key29": "29SmyCtyEGKrAyT5nQxodsE2DaestZ7NUSwkdzrM958VZouiPYiMyNjZLxBRjabzK578ejq2vcBvVeHM96VaBG4s",
  "key30": "zLFcjZpsV682DeoaidN88TyRmBpfQnw9CtFhqokLLR5acLkcKMyzrYx2DBpxyJ6TcNMR732rF1Mqju26WEumDCk",
  "key31": "234Pqx7WzrZnYZC8VrZPp1EswLBgdP3M13YwSF98Rsg1vJkbRpeNMa8yeCCidghw9kiyi1RK4T5W8E5G1xyZXBnb",
  "key32": "ms2fztLUznjr1Tm2sDgEWzScziAqqvn1bdTK4jm9rL9hftVABAEP22xd6XcaKcRheCPwyYcV93urwKPXVXPZYrh",
  "key33": "5DApq1EdtuWA9ZE8E6LZiQ7bw5FqY23Xk9oTCjGixmrDBT2aqb8urFEerrbCLq97MAAYNpUMXD81EEbn8MbMssMp",
  "key34": "44zq1gntnkvU5cth5ijMp6ciLSgVWHvNRwVMaehMbx8ES5GahFYcFt9HFUFEBiVwJsEFLg59LCssg2nqT2EP7DCM",
  "key35": "2iBoyjnvQj3ZXSYcj8BbSF5DiTbyigCHHNTNKxDox9Esp9tcXgY5j9VAA4c4du83XhWKuEfEMfEtC3atsWTN86DV",
  "key36": "22LzCTvoHCuDixAvki4vq7QNPgxidGbqWsxeapapm6Fa3weNebvXVe5Fo6AkfnXbGvpgPAgYmPfUfdBi69L9FjMN",
  "key37": "4T9QF68jCsoCoy3DztFFi9C1SwJK6cFdjnLXG5bBqBdyNGLTfzrsew5E89HAhp1UYUb9a2qBCyqnBFXahrw7YKGE",
  "key38": "4esK5ZJvKQjxiQ1EJwMg21Xk3aZriipQhqumFxQFm6LMZVqUD1pfpM6XcagJ2QdqZTeW9oQNkqbaLwU7Xc5SB8nc",
  "key39": "3rNDhn4ZXEfe1JPC1HRQQ5u5v5WvYV4TpXQr8WaHWRRXzUH2q5qVgK3ShghMPTA1uzHKtmGoyQdQS81BXb1cgs3X",
  "key40": "798xdja18ba3ZMTCC3PJaRbTXnondFsREM82hLgSH5z7kH3ieEi7JT9UMM452ue3JwMLtooPBjKMAV1e7gUg6WC",
  "key41": "4qPWGVNdmxL98V8g1XisP8vW5bTuU4iqMuTiz2T9ZLCthkHnsxSQyHpCWav6oigLLcNhxk9EhN8cSzWpe8yj17mj",
  "key42": "4Sg55EpsvFjNncMNwj5sSHVnHsK2uaLzJenwkDaEDDsUqgDEbyBhdYJkCDe6YHmRZFFekLvHSzzgQq8LZcimE7cS"
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
