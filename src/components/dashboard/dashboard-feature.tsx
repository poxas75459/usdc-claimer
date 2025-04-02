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
    "5SGY3ivdwCLmcnNYXApSdcdG8zXgyki49KTLx43s4hxPc4MSaRcvmoz3pjoDoFoDdYKm1DA55PfyjJ13b1b1GfPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yGwGFqGBtjxXLtzzda89DGy2G7oz4rums6ZcUM47DhMGfnP2iaAuTyskaCfPRFse9zghWQnsVmcUcbMdbWtr2t8",
  "key1": "5btb5smK5Wi5DrLqcfuoCqDZtSnmSUdAECTN12WCcx1ZBP3hdSTRLsXVj271JrnNJ7yPRMGChe1ptBQqakEfe2JZ",
  "key2": "2uzhQBxagEiHdunDoVcYc4jSc5vCemtHjQyi4h1w5CPL6u5DxDhBzCMdMxnGmJfxKPruVQQJUApLs4FJvCsfEHhn",
  "key3": "BfgKgcLwv7414v2xNyL5LtMWbeivuUnDLnq17KoRuWQnkKiTSJYHkW82dxBjTTdmotLXajUDRGGo9X5PaT6QZke",
  "key4": "3ocioeNyveLGyeCvKF51ySsfS6D139peZRiXiXC4ZgNStmLwbA4Ps6A6dsq4FWUZ67eMMhaFHiJNv9edHPyrJZD8",
  "key5": "Kfm4ceLjKAX3Rac7SkZ9Fr4NtUxHP8p6C2YWioGxvbArz2UZ3fK3U2gc1EA3GvnPmfkbFBKv8ppuFtd7W77Zsdm",
  "key6": "shq846mPvzUU36un3YfVFEFS9u6UVZYATYX4FEw83xVJ3skuZXPxgWiJFiPQq2n6Qk29zXSvCAb24E8WmWDveE3",
  "key7": "67DziSyVAfMsd6FbhSGxRQ4SXW6fKcUghHSZfjMCSdKdiiNFp2pmDGLeZ8awZdzasC2RYc3LMAXyJByxKsqfeRdx",
  "key8": "2jG5y84w8sz9Hj4i3QLeg9U61oBxCf13wZBRLBBWGC52L7wDf86jfFsS5fMwDFGdMZYg9nNL5N47hmEbtULDTDru",
  "key9": "5qG12LttxR1SAbMNsMsjVHPxReZvsJzQUp28ta2C3cxXiJcDF7KDxr51GmEH4rGt17rrFxF51jZ7zqDxqBzc241C",
  "key10": "tR6UGsPC9pvypnDpqJsJcXbVPtUMYubgD2HdQZKBXZbpSUpwknDivXVB3UZgoQZqRyt8YpHgVQhA1GM8tXSNqMw",
  "key11": "5n4KNpYr3HAi3KgKGrQQXaPKJaKWCFAG5KGftsf3xVNLuQXAVmE8knLxpcyADAmsgU7xjKmp3YHzpz8mV2BJqdb2",
  "key12": "V5GyA2pkToP7sati2my1PabWZMjqnzGPu3tMjhgXtYcT38835pKUV6FSBqZHWt7uSF27cjEmFEUpZyv5kSRfTp9",
  "key13": "65s9aUtYUczim9kPGyD6aA2eDnaZkjGcSmKzd3ZB65j62gJKdYve4sHsSAK5pphZtkYz4uh5i4oXSXvD4s6x8mDz",
  "key14": "MziTFzmiCSYwQw3hD3vHCQsWBQvgB9KRgphYjAcrSSuAfTZJcZ9cCDtkHrjGH6y81HE7Q6rsZNoJq7sZG9E56kN",
  "key15": "EsDMjY7XSjRM2aUNQfZeSrMxWAhqTtghCU8a832TMrtWxSmFdZY3MtNaJKqzJYDZBkgaERFnSZ7bE8owpE8iYDj",
  "key16": "3HkNtQ1ZtRn7J889qJLRyhxF8dxM5rGPG4Mp7NN4yKMEXwYH3YLUf4eb5vVuNpE8uxCiTKmUTJoZCwFmuSLAHXsi",
  "key17": "5xPKGRtnEVvYojTJRFJiLHtvdPk6Hh2xpiEP3SSiUaYaTMuSVNMJN3waP9eA6Kd9kDbGXbGShWmuhJG8dBVxbp5P",
  "key18": "51oKJeEuMKipAVw7W3KnZdd1xTg9WQyMVKCUt8ofG1DQVUButJD7n1jbDEfweQLC3WHbnuJYT6chyDEjZwJhZdmW",
  "key19": "3XbtqK2n4m7ELtGdAFNAYfcNsCLVAreyx36vxAtwQihLWQHktTWTwALNSgv42ZYPqWTadSuzem9cNMnWHYGEeRjr",
  "key20": "3uLjhJAkRUs1h9VkUnqqgnSG7DAXSHromtVyKr2ohSbWpyb6pcdNadNp8sXG115EaNDi41FaJKM4LmH5CzdTD6Av",
  "key21": "ZDGyicDeUnLX6ppxeJS9Kw8jpwBTqvpK2HCngP2Gw3zwJZnd1zdakF3sDhriUfz2D21EVrqTUmST18brCATAALH",
  "key22": "2KCFwEVJJbZfA1SPYsjiY5gCSYsX25k26vMQVHaTknunjVvcZS27RAsFhNhthq6wfasWi3TV5WWhvPKHTAapzew",
  "key23": "227bZJMoGwwb2FHGovsGNZwCwkhSW3errfKA3rTuy31c4vniZBa7kPxKK4UGooBoKWkPfZFxDHzDNWsEV62LeM1B",
  "key24": "333Ws6k9m35mXY7yqSeMHWxQTDKw8EfPbPrHAKTW4csMYtjxRg3jLJd3rSedGFZUcuCCdiLyHBBcbAwFey7U11Tu",
  "key25": "49etvnwA3TsaMVMv9yzmUV3kUPFNT7AGWxnRtozJki17n9CwoCabdyiABwifqwEv8TPFuLJLv2dQUK5zBipzZyTC",
  "key26": "44ysxBiHDXa9qiDzNq6LPSMrMTkvH11KAy7XzNXaXNYogA5vqXrcRckCX7cKy6c8XgFSQJmbuTKgfx3qmsmaxSkv",
  "key27": "2dBwikCi33ax5Sx7zbYGrGpabutBRtdt6ABdB4BSdGe7JUnk1zj1WpXwRWowe7hdfhu2k2hJyL9uvMPmxoSsCXDK",
  "key28": "UGN4aSx9vVRhKwZBc4wxvnT7f2FeT6xvVfDpmgKfVxcnCi2mbpsQmA2qp9kUNuci7Lvzdg9UimxH8sBsUxkRnAg",
  "key29": "2JoKs2PVbHVP8hoy8ZVWbdU7EMGnb3ZjENitktAXPbk9kwYLzyto7ei13Ud1jNjTkWbRD9m3MCbyQh1F43DTbiEh",
  "key30": "24YRBaZFy3bt9vjrihTv3rHCJoQZi299qDNbAc1DdXTAVax8v5DJCaFPqxrRweaePsgY9Au15cYoYLajynXFypqh"
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
