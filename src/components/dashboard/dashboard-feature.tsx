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
    "61wNrVQY53z81AjhpBbdCL34BsJcFE57FwjqZEVr6XtAbAJ2HwDTnp4MsQLchEWuMQ1UYBMZNcoPfHRc84eDZJCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "454D9uqCLtNqSjPAGkunH37CEHMrc1HAtcnwukWvcrZPXG7DXmJsUcsXMe5EyFGZdcUDWZwESAUjNsyvSq8jGNvs",
  "key1": "4RNGHfFk9qEJcaQqVzLCgwpmX466eJgPZzySUQNfywVgWVqAi9mxSdWckXgLrJQ5BLCTpXy1p8v1Nos2rqVDPWMZ",
  "key2": "2QfcPvFKjEhhVgiy9WDpxctB5bVVQZqoWE7NqGTDwy8Zb84dqYXd5sLbZDT2vCPgM3WJPrewJpG2tLuLwhj825N1",
  "key3": "2rcfQxR3U8wy6h1fAs8eag2k7NULzkVCYhMRFo6DMfY9inPCeaKmkG8EBWTySd4pvk6zNC55ufBU6YqixvKLFrGN",
  "key4": "65XMcix6Dxu7Qba8BTm33CRd6EVpcVCAm94FhDbAsJCMbw5M7AD6qmhQoF7KgK1kWvxtEJT84U9Z1xTRGoW2chyM",
  "key5": "2NEhQGjbiyybsUGe5YFipYt9S8U1B2HbbAUMneEm8wfgdZsA1N7ocvw6mpBGuiT2eEAT15Bv9D1SCCcN5fZWpX6D",
  "key6": "3gRZ8F3YRibTEEMum5xBT4tUzUY5g1q46j8J9wAiFETwkMpHU1X1Abwgr2BnGR2q68vQ9j9GcKy8uAJzaPtdWqTH",
  "key7": "4WDkfXZboUtp81NwVuzQ9KXErTjdVgVQ3M8dkP6NvZohMTzoH26bwa3EMaiY98XMYSR6FeVMuSnKqx9fnEnt1e3K",
  "key8": "3f8Puq3oz3HAKLSwNdnA2L6riTFQxNLyXwoYKrhDowmYRe2npaMhnMGRU84anopT4UwH56s5Q3t6YZ1UJvLDU3zj",
  "key9": "2uyghst5k9pzMS9L9oXfYggjixYMiRLZNjERrAKgVefHsYzZQfVRDXaLC5UHpEASsYV5sN2ZNnGy739QrFyKJwwL",
  "key10": "4xmcFPWaE4t5jMt3USh7LZD4ugNXz28AHk8Wy88EfM776wyxHtK6tV2hQVkZYqzs8LGQDNsGEY9EGueGUCiyH7jc",
  "key11": "3TJFujewEz7EsakrCZYfrdfkgfYJksSJtQTWDjPSTx89Z46DwosBC6NezPaXBwyUHMChSEJxsBxsy1mf8nQCADoz",
  "key12": "3BJRSA9jaNuMDsgWS6Scj8wi4uEFF3mYc3HEvC3hiPNEuyNJDAmccHXhxff6c1Qm5SkWovVVbZjcUhMWGzShQhPF",
  "key13": "3yD1nJSz73WhpSedEqaTHsbyqj1VB6idwK3oJQFiwrUh3UoM3vRLveqJdxyRj81MUMZaT5nYPWXQ6VVuv5b7FwZQ",
  "key14": "5xGSu5maPkYCeCyUwKc91PXuikY3vdrTTtLpJgvFvrNUDUbZ8ntLqixwZ8UFcfaRYRd6qULPLtVKzSNvn9HxyCpK",
  "key15": "4VPouEMW5Neq8H5bcXaTGxzdybSPP4wKk6XGfKLcbP6TdFsFksNvRKu6ZotA1EDTsGQpXxEqMUok2xtEufhfKnsH",
  "key16": "5HTLBiEQosFD1btSrgK6sDBZbQJX77TdikJq2H73BU9Kg7XunWVLDcUiGyDCirLCTcCKTFDjo6suepD3kvxwyXLw",
  "key17": "4UdTGpj2RotbEr8mi3EB7qJkKZEBsUZpt8SAq3paqbe7xHL5jU1mDCCTn2Bs3pQUghoXBUdPVauj6EHmYddvUxy",
  "key18": "57eDrTLnzfmTPN3rQcHxKbpAYqTJcebXC4JRw382zZ2su1P12T2hkQees1YMvG69gjiv4gr5B5nXbpjMUmyMpRZy",
  "key19": "35hoxBSx73FRAGTrwhsZhiDmuxLxPozthEzVaY8tQc6NnkjqeavKePRJgfGJQetgcJLqHGbi43cmU4q8ySPYfdRH",
  "key20": "2JpV8cLZMzakjxvpGQC323CNHCeQLXDbHoq1oKc4gh21NSq4xnk58rgdfNk4aqRwzXrCyYhCiqKi7irNKoVE6WHg",
  "key21": "4W9VkQiKLzum6xPEnmBczghjAgHz3DRrCVocZyBkL27tSn7sfuPJBBEHsD1m5Punm7yhosWYpbsSaBP1RJRQCESd",
  "key22": "3Fu6KFyFgH3pc235U6royYTUfKQ9genxkRnrJhpAyzEE8thJ5vNwFhMoUervx5HVnzX8Aczh6P5SZg97k8oxUCsC",
  "key23": "48tHLM3AcJJkzXqZRQUntiesse9qdecNFtDiBdKzd5cG1BmfjvkbjGMoEjzLnJ43FaRyt3QuTezGnvDT8KddNLbM",
  "key24": "4QHyEm8kxEN74axRy8icijFawarP4CNfTcnJVtBQyrXUFhnCxymWKPjvM3pdoHgV6Q9APoQQjoRrhK3L8t5ixQ71",
  "key25": "zNb1gBo2AkG7fcqZoxznjDJDJYKece3wTsudRjqkzqdSZqqhit4zStSRe6H98stwUFrNMGYSAwpYmcH7WXA8HRF",
  "key26": "4yJvNqfxKXDDtxFAhdpBru9z1PpttsQxnjfUn1ZdrfBsmu1RyZn12QpZLjCGEkgonfrpBTETuVyk8CsupMB7Jaku",
  "key27": "2o6C1hAfnAwemnsgXrdUr8hhzpdD2aj8bd4vBdW9BMRkHTC1xbLfxwcV9s4PDA4jFBA1PYPTHgG9u9faCqXG3Xbh",
  "key28": "2gsd94auupke7EA6vc5iyA2utRaroP71tCU8CU2egRc5oiP6SowiGFVQAuaX95T46iv8bucxVVKUkyu4rXLuJTnr",
  "key29": "3zAgd5iHZhGunC1GuUR27Ccu9of2NKaQMqq4DTcNWxSXBJpaeZWiK1oTKdWKJAsWU2jz6PfrqxHKGYGwtFr6ddgo",
  "key30": "s4Ui3FBMuzLyC3gidVVzyF5r5PGeF9fkgML4Lo4dj9qdgDzBQLcwgNaBEVNRdVRv7TiQWGB6MVnBUuCJB1gS3xK",
  "key31": "5eR29KCrtaN6evmE9HKXCjSoFGGEjhCP9EqjmRGuFBy6DT37UdLD9AWWCUJmyCAGTDB5WerMWS2rJnGXKYJdLPWv",
  "key32": "WtdY3z7sYhjWtiQ98zeyBZGpRHcYFzecgQm8EXqhy2Z67NkBhNhZMbZwGdPoon8rQCR2vwUgfh6Be1Cq6HBnJ6Z",
  "key33": "3aEJV1vLtkXDWma4o4x9m8cizxLnV2voDpqPXCpT3VVyqYYTFseDw2Qzk7fanvjFuerGbcSnbufZogvbhEDUYVPU",
  "key34": "3Ca4TT12b4wwFVQTg3Tsz8ikqdaZcScPMqh6fT8RTvckYLmn2eud4sTSjCnQBqGKa3qtZBpu9X9qatPiCh32r68v",
  "key35": "4qLVweKHKM49HbgAUV9t8hEMNgCmvcEgg3fTMqyyQr8EmubXB5fPVwW9UMWYKCbKYmHwUa5tQmp2gTWSe3hM8KeX"
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
