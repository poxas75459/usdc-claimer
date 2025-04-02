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
    "43PpmDHtZB8MuPzzyaoM8V3fRxryL5JqkQDM4nip8AfdjKiESat4FG5WbchQrsCy1Mh4emW6kqYCPSvRmMCG9HH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9NCxqvewt6zm4o6A2veSDJzT6tAD3KJykFhassxn6ZbnXgTNUPbNhmxjEeNn958Y3bSHCZFNet6kdyMxqPboPV",
  "key1": "kQwD4M2W13nnS1Z7ftpxkBGjnv6anZNzQKFy4sbwDAMDwz66dmt4uqsQsQBPcL9ss8t8RVwCtef9rk6CVzx7oCB",
  "key2": "5pVFJQxUb2oxeYVzxGpHxWAGa35ZfF1vBUWPgJ5fab3tapc4tkykNj9AKinDNfVHfHrLNU1Po62iD9vjixzQN8mC",
  "key3": "3kfRsLvjCr3cpQM2Bkq5u4p8EbymwYpAe82Fpi4X9TXCGHpMiCaQVFt7d9Zk8kVeVBFZJTTLWazr2EjyFaRX9wnN",
  "key4": "5ieS23Bf69kP8Z33WbQnCeCXj4xxfc6GPP2q9UmAZJcpf6ax9kyb6cyDTtJRfZ9U13oTUYU3koqsLCgmKbtM4K1C",
  "key5": "ZjW4g3HddAe8HB4r3Mbkz5Rbc44bM8Vy7aixxyMwsYUpg1YVgQ3FyTXiQZPSqLXXNtypnfiYi15NKLNSMGNFMcG",
  "key6": "2a9qBDfr2CeKQUY3XUudQkfqEAeoa1fr7jCiiD5XDZHF7noDMMF8DwBSf1scXg2rAWKrRTX9yjtWBPDR38jjtpjS",
  "key7": "28NWuMQpkq6arMjFVtyXGgvpDAh24uhzD7g5jwyBEotB1WQP7hSdxm9eZEFjZq81HEZbsd8iJVpG3QkAGKwUnsa2",
  "key8": "459ev7fLx9pcnjY3kNirs1BxaaEJE9M5zdTJ5cCrrLcPGFtiJse94tWE1wiVVtPgNo9Wsbg1WTUTZ2VR3Ka6gugR",
  "key9": "62b19RAvDtW9CNR5kJCtYZHen1HtTACzAJDpJPY85MKSFyqoZTqGQRyNAscoaisrsqc32PKBvPVkbdjjMPRvTtzu",
  "key10": "5ECaSi2x7VomoNF4ArUj9NDP4Rat9ZkwWbsDe5e6Rs1LeR4jmbzjmEym41kECns4QxgbG57SUgQGYDRJjXEGTRhV",
  "key11": "57LkPX5VfiN9kcUXK1CUqXrgncy1GSjifK2sSx76mgKqqE5zSTnvhmNjgyP5b8fDXshA6LSDMhPbDhJgRywv9MEw",
  "key12": "2BVb4j2DK4d9mcDiVv4FkqFKSoruKryztyET4XvcCNcGk97otutuuYYnieYNKBT23YbbBbqRPJiZLdNsJVvW9MXK",
  "key13": "2Tbvygf7Cuj1E1WBxSFew6PnqV1NVz2HFH1LitZcAyVJ2GCJHXkcYS1mvtVNEJmcRETqV123Eb3BdrKBKZkb8Ddd",
  "key14": "3cttddzHpsZ5PoWqsuUkDXCbL7k3kN5TbfEcfoMZjpKy99vYVCXVE2is131Hh2y6vgZ2UGgroZYGp2K3EFxdNFS7",
  "key15": "gUd2Jq6iqFWyx21ZQ3z8w3SmEFiXU8puZPQATCA1AsLcBRcsRdx4u1QKdP2bwWhnhM1rPWV7qTQxEaBFHsCFhfs",
  "key16": "5fHXHaFc3SuyT7DNxwFoBudwX9G8K2GARLSuDeBRkTT5QHKtP76kvHA6MpAadeZTzsLrBZ8TvC8fonRPtvreaKny",
  "key17": "5uucXeMSikU6VXzRoJAzXD9CX5F59HvaaUQELbF1SmtX589KNoyKiH7hPKrcYNL6L46PHNuHALZNYkPXDWv5zsZL",
  "key18": "4ZzQeGMaA3GLFXH3Pwn5Ukhod5yZbCusyAzZfBTxiUgsXyPZYA8DNmtR52d3gnzGiGwQ9injgiyfMkgLofamekiy",
  "key19": "3bw8ZsZLx3vZR4dja2TnvjkdWWqT3Mx4Uhx4kKqiRmjhfvXv4nBJjdprfE7H12qF9pxKwaqjoc6pf6L4LjpqRGLb",
  "key20": "5BMxmdPfpM85A4N1mS2svNbxHSdiVm28S5CdLnTgByUxqZ4qE6CoRCmyoWSDJxSdDw5R1Sh6Ftyaw5mC7QQFpGG9",
  "key21": "vAgmfKefdsU6BQgfN8oRVpDjv8K8nqQXhnx4PYLDAzmbeGnjvovSrXdNah7DjwdcghSyepdDwtywmK3veT3S7D7",
  "key22": "4Has6xeFYwepgtcMiUz6GcBVMRZgW1iHwafvRZS9tF2TW9Bm6WMcgYpqNinzimWhJArcy8p1HghjNoDra6aFQzmK",
  "key23": "4ob8zY7E1yukjcF9xwoCr5dWHq3vPEHqAaPwQDmQbQMDzGTfZ4Ayac3DLZDnNkVF2DoLVBVpuNrJ2JYL21beEjPg",
  "key24": "5Lr3Mo9KH8gkDt9SgsdFJbdbkt8ousMEHneMeh8CYtkZBHvRM71to3RNMRL3uLuKbtcPoMemwf6fpCXb3NH9VzRd",
  "key25": "2CBQhjoLFxMLGS7roKWqjVFQBTFqKui7nrQuBBrYqujou5Xv5vRcL7soE3PsFLfhJzKuurVGi6igPXbxtZy9rHn6",
  "key26": "61nL85cf8cUaizdRfUZumPck663R76VvT84CfBDQPTC4WAFynPBCc6mhQbHpAojgbGZCCXUVPETiVxzEBZ7kLpX2",
  "key27": "5PrZuymENN6GViLm1mzGzJGEP5az2cV8xpz4J2hUJGSb8gRs7zu2vfsdKyxveqGGpxGSTj8nqfD1sqxZ3DtGKzDu",
  "key28": "49HQfpkTorgpri71k1tkCbuc6h2yu2Fb7mFYp7CuQKt5XgJu5YGnjYCWdPKighD9eRcCQzv2PYjLzLnnGY776Tzq"
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
