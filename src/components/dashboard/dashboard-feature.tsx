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
    "5xkPMo9phBQ2JXDDyassDiCRiyxqvn562kw6qVqwGkgCGotrzerHZnkG6aH6rTrqmenDDfsVJmqfQPiPg7ceAD2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2Ry14jwqCDJ16D3G7z1zath1URLjtQym4puSz4a7xcswa8DMsM3SmdVfpo465UqxWscypDVSSC4gpG3xuiWMiY",
  "key1": "4gX6FCq5FsaNy6bEXxdo4gNXqk2o9a8aaexJXraJx6JSYthtfijrnmhunSr6yDnRcCc5teBqd6WtdJGmLkVHbd9X",
  "key2": "4p5bWvsBqVr6DTuFrar2JQaMvxZBq5S3AxbBSXsfTaPgVZYtX9Dpnob68nW35mCT4z36pUfo349Etfj5bL9GPkc5",
  "key3": "n3vtisGDEEXfWDm6HHtVo2mG5iaUNPmRPsaMJ8uzsKmmB1MLWLbP7YFa43EbXQpR4z33ACXe6pU6LKax2YmYC1o",
  "key4": "3kjTDD8R1n554WSHnTLrwnbEB5TiP1bkrPZaJUxvRb2QRfnYdZX6MmBGoTQNbFzdM7xmoBLkGi2SMY7jVjr5AAgL",
  "key5": "2ekxVdkRuLBt5nrCP9FHjunKE2xi9M9t3YMNUX4H8asf7MveHitLDVsGbav34eW4ZgbCkGCJubBRxXn1zzRGyDGt",
  "key6": "2qiXTjpW7WCSsR5hzfaa5WpEQaf7wCcW2strX8yeUExdwZbhwL2uQP13MvxvuNGkxgVhNjcYdpnWzLXYmeLddKqM",
  "key7": "qF8ZTeXzrB9eBnsZaw7GD8HXu8iB8KATh8JcScDSe2ZNKuB1qtuiS1xZMP5n3RptxjdZPpPTqxibuQ4a8qdGfji",
  "key8": "3uhaPm1kKWAUHChaom8TWCauWMQRY1RoeGh5X6n36HhGKeUJDSAF3QYLw8WqtXpSuz1iyeY58GJqKweBdj3q8J4z",
  "key9": "2ohog7fbH5t1RQuqf3XdF7HtHD1uUZnnPA9Ckuszvq6NZTgA3j8MoUcz86FG9EEq52VkAw5T2sgjMpgf3Wo1RkqW",
  "key10": "5xYMiVqRhpmDD7hymV45qAyYewVrh4AEWeaPNLZzMbUCXdy3UKp5HBDTMeCqVP9bYrUUEVdPm88aTPP2TvwnLYu1",
  "key11": "49dpWHpCaa477eQFF7ZwF13A11XeHvTnm7bjvymwfNtXbP6uxpwrCSbFweL8BEGVFovdwQGnB9WmcXJwr22p5B2V",
  "key12": "ewhkKwmsPwJsjWRgyftwEmhXUCkiwTkvaNbdV4AynPFDJNhokLtzKs5r2ixN8UCyDkBHAttZZaFUPHJW1Kfa4Wd",
  "key13": "2fTfd9q1VWfCUatrnTdUcLX3CBzDVp2VPkhG5VowQiTmXrt9Nkps96yfSB8YgaczEJGB1kB7k3CAR67nt7c4r6Kh",
  "key14": "fP8gFJbPqvCbJ6jLC46MRjYKZLYbrgD7xeJfyGyBzGcZUcrpjZJzz6j23ThUvxAHGvECwg9Nixs8xLo1nUb4ecN",
  "key15": "6162VyLhyJn6nKx2jWG42ShfHYADMefnyXd9XwShc6RYSvS6PEDRVP2C3cGewVeJ6SSErTzZKpwYnUiLweVCfpT6",
  "key16": "25UzQ9efbmv43TncYxtyTiGQfSw7Wt3EbkY31THvHAxiPuCxnhhF24M31Ky4qcUTyjecsFaE4Fbk7MqXBspsMVUj",
  "key17": "xe8WTaPfvKfQbzy4KQU3sdcrr9gjATQhKUHN38gF4GP3DytrcqKP85qNyD9x6n61txbZ8UUrpH1yh2d4u6F4cEh",
  "key18": "eo7D279qccoXEXCDLKh9nmDHhygkDT7SvNLdm74E2v2nhNCDQ4UVRg2XwV43iD5gG9GPwBXnhPxamnxG5R8ZsJq",
  "key19": "41gkX1jtjARvUCRxthfAUJhfh5TxLcntUuWkF5sp9BvFEmqBN3jEMLkXGfGQY7wQt3bz5RiuFxvU2ZZHXE5FRk7R",
  "key20": "4NyEVrhVbXnffgi1MUn7Z4R7AFZMMadTDxywyaPwbQRAzqEFRjgbVVhguHmfNJwkZKKHXRwspEo7u9gmzijJncgN",
  "key21": "FndEtje4KGFKCKiZAL6qxiEavejF66kumhPxtDo4dxfrTVPTbfKsh81r3oKVsb4poSoQhrx9tJsk8SKuR6qcKeP",
  "key22": "4deLTZY9qoPZtQ1iahTBaSiWkbzjdNWXLeKswmhGN666NuvFoL3Pnz52dEpEMCXHuiBv6wsfBAxPdJ38rAMCcfrp",
  "key23": "4c8m1XphA85DqAZKRZtMsM9TNQn4gDimsB1whxZ59UVn7faYNHGD8grrHjsv1z6MocjmDTGAUu4Y8y4GAYF9LyFq",
  "key24": "qCNV9uGtprrPTTfJcMLr4fCdEkdeLMQXQSpLvrPidU9UYBka9sCxss3eqNGkGdgoiShRAiBFmpk2H8zgJU4NosK",
  "key25": "62NwbrASSdjjTDxQZxLqSDkGwrzWd4ZkvVbuAyrshNe9yTVheWZeaXB9yViDMw16MBFhxFvEKmnNY6KGzw7hyxid",
  "key26": "BRyrQ5b8HDthwwNjaYvgCyE9jrgvYfSFxwQR4j4x4UaZWTVHqAdxXDYEuHGz42oB3pZepM3Y1MJa9uU4kRa39U8",
  "key27": "M5SnPDTqx5MxzrnDMtHAdgL7GgKxmqxiWvGDoWGdJvEVSMX3oC6r8uCAa223Gpyg5hvhQ2NASAgE3HbAfCJvWzY",
  "key28": "5wNY57S6Z32PPwnfxju5nBDhafvfcrbsjUA3kqqMYmW13mVXwNZSjEcvgYtdtXQPuFjybSzQBSgWySrZgjqX9aQ6",
  "key29": "2TysWhjFETNXeAiGt8pWtbRfT2NSa2pqcbipH9XteERJRfUJSK583EViJmj17Q9XfZdo4WCQTr84pkY536ofBSCm",
  "key30": "3tpjdzuxRyuuJma9KXscai8ry31pWntQvYbREAb5peAEwqQeqGpGBBBjqQ6NWoApPdrLhG5BSv5mwYaxpivFLBE4",
  "key31": "2e8rG4XfCmYFETPfWD7PBiHKDa3dBCTCnH2xFWSu9rbFpTJbBYGuhh9pBmiVRKa2pQyszmpH1brBprpqLfPuCXdL",
  "key32": "5JmEyHCWarASvis78eUvkxH4P2puNwqf8tebcmbhvQRPYJdYvNk9Ppe19qBe4a1dNM9rC1uqpFY1hYMShQqkerLh",
  "key33": "4tG3VUnLtVZRoE5rkvC3KccG8izT768SnNN7NVn5NwRbpvEhPLXu99JTsw42JFkhYyCgWKLLRkfpyt3cfgGF2LHF",
  "key34": "DcZvctN2rfN4KJPEYZLfuLeBV2rZksHVUpQAqcgTVALzmk99a15bqF9ZfwWjwozgJUpKcHeyrK9qoAEJw38tGsx",
  "key35": "4dxqNv8tG6LesEyTZ2wTSu6C9ox7WG9NAk8BrZ9PSYWhXFm6JTnCrdXKpX5W8DLg1gAunUV7gS52EoANKVixWJyj",
  "key36": "sLBQonUXLm2EhzpEaNYbwCpjK3ybsSBg3tm3wmcdu9iVjkvRmgPb1dAvB3HFnUwyQcQfR8MZAR7YWwp6JNjUGjY",
  "key37": "35AKVqaZ3ZDaMaYwqNADPgyEsx8N3NQhYD2C6JLkj6Gjad5SJw7yRYL9vqvCoPTmugWhJyW2YRvUjRJBa8Q5T3uS",
  "key38": "ZM4M6KvmXTpjd88uKRksM6NL7jgmMWsV7WXw6FxLHnRttD2yXMwhhqFhHZCdVHLf2CikNJWrCvEzkYy4uDPAFW5",
  "key39": "5HPVuCurk1cXZ8aGnn3v3gUSPJwVzBtNVnUcbHCrJgPxhkKSkznJ8vXo6XZmQFccRsPLPz9fFsES91fEwVvfePyn",
  "key40": "5b9LZUr7ke3dUHkSN24mwV1YGYQYhxDKqFMx64r4P5H2GniCism6NgefHVcExiuZBnDHqmbbQo8kFb3Bif7GLLpP",
  "key41": "5r5ehjYAeYZQ9VPVVNoPWtXLAZaoicVdCEhXTGDdKjBr9FV3cb8Yiw6EYPHedXGhZtCWbRWqyS2C1WjLuWufcZYm",
  "key42": "4HKqNhSgrYqMNuJFyTNqBxU5GHaZip3Pk9RQ65wVEEiBtoGQh1Vn3QRFRaeJwqAL5jeayFQKDK6BwSK483VNDm4g"
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
