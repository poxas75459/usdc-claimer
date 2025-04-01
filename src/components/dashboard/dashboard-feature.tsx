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
    "KgAJw83JU2Q7WtDwMd8HJJyD92akofrrDJBf84ALxLbDQHBs16PQi9W5xyWy7Q9EjzwNKVjcM4GK8wsMWGdTrFZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mkHmPb8FTC1hVctWD8h1jtazAh7mYogq16TfkyNxiwJg8G1UuXCqZJw47mowgcAe4chQzmVw4iUs2fSSwpBZcDU",
  "key1": "4fSRmSvzs4kLs6z2FWuiKYLhB5hdGqFntanrU64dvTdhLJ3TVmAmHuneXi6xPkzJdTUNzBkfw6A1tWs4GjoYerJ4",
  "key2": "4CC4Vdf4QHerrvxvepyjpL1QDTPM7aie4CwAX5JxgcsfeoJX8F8xcZybsovanahuz7rMBgfs45yFaaEKqrjssFLG",
  "key3": "2WvmBnDAyBTkFEEsK1NkV3wu4i6kb1FQBcRJSKJ88w1L1mbsLmB1E6eCfdekFJEvaxxCkMZEQju2VZyhoAfDPYTy",
  "key4": "4s7QKJuRX6RWE3Wio3gD2hjkPCBpR5GbGUiQdXwEDe18o689UQPxKcdMQ4Dndgjj1jnuuBGqJ5TDmdE36mHZj6BM",
  "key5": "3Fdh6PCuiZq88L3utajh1YjcAyzENGfgHBiUmMFpsExcs2WRs91YRGsdBGFMv2d4ZmTX7z1yULBwyoWsJvUPNUwM",
  "key6": "2dppWP1nZ5ZAGdEAaPo2F4wfGXQik79t4QknZ4DM7awktwQYWCuHFbsZhSayBmnXH8ABSfssbZ2WvJ2TpXsHheRf",
  "key7": "58sA8emVt5HnKgyckG1eYF96TswUsqWKWGycNtaxyoxNgEp1V8PCQxw3jNss3Wt9F98zohukZekjb6VbJBaSX8TC",
  "key8": "LehxEqh4YxCF78K46CLq6HQM2nLw5Vd4Ne1H4urgNRzmgFeyzaQc1Zo7tjNz7HmNBQheEic8igjUAjPMHUF6uNG",
  "key9": "2JR1EZqb7qYv1aiVyiyZWyMjyGBdqsT7SbtYEsiPUhci2HqGZz4QzciVzE7CbCKeKdGAu8AnehvAXsR3RiGNzhi",
  "key10": "548AjK26V9jYAEDU6sPYyF4BmmVHzp1SYPxjK5DNkHFj2ASTAUoQTT3wxADKghjwx5YhNGSx9AsL4PxAfi4zFnCs",
  "key11": "42Medkjm9c3Lo6dtRpciqnUyf4zzLL4KdtXPVQfqy1ksPTgHG4cffYy9HgALqFEiZfGPDmemHbtYPXj6BQRxe8rp",
  "key12": "CTowUasdZAhgqDuEGPo8pianiBVruTAY7d5ySSPvW5oNaRoGa9Z4P7eb145NxCruSUMWXbarE11iH9TVDACiyTp",
  "key13": "3Acr2rRQqz19t7mw5ELERWShwqPaeVdwrT7RWw9qDn7gy4BuDqSS982u9ttWcohGExGsF8FShQLE51KLfcJM7EpR",
  "key14": "LqLgfpSyZvbDqmbdRqvCjyqA1z3XUN4LpkWmeVihp4V3NpEhycSM4R7pULCLNR4E3jcpyBPmT1ZEVSXPS52HiZe",
  "key15": "QU1MBysjjZXdbwpBDabQM1ZAFoGCYnZcRtERcp885JF7bYFkYr7EtVVvAbnK2RwnWtkArX3o3B4bQYk3N5F2m8A",
  "key16": "58w6yVwAoYkyRitvVd9dQuHpwzvPruVXkfoXSjaLwhWMJLKfm2bUfoFfwaGNMfndSupcB12VCg4FXdpmocWwUfNe",
  "key17": "4WyV22Qhgb4edDtQyEwweL2nECesz4fJ7VZcJyP1DU94C1oKwcdhxL7FZP7Sr6Ji44cDygYWXgXKHDTMV4NDnQtR",
  "key18": "44oaThWUaWTYKJjqNshs7JuSDNd4pY6efdk2iRapRrdXgMYombE6ms1RLJgrsJHnjvTjcuNdsSwkyaEDAkwcEGLW",
  "key19": "2zPALv3CBUirAWquXvTXbXYAuACs1jxbx2ubnkD9Z69bFKantKAWmrUmzvfh9VNaEtP9kywjQiX71ggqnZ4Mvj94",
  "key20": "2xCPECTYP9ZsgFKtb4D6vxrnsrBARRDNgj6sacQGtkkVY3ag3oUQM9gFZxV97XaYdbWEbndA4F4FLgzaXBvM2C3J",
  "key21": "2x5D39RWawV95CjBmnxg5pJ1eMwr9Ee9E2fsrn2kUSY8T2LnBLMKAjDdJsCgb1h7m22qw71uFLGNKtfUhbicwvZp",
  "key22": "36SHYDLyL2NA2NVdXrpszRbUPTosvt4cwxXT4i5CNjmw65YHDbfTx3DRw96FmMaWFSV4RCbPofCDom1PqjQZLWxU",
  "key23": "2zWBqQx9EaokjF9ZsFsFmix5iQeXhDGxYWwC72vfrqEko1nsSFEz2ekcGEi9cW5vi5g78qMp2RXyHEphJLHutuW8",
  "key24": "4o6ahPUoLq5c4bFPZjWrjF6FDqFGdHraFyRN6BGAgyUxR6cKvPnDaygyRgQ6dD29aH2Tj9nNXiHNTh7rHeyVvk6L",
  "key25": "38ZhtDYk7jBMupHNoLeK5GqybBD5hjancZzEzz5P4JimGzug7gEhsFZRVkGEGzX7WFkCbpE5vDX4u5kG6thjf8YE",
  "key26": "4qPZF9y8hwDpqf5ucKsizyQCMLYUNhr43sCPCNM7BhiT7awTaEcomC4LN3soifqCocp4j522T1qB45qpaRdNoHct",
  "key27": "3fVn1w9JgQ7wN9nNDdocdg9kEmu6fSGN1REMJ24XxpxNxCgrtnBYDMQ52Pis5pRzfP5hTjRAP9Kc7F5A9fqf4jdk",
  "key28": "4fmXNhERcxVNCZvegHEcWb4QHpPLH5fkzXPhnjqRpDVXXrVCz7QyjXtyMa3FJWQaqSutekvV9su6hvHhCNqfPz8z",
  "key29": "3XEjgkhmovoTWgWeks7KLhtexWndVXDy8iWJDbQK23gCPzaQqJ4yQniHQyPcidqdMHAFfKGzaSfkSdDc5EMkVNsh"
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
