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
    "2chAT7MmuwJHdwbgy8dn6rAXiL2jxRmNQqFWde75brBApBBaeE2svQsoxJAHvezmXf5xorY7wHDmaRby5CXt6MKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Zwza1dDqvxhNoQi2H8N7TSbTn5a7G7Kb44UpQd4ASgzWTsWKKfiqjCkxDTxf1HJ6e8ozWSVB313jwagL3Dt9Ldc",
  "key1": "2L2xhhBVmKATuTkiamMpxfgkPfe583z3sTTKwwAUx6YtPjTyr6hzbNBWWCunF9DiXZeRcbrAvgggpyujvWT5sVW9",
  "key2": "51oeiBFMLQjiX4KoXyxtwCHEUunLQX9Pwsss4MM6zaj7YKYgerjyfiWRS48NLk9LeW5tk9S21ieVDCKDAKV7hfnD",
  "key3": "4FBmUzZQ1ebtRp65C43L775YoMFC9RRzpwnR1DBQ1Gr1U2Lvia1pH4sQUTbEzrPrARvRRyB6FFT2f5mRd951tS2p",
  "key4": "4xKhXvWt8ZmRH5QrGNzzYLRT2ahGgwaNe3X7cTZBpi7S8EJDfBDfhX4ycuuJFiTpPiMfwt9TXUooGRKFpBWEEnRC",
  "key5": "3aaX6wwuFLr9trVMJNcrMfzv9Ue4qAQveWNsH1Y2J741zMsZe3ATkiCgwmZBjSUHaz62XBbDHPK2vyQCjiu9eBYs",
  "key6": "22DjgQuhcw7oiPL15JQNyfn1simuCwhq1tDSzroZu21nn71Y3Tsyyw8DSFcG2PxU8nfLhDWhpk5LH2RQGQKzybSZ",
  "key7": "3PDVGEYnSduf6W2MxrYFGf9j5FcBE8VRvpNeHXQ4R4Fvaii2Y2F5n5m9YLoFgaorbpfyoYz435qNEq3AaX1RzWCk",
  "key8": "MGgCyFcttytHMHRRBhkkjxP3gzMQdbfX3VzSvrvM4K4LTRWzgr3DVnFWiRdHwdhgxvED2bfPPsraDKkedTpYUSz",
  "key9": "3mJpnutN6ZMhNLfkdPwWjKV5VmvF8gs4dcxD3XHVxPtmD4mTBDGHKm9rzFXZWLNM2u4qnGopgiZQaHyFeLhm7ud6",
  "key10": "3yBZSfZLLygE4oL17fnhiAWMc9JF9eL6LM3gFNbietMY4FRpr2p25dWw1j8FeWbUTJKndKB6eHVZKVgUNV6vEhEi",
  "key11": "3KhYAbf7pVvycnrhNLNW3VDziMj9Qfty4HxHjYazC82xMT7tz21EUtTp52fbSAyEaAsFnyv9p4TcspZXzHFqsF7k",
  "key12": "48MPfL6Xw3vSkCoZ6khkeJ9p8wQTfRTLiFZ93yfZTPUZuqw6Q5dvosQjTng4T4cixxsHntQtXvQy8tNgQDFiTdUf",
  "key13": "3D9ygiJRVq9KVAEPE8JeFa32q5tnc9p51KbHQ1H5Pp4SMCuK9MLsaei5cazy5UVc3rgh7Nmrk57jFMra9Njni1Ad",
  "key14": "2d3DQ1HJjZgD9RSikdiRx8yWzFcG9BbqGM2pPCLrfc1nb6tZRYUi9FRwHsCqmGQg7thZfjZVgNS4qBc16bnqyV3E",
  "key15": "3X6MsKjzsVNm7qTBNdw2xr1jWPcfg6g7VvSLVAsysWemgiuyDnH7ybes6hjJjD1ThsAZ6WCgqdYMdWPqF7vGnJAu",
  "key16": "47k2KSVUFunH9KKLJJywHqTSjnQFkNcmRv6B97gRyH7VzUKM4hZV5HF785WGR7bRyMpLshsivUidhA6obwR2S99t",
  "key17": "uAQ3t2v17i7j2RNuoAR84fv2vemSb6e7shiqwcm8XHiLh6mJccNCfSqHcudS4EhTaMHshPphUVwuFznwxG48XLs",
  "key18": "jitiPnbcLpvP4p7oGmwCptn16k6NyjNAw3ahR4amzDrJzoemvKKcrq51DFGYWCv4AXFWABfAzdmGfp7qeimZV7u",
  "key19": "4ye5uq2NrYFqyGYRSDmCH6vqXcdJR5BDELQiTJxXtgp8Bwtm7rTvYvCnsY5W49ZrKFLFyN72Uf9WbPKN77ExjUNH",
  "key20": "4oUi5dshQeC82i3AA7ZY7odJYrRznjAx8BCByvaVaipHSTdKWUhrTP2iQaDNo9R2nvdtsAdPa1xB9v6R2crtGEbA",
  "key21": "4E9i1igGymSkBvPBmbBWbmpm7CokeGz57S5k8rMTYU5HT33Qk88JjCjTiFJZgYb5avJcXnDq1Zcs7j8ucuYcYDAi",
  "key22": "2JNG1cRQtQurEksTRmpnoktqNawjEqNqqRHfX5hk96ajBeqi6GL1KTPsfEJFUsCJc19Jk6k7HWoVEDXW2JnaRBBt",
  "key23": "57zP4bx9zvvKEbysD3mQahGwc4mQGCuy7sRsuYgmwYubDsSYcApDastxQHNFjbvNKSNJo9qegqos25UcXgETFXLc",
  "key24": "5ExcnrcJ6XEghqRDxecvvVozk9adSwznsgqd4oewtsKziWoe4zFd42v7eNhfMJ4Hc9c4cWcz6nEMGF6jJimvfcCE",
  "key25": "4AkMRWMPeTuFqBD97x8kNtL3xFGCWiakXVt7eqqSYt3JbNyrVZux6gCWKj5HM7dzXqqLRyQ3tDfY1YDW6pdwpUZs",
  "key26": "4hP9yhmcurYwkGjeGaETnJE4VQsFDCsAMEYym1zn8xCuG1JG6JUJXSh8Se5o5PLVPtEDxuBFNVf5YjgmsaKTMB2H",
  "key27": "4M7Uk7QkCwTS7wFZNGNLENdU4yeedLKGDtJcTrxwRubRn5rgybHucTBjqeRQuEFY8MS4TzxPg4mjhLYeiUFCyoVE",
  "key28": "4obcXjzr7ozCRvu5vFnuFPNs6a66t7LhYHQMSf3jyT5hV2h5p2rxAkJaJxpeZdV6q1HhQRgNrFPXgkHjYntJf7g9",
  "key29": "3ukbckX97ndEgPzj7zc8bn1gHHircpviR1xbtcM3SAwyonH9qWBWhnAYosp8Trr69ZTPCVLUysY4ewMsLgBmvs5V"
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
