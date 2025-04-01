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
    "3fDgSdJH4nEP1NF8UwPuf78tznrD2fCq2W1oJ1rCpsgZeDmjgEmueJt2N5G9AAJCaVHqJ2VcvAw3zZnKXajLYDeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CMmP9zs45QHoUuMAW8q194kLwWeLFM1qUZUA7G6GNxythftVFFtHsbC434aMK1STqGomu5CxD7n2d8G3HCz9XvV",
  "key1": "BgEtUzw6MR2jSBZ7eszZaKkcJfwKZf5FcXDF9zU43hm3ewPuVoyAk6DR7sXgKfH1heSciBBhY6tYCbFyKUrZxRX",
  "key2": "38JR8rrBaWm7PH2dPhth7mcF8mqt2D5V12L85DZN8KXYVjH8t5BGMGFfu8aokSxsGnW7UP2Ra34uqxErt6Ng3YP",
  "key3": "4T6dKvgAaGt7CbCTKNp5tBrd56RHR1RaYuxdSsCpAscpyYApDR6SHZQ5ALAFrNzCff2ZXaj1JegdmNkt5EoChbdQ",
  "key4": "wNV5XjQu8tesw5hPJNSGWuHQjmbtW97ATGNKfByCfWw5wm1usvb6GhCzwqzvUEnLSo3rr9YEMKLZ2uxWbfyXukP",
  "key5": "siiNjfECEVXgar9XKZ3ov4vEhQ3KR8cAr57E2MRhGkZkpwQjzCoKZFDwekj3ZBwpcvW1MriYU5CFQWPwHn1hB4U",
  "key6": "2sCN3hrc5Vn4XkoGzofzkmric7rUE3Cqv1uXRvgwTSMfWGrhrjbpvCdJBn8JwoBR4J5eakMT8CPxYCXR7VLRr3V8",
  "key7": "5EQEVg11cgNCAHjUzpDHKXfcCmTRVDptbJEZHDGJLsREx98jPoHawgAo8CWtrz7H8BQ4V5ntFZeGmMiydZHFxYj1",
  "key8": "2oxNk9HQCwJGqxU7kxi2NrcCW3TNa2VknTJJ5jzXuWDfxLcFihrMY8EV2fHGdMuaM8EGbpJMWt7Jp3SpXdtQiiKJ",
  "key9": "2rWuedNwmghgwo1zEoCFaLSa7tRm9DHHyfBsfAcyZbadQLBXacY3cvkHUBNVseDKJ8KGva3mZXcUUPTp1RC3toZ5",
  "key10": "ATY72A49G2Pm3DLVZw7rdzHRSStYbz8hK56LH3skhTHRHX5aqGZzhCgc6UvhhdFnFR8bFg3ScP3whUEHbBzLqhD",
  "key11": "wLoVVfV4GULCaksXm5utJxd23ed4vnfx2iKZYGTspPPSFPps4CMjYZNefcRqyQe7nsEUTJkob3gfkVA8y79om4v",
  "key12": "35AssC4QLd25LSsdg9pZibVzQ4VoptvMsKiKXoJNiFenBw79jQrxMBVvYAAk5XnGakY4x1f28iRu3gt1v1btNMfo",
  "key13": "47rfWuNf8GqEUdVazE2NEJhpVyBtoDfrtW1uCKkhha8U9SZF6MuYxQ52tiKpRbFdSDPVD1eYrNFDNB4LhuZzx3Em",
  "key14": "5HUDJT14XPisYoxShsbrC9MAAAzJxEsJnuF7TiWnaP3uKnBWiC5fRRDayk1HhFk1gUPSsnbVCWQMEC3j6p4V71ft",
  "key15": "441vUpEqNHd2gn6x8r52AKSa1TbvxcK35xDhvDqDhH9KGVFeY8SZ187tYpUtFpHRXywLQnRyRFrUxLfpCpb2C7cg",
  "key16": "e3muM19CvvrB18GmpTa6KiXfvjGpJkvySH7LBDDb8TQXGvnhjVNQ35LbruXKmaHJexYVt8xwntvWE3YGB4v75f5",
  "key17": "3A2ocY98JMtLiP7EheDkch37FGzJSvdHfQj1p2ccMVrLi95fLK2EYuFbvsMnU3axwtsPtuLS46aMuiwDJKEffMCG",
  "key18": "D2ZpCGsimc6buhfpXg2u4AE5Rce6JMAnB2ZQLHKwzvqyq2qxRz1R8S4qxiv1yd5pWrtdCUhESDZygxRK1RrhHxw",
  "key19": "2U121HYvLeyUNvB7qJfdbgDiJru4MsTjatxAwy8a3aMLUxmN9uwMvQz3nJrnDmWUj1L22eEXdnuRYrwdoE8JMvVN",
  "key20": "3o3UZqLL6SobpwHt3JkJrSLA15TGoagvMsJNy9zw8xrkHPnxrmoxG9pxiJWWRnWyBJKw6bZpQpdAuwzxXD83H57X",
  "key21": "5Ag57NGZT7QLdxEV8Lm62WmtWAXAj8veVNSmGj2Cf91xra9D6z2JN1LMjpdvtbBCnnFFtDB4Hdyp2MHo7AfwgkG9",
  "key22": "5m9Mrr5pDqT5guStkHtR6WWmx6wnxbnChieDiSSm7HeyskaCTo1yRvWPYZMJDVv36srNFFEPEzvH5t8KSaZRdWeM",
  "key23": "4vFDfGvnkeef4LwAU7CyfiZesDDEzFwZtwUuJzTMeCcStZ9qZSLmXSPkhAXgyceeCz5be6mQLk7j4LLLgzW32enU",
  "key24": "3JguMz9mrpDE4vjnMCVFTv6WmsrnHcmfApfxPrpsGzYZq4mMQBWQtkKLT1w1bDLPerzbDkLed7vpN7GEiD3aPuaH",
  "key25": "2CazNQntt8FDVTBst5XkL6kUfAwFAhtyF6DSPQop8XfhT5bEqjgWMWsSMuoc8vAU2UGow1RNF1nBZxzFUf2jtZeE",
  "key26": "3TzFo3PmDbmKYYsbccZymLKtwb89iqAfvXXSrpnR9ScSmnMhm9jssBcHJWYor39cRR9nHHyzLHw1Lho3UBt6ugiM",
  "key27": "3it61fZa8St1SUatnqdndaVUeU96b4tcwDbXgn86MJmDpWUf6uvT78d1L7ib7L6mW7A1pQUbKiyuL6ixLZ9TLFRt",
  "key28": "4MLCp2tjp6xkacYnV574Bn8D2PQ7fA72aUNrfEAtTujAdhJtTBHzbJ5qg2SySm9nTqUT5eaR8wU5qUCszbLX5asp",
  "key29": "65kxunsmyLiXwZ3g5w9RtCpgPM7evP6eth2Bx7cZ8VcoCBiqKwgx7AayoZiQb53k51edvHHSosjgBV4YhGTn7DT3",
  "key30": "4y874qhwoFYJnJXF7GHmdcXw6jQLY3fWZf99a5rTrZyzj8ZNeFGYRztdK23V5hu84WFRKVFagLC9MGBNwgqBWqQY",
  "key31": "3LKmiXUXfJqH6QA6J8eVUP9pHrG11mQ42Tr1yTdX6dvDZ3EqayaEM5pUfMiYy8rfm9JdiWeuBFeywvnQPg4LnyQc",
  "key32": "3DW9jp9hKH8jwpPzQAf6yw1EW6cBQjmFa9siWrvGD1Tur6ogc82Az3BpaCsV3yxeNQqUksmYXborhgBkBG8dXRub",
  "key33": "5TQ2onsu459mo3VwGNr6xHBHQy2AMWKPgQy2M1RuuCV4dnLXrDw4VNgeaNeUJ8UpGai2zQPysfg8yJ6bNaLwG4Nk",
  "key34": "5D6x58b4meQCn7urvau2oMWJZbLq5LVa2HKu8CgxSULD21WqutyTjxuiuST3hQeUh47F81Y2A7uBL47rTfdeqG8K"
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
