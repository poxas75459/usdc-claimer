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
    "4A9vHAwckqvxavwXMXRg4rAkbvbfcCGC33wSngCrkHos7xqVVNJPf9DynPgDXNokbj2oziZpJ3zEByK61H35otWJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gtvk8NwhYMyffyuJ8wxnMy4qVJBYVrYsbQAtu2qET7xJQ6h9Y7SaM1B15SkrExExKCYsGjc4ocdzcVwtbMeGxTD",
  "key1": "3r2qPBZ19YAswjEhz6aesJnukYjqbtpjnT4p3qjfDBMC94ic9oKo2MG7bAij4rE5hJcmdLbQSHfY1yG2J4UgB4x5",
  "key2": "4xDV9WR5QZe7AiFeieNuRUSAYXDfjuk6bdyNSMQDsv3wHpKX4xf9Z4XS618bvwYe3SLLhR6a41EFTwxVEwXgVTyb",
  "key3": "2ZtMnBgnLkdHYednAAw9AtDiacNhFQJZ8o4zpfGxyL5AoaLph7JLbQXRXciVhYdLiUKnkgk6ZHEkDTjiLUCU7tzS",
  "key4": "3kX5cUxr7xikGHtzn6sVGrP9Cmum5zwCTn8k84GwVBWkESRwpQLPaDGCGkUn6PNPY15Rh8YVys8hRYFLF6c8BLUS",
  "key5": "2dgvNWthKQfTTzxYBkwBdPH9zbgU8ZiMm8TH1PdfyqHJA7jbPAuzNWfmEVBLAw8thVpfLE2KWFgaLTfqxjHX4tJo",
  "key6": "3Q1epCR62RTRE4oGkLjNL2rjZkh9N4JUsCGi6VTSYDphj5D9fKHTs7jgedw9YAjoEEexUdouqHTyHJUBde92u4Qf",
  "key7": "5EHfLtSud2mezaaeqdhApjxpD8bPc6VzQhBLh2j6ESMDsPtnk6vYTBmywa8rXX8gYQMn8LpwpHCKdwVRgUN6AQZe",
  "key8": "4XWxfHSiZzZyguJ7xfcMYS4QSDds5yZkbkm1nZQcJpNwTvWKRUpvcf3nwFuSrPLVhxfTXc4LFNYN95w27xhAvuh",
  "key9": "4f4JnqJAXS4WhegCjojwToNrcZatGdyDv2Cq1VvwShTqsrqZDuN7Fb8qBiSoGAoWMUmbQdPWCZTMMJhz7PPfKjya",
  "key10": "3iJ2xGB9axzifYphkwzPK5HmBaXJ6PpnXWxoCthGEtWnfxXRZeHFq3Hvf4CHmJdETWFPNKuiiNyxxGooCnrGGDpQ",
  "key11": "5BAYniQUfxWkwnL2n2mqwXP5LsUy7TGSoq7W1NJXFsdVi4DXbfbY5wrRxezpDGq45G1Gp3phV6QQRXq91VJ8yoUP",
  "key12": "3NYV3Sf9FNR2ZkoW73K6pdwfK9NQcT1vb4CGTzjsnLqzY2JpsYXWBQ8JiruLYEqbDqSiH1yFRAq2k7DnGSaLUEJp",
  "key13": "3pvqUV76gVysgY9RaNzcDXWHnz4rWx5G7wmS1zVhSnNiEGZcdKJU7sesRapQ2pFjuZz6rVn9CF3npsDuNusNg2Bn",
  "key14": "WXT3pKVRZ3in6bpWDv9eN5BpZpGxvgeQFYUVRBb5EJh3DbeLHNQ3FFaVMiRY77S4uqjoreN5tPA9uTHjwdQo3aH",
  "key15": "3hsnnkWdnqoaa8Nj9rVLTBdnFMyvCW8BQN8oTqkz1dUkitQaj2FwSBd6BLeyaL1ArEiVTTfzSNAypSjq4ofRLkNu",
  "key16": "5bDLT5wEFBsgm7HZ2mfGeaHQ9uzHn29rUwoceaS13HNsdpvsWaKP1iWQrfZG6sYa3D2dNSfd6Fi6b7o6VH55Wsvd",
  "key17": "3242mHpf6q4Eruv5sHXtX3jPtbmYFX64YAV8ygthwRhnvG5WUTSfNn2HhMd4XgMU7K6GME6eJFv5bWc6hBdf3zwi",
  "key18": "5AMu8WZE2hCXZFFhiPbDorgZMreGJbHPpXXhv98ZRumVvGtoY5xNjqntUnZQgVsrmea8sUgJsJvDDcH5eKEJ5srm",
  "key19": "4CnFFWPREhwYvEwimrokpgywi2ABzPXJoCQDyTXN2zhdxD1aL4Z7hTB4cES439b2SoeAk3R97vXBjULVVNxLftLo",
  "key20": "3iGNHoybjh2gVhDCFZLr71kRJypLcv6pp4P65phMtE5aj5XRgPps9ZLnFivBAQsfMhHwz9vK6vrk1GZ6jtkbKyQW",
  "key21": "v2bjJUudcg9z89c94tpCkU1KMm5CgsiGc2yQsaDQGHJN9t7qheG6xVGPYveyoDPbtqzFnKvBoXtAtT8frL7fxxh",
  "key22": "29S49a1JmTeNVbkZnhPQAsoEnbjW6HF54kyGGXdfvvjsXziXQgQSRFsoay4LGkegCWL2ap7hyMcJnoudVKj5UyuY",
  "key23": "2LPhwfkMWR7YDpRgRB8LG29kmWcJkufkaULM8iH7trTm8dDsQefSZUozArcBagvEjoURo1MtZeguXKxpimCVy4RC",
  "key24": "4HsYRPsCBEVGygjwdbwLaHjcXzYuUNMi29mehe5FGdcham78zDnjpj1mChLcEZwKq6nhmPYUjbLJMffej1iGCvSG",
  "key25": "5nUAdqE855pY1fkSYq84ykhJnSW7PvkG4AabUCt2QTQUu8eqy1nym3YpwtuuLgPr8hNpDn9YcVVehT74291Ht5YW",
  "key26": "hcC82x9Esv64A9JWvA23WYNbaJEkcKAfcn2VryPF983Mw36Kj93sV69RHB8wF3o5urwG4oFmLzvgUbP3Eq2wB9Y"
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
