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
    "4kVBx3k1wCEomvZzTGqmu3B9JpYLES3PWGfyGM5DFMY5oS8X3yzoLT1EV7pev4vnGynGoyjhxRBTrFammmZggdQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJC4o6RQFdHTiWpYNoTKp8zUzeVoU5ooBrSba2y2DXAz4DZiVuMEVSsXeNQL55D4bprfQQRgiT8pvocaMorTR9i",
  "key1": "5rRXTq9PuPU7FwwfjFq7G1edzTKoXMxwFyNT83AuR2TkpKvzgHcy3K976nFQFrZAEKnamTaF8vSPRrWXEAhSULSX",
  "key2": "2V6vAsfyusg1Xh1QzjELAuoveYCvViP6fR44wxzu7FNLxGvGPgBmD3PCHrSnGgfixdFDAuyC4kVrqrweoU68CD3c",
  "key3": "3rRyE5ffZXwtttm2DnnUXDpNq8pUVFqE8cGaysbDirXUnPCFVHPjqF37fLU2En69iWrRmDfsoE7Vw3qPNJQjGm2Z",
  "key4": "fu5ZDLiavAdUjXDXZSbxCcBY2Mv416nra42UMj5AJHcHMgCys3bWhSXipnkGgdux9ndvNrNW8U2NRixpspM9Jtj",
  "key5": "5thaCjRmVTCwmXgqSrbU8qsWBQ4fibqJKRxVBCNRTTCoahRx48b2kdDTVuiH9QVzaCkx4cvyTHRzUQXN4dxkTXhh",
  "key6": "2fbnh1cwg5XcL5rbVyVrT1veSvcmAoH7iJj4XJc8LVVPgE2iNakUMDTxTGU98MHCwhokoKrabGWn3LQuVrrpVwa4",
  "key7": "38iCtg2Xucv6EMkAtqajvcr4288y3QbJHHfQALaUTQ5C4LCWaBGuQMosheCbyx6uJwZ4YCRYjwQnCnM2rzzBDtbw",
  "key8": "37oW93M6Gj2Te5DMViYeypf3ar1idFTrRNZfZ8vZ9gSkqyVRHLp2488D8pHRJq9W8qHPuTqCUnUgWdtqHsnnNW41",
  "key9": "5PU6Z8Y216zBTvyLgGugGjaiHSitR1tkqERkgxtAaS5JzBGsVNGHh9F9n7gdaXU4ki8xqGvRR6v5hbUTxwoKoCmu",
  "key10": "3KxzqEH16hhQwciUQb3hp1DcsDa9xsby63Tfv8EmUAHdmtJTHxinuH1TWYcvoCQ4wy24wKR6u7oChXBquo45Nmj2",
  "key11": "3y9XDasMfdibnnu45j4MxU1H6hKcx84fBH1UGSUZjxDrdXsfu4bKBy8L6j5ooGYc6WZqVivZniAPv8wf6WW51rqH",
  "key12": "3BzGGzg4jMxfkk8M5WDAhbEB9oftvCiYy9ftepYUBf49C2yrSwXYqLJxWtyvZmf5EKYRozwXQaEKGnWoSFLGMrMM",
  "key13": "4wqAfFtVzpYkJUzUcFK7C9mrShfJpjKqxciJW6YF2tSfnQSibg1Y5MJZh3x2teuReTX1ToMSi9Xvop9zByx7my9J",
  "key14": "2ofXU58W9NAGnFFWDo9qYJur3fK1K9p4SKPDxsg4nit18j7gNGbnHUeQShbJHy9qPn4ksw4fDMYsh15sdDX9ukPE",
  "key15": "4qp85u8YBEiZ9p9sbXbzAm7rgg5abeXYLsq73Bw9fbNUZeBhCygsdZPhmmJMumKqFUDyMYnaURYpo2UYXTDadToj",
  "key16": "3SyWxpB2PPna1biPSGFZo3RyRncTVoybMQbaWHDZBKSmn2D9NrfujS4vq47r96RcN4yPf2t9mBXM2qCgk3E4JVy6",
  "key17": "617no6CtJffdQaWUtEJVTzJ4nTd2p1jxpPTNmhEn6fekY5ebYpjtorK1XR1MPRptrA77HTBVThqp79pPcC4GjXbJ",
  "key18": "QpayGrsSVmb9Wbvp72zG3k3kiRTR6shHJRvQ8KERmZhKCG5swFXSBPU8isqpjxZmFpcEQRtERkhyGRTpkbw6XDe",
  "key19": "5cmCuCF1wEQqCTj4WLG9WiZK61Zr8Pn8AmdWj6egTes9DgpSvNb98VhgQPftcS3FGCvXuHfLrM8Br7ZLmtpSuGGd",
  "key20": "4T51En7Q7GX73eGc1pME8uwvCMA6ni1hEo4p9W633RyKCYA3533wrHshZPKCwapuBW9bhYyz5hSa8z1TcZ7bQpP1",
  "key21": "2yknSp8We6ZFPN3ybtdSTpZiPPCAmBbBBYPch9z79ZneQCTdRKMxGRSpiuusAodDDCmPRx9brHMiqMNS1PmGbg71",
  "key22": "48ra6mQeBhuxnemYuUAVhGFfphGEJXGUXsWjPisBQ6wqZ6iuM7Ysh62PXevEmxbj92zzvFkmSKdZX7kgyeiGt1xB",
  "key23": "BeMvFSu9VZbdKGqm6wvvFZgh7BLSA37F63PRQJj25yaMakJwsUNA3JpAFDydaN7Te31tYxFFenmMcWctzpbPDPo",
  "key24": "nyFYmHqhQNeh5CyRfEK6ysyo2LSEwyYSKtdrmR1sUyK3ern1kRwL6nZL6spodZQKzpXS5rdLHY3pf2859LcsdWt",
  "key25": "3hpEW1xrRLegAkSHe2GGwZ1XTEFkXuTkpBEwgKG2d424MXKpTqQSUhQH9RjPmKBvm4faJxwZZDVzCfjXd9vBDJW8",
  "key26": "SHAM4eirFb8aFDkdrebHkbf62G5msjA4R7yQev47sz5vQT8Pegdowdg9Zcb54fpFbrPoupyUi48RnD4CBFLPmTD",
  "key27": "55UnrfHJ42kk52DTMqN9BHNG8uuJpPbgYoNdDuxAbWfiAt6t1HgFYdyHpHj9MLj2CDoCTDFW42sr8mKDpZUZjJrs",
  "key28": "4RQv6jrRwHHMc6SpfTfDkn9KeXthWZQYogrjaQFDLqLx8PCWJTbeUd8SRH5LHUCCRkJ42ePoqLy1xH1D3UKoFer8",
  "key29": "i2WesBR4SXsDLLMBR1iiBwc2Vv63SDShDSkasWfT7XJHv94pax7BjborK5CuV6LFBUKAhG6EMbBUUV5H9peqyNw",
  "key30": "33EkDfAmzYry61KAGbjgCeGksQYtnXGhtNonamysYSm3B9P6SJC4GCQAzpTdNdy1Q4mMiygTcXqd9t9gA842w4Yn",
  "key31": "2nHouUrPaGRcdy64DYWYvCxYzTJzr96YuKjaUBAzA3xLXkCFZvU28kXpAk1bRh5miUgQgF5GtY5npdTpamXFU24Y",
  "key32": "vp1a3CtY86v8Piqc8PQTFrDPXACDBofDc6T7fqZJUuwhJ5M7KLN3bc6iDpq3qjo82FL83QnjPDh1gVdvmRxwGM8",
  "key33": "37hg6WgzKmTDiy5URdqR6q3sfi6aKgVZtpwcSHkErYYXyJD8AA7yY9JpWEmsSaYTVxX5jqfn3B9JDQXDjURWoRjP"
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
