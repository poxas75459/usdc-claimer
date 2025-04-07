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
    "jHdp4CT9UMqQ3PKaVvgjvf3QRh1UBjL5z9jj7AUUnmFeGfbn82TkR784Hs9tV3cHcGerRns4qtireA86DE5sfYX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVgdCVQZePTb5CMnFFk4DgNuauwXs373r9j8PM4cNibBkpDwwAdYK7SMRRY4N3uHKEMgCGCqPj3hoFFiDm9BH21",
  "key1": "tTitcQyFR5d4gak7Fia2YMABB5enrJGmFihZZhbDrNEAUkH4oZZYGHV6QrkuK15TdmCbvDuNmqg29tJYEbNR9Bw",
  "key2": "4qxAMfPVDkb95vH9rpNPJ51dfbN6wQQdHBP9p92kiu2KwaYHy19FyocpybG2756Sx9MNiLNANUabe8PLPfqoCXzj",
  "key3": "7sQQSuktmqz5deV9LJVURHNfAmzeqHSdUefPfAmKSPtMd2qPhcvrKumsvJcKZXAoWS2HFLbSzShQMVpp56ZfFBC",
  "key4": "4YZ3uJpgquj26JMSNM4b1x7RKRA4gtbVDMwHo2zCximrrLnDHU5b2vWsoKPa1CTWiyKjYbEouzfSH9792rotzYJC",
  "key5": "AegQeK8ExvDD62Ciz7kTzvjBRMWGz3ziqHpn1VM9qHhieVDRpf3Lao2gGQDsBu3AfHCh3s5AGdm76QiUxhCpCmN",
  "key6": "344Z9DfntSRXMEqP1pvvkxmAkDpXpoMj1zZ1aSouMGwkjdZweBito8MQgWCv1wbjx63TJVikkUJLfkiuUehYQetv",
  "key7": "3mW8dYXbM4KQaeFgCVphmrxvkrAnAsJF3vA9bHEsDMYLBc3bhgJ2DwxvqDgwcaJaVeu59AnW3gWvkSs2zquDHkHD",
  "key8": "4wNa1cLUZfTWUeZR1ahLsZNNcUxbuBh1Z5EdyP24bnqZAHbr4TaBDNN2gXbhz69MBnxoU7uv444WiqxriQC9Yejr",
  "key9": "3vqkdajpNi8ZNmfNY4LPRZvqknkyAX44DFdGv3cmb8xGf6DGzQzMb4eMgCemMKgnqUtepMxg3KrYSsqRxDN3ZPqp",
  "key10": "QZb1qM1UyPyGGEpHgZSUFikYVHsYTaFF5NtRpVCvrMSFJLFCDUgRG4tmTfa1vx4UiPJBFU8c3HF59tQpq9zVXwe",
  "key11": "2JXCMtRZvxKHC9cA9TBkJ2zTKQ6Vq59UMZy3bQbDYkZhHELcrQW3adKzKfcqXurzKHbC1Q7rM7gmvuraZSjeEFET",
  "key12": "25xcgQSGMG7zRqt7uRjps7MeX5HNzSHs7X2sUDVKT1fkT3i9HZWJHDsggi9Jmxf3FE8XrPnY7Avp91br54nH53Jn",
  "key13": "57TJ8RCcXjm3QcyQSqrc4EQiPSz6jLt7wpsCiTUZf1nCJjKnptCGKUo8zN2nmnk4RqFkKCULihSBwGHszdCiqNUJ",
  "key14": "2zAm4fXmgpmRLi7AAa614kchqi5E5nPQmGgHBpFMg8t4AYLmvZsVP38Wcsvaak13sHwPg1i7TyPK7sC3gLCQHoAg",
  "key15": "4Rhw452kuR6oNVCp5mBGn3w1dxyyomHFsSjSMUhzyUev6qwHAMnowxyovnzPNYH44Y3LpnYnuu4HJN58Xi7KKUsZ",
  "key16": "5G2HfkDerR1evDG34EEt64f4oqEHD5q1Xy7m4AZ9KFKyAnm41ZHGRmcqo8EmkbMYqinH8Lxtu9vczopdG2n7ADQq",
  "key17": "2qAP3QDsGpipFqKAZiHBQSj74pGdGWwzQQtFV3PDKx16T5jSws4r6CJUmw4REewjmVBrpw8EN4SD2uJudJrAq9dL",
  "key18": "32omGdbDjmF6GrcE5TG3WvyGafLXj4vhjcT34AibNoYLvvHKKifZzqcH1Tfpag6NnyokJrve7TeHBZxrRuzZxmGC",
  "key19": "3XoiebGAxuM6jeLdnD8WMtRKqRvDEJYTBxAbNxqvaKJwDHPufBhpBqfTY1rRnwPHEyd9MKcRRoUqmquMRUrciGkU",
  "key20": "eEApH9xtQWPWU9iXte8h88rKYC3Ceio9WEiaPk5xuaF3ekaMT6r6Mqjoy7V5tkArHajq3HXpqKFfn5H9QkAghPD",
  "key21": "5a3GFqW6pwpbbFxZsVSFLRSV3KT8aGS5FLneUFTrvJVy4mobbEVbcnLZAxvGXc4krU7RDTQqPR79hzHgD6Yf7R9P",
  "key22": "48StE54wNS3xz7U3zsbQYmRLKcMCBdmHRxHV91GpnitdCiVnZwHfAiPR79moDHKMRRSzURyjjfTYLWQpgdfdpUp1",
  "key23": "bfoXtzK51ePPZByLDbCCAfpnG4YmzKcJikLUn9HdNmhxxAqwBCuPVsb8nFmtoriTdfgXKMTb4zXjD3iTStGN2c5",
  "key24": "2Uf3KLtRCCFFaPSSwSFcxrDqKd5Y4rXPWLU6Zs3x8MnsWvKrvtvnw8H7sHwnAoN51fx6x3LPU9CKVabzKiHupNH4",
  "key25": "2YbKK6AmF9uDLwS1B6FeRcBWVSHsS8C37KA1ouyHZnkVzAcHcF5M7CMeZSt1LEy8cxRkeHZhfMEzxdVgVmLT9c7A",
  "key26": "2anrVmXQs7zbjEwg1oBdmhpAi7p9LutbJf27kjXTcnL2u3gTfbF3X2EzNbAKYyEbNyrUzEwnuVkeoV77P7SoZS7H",
  "key27": "4bBP2hUxvPbdwHkCqvYbwWNV4nqpqg4mru4KUKmzEvfsWGYh7WYXC3Lca8uFWnK3YwMEQAgUzTAYyaWhD4rAQZCM",
  "key28": "2KexAzt9V1GQH2PkJErg2k1L398v2L6a9XMd1xfY1HAKMHTPxERvMKbCPghS5vFrZuRgSmBcciwy6FRBmJZdQZeG",
  "key29": "4VSkMR48jb5KcbVXDAUddMqUfgQgEHFsJTWmc9V2pimXzPab3sqhHYJR2LH4oFCyXtTKAoQ2G3e6MtbS9qoQWz9b",
  "key30": "3CKRZxXJAJYeAg7NRP9UstChq9TJxfwk3dC94EKXaXPZFNNtsvW8aMWHPN65QAzrWSLjArPvE14F5LwmydiCVC7P",
  "key31": "5XbKNRVyCki8F9AFugGtwYQ6J82YRc1GYjBoXTknzaKR8WYNJf8Rd1S1wfi5XK4ku7L2o61W5ginaP5DkQhtQGxg"
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
