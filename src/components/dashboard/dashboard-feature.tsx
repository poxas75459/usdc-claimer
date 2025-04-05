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
    "XCekpQGVgYskB2cohRbHDF3YrovinKWC8uKM3ZeL2nqBHzR8HntBwAuowma1oUweCi9SFQ4d3612BSGuSHYTExf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3riSHTgAffvx6hbuTE26te3ocEEJgL1vqX1Yjct94eiU5NAY3hg7g9wzFZewPnv6g8NwSBuDutdeL2agmXYEVDHq",
  "key1": "MP7Pv6nMAraQmNGkTHoEfYvFNFuTVmMU783SwMkgGQaPzG8kRX8JY1ksWwoAp8LHEEnTWTsPHkAM6Piao21TwPv",
  "key2": "iezgWCB1VSj6wNaUyR5NZZwRE7JxYMCJmWGtUN3CGeg7koayxLcxidTcNxx56DGtgoCkr284i8w45vhQG28fxNx",
  "key3": "HMNiaYE68aMSJWi1eKXRKUSa8uyhe97b7RyizZVYkL7G1qXBiyWjtQnCZTGjzB8JZ3W9vrmAagMwMkCBzngxZzs",
  "key4": "2a71wDCU1W9NfLwZpoNS4SkarV4rbysvWun3FPj18A4vYGgf6HKe14xKM7jbbyu4sYhFQ4TRcqSQCdX72by8rWzZ",
  "key5": "5oEfjBw7tbLKFRjvpXTjbVwuEvtN2MZAy5YPWZ2Lcj473othyicxus7q9Yc8JnrsNHzLwb32BDz5P4ya7wFqP56j",
  "key6": "3wobAL5KZZJVZ6n2uTMveKi8NGbjgizYiAiZSnuWzTmx9bgKWvPjF7niERX4EhJf3aDZQtvh5euwM6Lh1YQHZjts",
  "key7": "imSdBdBHyw2WtzmNa1yB17AamZ6cBQiKnoVRH3LNwVxJgDUo2XZdaa5dpYf6JUXCHbgvo9iquTe7UuzCH5WXjUK",
  "key8": "wCeUfdJW1D8BScxJ4arN17DZwaMi4Pe9BfnFbFQGYK3rZMPD2DuimJXjgMvC8w9SGkRMXvCMnJkYJFtczov3xFF",
  "key9": "4EVxruujtnUdJEsuPKDfivEESKb38SbE14Hs4HM4DCd6JnWqnLpvkuvnQeJBbGZ96PwGBaHEBjsLxTG53JrZZhPw",
  "key10": "37JX78HDrtTGG74BELRg4PcfS6JL81djjSLrVWMh6XT1dtvz9iAAYmMsvpy5FsKpoBjA1GhJfyfeDdr6RQetiydF",
  "key11": "4EUM1LnstrBVhH116bAaDgbpgzE6SuQhZqPg6kNFeMBUJjyn5HXheDcpxiAHivE49e6LwqQfhSZiRwqnAGjB83ih",
  "key12": "2aHE1mEYnguqzFkuJkEB4RSet2ZBifURax7KCc5AmvsUPZzCxXBZ1KTgUM9FKStTXiwKeJuFmUPKsK6cKVaDUD3L",
  "key13": "4Qzmcin3wJjkN9d8vrusoRd16HUizbAf8tpTg8vMfSK5bnx9a5tpokZLr2ns3Z7E4nc6c3aBdaNp2kgJZRi2xmGS",
  "key14": "23ELGGH35HNficYkwYr7AEH8ss6dHgHktzh6o3cdmmf8C1VsSe4unG5No4XoqitLVznRTDxRYcqiSZKFvokKSvgs",
  "key15": "2UMoXngv2fiL8PCGmDCGApFBs2ECJCe4e7ZtUmWTWZor3gvTzYU7QWskUABM18eYeGhPmoPdnQ9kTJPTaJ9EfEV5",
  "key16": "2uj6DTBtDPCyXfCaM8Yb7FytMUD6wQCtifksRzCSRKtVimkiFK3pmfYkyMEsSmaztBZkT8rj2yxvVbf2r4hQUX4F",
  "key17": "37ccDmPsGFf49TxgzANc5kkuYw4DvFqbc9JQkwGJqGUkYm4TLJNA32kBZwZfBRp512s6qJeNGoCnpW3zazoMvgug",
  "key18": "5SzGuCgtdyepdqtZkRYZMiH3BCzrQPy5hEXh4hvcPAfYf1farJKKkjraxQxSXty96ZtLfVicm79eX4A8HNhcv6xg",
  "key19": "Zqbn5ipSLahmqwxqH2Qct5RuKJEuizQ4iGWe4HtSJHZM1V7UREo32kDeFtnAXASBuNznm4TEBbuEWmvtL76fTds",
  "key20": "5ZUf7wEfLBqRoVfbxnDKp6hVTEZYWqV7huUDj24rAJzhN1DWTXn9KisvLapkeJsdpxquX56aGWHmapbz6phgmwx9",
  "key21": "242nNQ9jgqHAHacigV629vyrVzvdjGPYBqsFfjwpXohyw17ULcmyVg75Pj2ZJoVo7Q3bEXuj2fWRfPdCAnwuZCaK",
  "key22": "VfxiaoyERduYCWaiUDJBkuLQKkauX5EjXiruxZepU97WvUFRLvs2nkQoUncLttBbM1T6AgGTgrW2wBNAFag5wtm",
  "key23": "2SZ23q7PzdHs9wJV1kvqy7Ntj1mBRMyT3BEjKQw7gqryiuMrwLjtyFxbE7XDuzTqc5WT8yCaE38VSKdh7dcRFM48",
  "key24": "3g3D5KRDAU3moVTeTZQfBhRDvd2ZCZzKjeK8t8vpRqXtTDrrX6cabSuYAqnNvK4c2Wa1nUKBo32SkmyWq3M7L6cV",
  "key25": "5kakUNWLcDgtwYoA1qJyx4M9RHTXL6rBhULTDTULQNXsdYCABFDpYB6qn6EEFMwLdEpQhCqjTuNwC3cQMwa7jXmQ"
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
