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
    "3CEcEAyqSsdXSF9zE2toGzbs2cshuvnJc5HQQqW4x34dxyVD7fRtNfbb16NCQXKAVSk2vaZirLJsrd4Efz2gievQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VnZgFsuGecXspoiXJ1V9LgQBexC3TUxMWgzWUvJc5FEs4HnG6URxszJuEAokJG9m1Q2o3hny9babiN4bKRU71dm",
  "key1": "2U81u75dFtK6MsKVPGLRhoPLDxE8GcKuEAKxXHFNedCXQ2WZKP5cZpPkdLXe5tseGVpqJWP45bvGgD4wjDACCk79",
  "key2": "2EvKRqMHq7csvxzmkDer4BqvEBU54ZTiwdokUo88jwreaMZTaVcATG7aqhopvroAMAcNV46Xk6esG5yMeBGXTkEn",
  "key3": "2SMLPybgcbAXb2mCUAxoRQ7ixwYjcpd3yi8DTVcdGMuYvHu4xkrKNtfLibwuz2pd6oumibxeAKyukULBWx1VjZLx",
  "key4": "42ykDxdYEwW3pm2uXdUXqnLPMH7xqBW1kKwT1Dt2Zgwz3wYEKPuQpkqdEt4dq6kU7PB7cT7tN1m8usG77oGQXY4m",
  "key5": "5GxDXhnKs31o9mBS4TVYmgxtQRQrwnfwES6X4Ba88Cvxwe2Qyhq93qwEMy2oVdtkMVqLmGDU4G7tu27VxWAFW5un",
  "key6": "3Zv21PdJcGKhVdf3WQsqYAF9Jvc5eUFC3yazz9WRb1Bd9Pd2bjVoyWPUfzGJVadGXBCJUmRrwguzqJGzwF2fWoPH",
  "key7": "5vgJvV9mvtBtFeemquwzz9fB1syvug6uwvRD95JTpUrmnoVZif5TGADmy7kWwzrcGZL4zME6Pau9a3Hfj2LcZvRn",
  "key8": "3N3Hmg2W3h9Dm18Qvrecu3iA8aNQJWFcSZy7GuQHv1fhEyBb5KvWXLW2hFQiE7qy26viaHyF4ycxpyRKoEYHX5WX",
  "key9": "55om1DzuRbdnpJJfx98pPAobbaD8wcsgifiQYXoVkLmioLSGVSXfi9CkAn4QxReW9RvD1FGGBS6gbTwe48JHeu9D",
  "key10": "5Mynj9gYxjeBc6a9BwQqauhKAfBXCubSjmz9X4hcxi2xSWHyiSu8mBS9ApaRF8R1oqzTQSB7b3UnvEqRis8W8W1z",
  "key11": "4VqN1jeGx6c47KGYExxKr5hw8PhXthANkCjbaaUF4j836f55mMqokCXJcQ4HPp7hSw4uAJnXgrvv9TvbMwRGPF8w",
  "key12": "zmpVzLjhdWA9aq5Ctq8DDWC5pRDmx9n8Po41SHcXGCzK6uftoZ2Yv1vDLr3cLp8E9CeAYHVP6VGhV6VkvgVHjxo",
  "key13": "2chGkaQMgaq2xkGPkYs669f1fQGEuw6S2fCjvHpVnZmwjPXRB3sTps22dLdtoqRxmiBezoEd69eLVXTJEmbJZCdT",
  "key14": "2TGkV8XJEMiRq3wmmVoev3WVxDcUrdKcKnH9EJZq8e6JjJ1LW1KDcWUQU1DcbPz27G7y8AuYNp89NKdaMA1nmRS9",
  "key15": "4YLhcS2gE5hxNy31FHgJEzVff4xKkxEdR5rGfvqpS2ALcSofjm65yhtFTP9xpgNbF9grqg7CwyUijLxrhhTKc8mS",
  "key16": "2ghbejdUDTuhMDTHAR9YnSrY4pvZtc5hnH89WkMskTR4pqXPKecFtT3nUMuVQL7q3UsX52AYaCrQKDgRsacdhiDj",
  "key17": "3eFKvKXpsbGiBKeMZkP7YDa52xi717thUmfS8unh9SS7hT3zLa6WBUQiAs7FN6GEL5W44UukDQ5bRUhTHYtK9kts",
  "key18": "3DbvZVwKCP8Y9bL8WBeoHgJwVaF23qxeEvm45oamDTJMoxsRqE1a2Yyg7E2Wyw4dQL8G6kMzY1gtKwsuBGt5KYAx",
  "key19": "bQDLmxxjSiyKqwR9vvgBdfVSjZ6YA8YP5PUyKrZ1m3pdEHmpsAWxKRCLfgq8nPhiDGXDxvN6PJLHxEQCbZgsTV1",
  "key20": "2RhJsfUQXfmBxCWs64wD5rqucajtzKuk68HpJ46sipybexU3yYaBf6D88Dz55gCR8SDS1GdBr5ASsyAUQasA7Rm8",
  "key21": "JwFdpDNfDu8idf9ttj97FNTnE1uQfFwKR7673NMQk8YMPMFqrPEcXnAZyiF9yHiDL8PTb4ebhiX1SadnSH3Npuy",
  "key22": "cXHfVEAL4EdBFNyzfV3DkJ7DgCdNGL2f1F8vKTU9gZrJ88BRzGBzpdZp812b7apxaejmNAde8ixVK9DrrHUmDNh",
  "key23": "4FWZFmdELBt5WNmyr1g766sibQGf5wxfh47zYMcNd1ZU2U1fkoehr2juUt2pJgP9JkHEnLtMorM7LDwa749h2cCB",
  "key24": "5iYwfA3tTsFe9u2az8cDgFwWsFEpDt7xsRZ4cULs9Xhi7uuZ59XFk6AkE8rKquCLfihPhXVNwwrWAVhytDnXc7Fs",
  "key25": "5ATDMWo2gvzoUDdYuy7WuafgGuv2HSByMB7EZMQGNXnqZYAuc584R8KFL44PmMQTnTW2Myxqgho2bJdnn8R7FpcD",
  "key26": "35X4dyK58tEvXQdtXR5ba1mG9LxyknbiEgTkePv2RPrTchG63RNcEoqLETdvePbFDDHbgQtY6ZXmGRd5Yqco7YKb",
  "key27": "2XqA5JMyjC9Jn9V6n76gAqYoG2NwrruLNnzpkVvuo1uwRLE9LPaQSEw9dFBLspAhXrDYKvSHF4ag5ceH7ZYGcp1W",
  "key28": "3PqY7wfTkf7ydWyZqzJDHySZGAN6sshgKBG7QKP5Pg9n8niNVSYyma4CwEidB8nXmYDEmKoaa9tmRGhvgtMeEYmb"
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
