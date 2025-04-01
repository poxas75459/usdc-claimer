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
    "h8iVjgAGZyaUBSKptnZxTiRTsNLLybNuaGEEjyNaf9uVXuqE2vhyMZ1fhyyP9n7MoW6nonFad3zSVtTAd7nhPNJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uUYVh31K32B4Yw28YBMfKAgG3ogPmPMKfr6BtdDt62egX7B8sUuG4aFbrP6VoUYRGABTJXppfKH9p2wLsqPF9W1",
  "key1": "4rxiHoMdzgnkihiwAukoNJeuKHubBCVS9mc6jeYngK8AEuahX2KMjXYaCK5yVZBSUu5XTCsoR4q5ethPDxcqxwf1",
  "key2": "nxfEof6HhH4qRVDCpLCzZSJMLPrqbkAKYQLMtpNw3fYtFZFkYKQC2dAg9eG4Ybv3R2cnRcZpy6qYynDqZFRnsbB",
  "key3": "5oVdX6DY8NUx1rk3fcepSTSgsH7LRTN3V1SnqaZ8gwXvxGUbdYM5b78H7Ea2iiUPY8YXzHrv6BnwXvR8S4Wh7kNs",
  "key4": "5LbxoaKtUGncQLThBe1pvq6fSN8D23WfRDSrhpH8HoCuQePoMhdtyoeFTKuLYvqbuejSia2PMyJYtCUshzzQQqoP",
  "key5": "5eE2nKRNkarFBNrP5x1YGYb8raujHWG7uz83hWZXwiUtCWGQVMw7nWvdoqRUUUwEYdcgr3KTNcPwerrq3bBhkzsi",
  "key6": "5AU9hUpnJrHbcR3yzL8DkNqvR2fUwLRF8Lp8McQETF2zeVAU9vDymAopxBwxCyASBXc4a17FqomEyQ9EfySJETho",
  "key7": "2xcTYrPqj16SCju5Vd4PLWYYfBkGC4FF6jGu56RNeteW6ding85iT2eBXNu5Ci3egWeNB98kKwxbAe6Ler1F4fiN",
  "key8": "3iiyXndgftz7GwwqEtzikadU5b7N9QHez9veS8m6gAg7NJ6KFCMSoC8c8ZpEaZu4Ldqc79bTizajiDm9FtPkTbge",
  "key9": "4dg4nq4aEv43kPyjwr5ppbogVgt2LM1hh8psxEhktE6yaLTrZ2jXG4cMtHzGKmX9uiRHshoK9jDtYN4Z9NpQ3Xyf",
  "key10": "XYzNRANJsoGbTu2E3gSBw3KyGxDZrNAcT3ssjPdkbcCxg4tuHubeVmf1UDSFtWoiKkLY1P9REuJLJy9FYkizp1X",
  "key11": "3Ui9ESRrfNvwyatZQDHkDLLGw8VH51Xu93neZ2WJwKA4UKFYnhCGg8VjG2nCXeErfhZm8BeN9ufwXPrRtzA7nCKp",
  "key12": "2M96wKb7V1w5Zo667LZiLviNbSb9ASHK7iesjSi6dCcEZUK1yjK1WyPcN3DSf9MpUWLmx4RhgZzg6CrideqbxRQi",
  "key13": "2xwvphTkATyBGAYs1PD9qVD7X7LrPXqdFPpnd5nXTBEjkwMr4ksVF1tVf8pz3ZtHdLgWEAUGyfHJXMvzn7XN2fFd",
  "key14": "2b5dzSX9Ff2aL1DAScMN2USgLHQ36JVi47vaxauXhi4qfSutz9DursqNt7BgFGPFLc4DyAjAdyqCozB3D3Xx8mSM",
  "key15": "3jj4XEQgWeuWhEP96htoCrJ2LFxs7hwjk37NPZUL2Kn5yvo6tt2krGcfAgETmueeiDmFPY6S4t37Now7VCAzHjg5",
  "key16": "NF3veke4JiwSAhKP8zFZaoFMSfMTw7RccD1wod7UkbbWkRMfif1WSQfVpTXk1Zmr8PnXYBG8vjE74AVpcEMLvuc",
  "key17": "HsCaB4L6mq4u4zAiBz5y8PvCg4c4wUzHhzNdLtPmfeCqQYz8rzasF2hpMcDSjRZ8CziDHPAZ6htA3xCYJV5vbyL",
  "key18": "2K8bNSLKwh6RtdDBXerJj67tdcwCfoKGDZhJzCcNiWGpBTF6cAHhEwZsFMG36oovLpCtLfYnrLb5rDnDn4BA5Cgf",
  "key19": "64Csc5NW4pU69SsQzHVmxFWQixmDVH9eMfBDN9k8pVkqB6PTm7cQAE9UidJHqRYrV9FCsvfFQGMNpZ8KBewZZhkX",
  "key20": "3EF2akVhmyK1913GGCpZotygqePGWsxREVSGVvTtWsZkevCXrv7BgnynFWtoXvn6rvSPfK8HVFN74dBd3ZAmYKZc",
  "key21": "4g1YA8SAmMY27nGkrNsUefT4e4vPHHS3Mc4LpGTmtsuQNjkvHxGkGSFMEqQiKyK6GES8QMtkZQvNfS18yAKU2Sdv",
  "key22": "3Fhgy8G65Jq7vN4p58GHb1PLrLb9JHpd79Dgjo9dy2bXQ5Na4RJriE4YHEQCyo4EhsKjQWNmvgUuhiauPHLemyh5",
  "key23": "3qk1rhimPp5zLTcbrynQ1XyiPV6LZ1ccRGzc6pE7QNZXoMTXEtoZz94D3G3D7X3KcyCFZq7DH84TUCCzE5eEpgCN",
  "key24": "2SKcc1Y8nbHyshsppnrmQMAX3MXrT3SVeF4KKT4KgATZu4K5SZR7e3S77PZQfHSew45m8M6W4D9LqKmRgdYRkjWQ",
  "key25": "LX1TqHo6oFuNR6Bvh6maPCAu4ab3Zjt6eeZMdHtABi3k6StkXHCCHP6TUQDMVvxPkFFcU83twDG1Tcu3ThNGU8X",
  "key26": "2c4NMzpc5Qv1NrtAinbddCR8oytSPsE3xQyzShajSLPE7xYyTnu3hpyxtoFxF26pNUXqfhu2d833Uy4rxjGwdYgt",
  "key27": "2czyRFRxMxavskhayGVepz6mD6QFo8Yzxh2mT6YXcNXcyCwm3NmX5LA42pR8iR3cfiEEJfTTqHm9tsKe2WSpGqZ6",
  "key28": "2nmjZ3VtQkA46XzLyTELwCL55j2icnZawV2DZJc724ksan4ymahVz21ofQoiBymWJkRN55kHcUkZgKqEGdpCAaCf",
  "key29": "kUwWfpCsdMrmzp5UEK4ZgZJxYpNKzMdXcodwvyBMZt9qaqtYtrUapFSNQxqgRk18dfiaM6fknSwnVzprGFM8LxU",
  "key30": "4r83WzHGKLUEr5cnFrjD3TaB1kRrqWvJD13JKqveLWs8FYtbjbAKJtsgsCA2TmfJSn4JGXUHWF3HsjmVjLq93yrZ"
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
