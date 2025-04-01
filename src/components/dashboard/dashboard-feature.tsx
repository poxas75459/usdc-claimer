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
    "3weuishGDJ4VjS8jfDW13qkBKVCQNgp5pbRYWgqwTHhL61ptKtoLXRGAEvz2NrvfJJdwBWFGQJHi2N89rKhTry96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnbWUB2ByXo1A4eRmsHEbzhuQWFmWCoWMbsbEXYPS5SeFqaEnkbWtFu6DDmWJphojnanPzwstVvGLWSF8LwSg2Q",
  "key1": "32JjohaUYXr4Xu8sDhR2Vh1vY5SpbFTgZkce9H5Rw2KZRnn4aMXpxSrZYDTUHRGDaFLBhs5Yn2FFwSbarUbU1hT5",
  "key2": "5Wa5CnnxmkD74qaqq8NyKEWPiJtUNcGnAcSTgTvppjBupVfs5xWFzDNjJN5zzfXRbedMZwuRicgFQwSZJrJJA1SX",
  "key3": "2Zd5Tqbkac2yKF2DQYr6SXSbiVmk9Au8GqZ2LJaELts8qsLTJQFZbQEJoerZVfHYuYrovv8HCV6qZTat8tjE9hhs",
  "key4": "4EMU3Vj3SEawYJhLqH1itg5i1hV1KfrynYTtYUrzmFVjMUWySsaVVgWAsNqWxKfpoZe94t21egz1PGyGLJNrFUwt",
  "key5": "4yYV5jodPAJ4k4LdikVd7aERpBn5J15jk8Jc21zqvBgbNnDzG4gkX2AVNCz9BnoV95DsqassfWt8uJKrWbzzCxVG",
  "key6": "2GRjQwcvW5eUHgzXG8AtZUJRwtD3AnTo9YpJXwDSja7uVcgEdUREKjvoRN5nJKr43ZK71NDnVZ48noz6urquAodB",
  "key7": "3v9qNBMzF5NGEHyu1EUGaxydkYKp1fD1L9c7z7Rb6E8xZ8ZBzNV8G5BvcmqDYpRDUxqzEBA31WDjoKM4qsnZzrZj",
  "key8": "2nPDp3eDD56AM6967KzT7DQRR2ETRFDFLtg7BiREEGE251mqxrwxwTSLYowfDKe5pLCXJ3PM1MayfDrfXDkJNL3a",
  "key9": "ZCvXjp4xXZnkHZUWkM5Jh6SfxtPrDTsGBvg4RXAHP8wGmMxEP7MNEY2mDrxexd4Pw5VAo36XBVaiwChj8i37eon",
  "key10": "2Ek45i1JjKhMtGK71zqjTkPMDvv4zzJNnRpkBV9ZNkHyLSLG2jsGUSg3SCwfhU7S8EajwxxLs6Yca5iDaCL8ygEH",
  "key11": "551vFAtXXd6g4oQP1CY3YkDZtnEhwq4GzqWzEnz5RS3sWdDbD1UWvPgrE4BmkAscGeHkaNxVuBYDNmQV29XnXKhv",
  "key12": "2csAg9ToL2pYPSUCX8CPtkGfTSWPAFg7tY5KJAi16bK5ATS6EHp3ZpUX1NUDrnA7CViMTyoQo33DqsqHJe5ZZbbW",
  "key13": "2Ji2TVrRp7TnWqjtW31BA8bEfEq4iEzTVGRRdFoFtZBAgQ1L19ohBLTL1NCh8zwA1M9AaP1wq4x1zinsxq2pgfcQ",
  "key14": "35NYmweahwwSLVx5NBgCcSNsUyddUeP3FMtwD5ikNazA5fj1Xv7uvCuGvNCx2AES6fy5uSV9uNSjASHqfhGYsSBv",
  "key15": "4gN1JtKdxLMgqTU3zqy6uFh95Bq4h99Ppihod2AUW9P1vHS7TuxUsaemrGfRczo9xZ4dHXAt4idK69NHnyQcQqEE",
  "key16": "3AN2vLoeFFmXtJuyitgse2Xt7BDmXRmWbXzPgeQ2CryF6rZbEWijNkcFvDjWPPYZMWkCbuGGYah6ahSi8FNvyDgN",
  "key17": "3vN3oyPSigKijjAkJgguuHvKaGXMqFXzSXAoxYFPBqwmy8UsAA3vj172tQxSpDaoK5BbKSSELkchxqBcjksGjHAE",
  "key18": "5B7pigSvupjtXF8ni2sgmNAW3cYkuryUU4Y5Br9msp8CosfkXv45hBrhzvBo1v24apguTYuNunHpchaKgtHGBomr",
  "key19": "46vYEjETegbiZ2HYqmdHiLUWwgDoDkdUCrZbnrfgB88vqBsa2jk4mbMiXXaGA5K1k9zYrUknYuWHw4PnXSsX9eXG",
  "key20": "3kjUYpGL9jav3eiSRkT3gkcDVyso5U1y9fKNebqjfHZLJ6XvQZk5wksMNLgXMqTYnQNXZYDVaRiMtkFcBDK3NRc3",
  "key21": "7Va8yA3J82tYVybLhuuNp4aWSFLLHFxXk8NeAFbR8QCJduA2djMTD8y8RW158SQVogiNHbvKSTd3EAGhg871DSB",
  "key22": "43TkVB6w7na1tyW31ByhKhxr7JXdqURiL56jYupHcfDXLdw6mUeUN1D2j4YHTfsDwfBUYS94VLGECn1wZL2X4pP2",
  "key23": "5ARczUanYWg1D9KTmjEvdoVmtf1XedBFUhECzhFeVC8ZAfxdxxxPxzDuamgsDBabGxPMJErPDupA7dynAD6xBcAP",
  "key24": "4T7TxqrinD64BWvkYcKEmdK15naF97p8XcBUVkoyVPH6n2hpqcPAP6y95S7W7EfBKTVjE4guxyTUhmfyBeE8psSA",
  "key25": "44KGhaVsVFxRgkd5oP22BKZavh3qJ5mmCMCypjT1gEqdhWgFdjFiaCKQmKzr1UGd1DbBVazoQvR4pdsXdwaLpP3R",
  "key26": "3BK2otJg3NBtNMQFQDV3NSyoHPq8n69X7Azo2ojQob4DgCU7k53yGLT1nVt64ugRRbkpxjVkWUSR8FaofnpP1Kjq"
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
