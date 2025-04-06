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
    "42hUP96nUeH6vGPX1Lq823TLffZb644ecnv2HkaP5nifWy2ux5qPD4dSsyVTFa4i2giDTSocRcGKapKtw7UGLJwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vKcvxXdtgohoknSbKzU97Fmx5f67GkmWUXsgb69kXZSq5WmgP7hMzVj4meYQLbnEeSzncGNt32RXJZ2Uk1Xxoum",
  "key1": "4EwpsKNNWSVDmRBnwSgmS23KQgtVyniPQSopdoNxoYxCt9QKDE8Yj9fJ8GxLjYJqRxugtfPjNEcX1hz5mEkUeuS8",
  "key2": "3UkAohJSTcBkTUk3oz9pN1JMqXm6EPuvWnmEexiNGXPSNoKBSkmE4XfEBAuZKvfgWnNDeRwvnowmQfFrdwmirr9H",
  "key3": "4cKDfJkcK3LhStD9Q7Ekr6Qk9MN2cYdhj7DCMVsUKi3YCpzN2tKCnsiKuyYVY2W2bzAFFo1PdMWt2KMRmjkQRjsN",
  "key4": "5vMZMENS8m4GFhoWZpgfagm1FYzddpkevpPscQuz82foYoohfCJ5wALGYoxQHdTkpaydaHjMrkjepVs3GrPoUgsa",
  "key5": "5dgB5CLvoGy6sMFYNhYRKAzq23nbYeT7BPeHgXs8v8grnKH5fH64wVEh5FfLbHs4i7HQPE8XnZqcLkizZhuLihdc",
  "key6": "vdVf9jzm3NBfRk9d1cmM1fbJNdAGnx83J6XzVpCpkfmZ8PSyMjftu2Dut51fnd7cGBydrTKufVNR4Xi4d4ne5vs",
  "key7": "33C9wShBq2ZuuQ1pWQLhcqSZJieSXSC3skJA9YQPKydoKvdCoQ8QccEAUuye6yzFzUimBSumcabd5UnvsEwRnPAi",
  "key8": "y2oD4kQWHLxHzXXWSwgxp8fBeesZPmaRUCnrf8tgdimLzH4VrW7htvvc6aiR8kcjELYsW4uaWRjsdvsMcAkoLyd",
  "key9": "2kNr6AeS4EHagRZgqeZyt1pauvjbAPexWyQV44P3KhN5oRk1goyNNUPVeQh7cYdzHRZfMMdiEyZPLJiyBi7V23gA",
  "key10": "2ff1UniojPDXRMT4BLQ2NSoKKKt8dDmMjywD5gaifk1iidsvHWTTChM8MSkhevdnN2NWrBaUwcCRDfavTxsrYAyh",
  "key11": "5A6vDdKmJUNZf3oEYgrVQPB5oKkrSQJbYAEyuS3dqHVu6g1XzEebbizfWsjcaMZQ2pNGa4DJjZ2ppC7vLCzkSLUV",
  "key12": "48ww3fpoV96QsVj8LFS6yNfGor4tnw9duEe79wZSKtLbKtTGmZTX4nA6EuNmL6we2wGoPTWWW9yFHEa5HQpscrKb",
  "key13": "4nKATuzDqfPwmmgLt2STxJ8zAXNb5bqu7tR7X4AT8AsaCUDX2Avu1cUj7Z2GqauhZeLe3NitEPM6LoN4PnV6AhNo",
  "key14": "2CRMh4MsUkDgPhxHfUVxTDaBiHd8XCiZPtW15CxDkLT2PCW2VVW1JakAAeAAFoUFNn6U8t22jMz7Bm5QfS8Q1r6E",
  "key15": "8N7utZ8GDjdh461iHrt2AQDYT2mZEdEyHb92UjeVw2CnD15DVcJdUti8PDvn5vLn3txuL8Bi4cNyiZPAU7Z4fo2",
  "key16": "395N1WUAfHpJNZSwAPYYzMWinFHpdVrTYdVxZ9aKQVeJCbfFXJh8dHrNPFqrD2EZnVuXncRWvZdom2mQCmZ1Zs46",
  "key17": "4My7a97EJ8vnUXasDFTajKtFkgAkW6MfYL1MtMEVLiKBSR4uTXPgKrX5Y6JGQEzHSSHPJy11HjQLeUHFDWbk5BVS",
  "key18": "yq1La1ExZQirsYZCAVL9FrZae4QBuhKcsyGyaCoutWCaXhYMhzfjxGEEehd1SBSgsbgLzmprAdH6ZkWc9aLQ2L3",
  "key19": "4DSJRpV3Cng2ZTjAqLU8YbnGBE8smR16s6HjEfFaAyf5dyA6Xu5sznFmBXhZoCfBZy9nCWzwW2vSsECzhCnw81J2",
  "key20": "5mEeK3EL2iUXgVdSCcdGCY7aXLpJmHZo79XUnfZvxJQidqUdCVo546ZvCTgB4S5NxZwtxTvWnLY3q5A2974k9K2s",
  "key21": "37x13Zn4UTPYGyJCHT58yVyUrNMyYNxGhxisFtkj5mB3Hd3xkoXBKSt4zemwWQFhvpSQfoCLQaMdBa1xDnWjTZcm",
  "key22": "33sufzzhg6m6taVfis1xDztgz18epoTUGEcCT6jq39hCJYLhx8meSkCkFuNeofy6Tox6ubfZAhCQ3BJg67wJFrUJ",
  "key23": "5P8kaDqxKbdtu2NJrAdhttwLn8MrFtr2MXNtrCGHeoKQhtCTdLCLiistQhxdB4Hquyak3rSecpRJCcKtQFiYnySk",
  "key24": "2CJ2bnqtEn1Xi6xBH53fGFiSrTc95CQHxF77RRAKWpRz6d26MhYc8TVJDGwSdEw6YS6DXcNFbJqJD5v4P9fHnK8R",
  "key25": "21HR8Xx7iXqmagexTbcYQKb2pMAu3vkEP7zpx1JuE9kEZ5sVHA3HjxzPvXpidMHCwL8TqWHU1ruMZ9mSrWDnfCXJ"
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
