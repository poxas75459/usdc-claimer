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
    "4ByTu4CE9432oykM1ZiKrUnhb4ZUocXYp1EpnCEQQuPUo5wb1ei2NULRqFCdPQeM872P87vW3gSmnbhu3arshcmR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TN7Wx3o6xYUtbPxpmefc5nQV1kqZG4D4djYPrWYopyjc23KuXUpGVfZLcayc4B5fDz1accLAaxyoCm32vT6dB1o",
  "key1": "2Tn6nXLuxevqMaVgDdtJwzEESPgiQrwy2gCk7mDPFtauJ3CzMB1rPuap3JaLmEAa4bSv7Lvfks8aGjkWTsuUT5pq",
  "key2": "1GBrJkTsX3CBvZY2us8ienGeLcHs49PQPmuKr1pFpeACZQYLwYdDr9PsguS4q6YXNG9kkSG7kFP9bYsaf7zMj1v",
  "key3": "44kJhsERoZsEc8V6hTmbqdYLDxMVQb6N5nywzXxtrtJDVgFt1nqbfzyJ578e5vySYh3vndKcGnic5ZAFu8pzShz8",
  "key4": "37UjPQb9MhfT6rMeSP9NLEyG7fPkwNvvMp18aqL82DTNQ2DAyUMfjEaihEjekWZuXBByVfqZjb8taDthzNpoPvDN",
  "key5": "eDpcZJeLe85nACpPWoTS2qDR2u4RcKfRk69d8nNcoCAapNS6YfE5k2KNtErTWd6cCL64WiCpexMd4maa5wJaPbe",
  "key6": "4CL64Xa2eA45v2iB3DUjB8M8mRdJUA1qDh3KBdQEdn8QCrBCUgjKYHiTQrFGrgRP36CJtdNsya5DjsqfwoCcMUCE",
  "key7": "2AnXmZr9Y6Qd4EaFeAUa8N6dvLuwMMqHJ9FQXJsQx9SVtjMAKsSa2fH6y2B32bQDvaEBZTDFipMXL7hdYK1zmr2r",
  "key8": "VZLzAazDUCjw1EVwMjyDZwUQXksKo8ntYrnfwGVstTfjT5UrPAnzYri1Q6eJHypMVfEibmSmYwCcKVRrjzMoz8y",
  "key9": "FP9vPNqXHWBMCok5Bqc9k3ARz24Hk5WvYtcSU8EBDm14RR6h7M61UceTXS7Ha7RW5s7dJebhSVUAR8P9ubdgvaX",
  "key10": "3j7WkYSWkTP6ETxH6bbq1zhBL1bcYJ4ompY5F4z6u3fHiTKnFg8sZPcd6BwwRonNQns3GbnqnbeHqGkdQFmCbx7c",
  "key11": "4umfuPoBJJ13k9791vCzrpuFJSUDpaX6qLFF1n1NBtbLu5WgueNVX36EeRjp1GdL1CmLXBngD8JEMEgdsf6zwhqt",
  "key12": "39WdgjmYtskwKQoKyhyFSnsQ5XQ1CQPeVg2tAfNRL79nYGaFFwWHt8YvQdzjcj1vrCysTaGH7viHW5NNj4DHtYHd",
  "key13": "3MJfpPwpTQdDiNKA4zC4Pgfs15V718pakQTLvVwdZnBgAtTykg76AdMEiJHVYRK5pdxTW6NakzFTL2voyHcjAN9x",
  "key14": "3iuzvJSZ13AV9va3bQmTYGy9rTTaQ9t29pY946Z5MkzN2ZaR9FBz9VX19ytUQFhHWqM7Wxna6DGtfdZmxeRoMEWJ",
  "key15": "46cHabQNfbUccDMMsxXEKKqmEGBopsBDXuAYcRqxoqPWHKE1phYccr58C1TbNcdZciifuaJ7GrPjxysLDyDR1Eys",
  "key16": "5pMJn3JqwHtoQBWtA4r6v17v1T7x1CHZWicJjTPer4fbd7YR7NcL9z9mhxJht71d7MMW73LRG1dxS4GsmgfqLE3v",
  "key17": "5TaLW2WvjxbFAXBmo6wmYsYdV7X5NR12ex85kGguNoi4C4Rs9SE9SK3bWkbKzMVNPU1t5HZQH1heUzm6FXasdPko",
  "key18": "4tv9MtH1R1K2DQaXi2jW6Pw4hYQDgy8MW9f8aBxH4pUa2Z4FATiXf9RuqYZF9krRdCsUhLSezEtwZu7cfqmH4fJD",
  "key19": "4AzrP7BQbZ1CK1yEk7X84jhJShXmkns6fyTedESuZM6WDAZZisWHXtuu7UhzcJAxhMps2wzWUq5z9A3je3aCGrU",
  "key20": "3uJW4zWQ5J6FtvvswPQYeSnQnPjJ62zKvRwvEGJYM4P7HSttw63oiFdxH9nUPzYEYeD6Wd7him8mLppGd6cAH7dr",
  "key21": "4b7tXcxhoT7dDS9UN7cUB6KpKf1SMVyhdsmX8jpHpuEmrfn5mcg2ZeHuTQwSRqZoqBo2yLCG2naUjibmTHe4Nbu",
  "key22": "4sFDb8Qebr5spKjAqbT4ARFnTFVXa45SwWYTuh2UJ43mvPDRhwAyGUKp2ERtCQkdhuGhNbcupABfhScJS6GFPwK3",
  "key23": "5hR4UFbWyFbsPsFREjyykaW49rm1WbiB1whViSBbTQ7ZQYWzDqYyQkpst6iwnkSnuWFTdwHxQyXu7EcYXKLHfFTc",
  "key24": "3cfvNoNoWjbrrLXd5c3T5JLrZJ2JqCbg8KgdHAuuV26eazHUqsiC6NrdEhZWRF1yu2Kad4A3thMgeSa6GLPxGt5L",
  "key25": "2TuYXMPXp5yUcWKZioQhttXawwYBBRxkmKAVxWUZgrr9v6LCmF1JpMrh43HDvws6Maw4C3XKAu356F6eUJ9g1Vdp",
  "key26": "YNm8SrBQo7UPcCyHbrxJd49RUMdw44ndF5xDAxYQEQBcacUN9jbbNQXk2tWYeBUmABjy4dFqzFung7reT7hHjfb",
  "key27": "41kvEWGTStNBL6AyBBj55uxsBCYUN8oxML6qZRHMjLmcTPsSRFZttWgR5bUXPAYCbvbEJTbQvd4sXGgneGEgnrDL",
  "key28": "2yCVvGSrLeGw7Kr7LdKY7CgfDQjtejcFAgKcszUQFbGJRJDNQf7Cby1zaqsWTmnRjLXskgdMvvMTqR3SHsjeS9zr",
  "key29": "Wnen5vxtFusZm2naW96PNNmbthJRoSLyFNHN9scxiGrprFRyNW7VaS28g1DEnzHdVKqBsJoCKYoXRpB5zQxRLPj",
  "key30": "5Y9LkM1BRK71pT4LkV4MU64U4EXEuYnmMS46KbzQjsgzFTjBWMxoHnhTJumNFdHRyjRUBiW9B366VPDK6rXejG5k",
  "key31": "4R28h4PgZ9LXSb3gmoWVmmUSQzLMvgsgJDfWBm17MJbXKa9V62UQ2mG6om3oCizqTcu1P7ViQ4kTYo2zpZP6jSo1",
  "key32": "2MTRHQCPTEe6dv7pFVbfvqwwBcF2JL6HsKoLhsMzgj6GuZ3vCmfGhkSSKzT6pZSbsFXFt5YT4YW1kNHxHRqD19u7",
  "key33": "4PBBYrtfvjqECKARAqJuPXuNdSEi4XqrSvQqJzRH3wPFSCM1imd4Yv1p8HmSUmydctEtBT37no6RRmkafatSSWvU",
  "key34": "546NLV431SzAtpCgVqtz2URwx2XmotGUUJyqwXTWavcxN4VFNx5R5LovaiRzxfgaWZYhdUvD2BLC88rPDVWbJsM6",
  "key35": "58wpMVPoL97YWnyT7yXTttCjf35rRntb1pE27RQuPTw4jbsNpKDXL2BeZxuJhid2b78Uwvf3LEiZSRPrmU9ZHQdx",
  "key36": "4KEPTMA8xFFAFewrEy1xMyVbSHzbAdyr5Ano7JvxNsRkCbqfs5fcJkJwvHnwEy51rvzDK3ZSMJinUrznthhyPHQX",
  "key37": "EtVfUwTjE88cYzZhhBSwyN4x8oLMikdDy3wY44MmYYWbryW5Aiu8Uw5gTkq6xx7LkuSsao8W7Cy3htNgZaxZmKE",
  "key38": "4eGy7UaLfuGwtq4WbkGebHYz3pvC1bUVxeKFQxd5412M2WNdsYfRfTTKYowFeh3ifWKfyRmmtGbc7e14bBuuQatA",
  "key39": "9i7vPG6xC1Hj6CR2kgm7FDqxqt6XbfbGXc4kUDAMCqNFCgcTBnVBfiUrVAPJMYNrJsuMUgKVRVTZGHusf9dhHvA",
  "key40": "u1eY8Twb3KmpQ1DQh86xmuDPy5LJMPtjKXE21sE8sEvmX4yN7HRCahBn4nFkK6hkWu8HpW5XYNU9mASCZvHqAdP",
  "key41": "GPKf1abN448Sqzg2yydTcHdZ2rK3aA5cSF4KXi1fEoDZyR3Csy5XFZLfLkZRpdHavgAFP4HCzi2b6NRtWk2RNtM",
  "key42": "3wbxjunVVNSnxZ3aysTEaVr3wu7LDT4NVHwHfTo4w1TXLphLWTwTnXxtmE6DPypV4XHbkFR4gQ478JvjGcRe2AVP",
  "key43": "3bjyXGGsAheB3TAUnjMRf1b7dKyREDpM2MdSDX7Y9tgPf79QCYGD94icYpGrDqSDz5DrByMgXTyg7K9MGJQCCKgv"
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
