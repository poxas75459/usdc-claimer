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
    "zEWERC2fXcJGURPsyzALieaE4oAD5b13RLZL4FNfafbDHqVpcUcSnPYaNgFm5xuN32jzW36T2rx8ia3JA1JhNAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EMtCU3xuymEw8jy873dsQmiFP1t4uRnBt3t1Md3jbPFGnMtps5yYZZGHqw5Rekh6yZ3v5SoiLdAqh3yJ2n1QrAw",
  "key1": "67kgkym9ZNQPnkb6JdUmoS1DgvRnsKNk9YRhSyev9kTL9QByCee2bzbkXP6Ask3b5Ag3751mj4uMLjYUqeHYvG81",
  "key2": "3Zc7TWj1fPS3N8qNcCzLh8TXtqE2NsAGXFarbc3apAJWB7TPo7Mnfw1BNrn4iZupV68aZTYxQBNmZYKAx31myEiz",
  "key3": "59nta4x6VvPC6AU7zfhvrjaGgqGscAGH8wWmNLmuk4RaTKm9WZCoy66H3ZMXrACGZ9cFzA9xweXMRdXP4SeSKfbN",
  "key4": "5vLtJXmMfubwu17198zL3SWoiwafZTip4RNx8cUVSxj9dnm8DZNPy3w6RmhVjmf8j7gTvp66Fe8TSaU4fKaBLxiF",
  "key5": "3F5wEaHUZdbLDuEEezzEEKnoH4amAGxXhvdx4ZyxJLsfy4tL4idcLmkTxcXzaUNgTPiSiLuHZ1w2JfrpW3Ed1riU",
  "key6": "5xjWTCNqs2yLUP4PYu1bVyHpmKV3Tmvz58qEyYspmhcPMvPyXUkioYKmu7vtP2qSoFeVbLiEsnfRxcM4bcMWr7zR",
  "key7": "EemBxLYvEP4QoXS5ACoiE7Y5nVm62kDwUYd7FGwSmEM51WzbLwK1GspETVWnTPDUUquxphqt19PW1bmacofdQeD",
  "key8": "4QtCdch71LRzsdiD5XJkfhFXemzEGndLX9PYqcUgi88dgUHJxGe5gDRuaBNvSwkmpfhDZWY4FDrxW9G9aXKtgp7A",
  "key9": "4h2Mxq5dVV4QqZx8c8hkZyASBpUZztQrgjVwVHdU9HkgPp5Ezxp9YpZ6CbzNLVwf2Thu6zPiwxHrVTumszRh2ecH",
  "key10": "5vvhgf6sLd6G2Vzpb5hxQkhMXzk87vKT5VKUff38gCsSsBxREdpLf4mx4sdkTmkcabUgygtqjr9eYFhfSfnQCTjF",
  "key11": "2Zv2MWXToqYQjQ8XGv6YmMFUKm62CUCccmASWezvQYwnTkuAD12NJLMfwz6pFKGJU5xsY2oTEH6MZy5sQmGP26w2",
  "key12": "2reb9hs59Wr1tio7iRmoySqw3gLNDKiusezR51Y7svUjhtAQSgoV9aNMLjBQ8hH4ULE73DfWqVPmucQXPYT9MZFc",
  "key13": "39SBjHQSk4iLRauuRbpdt3vwkBDx6xVNgDWuccQwTqKEEDKQLETJHytdEpYhLxDFx8X24zeFG3rdaqcHEfy9zJDF",
  "key14": "3EghcZUE35ESGfYJ2Td7oLhnHfPgeDhkFn2GY7UFwwYXt4Dv5BGNggtdEhWfjB3wB7sunPskGvNtU8RW5pdgfn8G",
  "key15": "4aovrr3Pa6U2MZgptkqsGmRYwJ5fLYaRgvQxWJQfLeZrsnRZQG2eV92jGuPH52dLfZYdgdzqHpMbxWXv9Dw9LVsY",
  "key16": "4Q2aQvEKie5nsUu5nFqvty9HxHb1s9uLD3R4wtQou8UK35JJHxPBiyUBvJ6RHKVGcz2fpKRWRbT7LyV8A4f65i4e",
  "key17": "4vhgNugkXtVS4mUSc2g9nEj4BXvZ2pRsDqFJATjMnXfCvzrFKw7HB9AQKkUtgffhmmXghLTLo7cybpDJ5i7Fd7JV",
  "key18": "4UMECyrfvuR3waVDUbb44ans1WtdPJozkSDCzkJd4wWmsvZ8Vh1UWB8ekWcUxEb4dXQJSAM3qTeVTSDptyqVLAHo",
  "key19": "2vfKqe3RgTDNQ5MbMa8B9YdbvbZLHJC6cc8idvLdgtqe6mnE9wcKSfFAgkAJdqZXHS8eTmDeACLna5Vj5FGsJv8H",
  "key20": "5vQW5h7tMjjfrujRdwffdGMEZLcKLcythioBHds2hVkUJWLJwwdSCroZ2UEqWDwJJtjyk4PVBc4Aq6sQ9PXBWkM1",
  "key21": "X1xv2tjEg3JQpzuferwrzncToKMgVjUMagreFpdimPEDUkV6huCqrRx894XfuHxQXEC2DPm9go2NRp77Pty4am5",
  "key22": "2CF7Vc92cPrekdCBACzemp4uWKwqSaPom2LtQf7kGucGud6mEhGBjcy62qmtSV89CLbAcLgA1LG89JY6GeYft6Qz",
  "key23": "5opdCyEHZzSmfGRzJN5o3xF7HRsf49aJT47igH1aGUxxVVLWEDysLRZzFVeSfF9WVYBHZmiS1QXo6RQCnMazxgV2",
  "key24": "2GM6Ury92AdK1SqZcZsMHHSumqK7QanQ7D2swndpDLSvu3158QsVyzyRRQzEFkxnFbCLbo8i4PhcKPoZVyoP6Kgg",
  "key25": "427HbR9LrkFv2R1J33EuVDTngSJ8qjYPVcN8VxUZwtHSQjjAbo4a3vrLv998xKPfQESqGFMm8raN9dJjJNVMP3Pg",
  "key26": "3WgGoocbwtTFeK4Y9JYmk71miWUdACMueGSWoT3kuaXEaetrjFRNxC3Dm9uVApUf1kDZUZ9RnqJNEus6pyb8kERS",
  "key27": "KJj7YZTSPt6x6BeGhXXYydTWR36bbXFTJvsmhoqyV2gnJDWJ14XNAzUDsTRZnL4WZx8Hevvp5pwUTBS1fZ9ySGo",
  "key28": "jMhZ1ugd93oSN74Pqge24su1KdMc2nD7kuXsvhoesGiogQZLAxmg1viuXEwGT36SYyr4h8h47MKwDNya5nMPxRF",
  "key29": "2yBs9Y1txDdkKrfjV2fuUDWB2Xyfd4Fiqvuy9URJNT7btWxEPXAx3VVvzAbASGtkTfMM6aacJyVHse7DtkFNpsaS",
  "key30": "2rdnW3rLmqFjdfp1JDKQ3eSm8CZgpRpNRDZzBfSPLcAzFBfLR5ht6HyEEm2v3R83cgjUJSLnDBs1i6XYNsuw1qB3",
  "key31": "2s93PS5A9AaVS3TbXLkv8vWxyMmECP2Q6iE5M4kdPVhWf8nd2NhxirYtBmNNWc2DupD195sgS2LN2toyfu6CaNhJ",
  "key32": "3otNegttfhnTyeUHZQ3CYxo55zWggRYbEmYyeVvg7ynjWahZrDTTSj19RjfmmU5etRWFiq3q8pLfkb1aizsiDrov",
  "key33": "4pvRBGcwZiHdS9ck2ib7cdkJTFZUds8s99nhmWmgEPBumyy86JhEkKpenfGfefJ2rvkzCrLgQC8ZpjRCTWDTLSDa",
  "key34": "4ewAZt9rykWDbn76nXqsDfW8JUPQnAhzvPU6kQ8vxsgqqMja6nKtM2Mg8oqryk8Zzt3qBbbMXBMbqQeR9d1vfoN6",
  "key35": "jgTujf7Ezq5muyWUEiSefJo3ZyqmFFFJ3GTM1Y9riXezM74weCLMkWE9ij6EhrkCLesUTyTtRvcpPbVzwRNZvS2",
  "key36": "c3mUdje31uknf8nXCBXVw2N5heWRHSCCBkKwdkSxiTwCMTPcuRjNvsMZDoBCJBCP5Emfze2kWidMseNNm7m2QpX",
  "key37": "4X9c3LHq4n5x3ZWvUwJ4ai8Pg4AWfxjURFLqdAbfgcxWAz2wkH3FBpdBx58bdt7xrdNosjFmwfvoLEBApqXcKaWV"
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
