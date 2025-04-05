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
    "oSUXvqXi6qroCYskWyiictrgWbBgWuWpWLThaCXmc3PwrFhSKgxZdMMQR4HJQJDPbSicoWpjWpMnT9Y7wRPKdUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BAMZRaNeM1NDc1iepvqH1N1aw8EL93tn26iEEMzqswyP3G2TccPCooicMT1iTgTWNDAceipnkXGJLjvgGe6cq2L",
  "key1": "MMHYou4y4ZotEcEcVvgRu6JF2ZnmKy7a68xC6Y1WNS8Co5st1A7fweEAA6B1Su7tm8dh1WHzWpU7qrUo2c9XUBf",
  "key2": "FXzrz1Rov8qij6aBCDSUMGRczmfSBjR7Mss2X3mvembNe1GS2UnEDuhB5tNbAQoLy6fZiqJebKMaj3CfTcZt1yZ",
  "key3": "5G786X6VVyGGSKpHcAgnEFp8YJBuzBX8uFJ2n8V3pzxY4qsgzZmb9MHsnMR12h4xwj3AkK25kcog94KkJph4AnZo",
  "key4": "5THZ2Co8oyhwTr2uapUEJ3Y6SmQtkxxMZwzqaNMQRErw8xnMPrVKn1iFWxE3qHjceAsUM9QSYvUPkD2KJPMwwXxB",
  "key5": "67Zszn5aJJiYZP2qDLm19kJaAE11S2JyVRNCD1jgt66yH5i13ZN2A9UkEhimeFiBeUFHaAuXAywBQ9KEzGyzwAfH",
  "key6": "365VzwYczWK3fi7w3SGuELepUxG2dYEh5fj57xWWpkwrSNgz8jes8qHrvqgyB49CgHZJ6Zei4gMWY6eismxSx8Nu",
  "key7": "4gU53y6P1A83q4Vs4RAfrQuipAV1jJuCniqjVbY9BFU3XygxVtbgMBycBPt6yn1E6pUrHny8UPekYgyQ235ceumJ",
  "key8": "43TVbu5dQVHBCG31izaK3je1UTTdo2H8UkCjEtEkzWvoFWZxgKEmzuhxeXFCRFZHBCRuspRXokoBTt8J9MLZC9co",
  "key9": "34ExZpYbyn9jeaxiWaHA2otuWppXpLnMVH1zQqrFetd2NrsZwAVxRZuMikgFSez6t4647Pzs2mwqMiDsuqgoWVqN",
  "key10": "55YK75trZmEsNZG11bXzqE9nAWeQkLBSAvPCxE8qfXYJRD9jL3utkU4sdiD1khuUUc8UFXWHcey87yKPHYa9veXc",
  "key11": "5XNi7tTcwDZdavBVUHZTzFa6QPU5adgQxDqxvnJhAmDaHwBM6memYCt2R5sPxZ8AK6gubEN2Dxgx2ivGad49n4A2",
  "key12": "44CxoKGoP9swaLsPRgptXHY71AaNHfSgsLPeEyUFCr1AUwW2KR1B4YMvAY3ZwDxvm9AsMB7tVCLW5uNAhgtpxPj6",
  "key13": "3aX4tUXVHFLuGsRX8EftmHVcuG9ZCkFqEEcpEv8eeTEgRT2NJR7foq8h3evNQHtH9A2Lu4BtBgkXkW1EMZyFC8Gu",
  "key14": "3QoKbzp8n8KhWCxMrpx3KGLbgLoQx9ur3xG9WTg3tTQdTwVzYQZWGT2HDuyHYR4jugGDMu7r3neGmzhADRN8S85C",
  "key15": "3iEMFu9dUkakFJqU6TBz2JYo6iabonnpopap4TnZQjG2U9zWVB1UeWjC29vcRWCSDskKyYaFWHEArJHnYRSZk9fW",
  "key16": "4pVK8cJPPhuzr1MxQj8wQE78aPx8YqR3XuptJk9mb1YpNKq7hCjMgVMo9ZagV9gKVxYNXpfpZxdbdeiUtnRL3Maa",
  "key17": "2VWcbP6PxcjqnMxC8FQiE4hswGzWw4ttvpmULxFufkYV6m9GLCTvV8Th6NhDLo9GVrijxRM9e87RKmCcujxKbTdV",
  "key18": "3Ds9kFQXwL4ck7BQZg2Y5N57W9GvXePHbcgzg7EuYdePo8EmJQmNTb7v1EzRHXB5FM25xFqinypwrbdGs5Nx44Fh",
  "key19": "roRHehnmV3HdpHsjqSAm1EQrVgbZbg68cDPizsgp7vAxoqaVhcf8kaNZPqEXNUvace1Fk4JNeLHoS6DQ6qvUaMu",
  "key20": "MJWHTLSXFDjiKEJpxxdvEdMyN1PBXQr6we8ZBdGHQpxmDS83FhdkYzocDZ8Wj52ttcfneGevK6Jh7hKV4WbML3A",
  "key21": "s6cGGTcynvNbpg85avvJC61cJHUKetGk4dK47hG59WBKsjEeJ2ayUpoWAWB3vTsTmB6Xi2VBQXp2HsGdB8NR8Wb",
  "key22": "4GnynBasjRFfwJgWezkrpGs5ddFd9u5JJrJ1SSGdPEZ8wLiXah8vLjoGiZZiHL7Bfv1BN3qmGmRaEMcV9Tu2tBET",
  "key23": "HxoaHLrnvcS4LQHcQ75vQdAc1JqwCrygN6WvuACPcPx1j4vxdsN3S1YiBjLX7C56jvwZvpM44DmRrzmXLd1k9yf",
  "key24": "2ZRFMvyfbnbJamDREZ1YMLzWpdgm7NqNfqufauw65SW3Mv6A8fyTkPRbKJKZBC7DSLhGEnCifgP9C7gKu9uc5aev",
  "key25": "5obs55t1kE9Ut3sebr6u8rjgXM8BXuDMjKmgKdLi7ADtHrUFuvJvFhVeAEbZiDMZn1JzdjQ7wLiKPV4of4aNvJN8"
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
