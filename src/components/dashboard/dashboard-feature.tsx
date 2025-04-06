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
    "5Bxg6xfUDCJe8XEDZwEp9dNWsVJF5MRw3P9a6BeU4cQhLj2z8voXY6Jfnze8ghib79oXtWz2mi8L6SouSzHskQ33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ro5mYeFw7nVmroKSHztwjgTE922ZkqyuB5h1Rg1eVrpgpcYMoC29fHEjEC1PL9e7aULQqwn1AADcqsmcXBub4wD",
  "key1": "5aMXuZe7iQ3HRjS1dLWvTCsciE5SYHkUqFKQf1SePsau39UFtWznieetBUz9Q5bsCFSYAUTCVKvBb28Z8rgPJYyT",
  "key2": "Qd2iDjzh3GizNRq4TCgJrFXYMMocGRFXKLyP3RWBW5ZdGjBrXxDmyJML8vAwZfxcXZ4DE8moTsu8aR53KougKsZ",
  "key3": "5Gyy3T2y2dicPV11EfUqPiYrR8AntzpUeFizjKxQELZtrpLTVcqkhPVKV8iY6F75pajCvzBTVYAMpThD1Cu4Nysw",
  "key4": "2TxVHDv9ZUEsY5Mx9s2xQtGE3AxWL7uVe6Gk5tV6NLkpix16Mn8szRYmSJivDTQ8a91gxgvZ15FZBgmMAdm6XAS2",
  "key5": "5cDRHVDkYaRsQERKTCT62vvJQkukmLUQFVSmGdPNqwx6WB2BGqFJtiMppKFh7mebfP2NAcb9g2Md5fgucA4fse44",
  "key6": "59j5YVh2rAmyiocV1GqsWAPHzgSA4sL3a9v6afmpkNStLp7KpMA8b5t67r3yFvo1rpN4Y12vjziVVyMWD5PfuZo1",
  "key7": "55PLwXCExF9qF6a3hYqnGBdyzroMsPRSGuFq5faW5U5rCLjNAriqcdw9q3VJBfoCSqTf5TBwVZjJLE9nUVKwAybG",
  "key8": "4jpr52D7seyBKtg38VexuAtaWJYM3khqeDNca4tbx4MxTPGfdCMSZEtUqKvERNMNoj5XE4oTmz6LkU1JFXxw8ELX",
  "key9": "Si8GjcHK4DwFcK1YdEZ2hJDDZ8TM2pyoFQk4dDWwCxvhVPZ4o2ufhjoC7dWVwCiQn9QmXhMbbd86UMjtiA2TsTE",
  "key10": "5j79e2r9usNymzDADV4K3fkvS23bxxQ63mHi9FAsuKZr1chYfzhGkaZWZ1EYTS9foBLaSAxVVV5RSfxrZwzMuRYB",
  "key11": "2dyKcq6GdCt6dMcLq2FihTq23PZca6uB6P5VbqLDw8KncdSTwM8SKQZQPNetabm53k4TZj5GRm6Aw8apFqbrzu8P",
  "key12": "4tiqZRp4tm3B6KFmTLwk82TmcXbtcbUv5iodTrF9Py9HBg3WJLNpWJqhPtV59QmSwBouVCurvNifr5LXQfAbs1Pu",
  "key13": "5m8r6YqhHtjpFHBkeC7pfXdVYAFasMs8h1os2mRaNPknRf5V557MHErhRXj3D1dn7NrPba4jCJMioXAohW3zZ2d4",
  "key14": "toyFoLRaztkTs5yuMqdRmn4PDquCD64dCs8q1GJBFU4So7P2JnwZrVBhLvLmhUeLZweRq4U1uXsCBmo2EACT3kD",
  "key15": "5HSqDVCApnoGewnj5XPVYwYFTpJBmiUihdtgdv8KxDmYqvQ1zjMS6ViLsR8n97uDw976RnkjBXqdQn3PguqBPMDw",
  "key16": "64MSUrjJg9SSZBogQkJAniZtbgTxyNKB5WwcwCsb7YNw2FSK7FrFQtWjQED4yc1HWzW1YV69mwRfueybFxZ6e1zi",
  "key17": "59B8zjS2zKDGzuxuZnsKpQ3Q43oSHcaGpc79FT6AVs9hvF7s2rzhPpe5NcsVz6icG7k1tkcQh5DezySa5XHFeLWc",
  "key18": "4Jk8ixYVtLa4PTmwqYgEqfspacjsLk2c6rUN8aiaSE66EbbmL4aYuDw4yzAKnf1kvBrMuqMe1Z51kbXJ3gaimSrq",
  "key19": "33DdjbD6qBaiMcaBLjWBMT3iNPbP61KvAfaB7gyZSCebEggaeyk8HHumh8nFAgZLT3gwvJ4NKcBfFHpUSAqXcRLW",
  "key20": "3AWHiQ6j9bvVNgBskquWLfH8RLrNYuc8X118Nrty6VsGTVbCWiaZJp4HAHQ6aApScmAmtXnYyihvHWCso5GC7hXQ",
  "key21": "3newDSLvBrfPyskEQMaLHtYUfNDHkzTJ7tUaWjpuBydrY71RWXGmeEG1LNbvN14TayhGkwJRsYoBadFLCRQ7gYci",
  "key22": "4AJupQ3MtyAxS5zJf661d8JSmdNnUcZQU4WkcogJujYSWSHKEJ99KaSWd5u98cXAzr1RwEXuRKWzLX5TsSKHsBV1",
  "key23": "WYBNuyeUdMBTQ85wmaf35A3m1iVfMyjHfgn9yVepjuCgAirw4zrPpGWbFBVMNyH4Cizi1bMTzqNfeecYAvnvBzK",
  "key24": "3yDbADHFki5AbhrKRBWdrQjHmLMTCDtqHhna2oGxwP81nBxDm8NsXnpkrxfEQ44toVz8MzgTvt96SPNLLQoMcBj7",
  "key25": "42sL3rWNDBqKMfxxhfkBXxPTxrf9ceYKwfrneqQU9TJqmbYFtYDB72YgwR17hWoQasqV6r84M3xSndTH15vweV8",
  "key26": "22qjWMbuwJpYqNHUtrDgHr2PonvkJZjSAHxzqAsrpMbb6wbVLdMH7ZYDf7ZdQoof4KBhP7nna6b6xSi9LcSP8Wj4",
  "key27": "pC1uhigPUCBPhJUf3CZyFydFfMDpLKVZh9SZAvUCsqJy4AumG2V45nwGrpaG1HTPSgGnQTeJg199iudb4cYLUDb",
  "key28": "3UUkchryYys3LoWEzvvfAz5nZV1LKW3GqZzEMWo1otCSn3BRrV1o1mqXkoUBrQDZ65HEaAgQ8MQuxq8H7XJHUxtb",
  "key29": "3PaWD5fvG7GX5z3LwFpU7D1msS9w4VT43X1pP2cVrw7GzMLkYCrAM6nF2wSVGeREzAYuDnp8TtkuiCeqXYbbTyna",
  "key30": "5fyq3ySoo5enznmnT8L6gviAN2TMFH9TNgzPxxtS5eUNvf7JHBqZ7rq2DQ5mfc5Nbu3tR56cjm1PTRTqJaehPFw1",
  "key31": "39zRaMx2JWRthaidLYqSmN3UvGLiCp2zinRGoTcQ4mqHBWFvHPwGNUBpSa8EARfhTQUQQgJ6YhtaVASXu5c6CbQD",
  "key32": "2LxKNeTrWq1RQkoeo9s5F2eSZqsQ9GNQpUCoRQNKFh9WHnno5Aqs2K9Sp3vVNwfEj4W6EAzZuKSKC2m5gK1FYbH4",
  "key33": "4UbEoeGURXZbkC9zn3kz8orNNt7HN4ZSpmnA4SMyyDFGefcirraboi8hBnK31a662GoFWLSPiz5fFWw5wVnQDTcK",
  "key34": "2vJBQW3QBQvS3B95734YUhUPUMqBLuoU88tG7u9AzS9qQ4VPqDtTTugGohSoyc3esBN8FoFdTMpK7bPzvPj49VuR",
  "key35": "5QG2PEPdku5Tz2PDBmFpggBfhtPkHjrcPun5GKmbfEjWDsZ8NkpKZHfKhpEyfoUMuJsu7a2GJVE4rgKKmUVM12od"
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
