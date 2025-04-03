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
    "n6t1SG3v18yk1KrM1EJga7dmd1yRxYL5EDMAG6FaCxExg4bmjcNnhvaxU4dvr6xxFK3QfzUUft6wArEzgmTJmgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dCTsq4grC1dntT2vL7zMiwE22u3Cc8oyUnLdtrKyHUtvVCrzMXcUgDYPmcT83qDQhtKHEzQxZ21V6GUyfYMtH9n",
  "key1": "47cGYtwQVhXY7Usp5JJVSrDSiW9zxuQX96NZUtATw3BcTD9yzsEJxPy6gbujvqNdUaco9QRjDRyFBKufJh2q9CDa",
  "key2": "5yoHPSFctVbWtRJg6ZBcD12yAnrio4PxvANEy5phDnAJv1mryMGGuAqxzKfJtYrho1yAfNKrpF8Wch6npnwTKsuF",
  "key3": "3YZ673Wt2DyxsiuJZXrDnJsbMWTGRxvozzcxB2AoX3Td1pzwTjQEWbCDHS8UsgZCDt3v9aN99uBt6zThnmZGHgzP",
  "key4": "239mJ8HwNK3KtNgh88kuz9jKDZo2TV3cyCoVWZ1KbQPu8pX5rK2EJnYHbYRmkCv2SZoP4BWhub7K9b2BatzErJNM",
  "key5": "wRfi3P2EUoqYTvnd2cW469nnQJa4xPRAyX1YUsbCEztEoPopyD915XNxBx3qvsqgu4kk3oauPu5hB2c46NdQSZi",
  "key6": "2Kg1V9DSCz6oyjKaYorFcwoNywbKctyr4pNvB6HpVgCB5L4hVEoxpv3X78MUm6DEB2Prem8FrvSL2eLEJgyvtMDo",
  "key7": "65Q6BfooiRKFBFkxKfnx3nfkR1zgfQHuUGWzjd9GyEX8M4fzQBmj19vsPLqbP7dbvYQ3GYXi8w1TLKxngKB5TexY",
  "key8": "66z5DvMQABsJzPQH97gMS4Ydmm4Q5wtqmDsGTLU9JVu1bK1TWQXRRhLwz2n7QzpQZ7ivqXQCpYpCjomzE5ioeT4L",
  "key9": "3zgUD5ioHRxwQucMtp8ZNi8EZ8b2hAyx8xt8mJb95CNpcZspdZn3VZ3pAi8JnrSDruTjQcANjZzhLP5jbjMcyRdw",
  "key10": "5Xj2iocksczoiYZh2VTJ73RWhnpfiHyXg8Vam77BpsU3hJvbSqzZYNQwT4mHatNzF8vB3R5Eh9BBUmK6hP7Wzxag",
  "key11": "2Ts9U86mS53nW9XrarRTxpotiJAqdJa6PFaaKJh1FGeuycgyYbvkETVBWrTP4Z24fibp2x1x2Roxh8PevWaEzKZB",
  "key12": "3kkTEKpeLNLKG8ZTiQgAscu6eyi2rDDaGMcXrc9W9ao1A9Ai9RPuTyip8foQmH7H95M7pFhj1hS4szaUg7niJxxw",
  "key13": "4HFbhqFocrSP35cnSMQcL8vdfQDY8Fs3LcQ11638oQW3oGQ8URC91Tf65TjRUxdSLNJzwQFuBwC6H3Najmz2jb2J",
  "key14": "3Se4DAFTLyPeR5HxSKmmPopzaJxkDoxyc6hQZJ4YYXCZA5DDMxVsfXHDdisEsVN5mynNh4ynmfp62ZUaAkYbMYr5",
  "key15": "5dHstZrNKVBRs1NfbyewV1nDdr1AXYk8owXzKYm913hk7QJb8JrmLM2fPvUdvyJibkRRXoAPrYRHNkt9v5fhDSFj",
  "key16": "48DcD9KNfazfcKN9CfNrcYaYyNdiELbnK7gVJbatUHod6A7XEd9dHKnJmwQDs8ys3qdvbgGmefXGu339XUTBfmEh",
  "key17": "3Z8pQZZBFdN6X1R9XLRiqbHGo8B8syXhjh5xbFVsUX6qtGqjYtpEq22CDgUWtmvzeE1UWRQuQr2iFqQLGDVmv4hs",
  "key18": "5YbawtpmJPyqUBHZmwsadzc74yYhoy8g6pxGKLXBJKqcdRVcG7AYYDYJq3D4PPszFKd5Vd1ygV8fPM1egTeX7ViL",
  "key19": "5ZB22wqDESHFwRgRJS2FpycS7Q8AUYthkfUkKYzFssEeQJCBibSwyVbDpug6FH4T7bi4S3vVmzLWrwAwNW7foLBt",
  "key20": "LVPcTqACrmN6zrHWwb4GmttfKdFGcXHfVCdetE9Dy5kVQjwgxAzCeToBZkTXFV1iQAiH81nDnVzvuAqqJBYCHo2",
  "key21": "62HbPUkTHps6ZWWtWWwQZhCx42pGV9RHapLmU4yP8gNCbU6RqntvERgARnEG4Qa7vHdzEfAB222aoewsuZCcyGt1",
  "key22": "2mwFe6vuPK4UoHxphkBe9i7KBTPg6pTVQCwpPapcyTMSGx1vRaj2t2sFP6fgXCBBDfXRuho5WsxsK2L1e14PT82E",
  "key23": "63BY3xzHxbMiod1rBdFU1fYmpxWgdZRBS2hZvipVkN35XScYpX5Q2mo4CBCXtJsYuHSJbAxaLaYYFp8bD3xPHy56",
  "key24": "424ydKtSiaDm9FJ1cRd5J4bhVMhcPmFd34ebqHCK9i3tMCnBK9tGJjD6btt1NdfRmWnWGeLUsxyUDzfUsbh8zrCt",
  "key25": "4TYRzvTs9dEHYtcEsFXpCNLbWMeBfFZqzcjeADoroWbWp2JHGyKXSLsnKDTqQeGEUBXpmWGaexMJqFWskcRS3LwA",
  "key26": "i5dJyfNH5PtZ81fNgVEPn7h9rEHdXmgtC83gHoQuo2jovG2TUWV23TLAitLadEpZq2DkakumqTryKWzbRGjJqEJ",
  "key27": "4DXHPv48eH3xLzgSKzVv1m826Jn2BszDwaDzDRGDvJ77Xo7DbjdGTcv5qqb2H19x1H5w9cErieQwrjqmtLNAvAhH",
  "key28": "5yi35nfLFRfGyVS8GrNSUfWf91V1wnfEjnQLjFNeY5TDz2ieXTuZmbXgE4ViWYg6h1ifFrvaHo5tCA1Tb3NmRGwY",
  "key29": "cb5zxe9vE2W5RDDWeBnjUyC9jqVoMvfFAzaqUSnzidkryMRf4mxEy2B5DLreSDMz6US25nrEvYEWdz76n1ZH1ia",
  "key30": "2pfaaih9HkHgaE2dNMpGNoeqmXvKgVawZUrW9Bf1A26cDutGFC9uirHXmETWPYZPSmx74Y9epe6R8WcTmaDRsw4p",
  "key31": "QL49847b6gReYjZV4mqVv7zBRaJ4dm2Lr7TyutyMYT6yVwFUezoGA1ozrHfcougPjWTthBGrncvJV7Aqji8hgLb",
  "key32": "48TiuUx3bJTGzEAivZJazqECtNchswCPHwtVoUdmpq7TCzcDkns3oMDh3rK414fpVQZdE2FePdUE3VBD3Ar1FpYx",
  "key33": "5S6jTVh8yJGmx3UgurQLLZMcxBV3te1bxwXuBBYKgcKRWQSfK4q3rR1TCLFUQabjHnUce2bN1zLnFxPt3BMhpF9W",
  "key34": "3WLajbKhmhgWEKPZMzYRE3Ke5F6y4dMM7XCHUC6qQcv8fs3tkTCjfy56ini1Ko8HQ8Qaw8AAJBJKWaehoqzmcBGh",
  "key35": "3vo9nFofsaza2hFspVmQreWbUBPWijfYZRU2bUsANtJFyiFrb8VagVMzDWsr2wCyCgNy586DEVPfomgY3uJEtJPM",
  "key36": "vwRVb3Qmukqr6UHSmaAB3TrKWxQxiVE2xBztijzANAxyRiMkdm5AdvxUVbnDTemkmTMYMTcgezukfj3EtYgbod2",
  "key37": "WdpZSCTxEXKhdz2pqW9KMUwtaHED5Uaor8r79P1p5TFKDzJEm6Phdep6yfKDMq7Efue6rma22SZU1EifYSe2iV7",
  "key38": "5wCa2nGSiVaDZC267Hd71Tq3SL7SSPtk5ZqWqqcidWGcLNaP7818MHwh5LTaHz97wiTGQa2dQdr36NZhZEEe9DAT",
  "key39": "5hmDxXvx1ELwThEKFkqrbuJEDkJC5SQvxkzocBEanjdmb55fxgQcQ6HHVFbkRfuaRtUmmFnpjezjYPaFPoaVZFg4",
  "key40": "5uj9wpiHfivie5hUbaWwNP3td7FDJzTXZPHqL1bFdBWPK3ZTAycCH4ZvnEc65E8udrqrBACNHC3iMdVDPfD3fSkk",
  "key41": "2da2R767jtTnbtxZuRkYZJqUJcZ5LgnynqXRtcoCx8mCnjqbm3Bh7EAYaqWaaVHfvjX22gSzfQAuRUjHhjvaKZs5"
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
