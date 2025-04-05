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
    "4HPAWN1LePNt9B2amhiSgWGxjdp9s4vWmrKmovkLLSzXr5hofJdbgG5ehsRGxY6NB3m4rhQK4Yp2GV5NdVMZG2PC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VYwqN4ZU5FsPhz52J399uYh8ip5mY7mUXNa2S756rSEgNC1JVrnETLtoLEPjYaRLk6gS973C89wz1JUgttbR5Bz",
  "key1": "3UWqdSTPAZTh8UP7c6PCuaQqta2HA6zFqXD9HWxxmwLcSXn3n7NkWW3AxV7VrPmyCHsxSfGvRexi1n8L2J5KSjm7",
  "key2": "2CUr7S2X1vDb8RN8Hd3oqhELKJBQU5A575YWW49BFNfF2jkrpwCT3Vw2QSvENw8FC6JvvwjQ4xwPEpZPkXmui7no",
  "key3": "UE6Vc8KthFXjSo9rRTbBfuLapbxhF8cSELKCcN27yG6PgraSmSLt1dRosxeJooac9F8CYEXw2xyTDScDh8LTkNw",
  "key4": "4qJmiRyRyxfrLPK9dNAX2efMpA8QimCxFtjMyPYAq2Y3Lc2as5e2Mg5Z8iScH4dV4vGPKgohstqYXkn6cBfUdw61",
  "key5": "2p3rk8agP1nA97e1we6AWWcuoK9D1YEpakGQSQsqT4UYaRSanxcQVyNqc8FKSYiyUmSBRViRp4XGGvCS6TBzzEt7",
  "key6": "5V9x3DqKCsTqdLEaA1dFHmYAQZshNUgyJPSXerHQFWyPdsULrAexqBdo28MAJTuPsaK71pA3E6FbLNAQUSSBY9jA",
  "key7": "24TkYosDNhWbjk5cQ4pU9gbQGQhqZH7HPePqVK85X3UcQdhqzB5X7wXkALTQzdrgqTAkt2eMHiHe9hFrEuNz9DiE",
  "key8": "5qdkQzuHB9877HqvqJY7GQRbmgBsjjHbdkyGkkebT6gxLx8eJ6nL3qGztFANiNT4JqnuLWbXjXqAZk2uXiEA6TcS",
  "key9": "iXWr6vEp2W8opBxdho1p9oaTZDK7WY3QNAT2P2Z7SGvCmA68f1bvEMjWY58jCka8M7LaqCLRAhn5rbnPneQBvFq",
  "key10": "2dd5eBuMePcPqkGJ7rmgtnsRt9rKjACSfFwhNn9SgcLn1nJ174ny5J1icQwp1GZcSmoRq6woNUJ7PYLMXHYRFYye",
  "key11": "35tTCetkqXyVyHFXBfXWCidF3tDvBnuW33fRsW4h9xPFWUeG3vrin6Kcfz3eVnZnUz3xr2EQg1RSCYcxu2o9ZijG",
  "key12": "5u6vdkeerQEuLFfFaharfBeeB73zL1LTTfMTaCtkhndCrk7NUG4ed5368bf1MKoDmD8GRxh5WEbKPvx9zX18WDQX",
  "key13": "2gTQZba35topoFXmYAVYNXZBvsRhRGM6dZTRPKZ4b5th9EeTvQSkfa4Pu9owbQXswK2BiEkQVY6Ja49XkYVXbNTb",
  "key14": "4pxoTrPTWC9xSHUszL8EbzobRyd78J9CLmr9G77pPEeyRYFPYy2jg9WoHPVHvCsMG57HbDK2yhBBwkh846xwECY8",
  "key15": "49cmF7Td6B8vTDGDRQVZubFgHX9dVsQ6UVnaufsH1ibY4rEoBzUt2p9ZRMy2nHEd262ELC1VGXi6nC2y6A2YB3Qi",
  "key16": "5RxLCfKD4doXSrqvW2AHK1MGwJ641dfjuFAivwB7EiHnKG5SbYZiwp27ueZWkWdVS9YnnSc9XcNdkBnBTCw9xGsx",
  "key17": "5VhPNq89QNL5eFBWr9jCXYc3D8jt7oN97ArwaQxxtvztkZcQuCDKoMC4g4FMcUbP3Pc7cbwcUkh7wMHoMefYrCwt",
  "key18": "2xyM1bSo7c3CFes1xeE9rKRnSVaYizqVbTTrDfmzSY4bAS5bk6hC7m3DqKvUPL8JHqS2Cj8ACrfQLkD5NuHRdseW",
  "key19": "5ETjH5d7t5S65aBYhkRfK2P1GRX3FT7Q98Wh6XtihndaNHS3U95bAyrjm6H54p1jH2ZuCNdCPmmSx5ppQPBLHYwX",
  "key20": "2nhxU3wcBUsDj8syztAGBv8CVJR4MKtkQa24793j5A3V8amdivTJUER87A35RbRr2HSDWfGB8dG21VhUzVcdnve4",
  "key21": "Am598Hu7CNAzhjUTMUKYcpVo6CNBqjwqj7bpv9uEsFdTJELMkwvpXLfQ383fBjyGL3yvmu5CKBJvykRJmFCxQW6",
  "key22": "nqhCs986CBfTeT8eZyxkvDDwR245oLU1xvJHCYSpZsojSGqfy8Uqr1PHDrn7nui549Qp44czZtiRANwZ72NUNK3",
  "key23": "5S4vGKyiAG6eQRmCNtYxPzaTPNanq3XQDCY1VGa5wXZTC2aQX5QyxUzx37CEu4yU455LwCbMNrVjGZf2kSvZ5tKV",
  "key24": "3iEvkZSS9C9EG3GSYFSUL9g73FRcJTDkAVXQVNNDAFQSiynMzkLsD5B9V2TaGP4spL33ws5ijXBQxnMGxh13mSWX",
  "key25": "44cFB1Ui5qDoyDhmEU8pJ63JXDu8ZJyRSMGJyjssWHQ6c8uq1MYPZ5rfHy9qah8nwyiQb84StmsmRfsrUa2US4nT"
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
