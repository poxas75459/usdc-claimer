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
    "4nKXoDUqGS32NTX4UHfyAcH79Jwu93SE16rqfLFMouUigJgJBcnPRxP8MjSJN6a2GoZiCcpkiRTDDMJezmHsWHBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4br6i464h57DtWLCL2jsaU3cKVj1VR7BFe6BVPKkFXnSMdn5WH7YEqbhxekqWvozajLigGkkSQqPpxcBjhLcmJuA",
  "key1": "sDaa8TQeiBK1EvRmUWF3nyn836BpDTyXbLpwg6B6y1rUY6sdDCnt2QF1HFuGMvZZR55HRVA4tXgJrV2uieVbAXt",
  "key2": "4DqZYjVt8c2URML1U2h7GQuki4ngDARNBwitG7FFh8ebGLbHYQ1jtwYE2f4jrQu87HtG8pJ76s9qvNYWKxi6QfpB",
  "key3": "5joKTzAzqT92FNAjRTrdyYAQpfjFqt744N8SvW9QunW9LmMHLhk4RAhtomAmrpcZoLB19VDakyaCaYnsKTrosekd",
  "key4": "4L7Ttcj4jzmHU1iz9dCKnzQhArUxXHU1g1kx6uCKDmYby93YrcKhFKMejqEbcw2imL8HWarvHJTdxHMWAWDPqkre",
  "key5": "3c1ZyiN4h269KvREoQGiBJUG9QW9ysw9JXY3hcQA21d2JEK4WoJYniNuBgJHAStoKnZC8iXparuLrgmrq9rHA2Cd",
  "key6": "2AM2HGLiJM57KMQn7cpBHzZDEqnzx2UKTvVHATTuQxLmcQjAe5yNmEejZwPv3Mjg14gZHsQo3gKMjJhAWRP4EuzQ",
  "key7": "2pAr3zWjYzVxFaZLsyCMN4ksx8Qj76gkbWYVpwL252YjhxRgUUJMWV982tBp7q8SBDSrFjswatStfXgfRANFJcn9",
  "key8": "2CpqUfJDRVHXKTKY41A9HrrkJV6QEFeAGr91dhtFg9WBQLzzriND36Dj7vm3MFpvqMnnRXVchwBC4w7wzpugdDxR",
  "key9": "5B7Xi2E9EVeioqroWN7svrnhFDt56i2pQmQKtBB7CKyuN8a4LE6YsRJu7Codq5L7srLRX7HPLSRmKejKvsALkm8F",
  "key10": "4RHyrCwsTW2iCb6i26CdKrSRjrXZCbPrrcU62TWPZzcHptuNzugZEAj5C4zkTfyLHq858gsQeQAPpt62P3ZtuN9f",
  "key11": "4C8HKxoBKuJuwapsKZvUuCgg2RE9AarsTVraGEkUk1APyTBEHAHxPtjr7e68FrbQXvCrA9BTYrmGpvmueSUiY7qP",
  "key12": "37uoeV7MfYqkAhUhybkFKAR1ffRHvEgo5aY7AfChZhoAy1kZdnmNRHNDovNYam7LLocainYi3NFh1whg3KMr5yUp",
  "key13": "59zYkqXpPWJozqPuwA48hsFFsDBgMwhmH7XTwiqYS4jaGE1Vo6XfYS6KemBwAkQgBuBdYTZYQ9u3EazZVsSDdgWx",
  "key14": "4LsrWFPoFWV5uReeUViqm25kjN7bAFwAYfhP2s3o9NVJBgrfBHMudu4S9dvt4pkUL9QyFheLC4nMWFSm3Fjube5B",
  "key15": "BJQnbW6kk7RwM2ey1cL33RPt4xisb1fHZ1YAovLbXybCf1im8pZPDj3ASvFqR6ams5r7MoRYXNASHUkUQpFKinc",
  "key16": "5aj45GNDvoSyyeSqHFyGoRJNiCowciojxuMNsB6Ao2g5nQmYAnhGMb6PBgDqjZeJrLyaeNhb5m4J4MhJ58KMA9wQ",
  "key17": "3NkyS88MWEWNFhjKP6q44ki6GhPmj1vqkGkFWSpzDydFQeXLUza2eDA5gPzjSH9KPwc7drKnBQXDoq8Ds75bBoDv",
  "key18": "5KcTnnapnECwVKS7TmCwtu9MtQeo4XTSGp3Xh5SQJ2MoBy5TPsdq9dEsAJVrNHng7N66bZM5aFM9E5eTeZcChtm5",
  "key19": "5tTB2SJF7zmZa6uwPTxyuJUYZ4uiewwDV8eBp8uT1sE2npfgbhP25oKgMG8aiS8NeJbpvYqzenmXL54Pwj7ivrRm",
  "key20": "4LFZe7iLkfLUhXMscYCAXB9NRwBePHPzdTsjWxnaT2XjCEHxxVsdXJrg4paxwGxUL8qAPYC1oyMsF7n9T55KyvJL",
  "key21": "5qiZ159EprTLJqxwb7jH4KBD8MMbme2KpBtXaUDoEmhhMbRuxS9kkXKYeE3xp7z8T9sbRYFGUrBg1dWb6WBVBm1Z",
  "key22": "CSoKbrmgeCQXiF6rBue3ehCe7yQ5BfpEQig2QDihTLz9ifn4ffGB9YwrBQz1568DxftsDryHbttnXEoWkun8ffN",
  "key23": "5o5CUQxLXd7zp1bZtniPtqcC9HNh77Gj47QgPu5DR9BTz9CFUHeNH6pwDgG6xzEUVpVXna672vvM687ZLv9RrgKH",
  "key24": "3NWX5nFTr1B1C7U35AC52u4Tqe3VkPqFW1mmTxAUCn4mDgbnh2GXCTuELAN4dnVjoq5TKVMdHJS5iEQVB7MACXLA",
  "key25": "34RrUujQzjBYjehthCJWaF3pzGDfKvFgMB5d4fCofUMVwNXNFhVksLYE8PeDU7g8q9mCZv13VqXW6FGj3S5pVupP",
  "key26": "5zq9z439yAGaBGrYTC2Aj1MuHHaePGqC7RWKjjDwY6PREX65AHFTszbmcWRizUs523e3eCNmni23LQtPUEE3HgqD",
  "key27": "4gviFXQXB72uJyPsv8T8t42szHRxzHQc8bHqbyosqB7nMpUvgFmyUtJbcVUZA1xwiJdzLEYgUngYRCESxMf9NaFa",
  "key28": "2PsTEH3taWsrWCB7oNk1S7QWULKcAzUmvUDYnGA5wqqhjNQJBJRG1U9V8u4LGYgZhUezUTuG93rfWGzJKqviafYn",
  "key29": "5ChLie5FXcvC8MQ9mF1zMyGT2SH7V8ykHJC6JuLP4nqpiiWGogzwLvZnHu4BnYVv3LjXC1sAqRDduyG9aHVikWEL",
  "key30": "KK3Rq3yU9zG1pgxJocaeW89XG6L5kpLxgesvfTs6NDRxdp8QLJSnTzez4newt15pYdQQeTxPHEBCMjbfABzJ6TS",
  "key31": "aVhZHJhu5nL3RuwZM6kimrxJE58YT1VzWBdQJ2BZRwLxc1siutkqSkuv2ui6bkmzraafEUCdRabRGztdFFTynnC",
  "key32": "2Ju5VvATkgkYSA9FK7A7jZhUuxUmGjAgHwHqsZQaCQRirM6GwHLW6huTX4h3M7TomPaKr6845WWRRAzNciP2xgF7",
  "key33": "4Hcc1ok8Rn6oHLpRvRZcpTuUxPrM983BdcUq3SKUJnShZBPobkaZtcLUBjkkayYNEXpC5gAtGPC9sMHt1te53zZ4",
  "key34": "3ZMMNxsDe2eSbWUnxK3v1hwXNJmS13zsXe6apWWBS8hiNBprVyYnyZFRND1H6V4uZuqebLgeBBTzWdmm6dP4HptC",
  "key35": "YpgGEbT6uYLJodjiJrbCN7HjPr8ddjKMuB3o5p8GLYCSEJ5vQdzqxS1kAbtnunzxYFCRQ5M1zUTK8uVcvQrcdWk",
  "key36": "itwPj1wdMBfMtGMMS41DoEzYngpnFWkeTALZEWkdkHfAGimQET7FWXeTBNMRUqnDPeaM4mUJuszSMVQjwZcjyv4",
  "key37": "3RxFBLGCAWkCwkGuMabZwGKK29KjYeovEM69PeP3uYgtjGXwDXXqUvaBXFZTmpXhRUFj3z5QT5EMYNeRZU3BHZua",
  "key38": "2brurjwFQEqV7ir3oT849Z6Zvxd9yryuwNeWZs8KzD4Ub14ikrSbdrrvAVsvf2SsB8LHkwxG7qh4ucpfbpjFHhQu",
  "key39": "4WeSNbBTUmaoZXtEh1HikemR6sg78cpBiDUqVQ8A5aYomCZXSFH5dRd2hpcbPG2xvSX26uGSkaAucYMCQRSCkU5w",
  "key40": "uroboTcxbfXZVRiHicr2LV2enq6aXsuvA3YDafgPFDcGWz6DPPNZbGhHwR4H3ndRmksPvnp7ByJRqcUM97jgvve",
  "key41": "4oCyFiztZtGcCtsU2LzSTy39RDTbGP3QSDy7SDSNMyDffvrfkNhFXsdq1NpbbTZXUuqVCSLzvFbH8WkhPWsjf3HL",
  "key42": "gRkByA2vtaRgDEp4d8zEUgCF3pESxemrDmM6GEioQrFK2Zg5JYctPaDBi3GWa1NqsG9thxHMCPHeBNGtQ27d8Bo",
  "key43": "44D48UBUK6XBCu4uzq74tAH6or9gnB8wtbbSNZ9yXN8jYtsNUBsSnVDvvUFnVuse2A9GXFHVBcouHAymsgV9CCFb",
  "key44": "9qfqav4gxP6YzdWa2gG76PW1HnTFcB3es6oSRkLFqP2dzZUME8LMrgpGiGjUmpu2hqJx2dJ4dw7ApTRvFu9nFgX",
  "key45": "TcsSjG9jqHoNU6QS5iuxDZn9we9Hj53sjEUo14i2sHg3rdQ8ZudRbiXQ6ZBc3X7tbLrUCzxQaEdyskmTiYHLvcB",
  "key46": "4xiRu8VvvzDqQ9ZyVRJ3E92iGwmfJ2LszB8VmDbx3JtDaaV9AxWDcm8dyeirQdTF4AfqQvxkW93YSgL2Ldds93Mb",
  "key47": "5zm5KQDqJZp8gWpexnd2n5knKLs3jRP6JyeBXT3iVVjraZfQcEcrJt2uf7nYpLYR682k9S11mfbGdgi3r257rw2R",
  "key48": "5m8LDqVfh9mTG2VugEdhtYbhJHxQLkNvCKtebqhiATFvMor1A7cSSSkjaeaqWcAimEDwQjouVvRtWMkXKMdWDwFW"
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
