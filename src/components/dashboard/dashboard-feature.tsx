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
    "3juQVmSfv25TGdDMLBgJBPSh41gir3i5qDGLqynL9TUPggESKsfdPiMmSA59YAQDNXgRKJu6yNF8Hx2AGMyUgRq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61M1C4s8dFQma8Crj1Eoi5uaRhBtX5ZJHDR3EFnLNSXGbcDn4dkjia1WkiZbz5fCVmYCmn4rSgqdw57417cMbPBs",
  "key1": "4ac9QHv5b5vWrYStKQtTuVbNpubooQFVw3DcTMSabRmtwerbcea7TZjoSWcziNaAqZd4fCVeebhhjJvSMaHkH5Ss",
  "key2": "3rYARBHtAmmwKeLruHG7LiX1m3ysqnFTKPEsY6H7n196L9zmc1BqRoPB97tKJLoZyo3MRny4ts67wWfQk98c6h86",
  "key3": "y151mP8BK2j9gDHbyRXYn3BsJxXkg6NpVZzb6XDWK1uYhPeDDuiYgFzQ9j12nExTXuorZ6STHCFeEz82qDW12Gd",
  "key4": "4cyrjzJNoGkkQrqBxukpmgYLqbB5DBp2N9yYCGw8GfVkugpV5JyxcV4qbHEtN9e4dtvzidxYjL5y7EHf12Xpg4c1",
  "key5": "LkSkcvB642J4hTsKUjJ6c3xWuEL5rd2LMDm2En22i9FV73DEK3jsUdqmFA3MEsDSos9YefRnnC7JHc985LdV1jN",
  "key6": "2u1nyDtNhpgqWDbrTntpF9SKKt2ySUKJs47Lmvu5AptLswuZHf9zzCfkMoZ7B29QPnWwuG4dHB9voHK2dWhtg9DU",
  "key7": "3XQUdLPKS8Rfv3YXuwtNoGVK5bWeFtBUptEE9VsFugbAJsirXoCe7zeDM34J6mHtjon4z5gyFVoaaKdqwTi7Qvd",
  "key8": "4qWzfuLnynYbh6wLd4Pd3tAgN1w8YtLXjiSUcikbjnEVx1uk4A9GqAQRutpjYsX1uDE8fJrLYKmoguHN3HiV5qKM",
  "key9": "26SFoqcLfU9N8C65yLjPdS5VzT6xq1B8usmZqv9BNgwGG71gp1QMfg5bpcFCLQ7XgfH8A6RTL3Zmkwp2SCK3rR1K",
  "key10": "5kq3mG1fufXEmuhJaMHf9MvwosUf9xQpNFsZd59cMHx5K1WukqgqSqxqhcLGibiUxQrV5Ry3aKxJCNdB3xswviss",
  "key11": "3LHrZD3kbwSfCbATU84xPKB1cVMDS3gpZmwe7AREaS3E6e1HoEppv5rzDkwctVFuZ4d4RqTMz4MBhUN5wyPMVRLa",
  "key12": "2dycFCpRAm8hk31ZYgyvqUYCKc173XKGmHoAWSfXEPpzRfcCkeHAB8Te1R6sCgcQxy5FSBQPkurguAg3zEheErYn",
  "key13": "4Noo3kASh6j8nanLbRpCmA9iVWWPt1s9RcdGSn6B6ytzgwpntPnRwADGdBjdGLYq8bCdybpETtuP9uzehSMdyzqC",
  "key14": "4N3XLJUhXDDbqTFV95DABryXxDZpybEWeAAu4LtxYe96657tywmRFhBUSJzSHKJqTJ7gU9DEtUzE9eFASCiUqyuz",
  "key15": "4H1XrwYufyQRDnXtjDhS9m3a9kBAwL1aNMzZwfQoeNm6G6Q7Qn6Gh5BzrTFvdwRHMav9fQCyKoAdDh7zyzgYwZmp",
  "key16": "2NjriYZtBTD4J5bmwu25V64SeLnsawmoPsCwwbfbnkS3sCyYnrB1HtFwgFFF7LK7mxvooZU1gXpN83btbdEmwCW2",
  "key17": "2zGFPGHNr6kL1LRt7eEWig89HYUsGhyF5vVrunmbtRe4J2fkxLDXGZFUDN526MzhNnH4TejJrAso5dtTbBh3eKLn",
  "key18": "24YWheaMs9RUUGFBurAtgeeBFKheUSJe83PvPai89Gsf46xUbqfi6E3tqUNoazu6VSnYft3uVLGon94d3VwHtr8j",
  "key19": "3hMkxdAFCwct1NwYW4fVTAa9f9WqGYb3GjHnzbbxY2pYRiwtQba1rFGLJFdy5vCW9airKHJiC4ysJsnMYxQH1XmP",
  "key20": "66Sp3NSiPiYSMDBwb4v94ZhALUR26VNY3TjtbYxNJNMcNxk9U11RRW96xKG3Cxn7FoNByYQgxf1FhjaGWDfb3nE2",
  "key21": "5gQ4XVg5KCStwXPC6R8WenTzECfScRcxCz1GbikmnmzDFEWCS3ThUG9uuqacfgmbUE2w364pxSEJTYb4E7Qk3NYP",
  "key22": "CGMccsefUpGMkTgc9wA2pDbVJpdGmWUpQGyZAW4qgUhiPy6pY86YNUwy17ukek2eoxYqbL69HcL7WPXq4Yjj6Kw",
  "key23": "p8VMbmujgcGq8edkixJmZ7f3Jka7Wfba34j1SKXzASjgaaCxjJAHEt12K34M2vJT8FAz8LKzAqjp1qhRUWFBo3i",
  "key24": "42QxTiUGHFiYSv4AAUtaN51L77tCWXDWDvEyuSHuyXuUA9eGc7Up2vNrXPiNVVXvgFB6HYTXVjY12Z3CEb1NeL5E",
  "key25": "4CPUJGdgDoDkyZ1JZmzpe2eamJgAKTEs72CZvPFZVnFcSKTYt7UtEcBHk4MP2KegDkaMPrKSTLAcCgKWhWK5bAD6",
  "key26": "2TZQZi4xauybPE9ZYYdAit9RPQ2MAH4VfNYaFU2AaNyr53M2Dw28fbySi4PQ4b3mCpMqcb6d3VE5Htswcy3pGdpX",
  "key27": "4APnYCoQSCH44WJwc2hbgGJzqpov8o7vijBSCrgEBZTCauNW8t2TKsawQwa8aS5bmsbdVoGAGSp2PVwHEwdwSsgm",
  "key28": "8m249tHs6ZN1kMy6E8375rfyP47L2voz1NJi9zU5sV3vKwxEMEVdKfbb3zq88MvYcQqCJLvMG5o9oQJeW12dEka"
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
