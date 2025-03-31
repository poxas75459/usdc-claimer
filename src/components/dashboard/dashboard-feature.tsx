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
    "4rVN8V7t7shiu6D2SP2faYHi75CPyeyTxABithUHCN2u3RoY45ntDE24MkxSFf3RRPP9rcJnsakkaeZgx6XJRv1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NfmFrPGPbjQHBRCXzqUGovkEXqbDCv1SmVoCgcft4NnuWrgo9nW6AaE23V3tDq8Hyad24R1aSNTDeJHKvoTRpoB",
  "key1": "ruGH1VxgDJpoe4m1B5pcRj5fS1J3D9gMdkiqavuQLkKgr2MicjtfnQ7bodyEoJEuVV61b8dJH7fe3Zrrbjc3gHc",
  "key2": "2wrY7UFwnAWEZ7eBzbMzY4hAHx1HRJq6Y2it1wVYAEp7r7y5AshhYyPs61XuyBQ1dWdqStt9oygRzb17p6ZcYamo",
  "key3": "3UpCZD3Ho7M6Q37evNGML87Ycmkd6oPojWx7Gita89ktnetQNYaK4zxV5nHno6ZphrVJddmJrY5PE8UdyJbutHjH",
  "key4": "Fg4cRWvuHBNxjRhST3czsZ7dqxr4otreZxCPGa81KTdAwCckJyNk5WBL3wwbtZhcTqYpkq4uoh3L191VM2mP1pj",
  "key5": "fSrnKE5BT6fBeFWDQVkoqtHGaAxxkgTpQkvSf4J1NMy6NMZEoaTPiZMie5z335KE6pk1CrWJam3xeZUg6sjsKWe",
  "key6": "2P8381YNDc7DPoEnRnq6GFBH3pS3Un9tbNwqpM6D98zFmeLn3PhuWSWwPM3QrZ3PrMAapxQBmyv2RUNyedmWEWqm",
  "key7": "5KxV7o9RSdvm3fJDgDFPDuBHEL5sxvKfjxmjmTGLUuYGbDkeSNfHyYdemscNxkv5gowqcmB1NfQJ9uKHPjBL6AKU",
  "key8": "4MHuYNSngwphWmDSkyF1Y1EKSL2GMSpT8dRTSBsw4uLN2i1tk8cfSeNf2ubesiw8WQsPxEEf5pKkEp5dgM8ai7Fj",
  "key9": "5arLTYNLWMETisiQpjt6WUQ8tZKUnbuov6QZ81qg8YzisLveRGEsMsKW92Mot1BmNxayE6EFdyecEgZAowiiFkmu",
  "key10": "2EVRxNaHFu8fHU5uyaABN4gLuPEG6YLZeJfdZk64mwmT9dgLk8hVeajGuhvr6AjYN7yAzKwhv1pUrw1XvZt191P",
  "key11": "5C2Pc6s55rTVugANBAAPGVjXB859Zyks4PKStgyPj9vdTxHYT5qQSHWszzatBcAuaygYbBSoMoXqTsmhofjdctNr",
  "key12": "UDoerRNgWisaCsvVVE8yXMt82Wq8VUbAWC1TPuvTsQBHRpfo2HMGAKArFoFTdDwx5wSLmtyt1oZ5dG33tYhCfmz",
  "key13": "ecQzA6EyaSoKMQKCo9E6RPQme8fH4qquNnSJNoKHSp3Nt85V1Je19S1YGUXqEdWgLV1U6PmGz8LAcDFFwD3Wifx",
  "key14": "gqN9wq47mrMKyNwcYBGLqDX4cxBd25mTLSRa7mqPkFEt9FcTeWzce29gREptV2zZUHa4SZfKTMiyKV6hMDSba2K",
  "key15": "3SAPoB4nHFDJBpio7DzaSuobW4npmk8VhGSZzEEgfZEC1d37XCXpxtKhamUcKpYbPtefeccnMcuucxM2nDNahFQ7",
  "key16": "3om2mYWu9Zf9hcYtnGtsXeMub3CqzzaQdDEssdELgFcaredZgWk8aygUBqdBUGNGF69cLumC375yVvR1meuhugfr",
  "key17": "4KudTPnM9pVEnCcmSbmSWGMfzkZw1YVrsA6auXNfnx5ZZ6o5L8ThPJk4NEccMU7j6Q6dpGxeWmyBeTEdd4dvVt8G",
  "key18": "5EaL9EDPYvzhpo54cQqUFMkb9C3Ydgy4WHNE5a67tSgSQ73ZBALwwDYxQC1yajv7RnptcQuNE2t4CW3hEzBSad9t",
  "key19": "2Q3VcQ1iL3435ULSewak2YNNS9p6L3AJ8QX6xFFHBxVzfMu16wpYJ2jKfcNu7gaSvZayPBaKAos4gB8zcoMiyuDQ",
  "key20": "4WcdkTrxbuuNoNfrWvpt8dDrEnpGw1HHENkNVN44S92FqR3papydvTs6ZRJy67XuHsYK9Rq5Cn8Tkc9v9jCi3UBe",
  "key21": "2M6ihhBxESAS5b4sN7ifqWn3NAmGj2mLfxXuP8oLai9QN5BRzks3TJ7FjGfeTHjYHbunST7NrLsf37K4h7aFLbmA",
  "key22": "pvrcoSum1ojpZoLzgCGhTysNtcrLfffkfiGCVsWMMecfxjiyGcSWiQDpXKVDLQy6YwC23Qb42sxEBRXprcHGJkj",
  "key23": "2PnnhdMTZQYvDYCQHsuUNwryit7MhYCUUxYdVwme19jFpXrZ61W9n41qngsVL15fgZG5Vxc1srs8njBmtSB2yXvz",
  "key24": "46FPFdNNhsZoQJuQVsdKr3ufvXtxgLiTc2MYC8kZkzcxrt1Hsd7M32C43Tnt7EG2jf53cd7xcwe8wbfCF7wozD7s",
  "key25": "2khaPXDULk3ZyGrGQk3eHfKrysYSQJwxZNJqg8gLru81G9eoXtsxF54gmvVjUmHCCW9TuEeod4rwDA9FXg9FE1RE",
  "key26": "3VubVgWBJ7pedy1rvYFUeigswA241jdU7w5FUEshx14dPadReaY4byKDCn4n3VJqbdxd7vK3XbGktmNMofV7yBqg",
  "key27": "3xVrPn6i8RvXj8d382xJF53idws7xZF9quHcMUBog2xarUpDjmHxvs1yxmEtbr4SsyBVz1oYokmjev1CDcj6u7Pk",
  "key28": "4PVSAc89jE2EL1d1HCdvSKiToEha954wuNFSNnSvkp7xtLMCdVQwKoQVVvyDfmxBMSwLSynX5FENEHGe3bPbN1CN",
  "key29": "4yQ4tjqkYkA8pUkF6qZiiKMFbNVxwryAee9mko3Pgd88H1fgSmRnCS3UtNBgcxJSFeRUT5PzWwhb1WSQrXnj2dTJ",
  "key30": "5dyS2YwYkaTDesbmr9tAJKxrpSDPTrofZsRn6JFV2QYskhjmgMyfaYCGLHpJSLje3GRT3UiLc7xp44bQa51bJvHb",
  "key31": "4iTYc1fEoB95k3xj9bRi3fDSc17ok9bFqxvgBBmmvdxfyhgnUq83aW1ecKbvUy4MJ1YroJ5cSuhZx8CPb7zhGwX3",
  "key32": "4TywjsQrSJY39gGZsFsj6K2m44TTZueiwCCWq24uzrGJZ6WbPCfjXdHHWtBRYmesJbAc89qSiuxveqnw7Qp8ESB3",
  "key33": "5dckiMt1mQGe53ZEV1akKs46eNaGp1sJxkJeznLdaJEvokjuuh37u5xbwoAknymyABrQPCatvcQ4Vp5jK31KXao2",
  "key34": "5cCMrYcAUWwKiL1xTZXEz9w9p6woaHqqrL719jjJz95krggDW9yqTgnciSpcWSu6wptT6sop6T1jtt25y7b4pmQn",
  "key35": "Jzdb1euyKBi4PkF3Nr84TrQcJ9Jzp7xRKDmx6KAT1YVgTkx12uh3SBgo6DqtZN96EuyqXdMqCs4nL5hivkrhxtG",
  "key36": "38pTQPWc5hSQLQ2d7BUK9zdMybHqMiguHUJNvzf5KqyxyxBgZE5Ys2FHMy36auG2a99fmhE6T8qMsTaB14dYinqH",
  "key37": "YoU8xmMr77NZxwJS71iVubJNAP6NphMQEUvfxAtJcYFcTfqKdoaefGMpiCCuxAGWez5Q6QFhUPFpUs3wTsEYwiY",
  "key38": "MQZtDM6YZWor2c6yD1yiCfVGPJScQvfeNhu6irb3Hnhz46CcY41G3pEEUhYth86RHDABMVCKR2Kkh5mcqCPyox7",
  "key39": "49rBeB7kPKrnULPzFdpyawrQKe1ZZJtpFWxQ7VRkDotmJUxNBaiKKxvM3M89uN3Kz5kdCmgq3WiYJGGxEGWv3piy",
  "key40": "45dKgdzZ94LHGAUtdeik3yCLjuzGMWiAQ9JW14B7WfPRkdS5teNGGy6zbLG2NmebM93RD2XjN2bExK5MHX4NjRzf",
  "key41": "2MhCLHDog1A1wvJH5RGnMMHqFuJ6GGxAYg4st5t5d5igrY56mrbeh56E9QX1XC5DJcMHiUs9kYQW5igBWP33Ng2m",
  "key42": "2A9kxJ6BUMW4jFTbJYLmveq4W1JrnmmWSeqRmX2dLsHU3dpaXRwCjxZJ3tj1tsJi4SD8FPvBfBouhKoDZmjaxR5W",
  "key43": "3NWVfZEzkHANG2Symxm4dHCKWe7PohExfNoZJ91TEe9kwPxQX6ChquVpwmxgYUPQV4ZWeqt14o5BNDfJCfxsP4gG"
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
