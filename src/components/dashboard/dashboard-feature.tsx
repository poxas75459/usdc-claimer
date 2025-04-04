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
    "5sa3A95iJuvc3Qg9EPnDVMKkfjXejD1bH4Z6qspM7kbZmy2y1YcyCd6uB3ptbcw3pqUCqbfCms8Xzuzvd3v8memC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZAkLzEAjFQocyaR9hYkvHzCZKph725y1iMrvPZe6p2ajX1EDMnC8AG5r2bWVcbdozsbP891qLfp7aoUKMfwB6FD",
  "key1": "4QXAvWptzGrwVWPQmHwdKwTxpoKrYyQQa1Hj22cjjkXVA3EhbVWYnwcznggx3rDXzAShsk6EanRwZs1w2FNQoDzX",
  "key2": "2UkJjZXAM97Vp6Hy1Tuewzq1P9cEqXKw9ox76mzokymzrxhhH9QtaMfyzWD58KZYpcAAmxKDJAfLqXsyA3bH8U1U",
  "key3": "3GftH414e9a1FmjrMrHQoKA4tzLbURxmeQdbkGJBsBeFf3KRj4eGwRbp53NqXMsEdUV33NFfDGx4QoQW1oBSEG4m",
  "key4": "2UDfEVUCM1WWZ7mhyT8HGNow1YxnC2C4H33dzTcKN1vK1YjBBVVDsj7wBaqHedxSrcchRibGhMxWiw8n8JdHbaCS",
  "key5": "24tmRTDhXWaTZLRau3Dqr31ZcYuQ34nhn4t5kyTsCUdvJMDN43fLGtEURzfWo2MnTtmeCL8cZwJN3K63KTkNqfJe",
  "key6": "5xyGHT8HQqQMNXrLkkrFYtAxMBCEjdSSMQSeuP6s9zgq1wtjVgdg7ua8wkYbGvUcE7wa9XABgx2X7a79RveYCGks",
  "key7": "4NZkP5pZ7KzuP4fGYkdHi4bGncQpKDZEoUUBmBoPBLeTMEi6n34hfdXqAqhLWcbgmY9vaaraBH53UyVnDBBLgUAG",
  "key8": "65ohEFDci8xhKQPkTwQyHdthVgkyBPszanKTsdMkV95wLhCPydDyNc41momush7rF1SRHD5353iF84pnpmSgNqav",
  "key9": "4quz7FzRpNUznUAbZJp9GSqD1r2L6c7mHVyZGyWMxwvUaCDWyuh4fp9CdaSu8vqYqn8KQUB52LSNHDGm3hFkKC8A",
  "key10": "3vP1Vq8zYgJGUn7cjGqeCHHokpz9gZu1h5oQdyyESNwv6cniQVAQLLWmKsV8rVUpcoE6eBBCykALwoP6VpRz5jde",
  "key11": "zEU2aU5exvq7kQfsKmJ9m9v9gwtAbkVcahG7Lzg18pfjbvaLxF9pmdfnNhVqr52LsoFCdMNUPQbehVassgXug1v",
  "key12": "ynbxGtrQEMPFKTmnCJtHdEx2s91RUhBnnb1nGEu5qeSNHpaAaG82JTcjrhSkMmNj1gPJ8SLDK4zVZYnDnhJxFJQ",
  "key13": "4cZzGxBPbQ9DQeK9t6L5vcDcKDbn6FUao7kJF48rNdvFQuwf2in2w4CMPqCPUyaPeDc23ZxC81CMdVsLzAzZ64jc",
  "key14": "4KNKWqqrfq7QkUGM98crtmuguqqsYgiypMz8EG1DUyCSRUfUp9fRUtLSBCb12NYbPi6Zs85pbJL861crSgodUNKZ",
  "key15": "5PRdWzo9eP3iX17NPXJQSYkF2HLZ1sVyJk3p8NEdbYKgJWWknzTQhDc65Jtffnvaow9dmaMC9TWf5qNfVHANq2Mz",
  "key16": "3Gv6sZbAeg6jii2YvsJrwS8mt4HGryPXs1ZEeevTuscsQJiyjJAHFf7iPwn2XEyvf1XbcNMWAwdegCV14uNoTS9p",
  "key17": "CXcStxkshFccE4S9n4MkPVhA4tmv4CxfSLzGa7uJGSSgLuDvhJ8aDDvWhpUJ5fekaohvFCBX89x347Y7gPH8bja",
  "key18": "3rkXmibxQPCKckoQ8UoQY6Ax7Bdvf1Diu9shrdTA24gUqFKbiTEtg8BNHvGZUi4Ao4EraUG6fC9dACHZ4u1ch97z",
  "key19": "2RB8TSSQJTaEKXRPyKvr6pAsVRzsV3MExbEycv2Y1xvgwK9VTEYCaKaNLrtZEXAmCsMiCYG4qPpTLJi32Vb8Fznk",
  "key20": "5u3mhhRZCK9zoaiZ2nikSWoM5cw5sXRJ87XtLMPK5tcUKwnAgpt9dvMhELsAztbpQLeRJhFza8dD9HEXiueT5Mu2",
  "key21": "2sEYMd7t2ERX7V33BbJ8p2b9xuzQVKovVHCbjGLkzSPMuqzziPcGhfYC4mJHodSfCv9QBbU4sT3S21uHT6y5Api7",
  "key22": "5XP8vVZ2vrPs7CkwyMdXRqFNSYrRarFuMXamThz5wrspNGu7485dZPewaDso6juBL9dAgrmuMqyFR2uoHSzNojn2",
  "key23": "3cRDZqfFgNU36cLzEcw5LkCotLFEfDNqHqBqDGzxkSG4NzB3H4oZbdPH5zGRAydn7CEH3b7h1Q86DvH5PkZwawPf",
  "key24": "48u7sQXZJAriZQ6KCwGgJrgn5osGA3YrEdBdN7jYTGWN8o4ZP97p2oTsmkzXRG7ZDo4TgSpKEddMKsK7UsPbAU4q",
  "key25": "5ohj8UT1LuQihraorV7EMJ9wrPzv67JEikjMZbFTfnNgt6Vbgy2YYkEnb2P2Q7Ls2zhDRjymM5bJTgG34YFE6pUC",
  "key26": "4fL9RgRtkgZWQw8Y3MsQXVyUf2hkdnna6WWgw6Gph3Lyp7e5dWKw3VGzf1ZD9PqMD5UcgnUWewivPKpSoJpwgiBU",
  "key27": "4aHJGYDZnanScAnGqRhQBrXtQGAMMREhkV9aGmcog4JhsyvM8EbRLmJLQii18Y13YZjz8qBvDuHGx8MKDJpUJuP4",
  "key28": "5qbHwiYcYpVyNG7547LRdQSkYksoxTZ6Tv4J8msWFDAmQ2Ad38cZbHcpGeJMcwrxzBHYAfDYzsW6tH3j5CkBWzVn",
  "key29": "5cnHMuQzj7tVzNh9o8et3VZL8nRnrL8isbG1VHuUd4w3sFUsVg1EczZhQqTo1UTnJZXsQnntDKoWXBYwBkPvsSst",
  "key30": "3QC3vXjxxM6QFvRDnwH8bwPjdoLmJZXmxJtic2Bd4ej3Z3eDXef54XoA7eytNdmckm3bjFT94yvFcVEixDmABkU1",
  "key31": "4izJSdiBz1oLHrimZZJrgVPNFyDLyiwopuLYUZUd8Kq3xoQqqxS92Rwykh5yRExFNzAGHsunywDLPbnTLrJg3Zyf",
  "key32": "2aZtMT1cu5gUz7cytfiBKdhdJdUjSrrDYFcuLx9yp3Ux8CDU7J7bMjRsr2HSZjjv2du6tLHx9Xx9cBKP5RsAP6Sp",
  "key33": "2icnQGToZuW3EwWo3iodTZPPCTcwuruHtTmHHjRjoRcu32SVFNtUDA22aDeMuuwzbgS1DcdvDdhb4Mtk7hmXQwbg",
  "key34": "5MpgjaQX1wr7ZuAUsi631L3HiAcqTuULsj2yys9cmjkfxcgycU5EawzsW2Jsje388w8wzn4gzFdBefNP2XJ4QGSU",
  "key35": "4L5fiqtnG3g4L5NkoYToXY9e6wMvnbkRSqw1HebRsKcZ8YKvxehatuPJiKtuBFWjDV6KpQyDBaABQoCuiUsHc4Qt",
  "key36": "2UGStBquVL963NjZPXaYCxvBuoLBMMvYFDfRDAyD6a28usCi24z7LUWuQeC9TNMtcHsLvawopHDUs9dFdE28srCE",
  "key37": "5DnpJbD7rWmst6fM7PABh75WyTYwuRG3togG7kBKWRXVzoRfRnf1EUYQvKRe7se7UL6c8PyELqoLiNvZeSsBZLW3",
  "key38": "2m29bgsrmxmwVRNsgj1drQfDHL35bJGNgkf7Hsss3nzTDVJjL3HD4gpiPmEREM1C84DW4WtWibvw8VUiJooxPcBE",
  "key39": "MMLqYDF6wRQGxYeh51yMsCSe7omsxT4PStrDqLPYtmb9NQBNiL32mftzG4i3d4oUMmJnPHY9qAPdnRAMejkak2C",
  "key40": "4GbdMYYJwsigBjCNSGE7XPK8jiP4BkrS2FFVbLTneZxYwCym4YgoBLxMhQ568GUY2g327RRKuvxLvvNn8CSiDu7D",
  "key41": "4LWcJgBoB446wMoiL36YUPoB74VVEuhTJfFdeCkHcRhddw6BazPWJDuMD8fGgNedcz6pD2zFP2dVUHYUP6Txbg4g"
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
