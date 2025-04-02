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
    "VN2RnerXTbyBG3zwLi2M8vXhnaKbKVjty4yr1gqkU1FbidkVy46fBL5ALxQN6KfTiHkifMjvgsqnZVYZyYYBVAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iXR7AzbgRhfCxHyLhQv54dUbJWA6D3TKuxZYdboyxwiUjaDN9AMPCqH7cmF6Vosw7nR649sgPYCYCjKYrYSCDs7",
  "key1": "5keQYhZNhagX6ZhYd2m92v6rnuWZvczGgzkf9vdto6jSujMYfSEhvwXH6hC3nNJKcMcqnq5kGG2AEHAEVrY1ho1D",
  "key2": "4Lxsse7tr1Lwe8ZjN4isCAycfeCAgPNdQYhHRqUjCz3F4nzYSS3rHTxh8ZPLH4atuKsh7TiM94fjS7WvJSX5KVqd",
  "key3": "4W1J7S97BbyB9D7wRPLUX8XCHNHCnHGxAhPV31ExZY1obLGExqjqpRxdvewqqkqELAKDXtaPEk2fzN52EE86tTPV",
  "key4": "4LeuQKw3M6q5kctJBVcfdF1i3Ee6zrGLd9vNh9cm54Dwo2mTKWF2aBuoY5BEMNKuYmq9FAKkTkCbCSgJQyZtA6qr",
  "key5": "49Y8RLzYmGuDoysfBFvLeXrQpcJoyQV8xtsvv8E3XEtGZZ9biARthsFm7JJFemeaGrUb2YjyKZ1c9vC77ssvXVUj",
  "key6": "pmVedDepEz8WqCfQZ5UUNNbbjw324iDWsJix5azekq1fHeQVTGVR9K4JSvKrheBVN7tVHoeifA5fLQHon5tDLF2",
  "key7": "28Jc52SCEMqVfe66E7SrEG36XRAdQ67zARsksxX11SaQcmamS7YwoFHT8h4U6fvfJNi9k5GVxtVwD3R3Thyhx5A1",
  "key8": "2hZG7ttyw5YXsjXD9FW76iyReAHwoDdPWez5fUhxDZBiERCUY7XRhU3EtNCvkCxKzq59mJtYadBTgnQqKBKicMz9",
  "key9": "5DPETXLCabwoCTVeqNPcfsDzgDZc31i8nXv2AihhgKVcAWyaLMiPEQ1dre3181fEwurRmnkcKKNo7twvuKweCEQ7",
  "key10": "3xCgfASwCpVQu18Tpm4FzQvkajAcqTyDJZvhc5ayJ7GeURRRCHPdwqNiX9rYz6wxbTekPCkLbBSPGhxUgZsHBrxi",
  "key11": "5Pn1WrfsZFgAgdjTqbsSJ4sNhYQEoAKiHDeDta6AMoxGBJaGhv35jjRCRDFhbx9WWAMjggPqyVhUu1JSqykz1ZcN",
  "key12": "2zxQTD7zGDEq7RzwL6FJeu1VrueYDYjc31bNj3bX6XXg1XLAdkgJSfMMMcQHrMiDgq2HK2iNFi5S9rpkyD9KU5xc",
  "key13": "kQfHYEghp2sSUMmxTvZCbcmeoECp9FmmHRjJQyg7yPVtEXnzEAMC3iyhJzY4Amwt48WZasivWL3UnafoapduDKG",
  "key14": "2y1CUHkA8weGzZcYovAJMyyqrmwbV4hszk4imf25KaSFokzPj3MwmBBA2xuyHBd9n43DHbP1dZghormoKzArkaqU",
  "key15": "4Snot8RXwCvers5cyXssc4efEMS8YGGMF39Sjt7sAQpMoHn1fJduQnA7T64xAroNXTyEBnhyFA1xp4vLDFqf9Sox",
  "key16": "8z1YKzqMCjy3zDWCvFMQpnUN111uB26e6mSZPx55asdTQvsvV6r6FZFFo2sGtGYEZw4cYEBncn7Hp1ZPJdSZFiG",
  "key17": "3e3kiEznXVksnuwwcABYM3EPaVGfyJ3vrtvSzXyjw4wpBJ7afsqU6wZxr3u5qch7A6cZQZeQ2t6ZzttqVKTdmBDE",
  "key18": "4vWfNM6soUNYgPoVrM3u5Hh84CaXX4rzmsXEJziV4AAkEBivicZAK7CniyZqTKjauuf3HhewMbqSjdEKfF395KSd",
  "key19": "3eZwnYrYFvfL4wJCcB4Wer1jfGvW7WHmoXN5BgmnD3ZGGRd4gF4UJqVE6SJRDgUff9fggRLCZoust7mBB52kmfxe",
  "key20": "2m1hmRDT9sWKV4QyKVYUJZTo1JpWY6gkUY7Qt5mjMWDoo5v2QzXPBhg3Xot6YiCwfNYz7dPk9c2KLEGD1LNAx4Bk",
  "key21": "AUnCpVWE9kYg77ipueXBduVZ47sWfnVApy9JBBojq7JSeBCx1U7GuSeKFRbthHcugbK4su63cftVUStrZvfBxn4",
  "key22": "3eidymwSNPfMcDVFKf9ACAfNKDwtW2PGgBprfdjsR9WZCjJPck1ZwZc6W3TUgSnQpLboZYvfx7bS3CFafeexSpmG",
  "key23": "2GSpNoNZjdwysoxtW6isT4fDaE6EBKHm7DaYqNWgPFAMMgofDAGtSWKNUqdfYAWj6kpyDTG7xqoARjsVeMxDS5sL",
  "key24": "59aUi9NGfdDTZAzjWBiYKZt4rKfspNA5rcTGH4FqoZXJAdkKTA46hJuadHwVJ4dVy9sMz3aE9Un9MaL26N6hKdMC",
  "key25": "51cLcqBEHVi6MvZuZxXHH5mUUX1ipKfRqiXZYCbB312g63Qga9hgmN4PBaU3afhuuVeisLztak5D339e1zvzRdo"
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
