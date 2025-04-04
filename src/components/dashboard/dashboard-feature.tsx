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
    "2ootdASQ4s4aA3Z3G3Z3nYL21WUdzPPVLsSErTbqwx2KMhg9YUmFjbgQD1cAph6wjYm1KaudYLZm4gnYv2wfA7zK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkPz6yXwVJnAaspHBKrB8sCuVhfiN9B3cfzv2BgbopgthNEGLvjrdGKf1bichX7KotoUd9BcpHbktpDujp6RP1r",
  "key1": "5Bdfa3bqQcdDPU38TbUcU5N4DDiF1WTx2NZ9UjDY8qeqTN7XtF2hkNchHKSMJ2CWcGCVb7kusdJEdxTP5x9FiBww",
  "key2": "2vFavWK9JgWryBZvxSiod1cKvMt5gw7PgQbWEmA4noX8XvJSgwpgmYqSiBywbxttzvrssuReZoW8jtbTYUTJaA8s",
  "key3": "4vjRD7P2zSFcK7YWzedcXXK5SSKaCYcTC38a2fm1xcrBgeBpaNgiVdwNefbVM5dLmoYdaBzTSAzL54NGd9zQETz2",
  "key4": "5c7A4qG2vfFMEPqRfeEKDTRqRKnHwAVTVn6waru3ZRj6VWwtjodjjrDChC8eY9wTMVHsnrH8uFSyfYfGEpQ2fhuD",
  "key5": "2LB9cmp8szkghx2LHaooFND4fHp2NoZyjveoUVrKpSuz9WYmyqWkTWyUhc5XFeFrh8Mc4tgb89Z4unGeks4sPpBg",
  "key6": "4d5A3w3nKBXaXsWHNqP1vgdXbbmcKKgXzCN4bqvRMfgb6fY7CxSk97gL7xH7rr8UKCnVnWuv1Mi1FVoBQkKdCWDq",
  "key7": "2fPJ4dTaybNb2etVq6ArF8T7NxJ46Hkc9dC3PCLSyQKt74ndzYYhJHUK1SM9VpP7oHQz2SU74DyqusvuanaJjNXD",
  "key8": "37gBJUhfCNkDDTLZhbsoRV7GGWFmLreXKWAWjVMicsYAD8huZMLrwVyBSTtuDpDNwKwUq6xNbkQZ8DhZuM2Rt9gK",
  "key9": "3Eji6wqodPJP4eviKt6bymDKR8CRSJR73Wxx98tGcDkHsLcx1K3iRQ34aYZRrshkBJiUjsjxQMA2kfwdKqqEqHCC",
  "key10": "5UMLs7uCRNASsLdSTDkxKs54RT8JGWid9XSYxYkcXK8DdZfsV8LqJNGpD2aL7gHWGdTexrgwehTDG6qiRRnvFE7n",
  "key11": "5Fr64RuYHgFZcZon18Dqo7Qn3rKqn8pQ8PraDiUukBUTBeLRHtkBUyXGSasnLBQTo9mr48GMDhGaXjNe21PmGc4a",
  "key12": "3CDK1exTS9rjDHLRMCag3eeyCDNFBByjQfmpoCQbk1RXWw6ndcuU5xbfYweJ13vDe3avGcGdPMcgndfjyRZaUTaN",
  "key13": "4D8w6XUCvwE4oShQfXy9fuLQ4PePJKggEZwgn1fWBN1jNncTe88AFAntkLZx4aa6Nh2CsxZDwDQDav2qS43YnTWP",
  "key14": "4GCtby7y27N6KTs3Ruf8Xht3bTzLQ1K8Hzq7E3WdjhWM2zRtwrD1wYE581oP2P34qi2jN4yr2r9XSEzyTJuwrGdm",
  "key15": "5ZaowqFuSj2cHz7h31vrtVVuwBBWx2H5DPVN8JMsbi5VNLKn7UfAoEEBgBeFRYxQnrCXuC4sKSS7am2rDAbnXff8",
  "key16": "2oXvHs7arRReqGC1CbuDsvMwrguhXTS8HkX6cYJKUzqu7Lt63VvKG1JvBrNq3oiXQPxRFEuZ1eGCuewmuehHJj7n",
  "key17": "4ZM932tFiTyTU1kHNFN6NN8g43WKnFhJkXw7gH7HaoZS2syVLrXQuzypZ9WRDukfypBwYj7dB813xK9hiFjwZZLC",
  "key18": "2nyeQ44Gm6buMStGkYgQwMMEdFAycEQ5MR3BGUfnXxAz8L2bt29p5dzjevUC38eLCHZPaFXhy7NDWUK1NxRzhvXC",
  "key19": "663GcQap5mUKPY7JUSBBRoBezyPm5NJMVqgFdsH46ocMEuGCmv8cLQF2pvFHMPCrwNNbS5vPVjE7CAuKrwowaTiY",
  "key20": "2V9iMU9UENmQrkg5xnLS6UiKpcFb1zNDBFQLwdY9xBrV6ZWM51kutQxz8RR6FoPhhv88759pWhv6jGpGosG15ii2",
  "key21": "49dq4xKCVds3JvDAjr92sFCiKupvFRP2uhfz3sTY8yJLyBnZ5LmRFnyqtebWoHA13XzemU6RFvLRuBvV4HEwGxN2",
  "key22": "3mFov52C3NHB3dKKcvdLpzk3xcWyJczwB4Xs2hgrBTUuci7JfPbK9NCEe1HpyNYuQFmasajSAW2J7FZ83X2Rx547",
  "key23": "3TbXHU5nDgrMnENuCuHoac3aKsyW6adWHSEn6SgbnnD5V5ESpx3LmDxUtNvkd2vNzNz3WrkgLuNnPCn67XFC9TC3",
  "key24": "4Z1xsBstDRPpuM8Q6CK45PWMBgsSFU1LPyC2JxBhqH8BhJ5CEpFLnXsQGjHammxXbrrqPK1DF17FBFC9D7WV76oe",
  "key25": "4m2nSEF3a7RMhjMGhT1GLPTbmBmswtqW5HfMeRpnXrgbR3nWMD5J3jkr3LxzqzcS6u9MRGehpwwSAhoZkQtxDhVo",
  "key26": "9QZe4MqNPLXiRCq8Dsn7N8DMH4vD6WFAQhXwmRjhqbmDmZCKQ9tguPosvSWYuNBWWyGCScdZYRJPjg95963vHoh",
  "key27": "5v3SYq3torNbL2GTqXXLLWbQVAxjhQQmj66GUn2Eaak55pKsDXhkLgKHo8LJBMycvQ37SmR93EoerLbowJg81tyr",
  "key28": "Gw5cbggvHgQ86wS1enPCAD8cmqtoqFeXamWMxTJ9RLx9gvyAG2hqCCfokMMwnM7x8wnUa2GPmpeaT9ztTVnzqpG",
  "key29": "392J6hTrPe5h57T9bZYJ7M1a9xF6Av3cyjF6j5CPGRYQeZfU6zkpPsFk4729QZMZrN4RGW8kasuLS9HXGJ2UPrM4",
  "key30": "3rvj1ZGm6Deoe2RFCrumSc3AH858Km63JNndsU9zo3kyrDsxPCbPpDaP6FTXKUoVFDjQWLU2G1GTtmrsNPWkqenJ",
  "key31": "2wKn1myowXF2uTUVPyfDGBLk4jYHApCiUPwPP3vKUf9Q4Tdxy1HvkqUxYPRURjPSPUDzqS37pHCPrnbQwDSZKx7",
  "key32": "3nZv84Cms9Amb6HVWFzvmkA97sUFm6osCbJYFP3ubHYRdZTaahYxc24sJ7frhgyTVUy4VatFDrKExBKVGA3vxnn",
  "key33": "4JGZJ26k4vbPo3EP1Wadac6tiauNiCB2mir1txwwwn6NNyrk2D57Wk1tHJpmJcPea8UF7QqJWpzM8rHNgMGkeuiH",
  "key34": "2k728K8uzb3EkVM4rZtQtZHiopdZJTte2fADE4rx438KVTfCcS73rE971D6guqDXPvQ2px8QZNs1x79o2ci4Qn6N",
  "key35": "56LNGUpaSbbaxE67ZSqgfxcBHkc5tuaLD2EXL1wZ2avmqFTwv8LDZN9sqUdetfoFKGjPR5bdEZdvWUNex6xYbcbz",
  "key36": "3fAHHcF6tnC9Y3GCGVYXoihPrfAuUG6C87GXZekSQunJH8MgsE7aqWdortRMjzL4W47AYmFqdc4U14WSbRgtWU87",
  "key37": "5eoQJg5D5tdV2nRDBbe8Quymdix6JxvysWBjVmNNf5WPmSibsFJYo1Lwkm7ZbwuvYQYsMeRpqHNo6MWGdZNiai3b"
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
