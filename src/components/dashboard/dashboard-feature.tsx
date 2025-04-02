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
    "41qPC3oRTC5Liynb27eLUGaWtytS1LuBnNKWQKifS6UhpRhCdoQbuDX3xyKXeSf4QEnVMg4av7tBRLRzsazcgRMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JRLSmEcTdYfcNw7LPwZP27BW7YGzED2MjNRJpzbP8ZRkWEsbmFv16ZjGyuR1K6oUNMCZgS9ooPzt6ia2XPNmehW",
  "key1": "4GpX6bRMiudZFmv2twVvxs7Wn2hQspzSdznJe9dsU7fJBubvutk9PRZJDLXA6bX4co17AoLh1LgmxC7ejfbq9M6N",
  "key2": "25bx1V3UmLD7AUEXsLXsxMfWQLrmZVPrp5Tn4FXSmoj7Vr2CZfSJUcVnTCkrZH1V6m68Z1zz1X6rNzjwDMEa5Qzi",
  "key3": "4JqDRLn7Mk2oNhQz5ryKcqKpvz6WLcJTmJfaFvMZWSFXzA7Fv2LVMR1K1br6mBALYmNRwTGbqFmfDLRD6PdV3DFD",
  "key4": "2CshQcJ7DH9JzCSU48t8tLPaGCBazSCyWQbm4KTAvqsDYuomxx7aznsyQrcQCPiYGkadLGMzLVsNSYewVvgXDkcz",
  "key5": "XZRNwqiLcoHWi5X39vK7tjMnsw8aSrqMziY2UskkHFfLKhLhozXTvVYxojwLptAkoDqH94dPaNifT1ULwmadxTT",
  "key6": "2UKujpNA23NkJym5ZT3JuGBJr855zn3ZTBURpn4WPY4ZKQdSFYG5XKWYCEEsSJpDpnhzFAf2pMhERsJ5L1KXefaj",
  "key7": "2qSbM4nnNWEg7UaumhaqxsQ7FTutBwRgwabj4oHxXAUwvzkpX4ktk3MStkgUjVWmH15d8uvk3MY3rfq2qnJv7xJW",
  "key8": "E4BYEh8kC8FSUcgmK7bWno7TF9WrodNpXqKnAdndF9mPhY28jYBrntJZvHNf21ZK74HBGUnybceKYzpVzA4MgCY",
  "key9": "5od6TDx7jwUEGqUNXZJHf13S1BjoNZawaDLAiE8TGrW4F766d4ywV31LxVjbsbvJL4wGsiLjDWmwan9jSN3USfU2",
  "key10": "29ab4ZBhL9FsjA9YGBeS29oxT211dzwLta1WHiGg6j5nUXRtdPsATnZVWXyZc2JgU2npyosqWuhqGRQT2EW2zGdB",
  "key11": "3hNe5WjgaMUzAnGvgkti3y9vsKYPdAdtkaf3KYHqr2Uw8vEi8YVY62Q3s2NbH3tPVhUmGkAdbCiqUarkvYGkwhhK",
  "key12": "4LbJ3qEYATZ2mRKbZYpzpjFisYe7x54XDcNMdvppn6fu3iDH5dMWNKnRoRU6CLounSPtNTjfu3A6Pn4m99yPm7kU",
  "key13": "2E2PmyZj1j63pdmoTJVSn233yqkNnFcRsaU3eU9Bs85PouNy1j2dJ1hnbxGgXVi8dnpRYVKCCT9GW6TYaCq38Arg",
  "key14": "4pCwCLPPSQudsiViWLr2DNGiNR3AnnTh5C3w44V4W2JA5qVY3DLqnSrja8B525LAWDSBSiSzxspMwdU3vxNdV86X",
  "key15": "9biZeCSWmcn2TiZAdutdJ52RB37UJMK83T1jjzvmceN7oiXbX1ShRCE8C1PwcsTxde8EVhbjvRdrNwiWBJwPKY2",
  "key16": "oCj27bCwSE6wkUubTz3UeQ6EMMSFL5Esmyh8isVY9AZoo2XgkrC16zqWgiQH6vhE3oRXAwDW8pSNnUd63zfzV4z",
  "key17": "2iNVoMZxowfetjFumYiQcAMpXXbSsMtvoq1GcjpB7ewKVuwVNi4qg64ra81ciDKhpppMU4zcRLLLy34LLHuoicpv",
  "key18": "uByGNfSxNaznBBJJo7DN61JhqSo6iMPjLNcQqzDHz3Y94cjQg8hF5erzSdk4Nbv3LdjXa1SBNCNRJP2veA2LKtv",
  "key19": "W1e7E23g2N7KBm5TWZhz4SEz9giCY4qZ6BmivdZV2ei81eNfrm5uJbq3nPCbKTxKbwuVdM4HEUj57yrE8yohQRa",
  "key20": "5St8ZTezbTCLF3ywAbHVmdWeoBdjfmLMYyzSPx9XLxBZuzEfV45NBfTUibU2tyWTnHQ215yG5Mrsr7CSbarqK9t2",
  "key21": "WAVCAZYfMooenYTbzHHbCeL2yWdECW3vZwq2Lw1RdgaqKZ64GyxEBx7DdNjv4dqaBNzSWLKFkUUERSSg3X6naph",
  "key22": "4BtHv1vi6PbEZGXXf2bMChwuBsrpkWaAwqabpDrXnG6chDQvqucfE3hF4q6LtUrLqFUKSbgPG4M4jRCBj2mnAhrg",
  "key23": "2s14aZqyhYCJbn5mKtKJGPLPu7yyd5H55bQnL1o2FfXD1dGwf8LFeEvdz6bX2oUwbXto9hz61oTazzwj9wYrPbRe",
  "key24": "2CEkZBQVNvchoahUxVAa61ME4FBMEd8s97gGwZnJzrTi6zxoAAwYuBqZw2PTtQgVf4iu93xB2BvJKMi9pCJBMAmh",
  "key25": "2yAzKn6UV9LD2KdT6z2hmGfEz7o1NUeq4ZYmg8nhMFK7x5Gzbvmmob17CYs5SUTTdHRNVfNbFsc2PjHCrMBdvu1Y",
  "key26": "MmbyEUTMifKcXXsQkDmB9QhcF2LE8Z6jZML4D4UaU3T8LNRPyx6XUdHyRCUf3UzhKUbZgejH9ArfjZhrjEJUeBT",
  "key27": "4pUVP3EMJa2SYtRttCCbakAXTg8BN2CL51qgBAehsDyvBbPpMBbN8jE13GHKDCyV8dQNmS4hFEiMzLzXMZ9ZHcM6"
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
