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
    "4AfRog4peHPDgyxBwYHgNdaKCmJoa1FV4DRDysT7Z6LdViSNhmfuWMrZ8uYQUeYQ8njfyXWwtKtcrEBRcPJuMM41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FSJeSJ3XykWssqw3FYUqJBM64VDAAQdmqzfYTSiMqpMVgXCwab22fSPfNRJEHxawFCjAZmNA4q8LRSxpsUdjQqf",
  "key1": "4YrG6suAEqaGEyvLeLA4zgJprQS6DEnNXMbiofsTH6rhbXeiZ2tPgnLnLasdk1sbbYvivQhGeR7pYi4hryUUf9mW",
  "key2": "jkFU1fepVqTm8wdtdyptFgDJZdASdDtJXRhEKNDTsbj6wEvL1RpQunpn9JLoantgZn4RARR8fwuswqcSNtASvbF",
  "key3": "2auEMC7x9QgSigt6F4uZika3ktXfy9dFtQVHr5jrg3oyj1MtxvgrE5Q4FCjTC7W9poN8tPxCe7cjZkESyXENn7Jm",
  "key4": "2zizuqwoC52bqvEJsCjSVLixyLMjkEPJLKoQdQrZSWQ88aCj2oGAMSc9HmjiS19qB73chCnNYSSpGn9UKQDEBVpi",
  "key5": "5FpvozA8tb5WSxkwzeJqKv6peFY4foG7EmVjbiuR2cyjQn2kDKxQ2szCrZVNPt1dY1ARg9VfW3HHvHx4fRMJPUUa",
  "key6": "2f2N6VdMPZG5XBx47P25QTQ8xHR5QJXxg3tHD5zwtXxjEqbWMVi8KiwtaRYdigQKzJm7fJW6ZJhPqU3CrADVvcgf",
  "key7": "2hjLqAnx8e1YLkZiH96MRsoyDcA8SGfpVSKraU89gb5XwqCoKdEXvRDoa3owxcB6NeVbyAiepNGtdtn1WQGMzBJR",
  "key8": "2z6GeVUZr2fHBd9u9hUyxF2DBxKRA9nFHV4NapD7qrvwYAgJzFGRypcR2MWo1Pv8E5gSLHyZ16tsFWtUp3EGmetQ",
  "key9": "3pbyWTnogTJTPSGitpTUA4bUSY5HbME7UXEGpayQoyVwNgqpcKJcu5SnwtxyF8bCU5AP3ET5My9LXB61DFaBdbKH",
  "key10": "9LmqEzUvCpx8n2AqEbC1rfaZzga57sfemHsoL6Mr4RfmSif2CdimdNqpZu9fQHnppos5GQTK4r2DsCJ9sb8oLJZ",
  "key11": "5ZWce1U2qpeVSiC2pA2hyKkjSfzGqZuFh3SZAh4GRKzWeDMjJFLzqkNpPdx288k7FRuTYd3AAPK9miNppwv4jBZx",
  "key12": "4cDd6GDCrkkDAGJeK2y5rZQptYc8udoCKnL9i3xV74U77VswrUXqFhdxDoAJpDbH4UpzbrYWp3haNJfKpqQkcjDK",
  "key13": "wtQDjMto4U9GXP9vBwpRt8bx4SMiLmKp2iKwV8zYLGKdB15j1EcuJfV7pqT3VA1kE3EuakwnpZf7gBwYsddic9h",
  "key14": "4pgzezkKNdQspBvwowzYtWR4feWbA7ghLFcnvYMFifeR8orKDtYfQx7ckfot2b8yH8zVTfknVw1oggMaMsCUfRPf",
  "key15": "3MZ3yx7ekrXgkUckYrwnUFoh2ZvXfztyi91WDTucsK3t9F7rDoReud3dokApiedJmisGx5hosUHJ64oP8QmR6rE8",
  "key16": "EEEM4nVyahQqcVnpmfbicZErEbtGzPTCLjqDa9Q9VipbQ211v4K71tfSB8Q9JmiKsnQStMJsnjNtNp6GtZVCz2A",
  "key17": "3crky7cYHUB4ohG7yJMNSetoRSv8ZVckKsFoh8E9xk13AiupWSx9yQgFQyFkkwSGgpWY2cDJm4ULDkWSWVyJKiKB",
  "key18": "419qSqJTbsZmBCppc31nmdBt5vfxxVvWDJWBRphzYbQ6826P9jPPLfyE28WzX8euJuWuZdZe5LsZ5cyzuUeBcT2s",
  "key19": "3U7xbPjuLbbvS2KjV7qJSWJzQXoJgqB2WeARHDUvzJqRrxJ4gHPSXAPStsGRRU3jdr1e9SwhFzffvFPWewm4PXer",
  "key20": "3biF4UpWRcdERPK96TzyoQ7ruPUGtuUwoKmG7Ex4zr3KkvYV3JzDusjzGcQMy6sjK45L1BCwDN61foZPGibsH83L",
  "key21": "5m1prDEbr5Cx8xbc4d5xhYDviLjfTiA1sT2AKNTvFKq9NrMeiFgvHgkUE9Wyi9gL4hGTxbUYDz1sg6UbE44b1f5k",
  "key22": "2ryDmHHUDCN1YVfbNMMFidPkMJuG3SZweoUMjVbDsifBR2rXKVGeDQUdnyRJ4mx71RNC62tLJfCk7W9i6uT9Lbgv",
  "key23": "5Y9BWwLVXppGK2J6jhHhiPS9C2CEF9BVZut5rNRU1W6LBVzwNn7bENfsgjUqcQTVThVsxy72qoZbLnB6xxeZshT5",
  "key24": "5C9FwYWWr5JqgwrpWQrkbFe4oJsX3L4pkDgqnS2rTF9BPvkFsGenZfNosupChuRSGn9btTSme6xKjPdZTernjsNe"
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
