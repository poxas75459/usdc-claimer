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
    "4YFAUWVuRRcpYvFzf6EsDiwRMbbWmkyrb42ixaJJg2V8sMvq2C68oSAvfWW5R2jvnx2LcVZTR7V2amd4wPpDX5u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A2j9L93pM4U2R8dRUpDS36UDx5vVLDnZ69fgBGtbht51UYHJE6mMTko98Bv6AFPVd2fHcM1Aua6U232c7dd9S1x",
  "key1": "RxmkbjwWa2Wp1xp31LthL6eveXAmVx4u7ePKaoZJ4jRC8hESmoiTpnjwYG6Ymt3Bv9ZqgQBQ4Cvv6yiA7JswiGz",
  "key2": "Z7TerL5KMUoF7PpDyEocYx9yyFkpZGcqJJvCEptTckeNtuLjRvzw2gTWLpgjXUrqZtFEewoLni5JK9uTbaaBU9W",
  "key3": "38KVr99KStQsoSytwmB7z2a1yCx1KtxNqfhtvNzf6WPpysmAumKRxng4gCnkDaNYufQyXX7M41VrY7QG12e3NcFw",
  "key4": "F1Kb5PrYed6WTu2NohayNKykvLwUZWZ42nfn261nzg4uiFWnEUZKcNdL4Zk7TJKumiTv9oyq7kJcqNvbTcVc8DK",
  "key5": "4N7porNxjAfkGMhjbvXb9nPrENmaC4ktiJKWFpKaiTstjUTvCGjFtp3SGTcvZcX6o4RnrTeo3wuYZq4aZ5qM4zf4",
  "key6": "552B6RUHJypz5UHEcu9frvnAA1iwqk83NtJPw83By9tXW2rgLQRbvworPPGGnx83X6uBBLwHQhxV8s3mYCm97S5p",
  "key7": "3xZkBPDwbmzE3eSpyJtP4Gk8tReGp3Wd2cTgYNAx2XjxjpTR7nWfZW92LDjPesYUYaotiEwukC794QsdUbtdTNbd",
  "key8": "AxZYMMun5oFUyAhwZDzaVXwcNg6vrBbUnBpGUXHaHs2HaCBMJpC4Ghc3BQd4VHwNAFsY8Nqghz6FsXAyzjsarxx",
  "key9": "3JdYbavrviGPPfdJK4qAZW2wBX62iazWtgpK6sSTEFFqEHGfZFL32n9bKz6LpdvKCgyF7oFbY6chkCcHZBRfbSju",
  "key10": "4EXtRyihbVqviCVAeLoubWBqgxLuJX8eUWDCb5fyB8dVkE2VCtST8SHr99gUh5z9SPNHf2s3cBFFypqQp6Mgf4a",
  "key11": "4jB9r5KtbidWKEq3LxuXa9fqSH5AJ6exGBSs6dLVErbCfKeEAsXg5wxDW756bRFHUsUyF3vUSg1roPJdsqTvJ8kH",
  "key12": "4c2kJ14MUYEK82iUigD9SbxvaaWAjEUotQLbRcpsqdB6XQNsVM4H4fwv64zvkMswfAuWyLBCV3qL5ySioW24fe6w",
  "key13": "BDHRdADXA8SscZSZEyfFnRJaGooQgYVVuGxuyKXSjpJ94zFedv8JNNoHSKXGHvcpoACHBvey2RyXQpWm5cTthFX",
  "key14": "3uUgxciC4zeVoFqMXXK1y4tDd4XkUTPi7LrY4Tzn1UMCiC1zQPbuFCzTbQU43C8EsgyS3q89HcV8VZH4cT1mpgBs",
  "key15": "63S4c4UfCoMSZqMumVm2KVKGuDJt6yfHvMi6hPjrr7bgjXRoAhEUCRvoWo2Zh1dLLioPWgJ8A4f2NieXDvGP5Cdc",
  "key16": "2LifsbtWkRAcrFsT4Q1U3HyS4UwdUmvHNXpcEeM1KZWnP7jcaxS8KhnXEqdw8xVaCcxiGvzoEuGXK1NCDGFe5yik",
  "key17": "2qNK75MrWhxMFGh1sSnSSfcef7hkUNFjtRiyEULHtv4YWhHeY896J6cxfL6yDKC4srqCY4ZARgkkZHw4dTccG4Dq",
  "key18": "5BmudDGznuRrNYZcyzZLZnpbHiobTaiD8wLVRZwQDFERgqemvtbc2ySgy5e5aBffzKTyPW7kSCfpXbYWMZCBne1F",
  "key19": "2ESj5hUhBNyatQrehvkrwKozjdmF2NUCjTgqapn7rFvtuej3Hib2sYibxxSebJv943x3GkFxjp8x37JnKFM3kAwm",
  "key20": "29nhN1JUSYbxvuXSmmSWdwwjZeb5tp1Q6xk5FNtxBa7NZLTaDXn4aLKEC7JQamkoGansbpZgTFcXk4VSqvyEDtV5",
  "key21": "46gqQkRAmyjMdgmq6qY3RUFTbSUc3E73tN4BipSBPL3egJWVqdopG8T4hu8mprvVbKnwBFLdLVkNHip7eAtmiBv2",
  "key22": "2XCLnrScY6cSDa7fijdTEXyT88YcA7vFykzGNx5dBNuEyo9VL35DBuaiZEa4yHE7a4KZcWP8pvqj2n8QLSHrGeQS",
  "key23": "4swtuznhBgYFjetg1ZbC7g4f9Hyn8RTApxa3Qc3tEX7pHyDUcYoAiPrEvcQW6Lh8me8oVrKiaGiFNJsEczrzoEA4",
  "key24": "2cGoq2VjC2G1uNyMH8CtweBR3nh84GFKhtmcg1bNaDHRbAvjjFzFC9TUm9bjfoL2hQWPCrMrqCd8wo7WvA3DeYEt",
  "key25": "2e8Fp8MRmrJrgFMM48TZ2A4RC4gGHvGkLA3keZJFUnXnGgctBfwc4E9578YoQxvDv2jvtyN6aiz1ZG1dC4ijJQDG",
  "key26": "4pfDnZUgGuuZVHqCSuBmckfe5BNRFGU86DvdxTbEaWgLCedR5a5fCcDqjdBSJDRvuXhVku5okuJHi39ADqmbUgxq",
  "key27": "dn2bJ7hG5hTazbeHrYZUmJ8b9ZK9qVdXZ1xBoMT27hCc6XFCfkpvkEz6jrSPBBzZFvXz8cK1ZejJnKBibJB5eyE",
  "key28": "2rRhtogA4gQoTyqF2CWdjoxirvzhmf5f3LqSy2gHPNvrSzjca43wDvHqXsFMtabWw7pnRxvrV6TJ1xShiT46KHsr",
  "key29": "2HfaThJfc6uePuYQX4wXJX2iDeGaHb2TNz9B9XJBk5u74PiXTtB2KKKNsAvhK8VoL7po8vPzdSukqxfmtDBTePyy",
  "key30": "2PkHxb5XxqfrGNb5xARZzuGEY9YUuxb5ncQh6daqaYfsaRZGQbc9F7hz4rWq4VAEYWAdzjroMK9Gn3ThK44HZGkF",
  "key31": "5n8czmszTru2NpAnMSyzZ4yob8HYQ5N9ScNV7bEN5qHybpUhgtZn5HJ6rdwbjz1GWzAsRH2Qc92wrCGEMfqJBtCF",
  "key32": "5afs4HZ7PUin894QvjSpiXQNZiBFuAF6Qofz4XZ9qdrfzXfn8VgGQ4poVqQPQFToL3V5mzFxRkseL5nQr4wZYh1Y",
  "key33": "43XUbRUHK1kBVPMJxep6bs5Y7gCNm3QwmMmz8K8yeWJbrDj1UZKCukXbLv4R649WPEd4yUN76u9MBacY9HhUonvy",
  "key34": "5kgavv8uCtBZTrwMEYdtSQjdPbjkQruKuKsN5NDc1ZxCEU5gk4n3MAL3nqvt3GZTw9WdyVdf7uoa8NkyHgjgHCXH",
  "key35": "AvByLVTb47f28frhHxfniQep3rkY5vFhHtghS7d7mvgjgfs6xGeCrgne6HX8zt3Kmu7q2cf3JkTW1g9LSQtPMAe",
  "key36": "5XT3K5GhqhLQHJZT9qqyX9CP63YytV7Lj1nBBm487vUtDMLVDjQSSVb5G4jofZgWt36rwiZnap1bMEMcpo297X7c",
  "key37": "oFmVY8ax2Qdbrom7AScAVg8FPu9FLRD7VvpoVvRNZW6wskMXnqF2KL7D5eLje8SDKgd82Sdv35a179BaTV19eqM",
  "key38": "5kzbdnaPRuxQdanmpiJVx248hkeZkbTF78pyK74RxRNNQpe5TwShNbJWiU9oSbWGG1JgqzQvNCg3BRJzHxrhT4KK",
  "key39": "dBW5TyKviTA9MrEqzn3WHo6nRidTCW3mWKJXaXyXgPtxC9bD4yABW6j6HM9t4p4y1aQcKoknQMVdXw9riN5Weq1",
  "key40": "4vZnrHSu5dz1Xa2Gbkm2ESKKPAsUYAQ42uxGxvK7aerf2SRyouoLhivgGoMS2W9iF8RhqjeJhn4aq8a9XvY73W78",
  "key41": "2dTcHjekxETCY3x734HQj9E3PrFFJrBPd9v971oxjtrSRxgrpSTY7RSe1xLXmHxqajXB3u1pZ78VjTn9k5dJ4boT",
  "key42": "2bfaM83sktYouPV5jg8QEzwqn64XKPBvQrJLbGTzzvEbPqEG6UNoFEveXwxavAR2YhTTR2MExc6ocvf7z54phXFL",
  "key43": "3DF5cSi5jj1n6ffybpnxVXMVmsaf7Bmvphqeq1mJs6YUcLBxmfDN1EBzLksUMpDyWBmmNTWUnaNmXdvjizdiDBxP",
  "key44": "36p2ESMgvqoDSbYYXW9X3cmcvqUkfThgDbfd2JNVE7fhyTNWuimtRjaqv8JohwFLqMHW7NsT9y4faqgYjeqRt3sj",
  "key45": "4mxWvVMcQ8szw1bt2N64KewgW68WVWBcSvTnVkxdX7t8xxGBE6Zacy9vWFeWoKxnFcncYTTH54DaEJCf8diucxFe",
  "key46": "4UPTVEsMMs8rmVGkadpfFbW4tpE6M56osdokjvyDuUQCjmEL6vBTyTV8TmYfMjE5QrgxpbY4rsXE1mVKZ42rT93C",
  "key47": "5BQg9Da9znbbzFXokegUgxf4Hs1nzER9zZacHU6vurkLYuNN743X3AprbfTZU5JAyWQtWv2zuehgUcmRhGnVLti3",
  "key48": "5iAxVLovsWkzPZ3D82nfnNEPYdXYeuxSwEixUCaKYUMqfKtn2wu9bMEcZUso5SUTcgHSp44uqVWaTEPYcNboJNda",
  "key49": "4DAsZsrpNscKBBCh5XoVAjEHGW3Dq9qvc1hvvaZ7rTavQpsMGfa4FtQPDJ5mK8ZbqA75L9JHkDrYYmRiMu3tqAKF"
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
