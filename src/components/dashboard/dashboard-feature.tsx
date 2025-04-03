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
    "uM9FeGAhjVXj9bmwHTibjs5N4wEbYbk4mZ9D2rTJxPagA7GucQ9q5HB1mgA9p8FySWvngJMmaaXqyxREht3GZ8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JMauP1NrYa78Y6kdYBxTufprseEEtuKn6k33nt6wdRCUPL8u46ruApPAR6uPZ1Gxbad4gXgCJtJDzogstDsuAHr",
  "key1": "Fysk4zMC6rHXGRSiS4JxdeqLubXe4gMm1bkCffihATwEmKV4D6fGxxdgFukbLdqaSwYZeeJ7EmVepNwxvvWYSoj",
  "key2": "4RV6rvyoBNUfq6idjDdv7gZDXfxbTSrv96v2odUmRGDVY7bLp1j9WEeKdsv3NSJhmFmwK8EtULXsHCYEs9psVJkq",
  "key3": "2J4ZoePSSVNzYazE6Yqw2FS1coNN9irXWu6HfeEbzQFfvyPcW5jBUnakMwAXPmNYAtLZrgCggQd7qSHtPxXK2dL3",
  "key4": "5kWWzHyH7SCE7zUw5RKxRAmmNPdubWNoMfmEe4Fb9XhHb48CKbvDwUhJZndHUvdFnRJcyZxU3U6MYsCtQnDaSZPy",
  "key5": "4qNK1tvD8FaozGDQQtg9ALbP1sMmgKGtrbNqfv6zMM56qNZaxyPyaUkYFj7vM2jcinnoz8KJub9JtGjNrykBqVk9",
  "key6": "5KP86vk4ZD15MZGoTdwHEzGM9yKAGm1Undv95U8EF7xAYY9FYfDyfzv2HM8uQ4bCUZzKVPzP7EXVxrAU8d2DRQpL",
  "key7": "XFfTDMdXHUdPcWQ5izHGQ2McGfo6WGR2JFNkj232XayesUQHijLxteRiFk3qiUQBJs2Dz83bhNTPcQ7tTPmRpHm",
  "key8": "4o7AaePutW3t1TeoZGAfvgsWqQ4oMrDorLDAUoXvpHXhDk3gqkhRH5QAzHxgm9z7mkk2d7tHDo3CLLjXbZzDrXX9",
  "key9": "2rGox6ra17kSAtXP9XTuiLJkf1Cu14eUkUqJrjVjzk2KGMd6LZJSXMdpSUY13WJb8xyAShDQScLKfrhtbc1AXWqs",
  "key10": "4TagFCRdVdPSw6BnjbPQUytseWQXRvAMhRyJTudtXgPWGXsqdXXGtt3mCAqpodqNt3zdQcbxEK65PaphKrUTuyZR",
  "key11": "3My9KjvNBSZfKtM1FiBPMPiMLNKkt7M9wBFJdT7Lbvkyw46JtAcsfmWwPyT24WLM2fFktPuHZTUc7FaaLzXA8zPd",
  "key12": "9gmn3EoqADPyz5v4D4omqSH4zii5bAPSgXicSoeBSneFC1xW5VoJCu2wat3Boq8TbaCFQdfBcQVhJAPuW98BJgD",
  "key13": "h6BrZ2aor3q89jUp5RS6VfjCS6QQCgt4Rm2nx8tz3SpLgn3xansFBfTFD5hvBaC1Yp2d6hZBcgJkHzCHX8gViBR",
  "key14": "3E3MXxz1czAuPPAxTSf9eCM4DbqVwr6LCsqiGit991bydmZdtTPQEDWgDeCWYDzFzEKfA4p1B58H7h7u8uocLxnj",
  "key15": "e5Y6cQfVM3wzws4YwVMWgSeE42DGUz6MeHZNWmHudayj7nfbdYpxSdiRJGee6H4Tuhtcrxnz5XTtC2GpQyYQAW1",
  "key16": "4ust3txdrrM514osrAfDAAkyzaxqjzgjEfnpZLPaV1VGC53hcqNHVRok1xs68kTJxvC73QRrp44BLhBsyvFNXFgW",
  "key17": "iXoUtB9SL1pepuqNCgeyKi6fBit8i3Shx9ZcayXHtbZSwdrM58Sb4K3WNrQPF5i1arfMmPuZF7vrqK2kE9xU1WP",
  "key18": "4g9SizUCPGjDYRLRZQPNzpPy2JcVGrG7NyAm3reqDiuzYWokV6L7UDUUg5zmVqMuk1yQoyPku5Zy6NzYrskEnbhv",
  "key19": "2bH5gDrbMnZa6YKT813o7m45EbsJyQuhHceNFhfzEf5wdvvFdebwvztCtVLZcqbN4SyC4G9dxJst8UQJSwigJAYV",
  "key20": "3nQ6UtFP9vfyn1Wy5y9XP3R93mqNCWwQKHFSFLtoAWYxqRq3EmmgYen78U1qoLkmzKzXVmQXd9FRkhykfP4kMhcf",
  "key21": "5xWwtijFgGEfZ1RxA5Z3XZKzZTjWrSygkTYzDzkyhxrJsMyaMqBkMroPQYM5fQycjhU2mQBiABr3CbkZw8Wt6mUm",
  "key22": "JXgADL8QbCQcz3zM2P73mAU3RtERcCCDqLDgamMvCgfS7SsquzUDQY28VnvjFqGZMKZfyJ4jfrFUfe9GKwy5rwD",
  "key23": "4BQ5F2rZLej1wVrJMDLGT4R2nh6T5BAtAzBYhqH76qd9huKphZTFy6KxmJr2CYPUZHsUV7dLYDUoSKQXuE9ZmCGH",
  "key24": "5SkvQHSLEmJ5wQD8Yyc5ARrTQyq22r4i7Gh6NSiDzXhqTFER6TLnjKa6PuTrK8837BsjprmoxxC8UUoCwCzMu5cc",
  "key25": "3tk9MVAS3q3qwPPJqxTZXBNhM8pgirmMBLsoDy6j9X3TrXVCKkVrgoY6mtREHH9xjRcj1uGLePXMXx7YJfhCpJM1"
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
