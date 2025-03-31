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
    "2wKx8PtALXTUVfFQPmVKqbJv7x8vfScHRGPqe2nCEtxmTVeFHMRJizCjGDZBKjofbgTMhkoMkBkPD7kNy6V7YwxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28J6BXLJ64C189Q4wRHAeouEtH8wnUJThQPhhjYQpwmEpeZc4D222F9Gq9PkyAdVXG7wEK7i25k6CGqXXyUjiYYE",
  "key1": "2NiZWMgs6ya1qgzXi1f31xMwcjEGhGBRRQnj6RGqeDNTKuKNyaH6Mmjptqp8zFup6zQeiummGNcz54X7RRdjLHnx",
  "key2": "3rMBtC9hjoCopLBkC2sqByqw2o4r3X53g8TxGfXdjcPisop2XDuXDfN3jkiz3HMooBx2mAHVSgCAqCmrCgbmvM7E",
  "key3": "3pcYZrP3cVSdEkgXxSTjCPam9P2bGN737muNoS5tqh8Nutcz1huUsDBTBYTvVBVxd1rta9iFCJWaduE15XianxX8",
  "key4": "4kJp6bjhdxBxFgya82BSjYquS1TQx7AbFzn6j2nphftsFYjarA74q81GZhNWoqevV8xTtT4JCStUTwEx6fxy9cPS",
  "key5": "2hhoBgiR1H4ZVoanLov5HB9pNJWYUkFPDpt4EccU3EERo6Y3SvU51vxLatLpXNxtPW37JVALNGT8QncvEVotgok4",
  "key6": "3CMS5q94DbomNtPitmm3rcRHaTPFoZ5hPz2MdqDrCyJNpQxYwAo2PtYRRag9s6Gwq165zHPwYGGYFA7nQHVx7Aou",
  "key7": "4qDYZykF6NMGkqx7KmQW1qH7fbWLR8WpDSLAKgtq7rDHsAxL8Rhk5TEks4UGS7VX2hpRnt9nVS5amFZ9bb1uFBTb",
  "key8": "3VFVifPPn4eqq3jbEFrDeVCcgq3LBbMeikpNDD4FdWX5CSCvq2Vc7W7fYQXECVnCf1CkT1YbVbyxqJJYb9DNfjRi",
  "key9": "3ebB3SdEEiP3dR4JLn1iy3aE7nSXZaR7BgHuNGPh5GS1qEVjuJQu2nfkzsGXkUZDVhGceKMxNvkGLNBEQAW533iw",
  "key10": "4FRJHJSQGDVKLrFHM8RSq2pegScd6NWsoj1N7SE1xso89oE8AF6F6bTxyGE1zC8CCeqkQJLvgBLi2Sp9bzaBS36P",
  "key11": "2eqQvnkvFH7QWgVfTZbQMesR52kJ9kX2vZxM2sQoLk39ixteZ9aTty84EUAF4RkFwKK3uLFnfPydRFwjFsSYwoip",
  "key12": "5kpS7EjFbwqnqdiVezzM4EghMAnKuGtHSQTu6JXEg4NYDB2jcHnCksTGC2T6mZCncjKLeR1cfe1CfsRU5ohFnUZs",
  "key13": "2DCGmAGcF1kVpts21DoQAVt9W7bWYTLnHLUxxtcKCxUm6XYfFWTH1kZ7XmJRd985h7ZQizwDZbSoB11SdodEkZnG",
  "key14": "2QCV2qEnBPHr6TNfuJ7UK5Z35JWStAZNopxS2u8NKciNyPCoEYUvQCkVvDAW3uwm3NoATRxtFS9MEqusY9huJuVV",
  "key15": "BMoVwFits2kGnSWd4kaRiHRVvbvnqKzgUB3WnyR2Y1nFw8Xc34VzriS8xg7GQmHeqjLTWSf84Sp1zouUF3HCStb",
  "key16": "3MVyQCkat8DAnXZ1UGG3pd2xHYksy68cYPmF1ogWbcLUzHrt8yNcRzDu55Nb2yP7rgt6Z2VfxL6dkQcFJoLURu5w",
  "key17": "4YAjnrTm5wx1kCUKMUtXVKWk2LehgBxAZLe6oTMRLxCR2nqXhQcnuATvaLkaNNZgok5TRctuJysBo69o8XqdsPAZ",
  "key18": "127QtZoVtqn7F974XUAko46nPX3xyjubD8nszresavWNqBFiCEJd2XZ7D79tgKZHZiT8RUPFxtJs6QuAqkHh92fF",
  "key19": "3q7YUrNdVGqG9UYuhHjncmzBDCRSxEAQoXCB98wn5yQ2FHUytVLFHQhNcu5MNhdJr6AM3Wzy3iSB7ZZQvAz7UowG",
  "key20": "2QZ9VzSt6Vbgxxo2vWVvQxfmLUhmXYJHfCy6CdqZqkRwQt88WT1MEPVkrAfE2F365vK3NmrqqZA7Qpih9jGx2ttS",
  "key21": "5fvTqzXtDKuG3aL8Dh5RtutwLYxQGRNyaREzx82qH25LNwRd3bSbgzSBZVcF2yLFC8gcamCyMNTaKCu8q2AjVNfa",
  "key22": "3QKG2qGUfvQB4FYEqeHVhdzmuXsUEZD8hXSs2XW9nhWMCSNMrbrXUEvsA4udJZbLUNGTQ4bPgzcVBmaxYeneS8vD",
  "key23": "5KyRjNWW3kauSa5XSVopnWeTDvoNBGyhC7ntMNwfZ44TRL6XCCRih3XzvYFQ6M98bWZnSspdgqBpeCvqCajHcGsU",
  "key24": "2184DNaFc1MnoWVXEhyxFJM6DHH7GpGAWL8GEGPrNrdMbtcSTF2pmFnQ1UQbp5KZ5rP9HwF31DEa139L124EZojV"
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
