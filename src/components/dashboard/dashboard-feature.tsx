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
    "3a9NtaDrUPGwgoAjLntMAAqCML9Fn6Z23n5JouF657gH82XgCY8VpBcBXPVW8TJ8uDW6PUw4bRkSmd3vB54CBbLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXfufemsLPKhhCGksKXiEQkdpRPX1hhAj8ZzAUuwR6LkUG44r2UzPqfJbPfkYueScJ2hQbWox2bkHUkTQj2M5Jd",
  "key1": "51qo6GguyGsrpC9KFerUACpwXBCym5mbeL1u1hdbYVwNjMU5GsZo6qdVYXnDdeetGAMiFmJU9cSuhTFRinfNgdVc",
  "key2": "3ZMt6ubWs9pD7gJE4p39ysztc2BPpktZYbhZdedxE3j2qons7FYV9x7Z2qh4XdZwityc224rgsdkxGAZFj7cxpS3",
  "key3": "Ss6CKLVKPNhi6RJXqULtR9NG7Lfzbnw1K4uj9ur9GWyKqcz8Sco12FtrdWyosedKE6X7R5Zv7GKfxbMC41N5XiF",
  "key4": "3SzoSwhgYB4La6J2NQfHCBNMZ4HdiTJGv6cnFqKQB7A8pTMEzePmgRkXwrHUXTZexgTN3tqMNk9de6MC4Hneiv13",
  "key5": "3Hz2ucWgUgnusoBy3cbLpSJ7uLM1JKDgewMQfcHH75zxHBgcUWNzyFj8mq3aQT7C3PQkLUirgxNyvQRbtKX4didr",
  "key6": "2ZusEt3HQTRAvaxDoa3t2nSc4CDPqWJSaRgnHxKfDZ33d4xX5bR4bLaga53arXbEphP64sxCiGUv9jqhBwncFhsW",
  "key7": "2D2gvKUazwkis7jBsKaLe5BYdEcJA1eunNTdsHZdxskYkkgtBMrcaqXURohm9yqsZCpbP2mxdvLyAxTdbPED9Adm",
  "key8": "23kqeSfRTe1xYmorpt3uLLXGJs3ChxRd6avXyfySnCuFCGQapwDw7Q8NyjZY1HqYR3YffNwrLd8k1XDeSqksYDJe",
  "key9": "3njARfbppxv3g3v9YXzhGJBKgWGwWD12a7WEBpU3WUWXiqaUoSS5YPuT3cBatqSJqSVNZXLRcc7xi5M1hE2xtAWG",
  "key10": "4BrGBiZ8PTiiA8UPqFfzqaHaa8gsHKbjtNYtXrGkMPABoBXMFtbBfi5q6PUSA4Ri1SrTUUGYwWFYeejp4Uiu5Nru",
  "key11": "3mBUQtzdW3z7tQZNzJNtG2TSjFbQ7VV6JoXTR5jXMwvuNCbRg8gkRZT8qsfyGE3mFod3NUyChyVqECRxRwnaSvBa",
  "key12": "56iyggStCrhuSLVgsg3Rm8At6e1iu6ic58zig8SYthXXvCH3D7g9jhTFki6HPXaWVN4mQ3rigsF9w61Jdoc5zgRj",
  "key13": "33i6C1Eeu3eGzwxin9GxpPXdBnW4RSzc66a7kw3B4HGkCvBjhExJnLCBrTLPykptXCiYeCyb8wbXMg9UfLtugXNr",
  "key14": "2fwxf31qCkWo8VMV1rBHr74RgZjyhFYfHXbiZapUcjjS2PNxwwhTAEXQbHhNXBat7tJHRB23nGrNLK8sdsCWo72m",
  "key15": "2irFxMZ1Qk8ikKfAgKeFoFu9xRXmXkf6pe662pmCdW6Fz5P8qvp1Wobq1oKeUoz5cbxMmZ3D6HXnv77gBFUtMS6V",
  "key16": "4a34iiH8iZrpb2MQio8XgVeofdBfCu15FcYpyRXMmWmNeEeNBUGhgRKFZPJazhTsHJmybqHS3aMXKtaM2fNq6iK6",
  "key17": "4LziCKEfDbnGaFXG6VWyGUcC2WDcLsvDJELNwpC4uvo7AMQCeBHUDZ4FW8cRaEpUwc6j5hryWvoLiSh5d7MUwHz4",
  "key18": "5uoREPX8KiKneY8CLmvkLmdjD1Jh72qxbh6M6H9M5K9EPfEadFzjb44vrHujr4CyzgGp2C6QJtPyuj4hCvUF1JdC",
  "key19": "5jER8jEXtYj4RyPTn9Mf7CJpWbseN8YCr2qHm5xhCogfAdmdNJzwgUEFDAifj6jNtTXJov857UfBf6V263v3TbZX",
  "key20": "2zHDQUULPmxdabKrBgFFhM5gLRCZrbigaTxxRcF993H3keBF2V7NbrWQDEEHoPA9rhUgYQ891ToJJRuC6M3gYLkP",
  "key21": "3Q14aDefvDR8G4JiycKaN8pCptj1xj5f69sPNhAj8nmtqkFhE62vDMcTejBnazcNtbxrnkScFfdJw5qkL3aXm5KJ",
  "key22": "ia74JM9RmDRqfj34ftJJtATpcYjHzReAhrt5osfUpHSSDQsRMcCecr93WPEfHZXvEGZPnYMdUgsq5mZTbb37xvs",
  "key23": "ayQb541nKazPHN3wkGryBt8atgv4EKckuZDMJa1HZJ8NKViHv7AFTaZhvpGfa9KX4Euw9AbapU9PteYhrpEWCeP",
  "key24": "2f6oujbZCK4MhKcytyzJE9YkwQuGKrgeVYNYjNh3QMFApV3KxGSEafEykbWD6qhvcqKS9UwK6SLa2HobtjCMWiav",
  "key25": "3AQjrbQVQ2QnP38fpGpuStuh31vX7QwkLrRp4CQ6e6wDwfvLvmKuB5kE61JwLMzsrTwurqZqGXD6kkx3UdpYAjNE",
  "key26": "5Zco9ChFnR4AGtZMgn891EdCrjX7VRuo94R4jqu9yTQH6A5deMDs9JYhNJW4ggbYusT5RH9enPw7SreZUWdSM6NA"
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
