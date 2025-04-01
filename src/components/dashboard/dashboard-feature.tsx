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
    "pgzeVTxstkiTQgnnRGJiYAbwBdSnDk1E3jNhsvtPaFGzB97ADS7gAntuCzzbS2BHCf5KwJhCiU3th1CFMghAd1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aQ7gF2CRGezgpJjn1L7r1D8Kj2PEECGx8iYeBMaM5eduzNLPQsR1CH5EgNDPeGzBy2TbVzqi42yUPhymkgsUxns",
  "key1": "5n5GSZQmfLhGo6tqwuFjZBpEFS93v3itamwLwgvfBCocvzs4uL68JVaN4SEx6FRx1z53PYQXLMFv6mzbtRg3arX3",
  "key2": "4JbARm7SDddtn7azeR8wunzoYVpkWQ7zsQxEBEiDBr97TCbsZ6y5igTDSbGnWd8BnCqr9hwcMxZ9ikhTQTT5EPaJ",
  "key3": "3dtirzyH3mNza8ohWg7SwD9zmUvacMfXZrvh9mezbgThapMCk5pDhsnHnCiH4BcH8NytZ9vFwTnujz2RJKfsTxRH",
  "key4": "24AUJFNs8zKb71XskL8HSwdhVbdNnPsz58zRcvW269iDyiaoF27z7tUGX5bgRQTfH9ZAqPK1ogxSfVSWJzikUXwn",
  "key5": "4eMb9Cxzd2qgCZrWzigbzvG89XXmmTCTaEP21PSGwjFaW6ex8dmUosnA4emhcr2dxziXMcbrkfyasErqwtD1wycw",
  "key6": "21mUXTgWaoRujr3jV5QCBSpFN5GGTxUHYJ6FRX2koBtJsKwB9myEVBbT9gtFA3NABLSNXnNmgjFPwW8jLovrY29K",
  "key7": "5dKauP9HQjh8yb8jfThKE77TEovxtUZ2Bp7fe643kpjLMqoNfwkfg5LkL7cS9rcneVDQvHW6chxEqiV1RPUcvbDx",
  "key8": "5gEUmNZn81KK6bpvHZ7JfQLFHEvpX81sn6goXUG7mJCZgvmEeSU8jeqidR185VC7yqN4vpQmiUA7n1XdW2Zgnd4u",
  "key9": "3GSVnmothzKJ7oyS7iULghwUyeUascfwGqoRkkN97uHiG2JCwwm9g12KoQcbT23BNKVpaDzJqjCKkCqQ7gkVtdaV",
  "key10": "2YS7THLDcLzaF2M9ZV68J5PoBPDhx1jDpfZg4GJtRhuT8gP5ExsAyXtDJd7vaJTAY7JkbyS6TSF7t3j7QhsVcqFo",
  "key11": "5muVwTucUQTH85QFyToaUPDUsvDHVj4mat4r4RbTfzhrKsG3X8hJfwxuUV3QRJELQPDSFHDJ7RQFLtDtXsDrce8x",
  "key12": "2cpW4VFQZUFfrdhqyGZF5JPTxeMo3Xqq5oiDbgqx7RRAQ9TpSHop1aHnpUEwf9VeTKNdihfPLibBsrjVY8mphh4g",
  "key13": "1aVU2iindmwjK4jbzkD2yQ6MMyMV7oUM7VtCzsdj8sxTGfgWGHKhA4t8f4wtE8L4h4RBnB33Jt24aGqPDi1Jjmy",
  "key14": "5sHbvk8K17H4nJA6hSL9txmp7inNtx1nvj5wtTyoGr8SYNV1yGjKMGxXZyTzJ5wyNZ7uZq3EbvqgP7mTzboCsPgG",
  "key15": "5sxEWUi8fJVvzMRVBNF8PB4z4w7F31vZ7SPpDaUdhdGRGYBU1bJDyQCP2WtaPmcHRuWMGkem2XUm6ybDSYbMGtQx",
  "key16": "33DEqLjaPDtU3AMbp916EeBzongn2RxpSej72ZFBbqWP5GiVnc8eupb8AmyoHLhagvirqTT4qL74AisR854RyWx3",
  "key17": "4VgLHK8A2pLRjUgsbiPPPcc37EAxGyjd1mHVojEhNS8N7RB1QCDSdFxoZnbUJW7k93rv9aaubrx7XBYeHTs2VrPu",
  "key18": "5KgU6THG8DnW6N5sRuU5acvzEtWytD8bgLoJGheZtHhrhijZGi1HFupTTeixADQf5tXjtv5puho8FJVWhs3b6HCJ",
  "key19": "5UJsMUmQNL85Mjm8QGtohP5cbFYXoDNg6T11xSv9GppCHhjRR8wVZMku6CZfRMVh79fDYkDcPYqfFQBvticUdfw9",
  "key20": "4w2KaDNisMdK72PhayE8xUgUburbGDN8YLD1xA7nRukkqsWJzDCdgSaWgt1Fr2PqwBnkqywh413xUnTFGGJzJJ5B",
  "key21": "46FuW8KmxzURtvB2gSqHbXWwooHMYnuQ6mLzcNp9c6nksxMcNZeCdoeRUstCwGs5ErwWbtw2xFxeSc84zX4Unbv3",
  "key22": "5xocMg4PGz32NtXKAnssHQCL7x47tKmEnuf3cjGXqkv4X3JVftEFjMPn6rSK2x9QzRUjTdJBxahH5M3xuBgnuRYK",
  "key23": "5KqopGV2BRqv39eoVbDRQ3hVvDdWyVrz4nuUkpbG9p6UE5Xmu1zJRcmjDG3149PRSchMJaxgQGKQwLVrCtyhpLKU",
  "key24": "2SH1hrtunNsHAKuLxWhmJo6znRMXEEPpsFnB4aofFQsr1ASiyZPRH3r8fK36M3VY8TA1mVMFDv8CekP8pCZovWLZ",
  "key25": "3gYCurmrNepTYZ8KTiQeHp8LcuDSMHLCCV4xj96n6CKwgxmJcUHwcsXQsPn4KcotUNT9EMjnb6joY3BFqrVsUfgT",
  "key26": "5dEsHs9LEeoWFxBmYv4YQdgX9sDT2hJk8oVHzqyhSNL3GeD4srFAXavytj8ehPMAezgr712kJNjZaHqzgfghPo73",
  "key27": "5DEE88tcEzfxMrpRbLAuwBv7LiLuVmLjWNrW19kvxXMVE9CVjE9BZq9jJnSQ7ZxNEZJ7xuGgmGxT42K2wkBXFJYa",
  "key28": "KebxmvG14VR7hAivbmTBxq9VHQpo4DndmZBkou79XAoy685H4SGhAcg8sYJq83WmY1tiYf6Du5RZd7kHkBd2Lqu",
  "key29": "5MzC72sveeG7TbqvUVPgUtPmVZHLtgWMsnZnQCvUPmVQ8AWFvRJwrto9LfDHzG9idqVVbebSqMpahdtWFSiPqP59",
  "key30": "eNFYSP4V2qrjxievZUeedQRMR5XDCmQRRzxtYVKWgFCSNwfqGXM3UX7X4EGreUGdcYgLqda4RNFwUg2226kCWeu",
  "key31": "4s1e9jX1iodkGYUw7EzTSxJ5rUdkEWsHH1NnjCKtNixyJuEeyxjLAvGu91o5Kc3tPNyvVGuNkeVdY54fmtZCbpxg",
  "key32": "SMuMfvtCG85JDVw8u7xzfqGgadhRPPNqzadCwbTEiRHLQwB5PVwpnPwVRdxZuBB4ed9aoNabMuDNVvagsMeQxrR",
  "key33": "4ZMFgitxvReMYFUoJAjqfgTTw7VYYtAQcNxSvfnxpEZJBPLr4DeBkSaWvvfD8fgG6SFknVGN148xxJBBBQBravgu",
  "key34": "5YXjiUXtUDhH8Qb18nzXSj3aUd9LqhQMzRmYQ7GhtG3nkLpZkvoQra8vhQA5pm9jbtFvUCQxYLM9TiRTdU4k4Z2s",
  "key35": "5nhHGYLW7mFAUtoo4XbLBKCwcx4JknU6gKyZ9VPqFUNrgNEaTYumReqAJ1TWxj7wPP1nxmNeAHxc2Kv5LG7gweP7",
  "key36": "4BhRUkqUj9DgJ2oE2V8rZGVtMcWy1pboRKptAJHK8GvTtjXapnqwr7CjaqX7RynqhnZfFx7EGbTAk7HvawP2ex3o",
  "key37": "4JPs3hS6Wv6tPAA6DuWRq7eRX2oCuwmz7v2GkWPaFSUThurXbVwR9pLyQpShfoANN6G5A4fvLEsy8m5FdwNr4K2Q",
  "key38": "4RsRCqiLV9KKTxuCa7RCvn6vWAKYAzpBmvy7Z9SyeALnhyLXGNwmqiw3SXjhq8ftQtve7dZnJL4kS7DeQpoLobMj",
  "key39": "45Gas2JbEjLVhdSTt6LaQcuMnuJC6uohXXE8QSTLkWjXFhmh84LRHLWwdnZ3kQ7E3VYF2NwRbAtbJF6BXcNixN5m",
  "key40": "58iyYcQJzS5PtbzqLoaLhVHtywemJR69XLhLiHvT9X2JveHhEGtEAdnz99ftyLPmJb5yFUNAVPvXSM2kPVkRmFzp",
  "key41": "4pmdoMQFVoTyaG51mPvcPUrRmRyU8xjiRMyQmTgEtPdP3jBixznKPnvnJ8Kt92Xd3DMr7HFv41voHvN7SCfY7e98",
  "key42": "2tQWBzvzGEoy1Edo53c7DshU5xAbNoLZqRzieBdz3f9QPCMK7Jzp5co8nfTPVKbV81VsojiWeBMg8XRpSbaAGwKN",
  "key43": "2xnKt75BEWPkRGMCq5eVbXLDhzXJ61HBdfwzutNpA1yjzMoXrzHaUtn5yQNFJJy34zNzYgLQuLU6bfNgmqdo7u6d",
  "key44": "3qkYpfMnmavJVcbzwGowZibRttJuAA2HtGo1gtejcirAh7Zc1DScGzNCL3DwuP4NDmy9JTEXvLT74rNcpVpMoz16",
  "key45": "4pP5VxNrxNr1hFJbjqgJF4k6oLZu4RsMde9pgZDjLmbehudehR9hw4wuRuF7jqgkec3e9qeyRp5FmqN5NQpaekwP",
  "key46": "SnDTUErydudnd6NwK7LXBvMvM4FEVFWKjEaqHmyZ37PVDUzkqqPbbevUseXnqdEZxA5zSLhwdQWUWh3mqBA17hM",
  "key47": "2PpHRsn1mxHyiiVcq2ca2WMjMeU7fd2FpFmqhmBFyMNzpYJzx5EVRFKqwEBM6sifvhPZoKkiZ8nNbqszUuJUKVXw",
  "key48": "3CPh746qiywGZTTLh1njPisa4WJXE5AXpJDnckty3DPEHYeeWV4FtGqatUdc3YLPBwiFvYxPDXsQDDAsunTCPCxm"
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
