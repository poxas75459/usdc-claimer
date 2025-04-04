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
    "2qb4k6HVk7qzFTL8q5CGACzHdLMhdjoeYWFk2xKNefUwhtm4E3BdE9WgfpArZUWDruBy6FunWVQcYZGem9posEAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MNHa6BAiCezkK3sVDmyHLgJppikZzZvy4zhhBkTqWENs5UXkg8dMMyKR3J6eZqByckqPJempai6EPKHtMbvKL2z",
  "key1": "ZhUA41GiZF8qpLvheB9STyPhdLrLHdbSSWZ6rKtnJYudEJwPk8Nx57w1nDJCYm7LyVcAKESZqreSKabuEFCJH7x",
  "key2": "bnEPoP3uukV35qbzFyPqiEreuCSXUvm3Ri3f9VvskoxPd78oLA11BTk1chWrZ8ktAVRGQvBTjGxphwpAeRcHKQu",
  "key3": "4ZVWj6xuYgEdFabamJzn5buiKrZ2zmVPcYF4P2ABhuNTR5tDybBMmM5dmCPt3nfvbS294EmcXi4ZTzkws21axE8i",
  "key4": "4KtDWTyASiV5gqAG61WPTMoawgzUzVBcjiBNXc4GdZsTrzELfWTyMU3y7MxukKYzSzLPAEJmWe4Ew7wRQNR8oCEo",
  "key5": "BhwCAePev3mx8kxQinbrx75EW5Kq6o98EgwMApm48x5LxiasBjVAUJ6Nn5tDACao37MNz5KsmE8XsKXAS6gX7Jq",
  "key6": "4eishu8Zm6bTXPVvLack2p8TzLhx9cZtheBwAPRAgVwAkmMw5qmofCAdzbip47C7cDdsqvLK6gQu9go4wX9qFYqL",
  "key7": "3HkfS3ANxr494p7r9z6y8oaTeJxV2YP3jowzbBVs18KiJqUfEwM7jZWd3sEcHdY1EZtezJLhffPBTfz5qYPH243p",
  "key8": "22DX9UVFYQZT73B2TkMoD9d267quxVGzgtyLkEFMBYn7pruCRYwfGuao1TSFEgEp3GXbaG5okj6JDKf7yYzyNQMT",
  "key9": "284noYWMTHEdwL6CZLsSABhxP6FdmeQm3BtS8NupCwY1dvxMnY4Fiqfj3T47oyfR4f3xiFU9274gFkd2vunz5L81",
  "key10": "4KSJR9ECq6x1VGvdPzAbXjyWbY7Avr9HcCkJEJW4BY1yq1BmKtQULXVPyH3uMAZyZM5hv2SZUtyTTnxwn3D39QUj",
  "key11": "YzFkvLMZzLDzKfgVWmSVdwtVBCdBHAhva6PSNwhAyZ84QaCknmePsEXM7g1gsGysdxtvougjnKEfxmKrnby5UeB",
  "key12": "2aVHSdDHnRcVkS9YGkb1ujXhZJzB3ttcDsmhZ8byM4VxvvX4gxz2pTpfKrWJGcL9JWnVK7rNst5E9dmpbdLft8QY",
  "key13": "J4Zb4ynDxnEhyEmcNtgLjLdWijf1W5WsiZa7HCa6igRvak9bntcu2NMmqDdsLVjRmEzWFvP8F3gvtgFu3w8MQ4r",
  "key14": "2Gy5G5gtqoSFKFx4xNQLQ8jGNEbfjH1HLJhvASrPNDsxK9PJJ8EL3UxoDh1Q9rAgwL4PqCp48RGCa2v1saJt9fEk",
  "key15": "W8bo7MhcGmpLoAy7Z4GL9cpc5ic8o99vkyVN7ekWFyXsqyVmv2vj3fvBEiSP6S5tGibXzLHioBLzB6bu781ruZi",
  "key16": "L8zVxV5dkjfeiqmPFTvoAsYA4jrz5wmCKCyVTMk3V6qsE5jUQaxkGTKyBczCPgz28gzkCz1nbymJR1mzEkdCPPn",
  "key17": "3XE5rwxY1DdswiVqHxAMYjyNieeRWY1JMJC4NzH2apLfCn2czexmkCznEsuHvEYEzZc1Vn9mpTpAh7fsb5acPfkK",
  "key18": "4aJ1mS3uSc5AFNoffoxk4K9VstYXrQEFxwbkeimTexsJskVZ67YLkKqa4GkvwTWadCkPMeBmvJqRiysSruGSM5Gt",
  "key19": "592epfg4XKEPybHVf6syJaC8MBVe8zqJBEdLUyqbLBKEnAbSiV9wbXddzpguqkhek2k4H2VvX87TEQhwWnGhuEFF",
  "key20": "2pzXdEEcHEu9mySBFXf46nqXdCHtCp8rG6MT4yR3DEw8paunB9Vfrq8e9iN4h1u2e37ZuaXkX5ABngoQNakC8V7d",
  "key21": "aqsri3rcDQ2hdHfYexdhJ72HGJdiMLQyURTEhzoahUBwAagxEdcGdPUBkSeJhTTwNyqWcUc5i7QRE7mk3k9jeS2",
  "key22": "6u33tRRcGZJs8nt6DjjtXoo2mBwUYd5PyeiZwoipEGwJD8YZsBa5EJ1x6kUQpS7yC6dL6MJSJ9vCUsYp8ZYdvoc",
  "key23": "3dwTbjK21qtyJtJCEZSGZLcV2A3rUnQrfpXBHK5RvNFxwF5iraybR4LEsxPL7soWNptizxYdxQz2TR2Aek9khhv8",
  "key24": "3vUdiqoABo7YcsDtffruG4VEHenRnVrEGgasi72z85ADGdLx5Cprwz9uyg7FfJnfBxjiS9j8UaVAP5SsV5MqSffh"
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
