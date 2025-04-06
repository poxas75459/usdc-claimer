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
    "W3m2JyUQqRL77TeuVFi51JXut4EkS6P2yWW577bScZKKiwomoXvttckAUEkPtz8PaVcWNuHqJmBB5PezAWUNkDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39s29BoEXx931z1zj385As3aR9WVsy7KdTE8ZcU85L9yK86ucXbzw5XSA8c7fpMnwWy5f5aP8rrjdaJB1T7DBYE9",
  "key1": "4zhmWnPvXysvK6LDSoCccsxhpsqSajrKSM4JULC4gtuPGmoT9imqzAUyFNFUbBZy88VtDEmEmZef2ifyPqcbb86k",
  "key2": "3XbZ5rjCz5882ov1MiULjWany7FrYfrZHbo95J2YYeEdzEvbkFTyXekgNtMW7JY7xV49dc7AyfD8g88eKbriU1MV",
  "key3": "8kyxrKty6qCH6i2TzjWPCfNgYFFWaeM3iEEf6ytAUdazyXC2cpBFgQFKVhgFRpH9qyQPXowmNgU4oSGg3y1H7PC",
  "key4": "2rVtdxufMySCfhM1tj9D1epEGEFRMrS9ScnVW4MBZnJp3bZBQtqXySHXqzbsL4KGiaDXvtGXdUuQscSWehA3oeoS",
  "key5": "3K5mqhQgSozgQ7V9vVpTCuKSjk2qTbHWEZvpJ9SMKQW3crSfSbD1uMszDuBFWnBKCzgzG2DitwPibKi6aUryDNVb",
  "key6": "53RA5tnVrTVRuiHXJ4vnA3CRKnPEDHGzpbhXLhp2kLuY3cAZq6Hx8bpNfKmjL9ure7fLfjc3daW9U5Z5h5TecsNW",
  "key7": "4HKSSZJteqUW9ZyAKkbLxounMNx2rDxmF5NnidDc1rdwrBdJA1vQ16M8dDYmrmDVESmdp4RjvnRnWp6aRvceZe6N",
  "key8": "2UKTKt6GRXiA2jjWyfR8pPH986ka4EyDd3gD6YiVwA2Tu6hz4v16kEtyiLQRYNTACT3TUaEzc9hJPG1DvQFko2R",
  "key9": "5Q9f224mjbw4rrzyPUNzTw4N8vD2DhGVKiUBgJbtjLnk21cQgBfmhDPUYQiVjUTBEDkg2M99JbiBRpGhu3Sq1Yko",
  "key10": "2ojSaU4KVYdUHq9iFeHZNqmYJv3RkiD33S15AJuwLUx5moeft3aB5pf3zsRxPHdwqtHZPzPh3QAdcaPA8o76sD88",
  "key11": "2MxMeDBGujQAfcpr9auis9kpUESkoqno6ADqsFdvaxQ4oy2eDkmGiKu33GCbYpsGYtnJPhQ6dwk5yHVsLYRsFzaa",
  "key12": "4AWaBFFgRq1ogEdxHdDbSsmerQM4oXgHtxkXvr7J77ZYb1Bt6ogN4geUGhy3rY8WLNW1xaUws4wotjdJYzXzqK8v",
  "key13": "5mJRh9821Y7T6sJ2E5kiLDjnYzoT3jwrUYYDDCwLcjReSbSQ4ujHQ8G8BEMnebqiUHd6ZP3f2bzRmpbj4rg3URY8",
  "key14": "4Ch2pbbp6PTUtp1iiCeFEAnPUKfZg8KTzuK2dsuMKgAh6ttq5oQtd3m3XLu8WHY5a3jfsVg5UqUMC1HoNhK5oQxn",
  "key15": "4DhKEibiXDcujTHEr3hXZxs65uzdjefzd1ybSYciUgrXobRhuW8WCacaPZwR5W9SynB98rwdfuoGmRHvmXgiRLk4",
  "key16": "ik11ZKV6ppELpiYigdn9ejfEP5RWV21Bkh9DXEoyuT5XAqZwjr4Vidv7Q3uADACYnXW6HrsJWSR1peC2VfJmorj",
  "key17": "3HVY4hriANJGRMyCjBLa9MKFiPwkXp8r1KJkYjVvfy8rmUdAU4XLTWEfgYHkkMYR8xrbE9JCCUZqAcWfRLYcLaEQ",
  "key18": "5A2iubTDSVTSVKwv38PHMXrsgeofwg4z4E2qsPkBCzcBaMqWxsWxPdeQ4LuXi2SwHWNVA3xkzxypKhhK6rFtqHnJ",
  "key19": "3y7o1LFq3E4erekJmhsnDtUi8LeE6iYpUNAdGLgz4b2SYEQPvKKp4xYCKBfTf4Xvtg977H3nd7FKmaVpSjVRSwgH",
  "key20": "53h3dt32Qmges4nbQBp7iLviJTbNeXpidw9b2Nkkm1FgEQbnQpMhtqSYTYzMQLBTBRDHUbp7w3yYs2qX5tZF7ivu",
  "key21": "65t8m3GP3SVfZbSEzMFn6XvFQDHzbD32gBVM7Zn8yPhe11ZtDnHGCY7vF3BQo5v3XoqcyGmgkMAbVkAHstRdTni4",
  "key22": "5B361MpyzYaF5fkyCqAdcqmZhiZjpuJ5rHaznpW4kkKMj6ChxfTMRJLeKKMEJR2s68dRxb5QgZbtpAQmSRCpWUbZ",
  "key23": "24cTKuUP23ZNSvXtgqnwaN9e7g1rgz3V4Y7T4KjUDCmhuVMA9bpgCWYMKtV9dbMTy5taameaKimWcVPFoU48BNFe",
  "key24": "2RxbcvpN37hHP6EPCyDC9D9YDqpn79QF1F5XPEuAKJoLdZGVFvHepPoGckQ657QAwomC3p2yr1cn8N8EHRX2jX6a",
  "key25": "4cYHvTdympvXzjFUCSYc4imDNCSSBWbEn6DnWoQhmKJjTzHfVnYAfHTGov31HkighWp7hWp6fAEs7xc5pKQceQQu",
  "key26": "3JKhHJH6rwM7QPgBoubbH9USSXAaXaFe3NyteNxbVevPisqboBCmoQkSN7wYHvNF5offH3JiDzzbU3AxUZCUaVRY",
  "key27": "1zmUaNTrrTeEhMaurJ8VqGXB5a9drzDpPZJ8hKeFP1xxeQ1uwttbWGFRUdhbxEBS2sFcwaTXGhZMUNUPpZnUw12",
  "key28": "49wwjC4R8Q1nLGN5u7hqpuiDFMrDfyGwfTg6iE21JHH7gJa8t99H7ULAV8WAmSTiAvWNzxFEMH1ScV6SFR1UDmMB",
  "key29": "4bsGZZBTLQCzMbkmzZsHcjwYq5CNZbTPRHjzFB3xyJ1PGLzBZYbQEYtFeJbVi1RCscos2op1GYQNyTr3QB7TuSB4",
  "key30": "ALb8TDR4JfdXyXy2WHjuxR4pKYGvR87N1EhmPbKWkDrgJecwiLvkFFKa9BrCjYkmE8y5GhpCpQjSwsKUPVTihcU",
  "key31": "RfTvEqtt3d6B76EeN5x1E8vzPeLFBmc8qo3i8jJgHbfw8CgW1yQsCcLMTrK1khvz3JGHGEzJjd8jyRq3Muji4xT",
  "key32": "4rcS18JX1KuJk6s82AGvSAoR6V6FQ3REWcMA4u8gnbDkXsk7QKr1HuXCkjQfjm5hf1rSUvWxKEb9dDnGcnVH2FHA",
  "key33": "2HsPFm78HGApBWt9AJD3DU7RgnrPq8JMD2spWTsRFnor7BuGS6niQNyrzDtkxqh9oxuiYPZ84y38UcQgXgerztMJ"
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
