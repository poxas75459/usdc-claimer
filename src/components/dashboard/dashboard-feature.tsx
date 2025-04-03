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
    "3YkucR9Zb4XzXn4F8v3W2GjY1Dxea2xVdubEUiRnefdug7emUmxnTP5TYFJpYTR6Gqfmz5EyEjZBcVjDTSAvSMp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3maFQjx8iDuAa4RA5KEyb4RVDC1dRwEY46jRwp2ZZoJwCnxJrXZD2rtoro58wWf5gGkBh3TDM6ZK2u2V39L9p2sW",
  "key1": "2mgMPQo65kmznnbcuPYT4ZEYYtXEkLrqoCp3AZqcTnnWW19bdGJtjMis4iYnytdyWRUQyuy6S2sP1vCaB1eJVD6T",
  "key2": "3HkfCq7oZ8q9RKAGt93FironrP8u6oCkVkLdqXswnbecXMSc1LUsXCHgeghJaaJTWeirWYbuJqidQi7RAc7TtDqN",
  "key3": "2GtwL8uMGQY42w79bXD8LbccFH4d9xqScmZqzxjzi9ZCj6dsU8fMU5FDPdfv3ySTNHWbP5N2gsGns2Hpaxcjsa4N",
  "key4": "3vfbLUNQu1Mx2r4qSUXHVfYtYFghn7wK1UEeS2zp6rk8hE1u1VFKzrhHUXU12SsrHbALTW4peaC9JKYfoHz1z3QE",
  "key5": "3CmyPkjH3xCzSTvCVbfKDze8L1GWNrHDoKt9MVJvqaaknqamQ1E2EEwxKVEUtKTcaVHdsX2oQFDCXoMFFxPiK6wu",
  "key6": "3rzK2t2eg6FJpXs9BPd2iboV53r7S2D682YB1FUuXrZ3xQP82XZqE4nyKpJ5YE9Su55X7GkYnzTwkS48SK5Q5LwJ",
  "key7": "3EmqmZaupMrF3wmcPjXi8LsSm3wBVZbKr6g2jb8LZj4jkFjLadNkx5rcTRv2LGppoAvuPvxWfExJgqroLM6msnTb",
  "key8": "64oXfn3UVRRGfe7kBSkvs2V8uvqUzMVEv2JQPE3em9b8DUjxy9A18qRPA71mKq4cL25AHs2TFM4hpDwatUhRwTSV",
  "key9": "2gG5tJ7yuDof4GCoUBNSkg8GNcA4U8SypJrp73V3n2XRsg4oYD6xQRGdY1FiEy3Rsf1PhGXYPhrriSs6AsRnJx7",
  "key10": "4DXxbxzzuqfwDNmU6g2NhYeZtYjvg2Foe3fhBbjeSZjq6L2ivUdcJviWM7F9gWRPCZvztmmM5fsMo2JikbT7fJxe",
  "key11": "3wczsxqk6DuVthgPEsQpXhLMoxvBJCfY2gSjCSf8VwGobgfat1urimFijWaLQqMaa6z5cFqY9NkgA8PfhP7wNHBx",
  "key12": "KoWPsGWM64AXHRNgfxWWCpg2A8CwSnVk4eG4Z6YU3TkanADYZHhWF8QnGSdkfpqyxUwyC6PYPKSgPHwcU6okja2",
  "key13": "bjmVu354So5NgreGwk24ewubqTnyGfhswdWCqF8J1QRgZu1rLhHcPfeFW4suhKGWFraJeURRHSLUzZ8bkbwMYqv",
  "key14": "2zZFy5CR75pFjz1zdnBrD5YNcmUQasPfrVr93hmSa6YURF6hTDxA6qcrGcoXfWAdz9idd8yjsKxLwPuLu6fMkiu5",
  "key15": "66pyzNrbnXvTCAWDMkMZjGyubM6ESxuFxAJ2HJY3AKK6x9ip2ZL4sPY9PmxvwNZLkxin91HDGVSei7w5hS2z4epf",
  "key16": "2XJjq2E8wCkWTcZUutApLQfBzK987epNNfkS6k6rZB6yNxrVquu4fWzstKGgJKDGHmgEg7QAHftyfqnqgutC2k6n",
  "key17": "5CG5HVQMEiS3ziSJPk23vbcMJe9Dmikn7VLeu8carGAeV2RgQV2VrggnARWUFQohv2stap8PNnPtQBqqNUpFfpvw",
  "key18": "6vKmRGXWX5Vo9k77oE7Xg4eicZRp4ZVtDHy4ens7w9JikuH65n3CpaKyiL5oEF1BY5FQFAS42yu6vNtmhHeH9MM",
  "key19": "5f7D7iw8ESszqfhbp2w1cmKpxiFzK9f9a4K83eYbhsEUgBit8Powr4Tc2ECkm2ieQ4vpeKkBxjSLxoU3ov44T5NC",
  "key20": "29SMzkoPXaeaLQFAVhK1Chrxzf6EjhNBbWSAEAXcsi559xiVGC23hr8B83RRHExoi3ZJwkB7hdFcVvU47s2bN6bw",
  "key21": "39KDkTYMg7rvXwsqfWqq8GgoRc7QEy7qRD8puJBKb658EUdbr3tTrpLpWP1szLpcAs684S2es3gmQpdxTz23fubd",
  "key22": "1DoMSdH3C9XT4ZERQrJc4utXUGYpe3yRpE3Kx22gSra9ncWctji5ndf64QWPtSusmo3b2bnsmhPQYQ6MAV4GT7m",
  "key23": "29eNMiFB7yFddpZhzH78TGAHT6s9ZhBbQXAUabeNYc4swFMPkDHBfvTCZkVG3b6jozf7vuTesaaNPbG7UsDpJDVK",
  "key24": "588Kr7Kqp1K6T4Yuw45rQc3QBYdyh4r5i8SomCKmQ46XewjsVqu874nA1PTXcvybDZBscTJ5qqJqs679PWFinatr",
  "key25": "2h9m8BLtwFxjRntig4qEqyQyeLCrp5XazZaSxVY9nCMSb7nnLx1KFtow2thZqZx1Af48PyN6ojDRubSSFUDEpY2G",
  "key26": "3Xdu4WfdyVoYZNNAQ9NwRGVW5gXCxtLazVz2xBpqcsX6jgvgV6A1QCD8iZFgbfTWa7i8QHEuK7TU3x2cRFiy9W9q",
  "key27": "E3SQZXxh3BFifwepM2QmSbM8x4FvKtPL2q8vTUMJuCfBb1Lfe85HBmydfEajoRc4X6cawyxYjMNxYpzqhHVDXGC",
  "key28": "z4mU2XcjnG4BUKB1s7H2pRcrDaSckJBHK48Quq7k7wKe5isLCN1VUaB94KiKFXUci1AKM2ZHDyKyDndY2tTJH2X"
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
