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
    "5AnJrqjQiK8UVZKazwWbu2d6SSZPmDbnLXgG1fKjUxYkXDq749w3VPzp3RZQ6ctkQHu4CwZB8n3W1jRDsQHrJMmn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjQUbse2b4xVFe9WgtUrATHUTtm3mJuYzkGQbigRzUd1z9WZrawojLE5SGv3vrhzLkzLHP9Je7RbsLRZzU11Pnc",
  "key1": "2Zh1cGgXDpQ6kY42PHL3nPtM9aUcvcJQ1UsshtmAUiSbat1pvqAkaG9UURuFGYMLrBtF7CA8m9BcZwpocz2ajTEA",
  "key2": "3gh6GN6exJjwe9MBDAspQrMGq2cGWQcXJvvnrJExZajhfBvFaYFP5ed55NCm9LPYNADSwVn66aFNvme3pDRJirN5",
  "key3": "5AtFGAbog9Z5r48jd1pRXQ8ES2MzceaNaKpm2BFbtGxZaLhMfScxMgNFFaSa5m6KAqodXUtSXJ83WVQTiMyLmrFB",
  "key4": "272cSi2dxB92yteKMQpEUUY3YbzjYjmshnwUbyVn5iEHtwitM3TuwKJpC8YMwe2SpygjUxzdsJHXznFx3oE1wpJX",
  "key5": "nuZEEy91pCNzmJuUdu5upNiV1xZbaEqDSe2sxiU71qNjQoMaaFe9s8dctEZvkdieoz2XDi6BZVRMiV5N97QxxNv",
  "key6": "56vATkwBzfEkjXyTKc3TjZK6QXoPHmLBWvTFgukxrpvoTDzPidxyeeL8nLY95viuAydJ12r3e2kfxq9X843QAmaX",
  "key7": "9MZ3PpwXVW6ZVGTbNSpePiHZiVViBNpVc3FuFomkc1D3knDAHd4RoAbbk9zqiQPkAYKvfCM9iAXhfXwxSH13TZo",
  "key8": "3gExdyHsJNNbhyTCQiSTDLUgqTprvyApyhsp1GPRNonbpMPvBya3mS7pXYHD4CXkawnnVyehnuYFKkNdyXvWAKwa",
  "key9": "1VfjU3rnEgj4QC8cz6u2Aijb4bW5nqZrbJeDFwdvk2obzw2omHLgyo1CpwCaE3KUCoVm6G3r5193NZ61vDiKGEZ",
  "key10": "3Bwr42K7y7i6UvgTZZSrBi3t82xu2ajZKQAawEfzwyo1JPN3VraW6j9UNjxBvKxwmkAa3u6GG87MoV6gpwQikGJX",
  "key11": "q78cHG7g5u8pMmuhRGfNiK2BnpJ7riKmxQSngZa2KDUWbob5Rs2pKutB4t7tfFzjCWbarBJcAb8ZtrgbJf564GF",
  "key12": "2iApEmQ7P88CkSV4bFDteSFkgQ22H8JyuTsgx1s4KX5TMmL5AnAjFJ5vnwkudfxAZ1L9kPsjwuC64JhXTubxcY71",
  "key13": "4jo2gS148spNQtHujYHeEdiPSBdDbZQifWc1yd8dEAyds3B7mwKGJKubthzJePmjgWF8k2Tm84K4X2ArubRXD42K",
  "key14": "3n1eJEW1hwCrK9ETAeT8jppMP8EPxrLyUNwkWdBst5uxZ8CFYJ2HrJT4ZT7V78LPUAgrJ6a82gaTewMnUWvEsUpz",
  "key15": "2qNay7jQwmaHd121SZJiU85ZpU3GhXURCpYoS9YHXXnJJ9oMfugvGbacbUydwoP2cDQtD6tsFFh7Scwy7MK7WTp7",
  "key16": "3xmGNS4Khs8oQnZv8GvVKgZoHjrgoiXGByFK6AbmNHvjQQW3dETfCFNnZv2SZw1yKMwkbgSsexFXLy6d6fARr8QN",
  "key17": "3xyD1KdFmCSodHJN77pL4oBxpnbRmzsNoSSwsrB15TuXtCM6Up2mp6uVuK7HsGp51iAoi2vEjwtFpwdWJiu2CgJK",
  "key18": "2QqzfawfVjcJLtqz3jQJGnFDLVAYY35ZD5MVzXryJwDto9WqEWXfvfLtTevALUAPzkDtVXhiyCEkk2zCBnF6mHPK",
  "key19": "3HcY7tmBnYpqcY3ufAkDLuAx1iTk6Ue468kdJP2JNQFxoH3zfV6xF3jnW47WNuFwprF8cYoKiC464oDGPPUABe2U",
  "key20": "5cyoGj55cUEPpiz9Ph2hL26s2tkvm3U2UDsLehuZ85Tj7gsf3zd19nAV51us5DZnBQ3xnP9BokMuQrPkN5CLfxxn",
  "key21": "4EZkSM1cpruF6UNeWnmqWof4n8MdLATp5vsfwGRRzKhMNh1GZdduBAeSRPb9iewZiPnXzzrK9qcRSsSYZ1HUWZcb",
  "key22": "2XGev1a7TqicHwfxBZJqnuNBbysKt3mejq3pY21emamovYK9kC2uBju6y7hma6oX2ewtucrUA9wwBGsGyS8F5u6v",
  "key23": "7bsV77hEMiMQRkXvpBo56jmn3wPxhuMNZSvvavzWmLcNGPJUGi451SwgRVpAJ6mq5u3A2Md8B4mEjiaUUgBQUJQ",
  "key24": "2HFN5ENbjazw3UN7pFr17iSfV4HUu22mtCRNpB3QgHdZhwryRTjXc9DkB5qa3YMBjZoqu9QMpPVpFPtrSX2rhkRe",
  "key25": "6GCtzZDV6JrjaDHS1CUUpvL6gjAr6YHRs5SkSMX9tALa2FLEr3qpNCSVppis6ECpaF7pHQReeaHfBVBBU4SLxBm",
  "key26": "58EqzXhHpKX2WjhnXCFwfXz2r7DZM8Dm1FcESo3KKsAbEVX2C3hm9Ri6d4jGTVnFsq6DfaCFyXektSk4rZBb65EZ",
  "key27": "5VP6WJrnPJ8CWToirV575MDLzwHZbqeaHaDAtwEyyknKT2rkzmJ8AnkcnrBujy2NxRtCi3BRAg2Cbhmo7dydPwrh",
  "key28": "59hUsLBwrR2iC1zyAkCcaG4e5E24B77KhpFbryCUAaLa9WCXdNtKPSmP2forb5xLhZSGamzs7ENsHZPfVJxDNWc6",
  "key29": "3Dve5JgHCYxUF6ea4NJymjbYUo8Ng2c5443F4hY6Cpz88MdVb9sKcYbnEhtmRLRkfZmojzjm4fFroucXKecuXu7Y",
  "key30": "26Ak7LGasGWqSEGroFnSKHDFrxsapqrUy4kxfdKqQ6AGBwpK1c85JfW4j515RSTupF9bZqiDFttZWXkL47NwMtrS",
  "key31": "35igncZAvkdYPaFtT7BRWP9KiorM1YY7HeTyfPWKr3RzwzpfeNbktv6wDAaeqBS7WNR5R2D5qhzEiNYnmv2HUN8K"
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
