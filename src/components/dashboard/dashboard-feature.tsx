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
    "63E3A7y86xGcFjZsy2W6ids6TTUF7rt71ZeawuhbzSyPgA4UmP1rRKvhn4xxyxpFhZQ3bG7rsNee9kiUx95dkcCU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25XBA9xwXeQkcucXnKHZDTPGNCKrQv9QWNpb6WvqNPRQM8oJoq62dGDdKBmEJkKNUDkowgAhYQjWw2y6aHC6WfGg",
  "key1": "4s4LdcWDRNS6m4F4mv4AJgkd6P5g3AzyvBXLwmPrj2EsnLurFzdsYuiLzwSQzfHqrsK92mPJmuENmFcEJzcjASL5",
  "key2": "v61HMjjzoFHb3TTrV2SPdMpyNdPG8YQQ458Q4m6xRXnqedsuVuUHKXom4f5G1ZCXbMAY1qKcpcr8kxxUe892Rit",
  "key3": "5gXVnrfHiMTeDL7kdTeMXx1D61scworfP3D6muN6vykXw2CL4TKnTe7ouyRMGDi1iE8EzZtfamoP7MWShevNoLwy",
  "key4": "4g7ffdio9KBnZ48gXfZy7CAiLenDWVyvqe3z3KEv9ksRWfqSxvL66w15moHbQh9VeCHFECqiwsbDfKLVVab3EctH",
  "key5": "JrnvmkgrSeSTCiqSUgX7khoVxA2xN1y2uot4wu7tNaahwtWiiSs9VtJJTW4Dbh7wSMCZ11i4KFcSK6xgXeBhSzu",
  "key6": "2my3ewo72gz6ZGYnugehXtsdCAtfFWPVq59j5z3uqpTHuM7QTCBwAHQ465x6i46YQwxTFR9HRh6CUsh9L7aA1Zyz",
  "key7": "5dx9tocexXyQ3icvcTgJybpM9kQja2Uw5E7n1gJAyr1w7TPT46ZhjG7u5gvy2YuLDQpMy9K3d9P9QBWWUYU3kY7F",
  "key8": "4KArtN7APYUBqnmeqTxFDUZbX49TCSp8oxqvVswMexo2NUE6Zg8H7P5Ax6p3zCGezawPFncbab52U2XWB1yZua7r",
  "key9": "2Wam4xfLn8oPjcD35dNNUyqiFCP3sNbDQDpi5kpZKNj2sRAUKYkyLXdm2q7XHCaoks1d3MruoSC6QyqdKsc5QueS",
  "key10": "52QvsepDB91KNAkj9AgYa9byWZsFcyVortnFDANDfZmeADVd8AMAugdH44Zzd5CRH4D4ns14x464WAaqrWaThAAy",
  "key11": "2Xyqit9oPUZgfdia9fLEeCxUbo9nVvXYMpnBCv9VPZUV891PCyPYoUZqMigFrVTJueSVjc8XNPbssXumiTVg8nat",
  "key12": "8gcsUTkxhTSJwonmjntHBXq8RpdXcf3tB5Qn1S5vdxsimuEGECU5wiTVUvgGJkgze4iVozCShNNg3GGAisRuUFj",
  "key13": "4UxbVRtB9BBHc3Gvvssw6NzmD3ybSBLc5XeCDyvcMSEx1dxDFsHg9ZrkEHnwy1iVSesrF5dMFH7bdWmtp8HyHDyg",
  "key14": "5BFz4MUoudQ2SfXZ2kni3aUJhMjLbTtUdUpYFz9BMk4DpScQyPCjUsNc2LYWjAgEb1iEHf1wiQnADpqsMLx6mnp3",
  "key15": "EjvvpzY16hcLpteyaZQ1KEEVtScEUvWFFjMUEyeCSR1CTKjqYtRz2jntSyHxsjGUp5VUtpTvczRbbeFT8vWZ42c",
  "key16": "4n4HhfJstXKQJWM5XuuJo8KuE8tXARfjuzSEGwko26q5GEsSQSvqAC91ZHsh6wJNgev1W96FNib2ZhQwzyLYqfzA",
  "key17": "2bQsmASsBp8f5TxTMKHc8Mz4p8webRD6Unzy668YWZudB4vRKh8o8CATJmQrbZtLRLrkjTKrY679sCs7Xxwe5oBX",
  "key18": "4yjPQ4zvSJHXpXxnDqtgNh2ht3DwVWzTdo3TZm5FgDMkXvPxS45CJqV1XFapbtePUTnF5v7KjNhymgipvKp834ci",
  "key19": "BFrrjV9HenTuaFDELfN9h7k1wQY1upjcXvL98WvnFK3V69PLhwPxrgbhFKvhERNLpEbJDNJ4Wg95uKBfpdVaESV",
  "key20": "4z1RATSNX29Wd2M6D6djwvz5RCH6ev1barJn1rMfDssBVbzq9dqtN5M8tsjbbe5jwhEpHDuhLbQiyqXdquAM8Uyu",
  "key21": "2iThfRLdZnx2cAL7oN4XJiwKZj4ZK7QUWNUbY5u8su7y2WS9ZbhRVWshacFdVKd8SHQ7FextexHbTXoXkxMFwrNR",
  "key22": "5g3uPcKJc93PZZtzJCpmN8r7vn58ZZLRrjd4V5YDpikCZz8nLFwamLoQnyQMh3ZgMskzoYyYuMcBbYfba4yLLH8a",
  "key23": "2W8evgRJGQpKzA7HPkfBX4pLgSP6VJAS55PmvTLV1hTNSeaTz6NC9sc1AqvHXTs9H5bApkwogtvuPdqnpSKifQ6A",
  "key24": "3nznzE5KLrDidEbTLJ6x5jexoCfCezFpfTabiVBMrU26b5thNSxxHzdicJnECNb5Dt926JsEPaokDuKRyrmBRd4j",
  "key25": "8RSdgTX5jLFPf4qkTKd7Yyt16cYnHpXySyg4oRRr9EGKdXykQAeKSBCfvjRGe3dn5dtjfzFdyd1FKrwrDxXMwiP",
  "key26": "2Rd6ADtnbgH4CjvaredqufMPLZUSSteww4LGBc47pYfyovYCeYMAC3oTdXA6RRULKHrWMXLoGnTpbNYbXNeS9MS4"
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
