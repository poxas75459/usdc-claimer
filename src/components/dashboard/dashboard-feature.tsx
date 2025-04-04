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
    "2DJLspDAeY4sBtWygbzEJWxSzhx72cind9RvhBS5uKU4jctQRwbF2wrYcc6VFo7TkSunG1A3KL8FJyMDDmsnMyeo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tWgAM3f6yZPbXutG5x4Vey9PhMPver5WZS4PJ949siA9iLFGVbsR2gTWzk8MgsQi8S1z6ANV8o8C5ZKvzRqz2BQ",
  "key1": "4i8xzkA65AYpdvS8dv5MngpMK1B2PmQ6iSTBNQJjfG14sgqvaiQ3PKuCFvkjVB9evixoA6Wpr2Ku4xMVuF6oHHNJ",
  "key2": "26bd7mfy4djwwJoaFf8VeHek5TL7WXEK2awjsxWx81mjNoC3KFgdhAZkm5zJdUfJGQm9C3ReD3orXHUc97Jp5gm4",
  "key3": "2ctaB4CR9Rv6gDpJ1fzo6ywbL1RQASEq1rLtGffSZgrcG1N47D1MbHdpGGZ939eMVqMkAmthKmvhgVjoN4Ws4FWn",
  "key4": "8JY8c2gGwMumpF7XKpHSjADRRGLjfjbz2vWPc28pTpzjRukKBV9Pvv418VQzNuPLh4VzVcAkPdyfPtT1G8MDZ2U",
  "key5": "3vx83Y95qou43CAPmvX9qZNsgQFq6vthb1UbHt17C9u823NV9kMHBT3oU2s5RKEfJiFku52fwtRirN1kkE1zHcqw",
  "key6": "3JpbASrQxUP8fHvFw9oRejtnEdryPPuBhNXGWE7hb4XfPFCZfbD27q4GiKhjufZ9iWJeKd9BxD5GMPf3c513nBxv",
  "key7": "mm6uPYoWGm6kuNR6Xezt4gbAesvp1w5bA72mQr5dMxKSwPedwQAF39Ej3fHftLJ78Fjp5e28t1b5ZXZeUSnrZA4",
  "key8": "2jXhhPxC7rdTMpqf5SKBv51UDDfZwGn5JWZoR4Aa498J29MobRq4NV7GbmCAa4gFukKKntHNXdkHtnsuJbM6oD2P",
  "key9": "546y2R9RB6SpVZQp7xzEXCZUeBxDKp6MjVeW5wbXhVr2wzwx57DEbXozfkGYK7iJrgHhqpdZmWPunuFPu5FSYDfm",
  "key10": "2ooZt4gJraiQMEUDh8Kj3XVkxfbKeupyRffDDRYMV9xNbqAmWMRbeJ9BZgJk213mhL4YDdymkuPCozEewZdfBEeB",
  "key11": "4Q68T7v8dT3sSvSy2jxYmG68bjNbmFSFBPGp3SSUVbHrLnVBLgKk8xF6sqpP6VP95131EfpEPxPAc2Wq4EjDpUL1",
  "key12": "2vahMpXpZGmPX5SfCfmRcC1n1gG1XrxHPSjxFFaBSYatFXdDHQGg98sFPL2UhTCHpGHnSmER6ThsX8faHgmoLuHU",
  "key13": "EgJrP4opLGi2wE5S9P4tjF6AdmaLWd8Y7WKAou431vU1XPxXE6hJx9xRrcmFwxhzjtTQeSJQkeEMoNeoBqDVa1E",
  "key14": "G9FGnxgd2umnRZzTfogxRnSHyG85nqFjASL4zV2dD5eUXc8v9essuQguFHpEanmcyBQ9EZve3FwQdAKMWEN7kjA",
  "key15": "5SLsJbUrK6sLAPJBuBGYwnJ2nDZKr3P1jmsB5fLiRu7rUeTbP4Wc3cQ6MBakt4YRJnn92ideZieARiQq6qCktsyz",
  "key16": "3GWJfTntNGVLtu3jKQ2PyfSz5MNFR2xo8KFQ1wUPp4cwoFGBpxjcKGcSxqF5zHZ9KTAFkkTaowgmQHKfCkEYF8xP",
  "key17": "3Y2GRfQoj3V2oFvr2P4aMgQqxyWGPmiUEiPnKNWiaTAfZ1ozp9sQztTA2PQpk3rfbvp3htAxY2LXNyDhE1i7cuDX",
  "key18": "2KBZg9hkpEMw2KNkNY7GkAZ7hgBFoc3aC456jx4dabTiMcxMxdDsnFeGwtr5kw3YzUDPX8S2s9yVcyxqVjcwqJXf",
  "key19": "3682bwRaFvQvWFVeBLe4jeznCDXtAEbcYRfAALqumsDGuNUSkFmFrWZFbCtosfFyzQbBD2ZGo92q6MWjiYJ6xHKa",
  "key20": "3zErGo57Xv9HYoobhKR7hDgkSZ1c4KzBF23j9rF8uwDypSmzxRxtogmgmJYdhbd2Lme7rX4wgan2ck3WWs5V2p5X",
  "key21": "5wLoV4LQ4JGmCqYdgvj6qLU3Ff8nfu88uz6Yon12vMfPZsaQHx4g5EW1e94nzEAjK7taN6Dhoeq5ijwfCiXw4Pbc",
  "key22": "4dJcyyqVhiSci3qDR4nVL8aBek2DXRW7MHTry1rgvmdJLaAnQWZawzwxs83jdvnBkC9nuGyt6JfCp1QXJXVDwSGy",
  "key23": "48t615wox7VQFidtPahkXFPXmNDMzxytyos3KJB8WaJ21BzTJGxN7hRfdKHVipXo1VRXuP9T5NLRcRkYMko3objn",
  "key24": "4BF6nDg1SweoUfbtdxE2iPDtULC5CWMLCDt3sUiKyqpUR8jqjHCmFKiLRwXBCjdiDwmhmF6hNRhfTpozynmfop1e",
  "key25": "2WWcsTF7MWsvvq1JMSXbhSYBdzetLpnLFnHzzZyCjvW3HfyXhU7iNx3GzP7y3SFQGe9FMLRqjJHkiMNcPy6vxYYJ",
  "key26": "5gv1DxbPoo1hLYmqKRrx8LdUwqWmqMgygKCmf89nXpWUaHHXagvgXUavY59PJSGYtAUbfu8DtLt2zUoc3jaunJ3f",
  "key27": "4aDP4HRP7aRJUeGP2BD4rwLeX2zm12A9sPEnzfXQ9FMU7WMS3aymhzUC9JfyGNZCvDRE62PgDSxnPFSKzttiVqT6",
  "key28": "4hv72RT2WZ3komFLaSkAzHa2koEXxNpxFNm1MkvYQFnzrx6n9bpDV9WbxRi1Tcmmvnut6HznCs8nqneYRZUNPzqW"
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
