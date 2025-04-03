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
    "3B3dfK3rvYoU85duHPh4UTQ8zZUGr7PFe5MSANTjaG2fKVUzuhjN2jqmLPdkx1yx9Q42EHC2aedax8gJWiC4sQMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WLbSrWoxGgmh1toBTcghvFX3v7EFnhGdSRY1EqLukbj6bo7BHmf8vheJdfnNn9HSdzPu3Rzj7xGkCb7D5MFRh9x",
  "key1": "SnyAsv6AYRQj3fenWJbaAJi1m2E236xwqWXQRSitUbB6pS2pQzjc1ir25RtYk5iSW7LdRo9S3pG6H8QxSmFWtPa",
  "key2": "SqFbSNTigYN7QzcbB6VjX6TkuJown4PqJHmRhdEHwNK4vp88bo9TsZkcrXt2qXfgfcGrknXjkdSSXkc8S5rfB5i",
  "key3": "5s3DXZYQTToGHqXvctbhHcEn5puVV9kHj7Ad5o7JAwcz9J3W8aa7op1CuwArREwcV99nUfm2ksBpUqTykZK2zXtk",
  "key4": "5jwwMd5sFM7Bf1PkLHV8DyHZhNxsivhVidjxK91oB5gbBSQg7neQNGuatihzuhEk36NMJL3PPbbjDAGzoWGQ3gSM",
  "key5": "4C6LEEXmbePj2JXhMT7bQXbuiZrMBJ2qoZzWkH6VdePyBn1JETgpoNVv1cgXMF5YHhKgN5yinnZAmqa31EpTgCkD",
  "key6": "5bvvhNhM1rMZyiXXxfCu8tzPG8hBUzEdtQfAGK6JoU7Aue8en9mtpWNZzSJ8Qw9eUAdWnTpvwkSi8iWyCAHW7qZY",
  "key7": "3kupwyckHnAP7v1GKKpnYZYhCHvLdtoqRQE3CwC2B6rKey6mmq7RLnBqJ6hw7rxbzYvxwqfC36KS3WNT7FQV5r6z",
  "key8": "2tea1JVRenfME2DFW3TwrAU5StQmo8Lvb1q973kPLPX1B8h6D7Hd6bWtgFRVYoRYP3x8CcPLTVwBajcaToAhEAcx",
  "key9": "2ofgQ4jpHcgysp6fegVRDePvkCmq1zj6yWSn1FgT7QsWepugjfXx5TQQavJqiKs9uynyfmdXSY2ExmnepJpHgys4",
  "key10": "2ofTyTmuLb9r5UaWwo91GmEf8jpYVWvk2TemBjhdy3vWJzYKGPGmuseyrpWGr4SUbHURVeKa5tx9Enc3G1gQqbhq",
  "key11": "2KF2w8WziYm66iSBECHgDE6NrXaeA5sfp8D6ARuLUqGy2uhM35PBJFV2BHJtyJKdzoj2779czaghJQ4b5DPzEQnr",
  "key12": "DeRb37R75nMNGPLfzFfB9MyEzceeA6jzpmMfTyiRoymsyBJVkzrmNv6Vd8pjRk9jF24w88ZajT968k4DpZbnwhf",
  "key13": "5WRMKm21fiCEcRCMmYNo5BAd2BdVU55xhQ65GwLvbDCReoEKDTMcypcawJU84SHKMfX6LshwiNkgv3K7Tcw93pv4",
  "key14": "sXSVvKCj6bvjjeFFV8DHWqZKvuA1rub5vMs41zM1qK3ko7Kn9rwVHDezoS4zTnfnycfPUzoXUdm7xgM1pzneCFu",
  "key15": "59HzLxLPsraGndJ4MVRtGw8irrNUx3DB3yic2VBZfES8X4ZdAhKFzGrac2UFaLrWpR7Yd5bNk4tK3DQdT5xwHoy3",
  "key16": "3kw4KG2iYPTefw1mM6cCLgh7on7ERurnWsE7yQRuFSSoyMNzVAGSDzP14mamGhxfiKBwiLXZD43egy2KoCq1ZLwd",
  "key17": "17Q69HEfXGM5UxukMj2fSvvmAczcubCH9Bv1M3KJ9hnTfy97XAyjo7UHadLXXYnofbGzvXYTRVP5mJ9PvuWGfop",
  "key18": "2oLpHD5XV2eHPVZfX7GkB6GmbyJDbj8FKz4J6TC33UNcDUFCaiT4XsHM3B8YmBpZJt7bmqgdPuqv4WGCMXQdDCTe",
  "key19": "4aR1eHkPVk1kHBcPSRYPXF4uGGiArR2YgVrz3Ts57P2Y2jY2Z5k2sXM6kSoDojmuJfpVpWM75sxqpsFcYQmJjh2z",
  "key20": "iNLsa2n8jESKdhsdbgwtcc5KRws8rgRGT2JfFMgyAD6MciwaHA35rjTbat8WbEwkFdrfdHS7QPiu5bKE6CiZqEx",
  "key21": "43mcLwTFxRTKCrm9zsNoEFbwyJKFPJZrgy4SrQwFqTiNP7JdsuJXepjSvDmCK6gB7hu8UTEbzgUSSX5PL5idbL53",
  "key22": "45aVCAHhSCnsfWkCmA3Vfnz5tWNRGW81Gt3T2txhYTWy47CuaSoXZv2WpRrZ2FTJmBGMLVqMHjYDUH33kzFMPf5E",
  "key23": "3JtVjN2f8DmfjZBEAhFh4KTD9q2zXVTkPzau5xow6TMX1pkkC4imjP4Df2P3hMHQUrs7ZBbDhGMYk2brbWid14KU",
  "key24": "5dryCwjW4kcqypb9m1RcPdGfJXrzN5Yg61pdMPaYx64MCcPDL8oePbomJRZvriMpTFTsWrxMrgM5GazeRP4QVZRC",
  "key25": "4FBjEyatrKqUrtriC5Jv14hizD1JyABmFkMkUCjTbNAUxzcfCwBtiFbAWcB8emxNqBzSSZp7N974o7FV1R5cg3KL"
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
