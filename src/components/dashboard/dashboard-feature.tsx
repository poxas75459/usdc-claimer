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
    "5EGhKNHfQiquGNj9s2GaHuDxaDBb7C9QWDFiun4J64j1HCuyRYdiNG7VNqZCnt5SEKqFeom73HcbG6yQm1iDK2XQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZhZghPEvL7Q4Yq8yKfrrVbxmQthdsJDT7bfBAuayjU8KPdXwkTyQuxKJuwo7ubTsLqCsaK3cRrLWAstmjdTEhGH",
  "key1": "4QNwCbK92zd6RKzkzXLWjDzc8cXpUdnM1GEFPGxNvvjCvpQCipiSb866jM4M3Nxu1gNWK8YLUxCvFxiMu96k9uq7",
  "key2": "2ddxm65vodp8JxJMtuKWuXoSUcTJ5FdT4qNkVm5geymczMVZBqurbC3Es71tPN7Z8iFZ4Sg5Ye1JZbzyRRcUxJx6",
  "key3": "5HRSXhbPnGXzrkRfiB2PEmg1FQW2XoqVG2ZDnzhey6nhvsiuH8cDJSexVDEt8PzNFHDP1yqUD6dJFNeYgcF5uF28",
  "key4": "Tv9BciPFmFBM9jUPJmDuQ3k1LFkXmbdxXeDpcTh1GGRnYGWykk8qWhhoyzXDPs7eKvyPv3qcUsFCYF2Rx645t6y",
  "key5": "25ddbGsX5FD1EHrc7GgXmGG1PKhCx19ZA7C6Pr36nUYBifFYtpGtdasvb1wrukZxdof3KurMEN1TKyg3Gi7UHgWp",
  "key6": "YpJWUgvFYkgSkFA3NMW1sgtrCBMRXj3J5wrA5bteAGcsghsjjKYhWYpEvhAZRuLBHq1k4yY72Re2vb1o1ET7Lj5",
  "key7": "5As9nr4r9sWDTg6gkDTaFGCUSnue978uhP8sSMEAqtcaosHMFZDEKBjiB9RYmsbbP1sgeNfb3f3FGMce7BZFT99n",
  "key8": "Ui5HthCJzrtHygerdk93hmv6rpfdA9hepXCH2LbWBcDQPYrdEuqiBMymb1EsMsV7scfaPZfsPACntaDVnMjDqwD",
  "key9": "2QsSGWbAAQgKgdi33Cq7gDXJkvKrHWkxjso3R7kTe8nhmBpGZR9BZLDVNBp1j6RK9Wq4g7PaD1mrVjspK3qkXoPm",
  "key10": "ZQNXj4VCnna6b6hjyteLsEeGV8geUTKUJDgUdVTvewEdg39742ztVgNd6qB1VYrgmYp2choaFoLDS5Xms2Pyt3T",
  "key11": "4xpY82HTH2xGywypSmQmUgkqdbQdwtB65KNBy8aSadptkmdX7EhmtbXtKzcAPaiVwQ99Gisf61fC32F22dnitVg9",
  "key12": "5L5Gr7NEZyxNLtJswPvYXCgHcigGPrzLRiQfPbtiKYxwWRvbLNyeZP7L7SyVndq4p24ZgTRYmpCoQP2edzHxy1oM",
  "key13": "X6Sg2xnb8ZDCPNxghbxiMYBxSiyiYmUKCvUbgKbYTkY4yU97a1As8QTUUiv2dsQbatn6p5YoybeUELPMzsZ3HqX",
  "key14": "C3jJdJdCaFKaxJvhTds5yT8zFCAqGfVWzVzuo2UUPnLo7BnhLDLC5VYrigve6jPEXvdHZqNVByvg1wsonvEAsFf",
  "key15": "3rJrcd3tqaEcgVBMnarni1HJdA3Ng4MrWECBdh2AZXvjGrsx59wfmVquNfkmDUVEPUYqJJ83rZ3MVdxc22rP2dWe",
  "key16": "3cGBLyrhDqYFN62vDmgrrCDfTJs9aNuCgBxt73GnocaKDs6cx7uJsccDzRhmJ8SDPbrcnc4AgVKGyPXDah8cSFXj",
  "key17": "KqAB421f5Tfka22kbiUTi1xEDpb18vcBHgHddHYFhZsek8NpbkY8hK4dXzPBufCDq2XWhhvF6bG73ppvLsBWCAT",
  "key18": "e1QgrnkVjM3MVhtYEG2oz7jGtRncV4ZdmsNao51zQdXM6JnNTAF8Dhq5UXk8veEuqYGjx18GQhwLMfnvpL7euUn",
  "key19": "4bp5Bx1gwCFrdhvRZwxNkAAyGvNpWpAre1ahR8gf38KvvzXnLNCEAUvqdRB5pnShjcbxUwupAjvp5ssdvviZoZj3",
  "key20": "2yyDgV1Lc3wKZ7tEk5NEnNNp9QFT6GR9jPfQ6S1q1tGwaDt5cNBR8LkF7ZyzyfPfqMHPcjGvFFNhVu2gvQcL5z2d",
  "key21": "4QL6K9hjmh1fjyFC8a7C612j9E4pn81MFb7V7sgGoHzp1XVXJaCgKs4RGDE3xEGtw5XkvkCSuV6HyDavAjJiS4Ph",
  "key22": "2DegmBtPSDh5GLEqb1aTaCAXU72Z5vhiwhjqoRDDXZmTPTajenJ5XSBz4VtX41LxtNYuxiSTtgAjtsbx4UhZ6Jkn",
  "key23": "4cpuY5Eb7ZL2Z473JxsV2BJ5ZUQWxhKSZsPGjYHya45XA1ofRBUxoAVtenweLggYrE6Fvi5UZURHMLNEuYDZawJe",
  "key24": "4Vcp8TkSVGGFZLuKFD2cE2pn4RPyyLDZ5NdNYx1Lt5RzqtuVELvjUT7mSjMRsYt4HtjPWD12vBtG68Crzmun75x9",
  "key25": "5bZ3veBQ7i7DhQo7dEvV5uMWsdvcdYqjYcN7j1vLnsjVXd93G2yDpe4iFyNS2WSnRrUpjQDS163eiumZnwpvmEx1",
  "key26": "47zLX2ryLRpDkeH8BQ76SDCXLpFDYp35Hhx3BAdPVnGSVnBJynsVTM7uc4qr9u1CQdKYWW3Y5E2bfATb39NoQnq6",
  "key27": "2FJUfft3D96W13LAYiW28rhvjVQ1LxcHx473vYC1raenUtu4dikDzjCphDZY5wJkbhSHGiCa6JgKUbmpaiHgGo4W",
  "key28": "4rTu6TjYvunaM2tLQJ1VRmJHowVE7P5No5VakLNMZmgAQi992QP37hjXtJsgiD5MenDZwsxsQA7m8rtmfuvDqvG4",
  "key29": "4yaJtBbQ4qdsTXSam1pUs4WjnG6i5PQngu9rRSPfPsF3hPUnRVWPkuJNwA7EPcetJdAWMsWsTMxLR1s4ULFYKKh2",
  "key30": "2H21E18q3JP4HzpfQCJdy7oWbvekjiSejcJamUqVXZ74W5jx5bAy4HkdnhJKEDNssdW4ADYhQU4deNCJkPBACvXB"
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
