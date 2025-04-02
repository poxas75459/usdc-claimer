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
    "4usQby4S2ig9DhXrCydyRZNusP8NhaYnKGHy8xxfVhB6ta8BLTHVkQh2Bp3ajx1xPGwyzk7Xqp5PZh3w8K8K4zMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZD7jzHUUnzMD9BzC3nvps5sdafYxoTV49JAdMLEoD7KNPHHTddXbLyhrskL6xrXjGZBiHYqMNpa4hUw2QeLKacx",
  "key1": "3ZnFnVnuNMNbBKnF3r5uM8VhUmotmyFtNcJRMkWGKUocbWT1AznV6826Jbb12p8QxwANFvsy9me7zoghVBZf4EzX",
  "key2": "5HQDK2UcLC4GxBtpqq8yv5684Vwf1fX3G6TvZCydUMh66cpbrc55RFPPngTPk1kTfJjrbSawfBPp1zxCJpRvERkR",
  "key3": "33jbEZG1Q48LsW1Re4wKizftwkXdvsMkTrXJGSyY6qMkrPsVb4sXK346U3rUhQmjE79WG8dbLuFzzXi4GKbhTiVB",
  "key4": "33asd5Hg2tfikR8xijvkwmqAQqhZGH4sMRq9nrQBRXLva35ymsueZ1ztMDzCF6TJcwXfBv3Z44JSvrNqgz69ja3M",
  "key5": "iYVyiqEkuN1SPLTBV9eraSPt7TSh1BzXkLWdFVtGfTDkudNKXNzgQbiHjf8MY4girH3C2ip3ieEFkr7jw9m5LGk",
  "key6": "5o41j5C1gEFmQPZKr2hffx3QDyVuiQMkLF5U1XwefrtMnFJUH2Dkfr2t1CrN9C65kp3DqmTFtNy1GXzRsoFKfxrH",
  "key7": "5CQmVQLTVsU3JRNjbHVKW2tVGwwEqRs69vJW1A1SrWhCoyu4rGDZPJM9GdaPfeDnujx48iwnD6tjueaiLADDobCw",
  "key8": "3rxUVSeVsr3PuFYRjCanav5LKAeufPkkjBJfMKNjaBCqCE8iwwWAuKc8J8qBA7hfNdP5CeMKwcArmD9k89knJJgF",
  "key9": "2GUrzHEKUTYZvLsoLPz3YfpcmQhekG7oQnbxrjUwNZrwM8jnd9fnEo4bkcf1M6upTWYND8cDGabmsY9jV9hZgYXQ",
  "key10": "QLHb9tpXR1r8BggBskZYfZTfxDGVR6dbncagoZ26zuLAbC6uYMMiLHULFbNH89gbT2BJwmZY957NZp4NNL4pJhr",
  "key11": "5FEhPdkrMgTXiHzi3W5RqFeYmbEhmxybC4DdJDv5T7kCi9UvwrctBVYZWy9SPHv7E333AvSCZjYpWLAXKCg98FFm",
  "key12": "2AU6F2unAmNxFvVHqwrE17VY6Yv2wBuxc3pQRVj61LWT84TgNThL5bXbghhMEg1NdHRg79x19VpHezoAjDMAdo5P",
  "key13": "3ASjcEfFbiKzcZ1iEJRF8sNnv9Em9uf2otzAVfpkcR7MWR9rYhSvLsoCSLLgLmAzin6wZfX52CjCvYjCTsJztbLT",
  "key14": "wYAR9ufe6uLQQuh6YrXmrFW6paLWmXo7RNHUUdvJJFgFrkiqgzFQdKhB2ed9PgQTMaTSdEnU9E57Pcg4izW6Zym",
  "key15": "3oUQJwMHVey28p4WLRQ9eqtwMpRGuSUv4hpCGe3ZrmxGPxuUXmnNN2VHFvqCucy71ULZgJ3WxWSRVVXztK1UccEc",
  "key16": "4eo1AcAie5cmAjAYNsZYihNyhyDx6393jNuT22xjfADa7GVDSSAEznVV957B9aAuU3evdGQ8dv6BVJQnNeTrHXyL",
  "key17": "2sFU9QBw5gVd6TEBxWsL1An5k6xoT4b8kQkcNW9Dt8NobXD39SxBHpyvQqKPJ1kNxSGxuWqsxAdmcQoqFEHYPCxp",
  "key18": "5rXy3sZCA6JCwFexkdWHpEFS5D1BJ9MNpFDZDQUispMo1Tqxh9xPeuh4YeqirZstLuZDve9pBB2fzdSo5UVrsKE7",
  "key19": "5FfrpkB8GbFYUQLX62eHTkhUXmkB9JkMRJYEuPxSp6gTzzNQ8pu3uiJB2WhJBYJFBJeW5HFeT46i3GYhUJERyecC",
  "key20": "58h42NukZ2ewjoY8imLdNnwN7yRBPU8rtm3rAAVnp44PJsL7HGoMJQ8VAeEXXbK6QeYDZaHGueTbpXMKC3R7pwSf",
  "key21": "4b285WBLTTtJHTdvt6uwpuyP3Nrgf9xDmkenPUxCEtNAWwLgz8XVb8VvNRivU6ufGR8q97uzfF4YP3ZdkDPVqEJz",
  "key22": "TqtMqSCVBpm7BvcBDtj1J2MoUozesmeEDMADvFLZAoLAwZwZoXpNP9RbgFGwayx6ZatKLiWNiSoP6SiWU5koVva",
  "key23": "2ZT6avxZG75GEDPWfumdeSa3ZM3tVyDiNi1qwzXbJwS58wxpdNgmZkmLTCGF59Tp3zZ1piDrs9cFTWpXSQMcVjT2",
  "key24": "432qNTZ8H6rA4Se8MLQzxYusHhLcM784MBvbmmsAbxgRyUgX7yfdA3YUH5J17b4AqiZtiizJSwKTVWJEcy8tyjvP",
  "key25": "3w8FWJ3TbTPyG4bgo19iwuDdP6iPc2xmeEYGuef3GGSBJr7AMiPwgTZCpfLdjLWq2MB3wyMSAWDeheBMpcMLJVpL",
  "key26": "5e68ZvHXKfz3bWVrKEydx1ZKiE9jH6frTkzkL1w8zom8g1vFfqypWh9hA7uHTFPcKjULfbV5ukM8gtPgfiTsjPB8",
  "key27": "5AacBATmu7AxB2tzCNNkT5QkZZKKsodDcBixJ8BBVWT2MR1Fg3J4JpNvvUs2Eoh1EmbQfH8kpuXNyyGWS5hKyWRF",
  "key28": "3XcFe3i1N3GwodD5qQBEmcc4kUSJbjzjpXejEeYLU3zxK6VRK4P7iVD6TEp34GsMdRq6gWAXRpnQnhrK3iYhVCNC",
  "key29": "395LfrgKDk6XMx4ajktWYrR7WCRYZBrxxkbQxh4sTYgEviz4RYwRUqbDKRdhm2XDyHH3d5yiHy5rMaUAJNPq165W",
  "key30": "43GNH5SgLMZ6gmipTUDJBQJ7wEkuouyt8ApfxGT2i7FdEsuGoMgqPDrBZAobGF458vLeH1uDm1ceFcqvRebwWMUh",
  "key31": "5rVpzZJfQwwmqVUrCFWZycJjdn8J2ZK51XcgMo4kbuDjkxhQnYgu8r78xzmGMagGJ6Xx7BagGtQpvbXGTUEMyss5",
  "key32": "5baY7rAVNRDLjXfivyGPaPajhQJUiAaHXurLn5iuyNyo7DTC8UBjDpbjonaPFCdFLD3jRwoynjCh12mimcaZWtdx",
  "key33": "5QmfDRLV85GoWDSkNZnLpsPy8qLPBN4Q1g6XgDQkVKVNAFn3Die198SZBbKD5ZqLi4ukm1mvnn1CgJs359S1rx7R",
  "key34": "67GrEigRcw9JbQWexxM8SpeswkxkM8HY5xGTENSywrZjvm1mUgsDfaFZ9iqVFnSdYwMpVrMmXrMNyU3G5oBdNdjg",
  "key35": "27A4ELsurkEEvAXoHkGHEJ1SDaAoGoUbLbwbsvCj7xaARtLyYVCR52Gap1AQSWwmrryaPRmJhPSEBG1Xdon1WtUN",
  "key36": "1ffSbXXoKbT7jv2pTaUpNpMQx9DNMmvL6yfyEP45BXduVKFFG3AGyy2VAjKWigi1fJxhJUMuDvWcRBgE6oJd7h4",
  "key37": "4Ao5ukstgNSPXEteBbtXhgfbEZc55nz5y16Gj4PvhrUp7k5xujuX8WMims3YEd7tAhJwuFvbyXRSD3ZZ2EYhM8ga",
  "key38": "o5FDDLt8orBgjMaiwem6N2tFCXEzXswBQUoUm3ibjChepd47YLT8EdMdBLGbHRJCVKfTfU7W2uqKb1Q8zao2btt",
  "key39": "21GVKD4SCncLi7ZgpSp6PMGMNmAL67j59tKzunTyUpuZir3LW6qxzhT74thQUZ2ZdwSEVcMJBeKWM9iySyprAWoH"
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
