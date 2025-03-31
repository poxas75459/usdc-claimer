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
    "39p8Jabq1Gh2LZ4crHNBamE47wULxZBgAxscxS4fnqio468dNkitSnLESUdSqdAJzWcnSVXa73rtodbNqXzWjneB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663QEenvz8yDjeFuExgVR76BN3gHGkZDachcmSjktYkoVFJMbUFEus29jqqxAUEPQNYZxxguxMfcVr6UjSVPsWMh",
  "key1": "4MYLP9tawdZTEX1ggtHhCXQKoAN4AFsqF7a9hK3EkWtNoHaod41Y8Zk4GDdLQFXm1cr4GGzBVZwHyVZE4QqpNPXY",
  "key2": "4TKYAuBdpceLepG8txnnxA9W1XQ39DJU9of2CXbgYyTaUfoWd25VB4Ma7iiBPi7WyBXUxgktkgaoMdNWTXMiaKmZ",
  "key3": "4wKXR8VbtnE23TCEsDdG4n68WDw9NbxdMuAjcTn2T57BgjGvsQJSW4cpmaLKUna5DomDdT6uffHF4MMbYDDKAZCH",
  "key4": "5FeWeEU2aXWw19Rm8yQ84yk6xXhZD8FK67zuWbofidfhfHib3iCQ1E4gwiyGqaj5N6wwivYMuS1m2UXbym2FAVbJ",
  "key5": "5SgEBXWMukHBAazNRqmbRwzJFksoizBvmtrc5p731fUZSLivcewBnNNQZS1CuTdnp8i5sgxoVSWtVTayvbjaH5Pm",
  "key6": "3KfTmotfsk9DQfxLCPwg4jZ1a36YKHkPf4pxYBkAx1idpXCPTxuSmfunkk2wAcx18KYhng1UzDbUjkYNcDEVk5Ty",
  "key7": "XeBvNeVP2mV9Qu6uXhzozg2W7GqaWCyUtaKVjKQetRk9C2KKYS8z2xrGjagAqMhTaJnkz7iqFgjwFCTAii8zbwt",
  "key8": "WZAH6iEm93NKiVWJFJpFwAE21XyBQGZZhC8mZcVkwQgb9eyePi63ban2XXfVcKsKk7omWac9dRhbnkKKttJ5RTu",
  "key9": "5oWU1FiuguwmEPgStEJWBNxtWHdRQB453Rh5Hvcu8wYH81zMPVzCUNYu6zavzP6WrzWWJuDiiNbr1eXbssnpyRFG",
  "key10": "SYmbpYdSCmoNjkyN8ZVFhtrh7TEh58rk9JPcFFD5nuMfoa551cwuRrXSe7T1bEVQpjjzEPDjYTJiJU9WC8ZpHWq",
  "key11": "3f6Jqk2iXgtuwDdcbENZHkqVxvsiYDjzJdN4PgnQLkmqT4hQzw4aTY71BJwtwSmSt45aHus8qSLtKeWzVfW3YDC1",
  "key12": "4diWEqioLfoNAZQt5gTvdrJtm9iqmta3xS3oV2cdYBLPXNroRkFXV1nDwpNVXh1vjd5pUJZpP5Sw9thsLiWeRKm6",
  "key13": "2dgaWG289A33DmrvQg3sBbN3o977bABFWtC9gJkKV4HY1s4LukMCrD258GfX5WMBQ9KaKbfqEBDmbhFMCogDh9h8",
  "key14": "5tde9pYV3Q7pujuPJSAWT51uCM6kXmyCBTJjpNRuu6JcVn1tRmQhPf8D19wxDwMBKuAQM4xCEs4hRqx6SQxQaYNb",
  "key15": "4nLWt6K8ANjYi4AWyoihqu56EARvFtSqySamRcsQoc2GKwop8t9w7p5UrkkicjkQPVnSrjuLFgcrrveKKM3J541u",
  "key16": "UZ9mzyKvPyWkUDoGYZsJj1QY8S7RHzrirRE5GDGwpVhU8z55ZqE5rudUik1KsjvdwgpEirX1bGAJKydP8VueDVc",
  "key17": "4qfJs9rKzB31wVR6rD25MkdgoEtPbs9mnX5EYmVX7CzycqxmztRKd33NN6zL6TLKctASPuHCCWLvfk4twGmBy9QJ",
  "key18": "SSBCD8qMJYbX9MZGkPQpP6dBMnVnABA8bwf4a2szBU2g4iiRSzPi4qp7DfwNG6G5qBkoJkEFivWv38oU2qxqsb3",
  "key19": "5yJUJ4W8beB3iV9SToN3mWR2y93bj1oxeDNRdFbrdoybpakHM3N96fFngeX1ZkmPXTjwytUrn8491GnPGeyUTswZ",
  "key20": "5zrtjMgY6zcDYsUeJma5ZowTXTGDuC6EbRsuWU5X8uztofXboBFEACiUsKCovEA6ve7Adii8dnik5Z5xVoWVSRSH",
  "key21": "1uRDQxVw7xFeYn2gnp11Z91aNgsCpoSWAiFzHWd6KD4qYUsq9VAseowfJj8nSkgsjtvzbgWs5BmVi5nsSPAUi6q",
  "key22": "3ni1iCHAiT7wVthh5TFqbhADwFHX8FNFyawYtpyhGBDVKoE237Y5vbqJPiGv8dgxTxPFgFMWndks4dk7fR5VyrWg",
  "key23": "2zzsJHu9wkLmKE6wJ1i6fiWzpSDgZ53jJJT8jKH3Mru1ev1y4kcWZ1yKzMeXCy9NizmGFrpGYNx4XPUw5ETfMg7U",
  "key24": "3igzPtT22FMk7QFtbH9yJddzg36vNfPTy12sJ7EBnuwo6KaJyyU9JwYbAWUVhyBw2aaaS6CARnwvi3UJTWPZKFbr",
  "key25": "2k3XRVBtQ1BY8zaf1LVTpXgMkTirNiuAZYsUiShrfbiUiwG3CmH7YTsxo3UMJNcEPnnzFYJTXodHXVJDoJnCnnAx",
  "key26": "28DGKY4NAd9ypUMngZxPZrb2NJGqzzWkRcCy4huPYsiMvRZ2L6MRoCztEkhoouHhRcKxhxQ6jXPGHHisktxiRjzW",
  "key27": "3qGajqoPhAKPqn2HkBHCvtwD4FRWtPEhBisiVFYCfahWUq6ECF2hkX7DiKvbHkPEwpJBKbTtBRAWykRNbAm3d7y6",
  "key28": "4TimEsXApY39jiskLWZWRitoFTqwBUbZ3KqYvsy8eaSYeuNbbaSDyQAaUFDd8QJyvX4YLmD6k88wKjU5HHQAKhRM",
  "key29": "4J6MGhpY2uzYE7NVwxAe8zRvtjhcNuRqLVDLQeqYMuMCT66cagiNtdSaHRYANyZvdxukjFcuafiYyjoDcY5q5qQi",
  "key30": "4VyY63b6wMfBTVkA8V8BjV7Tu1KWqVHMFKtSqDojXv6FCHpAThYDR64YbH5rGF2eCY7p1xgcGUZ29gabpppfHi1y",
  "key31": "5sRyPugn7Vi2vSYUi36stQnxkPcDDHtaC6RxkFvsKSehkrnsqRwygogTUKU21VYzVnkXLvcigdvJmPrXbVbU7R7k",
  "key32": "32Gcy8sf6gxRSUgGjJwpEt37zhiQE9ZRkVQGZraoHUh6dtwHxyEp3uo1TvLxXwp42STdsQbp2b5R6f3sLW2mjkB4",
  "key33": "5pGqP6NGRaFnsTQdUKX3aWHDKPCMiBUb1DN7eVoZ8sByqfafV7L1zNCiNefdG2YsZxX2MCXZERXRTFg69NvSfXHr",
  "key34": "643JR4fKkubwP929gvZmMDeiHjCQB2uE7zUffBEkiTK5BqsssNtWSaUjDtUNpC67y28rsFSAVPyXwMQU4qRCqkbM",
  "key35": "3cUUvqtDwyAq5EWMqXHQWGsenDgsxoFtMdu5oK3qHWbLdkxYaGkmcnink5E8GBK2qxXURYWEQXgK1M6TN4RrnbU",
  "key36": "4dKkiqsNuVFh6k7BvaVMbsq1uatSeLT35z4qNU9nKoMNzUYKZF6JtQRpV9C6Tuz7UcuJnJ92UAD7Nk44B9Va4R9V",
  "key37": "4aBSizU6i9cZkefVjhsd2ZQFPcP693kJ6YAuu6EdmpwC8M9Np2q6fDyebLh3rjKzNJ762vySUA1n6SyFwRuwTjBN",
  "key38": "2uf27Z8Q2VwKmF5SyBebUF8mVoFj9nf4wZWSv7mGQtNF3RzpVy3UCY2Q9DAERKBPnX9e5mw163wfz5nSEagwCkDQ"
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
