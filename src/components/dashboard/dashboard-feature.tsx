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
    "29Xx9t59NETy11ckUq9GLsMJ4jRfpvU8G8ohf9fmwhMkyNgMMqDour58pUjQJs9P1YVbuyabGn2tFVTG5xmTvNXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5exdySdd1Ae9sp6XnwWU2BrhRJA4JGyEcfTkZZRipbg3y9SiG3CN8iuphxisuXkSSXo935AtzxN1bNzUrE63voqM",
  "key1": "4j4TLAHZAr3ToCchEjtDKR24Qxq4BH6d62DfcTAfZZ511FVhMATk77ks56JmPztqAJsCKtSWDo6Y7LkGi4WxiHwp",
  "key2": "2spnZTB6tBnYePfxz6Uh1tvyMYVf2VqDZ6aRRLKCufqAqnQgw5CgHpEDaPdoviqM6Zx5YmYHcMtSZKgEpBDUVaYM",
  "key3": "X4EksT1kfNrB4qcDQ9wofPqb1XaGqs2aFm6XnZ5n9wAGRseGeAFdDzaznNX8hXeA65BgD6aiTngf4S4XUGneEZv",
  "key4": "5ce2rNUiJfkd2BZD97BaygpmB9wdGZGybk67mCuQiTAad12AnD5YagN9EfNsVMrXE2mm44dzbt5YdvaVs8V9u3hw",
  "key5": "5owvmDhvrJCkosJ4zjCJXuYY1QuiamXYHr98TiWngLftH7GrELbXQvgWHYu2KY8DT3EAgZDTixrPBtiUEStcYZ9A",
  "key6": "3Jc8vqZDPE1wAFPnEdmeCkETxhHp1aNFxJmxjYXVdW8oLmeSWBiTF9Qbyhyw7mhUP8yuUKdLn31cGhxmUWeyammu",
  "key7": "4DX7pLgbyUmrZ5cLUcXZeAsioQwMwdFuEeHy76jjBZA6VgqRad8VgicnMxTTJh5LaTtmVWT8FswyGMT4vNWopG1t",
  "key8": "5DZbK5LWpK4wkdYnzyj7QXBjK4qUQi2Xn5k48TuhY5ipjKeaY11qaTK9Kt3SshJsYtRszT92bePefyWrqieYgsnr",
  "key9": "5V4fEsqwvctFEvBK3K3d45cas3tB5NTc24kdHkVpwMo3RTFNnuoo2j1CBtLD8P6D5JhSviRr2tPHUjAdYeXxHiNK",
  "key10": "2gBuWEh5h9y2yKtLuHEeRPNiahEfWP7gzBwjjN1ZtzwJGe84FdEQQrsQgiYnV9BGjK9Jjjp1PJoDony1vutkp9yP",
  "key11": "2d6pvjzkg7GQUCFnbvpgAaxJLiN4XDSYM8uwETjaFuSKCse4uizQpNg7RkPi9tuYdwE7oNfqrAn1d5cTNi1WpuLq",
  "key12": "3s8UhVKWSB4h7TTeipr7Qsfn3QEygV37SgZyavj3eNnJySVLnK9eRJEFqmL5wU9WBBmbLDqgrKnAdcWCh8roHAbH",
  "key13": "5RMWzbqFLswGJ2Ur72SkGEyruYN738TjWs6r3oBSy54iuZD8UjxckDrdjXS5Pa4AKfzEUeWBnyECWUExLdHW6WTN",
  "key14": "zAayVZv8m8xTEXzrEkYxBfAABgNsMFsQRqHXgwiwYbGKYUpqxfJaTK2cDLFEBmVGeLKh3NBBnPmYXuE2NqSrXhr",
  "key15": "5k6fyPm5h8PMdMHda1JNPiY5pvu2u8UQUa8vfvDBJAih2yDWfjRudhYdCdaU5jkFzRSgJYQBHDRrFjPJ94UYkXpn",
  "key16": "3MDpSs8Lvkpe5ETxehCJajNiYqMrirsZ1mVrS6WwpGHaF7wYcbvgdJj4L3EvFcKwPBr8ypv1QpFxbtbZ2M7yE1Mm",
  "key17": "4xNMyURdmVA9x8584X95PGLdEWssY15Pc4YTZHTMTLPPi4LHXYuKpnknvbaKWcWFUYuYyeHrh3WqK7YaUf9dKvbt",
  "key18": "UhjwovMycGN7bupvkd46CeN9bxWrkRnWc1tURkddN3s8UGTTHe6kRe2PBJCTXBVK3UUTVkcW47ucQj1MN9uHvRb",
  "key19": "4ZEyohPAHNmCA3C2HSyyuhvgJreTZgkXAg4JDaekhDQLrDraJUTpBKRzvZxHetMpUfQPPtvRWeeBUzMZWiiA3ps",
  "key20": "4FPFCqGnBkjCzjyF7K9CRUmmUKJfxN8ZW76Qihi36mV9YQei1h6YqdkwJjmVcjQHZz78TzgHKyxH3cd6nfzNRCt",
  "key21": "2wWwMHDzchGUkQKaCF9fbZfD4qPgM1xCwAGZS71D7gPUKGEuL9HswViJwtwtZwY61sobDEXobWF3BRcDaHB9LX85",
  "key22": "iuN8n16uemAJpvW7kx2AaZALcGp3ZJHtsSTQtP8ZZBj3TzbjaUKRHjbdFMn89AVhVFSKP7Tcuu6yRyyd2SSTWKx",
  "key23": "5zRGMFyiJfDENrQLRMAuBiVu5QdLfKp5hmRimb3mspKFr3CfxxtovTTKTBbCrU3snC9NzrTp4Yira3aZuTqZA2i7",
  "key24": "siNKBVaH9wkoc4MuyQ5RA3g1pETfbeJgSWKX2x9Dm5uC29DHGEDnZMAeeXBxJGbUbQPQRyVMYTksamsUW3RgWwx",
  "key25": "3Fjgmb1iQjmZTHgpiGRydCurVSeY1vbF1JvXXtPDmQuj6CNqsF2fMyNUGiNHJEHJAtPqP5autQExNZdnVTNWKaXv",
  "key26": "3NNmiFCGBwKgwihtvwmj6g6Ure2Yjfz9kpE4R2NxHc9uqfbvjF6RQjpMk7z1R8vjwsPAX3XHum9rp1YqNWfvZvsw",
  "key27": "5237FvRc4r5YpxFSG3NF4wTUZYdBvoVpRrWbz7VPozgU3CNAVTpszQ5Pct6psWfuAa22ZEmogtrfiytDBFuZepco",
  "key28": "36kMA54aZDpXCyZVeB75udtfEUu5k174VUb7U9Md5Kx3YnHDmqBfGiLydHtrVd9rD4dZnoM7Ut5kEYr7iqn58ZwA"
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
