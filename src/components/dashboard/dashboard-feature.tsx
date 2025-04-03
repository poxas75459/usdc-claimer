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
    "2C4tysVXtGCZ7ZN7mZjVnty8rJePoqe823AG9Hro8aYCuKNoQzLEdQ7JM7Vh3TXGwXwAgyFjfQMTcrEmYRomLLmp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EA8gALFknRrcUsVaDjntpMETk2DbYaBSKhQH8QNpsrHxq8HX8kqqc52vGRe3dFMweWaASru2haRKsixa4xSTzfk",
  "key1": "5QzQTSNKkNYRxWa5UbUeBM5tZLAY84rKdF5F86nquWtLDadWCV4xLDA4hCLQX4H2E1vrqRanAPvy4X1Qemkk1geP",
  "key2": "kZrReSzh4tgRy6bKf6XbUFLcjmqX1btxsvMaXNPrc2irnfVYKhQ96LcLTj3EorE92pBR3sPSBbQvcyEJm23KxFz",
  "key3": "oVpfiCVvj9GP5gbvYWZK1ZubEYbwpWQSh7UyAaVC2kzyfG919VTYCbpRoyFVMFRfubBcYTpyukXxRVmmBc1AdMz",
  "key4": "ZKzj3bpMc58jWhottRgoXY7DFpiCFQos3qrzs6JMPs87PmqPuEkh3AKe1DzPfmYfYMbRamEXJkvDhZvdwR958n4",
  "key5": "EDSNoYCGvQiXvCbmuSyghrEXT1rFZ2yHdWsruBoERcNMHrdK28M6s3QxkNVjBm2v8afjoJvkRZpgf2URtUMuxqS",
  "key6": "2dsh2ZHAPhzFivMxKdiWmmmzRVtk3peKLJ8JUY8NHcVDzdEQAQXxJGMKxNpMTDwU1vX3DgPLKeLnpuLiCwVKGHDR",
  "key7": "5cB5qE45iu6mtstLXT8a4W7HukErS7NX2LyLYxkngbXLU3isPay1kCBjxRgb1eQgz9xzW4xp5g83fcrBiMLeijiE",
  "key8": "mQi1QrUdVzEZKBJeUuVefTAUK2XKnFx3S6BYXuvb1LYfFzKZFYzAC6StcD3qmVmTteYrhWirRXHfahmePj8Ay76",
  "key9": "4JNtV1ZcXV2WEnVpuuaw29UM1aiizjK837S6o8YFtv1FgH1iTyxBA3oyyvRH1zkzThUfN34t5mwKpGaLYsxXVRmZ",
  "key10": "4zSCDUQ3knJFdccCh8a8sp8yMGBPsmmdjDyJHrPzEKJAXN5nb75TgA1wZPQdH1LyXBoXXgjWSG2McLGCgEX2tLhy",
  "key11": "2tFMHVSNGwKvaSD6xPhthnuRZBhu2JELZXE5pzjjE8Bf6tN2Ms5TjhMzeu4uz7YAwU9ArBTrAdpjHFzte4ffW2Xz",
  "key12": "4YyTvdJieNN5Z3VA1hUyjSgaJCRGvVscKdLEwUgBoeGGjE4nnDaERDZ1aq7RV1Fuq7RfxPRdJ2X19Pf9suCaDiJo",
  "key13": "55QoCWrLKKAWFhRAhq3Th2kaBTCdByqaLzr23y8LR8wwbaxntMvss2f3x1XS8D5BzsAZNXYvDDsqcjRjjmESqBtE",
  "key14": "4VvriwLwHSauZFoPfZFjTs8poeydmy81C9ZLTxED59HcQfuAKS1R9KVhfAkYRbELGiE9oPAAWn2HwA23o7nWFLvJ",
  "key15": "5j3FUUqtcdkDkp8bcbQD9QoAxsbrMuf6jM1JC24BcQuY5H6wWgc678vwbQFvBbHcF6F4pAU8RPSoesSC1tCcEZoQ",
  "key16": "5H6fGZJoiznZdB7PbNGSPbZC2bUi4SDwF6NEQESJz1TkMF7YgwQ6A3bdrgbhd6x4aZiApEtfd35ZkqpnkD6KgN8w",
  "key17": "4mu13oeh4MdhafiSmi53BHMaMGyrnpNJs61K3sJrXo4p7A3qJbwJid6q85ptgmR13q14zRbVBpjqxRoxbVWKsKJd",
  "key18": "4RQQVKT25CRYGpfLGs7QjUK477m3jEgcxZj9iHbrcmE7nAbffULB5cTvMTs9JcmGxanYcHmEjAHJ9ocBeiwy61sK",
  "key19": "526bMZrnsBe2Buq8497Rsk6y4GMLQrhghrAet7brLWkYfTkaPvnmyXE1XTds2ML7Fnsqi7Qvcphjm2tvGZJQ7equ",
  "key20": "4aAU4pv54BrwHxA2qXXZFHttBFLTZ7TM8w8PsUHxfEpkSLsozxDvpDSSZyatNbQNLu8Mt65n8geeuV99z9M8ueJi",
  "key21": "5QR1gAvs4sXJHXwyqAm6Fq6cNXw86gU2yGocz9MUHytyAyy3HriV92uMJF1AyZaC2CCtq1tbKCfKhsJwPeArJS3R",
  "key22": "dbMaCBcpkbT3gxbSP3KqVyMdh6zFPHM2BAWmhsGbxQXgXVJUd1xcZZ4Bvr9ihqQpqLnpfbWWS5H1fhQ6XFnWiXq",
  "key23": "BLxjtMVxnkPQM4KQr3bMTmczDy5keyTmThU72wr17pkDi9BNfKkW8EWcN6HYcfiZZTbzGqUDgMcd5yKCDS8jLLN",
  "key24": "5ZG51x6qwNUq7UYT1JkTxFtvamPijZBHicbiT4Hy2TGqYvj1vqQoCHkJhoircmVhrqauTYkXPfPYPRBsyvuFFKj",
  "key25": "wSDyevcX8VThsFCWeuDkCHxy8g5x433wpJnwNEa58gmhWF4PDazJhDq8hhFJSqDr4ajFgWEfezSgDPttECSuVCh",
  "key26": "JDYhCtbQYnST3RLSqYswYPxTTo9kyS4CrSggHmywscxZUYLMh4ssd21EA1EfoghKrzAFr4xjRGRR9drPimLimnc",
  "key27": "5PzQWhTw9bexKuECnPYeufEUc1AdeDLyS8iMvve4bXiWaHdqiB7uckJiUQSc3svRyLxW8hxToaZsMe7MTkwF1cMb",
  "key28": "7Txdk6vaz7pjn8rJmYk2QZ6nrxvs3VZLxteKCqZoR49WM55nMBva5A741LBnq3PGU7CAfUBwzDBxWiDTwoEp6pY",
  "key29": "5gdrjj4g2FMxf47uTRcZEDo91abkcVRG95TVskM4WRFmuEdtXisc7oDtXSuPJJdn2gEvX7NRGPH18ZEYSeLcumZL",
  "key30": "4z3VNuZMjkKWCiDbAVXU8VyuAa1iafgeoQLSt8rMu2EqAL6PCtjsdG3U4twkhSPea7nzXDpD72HDEb39q1mzQ8Zi",
  "key31": "3EWraBf3ireH6i4jCHGugewKhFEJuFb2ASmVhV9iQx7Z4HQFrBtSZEdGtS3VAS8XVzMZUEe3r4cLVqc8aPgMH4hC",
  "key32": "3jq82W2ZGBAEYyJpb6q5HFz1VvFYCZzKPtq8sQmefU9NTsBL5aRz6iNLAuMJAeMncUuN3LZ1YiKzGoXDUMKM3QQx",
  "key33": "2m1L7D6srio3obuUJ28EtCLE8aKFezuvW8gcS31oaJYQvcRgdbdUT2ixnCnD4rHR7uxwNnYkTwca997UjSWmBmkq",
  "key34": "5CY5Wj7iZjq6Drnn1gjfUiWjJLY23fkfuCGCDn17G231ataZUCsYgCtf2fyYuQ3uikK1StDApu1tpGLecndsAiN",
  "key35": "4fjXWs29nrZQqSm9w8AHkfJSA4SqB8jHnesxRNurfzBRCTTZVpqYz61oktnNAebEk6mzx3tVUnVZ4dc2jPq6nnjF",
  "key36": "4SNHyewtcy8RmpNyq6wS4zwXCBrschEKHRBNTfULRfN2nh7oBCa1DhsPnc5hjx93rEMGs8hXmdpmraaWWrE9hoFo",
  "key37": "A8JZEBKU3PED26cNDo6PrijM1PoN8cadSnNMAzCzEhgD9bWxKRDnUmFDMzGxoVgM86RgtqSMzZFphh7M4L3nk4p",
  "key38": "2rqBXji66yAKcWAyv3rtbHwMys22nCLTk3NTrzienFfeJFPGbJLV1E5upHaxFD5jwyxBmGXd8HdGpLB6i1UVTBsX",
  "key39": "43dQTCAeXz5HjLDGpe8uSQfRRYQagWe6ZsmTtkwAJVBRtkX9JqdLyokALZNnmUnakDebQ7gmja5GPMVUdBCW9MwH",
  "key40": "46YEHiZ7RjYYAsYtJJoKcNHAuiyZvCWr2cTEqk8NqwQ8b7VS2ZnY14ZPsk97qKvhfDgBMAYxsEGpCZbh5ZtnCdzS",
  "key41": "4wNLYcye68pBC6SRV7QvmZ8nzFEen82Z7rL7mpviRUiFqoh11xeUEpBvo8XQoyiAxHxvr2CV1ZsyG4pbuKqhmU7H",
  "key42": "3DFfKrKav7grws9fXZRqhPb6xX38aXKVsMsA1VUapAgB6ntooN5jSZKx9665Qt7cCtfKEm44UR1uZQbAsZyM9RH4",
  "key43": "5u3n2UEnXLiqSpkPJGafp7KGgPP8BAez4qBxXizEuNnfwajURph4RrZKKrMLvrafgCh8RTr4d9a4y3TWoJJ6iHp2",
  "key44": "L2Fcwoc8rdsRyLjQzdEYdgdBgW7NushgyCQvv1j55to2y51adqFxzwQFy2bMEFwuUz88rGUcKVxNCEcfwJ2Gw9e",
  "key45": "5W49KqX9XDQDcFqyhhsCEzrMNLDy2kiZseN1oqusa3iwrJXnRaj7cmkQghVCfUsAsMryJzVxyJS8GN2TqZY1LbKu"
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
