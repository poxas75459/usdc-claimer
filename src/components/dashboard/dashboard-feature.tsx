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
    "2vaw9sLJdVWPgrzt3mTXh9LVQszc2ZHoptxmGpLux4LVZ9bLJ9vNeJF15KuqjiQtUAJA4WmSSDuCzry2FUE3rh8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29U4GzxP7ZEqRgd6tLP5RH8TVrjtCzoAbR6beyqkmjgQCDdW2ttJ96jrsUBoAwU1cRcy6U1s9t8kqJntSZDBWyPp",
  "key1": "2y5rNUVKm3djyBEtWGkiq9fWiYgryJiRHWA1uQnwfQwdxQzVJQad26HJiUPEyh1DRcTwwMWKUwFcgpqVbxrY4rrf",
  "key2": "5GoLqyG2VaTTkr2Wn18cm71ZwNK26268iN29ssPmJTR2wnqjvPogvRjrjqk7mhH9PwfMWbNDJAZTmToEq1FDFZsq",
  "key3": "3NRa6JA7w1gn64jDNm1YYSEG54EsjNvdxoLg1cv7arRqjv2W1dgbHKspPhZRmT9V1mWASzdCH7pHtsucKnzgvfeh",
  "key4": "25eXBmghJDrFzuEqMGeT2Es9xsC35Ddpmk98X9fjSVcyC3BaGyhm1i7oRJ6UDqrRwNBfXNUCt14FKVCxMwtJi348",
  "key5": "2yjkT6ycKXZ3J97H86td5i8fXYgYKrnfxWFwnQBFSnbqUv6Wi7Y1hoindLAMHJaYpqkEowEMidU9YgqqQ6T7drYR",
  "key6": "2L3RLfnsue3qLap97FmBQxMKeEKEGFBhVkGCQMPb1N3e7VyuCrDTbJFtmYVx75pmVC69btJmc4dToj7u6nQaSmax",
  "key7": "V1QW1BofYSBGWMVRLESkVoV3JrKvMaUUJAqtME2G8KaEL3ixkQwF51K7WnNSkHgtFrtMbQ6PzipGHQ98AxLtFGP",
  "key8": "RkGaPvJdaUs2XB9bPdychDfbFvHNffFkA2ipqzs6HLsVSa93Kg1B95yzJmJaPkg6Y6YEBa8ZBys3yDaKdZqo2oZ",
  "key9": "yhT5JiprKqHFQxEhhyzTLWszx4FNDdCvswMw8T4sF2nJkqwWCZGoMAFQr8NvBMqKtYciNggUjXjR1yq82pGpzVB",
  "key10": "5WTeKrdhjqq6K2ovqChE9Mgui6yXQriyoqEJHp3ZDZ1kJ6y8NAeZn5GWngdHb2WbFfvhwudR3TgzHnyxYwpirhUi",
  "key11": "3z97fqrZ36cRKNbpMoWefiCug4JMvJ4mT4oLG9GZVK9RntxCRmag3vLfg9QMq1ZQmnvWJJU3QFB9s2JTUub8xG45",
  "key12": "2PNrG4RZN7549Dm8pohQRDLuVhBdvWQP57kk56s2jzqo7ffpTvsX1Upoo32WjvkefQgDpTdWdM4tCGYvtE6N1wHb",
  "key13": "gsNukBunsUWNef7Jo67TVF1kF9PdzBY7oJHMMWDeA1Kk31gqK4RWQg2QRriLUMsMszRwodNbH3YoEBnKVrATChd",
  "key14": "48SnBULLhybFy5EUAFKJMRcKsqzJCvWn6bGBXwpgDiEUwDnkjVFEgm1EorcbD69YHDGayGNXg26uoE7LGqBZ89ZN",
  "key15": "3WwoVqUX9QHPchWBiwPyJuyry8pbgYzWzz5ZJbGe1y8CmhmtE2PpRyyu43yXnJ2G5CGzP5pZp4ra9PJ5uSimAUAH",
  "key16": "4LzAN7dA4xwCmzCfH1tXUpuCEDM5yvcu2RqtZoWNRuzkFvXNrQfZDvuM9NfrJjYnxj97sAkT6WWYa3UBBsVGHj3P",
  "key17": "1J9CKiw4uHoaXFRiLKdZWed2666wDb1FHDMwDTHkA6yuBHwrCYp6fyzJnhPqu8A3uteH6ivUAL4rSBx2a6gmnqv",
  "key18": "4kBstX6e7JeqbtJm6auAeApXmh9dbJdkadCzGhvAfokQwRkUQiMPgF5hiPqmd9u2ubCkC2qjWT2F66igA4swBrpg",
  "key19": "54vMnJZynNAMot62NpTxo6rXKkUQ5mFNFC1EYGtj2d1dmeSG8yNdxg2Tmw6XAVor9VaXgEJBC2z54Aj5CXenHTdz",
  "key20": "gQB983uyapZCgGLxQbVKYPSBt7urwuYYd9KQon2FahBrwE2XkHnJ8oLbCgsUfqkrKyCLYrMLFRa8gahEQpx7oCA",
  "key21": "3wFdnnSprbaYrMaN8DRUD6Ht7trXccezk9HRejL6dCXjHrofgH2agVWdaRux2CsghrKo43DvYQ6F2d3qMem1xacM",
  "key22": "3gPh5HJDJd6Gx5Lc9iaKS5FQLAtHDkqS6DunV5tfbzXRP77EtdchL3xFSB2ZF6zULEMrz86JYcGnjd3NiH5toCNu",
  "key23": "378dLeDbKkGkH8cBYxiQR57BbbqHkW41b6dAd6vwiVprR7BZK4vkFmhefnuWyLvSocTSZspJdes53hX6NifkzA64",
  "key24": "2jzrWmetjtb26WiLSWraYn5NvR14ieTQnTheEyCTSruTNygXRK7nqsBtc15vJE6xRTHff4aDcnYoKtX2NCdqx58F",
  "key25": "2khQX58EYRWTJwqcoutwS8FwZrJa2gAuPnnhes6EXtQvPuTUqzHJUd1gWem6a9PFj6fiCoXbeJHa8RX661kjHeNz",
  "key26": "4cHhcRA2WHifEEHah11cPKd2JkhTcpVbYHPPQwXBgkLFjrXGouHQHNxYugXpFvG1hvHEifxHk3FR7MmBDqFE5yub",
  "key27": "5K7RxXHNtpsNVrJ8Jztu8Y7Si7bhuK7ftgymdgzSCYSXRSmmqbeWqrzQuTjfdgMR5N33m2F7pms5HxH14EHYhkVg",
  "key28": "pkLy39CH7umxyQYLsBuRa1Fb5sCbadD3aoHiR8aqTdphFQTaAykSLWtNLoDeeyWTJfdJ7e22WLwk6NAj9Mi97Aa",
  "key29": "353WUpw5is1MWgi4Vm8K4NtkLRCSAU2wo8yeup7hi6WboBZM9gjFMV4DV4tMkEkTnWB666SDPmFrhsuLLfsHXun8",
  "key30": "4S4uKdyKXPfqoikEvv58rCX1Gm7huN1J1sb7X9JFL23GBJT41rS7zpq57NqjgCR6f1uSxXuHoTFGkrbMihcjiAjd",
  "key31": "46pXA3DBUBmNv8obn4TLRrHkg2vaKN24qcsxUHJLNGAzesRKPEaoUzYzK1AVzz5FL7AR5L5mP1xUaZy3HJxbGBRQ",
  "key32": "4C8TTibzWJEm9C4efA6XHQAbMEmrMPzhJsRR4E6PvvWprcdYa2sgRAV8FepUS6SwNVgRtyV3Vz5mWj1aN57B2aCm",
  "key33": "5hZLSAeXuWekjkPgaj9uK4tS79yJ2dK5i18Yqs5iHuw94zg5U8t76dEbP4ZmeR58QTHpaABn7Cr3ivEhMtEujodT",
  "key34": "3SPoGNMGTxzK8vqfXBM7sTFV8h8o1vYAcxt6AeS2TNbY5pmMG2UdeTBbUuSnBK7eQSDZkoUw3nY1RRiTF7jZCird",
  "key35": "2MHfqqu6MFQKEtiuD78WeCWZpvq6KoSLBvkEHQPGKt566NhQoxNnVFsEwK7cxVsDaKnVNuwDDmCVBUv9xtgLJfie",
  "key36": "41iZUuQFAonu5QkdqkgVCF3apHzjt9aEa3ZfN5Zg2evzMpgPKD6ib5z9J2Gu8nidN95Tu9sWNPB8rmmgEYmjihtD",
  "key37": "2Hw1pPbqZCLyV4gFEyfmTcr8R7kQnoEJ2istHuMfCHA1RhPVaiDiaD5eP2rHz9vjUPoJ2aLELfhQqSH9KdNfCUMA",
  "key38": "333zd2QaXftCqxte9W3ohD5EQUARZRK4JLD6AJ8MrdcJeQfffdBYwyCFXVwj77etA4MTHG69iP9vi2TcwCJPo36z",
  "key39": "3HkVBtwWoQdHrFnTXqrZ9kbJMyHzGLX3fZNm275YjUyx88yRggrDXCEDviKA653aKCd2Yu2r5eGQtQgh7XShfKCy",
  "key40": "526E8QDXdaxSAhXHtMsSqv37xXkDNsREhkVA1dVVFPZNbFik2CtwsSH57R1QgeLudTct4u49fVazQxn7AbUjQXag",
  "key41": "2cRqVLqg3dtGYWNLJvGd2KhG25heQWpvu1CFvut9N2i7c7G32Aj4eNMtLr2eLEmUFAiwyRuDWdbLp1bHq2TGFxzH",
  "key42": "5gj4v9KScRyAEPS5UeTim9Xrhg5u7pxEbhhAoeandkdYgZrMgMUQVxMwCjTggrHRFidJyNPFdbiymPArpXe6BbaX"
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
