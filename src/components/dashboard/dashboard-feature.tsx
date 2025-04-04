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
    "4udJdeGWUmfiZvHpLFiBxj3AmqtdSpCHxsFt4DNNVWAWFd4KAFvCY1WFixp9dqgbZL33g3MapacTg8hT7GhWW46L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TzY736PQLzg5RgdMCJuXVZYL4YvkRPMfUTcAorZY4ieYUqyNXvWCcy7h39vZ6FCvwqRYso51DmxcucABt78XSYp",
  "key1": "2AW3YnkhfqSnNFd2J9A1NK61nXJBRF3qSPTJyVckid7pmKJfDdSWTX89jHkkg1sM8iyp3xEHtPMGtCPKspVNqMgB",
  "key2": "i682478MVsV88VAWe2FfApBjmJ3QogEwAJ1rUYcxctUJvGFzgyfJiPiSaBr4PovacjcxJ7XxLM3PhXBJ6BrwpvN",
  "key3": "21cwLn9ZNrb9JJ3SEzbDmFWNiC1G2dtR8YwkPXYnjUCMk1yYRW52TJwQZgdnELNazgUA4avFS44jS72H3FQFxunk",
  "key4": "492efPgz78Z6mk7d4YVHsmVtkC2vw68y98QL81Bze27S8gnW1bD45s6KJsxX3J3oZbnYNoUnoY5kebgBsENGadSo",
  "key5": "3RVGSrmPM81io8V9V77GHktvipkWhopXDKVZTKAxYTT2hHS9z4qkokRtfM2Y5pvTMwvvBKALK9CFE5q9BVAnTw67",
  "key6": "2feg3uPGtFwg5DhpqoZKAN7YmAuWgXNWddutaRr3sYSoNWyjdCHpUtJggVbturdPj4FShyo3WDz3bFBcYLZBx7Nk",
  "key7": "KcXmPTqdb8ySEACeZS8sgt4tWCxHwpxy76mtQtsk8sGgox5XjLj9ES1HarUrKkLhjXFJZcto6iYDJctnwDxHMCK",
  "key8": "2EsLpqHsKVNRde7EUvsHLVfr6asePtxhm9UW45K1MEQ2yDWnaey744PbBp5D7WfnA3aWmgXasuA69ydHnS5fTUV9",
  "key9": "45i2bANNTPexGGGf3DWqY2r5dWjMEzRSnGTqhdVypGg6RPUHGYzsM2q8sEDfBpjFiHNEPdGrLaSqRT2a8apJEVGL",
  "key10": "3H1AG6oHoaG83hTgW7tqPaymddwx1Z7XQezYVPHSaKuhTCtEzRKj1x2GiDHgMvdiS21Hr2rZ1C4q6u6rupRwmkvh",
  "key11": "Q29Wd3BE81Wt48VeGmgqeMkHHAxBEPVdpfnfS2snsyNABft2pK5brpEh2cdmHsGRhVGogUvWCBDXEcb9damkp7G",
  "key12": "4ESf4mSYyGrmy6GCmCid5U4rFwHWugAU1Exj3qFr5mVqeLCXouZYS9iwZCySugoCWZurMs7m7qQZ1Ks3ksmRSXyf",
  "key13": "4uuvCV4sFUupmkGWH44ztdLP9dWK932BrdZWMnqQr9rZBCr34yR54WDnyCXhwy6TYe3HN4K1fC92rGXjeDikZ4sn",
  "key14": "3dirzkzkgAzcDTSEeGe8zhFtve5ErBKrQijE4DVQjyaVFYHEMZt155gdVVjLBGQqA1kBHUZeyP9oGuubFhRbU9Jf",
  "key15": "jeyUCbXSzbdv1dEkap53CRifR7TBBwMoHbCgdgJ73mtr8tKtXUfUFf8tnc9gcVQ59boBftbHz9t2x72it48wEfY",
  "key16": "376q36b8nZay22JFj43CzgzoAd8jp942erHMPGSzzXmMiTbPoqjJVv9UibKPJpZiYs5wS5c9ufieXL5fJu6je2gh",
  "key17": "3J5uFdvPKwUTTwDQGCTNwNNmRtWyjagqzoNZn64tj8dteBsgtDQPDhw8vCpkGKpxZuZ5fpFfhWiGQiiUAuoEWcgf",
  "key18": "4BT43tQJenySMd3xYkUmjJtQEkwtwKwgka3T7hNyq7ntSpnsShYajNatvABmopAoHQFDpUD1mB6DFgtHDmCgFrZH",
  "key19": "5Fyp3p83d27WumXZFwK1vufG87K1o7yMVChaH3t4PzW2vyVEigE69udV5SVwhsQZjxamMWfiEZXxbUvnJ6gqKQgK",
  "key20": "4NVqiiMi5ytK46WiEhQ2KwzogYB7FeTYvcfDRFLPbnYuzEoKnYMU5T5LJG2Lcizb5CbpSnyS91VKeFHtHpjhUZzp",
  "key21": "4M6ZYdRMtWXmh62yjoiusk7Bof9U1XtRqfb4fnAUwLUxbR863tXzFpX3wrmow1FknRjPmasHEwg4iNYZMui4Jwie",
  "key22": "2S8oAbhLec6xZMf6Czf3cwzr8GcWCTgzSEkguoJSDGizBAoQawv94HQyNMo7ZQKrXCypLCxZBY8zQxYJpfuy8pZq",
  "key23": "5SGtSJtpNS2Jjsoi6WFUoY11oWGhWehFSWNsZKEmxqeuUBAuspHsfPr42jUqTTy2Er7Njz7UW4bAHdtxycjioyVP",
  "key24": "o5cX5jC28LZNwaUTjngqjm67YN9x1Hx9LFa5DobuN1osy1UErdAPjFYtX9nAZDez4bGS5dJ5Ya7pqvucv6wvqJQ",
  "key25": "jM7xQJDARtrXRCr3FYbwd9ZscQzAqhBVHERPC75TARmp9HjMNek9cZYQ8uMt9do1YW4kVF5vLBQ1VMWiaqQcqfd",
  "key26": "5pxkESKrvCfeLfacbZ1ZZMjGDfApFgzdT4pGokuKn63q5S7oWAjGKJKk2oNbykx8wgZr2SArAFrFshKkWAWf992Z",
  "key27": "QaWKf4mwceX61F8vVALp9qnL7PVS65ahTu4xhpuMsG7p31ZiRCfeiewkx2APD23q8QwyjhZMvCYgFoJafXMPYrD",
  "key28": "3mSPWMefSvY9afpqNXP6vUz41YTBpkHEVFQYdoSMqC5GkMFbYrLZeFRMPmfv2UNqJCWt69DdtyrfEFawzCAGwY2T",
  "key29": "2EL1WHGNwAn5zN44mUnxr7Ub1bc4S4hteZqerMQCPpBM4WyT8JxzmehqGc7MnCXceNmWFQjaSSDZctPxfMSEVzea",
  "key30": "3HNSLSunt3xcyEhLKf4zRW6YnX6nTDuw94LrEBXvqSv2N67gCpvf9f5tz6TTRvEF2vWJsnZFLnfb9TtXm7bLS29E",
  "key31": "5u3Tdh3biiSucBpruw6yNFfKC7GFYf5LGuGj8wo1kn5EJmQk1KLqdLa7TusevbZN4eAJiDMWgFTbs3iu9cdaVGem",
  "key32": "3my6zpx8Bn4tA4taLmiJJ1uPGVMATSRUBCHU6sKALZkBhEkeLjEoU3MDc3CKhPN1wjcS7iTRKibu1iukRrAs64rc",
  "key33": "3JvKhgfmQouwRh82QgeaYZTwD7WkUpAUXSFPM5Vg1A6kvVDMNf38ytBbcs2yF9nZ6mVuuG1NPk9jRbgg1ZggayP5",
  "key34": "3ak8EaaHHPDf5G1Doq8QB4p3Vd1wWkRZm2HA2ysssM7rBrZri3nvow9gkGRGkvseYS9jphAER5ndao672DG3vJEV",
  "key35": "4WczXxHNC1Sg5yrJCDBkS4Qm9V4sZ3iYK6wFE1AQpANUAwPMoHxDUZourSKBzcB9kb8nRvMDoHVpHu5u2n3MQbHk",
  "key36": "2Ch3YUytAAZVzohvv9jqgFHCKmmEiVabRfrFBr6XhgiMR71efEstwfTz8hSsDmZBdeBDNMdo9wnxtPkZXkKx8oQn",
  "key37": "4r5hotfRffvJBpXv4L3mCCnZ4vgZ6GGer72bfrDnQCuKuMFx7bTYNibvcEf7XAbqPtye4yq42KCNowHFUZwT8SzU",
  "key38": "3WQR4ukYU1n3v4uAxY2cakBYMmLTNUb8X79StXfT4z6oY6YFdWRsbgxgtBrhqAWnesrrug1RwWmedZiadX68CyU3",
  "key39": "4UxmvoZ8FnjSPGcAPF5rqxWDUJN8JXhMf1wqqvou97UMuRw9Yp8MryvquZCMR5s8Cwff2MuxpvfPMUctrXHnDfog",
  "key40": "3BR8ZqrFdAtgGr6UaRG3MLB9uf6MTbrd5ziRmBNCYfKcRcv1SPtHJkLRjCigdrChdw1EzKDFqYEn4yMWcqT46Ded",
  "key41": "3BY72cGQXJ4VkH68cSMBDtpzfgTtjw21yKkDGwk8HsChSGQR7dyBgyEshbiv1nSJCVjgAACeDFHDv1LHtrWR4CM1",
  "key42": "5GLq8mFm7Z5R5ofHBHj19pVaCvh5Zv5W3ET5KYg83eBZfwUgUhqRhruEAhjphFWQqZL3Xs2hx36dQUFhckdgMKn7",
  "key43": "YF1uHE1qBkj3jom6ubcZU1CDUkNkBuuaBXW9nt4LVcRPv2WGqN5ZmUYAbp3QohDJ83acv54kuvymzRbHZBZzBo5"
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
