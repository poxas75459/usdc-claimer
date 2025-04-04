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
    "Zr57ek6CyCoGAcs6McHziMarMCRaGqMCPqQweYgSYP9MwNBY5dNT511zudGn5w7oakNvL3qgguKXAH82DzACbpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AwTjUA8gXpxNSaAcFPGJa8URibCnLWn7S17JM4SDcQvPJJwFy3XEsGC6u7kFyonpr9yYkaHRrwo62qsVtrYUH2e",
  "key1": "2PGBDCVKnwuxKn6VZKVSyxK6RLG5rFS7L2eEAR5DjyqJCgaGpW4mBzqt1NajeqnFDDze2eQAwTNacMRfzFeJYFAs",
  "key2": "4LtLAnP8RZG6w69aoFT4bsJXadQYNFYgvg6b8xN77kQAyZk8LgnbNnbUYismFUZGB2iLFWEpw3wepePf9pPYPTAZ",
  "key3": "2f5ow2wwhsCr9QXrRReyckSgnkPiPdeFHgvEuhYCyuB5h1sb7pjJgHtAVhwRQuQHVoRFbAPiRfiCJswHa2mjcfDg",
  "key4": "3mzHWz6g6qsDaaoCecPRLX1Cv53pHd1tWUMNsd4ug5bhFujRfEgSs1r93tdzvJ6oDVxR9XP2w5ja1bBD4rJkPz64",
  "key5": "3oHAHRzg8B2onaUKqEtYnmuRBybyS3NZhAJmycZ7CXXfGgNbm12gz5KBUppY4EPkDStpg9ezfJioRqMGY6sRrNR7",
  "key6": "5tGgppkQtBkMtTkRExNhMnqPk13ywpYzzVLpVSDocpQofsFnjV8Mm5kXsshCPGGYdBNhg8LTh7qpcGceXdSjjEdv",
  "key7": "25jdPp9dUEMbxsc2KwTcDyqjH589ANUZTNMNE5pq6PKLQ9bMMZpjpS6Us5jVxKkjdJcspvQUixUYbTD9juCsD4rW",
  "key8": "3vq5wpPMHeegRjzNK1EsBPNT917yswkTqozdXQ1MxZLaetDyKJ8pjVKfanuPLNrQaXwrpsi6FPUwMHdutysnAdsy",
  "key9": "22ZpyxzMUZPKNqnCU5ufNMNPtj8uEjASdBUrnrxRPf6awaFTx94BmnhMn2G75feMuMstMTN93tFX6HZqiuT9ChMN",
  "key10": "mJbPQydCpTMHyowW8s4ugbk3czkMcT6jXQvEaCnQ6MQButLnJJfmiYdWf9MfBWCtfLum2GVysfMdLurRcLqA4ic",
  "key11": "5dyVYsSUaBqfazYfAtBqTz9Vj4cnCmURRaPFbnoPMWLzhLdRUQTgHieACKuhUaZD9sDP2YttkZLbrR5tougQwGYt",
  "key12": "5E1eu1GAoWEJr2knzi1TCenHxtKu1FXBvNAaJm124ZSHoB3K1ZhW6sks16rtA5vASpd8XVisTD5Wc8G174YLdG4c",
  "key13": "2JzXNLHYmfGbopSiMTjJ98jbB6xck1zfH4jujD5v7b38f5hcADm4wEh4BoQqcaqDpchmvXGWrcBdY1nXNzGMZays",
  "key14": "4JqbSMLy1q7Pr17pnynAFfuL9SgoijybMTK32USwAjmLnmLW6JHf4ZxhLvDLgS3TL1yR8Q9Q52dfEvjVSd7eezWT",
  "key15": "7pPtgajpJTAFdb8VVYrhbDbyT56WcRxcx1TGzDKxv8Ryv2ZPkjVFhtzTUegp7wNRu4r3ARm7wPtio9p1Cw3NEd6",
  "key16": "Shek2LUkzDeuugdzakgkotbXdG5oUMrwK74eYmKx4d7isLEBwx2bAa5qLKGxddiRqKt7tdGudkeWSSmbKvDLUNK",
  "key17": "5Y7ASuffTYvy6WnDo2G3iF2DzJRkgsatobyQvRkUq29E4wZDgrv5aCrWRiBZZbf3xrEdzHqKvraXGFTWr16MboKs",
  "key18": "28t1EbNkQdW4jAsU5tcuMCiJE7EUiHdjQQnWE3KoReCETpYCk3DbaCavvjs9GaGDptF2g72Fw78oHAbsgWS89qQP",
  "key19": "3UTkyNNU4zvW7ogEJ7Da4VKR82F1DybNmB3YEW76HvV7M5qTmN5b5sNJTKUka4VFaNmcj8uzrtq8d7wRnNup9hJv",
  "key20": "3ee1nJGhMEknEYFj1MqRrR5stCu61hd5vvX3wFj5Ntepz9hoXtJp1c2yByzhuCSQJuyKEv1imNCczeLiN3c37UMx",
  "key21": "5hSsxxEvLaT9F681Hf1Ngbjmi4inDHG1nJhit9ozgu43ziiVbo6SVLD7fKin5r4jDm9CUUbZmiLVkpQ2LXDFawkG",
  "key22": "467NweKiR5zUaGGwY39T1yp63YuXxYhVucWGwM31d3abXUJnUhfXb6RcWP9TXtoJ3po6Kan54TGA2Jw3b9QX8atu",
  "key23": "2pPtiwqojNUWs11pXS8SpoxrGLmPRHyQezqYCoK65kVonNkmgfMqjGtxJzuTwws2cYLty7oSyFdqUuguvEyk59Yu",
  "key24": "4YpF9j8VNFjKQU36tfx7tRsHsxqi1WZLFjiDXYB3BVKXUwneVWoXb8QcWRv1Q4q2bKAhTkUEiH2GxXirmxjHGf4J",
  "key25": "3JxnmMmufrixfdssXPkNSpEYKVcC3LQNUo3uNJuUvRC6iLtVzGbiLEjwGDvLPHTtpsMbE2ruHEPe1NGax9QCgJ2z",
  "key26": "JLv12FPh9spdZrfdCQpzHpxyvYSNCUTvXkbCRNBafvEgb6xvNxAoKHzsx4tn13pfx2tysTRbZPkqQdxi6uLsngV",
  "key27": "26yuo7DT4RZhC4zVKVuzEB1Bc56qhDVxX1WjVHVx52jBT4M8eJW24riA2E5WX2JJ8YhDAdZZFzsJAds79xVPfWnM",
  "key28": "4KgCocz77iurbYrqx9WzohvDoYFU9ozLM9txGXMLf7xwmh279ktCJy42Cb9JYY2LRAzBs4FCdiVn7hGekKjJjneU",
  "key29": "7Ro8SciUEBADYCjfxEuhwjdzo8rNFegmRKSrghzFizhvEvN1aAmmebBuniR8y2ZpW2o2RrwLdv8XXrUYFc78V9v"
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
