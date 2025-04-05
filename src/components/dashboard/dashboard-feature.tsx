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
    "2u7dNauM6uJnQzog6fADRnrYzVTVRbiKPEsJTQb929xtiRkfFbTD73WSCS6ZkBjERQChdevfBydKyfhDWWHaxB7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dvYHqMfzoNbQ4HDXpkne4iv6RSVJhhZQX2h99ZBgDfyBmCa9gpuH19isPvdjs9AJpgEpk6CmQreivVwsAVuKFwh",
  "key1": "3atVsLXvCc3G9G3CW8dTvJsRdx9cqyvXsT559bxabNG8ZjMxcBEJwvTbSgMG4BhKtzVFXhNvRkojJZxC4tumpU4u",
  "key2": "4z6j5QJG7B3rtSC7DMtZrymoed14RDCcRFxx9biZBhZtz5ZJ9LEhEWZKUKpW1d5wGQTikvp4DWkFRdYmiQ5vKheo",
  "key3": "5ZppZHWk5vFXADceE9RkN94E1oBHLahTy2fAM4SooS3FGVrzjVH2n8xk5S4MHMQYodX6k1FNPpf8So6qLGkX5CuC",
  "key4": "2ut1dEwQE5719Q8D9Ab28KSs3EcGrdLLz1c96PvqLNyi6Mm6cNPywYAueLoAEJeaM9kCzJcxBHj9ZvgJT3Ceir3r",
  "key5": "5tcLeXbaBdPAut97kGDvdsoScPV4JxC3vZSM48n5ZJHzbLsqNwfJcVbva9iqHCNby8ekFjDZvuxhUsQoFEL4Gsui",
  "key6": "5MFAdERKrJ7LE8FUwHnUHeihhrbanNQ1J8Dzt8rbJbyBDBv2LXnadtrDdxdaP6UU4dZcLWAhX2t88rgSviHLyaVQ",
  "key7": "4fnW14nJ6kWjpUunawnsfVJKLWG2hFiFZPjE82oEe1bP2NsZNhLLhyu4cC4KPiUYGdf75C2iunMe5Hpi7oSSuNMY",
  "key8": "2zh5xuoVeALdAAzezEccPgDjCv5YqgQj9eSNAJRcZqTqCeh8DcD3aYTrcD7qq3e4bcw9KTN2jcQy6AJ7gnA5D8LF",
  "key9": "4QyLVXRtsC8nXiBKsDVBUyKqRAHD48UoCxFBLTSZqDU5Bp8BZ8Ksu2R9ULMjHwQheMHDhd7Y78izUptaXruCVXgK",
  "key10": "53JggV91uJiYjqvTSG7m5QaitJtsAKGUg8wPVVqZy8pKQpvYYf5sYrX4bYAue6dJeqWsyPrmKBEpsMCV4rbjgjoy",
  "key11": "5fMuyLdDPqGcjxsHtz4873Db4h5r6v6R4XxT9WtRjLqemnDRUzUfnLbybVrbt7r2vHP7cYgNoB8vDYmtzq4XmooR",
  "key12": "4c4JkY77ZDurRAp15vAgFivgtrwGff7RQbcddf9orUxtusXNSvLhnuTWAWF4Co4kLDArhLRcD4wVAQn7PKaVsaRr",
  "key13": "VTf7YNTU7jNkTKH5KdkYcjx7d4Fqea3TLqGz2epdEZ7fWijmXAibHhdL7kSyc2Jmb3xwbTtUyaon2ScrkL1sqEh",
  "key14": "7iKpjpiWKk5QoEWs7NSc4hgSPXwEfQMzMsqjmthrGgjyFSCz6uTvpWnNBYoYjt1zqWoMTCpHhtX1WvYXx7rf4MA",
  "key15": "5KCeMRYa7nbXTJWggpE1CEqHjTCxPC8RSSNH6QmSyWCNKJmphiTb2htjw78HJyiifqHVyPVrpGzpMs8M5ZefFZwT",
  "key16": "5kPCw5TdhoR3p1AkrEcJLJ5sx7fwWy2Wmu8PpbJoj4ox3hSVKFmr6ZGvAiwT4H3V9VQcNc1TxHwcon4GzrDExqEu",
  "key17": "4ykhpp2FMnKWncUA5wdhqnoVNefV5YJWh6Lgkgsm4UZbjXtrLoYfGfyyowXw6g31azCKXSDpdnPy2V63f8rREP5T",
  "key18": "2tScvetdg53HZUiYnSECGyTN37GWgf5G4pBVHE2EgWhXkhoA4RGTeLfkxaL3LBLa3XH1NHwnZDMiMsqj35cSETkG",
  "key19": "5W8frKqKtWuQfMTmGW1WJttiXtUHKHRWBvkQ7iXMPPSA1gv6fsqw6FK8vq75VycBoeuifacMqwfKxBSJKYDKE4R1",
  "key20": "5vcbcFX4QUGo2BdxatNLYeNuyYeKEoxMJ8DLsgT7iNeffTGeTaxbXGapg5vzCshoqntqRauf91yNudGeM3Q5HhRb",
  "key21": "2Lb3tPrZBTihnZG9nSUTd1CxpHAHtMyyk8YkYcVej2jv1EWEKkeY1uSjmXz18DqpqkzNUMo8Kko49MYvRShcH93B",
  "key22": "47pgA219Qe5cGMQ1xBDQaxZyE7SQqFCrZM8h6Y6CgJe6Nku51Mn3YC5PEJdXPL1PevFjCiR6pBQM5QUoqPSLKScL",
  "key23": "EWpUkCdTt6KWqpWuujL8nUi8fNcEspbrggBAvk5n4ktNzQm128svxvzmgjfdp1PS23D9jvBibWQtD3qnttpj4Ah",
  "key24": "3hXTHNErtkpLx9jGAjHLttTKRaWuH1cGBPyXRNXabMMf6zRnktU6mkzd5KdgsCCQA6yRPxEf1U55jVnjRGi2Hrw9",
  "key25": "63iZSDmd6XYxBBtgtqsHZYgLj8nRP9CKStupPRMkR8xob3vYq5WedzSbdJPGdyDghiZnjZbkn1o3eQctSEQQ3Ctm",
  "key26": "2F2nFQVC9XCK3gmxYj2jr79po3pA4RQutcTAm78WNWNUcmm5rfR2PDRsKtcqYpWoTKSNDjuXJ15nxkHC7By5A1nn",
  "key27": "4dsseJq2Uyq22vDLxfzP9ajpMwa2eWESrVCRZqw8jTJq1Ki18eunC1K1RNTTK7JGBai2Dfbq1j5BS868x1iFkhnB",
  "key28": "4MXBueKZYkWzx9unKhMc93BEeieKt3kowmRZJAYgjxTfjidn3QU3NejTCeR6Jrs1yeoSQybXKZx7UVbdP7nMtrrq",
  "key29": "4XGKCw5sV95KExd1difCfa9Hm9fU1yKMNoqWYpQuVzKa8fVttLwQbqTDRpr7aCEC7bHtkTWvf7rYDq42xLD9CTsd",
  "key30": "46AJJ7iNkbw3J4PgfGCNyuSMCYsti98xxca7YTxwKLSNvVB7yFrT2GJH4mDyFU1KhVcUzYwrxeEtjZMJSBpqseHz",
  "key31": "4vmX73XzuvTfGvTgBLgAL5P8hoZUwfmXQECPWRSCm8fnmw3M4Hi9FBmD5aG56nXjcQ2NPFxHKLTGTaxkZ8zvsrUr",
  "key32": "7Srj9tCELEssxfUh6jFTWMWTjN2Ko4pnVyujBnTksx4Y163ejQNC2gGUyTAWEGxtiroUtTS93XW5EaNuRHAvjQa",
  "key33": "5Hv6YvuWkQbCaEigxvj53yULUfJ6nTJAYedeThDDWpHCF4RbwhtifxrMXWZNFac6xzK66UGR5XMR7aH5QmKGNnFJ",
  "key34": "2VxRhwEKbMkvXNYDEWN2ceexrqUwduMvRRx4GypgzzAcoFcD1KivJuHdXw4HEKiVR57eGtMGj1vJ1iRxvjSSoVmX"
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
