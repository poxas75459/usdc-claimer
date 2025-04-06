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
    "PmNBCaRZKqSqrUabUvq179GmLLmpXJTHUyudF9DKBrw6R9uGkAoph9XY1zrg5xguMvB7AvpxP1phrUqgy2SRdzk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BFTjWtBEwBJLnx2syS9FE8G8ujBQAkR3gn1x9E7Tucms4zXREi9XhUbuijwwtkTLEik3MUy9gi511VYitw2R2JN",
  "key1": "2HV7ZTKHXj4weuef4DFbMeCTSXq1KaE6D3gWhD9RCxZn3DaN5tC1PECEDQRgpxh596kMF4CGpJsFvaRsjAR2W4Vp",
  "key2": "MKSA3XgHh6vVZurHDEvTcZ9TnqfZqQdKKC7fvxGWGcZFhUyor6thXg2KxeKoLkdPrCjN6xJKrYw3scBm6EYk6F7",
  "key3": "p1Cobebf7E55o1YAifiBEGmHfRAejPeXndRu2EGKBwrpSeYJTukSyngJ7KSt1EthKdo9xtHxpQMTVU63JXz5R5X",
  "key4": "jUWG4JsN1op2FgxVbE6MvvLefpE2QExHuBEqchahoyktaRNaALGg9cPYgj7vKtYgJg7vTDxySBV3Pj7MyF9PXhH",
  "key5": "5S46nuHksCB9f1kQDpxRyZRkvxdDiNRzt7dBTRDapP2pMD2TBMQdnUpQFhnDCRENFcmNYMHfNdMsRRShuVUy21cD",
  "key6": "2f1mCEc1MN9f9jDuS2MVPJihu5Qkw6x7avhvqvQ3NiTP7nf2vtTZ9uxr1y9vS8yGch8dwRhQJiaXfiNyh6FpSNoH",
  "key7": "2KPhpmZdfZ69bGZFi3qTeQjWXdS7z1tSp3dMVRytkBf5MEWLQPJxEfhP45XmEVFLa17tYqCrLRDVMHmPhtcWdGtG",
  "key8": "VXYW1ERZQ1KsA7WVoigu6rGkkuQsKKkZBXXU77oxNyDbfyxAgQo371VPk9QZytCUf4ZDPN68TV91GcRrmQJWZSz",
  "key9": "5UMf4rUzwQMsGpq8ax7923d4C5g5yAmSstXZotmXf423eayasFgvGAdD8MspUm1tNXUD4diS2J7nQ4ArRTGSyMoj",
  "key10": "oJkctwbxegaXNX2W8tDxkdHBzCeu9NAxvm9y7XL2ag8Kk5x69wV14e1HHRNqv1aNntMaWXeo2UcxNWbQVKCz93U",
  "key11": "4DEUykkQdwzPNgr55HqDNGjSUoALhJyYjgSNLCADdT7me2Fn3WJ1X14XrisiqGPD8KEb48tPp4dNHnskfFFEB8m",
  "key12": "2fRE7SUXHCTaPjh6SYYehnMetSmdvj3ZHE9i6RNeU3PcfWhtCCLXr8K2EivQW5JyMtve1GhYg9jS4KrKi7HauKFb",
  "key13": "2vK7wRDzJB9Qr7s2vJf5SpsCBcBLQbDcx9nkoE8eoP9VoA25zbnnvwhTTfd1ZWVEu1BY4aTorw7i6m1rPGohsfp4",
  "key14": "3YDqrKsRiVgY8bJtN5oChZSm88jUx13WfNnUmspaM92EDxcPedoT8uvc6mNN648S9jdsuWvNtFvfvBcfvkAizovv",
  "key15": "2aGXRib4hYmmJo3264JEyjVbTTeyb9Qtw7A5uTQkGHh7bK515K6M7m3NiUP3ct1r3Ffbitbp7B3GDnn13s2ENiBb",
  "key16": "4K1YPvmj2V6NKJQj7ptfrWeWY1BrL8oHkVu4Ee43yc4y5VCt7NvexMwLR9XcSuGXUe8FtGe6UfZiXQ9u2RaMGYVZ",
  "key17": "Pme1x35WLTkzpJrJYp3KNpCQUeY6Un5eRwizPEBXmJLbJTZTTXGyzoxVr2tR9usbvLprRjXFHbt7aWfaq8GDwt8",
  "key18": "3USLKSCcyLTJjxHBHucssb7iFjNLwxjkDWi4UNagGEJvpcPqmJ481m2xeU1zfB3G3p3acs6yEXBNkPotd6ymEeMi",
  "key19": "2k4AS3FYxTroZc232r69ohG5RA2y3dy82Zj8cTHuDAwGpJcvAw4AHPP1PYkPo7CgfWNQkPduro5KZwawhJtfVyW3",
  "key20": "66fs6scXcgBnYVkwrYHq5VDvwhEtjYxtApX3Bc9ennGdisfuL2S2kKy9qeEUu6d6gNyxjyRLNZZWHnMrHWZZwF2V",
  "key21": "2mqHyBGcgneQ2p3dJMVtPc2ss5HdzY6KEzW77Xd3nDSp2i7JDUwdC2fCH58shfcNcuoYSKdYUdj8JCu7cC26Lo2a",
  "key22": "4wxdAcvqRU81mAbAjSP8cH84jFqGCnirSsx569xSWekpyjuaqXk56VRxGheAnUF27cW2dXu8hiBpswB2NGZfnweS",
  "key23": "5cLeAjqz5hnkp9vSQHjiyrnhfGttvvy4nMFPqTFv41dhNuhefzoS2dfpBM7KCHzj2ygE4mXJxZCB8eiWr79VPgGX",
  "key24": "5Zm1xsMr6cCDVvDGvu1ny9D1dekvbVoLTwrGigwsgkZAExucpjuAN2DRpTHVCe7GcZVcGKEkHFcfxKVj9gFo5MdK",
  "key25": "4LPmRctDv4phngPMxBFFe5FqaR8eYvs5Zqe3t7VGHEaAnxEou8dr2cproSdchXC4C44WSgahKQTgs6uJ1emw11Br",
  "key26": "5huuDimnnbkVuToBgvZuiGZmspqF9Pv9J4deYTeRLxbxAjvxwXPbbMxzSWxqccM7PVGBd5EzxmC29UiLJh9woB3Z",
  "key27": "itn3Ryc59twczJjciZGhgYeZeM3XCMAtcf24jmrpuxa5bhv8P85eB86PtxxgZh6hcrmP1q9fbkuE3aQqA3eo45z",
  "key28": "5naFgnKM5TRKEYDUuM8MeRFkFz8B4sRaMLg8A8vXyqCoppDjVhddeTQPSWxfedeHATp4Wn7ak2YC1wzMvBLKMYiB",
  "key29": "YYTDJXdhgRURT1MZ5FhwEGusAFqkukf8yVqyiAcXDH7xxXf91mGBsSuPx51e2rsdn4XBs9wZbZnaoC5hPGtSu8A",
  "key30": "2AmCR9mzcpTfQnkeWw1aMwZ5D7DWMCZXV6yTZSK53W36W57owBjtQUgSSTyMt2Kpfw5G1RnCyivvbVp2oLFEFtCz",
  "key31": "ev1W16M4ZzE5h1ecMr6WARMvykLNFTDThALUuWMNGHbDAprPZFPUFscnF7hBxqrzNMBPSKNqgHhFt3LEKEeAk4Y",
  "key32": "WKwjwGNrr1Mp6BPjyR8H3boUUTt9kttfLqewGUuEFDpMMdmRi4trLz8yWpySrvN5Mkjq5Ps98zMqq5mo7rwGNQr",
  "key33": "55vzQn95yygw7zGb593rGwqqiPWQ3EdgzYYv4MndE8p5jwyj1KzomiRPvRPfVwYRaG556A1QgfV9GbTDr6S9NDwT",
  "key34": "5DVBPGMTcfrWznqDY6yXnGhTaG6RTxPoSfxyY4N7DbJAuz3SdNQ1T2vc4jLUvdN7grFwdn6Foo73F4jKerNZN8fW",
  "key35": "3gbf7ppp4iCuR69RrUCRW2f8whDihzrSxzndJyFq3488fRE3NeJSFyqTu9m3QMazKkpJHiVY6YbDRUZYVGipMYwZ",
  "key36": "3wEvqaSnq34VFc76eFbVTyjP4ARyb6nss16u7zJfd4bpRmtvmwFMfFvQVFm6T27hkAMrT5zWiSab3V9SWSXKke1C",
  "key37": "2HMfwM5EDtYYMhyV37rE8S7hQmrgpv2Pibyiuystg8Vs9njdLpdG8EbhesSRCrGC68StYUq6JUiiHVsoGgzeQUkb",
  "key38": "5Q83CtkwheK327nzoHUXuGz9aaezGhzKXFJQfnnEWpkU8P2tnCSJAnbU3qvHf9uYypEjx9ySRXmQDe9tvGDhXZgV",
  "key39": "3yPd9Ls3nkig9meBrVppUNy9MaGvTggxXmL9pXGCMTxRmH38xTGtboEEDix57hQxwjkjBVcemrPMgxjoBF16jVJs",
  "key40": "2LThuVp5QbCG4bX9Z7UssTp19ZVGzPytrtdDxeTQtz51LuiCdQrgJT1QGMmhgAAruF6h7eZc3u56CHDTsU1dXcTz",
  "key41": "tuNJxZ5LJ7s55HwzcWP3GidYUMtLXNSM2jke2juimUmpL1fwNJRvm2AdKgUYMcYM2wqc5GzogNnvbxhbqf5Rse8",
  "key42": "VJHM6WD8xA3vj1FwQPicS9zGHqHEmNpnJTvJqTsXJwSN2xMo1hRWwkXwVU766CaQ49dPCePDuPhFt6PZk9Se8te",
  "key43": "65jWHy249ZtaR2ztw9Bv2JoeAT393XNGeqGsmYjAGdubm1EohU2FsyW4UAwwoxZ36NSLEiPyDWyhwRa5Jc1rXvtu",
  "key44": "rd99Nvv8LHqqFoFCrzCrvoRCpQpXhpCzrHHQEuatDz34BM5AkvQ6RZfsKZdwEJp8QdgARZVHCcCdQimowSWTH7n"
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
