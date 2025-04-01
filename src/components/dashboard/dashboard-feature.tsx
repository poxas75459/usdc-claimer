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
    "3DY8iZB42j5BYh4bTDb8Yhzru9RQRSFgNz9Z5d9P29U2SQY9LSGB2Q9UVAHPJat9x5FFXBZ8WnkJLzkEqLzz4LVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58ns7DBp2AhTrreJWWoH1xqyafjF4sdGnMawyAMg7vNkYmmga3hJi5XiZT1yenMGA97DmetU8E4hErVVV8E7GSY7",
  "key1": "4d9CG3fAXbDpybPrnmyQWYnig1vZjv2BMLhbrhR1jtZDcQVqEy1fNcosS2gKbHiCspBSjenPgAdK2guhARXSR4Fp",
  "key2": "3rGFwmmDfRTAdgQ89NWgRjs6wewzehC2EcTx8a95FveeDPJ1zB3dxPgEhkPAkCaWw2yMDFQ6NrBnckGm5hNXFvCC",
  "key3": "4k9gjsnPgTULwGU3B5VJ7YfeFZUY1c3iEnexfrNZt1ArVaDU1jZZwhhkUSuxAPPy9FcQSMZb8KSa3x5yrpWsXXBj",
  "key4": "4QT3cZur4z93cbbzELw4VFz5qnZZDPwrPhCYFTG5csYUakHtd4k2Ag9WKefD1rXiZqg5F266JDp4fifmqDtJqKWV",
  "key5": "4xfTJGpzVk5FKsBnNaV33B76csZ6Bj97iTcAM1CCEGm4Fpo7vVCbapAADWQ2NQZXC6gVaB1jYfsfTZQcf74p9saW",
  "key6": "24v5bQSM4us4zgjAHLoA6vLSpALGYi6xc27sjMUAgonzt4yjezLXfub7p2tteSAEYsRcNJydAdve6RxbHM1GPH2C",
  "key7": "4WtHqPuzEzkSiP7jMDJ1fDWop9VQiS8MP3ENARjz8A9igm38ZWNcapUr3xdd6kXSUg4ZmkGWQLtYiKqbQykFo9Sh",
  "key8": "3DeFMLtSPwW86WcMoEmS1xXhZUQmuy3xNrEg3mg2dbuCf2UbpfGraYzdYML6PaWuAp9Ubf5QzJfQErhBo3Z74Pbd",
  "key9": "2cPxiLpim2DvkeU43hEpt8RNUaM2wQbxgqvW3QfRTzNmWPqUiaUnPkcGeHkr6xrco1FCGtV47U2anjAyEjYVFm7P",
  "key10": "35rugfsD1CmwZEsxjBsJWGXMDv44jGSuSVBVhfisTpt8R2L5HTCquxFgo1Yd3EnAXmmsfDHFjEQcMMndrVsRjQYS",
  "key11": "sRC1VhdVhtrdJ3TjobEKVNVqU2gx6RCXf969jqkYWWWmswpfkjPz5wpoPc9R35tBkDaPQGSG5bqDLAsAQuXxC5C",
  "key12": "4TXAcQ9N5vwUFSXEmqVnCuW8VBGcZdsAmZUTC8gSHjbuM7jSBZA7qEX3i7H1aV5u7dRuGcyw8VTBgFrjpv4fNFxa",
  "key13": "3kQPxgf5xi3LV6ojZzdb6SpXDCcsdWmFFXJ2TjxGZzTcTF3nCKDXsjR5TaK6gGeeRkJn2qNHhwQSAxhvyL3AQtCm",
  "key14": "sHYc3UsxV6qQFXbBMvdcMxLoAo1hN3Q6bhFkMosGjw1aj6WUbvTcv1LbsfQDQJdfmZP2n8xM19EEgaGusFpkr8h",
  "key15": "3re6zFsQ32hy1M5p3eiJB7fQQ3DDQV2H986Edqe6RtkTszkdhARGyfGm1zCmZa1nLDF8921Uzph86XMkhVjPw4Fn",
  "key16": "4PnTXsDYUCzzex5x9i7NPYBHrTgpVNPtSK3MwefZKJUFLFD7ZruH9Fa1vM33L2kpFUKDTtcoBLnsoxvq8vVvaiii",
  "key17": "3ycuStsk25ZdD889H5GJCJi58DowYURYeS3oNNDnb5o7aqwXkwaEnqEHBZxowZhGvYUjFGkr8SJTo7Lr49HTCi1y",
  "key18": "3ZDxrKd4LZ1segxmxty23vfxrkqoGo424uiSnmPaC7h1wKWvo3NimxTc16VAjup3kghnMnTTvjcLXLkTQtNfoR7H",
  "key19": "3gtrRWvwCBDkpTDvuXiGY5no6HZ9o7ZUKJymZXAmCpSw8jZBgh6SAYtQQzMt62CbxJ7WSXKCQBmod4pESUfYPWJ3",
  "key20": "3zcDCM7z3HVsTfmMeHDnxwFtoRGCJZkZQPtY53csqKZt4w972Af7Kmb5z1NdqKmg8rVFpGfyoEA83aZMwxQkK3av",
  "key21": "5eXGCrzUfrFcRG3LNSGffAXCqTYPjQVuL2bTh4QV6WfUPFRriVME1k6AdpBT1tkpey19LACApcUMBUzZQZybiRm5",
  "key22": "2THsKjpMnvx5CjRHdri7pJNJC6kze2vniVs8d54yYKV1KK7YSrrF49u2VYLWcSEzxicJZAaxSqueTegPrBy57N6M",
  "key23": "2Xfh8Y5F1nXwRb16MTBVFwuzuXSyBFJa9Z4ypCtToyhXTEv1eajDtTY4Tf4XgUYH1AaQ4GRLfidGTZbZ6irbYAVk",
  "key24": "62TbX5FMk5x3vu8QUSy1gm2XyFRJ5vGkTQuLc3fqFbFS2qjPQ9jg5ZHYdVXwPQFhkRaY38Zja9DDxc2jMEfyqo4g",
  "key25": "2DjxYZ3jpDJJu8N315briK2od8V5nrySCzafGkVrgKDGmgnh1BBnawhEp4b4RBQ3V42sbXZySnKtsQqsFo1opRTD",
  "key26": "57WuAPhmWpzK3SCLZqvgyJHQ4AehB6fdNRSeEnsRuKEuzQ5ra3RHLb87JT7nfq6J4LY3SaqKeuJkuAGNRidcMXXN",
  "key27": "3y6G5RGYCVKCNVeFnzCEJVfdbPeEPCpXBndgpwsJLGrSJrjRr7SYUv1xd75pWY9TKYg5MLBQqa4NtF4t2HteegTB"
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
