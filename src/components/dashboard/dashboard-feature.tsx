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
    "3RvgBsdzCKP2puBC37tDmMPGjMa4vFuqCrzb6WdmB2DLUyn8gFsYmKr6KfKTf8oCVdPxXPL45sCUQdXqU1WgK7Ua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mDE88EvL578gomeU7ynYeN4QuGd675fXSKqG1JFBpRqKmnumrYGVu43UsXk5CeKKCJmFQALPgYE5xdaz9EuXH41",
  "key1": "64WznMFmn9vr9SHsQEwMFN19yZr5iEnE1byWbzZbQE36v9nWEDPPCvVAgyQNAvqjPBwtDPQSLxxaeeap1NmHzumL",
  "key2": "3xt6dmBCvWgmy6dt8VqmUC1L4vsRJSZWnLAQNqV9XWCZDjtTQRHhq6xn6ANswwQz8a7KmLPUaary4BYitwE1y23A",
  "key3": "fjDceuNF6SuASzuje2Gz4Y2NyjyC1StCT43kbt7BgFHtUjzz4xNVxDjgv9NCq36KVggyZ9JeW87qLmpUJZev6pk",
  "key4": "2z9Q7Rbw5FjqHpq23Smi8QCE737WakpfZmz2V4gNUdxNzN4Gu7NCm3hVFfyyverHmoGrST7xmBRjYSYJP351surW",
  "key5": "3aXW3SPUn6odc389BC8fjo8rD9Lx4pAreXcESbXfwAFd8PuaP2i6ysmjvFou4fZZtcgCqb6Zwf9e5n7hB3U4YLew",
  "key6": "3B6P8bf2rWMLzShmRbES27RMtsd4q9NHC9mBY5LSzL7mzTjo3FzkrA2QnWUxLTbix8fp9hFvovyB3x1djZ1h5fDn",
  "key7": "3ckrkH9By6hGNz3wWjTyHUxxBkcjdMLqvTJSWyRWaoAiutD1svLQAyojaVtYisfPzVkvGU2CHQjaHPTS2VBJtHnD",
  "key8": "3pztowWGJMT3MsyZixCYHFCwRdckarZU8rN5GpLj7xJBoKJvA7smtYXVQpSEExPqs5bg55CtnK7d1RQqLBRaDPYS",
  "key9": "5jbJ6hQWJuN7mSJmi8sdL1Mu4ysSn6vzifGR564beQzz43pu1Ut2j17cxYLXD9eT7p1h1xp6JUpXw5UKC1UJ7qGd",
  "key10": "3m97Msb8dCp7MBqqpnoVY8MEJu92uc3amPk5ghSndrxg8Ld4bo6TU9i7wdNPdtXWtSr4nMJ67SPxwWBDUQZjLdCD",
  "key11": "3aS9HfAYbccbFm4633T3T9QGVkaWGJUE8bsNFPee6WTRgDjarcVHwNtr3oYcJaE6ArwgqQi2EaLtFYpv7PwLwGBP",
  "key12": "43eXbvDRb1nV4u6pD25yWWVmJB3iesUhhBZz4UjRo4Z7Z7A9AEoY3iWLmtvUyai1LNz7hgedNYw1hADaPXF35knm",
  "key13": "3fcvitZas7PZKEikExdhVba7f7G2qrhoqWEcfGpoEApvnNejmeDcFEDuzAmHnt6eUcxzGxo6uA3njXZrdtGvaQKs",
  "key14": "4Sh1j5kAUd2wBd2c7pyQ1i33J6Go6SkKGmHHu53fy5P2QJBkLq6hqDTWCfBwebmdNdgqiqtjC3AkaeQKfuthS66C",
  "key15": "4SHSTxYCPpsNfnS1XvTBKHaL2yxnpPRnhbhR1TRmbK3U7JPveisrGBzto3ph7tEWCPFk8zWDzZfpFFDjUGcxc2Fe",
  "key16": "2HBMp2edxdwVdjJvhAxU7V43cjdeeHTgituk6nScrCqSiguwtEmbmtXNbpA5fyqxwSu8d3hxrUuiPtqFV3YEGu7M",
  "key17": "46TZbKicABXwaBwBykkTqZKH1abyjvrmw768Bg1VyGadfyMtZPAx1wXtEd8rRzRsxtcdm5T1E6yVhhq7KMUW3B3U",
  "key18": "4zpJTze3QCrGarV4Hz3jRVsP3a2UyQ5rAPpkoy5Nm7823Dhwv6XFDzthRzwC7hXuQ8De4A4y2zU3WBx6LwcGmam",
  "key19": "MaZZ9wr4bnycbwUjqHKJfm2w1vSVrwZLgTTpVginwYvCWwXekz1ugWAWVr86sb9GZouBb7JMjGm6L1Uywnt52j6",
  "key20": "5KYp7XBosnDaXrxQYAkB9YP5wYe9vQJGyCy3a7en1Td874gch7QbEFr8B4Hdv7Jr4ByFXJmGJKhSiV8ynaoFZ9Rb",
  "key21": "4xqhQH7DVr9ZRKjvSyZtW357uWjR363fZwjFxcKfK31bjAdMJrAU87ZMdCYqeYrVgPSuL5mLxGpuLHaWpiQqyxkL",
  "key22": "2rH52rFk1dDJ9o4iK8wEUk1h1BKijaVuPa4Cj1gdxWunmiUQDRuEC1UcwQ87UF3g98mKESTVVEFi2bNK2bYFRMTJ",
  "key23": "5VXGEkxHM9cgSGdtk2oaT45pCskHiPG7kdD9WtdGDtZfYEmRLuFzNd6PP5qBt7w2aavDA3jqz2o6mArJvxq4S2hN",
  "key24": "2gHK8zjqzXMDd9EcbFdgw5ECcgm3qiPcPFyiZDgcEWeXsu7cjGyBCC4A9TbLFCqZi9zmLqjDuTzSpYPEWSCapiVM",
  "key25": "yJFHZXSjGuPoV2jn5uLYHE31yquYzRMSby8L1NcznRqjfWACJFo87XCBLwCY16DKWQEha6MeTGJrXz14SoW92nS",
  "key26": "5y6XZ5QkvWJMDABP5sCPTrBH1UZpTJRszCvftfUoCVbJMvBvf29ZDrFSsbJEnPEq974CM7MzuMNRRg9yo88weYLn",
  "key27": "3u5Ngsrd64KSBdaTU55xurrAGZgfPg3Gz32rTeh2jNZ1VHbmC6oaLDKCLWLxpsdAe2e1NfmVrWMazqMpreWB7d83",
  "key28": "5pWQiZBey2a6smGH2svtkQvdQDbAYDZadMPrZMjxtDL4GYB1Mhh9xRAhvscZE2Fr6cY5mZ344p8GsLz9gEnFtfYo",
  "key29": "4yCVchYT641JJA8tbU3APeSC2CsPFjEgYQFsSXJnsGpYyPii9Mp8EgFvfi7Cr1HYp93G8kiGdS41GgqWioYPhj4A",
  "key30": "2a9Nu9MsXynCt3T6TEso3samP4Dc8woig5DxHGc1PBAkPgf7oVo5Cd7eE7GCzQDUo1ok782rtZBd6gi9juCq18aj",
  "key31": "i32qi7uhCJYHSZdxkaTXdkLyXZB3SMsVqKr74VVnFDPdPgta3GMuhsP6kjgPA3vf3HsyhDqFgtDisEcPZnpBUAy",
  "key32": "5wRkofCHtpvUdewSnzn25kQZghK8RCzyiCEBVQh8Jf9YHrDSrFtPFBquFkZEdHurJKnsxMmx3XiWJYU5g1SZfewQ",
  "key33": "3JgXcY7YKSnYJJjPoAZ9PoUkeWm7uerZh326Xs2CTuWyRqC7LrNPLYc2e1BGGNRfW31RgSSnZZKNmdqPMMet7rdY",
  "key34": "2AJJVc5eG4PPi8dFF2zZqGFBjMARNgzBCZUxEW6QRPgNvWaErhr19eWeA5kQUyDXVYGxyntLJAcRHJ9e5gbrng2M",
  "key35": "5YdMPo48FsrBfmsUFgffXbGEv813njr2JLzRyy55GLXSh82rUQu4yiumWNqhRu4uSutA4gb4958whdCB8A3zVHNB"
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
