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
    "4NMYJi19QdiuRdRiRVD3AmzGWMNrGGsWXhuR7B21inXpWrvQ6k69LGcShNEkQZgm5JDQfabMrAV3CyU3SiL4TiPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23wAMPFFyxRBwzB6BTqsDouceenJ5qRmc6aysJijZqgU4Wyta31mSdESe8WYz3mpLQqiEQFv9jJ9ZUYacbsW4tSs",
  "key1": "4mimZFWKaCGiTfGz23bLGzAMS5dVbPTLaTedGKbwzvnUCTqLYwkSj8hp7MjCaA6kjzK8hF1VFShS3neqUpLbBzQm",
  "key2": "2wceJ1FPooYRQi64ao2rK9X2jPfp7oNJXFfktdYBSi4RmhopFqusJAypJ1LEvgLVcbcXLFexQ8Xm4ZbnUB9dgk9Q",
  "key3": "GTxKCtUz7LdqCLwJx4rxx88pYRfNSYX6cS6W854RByWAGjmcZR5hiwS7NfygXEa11xejFHy5wZeyAwi2eV1WMMQ",
  "key4": "4PzvQZnfwcUWwhG7fAF77UfHn5o24NKUF7MHgNdtBt5sajQNMkDJdV5jHbVeq64cU1YbeMThcqw45RNGTRvmWXby",
  "key5": "5ihkAiHcjZausR6xydvHh3f75ALDGZAmekGV453Yxqx3pH1kFgGrYeWnuZE684rSK86bbePGomUKG1QDN47vkyhn",
  "key6": "2DACq1WsdQGcwnWhv3S2DNNSGqgnTStH6NuSxWEztcLptGBkG14Khs9fUNhYGbFZqhqKMGYLmoYNSoKtYwRjG8gz",
  "key7": "3sFYxAPRirBwx1ToFBV2CXkxBh4znQK1qyGUVwecVQ8h8nTmewMHoGwBFDBSBJk26iNfWp1EK7qNSNtgiVEfEg3C",
  "key8": "5FtVGBgQ6NVzurA9uWRzNGnb5miU5t8a5QpGrgm2vKMJ1UnfJP2ZKb2k2pUWUmVYyFC4s8th8ij1krGRBx9VDK8a",
  "key9": "2fPSXY2HQaV3YhM48hJ9HRqhKdvS1pJuheEVWcseSoLBGkHjMJVZGZeCWk999qLiyrLyMN2NUK8B5FJrtDmTusqg",
  "key10": "5ZuyboHRhWfMa4tfkAxishA1RrybVENmhTAFU8Vge75MjUGMXGwrKzobm3TYwJifYvCPbWibEZCKfvauzQfxrJsZ",
  "key11": "6297W4FdEjQm8iFKn1ccQXM3pmYu8RfnMNuY8RpnZPhivEtr8DWNTP7uayK4dKAckCY5KVetPtjERTEMmwsLtAH8",
  "key12": "4bB91nce36xUGMbSaJCtm7zTn5pntVnnnsGrMSp7ri1AVixPPihg7gSBaf9JUKYpeyFo6tyjYW9cuY9Sio1BkVm4",
  "key13": "2BxCZAG2cHNYUnWYFx4VwUwPrQfcfUcYZXvTJnWrMFtvB97YdAX3st5nFcdXQNdZN1eWAGBbgmTo9twRAWDBKHwE",
  "key14": "5NLyYiHuZUc5YMEZiXydvfZtFPMxjhRDx41fCWhgCi4Qsqy7WGwYYcF8Pp6xb4PGfNFpjq1n7BfCwReDrcTZ3BHa",
  "key15": "5thtpRD2wNNePVKAVLrtoqP6qYC5xfS45zfaM4gq89ZVkFJwHm11YvTKFSrS8EK9T8LEk8f4ZRBV5Mo82t8aSzNE",
  "key16": "2Fm3HL5wUj5if8sKTQFUDpwqKAzLieNjzhmGHx1seLZemkEJNtiHYYMPPBtELRBd4UUSPJQygLi8pVZGJZK1w4to",
  "key17": "poB6rJz69dQPemkdUu2tyoehoYUMCQUVR9PNAqKCRRFDdeeGuSXCcbptXJDenrzksAQ2soLVgPQ8pa7BDTxB64N",
  "key18": "35yrzLdGrTtKuA2HgBRHQmy38v1yrja7hN71KCsFyT7HCefsxbxbiLsMj2gUv8Ay31fgkpcHdU6dvamxih6QNko",
  "key19": "55AeQJfz3negVZh274NfCHUbVV4nt7hVtS4Ggi75UDY8RtkXBZXbadqzgKKqjJHSeoiFSazAaybaXkCtD94zp3gM",
  "key20": "4veRBWyWR9e59NtYnvB1tLLDTS8Bs8N221zg2XVZaS8ijfUWGeKp8Z4nEQzWwKqxMDsK8493Jx3MLtByaGMJZNPN",
  "key21": "3jZ8rSE3EMgcb4tEd6mEG4YYxxGbREXvzV5NFnyg5qCdaE6mmWx8bNc3o3ivEkGeEp86nGV4cBU1BqVdnG5s4oy3",
  "key22": "341o393JZyWEXZ1MTzmnkzjf3iGaxBxXWd2SLQLFs5WVapx1E6x8v4FwZKFGyVnHnMfAu9sWTSxUsmXpCr53Y9zu",
  "key23": "5e1UXiYiHTpNnZmbzmb4CbfB57wd3efWXjMdKGEK7Q7ua1uLYYP2Vcygmb2E16niXZjmpde39USF6AJQhDn7bs4V",
  "key24": "3mNVHbLKFagx12XSYZvwAVWx8FTZubXd6ny7zmqZ1uZBcJStPpV2kyGwy2NFzMWPPituYhDbAVBHAeJocXXYEjaw",
  "key25": "37ms3P6aiddz3ADS3HCeembiokyQechEtkpBL39qSLXqEdsRW4etZZQbHjQmmHmRS4FRBb4KymQJ6meyrFXupRvW",
  "key26": "8thmh2MghMMpAUovzJoNLLEkEbvEKRj636tLwwXLjuYZJJSyVAK5yy9T3ySbAMtVBi1EdJQ66rr5hUKqH4aDQ85",
  "key27": "csh8uNZH78TxpCcn8E6qVjX13vugakqNntBGGhHJQSBMgRSj5gYMdQfdKKYCFBWdH6xFv4ip63nC1howBR2cyWK",
  "key28": "5Ee6LDH6v3Fp6MUvAy5CYyhAyC18s1KhG5ub6Ec82kqo5GLwsuV3C1LXroQmDVNTR2s6dvtiUtn6KkC96vYxgXpa"
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
