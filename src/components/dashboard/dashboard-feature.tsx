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
    "ovfsdms3HdEFzDGFZWQpybpfVMZ5g8G4MKpuNkRzaYUsCnDCsGatTtSc3TToGsEamt5GEhLyQx7jZU7AV8SqtUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P4BPsgWbYKm26azTPbfjRPqxPYANnLUnTddDjUaeb2idZp95wnht1vFSnns3X2E72hd8MG5i9XVJDazoAd5mL3L",
  "key1": "XjgmbYQULAf5dqx1cbRZiAFp44qrHYj1KhKHSiEMiftp2GsoxxHogEytUYnMa4q5D9XdZKZhYuvauZdoo2hR4ku",
  "key2": "5dgqrHZrNxjioMUeqjTwDmUjmVcVCWE6ns55iSxSqAMCPhidjNt8S1QtuNV3fHon1jsCEeqw8gKCh8DcQjoNqwYs",
  "key3": "5CLaVhqdHTdDvrShMCfb8Lt2rfoRX1gme7jJxRYPtvFzk9aKho4uyTqryxBgf1M9i1vdhrnxz81NvqLq5J1UdcDM",
  "key4": "5GgBcgiuxzq7DHfAwKnsdLcPyLycMjN6vbVhy6QBxxhs7AgervcgMwuzaxT2xFQNB8fzhn3MdKP24UHZapfrugM4",
  "key5": "yUAe8ubzejdMJ613wAqw7L4XUznp2jwLqGsSF8N9r5syZirdQmiNeFRPMCxYzi5N8CxSVoKbuzSyEvfKUqoLTbw",
  "key6": "3jjTZgWArwEBQtVTyH52KJhJSz8CisNyKS3yaPTqWZLAAfgYQUYxmTBdkf6BM756KyjmWy8F5tMAUYxYTPtCiNyS",
  "key7": "4p2dJ1kFAvMvDB64sgaze9zLZNnum4nT1BSQ4F2wix8g4GqrW3B9MeoxwUp3cEDoFnTdu2C8KN7G3LLMMCbWW8SM",
  "key8": "3Zj9hZ1TV1wn6wqAUT8GsaR5HuPgU5VwDt3eB36ZUQ6fE8exRANZE8rXeVMrgEpiu23LCVH3SKSjwWoS5DQBNeYj",
  "key9": "QBDKetG3jRhk6ZyjugVENQja2dCgi2k6fyKd1tejRyKY2HjPNAQBpPMYCZPtSo6KGnkJhR6J4NbDpCMaakyx1UW",
  "key10": "orvJKHTNmJnh8Mj3uMDv9NE9sh4ifUrWPjP1gaLnx9EXcMNrmn6ewDwhGfJDLtxyQ5gy9uoBdGZmZrryBQ7mozb",
  "key11": "5rKPdkFKaURyv9rtmo6CvkGVeXp9q2PkgjBgx72NtFEERXgL9fjNDxATiiijVLQMEv1TArsjuAiDKgcUDBycttLH",
  "key12": "Q3XaSipW68YF8SsF6f8ZWUdzvcuvbhyGDDndmkQvbPASWCMJt7bhAwUX1oNkk2yXtt1uZS3Gp8gJR7u3Pk5cVuw",
  "key13": "3kECXZ9SoapVKX9UNL41tqBvsu1ujW2fMSFTBE77asE77YsRHu1pqTWLpFtuWUnqE16UyMrGWYAfbUA8VCVvBHvH",
  "key14": "3Eg9SHzKmdBJaDokUP7XsgFBGBKsKHwKxzvgzHMkX8EBAMsgmqcw6o312PgXW96ewnpRrifFu9V2pbHbuK6DsLuD",
  "key15": "q2wBN3YBrJRgMD51tzaX5PLVjZxQkNQ7CsxRNPFvxCC98FsX6X96gtXBCmLbTW4yxtUgfm879Noam6f9wu1wZ3A",
  "key16": "2LVoURZGiswLdWG3f7CUzXw3jmoFeTcFDgRma29bDQsJPY23sqyv1s5DmzrMLKsvzKfhDWoy8q7RVxFRVUxe6hRV",
  "key17": "kg4gEWgsH1ZrW5MHpNqTGir7giu2p3sAzKLg5j6MELhTKzTvP49Ys4SwbJE9wLMPQRTdcyHLsXhwPLd5AJpukbq",
  "key18": "vAfErTLwoT49BvSX4ci35AzhbPV3pd9sLyX7xaRNXmmJM6wJS42xLosyJWWCUMtGPM2V72D5ViHNEJGfim7zBPe",
  "key19": "5XCrYqV4ySR5cAUukEeycYy6GX7Fth6xQk55CAZAPpjLcGtcq19CwLzJExydgeTFNpeUNPuXUrsNVNu8N9eajGLw",
  "key20": "EmryDT1nNA1LdB2dAegrLhejsPotA9wn7hKeyd5tW9cQTpLLTArxd7fZcggoHM6MSGpPXNriSJVxRVeBmsUYjNw",
  "key21": "cngqt3uFeGRWkZDTaH2Kv6hAWuw4oXYpsEQbhsFjaS4XuAGSmsCZ4rAhfXWhatRFFkKTHxzrQc9tXtGqumfxWAk",
  "key22": "77W5KJmBAMV9it1qeRtYUmVSKyNaNceC4v9xafQ24jFhWyLFYDMQyy5JpKxhS13KwUUSVyNogtVViKfEH3pbkoY",
  "key23": "5P18XhqH9avWs4hEPcjR2TkjkAJ8Xr2geWn9H1SGVaPdmGGy295rnqcPBtJNXtiUSHfXipvtZFcDPvDi617LVLLD",
  "key24": "mg5YpZEY3UnSTF6skrktet3b8A63aYbSphprjgTfDTabJsTX35hYAqshvC4mUj1ww3xzfvLijvKh3m7LT4qrcRA",
  "key25": "2LiSRofUQ4VMNN4b6zXbjU19q7wwShc8WZmrfJgCwy9ngqUhkbAy9HdeU6frcNRV89wLxTfgLdp9QkAFfEMpoPuy",
  "key26": "3SWkZYqu2oR7ztUmaDS6Rfk8u48TDuY4XkHqmAECc6XkNy86mwSSD3iFuaVV21vXPQxxGWcspab4J6HsWNkon8cz",
  "key27": "4F5XdesUDrRfKcF38yD5gsiviWheYJouuJphX6We7hQFbKHredS6fd14dWTr55nebwCJ7c6SSqceAe1XWz1YUhSJ",
  "key28": "3UW4w6YqXTb3QXw51FXWmLJjLMY8uwgsKvVv2UgU3AonRyiZEtdaCwYEF2ciGyNcnubiUmxJfw1C8UxXV2vT7rV4",
  "key29": "5DJc3LVGaU26jvH17iLYMVN1kRg8WGoYUCH1hXkap7Twm4gYc3CNJpxuZaJt1TcbG964Q4wUpVhsnTf8Ai1S5hRn",
  "key30": "3FoAz4pk98dVpitkQSV9MzkErYiV4Nxjm2aJa8r5S1S1aMGM7FndqeUrh9dZ8ZK3MJBunaHCSmQNstUzL5ZwYq1k",
  "key31": "3bzDgXVm2bYFA47KrVHNxkERsBWV33DJxBqKtyhKbnhiX1Z1f13qptPV8uuHn7TSnqDGxwyPegbUVnJnatXYXhuU",
  "key32": "2GV3jSx2oB15fZUB6mX3jdnzFiaCS25NMU9o1SzEPPu42eZ7miXNWPRwGhGhMUR2a6LfPHqk4mdXMdJcN8mC9JPF",
  "key33": "4PVDU692fR1xWmBoGpY6MEjJNBKMQxop6pTSmaC2qrdvZHDToyXGrUtRaPVZsTE3f53zGCZfQg2iJ2Y9LxqNTAS1",
  "key34": "4ViYgK9ZGgAovon9SvSK38FyZijH5EAUoWK5Jta9AGKiDDihuPzmqBJ7mxHx4EnfbWFfyjd1xqM49yfr9YMrD3bV",
  "key35": "598oTXiGr54R1WkDN8VMkNbq6VE1YPEzRJwrwESmdTYmYJ96QFxwJyA5qvy4sfw2s9SeTmwmQKoVcpQWTZtNrMwY",
  "key36": "2MH83cG31voU4hwBXadsHmg2GUSTJtzwLNCWMCbbqLHey3VamL6NiysrbrrVPPCVsUrxgVqpyeSBEnYY45b1z9X5",
  "key37": "u9TB1Jy9LuYtp39tKoRfLJdqD4sq6Av2yMZr8V7Ba8Sr13HM8UHgqTuNi2jCZJwzYFm1vba6eZFWm4RDr9PLruc",
  "key38": "3c6cJodHDWHqdFThZ1QqvgXezZR4DBkUERWiTWcBd16syF4Rwx8GJrpcATwcv6hywjDRdwNj6Mwmet1myafb8p4L",
  "key39": "3DC3YKQdfajpG8JVBuvRTT1cNBmvmdsGh5tG289rkJ3xeYKCRbBzXKFzNP7XUZnUrAYUkrEobKJe56rkgKzHe3Mu",
  "key40": "bbXMDmaXJLkzZaaYKTe5AN7iknR17hsb1UoEeKN5eRnNGEAsnQAiWj2GBsL7qwR527YvNPEXHFvrmXBc2mKV2Et",
  "key41": "58PhJDxcPztNCg64t2aaWLXdv8mcdBnRiPrpkh4FL5rW6yqr8TuEzmRNnJPMoLLTjMqbpmgnPdHRCvTME3EYLCoP",
  "key42": "5fEfywyk2YAZu8baG8xtkPZ9uyoTsmuQknvTCptfEHb5swxW3tkQb2ifdKPg38MVkpVsV2LGysk6fUC6cAPkUgTQ"
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
