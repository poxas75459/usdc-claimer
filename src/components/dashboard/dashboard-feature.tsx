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
    "cBHSvXxHo2XJdS8QXycjKyvQhiaJKdrB5dscYRMuok7GTbqTcDHUUuoWR1hAPvZUScjiHAzbRJSRHdMNo1qAqJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26TakvEps6ZDcCXoFQvscRrG8Cj8XzUiWUmHX9wabkjP99o2vhdLjPZeJtr9zCeegvQvVzxeyhWG4LWtw5Q2yZ6C",
  "key1": "2KNiwqPX9ATUvnxJFjXFxX9j4qFJbQogTN1eEe6RTnkFznkisbLcmG748H1rWxmdbbf1kp6rivzLzUjWpFXdW4yU",
  "key2": "a8cNcVdo3SbJFrVvS9qHjzNuk8prNuW9cBU69b7UfZCtA4uZbLUAFBVw6EGMSebTsa4pvp2zcvDS4e7hu3SwyGv",
  "key3": "uvUUewaFAjdyEBJ8D8bGyLZwJmWsntG8xVNrvBbheCMrnjZZhEciHZ5FgCNvcmFs7b1t9E5SWgpuViZttjMD67v",
  "key4": "62hLmjHBRwvWeAcDmbVY3ot4RGhFhsN4mUQjPg4mfhXwGRyzmRPJZbSDzFhTq5xHVeZfSP8dNyqLwEB6e6fwfgv6",
  "key5": "4vCRMmQV7VocneBLZoSwHnTW34mkz2uJ4bofsU2DWRbgMkrJfcpnsSqCCNXPVwLYuDHdd1xutv25zA8Y4yNfH2hV",
  "key6": "2uxCTH4a1m8c69vcGohpFc5PjESeZnVVy4enp48SSJ9bve3do2Tg7cmR9wLCq4RV11N97DJCXygaKayEgTAYoVfp",
  "key7": "cHAHip8F5ahzGJfQsdPaFFuojbsUX4ZDAoi12bGyVYQWqP3kuAuY3vihPbpKQ3LwYJfATs3GuiBcoD7jTtiU26J",
  "key8": "fr4mwDPsV5GvkQEGSAXncp3XFEDRAYSAiFvXdoGTWy7xNUenvSxMFKxUdjD8CnWAnM4rPaNCrQPniYXHt4Df4S6",
  "key9": "tBnxnX3ftZhe26XMPRNwuhWB2BK8AZ5EbVsyuRWyUGrXtGbZFbWd6kzsicsY8SZUp8u1LYjHsdDaqoV7stuo1HP",
  "key10": "C8F5gzh332M9BeeRmXbY4ujqqvc5dspzJXFTAv86pWvat2eqPH95SaRFeXdHYHSsM4Qa5SP2b7QgWqF13y44PDy",
  "key11": "cWJvo65oe6phveNvyNC7tEV6SaKXT6uFJHwB5jXsdSK6wyQep7Y3VgerbhocD6KScM9YGFF8wG65maYq1iwimaH",
  "key12": "3cLw4qdVMfRi9JSTmQdpc6D7Xo2NPq4v8ZVQXaYX4AnWYUP9qLcmaEBojJypXHh8QF8JbN8KqnoVDjcpPdw1k9RW",
  "key13": "29yJpGtTFXUca6vcGtzToS4FU9BiuMf1JRgfLcecrqirQ6Z9v8UJ3Jg3ik7W7WXjVFjBg8ftCGerQsX2yJTeZujB",
  "key14": "2oUgg11GF22hBvSuxfiFvVjCfrRfvkHnM58wfnbh5Q8UCCevjRZoth4jtTgDcJoyRd2nGgnkhkPRbpm4gYa4c7me",
  "key15": "2yz2hZTjfHSAEhXTmqWb59vHVPdLmBCkGkKEvhV3F8posr3r7GjWK9YoHDAcsmENitPFs4i1je8EaQP4WYV3SU1f",
  "key16": "369rirWJD4ip1nQLrdEgZLZm86hrt7aXF9aP7Sd1w1AWdQrMS9nQNkMysJP9zC2fhrKyhg65eSL6iSkyBPNEc9S2",
  "key17": "3JE9VTqtsk33UemB2hHzNeoHwyi8AqGcMYPMdCiPU8Z8cHFxUsViACFgEH95TpZa8S4X8J2gU4SN683zk7A6jM9r",
  "key18": "2RG4KgQiAkTbhnuQBELqj42J1zyba8Twe2VdgdvcqaZq9RAcbcUo8MBW1ntB6HmJuEfSSTxWEddSSznXwwWsLHGX",
  "key19": "UAujN5TbJ8hRZAXKfihmBFXR3RyuxiMBwWXV6zm62YbzPgcmsPt6m7DE1jcfqU4owEGVWfngtajLannYNdEGSn6",
  "key20": "3pJDBb5DkJxeozDVdqhDsNofWqDsRR9hCb2WShvfBHbPCiV8jQWJCq3A7KhxdCZMEUXMcqfQrrBR2NKChpEXMKVp",
  "key21": "3j1P3ey9CsV6tQU8k46TzEs5ofyDcFutJY8uNsJUsHs3rC3KqyBYHGBjXDhC9nudJ1uMAqGudMZbSFH2UstoYPbt",
  "key22": "VX33xdGaB5Zc14xiyn4jYm4QzNTkZYLR1VT9o58UiJw2KavRpanroec7LuiXNJA2NfEjqPWVQ3M48z1cHhposGz",
  "key23": "38ubV97hNr3tQW7vNNAwV71zqMWhL7Kp934eG4C945JcVe24gB7crhcVEgibM839ZDwhcDPdPthZ16w3WgaqrC27",
  "key24": "2HRrQ3kYPhPMgAG7Fhv4PRkP8ke7whonKKEtuXx2utkGujPFJWYtAzo3bk4QKG1mhRU5yDWngPePuc76aXH2TBvu",
  "key25": "naKC1A9wzMqibwfKcFRG1dKJ6EyWTKXxPbmt1bxmz4heB2Lx2xmL6vedZAHWqB9Fcunc2VvAT15r8E7bVT4eGgn",
  "key26": "2fjGBPfTXsPtdH4jiBX3UXtCJm7rSodsjqbtreFYri4zqYw6DWF7oQw295t1GR2mnXKN5DaQdBYzApw9bHnB53v1",
  "key27": "5HiHF5NmHEWnZmL9rYA3n3gerj3Lp5qviB9Bc3gLLqZZMxXKnT3Jc7kTt9pXxZxgt9cgRedxxvuXtzF26FY9UDBb",
  "key28": "2DajxRVvboM3XSwzr28zT8zCX3QHs3RcuPK31nHvXs4aGBUo88dLNM3Tqc8ychn9yBsXQpwBjv6zaoHaFqJHUMSW",
  "key29": "5B96dXEXHag1G1QptYTweHDehAcUYWwk35gEXQYuP3osDcx4vpWbQ822VLX3HrbTygDairxu3wXQenJTW8sbSkKZ",
  "key30": "54x7Ghke8rQf8imCpoHSSasW4k63voZ7gf7Ceq13K1zAB6JhrCM7vbjPQFxV3oQRb3SNpG6v5NKtwQjRGSJMds13",
  "key31": "3aMC8duQiyf9Ku4tt2NcuNYibzPD4CokJPdbqQJYBqTHeEvU1vBoEYZvdnXBJP9VKezgkSKxBHdcuYhBmMRrEme2",
  "key32": "62vaSdJWP1di5bNq7GrszzxMuNLPjGvWBS1S7k14Y1fnn23LcCWGDFxZ4PtNx3U3QaLAMWyTcE3riLLedkeX3Pp1",
  "key33": "o6JHaEREejUs9bDGFV7B42cc68dskpBo1G3zjCjXskPDu1e7RiRNF77iH6P1zuVveacNUeEMQyN5iGa694vmKj7",
  "key34": "2wMFn6m5LxGyPfjGbxA8VoiTHewsW1awCRbDiezDQ6KNuPKKDTHw1CSogavjbxDGRe2EbWQ3GV595zXPg9TmAcMY",
  "key35": "4P5nURDT5UHVAG4vsjAbnJmbYsQZPxyWsy2GkW3pVgrNb2vDMYxWW9br9HwGAD7PmNwDqBdzYgqqLGeDT6jkqbUZ",
  "key36": "3FeBkYY1JZGeNb8YGAkGSnRXHSM2gZKNey2Qyrduduvq8hSvFKcvkHWRXgcG7tTVj4hzacPkRhdJCGFyZjLFq38m",
  "key37": "4emTgYvLViwneKpjvLvr9w8vn7RVCoCrgre3vQLf1saQZKfxMkHgFsZBzCpuegN6cZLaVYXgbLWwCc6WvpdPCHNJ",
  "key38": "2EquHbxpRd5XGpE4PKqeToWwFqGJmkKjdyDXbSEzXuwotGk3Go4JNgkFVu6d6XX8LHpGV1CiPo6yZNjmMj2Cye3x",
  "key39": "2fpRNoKPHURT1Uss6dBKgxxeFH9q1M8ih8Thiuprm8NnmtUtc9U4UfD35699o96byfJ2HhPrTyUTKnGj1gxCkKdu",
  "key40": "2wrcdgk7pf5RpeYumpaCfupg3ma34T4vRYpW8ZCLNDJG9WRqEvXUE7gaMSPXkBR4Wff8BkPkPmUqeb2NHs2PYAsa",
  "key41": "4mhxdQJifL8eC6YxsXjLHVSKLwF86LWM2qoiPK5y3pkCZWotbnkxyM9eKY4cW2N3WwASQmdL9WvciGyprHtKqANE",
  "key42": "4Lc7eGpdZTkQ5RDUKRQKDS9MvG1dJiP98UAcD5sZQLvF5kbPfMjqFSsknbGfbxupw7tVHZM8M22hU6Ai3L9e1rMn",
  "key43": "254GYC5wMsq56aokSm5ptJoHvAahy6eF4AdSCwji5uQxsSasXneWcWY12nm3EJNnjBHnXFtiZ6n2qmnEDiyyDaHR",
  "key44": "3SJwzLkA7VdDGVvkkxCwBaeMdHrcZMTrXpKFqjBz3ruxzmU3v3ZGyBr26vDFxXk8Hr4CjodtQv5DyQh5LViYgquj"
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
