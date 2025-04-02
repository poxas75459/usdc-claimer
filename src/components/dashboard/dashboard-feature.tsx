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
    "21iY3d9u2fKNapYJ4Dm59otcJtrNSShucNN4jdXDzvR3D4cwhYJ3wQr1xqWyRPjqo4RZ5RL85zFcRB2yhonKhm9A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rS2sukD1Vq6KGuKZnEuRzUoKeDLPMpmsGc4ti1ustwjiwtqhgTY13BvGzUX4HZZ4NSYMJ1TkKCDyAzPbtRusZUx",
  "key1": "2vbgpbdGeYxkSsbiFwviyHupwwn7sU7eKtdUJ4R5YQXyaXE1EiDgC3YhzB5BpW95jyKaKae3G5XAirZbGkU8dB3M",
  "key2": "4ubrJNnQnnBciQcTwAsaXAru8CKVDQN7NpM6HEmFenJnJfvfutxLeL1hVcynxG7FPsS8ZsLZqKhGBZP9qm4LcfXz",
  "key3": "3bHjcuFK6PB96nqnSrz4ibjAfqQnx73yYqKvnB3gxzU1HpsSrLqDbn6e9dkG5hZXc1oc945as7xhELmc83to6SLX",
  "key4": "4QzrsyuKfdfEx2MUmVkA33rHErM5dxBvopfSX2buYf1ZPhdh6Vw6qN4Sxx1kViD7Lvefr6xZoh11ip3vDhA9dKLK",
  "key5": "317kwshxr3GaWzhyR1CRaGchz1cNoKLY72TZBaTF4n1C7z7fd6rELY27pEXDNC6fvrZXCCodJpaRUsAWBxU2L63y",
  "key6": "3ARzBww2p6j1sjPwm3yQAJqEBSEpTrUad63WhZpc7RhTnPJp1xy4SQisjE3HxEhH6PYLr1kjZ6cNDwB2joTPzCzF",
  "key7": "2ZFHqpWm8ZyFdYUa3dw1osCdcxvQmmZhDQU88hoFLpwDFP3tpCjTm1Gse2b4CDUhAN6PNQRtEmWbXFfWTQk27sJ8",
  "key8": "61xVgNtATK3ZdvWmt5iGqTA8hSkcoLqdn7mf4jV5zqqUiL33FgYeJYptkAK9EANW2aUYdBQxTEwv25Y9a5q2gupJ",
  "key9": "2kzkyHmBoM7gqdwLjkrmMR4xRLSMC5UUzdJdsGMMjzbGT63GGRhRMfqhDGYc4CFxFR8t6Dd91Gy9vJLZg3do9oUZ",
  "key10": "2BxywBT6PWEKQHUUtJRHBtABCcqC6zoQyxneQywyKk8HkJGh2fPeAztkme5cK6Y8RqyTEdcWwUzcEXVTERNTMah2",
  "key11": "Q6NMp1Bxp9j8MqznZeeXaw1G2qyA2Bx14JZ4P4Pai5ivBVueNRCFAjPeXgZxdELJ1FLVA2jFc6tnqQMVyFfmD47",
  "key12": "4SahkTfSLcKxTchsqnQJJ1AeSCH8MxJTtYJEfyPuHAVnDcEcNZuVoA7GHRxqKSY3YL1k5W7AFmFPeKREXMiFFsny",
  "key13": "3f9jF24JneKfYQsPvidLwxgp4oXYVEJkYc8suPEhaPmBLWisWZwoRXCvo8JFV9ukYwvFE78dhVqx9F4oAb2wyXDW",
  "key14": "5LULX12ETzUjdDkJp2bswNvCxZMcQdFezUBRoCMW7tGZWXaRDiNY3f4MvWP8CcabFwzhHQvk2agSx97gULpyVHHL",
  "key15": "RqkWbxx51iLeXQU8pMpHwARdiF889Y49CSTbTfAH8ctfPiExiFhanc83VybDwfzErVT5EG3Z6Lk5c2KD34qPEpN",
  "key16": "56LPXPmT5AptvrQ9CEpRid84TJn5AVReGT1dkBuLPGFrRKdbhhX5LmJeE4WpPXbGUTUkHhNEWfBha789KiMw9ePu",
  "key17": "2Ki87fcRJjdTkwMvYqadjCGVw9zCSSvjdkewTUcD1QEtHEHNWiX7AG53YVJridxUcZ3bxKVVJfcxMJQsi7HauWQ1",
  "key18": "2WPTiGGsHXgzqEhmjYJBUyGzRiLVh37qBocoKUi24yMTufGiRX3iaKGtbJRLsrHKeh7P4qN2kP7PTbfohaLkUeLv",
  "key19": "25W6RdiEZ3EAHjBz9gqaDUveeeNneUKsBsySH2Lq7NJ6TKrTWqWZ5Qg4HkKGhJpupSkknEnXUKBiXfGpVSm7xHqD",
  "key20": "3pV33WAXcpXY3VPDhk3ZwXjvFSqY9ZCnLsgVD5KiLYMDCqRquSknbzfM8g16HcoTftFhEV3NTpPaTQhnJQ6jzQBt",
  "key21": "tex37wbSdjD2unnJ8rtZCx8QnFqL8EurLsQUH4N8aqmSvgXMbugpBVVuaWBXEwnfCikGeRudH2tU83i5GzHdhBh",
  "key22": "5bVXqsWaXVqjARyf9J2iVGpQByLosmzTNYuCgTeLTS5dosvePf1fUSsLCVBEmfyiMNuF9cxiMdhg9p8JPYLeiNw8",
  "key23": "3CCk8Q7AeazQb7HrNiJuPBEh2Qsj55cDf7V6NAHhHAEtPRUQefS4JqEXwwkokuLYuYSjgikSYiip96ZaxhFA491F",
  "key24": "2V2KPeTt95bbzGHb8uC79akK6fqqy5LXYhQUVZSh9sapjvz7MepzfnzbDSA3FAH2SFtqTNQd75S887EpgXJANsNs",
  "key25": "4R5o22JUmYNuxVD4roWKCrhtcWQ6ksRGvphi8mo9Pius9rThnT4ZGtLFVPDx9STxaMn4gBotW26LAtZ7dMLuNimY",
  "key26": "3skUbrbkFgPXs8zsTv4UVaX56SuDuukFrmroKBBVMFejngps84UEZu5H4DiGpRZRgMtNdL1GPyFbHvsB3KQ9TtQP",
  "key27": "5C7JTWokVAcTYD5YyWjuvx91rq4oCpc8TTL4GZ5xVuoiU5GNpiTmV7is1L8NbFWFDXEuNbiWWXSDxvkZ8HM9qHvh",
  "key28": "4T6df4M6Pj3H63gAkjAEMYs7tdmBPdGheAVM7JyXLYBk51PNkZC6y2k4DtuaG6SbDE2nW7nwZ5Qaui54tAVUsj5s",
  "key29": "RXQjHyaGoGuTsFAFYmv7s49numWpRvm9neKRhnLogfTaaDp2FM1DT4P26GVaZH3VZTXRyfXWCHKBgf2nH7A7JJF",
  "key30": "3QPZR5ZJj3okFTic3LXdsouPiyDdUSiAYuHfAjkBv5tPtjuEhcvkWQRJwGN4bLF3njNErdt4i3xpaY9yVmKkufkE",
  "key31": "4nwNWNiq8PS6ucKGnKhgNtfwDfLhXdic52xtJsCjprNmrZaT66G1dfZjNuZQhV3LxvFwbnySbmmYmo5Xtnh9F5rn",
  "key32": "4nDo7VBHPkpoa9D9rTZpDnwmkjwbFtvqqCnjHrmdHfg2i9QLYUuoptgQLXLd66JFF9gfcdcTqXe4mDBgWSDotFW4",
  "key33": "Enpuj62LkGhKV5UCWp6sEeGPmu46v7rGfWQYLMsrVLr6RPy46c4iXf8Q1QMC536n6SiuFViC21bw3XXgac4fdie",
  "key34": "5HbVQw1TRjbmbrXL8jT2xLYcU79WTL5SedAX1M2P99aewvAAZhvdB2pd8A2wiZEiFCSJ4TMmurCjio5ckguzmpu1",
  "key35": "3BzhUmThPig29vWUHxH7nxUhLmw6qbkFYKaa2qGEJvTpPgV5GceuLapE8pJoW4s6WmY7T8xUtbThUKLNLzPWmk23",
  "key36": "3vHMZqsN7nLnZX3V4bmabyagG1nqVNgwRkkrkRdNWxufwQM2JtPEtZGYcQmpkHCR3ZeJmckdCVRTnMmKMske9L4M"
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
