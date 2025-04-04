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
    "4gxGen8BykCFh2pR11ktnzpMahJ8GTaRbtYjwhQ7aostqvGrFq2Dz42o8tH1MaxSF5AJhxBaU2UZX8cQGUrYpjiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnbBgswHfNxKU8St6pac8wGzcUK3XppudAP3o3msLrWH3uPTW7fsSRpdHKF988zUjYNMHzJsj4mGQcQo9dra5qs",
  "key1": "4bTJBzqh51z3ADv1gf1fcacMdgoX9CUBQL8dWSHMVYsRwUEM5UEZpzDYKBDPqLFeMb7a3S823bbBrg5o4FoLs5Dd",
  "key2": "5nJWjnu116PkMg5bWxv7u6DnkEb61cj9GHqw7Pb436vAevFzRzEGm89hUs7xhS8rzS7b9LCGBMaVSadCZoAL2tC8",
  "key3": "jperd1m7BLhvSoz55TJ4Ncbpkpz7gTMLs8obQFvNoeGGUqADEMZppzUDhJj1NMapCSEi9Bu6GJ3sAAGHmdu1seJ",
  "key4": "3cc6PVPFU8GjeZ4sDwZPScp9ZzSX7WFnryANMi8fWxkwcvi1YD4JxxohnyHTg8vuDN8iHDZHZXUgg8zjD1AbbadM",
  "key5": "3JvrDa8nvRsanyXbMH1jaAcgtCxheJh5BJtJaQtdj6aaDmuV5nGgCb3id2nrusRq3DLTdvohGXnuG9pKzguLkSvV",
  "key6": "3WJCyMUg1ieiStqhXPabhsKV36ye6bcfQJjCiTZVvX9RawT3hRchhUDhHNYxmM4fUuu4rQa3j7bc2Uc82Ywxju6s",
  "key7": "4uxThUkdSU3cbnLfcSXft82Xs4sNThNxu2LsyUQCEp5niE5G8CPeWtRWzUSLcyS1rEcqJWDNe4ACHSsRuNkE2KsG",
  "key8": "8cZMo1i8uLAK3AHJQtQsYtZodbKyoqYN6mVf3dX32142JT2Z6CvXiuWmabX8D9oaZjRFaZQ7JjuWvZrTo4iDa8t",
  "key9": "5VcrKvSqPvZCSq95kpxRJhomfSY3wrFK5EWnrr6bYqsEonU8gSUdFuuryp2s5xYp1UdSRLfcKGMRaRaa5TWvyuDP",
  "key10": "CwHQGZhPU2DnNwqscRpdaxw7bDyR6KxBPKsUi76U4eXQwfz2m2qMEBrVga96EuW2dnvZz1YwFhAe3kPG5X6i22H",
  "key11": "uSPr5Gi31aovdpooopoRnFai4GpoZBcRPxx9EJsBS9ukVedaiPYwHCNARBbTPVNRnZYtLyKwPQp4nVW9xLw4g3S",
  "key12": "3KC9UHTTHQQZzGB7UtJMRhntTpKQcvcPGDM1Hk954KNcYNGnQVChuHNJatHRNVCd3AcyQcqyKocPt992N2FSzewY",
  "key13": "4cLDTLg34o5mVoWaru9SboeCrtKjeXEdx94SsJTCKTvrNTJ5PFKh5q528mkAMTXdZeARxCi4drJ25m5iAFaiVFjE",
  "key14": "48s2Z8bdbktmxJud5AuMLsUPo3d8jreXRwXRhfyVvVQ5vjiR6u4B9uU9P89ja4TCMNgpcEQbEsRjYhXLHfmcZQwc",
  "key15": "4d7ToSXr2z3WBh3G2ujM6q619WKBRiUF6eva5Wc3GiwR5NP2ssqbMnsD55RP1sq9nrwBzxkf4VV5p9tDMe1y13EM",
  "key16": "4uVWFG9HTBn6zNPLpaxQnCWdmUkvQRtJookmKfG2djaKCAx5qow7irDxbuCjCKRwjNwiRBQVj1FjR24JThmfbuGD",
  "key17": "5SDBcu8ZoG865EHMqShegBpQU95YVQEY886QtB2rE77A4dwqrVp5wdKQerbNm1m4hoifiMyCRu4EYowkt4Yup5iH",
  "key18": "49YbMuVN4RC4ND82A5btuCtM2wNoyJQ1GWR2a3XcbigeV2jhG5BPbmUNr864VWrJ5de8wHJs2a3q7ZKrfgNDvVdk",
  "key19": "2J1GJzS7Uo4pXUHzquTJbDfVhFPh4bJQ4XrRqiEfDE6ugt8a6UDPdtrheNuy8rjPBtrsMUpZLBVnrTsxVCQGfcFG",
  "key20": "2qp48RBZYXqJdx4cxxfQ3yDLh3BAMnzY248t1HDND4B4VLD7xiFK91u7CEvgzFExcPjgBLbcJigdMedmrQKxkFw7",
  "key21": "2sEiq7n2BFtuk2X4JYbRuG49BYJRNvyMPjn7guiwwiALpXPw1HDr2RcAThZtq8C8J4BPuQpjmJpfip3WkGSgtHHK",
  "key22": "53A7iXRRMcHbdXvqYBsgUv4NM8gAXQueMENbSxHRfDodbm5U52BTrcK9xKXgszdVAxUGBDmqh3rD7U9jkBNqjbN9",
  "key23": "33rLFz4DTgVFJVywA6C9UVzqNC71WZX1em44SRZxPdHeSfCCLzZVScqFyHgG2AtLk2qnrW8G2vLnfnwQj4xA1o3n",
  "key24": "2jEqQdbUVewKRgbJB8Ad8emvjVmYTXWpphLDwxN8y1opXzRP2Eg19ERWb9txY3R2nt42nsKYdKsHTiocrc5ztygY"
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
