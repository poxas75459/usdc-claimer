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
    "3fMd499wUVhj1SPfQbRM1bmL5yTLWeFh8tVeeTR7vsDF3c687F5YZM5feNrZC3vseDHoU6CNUdCmKPDHc9FkqUwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3chQxdk58czXzRMkyUiGRAgPGCbZU8W4rVrRnSoKsPS6yXvC9ePoXbXRMCy2dtUpbf8rRdDJ5oecCx6b3erk5FAr",
  "key1": "3554GpHeoNJdPrZrraUieqMSNUbW5ypM1s5waDr3S8ActdnW1v9zgvE4JSu4N3SUSjHExHytCxPNsC2mxkxTztuj",
  "key2": "2GxTCD8uWwtncsKE5sAkcViyB9CziztmbyWnXTTeopyCJ7YTPPG1Gkc3btfnuosLq9dRQqSoGRtsdZrg7yuGSunE",
  "key3": "3wEKmKWEAvDF1EsZz3anA1NeQAkNWoA4s912gqth1L3tLk4L2qA5TKMTZDLbnk3aKz5WBj3pRe7AagMMwok9F4re",
  "key4": "62n2Zmv37NuLBEyiYD9NnEn39ac3XrWry5GvhZZ7h6bJquNH8PMo8fhcwrDs6zqfbqUQYCbzkQckcPfQ5BzDKLoq",
  "key5": "26zsSFJc3BJNGzXEiFdWq8BQWtDyHMFCTozZWckbxbijnirpYT6mV4zCt2vkkXzzK9RKo9YedZyUjwC9fxyzadUn",
  "key6": "2Qp28pQZPzpe4nGMxWPqfhQQHqT3fBCnCsNMWxqXyuANy4SQLe96fJAxjif8u9vAaSHFghCNWkCWYH2QVbTU2q4B",
  "key7": "2uHU2hSbVd9rtRCL5qVCa1babuR4EChfrEfKvQ198stMbC8ZozK9D5wDx7KhQq5wT8ySLSh2AG84CmCBvh3mKKat",
  "key8": "3uJWbFrTvVndcoNqmbcHVThsE6ACA1Kdr6jqGQhGx3mwKi9NJ6uadvDhnDDS8LSFAVrE61KU4L8c8k8Ykv6FZNgD",
  "key9": "2aWTu5s5pVUnnuCERTeSApMeXQDq6AvFWxCjGghgYXKtyeZ2tWDcjsWDBsT3uKFVgG76GKNBWA9yyeQMKa7qvedD",
  "key10": "EicoxdCaZPY5mYUWKbNRnsmjgvWHDSLCinMFd9Bain2jwHqKQAMFhQvpdoTQ2kSNw9gwidKSiTLZq2HD1uiwPye",
  "key11": "4rkVeoyghLK4myywQn2ZtYHnjy1koMot6ZHRNW15dnPGMZdafYXQ1wiJy7PNqDnEg1WWEWmfg6i1CqYw6Miw8JAR",
  "key12": "345izCHKPSBpPuw1e9AJDpY6hBvvvt6yWAW3dEFGpjTkqJWmWkL8AcMeQ3qerRRAzoxLiaDcYkuCe6AUgT6n56GR",
  "key13": "58QEqjP2koTrQmeQ7Mo4cNBzFgujmTgc5uxRRLWAWCeiNPLGpP1KXoX29G8FUVBD4pvqGV84JyHVrRZeWbRFUikc",
  "key14": "59LArdk5mRFovCCuHcVDnepav2YQBGjqLHDfjc9QmSHM7RBSgEf6RERZ2K9XN374biTLJvDKWnoeaofXfedfyfhh",
  "key15": "HgDsncBMgAwAmReKQSBdaKFiFckBdNqZjEQbeaRVyZioqXLvXaHWRq4iJASd6gLLY6L2ZsypNN8j3MGMvAjARpo",
  "key16": "3JeCTFo2vobRuFuVjUHjsfKdgwTDCr9vnGTvm4mNkMUsCHshPhtA75RGc9dsUmkikwfsDPjxdMaGpvpwkkbnMdss",
  "key17": "MN3UXu67LciKpxJ8tMVZ2BHETuM53TZBSmBe38GHsLBqkkrjqtEcrVXo9YYUmqAcnEGqbCosFRiHpHoxcCeM54b",
  "key18": "sQxRvmyUHcf4D8KiMdiyY3L38aHX7Gjgdx2zAMezGsVGzGRUy7nkVzPpiDsJ4D9MQZxDKKoYSqmLgogMNanGP2Y",
  "key19": "XXbLAeMic8N8tADd4MvThhWGT9rpcREG94V5frdVSnaTTN5qhbHV7RpHnqxyTTbwMRDt43cZyVLteF4fsKHDeu6",
  "key20": "xiAUTPcoh6mj6vzzTsig3ALNcZ31vwfGmn8Xru4SJTBjU1emBfb3VnwGvApB6UhAg7yCxKXD5NPoDszfwweaBSX",
  "key21": "Ug8VsGY2eP7SvLh2ZGqwFt74yNnUgrxXhSB1ZRiZzEFxcEbwENLkQtdXe3Mk2LCvoACCzAea9reb2d8bjsyF36F",
  "key22": "5RVAxftAtfpEAEa43W3D5nnLE24hsjCbCA5Csgya3f4MUDZLVpX8eLwa2Mjk1pYajZkEGbmFncxFGAYDrjwgs3r7",
  "key23": "YAyJz29JTo374nhYRyVLanbAPB1Kjy7DFueSkMBcaTDbwuL4tkvPbRAxDXVYzrwav192bsXLKjPcbNM5k7Vra3g",
  "key24": "4kd5YJdinSLTuDY6f1EvbQ4NxeGfFfwg5PaViMMoWsijRgXqSjVjap3e85nq1RnjLvs4XAUiQzFBn5AqzHwPeD2Q",
  "key25": "2qbAhbwNPrS4SEfx1Z68YWZXNe4jjLGh72SV4AKG5ZonMkRWBQd66pUcu2Md1AJFHjpmQYQi4LZYQWfjaBtKFkCA",
  "key26": "4A5xFWRkuxTkTVocsV3yEFv5TCyjP76vbjjDqaTKTMoWUcWouWjfR8pu4b8sUxX7oPQVNSNYWmwMn7bbnPomXLqY",
  "key27": "XofDiDd8NyZZLj6rSvrKM9SbZEBTL9cDh9MMDuqkTwAVbj4PyxvaDseLXFmS5AwcdKKBzEJ1EhGHBdXfurPxnWp",
  "key28": "3eFUZQm3WYD8zdx3qfvzCqU4PZSpEHYba2c9oWC2P9PTAMN6bVYoXs7Q2arMwQEQhYH9BXp5sjP1TNPWBAqrfuAm",
  "key29": "2omwCsV9nqfxXVoEnNj97CAwP6wLa6QYnnb2qyKKUa8dMnz8iDhyUbsB7f1kDiGuZzZmuaZrLPcj8LPsRLyVhM7",
  "key30": "5A2JjsLPFjyui5XDawe5TvKNSaFbAjdQrxsnK1nPQfBUjfmjFTx3ANScm3ip8wFfeAAQ9EyDazkG46zHDEQouoEQ",
  "key31": "5DP7cWUBAXRdog9GqWb8WJESpu3Ku3AtdcNTQDZtDX3XZsPQT5n8E58Qhyep3oUQks1a2xGTZnGu2brLD6BVPZpH",
  "key32": "5v4YXBRzd7PTYHsGzfDdoRsZDjxRXeoG2mJ8hBUVafwkMKrcNm876mRfveB1pMP1QuFKigwQTZa9q81bdpoSwmjr",
  "key33": "5wEmGAskz4ArcBs4RuDtdd9xmZFqTo8E6vYhoBsP6Wf7BE6thphchicAZQUNYempnNEjRu2k5bKhBq6K5rSLrEzP",
  "key34": "3bnYcod5QSXTjAphYb9rdcDAPdfmNkkTyLEvmZdg3VvAHqVm4WXq8Cq2w35DxZim53EPM8zGNypAyATRgE1ZjcbV"
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
