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
    "Fev44TnqK9UfhY9Se1LLeYskZE8riWD5HhzhDaTdJCsWh3gqJYnxvpXAi1V19e4Uvk5bhEWLkeP2tMYCpFSA5j2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N4JKWGnp9MvkZwokW4sb65HZfhrBVcnuUzwpeJUQKedHotcEprLkQbqU614o94e6DRjudoq255ArHWQJeY1bxwi",
  "key1": "2r1jPCHnQbFsPJknKQ8tDEfUp147weGApT8M6Dcxk5tWGoNa57QX9YzeVj8jw3UrQXAZijt4vzJNEVXsXDYgvwAk",
  "key2": "4WqHGwe2TNYiocD5F2qa7xDMzx6dbTExfFjTeMYLQkdJyfj6B35sFy4xtqFpp2orGbYdfgHArYHJY8mSeQHriNkG",
  "key3": "42LwQLwQKxhNnFxZMMnQhfFUYi9FexfnLikbpaXpnN8iCVNYS7oyEGyQCUF7nWSrrB2uw3nRnNWdit6EEf2DWs8U",
  "key4": "4bTh7PjyCZsMDEYprVbepiiwpcbyEc7ttMERRSMvrQeKWuGMW5w73mknyXPMoN64ZaYUEPKdXWSVVbHEKAPqVcJh",
  "key5": "2QmHjn4xEwJzUZZHwjBUJDK5qZsN5Uvte3nPzfhURQqfqdxuq8P4jZpGDA9CPKq3cxrDuMpQTfFA3PM7NzrN5YQx",
  "key6": "1WsHFLCCu5Vzz2keWSXdFDpPsmTBLZaxYtEMPis841ghcchEWs7PV2sF7qdEZr4W8LwAQUMZ8zm5ce5bkhEsmGq",
  "key7": "2LZbNKsdc6sr3FpNUPPFjuydPtvVaCndhbGFThBZ4WJagiNdg3GypTiwHKSy49fXp5hESLMCndhkBoVq8ZxjpqEE",
  "key8": "mnxQDzWhESfAwkb89edp2gqDh1kbLcS5NXUK7Mx4SA35svT1MU8t4S3dRNsbzv9mwPVBg43fhEQ2kYYgFNPNtBa",
  "key9": "5yQFUd2QP1yZGCvidvtnumSY5Ugn5wTqBkGEgvJ2qhbxNajA4tjN7Esv44d49prDtEGJxqxo9VMj8prBkqbB8WaG",
  "key10": "4tSe4nacdjtaH4a7zp1M94xn4xvdE4TGXuEhAGPVEqfvx6qWBE3VRsnfVNaCiyK313uYaUt96YwL7jxkyYS53gef",
  "key11": "5KNBLu9TFmJWZeQ4GT6aJa8FdQAYN6JyfDwusVZuAGMovfqA3aXEqVFtsmkNnautzc19TTEfKQEBJrTkJsuUv7Ja",
  "key12": "3Fp4LTRutXfwEvuqujEFGsdn84trfCfpzooMC3VaDU9pjQJyCgNKw4B6gfPh7d1veF3V4Pi4RbZQgBj9PHdoJeuQ",
  "key13": "64knhCBBrMx8k5Jo86ivCNhNTRbpg5rWsiW4EaVi5r2AqX7TpiDATBu3Hag1zjcsdj3LjBC9ThGmMLLPALJk7ycY",
  "key14": "2tepha83dJnWWZmbUcj8YPkguAgGGbnuAqjpQEyBLRs7Lqzo426WSMJhoFBYtfZ1WA1PfuLzApE46Wz7BydVMWLx",
  "key15": "okdjWTkQR6vP4NgNwcfh8tW5KZqi6zxpPYDaa4kMvDiBodFuwceKbaipud24RGk7gryTPKjz2SfE1KzfaRqQT4m",
  "key16": "5eGJLytrgAiQfSRDYrwbiCdgiobLiDTGyjhVdawmHEmn3QCGUoPdSND5PHqexfazBgjYmqJPNnrGehMq9wyEX3aU",
  "key17": "4Wa5jxhAvT1cjCSjJehXoM5QPdF9EbYorwwiw8jVbU9xqMG4kLG2JVhLsDHPupCXMTS4j7V5cBZRnYReeUerwQ7z",
  "key18": "4oBsWkGvjK7HnQfkvEAkeTZYKDEWMuaBV3YeyQC8Y1mjqGmUzk7dSxdzE7R3VuuLsbeJpzfkDddv5Um9dHayZQrC",
  "key19": "4WMycWV2LEHfodXnf9Fmp76KcqvzbSo4t8CZPe5cEQiZK11pVRKziPFk3Hkw2scQHe5PzPEUfBFx5uSxsRrmLmqY",
  "key20": "3G9ktNSniGVsugSY1v149h5WKM6t1WgA1g5mg1hC775YBibbpvTio5TGZgdXbJ4aGiSPCNeJNKaVhdA8jFsbVRJj",
  "key21": "57vJdMuBRvCSVfJH5NWCi1ikLAwrRWPdnH6xe5njPcVNS8ipYdjE2Y2TVufpWVB8V418kXcXnYYWhApLb9wZdfmN",
  "key22": "3QjeCNqGYVda3VH5aGZxVgKMP9RFMWcyTedr7uGaqvBDCAL51WewctiKhSDSpjpQiDuezGcgTEAbAtX8scHmpBSU",
  "key23": "5mf3gQKiVx2KkZHPyAywtsLn5NxjADhF3VeHX95Lb7hFKCUXU8Tet5YjMU381ruYZP53J1azsUL5366awbdE2FZX",
  "key24": "2MEioEuXarh32sxg5ATqmfuht4genjmdKd6PLUVbQC4jBcnANcPHe7V3hPQi2Vdt65Cnu89PFhda54Fq63icU1ZA",
  "key25": "2fneWs3JrdikUumRxNLqPuZe6TcvJS3DUQbxSm3tHcaXhJ3nxEY6wra56JKxFtUt6AqPf84sxbWkRH7aiHXtsXyy",
  "key26": "63X9srcraDhE9sZ7ApjdUgj4sYcRw34uMckhsgGqweasi1N5xgiFXEcpWTuCgvv7uairLmzjXTu65CZLi8AGCw5f",
  "key27": "5CXJdV3UXiy8pDv5GPwzNuC5R893kcGkMTHBTypBscwWz5m8zJMDjKwrPCXM6pjH2zkjpMJ4TNuRdu8efismGA1F",
  "key28": "5aNvvAgJeyrCMo41vU6hUhQp9Je9mBUDw18XY9e92DYt2NShcGe4avRnRTcrzdNFDFsryiYwS9RH2BwNxUFd7GQb",
  "key29": "5aKk66WYarCS6uGnERxnWieEzGmt2P27EHQtU1JddLTb1FWrc11t3H2GKLGst9cV1PevqK5Eu6TgiWNrcMVKZqxT",
  "key30": "iihCbzWmdy69G8cVXG6g8HmeKHSyCCcfhDq7mzr9zAEuUTAXxfWzCRZgDUNXtb3T42y1viJnyXjDqTczdYrh824",
  "key31": "2nhLBpnraPjqkZBKrWTQ9Tym9PTyQCCZT6SPk9AB56etfsp7Gh1K2TZ438DGmhAfWS8DHU9Fr3tdcTnHkkuvyh6h",
  "key32": "4aJEzqLuaAA5w6FTnqcbC9fkmhzVwF3q93YAyj1ZwjQjbxhfF6QkMHmW8cdBMN4tMujCNpVHjZZKRbji6fsM2F5F",
  "key33": "3tvibjMi92eZY9xKG1FNTxLzEpxqpo3D9yJ7VnNiA1BLoSqDtGPCoYpJH5kBS5o6pkKS5bkzy4VqCvzjRBowpgmm",
  "key34": "5pwj3KoKpTTiEPotxS8Rort6mnn7hu2umbVnFNxfUSTw4zh5Vpif1YjvRgY5EFvFg99Q7ZpLeQadxGMrZ4U6qYWd"
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
