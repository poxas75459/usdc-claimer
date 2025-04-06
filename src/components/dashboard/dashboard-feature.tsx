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
    "5QMvx7BpLNYuWVrpse7MzyQXCDsgXZvydX17bku8jb5q9XsyduLhtmwwKRpPws9Eb8XguJAdnRVazXqTw8YXdkPQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nqqh7iM2oPBYZUPyuT5SKipdkiF7ywant3BWxjkxDAsaLzkzK2D45hCLR8HqRgKceCYhxuTYSLrEqiduYCzgojg",
  "key1": "4mLSnGMKxwYfXk1jf3NYb8Adr7ypZVtDmUWeYwz6jkczmmrd1j43QksLjVV7sbPusbadnN4FXyeQt1fkvD7AXVsR",
  "key2": "3AEcsZW6gtWHjYF9Gpt2QD6TFdj8DtBh2vXA2QjSbuShg2JGTK9sHXUtgHqwfqc2xUe8UPnEn2pEnnhA154S8NqE",
  "key3": "4aiqiWk75LsPeqQTdhP7gqLe7mmbom5RpM5Wo1YQk4PzXFrLX6sUMBhuXKSba1wC2hNFKcA4K8oWyav98DRMdLio",
  "key4": "DtujdkhTQownrpvCVz9aTYZdagRuRgEfWZ9ZGn1oXhDP99EUNPYcebRYP4kzx4YL7EAtVyrmvFa1ZTrafx4Bfct",
  "key5": "5ivEDFW67GLkMDAbmijqNT4BPG7e2FA8tjfNAbYiGsuXi43Jx72PrTVq7rSbwHbQCrqnxZNpnyFKdUwxRp4u2UVR",
  "key6": "4GvFWsjDPRM7tA5tutoPowJ1sSZE1XFcZDrsZxE49eN9ZFHPoUmTxtXL2iJc28SX3omiQ4oxhUVkRQTNaPAJDAbK",
  "key7": "3Td9kmHBkEN6LrMDLqbFz9kwSGFA3TttVsqTiEnwN2zrj8e8FUtKorP3m8wpnCHJ3iw92885t1jDS37PEbjdPiaR",
  "key8": "5WGUkSgzYc9tZvth1GGzK68ZUpPgC86D3jqoKyx8jCaKc1tAMs6yDVgkzSKVRBv9iY9daAbYVXmp92Q44yZmcuf6",
  "key9": "5nUgX6uSZFVajhTWoD7w5d9Hj2Qphx8jcpt7RG9kgfhDFb9a3Y6zSZAj41gkhWZFMxW53Yhgn8CToqNG4Uyr5sSx",
  "key10": "2cgb3t6DYmsXdePmfttjGrUweaa3WNHWdbBigXhtNn53oCJFw9CSAfze3btkutPRmRUzrYZYb6BTBopVY8M1LMKr",
  "key11": "2bba5rD2Ne825PKWNVbiEz2XpC5Y1KEup31h1rrUGpzkspp1jzbhVsKr65Edrmvv7fFSLWjwFYptCv9pg1YkJLZU",
  "key12": "4rS7Lskvd4AgQZbkjrgwSCBddFDAZmhAdBDXMkszzGAfHpdS41VXnVy4toSq7r5co6RDSCfyVZ3XkiiKRxfNZKqF",
  "key13": "uJ17tVmz7DnZ6rGeL3oVGKJ7bXcdTYd4emzAVwoNMQhcwjzWGXWLPSf72mEXB6zDnGY1sfV4biSt9Sut9a2um13",
  "key14": "4TKDDGD2B1uP7c8jTtSPfMbzY4pf6WVcGrRZXgQ6z6xJ8doNHMEueJSnBRRYCMNqffTVazepmKzswckhiRYfSzuq",
  "key15": "5QaSKgGVpb1Fd1YmPRpMUvtppgEwdT1wpHwyTSuyYQrz1XQWSHv7cHnxQrYHUabW45jVFWfRJgYnbAndtWaAds9R",
  "key16": "4E7N26cNrK5XxbUfauYkWSsNhpY8rdFnEWsyAKrfHFPuc91QpKPVCx3iPDZWQwUMmtFFP62Ust7epbA9pHn5JM3Z",
  "key17": "2x64q5pkHQPrqvjG7oLJ7Tgx7pApv7wAAE7ZwWTVBLEPYSwciNGETgXhDt4mUvb6bXeqroJEvQUvCQ1hjtf92Dtm",
  "key18": "46caHBiucvfQVNdwmB1gy2fAwgm7B8xisL5AVf5Wbtw7PA1KA9v9G82711Re9cCQpJZQR8Mv8UFM2d1at3JgSorB",
  "key19": "4YP9Kv3fXCDNR33tyDDg8Q4ewtPsNNiQkf6rdmBRgieiKNqbjvTgMSaFhM672iuhBqX1pYeznLPcVV18pm3yS8zC",
  "key20": "5nP8JEfGE8ApHFKTwLBqqRuEpJvGifDeayyzEBo6LVhvnwB2RdLGf5n4eGcRwewucW47LgdrNKyNpn7CkTH51mQr",
  "key21": "4e2A99i6o3yEUKZ14ksCqFG2gdy7YJ7NKMaagAzmf9usY4dSHoNcUwQNrbfhquMhCUrZaQSrWTyGBwqrsVzZzaPH",
  "key22": "3nfqXfhHeraK2RCMhDJYN5X6UawnNa7F31rydGuQzaT3LHTGKJxZm6dkEpdcjSpY2oxPvaAD6p8YWMCjkPqBSe8H",
  "key23": "2v3HM8JGt37rrFC2e2zPZmqa7DgES3xsggTSX2pFo3sHtcEU3Tmzeg83u1DF7fPLEWWRKn5TbVw53DLihSeD5Y1U",
  "key24": "5KbkaB5ozWp517McNcTPPadaxLTDxVpjmBntbfVxR9obvBXph9nrQf8p9XhG4M6EPoLALRKoARUXcx9CtBCaGxh6",
  "key25": "4T8UtKdbviWUBDm1TR9DZCLE93CfcMirkTLFTTPi9cxd3rTNvieYW6gPNDEXzU1DYRMhUeZGo935tfjhvkVKe7cL",
  "key26": "61pYqSfoFTTP9ttckf8krY6YyaB3X8bPpRaUPc8QeQTwLc3afEJ2M6M24yQAqCrFMAWzUyj2QMFhKs3Cuoi68AqB"
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
