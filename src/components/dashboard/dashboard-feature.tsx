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
    "2iRvarGssL6CQzduaNyE5j8SuT4hmkqu748fxQVLhnPPstqP74uASRogLVJQRRhb8yQ95syJ6MZNPRdjiXmYwcbU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fr8zqYem4u4MJqhZrryGAxFvv5Vk9K3txcbpRQEYfUJgfk6dGX8aZ3gT32W2GozZoX2918EG6q2mFW897frLEwE",
  "key1": "4NGtoxGcFcV3jK7M4JziFSatbEthHcANWp7eLmptWVzfZQDbB1DgTXFMWBFx3NnXB12HEqdrUPN5Y46tiurg9iUV",
  "key2": "2oW6wAGS8PKRdYdqiZZHc9T9ornGj8iXsHCj9kGGc41WteGA3ZmwfYvVznYvw9RQzoiXrtK5n5XV9hUCex3sic7o",
  "key3": "N4Pm8qFFjh2J7myzfJ514Tc9Nqc3dYN6ngY18N7D67H68ezUdKpAmvc1F2R6Aaaq2B8d8pi9yMV3VcRrhhNKM4D",
  "key4": "499Bkq4iHDqFpwsu8eB9GGXxAUwFFoJnvUgjFRXtZzQ8F7u8cqbYWs1x5VdUpR4Z4CLpdYdJ6jsNehhp3CyUqjgq",
  "key5": "5xYRdFGemASeEaxgX2P3qdt2NaiwcTpXjVWvC7ZwT9Lvxe5D7nPAfefxJznpGBCWFpmsPJcWu14eqb52PgyquiN",
  "key6": "vynAyxx3hyvqgYp9qLxFAwT2JbuvQ3XnMmr29ZESGCdCqjrjNBUH5hThi1uZShgwepDA1GPG931RoAoJFoFhT3N",
  "key7": "3h8YuZU8Rm1ENHug17HyZUJ8R3TxsU49pfNZmzykcd5nKXgef9CgTLHETF8PqsB5o5QC5tf5w1c32kfMGCV5mJP1",
  "key8": "2t35MW9dM2i1NR5sfcnPBurgCPn4t9zbVzxuA83ohUMnSZfEkFwNCvXRoQRrrKru1BTyUGfYUNN5C82y39t8Qs5K",
  "key9": "22UXEeRLcJFiPdmeNGDaEvCwLzVwY3XfJN1nmvgmEDcGiJn2obJJUytBp4TLXVsM3vKSQAcKRHc4zhEfdJTGrNb8",
  "key10": "2kKwkTX7pTD16uHXwGF9YHHU38TR2fiZvDNrKj1oBiL3HzxzsmmVLP3A6nzN8FendxiSGQg3ky5rCQhxpoGqxxuW",
  "key11": "4xf2o38gYv8yZFYkdRuPimRVG2a5uXfkxy3F5zwnM8wcy3iBf6JHBy6sxvweVRWjCqQTZ4D2S1QaFKy1wyUxHpBG",
  "key12": "47YGoaYSvpuHi6NguzkZkaCidcnVigPtmb34Vo5jovr68zkDLK4cF37XdzmC53KPBgrwngpfcTYkjf3Tjkxtbft9",
  "key13": "4fXiXfDPj9PdnXtTEewfUt5DvNrTyRqoLiYirudRVCeRhcJEXfPnzAUHHyc9GR8f7iwgFTVPGJeStGiXEzBVzspw",
  "key14": "4ApmX9FewoFty2nGEUaPzEcC7NTLSzmryKJzubc5h4dAc8vDPA7ZWqDMmGiisB9TSF7ituCXxWoR5f6isZiKKeUN",
  "key15": "2vFRt7BRBkRgfj7Dvgo6aGh3EFF7xYq3CZ6cisRatH4PUNonJAGNrpvxkqAp93BaBbw5F8tFevWn5JFAXWo4C9sq",
  "key16": "4MW6hb6jseHLNSyfGsoqhtfTCqg4YSz25hAtFGkYmUALFKY8ReyUahsDQ2zcaYS2Dp5X2jFzTJ5rqskYj2QHKdbo",
  "key17": "1QDKBcPZfcriMqYL8NkeMBSWvyv3Vd16nGrqHXHPqAuFncDwStvC51ofrnV9PSuQZ5ushqFuJ2BLYqWedNo8cvf",
  "key18": "5ENvXLVbAv91xhydv6neRPcWUpnaCUicAvThDytnYZzPrD3zu3Vo7vhzfEhnks5gLUWK72ia2Q2hrbQ4e91ZdRBW",
  "key19": "5vqHLZM8LdEXuPwry5zCjfoQoEQjMbsBpTotbT5LvjQwYf9ustWHVBbf1x3N3DBobKd6gTNxraBftVmBB2r5E3Pm",
  "key20": "2RoizAJRyRzUarqrPyXkxVu9y9KQqjDVgYZoHdaNdWE9U2kogWhfXYBYxdGFr9tkNxzzxKskmgzDkan5qpXMar23",
  "key21": "3iHUaLx5Lkr2bzLLJCanRh1R1ppBR1nJRqytBd95BkZuYT2ipR3sQrEB8HmrCDGtvJ3HHSG1BQ4hX9RpY3B57DTt",
  "key22": "2iXDwB9LcMsnJSzafF8pnoBYjTWhRetqB7cJUvdQWMtDxWPp8nMWmpyYWovzxm9uhvPJk62t1PPKN8vhRRMqLYSQ",
  "key23": "5GmRaStGArPwZd4qaGPUVGGtbHX4vPtoF9vGwQLVY7fHFj62aZZuu4YZ9r2AirjTZ9emaA8xfvCHUR6iuVvu4MaH",
  "key24": "6PoTiuoUTyAvCWKiNnVzttetSXWqy9m26eFmf8K4pwVs5cUFVA8BmG1gX4MhZ871R7ja5fpuqCdYxUZwtwXGDnE",
  "key25": "yWX5r24SBzKjBj9An1jBej4S9oHCarDuZbnbNC3PTTiNGk57jNU2m5ZAY7DvU4Nu3tfbxynVREhTLwNGfevCVhb",
  "key26": "29JA8dWsbatRMnFmzsPKsUsUSz7wGiKmsP3kmyAnJg3awfNTSodwoC77tcY6iP3namS3aUXKgaB8CVENyfLXoBZW",
  "key27": "5uHAPRbViBC4FDzHf1CBSUEJVHH4uh6swY11Hbu4MvUeX5qhhTfJakEEUy32pNJQnJf34Bc8aLnj5ywtqJXU1DTZ",
  "key28": "4kmWZuxH586VmsWmcxD28HnGSs7XfdEgiVT8y886vJeTfd5snuukB795P7XJzEt5DM7yfXCn2Gk1RghQrxjKG13g",
  "key29": "39tuk6QrwQePF2p5pLWQNUcCsZxnVLdEKnKXEnJufrRFC69dNQ2kNrTSsL19Hdky9VHmtbxqKfVj4c29N7i7edib",
  "key30": "2A4SJbk1akZbY8XfxYmUfi5yVjqmDucJXvzSKTzmnFdaszZFfjvv18HJCThjpjr1XJkjbYioZjtG7vj1t8hUdZ6o",
  "key31": "2UhJyzjZdY66J5CJCMUW4s5ad3VZkkXZCfq4ziUN3X8BkFierUgNgnWv51h6PmtLi6itfddYN2NjyP7vzgwyMdPS",
  "key32": "2oCQ5bBpJJQU4NVMMbHMse7XSF9J5Zx6XYFKDtg5NGNzpK6vc5HkdvRb4Lhtg5mSG2KkCeMA4kAuWYHceismuawY",
  "key33": "536dKTPQF8EvLSdfZ2be1BFsgg3VSD8xTdJt1rRRa8thJUBCV9MMgH49p3zCc5fq4eicxz6FdKifayujmabHSpex",
  "key34": "kSvRpkoqvLVFGdfGtVBjHFcLD14Wqu6ddErC731RzxW1h9h8t8UYVcVkdNV7rNytGkxYpfku1ez1G8tnx5cxx89",
  "key35": "3jXqnvx5MZGNiTUEHm8UeiBsvA45nJLKiB78DG9UtyqMt8aSx4hGT7rjDZvPpbA9SkkTDAX5tfK5wGDZRoeCQVVQ",
  "key36": "4rb5WNUjgWLrhi4Mpc5UyHEpNxPyesCUVdDqcymQJde56G3vjukqB4xXEsWfpSnuHefgnYng9XrjrYdzSBeVg1NA",
  "key37": "oNne16xu3aByQMfDMkBd7APU9642F8GMAPnSfa4oWkR3qh1eoBpvrYmkgfCUut6GDBsssp5GBStKP4uHrNehWxH",
  "key38": "2sP1QmNStzLhdzwYB3x2AELo4P8NjLAHSh5f5TQzpLVueQkgY7SKpZjnyi4EsC5TwSwHo3Lm3x6JRbja8BBKhXJJ",
  "key39": "hFFN7d7Nffzm6Di9eRNd9r5hu6cDYLwirbjpxpZK2NLsqvGYLyavUBeXsmVfXF6Sw23gU2EUb7Xi77mR9CX8Nk6",
  "key40": "2P8Rb5yUHzvkZ9hC3iDUPxXGze17waYdGRFMEjsdSWUBvi3tgJNNjsasaeoS84k6GXDavTuxxX44Y8obtdB8bR5y",
  "key41": "U7VNZ3HU2389nLwtiFA1epdv4acZNNpJsPNTrhRJ8BKFG2N75b9iufFfZ6VEHKbJpjQYxZ7epeQicH4FAPYDLXt",
  "key42": "5D54xQtaN997TrzGErEEh35bMygX5ADBq8UT411SikZ9aYQsF27vtq9F63WFcF9xrBaWpQJfJCu2ZuS9zoV1iqqQ"
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
