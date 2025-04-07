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
    "5sDt3DxifZR1uSoGhjx9KHoW79QH5fiqKgtewncb9s2tuvcLoAGUspvGR1MjgYSEmSJRrg87BByVoSMujxydT3Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XNRooPTxac8ERM3hFysCMShPdWUmsJqi8toGvxmce16heq21gVB6uvZ1oRq9NwyET4wVF9o9PeJa2c2XpV4pHCy",
  "key1": "sjFgumzbd95KLEwKApBhbPUmjuHkU9yUfx6RpRzEWN6gMsfqqR2RXMSvBVKsq1BvmG7qtVUaxrYyXaZVLYPWyDR",
  "key2": "2JuTeUMeFbAXLHFYhpq7eQKa3MCDZ8R6DNZjLhmfpNc2J2oZqe8EpFcnMtC3cmkavf8CHVtxAZ5QNzCu2xZ2pc1b",
  "key3": "4dyYzB5ay7uKXydF98P6qmfmf7gYt1MTi4uVj3nNQos5iMrx73zciU6f5nsuB9GXbZUvJ5wG3jvvqx4qKLQ15rvp",
  "key4": "5HEc6LJo5hfvfQE3x93XskhsPWcK82heyWiCaWNoVRkzpWvEL1goUVQc39WwVYd7U7nknwvZz8JTbuuxZxZ4au7R",
  "key5": "4fa8s7Fg9BD9BtGKq85khSwkSbzts43UtvJguSNaP9DYEGUnwQ8GqpVx5JGYLYDJh4eMbrE9iQQWNLnLjmNKULqT",
  "key6": "DYjhQufgMnSivKvu9KzJwF9dge9h8b2WmoFvrBBLs8dZGAKU8DAxyYaFnYJr37HMXgHojLC2mtRqrgrFJSxZS6w",
  "key7": "55iTa933UWZ39t5MZqAYjExfovLXsEmT38rwkdz9NwjWSd16UncGcDALeqQbXaLRyhgWEP1FoNsc1AhrUYmXwdju",
  "key8": "XEWW5PRDq2Ley2tHd36bMnqMocGFutiRwHysW7ncjmVyuCfdpxq95SEWbNryGcZAzAk7LaounRNaUCt3rVVtqLU",
  "key9": "472gYs7udDdVtdnK6xsLufsQrFVK3fgB4fbdW8ScdLwkmoCcEGmhWXKMWuCX7bp64FVJCoecEUVsgFf9wQ6nxjKJ",
  "key10": "3iYtp8mrHUDJMqfipoWZCGWhEpdnqqGvkztetBiD9tHehdJYzmnpiTcKcPpywaXqXrVNnNFfzn2zN8hMQo7NFfYE",
  "key11": "33vjEeiPS3L3mm9nmS91eW986YEY1qWWHczer3qyw2qNx1h7Au6mjkfGhSAyPYQ7WyRfjR6rE9Znm6p5JbGXqFJs",
  "key12": "3VodELhfHVkeFv9Kv2CzH7M669kXyhwCjXraunS5LvapXZHUpLaaGYFDtB3vgXvc1MLcqYvcdWKfDs9HR4RQMBWn",
  "key13": "3EXmqzF7vLTHMq213VrqNna4fZ88LhGB96wWoTfQK74MNKprQTJ78zzEBmfCbz7Tu3vpi3PwfdcPoXRaCVGYZzew",
  "key14": "4zpHXuttpFufzGzQKfNP1KHvzzv7YkPrkVWHv9hBoi8ErUF7vs7d2HbFBUnJ5wKVzF3KzPMJQ8eVG86k4FNo1utG",
  "key15": "4n1ueQvw2Xf4YyydHh7ttDqTjXRkaDBpD5pa42vcCeqepNywsh5Qpo3maWsRqp5sWHvbprvWetbe5B9Cu49VqosG",
  "key16": "4d1wxtFmPZvuAw36tbytBuDSo4B6hZHfbT4Mjsmmtc7iAwbGuMmRBYWVuADB91TxBTvam4sg5RzrmRnRWzY2kd6V",
  "key17": "QpHNJ7Txn4eVukMquPuDhuTTyCGEySGxqcZUv4VqJbSt8rue5bbrXXqdZWSLwUAU8jZ3MZD72oSjTiBS7yHZLE7",
  "key18": "3C9sHAY9WXaTCQHFggiDnGE8iVTqhD4b6Aotb3U89YUPqpBXus4a7AfcDfuvAFSWqDpoCKoEo2DzTCFcZNBUpiF8",
  "key19": "5jtQhTMcE2PhUD96pz2otEczrmpTqp15wqPS6Thwmm3wCkfCCJtN8SH1Z1jMVqb5x8PhtrWivmdTP2KNyQ2d3BqZ",
  "key20": "8Lokz8WD5KtUh1tQndcsprB2fUpLkvG3q6ae79F1qGk6SwdmQSoTG2nCbADQfXa5KJKPetdtBK3pQEPTvG7LYfR",
  "key21": "5c42eL11qSkU9qWHZVyR9YqVZcjN1EGr7Pqn9uGq4SqUJRNdHKD6RCNszQvDrkZmEjeAfZ6abZPKPep4u59HB5K7",
  "key22": "2VLuUt1pyiWmoJFxAih73bBLXxj88oTxa2kbPZpWbt2ogmNAfQmcFg2r2oK2s1sxLiFzVAbed4e8TbbNGnJ4ctb1",
  "key23": "4bpZwFYg2uTEeSDXHsvXYnueL12aMsx31w7dBawaiTEzRVNAkHSfjWrm2hSXQTCkn2ERPQtnVm48SUNRXpM9K6cN",
  "key24": "nPY31ARYZpbFiv8j2xsJgJgeeFwvXUnrzA9r3xaPFzK7uxyAwVuqvQohZFuA18JxDXHkLyYHDPkM3fGbtbe3oym",
  "key25": "61Qzqt4PYcwkLeT5JJ2fvyRVwGnW31XxzdQdiUKuMQaPxAncmvw4a4m6RM4tWq4MHE6Je5XdMSWkeRcWCew7o2iv",
  "key26": "LnPvwC18AKuWHJipmfBG6iBhFwAuGeUTLDKHoUiho45frbW3Zx7J2gtpFWbbfern5cTno7a6zjS1uZJGkezQmti",
  "key27": "5Mgt8St4FYp6RoC6cEi5twqUoAMq1v5gzHKMasvqNkw45zcaPqsio7fCqEKY7qe15W6MabsnFVAoqyWvyX8ESGoa",
  "key28": "xvxAKGjNMWt7aWrYrMrJ3ZaGHNxRSt7WnsxJ8CxqWY9Ex5ouXzeZdGgfyk8wKPMXSzxZEQGTfr8Fi1NFafQZzht",
  "key29": "5vHfCSWEuGWbinWeowxXthU9LEepDTCyVgyZkqS1ph2hVPNchDoESg13Zop6oTufFmQShbC97mJuzeVS6GpH2Qhs",
  "key30": "4NZ59Aq4eDQgpG6szePG3L3dUAXAgtrgK74FtjWrj58g3x3g1sExSc6aCFNdKWYR3wy4T9fN6cCSyhgBG7PVE48x"
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
