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
    "RiShTnichhSWmAV6CyXQgBWrPf4k9Zp6BvsHMhubBR76tVYzoi5B6M7NfGzt2p5vPZHfxuPu8fE5wTghSmugaGz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qXRD8hUAgPAyX7yfbXn1q2zEJ2A1sB5QMKYZLDhPB7p7sVwiQEJbvZSrcuFCa4QYnbx7DCzS3z8ybjYjXJoMMKc",
  "key1": "5RGHzwbx3J9iTrWJUYLeRzsbQMgU46eMTcsPGZG16me47fn7yqF8P7bCsSUSAAKfnvCdEEXiWHZJDRtNn2zkhk7j",
  "key2": "4yT7V1EpgybTDrFb55JwSR1eDwY6H6xdMsabPCXmTi8LA8n9YLQPeerkpLckjScU93k3Dt1SywuBVRJLkqtKkgfv",
  "key3": "5soVFUVwZEwpiCf3YoicXc9Asoo63WtfhKkZ3ziLvy3sLtmyaxZggBiL9cusughFVMyzeFYHVXqi3sDWz3zPbst8",
  "key4": "dGfM7dzJUh46jkSiMnqnKFySVbTS7Wi1EsFMQD4pbD9FVFjVMxehJvneykNZ17wKwCU4MRESSLLgK7EyfXTranc",
  "key5": "4bVuirhhKbHLmLX8i27GzkLDZyea953Wa3if9JxbHfH3t99UUgnWyj5fRMaHhBSbFWe57ihcBmygKUfh2QUcth7m",
  "key6": "5J2CZ4MdGHGWkDUWf9Y69k35okmxsALbpNEo25VveQRUJt2nwJkm8hHsw7pKW9vahTFiaJ9nSMgPzqu9Ek737BTK",
  "key7": "2oaBgN9j2tnyunEwHmcomve2rYt2LhuQFAuzjFGjk4f7FMSKtkq28FAfUSD8JKvragUbhXagBy5ELYPqxJDAygmz",
  "key8": "SmU8R8p5P4CA3H5VbdoKMF62c9X3EsNWLmp24kNXbRGsug4FR2rhwGs6fYSif5JmSCn9vkecGggG2TwnfSGqTdp",
  "key9": "4XfrDR5qLUVRnyKB5rK1GnpoxfNy9Nc7TrgMkwnbpzDSmEPWC5TNTwx4YvvDzyfD8yh94wFo1jRRZZvjAeTZTUUm",
  "key10": "2P3rj3fatwEfdSJvCC3JcLsUDkwLfAx9tWaQMmi7NA2zc3reoi9A86Zj3B8WvuYuwaU6nZLnQgwBuGcoDCjPorKY",
  "key11": "2nTg2BfQwe5iCohy7zEHbFhGm7ikQ6ZRZVtB4Y7Ac4fVS5TCZUmJcX16VjoeaHoHhtyYrtyWuv6BXpo5qhPZWZ23",
  "key12": "3QciwtSRTgDQnUxrQzd8muJQkk5r7Pu588QMN6ttC9jeSk7JWF3kNE16ttrFSpvy6cd51F3vXix9ifqb2bEr2732",
  "key13": "38DxuCMDExDTsnEp4WiHzGCHNDcpBBNGk72vJwarMu6ouNVwz4aNLCHuu7MdJGeJcvCdxNTTZHmdphbjqEq4judz",
  "key14": "5bQuqagWX2cAbX43nkE63pQgnBx7n5e8PWqQdcwMHyJzXpX9vcjKfDmmUAPe8y4qFNRVmcGVRQ3KrG5N77vyp3Qm",
  "key15": "5xt6x8JZYb1B7o3ZGF1SmtP29WszP8HZoczNuYq7T6gs7DjhzKpevQerp9FeTWQTgPooRpCr1v9icijfq6znaWCf",
  "key16": "1HAhXMCwXW1DBmKziSqWLvgEn7GcwNRuKD14VVpZRtRSczYAsdhAifFhLA5q2hbSQgeZAp3xhEq2SXQ1R18G3b4",
  "key17": "WmQpLpx3ZXQ4mHaFso2dX8Wemg5tQMxV7fwyDqM5wAukVsgQhFGGon4XYwULiPcJDxoART6ZndiJCqUwVHjmn22",
  "key18": "24uMLU52wtQ3LadWpPkXR7T3gPr4BCbzwNkLhv7Rc3SYvvfv9neuK8sguGoCuGkWeRZdLmywEj2tU6XsaAkJ2bUD",
  "key19": "4ysnMc8oNVAns1mz6SrhvYvc42xQCf8Wtm1QLazHGc1kRDKtM6acB3SS6FZbyHsVrx2RyBSxJg54Wcrz3FMXdcdb",
  "key20": "2eWvkrNEmzPGZkj5UE85i7Rg3Kj2q3Mtze5Euh4XajVqm3G4MLL6N87AffAQaSCU4e5PUGhabGXNon3rbZ8mXVam",
  "key21": "3bkBHN5SmybV3bKgggxb5xxLTQCtUkfoxDebTfnH5GVFjcUXkfCxRTJwvTd4BTntA66miRQLhGKAtkY3Rch7ALef",
  "key22": "iFFtPafsKwf3LmhvfqE7Y9pgnYUCWLUaMCXodSceGeke3FCbQMdfNZa5qYZevQ3BJhz1uqw7r5mm81UizCPkuiM",
  "key23": "2yPSzMewyZUyamLt8L4Q69Rp57XDUP3bDvd9CwYkV8M8uYeayiYfRie3T9Tm9LStDENbs1PRBT1gWL2jdNtxbUDY",
  "key24": "3bsJFQrFKsmys6P6TiVGaUCnM4RabrGhAA9DPCN6xKJuGRNKrBuARNbjotn4vCNsfSvDVnzbmif4catvBqwQZH9Z",
  "key25": "4BZSETfpGnovqUMjH7sWcTsW3BKyHZrCz1whL55xHnP5NqBNhkSkvhm7c6x3sKEh6GRBasMnLceRfjgZ3NBFuNMp",
  "key26": "5utnG9oBK49f1gDUfksuMpgzWpCdLbExagE2dKsTeHZc7PKVuWdTvpivKbJqMh8M8rG18wkrXieXrnQ4PhfhgGtg",
  "key27": "5FCSZ7mi9m8URAPa9vQE43Hc2HbYov19UuHDjnbLMJaecca88bhrKAEmFQzeAKjZb93JfAFxkMrStFjrQYviZLND",
  "key28": "4A9hq6yviZaN1QoVR7cxR5snETZa4MkzojqcuQJiqTQGxXTqgf4XPDmkxLu5dtxLpoFXGrWAwPQQBbJDaoGNKA4w",
  "key29": "5BrJPSsF5UxPw9zcoFSed6FW3xtKxfgJeQjn8ruJJkGVpF6ViVgUT9uYcrGeTHQRGfv4UtmgTZpbM351WT6Z6de5",
  "key30": "cRVbFqf1sKZAYJ6AycwjTBrJ9ECDq92K2PJYKCMo6SxSAe7F7TTwiVvnpy3GGLhLLPmdbrAsGTCQCq3fm754LpS",
  "key31": "5UtAQXLeDgUHCkMdV5D6kyBohJAy2a5P1CxneygnXg5yffiEfkz78MvSmrcupkE3jKTWtTkK5GosPa1PF54Dgu1p",
  "key32": "4eR1QrTsKZbrfwMzeS3TfreDMqMhb7c7gVTg8QU3MDBj2zqDPa3RhoZXmPU3JLQQ8AtTqwGxjDTdnGJ7aSkTkSeP",
  "key33": "35FM9uGR4aJtW4dcNp1aLpoHYUZR5xiT2BMMqevtLPVr72RbCisgGtSxkpaHsSf6KPGd5sMbdaft8rPxVJbDDhRS",
  "key34": "3awLK5wpYvNnpyiDREjHDjhgpQEw7nCwoWPyFqu5EKegzfSB81AMUcJaQb6rckjFEmZ3KNbc47VjhuKQ3L5B7ngv",
  "key35": "5QTKUNpR2ZDcyra6o8y3ZYCDRzZnkjJ8BhtDomUBkP6JALbBWZMPZFHqeMmnxxkxGfCAz4ZNFi28jiUXEH8KxbuH",
  "key36": "kyEeXEJ75p7eYXjkzstNk4n4WKGeAxRJvqMLekLRvr1xF14BetmZAAV57ByKMZSri7gvYUUo4bUBToomWLdrLvM",
  "key37": "4dzewAddKY269Cepk9b6hsM1Lg3PVBAhyFsHAj3xrGhibmxMe1z9ktfzzM9sTekMeidLJtpLpXbz7Chug7iny1hk",
  "key38": "3HS1HaSdactzERbchXMHyysZmWPuxcup4Ef9vFCEWJHchF9horRjyQ8r3gmYpN5QTrm1mTv8qQSnBehBkvVtJ3Nc",
  "key39": "2rYb7GYdeP1CebpvgdvpYTcN3LiFiaB8FAR3tYEin2FxuCvWFe8f2p832ykLZ9BL3vQp6JU2jnm9DBF6ZsM6f2xL",
  "key40": "UhwJUunNXuKdj1xvuv95vee3vwP2wPdnSTU8cDUwTxdPAojghJgokqyMSMtY3Vr8oyXxJ262oZGpnpKMPCC3SdJ",
  "key41": "2TUC9JKrTqvBE8TRpHLefzgwntwqCanjMCQDFLa2ciG4FoaDsonYaVwk2XQYkVX8grZkhDP3pSBKLAwmR3GCWXBe"
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
