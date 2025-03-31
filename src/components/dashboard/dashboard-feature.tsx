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
    "YMdXR6zbEJChEEpXGxoJCWQkP9rZ4ehtY3Ucu5mCsKCwQB99FQPHj7RLSznArnqLDkHYkydEPiMx5V2Vgbm5SQt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YmT3ZeuDu7QZoe4hbVj3EhQrfWKRhdyt5jUrQUczf5J8QoYgeevsTvySa5EEGiTKzNmEgywE6MbL4ftoTUUh5en",
  "key1": "4oSzuChTWsZaRxVntKLVdpZ6M728fZWRHeuBZww3EqC1RrNx4w8VUeWm88txCzejVxLFuf6nvqq9YVT5A83UM3x3",
  "key2": "53ggZDr9rFtUvZXkc77hQC1LDvyFppdx7f9og7P3UJcFxPCDttorUfA7XtnxGgrsaMtTmgmA64Qtu7BYM8S96GHL",
  "key3": "22dSmc91etLjDXZ9q3i58zpw9GcPppc34Wt1LpWbZz2j4GtnTztyC9q4djdZxg8qtEFPXnx6YioUegNxVE6WV7Ez",
  "key4": "27e7wwMBwWgmmwd4gBJ1Pte4QdBQXmDUSmTRvPpkwcVtjCWNN78CkCojYh2k86WK3aRmuWAz82CceJHcMs2cirFQ",
  "key5": "Pp2t8RnFfc8xMFQQXkRzGjJRGVtU7AX4ymcTMjpzAAK3qQhnRb269PbTHLYJeHGvC5itwCpbSJW88jMtEfeaYmC",
  "key6": "4XpaitJzJn8CuHL2HcJQxcy1XWhk1mnAEGraMgcwttjNJXqp4SKpUc7zfvJSFUzxoxXZFwScxsPjawbsatJJzAfB",
  "key7": "2J91nbPwCzuD5UCjqdWDiTeXe7Wzpww4w3hD4LCXySDLjNvvMADsBCnLRdZS8i8YiMDhQYYbAqRzYTcAqrTTD5fo",
  "key8": "XiKFJ9xouq6yNPHysnNnhyCdHjFXC91JPUne8LFcefFBYwtDwxa5ehv3XYkRBxq6YpD4AiRN5PpekKftnubDutY",
  "key9": "4Ab2WFDVrBCyGB1XEKxVu8sy3xpWHZFdepWNFcHX2NhgVVmb3ApQVeFE2NoPmNEtMumZ9Hjoxr7DT1yifX2ZngQ7",
  "key10": "4KkqCK9YGvanvjC9gtsf8C5s5odasEgtybgQuL77oXBwJMq8meaQYsAWzEdtXTMhRXZFHVHiRiRTZuktDQ7REExg",
  "key11": "fFvPUTcWW9tsGhE3mC4pDzyqDCK6EnFGW67GdytaZdWvhmMuYjBSknGkPKsguNUUL8oaYQt5KLcrejb3UN5zTGN",
  "key12": "52PMAJTXuXzyyNMhpH5wejCTyEut8Fhkr5SnfUZ588rBcXb7koN25vuZTPaX4UZE5aDSeHLxaRt79SdNJAkc3MpA",
  "key13": "3H2SUe95qXi1FEeB11AbuLVE4tX6EWJxPVkUVbUN8Wn4GKeiveSWa7WDTcuyDFdbXojFU3MsBQSCfLGv4pRi8CGC",
  "key14": "fo5xPxG3Vd8bPNCSpWqfCEuTWSJYuQStrtu8zseiJHsgWbo5s3SVZrzDFxz4ca6v3bWU2NwoJRyD5MxspofAapg",
  "key15": "h4xRZLdUGJebD6JUyozMuxGRNrP4kTMggf7iEgmuK5UWW7Ns5fdi3KbeLMSdMKgRpvt4eFVURqRsxyBjrsCp74a",
  "key16": "4Bmk2DyJe9rxiY87UfsmRbVSGNqgS57QZyAWxWR1hGANR2dipfrWHHYcnkTvMqeQQPeyFbDTEuM8J1789SzgAB5Q",
  "key17": "r3uRZzWokCiKS9p3SZ2Ekh17AqNExvhoDRSU3WofqoJh7bBrBSxY1FqqxYpXSS3Z2rt1B73vTnYWwdpgc1h2eYt",
  "key18": "5JUirkgnX4hcfbm5MC6jyj466kXoSVC1uftNpHZ2hevtiL678cT33yiKJ7uB1LXBktCdpYT6BNuPwz9uEyvEgbE2",
  "key19": "4w3WCMRYZYGLyhbR9g78gjkpETJ5JPcWFPZeLJVQrPPWRkgEirXKWzQwjhG8uGDPQ1utN8BbhgfER7iGuFeUanaF",
  "key20": "5ETLd7LJLEKG1fGQEQuwoamEQhsNVKQmqs5gMfBRr1QdaTacmDAveFV6C4gwhwqA6tLzb7h1fc5bqCwGMvNDGSV8",
  "key21": "3BF5iKzufDy5R3ps4efu2TEnzFmYWWAUEQ6LwLa5tVnh1S1X6vJ8XWbr9DyC8PiUmFWQdtwevQjbwm2qmMNLjXPt",
  "key22": "zYMP8AtQuLvKid1Xb6kBuj5C3VYToPexJ3TeLPHUnVeeaEW1kiPBDoPWnwp823sxcNrfmtAz6tyPiutwJKWDmcg",
  "key23": "4RPrd2JRtoXkzsHt7UqG6WeCdfXQybN5e5nvcKdZ2r5gnAARgi1GRt9PMfaQLq6Tw4rNisWFF3gSL76ppvuYcFZr",
  "key24": "44KKfU8Vw6oVgXUHU4iptGdS9BTMjBsnwr4DAtaAjswK2sUXixB8WMHcaGGbumuPAiKi1qQ1MF8abjd4wWkwhzee",
  "key25": "22oCAGiJdXXi8yugvcHcqcMKrgrhJM7BJwxcNWSjjHzdL4fuzCv8bVcbLT4N81YNttvAzpP9wJNWS88HpEPkExmw",
  "key26": "2DLPrAAQbotEb3PE2S42NCUMCkAhSJ6DovZR16dGMJZdwn6bxuQcF8ibwpJjda8LsYSUPwHtT2p8PfSYXrYeGXqg",
  "key27": "3z4LZwEifsQCzm9hpeUG1Knioos5A7zyT9MgJGh3QAnQfwHTLEss6gDMsSZQrx6saQXJGjGqacAo8QJv9sKPfx3p",
  "key28": "2mpzxYNaNutbSwNX6PSPq2E9WSPAuvqRSvgH7DyLW6ZQYc37uHEN649jfaFReux4D24DRwjWPhh67gNKH3nXEygy",
  "key29": "NZs2DWJtuT7gFLx1yHXd6vFNUuYAkk84HAPzoUQgk6CRSq1844haDYpt8Y6KeUHJrUayAmuNS8Z8CwcBn8PFobG",
  "key30": "4sbpzNcsXHzrntZQtqG1PGmuricjPhkfGQJP7AjG6GXkYZ2unCPQQhmvawEF8kiyU4EiPX6ns4x5HFdVKjV3Bsx",
  "key31": "4eRxPUJKrEVuEdmYam2pWHt7PhT3MZmtrLkUDuwambYPrfpG6sKvh5anWVNmd8QUF5u2GcrDFruishQbyAbfhrKb",
  "key32": "EdMZfuRZphG2hA2sxmYEcCNo3Bu3oDSqkyo9ky8KG7aSjzQyEJ9wVTd2i4ELpZutk2RN7SgxbHxGvpJPKgdFkHR",
  "key33": "5MBgA6kinkquin493p7VzR794fWANonyUCfeNYVcx6M4wwBpz21fLWxj2rxfw1PGHz9R7pcmUoEYc88Ev9ganN6v"
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
