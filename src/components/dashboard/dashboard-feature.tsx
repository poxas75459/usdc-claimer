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
    "65268eZSBYkPUFzhRfwnsnuNwyPxcXXBhoKyAYbQ29yostH9swKSHyLnY7D32y586wTPR1BigtW3R4sUQCzcntqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YGpANJ4PxyfbjbUVWT7srumUSxr3jpXMHAUsAZc4cmugBSedoWaaxX8XsoCQPTn2DYRL1kgodLnuHbkg75jAAb5",
  "key1": "3aMzdsLCRga9ZtKjJ3TmcGPigxpqYT84WBwgZDMdPR3wEt6fDcRgBARy9VEvbLx4p94zb8nCr4AtmyrZ4bd1WGs1",
  "key2": "mftd2Dr7ZhFpWq5LXYFkQyszwTUzczPbp8ZXRHxVmTRLr8vfjoDZskraAhmqMzxDhQmq5tAHiR4PiRe7a4hA9Av",
  "key3": "324yoHR3XStHEUBRGygNWMqM1xY67A9QSbPGpp54KuCbREMvozSEsAk4JNbVkpyrmtnyKVfpTZwgV67vHrTWAke5",
  "key4": "2omNW9RwRUZM7bWKy9ywQkMA4ufEjWxu7mxfSDTVhJZQ4PNTy9YXbUQt3CWcx7z9sqEsA62jp2K4JitMuthXnbd",
  "key5": "4ivvX28jGQ6tG8Ffmb6cbaXCYZhxzTeHNjRdcn8QKA2HopK5k9MUigxcdCwtPzAovAkn1zfX8vXAE5SP8vbzsphs",
  "key6": "47RDSvwHXrDEQAP7w9WwfvW4A1AcnMxzzEoKFZ75joMzETQgE1xg3RoSfBbAM1VsreXjaMvpiGJcNoH6CpnkYnBc",
  "key7": "31WV9bRVYgBpnvUuyrM79AB483pvamqB9jTjnEyKnnFicFHGarSf3jUh9vREbqiorsCaJNLY4yZVp8XpbMfKjjVt",
  "key8": "3VyfbinZz3kddHHaUJndkgHdgyLkbL26LM7fGxoTxwsBubmR9JC7rMe7rVw39STTVfoD4sGyw9gaKWhAdr8Cty3g",
  "key9": "EgHTSMD41C8bKoMByxYEGGzv7wBsv5Z3R7Ud8Vi98QJ8HkxTedMPEM9YWv1TvctwR669MBUC5QotrwWdaAjVCSb",
  "key10": "121ZKXZwvRX96nd55RghrF35aKYRJxNFEAytGMLQKdU4fomqnk9Rbzj8RmkKZHLa6KLVWmi2uda1kw2MyEbd1ixh",
  "key11": "2TMnaFzfM5y6Uj1cgG26smTA2cnAJSwDnUi6qzf7UZSZQSxnb1VfBLpxXx1tVGmhw2J8tSNykaZmDXfAKMA3kc8u",
  "key12": "4dyTKRk65TxR5S32HUvPPxEr1cggoKoiyyKmL2H6rR5wDSMo9eTZdDYpYrE5orUZFojP5WREvc658AmYGTWFQYSG",
  "key13": "KyEHgCyR1hUgQPBx9YdkUfz9bBwQzVfZEV5z1Gr1Ttbf9R3kUVZgF8MJdzW54QjcgW9aMJ3bgD8Ymsg4EoBCTGM",
  "key14": "4gHjerMZnjFZn9ymau3bn6nig79BcFAwWUV1FmZqYTEPPYHsrmTLBrU7MgsNkdtN6qsdsgVih6VKbaEKuHVuvkjM",
  "key15": "2g6tw76BWQR6AkWJgiEjW8XNMf6oa1kb1shXk5efYjCAY68DomgTkV4Fzgn8CPjnQmWfNaZteoGxTmh3FrS4zhm4",
  "key16": "41ZMEDsfz6i3gvmVGLG5bEkdLZwLMfvvZvkn1XDbai19aYhiQh2Dq8733M3d9ChJMXGjXxZ8YCQDoWY16e3UAraF",
  "key17": "qAZNYCfLNrzee8DEmyaiEMa6NRUWYyqwHbeocEaqtRSKPB3q6oSay7Cnu6YuRrj3z8crgUzWYRU1dxGi372YjqJ",
  "key18": "4P4yrpAX2rFqoDyEcGjwGuGM3B54Vj8F5GP4zvm7onkG4ZhMAyJfcRZVFrATGaNRn78kSdgYKmjrYL6KrS4hJEyZ",
  "key19": "AnjiZg49p8qP1wSYYyHGVopJ3YRHNahvGdn6gNUZx2jEVLvgsF2hvtv7CPSaRM5XRXFieWyi6UgbH5MUWqknBRn",
  "key20": "RA7UMXyFKN2Fe1L6gPTpo2QiPecdswuWLuWLEzUy84Yuxw8ex2Hc54DxPCvxPUG7pmXe8iwdQ3Mpkqk1KvJWtFN",
  "key21": "36k89GLHDd2njtW3dUNw91m5vmVGuesJZFKsWVuY7VUGcbTxZewUNaxbf8cARxHhSCbiRqQ1ZPMH1sx3FqxQDnCF",
  "key22": "643Z27MukwttqTS19i13GgqcoCTxvTtKXQNnc48vdCcdcittSLex4BFoPjUVuK3pNUUGvVbfbeXjoP4R4jNKSTKJ",
  "key23": "3GcQSXViGHYTgRk2LAAjPiphrcoqN7Kv5j4wTHJf4wZ79uRTsrRtMGLCULD8Qfsw8WUb41HTxfZwsDzRCb4GAnEr",
  "key24": "sSN6zSXSmceKriSeba3vKH2pW1FkaWJam15UKRktGdVdjLYoKdcjxzeZaHVvWxnNqhWV4mPqENBYFFCcetCue7T",
  "key25": "2aTmCTzdGuqxwMABAmM9vpBGkaT6PHWZsvHQhUCGMhEadktnDXUje5WLK3bMehHbN5fMuP8RcBNXrJCE1LLNMzhG"
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
