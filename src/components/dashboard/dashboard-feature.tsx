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
    "5M42Dt4zyYsv4UW8kHzzGiuTk9BANx23ZPaWKRqrr6keSm3dBmpbnyXfgmwvDns2hZjmAdeYSCMPDNZf7tyVdPwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A6W1bpzdpygf1KnokuRPzwgVAQ2cKWaeMRoN7rTbrppJNamSgiTRhBUKAX7Zkt8YG1aTaPnxd1Hp544nDoDEWHg",
  "key1": "nswBLxJXq4QyRYfWG5KNfPLUDz9KFUM57tsYc68X3jYrG23zXzWzwrvmWZgiQyo2vcfs3tWmd14Kbx1kTPd4fwU",
  "key2": "oZFPNLeYxRUcK64pFECahS7pVbMVsAnAEEuysxd1SGsA4beuT327SKX5VTZKDzoXr1oCZkWCHryXZyW3exsSp6M",
  "key3": "Nv8UXeiHw4PEFTB7PaHHq1eEwgwVvsHBYAxiTZG4r9oPbWsuAW7CWDN4E7R3Ac62sAFZWDUhXx95vQ1TfPpWz8Z",
  "key4": "5R8u53kWVtgJmbA5NMqqfDrmVRVMae3bYkeDv3QxJpZEj1incHPokJ6MwZuf2cvkEy3MA3iTBpmd2xmARdY3R1WC",
  "key5": "cSZsVNhSRN5hobuGoJMKxB5rr7rhSZnkkNBmN99X8q5pQxRE7DURs81xSogwHZBjkg1UpPMpSMP1Nbv6bWNCg9A",
  "key6": "Utuafbuj9iogUG2kcegbSigxMe6qG7pifGPGpPUJNjHSg8vWYEG5H9zd3sHzHatweF1LEtTbqKxXZGBXmMuoggs",
  "key7": "4kEjtCn6xEU2VUdYw6BEA5HvTNy22KofGM16YQVg7PTV1NvaNjVd7vzBuakohDQHwDzPXSZFeB7XSjsxSLmZtBNb",
  "key8": "zGDaAPaJdprYYqXhE4vyWzbJBmEWZoQcdk1UJDZfVEqHtkTrNNhfrQH2VT9nNFnYcgoQjoJ7wTbHJU9GMEGAi6d",
  "key9": "561xAuPdx1cQMJ7k7PYe4o8c5QvA2Yvh1a5j3a3DSd7FpKuppVA78pfe5j3Ko4Jz5g3ZsoQeZAq4Xd97mdCGjekW",
  "key10": "5ABFARYN9hCCJkezXug5L4SFWrRg8a1azvgt3AQbPHYGK8pHU4LrjCN9njFvnJwiQjk44W3B76jJ4CqyUfDA2kQu",
  "key11": "4uuKsem9EiEjzDaNJbLvyayCDK4yksWaukczdpaLWhg3VawqZnwxNAw5cUHp4mEvTYktCJ3Vh1Z7KYE5TwkcYaHM",
  "key12": "YmzgbbfXqR9grUy1272Ecus2KGTKaogx9fBUqRGe65pScAhBLaPRy9h8AP9K5ZjXtzqJikNSURbDUPePQi1NS5K",
  "key13": "4YQWi9z78eZJ3W2TZ8ZMNXW2LUUA9CSQFGfkaFMwNVfGei2dQmRjTBw5SNnc56hBF2NzSag3V6YFQLGVksz69BhD",
  "key14": "5xBWxr7AGyewuAJ8wCYsHAJwWSQtQU6ibU8NmVSZkrK2TxsdfwGTBptnaWU87YtGCsq8HcE7WTHzKR4E8PtxVrRE",
  "key15": "4NvRFcsLc5Q2HgKh2AUy8Ztroz9yLmYUJURHQh2akCk8CcVVBDm6pBW3QSz1qaAyrFCTTAT7DYaz2SiEMwdqmf6M",
  "key16": "2m96mus5t1P2znh6K1KMxp6rZwV1nb7CnB7n6tYQf5z8N4uLCU44PLJC1rzcqvTsnb8sHKn43XtuRkz6zfDGxBPe",
  "key17": "5NqQ9at4VkHKVZQG2PEM3Hati2z6MRySWFH39sukWtnpbNE1qzF4voLhLMU5Nehy85yedXcV8yTNiwFKtrFYD7jg",
  "key18": "5GhRYEQVA7QqRTZVfrQjtAx249ZjSoD5cVa9aQ3yNFtex8XrN58P6AwQwZzxp1J43Mw2UEeYgAPzTUtmF3GB7teJ",
  "key19": "2pCSheoEw2K5D7Tf3RX8uB63AmpbnX9ExwTSjtPGv7HbskFf9s3XRwULobGoGJ31zzLP6u6Jcm6RPHrGMuCbRFRB",
  "key20": "4Y17tBL9jAVyV8ZozTr5RmRLbEVW6bAG59cf1DrCM9PTWueR9iDnZvJyLyD2YN1xxtR4HcQsJ9LD2Vfn6pUVEfg9",
  "key21": "yLJf57ibMCYGum4HbokieFvRZkRWXLkihdZSUyCmHRm37zpUY35GQHMLVCoiw1eATN5q2B7mVNmH2rmSRBZLqY7",
  "key22": "4WkfAhco36Nz2wXPY6qfwUeJbuvS9kaahaDXj4pjbvzamLGNtvgtn8GBNuc5rGpaNyBLut9ry5kwdpnS4SCYGHmE",
  "key23": "29iB8bLksXwK9V1VeDHWPkNtcRik5WqAddTaBBLSje1CepgsqZRSUGNbiokVfW81ZxceTb4trtS5akZ9WBSTVNkR",
  "key24": "4WEvTt4G6vHQoUrfJjyLoqKy5wn1zV7MKupbDhcD5sR742TizHYWyE3Xw1a71zq4Ase17SwoZdTbyL9eKK91vxHe",
  "key25": "3ebaidzEkthBz7ChA7H2yk2pvhrxCcroctZXyYE2mogRpkK6EqhZ74jWeUobHf69mj86mRcQ4ki4AE1eeZDiPCUd",
  "key26": "2Wm96rRCMn1QYtrJ6cY36sAQjg5Gff42X6qMp6fvXeSojS9EapV4Ga8Johi3JhxoZT1U5xoGo9giUPZjk91Y8Rse",
  "key27": "5ysK9nrbJaYgbitVtN68bGBj98QYMkGu84N72TFDGKd5k1coHecZUcNirb7cUqZthiaWtjy3v5VfL6MMU35nEk26",
  "key28": "5AMBLcU9EJg2ioQo1GHu4xzPa2SaNzKNzAivWp85oRSJVMAntksXaMwQeRKfkbPQ19fsBj9y6fzRfVcQKUQ5qZVS",
  "key29": "2yFcfvbhHnDz4fWT1JiwHE18gt8gvo3kmYQKCX7QVSdSPqLyRnLEE2XEpZk6NaxvGa5mwvVNCejDKP19e6pkcXD8",
  "key30": "53tuivjcoURT9TKNgm5fKNAtbWJRuis61Q5F7JGWiPV5bpRxWpKXxdpw86Dd7sns24HudWfXyKcWoNQcohuLLKBY",
  "key31": "5zrG9BsKxXSh63149SJ42Rfr6rbvsPfFEqkC3x6SMztX26az9mb89m1khB9zUfc8ifgEgwWeakqvBBbMKQmoZge7",
  "key32": "WnPV3RvRFaBqg7DT1bG5CMMc8MVvxtJBJgxDBqKjq81YBsdRSZ9mtZzQK1FvUzkSTeCZTRqZEcb4FeDejZF5WTF",
  "key33": "JWGfrR7e6WUPCnvf4f6upFRmLWpYJokvDDKakGtUWBpyLxXqzHCLmmgGmJ4xCycvUmjja7bDhC82a7zX8HdGDGv",
  "key34": "N6LHG4wKe2eckQRKxX92w3n1NCoZKMT4KWBj1QoUukAsLNxMnNEmagSpb5957YM2Mw8JjhZ5THkmjVtbVKmh6dR",
  "key35": "3LdBFdJ5TzgxP3J8u7GVhJ7iyyKAWVVhcNaCuR7Wt1HqCJ49N1aB4nSPHn5ZAg97ov7d4Fs2vSvwC1woiKcoW9fu",
  "key36": "3WddkBo6n79tYnJWERDRFPVZw8GZgtMJnubtPikUk336Pgfonwzmsg3Tend5isgPSBZoneXWLvKkWKiikCpgZdXK",
  "key37": "4PCmq26eoTx43ReUHTucPiP7RM5yDAXE759hWtZXGaER8X9CxzVf5G4M5WR7a8NCZwykKANUf9DmRcQJLkMg9Sf",
  "key38": "4mvKN2SArkxJ33z4frbbv6it3fsbpYr9DixxbfsZqxQ8m9DwARprhwqX9N9ShyZR5imtimAzDmDZ2KLjU8Z5BHFh",
  "key39": "2fBhR8Z9yFBHMWBWoWSrP7mVAGZh1vueHmACnWT2E5uYKja187vtDhtAR89yWbt4YxcqWNqDMSq42ToKVsQWrXwz",
  "key40": "5BUswuUdnisfJ9KFyr2PBTEnPSixZahEwWD2yDL9Pbiqo2NgnXqZpX6oAKvrQzvoWWqV2pgaxBaYhFYuWMgVijW2",
  "key41": "ZnDkwZVgimgrutiTfKeY51VrMgU53QoLE1HcJacsejd9gdBs2iEn573Q2K6FrZdvNXNo9fFL1uJ4S8Z4WB82xC6",
  "key42": "66RoTwzqh3WNKx8wbYZZTPiYc7LYthfbJnidBFmkevyTyBEuMV58k1oX5xFfMEHxHx1BfwoNGPNRg6h1UHeDaPZ9",
  "key43": "3Ko1ufrjTtG1qf2xyUEqqcZRG7NHsdc95oJLjagP6T6iyj3Mmq39x4psfKAZfLkSNVkPhFzYm2evn37EmhDqE9pH",
  "key44": "3tziVbP4JZZTEscRNtcF64W2cyDf3yvSkaeSbkUt4EXSGwk565edmMD6Lgr5gZDAVrGtG3jgsR2zY7HMnnwxWXvT",
  "key45": "BW6FmQPP6LjRLWZAPsdd8obTJux6jRGmGhzuygXvPGBzQxvG7AEhst2ZpoCdfcCquWCCJDXeBAj9oBUHLJYjhij",
  "key46": "2BNQoTvq7GEBF34cyMsc3iC6x4znUFmqEqkq1aPw6ixdxAgF4Xw1Gijp13z6yhjRDa9eVY3ot1WGp6dWeghSvzX6",
  "key47": "3CXFyJW6gBgXxZLkNHT8PrEPCVATcrWF3dL5jCKv9xYQ1z5g24e7CK66tLGwzrQgsEH8vKZkVS3YJdw2E1zWTQfa"
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
