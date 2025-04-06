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
    "5Dn23pg735qC6SBwDx9kustqtMjx7WkSTeD1XWKk6joYnd78dyY7Wu5ur2RvkcGz1R9BkmLPRpR8xTqrXiLRHj3M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43ZsaS2ybBYw49kmCMB3TaCvqxr9vRwzAUAheHv2WS1eiUuhuPu2X77SeGj1wfVzHp5NuPAFKEW7opz1M3EPrdgV",
  "key1": "4TZvwzf3iuJbLE2sehzusdKQnKZ6EvVUz2Re4ZBEpitAZRKKXV2LkbzF5fdU1yLGi8bYRZAZpaiuanA79FJrbPDH",
  "key2": "3gXvgf6PjTqWeSMik5oDAJjdX7k31iLD4CKGhLEDDnmcJDFDuV12apZvksYUPRe9DxeUG3i59GuQwk4W1AoozcVY",
  "key3": "21EZWHJBz3ZRKYNkZkUbdeseUxuHRwzyXMD9KXPDevPD9wrF97BCpVuFXgZj6r61hSjsgGrk5j1PLhv14uxUkTvn",
  "key4": "m1e5vMhZMDm6E2Qxaee4J96uSVr7WcpwdPRNTFRJwU9BZT1Ep6g2spe543JmjucYixk7UhYhQfw9BjYdkAdMx61",
  "key5": "5qqbDKWUJRAYEV9SDxCaSp4EnpSyqkkxqFRrPBoT7cmaJTLzmFcVbD3fubdGEMdiyanJs5u3nKhvAmmHkLkBMDvf",
  "key6": "38rX3ziH7iwhA9UKBmtSFznmqPdAnWjSiCzD5B4YLeS31aAgpJpxyDX6WnqGtUkR9S5YeKLo7Tw5RuJGfg8VbWNq",
  "key7": "5uejHaqJGm3XDwJvc1Mdt8UNnE1ty5rMegmerruzQPdrTa36L2ts6BDzRghMmyDtPgM9bB9QhADV1aa3UAU1Fsiz",
  "key8": "3txEWvvGNRgXZdt4Cgp5k6fqwoTKw1533U193U19XPoN1atnU9zJDgiZW1NWkReHBGzZcWXL79vZ279hKcjsLvu7",
  "key9": "28PWTmSbqBxZzQwbjWaScBn6jN8g923k68JeCi8v1KyBpEas6e9HhVJXrkj9qW2uyzitjE3VEZjMuPAh6ASEVS15",
  "key10": "63wbyy6Turc4Rmd6ZEZnwUShLan9q6rwJGB21Svri3LDKh9zLxMbMyqo2mJmUuuPpXdC5DeuQv3AqMFSWirENHyF",
  "key11": "2GAqmwKKTCNiAxc3AhtspkuFa4Ton8yx2EvaXohLaXgCocN1HdZPJSwLfpn9TnuiS1Ky5VxZoU8GeciHYsPjUwND",
  "key12": "4KARQr4eki7TvY5sxa9FdE1WcLRgd73HvFpSW5cD6aJaj3VEVdVcmJjwVv8jz5ESibJEXCH3TrtKH29aSzfF7GkB",
  "key13": "5F5mGzRqBjaPawQK9az1zHMBgm67sDMjWBu5Pm4bhwXGryTm7uivp7ZekFRszXE5Z7mZsTBZLPpJG4qMoELFqkAw",
  "key14": "5p2FxpHMCmfrUg5531i4jjAXPzVy24gyG271PGoow1BPLk2DuZBN3BA2PaRPV73TwtxyyWKEbs19J316d2zAYKCo",
  "key15": "42x3oq3b3p7wSVRpdkqZHdcBkhLugBEf17ZDLBWKc2iCSJEHKVhnBnfAChKVuTyYMeaHkh2sAwRhhABhpA8PXP8f",
  "key16": "4e95g5gUp7tv4Yq4Pt3CTobu5ovbcreAvJKNykZV9xqe9HfpANMez1EG5mcu3BEfGwz5K6GREuxpho9oExHmzmSi",
  "key17": "59ui72uSsxs2Ae3T1kXvPz1PG5Kq6DpvHuQcNZyMyaqM1nY8tebT8JsGEtgfPtAd73UroRroXMxZoR2kSSgVM38m",
  "key18": "2Npo9JTGwCsPfsd8S2nAFXuDhaRSZwCcqQkcJ6aVHi2gz1zFVQYKyG51jy5yrLoEspKiBfDgCDqRNukLWd6JJk6C",
  "key19": "5PFiWLqgE4BrVgMXMGwQ69B11iMvqVfdaU1c4DCDuCTjnEBuXy5dCXdfqLzvrHSpUZ9ksCcFwtNbvqDdKTd7SuXj",
  "key20": "4HuRF29wckR7oviZB4TVVKgb79KJCjqqxPbAKb66wVFRzspBicDQ4dycv85rXtoab7XQbxzvu24P7kqU7FLEfDnF",
  "key21": "zM48GRmgS11QZSzeaC2VPMLpCaNjPypDd4c3q91mftKxdcDUvNWVmKS1xvbdRuFwvtDDei8ne4xVLVLZjzuBXcx",
  "key22": "3deEzUBV8YRSTFCiqAU3QCitA26AxENNYWMU3MLQFdmrGbEsSU8Pxy4wP2juF6f6R3XTSrCRchEU9hGPZrtmXN8",
  "key23": "3mUECE6ekFpaCNqwEaYESKhUxFQ3D3bZfJ4i2GMxzh6PDBvkAd94RVTfDmL777Rrs6YWwaTaD6AuuP64RYA68pCq",
  "key24": "2FsXEvYm4SXHs78R42xRWH2iDPQXTn2vBcrQ4grdh9j152vtY2BJgac6MigLzyKAN6BDcPfU4A3niiM9av7qHLCN",
  "key25": "4JfEBhPj4NnBecLF7Xe7RthqwmW849LRnCr4c3R9HrrKCCcrouMbiMroSyPSJwfnAaChHfpDzyVMTRySqMgMpbqv",
  "key26": "636epVfuv2dFbqbpPMStWoSmZZVzMMo1VHi4WBgg6NdqBRE8WwzTfAAa4hJifzzRhXi3on1BtfiQPibfzLhdZraw",
  "key27": "5CYxg462KHeJscrcQUanSCTXX6ann1ZZKagbLQkF8VLZhjdMR3NHkK7EF4bKKwBdUoPKvbqEzxJmKie2KyRbrazB",
  "key28": "2TBHiTAiZbaJ4qnfYGqxji6HVrLDgn32dfJBS19XPxyZhPZjtpzEt9L9G63LEt7qNf7T9Rbw1YoFq2m4hrbUFE7R",
  "key29": "4fainqhxpKXDQjoo6Ju1NH3bbtPyxHTzhqj2jztVEgXhyL2Uay4ejKUZoAAuG563E6DfeCY8nNCyfHc8YMRKJqwD",
  "key30": "5AM9L9vxNLRkf3pu9doNG5AoqvgpBV2Wm47RYAAqVyhGpqoUmkhxdxBiEWsLYWhMxSfq6zY7zZsuLzNsfRkv6swi"
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
