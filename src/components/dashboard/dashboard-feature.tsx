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
    "3ieV77jPxUKtTHSCoWD329ARWxzuZqokaRXkAe3rFFtAK8yvkKoDsfPEB6hfkr9jwZcJw6jeiew3pxaFZkUzPGCP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PufcYjbWxUVjy8jxRzuYQezKQDF9TChVSennudy8dmzeEvwusLGBYbRb8qWyrivaMCDSu4eaTzPdD3xwLT31gHX",
  "key1": "4YWMww1UmkR9ZjPef5hYb6qyJUHkNW5nkZGtdXe2ojhHeGmqYmnv3Wpngqzx5JaFcgoBZxJfM3KGTB9N48qY9PK9",
  "key2": "5craotJj3sgd7z72HWumgTWFtMRuTSiWN5DWUXqHL9AFCVTiegQw3GhJ2QToo1ZkXn9CkCkgFrKB9T21JhukRZWS",
  "key3": "21zsAZtcuJo46J8UyVPg4oStHqZwUrq2dAEZdrX4b4p2Us7mHody7mfwANYks8oCHfb8AUYicN1W6zy5jNzPE6Wm",
  "key4": "5P6C9pDsixpp9kftSM5pth9dVmVFHbQSg7nLDvxT3F7iBBcZVV8XhxDCK6Rtdv7qwizqYPU7KU6LJbvX6c2Ev9M5",
  "key5": "3d35MuE4L3aF6GhM5HRuMFDB4rq3ZPcpg2oU3wNrs77VHmYD2Kv9k9oUmEThNLXorcmX5AMhq1YAqV1sTAPMrz6x",
  "key6": "2vbnpgu9pvToTRvvL645Aj2sWXgJcTmGj9Zw8AAMy2CMdFRRqXDc9QAshTzZekLmHiijxAH41dSMp6ZvSYfEGW5g",
  "key7": "23ExphoD4yQxxMe2Np5EA5kPxJtfGadLc1nooXRfttSmPSAemG1D6xFbuf4TeBrjbeXyZYuE632ZHuNFF1pTw3Jr",
  "key8": "2Adr9Etzx38Mrsp6BwgMHtdKKvQqGJzbaw6jV7SSWnj5Lb17n8RTP7aE6yDCLWy3KeT3955sgvfKK4Aaaf5esspt",
  "key9": "j1MG4dbWqbhzuzhDd67A73svpQjSpwAqTLxvv5Lz8HU5vkinZ3C7Kj7aHKNePtMSZXNcPM9xBPP4VrVUfnWwNrW",
  "key10": "5qGb2RwS3hpbYSeNahwpeGuBJ4qzJhMZo1XyxeQ1DuJEYgDCVqxX8UrH48hr717G5x4Wi9WNybw1DHPaf5PQh84E",
  "key11": "45cjgc855yKgxpDoH8ZGg1G3QYym2XpZUFekcxZwcntmomLZ3bZM9VqHPBNRiYE3qzNsUVEPf9RCF1LKP7GhbcTd",
  "key12": "47VKFgaZeVydSkhCN7V4wKSFmyxURjZC3RgQUFsr4dQwFoKP7zf55TZDgSCXBtXSEkQSQh7nPLs8aDdLe5nNiWD",
  "key13": "bWJcwQgVAMTk7XKfAYN4fD7fgFH5rRzeAyq1utcRJ4uTAqS27fd5fodiR3mkpxoc4PT6xbPScsaF7v2DraY1Q7Y",
  "key14": "5TDWEAgHXzLKwuzyQeZxBztW79Tf6HGspkSZTUHmAm7UTUM2Y9Fv67Ao2dw5rMNjzdxnbHBSwTF2eVDro9v5itLo",
  "key15": "5QCdwvkjGv8cRd8iPKf13vEVpGNXpct84WcknKWBPWgdexAQ31YgABXuo6R67JLVugCuhh9wghtmsp77MntvYJKi",
  "key16": "3W6ZkN55u9fiSBgN2ZzU2eah6qstx1mJeydDw1wfPC8LutnUmByy8iuHYnXGa4hLKdSvTe2QgWhxhX5YMRtdGf8s",
  "key17": "HPU1LtWst6krrGKPYxmbQcRDE7R3tZzfp4gfy81qLPBWfHf7ffZdw7vrrBJaWD5ekRAn8GDPVb8RodNDZynEQQC",
  "key18": "BrhHt5VW1E8yfuoHhX1RoM48cZiviTXbZW1KNu9Uw3twKrcYs3j8bSJwYHaomQwJbZYNxwmhjjEZ75eQySM22N1",
  "key19": "38R38rLBMkJqUZ4w4eagrLzMHRo9RFE7fqerBbwu1dQbo6uy66bHAUhCXWXKZBbjHsHBoxW5dk931RhkFV1pGzrV",
  "key20": "UZ5YYudWKsKbrTX8z4uDjsHWfwdfWXWbLEWKkrXNZy32LKpf5jS961TfFsMbaJM2fTMuSaFSszcmXHjX2pN9VVE",
  "key21": "UPH6LqPdbXdGAnbC3QmQCPNfQ4uNe8AX8AG2ssLv6MZKSVPu4xKyHc1y5UScfMVCLjJuQFuJ5b6qsnXjT86hf4W",
  "key22": "57DPAPyMXfqoSSo6h6jFaFNJad15SKwaefsSmwvZUc3qe8uoaQSBHLm27DwRDh2ZNVpcQ4tX2HGafAhhz6zYEPe5",
  "key23": "5EFWJ3ZYjaKaMZSqZhSoWcfBPHdFg9DMjzZz1ni9LWqaSHAP9EnbLckFt7nsTKRw3hBGtjR6NSNTSCLmjN6svWfz",
  "key24": "3RP4CXGgdqjh6fNfsFSQBjpkMR55PCexQV5g2hbDTbzaYiwZhvTEp2F8yEGuU1XrsNoEgqyHEU2xm2iLFnGChgVz",
  "key25": "3r8Rc59rvcMXuvQFJTkAyVLhSYWoQf1U813J5eHzbXUx4HHbhmCdRRoN3ZbuxFCkGUVsP5n85LnAPRz1pdAwirPv",
  "key26": "2nUDSvrAiPzCDJA2muWLYJ7wN11FKKdLdrXopYLbKvymKvYYczpx4hqLvDdqYyYoD9pzpsBPkSp1bYtMEyNdjAqK",
  "key27": "4vrYA6wUGdcsEnh8XhNGdttT1iMvgs9DKFi4eXtRT4wjevgQyj68F9yL2biZ2RbAdkaPMNXMbpHV2MoBfUKzYWnq",
  "key28": "4rK91PefrgeThcCVXbgcooZA2zYbXbyZxuWKuHQ22wKGJcXH2eKHvcDxxbvy6Fd4VmhWVuwkQ4csiGKt3nAphJzf",
  "key29": "5hGs9VW1CMjF22GdsY93NGmFkzzrkUKZJAtvdre33sDvWg1FmBfGmt9aTYVUApTzVyio36tDSHUeHZiL6isNnFmW",
  "key30": "2WCGX2FsDX13MWXogkSN2wbXiucpCgiSHVZTtFwUc1V46bRCmdqLd6ZnCNAeW3tU2BfC4Nn8PaVGs46h6Zkarkcq",
  "key31": "3hc9mCDKCQx3toq6JxQykySn7EnFyVSe9p4PHJ95w8Mw7z9fyUEwNXH2Y7KP1d4topjWxEhdZUfXmTLL2Gxoneck",
  "key32": "AjvUTtLv6zFjjJKAU9ErDWvV1uCStKeSUKWPKoUqsgPTm94cLgCafDFdV3u79nNZ1xLxNagyL3bYWLAbLDknF4p",
  "key33": "4bC1LXSG1Aca5qggNb6VGpkPafeacXkhU81L9ofpHCJFMdRQrs4DsZzeFdTJdXYvb6DJ47pxj8JhfZGN3inrs9qw",
  "key34": "3x1FBLLNC5oaju8z9ZkhhZFGq9WttEkSNkiyUiiU2UdEQmsFUeJaSQpXPSEWnaFogknH3gmbijzYU5AkeCZhitsx",
  "key35": "2TckPcYgMoHkLToZk6fsQAxYWSygsxW1rmoQKkVWLdpLXUt4L5nt8JELAzrwckTkcdaKM8XfY1zbi4PFEGd7DKFt",
  "key36": "ZmK1NaSdfsouiDURYadVvkjHvWkdnjEXwjmJEJsi2XRcYpttpFNoECWsu9v1ZYnGbb8T4nSwuet9KyZwULEMkhw",
  "key37": "3Nzp3b6H9D12NCvC1GrdnBEyfJzt1QBKeDvd61dPzjxaab9hPYy6hn19r6oqW359kdmugqHjoEk6zNa5s2J6H6pp"
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
