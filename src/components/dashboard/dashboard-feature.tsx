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
    "3c2PkJHepezrsJiYxKfBJuwbb6gXnp676j812XPNTr932RELZB3eobKshYRT88TrfjTLHohrn6kfgM3jDW177ptP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D4TJvfeeCKY5CDKSQ8E81LRQt5nYeE65YhThgFXGbM65VKW5fksK3PrEWQ16XP2p53YAkA8z5Q4UVpZ4HeN8PKx",
  "key1": "36ncBpu4fYXvYhGQ8cyAcxS6Gu4zXXUCAk1ErZqr8UoXZAjYD3mSYuUhg9CuJwaTdCqrs3Dhx5ajsRQ25cN9wnGR",
  "key2": "53GPiDjn5geTMuWvLzTJ3rRyahQrGvsmb3L4PGzpqFkFnEbiBCcpmhF9D1PJ4bu8GKnoHySjXpH61Si9X5U1u4NK",
  "key3": "5EWo2RU34sTqzzPHEPe59ncCN28Lv32iCbLrQDNrpwPFMQZjAh3C92DQBFU7D6byUmnDzF472wQmN91ywejTyTux",
  "key4": "4K3ZXqEgBKvmGa85F49njnffLkJ41bnsYNZQsD8T4jkVrg4ZkTN1PhHMFv8xGKXu2prTbLrAYrSyZWoZQgg1T8X4",
  "key5": "28UUpwJspFS1DDcTcfc3cuEG6ijiPjwEQ2oQoE3newETBughh1v3CqPohpH4DvYg7G4FibALbb9yKzGxBTymCSPD",
  "key6": "5Ttw7M8ZteKKKt5FqLZwCVA2hZELHDLw64iEhgZ7neFXaiMSm97ANd1jxX3zwC6fmvrkwoPAXjfPn4vuwM2taMiW",
  "key7": "2PGNcgmvf2E9yU54h8DSys1N67BK6ip5nyHSJRk5Q9xrzn2sZjgVwYW6L8N98iHBjTuLzvCEcSnwZ9Rka92ehvzL",
  "key8": "3anJy2oCqtLqXrQM3pv3CBJjjoi9XZjcRLAwqbuQCizsw4CMKRtzmiK2T48rG1p48VcKwFBJBVtekRNbhq6SRRw9",
  "key9": "5ed1nhHJ43iGeTTBMeeXho25mawwZKUM6jQWmv1v6gL3v4p8fCNfERjKRGwYniDFwFrg2TGiemCZ7kWj3kJgHoeX",
  "key10": "4PMyshtsofdvFMYretmjuJb7kUA12FbqxKHAjB4LBzrmJEo6cWHC3kNyyCTXamtNnYicK5vLLCCCuC9QTXnejEUm",
  "key11": "4YiSm44a52mhNtKjwdp7xBKpQ3VBirzZTXJJo6suhzhyQ6cMAN2QjLKdvSD3REwU8vazF31hYqFtz1cKTQSchggq",
  "key12": "3PcPR5AW1UzNVZFR3ZVyu4CbtMAu7pTfL6rKbQBrEx35j6VuuhRtacb4w4bNxqGsSpwunb9zbsVx4DUA7BqQ6jne",
  "key13": "SZgbECwxgUFLSMzpfCZBYwxZSkGjpMgu391tEGn7Z36yebUvFGeYs6zQeSvQBjMCJmyEozxg9PVpbMS2qYmrEdW",
  "key14": "3Djzp2kqxzbsUuaTVcQyoMzWxWjHtKDCdoBfg1zkEb7LeBizvq9T22Le2H7WJmWM9CgGDoG9ZgyWrwk8Md7pMawo",
  "key15": "3ffCxiqwDQZ9F32RBkbMxHCP3UHimfLyZdNHECLUd6ojvkvdkp76mZLjTBNSYAujsucvq3Uk8ehmwvZfoNAyvyhj",
  "key16": "yhXijNtNBFe1XN5DHTaQTryDpcWu3G6FMdtwsZDHthLTmHVumDPDTgAdwPdBcTnFbgJhTWdpB4abMtGHZgyJR8h",
  "key17": "1hbKUZcHDsixo5uSvhAYNmzu6wPqwmdgN5KxeRjN5WkGMPmXssJrqsNprTHhA5ff2c77VHfgntDsnGyspqpQSuu",
  "key18": "5rFGfhZftTkYHvAUkfsPpnaeRta5oPzUAD5LgzhXAbTR5KiXbMxjYSoERobX3SwpKpjdpmPDCt4NuN8cHTi74g2B",
  "key19": "2xt3CH8az4aj7muiFmfYaJjXnEYJJiS5kbDq9jYxAFchhXjNn5d15UqmUCsEDxLYdpM2BiqGK3vapTXfQbnhD76n",
  "key20": "2oJBz5Bp2R7L4WPtXvFd9pck9B1y26t6ArvgVPo1Ucrv5B5hrZpvmBsc5XUCNZXYETaTEEFMqhvuReC41aYrTagx",
  "key21": "3iftYg1nUKMrngh73DGDgik6TXpa1pLJvV2T3Ey82bm6P3SZJq9sa6TGgdKCdzgyzZPDDFQQ5CkJNtLemKRe2N88",
  "key22": "62Fris4mM3oqPGgdrZvcZBFM3J1QPjcHc7V3Wc2qnUCjqgj6Ar91JDsvy2trBrcxXXViHSv6nvyqLEW8imu1VARp",
  "key23": "3Bv2SCGAK5tkYTW4fXgyKHiGYg6f6wfskwE7PgdTZX6Xb4bAU9dudiw4ve2ophVVVomcZS7jZtgm62Z89cEUuaYZ",
  "key24": "e5Z6ZucjABFog4mMGXRftNwF4RPirXf7zWxvqJsErLV7xntWJfQPneZM7Uht9DPSHDg36MLvB2a27hqiG5YW127",
  "key25": "H7YzJQgq6PeZpkxnqyKCTtcNef4RbPYyddskyjyWkWmsNk1ya7NXfhbE5wRKuWhp1r8JXitK79SX1uv5uP4Btdu",
  "key26": "4bAHuaYPpavkeLXQgCw7Bwv4mirTzfrNarwY3QXRjRP2sT9AbB66DtvNpMAWgt4hpsKS25MWk2AJsLUeirCpmaM1",
  "key27": "yKr56unNAnXnG6rNmx5iev8FUF2svHWqU3rNnpdYYTPauh4BnunDfVRJvNGC6J77YA9vxnTYZ7se9PGUpsqy4Ye",
  "key28": "2SnoUQGpq3fsvHzfsj511zQ3EUD4DwGdPyGrXm7JfsYvzSgkwtvuRKyzGzfdB6pdR1vsYEXN5DUVhGqoxdD77BBL",
  "key29": "5yjiJnQR8bcDu4sd1XWEoaFPtJXWzWdCnK5A4XEXSWUpYqXLnpYuv9ne1ejWkGkbnUrAAPEGVM8uZhLtFtv4vicU",
  "key30": "6Dtq7fLGFSfaFRZNuWbSi8hbsziCMq2JwPbzi6isjm6KSXHA2rV5nNnm8z2p3bRxg6AWqQFuednuE9GLCunLa3t",
  "key31": "5cJ9tWhPpBybzKZ1c7BewFZbDApbJsPPx5PKJ8i4K1LVyoTMmLe3u6vw9jvFDF57rB8Jawhg32mnwUauoemk5QUA",
  "key32": "5phmfWvGoEZ6wJA1u2a722LHJVW8f6LWcAqUuXquPE2QMJTh9wEqD8v3tKhb1vp7UtS6EX8ehQqX8ewhGcz4rDDc",
  "key33": "44MQjoUZHigMBaEm4yQHcie1WzQJhyDJLUqUmQiuyPCmAHEb21JK8eLFkGr7z2t4T4gmW1cTVGrV7pUk3GRxmx9M",
  "key34": "3h7VRv3yJYn5PUFXXT4bQZKUFNQE92fszN5kbSAqP3fsRYmJjEDBjYDD5bAuE7eqHfFqPnVM6d3V2iuZR7ESCoh",
  "key35": "3rgb5cYh6stz7pqELSf7KsjxDHLRGPdzD5NvGH97c7YidkhSDDto1fxtFXPY5STLogcqni7T7rPisn1owAiiyt99"
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
