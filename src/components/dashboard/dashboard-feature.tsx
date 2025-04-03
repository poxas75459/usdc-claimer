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
    "3szDdcWngogm4ucV38wShiBNC7HKWSKSmRweEdj2soQsqD9CMDyPVxPAp63zg9WQ8xdQGcQHTkqP7PWxw5fR3psE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kjaALL4YPdkKdHnGG3PaKCjZSdfHKMcjwNYxBEm5pmdoFcq54kHYMpJacK9wVjEmBZLB5GNM7qzgqP8wjRTKGv6",
  "key1": "5Tg4njbTtUqPujTBTjgG99FfsZBnJ8KAsy7Q19LoZJnmKvitWh2AbZcxAHB6LUi19pCZGciiq2EbfSJmMswuJsWp",
  "key2": "4UnXoE5yhsuF5ZqoGrUp4etbNUtfmGFwtT6zBPpUv7mxYnHSAvXMpSdQPBDdnWVZqV1iizg3xjyy3dMnF7pRj6JA",
  "key3": "3SYkgyNbLArFCPReGbWr1hbR3dcLesigfyqUNVhh1uPxWXzw1wbePFzdi8YfkZKgp3P4h4GCD3hHeBY9qvbztDRk",
  "key4": "3VXWMc2Aues4jecEWHSyjeqsYyVpeswdc9pZKNcwfKKGaBJxgKZGyXLCyGjiXeN1gmSZZBb9JXVqDZwi76XnutbT",
  "key5": "5B4PDqKr9tTjzrDecUVv5zJYTnezphNd99QtWSCgkvddXCsRmNBSDABR8iKygsVYcYJhYC6BW5bPcXwxhQzVgFka",
  "key6": "5kUrgwaMNKxVAAkntvaMDSEx1fX93Hd1AtzJG9i183eHhusaHHgiCsgXLnTJHDDkDVuuJAgE3Qi6ijiqSUtmwDMt",
  "key7": "3M3UZyQqs2NVXwxYznVDP4oYfnazaKS19sHr1UD5fZnQ33RJDjtQoLSQPvAoTmrgXbVsgqHHrGU4RwzfjxtLDtCN",
  "key8": "5HgogWimkFYBeJA5oRpuF2EB72GLu8w1YKK671P58ZE5wB16XkgttfVuKbzPmqruximm6kT4DEMY7UhUyUuuWAhW",
  "key9": "4fL3gTBRoV58Vr8ngnrgZZpUgrYBxuyYrdMo54ufJ7jviDwbzVqEs77HXg64RNsbBxn67E2r5mCQXH5GGfv3BXqq",
  "key10": "GtKyuABNhKg2LaHV2BUwiiT1GNvUar1hqW9UpdhW4RBmu7Drm5ng9KFRVS12h5Ph7UEXTkAczk9ct4Bbj3qipB3",
  "key11": "5jkWLricPKcU5RqJ9AG3uu6ZEf4N3x4gqe4B2ztNZLqNECD4iEFVakYUSm3WyJnhEouMtrEpA4kxeVWa1s5saC6T",
  "key12": "3R5gbVoBu4ugk9qy7sWJ85nAjbQQeHA86vNH1mKM2ZwECLj2tTp2F4uibZTRWGXbFkayMVDyzd3BnPrNAQ2YG9AC",
  "key13": "4fuSpuEGdCYS5Qy6KN53HP9PZ1jijqUQbKx17gBNi78DLHdzkNsEkkyz3rcGq6QcsVEgBt5jcs5cre4soYbMJ86E",
  "key14": "5gxmEDu2vp6KLHMYZYxkpNng7HUB3vbrLY6ok1Rh4wWbyFvoonmkrYSFQMJujjhj1mh8UF8GejiQF2oBaxYUQV45",
  "key15": "4XGeeVXC9oZGW3bsG7BjKpcCUiwtG2RjgkBH5tHLhecCRKvvAYQEQBH5xpTFx1ANJuDbFDFJ2UgBYhWVd3YtUUR3",
  "key16": "5rZDD83g7ZBFND86HcyMVPw7DL7SayZHZt7Uqy7Tw72sUZLtdMhF43oY7XwUihrPAtYa3pNPuN7xyKtVZFvhhLbX",
  "key17": "5WhGHvmiCGYhiq5ewECsViKbHnLmLq7S3WV9QVoHGPuRbshKB7FETJYvWG49Xp3v3CEnJ7a7bUcTCXeBfdtoTc5f",
  "key18": "3WPEvqZFnaExtW1MK858mqAwLg4R4gyRWink4qq3xUgLA6eKcFDx8pRxGmnmSCxE5U4AsYne2ceoETQphwFHha3J",
  "key19": "5Ga58ohNE2RYefwZ7jqbh2bVGhymwmWpCve7NgdGspxxHBRZ3FBqqzeyAi5wyTpnUAxzvSZxyruWXd9pafeyUzo",
  "key20": "5a2jQhfMEyTVf3nGpkJ3Tuar4byiFoiPfmGt86WSMAc5hbWK2sSJAMTyW338K7ZPf8LcVbrX7FRdtzT1CGfCgR3e",
  "key21": "2XQ6VUSoKNY5zDxdXtrsvbhhk3UFazS8HwRCCafj4d6WRi49Y4muXLtFkHmnRhQu1Ych5LUM4Hmhq9gRYi575Qc8",
  "key22": "NAwkcuEV6hwtzUGGwR67kJYg1mQ6bPYh8zsBuEzwAYbY7nAJHsKHJnLA7acEryv1P2QsD8A7QwRDVTjNEf15shw",
  "key23": "3sXR5kFzn9PLWLT8xdofqrNm9e8Y3H4cxtJgSyB3TVz9XVopkeQ5G7xyYkFb7k96P44vFuFyNrsWMfTKvyeEWPtP",
  "key24": "7sPHW4EF1aMgA3pAQWtbsQwYzFQkeax5sMaMPKBbaZ1MaTLcqGGwym6b8LwkQY9ajzaNuX14yF5MA93jzo88hNu",
  "key25": "5dxaD2DytsHKjSZT16Ax4edoRPqwfg7CHRPhFk9AGBf8GT9RhLqnuhEidzEZwW8qv8Lkk5vzhfdVbP2iwFRJXX7W",
  "key26": "2qrHw2giA4uPDZbyPLDA84Lipho2JmtcG89a3NbRMYTkvgANnG7Mu2cAD9QcgQEX1S4K1GJLPiCrkZtNfsaQwHxG",
  "key27": "p5Hj88PhXr4FYMnm1kbRuJfTj7DXKMn1TPd51UpvTVPEoueURknBdQGggRELE81i23f24rf4qeg4HNQEe4BYNTe",
  "key28": "5dCwn6PNytr7Xevxf71BQKQ8ss65k1Hrmjp98PygcRRGYam3jBCX4aaV5uwJbBo7sTUEvDkLDxmUVwe936fzfDxN",
  "key29": "33e5QzYC6HxGkuLo3atvTxGREYjAnHbn4pzticbhAo2FsaScKnZSx1fXKHAFSmaNLoEwRvvtTKGxTdATRvAipKE1",
  "key30": "aAvFAmVSL1HqSapzwTe1jWmXuXEbYK1LsuDCPcvejJZoEhn6dHx9QAYtGd59hzXjBqiDVVrB2vtREYN53zqe3H2",
  "key31": "855PgK8UkoxVHmVkdboATNApcD7dC8ZqBnnALgfmQuUcbfHbouS7qhknG9GuvTTgw6kPdhjjgU6NMs3eHMeQ5cX",
  "key32": "G6spkAUqgorpuBXasrBgUgXshvhHkXBcDpdQ9RiZoFNqJqwUq8qr2ztik2EAqcdSj42Qnb8nSrdDuADBmxdvMC9",
  "key33": "5LNUMbs51YUJoAjACbysSZ7pqb6sSMMtC3EqSP3kzumEA2uTn9f5SHycdwenY5reUrcXsWsmNZCaVu9FvuhbcX8y",
  "key34": "4jXkx9syvM6zZSVFiJhfGwPPp6cYXoskmv83RBeTi56SQWn3epktASfshiiyDhgpS7pCMDkR1oSb3ethUExvQZu7",
  "key35": "456Zg8nEJ4fmadJVhHqjs6TsgnrpfRFWtKhFXgMXp376ijsrqy1z75QfDMf7Ax9nAVc5GZEQYzwEzbG6t3z9kh9F",
  "key36": "3vD2u4RJW5Zf1KSMi1ntvWM7FbRE5AHEJgdzr3nQhDARWgKnjwEd1TW9Z416pkGmEZTvkGCtFq36zQgsp25HB7Sf",
  "key37": "5A5unmsmvZbxtHXucGGqG6x4LdsGHegfcBAv8rkAY6JZtwU3NdWrni2eSy6sd4TRXTgse6db93wt5gu77ck7C8bP"
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
