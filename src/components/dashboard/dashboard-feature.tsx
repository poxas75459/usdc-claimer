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
    "4CCCT878rpGQ47GXBbsZAtt48d5JSSGuCTdRyfaEhGDaRJAYXiifREmt5yYScFdNdeYzEe3yD9C8WkbD7fmkyi1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CxtMCKznYxo32bUrGDpVVw649vuvq9pDDRnuWhQyR4EihVNyyeBa8gK9ximkemuxLwz49gsfv6cWwfArnG4nYp8",
  "key1": "5QWizTcJF6wX4sAzMrrFsumXPB5AdKFNJHQTvguxzZtpKPjUrd4oNxvGsANdFhAQ8cgZDyzsEkL44k6wjGFTcwLv",
  "key2": "JspbP8uWg9JC8oUTHRJEKXvRuCVAz3ikBXMQMz2JRCPs97sDWXseKge7hMfpgmTFszccVL2SjkgFbpXDWhGP1eo",
  "key3": "zdopRVTXrsnDhMHer4fJHvrWeu61jDjG8B3QgC8ae5qpWYLyHUFWbf7dwKx9df2xnjACSPzm4T3F4g8L55o3SRM",
  "key4": "5s8USb3qEr9pWpJ6muPHrvgfbgJdVb42sTVjD3BsWuXCeCgnKXbTWsN5XZBR6HoUkumTHWciWdJTswePHznvW29j",
  "key5": "4au93ehxGeW52afYZqD7wHUq2MfS2xTC1axqBMcyFfSXJFXASNduxbEuehQfafd4dXJSmNx8JuqJLeBL7L3BoF6Y",
  "key6": "4oWZyj9gtA6WAUra77nNUbhtV8UF6FcFuST3AdddL2kwMXuK58EZiSfUyiN87QUJQbWf7sa24y7XhMERvyumymzd",
  "key7": "5wv7q85DbctMbMZaUhiz21vEht5f3eSRDfUKmYnqgPjdFD1hCfZt4cTC7XniAkqh1k6aArnjuPXkroKBX16qSvrr",
  "key8": "4hrRd9YZhcoZ9W22acY5kgSF1TctKpxMcJ4oErjApcUbKJVJR5sAjVdvYafcVXoPoADyLHvyVHrxi9oda8CsSDUe",
  "key9": "58rQqmhsCmyR6LNwTKFUHSy8UA96zv9MNsQV5stykS8AG9HT7J8iBQUao7XrnMttoGJsz9osYJhnyommDvjUmxAS",
  "key10": "QtviBWZJeXWEWQBsntdur1sQVBNLqgtvVwNVMHd2YeNrn81gPhn8QDNQcfcsNFk5d9YQXBg5WHySvsTJZN2Ua5J",
  "key11": "3ATqpwbeiFzAmS3KQhqWvNDUZwggCcRupZHUpwtYvDLwVXPf8tyCwfeKjdDs4bxpWyKoen9hp2nkqjXhUJtNfJJg",
  "key12": "2LnogEnFDapfJyHTGUDo96TXRQZGmkrmnF6k6KQPJSvw1imczFVyrMB2cJde8dauuHAc7jYf8Q8v5foTKAWn68oZ",
  "key13": "4YJyq93do4K13AyTE4RiYyRLigP7vnZpFT7faUDH8xTdNxGms9z3j4HVW7iwDjzPB8oCBvUAtWtVanrxbsFp4CHN",
  "key14": "2VhiVzgdTV26TVHK73zXzeYKMXib2FHh3HQDN7FqDRpzf6JkWT88WvcJ4ktFFbKeAvJCejHCycoECGheVwxrcsYf",
  "key15": "5Zwb63izzvYapjNMVweUW9bAbqyzbFeBnuiN8foZnGQsr2GjCzaJRPL2CK9iNdV16iKCFi1pDKZanJaHR4tUkBNb",
  "key16": "4LGrggofpaKB6uPpH7sxKHpVYDvWFJEzeeT4ZRggmjjvF1h5e5v661hG2hepLKhPGkNg4yjopLeo8uZEbcmeHNgD",
  "key17": "3PQ2UfhguibwFWTtMgKDVa5K5DRCzKTzYQW9C7pmgoas9bg7rJEmEjuAsSxSe6pNiXXVu82kqFcSh4edmXeTuNP5",
  "key18": "bWTgYnX9nGmHEqZnkpyTAcioeXZbHmzWndgXhsyLrDtDipzLKE52cLaczPXT5KQTQj7EY7eppixVqSXMonme1pD",
  "key19": "2XBXhZaMX9xDWkoYRHkHy3Kq2yNkVuEm6fFz9svQt9VWeqXY7zbexjeKqYC4wmgZQR9JR3nb45nq5UfUZsD6LfWe",
  "key20": "5iWxRdmfAdjiP2qfVM1BSkcDb5HhgUBpzVQqv5ZQ7E7KJmE7QrNvDFSqgPxZQq4zpHbfHMLADLxxqpPAMHGpsAEr",
  "key21": "3n48gZXbFzhxWgbYHV6aWym9HitCx2DHk4srTnypDP676xqZ8vUKMTnocoKSc9VhXSxAgUQhyB2qzPZDbZRpsrLc",
  "key22": "4nTm7qf3s7cRygxktHe2mmoypNGa7K4JPvfFPNoSYUqVmSppA1fic2wGgNQUTq1GBqNtCZPXwo2wP1hmLxP6PtCQ",
  "key23": "29LrTbUYBSyuN1fPG5hfexqwurBF24Kz61tNVumvZRoaNmUPVtEgpg1oK9EoP2JZ9Dri3or67fg5S6eQ8BTqLkYU",
  "key24": "U93yx6CAUmSN8GSmuWrb6yDG5XsgBe1cgc8JGBPksxGio1UUd7GuDxYbN5W2JcLQVVCS3bi4SSowJnMY1YXxjSu",
  "key25": "4sgh3deEdJiJrBrcE5CC1YJfBShVUUWUDjnNCv9PPUYVd3jEuWqM4FCCvQMh7xvgggmmFU3xyrDZj3BHeYvUbHxu",
  "key26": "4DkkVBwSN2cU1ysixNHcrUMTTJQcF4PH4azgUvBR3zaBy2F2ByptovkqBbQjcUy7DivrX9E5sChs87tQggB29tWG",
  "key27": "3Xp3XqPnFg3abvDXuPJq2W4VEdLDg74DSwfzfWFVUqgX92ijkdAppmfcL9nENC4QrBAswvmzaNev9JZZqMt6pr7m",
  "key28": "HSkurua4ptKaUTsrYCB3aXebPRtRBvom7HvNrTaFPPHy2XSLGj9hNErjRXco8gfXHMTyhW2Qp5PuPDLGuZd9J1n",
  "key29": "2cgCujHnJsYYboeDjHLyV6KPJNtvZjmYzTmQP8kTJQyFZW9KufS4wGzWb4zxtLM5SwZ64EkSCXPP4J791czhSsaf",
  "key30": "3AP8hKL3h82dbr3qUYk127gMG5rNka7QCkRJoWAL2bVTDutEfPvugKfcHVnCjEXUpCh1Sw6NUFhf8GTBCnQmfpdV",
  "key31": "3WuygjSFbn2L2jED7a5S2cBjgWYZA3NF1H9EGDuvd56mQCt1TTLAmcZPYD7FRXa4Ypkd2wVzCn82F7DJTedbNjzh",
  "key32": "Ajns294ExidxYpBXgtUnXdMVqcicqheNQBpSEfQBazzd6mD596i6hf3B6A4Mm3xz1MkkuKLXeLK5qkiCbzEnT1b",
  "key33": "4PWY5SQj5Z12kVMiZ6TDQeGuyQSwxJEERgt3wN47sdrh8GUZMhaYqvmfsqM65qHfJmNLFGATVXFmwUQzMz5HB7oQ"
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
