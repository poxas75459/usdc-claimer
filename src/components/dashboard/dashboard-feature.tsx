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
    "58KwMwVqoP5t751A4n1TUPuydmMs64GquS6MZnPcLyLAB5CQ4LmaUM67ETrFbEkAvacY7Mnj2w2ZpARyzpLgP7L7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fTfT4r7BxktfS6xKa9yLvd1GGSRd5pBaSvmm9YJNmyDdXt26j53WxPp5sjkwNNxXyUb4QviM33jTrMAEsnUffEK",
  "key1": "UfZpZMAgQnTdjdNAbPL9E4QVipDPJWtTqEd3H9mGnbgb2bjNEPNHGBV4FZ9pHdrBEkwwbq4sYkVvQRucUQiiYo8",
  "key2": "4ncY7XGyjByTWxPDdgVoQzzDrH6ukxXeqCm9qBvU2taVkrnUkMCVJDoHmiTrYEDyQr6Qmr639Epk5QJ2i1hPzdU6",
  "key3": "QmpL5fED2nTSJ7FGdLrDUgfapMYDqUS581XsSZxBezNEPN746nVP9urcmcLpUTixYjj79ppXx6TEVLLubqZULP2",
  "key4": "51ZjBwbgFYjvDrc5GvEfQMpJX8m8vepg4U1T2swJDZBfxAgJjLX1QrD4rFJxja5s7AfFPEC3mq7o8e8W1GfvTpmv",
  "key5": "5jjjYH9uFg3My5k3AvyYyV4C74UsUr53Vt43hNgPyJBPiPdPw92aYT4gnFq8N7V5BG1XtcJYRNywxtuiiAWhTPrW",
  "key6": "4c4gi1MZPx2pk5bBfHCkMUydPcduNUdGB833os7PBRPwYHEgvSAJ32NABmRHMc4DzGqmd2pBrXrWppAUtk69E1m5",
  "key7": "5YwFhqVJod3aaZ1LA9XUdpgzQR6zkno8ECHLds4ccyE71tBjxeGxBpnxfvPaRoEj3SzQr3jBXitUVmmcCBHxdyYc",
  "key8": "2dYoY5E1ddZpCSXcqSR9jjjkTDL3zojxL1MbBfp5PRkDXRcorBQ6mGT25aUgMCbJmsKizyDqFG5U3KuU12VRTu9U",
  "key9": "67fBfCm6BWUBzJ9J2VvsDzjhaCqj6EWGHAsCGw63Kzk6z3uFtmxXMS5YJGML6FKYyTDooxDQJUdh2voQ22f3rQXp",
  "key10": "5skWWwYRrkGU3GXQANTnvaag2kgiKay3T9ogo9sGfsNAAKMnmAuAD5WxvSYHyiQvfVr8GG3B89pGkfdTc72T6LsE",
  "key11": "2xo9gMpa1dvCmbcYtmiwhpm2ru7DNLsotwVZ8Y224DwBshpkyXS8nip2Nqh3tfTtRLoUrbeGRcLu7fTdfT48jk7u",
  "key12": "SiHxwiUbShu8D9U6QWZVGk9b5EJV72GBVLAGShMCeBzVu1KrTVX3JZHtntYV21wZ4TPwBePYL5Hy2rDzJMmy2bx",
  "key13": "5AjY6Jgmk7tt6Fi2D769EAxAGEWyYxRTbt9GqdsxWSYDqrJ5qzHM9vFsJYqPfLtReZEEp4EZSX7BoeG3x4xaPnEP",
  "key14": "4Btnt3sCEtuNVnFjdKJJwQxZT4ifDnTx5srdBfPQifT72uJ1FSuaj8sdMYAtaNwqBybnEJP61pJ1seABc5jMe49s",
  "key15": "3jB6nc7jxRc3LaiJVabz3irDdN8cifPUgNvrZ24kuWpWjUocipnWCsM1RvWw7xuXBQf2DmT3fy9zBEHFo2EVrWPS",
  "key16": "37Bj2BfJsS9AmYfLbcGW4dcgQU9vord897dMygT1A9iFDwBhN4biM8vtS92wK6aDcfManCzisBFrfD9PYymp7YVM",
  "key17": "5RcZyuevBFetsU9UZA35M1p537besJaNkRdvKcygWi1zXge1swyfmrAz5JJG5HyCjC1MAXhYWXveemi3iMgUjRnB",
  "key18": "59Y8azAoFYtK9w3ewJvb75JF7iCHrGMgamsP9myns6eyKRn6PQGYi3M2q67S6BYEEUqngzjpVeSmFa4orJrfZrYS",
  "key19": "u4o2UA4Y7mCcgTTExVF1kRhU4o4GRqjLgLaRDqkBE2u3KkimzQvpB5Rx9ytAde5rTMDuoFX9v5VA4kUCZXuDXt7",
  "key20": "KrYV1AuCwQ1oGjfK5fzxW7Bppp5jeg2TyKPpVViaDpCAMZic4cXvSQiCq32XwEhzgYUXeQR1WbmkxshyBmVDCMG",
  "key21": "2DDo2ZYnZ375KCWEzP4e4AxvePyiXb5WPk18Mjsunq23C9G4hGUrQpGDCeqhXb1SooLc3wVg2Fj5LZ3DZppf7f2A",
  "key22": "3VcA1CqGbnqCfQR4N9XDWuHChtHigjXumqfBQZyy88fuKYgsYpwb4Px8oLBiqbrnbLe1MDhkQFTzkrDi5RFizCYZ",
  "key23": "5c9Pd99ynMnKJNnMsr4XPZQKKf8ZEgZw1fk28aCW8nv82ncYqgzXvEHY2Q1dG13jTRqeaMWSHEJFU5aHJoXQ3npt",
  "key24": "2rNcN33TrvXqLWkumprsrHuWipGpJSgxEcVbUja2Q5e7c2vYyDUwqfeTrQXSsX1hPgwJYZkg6dBZeohdXbv41bh7",
  "key25": "4EknXrTLaDKozsoCESRyhUvYQbmodRgk4EkLbqktSjMY8257APnJ5G9R9h2zzRmTe8GY7ktfwSEMV3Mh74CkY7UG",
  "key26": "3UvHDM2Lo7Cp964eR9VEWJKVajPGhsthzUMGTCmCtCGvzwuuDB9PFz7ZiMTfWpHrFCUvindFedz76VdyGw8ZnUV1",
  "key27": "53s7tJeqqZdYGejsj8aQtjXrxcEGh4TjS3CFLQn5KQgL5novsyxsc7g5asUHWziRWyBqjBnt2q6zj3Wo5hK1aFhA",
  "key28": "4zth2b83D1RZk9UzxXsVBhcKEfR87zi6geB9NoEYcwDEKfFaKmTuGhsgHnLgFrzZs2qHfDVvVBEGiRz1aYWuLqGt",
  "key29": "fCvrp27U9PtKZRsqJkxKdYPEjcFQfDQUQLR2xdttsQRLhP4tKSC6kNWvbjmyDRQJFDUdSrofqWR43Fob6PLwiRM",
  "key30": "3vv9Q1yN1EGWoCjSahJhTv47HNa7n9yBQT61bthegGCYJDmKkWWWqdRT8DYwbPrBb7ptccV9CPradYqSbtcEsfBz",
  "key31": "56Sano3EdHf6pDueiE7DEBvf74vPpfAsBsMwu4oFP1wGsDZ3MosR8hU3a3yg53oqmKnNyvzfqjzZfNrrbYBeCYf8",
  "key32": "3gdfKMHEmmV5U35Dfz9L1aBPiA9emczypjBuBnMWDhBVZ2qCSDgqnWBzcMqhjdbGc228cuXsR4fumyVBpFKHKe96",
  "key33": "3rRGha11LDnyT4ihwW9ohMV76L6Zvsa8hYLeH6nLM7oDdDobmcnyM6TKwt6wskCh8QDEgMXpuBGp4vPLnttbAnU",
  "key34": "Z5e3CWCZs3BC6VU8RgDiniySaCbneUrdiRuhyPoRfbKNniEyYGQB8Tjeor6h6aogN9rLVy4WjoUVM4DBRdb16in",
  "key35": "5WwRNtdK5CwiBNbJYRKEVH33gTUSuxAkicc67ELmywBrYPvYEN4ySXFCDf2ZGTVGR17cum3pEn49gbZiQBMTRLy"
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
