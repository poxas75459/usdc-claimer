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
    "2BRdMhGCupnhBxQkLftaawD6YyJ758DQ4eJmESbpZe1Hs9cZ4LDBhmcDaQu627pNFpn82EFstJhzMVVvAxPXvgQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y7dH7hBURi7oFEHE4w7fkVjjT3DWpjnyVynKrDP8zvaEtFWQ6jQ83zaRPNyfCg6cxvh4hesAV3RvYnhzQN6qERU",
  "key1": "3mGKLe2c9RjnfWrDPvA8FjTgU5bVnpnJF8Rtpiz2fvE7YX47mirkGdByiQ31HD2D3i4LdxraDrm2iaFuKuPmiqcD",
  "key2": "5C4dU9WNro47as5QtHsdGdEE3D86PWeqRGooBkP9gvtMEPPxLG4s7Sah587YLiqfQEighWgKTd4WZLSGzcMARr4e",
  "key3": "55SD6gUANfgcWK6L1q8UVTAaY76Aap5Kuen31aPd5aVi8kncgL6jdjnGEmv262q5SB5DgD5eM4mKdeKJCZNwePzT",
  "key4": "5mx59NoV63fxziRAdB7fTGVQyr9f8ccjfmomMW4gSJK9AkUr22wxn51RcZL9YBrzVA79rFQmw4EEtumzpwowJM7v",
  "key5": "mpfMpLNYJKKAPuLVBNKjhseY6sNshPVt51T1ZPKpB3D2jcaTM1EPVJXgqELqcXxJjVg2YnUPJUWLnskTUtkZCqs",
  "key6": "tGFPRgqibUQy9f7e7bxgAw3HuxquweGroR8wBcDmX2QRXZhf7juPDwGBPC4DNpKNdiKqNeXnsDRBR31pZJrekMQ",
  "key7": "YDjFH1quTiphGp5Lf4jJ8KMR49Yrk7n89VWCRjKL3VGMGMFGsNApgmCmTQBRympWFd9HTTLZrFqSMvZZCWEBJZ4",
  "key8": "2UVpx8zJpqSrKh66mXFDikha9jjhxoc2Vzw2M15VMBMzh2SxcoUhqoFJUdgLXpvgJtVJfmRNc47KU9KrFegs5n8y",
  "key9": "Q5AfyNvsH1ZjcZhqyH6dsanWtuPpMcUEYn3Zq9UdguTzCo78QVcVFnYAUZ4RCFpprmvtNdh8Dv77DgcYuDuUY4b",
  "key10": "3DCVGMEGMk8PLHebBKRHMJoYc4tyA6XJ4Pa3h8bFn9mwNL19MKyi1P33HNgMQxQPKqWoGBuyamEow4byHC6PNu8E",
  "key11": "4P5Pbime83MXTSMbCMuQfTqsC1xftPnCAFkEFqycJyyohPRCJ32viNPFZ4R1ML2SQH9EXPHwQr7zgppNbC7qmrNS",
  "key12": "4fN2U11Wp7yLuvBHAAuKq9umcgfxxwi6ExUAWoVPMKynV6UNTA3xgip6wPK7C6qPJBDxzjAQ1ZVjVNg4JMhj4318",
  "key13": "4NFjb5tNgshB2pG5DuA3vL1q1wgZy4S1FnaZGQ6dgnLYHBhcrgMBzhNgQeEmQ43V8JboTc17HRQ1a6GKFWgxVBis",
  "key14": "5yezxeiyp4DFHqPZ2r7Y3XihnaeKTQxpC2nasd3B2TcRq82pAU43x1hMwntdazMetrgCXpr5u5x25ytX88wcyLm7",
  "key15": "3R5pbqPz3Y5wozwtBxqm6E6cvHtLuCUDtkE6mcXfKKt4HKi1qkv5fhE4C9ofCiGbpy54x6pv3ixaSohcXzUm5RZt",
  "key16": "4kRad3AeihACS8p1hQ3cz8PmQzDaono6RuqjPT8bcgNh4VuLaT3YdNG4Wyr4ZSaGc9mi5MSYW1VRvpdvVo5bfcfX",
  "key17": "47eES2Zy5QuKGNN9ZUfaimzsKhHKnDZ4wegELmLZ68WQgCbSGV5sE4UiFKBmQNinwAQpRM3o8hLfGgcSHUmC9Jmn",
  "key18": "5HVjFP7XE9tVBJjWWveWLGXmvMiaRxw5Zqbdx3u9RjWRVUL76cYJA3GBAAexMDQKwS8kWHaKA5yskK1yqGP17FrV",
  "key19": "5MPG4ay2HU9aXY7xNEJDM9TTtQTFzTKyHvSdZ5YHrmSrhQrefcZccWhz43c82V1iGmFD5Rxpj7DyHFiN8nxLsecS",
  "key20": "2QZ37okjsu6DUmrDaPn4bRbw45AtvtiJcRETyUowfAzA5MfQGMqnWYvr7ftpk3fxsQxzaDWdPp9L1GyyM73vcCbw",
  "key21": "37T4cGWoDaArzjEst2X3oosdiv7zmx8qZsbfpHMhwm9TUBRZdKRy7Fe2ZzGyYNfKAXr5R15Rz2qJvWHus44PtRMN",
  "key22": "5BsNC8UzmYEUg9NRAr2ZjP3mTqKRAbpTWYZ6QxmzsSfEjK8EFArfp7gUFHnWL5R9xF19GB43rzb3ghRADPWXkhsD",
  "key23": "3PHe63cCMTVeWppkKyoXzXuYp7e3ZZ1PwJ8XJQMDNKHJSbxLxaU3TahunBGeAnFST9cFzSLLBMcKyxwfraQYEAqk",
  "key24": "4tBGrJqakzXM8Zse2wf7btZL8aPn2RK3cyxYrHRFFv1SUpq78r7LymCfW5h6XDoBFeyLo1YEHLrBJfbnjr7iWow3",
  "key25": "5PDLirgfUXGqbQguVikqrwiisbimhEqzwXu63N7rmpF6ostD5rWEtEgj3xaZvJhSSxVEwgEFNKRWh4dycvcWkGri",
  "key26": "2jvcnSLpAxpBtGBavdtVYxxHPLR6NySiodkHaqmPCNj6Ex8vpAstwXzrUNvrna7smt8JNHKZMwtcQAWwHpeHeJ5v",
  "key27": "2Lt5M7PsjqBeBPEsUSCpy2RXxSKfMbrqKUy3SCB2misHFH7j3RQAA1msFQyH43DwXCuCgTApFLbuaYRJhw4yzDDb",
  "key28": "28maVprrKVsNiqZQid2LzhFPCaFsuhBu58PTzwNzQnspXtiBirRMYJCQcfXyjTyh44L3ZPsj8Pr6MhQEKRhQaNHY",
  "key29": "2YeVVTpb9qE8YM96sMwwfbT8bEHsxYoxhkbMQU3KeWtmjLzGc81m4rAZEYqaZ7qqKXeSWCv5j3MeR5QNedNZ9CxD",
  "key30": "5jzi7emWVrwaALeLuK4JL8JYmsiBBgKBbDr8Ps3GwzQ4NxpVCkZ8QtCfvUMpy8BgmJrJwTvNZXB8YQ443Ck3s8kF",
  "key31": "22Kk4R1UtzCBA9Hji5ty28X7o8XxivSKqutY2xnbtqZDuybcsgRtuBet286tYqBuWAyBTiWB8k6P3N8LtzbL8HAe",
  "key32": "6HvduTfDdNvdhNSTqvz4AE1CU2AUEtnRi6zhsLcLvw4G7DAMWS8VaNxzb8mP3RzV9wc2rfUUad1nUxCj8erm6CY",
  "key33": "L5ozdjRjanGbF3SmPbKQRMcvK62ub1W2fSBCzUw1eqw3JqWPhRU4ofwpaHZtxZWLSbJ9t1boxK9GhumFiLLDcwn",
  "key34": "2wTUxKhEQY2J8doenAV5MXF9qNMhFeUmmWqG9dz94do43n8GPTc9a5pUoPM6FnB7BjMuQZ8c8hKd9JeSbKDj3XtL"
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
