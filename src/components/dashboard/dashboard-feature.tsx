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
    "2SGBijga3oLLdv3SZwUwRwDiDTxUoo3VwpS9zefY4pTJzSnTWGSkhofq75J9KK2seFfvHKeZpjMRfcwyR1Jd4beQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PEraJSJLxgFZknqVg3RCYjV3aumeHqM4mStp2vMnx1qVptXejEGtoRk2TEbpcA1X6syim5M13C6qtmqKtrboB9Z",
  "key1": "2dD6atHaaJNZJa5hJcqKZrCrB3jdx7Me7L2b4t9Kr1sWX1fxh7pSWBZpqVyyvfxASPzaV5wxFSdS1Xa3SWgLust7",
  "key2": "Mg4U3Sz1zdBZQjwtES3t78CbBDbKiJwqNrnzguM8qDi5JUuJef5Wst21Fb8ZaTW7etywLhgBf6vwyCmz9CSBEWF",
  "key3": "4HDkvPcmfJh4Xfrr8h9HKeaFgzzd6nwE7mcDWqbDo6ChNmH5mDmqz84SQJRahT67SQ2n3ouebhNBpyY7qrYgxt9o",
  "key4": "4bWa7CvLbx71Fyez7SbUK85j2TUJi3fNBboZyd9eAgBRkZeLpArykVtc7bpMgMjhNciGMRbPMzCviCBwd2WqFoGa",
  "key5": "GzVTXExK3ctHiv4wut9NDXD6UqGA1KXk8gphixnTyxdhyWPatzVTytSGuqFEmbLDJ8pkCaZDrdPm8GeGGp6j19X",
  "key6": "TBgaHhkC8APWTsogrzzjHwwYxsYUYwh1hEzpFdgK9Bcyu5QMLygBdvAwSePX3RCprpc8cDQCnJSy4cjo8sJcvRW",
  "key7": "3F3vrrymJhKd8KPzLJJSeZWqVfosZC8Z3N778FQLTC2FryYD2eNqSoyisY3p1Cz2MXp6srSVp8yp583BYrseuqVz",
  "key8": "5VsAHwzSb77ZVZtDj5Hu1BKqqMewgXJpmntkSy2j5ngynToKmEWEWWX9dzs8hV549B6xxqAQdjSkuorYCjqMwwK3",
  "key9": "4RW3GNNZdn1poT39RqNwMge4DQ3vsXer5xvmdD9zqCEE3cGHQF7aSTo9yondQoxf4ao1acSdSwzyfcfHsmJfg7fU",
  "key10": "PgqRADQmGXCoyKZ7NRMHeX4xynBV4vRsd7vHsZZUPcj4T3YZFPZ4AsRxvcrN2S2XZswHfK69nuVMFe19XtGVjRn",
  "key11": "5dkFAwXZJH5pz7wMhZ3PpCrwuCmX33RPJhoWpmJXrr3E3JxUDG7wpTU8BPTBkDXuzmjWaAxZHcr8djTLGNh8cj2k",
  "key12": "3g9xAjm67LP147YVU3YxvJ38HLHb5bAMHYGvZSpu2daKJ62XK9wHbzE8Qtw7DUDeEAeQ4pZ3qmFnHKRteSxL1dcf",
  "key13": "4RsUYTHETnQHAZ2ZGg3urt8bJJ9iRWBtZMS5UKSapGYZdxtiC7YthzGXVcU53u8M5qKNzBztYA7amQ46VG4uwzdU",
  "key14": "2L2vBQpuCeag5c1inwVE6atSMGJFjoU88AqmJX3dkrD6EzC9SdptetNCKCopR8umjhiCagaGrXywiP6db6aU4LbK",
  "key15": "2CFgchEtdNhwt86LEh7yza2DJwoPhbii6418KqdnJuu8kK6wAGddw51BqyWVyteNnEqQqghTj92m4Xxyjz5pzEgG",
  "key16": "2BTcJtWUwghRULmmFCoUS5ArjZbLCHV7p8jWQpNAEwxvNpR2GyzP8Quu4YDHRoM99gtdBNYhkSBjW4EMjCJxr5wY",
  "key17": "3A6k2QmrjCXQnRDKBDS9VAZM6ViKRxf8dJQT9EkVmnvD5B5jhch1nHSxcj4huqHsK2ZppYrJ32rwaztznyXJnwGJ",
  "key18": "29eacanqESLCPu36ebYmYGV45SQeZakHtdGqX3utj9mRFu611Ni5cVxFr4Tswdt3R32ifLcTMnKMcwLS1Eg5ELzc",
  "key19": "3DPP1RzD7bJj2Qg5j6nch8Yt87VRBwPaUY8ms3SNzDNkTevG6DnenD4xbkSneRen5MrLqtKj6zYNdxkfjRBUNss2",
  "key20": "3FgEE7FpkBNF8XkRPsFv2EE7ffULhp5rxPQanLNy1MFdNdXPWF1JbqtWgR2Z9bcyDEh6MeT6gr5vKETGATi1ANws",
  "key21": "2d84rrRovg9s54ZbMrSkM37uFFdQ35voQpGi9UoXB3sVL7KjAEnmxf4KH5uBkNsqPkutoJ6YdQArpsNNLME6P2th",
  "key22": "25gp63SPPGvvkS3cRjeZ1TLsEtCEXiStcZvFwb3f5C6wJbA7qYA3R15yhJeSHdfkk8tFRZkCzqg7tApTCjGZzxug",
  "key23": "2DHWRSCsWaf361K9hv23M5qcXTNmhW7yToF6KYqugM1WXYopwNGp1UV2Z4P4X2dCmSo1PU5HFa9iAVf8LzwwNngd",
  "key24": "2CmSpw8VTcc7mWSyRXqoWMnPCNCWCf9EUZj2PP1X3jVxuDV2mdUowKDtoiCjP1J8gM1XySbFTTSKNwQ6wFAt1cVE",
  "key25": "5MKh1WJKLQhpCsyabW2zSBvqaDHFvk1w3W8ssZLFxaEgBhLPwZEzyHsqPCi5uQfvxzaiTWt5vDyTZgCWYcJCBbyU",
  "key26": "dUdnZNPotKAzJkSJg99v9XzmdB71jLtcKxa4DhVapdE3xE4yGwcwRGB4SiDMUSMZuQZQhA1LNhrEy41pLrs97uC",
  "key27": "3rwjNb1PeYEw68ujUiSwtRD2UvcyCMvPTWWUWBqdnCySjxLv2yDqPBJPUih9EaBHpLwg1Ma4GtPQJ7AVRJh616J1"
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
