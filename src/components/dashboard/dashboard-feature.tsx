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
    "2xqKwtmXXUzUDAHoAEjsT4LZbJkLKNXtSPJpoi87Q16jxZHeQ5PPiSNCE8iZfP9mSvP5JXNZNTJ13fLK7dx3Pxfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jMNrSfMrFJ3x2sEBMeuR6tgfZgW6nPCGrawsGKJQLHGc2dXTYp1H2sG1FuUb7SPvwyanCSXiQF9DQKyKWupvTZ1",
  "key1": "avJpLtmeSr1Wh8rjjiKsrkEp22ixm1qobc5uS1i7j7HPETg5AdVHSPMqJwE2VFXuzArT4z1dmiJn9pPtkc3NDwX",
  "key2": "32vA3VPrr24MeN63G7JCEAsQLxzUa7MKskqf9hJHk2zzQURhMaQRmQupE9AiEvV84p4wuHPZFhidhbvP5iozaUW2",
  "key3": "ZqYmmpcDDLkYmjynZWKwe9aX3cRq7Vkqz96LPDUEYot65V8zsataRrKwiNkWHXZKAC4W6p8LCPw5j4j7oUr1ELP",
  "key4": "2dYtuc2YsoNq9oMXJt14kCdYUYEoFF3z5JHgECiPTzxBgzJ75pBSo9oEesyYJAY3A192En15hw3Y8o4iJyS2dWXV",
  "key5": "3WFM2PDnuTsjuPa1Fr7WtuxrzXZT3zjmAv34Ev93FeAKFVYR5vx9xDQPgjayqTPxXec2bJ1idEykEQ4UYTry4hTt",
  "key6": "3msGYWqqbAqKRndpH7zo1EXWioLeDnx1NK6n5YdvsoFLyU3Jt1ytrJxm8YciSY2FW6yW8x2wUB1kKaWihm7HpDHS",
  "key7": "4Y6fwcR5fUKjSKQjXqxtsRvFLt4ouRqJPLhbivtJH2sWy75SooCFg1emS7PURhBw2gK5C7ChbfVKVKKDyDmHQ64T",
  "key8": "3nvCRynSU7WEeRij6Ux8ya59DEaC1sxu2jpdpioMNen8GUxsqKJnqjBkzdHLGNBtLUofqGgPEe8s4RimV9Etn9aK",
  "key9": "5NnyjQFDtKaaCbDMBypA8hqMgnrzHn3MuzpwZXusbEMwKvBKB9J8mvqZZ9Exfj9v53THtYEk1SuPNSeVVSHm5r6C",
  "key10": "4dcsAtrap5snLFE4EdaYoA6z15rgmfYbkywEurQbDS8KkXsdRBTrBpYWRDHvApPTtfhpyqxrGeMZ9vsihBQsBztA",
  "key11": "B1XtmASfJHREfWDmTgzXXKfdMwBMu66Ab8uNGJRj8uvUAYJCjd2m3rpQwLXFL7e9hQDZpy96UpwBszX2G3djobf",
  "key12": "41F13vyeCcRnxuJAMAY1LoHXaktZ2XFB9c7THFJAwwNZEyXvHskRoXWxXr8kvJRw5oToD48xrG79z5fUofoxykX2",
  "key13": "4pcHdRS3KXkVEyi71WrnRQDQew4pLrZn2RaAXUFyqpFFKfaQTD2chwhr1AHvpqbfTzcRaeu2HE7FVCjemNpnwC2Q",
  "key14": "2zT2zMEoSz5aj2EiLmTQvSrRPA1vY5r4ZkAWJGzFzLBUgtwh2Qu9GvLdqAJxtryZENQjh6FscsCi2xmkt4iRnV1S",
  "key15": "2oSwrNNB91M1EExTDePcRWUcKDprKpNEiQBEz2qtS9uxcH49Nxb86saY2SjVjxVSCUVqJEaq9f6KSs9As5X2NR7U",
  "key16": "4PQTif5FqFzeRvApoP88J6w1rTghSD56HErbyv2Mx88Z1vz9KWQeSfweHC4QAacCvRi4eCSSCiU4YfpACsmnSTTM",
  "key17": "3ExmDWziXWbNBKLcCiDKADQM1KeoaYekJq52dKTSW7r4G5kus2LF1za1maMGR5YgUxqvohotnWwPn36rr3qPvqTV",
  "key18": "2P3aWKsB5fXouY5ET4oXvzHDdVwiizJTsaPrQyEzUdyzrndYR1vfLdyRBuaF5GRhKBPc7PYR2km5wbgy17fQiu8f",
  "key19": "LSYbWjUp32qA8neabMdmZeFoBKAZHzCAnjznmuaYgFfUgpGXyAQMCTHXEdknvqWu4XXQZwfWatW9C3wdK4SCk7S",
  "key20": "5Wpyf1SQwiR5Tme1WvvmphuBA8LdPJK53tjg6ckCm46SzpnUoicF2kKBJLiNsg6ra3JcfrnEHLfmN65t12DuYuH5",
  "key21": "5JcTeSENbrr1Tup6PN9SFsXLmVtR7Ps17kYwv4ZCtph9n9RahrBgbCpHGxJeotmN5mdP4YqwSeWafHZQxgKSeBfC",
  "key22": "5y9syz6atCLQ4bYpeWNeepxEAuHAikrzCpMAuWvZLKP6mnW47ed146SSCRFpLNGUgdDxMaTEgCWTueWtsbKkRTw7",
  "key23": "44ZGmwAqDwKUdiFDiGi8PiqB1BKmhYyGdNbh9KauKxN4AtPfvmfkZYAuZDk2TwcytSFdYy2TdG6S7bGezFAKMN9r",
  "key24": "53Cjs9cEo5tjrrM9zC86FCaskbESoWmvVnYYaNL1v1WV2E5rDaEHA64zKxxz5GLf9ggU7EiGeQkqogfBHVPGjPSz",
  "key25": "5dic68P39f9SJNdsNmpG3Z59fsUN6R3qD9Yysmyirg5qB1WAU3eCJJpNSpf9BGA5tTsKeH1zaiER1C3rg1QkxgRL",
  "key26": "4hrPSAzWHRxSwESdFnG8M35TuRmZrtoXM4b4tGJXmTo8xW55ihjK3ZGPu1sCC5aVuZKYdZ3ttDVUdB41NPYtZ823",
  "key27": "3wupfChDEoUM8PQhqGKBhMoEDnU4XianmCEa1T4t5fArPV1zAN6j6uw7LEAciQn2dKRjsnYR4doVYKpzJiPNzK1F",
  "key28": "6352DW5yP3FUYy6DVShVuKzVphsUBjECA6b5iCgR5KQe45CUgQsWJpqA31uiDps1uWJf56vDSyzvRqZA4fegKPGj",
  "key29": "4gVRkLVkpozrQYHoUM1CapExAvmKQ39cZGrrbBn8HZTTV6y86RAG9wgUsgh763NMwt4rE3UmbLBv44yu52CJktU1",
  "key30": "29UpNFtdTxQe8xzh2iQtYVyM8JRtbURtNLRPGjiHNsSDZa4nntepf5itvGrsikuz7GDwh8Urv5vPZEawsP12YsW9",
  "key31": "4t2sYSY7PJbqTbCov45WbX4MLrePoeWrhD31QzQSGxvy8gQgqszKAAqvJc5tqbu3MSgCN729QwJ4dQG9TKAkhxY4",
  "key32": "2FFBcY846Ae3iizjDAP1mmHeWaG9nLigC7fCSeinEouzD94SnGoTUT39FFBcYNMwCXawHk1uvLBx8iePKcpy25D8",
  "key33": "3NmAJJy1eALuBk3Pwu5wTCJx6fKrxdbAymHGpx8fCFnMHTh4ZCwbXwUSWoKMSXSnzkCb86Jvio4UWKHs3kZyzUWr",
  "key34": "4ErVJgFi9Az3zs4zyEeoznSCBSgeXeymqfAt7weTAc7yPtRv88W8Q8htcEss5zQevYxmKqoNhcr8WT1CMQ5jTwrD",
  "key35": "4WLfMgeF2soCc7VdW2G71UjSp9qczdQUs5BHpn2TSZfuP3BQJ4WVLVLKrm3JPtj6BoXp5Gr86uc93fEcZ3wTzvyc",
  "key36": "3deaggxNECXuxxNiHCHkJnFpkaj7JkhFqCVL3Ce3nEr1f5EMGXtVudRVsoixYCbijSLnJroAVL3UxwB2vDdepRP"
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
