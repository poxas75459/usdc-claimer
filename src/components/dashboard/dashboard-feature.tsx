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
    "63VMRN2CwX4LZNQW4AZs1mUoNQBFfN6rrSxtwYM8QSW9Mr4XaeqbAGxSwPZX2NkiWHVNVrfygMvDhscaiNFyexGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yVjCV6dkXaDQCURPW5wRXexPpbF4znSb8BtAubhCMK5aNATQuD5z5ZiTsHDrJMLBxneq5eGsB5Go179zNEtbVYz",
  "key1": "ozEpBMQCRCoKf1UnMvyL6i6Vm9REdxRoxsA7jj1eemxp7fHeXsNh9bP847ZjZkiUdHWtUB2ek2NcAZYw7Cwvxa7",
  "key2": "46PFRayucptc2zEup5x4KzumDzwuJkuLK3KFTKifyBFHJ1K1AK5dPoYRnaDsigqsViJtGyyhDYuygVdtBtBYyKct",
  "key3": "5tfSjBsbVTJkpnbYy9cp1HENd6wePE9DfhjUEKARXafjr626c5rF8seKvEfgSKyKzz8wyDNCbnHFNZJkkFUgoy2S",
  "key4": "5cPUtGn84NTGVDMAjewYGc4kSu3K6gdjZjmX4ASCxFLq2tBqZCEHqLXoTQFVhq2yApUzKa4KvgsWgkwGgA2iAzH2",
  "key5": "KXMR6eGsEAEH1rBaWWEVC8LjBVJsyePdiK5SWuuUz1PMjYy8h5bEvNbD3fRyK4h7Nhw1Gga2gXn9hArArjCoT5c",
  "key6": "3tN7vBPeN473eFoL4msucLrm6jKD5fwPuFhnV9vm37JYy6jFzzpC38PYX9Nhr9PLHGMEXhbHrn9bBxeLvNH8ri43",
  "key7": "2frcCRuZP5zs6wguy5PkG94DVi7YXjrK5Lp8Sr43f7row7M1kxgZnwyBPHxJ9dnwS9CSHkFBW9CyUKYrSk5eX95Z",
  "key8": "2L5azNNb6oaCkLbDV81Cu4ZxPjGRhESTQHa2WcPCrnssXccV5rUS8nxesGDPCpZc9ni9Br1vtgKYaTXUBi6bmxBk",
  "key9": "3wr5jLnSLmkktEpZR9p6QZFDfMHVEeYLyaGhxjXRrTszFzkH1twz6jMLgkzx39ogqrsKcRBwdewjKxf29v26WiKd",
  "key10": "3f545RZytMrYfYeeTMdP5prUk8xPmiP7GiRHz1ervC6oEdqfMRQEEG78yvm1oret3EiPvTanpedL5YxDvsUKDK99",
  "key11": "2Ff1DjPTTnyX4A8n9yqLv3EZP4qCxZtGdsVtwrC8TY6fVtFbkzbcepxELLTuxdAn5WDAJxW4ZtV7A1TRDRJqf8Tn",
  "key12": "5ijpzomxcsvSPt9YobsqYnNrp76X8uyJZRrSxyixw2uaZ9ea15YGCRAnNS96AuUqhrBj4XdknHsf9u4u1G6eGcUY",
  "key13": "21s52b9iZLMnGbdLk8sEYAv3F5AeJfN7t2N6o655PNgSdn2hic8aQBk8GQCCHEezkwqygZGyLqJajWHpGq1cazFP",
  "key14": "5NaRBB6dXEjjDdC9JkaztVpGpLfuNBdZqT2YdvQ5HbZSC6CERe775Nj97wPaXMUntzGNKRqPK68g5FBTv9j7aeh9",
  "key15": "5ELPZoBEf8bekKy9mJuUaL1M8xyzDKWRTgZTaBnTmi68cZQ4nUvJB8KS8fXfY2ckP7oiaL6d1VFbAJLCuKSASzMo",
  "key16": "4omYw488UReTtgtQNwnm4c4PWsjfmyqxWYqavGDrravGd1RDqvoFNWoLnQx54fGxoSF8YuFzATZcfZXGYz9kNyur",
  "key17": "34yFGWFKSXRGz1vyxgw676hxeW1FP6ffbgVU3QobryKG4ZkGKVygeRKQjt12Y9npifdAfBAnVsN4MTfKLaa5o7BT",
  "key18": "7pVDV54ZjgouLMv4QP9AtaV3L3VRNzcXzPVkoYrqZzfTg8fX2BdfaHetxB499p3yNpq6wcnRtfKoFHbgDVhNBms",
  "key19": "sPUrP8sHSh5unoCmiRWtsGMExoHvzJrvhmgTpbqzSLtjXF7Afik3X1Xu4GGgK6dL9cksAShVdP9vzxEec3BABCX",
  "key20": "3sonBi8BryVFDNebvu9LzkKqghnxRngJG6X6o5TDAj9c8dncaR8YZMdxCCoFcz5b7C4m95xZ7UasoKrhgGjYpCgS",
  "key21": "5UbxQ9oR1nQCrAa2HEkqjn23PXfhFGS5Mw9vqNAppoJ8fEY2vzRfdnrkQEDBpaNjxuGefXuQ89bdWJuNLnsAwmMv",
  "key22": "4aDHAXhC6v6eQiu7EwGtmNa8eqQwrk2g2BmYPNQM2CQDjXHFqpbR9tNVFEmHrKFZfjjyyXrBAm4YLZ6weSqhcz22",
  "key23": "3f5zBkhE2DcjcovpNQ25RHDyWSESunhwsQ4sn3gkDJticuDMzizVo1bmfMGUWRUBTvgcHYzxYTMTLrpBVPVKEN8y",
  "key24": "3taWTDECxsVETSA27X6FabP2DpdPbxHGyqx9ySYzEkBQF8tnfj2qdnJQ6eZLKG46z5bNjfAYeGoAsxDWB4Yy2ESy",
  "key25": "2H8rHHPWCcpVZPXBMsyp8WRJmdSGU5B54PnnvJK17nULh1eDitPwhazKAUohHw1fTBHspjbo8d1r6oCu6RscUyj1",
  "key26": "3bQeho14LpApR2SbknkmctVSmbewXCazEJt4R6DuQ9B4cR6m3y44mYp7eLhvDGGVxLWj22MfvSR6c66xEH9Y2UHM",
  "key27": "622Ytt4J5KTCaGzpDxRX9KLozSrzEzrPxEHKRS1eh2dKfkRVYKW4r6L3uKSmQvXks83nJvUqwj8ZZps8DH6z9aCD",
  "key28": "4fqPtUpvDs4LtJgsMS18SEqFtVsDtsFZBy3kdorxmtTcYzomSnjQ6sttho353KYHL5eWoMRk1diUPMWgTxTbZzaM",
  "key29": "3RgtiaYqhR3aABNNi78AtEYF67vJRMjqCci6KyWJRzY3bMXBtfrvKvHbuW3CxLDqjYcnPQowY32XLmDEmgr8hVjW",
  "key30": "h5JN1p5bt6ZTgH9aMUFh5o7uxpWd35aDdxZ55qWfyfoj3GHKpndnR59BEfnfioZeijPuGxNPP4AbfZUV1rCxtNG",
  "key31": "3nR8w6mfaaVKTvkhGW5z3C9yGed56S9H6Xao3xNtk9ExrRBxzFFp5kcQ8u2TSpvnA7nZQFFFNZTH91Jn7Q9QTk5A",
  "key32": "3B2DjfoV3qK2vYmYkko7JRiTn1UFuf2cxBcA5cFoDahrMiLrTcPFVT4jZDMzQEJnWj2MZBnLY7tj6gUymtfqWgT1",
  "key33": "4vPQ6teANpCZD5VKb3vKQuVGHNZQN2U9rixS6nvVidCowqsFEJVtLYwFuUxaEwfktATtp4r2d53NnLh9VAhd2GtL",
  "key34": "3DzeGh6evh5GD2fmaNv88WD7dKYRxmio7WoHecEkT36pGG46fUAKjY6cqyFdGesuSARCGj3C5GRGH1Xy4Hw2ay1n",
  "key35": "3gs6gMJMnf6NbQZDRacBbQSCCKmkfW3pkDvfT81KqwtmYfTr5TEsco3XzvwJMneuuqrXb7CeUQvoGQDk7gbnLSRb",
  "key36": "3Q1cVUq2k1DkVdfv8bV9e9WKrp1n5kkHm1boKt2qkBkiYhumDCM8cmw8GXSx1MgUmomSNtxAD88uuqbdxBdT1wan",
  "key37": "5d2C4moNLRwR4VgdbqAaNqE8LvRgYbJia3RS2yceju9r5MjCB8Mm5qRoqdgxbpMGJbTKw7osWpTwNNdkJSLauY8c",
  "key38": "31EqvMJVpVHMLoC98pijys6qi1fTyfNNUk4qd6Z8voL2z2UuhstLb4KeRHaWGTnV6u6ELmZ6EyjvD9dyKSvi2Kq",
  "key39": "2NEsfY5aq9QMgZBomj55NzmugMdgEB4npRBjQtiK2i9m72Xau3zJpQvzdQL5zaK28XPMABVxhaSJs1224v2zC83i",
  "key40": "21Zj5A6uDDgf2hHPszPp1gj8W1uNzAfNRGwmCHu9dmDLhstY21umqP8d1oEa2e3qCLH9xzDYYKG377VFhaeTamFZ",
  "key41": "36q5nMQG8i4bYXppaZ2UCzY3KA3DU18dffHpMNRoLvf9NDy8PfXdvZCgF5M3Md9j7R5Luv4havWtxaQmvGJmCqyY",
  "key42": "346hCtQ9kBoMMK4aFXGUmbJQA1MZ93jSf9RQFPa8Cti4as4GFDfVKzAhjE2Q31EKGd95s9c3rDzk3JwbWryf7gxG",
  "key43": "618LveHijzpycWEWQrVDSusTxaHx4KNyRibBduWqZa7D4tFHyVUF27btuht8yDMU7W6bPbgjLS4LKfXCcHihEpvL",
  "key44": "5RR8XQCWK5A16hWdUu4nEMEBiZAejS75xoFRSis1epsQwmyDNpDjZpvjREdaJVG9UhEvL4dizbmY6vRrDYzQkJmW",
  "key45": "2fsLh1JLkCJPJ75ZLL2XHjLEggLrVgVqDZ4biHnRZ19jHEmyUqBscj56w59bikPH4UVj2YtksH7TRAkk88YiY2FS",
  "key46": "58m3SXEfdj3vTGznSgwGV1Cag5FbnRvHAKU1DE7PCogfNU2U3wd2xTzRjmegeHRi5YGynR76n8bzQNS7pPzS1gsB"
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
