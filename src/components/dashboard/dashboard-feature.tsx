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
    "4xXQ3Kay8D1J1s6ggaCA2XZNgdk7HdASSWqw4UYFoBg1rVCiH3L1BBNojMFyyxM3Mr2PhPhxsGT7kj9sCrEX4nsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dCfcbogPCz5L6qgj6DUhUjQ5zWnr7zxrSkHRT9uHsjMWwAkEfE2kLG89UMWyLkJm6hP4bxUdKb9z9oteteyp8Wi",
  "key1": "2bpv6Mzx8f1dmfYsMUi9wTU3Rvpwu2iwfG5Q6QXe6wYwekAkcTWWvLDTcdoviZfKCMnmje257gUMSeRb5t5TaYqF",
  "key2": "42rBMmtF8rsbgYnhXbBxacGTiri9fJcnwbRyVzed9ZZ6oaZmgUG1gZqjHeHrGmBG1nCBGcnLDShveVUhGhCKEyRH",
  "key3": "QLDujNJXMsM178tADnL5izdXJZ1MQ2uUC1pezkhRqAvrTrm9GZqbCRrBaFQSnrR6TgpYDh9SyQBLA9p9tahSoev",
  "key4": "5AXPcwkvjFgk1A2KmgWSfXSVo1sjKhgvQT5hyTxUqLuFV6VJJrntJjZzh6FXFpAYaXeYKAuPEsiJJqc9DDELQYjA",
  "key5": "4zuwL1srxLvce9HqaZY3TN3ubSG8oLTskBGQn6AMiAJbCtWkfcryek4Wd1fdL9zCJPndKgvuA9PC2BhXWQJQ7rvi",
  "key6": "4gKNsdVgvHU9VadvhK6PCY2b7LynLU1NEcdYpHAjETwY7vNSfwbedpjXCxGXk72PZD4zoXq7wmGBDKWcMDSefJtn",
  "key7": "66Y5avLvxCMSQp22AFb1wtYj4MwU2JvuK4ouPqY2mRGkeAudVeTjcApxjLijFBD3KsYqj9hczNh5fN8TUoiWwTov",
  "key8": "5A3fjT92XL2tWVCnxjMMYxgjVLCMF6ZyZXZZApW5CZmDjRZGfKLLh1SpCJeazBrDsoJrLZam6hXe2jhJUFsW5cpA",
  "key9": "X5X71XWgzpxjdguwda4RWdFYGjzPLqSfqtjXpigZGHC6wTr8XUmqFsfnxxMofdF6q2Ss8h8SQDQa74C7tXoDvKX",
  "key10": "45iLZNbtCffXd6859maLXfgQ81VjPzmLitoMQi5ovHsiVtEVfcWLuQXkeSaZ2NavRLhnZTCavT14nmTsV35btqng",
  "key11": "4GfbPshMvk9QEvH3R1yM2PcMunmh7hxrbRuSzZnLiuXas7JymZb2x5XLoRdp47Yc3MPKkscJHBcRpHhqgr1QMwsw",
  "key12": "2hHVsQSFfRMHpvRg4JsHchUqPWmg8meVnHbmAHWatcJd41YUq9AF5N6YGVPV8UazHMaQ4eHHXy3pU2p93tv2P3tg",
  "key13": "2mqaU7chddrRxcyQJS6h36LtMDhQCNkTkQquNVU82KXoFa5TgPPF5zq31P1oJREMDf9SrVUNw1p9ptZbKXqTF7DA",
  "key14": "3BpCojNxGxoWr7EvGMMTmjKoQv9uENe63q46u6bztjHfzSxy9vMqcoEepfcEi5KuUUaKyEm54brSRKLL8YFgP1qV",
  "key15": "4ZdFYx3LHdV9oqGsrX1KpvXCdwxrQebtQ5msSszEsetge7G4mEYsa21HTAZAudJgPQuhdHUmNsC7aa4aWqp2Wzqb",
  "key16": "67VfepbuJkexQUcmAaVJrXH67a5Jnbi4Rt5UGbbM5NceEvqrdjCVwHP1nWyoHMoWhUzEyJYdGLMutyGCynQf1gtB",
  "key17": "5DsyNFuhfuVgcpFx9gTD5NQqH6dQ9Q3mRkbZwTfUvk3cnVK1eKZTChDXEV32idiGqDeSKi9FgQuvQUdcqTCBfNfU",
  "key18": "4hTuPGoAxBMvfLU2J8efoLk1zSeuqDWTNb4uUBWbAoPL9MqKYKUX66FEAcRY4LcgjeR9LvrHFG7UBdDeyh6z4Z87",
  "key19": "3uarsRT7dHx9XBAiMfLNsQuySijxGroQKnBTeEY9zzm3cKMQKcM9yhD8osNjCdZftfGC2aYjQWhwbNVUUXc9xFVq",
  "key20": "3Uk7HMDGHKZGGkwFu5NDqxiD8HkQ5n1kT2ykbLTUCcfTd1gDoPPcrFFUGWvfzFiz3HyySHi5DQXH9zJ3uGswPM4A",
  "key21": "eaus58bCh1PVrtLqDPfcAHPqz5h8gbajPXiUagmBcU3N8eve47aAWDoEY2asr9EKCpnoTQbqzEmfdcitZe3HoKB",
  "key22": "5rG86WYbBZQXr3GgaPnaHsCMBKwuzrnuqRtbNGzxxNTAzypBEfEk75P61QzGYRjCoyLcGM4HRMLULPT6phdey9XM",
  "key23": "2nRTeFpiberkNG4e29SHNmmoqXxcHjPPQHiL4ciweh1H13VZZYkNZ75e3Cn27bM44cXkb1i91vx9Dx9rj7JiYTuy",
  "key24": "4yyBX5Q3wXz2LotNokUVdr4ZR7KQttp3vZEQ31v2ViutW9AgqeRGUV73YrZ1ib3karJHhEsFh4xeM6PCxNFw8w69",
  "key25": "5Bn2via4BPMjmHdoUMJCArEPgqLuAfxts92HniauihZwmrGFGTH3JL984vmHNDfhQezqHKFUogcCoof76n8F8Rh2",
  "key26": "4pRakgbD6gvWnnq9AtwsGZuhsRrFMNaTrjMQxRjNjnyRDMuU2CUWDGoME58Dm8jdJ8qYu4B6Vce6LxRphGbngSc2",
  "key27": "88RTnyMhqr98cnvyKoWJ3XEjpCMpN4oM5oTCNfoknKNPbD64pnVGADiW1SQisZoKiYDAznTzP8pDp7KgXoFZjme",
  "key28": "3EsEZoW2kbciJ694JK7m3uuD2N8B7P7WMoZtdh5wyTKx7fNFmPgncEAwewdhmGZ1kxu2WrtqpwKTD6JSpnHLKRqd",
  "key29": "5rHMAfNSMmQG3R1S3rBpeRqs6cRraxSPkbKmqBGRDfg5hMusAcC7r6oN9mPrh4uMX5G1UGn1KvBS1D2LqHsfaHD",
  "key30": "3G3R5izrT8jNpkGurvqm7WnSBPBWgjp2Q41FR9DqDxJwJBQjuzmZGDL2RHYuzsty8gTTy7cHBzeATGquMqrVJjep",
  "key31": "5PjkV3JTFebDrn5e9aJwjrV9gmTDHBGqbRZu75AfiJdgpq7gcPShJ1SDnDNmSddiZwRfZAkMNTAj26y2yVZXUeq6",
  "key32": "2wvJRzysZDGvrCxRoEaty8Yg2zDwsuYsAXCtwwB6zikbV7v9EVZtT49zaVAvWRwV3rH3vPaJeXE69zEozM8mrQuP",
  "key33": "5mWPDLJiE6RXfVedCurnza8hbokqA9YmuNii566YdBRSboi5icRLdMc2KokyJtmfx7um7QiyCsRkaziaD9xA39zp",
  "key34": "5MwnvfEeds41TeFBoFZmiY4ynJTDUVV14wFYmdppW8WgsnoA41myN51D6RRAiZhVTTw28rvKTsWysMyiCXH4vgSQ",
  "key35": "3eKo96NwGaFm256n4ZdzcxUTpHgWzLaacESbadzuGHHyGuYCsAnSfJDU1PAVFGWDStf5kVrbPBowiBkyamPLheJS",
  "key36": "422XAgH4kBhLweNGS4qTkr3CXEo5V6EwCSBD9f8rfUMyihmfPSsGqzXaV5A1o8rE29waZrWT3jVZCr9BSwvCWXaj",
  "key37": "3JFfLrYDhUE7SukBePipwnG4Ahpk41vfbfxGaiQG93FFpeUVqwPPBZHAZ9KJ4fetcTgidDvMjArWTejP9q4bR9Ya",
  "key38": "NxUb1VRHu6DxLwgC4ZAzUjAGz46yBDtyRoQ4Xh91zGGHS8Jj15dCcYy15VhQoT9y1AoSVj35VDhKAkboCDH3SRk",
  "key39": "PGTZTKiMGup5NJjrjUMH4vfUbAHGnX1mtxNfo1P67o7gNZLeGQrCn2LuZvjxQzrKyEWSb9gRgHpAHEjpnJog1EF",
  "key40": "2NAQdHY655sPwrtGzhveMA9PsJhk32k1iEagoK2cU33iPdRqwAuityuobxaxsRVgbmcMRm3CFMLTuLNQH3y8hfYX",
  "key41": "XdjNNms9K5npw4PgTw4H6hBDgXwF9ZG6asEDHGnjGZCC3xVk914uNwT1yCQQvZ5QQPAGj48jgFbT5KMhp9mtjnk",
  "key42": "3CzEgruZxA8RroeWhH4jq8U9XmDrfsUKE1WFjAD8B6G8Tr5ykpWdEU7dtUB2AfVcj7fkQdFQsaDSPq1UWJzaxcCc",
  "key43": "252xsGPVV62k1EWWuX71t6XgkBgLTrqvXEPNxtrhJaZc3yRMGsoKemjKZ9oTEBwNAaYFQ6WNXwvoCJ9SdtsrB1SJ",
  "key44": "393bRna6U2uHRfCdo3ccJwMsXFePUEZWczUaPUGMfMFnDFLQQ5twod5kfqpYmEakWXG1YPZqW8aRYCWmwcvJqSY5",
  "key45": "3AwQmFatRhkWtDYN4tGkFrf3xQHqrLhDxNS1eHjxsZyfpyP2epAcpYpyw63cepHq8qtYNkc7RdHCarKXy7L5Q3aq",
  "key46": "sEQq9vPodUQ7xosaqi1Y3KTjZUN6QBhPcQriGQFPrvLY5cbQHuyPKMoXuEcy56gSaunWvirRyzg4NpNL8v6UGej",
  "key47": "2YmhMEJufdMNkeZGpV8oDEYPkXJAz1tpGEpNbi4EcvuUeUbguubYW2Kj4vWALpKTKjGuzrjjxrKkYXfsqdufDUSF",
  "key48": "4sm6kYDiqgmDQWTXQpNV8ukAdGqANQeNfVAoTfr8X4nLDtM5kJRXFZJ9Bak3EJV6PesKKqN3onpk8cu3tvSkTCNH",
  "key49": "5GVLPWyEcyeNTDxfruPk6swyUhNvU8EwPveu4g4otthfUPMJwr3zzFpde7aXwGQmodjNEyXSeKTDWkky11UqPT1Q"
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
