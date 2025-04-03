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
    "PLmGYpgVBqQA4wPoMMFuEVG2C4oZfBdKaaUc9tLHmdxnZ38Wg6fUi1m2XEJLkArSqNAG8kbAn7UV3RTtSjsxrwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vCPcKaqsrBLnTChp1sWHqZ72ESPjnsBnxvgct9GA81Cyg67ocedZrXVtcNhrtunRSB3yeJB9k1PgaK2XrDqP6N",
  "key1": "2cpYx7XoMNDqYhPRG72pDxv4APS2K7Xh81qcry9sWMiczrB3SGjXya9ffFgGmRoi9PHL1uX11fMx7N4u7rWvcRpR",
  "key2": "2fZjdSTSYkP3JZ2D5rCFHAU7GmEFCJz7Z2RrdfvHgFZKMpnKCAQm7H9eNLX4pS4SeHRdiWqu7KLLpp37wyuHwo5q",
  "key3": "5NABe28qn3GQLyAac1W93P3A3dH6kvhwVB1mTZapQgAESXo7CV9Mr8cFfanF9AJSfouaqQk2h2uifHCWn3YRvwtd",
  "key4": "4kwLpmpJ86a2QFxwFwSBhqiEBSbGPA6xYnnycY1aqR4PeyuRBZVnm75cjRkH2LtzKuQhFDGrLGyidqLmRuYZHhuo",
  "key5": "4n9YnMmr7fg6zy3hx54GqUqS9qyDCxHTfgxacrVkYwT7eVGAmss6mz6PJ4v6cBV3xaVsj58DWRcfkEqbUF1eosUS",
  "key6": "2JTGTskF15cPzv5Pkq1RgZFLVcHnxtqxs1p7YGALHAofKp8EEFuhBrr4Ks54dsJ5vfsYRGCCxwuM88B9Yw4yQUWm",
  "key7": "4q8h5NT1rByXs1rQ3KH5AyWFzHYSJ9rQXTJWWuVPoDcRUbmfRHKYj4z7YF4w9EV3WzY1PGhd3VBaNu1ZaA9oMJR1",
  "key8": "39sL6gX3R1R1y6GDEHDPJqsZ6Ntq2zAZiUuor9eXt5s5Mi6qCfHC7pGTRmZdmWDwFhPyxiWzShPXFx41mWzwxiVK",
  "key9": "5DF3fBsiDjY15oEk6k2PE2qN7rm9aemXHoqY3GE77JZWKjCaD4msumsfDfwWgPnmDS3HCsrERQ9dbVSqWKkdpUbZ",
  "key10": "3EzHpDBRJsCPYKtZWZyCe9dh9M19pnQPjkhY7tp3U87gTR948YiC9ZwXiCDD3iAs1SjP3DZ26nm4MHibMFctoMJD",
  "key11": "3XaUvxDU8nocRgtAY2VPL1ZKLfZ6WSEYgKemt2sSQsfqvcvH779gN3cottGyixtPn3TaSHPdWXM8V5naCfsCUaHG",
  "key12": "4mvjcduerEzoSLZXRXvGwd12V4aKV7XoLj9MviPwZERTBTDG8QPjEJAq3VKKUZPQ44MmWhTdQYGNVDLBGDagQri5",
  "key13": "2f281qj9osuCJuh3jBrZRZ9DTV9TABagL3WNtiAWtDa4Fdoshmm1jHjgx5RHmPnGebT3f5Kuj6qeJ6dD5ioEwj76",
  "key14": "jkLgpuDYh1bBvEaxVe1wvu5gxNUDeDVT6cmuLiDdfXHdgMDjXkp9qbKzttyRkifHq1HmjVQcfbvvLHMKJzwvxMQ",
  "key15": "4oHvV62khLM9K3KV4Gd3SxF1tGsUaXRWGrbcxKehZ3HF8f1XMthzAyZRPFY2kjc51sBtUxmW3WFu4feT1rAfdehD",
  "key16": "3UVq6aCucpawuhfvi4Tw6fLdEyMAupQunYSy1UGc4MRoqAEVFEbQgt2yarGVcBdK6ioPtayjmfXM71sszTSEm3hK",
  "key17": "3pszaccSPM6czEzL2gEmkXZfFBfpcXVkJCpCNTBRUrW57cgHuzo1LuaXuUSZHwdpbiMK1rxPjgdgvzznAyGtV4NV",
  "key18": "UPD4wNezv5hdNpD1sGLQS1219D2xXPR1VpAjcftJpE57SvFXDni5UaVGCQqeeurf1WsiE3ReBzDh6gP7LdDo76t",
  "key19": "4u4UsoAxDogjcKquynPCccee82UN3cssW2CEEgJEGh382Nt3sadYokwQCY3y82gp7q3m729UUtqTHN9VUug9zYiY",
  "key20": "2a4o2xfGSUW5MUD5KPFLvFNrGbjJ74af9jZBhf5Po6RsZhd2mUxkei7a7TXUokmdrLViCwW5ZQZwf6VN8hUd7ZRa",
  "key21": "5X1NVToMwfunMnAmDnkkZEftVxsMAy3MVd2Qbs62bA44f1pPEWWKbkDqNFCTYkg9iB5qxxmRRZNErdU8M6zjTt79",
  "key22": "351H6mzoALXBjn6Hqf9vvCKYAR9VmkJx1gW42VQXDJEnkzorKmW1mHHS5p9NH3RrvenLYfi4FgsKpwu6xauZDyXL",
  "key23": "VPM1CrhTpxM92L6Tj4kCmzaUNBkcjQDkLxNz4y253AcUKj9sx7RyuLzw4TwmP4sfD35uxTHSQFURQeGr9i6c2YR",
  "key24": "2D3FuqZrAAcrNLbP4RmzqrmFm3yz9h8wGzve2qrKgtVEr5RnFSeNYNwfGY1sxGbeJYi8dfFrVeyipd9PrCV4Lnrw",
  "key25": "4obGjFiGJsYV9qBFCxwUwZkniT4aChe9eDzJYS8BH7oStt8LNyBzAD7BpYKmn8eiiR3CxqEyaaJmyvxoqAv2DFGd",
  "key26": "4nu6wzuPE3PvydD3L37SDtzCPXSaCSYuAMWiJuAcyLi6GrAjei2iF5gHWanXpJ97ZZbzXRzrhifq1Py62hPeD2uK",
  "key27": "61L3xA1L5ETCyG42L6sfbEqddvgMNJxZixFPQXp7mmhRXRe8GuN5YNNpEt26MWfFeG1V7VKhr2T4Ma7wPh8iMjLJ",
  "key28": "3StL19ZpoNQZqBLfL8BuCnsjQyDHSBm3uoGR5NFQooc31vhdzfgEQh1tdWqe8MtAD6XMWF7LoAe2SLdKQAUXwiCB",
  "key29": "B48bnYZB8W8bT6YW89ocXF4a6FDAAVZ9Qo64YnQDQeDeE6SUyHA7UWxDsXCKV84Aykhni7x8XwRsqHpewMQncrZ",
  "key30": "5ZcKyarFYnmaq4oUUBtYYHEdiyb6aNm3brRjGMce6KavWNNiEvgoMGEFepyyp2xmKZMtFDipk9Cu6R3fU2UqAeiz",
  "key31": "4z7hR5sTHRcyjX8a5tuiTKWYgDbmCSX4x2UefHMWP7qdkZRAMKWiAnTpTAfEsQdHzvFGJcFCdxTbueeposQbaX4H",
  "key32": "4q7htQzNRRVjFC1B9fBhvhEMGtyjZNGZiuJQs9BJjqpphAfAfyiWv3UajHTGYdjXTunXNDxQ83txmr1CbGG9Ecge",
  "key33": "5GFtdmTnH9CSXKGBv2ftSNrHPZKJLzNyR4g5cLssv29DQMMB2QPU7oNxMoPEM5eHdHR2TB4KPbpvSo99s94X7Mw8",
  "key34": "2mkoXvkg4T7vJ9ASgpD1ujCq2p29qmxm4F9KVBhRfwT5AUy8eFVAiQrgMVvgN3BRRc61GJ4nzD3rUeLkUXHL8hV7",
  "key35": "2QtFqrc1HQTGMFx1zt1tHUjkMeZDg9wg3qLmH3Y1SoSwccots8pKDsyz7CNgKjMP31Va8s2rzKKREXR4sHgNDdNk",
  "key36": "hngYxVWfDzsiN4DsfE4izTL1HoPNa7aZBDxz1jkzaLvorMBpEg69xhmYHfLczG7rZadBnEKcH1HqqSePtxJdU2k",
  "key37": "5hWXLvDZHRNoXiR7k3ifeixEbqLSGr16FAHKfTLur86ajgPyadNbRz1ShWdPKPdLsRkfurZDDwQ4wwnrMoywkbgh",
  "key38": "5tApUMK1AiDpFYq2UFYKDeSZnXVPAQbPAfAMoiabMNkEwMBHEa9iCRxmwEsvE3B5SdBG7ogswco2gVBeEVgNwcHz",
  "key39": "3aAwmKWTqNaE3wmY76Ndm88unBJ8f4PyZaAff34oEW9wgCAiGJVST4RjceqqDq9d7yD7R8sEBvAnV5g3GV8XM5yU",
  "key40": "658irmFsqS9tcyTkaHKk2oHt6WwDTD3uDv7wNBFUYp66dsmSsBGy2qPN4Rz8u6UqataayzuHdqhYhfuQqownkQdj",
  "key41": "2mVfMmLHKkWQ5DsaBwZnwjrbh8xKEhNe1bxUkzQQjzV4tF71fFYRc3pw95rU3RMdgmQNo9cUmW29FNA1n8yKbQLb",
  "key42": "3ZP8uWgLAoko1WdyRyDX6RbfaFGpEKRDrSaoJvitqhEdiLkr1oPo2dPvyTJntVnGg5kUwPh4RvY3WkvLSCRYBTWh"
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
