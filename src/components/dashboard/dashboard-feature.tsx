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
    "522nBZybPx2nKUicWCoos8Sp9sdjs7WVANNsobaBsb1acqUm7CkWAJTrNfD78gsAAyXA1Zkyj6Br51HCqV6eoVsT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vj4cpqUUhKSwGcjTuaHhEs4EVjnEgyVdKCvDcRVpgud6MJbs2DDikHvDouvRUEpJAsN7LTJxAQKtkttBYnwtuA8",
  "key1": "2bHKW9MUskWLLuTdnAomXUD5Yzzby6J8J7QRB5VgdovjGtnnT95hNS6nZgua223BdMSbm9YFEt3R74EshdwZzn8m",
  "key2": "46L1uzfQQbnET6pXZFHfR1NGSVcK3vEZ1cFamoWZ5vQtCpvLzgqm4zzYpv22yRACDaSz9EsQYKKUt8wgmubF8XUd",
  "key3": "Ux6yoFMYMFpPrbFSgdb4xFXQeyy7YMhv4GrYktYNWiwDNmqBQWhBY4kxBErmjThHTPSycrtxUmJECLzTJgdEqCf",
  "key4": "3gVK25Xerp278BSEAriXpFRFGjnoZxQpSQfofudXZgVLxM34C5rJVD81p1pvDMvxXeGsUMopDY4eZT7KkyjjhFkn",
  "key5": "2LWc1NVFADzjExv1JCMbGQaEV64PewQiPmMRjyxq1MKk85wTgWBiKKHq92RCg57rg5J423R81dw9JgeGycvdRV83",
  "key6": "2UZ73nNx17hqgpf1po39SdYAfVVAF3A3ysWM8vJDvm9dceqvDo5owtJUMMr2bfug2K5G3xRBUfsnwhRBPbE83z8e",
  "key7": "1oVbd2qrkV7SX9HVB6W26Z6ThvGtLKeVC6hEjBUHLkRVx9P1YRsiTzFGF6uk35r6mqUw4oHEbudoSb56aA6TcU7",
  "key8": "2jMAA2Kd5qGPLFPRkfmwy86jxLJ7FrrLZF5NVKJZqjTQfAJMaZModHN2BTFjjqpZYCE7JFrgwno4v5buHHUeoE2C",
  "key9": "qMTwAxFfXtQJLq9Ha2J6XwBtqkMoVhSGvgLxcWWaQxfk4JpjtPys5Bvc8us5m2b9diFWSUYtsWoGdMuFoazNeJ7",
  "key10": "4oidmyyjQyefnrvFAWkNdn1815BXzitArTWpohaT3ZsRtaCe9PrE9oLQ48oPg3NYSxKTHNrNvCCxDvYqq7Lo2J2S",
  "key11": "4YUSeEV45bHNbecdvB2ooKAEWdtFCqQZF4RF5ecjxCsUNdts5uNVKWDycCjHxs2ZJehZvEFfesmnonp7mTsyX3Fj",
  "key12": "44xhKYbh96dnpwSN7Fhq3Vga7i8vBKcPmEYw1r7AdgweCzeCqSarGpEjnKgixAhSNLGcvjFyjoaS4UMrnvVEEd2o",
  "key13": "54cZ56kdNA9H58kWjHrCtGKp83BjguCBWoSX2wiSBRnc32iuPPAt6yA5ua6FgfxagMRJLi8jpmmSnVxen8KDvWrN",
  "key14": "2HbdupB7JrHqkXJaE89Xg5aiv5yVPGLvhELnkftsycr7Rx1EAS4Mr2NJ54VvwN7xrz6PHQerGjDYyF6W1aFDyQgt",
  "key15": "56DE6h9E17Cds22AMaUVE5bRdWLqjVwhc53ZmVEohSvuGvHch957gJQsa5xkXrzk44QsNUyH9bXteYHU8XvYD2v3",
  "key16": "5Vfqek83jcGS1uXCcQagb4bZpJwDm9h1fDxtdncsdp2kqS4Lyz8SesLA9Z3i6fEegLaFkREBTgsEJ5ZwgoNFvHM5",
  "key17": "5nz5NXmqRvwQkUEWWMERpkzpjUWycGMFBUE7mur3A1bDws3GJunbH7Z6ZnmEUCyDs7SZ5gBVuBnxCNQu12tZfLHk",
  "key18": "3rNzG9BZWYpq2CemEmmmVsLCsT5gN8r3MKZvz2GjRNEd6Rq4WwyvtcnFijDxkAMBBWaMqHNH59vaNEJrfA2YPz6P",
  "key19": "5HKcnFLP3WE9FXbWN9oy7fWLtD9pzDow3CHyAQsYoLfsbgxVbb79SXjaR2XkYvymiZ2Q62AxSSq4TNnhPa8n86Nd",
  "key20": "4d97Cf7o1p8Xe7sRGEzAdPABguRQXdxeQ5vyhM31AyjbBx5DCg2YuQVGGxvbgefrNntiXqz4J5YrxRSFvNFsiPUi",
  "key21": "4xAUxCHetW2ofvnPjToUnguE8ak8KdCHzhtA3pPncE3J3FZgM3RLzbrhFdUkUifNRpc4tJaCK25HadpB2hDx29VN",
  "key22": "3UHaCKUWtTtqBdodR2CcnWBExX1FcKMd6Dcm5DGc211PNriEPJyBJBNQa9aAW1iyf1zdL9fcwcug8hnD8ZUZFWtp",
  "key23": "5XznsB5JXP3hFqH1jpxN7iFuBAMjbjPmA3gNuR5grm1QCpXLXkaXf4FWGH5RWYQysXsyVGh2T2paLkky2XXPPee3",
  "key24": "4PcLnTpFsaxiTeApRtVLiXAEMVj3oPNkcYZmRVcpt7Czj5vn7Zm4nL8oXuuEaGdYK3z6Y7fm5SmrrJ9yrCnRX4Jy"
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
