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
    "3weC57RmJ6iSa3rEUpSAZXTB933TyJYbBSq4XRHvrxTRrwopiTNf2v8678MZNMSiBANrA5UHbcnAX3Y2Lmg3qYiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "479P38RgxCcSzcXX6T3i3Wenf2HQ7BY9aCzonS77yquepfmwEtMaqnH8F132fRZxVfCrfbV9vmap3b7YxuyCq2dG",
  "key1": "62qbbroBXbwKp9UvPaRT1cYsotUb7wrCoGgjtkKvYzFNU1QjGBVWdM87qdraxKaZHGFPZqypNXARBWNDGiL44ujD",
  "key2": "5jK6yBJeP36vUwEavZvakfZWadXorZex4RbybUBp8KxFPKzrtFM7qw7rYgPoadBe41m8ikshpXKiHVfwXe3br6tJ",
  "key3": "3vKduak86XwX5WiC85R9oJYZ84G9odAfzwsgLy9Bkk9VzVLpgSkiyvfpnzL3uaYfhppYDMpz1NhbhiAuxnAhbnEk",
  "key4": "dZNVtfLh4DzN7pfVi35eUe2QzPnpx2CYck8XnZwBoWEXprCCqss84tc7CexktkHpH4E57rxccyvfi6yAfmZBe1e",
  "key5": "3JKF5v2n59KLL8gvQfgQvrB6VgXdTaoesXiVBb5uoMjSxVDsrVnwuFbC5DRomPN2GkiLkqDYXqg1qZ49vAn4cFNd",
  "key6": "3te22dyiEfC7diR8pvCAcjmWGErRe9pk8tcUsvFob8xXNN9nxZDVgsJ52Toj79w3eLAxrBAsUDnLAhUfozeLu7f9",
  "key7": "RTThF5rnFSNHeL7rYfFWifkQA8ekCjnvF1CRZJUgKNT5LyYrousWYKebAYgGdNCEBueYuP8YY32YP4aNuXsuZLj",
  "key8": "5dUwVH4x3RwZ4cCw4787q5VdoHEnADSeMwFeX2SShiC16Bi9pzxYzBZFAknAPeL85fs6pdtuaHfEeWcaLtoo1q7c",
  "key9": "3uqcNdHisYSUBssNGW9wdKTSKPNhRnCwzVGmTCoR3VYZGEJhSUe98xUwEmKJo8A7uGuatv818gFUH3edhnNqYkz3",
  "key10": "4zBtuaJL3fdyY6K16ez3qPS9Yf4mRC5FCbCLZ5hopTgSFGnqjJ5rYfyC5gJCsmz1xTAYhoCgTyepAjN7hqxtjHSL",
  "key11": "41oiRNq9FTwwMbbDn1ME36HtpEYgErwaHiZcSnNnz5fwMNng9is17SEZb3Kz1EuKg7YewEhE4R2499JdHCLyLSeH",
  "key12": "2Kgxrg3xxSsnWQrg5W5Xj1VeDSK69E21BJ6yUrRt79q5AWuCvebgdLedF5MBbiWMCyJ8vZ1Pm8Ke7t24shoDk2q9",
  "key13": "398BKXHGC5PEWa7w7qbaKqTz4oGDPyxs9N2BCbgo3k2Q1dNBsUkYBv97izyhWfcCs7bSz9iVRiXePYcMohcWEbpg",
  "key14": "f1ug7R8eN5ZSzw3h9rVDd2nUSaNpd9kxc1cSy1FpobfQ5pcFYpDAqYrS6EVAPomPZtZzAvYAMagAwc7Xjpw5THS",
  "key15": "5auJWDTRWskkhiG9L3BLp8JfGA5hWcG62J5VzyzaVK9ZMc4MxCt5swQWTjN1zx7tshVpYX725NStBQiCaM3doy2D",
  "key16": "237YThVj2YmdcEp5AsJP1W9wWe3i79EFTN4egLLLkKpMAnKjo6cFAVoNx1opSfMJnk7GJGkaa5YigERtrsxo3MDP",
  "key17": "4dRgHd294MdJ2ArQ6bXwjBsfxzbBEiSxUgVhwDKaT5XLHjPxangQcnSgt2rUjMbZPybcjng2SppDxzyybmwbnRpJ",
  "key18": "5z8geHSz3VN1RCZ9VY17qJaPVaZ2iwY7TAtZGtr7ZxF5B89hP2o8MAjqW8VkeEjuniBwM7ERQ6yCtjyco6qGZCV2",
  "key19": "3fyDJnkW4BMpqV3zNV9yCyh5HUtJBePQLm2ESiMfUhSpuLLpc2ULrtYSRF1VU78HYgu9AFsqpp8vTMQQRYN14FuN",
  "key20": "5pWuTRUdWsPiqZEYbYtYZPacVxAGAsu3qXu4r8C7Rbp1ZacE1k3NfQtbUBchE8pNJ22kuJqUBhtgSQdkceMnxaSC",
  "key21": "6zqCZZdmHXgFNh662ZmnKJsUEnf5aiLCcetJJrHN2eTDRPMq3SzhFxxVrS6UDDfAgPAicMTRPdyvoWWiLjgKUii",
  "key22": "zX2ejq6PA1JSK3tPRiCetwNy1bfBfPG3k1WLoHUa38GDo3AdKu5m6cnhBAcxrfZxVT8CviTjtpuJvx8ppNt416p",
  "key23": "4iPP6rqk4Rok5dGDBUtNU1fkM1Ts87jhYwtwSbM7R6qwABF7Fy7h1wks913UZe1h8dF4jaaC8W3hrx8h9T7FYbnc",
  "key24": "3id2tXXzo69wBNnBL9NFqVZk8rdQUWghagWNLWe3REaE1JTkVNyvtqW187cAfnURL2SdahL7W9TQgNkvqj5xEXeg",
  "key25": "4RqdcSnZZLxSMzmHmdWQ1YWKBEoxUjya4Y2UWMTeXvUavGwoyr2pwMw2J6YUMzTWfWfjh4e42yMNbJWmf7bLLxoL",
  "key26": "3wN94BdKsHKfvjNcm4x4Aggfqz2woTYpZqcdaYp4Csrp8iz83nbxDrBmqKCab8jhgsJz6S2eFpLUemBwPyTza9jE",
  "key27": "5L3PY7ekemxdRSdu9QKzsZXNgZFbCT5mYtvxsSmqKzaVoP8jnSoodYBdVH3aA17paJWPrqcaczQaML6tk6Shpcnb"
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
