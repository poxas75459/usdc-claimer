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
    "46bibvoWvvf2aaXfoHqsbrfT4Yr81KkDTWZs1iSchX7pfkRdatqs3KhLtvBrGs3FskR8TzkXPoT8jQDmM6nvbPRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J6ioXAQsrK12YBetyDaJV4pTx5QMSY5f5aeFprpKMVAjH2iH49FCxYbKKyDp4j8GHTcyFx5VaHoKNzd4hb7JFfZ",
  "key1": "5NahabaAxT9oYwMNPDAGeWTBni8q1wWu82iD9ZXexP22Xo2uz7q1A5HgsJavPfExja7F9DxeWzbKEK6wgvxEp1vw",
  "key2": "3kjHi1xdUjJgrq5oc1amZnEdWPmG6SfVwMARXrtnuoDeyizUFoqWVm2WgURXX4Krb4SbaNJRLSACGffthw4NzBaL",
  "key3": "41ihPywAdjRBUCHRNF39FcXWaMtkSQGxBba91rWNF8nq2dejcK3TFejutL2QpzYd9L3RshMvKiyTSNp7xHp2JuV1",
  "key4": "2M63YQWLWrMgTwxzdPDDxR2j71bmEWUF1HsNthbr6TSr6vYaSYMvJ8hsosiyQZHSabfjzfkYnC1hnLgUh51UErzx",
  "key5": "rwkXVtYwcJ2bJuhFtf1PkRv3PakRn9ke2nuRyZjvDxeMD8tfFaxkkWPksUyow4FPXGU98ddVJBJkNv8Gu1qxzAt",
  "key6": "WZcdq4hwdjfcQssTkk1MiWQKhCuUddwCpm28Jbio9Zp8rLZ5LXdxeuCmfyEVe4NzEtqqNP99Yg7yS6RJtnhQEFk",
  "key7": "y4uCMxyRoE5CE6fmwp6sYbDtKUc4boeS9PqdsSkiyVkQDpsJs6bHd2yCu22V2RYCrPnMpm1tFiCqSF7FdYG3VAS",
  "key8": "4Wk6RCjQQ9FA2R2zZ6DVQjrrNLbeVZoungspPQXnwgeWSHHJLf53w4n5c45RYyjepXrrAwwrydeVhTntL4ahTzqQ",
  "key9": "DKXReVMcF57qAQBjJVwSvfmAA6SAJcyiy9YVLEMaDGVPBLLxSV9yZNy8UybVbMYhxK1RP9RXfmL8r1iYW7frDjr",
  "key10": "oGhskXNKBnXsxPk4WWfhjqZ7n2EZi136DK7zaaUmJZRziWnm5wsCBZo4GRNBmX844t8KpegVjB2qdaMqAtnPBFc",
  "key11": "2rZzc1FQHMnJ1fVxtLSN9ZTSf974GZtuJvS2kDYMeMVSia3KoCsw4EjS9JDWU5vV75JWLmJA9y9b75CzbTAJ7Nvs",
  "key12": "2uoF4R5JLkbmkoj4AY9Tpv2L2pqbrYthRMLt1DjFoG4B2eftVc2bSrvQUZMxkdBkLAp7EDyhE3vkhY9KK2sMTCuc",
  "key13": "659KXaTPLBrozHzbwbxtKKPu3SFBfXFmhmfHKzgs4Dh47KsxPz3w8mSXtL2zcnoGpvfYVap2hN25NGfReBsgPrEv",
  "key14": "csKjVuBJh6jwMMN8urmtD5FrFw43jir3GwuWdiP7vtvDVjXY8ZpqGQGEMLkvTaBcpHmnBeD5pWBrzD3jHY1Xdto",
  "key15": "4Zuz5kcnv9Be2KQmWnYf6SZoEGDzwAZpfUmfDqHcPGqKrafZvaqHr4YsYRANy4UKZSE6xaW877yEoQYbvSuPUNj3",
  "key16": "2bNSebsAG5ZGe9ByZYkFm1L6o1qXYryc48gxgFS4HE2cJbgPeMnK9RLmMSVrp3JdCDVSFBJkBsuznScLCaGiz96R",
  "key17": "3Pt7za9WELLxa67nusWKSWGYDUaR2362q78vnkZjB8g1swhx5eg9gbqhk8zbQWZ9krrZGdxY3otrncVWnJssYeYK",
  "key18": "5Cm6cBcFf14KhyJ9CjULz9njEZgE8ywgG5F5Q9WdJHqmT8yxJ8ZhmPguaAWpVpJ8KSLfEkFV6vvT8NgPhrcQpJ6y",
  "key19": "4qMd5KxRXPEPp7vbixtdgRSJ7CHrGeL2EdKaEAo5hHySq3BJTyx3ynVF6nhUJtPKAqe3QjpfJn6TTxkZLFCfJiR7",
  "key20": "Rn2ArxzVoBnToooanHFjnahCceM1aAAF5HRxCh2vfPJuyTyQYx3s6Mc7kevWb4UMqbEX7Dj9yaumZaQky616Qwo",
  "key21": "RT5rQpEnsmL6iDE1TAkiCBYF8SuNBUiPnmF366zQRskYyHWofzqwY7vx2CB7WWkgaBQDNtvgVHmUNrr7JNA6vYz",
  "key22": "1n4GRMAjfPa4St6LbtiTpZ38mUWr2sKMMRu83LDxXR8hUqmC1bpkdu1Ydt5SvxdXLs4BJm9rXcyXBoACBm85Wdc",
  "key23": "4FTK3op4PsJCdLWvaHgnquzfpXhiZEZeFn9Db7oYbWQG3AT9o2LisCWwQHSotPWo4d32hiLdpviWr2deb32QhLhe",
  "key24": "5tE2AhGwrWxtLNv1LeRqx9tsEYapLzSh9Ceauc7wGFR3gMMqjhFMkneRJVtf1ZWWCfoJFzYDCiEEf6JSTro984tp",
  "key25": "49ttw2UcsG1NbQn76GN36oaF4PrKmif2divkbTpv2QWaFXoA2aqoNjYR4GrxWFeNvztRXcxjT2ufoGBtQpLbuRJL",
  "key26": "3tbGN6ZGW2KbjpKYvZ8WE7LSZYkGqE176V3qhAaneNLZYC32kQx3YxAFHs2tWWPvGh7iRKE1bRSgAskvupRBUuf8",
  "key27": "Yp2TDM6aHt1m6sTJiaQqh3eAsCcwR5Pwph1rJ7QU3465KQbnZx6kcs96THQUiNKRnKjtayrtZaam1khg19bzyWU",
  "key28": "5x6N4pqUtQNvzymBzdnba41ztWEJpYAPtqMEiChLKXUg1nLeZtVEyNbHQah8RVFdmRkegchdfxRquj5gcF4ZovGP",
  "key29": "3YoRJuC95zsjxtyCJiv4cpmbXGqP52sgdVexA1JrCyjEDHQDm5Be3JqXfxJEq2DvGbDRsVQX43YGAG7CZ6UY4qHC",
  "key30": "4b7cDvbBFG2d4usypdau7pGudgtjDuWGWGZj7geUtsNz1hEB1Sp1fEnHpaZ5qJD1KCtqJPRSWvqTJd78AKbn8U6c",
  "key31": "5VEPf7rzEroL7xVUHedD8kjzKw6pMzsDJ9m78zaDeqqm1ZVmTfMRj46uami1W4xYaBLdwpRKuZ2anjL1cGBjfDAm",
  "key32": "TKZ9pfk7p83pdLrm8h45t1FMng7JAPjenmoCN9YHQLD1UaZsZoZu1gpXZQuEx55Rapoj32V4tVkxQogLRW3CnhU",
  "key33": "PEv39jYB3qe58Y4mLLk5CHF3Sfd243t3g7LkxkbpqbKQMDmgRSDAtSeUp5MMd4QySQbaD1TasS63cqhZfT5WdqP",
  "key34": "5bQ3DwcjRTR2AGPvdaVPnRDKCt4ev6zzkf1znPoogp9q3y7bDd8G9UwBJFPUMmiJSoQey2A4dCX79mFiRgA9QQeM",
  "key35": "5JmWeBwNrafAbVk7WT82SRfyZf3vEDjN91jGPzFDvarM9z98ppLehXRDTTao1HTFzikpG5vnrxHqzyXB2rzF2dvX",
  "key36": "5iZPGxJvjcVpisCKmxf2P7gyfH7RMhUmYuRzGKsgNHhQa7AxyCVbHFK8PXDp3Rd4a2vbWaTz1NV82x9etyPxTLEf",
  "key37": "2UyqpiW7R5P5wAUPeU4kRu8jQ46aeFbAKbyhgNYLFDJfBZJKj71p8fT58mWukHbdaqPSbvGexfBYxBg3vm3yUQHR",
  "key38": "5JLGeB1MUpoAcN1mQqbdkBrxQC8U6bWGLpS2xWWjp5YZ8eFYfdC5Ec5P2BfNnEBzXppJLhuFc36mNf98pyvnKnLi",
  "key39": "5y8jp91vVRR3XPej4n1M7EsPUmG8YQehqCCV2fBtCxCFGxARLaq7uuAT8nwPN3hAJCbr96TayrMgjbe9b8akhj3",
  "key40": "HdDeAUf4kbyfdHZGwFsJb3i44yxHrYd16DgMnaK2HCNpBACetwor7rdGi7gpYCQptVXAhWRQDVLk31HRvuYYmAT",
  "key41": "3JmQuQoVSzbYbgexNTXAeVbnCE7SR1fnuxC1iWQan4ncKyfuDUDRp91b2UFSJNhf1tdCTkp9dnZKDfm4xADoVe7A",
  "key42": "5Xezpn1dkehdibWnugjR4ansMn5wbDxETERNaxQQfnraM5PuPNQFhg746LuDfqH1wEhVQPkuoFwWrfN5SMa3Mcc2",
  "key43": "4rYTzBkRxeJV9i2GqE5rWmwrvjMBypzj4291nuKh8MQv5eCjtQRnNPBTPWi5PvNMFmnvPN5bySN9RgW1XuARo8G3"
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
