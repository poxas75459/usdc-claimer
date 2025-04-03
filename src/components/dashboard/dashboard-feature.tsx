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
    "2h2KLe7XofPzyKVny7UdzpZoV8Z1x11R9g8qEb76nYLXitjdje8SJsKyGFCBPegXJBBadzkn2X3YbtCytPyQaFEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67caRMdhXdtKTj1gUbPzp7FF5a7ttA94iRSJZJxdV35sVsH2Hai84dGwd2SjfgpVyd34YWi5mvQkyoHoJwNJWPJA",
  "key1": "FVbNyrLW9eWdRvL6wFCFcHkEtbGEyRXDUuskSppp13ZRzQWxNF5bwUtmvZ2WG8LFxp4PG1qn8u35wNyQuM84aBE",
  "key2": "GNRV46qXsXoEeUBQDfT3DdXFRiYXtdjxhLLRfbLivNzvS9u3bxHnGxRStifkC5A6ZhjbKgFYpdMHUY5smQpTHmj",
  "key3": "2jBAhuyJtCwqwn38J61aL8MCxBxtQEuKdmVymSDtNWCiqpvoMPVvETzUsHCrW8uNkXrSgKyK8c6zWHGmZLyK4EeE",
  "key4": "2D2u9eCFPxn4PrHXttawKWdym6weXpEqt3ovEuV8z1CWxbFstnFPts4f5tsc3udSWDGSG9cpwXQEByi4Pf8FFoMP",
  "key5": "mYEZ9JbrZEmzG3jUC1mc79pKJ5bRLLGAGm5nyuRxGXrzLM3Lp6vwsywBHJNbaycz1VLELdNxX6haUHfafJgyEnt",
  "key6": "yvhcVsj1DebNNpaHip6e1zatEWrcVJd5jw4iWUkRiHfokBpdAeRmGQcyYcGUKpJWU28BN3r1HzeCU6aU7TZRidi",
  "key7": "4G83KDkKvi8MgYtuRA6xQQehr9LXodWJDgos9S2dQCNT4HGq1kxLY1TY22PSn8vjssdJKAZgWsX32YgXvjUYmcH",
  "key8": "4ckTBsuUZ58rY3y6TMkRCctsLYz5nGjTZAD1HQxVZXdvWNrP1ZQCVvYngGfUa4kyeUCR3pF72jgtQDuxVJ9kcZfE",
  "key9": "5HxQYamTUQZPK2aevXn8fXBUzxWGZboAbMiBWhHCBVSKhBK7rX5w9GiJEcTUnSyDbpUuTJX6YTu8DREWwovnX3eV",
  "key10": "5qNo83RW1atipzPscXUmMR2KVBfkuEvVhfs1H93ENupubaJp4xsHn2cULKG1CBDJ2aXxmTg7HMPNUni13NuwU6J1",
  "key11": "5GqFJJK4exbBcZnpZfWQuMz4ZzMkBKZRURx5nJCDbUCq997cDi61zEbiCu2qckpvWs39uabqXJXZCWiBCBjtGTjH",
  "key12": "5qgEhY1wWkkNYy2jCGcB8bQf8wy86vN7hoe6ir3d4MsjXEfzp8ApWiX5TKeFp2whHHXELjdTe9veZ5gvzSJ3sVV2",
  "key13": "JK7HJVGoxwHbprPGYDVSvfUs9co7WgquxDDCGQVSiRNDrQNn1UPPHyP3T77uv8FDCL5CJSUJU4TyMopMSejUf5A",
  "key14": "DNpKVnKmYvMwYKSrGVoGYH1PyXr9hh1wJ85G6ewdJDt4iY7mw2NsCVedzu8UA4B3EtTodt4QWtMWbFXq9rcSM1t",
  "key15": "4bzqJkFW72yDCuNxsySLp69px2mNBxaRHM5yUKwBQmsC6a5JBxkhYKrVt9ZQoRuRSMx5LPcri4U4jQcLEtPW11jD",
  "key16": "jK6jm5MvU3boFirK2xRSnhRESGyrRzPKij4VNeRiu5F8M5tPrMuoBxrBZX1tmExisRi6ySMeHnTgGLeC5PSoRBi",
  "key17": "3PCt6yxcjdfjYpV3rdWisvHb9SweB2nDbpqaqmpF6M7B5GrGdwaxJkoteUSsNBmNiT8vCZF3ogb3kMXCNweDGsTu",
  "key18": "2Ef3LHGbHQW9ydiZUxfg5vXdzS76hQ4B18kTfoPWhs5Zv9gc9Temmspb29zAXkYkBoJxE1coZg48M6RTrZFsNiXf",
  "key19": "5E71j78CzXWGg859NMgQ14bKK2gAJiMgnqYL9YjVWjkan2FZGiznVs8xZ8keotD5nSHcpAZv8fsFpuceJoYWzcDr",
  "key20": "4TEHAP93FuxVQsGZrjeWLuJ9iFxs1G1gXu9nvakMAU36R8ej7RWFgvj6V2Ks1weDRDtDxRYtJG6dYFjAMtZhVwgk",
  "key21": "3qJSbDc58dD1UhrWCJfktn4HpcEfgp8p1V2uAL12SqgCGFDGK3Mpq3a2nEqqa4WPgViSNY95ktHTH2Apvno3vLDx",
  "key22": "5whYr1SRHHhVxau3WdY5jAUguTCsDCaQjnG941FMUT15JXDwzRtqE8RLBnqFtQwKNzUtdNGU47udFzGW5U1qdphh",
  "key23": "4gF5hBmLTk91yjB68s9j7jZtWNWUXzaiBUhPjXYH9NC6VnyY5dPnVLWfHjXjipwLtWq6fEL7mKhhm4VUWgViHp1w",
  "key24": "3TNZhzPKMg76bY99bLkgejPQ9CEWzbjqg1jgmdfZkxpAVSBjjhtx64gPJFay2RKMhVJudE3dbkdgzQmkHQfwBNoW",
  "key25": "2r1DdhLNifmFij5Z8d1X7UbRZJNTvKmqWsmXiVMiKeVzRSLDWaz7uWp6ZGMbDMvstCZSrFYMFChhUFbugyUkiigd",
  "key26": "62K7vTCKCrPEP2mJ8vTuQ8jhcRM9yYzFsz5khJb2dbkDZNFsVQv7e1sx8LLW9ZjNkSLxFohbLrWY43bASsQM6Ktm",
  "key27": "43idCj8PM9AiCqLg6TRgD7Z3669pYbY6Y85ReyH5QgL2cyhuy3ydmsBLVngGfUYdsTcTRvMarmutxsFsgH97cYRo",
  "key28": "4TKbJt893qfgdDY8Lb1TmB95vWbJWf6KyBEKSHwBH8h5h1iuDijFqwZMyYvmtijAsapapbxwr4fTvDKS38Hhp3tb",
  "key29": "2XesMYqA8a3EFakD3xXSKhpHuA1ABod7s2Jz8SW6wwNUQXWtckpbGYbtEQwoafyLNocLNEDdYkRuFfoGrZbyYTpL",
  "key30": "8CdcoBBA4jU62VgGExdFNP1SZfgAKUzXju4mwJRewMPumELpQyPjfEW2eDLhrG4FgDWE5FMk9gjv9BiRLiqMeFZ",
  "key31": "4NhdrsLC8QhkXAhicFChajdBBCzw62UXJ3a13Q3sfS5P4D6WJrXBJgNEfLutRjLh2DMUmVpS2PtBnMKjnSn5ks3S",
  "key32": "4TDSt5odrbgyj83KjnPUFYN7S1d6v3rwusvV3VYSTbTkzXAW96ShpcyfwnhWuQq2S8mEkYui8AqZ56HEHqXcjrL1"
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
