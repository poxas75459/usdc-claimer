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
    "2tLL1sHzJznUkb1qbT4pqtJXyGeHLDWwA4BjWUm5qwvJ6rgyFDVSgAcN58Lt8gtmRumPBadqCsYSRHRw73g2VZmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S411UYSsYuFMMigmmFEayHPTjrq6ABpamxtaDonPZbLby4zbhp7EhbeWtanG65FictKuBQAr3ybUbmLb9zxdVmb",
  "key1": "2AdHoCa37Cxa7G6TUSUhamnDLDPBtopjHfGsph4TWZcWuLBfuxE8a3fqsVb7hamNnWAXnFv2EHW6hTA9JHhehuzw",
  "key2": "3EBS5VCUeBd6CPL9EQSQN9n3TnzBi6zqHetxzhdj2xEFrDRAKgTAeb1K7sHKVxaizGKyzxii93AHB78SK7VWKtGs",
  "key3": "3h3N9KJL9zoyrtMVaPpGFiKqXGzb5EN8MwJGw12fwqjRWDKt2htSsEck5DVaRfR6hNivcpLgCSEgbbYNbckkawRw",
  "key4": "5VmeyHRfakB9SpxymbZNyx7wePrC3tRiH5UcRsLvT8rXPXSq1b2mwqj1L4ys4bozTwo2KPaW5kRZAfo3WFZg6ZAx",
  "key5": "2L88Se7kjJTdDCtzNKHRaNrofqrDgci5mVBaCFpJ69DsrPdMoEMiH9tyQgkabmWGucdAN2s8m5zrUy72FDEjDvaT",
  "key6": "2FaetbLc9GSbkTPXB4xsVt29zwgZkNb6TVoiEgtzbcAGQhCkpU6LRSvyC5o578Tq7A7N65aNXt1xcmDvoxpCSyrv",
  "key7": "4RLhFX5A6ZrpfmSBdPGL1YkngG92idogLX5CcDt49J61oVDNRJJDvoMWCki1ABDp6mGb28gwKuG76w51iwxZjbys",
  "key8": "3n3mKLDCTuFhBRLigBYRFWZxe1XXRtUpEK4vuYjGa5RbeBHVdoUt7epWm3YSELxWPBdnhEtjZay8A3gPDZMmPpnY",
  "key9": "2zYMRHv7UjAC2NT6ALMx3QLYrPaQQo4CrRNH88t2j47AwAc3yseh3WaEV15xPiXRNB5Vg9W1uX7gi3GCDRNcVPZB",
  "key10": "2rRiXa5qBGnNATgiQzeSy6dvgqJYVeYVC244xoPDRQiLMVP7BwF4uTQEwamrn1g8uCtYVdwHLSYXhKAbmCcdBbyv",
  "key11": "5CbdTvzxxFD7rUD8UonyDUTQ7UbPhmgovQZ5PNYs6ufoumyKxnK54f9VKhZ9Nq3oNSChBGYWskLMsZZ776Mwf2f",
  "key12": "5baAjQFDmFPktBuKQyjWxyPx9om8Xuereugb362zVziTj7hxeFPZJxkMSZSbzFP7yjXr6qpvwg24vrKoKJ6LP7kB",
  "key13": "cGq4Kzg6pxHDDryFbUdURYpQf4GCwZz731PygT5j84tDrSN9y6tzrVSCnEwaBQQN7Tj7Avg57K11bQFanFpEmmR",
  "key14": "2vvvMtbsRt1btRaaEsQ46XS6xseCqRnAdAEMkfZrjbzvPyKp5iWefJiaUyoXP1tNH5Nok9iiRLBjmobM6pehzgb7",
  "key15": "2xdqooM5vYaTbvq63ciMtUy1fGXPY7N7Q1p38PWXxPWDCyeoLj8o5QLKLhRHAWmJnrJLvvL23q7MZ1qKHQnGAVVm",
  "key16": "UfQBEmzYC5Uh3NHb45z5nfX5hzuLiUqDrMjt4JMHUJ91JH9hEEVPFHn56Prbp2zVuun6Tq5jpTFV6Kvh1VeRBMH",
  "key17": "3fkYujx599aAsBNPJ395qJuuWjVHhPcCzCnjQRUhXc7TEvseiVGHEWeXWL7fpu6nxqvxYo3mGzxWswkvXcfuyBwM",
  "key18": "45rXJawZKdg8Vj23qoSPrPTZ6F5sjCNn1TMewz6pFkkzvVTKS3u8xCEPBmukPnow8yE9e9qjK1jfi7zfHE7SpnoQ",
  "key19": "jFdxz4bCNJCzMSoVQ3EUThBTJ6d3fFdqLRdFtwYjXvLe4YCymF1xkvjzzyMB6kzMUigWWvZ1hAsohRxT7T6iQzx",
  "key20": "4Z2prnPPGZVDQnMkNs6H6169HBViLu152D9DGK3n5yoNdQPhq4DqfEtu21o6uvHyBPyMsvHhS9W7iE1aahpwTtvx",
  "key21": "5wtzzohDGP3kyX7FJn35qQDa5iDwR3WMdupc6aaSv2rS1VhqLvDsmMB6tsX6SeBbSfQASdjcWHryyE8sgxrPiAjZ",
  "key22": "5P69B9h54cAGnKRqySGo7UqB8ERV51RAHovAuv7rJTLA8XGh4xsvU5Tij8ZpncpDPdwVS7v7QuZ7KwgqV7w6aAmk",
  "key23": "2smYZhdmdBuAonTxRrjhGGpmmQDPtUp2CzquFWP5EVCGmWA25dVRRPjRwQW9PuiUkADTdmYZWt8pzdVnmB1JEwip",
  "key24": "58EAYC5NNH1Zy7ReBYgXH7xTtrpdFWFS2qJn1AN3ZXzQnGfS9sTutcBzb2g8qYCjpP6WhxGM8vuiErjbDC8KfcLV",
  "key25": "4sCzwg6vNcwbqUbfLHNTT4UwfcscgDX5dzxC6dLjTd6TZvPbUeSAbxqm87GT1eMX6aWexUTAdDLTJQbhyXwy2CKo",
  "key26": "47TMadWD1j4d5NNpALHBudbMVf8oM4XkZug4n1xnpj5CaMpQZUBy7nqX6wuKk52532zm1RaZAkWyFcmews7hAEpj",
  "key27": "CeKnNepL1MFoP6x571Nk8EpYtbysLNTFtoN1TN23dqEZF3kQrGeLT4KNYufmTErfuug6gNX3Vdt3aDVs7s1qeSt",
  "key28": "3sxgtvdNuURNn9y4kFMqUod9wfJZvRwMNUW3KoTb3wcKmob3WbSt6im7wCHJHw59oWT11yZ2LLBGYjc6kF4dQ45r"
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
