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
    "46cyaA34TKLyESiFmvyppCbFv9PAVgWrZv67eB1uCHc3J5bAv6ovCSyZxj83xTRvMjZKwBo71JhJgKTKgmM2SNx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sCyqdxUVoh9sS6zvVQFVNuVVAj3pzaFqaEu56nRzEZi6D8sPyZ5VLZVUMn1gMv3BL4g2vpzdUr1cTEVSEGyhETg",
  "key1": "umevmr7MJonbhzfbaFDhKHVHa58NnnUdd3Cdo6kekawQm88gfQ4S7ZzkXMepghYKT9AtnGmis3UeYd56KAUM1F5",
  "key2": "33grq5fYchPTVCvPXfaf42xR3qs5RHfZ8RFmLirHQzjsZzU9ADAFju6gtgysfj1bwm6isKodyJHrhFmUXoEaqs9Y",
  "key3": "2uCM4RTmJv8NBg2gc7XpNH37kXxthj8v5Rcz3E913bH2zkbYmH5b8j44rb2oZhomLS3fNmMPNjBWkFcnRvq9nZw4",
  "key4": "3HdWENb9Nmbmh8pjyevdPPjUoS2L5yKHGiuDjHDkNn17696ov9JdWxnfHKb7dGCCk3w83RMV6t8ZNPApR9DF7LAa",
  "key5": "4rCwQTaRFwLUAs6d9FaFvAnFFw2SVuTV7TnWGD17m9thyhFeadGArjLzR3wESt9nmRzWV3Zc3zK57rRqcay5zXu2",
  "key6": "4mW4eEp6pnvp6owQATrE4ShQY7PXVtYAoHUvNPHPe6EggEcqMuNEuvkqjNzXyVFCmyFBKhGCXSH54Tf45x1VUHG2",
  "key7": "hChWJy1t69CYnUASaSME2ksVBrqzueM1dsBTbQ9LP9bQtnF76NX3ddpEahtX71R6cxvAEeYLmHf2SRG83AoDyFd",
  "key8": "x1JsLzp8n1HjgURiKLPXVqiAhj1bCGFPD8xD6MYTv6Q9qUowwzsA5pfheuCvYvhEBcFNRDaQ6Vou2ftjbGuP5X4",
  "key9": "5bvDjiaRmU7xaEwA16NBtXjpZcabidEXy68eoHc7imM2k8UMm65cjZgCp48oqJFv1Xzu5L24CvJCaCeGBKv5Yo3v",
  "key10": "2iNVhxBDF7XH22UCDM92j6aXaXj533wUiEuD6TYrw9XjNUDpfhHkaga1UtdWUZXy6VW5xLSDiuV5e15eX1DU7vyE",
  "key11": "mQB5PBX94uZwQuWwbCZPMiEohW5SVWDmWzECQ8zn246CiefdfPgSr4EbMkjyGoJ1ZJjWWB8LWeGWshzp1PRHWqH",
  "key12": "pKdbfUwLZpS78T12T9EF9FnvWzcJ4WSm6ze8QKpgDEuJ59z7g43kXVB15VgxXLin2byg7FrvXFPrEskmzrEy14S",
  "key13": "2xv3ynidqPcKDGFzFZHM3BhPVx7bp6r8ekfmwE2DjYCcGCd3xTnaFJWbcWZ2pPY2EmCXDhT47tN6T46KFhncBgks",
  "key14": "5EvoFgESzdSQpnsRCZRtKqaZiTktNncJxtzKzYNQN4LAQfJm3XkB2y6w9FDDP6Xp53am5vyT3N1Uyq2JZr4aMgCD",
  "key15": "48cysWKHL9PPPkWG13DAdWBqbdXNPUTJ2B2RCPR3icaHUW384KHMXshtbZ9UrREigWGTmAC274aMiHHsZR2MVY1R",
  "key16": "2z68ieF2WHcHEBgJcMrFD8HHVKTq7vxbpJ5kTkRk1xizMSnfrnk9ckkBsDgntGoA895b8vQAZcviooHDi37VZ2oJ",
  "key17": "2WddAbUsdVsbG15uqQA9wnDeFvRqsjapbHX18rde4ccCh4VY2JFdMvRh6sUWNSP3ycNzxmCaJfw896dCkxzVrcES",
  "key18": "2wCY3g8ofG7WB9kQtA9FnnbYGdUP4boWdC5byCNjefjpzBt2WjBz4R1CyamLahXD679WJRqw2HjPjTBC5B83EPUt",
  "key19": "2mp5MpmNgwMNqxD95CgMn7WF132giaCsA7WqGf3C5PfNVJyCisHYnpJSpebF7bH8idXQmk4g6XomJyjJYXJcd41X",
  "key20": "cjUGd6PuhtvmqebWWxQeY5fwcrBHEz62qCUa3wzdxRMvGm6TEGcThPg5vF1diVsbTJmU33EudLUqPevGBF3kW1b",
  "key21": "396bFQFf44ZATnZ2SDfr6zrPKEVdnv5o5mSbpPKw8WikRLWZn679nWT64FbD5bV3LWCc5m45oBx55kjAxmEr78aJ",
  "key22": "4mKvRrcuPbKghs3pdL69PhFmZZrTz2pjEZSdJHf3mQZ14g19w8Hfs6eXb4baHc8mXFoxxiADgJynF8eyV9HzMD8t",
  "key23": "5Dt8KyLEEEkeKzwJYHfXUnAoRQTttvAfATvTHs6dBr1rPt5gJwyLh3L11C6aRdnfTYhvpUCqrmugR7KBv38G4dhx",
  "key24": "2Diwj3yBGnGDKkkfPLigAhio52vXaig3F4ed7Xb3uvQ8t9jacQRvf6ok5FSWLhLeW8Yi6PK1aTq7Lpz2pDBmuteh",
  "key25": "4SDXjC8ZYotyag18QRaFq9xhtecCQqhgKUsPbosoVtAKRUHUcHhThhUMK7sNtYhhve4LvwHdubmP7wDEnVtpof2y",
  "key26": "4kToZKbJjwFpzzZkbVVDNffqvkmrQmiSb8G2bWvnbmGpphaFvRpCoD68Cpw16NAHJ6jQYHhZB2nk9xHdrCUYUiLe",
  "key27": "4ELnuLkNLoAqYWo8Vcec1nQkSDxmGVe4Xi1vqTMgRCAsMpxsdbJQiJJzEZKNWpy2ELj9ijE2ZabQ3ayNVFgAxTfv",
  "key28": "2A76upJoNVxXjcP4iLikULAGU5QLRGBXRYR7hZ2u24LPzJHLtpv2yUPGXVg8sTC57tb4XynRhoNQ2ngBCUnfTUP6"
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
