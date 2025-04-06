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
    "sFsrpbrFR3Hj2KgXUabNHGG5w1vLAaUSDEaQnNzhHLK7LRWiHz6P6LipgPtpQaqe1khAdMggcjQ7X6YsSEhkt2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "286aBsGcH2kpBKuVnKSqPVpJ17uGqbPWSppqCgUx9oo96jf2shQgRfKxzM1h3tib2mHFzNPZBUvPqjGf7iM1WjoH",
  "key1": "2nQHokYnNFNuiTq6z38oCFDghCV1iwdjsR5DBGyq8jckYvwFsDUD6xPxipJ2fZLG3d4uuLqtVro4eT7cbDhDb5rc",
  "key2": "5DskxUtKc6oLxDC43S1FXhABJ66qeJDaknF9dpL6EbvCeWxoKUEFEYB5tPQmMemL6gfjp4zA4a45xY435WRrz7xj",
  "key3": "invcMpVDYa4SDsLU59WmvLvyCnUCaDyPVcp8q8g8SLe9sRHzf72hTraW3iPN6muECeqe2QAhomXhDGpiupSeMSR",
  "key4": "3n8xspGeM4cSCGX5zp9b1jEYCT45D1Kqroo4jgeW9q6Wz2RtH8Xuc8qgCH5vC58iYpotVQMtYAXrcytThL47FKpV",
  "key5": "2Mrs6uqJmi19qEAVLWmao6jnZWfsgShkUzYyyuEoeqNRFx8HMyPRvnbVwEnwQ2EHv8iEJvXTiZHJJBFWghU2GWb4",
  "key6": "39PuSzFGje9XYEyLNqWceHx34ZhQR5BdpuSD6sBDxZZ27SQmtyJZwU9zC6Gvz3vytPrF4zbpTFnVCroEGZqxXpsw",
  "key7": "Y6p5umyuAtuk67TPS1hMTNrVA9oLJgNES6a1DcXQneZKzTb5tW3JQR7e2hzdXaRzdQJUBtKBDZQBobBkwnK86PA",
  "key8": "4XiUEGYdT5f9Ak64KtBzwjHx9VJy5XYBapLTmkqKRQHEhWeVvXps6c3qNbCSyJxa2RWgj666jpaaE3xrTzn4RRG8",
  "key9": "LQNt4iTSzNBRg5zegXTPqa7hLqFv2NchsY5H1M6KTXav4kXBgFv1QXhxtFzqSRt3ACrubTB334P6U3sBRsBSY97",
  "key10": "2piMC2ncZxaNorQYkW4JVEFLcjECy6M3uWEJqZtQb9SDNTN5uatZC5NPCmyMrQsorcocD5cajcQgiuBEUwCfnPgX",
  "key11": "5TuaKovYs3Qy6w5FEjaA1SCH18H6imyxqkGa2PUh98PCEVK9ZiENevP9KnSsFA1waKzWhhXWYwJaPU7fFWfmr74Y",
  "key12": "cei1gvUCmUfCEwaVuf2Zmf66ZG85rfqrjN2jtk5mLPpHgQAA3bdkrs56UnGrouvSuzjKmSqVXoDYV5wFsPPQKce",
  "key13": "iVjEgcKJ91CY9Dm2hyURhJDjXyTsJ4e1YWLwScFqmrCQAfH3y3Dcwi2JoaZ2zcwzyjCi6QRh3aooeA92porQavU",
  "key14": "5MZThQzsHfBMeuwXNCVXDesWBWMeb2cedpzykkvHcao2Y6gfNLTKsV43FzRR2mHTytdZ9h4J52GuSSSadwKeyF1a",
  "key15": "3A6727bFDjVdxFY2hXTASBy2guV1GjVQo82ByfzrTNizXPr2RqNPVq5SvAjRgyQyecetu1K9ETNP1UhbhpYWhFhq",
  "key16": "S2Kr2V1hvpLHFiaEcHHWtcHbNzydyyieUxRqp7MEUZTJzPfvwv2rKHmSUfC8XsA3gW3do14zmcwPjKohinAs2UQ",
  "key17": "4ERCNQcXsSe5SypYDqBvutMq7gn5rWeKrG8LKHCcE3VdMFWadJKbLytrCEhBXhExLDgKE93rwrMXkGG566JFaX8J",
  "key18": "4VPcUAzkDBvpm4Jd8V6eC7VxwDE7PWJ3dVuMbgyfidoH78sX5VQXtEDN35eTc9wiatzXByDAj673PrH1GLqPCv2B",
  "key19": "56NemSPPSMCC7gRRyNqF6WDCDN9uwx7PTCR5qZEvkdVtB3eo5vGq3f4WEahoLuTw4V4KHkDVZqcEpAWuGoA1ZP9K",
  "key20": "R8Shwhq3RphUXmkZZpJ2mNDsH8HCagKwDqcVNhAzFJ1ELPn7sqn8Hjh7g4az3UrKpRfZ1VmFtXZ3XUzztjpeP2u",
  "key21": "m4koLczo5JG53y1KEeoir2a3zPQFGGCCNwzv7vv64PFVWatKhdeyk99LjTaKGYb6hCs2f2mfyUqGSXNrwcbNSY9",
  "key22": "5FX5XxNSempqGbB61zHsDW61UE4EXa9i41ccZY9fAvo4wTMYuWYKqEy9oRHxVpyCwBaKj829L8FW2aThQxAUG9GJ",
  "key23": "4z3mvPpE1dZvf9WXbDATUVkexNgjzSkjQxR4U6TyQMpWLGXMq9Mz39buAvHuWg6tBZkMr4Nmnof2hBvioUkij7HP",
  "key24": "2xRj87M63Tx9C3kcJgQ5zSLCyFbKqoyqajbnJVz7DG3aY6ubss9ZfmBu4qrWLRKhDEnGBEfER48yxcqPcf8yodWK",
  "key25": "2JNKDDc1NKjniaAhiX4YLLXHq5sTmo2z95mfP88Q17UQukjLGET4Z7vp894r2ftbH7jVDA39p8nqakHT4KRuoSPb",
  "key26": "5Dy9hh7AG4s76TEGxSyXPWndzYrdRM7DP54tGHGNr2nkT94DoR8mHVPx898EzWyKEbsQU5iHbGa9uVahHiFk7de3",
  "key27": "2cgfjEqVhUYvoM95dBt2BTaTBGq64LKmySeQhx7HRv9sWQjxhdgBqrgUbCHJxbgvopHEYaLjAsL5Zk5MbS7G3CoV",
  "key28": "3Wsd7TQtV1z3bvp9D2V2Zp9vNqtt15g3jpenWxM7JVjvBupqsUgLwqLJAnQQgoip7BpSAGjsZrf8bdzp7dXduuNC",
  "key29": "4K9Z6XEKR3pXW4SuLJyYoHruy8Ji8adZV6umVZYyK3F1G9H9yAHWsxQsQ4yhdEnHynFed97y1cmpFdnDdYjwjycd",
  "key30": "52YQyNnikhKMLNaM2mnxYdvsYMHa5gr8uGnJeZjhmNP7gKdbUzUabZsikGDaV7zC1C5TeX3moffzgEMggPQqNgEQ",
  "key31": "4QsVWWoh2s4wTgeLsF6uGDPhkaxht5pf2m51SUz788U4H9x1dCP6iCAVsLbjy2GvACRi4a55CXD3qV9d4v2Fji6B",
  "key32": "4DH7aqhJNpGhooZq2rDeFVMjNthfRH6MsdUZW9jXYw4cwjyosvqeNb7LC3f9BGbF8gXbNxNfWdtLbSKhra1emgab",
  "key33": "2ZjDFqyjahKGJJp4MitnR48Mz8rtg3FB6fF7eVrkJS4SKnTB2XWM6y4TcdpmFc5oYgeHGzmsMgMwacpvZb4AfuDe",
  "key34": "5JYrLkm4oJMe5cyGM4i7nyXu9gbGi8PygqWtcEHkocuFY7ZA4K8Koyk88QBrYK1yVBu2GCmZwRmA44EiVtyrDcCY",
  "key35": "51umoEo1PV92gP64rHgzgu1qS26fw8p7kDWP6jEwrTcMs8dGuvT8a6jJLk8Gz5kD48rxYsyQfgdBoJFY8TdVsg2t",
  "key36": "59QWJcxj2teaJ9XPVyJ4txjCyf8MGskVEGoqKDsPRYW9w5gox8uAEcSTob6ss1oq17ywJBrREkNVbDixGKccZGna",
  "key37": "4cYc4baof71PzMDmdCXtozxqxkP9f2EoLijN48fcyoDrkRHGWRABuDGvmY11QuT9si2VYx5K3HDc6qpJpG67kBEJ",
  "key38": "eLy816ZNTpkYgR5yB6iLK29LTXrf6BzQQkq96uUojFBcYPf33pD24DzkbChtoKUj72AxRo6Y13PXo3HJucYtuCB",
  "key39": "2WqvPdQCwuNxx4f1dq7r4T6iwW75MxyzvHAXqiCTGvWpXAiVKobZdE2Uqe9z9SmGsUoYQpRPh1oRWMn6oS429QP7",
  "key40": "5jyfzxWSrguX4MjFxd3gzpiNW5VVnTn5CCzo8fhExdcWoAbMLMzKQvyUvcjjDgC2zg1uydz1yhEaEKnJ2BJEs1U5",
  "key41": "3CrpjGz9WJv8qE9ujRE1vXHrfNJ3qwCQibpPEsq1xtSjT5sDG4yjmsxwU6Dx2PYPWFY1LFrSC9iLkGupzyiY53xF",
  "key42": "4QYM8UYuyK4qDKo4de8eiLrvFwXU9nAuwJoeQhFJGiXfCVpbdgh4BVvLWFVeTX8LqHdAtvfzqmRL9Z6arzmfuUVd",
  "key43": "2N1MjAWduMLr8UnfXuLEF1MLXDKaNrhmqdHhsrBtv7ti5biApatajVXRZm4Ze5tuue5Mszek8W2MuCEA4Nv1wpo",
  "key44": "47p4B39tFqSshEg5dzsDDLgejDnaNeTEg5GsGyH2ymTvainuFZHsYQZjdTUs6WPALz1joZRiaXmvqXLxgfeYMAAq",
  "key45": "4eXQ2EZqY2z4WFnJRarGsDnyj93w5gf2bYcmh4DcuFMiLpt6gzjYvBETtDWJoniibtZhVBGbQwfMhS5G4zKV2sSH",
  "key46": "3LyT1FrzM5MuDnqqt5zhN1V3mFUu4pn3PKZhbn1gJDtBW3z7rbDibreCXayToTEZuf6fBZipK9PAmNRWC3dMuywu",
  "key47": "2dDo9MqxxFcyvT6p92RS2RPH4Qxq6VqCYoCjZzvc2ttTw99opoScXNx22NJ3GehJxpvHAn3qGst8pyuCUdMsYy3t"
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
