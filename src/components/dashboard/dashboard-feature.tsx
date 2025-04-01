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
    "2exi8t5jFbdBkCfU21GYwtJoBJcZdwVd4D5ULH26iJv9qMBcnaK6Jf64zAgPzmPmKuCdTNeHhdGBpaybSoPC1czV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgyGV9RqWGNGarhNExpyfJ8JyBRB7uEpN5Gwf6CoDT4hVsfL7vaNQ1EX36XsAStQSM4Wr81xXsmv2CgExLeCrqR",
  "key1": "5ybemDeGBTEbsH4Qj192VPgmzQxRgx4d4gn9HBZVtxV3k6VMjqVPHwDAPGs17bWPBxTxnsVs4CJySUVcX6WaMQ3h",
  "key2": "3VsLanKxWM49Tr1BqV4n4ZaGCWB8SgSVe5FYok8dPbdTWAXp3Q6WgfP7F58FaQ5LKW4KwEpzkkAdduUmX54vqvPs",
  "key3": "2pYmXmjxTUCrrLWwJwHTivECBbnFdWz9MinYCNeEfayKdWF2qKiLUTTWgxdcZdPW1MabgxHT186vyjbCyCtz3asC",
  "key4": "aU6yAGLFZGfEdSMSQyeySPNpsxWwDz8BP6YtME2WYdZcyLeoJnG7nEm6nsUeeyx9rm22ea5AEJPXroSdEphPb3f",
  "key5": "u1DntCpgKLbPfskK4eRJLKp36oBECetW4JMyypF9LrY2r644gFWvzcuoBoVUx9eaDNwDYksoLFHHtyqG1fUJKMy",
  "key6": "5HA2zMMoHEhPctQ5tsN12aFnL82hDAVepxeZUvy3tHXd1m7mmLJW6UAJvizbBTQ7SEyqAtG6CGfAnfbqokS4arA6",
  "key7": "c69arfrKUszKfDibQ84wKScX5jp7wNCMU298Q53qrhkbLsxUopvjSJhUvpGn9zP5WsQXzVQZ4Vbu8aVKte8pNL8",
  "key8": "3gR2Ao8H9jD38r62RVm7e2qfW8qJNKiHEkTKUiMGGpYhXTrekjJ4Fpw4UkxRNqovaZqcm8Nsq4sQvXuYSEJAXvoJ",
  "key9": "5jB9jPEZpnP2GUVcJSwKiGgtfwJLRPt6we3tws34kA6pZuSHbLGynQhtm1ntCJ5Fh4xT8Hian5tqGRspSacBqCBi",
  "key10": "TzpgFf9N186SzzsBJurnj8JeJb3LZjaKnkyxHCiW1DyJ8mG4ivi8wNMLHXGyMHmpi23yx7geRLGRfY4GEusbMmB",
  "key11": "5EQtFEUnRATNC9sYg91gE4PY41FEfhGL4SLn4qH1R4RRej9TDhCN74VNqtSuxHMzZgbyV5MNoRAooufdHpxk5ymm",
  "key12": "2hMjMK1TSXZUhxYaCgns4a9tAvt4w2HsD2mtiWwNi7m4xKq5VBbrLomFYAJhvSHc7YXBB5JEYD4yJmxPJVNjnXjN",
  "key13": "62FxdTmkADEtHwQ8oiBT41s8h2vKXw2pUuBSQhoaQCTnZQjYv1Mf1dyXBkvbCUfUGbGYz3PfZx1WF5s9GNhTPBiJ",
  "key14": "3baBqPf6efYPEPyjmECFFZHtdgkuKEhnS17V3pQLnhqBKSbRuF1FF5pf94tcwpSomeVY8Ls9FYZVwaanuJnaVQGm",
  "key15": "5DV5G6okyQZSnd6EV8dKjwQN3dZB5HevX9Va2ArwLugqY9yJ628TgukxGXq4CDyJCeN1MGpnEQQXvzjXVdAWgunR",
  "key16": "2LShryiHqbD8izEcFDWjHrAuvBenNdFEuYutSVgf1cyVuXTS3NuuczcLTL6JVUxAxxYB3oCoQrXUhd1aGPCN6uci",
  "key17": "3w7TmLdG3GTxaSCSc2JcGT3FZ4tFuCF2SByU1fEkmS6xbu1rTRVTYs73QB6WouKFrmhGVPY3GywgxkGJPUTKyqaj",
  "key18": "4RAfG1bCwmJ7QmZCor41wWjxdW3bfaxDCANCfKLHvQjE8za2E1M9YL2U6Hwt7dQZKrVsQR9m7QjZhPAsib4Y467m",
  "key19": "38BQNF9FKHgNY93xRCqh364mphje2yE6EmZ37DC4nq5zoD9CUd2BuoQ7QSqpRhZD6nYUL2VVFXmJ8JnUDBRMYNvp",
  "key20": "2SECDX3fdL2fMFPv2zc87GzuHSdrAzGYaCoF8TwPEWKTyxU7WBAuvjdsCEKrwqSwM1gU8fAZPo9qTmyvGd4ETsNF",
  "key21": "4qn392RgSFXpBdP4jS1zB2zXTbMW7XmemgbAJ3kyz2K2Ag81LQgvuFYRTJsFzNAn9RpjKebTbLjArAtQoJtw2SFn",
  "key22": "SEfi1dnMitjQuQUguAXoQD3EyneMHQr4qrqA6ogJRv9rjJBuabx8RaiYGgMSje9ijcfanue3qLDDHN1ssPiatF6",
  "key23": "55JRp6gk2hU74VHfCJJxzgJPWpGwzp7SVs4D9r5pUVUHD6E2TH7jVK1yErc3zffjRuUegs7PKF9TWLZu1NgaYPaQ",
  "key24": "58169ZffUFpmNz2hmLv4tNq4276LF1XhEei7dk99X8ddtNWQbvhKtYmyrm4fH6MdWjvN8wsQ5ocCKvZ5dx1SmaK1",
  "key25": "2AMLztMutvSKKwCt5ukTGJ4ouhabFa9krift3TNGmJmoPgNiDpMPpCi8wQSEGGStBMMFgeB8EEzEuw49cqQmSdCe",
  "key26": "24X2duqo8ZxJgZSLYpDMwn4FL23PzemnEjE6SLZwtLNkAHydF7AYLgGuU6L98PrBh9LScgpin3NakoFjfnF66PTe",
  "key27": "55jrbVX9Ls8jPXiEm3K2HiFPEQabLZwvxivw2HpgS37kSci9fVmp3Qf6nQpF2dYtZhguSNP59QT2QRNZ8XDd3sK8",
  "key28": "4jnX2NAX2YaCGSYoJhK9EsmUNWvnWBCNZQqs2Zknfw5Acqmn7VJc9G16M8LttBcrFggRrjRUqpLHwrP5bNyivHhX",
  "key29": "2k7X9HzxCy2R168EE2gQpcQ1xriPD3D8qTpEX55FjJgbG6MjBRhkrn1BTxLfzxhQf2r52FHKiL44cok168Akt8BM",
  "key30": "2niSWUWECsS15PhVY9yHPkehqmMKeUYdjRPZK8cA2EqpgmHnJvFpvVX6AwZ3x96qXqLB5riMcKugeRZznMgCsLMU"
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
