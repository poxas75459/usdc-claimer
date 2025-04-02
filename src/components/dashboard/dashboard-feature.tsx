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
    "i64NSCeC3vZhuYC18d1aatreqiRDHUx1R3reWKRYujtSPbihowW9BWSA8BwytejzKQg8m4nPF1JEUhvC73RwxF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qRpHpmMQKiUTueCeemWTrHDKiAtu47CrRRoNq28tZ5FYV1sac2kQTEPNLZPLwmar8VsBSzJD53YusNewDuLSU2d",
  "key1": "Kmcgmz5HHgTGGgevo5JYj1Gm98bEpDAJnZsUboXdUZ9WY9eReT2Z3kf5yHPuK7WDZrz5xYWHGo4QnAU4YyNFjPX",
  "key2": "xYGgiQx6mrXet5w9ozjW3Zi66VMC217wR7PKEmq9oSXGncxveDh5wC5e1PD4hNv4YW2aKFqEQEeBGfcW5zA1AJy",
  "key3": "2j6RrfsqTXhSi9fm2gXLuEujN6s4hWD6niRZ2SkkYDiUmgaAHYWA788f4hjCKVvJ4QwxhFR7vYGBQKEU2M3fhmdP",
  "key4": "5wFHTKjAQqrvMVimTENSRnrzTwkLukGx7sJEzYUbnH1fdN678BzoJx3q7VxkqnmC4WiJu98ssSVjbfGMtV9K82Wi",
  "key5": "3rskCLux5Kvn7UZRaWKY9H2WC7Dq4JAM9Fsq8PPh2gVXn88Fy4EpHaGWuti1REuEU1CMJaidREDEdoF5axLzo3Fn",
  "key6": "XWc92jMYpBMRzmtYRaA4pcs3nbE4z4Ms2uBQtLeH4sEoAFYSwdRuTuTnLcapLVZakTWUNnWDGVESAeaADpEreLQ",
  "key7": "2fsRyTg1H5VB8eTFLxmkKPDcSLZCNP2iGVP3RTgkX1ToVMun6MomCz5zSHk5dPygaDGDscuox1SVHTigzDABFTet",
  "key8": "mTY7oAyApV5abdgn2afwQmj5YcRs7MagjY32FAUm9bU5takTYFZd66TJyoUVS4HhRqbEfWnQDyTudjVnxpvPrAS",
  "key9": "oLKHepoUSESwCsu17Htni4Sq2tnSZWztXaeLYRuFoDzDVFMg9WcbZNJqUUMMPeLBbzgSkYcMhfXUKwiNEcLWi2D",
  "key10": "afvTjdiB6BfNm9PXuq33RdsU9CXvBRKTEiUgnvcBfcLrSD9VMHrRgUqdj2Eqtob9SUg1NcJJHrzGGuNbShyGQbQ",
  "key11": "3pJ48nhV6pSQ1VyRXx5dBBWA2anZ8ou5qS3CtiLUx98MZdZFiyQzs8GM9znx5u28svjkm6z4pPmzSeFjZ5cqUkop",
  "key12": "ccNbz6DUFzJmBo4prWSF9gRVUxaRbrd4xDDgA9BHnTz3mHFypM66orMKnKWEKdoHF6VzW8HGdJ5yTPF7VQkErfi",
  "key13": "2Sm4WQwMaUWVYnS3Jjqz8REnTFkDSuADpGUufE8U62ZUhWSwEKoYqqxfyCzwoJA66qxyJThQrWmTsrXYy42B18k9",
  "key14": "Jpdw1vD1eswxNDxz7ZGLytLXP6WFidEYqzPVkt8YRT8JzWcvPSAHeLeuqbvDvLhWUDJgLfxm8uAMgQmmNmfR46m",
  "key15": "36WHX6gdb9DE8vkLBUe7JHBkNPs88qmCAmNJt71Yd6Cy1X1ebjvAd7VLVj6Zi5hjpzWBMeXqLdwn77m85JmRcAcd",
  "key16": "4w1FBHVZV6EEgUHDpsBay76b1kbch4ZmYd6vb89bHJjf16WdcsR5w6A43gAkGmGziPAvT79ZqT7vQjhraKbKow4H",
  "key17": "omxf7zhdGse1VhMT78smdXPUsiH5RhNwrFRYeii8NmH2CmjR4h7rGjMHfgBp7yuadSQN36SNdkikFogW7DEWF8i",
  "key18": "4SpTZ5rnAWF4fUP5Lq1QuQReVqeZQmKQT8fuVN1LuXXX3dTFfSEShtkWFXWwpKrD945SrK1vBnUHEqpB8pWXEMRW",
  "key19": "4Tqw1qks4kD57cPqpsVSRLArMga78zQ9jEDMgbLoeWvXbygkvuj291iKAvWkkwKNc8Mt6hNZ8Q6HJTTggjCLVMYP",
  "key20": "3wfkjAxGDZLpLSf8nMTNA2yW7i5vkZMGQwNhyPibXm4dUT9ixxsJmpFqXws8KRzXnWUR2rf4L44iCSK3C3gkkLbK",
  "key21": "3FVaEkcF7avmVxqFWT8pXQ2z7ueMZ7bWtikTyeuWo2GvVex8EMTzv4YtUQZ2E4KLByeos2d5uR2oDzBkUtdJjSTm",
  "key22": "5ek9KcRxLR3xFXw9nbrAbbGv16oc3PLb1vf5fQXdD7xtAZeCuGfvzBUdFpaoJk53xJrJYiXVHh2JsDvHqGd6CyA2",
  "key23": "4Lb3bkF9r7pWrDTCSz1XbB1qUkUkk7DePBt7PXJ6pYkucANe9uchwHK9zyjVNS4MFfwEv6FNhrz5bzdznrAVniR",
  "key24": "CNX8zwR5AtNriWxkVsKTjrcZfjTsWLugWfpJUji5B6ATmnp4upgm4UtHPTjukdM4PveL28R2C8qcjpYSX8CGMyt",
  "key25": "66ya3iETqxRhcmbF2ncJWmVHeFEcgLBi1xBGxvcyZB9iV1gKeDJ9N92beercPwcaE4AA9VWTQwvjYmA1447PaYap",
  "key26": "3niVZqLLRe4WVPuT8qiXE3AsPXK1toe68UeQw5wx7gJcWnGopY9AMMwEbuqH8y8J2FKzFfNqcMtq4iMFbn6HLfQ8",
  "key27": "abrELyQWPBmD4DwLXt7NT6g27MeSNSMocHZ7C7TUTFnjhV42A8SjNVji9pJ8WoStXXQoAcii63qr882FcY7oCQ3",
  "key28": "342nCK3UCzwCcHZiw4WorGSZ2byuiutnyqRyTV5wFLEaAVGFj1tqspAML1HFpA5fC7twnM8j6KYoq4GfkGvpCH7g",
  "key29": "5y8hRvThvHT22sEhwCCYLp2jWvy3auE33qYATtYuKGK1VBqmUunLZojRDFNqw9Gq6jHzA8GpBBcTWQ9ZFMcuBubo",
  "key30": "2AVZjkJgbouv8e4mh3L3HP1PZ4wZw2PPXJAjppK8W5b7x8RHeURzQw1T7hnseJS4JnceZByAUGqZbr5ugfQDtLDe",
  "key31": "5mNpRXETTZgVucs6r3EKNJFCqmohsV6386L1QEXtbybEzJzVNnMX3CkbYdxHmksEPES6sRfhJbZ5j3ZrSBZe7ogf",
  "key32": "5PbPwLvM9s8jM4kqNrj9umxCYtRHmSoQgiszzViVscEYvMU5Pzpb4bXAP6bkZYgKmVyPChJqsGFcYTqKQXBBZysh",
  "key33": "3RmwdHBxPwsD8YDubgUf6wV2s95iwE8WoMp3Zjvc2D24hJtdWDK2wBHB1DoSKmQyzxqswwRyPzAeEL7PzGUNEBju"
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
