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
    "2ezvUhZ5XYX7cbngkrN7xjw8GZYkeDxVwG1TmrLDjMQRZFFXFfA9Hra8MbakGwuE9WoK7YHsWviiyEkWt8BkXnCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpiA3h6USLAJUEMkcEmUETYRmC46FWfsyAVLMVB1q9LnezocjHoi3nCvNYMRnVvcTuL3VUhFFEARQqjLunU1edy",
  "key1": "BCMgShqBoUdFdKRXNc9JXL12AnqLqdj5EAenFoVKGTs77W6KUmaw2xzawvqLHF8erYyVPg2J66ngr9AXvxEPycq",
  "key2": "2KoAjErEo4MQvnuf6r77FaHUwdzkHUYwYnHHJV4FLFymuRakgvPhTbRe2VQt4yHmU6YJyicdfMNwm84evdd2NGtS",
  "key3": "5yyvbimTdBjdnG5VY6pP9Q54rqw61KeU2V1r9yBm4Z7muHZujxEeRKZvDiVtCzrJUAfRuU8UKRAz5NkFR93c1M8X",
  "key4": "Dy2bG25XJgyPQjLMVBhULPVePZ7fro4XCKW22yn5GZMcD3D1C4sq1yB2CPfa2t67t14qZdT156kUYmXy4jEZUrg",
  "key5": "84maMJ26GBTWjivVoDoFz5AsCLWj73iErShxynsLHnRP15hQ6mVzfDqq5NEySVtiPYSiwHe9zgRiRJZpX2jhLZk",
  "key6": "3gauVcXe7PwaGEL7wguNjGLkr89ywiDN6r7msnsVXaLECiL88x6PSBZdHUHNPKYtD2nVNkYRwhUSNPpnBmjaRoXm",
  "key7": "4qtNij8Q34eyRQPUYEZ4LSRu1sXKP8iU8GPwhD5JwnBZRMrLG8ChYEMmWRtGKRWUUt8mtbhY6N8Tw1uSfFHv2f4X",
  "key8": "2KW9QdKd2TLMLMDyNxdWtC5kRfvPWTJZn7gUdHAVP21AbX9JAXPRPG9KYDXHby8SdrusNqv7oVHmhK7QPfa4dVYh",
  "key9": "3276GaaPgrWJnUUeq3jQuXZjsYuGJ4zTxuWZwHY5EKDBGi8YjxBsJRbH6vmYsNf3sp4Uqy1WSKjZmSDGJSEvs79L",
  "key10": "2fCgVfrr3hJuU5orBBxj11AkCYMvdPQh6vrPZFn2u8FSfF7y4NztoY5q979HgVE9qoLttfuNcZNuioCxKFfs96QH",
  "key11": "37RT6U2n6P9yj2bKVb3hBwKQF1dnYMyqFfXG61eQAp6aNiNULDaFxdtqq5RiwysxRUkgorhgFJRFdWxbT6sNEozW",
  "key12": "2epzp1yp3dDZr9S8CgD4nvt88iQBNPxkBTamoT14ApWUaGtVPuUAHH65TbJVSptkW1CBi4VkooXncKZjRicVBXxd",
  "key13": "2YwBghxL5VJxfrTRE8sEY6NGeK8YUGXZfQgJHTR3DPMNdT3YqZ56eTxNowHpLP2shXFLaoqmP754t15aMeBSPJPg",
  "key14": "59nHFDGPBRSeSrVo1xMx3J5SkoFmuHqoADG9P11gBKRtUpHgSA8eTC1qb7wLERpuXXRsLbzh42iGdqDptzAmouVp",
  "key15": "3mb8SLzCYAjryLKtNtZ7nBpCbKoKxzWxWR8dTHdJrbwfZuZDDHEf9LMAcWmckf6NHxgH3JtAj5wo2m4CTb6vvwSk",
  "key16": "3Fr99gB6LetJX43RkLFmTxsXvxR71aJGPQzCEga7cErtbz6Bqa6aeGhtn6GuwkE4MR5Fr4eUBca6iRCCVei9WwNL",
  "key17": "2EXs5r1KFine8ArXmivURwtRHUmpEymjPGPrRXZSdt5PpcW4TuNDEtn11iKoqv1tHKsPEVb3NdnU4DPUoSzrwpav",
  "key18": "4ePmsvRurn62Zyc6yUqDAwBpioGpdDiFPxVBgks4Ypy9fUsmQkstMjYxe51dQLfYVwVNTPTaZwpKb7ex42AJzpno",
  "key19": "4zoAzaRGaoXdu5PBJRyXfmsVA1a1s8Pc76c7eh4Fx3UA9ybcs4CpwN91sLb2P6Di3pwughPHtxhsvqgMyyjxHFWm",
  "key20": "3EKG8SB5QEex3NX2xNKgKtPazwSDUBGMBwi9S71ikNuAx9Tx5Q4obWUMUz4PdzZV2wpVwAxK6CwfypzNDGnv6Y9V",
  "key21": "4Zz7GTNmj4vZiikAR7yFU8wGLyeipgZLjo5TB5QkZHAPhi3tqW5phW6LRc1EzMMHg9sKo7GTteSNwvprRyoXQkoc",
  "key22": "2RhXKjHNTqBzBHYLSjqLWEVJUQYdJSjvKTiPnsm7ViGc2bM4AreFJ1mdgHTjwZxWmY516mLu7FopeQ1UJnuVfhbD",
  "key23": "2Ec5hhNyA9cqnE6AyBZAvt3hXwM3CQwUQUGMAsmDt1ka3Ntx1yYzcEj38FkmGbb3HSrXYNkzEKJqgU414WamGrtu",
  "key24": "xkwuqidwsEREwoYvpDBwfogsUM5dsZ6A1By3VQC6wwyY87Wm31yFqQ7Ng7EQkaXMxyEqR1g3wQYKGWGb7atNg13",
  "key25": "2fVgrmnDB53DdeFPL5isjJcme1dBQL59DhPxwRB1hHrZsxFeuyTf138JZSSSGYe3yWLNGMcPfxRFae8ehyE6Gndq",
  "key26": "2XHYiW5W7Gg2y1kVFKyAZnJTJbm7jkYmtaXpi8Z8ZQeg5kavPYgKQWKVH5jFP4YBbPgD4YAtdtrbNwRg1e11igiG",
  "key27": "2WNN2qqyrD6Jh8A2Lo8jeH5YSfY2SHycKQA8MoaptifFaLnVaif6yLTf6zkAfgqq14aqMgeeYtYjLTY1y6a9hu9a",
  "key28": "9rdFgDALgVkTBNfTFpWD2cTQtsyPHQZxDZryaQVtQumqc2SbwHu47yhSgfnv6wKs5NJv4zpYBradNg3Wyyp8Lks",
  "key29": "3NYfM3incRjgPh3qvKgNi1dNw7otQi5WhnoQ524iKeebpbER55g16V7iiK2ZWZqu98LK4dsjYugQXg7dKdDFgrhC",
  "key30": "GLfPA2vemwRLzQxVYJr9k3U6hCR3wyxgWQ29r63X2xeJu2d5ZjKL96DqarSLuRrLY9WvEDWvMS8BbTvU3J5ovmd"
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
