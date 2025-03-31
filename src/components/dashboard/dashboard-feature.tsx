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
    "3kHARYhJBqdVrrqQDE5JFjZR4A1Wv88qZSDYAcqQFGQj4nCnVr6xfyTVuQHTS4Y39pjcEpkFEwpGtsKeSByr1ygg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55zqfCLZoRMZyCwjfaARWg7XYgnURcNEadmYuoE7uRqsD9r44e78mLmTMwvZRVvPhyTdagzmN339ra5TUL2sh6RD",
  "key1": "26iBCathxxwceFR3vpN377YEdKPxwXvbWoEocs9JhSfvmWq97ff88RJThxF17fttyGv9tkZYadi3MKMfHcJJwrBN",
  "key2": "4DGzvuzjqzg23SeDQ34anKdp7HMVU2rWdGkRxKLT9WbnNabPobjPx6KeogYrH9Wt6y7mw8FFnELf34s9b72WH5sw",
  "key3": "4NsEzZwU4bEMMpjPwepLFHWk9bF6Tgy2B2Da5LfesX2Hxo5n2PYuzB2nkBYQhwYa5LW2XhZvYcwx5vJipuy19xP8",
  "key4": "4Ysg3h2BeREv74wWkGFMuX7zPDQ54qGKmJQn8dAMzXGDrUR3uDCK9TTmRwR91mBSFoKs7pf8VuSpTByK2vbdfKxn",
  "key5": "QRhBTrHrmb7obE2xnkn9KRDK27dpS5LfGgRsBA3Rri9XKMBNi4BJbLWPTF4D94Jk3ooJKUPNdruq6oN8opMBDHX",
  "key6": "2HHtqZgoj6pxFZCz9JesoKtSM4rPsyUMeLppZHCowGjZycEUwaJYPHbim1WLVcUns6hkHHNAAv6sWxDXPo2mpQNZ",
  "key7": "3ow7HS9LmYComZWoAJJWKLUdHG5XvFwikmgSY4UcJMjdLjqhv1DQkkH8FUN5Af8GkHDc8ZP4GafTg9Eu2AMqGtHE",
  "key8": "37CZuEnFCqkWPsqXngG5fbnFBm38XRH52wLgJx87wbagSunCrUrrMj5umAuX8GhpC9nMq1KX5tWUHdF31C9mifie",
  "key9": "5nL719roB4JzB5UV5ZqwcTp4w8RMi8GsvDwxYU7i5eNkrVvDL8hN3P23epzE4JFcRXirG2Gzq6RcdmFSUoqmB5MH",
  "key10": "5BnP81kfxuAssbYcmo95rcHXsqnQBWuA48ovbjMeSF8vtKm7sVriAZ36zgLKp8sCQwHYR96VJBJmvziM9Hrwce2G",
  "key11": "42NsT2J4euAZc5Qt4jdcpSHKNcFPQbFnBy3QY8JBSAfMiNnw9MmtnzQoojHjBfMYdFMZ1ycaGondVPx9v2QBndHm",
  "key12": "cZyoHbCdwXVGY9Sguqkp5GpBMXtvoddhLJz4Qae3gtyunnBbDpReZK2ep7JnCmeRhvQFvpmD7MUU1zi4h294fSv",
  "key13": "3EYemPoZcYQVucqcirVaPiMUQwYPHnxPxCdte9FqSdQuTtDvmzUuck4HzKnmngHvTMmnXnUrp7bhzuFMMVyzuDqF",
  "key14": "2Jvam9BN7BUwvwd1jAumwive6omdvXfspgacsXayB5w2rgFxcmfGyFW2PpKibVK2x2gzRxaAKf8xseCXj6KWpDtY",
  "key15": "2WkiKUQXFfRhzmZWbx93zL1TW55QEY1HtUxzy6BevEjWrR6coYEVJe1i7CUv8BBWzKTGNLv7xntsvmZByF9ebkCk",
  "key16": "4TCWsYk9hbz72sR4Q7CSC1Wfn3Fa5sq3zKFgFny7jtS7dXVVT33ZjFwSE9EXRw1BGEL9AQs8i3VSBNTKsNbErT2w",
  "key17": "2VdWqgSW7dNmvmDtHs2ZeqAHyPNxbneqbQXWgL3YW7Hd2Er8ni2XaAYGmhi6D8DSjErx83ESfJuH9WeAdpkvW7Ft",
  "key18": "5UBXNasSybyr2V1nooCiKW2k9XdXcXY9qnWyveBwJdnmzp99FtEE8zhEuh4ZRt9LyUAdcesxzwFpyNqr7u3ucXzf",
  "key19": "bNsqRWofGqezGwKZwtUSwScgzfu9AKAMZNMr8HQZ6q7kRzriQsePtrTdTLXy3cMLYLkJh8mm98NtJwWpgd6XiZ3",
  "key20": "4pfxGXGpgZNFUW7mZnSBSAJqptLbirHcfQjSqKx9dwCpAEVmBc6oDnxQFGqXgzN1KxSQbAx6L1nAm5NW7k3C1B94",
  "key21": "2RYQU4ENVCTJu7a4REsbtGpCCVBBqM4pvUkbnmaFv7PnYbcghDcegtyTW13wUK64GjHeMa5XmUCq2a9bCuDJxGjV",
  "key22": "3nKVRZdWeQTRvEXDwYbiuYnwmjf5FZDoxL7xXThqpTNFyeEQDWueWyTDVMij5Ac51UwLCXspiT4XdqfwfDTrRJi6",
  "key23": "n3uCugkSbK7qjUhwnfep5n89ZrT6GauouigE1SdgCGZWTHa5sGjxPW7ELnzt9CfjRqbZQcZ4SL65fUmwzmYzL9T",
  "key24": "4was3qNz87uSsFtHKPeUV4M2Z2UWkfqNrHRQiWZhDVpReiMBC14cfnqLEek8xkTu6v4WnFySoJUttwP2VaotesKv",
  "key25": "57pDwxVX1gUwyCvao9AKLYfcK9EXc1JFoJBNPbhsgVB99DCbupKuhRdMCetuZwLXfj1D592hKaf1jnJqbtMrSdYY",
  "key26": "2kHQaCsC6QrFzMuKknrHprmocK7Si9eB9ccbV7kvEV9eMxt9kEUxdGrgza3LUuDAdqMZiWfmpqVysYmaFWxiQk8a",
  "key27": "3MS2gvCwCf4VQvHvbU1uvwugVst52MqwgyEHz6aEYm3HonWc2kYbVkMqUvpPXvx26JrZX8bZWpuNa8Y5UUrYPRT3",
  "key28": "hT6NXocMUvBzY6qFWvdoRr9jtmvBsSCzx7sxUcnM1diYWDxtMdy3N8Ey8rkTH3WDWJ2h3JSHKxd2ZSHba2RKhyC",
  "key29": "3T5KRKHKsgKYaYLDK6TLGszwp7thpaVjhcSZ3HRyC8jsgRqnFn7Hf2E28pjNZxBho2fkjnN1BjDcAMab7S3JkMik",
  "key30": "3xRfv8PzVn1qsYarWyURrW7UVHC6tM28kSjBoPeuzyn42Va6RWdLMxsmMtcQGh9shGwoDrdNti5YFiU7SwSvDiWN",
  "key31": "2hg1HAKyRwdGgEkBYqmSXVMJB1QukNuWpj6ZzsANjNR51RWXkxXfiv12NiMaXEV725Kd1c6DTTWfgB6muogkyQrX",
  "key32": "3ptnP1wK2c9eFcF4SV7kgQiMTQ63nJ5UJdsQ5Bws1dC4hjxx8Uv8JCkNWpfwwFSoNL6Wm8NXTjmTqsoSZKhVKm5P",
  "key33": "2xTgmCAqbTAo3SzVShi3b2DLMc7jaRcdn6qGmf9t94SZvjN4PDzMMHnaQQaEfqoMYhoJKs1JkpDu5o9MzQxsmUpN",
  "key34": "3TeCRLUj1cRgahTm43pSrg8HbFpn8pXcuuMUc9vLdCEpcZnhQet9VCZy1sRaBcXcrihVLSivsSWLTNgs39Nj3rde",
  "key35": "5cdov4JLk4vyL3czGuacDEYc1r5Y57t6vKkRyByc7jzCorjtE1spBWMpGVawjqG8JYCaeXtaqf4n4BUQHDeN463a",
  "key36": "24kALbKfYbCvMDx1ziuGFRCqyDod8Uab2EkU4r25ujgQowULH3NRJVkDQcZUjUBPCF5vHpxh3Tn1vGt8hkUBPd1v",
  "key37": "5CDTFe2m3HtddRGLNYpZvEb6qxxA2CBG7heoaXxYwYzfiPgFK8R67JtRFmBHYiSHRH7tCPFVAYerCkHyEtVrAfUZ",
  "key38": "4gxxmTekXsBqWYLNwLRfhU1f2nHwK5ZXpAANECj7yq7UnaYGiUXdnb9BM9k7ts22uuGnpXq1L1JuMoiULhTBdX4Y",
  "key39": "TiSLVKAjGowp9ohQw9ewoJCnPfpLqnXiLg1TvHDNm6G1jxatwn2io3JDnzUxPUASysVrGLQxNe2mZsimd7WUsmP"
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
