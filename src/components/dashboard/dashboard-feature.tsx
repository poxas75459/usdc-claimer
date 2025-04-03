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
    "2QdPY3uo9QyPUb1D1WG3oHuuZZnE8oCjAynaowjP9VkU9SpnyGw31bN6sKrJYC5deojjr6fYoFQazYmVw8PiwSma"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29YRuaC5VsvojqcFhPmVamoeWTHUhYv2R8Gw8XBot9pgQpjcGSNjCBC7hug56qHukkkJVL9LcG9t8pthmRuxrcxp",
  "key1": "4F7jajoBrdwteL2gctdNMi4rYdbL1Cj1xFuqktSgMxuN2vvHTTTH9kRV5RMmciHn1kwFaUutuw5BZwFpyjfgi3fZ",
  "key2": "2KHndgFZ4rB8SBAh2yFkcsi8tX6wAXttR3SRcC8ipN9YqbmaUdsfBX6EzyfSTtUPxBrQa9VdeU1znYKnzV8tjX4K",
  "key3": "Mvgt7DKZnnZrmk76b68vtKAefPA2txPupMdyibYnZwBKeEFtbAE9ydUtUGffTsmox61ajX85kfFVzeT9QVezhUL",
  "key4": "5wqM6tdY9xaqi7ytBWZFxieGzwPMcUpuAr2aTNWpt8eHb7A5pt97Sj8Sp2c5pK8UWYbUYdtdwWw7jGxGVkc6Vdh",
  "key5": "5SnWqRjCoUU96tmR13h4PQUanRGRrsLXZpDEGSPkvejRZ6LC93VL6qpMumRmAD9qRqDBiZYDma7mRXsEf1TNuZmc",
  "key6": "ANoBhh2YET9rjvg2xjDB39z6L4Zz4GeiFyddEce3Le775GGGvvnZmwWK2JfuwaAoTz88RvnTv1B8Wg3E7iQT3DM",
  "key7": "5azfMZRsGWBQdSvmxmkF5LqSvJ3U2zMHtk1tUMeiDuyhtcJZWx5cQwtFQkL6ZgC6hcZ1J4tFs71XUfg27N52mZ3i",
  "key8": "4qZdmwgYnjgNBg49tyrXVNoTAMkHdvMEnwV7LzkgCSTixwxAq3qWyaLDsPtVA5qtAZGcGVF6LsXAELUB1Xj2qow5",
  "key9": "3AxsnULwPFGeMpNAfXgDUAcdt3DQhLxhRnCkkHkqrE8UqwHJZGX8NqBUWBaESHwrhyVSdCfzMATBSV1DH6gVpny6",
  "key10": "5CsX4gXHKyr4QkdaXNb3Xfk9oNRc44b6aAeAHR5SmYMWhUPhom38jEBL7kHUPcVwqfQ3HetXrgTXhRydJtFSa8D9",
  "key11": "33RnAf7Qyudjiru6F7sXUdExt6L9DZh7wkVQBzAyFHXacyjX8yu3fqbPn1hJ57M7JhkRacpCRCg6L8XHsq8ByChG",
  "key12": "22AEmhNKdifDaxn3WMFBotLEmBxTTXgBqm4VaEMSRDN5X6wLPqeRZ8uH7KHxquUaje9wxoBMu99GMNTi8WgPfikQ",
  "key13": "5CUd8QZdAZTLFXsztJ8FDQkDRfotWcFeuFQqLYns34KNdvtjNnveQKyEg2oWSpJgBMJmkrcZ9qR64NbvbhTCd8am",
  "key14": "9udMPCM2oNKTngTiVSfNc5LAejAgB5f4KjJRU58u3guyH4xvmN4CVcz41fmEwBdAbNyyVfA7irsktcFBjJnSg6j",
  "key15": "4kPUPkkCpJ4eqViMZd9MnAiwQu8Rr2FQzioF52dxrNnYHaxaitd9bUzDfkvTK8barWBiAjHFbY4wgfARVxWr77wQ",
  "key16": "51JYFM1ECVJNQ82pFSywvKBtkE8NvR3fkrxqdeJQuCZC9BPEwJCPuqo1EkHa6YnVbnyik25fChc4NfcrefXSwbJk",
  "key17": "5PtqQJVzAB3yq5qLKyvDMCWA7nkMmPRBZc5Uw4RXwCabto7CpPTvHBiRphYczyYxtxp6vnyNAeF42k7o5Sme4DVr",
  "key18": "4pmsa1MBCkhDFkU3TpuXpMGYsKeEhs2iYmHMPgzn9m9wZRFDJByRWkTFw9J6Cn856BRS6qRe1MvVbERNzujCkj8o",
  "key19": "34j4aAMrtPX9voW9w4SLV8mtbEobarRTvWoZasxJXMv6JRM99v4ynaeBKK93D6MxYzbwxCte3VodccDcHUQFBP4k",
  "key20": "3MxHFhcRka249pGRAMQCDB8yQToySXJCtDpmvsNTQbSSJEb1zm47m3ViHq3UnyTnKqoDar8PjbNEdAwofA2WNPKA",
  "key21": "NeabHuXY7SEBfnJ3F2EXNuh23veNhNK9CT1ZcssMJWNc3zHEihSXnLB7PVVY9FR3U81b1E4hj9BYvhrfEq8K8Vb",
  "key22": "5EE2z3dyzYHZGnHf1hBdaUGD6JZMcm9tqXpPYfg2MdYoovCNpx3r3qVn5ccWRUZK21uEjN5jFbgQQdLdVxDZfTZv",
  "key23": "4XY7rHTW8teQ1WmMZCV72QQ1m9SsxxvafgLQHhv2foDpt91sbdhVLiwUqLemhQvhfeLFEbAccK5667eJP13xDwcG",
  "key24": "3SpGjTp8dcx1imNzhsg7eBKN3JVfkFfGBxvGcSAoxk9NyfVcVNf8gowL9Xp64cmvFc3si9BPStZHowTDtv3NMjxW",
  "key25": "2N1gEakkPSiH4Fhd1HfLFboSvNVMgX3mbR1k4ES91zT7JV2xCLeWTdujffajawnwGMTrkHVUDsdcLupkV9j8wy7M",
  "key26": "2PJy6jXimrEexo8zweQCNcwq3ZPF6Ue1b7F4hnb1r9G56uTtVj5KvJjxunXGtfYfwUjQ5ZxuqAkUNbbP3GBRFFNh",
  "key27": "2rwvFvASpXDoKjfv7U9EGB7B8snQPhCkRogPfcbHTbhEuCCdkYCDSA5RV3GwNwWfrfjQqSsCnQTautf19GDYDTWQ",
  "key28": "4wCruPhP8rT9o3uCtcmRcA75xFGCUDc4zWf1a1NMcLm4wcJuTxNy7eLG4636gG4u1FmfEYNwzjW8LNbdJnajuoQM",
  "key29": "CKG43d1FNuqnGYEurFxmpU4UzsgnVXja2aRavqCw4uA8REWbvm7vUdZar94BpuL1DTnMTqV3JnRT89FQSeM3kRw"
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
