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
    "oZkYiCmWdbEWQdCz4GrKTR7VP1nVsoqJPwLJ2fDWVS2BP6taKRN3MDx2Eu1PhLqAdmaQeEnhQ4CtHPgTntt5JU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dmMck52BTJyFikqYTQcLs8MF4j1WdX5BPWdogDBTdaBpcQFwgZEz99AGVGzhqicV49y62VJD5k7cARHmvxXaHco",
  "key1": "5hXF8q742WYDzxcgyXu8Xz5vzBMyRi8PVxZBe4G4vpRd2qxbhG5ytfaKNbhZjbPN41TC2mepn8quSgb2QFkRoTfq",
  "key2": "5bHUWRhgakyocTNmpcp3NMjShEgDkAuri661sYC8bj1fJEeuv3txEXYuG1ZUTSsdDr1kpKdwHUAroDU8XaynGJgh",
  "key3": "468TqZnZYqaD18gW7aK452BcbkcM4cTos1b8juvju9JnTGpJHGCKYqkmsC9mdPjHkWgiMNCtPR895nuBSMWkd3Dg",
  "key4": "3EHXpmdyXQSgjMGV1tHeJePKNSSkmgruv5wn3kixwgV597j93UB14HKUeKS4P1iAPU2Sh1qYNYt9vP3T29fH6KxN",
  "key5": "27SG8nWHXU2pmxcvnyU7CUJfudK8GhC1H5gaC1fTYbHvofKGrjexZ2Egq23GLb4UBM7DKSznvfJuwdhuEP7HDjf4",
  "key6": "5MHfanTRxF3r7HwRSuivPmksYqLY6BwyTqdrk8Z68itmpFHWReL5giq4bg3imjGTcnCmSoPnE5MmGkyEbim6eg6",
  "key7": "5ZV4mQUGLmdy29irWjJuhvYRhg5ePqq5djqFYDbbpWaLaGhB5ViejynjzwqFbfXeRK8qt1PcZYi4rx9FSfhyRmi3",
  "key8": "5gJJ8DPVbxoCugPuLujTk2Aw5SBPe942bJNuJhSgyia8o5EKUH1Eceh9gN2MyXPL6D1DAo6nxChgtYDbowAHg4bD",
  "key9": "5ottfZXGNNQKpQmd1rxWR3u7VMZ5n3eZuCEnExwtSMVhBx7DTiFCtRh2XCLuoDJrssWVg8mhs8cK42w6atywE1JG",
  "key10": "2CmU4qDFTj6CQwPoDnRGiqUW49oZALoP2Bs23cJHcFpMRRNUvLGwo3WHM483guhCDRy8KfPXpnoYPjSKCNeWCUgM",
  "key11": "4i3YZ9Q6yk7MdfpFozFZCwTPRfDNemikDT3BXm9FUj1sQME7smS9jdnLKR8RtquNbLsAwGxxCtn3m3p6SP7zjxar",
  "key12": "3MtaKBbV25sRqEA2ZxRtjgfjaNsDbtm7b9qe3caNRJQhWijXpCk6mukRSUjYp8zGobyynYFmBcGdUrnhfswJqBZg",
  "key13": "3WJLQvWZv3c4FESKDGDiiyi74beftwfWEJoiGcXt1MGbgrL3fcwvas6yGFEUEwQxVeXhT926A74JKRbiDR3jm2cN",
  "key14": "3E7gSXBHYALxcmcQ9Fh8q594VWt2zPAobxPVc4C8cpNLDExBQFZeTDSG4KJFvme7JZaUJpZfubeVJKwSTHub6wzq",
  "key15": "3Sz7NoBBs1VhX7J1Jq4KDMd4WV4kKi7g4Qth781MAVfKqEkHTApXrbdzYMGen2sH3yw4VPsCgWKjNBk5tRQVVJWX",
  "key16": "5wgnX2NjRicWRRiind6xonMziu9ZFaHDYYPaAzkDBLGdBWzgDwsGNRUSC3PsvZ7p8wknBsSk98vWa8jtfsC33jQ9",
  "key17": "Q3aQKQQY5sjyNVjYfXyUNZCRpkKuRFNyZpcLWrCx6D5o4r8ZhSrqCFzUD8e61zzsaDH7y5ies6KfmKqToWkbPHJ",
  "key18": "5iAZcxmvQ4wvHqHm3txqPG9BgPJ8vDwmuszEQFQmfVDe5pq96Qyqsa4337AFJzN3zPq5RuCh7QwNxUCuAddoNGQA",
  "key19": "4YXN5SWuvo6NTWxdyKfavxLSMHS2VkHnobLZD7mC9wnXFbrGSG1q8g58LJxoxmf2yNRrrxeYjEC4u1KTUGCUoUJw",
  "key20": "VaTeFAgu3R3kaqYhRF78MkkZWqSD7p5poksKH9whW41RsKRvbhTnPVYqxSZwdpMuxKT47HYz45jrMKofGk8vi7v",
  "key21": "3Xu4EcGuNyDicy4593vaeNfjzWoST3BGBCYtw56ymAvPfZnsKqZoYPTetTSvLcCubzbVY8cwfqDCtcGmnNbkxo6o",
  "key22": "5AAoemw3FkvshhzZsYdwjZGBdXEHFAX1oaDGr9RgbVQzSvVTCNrHs9Na4jDWcieeccWVQ2uTnZm1RyhtsRsrKcbv",
  "key23": "2bHLacoCHZ1i7hzox3Au6LSq5TUqnMRQ61LSnt9xRNCid4wcsPGmGeoXdFnQEr4W6v3Gm7N8coieV2Pcd1WLU3zH",
  "key24": "5JqwEbMnVYB3V7N4hoCRadq5vpAAn9abax6uxAiK7DEG6seCi57dXuzubtmch21Bn1RRNgxWVDBEaNHumCuevtrF"
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
