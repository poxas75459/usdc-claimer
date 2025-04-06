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
    "2BLqNnqZ78RsHX6iUNfaVoLZJ6epE1HyqJfJyHUA3hTdeFEw8KxtkaAyLvSW9EGpedSudyteSe3XjoQqdq7bhVL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZfCYqDKSmjEqn81nhEhebcUDyxJjjDsoTob1vM9niWYKDSg4FoWB6WrqiLqaWmy8QkPhEKJgGesTgLgfVF9D5Z",
  "key1": "2aHGDtrhyfYjHgJGfDZ1FHLVKSvuKoqMAubRa9Ww9hexMid75uxS2PdHefqxYTtMuz8a1NSoLoJdkmfvpJC8hh3x",
  "key2": "3KBKXh4mF4nN25KHitvkZqbgX79pf5xNDgb6Bbcm23weZ66SnQS2S6UJBik3mvHBwGME8CvG6CRfgnYgxvLGhWEP",
  "key3": "5BVpUeBYCbpDZcnPbtdDvN8JUFfCcpZGprLW6NEEGM8QB8aiPsWMGyfAGiKLnUU1AAEpQcmRGuPbBYFWFCqLMzfa",
  "key4": "2rxLm7nt7gyLbURh1gr96H5uSNcTVjxKXHoQt3J8C1XSQpEoFDYrveA8babPzdW1jnJh6oncanZkTAZ5dhv2xoLC",
  "key5": "3GFQJWzWbGF3xbhFthq1z3xs7z96ohG27iADNmKAM3KAfSrPeFN6nKcwyf1Uvry43SmbeWbzcmHKoZuRyvHGM27N",
  "key6": "3Mbzh4awLD7xYnUz6X84xUYNmxoND4raJ8oQCzWdCeLdfeLtszQBHBR54LT36PEY6UjnxAsRcPGTDnxp6Yg5gZMA",
  "key7": "4j7azzEwYTFUYZcCtc9neJKXzD3WrCP97qmGz6meZksrJUNbTXCCdY5VpudCApZkTS76w7E2iL95F3yhdv3ofoU5",
  "key8": "4242hETNdB2B59DQfqv456bgXqwhRxeTt2pSEQiuWpFQn9Hk1Jkt227DxyJNQdfVLG49zpiiYNG1RNPc9MatxyJU",
  "key9": "V7Yu4VbcLyf2whVXvfrGkhx8dVeY3pZUbXfTrB76tJgPdBwAEYH58rf3GzwJ3ePrZMXZa2xmiaFnjxowm5uX9we",
  "key10": "2XhotD8DNLHHwAozYagUa6Kp4BV7dzBCeMcEwvDYWUQFgGYiU3VCeCEbUh1BinnV99KLnSo26EfRP2P3iYZ2vTgM",
  "key11": "64jH3dz8JMuLBUahUddknS69GJ9ssiFoqijUcDUPievW3E4XTGfHztjXUCUENGK5z18LrPQ6vTsgApmJ59N6Zu9k",
  "key12": "4ivFp8rsjY8SVYwMWadeVu8pU7dWfXvUnne5YyuuR3jmFGDVYDHGE98zPZsLxEuUHRspP8N2hNHrbBh7ZQz5DSNv",
  "key13": "3Hv33tcC24vYCPYGUjy28vwMPwpqo1YE2sC4BXveCpx42BR7jDr5CwsrJ5tAXQZbGfBbiXzBNrkJ7YqtUHRdp2Pf",
  "key14": "63NUT3UURo24gmTLRBdm99TPfmbqmtDbCbWBpdHCceFLyw4A1mf1uz4PAX2DDL5h9MjMR8uDbreYpCyhbdvdVwax",
  "key15": "4ZYtn1CJ98t4p5WBVxPPKKF7D8w1c3SNqxj4Q9nVEpf1P4MWvvVa5GWNwC2v8DWDSjitHsbNmMpzpDZmF9AZPi4Q",
  "key16": "3pcmAEScbNKR9AVDdKyofMU3gwRJ8ak925fiywqnRHkWaxXPWLJPzS7Cs8GsW9kY1TJoofvE7VoTw27FZm1fdeAK",
  "key17": "3urmVNBaLuDDzrRiVBfUP6KXuGfrc2hGNdTiKU3yYUfXVppwNMRsY6MK2wHQ6qZRGNr1sE9pup71ixfwVfR1JZe3",
  "key18": "2Mrjf4sVeVZ4w3JX4nmbqkEiga8fzyaj3NmGJF52AYd7bBKqUgc7toXHmz94kPTxTRKFsZttQzUpBwYdvQ6DWRjz",
  "key19": "3pkKP34sTZFWc2X3RvBFkPzWKgDN5pLMwUay8gWWQ3PwXWDihXSx48ihQdPvB7w5AdmSvrzBv5m3LtKjSz74XgjY",
  "key20": "66CuBctgreKWpmZRUVrCYzctuJVgQVAe17KcRX2LtayhSjupVvrXgCzWp65Qo32vQEGbDZFnwFuy9UEEL14w63BX",
  "key21": "4NJa3FHdumg4SNYgQPqkTnrDoHFTjF1SUXiSR7jQqKA8jTRaVsFuxC4yHkjSDcidiayYc3bWjnSkdU53UAtiGFGB",
  "key22": "GWA7vbDXhfYyCFmsxvSnAHXudBxYPybREoQQutm1NrqsQoToTcw4yaZ6VPk7hS8c5ocQQfmUi156YxxLZStRMpx",
  "key23": "5XapE2pnV5a3F2M6RD7HLC1gQXsjBSq2WYtMvrma1SC4CsHSvFKEHY7vDVh8cENTAs76r5jKywYZ362fv4hEddta",
  "key24": "5F2ydTWzJy9Z9Ww9C2Sz22iESyXo9Zj3LB8qNUUczqpD5vdNFEJUSgf1uw9UeC7LMPNnApSJbhDbTccnpKgxh3gg",
  "key25": "5uhZTTUj8MFhSe6mExd5Q6mqFZeZnux4Xnt8JxvbuqLFhZJYj9UcG73vHEebtNGKSRMsJRCpBE3PpVPfuCNGv4Ze",
  "key26": "4yxDsvtoPN1zPZ2PGHrXcLcxwqn9TNypExt42cXUp2racY2zvd5AGiSiwAH4vJhNRjkE6BZN2ymdKX4aYcRVMfCW",
  "key27": "61AtieU43jyk8ywn7QTXHnZJc9HXphXGns3WiXNS5zMV3UcPBNfN68zKYbm6MvUC3ZKn2JvKTMVQ2yQ6dVDJhdhx",
  "key28": "4mayF1pNCjjDdanXdcvAPy9Lc3t6VggGYMehVWH42rTh36HCrvdBvorhofHSzUEiwFBSuSfbPEjtbyj9sYJ9Xj7x",
  "key29": "4hgHtDbfBnPEgZ3k6FHmV6oqCpdWyE6Fb99SMAxLv9qqHwhZEq1atKyATkjufT5bd8b44NPmoMmbMPrvti7t6RD4",
  "key30": "3ig2Sb89EhsjteXqnKevJwaADzrZ6jpdj5WL8dRbKtkDFWpdK5z5deTwSmd4wZ6C3ixqmLKMVUmdcK7AjjH5ZESd"
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
