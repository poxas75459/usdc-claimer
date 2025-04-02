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
    "3Dvw7ZY6RMQBacCc4HtQdHAyEqDLGUCvdCgcKT7fzLF7o1d6AYCr8GAFfH8DGMwG5DgdWAUnZUnRmcGbACyg4rWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PAZNtaagWqCN6JRweDpuCseHFvWvKJbkwBhwctvms8zrTYrsZwCfgc1TNLnWjTg1ELYAuaWaTYo2KuPpgst9JuJ",
  "key1": "PccHLHR7FhZ5upuEXecKp3dnVqFHLeekyTa1rryEVRYYj5ccHVqvmon4kEcGkVGRMKshf9cvkMbVgvYg5kQXnY3",
  "key2": "617niQpe99qgznvP57d5b5EwBHo8BcCg5RU3HUu2jU6u8nhUEhwsg45AYrQbWhnzSpK811951edwDjWRAubkFiik",
  "key3": "4fhXsDXfgzrEKXMGHr9qNxkXvXYFe2z1NTKYWhwZNVUfTNmzMgKQ5qx8H699zXicuU4PD9jKKbX4qs5qWH1H6Gdv",
  "key4": "5PBmxxXm6XFGXD5hGwvx1JcZEihAYWDJ9iCFusk77mnXX6YKHJkVy28vhByq8rKvwjHCfHBedMY7mKVQVRo7iRE6",
  "key5": "4E8Lhw3u4N5bD2VwHQcBkAzQKqEJ3dR4skz1mT5cD2nsJ8197rG39dZAwpNtLjcAdaXhfij5nqk3xSa6YLViWduL",
  "key6": "5fLqxt7zsHe9cwJfWxpaQAYSMxT8853xQtMLTo6awVpmgqXK7jo3rzf8WW4PwXWk8yJbGk7sBZZJihb2oSDZjXMR",
  "key7": "ZmeGDGzvizgUzToTkKjnxKoSKqNNwegTrW1QLaL7gjnj61W8wdM73EA4RdNX2jSTQNn7rPUVSjeKTSCAwnRdtY1",
  "key8": "2VLZnHULouESusgb2WWNitL67J8uHYwRxjgSfyhhw27CgszgyUmJgEoQsMGVs7joKJaKyGAEqGr5L3YkZBactr3X",
  "key9": "3V8F1uT4mQUQhBhFy4nczjFvWPfHMXRPdWXWrLWwwPspfN3UFKXrgGhXY7eLAfRqvfU7XYeeAiwhcZv7h3xp6M4j",
  "key10": "5JibsKjrT9foFrh2Pomyb3ZNR3KVJHNxYabZm92b5CG6QfjMAvwZT7kuT2xYZLTzqgsEGS5HMa1md8g3SmGief77",
  "key11": "43PhsgMKaB4hQRNUvfccqx4ycG1D2UbeDHd51y1mytG2SfyatRxG2AfSxfHZi9PQAPZpFQfodQVxH4Ub8kg6FR7Y",
  "key12": "2e5EA95C9J2U4XLAxtWKmyKErwEvDPG3ibNN7aRTmCXJb9EFF5hH48LDSBPynnkFWVaJJ7U9Euo8YLvy7uLkyyQD",
  "key13": "4mLPkgZmsZUyqejSczwDLgdNUuTevrDhLpEcx7AtPXwPEXXjGfrVQKk9hyLzE8jzs3Ww6L43nw3KHkxvZGZojFK1",
  "key14": "3ipA2gm5AreNUZUW7F5DdR8ngCSiMeEpoDhiTSMSpXkipGxxMgkN4PaFyF7Piwi4mFTnoV5QstTkU32hnxivPRLN",
  "key15": "3wcbBtSujJJuDMBaDqA77ox2TTuDG5HSLGEiFs4xsdDnducGxMsxBG5ciLWCFCzzwobFosFUqWiM7jJSsdoPLhAg",
  "key16": "5HkbJ7tUT4S3WfG7cVXFJ8Z4PT3L3VE1SRg89PMbZyfxUWB6n2QkQLHBNwwFChdSaTJ4rJiyqah676KTA6RBmpH4",
  "key17": "5MPUENz1yfHNMYXbqmvE7oGbg8XgKb6zzDEYFLFfuqqgPonQ8zavJTLaABFe6bMMFCeeDMxbz77mGe97YRzZnCsF",
  "key18": "2yLXS9zih5xLeGpQMJi6T6VCepXB9brAigCePDxn7AxaN1VjJ6hsAyXoF7HeUz3L5KCvpt1GT2cF9DbwpdkYNQ8Z",
  "key19": "4WWxaaEKp24y5Pq7SZTZmgk1DhdVXeKDBcH3XQpe4m9xDoYv2PvqNcs7DhBYX7ywuhciDw4XA6nuCibZ4Es2y67P",
  "key20": "5TQUVrYDvAJdn7vGqpLWgnQdFVyN5NtHboNEoNJ7rA32fzbzmqtLB7P4bTrqfGthUAiFHUvoMc6SjLeY3kD1fPof",
  "key21": "aogDjwqGmMSczxr6PHKPFvhyDBL95L5pTMzwkKtQ9wroDu92ZdVb4pNjAXGDZ3NLte4qRfTTyzqNN1maifcmhhK",
  "key22": "wJ52wuJL3WsR42KGPPpYJxQm9P18pwwpSsqBoqcrP9cnFv6gbo2geRbjNZQsLKJtAEuGwC4C32QRBeDhDjST6gW",
  "key23": "5rAgVpqQzuynB4nWGcUsahHJNaA4Fk3r6wbRB2SpmWqePxtBE2zN41x6be37Ye7wNUjWPv8zdJetPGMJZogic7Tc",
  "key24": "36jAv9poFxWpdL7ejNqvKoj8EYsoFBZKzSXELYX95yR1JrwZKaPg5NkQptUn2rHFB1hGYADEPGtLpXRtDaevGBFw",
  "key25": "3atm6YLcm9m2wm4LZjNo4tvUvLwXJYkACAXS67pAAfrhxm4vwRpxEuk6ixCxKcRNJJFdf7ynWBxZRePhFgtPHJ25",
  "key26": "51rJCCk8mHD8YqRCjV7xCi6zHiLJRB22GMyrK5QNEsoBA2oWy33DWp6CTbjoBFMAv6dGNGYAJPn31ApHMdL2GDfM",
  "key27": "3qZLgLg9HdNBb7zz9GZwkYZMaG3KVBxP8SxuEvdNjqX2uQqwUzTTtJxSxZrkMmbjp62HQqM3fEdnYYKTYVKHyLy",
  "key28": "4sE8xGdk3DrGyJEULjhBqWKCQo8vXKEW3Xaoq4aH7BKPj3Fn6g12WeHme6Uh8ru2RsJzeKqKG2Urbrcbhty8phYG",
  "key29": "2Nx1LgVC11LTmBKF6iUC5RW7KNghxZHcx324PZAqyNsMyTdnmhg85v7ZKNYSHodE4aToTQxijkcZEeJPghEY5yhW",
  "key30": "2KjfpfBWdGnmWUnGxBQ29v5RazvviYY5wvNcPpuHrUiyRYwKRcjEce9hytLv1H5BX3o8GTtVgmNdv9Ue4fG7iLcJ",
  "key31": "2b94J9Dsos483jpaStJLzmXVfnNw9vzuX4Gab4wjHbE7FNbkc2CDp3VutTr66dnTUYtxcQFfp7oiJeER92PJcdHc",
  "key32": "4pzbtmatprBHpVz1qzyoLhcy6JZFyC9r226paE6N8G5Wn51tMfvcCTnxsyTHRszcVgSSsG9NygTpjoaLfgMDFBUf"
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
