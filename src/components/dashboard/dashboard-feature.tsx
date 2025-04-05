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
    "EgUitzVaH2rtXwzYoFhpxkuzfDRt3vhyzUjLxLK1Ap7S7yfb9pPxtUWrmdpbFJG1jehdwkShmKgXhrht31S5M1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bT3eV96bU4NT3c46MSZYZwL5EGMb9T235f9h3TCF2gZXCwhohyUjCtcZVbQGcxjmuvKvQctHePr1Cs5ue2bE83e",
  "key1": "BnEHaBB4P2Pk3yeCfnbvaXV44stG5aV62du1ypL7JMVp6TX7n7jq1L4CgtDL2CFnjRq6ht8n6usatVJeRkEtaot",
  "key2": "4DWLK8NHvtg5UYWfuHGTcmNYmzUe8WPx8UdYU5MsFoqUxBVBAdE2X1j8i1fp46fUmpBC3cMxYMDHqPbbbR1Afb9q",
  "key3": "5QBWdX25GmEkYYKFJyKzcjcqAMQGKU2bTHRAX3xoCU9H4SSR4pLH2SS68bbcu2wWmxGLBK46K3ArsGsk4hNn24s9",
  "key4": "3zQf8HvSw17gek1KaxgLkaeJXg5ZfeuckokaJP9UDLg5vqmS2CTFaZ7m76UdJiaMnoXUeJLuAxCAsJ5aUVLLEcJZ",
  "key5": "5bYeVBQkBbJ6Jt1sMNea42sy1WL54u8GduoLBALF2aLK7oK8tUfYwNXdyAMwRSnTbJTt9JL6guJHGgZXL6yyV7T6",
  "key6": "2SKeZXy6A3wvdRci93eCzgP79NPA7Yc5khpRdvyBwNDgciKmmu14ipX7kJEACmJtZSrUdu4YXhQYvWntQn5VeaMB",
  "key7": "4KBo8TD7dHnBX752cvftFuYBGLnZnsGhTM4REYjpAMh9kwtVUpMsyGRaB7oU7Ex8ELiMF1MzDEfVUMCSpMJxtPBh",
  "key8": "3aDCzUPJAd4YvyTafekda5RzPwGiCcCu2qWUCzxsfoTL4UVN6UDiQCRPHQJ5tnwEwiBKDBBvSaGp2xNr1UEJgbFc",
  "key9": "2zikLf9c3r4kgHFCmVM55PEcCKM8MgUjJk3DwifbfZe42S4LYmwsesgKfohbX6QVFgWHPcE9MWZEUvP6FcvFFkqQ",
  "key10": "6gYftuas7zD4e3BLKnyR5Et1onFKLwzQWf2BBhnxP4hoQim1obahEpf3VYp4rD7zPmomHvpotMmqEMWDeE88PG7",
  "key11": "4fsdaQc95QUxByt6KKS5vW2KKmK8y572s99MtAFwQhbJWJmfeZ9xXHfoKn87jmPoEpUjAnP4A2ceptg8FAUxp2Qf",
  "key12": "Qr7Phbp3jeWX4Mrq4S771jGNrZJic3bnVwstv32E2Tfk7X2PNxjW9CNBLdBPcV8cLTLLhzPnFF8EWuJ9DiLVNrs",
  "key13": "5eU23YyyExEv3UoUs7PzMNZiPQABapHqqgRayG555ZC9XV8KTsxbpzv4GwWhu43rWup21iA7Dv2wGHupt7kaLJje",
  "key14": "5h8DihN8YSh5cXLs31tQE6yg7tgD68T2ya7mM6a6zQcy586gLNjNR8NwTvhEYZtEZUs8UJqNhpBpc2gdUrCeEoYT",
  "key15": "54xQV13bri4BHCS1smK1RyGMecN9HmVKQNVgVyCTin12W4GV8mpXF6bo82eXy9zi8GZc9pSAtDZ3R59dczdjHxXb",
  "key16": "2rE2YmFat9E6i1Sd1uGUoRFGAbVj6bkfdppqnCpeGKreEfR9RQs1znq7GcD3a6dqfabjLcKiiDtMo9XN86byCyqJ",
  "key17": "2mGaWAV8JTXxTNhL1hraK5R5UCNA5kWtYnnV3vGWrBGSUJLHUtjw3mg5c3K6QGTbocA7Lz2W2pBcv8Vp4Ht99WE9",
  "key18": "aFFv6MNLUC77JL1Ur8fhvRXTbm2ZZqXZvgqWzy6Y52RxMqkWhAJreTX9wr17yYDJgjY7MVvQMXtnwjKeabbZz8K",
  "key19": "36DVcWUWybPXrr254AnBco8bLRerKyVSkkv6JFRHPVeE32Ya7bMyQvdySmgTqr95QxV1hqEKfMSijuu2jpSqFn3z",
  "key20": "42cFgjrRgdYFJvJJwMpQ6ds3DSsFd8hXggURXbre8KfeayWPQQMzM53LUijhjabswB6Zye2qbfkEEwoNLAcepCCZ",
  "key21": "ETri4gM6y9BV5QaFmtdmvDqNq8HHHcCXAjosUDyevNywNyjjASEKVDtzFVKhZDtJCCFCqehSmt6SVieTG5gGbqk",
  "key22": "qQqwN2RpA6dgKQRUjRMfkQzqiwRxhFaddrv7Z5o5wTcJLzPqFxwdhxJeEnD42fHxFFCZ7jmxaqimFwb3MoZ3bsT",
  "key23": "3KCn99po7eNdqn8f69eXdFXPFjoEdqZFSxRgkk3pM6GPPxj6FnjquEGHcEvEFRDayX11VNoLk8bx2Xk7MkDXvr83",
  "key24": "5NeBm4nLFmkkpkzJfn1SuvhSzXbwSzjnft1zAmXEJ5CAu8uSDBfsFWiUY8GqkxbbSuWF8evxQ8zcQPFMy2tSQfvF",
  "key25": "4Pv5ub5qQAt2EyV5VCqLfDCr2T2ZywUGcUm4iF3RffwqH2w7s2etNhxfpuSif47N15Ltg6kh1YVaTD4qdvSMzj9N",
  "key26": "5ixc8CCDVb3mULrh9LSiHynwj827g6yvPqsKeA9H9YALi499JLfqpfTDBTVPSbax6PQ1LM7CbyytB64nW3EBe3Q3",
  "key27": "2qko8K3DpL5tUbkzTpfbt346cJxSHhQjhS9sx2LsHMQ6W6VM6U7ZSmLKWv6RFjRDo9osCCgTxmqRsbQLBMBSUYdm",
  "key28": "34cM2d259E7WpsbTsgRQg8iNpj5cgAbmFhM3wR8yjFPUFcXYKBtPFEiFgugFkfEG4DHjYyG1ibEnzkiKKdkDA6dy",
  "key29": "5NpBawa8b3tLQCSXLBbnU1szv51dwPHuUiLQpzwn4HhXk8NNeuuncQ1TGhMbXgQbUUxRJkqSYzRC8m7SukND2zdp",
  "key30": "kUKpsPXZ74TSmrwZ4zDjJ4mZ26oAXs84bn3JKKFfDBCPozpWmxmuvoscviqXTG2Q2wZqR66uMyHNnwEANByhmFG",
  "key31": "29QztBEwnDG61WvVtqyJTRuBq5y4YFPQxLYF3F1YH86hb8ZWW7tB7yePLiVFxsMMVcZhvARdXatC2PzCRtKnZtvk",
  "key32": "4Pp6nfZJXppDNM2dirc8VsnrS3cAFv7Xy46AuxhUW7eqZ2Po4e365eyAYNA8QzsDv5G76znrvMDoZd7NsEYaSQaR",
  "key33": "3q851n4Yw5Z1THjnBVYmeVTX4MknKY7ixxKTigpd7Q1TXcg7CrYQmYcdwGwxezbZAV3BYw2is6T8QpNrynb8ziEm",
  "key34": "3w1Ph4xrnvtyfLfhkgZZ1aEJ677xf6HVHTxncw9WxreKZ3LBtS5YkbhAqvgc3u7SMYWzbCfTiAY8EUTJ2gCBE4Zi",
  "key35": "39yCC5v9rZCj2AjddhELYZadtwUvZcLaFkhWMJ5xfgiXAWMn7xmx1wwD6CA8Zx9jnGbf9tvLfdLfdxBLhFNsqsoA",
  "key36": "5CZkAxQZrmDcCmSMJRriGnaLjpAsNS1TniJZyBNvGC28bzjZiQCR56A8n4rhbdzQd4e2zYsTSsYGNaWcjy56WqTM",
  "key37": "oF92NHmvU7pGhRoGhmna8dUURaPq1FPMQcee9oXnUuukY83VYvUMGxyqitQTN1G58QYit8JtyL9GoAayMHVxrgN",
  "key38": "4xTzvV4Rk5MEunBbhdQzJX92byahQKE2PyvkfzykrX2Lt5nd31WVnVX3mXa3bPK4aroiJHdDg4VtPKUiTTwgfHT5",
  "key39": "3bVqy3HkgtmDCmSerMePHgEytW3Jii2CSbZpDME4DaAhTLD49J1aenjyKMXGmCDWAdvT7fQXdUNhanhj31qupVy",
  "key40": "4gWSTnKiPrrrwqgECwbJB6vFAHQUV9v9kSNznby4kpCNwp9khMcbU8RbskoXqjxRNMJXrCiqVpaR2ow3Gj7WrKP3",
  "key41": "5aCyWEwkPkdtPmJ6vVTd54pdsBGpy42vDMEWXrmQBn6GyCco2pLePrVKidcPdQfDMecfMcPyUwP5Y9ZBSdvYGTaB",
  "key42": "4sZZJ6E9cQnZTdgBhoeQSzcwpyRWLEUEpzo1PcNodYPtXUdZvYMiHwHP2f4KRMWebdic3g366K457x9du7wVwU7y",
  "key43": "5gFhrp2jzQXwwZn7jkvtJfq8ThNZRQk6Mtc4QmTYdpNV9vzvtWh54XUZMgAc9BFYmVA6nnSxoBucZpUgveppK2jD"
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
