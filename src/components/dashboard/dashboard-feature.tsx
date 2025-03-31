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
    "5p34nbhKzSiAC2ehcm8fwzc5n2DwDs5LZNppNixzpxbKGP2fitBTjBEEkDxWjU4Nr2yzv3g8zFmpHvVva2BUB7sh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cCU2Baf6mx4x7g2T8999m17qbmraSte37YTh5vS5J8EgxHf5dUGCk3D5gnFY7iTVmm8YSuJ73XUuYuj4WkML7Lk",
  "key1": "4KUtNTWoB5kgNSp36WBuaEZ75sQVTR2sG9dCZRQGv8SVpG9KggCv49KCtvp25SXpES14Nbr6NpGm6TjnKruhHVFw",
  "key2": "5WfWnZQMD5w8nHAyKavJCWgojgr5EeyWYHPBEf1QSMYmVeNThssxZvax4YTtaroR99CRUMQovr2FXjdX6zFvnnQA",
  "key3": "2es2VkUdbWUXYUWvPvAcQYKuot23DTx55TUgtyAW3w3uUR1oUhVwdWvd74vnmAJqRcykDFu9KzniW3n78DeabYGx",
  "key4": "2eH4G5eGki86dUcxYyP63gsSwcvzXT2Hvbao6KukadzU9Cu8L8d3DRqdrAxwZo3JNpYWEPTJsnbzrKeY86M3tEsM",
  "key5": "4XuPXWoHZk58osKXu2XRwhKXdvbo6XmDgFkESq6TqoQWeK2S555KoZZQTSwyyW47aFXZEGFxJDHRhVzv58JVyxm1",
  "key6": "4d7CkvQkqbHTM6YAwZx2MRgLowchNoDaX6Co4wzdTcYhdv4K4fi8V4aXyMkcjZEbXojZDMAGCK1P5hMiFW9HVSuN",
  "key7": "5XuRZjthA3Br8QDUGegZW77qLR4aQfhb6vo3M3CFdtDraLDfFfYwaMRKvcCTnZprMzwJ76eKGSQSZ7VQALRoMsgk",
  "key8": "2wi1Kpnbet3ZsCyVua5FcaGuPsDx9RYom4piwFQhN6qb1UZ9qXiydrkARxP4WZQNUpnoARDsFuokCFTQMfc7HZGn",
  "key9": "2iYbx1CSAnoDGAnB3buDndjkEN5xPwyzTCRdV3KBgdZAbocP16PSE7RdEVPFTYnvcq2R3Kd7MM5nuTjv5ydpu7iK",
  "key10": "4EKBpuKC4JCrEkT5mXu4JLuisXkTNRGLHruzL9mvb4E3QEU46Mfcq31MeF71MSdBJ9W3q2VNNEL5NYCNA5v2hFFw",
  "key11": "4RatvYLo7f6fnwfPkZULVS8rx4Sy4fBJtLgdMvjhUwdfgPvehDprsUn8Wb6jp7XKXJozF6CehVopsgXzv733R1yV",
  "key12": "4uem1XndFy9NFefi14DSU2NfFqQJAcwSBAtEbkJxqYy11jfuxaNFQ9UhNgKhhbzi9qDWNQutRGDencCh5YfmiyfN",
  "key13": "3ZQdXuhdZDbWVygMCfBXksMyTeXyrAoSgrbhg7wsQek1C436rsx1MawaqsHhShjayWC2df5iVT1w9L9b49xmdPhG",
  "key14": "5ufjV3j4LDFiDn3Noeon7w6VvAenB2XQp4QqKfQUNZ6ebwcfqRwVGCiLAEpEJcZWTu4M57Up7qmudW896tBVNeBY",
  "key15": "2i6z6bLZ9bmPgoLz1bNzSUNaNWsnjqhJE4V2pG9iEphwSs4vbPSHiX6QdLYYXNw8Z6vZRFDkKLCaDNSFsunBe8vs",
  "key16": "3Zbqwp75MkxstPGWWajA23BURd2H5h2i542hoVCSvZ2E5ZbVBDSbpEbxgG4CAdxLPUKGDyDxEJ2xqqzQaQXprnpM",
  "key17": "3SyQkbTbn1aXx7dg4JQmPKAgP2DeYgzt7zkg8Foth5oCK1UvMe3D6Pya6zxebwRf12JiqD9FTQ7B4AuxmdYEqeMY",
  "key18": "23o1xBK6xxZ9bpuruksJ7EbWgBzpUt9JGiqaQNxXMeev9TM9FmqZ1StFud8UyP8xkvQpRUiR8AkYLE1pTgXUYd9a",
  "key19": "5YY2zbBAo9LiRRStShq8kHGtayw7kQc9zHSqv6satxAnYeCq7pcpn9a3k7tANWiEkR1M4q7w14cUd6msxrFE94KK",
  "key20": "4noWcEBp4C5Lc7pwKQDqaVHFC1GPAXkrX45K7x4ZdbciHhGxaSoUgqFPy9cgTp5uN7WaQ6zbKnpLtQgh4d3FVc64",
  "key21": "331V1hEaq7K9VeGKK6sEERAzbGB8TFyZTk7HAxq8jMaibiHdfphvVeNkkzWxPtQ1R2dFUJJGGZ9yLB8QtrDyRwHt",
  "key22": "x1zDLGzoKtRQ7oNGJdXaZGRZ2inxgjTJJDJQXH3BYgD54RcZ42dV8dMp926XPqQswkCivcbEW3pW4vGaStiP9ah",
  "key23": "5u5cjkAwjrb15HWnEYBv6PPYFpSejRjBxjQDs1zqa8nYUzdUCZCZPZrYnBPZ66oaXdnqWXA3jQbzzvt3gFAeRQC2",
  "key24": "5xM5dLngu9CULeFwkTj5FZ7NfRdTwSXPwpTk2es3Db7JZv621QFDVfjqgYzBGfpzcmqt2246U19i3sFjWN1e9jfB",
  "key25": "3tUoVFfvshMqvRBWANwbuhNwR8bJWPmvUcCxhReqV7aAaWZ7SxwbTLpfU9XkkSVhxPjkTfVmfzyZRUPNXUkujD8D",
  "key26": "2noxLRd5qG9Nm5v63MmihPDHH2bdxbhBm6mXe7MwqiuFVtS9mb1DFEuBbJKbufwUB6g7ds63dBhUJV19nGPSKdj1",
  "key27": "5GAbu1PK72DSF8TnZ64BkZGwRpdNCWiVRZsh5bwP9mGvYZyBBcm38C3N3XcjMZytgrbRqnEQUAxcRWvfjrSgSYpY",
  "key28": "3JsFZDtm288Y1bU93VRTWWpXo1VGQMa9aa4n6z7C9zMK3Y7df4PKHUomqNe2YUsyPgJxAq1NLHvyjavakixezjYg"
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
