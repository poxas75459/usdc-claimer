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
    "4mUssR8gvrtTJLiKa9nTdgtZw5dpSst4kTMVJBexa1YEWbpvr7G3masZCDmjDZjswfpxz1GT1qS26KP8RM2FifYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BWxm5Y16xUvFMjTtoPosikZcAyVyRNCDGcgkHERiFbX8edejymXo2FZgDKz5PwzQXhuqKewDxC2cqkauwd455bj",
  "key1": "3BUygdawMB74KJiFokY9KjWUanh4Vrdpkysyqg3VBiwwisV564NGBBZyCQeVDbP9oFU1zQiaDfZxwBviVRK5QxDh",
  "key2": "46k5vcmtb9tc13BoqBpVdmKuXEfh6DTWMaNYWhbkAhi5M6dDyjsSNDNpqHBm4XatNCNqPBuCRpxUeHkPn6oR8r7L",
  "key3": "4yGHeA4wGEc6opXDTxGEGTBJyXisckE9FnX2CCS6DBCBJzNEcFZZdNNQp8w3kEUpnL36AZvxvdK9rjRWLmJSqfHA",
  "key4": "5nxq4w6KX7TMgGwjn5d5Wr51Q3Dt5MckZbW99qXji9wpao75V7VePrm7tY39n6wYmZHdSQXFEytCHFtzbN5PCqpQ",
  "key5": "tcwEXhJgmvp3LHKjmJsYjPCdrTbtFCy9qoi76fyyWdRieufgoFX148m8v657hkqVg6hhNwYCCi2LL6tn2251tGX",
  "key6": "2NGWf7SdLGia2kQaUjkdhMssnLsSf1ryWhKxZpM8WeGvLSYHrn4hiGu58q91vhumW6PDxsuYJKncrf2D8TiRGS67",
  "key7": "4F7dcCUTAzhWvBJnTdgXv1yThL3SkizvYXLgNvJGwChKEr23vTpSiAtwRG71i3BskJcDPmHvSXN1AJAHVZEWfm4e",
  "key8": "2ULyNKncSZ3L9wp93ZgKpa6kfWLZoZSgq2miA1YbkGjX5CQ2idL56WDeLFdkgUCKiPEXAG15TSUg1XCM8C7KDaeR",
  "key9": "2La6SDVHx3tDivgNP5GtF1nKjEmdLDoSNo5TpkoZMcQyGopqstKumY14iSGwKDoA1cgT1gneDjZbSDqBwpiqTcYo",
  "key10": "4tcSuWpT3omRpEBxTMZMdPM72AeXKMUEDC65U7A5HLF9R1Yz71KnKjQSq6dY36vxDVteFkJBwFrD8m3wbqFWQA8H",
  "key11": "4DZ5iKqnP8iTNmGT6CDgzT9WtPfjDsFDTymihr8izW9TPBB5c4MFeeNxwn6zXkJ1DbJpXEBXHt5vDupWhJ58ggSo",
  "key12": "3A4EYT3t7HceuBdfByH11gWbVuYrpmM5BLnGpKpgoe2CBV2f8hHyAsn91NhZdJnYCUzVrJJwRvXfjhsHZdwn14pB",
  "key13": "Vn7xjqrABxJuYDrCou6QcyFsdFP8rwuw2rVhDB8hZfmReqoB8fmDWoAJMvhnkGqfK4Jg4S245YHBh7VcrS5qXvh",
  "key14": "5XVt19TWDWzcUseD22cQA69TW4FdVS7aH43Z4rW4T6c6enS9WV4aVwQXWU1xvGjLqLWGCi1pGPwGFV3BtLCeTwEf",
  "key15": "2YpiYCGYnhTEvcyp3A9b5fWBue8L1QdRGxGXWXrwTyvA6DdUrkJpJ6UxUbZXwsAPDQPyQx8WGQuPGYk1Kid1zLPq",
  "key16": "4uThAts2KUPRAf7doArDJBGE4Mpppe7Rv8ofRDmjNu4kFnBcjByr4uAFPtvfRoMvKpZrJ5gPt5t2JmJiz1mQgVAK",
  "key17": "38KR2Ks5N1T3A6ZK6FQ7tZkJXxnnDisZhapJmM8QGezHhLdrKhRdCfFBsMLSkW4hxPEArR4GJstVQidJYNPPEcck",
  "key18": "5edvYwmrDyp3FoJxpmUWDgumkBARX5hC3L9YT4iecaVDstbzq4fRvnYYwV9XFU9yPrkmwQkc6Sh8BzbcvuoVtVxs",
  "key19": "k5KyQua2stUqKZEAmy3sPt4rGHoJDYTczRghrGcY3GgutUapBoM5guYCrJbdEDuPWfe9HrW1ByfuA32KW1FWymX",
  "key20": "4C5aTRWVaL9nKH4Nt5S7Ttveku8TRu5Gxi9tsf8meZ6YJQSxQdii3DUErFty6LBHPXv48DvMUmbrZoUzhNKVwBej",
  "key21": "312sVAVQ5igBWSTnnzkU68df4GCoDHZfsAnXunTzm8GjiCASemHzgYrsVX1xGuv8zgsKdDPPqsNMNZTUo4gctXNM",
  "key22": "578b4scxB9fE5KYrpCv1RyG1BhTpSjMrdeFhSqjcF48rJwXsCp8hyVJrqWq7TyowJzh9699RfmEsRv8Rr2P3MR4e",
  "key23": "2dVq4fn5XnfUzrm5pzD8tXFD871S3dccKExLzg2mMaKRYY4swoPqAF9JvA6RWZPAaaoR5QWHHuU8tcCEi5ve361K",
  "key24": "2UicGRccvbyajzzAdSfimZ3NPW6MuzgVEpq2aBGVYuvzNkkakPk1YHdx7Jmx7x2xKZqrkpYmh91D7wksBhWc9ZNY",
  "key25": "2Sop2pzUZEZ12vuWyaUPdfKJhCaXCysdRkz9EqNjTTsEZ723XdV4wpg1Qy5EckzZg8ZUq73KCYzSrvKCRh8W6Sm8",
  "key26": "2MAZQod6iHNAjrcpXVorBJ2oTt5FRLYK571Q7w53gq6A4ZUDUJgaszRgs26jmaA3L6McHNezc3BgpSXisKjGSw6E",
  "key27": "3wLrGg5kne2cLupGVmrzhJL5q6K8xhznf16XxL9W3sYsG1G5H1J88sFHymHbW7ita72P3nE85EuiS2XxvNRaATrx",
  "key28": "2KazkMNsdtB8Uv9nQi4JQgNmYvKsegMWLUdwWuAHc7imywmuJZ1DCCBee9aeGSnVne1WAMNA3113mcVNPYco49jf",
  "key29": "5E1C1j9Cv6WR2HjRzVpj3qdV3cwnUfZEay9hRJGXrAABiwPbi4XtwYKg7iPqf8mwq7ThrTgfh4XNKY8GytAaE6GW",
  "key30": "3qExnkUf1hEWAj7RHKZzrJMVEZtg86Ao2sVPBZEwYJdomVgVcxfU7P5Nd12en1cTkmPbNU4oCnEqmHaR74XKJSDh"
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
