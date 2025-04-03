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
    "5526jZjsz9ChpE8g4JebU3xr5tyqR5sNe2rygcjFausVhGcACfq5tnzLiaB282GqGBMsGafGLHtbZJcL1uQ4mtYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kn86pTgis3BasczGfPmQrs6KM2LsAdZg7h7bPP5BtD7NQ3MMNbV6T2cDpnW71F1ZFg4gobuV3yQnGCk9ocUrLc3",
  "key1": "5m7oAszbe4AEE2hZZFDfBN9aSJr7cVA2gvCUYCYrzY5b9CNyWYnPs6UGaeZkeXM6ryHwzWrVqxmF7yq4M3shWJra",
  "key2": "3jngCPA8oRytFVpsYBJNnDQgu4aohkPAwVJPwaABKJuL6PKFZ7P7iTKArd1j23UWhhoE5WcZLH93S1Sb1eM1Gm6J",
  "key3": "tdRutUyqu2nfe27QzfWmD4u6tQtHKHU9P1tQQApFiGJoJY3nBypZvgpmxMVBsoX4V5cj6Rww2KLR9QGcxZxDzgf",
  "key4": "51ycuyYdS13CAGaDtL5CHXKfB4LfatMRzWThsaDgXZsASR8XTGnRiecJsg1RBd1XbFxqLbskffrgCnYEykv4pa8r",
  "key5": "5wjvT9cwmPn5NHoJinTdmGXXzHXLq7PxFe3m4Pdx8GHJhhhwqFXYcWAzamzE2gohjKNbWK5iDvU4cDATdHhy5H5C",
  "key6": "Q3j9oAM9iYt4Pmf9pUr1ptnpKAcqUWZkWc7tk9kT8VvBn9nC1ZjbQbnpmunfMPxArX7a9bvzRFZhH3ZtkwgpWq9",
  "key7": "5bxidbEhEnrSkx4G7Wef9moMuVFgQxwcTdFNXMRKNaRKLrrUZfdYj2jap7eYsbHSZU1YW2CxSJVTqusDPGyobG4p",
  "key8": "w4JGM2tad4MyuVJxNFNQCY7YWesqvmEZnZfujLM4dFczgH2j2EBBzhYjeDwW3Y49nHFyZPFGFm7n2gJ6xJVTKXh",
  "key9": "3UXM95HvxhHPMpZQvGZ1HC1bhYYCshn5LYy8UjKf7vHhdXi1zMLxWGTwvgsPVW5F2F5iH2jnyzuTiuiYkUfhEfyG",
  "key10": "2DsT2knyR8zuAdiXd6FPJDoaYhyxbGBfxWP7whYxPewAeQ2mpPJKQ5BQ4h5zG7c3mrnEYG6c5mDH1XLx8rXs7PLa",
  "key11": "3dTGrt9sdd4GBrH4QoQGrse4jfs8aT8nbPR4tMd4w1hncdWGjuUnqJGdwQbDgvmqLH3SsoW2D9APeQ1MdBabEQmh",
  "key12": "2QoFHxsJRGb6QGknB4AtoefdDWXRV5Cq9SczVmk1y4BdA1GsKnNACZDDN4H8EEczueqk7im2yvxkPKtohyi7rWQ7",
  "key13": "XDBma1CvhAjSYSsfZoj4ibtypMS1pZBFXkrez4HCi1fzeNd8k1AbKYbgFfB4NrthUAGwbvFJbyTHoJAidiA1ADS",
  "key14": "3Q2FChZHK8owXBa1K9uweA1csmSAPkZFKdPWbcznyGcE9cTjSrFitgDJYjdrSr6vNi4g35iULsc3WprAaQ4EmAkM",
  "key15": "cMQhPrSdzQAc6wqxy4BJWWXJZnKX4aoZ7NdRYam9iuEBdhZXMHwBgqNUvcwmfxkCawM2x8fE6udi2VrqBtcmFdi",
  "key16": "2gz2W4CVBo9C3pqNv2QuePzwvgMfvc38QA8pdxKuojZntxtDZaotiSx7i5dghncGZRKtWHchVYuENAnMEpy17Fzj",
  "key17": "4rERPQF8Va61yXg5N82Uh6yTLdTDmiY7SPByQCh6ouo2BKcymEJDaVdw664yjcQ6JmR3DRpG6J7m2jhEcK9ejXiu",
  "key18": "3cygE1u5XMAw9fNaia4FR7TkjkEuXh7spMiqU6kw8azeeyobxov1SeTDx1cfPwNQWhsCQVVVoUNM5r8DdTC1u124",
  "key19": "3rngf8m9UKVUm5nkR5eF7UtE2m8nhbWfqKeTTy2fA4wPzAwLeev8MpWofEz9Y8C5iZES4z67c4oQNP4hWxhsuKQd",
  "key20": "2EKypi2b6G49kAJE2LkjLmAEA1qjidShyddM5HEGLaHstXXfzVnUScpDyFPvhsizCLgxNiFpExUxiW8QUsQTRwyL",
  "key21": "sqUgHZnAethtt6FB2X5d6XYynHwnHJ2WKNjCNxU7ohAA24cJD5GQicehvRjUKVT9VJ7ys64ZCVt78UEab5Gdj5B",
  "key22": "2LpbmtcXndkvQ5AZqAVaaAPHba3sLKbVo1pFRDPvsr7t5vXwpMey5p5ksv9BLRR1CPWgMvX2BK6SrbLZTM4cdz5f",
  "key23": "4EQBaW4oMBHmf4Hc56rw1RQ6KcHoYdnbYrT8YKykkU9rZ1cePfygEEgr9DVdn1HiZZFFCwB3CwyupjxPH5irsPjS",
  "key24": "63Hnb9N9AZ3id2Wwy3ZcX5DZZ64DvoUS29fR5Cnvg3QXJe5u3JBKiKpz1XC4tRBfzapm8HTaYW9WM7TPh6PJBW3E",
  "key25": "3K3aqP4aEdCPZN1QWQMYth9arWTFPeYQXJsZaVP1cNCixogc7MVjuy9a5YmJwUm9MM5pnLNKB7S8j7qKxdYGWyVm",
  "key26": "BKAx9pykPzSjTFHWUSyZi6bSUFigmeRJJkeVYYRpoy5qtXVwo3cXyaEX89uVFWo1oG1zaxYMZMfBDdHTK6NZGxb",
  "key27": "2E2mzDGUxoGVjiwxE853DTKY1zQN7KjFftPEphZd9Enc4PEye8iBNe35bGVN5Bd1bXvMytNFFU9fX9qh7gDi1SGh",
  "key28": "4cRCEL4Q519Vn2bPD7wRxNxGFMkUNjtniVvt6jrAucoJPyENqPaQbQCdCtgMwFzGSgEJu8hvkM6YxRG3DS2itbwC",
  "key29": "VMcqUNScrRSy4ZLbYxCHko8MW6gd2obJRvV8oquV7zSD4GbW77cocPaT7GqTnKN45M9fjiExRvm3gVWcm7Cgujg",
  "key30": "xdx3ykM8rcb36aMfZ2dEshBECcE1o1TRzaDwv9FBPsTWrfNrdSMFwMoAh9SyjSbBDToDEEiuno4seXfJRH6eefG",
  "key31": "33KBn5diuaA8rBiaqpQKtySksvkqcS64fPNgk5bosX1ozhwEg8Hy2m7bYur74f8MDzQzyVm4gaiLaCk4Q4B7gmXG",
  "key32": "obLxAzK3PR1arCJUWU6qh3cxwbRSts5ueYLndo64Eb4VZzX433pQXmjjWQD9Y15GUzGmW1sdWVnp4BWEuSGijat"
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
