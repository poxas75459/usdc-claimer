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
    "3FVroahhUQbJbT1M4dmxBNzTgVwXZiat1rFLft5xnDs2hxSDyTPdPanogPcYh318VYJWVaXHFWExqSXbaXWL8gw2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNhdiiqAan6uvjsHqYBDXKH6NudxbpQLmcfnX18NHzwZxXGYeAyJ6dxsZaLTvbhaizdSSznNU1Npp7tg54fhThP",
  "key1": "4ZhB2HtFGfUEqMgfdAwHcR9himtir2ics9izLTqcGcnHvLep2nNHJsEKx4uiVvCfKJiruqxJF7VTQJtedfYEhAJC",
  "key2": "4pH1xpFEvsxyjxuGW7aeDK9FYJ6WcxmkF5YXg68NQmPBtcvbiBC8iudZ7kGmuFEZHtcjW7D57dgipvZv9wWk4KBp",
  "key3": "2gJ6LuWeQS22Pff9G12nZY3bNoRCDEf69MvYKCRwY7KDJbyQg1bxvditmqfXPUiqhnFbnQeKnsQXgYR7Woout36d",
  "key4": "5xpDpPDLyhYeqSvzH7UT3TzJ5RrFeiTcwtNnUDd13fRiM5XfJv3knnoNEWf7avsMJomszxkKRDzABzRmCcFCKUZC",
  "key5": "4cwbdk15DCiFRqkkezEEL7z3UrPnYoscRNsGyqjjv13GjNSEGirKCTEzjiDsg33474xkMvYnZZEFoJYuwi8J5isG",
  "key6": "5pG4FVoGyUcVr8JrHS83NHh48iKBNKGw1HSNqNdPFGTYhKiWyLaRaPfHTf2sHdV66Rmb594woj8idw89CBGnVkYe",
  "key7": "42TuN1vFRk5kDUoeAvDXHDPNW8ZQtkWz1HL3P3D2T6xVUaDiiYgaeVCZPGQQWhxyzrervEX11MMGbg16nkg54ioA",
  "key8": "5HmF6cfiVYK6hiF2GAZgsEGC1mPjoL4noaW5KSEhDkrCvCFJAsU7yADApupieU5BYLxz6182gva1n6UD1osGAvJ3",
  "key9": "4XvjYeWXWiPxQbbJu6Wsw62hxb7MJP8xgubBvLVwJUUtYrxYp1ZKdLM5BCSGFNe4hNyjnbcLVXRL4qcCKHqWaPfe",
  "key10": "4i9t1ZysxxT8Ljta43s4wcYqtwpXrGRnFHy8K8comCWyezyRJH7VGqj31jeiZxxRftJ6F1rCJU3WJGMsKYmqTTz4",
  "key11": "4ThrRauCE1Z4MccnbMzqAzGpi7fNGXBhz5QDURNEj23drQ9Mi11M53UyHi5xtofoYzD8hALmBuiYhtz23GueV8Wa",
  "key12": "51izqBYc9ccnXVRatm1hZreWbWptjNToPjUKM8vx3MSjTtL2Gu4VhnTVn4u62Qdnx8FDjtAyvWTgjJiXfMo53nGz",
  "key13": "4FD9JiLqzpc9GYa6YPsoQk9YaGQbXXM5ASQB7LaWXqk2bjMh8BimnZqpZkXRXFTAt82jv5LA5F4GM8PJPPKu8mBD",
  "key14": "5LwQpksvMp5UeeXbx6aEp9hTHuy8X1qMHXRzJYWyuDFv6QuG3Nb3ykDuUvrdT7fLC51b8fxqWcMfRX4sz94v2aPX",
  "key15": "58XrEqh4PJwG6GKVQ3uSCywRNfMwL7tzR8aXbrWQQRQgxvNNC4DLaBqxUhq1EefuBzHLct9tyY4oTW5qQYDQVhpG",
  "key16": "2THdtpoz4TtMFDL2pVmNNnipsM25s68R1dz512DVM9a6UUx7siTLLuWgkAQPJnHTm2P8waxYaGQjCPfUrUJWDZ43",
  "key17": "t1Sdvp1HATzC2LgUP7CfoeYMzaJwPwcnge5ueWnTmj6dUhapY1NQLhqrSsosM7SbfgExBXUFgzBLRTbgKHRPnck",
  "key18": "xsGvyye1EWPnjnaShRXpFGAvfxdjkvSjUUDJV6FEd2gvVZ3NyRKBP3gbeNv4o9xCr4JCYSZbWidxbMiCuvwg5mS",
  "key19": "xwV2WDaEfhgfx67oFVvhX6HkXZH5DJWRG4gTYbybDMRt6g19RCLsUhGZECxksNK5LvrFqtGFmBpRc4xR13mVFHF",
  "key20": "5Y4peJH8BaV62akJXzywpnvfem4PjM4NSiWWXoAXftq2ux8p1gSV1YVLH4whDw4jNgQ9PhzQUgbRPaBT72tmRxp1",
  "key21": "59iZ9yH5yXtK3pRhCDobwSwzcc4HzgrW3S9w58qdR4akA43dSanxiTh2ogLQaFXsafTMrVBLLLxZPb5XYEtdq73x",
  "key22": "3RUzR21M3PevqDNV7bS8P7S8KNAu4uDGe9RuWhjNLPH9NHYAZufnZCcr2AfDky2w761rmcrsjzTeJLhrRGjwcN7d",
  "key23": "5AtGXajdggz2Ku2eteHmqtuoaomoahoHYCDnbTy2zfRFL52CzNYYRPbbiYVuuw1P68xt3ZzQqaJr1rNqgiBH2cqA",
  "key24": "4ZsUisgeQDx6H8GwLPWNeCEmVsyuLxwfcNEaD6oNrmST2x4WsZ6o483EqfWyasVMUuddcqVWBeRkDdtmjVJVHz7W",
  "key25": "YSSkNX22y8L5WLyme7UqPeDhwja1xkwzaSztbQJLRMTzfQYZgwuLsp6dAZHWcNoVCAEDFehcyqiD8ynCV5KCSNZ",
  "key26": "67daD9dTrqC5tN1nHzDrwrqb8KWRAfe6rusrSxxv4Yr1LrUm2gTH9sQKDdkvDxkz3ue4phaM8aqpVStwA5M8iubS",
  "key27": "4JWbAqZdp4p2TiXS35WSKER6abpt5qqP2ecPaxw2WNUcSA5P335NDuNUrQDe3s9T8aG9iTQXsooto8L21BwzYQef",
  "key28": "3F64r6Wgzjcm5uipg2op81dJqSiDGY3DnWG876Y4LpqMwgQGctGRf51F7ugrqWtB3z5rtX5HAor9f4MPtSp9xoTn",
  "key29": "2XjutrUjnTCJhcPn29URB69wGFr7ymbqxeAgBjTR3nC1FFyyttpKiUZPXMY7hmVtxcgUnVkhv17romLBN6b49M7r",
  "key30": "656dnLo4hgHMCdswWCVMhRJqVYyttewhB9SLHTv7gauu3b3wUovkPYJFAGxMzjGZxKWBWBcezuPNudW8RC6ESTrh",
  "key31": "2zH9DfG7vqWimpRscw2HLffEZ7NTN5ks1pU8PUegb3CXrrwsVp6ttZCXmrJJ6nt1J975Kkx5Wk27d5rgEcVXcQaH"
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
