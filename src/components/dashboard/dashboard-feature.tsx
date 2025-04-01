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
    "3sruE1Fi4HwmF6Bu8Jih8HjJzKEoC7rb1iHshU9Ms1XwVbKev6P4fgcwSvrsfWXYzkU96Zvife27rwS1q6WBmTxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TKaGBQamavw7nPiM965pt44BX4ZufQJ7t5TAwsBXm8aDymrkzieCx6uDbfgcmoSBiXSsDK64rTZsxakVNKibqLV",
  "key1": "5HKXXuYc1NTuAqoqCjetW9hmZRw3Jo6o9UM56jX7mDPwwAU5Mfn9V6wP2KEEMMgVtJBLSXgqFBiwPm4ZHZAajqLA",
  "key2": "3jpE1w2L4vnSjiSKRmnkL5CsxQK65PUELiGSy51r22kBg3H8jAJBJ7Jw7iQyhSsafQZkXpc9cb2dvY3c6L46tf5N",
  "key3": "5macPdUtYXTiDanZ5izr1fki3KUQG9dyg4bf3H2L4NkM6j497Ybu8a1JErKPHMMzQG3tAukLCRRf1j1daXtFcjkg",
  "key4": "58yoa4Y45f5yU6XauBiYjXHJFzRV9ivPc24UCohxJsEZAkrT5XungWWRcHEcfp7ChXVrnHQT76hH3h9Rn7NWbWak",
  "key5": "58WEVYK9zf2TDh1goccHHnkDugyxFVpTUc658rtALW2yUDo4Jr2wk7UB2rbuirK5au8dha6VaPK9ioQh2SD5ckBJ",
  "key6": "5HPKr1j6Su7HCXanwrA4gK1ddCvYFRYvVRUmVybcrkyGYqqMYpZJPGUktF5R9b368GgrTdv8d5SnhwufoFHXQ91f",
  "key7": "2Ro44mzbtXS3tyJToxY9p3TiLd1UwoVmFBZjTWhCYWYhkatVzQ1NLuTcyPQkM4V4toFpkJ7GHf7CDEY2mXHCJHS1",
  "key8": "8sTW5C2G4zXv6rQb37x82xJkTNtmsEttQSWGJCWZ2XsvsyjrLkuL71ai53WPkgakn49AkzSsMpvtSxtgYuCdkLe",
  "key9": "3xrYyQzE2L76PrTXiM2BYFyBYRtu5JPZvZTNaEaLcBnX9sSFiSS7WhMRNX5ztSJTcjqBBWXsKAqKrp8M2bumkb5L",
  "key10": "fDgb6ZrjHGN9k8N4fGxhQiwjjerrY3mMzVojoKQ9BRfY17415zeeRx6dhCwNBrqFjDmG9Nmf7yN1rZi1v2A7V5C",
  "key11": "5gSXnritnD8mdBkmczw8enJ2iv3J4PHryUjv9qLbtnwMyq4yWrCHWbtTwHaDsuKDRDUF3oqVBHowWanu4opA7U1i",
  "key12": "2hsSLKS5jpk3eZDT1WQ4nu79bqw8r2y9GPgdkqyXcn6UCCKASaHMpzeVR2GkofyDdsiboVDfU9LwL5naYNnDNdWT",
  "key13": "2FjThmfWxLXp5FL6Y149BYvrY8QX4CFbcaUTwBsi26BPinYRc7kAD42jDZBg17FV1fxPp5mfb9MdD5FR1A3Lj1ob",
  "key14": "5sXkXACim8UFeeXD3sxcWMpcwSu2TzPwA2xP3LBtWBv2DzgPHKPcNFuwVbHv7ktEBnD2jBBPpCCtu6zh83rLvBD8",
  "key15": "WMcpJJx3sDymnNK75Vdz5nYwDjeYeEqQAapCqGietvb7vEPy6Cf7ffKz5o5LGcXiLHCMWeAMfgYcdnGiunqyURZ",
  "key16": "5gd1Gnk6ZSDRES8o6N9uBXAu9vNaVjHSrwh5GaARMGdd3Hr7xBBaiwheWSYE1BbDRCHf5vMT5UZKxBFC35hzphuh",
  "key17": "23ncfa5EHLGbCuWgSvGJHime7BfUjQKiR8a3dD5j5gK2iSEPtpGsiVppq7aB3mCG1bixyGFUS3Z3bLCzXxjxfCoS",
  "key18": "kkn7TpjvuqNTkfWUvGx7U2n9ZxgC3J39xKZfcnkZeBA9mDsyAfe9LKvKe2piRvPPo2UFT1fRXywaGeoumvKvj5Q",
  "key19": "23pg2H1NpFRYCH6XQDdNUZjBwryao1AbmWPprbsNidDWJoeAuRpRDCKnVU2DtdeLB2gxWqS2Z4GnywzsgLy8UVxj",
  "key20": "5HWUSXzjPZuKp9GD6mgPA8E1X9yXmN1nMfgskbdwZd9rvZXg7k3f97qwAVFBrQx7NoT8AeU3JMWB5LL3TkAFhZNm",
  "key21": "4s266wsimgfJ8wfZoNgNewvAm3ZAoLM8SCPXZiCSi7HAJevnFe1vFMUgyiijdBhkKPxU3WYd6w4abhiBAFPQqEf1",
  "key22": "4XCxbVjW4k6VqH5kPBFhKhzWdAcmhjyqh1wb2JHxXajdFYEstBB2nhJEe8KyfpBvq1LTy8xPVAvtyTKUbeMxZqsK",
  "key23": "3p8DH5joP3aMfPZ2eoqwu5C5FKxCKNfg39LLPRiWEZPE8svCcQ3fqq9bCKKckQhNZFRztYtzKe4yZk8z22suw6Nz",
  "key24": "vJ793HfMGZnt1TMrqsR4DKgDLkVyPF5VhHdNZQoZNTSE8MR2rP6R8BWsZcCuNCE3MGKtrPg8YnmxkesimkBMJmm",
  "key25": "M4W3yJM5dJnmvCd67uqTdSXnUfDe7SFvbQ8qap3B1p2hDPSoRk3NMSb7VLtUBgK4FKT7uhPpPhJBLsJCNz1W7ZJ",
  "key26": "2Z5ggRox4bgw5tbMxBN16PgzYNmwpLi6LWFVZVS8azy2CBR4j7vsvFUYx1vznFWENpRcTfGFxoYGSsT7yG8kH5SX",
  "key27": "4ZDDVeRffgPsRAhfVrykuFrz5qokBnhQUYZB3M6dzyZcHr93wh9vTznjKmgHMhMPUaFHkmWiGioY2Pb8V35ADvDt"
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
