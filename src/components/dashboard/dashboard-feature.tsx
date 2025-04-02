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
    "2pir3jmkX4BV6Ux61JK3jMnSLqefa754izhi6CxpUqib4swfNvTPdiwiomWU1j4hebAktjyTbjgwiCRUzFxQjk9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7WsYTGUDTz32FqSqSdCNxBWEaevzVPPmY1RzYiXSKbP92zuLGnpmAaMJwVou1kv4EjPoeFDUYQFsui8qHoyovBu",
  "key1": "3KiCXGyY1XQG1qHQryEiwJDmvVAMysCJiHLFCQ1aykURAzsxvQrBf4EKREKP55MneB4YRTcgTrRqzhN7dJejqfC1",
  "key2": "3RrV3naLkFQMA2AEcXZG7WdtH78X2knUq5hP6NkCqjin9jNWZb5us2VFUqSJmKP5uyrEHjkxzonFwxBPm2yz6Prw",
  "key3": "5b4A3f6BVxXwZabh7pu3ZQccDdHNRtFD7ZYmvTQPRKhAunxU5kx4qmKt6gsJ56b9bEH3gvBE71hEbSb6ywv4TzEY",
  "key4": "3SoeKV7KnrgYRFo31GG25sUjZozNqK4gPDykG5EUzq3zkiLLVT2CxfdGxEJvuLNKucy7FU79hDbVmQ2fri9fFMPY",
  "key5": "46f5DDNwhFqtjKbvEnpvwfSxE1F9aM6HqauoTHxCT12YxvmZFHLxRiecfD5EytCkvBnmDarJD8XKH3Qb6WffEBfo",
  "key6": "4aBLBa3iy9gi7FL6yANQbAhXVm4ePn1y13VD1uRVP39imndPxWNzuHLhMe9gbLrYawUg9EqEKhNuWnc4LDeAYGCF",
  "key7": "21oALKAGXK4ytMWaqXSRoWRW4D82za16mdrUk9WbtA7E7tCJcRDVq9QTU6J5K6rYaYxJjXyHKHibMZsHYwtY5mMh",
  "key8": "4YXcgkDpTQkTACWbXbXNGZzZ7vsx7KL1PtSbB6kBH388oXh3G4SEt4nT5UfES5QfK347dT9KUSBR543iS2ji71pC",
  "key9": "ayEAq5p98VhBQZavRvP9EESMZqQGMwiqKEJUa6KaZynLjNH6vuDZy325fVTgdYuCAruh4tB7xBhrNxaoH3iFEEU",
  "key10": "3Q1R9ZEJSowAmDLmhsdmdwpLmd4GJvngiFP1LZChwRcut24Vo4tUk11iVDbncyCArZ46pC9HpnY13kCaztR9KLan",
  "key11": "2MrhfmxmP55TjPXHfMXgsossBdT973aw3VBiLevd9ZW5788vb3ZjyWDMuH6SeNr2u87YojoB341nqpM3xM9kft34",
  "key12": "2XRDLrxCZ98eWBLRYFipzxiT7aHTANcFaiXUFrUyaxTPPUH8CQ25pHetUdFZTSHGM7WKnhSPg7YRsU9Ypb6E7D9U",
  "key13": "5YL6bZ2hHg5BRHUXUPfgJFMmeUi9iebeo8e8hQxhLyParMoeNKkvAY6L5pTeu9j4e5woFRwEodWEdARavLLpsRW2",
  "key14": "52sJLzjdkBxGQMS2D3pDgThhyagfQ2aB11gGh6YjhUXNzb2aJUNFHJYHkeFZTHEoNWz5kTtmNADfgRevMfxTR1dR",
  "key15": "2RuTUDx48uDzGSpdR1aecrYkKZEagea8YbU1PUGDQH7whMf95mNzBCMFGvpEHSXYseQCoWAVArujS3rWxQFP7rks",
  "key16": "5u1FSKwwM6HWBvxEQeXg28n78B44adc2X5USBgmJP4rXFnjZ5vphuasyisgPsU3G6ccWkymsyjPX343rjtggXdi6",
  "key17": "3b1boQyyqJV17SJPG4KCTbUDRVwbSh1cj1ukjKQtjGozNLmp9pxUbJhVjRtPrkrHYT3dwMZaGEQVuEam21yfQ2FQ",
  "key18": "4MGm1RqFqLGjnwhJago3na1zH6VAowVLwKBfmJmLyfsP9k5DFPwurvc54d1vkH16amdtB3aQ5doN9V4sN3PZU9dq",
  "key19": "sBrS7BSc2jEKSjsaGJgJkgTcGYFQjJyc3cpz5iRuEcp1xYH4jTmQRuZ8Kf6vcxrpmWiVAAwVUE5Q8N6kgssyaGt",
  "key20": "5tEWwbFb9LjVvSskWiJHGSahQ4zou487sKPvyF9CdsR2N5VjdKHh11D3BCKZLJpoucAuwDPi8Rna6MeU3aaDgpk5",
  "key21": "4kbMdDx25m4xyGHDjTMzqowSVxHxwTQ9dBvwr5onRqu8kqxTyFd24FJrRg7w2GyS91xYbQkt861rTmtnyZk92cH8",
  "key22": "53hYNgyrZDeGaLGxjDPudQFttbkdD6jgRrj8r1182yGpM5bCTYcJ5vmw1MFSDyNAzvaAbTyfk8jAqnggi7RTJgX2",
  "key23": "TdmYM66oVesQk233A1mqEu2LseFEzHQQi2e6S7BmW2gMJWYxR9dWpqsf2nT78thu1BdHjTM1AUo648Z5pc8jAwP",
  "key24": "36fgPGGX7CoRS7MEvTdMPPQQ7Rr1xz73S7FUk5oP8MLkLjGJEsusKocBQ7n8WVvA87YWy5ryMP8zcu3Gsvcn2vMV"
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
