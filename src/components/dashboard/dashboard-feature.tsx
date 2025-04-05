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
    "4Lm1YyX7PiNnymU7fAJBjz4ynTDfarrENB2mDUcRew6PCPmMYWSzfEfTxgpHDNANjGMUexEWJ227stv7NEJ559e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28F464hG6dBvG5gyZVP9j1MbiXR5Ro3wcDQrEkbtvU9H55Fn9DKbBsjLnwPGzxkyvtbGFAjxYPi1THxozdG6nQoP",
  "key1": "2bkbd7Funu9yq3oZnDiKste1iCGx6BMUguUAm33qZYCytU5mfWRL34g8TU7KUTc9LrcMZJbZiaxXwxq4z84YQ3vS",
  "key2": "4hatajKdygdgdDBhH8qfZ6xyMQ2eWKPCZF7AyCuLGH1YKLG73gHApre6sPuDCjngJwStYVCSVKKbSrBykDUogn2m",
  "key3": "4wzHm6nSptiWv9aLrgN36jG566MSXz9SMRYjmSbRg28BQU7c7oR9cFFm2Ux234zWgsK6uMJ15YvHHZJaxdFAmWuu",
  "key4": "4FwFr2WRQ1X3MFm5WRf4UoCXXFf5JE35M4Dj3vxD5MmW9eUxAZzA7m7XPTyKBpCT2BgCz9q47L8tfotQyKRXtEoo",
  "key5": "3K9WDgBB7KdSerPDs7KyWhb2kMcnfaW1zRmjRy66X4skMgBpfHFo1XMrbrBxZmzb2byHrWzH5LYbgUPe87LDVCBH",
  "key6": "2mM2bWPyoqznJwX9oufgWAatBdhTSPrbJPxyAm87m2cgjN7WwNtLkVt4nJ116B17DN2xo5QVrkw7n3MkiQYtRkFX",
  "key7": "2JE7jTb4xvZXT1YQvs7oK8noa561VoMqezMQL45zowzLY6YSdD1PPMtTaMbxdvAuGUf5cUjS9LSbREX7uzhfckS8",
  "key8": "2cYSR6jSCFhkXRY17ipPc8eN5zceDbyLHr922gjf62yAsxjKuQZua6dFBXJ7cy3khRi9gPxKN9WHx3mj2pDn9dod",
  "key9": "5N77QEPvhHX546UjmcZ74ZtrFsvmLdPkH2xF3LRyGRt5HweKRhTb7Mx2R24JgsGJd31BaHUAzi8HJdWW5pKq4R14",
  "key10": "noDwrU3FAZx4x9NSRjs5xjesfotxwgQzgScGizMA4DUGk8pQeJ1wrnqjDWo4xKibRyKsVZdbNZYLYGWbAkVHhuM",
  "key11": "3ZNV47nE5yXToam1CeYu4azFfMFDppefjbRkwi4swhJvva1ra4deKnk556fmnh3AFHwPyrs2fGaok2mWJ6MxcBoi",
  "key12": "3zxhpWUe9n5SQiQKd2hitBakvGb45yitYgaVVL12w1AHjvVt1tuQXY7Vjsnyata1vUcTkPXd5k3oJMMV7HT6XFQj",
  "key13": "2tFkMdARns9cfCTdMJdViRytNqP5Y6Wc9iZwFE7MVeSZEPDCrEMPuGDHXW15cWRymct7wAFJygUdvzjhqQfBgeJA",
  "key14": "55yWb6dZdcmtZTa85JxwiitpETbzQwFGWKMAzzYrFqao7HeyyQGZmggsvZUvTnev5uvf5WyvH4Xtq7QZva2oxdf4",
  "key15": "54sDSB2euRHsfSrcrZqzjFb4ifJVJcshWsV4RJvc1HL68ovNNHCRjwavf7zAGEnQEttA1xcgExsVtk1fv9EUheRz",
  "key16": "2JtkuGZjisciqrzYpKkuMH6nA66hbG856R95HSd9TkXbXLyFyLBsZdseDWhETBT4wY7fXFJr3BUdfdtkTBHrQtyX",
  "key17": "2Zuc8Z8N8s7ve7dY3ag9Xu1HYRGViH85NwGxoKxWXKXEyMRBx99qhMR8173mUnSGEUmFpdYMNEpWKcXiWNUD7k35",
  "key18": "3UyXmzb9DbwAU9XyfWNw5wQCq8pPy38zpVPYfbe1qKLFR3Gjbwv3N1iZtnhYkzoFPWFXSDyTQjCAHZibQG9mK9tW",
  "key19": "5BMxaNijRrPsnm32xxJ1CeNiApgWro5p6k3yaRLyNzuws5WcNp3TwWWS22yGaVB1P3cmLQAmwvjfsVibMkUXhj7s",
  "key20": "5W8fQZZXpYrhNueqw5t7TmpMDD9rLzv26sVXxcL6BHgaJQhb5m4HCR6Kk2toQkPxUn1DDvutAiPjFC82ZQ6E8uxu",
  "key21": "YoCHWnPqFVwGdnyASfptzUBdtcM9Mrni1HfAwhrBHdcTa6MRfh6EGw2WsJzSmXV11Eg35XSPPT3UbMNbTGL4hYZ",
  "key22": "58GvmUnukzMYEiVJF4dbk8X8Gab4FBBzeUwiUDEcLxhvnApUxYFw5zGvyfq9DrJtB1LCTfgGtrDuHx3GefMi59qY",
  "key23": "4LN7UKACz3RtWv65S9KVsDLu4vfVZk3g8vD67WACmbbtnHv7GxMyKTkgZBAQprPqGcMDqMZA3a9USXt4HcDC9Qp7",
  "key24": "3AoZrWfr9e4aA9GwQe9ii415gjBQvxB1uqzgyQ2XPvSA4CsA3tqgZsEAsHPUebD7XL8Sg8f5rELN3ARmkuXNw4pP",
  "key25": "58tZQnGWQywpfrrGnYxkqVhLvd43S6CSbtg3QTjgd1yfeFrJffzsrE6guAd4nvcNPMCJVQD5p3ohLKqpBqaLSk9F",
  "key26": "4WQqk2qEu8ycbzA1QnnEdWTMqT2sTz928iZCP1Yr2pfmNUqfxdVQcA4WsUqkLqzk6FY6cwbpbLm6DgQsKBSLcm4X",
  "key27": "3eMCkVtUTVFJKvF9iqLceUwV7ZfzFfiF6YUUnsLsMaARBC1Pe6hnwXQofFe5GmdNfTaibZhiAkJmXcbLgZ3fBBAC",
  "key28": "4zGFyhArPmHsQVBKB3dGsRSxwVv7svNM2p9hsW1nRDd4vV4SBpiehSxf4s1TAhrMEnaZpdW4R4W4MLUFGQxNr68n",
  "key29": "3C99bRMEw3D5aX2NgWmhtNdvZp4QSRWNPVxiFVh2Z6sGJh6Pd5BSrpgMY3fKjvSAgCXwUKiX68tviND1ZdRP9Vzb",
  "key30": "4qG7NcWDwbxa3GB7DNXDJipmZNAywqUqRDFfD7JuN1G6wcUPrRJfKHeoj7DQTyqrQJ8Ypwv7TT4EPUDPWLFQb5Uf",
  "key31": "5tHDmbizZVcxPyem7QSCjetxMFdAocnzs3JrbbDxUuggTdPH76v9XvjW7PbnBTEq2yqGaoqCXziHDXc7cPZ1hTM7",
  "key32": "4RvpKD15pz5cZU5mvmYrDhePQCHHzrQQ5TGvTbmtC5yBxq6Ltcdpg8LZgo2NouZTVFgzoTngNV735H6n2PkXpRSF",
  "key33": "294R3cDKkGSQ4t4gEg16jyEkSfPfWX3mQ9qZC2c679WnvK8VBGho18jWgXGWdyYpWX92bUDtUeain36UDt9bd5Ss",
  "key34": "2hau8WKXiGAK64fa9ZwPSrktQq58uRtCgedDUJMGmBDA4fkCfGZsVb5P4ahYVLmA1W2b4WxUQXWSUFTsD4ijAXP1",
  "key35": "4UxzfcMFUX7iqdN2Dp5VaHnaczskhAGEg5JMyp7yc2fuQPFSAhTN3L5UQjdKFgYfHh3X6deDnQDLDQ1hyAADTUbm",
  "key36": "4DAeS4Eqx3XU21wTn8vhMNxM63FPtQqXoKcvY4nCmrWb4SS5Mzhh4AexbMTviLSZ8YxGahg5JAan6xDYLHCzrpzJ",
  "key37": "5rKbGKexpYL4A59gKtTWFhXnSUEaXyUifQ2X9zcKiShsVsS3o9iniWQj1YLCKVVZj8r8pZt2AzE3anTw7CEfcid",
  "key38": "5BQKVXfhmargVX6bWUm7kkD1ZU8jagNsvVyXETpkmyww9dLWxRthNdSd9b4EyZKtnvR2wATYTWC7cWpSwtFiLjHc",
  "key39": "4afitg2Z7zmwRm2hiBk3LQXkF5rseEqCWHJVsMYFMZfMqQbTraVHU21f8sH4C2QJwNMDgcH1CbaiXxCUQeCg5cET",
  "key40": "2p3ERPohUeJYHehwcXdLwkEQnR1FURswMscdFzM7Jyb9Sa1TyFZDtWtRQyge9EkCdsH1EhmRuvaxFBztseEdF76q",
  "key41": "2Z3GwmdxzUvynsyuGC7SdjZhgfn9SsbGKcFqmPZknZgjaWbD2jrhp4d9rU1DYf8kTXqoKE48Gu9vtd4R3Rbi2yLg",
  "key42": "51HWvvoRkfTjSt4U8TNGxgFBSGL5qmGaqyjSrx7WjQacNokLNJRbv93MJytD6WY6xbD24mByrZB8CHMNirzHCLAR"
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
