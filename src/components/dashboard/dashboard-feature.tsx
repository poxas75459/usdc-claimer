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
    "7zfWDGRyzbKNLNf5ohS2f1t3pSBJtYEcnpjKoKdm9izp8anVqmadWnFh2G3yUihmsiF2fQUjQKtiArCopZXw4LL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GU8GCnFaPnpGRtovuSbFCunmnub7Z5F1VRFFocX2eF3WHZ8kxcMf4K3RBEYBfB1kgZ3pinXzn5QR7YAyZyHVEVf",
  "key1": "3TBFwurAViaf6SvsrcPcsZmsSiSBJNp5T6Utb6gLVF17s51CG35A6QSH99HtJCszfgE52yHppWb28bRRbKRPDsAk",
  "key2": "3TVNAMCbPPZ27zAyBasgM2L7uCbrDGbHsmDrx4JicCT13UzHyrut6oGcBj1U8DB5uFVyu6HLDDEYLUSnBCsctecM",
  "key3": "3hUfc4sA4rPBxiG4gPWo1ssUC4kb7PAASAcjkgPeSCar2g4G2i7JKNA6EbskwedS7eW47AYHTLRpRGNT3tj9bpkv",
  "key4": "5Dvp8cgXSnsspBvk22gqNkKwsKG46KtSgVnWuqgcTinMp7UYFRPRQ1yVu2ghJ4WUouQ7xdGN41yUmgizk6vpx4sV",
  "key5": "56pobdCj2xodbiRexsXFZzUwq8b2XiFmrLFQTQUpibKqXgiGzvSTg4XnBX3LKvT2qL3YR61gAGh1P6jAb2Q6iiT5",
  "key6": "4LhubNpPuWnYFxkkEPKVLiDKuSEq2pL7mm6xgeLPNiTsLKk8yn96x1sNqg1Kx5S6e1DLTmDsQ2FupkC5XyJxtR1J",
  "key7": "4MDcCDvLoXqCftn2VSf1dX73g6GnwstaPm5gB8GTbxpB3DcKjhZ6ann6Tq6Xqz8EboNNKRpRBDEMp4WEPiizc2xp",
  "key8": "2AMNbCnNT6DErvVCdYZ98kiDZmw43T3QciE952vBM8AsMSomb38dYWvbrG2vetUsqV83mbakgZ8m5BodTMuJa6MX",
  "key9": "4rRoBScNRoKaNSt8eooszZwrtUCUqqi729pMDac4s6ByyEPC3Vvz9162kE35bZtApyE9o41x8Rd5swacFZEg7ifB",
  "key10": "4SKKsbMcqiDXaEU2B35VadLikKN57kfCr5QkpTeVLsfmB7BWmXPQ7i2QQYcRbCeFB1qCvneMdCuqAcPRCYptwpSa",
  "key11": "2GJYZg5tPd4CKxdpAU1kTFthhDWM6dMeNW6XfADyuMtT9Hdwn7Tn6Z3cTPSMqWwsHAJ7zUTU1zTzPCL5AgWZCYr9",
  "key12": "2vSBobbeBfa3ANgn7fs5AKEGngnVWaUYZ1xw6cSXHB1uUtwApcos91ety6fXg6fnw81Cqn7viYEn1mDAQu7cJaE9",
  "key13": "3UQGcbuwNrMUoSKmFoDdgwdQiKnx9sVmjczY5R2uNgDFoQ7oprg9hT4Vy3GKTbGMtPWdX7bB58NKj9yJWYnjezLe",
  "key14": "AV4tDED8tsLcQf3PcNPs3fBKnpRUwbJdaqfzzrDeRj639QUysVa2YvsjiVR9DgG7GAcXdTS3bcMJ3HE1pZy1Wr2",
  "key15": "3WvNv4z7JCqscCutPbQ5YLn3LcaoH2jEh6ZgVqNSggcb3xSLtUgGYgoG6qRViKW5WwLcAT17sH5RViE76vmw22Fw",
  "key16": "3nNCiPL77Rpj8N51k9jtdqMWw4irH85z8NeyzGdn9mbB2q5AZzQcLS7iVPQjh7Kj5KHnkx2zF7MpFieP8Koyibw1",
  "key17": "5vhk1fsn4o6YyLS2fp431Ucr4f7MJBFpJXt7y5GcrphoBaEKpZuGGV76fnwy64KfggmBnGGkBi4WD4fXEzmSrDzp",
  "key18": "5YApLgtYJknXm4yH3WphAMMEyYGYKkFE49fL5rhoxdW9rvrjSjc4otyfPzYFTR3NYbcfNirNbva29F8E4YT23gRj",
  "key19": "575ZtKgHNMwegL6SFeZ9N68zrD7GP6wXLPU6XQF8v2yWwR2GnmJHofoqYX4bDwU8f8Qg7ZHsNaiHqPFJ2YQev8Ax",
  "key20": "3fz9wbJpp1hSMVJ6vSbyRvgx2uphCbhwmamhw5iBGR2ed6CWbtVdW413JZ3Ggd51eWehA1t81A91BXSuSaGY4qCk",
  "key21": "5gxqoEA8cgwGPpY76Vr5bsy7wjoVUTnGoacwBJnHPDqfR59qg9dhdEVShpinv9JSXqaW5DxYgA2CDUhmwiqBb6ua",
  "key22": "61PBxhBgoWH2S1rZgGQraWT4YgsayePYqc4DxyDP8D4ysxLwLoSXosRYhWFUtFQp2yhgrjVx1NiRJGirDFT1eMLm",
  "key23": "Xdf8bTGX47k2VwTrEoWktumZBtoGoxRqco5DnLiXPWGwWQfvKmyHLs9by99kymff4Y5fLNF1cmHWpTKJWToQbo1",
  "key24": "4ji5ihYYRmSdZNtoB2onkwEoJ3wRqPjcE1g7yAtcvLUJCaFnWmYHC98tygrgk8ufXSrgmg8wGRuWyxXsxiPZFnot",
  "key25": "1Hox8kupeti4afx1VDJDxART1NBYuadQv4VnAUqSDWS5LK6CK3vpfyhXCXSZ2KgMBt9mdxSbPdTfRirBdC15knV",
  "key26": "5y8cSjHKRZudm2XQqGo7WwjCHJM75k4yKewojesDpWbtejtpy8LRiuSZhjQREUEXrxU3XPsjxTHMKfNEqgrbhvQz",
  "key27": "4UAQqLJKwh2LDqRshDjJuXdWimsvCkVZu8nwLpyL2h2TsGNCFPRQ17C2fDN5uvcvapAqaa55Fu1rWMzHabmvJjjb",
  "key28": "29hxiVGFQbB1TBYAjmRytKxizEnhrJP4x1LYCNeyZw5gp3o7yGKYMvpjG3hk44yAvNg73oLJxJeg4GrwNGGXqiNW",
  "key29": "qd5KNY2DfuUimuuAjpCQQWavom5XaMvSnPqEWtj3FnAzLzKKQ9xXthBsWUfCoGxc5GpPWJWVe4mKsyUEsHsLMgT",
  "key30": "2HFR8Bojn5thPi1cNVn9p1gjnq2zTeD5NbCnaG52QaszqctFykUq1GVMTgrB3B24s7F5aWjnSecroV3MUaxLQ46i",
  "key31": "2jBCbicyUUUYhqcQBefLHNYjB44zUCc2MMiQwQEwoy2amRH9daqsA181DxZdyiZu2621mNpggxxsXptGYxS6azUD",
  "key32": "3AhiG9H83ofhBFEmjeS6q1zw2cRYcAiPYnYyJiRZRbH9ijjqf9e73aT332TNsqcHbuKagf8EnhEHZYi4hBL4UTaH",
  "key33": "4q2SgfEnyu3krEPnN3oG5xMNPAMFx4jco9PhsUSZJhKdsSN6stCadDn3R4UZNEz4RfJV9ZMAFA9mqkEuCCZwUxcV",
  "key34": "4GaiWpBSoZLdwZ9P2YNK2PBvGxeRi7r1cSsjBxCVswFX3BxZM5xE5o1C8kogphNrjqKDWvy76fWD2Srg38URHgYd",
  "key35": "4FQRWpQ3Zb4URh91aCETFPfC823Y1ft8JrJF41UnqsYCqXfP3xmUepLKEsgmqHpKc9bgUGyh27G97RJN6WVKZgyf",
  "key36": "3zaA8GGnvYUYETqvcTiZFc6G3CHBS4PCesGDBBqxF4a5BSHJR1Rr6L2PWnBvGkw9yetfoRphxkucCN8dib5jVX5Z",
  "key37": "2BbQFe3DC5qyYBcYtPMYKkm78JZvREvFCwyNbdUAZkaz6k49Xbvzk8L4k6DEqUsyLQmnMMgaHbS52UTG8jgrxx16",
  "key38": "2BThZZ4HqGDDxE7iairUPUNfEJShXira1ejrY7MUrw2xGLGPZdDeA9tPgMmCpyce6atd9JDiiUccv2whHRbzuD1Z",
  "key39": "EYr1FpDCXQfa1f4vQAhZhtCHx5AcQXMSAQyY7iFwkiKdA1ufzfKmDAH2Gg2v3BqB7jNmu5PhdKdzpcfWLRZnkvo"
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
