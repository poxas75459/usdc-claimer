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
    "2ZqNGTuC2WmakkGGRKYdB2MyNgvHpmTNg9ajtq4BbTHBDLoLK5Apdtws1QFpTN9UrFnvzL89suPJkBqDve4yYHHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27riZ3SSb9jtwS5xUFFuM5ekTMp4x7E2aUYg3wmmHzzTih8dmUFsLqzpkEAUhUg5YjfD1Cb137ZDVnLBnyGbzjge",
  "key1": "54FWaovMMaUp2bDLfDF3rzdaow72hW5tZC1PM1NaoRZa5irQcNR2d5Z6m27oCkjTUekD4ZD99kPkFBqoXCRtstJ3",
  "key2": "3EHmjeLX5mzFHhLawnK18JgV5QicBLqVxZTfo6xkL9zYo9AFh1vrUyE2jaBobVHEAGnVVJVmu9xAwa8nFiUSP7hu",
  "key3": "Cs6oFXGP7gcVhj82iy3PiqG6d9vJmwsuFXR49gSwh61e5sPUf5r4sgVFPDfgFB1Xcov12x2rum9zBmf52kYTkTo",
  "key4": "3Fx64fXVqAYGeDFVbwFAxFJyeSaC2SmwdK7N4UB4QCKsVtVnNtR6ejKuWuCnpH1LY5nbmfU47xyoHWs9M5QCLCPx",
  "key5": "5d1ZLrn2KTxSa43fdUKwZCdV4iHTqB1o25if8ZWYxC1GuyDpLLLPkFZMegg61r9r4oMgsgZRe24m3XKPfkMDptvz",
  "key6": "5ri8SvxtikYcrQWJKYhRmjreWBpzVRKc5Ebv4dP5skHuBKkVYBRUtVDV742rRi1HmxmrGy7oXA4QnEkE1NgYTdB5",
  "key7": "5wbdbaa18SBtB2LY1f2t2xEQ9yJmJNRh71De9aSx3TZUmou7Ec3FENqf17WjjP9BFNcA8gwwEgsCTSnJFuqXsQKU",
  "key8": "2MPy9amGWkXQKB67kRiBAmAN6Zc9bsTWSgW7SjWMdSEcLLfxw6o4n4crRi6GubaekVU56kXHadUDJAV5eBtNoLsL",
  "key9": "5EJ14jfaTtbNEZLkzwqmmcUYxsBXn8hHryC6hf275ab8nRjqaFrXxVNCYyfMndFP9hRtSjLDAma5FuMVw95MRcJn",
  "key10": "2xsa939RJdHJabVJpY9Z5YJkD9nswjwCXdRNdvkWcBpiMzqXECXjHLmMChnpYLAZZkz6civQ385tSuDg2RNZHTZ1",
  "key11": "4ngFn2tm8wGJWVEFmMZ9UbnovinZWD7DQHKLhCbkN1imMn8vjcrTi4JhmZcyLe7tgMPqX3N7AzaE6WPDddfEpUK5",
  "key12": "4wYs9udR1sZTTveiKuvnmmurT1DoAGAGbkCDG56pMgsstYRLBTVvPWvNL2a4zXHAw8ViU3j5CcFkXXdDuufKwcNM",
  "key13": "PYMF7Wp54VwsSyaWTA4Vqr8eAjdnpjf5bWuiNFZH1BKe6Mpr3Ttb8M6tAiWbfF4YbFW62GKvaxmcC6HS1n5M14y",
  "key14": "3936GQJ8nfPyGKkuXivSECNqkUJpKR4ZJpWWnPBHSfBxezB9xQjf6kKx9ce9trtHqW5Yfvc8MRzKEWDrXV1bdDQa",
  "key15": "7ukeJi2tLRr2AyrNpjt2JHuwdUTsmTKswiZwzuDX1XcJ4tXT9fJoBLaTgH7ckDQbWMYJqGS5RxHgqfDDhjizbGU",
  "key16": "64yTor6qwuBFgWNrSVjrSqvnYc2fxkCK9vCpHU9uQB9HhQsSfBv1nEYn516YM6dJBP3jDLM64JpMWu8KfKbNohn1",
  "key17": "g1VUBroxxY5B26utb1mntJLU7JHojVWzg8MEbBx5vp5GB8Sq2kxAVxYSJY1B1a9zYWp3uKXasnzxg8jPJzu8TPP",
  "key18": "2cNXGP8LJxwZFBLuRjyHzUnmxcHQJjE1hTSxi3QDQfc2C4Az75p9PkgGgkbc5Y9ZPuaMC2Vnc1Kb3XpgXRH5hdz5",
  "key19": "3csg4gMu2pAzFbUNAzFGhiUfoP5wfMSvtww5d7wzskVvkWxnfVfFgVGihBFNDBvNHwium3Jv8NXfCQAMVwR3GWoe",
  "key20": "2FNLZxxjLWEYmyvmDaUYufVnCeGx2S86qRTqfPEidTVhzupsiTGNoBEH6WrtRX6MmKkM74G8X2e278GZdYV4kpfd",
  "key21": "42TEuUQstehpHcxL3xW7vHcHdnddgDHh1MGsMUD4XGfFyvcn2sujzL9hqQ5EWuKKg9j8bnvcAuBpDx8x9jn6Bi4q",
  "key22": "3KqMgP8roodBYTaWN2W6pefwXaTELsVj38BiWm9JTmKpy6AMmiagPEPvtKc9MXq1cJSwqWDwi9XApzhKJoXF7X7v",
  "key23": "49kRXKL8ty2EA3o6CDXCYgUyK3mHhMKS3CrYUE7ee9GwW4w3isqkAArrAfkJjgA8Dv9BETFkubMMiniG1G9brMw7",
  "key24": "3ywthUouJBvu24ukYqrsbMLEe8ExhiQUkiXRukmuw9caqRaRPJ1uppKe6nYkQC6GsUmT1Fb7NqmdQW2Vb8Rv3x2G",
  "key25": "3AjmcVci4nyQxWXVGcUns2jWxkeY59DZNcApB7eRqAbenEq2xr87RpXzaK1L81sWMoM6rMPpmFtRQ6sekhXGfwmC",
  "key26": "3a8bf3DGugj3S635j6qB1Td6jWygn1xW6ySqd2L8JkqWSsXsuqqXvsfZwnKVGPMBF3JbAGWYKb8uBnmxmQFnRqtV",
  "key27": "21UZc33zTQPxjaRknGP6ZtjhHMdybqbPf9zMYYyNsN1iHPCR8mh83nDAaVf1gszPpp3MVFEA9C6bYHG2bNYg7rjk",
  "key28": "66vKWLcsgB6bEbTPvqaqRMcmAn11Mg1G7UGzPZpjzMDHLmWA9NcL8ZVtD9AFvgGLvhgfojznFGyRYktkscAjBZD8",
  "key29": "5oAa9VRk1eS89vW8ztjoZGARoXigYju64xfScLVSpmg1oCf3asMnZqU46RTCKUvLSdNQ58yW6seuP8pMcunBQgoZ",
  "key30": "3L7xmNmUovZ6zyauzx6GHsJUJEuxyi1wGHchw8k7qa27UonR1vgDHrUBQUsSPJApZhLDiiDndMU8hNhVUAUBvDAr",
  "key31": "5PVF8P2BGZxzqxcoYKGTKJ6fTJU2ThVXY5kvCgcM9m8HbCdbhzJHTRYE9LfcPn6shnbYkgQG3FWRf3vKvxpJomQi",
  "key32": "4fUYjgSsAGgH5EkQTHtLVrZcr9ER7FqPp4otBJQx1bcSjrpADzAhEg7aaR54Ge6qURAHGDdzjRtDasmEUyU3g12A",
  "key33": "25BYatLAwN5Vzjkb6qhjbWWSxpTbwWnxE5iu5ZDLo8B4P3PW2pqc8o88TAg2JySw8JEVMTqfJoZAQqFCGg7cy6Sr",
  "key34": "5SLdQqYf1RXJ4gmw9VXtQBGUqyvWTkDLzaoJPpgt2hWdPRatBpzc56hcnrUqJ8sGMFe9sFma3hZyodUATvUwYroe",
  "key35": "MPLVJFVL1Q2VtPX6U6ebDn2bm8mb8JMBW3ZvporNnX4hifpCkPvEscZvQMq28cbEPp9WwJmZBoezjWFErMfqNoP"
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
