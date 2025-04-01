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
    "5MgcQ84JYhsmtTG2cbBUAWDpteud1YzD5KpPQtdWxcDBn22NUUfZyxbChryQXMcAZwURvry3ssrXecRDZXUE2vAP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UFc7yTJuoritX2zT2pgnydAFBHP73v3TwJhEfFdSnDUATZE5JDNMWWxAbWhmJpwqcyNkd1RGXuJHoqpo6u4U5De",
  "key1": "4DwAG1mo3oaEuVBASPQtypvssYu3DVu9iuUWrm4uWeuBAHwY1sqVR9FXU2jgWuSiaU4Q5PXV8cjrSLTXQQzRVZkJ",
  "key2": "dVAoYzTuatnDjrwdF5voDFU1GmhN2ixwafRryRgpjFRmKhQQq8byv3SHxET1EcGgWoJqoEyEJQnNThVp3tXFX32",
  "key3": "65dnBSyHE7fukGA8ddiw3N685xts9iYeSSJX3vsjMGqZ58ZDJtZRMMBPPxhXMk1tyTzT5J2XjWfKUDGoZHiv5w47",
  "key4": "25VdYjM3sEX9NmXJesmw6tfYmqbjH8d5yz5ZcaCAxPf8srb9Tqr8GVPBtzxHjPsdS8K23Got3XueyJQ6SZVc8Knr",
  "key5": "63JwmZmZqzpVvqJ2xdGc8Pe2qGga5sTBXDbUe8413dFF1SzCS5Q3EfJRsQskHkrTQaXBGQsiKSUfPhXVTkfMpZLR",
  "key6": "5zFJz4pZVFR8RoCtUhBGNj77Juo9P45uAK34yj7gJogBNE3EvusqsDP7GHwfKxgNdAedhcKk1C5SXJyvQFivNG9w",
  "key7": "4Z4ywVRdEyrm7pXW53wkyP1kwiaTW1F3LMV4SefWM6XF6AvoENmVGnSuucmTZ4m6dzMS3SYxJq6S5TJf6w3k8oMr",
  "key8": "5VbcpT1jWQeHSq34xHGGN6VshNtHtqt8sbnG4nnd2WJa5eFgWXkv52FcyRtyj1q3eggjNuWRAhWWJ3Qsp7qhkf44",
  "key9": "j6bN8f9bgRXuh5uVCSqjUT9gaqyckvcYNMR7q5Y2ML6wZ1TUQ78j2k4cbftUYjk1fbLUx1LVaA6CtzPTqCDv1t3",
  "key10": "4AV8xvktyh8CV1oLwD74HLFuTk56cg9Tvat5AERcqKvRxM1sJAHe5p4Fmh4iHpX21SLhT1EkqHHm4HTko8G4KzXq",
  "key11": "2S6mBax6Vp9do3oVgE5sPtV5FNjg236BZJYdX8Z8Z7rhsUFMCq967RAsh7Xnkb9jps3KSEL2jPB45Bd9nahGGbi4",
  "key12": "3Ug9vfLtUC4ULH8MGFf53iwtRp7wxsnzgZXhiThTN2g2qhVqXuDPVsX73PFY2DeNQCHn8Rw81DSqYccGyQQqj787",
  "key13": "L5QfPajwrn2pVKLxdhLvNWRMVJ5g1g6XfYMQxBGRP9eJ8badKAUywhrPn2oNemx7eZwP2g2gWiearb7EANhQ5gF",
  "key14": "4HvpMdLYBMJBT2gYzJg7suTpbuST5qqufkgMqvU7oT8XW2Mb1gtrK4x8i52KMfzSEtVTyaE11v479n84Ga6LBpzR",
  "key15": "HR8557uGAciREtveJnRCc2EkxtbtLgSJGASpvAFsBj3aeysKw8WnG5yr2XEZkXA7FdmksPDNiZtzWaZ58ageFGp",
  "key16": "5xmzHCNLhojsmjmG5mJFiaCajvD6uP1R3KRCwXb4aP6JFLTyHhqySoY68fJodsQudqDuHzWLuxYAYvyKZGUxesRm",
  "key17": "5eUYSGZszj4xQAf31Gq9xoF1JEkjzoqZTteRKKoFrzVP6jRW7SQ7sgGzY9GtLz5Q77BHuiJKbpPARMTUMzJoGCxL",
  "key18": "A8Af6tE7ygtXHS6qsfYrC7dbGSRVQqh1sQAiA4gpKYGB4CBYv1eL2d8vpEGbhx8mmoHs79V1qUu9PLnuybM98qg",
  "key19": "WpELpuKZ1do6YRMPFqoPbp3Ae4LiRhXuu2HhUJYMk91Zv4SVpxn23e7B2npEkCB6nFs6D1mZqPRwNyidVQbfJqQ",
  "key20": "364cxn1kMWKUPnvmyVuTC5YmGCqySH65s1ipDCExYaXFE7nAbsDXepv3b9jMt7kzJQUmHYYiqT71bWeQYB9JTJTx",
  "key21": "2NcnLZW88oB9ezZiUNy8tRBPwM5hAMAQjT82YeCvQAefRMDJFU42azVefFQBCArN7r7Y8oDn1f5NxUJmMDpFMhvb",
  "key22": "T43vVNPbSyRqaWaMnB84WJcy5FEpJGtiGyhmV7QJB6AAyy45w6VffkEQht51i5yhNB9U2tie1yehRgmNNT34SvW",
  "key23": "48y2hRq5Hxrvi68kJUR59YuMNGVc82zGya2LSXBEYQPoQqtNHm8h7rnKXz9VYJParMrHJyaaHdPJ3ZMofiVuBneG",
  "key24": "22XsoyZ6BXynq7jKUhAELKxD7rsx3u1CLvuzidJxY22j4KwpWmns2NZd9jK8d7RoSa89JijzzraDKcXFw7jeiepc",
  "key25": "4sKigtpY3PizNCR6sXfmVmUn6He5LAQHKH3tQK17yvqu7SeSuwNDW1wcidrAiJyTCZ51stvYXbU4S6FrK4ppBZdS"
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
