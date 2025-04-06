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
    "2ye4rmPa76b9HNeZiY7ZhU6GB8JBoxSXtPEfZdmwv3AZdvWG5Wq5tFcHuEZAsGRSWDSPkgg5wMnpmfuTAgUsokp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tdNZ8w6buSff9KhasxHGzu4QLZKu7puyGnHH3BizRwPMp77ntqBwmzrhq2tjaKYk8JLfBNXkcGabTPWGmCPpAZU",
  "key1": "3f2kpcg92MUKsT4rUsG5dZfJeuu7s7gjnXmQKZjQmG2NZiJJuVGe23i6Z3KDyfSXsV8YX24YwLwQTjJFUJqR3VW3",
  "key2": "5vNaP42jvRZAM7nmn9R3CykDbEw5r99MUxWvmzC2LG4AZWopjrreShLbW5mX3JoEg86BN1QUi1SE9cEZ28LrAEgT",
  "key3": "5XdrGP7fh9ZeCbym1uc9Gm4CocyzoCcrFX1d9wrK36d88jVRQeJhvxPLTs5VXm8g7AwLiByr5myBeuJQyBynApao",
  "key4": "64agzdUWNGi8y5c8irdcyDKGKnkiPGW4LQQBA3iWprGywkEYX3ABhMswwf3UGqxJJTdAjze4E86nhZsPDpgcAfs5",
  "key5": "5ZHJAZxL3sgEFQzkThXEV3rSG53oNzsbWiJ2i33EtBmGWFcmWshxzW4cQ8KPyLjPpidGyN57MtNQNkidxRy7dKwj",
  "key6": "33vuS23yXmRamaMMN6MAyNBGCV639XALoQ5Dnzk7WW2oWxGfjTBUR2JtSjXLCSwDjAxu1d1QXep788V1Xz17eQph",
  "key7": "44ite6KY4n2uBPHxWMNvyh5GwSdasohtTdLYYsBz1N9mz77yk2dwwtUCLxWGmxeARSa6ey9cTTopU6YobJrpzuW1",
  "key8": "3fnj6Rfnb79dWMTx56nrQyBkUWRVLuqpF3yVEbjXsx1bkcJz57yD1NRJZe3Vy3rZhaNrHxELbEtwhFpxpiNLRED1",
  "key9": "3Bu4N7YxhBeN17DtxNXEUzWQVxcrRGGiaJMQP7JSV5px2wqvfdfk9767zMCBkufu66mf1XvdbCpmsSYZojfk4Xz4",
  "key10": "3jMAqG7QtqctegkHcFaVGfqGP1CJ2qCsGGjResicbrdkuPXMq9Mj5BViU2mQUY55j8PgjDNdSqaCPMcaXBdUJYD",
  "key11": "4aEX7Pm4Gfg8xvnTbvMX8k2SSyMDBMfNVjWfbSZxwnhYiRRiT4zWdMzv9hM7XcKzoh9NHwbirRXctXrzaBaCWZnm",
  "key12": "U81bGUHrBDJu29sVwcx9SqXKQAoEkYfCAwkaYdrdzacxFjo9aSst3V4wzdjYNWnsCoqRzCEXYA3WiZWhJVY5kgR",
  "key13": "TCePTv949cH8nNTaqCwPgKcaV3SLJ9yr8PBXjQJ6dgAL6VouQrfwh1Xo2CTqHKcC9x4zRkcoUAAFPU9onYKYfYF",
  "key14": "61pKqKa7CzshbVccNMZEb3MHmbW3xuA8jT5PsiQrxxc1iPmxFrwnhsRa6SzA3zuLdCLBnq4nTJQHMFcLsycvcbGn",
  "key15": "4XdUZWiBMDbui76aYKAJgVvgDqYejmQVm9NrTTSPAcm3uiVjwDNs1kWsWvVJWiiEL8kypXp8BSmHWQ5ge6nYT8bT",
  "key16": "46CRbAmP5KdnKyiEk6WLYMRFMCZJVUHK4962Z7KJrDbuLyucbNA3PFJerztjJtL5XE2KEnwAx73Z9h8h1uoHof3m",
  "key17": "4R3H8hLkxo2ztke4dU5kjQafxaMsLbsTckQytP7Xb1Yvmuf2AgE4bQep7W1NUafy5M9QRTzyqKe671cjvd4KEu9n",
  "key18": "7HfNwktRW4V5rUzeTQ24fQ2he9ykkS1sESb2qH3zAwqwzQmSEbkEw4hy4HCjrunvohezAR3FzaC18NwRj7ZCo7z",
  "key19": "4HBacZtBoJDToGixiQ6ZUMoThEu1jeCQqErCpFJxVBNr4Y9RMpj24oPePhkkmiykkRJjuLowcdvrxJQ6rRuTx4G9",
  "key20": "deP1atGebRvymj7YkMVv9Nm55aVfveUbfK1X1tNt5BSTnHuKkkMAdPz2KBveLmwjL9KTUeDJegi5RQgyeW5zqCY",
  "key21": "5QfQT5XMVpEboKP7zCueeE9UPDeatf2ocTy7yEqbkZco7HP762XQXqwjwF7NQJjF4dD4avnjZpBYeY49xRtw1YES",
  "key22": "2x731vf25FSAPX1dUh6HjuX9qJGZ4FDksUaNS5KeWWRncTQNBLMk4jkf43vmL67cRYQATQJKYMBFWZZyucioBgnP",
  "key23": "2MMRWHPhnny7hfb2AYWrgWcLuxz1Z37UL9B9dj5Rp84HTJvhVq7Ku7tRPhZDWT4CSf5nmgDK96H3oh1T51K7Hhtv",
  "key24": "2c735PkNHcJS2dtWbzrKxniQfs891cfzg1u3bFmfPStftzYuQeWj6ijqWFwL2idYCyUiCFp22yoLEwNLKqzZ8rzG",
  "key25": "53kwcoCWkWpobGVic1TqMrgsRgp98geS3shPbQzc7i8Xgta3JAbQwtkp4fBeGETvGL6LshfnRrC54yCYMcD4NFN2",
  "key26": "5fyrvycMEj8gYRszS1Q1vWTePmijfF5FC5xtwcqxhH36e6eXkH9BMg44oRsuKDHstwmxRNk9ZYjmGrEY6EvzBmjR",
  "key27": "27byxF4DtUMaeAeKZNSH4BfVi9GtHNRYjpgUYWZLjys5NHL8uyxkxXb2KpnmqSWLLyrXM91X4dWorN7UQ3i2QeCm",
  "key28": "2NrqgFmjQkuu13CyfEicWQjZ4PvRbHgu9QHfUnUu2EUPZth6WrCV2kwdjco1C52DTokE5nBxvrSHKkAQiudicRkj",
  "key29": "5DhHQDfcMKs2UDDBxW3cqSfH6FG6h7zdfsKJx29Z8nEKi1vE5L5NF3r8bMYpbVwd722imZpiDiWetUxziUSPHZnU",
  "key30": "4Pxx8njiEKUNGvo44MreL5xM2Z1zZCtg12PZCSeSZxYvyzJ61Wc52gocfwxKY5Koqn2nhiCcRebb6Ysuy8owLn4p",
  "key31": "2ZPn7Ai4fSLzsQNJwbDzTb1DuGyo9tFAcfQqqSt7cUSHWoKkwqJ4Qq4yPeVZhEVghaDuwJv7c4hxtjevx36bfheE",
  "key32": "2WnKUWEjN89tGRXMXty7fakFX7hYMCDG3Vk9WyBJS8ECnGJ2VyuRnc7mYHGT7VScmJ6BLB9e26mdCch4X9QSFuuo",
  "key33": "5g1af7xsuGDgJGZ7iYAwpP1aqWyFtkCZvKWLn4ENVtNpWaxqHnGykNcUqQM6qqsPKZzJ8PJ9Vd5rKnGs3B9Z6DQc",
  "key34": "5qLHoB1BcnwmJBL2iK436PY9v2nDxPDaLaDZ4WSeWAmhqiB8FZD7pwLD3gSYZWeLZZrEbgTzZ5vtgM24oeKyjRdm",
  "key35": "2iZm28xV5FWzynxZFDvQfGHbLJJ3ykmD5YdpcbyuEUNfeEVimyjS8jkCZYB6VVGBiqxEjxKuEFYKkLGjaiZwaS4W",
  "key36": "2GptuTZgxgi5uB7nT8PVFNQtfYjPcrnRqZ75Umqopr2FjE6trapdMnjmcShicsVt5a1RVX5D3hUKwtcGTQaBJP4u",
  "key37": "3XRex3geroKUXRWyaS8fnCcCeX17pqzCe6GBuiCF52nBkkZqFUWwTaxHxLTr1Kbj9hMEnNLuuWYM8YRS6RcCk2F",
  "key38": "3ToP7PcnYTCA9EHwUfeTq866cCFuepANmD8UER2j9cwT5y9Xrt3Eyytpz6g9TbMcjkhNHwYCjs921yeMRjhJ3y7P",
  "key39": "5jV6YqyVi2PMyiFJ8BitxeHngJVezVFvbzjLfGN1sPaSCkKs3TmYseb3JNiKqc8oUFRPMGGEh5wyyGw3g2f1yvzJ",
  "key40": "52GgsuCiHUZLP6X2qiAN3ui8UXSwRDSXNgzqu7Jso3woPoniQuB7F29dWpNHesCU5SUrcxf6SZ1VH8kXDs5oPDsa",
  "key41": "3rFfeTZ3oRYkYJ8nT6Xw42kpgNtDiPEVjaysg9ksYL2EEsUReUjtsEcWP34nyjFTP6A5iRZsVZuABCpFATGVueMb",
  "key42": "39y79eSkceBEnbFMMu6ZCfZ5m2XFpujgG1bQJkDrp9mhExRNrN4yg7VA5pcMCFDiH4oRNDp6P5BbXpPn2EhURijy",
  "key43": "5THWe93CU49S5Yy65gm3hs5nJQVFJM8Qg9KbgvzxzgjvrdgBibWdEt7mpuCpBkATFCT2Sj6TpsaDSoRcQf7sHPTu",
  "key44": "dUbT76ePm5a4nDtwFH8674mXGaEkHEZNCebuUNp2rZz31GgRQihxRCHnijpcaRPmgtbrkKQrcreAgks4gmAekY5",
  "key45": "2cbBktG1E1dmwmmBoqJvTkMvA3QYJEcJT1FGnGGNosAakdtDowxpPMy2uMtp45FPsinCcRHiBpc9cspJ18w2AidW",
  "key46": "3TEZjAixj5Sfg6zmbn4xHrjQiz67zD495EdpPXL2mKUa636C35K7CZQxZywn6vYcDAr4poDU928hH2hjCjfu39mL",
  "key47": "aGtcQJm55U7DkrZBrRxX3ZtsdbbtA4AqT5Xe2NA34RfoBWT3WpZs8kx112EdkyzniUEeLDgcr4YqVDs8ic7szfb",
  "key48": "2d2m2NSVnuVBXpsqkJLB1ZVJCMoKJCyhsbwRpcsxEcuwwafx7XZdYmh599uJiXixLtFPArQoRKjQfw4WUXTdjojL"
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
