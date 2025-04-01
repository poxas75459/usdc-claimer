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
    "2hwQzUU2ySeazQDeoNs9KRkmM6S3xT5iEvbqBj3nxziReRjUSwdjQpyYTC9GmfaTJxwz1bLBpMP4F4ir365S6DxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UB7FuURJ96eu9WyZcP6cQaYgChwH2ZZd3v9DveHeto8PouGULA3TT9A8xBjB5b4DpMcAmjGNBnX3UJBYBPPiQc",
  "key1": "5frcQbzatSZCJh9GkqepLPiSKYG5ZP7TfCuy4iguqwpHx39hLVyTL1EBzpasPUVeap3i6fCG873aizaTZEVSEQP",
  "key2": "CbcCwuE4qMnEqguRzP6URPCNUphKa9xFnwWJST6JdyKyd6Y3rSs6k3cPy1Cm2emfXAR7q6iEF5oKYG1P5KMsk38",
  "key3": "5Q6qmYZV6DVCroK9gDSo5rQdGhrB57973Avb2KzxGDfaj4k75Y1TdLwicT95sZWx492PSYCBFch5zbbKf7qPwocB",
  "key4": "4V1RYhaQdYH237fM9c1RGom9mbve6EsWZVDh8fAAJkkrRFn7dMgaU1MVX1q12RmGDEDxjfpoRcZ47JRbgfRBfjS9",
  "key5": "4hFMTu2nJ5mkvGqaNFKnLv6BSXqaNpfttwwgPzDBj97UWisGDcqZbtpgmXzwivJwW4NMmihLzk3ak9F8Wcv1Xnm6",
  "key6": "Dze9hyA5gi2EBKW2zmXv2xBWaKVMEA1TzDZGd65zJTjzbf3xmZMnxBNNkKeJKRw5i3EQ5JV9EdEu9DjEbPo28c7",
  "key7": "45qa3DqcjKkmQ2wreWw1or8uD1zFYgSb2Zt23Uirw4Tfe9BpxjPPZfCgrgBNfNUSVA8uCWiokXPfV8nEchH91HGB",
  "key8": "2x4jA6R88wY8hhWgLPBo2AMTygSMMRG2J75PeQuTV3izXhedKzfbuokzwRYPPovWvh23ETqMKLTcYwBKTVW85cC8",
  "key9": "4Sc6jXYfxVir4ubVMimsVLYEV16S6trssJRe35ij1Ckks3uTJ5mtAeaksVtwaLTA5jUtML3535azSRgRZJ13e2Rw",
  "key10": "4fc8kM9yz2SYzCv2GuZ4qZBGVC4cGgaWrujHgVGNsLaFk74nkpk9GH5Kfw6KwCrKqbKR7GRvYgKfUmFVrshYt9YW",
  "key11": "5NnMPrE7dVatv5pFBSvCZHdGoEsCBXoPCYbeXAipbSoFaGh7oJYcx2uRSfJmtxLBjr7cpfScmtF9BB6NhwfpKzSe",
  "key12": "4mZdTQL57SHBKmpANGfCyEqtVqsbUa13uZbLwsww31i6dmHiKfwD5Hrzn9WnwyFdgawCjpG5ECCA7jgm8mndymJH",
  "key13": "3Hj3uRD1MKuEgpmf8GVTcR27AYbU7NMEeSs9iwVsvM9ayomp1LgXGfhkr95oPuqGEQ8AajsxKYQ9Ghdkjt1cuEzN",
  "key14": "6b42sKNdrm2rGbajCBuvY9cBV925xX9TNkSH2LLsM4RAAkF2UPeaiFy4Ga1BeZkRfj1rCLW8jBsRPk1RPFnn6b9",
  "key15": "2ivwY4RWoCtrJMsAc7VgEaMe7wUR5D69HfW1tWSxxVUa2TLfeg6pYK8EthjTtNZC7BtuieRFnE98bWGmHnwRfUkq",
  "key16": "3pypPs3fJdGowkdnSSwN7vDCtkDRGMjmgMAnqE29RhoLkr9jT3v1Dftg9APzrfadPNCmi8huyVoqmBYHBkQuEESF",
  "key17": "3wspyCZAPhfDu7T6cnZZimDqEjB4VLC4g5UbBFk8WuvLjXUyYGb9QmpkWsgjjr7Xa5qG2NUWThVRZ8fgFLVnu8KW",
  "key18": "3gNWo5yvaLgbTWn1rZenAM6yn3Jqad1mNKajydh7hEXrsNpHxPsmaz7BjoWYjwFzsduLJ6rZ1jLpdaX3LQqWnFtm",
  "key19": "22wJxW3o7Q9dpVigadVoLnTnQx85JkN9p8FHY27HxLfRf7sQKGjjrHK2MvEN3JhzRjzicnkftWq4aGgvBQJ4AcAF",
  "key20": "2Fw3PQbTeurH5EBdJPXDECywHLdHa73LUX76GMuhHgeptAxN6h7ADEdvjCMY1Ac1NhbJUJkj2xVgbkX5UunKrweM",
  "key21": "3ATRA82FMxWwvJHvLCcn7p6aDji7L1vsPMPGCDaYdhyQaTUDwiuaPpHjVS3h5VW34Mr1zxZHYyYz8ksAaPs3hSPe",
  "key22": "2ZSyPJJ7nNNVWYhyU7J3nyk7XPH9eGN4h6K8CRmADMPKvFmVhAngUW4ShkffJ4YJxNKQRkvR6Aivzbz3fHi3zWhh",
  "key23": "3VCWfnhMJnon5yMRMU2gfZXzo3EUbQbG1pY51TKQ2tuCNciJUJVgpF6uRWpDjQqRtyR9PBwnsVd1FJvRYvAVaqGp",
  "key24": "5XGH1EVCTUbGMV7poP5UgtCPyBreBNuBm5gurs1g6ZCVm5YBEQPk7zu1yNC6ViKVJZkFY3Gi6wYTUbai1zmEWbMu",
  "key25": "28szpHpXM78NaUAwne43dTT3VHsj5rnBLym2o7trCLxgojJrZgWM9hNxhiTx7RkfLdtBTQ5HYTZTkw6qgK7dHoAs",
  "key26": "4dAEvxvF86H89esRm34pBbPukknmNKP2YXc4SR8jm4qvLs5rB3QR72wHvENYaVmiHzedrGZkjsU3N5idEifEZ2vU",
  "key27": "5hQDGqvwpL5Go73Z5HYMoFbYAQMi6o7pEYtbUZmEZYErBH9NRRyrRzWh9WetjheBSxb6K5rPXLtcK6j6zaYGAT3e",
  "key28": "3tAeTsbU9Wp5AGcqNpA46BCikagFT1d8Lij2wKmWk6FaWYuEzdyvE1ForXmQvqXZtu2zaH1WCGCYNcFvf4aaeewE",
  "key29": "34tZYHtjLPvDv74asjefEu24Eam5si5EHAYzTxCsz2rmbSZuFiUCPMtyLLoTLXQBQ8BWLhBTARdgYbRPJZSfq2JU",
  "key30": "2Ti2E8cpQf2zbjfmLw2DfLnwBqTP3JeyNmcZ4ctjt3P2MpAWiqfRdh5FNtXoSpkfsohJXinyzD4aqjD5FFsDH7Fv",
  "key31": "2Ee1ExbJ1g6gBrSm9KRSYdWTqQrPUphrNaRdazf7Mu2Lz79ETmXv7SLZWfopdexrVdCReKE8moE8XPGxMJj6Gukn",
  "key32": "55uNGNJwyCWrLqNHFeNPYoLKHmHrYd8uWQwATMkLnHtPGZwMa9pMgd6y49jmzkrBRtzGr86RmiYdTuHJoVdr3XwD",
  "key33": "2KiAjpvfTS3NtGE365sqwHwNEPuafdCtEDBgYV4Q93joFMDfPLkNiYUnXjL5YmK9js6AV8egRhWFan1QVZoFKrPA",
  "key34": "2MFwoeHa3E6Re5FVGttDTU3iqCJoPrz5ZzpQVzdzLppBrD4AvE1oGkKaFabD2PuhA9dFdH71cGbi5ZEgEMvdArra",
  "key35": "4nVcxKjQwH7EQfuhwWwiAPzAWkxLQdcnqCPTc5tvxE6HVdyZi1KF2f6DNeorTvL2yoMCfDFQzeMxU2cERFt7DG9B"
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
