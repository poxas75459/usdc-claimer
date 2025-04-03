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
    "5w2RLHfS8W6TxMNbgPnibBa2TxmKHGQJk6eR6eUvQ945oRF28BaVKUun8ctSJKjoV6YW4TpsNcD6qUmAPLxyvwo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5g7yBNWjLqABSMUiCjZuCmqH42n8p9A3pUNj4TUGz1sgMzsygjKz42kSPYUSbUJ5GnSukHYj1fXoLL8LL6A38395",
  "key1": "3V65uNPf1wogTJUDfKwyduftsRfMJDAseacY96gp6yRhoY9dnzgTBjc9nPk5949Jhe8MnWDW9Bys5rXNkQKBXLGM",
  "key2": "NknWb6UvFM2vqv7x2RTguhxHjWrimBG1CejBBvjyjaaXA63dL5VYrQHGJ6Lc9PKXzWiXAx6CMszjS9zkP8RAmT3",
  "key3": "z1P7aTNWKUW1LiNkHAvUn8EbgVid9NzypPX5rJ3hKMxJhQv3s1b8fpLDDWTM9vhRpDFKUGp8TY5KifvxPNdhL4q",
  "key4": "5iuk1GPYDSs5PtbyNESc3xkjrJvBRdTKpmJihSaZgisCFyW1fWUVPTEk3EGrCBgy8g1remrc6wcsNhuzKTqBCxXz",
  "key5": "57D7Ltgi43GaWxGCZPvRawJTWHkXFwD4WbpbwXXKaz4EL7PmQQRrV5HiuffQgG1Wkr6Vt2zN3iStpHEReLnPboVP",
  "key6": "NgoZbuE3wKntT1fYt1QETpEb9jjY3f3i6T8qH9o1eRZhkcXpmasiC2bA2JdJRvt5P85haCpAABHSL5f3GaCytsk",
  "key7": "41W3hE9dUKR1qVqCaFJUi2mEKWa6eEcY9p1fQgXW3b4D1YzV8LBUikqfspb5peUp5PXrPaVvmSctnM5SgSxB6znm",
  "key8": "3r3eykWkFzTUCkFATghtfstJHbLi3MfE1QtVg8eZrEd3iUpALyDV53LM15Utc2RLPRbq92ABYKHEMuVvci1QcH8v",
  "key9": "49QZsBcxqB2QYAuZ6NPFhKvmkp75J69uG7dRGhRw48yz4BogYLiCeywBunizTRoHLX7iPsUAPL3QBHXTpXgJBMdK",
  "key10": "9zuxqL8REZxdsCf9iTTfCHZx1RrSPETuRkMtWwYprna21wzYLrXpRE1A3BtdX2pef25MGTr1AvgbepFdoNhud8T",
  "key11": "22Yw7mW4uoHfnJNFFmLKtbMYF5jUYt4j81k9itcWUZbHLcakock24iBvVifosWH8tqNMdtqzGZfYf4TXMmk7f15q",
  "key12": "64S6poH5TR5uPBXvd6Bgp8UKKqp4fzd9kJhBvmZXUbTJb5cS6Z8WCwNXFXTyZgdpA3QKnvtmKKevvcUELdCmZdWN",
  "key13": "omegjPBy6opQXUpmS9FWGk7JGxrcuqFu1cKbCNqvdRVMWb4EAxQRRbd2jrKxqK9iia3cxw5JTUDCUsHAqmmTjSf",
  "key14": "3fSq1TNMyYQQbZYV1zpdr2BaxYaN5V1XXVLZaNVWLtitH9xa6vHWbuRFVmhWuQEM6CmmbW2cgMRs9TTquAdWXvCC",
  "key15": "53wtxh1925wMDYwbkUj3sqzu2G3kJyVjyx8qpcRgDg1oMvYTWu42dc5o67kwPEmPgANKkSehb5qnjhWHVHWbZ2KB",
  "key16": "ZpVspVAjS62jwgxEdbtZQjqrHeh9dHhpz27Bjm8RpbjGZEB8MG9U75s6hTCzXrh5CVKbMQ2nnXkATNa1ScM1QtX",
  "key17": "4mXp9siCASW5cn6Xe2WfRLdmGwDgC8YNfELR47amV4AJEnKgszxuaArRpQFXCwwqvQTwuB1uFPsPigoCRuWURMqW",
  "key18": "2GK22m68fCRnAgHhDQSfU9CbFcmmnnb2VCW4CKpFemeQuqifgJPRc7ag3QynKj2bZQaYeRy4R5vsPZw8qc1ZPvJp",
  "key19": "3kZKbCmQUmoPA1514itqqTmdC6XyHNXpkr7WLHsRU3sKHUXeSyry85pCp9v44xig5DcmyKCsYKPFE9gRvm9C3Rkr",
  "key20": "KHteWaJUCUz7JYceyKp59zTjjsAZLTvbSnczznNPSY4kVetsNo9zPdZjQ8zuWMNvXfpav9kECZE41NEtFnB2Hnh",
  "key21": "Uj3u8xgy4Szi2mD8iweaQq9z4qhSrvsmHrGL22hf9fA4zEZfA47A5ADP5mRtpPiNAKCo1DHacyjG3GuhabpW7dh",
  "key22": "5r8buZhvNUwbpSwYcZtDm5UJVv2CsBdtDXvDEZso9QFSz51rZZP57sr7SLS4reQj4B6mnig6XnPHCkros46dmoe9",
  "key23": "4MKACXH2xPEfSdpNSzXa3QNh87rKjdPpTPSWZ7wuNHfsESPub7C34KBDiwcQZ9KsfzJa6hSa7gzDwN1MH4ndA82y",
  "key24": "aVyetNhMj1JtK4E6JEH5XS5Fv4Jez9pPQFGG4rMiiZc5Qpy8X7GqeHYNMK6QNRqdYdxc1R5myRsZqwrgHvKfSz8",
  "key25": "3sDkexnvmN19iaAh1iQUjeY1ohZXfxTvrFuXYLpkLqx8dSQxgjqG9rNLTUaipxab8UuWMPbSNn52V7bSpeRq3uh2",
  "key26": "34mkftTAqHNCR76wh7B8qBU67As2vENnigtgbf3pf2Ty7pTd4xbf95HeA9jFscVCLStKWV1CSWhnZitCdmHMHq5A",
  "key27": "39CnHXK3gTtTn5SRYnMMDVByHW6vDkMTEigCB6QuxdqmEnPiCnj3Dpezjwgd7kxXtePtXQg2S6qrCLzprJKNgyx",
  "key28": "28Rkf7B67QqkP7biJRJa6Fdhp5JeKWXsARDhb9RJtAMFPwpBTHYNRrYyh1FY14HrcomPJHA38bT5VYJeXkEqbJYo",
  "key29": "wJq2QhGDWuP2pNXdKmKgdhtnFGepGycaUSyejZW4vyZPWrcy3HAbHovKbdPMGvtLYzmTRinS6UqT5CHmaovzFk6",
  "key30": "WM9Xb2w9ZeF5NQom9ztH4FA54Z46tdzx8kg6eZpz51gNpKCpKRvgXM4EBpUkFxbMiw9hkRg1hWa4QxVoHcQmhQ5",
  "key31": "5z1gVD5myU9XmsWnEjiMzt3BsBA7CY1Xcqw8hSqQmm3ovn1vPkiyNcziEfqekzimNJyy31EwfAcSX9GaK2HxoNks",
  "key32": "4UPvaKu8RDYcqK85fNX1wPJv6HJKiVJccFyKPKAAs4vE46aWQKsQqNBn9awW3d7beVXKBVovssGW5Q5oxBLagK26",
  "key33": "65Hsq4G16Je2i7SEq6iLEdn6QuagWa9nZQTR9h4GVGCfmE1Ar2AQ4otu4cGsMrYxHJvzj7wgjH12k4NokcuN4FVo",
  "key34": "g8E7C8VTkcynMnvmfo7pvp9m5sv9m8vSs7hcGsz1Nh69ieHEcA7ZcwZXGeBknoEMku2qRtScp1Ufv2vPB4H6Xij",
  "key35": "4vAzJprc7doMuQRf7fDtqpxHPWmbZbFV6HhGYFeRiZYFCCCwmP3GJDMYvqRuKcjPT9trEBYqcJyQtnwf1MarNLj2",
  "key36": "3UEC6KGYxVkyEen5vkaXV4EcuUwGbqmBZqyvwUZrM2KakWkyD4bZoDb3t2ZJaa1buvs1SqMmRoL94gtynCht7WuG",
  "key37": "YyJGi9mfajEwa1944dTULtDMqHN7N4hb2j7VBZAHnH6hBeiNYJJ81Y3mkh96pXchbEJYunefDm96CpAsvXmxsBd",
  "key38": "2eRLpeRbb1bUUNCmVLFhtkkwspqVZzi6GTetpuBvGzjSzCNNh7GwjAjdhZStaJ46JcJexXwm5pgi1qKRDWjXC4pr",
  "key39": "5ePzeSaGPDonhFS58GnnRMKVdg3X682URwv8oC7Y5Yincysb46CG3BB5HQKhX1Jj74qkRyFkSfSYyY2Bns9v8Nrh",
  "key40": "Lm5q6CBZNE8mm7PzpYBz4Eivn928QRMszZoeM44bz1KXvy7qmHakCFQjEiMBPHy4hKRN6q7tB7oBingbFxtXHqJ"
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
