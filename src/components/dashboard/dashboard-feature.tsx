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
    "4YAT3hN9tKLcKKhxy37xgee7xAYjfY715AC2eze4KR8TtHwBuZzPWcFoydbzA1KFqqLgAL77qJDSwhc5xk69Ho3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51kEJmz3ut3pP8x1R4WhaRC7Tmo54Cb5KSkzaxBT5Wejm89Mc6yKE3tmv79QWaGHxhMd2DERg2F3B5PGnUcuZdrT",
  "key1": "4LKe6JQGcHDa1GnBUZBECALAozjiQ5G1CBjnNSdgqemaSGQ84FLuv6aVWyhqNfNTEYCpZJXMgARKyPR36mdrRCzS",
  "key2": "4Si5cRxEFMAXJq1htLe9sqqY7LMhY58f2Zn5HQudcEsLpNheNfPASynZNQYfvo8LZP8TXi4YzTAkqycsefrZdeMn",
  "key3": "4zpL8qs5qqEXq1ESJ88RWMxzWGAb2m6exiuQr88xjk2XLwZWC5FW3pPUbtPLZLzZ4J86pYUi7voLvTwQcXN93hUS",
  "key4": "4CZLQPcxQfrhdBvr7KULFxq9eM5XGuYiTYJ2vC1FX7jChbyJ3r8MnaVy43bsMxJPrvfmdG46azmaZLBCHrqiBREz",
  "key5": "3amAU34xwAz9Enzw6R82ysprguvyYgScGPdnzvnVYGGbMAafg6X7aqkE3sBXccrqKHUfPtWs8A78WsbBaGTtv8gZ",
  "key6": "2XARJhnssEiWdEnvNVnXHQPnvjpbSpChFChHQRJr8pNizFvTb8ruRFCScgzFCB71UpsAg23zQe2drtJfp5Vq8QP",
  "key7": "4JS6jEDu3eFDBqMRbATps4i8tbLhGnRxdLJzJBfV1NuMupD8aw7x72bVU9y1XVYy9mCnQDMCH3skp2stYxvqZCaH",
  "key8": "3siKRtEdpAjb3wx8vVfGApLzq7c5fm2C9kQ7BzNg2w5YPaJkDdteHE5F95D76Bwc5EhN3UBTP7E49zAukFqap1Tn",
  "key9": "AfW9JvVanzrsyuaBwz2XNRCDAxk4T8LRe5Mdj9Yz7FQNJPwGnWbZZYqgZCHfcQC9cwfM6gko5G81qSiMrQXzAwG",
  "key10": "5rNhZWWKVzSbE9M5vyTkd42pqhnai58jDPcas2M9DwKmQUjot9xhVJvKeT6HxU45XmxMKhxDxEnnZkGCGf6Sg5zg",
  "key11": "fHFppqj4pSsjm8EHxb5eSQD4JXRPqmvVqQfcXdvXwViXoSEgcgKgAb382YQncpgNbj8gREJYh6CYw6CbWPV7sBo",
  "key12": "uUQkT7cgeGTrPDufWj57zy1YLwW26tdRwScCzEEfRooc16zQ7p9o1ynsmd9vfqRdAgnov9rUEFk24nJjj6jevt6",
  "key13": "jEBqw1GqJZxDHrDmq5DUkc7ExQcbUs8KzndNVmfgjwCMgp7TLaosNTw4aRvuU8SiXRwjdytDyR8TVb9GPto4sGv",
  "key14": "56PFNJyEW5HkuiTRhxPqxwuaxU8ouwTK4pcF27bpFD3KWVnotPtxC7AYchMTeBy2VUbX7XAh6DQrjheGEHK8JhJL",
  "key15": "2hVXdYkF8tFtZwz8VzT3dt63U16zeu86H9AhcdFYREPTDxTb9bi9Sz457wi5dJr91cqSy5WR4kUV8ViZwnfR9kuV",
  "key16": "5T9gafG8R9i2RiphnwMTGWENnnjrEpiHLdzxnGXqXj4MRwwgG1anQY7pi7Mf8wTTDRybGy5rNag8AKHrGdiWJwht",
  "key17": "5iTGnNTZ9eE4ayxhKcBDxoqdkhyMKobKLDRRrL9Meh7GE9xY2tsTxrbAWitUFfrhry7hfyYVTeMpzyzxeMHA64gV",
  "key18": "3X26uzG1g8Lw8r4G12TCzUo7YGGjWGZrxnrVm3eE5syJTmr54HqeYseKkq7GZvdLXejUjCNLb383mTb8MNoZwrFM",
  "key19": "5ChjsQne2X6xSxoMfoohLiz6KRTFSRsU6Y5evecxdz2eqMD3RxAjE1kVUprHqT2fW4ZqNdcS1CSyD2817HJoNQw5",
  "key20": "3TW4qUe7qQHCt146zbReWATSaCY85iUGJFrjcXCu7JrhJcMEJuZqFWgH9qQUr6mY7cPAp99EuSPXEMeo988XCGn7",
  "key21": "54eAcPGfnLDWsgq7jVUUaMCUCMAiUKP12ebYCJAsM5FM3avayqB9KFPvnRo7D3CnJY3HAexVushEwTT4iYtvjWHL",
  "key22": "3Jpo3TdV1ukFQSQR9Mkwzr2kAoXsbQbykGkCe3cmitiCy9bugYctum4o96maPKXjEusnBn4kNMTatKHgSjcS45fC",
  "key23": "8g6eeKCLfk2tfq59NnXkwZRmjLXKWi7Y9o2XQgYgDfYQBTXcNZRtQsrrjE9iAEaFQR69theUdfPzE9n1hdByuwd",
  "key24": "2Hu7JRnFh6tAShhQ5wwQsgfLjZrbfVVRmGmFxesFmYa6ciQDhRgDHm4Ty2R7iE9RhUKh5DouHWWc15BP2wmYDh18",
  "key25": "haJSB6Q2nUzC8LgvErGsCzFHadrhGLkr9GT81peTZ4Nysoc5vazkH42VaNEpigu69Jwrd9ea4xryfGcRF5LHFpe",
  "key26": "3t8jMAbXs1Kmjh38bSPP6ui8m8jrHJPj1aKj7iceUf39eaU8s8ogB6CYdPaPmERg46DvmLbxeqzSB9gbA5VtmndW",
  "key27": "3pGznDLjvQeQ4s4MMCg78HqT5puXDhWspZHgwvXFkUoBWcGR2qLc2gncEkzG1RQ5iNGgfJZ8sd6gRDBeGFvEEXYb",
  "key28": "5XVUovY274NbC5RFTRjrbC1J2XVfYojKraM16wx6kB4NvbRbZhD2nXCCFaQmo9VauBimuN2D12a3jPGVCoA1xA6k",
  "key29": "52JrM8QaCQSLxESR245eK6ojxwvzupdNpvkM9LgNPdtb15qafvc3beZGPbsPmsfW9aWvgEXRWzkvKTrnvSBgGkUu",
  "key30": "5aEgfn516tFUcPdbXy5kd2nFBYBjpPQBAu2nKxGbHS7aGbxevDzu4PzhTUBVCXYpt1SZr6YJSguoVy33KDH1mRYo"
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
