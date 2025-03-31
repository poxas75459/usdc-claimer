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
    "jbeM5ZVMA1NLsngKdCd8rCPeWYLEHBjYgXj8s7qvoJ4M2n6WneUH8P3Pix1KB9B6d5NJW5e2tNkYADEnda1cYjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dZamutYZZd1YmPPXG12s6RgFhkwgMALd86vxNHnXnkRnk7wfvExg9pjXfsv9KdXzZg1ix6Ci5jJYYmHBHRjuSFk",
  "key1": "5soUsAGYH1HUsgHBviywJbnskAtZr2mzESppT8GnTt9CPcDFizSFqYT4byP3GM3bfYK7AQeycgki3AvBt7QaPyip",
  "key2": "52F2dzbT3PDnqxcbqK5M3pDTTkNyaCpJmSENTEV1H9nm8JFQK422RkDkkj87wgnQGkAkXrBVVtyftAzYG4KGLNMM",
  "key3": "5Hn5j42QCzLPAJgmwgVSaTcsAQqmp5ei78bygNNdNSaV9Zc9KhH828BXreWjXXKgNG7SA4tyRVGtFpMyuH1Zbwki",
  "key4": "562etPJV3BiVh3oeQPTvrfddxud6EXwRP2xGBZ7G26E7wwzAHCL2huJd9hs3fJ72CWHJ62Wr4vrAG2i37kkCHLAk",
  "key5": "2Yp9V2UFieG4cQri4pYD1ncSXU17Do3uoTDnRFexodBMNswbA9t1VjhaWPKiBLJaU6MrKJnRUGKVRvB2wX3TdJQH",
  "key6": "3U7BeU2wtqEFZWpYJVrGV7ojDMKqV6QeqKpSUnfeimyZcqkaUeAjvW35o5QTRFVMBgC6H4ubsWj7YGDptYb4B6Zb",
  "key7": "5ijEyKFTZgTdyHwkNUdiqjnpmjziwkHRm5khwg2gup17XytPRHsPHYXgb5s7cLqECNuKWXPEhywWTkeRCUytUn5E",
  "key8": "5mX1PxD6QLAgiFBv2d5JzfjeRaeKs9rVUJSeLUt9ChmwUYftao3ktMUVuSVSnj8S41cdu2bcZfD4GwkFy6QV46jL",
  "key9": "276F8kGPkbrLqH86bxc5izgc4EeA9Z5qDVzF2guLLktLMeVfEZwFYvw5G37Ty3ECdPh8zoB3sDS2H4y3scHYhG1o",
  "key10": "2TD7X4gZtddSB7sw7YD3J9GKYsK3psixKowCEDS45f4b2nNW1Q5Agr881SzgfU63BkfwDqNALvv4hogcte4zFeoa",
  "key11": "5LUHGQh4VCV6Mpc9yo9Smnz4nGtqgj752xnsx6rsseLTR272YDM5FsDYcfUVAPe4LvcA8hSbpwWu33NCnEfTfRxZ",
  "key12": "5ZaqjSbfFzkYqpDQBKWD4jM7MuKuMgJXvqXXWxfPTnjtc1k2U4WmLq436HLWnvVXTxZzFnaEM95q6hMHXDocQ5hb",
  "key13": "5Eq5toKwpkRo2J7wdZogQaAkMruvwa1jVFu8VC7VE5pCsm8eTy7PCf4b34GwrE9yZst9DzX3zWQnDnDbB7UfWvXs",
  "key14": "2zSsPp9fB1khDkdraXsd49fkER4JaucqUN8b6DNiQUZqtdzjFqhcFYUxXRy9tsJYkTCdC8tZXUTri4LoQ7rSoFfN",
  "key15": "4S9ZcKXBMuph52W9KoomSoRNBU7YW5bMTHMRjrx2Su9jNiWuwFfgA7L983XKFeVr8Qq3P7vtdanXEimK6LP2MtVb",
  "key16": "5Z365dZztHjmGTaSdwZ45ADNBAMu93HMD8o4ebbzugfH5tEVetj1vvJPCxzFWsp8eM5ANPAes7dr5PVUafG2DvB7",
  "key17": "2Vg1Cz4hNK221XaDMmVau9PX1QxDpk7hfFqH1Jf6cf8HHrC8tomViRhDF4Zjj2inXgA8Xztkd8SvLWF7dzDAPFpD",
  "key18": "3edYB9TCLnSsCFSXqj4rGgXySF1Lwda7aVURHmxpngNhjhLfyrL2NveNmo7vTbxA7AdKA3z16ZQvmJfqrXMGKM5m",
  "key19": "5JFFP5hkUBZNBWeuwfvtYniQeDWhW3p7F11jWsndHpG6DPPW8T1ZirstfxYnfynZgaJxVaGVLkWKGYmExtZL9izr",
  "key20": "25TWxnAUTYEZTqDBy9tHrqRPPcug37HCz2SZMobEasr4qPpYdU7yeH2MHWCH9djRz68gV8yyEXfKWVnUWaLe8Qqr",
  "key21": "3nnVrFstMevSatbpjh4co1K6MNk3DYtWQY45pMbVjJX73AhmKrQuo2RSqHoqSWUhxeg5bLywM6CuskbFAsn4EwWi",
  "key22": "4Svi9aYf9sTqWA6FkoA6VxtUDsyVMt1wdMLqhcQ4ZzR565CwwefzYcZC8c8Xg7UCH9A79dyYJByAZiTLzizsqoFY",
  "key23": "gXM8Fd5HfqRvQBou7VxAVcJVWPP7LF54JR2G2SS3qmE9w4UgdrxzDm3YWyMXXiQSHouUP91pVYJF34xF7aUG1pc",
  "key24": "5vPajinhot4cYFh4ApdEhCbFoUEgNpgTyp8KP4rRyEpfjCB5xQGewnct9xyVLPZQDgv3DXeQctAW6vrpSCJn64T9",
  "key25": "4PYQ7Fs8YqNWynD7iJfrYA7e5a1EkwoMkoYTZoiJX5FHPYPwsGcfUUVboaA7ynd5k6GmibCFfez5QjpVoiYdd1ec",
  "key26": "5XMBDPjQ55zB3jNsEYRxJwitTzDLT2Pt7xwm8Jb13rYAhKADBsL6YCvH413Y9acvB5GRb829jbgu5pjALegjEcCM",
  "key27": "2VF8LYf8CrsRS12RbjzJ7DvWii8TvvXg3xDxPuqSbREGfj1iuM4N1iZQim8jF51msdQQyoqjE4TffQjBvfAxJEj3",
  "key28": "5gxuehwAiaCi88CD8qQFLkUm2jYHxL7Y1EfVrFY3AGN8NPr5KZ1j6GJwM6kwiK6r78fhxRhK2ZBm5irnGvhYpiQK",
  "key29": "4rdYjkY79NZZSUA4Gvzg895zJeKtzHfunsavzHB1Hs4CAPdnUpierFS9nP4osFjjo7exAqCat3hodJEMAJf22j5p",
  "key30": "3YDMrNxkxaFxoD5dhqFq8CVfnYWNPH2cbm8WrM7RurpxYB82Q3z6pvoXS6ymYgarK1wfLC4hUdETCuYKiysjN46u",
  "key31": "5ZwnZGY8SccN3cCcDfb2ztuGhfnRgQVdk9wh3h2nZRLcKwJXST5LZTxUMWCRzyhKvwrHFek6hqUDwTs98fnVhko6"
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
