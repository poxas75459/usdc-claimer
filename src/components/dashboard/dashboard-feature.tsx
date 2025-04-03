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
    "5vvbXLGt8YU7gy3Yh4DPsnDepgyTeHXgoLpidBVqSvbJmK73i7opEHYsvJuPDwXtJJvaN1mf6YRuat6HZ3AnmTf7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Kqn4PA97GL1KbpmR2xzXBVLTtLUZPvL1HG3ZWowNVZ2oe2UHsUxokXK4nTnNxwJ5kaGAtFdbmii5bPK12c4a4g",
  "key1": "5g3wxSe7zJQEpa8ujvfucbig4c1XdS4zENw6gy9BdDbrhj1VMvQR17UNKdHgTgpnmpmmzsD35PKnuGYLErtQU6u7",
  "key2": "627WbTZjG9VtAYp4s7CW6WcadjEamjaqWkv1o731odmnDzhMR1KNYP8SfaYmymYXqwMU4VEVpkbgGq8YJ79wvSyk",
  "key3": "5y8EV9kuqxUUnwsttGyDL2KyAHZWVMCgm5WW1P9iJSWxQYsmsCE9jhGRXnwzJCNaCMxhnvwcK8J1mT5S5tvKukj",
  "key4": "oPWSYdNwuXUoHjptgBzqNkJ7kCKw675SpYa7VcsMUEWqSYmVca4cWUCsX5JPTfu9ftSe2992VtbADY3mDCnGD3G",
  "key5": "3MMJKHWDDBh2z2k7pGwgo4K2jYoMcqSgEQZ1SKvm8hFZLnYWFDj8oMfadAAFfWxb34zXHLiRGUkW4AbU8KX9twtP",
  "key6": "4CSbjZbw2vY1SBTY3unKJ8gMqWGdNfLxRxeG1HdoAQccQSasMeXRacy8Cu5WDqrexCJdjzqVmPsKfCKEvyNFkLRm",
  "key7": "wMoy4rFsoGyJTfFrbEUoNQYUr7tT3WA1aTcrqufTXnzW6cQJTvBiMzWA4JHDCPXX9r8uwVTu3tKzwBzR6ARaurV",
  "key8": "5JY6524v7MPzNQqnDtm6qvXaGHnqxZMZUVKqpY4zZzYZ3e3ipWQNps9mzzsUny8pH4GghSvome95tUfNaM1VCFoP",
  "key9": "4FrbzfyR6ATxNbjkuoCfVMAzUfFcKuTzgjWCMVjRvkovzcBJXDGQJByHR3kdf4XkAiD36giB1oN75TkmR8cK87ZE",
  "key10": "66j6Wt7vLNJBKJfEs34ckDzjHMoH63Lhjt57d2r5f1Hafox7HpoCLGGrHk9ZFBmqnhTWFrrdshiDrZVefFJEm4Ci",
  "key11": "3wpJSh8K8ZtF8TjAPsn1vzAUvLBoLKUmZ1Vxitdk7DoVMbPijWbFqcPT5z1mez1t5HUqot8Pszg9124X35LMpmuc",
  "key12": "5t7scyNPBT8GaiPJy5AXQXz78gkRtRzzqHjrqVW82joTEQdbeTqS4pdUr6D4HWPEoagGxLrAnwFWRxWyvZvVo1yx",
  "key13": "2KBGFB4XpK1hwAbDTwi1fe5oyYicYSNmPUj8TWhonVMfdW1S51wH91Md1wqFD5LVw7okckTbj4RAYYJEMzWMBJLL",
  "key14": "6NX9Ee3eYhyM9EFcZ5cQtRs2fMQX4DavwwpUsUjkJwP7Cyi25VWbSMt63AZRSF56ScXoqokjd1yFqWvFtfyjNXu",
  "key15": "FemwZ3FPcKBh8cz8SAQjQLVjjFWVUxbFB2XXk5q3JGVQ3gYMmJyz6Aa3QPmzVcKhp6t6ECmSdtjX1xXJa9i1qsq",
  "key16": "wFbmBcnT8gJbSGxpaeZRauTLmoYzE732eiFyjYCde5kfk2L38ATUdptxj43gR5WLF78LXhETmnYHfnBfxs6vDqp",
  "key17": "2vebbmfTHAbin8zQ1qrfVfxtEKdyqrhUqwbvRoEzLpNuDRKByXK8SAw69hMJwzkbGbGM3Qz6oHX7qcj21r8scyxe",
  "key18": "2KigpHANHvm6gyd3KrtjcpkPnPa6VFou9mn7An9t1RqgQ3skUkFE8CxRw5J1VyiouUy5kkktC34P4iqpNnmx8zjD",
  "key19": "53VCFDWPrY2s5fdDtMZjPXKmCUKYX7n88zLgQ5jWzDdnnUjKQk3ibuLnL3aksQjZpcWgjz7CrgRBWZD1m57oPMsp",
  "key20": "XeCfAb9gFFAg5CLFjn6T2KGyospCAcbHhC51qgZJc1H2R7i4R9EQU33qsFr79xAVq3utqyikgDpUxen9V2jRxAc",
  "key21": "2qC5gN2fq191tBdZQiWQDN6GiUiAfQkmtd4yenj6GprWPMtFiHLpPiE8R4VeSnhQwAvxFkRb6QgohD1GipJTr1kE",
  "key22": "5dZTBFbkXWrkAFKeQXrfukd9hzYjbzcp35zwvHjJZPpYDjiQntw3WhQubXon212LYjuKEpcpH69Dypcj7Gg4XaCE",
  "key23": "2JrgnC4ca9FGVU9RLHT5GF6NW9T3UXQBpe1iPA42FhmAWDPrgy281KbZzfpXYKcB67hL7y8FMm4P7S27MXd6jFD1",
  "key24": "KdNTxkAkyVpJGrj5E9MSF6wuPh9JKiwxk6Ps1zAUzXeUdDmb8uL9bJ3SiLWEvBtR5z7xEPDSk49spVzDQ7SMA3c",
  "key25": "4RwM3kCUrSc6YiLycR2cpDX8NVUt46UvLQSnsTJ3YUV2NNmCWPoYax2UwipjkTLS4XgyoR8YtwjEk3KPkDQqdSZs"
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
