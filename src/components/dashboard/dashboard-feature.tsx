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
    "3SuBED2z1yeVcTAbzF5sn4N1XHV1u8yA9785y7jUvZJSvwggG1HDR3F5ho9CfUSb1HDPnSfEL4HMU2iTBgr7eUGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKNuQG2Au1ovvtTyGtkGTKu65A3V6tQeohoUA8W48uaFtxwNpPauVRRDuaWjpEZTTWpxXdaHGkw93LrQNDp78ra",
  "key1": "4TAgfmgWwboj4dH4TBDUvdPFVyA5dhqZHZaw7JKyQ4nz8yUTRRhhSQF9qu7XjuE9bMwfWTAMjALCxGWBxYUvL8by",
  "key2": "57ety6o59CmFnTxJxUhBxYbPbR4L4t2as577B8kgy6dNd5c1H6DTnb99euSGdLevRpoHKPA85u47QSRkSheUpKkM",
  "key3": "2Dik99kggtNba9RxvX65VGRA9LLMLZtVFMXmgrTfDEb4rqmbZe3A7GTFj3VytqLQRx2pLPW5sHHRMasw1G1E1YKa",
  "key4": "4daJ4GziDo5f5BtNzusJcnR3Le9n6EVbMaAwJNpimBu82imAn3MYY9HGRkx7DL6DzuWYkMgWgHUXrg9AG71txHZh",
  "key5": "5nUZZyNRac6waRFYzbVKeXw9JURghVvDe4PsMAdA49dnLtWjDo88AHrZRsWSo4TxXVAzAa6oDRGbtLpyzZxg865F",
  "key6": "61WX5QRrYuRgK5nTLzvP3BgW88v7g9pwdchxcVowSa8yFxryvAnSRVcAW1rWzmZ98aSG14ZduTtKr4sKEdb88GpT",
  "key7": "4K9cVvRMxvk8swUNKoHKTDkZ6fTgYsGfUeckM2dkGuEHsp5tTe9LK5cKmVyiJiVdznQe4piGpcQwCx77xmtZXa2h",
  "key8": "3ntMkVwEg8yBh7sx3kkDDc7VGU2TfXq5ok6xRFuR8f5BmCN6eZvkvsdb1UrnacP9b81wNdSwp9TVb1CjNwSFKhUT",
  "key9": "4xKX4XKZcNjMk2BRovr2bStdFsSFkobdk2kuUf7ryWkFKNWd5cSgVXRZEz59wDQG8x5EPP7TvKQ2CzngTLHoUVz1",
  "key10": "3CFCty7Z2Ks3E5vsvG8qxbcBsH4fCEHimwwHDRuivrKqzR9YkMQZVLrqEQdyrBof9xDYo4QgRzxgeRH3tf5ThQiT",
  "key11": "4pcAeEfXPJnoEPuoWcxPK9NvXc5rxG7vqqUGosDWecicZfL9dbCGtjoz4PgCmmcY7mDwcWNUJLDgucYofSzW2MMd",
  "key12": "3VzSdx7MtcRynCx1p4aRFoWw4yfrQ2rA2PfM7cbfcrHS85qP6y1meNrJeeuJH1T6v46bGEoQt8QEH48artK7NX4w",
  "key13": "2GxjQjim2TdaCqwoVXa6KXbaAKvKFTkYQ7191Dj65kpEkneHVB8pdm49VSTk3aQgahbxJENaPHNYAPiDbzW1tpD7",
  "key14": "5755FpTBUCfXLP9rih7Ybh4o6fi6EXi2s34JCfgZ5BHthkn826JFsT6BpsnLEMYss6pU3bgzkcegehLzWJEZwJ6s",
  "key15": "4eupbRMrwmJw79o5zNd9sU7ECBwrm9JjcRkHU6zVR2XeeviCYKSpqXUEWGqUHrXrbUp83xuCao6EZwSegRGZjHsW",
  "key16": "c5VFvoT98G3C1mjZAYPUJuNTtghWk7eYunhM7hozSHTrmpu4UCzPznWahBvbFauE3ZVVBB1hoGNWADNfuR5NPVh",
  "key17": "4NbUMTQ8LhFhPJKDASEWHBvm26TTiTJP49tgoaZqr5FDPyEaZBYWTrLafhAR9P6f7pidjN8oKjAqQBnWjvPnfn4L",
  "key18": "44gHCyk98QnHWQnPFgfqd15ZyMKhA66TcNGst2g84HaknXGfe7qUpGEcMQYmBZFJ2UiPstuTJo9kMg33hQqGmBLz",
  "key19": "5ooSZL1xMzGkgLP73exyXhsHEDC1YjWzA4VHdhW7AcGyCbcVzCmTDpgPhpexSLDV8Zh3aY3GR8rnfJx2xhyHXTZ2",
  "key20": "5XnX3EnimZBkxcQ2Ud7exwGMFzHinh1vEZQ7mMC6mpu43hiSiMaZydDpVLaWCjrpVJgF1mqFQQmawZZeJBNk3qDJ",
  "key21": "2E4rCFmwxeBCV9aJ3pnNGWpXUdspgxiV4in2XDTvHyHJGXGjkYTWtA8mJRJKBNheyBFMWkPqDKT7a2h7zaEJMna5",
  "key22": "5FHedrvtwRGWsvMm6o2es88FGLLjHxWyWG4j79kGXZw7twjG4xntnXM8yHU8M6cTRPLUcDLbKABFJkAJXPSVRPWx",
  "key23": "3o4qCSpUhyUsAxFtMRuDpfDnVfUHNUSSDeQfm4cFecBop2HeQEakFcgecMLiWfiW2McYjoyMycxUBpg1hwN4KDht",
  "key24": "4Qo4LN27bRoV1WQ8vSeftimTJiS2FzKr5pMPpRiVMVnYdNtMdG4NRZEJbSxS6pNsRRJX7W4kTJMzveUtU4QiKRT8",
  "key25": "2ih3TQR16goP9eJzKUTiyEfDZ9HVgG9ka1PRDkfxNFoRNsaUriA3iNWuDVoxHgW3JRWZjAGdYMqmKALiEEmwm33N",
  "key26": "DSeydStee5aF1iawWo5C1CPtgQnZKFU8Yzwax6zVZgrdqnUDgQrJpLJqUtDb3kQ6Ra1EMtA6AJzsPBoa84JKv7g",
  "key27": "48Xe6zynViamCqm1dmmJFicE6BGHTBht7AxnUBtw5UPBthQzotevKtjBsM57Zzi7afK2tvMywf3gCqygCHSHEJ5n",
  "key28": "59RDtcSmZHYHSp4buxp2Q6EM7t9Mgrbx6uqPaZxGfF7hexTLDhYMppKjvJt1pRyqYYniF9tbniFbXgWUeAagAL65",
  "key29": "KJhHGssj6rdLKy1swtRp9wvmjY3vcewbN7MAuGEJ7Weva5u1mQzViM7CfqRK7j6x8nC7uFgzhD3Zc384eebM3LZ"
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
