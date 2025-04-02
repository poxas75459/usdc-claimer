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
    "qpt99ydtRW4dGoJ8fX2pg1i99ButiB6j8HHvxtwX3d8Wfme6YiN9mGezbBDiQbbpADX55X7TXytyw2pXStSzYbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bMSKzNg9h6MrYQNF8sKRr9Bso3XJMa3T68k6yLR6HfAfRFZvcm5QuxUHCMeaDzaPFrSRw2yApi3YKG2tRiAZ22H",
  "key1": "sENZSCqE68h1fetvbJy7a9ZqfGurQ66TwdbejKbiZMLBjSTWv413hqfq3gKQSsRGbwaLmShs3HXhn9FHBhFDT2x",
  "key2": "4Vur4nkStuoss5YvPPahPrLDMqpYkyXc25DP8eSM184MsNMJNLei4mpMdFmLhubgrBYBzY6saAKqh4eeMkqYC763",
  "key3": "2c3ReTfNV64QmfaqFf5jn17oyJo9CXmJ7nch3ythM2of6NF5wu4KUAZyNmEU36eXmKhV5wRTrcZn8BvzXRAcuNAd",
  "key4": "3RaCtiFfT1xxnBpupcFrckWGYSLxNE95PAaijcX5QcyDzC7Zvg7YaHtVsH9MdSuWYJyh35rZYTqQ4kAow6P1YwjS",
  "key5": "8yoCmme4f6pwhGQM6bnzX2Tv4n377jM9HYiqSWFyi6Lhgvt1WPnpozkeM5bCsaRsdq1ogws1fKYWF4G4NabDyV2",
  "key6": "3ADAhHih6L3AoBcXVTABErBDcSy1fhiXVFPuaJBszuaZRtSGDZsyhLdEGBjfNEWUBjN9uMGMTzm63miFCh2tqF15",
  "key7": "3rTkt1ZvnNnV635LsVbeNtEm2NpLuDStJ31qrWHJomTWdb91cekH26fYdp3R7bgGLWESghqSSUyUkeeBq5K4QFDa",
  "key8": "1uBFK6Lk6uLESjbXFLvhZmnXj9jcaEABQy2fq6p3AAs6VzJkEGQR2NYUfmd2XSnHnsFUqEneBYDmkaVpjLFytcw",
  "key9": "3iidWPfeGnedLQo68FhhnfQiKEUM82KvmnJjDPosMX8VNHuKRD1qr7CWgwAGtXc93u7HLpFvH19MBCQitjkVxPvA",
  "key10": "64Kax17i7ozyEMTCcz4KC5zCYtc9CjcgqKVFQFiGm6bAkp81xA6e8HrfT1bQ3isz9Qc4R7otKDjRTCzx6XSGNsxL",
  "key11": "5aDfcihrCmhHrvp62hmBafoiLwBrMDtciFW2tGygULzmjZtbPDkQe9tffGxfLGwFcn4LwqtzgtaH2m9rPzMGYvCq",
  "key12": "4s8aPToPBGJd6RnSrkPWM4pd48zJL5hCt6UL3s9ypZ5mWQBzKVBATmFaiFRrRTtuoLz1CykYtC7AMKjHmLj5ojAb",
  "key13": "TamF7Hf9F3eUfXJ6gNyaw2Bqm7eQVpSsFP5aVc7f4V6DoN5stb3BpFnLtQ9yPtExzZgsWsmpJMfj1mCQN3BXTgj",
  "key14": "4HR1xZknXPDWy1qS79vggZKvXY57gMXQBKsi2Ng5ebNuogF42BQBU2sR39TtcHspbEHquD5R5NEZ6cVG7aC9UPzG",
  "key15": "3EsJvsUEmyqgkwuN9cwwRQLBnmjBVts5sL1qnkMQKLpALiQVXezm5YmBuvnRWjYkvbjzrAiu2UVY9pyvSDkxNihw",
  "key16": "5uv8PRGTvDCpovFp2JzUAscP5VRXFdDegrwxXZrpActYNvxrqLGYieqTrD1sgx5HxWa8HvuomjWaDTVBpjx3TPAH",
  "key17": "xirETuXDGrcfvMuTqp8cHmju4jtxxRU4TGtFeiubQEBaNqAmaK6YEHpDvjKyRX3nT7NXB66uYDwmvGukDViTgev",
  "key18": "2xUNUfJ7W92fBK5E3zZuJDKQ3o1kuTxPaHVKFyJn3eGFvBE2LdtMshRC668VZyHH5hUHf6bjEQBQ3B7zaFLr6LRE",
  "key19": "5TZDRNwx54hAXUTZeh51Gg8Gt63usCW1VAueg2o6etaZfrGQPnrj75UioKsAiN6SaqQpzccHLT6sZUU2BhKJbJBT",
  "key20": "X4obsjhs6gtZHMHNFhhadhUeKWMngWG8j6G6mzuoxiy4ydEbrvcvmbzxAfrfuSMy9MWVpPRF6R2wnKU98zG4MLK",
  "key21": "3M7ctNfMdh3cVS6DAuVudZK45tWevEdT6vhoTD743GRB9heWMsdknFnTkehUtFgBBAZSLo8VoiUc2sp3KMUF9A7e",
  "key22": "3AhciqfLXJTRkwXfFm4DvSfPrXGZKFLM7s2YdkanhZrQyaPbaZVxDVJN67jL44KbEucqi2gKUfU4jQUFqPzz9X8P",
  "key23": "62Ko83rDUXxyAXo5vihpj4SpZC1muyvekvzzqsq6Gj7LtA2PsKg8b8WxFUYuyRNqQciMoe9xgt34dJkkp2uZV2m3",
  "key24": "jVtjzbTJQ1jF4ZY9Z3Usj9Qa9FSTKReazqpBPG1gyHi7h4MyyL66fdKWzviGnJswefNVELCHFKoe4ViJmSqP1iJ",
  "key25": "4TYguYEVrCey9QsLNo1rF9VrvEF9iHcz6Km8vt3gtXXxdRL3Ec2x5bjZCfmXQwJhJ9niLQi6hgF4urnmaSh385Y3",
  "key26": "HbdV39YtwYR7d5kznmoKUwovs8aa1hv1T9ZWADq7af92K5erw3AL1j2xYUMtMGBdzYzEv1cz5e3KNhuffbtirJr",
  "key27": "63Qi8VvpHwSDAm6wPfbrNp3YxxZfuhAKnTRrLcSrHpdHk412KZsw3t7CYgQfqeUweaLZWGueqJQak3cspZPzyYnW",
  "key28": "4ipiwwCvjgjCd49AdzSt9DhYtZ9ywejoYuNoMyYwkgAsd1URAiQYsHQznzaGZLd1Af5hjSaY5Nmiwk1JsjcQxebf",
  "key29": "YZ2Cmig248wyQvWnMKybxA5k9LedGwAzrKzseS391tkoC48Zuv42CpNCeqB3kucP4FKB31Pqiu8PeyAcJp7J9R9",
  "key30": "5h3uUqmntzzV1omt8iCHpdQtrGF1wqF1WhSzy9irKR8N7LpTStf8yhiDTx7AeubtXDhRoWwvHZZUfGdJi4Uo9TFh",
  "key31": "2yeUdx3KsJzSEtNFRvdL12qPKGSB61rsB2cV548bHHQobzdaKabfoEiFMoJKYcXhQgNzud5hadJ5AnoFRaMXsi2d"
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
