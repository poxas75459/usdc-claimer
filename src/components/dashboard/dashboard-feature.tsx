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
    "tJrc2Woc9gQ33oQiDuqUZjrbFSuBnHkiZy9s5gWHR25AXy596RVFV4HxRRmzYfLr9W4juvbsGksnVq1wLU1SgQh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WDcZMCEo5VWEDSM2n7GeJHip65M5rsRr3Wrm4WoDhwKtw3kwgRdUwpDEsHKT8M7G2fngWUwWU7B1T8HMUMGmtr8",
  "key1": "4rmZnh2B1CzQqZt17xrq9jTpZk6w2oFWa7CFfPwfbhr71gA6661VgGDuTAH5nLvbGMh6Arj68bJK8LagwbJdykNy",
  "key2": "2AHm61pJfgkK2YxPMNevE6micmLPm5QDBD8Z4WAhLPyPCA9okNqS9hYG3qbmYuAoHMZu5uFKKDXMm5kFazzz3PMV",
  "key3": "Sa8tnA66emznBERdkk79CeUiC6T2xYz4H35wQyn6iU3vX9BXVoNX2QzKgX7HQDGiHEYfNi7MzvWbSrsbrMQpYKj",
  "key4": "5Tq5Aqni1pRajP33RaLaVfmKM8Xx3eFwRVy9rAUVwf94MDQSm9UuBYNDg1BPdbRhUvR7i317CFAt3sqrxyzFDuAz",
  "key5": "3EK6nXzMVtC3DwrMcuTEtTmppDrxYVCN8hu2PxMt5dm4KATYLHz3DbAXfNc5LfqexDWQLViS5UuJKeoJL2Dcz5Qw",
  "key6": "4CV4xoby3gi1kVgYv74u29kzs3mYriXNN6WeTnHXmhSPrfyqCckXMq3ZeLtx4SYqEZoD9LpQ3JcgZ6qGZxnReLkH",
  "key7": "3VyFptaAoYy2aKNwSCRMXj3ME4o4aaSgdwWYvkyGZCZciBBF9rzSJuaQXjZFr8qmyoB8xPoxy4YRQEp9VpTixSG5",
  "key8": "2fcB1x3FGhJqUqvvQPQnhuqaqRpq2dXiikB8Z9N3nE1nnew8Jy1VaVajBYcj3SYha7vkNQQ6mo7RVLmHfkpbphhb",
  "key9": "5u4vLYP5nwQZgEr9VFJ9aahumLSHr4hezecfpuPADm6foGu1GV4RHfTXR4do2KHkEBYu37HcZJCk9d9WJU76Bdwy",
  "key10": "4Sg8tLdJ1TgnUcrmYWwAsh7YuiACdbTh9dv9dki1AHJWoYMBwftmhwm2BTrE67frvxr79Pi2Gs7fnrMv8CrQtxQ3",
  "key11": "3oKAzurRRSKuwiyUy68sWjKA66aEMLXZftduyoZ4My7E4mVdMFMyof8Zeo6MimJRFjiG6bEGhrVMtfvAKyTv9XbW",
  "key12": "4L8BsJxc4LtNMRaXq6bhcqCUHspXeG5RoWj22rPLaVkcuVQequ8thAyqy1EMGvNatuWg2ykUYkC4hPa7WbUx9UYo",
  "key13": "cywAnrvyxuRkjdGeuxopCWzSkfQ7ySxwSBbyPJoaHoX9GvCizr6i4mz6VURSyVJ1oTpj3aUrs9v8y3i229qSkKq",
  "key14": "3BQ2piuvi5AAERkKaeqo6vX5WvzQSpDd8FJjerqShFDTKBBEsuXQE1d1q6XGtDhdBeTtBMKqZgF3viYAi3soonne",
  "key15": "wUkxosDDD9GoxsUVAr9BfamiuobczH31z8XKTiWrfiFYb22PaoL4FDNKDBY3LcLPrWXTwMaU2MB6Y8EdAkVGrkX",
  "key16": "s2m3bvmNS1nrGNyjtNsvyhUDqx57ucuRFntDJEEWY51BiZdr53tfT59cmuVptSJLabakZuiEKY3o2GwE29ZABr2",
  "key17": "5xFvgCwqkDHpKSx8k1rYoCHYCX3yto2NQwPdkbJarEbBcd1r3CDP5SSBfBFXUREApxGoKLtXmgQWAqmxs68Bermo",
  "key18": "3Pth6MvwMYphNQEpCuhTvKCKky781qHsj8bH6i7tNX1GPJ49242gc9SJcyd6y8xn8WLkNgjBmBvHAKFj51ipxY8G",
  "key19": "2ECLHPrmUcGKks9Fkm49VoJWUYX88ov5bztzpsCCKddLDrmGrCCDzLdPKuQCYzmsn6494o9hgxfxUXXF7UyFECwp",
  "key20": "5nTf5fdZVsRA1NW3HaPnYwq4QWyJLv2fWzKf7j9HuemDNCjxi8nAjLiwCeQu8gLCUFwkBov3GBBBwGnTV2qgi9of",
  "key21": "UqoFqosnbv8zzEmn6oTnS69AdffUcokaEJXPKxkHnLD9P38rxg6bv1zvwDnDyA81jDtqrwcdR7YiCGMqd83NdbY",
  "key22": "2Rqci3K5iFgNnkxxX6ppHbiZLKyHXPfb4Q4GQH7ptKQkY3WTGLL5YAuX9G4M1tU6Df8t1FtCPmyitg8LacsNxEEX",
  "key23": "4uxVeEUdiW5amk8juT9vVYipxqMtBohMna6teUwaEjYQDEr2sRRXTTfmTQtzPeDv5dYsGdzkpMDrN6mjKkT1rprr",
  "key24": "2qGMq2JAbZG15UmkooFTgqNMrCi1qNnHT6bmkyBSp2kRvdYcnao7zxGvZAEDBHSxkhebWudy4qqAzveZgQea81P6",
  "key25": "5ypp4NS1kx3NpbB1nBz4USVAFmrCkLe2H5xsD8oKhTnBXjqzBijDi1CXrpWPRkg9CGGM8U9K1FZFgsHZRXASo4vt",
  "key26": "GQ3LdqwFW7uYvmdcyUsbFP72DdGCC1iHFzpo1WnTEAKk7gCWstryy58fYHnhfxGuh3kaQ3Qtc3vVTEUMQ2BG3c8",
  "key27": "2W1eZbJjNN2utPu3AwyHVpXU8KDmKXJYpaYWT4w2anPxU89Z2jP5sssSQnW1jQ3uy2iEWELB7iuSb3PkBkFcCHyn",
  "key28": "mvaQTLR5R93vtko1TmNDgFxzUxw9p6NzS2eMDgYnXnoUf4se4shL1rnc6Yks1zPvsBNwPuh1D24Dz27wMsGujzG",
  "key29": "5ySBpFEAVwAEoRGNvCy4mL7RQZhDDq9a5u6so3MddwbVYns8kCpZEh1uMb5f1QZPmcwVDDs9TsJRXjcyUbKyXseS",
  "key30": "F8fRxJXKqStBgh1VxQ5RgdsGtRQv3AdxtGPKmoyobrfKrGxZ6ddCSRQfnBBup7kY5vtnWFDJVexEYAoFQHCNR4i",
  "key31": "4XeLuZXeQGxxMQp1YueahdSHY6e34gw386UU55TdMudjCu21dmuEuCKpnP4NndXoYuvczKB6DUBYrCRYNCJA1Lcs",
  "key32": "25mBZ678Svr26d2Hqa1UGZfUggyg5LagezEt4jB6WPr4Tbpn5YfMDoUQjDCnr3Uza6ExqJ7KbqP8igMZxtW5ubPd",
  "key33": "4t33WW5rLZqvhYZ5QhFaeZ3eusiutkvTH9cgNTJ8dn7MbNycqqLNiEFkXYNbEuEqoEX4DMRdVbgniNK7KHBzfFxE",
  "key34": "cXP5zsPtWRZNPuBTwZS6ukXuzqdhsPiZwbnv4WphGjzHM2KW1jZxMvvaoeYSDbS4vuKdtdfm91EWd5uziv6JcMc",
  "key35": "4qzniuUPSXvSojPLUVyzjsZK48AdCMhbn5AXGPxrvFrDUBTXChzmuHi1emGhmF59j7CKxtXnbPrKoRzYF4XGw1kz",
  "key36": "4am6JEgjuSoLxvLwDyY4ofntY4Ho4WmXXN3Y8brDsUpGYiHghAFLA9yGqiDCXfaDS5fxioFedqMaFKUQEv5VK1Ey",
  "key37": "4xdDDnWLcvWYtVegddgTPaaetLYrLXjCeJ3LDDAqB2VANJFo1ACiHe7MhCwxVPE96eJg5TddN8TaAK9K71p9h6yx"
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
