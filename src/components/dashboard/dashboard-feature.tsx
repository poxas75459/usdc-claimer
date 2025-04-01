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
    "2MbZVkjuRiyDUS2Aw7iUzJHfyFchKm2tcE7TK3ahpKjpukxCYz7ZieJEueZPJs4qNAJKFjGYSk8jkm1mRBeSfuTt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jyx9ZCDUxYRrxGU9K38wdY12NY6AmkqJkmBnhD1a5jZkwvFDmbrKmFGvL2KQrAqotF3BSPtWAm25PSk2Dvz6v9A",
  "key1": "3SRaP1pjgqSM6Z7N2M5mjXt1q9ELsubbrQ8wyCF5WpkMATUCe7eAqyv93ok1jvbpGynQjec9ecjbNRND4WnH7gkC",
  "key2": "5oEDkAQJTVzftFq96o4vYF3jD4gdrFruj9sdpyccETj5ya41Rg41y6RY2rJjq5kbmdVhCk4dxpbhDiRsABD2wSPj",
  "key3": "23AaTxkZF1EcJpubzHqssvqJaxYD9V2spa2xRKpfoZYPzDJFtRmfLGecrgiReKLmvY6Qi5xMC39yj4gS9kLBtv4n",
  "key4": "27R1ghMsSuyvigNJ6psJ5rN5TciPPJPnqSgf2a6FcAzGLtn6ispMHLysE5JCbWoKxvpvPqcuMMrrMYxqDRPgJDfK",
  "key5": "2Y4vomGNYdxg1WG3wnriGtNrbeU1eZVmewzoAHQgBVJNUTQ6KapDtZq1duUwiJfR1ykXDRdv8iYL7s3V8DiigUpc",
  "key6": "4ZkmjM9ziLq36EtzQ2a2rXzneRwPXviA2HMkG4kHkDQY7tVviR7NEDoskNug4LrxCfFxh57rVPF5UEzzFiRptPi2",
  "key7": "5Ywm2iuDdQzYACeTtmLCc4xYR8rVThnCgowRiYMrboXmDoEKypRbnbnAE9UzdGVivkRBeeMajoPHg9v3p1WyT1Ep",
  "key8": "5Qi39KYwPujk3NakrJErKxTJUMC4exArjPhxj52EMqCdqZKNiZdvNHzmf8YCt3fWi8Ho1nDnAuzcugHU29gfPAYY",
  "key9": "3wtVKeQoiLRQZ2eZDDhAUT3smyEitS4b2VspmcstXJGy4sS236bSTtwVXLfCKp8J5y1364XPCrinVMBWgngMjFK4",
  "key10": "2qcRk982trW9Hn4HLjUUCSbGtyju1F8PKeQvLgLwLzxgTLUPHZAkeysMsUQCPaDEYEevPWWi5pziFdmCQQDtb79d",
  "key11": "4gyXXsoLdfKKAX36jLaFC25j4XiaWzDVktdSKdi6VCWymzhANRUXrvnVmrvf8EpYyjHRsEeZam4goEpcUmFFS49w",
  "key12": "2om9hc2dcsZ9zqrX2o2pC4brejL5RaKVn3TRWt35spsUxrFnrMhKUFHc3rxYhhy5q5dbAndLSZwcE65xarC1TRCP",
  "key13": "d9JV4kacFZqJbCvzxbLX9Jepq84jW5zFvKzDKiUbrsX74yBfgdBH8ZJgZVaJ2sPQG7tWaq6CFzsASBd2XEWo1pY",
  "key14": "28KDRm1bcFEgqYpfGPqfSe41KDB6X2fgjiJNDtJb49DS5QxZpgJiNZupPF4xZu2daxMXwMrpfcKUsMzL3Q19LDsh",
  "key15": "2w1mzQdh8jS1qgDFZMhs7KXpzR8Qsfx526gPWt2UAVJgJGTBzGZ71KabFwMujAPN3fa3K5Jq4qfuBNqeiu5tQgmL",
  "key16": "4icUQf7njyJMDnGVdZfhpbwWAvtTtykTwZWcrJGJPLhU5HcC5gXG4rBsfb4gKjz1RWDCnQQXwWeFF5pTQAq1CEoi",
  "key17": "3D94kRJ3ZXTSdq2hGDMuXd3jw9kt71idzTkNAwbnFdxbjKTnHusVsKLFpsLJtXSzgo2fgGJMcUkVzAjHjP7Qfy77",
  "key18": "4J5kCsky3RXhHwNHKpR7dXSCNMBaCKgNnFSDi1yfaSN5kWP4hdR5fzABFdRLsp2dzzkZcXEneKYDoEnNBUZnpSrx",
  "key19": "pKkvmDNxUVk2Fcgso6hKC2FPDyUTr29ziKgFCuHewSmVqgpDnYKdVE91hby5qfwd5Q91Zqno2oa1w2RkxQgkGA3",
  "key20": "cungSFTuvDJgKJDYYRFuASjjAK2s6NuvhgtwisGeZZAtVN5sE9bmR2fUdPJ1MawWNPBeqxfgdAnZA1KxWtMEJJL",
  "key21": "3qac9zAtkXFrPEkrHVopACckXy5vj6s3oDNQMJA5EcRWfoDBStpgnTrUwYfu41dC1XMuT3YFiUfatnryxxjjMMzY",
  "key22": "gQABWwE7pmX8TTHX249nL8K4QWZugsUBbwyiC1kneDNFjjXvcmuxBmoad2oEgoztqtR993rYBjrncZCAXZyCfMw",
  "key23": "E1WvdnZ1k1DoMGCH1dsXEQKwLnbhXJUEHUfmkiCEXRYTbzsPfryeyGHGLyenCVAcTmK9HxJdjRMXoScXH14pyFY",
  "key24": "2rxEZv9J46n6dLnDSQZjN6fRvHz4vqyeEE4jrJcsbdqG5ZPqUB7hEHn2n7am8o9YZ5r4EMVbvG6hugizpoeQvmt1",
  "key25": "3FapMDg7uxrkFxLUCLzp7qhNJM7VZVXVi3gnVWHK57oPorhczTo64WRX8ZMLguAQNVmgwsqQJrQgrt6XBUqdqn6x",
  "key26": "2LLPTGboaM2Wo4aZfAKbATn6QGp7J6yykmNbGrsGseYR2ofbX7NLXXkgL3MWvTFk6DU4ZvCvrA6toGV2bEKHG64q",
  "key27": "2HPMkCtrbcXBKrLscNBHNMoUaZ1bLZfe5YLy8bWzFDB4XfjrWkXinZPx5ab9S8fqkvhTLxLkBQS4YSZsinLb2Bkr",
  "key28": "2cMzFP9bavnGa5YA68i8bDRypzRe6y7JZqgHkiCbzmzHq22d1P8p5R7nmcpTJGGYghSBgxppETN4QYzzXRAt5Ekk",
  "key29": "2enm4yEC6zHXydSjLP3FFiQNKVyk8L8SvQBccGroy3Fm4ByAo72QfaEK3PPEt5Rcc1iR2WssTmx7e9pvSubiUU2K",
  "key30": "4Fs3a7aGE4bUAD2Mjxdgj12hFQUs5gSXsxLyBsJfCsCB2uE7T1jh7U2mbpx1h4uwxV96fTkZJ46KAHxtPPhoEoKy",
  "key31": "VQKvx4emr2sbP49ynjKYSrKG8EhtxzS2ikyWtPL8dpCe2G9HpFnaUfTQWxtXnzvAEvTCxxyrqMP3qRYMCXWuwV3",
  "key32": "rXDqzweqxd9q3R62baBQkBh29iTWpjW7MNH7K2uLBEaWt58ZMUoEeTewtAeo9Va2uj32i7t18TU6pta6QNowzc3",
  "key33": "5qmEfZHJWwc9oVMKxisyDzskTiijU9Mzoyk7sxagC9mA4uZkuWwWeB4p8FtxbHtMhSrpsfgCL7dNwtHkwc6Utsxi",
  "key34": "uCjwNJQU8ZUf4EP2zMzR1s1KZ3MFBU1hohQFZfZ2kUTnJ6rBS2veodMzvb1LbytfwckDPbDQrTjwmhQSx9stWDK",
  "key35": "2d4jDHCUTUDEoHvFHtrhqdXhwwThyTi6c6vBFskquvLcmrvmL5XkizKsdzHg9x2putjCS3DnttzUjQfMn3FGMDiE",
  "key36": "4611Lnj5EgMVGx3TBcvbRrV6VsbPjDfjDJvdSr8sky3BPjSW7nieK6zmMkBDBqQR8rFm2h9sPYNTn5mJJZXvCPg1",
  "key37": "5JTnZoxBHAko9BReuxLyccy2dg4KgirKHCe1LFEDvTGg8TjXXX6zeK7kUMsLHprm9epWCr26gZUCzAwJTgEuHt4J",
  "key38": "4t8iUUMqTHpC3xdV4vDxoKWPzF86xsmnWBPyLUcVDpFsk62U7ZNvtauwAYkDJezFDk3br7ufBxQ1owrTMhNHJX6J",
  "key39": "2zTjFMJiefZygkMGVVwbTqtfWTU4cwtb8oSW2MCPBNzxHyPfMnajYSXA88svC5GMNSrDLhnBrnZGoiRQvCNVfmKa",
  "key40": "2FRRge8n3N9nsXNJBbBAmpJJnWVy1hJYGMVJwNSUtzWvA6dJWXZvNpn2JJz74YdXiyAXntNseRQkSzKpPaLAY1SM",
  "key41": "39CNes7oW81e3w5AS36VpQeCpHnrMbaqhyh2SQGctN53CN733nUtvKqtHpjN1dVNQ6aXvJ1Znz64n4e7nmanEAZ",
  "key42": "k8dmmWP1g46QCJwj8cFdzxEVdk7FeYscaiDc518UMoxoFL5hFuG1BipzWr3NzRNpAiXjLyKsXAeJzHv3nx55Uwj",
  "key43": "5yfshD7shy31aL1ZmA9f7ALrShDskEMpij1LvMRDrPfjS7y6YzX4u1MHLFuSK5C93ix82B1f2mwgC2vK7iPjVCBq",
  "key44": "3jxiu4pNZLNFysCv12D8zhaQiUeeq4L4LyDFMjj641yapiRJMQ55KmRhArgt73HLVDqoSYap3TLuXpdTyu7XDK22"
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
