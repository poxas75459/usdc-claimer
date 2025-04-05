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
    "34KsHQQ2jnD5gVFhw2UyppUv7yA3J4xEk9ohdJSebmnws5zSbr8wwy5pZjjXAniFg9au4rtk7JCL3xMBPoLZkEWW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3faXVu3GArS8aLq4GNLd2UenbLzKdVdGhiPp77exjpyL9PNK6um562SuVSi7cEZuvKmKiepkPq5Lt6EtMoFZC9L4",
  "key1": "fQgc1nwSmwsmSkkrgeCto627Ybzev73aDWvvgCzz4u6Kx5KNaugpAhDdWxgwpFpkByZ5ShpnpVKZKGgr3dcvRry",
  "key2": "3tkKWJaidV7G6z1i3bjJ99wvhv8ZjUX4PwEGZkgby5WqUQEFtAcK8rhspqPgALMLoYXvUivYsVWidEEgscqDsUQd",
  "key3": "3MY2RigkBsHXvZSn1du8GzyNmvzuFGnj7Xng8uQ9hZAJjimsDpjY1gYEWcZ9sR6u7ZRzXYhw394M8CPyR63qPhzz",
  "key4": "41acUjcUEAK9cj7i99wZe5D18EuzD57TpNRrR3yaGDMiBtioYGYnUeinCu3ZijrfiGGKYiJ8ZtLsJVrJ4MB7voi5",
  "key5": "3FtD3xBujFTFHvVUhF9sYmvNB6yDWAgNxTLK3iBcKBJTtafEuaMBsFhfZVcUYoet5ajiEUN8PW1HS7E92dcPGiBt",
  "key6": "5r6cQjR971BnSiCrweRmBrENcwxRvcdKDjNvPPxNuVRReQWVuqxiPrRW3WtmEH8PZs1WbzzsowU61qKmP5xt29oh",
  "key7": "5R1QbfFg5euR24eGvoKh9iw5czsCkZ3YHPW8Sm9NFfp1vCcJspsnknWETXbbkznFEJF1hki14GozQhEZ6tAF5HMC",
  "key8": "3YPyJ4SKvovXGjQfz4KxPjTc7yzNPqxBRSMXrQzwuTtxa6yiUQUoP6cDD5JCSUZ9NqRxeALJ75fBU5mF3NBtQ3jw",
  "key9": "4Tao1C6JLMEPmZUqEgDgaZZpc6pmTwkogAaS8tx1WxFn1xnuhMt4QiAwiy55oXcyGGEje4b2HmKbuWGgpibcuhs7",
  "key10": "4TmCqSZwDyXzPo4SNaGuwFodjSrpfCJobVgskKqQxDVxTHU5AcZP5x5jekrhV6XwGJ2exouNWL3bWeAWWnuE9Boj",
  "key11": "RfWEs2zCVJVADqibE6p38fR73XusxV7J9iEus4KPDTGBsAEn8BRLSf81LQT9g7TRBKL7uoypYiim85Mz19iMdry",
  "key12": "358657d8tAKkutEKtV6Q7bwzBySXj5WUnD5CEB2hdvFJcevPdpbA76jaC37VheVw8tVzvLRC8tcg5PCRDqLa9rhT",
  "key13": "47496xbTCL58rgb16YY6A4Vbr3XDo25fSQKoFiqZXYs7xwoFqyEaCzmPe6WgDZZVeuQycMNsKq41pLUP9a3baCgN",
  "key14": "AeVSdQPKWxRXnMCVr758j47sCskXu9wJxQghfp1gpvS4SUMTedF7DF18PLyYNUmVpYfyUjGVyGnQBbKCbHdmhQp",
  "key15": "ojA8aaFuBvHLnJTv9B51dsbdE4Zn77tPsQ8ddaH7GsAcuUh1FwYpPBuKR6UEkxryaHWRfibJgRrQjCJy2h6ZJrd",
  "key16": "4KMmZYhfPhzq5CdeYVmZg2visgz1TUM2xnKNmRn2ddhFiEhcn77Va5RbDTui5wjfYKMTDtCoNdMKbc5z7Hk9AtJZ",
  "key17": "2DdM1yfFghrSbQCaSc4TRiyvdML19if7YHy2nzmcmiMdaXsGP8HDuWheaaCWbmKDpH4a3mtvuKe6xgVTzCJHKCZU",
  "key18": "5pds7aVx58MLSQnCPYd2kqgR55Bd62WRAiLxozhRJJiR1CjYdt1HsSwixoxJ4geNZaWPv8QMMaupzUuJYH7Exz7S",
  "key19": "5pp98f6aJ2Tx17SYeFZqh68z1rZ2qN3tHQsPFFwAq95kWtEqQnFF92PDQ7gR5huDSpwMtmY2TpRCGHZba4mLR8vs",
  "key20": "8yY1r8fChT4tcs1smfofj4DqK9mR4wD4xK1HPG8pPD6n9AHMLx6rxB5nGCqLA4mGNBxfH8AUZtKqFmZEeEnEaLw",
  "key21": "3LazZd3eBgd84SwT1NT9wQyPoEMwZmvidKmChoZxUdgUKi1oedux2pmFq1HSWSytEDwoJVtAR7kA5AZS6dmkqmYb",
  "key22": "4QZFekrhKA67bRpba21BzW6JXQwChHQZuWrUuMHEB8QkVUWj3abRodGyCXUF2mFPrQHbCkpm9PynQiSqDSH6CYb5",
  "key23": "3WARE3qWkp1J6n8jQfB9X7xvTrU3Cx1qpVuSkyAFjayyHegU3do5ouNRXT9MBsFPCVBuPYKPYhNVyVRQ9ckAdtja",
  "key24": "5rbwkSVAQkPJDDEZ9rRVm26UA7SRfijors6t8nKoN35GdiJ9ZaUjLE8fsGyJqResocPbVHiuY2tKfna56ZCDCb4y",
  "key25": "4j4uZ8pbsLCPS9Cjz22B5noYtAhhc3qF2TC5sJdFkYqk6uA6zfNRaKuD1S5WwRFVMiPdjs84ADESzTFVdaNcRWLg",
  "key26": "3XWFwwUZi2tjgdHr9oREdyF4APMTLGmFL6eJEvYeqszRkG95YMXsAL8yYs64UK3dqgad5Wnj8JEhqs6EyYYju4Si",
  "key27": "5sMWJwdU6WNkBGRCBs1Bbnarso5oxGQvjXKAZzis5oditPsrLGVvonSHYphnAeYV3NJGWW6eG3VNkf9mU3BFiQhi",
  "key28": "492tLDZzdPfCMYrkYYsmDCEGfwhG5Bv9n6Jd3RSFTdfREKS7oirFc1At5bzcYFSXuHPp2QWsM5fEYEiu28XiuwNr",
  "key29": "V3vegPNSryqpV8xTn43oYQoRKSBEkSAqavcC7suHtEPm3ocsFE9WLoDRs6AJTP5dV1p1J8ABQ393V6bCpuQpAVv",
  "key30": "kY2mTUY9723cbfedwuipTK2A6mE1W35wr3vAZhThf145XuPJ917ToC13eLfYqC9tZDNgscv6Fz3M5fGFacHXfFR",
  "key31": "4P5kPHUqTkgbCcni3G6gsdfYeqcpVzGNns55L662wyCfwivjpuAwhSjLnJ1cddL9UaLHN25G3xZ8KFVMzMHSckmo",
  "key32": "2jENtNoJi3f4Dq6VYB8ZxFC2p6wqgXLXzVtJ28RoWC6hzUQB4T9RgH8aNwoKjzr6D1NPJJ8pHdqeoqCHswvRkxAg",
  "key33": "37Bajqgh4Dh5VExgufN4d7RHTETE3hcoJxSRCgNEUHjZuAtMZhzJFuxqgSpWGsdfVwJPgMSqy91k7qRWjtRt2cSd",
  "key34": "5tN6xs9kgnxY7qfghKN6eAcbFBbZ6BtSbDNDrvFfDUsPnRcHTZ8C7fKw6crndhNhhJwH4yXC7UXBicrinKuNQF6w",
  "key35": "3pLDb7yJXmRVtZWeY3vyDVqiouG825myguXqcpf9wTY7462zQ458BQhxTu9WMjbkywYyTzp4N9NCHhSNMtLckdSK",
  "key36": "DFp3QABaYgR9LCxeyz2oDPR46PDvceibpJFUg7rhGxstaWgncM2g3jRSaU5wi9Cn9CDDqN5veFaFP5CimWXU21f",
  "key37": "3noRBbezhmoaCE26V4NSJvgMkg47kER37jPd88HRgeRs78Gf3sWbgjLuiA6XBfoynF24pctso1mvoF6p9FH8HrAy"
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
