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
    "4iFJCPNHdzHyAFYQyXkGPcxjUb5KXowtW93zAd7qcng48URwobezz3EKJnpPyMdRHPEWezTHM3oSa6zfGmut9Esq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45Jj7wsH38mifwAY5WUUxA3gnryM5H7eLpp2Cmgn5A5GRvSDTsok7gB8zWUiV5N5GnVvieP2gHUAGsT8SKsQjmDk",
  "key1": "5NUR1J33W7ArcP3vknZxmJ9H4tPgUcUkff8CoejyFxRwREAwF4mLHWFPKbo6aiS7EV1xYo2ACTyJgqJcntBUVRXJ",
  "key2": "YLbhRaAZR7VvqUh2Ky8C4AM1JNQRwugxs9gwZ3HQxv5hkbH8ajFQNowNgkL8KPTCF7UxvKXinX5AoKeA3NVHHF3",
  "key3": "62rCkxsNgVs1mwVeHp2U5KUR14JPUJqiumFXbYApPTnRD9oQxXLVLbUAH3HuCC96kNn5fQ52sR7NGWmS1keyFGgj",
  "key4": "3VUsESa4w9X2RcFxae9bLnN8pG8tcpy8p9EkUjcRX2BYF5UphYuWs8ap8acx2nmYxeQyTRzFN63MnafoeSuuVGJU",
  "key5": "2gS7xyicHwhRYeDnrbaXiFgXKGU5WqUjG7vKpvLh27FXRriH9bt8ohdMfiDywmp57SDzyEt3gyPk78vQoAgft5bm",
  "key6": "3rcoApDEzAAcoE5GNTphm9QQPuNpGDdw5ZwUroZTf6SZDXoeCQ6wLERneiDRspT2GpY6HPUaR2XMbYSQMGExNCn6",
  "key7": "4Cef3oXEXKzJ1DVNL4rzvG13KWdtN794yTzGxkSbN3dZQqjp532H6P4XUPkLRRZpvQih6S8y6JiwDgmGMkqP3TGF",
  "key8": "5gmNQeSjeaXJmSAAd6fvykwWmRQjzEWGz6QBamhTcd7YvxL7CgtQjGjzAoUsKZqgwxXnwEYVWu34c9b6KDjH5jrn",
  "key9": "2VfRQSshVvfvW8ajEvxwjAeny5ZRdndfPpgiiAS2SsFBnWQnzBoCDsaHdY1soKowRid65zkHn3SvZPnvA3KMazz1",
  "key10": "4aHDW7MuTpszmYuLR9qPaLj1jVcPzRpJEsGLkRfm2aRyU33BKprMNyDu27h5rNwd9AanAiZX1HriVirFskgXu8Gp",
  "key11": "5RbwShvcay9EfrFFsziYuiBnThvSz7tvNGNwZ1swYUHmARwrCV56R7vj3DkzbKodiYRfCWip7oSNKhpo1eTATL27",
  "key12": "41vLyJnCZoUgYeBLFCHuw65kurSHZEp6H1EpthqCmcAhDgqcZCzEVcvnDa2NPxvnXspWKbfJUuaVuF3C9QY8FYw3",
  "key13": "33uESQc7RwSoFSyDCDjU2yisnxFgTWw75MVrGGDTYPoMPT5htxZyFuisZZngBzBoKehYUhM8dfB7bRRyzwMuVRBP",
  "key14": "3Mys79VVALPdSwfsqVvC1767Us4LpArVteYdmnyVbSvBEDGkxCfH45fM2eMXNSZdnzQSii9Q7tTd1JJ61WGrrkS4",
  "key15": "PpthKo6WBfC7evT514i6raP5QBFT5zHyr2zDRowdeUciD57p75cPZqCxpKuNai57AW18skNBCU2vtAwKsre6PQz",
  "key16": "44rTArysbA9gUwoLWEogddDGeL1sTvKZwNVAsiagLvtrikb8wkdFqzAm4h68u8LG9PPMs27cMeKAG5idfva7frb8",
  "key17": "2ei2PUHjCLQiBS32tGMYxWos5iA95ZMPwAqG1NYGhXtpYUPsv3pxEGT914wkYTQiWmkogAMkS8gUEd3FCVw2ShnD",
  "key18": "4eqtWVNbMcgcs7vfNLj5J3tWe9og5PZiYn4MmBNeGCNUJS56cXPuCXWy9NqYvs2J2zBZ7zzh7QngJ6cH72E6X5f",
  "key19": "5bZ1dFGAJyC6DrMZ9GGUoPLxDznBnHXdcMm9V6mHXzfBy84x1JegqoQST4bZzpRtPDqsdhUH4YuuCDvtJqvoQV7V",
  "key20": "Knr7DFZvoZ8RqnFgwW1Y3z6wqmfp2xbDmXX5YZv7QBmtJYmwVhP6Hp35K9PbWfHvxMUt3XcKfq7pPsGbQDLdJxT",
  "key21": "2yzw42gcq1xyTTmFo5pVtx9EkQRJ1nCPKqnxL2kTt9wsXZRnfUA4i7PNoGUC2UEjukZjM5BuND3kPivTvULrixHp",
  "key22": "2CLtzmV6CdACMzhhd7GFZqgwdzWkpFWihVpu68nfYyBuZc4Z5TRd9zha2ugY2aWswxEGC8jCPhDkwwWieTNi7pw5",
  "key23": "4tgUpMTKgrAAwDcCXmKezLWPLU66MtVqF8nc7dsuGbzeCezstMwcBzzcJ7aKxB6Zp1qDjFoJVWuAbMpxkC23qH5a",
  "key24": "4L4UyZtCKw6qEU6DThQLdGXrJuru9DX7dTWVfAxfi8ZHvKpHL3NVy58HRHmCcBDNeDQwP2M73fqVqaVPJB5FwpTN",
  "key25": "2HuXM1RBB5864khyYcH2cB73vRbYv9Z9v3HdT8KK6HaZmYx2J7K1tYG8ZSWAHBkqEABRPdPvFssMfrPWHD12Nd37",
  "key26": "4bicPYJJX13XcDoGL41jxgoTy4odNsBj18EYMoyQBvaMSMk4FUKhdBBd2c4uGnY61TbPdTMz1xjagvtce93oDdpC",
  "key27": "4KjaaDbqe23NfeTuJ4mLJNS4qJzis6V6eU7xbPhhXZWtkE8CXaZeHwFSoWNxEYGVMBissYwuCSh7tUoHybDFE3gw",
  "key28": "4qmVGceZFPBNhZKfVx2mHWCgwPZz8hBgMbGpzaATdmypvkLn6qfFbN2tZxG2vUGmAT99NwaFy7eK7BAAu8y6YHPj",
  "key29": "41phgtgnM25qe5aJhtQFU1rMbBGsnsDNn2iGwydSB1RtzySrh1DFb1BnBWqwtbxqJKHzrXdvEqU68387XfMQeP43",
  "key30": "3fvYNUfZ5tH7QDw6ErcHeDRfHg3XhwSdNBRpMPTdhBPL4ZHj3kLhekWMLcgq7TfcbLA8ykNm29AFP1tLzDJhnVZv",
  "key31": "2inwkgAFLRLfC5o7vdtH6ckNZin9mE5dHp6yrXpUxgpDLSHrzpz48scMReC68fLq736Mjwi9S8HRupQMzNLcUh9q",
  "key32": "5eKn1iCLF7QVdA2hAry2D12xbuDh9ec4tZqUspTYj7Fi9zsdQHqeny9VgDfWSQZuHe9SvGsFGDKvwNpAMeiW57U"
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
