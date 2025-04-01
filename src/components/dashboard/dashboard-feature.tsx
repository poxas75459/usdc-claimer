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
    "3WF4peY7aM4TsJFYBYbbMm4PhhhF985eNGenPuxtPbJHV3Vzazh8HwMhRqr9yt7Cg84ukFiof3EE67ztL84WEhUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uV9uJ8nqJpwvrhXBYGCpPNmhKS7XdTKg5nr9JZGNzyPQjpW9dFyFvvgdQzkJZeZQmgAiiAhdsS2fsFntZ1JuSAw",
  "key1": "4V3XBaexVbDvK7wmRtLCkDK2SVHcbKHkxzf6mga6Qd19UobW3jdYcTkigWnpefVWpFoguzwEDUs1WawshkjPTARq",
  "key2": "2VoyCEYBohX8yqHUKftoRnuQcHm4QqWWPveSyd9enqNmAxaAFTxr7sgCiRmBf3Wd6jbHb1Rtn736Zn4nnDYhd7uQ",
  "key3": "3UsqTbPbG4wXtq4GQ8SbJ6GVG5JepdkbgskP1QSyxMRSNLs3U1StaxUStmZXZjcsvp7rpPho4mxahzxt5cPoKXJi",
  "key4": "MUQPLkb8qVkDbsJViazd7sfMFu9aNxc28u1VjXbE6rDHb6Ltuciz7ueo18fzfQmoWwJaBAHCUGe4dWsmxv3YeJW",
  "key5": "63bzJddTQwGPgUo9JASBfXf6etRcCENE1ygxDfZWsCNjPwkbuyTBmV8rseFPWdvCn6D9ES8MB68kdorjwzwBSqT",
  "key6": "5Mgg3RpHiiB1exCa41rzFrZx9J5SheG9HF3fRSyiiP9Dnn2XHk8u3dgZS423ARJqFWHeqV1bEAgVRsr7WJ3YFmtP",
  "key7": "3umRGXhMZYgpKzAfcFW2efjMAVWdXEVbziQ89uu9N2UZGLg3DyTVtVUM5aaNE7ebhMYGLj68iNFNAbjQuzkbqygh",
  "key8": "2YVMwKGj7FUiSM1sWJSqyL8sB1kkAwziZARyri5bgEWW57MVzXbPRivGb3a1ZGrSg8Wn2R3J11QFekQSUGbePcUS",
  "key9": "4Hgyj76LKxjH2QwThz9mabuBJmyzk8UA6yS2wsoiQfmQGGY2VNS1yBewq6MxzF53C4iJyX7kRCT4uMUo8Q7dMDqo",
  "key10": "5ECPU1QWdE7ep6wWCzk43QYzWMqDkPXsJEbEPS7dkfez8cqezUM6LcK19E6yjiLwQPfQFPjUzufEGzEnDu4cZHcN",
  "key11": "5YCqB4nau5PLobKNiNkiH9MN3eU1vUEGHXcC5GfpzqXyuqBzae4GtAsW8B4VS1EM8s5CFdK8Tp5vSRwBBkW9TbHq",
  "key12": "2HWJbnoSfx4QiuWZCtzzC72oPXTaotgTU2qkwXbttQQmoLMDrdwaiM75T2BHSFQcmF3nkW2nSuFkaBhJ4tGxHfms",
  "key13": "4BaAXEfPRQu9vPsEQQ6Dyv6njBxbKDzrApf3YXGk3vE3cSRiHyhBM41JRKxUzFSfGrgcXM54k8hkQb795SjQRh5j",
  "key14": "53SF6N6eUZwaYvKmiB6JGNcgu4Eb3hgf8zgGfU5aJToxUZRToecVdYtCD3WudMaW35EdpYrNNrEEDjBQcD6U5P6B",
  "key15": "4hvsiR2dvhzCVCzsyQ32XDXVR89GNRLK5kq29gSVPSxB7gpT6y92GCbLzeT44usSyiny3M9ueQCbXs3xunT8G9TJ",
  "key16": "2wa86Vcm5ioNkLoxvGvADLbLrdoCshCLCjDcybpB6Y55Vg8zENqieAApFKzQJT6amMcNnDQ4PRP1sevNPX14xA3Z",
  "key17": "2Wd12d78QXWijmRxXnAi2gRL4HawiK7BkTnu5emR1Rc3b8ZzV27eohSG6tcMiutuHRZ93iKMagFcrKzuQ89hnB6e",
  "key18": "chQ62XdpK11HfRaE3cxb4xUdvk3WqwMvLC9x4AD8Ck2okxE2JfU91akkCWcHGWtB7Q2EirAWbP8LaPxhHEjxCmv",
  "key19": "4fSVXo5zCAVz3bda7FwTyTeu4PRi45sYzaN6M3TwqruXFRD6pY1Dkxo6wfDXnE4SfKYgF8vsc3E87MJHxkPCXbKF",
  "key20": "4meHFoMgLsWukEPzACotrCtjXjzNTbvhTQqkTCSvB8c27tQx8dQwscTeiFtKsAENCfY96pdrHkY2VvTMBEasMLx1",
  "key21": "iECJsbTXYVGt8QB7qQ3XpMsCFgrt2Xk7oRj3k34XzJyw8dkDeKvqzgGP3LAuTe3nHhcBaCn3QgdiMePmQWYZdXU",
  "key22": "5LFoeWHXWEZfNY8dM4jEQ4FCfVMqqxbmUFsa6GnTfmrNFyFUP8fZvM2YBnKi31DFbwErj7Hfn8r6AQ2q1vbGzdNg",
  "key23": "3YqPxcdfpNLRFBw7sATxvcRDJxMtYYA4dTc9LEgP6F1CbTWRCUircBRW167FjTebicsBCBrPGXNW2khRzwPt95mT",
  "key24": "2e4txv5LKpiTY5NFJm4xU9nZ6nSPCkunMA6oRKpzPw5BvwG9ye9Bzp3moV8WpLSt9ToRpziQ23tp1S2WCLJFTuqY",
  "key25": "5tKigXpTxMRYmUCgy7Qa1GAfTgBcct91xYSaBR4Qr6nqK2d8LzQuvsGQwnWeNaJDEqHZ1iPE5tTydwapMrSjKrUG"
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
