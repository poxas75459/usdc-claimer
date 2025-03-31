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
    "LAz2vxZDeZw8S6PKTgZyq95CsNuwzjsbPPvoQGrnWNWuWnmyuF2HSS2TiXwcbbMraXV6DcoXYC6bu5QEJv48KGA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rEZcNKCp4U1ojFwuhjExSg9yBeoHwsaw3NJ3SZj6RNnx2hFPcku8PdpvQgwfXeVnoWZXW4JtthoAH7D6x7LrMYA",
  "key1": "4EFckp6yE2MQpau4S8QfjKaDFYeDiEVGyCMcJoVwikv39cgciWFFFJKkqfc7ELJHyPRatPHZbjbpEZM9ma6WC7Ja",
  "key2": "2qYdjP4EdUHJKJCufuYSSLTv7SoduNZdBnVT76w2DBupHxUApjBZci4XpNAPou7R7gCuy5AEt2MVvFiEgHkFf1ij",
  "key3": "3VHwwmcnBRkBxT9sKjZfZ29ZcZUyXv53eU2Q1sYGniDvNHDY86dNQXEEgndjGijRJqWpz9bPyLZEm1RAEQWh1V8X",
  "key4": "KFNbtHu1QhvReAVerxdjcYrLBQPZSNiD6QQDz6d74LfKoXvVf7JanjSMa8yFJQhcb2t4Z81DLtReHh5noPEmHZG",
  "key5": "2L9AZcHFD8bB81GB9Kw3BYksDN2VyRnH2vBbJM23XYB6BppPFSkaqwDHrpny6G3dnnVdocP4XcfUpWrgPS5LvU4H",
  "key6": "48ktAt5yjPBW5Qp7tFENtzmvTZjhwrCgVUmmCFMxKAjhMgJsQgp7sS2vTrB9MbNfngEA5CN9o5zWZmuvRCMzmyfy",
  "key7": "iNwL3Fmc22oSYLGyM8oFBfQZ45sYTf4pezrUFnubAQAfodF6jTWTgFjHPyTHTw54aqDqJt5sbKVdEjWiGz4cAyp",
  "key8": "4BSF34UXrhnLpScNi4ciqkFdH5mjC1678p3XiQv3suxLJvq4oEnXQHvFQTSD2og2tXx3Lm7SrHb8dxrCixdevFFf",
  "key9": "t54Zrd4PmZJgBEfNyGNE6UkhYz5crrrWHnS8uGnmMiEMJMwsfEDjcKUphk7Vktne4fRGyyuNK27wqLZYobcVjwE",
  "key10": "QP8WZtc3fB5zvMoq2XWspX4tzn1M1PhqAxPeuuu2xs7hZk2pvoUQdAnzWUtCMGccqyE5FSkMjQ4DDwBYnbo3WZH",
  "key11": "4XBvkFy5N44QsGrkd3FyuMoxupavP7wBQFZkiFzubQSZM9SLiirxfHExmuGZ42wcqnE87unmiBPbbkCw7B9Pzi7M",
  "key12": "t7AkJAzV24J8n3QMjP8q52zXJPN2e8ywLRJUryxmjQ9GNtvWtN9enTmbUnuTnoF2SJ11dXzzS5KiyUBCMDECjp5",
  "key13": "5EAfRXzD4TbUeRSkaiGK43WzgVUZKA398kD2eYFiUmvq2WAYjdDApa11gUWD1yFhQsxYNhBPcnZ7mZ4Z4MmuNEEF",
  "key14": "2KLeP8VM4PPisFjsD46EDHDLoAjuo1XRZEyyJfSvHUXnk321FWoL1mthspfmCFsfJxFQ5MFDskPQMFN8q3ysCPRT",
  "key15": "4vrg6oDBZwQoYRP5KicukuXGbiaq8YhpDFZwekBMxc5akWHiNedM5eDw8SJQCQRGYEmQM2r5kiiyGyMb1djtwKSx",
  "key16": "3UJCcqmF3f2q2zcTNixpfmFeu3o65kb8J12wiecqS12AtWxDWKPKfFBGVkDgdmsTauwmpExXzmpUbRjhSoNhfb5F",
  "key17": "2QHDTgNFkVd3kDj3MoFAFA6oLiq1CpKcfbeNf2bmWmTUv2GL3FaoTWa9apzZpQ38BYn3ZnnTbzsVjNUQjxB1RDDo",
  "key18": "3SywddQyziiRrtRMS42TnsDertuBFckeoPQtABpCQBHQoMqDXHZNdoBoeqcd6JUorBAr7gcFGgPjVckgePvidimH",
  "key19": "4gkL2kLRQjev95LQGseeZ8dyhf2m7Sv9EN5mP7oFnps2m77Up633JTSGfRPhEXPDW9dGHLvQxY2wjm1Zgi1NUijQ",
  "key20": "5JJ89fdLi8DPDLJfxoLtZCi52P4Pu8jkfmBH9KptPg3iQcb1hqgHr1EpZ1ZFB9fa3AnWsfHxPNWDqoC4xk7pMRMF",
  "key21": "44qEfrUFe86DTPvvtiGC6BzCZDaJpZ7LqZNesWdwkGMsbsQem5DHPH8XksikKadqDMx2FJF8Z45SAywbunuUA7Tg",
  "key22": "29FoBAbJJ9e9wjkfoHimVpzks8YWB5z9WZZ2xkzmLW7hLWRtSSPacaiYTXDT9KXrjtKYPRJhqcDKiM3SwNapyXZY",
  "key23": "2HF3keZwgiFWHNowC6adQzBWV5t4hRFi6t2EreT4RQGcpWtg6riZsUS76XiVtdxWa5vZfyRjErAceaoUDJT7VCjs",
  "key24": "Ja5GdHDBxxo1zZeyUgz9TCJLMProQYoYaFjiv81anBF4HffrcuzbS3VYALUCmgupeHYxnyPeEmVSJFUoEmQiSG5",
  "key25": "k8yaNk4nXxCegfozfmo4y9VZ4TdU4UDjcFPtP9taMUzmZ8zHiGv2U3mPLi5rbNS6PNXfxWEwK9CdRw9hZggj9EH",
  "key26": "5Vi7RWtgyQFqY8fDSgmsP6cE4Du8wF8vEWUddHkv64WQ7e4fWJbQLCsThAz2QqeGp36CWxXWynMNDrknQq1rGodC",
  "key27": "4FG7QXfqUVc8BFC1nsuX4X4V1UemFmZiNtQ5JY5HHFRaioFEZNjUEvw784qMJY3rDTcuq2o8Act56UcpEK79z8Qo",
  "key28": "fQ3rzCMWGdb5LhN22nYGHrWpqUqygMHq9cmcxYefFKZGHhtr2YbrmqmDX2aT6HHEdKm95PCbUBHWBa5USYhmJcm",
  "key29": "3FwM2d85JnUotaHZenUrVvxbtztoFoSiysXYrTgC26RrDpwQFPxTfJqgbDmfgivuYxySQ412vxywC5KeJDQNuTEj",
  "key30": "3EFnCZ3xcqoyYsw6XSfbd2UPjF5a717KeuohRgQFm2fb2oxij6HZ5e2yc1vMfjJHG8taYzBQwEQjL9cYJWWMc6LB",
  "key31": "5ZxQkM7HzKxdKC9zCivS3bbUi2UBUvmxpcu9EjL6fQuub9oLgaJpYLwVcRgwWsqx5wcErr74qo5ruvwGr6WXswoe",
  "key32": "3MGJz7xtkFA1USK7u7YoFP34ujt59N5U8vwiW8gsF65EZtWVmF15r9UUhE4VP9EkN8vgiqGSAhhFkpHqPrj6oAs8",
  "key33": "LG4TNKmsBsVxKYRNYvkCnp2x1bduE4cTmhrvzLW3EuiVd1Ps5fnjxhVZvDvLP8tsaRgh86rocTeGEPfeZYeBSD9"
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
