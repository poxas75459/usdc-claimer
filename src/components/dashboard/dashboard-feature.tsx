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
    "eQogGwbP3TrKENseWTVH9R4LQvfyjLwWc39Rc2ckympxvUX8HuRMziAV2AVs27gwtMxTqTJEtNt5CbeHG688DPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35SpFyaAX5yPtFH3w6YiRborMmNX4bQ3DMa4CWatikRLfnVrRwTXDaMXUTs532bbJDcz5nGp7cGvsPQNrJq6jvT3",
  "key1": "Xdbc3zNbA7ZiUaYmeMxeSGPBad1HFphvbTp9az56jeezUvuQtgeprVtkCMebrSL1bd6APjnHMXToHRLhwHuYakD",
  "key2": "3kCx7RnFsrPMPdvhpExij6vvubKkBoPx1BR8xp2EPjsaC9D88mLhVuA3rs5dn4cKKTLZE4Y1KWNjQuN6NXqPUHVz",
  "key3": "5dh6F42GVPtHjNrzhoRPQjBaHNaPVqaiyiWukwn3mKTS1pYAVyQsLvKSmfN8dK6RsS9n7dtHNUaFn5Adp3eoroCB",
  "key4": "5QHnJ3RJzvYuG7im8vKwrpgEVyg8ygY37qwfdAohn97XztNGPUKqoiSjxt2tBHBazFTUNNsvNtk5uKeZjxfckLVf",
  "key5": "2iktL5RFnT65XRD1owzyT55qtBzykM8seekwx7rZEgvbXyJ81Z11TyQ54wvmmiNDdqxRNjKsSRqYSNgCQRXAWT2W",
  "key6": "2mJ9fWCFHtWUppSgt6vVTxrmVXBkYogjoheQr5qxN95NVgT5UXx6a3SXDXxVZQNFDakzkgiMt6eoqxdTadaDmcSF",
  "key7": "3z4hKtDmLeSwNguiiT5AmZZNye3d3sdEHvQqTiWoyvGrYone43H3DL4ZB6X7Tf7hEpTMfLez565vRjeuag4dHWWZ",
  "key8": "5huyBYzEYwEsjZ5JZMBGj18LZKxDbR2bDQpYM31g99f68xvUFcJCtQZHuhcGe97hNVBsfAPLjd5YA1sD4Yjs53Aa",
  "key9": "XCg6oAPARF5JxY9xjrYDgKspcLEMQiVzWGgvPkDTpL6TYe2ArBpRqsLbdxbj1NaaWqx7ZHgmy2bifHRfbUuwGck",
  "key10": "SXzoLJ5GKMWA7tzJoAcBkZYihSL2W2Lx7sMdmJTKV2ACjsKe7SUBkMmpNvxGhS4mKWFpT1HWAxKRatuwpejZLMP",
  "key11": "XGXGT71UJCVjQaQgwpcoY2jVAdJWZWvoVBwxHJRLoojzcR9dhpBeUkaz249RS8aV9BArwAVYvmdXrx5ck5BfoV1",
  "key12": "5L1tAYJLE89Udse4fp8M4v6Z1V66wGy529JQhsdt2SduZi7kKjtuYJnC49U6d7uKufdk77X9aySjsWJBrzQ7t2gw",
  "key13": "4JskAwLRBUubX84Tx4iHhaRofKQtUxSpvnmUvvGEQyB7nyskF23rbnVWnFxacJ4jbBKJq4qtLhW6gjgmiRw6Yy58",
  "key14": "2nx6JkdG4vin3vcKCu2qniWJ1TfvpS2FJgNwN4cyHTZoSMhVf2cmoabWNVALYoupryThtNtuComXx3kioqGsXEeA",
  "key15": "YeCisBoYAShwA4oJXiy8Nb1b5ZaDZKTYV9GLLH8bY97beLo7DSdYeyQzoC9UKVaBGJkwWgXviWb74fUWRnq2rAt",
  "key16": "Wk2SWUGXYvVWxgLor5Dx7KW4KhH3rxPoBBcZVYt3Z719bgmhqQsc7kvSzHKyLHyTF8jc8qu9yybNGLowvxRxDBr",
  "key17": "oazqWek9DZiJVUg75FiPkyqEv5QK3xL38er9ouK8GuD4aPicG23TWyQKPdEmZkFZ6TiGjVv6GWZE3tTNzs96Pau",
  "key18": "373prfB8NwkcKZ5LnJiKpiRhm6APCDgLaEFfsq4cP3dti4iYSRnYpPpzhC9TjDdLfVnsT5CEdUcGpPr5V4gPifmY",
  "key19": "rzpzxhRdHuLDyw3JGhTUvJZumVkvN4Xn7DfW2BvXssMdkkXBoZEnDsAB4dbtgxHeeDgRYP61t8SWkbgybsWRf6m",
  "key20": "3QXtZvFN3d3fS8MZP1487uBYKjqBMPuqiVGhXUJHciqEZSFSjsVKBx4epC28fLk1jpLXzahWfA2vHfm5bqsQdixy",
  "key21": "2hvDGLPt7pA7NveRNdAcQsfQKweWAJaVf5fhFiwUUVyJh43hSTbKnpQQuSRDY77CcEKwPPc6TLVPXfv14DNkBoms",
  "key22": "49KfKoobP5JyDvYqqNVNy4zHk1YZQx1hEAbyA7QMsGgCx2LJf6Cc5Bdpm2etHiQNLirAhkC9Rbh4NqegRMTzZkHA",
  "key23": "37eNF7AJps8GaHiTdyuCVBPhFmrHNfiuHH8C4cjNJWJuA6x83u46dLfdXg15r29V1E5fvCWCxuzSvpUxzA7Vp8R9",
  "key24": "3SXwrCtWGbPWFLZiiQTwr65rKxQ5HqwpTyNAEs1MMHQJnECjsqS7BxXYKi9yHXTgtUAwu1KUgVS6HZUXEbtg5bwt",
  "key25": "5oditt7NqFQwkkLaDh76cHXCoapYgHGcYzk8Vcgw49RFJMyBJTqyqxM4Gr9zYxYixyfduWyL5wRyUp7XUD8EcWz1",
  "key26": "5HVzmeuGoyWbc3AHn6L9kTHL2m2yAqQpDVHnb4WEe8T1C5XmdQZd3vEB7A9Z5Gar5ZmKGWiCBzorSXzm4UXZpiaV",
  "key27": "2vwNAvxiKTa2qzhZgtNZ5TRQaDHwtHtvSeSGrpJamCbdnmrcga59b29izdZ4kcLLTkaMurrWSh5moGvJyneBp6X",
  "key28": "5eD7hXx7qG56NGbFhQqd57UEBtqwiyJJwyhkrWVupVMZZYayjrMhFspN1jJeArZ5u42jdfbetajryJ7bxzvVqWT5",
  "key29": "REXo2wGgyXwK9hcq2xXSvwP7bzXuJTrw9pon64jz1XjANx6VzMinrtAd7GEgHk3FmqVhu71Z1iKGBcqxpAmwV5r",
  "key30": "BriJpNqu4BScjKi5Evu4qzkJ98epQR6UxmcUYL9oHxBgyr6aeTe33k42mGMmX4mB92NsaRFfui4c5eshu36qDAJ",
  "key31": "ivix28ZjZnipxYoJ5tyqCyrFTQiVurLF5TyGvCafb6ZUEtX34d9xUmSZxVrgsgkT2s2gHdVmHr1XTDQ1oi2Zk3r",
  "key32": "3cqDJzqTC3uu4R3tDAzUDuT4sXuCzk9BqXGjnHmLquanb9R6XMXLxcVjYM2xnE61x44ixV8vPXYGthvGAUCr3Sck",
  "key33": "2yapdvfU7BHQ1i7jzkpi5xYRuXaYjoCQ6BQUFboRMNj547N6rhgyWVMEAUpzQmaecCndqMc7R8wsZWo2RkuPi9LZ",
  "key34": "EdCpc4XYmpsJPzhyuoQk9Vat6C6XEvQvvzBQ7Bwr5r5Yx7yJUrV2m2fA3sUZN8uYUD6cyLxoGdSRCBJjv84pauF",
  "key35": "5ro5C4EcVjTaVY5TRbgQig3LMgjfB4pjtcMWi9RvXH78gmJJYVorezXTLzRxqUD2U2aowAz1iPkuvi2yRz5iZUm2",
  "key36": "4eKxGkqhu8BdF74DqiMaszsLGMvYxLvTkFep4Yc1eoX9eWar9y8EhShZAwwpNMKDzGf8yDHEjBUsD6qY9N96TaMZ",
  "key37": "3TAEdexRhJvhekvWbyXNKNBRxheZuwUmDE11KXSJEFVdfnQMFmoMJwXYnqcaQNubVpu9LrpKL1aNxdXABeUwnrLf"
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
