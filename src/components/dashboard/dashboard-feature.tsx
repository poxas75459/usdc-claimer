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
    "3V7Su7xrc2X7566LFH1mPGGXF7f7kU3NLt3A2cXEBjDGNZP9Vf9wqmdYeRfH5SGDgzQQmHsqzX5rgCXCSn62Vqfd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHHrSdnQhTarc4ovWR6q7otHJ7jU4okvGRB97HWB8f3s4rdkrgwVMieNP8XA39G1PcjrVTobx5dGTKvzRmpZH7R",
  "key1": "2q1i6A1beVUETg1cPwwsZgXxp3CNT8nF6S5mUnCjoxj2Mu1rLqgijojnffVVAkKAyQJ17mfBqybG1hhaKWEcKdfW",
  "key2": "2bHvYvUJWr47ZrtcSYHaYvHb49NEtGP3LT7zYbZ1Vp7mnmeyzt6USzHG5zstUrWJ5X9HsAR4EMJbEHx8jKeSmLu2",
  "key3": "4pEiwLoysTsm36uxtxS1iPaMKG8AwDktVxx8A4p2v2eq6y4ukBD5veQYfNpQDmNbr9pXcZXkMAEmDzLwEqqmydQb",
  "key4": "2685nFY8grUwG4iKKVvG7bVtLS1b1NKW2sYNYAZ48g3ahXDkKafMLAKgWfeHHZCfPNzGop42To8SpawPTcGtCZQL",
  "key5": "2uF55RudCAVvirtQy7UPxcW2hHyi1JeU7bDn1FZpyQGe6vCD7DLkst9sWMbwa1HJDY2eEWrohrTcvFVKW2kNRGNc",
  "key6": "eoSXqs8dkN3Tsaqj3mPVwbaW2VpaD4uB5Fm2GFY6SDaQHZByo7WF8BsaGnKeRrAFPJywRK7AMJeSk376cdnuCKT",
  "key7": "5V4paipiRPvA53r4XjyCWcNT1rv3w5GiUJUf4UdxbFg1VMx26iV92e1SEoGvQnwc5jhisfP7ESP4oku7HfyGtNk1",
  "key8": "4AZxd4vTp32hcHFPYh9JRB9mtzgoBsCv9zToUEQzqdTbbzL5duUav8raP6THB4pcyHdV6KBkDx7VSqAZc8zx7Hmp",
  "key9": "3bQeW9y9oVYrEn9PD8EWXqzwBmzBn7Y1KVsbrpKFghbw1gfdb1z7DT2N42oTJcNck8uAF8rRzBjTySUrdenya87S",
  "key10": "5BMAaWewRUgRyoaAMj3DNsrxESsdgtYfXUaRUUPGz3VheaeyjxumPN7nQwwKNqXktSqzLkcbwkH4Fe4prpBZgTRe",
  "key11": "3YndFwhS9N4oL29yQnneR74DvQcDEupn9iJL2DEArYWHkCES8uFYTFrYbE8hze6pzFM2DNB82ynJiskDPtePtVqM",
  "key12": "2sWb6EXt8Wzt2PLh6Mky6zFxnHEBtkXD1FprCE5CeWEBKnZCA4n3THJKUD1YK2DeDo1krDWduTvWACKyBNiy4DhG",
  "key13": "3aL9reX2cgA7ch7uoiyoDAyTwtsqzoG1tjGnMBEXueGJMGw5ka7FNNCToFTSspwogD7XYFXmnw8YEYKGD6ssAmeG",
  "key14": "4gQXCq8rGmHNDTqr3QFM3gfYPNzwbwAR7EYo2LuV3VAbPy6cP4AtNESKYWX9R3ezmw4Fj4vcPi8tPUN66JsHPaAg",
  "key15": "5TKU567mURyLFPadR6RBZaW63d1oRjbLiak9L8n8iNmsphvesRcfc2rNC9LCuRTAKQkoRZCRx96ZJDorb5YwWtpf",
  "key16": "291GkEpFvSyFnuJv5Fc3zrcdwpt4vu7MAjKW7ztg9R3exSq2jtLg3zSbQJjjRqmLh1rTnRBVzg5kVFrZpT3CfSWJ",
  "key17": "4eVrFoP6n9aCDcCgF6GoFq8zBg23MvDNBnJ8t9fnBBtFB7vNjFPgqHndz3iid45hqWcbeYpvE7DQWCH7ZrUv66V5",
  "key18": "4AiPwKcZP1i7fW8Jtn8dDYuekh4pV9gVQGG2X8DMsxVeR2FevnepLiC2SiAcJKYd4y62PhHD3Qg6b3LwqEzGvXFU",
  "key19": "imhgGdqVpimxkggcxSCzSrbgHVfSx4jC7gXvggwnXm9HWxVGrbxB7pJ51vjFkVsnbzeWq3ieo5qZtebqWtPv2U3",
  "key20": "SrHGdUbUabRGDZ6xZ7kbMjU326qVr9ZRYpvYEfH8qX5LpJ2b1fNx9S2YiAmEgoT68zNtVJc78NALhfhZPdCPnMh",
  "key21": "2aN7oC3QF9LuBXkjh8GxfEcKm44jPw7YBGU3PyGAeLfmRaBppQC3aWhjZEiZBMAVmQpy5yL2LaAhaGRq3Ze1X1ww",
  "key22": "2sZvw4dRKbggMkLbt9f1pburGMKTS2QThiPHD4ouXAv1HnRbsXWHEXa6M6oJdfx2ZaNo9pHSp1QMDPgNb1AE37P6",
  "key23": "5sPJv7t64ZrhCnogCiKoJWpbbJmy2QTmiwgfypbwDJ98zo6VRRNZq3KTEqt7yozgFyjrcvuV5dZ759rpHGvbmmp4",
  "key24": "Hnvdh13nV66G1jSfguAvQ6vNBx5PfeYwYMDppaxr353h7VC2Ag515mf1PuAAcRNemiv1CDZv68PX7HZWSJg1nwx",
  "key25": "5wSDey5YKyfYg2GCyzYTvWd3zTTzHYtCzLKNE9Kz3Z9g3Gn8L2V1ECAfm1YdBg9g5AN3aS6KKFv4jyM4mF7thoNC",
  "key26": "3LfmDpNsDCRX495vrnYNxtwMftSZoqxa4gEoqNY7YHnWeSa7HQnSVYBmE4mrnVPFqtmYqEkiJWLFeonWc6EdVdhu",
  "key27": "4XYKTcahd8J79LhdxZik5KhfWoh42TR1pyLB1Bshh8UGuXetngdnAyTG6tJeLN8f9KpP3Ue45qWBSMS8mfjaGooT",
  "key28": "55RpbiUdnTXCRhURQLxHbB5QRaY687AkdAduvxUp5C1k2xdxsVz4uCyYNZHvVRrgoTJN2FMMSAyV7WBqM3wchMfm",
  "key29": "5ZaQJMc1DFURFNz5kgU5D3UAJWz9qsEEs44d2NtxajRKep6P2e8DVwx7UeemT7cNjf2MLUKENmdf6RwQucHPjQP7",
  "key30": "3z4GfBLGWhXQiHvTkXWLqs1DM76NPiZE1ahUmsDNPTHCtSeqBYmSaiNaXjAUrwNY943bufzAuCDjPkn73Nv3VEf7",
  "key31": "ZnW2PSrJVvwzLDu9rmonTAK2Je4WV9AdQDnwTgeYbohgtHEorDjqq3uFppE9T18dBmtNieFCJWaZS6y8ufJDnZG",
  "key32": "6PV2YMqNtRscgxyNjhWSLZiP4PqrGT4roQwdHkaa1FvesHbthXjQa2njfybfANHrnRSWbZnbdWk8rbt5SDgWwcB",
  "key33": "P4hdPx1sasK2VD25Jh6FnvgqhaNZesfs8XL84jNoVvnctHntDGB7u3hxbMGsUAEHYZZPD8LGo8KDeCyjPUM6fxw",
  "key34": "4Fwj4ohn9DZ5KPEtqwpZbeKmHmL6oNkhsrY5X1cdH7MxDZGgzYFaCYcZjDni6aPxAnSxuSr8azDmicMCiUdfh7ij",
  "key35": "2Y5RafrCFsDDuvG9eTKDUvP5qA4aEAr5DMnthr2FkgrGveNJ5rwE3Qav2FhwUL3huHuAvSW98DN2LiXuprT2arW9"
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
