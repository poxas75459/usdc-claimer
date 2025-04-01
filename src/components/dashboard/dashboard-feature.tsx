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
    "4sQuxvBjoQK469987e6ZyMHmHsbN7ELT6NpY8jxrrf2aKdoHjNA6bHP8t6J5smhpjA858A3jcJuZKV8UFBQYrRqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TjCubJZSRQvhoo4DiWVpWAFd9VDcprxjRMxDJrWsVSAF2VALJe1CaXhc6Xuvb78okMTtQ7BCHyDDeWVdPPFV14t",
  "key1": "KNX5TBhTzLk4dqAcxHTHAiiyxj3xYSJG3ddFoT2UFRfsDLSa6tumoCZaA5XZAR4fqMQDQmb6AVHxAACSbEMb5ZX",
  "key2": "5CdRbR6HKR53CNB28jo642riRAWfTHWSdj3AEp9F4YjAf2x33X9JJ4AzqmkEWdhmrHQfQ5GNYoZxpbd1uRrkCyU4",
  "key3": "4PVGV4Cp2HAhevFUujUCoR4Bom22VZdkdhCbGJepvSLzA97fvtbM65sRsZLutNj3ptcAC2Smo3DUBjeui91eq96t",
  "key4": "dcKP8kusqJGxjV5UmDqGGogP5cGvG8UqNH6d38BW4vjvy5tSJezU32RHkHzXjgY5aGUeqfuZPuqVCQexaegfF9p",
  "key5": "GFm9Ga1rYFuofRjk1soo7W7ABerFdGHiCz6iZZaUGWdkYNSseTH5TjbsuTNx47rM83TxnAwPxU6ixtaD4qYMXTf",
  "key6": "4wU6ZpKs2TZhL5ASCuV1bunvXRKihpeRCUfaFzbb2fPBWf9KFuUG4yeHiGuBomerVxHcgVTWMhVYB8RGX9GaQ3Zx",
  "key7": "THwkLFwKGJYyRi44KosU1gHb9kmoMUHc2AqdoLjuWaZvbVbe4vwXkH1jV4dGHfkeLhYr9m2rnLJFZpVKrFpUuRx",
  "key8": "4wSLipzfKkB2RK3CgGqBwDRdchBTHvKLqkLCyhEgyv8QWZtgKB8WaoS5tehcKE6PgkqLg3rkZNCe72DfR8SUQZhu",
  "key9": "4FUR2oDudNB9roXADtTQwkAZLhveCJVAo5EdQru8Up6qd6ye6LVfZYCs815qfpR3oMyNE7j8Qy7YbKvo8FygjkEn",
  "key10": "3wN6q5GPR2CVQnMjDzsi68yYCbmA4xouc8kPiJau54qpYzDvZK6xHdLTNfx3qrnacr6EAZosx4nnVbHtwc23TqMK",
  "key11": "4qvR7HSD2TELLzLJCd35E6vZ9hxe4u1m8BWqKfqbXvtLpVV39co1wWd7MZDXACwffSQRvwoFJXQy1PvmbGBFLkCk",
  "key12": "2Z5bp9o9uagjBpv39vs2rj7SWeqMFmfKCJVJB4kNBznX94RYm2jFVzYPC8icD4h1ThFbXodcC2c4CQTu5bnX9bDx",
  "key13": "kH2arAxiPbz2YLVYzn45Uv7KWnwt9XFDKTDwUH9xxSpyD55LqDF1sv9Qwuvt1LhBX3MWgAZLjfPCgp6qMLWJbkH",
  "key14": "1EMm38Uf6Lfexrwueq6MwAcEwDsgof2pRq1q6qhvgoavJqiPWJFW7zg8jrfgtd4U1RtdwsqboqDHn2gz7kscqKR",
  "key15": "55KZX2XVx7ciM6VpU2Ug4uhiLUJ9gyq8a2j82AKKQPw9qpt8dTogGTovSpC4C8vdCJRydet2GVF6fvE9gVgXoUU3",
  "key16": "tiHJzwj3PZjWERvG2jVyaeF9mrHNDxziNzTzt2oGaq5p6wwwbohiZTEvjzwviQyafd8D4osBS5aVCKw6zWARusB",
  "key17": "66sszT3svQDEsWdmjYHdoPpRcA9jHWYf63izh99xww492Y1Jbw6RTXtacwPkHcA8RHNzRU4FHSjmDn9L878mBh3W",
  "key18": "5WqRqbVAQwNt65h6K2qNcAeXVbjyoaVaToVMygw9RU1dtaY4Hmso3SoYvZkFhXinBx99H4GqagjTyLFQTXePswcC",
  "key19": "3WvsVdKYdguJE2baGQskMD8SHUZzmqZUisexLdXfwfr4vnKHxEwMaDU7zFniDXpTQDPpKBMYQyi9e3vmk4Ri7dN9",
  "key20": "uDHL2THokVM9e9XiyrhULzGuG11yysTJuSAgj2eWFE3mFseDM7h2eT6ysCW93UNyq4ZP4ZGgHSsLV95FZ2GXTBe",
  "key21": "3wUnMW6ZP1jWUY4jbBtWkZWNy8AjvNqbfgc5RTZ9LqMFBwWjo1czRsrU2LkXdMi8QnNkDLoTu3wNyvjCSd9xoBAd",
  "key22": "Bgtk7k7dC56kitmAnVrwvQoJtG23fd3fZxDvAg8fyqXNjdvUNZGrYrSGnFxtXouseWDXnjYSgdb1gRFXPxzjgUU",
  "key23": "45Uact8V3CcmwxJaWk3e1mdHzYwB9XLXTNk7ut7ZJTj5Wqjc9JDeaB87sBjV8h8pHSzYggQhCpPt3xXXAYijYXbJ",
  "key24": "GuPvQ79YgWAUzKi1z1nvPioi91nij8GUUvtFzsHKSN3Dmn7UvF7LK8GynYvu1EP2KkZdfBsHPQchuHNaQc1gv9a",
  "key25": "45PzwQ7xBKLeDqrT7yqknzyDNX9ZKdYktzQRj3u6ukNLEB3RAoESPZgcoTs3xbPgobV15dRj3itiHqst4d3CtnkB",
  "key26": "5QMm8BzqfQ99Smomk2ADTPiuY73iWgCMQqWYqGhgdcLGXHyKigccXfNrPzVABDE1sT5FHDraK6uGZXDHggJaSEFV",
  "key27": "4GRgTM9rruVW2GrvP6RCNSddH1WiaFqrG8xwgcJUdb1jLmr6d91XfjiPyBCE2C1dq81GEf8WXNMiBqGeMKNMLL7R",
  "key28": "2oVf2yB8mZ8nBdtCNFZmBgsrTqKoTaF99VhMiNUVorZTXzQvNaaWVrJY7P5qtgyY3pQucWDu4EMEsowGtMvu32ts",
  "key29": "3zHRNW6MM2MVHWcRadQqR283gudbJ9jjjNSwJ5RPy63jmDRx8S7JgFojjyVp95HpQP4fkSjR62DpYKot9G4vxecy",
  "key30": "2Uw5bcgavnjNkXYoqbAnnrqX2U5cfKP1WV7n1CMKtj7GAJapKWSkouZmZ2fDJx2FC2V9jsTmGrvTM3f2ppuDVfu8",
  "key31": "5sPCeBKCcsqW1vDjfXPnnmwhGEYWpH8GK2u2skCdK3N4YpoaaNMuKRcRf9NhdmbbH9JCsbRnPzT2SXh5bwJAS5pm",
  "key32": "5WAqMY57n1mjcst83pvcY3AGQdANnkKMnmHt8AJAuefGbeeT5DdyCFevW2eLXhWhMnzEbQa9U6sa1TAmD8JWB9kg",
  "key33": "2hauhyoYot6dx7nzMpHdGhvPosx8acPVP84eHAJokYYCULWTEVFs7PrHs8Ky9QvDgMenw6vfK9biSjCRkxGPTBUf",
  "key34": "5xD7mVFJSMJsYjMrAht2jqiwXcZmTKofcNSwE2JDQmnPXDpw5FRrpHeqUhurnw667BgdraqYASurhdEBphqdt9A1",
  "key35": "3Fn63mcRGp1JRx5WYB6BVsfzZ5EBMXsWykwaUvWSMowYVMtbTQyTe9HeqghQMpfoJFDe2ENyvpcA3FSugBepCBur",
  "key36": "4zqgDEoDjWd1HBqU2Pxcr5cUWgePFFBx87MfGD422RQauPknQmPFsxCi4suPkXDSwwcWq3pceDd3mTq2Xchz55MW",
  "key37": "5zmBisNYBDbEVqAn1Tk5vVLMRtF7wrdkMNfkJgRuPLmpVZf9yt2Vf2suy7A9BwhCU83G9kaECuZxtGpikpmZUsz8",
  "key38": "4njYTqh2Bx4V9J691s2qTaXagUkm7R3Abh5uLaNmwZf2e7dVL7yCgDtF7PMCHVxer47ehxD42vVJqgPBYDw4q7G9"
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
