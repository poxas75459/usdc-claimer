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
    "57LNzo2yKwUZ8N3NhfCJziWJv5xh6w8gGECFLe4esKRbAAdTRCJJzNtD4ao1koEUJTWEdtTdjvFVSbS3rw5aUDRq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nWPpH7NRKjtbicsjb2aNNDRbTxeYHBwCWgrPnec6JYaM798fk14hfWNR5X3Ff2LFenhn3NBocLU8Z8z75t4uta4",
  "key1": "3PTPJBi35E2EgibDeHfxcdR788Zw9Cj9fSSX1PHYtimP3CaS9jBvr1MDtf4AyTLq7z4K3rzvy41mv7tLivzrjxEW",
  "key2": "2CHStwXmg7KWzWuMTCp4QPwPY36XgJwtCSebVKJa7kM1d2iNKL3btxrpMnz3LcqPhQ3BrXwQAWpUCKMd7Wa1Vszg",
  "key3": "5jRfqQ33pNuWdGFqWVdXuQhYg38uk6XvqMnYyFVKMgXExRKnhbULEL4jL6ov1RRi9tXbSKbMYs3EVKKZUffq1hn8",
  "key4": "2hRdrEthxW5Eue3thnp19Mqb3PnvA5tnuNsox9jeXjzBTGtWhdYKYcrkpp5qTzNJSaiqDntVQZRusFagTP24GHLJ",
  "key5": "489J9s2aPVny7eSKs3Qc6Mv1mTmTcSDW2hBxFLTiCytNRVhFK8AjveFW5kzb6gGctdnQufum5wix8Wq8AGeBz6Fu",
  "key6": "3zdbFNA2XirmkP3jqXUD3zh24jqQTBFr5TF98NH3xNq9SPPinuTiz2aJ6iQT2z6xW9znFS6YQ3GSZRAAxY3N2HbX",
  "key7": "41sMZtNWGsQvzKEkSv2NJAzk4BdaBw9z96zk93qpD2ZvdMKusYvwuUzdCSxaqsgt85yCUZJpDmaogUwute7bX34c",
  "key8": "ytk2WjiSjL7sw7bmszMxnph6BuVgVPkm1EW8G9wyFZmhkh4JhA5A4fjYTc6wr79u5rWSBzJoBjjZ4nR6vY5oRop",
  "key9": "5envE6Vm51KLvEvUPepvP5Fc9bTgFA8L4tGLiZaJdnYg4TYKdsCEZ6Hcq4rDXpxKG82ofzL4CUEv3hgLXwNeiNf1",
  "key10": "3beWShcxe641Gx177ix8DWJVGwMrW92H9mC9hGpLCjGNrWTDEQu98taoJFxFuVNkMyWHmBftrWqCDEYo24DXYTH2",
  "key11": "3MiqSjnL1m7ELBWYexfKsnsUKRio2Teg9qZ4fKCXfgDr7NpdML5FSgR3zkLitoLohTnxqyrpVA3ES4wpcYsbhour",
  "key12": "K5aAnCHT2B3z5WZVUcRXfpcY6zPaZspEt9xaY2Bm5fLiL9f2Gg2ys1aqWZ9jmMgvXvVL17FQdSfVovjmaA2rmrt",
  "key13": "2UnPFw4Nzzp1YsHEDiSMMNdqUoA76kgTsEWvAZdam9TCCi6QJ5Rt9bRqGUBBMF25j9nPe9v8ew3AWe1Zq45XY8zj",
  "key14": "2LhYhVpKSsdEfe5THkf3hWbsgS8euh19cmDD7g9fpFFPuE2k2JupB61WX3kwT3Yrk2kGRCvUq4rnQfmUMcjJ1eUD",
  "key15": "4Fypo6yj9rEXS4B77TMBoGDbSNJVbNW4YxuGJLmmvETZgLZ2bQWwShBrR64oLStJwg1eB1AH44nvYi9Ac5yLxPda",
  "key16": "3pWsRAh4Y7Asxng2hs1h9FTc2KoDevvb5JikKTPkRBCipUvoyQQbkS3c9Y82FcjamofCiwu7sCKwHuVdQ2hSfZzJ",
  "key17": "3kRSiBATdy1HJPStNxubjkqgd6cDvHkEXUfA1c55cscRXxjSEW6ZemCP53fLavzNF8VoihAp3TG8UT3zwaQ3wuV4",
  "key18": "5JbVxrGBbhCZEUNa7NXt1WuBiQkyRD7ARMpkL4rjdQrmX8edZoVcYeNL5xtLH5rxCf2wCJdG2RSEP2RrGHdtoes1",
  "key19": "TeQyYyzrqZiBNMWDLESpt2XfX9U2R1uAdY5PbyijjYQ2xEycBDgMvzFTAWZAeCaRunXLCdxTak18N4FwbQBLc2V",
  "key20": "B8pdAuetsZBf1c1ZcorW3XoQDtDUCz7gPLre6kKGupj2CLgaDhSMRgCSgRAbBKFKWFmT4CLgRdrCf1RTAKntvKx",
  "key21": "3ptanryRLB2ZyqNwFedLGFKLSJFYq9bcFtSFCzNLMboc2pQwSfqZ9zMdE6zB5ASwERsWfdsZirQoabEEbrDrBKjq",
  "key22": "U2V4N11Tys6uK7DUXU134TNrBV4VVmUnzJckPXoQYaUnU7rzdqbS8vk3GH9MvbRshPHYe8vNb7f2FDNzKgyzbkd",
  "key23": "2E8HbZmmdUkbqAYsd5W6hhGxqWaR3DTGVG1bzjRe6GNWTLNkAcXp1CneRJba4xXZjDJRS75VusLeJ7drvieFKBJN",
  "key24": "61U6rGMEJfKj8WRivMRTMQvzYhNJNcVb3PE4R1amrcGoEmw2e2jXbhLqiUt6GzH52p978UdKPT68i49ActK7tuNL",
  "key25": "3dfe9XNVxDkkoQxmBPYFeoDq8enzn6BAFCBaRELKkNJeTziL2i6XaN7B1JpvbxrjEHN8qiY8JU4XUGHQr4xz9kFU",
  "key26": "2bhx8KApd5gbARfVp8fxUqr4RLvHR64pcTzgUjGAyqfpacp1ZZyMNwH5QiPNQjbNkYgCe1X5X7Go1AMHCPgczhGR",
  "key27": "36DdZK3d8GLRvsL7y1cbRxCWSP8wVefkygZvwaWpLQqYz4A21NRkjZaRJgobjfhgu5xpNNs3SsXSX4LZixc8h3P4",
  "key28": "3DGR6zWR2QyhdW8SfXobvvGsPYMNTS7VTVPY6L58XbJRyFbsXcJqsBUoQTL7E18eNDcDAmMvrffXPNrPFFap4JYg",
  "key29": "3QD6cFuieqszE5dotFmw7JWc9wSNnygGDpS18ba6YZaM5tBdThrc2yfnZLfhY7PZuBzho6iWVW8bxe1VSfQw9FvV",
  "key30": "4b4UR8f7kS9RpSUezWsp2MCETnTFUtzg9CjuiEU9kHJopbU8Jm1jC47v6K5GpRgSQNKdwksGqrMFc6q5H7bo5moa",
  "key31": "qp9d51g76KDvCFcgjkTvw4eWQToBo3ehXnQdzCEwkT4TcfQaoGKYzbqMgDEbYUKVcw6KvqMiczKonWPMnhuHnCN",
  "key32": "5Tz9NcF2uL7ScEGhW54T9Up4HHQS4gBDmBo2Msr6kA6rcwTeWWU6BkrH2fznCfx4WsKmN1vQgFtizSEw6nM5CZgx",
  "key33": "2QPVsx89vEFYbR2HcUFV6yLJPgZjGzsy4NesCY6jfFUytfB7H9ftfszx36djtFmbBVChDjLfoaCmNLRUobBprvKM",
  "key34": "3fPhF2YYeVLA3kxbLNDiYeGD7TaGAyFV1eMUnAJtRDaRoR15EE9pbmWdXA5CwqrWsX6nNBzCqVYSPN9w4Fn6XP5u",
  "key35": "5YF8v4XicGm9t387jR7aNkpMJFWH8rYjFQLjgfPHUPFjdbVjff9mUtqHAPgxofUgDwYJ24R7aoCUioTqVzWio91P",
  "key36": "2hPmywQuiPpz1HjXtXwKyxZW5Y8sbQ657Sxw32toSgBA697zxBmfU9uy6LW7uFwPSHgEjiF84SFp3aQgVB7CbAzT",
  "key37": "45LDB1g1yoSRCcvZdjQB3L1A8PV8eJJKoX5bCGgafMSac7WRUNMAPUMMd94j6qsuvPiGCpsMUUYFbzCr8YVgtTns",
  "key38": "ej6MmW15vzkUZHpL6mYw5qgi1rwACdt7njLyb8tQZdTcuFA3CxoBQCnwMWDZoZ88MUiTVqgB27jriYq2k5E3c3V",
  "key39": "5E5sv25KD4Qj2BuyKvgVFCqQvo5L2SPRmFi3sUwREdB3ScpjLFTeostJ3AzPtw6MyXsWDSJRBgxPJ822oruj8DS5"
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
