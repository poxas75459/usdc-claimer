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
    "2i2VNYbLbd9jJvwfi8afiZoa8SmmCYKnoTd7c8KngpULYwsYkqwncBtzCuYJ1zwBDiVw3UsyVPUtCarKNdcXE3Sd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ha9kh3mrJSAeSB2ZB6UStHYKnSdmVKbEn5y9bowB23fZdkNTMAEJERoKN6D8zDcrqQUmngAXi8waKwxjs1GFMfY",
  "key1": "AWbZ4QWVcxQYxtZF2jLWvspZjvdutKLH2Trdp3Tyn91N2Sc39N5BtLe3fVZqvLkkFcKepDhEaUv5vautkDVr1Ay",
  "key2": "25yMG3QfSFbnGLRPVW8uksAq5C77H4iszMJzLonrU2Kek2Pr1r1hy8VUxYJ92BP1X2a97CSqvJ2CEtAVpcHdGUh2",
  "key3": "5VvA5PPBVtXt11FYv6768LuHVJ44iBqP1vuaUvpwE8MaZM5M2UevUdxjSZUes7za3TqCWJiCUzYKx8KDCZ1ccHSV",
  "key4": "4oTvsJzyy6iycbWhWFTthMYQpHHCrRnFnXoU2mg1HALikxNLRni4wkoPgLrriP2jaKxBgadikQ2d4x8inVNHwapt",
  "key5": "51mqJS2ewbY12DpMbVHZmaEc9aJG41zie8sqMbF4MJxLTZH7EAo9sd5ApK2ou2mQMpVZBTxij2d2jft1ZWtzGk19",
  "key6": "5UZpKo6d4BoAK1krj6Q9jxADRvPnhuyBa8YCmS6DhmXxAVAYTtUPVUQZKET8CHZVimz5nmkdDFpecKfyskyGtnso",
  "key7": "4N6uPvuWvVP7FsQJquAxMs4a1Pk1cyY3Ui2s2PB1eT1DZdqrjt9uh7YyFDqZTT7azVsAYksKvkkku95Zb7aCNkFv",
  "key8": "cfXn5uNf5r7ACMPoeThTxxdpNMzKDZmwn4TJDiWRDUsmBVjZJvqTrPc96vEGrbQow6L28JQArctWMsdPCRrvDCD",
  "key9": "aq5HC6EbqiXmrHpnq5P5ihHyyNQhwRSH6pxgKrfU2U4pmEnjKuhi736ePnSf796ufWbnWH5PgYT8gGs1Vo5jLko",
  "key10": "58Ky7ypPjCEUdYNjTTsTDJbbZef53rsJm63iQmhvGFLjyqGETV8oyS4ehur8dUFmsDEJybEp5Zb2z2BseuP2vL7Y",
  "key11": "J1YEvBXV3rSmDcuufkiqXznm9juFnXg4kgaSK5avnKVWU1HG5sXLbUYSJtbb2mNbR1Ko9uFUAo8cXa4qM2eMGd1",
  "key12": "22GGF6rpJvwmM7cdofSD6FkqwH42nVdApdgNdHYQm6LmD4bEv9Dd5mYVZ1kaewDx47sr2fnYU3DDnUTefnBMExr3",
  "key13": "4nNQcjEXYPswrtRK86sMiUbgHf6MUkCqP3imiauUyYV2WzQyG3gZVSUhppaRCuLJBkFGqKCSesG5abEGUxWY8SBH",
  "key14": "3UNhMihWEXbuxiZx1xgsVn1E86ZuVu42fAuWkES56z644R5ueS7YRKKHguwMfUjLtEdvT5cfSmjXisr7aC9DTtBY",
  "key15": "LU9gpPH1ndu47n261cpwUfifeXEpn389rrG5SyvHeWVfw3QHvoqmimrmNoAdveNxC29yXXeqRWxfYyFii17nYY1",
  "key16": "5xcHWNYiunQWdXbfERyrqcSsD7hgKeQdqtWHaCMSktbAvswJEGzFYrKDRpeA3KjnXRovjh26VwcchheAzDU8sCaV",
  "key17": "4ARVRMdBsTYm6m9MGZpRMzzHjydzQye8GBkWR4q2XpCbxegCQaiLv7MXV9L7JMqrZK8nYjgamSWxcFbKA12ykPGt",
  "key18": "njffCeAHdx6ER2aefQXrcMZo6nSf2vQ6TmukvsgPVZBC9Wh5fHVfVCbiS8tBAVKowB4x1usRqTxzyYy1gN2rVLE",
  "key19": "2BTbcameSmRayNN5T9WcvkHsmLatnDX11DNE9ik3mUEt89V8oATKUMrHQFvpGXsgprEC7TReZ4CcLyqnvPvRDJQG",
  "key20": "zmRsJs68UV74qNqgXKFW9g8zE8Ber9PAaHbAkw6MNChzN3SvUVSE4vpyQSsxZxuDqE8eTEZTG6mLNxzxzNBGdp2",
  "key21": "3ZWLhxkL47L9eccwYqjRRfYuW363dGoAU2khMeMnkZAuwqCe1wPXxzsmCvpyxs5msgsSdd1Qmb8KyGzhGECW5CCo",
  "key22": "4fhNjZsrJN8Jh4pKVvdVpZQE2irtqdqwYugSMXK2PBcjtVURTpTQEC4MsX14KWec6bVyqE9DR22mrixEDAnYmHf8",
  "key23": "2rXWomVw2kT7TWMPUt4EeJSbRsPtGffMrAB6XvBxRj1ExgvSxtAJeKh5BHwar74ePjqKNJyvyK1XrNnZXHUbNU5W",
  "key24": "5JkrgcQV9JzMBSNKrpxRGHQ7oHAGEmGGoG87GXpJjcKb4f9FvWYy6Tv95JLZgwkj2D3j1uyrdmoqZzoB1treWN6x",
  "key25": "4cmQppMksxP6trhA8YGgomaEg5fpVTWbdDqfuvJJs5o8jEE2NdH7Nuawthmui7Bbf1zPb3ofJcy8oeMuUSAmkFC1",
  "key26": "oHdCFNFnYhQLjp6BXHkSWD9ePGoAJXVmb9Ynz1j27VUuevKNrQMarimY9LQtEBgP5d1hkTb69SJZYQ5j48a9WjD",
  "key27": "5BMgv5tzJsnmwehaUXHiwfhTUL33Ej7iSrhGG2oZcEtxc5NzVzRpb8Dn1Spfx4MxHxdW4imR9DTPJfahL9m7UwpJ",
  "key28": "4dXPWQG6W1qAtyQcLnHpMJYvSx2tPZNwtszTjDZwdksadDybtF6NKBsKegjj1TAJuUXpw8W2pyyRmukUPdUowYY3",
  "key29": "2nT4aNXowDGQknz5ZoyA76zzh6pwmx1Svhb44pUCRyZEQmgBgAqgtjEKJUL84aASwPjJQhJRh45b1j3x6zKzNTc",
  "key30": "5o3WsVudj4K3bbEnD1ErzMALMPrVg78RVY3Fw9cASiaKYzbnjtJ3cDMSVgATWjQJvkqqp4f7myE6uebQYt2C9nzy",
  "key31": "26ALCbRhT95hUAB6aePA8DPGwjGqM6Dc2qUqy8FLK2YFfs45N1ZBVcTDSo2YsVyCPA6dvdH6B1MtXPNCvg8fTWE9",
  "key32": "2E34KCRbEyCUwsMoBqeoNi23cTtYyXJVcBiEpota7D2nYVAcw2wQBjGRPF8iyXL9R15ru4FkqCG9vbpMVwtCyycQ",
  "key33": "54UBGHHji6F7v7DADeuVdEsAxHtd8fcfb8crtkdrUCVCbWmYev4ANQvKzVCGKoJfcHd5du6zyJA5FbbCiVSt2FXJ",
  "key34": "4Y68miEMwt7Hg6r5Vb34USTa8L36iR2bX2VZ8dMdXmNSwwMaujbVPZSBYa18PdGTjg1aK9iAFmyzzAM5HLvj27B4",
  "key35": "2mTUJwqzv3nFv9utU6YSXhnqUBYXcfgtr3SH32EMHAg3RQygaFSJvCfpYZ1bFEwxngXYTuqhkMbeD7w4MWgidEhp",
  "key36": "5k9NUeHZzrpHbTr2AzyMfgrzYcB4iTnCqj7z3Qo98hHA6ZJnYo8s7uEsCVFoP4npQHpycHtvKZGyR2TBJ41Awndh",
  "key37": "3kJvP15EWhBUkK75YYVECmGMiJYi7YVTnD4NDW4SMkDQNB2sJDurSxcUCmTs5EP559N7edbYBWm3Cu6YeTKHSLbb",
  "key38": "5veLNaJDL3me6DBN1pRbUJNdFXtmMTL6EK3gWNmghKRJsk3KKPVa7yVetkHp9d9FS7JxUsnJF5YABDbsygPJtAok",
  "key39": "2sk5CTDJPUksy2YNn5NbsB6yDugCWVTzHhJncLmr62Hj9b7wBmGsEFm9rw5tQdqhH7Es56NwDgtEn5qkqMGxCvKd",
  "key40": "MQz4QTzccv7qiigTMqEtD9f4fUQV1b4BvCX221DB5SD18vTLdphxdNZCYDHcpNNaD7Ps1ijbcwUQPGkobjVCLTW",
  "key41": "vQD6fCe2yrqRK3QYEPHZFq52GnuZTFjJzZZ1nztyAvL9tLBbJ6M96CpxsoPuAZT63DhLornET83naerNXARzf8g",
  "key42": "328Mqayhjh3H7tTzYxmGhELzYWwzPptkypD5rbzo36inxDSFqTbLkAoNa3FHvX2PPMhRRQj8TzBQRgNFsNnVSvg8",
  "key43": "5Zn2hA72zAD8evshnS7j1D7qmTYbqAxqkT1uYWfrf2RzvyXR875gwZoCM8rLSVRijQ4UX4L6oRwY2KcGaLLtVr18",
  "key44": "4qjLVoX64So2bLZYY6MMkFPinY4zukhxsmkAHG58Q3ZhEMHx1WFbGobwzGUCWCeVhwHQ8VdCoKFRNhLF9f2SYZGJ",
  "key45": "3PELUoYLD5y4BxqUyanavEetB3swUZngtVH3atPYYpQLrdXLvkzEUZKGzQqnzbiiHYgbZvaXQYp6pu6hwhzeTuxt",
  "key46": "2DUchpwV4KxTenunt2bhLCEh5cCJBMhnz9sJG5KQpcPBhh5PNyjfUCzsSaxP7jerzNWvfYQvNTrjkM2VD1vbQZcg"
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
