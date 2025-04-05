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
    "5zEzEP6M4tiFF99mQVK2mybHXdZGTMsiP7rs5saZ1peGMEXgMB289R5G7k5L3DQRMkh7mHC5D4VQeq2f3vScgmjE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DbkibbCTpbgW5D22Q2NE7N1B6EJTinVfNHpyBMFkhbF4jzPGiH2nxLLXTieEmoihN8nvEk54vDM5cGQdaxbWsho",
  "key1": "4obTdC5APKixM8jko3q3sB6cSe9g9WLLodqtLPms9i76uSntqWVDGV3NvmzFort1tewqN9at4pqeEP63Q54EVadL",
  "key2": "yTM64VyMndn4aSy1xoCTXELJForU4cXeUcsdwJVefdFxUsMpUavMU9hxEN38Y6Lxtkyr8jEmtJQFQAu43aL63dz",
  "key3": "3oNTzMJ3zCExMMBwgBE9i7uKsnfdm6HHq6xCJH15eJBPcLrxiWkkfoqNF7wBXGQPFyQa9Kcw3HgYc2chnQygvcut",
  "key4": "2eU68zz5ymC2VHbcfx8fRMz6goA2mXNr74JzwWK5SSC9mFKo2jp6y1aMZYcZqoyVXmDUhafiRyP8HRhtG946TLYM",
  "key5": "22B9zacRyz7dormvBKQJavWGQZP5yY4ATDtFYQzJ8Pkz5dF2cvAXtWYqzR2T9RbzCG2EgUkwEaRyCvxNYMUEsnQc",
  "key6": "48RikHyKZHiy8C5N75N9147GyswGocSc3am7ArRXDxRK9sYBVuWzBnwdE81BWg2kx9b6axh52fWdu7t1qvqcPX8H",
  "key7": "3qcNikLUJLrLa4qVn3F71cmwqydtj1M9DqdiqFbtJHHg9S6ENUaFQFXP826s9XSykmCxP1ZkYokbNgeHzsQzm8x6",
  "key8": "59UKXe4M4xF9SQ2gHk79i7VfT5jP7rmuRp4nR3FproYBZnrxG2SmuW1fuf9azHa7JGdvEMBTnk6KmXXxa7b7Wv6B",
  "key9": "4cCZiaMtcY2tj13bYVh8L9ptg2iBoaswtLAznRoaSaQfx23wWaHvz8643TCLEwTduvb3fiEDJpTdHZqpzkgh8oJZ",
  "key10": "55iAmvzjwNupDuhv2S7Zy8UM3A19CodrvNz4wyApst5ELBv8mo7bb4BDaq1XJ2XodHJuHXaTEkS8AStfMTZ9HjVg",
  "key11": "2F8yDTo24KhctyxHjiXoj3QzEammb93RCTrXNDVMdDEBJe45rvxoCRr1Z3ip2BKiHZ9oPjF22VSXJciF6paUNGBJ",
  "key12": "5xiivnh2NWHnbem37r1S7fmkY4h71zEMfSYkvJqaWQwe2iYrgGqkkWWfeZX6QkoPMUEUKTm7m8MR9wtYQVrLYx1P",
  "key13": "4CwvNWWXzY8LLBvkBM4fatFfU19s3tEkxeLuFYxYqsr3rhwPcSxGXBpCWT6LjdHwvu2cR37xtPPzUrNT8uGCeyQ3",
  "key14": "4FC1mKmLpX57YZqH6HjYA3jZZcx69ZQgjeW6jUUSbxt63W4cNux3xknbasYHSWKrLQsPcANYmwoD1gawEhYyjuJZ",
  "key15": "49VyB442kc5Hx9A94XCdAN1LN5gr8fxksqRGZw1MadU7DDcUPVEfxLGHhMuWgVtDuFnvskXSij38rD5xf57PwQeS",
  "key16": "3rA7Rmi4uzNr3fSNoYvu8PYqrF7N7NXLm86N1szM8MdBiAa6pQMdRGD1uPncDoKovz78riis4DmQdWeYqrZU1Lia",
  "key17": "4oRLUEsZ4FdA7aDtF2LG7oDpwosmdNVATLw1URPZJpsqPSLUAfkTrt4AunPvKvyBNKyVG2jh2GExN56StcsdCwY5",
  "key18": "2c8hNPgX6Ndofo6Hfs493ckLHEou6na1afj8oonVYxfWyzD7voJkuPm3PrS1pme7vvDfJk914hjCiwbBqY2gNRZ7",
  "key19": "2Rekt3yeYSeeqQh9z72wzNysmoZ2pBamTq9YiSq32hRKxTkmr79wu1oDt48eD44HyahXETjN4rujXzveN376tFcX",
  "key20": "4qr6QAm6v81yVDfnAVwoJiByMNRcyotoW8RDMbcbtTr87f4AU1tev7iNMXVY4FcdXTeLaj5wqjD37oyPP8jGAZLC",
  "key21": "3eV7aAZEXjuufGQhWCLY1exSwuQ75FJ431NZm7nf8AGwJcP1mYi13C4VD7ABDQLrf3PeZWFXPQQCf8UYqMrzfgA3",
  "key22": "nBLBEiV7zsb43T3YMS5my4jCS3J3oPWJmqpfwPwJE5mC356yRqoXK6sPQ5oNsQqcReZJUPnNZAAjJNrMKfeZt1t",
  "key23": "honKYvGpFpySVP7QgLjAqAha2VrxvESFYT7HLt3bbPEtTkvJyT8tj4BpUcMPRgWGTcobYCrkS2wLzbxryZvYKkP",
  "key24": "9BfX5uwcCwEabuPob4boiEoZXpumuy1t7JNUta1kDkLpRdngGC5m2ranURgHKqQFBQZQfhF3C8NpwPxjPWQewii",
  "key25": "5DTL5VBeyxmiukQR6ZY5jDkX1JLbunSgHEwonjokuxmuc21kFPRFDyJj5nSWbESZjRiKm26fxKajSZWLcnvmfUS4",
  "key26": "4abcPYoYkBX7UyMiTD2w8HCxgZFnbFPMcA6Gej1NqzbfLvL5Fmi516Nrw9AmEW9UjCW5o7rmkoo9Pynzz2NXvWSn",
  "key27": "2ZmsLPTkPQLqhvXBbRGdh2s9gohnha2REvQfx7GFDcsfMgfkztCBJjhP5i7Rb2i7q2KCkXkxooS9EdJyDp3dDPra",
  "key28": "2r7W6YUQbmwvmfjgE8yLVjRSjkuycDEsdXw8MVKsFEHpmPNSo38DVFZpseAZGmwaE97ohcSqL3LXYmwxpkKqWUyw",
  "key29": "kmTSugjsXTU1dyPDk4ZTxQPfbPrvPPwNi9fCMUEWDrKvZXDR9D2Xp7qgnc8mykos4o9iedFcfYM7zPmNDGPuoBD",
  "key30": "5JupqHHHVFJwawmvqWYX59u6zR7BABzbpwj43qftLxhHGrNNngrL1cVW9pHyKkNN1b4EmgoRpJ6g4Gs25STaEpe6",
  "key31": "5LmN16hekK8aKiPE7sNgAiEZvpEVhUbFjjiQrths5sBMbtbf3Pm6haXU8okwMPRBewASyNiHpzmEMW7emw3bbaUc",
  "key32": "2kjF3E4DxuTM23ZxHoiBVppyxWEdjANuYiApq1TyNJXjeK5TdDe1DwaBcV7QVwKBLgnXyitpYCCGUJUxL3sc15Kv",
  "key33": "4mbAmjoN7qkJWTuEeNdG82T2akjhTKXRGXkirnodw1ivSn6k6r1PzxtyuFTS5qFgv93io18QKfhtNyiKYXXbrQ8",
  "key34": "4yZjXwZfgGtCs7s7bTrRwDykRJh2tnMMbzhmdUFzy6zDgW2K1XDFzAvEd6jDTk5BRMD22qrViN6B6e1qid1hwhY4",
  "key35": "41pPrTAmruu2DTEjw77MximV6xE5wqMzMCmwwT6Z4LHqRu1fbwqvuXUL9p1oipknsdd2vGDfJToDWknLa5LVhFqL"
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
