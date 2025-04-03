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
    "346xfUFhk4uoMBs5jiG8VmqfJxQwVnJP7Mj8tSuA3mznaYFBh7GTnCCTe7eHpPM1SpKrmKeFPfo3UonHNawSx3e3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PwD6yJrsUHmzEtuF91gde3KSUxUrqfvF9khQNtAUUeX7pk4XkjksWC2HmsMoEyBQHSn3MsysWu6XSmzbMTJns3d",
  "key1": "F9Wqp1FXQ1vHm2qqTkHKSHSqm5jNv2wEr4gjjKLzYB8Tg8sNTHmg3YEhYr5cU32RtquMxFUJ44PMrNH8Cx5QJtr",
  "key2": "3pV2BBvQATNYguLDFgCrER7GFonLnmpHE23BrmkpSVEYFvEk6GgCumo5yfGdtbC3LQFyE3Rg1HzNGNWMWsTGW6ph",
  "key3": "4ZfYWsDg45FmqSEShKZbxE7zfpiQ5DREvYuMBF4XjMA2gPjhEQNGsfKoJTYmmnWP6PhFFo1kpy7nnUncdsuZDSMs",
  "key4": "s2rNLqDCGZEnTPRSqBZYnGN1bEGtwawW4E4KGf7jo9hAG39QxDnbhrKzspDySaSYXXFdc8oVM3SZ1oNSpbW26dL",
  "key5": "5vf6ofRjDNc8Y3dkL7bfBQKTE2hWjoFgVKz4q2LLNKUgfsM3T64tsuArJNAdnANwuBGLbWPur3m4DEMt6RrG4LoW",
  "key6": "9sAZaetGzDBNPjzmxzt8iwtFuTMvnj78qNSxe6F13zJvCp1sX76kfxDCc6gVAvmNqRBv1CCg63j4oAYeeKGVa2y",
  "key7": "SVANkARMmdbuCtpP3JUBWPQdiTqH3uCg84xkxBmQUvbFzuiXBrNMA4NY5YbvQtJ3AYU8RPGPBtV56tCDpXSjf3S",
  "key8": "5uGhggKzTDuzVn9F6LaQydZnkH4ohTQUac79dPgwPBcpqMBi5kYnJboeRQZ9QSbuWoLqPnTFUkU1VkSDMt5T49UW",
  "key9": "F9iRDKHrSEEM5zR33qsaoPfbzvo1vo3EJvB8UsbnfmmJDPcbVTcLUmgxJmsACqgGuAqq3Swx21c591683Kxome8",
  "key10": "4a64Rg9SMHJ3EbvbLCSE1zN27zP6eTttHQrtk3vzaGg1PvYUu2ESo1yaWdxoTbpw1xVugTLpZpvS7Two4YHbpNhT",
  "key11": "2AbJ8GpcAdkU5f999AXa8KWff6NhqTPbmEowb7wheV7uuFe2cDmFN3av7r7h4UiVeULyv1wi1qr1dh6vQgihVpXJ",
  "key12": "671ReT6fH9QxEo5HbazWe1oUqEV6WpsoovH1nVN1TedfkUcZRmnNf83akFgdfWZ4bciuLRWqczp99EWnzeCceRaK",
  "key13": "yGRXrvvPKnnFG23gNStn4gjqhR8huDpRUAKvUNdY78pUhAuhhwcapyAWNq797zENRFH72JxLnuJZpq3KcJ9nV91",
  "key14": "2SCtiuN7Cdwx3PHqq5zPXzfGDtrK4oeuVibfe3VmQuho1FHPWAC64cdhRqvMkYrByZCMas3bzA1C6vs4kWnzar9g",
  "key15": "2kk7XhAhYs6fq7GCH1e1AxShMsUjvgaZNvi9R1LqhNPhJbfU6KQStsjtQbxZKuy8hzo7d2PPFfTgqWtk356oKrEM",
  "key16": "3Vs63DaUqzH6g5X5bYtTrhh7pZVTg2N52tKLoG1xFqtUd6tcnCn7EGLT3dwpYfCBYcyatricQHAMMgc1Lnrx4p4L",
  "key17": "4QoD9jNehDiFFhmAnaRqSBmcfNKXrYk1PYHsKocSThCGVVxtkG8PGh2sqQgUcVStsLp6DcmKQy56TFE8eVQC2T6g",
  "key18": "5SW73Y52wM9Haq9ubb9B1eugtJsjEkbpfVenoAQkZAaPJWjRxAyKYEHW43UVAKfVbDhEbde2wyhbdChvja4Zr8Nb",
  "key19": "29qSFboCh4Uz8dZ8rXkZ7h7g7Bm6LP6AwaozYJ39v6Q6ENz59ib3fWjwBVzgxtpRLHRDku2tEVNDQpmrsP2nvEZB",
  "key20": "fXFZ9nkd9NacMf3VyGSXKaegVEGVh6G3SC7Tt2c3PVau4Sc8w3GBZ7g6furTbQ6MZvimgWq8uwY4rrsFkMZ5WLt",
  "key21": "4uTr1F2N6bRMFfRkudvwqiRatrypWLUXjydRWQg5LZaYGT5U5X7E78hdbm47EmC7qtjQN7sQn5UAiJcWKwbW5HRo",
  "key22": "2iP4STdF1XeMqHgGhT6yNzh8ika5HgQQhn1XEvujbK4QsEF2hKkN6Woub3NFpzhAiTDreYXhwhfy6v9diAg2kFeh",
  "key23": "2aywUVWGH88WqKVk7v61fKdVB5s8aQpGhKUtLkQG8WgMEmksPnNjxzHgQ3aPNSdY2yiN9s4zVaMFCpHtTqfXdPxg",
  "key24": "2AR6sFc4xUmo8tp5aiYctWKcdf6wqgmfeqxUiR4EZHe9xR57vkEVfviKbyCmXpzAVcskuqqwxUwZbYNqn6HPHVBd",
  "key25": "4LzNCL7UrNBFbk7RXDoykZQr5p6E78C4yGWMGnPspsCq323en7oGDgjiHeZHKzpgv6gnXwwKVQWB1yPvnb7yRdmk",
  "key26": "2fSjdXXbVG4ALqDt3jMG9cnfmpr9PPnaFATGc9Q4yd93AxaTddwozzp78gyTqDohfpKmVagz6hgsNfnNrxTWz1uE",
  "key27": "2RvRkm4bUjPDZhXFDEqqtUZiu6n38Zy1C3cvCeXPnt3oTH1xsinSee8BbX8x85raAzM9vcss4yKvgnipECQxxFgt"
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
