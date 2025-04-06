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
    "bjLK6WsdrF9EFXprtQpkpcs3Wrzqbq57pEMqfkP3X2J5coeRrxaB4mMBjQRxz2sJAPZHYhyTggU3Bstz5gbsFHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MUFpGGLwaheMMMucPzyVxyAZT7DSwWbgdETFPh1pvnP8jHCCryna1c3oafzFdZ4taLdQ1DqbfZsDTM4o9GuWWGW",
  "key1": "NzfWWDXyWRpWud7z5DFHKT2XGJ1KnvnaAS1uihkoBi8qzC62LqnUSU6mLbu6ciJ7U4gZqdjVAyY1joCsZaPn9xX",
  "key2": "dYwHVKjRJ2SCqYGomzpwhn95v2L8fuotHam5JCLKMkbmY49ToYPKqFtQ7pMi1cAfic3baoraTfsinigVPUw7xNk",
  "key3": "4jmMsmYsGXZbAYjHKaKirddCjFvFMAPgtAPd5vgcMF28XFUKKMuNyeuwM61rhM4fvZVynxzovMiBzsB8eLt5a6jj",
  "key4": "286LTEu2KR2FmMGVoqBAeRy79jygk89Sbrw1f5B2CFp6oxf2aiFh5Y8B3Gbe49jNAFd9PMRcFc1hGnekTDDXRWuX",
  "key5": "48u7ADjhgsSsjCgF3gQXDV7z7JCH4F4WNyVXhaGqCMKvpRDn7AcTRHjsj9UqRGqmKSUrLowKCB2Av7bDz4bGEv7V",
  "key6": "5e8RAJRDruwrpd7JJd2j7PbxWpdKFR2YVqmvtX7BYuiACcbAKYwim7dETaNDv8AgoBxXgDdQD1F5zyuZi2v6hopL",
  "key7": "2B4wfBA2HBQMEm6Bv48rhJVipfhthezWEjWqaGRb6Q7dTs7ywc21GebN8npNNQfFYqRUioTgyRQ1bZbtbs9predT",
  "key8": "2HkgtCP7V81391hUKb7jEyVtziDyhP9CkcXrVHAPk8jPx4vXR2sNjWZtQMxTRtd4ePsiGQ2wVzTeckquThpDqWfs",
  "key9": "43dSdWFEwQD5qQC2XXrtdLDLV2GA48pDnSpayUp6QvUZ3cSTaxTDmPqSuDYY3tcVyCrbuFFTEwV77FQjasvz5vyo",
  "key10": "3esrQsM5sKxgT4vhpaDiLZpR1hi1Y7ZKvu1YnbGDo36QRjpTjoef1kcPNk6Pss1B2dZ2175eoPTLNyyFD77ScxCX",
  "key11": "4h4Kqj8C6ygopqm6kzmonigpZvskrUmY6hx2KPKUPmiUvQwir434wN7akbrVEr4b8L2WjRPbPgSYUq4pUNFWqyuc",
  "key12": "JJeK8zmRa4TzavrppRDpATLvgpasZP7TBnPq7QV8yZteJRgz7JhUcGQLm6D5oKhWdRzK1pnxQi5K1KjBrEDA7nH",
  "key13": "2bM3sbgGj59oWHmZ3j9GWD2vfNYRHjuHdf4jya1M9TxcqkJhsPRwU7m4dUBYo2UERevXXiiuTovBdt4ZC3XRgWVK",
  "key14": "2b535dYfCJtQ5j6Z7X1qsEhLwcM5gQiAAE6jJLobQDSdKqwkDprndUc3CHUyBF1USpUMusJzPn39yTZxUXthd1RY",
  "key15": "3h1y2CJqoQfZoxAzRNWB4R4gjy6MjU7q1npKKNftCY1EN6Ee59hprmFNhXJUDzb5oUrwLHmv5GMvZ3RdPFN89ac7",
  "key16": "5seaSiKUyXNg6hhaNophjwRpALjY5foTrabzWtFh7x4tWRfAbzEFQB5XkH57Dz6PC2LGg4SaFWrXp5JTxeWG3CNt",
  "key17": "54c4dELPh91aWyaJuwJJDASPmjBC5hKV16c5dzLznYmwnxRFGYHZecVuD2gEre3mE9DqmbbXkmvPSJcX1TbYc5on",
  "key18": "4PZjhVnFS5aQoBPoKamErveJxMtsE7ueAgus9ZxBZbQaPMf7gpfzfUHicjzN9UyVv6PD2C7JjaBZi97MEzABJS7P",
  "key19": "3Mv9i4DoFAntAV9T4wYzpEExVbLWzhuVUW4RBaktuS1Z8HP5zvyVXux5zKivssyuj3pqqYhQFjA7WQ8dGthE2R5n",
  "key20": "5Y2Zij4KJYDLPbPHvJPV89oqMbxMhatodLC6zAZmLHnqW2gaLc2eh4fgkjxZC4d71PHEx9q8vi2mqdyAMF7UBHjY",
  "key21": "22hf1Won5b5pgnqemmRUdWytifx79Feg374aQu1Q2iBnHFQgynpQH6xQ7vmV5urYsjZ9t4HSMcFuwmDzhBt2A29N",
  "key22": "2tzZfEo4xvt8A78ptwfkk5Q3KtWQKxXALU9MdnKssTp2iRJgsWbASnyFPLp3CZ9LsZUomZFKBB9L7tTuGjdzy4F9",
  "key23": "4uAarH2gF6hLHhUEyJhKUsCg3MJdiGetAAyPtsaATqz7CSVH2o4dD9EZLYE3jA6FFmvYZsmtk3RaqK4UyjVE6fHG",
  "key24": "5UDSEurQeyABKs48j9h2mrcdudaRSYpRV1L2UY8mNXDtcH33555gKdogrbcPEfoHAN6ATdVK4U8UVuq5uipqH798",
  "key25": "4HNPeJ5rf5hJB6n9vF34UMqxCSZCu5Nox7mrjxwxrXn5CD4UJZAxsiMcCej9chH7PzM4iwycxAbnQaSAd6Azhe82",
  "key26": "28jEpQvf15WJRoe3joCQm7rfsZRFHZHVity2a5YNhfn8EQCMdhw8feqE4UfzQ3pp8HS2kQpFLiXr1xbsuiurXqZG",
  "key27": "2BhEiRdoQ4fqpX9q7XHtNRCrWGHmhcz9xjXyPLFMaLQLUqHPnpo4gxo1ZAh4EeJzSoEetccB83VHBmPvTijSpS1A",
  "key28": "65dnWAm4AeQK57AsUW5SpZS5MA1EjZQbMbcx3T6AKKVWuoHN3CCiWxBrVGcQ2z776chkQiN71rtYLjotmraXbzap",
  "key29": "5acWgtvLa8K9hjqyPuRxxnJPaWsHrjovfR4gzSGzAWwh6ES1VJZD9Tv1CQd3VZdSg21SmA2dGcK6NRmdoUu9D2Mn",
  "key30": "3YfSn3RqnsdEo4TjSpYJLbjAhGdq6vz5zviiALRnsFiMKqCWvoRNk5A1bdd2sv49hfG1V5AfQhZbYw1JkJYXvcm1",
  "key31": "4FVWFZATXeyjYdLRs4ax1q81vaZn8ZVGDACRr7oCTgyhBph8VtXju8ZS4CYshWbzESUGm6VEAHjGEBRJEMHdqBju",
  "key32": "5AQZbY1eh2vs3jfBnettBVjr5Bx5RnTxXFr5dSJrqG2SWWSMvdbEFhRLUgH3rdWZ3hsfGrnLUheGJx2zAueSMJLo",
  "key33": "RzvLSQ6NodJAcMwF9JzpsmJUqiVRk9zpzu33omZMq5gSEmDSwGN5nvQJcc8jamwr74JQhSVM4PPaKTzEoEMkHmg"
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
