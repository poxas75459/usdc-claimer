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
    "371QkfKUc422ij9Q8VuzA1JnzhhBTHF18bRaWdyiDfx3vSdGBSBNCCx8on1EHhuMaaTeFQG4GSUfPjqfNwPFR48c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ybVH6sFbDTdqn5GWjxGByBoK52nFhwhmzKfjepe8saVKhfqmYisW7p2uszSEZKr3M5RVpEhZjg3YBdfTUDNq16L",
  "key1": "A2dYXQVSDVth4cx73HiaNJwDiuzADho3eY6py1rdGn6PKQQjyvqNn9Rd2oThgcNHC5EcAmLDEzzZbySvbEQW7mM",
  "key2": "3JUNg4wErcdaoQrc3gsjzkqPHWkxcSPcNs1rdmj2DAM28eet3FQUZrqepYsmez2Jd5Tn7oVrtDucxHLcE3NaHYr1",
  "key3": "GfEofqcEsbCNQ7PxEzyDmbaR34oxQ8VisnpbET2jBkmzUmpgUHwFJnH8Rf98cJMnWHJoFeYHwGpvfeKPTez8Ro3",
  "key4": "2YSgGEKXkjTRsLjKjvncyfc4BCAw5vqHxdURAq8HSHs4pJXZkDGXibDUzR8GFsRwPZcfvEHVM4LxDBEDernu86fB",
  "key5": "2vBUgLM573EZ83UNdMJU8CXCRh8rRNw7uHxgh5sGxNikFnZfQsZdvJxiDirEZZQWvafvychW5MAUwbQ5w6Xc18Xk",
  "key6": "T4FMMQRLZEp72ybypRi8S9vHeDMMYy6ndzitErKpSYAehyPa82Zk2y2D6qZkdamsWJ6WSQn993ChpAyGEAGvmWS",
  "key7": "3aCiS3BRe6JH1gPYnFvySy7aGrgJt19k9HAoge9c8eQpCMi58WsC5sfMTFMrZkrnFydjpjtZar7qk1LhQHJDJLuF",
  "key8": "473NVBv2hQ4bfCj8WdM4QWVaabJ3JkGbPdwRdjKrYe9ZnvLBvSxcUHQ26BeKU4GPyDALsGwr49NVzAtpskZUN7zm",
  "key9": "Mvn28Gj5KQA3MtnMPjYMWNRNJ3L3UhowF8ZEasJGCNx8jdYheQB42ASmvghjY7RLa2R1fgJPz1Xg29gajvzV2Cg",
  "key10": "3wpZPY5Pc62GoGA29fiL74FBrWTicn9HusAkZgd7NgsT8oyQ4StwEtdEAxtbH62X4kZ3u9jnbMYoWiZcsXrhe6RA",
  "key11": "3UuS3SPvQibVbiBGBVSy1jXYsaP6dJoMrcFGktpSsPch6mRRxbBAxuz7Xt9gS9uotuDRxEheXvHTn6uzcmCW1BVd",
  "key12": "3sbhK21MujtaioSuLrM7KVwuNdFsctMtisHzhymD1d6UXnPavWSoeTgNY7yfrA72hSx8nBa6kCwnjMH77yVUAiuQ",
  "key13": "2CBG3AEkb1n3z8KDRBkFKPoo5AcGr5gRbPuHRzWphBzZx3Pud1vP1cxh348iBo2kQzYxaaUdHXUYJeELUgRbSDNB",
  "key14": "3UHkqV8A5DcfE33v9xbFP5DnSWDnurcjiWJjjCMMQdLejFopQtT4v3yosUWAhK2eLpiE7WuTg93BLNeQmhfifpbn",
  "key15": "3FPYRYc5J5G8dt8n9SbsSaNp2scExSZYbVeAozjBQ6kScqjrGKsCfXtChF4qU1WBVPavro2WZYNT6pmqyQ2GyqSw",
  "key16": "Xs4rNgLibDJkNmpf1YQQr3MwrCr8PKkcfDuwF7DG5BYcLijT5SDtSnZqhbQzQ387bEPzHpXs4bKMQaXHsQmppqS",
  "key17": "28kcRsiCjsSPw6hYURib8YKGqMNr6KkGoTcs9rXftpXs9KAopUJgZ6qZWW816N5AKDconXqYVnVsJLtyMTRmBa11",
  "key18": "MeHiZZiQhVodt8mMMmskDfaDjgX3Fe3bVS7jcugerM8kU8Kpn1QkoXeU59JzNxihMkh8jC6vVy78nz1W8t4SVnN",
  "key19": "5Zee7gh32Hg5rcfeKWBUe2SEYDpeaZNMfWBEQ7z2ra8SCg7mAAMsoKSoUMMwdBahzstQ7gdYRsM94aYhg2kSGhc9",
  "key20": "33LABvg8GpbxDBzbto7mAwmfmYnDzujkmbLsspVG1fFtXkjGYXki1mwj33ZBwsGnXfoVTmyFHiSQjffWe2r1DdFT",
  "key21": "5i4vdFeVeu9A12ZArk4AgWdMgLGeZpMF6qsdHMRojKRgumXuL5DDy8zJNDQzws5vekLTJieR15HsHTMbfttnKpRG",
  "key22": "FQ5y4iBuWaBwdpZ53xcTW1T3vWvrDrrL6mapPLnKuE4HNLErgRnHjsJmLwSuKF1jufdgfgPNDciT6r8g46uj52X",
  "key23": "4UzLbYTPeTWPPKGoyTg8cekpZ3gcBizBdqMXrRg74KZcZS3mCfMRHiQkoWTWcbREzRa9fx1Nom2ViqAF1Vm8ms4W",
  "key24": "zAAgX8rkAEcpmvB54Ysx1nhDe1dx9C3UWv1coRN2sTNHM3LiVrAiesjDQwEc99NNMDkQq4syUmm3AbKsSham1g4",
  "key25": "25HJQiq3Eca5KQ29bFQda4kiANuAusryQUdyYGvXorXyXgH7KvFTPRSPyWyAkAYGg9XCon81Gq8qNievET3mN6rv",
  "key26": "3kiPWSTs3tVZ2j78QNStvTm66v7aG6X9BxTmB4gnC2p5HM8WyqBoprpKD8ssGbnGsgFArSFBPDGxeo8X6NBFcVj5",
  "key27": "3TcPDbBWooKxrzm7uZzJS21MkgmpGEmGKUiqCWfRUsQr6H1WU82aYFL9e9QwGsyoWxdBfaq8ZSLkGLrE9h8kJer8",
  "key28": "2LXpZuvsm7HwFXZ6bWLWfwb1PgAMuN2AHfTuuiESySNtfzmnAriqnhxpRph4s6QveRjigse7a3rvMSpEmLrb6Vfc",
  "key29": "2mTmbAmxx3jTZJiDyPSY5xahdRGiZ5VFDhGTSp9Xr3Q5H4JJX2mr4FwwcbdBSQyyXUkdvndLEJx3AGPLx6QNBTok",
  "key30": "4EjVCbD4wrPxg9zx8FCVXqthYgcgKXBTSF2HAsb9MCbnpb5dn7ozRQjkx53PMbm2j5BYTHC8D1RWCNqpuHup9VNH",
  "key31": "46YmGkMeS463S8dyV3PXAWefVRDqxZw47o3RMy8BahGpLPLP3AK8jQDYEv7kvfJVSFkUpWahysvQh59geCt6pxyR",
  "key32": "fo77CLHnCULquZWYuJ4f8MFLemn2WJGYHsnyF8iveEbX9FtNiJidMm3PdChcbMnDEjaqnmSrqUQPAvaQmXLmXmf",
  "key33": "2Gkemono4qTvrjAv2vN1s2KHNksFVmncRLfwExQ3UspTBG2QQdqH2iCrfvqiLfTKAVoXMcWnUR3fRftk1P7DRr2y",
  "key34": "uj4ffnF5ubyugG1FQachC7igNhhRZ5RCHbmWhEBi2fpTihzS6JZHV8N49mP5t7FRmY1eNZcQyZB6dCe4Nxbim32",
  "key35": "5pBwtQBFyDFXjZ9xWbRZ6EwhfFSuHvMxHCg8QH8Tyk9yXDXFphzVu4keQq7f8du4hvyHF4WeDJwTJYhri13FJZ4g",
  "key36": "3tPiBHMiPNt6VW3TWug3Bnd9ZNbnMHkWhJXpRgNK9LKstHTk9SoSTf25NWvMSYqM3L58s2ax2mVFB7Ujts86Up5v",
  "key37": "5n4F5mrKBWhr6Y2iBYn2HA8mZqP9qbbjkSNER5VRVPVrBkmdg5Xuo3WbrMUnfso4h1GQHHZFEMrk1Det3uFsJ9V5",
  "key38": "3JgLYNLKUtz7FghBgAx9DvZZBqt9yCLabYn4gfbv7DCH96TSBtRLNCqoHmUxez8x6tEMJU9NN13ATPsteqzjc48t",
  "key39": "3fLvRW5kpWpL3mDwa1aQNCoQphxrNzsJdKsJAS3LNFgsDb5y7JB7nQPGr3CnoJxdwaBGa84cR4VmJKWAY1xMiiSC",
  "key40": "23rzx4Ahdt1JzVaYHTcX4NGdcop6aD5roFCjiLKFZXeMS1u6vyqL5yf84cMokyUeCv7ftBC6vsC1NDZWo6CYP6RR",
  "key41": "4DKssVua3MYWXhRNjP7izid4kH8YcGaPS75e7t152bTiUNzmiX9g8s7hVJrhgSR8gKGrmouJWtUAF73FoqJz7s77",
  "key42": "3HKCSE5A4YKsFFREeqXWLQjpTYuGK7sJCJnovhqQDRj1MDH7LK9CV5rMvXL2RCf1rGDWz7acsqm6J1ipaEZS9Fwd",
  "key43": "5fMKZpgBgBJLvsUTiTYk7KwszsrMdYNV1uXQG2yRajabhsnmvZArFHa2P4fNVsekamDpbgVgKd7F9pUy5XAEHy5K",
  "key44": "2S3Edo6P4mayBUxAMojauM5PwBBK2FR9e7nhfqsezX17ogxEKNjYN87AQW1MPBwLipbozdYNGQ1eckMBqJMCLpg6"
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
