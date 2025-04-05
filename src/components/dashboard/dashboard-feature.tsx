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
    "GbXG5ErxTpJxba7nZgnP4YXrWoKsaMDez1S2TQgAJ9V4syi4PdaqHMkjvAb2vvFWa1ArbTGy6NpKwHprenZ9eLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qFMm3SFDh3DchAhPMvSjPKgUfgPTNMnmiC5cyKUQ58ZvUsoGKS3aZKqUFfsVUTxYoyJHKSeaETAf4rQPNNA4EC7",
  "key1": "4iYGadu71X1vqYnTt5vdfPbh2uKGMYLBk29so7SkeujTUawzEn8pfDWM69kWJZEK2y5D7xPTMeuhLteN3Rg4UAGN",
  "key2": "3uRPaiWdbrKSBPNLGZ1gGMahq2wLpFDEvnrH3qvaXwWtou8K9SaEbwAqrfj82vCwdXoHVU8RFSmYZB6TpEzHThUo",
  "key3": "TbVb5avfRCTbMTwUMztsaZb4G3bNtZoiTZUgseabrjWGTy5rzw7JUrBEM3yJZK3G1MKKtE3hKitNbsTdebuDGN8",
  "key4": "5qZMDTeK4RwseGn31WZeYYbtLsh5xuZQGPwTU3HZELgZhmm2gSs8TVCZTn1y2MyhmCQHuoXQCsm8EDRU4Pkg64s1",
  "key5": "2dAV1SPkC45UheQUfrX8dZNX5nDKZa9ne7tvBnUKr8fo1xd2azHFVfykykb6d6km5qn2JDac2iz7ayRi5E3bZAew",
  "key6": "gWY9PWxiHcQRF1dshcpKdGUnmRMGZdmMnioibzntco11n5WZ7ea1tNHASR5Er975e2pSASBAF1hGEc79Ki532HM",
  "key7": "4KbSiEhaw8pDmt8YuS6Az2zxqn4oG5QCQ18meV4T8eXyYkxE1Sau2PpLGrPQgBrQFTLnh72VUocXBQVcAJvqYkhc",
  "key8": "4xFc4MMpWM8c68amkxPwWVNB9Nuxdy2zBmuYvscM2CB5scpo9wLCeirtWsAFuMZNfarXicgVVhnQP3ovcxGM4fdb",
  "key9": "5tp8vUCtUfxbmakTZeETJRGNcCM3gBV6WTcTQVWjVfQyAHWrm5ta5rosWTx8Mqz4EEQQnqGadLg3mvBJWSpaVQTZ",
  "key10": "faf6xoTmuEdZdfdaTBJHxTGmKhRjsLgUqsq8Swi2kQaJ8ywWVaGdnW1Kx8EKLsHdENkN9vfFZ3huefPfvsRJaUA",
  "key11": "KEs64cUshkpVestkWQbhZDE7NXC9NNkHyCSfpf8gV3RjxnKofV1vGByfA9bvsdjibNfqe5fveDsWJPNEVDz8zJ7",
  "key12": "2TKkVb2mPgDhCXBMtYuFDArVJfYK9BpSwaD7DUapfzNYKANrni3whuhokuQE4exhsRdrjTYfwf2cKE8wwLfEMiLm",
  "key13": "2mEV2S83fsYdgpj78XJ1tsia7rob5vX58aGhrAzHktrdKPJGfW4p1rHxfSJufEUbtzyZjP5k5JJqhE1JJQ78DWu4",
  "key14": "5f2SoUzRLGfPtPFJR3Mppq5aeZUUWDhiXXCnBmJyE3bTjAtUJ4JX5UKuJjUV5mMm5wp9ihyg2xyE7opGiSJgZ8Jn",
  "key15": "4H2hzYiDdmidZ88e9EVfUCJ28j167bkisCxdbrRDkoFASBwBcUUrmEYTSfwe6JeoJM5VP5VawjiBgC9b9PvvREcN",
  "key16": "2EjURF2vfB7XnQ6WwDi3f5fqutt8Y2MHBZgMnHb9KhczpJvMC7xfBV5XbPmEygHBi8aB1SEhW5fp6E4wUjM1ztNZ",
  "key17": "4ufKX1nH9BS6a2Qje6c94bzjSNfS4tqwTgYpQxUemPJcQMPYYLXJWXpviRiMU9aHGXNmZe9uKfUFQWGYwgDYBXsu",
  "key18": "2tmy7uAJya5GEACAyv4qeMaGXSFGwdP4c9JUjuP1kB7r89ghcqvuNccJggttEAym4BrnZgk1RTqz9UEWw6m5YDBi",
  "key19": "4MsV1ZUPvFBJtUhMAzCpu76rNjdxXvC828eCHQa2UTCSutn55LyJmDEr5r6B9DYp3EEWPSpy5YghJzoAeSrJ64uJ",
  "key20": "pA9n2S1pmnpPkgyqfnQo6ZjHXgenrYPFP3j4FXfqvQTGDDhqEKFFvfDm2j15N9ynvB8836DpjhbiiQiaqp1i7zH",
  "key21": "2iLLBBSBVcowM38WBRd7TrATKzPHSEaVq2VHiNnMkJ51K1zFNLj1p2TMcrWCHHTm31n6ns6snv8dyr4R5hkN72EE",
  "key22": "5mzEW67Gk9Zr86RziPysHKmgDUMDw6Sn3XkUfCRgXXDsXGEC6mvqzhS7y7bSjQgHXAaa9ETsnnZki2F1g2p9KMvV",
  "key23": "46eFcwPEznVNxThurfWRzCiCVUFGzG3rgUuCSXX5Cd2pSeC6aQtnboirzBJL1E4xN8NBrPqNQYBJsdpnVvwnq9kG",
  "key24": "NuKCvKup4M3N9ZcovmVgrxqCLv2Hs4uTSBqjzKasz8j6D4daazLA4EZXSib6MrHkd6ZVD6i6jwV9dL1jZGyDaLv",
  "key25": "5fL5AhcF5gyiL84BvByJgEp1Hee999Kq6i9oACYG3VfoF2eMw6Axi599tyCTPEmvtkoVE95qCo459BWRYeibzEd1",
  "key26": "3m8mEB76tuMx33uqAhxoW4DqD2sXXk62qfsggR1foN6XZgsPorNsjAqwQQKiYeqaPM7JqyTotr4TY9hqb3qC87tF",
  "key27": "2CKjWziERcC132YRuxSmmVbhZwZaZT3eYxgZZckxiMkZvRzSZgsatKcbCFySND9UeVKGf4ogMTTQgT4oszPTjTWJ",
  "key28": "o6ZcjJgXzCziya9oatpuGu2L5FqWvnytWbYPgAcPH9ABJ6tbPCkMgi5bzjS7752qQLteGQwzDSykJX2u7C71bD2",
  "key29": "5aL61LyHq3W711EosGX1JyDUQuVJRzbng3NcEd23WzUE8a4n1ayYztkmuDfJFyr7Pm92FvY935em8n126pud6b4",
  "key30": "3vGuH4fbVUkrKC7YAfWzcMv81H4j93rJqDbktvPmVV5vQfdGXDv1NKJYCJ4B5SyQQV8VGfGetQ7MHxJ9tEwPEgTt",
  "key31": "QBsM4mbJrt8vkkT4Rb3ntjSKLWKT1JJoPhEPYN5W7k5yKWpHogRkU214EhJjpR9bwZa6n7s9QvkMC8NHj1fKXNo",
  "key32": "Q4WAL41y1f7xr1GGbe5oPqbWmruUa8CkjG7ViLe5X5FmaLPFQcT2siqxDCDj29DhnbEwU3LvYzU6dmFYeYWBt1G",
  "key33": "5cf9MdGtuCN89DDHL7aCUNL6UESC9cqfjwwVFhBfMKzGesBNJhxFrCg6QyQVJqMgao6e4fSKAMDPwgTx9F3i6uSF",
  "key34": "5ygejJgZBXUsbX12te4hUiWawmSJeBKAr9ij5ytUnKwsiQKPVNAcvYHPP8fmbRHtxo8eFt4BJHyywPqieavPp9xS",
  "key35": "F4YUtbtMEcWiPHGa4X5g3VShUNEJtFRCJVuMjW52szb8NeyZAvfgSBXddk3Cb9pT2vafT3Ku3ZwUYVw9nZoQNxH",
  "key36": "4sNePpWRsdmqJJWfYP5ZMwsfP9iH7duJLUfyfYdvSt4XCEnCybwPyZ9xCBzZaaUe4fDfLdXFMnFJk96tQBnXzdzS",
  "key37": "4vRwxhAdEN218x7wqhXfeZeK6K2RXQTjjrzheYH3bi2XqJ44MNV7zCk9UUdMoR6h9ydVJdvLUvEgDeauHWkN3GV7",
  "key38": "39zecJKtXhUQYhimipb4TqSdxZrL9aAR71EBxYU1e3hmWA29iMvUF9Y1SLh9P3CpLW63xRo3BXHWbSMeiH9u3kW8",
  "key39": "2E9ZTkTXTDiNPCr7EFadaTbvrbWCjNdAZiqU4H14CB3nzUMcuKD9rBPG6GQQemhDYBwdgLNTKCxTpEgzmNUKKBo6",
  "key40": "2WeTnc4mEnj3RxxDKsfd8pBwmEtx7Stu8wJxbTpAsZAzMs8RwLhtdz7DRC5yfiWX5bhysiFt9V4ErZL15bFN9RVM",
  "key41": "5Lsvgb6qFzdPEbciKquXsDRBdassdT1mAKFBHdYMo3YeaeJUyvWUhYpe6YMSWZC66nATSWL32bmAMGU2fZwmQZZF",
  "key42": "VNKJVMLXEri1XoH9ho3x9pa5d7xAicwsJ9tYMqApg6724vYH2UTjDzDMueXHUdmsoBnCruuoa3YMh513r8YPFwE",
  "key43": "4prcNTWMzWVajYntfaKu7DGo76md4o4FAeaVQ6tBjdG6tB7g8KMghfcp7bCsGLoHw1f1dCLN2FW1hKBdXmjZFWZY",
  "key44": "36nxyJUB2RbkZp4Qui7uAjGhF3CmDajeyWuRAdDhszBeFaazjq8yTzeY3gDsv8GDY8gCy7fMw6LXFSbUXNXTFZVc",
  "key45": "5n7oMWhzkZQWVSd3oWX83mj96pQpSpEFv1PaUUDsRnhFiYdYPrfYqqkMfGkn7BXXhmdrHfxzCQxG68zS2b65cnJo",
  "key46": "4jRirT3jV1cwDYngAtCPV8gkpYY39Hzv1LcFs4nRRgwHF9JmdFx3FvEEjmXwzLfQjB22RqiCcWcrP1YmihGWtmsQ",
  "key47": "5sfe7w5wTE9PFX8FBVGKKXRqfq9CzyjNUuKgvA3Xx8SC4buGRypJyoSt6Xv8ek7ekiqsmyfevX5DmTkCivbwS2wF"
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
