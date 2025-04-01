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
    "3e4e7Ew2Epwaj3Pv9GXS5FsTPbtM8vMhV256AFsAgock7YosKCSffugpMAxjLZ4gtndFKGqA7GhgWNyM9fCngqZz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voS4mSRksBcZK4KUXxzby8nJpHkphyY7uA7CegxUaY1xg4gKTiupGjvWC4kefumKfdgN7csebmkEaScFrqGwZnw",
  "key1": "4Kcy5zahhrV7MD5fHvjy68LpFktaxMft9W8a5TKQYpg5KJEHdtsCcSvyFA7nze7fMy3EzzaHACZDrW9E2Wo6hnsX",
  "key2": "38hvuRKpx8mvwRT2AeexAG6GcMojbsFnoWHwYMAhU1V7ypq45p1f5ETd1jQUmnYXMPL5GRRc2oxDrdEWUEqykXwa",
  "key3": "3YHrbefsQ82erdZGguMf1XZMTispt186rEgoZe3GwPvpAeP8M3PBKYzKEA7MAaYBmjE1HeDTakdRxiShp3Y4qgSw",
  "key4": "6115cffFyjMipo4QqWeh1BRZV7HDzD3jFTyzsMrcBUvaqsVMgP1zxQSFrEkk8ubewXcknBBdADRpBfpzFckQf5cW",
  "key5": "SiyvxTB5o7XZvHFNZenUQU8a1SftDwXki34TDT93yhwE866PkdMWG1bfcrwAcBBe9bujiuWyb815Cn1xvaUY8gc",
  "key6": "5YzLSRJ5NrWELnkgJGfwtCpkerMCj1j7Fp8gEnpsJXjCyqZqYak5ii8fBSNRgXDcZxNwjvtT15QgsmQKc4m9gBJj",
  "key7": "5zXZCc1dp2W8N9uJRUvHXNPWfybcHCRB2nVGqtB91Bu2SG4VppH2UewZcNzdt7vk5VtWYgeTkGsxQf4F9nXiGV5P",
  "key8": "4GqJBwzmiGVTwu5rNj2aiMzxzSzBqD2VxzPcWmT8MxRxSfFG76hxg9jVJQbkR6ZeJNNoWQxQFVA2EWy8hyxzvW3N",
  "key9": "42jMUTeu3KpQ8mKBmVWpN431F6tHKCpXw8Qi2j3Bsi1P4bhcxZ99ZmRNbknX8svZnYa78swhTJpnqwXGKunv3MeV",
  "key10": "NBkXJ7gzRFaYbeedoFjYnNV9cHUJXs3VwrkGvjeVcU2BAMFRMo2kee856wwhZSctPBWAnNXkHsdyfUzPdN5MJA9",
  "key11": "61zk8zvcwfhMFERcDcvWLfSWtzDSxQ2zKLR4eM3BEb7v3b8JyEND5WU1oHmhQmn2brNAve3EUEJeCidFVwoV4G3u",
  "key12": "37Tw4BC3fgZaCKUy4PPi9DWCvavnnEFXvoS5qUyF6nhuGqwbzEjWTJ5jcKfYSMYTbhJY6giztxdykmH3TLj5Jp6C",
  "key13": "3qkrtc7ajam9RBY5QYsGLDWDBVuBMvmPSfFL9ppgmEu7y2LZCjuLfKHjv9HyCjLLnsVaTRnoB1RcqxEchoFotkKs",
  "key14": "31x3gD3wAMJR4B2hAUbKtjqHShrKFA3SNhwb7RBQYmoUKVt43ZSytSozFXiyAyEVzwF4VSkWnw8Jp8x9ee8CpSA6",
  "key15": "4b8nGMHdGfLQsA4gphYmjuUQjo1ZuQLDJBGmgMxuvFGjiLnuTB6tQ8jbNH5N2YYpPnuC8tE5iJErmy6ayRZ2Mgcu",
  "key16": "5GPMH72w4X3ipHe3D7UPgR7YvbFc9DdgH9DqYZbNUKKsUYvbdRDVEkhoQyLVP65yAKaNRE7QVgJU69i5EwcGiG4s",
  "key17": "qsdhG2bhzZWZTCMvsqZYMGDnWY1Lqo1eVp3nmfHnmCtucBUh22jU4amPTLz4HmEBkKd7FbPnKU3AtNwKqaikr6t",
  "key18": "2GuPfBWQ7jGuEL3jJMMtBDNyhZVSD6Sn4JQZTWQ7iJoWgtRjZ4naQZ195RF1SYMvtbNRhVbP2o2RHs7YEuTiBgeE",
  "key19": "aY8fr5Fk6VWn6UJiEzkVdwgtZbP9MezsBm3sURavgUSARyztV258uM5486Kqpw9ciiPA1hR9NiNqRtEQE2VQZwA",
  "key20": "rkc3aE9ND6zHDmBxH3i126szGKpo8HzvCpvQRt8VnQiYFWo7Rrhkj3ukJzTNAefyptvmsHVdyhi9MTUvmqF1F93",
  "key21": "CriFPhMgrJAvFpCvTbF7Jhi93UysgH6N14dqmykUqyhXmHazJfNWy1MBFUX4BwavyBJTdonGitqXGXnDHy1YnRH",
  "key22": "2LiEgydpx7R6DzsStTRUC5A1WMb83Vzs996htMcnj7NWhBcGrc4r4Spx7ayd75JH93Hi8VMnxwvyNXFhuQwbUCcw",
  "key23": "88smx7W58U836QiPRRMJP6LomF1NbQBQ825M2TYLsULpQ2LYpmJFvEDXQ5vHGdcB7KrgvcLGoi3a5gT9GfMmhT9",
  "key24": "gH1iwSxzYysjubH1id7ZRkPpL6863xPBeusga3a4dhc72LJqzYi2X3kNxstMX6UXMBeat3DxtCEf2NA2ru4xLWT",
  "key25": "56NBxdtwrVsGjSqPZioo3BXEPZMHmjb2aUcwXuUUEedwBDVzUnETdwmHHwzwYJCg8ThmGG1dptFF9KrX21xYabzt",
  "key26": "dys1FrkLMDieJUKbQncrkGx9u24bvq17qQSWQ6EZ1FBdh4dN4FZPFAeLScJLgU6vjPSSQjPtJHYaXWAGE2cYvyn",
  "key27": "2wZc47dK9ZUsPbbUQ2jtXXvasjNYDHw7TitpbKSCLQjGnvUKuvBWqCvrVbqvjVnXFPkkAvj9BE8LNgyieXAJNUFx",
  "key28": "2tG1aYcxfBMb5EEvd3zPvARRqwvu3FgHaNMy1r7PAomScmk146PfjDxeKJNdmD3YMDt4qw64621rufAcSiFEZe7L",
  "key29": "2bBbZ4TBxhUtGLR8viBeBuh3BtpkGLt9M9qDSs9os3Z6BoHqpYombmoanCSo8QexMf5FbB99wXBNwJW6SAiF1ec5",
  "key30": "L589oHLmSbrprBgHfNoC7HNdvRbB5om8S4u7xhhY8Uqu5n4u36QmBSU51CTwZiaMk4cCrm4DKfDzgsmt3CZHDJe",
  "key31": "5EQS4v2w243HCQ3jusNmoZhR5Q4VYCCpTYfW7jbremejCihuqiM5NWdKg7FJjKut8PeEVz9aakb7Yvemi1qeAnXu",
  "key32": "54YqSvqMTDE3eoQZf2inbYTcGsUCS5EHm1jcEhCXhKtvwgEW7gfQi3HwPwPkV3xia6CxZAbAGpddQ1CcwMbuzbZt",
  "key33": "29YT51iFyyXtD3DzZRTyV8TL49WuLeX25wXGLDbPV4sAt3dRMKXriqyg3BfnSpTy3aPxfY9fPRWQ99JJKCRxhjNi",
  "key34": "2a3XP5wvuwJHNvXwS4S26jNMJTDWqjKxHQ16QzHspusfDiQcG1rvHQFBd4p2ctymim3UuZ38JBCxLsbRFuU95VBw",
  "key35": "4VzBuawWBRb9CwWx7eZEq9RjFHLF12yxzkeT4uJXy3ggC9KjCkyQrbukyfec2khUA7w8isScwowRkKUbbJitdgVs",
  "key36": "4phMmJGuewwzUiJmCCt2LcVYA2ccBMgTm3tdCWyvti4vyPNstc7ejwyS1e6WDyXtiQ4ebfDooFVdtCY5EGjVtR9i",
  "key37": "3ufbTgVvCrjJW8KMmF98uHj9DhvYmHKAp22D9dUttLT6nLh8emU4VoFW28LiWqZZbzdqyDcttd4wneJ41e7K3Ga5",
  "key38": "fLPW7crdjzP2VW8u5W6e3o3chizqtA2avWpi6ZeZFMEdvTVADX7W34D3eCrX9yEN2SJ5iC6iHEwei4cJEBL1kmV",
  "key39": "2QXyvv8d5UFvbsUBpnjTM8XMVpenXyURAaBy39ZHDKhSBXFLmZrL4FpL3GgcQ66nV17DgVpsGEWQwGMtYunqXyeu",
  "key40": "4rFhby82noRQPPjnG7h1rknJbwzdTv3PzX1yxhmCNsmREbQADfxcb8eYAYu8hWv6o2i1pfvjsbfjUqyVpjqVnMo7",
  "key41": "5DXfeAamqHavnjHtExMCFkKLzhddPmGGTXu8SgkZy7ZotLGtLFrgDRJ94aMmvMdZsXZXDwjirxoeARxQPE5MNQqd",
  "key42": "5cHda1bCtyZm6UaSQUyqSfJpHc8jEZwKH459UGozpvh6ymTGqttXJpjkDDwCws339Mj2qz6uZdTKywyvs1D9zdEU",
  "key43": "uS2Yriij7aVxb94NjkS2aPJzDon9NKCMecdqYSH2YShTfsJMumHSMGLmmdDnd4SnJ2SZRnFxHe24meH3SbeiDTu",
  "key44": "DpNfcEaz42ue5WDXXZj8GAa46q1cpj8A2qgWPpN71AW9BRbkUntJEyN7rQdpS3mEDktqYp2nDcAAg8KKcpTDduE",
  "key45": "45paXMp4GGLZzYVaT6oHCj1PoVK8r5SRsZHsS8pEuKamtBwJnsQimxisy2FbNh9FmzTcVnLZsTMiZPEvwKSRTkmc",
  "key46": "2Mbg4ow8meUzd9GDWCN3CBd4tDRG1KPB9AjSdXCfezhvWZWBY3THaRzu6Zkv9qX1dB1esKD4uHfkndnzYMftAoGe",
  "key47": "3zu1G9GruL3Ko5Tv8XGQYppnNV8GnyHdskANQwSwEqua7K8M3QB99Jc693KSSuyxY1JTVHgTu9sGMutQ9N6WTpYZ",
  "key48": "4ca6Jimy15iN5qHM7v6u8giPz26BVcRDiRTTLQfNV48m6bLX5Q6kWXu7fnTmvbkfUiEDsBAEkuEk25vdaSkqzy9x",
  "key49": "2aim3zedhNooX6pdrSWDWwD7gwbGnrDtKGWZpzX1os1uHbXmAXUX7317a5rareySApnKrMsPenczeBn3tyxFhrvj"
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
