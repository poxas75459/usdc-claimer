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
    "5t591wbLgEiHK8QzEs6rdbPGykgaVyT3eMh7VZw3L1QiZUa5XELdoJb79MZ3stiTKoyxtjibKJahtbx4mJGzu37Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Brhc5UUJeCeG4rhE9ztVCiMHv8WNfHVGnUnfbfVNSiUUhHsb3LuxhKU16gamAXtrJbEi64EvGTkJWogroikRZz4",
  "key1": "2CBj8cGosvPaXjvYMorAC8urnyd9qmwDnxPXASVaCJKCiK3kaxdLEmFXEfanjHn6ozQuQjkh6m6sTSgzeKu6GvWe",
  "key2": "3BdvXDR2K9tASuFo2VuRWUY46nAztr45axzSLFbCJcMt1YWenczBBdEGCntF2UkZZYKq5KZa9ufvhdzUev6uK8xf",
  "key3": "3DxVQGiiwtjGghhv4PPxf4n1moNd5KhYyKRd7sTSEeMxQSPwhEFCf8tak4XQQhUDjnmGcyTD4wUe4qYcVG51H3wV",
  "key4": "NjvTBz4U11TjBvHF3m9aEaucoBFSWgniuNTxZn7eP9M6PLs8cmmu2ZMEtDXem5PtuRzfQ5anPdePABjC4HNtAwu",
  "key5": "fpuX7Sdpy5YpXFfcJeig76mNTbJD7yup7PhgqVnucgXJKgHLBtnKpa14asxSTMgmgEXHrWU1uKgPcS1mHt6sq3t",
  "key6": "5FXNqZDW1XxR6upNbRZD2FmMDrpQrshQHNhfEeXjBvqcV4T5DUkB86NKNVqrKikgUtwfE9dQFL9b3cP9Hx3bPVBf",
  "key7": "3CL2KNsRbSAhsBkUw7uXUM5cXR45Nqsp49Tj52BVAY2xGyYyMTx87wLjSYAdBmjVyK9uxDCmbDyGyZXL1YqjSZ28",
  "key8": "56FcQYJyoQWzUzLSWMM12y2gfGLit7b9Uf8spXuRiuZ5sWxAKii1tt3KgqQwbxTXckq1xxWEncNYfCwf4YWjFpv6",
  "key9": "3Nn5sGYpXv6rVTZq2dRui5pKXvDRGCFT4i5Nez9cH96dUXE4GwqrzcGPsNoWHXnKJ4b7KpbtFPMXgVpbd8sqG1yR",
  "key10": "3kW5hDNo3Q8Rraz4d1NfgewvCe4FmkDAPGCR5eLyriyfC9E4TXa5g8oJAVTVazG47CTZuD4wMQp8FiSTHhQH4tYK",
  "key11": "3aQ3ebbraNsWuQo61PCsf9KFoziwP8qa93xoBbMAPgUhgGvs6Ad7cCps9M6hMDfjUYrSG5xgdSiXLm37Hu4VHb3p",
  "key12": "3TFSeumSh1mVeoF11vtZkGj6fmFDNjTciTDZnmHET5JwUFWyXneLXFMu9jRc58jTgpath9FX1XqBHeGVLWFz5jaa",
  "key13": "aVkW7gxQfhRnUBs9AL6wRU3im85A4mS1XfqEUnySFk9n7v2xn9suV7mFMxoGPQFEhUvnQdzbTsvGTmQKBgfBcz3",
  "key14": "5kBGped9JWRkMB3PCS1ZhX3RuZ84SZzQWhnmiCnmigCPyf28vms3gG9hbh2uMdm1DQc564Cu5fLPs3hTnw4a64eu",
  "key15": "E6e9eZjMAuWvk2iAwpu9BZBKEpbJeRFGj928x4gsfoATsmHgQQgZK6Ux7MzNTrJrLMMkaT4ybthhTt63bfijBVB",
  "key16": "2bygXrp3KNorUAZTD6x6DZUQMweabA5yCGC5jZnJWJ3gM8E5nKYt3L2hKgi4d4e16omTaixtmoUmRTAy4n3mJjyh",
  "key17": "2wAdXXZzHhtEQ33TF2RKZ7m2tcNk54FHMKEZudbC4pz5VAmkR6Rj8XKsi8xgQJmTY537j4Djrndbt2znzZtoZu9R",
  "key18": "2RXJwRJBt4YgZF7enHfRwQu7T3gAM3zhCdgqXTQLR7vWNf8hi7PkYsRorsR8iiRTyy4qXxGjtYZxN34GZPVus8dv",
  "key19": "4e5aCkHccu54v7JsnfpSYAvZa3YX9ryC4s5mtgLeChnw9iuaZ48rQoN6iMpCUxMUTNypzweqgPjJQZoiRCUuwkzn",
  "key20": "51GWZGCi3DaKLgp8kTeJHDzt51WWtAQTagZFH4wKkZTNdrLWzP9kbb4GJU6yVi9iSAdSZtYBR96f6PKRTvD9P19k",
  "key21": "E3Fd1UAvxVxDUJtByL1dQb7zmJVBpM8Cu7L3GeNCgqMkzn6xYnwN37i7TL2vkaaGDhpyZjuFxTHYNbaHQyDqYYf",
  "key22": "5kMjbHWwrcasgZgsh241uyTMXyNhUtECuTHCqCF3UvgKVpS5CeH5sBrNHy5uTNicBmSscu9WryS7Xy1mkgYKnVRJ",
  "key23": "3N56Zx2jGvoFKaAoGe1wo7Gug3Ck2KkxDhJBTgNf1YoDAEW6oqELfhUKcH24xWqECS1aSJsZhwKPHE1ejCSRXFoG",
  "key24": "mkMD3wuPE53qW1vNgTBack62g63qZiqUip3fk7gqEH5JdJMVGV7CLQFTmBU7iyVX2f5A7qH1wTw3UeytN41VLqB",
  "key25": "MVZTmr8aoNpuiFv92wRx5ULAbUAiiqEz5XB5SKAUdcBHXmSEuJdwmhsD8LkzMs6A8tVabjZivUdZC744T6Dro1L"
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
