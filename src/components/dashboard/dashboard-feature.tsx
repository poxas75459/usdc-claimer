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
    "2cQSsFjpUjb39y5BtAGPkFSQTgbV81gNmEqsDpBc2P2DtQHwmMtXEBZJz25rMXX2NcvLQVBUtqr5ke8h7VZRvTsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mQT5UjWKCBkf2amvPyeVAAz3dALRum6aCmZFa36Zm3G94WUm5vn9KsC7GNuDHJ6LX9kzaWn6s4x5CztxUK2RtJE",
  "key1": "L5Y7Mnu2NQgaJKC1mLkN2mfbL5EMM4goz9mcNCxvRnKnjZFANjiHdWh976zQ67UY32S1fufzAsenq5iGVqWYoni",
  "key2": "5apREdHYnZ3ocEXNcATuDgzCTcZRhRqaH7GAvMZ1ngP6w8ZjuuGjZfjWDq5JC46ZhfitYC6Bjru24JmxCzL7cuwD",
  "key3": "VJXNeLrEs9g53Nyr79cFannhT4chFhJ345LCUyaAZDoiJqfzhqMtyiaMQYvQsxDeGNyYAU2zVfRqw6x4gDXoRgw",
  "key4": "2j6ByLtEWTWGUTKoeR4GjZscnm89ZsjhXF4CvZxdZnT2MABffCRDYW4YWhwNJtVmSWwdTCvJUGZzoBeSGKT3Ra6v",
  "key5": "5EFztMYN7cp8YCcj6MAMgBAz1KbWn5bgsq5ejyX3N3wBp8uyN7KcvCvKrNoxR5rFjK5xbHN8DujBqagYdz8D14AZ",
  "key6": "42M2vR6F2t2JLhqTBfURbXdYiomXdXB2ZiUY8jeY9gBdcnPUC1dNcXWdHEKJ4UN7bijMgWh3oq6A2sRQTtZxQAAW",
  "key7": "2nHLWLhh849m48gCFAwV7fm4pyJrXZ5jdCRvk6VungqDTHhXUtQeDTmoLFYgPukq4FXDkTpoYwypDtN4LRFazhrn",
  "key8": "4Y6fxZguozFcB18V2fN13rUcY4zjjUP9HGb1AfwT3hDEEFJETEjEWZXcwFLd88fBsDc2CPDwVU9qXSoCC6oaLzH2",
  "key9": "5xfgv9E9m6sTrZ1uCBNsRigP2th9cdnvegyAicw59ydaZWBnrf99AdnAtpj2pLADv6RjezLxTafXiEcvvwnpkyob",
  "key10": "2Z1Z5ftDj1556LhmqpR8gnhpTWfjzLLqb8ctpsUNYAZxSBrBCxzecRbRaFU2MHR3J8yMbzJEThvT7GKMmscXgHvy",
  "key11": "64iWpTEz8k7gZKreedFnGPPx41mNqPypB8XuuVsDWSAgcSJfuwotFk39hCufJRyGDUMjk7KmKhz1WEscfp1ht2fh",
  "key12": "2MyWk1iPnUS9vpdLqFX7HuTDAtWjS1UfujLJUDUbJzNb9KRdhR1yBjzLgjD1vkdMgrso9A8LpQwcjchzDvptTnw4",
  "key13": "4wUnJU1WMD8z3rV3YCR2DEzMDsNRmgxeyeJG7QhigS1gZMmUXRmy6ajD35fkb2wp1PcALRE88cUQHc6PSqFQ8fTX",
  "key14": "3pUXY1ZfGHFQpn5xw6DHCMieffMUDS3fzmc6hfoQpU5k2NEwiCASc6hmQXh7MMaXGocrsTbkDTdQsBXVVGkrJH79",
  "key15": "KnU5LUdiCJHM7GJyESbbSDXr1DJDcvBDTJ8rufwv99zkJp4GbsvphhWLQdMt4dcMhyNdJ6xmHH3229hFfqktwAQ",
  "key16": "RDrxpq4PcyAWuw2KRET8iP8G329qTRYCG56ys11tDbroGzUHorZ4XYA5dgijucMfirgJR6v2Cq9cRz3EWy3KL2a",
  "key17": "4Gb3V4AQJ7wXipmfRFN7UNf2FXDr98QQGoqfsPEQGmvhqjCSHHeyJUaaJPGbmjF3AnQV1M2vg1AskqyEVJ6y9UdV",
  "key18": "5ifuUvuLNjnGWBZuM9CBHJSJM9Ey5W2mQBGpM4mf2LGL1DwdgKeRWRiobh8yaPoE8d3BxZCU1LkQ8e11d99qBRy3",
  "key19": "3eN8t7QW1XsxKMcNcoHHfGx59V85gwZhb1RkQhdHnGiFLfSJwUzVLdYC79HnS1nueZ6LZBGmaJvXFQq9aNUCnM5k",
  "key20": "wC2z5orv8RdjDR9JLWPHJs35kwKKUWHW64Bx9gz5jXhHd62nubc7u6bSnw97AWNRj7ksitNB7DZGsfSj5x44ayX",
  "key21": "47WzE3uwUv2WWc4esMDdwmk1LKomJrNi6nLtFqn3a3XUL1dWKz7oTg7Du3dre1Zdo5j8KKHWgjJNuMVtW93mEyec",
  "key22": "5RowkyUNVKtaYdKateVMG1mc6DbKLSc3gBiJpFnCqqTeuj3SGvkz4eBBa9RDJp6BYkppdvAKVFrkHgbDwvs8JbPm",
  "key23": "4aWmBH5chbNFuHJsoJwNJbVHtXg4RQWxqRsjpEgwXYN1EaTnjMAbhRKdCcX21uyVMqYDAT8Jxb373kMmeZaPHKL7",
  "key24": "T3fxrPBa3TWB4kACg7976QtuLsm37DCfZBzMaioxgukco1kqvLnqehigVZzguaS4nH9yTNpWj3dHQ5fz9HnRAia",
  "key25": "3MUWuBAcdv7ppEv3JQwodEFAp3jJHTsW6GzkoEMFGW21xNtwdbELGfjm18GxMAQBoGuErUEv3Ycsq14h32Uk5o5H",
  "key26": "4Hxs9Lvjtqx3uYtWC2PE3yKw5iK6pAAQhpdBekZuWN6Tw536Heb7hf6BfxxeXFQ1xKALySib5YM4juffrS1AiPB2",
  "key27": "5KczfPpdLyt1t98XScuxYZ1e6ck6Ru4Cacp6tECPVWMLGan7qcQ4zoA9MKWkkR6kvTkG5TJ8kVxRDhw5xPmAaWbc",
  "key28": "4ZS6teSEfdWHWBuzx1Uxwr46W1b8pgGA6ieCY2CeGs5jg3DirBnpLDMQoNjUpK2hSQXgZ4jB6yDQAvMwboLTpUqf",
  "key29": "5xFYzrh6auWoq23VvaxNkMPyCRger3er7MtMD8fy4Va8j68i1xP1pny6qPtWBPA4KFHjWnphcqkMCyrWKWZgGjsi",
  "key30": "61N14zR9BNCnr1rDMihbkymDzNZyKkdZK2DPL7ef82c7q4av6JwENK74RBXYMFsJ6jTeNW5oYjNQYiXChrr2HHbd",
  "key31": "2vgximRB2dZ1MvfkAvyViXtnPkV8G5FYQ8FKkk5AYwPMWYQ8ogfb71MiHrLXKXLV7zxY1o1e1486f3MMSyBg2Xa5",
  "key32": "2GQJdvb3iZ1e75o9SjhNU6XmoFBKd56c144x2RCpmdTeB44qdekWhDcPegbXHxoERwfBvJvZPNTktw2K4rfFL3ei",
  "key33": "3J1bBHq8DT8ickjD4gz24zBi3f65Rna69Wh2whHPmwEN6hPdvDb4EsJC618cRruUnastLSXcaGyN3vsZxgsy4cAX",
  "key34": "53GYZczTLi1Lbq9dGbmLJPj8VxGJF22tkWJVjeJPD5WdY7vW13BiyCTA7aLUsjELbzu6RCfXQ4rSBgcCJWzZ57vr",
  "key35": "64o3VBYXqMYqVSPn4ZzG4ECbiEwBTJPVG7WSPq48Bn1NDWyEzSecRkPXsoMPspzFkn3PDaKZ1yfR7J2wY5obFgfP",
  "key36": "3wZUPrW8BwwQiPY6Jnyzc7WGACfahxAnTb9EvfECRW2uDbfAxkdJfVUqdziSTSNit7vwgeJK9rhq4mDG2pZc6iMf",
  "key37": "3mD5PxDsWPsKtbDGBwrVbc75qg2iv7qKNJ9ophdzjsDSc6NDcHfbV1vgsowKazt8Umqaf4umiJSP2JS7pkMTHmb1",
  "key38": "5ZVqiKaH5BRHGB2SPxC3zpkDo7XL4dDoGAVkcbqJ1yPuZ2M1V6acd6SXu96teHErw4jCM38zY2oxMJrN9ajdU1fN",
  "key39": "4mirENpjtJEJVjXrCT4t2UFJvceKDmXD81uf6NU28iyrefSVqg3Seu61sUdKbu7L7fnnpf5mTcBFosoBXdGznbYV",
  "key40": "4pSyQfdiyU259v4gdcTpTMbHeR4PTY6a59hXLeyJ4UWGiEXjo8d2grmJccyknUGNoKuYiMdwevtTNhKW3udfS52U",
  "key41": "3XJUDLTMvsYNiHiiGwGdUs9Q9UmzY4LFv8CUsDLYndDYcFi4ct3WL65vHpiyx6stumWNVS8Yt8VhHwT4KPJxRDsK",
  "key42": "HbWCZZUfNxjsBmZC5PGVR2EuUPMVGnAXxDhFRHzcMaKYHRvueXKvAcwraJrTP2EiR7DSZhgHSV5kgZFqG3Hgh2a",
  "key43": "5Mbmcmb2vzy8FzyCvzL2jsfTK2K2Kd8oQkzcG1mSsx5tPopMxSEmiisqK6kSiNWNPq5bPrXqRQDN6Xe5uB3D6D9B",
  "key44": "CvzLLJEEJ2sqedaFrdiWNoKTRkVqtVC48aHe6KBfyTmNLQwoSKdEXXw4mJQuRPELgXMbQtb632igzg1A4yKapfo",
  "key45": "61zkxeYW4cJg1ZyZr7ykKHuFPPSJmuDQ3amx2WGdD3zweNSkpMQLAvJysbKbZjyfhxFCmN22HpA9y3eDWfVTicLF",
  "key46": "cvFLbRtWoRZEUH8VwdffHro7KTYHjbyJrX2btxkE1jPjzxH1WnpjfXdfenRXZRAjgjYcxMVadbcqLvFmjs8qeX2",
  "key47": "8rUknDWgqjvZDeFiq3apqQm5mEaGviBKAoAVkQNqwnTCJb2iP3PKrkSKciMFMrdiYggqyPvhccZuU8CHMZ7q6hZ",
  "key48": "29fWURDryMakZ6XtCgo82pMeHe7T3r6WiuC8uvxLUyMpNc1KD7w2G4wJTuR5om3DJ4RzthXKKNRzXaFcSr5jnZt2"
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
