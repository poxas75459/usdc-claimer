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
    "K8xY3q3eKNAyg28XugAe5ascyo4kherYK6xFSFHQfSbfUDkz9Bo78fXH7hchkNbHu2D3QoZrduT9wE8kMubEvP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GCuZUGUXaoVn7v9pJgRqCBvixkDghJgcTpt6YPqVSeSncqY3XapcHiDXUDcUwRHxY5eCdHzt5RuLDpdGWsVia9H",
  "key1": "5Db27U6DEjGyb4wRf8iJffuwpVBL2Wfw71YUgXhTLr4QhM2NcrZnG6qizpVHyvnUGNv31EMcamhCqKKHwQHWkVbL",
  "key2": "5TtiATxDUL37GUCYcjPSMHFd2ssHnHX6yWWFvQ2R4VTgbZ2ojyZ8kY82NBwsCbaS5qdhdMpn6KZURDhysPYtijZc",
  "key3": "5Kh3LQFXZXf7ehRSAjD57h2Wp1sCV6hbTzbVc7MV8mYa5kD2a4F7qbsv8VQHKnUNg8vS4NSx3t3EVpd3mmN8HLMy",
  "key4": "bDQ1Trcc5fgUCZQqZdq4VcePSJGVdJgsQUM8jDHnrDuUM7orWekFu81VXoRD3cxw1oSgf3648W7QABUSoLnaMDz",
  "key5": "5KF3dUxoYK3iJaDrFeTVURCNQytWyzPNKtLeEi3NoGybm88Ah928CyMdWCRmRASqaUvaJ61yMoTZVjuVxuZjhCNv",
  "key6": "5kEeqM6ayBY2Av8vjBpA9wxRGBpFEVhumUZT2EZhErADANmjwah8oZmKBnuiBhr17rnjViQdozYevX58zveM3Lgk",
  "key7": "4SmE1sdjPrhxXsepLUK7cm4iE4TuUzGxHcGRdxGpsjyVjVz6w12BCxHpAoQkyETS6iMobsDDo6cdFpEZJd8BehUG",
  "key8": "tMuFhehZ2SX4a551Nff7Xn4gExxHN8oJkAomfppMrEEq2A8avVj6eDPLPoCrNn7jJ7HcDrReZuSi2Qv1gmSf36E",
  "key9": "3BYKUvF882ak6QDbYGsxYorTfTTf7uayTuX9GLg6kH4Quf5XDhy6tYdv1QqtNMgV5u4GYZqLY5NGwKcUxmg18pmV",
  "key10": "1wEhKYAe5BwNUR979Gd5hqHkrxMVo8S83bd8jH3HTxDocmjjjfpUpGqixLCb69gLpg3J8YoAadh4VpWiL6rW6ss",
  "key11": "3MVmMbFgmcpX4914pNvTRgAPfWTAwWFKPSiyk9Y7v54UPXwcugWfHbjZXMEXD4XKsTVowEcoYDZamyBAqeDbaXpC",
  "key12": "h2SbAHSHGnc3gtzfLXxQF84XA7Wuain6qLwPmk6nThYMnpLn2nrEkTnh1guf38xRKQ83S9DtNJ9tyfSSshvzPBZ",
  "key13": "2cySkgaxgFpAZcS65Txe8sAZeNNFUYQZxt9ikeEVbFEx92WxdVogRyLdz8HD9h7TPrUT8w9i96DqtAsmAHozX9vZ",
  "key14": "HJVW4z7374NXqVbs8ZPbJ4WgPGQYJc5ATUhUvCRNXEJB9wgbgdAicw1TGeSj54LktvnT7niW3myHZCpqBVQ7zea",
  "key15": "4GbjJuvh3Yd2oDm8KbXPwYttX27oaM2R3Fv7hUpafz3HDWqouxYCqAAeWKKvP9ewmdYoTue74uvfjCPZcZqXB5Vm",
  "key16": "5YXwQTDTUHTjuvwJY3BWDkxPXpQLURBpHwiAnSfPjDtu4UTBbDayjo8fWDd2dEH5DBDfQbF4389F9MXGfY2ai3Xz",
  "key17": "4HerF2WBWrSSbJcnR25b7UrCuCJQujiJyiuoCpgMPK4KTSM6G1C4ak9CofSqniBoMxrpnbMXyN8PWXcs9eVSaFH4",
  "key18": "4GgUNzgf3tJyNbduPdW9g9WLSzHCwnC4N8Ssgb3d4FPZALVhpag3vBcMaJcsjHyw9Rfj29ejAb2N3YeKCksRYMyp",
  "key19": "erCdFEcZKewhEuEZNoBv736Q6a3YdugKDRRxac2kAvTjs4cM3fLAvrdJbztFAuEr2F7fvcabFiBLReCDc4YN4Ud",
  "key20": "2BVx4eDSt2vRP8vyjT9cDM8h1as5Dhof3Yg3A6UmaayHwTs1eNby4yQm5eNQfnrCKKMK66eU1ASqWUUyhiEUwxdU",
  "key21": "4qAyjnaMpRhn3Fc54Ts6Csfa3GiR6ZpAEn3Jt178LTZzjEaAcMn7goexrYN49FfzPBroMTkSHmBkUFrWdktmV2cs",
  "key22": "2db6rFyqDgS9dzdoDf5H5TkxouJuuxakECizFCJt6Fitw1R6AfW8MYQAn9W9euJvLoVYYzngn4qJqM1BXucETJRa",
  "key23": "5wGWazyMhV53DUQYc3GZCGyEwLrKfK8RH3UWrYYaxPQfQBkA2M9jhpPeMu5V8tTq5M823A9k1VuxeftJ8hDv2nn9",
  "key24": "3E7h3dDFkky86N9nAVWt5ebGGTGJCCkiPRrNxfFS4YEhfTBVKomV5m98PC2jfnzS2M4smo5MvWX5LCcM3enimcJ2",
  "key25": "4hHxx29yWMfGV6pgHh3uKp2SE2JoMqtWunSamYHeqKYHoGjFSdcTyrGK2akSeLUbRJpAB2tsn3We22NtfGzAvDbK",
  "key26": "39S7Cd1QiFpzJmaaVrbEnXCtwobUTuAMZE3ZnobTmypPaDbkQmMtRBpHxc9ek2DPw9jjJNLFrc9GSZ2Ut42vFdxD",
  "key27": "sh629XJKCQfJM5jEGuRQq4AgzpKhAkk8ycFa3PVL5tXxApYrhDC45f83nEQskyvYQS5aA7Ky9PY7NhfinXt4g2G",
  "key28": "5Q9e8P8XFVHYEx8WFFoh6tN3wVnePZcapHd99E5FMUEuVGkZ1y8mXzeuiaAuDMQct2HKrps5Jbe5A4Gz8rYNbsak",
  "key29": "4RUGTbGAKKnQZUR6euYYN2N9fPHS3YhSwhwwcBmoKSSAHSoKKjDo4sGXcPaaGpjZH9xHKsR3WRaMj6EDZbSzTMAX",
  "key30": "2EvS369MFfu77ADGz9Yq5kY9wYnUCZSBnmxYhgeHhigo7iKwtve3t5vRGMPk9WF4WHxUos6gZSehvpVpSjjeLTvz",
  "key31": "2VNzmRRR84hrjsuqtpwzc442EHn35oG23875tELfWRsLU4PWxPXFHBaKBR32wwjMPVxHYqQuGt2QSjUTiwetvvn",
  "key32": "2usbZ1VWScgW8rQQmbKeh91x7rWaViKCMo8cpx93vqSnqWk1vyvUgee3isLNujkNDsasFAm8k3aCTu6fXdQ3rkfP",
  "key33": "4EcG5e2DSME1jitkFQ77J2WzgztM1DsRfU2RhDikGUEZz1d6vcff7x6uJpM9ZEcyQ7rRiLyeqgSFWwgd3zqMo843",
  "key34": "8Sde8FzXkmb8zd8m6K2KXuFMyc6cVDB6c8kE2wnCGpiZYXg27rS4LzfhpdjRBz1meN17VQmvoB4fzHHA5sRrZsi",
  "key35": "3AeeHU9CZnJkcDXFnHYPLSNxGrk11RuSEVGKw1CUS7pf4ChoHonUFFQLWVwKpcYWCVvRcjeBrDbYYsiJ1HCC2vHL"
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
