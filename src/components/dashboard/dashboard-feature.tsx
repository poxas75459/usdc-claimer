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
    "4fzoLMXgmPgskF9VEdtVwVaMkKx85cvn9udczyn9Do2jhDhrXN7xZB6DmonLQPFxsZgEYFYBi48zcmqoMbp9qBHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26cMAH8FahhV3kjPGNFbKbTMS9dAmLk8qqCjQoLiALck8X7Fgp5pMQwtkrMaWW4yy9LVaRoRDJtRu87CmV9HYUur",
  "key1": "5VmZkSxHe7aeznF8ZQzncyb2BANEfr6bP6qmRyLyXRv5SEmUy61ead5XXgdhaeEGBkoKBkDDqVvF9PnFJ6EGs4Uh",
  "key2": "VvUc9WjDa3fvNP5A739RRuMGFVPdZKnukUcwDnhzLhHkuqGWaB3iwtKgb9wRr52UZA9JeyjxZVEbKkYaVvGB3Ad",
  "key3": "4vubQHwrHu6CJ5KZaDQbY3yJDh7cdHXSDMnpZfsqc3jgcaGMKnXJ7Cq4EcuTKhZzyHXBjEPHXJ9tP5DfSYVBeKNc",
  "key4": "3WDm7udECHJLzv1jc5yjVivvuMq1wBFXvEkQKT95CGErYmK3SdiFfzhmQWsjqJZDF3Z8e3yDfh25WdGEHZKSWhzi",
  "key5": "5FJAgUyu6WyjL5npXq9Uwpo7GK5DpGxX2qpAiNYabpacjnsZNmRaY6zfxm7pVz17PDiP71BuxPiv9NowgmmfLsvH",
  "key6": "3RNmeYFsMmqDcH2MkCqqB1u5FcsKtPdgiJ5imvShcEwwb2dAtE3frVBvCvZqySAJisw9x4J31X9vKKiE3s4ewC3T",
  "key7": "UUsWMGYgfU8dyvFYKwbA7nDJA6mrzgGizzpYMYXo2cwoVBQPtmbykPSC4UsTyp5PXMGEM1pf8DdiSzGVA1WuFT3",
  "key8": "4Z76odHm9UTa3BcvVvUQQRDfc3VMY5EGADTPWyEa7tgU1QzR4Q6kymd48hrEAYTMJyFQ3o6Y5pvNRpTM73r47bd",
  "key9": "3AQf2W3ns2cmb1BdYhWi4pRX8mt8m5w5o3jhhh8F2qMXbqq17TsTiniGPC8LKgnWNDuGqN55MUYK4d8bgYUs1MLs",
  "key10": "hRU2rdEskwepcHJNZvZh2QGGyhVfYLagNdNwBG6GMDQ24Me9VNqKaxTBxntZ3Ki5wu7o48ERLo18uHMJaCB2X2X",
  "key11": "48Y8cxDokHsdHvBeA7XwzsU8qM5zdfdR8jWXo1czvZCs97K12DeSqWxwyBNV2Ut8nxn3Y1hDrbXuS2zz2KCwBxWi",
  "key12": "36PutRDEbcww8N8H89AJV6EETAFMEjQhprhF4FnZmutoVtWRNxiKL2KdzydBH3GyCsvrCdjK3EkRff363D8kw3tP",
  "key13": "4wcWte5pHNasjja574Fbga4ycG2ESLUGc8bhKao68ceFQEQACn3vhUkebhrYZzV96tAizcVuVUpCYGJYbnV8XTvt",
  "key14": "2S4bE4BZDDaKBf6cDmsASXochRypTGZFhrQ7j6jVZAffuSEaNuzP3PABFApbADm11jURib44Wxv4RfZpmeUdTiyt",
  "key15": "5KSiR9WbE7nxfEUGquPiNxn3gFW3fCqiabXrcnKxBLKdxz81GZoSN4twQPbtWGm22Caakj7AX6Kykx2kWHxCw3gi",
  "key16": "5WNVoudL6C99RKMHiezfjbzLrUmzTET27RAnBY9KZM8fKb3odrdNiLXciQrFAdHTgEAMRD5jirqCH26dnNeE7Nmu",
  "key17": "GTeeP2N2c71wASJAzA9cd1ggooQ77UaW8g5d3vrfPCGpVrQa6RbMTznetYjpBrrtxWogeMYVKB7JST3t9gURv2J",
  "key18": "124K1iqKC49mvkFwBgpuWVCkYoqj8omSiGNpoN47w6UG4TCAo3WCynd7d5ynkPdn3cuDzk7BTwYnGoSGYyPnYUaB",
  "key19": "2vKi5pfDwR1NhJ11K5Qs1DivJcrFvHaM2VCV2KYGVwFFicpDvRJAxXdo6aCPW5tMEXneM4M9XiqDGvReD1uiCbdr",
  "key20": "4SuXdrEQP2GGwFq5F9XghHPe9dphf5bwdpgwLF5NoSE48Cu7fZ5UL3Hjugto1v56gBTD95pPN6SrD1i5MdFRWxkp",
  "key21": "j7eTp2Lnv9S73BUeAvT9ssYts6WJLMTa8zmM9X5hTvsWR3A5QzYFhA3cvgGRKSAk2NpB7VFikk11pgFL2FCbKtS",
  "key22": "3ovjC7GXf6foas1ccV3uPc1jEbrfrq9VDL1BszwQpvh3K1hpH7kZJvXqtdofjNgXMUd8wk1fD9H3YnwiPFZRWCfh",
  "key23": "4Gk1Y4n38vYKHknxec8RsiuzsbqzGok7MKkLMsw99wkeRee2EUnvkCQmdTUwhFDfMUUYQDHTohTrrX5pWAsTpYMk",
  "key24": "2BWcqfe5b45L4cMa5X6eaSWMSxtEP4QLZAQ6xbNkuMDDLZBQz5bWsEA1DTSULk6nynjsv7qCBSgeCfm2rDu88Dr5",
  "key25": "38ntoNZmvPpzaego7M4LwHgSrnJ9t9y982978xnQV4bGahEBQGtsUhXRqPMsAZG3PseSWEuVnRsUKNZ5oBcnYf4g",
  "key26": "4KnRuY4xgDcwMgYqx1tFwyVtbAb7oJzrV1mm5AcwmdkGQbHaEyU6npamyLiKG4d9Heq3FhiydnMTDzZGScNWe5aT",
  "key27": "4p7AzQqKqVKogC7jmLq8CK5MVVBLNYykW2hy42Ej2F7VDQCNapZ8znXvhHreyHk5tBXKtmCdYKVaxJxPV929NqaS",
  "key28": "25q3WjP5FWxh97i2Uqf88NgBa6JGQDtoH3GsarhqtTRoqgKcW8cbTeXEuEywaKHomm7azQ1RxvgaHabDbMV8t3jo",
  "key29": "2ddV6qUKRJGKmfgEyk4HWMmqZJKAzCp7zGcQWjrUCY8DmYPZm2D44gVupk3YZJ1Ptmu3TyBeQmZ2SD7gJKgwHvVM",
  "key30": "o1wcy3y8CpSDjFG8q7uCeW4u2FwApgJZBbDXZtbZHAZcGqXNZmXrD5VFZ6bpYuVyqZAC3EN2rPuPiAdtmJNvKKo",
  "key31": "2F9L8A6yLfgSaAQcxqphKhpaRPzBKqXHRpkmi78BPo8DptZXk6V5Mu3q6u5Fqb2Whco75GB4jAszDWn8yse8tcgV",
  "key32": "4SRt3jUEctf3u2auuWwuMZtE2en1GJXPECL2fnVfjbRARJYg5t8RuJAH41TQbQGT4cPrYfghAZC6FyvuQuqoSa6t"
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
