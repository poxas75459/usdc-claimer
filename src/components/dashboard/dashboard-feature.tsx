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
    "5eYHr6tc9qpdBK5WKhvkcszs9cAvam63Rohdme9Zrzhr4NwTS6CYMKk5eFHJTvn8gSqB8pvVjZHyLJCCdeAxnckG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bBXk261FH61GRVHV7wS4V8MUirDEW48GpYrXgi1C78Ty26Xt4Ka7QfDG88o5T4qw5vMbiji4mSN78GLaXGpxiRV",
  "key1": "5Tnf9qefgv68YJZQi2v9Txz1UpVcKDYMfE7Te2LpabGLwyGo95po7X9whc4Pk5cmm5LScbvagYKUxLNaANKNze3d",
  "key2": "4Tfyn1Kyt6137Vib4gRmYLCmt8xdECW8apVC7BLE85kn7kYJnjKjr8hj5QTGBatPRMGba2Zxx3HrrkMfUzdiZ5Di",
  "key3": "52P2zvAAYABBRghtw6f5hAcgDWn7xWYWwXvcDfKtHehyV9YzHGjDsvrzPQUmz7USQFYTP4DnKFXzLqr63k9f3Wst",
  "key4": "SC1k6zSoktaAaBQbxwgpBCfdV7BRYGNmx5o24BbC4myJEDwnnnbJRibJkHsmnMLVxCahWJiGaD77ke7j791XXUs",
  "key5": "2mza7X6XikNYAPuXgegYnmtzRLfrrz6f7rSuuczAV8Wao2u6bzsjXZKsdgQrBHNKiBgSSteMz1Zz4LHGcB7tu4DC",
  "key6": "4uWdcYrTiU448qrBTA66Cdym2ctzgLErvE7qFkcUAcETa19fgLbQ7Vqy9RP3uAn4jLijqAEMsqjmg5SmdTH1RNEX",
  "key7": "3BdkyGa13LxC8e84vUdBSDyabq5LA4NYjJcMBonfpyS1Vfr6AHCccFcfoNmKDeA5Yyzh4DuHXRiYm4JxUX65S675",
  "key8": "4VBa5RDV813kUWF4vauJuCqkd9XfoXpKino1zt2FEYFaog4hzDYKTrYCb2WDuryUDubVVe3Mggdk63454csBu1rT",
  "key9": "4Fzm6p15hvj5EZb6LSxQNuVgVeY646cHz1TVM1wez4HX7FV4vGN7q5wvMWQrQaNbamtn98Zivt4kE56KyP7Fg88p",
  "key10": "4Zy5vpyBnDoJEimtS1mgRJfYw8HRP9vMDf8WNZa4E6sHHR8w6ZxLYH1hXkodZ2s4fMe8Mb1U8XujFix9pqxzcp4n",
  "key11": "fZsoK4Qk9yK8o16rhjpncjvsqEdHGk3fWUTcqHJirTRqHfv4qtPM52xWfRCoCCnaW99gV8jDALoohSBj9tPCo2t",
  "key12": "4PTjZqyy4xRZhYecGWqKfe7ABHJDdHiNDrd7sDviJfBVqb7joMLpmD667UCeGnyGCSotq5BWf3U5fPznbCKYSAXV",
  "key13": "5ZdvPYJvfKfMDT4SeMoRQdeNYms5ozHyNYihai1SzTwotdhS3EwpgJgtem3wL2JtWf3Uiy7NCsoPeNEURXx28BxE",
  "key14": "2CAqztTPKY1vDm3T1NZkrkzYUi66NkYzJSejuFbPpWFrH9796Q3TiCErPw8aoTjYTbak6naWFiuVzw5tTZnFBk7P",
  "key15": "5Rs8RSuRFCo7rdWNdzFffBvjadPTv7PGqfLmgU1RgcwRJwPzFUEPGHbo2uAxutnHLGuyLsEeaMSvHdgakg7CuZc5",
  "key16": "r3GpKcgwzqNK3MSaqzoHCcTufZWE1SKPDsTrmaY17Cmp4VUTm4r2SvzzViZUnKoRAqa5e6KCJDGt7pALCxH4XyA",
  "key17": "63gsjdRGTFAdMDz8a8r4aSNNPxd9BqKY7Qi5iHa4Gt8RB4zUhPiYr9NvneNk61E9R7FerRt3gXsQcbkCg2zRCixB",
  "key18": "2s2uGYRYiNFcNa6ZgYJGNJAVNaXrbBBG32WvafSq7VimXJYuAbR6P9Mq8Q8DbJJyfpqse1cyEvVGqNTbCin5KwFy",
  "key19": "3BtMcEg42NRe9JrpH6x6HVd87BSdMFx34FynjFPg2vqsvwVD8KQrPjBMYq8io5ncrgMN56XVC8ohfacXgF8x2Jvi",
  "key20": "2F7mZPT1kLyCNhibcgtwWs7GU8DkYSNG8aMmTsx2sEKyNAdFxt5UG7AY1BAV2aJsy9K5XNd4GX5f2d1FC2NsGtiE",
  "key21": "3F5JuGn3sJ4joK36QPBLdYY6to6Fw9TZW6cuMna2hZVXyRhHhHi3ZXr8yHPfXUqkksWfA8v6kVhu3V451B2iTz1C",
  "key22": "4YXFVq7MqxqAJ7fKpnZFMrqe61YKzGknV7Lr6p3b3Gqrh5cK77ZUNJEn2qHeu8bVdkAguxgUz6nKuJX7U1cNJQB6",
  "key23": "38cjJsidukFXevgjaiqVpr6ZHgsyBfLSgwhk3tC2XE3i554jWrGoyzcs5fKyaW5XMecnovPMArayN6mdLRicvgos",
  "key24": "57rnstfkWjRRfraqRmVwiYPbTyaLAhF4EJ14HwWSJD7sqUwTqrNXE8NtC7jhanBrLmtew41pW7KzhCzoiEy2W5Aq",
  "key25": "64aithGpxvsXrM112hu32S2tU2o1GQJwEy1cHwZgCQxjVZExAZQ6y3JvUeANPKvm7hsucgFzWkkCeuhqSUinU12H",
  "key26": "p9cEc2vqyZSUq9RCg7NXLYygaH98LCwQjMegxQjN6NLQNEYfxgNvYvpPsQeyWihJCbKd2SFYRKWh5QkEwDZi1eE"
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
