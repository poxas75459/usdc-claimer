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
    "53wMt3APP4F8TjfqPF2ziF1zAQ2KLgoiSp415uszJovSx326CrFzHXYEykhCQK1b5tZQKFjmc7EDqywSNS8SoEC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xctj3nBqAXyAmAbb4t1UvaV9Jnxg4tKSftdKNF1k91fYGQQzqGvcjjd6qCqKcVmNJTJPmAyZYVFLpN5bnbdBM1u",
  "key1": "4FTBZ6LXfV52BprGTN2PuG23ohU2TJbkkWczB9HR3V9fagJ26yhuBMUxx1wFGEt5bxJuiRT6MRLHfMU2d7f3eFpD",
  "key2": "4pUDFMuXXPenAy5m3HQsrKQRefnKkKLh1FqHPE5YySYMqQTxDXCqNxLg3gbDFagKkasrHd5ngC5EtdUDw8BwyjSW",
  "key3": "4BiZv12Fc3a3RoHDvGTGi41KVsbz6vh2Uwhk3oThSBnbfkZdiCNXLLCgaRVZ2Wow2WZccTEcDdD5pVtwkZUZwBvg",
  "key4": "5EVteYKKuo9kCDXziYcF1ncSvLVFpPvwesUVVVjnqHRZzHrLpME95hTmyPpf2VskYwge9JndkHmDSrZHmsfPA5f2",
  "key5": "4e2LbVxyXnmewomTHi5NCR3ykz97XUr8Mw157ZRQUMja9k3U1iL2xGMBEXNBoNM3cbLXuArptsiDdE6k82frvoDh",
  "key6": "3FF5wBsq3VEMM9HLVKRLjrJ8BgA3W9YknEZNw2fzbJtTQ94BQsYE66n1rA7X28Vvw44Pj1ZScVcCV9yUpcC2Sq68",
  "key7": "3DHRf2sy11tVLMvzd7YZ7FNPNWHoRojYADFkNyTJdHnB1XFHJEvZmohTXmRRnTYmyY1st1LFHRPTrkKgktxvoXCy",
  "key8": "VN5Yn7S34pdjGvkEUVEucE6YtFjaRebwGxAgBzwad2KZ8CZGA1JPtaDHuT1cgBdoXMjWmun5DKzc2R9HLqspow7",
  "key9": "42jR62ipt5D9a7Yabb1euoTTLyYrwoVc184Dy9TNaZgz86bRrrMrNVHUx2if9t6JUscGprBtaZzDaPvaVAEU21Ji",
  "key10": "2FXDaFSWGELSsofmKoL7AoFoq7eW3TSPmcCqrYXv7eYEZhbjVp41RKhsq8E1jfzU55HTBTHksrMjEHBBNUKSzUXF",
  "key11": "3bwcL98121b4AyyBjbrttd73s9w8HEqXFoMawgjutXHifGt6bgQaVVxisJjC5DJ73MiFjB8vLqfg9L8KF5LZ9RTT",
  "key12": "3qpfk3DKnFhqUgQthkxuNw3AhoGax3k4Jv5sW2iZUYLTrNYoYLuFGPt2LQQr5AB5CQEqS3EFh2csRqvWSMPsjEpu",
  "key13": "n4EGwEuX9CzEZwn7zMHNdxtR8kYo23u1y1gTipAfkEmQNDhDxuECm4X8N7u2tPXYQMx6njvwi8uPPXTWNBX3W9a",
  "key14": "2nT8M4yxy6x9sCcYC7oHj46jeeJFphs2yLBhERiC8w8Wb4r7eCPxNUDtDkjXDRhzwR9xCyWMD7scHn9TYyKykkwZ",
  "key15": "4uMz9gcAn5dUyr2BtESVjDAzkvMvGHKjWxnZ6r3dZw1rknKrTbDcXGJVvMHRxXh9BTc5jB4SJVfbXDUxrxciS9o6",
  "key16": "vsGfgqfkK6Wq78yvQmVpKbZ788QkciWjJLU4Dxej9ZFcGC1z8gdJAjJ7mLgLf8MDqa5E2GHZpECSVMwiynA9XDs",
  "key17": "4fWgUHtfzLFK6iYtvbZ6Be7DiP9KGCpvryjricx8Pu9sHu67jho4BvinDSBoyZcgYw9mU5FifKSimK5EaK8Jbiec",
  "key18": "4a5fcTH9D3aBj3i3ikSUJ8n57upwJoJYz7bbtQZzmaPUAfqQa3iy2M17GzfFh47Ut8rfSgRAWEADTfSAy8wu7TW2",
  "key19": "5tf9ffU49aSz7m7zjjhot98b1YMfYwZA6eDJjTSExVQhhyyuvyKLxjpS9dZLNjfPvDeVvH9MiiNZNA1a1W5cerHn",
  "key20": "2jB2Hj1NxxjGdTkiAqcsW8nSPs7ybXeMLPwxHePTZ71Ljudqu5uHWVfAVAsTGJZ8JvxzZvgPs6ovvoNig7TzXFiz",
  "key21": "2xzzEtL4WrGr2xC7U4SnkZZgrWobUNiAwbVwR8T37QEmg7atKg4iisW2RLDAutieBDs4TLAgbjfjiVac9ep7eW4h",
  "key22": "2edwwef2cWXVs5hPk6uF6yNNmbR77porAom9A9oNJmzTcNB7vYpKHaRWVVWWQFiFdAGYpARGzMdYA39pSe9Ff9Kp",
  "key23": "5ZVjxTD21SEprZzVHpnX3dogEcqgfr5oGBLZmsHUagUsfNvPkDybDwPYjRkPGKBYuxzUrBurXUdpjvaYZVe1EUuo",
  "key24": "2GFhN7L2KpQW9rBoWBPoUtbeqLGiuLu18aMzPV4rPEvrUnMX7VE7Ara1dwd6RnMPZMkn2msktpC3wDarFrEbVT85",
  "key25": "2Y7K3h1WMfUQZXvpN7Znf8xiz2BZos3zvppS2wPht9ywAWTRtZ8KAjPzJ2XLZ7MMboce1Mzm8fkkbdcNcjZ9hTaz",
  "key26": "F1Sin1VuyR1ainQ2dMox3HqUer5u6rTuBJ92DzhQr7sUJjDd5P44TeRicsMmAmPfSznXBWJ8zyNoazL4ub4MeCB",
  "key27": "5ivu4dhJBE7eUs47oFKvijEmDLP1exAhiV2zEJschBMuU35yv6bUpNUYCWUr3CpyM7a8L6zAUhqDuqLUntiuZmSm",
  "key28": "2Atwi7yQ2g4Vqg6E9VPpq68rWJcMgQwCaTVLLeeTNKwBmvhPhhgMV8FcdtsXGrxtLYAft4aNeZsfiTxfuCW3yvR4",
  "key29": "5ZptLu5Lvx3S9jqHp7Q2mVHjBewnLTqVF7y2MS7nuVUDLscM4agQGKZkmsUjrwXx4QRGN9gCHH4nLSXaBXN6x9Zt",
  "key30": "3fCmr6gc6bhb8FTFE1kibwzEyLcHGpYcPiweew1dZcFStdhdCbuhNLinWwMaTowhoPqDLajzCuefeYm2QXu2qC7f",
  "key31": "22vz922Ux5RKCyFXevfSE6rBMQkiUDJyVWWgvSthv7q2e78zNUu97BygCj6FxYC5AL9BaBBhYJSgaEPaM2n43vxY",
  "key32": "62HuFCogrKWXdEa6Vqt33gkdzk3M1Wcyuge74jn6ucNvj2eCpKfGRkwqhiLiAMiSspL2DsQpRJwutsyckQN8R3qU"
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
