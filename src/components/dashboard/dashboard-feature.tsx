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
    "36j4AXvi5gcdPjCikXahHPFyQdDEeSwwBe6Y93GdSSrJeVGYSXSyKGvjxrNmq2zJ7FWyLCkEjTfpCzWTvSVScPK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NnaPcQpwetfpa2EBRZygtXTsxtSzKRpQtBmeyLThH3jYHJPJ5SsGu5XGbheTQ8Tg9iDPrc5zPAwVyEDtf4ppPVa",
  "key1": "5M7Q9XFkSNXPBkwTS8BouGPcB6bf23DKu8xoRHHU6h5mEQWqdzH3QW3Jjw3gEt9xQKkP771ZRjNpkxMBxaqbsXX",
  "key2": "prJyEbUYAMzu476ByQShJXZWYeJvdACVzfBTAtzMAajAiL5zzo6z6fW7SQkLqNdiGtyqETMbTBvFv5WZap8u7jm",
  "key3": "5qkA5bRk6AgKc8RnH2hDopaVmzUMtMEa6neYdTkVnqsT4BjaLgJzbY7GXfdgGFnHNgw6W7trFsd3D1xX3szXfGgH",
  "key4": "5sn6tj4DyVZZML8E5Kco6t3nvqxaKfVQdSJaTAVJVDD8wZbfuFnToKwHGvs6varAPBwwxFoQsfmvEu6kjpCP4FKU",
  "key5": "4vs4mV7UTzsGVDtm3kKks2By9dBRvnzLhYiHELvuHfPTt21hcYarGoJd9tyAFjNkgkG8A7FeRBU4gsTqzfQwfBNR",
  "key6": "5mo2zmRKrhp7mNu4VrAU7xvJMPkHVdSXSVVNfX3Be6wKJihwNHyrwGKwx2fa9HNfCem9RZTGkk8rp9k2dn652SQA",
  "key7": "5YmyG61dcRjpzgV5VR9nppCUpmPRD42WUTDqT3DVWtqtS7EsPKkSntjBxyV37hGrnrM7WCvEec2i8sknEfQsMG5C",
  "key8": "2AySUzpSYk3qt98Ye363rXuEXT3GYWoMF7SXNBoRi84QP5UhBmxBnmgpptm7f2XaWQzY3Lzkjhu5Q79TKiRDpffg",
  "key9": "57XMAVRzpo7474kLLYziLRhpbTXXfFbScpUPiQSTs5hZhbTFiwvCrmBo5QL5nxnKWmEHp7vGXMmZRsJ6gGQs31cc",
  "key10": "4peps8yEoq4yXMpJgREmLYi52J1oVi472ixu6kQ3uMXXBcbXnBvMzcgG2PjvDpExzdRBhLG8Uwwxo1WawPq1nAxt",
  "key11": "2PEa7fuLoavg9rSXBFZyDA245APun5cP2cRnc5vekggZoi6zSc5Lz92bYWNsG4EDv64b1m2MSm8ehwQXCfVRxenW",
  "key12": "2neSCphHjMRCE6APTPxA9xgwn3x2Am88fms1vf2GcCokNNp2ycuXEPc7sn4wN5W6RgXJUVeJ2KFqTg9ceckBjwCV",
  "key13": "43dXMp95Pho6gCog6esBygD51ccHAeU2tRfiavheAJsLLKrz3s7wqMRmNq8UT9CxYQvLAiJanmvTfnzShE5Ffyrq",
  "key14": "mo2UYkvE4K7FMKQmXw9Fje5rJvWirwzphMmq6Cmg38qkUQTMMZdeJEeRcvvUmh9PFu7dhJ8YuDVLzuaMJcgG54a",
  "key15": "2eHi3rMVw1GknuoBPdy4EVkV1GitfvvicgAhWjJhYzbEFCZ4RCnFF8iHe83DbNEDMaM2QdZCVRTRYjaNNigTZz8u",
  "key16": "2D1nZ29sonMhAAWQg26wC9J9V5wpFNkMkCRxGSvQWSrqZ12LLurTEjZ8ubHLDD1gdr8KS2DEFLnj67BCVxgvL4eG",
  "key17": "pmS2BWoTuBCk3NftU9mNJ7NLTmEnLj747Hs9WJW3V7SpyNTBX5rocXk5gmfGLSwZRXxLbHEUUpnsTuc2aYfNo7w",
  "key18": "3M6uwUvzWiPw6yQS2HihtZMnHVpDKi5NE9kNMuyqnXVJY35ra6HTyoymyy8HyRiNfawP3WY2hDtgS8mUpztHYm6R",
  "key19": "65DZmiubzhhUVmSZ7ysPfCqhA7JkkPrLiqEMDGsnHp64hWoqP1qtxP4QwKVvKEmeWUzXKhAnFqoKRrFPN7R6kKhR",
  "key20": "4wQkcMRs9AmcDUc77k854pvAU3mh6ABohd3uoFFjpb6bmnccmzCT1gr2Hjgnxtccqd886GrX8KLcJPWSao1Hedx7",
  "key21": "2iVFzcvWE5nhr2MBwCqY6PiJknLF6pnVHnMiQ6rFhiHRA6ytytybVnTBCySHRUm7eN4Zgzkh9keF8WJURB1z2TDh",
  "key22": "3Moc3MZsKS36RC4T247bqmi2jEUeTBo1LGv3tVptqY8LmvT14x6a9BWLi3BSE1SJkKaKNEdAkt4THAsWymSwrmnF",
  "key23": "2QH1T4GmjMaB2VwjDUfD98vL84dGxvQFUqGch7ABfEynPeWz8ZooCqboXGt666BCxqtfD9G5abrkKsnncA8DPTUn",
  "key24": "4BLEzvZ1Qznx13KiCZMcPaBmB3cBU1EBw8vVPWs66x4jZ9f7enLYVBiSdUDsxXKVWTYcin7cujPEeVgxGZ49Zy3i",
  "key25": "4atJDHug4M29f9Ua4Mgn5FJ11Vfkf7Yb4nmEz6qAoQStBaEyrZnsGQrpTxGzyww5vyiUi55RxJZ8LFEgZ6iCfxH7",
  "key26": "66xpUf9NX5ctFmNZND39A1E9XRq6iv8CeLzEGVjtMH6gA41Srtz9WB8Ce6tcgkq5jnJrhbFS4gwaEvXnFUUEV3Uy",
  "key27": "45uT2SyciH2K5C88NxDtLvpnsj3yn9LkvZHvfbJXJfF3bcwkh7zWzCTbXCw4ZyDsq4A3oVsNbmtbmryUHp16piRf",
  "key28": "5Uj6mbMVFot4R4e2JVhYms2Ri6SKsBDq6rUokAkJyRfTDT6sQt4RgJzYqL55MbfhTQmDrSw3GDsraScGnBzY9pWT",
  "key29": "2u6GpKPBsUei1Ng8ZbtFHB7bB77FUqzLMYtQGh5neissedP7FDJjJZMJuR9wGVPfzVWKWmt8S7RiYwEhFkLQiuvF",
  "key30": "4CAQLmmDaSkNTNKYfHF1sQQ9gua6hX8CQ1UxH9nNBxmy28bCYTyWSZti5xWhCoXQ26hMxbbXGURWy5ZzUFxjwQrK"
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
