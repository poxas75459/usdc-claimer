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
    "4uJfcYH1JcNUoY4QHDETztAjuXa7zr5WV94JrQeb6QtJyonWJtZwrGBjXmSCiWW37c2k9q1f45vwcuWmkcuM3sZo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28wt8MkQetuqExYqxxa8otiYynteqauv8ikWRUpTbMzvje3uPHoD1prbDM8qK5a2RiGjuz91yQMs6pq1CXUpKBDv",
  "key1": "5yiMLDw3GwbAzQ8h3VacFFmM3hSq1ML1eZ7XZEAU6kceHK9ggYNjcLqiNg4uL8jfguGUP4vzMezdTMwaPDpJwPt7",
  "key2": "kcNmnL1MM8yGnKYUwb4r2rGfcBYHHLFXkC64yi7QUyazBzeawmucktLU5SQyHr4P7LbT1TbFo3eQZMKnwko2NvJ",
  "key3": "3zzdpGsxCaPVJEETE5NJ31FgjeAnBvRkKV6iRURJTBeu2k3fXAGeHNf7xRh1qCiW55CQnVxxTMEut7c56qcqtXZk",
  "key4": "ucteqfHrti6pvU9gymj7s9VJ2svfQQxQz3m6WmtV8MKEKxP5G36YPfb6ZzTVRX9K8m1NaemoMBZjGQmVPNQ8XfZ",
  "key5": "3RUUiUEVUegqb7gva6Tu8by6kwtydD8A9ELb5tizSV4CGiDePgFaF8z9oUbys3XMT4RgvgLEEogN3MPRsADjj5YF",
  "key6": "3MyHgbwcnV9qaaBi4pFiobNg4vnKa5AfnzRNDFHC4sYNSMkEFmV9kx2VgaFDRuPtbsza1CJBsNRYmWvZWQcXmfct",
  "key7": "3A1adFQJuzn7hykCYQAytA5GX2TYv2iY7GNDufkXJ5MztdzHZZKYxYtcMKUFFwsVaDXK1ksxmyL6ADn9LF2shmLU",
  "key8": "5y46g45CdHuEg7rHxCDrFVRGWVhDCgY5fNbMXjhPT8erUqRckMquoqMHX2Fiyk6XBasi7ZMwwDkNnb47xvyyCJgD",
  "key9": "3o7iAnEFMRWvcybGXyuzoHpoFpvhgK87M8beZpyntqeEeu3Wy51DP8nZScVojvLnpuDPAYG9QJqSo4gL95mpEjun",
  "key10": "61BBt7AeuQ9WpF62hHxpgRq1g5tDKLqKXdHt3y3wqze2R5d75qgvrV3BGpg3YUxPZW6f9jr27ShkuisZH6EgRWzt",
  "key11": "4jG6b78FSVvQKEWP16VZAQFdeFiqRTZ4nPxMdu55hyhnJ5Dzissvuecu7shXfGYGb54kdVJKhYKkoZC5z3tqdn5B",
  "key12": "4s18Ha9SwWTAGfy7AA6SJiGkYqF52pgk91sjRy7nH6UKaZkqyXFMwGAv2z11eTcdU5rop1Wds48BUa46mqk552a8",
  "key13": "4d2HFJuZiBbDtD4sHvM74hqKtoeCEmnKxV5uyQY9HZnEqF94UU64xupWLDK1UbWJKpKfpvWVrcfmQ24jtVyuLxhd",
  "key14": "Mu23QpotgqX8wwhXgbihnjnB7Ux7zjdZEAKZypMT82rK3pYEJkNLGJPokHNCenfyvuz6gyiKUvt7FFVtwERawq1",
  "key15": "3SYDgtMbqENgPwmefAoz3PcMA6LapCsdVHGd4fnVYBrohXjq84uTSpvVyGX41Vsxeg4jfcUhEf3EgfW28yk4xXkZ",
  "key16": "4TymfTrjKWrtxWYSo3d4PJKYnoZWUGwnyMqqeLtYnnA9vB83BnstL9ZNreBEKT8zU3Lu6b8trVGrYFi8cyyVocLZ",
  "key17": "3Hp5D1k74n1GJw6W63wrcdXzAEkPVn1D9EJ4cYXY5pg11Wua8cnkSWQ2YsL9eB1eFZL9fbaDMn5dFtkzDgKVbWuD",
  "key18": "4eSULmQjqVwH3e1bJuGezR2MSCSdCw3xxqBWXYGgsvSmLCeiR3YieBXbrguPR19GmzSxQVYr7xpjNU5bH5vnFZzv",
  "key19": "4rDPm1c1AUrWcq6SnBTfW6zsAN1jwH2ztkCXuC2XPGbSnamXjbWNEprcp4YCP4mA23iPcAUXaY1RBCdafGLJrfj8",
  "key20": "56PMbDjVsVd6CdDqSzxU5jhJw4Jj22kd6i9uCKBhjHem4d6DwSRR1aFVK3wmVMgWdnbbmkCpECNCAzhFhR3EpMve",
  "key21": "2p1UY3AseKyGcagiSUTqs4VBLXKuFFNRu1YX3Xm91Xc1RfLAUB42b4CQKwFfGDDQguWUmPVR84UsdETfYDbX3e9u",
  "key22": "2ZV5tGHQB1ZCiSsbA16vrmQoznEztUBYkFiMRiHKHVdpPNaWfTnUH7hyh8mx9xefbNfRC3EmNqt3Skt3C8nDExXn",
  "key23": "64LiqxqsVi3aGFG5JBximSN419jJ1yoTecJx1sgkenjVwPvwv65rRGRqWHtRJ2EAXi9pFYZKRU5zMvRiLSoECWL2",
  "key24": "FfJoGcZ9aLwcRWA4yoL8KqauTS1bSY5K6TtcKd4sFAr2wLvYyTCkMoWjbCtcsuTZsWF9htBSDqHpXECgzrpo3XE",
  "key25": "6aBWaBxoNiCqxcebR6NyXjfd9pu7U4WbB4HD5igkZRYtA8kbbbhHVFeHGShQGue2r1oGUSd8Zto9vu4jD5o5xXf",
  "key26": "38rz4VLUSkTf4bL22FHoN3je8tRKcwARL8d1di9bbKHxcXkeypqdVHB5oQLBBC6eSUj3mgcDxx8HC9qrXoTyXizm",
  "key27": "5hK32CY42ghf5nwAUcmFxi1Z1MpvTbdLM3tX4KaoQrbk1pDnigGyVxo2WjriKLvmWZShjikQkPdDF3LSE9JkAd5t",
  "key28": "2NP2drhw8QeptchYtBgM9RofYnoxVrLcLwie1dSRDRYs3YnDXskuUxtzcvn5Ffb8sp3qgnYDqF6JGAqd4Fwx2hEn",
  "key29": "4kWy1XTLe9S5Lc1sjNdvzSP3g1VfbGh6T3YLks8soCCqJi5WWyXjBcK5Dz4dUkgTK91CgnvwPfMkC36gV19XEXkg",
  "key30": "4Bsvvkco7G3sMvm2BFcRUQLoT8bBzMt4LVL9CsfBijra1ssY7yAEin4GBoj6Jb9sHBqadety3oAYPD4Ls9aCxP8j",
  "key31": "2AdDnWjiNkRNsH9DXNMPHeagEKffbAuHGNwFwLrZCbkDfLZDEMxjw4cQng1C3MEx27bYBPQegjdFXP7bk4W8Dafm",
  "key32": "4DTduqXQ5uP58S4mi6VfMcACktPZjzf1nvTt3FunuaScUud4hpAqBKWHjhFNLDpCSVSf7J2LNWbnxruhkfrQc6mq",
  "key33": "4SkzW9eHaYPyV9cwsQntSb2kf3gDmVkxs6QrD5cGJwZNNsn19kjp6TTsZN3oURnrRgTDAMNN4s4KHSxXJafXBTRk",
  "key34": "3PwCeMAGpRALSSc1VNkym75dbJxVDGPsYri6oqCpfBfDvWXDsSAukveshbgTK72aYjQxgvox8iXrmBSor1ZhLnZk",
  "key35": "2Z8Pou3JVm3Z7diZd8LwtQGSjJaoPt4yxtMn2okkQJ2anCurXFimcN59c8FdUP2TtVFvNJrufdgis2pRCXWwPmkA"
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
