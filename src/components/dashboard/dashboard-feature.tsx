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
    "5nNPEKbFijd2h76pihvySQ9mtvdMT72TUuZt7yY6jR5VXXJMdkwBthMuNfVrzP1Uw4WNDstHtE3cZLh6P7UQWKtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4q9pwRRAbJZZuNECENkvGU82tvpkU36dqybXzrPHENrhtQQofmd1MGUzToKszxFVp5Gn4XozCXzg3QrSy8Wmuyyj",
  "key1": "3dQYnHkwjbwqLicEuUa9PUQZ3icLnRbyj4crrcbqCgGYVfSqvwqQTtDrwqM7apG3i5pkFgTsX6Snzsxaxcwt6HTu",
  "key2": "2wHpjAwqterzYffsFCbAUzvvhsdyEAeStJVpK9pYNHi19j3fkHPVK1Sp4EpAEYf1wZoNFGPbh9dkTMqWg1yGUjmM",
  "key3": "JcUSNoSybpSgtVrp94dCUhCpENPrB79vKuUchz5e1op557Yenm87AnvWVcKUt99xyzT1xDZwrHmrLvLrpfmZr8V",
  "key4": "2xUrNxwHjEiGF2xgWE57cjd2HPDhmaxm3s3vihgNcxmUzE5XfPrNsXESmqLsH6WW7sgpcpvdEMzuyLEk2AX11mAS",
  "key5": "489qsEJd1x74Ru4Vauycm6wugKP1HvRv8x1srGoyYg1Nijbi8Cp9bSbmjX4XrrGTRSzw24BHjYRu5zirYodDV3PT",
  "key6": "3wMUon2Eu8C7QRc94nTAUApoKtfbyrMp5UAhmFYZ2ub2j599N37JxsRDmtC1JxoXKzCLbiXMhs3nLDK2TeB2EMNa",
  "key7": "31KvAFSL5MKey971dqzzs7dajV3xDHcSmKaWx2Ct1ZPkmttN6kebWW8Grw5qA4Zo7CD7nn5A2QVBHFAgAWffgJtC",
  "key8": "zVYJ8fX6CCfHta7uWttSFxqqUG3h8Lp4f96W6Z9Bxga3CwCXaiXftFKn8zpNmMAGJrVPmsgVSxJYiXHXZJZyfzS",
  "key9": "zSoFVj5N9RJSavCcXnSoCE5EPpF7XU3FhXQw4QYmgUzvTbYcGwfiju5DT2XVx3eBV6dyphK4PTSuTdaghcNA59R",
  "key10": "2T2A1i4wp7JYdhNwEoju9P9pVhgmKbpDpqEWiiUNsMbLK8WyBxoFQEx4cfhx54Ge4z7MmSkQS6E2JspQ8w1pksHr",
  "key11": "5qKBpKYqQatJkEEyA8tdvew1DmTsChKB6EqhPBjFXVZF9PzTSRQFcHxcnDg44GpYhiD5q4Tt5R4VrHDybu6CAc4C",
  "key12": "2gSxYZaEPPsWBX3H8BgbjUkasRqH2xqQNu3c2ZPxcTyUSPVnJUGKJsGfDKVmmhxcz11QEBrsTbfWDZmNA4wPwDED",
  "key13": "2fFYR5VuhawQ1aBsvhPBQzpLdGwdk1e4vkBZjrR1VTb1PjXyz1LC5gEwH2eax6ViRBMNpfi6ijkPsMiKNZ5LoSxG",
  "key14": "5RLeeMwDefqekKNbH9UQKeZuEMHFSPeMHE3sa7FJ6aps42cBaz4BiriL3KSJe1pkWUEJKFs56X7khxxUk5KSijwR",
  "key15": "sweLvubafbsRAaEZYwSYCabhbgRxHdLijUNMU6dK8RnAkhPhs1MmyxsMgTKpBtA3wvcsQXf1Yn1UUbkEUWUSENm",
  "key16": "4BVujTcyjDwpqxLFR1EENhcEQAq82uZZPp6fYwUsmor4r7B4j1oRahzatiEzoc2uuyakkDhwbuftPXNefL13kncF",
  "key17": "4L5PLCb3xLhoRxLXXfCstygB3oK6dU2waBsHPndmRb3Dp2vnjURBaJiyVc4dNMiyUxJU58HJDN72gPGvFH7hhCF8",
  "key18": "3MsacWMLobvSppVQNoZ7PEjGDEU4BcA8Mu8ZKZeJ1r3WcQpGEvJUQbTHMkp9QDtFss86CEqeQPPxvfctvKZe8R5r",
  "key19": "4rEvE1U4JCs7ZioetEL3kiWHQSm3XREvAXdofsekXUFRefCnYhTZEiyEnYe9UjtzribScQrJrmstWP52CkAcsFdL",
  "key20": "4ntxNyDFnTKYFb7zVfuytNCxTPMetjCYE3u5oFftWkz78i3johb9A25hLc43wA5Jv7cht25LByuHXQFEpfPHeZpV",
  "key21": "2zc35yN7fziigCmGURiuhTWgVweCtV4dUztA7EzaCpPCN71Ps4DTnynjgaHL3T2KMPvpkGoBBdstPkfcKmKn1pGn",
  "key22": "2wBhrrBN3ZEPVqWu1BHRGFcFFgdqwgSbNGEMdMQ55BPhMrReUMV97X63pNu8HrixVEDz1UfhR6V7fV6PWLDLRZJe",
  "key23": "5eJhuwrmgJYaEYXfus6u688sVgxBCG1qD6ujJtMWG3MyUH76aBSaaa6nenxnG4ekP5tVryR5irtZrc41Q9vHwJpi",
  "key24": "J2fPhzRTm15wGjzQYtDcwLaCFbSimjMf4Y12EWFMoSaGAdMAgxSrzfFVtrddx7McrdBhheBW8SLZxgBkvAzE97Z",
  "key25": "3BBaLZLk2QoTRwVhU98XYf1ZaPEr4oNVLSV5YRVZfAEkAZUCC1fCrVQeAJcFr4cYattRUwWo2ZkbaX7xmSWwD5n4",
  "key26": "4vJg9Y1szjxzAUod3UTRNGZ3Tq8bkUjf4BdqyVHQMcAHtAYC6iYKHoQ65j44uTkCjb1ZFqqptwphvcBtEw4D5VcY",
  "key27": "3qcgZjhSS6nEVTBtcV1K5VMuojjLwqtg1Kz7sVjy1GY2RX4WKgVBb5D6eGfDGJDwQcixuw9posC9sddsuSwNW8GT",
  "key28": "3dpaH7g2TpQAkbk8iCakHqBNsUtNTvq6x3FFvvNPDfAm4Dc8QcQeW9HaFca11h197m94h6GSpzFxoWY1LoKjdGvC",
  "key29": "4SLJp74qCXLcW7qvUmJ9jZ3bPBeyXksY5BKJikpZ1MjrrS56yGATonASEE5LhAPgU2bKtHA5TqchA2xQwaVe2JCH",
  "key30": "FkW39wnEb8BFEfgk9sSwVoJuxurjsNzMRpWxyTCG6SMHvo3x85RyWdwanueyAfj8QCgpzFFJu8djqvwjuvg7fN3",
  "key31": "B4ToGjca7KJcsBzTagiokZu3TU1HAfE7asHVkCGaGhA94Q2j1GGAfzW5p3iiiwQXHRZitnj14wgtk11yNXdq5rz",
  "key32": "5tktBANxpCqKB29yXh9FheLHoAjXHADh8wKjCarRE257MqkcGuBdpgcmLydVUDc3jyvGEdkypikdtwnfeQhiSxDT",
  "key33": "2fS1WZyuB5kxRJrdnPAS7pqrtrA6q21SmyEEPYYcEStMgqJVQ28Y6NE4NES3FQN1oarWh9qW12GHxXyRuYGGfHvN"
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
