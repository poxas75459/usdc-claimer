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
    "4YhEGRdSsXWrqyAUjJRkc1ka7D35V5Fwp8rjyrn7Z34eHAaVvz5R6Yop1PoQGFwa11zdjUZA5efLFzVusJLbMbmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zane1m5iacuA79iEL73Ji2AbKWUSyqPWZtMf8uXe7YbjbCZSwBLC2Qs6pccHDB2fsLVfqME4CSHri2wqdULHqHi",
  "key1": "fTwjwHbapitSpdkvugpTMW2ttLna75yU1H6UNMC7LGsPFjj1XkjLeFmVDN7fh9ncff3oP2jRUdjqAfpWGDYqnTS",
  "key2": "qpSnTfRVYmrC9QPKPEKxuY8EQYGN5bRbPAkzvDCMmFSNM779QgQttZ9QvoB7b9vXYbSqC3Qpw9hfBaotTUPfVD4",
  "key3": "4aLEYEuDT69fPirgzSSMr59zzWhVWywVgXjtU5XJZrApKBUk2tVpbiDpCP69i4pHsp2wXEMP1rsoVGuS48QUasTR",
  "key4": "4crXDhjaG2PZWj4b6o3DrzKch5fDEA3yPDjPQKjf79c8vje3TVT1Tx3H3zcaKJLV3yjw7nbGpgJ1BzB4oahtocRc",
  "key5": "5fJNa3zw6Kgp4ppaMpiLGzhqXYWZMzXxbzfRYyZK7yHSN88JZZZWEehgBteU1iYT1LnET92jMy5QsKSjvQA3TQ6B",
  "key6": "3BS6tKxGFhozodSudiUinRpMGTKvSB4sTkN8e37daiYHqQuzijNM6cgsoYQc9KRtsDz4rHnhVfsmrV1MwzR41CJ4",
  "key7": "2td3cGaAXRqSQwk6Y7kjpMBqt6NyrL9n94CxHNzH9ChNpcEfvFxRfCGtC282nWPQbggS6aoShrTnKkTqVYL13MjH",
  "key8": "2raRq9AbWMY8zSMqCEzGLQ9c96YJmKFt2ifEeMG4VWqeD5TDcqkLJ2oEVG6gYaeRMNF23kKNMvJc2WnbzUEHxgew",
  "key9": "2ark1qtZtfYEDxBmD9XHXmDAffjtzTPXUw2gDVW4Fb5iexXFghtzzz19QWqA5e6PW8t2bZW7cGT3g8o7dS2SMzJg",
  "key10": "39S95fiti6jjjRKGb8PVwdUCqTVy37Ezoizo41ZihmSdTncFrD9qsHdSiPYoSw7paPV3mr5jHvtYsXCRFJ9WTUpL",
  "key11": "3punMwgLihgfVYkomHKuJE6j9QQYfwMeWbBnbLXKWEDL4TvNg8py8PWrNtSpq7UxR1g8fp8jZHWJEF8JS5DTVY2C",
  "key12": "65byoLSCUGYGGJdfWHHhRxFU6659wnX9D3asznamgLjJDFz5PYv2w3JNGUiNxpveaMoF8uJAVA63apX6xrezE2KV",
  "key13": "3SeETRKmSrAdcsmZVS2Ht8qqE8egNyNCHn1PSmshd9fNA3g1FevV7ivG1rJTDXJZ1zvtmSa3CmanyKwRX2dDHNSF",
  "key14": "5bNuSCZt7sJKhqFS48PVQtiMhdmYsu32a1gjiwvb9sLVuGyGLU1Fdb4aER6jc5bLYSxEdRGcdu4sEYhraB2r1uSo",
  "key15": "5nLtXma9BNysXqmG9WdgwBofMHEZxgwhEMvxizhNjXMCFE3NYA7WvcP1gXwPtD1AAjiqkoQhL5FhYMYiGQ9oDVcC",
  "key16": "LymGFYWeQmHwHcA7BdLAr3FEJo1oPuHztfiNJJVMh6XqA8CGuSPQXD8fLFsw8Xy5bZMA2om5HnpCZBRrCQbT1P2",
  "key17": "3BwKG9GNvsSbccS5evp9vEsbUuWL5q3RAwaMvshsL1hfHbZ5BKQfWaABsXQ5sfiPZAsRgzfmAdtpzep2vZ479eGF",
  "key18": "4a7Qiqzpy9Gw6i9LQQ3y85V8gm6A4exhdN1T6xMhY94NsMWVdZ2CiKGYpeKyvEnASvC3HJZ1V8USibqBmEV6rWUB",
  "key19": "3CmE1AixS2wuxf6n4G6tq3BRyhoYxQ8PXs9PypgDbMuPnHvwgCLa8ZKAY9YiJXiRvu4zBYpUqQWjprZiR4XAuPDA",
  "key20": "3CjQ8rmcyhor4YuWSCv6BZEXC5MXyhMGeLNJzSX9jKDY9rmbZatCWsBQun9HY38qpTjFxkwSJqXyCxssdd34mEfQ",
  "key21": "3AVM8icP8hjPVg6wGKi8Z9GdQRbuhbaZbH7ucwkFN3xL6RUJ3acUjukiFJE8Ef8KN5N6QXuLJ8TeUMcpy6vuzUyR",
  "key22": "3sqW96v9ioh5aB1Cy8yymiNR4a8DzDgoSVxzhMt4z8nvkVu6xwEs149HN7g3wTwBTfry89An4xzCJrW9fP9HZswH",
  "key23": "5SAdsaEkQfjm4NuhsWGFBuBt7JtfJHEjFD8J2RNhGMKaDX9EoRmna8g2fy5w2WknN77TAjfQmH1bQkPXQDuFQmLd",
  "key24": "2RKrCsVmCrbkhbZqopm2dS5tzX89sjV1MaS6u88zwYVg95yXuvv4tTiNL779EtukDzhX83YfqNNsczx3zoNh5SYT",
  "key25": "PFzRP9h4FuNcjfCZUd5aSovAy2Rshy5Ff6cw8ePJuiamK8Nk6gxT9XvuFq4Fby8GqzCkmepqWq9Ek6MKxiU52ih",
  "key26": "3MY6rJqYFLEXdB8zH17kW3SgaG74KqAGsrYsKRezNz6YsLTqDE685cc7zz4Abrpb1CAfxSCFdh4TrqT3DQm3F3gN",
  "key27": "2PoiyqaBZ55KjJ53nabpywST5ZCsyFJrNX9yv9t23CzfSSsvMpdEkrhfJNANztAQo7B5duodWsWRSwWgPGuYpVDZ",
  "key28": "4RxUykdc2Zx8QdquLKJwXwixC6fpiz4mbz3EpXV1kndon43VeZLfBBWLPyiwgHA1CH81jSL6n88cMcACoLbxrB1Y",
  "key29": "5GCR1kYqGkPLNrsSdXfNiZGvG6BXB3euXrBbazqgWpajoF7nrCucRy3CcPLx256Jr5Hmzt5eBSepiCggB9ChEkkP",
  "key30": "4uqzPKvkK78Ldu4muEWBX9iX9dziXG9qtVp6LJmQHpPLifV3AJAeZ9KsHdMwhfrqia5tBCbrsk3AL88Np5FxQRis",
  "key31": "4SPmGTg8PGs4sWB8BcF3KDCDHSihhdXEGsSF3twd91diHUe3vsGp24EG5WDDoca5PSN2EmfihaetpYh6YjrckewL",
  "key32": "giq1zVw8KLkxQETXDXSVjyFszo3W5ovXwZ3BCEU8FoavY8GV5rk6zAwXswe3TfL15XoFq93KaZS4DHtmDXQpeeC",
  "key33": "4KqYZCmUG6LSTjvGMWVQE5JNQtwt2pMpeaAmoMHXA7Jer2nR2VYDwmJiBS7aJxTDrKCbQ3HXq3waGaqvPAFaFkXf",
  "key34": "5ZggT316CaTJFLiwEgaDEMZFb9dynb8rgYoC7juR8nHZTUUf4hZKEFtnjy988KZGw7CiKMgZorHVtFrxbQix2zA4",
  "key35": "3J8s9KSBKFHov75zaMXQ7xxbfuXKNF232rYTpwpHScHHUgYdVYqTESE4PePuRHMU1AvPWKSbhHUVceU1kYjL1VYq",
  "key36": "4eR2CsVjwx4WSLZLwa9LSSorkqNPgL5cQaH3bxGXpjRLs37sXX2aYdW1Xh2WCvqoqs37tuiREUDmcuiPQ57MrjeF",
  "key37": "54YB3bvxWFFF4gb4MTz2RNA3qq6oA9SJ3R8we8WcrNeVyHc9ACv3EEaQDNfvfezbdbEJZZAGyeLxrbKvcjAwJngs",
  "key38": "3ZfpoPqp3kdrkysUxxz7ZqqzBAr4uvxPE61rRpygLCbpaNLdSo9CntcE8ZJEQXbVaNY3aMaCuzc9qf6FS9MZAjXL",
  "key39": "3Hmky9rKgH1Ad7VGULxpzL6AAz2ku9Kii7rSmyschXMX1YvUR1Y2jRKWe1NJwjqqmJ74z31bRBHd832YKWuhwvuR",
  "key40": "3fpYrjAG3h4NTvBLXJd9CN6N4iM6seNzoZHFPBJHUqq3cVwsahdvaqvEPHQ5M33z45mP1iYLu5k1UbNo38ES9gEN",
  "key41": "2xaempryHn9EjnkdinScKbUSFJE2ShZZg3b6qNEVwY6ezbmcAihUnraLVMM83ShtDcnKJSmZoBgRDxdTgB6hiMBa",
  "key42": "F6JmiRME4Ckw9MSi3AS97CNnXyADnVKrj3iKo8aSjHL9pmaDWMtrA32pPgN2iG92BzXw5Bsj3Pq6NxhKwH2Ebc7",
  "key43": "2ZQYe2vvbZ1R2AHrpWm7GFstMmkc62r87umWqkTaakqQ4go8NGPN6wy2woCb2evjwV4hun2Egf8oYh9kZnNQbXWS",
  "key44": "5eovha65WT85Ke5qXjK9VFGcqwgGkJa176YM5bG2B5mV5Zh1dxpKiZUnWwey99C22dbUA3qhcd7QEmeMbgndQGVw",
  "key45": "3i2JbCaaoKitdtk9dfuJBMPWjH5n523SWYzTVtFkSft5Rkstg7QZrv9XD4M7aKZ64UmHUG77cHo9ub14aEKEV8ds",
  "key46": "646cqB9fQ3mRmEqFr8rgZGAmnK7V5ktfQCqPTfeBNYyvspsTdQq1DjEiZw63XticMQNqgyLnrcwgKCD6tBqLBKAX",
  "key47": "4DqZjQwafjYcHnD5tZRiaT5kXbwzxffBXgcARe9Nza6oUZbajJdRR4S1Lt3AJVAj6XthwcfXuNvgLVTEMeKL9yF1",
  "key48": "5sHGfQtdQYAp9HAueS3YGKMNAkDVySuPYtXVEnjgohJwEbw2DM5qcEuEM3Y83fUmUU53xhepf5RZSt9wEBLDVbUM",
  "key49": "3ppLFFwkzpJXpJeR9LN9YY47BYKz7UnDTrDzZWvgRHpQEYMPayNo2BZRXKPNdjiajBakVABTidpQm7aYthz39H5D"
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
