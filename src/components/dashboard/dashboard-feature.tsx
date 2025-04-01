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
    "4vdNbTHCRYDVspqKSHVqAkdqh2ionxTrrj4J5KZRbq5GpNPa3Qb1DU633Ly89mNYQF6HDojzU22xqJ9vo2FqMQJX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xsbph2w81Hmc6EGA51tBLzRTbjXhtJTypxvMmZcRpwLtb2fBXnX3CSaJM887LmHyg5GhgATW7uwmu9jydrTWQw6",
  "key1": "564x47YN2FscckTw6HPtmDg6u6UrEU8nx9mLimeP2F6PDi2J6TcqqmCr4DqUZFMDkY7LqETewYR5MTxfdqBKKtD7",
  "key2": "128BavTSQ78Kr8XtQiQMnb5BJgKapXtiByNxkhBuRTQbPCYL72m8MB7jPtuc6zit5Kn5pesNasKwDJ5V6XpjMMdm",
  "key3": "p8bxKnUrZ47XsXdretxmMMQKvYtAvsPipPvL8G1oGC6voHTfhCsuQZz1wcTpvjLLTAZMqewqhPXbUy857izZ3am",
  "key4": "4eh2n4h7gtkg1Vrv6t5VuBgSwXpioLroPVFG9hsWczT6ZoDEhpYDv23Nuj3xRi4gLp3emDL89zHg5ZdCNqeF2sPa",
  "key5": "4GCPHgsBSD2YATCExJhZquTQwBfsd4h3mfPaGciU9Nffe5uQHJiud64gistzagCL31s9nrR16n1orLVS6FYrtxEM",
  "key6": "36m5W9vzbT83qa6pkZWnCsh3ByicdKoJfEjsBsMZmYMamXNdGXD6nN5o3KqtYGF3rGeeEFHabXekWY4Xvhc4atii",
  "key7": "66ZEFZfR6GKK9U5qDdrSqsXpzrCbdfHHhVMg1ZqDkYbhrdFNyiNi4zCfwLtEiGkBmRQMockWYgGbTQVQ9X57BSWB",
  "key8": "CDF4V5NNffEQ5SYBW1HaYko877R7ArJ2bi5iqdJtdRcepwYCm98otzp5TGp4CeoR6PDt8VAJm94SVvKmWUGsoCg",
  "key9": "43ZY6XAhZFxgphgnyNFPHko64XVbyRofc6JRVGULuYWsa31ayb9g74rfpNhPKCZuRae9y7rk4zcKfDFma777ALPV",
  "key10": "2N5Cdwsc78fRX33pzLhrRpjb7ai2K5pAr4jS2yg43j9SeWvARoSCTQ2LkPMqFpUwdWpLSZbNbcTnJyPYAVkK3Umn",
  "key11": "587z8YBz1Z2LfiKWsBTmkG3ie9u2ow62GuNJcpjvJpLvUS4ET7qquHPn1dcCMJgxL7q9Wsr9LreQPDy1Yn4QXbog",
  "key12": "2K3UuuxsXvcmjLrciq5K6V68xCbb4vReFddWTfRexrwSLyBdEw7SAUGspbJD8ent1KsUDqWExnrDPcKUhRqBhBqf",
  "key13": "5HyjsiawYCFcyX7DXdPgxc4ssWR5iMPVA98CuDqVrQp5K6P7ScAiDosWshYXWQwneokvDoktVv5y7Kd2Ws6qArdt",
  "key14": "58xATfheTq6WEybpPHiYte6pVebCJqDogJw9XzdoZ9GQZ1UuxaYpKmakau3SH5DgCPhnZfA3Mbpfc7SB34EULtEF",
  "key15": "FDo5p5uX4CfXDXiPCgkyVfBoZraNDEB7mXbE44gqNj58RqoDbBGexdQcBfjucgVRHNJt47Mxkf2nwKbcFUkNqU7",
  "key16": "4vJmaZj3eX3xDeiTaxfJTNmpgL5ugs3qtF68PzQVSbYLHnTmgHjZbtPmk8RxNoVxSXpNPefcxbPeT6xaCQbE14Z5",
  "key17": "3j84fEp73wkwfzd3DNGUP7CoWtkFYfmHXBXzGBDKSKS77bjmBVfKbu62LxthSWNgEtjDKnhw7u2tgxSE2HDKyDRZ",
  "key18": "35P4JgvzFQNzUkB9paKQ14va5gToFMrvjqU46t113ZiU1j3Rbua4nvTQZWyqzw8LAWHGsRJg31EygAruVasnHcN8",
  "key19": "3ipgpw8ok9YWuoeHsA1GVhBTHfmP2yZ6aLmyQvaUiDLv1xUSECtuTQ1ANQr96JFGJVukecLjv16UTtRcfEnD9asQ",
  "key20": "2oTeohdmcYG7yem5UYVHBL29M3ZFRBqbWhxy8rXs7cP6nkrR4zAeBXf2y9jfFss4s3qNr5m8mrNQoDroWPtaxddV",
  "key21": "3cZdNDZeuW79pKaeeuAeoHUmBe74PYjUkL9qags2NaaWjhKRKq5NTN6WYUw19VJcapVHNU3v5aXuTrYuTy178DRt",
  "key22": "Ma5ft2FGykVNKMbRnktTAMsW5fwsS6WsVBpsk8uTt32jJnbCAWs6KZyqC3Ph8SkFAhhY6hLsLwzrM34fvfkHzdv",
  "key23": "2MkUu3wnREFbu9YVuMLu69FW1U1daYaHM52R46hwPEzyQ5zFZpgvW1zfeskwseATvb3EjtzEvTYPXWzBYxtft2tE",
  "key24": "Qk7EkhQPMBb24w83jJjp9xDapuLqZwYgB4HPt1NqvGkv9ZMVW7bJ4w9tqZzZiYuxu4CafuJ28SZxmcaNcyezKUR",
  "key25": "3iXvrt2SWLe17RZEULFjpNRaJv5zL1vqBReXaw2hkXchdxJTmes8iCakvyGkVa8E3CutogE2hHJDh6tsjiesZx6w"
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
