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
    "678gxpGmMgDSzYcCgD39VChLzfoD12QmvkjKjxKR7dKV2eRSTA6XK5rAqJL8Zsp5jgqgo6e5NgMBwhinLSo6U3FW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48GySmG4JHCiMpUbBN2jcDJrQPnhD2Lxpnh8JsMzM3otQZH71i3jgyLascqjKL8uLYivML16j7fDKsCx2CRxJjyt",
  "key1": "4WQhRb5vSuJe826Jg6tqYQDJ4HULXK1GDDBnFLG2BAw6tScpybTVYayWtyGnoECHpdsJ89KDGn7QqoN3ytQqY3LB",
  "key2": "4vnJjHxjYFuXAsgDeMiEgeaG93YWW4CDBqu7Z3Ft69cwToBhHbx9LAJPgBeLJZFAR95RMWYfDjPSZyhynXEjBGZm",
  "key3": "4xtWJ12LJ92pJwyppk9SaYQNJLjrh5yNQHp1v8v7ZgbWPvSiy5zA6HyNiq129rcv4baEZkLVdXF9ygpHtxa8M3Y1",
  "key4": "3SMXn1Hfm8bEFgYzsBLpWj3Ed1pH6BsRZLEp8g7xDox4XP7q1JdrRHtmSgerD65UZpydBKtktTxzqYJk51eiceFT",
  "key5": "FfFBqCjdCFqRBvxjeFhtNWkCzCQGNEcQZccjZrdM5cGSs5Fvs2haqbj9SZhR8V59qQEzBoDb5AUXxBGa7S4vouH",
  "key6": "4qNjSudQEi3fLXZjyscnUDDy6H1jDM3mPtxWecBGw2ML6mYmraWB1icTfCuVfz4zCtsarJn6UbZLLbgC2PaMvcru",
  "key7": "4LtmoD2hQMQgSaHrHzsAsTF9GTvRXDL7VijpvowxaM4SvknmCa8VTxdnFURJQpBSVuP2j1MNvR6MYamxa9Qb7Me6",
  "key8": "n5mTFA8F85nW1by461WPWMnxB9PQoX85N479fzBYBHGN5FXNJPQpftXzvGDsUnA5zK8nbpCEA7N5ntXQMQHQpwA",
  "key9": "5RSgnL635vQqC3MS6kRkZaZ99MKgT91qxURH2YpRm1wdmQaeL48ApSsnmH2kHP3T3F9fcVfHQ5jh4zS9CZ7J2G9n",
  "key10": "5ZPZigw3z5DdnqDPbh1CuWEGHkp2gB6L7EFRCrCYhUFRw1bnhhyCiAq84cTXCZ33H5pP95kzHHsYAXxCKvWcPocS",
  "key11": "3KjdLKw6PRTHyhVnwDezPcueKyM6DXRZnBBV2CmovuXfa4Gi3VAUdvmfyrqSAiTqXXZhz8PKyryzVr1AsymnmUcs",
  "key12": "3NGT8gHJbNnhy8vQN2E2PJBefE2UbKJgQbTtMZBeGVLGm82CD7KwbNnQKhzE5gz17ktQ9iGJWwdx6TcQW1bv3Qbu",
  "key13": "g5d3hH3vNVLy1WxC24NBrMf2nPrzExMa8qFrtqz4MCY1SdUjVKemNUHJVFFEr9HgaAETBe7criS6EPwerrbHLtC",
  "key14": "AFHHmiAT6YuFAS2iFrDNbJNwqCBU6AZ1ZSwu2MUAmn1Lu4WWEnHeLrSQiGj2SnWT3j3vLs7cCVnz9zG59L15Qsi",
  "key15": "3nxa7dckcEsoocfttD2DKgaezEie53Gk6dEeYLr13297ATTbnFNMjpdvmGKn2u7DhSfkwTfKoUwE4dzLwZhG1XZS",
  "key16": "4subR8zQyEqDf7kd9Gof8tRzYL72xceJKmhNFhg3xYaaMGzZCP77fnLf2vai1MK8o9PaZgFz2yGVar3zLoLvn2bR",
  "key17": "3rFK99sfjkgoDdjF5vMmJ7uf8ndZQpJVqCDAX8CskScLAfHMSEBuhhBgVf5cpX7Uqvc32nHmvtjiQi1Gry3zxUr4",
  "key18": "2PpKZuVrGUs5bGd75URwLfDDSn7BB64Pr7zUEcYLxyVH4XVEdEAoyoMKxAoWW2pNm9wq7KtRFAoYvQx7jVFXfi3y",
  "key19": "55CXzUcsxhncamdundNzJNtgJSRfd2WRZJEPyk6N2PrDUQjBdgMi1wQcRUDpVPmewatTLPRzMquBXqQfWbHMYroT",
  "key20": "97gmF7cxHeV18QU8KdmS5X1UmidoY1wWttAjfNTKPwe6vvGgHBxNVAnBTUMnQae1tbTw1om2vXcAT1qgu5mQR7C",
  "key21": "2aRuRAMK8uea6KXFra6Se7XXSvPQEJx2qC1WnhViRMpAdJkZUQ2FQUMkjDaRfmrhLonymbGaHFh775zA54Fnbqzx",
  "key22": "3i2ddTtzVUjV13EVTaUYoY3vSDRxhd1oaNjRAa39Nk5hQ6AwirseivBdiFkqAx8bQD6Vwc3zTLv7GZveZbYokDhy",
  "key23": "j7ZEsDhkc8FawzzCgXEQa1GCQpgXis2cQHfZQh2tk3b93UfpojuMANiVwSLg13kBCuvNCv916TZFxRMoS2S4jE5",
  "key24": "5fY7Db4Y5YCBAvYKKQZDKUympxLhwDZTruDnJiMojNEdqABZpcFh4yNCHqxamgZ8HuRZGAx6BsBE68cTpsnNYmt3",
  "key25": "5yJq6EcTHDSo4yBkmuBhaQfSd82pZAfFJLD1kmCMvtLExbxoaf6C9Y8KgG7Y33SxayB2wqA3GGH4htfxZSXaxYyg",
  "key26": "3Wmb4SX3Uj9Cta2c3mfum6i3s97KiG2pf62XJC1KpN61Cp75EtPbWyzPonHvymuQQQHiMnn6aTroDLuidoEfBCs3",
  "key27": "4Tm3gDafLfVaQMceq6Enz9hpwkqWvfGM4ey297BDMQLrzGKAm5rsxZyyW99LCxgMVhdkAAYeUykDaVBRME5phXoJ",
  "key28": "4ekDrLv66Bu1SYJnzHwy7xrw8rjUQoEPXmcnLDVHXLeiisfse4HShsjtdWXawhc5AeHrMXb9X25487YPawx4brdt",
  "key29": "32uDkrF9bA5CxFVj3cdNSNR4BJutsKCesnn5BWnyEwgThxrcWqbLVUWvzHFDbPrrkgUeHL6JzjpM8PHZqpikT3PZ",
  "key30": "5tMLgeFz6pVG8nmDj2JG8aD7cSchyiivWas4A5N8EV6PY3vWDWJ3XEbsj4QE34Y2SXpoNT1NYzhpDyUSj9UaCYeV",
  "key31": "sWv72gzUH2PFYoYC3qvWEL6eawFZHihUwmz9D9oRRPnUX1rgpTvupvH6XufhYdYeCq295MwjbPBKCEimfBzk4YW",
  "key32": "Fz5Eyuq63qYzHgycocywXyAnB59VqkdVUTcnH1dxMRBPkcBpQ3p4GwqnzTpi6TkuEMiRu7BBx5ZqLFtLqdGpWoZ",
  "key33": "3pDyhMLNFpb1K9r1Fg5hNLG8kkwzZbnkZGDZoNcMN4WB9Kc4zmHLrASW4eibAUm2fAXuaAjm69tj1Af6vSejAA88",
  "key34": "mmkBHbndN1zwwyvhkR5LEcdgq9YiZAvQoBSJE5PfRP26CFd6B5E68Ao348KJNsnwZK3bTXKUcDDYmKuExjyrTS4",
  "key35": "2BsWTDLDuCrmsB7KRiZR43h5q14uhVQNfibmPAGGzB737z3Qn3tzmNHcyX2gdDLWyt4LDgSBPwA7k23ATaHUaxsS",
  "key36": "2W3Sik4KwJtjy6RYtJQnwqUhp7MqEQken1ciaousb9mb5wPCCvV7YTTbt1mTRKMCnf1hHE9foVkGN8D1kYuJQdu4",
  "key37": "25EbhwHJPhZbUghpv6VSicP9abuM2MS1XQ7BrdvgWJDTFv8mhwbHEsuHT2EdqCJbKexBGcTSkQdrWCfBfNqD1McK",
  "key38": "3tZaXXskHpTwxU2FvsFpwL9z4gcvvD6VdBWVRv38febeNKGZSvLGjrGwetvt4LR2VN1RDUFJXPATeX5hQwW6wjx3",
  "key39": "4Wa5us8q1gbyTAn1cSPZ9sYEbsS5tWZdNMDMaaJbAjFpSerDXqPLbYQ1dvxFGxkiB5eBCB3sxBtfdnw9oALGHM5d",
  "key40": "2DrGv5Y6qiorbAuoXtViXfA3SD7rLsRuciw5BKdCQ2sRJtB6G2yoH2Ex59gxwApj2aKzZwgKPxb9gVkH44pE4r7f",
  "key41": "4bJTZUuUacEXuM5ESGejZbT4LDLZpdahfwkVxtiApodMRp9UsgWMstRVnzX35DHK1Ady58118beCGzbGUBJJBeqL"
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
