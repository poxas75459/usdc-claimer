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
    "4bPHsrYUvt76ugjx3LejJJ2vpp3z1v3wC8GWCKUVK3XjkrpUDcocmazgZ3Ac5mpTRTYGdBSmUW1ecy9P1i65SUeE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zS9EzuHkmpp2kd43wGQsoZSo1mxvDquhcyod1jULefPjzgtKne6BpKHGAYFaGcfs349qmw3jYKwaND8bXi2f4Ki",
  "key1": "2pdr9haUxiYkqXf4kx5UBpABixaPhp6yeBzni1UMjHNmnXKdPsXfaC6Ga5R8fSYwKNhg8ubirUF6by51kchQKQTY",
  "key2": "3zJHubhwk15eKgcNPyjYhvUCSVeydcGPQdKjLrgZHDKHkPMGAggWVWB33cAVLLTGXU6MVmRTT1SDLh9GwAhUuXTK",
  "key3": "4oWPz1LDBKFHCDP3fYZv9FPWkRBDenhtdEZWJ95r79CfAsCBAqZJLZzXLHTSBBEzjCEV9Muev9g3QdPPzQKXdbxx",
  "key4": "3KRJkWu2ZmT1JwFPMxECjV32WtapBgekcSigM2tZBd8sB2jttm2UHpNp5zdD89VXMj64f6H2pfXJLBTFEyA1h44X",
  "key5": "Di85z5KNPn6uxxwprBKtwUtYoiP4SBK4p8MuqwmbNoazZh4GgycHkC848z4228VxrsRad2CesfnwdSwjvyLV95X",
  "key6": "4h26WF6wztGWYfudg81JkBLf5FQgpdGtnsaGZTwVC4san7zFDc8skAPLjcoKy5rP1hVFhTqQ9eUSuBNaoiSjNB4h",
  "key7": "5gCEZBR3RWb6jhwnLCb4kwvnZNdnZoRRjkFaNJPPjfgqZbrNHwB9Ga9yn11jH4GjcUdFRyPJHanx8UADXP1mQktH",
  "key8": "2wzNhKb1BL4npgTf9zAx838zFeaPYDJeTex6nYTs5kgzq2yyJrsk1yyrfmoyRkTpvWPAxHhyXTUAoC4GGS13wELc",
  "key9": "2FXYX94dm6A65pq7Bj1uMVPKqog3DGxDRT54kynmamYyiwUQEFn1YEZyhRAfUYVL1ePUZqB27Q1MYVanWr3EFui4",
  "key10": "MthSTh2YcNLnoM2HvDvf5hYRqtHP4zUoHYrNK348U76pWBiyvG6bGNp5g3GaQUFTfJutVcuZKDWDP36GkA7JnGe",
  "key11": "ZHq7yFyHp3yaJ6ZdxDvc6tWq8Z18eNLXuYeq9pSWkJWmso419ty8CPz5GHYQ7j44vBtFXZrZbMMWen9uWCsBZ1j",
  "key12": "NDw9gVYi9mVy2mWkPi9TXBMNdqFWQi3casniwLKb7StyJFALALuvA4MomSPfd3pGeFEgen22JMbbCiR4EL7AtYM",
  "key13": "5hjfwSwwqt41zVUwnuibZEkmZo2fixABrd37yuWwzKus4PRQk253HvRsxaw9dff8LMJSDbxdD8EWsF3z2MysUzbh",
  "key14": "3cucE4dKQnxovNfABwES3Va8S6oCaY8gmdDJjUJgXkvkAEWQLQvmdRzLaffi9edEoe5GkzDLU4RWBNMdyUv49waF",
  "key15": "2M1oiafX6gtzsM4nWk4feZYj3tskYnr7b52Vc2JN1hpAPZr42QRazBWN73nVbYnFA1s9iUS2YTVWftDHZcgUd3D7",
  "key16": "61mnFN4XE6EMqin9piCxeECmv2jqrJARm1NFpxaQhe4xXMcTfwhz6a5Qd3t7CchSc4MypPGdhywHeyGvwntSCRSJ",
  "key17": "23yzo14iNWN6325cVDa5E4vkAyBk4sf36FZqw724vEKZ1Dk3XtAYc6FQuwf9HhCs6iJymwxp1vKJmbyAeWz7DWRX",
  "key18": "2jdRV2bw3FvptvzjecnZU7V4owkwSfA5FaLwVqg48MgTa1sbUQSdCyQiiuHjrG8oeUQoxtrUK6BcNBVWfJEKv6dA",
  "key19": "5LoWgRATpJf4NvxtasvPnkrdpyDswq7N3pQWggUKAtRXbdRb3AYJrXAE9fC9EpmqiuRW74WDdT7r4TkhAEBV7kXm",
  "key20": "hHckZyX1ZL6kSY4o1muWt6TKwQ3L2CfxtDBxcieDoWzPMfoMPCiR2GZBSeWve9ULE4nCBqGPA8coQCdpek2UPwz",
  "key21": "2u4YjojtsFnWrREvf4DTkSgr9j96UFpTtjqvryBg3knuvkKJ3rXbqRsJZiQfKsgMmmQu4ZDcwrGr28gg3NbJUYM1",
  "key22": "3pXvdYn5nkSwgGSxYsxzP8g5HU88LuQJUYbtgxGqa6ef2PXQUzcKsGUHzA9JGK7oZy3gcAwanzxGDVLUAHXhjfAE",
  "key23": "ZZDCk5nPM2p9a57VSExw1cFYCXkD88hMviHLoeByauy9kBr4kzAfYebakGkptsuXFDJNtATgSS5NWGpSPvBW5tr",
  "key24": "5wikstZQKugWY9KtB8X486sbSqdocyDLrAeMiVoFL41MCkyRB7a2NBLMhKoUd9Zn5PkoETBZcsHCrBrKAVHTBmW6",
  "key25": "XxKwpizTYmSu7W8Wa42JYEqjDi7ya9FPPqk7T6HJkyii21GLBxeFEWwKYmarjuzdoTZHSkjbSvTnn8kwVSLTrDv"
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
