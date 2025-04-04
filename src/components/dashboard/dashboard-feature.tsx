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
    "3kkEb7qLu4MTUdFXrJjPBgwntjWoSXxCTkzNBmkpArXqXyof4c22WdUjphjCkp7Wmx9hvvMHyjxh2rd9SsCP6tAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xk4HxynwpUNqmQDujWGtEs5EetvijjGjiARNQiTiPpP893Uv8abRi2JtRF58trfJjyZy4PH76JAgBzXMzcEaseu",
  "key1": "4thhLXbeStBcga7RcLu9b6ktvzzvJUcvmrzNTbd7Cu5QTdPwiPssVRUYx5Zx4z2amJb1KniFRixAEekoYeTRGFbW",
  "key2": "3gv4cZFwckfH5KcKQG5E2niiNLEUxUMxc1r7DCZzmU9f1CkRkb9hafGd1P8kCXbDwmEs4bxLjAY2vWSEqADFq5dy",
  "key3": "3R9K4oeLYosM8oVCZYsgs7DrrMqiFHTFuKfnb33B2ZkN8jhwG69UxumZwEEwPEzGLRqGx4aFbBeV1igsFSvcNSoV",
  "key4": "bkMNMm2kzctcYupdt7LWAUWdnbbhHFhKyt8HLUW4TrD7HwUrU6y6xQzdJHonEr8MxS4mSGhZ92hNbwYTXRXwHCV",
  "key5": "EVgZUse63xbBrjLEY42TzcEfhjwXuLQv6GKfikbaAxx3E194oVRANGUyAW5ScMF9diLAuQvJPA83Kgp1MXJN8rQ",
  "key6": "4Z12EDS2dkPNmKXtCBphPS8Wy2yCj33QkJN7sQRKzMDvLRCyniecBbdU3TLG9Jgcnt96x2idLM4jxjkpFfaDoeRx",
  "key7": "3FmS4NnNtiTe2e5zBjqqunKxNJEy7guyd2pBuZ4kpSXf4zA6LqcvTpnULk9wEThSRdWG8GfsgVA5sUiP3rDsCWPe",
  "key8": "5rVcgBtW6LtcM8SBghwdvGhC3rHyaFHdbiH89BJygDpuW4v7Mye2sDFLctg8WkLqE4zK4BUZP8zgEfaqYXYmaeYn",
  "key9": "wixHWVaqJG8cQNSnHLPjH6MWt2uwRY3HYj2PhMpazNBwZoJEqQXBSqkwuKv7NaTqLvTM3ZdQ9rjThmUquUEBVEL",
  "key10": "3geDHGaZoejNdLeCHqYhZncUWaksyLkX8JUXzoxtFBo8mie7hKfYGWyWV7sExwoXdc6qPKj4w7kAdnQHM59SZPzg",
  "key11": "3eKzwskrQhYwCpZmeZwro7Vo3coMWUvepPV7kRpySVhgGp1Q9Ge8W85MaMTjTFyvMQdGhs49oQRFAKKGFibkT5HF",
  "key12": "4k4CW4K9u7Z76aaAwfgSgSRZ6Xe1kY64BnR5RUKK2wuZwPZMbZfZaRmBCrfd1jKVEx6b2iUwQoZLckW1tgyF6nXa",
  "key13": "5mFTfaPLxVdmX8aNRXRwd8d3u6nMsMQAdfd92To74oA68pMN5MR6GPyxLPqaR5Js8Z91LZv9ijeRec31rTtSY8SN",
  "key14": "3SkLcmPdA6JjcgVaZJtmRnpmZGDaKhgVZRQAy8acizoQyDz1h2aSNMk9yX5G6yX8i6pYu7Bcgs8sK3pgHntV3J8S",
  "key15": "3QGZ1uVrzCezjakn9X8W2bYzaTyMDFVg19eepvuHWByyPRwVCffL2nwix5qLECfW1yBdtSLgChQhnZBqFwAJn53j",
  "key16": "2Ydh6A5YyTngjssx2VoNLAhW5zpx6ZzfDWG7rAeDuJBqqM3QC2ngnD1cUM8XSLqTz38QRtDSfV5U7XH95M2Gg4Yt",
  "key17": "3PXhJzojge4vVEE9h5GtDu3iaGv9YSBSLxterkwEBvGRXgY4HUDnm6PuMGQuC2GC4BqzqoUVaLPgpGqH1aZmEHAE",
  "key18": "4QT8FCYVbzJjRjH16EUzUUWe9XReRGfNnJjApCJnHdbXQ2yg74EMBVjbyse9E277fdrCvaSyspPfsNpQ3ujGQy7K",
  "key19": "4PimQzuTsEqweYz8K3Uq4aJ16VNg3Gr1xmuKM1X3GkX4ZF9due3W2N28pFAwfBivhFnChN39DVcS2TKiRbEfyRNP",
  "key20": "29y3s9buHnkJnvrUE3ECKP8fHLzBFts2umV1s633YVgbCbDGoxPhF9HcSPRoZL6fGDWTU4ZiBpdi2rEqz8rFK45e",
  "key21": "4phUmr855UzWgWPqBFoX8Qx6ZMwkgebEkFh3fxAfwgDegtixyTP5YRx9cCck6N5ux1Sit7LLzam3q5x94CjescYH",
  "key22": "54AjDnZW4VLYzi1Ge5XKcxQvJ1zfNSsmxoxCyWdsAycaqNy5TH5qmn2HBMaJ3AWqbeQtVspDcaFfjtHuh3PhEJns",
  "key23": "vMqn1o83NTH5Wteuzr3b5CMM3BXq3PHUacqXzdSeXuLTD5YN8rTuBVJuxkVZNsQKzoKiZnRTtdrfyt5fn2xgnT2",
  "key24": "5ZFVdsfAB1jp48spnaa9e8T7ybHr5qSqxQzfcNDkhW7a1kM3cGeW8M7kvnAUJf2FvWJ9XpyUHX48h7WNwyzc8Huv",
  "key25": "4kmAcrxXsyEow1Yk4UvAucKVwCacYker36zKjdKNszvL9hmRxbX8t6udjr8n5wjPLRMnLNt8niVsMGkumN8XyMrY",
  "key26": "34tKE9Eq6MZ4tx4UV2Z7XcYsvXciJWreBnDR6xFBRgesMFMGJfnE4FriK8LaNixLePAwRDNSpBYiqfjPgssp7kSG",
  "key27": "3Bhihd3hoZMZiEe2s4UouE6Z8Fo4nnp53ufiAABDsSC3xh5SMnv9nLQFouzhf5KQ5ejvSHL7Xu8UsWQGwJDNNYVd",
  "key28": "43ZS1QNtk2kEGS6UjmCvCEqcu454ryu42JP9e42YRu9Eef8wvXBSqw9URtm1WfeRmFL3b1tQ8cYYJsbPrLQ699vd",
  "key29": "3YnjLTWQM4GrX25rmJSEtAL4ZE1GMtHMG9whAjC1gLsY2bTpAEtna5esqpX9Lcz9bJADWdEYYuE5ZK2Zgdb3w1ey",
  "key30": "fp5eeUkYMcpC4hmTAnrSYNtq4NczWMmnwgHSuZj5E4GhwLNAGrqhVaRseQUMoRwpnSWZNbeFVjGhsdmrMHD4q2j",
  "key31": "fkTJNnaWjor7HBi4WT5koiBK9xt6suyqu6qMF6gWyLcgChGZuJzzCRPuZ89hDadV7JMBQZaSXQrr7euPXSGpf9a",
  "key32": "42qh4L9Gm5PZkAEwJMQe8zq5fDjBbhBqToQS5GaCJstyvPJNJPfZsUUgo6G4nzqUtusW8MUSJkHxmoTEcxrsdqwj",
  "key33": "3WJmjwrTeTBHXZ6hdmeLKUK23b6dDs9XYgwyBcAWYYTVTdWPAFdnTz3bWf4ENLUu9xonGvi1bgHFX57t2Bepjkor",
  "key34": "5RajLQCKoWMj7vSw3oq8qu1xLxoPPX5netcF3ePQ4CrGYaoqpqHjsMddZywKVW1FG8nhAzbeYZf63ybZShRi96tJ",
  "key35": "32ZDnNokgZxb5p2xBoZUP9v92aA2w1kd32cj1ntwVdCfh7fvXjBKfN9x1S6Ng8WxC9E9Sj9dWqszPMXS1r9uRnTq",
  "key36": "2N77Ue44KGuFT7DMZq49ypxCq34XxqeVHUHr3edjHfXspNqouG3APhtkKrQX1ztzj3bDBG8SLQyRX3aY8UxY53ao",
  "key37": "5fCeeacBNwhXe3bq7gt3odA8xmNiGnpyu572PmXuNRGvBMdNSEPJ74fL169NhsGZr2TyiCt8bNVW8vdZ8gKA4pPY",
  "key38": "2oMmHhDLGBPMfZb5Bjf1N1XhUTXz2Sk8S2Zb9kGdzvzY39qStWJo14g49Eh8qdPdqxT8g4dUc6XtDSZxUd6ABLNU",
  "key39": "2KeByxFHcLMe78wopoHowG3eNoJG6SHL7C7RWzugo6mbUa19cVuUydVQcqVjaUBo8zwhCCSKwCeRGG3BEtwYDGRa",
  "key40": "zEE5nRX6H1wnk1oCkusJ6BMsZScu7uos8ft69fgTNqW4P52TaTEwrNU2SzzZYqh5MUBmRXJCdVCisrnpGjRNJVC",
  "key41": "5SSUKFk1jcNeXog1kpDo4PMk9g1KDzUhTtuc4YJiWAmuLHfyHYwv63JGbJZEhpe359K3QZRS5VUborNxHHMsoijG",
  "key42": "4jm6dVgXWhPDE7GHqtrnkiPyXHBxbNV54oLqapjHTuKrLUUnpirZKWLRQCcpYtotbi21xP75XuKbmwEL34SniEKd",
  "key43": "4RfFEPeiWEBQLhH8GeNSVoWUemTveKCzUrd6iMCwKJmttZeRJWWvfdx64NEUYas1Fm6obq6xvD2NNy8KDLJGXPWQ"
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
