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
    "546W8DMMq7bfpsrRGBPHTQExFg4QzCSfg3nwzKrGtHG1GoapWDpoKXP32PGEFXoReMRWbEVNUbiH6cpU2kEGg3jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WQuD47Emvq22NBGBf3nwLEteooh6fhfrptH3iyRJuNQkiWUPxhvXwr2scuwRqACPvMaWDDfwVZh3U2G5WMWkGWo",
  "key1": "o84F8eXQPnpBtfRFs9uH1wCKFZQGU1tRFxtbVNoRutPUBBWcskyT65A1XHbCkycaXyEG4pYZTuBp4vyQfvMBASJ",
  "key2": "3YBh4ndWiFgodWJFf4U8eifmRS7gwGLnsNbGTGFcUMP2PpC7G2ZYM7dyvEsQ7bk2ynZvPSzkrzE6mWzWxuayfbpZ",
  "key3": "4NhXxN7KnGEHdEQKA1Sj1c1CH7yxUzQwRy6pPRgFQnU4F1ZJ6EbBhWktid9STtVdrskGjBdtdL9UMDTYKSqDqYbV",
  "key4": "2fBToCZsgbeRk5NTm6UDzNTaArUGEVCVXJSQEMdWyKUHcGf8uRjocvtvJpzX4drts7UHaYxGfJ9zVBYuHzyiRapD",
  "key5": "47npnEu5mJ9Bk55BbXrMYcWbFEZwGN1ZianLs8RtZcqh8T8K2wdudUTXEucjFwGhdecKa8KDnsSkCSye4n4jUCb7",
  "key6": "rJ4Y4spRz5i3v4aaWAYhgTwoGZc5BX79zWva2Wcf39bfWmxxYN8hMPj2y1B9vtHqAcvzcWtEbypiGtZ5EeyQq5L",
  "key7": "4yBN8pf9LVAb1SxmdmaX7Luo9SH8Zuza1LRS9qbZFiaNGaWaSHn13FGTz2P3zhKsHv1EyDYd9hyJFXaj31bWZD2o",
  "key8": "5qXcoLNsCvBJup5TCZZn7e852ShdeLUzJrF3aeeiSmwADJhFyGypb3wHmg2Lts5CzL3i9HnjuBfcnDsUkoYuqAh4",
  "key9": "4zKMi2q6YcfTTkFgFucJd9EycsjFceuVfWLGuSbe5M4zBYh9SStNstDaCXUouQntVn6tVeurRKzFAvLhzQ5sVSep",
  "key10": "3CZ1AxHH8wQeJ7TMC11ia2PZjMVA62kuvmSvWmTFGBLc4PkqcvnRD1jyzfXJLtk16b4Dwtq4uibMxNfWvqRRd21W",
  "key11": "5ACRo5Z25okVB1qWFH1ezkTNRorexUyuXZ9HoBd7YyfWQ5fNbG6LzisLTQDs5hy6rYXFV4i6A5m7xCr2gGuYvM2P",
  "key12": "44GZG71n1qtTV5t1f1KnExUa2EG8qvdKBh7BmZMNwBZDEA2Wcydz552kgAMNUkF2pAUJ7dWuRfLxAGyexJKW6Knr",
  "key13": "z7JHREMvM6Uc9CFEvY1guKGsRtk9sQ4t5nmmesQ5WJbfJ7WfTwRdft2CSaRhawdRkkESUVahGdwnD2wpHK4ciEg",
  "key14": "vEh2xHfh36BbSVAkATUNFjkTHt2jL3RnoCxcjFhopH7bS7XtzF8joqhgiJw8AaryWqUpmVDv4hK8hiXcoSkPM73",
  "key15": "4rdTGQezyFGJ983L8MAoXuyRD7ayj6EAS9J3mA2bmh4RghutwbhV4aMTda2baN9rW7jrpropLsunwfuu3XxLkqcU",
  "key16": "4MFqZkSugju5iuc9fbrf4ksccR9ofXJhYAXXgb32g4nBwBQap2abALhyx3JGtRW6H8U7Tg3CeAjnEEJDsfPe3RT3",
  "key17": "5Z6LhSQUe4jXbGMi8KkD6NeiseCpoBzEq6Y6xNSsMEwnSKL9DK7YuUHXU5X3PbrMSoHk5cPCCpvkDLV9LZZnUbh3",
  "key18": "47HCMvZknMo8bY49r4NX33s14JfgmNc4FriDf9sTMFwtCuDre3d4aJMq8wfanVheMvhAyRxNiggZFz8REeBmTHZD",
  "key19": "3a7cQJxYN3rFTy5pGDXqRwUH3DJWwtDCZ9vKqC79CCdHBja4cVXud27Ejsmg3oLfxqhEzeKEfWRYpL2WXCVpMahj",
  "key20": "4TnzFmy2vggCj2z56LwE2FwGzNkTP5FsRSsv2fwWAt6NDGBeeGxG5p4tgHVjMzU8QZYGayu6qBRrHkuwi5twzMwT",
  "key21": "5dStXxHy86wPfYYxnrRYFTmUQBTr5JZ2SxAS4cYJpbpyhqFoD5iUuotuQm2Yhg8hrY1Y9wAwUGWP6ivaTYmgzJs4",
  "key22": "3pe2o98bLcjtUvefhnShUVzjhHBpqEHXzd2cYnNHVTGh8SmReGVM6acPYm2b5aGTjWzTzC5ZFkTqEWhfQP7aPUQv",
  "key23": "4EwXz8Zt7EHXuXBQ4aXQ29hKHJJWGQLcVVKoqbrAuDoqk8w7U3ToJJVPGGmPeCMb9BUyhp4ohZvoe5Dod234YKQy",
  "key24": "2C1ENkYDY5yThwzqvfWysBttS97854dU63dZeLkHMp9n5VXUPtBdT9mjTR4VCADKC5kcYg86L7xphyJfhZr1BruE",
  "key25": "5FMbbCPwZbqazPHhdSb5Z1tbU7aTXXXcizSfRx1hc6EEJc54AiBa5nAHYM9SvACh5WNkE5kF8p6mfmk9bXPeUNVZ",
  "key26": "4YjaVTQtaJWvMozYAPNcJ6BZdcMmzgZmsWA9J7hq9hkVuqYMr6Vkq3crwfHEtVZfry9hWNCNHqLxoBdvLvSxCciL",
  "key27": "4H4UnqDa4UViv3m8qj8E8ZKrzWfja4JrfuQY8KdokgQZD7idHpLyfazE8SeFWKUNj7ztVbyDgb3ujVjQQUMMyh4x",
  "key28": "3PraeS8pt1NJkvuwWCwE8zaBqa3vKyCY2JbivaZZSy8YV32Gkf9aA9YWG4omJBQU6Uw7aECxBEFAkVhwUNubidwY",
  "key29": "2mA36w87yeCiKec6kwbKuCiVYAWobNKwv9yNkfqqHBLDtBj4bC33msLGqL42svzLJaFEC8QKhTyif77aPYj5czjt",
  "key30": "2dynp57zbSqa34mNFGegM1dcihmepwLJpaDnQ5gtC61BivqWBytMXaMaPsHRws1Dn4jb21sLQEYzThXhZZ9HYhYo",
  "key31": "5uRnyGfw6t4h85AUtfvmNnRCQgVwNFBh9DSjzGnoyK7BFFyVpY413E5ACN3GKMQt9D6AVMmhsn2oVAwTHcnSxM4e",
  "key32": "3DgZ3tGdYT3bGd4MNFmCdFxna8MmKhoTauyUxz3BiagDTZrpLdZdoc6nTSS6aWT6J5oShHxxoryfBCBjzj5696rn",
  "key33": "1G5xZMGaD6F9feWaMKcVKUQfvjayt4VFNNo9g3EL5SdXcg7DjvCcA48UWifhojj28bfwSbPmFUndzxGCqWa9ngV",
  "key34": "5KVuPpXTZ4AucxnjSM6n32XAXRa2PPPGLfvLHA67SyS7R5i8adWyJFmQRQ2FqFytqwQPFp1J4F2vgX9mPMeXzkpq",
  "key35": "SDP1SWTVnek3fGrGuW4C3xyGRfi2TBa6JWcs32TEiH9JfbVhbP6fXrxXGLyFKeAXSfvGGu3S5rADdVK8Y8Ysog3",
  "key36": "oVMhYzfjnAxEYAoMTAnBpMmZVToyNh9PENEzYPrCgsvpCVeu5eJPGbuLFiLrG2P5AmipEHxxyq1DTbfmcycH8Z5",
  "key37": "5h99gguMtfQZzjckmtaAPQTxwKwNHVde2J3hvSjufpfqx5h2Pr5v6Lwv6rX2dojGvyihJkMSkMVqUgYm6b9YuZb5",
  "key38": "3kEkz45vYkeByjP7LMHaaWt6fzareNZnrTyMtJHNyo6rnVzpkj9EAD2hjKCvi1fDSa2GC7F4QdT65A6358SWp8Mf",
  "key39": "4ShJhfWdTNcqgsQtg7bogEX9fBw9rFD9dkEPTPBR35iK2FWrXENVADmjxCsWQ7ubDrZxHZp841fam92xbx9yNSFU",
  "key40": "2e4xzpkwVduPN9FyiHmrB1UYXoqFhSyVdLwgwhp14kwyiQvPa1XGa9r7JLWwe9D982KeHzg9NbTWceU48bz41U67",
  "key41": "5gPfnyd1XjdVmC5oWGQykVQTgpi89LnYMV8dGbs9GrFZs8cCvWB9SMLGYj1koqn4tCF6ocCRLV2h67tkasT9uakm",
  "key42": "5rct2X8QSgRkAEb5pj6WS2M1CkELybJmFUuar4KQvNRby5nwezMz1vfShMPr323KshQRYvaBCaTADc7rSWxWLTcB",
  "key43": "3VMRVfxYD8EcKsxYEh4RyFt2JcZ35FiFhQMs3KdYSBVyDwh1JCtiPUgaUM6DtawgMmdiLghTeBAiwMJUxmjtxaHV",
  "key44": "HP9wKSG2okE2coRW6ucajVdvKpsZAsJL3nVAhGwqUXiDujn4TVZm1L9V1EWQdX9aQaYHtvWAr34DWcZ2gj25NUt",
  "key45": "5hPZUaRkyLbnhqZHsS5MFDubvw6pLArY6KxvFqWYGLHnF3LwAf2SSviJXwKiMshXb5S1QRMcK5SSt4pxScAGgSt3",
  "key46": "2V4DYa9FErKwpGrKeuURfFSYrt3kJdqBjeaMuvR3XtJYTh9P8uZ9dEabMbTqKAnKwRaesDnQUdTRhaABU2TNbcmB"
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
