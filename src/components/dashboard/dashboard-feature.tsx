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
    "5h8CbxUJvFMyLyEdjZCe8QcXkVewZXd3aBQCtKSyLXJpFv7cosofMsr3a1rUppMobYQjrH22zSaucdMwPKvac8B6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q9QhUMfrfx6AQ8bgUnzw2YnPnKPcPcfEbHpht8QwKEQ62899rR1fZ1wqQD6pfjLCd6QAZd3DEaPT1CGphnjHa2W",
  "key1": "3DzQEkimj8SysCyrHK83VhQ4tT4YX1aoBcKYSB4HCuMgQLexsoSTwP4FKHVMWu1989PZLDePcp6HMCfFXvD7eE9h",
  "key2": "5mqodko6jWf3NoNiEweHrHbbFawy8TM12Cz1XKoCACHBcMDJPr5DcQgwQbzCRjo7YgDZ3v6vSpau6zzWuiTZC7Gy",
  "key3": "2Un8XHL34qJCutELJCRkyxqSNYwfxHJY8ojRRVGfmnquA3gqqjbU8T4FBuHEqKQ4TTmr7PS5e1NrpTuAp96jRniu",
  "key4": "2DhzeG4CZUwug3G8XwUrrGkJDwzM6gXsxMoBm1ZNjarWRXjLiAbj36rBYzyxbxVxaN84Z6ysUwvdbGaCTBth2SN8",
  "key5": "62BZKGxHwHBcRVbaDaKvTVW3id9yUF31QAudf2wYxz6bX5sgLX2Zbbid3WMF2iKh5N9MDxLJTdVGnpR1PR5dy8ja",
  "key6": "2SyvbDcn5Pwu2KqfR1mMUPFv1ZkYoV8BY8gRPCKdBAEtVUug6kLhDuTiPoPPaUBSVr2W6QCCBr9vYs4i6z112Hoj",
  "key7": "5Txn7GBRzB6HY3e62B2je7QfJw1uu1bdSTdM55Ce5mD3ZBoQRtx2ghJCRonWagm49qTkBPB7QJvSVqFEkdCfiakm",
  "key8": "2PygWW2RawbR262yCm2qzjzjdxC9DhDCnDk9n8RpMuQRBcpLjh4gFWNNQiCPnC4um3Enqh1sKM1Xax1A1UBMLpL7",
  "key9": "5ZT1khqmJGaBFZfkiiyfWV4MpByQyd3nNWZQKPc2DBjTfspoKeqSc3e1FbHrdBk6ig4q5iFZeA7wKfmPaqsmaSh3",
  "key10": "4unmTa2zYkBfCPpangqKe3LWmA3tm2q6v3XSPfRbdER7ARkEaaQt4KCmKHSes1wN93nHde6yrxEyYcsWNJhWYVNW",
  "key11": "TCjbeDZDZgGn9ySRuzgu7sqfnGTHw6pADEyD8TJace5ZfYbpqxmtBqkjgLxCrHDpopCTd5PgceWCdkE4Xa52JL4",
  "key12": "5G4AEimHA1TsA1v7AST9KSKmvtGc15Q8WRWHeNG1irxBGNSZJmZYRcf7fN47dPAGwVVt1kC1EoPoRnDS95S4fvqr",
  "key13": "4HVke6tBkr3yThf8u7LLGQKeSg4UqANTxy8PHxBybBMvkvKgJ1GeVHRRYuTFbbm5BAGzCP5PKxAM1VvyLKAViNhG",
  "key14": "5bsMXu7bvs5fiWeV8iyg9NUvRtVeKSnQUSrAdJ7oXzhraMP8ZQFHdpUbrkFcWZ5WrxAopRmcyNoJH1VgXVVUXaeB",
  "key15": "3WrtgNuA3dwBF9kgtXKUkRpcSHAApgm9f45rVBfdhjHcYMZbvGPkktNUtPBXiTrwFZatXMNUjFcLXYDmLQv7o4Fh",
  "key16": "B2gbySSojg1rYxUurcRqqKiERb9GQkK1jH94yZYokWF34dCukFEuiVm5ssM7w6fSsXNBEXqiAVL717q7TcLYdEr",
  "key17": "UKQHh6ge2pe1P6PTG3cD46VAe1AC9r7YvwcMVnScaBH5juon9rhNt1hhXVVCoHqMWFcukZjymjX4ko4Bn2ACdB3",
  "key18": "2xKdaYmeHKsh52EBTb1VKf9Y3iJAj4AaNyp56BHvgxpj8YoCFsFekJyRGEceGgLtVuHWZ45VkragjkrWfK6K3xeU",
  "key19": "2iaWGnopwqDXdft6oRiVYoXNDspF3vjgcMit6ouLynFZUV9vnbmrBApPqAfUpXTFLAjkZqzHNaqmaesENbBqyVdw",
  "key20": "2wZkAgd9ic4JHkx8Z2afFXmUCU4zvio1JatXNpJRLM5WbGmQuoJCiqQYWo4EoSdtAZA2bXniaopBzTGa3YqJ6etX",
  "key21": "2KjnA6PD6dwVYoLtXTRLeXDooWiJAsBFJu8ySK7NN5U1Jh4bYAY8RwM1zpBntokB7XeUB9t6mBwqSde5SzMxEsNT",
  "key22": "4aPLsADy5nGfd2g1Q7xfA8oMRn9Hvd5gfEjHoM5qimvDZ96ZknCx4sirapiNx3Zjb1cL2HSHo4jiGg6ruQsvaD8d",
  "key23": "we82T8kogh8jxPFPHTfpaQYZiehGLcRmoQhasJHHAbNEqkHiDGDefPodiRPZpqBGhhLhMFHL2mthbmsUY4ENPUP",
  "key24": "54pLcJcHcNuGmiEAhtQntzoqky6Gb8MGEvvPSyFCqJuCchpXuwk9SFjWkz2mANRabtXJ8WTgKBY7wS7ZZQVc6ReQ",
  "key25": "4uup58icDdcsd1pNsjAP1uJmbbndwcNZDqzRGecdiUhq8czzxuNcddj3wNxxAkTiBmNfH2scwrPE9qBy1FjihNWG",
  "key26": "4JbSbqEeKCp9FwsnvxpxVRVcgekPzdGMqdowVbcqbh2QBZRPMZ3mJBvSDwgf29RJ7u126rzPmyAWGkhmHgr7gyP",
  "key27": "4Koq7Koody8bWv7munsMUBpRCo2ngT2NUpbTiHk6zU6gxLvxtqkVWARvqsKWcPg1ied42v4p3gfPNKLNhJA2kp5M",
  "key28": "2jNfDQZ2QW6WmG6icVAaCZCsYmcKJ2eobNbL3X6Up7dPn8xBSuaRNCbowCGuEkotgcVW3Rh2m7kQQU6znMY3Ybt4",
  "key29": "63cDN5j6dQevtcdGjhvW9FgBHc8KidGgz7Yg4tH4wZjEvGj49efPLK68P8LpJupcfye2gpoqWdBeMEdvcU1KokUz",
  "key30": "5SNS8oD13EFh6hPzc4zTn922c4pib7LHv3o9cRHkzddMyZbziQbiHVxZYk2pP9ukpq6Lvj8b4M8RKLkwDwcaczyA",
  "key31": "48hXta1SpabJYGs9EwfcsGGrAcDV4J8t3RJ7R2yHBzu5Xkhzd3hK3bK2zku3w9GdDFV5FvjQDEUBAMao1gqCWZf7",
  "key32": "cw7RXmP9Jf2oqACwshQP13SdTRKomE6UjbKZc3io1pV91HJkJbdqpaWZaABMY91kVYq9Kmd6KyXkpKZmBn3n2dP",
  "key33": "4oExSe9XqBmi6VERZSMAcDkpSX8etFnhBFcdyS6WJzmq7EUeeBjzsJivb6VpTykQPmZu87x6BnPC9mBt9bSUPwhg",
  "key34": "5V8FJaYH9kT6YaNhVFGvcuiWmQXsPV8C3Z4xoTvJPczXQTJtnf8H5qrXvPFj6sDXmhccizonExvnUuwZXoK2mYfr",
  "key35": "3hr4qrDruar2oS2b8tPr4nWWGWoCvPdujJSxuLUxhNqRywP1HsTrLHFFeVki9fDfsZRxum7q6Adm6VRgYnTtFZvJ",
  "key36": "5GQPUosDcwEPZ7q1FSFgF4wsbmnZ2W26SSmsBwNqkt9JtyNCWym9P9CGi15y9tbtLcaLDL7Y2wqJKpj5K3vsRg5Z",
  "key37": "xzzDeCgS8BDJ32MKHYSN4SDPQvAXjkeE7pHPvKJb2Yox2BFkHsY2Ztobh32fAvxRbyMPdxtJWYE5sCLC33GoWni"
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
