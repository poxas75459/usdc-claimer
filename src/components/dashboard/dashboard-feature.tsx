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
    "29bYxKgKWUAfbFUAYDRsLzLMRQEYedT9H55kPuSDP9Kw8mAwWECvNZquiPMFA4sQqDzsMc7zjYCCLEhumAPqiTuJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CuvMrqYnaCB6wERiJPXhqXYCdoBtkuiUTHp5eoKXnEMwLjDYJMYYEp5hpfoSCbeY6TbsTtZRCx8kADzNCZysXJP",
  "key1": "3ScrVQDXc1hBZrQGYwU3GVQiTbVbpqQgMzMiB6mgMh3FdudeG1HSnDz9qaBr5rJnYwEuwBNrWrnyxnBrqbk2jzzP",
  "key2": "5tq1CxDC7MrnjzUwmZw9fRDRaPco3xdi1P9TYvf41En9irSLF2jFGc37QFCCeetfLowxfkejSkopNSNuZVWFYXdu",
  "key3": "3MQof5G6ZGc5asoEwkvSJsoLYNCZDduzRcnJsVD12CNGLixc6SWiC2gEjSq1kiPjBn46bysCzXTxqGYvqdpEdDpf",
  "key4": "4Usewrdu4yJw6NR5SzLbL6SYHwGESqtLcrUZbKvwjCpJ6K8jVD5fRfUZ1vNc47316N6Cm11u1YBZVD78Gepfe3FR",
  "key5": "3xhq9B19z6xVvoqGYEWU92Ymrkw3ffFtiM4nJv8TxH2EwAHM1wepm4NLexxp5yGhn7r6xfvJh9Mg23cwP3RUfev2",
  "key6": "5gXXLcotaroV2imczKRsqramCYHPqrZ4fUqvLaBwtsHvjkX7RjDbj4Nvj4L7ujpUM11UiBkXzJa2dhU1MHtS5Dab",
  "key7": "2gVXdcuogM2NhSPaMtYrdVyAqjqQKadfEf6739af6Y8r4d8QSLRhWmZCyVHYYsw4PE8feAzxns1LFwqEqS8rw8Xr",
  "key8": "3VgHa4e1NxcrfwC2Xp4vGkdKb4mc6V5TKh2HNyz7pnGerG2BNriHDrawGmQfL8DgJVYRquyc4WCbMSauNAxBozr",
  "key9": "5h5PFH1AQ2cJTPiyxq84kXYxdT3LqyyaRi41knK92P9xW2SZfGUbvqsUbp5osjiApReVTVN3TU153s21RvmDPwNY",
  "key10": "Nt858YYHedQALCmUkSVXcyGedodLGK4cc4mUmQp3B8YdWrmmoXDxwfZJRGJ8SV8x2V2e8xJtmzNexERkuGe6XHW",
  "key11": "4sy9TZUUwWQnc53KAqBhReqZEshoaRVYRgWAp7Homq7YvG4znP759b3XhKi4ipN5ZT5ZLU5BWXAUkjUSWdDRSx2f",
  "key12": "n2rZfUFHsFhecRduKqozPmExUsHiZp744dSJsZUmFCP8QVXVTLm5cTrANAhfvyM5TWvQzdk8R74q1KBX1LJkkkK",
  "key13": "2GbmNReMPzxFq1rEyMD9MDNxrrKiasTuHVmYv378kwdpC1nc2v2479XVSxAaYrpqPANx2yHHzZ66gNS1xGzbMwWu",
  "key14": "4moHASv4CjtDDz4iizM48LinDzssTfUk7wxkuyDoW3zsvctc8dgE6rnrfhP3XZeRnCLn7g8JmvttRubaJp3tXhpa",
  "key15": "52rJ3LqEtThLi1V3ttG3pg6TsR659SMsZTMt3QJHHQ9RiaKtmRfjqwk5YKwcKgM2mE3MBbztFt4x4bHHzounkiuZ",
  "key16": "4X7du6aZ4xVYLuii7FvYU6YmPvDwJ1kJZzbB7QDEoDVMqvNunftEAGqwGCYPGibKePZQuzHvSXVy1kHSzubctE7G",
  "key17": "29v3qeWz9TXejPVWsMeFnxsT7jdRNgRvP7om6vdBWxmnEeMPJ5TyyaEgdwwGQAk5k2ys3Lbt6BDY2D2dKwitzniJ",
  "key18": "EgSqKwxihxmFbemqaKwG483EQtmSzYYHD9RfVcDuzYuxADVB5yFRLP1duwjNxUAyyfFgqmXSrv5DFfVtvEpit17",
  "key19": "4hbM3wybqLxKSUk7NWFKAfKfGMqkE4GynEfPzz2hvgM8XamdWkDvPvKLqWoBb2bKnutGLZxgJL2MWLSp5KFhKGmY",
  "key20": "29ZAEkoK9RMtEereezNHsoHuQd2cMhmaBY2sCf6symFytb63t2ZdjemXiBHpncf1qYsbZXqniGRDszp9bxAnoh7B",
  "key21": "2Ldv7A4oCk9Sh1BeudBeQVGEeMWdtFaMeB8LdhD9JTRt4AVMxw3LBcVGjJ9Zx7GRcUVhm2qMHzxMmLdhPgjJxK8V",
  "key22": "46oo4M4V8BVZJKgJEBCsPK5hbHiHdnWkvkfGNyyZTpjrV8KBomxNiSoxgYvwGoHPDyyRN6sjsX97ABqvXKjCq6Wp",
  "key23": "2pw3NkMsvBghvmcUdKNBzycc71Mc6gxnoi2aj9RKzhLuDr4An5oaCjCFS7rHudPcBnvKCEcvwjp46FV5jcUTXY2e",
  "key24": "sU74dEzL6fRahQdc9NcSqCcUwtvng8A46CcZMTkJsWe5PMX7HeVrzA82CLvTMMfMVT7zfS148MUN5QcczrjXm1Y",
  "key25": "ioHGjYERTgeEoFkKyeNk2vg4NPYZbTiLFM8QReaVd6H8wCv19Fu81nhRza3mrBPgcRU5fdkL5Kumvvo2S3pEL9M",
  "key26": "432JaC3xoNr31muU6nsDNrtGC9kqk1TSs99heJWMAGUEJgWfTAYdXea3qHQVVzGUgjapni5Y5HFrBi84JcqLasWt",
  "key27": "KzYgeW6jW5zeV3icjLZMnhtTbP54GNa7CSwYvwr82ByNP9UJHGSNtRABoBroDeJXhsCGpEHBybm2jWkLMpoyUro",
  "key28": "zfUELmAjAUD4CxW5tWDioAsH85h1epMhtBpsaLRhX5iZ3YXzXvnn7rcKE3vZNryMkRH7hZhxVqxSptKorA3x6cH",
  "key29": "ePp6rKdXEJt2Y7bhM15nta6zNiGgyQzdHjYUvuB8njwGd37PVEsk4NHcFYXz9Rt7qBWxknymQNkoGY5J4zyRZMw",
  "key30": "2VdVV6RgdFdtKDfy9jsE3MAEnxXYwtcrzt2Kr73QDBdypbrta6vLtNjEEKSva9fJjA2SUVi61BSNXdBZbDtPgcff",
  "key31": "54SGM2veAQp5GDQuHDQB656FgywhrzyDMCRNSsnJdC5tuYVxDBFMXfdw5wCNFSfDqZptx9X9mksEs3KCxGLQVFGi",
  "key32": "3GLCEuaaXEs326KyMw3vUoXa1psXvPobrzB3BhyWMovYq8vz7LK1rbyLttJk1j3wYPC2Sz8xZTx8RBatxHK7G4V4",
  "key33": "2igzbr7dyDeu46ixkx8b5NRVCZ1CtpDMLmE5GJiZLMuoSygdRvE9uvQoTg9YWyT1QceBUubvNoc2HiUQw3C3gS3E",
  "key34": "5CLyhoiYVTMavERbdmAF4Sjzur3BBkFmgG2HomNEjHQuUWaUbjxCrExMMU2LTgtC9AJGb5xvhvx93wAuPPeBnmYP",
  "key35": "3FGR2bTC7WmvSsWfXmEAEYiS23eDhQSXuWMMxnvbz9tNiGaaygAnNfG4YzYDyB76wEKDfMSuVoAEZm8mQcKq7CjE",
  "key36": "QPwgVquT5BobjLcGLvbYWX31waQQqWR67x9UKtjBrhrkw8UE2FwK4aDteQZhib3VYvTNdfixr1LUFAKKFTG6sMv",
  "key37": "2JMEhaQzFmw5wLQoJEGwfhTvNhRwndy1uuT96GAAWhjhxifYGftNKTnLaWhua2z4Z1AcbcauxkkToNEWgujjEoU7",
  "key38": "3JMiHxWH7bJyFeJ211KK97TkNkq4XAa3EVwomUessjv841N5DAof6K3CDzNYVj6u5JGE6omWFf81cWLYh5UaNdz2",
  "key39": "xm4HZ1g9CpBVeaiU1ZvUFMp16QKNv4VSj1W16xGJMCQ3RMztLK7u4FaJZfnXJdnYiQmukifVzc81MAxT4R61yY7",
  "key40": "5YnWExpR3c1Rzsr9ywaj5LCjhbmNqW271aEfbTeKbvcEPJwcqSMdQ9J5f6Vsk91f2sroSSDhDjDdx72sBejs94Pn",
  "key41": "52qVryCAEeusv1nJrVFFqkJRPoTMFxkUJtf86FGrYJAYFbTMbDVs5bx9GCWutf9vRaYRZwGXafVEW1RGZUWLt4sc",
  "key42": "2rsH16FLKqbaC9GVWUotndBQzQkGGxhhkCUKtVaQ13kK7NdCKCteUkW9VcHg4z5CSTa6Fs9mVospADKfHthMKGje",
  "key43": "4q9iqvdsgKXrjncicH2K47SKX9QUYcGkwtu49jXh92ZpnXjpdvgguaBMGFFKZTqUuHZyHQ4BQAP1z8Bak8Cb56Ac",
  "key44": "3wZM7RxFZVg7U5nvaX4nGqYsPT4JnZNjpugaYtDVBiH5bn1zTusWi4m7B6Cuozg1VRcNYkGgLuXiKw73hvcjC8kF",
  "key45": "5DKs2NzVCQXCaTxd5Ja6T4aT4f6WFNWYUtJyAwCujsDf6Up5QmFS3ts1bWgMNEAh25dEudNKqEH9JeMFqj2f4dU3"
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
