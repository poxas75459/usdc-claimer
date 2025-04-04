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
    "axnjFMzuBkq8UQmoHHfD1T2Mbgttdv14rgQKN1jszeDoJpWsCSpTg2fmWNVXWMEzACL7xuEXQu7Jb7YqG4tNZCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sgTetbUpesuLVqbUmvFg4Vf5JYQ4KUkiCNfXwHw2vBhyfwQWZnoQA6bqS2RZQDB3ZBfrx6BeQ7D7nD1nuhJmCDk",
  "key1": "2PnPt6ZisopAoCKroWf5PvMmc7iihHTwmnHRKX6xjPAmKdRdqJaA7JZgoizX5yFkco8DXvMCNTdknaXzD2WUcpqU",
  "key2": "z5U2d7iuBKxpEf1xWgn48TMZs7si1p1CGAZFyp2Jd6kPbxWmKAVP1CzG322ykfSVXcSMjWJnEkFLYKwzMqWxW4q",
  "key3": "46oQrEPtdxSj9ZN6Q9MWWY3pBANT4pkTsECMQSe69NxmtnFSjTkh8tkixmW7ViWyAgqthcPmXU3ZaShT2BNYUFXG",
  "key4": "46YhXqqPFsGDxvcBHmZBtn2pWn5Qtqr2e2XgTLvJwTDJ7Jfy8eiMHN2iCtT5fhwpKHo9b6wWrfocebaESaPrJMTA",
  "key5": "5AGnZszGkngGv46DWHbW8a1yygF8snGvQzP874PM9YXvdqGArAjcLKznFoikvxK1fRTy3tvvEGWEPMbasUZ1URis",
  "key6": "3c5WpZ7bVFrrQ7RnLhxGoGHfskvikoETYxAzUoiGBzKaCj3HqzKJkj7Gopi2tMDDuJitrWipyaUv4BB75Zd75GkE",
  "key7": "bVnMAkg9MniqtLMMXSjS9B5GEbzSt7oumwPYaQczpjHsL6JBvMo4EXSagjf3d5ZHEwRm87SgGz7CqU7QrWpPcJi",
  "key8": "3pe8fLVNUWgp5VbQs6ZtVpNUzwgtbgL42wE45q8B1UoNWLqkoLzsYZN3a2yDypG9dZE3WzKFMVov3783dueiNfAb",
  "key9": "BMjofVmHcRxer5Hs77UjUfSsv8uUybrt32hWan6ukzhJX2onuCKJvwznuiv9jN1AnBd156Sb1AZN4JV4bqqvE7f",
  "key10": "5siaby6NKpkNK7ujRFxFjo6tbPeTRfjAE6n2qvfYsrVAF6yhyqbHzPUh9oBXT5fZrUcoai9UxgzYvm5tnjhNf3d6",
  "key11": "4mD5P9hsoV7DRQBh2N4h9z7Pe3uSCwo6te6qRjWcV8kSathbFQ4picqwnAeQFE7cScpFsyfXh6iTSJRKGMWjc4Sd",
  "key12": "3QXM5gECm67TbnCkfxuK4kkHyBaK1BnB99iShsZYTqejYUWa4VpVG2n3mf2mHVnbLEm8sLPKoVLtdKWfJ7bRcdJb",
  "key13": "2Ep5mJ3xYXuEqFYJGtKC1tibakroJzyPKD5gU38uDNZW6ZPwZZMbpDsLvVds4FWNnEDU4mWvcnfhtVVQfytZ6cA9",
  "key14": "28oReaKbwvJuroHnVe9vhdYDwhzhGp97rRFb4yUZBiahEWszTSdKchCNDXdxKnRoU8ZdRLw24o6s1M9hCbNp1CM6",
  "key15": "4vMYBoByFnjbpen7sm3kVCQHHdoaykRMrKYr19tyyNAPyLc5L2tZwGrh8dmxEMduBUQnckpGRnBWAKPp4NGwtx79",
  "key16": "4FULwY597End93hpmbGVGasZ6FyeKZkyEuQUje217BChjwpDNLaMKExtfcCoLRGP96hE3Mdv5qHs7R7DNEJShWH",
  "key17": "bsw6wVSUuFXBL1B7jSZU5VbhW6f5PKq4XfLDpkQFxAZRoJPAyKbaeHj8JDfKP16Pog2aa6PuchVDiQTAYiunGn1",
  "key18": "3DTBQESd2aHbaeRyMz26AeXr9zCgFdh4MDfYyveQrHwyJsyJuAkd8QCmRcj5TaJqY5FaaUNvfGuf8cqAkWzpam8s",
  "key19": "3PKTh5iBPumSsN5ixX6Hefp6u8ThPtL4v7wfeTbmg7toA3WY3SZeoyLMTQfa2de2yd4w3SspEVGo6AQDkfFoZej8",
  "key20": "NvShxy5t8kKBhzXaTucoH7z9tz7xKqrGf7iADZVG3d2HtJ9w2fJ6SpjcHwSGqgEcq7QAE9vTFWmv1veP46j82WS",
  "key21": "4s372H5sa974PN8Qpt96HHRwmFeEU4Kyvgd7szTgR4oD5iLduqKfKU8yM9id2oLqhwRS3C9i1EjA49d3KwwB4Cv",
  "key22": "BBM62MJMXMnrLVoXDabjNt8nu1pW1RgHmMnsPoCPCMYRfEaKtQqVHk2F6cua6XTgq4HuLfgExkboqsfx8NRkNXJ",
  "key23": "2FPgTGgBTN8m66vmCwSbwLViQ6Xo1dbVGTapWRLLzfigKa9b58bjTTeRM3kgfbobxTGjAzaqVGKRAX9o7tT6MQqv",
  "key24": "48GEScJQVPac9brqTsQsGm7Dejs9qj7LS1uuUhKYrUSPUviLqdp6Vt8cZs3y32vTJrAv3fJTPL8WqjP44b6PuepF"
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
