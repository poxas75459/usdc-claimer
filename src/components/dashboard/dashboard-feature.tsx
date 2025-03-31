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
    "46xoR39XhgSmikoRTWCkq29Qb3oq3zuhwKZasH9dAhMfXPqVfNHf5o9gaJxV4fmfHGaCV4zvQ7BsGYVNu3amCJpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ccEJWTRqrvXhkJH3Q6tLfg4mvmxjYNAbHeLCpi2wjTWbTRLuGxyijnh9JhwbUKTQQW6MyVL8gWoLLMnAkkzNF1",
  "key1": "2D561eo7fwwE3ynEiyaTuz7obAziQTRit3PxuA3eu592FNgxniNRCnu4spvFFWyTpLuwgMuEKJyYi1x3J33fGvCh",
  "key2": "d9X5msXmrzghJxiNCm3eBdhHbQHv833zxGeykRdcRscZJ9LsPaSHwEPvW7wdXWJUvuLh1ijW9qGuFV1ccb4z1Mf",
  "key3": "1NdCwxBiqfsMfWXVmUP6Kdt33XanhtpP2KyeHWPPLkJwLN1GnpcnVbNJxT1s4FuATGonfuYQ5MR9e6ZEmqFpUbF",
  "key4": "wumbFtzPUFgUDRUviu6qWMbcQBN5g5PWTN5JKpBu6S3j562BtvLu4SqSJCEvxHdB2nPHw65qhFPWkWgxP8CGA2X",
  "key5": "41CEfpkCnzmDgYTBjyCqpS5k4NzJNajohdrNitCdb6HMqsv2nC1Hnqbf4DFDMB8JAXTEDYc5xyAvBmeaP2DTGPTu",
  "key6": "k8oEEu8QGXYQfqMCUJELnmA9NVsCKotUdWvXKU7amFs4g93W7qpXNkM2WEKJMH63Fqi6Tqexj4BVYQTnKbr8Ern",
  "key7": "4319tEV5rNRyfCBD7iM4HzWu8U7o7M9HeR2cmVqmhqe6d1T2srLctKmgPKonmrmMyZy1ihnaMacuao73FSge3DaH",
  "key8": "5j3yJ6D178CZmSk11N6QuQEQDYiWUtPo6tzthznCQYArde89g3LVhNcBPPKp47Uxq1UENFRYjb4QgYLmP7Sm7ZFE",
  "key9": "5PHBboaaVKZESW2o2NGddN8mRAkNSayfmTE6YJKaCWNGVdX62Twd9JCD4694oJ9pbBWkG2p6MN15WmeAZ87JuaXR",
  "key10": "3r9NfWoFpxPfuCebhb8ej3ViU3um6MhztyGTHGKwQAiHCYgZhP3g2SCQWCwHitCBJnsDnrJHwHHRkwgEWhnAhTTa",
  "key11": "4BLQyt9MwkvT5bUhcMz29TxaXPyd54yxNqDaqVoH3bNGAJM6UU8wDPSp9jcArzniQxSsDCX5fE7xEPZU88tuAvNw",
  "key12": "Yz48V3aHjuyVabL5pXzm6fnk7MDcsnxQYNcyANQVRJ1ANF1sgSQWx3WahtTsuxezoayHM6t8F2ErnAnWcKKp56G",
  "key13": "4X5zWNvkWMBsVSN3TBMKZhksaRAREbTKb6bE7MfiBHCdr43CsNrumRhUccsfirkLsNXDDkXPphmb64EPqES8Wxxt",
  "key14": "2QquPgSRfVjfhykxMCWGuSkUeiLEcY6b4vWrcPXEUt1SQ1Nf6oz9cu6Z2KmVbojcPNMphQxZDxDZFSg2Jskp7PBz",
  "key15": "5T9AWbnDt6dFJpr6gxb7r9M79eYjDtf7xvhhN6G3SXaRStWyPnQkiFd5UqXZEt1jbRZF1rpABxhrzsGEZbSFCACm",
  "key16": "3EgWF67QUNF7xbvsoo5BftvUBh85Grsq42K2qg1itehkotKbYXeMARM8itkFUyV4taYf9nep5emeu7chqrXh85fX",
  "key17": "2sEpdwrmxQz6YVfhsuzwUbUdh5Bwc9o1XzApnKJqZV7BrXicnzUmA14cGcBXjvbGXTDNQyThwqNXN3a4Ytf346gA",
  "key18": "EACXTyXhdptap9dRhGGDxWx9Gy7eF3BV5j73rNb1qrqevxYs3sAYEk377hg1DKCA9R8HcFT67iJjLgKxvLXorso",
  "key19": "5oE7JACdbyZqK9fzkpSV6xGfdAgJfZC1u9R5SVR4eQT7pqYBvFSXXJLgX8tqjePdFe5ySYfR1yy6yntf9Nx7Qc83",
  "key20": "3unfE5zmvD8earVnKLGDz1iUz1YPAbJcEKCSQ1H6oEotmwAVdk3Kzxnesa8yuyWMS1CEeyLybP8LeEgKWr3q22H2",
  "key21": "28vD1W7m98QffFPZrxXKYmu7Wr9ZZaoiAXqnaYS925NEcKaA8BmXFDziEqNa6ycoqGzNiCPjibMJdguUJTfZvWDU",
  "key22": "DxJnE1KQgEcAfT4CkZ9NdSoR1kyRF8xZZkXQv9qgfAFLXoRd2Fw4aM1vygRdjixa44vLG1rqxeHnoWe8vf9j4u2",
  "key23": "2UK9CzqSsnQKQgnGMcwdmpep1E5aYd9Z8XErfD59yNVtxMr3DQw7cZRqaU98UoJkEn2XKwtyUrU3uSYZRJu39mkR",
  "key24": "2sLegZYSXxmE1QutUn9S5NfWtCfzGfRSjXhPnmsq29s9FK9zv973dMUZc6wY3zcye48fAdrL5MYKgBMwmd5JwEJb",
  "key25": "47vwFxohJ5GM1ZXDgj85xQFHDiPVzVCDKVUUmsVjoYpdwGdF3TRYirxj8AJhzQnpMTQBmnqca7AgfoogzLBm8jQE",
  "key26": "5CX7fKCiam3mVeyzj7FisChLf3cUUypJsQdk6HkVjU5ZgbSG9NJ9KzSvvW9pk8Zx3Nxh9TvVQ3PmuX2XKhGYqB6k",
  "key27": "unearGXMKkJVrM9w43RTFdjCKgQUsdTm2AJCyYBfv4obS1UKMPAJSVTJeJGqQgwufQEmZg3fafxn7pQPRe1EqWi"
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
