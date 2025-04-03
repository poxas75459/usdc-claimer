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
    "4zgCQz7c6dNVMh1DszKfvCwTVhAqedNA9sf2MdNz7gJDvgs9dzgHyWcp5pjGW4uj4TosScNSjom7aXt4vppupzcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDB6Xs14THEt4H7QzRp77xXmnGmjmzzxtpnZorxQjZvdys4MgsiA7AhF9im4DqNizxVYR9fGk5ufE9GkfhXm5Eh",
  "key1": "5fm7urEJbHierNMLRoDSVKiNzWZiYE2uP3x7yoTDad3BT6W7Mpic3nck2AKvpbcsymjWeNX1HuCij8Xfo67UfWp",
  "key2": "k9mXJRkEr9JmumfSc6X4mJYK6f3Mv9aw94zU6gBCDokTrMncexD3hjHFfsYM5xuqa81Egjd4WMzAsX6PuRmjD1t",
  "key3": "t2y7bV4V8m7G5mZgeDSspKxWAESBc5kXHhDstJ2AsYMEg4J4swDLFTsYYsW9XAoaGaEwkw3BeEqhF5gGxFijThZ",
  "key4": "5AMVBvBSSfuUCFuXzHEZvWxQ9JbvFACURGHpvMN9gBnizMmPocxW8CqDLw88VAzjfqbbVuDCsbKtV2LUDiLXrrTu",
  "key5": "5ucDNCMJsxYG8qUCYkPL5n3Ryz8Um7pYU2XYrXMjKcoBkLLDAmmGku8VzgCnYoNFqfeLdTYuPvHKpVsezfPJFgYp",
  "key6": "3D1VA6sAZjRkZw3ooNrb1z7BWwtJauLGSm6hneTFtMaJ2dyZedeuaANphcfTYt4S6dZgArjU2utkuBR5krLvzXAp",
  "key7": "2zLxbcLN65dVnvyzoivbfbkVr7ciuC2GvCbLQkgLqC7s1hT2Ketc2cE7Z7Y2iRwQXHksVSLp3Sh239VQVD3bYAh3",
  "key8": "3m41Gou7VmdqN5HeKpQL5dHcyWnJ7VAKx6eDftxjUHSW9TJqRohiEXhpmgWEar6etB29o68fLMdaLQyGxzcAevNt",
  "key9": "3sRBcqt1uu9WEFVDvcV8FBayFEYjjNLV7Wo39QadqsEX93pRrfj99NvK8ZTFdMuAKaDmEyUMNtGv4YvH6Rf9iwhp",
  "key10": "ShDeYMJLdyTdd5M6U3kc8v46okK8uubYT5wXj5m8DNeP8tikcS5w4FXJztfNpnQkmu3gaH1MGLzdGmo6e27XNFd",
  "key11": "5cujNP3zE4b5ExUYm259wBjFiy13q1LVzecnutbxA53YmW5xveRR8rCfF8eQJDHuLfhfT2Dh2pbRVcsToEvDtf8d",
  "key12": "PcK2DQGqRQ8gdowWZZ5waHX6X4JG5mJotXDfMkpo2okTvYVvsSgkAFFm5obqopL5uk12E3ZcqDBpdGHPoGDLcbN",
  "key13": "3J6BH1mg6rpERczgQ5SpnNvQFHZrcDhvaTHGTNMmbHc5rL4qivx3Us65LmWrMseJA975BLSd4U1DT99pqU7q5r68",
  "key14": "3MeiVtiTVdVGVSQZim8EkxUBCUkz9XfEUa8Y6yw5QivMbp1erfGivNwj6jcP8YiBxCGfGmq9y3X7Go8Yoxia3TBo",
  "key15": "5y1Epb9be85ptPgSEhxJrmxzbFYo4Y9E1okpft7EUwCnHzchQje3RufAhozk4Xs44jFHyAoyLJUfcZrvcKPpymn9",
  "key16": "V3r2vC3Eu8HaQwSfynyrhXwpyzQu4fof6jK8ZfxnRQCxqpg2uf3LBqHUbD1NVhtCCi87vi6kpT2ThDxsf6vxbfz",
  "key17": "49vaJVP5FWa6viwX3KbWVNvEW8FKuHtxBf5skbNqCUKt45sCPTFDMRhv5fJDoMPe4qL6ixATpAhgnpaLKzd6xnje",
  "key18": "3ppE2F6wGf783W6rSX8HVrcScGr1P1PZpHHy9Zyy8CVPVcprPCBCQwrCCi2L3udxG74mtijqMvVrpbe8zyrczN6y",
  "key19": "4VCUnMR4fjFQSjgQZXe2StMG4u3TrssHBf1vC815ZEsL9YiTmGW41uT69PTUaxYiT7EZqXR2Twh2qLUY7Xdcz1k9",
  "key20": "vYRa7SW5VkhxUHRs5HkfrPhzCv19xowk7GP3nm3p4PxabSM5d4m5X32YwEZBvk1scJ3reDMbeCYVRYzy2sn1m1Q",
  "key21": "eWWt9hLCnWScZLHJEKGdVBGvf2qrDfsup4hNEqVq2LWC5vNMNLAEj5GCzAxncNjBML4wRqV47fiQ3KA5EEGtkA5",
  "key22": "4h4Gkm5NTyDcqPWqx5rqYqhxoTTyzM6QrCk7DAPwmZPw6zUCuRogDmS4HNt4QCDa5Hi1gaMq69BresTASG6nwWTy",
  "key23": "WhGaNMnWwMf2uCtt1kncpcwiVWJbonCp13uFwJpx1Uz5MH5Mfpe9rWKV5uRiNaiSDEdcVhkzctAED831qJ7V32c",
  "key24": "4tpDfnuZ19F3ccHifcmaHSdtpHgMtNDVtJ7GnpTZR6NaRpoAogn2z4MomNJwRwjGKF69JnhbjrhmgAdrphNPT5BN",
  "key25": "4t1brL16Ppv7fNmea2bA7rLLqXyrRvVfWVJUMyqtUmSDFYo8KviLcUQ4AuNqkzxAkuoqCEMKwsjma8a6D2Q3rnU5",
  "key26": "4V6vbw43qyyuVAaeH7EQhYy9mMwQUKfJAEHQ8qurjRedan73JkEhgivPkDWYu7uRf1unGjL1WAvRgNrfNk8eQPqF",
  "key27": "5C4HXxgmJk7iFAyhagBa34pkQ1tpUHrsSrNoBEamMkYWCYUeZAKoeyo3J4NVxy1FkmSRovBYAjDAfUBp9YmcMdLX",
  "key28": "4Dht5EwFvak6hMxHYtKQcYoqhUMHxU15btnZUarTV5DLS9jHgBdV1wCtwDV7ecBBQ8GoyyVBNbo5Nfys1mxTNJ4y",
  "key29": "EJ3s2WbQWbx19GzpjwABZ46mEQcopPp7z1X5oJoXx6bXJt6ARHTrt4rMS1U5ivUNQuqNLZU8X62tyKB4sQU1GdZ",
  "key30": "5HEGVZsYiXaJ5JEPeVUTdyG9LVXVP8xnoySDiYkrvX8XWqNWuK1G1GeUT3oB1HkMfXPybKQwbAapV5r9vHKjUSBi",
  "key31": "jR3Ndm1Qa2MjCKEaAPixDgfqn1aBDDwJ1BGeKPuBDEBZEFrf6w4DVbSpJF1J2FCGEZMo7uF5fwHxfdwsTUvx54d"
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
