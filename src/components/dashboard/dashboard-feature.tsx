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
    "39ykaDfHLgn6v7LDjYCRnABH5m41zhm6rYMY2n2rnFZDQyKnszobxMi9JkfVZNef9GbUVMexcZ4evCSAdsh1rdsW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vS4bGfaUYcgWMbVD2867XwBSTbfNEHjKV5Jq1greqJcTEHkzsUK1fi1Bi3fAv8L4uSPTr58k23FX8BbNBnVk33z",
  "key1": "53aexkrsBt97dgDxyT87dreofB3xtp8TnSVxtqTY5MoknjJXnC8yM9F9aYMMfZwz3od4EefX7ygYY5YsaExnLC7f",
  "key2": "5rhYVFUVgiSNoAPtPRv3n93ZCNr41kp2zEE4NA6C8TJs9zbmFCeFhV4mja6dWMTvAwTupeE4KaBvwVTJbDquC15R",
  "key3": "35kGKuQ6hBPSn8XTP2oFv9t7yF7Tbo5DYi9cWycRVFtpU5pB6q1CxYpv99KjLgGo6EobTiSALuHYaC76f6ipgJKE",
  "key4": "2mJw5soYztBiJPcY7aday1BDjVsf85QtNm2JNsikkfEdTEjotEwA89BxpE4xfnejXvVH7K7mvHEobJ8TsXVaePum",
  "key5": "4gpW65sD9nkTLExLDEFSyAaKQ17tX7xhV6tqtbsfxvPvvTJixyPuYb848KRBBbYybS1UTd4qb8fpQiMwEfLqtb6y",
  "key6": "5uJYu67scZN39gf3CcUvBh8ybKrZviieMAfq1CGnmKq2S8692YRJUEMBu7MwTZASiWPQpVpBgmJG4dcuKNTuiHxA",
  "key7": "2WAaBSTgrNUiPsFzRTHPhPA1FJHUaa2AsnD2DfsDiuuvfWr7T5VBkQtNw2zpexpxUzoDcC4tx9nUpzyseLH6tcke",
  "key8": "4xVoETwLTnuVKEcabFarhux3YHbf9Tn51NTA8BGdrPXVVWMCYY7jeVH7eVAxGBS1t2TjMyGsM9hL5u5MYF9fmF8a",
  "key9": "RWqfShv9gnVgETZyMTQLcJ2JBiPnCRyeBguaM2y3fxQLvHcA4pg3HJzPchponezLjfucuyPj3U6LvsdZRaiqfV1",
  "key10": "2UEveJCCo9FVHJv8FcYAKFzCycb7HLqNxQdZAVzPgVDL5XUHiGn8WRdj4zigCgGe2rcoK6GT6xc7WN6Lw7iVX12H",
  "key11": "2uU8GRWKjSaWmNgLJdT1y3P8vCDpyzPujCjBjhLP3DRVSDrZrEWTg1YBewDkRVWgzUXiE3nUZyPd3fgbi3HRZC4C",
  "key12": "56DAq92dSoZcTavjBf1ebbfSpMN2WwokcMsGXF5SmBTzgHLwzvdVeC1Dtm938LVpazYu5d7SmCrigWQHEvWRquR5",
  "key13": "49QDCt4A6F5dHdkzfKSwoYqgYtoMio4NszymU5bZsyAGtSzziYQrXSxmrFnx81P4Jr3p3CwqLRR42BPp8TNGsLRU",
  "key14": "51eMbsuRbm82KPZFYPg2Koa2VKgiNfeH1QGqrJqqgzZZzkwfJ4U8KJAMLk4tpMnkb2N1Nt1w2kAwxKhFXiC6RWSf",
  "key15": "2JfMKHWqgPsQLVMMeW99ZVKxhBAK6xveMjcgvwhSyvynRuX1ucwdujfYGewfcd3wwFexs5fgkPtkuVXKvyNqh6ZA",
  "key16": "67aDTe52YhkoFS8mJgLW8dYFf3Y3CqLmaHycDTuw8VSA6sBSW9cRVbgozSoRvPUFJCaQ6t7yz6qc8U2duehQJ9q3",
  "key17": "K8WMYjKQ7rVkezY1SWeMpGuaW6NuoLskEdBTnptsMvF2JVAqgrzbeQWm1CMMovBHLcCWjD6FRoyXoSdTQqXtg2n",
  "key18": "3dSPtq4kLtMJ84QEpKcfa2fgkYY4s5z9d6mtpE7mzVaasZJBsEEhdabCb7dNg6vDQr7aRw6QKiYuBzcHbDZDcNVv",
  "key19": "aGYHkSZp2EcCqYphsfzzE4vG7NMmsxuoDqpP9L7ub46Eo7VZjxX1THfxChxfnJoK6BKWGRYWj4HgAi4dspDnTY9",
  "key20": "4wL9tU8sppeKZepdvF2wg8BnXCVFhEu5pdPwQpsbkH14HFy4dFYasDhsaFa1PWhiaNMuHVepTXssWtwpLLZUT5A8",
  "key21": "YWvD3rGmyoukcuHwSFGWxWj7zhXDZyfzLayZ6bqxFXQAMPcpEyMPKKte1b7D8bBbn4NEazA6bsgxbdumqe7xJ8F",
  "key22": "5JbnJfJWaThM7diSwMi25QgAUeB1K5osAjK9CC38YJ4qmbksGtuBAsHdYQtNyNaTAHYchc4ZT11jkhpTGx5qwaZW",
  "key23": "4UP8Jfx88efJnpk5ZoYftMfThdY5DyHYxSb5r4fvgWrofpkxrBkLeWwGxTXYZU7k3WA87BGqmPTHb7wMhBDQWV4e",
  "key24": "3D3c6mZLch5T6wCAs3cPWFrnzETDD47ZdDKy6PnFzom9WQRMmn6MHkTYorfFnauHhARfWpYRKR2JDgUQTXCR7JvD",
  "key25": "5YEzcEtcMkefLLmvBSkgRF1cAkLwVKjduPkp63Wt5aTzF63q4SmAZ56yBHdta7aYyFX4LznqUfuKEdPehsbU6xQd",
  "key26": "4GSbMYcmeJaNVPZaYbrySd1cRkrH8FpNRiKr9A4ZCJWtxRUPGtgnwn2tStqSo51bBYgC7BkdNphiC4p6Bz5VBH6P",
  "key27": "3AwUDpQmyFVHwZ6L9PgLtGVTHXe4Yri7xzP76dJyzP7BSxA7V6f6Db4Vrqcxdk4NUFABT3rEWcBg55ejBuGdHdVt",
  "key28": "YbaEcynFKAxmXerznhfkWWwUk45VXfPyYiGU4zf9YhTBgtPBNMjbuMXDJk5YGeVVSvHvJuikUhoEN7zfLL4cLYc",
  "key29": "5P1xjXF6mC5LHuZMrVN7d3B16eXQJQ7zpDYPkDoBWGrvE2bCzCiRD3REtZYMKWzc7KKMM7UAJjP1wJHjBgn2kwdg",
  "key30": "2M1xR1Fc9kjayviRs9dVoShnRArK7PtLfLbW4imEdF1LPZ2KKuQCaGt9qGRRBzguZkRymEc7KgCxAsYVgytkk4Ti",
  "key31": "2coeKuMKi6ifAwcJaw3boZTuNAVZEA7fjhXoxg7Ms7ikEMBifo1GwTmaTWDoWeNQ3YgaoM3fhoU5QVNQg62Pq6US",
  "key32": "Z7R1mRjrr1aGGRAL1MT6o7vwiJBE2vXC3knhuhz9KdN2rRQuTnkUzgcbj7ReesQh9JgSnBf9AJfcN5SJkTEP1yS",
  "key33": "43yFKNL15Vz6KPKRFd8DWzhZxDhN9ZSZ8hQT9HtKDKpRptB8Skvd6YmxjKkh41XLdTjW4VapATSeJx4ezJ44L4x1",
  "key34": "4JrZT6CMDQYnWH2fsvs4kegZMZr3DxwYyoD5kiA1giyRocNafhpu4Uqp7XbniL2QRFiogPgebwawFW2mdc4eAfbE",
  "key35": "Vi91vSSCpnbF8RA94eFBDQS1dBgVFymD8GPGi2DXVRPdMpjX72JQbM5QR9ghP8F5i9U7AA8sVLHBUJDH21y3wrR",
  "key36": "2sM6WWxPCoUe5BLHFQTiFMxhbi7P9YsQZw8N5cymvqWEdk7eWCmgMiw8GMFZonemMsphwDsUgDnHzjcd1XXLXaMY",
  "key37": "3XbrWq8Xhrv5ZsMHbtV9E8f9YhxnMLQZgft9XuKq27XxKrmLDNLeMkPtTcz1A6qHB9Eqsk1cNdohAcd13Jf8NWq1",
  "key38": "3aUk5G6F76NqS4Ny3ALQxDLV2dyt62PuHB8yXH3ghtxqtYvydWu1aGFWw2yroXBFqbm8S42oDLmvJ3jtq1ejuQe3",
  "key39": "4apwAC84cugneVbg2SYxaXF7W75F1xP6GdKBX73SXyzzTdvnRXkwDY3FsRaLRvwdpRi4VJha4TEvywwrtBfwZGY5",
  "key40": "2zPyKiVf3s5EWiZcBNhoMMPFT16pug4ugYgRtgkLafZXyvyCpKiWZPP9AyNR1A4RjNk76XDsEuhK46rPWEH7b8b2",
  "key41": "5YJanCsLyrrq252GrKCNvdbzFrpKJ5KaQi167ELvuHqiCJm4ToboceFfQkkbwxA5joLKvhvFNMSQB2a7TV5k1WzC",
  "key42": "49i8hW6i5Gfee2KYbVgda6ufn4Z6NPaAdsEFCc5zPAzqF2eS3pu6xhPEmxJsVQiWUHFHMGSDLwyUD8MnVwHqpQ6F",
  "key43": "TbMsCGyo4BNg77LfEkfQXi4nKcDUwWhw6gTVpEswmtFsG6LB8vx9Tc5hn7z7GuuuSwkHvEZUw96NabfQxJMqWZo",
  "key44": "2geGJoZY6S6ndKm8HgBiSUKxBjvi31GeKWjkMtajUvVSMwwJZC5aJCPBVnppDonNM9NpBpEmbEr8KUWTNCZdLNyp",
  "key45": "2yxSGxNaMMd3ZxPgrhwZfftcABisobeXhkNdmkuYWwgsa53NJ7Amt85XcM7XEzS26Txc83RAtBE13j6iM2AKijSd",
  "key46": "5r9fAxzDrChMmutUUbydRe9cCYCpsvP43shPdQefEKWAvHopqzEopvuKa5ihPoazcXCA9WC4zuRXqmjne4ntG7Ju"
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
