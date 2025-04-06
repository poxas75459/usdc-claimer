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
    "5ewjhJdpgMMfhSVMGNzJXSQL7m2sYWVB7Sk3piabRLBjv8p5UUZTstqBRSmJ17x8STV2sAZsX6ppAjoQV7eZDCH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PJTN6c5XaFqPpJGrZz69pYMAnoXjMUvNrGkgETF4ytg9XRKQJd8B6cKbhtXfR8x4io1bkLKUiJqKU27oLnTzds4",
  "key1": "gxfK7PpQN5A2LGcWbvKco5uFBUzRJsBDo9o1C1AGrJGDhCHu33W9iZ3cyqU3cZk7iMAAqNTate4Xzg1784q4hgH",
  "key2": "5mmmFqpC33d7H15sFKxoHmsKeumpca2kUJr6fwpXwwtuV54QjnBzFYML1khQyXU9oKJEaVQgvoiXJhuwvU8B3fwY",
  "key3": "5aNbE8KL91TZYv2eNFafVAXCBm4bQKx1UFSxaFtu8hsDpZUtVKmC7yrkLSuuLmtdKEp6B7kHVMqgCquP3Q4Jr83Z",
  "key4": "3s9HiubZ4nG3XuU1rHuPRSKjx5DAQ2pTLBnxghJr9J61CsbCCdyLwtPheGDp9w9mXmf7dzowZw4k5a2efStjjh5c",
  "key5": "4knHJERHkU252AKJcVgYz2K7QHLgpJp45tU9UocCrZ8KeZYAPXKYLFP2mWV4mmswpWdCU3KRuWReoVpfdUzuR1oc",
  "key6": "2kLbtTnUY4yjRRomPpYKzGCShbtHT5Nms18a7VGtDV3xwKwik5gfyjd8xZiHgakuK3PVDLA5mW5rTCVQNtKZ3DVd",
  "key7": "kNNqPixj5tKfri4sSr9UBMy3GRYyxc7j4dfEtZMHsvBNabDm9CoXiuNYDnRWdBapuxVfF2LyDUVUUT3gf1Z9n7c",
  "key8": "3mspnYYfMTbG9PShw1YzBBsNXgEMQRWkoFQERtpCtCu1P3BnubyP2jjurdV6Za3LEfkjdoZDBmkMe33sw3NL5w1",
  "key9": "3MxpwCKCCfFQfp5JwdeUYEQKwu4MPYvfPFPbwrs3YZouzG9QzAgLri1UT7CgqvxqTFPJQiiShbMXFDRgvfbDPkXk",
  "key10": "66egUfo3u214uxcAfmt84FERfmSBeJt8nrwkvYKxHGy1hmfy5WuFPMoEku2jDbyqmh4Sy8aQtL1xxeyQwvChatAf",
  "key11": "Vj9yokMsuHht1EV7xF5eNEy2Xv5WGdnMg7ZNsasPRcVksSjgmHkcDC7pq64VTYP4CE9fqxsL6u3NjxXAayNFUa3",
  "key12": "4F5ECcqvYXBAM2pbwvZBKBxmfcNXBpoz6NdcfhGW1ErGhjJiCxfxH3DBn7dyctgy8724RHMHYUSRUE7SJ5XMir9r",
  "key13": "4337Dnd4JyQpNnLLc8vLUavssUrqoM6MP1XgiFSLSmm9G8M8VAumftinjpUtSKLhkZd8BexnKs7oDbUV6A4diwAU",
  "key14": "5vQjXXQSxTgm7gURZYHpUmgQ3uCUc6Bmp4ndxQ3tqmrzrC3M8k9vBfPomrh4nEFYRLdMkS1kHfqei8KXBD34VMda",
  "key15": "3gTG2AEBADa74QBNWerZdqRkNTsDPBWDaQXHafDBUZYE6tY3xCdq8fVnvkwHxG4ueM9UznHRaimxoNr458A5XHKB",
  "key16": "35GadoVJPYRPyW8e5jPJQZ9c3ND72DsqYphyRSDwKKazHSoJhGfNuaZiNGwWc6dXntmGY6h3YZFy4w6HPmKWzptG",
  "key17": "4mMH1pX5DjEefhyK1w8KCr6AwT8fx719kCieBALiChy2yfUwVKNeHHVvSwYiABkeN3B8tHf5veqUA2PUeDQYogUu",
  "key18": "kEHwEPBbR2aiVmnM2Avr7aBqCXS4ukFEzvfi4oFNtN7n3qFZhiCBLycYJdsRM1tNeX4GtF1KKf9mDACT6qWhmoZ",
  "key19": "3wNHo25r2QsmvtXSpCvgqFEtMKoPgfBVith9GioH2R1XPWQTahTRFcWDkXaSmFEh6sVuTDbqLSgavcQEtBS17vz2",
  "key20": "65LXKwnVMnVXKJuYjzjwUGTmFWEMomh7Dp9GvTvsJsfs1h93BGU6hU2CQeDpRxmCnuXavgMetVCutpqTKd4XZ6Dk",
  "key21": "44LP7sWL2gzKURTLR7syJuZ4RGcEajTjdJrLgs7mxgj7yp54txAUnqmQKYmwZM67DcAQpBm8qjcZd5mSkmcvAi2D",
  "key22": "4PiWAfNgK2RUiRFLfuCcaSDVxoZQFyhts4FnxjXefL8jphoPQX2G6TokDNixZjZjpnsbud3tPFUqx3vXwTpZ9Px5",
  "key23": "2ayxvLag8zMwasnWWqiNi7M3g7hZGwmfCESBXCqsy9dyHRNsWuGmR6Mv6N24ggyLuyGMCPo2DznREBKZ1tDGMwKQ",
  "key24": "2UHZExAMifjiUnUxqLkTS8Dfyci447VZLov7PMyJRJCvidZvWLhQrEheMz7kbSjmJ9SJ559MuTY1DsWa6e3oUaAj",
  "key25": "3A47MciSZbqYB398JwU2Rg9HVoJd5AaoS9mdxrWntEJHCeE3z9vxvgSREEVjUdcFR8bkKU7SDJwmobUP3BgddT52"
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
