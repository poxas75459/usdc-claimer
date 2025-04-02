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
    "2H9FkWittRe6bTV1DhogsRf2u1mKHXL92vBc16TdxVL4DnP6FwxosWtvqBdWgxpLYY3g3gLH3C7gRRRA67naBkt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KjMT1b2SfLMdev6tuKedkuTRtBJY3a6WpFYK793VMGDiMaEXj6qY5FNfCPEuuDkHwpWRVKLafGR57itJJS2r32F",
  "key1": "2u7hArAC6DByxmhLbZpiEPhDBFqqqTEF5AjGb9vNwUfLW59deNgJ4NRYnovvmuqkWWDY1DheRPFwGcDayrZ3PNuh",
  "key2": "5kAVtCbzoG7dgzriEqkNwnFk34aA3eRqwtzjLNR7fBy3Qht6JiovoLY7R1p4w2Z6pZCoF8b4P7Tq5KBHZafK43rn",
  "key3": "3eduy2n8P3buF2piYeXXMdRiqj8SYQzWMVg66wrzL6x2LfF8nnFVR4Vy3HHzVohmvMxg3LicP8EdvJfZ4qvd5LAJ",
  "key4": "3JjUd4VXqhyYusYvLb7RoZXfDPF6xka8JpTRGhnj4av2YwgLM8nBWoo7VutBP4h3oC8bz9heHUGgKyuhzEDxmPrr",
  "key5": "2CGC5piJsq5VpiDGEBJvj3iy8aH7hbCvLk54t8vZ4PoH7yUZ3hPkNjcmBik1qAKNUoKqmWtgNCUTA8xxYffzV1ty",
  "key6": "25UNU2EV6V5nMYQJiS9j3zo8TJ6U2BnRv5tbsLy2XgLqBnQGoJHXviVkYk85phSpWAVLCJgHRuAYupD4YH28UEtj",
  "key7": "2tA1Ms73NqY8q2t5Fjt1tbYG66BYZSVN5H3WSqyBJ85jZnQFtaYimAVZ1GuH64xnZ9jcyL1EE4Be9k4enDjkkdux",
  "key8": "5ANwB8yKArXdCdLkXMK2T4ps58Kv51Sdv4acuwyZf7sDkeiyVN31CLDaDfMRnS9j35UriTY1pFx6rtdobf7LxNGp",
  "key9": "xkPn1mgz1DQYMGz7ZiSSwsATXiSszuY5VPomfoTkd95r99yk1Pm5zsevvukrnD3ccD3fq88hqcxDMwWW5awacbk",
  "key10": "3FDPFkAmcGacuqEfF2qFU6ipu2fmV4jbWqktAoZu18Ufzfom7Fx7AETstneaK9tLpDU2Y9kcZJzaySfSBX3t5B3g",
  "key11": "2vTz6JPr2xReZ2aHwrp15Y1sjUDNCPWFG3FiqdTefTpQ32j8FHZWdi5pLBgQA1C2yFoqJiBSsPskzJEfU1JDearx",
  "key12": "32fTmg22dw66SsT43L6cBwKQfy9xmqL34ZvN19QuJmRzX49vbs9T9xvbcdXqRAf9PY3NTqWVNaqkC81EYonNDGNW",
  "key13": "MotEQSLMzk71CGEq11zFekcc47m8q4pVSTLForF6FqqHy3vajn9CGQUTah5qh6z2jWrS8UERBd5p24Kun6MBxqt",
  "key14": "477SEmQUqQfmh2zR9Ex59T1nsLVE7UDT8YNF5S7S5accEJk4tpRCofb9HcJukdCwkQoXRF2wpvhpNSMoaBxe9tca",
  "key15": "5dVTG5GnrXoy36Rpu6iJ28jGh4LFcUwb6E1S4pmQnib2iN1o5rFQ9qAehfDDVurMwR3RhhBkCskn4Gtx5p1V3DjY",
  "key16": "4ne4niqiUuUXzNvTkLNqMDFmfxRbmMvVBDMSd5P2cDW9s9McwaGSewQ1eukiRXWnh3PWcyZt48c7o8sWg3Kc46Qp",
  "key17": "2zYiiMDBh7kTVeYotXbfzZkUA7Lv4SwiHfSgdKVnkNeT4PfUbW2sdddAX5LFyWjXUjTsLBuzAVS3uuBLTUEpapjs",
  "key18": "5sWKxtshFxJtqq6PkvL9RPMrefsJ7FGZ5khL8rdr6T38kwKkgy8KnnxJ6yq2CSGkwks6ephnmLr6ejrrAdxi2ENT",
  "key19": "4QkF3ooyzBrmg2hLCvyJ5rJvi4b8jTj3x6ZU15dvZGLJMfXNYKoJHTkg72cm3WDoW9GpTrLwm74Fy7DVUDjFNPRL",
  "key20": "4Y57RBkqQcJhWriUyd9y2K4nGCDbAtxFeKPwjgqzz8FZQaWtjSratukGcjF54eqCwERd1HCZK3PCfCmAL8PDyMTn",
  "key21": "46TvmRbLqoGn3enPzZLR9CWkU8Zn2VEhHaSbGBKMicsCo1ey9L2MWCvgoRncF2Eydm4HEMntG4oqQvcENPUfcr87",
  "key22": "gU286EFSTRsDRws7cyfn6mDuuP5kKi1x5uECUgcYjNQe1AajCPAjy6JABbGFX4P3AGYYMZSbrfwkPY5XM3hxm8g",
  "key23": "7JTQnN8Adp93Pt2YLzW4jmCNgTQyK7oRzY5Y4DJhaisxHWdDVHE7QXw13mQGnSGwXNREHVHoETB459tuxx7R84B",
  "key24": "2QNPvLzLxnckUepSx45ziJzcA1MTeTsZQadjbnAz199ENSUmUkPPyyrDjpK1P6EHvLZZgPLVtXsZ8NGY4KdTGMKn",
  "key25": "3cJnhmaYtaLLPD8RREepHfNEqsi3dPoUpKagpobvYVh7n5ie9xoWyF1ZwExAx5msi8SYaQGhrW2JRxgVfmKipVXs",
  "key26": "3ippfYJVSia4uRchezBLfbc3fKRjhzpJy2t5jdhGDDLSQynZhYcoKhNwh37pckw3FZEntkQH6nPiwiTdzovTA6Hx",
  "key27": "22fnuew2xzXRMnEWgBSHJ3zcbmxciGwN74Wbgt3jQVa44MG9DWhsmFskUK9JXkC2LbcxvXvLLLRsGBVXxuv4iATa",
  "key28": "4xbXYctC7n47WSCGAwbsTRdLHY1BEN3NDDx714rUmTJaBGA57UfptiSoAkrG1GeybnMsGuc24PUbRYU8szauoz9W",
  "key29": "5NMTt5yeQZQs9Xs67XMFiANWahqHNsSnoWMBVJLTUpzGnRHvaCBGe1fqptRaNCE7eVxdaqsJ7FFr2CfkakufR3CA",
  "key30": "5VyAyFZ5J1kScVi1jaf5sPVKxBHoZkXWHfwmMfq1st6zDcBc88WFdyg9e2PjCskqnf27t8ZPX1Mt6FbkaZQDtpdz",
  "key31": "2igzfZV85ywWuQNcg17hvXDvyXiLHAQHVugLxZyNwNhAkqFPinemb9AZUsq1u2vVz3YV2jUboF49TfnpUNqGfBkr",
  "key32": "vrPvUj2JNzgrFbB432wGqghPLDJ6oocZuKRCro3wXf989v3QE2N5x4tt1eCQ2wqLED2kyLP2gVr9N649yDnAWwA",
  "key33": "3GPqFHCQbdtNXgRGXpgDJjTKitdCcDTQwsjNsoKDCNhwV2kzpKMQZC8xmWcZ3nqAyAukoHRij3DrAUNWtY2K2TVE",
  "key34": "3t17wZqgv9VvYqFmjBaTPgzGvSC1Pq5DUnZ52bWPo6BEU7Y8zDhbF4tgToS69xzA8UbEvMpxd8CVpzXLoqUts1cy",
  "key35": "2EZdJPbxCxxaFR23r9K1SSUCdZaYvErymUd7qC7zn5ikXtqBHNH86ux5CmsaapSZqMT92t5QBJyzQYTGS17fLjcQ",
  "key36": "4pazEZRTBGt17XkXugDqH2ywz3cFf8QPKmGHYzRTta1PCGMymtGZKYHsJhP2sV3gbZboXc7ZAKYiJzQDdBdZDae6",
  "key37": "2ypGfCr2mUtnnmjV1rWggcGpVrtjob7rseZXsuE54AXDe9UHTBjB9QFVfHBqNn8TtS46QfZNdQ6GHSUJpggxURKx",
  "key38": "3FtyLxS2zKnnxU9WMuRjm3e6RDwcLG7ghF2G5fdstcumv1s2auz8nQz9XiTMYRT7tomEuYNAiE6no3EWh3gsub7n",
  "key39": "4i1SvpevixrP7oqKG1wKomfrm6UmgmCsLKjzgWjYeUcam9vjqK3UMGbbTKR2zVVip7e6aRkRMwKEDUYboxwUpfs1",
  "key40": "ejHLjdCyKCqSSY9iGgTBqMRSfkksw9jgy5ECbfaRx1BeevFpPAaTpkNoNBaQN6KEDEW1Hkcbbx5PVH2wZ6XeHTY",
  "key41": "3cakNs8fahvbqCqfrkpb9RmmmU5CzGUsJ1uxgMEQ1kAXzTpXXSaZZHaz1W4vARfmpSP7JKss2Y81ButWG8VbDU1K",
  "key42": "3jwkCnN1ejnE4oCPZeBzuxees9sso7EqR2WL9ppWisocrmKT5kmt1iNJ6CUtoL9a3mwUBxmHcz7r8CtmQTExig1u"
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
