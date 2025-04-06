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
    "HAB7cWefteN7xRgqLsJzJkC9TruaP8FLbw3WxucZCNxEmTgfy2RSEfSJJ3VA2dq1rkMuAyh41akhxKUPjeaTaKi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ndGWhP7v22himDJn4aJUSaxPqhKDNfu4hmfQEX2w7DVYtGns6X5xVGeHWsLVi1WXCVJqnrjwdEECvTWhVSrsajL",
  "key1": "5D9a8EotXmyi9fTguVx49o9GDGuiSJja7KnvxwqCRacyTrDfi7ivV8nAC21Lr8v8pWvoPD11wfHeRdT2pU8BC18w",
  "key2": "3CvSnCpk2F6zejQCzUAJwcaQFT82nnKZc5TV2wYNV8NnUrNPVZptKHd1KrpGNiSbhb1n5ZHoKGyA9KijVQUp19Lj",
  "key3": "3jRLNNgYFDrt8LXvR8ZE7bxtPkHQZdev9JftT7jA1jn7P2czbowGpFKkqtNtiXRUbnUhJfx9kQCkum5e4YqjD6ud",
  "key4": "2g589snesqBvC95ey34L7bxHQZbWZpZbzpSitw47PA84ihrXXLw7r7D93AzNhNePnyPmHuXWQZDA7hJxzRSsCMF",
  "key5": "4VyJbs472uS6VYNc74iSwHhDFnsVBmvkpcaH6HA5otTJUdTExLpZEgDDMatWoD9PQmaWfNGZP6fb3VM3RPLEw9SS",
  "key6": "67MVuKzZ7rK8gAw1PAuiwG2TJSWWsvrXXnEhMf9FW4ZGzMqd5bkvovR86V1YeSKAhk2DEhykdwUXSeyih6hQzvSm",
  "key7": "cW3HbxCY1TNqfGeUvS3gDfNsTyhSGTNk4S1TjMQZdiLudTqFj1xxth1smQV5yGxpzt1L5LCXGSQvVLway2xZcxj",
  "key8": "24NHic9vFtBGgprpVqRDBcbTVwS59ERNKgGC3V8WuiyfCPsbK6qMgdbvjz54t4FiSH8NsvtE2q8uES4dHC8vRKbT",
  "key9": "MyygnNMdc97wnQgHHBfT212CVHuGrSVEzE2N6mh2iwMqkKvTNhdtPNcy4rtvr41pCwaWadv1sVnf5pHErtfSbCt",
  "key10": "329mjobyfFq8nbvK3rH3bw3EzSEsLAsN794iYH7SFLenYM8t9WdBMVS9TiGKPmVQC5iXgxPsi3Ec4BAxchasghbN",
  "key11": "4hKonF87vNMtj81H63uvpavbyZHpibMRMKVAvpcrzAKrUvVow6aSEBeT75uHgyLHzk7LNWqYJ68VyRy5PyDBsFbj",
  "key12": "s48EHiVGW7wqLTPhR612eXZGJ7YSWf4LjTiQJhW6B9DLqFrJUh11qp7Pm1UZ5NHB2HLXnCXK78reyuGiaSS7d3G",
  "key13": "2zoDh5MfGZKCSXsvrZQw9769EmFq2BPtCgSacmRWuz9khZYzbWdpmKDUKJ69EKFimMksQ9VCsZ1QbZLNSU269SJL",
  "key14": "5wehw4D5Pfs9t4Kx3kAHuHeDdj1LYZMCb5ai29DWkhtxoaiV37LX3Yncuth6qhqPSxskKcPDHQ25vKBtZ1mgaFAz",
  "key15": "39Sp5dAfH8BKRCvPFD2t8LrGKZLhCC1j15kNTbDuqjwwp4Y9TcAjxybWNekEcscTWdHgyN8BW4qHQ7itFbpTmEue",
  "key16": "3yTio4iupHoeqRaTmwN6SyhYceXMTyMcR7UW9FM977YWokCJKDeEuZbht4hKCaAKCB8SVHs6Sjxdvc5amaZNzvLW",
  "key17": "3eLX83wGSzVp4zmbRCfhWPdrxGG1V3JVQGn8A2gYn8nY1ea5kQBPbEPLn61zinRadL53rrP4qrerns4jqie3KAGz",
  "key18": "3tJf4K7RrAPsugYuHwz3EMLZunBBB3yqL1i7Ek4n7kmFJ3E27cFRcT19aJFZoAHNTcUw1LLdQ6fca96ikARt3EWs",
  "key19": "37ZQn1RJ7WN3VV6kjJ2zNSBFP6S2zp8bFouCZ7h6s9o3VSoXhcnQzvbwUXDPPr56vydZ4Ue8oEtQWTBCnfCGXXFp",
  "key20": "3YDuHoxcStoC8e2iZEVXQ7mjkodK5cVyxmKycvEgvpPuMnnbG4GrpjzKzogmykGBZAau3NCaGZrXN2k4kpXHXQq4",
  "key21": "5G4b4gcg3KyKxjk2c2Dcn6eKNdUgk3yrSanyoAi4z5nabP2oWXSiPscFF2cv2N55R4XBKSwMR9uRGpB22RfofQ4P",
  "key22": "38syjG9kyC6TCEYC5Ux2Ss4bfnPJr9RWHCDX9RX7zeJu5y57QPyELdkjjwZh7bYbSGa87wdZsC6E8Uo1SZ5DXGg3",
  "key23": "29PM9Gr9wjWtiY3UWQk5UWSgZRySHAkK9CsZpiz9GxT5WqZi4Sqt6hXnL9HPZcFuaMkwjSoCuuo3rdQnNj69hJvF",
  "key24": "JambK9NLGZegHufsTdcbuAsVNJanNqcq82NZDX9uWMSFZnpDUYLHRGSwauiyudwm3NDr47pY9XwikaToN1WN1vc",
  "key25": "2FJ6kmKbof7QgfHdsXvHNpTkEQJCHApxskyvqfSkzZH1urCA1E6PMQ73AdUt9oAy87uWwWic2X1VuWxkHJr14KhU",
  "key26": "299ArXjpZ47wN5YNp6tmRSaWLdvKjby1Htq2tuGddR2Q4UwkcUH5PhMWB1iRdch7f2TSKs6rckYf8LBHinjnDLPD",
  "key27": "58mx9JvouXbFREawXKFsFvNGqf6pzbyy4sAEBcGWmdKNLxZuJMbZ2bN3kYAbd52ez24eKbc3yntAZyz1chFSY9Kk"
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
