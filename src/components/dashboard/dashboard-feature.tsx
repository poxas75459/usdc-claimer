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
    "zpMw6XKRRp1hkdvaqMqoyK989PSRDVGRg4FSyGLXKBoy7QbNYSadh4AMghZVT9smtF9Q367EQQw5KkEX7xhurq8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dSFenpAYhsxga9A25gHFSkWLM9WTTeN3DegjahSHeS18wnb4VjfhiUxVYqar9x5xPegQkR1ssGxq3cbnVvtk3rn",
  "key1": "46vRfX1vHztSWtpheLdt6EypqCc7Qa4ThWGj5DBfn6bESgsRwapodntr4kai7JzvrDyVRm3i3FzSbUWGdThiwtJM",
  "key2": "4e8LrTfrEnQHzQiubb7EVGuD9ioy4LmQhvYHNVJVLbusQGYTNPxoN7iEHueap9Z1XW5TB64BuFcmZG3ZyuRtTykx",
  "key3": "hiz9GyMEcoCkZNoA7wBfdSS3xmYshAVhqaRMHg8FDUQu4dLy6tLqkGAkvzdUm8GpmuxBtG3hyKaY7pBVzXnJ2g2",
  "key4": "38Docn1B9B9tM8FbDaDAhBNSVfabNeKJYVYrV5xzcAHtT1UU2c9CStaNcBbu6pLSykyPyznkaL2GJX3KxtzvYK4u",
  "key5": "5GFYU7WWQL2T69aKjuKRWzTZnjZHWX3QM5iEzHhjHbtZawKpmQRrF4LG6MEva81Q74sWHBUnKtNouQ8Xt4ySefJy",
  "key6": "dhDxnraqeZ14vGkCSWJvonagegXFJU1RC7ff6dTsFL9M1kHr1u8MeyskgsjnaJD4SJuawQLGQDdoJTWXzVzMNbA",
  "key7": "5rX8MBbsDyvKaThMbfQVAtqdCwSyfmjbKYpLhGuJMBtVs2RLuZNkFCEmKMrx7pswrWSLUHnFDoSme3jsD7D7MQ47",
  "key8": "22vV2xQrhQsbpMd2WSP7PCUBiWfmFTMfRaUkP1QLmDJ2jzDvwYedC8cmK5aGZxFwVb3gn7Aw8xitexnbtpAURDjM",
  "key9": "5BsJsb515ByF4eNR8FD3fceMRoCtiQg2gCPsgXDrwwRLnvBZmKRmSWADDv55aRUoW4enFcgr5uiDCefyRpJXftQE",
  "key10": "2m8ijTbHxc9rWZZvpgUPQNkYdw5sdb6o1jopQ9yPcGmQGHZxskiyJ8EXfoANtQuZUVd6UfCSyR3zcUQ6L32Nn9g7",
  "key11": "3fAgdL8B5zEJTKwpMMG36C6D3ZMHC8znk92NqXsagETdaMYN3PWeHjMqcnPpEne3bwWh8nmNaJveU52HiNBs9qp7",
  "key12": "LJXdAXNdkC3LM1osz95MZdf2J8Rt3bwGdEC25Rq959kPDybWa51SiFmDGXSqDk5wMq7mQGwVE4GinHSDHh4EzWQ",
  "key13": "3ENcnr2DhTLvVhhwH7CLa7J1KYKf5kSiPbk3mhc1258ZPye1ivgX2w96fq3yVcXCAtAPyWMpeBCGVmJHDDFWz2Zf",
  "key14": "2EbMaYxvdM5dr9tMxt7e5ZPgB8rBa8k6m6fXN9nnpihQd22MmewVd8XuapMnsiRmkhxNSqr2UbxYmAYjcF3pSXsD",
  "key15": "2TvzH73xTNnwSnd1BBQEg1yVUA16WoGBYjxJurLVbNRfe5y6GtcXbrC4B8gAxCf6yS79NCWEadiaSRuKGTD9ijej",
  "key16": "2frXY2rTXwzzBPGLzb9LTpwERE6edYtXQfQwUc58Xizb1iLFhYY8n1iJtR4jJ4TUhLpdsmWpB6FoewxPF2EPi8xS",
  "key17": "322cNhLuxZhgUwDDdxePYFxiihTf98kB6vwngqqvV7rY2bgJCcsVsf3dYvXHwZTWHzP7Z5Y1v3YiEo4v4dg4D62g",
  "key18": "4GGCwYAeVoPgodVduW1JPr2FszkAC4xURsT8zeFkT3fGk7Vk6TdgfNCzmeec8ww3QpKPAZpVAjQxiuUsBM4yxGG6",
  "key19": "3sqhapjYBmwK2JbXgJYxVq76NVf4Tp1vdu27uJmL7Cgg9AVSPxKhTGnjAKDKW4hG2m15u7WKiUdJXJys3g3BKU9j",
  "key20": "jhrQD1NWahQ39FbXjJRauxzcpHdQ7CPSRdGtaWHkPUsARZJXAXJZ1zay5KXP9i1cMPWjjauXjEf7MViLFJN9heq",
  "key21": "228qqy4SNYt3hLsNMMP2U4fiU3VmG182iUchFx2XECfXCu5tK9Zz65kxrksjwxL9pECh4SfyvqfR12q1jmjpnf4K",
  "key22": "5vDwny7tx7QPPPSMDbQV7GVSabCLWHuo4mMSZ2VhfQwF3Nss2oPd8gBAQ7KLNPEEHyK1RH8VXBsAFsfuwp2tP3KH",
  "key23": "22mkY6oKtiG4pmKo6NBVbSYiLchGtsBsnyUMxpxo8FYzju54PoD4CRq3ixWb2doBoqTBKF6jPXS2JzDFbkXRogcP",
  "key24": "2CoaRn74PwXAeh6sW1FV1s1oceGwVbLaXyjsHw5qicEFCzxugCJQeJQXrKtfxuqncVQzWVCScHbF297TxwWEGwrQ",
  "key25": "23s8oPaQJNpvW6jqtA2UBsQQ86JqeG6uyLoFdvHYJJuzieEEGtec2JxwMrqCZW1UoPMyUNt97fLZrosFnawM8uHt",
  "key26": "5bXTHWcG8m6nJzgR8KA4o9EwwkMYeEZNh7Wo28v6rHzTnJZNuEbFmVZZBcdzEM66XguNqHQ1DMZj2EJGCeADuEGz",
  "key27": "5Sf2VLNXD4dyxctk8iepmbBUZJyVQERhaU4gonRb82iTNCsU5zUem4aS7RfVZGz4UXZeY6BgkzTgoYdG8pPoEqCA",
  "key28": "32UfiwziJLQv25va7nZz6zxwBAEoTk8VLNq5pSHswHBuANxBmRWuVyGf2TBsJWmfYaH9g7qo52dGAezBguxGevRe",
  "key29": "2Qhidgtspe6g3Sq3UmSrn62SUYpPSHigxdpN6YRKUb3AKxt1c3o6MhVEnrHYv4zjPuDNUHazCeozZCDiDTC6qNBi",
  "key30": "2nUMoBx4ZLvsaSJ4WsiwZdQcvwq2fNQ1kWNBGYkHs3S9ryWoN4rmWPfSpMatCGxMmX2c4msGsoWYHYqSQYqaqAyV",
  "key31": "3xyhwCQGphffvqBzQpPnWHAtyDnfWtdF6HEiAuLCswkUDAwQspBUApd1dMf7wQ4G9dm9KyANUNyM61H8rpzFEeHV",
  "key32": "4DLE2ogtGVdqDV4URhZo4Hp4L88CPr2smovcNFgWyA5EhFw2E9bYA5VGdpAv6YYBUChSJLLFFmL2jTMLkcArc5gK",
  "key33": "5ui3Vfkd92NnSZi3DzDyGY5XfQkCiNop2Sme3LeU4UxP1G2eTit8buRtMUGPd3KTJqRYLeR7xZwMasuta7wWa6YF",
  "key34": "iHGni2bAd2xKDxGEM4B1vv28y3Rsaq7WfLuQHABQtvHq9oX3Dmeq7xBKVjtRMgaXrGcQLfabJ2bgSey5jEJ8Pro"
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
