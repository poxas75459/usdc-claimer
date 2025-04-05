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
    "cCpczk9woUbk8eXF4Tx1pUNQRHABMzVe4tL5UMxGoATtQVKrZ7PuJxAz8KWrbmb8d4Ez1cLUwSTSwXBY4fgcMDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A7UQdMrabdmMZUykz99HjS1THqmarfeJcj4UXu9VUJthoKEUsTgPwzYoadEGvtyskaf3zQdM2UWhXAs7dYa4ksk",
  "key1": "wH2SUNSX1Gx71NaT7b6iuBwgMxZbDu1AB3AcCpLh5dUSBFV7eSZXDDmg5aRVF6njdiBHeEishXPtRyFCRf3ggPM",
  "key2": "p1Vd4pSaY4PojrPz5dGvR6Q1MTdzPekYCxecGAnG1tfi3kMs6GGaWsoE2ydUVEiPAtPvQjfm4zUWSk71vjmjizZ",
  "key3": "2SdhJ3isGz514kE6qTW1GPRgrVPBfXh9XoAzbLPoR6BJh6QbcTxEBmRP1rpdqfTnBpPw7QgXS3Ymp3Pa25MCptix",
  "key4": "269hCih1XTnGGBgeLeCoCLT3r7WPdBNrD5QboTbN22eejabUCgvq9cWiJEGk5uZAh333Y4o8hZ8T1E7E3Srr4XSm",
  "key5": "5JWAZHPUnZjifV6NGcuvp5Lmpw1fgXioBT6eVUWTPtnZrzQgj2VVQukmbrp3NH8aTNHXhcGxsU1nJ2snPLMtVsUP",
  "key6": "5jZgUxZYH58yiymGsutv9WY13Y8AXn6WRAxwBQ4gv4aUpuRyH1CMTJRr9DwdhgCKPRKVfd7fybGvkkYvdiiAQQKd",
  "key7": "3SsAWA4fRaHdjseEPvcwfdDnKjrnrwmehB1RnFrvJVxpELGdQNYeVKotnHLmyVsLxiYjVZ2XRfbv4HDWBhcDvCbN",
  "key8": "5v47U2wU7cXvL19CudVubRFWAGVUVzW9Jge1XNRL8dUtUDe8rhPMaV9JD91tu3dyooC4Fe7q9oifJdNfFUoFGo9M",
  "key9": "3rhhWBGmza6FfzD5S6AqnLk6LJPGHtnNkn4gtzCSNSgFD9BC2xoZw89v2ZJFSohkSQFF5LYmQ2sNgTjfmqJrnPVX",
  "key10": "3ZGj6VuhMDkRiYb4QquRpMPFTw2EnWAr1JFanSZmw2F88PFszmYLB4JyZ1RHoyL6DkRg11SU9jyXXXjgwUB1199z",
  "key11": "2kEjqyv1YXGBntaANnuxgZFvyTv41YXKEciQbQtwo8TmULUkdCLFW4e9HR2nvgZFKj1qY5MGSH1tbNgH6feuxJAq",
  "key12": "fLvE3p29Ds6dXftg2SsyZK4z9ym9BTYpvvNioxk4rFvDGRYRb8DA6e44rRVYP7zkmX7zNuLRKBwzYEg2AB2KSrw",
  "key13": "4WyR2hF1g142xaHwmBcmQkRkojisjQ1HBPfY4aBiBBNvmQnWbT27nfCShjbt57MQpW4JPgTjV9DJXPxJ7Sc59t7o",
  "key14": "iPRpxrjED8ReckK878eUQ1cK6zw7zr8Lq1VrPAyRsxz517BWR5QS55VUz2S5noZAo53PJLtCxdtdu28JxeBRuCo",
  "key15": "2Q7qhPRP6P2VwXXG9DR8wtxZVwXuKyuAiFg91CsYo1woUYx3LrDdz4wbg4t2N4aF9JMbe1mtpyFzEerG8bXUERgn",
  "key16": "57f8RigMPb1qEDjsr78f1UdUL1xuFTh2by9F6ZhYr8yKcSafMRcHBYF2NcDLE1Vq35wu8kDGnSKesvkWf5cqgv1v",
  "key17": "4n5bxaNDVHymF7y8rSyzNPNZbmrMsnhAqRVfdsJm5h2UDgosxd2h9KPaW6yKTL62gNZ7kQWv1XXMo6EU3HuB2MxR",
  "key18": "7M5sQhLjxMBFhNbPQERvu2RPsUsK1iviGwXhmLwjmdMzyBm9jpDAopDb1Jox1pcFWR4Kx8rvWD7VaNzJJ1NviwH",
  "key19": "4GHb7tVZHeMGLfHJW8BUZMWNDCz2KriDJhCAkvmpkaHktuP7TbgssDX9BnBMcWpANEfKtyjinvimehBF7PgSaV9n",
  "key20": "5Ti6V66z1Sf3LWTJpyF6CnG5aPMktaQprixuM4hsrq9gWL51schq7BXJrJuT59ZAAvvnXuF5fnMNgvpRw4WAV2xf",
  "key21": "4VZ8biKkzTnGbAfDxWgogyEFzCsKRaL6WXpyY5Li9wHSjpPDFbzCktoEasfZMHp7xcoVSrytXitPTwgz2vZwFf28",
  "key22": "v2LNm95yWBi92iXc7fjypEXbWY7pmf2hGtMKCh5Asyitgn2LWeEwGbZvcqYpWcxLBibtBLvpEVYYMVua7pCu4cX",
  "key23": "zQpqDoH4P57VdgbaaA3d729FPX1tDCYeFkuUSq3ggVCSpLP4Q1exaCDSBhGA2fRFsGPzF8KYzWrBtGHHZ6RFS7g",
  "key24": "2vHiGcgZ9yeXQLigi4KqxoZCcwW9Lg8o5YVgS7YoiFbRCjzS3Ra4HTKNw7fLuwCYTg4ro8FgrGLipA2gQv25y3Nc",
  "key25": "6CY3FW5dx1fEc9ihkrRxAdznYeMguB3PhDVwkeogz6fDuc9P9SBKvV7MfeG9DDwXJb4kaqA5RR18C3mfnE96uuZ",
  "key26": "2jRgZmEHmvHzNMXBfMw5cNwrg31vGH6GJA5HLzcGxdaiM8vbo4GQmsCroSYYQdJXrEvDr5CAHw3F2Z5ghDzWiRBh",
  "key27": "5edZk681ePokSXjNdXDw3mb3gGsdeqDXUTYEPnLaNoBP34mKjhhQwwpiH6VNFfxXqhGkxsD9LLADCFNu3EEKSas5",
  "key28": "5VpsnUS32FoER2qtyGNba4DV3D8ro2ZiQpH8Tdqs7dV54687CfoL4qrckL8zzTeWWszXaKH6nqHWCTicDVJqHVfE",
  "key29": "5Lx9nDJefkhR7BxiVD63kBcmN2QmsDRgnfVFbCeVsX8U9yknLfWWqWLBDLYhmaynfLbc8MS73dYg13NfuP26ffEq",
  "key30": "3bJWA9JLYBtnExYgb7QgWff4GkWqi4idCFVpZSNjMbb7Xdriky7opURYKnSFbBFjtT9WVZcbxMEmVSVzWQZJwgmh",
  "key31": "2rdc27pTHeDmW32gtx1RhrVN3CFGRBbQMcGab2fwtxwaf4q9UnhRHEnzq81Ep34R6nCfJoD3bCX434ReL2Ku2Dm",
  "key32": "58EaJYfsCzWnfoTtTvh9KRN6stCQ1F1DBs1HViXtioyVDEuzG72mKnZQdVhab98GFnbuHCdLYgdu2Qa2hwqLskgs",
  "key33": "4vSTYAQVmaHuM7txngveSwRGtF5ufWUfwySGpjrd11LMbrWJFawVwEtAFPthupmxkPDs1z88CnP1moCX2P2sD4oj",
  "key34": "52C3RGZ4tJDfWAqocKWi2eKkY2F8qeunhqUSwdG3S5B84qg8WeczVec9VCwdxBwL5JWAbNgAwnqeMts5PogKxkQR",
  "key35": "3fXuwxdWsoF2kT14qYr638fH432Rdvkwbcgy1Gdms7gTUic6XBAGFws4V196PtYPMnZKc7RqrjMKAU4qj43oN9Fu",
  "key36": "4Zk1M6B94ZNJWXoTS5BPmmhTjctSYWDvz3KEk9FjJCVUKzwgF3yyeouqja7EdEhyTX6spsVPEMFzMEjmp3YLGPHE"
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
